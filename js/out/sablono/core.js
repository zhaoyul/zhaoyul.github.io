// Compiled by ClojureScript 1.9.293 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('clojure.string');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__28036__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__28033 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__28034 = cljs.core.seq.call(null,vec__28033);
var first__28035 = cljs.core.first.call(null,seq__28034);
var seq__28034__$1 = cljs.core.next.call(null,seq__28034);
var tag = first__28035;
var body = seq__28034__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__28036 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28037__i = 0, G__28037__a = new Array(arguments.length -  0);
while (G__28037__i < G__28037__a.length) {G__28037__a[G__28037__i] = arguments[G__28037__i + 0]; ++G__28037__i;}
  args = new cljs.core.IndexedSeq(G__28037__a,0);
} 
return G__28036__delegate.call(this,args);};
G__28036.cljs$lang$maxFixedArity = 0;
G__28036.cljs$lang$applyTo = (function (arglist__28038){
var args = cljs.core.seq(arglist__28038);
return G__28036__delegate(args);
});
G__28036.cljs$core$IFn$_invoke$arity$variadic = G__28036__delegate;
return G__28036;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__21068__auto__ = (function sablono$core$update_arglists_$_iter__28043(s__28044){
return (new cljs.core.LazySeq(null,(function (){
var s__28044__$1 = s__28044;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28044__$1);
if(temp__4657__auto__){
var s__28044__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28044__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__28044__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__28046 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__28045 = (0);
while(true){
if((i__28045 < size__21067__auto__)){
var args = cljs.core._nth.call(null,c__21066__auto__,i__28045);
cljs.core.chunk_append.call(null,b__28046,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__28047 = (i__28045 + (1));
i__28045 = G__28047;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28046),sablono$core$update_arglists_$_iter__28043.call(null,cljs.core.chunk_rest.call(null,s__28044__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28046),null);
}
} else {
var args = cljs.core.first.call(null,s__28044__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__28043.call(null,cljs.core.rest.call(null,s__28044__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__21400__auto__ = [];
var len__21393__auto___28053 = arguments.length;
var i__21394__auto___28054 = (0);
while(true){
if((i__21394__auto___28054 < len__21393__auto___28053)){
args__21400__auto__.push((arguments[i__21394__auto___28054]));

var G__28055 = (i__21394__auto___28054 + (1));
i__21394__auto___28054 = G__28055;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((0) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__21401__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__21068__auto__ = (function sablono$core$iter__28049(s__28050){
return (new cljs.core.LazySeq(null,(function (){
var s__28050__$1 = s__28050;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28050__$1);
if(temp__4657__auto__){
var s__28050__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28050__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__28050__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__28052 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__28051 = (0);
while(true){
if((i__28051 < size__21067__auto__)){
var style = cljs.core._nth.call(null,c__21066__auto__,i__28051);
cljs.core.chunk_append.call(null,b__28052,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__28056 = (i__28051 + (1));
i__28051 = G__28056;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28052),sablono$core$iter__28049.call(null,cljs.core.chunk_rest.call(null,s__28050__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28052),null);
}
} else {
var style = cljs.core.first.call(null,s__28050__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__28049.call(null,cljs.core.rest.call(null,s__28050__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq28048){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28048));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to28057 = (function sablono$core$link_to28057(var_args){
var args__21400__auto__ = [];
var len__21393__auto___28060 = arguments.length;
var i__21394__auto___28061 = (0);
while(true){
if((i__21394__auto___28061 < len__21393__auto___28060)){
args__21400__auto__.push((arguments[i__21394__auto___28061]));

var G__28062 = (i__21394__auto___28061 + (1));
i__21394__auto___28061 = G__28062;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to28057.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.link_to28057.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to28057.cljs$lang$maxFixedArity = (1);

sablono.core.link_to28057.cljs$lang$applyTo = (function (seq28058){
var G__28059 = cljs.core.first.call(null,seq28058);
var seq28058__$1 = cljs.core.next.call(null,seq28058);
return sablono.core.link_to28057.cljs$core$IFn$_invoke$arity$variadic(G__28059,seq28058__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to28057);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to28063 = (function sablono$core$mail_to28063(var_args){
var args__21400__auto__ = [];
var len__21393__auto___28070 = arguments.length;
var i__21394__auto___28071 = (0);
while(true){
if((i__21394__auto___28071 < len__21393__auto___28070)){
args__21400__auto__.push((arguments[i__21394__auto___28071]));

var G__28072 = (i__21394__auto___28071 + (1));
i__21394__auto___28071 = G__28072;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to28063.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.mail_to28063.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__28066){
var vec__28067 = p__28066;
var content = cljs.core.nth.call(null,vec__28067,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__20285__auto__ = content;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to28063.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to28063.cljs$lang$applyTo = (function (seq28064){
var G__28065 = cljs.core.first.call(null,seq28064);
var seq28064__$1 = cljs.core.next.call(null,seq28064);
return sablono.core.mail_to28063.cljs$core$IFn$_invoke$arity$variadic(G__28065,seq28064__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to28063);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list28073 = (function sablono$core$unordered_list28073(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__21068__auto__ = (function sablono$core$unordered_list28073_$_iter__28078(s__28079){
return (new cljs.core.LazySeq(null,(function (){
var s__28079__$1 = s__28079;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28079__$1);
if(temp__4657__auto__){
var s__28079__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28079__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__28079__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__28081 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__28080 = (0);
while(true){
if((i__28080 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__28080);
cljs.core.chunk_append.call(null,b__28081,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28082 = (i__28080 + (1));
i__28080 = G__28082;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28081),sablono$core$unordered_list28073_$_iter__28078.call(null,cljs.core.chunk_rest.call(null,s__28079__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28081),null);
}
} else {
var x = cljs.core.first.call(null,s__28079__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list28073_$_iter__28078.call(null,cljs.core.rest.call(null,s__28079__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list28073);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list28083 = (function sablono$core$ordered_list28083(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__21068__auto__ = (function sablono$core$ordered_list28083_$_iter__28088(s__28089){
return (new cljs.core.LazySeq(null,(function (){
var s__28089__$1 = s__28089;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28089__$1);
if(temp__4657__auto__){
var s__28089__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28089__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__28089__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__28091 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__28090 = (0);
while(true){
if((i__28090 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__28090);
cljs.core.chunk_append.call(null,b__28091,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__28092 = (i__28090 + (1));
i__28090 = G__28092;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28091),sablono$core$ordered_list28083_$_iter__28088.call(null,cljs.core.chunk_rest.call(null,s__28089__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28091),null);
}
} else {
var x = cljs.core.first.call(null,s__28089__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list28083_$_iter__28088.call(null,cljs.core.rest.call(null,s__28089__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list28083);
/**
 * Create an image element.
 */
sablono.core.image28093 = (function sablono$core$image28093(var_args){
var args28094 = [];
var len__21393__auto___28097 = arguments.length;
var i__21394__auto___28098 = (0);
while(true){
if((i__21394__auto___28098 < len__21393__auto___28097)){
args28094.push((arguments[i__21394__auto___28098]));

var G__28099 = (i__21394__auto___28098 + (1));
i__21394__auto___28098 = G__28099;
continue;
} else {
}
break;
}

var G__28096 = args28094.length;
switch (G__28096) {
case 1:
return sablono.core.image28093.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image28093.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28094.length)].join('')));

}
});

sablono.core.image28093.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image28093.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image28093.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image28093);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__28101_SHARP_,p2__28102_SHARP_){
return [cljs.core.str(p1__28101_SHARP_),cljs.core.str("["),cljs.core.str(p2__28102_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__28103_SHARP_,p2__28104_SHARP_){
return [cljs.core.str(p1__28103_SHARP_),cljs.core.str("-"),cljs.core.str(p2__28104_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field28105 = (function sablono$core$color_field28105(var_args){
var args28106 = [];
var len__21393__auto___28173 = arguments.length;
var i__21394__auto___28174 = (0);
while(true){
if((i__21394__auto___28174 < len__21393__auto___28173)){
args28106.push((arguments[i__21394__auto___28174]));

var G__28175 = (i__21394__auto___28174 + (1));
i__21394__auto___28174 = G__28175;
continue;
} else {
}
break;
}

var G__28108 = args28106.length;
switch (G__28108) {
case 1:
return sablono.core.color_field28105.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field28105.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28106.length)].join('')));

}
});

sablono.core.color_field28105.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.color_field28105.call(null,name__28020__auto__,null);
});

sablono.core.color_field28105.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.color_field28105.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field28105);

/**
 * Creates a date input field.
 */
sablono.core.date_field28109 = (function sablono$core$date_field28109(var_args){
var args28110 = [];
var len__21393__auto___28177 = arguments.length;
var i__21394__auto___28178 = (0);
while(true){
if((i__21394__auto___28178 < len__21393__auto___28177)){
args28110.push((arguments[i__21394__auto___28178]));

var G__28179 = (i__21394__auto___28178 + (1));
i__21394__auto___28178 = G__28179;
continue;
} else {
}
break;
}

var G__28112 = args28110.length;
switch (G__28112) {
case 1:
return sablono.core.date_field28109.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field28109.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28110.length)].join('')));

}
});

sablono.core.date_field28109.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.date_field28109.call(null,name__28020__auto__,null);
});

sablono.core.date_field28109.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.date_field28109.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field28109);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field28113 = (function sablono$core$datetime_field28113(var_args){
var args28114 = [];
var len__21393__auto___28181 = arguments.length;
var i__21394__auto___28182 = (0);
while(true){
if((i__21394__auto___28182 < len__21393__auto___28181)){
args28114.push((arguments[i__21394__auto___28182]));

var G__28183 = (i__21394__auto___28182 + (1));
i__21394__auto___28182 = G__28183;
continue;
} else {
}
break;
}

var G__28116 = args28114.length;
switch (G__28116) {
case 1:
return sablono.core.datetime_field28113.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field28113.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28114.length)].join('')));

}
});

sablono.core.datetime_field28113.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.datetime_field28113.call(null,name__28020__auto__,null);
});

sablono.core.datetime_field28113.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.datetime_field28113.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field28113);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field28117 = (function sablono$core$datetime_local_field28117(var_args){
var args28118 = [];
var len__21393__auto___28185 = arguments.length;
var i__21394__auto___28186 = (0);
while(true){
if((i__21394__auto___28186 < len__21393__auto___28185)){
args28118.push((arguments[i__21394__auto___28186]));

var G__28187 = (i__21394__auto___28186 + (1));
i__21394__auto___28186 = G__28187;
continue;
} else {
}
break;
}

var G__28120 = args28118.length;
switch (G__28120) {
case 1:
return sablono.core.datetime_local_field28117.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field28117.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28118.length)].join('')));

}
});

sablono.core.datetime_local_field28117.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.datetime_local_field28117.call(null,name__28020__auto__,null);
});

sablono.core.datetime_local_field28117.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.datetime_local_field28117.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field28117);

/**
 * Creates a email input field.
 */
sablono.core.email_field28121 = (function sablono$core$email_field28121(var_args){
var args28122 = [];
var len__21393__auto___28189 = arguments.length;
var i__21394__auto___28190 = (0);
while(true){
if((i__21394__auto___28190 < len__21393__auto___28189)){
args28122.push((arguments[i__21394__auto___28190]));

var G__28191 = (i__21394__auto___28190 + (1));
i__21394__auto___28190 = G__28191;
continue;
} else {
}
break;
}

var G__28124 = args28122.length;
switch (G__28124) {
case 1:
return sablono.core.email_field28121.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field28121.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28122.length)].join('')));

}
});

sablono.core.email_field28121.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.email_field28121.call(null,name__28020__auto__,null);
});

sablono.core.email_field28121.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.email_field28121.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field28121);

/**
 * Creates a file input field.
 */
sablono.core.file_field28125 = (function sablono$core$file_field28125(var_args){
var args28126 = [];
var len__21393__auto___28193 = arguments.length;
var i__21394__auto___28194 = (0);
while(true){
if((i__21394__auto___28194 < len__21393__auto___28193)){
args28126.push((arguments[i__21394__auto___28194]));

var G__28195 = (i__21394__auto___28194 + (1));
i__21394__auto___28194 = G__28195;
continue;
} else {
}
break;
}

var G__28128 = args28126.length;
switch (G__28128) {
case 1:
return sablono.core.file_field28125.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field28125.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28126.length)].join('')));

}
});

sablono.core.file_field28125.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.file_field28125.call(null,name__28020__auto__,null);
});

sablono.core.file_field28125.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.file_field28125.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field28125);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field28129 = (function sablono$core$hidden_field28129(var_args){
var args28130 = [];
var len__21393__auto___28197 = arguments.length;
var i__21394__auto___28198 = (0);
while(true){
if((i__21394__auto___28198 < len__21393__auto___28197)){
args28130.push((arguments[i__21394__auto___28198]));

var G__28199 = (i__21394__auto___28198 + (1));
i__21394__auto___28198 = G__28199;
continue;
} else {
}
break;
}

var G__28132 = args28130.length;
switch (G__28132) {
case 1:
return sablono.core.hidden_field28129.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field28129.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28130.length)].join('')));

}
});

sablono.core.hidden_field28129.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.hidden_field28129.call(null,name__28020__auto__,null);
});

sablono.core.hidden_field28129.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.hidden_field28129.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field28129);

/**
 * Creates a month input field.
 */
sablono.core.month_field28133 = (function sablono$core$month_field28133(var_args){
var args28134 = [];
var len__21393__auto___28201 = arguments.length;
var i__21394__auto___28202 = (0);
while(true){
if((i__21394__auto___28202 < len__21393__auto___28201)){
args28134.push((arguments[i__21394__auto___28202]));

var G__28203 = (i__21394__auto___28202 + (1));
i__21394__auto___28202 = G__28203;
continue;
} else {
}
break;
}

var G__28136 = args28134.length;
switch (G__28136) {
case 1:
return sablono.core.month_field28133.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field28133.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28134.length)].join('')));

}
});

sablono.core.month_field28133.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.month_field28133.call(null,name__28020__auto__,null);
});

