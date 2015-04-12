(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
var classSystem = promiseland.classSystem;
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
    if (promiseland._hasModule({ hashStr: "1eb68b092276fac8d2d6f7c4da4dd46d" })){ return promiseland._getModule("1eb68b092276fac8d2d6f7c4da4dd46d"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "1eb68b092276fac8d2d6f7c4da4dd46d", "module": PL$1, promising: true });
var PL$17/*promiseland*/;try{PL$17/*promiseland*/ = promiseland;}catch(e){};
var PL$21/*console*/;try{PL$21/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$6/*promiseland exception catcher*/ = function(code){
  return function(res){
    try{ code(res); }catch(e){
      PL$1.reject(e);
    };
  };
};
var PL$7/*catch rejected*/ = function(e){
  PL$1.reject(e);
};
var PL$12/*pwd*/;
var PL$14/*Con*/;
var PL$16/*con*/;
var PL$4/*Test1*/;
var PL$19/*a*/;

/* ---------------------------- */
/* type Test1 */
var PL$3/*type:Test1*/ = classSystem._createProvisionalClass();
PL$4/*Test1*/ = PL$3/*type:Test1*/
var PL$5/*Test1-constructor*/ = undefined;
classSystem.readyPromise(PL$3/*type:Test1*/).then(function(parType){
  PL$3/*type:Test1*/ = parType;
  PL$5/*Test1-constructor*/ = classSystem.getTypeConstructor(PL$3/*type:Test1*/);
});
/* ---------------------------- */

PL$6/*promiseland exception catcher*/(function(){

  ;
  var PL$8 = new __Promise();
  var PL$9 = new __Promise();
  var PL$10/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.resolve(e); }; }; };
  var PL$11 = function(e){ PL$9.resolve(e); };
  PL$10/*try catch*/(function(){
    __requireFun("./password").then(PL$10/*try catch*/(function(PL$13){PL$12/*pwd*/ = PL$13;
    __requireFun("..").then(PL$10/*try catch*/(function(PL$15){PL$14/*Con*/ = PL$15;
    PL$16/*con*/ = new PL$14/*Con*/((("postgres://postgres:" + PL$12/*pwd*/) + "@localhost/mydb"));
    PL$17/*promiseland*/["classSystem"]["setStorageEngine"](PL$16/*con*/["storageHandler"]());
    classSystem._resolveProvisional(PL$3/*type:Test1*/, classSystem.createClass({moduleName: "mymodule",className: "Test1",members: [{"name":"constructor","type":classSystem.getBuiltinType("var")},{"name":"a","type":classSystem.getBuiltinType("var")},{"name":"b","type":classSystem.getBuiltinType("var"),"meta":{
      "type": "int"
    }},{"name":"c","type":classSystem.getBuiltinType("var")},{"name":"y","type":classSystem.getBuiltinType("var")}], "extends": [], "hasFreePart": true, "hashStr": "1eb68b092276fac8d2d6f7c4da4dd46d", "name": "Test1", "savable": true}, {"constructor": (function(PL$18/*x*/){
    
      ;
      ;}), "a": 1, "b": 2, "c": "xxx", "y": "new col data"}));PL$4/*Test1*/;
    new PL$5/*Test1-constructor*/("yy").then(PL$10/*try catch*/(function(PL$20){PL$19/*a*/ = PL$20;
    PL$21/*console*/["log"](PL$19/*a*/[9]);
    PL$19/*a*/[9] = "something else";
    PL$19/*a*/[8] = 4;
    PL$19/*a*/[4]().then(PL$10/*try catch*/(function(PL$22){PL$22;
    PL$21/*console*/["log"]("the end");
    PL$8.resolve();}), PL$11);
  ;}), PL$11);
  ;}), PL$11);
  ;}), PL$11);
  ;})();
  PL$9.then(PL$6/*promiseland exception catcher*/(function(PL$23/*e*/){
    PL$21/*console*/["log"](PL$23/*e*/);
    PL$8.resolve();;}));
  PL$8.then(PL$6/*promiseland exception catcher*/(function(){;
  PL$1.resolve(); return;}), PL$7/*catch rejected*/)
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
