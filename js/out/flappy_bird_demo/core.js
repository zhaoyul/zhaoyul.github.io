// Compiled by ClojureScript 1.9.293 {}
goog.provide('flappy_bird_demo.core');
goog.require('cljs.core');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
goog.require('sablono.core');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
flappy_bird_demo.core.floor = (function flappy_bird_demo$core$floor(x){
return Math.floor(x);
});
flappy_bird_demo.core.translate = (function flappy_bird_demo$core$translate(start_pos,vel,time){
return flappy_bird_demo.core.floor.call(null,(start_pos + (time * vel)));
});
flappy_bird_demo.core.horiz_vel = -0.15;
flappy_bird_demo.core.gravity = 0.05;
flappy_bird_demo.core.jump_vel = (21);
flappy_bird_demo.core.start_y = (312);
flappy_bird_demo.core.bottom_y = (561);
flappy_bird_demo.core.flappy_x = (212);
flappy_bird_demo.core.flappy_width = (57);
flappy_bird_demo.core.flappy_height = (41);
flappy_bird_demo.core.pillar_spacing = (324);
flappy_bird_demo.core.pillar_gap = (158);
flappy_bird_demo.core.pillar_width = (86);
flappy_bird_demo.core.starting_state = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(0),new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),(0),new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),(0),new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),flappy_bird_demo.core.start_y,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),(0),new cljs.core.Keyword(null,"pos-x","pos-x",398349422),(900),new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),(900),new cljs.core.Keyword(null,"gap-top","gap-top",246258531),(200)], null)], null)], null);
flappy_bird_demo.core.reset_state = (function flappy_bird_demo$core$reset_state(_,cur_time){
return cljs.core.assoc.call(null,cljs.core.update_in.call(null,flappy_bird_demo.core.starting_state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pls){
return cljs.core.map.call(null,(function (p1__28322_SHARP_){
return cljs.core.assoc.call(null,p1__28322_SHARP_,new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time);
}),pls);
})),new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),cur_time,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),true);
});
if(typeof flappy_bird_demo.core.flap_state !== 'undefined'){
} else {
flappy_bird_demo.core.flap_state = cljs.core.atom.call(null,flappy_bird_demo.core.starting_state);
}
flappy_bird_demo.core.curr_pillar_pos = (function flappy_bird_demo$core$curr_pillar_pos(cur_time,p__28323){
var map__28326 = p__28323;
var map__28326__$1 = ((((!((map__28326 == null)))?((((map__28326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28326):map__28326);
var pos_x = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var start_time = cljs.core.get.call(null,map__28326__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
return flappy_bird_demo.core.translate.call(null,pos_x,flappy_bird_demo.core.horiz_vel,(cur_time - start_time));
});
flappy_bird_demo.core.in_pillar_QMARK_ = (function flappy_bird_demo$core$in_pillar_QMARK_(p__28328){
var map__28331 = p__28328;
var map__28331__$1 = ((((!((map__28331 == null)))?((((map__28331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28331.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28331):map__28331);
var cur_x = cljs.core.get.call(null,map__28331__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
return (((flappy_bird_demo.core.flappy_x + flappy_bird_demo.core.flappy_width) >= cur_x)) && ((flappy_bird_demo.core.flappy_x < (cur_x + flappy_bird_demo.core.pillar_width)));
});
flappy_bird_demo.core.in_pillar_gap_QMARK_ = (function flappy_bird_demo$core$in_pillar_gap_QMARK_(p__28333,p__28334){
var map__28339 = p__28333;
var map__28339__$1 = ((((!((map__28339 == null)))?((((map__28339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28339.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28339):map__28339);
var flappy_y = cljs.core.get.call(null,map__28339__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var map__28340 = p__28334;
var map__28340__$1 = ((((!((map__28340 == null)))?((((map__28340.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28340.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28340):map__28340);
var gap_top = cljs.core.get.call(null,map__28340__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return ((gap_top < flappy_y)) && (((gap_top + flappy_bird_demo.core.pillar_gap) > (flappy_y + flappy_bird_demo.core.flappy_height)));
});
flappy_bird_demo.core.bottom_collision_QMARK_ = (function flappy_bird_demo$core$bottom_collision_QMARK_(p__28343){
var map__28346 = p__28343;
var map__28346__$1 = ((((!((map__28346 == null)))?((((map__28346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28346.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28346):map__28346);
var flappy_y = cljs.core.get.call(null,map__28346__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
return (flappy_y >= (flappy_bird_demo.core.bottom_y - flappy_bird_demo.core.flappy_height));
});
flappy_bird_demo.core.collision_QMARK_ = (function flappy_bird_demo$core$collision_QMARK_(p__28349){
var map__28352 = p__28349;
var map__28352__$1 = ((((!((map__28352 == null)))?((((map__28352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28352.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28352):map__28352);
var st = map__28352__$1;
var pillar_list = cljs.core.get.call(null,map__28352__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
if(cljs.core.truth_(cljs.core.some.call(null,((function (map__28352,map__28352__$1,st,pillar_list){
return (function (p1__28348_SHARP_){
var or__20285__auto__ = (function (){var and__20273__auto__ = flappy_bird_demo.core.in_pillar_QMARK_.call(null,p1__28348_SHARP_);
if(cljs.core.truth_(and__20273__auto__)){
return cljs.core.not.call(null,flappy_bird_demo.core.in_pillar_gap_QMARK_.call(null,st,p1__28348_SHARP_));
} else {
return and__20273__auto__;
}
})();
if(cljs.core.truth_(or__20285__auto__)){
return or__20285__auto__;
} else {
return flappy_bird_demo.core.bottom_collision_QMARK_.call(null,st);
}
});})(map__28352,map__28352__$1,st,pillar_list))
,pillar_list))){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961),false);
} else {
return st;
}
});
flappy_bird_demo.core.new_pillar = (function flappy_bird_demo$core$new_pillar(cur_time,pos_x){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-time","start-time",814801386),cur_time,new cljs.core.Keyword(null,"pos-x","pos-x",398349422),pos_x,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),pos_x,new cljs.core.Keyword(null,"gap-top","gap-top",246258531),((60) + cljs.core.rand_int.call(null,((flappy_bird_demo.core.bottom_y - (120)) - flappy_bird_demo.core.pillar_gap)))], null);
});
flappy_bird_demo.core.update_pillars = (function flappy_bird_demo$core$update_pillars(p__28356){
var map__28359 = p__28356;
var map__28359__$1 = ((((!((map__28359 == null)))?((((map__28359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28359.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28359):map__28359);
var st = map__28359__$1;
var pillar_list = cljs.core.get.call(null,map__28359__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
var cur_time = cljs.core.get.call(null,map__28359__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var pillars_with_pos = cljs.core.map.call(null,((function (map__28359,map__28359__$1,st,pillar_list,cur_time){
return (function (p1__28354_SHARP_){
return cljs.core.assoc.call(null,p1__28354_SHARP_,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),flappy_bird_demo.core.curr_pillar_pos.call(null,cur_time,p1__28354_SHARP_));
});})(map__28359,map__28359__$1,st,pillar_list,cur_time))
,pillar_list);
var pillars_in_world = cljs.core.sort_by.call(null,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266),cljs.core.filter.call(null,((function (pillars_with_pos,map__28359,map__28359__$1,st,pillar_list,cur_time){
return (function (p1__28355_SHARP_){
return (new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(p1__28355_SHARP_) > (- flappy_bird_demo.core.pillar_width));
});})(pillars_with_pos,map__28359,map__28359__$1,st,pillar_list,cur_time))
,pillars_with_pos));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743),(((cljs.core.count.call(null,pillars_in_world) < (3)))?cljs.core.conj.call(null,pillars_in_world,flappy_bird_demo.core.new_pillar.call(null,cur_time,(flappy_bird_demo.core.pillar_spacing + new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,pillars_in_world))))):pillars_in_world));
});
flappy_bird_demo.core.sine_wave = (function flappy_bird_demo$core$sine_wave(st){
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),(flappy_bird_demo.core.start_y + ((30) * Math.sin((new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875).cljs$core$IFn$_invoke$arity$1(st) / (300))))));
});
flappy_bird_demo.core.update_flappy = (function flappy_bird_demo$core$update_flappy(p__28361){
var map__28364 = p__28361;
var map__28364__$1 = ((((!((map__28364 == null)))?((((map__28364.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28364.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28364):map__28364);
var st = map__28364__$1;
var time_delta = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875));
var initial_vel = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882));
var flappy_y = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var jump_count = cljs.core.get.call(null,map__28364__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
if((jump_count > (0))){
var cur_vel = (initial_vel - (time_delta * flappy_bird_demo.core.gravity));
var new_y = (flappy_y - cur_vel);
var new_y__$1 = (((new_y > (flappy_bird_demo.core.bottom_y - flappy_bird_demo.core.flappy_height)))?(flappy_bird_demo.core.bottom_y - flappy_bird_demo.core.flappy_height):new_y);
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547),new_y__$1);
} else {
return flappy_bird_demo.core.sine_wave.call(null,st);
}
});
flappy_bird_demo.core.score = (function flappy_bird_demo$core$score(p__28366){
var map__28369 = p__28366;
var map__28369__$1 = ((((!((map__28369 == null)))?((((map__28369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28369.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28369):map__28369);
var st = map__28369__$1;
var cur_time = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var start_time = cljs.core.get.call(null,map__28369__$1,new cljs.core.Keyword(null,"start-time","start-time",814801386));
var score = (Math.abs(flappy_bird_demo.core.floor.call(null,((((cur_time - start_time) * flappy_bird_demo.core.horiz_vel) - (544)) / flappy_bird_demo.core.pillar_spacing))) - (4));
return cljs.core.assoc.call(null,st,new cljs.core.Keyword(null,"score","score",-1963588780),(((score < (0)))?(0):score));
});
flappy_bird_demo.core.time_update = (function flappy_bird_demo$core$time_update(timestamp,state){
return flappy_bird_demo.core.score.call(null,flappy_bird_demo.core.collision_QMARK_.call(null,flappy_bird_demo.core.update_pillars.call(null,flappy_bird_demo.core.update_flappy.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"cur-time","cur-time",518931125),timestamp,new cljs.core.Keyword(null,"time-delta","time-delta",-1937570875),(timestamp - new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209).cljs$core$IFn$_invoke$arity$1(state)))))));
});
flappy_bird_demo.core.jump = (function flappy_bird_demo$core$jump(p__28371){
var map__28374 = p__28371;
var map__28374__$1 = ((((!((map__28374 == null)))?((((map__28374.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28374.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28374):map__28374);
var state = map__28374__$1;
var cur_time = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__28374__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696),(jump_count + (1)),new cljs.core.Keyword(null,"flappy-start-time","flappy-start-time",275858209),cur_time,new cljs.core.Keyword(null,"initial-vel","initial-vel",428539882),flappy_bird_demo.core.jump_vel);
});
flappy_bird_demo.core.border = (function flappy_bird_demo$core$border(p__28376){
var map__28379 = p__28376;
var map__28379__$1 = ((((!((map__28379 == null)))?((((map__28379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28379.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28379):map__28379);
var state = map__28379__$1;
var cur_time = cljs.core.get.call(null,map__28379__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875),cljs.core.mod.call(null,flappy_bird_demo.core.translate.call(null,(0),flappy_bird_demo.core.horiz_vel,cur_time),(23)));
});
flappy_bird_demo.core.pillar_offset = (function flappy_bird_demo$core$pillar_offset(p__28381){
var map__28384 = p__28381;
var map__28384__$1 = ((((!((map__28384 == null)))?((((map__28384.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28384.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28384):map__28384);
var p = map__28384__$1;
var gap_top = cljs.core.get.call(null,map__28384__$1,new cljs.core.Keyword(null,"gap-top","gap-top",246258531));
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372),gap_top,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583),((flappy_bird_demo.core.bottom_y - gap_top) - flappy_bird_demo.core.pillar_gap));
});
flappy_bird_demo.core.pillar_offsets = (function flappy_bird_demo$core$pillar_offsets(state){
return cljs.core.update_in.call(null,state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743)], null),(function (pillar_list){
return cljs.core.map.call(null,flappy_bird_demo.core.pillar_offset,pillar_list);
}));
});
flappy_bird_demo.core.world = (function flappy_bird_demo$core$world(state){
return flappy_bird_demo.core.pillar_offsets.call(null,flappy_bird_demo.core.border.call(null,state));
});
flappy_bird_demo.core.px = (function flappy_bird_demo$core$px(n){
return [cljs.core.str(n),cljs.core.str("px")].join('');
});
flappy_bird_demo.core.pillar = (function flappy_bird_demo$core$pillar(p__28386){
var map__28389 = p__28386;
var map__28389__$1 = ((((!((map__28389 == null)))?((((map__28389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28389):map__28389);
var cur_x = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"cur-x","cur-x",-1780745266));
var pos_x = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"pos-x","pos-x",398349422));
var upper_height = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"upper-height","upper-height",1141538372));
var lower_height = cljs.core.get.call(null,map__28389__$1,new cljs.core.Keyword(null,"lower-height","lower-height",-846579583));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillars","div.pillars",-1469617576),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-upper","div.pillar.pillar-upper",596294660),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),flappy_bird_demo.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),upper_height], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.pillar.pillar-lower","div.pillar.pillar-lower",-1227306575),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),flappy_bird_demo.core.px.call(null,cur_x),new cljs.core.Keyword(null,"height","height",1025178622),lower_height], null)], null)], null)], null);
});
flappy_bird_demo.core.time_loop = (function flappy_bird_demo$core$time_loop(time){
var new_state = cljs.core.swap_BANG_.call(null,flappy_bird_demo.core.flap_state,cljs.core.partial.call(null,flappy_bird_demo.core.time_update,time));
if(cljs.core.truth_(new cljs.core.Keyword(null,"timer-running","timer-running",1190718961).cljs$core$IFn$_invoke$arity$1(new_state))){
var c__22490__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22490__auto__,new_state){
return (function (){
var f__22491__auto__ = (function (){var switch__22378__auto__ = ((function (c__22490__auto__,new_state){
return (function (state_28411){
var state_val_28412 = (state_28411[(1)]);
if((state_val_28412 === (1))){
var inst_28406 = cljs.core.async.timeout.call(null,(30));
var state_28411__$1 = state_28411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28411__$1,(2),inst_28406);
} else {
if((state_val_28412 === (2))){
var inst_28408 = (state_28411[(2)]);
var inst_28409 = window.requestAnimationFrame(flappy_bird_demo.core.time_loop);
var state_28411__$1 = (function (){var statearr_28413 = state_28411;
(statearr_28413[(7)] = inst_28408);

return statearr_28413;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28411__$1,inst_28409);
} else {
return null;
}
}
});})(c__22490__auto__,new_state))
;
return ((function (switch__22378__auto__,c__22490__auto__,new_state){
return (function() {
var flappy_bird_demo$core$time_loop_$_state_machine__22379__auto__ = null;
var flappy_bird_demo$core$time_loop_$_state_machine__22379__auto____0 = (function (){
var statearr_28417 = [null,null,null,null,null,null,null,null];
(statearr_28417[(0)] = flappy_bird_demo$core$time_loop_$_state_machine__22379__auto__);

(statearr_28417[(1)] = (1));

return statearr_28417;
});
var flappy_bird_demo$core$time_loop_$_state_machine__22379__auto____1 = (function (state_28411){
while(true){
var ret_value__22380__auto__ = (function (){try{while(true){
var result__22381__auto__ = switch__22378__auto__.call(null,state_28411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22381__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22381__auto__;
}
break;
}
}catch (e28418){if((e28418 instanceof Object)){
var ex__22382__auto__ = e28418;
var statearr_28419_28421 = state_28411;
(statearr_28419_28421[(5)] = ex__22382__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28418;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22380__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28422 = state_28411;
state_28411 = G__28422;
continue;
} else {
return ret_value__22380__auto__;
}
break;
}
});
flappy_bird_demo$core$time_loop_$_state_machine__22379__auto__ = function(state_28411){
switch(arguments.length){
case 0:
return flappy_bird_demo$core$time_loop_$_state_machine__22379__auto____0.call(this);
case 1:
return flappy_bird_demo$core$time_loop_$_state_machine__22379__auto____1.call(this,state_28411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
flappy_bird_demo$core$time_loop_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$0 = flappy_bird_demo$core$time_loop_$_state_machine__22379__auto____0;
flappy_bird_demo$core$time_loop_$_state_machine__22379__auto__.cljs$core$IFn$_invoke$arity$1 = flappy_bird_demo$core$time_loop_$_state_machine__22379__auto____1;
return flappy_bird_demo$core$time_loop_$_state_machine__22379__auto__;
})()
;})(switch__22378__auto__,c__22490__auto__,new_state))
})();
var state__22492__auto__ = (function (){var statearr_28420 = f__22491__auto__.call(null);
(statearr_28420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22490__auto__);

return statearr_28420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22492__auto__);
});})(c__22490__auto__,new_state))
);

return c__22490__auto__;
} else {
return null;
}
});
flappy_bird_demo.core.start_game = (function flappy_bird_demo$core$start_game(){
return window.requestAnimationFrame((function (time){
cljs.core.reset_BANG_.call(null,flappy_bird_demo.core.flap_state,flappy_bird_demo.core.reset_state.call(null,cljs.core.deref.call(null,flappy_bird_demo.core.flap_state),time));

return flappy_bird_demo.core.time_loop.call(null,time);
}));
});
flappy_bird_demo.core.main_template = (function flappy_bird_demo$core$main_template(p__28423){
var map__28428 = p__28423;
var map__28428__$1 = ((((!((map__28428 == null)))?((((map__28428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28428.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28428):map__28428);
var score = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"score","score",-1963588780));
var cur_time = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"cur-time","cur-time",518931125));
var jump_count = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"jump-count","jump-count",-1095229696));
var timer_running = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"timer-running","timer-running",1190718961));
var border_pos = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"border-pos","border-pos",-56607875));
var flappy_y = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"flappy-y","flappy-y",1774246547));
var pillar_list = cljs.core.get.call(null,map__28428__$1,new cljs.core.Keyword(null,"pillar-list","pillar-list",1389143743));
return React.createElement("div",({"onMouseDown": ((function (map__28428,map__28428__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (e){
cljs.core.swap_BANG_.call(null,flappy_bird_demo.core.flap_state,flappy_bird_demo.core.jump);

return e.preventDefault();
});})(map__28428,map__28428__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
, "className": "board"}),(function (){var attrs28430 = score;
return cljs.core.apply.call(null,React.createElement,"h1",((cljs.core.map_QMARK_.call(null,attrs28430))?sablono.interpreter.attributes.call(null,sablono.normalize.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs28430)):({"className": "score"})),((cljs.core.map_QMARK_.call(null,attrs28430))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28430)], null)));
})(),sablono.interpreter.interpret.call(null,((cljs.core.not.call(null,timer_running))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.start-button","a.start-button",255836936),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),((function (map__28428,map__28428__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list){
return (function (){
return flappy_bird_demo.core.start_game.call(null);
});})(map__28428,map__28428__$1,score,cur_time,jump_count,timer_running,border_pos,flappy_y,pillar_list))
], null),((((1) < jump_count))?"RESTART":"START")], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null))),(function (){var attrs28431 = cljs.core.map.call(null,flappy_bird_demo.core.pillar,pillar_list);
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs28431))?sablono.interpreter.attributes.call(null,attrs28431):null),((cljs.core.map_QMARK_.call(null,attrs28431))?null:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs28431)], null)));
})(),React.createElement("div",({"style": ({"top": flappy_bird_demo.core.px.call(null,flappy_y)}), "className": "flappy"})),React.createElement("div",({"style": ({"backgroundPositionX": flappy_bird_demo.core.px.call(null,border_pos)}), "className": "scrolling-border"})));
});
var node_28432 = document.getElementById("board-area");
flappy_bird_demo.core.renderer = ((function (node_28432){
return (function flappy_bird_demo$core$renderer(full_state){
return ReactDOM.render(flappy_bird_demo.core.main_template.call(null,full_state),node_28432);
});})(node_28432))
;
cljs.core.add_watch.call(null,flappy_bird_demo.core.flap_state,new cljs.core.Keyword(null,"renderer","renderer",336841071),(function (_,___$1,___$2,n){
return flappy_bird_demo.core.renderer.call(null,flappy_bird_demo.core.world.call(null,n));
}));
cljs.core.reset_BANG_.call(null,flappy_bird_demo.core.flap_state,cljs.core.deref.call(null,flappy_bird_demo.core.flap_state));

//# sourceMappingURL=core.js.map?rel=1519350857115