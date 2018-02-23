// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.spec.impl.gen');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.impl.gen.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.impl.gen.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.impl.gen.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.impl.gen.LazyVar.cljs$lang$type = true;

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorStr = "cljs.spec.impl.gen/LazyVar";

cljs.spec.impl.gen.LazyVar.cljs$lang$ctorPrWriter = (function (this__20891__auto__,writer__20892__auto__,opt__20893__auto__){
return cljs.core._write.call(null,writer__20892__auto__,"cljs.spec.impl.gen/LazyVar");
});

cljs.spec.impl.gen.__GT_LazyVar = (function cljs$spec$impl$gen$__GT_LazyVar(f,cached){
return (new cljs.spec.impl.gen.LazyVar(f,cached));
});

cljs.spec.impl.gen.quick_check_ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))),cljs.core.str(" never required")].join('')));
}
}),null));
cljs.spec.impl.gen.quick_check = (function cljs$spec$impl$gen$quick_check(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29572 = arguments.length;
var i__21394__auto___29573 = (0);
while(true){
if((i__21394__auto___29573 < len__21393__auto___29572)){
args__21400__auto__.push((arguments[i__21394__auto___29573]));

var G__29574 = (i__21394__auto___29573 + (1));
i__21394__auto___29573 = G__29574;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.quick_check_ref),args);
});

cljs.spec.impl.gen.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.quick_check.cljs$lang$applyTo = (function (seq29571){
return cljs.spec.impl.gen.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29571));
});

cljs.spec.impl.gen.for_all_STAR__ref = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.impl.gen.for_all_STAR_ = (function cljs$spec$impl$gen$for_all_STAR_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29576 = arguments.length;
var i__21394__auto___29577 = (0);
while(true){
if((i__21394__auto___29577 < len__21393__auto___29576)){
args__21400__auto__.push((arguments[i__21394__auto___29577]));

var G__29578 = (i__21394__auto___29577 + (1));
i__21394__auto___29577 = G__29578;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.for_all_STAR__ref),args);
});

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.for_all_STAR_.cljs$lang$applyTo = (function (seq29575){
return cljs.spec.impl.gen.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29575));
});

var g_QMARK__29579 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))),cljs.core.str(" never required")].join('')));
}
}),null));
var g_29580 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29579){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29579))
,null));
var mkg_29581 = (new cljs.spec.impl.gen.LazyVar(((function (g_QMARK__29579,g_29580){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))),cljs.core.str(" never required")].join('')));
}
});})(g_QMARK__29579,g_29580))
,null));
cljs.spec.impl.gen.generator_QMARK_ = ((function (g_QMARK__29579,g_29580,mkg_29581){
return (function cljs$spec$impl$gen$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__29579).call(null,x);
});})(g_QMARK__29579,g_29580,mkg_29581))
;

cljs.spec.impl.gen.generator = ((function (g_QMARK__29579,g_29580,mkg_29581){
return (function cljs$spec$impl$gen$generator(gfn){
return cljs.core.deref.call(null,mkg_29581).call(null,gfn);
});})(g_QMARK__29579,g_29580,mkg_29581))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.impl.gen.generate = ((function (g_QMARK__29579,g_29580,mkg_29581){
return (function cljs$spec$impl$gen$generate(generator){
return cljs.core.deref.call(null,g_29580).call(null,generator);
});})(g_QMARK__29579,g_29580,mkg_29581))
;
cljs.spec.impl.gen.delay_impl = (function cljs$spec$impl$gen$delay_impl(gfnd){
return cljs.spec.impl.gen.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__29543__auto___29600 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.impl.gen.hash_map = ((function (g__29543__auto___29600){
return (function cljs$spec$impl$gen$hash_map(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29601 = arguments.length;
var i__21394__auto___29602 = (0);
while(true){
if((i__21394__auto___29602 < len__21393__auto___29601)){
args__21400__auto__.push((arguments[i__21394__auto___29602]));

var G__29603 = (i__21394__auto___29602 + (1));
i__21394__auto___29602 = G__29603;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29600))
;

cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29600){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29600),args);
});})(g__29543__auto___29600))
;

cljs.spec.impl.gen.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.hash_map.cljs$lang$applyTo = ((function (g__29543__auto___29600){
return (function (seq29582){
return cljs.spec.impl.gen.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29582));
});})(g__29543__auto___29600))
;


var g__29543__auto___29604 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.impl.gen.list = ((function (g__29543__auto___29604){
return (function cljs$spec$impl$gen$list(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29605 = arguments.length;
var i__21394__auto___29606 = (0);
while(true){
if((i__21394__auto___29606 < len__21393__auto___29605)){
args__21400__auto__.push((arguments[i__21394__auto___29606]));

var G__29607 = (i__21394__auto___29606 + (1));
i__21394__auto___29606 = G__29607;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29604))
;

cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29604){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29604),args);
});})(g__29543__auto___29604))
;