sablono.core.month_field28133.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.month_field28133.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field28133);

/**
 * Creates a number input field.
 */
sablono.core.number_field28137 = (function sablono$core$number_field28137(var_args){
var args28138 = [];
var len__21393__auto___28205 = arguments.length;
var i__21394__auto___28206 = (0);
while(true){
if((i__21394__auto___28206 < len__21393__auto___28205)){
args28138.push((arguments[i__21394__auto___28206]));

var G__28207 = (i__21394__auto___28206 + (1));
i__21394__auto___28206 = G__28207;
continue;
} else {
}
break;
}

var G__28140 = args28138.length;
switch (G__28140) {
case 1:
return sablono.core.number_field28137.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field28137.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28138.length)].join('')));

}
});

sablono.core.number_field28137.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.number_field28137.call(null,name__28020__auto__,null);
});

sablono.core.number_field28137.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.number_field28137.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field28137);

/**
 * Creates a password input field.
 */
sablono.core.password_field28141 = (function sablono$core$password_field28141(var_args){
var args28142 = [];
var len__21393__auto___28209 = arguments.length;
var i__21394__auto___28210 = (0);
while(true){
if((i__21394__auto___28210 < len__21393__auto___28209)){
args28142.push((arguments[i__21394__auto___28210]));

var G__28211 = (i__21394__auto___28210 + (1));
i__21394__auto___28210 = G__28211;
continue;
} else {
}
break;
}

var G__28144 = args28142.length;
switch (G__28144) {
case 1:
return sablono.core.password_field28141.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field28141.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28142.length)].join('')));

}
});

