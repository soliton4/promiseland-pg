(function(){
  var defineFun;
  var requireFun;
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    requireFun = function(modulesAr, callback, errBack){
      try{
        var i = 0;
        var l = modulesAr.length;
        var args = [];
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    };
    defineFun = function(requireAr, callback){
      requireFun(requireAr, function(){
        module.exports = callback.apply(callback, arguments);
      });
    };
    
  }else if (typeof define == "function" && define.amd){ // AMD
    var _define = define;
    requireFun = require;
    
    defineFun = function(par1, par2){
      if (par1 instanceof Array){
        par1.unshift("require");
      }else{
        par2 = par1;
        par1 = ["require"];
      };
      _define(par1, function(){
        requireFun = arguments[0];
        var args = [];
        for (var i = 1; i < arguments.length; ++i){
          args.push(arguments[i]);
        };
        return par2.apply(par2, args);
      });
    };
    
  }else{ // Plain browser env
    alert("not working out!");
    
  };
  defineFun(["promiseland"], function(promiseland){
var __require = requireFun;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var __requireFun = function(parModule){
      var returnPromise = new __Promise();
      try{__require([parModule], function(m){
        if (promiseland.isPromiseLandPromisingModule(m)){
          m.then(function(realm){returnPromise.resolve(realm);}, function(e){returnPromise.reject(e);});
        }else{
          returnPromise.resolve(m);
        };
        }, function(err){ returnPromise.reject(err); });
      }catch(e){ returnPromise.reject(e); };
      return returnPromise.promise;};
    var Callback = promiseland.Callback;
if (promiseland._hasModule({ hashStr: "8b923d7792d89c8016cfd95ca700d189" })){ return promiseland._getModule("8b923d7792d89c8016cfd95ca700d189"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "8b923d7792d89c8016cfd95ca700d189", "module": PL$1, promising: true });
var PL$23/*Callback*/;try{PL$23/*Callback*/ = Callback;}catch(e){};
var PL$29/*promiseland*/;try{PL$29/*promiseland*/ = promiseland;}catch(e){};
var PL$32/*tableCreator*/;try{PL$32/*tableCreator*/ = tableCreator;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*pg*/;
var PL$7/*tableScan*/;
var PL$9/*sql*/;
var PL$11/*Storage*/;
PL$3(function(){

  ;
  __requireFun("pg").then(PL$3(function(PL$6){PL$5/*pg*/ = PL$6;
  __requireFun("./tableScan").then(PL$3(function(PL$8){PL$7/*tableScan*/ = PL$8;
  __requireFun("./sql").then(PL$3(function(PL$10){PL$9/*sql*/ = PL$10;
  __requireFun("./Storage").then(PL$3(function(PL$12){PL$11/*Storage*/ = PL$12;
  PL$1.resolve((function(){var PL$13/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$14/*parConStr*/, PL$15/*parOptions*/){
  
    ;
    this["options"] = (PL$15/*parOptions*/ || {});
    this["conStr"] = PL$14/*parConStr*/;
    ;}),
"query": (function(PL$16/*parSqlStr*/, PL$17/*parData*/){
  var PL$18 = new __Promise();
var PL$20 = function(code){ return function(res){ try{code(res);}catch(e){ PL$18.reject(e); }; }; };
var PL$21 = function(e){ PL$18.reject(e); };
var PL$22/*cb*/;
var PL$25/*conRes*/;
var PL$27/*client*/;
var PL$28/*done*/;
var PL$24/*this*/ = this;
PL$20(function(){
  
    ;
    if((typeof PL$16/*parSqlStr*/ == "object")){
      if(! PL$16/*parSqlStr*/["text"]){
        if(PL$16/*parSqlStr*/["toQuery"]){
          PL$16/*parSqlStr*/ = PL$16/*parSqlStr*/["toQuery"]();
        };
        ;
      };
      ;
      PL$17/*parData*/ = PL$16/*parSqlStr*/["values"];
      PL$16/*parSqlStr*/ = PL$16/*parSqlStr*/["text"];
    };
    ;
    PL$22/*cb*/ = new PL$23/*Callback*/();
    PL$5/*pg*/["connect"](PL$24/*this*/["conStr"], PL$22/*cb*/);
    PL$22/*cb*/["promise"].then(PL$20(function(PL$26){PL$25/*conRes*/ = PL$26;
    if(PL$25/*conRes*/[0]){
      throw PL$25/*conRes*/[0];
    };
    ;
    PL$27/*client*/ = PL$25/*conRes*/[1];
    PL$28/*done*/ = PL$25/*conRes*/[2];
    PL$22/*cb*/ = new PL$29/*promiseland*/["CallbackErrorFirst"]();
    PL$27/*client*/["query"](PL$16/*parSqlStr*/, PL$17/*parData*/, PL$22/*cb*/);
    PL$28/*done*/();
    PL$22/*cb*/["promise"].then(PL$20(function(PL$30){PL$18.resolve(PL$30); return;
    PL$18.resolve(); return;}), PL$21);
;}), PL$21);
;})();
return PL$18;
}),
"tableDescription": (function(PL$31/*par*/){
  
    ;
    PL$31/*par*/["connection"] = (PL$31/*par*/["connection"] || this);
    return PL$7/*tableScan*/(PL$31/*par*/);
    ;}),
"sql": PL$9/*sql*/,
"createTable": (function(PL$31/*par*/){
  
    ;
    PL$31/*par*/["connection"] = (PL$31/*par*/["connection"] || this);
    return PL$32/*tableCreator*/(PL$31/*par*/);
    ;}),
"storageHandler": (function(PL$31/*par*/){
  
    ;
    PL$31/*par*/ = (PL$31/*par*/ || {});
    PL$31/*par*/["connection"] = (PL$31/*par*/["connection"] || this);
    return new PL$11/*Storage*/(PL$31/*par*/);
    ;})}, [], PL$13/*inherited*/);
return res; })()); return;
  PL$1.resolve(); return;}), PL$4);
;}), PL$4);
;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();