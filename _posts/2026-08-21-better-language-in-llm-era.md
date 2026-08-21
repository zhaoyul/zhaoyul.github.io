---
layout: post
title_zh: 大模型时代更好的语言
title_en: The Better Language in the Age of LLMs
---

<div data-lang="zh" class="active" markdown="1">

前阵子我在调试一个 SCADA 系统。画面上是泵、阀门和传感器，底下是层层叠叠的联锁逻辑。有个 bug 的触发条件很刁钻：搭好几个联锁回路，把一台泵切到手动，运行几分钟，再切回自动——然后某个状态就悄悄错了。

复现一次要七八分钟，点几十下鼠标，顺序还不能错。搭场景本身又是另一套繁琐的多步操作。也就是说，验证任何一个修复猜想，门票是十分钟的手工劳动。

如果你最近用过大模型写代码，你能猜到接下来的剧情：我把 bug 描述给它，它看着代码，猜。它猜得头头是道，但它看不见程序内部。它和我一样，只能看着日志和截图猜。

不过这一次，我手里有一样不太一样的东西：这个系统是用 Clojure 写的。

## 一个乘积公式

这次经历让我想明白了一件事。一个"人 + 大模型"的组合能解决多难的问题，大致取决于这样一个乘积：

**P = I × A × H × R**

- **I（模型智力）**：模型本身有多聪明。
- **A（Agent 能力）**：工具链、上下文工程、任务循环——包裹模型的那层壳。
- **H（人的判断力）**：知道想要什么、认得出来什么算对、问得出正确的问题。这是人的品味。
- **R（项目 AI 成熟度）**：你的项目对大模型有多"好上手"。

乘积很残酷：任何一项接近零，整体就接近零。再聪明的模型，进不去项目，也只能盯着黑盒猜。

**I** 和 **A** 你向 AI 公司购买，每几个月自动升值。**H** 是你自己，只能靠经验慢慢养。而 **R** 完全是项目自己的属性——四个变量里，只有它是你今天在 IDE 里就能动手改变的。

R 不是一个单一的东西，它由一组项目技术因素共同决定：

- **V（程序状态可见性）**：模型能看到多少程序内部的实时状态。
- **M（程序可实时修改/可测试性）**：模型改一处代码，多快能看到效果。
- **T（单元测试完备度）**：AI 改完代码，有没有一张安全网告诉它改对了没有。
- **D（设计清晰度）**：模块边界清不清楚，改一处会不会牵一发动全身。
- **C（规范性）**：命名和约定是否一致，模型需不需要重新学习你项目的方言。
- 以及**项目规模**：同样的设计水平，十万行的项目天然比一万行的难伺候。

注意这份清单里的角色分工。测试、清晰度、规范和规模，业界已经讨论了几十年——它们对 AI 友好，本质上是因为它们对任何新加入的协作者都友好，AI 只是受益者之一。而 **V** 和 **M** 不一样：它们并不是新东西，REPL 驱动的程序员几十年前就有这个超能力，只是那一直是个小部落的秘密。新的是使用者的规模——AI 也能走这扇门，而且它永远不会厌烦于把状态打印出来读第一千遍。正因为如此，它们被谈论得最少，撬动力却最大。

这就是 Clojure 在大模型时代被低估的原因。它恰好把这两个因子点满了。