sablono.core.password_field28141.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.password_field28141.call(null,name__28020__auto__,null);
});

sablono.core.password_field28141.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.password_field28141.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field28141);

/**
 * Creates a range input field.
 */
sablono.core.range_field28145 = (function sablono$core$range_field28145(var_args){
var args28146 = [];
var len__21393__auto___28213 = arguments.length;
var i__21394__auto___28214 = (0);
while(true){
if((i__21394__auto___28214 < len__21393__auto___28213)){
args28146.push((arguments[i__21394__auto___28214]));

var G__28215 = (i__21394__auto___28214 + (1));
i__21394__auto___28214 = G__28215;
continue;
} else {
}
break;
}

var G__28148 = args28146.length;
switch (G__28148) {
case 1:
return sablono.core.range_field28145.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field28145.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28146.length)].join('')));

}
});

sablono.core.range_field28145.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.range_field28145.call(null,name__28020__auto__,null);
});

sablono.core.range_field28145.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.range_field28145.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field28145);

/**
 * Creates a search input field.
 */
sablono.core.search_field28149 = (function sablono$core$search_field28149(var_args){
var args28150 = [];
var len__21393__auto___28217 = arguments.length;
var i__21394__auto___28218 = (0);
while(true){
if((i__21394__auto___28218 < len__21393__auto___28217)){
args28150.push((arguments[i__21394__auto___28218]));

var G__28219 = (i__21394__auto___28218 + (1));
i__21394__auto___28218 = G__28219;
continue;
} else {
}
break;
}

var G__28152 = args28150.length;
switch (G__28152) {
case 1:
return sablono.core.search_field28149.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field28149.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28150.length)].join('')));

}
});

