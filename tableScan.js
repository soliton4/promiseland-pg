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
    if (promiseland._hasModule({ hashStr: "4434d519480696098abc685b8024d669" })){ return promiseland._getModule("4434d519480696098abc685b8024d669"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "4434d519480696098abc685b8024d669", "module": PL$1, promising: true });
var PL$21/*cols*/;try{PL$21/*cols*/ = cols;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*sql*/;
var PL$7/*tableScan*/;
var PL$34/*scanIndex*/;
PL$3(function(){

  ;
  __requireFun("./sql").then(PL$3(function(PL$6){PL$5/*sql*/ = PL$6;
  PL$7/*tableScan*/ = (function(PL$8/*par*/){
  var PL$9 = new __Promise();
var PL$11 = function(code){ return function(res){ try{code(res);}catch(e){ PL$9.reject(e); }; }; };
var PL$12 = function(e){ PL$9.reject(e); };
var PL$13/*con*/;
var PL$14/*schema*/;
var PL$15/*tables*/;
var PL$16/*query*/;
var PL$17/*res*/;
var PL$19/*columns*/;
var PL$22/*i*/;
var PL$23/*row*/;
var PL$24/*col*/;
var PL$25/*resTab*/;
var PL$27/*indexes*/;
var PL$28/*pk*/;
var PL$33/*index*/;
var PL$38/*c*/;
var PL$39/*j*/;
PL$11(function(){
  
    ;
    PL$13/*con*/ = PL$8/*par*/["connection"];
    PL$14/*schema*/ = (PL$8/*par*/["schema"] || "public");
    PL$5/*sql*/["setDialect"]("postgres");
    PL$15/*tables*/ = PL$5/*sql*/["define"]({"name": "tables",
"schema": "information_schema",
"columns": ["table_schema", "table_name", "table_type"]});
    PL$16/*query*/ = PL$15/*tables*/["select"](PL$15/*tables*/["star"]())["from"](PL$15/*tables*/)["where"](PL$15/*tables*/["table_schema"]["equals"](PL$14/*schema*/)["and"](PL$15/*tables*/["table_name"]["equals"](PL$8/*par*/["name"])))["toQuery"]();
    PL$13/*con*/["query"](PL$16/*query*/["text"], PL$16/*query*/["values"]).then(PL$11(function(PL$18){PL$17/*res*/ = PL$18;
    if(! ((PL$17/*res*/ && PL$17/*res*/["rows"]) && PL$17/*res*/["rows"]["length"])){
      PL$9.resolve(); return;
    };
    ;
    PL$5/*sql*/["setDialect"]("postgres");
    PL$19/*columns*/ = PL$5/*sql*/["define"]({"name": "columns",
"schema": "information_schema",
"columns": ["table_schema", "table_name", "column_name", "ordinal_position", "data_type", "character_maximum_length"]});
    PL$16/*query*/ = PL$19/*columns*/["select"](PL$19/*columns*/["star"]())["from"](PL$19/*columns*/)["where"](PL$19/*columns*/["table_schema"]["equals"](PL$14/*schema*/)["and"](PL$19/*columns*/["table_name"]["equals"](PL$8/*par*/["name"])))["order"](PL$19/*columns*/["ordinal_position"])["toQuery"]();
    PL$13/*con*/["query"](PL$16/*query*/["text"], PL$16/*query*/["values"]).then(PL$11(function(PL$20){PL$17/*res*/ = PL$20;
    PL$21/*cols*/ = [];
    PL$22/*i*/ = 0;
    for(PL$22/*i*/ = 0;(PL$22/*i*/ < PL$17/*res*/["rows"]["length"]);++PL$22/*i*/){{
      PL$23/*row*/ = PL$17/*res*/["rows"][PL$22/*i*/];
      PL$24/*col*/ = {"name": PL$23/*row*/["column_name"],
"dataType": (PL$23/*row*/["data_type"] + (PL$23/*row*/["character_maximum_length"] ? (("(" + PL$23/*row*/["character_maximum_length"]) + ")") : ""))};
      PL$21/*cols*/["push"](PL$24/*col*/);}};
    ;
    PL$5/*sql*/["setDialect"]("postgres");
    PL$25/*resTab*/ = PL$5/*sql*/["define"]({"name": PL$8/*par*/["name"],
"schema": PL$14/*schema*/,
"columns": PL$21/*cols*/});
    PL$16/*query*/ = PL$25/*resTab*/["indexes"]()["toQuery"]();
    PL$13/*con*/["query"](PL$16/*query*/["text"], PL$16/*query*/["values"]).then(PL$11(function(PL$26){PL$17/*res*/ = PL$26;
    PL$27/*indexes*/ = [];
    PL$28/*pk*/;
    
    var PL$29 = new __Promise();if(((PL$17/*res*/ && PL$17/*res*/["rows"]) && PL$17/*res*/["rows"]["length"])){
      PL$22/*i*/ = 0;var PL$31 = new __Promise();
var PL$30 = function(){var PL$32 = new __Promise();
if((PL$22/*i*/ < PL$17/*res*/["rows"]["length"])){
      PL$34/*scanIndex*/({"name": PL$17/*res*/["rows"][PL$22/*i*/]["relname"],
"table": PL$25/*resTab*/,
"connection": PL$13/*con*/}).then(PL$11(function(PL$35){PL$33/*index*/ = PL$35;
      if(PL$33/*index*/){
        PL$27/*indexes*/["push"](PL$33/*index*/);
        if(PL$33/*index*/["primaryKey"]){
          PL$28/*pk*/ = PL$33/*index*/;
        };
        ;
      };
      ;
      PL$32.resolve(true); return PL$32;
;}), PL$12);
;}else{PL$32.resolve(false); return PL$32;
};
PL$32;return PL$32;
};
var PL$36 = function(){PL$30().then(function(contLoop){
if (contLoop){++PL$22/*i*/;PL$36();}else{PL$31.resolve();};
});
};
PL$36();
PL$31.then(function(){;
      ;
      PL$29.resolve();;});
    }else{PL$29.resolve();
    };PL$29.then(PL$11(function(PL$37){PL$37;;
    ;
    if(PL$28/*pk*/){
      PL$22/*i*/ = 0;
      for(PL$22/*i*/ = 0;(PL$22/*i*/ < PL$28/*pk*/["columns"]["length"]);++PL$22/*i*/){{
        PL$38/*c*/ = PL$28/*pk*/["columns"][PL$22/*i*/];
        PL$39/*j*/ = 0;
        for(PL$39/*j*/ = 0;(PL$39/*j*/ < PL$21/*cols*/["length"]);++PL$39/*j*/){{
          if((PL$21/*cols*/[PL$39/*j*/]["name"] == PL$38/*c*/)){
            PL$21/*cols*/[PL$39/*j*/]["primaryKey"] = true;
          };
          ;}};
        ;}};
      ;
    };
    ;
    PL$5/*sql*/["setDialect"]("postgres");
    PL$25/*resTab*/ = PL$5/*sql*/["define"]({"name": PL$8/*par*/["name"],
"schema": PL$14/*schema*/,
"columns": PL$21/*cols*/});
    PL$9.resolve({"table": PL$25/*resTab*/,
"indexes": PL$27/*indexes*/,
"pk": PL$28/*pk*/}); return;
    PL$9.resolve(); return;}), PL$12);
;}), PL$12);
;}), PL$12);
;}), PL$12);
;})();
return PL$9;
});
  PL$34/*scanIndex*/ = (function(PL$8/*par*/){
  var PL$40 = new __Promise();
var PL$41 = function(code){ return function(res){ try{code(res);}catch(e){ PL$40.reject(e); }; }; };
var PL$42 = function(e){ PL$40.reject(e); };
var PL$43/*pg_class*/;
var PL$44/*pg_namespace*/;
var PL$45/*pg_index*/;
var PL$46/*pg_attribute*/;
var PL$16/*query*/;
var PL$13/*con*/;
var PL$17/*res*/;
var PL$48/*oid*/;
var PL$50/*isUnique*/;
var PL$51/*isPrimary*/;
var PL$19/*columns*/;
var PL$22/*i*/;
PL$41(function(){
  
    ;
    PL$43/*pg_class*/ = PL$5/*sql*/["define"]({"name": "pg_class",
"columns": ["oid", "relname", "relnamespace"]});
    PL$44/*pg_namespace*/ = PL$5/*sql*/["define"]({"name": "pg_namespace",
"columns": ["oid", "nspname"]});
    PL$45/*pg_index*/ = PL$5/*sql*/["define"]({"name": "pg_index",
"columns": ["indexrelid", "indrelid", "indisunique", "indisprimary"]});
    PL$46/*pg_attribute*/ = PL$5/*sql*/["define"]({"name": "pg_attribute",
"columns": ["attrelid", "attnum", "attname"]});
    PL$16/*query*/ = PL$43/*pg_class*/["select"](PL$43/*pg_class*/["relname"], PL$43/*pg_class*/["oid"])["from"](PL$43/*pg_class*/)["where"](PL$43/*pg_class*/["oid"]["in"](PL$43/*pg_class*/["subQuery"]()["select"](PL$45/*pg_index*/["indexrelid"])["from"](PL$43/*pg_class*/["join"](PL$45/*pg_index*/)["on"](PL$43/*pg_class*/["oid"]["equals"](PL$45/*pg_index*/["indrelid"])))["where"](PL$43/*pg_class*/["relname"]["equals"](PL$8/*par*/["table"]["getName"]())["and"](PL$43/*pg_class*/["relnamespace"]["in"](PL$44/*pg_namespace*/["subQuery"]()["select"](PL$44/*pg_namespace*/["oid"])["from"](PL$44/*pg_namespace*/)["where"](PL$44/*pg_namespace*/["nspname"]["equals"]((PL$8/*par*/["table"]["getSchema"]() || "public")))))))["and"](PL$43/*pg_class*/["relname"]["equals"](PL$8/*par*/["name"])))["toQuery"]();
    PL$13/*con*/ = PL$8/*par*/["connection"];
    PL$13/*con*/["query"](PL$16/*query*/["text"], PL$16/*query*/["values"]).then(PL$41(function(PL$47){PL$17/*res*/ = PL$47;
    if(((! PL$17/*res*/ || ! PL$17/*res*/["rows"]) || ! PL$17/*res*/["rows"]["length"])){
      PL$40.resolve(); return;
    };
    ;
    PL$48/*oid*/ = PL$17/*res*/["rows"][0]["oid"];
    PL$16/*query*/ = PL$45/*pg_index*/["select"](PL$45/*pg_index*/["star"]())["from"](PL$45/*pg_index*/)["where"](PL$45/*pg_index*/["indexrelid"]["equals"](PL$48/*oid*/))["toQuery"]();
    PL$13/*con*/["query"](PL$16/*query*/).then(PL$41(function(PL$49){PL$17/*res*/ = PL$49;
    if(((! PL$17/*res*/ || ! PL$17/*res*/["rows"]) || ! PL$17/*res*/["rows"]["length"])){
      PL$40.resolve(); return;
    };
    ;
    PL$50/*isUnique*/ = PL$17/*res*/["rows"][0]["indisunique"];
    PL$51/*isPrimary*/ = PL$17/*res*/["rows"][0]["indisprimary"];
    PL$16/*query*/ = PL$46/*pg_attribute*/["select"](PL$46/*pg_attribute*/["star"]())["from"](PL$46/*pg_attribute*/)["where"](PL$46/*pg_attribute*/["attrelid"]["equals"](PL$48/*oid*/))["order"](PL$46/*pg_attribute*/["attnum"])["toQuery"]();
    PL$13/*con*/["query"](PL$16/*query*/).then(PL$41(function(PL$52){PL$17/*res*/ = PL$52;
    if(((! PL$17/*res*/ || ! PL$17/*res*/["rows"]) || ! PL$17/*res*/["rows"]["length"])){
      PL$40.resolve(); return;
    };
    ;
    PL$19/*columns*/ = [];
    PL$22/*i*/ = 0;
    for(PL$22/*i*/ = 0;(PL$22/*i*/ < PL$17/*res*/["rows"]["length"]);++PL$22/*i*/){{
      PL$19/*columns*/["push"](PL$17/*res*/["rows"][PL$22/*i*/]["attname"]);}};
    ;
    PL$40.resolve({"name": PL$8/*par*/["name"],
"primaryKey": PL$51/*isPrimary*/,
"unique": PL$50/*isUnique*/,
"columns": PL$19/*columns*/}); return;
    PL$40.resolve(); return;}), PL$42);
;}), PL$42);
;}), PL$42);
;})();
return PL$40;
});
  PL$1.resolve(PL$7/*tableScan*/); return;
  PL$1.resolve(); return;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();