cljs.spec.impl.gen.list.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.list.cljs$lang$applyTo = ((function (g__29543__auto___29604){
return (function (seq29583){
return cljs.spec.impl.gen.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29583));
});})(g__29543__auto___29604))
;


var g__29543__auto___29608 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.impl.gen.map = ((function (g__29543__auto___29608){
return (function cljs$spec$impl$gen$map(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29609 = arguments.length;
var i__21394__auto___29610 = (0);
while(true){
if((i__21394__auto___29610 < len__21393__auto___29609)){
args__21400__auto__.push((arguments[i__21394__auto___29610]));

var G__29611 = (i__21394__auto___29610 + (1));
i__21394__auto___29610 = G__29611;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29608))
;

cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29608){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29608),args);
});})(g__29543__auto___29608))
;

cljs.spec.impl.gen.map.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.map.cljs$lang$applyTo = ((function (g__29543__auto___29608){
return (function (seq29584){
return cljs.spec.impl.gen.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29584));
});})(g__29543__auto___29608))
;


var g__29543__auto___29612 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.impl.gen.not_empty = ((function (g__29543__auto___29612){
return (function cljs$spec$impl$gen$not_empty(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29613 = arguments.length;
var i__21394__auto___29614 = (0);
while(true){
if((i__21394__auto___29614 < len__21393__auto___29613)){
args__21400__auto__.push((arguments[i__21394__auto___29614]));

var G__29615 = (i__21394__auto___29614 + (1));
i__21394__auto___29614 = G__29615;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29612))
;

cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29612){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29612),args);
});})(g__29543__auto___29612))
;

cljs.spec.impl.gen.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.not_empty.cljs$lang$applyTo = ((function (g__29543__auto___29612){
return (function (seq29585){
return cljs.spec.impl.gen.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29585));
});})(g__29543__auto___29612))
;


var g__29543__auto___29616 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.impl.gen.set = ((function (g__29543__auto___29616){
return (function cljs$spec$impl$gen$set(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29617 = arguments.length;
var i__21394__auto___29618 = (0);
while(true){
if((i__21394__auto___29618 < len__21393__auto___29617)){
args__21400__auto__.push((arguments[i__21394__auto___29618]));

var G__29619 = (i__21394__auto___29618 + (1));
i__21394__auto___29618 = G__29619;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29616))
;

cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29616){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29616),args);
});})(g__29543__auto___29616))
;

cljs.spec.impl.gen.set.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.set.cljs$lang$applyTo = ((function (g__29543__auto___29616){
return (function (seq29586){
return cljs.spec.impl.gen.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29586));
});})(g__29543__auto___29616))
;


var g__29543__auto___29620 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.impl.gen.vector = ((function (g__29543__auto___29620){
return (function cljs$spec$impl$gen$vector(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29621 = arguments.length;
var i__21394__auto___29622 = (0);
while(true){
if((i__21394__auto___29622 < len__21393__auto___29621)){
args__21400__auto__.push((arguments[i__21394__auto___29622]));

var G__29623 = (i__21394__auto___29622 + (1));
i__21394__auto___29622 = G__29623;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29620))
;

cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29620){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29620),args);
});})(g__29543__auto___29620))
;

cljs.spec.impl.gen.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector.cljs$lang$applyTo = ((function (g__29543__auto___29620){
return (function (seq29587){
return cljs.spec.impl.gen.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29587));
});})(g__29543__auto___29620))
;


var g__29543__auto___29624 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.impl.gen.vector_distinct = ((function (g__29543__auto___29624){
return (function cljs$spec$impl$gen$vector_distinct(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29625 = arguments.length;
var i__21394__auto___29626 = (0);
while(true){
if((i__21394__auto___29626 < len__21393__auto___29625)){
args__21400__auto__.push((arguments[i__21394__auto___29626]));

var G__29627 = (i__21394__auto___29626 + (1));
i__21394__auto___29626 = G__29627;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29624))
;

cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29624){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29624),args);
});})(g__29543__auto___29624))
;

cljs.spec.impl.gen.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.vector_distinct.cljs$lang$applyTo = ((function (g__29543__auto___29624){
return (function (seq29588){
return cljs.spec.impl.gen.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29588));
});})(g__29543__auto___29624))
;


var g__29543__auto___29628 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.impl.gen.fmap = ((function (g__29543__auto___29628){
return (function cljs$spec$impl$gen$fmap(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29629 = arguments.length;
var i__21394__auto___29630 = (0);
while(true){
if((i__21394__auto___29630 < len__21393__auto___29629)){
args__21400__auto__.push((arguments[i__21394__auto___29630]));

var G__29631 = (i__21394__auto___29630 + (1));
i__21394__auto___29630 = G__29631;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29628))
;

cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29628){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29628),args);
});})(g__29543__auto___29628))
;

