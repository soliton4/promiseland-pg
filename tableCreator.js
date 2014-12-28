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
    if (promiseland._hasModule({ hashStr: "71232c80f238112964e04781264cb6ad" })){ return promiseland._getModule("71232c80f238112964e04781264cb6ad"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "71232c80f238112964e04781264cb6ad", "module": PL$1, promising: true });
var PL$25/*console*/;try{PL$25/*console*/ = console;}catch(e){};
var PL$2 = (function(){
"use strict";
var PL$3 = function(code){ return function(res){ try{code(res);}catch(e){ PL$1.reject(e); }; }; };
var PL$4 = function(e){ PL$1.reject(e); };
var PL$5/*sql*/;
var PL$7/*parser*/;
var PL$9/*tableCreator*/;
var PL$79/*canConvert*/;
var PL$82/*typeSynonyms*/;
var PL$29/*sameType*/;
var PL$61/*indexfits*/;
PL$3(function(){

  ;
  __requireFun("./sql").then(PL$3(function(PL$6){PL$5/*sql*/ = PL$6;
  __requireFun("./typeParser").then(PL$3(function(PL$8){PL$7/*parser*/ = PL$8;
  PL$9/*tableCreator*/ = (function(PL$10/*par*/){
  var PL$11 = new __Promise();
var PL$13 = function(code){ return function(res){ try{code(res);}catch(e){ PL$11.reject(e); }; }; };
var PL$14 = function(e){ PL$11.reject(e); };
var PL$15/*con*/;
var PL$16/*table*/;
var PL$17/*indexes*/;
var PL$18/*existing*/;
var PL$20/*createTable*/;
var PL$21/*dif*/;
var PL$22/*droptemp*/;
var PL$23/*renameName*/;
var PL$26/*excols*/;
var PL$27/*cols*/;
var PL$28/*i*/;
var PL$35/*create*/;
var PL$39/*tempCols*/;
var PL$40/*tempTable*/;
var PL$41/*usedCols*/;
var PL$42/*j*/;
var PL$44/*tempCols1*/;
var PL$45/*ins*/;
var PL$46/*tempCols2*/;
var PL$47/*query*/;
var PL$54/*indexNoCreate*/;
var PL$56/*exindexes*/;
var PL$60/*useIt*/;
var PL$70/*createIt*/;
var PL$71/*idx*/;
var PL$73/*q*/;
var PL$74/*indexCols*/;
var PL$75/*c*/;
PL$13(function(){
  
    ;
    PL$15/*con*/ = PL$10/*par*/["connection"];
    PL$16/*table*/ = PL$10/*par*/["table"];
    PL$17/*indexes*/ = (PL$10/*par*/["indexes"] || []);
    PL$15/*con*/["tableDescription"]({"name": PL$16/*table*/["getName"](),
"schema": PL$16/*table*/["getSchema"]()}).then(PL$13(function(PL$19){PL$18/*existing*/ = PL$19;
    PL$20/*createTable*/ = true;
    PL$21/*dif*/ = false;
    PL$22/*droptemp*/ = false;
    PL$23/*renameName*/;
    
    var PL$24 = new __Promise();if(PL$18/*existing*/){
      PL$25/*console*/["log"]("existing");
      PL$26/*excols*/ = PL$18/*existing*/["table"]["columns"];
      PL$27/*cols*/ = PL$16/*table*/["columns"];
      PL$28/*i*/ = 0;
      if((PL$27/*cols*/["length"] == PL$26/*excols*/["length"])){
        for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$27/*cols*/["length"]);++PL$28/*i*/){{
          if((PL$27/*cols*/[PL$28/*i*/]["name"] != PL$26/*excols*/[PL$28/*i*/]["name"])){
            PL$25/*console*/["log"]("dif name");
            PL$21/*dif*/ = true;
            break;;
          };
          ;
          if(! PL$29/*sameType*/(PL$27/*cols*/[PL$28/*i*/]["dataType"], PL$26/*excols*/[PL$28/*i*/]["dataType"])){
            PL$25/*console*/["log"]("dif type");
            PL$25/*console*/["log"](((PL$27/*cols*/[PL$28/*i*/]["dataType"] + " - ") + PL$26/*excols*/[PL$28/*i*/]["dataType"]));
            PL$21/*dif*/ = true;
            break;;
          };
          ;
          if((PL$27/*cols*/[PL$28/*i*/]["primaryKey"] != PL$26/*excols*/[PL$28/*i*/]["primaryKey"])){
            PL$25/*console*/["log"]("dif pk");
            PL$21/*dif*/ = true;
            break;;
          };
          ;}};
        ;
      }else{
      PL$25/*console*/["log"]("dif length");
      PL$21/*dif*/ = true;
      };
      ;
      
      var PL$30 = new __Promise();if(PL$21/*dif*/){
        PL$25/*console*/["log"]("some dif");
        PL$23/*renameName*/ = (PL$16/*table*/["getName"]() + "_temp_rename");
        PL$15/*con*/["query"](PL$18/*existing*/["table"]["alter"]()["rename"](PL$23/*renameName*/)).then(PL$13(function(PL$31){PL$31;
        PL$22/*droptemp*/ = true;
        PL$30.resolve();;}), PL$14);
;
      }else{
      PL$20/*createTable*/ = false;
      PL$30.resolve();;
      };PL$30.then(PL$13(function(PL$32){PL$32;;
      ;
      PL$24.resolve();;}), PL$14);
;
    }else{PL$24.resolve();
    };PL$24.then(PL$13(function(PL$33){PL$33;;
    ;
    
    var PL$34 = new __Promise();if(PL$20/*createTable*/){
      PL$25/*console*/["log"]("creating table");
      PL$35/*create*/ = PL$16/*table*/["create"]();
      PL$15/*con*/["query"](PL$35/*create*/).then(PL$13(function(PL$36){PL$36;
      PL$34.resolve();;}), PL$14);
;
    }else{PL$34.resolve();
    };PL$34.then(PL$13(function(PL$37){PL$37;;
    ;
    
    var PL$38 = new __Promise();if((PL$18/*existing*/ && PL$21/*dif*/)){
      PL$28/*i*/;
      PL$39/*tempCols*/ = [];
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$26/*excols*/["length"]);++PL$28/*i*/){{
        PL$39/*tempCols*/["push"](PL$26/*excols*/[PL$28/*i*/]["name"]);}};
      ;
      PL$5/*sql*/["setDialect"]("postgres");
      PL$40/*tempTable*/ = PL$5/*sql*/["define"]({"name": PL$23/*renameName*/,
"schema": PL$16/*table*/["getSchema"](),
"columns": PL$39/*tempCols*/});
      PL$41/*usedCols*/ = [];
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$26/*excols*/["length"]);++PL$28/*i*/){{
        PL$42/*j*/ = 0;
        for(PL$42/*j*/ = 0;(PL$42/*j*/ < PL$27/*cols*/["length"]);++PL$42/*j*/){{
          if((PL$27/*cols*/[PL$42/*j*/]["name"] == PL$26/*excols*/[PL$28/*i*/]["name"])){
            PL$41/*usedCols*/["push"](PL$27/*cols*/[PL$42/*j*/]["name"]);
            break;;
          };
          ;}};
        ;}};
      ;
      
      var PL$43 = new __Promise();if(PL$41/*usedCols*/["length"]){
        PL$25/*console*/["log"](PL$41/*usedCols*/);
        PL$44/*tempCols1*/ = [];
        for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$41/*usedCols*/["length"]);++PL$28/*i*/){{
          PL$44/*tempCols1*/["push"](PL$16/*table*/[PL$41/*usedCols*/[PL$28/*i*/]]);}};
        ;
        PL$45/*ins*/ = PL$16/*table*/["insert"]["apply"](PL$16/*table*/, PL$44/*tempCols1*/);
        PL$25/*console*/["log"]("1");
        PL$46/*tempCols2*/ = [];
        for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$41/*usedCols*/["length"]);++PL$28/*i*/){{
          PL$46/*tempCols2*/["push"](PL$40/*tempTable*/[PL$41/*usedCols*/[PL$28/*i*/]]);}};
        ;
        PL$47/*query*/ = PL$45/*ins*/["select"]["apply"](PL$45/*ins*/, PL$46/*tempCols2*/)["from"](PL$40/*tempTable*/)["toQuery"]();
        PL$25/*console*/["log"](PL$47/*query*/);
        PL$15/*con*/["query"](PL$47/*query*/).then(PL$13(function(PL$48){PL$48;
        PL$43.resolve();;}), PL$14);
;
      }else{PL$43.resolve();
      };PL$43.then(PL$13(function(PL$49){PL$49;;
      ;
      PL$38.resolve();;}), PL$14);
;
    }else{PL$38.resolve();
    };PL$38.then(PL$13(function(PL$50){PL$50;;
    ;
    
    var PL$51 = new __Promise();if(PL$22/*droptemp*/){
      PL$25/*console*/["log"]("droping temp");
      PL$15/*con*/["query"](PL$40/*tempTable*/["drop"]()).then(PL$13(function(PL$52){PL$52;
      PL$51.resolve();;}), PL$14);
;
    }else{PL$51.resolve();
    };PL$51.then(PL$13(function(PL$53){PL$53;;
    ;
    PL$25/*console*/["log"]("indexcomparison");
    PL$54/*indexNoCreate*/ = [];
    
    var PL$55 = new __Promise();if((PL$18/*existing*/ && ! PL$21/*dif*/)){
      PL$56/*exindexes*/ = (PL$18/*existing*/["indexes"] || []);
      PL$42/*j*/;
      PL$42/*j*/ = 0;var PL$58 = new __Promise();
var PL$57 = function(){var PL$59 = new __Promise();
if((PL$42/*j*/ < PL$56/*exindexes*/["length"])){
      PL$60/*useIt*/ = false;
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$17/*indexes*/["length"]);++PL$28/*i*/){{
        if(PL$61/*indexfits*/(PL$56/*exindexes*/[PL$42/*j*/], PL$17/*indexes*/[PL$28/*i*/])){
          PL$54/*indexNoCreate*/["push"](PL$17/*indexes*/[PL$28/*i*/]);
          PL$60/*useIt*/ = true;
          break;;
        };
        ;}};
      ;
      
      var PL$62 = new __Promise();if((! PL$60/*useIt*/ && ! PL$56/*exindexes*/[PL$42/*j*/]["primaryKey"])){
        PL$25/*console*/["log"](("dropping index " + PL$56/*exindexes*/[PL$42/*j*/]["name"]));
        PL$25/*console*/["log"](PL$16/*table*/["indexes"]()["drop"](PL$56/*exindexes*/[PL$42/*j*/]["name"])["toQuery"]());
        PL$15/*con*/["query"](PL$16/*table*/["indexes"]()["drop"](PL$56/*exindexes*/[PL$42/*j*/]["name"])).then(PL$13(function(PL$63){PL$63;
        PL$62.resolve();;}), PL$14);
;
      }else{PL$62.resolve();
      };PL$62.then(PL$13(function(PL$64){PL$64;;
      ;
      PL$59.resolve(true); return PL$59;
;}), PL$14);
;}else{PL$59.resolve(false); return PL$59;
};
PL$59;return PL$59;
};
var PL$65 = function(){PL$57().then(function(contLoop){
if (contLoop){++PL$42/*j*/;PL$65();}else{PL$58.resolve();};
});
};
PL$65();
PL$58.then(function(){;
      ;
      PL$55.resolve();;});
    }else{PL$55.resolve();
    };PL$55.then(PL$13(function(PL$66){PL$66;;
    ;
    PL$25/*console*/["log"]("index 2");
    PL$28/*i*/ = 0;var PL$68 = new __Promise();
var PL$67 = function(){var PL$69 = new __Promise();
if((PL$28/*i*/ < PL$17/*indexes*/["length"])){
    PL$70/*createIt*/ = true;
    PL$71/*idx*/ = PL$17/*indexes*/[PL$28/*i*/];
    for(PL$42/*j*/ = 0;(PL$42/*j*/ < PL$54/*indexNoCreate*/["length"]);++PL$42/*j*/){{
      if((PL$71/*idx*/ === PL$54/*indexNoCreate*/[PL$42/*j*/])){
        PL$70/*createIt*/ = false;
      };
      ;}};
    ;
    if(PL$71/*idx*/["primaryKey"]){
      PL$70/*createIt*/ = false;
    };
    ;
    
    var PL$72 = new __Promise();if(PL$70/*createIt*/){
      PL$73/*q*/ = PL$16/*table*/["indexes"]()["create"](PL$71/*idx*/["name"]);
      if(PL$71/*idx*/["unique"]){
        PL$73/*q*/ = PL$73/*q*/["unique"]();
      };
      ;
      PL$74/*indexCols*/ = [];
      PL$75/*c*/ = 0;
      for(PL$75/*c*/ = 0;(PL$75/*c*/ < PL$71/*idx*/["columns"]["length"]);++PL$75/*c*/){{
        PL$74/*indexCols*/["push"](PL$16/*table*/[PL$71/*idx*/["columns"][PL$75/*c*/]]);}};
      ;
      PL$73/*q*/ = PL$73/*q*/["on"]["apply"](PL$73/*q*/, PL$74/*indexCols*/);
      PL$25/*console*/["log"]("creating index");
      PL$15/*con*/["query"](PL$73/*q*/).then(PL$13(function(PL$76){PL$76;
      PL$72.resolve();;}), PL$14);
;
    }else{PL$72.resolve();
    };PL$72.then(PL$13(function(PL$77){PL$77;;
    ;
    PL$69.resolve(true); return PL$69;
;}), PL$14);
;}else{PL$69.resolve(false); return PL$69;
};
PL$69;return PL$69;
};
var PL$78 = function(){PL$67().then(function(contLoop){
if (contLoop){++PL$28/*i*/;PL$78();}else{PL$68.resolve();};
});
};
PL$78();
PL$68.then(function(){;
    ;
    PL$11.resolve(); return;});}), PL$14);
;}), PL$14);
;}), PL$14);
;}), PL$14);
;}), PL$14);
;}), PL$14);
;})();
return PL$11;
});
  PL$79/*canConvert*/ = (function(PL$80/*parExisting*/, PL$81/*parNew*/){
  
    ;
    ;});
  PL$82/*typeSynonyms*/ = [["int", "integer"], ["character varying", "varchar"]];
  PL$29/*sameType*/ = (function(PL$83/*type1*/, PL$84/*type2*/){
  var PL$85/*parse1*/;
var PL$86/*parse2*/;
var PL$87/*sameName*/;
var PL$88/*t*/;
var PL$89/*syns*/;
var PL$28/*i*/;
var PL$90/*found1*/;
var PL$91/*found2*/;

    ;
    PL$85/*parse1*/ = PL$7/*parser*/["parse"](PL$83/*type1*/);
    PL$86/*parse2*/ = PL$7/*parser*/["parse"](PL$84/*type2*/);
    PL$87/*sameName*/;
    if((PL$85/*parse1*/["name"] == PL$86/*parse2*/["name"])){
      PL$87/*sameName*/ = true;
    };
    ;
    PL$88/*t*/ = 0;
    for(PL$88/*t*/ = 0;(PL$88/*t*/ < PL$82/*typeSynonyms*/["length"]);++PL$88/*t*/){{
      PL$89/*syns*/ = PL$82/*typeSynonyms*/[PL$88/*t*/];
      PL$28/*i*/ = 0;
      PL$90/*found1*/ = false;
      PL$91/*found2*/ = false;
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$89/*syns*/["length"]);++PL$28/*i*/){{
        if((PL$85/*parse1*/["name"] == PL$89/*syns*/[PL$28/*i*/])){
          PL$90/*found1*/ = true;
        };
        ;
        if((PL$86/*parse2*/["name"] == PL$89/*syns*/[PL$28/*i*/])){
          PL$91/*found2*/ = true;
        };
        ;}};
      ;
      if((PL$90/*found1*/ && PL$91/*found2*/)){
        PL$87/*sameName*/ = true;
      };
      ;}};
    ;
    if(! PL$87/*sameName*/){
      return false;
    };
    ;
    if((PL$85/*parse1*/["length"] == PL$86/*parse2*/["length"])){
      return true;
    };
    ;
    return false;
    ;});
  PL$61/*indexfits*/ = (function(PL$92/*ex*/, PL$93/*ni*/){
  var PL$28/*i*/;

    ;
    if((! ! PL$93/*ni*/["unique"] != ! ! PL$92/*ex*/["unique"])){
      return false;
    };
    ;
    if((! ! PL$93/*ni*/["primaryKey"] != ! ! PL$92/*ex*/["primaryKey"])){
      return false;
    };
    ;
    if(PL$93/*ni*/["name"]){
      if((PL$93/*ni*/["name"] != PL$92/*ex*/["name"])){
        return false;
      };
      ;
    };
    ;
    if((PL$93/*ni*/["columns"]["length"] != PL$92/*ex*/["columns"]["length"])){
      return false;
    };
    ;
    PL$28/*i*/ = 0;
    for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$93/*ni*/["columns"]["length"]);++PL$28/*i*/){{
      if((PL$93/*ni*/["columns"][PL$28/*i*/] != PL$92/*ex*/["columns"][PL$28/*i*/])){
        return false;
      };
      ;}};
    ;
    return true;
    ;});
  PL$1.resolve(PL$9/*tableCreator*/); return;
  PL$1.resolve(); return;}), PL$4);
;}), PL$4);
;})();
return PL$1;
})();
;;
return PL$1});
})();