// Compiled by ClojureScript 1.9.293 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__20285__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__20285__auto__){
return or__20285__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__20285__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28469_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28469_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__28474 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28475 = null;
var count__28476 = (0);
var i__28477 = (0);
while(true){
if((i__28477 < count__28476)){
var n = cljs.core._nth.call(null,chunk__28475,i__28477);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28478 = seq__28474;
var G__28479 = chunk__28475;
var G__28480 = count__28476;
var G__28481 = (i__28477 + (1));
seq__28474 = G__28478;
chunk__28475 = G__28479;
count__28476 = G__28480;
i__28477 = G__28481;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28474);
if(temp__4657__auto__){
var seq__28474__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28474__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__28474__$1);
var G__28482 = cljs.core.chunk_rest.call(null,seq__28474__$1);
var G__28483 = c__21099__auto__;
var G__28484 = cljs.core.count.call(null,c__21099__auto__);
var G__28485 = (0);
seq__28474 = G__28482;
chunk__28475 = G__28483;
count__28476 = G__28484;
i__28477 = G__28485;
continue;
} else {
var n = cljs.core.first.call(null,seq__28474__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__28486 = cljs.core.next.call(null,seq__28474__$1);
var G__28487 = null;
var G__28488 = (0);
var G__28489 = (0);
seq__28474 = G__28486;
chunk__28475 = G__28487;
count__28476 = G__28488;
i__28477 = G__28489;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__28540_28551 = cljs.core.seq.call(null,deps);
var chunk__28541_28552 = null;
var count__28542_28553 = (0);
var i__28543_28554 = (0);
while(true){
if((i__28543_28554 < count__28542_28553)){
var dep_28555 = cljs.core._nth.call(null,chunk__28541_28552,i__28543_28554);
topo_sort_helper_STAR_.call(null,dep_28555,(depth + (1)),state);

var G__28556 = seq__28540_28551;
var G__28557 = chunk__28541_28552;
var G__28558 = count__28542_28553;
var G__28559 = (i__28543_28554 + (1));
seq__28540_28551 = G__28556;
chunk__28541_28552 = G__28557;
count__28542_28553 = G__28558;
i__28543_28554 = G__28559;
continue;
} else {
var temp__4657__auto___28560 = cljs.core.seq.call(null,seq__28540_28551);
if(temp__4657__auto___28560){
var seq__28540_28561__$1 = temp__4657__auto___28560;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28540_28561__$1)){
var c__21099__auto___28562 = cljs.core.chunk_first.call(null,seq__28540_28561__$1);
var G__28563 = cljs.core.chunk_rest.call(null,seq__28540_28561__$1);
var G__28564 = c__21099__auto___28562;
var G__28565 = cljs.core.count.call(null,c__21099__auto___28562);
var G__28566 = (0);
seq__28540_28551 = G__28563;
chunk__28541_28552 = G__28564;
count__28542_28553 = G__28565;
i__28543_28554 = G__28566;
continue;
} else {
var dep_28567 = cljs.core.first.call(null,seq__28540_28561__$1);
topo_sort_helper_STAR_.call(null,dep_28567,(depth + (1)),state);

var G__28568 = cljs.core.next.call(null,seq__28540_28561__$1);
var G__28569 = null;
var G__28570 = (0);
var G__28571 = (0);
seq__28540_28551 = G__28568;
chunk__28541_28552 = G__28569;
count__28542_28553 = G__28570;
i__28543_28554 = G__28571;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28544){
var vec__28548 = p__28544;
var seq__28549 = cljs.core.seq.call(null,vec__28548);
var first__28550 = cljs.core.first.call(null,seq__28549);
var seq__28549__$1 = cljs.core.next.call(null,seq__28549);
var x = first__28550;
var xs = seq__28549__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28548,seq__28549,first__28550,seq__28549__$1,x,xs,get_deps__$1){
return (function (p1__28490_SHARP_){
return clojure.set.difference.call(null,p1__28490_SHARP_,x);
});})(vec__28548,seq__28549,first__28550,seq__28549__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__28584 = cljs.core.seq.call(null,provides);
var chunk__28585 = null;
var count__28586 = (0);
var i__28587 = (0);
while(true){
if((i__28587 < count__28586)){
var prov = cljs.core._nth.call(null,chunk__28585,i__28587);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28588_28596 = cljs.core.seq.call(null,requires);
var chunk__28589_28597 = null;
var count__28590_28598 = (0);
var i__28591_28599 = (0);
while(true){
if((i__28591_28599 < count__28590_28598)){
var req_28600 = cljs.core._nth.call(null,chunk__28589_28597,i__28591_28599);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28600,prov);

var G__28601 = seq__28588_28596;
var G__28602 = chunk__28589_28597;
var G__28603 = count__28590_28598;
var G__28604 = (i__28591_28599 + (1));
seq__28588_28596 = G__28601;
chunk__28589_28597 = G__28602;
count__28590_28598 = G__28603;
i__28591_28599 = G__28604;
continue;
} else {
var temp__4657__auto___28605 = cljs.core.seq.call(null,seq__28588_28596);
if(temp__4657__auto___28605){
var seq__28588_28606__$1 = temp__4657__auto___28605;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28588_28606__$1)){
var c__21099__auto___28607 = cljs.core.chunk_first.call(null,seq__28588_28606__$1);
var G__28608 = cljs.core.chunk_rest.call(null,seq__28588_28606__$1);
var G__28609 = c__21099__auto___28607;
var G__28610 = cljs.core.count.call(null,c__21099__auto___28607);
var G__28611 = (0);
seq__28588_28596 = G__28608;
chunk__28589_28597 = G__28609;
count__28590_28598 = G__28610;
i__28591_28599 = G__28611;
continue;
} else {
var req_28612 = cljs.core.first.call(null,seq__28588_28606__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28612,prov);

var G__28613 = cljs.core.next.call(null,seq__28588_28606__$1);
var G__28614 = null;
var G__28615 = (0);
var G__28616 = (0);
seq__28588_28596 = G__28613;
chunk__28589_28597 = G__28614;
count__28590_28598 = G__28615;
i__28591_28599 = G__28616;
continue;
}
} else {
}
}
break;
}

var G__28617 = seq__28584;
var G__28618 = chunk__28585;
var G__28619 = count__28586;
var G__28620 = (i__28587 + (1));
seq__28584 = G__28617;
chunk__28585 = G__28618;
count__28586 = G__28619;
i__28587 = G__28620;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28584);
if(temp__4657__auto__){
var seq__28584__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28584__$1)){
var c__21099__auto__ = cljs.core.chunk_first.call(null,seq__28584__$1);
var G__28621 = cljs.core.chunk_rest.call(null,seq__28584__$1);
var G__28622 = c__21099__auto__;
var G__28623 = cljs.core.count.call(null,c__21099__auto__);
var G__28624 = (0);
seq__28584 = G__28621;
chunk__28585 = G__28622;
count__28586 = G__28623;
i__28587 = G__28624;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28584__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28592_28625 = cljs.core.seq.call(null,requires);
var chunk__28593_28626 = null;
var count__28594_28627 = (0);
var i__28595_28628 = (0);
while(true){
if((i__28595_28628 < count__28594_28627)){
var req_28629 = cljs.core._nth.call(null,chunk__28593_28626,i__28595_28628);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28629,prov);

var G__28630 = seq__28592_28625;
var G__28631 = chunk__28593_28626;
var G__28632 = count__28594_28627;
var G__28633 = (i__28595_28628 + (1));
seq__28592_28625 = G__28630;
chunk__28593_28626 = G__28631;
count__28594_28627 = G__28632;
i__28595_28628 = G__28633;
continue;
} else {
var temp__4657__auto___28634__$1 = cljs.core.seq.call(null,seq__28592_28625);
if(temp__4657__auto___28634__$1){
var seq__28592_28635__$1 = temp__4657__auto___28634__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28592_28635__$1)){
var c__21099__auto___28636 = cljs.core.chunk_first.call(null,seq__28592_28635__$1);
var G__28637 = cljs.core.chunk_rest.call(null,seq__28592_28635__$1);
var G__28638 = c__21099__auto___28636;
var G__28639 = cljs.core.count.call(null,c__21099__auto___28636);
var G__28640 = (0);
seq__28592_28625 = G__28637;
chunk__28593_28626 = G__28638;
count__28594_28627 = G__28639;
i__28595_28628 = G__28640;
continue;
} else {
var req_28641 = cljs.core.first.call(null,seq__28592_28635__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28641,prov);

var G__28642 = cljs.core.next.call(null,seq__28592_28635__$1);
var G__28643 = null;
var G__28644 = (0);
var G__28645 = (0);
seq__28592_28625 = G__28642;
chunk__28593_28626 = G__28643;
count__28594_28627 = G__28644;
i__28595_28628 = G__28645;
continue;
}
} else {
}
}
break;
}