cljs.spec.impl.gen.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.fmap.cljs$lang$applyTo = ((function (g__29543__auto___29628){
return (function (seq29589){
return cljs.spec.impl.gen.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29589));
});})(g__29543__auto___29628))
;


var g__29543__auto___29632 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.impl.gen.elements = ((function (g__29543__auto___29632){
return (function cljs$spec$impl$gen$elements(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29633 = arguments.length;
var i__21394__auto___29634 = (0);
while(true){
if((i__21394__auto___29634 < len__21393__auto___29633)){
args__21400__auto__.push((arguments[i__21394__auto___29634]));

var G__29635 = (i__21394__auto___29634 + (1));
i__21394__auto___29634 = G__29635;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29632))
;

cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29632){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29632),args);
});})(g__29543__auto___29632))
;

cljs.spec.impl.gen.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.elements.cljs$lang$applyTo = ((function (g__29543__auto___29632){
return (function (seq29590){
return cljs.spec.impl.gen.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29590));
});})(g__29543__auto___29632))
;


var g__29543__auto___29636 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.impl.gen.bind = ((function (g__29543__auto___29636){
return (function cljs$spec$impl$gen$bind(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29637 = arguments.length;
var i__21394__auto___29638 = (0);
while(true){
if((i__21394__auto___29638 < len__21393__auto___29637)){
args__21400__auto__.push((arguments[i__21394__auto___29638]));

var G__29639 = (i__21394__auto___29638 + (1));
i__21394__auto___29638 = G__29639;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29636))
;

cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29636){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29636),args);
});})(g__29543__auto___29636))
;

cljs.spec.impl.gen.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.bind.cljs$lang$applyTo = ((function (g__29543__auto___29636){
return (function (seq29591){
return cljs.spec.impl.gen.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29591));
});})(g__29543__auto___29636))
;


var g__29543__auto___29640 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.impl.gen.choose = ((function (g__29543__auto___29640){
return (function cljs$spec$impl$gen$choose(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29641 = arguments.length;
var i__21394__auto___29642 = (0);
while(true){
if((i__21394__auto___29642 < len__21393__auto___29641)){
args__21400__auto__.push((arguments[i__21394__auto___29642]));

var G__29643 = (i__21394__auto___29642 + (1));
i__21394__auto___29642 = G__29643;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29640))
;

cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29640){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29640),args);
});})(g__29543__auto___29640))
;

cljs.spec.impl.gen.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.choose.cljs$lang$applyTo = ((function (g__29543__auto___29640){
return (function (seq29592){
return cljs.spec.impl.gen.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29592));
});})(g__29543__auto___29640))
;


var g__29543__auto___29644 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.impl.gen.one_of = ((function (g__29543__auto___29644){
return (function cljs$spec$impl$gen$one_of(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29645 = arguments.length;
var i__21394__auto___29646 = (0);
while(true){
if((i__21394__auto___29646 < len__21393__auto___29645)){
args__21400__auto__.push((arguments[i__21394__auto___29646]));

var G__29647 = (i__21394__auto___29646 + (1));
i__21394__auto___29646 = G__29647;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29644))
;

cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29644){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29644),args);
});})(g__29543__auto___29644))
;

cljs.spec.impl.gen.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.one_of.cljs$lang$applyTo = ((function (g__29543__auto___29644){
return (function (seq29593){
return cljs.spec.impl.gen.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29593));
});})(g__29543__auto___29644))
;


var g__29543__auto___29648 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.impl.gen.such_that = ((function (g__29543__auto___29648){
return (function cljs$spec$impl$gen$such_that(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29649 = arguments.length;
var i__21394__auto___29650 = (0);
while(true){
if((i__21394__auto___29650 < len__21393__auto___29649)){
args__21400__auto__.push((arguments[i__21394__auto___29650]));

var G__29651 = (i__21394__auto___29650 + (1));
i__21394__auto___29650 = G__29651;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29648))
;

cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29648){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29648),args);
});})(g__29543__auto___29648))
;

cljs.spec.impl.gen.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.such_that.cljs$lang$applyTo = ((function (g__29543__auto___29648){
return (function (seq29594){
return cljs.spec.impl.gen.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29594));
});})(g__29543__auto___29648))
;


