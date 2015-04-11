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
    if (promiseland._hasModule({ hashStr: "796c0c7ba4c1a9ae9916aebe06da7290" })){ return promiseland._getModule("796c0c7ba4c1a9ae9916aebe06da7290"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "796c0c7ba4c1a9ae9916aebe06da7290", "module": PL$1, promising: true });
var PL$12/*console*/;try{PL$12/*console*/ = console;}catch(e){};
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
var PL$9/*Con*/;
var PL$11/*con*/;
var PL$14/*sql*/;
var PL$15/*tab1*/;
var PL$17/*ttable*/;
var PL$19/*query*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  var PL$5 = new __Promise();
  var PL$6 = new __Promise();
  var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
  var PL$8 = function(e){ PL$6.resolve(e); };
  PL$7/*try catch*/(function(){
    __requireFun("./Connection").then(PL$7/*try catch*/(function(PL$10){PL$9/*Con*/ = PL$10;
    PL$11/*con*/ = new PL$9/*Con*/("postgres://postgres:<insertpasswort>@localhost/mydb");
    PL$11/*con*/["query"]("select * from testtab1").then(PL$7/*try catch*/(function(PL$13){PL$12/*console*/["log"](PL$13);
    PL$14/*sql*/ = PL$11/*con*/["sql"];
    PL$15/*tab1*/ = PL$14/*sql*/["define"]({
      "name": "tab1",
      "schema": "public",
      "columns": [
        {
          "name": "id",
          "dataType": "integer",
          "primaryKey": true
        }, 
        {
          "name": "someval1",
          "dataType": "char(30)"
        }
      ]
    });
    PL$12/*console*/["log"]("x1");
    PL$11/*con*/["createTable"]({
      "table": PL$15/*tab1*/
    }).then(PL$7/*try catch*/(function(PL$16){PL$16;
    PL$12/*console*/["log"]("x2");
    PL$11/*con*/["tableDescription"]({
      "name": "testtab1"
    }).then(PL$7/*try catch*/(function(PL$18){PL$17/*ttable*/ = PL$18["table"];
    PL$12/*console*/["log"](PL$17/*ttable*/);
    PL$19/*query*/ = PL$17/*ttable*/["select"](PL$17/*ttable*/["some"])["from"](PL$17/*ttable*/)["where"](PL$17/*ttable*/["key"]["equals"](1))["toQuery"]();
    PL$11/*con*/["query"](PL$19/*query*/).then(PL$7/*try catch*/(function(PL$20){PL$12/*console*/["log"](PL$20);
    PL$5.resolve();}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;})();
  PL$6.then(PL$3/*promiseland exception catcher*/(function(PL$21/*e*/){
    PL$12/*console*/["log"](PL$21/*e*/);
    PL$5.resolve();;}));
  PL$5.then(PL$3/*promiseland exception catcher*/(function(){;
  ;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/)
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