sablono.core.search_field28149.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.search_field28149.call(null,name__28020__auto__,null);
});

sablono.core.search_field28149.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.search_field28149.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field28149);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field28153 = (function sablono$core$tel_field28153(var_args){
var args28154 = [];
var len__21393__auto___28221 = arguments.length;
var i__21394__auto___28222 = (0);
while(true){
if((i__21394__auto___28222 < len__21393__auto___28221)){
args28154.push((arguments[i__21394__auto___28222]));

var G__28223 = (i__21394__auto___28222 + (1));
i__21394__auto___28222 = G__28223;
continue;
} else {
}
break;
}

var G__28156 = args28154.length;
switch (G__28156) {
case 1:
return sablono.core.tel_field28153.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field28153.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28154.length)].join('')));

}
});

sablono.core.tel_field28153.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.tel_field28153.call(null,name__28020__auto__,null);
});

sablono.core.tel_field28153.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.tel_field28153.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field28153);

/**
 * Creates a text input field.
 */
sablono.core.text_field28157 = (function sablono$core$text_field28157(var_args){
var args28158 = [];
var len__21393__auto___28225 = arguments.length;
var i__21394__auto___28226 = (0);
while(true){
if((i__21394__auto___28226 < len__21393__auto___28225)){
args28158.push((arguments[i__21394__auto___28226]));

var G__28227 = (i__21394__auto___28226 + (1));
i__21394__auto___28226 = G__28227;
continue;
} else {
}
break;
}

var G__28160 = args28158.length;
switch (G__28160) {
case 1:
return sablono.core.text_field28157.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field28157.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28158.length)].join('')));

}
});