var g__29543__auto___29652 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.impl.gen.tuple = ((function (g__29543__auto___29652){
return (function cljs$spec$impl$gen$tuple(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29653 = arguments.length;
var i__21394__auto___29654 = (0);
while(true){
if((i__21394__auto___29654 < len__21393__auto___29653)){
args__21400__auto__.push((arguments[i__21394__auto___29654]));

var G__29655 = (i__21394__auto___29654 + (1));
i__21394__auto___29654 = G__29655;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29652))
;

cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29652){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29652),args);
});})(g__29543__auto___29652))
;

cljs.spec.impl.gen.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.tuple.cljs$lang$applyTo = ((function (g__29543__auto___29652){
return (function (seq29595){
return cljs.spec.impl.gen.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29595));
});})(g__29543__auto___29652))
;


var g__29543__auto___29656 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.impl.gen.sample = ((function (g__29543__auto___29656){
return (function cljs$spec$impl$gen$sample(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29657 = arguments.length;
var i__21394__auto___29658 = (0);
while(true){
if((i__21394__auto___29658 < len__21393__auto___29657)){
args__21400__auto__.push((arguments[i__21394__auto___29658]));

var G__29659 = (i__21394__auto___29658 + (1));
i__21394__auto___29658 = G__29659;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29656))
;

cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29656){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29656),args);
});})(g__29543__auto___29656))
;

cljs.spec.impl.gen.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.sample.cljs$lang$applyTo = ((function (g__29543__auto___29656){
return (function (seq29596){
return cljs.spec.impl.gen.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29596));
});})(g__29543__auto___29656))
;


var g__29543__auto___29660 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.impl.gen.return$ = ((function (g__29543__auto___29660){
return (function cljs$spec$impl$gen$return(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29661 = arguments.length;
var i__21394__auto___29662 = (0);
while(true){
if((i__21394__auto___29662 < len__21393__auto___29661)){
args__21400__auto__.push((arguments[i__21394__auto___29662]));

var G__29663 = (i__21394__auto___29662 + (1));
i__21394__auto___29662 = G__29663;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29660))
;

cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29660){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29660),args);
});})(g__29543__auto___29660))
;

cljs.spec.impl.gen.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.return$.cljs$lang$applyTo = ((function (g__29543__auto___29660){
return (function (seq29597){
return cljs.spec.impl.gen.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29597));
});})(g__29543__auto___29660))
;


var g__29543__auto___29664 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.impl.gen.large_integer_STAR_ = ((function (g__29543__auto___29664){
return (function cljs$spec$impl$gen$large_integer_STAR_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29665 = arguments.length;
var i__21394__auto___29666 = (0);
while(true){
if((i__21394__auto___29666 < len__21393__auto___29665)){
args__21400__auto__.push((arguments[i__21394__auto___29666]));

var G__29667 = (i__21394__auto___29666 + (1));
i__21394__auto___29666 = G__29667;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29664))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29664){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29664),args);
});})(g__29543__auto___29664))
;

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer_STAR_.cljs$lang$applyTo = ((function (g__29543__auto___29664){
return (function (seq29598){
return cljs.spec.impl.gen.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29598));
});})(g__29543__auto___29664))
;


var g__29543__auto___29668 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.impl.gen.double_STAR_ = ((function (g__29543__auto___29668){
return (function cljs$spec$impl$gen$double_STAR_(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29669 = arguments.length;
var i__21394__auto___29670 = (0);
while(true){
if((i__21394__auto___29670 < len__21393__auto___29669)){
args__21400__auto__.push((arguments[i__21394__auto___29670]));

var G__29671 = (i__21394__auto___29670 + (1));
i__21394__auto___29670 = G__29671;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29543__auto___29668))
;

cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29543__auto___29668){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__29543__auto___29668),args);
});})(g__29543__auto___29668))
;

cljs.spec.impl.gen.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double_STAR_.cljs$lang$applyTo = ((function (g__29543__auto___29668){
return (function (seq29599){
return cljs.spec.impl.gen.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29599));
});})(g__29543__auto___29668))
;

var g__29556__auto___29693 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.impl.gen.any = ((function (g__29556__auto___29693){
return (function cljs$spec$impl$gen$any(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29694 = arguments.length;
var i__21394__auto___29695 = (0);
while(true){
if((i__21394__auto___29695 < len__21393__auto___29694)){
args__21400__auto__.push((arguments[i__21394__auto___29695]));

var G__29696 = (i__21394__auto___29695 + (1));
i__21394__auto___29695 = G__29696;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29693))
;

cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29693){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29693);
});})(g__29556__auto___29693))
;

cljs.spec.impl.gen.any.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any.cljs$lang$applyTo = ((function (g__29556__auto___29693){
return (function (seq29672){
return cljs.spec.impl.gen.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29672));
});})(g__29556__auto___29693))
;


