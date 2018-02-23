// Compiled by ClojureScript 1.9.293 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__30849){
var map__30874 = p__30849;
var map__30874__$1 = ((((!((map__30874 == null)))?((((map__30874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30874):map__30874);
var m = map__30874__$1;
var n = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__30874__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30876_30898 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30877_30899 = null;
var count__30878_30900 = (0);
var i__30879_30901 = (0);
while(true){
if((i__30879_30901 < count__30878_30900)){
var f_30902 = cljs.core._nth.call(null,chunk__30877_30899,i__30879_30901);
cljs.core.println.call(null,"  ",f_30902);

var G__30903 = seq__30876_30898;
var G__30904 = chunk__30877_30899;
var G__30905 = count__30878_30900;
var G__30906 = (i__30879_30901 + (1));
seq__30876_30898 = G__30903;
chunk__30877_30899 = G__30904;
count__30878_30900 = G__30905;
i__30879_30901 = G__30906;
continue;
} else {
var temp__4657__auto___30907 = cljs.core.seq.call(null,seq__30876_30898);
if(temp__4657__auto___30907){
var seq__30876_30908__$1 = temp__4657__auto___30907;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30876_30908__$1)){
var c__21099__auto___30909 = cljs.core.chunk_first.call(null,seq__30876_30908__$1);
var G__30910 = cljs.core.chunk_rest.call(null,seq__30876_30908__$1);
var G__30911 = c__21099__auto___30909;
var G__30912 = cljs.core.count.call(null,c__21099__auto___30909);
var G__30913 = (0);
seq__30876_30898 = G__30910;
chunk__30877_30899 = G__30911;
count__30878_30900 = G__30912;
i__30879_30901 = G__30913;
continue;
} else {
var f_30914 = cljs.core.first.call(null,seq__30876_30908__$1);
cljs.core.println.call(null,"  ",f_30914);

var G__30915 = cljs.core.next.call(null,seq__30876_30908__$1);
var G__30916 = null;
var G__30917 = (0);
var G__30918 = (0);
seq__30876_30898 = G__30915;
chunk__30877_30899 = G__30916;
count__30878_30900 = G__30917;
i__30879_30901 = G__30918;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30919 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__20285__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30919);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30919)))?cljs.core.second.call(null,arglists_30919):arglists_30919));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30880_30920 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30881_30921 = null;
var count__30882_30922 = (0);
var i__30883_30923 = (0);
while(true){
if((i__30883_30923 < count__30882_30922)){
var vec__30884_30924 = cljs.core._nth.call(null,chunk__30881_30921,i__30883_30923);
var name_30925 = cljs.core.nth.call(null,vec__30884_30924,(0),null);
var map__30887_30926 = cljs.core.nth.call(null,vec__30884_30924,(1),null);
var map__30887_30927__$1 = ((((!((map__30887_30926 == null)))?((((map__30887_30926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30887_30926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30887_30926):map__30887_30926);
var doc_30928 = cljs.core.get.call(null,map__30887_30927__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30929 = cljs.core.get.call(null,map__30887_30927__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30925);

cljs.core.println.call(null," ",arglists_30929);

if(cljs.core.truth_(doc_30928)){
cljs.core.println.call(null," ",doc_30928);
} else {
}

var G__30930 = seq__30880_30920;
var G__30931 = chunk__30881_30921;
var G__30932 = count__30882_30922;
var G__30933 = (i__30883_30923 + (1));
seq__30880_30920 = G__30930;
chunk__30881_30921 = G__30931;
count__30882_30922 = G__30932;
i__30883_30923 = G__30933;
continue;
} else {
var temp__4657__auto___30934 = cljs.core.seq.call(null,seq__30880_30920);
if(temp__4657__auto___30934){
var seq__30880_30935__$1 = temp__4657__auto___30934;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30880_30935__$1)){
var c__21099__auto___30936 = cljs.core.chunk_first.call(null,seq__30880_30935__$1);
var G__30937 = cljs.core.chunk_rest.call(null,seq__30880_30935__$1);
var G__30938 = c__21099__auto___30936;
var G__30939 = cljs.core.count.call(null,c__21099__auto___30936);
var G__30940 = (0);
seq__30880_30920 = G__30937;
chunk__30881_30921 = G__30938;
count__30882_30922 = G__30939;
i__30883_30923 = G__30940;
continue;
} else {
var vec__30889_30941 = cljs.core.first.call(null,seq__30880_30935__$1);
var name_30942 = cljs.core.nth.call(null,vec__30889_30941,(0),null);
var map__30892_30943 = cljs.core.nth.call(null,vec__30889_30941,(1),null);
var map__30892_30944__$1 = ((((!((map__30892_30943 == null)))?((((map__30892_30943.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30892_30943.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30892_30943):map__30892_30943);
var doc_30945 = cljs.core.get.call(null,map__30892_30944__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_30946 = cljs.core.get.call(null,map__30892_30944__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_30942);

cljs.core.println.call(null," ",arglists_30946);

if(cljs.core.truth_(doc_30945)){
cljs.core.println.call(null," ",doc_30945);
} else {
}

var G__30947 = cljs.core.next.call(null,seq__30880_30935__$1);
var G__30948 = null;
var G__30949 = (0);
var G__30950 = (0);
seq__30880_30920 = G__30947;
chunk__30881_30921 = G__30948;
count__30882_30922 = G__30949;
i__30883_30923 = G__30950;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__30894 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__30895 = null;
var count__30896 = (0);
var i__30897 = (0);
while(true){
if((i__30897 < count__30896)){
var role = cljs.core._nth.call(null,chunk__30895,i__30897);
var temp__4657__auto___30951__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30951__$1)){
var spec_30952 = temp__4657__auto___30951__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30952));
} else {
}

var G__30953 = seq__30894;
var G__30954 = chunk__30895;
var G__30955 = count__30896;
var G__30956 = (i__30897 + (1));
seq__30894 = G__30953;
chunk__30895 = G__30954;
count__30896 = G__30955;
i__30897 = G__30956;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__30894);
if(temp__4657__auto____$1){
var seq__30894__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30894__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__30894__$1);
var G__30957 = cljs.core.chunk_rest.call(null,seq__30894__$1);
var G__30958 = c__21099__auto__;
var G__30959 = cljs.core.count.call(null,c__21099__auto__);
var G__30960 = (0);
seq__30894 = G__30957;
chunk__30895 = G__30958;
count__30896 = G__30959;
i__30897 = G__30960;
continue;
} else {
var role = cljs.core.first.call(null,seq__30894__$1);
var temp__4657__auto___30961__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___30961__$2)){
var spec_30962 = temp__4657__auto___30961__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_30962));
} else {
}

var G__30963 = cljs.core.next.call(null,seq__30894__$1);
var G__30964 = null;
var G__30965 = (0);
var G__30966 = (0);
seq__30894 = G__30963;
chunk__30895 = G__30964;
count__30896 = G__30965;
i__30897 = G__30966;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1519350859580