var G__28646 = cljs.core.next.call(null,seq__28584__$1);
var G__28647 = null;
var G__28648 = (0);
var G__28649 = (0);
seq__28584 = G__28646;
chunk__28585 = G__28647;
count__28586 = G__28648;
i__28587 = G__28649;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__28654_28658 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28655_28659 = null;
var count__28656_28660 = (0);
var i__28657_28661 = (0);
while(true){
if((i__28657_28661 < count__28656_28660)){
var ns_28662 = cljs.core._nth.call(null,chunk__28655_28659,i__28657_28661);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28662);

var G__28663 = seq__28654_28658;
var G__28664 = chunk__28655_28659;
var G__28665 = count__28656_28660;
var G__28666 = (i__28657_28661 + (1));
seq__28654_28658 = G__28663;
chunk__28655_28659 = G__28664;
count__28656_28660 = G__28665;
i__28657_28661 = G__28666;
continue;
} else {
var temp__4657__auto___28667 = cljs.core.seq.call(null,seq__28654_28658);
if(temp__4657__auto___28667){
var seq__28654_28668__$1 = temp__4657__auto___28667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28654_28668__$1)){
var c__21099__auto___28669 = cljs.core.chunk_first.call(null,seq__28654_28668__$1);
var G__28670 = cljs.core.chunk_rest.call(null,seq__28654_28668__$1);
var G__28671 = c__21099__auto___28669;
var G__28672 = cljs.core.count.call(null,c__21099__auto___28669);
var G__28673 = (0);
seq__28654_28658 = G__28670;
chunk__28655_28659 = G__28671;
count__28656_28660 = G__28672;
i__28657_28661 = G__28673;
continue;
} else {
var ns_28674 = cljs.core.first.call(null,seq__28654_28668__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28674);

var G__28675 = cljs.core.next.call(null,seq__28654_28668__$1);
var G__28676 = null;
var G__28677 = (0);
var G__28678 = (0);
seq__28654_28658 = G__28675;
chunk__28655_28659 = G__28676;
count__28656_28660 = G__28677;
i__28657_28661 = G__28678;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__20285__auto__ = goog.require__;
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__28679__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28679 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28680__i = 0, G__28680__a = new Array(arguments.length -  0);
while (G__28680__i < G__28680__a.length) {G__28680__a[G__28680__i] = arguments[G__28680__i + 0]; ++G__28680__i;}
  args = new cljs.core.IndexedSeq(G__28680__a,0);
} 
return G__28679__delegate.call(this,args);};
G__28679.cljs$lang$maxFixedArity = 0;
G__28679.cljs$lang$applyTo = (function (arglist__28681){
var args = cljs.core.seq(arglist__28681);
return G__28679__delegate(args);
});
G__28679.cljs$core$IFn$_invoke$arity$variadic = G__28679__delegate;
return G__28679;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28683 = cljs.core._EQ_;
var expr__28684 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28683.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28684))){
var path_parts = ((function (pred__28683,expr__28684){
return (function (p1__28682_SHARP_){
return clojure.string.split.call(null,p1__28682_SHARP_,/[\/\\]/);
});})(pred__28683,expr__28684))
;
var sep = (cljs.core.truth_(cljs.core.re_matches.call(null,/win.*/,process.platform))?"\\":"/");
var root = clojure.string.join.call(null,sep,cljs.core.pop.call(null,cljs.core.pop.call(null,path_parts.call(null,__dirname))));
return ((function (path_parts,sep,root,pred__28683,expr__28684){
return (function (request_url,callback){

var cache_path = clojure.string.join.call(null,sep,cljs.core.cons.call(null,root,path_parts.call(null,figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))));
(require.cache[cache_path] = null);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e28686){if((e28686 instanceof Error)){
var e = e28686;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28686;

}
}})());
});
;})(path_parts,sep,root,pred__28683,expr__28684))
} else {
if(cljs.core.truth_(pred__28683.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28684))){
return ((function (pred__28683,expr__28684){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred,pred__28683,expr__28684){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__28683,expr__28684))
);

return deferred.addErrback(((function (deferred,pred__28683,expr__28684){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__28683,expr__28684))
);
});
;})(pred__28683,expr__28684))
} else {
return ((function (pred__28683,expr__28684){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28683,expr__28684))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28687,callback){
var map__28690 = p__28687;
var map__28690__$1 = ((((!((map__28690 == null)))?((((map__28690.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28690.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28690):map__28690);
var file_msg = map__28690__$1;
var request_url = cljs.core.get.call(null,map__28690__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__28690,map__28690__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28690,map__28690__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__){
return (function (state_28714){
var state_val_28715 = (state_28714[(1)]);
if((state_val_28715 === (7))){
var inst_28710 = (state_28714[(2)]);
var state_28714__$1 = state_28714;
var statearr_28716_28736 = state_28714__$1;
(statearr_28716_28736[(2)] = inst_28710);

(statearr_28716_28736[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (1))){
var state_28714__$1 = state_28714;
var statearr_28717_28737 = state_28714__$1;
(statearr_28717_28737[(2)] = null);

(statearr_28717_28737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (4))){
var inst_28694 = (state_28714[(7)]);
var inst_28694__$1 = (state_28714[(2)]);
var state_28714__$1 = (function (){var statearr_28718 = state_28714;
(statearr_28718[(7)] = inst_28694__$1);

return statearr_28718;
})();
if(cljs.core.truth_(inst_28694__$1)){
var statearr_28719_28738 = state_28714__$1;
(statearr_28719_28738[(1)] = (5));

} else {
var statearr_28720_28739 = state_28714__$1;
(statearr_28720_28739[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (6))){
var state_28714__$1 = state_28714;
var statearr_28721_28740 = state_28714__$1;
(statearr_28721_28740[(2)] = null);

(statearr_28721_28740[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (3))){
var inst_28712 = (state_28714[(2)]);
var state_28714__$1 = state_28714;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28714__$1,inst_28712);
} else {
if((state_val_28715 === (2))){
var state_28714__$1 = state_28714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28714__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28715 === (11))){
var inst_28706 = (state_28714[(2)]);
var state_28714__$1 = (function (){var statearr_28722 = state_28714;
(statearr_28722[(8)] = inst_28706);

return statearr_28722;
})();
var statearr_28723_28741 = state_28714__$1;
(statearr_28723_28741[(2)] = null);

(statearr_28723_28741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (9))){
var inst_28698 = (state_28714[(9)]);
var inst_28700 = (state_28714[(10)]);
var inst_28702 = inst_28700.call(null,inst_28698);
var state_28714__$1 = state_28714;
var statearr_28724_28742 = state_28714__$1;
(statearr_28724_28742[(2)] = inst_28702);

(statearr_28724_28742[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (5))){
var inst_28694 = (state_28714[(7)]);
var inst_28696 = figwheel.client.file_reloading.blocking_load.call(null,inst_28694);
var state_28714__$1 = state_28714;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28714__$1,(8),inst_28696);
} else {
if((state_val_28715 === (10))){
var inst_28698 = (state_28714[(9)]);
var inst_28704 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28698);
var state_28714__$1 = state_28714;
var statearr_28725_28743 = state_28714__$1;
(statearr_28725_28743[(2)] = inst_28704);

(statearr_28725_28743[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28715 === (8))){
var inst_28694 = (state_28714[(7)]);
var inst_28700 = (state_28714[(10)]);
var inst_28698 = (state_28714[(2)]);
var inst_28699 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28700__$1 = cljs.core.get.call(null,inst_28699,inst_28694);
var state_28714__$1 = (function (){var statearr_28726 = state_28714;
(statearr_28726[(9)] = inst_28698);

(statearr_28726[(10)] = inst_28700__$1);

return statearr_28726;
})();
if(cljs.core.truth_(inst_28700__$1)){
var statearr_28727_28744 = state_28714__$1;
(statearr_28727_28744[(1)] = (9));

} else {
var statearr_28728_28745 = state_28714__$1;
(statearr_28728_28745[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__22490__auto__))
;
return ((function (switch__22378__auto__,c__22490__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$state_machine__22379__auto____0 = (function (){
var statearr_28732 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28732[(0)] = figwheel$client$file_reloading$state_machine__22379__auto__);

(statearr_28732[(1)] = (1));

return statearr_28732;
});
var figwheel$client$file_reloading$state_machine__22379__auto____1 = (function (state_28714){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_28714);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e28733){if((e28733 instanceof Object)){
var ex__22382__auto__ = e28733;
var statearr_28734_28746 = state_28714;
(statearr_28734_28746[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28747 = state_28714;
state_28714 = G__28747;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__22379__auto__ = function(state_28714){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__22379__auto____1.call(this,state_28714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__22379__auto____0;
figwheel$client$file_reloading$state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__22379__auto____1;
return figwheel$client$file_reloading$state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__))
})();
var state__22492__auto__ = (function (){var statearr_28735 = f__22491__auto__.call(null);
(statearr_28735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_28735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__))
);

return c__22490__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28748,callback){
var map__28751 = p__28748;
var map__28751__$1 = ((((!((map__28751 == null)))?((((map__28751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28751.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28751):map__28751);
var file_msg = map__28751__$1;
var namespace = cljs.core.get.call(null,map__28751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28751,map__28751__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28751,map__28751__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28753){
var map__28756 = p__28753;
var map__28756__$1 = ((((!((map__28756 == null)))?((((map__28756.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28756.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28756):map__28756);
var file_msg = map__28756__$1;
var namespace = cljs.core.get.call(null,map__28756__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__20273__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__20273__auto__){
var or__20285__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
var or__20285__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__20285__auto____$1)){
return or__20285__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__20273__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28758,callback){
var map__28761 = p__28758;
var map__28761__$1 = ((((!((map__28761 == null)))?((((map__28761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28761):map__28761);
var file_msg = map__28761__$1;
var request_url = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28761__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__22490__auto___28865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto___28865,out){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto___28865,out){
return (function (state_28847){
var state_val_28848 = (state_28847[(1)]);
if((state_val_28848 === (1))){
var inst_28821 = cljs.core.seq.call(null,files);
var inst_28822 = cljs.core.first.call(null,inst_28821);
var inst_28823 = cljs.core.next.call(null,inst_28821);
var inst_28824 = files;
var state_28847__$1 = (function (){var statearr_28849 = state_28847;
(statearr_28849[(7)] = inst_28822);

(statearr_28849[(8)] = inst_28824);

(statearr_28849[(9)] = inst_28823);

return statearr_28849;
})();
var statearr_28850_28866 = state_28847__$1;
(statearr_28850_28866[(2)] = null);

(statearr_28850_28866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (2))){
var inst_28824 = (state_28847[(8)]);
var inst_28830 = (state_28847[(10)]);
var inst_28829 = cljs.core.seq.call(null,inst_28824);
var inst_28830__$1 = cljs.core.first.call(null,inst_28829);
var inst_28831 = cljs.core.next.call(null,inst_28829);
var inst_28832 = (inst_28830__$1 == null);
var inst_28833 = cljs.core.not.call(null,inst_28832);
var state_28847__$1 = (function (){var statearr_28851 = state_28847;
(statearr_28851[(11)] = inst_28831);

(statearr_28851[(10)] = inst_28830__$1);

return statearr_28851;
})();
if(inst_28833){
var statearr_28852_28867 = state_28847__$1;
(statearr_28852_28867[(1)] = (4));

} else {
var statearr_28853_28868 = state_28847__$1;
(statearr_28853_28868[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (3))){
var inst_28845 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28847__$1,inst_28845);
} else {
if((state_val_28848 === (4))){
var inst_28830 = (state_28847[(10)]);
var inst_28835 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28830);
var state_28847__$1 = state_28847;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28847__$1,(7),inst_28835);
} else {
if((state_val_28848 === (5))){
var inst_28841 = cljs.core.async.close_BANG_.call(null,out);
var state_28847__$1 = state_28847;
var statearr_28854_28869 = state_28847__$1;
(statearr_28854_28869[(2)] = inst_28841);

(statearr_28854_28869[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (6))){
var inst_28843 = (state_28847[(2)]);
var state_28847__$1 = state_28847;
var statearr_28855_28870 = state_28847__$1;
(statearr_28855_28870[(2)] = inst_28843);

(statearr_28855_28870[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28848 === (7))){
var inst_28831 = (state_28847[(11)]);
var inst_28837 = (state_28847[(2)]);
var inst_28838 = cljs.core.async.put_BANG_.call(null,out,inst_28837);
var inst_28824 = inst_28831;
var state_28847__$1 = (function (){var statearr_28856 = state_28847;
(statearr_28856[(12)] = inst_28838);

(statearr_28856[(8)] = inst_28824);

return statearr_28856;
})();
var statearr_28857_28871 = state_28847__$1;
(statearr_28857_28871[(2)] = null);

(statearr_28857_28871[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__22490__auto___28865,out))
;
return ((function (switch__22378__auto__,c__22490__auto___28865,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0 = (function (){
var statearr_28861 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28861[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__);

(statearr_28861[(1)] = (1));

return statearr_28861;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1 = (function (state_28847){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_28847);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e28862){if((e28862 instanceof Object)){
var ex__22382__auto__ = e28862;
var statearr_28863_28872 = state_28847;
(statearr_28863_28872[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28847);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28873 = state_28847;
state_28847 = G__28873;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__ = function(state_28847){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1.call(this,state_28847);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto___28865,out))
})();
var state__22492__auto__ = (function (){var statearr_28864 = f__22491__auto__.call(null);
(statearr_28864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto___28865);

return statearr_28864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto___28865,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28874,opts){
var map__28878 = p__28874;
var map__28878__$1 = ((((!((map__28878 == null)))?((((map__28878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28878.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28878):map__28878);
var eval_body = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28878__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__20273__auto__ = eval_body;
if(cljs.core.truth_(and__20273__auto__)){
return typeof eval_body === 'string';
} else {
return and__20273__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e28880){var e = e28880;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__28881_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28881_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__28890){
var vec__28891 = p__28890;
var k = cljs.core.nth.call(null,vec__28891,(0),null);
var v = cljs.core.nth.call(null,vec__28891,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28894){
var vec__28895 = p__28894;
var k = cljs.core.nth.call(null,vec__28895,(0),null);
var v = cljs.core.nth.call(null,vec__28895,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28901,p__28902){
var map__29150 = p__28901;
var map__29150__$1 = ((((!((map__29150 == null)))?((((map__29150.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29150.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29150):map__29150);
var opts = map__29150__$1;
var before_jsload = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__29150__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__29151 = p__28902;
var map__29151__$1 = ((((!((map__29151 == null)))?((((map__29151.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29151.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29151):map__29151);
var msg = map__29151__$1;
var files = cljs.core.get.call(null,map__29151__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__29151__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__29151__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_29305){
var state_val_29306 = (state_29305[(1)]);
if((state_val_29306 === (7))){
var inst_29167 = (state_29305[(7)]);
var inst_29165 = (state_29305[(8)]);
var inst_29168 = (state_29305[(9)]);
var inst_29166 = (state_29305[(10)]);
var inst_29173 = cljs.core._nth.call(null,inst_29166,inst_29168);
var inst_29174 = figwheel.client.file_reloading.eval_body.call(null,inst_29173,opts);
var inst_29175 = (inst_29168 + (1));
var tmp29307 = inst_29167;
var tmp29308 = inst_29165;
var tmp29309 = inst_29166;
var inst_29165__$1 = tmp29308;
var inst_29166__$1 = tmp29309;
var inst_29167__$1 = tmp29307;
var inst_29168__$1 = inst_29175;
var state_29305__$1 = (function (){var statearr_29310 = state_29305;
(statearr_29310[(7)] = inst_29167__$1);

(statearr_29310[(8)] = inst_29165__$1);

(statearr_29310[(9)] = inst_29168__$1);

(statearr_29310[(10)] = inst_29166__$1);

(statearr_29310[(11)] = inst_29174);

return statearr_29310;
})();
var statearr_29311_29397 = state_29305__$1;
(statearr_29311_29397[(2)] = null);

(statearr_29311_29397[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (20))){
var inst_29208 = (state_29305[(12)]);
var inst_29216 = figwheel.client.file_reloading.sort_files.call(null,inst_29208);
var state_29305__$1 = state_29305;
var statearr_29312_29398 = state_29305__$1;
(statearr_29312_29398[(2)] = inst_29216);

(statearr_29312_29398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (27))){
var state_29305__$1 = state_29305;
var statearr_29313_29399 = state_29305__$1;
(statearr_29313_29399[(2)] = null);

(statearr_29313_29399[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (1))){
var inst_29157 = (state_29305[(13)]);
var inst_29154 = before_jsload.call(null,files);
var inst_29155 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_29156 = (function (){return ((function (inst_29157,inst_29154,inst_29155,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28898_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28898_SHARP_);
});
;})(inst_29157,inst_29154,inst_29155,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29157__$1 = cljs.core.filter.call(null,inst_29156,files);
var inst_29158 = cljs.core.not_empty.call(null,inst_29157__$1);
var state_29305__$1 = (function (){var statearr_29314 = state_29305;
(statearr_29314[(14)] = inst_29155);

(statearr_29314[(15)] = inst_29154);

(statearr_29314[(13)] = inst_29157__$1);

return statearr_29314;
})();
if(cljs.core.truth_(inst_29158)){
var statearr_29315_29400 = state_29305__$1;
(statearr_29315_29400[(1)] = (2));

} else {
var statearr_29316_29401 = state_29305__$1;
(statearr_29316_29401[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (24))){
var state_29305__$1 = state_29305;
var statearr_29317_29402 = state_29305__$1;
(statearr_29317_29402[(2)] = null);

(statearr_29317_29402[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (39))){
var inst_29258 = (state_29305[(16)]);
var state_29305__$1 = state_29305;
var statearr_29318_29403 = state_29305__$1;
(statearr_29318_29403[(2)] = inst_29258);

(statearr_29318_29403[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (46))){
var inst_29300 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29319_29404 = state_29305__$1;
(statearr_29319_29404[(2)] = inst_29300);

(statearr_29319_29404[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (4))){
var inst_29202 = (state_29305[(2)]);
var inst_29203 = cljs.core.List.EMPTY;
var inst_29204 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_29203);
var inst_29205 = (function (){return ((function (inst_29202,inst_29203,inst_29204,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28899_SHARP_){
var and__20273__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28899_SHARP_);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28899_SHARP_));
} else {
return and__20273__auto__;
}
});
;})(inst_29202,inst_29203,inst_29204,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29206 = cljs.core.filter.call(null,inst_29205,files);
var inst_29207 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_29208 = cljs.core.concat.call(null,inst_29206,inst_29207);
var state_29305__$1 = (function (){var statearr_29320 = state_29305;
(statearr_29320[(17)] = inst_29202);

(statearr_29320[(18)] = inst_29204);

(statearr_29320[(12)] = inst_29208);

return statearr_29320;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_29321_29405 = state_29305__$1;
(statearr_29321_29405[(1)] = (16));

} else {
var statearr_29322_29406 = state_29305__$1;
(statearr_29322_29406[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (15))){
var inst_29192 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29323_29407 = state_29305__$1;
(statearr_29323_29407[(2)] = inst_29192);

(statearr_29323_29407[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (21))){
var inst_29218 = (state_29305[(19)]);
var inst_29218__$1 = (state_29305[(2)]);
var inst_29219 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_29218__$1);
var state_29305__$1 = (function (){var statearr_29324 = state_29305;
(statearr_29324[(19)] = inst_29218__$1);

return statearr_29324;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29305__$1,(22),inst_29219);
} else {
if((state_val_29306 === (31))){
var inst_29303 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29305__$1,inst_29303);
} else {
if((state_val_29306 === (32))){
var inst_29258 = (state_29305[(16)]);
var inst_29263 = inst_29258.cljs$lang$protocol_mask$partition0$;
var inst_29264 = (inst_29263 & (64));
var inst_29265 = inst_29258.cljs$core$ISeq$;
var inst_29266 = (cljs.core.PROTOCOL_SENTINEL === inst_29265);
var inst_29267 = (inst_29264) || (inst_29266);
var state_29305__$1 = state_29305;
if(cljs.core.truth_(inst_29267)){
var statearr_29325_29408 = state_29305__$1;
(statearr_29325_29408[(1)] = (35));

} else {
var statearr_29326_29409 = state_29305__$1;
(statearr_29326_29409[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (40))){
var inst_29280 = (state_29305[(20)]);
var inst_29279 = (state_29305[(2)]);
var inst_29280__$1 = cljs.core.get.call(null,inst_29279,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_29281 = cljs.core.get.call(null,inst_29279,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_29282 = cljs.core.not_empty.call(null,inst_29280__$1);
var state_29305__$1 = (function (){var statearr_29327 = state_29305;
(statearr_29327[(21)] = inst_29281);

(statearr_29327[(20)] = inst_29280__$1);

return statearr_29327;
})();
if(cljs.core.truth_(inst_29282)){
var statearr_29328_29410 = state_29305__$1;
(statearr_29328_29410[(1)] = (41));

} else {
var statearr_29329_29411 = state_29305__$1;
(statearr_29329_29411[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (33))){
var state_29305__$1 = state_29305;
var statearr_29330_29412 = state_29305__$1;
(statearr_29330_29412[(2)] = false);

(statearr_29330_29412[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (13))){
var inst_29178 = (state_29305[(22)]);
var inst_29182 = cljs.core.chunk_first.call(null,inst_29178);
var inst_29183 = cljs.core.chunk_rest.call(null,inst_29178);
var inst_29184 = cljs.core.count.call(null,inst_29182);
var inst_29165 = inst_29183;
var inst_29166 = inst_29182;
var inst_29167 = inst_29184;
var inst_29168 = (0);
var state_29305__$1 = (function (){var statearr_29331 = state_29305;
(statearr_29331[(7)] = inst_29167);

(statearr_29331[(8)] = inst_29165);

(statearr_29331[(9)] = inst_29168);

(statearr_29331[(10)] = inst_29166);

return statearr_29331;
})();
var statearr_29332_29413 = state_29305__$1;
(statearr_29332_29413[(2)] = null);

(statearr_29332_29413[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (22))){
var inst_29218 = (state_29305[(19)]);
var inst_29226 = (state_29305[(23)]);
var inst_29222 = (state_29305[(24)]);
var inst_29221 = (state_29305[(25)]);
var inst_29221__$1 = (state_29305[(2)]);
var inst_29222__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29221__$1);
var inst_29223 = (function (){var all_files = inst_29218;
var res_SINGLEQUOTE_ = inst_29221__$1;
var res = inst_29222__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_29218,inst_29226,inst_29222,inst_29221,inst_29221__$1,inst_29222__$1,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28900_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28900_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_29218,inst_29226,inst_29222,inst_29221,inst_29221__$1,inst_29222__$1,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29224 = cljs.core.filter.call(null,inst_29223,inst_29221__$1);
var inst_29225 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_29226__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_29225);
var inst_29227 = cljs.core.not_empty.call(null,inst_29226__$1);
var state_29305__$1 = (function (){var statearr_29333 = state_29305;
(statearr_29333[(26)] = inst_29224);

(statearr_29333[(23)] = inst_29226__$1);

(statearr_29333[(24)] = inst_29222__$1);

(statearr_29333[(25)] = inst_29221__$1);

return statearr_29333;
})();
if(cljs.core.truth_(inst_29227)){
var statearr_29334_29414 = state_29305__$1;
(statearr_29334_29414[(1)] = (23));

} else {
var statearr_29335_29415 = state_29305__$1;
(statearr_29335_29415[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (36))){
var state_29305__$1 = state_29305;
var statearr_29336_29416 = state_29305__$1;
(statearr_29336_29416[(2)] = false);

(statearr_29336_29416[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (41))){
var inst_29280 = (state_29305[(20)]);
var inst_29284 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_29285 = cljs.core.map.call(null,inst_29284,inst_29280);
var inst_29286 = cljs.core.pr_str.call(null,inst_29285);
var inst_29287 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_29286)].join('');
var inst_29288 = figwheel.client.utils.log.call(null,inst_29287);
var state_29305__$1 = state_29305;
var statearr_29337_29417 = state_29305__$1;
(statearr_29337_29417[(2)] = inst_29288);

(statearr_29337_29417[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (43))){
var inst_29281 = (state_29305[(21)]);
var inst_29291 = (state_29305[(2)]);
var inst_29292 = cljs.core.not_empty.call(null,inst_29281);
var state_29305__$1 = (function (){var statearr_29338 = state_29305;
(statearr_29338[(27)] = inst_29291);

return statearr_29338;
})();
if(cljs.core.truth_(inst_29292)){
var statearr_29339_29418 = state_29305__$1;
(statearr_29339_29418[(1)] = (44));

} else {
var statearr_29340_29419 = state_29305__$1;
(statearr_29340_29419[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (29))){
var inst_29258 = (state_29305[(16)]);
var inst_29224 = (state_29305[(26)]);
var inst_29218 = (state_29305[(19)]);
var inst_29226 = (state_29305[(23)]);
var inst_29222 = (state_29305[(24)]);
var inst_29221 = (state_29305[(25)]);
var inst_29254 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_29257 = (function (){var all_files = inst_29218;
var res_SINGLEQUOTE_ = inst_29221;
var res = inst_29222;
var files_not_loaded = inst_29224;
var dependencies_that_loaded = inst_29226;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29258,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29254,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29256){
var map__29341 = p__29256;
var map__29341__$1 = ((((!((map__29341 == null)))?((((map__29341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29341.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29341):map__29341);
var namespace = cljs.core.get.call(null,map__29341__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29258,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29254,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29258__$1 = cljs.core.group_by.call(null,inst_29257,inst_29224);
var inst_29260 = (inst_29258__$1 == null);
var inst_29261 = cljs.core.not.call(null,inst_29260);
var state_29305__$1 = (function (){var statearr_29343 = state_29305;
(statearr_29343[(28)] = inst_29254);

(statearr_29343[(16)] = inst_29258__$1);

return statearr_29343;
})();
if(inst_29261){
var statearr_29344_29420 = state_29305__$1;
(statearr_29344_29420[(1)] = (32));

} else {
var statearr_29345_29421 = state_29305__$1;
(statearr_29345_29421[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (44))){
var inst_29281 = (state_29305[(21)]);
var inst_29294 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29281);
var inst_29295 = cljs.core.pr_str.call(null,inst_29294);
var inst_29296 = [cljs.core.str("not required: "),cljs.core.str(inst_29295)].join('');
var inst_29297 = figwheel.client.utils.log.call(null,inst_29296);
var state_29305__$1 = state_29305;
var statearr_29346_29422 = state_29305__$1;
(statearr_29346_29422[(2)] = inst_29297);

(statearr_29346_29422[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (6))){
var inst_29199 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29347_29423 = state_29305__$1;
(statearr_29347_29423[(2)] = inst_29199);

(statearr_29347_29423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (28))){
var inst_29224 = (state_29305[(26)]);
var inst_29251 = (state_29305[(2)]);
var inst_29252 = cljs.core.not_empty.call(null,inst_29224);
var state_29305__$1 = (function (){var statearr_29348 = state_29305;
(statearr_29348[(29)] = inst_29251);

return statearr_29348;
})();
if(cljs.core.truth_(inst_29252)){
var statearr_29349_29424 = state_29305__$1;
(statearr_29349_29424[(1)] = (29));

} else {
var statearr_29350_29425 = state_29305__$1;
(statearr_29350_29425[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (25))){
var inst_29222 = (state_29305[(24)]);
var inst_29238 = (state_29305[(2)]);
var inst_29239 = cljs.core.not_empty.call(null,inst_29222);
var state_29305__$1 = (function (){var statearr_29351 = state_29305;
(statearr_29351[(30)] = inst_29238);

return statearr_29351;
})();
if(cljs.core.truth_(inst_29239)){
var statearr_29352_29426 = state_29305__$1;
(statearr_29352_29426[(1)] = (26));

} else {
var statearr_29353_29427 = state_29305__$1;
(statearr_29353_29427[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (34))){
var inst_29274 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
if(cljs.core.truth_(inst_29274)){
var statearr_29354_29428 = state_29305__$1;
(statearr_29354_29428[(1)] = (38));

} else {
var statearr_29355_29429 = state_29305__$1;
(statearr_29355_29429[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (17))){
var state_29305__$1 = state_29305;
var statearr_29356_29430 = state_29305__$1;
(statearr_29356_29430[(2)] = recompile_dependents);

(statearr_29356_29430[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (3))){
var state_29305__$1 = state_29305;
var statearr_29357_29431 = state_29305__$1;
(statearr_29357_29431[(2)] = null);

(statearr_29357_29431[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (12))){
var inst_29195 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29358_29432 = state_29305__$1;
(statearr_29358_29432[(2)] = inst_29195);

(statearr_29358_29432[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (2))){
var inst_29157 = (state_29305[(13)]);
var inst_29164 = cljs.core.seq.call(null,inst_29157);
var inst_29165 = inst_29164;
var inst_29166 = null;
var inst_29167 = (0);
var inst_29168 = (0);
var state_29305__$1 = (function (){var statearr_29359 = state_29305;
(statearr_29359[(7)] = inst_29167);

(statearr_29359[(8)] = inst_29165);

(statearr_29359[(9)] = inst_29168);

(statearr_29359[(10)] = inst_29166);

return statearr_29359;
})();
var statearr_29360_29433 = state_29305__$1;
(statearr_29360_29433[(2)] = null);

(statearr_29360_29433[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (23))){
var inst_29224 = (state_29305[(26)]);
var inst_29218 = (state_29305[(19)]);
var inst_29226 = (state_29305[(23)]);
var inst_29222 = (state_29305[(24)]);
var inst_29221 = (state_29305[(25)]);
var inst_29229 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_29231 = (function (){var all_files = inst_29218;
var res_SINGLEQUOTE_ = inst_29221;
var res = inst_29222;
var files_not_loaded = inst_29224;
var dependencies_that_loaded = inst_29226;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29229,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29230){
var map__29361 = p__29230;
var map__29361__$1 = ((((!((map__29361 == null)))?((((map__29361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29361.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29361):map__29361);
var request_url = cljs.core.get.call(null,map__29361__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29229,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29232 = cljs.core.reverse.call(null,inst_29226);
var inst_29233 = cljs.core.map.call(null,inst_29231,inst_29232);
var inst_29234 = cljs.core.pr_str.call(null,inst_29233);
var inst_29235 = figwheel.client.utils.log.call(null,inst_29234);
var state_29305__$1 = (function (){var statearr_29363 = state_29305;
(statearr_29363[(31)] = inst_29229);

return statearr_29363;
})();
var statearr_29364_29434 = state_29305__$1;
(statearr_29364_29434[(2)] = inst_29235);

(statearr_29364_29434[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (35))){
var state_29305__$1 = state_29305;
var statearr_29365_29435 = state_29305__$1;
(statearr_29365_29435[(2)] = true);

(statearr_29365_29435[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (19))){
var inst_29208 = (state_29305[(12)]);
var inst_29214 = figwheel.client.file_reloading.expand_files.call(null,inst_29208);
var state_29305__$1 = state_29305;
var statearr_29366_29436 = state_29305__$1;
(statearr_29366_29436[(2)] = inst_29214);

(statearr_29366_29436[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (11))){
var state_29305__$1 = state_29305;
var statearr_29367_29437 = state_29305__$1;
(statearr_29367_29437[(2)] = null);

(statearr_29367_29437[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (9))){
var inst_29197 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29368_29438 = state_29305__$1;
(statearr_29368_29438[(2)] = inst_29197);

(statearr_29368_29438[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (5))){
var inst_29167 = (state_29305[(7)]);
var inst_29168 = (state_29305[(9)]);
var inst_29170 = (inst_29168 < inst_29167);
var inst_29171 = inst_29170;
var state_29305__$1 = state_29305;
if(cljs.core.truth_(inst_29171)){
var statearr_29369_29439 = state_29305__$1;
(statearr_29369_29439[(1)] = (7));

} else {
var statearr_29370_29440 = state_29305__$1;
(statearr_29370_29440[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (14))){
var inst_29178 = (state_29305[(22)]);
var inst_29187 = cljs.core.first.call(null,inst_29178);
var inst_29188 = figwheel.client.file_reloading.eval_body.call(null,inst_29187,opts);
var inst_29189 = cljs.core.next.call(null,inst_29178);
var inst_29165 = inst_29189;
var inst_29166 = null;
var inst_29167 = (0);
var inst_29168 = (0);
var state_29305__$1 = (function (){var statearr_29371 = state_29305;
(statearr_29371[(32)] = inst_29188);

(statearr_29371[(7)] = inst_29167);

(statearr_29371[(8)] = inst_29165);

(statearr_29371[(9)] = inst_29168);

(statearr_29371[(10)] = inst_29166);

return statearr_29371;
})();
var statearr_29372_29441 = state_29305__$1;
(statearr_29372_29441[(2)] = null);

(statearr_29372_29441[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (45))){
var state_29305__$1 = state_29305;
var statearr_29373_29442 = state_29305__$1;
(statearr_29373_29442[(2)] = null);

(statearr_29373_29442[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (26))){
var inst_29224 = (state_29305[(26)]);
var inst_29218 = (state_29305[(19)]);
var inst_29226 = (state_29305[(23)]);
var inst_29222 = (state_29305[(24)]);
var inst_29221 = (state_29305[(25)]);
var inst_29241 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_29243 = (function (){var all_files = inst_29218;
var res_SINGLEQUOTE_ = inst_29221;
var res = inst_29222;
var files_not_loaded = inst_29224;
var dependencies_that_loaded = inst_29226;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29241,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__29242){
var map__29374 = p__29242;
var map__29374__$1 = ((((!((map__29374 == null)))?((((map__29374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29374):map__29374);
var namespace = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__29374__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29241,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29244 = cljs.core.map.call(null,inst_29243,inst_29222);
var inst_29245 = cljs.core.pr_str.call(null,inst_29244);
var inst_29246 = figwheel.client.utils.log.call(null,inst_29245);
var inst_29247 = (function (){var all_files = inst_29218;
var res_SINGLEQUOTE_ = inst_29221;
var res = inst_29222;
var files_not_loaded = inst_29224;
var dependencies_that_loaded = inst_29226;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29241,inst_29243,inst_29244,inst_29245,inst_29246,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_29224,inst_29218,inst_29226,inst_29222,inst_29221,inst_29241,inst_29243,inst_29244,inst_29245,inst_29246,state_val_29306,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_29248 = setTimeout(inst_29247,(10));
var state_29305__$1 = (function (){var statearr_29376 = state_29305;
(statearr_29376[(33)] = inst_29246);

(statearr_29376[(34)] = inst_29241);

return statearr_29376;
})();
var statearr_29377_29443 = state_29305__$1;
(statearr_29377_29443[(2)] = inst_29248);

(statearr_29377_29443[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (16))){
var state_29305__$1 = state_29305;
var statearr_29378_29444 = state_29305__$1;
(statearr_29378_29444[(2)] = reload_dependents);

(statearr_29378_29444[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (38))){
var inst_29258 = (state_29305[(16)]);
var inst_29276 = cljs.core.apply.call(null,cljs.core.hash_map,inst_29258);
var state_29305__$1 = state_29305;
var statearr_29379_29445 = state_29305__$1;
(statearr_29379_29445[(2)] = inst_29276);

(statearr_29379_29445[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (30))){
var state_29305__$1 = state_29305;
var statearr_29380_29446 = state_29305__$1;
(statearr_29380_29446[(2)] = null);

(statearr_29380_29446[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (10))){
var inst_29178 = (state_29305[(22)]);
var inst_29180 = cljs.core.chunked_seq_QMARK_.call(null,inst_29178);
var state_29305__$1 = state_29305;
if(inst_29180){
var statearr_29381_29447 = state_29305__$1;
(statearr_29381_29447[(1)] = (13));

} else {
var statearr_29382_29448 = state_29305__$1;
(statearr_29382_29448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (18))){
var inst_29212 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
if(cljs.core.truth_(inst_29212)){
var statearr_29383_29449 = state_29305__$1;
(statearr_29383_29449[(1)] = (19));

} else {
var statearr_29384_29450 = state_29305__$1;
(statearr_29384_29450[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (42))){
var state_29305__$1 = state_29305;
var statearr_29385_29451 = state_29305__$1;
(statearr_29385_29451[(2)] = null);

(statearr_29385_29451[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (37))){
var inst_29271 = (state_29305[(2)]);
var state_29305__$1 = state_29305;
var statearr_29386_29452 = state_29305__$1;
(statearr_29386_29452[(2)] = inst_29271);

(statearr_29386_29452[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29306 === (8))){
var inst_29178 = (state_29305[(22)]);
var inst_29165 = (state_29305[(8)]);
var inst_29178__$1 = cljs.core.seq.call(null,inst_29165);
var state_29305__$1 = (function (){var statearr_29387 = state_29305;
(statearr_29387[(22)] = inst_29178__$1);

return statearr_29387;
})();
if(inst_29178__$1){
var statearr_29388_29453 = state_29305__$1;
(statearr_29388_29453[(1)] = (10));

} else {
var statearr_29389_29454 = state_29305__$1;
(statearr_29389_29454[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__22378__auto__,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0 = (function (){
var statearr_29393 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29393[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__);

(statearr_29393[(1)] = (1));

return statearr_29393;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1 = (function (state_29305){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_29305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e29394){if((e29394 instanceof Object)){
var ex__22382__auto__ = e29394;
var statearr_29395_29455 = state_29305;
(statearr_29395_29455[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29394;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29456 = state_29305;
state_29305 = G__29456;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__ = function(state_29305){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1.call(this,state_29305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__22492__auto__ = (function (){var statearr_29396 = f__22491__auto__.call(null);
(statearr_29396[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_29396;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,map__29150,map__29150__$1,opts,before_jsload,on_jsload,reload_dependents,map__29151,map__29151__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__22490__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__29459,link){
var map__29462 = p__29459;
var map__29462__$1 = ((((!((map__29462 == null)))?((((map__29462.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29462.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29462):map__29462);
var file = cljs.core.get.call(null,map__29462__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__29462,map__29462__$1,file){
return (function (p1__29457_SHARP_,p2__29458_SHARP_){
if(cljs.core._EQ_.call(null,p1__29457_SHARP_,p2__29458_SHARP_)){
return p1__29457_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__29462,map__29462__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__29468){
var map__29469 = p__29468;
var map__29469__$1 = ((((!((map__29469 == null)))?((((map__29469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29469.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29469):map__29469);
var match_length = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__29469__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__29464_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__29464_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args29471 = [];
var len__21393__auto___29474 = arguments.length;
var i__21394__auto___29475 = (0);
while(true){
if((i__21394__auto___29475 < len__21393__auto___29474)){
args29471.push((arguments[i__21394__auto___29475]));

var G__29476 = (i__21394__auto___29475 + (1));
i__21394__auto___29475 = G__29476;
continue;
} else {
}
break;
}

var G__29473 = args29471.length;
switch (G__29473) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29471.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__29478_SHARP_,p2__29479_SHARP_){
return cljs.core.assoc.call(null,p1__29478_SHARP_,cljs.core.get.call(null,p2__29479_SHARP_,key),p2__29479_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__29480){
var map__29483 = p__29480;
var map__29483__$1 = ((((!((map__29483 == null)))?((((map__29483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29483.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29483):map__29483);
var f_data = map__29483__$1;
var file = cljs.core.get.call(null,map__29483__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4657__auto__)){
var link = temp__4657__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__29485,files_msg){
var map__29492 = p__29485;
var map__29492__$1 = ((((!((map__29492 == null)))?((((map__29492.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29492.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29492):map__29492);
var opts = map__29492__$1;
var on_cssload = cljs.core.get.call(null,map__29492__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__29494_29498 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__29495_29499 = null;
var count__29496_29500 = (0);
var i__29497_29501 = (0);
while(true){
if((i__29497_29501 < count__29496_29500)){
var f_29502 = cljs.core._nth.call(null,chunk__29495_29499,i__29497_29501);
figwheel.client.file_reloading.reload_css_file.call(null,f_29502);

var G__29503 = seq__29494_29498;
var G__29504 = chunk__29495_29499;
var G__29505 = count__29496_29500;
var G__29506 = (i__29497_29501 + (1));
seq__29494_29498 = G__29503;
chunk__29495_29499 = G__29504;
count__29496_29500 = G__29505;
i__29497_29501 = G__29506;
continue;
} else {
var temp__4657__auto___29507 = cljs.core.seq.call(null,seq__29494_29498);
if(temp__4657__auto___29507){
var seq__29494_29508__$1 = temp__4657__auto___29507;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29494_29508__$1)){
var c__21099__auto___29509 = cljs.core.chunk_first.call(null,seq__29494_29508__$1);
var G__29510 = cljs.core.chunk_rest.call(null,seq__29494_29508__$1);
var G__29511 = c__21099__auto___29509;
var G__29512 = cljs.core.count.call(null,c__21099__auto___29509);
var G__29513 = (0);
seq__29494_29498 = G__29510;
chunk__29495_29499 = G__29511;
count__29496_29500 = G__29512;
i__29497_29501 = G__29513;
continue;
} else {
var f_29514 = cljs.core.first.call(null,seq__29494_29508__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_29514);

var G__29515 = cljs.core.next.call(null,seq__29494_29508__$1);
var G__29516 = null;
var G__29517 = (0);
var G__29518 = (0);
seq__29494_29498 = G__29515;
chunk__29495_29499 = G__29516;
count__29496_29500 = G__29517;
i__29497_29501 = G__29518;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__29492,map__29492__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__29492,map__29492__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1519350857673