var g__29556__auto___29697 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.impl.gen.any_printable = ((function (g__29556__auto___29697){
return (function cljs$spec$impl$gen$any_printable(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29698 = arguments.length;
var i__21394__auto___29699 = (0);
while(true){
if((i__21394__auto___29699 < len__21393__auto___29698)){
args__21400__auto__.push((arguments[i__21394__auto___29699]));

var G__29700 = (i__21394__auto___29699 + (1));
i__21394__auto___29699 = G__29700;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29697))
;

cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29697){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29697);
});})(g__29556__auto___29697))
;

cljs.spec.impl.gen.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.any_printable.cljs$lang$applyTo = ((function (g__29556__auto___29697){
return (function (seq29673){
return cljs.spec.impl.gen.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29673));
});})(g__29556__auto___29697))
;


var g__29556__auto___29701 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.impl.gen.boolean$ = ((function (g__29556__auto___29701){
return (function cljs$spec$impl$gen$boolean(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29702 = arguments.length;
var i__21394__auto___29703 = (0);
while(true){
if((i__21394__auto___29703 < len__21393__auto___29702)){
args__21400__auto__.push((arguments[i__21394__auto___29703]));

var G__29704 = (i__21394__auto___29703 + (1));
i__21394__auto___29703 = G__29704;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29701))
;

cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29701){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29701);
});})(g__29556__auto___29701))
;

cljs.spec.impl.gen.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.boolean$.cljs$lang$applyTo = ((function (g__29556__auto___29701){
return (function (seq29674){
return cljs.spec.impl.gen.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29674));
});})(g__29556__auto___29701))
;


var g__29556__auto___29705 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.impl.gen.char$ = ((function (g__29556__auto___29705){
return (function cljs$spec$impl$gen$char(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29706 = arguments.length;
var i__21394__auto___29707 = (0);
while(true){
if((i__21394__auto___29707 < len__21393__auto___29706)){
args__21400__auto__.push((arguments[i__21394__auto___29707]));

var G__29708 = (i__21394__auto___29707 + (1));
i__21394__auto___29707 = G__29708;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29705))
;

cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29705){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29705);
});})(g__29556__auto___29705))
;

cljs.spec.impl.gen.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char$.cljs$lang$applyTo = ((function (g__29556__auto___29705){
return (function (seq29675){
return cljs.spec.impl.gen.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29675));
});})(g__29556__auto___29705))
;


var g__29556__auto___29709 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.impl.gen.char_alpha = ((function (g__29556__auto___29709){
return (function cljs$spec$impl$gen$char_alpha(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29710 = arguments.length;
var i__21394__auto___29711 = (0);
while(true){
if((i__21394__auto___29711 < len__21393__auto___29710)){
args__21400__auto__.push((arguments[i__21394__auto___29711]));

var G__29712 = (i__21394__auto___29711 + (1));
i__21394__auto___29711 = G__29712;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29709))
;

cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29709){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29709);
});})(g__29556__auto___29709))
;

cljs.spec.impl.gen.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alpha.cljs$lang$applyTo = ((function (g__29556__auto___29709){
return (function (seq29676){
return cljs.spec.impl.gen.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29676));
});})(g__29556__auto___29709))
;


var g__29556__auto___29713 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.impl.gen.char_alphanumeric = ((function (g__29556__auto___29713){
return (function cljs$spec$impl$gen$char_alphanumeric(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29714 = arguments.length;
var i__21394__auto___29715 = (0);
while(true){
if((i__21394__auto___29715 < len__21393__auto___29714)){
args__21400__auto__.push((arguments[i__21394__auto___29715]));

var G__29716 = (i__21394__auto___29715 + (1));
i__21394__auto___29715 = G__29716;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29713))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29713){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29713);
});})(g__29556__auto___29713))
;

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_alphanumeric.cljs$lang$applyTo = ((function (g__29556__auto___29713){
return (function (seq29677){
return cljs.spec.impl.gen.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29677));
});})(g__29556__auto___29713))
;


var g__29556__auto___29717 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.impl.gen.char_ascii = ((function (g__29556__auto___29717){
return (function cljs$spec$impl$gen$char_ascii(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29718 = arguments.length;
var i__21394__auto___29719 = (0);
while(true){
if((i__21394__auto___29719 < len__21393__auto___29718)){
args__21400__auto__.push((arguments[i__21394__auto___29719]));

var G__29720 = (i__21394__auto___29719 + (1));
i__21394__auto___29719 = G__29720;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29717))
;

cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29717){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29717);
});})(g__29556__auto___29717))
;

cljs.spec.impl.gen.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.char_ascii.cljs$lang$applyTo = ((function (g__29556__auto___29717){
return (function (seq29678){
return cljs.spec.impl.gen.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29678));
});})(g__29556__auto___29717))
;