sablono.core.text_field28157.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.text_field28157.call(null,name__28020__auto__,null);
});

sablono.core.text_field28157.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.text_field28157.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field28157);

/**
 * Creates a time input field.
 */
sablono.core.time_field28161 = (function sablono$core$time_field28161(var_args){
var args28162 = [];
var len__21393__auto___28229 = arguments.length;
var i__21394__auto___28230 = (0);
while(true){
if((i__21394__auto___28230 < len__21393__auto___28229)){
args28162.push((arguments[i__21394__auto___28230]));

var G__28231 = (i__21394__auto___28230 + (1));
i__21394__auto___28230 = G__28231;
continue;
} else {
}
break;
}

var G__28164 = args28162.length;
switch (G__28164) {
case 1:
return sablono.core.time_field28161.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field28161.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28162.length)].join('')));

}
});

sablono.core.time_field28161.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.time_field28161.call(null,name__28020__auto__,null);
});

sablono.core.time_field28161.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.time_field28161.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field28161);

/**
 * Creates a url input field.
 */
sablono.core.url_field28165 = (function sablono$core$url_field28165(var_args){
var args28166 = [];
var len__21393__auto___28233 = arguments.length;
var i__21394__auto___28234 = (0);
while(true){
if((i__21394__auto___28234 < len__21393__auto___28233)){
args28166.push((arguments[i__21394__auto___28234]));

var G__28235 = (i__21394__auto___28234 + (1));
i__21394__auto___28234 = G__28235;
continue;
} else {
}
break;
}

var G__28168 = args28166.length;
switch (G__28168) {
case 1:
return sablono.core.url_field28165.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field28165.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28166.length)].join('')));

}
});