顺带说一个不太重要但有趣的点。有人用 RosettaCode 上的同一批编程任务做过[一个 token 效率测试](https://martinalderson.com/posts/which-programming-languages-are-most-token-efficient/)：统计同样的任务用不同语言实现各消耗多少 token，Clojure 最省，大约只有最啰嗦的 C 的三分之一。

![各语言完成相同任务的平均 token 消耗，Clojure 最省]({{ "/assets/images/token-efficiency-chart.png" | relative_url }})
{: style="display: block; width: 100%; margin: 1.5em auto;"}

这反映的是 Clojure 语法的精练——token 省一点，上下文窗口就松一点，会话就能长一点。但别把这个看得太重：省 token 是量变，V 和 M 是质变。再精练的黑盒，也还是黑盒。

## 超能力一：程序状态的实时可读性

函数式设计有一种倾向：把状态和代码分开。Clojure 把这种倾向推到了极端——整个 SCADA 系统的运行状态，就是一个巨大的、普通的数据结构。泵、阀门、回路、模式，全都是 map 和 vector，装在一个 atom 里。

这意味着什么？意味着我的 AI 助手不需要"推测"程序的状态。它连上 nREPL，直接把整个状态打印出来读——没错，可见性也是通过 nREPL 实现的，和后文要讲到的即时修改性共用同一扇门。那台泵当前是什么模式，哪个回路在什么阶段，一目了然。

对比一下常见的面向对象设计。封装是一种防呆设计——它假设你的队友（人类）会乱动内部状态，所以把状态锁进对象里，只露出几个方法。这个假设对人类团队很合理。但对 AI 来说，封装不是保护，是一堵墙。

还有更实际的一层。类在源码里只是静态描述；运行时，它们被实例化成一张庞大的对象图，状态散落在几千个节点里，靠引用互相勾连。JVM 和 .NET 的运行时其实都很灵活，反射、调试接口一应俱全，理论上你可以遍历这张图。但"理论上可以"和"实际上可用"之间隔着一整个生态：没有现成的入口能把整张对象图打印成一份可读的数据，你得先找到图的根，逐层展开，处理循环引用，再祈祷每个对象都实现了像样的 toString。

更根本的问题在修改这一侧：对象图几乎杜绝了实时修改的可行性。你能编辑的是源码里类的定义，而系统里活着的是几千个早已实例化好的对象——改了类定义，它们也不会自动获得新的行为。想让新代码生效，只能重启，然后重新搭场景。状态读不到，行为改不动：OO 程序对大模型是黑盒；Clojure 程序是玻璃缸。

那个刁钻的 bug，最后就是这么找到的。我让模型读出手动切回自动那一瞬间的完整状态，和它读出的理论期望值对比，差异自己就跳出来了。没有加日志，没有打断点，没有复现第十一遍。

## 超能力二：程序的即时修改性

可见只是第一步。Clojure 的第二个超能力是：通过 nREPL，你可以在程序运行的时候替换掉任何一个函数，立即生效。不重启，不重新编译，不重新搭场景。

而那七八分钟的复现流程呢？在 Clojure 里，搭场景的每一步操作，底层都是一个函数调用。对人类用户它们是界面上的按钮，对 AI 它们是 API。模型把整套多步操作按顺序调一遍，几秒钟就把系统推到了 bug 现场。然后它改一个函数，重跑一遍，看结果。不对，再改，再跑。

注意这里发生的事：反馈环从"改代码 → 重启 → 手工复现十分钟 → 验证"压缩成了"改函数 → 看一眼"。

当一个操作从分钟级降到秒级，发生的就不只是加速，而是质变——你会开始做以前根本不做的事。git 的分支和 svn 的分支在功能上是同一个东西，但 git 把开分支压到了毫秒级，于是人人为每个小改动开分支，整个工作流随之改变。测试也是：跑一遍几秒钟，你会每改几行就跑一次；跑一遍要几小时的集成测试，你只会发布前咬着牙跑。分钟变秒，改变的不是速度，是行为。

模型也一样。验证一次假设要十分钟，它只能少猜少错；验证只要几秒，它就敢不停地试。

## 两个超能力相乘

单独看，这两个能力只是方便。乘在一起，它们是另一种东西：**可实验性**。

看得见状态，才能提出有依据的假设；改得动代码，才能立刻检验假设。观察、假设、改动、再观察——这是科学方法。大模型在一个 Clojure 程序上工作，像科学家在实验室里做实验；在一个看不见、改不动的程序上工作，像考古学家研究遗迹——只能端详不能动的遗物，然后猜测当年发生了什么。

回到乘积公式。在 R 的内部，测试、规范、清晰度决定 AI 走得稳不稳，而 V 和 M 决定它能不能走进程序内部、在里面做实验。语言的选择不能让模型更聪明，但它能决定模型的聪明有多少能落到你的程序上。

## 一点冷水

会有人指出：REPL 交互不是 Clojure 发明的，Smalltalk 有，所有 Lisp 都有。说得对。还会有人说：动态类型加上一个会乱改代码的 AI，是灾难配方。这话也值得认真对待——你需要测试、需要 spec、需要纪律。

但这两盆冷水恰好说明重点在哪里。重点从来不是 Clojure 这一门语言，而是"交互式、数据导向"这个设计方向。Clojure 只是恰好站在那个位置上，站了很多年，有点寂寞。

## 语言的读者变了

编程语言一直是为读者设计的。过去的读者是编译器和你的人类同事，于是我们为人类的认知局限发明了封装、抽象、层层防御。现在多了一位读者，而且这位读者的阅读方式完全不同：它想直接看到全部状态，想立刻动手试一试。

Lisp 的这些特性是六十多年前设计的，在漫长的时间里被看作怪癖。有些发明不是错了，只是来早了。

</div>

<div data-lang="en" markdown="1">

I was debugging a SCADA system recently. Pumps, valves and sensors on the screen, layers of interlock logic underneath. One bug had a vicious trigger: build several interlock loops, switch a pump to manual, let it run a few minutes, switch back to auto — and some state quietly went wrong.

Each reproduction took seven or eight minutes and dozens of clicks, in exactly the right order. Building the scene itself was another tedious multi-step ritual. So the entry ticket for testing any hypothesis was ten minutes of manual labor.

If you've used an LLM coding assistant lately, you can guess the plot: I described the bug to it, it looked at the code, and it guessed. Its guesses were plausible, but it couldn't see inside the program. Like me, it could only guess from logs and screenshots.

Except this time I had something different: the system was written in Clojure.

## A Product Formula

The experience clarified something for me. How hard a problem a "human + LLM" pair can solve depends, roughly, on a product:

**P = I × A × H × R**

- **I (Intelligence)**: how smart the model is.
- **A (Agent capability)**: tools, context engineering, the task loop — the harness around the model.
- **H (Human judgment)**: knowing what you want, recognizing what's correct, asking the right question. Taste, in other words.
- **R (project AI-readiness)**: how hospitable your project is to a language model.

A product is unforgiving: any factor near zero and the whole thing collapses. A smart model locked out of a project can only stare at the black box and guess.

**I** and **A** you buy from AI companies; they appreciate every few months. **H** is yourself, grown slowly through experience. **R** is entirely a property of your project — of the four variables, it's the only one you can change in your IDE today.

R is not a single thing. It's decided by a set of project-level technical factors:

- **V (Visibility)**: how much live program state the model can see.
- **M (Mutability)**: how fast the model can change code and see the effect.
- **T (Tests)**: when the AI changes code, is there a safety net telling it whether the change is right.
- **D (Design clarity)**: are module boundaries clean, or does one change drag everything with it.
- **C (Conventions)**: consistent naming and idioms, so the model doesn't have to learn your project's dialect.
- And **project size**: at the same design quality, a hundred thousand lines are inherently harder to serve than ten thousand.

Notice the division of roles in this list. Tests, clarity, conventions, size — the industry has discussed them for decades. They're AI-friendly because they're friendly to any new collaborator; AI is just one more beneficiary. **V** and **M** are different: they aren't new — REPL-driven programmers have had this superpower for decades. It was just a small tribe's secret. What's new is the scale of the users — AI can walk through the same door, and it never tires of printing the state for the thousandth time. Which is exactly why they're the least talked about, and the highest-leverage.

This is why Clojure is underrated in the LLM era. It happens to max out both of these factors.

One side note — interesting, but not important. Someone ran [a token-efficiency comparison](https://martinalderson.com/posts/which-programming-languages-are-most-token-efficient/) over the same RosettaCode tasks in 19 languages: Clojure came out cheapest, at roughly a third of the tokens of C, the most verbose.

![Average tokens per task by language; Clojure is the most token-efficient]({{ "/assets/images/token-efficiency-chart.png" | relative_url }})
{: style="display: block; width: 100%; margin: 1.5em auto;"}

That's Clojure's syntactic concision showing — fewer tokens mean a roomier context window and longer sessions. But don't overweight it: saving tokens is quantitative, while V and M are qualitative. A more concise black box is still a black box.

## Superpower 1: Real-Time Readability of Program State

Functional design has a tendency: it separates state from code. Clojure pushes this to the extreme — the entire runtime state of my SCADA system is one big, ordinary data structure. Pumps, valves, loops, modes: all maps and vectors, sitting in an atom.

What does that buy you? My AI assistant never had to *infer* the program's state. It connected to the nREPL and simply printed the whole thing out and read it — yes, visibility also comes through nREPL, the same door as the live modification I'll get to later. What mode is that pump in, what stage is that loop at — all right there.

Compare with typical object-oriented design. Encapsulation is defensive design — it assumes your teammates (humans) will meddle with internal state, so it locks state inside objects and exposes a few methods. A reasonable assumption for human teams. But to an AI, encapsulation is not protection; it's a wall.

And there's a more practical layer. A class in source code is only a static description; at runtime, classes get instantiated into a vast object graph, state scattered across thousands of nodes wired together by references. The JVM and .NET runtimes are actually quite flexible — reflection, debugging interfaces, everything you could ask for — so in theory you could traverse that graph. But between "possible in theory" and "usable in practice" lies an entire ecosystem: there is no off-the-shelf way to print the whole object graph as readable data. You'd have to find the graph's roots, expand node by node, handle cycles, and pray every object implements a decent `toString`.

The more fundamental problem is on the modification side: the object graph all but kills the feasibility of live modification. What you can edit is the class definition in source, while what's alive in the system is thousands of already-instantiated objects — change the class, and they don't automatically acquire the new behavior. To make new code take effect you must restart, then rebuild the scene. State unreadable, behavior unchangeable: an OO program is a black box to a language model. A Clojure program is a glass tank.

That vicious bug was found exactly this way. I had the model read the complete state at the moment of switching from manual back to auto, and diff it against the expected values. The discrepancy jumped out on its own. No added logging, no breakpoints, no eleventh reproduction.

## Superpower 2: Instant Modifiability

Visibility is only step one. Clojure's second superpower: through nREPL, you can replace any function in a running program, effective immediately. No restart, no recompile, no rebuilding the scene.

And the seven-minute reproduction ritual? In Clojure, every step of building a scene is a function call underneath. To the human user they're buttons on a screen; to the AI they're an API. The model invoked the whole multi-step sequence in order and drove the system to the bug site in seconds. Then it redefined a function, re-ran, looked. Wrong — redefine again, re-run.

Notice what happened here: the feedback loop shrank from "edit → restart → reproduce manually for ten minutes → verify" to "redefine → glance".

When an operation drops from minutes to seconds, what happens is not just acceleration but a phase change — you start doing things you never did at all. Git branches and SVN branches are functionally the same thing, but git made branching milliseconds instead of minutes, and suddenly everyone opened a branch for every small change; the whole workflow changed with it. Same with tests: a suite that runs in seconds gets run after every few lines; an integration suite that takes hours gets run once before release, with gritted teeth. Minutes to seconds changes not speed, but behavior.

The model is no different. When testing a hypothesis costs ten minutes, it guesses sparingly; when it costs seconds, it dares to keep trying.

## The Two Superpowers Multiply

Individually, these are conveniences. Multiplied, they're something else: **experimentability**.

Seeing the state lets you form grounded hypotheses; changing the code lets you test them immediately. Observe, hypothesize, modify, observe again — that's the scientific method. An LLM working on a Clojure program is a scientist in a lab. Working on a program it can neither see nor touch, it's an archaeologist — examining artifacts that must not be moved, guessing what happened back then.

Back to the product formula. Inside R, tests, conventions and clarity decide how steadily the AI walks; V and M decide whether it can walk into the program and run experiments there. Your choice of language can't make the model smarter, but it decides how much of the model's smartness lands on your program.

## A Little Cold Water

Some will point out: interactive REPLs weren't invented by Clojure — Smalltalk has one, every Lisp has one. True. Others will say: dynamic typing plus an AI that rewrites code freely is a recipe for disaster. Also worth taking seriously — you need tests, specs, discipline.

But these two objections reveal where the point actually is. The point was never Clojure the language; it's the design direction — interactive, data-oriented. Clojure just happens to be standing there. It's been standing there for years, a bit lonely.

## The Reader of Languages Has Changed

Programming languages have always been designed for their readers. The readers used to be the compiler and your human colleagues, so we invented encapsulation, abstraction, layers of defense — all fitted to human cognitive limits. Now there's a new reader, and this one reads completely differently: it wants to see the entire state directly, and it wants to try things immediately.

Lisp's features were designed over sixty years ago and have been treated as eccentricities ever since. Some inventions aren't wrong. They're just early.

</div>