var g__29556__auto___29721 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.impl.gen.double$ = ((function (g__29556__auto___29721){
return (function cljs$spec$impl$gen$double(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29722 = arguments.length;
var i__21394__auto___29723 = (0);
while(true){
if((i__21394__auto___29723 < len__21393__auto___29722)){
args__21400__auto__.push((arguments[i__21394__auto___29723]));

var G__29724 = (i__21394__auto___29723 + (1));
i__21394__auto___29723 = G__29724;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29721))
;

cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29721){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29721);
});})(g__29556__auto___29721))
;

cljs.spec.impl.gen.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.double$.cljs$lang$applyTo = ((function (g__29556__auto___29721){
return (function (seq29679){
return cljs.spec.impl.gen.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29679));
});})(g__29556__auto___29721))
;


var g__29556__auto___29725 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.impl.gen.int$ = ((function (g__29556__auto___29725){
return (function cljs$spec$impl$gen$int(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29726 = arguments.length;
var i__21394__auto___29727 = (0);
while(true){
if((i__21394__auto___29727 < len__21393__auto___29726)){
args__21400__auto__.push((arguments[i__21394__auto___29727]));

var G__29728 = (i__21394__auto___29727 + (1));
i__21394__auto___29727 = G__29728;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29725))
;

cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29725){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29725);
});})(g__29556__auto___29725))
;

cljs.spec.impl.gen.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.int$.cljs$lang$applyTo = ((function (g__29556__auto___29725){
return (function (seq29680){
return cljs.spec.impl.gen.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29680));
});})(g__29556__auto___29725))
;


var g__29556__auto___29729 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.impl.gen.keyword = ((function (g__29556__auto___29729){
return (function cljs$spec$impl$gen$keyword(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29730 = arguments.length;
var i__21394__auto___29731 = (0);
while(true){
if((i__21394__auto___29731 < len__21393__auto___29730)){
args__21400__auto__.push((arguments[i__21394__auto___29731]));

var G__29732 = (i__21394__auto___29731 + (1));
i__21394__auto___29731 = G__29732;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29729))
;

cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29729){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29729);
});})(g__29556__auto___29729))
;

cljs.spec.impl.gen.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword.cljs$lang$applyTo = ((function (g__29556__auto___29729){
return (function (seq29681){
return cljs.spec.impl.gen.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29681));
});})(g__29556__auto___29729))
;


var g__29556__auto___29733 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.impl.gen.keyword_ns = ((function (g__29556__auto___29733){
return (function cljs$spec$impl$gen$keyword_ns(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29734 = arguments.length;
var i__21394__auto___29735 = (0);
while(true){
if((i__21394__auto___29735 < len__21393__auto___29734)){
args__21400__auto__.push((arguments[i__21394__auto___29735]));

var G__29736 = (i__21394__auto___29735 + (1));
i__21394__auto___29735 = G__29736;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29733))
;

cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29733){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29733);
});})(g__29556__auto___29733))
;

cljs.spec.impl.gen.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.keyword_ns.cljs$lang$applyTo = ((function (g__29556__auto___29733){
return (function (seq29682){
return cljs.spec.impl.gen.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29682));
});})(g__29556__auto___29733))
;


var g__29556__auto___29737 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.impl.gen.large_integer = ((function (g__29556__auto___29737){
return (function cljs$spec$impl$gen$large_integer(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29738 = arguments.length;
var i__21394__auto___29739 = (0);
while(true){
if((i__21394__auto___29739 < len__21393__auto___29738)){
args__21400__auto__.push((arguments[i__21394__auto___29739]));

var G__29740 = (i__21394__auto___29739 + (1));
i__21394__auto___29739 = G__29740;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29737))
;

cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29737){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29737);
});})(g__29556__auto___29737))
;

cljs.spec.impl.gen.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.large_integer.cljs$lang$applyTo = ((function (g__29556__auto___29737){
return (function (seq29683){
return cljs.spec.impl.gen.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29683));
});})(g__29556__auto___29737))
;


var g__29556__auto___29741 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.impl.gen.ratio = ((function (g__29556__auto___29741){
return (function cljs$spec$impl$gen$ratio(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29742 = arguments.length;
var i__21394__auto___29743 = (0);
while(true){
if((i__21394__auto___29743 < len__21393__auto___29742)){
args__21400__auto__.push((arguments[i__21394__auto___29743]));

var G__29744 = (i__21394__auto___29743 + (1));
i__21394__auto___29743 = G__29744;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29741))
;

cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29741){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29741);
});})(g__29556__auto___29741))
;

cljs.spec.impl.gen.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.ratio.cljs$lang$applyTo = ((function (g__29556__auto___29741){
return (function (seq29684){
return cljs.spec.impl.gen.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29684));
});})(g__29556__auto___29741))
;