sablono.core.url_field28165.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.url_field28165.call(null,name__28020__auto__,null);
});

sablono.core.url_field28165.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.url_field28165.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field28165);

/**
 * Creates a week input field.
 */
sablono.core.week_field28169 = (function sablono$core$week_field28169(var_args){
var args28170 = [];
var len__21393__auto___28237 = arguments.length;
var i__21394__auto___28238 = (0);
while(true){
if((i__21394__auto___28238 < len__21393__auto___28237)){
args28170.push((arguments[i__21394__auto___28238]));

var G__28239 = (i__21394__auto___28238 + (1));
i__21394__auto___28238 = G__28239;
continue;
} else {
}
break;
}

var G__28172 = args28170.length;
switch (G__28172) {
case 1:
return sablono.core.week_field28169.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field28169.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28170.length)].join('')));

}
});

sablono.core.week_field28169.cljs$core$IFn$_invoke$arity$1 = (function (name__28020__auto__){
return sablono.core.week_field28169.call(null,name__28020__auto__,null);
});

sablono.core.week_field28169.cljs$core$IFn$_invoke$arity$2 = (function (name__28020__auto__,value__28021__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__28020__auto__,value__28021__auto__);
});

sablono.core.week_field28169.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field28169);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box28241 = (function sablono$core$check_box28241(var_args){
var args28242 = [];
var len__21393__auto___28245 = arguments.length;
var i__21394__auto___28246 = (0);
while(true){
if((i__21394__auto___28246 < len__21393__auto___28245)){
args28242.push((arguments[i__21394__auto___28246]));

var G__28247 = (i__21394__auto___28246 + (1));
i__21394__auto___28246 = G__28247;
continue;
} else {
}
break;
}

var G__28244 = args28242.length;
switch (G__28244) {
case 1:
return sablono.core.check_box28241.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box28241.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box28241.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28242.length)].join('')));

}
});

sablono.core.check_box28241.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box28241.call(null,name,null);
});

sablono.core.check_box28241.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box28241.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box28241.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box28241.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box28241);
/**
 * Creates a radio button.
 */
sablono.core.radio_button28249 = (function sablono$core$radio_button28249(var_args){
var args28250 = [];
var len__21393__auto___28253 = arguments.length;
var i__21394__auto___28254 = (0);
while(true){
if((i__21394__auto___28254 < len__21393__auto___28253)){
args28250.push((arguments[i__21394__auto___28254]));

var G__28255 = (i__21394__auto___28254 + (1));
i__21394__auto___28254 = G__28255;
continue;
} else {
}
break;
}

var G__28252 = args28250.length;
switch (G__28252) {
case 1:
return sablono.core.radio_button28249.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button28249.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button28249.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28250.length)].join('')));

}
});

sablono.core.radio_button28249.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button28249.call(null,group,null);
});

