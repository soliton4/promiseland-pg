(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

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
if (promiseland._hasModule({ hashStr: "09ca60642a0b5fe5584784ce39e720e5" })){ return promiseland._getModule("09ca60642a0b5fe5584784ce39e720e5"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "09ca60642a0b5fe5584784ce39e720e5", "module": PL$1, promising: true });
var PL$25/*Callback*/;try{PL$25/*Callback*/ = Callback;}catch(e){};
var PL$31/*promiseland*/;try{PL$31/*promiseland*/ = promiseland;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$4/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$5/*pg*/;
var PL$7/*tableScan*/;
var PL$9/*sql*/;
var PL$11/*tableCreator*/;
var PL$13/*Storage*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("pg").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*pg*/ = PL$6;
  __requireFun("./tableScan").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*tableScan*/ = PL$8;
  __requireFun("./sql").then(PL$3/*promiseland exception catcher*/(function(PL$10){PL$9/*sql*/ = PL$10;
  __requireFun("./tableCreator").then(PL$3/*promiseland exception catcher*/(function(PL$12){PL$11/*tableCreator*/ = PL$12;
  __requireFun("./Storage").then(PL$3/*promiseland exception catcher*/(function(PL$14){PL$13/*Storage*/ = PL$14;
  PL$1.resolve((function(){var PL$15/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$16/*parConStr*/, PL$17/*parOptions*/){
    
      ;
      this["options"] = (PL$17/*parOptions*/ || {
        
      });
      this["conStr"] = PL$16/*parConStr*/;
      ;}),
    "query": (function(PL$18/*parSqlStr*/, PL$19/*parData*/){
    var PL$20 = new __Promise();
    var PL$22/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$20.reject(e);
        };
      };
    };
    var PL$23/*catch rejected*/ = function(e){
      PL$20.reject(e);
    };
    var PL$24/*cb*/;
    var PL$27/*conRes*/;
    var PL$29/*client*/;
    var PL$30/*done*/;
    var PL$26/*this*/ = this;
    PL$22/*promiseland exception catcher*/(function(){
    
      ;
      if((typeof PL$18/*parSqlStr*/ == "object")){
        if(! PL$18/*parSqlStr*/["text"]){
          if(PL$18/*parSqlStr*/["toQuery"]){
            PL$18/*parSqlStr*/ = PL$18/*parSqlStr*/["toQuery"]();
          };
          ;
        };
        ;
        PL$19/*parData*/ = PL$18/*parSqlStr*/["values"];
        PL$18/*parSqlStr*/ = PL$18/*parSqlStr*/["text"];
      };
      ;
      PL$24/*cb*/ = new PL$25/*Callback*/();
      PL$5/*pg*/["connect"](PL$26/*this*/["conStr"], PL$24/*cb*/);
      PL$24/*cb*/["promise"].then(PL$22/*promiseland exception catcher*/(function(PL$28){PL$27/*conRes*/ = PL$28;
      if(PL$27/*conRes*/[0]){
        throw PL$27/*conRes*/[0];
      };
      ;
      PL$29/*client*/ = PL$27/*conRes*/[1];
      PL$30/*done*/ = PL$27/*conRes*/[2];
      PL$24/*cb*/ = new PL$31/*promiseland*/["CallbackErrorFirst"]();
      PL$29/*client*/["query"](PL$18/*parSqlStr*/, PL$19/*parData*/, PL$24/*cb*/);
      PL$30/*done*/();
      PL$24/*cb*/["promise"].then(PL$22/*promiseland exception catcher*/(function(PL$32){PL$20.resolve(PL$32); return;
      PL$20.resolve(); return;}), PL$23/*catch rejected*/);
      ;}), PL$23/*catch rejected*/);
      ;
    })();return PL$20;
    }),
    "tableDescription": (function(PL$33/*par*/){
    
      ;
      PL$33/*par*/["connection"] = (PL$33/*par*/["connection"] || this);
      return PL$7/*tableScan*/(PL$33/*par*/);
      ;}),
    "sql": PL$9/*sql*/,
    "createTable": (function(PL$33/*par*/){
    
      ;
      PL$33/*par*/["connection"] = (PL$33/*par*/["connection"] || this);
      return PL$11/*tableCreator*/(PL$33/*par*/);
      ;}),
    "storageHandler": (function(PL$33/*par*/){
    
      ;
      var PL$33/*par*/ = (PL$33/*par*/ || {
        
      });
      ;
      PL$33/*par*/["connection"] = (PL$33/*par*/["connection"] || this);
      return new PL$13/*Storage*/(PL$33/*par*/);
      ;})
  }, [], PL$15/*inherited*/);
  return res; })()); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;}), PL$4/*catch rejected*/);
  ;
})();return PL$1;
})();
;;
return PL$1};
  
  if (typeof exports == "object" && typeof module == "object"){ // CommonJS
    module.exports = __modFun(function(modulesAr, callback, errBack){
      // the require function for CommonJs
      var args = [];
      try{
        var i = 0;
        var l = modulesAr.length;
        for (i; i < l; ++i){
          args.push(require(modulesAr[i]));
        };
      }catch(e){
        errBack(e);
        return;
      };
      callback.apply(callback, args);
    }, require("promiseland"));
  
  }else if (typeof define == "function" && define.amd){ // AMD
    define(["require", "promiseland"], __modFun);
  
  }else{ // Plain browser env
    __modFun(function(){ throw { msg: "require not possible in non loader mode" }; });
  
  };
})();