var g__29556__auto___29745 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.impl.gen.simple_type = ((function (g__29556__auto___29745){
return (function cljs$spec$impl$gen$simple_type(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29746 = arguments.length;
var i__21394__auto___29747 = (0);
while(true){
if((i__21394__auto___29747 < len__21393__auto___29746)){
args__21400__auto__.push((arguments[i__21394__auto___29747]));

var G__29748 = (i__21394__auto___29747 + (1));
i__21394__auto___29747 = G__29748;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29745))
;

cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29745){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29745);
});})(g__29556__auto___29745))
;

cljs.spec.impl.gen.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type.cljs$lang$applyTo = ((function (g__29556__auto___29745){
return (function (seq29685){
return cljs.spec.impl.gen.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29685));
});})(g__29556__auto___29745))
;


var g__29556__auto___29749 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.impl.gen.simple_type_printable = ((function (g__29556__auto___29749){
return (function cljs$spec$impl$gen$simple_type_printable(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29750 = arguments.length;
var i__21394__auto___29751 = (0);
while(true){
if((i__21394__auto___29751 < len__21393__auto___29750)){
args__21400__auto__.push((arguments[i__21394__auto___29751]));

var G__29752 = (i__21394__auto___29751 + (1));
i__21394__auto___29751 = G__29752;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29749))
;

cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29749){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29749);
});})(g__29556__auto___29749))
;

cljs.spec.impl.gen.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.simple_type_printable.cljs$lang$applyTo = ((function (g__29556__auto___29749){
return (function (seq29686){
return cljs.spec.impl.gen.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29686));
});})(g__29556__auto___29749))
;


var g__29556__auto___29753 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.impl.gen.string = ((function (g__29556__auto___29753){
return (function cljs$spec$impl$gen$string(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29754 = arguments.length;
var i__21394__auto___29755 = (0);
while(true){
if((i__21394__auto___29755 < len__21393__auto___29754)){
args__21400__auto__.push((arguments[i__21394__auto___29755]));

var G__29756 = (i__21394__auto___29755 + (1));
i__21394__auto___29755 = G__29756;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29753))
;

cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29753){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29753);
});})(g__29556__auto___29753))
;

cljs.spec.impl.gen.string.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string.cljs$lang$applyTo = ((function (g__29556__auto___29753){
return (function (seq29687){
return cljs.spec.impl.gen.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29687));
});})(g__29556__auto___29753))
;


var g__29556__auto___29757 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.impl.gen.string_ascii = ((function (g__29556__auto___29757){
return (function cljs$spec$impl$gen$string_ascii(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29758 = arguments.length;
var i__21394__auto___29759 = (0);
while(true){
if((i__21394__auto___29759 < len__21393__auto___29758)){
args__21400__auto__.push((arguments[i__21394__auto___29759]));

var G__29760 = (i__21394__auto___29759 + (1));
i__21394__auto___29759 = G__29760;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29757))
;

cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29757){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29757);
});})(g__29556__auto___29757))
;

cljs.spec.impl.gen.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_ascii.cljs$lang$applyTo = ((function (g__29556__auto___29757){
return (function (seq29688){
return cljs.spec.impl.gen.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29688));
});})(g__29556__auto___29757))
;


var g__29556__auto___29761 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.impl.gen.string_alphanumeric = ((function (g__29556__auto___29761){
return (function cljs$spec$impl$gen$string_alphanumeric(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29762 = arguments.length;
var i__21394__auto___29763 = (0);
while(true){
if((i__21394__auto___29763 < len__21393__auto___29762)){
args__21400__auto__.push((arguments[i__21394__auto___29763]));

var G__29764 = (i__21394__auto___29763 + (1));
i__21394__auto___29763 = G__29764;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29761))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29761){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29761);
});})(g__29556__auto___29761))
;

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.string_alphanumeric.cljs$lang$applyTo = ((function (g__29556__auto___29761){
return (function (seq29689){
return cljs.spec.impl.gen.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29689));
});})(g__29556__auto___29761))
;


var g__29556__auto___29765 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.impl.gen.symbol = ((function (g__29556__auto___29765){
return (function cljs$spec$impl$gen$symbol(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29766 = arguments.length;
var i__21394__auto___29767 = (0);
while(true){
if((i__21394__auto___29767 < len__21393__auto___29766)){
args__21400__auto__.push((arguments[i__21394__auto___29767]));

var G__29768 = (i__21394__auto___29767 + (1));
i__21394__auto___29767 = G__29768;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29765))
;

cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29765){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29765);
});})(g__29556__auto___29765))
;

cljs.spec.impl.gen.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol.cljs$lang$applyTo = ((function (g__29556__auto___29765){
return (function (seq29690){
return cljs.spec.impl.gen.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29690));
});})(g__29556__auto___29765))
;