sablono.core.radio_button28249.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button28249.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button28249.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button28249.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button28249);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options28257 = (function sablono$core$select_options28257(coll){
var iter__21068__auto__ = (function sablono$core$select_options28257_$_iter__28274(s__28275){
return (new cljs.core.LazySeq(null,(function (){
var s__28275__$1 = s__28275;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__28275__$1);
if(temp__4657__auto__){
var s__28275__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28275__$2)){
var c__21066__auto__ = cljs.core.chunk_first.call(null,s__28275__$2);
var size__21067__auto__ = cljs.core.count.call(null,c__21066__auto__);
var b__28277 = cljs.core.chunk_buffer.call(null,size__21067__auto__);
if((function (){var i__28276 = (0);
while(true){
if((i__28276 < size__21067__auto__)){
var x = cljs.core._nth.call(null,c__21066__auto__,i__28276);
cljs.core.chunk_append.call(null,b__28277,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28284 = x;
var text = cljs.core.nth.call(null,vec__28284,(0),null);
var val = cljs.core.nth.call(null,vec__28284,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28284,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28257.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__28290 = (i__28276 + (1));
i__28276 = G__28290;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28277),sablono$core$select_options28257_$_iter__28274.call(null,cljs.core.chunk_rest.call(null,s__28275__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28277),null);
}
} else {
var x = cljs.core.first.call(null,s__28275__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__28287 = x;
var text = cljs.core.nth.call(null,vec__28287,(0),null);
var val = cljs.core.nth.call(null,vec__28287,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__28287,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options28257.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options28257_$_iter__28274.call(null,cljs.core.rest.call(null,s__28275__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__21068__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options28257);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down28291 = (function sablono$core$drop_down28291(var_args){
var args28292 = [];
var len__21393__auto___28295 = arguments.length;
var i__21394__auto___28296 = (0);
while(true){
if((i__21394__auto___28296 < len__21393__auto___28295)){
args28292.push((arguments[i__21394__auto___28296]));

var G__28297 = (i__21394__auto___28296 + (1));
i__21394__auto___28296 = G__28297;
continue;
} else {
}
break;
}

var G__28294 = args28292.length;
switch (G__28294) {
case 2:
return sablono.core.drop_down28291.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down28291.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28292.length)].join('')));

}
});

sablono.core.drop_down28291.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down28291.call(null,name,options,null);
});

sablono.core.drop_down28291.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down28291.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down28291);
/**
 * Creates a text area element.
 */
sablono.core.text_area28299 = (function sablono$core$text_area28299(var_args){
var args28300 = [];
var len__21393__auto___28303 = arguments.length;
var i__21394__auto___28304 = (0);
while(true){
if((i__21394__auto___28304 < len__21393__auto___28303)){
args28300.push((arguments[i__21394__auto___28304]));

var G__28305 = (i__21394__auto___28304 + (1));
i__21394__auto___28304 = G__28305;
continue;
} else {
}
break;
}

var G__28302 = args28300.length;
switch (G__28302) {
case 1:
return sablono.core.text_area28299.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area28299.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28300.length)].join('')));

}
});

sablono.core.text_area28299.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area28299.call(null,name,null);
});

sablono.core.text_area28299.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__20285__auto__ = value;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area28299.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area28299);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label28307 = (function sablono$core$label28307(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label28307);
/**
 * Creates a submit button.
 */
sablono.core.submit_button28308 = (function sablono$core$submit_button28308(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button28308);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button28309 = (function sablono$core$reset_button28309(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button28309);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to28310 = (function sablono$core$form_to28310(var_args){
var args__21400__auto__ = [];
var len__21393__auto___28317 = arguments.length;
var i__21394__auto___28318 = (0);
while(true){
if((i__21394__auto___28318 < len__21393__auto___28317)){
args__21400__auto__.push((arguments[i__21394__auto___28318]));

var G__28319 = (i__21394__auto___28318 + (1));
i__21394__auto___28318 = G__28319;
continue;
} else {
}
break;
}

var argseq__21401__auto__ = ((((1) < args__21400__auto__.length))?(new cljs.core.IndexedSeq(args__21400__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to28310.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__21401__auto__);
});

sablono.core.form_to28310.cljs$core$IFn$_invoke$arity$variadic = (function (p__28313,body){
var vec__28314 = p__28313;
var method = cljs.core.nth.call(null,vec__28314,(0),null);
var action = cljs.core.nth.call(null,vec__28314,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to28310.cljs$lang$maxFixedArity = (1);

sablono.core.form_to28310.cljs$lang$applyTo = (function (seq28311){
var G__28312 = cljs.core.first.call(null,seq28311);
var seq28311__$1 = cljs.core.next.call(null,seq28311);
return sablono.core.form_to28310.cljs$core$IFn$_invoke$arity$variadic(G__28312,seq28311__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to28310);

//# sourceMappingURL=core.js.map?rel=1519350856918