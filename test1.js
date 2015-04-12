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
    if (promiseland._hasModule({ hashStr: "df641265dcb0847286d0e40547216137" })){ return promiseland._getModule("df641265dcb0847286d0e40547216137"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "df641265dcb0847286d0e40547216137", "module": PL$1, promising: true });
var PL$14/*console*/;try{PL$14/*console*/ = console;}catch(e){};
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
var PL$11/*pwd*/;
var PL$13/*con*/;
var PL$16/*sql*/;
var PL$17/*tab1*/;
var PL$19/*ttable*/;
var PL$21/*query*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  var PL$5 = new __Promise();
  var PL$6 = new __Promise();
  var PL$7/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$6.resolve(e); }; }; };
  var PL$8 = function(e){ PL$6.resolve(e); };
  PL$7/*try catch*/(function(){
    __requireFun("./Connection").then(PL$7/*try catch*/(function(PL$10){PL$9/*Con*/ = PL$10;
    __requireFun("./demo/password").then(PL$7/*try catch*/(function(PL$12){PL$11/*pwd*/ = PL$12;
    PL$13/*con*/ = new PL$9/*Con*/((("postgres://postgres:" + PL$11/*pwd*/) + "@localhost/mydb"));
    PL$13/*con*/["query"]("select * from testtab1").then(PL$7/*try catch*/(function(PL$15){PL$14/*console*/["log"](PL$15);
    PL$16/*sql*/ = PL$13/*con*/["sql"];
    PL$14/*console*/["log"](PL$16/*sql*/["dialect"]);
    PL$1.resolve(); return;
    PL$17/*tab1*/ = PL$16/*sql*/["define"]({
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
    PL$14/*console*/["log"]("x1");
    PL$13/*con*/["createTable"]({
      "table": PL$17/*tab1*/
    }).then(PL$7/*try catch*/(function(PL$18){PL$18;
    PL$14/*console*/["log"]("x2");
    PL$13/*con*/["tableDescription"]({
      "name": "testtab1"
    }).then(PL$7/*try catch*/(function(PL$20){PL$19/*ttable*/ = PL$20["table"];
    PL$14/*console*/["log"](PL$19/*ttable*/);
    PL$21/*query*/ = PL$19/*ttable*/["select"](PL$19/*ttable*/["some"])["from"](PL$19/*ttable*/)["where"](PL$19/*ttable*/["key"]["equals"](1))["toQuery"]();
    PL$13/*con*/["query"](PL$21/*query*/).then(PL$7/*try catch*/(function(PL$22){PL$14/*console*/["log"](PL$22);
    PL$5.resolve();}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;}), PL$8);
  ;})();
  PL$6.then(PL$3/*promiseland exception catcher*/(function(PL$23/*e*/){
    PL$14/*console*/["log"](PL$23/*e*/);
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