var g__29556__auto___29769 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.impl.gen.symbol_ns = ((function (g__29556__auto___29769){
return (function cljs$spec$impl$gen$symbol_ns(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29770 = arguments.length;
var i__21394__auto___29771 = (0);
while(true){
if((i__21394__auto___29771 < len__21393__auto___29770)){
args__21400__auto__.push((arguments[i__21394__auto___29771]));

var G__29772 = (i__21394__auto___29771 + (1));
i__21394__auto___29771 = G__29772;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29769))
;

cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29769){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29769);
});})(g__29556__auto___29769))
;

cljs.spec.impl.gen.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.symbol_ns.cljs$lang$applyTo = ((function (g__29556__auto___29769){
return (function (seq29691){
return cljs.spec.impl.gen.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29691));
});})(g__29556__auto___29769))
;


var g__29556__auto___29773 = (new cljs.spec.impl.gen.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error([cljs.core.str("Var "),cljs.core.str(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)),cljs.core.str(" does not exist, "),cljs.core.str(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))),cljs.core.str(" never required")].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.impl.gen.uuid = ((function (g__29556__auto___29773){
return (function cljs$spec$impl$gen$uuid(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29774 = arguments.length;
var i__21394__auto___29775 = (0);
while(true){
if((i__21394__auto___29775 < len__21393__auto___29774)){
args__21400__auto__.push((arguments[i__21394__auto___29775]));

var G__29776 = (i__21394__auto___29775 + (1));
i__21394__auto___29775 = G__29776;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});})(g__29556__auto___29773))
;

cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__29556__auto___29773){
return (function (args){
return cljs.core.deref.call(null,g__29556__auto___29773);
});})(g__29556__auto___29773))
;

cljs.spec.impl.gen.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.uuid.cljs$lang$applyTo = ((function (g__29556__auto___29773){
return (function (seq29692){
return cljs.spec.impl.gen.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29692));
});})(g__29556__auto___29773))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.impl.gen.cat = (function cljs$spec$impl$gen$cat(var_args){
var args__21400__auto__ = [];
var len__21393__auto___29779 = arguments.length;
var i__21394__auto___29780 = (0);
while(true){
if((i__21394__auto___29780 < len__21393__auto___29779)){
args__21400__auto__.push((arguments[i__21394__auto___29780]));

var G__29781 = (i__21394__auto___29780 + (1));
i__21394__auto___29780 = G__29781;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.impl.gen.fmap.call(null,(function (p1__29777_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__29777_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gens));
});

cljs.spec.impl.gen.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.impl.gen.cat.cljs$lang$applyTo = (function (seq29778){
return cljs.spec.impl.gen.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29778));
});

cljs.spec.impl.gen.qualified_QMARK_ = (function cljs$spec$impl$gen$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.impl.gen.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.impl.gen.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.keyword_ns.call(null)),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.any_printable.call(null)], null)),cljs.spec.impl.gen.boolean$.call(null),cljs.spec.impl.gen.char$.call(null),cljs.spec.impl.gen.fmap.call(null,((function (simple){
return (function (p1__29782_SHARP_){
return (new Date(p1__29782_SHARP_));
});})(simple))
,cljs.spec.impl.gen.large_integer.call(null)),cljs.spec.impl.gen.symbol.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.impl.gen.string_alphanumeric.call(null),cljs.spec.impl.gen.double$.call(null),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.vector.call(null,simple)], null)),cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.return$.call(null,(0)),cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword_ns.call(null),cljs.spec.impl.gen.symbol_ns.call(null)], null))),cljs.spec.impl.gen.return$.call(null,true),cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.impl.gen.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.impl.gen.uuid.call(null),cljs.spec.impl.gen.return$.call(null,false),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.keyword.call(null),cljs.spec.impl.gen.symbol.call(null)], null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.large_integer.call(null),cljs.spec.impl.gen.double$.call(null)], null)),cljs.spec.impl.gen.such_that.call(null,cljs.spec.impl.gen.qualified_QMARK_,cljs.spec.impl.gen.symbol_ns.call(null)),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.return$.call(null,null),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.set.call(null,simple),cljs.spec.impl.gen.string_alphanumeric.call(null)], null)),cljs.spec.impl.gen.symbol_ns.call(null),cljs.spec.impl.gen.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.impl.gen.map.call(null,simple,simple),cljs.spec.impl.gen.list.call(null,simple),cljs.spec.impl.gen.vector.call(null,simple),cljs.spec.impl.gen.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.impl.gen.gen_for_pred = (function cljs$spec$impl$gen$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.impl.gen.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.impl.gen.gen_builtins),pred);
}
});

//# sourceMappingURL=gen.js.map?rel=1519350858105