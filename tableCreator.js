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
    if (promiseland._hasModule({ hashStr: "bb9bad664a6fb52f6189fd6e938559bc" })){ return promiseland._getModule("bb9bad664a6fb52f6189fd6e938559bc"); };
var PL$1 = new __Promise();
promiseland._registerModule({ hashStr: "bb9bad664a6fb52f6189fd6e938559bc", "module": PL$1, promising: true });
var PL$25/*console*/;try{PL$25/*console*/ = console;}catch(e){};
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
var PL$5/*sql*/;
var PL$7/*parser*/;
var PL$9/*tableCreator*/;
var PL$84/*canConvert*/;
var PL$87/*typeSynonyms*/;
var PL$29/*sameType*/;
var PL$66/*indexfits*/;
PL$3/*promiseland exception catcher*/(function(){

  ;
  __requireFun("./sql").then(PL$3/*promiseland exception catcher*/(function(PL$6){PL$5/*sql*/ = PL$6;
  __requireFun("./typeParser").then(PL$3/*promiseland exception catcher*/(function(PL$8){PL$7/*parser*/ = PL$8;
  PL$9/*tableCreator*/ = (function(PL$10/*par*/){
  var PL$11 = new __Promise();
  var PL$13/*promiseland exception catcher*/ = function(code){
    return function(res){
      try{ code(res); }catch(e){
        PL$11.reject(e);
      };
    };
  };
  var PL$14/*catch rejected*/ = function(e){
    PL$11.reject(e);
  };
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
  var PL$39/*create*/;
  var PL$44/*tempCols*/;
  var PL$45/*tempTable*/;
  var PL$46/*usedCols*/;
  var PL$47/*j*/;
  var PL$49/*tempCols1*/;
  var PL$50/*ins*/;
  var PL$51/*tempCols2*/;
  var PL$52/*query*/;
  var PL$59/*indexNoCreate*/;
  var PL$61/*exindexes*/;
  var PL$65/*useIt*/;
  var PL$75/*createIt*/;
  var PL$76/*idx*/;
  var PL$78/*q*/;
  var PL$79/*indexCols*/;
  var PL$80/*c*/;
  PL$13/*promiseland exception catcher*/(function(){
  
    ;
    PL$15/*con*/ = PL$10/*par*/["connection"];
    PL$16/*table*/ = PL$10/*par*/["table"];
    PL$17/*indexes*/ = (PL$10/*par*/["indexes"] || [
      
    ]);
    PL$15/*con*/["tableDescription"]({
      "name": PL$16/*table*/["getName"](),
      "schema": PL$16/*table*/["getSchema"]()
    }).then(PL$13/*promiseland exception catcher*/(function(PL$19){PL$18/*existing*/ = PL$19;
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
        PL$15/*con*/["query"](PL$18/*existing*/["table"]["alter"]()["rename"](PL$23/*renameName*/)).then(PL$13/*promiseland exception catcher*/(function(PL$31){PL$31;
        PL$22/*droptemp*/ = true;
        PL$30.resolve();;}), PL$14/*catch rejected*/);
        ;
      }else{
      PL$20/*createTable*/ = false;
      PL$30.resolve();;
      };PL$30.then(PL$13/*promiseland exception catcher*/(function(PL$32){PL$32;;
      ;
      PL$24.resolve();;}), PL$14/*catch rejected*/);
      ;
    }else{PL$24.resolve();
    };PL$24.then(PL$13/*promiseland exception catcher*/(function(PL$33){PL$33;;
    ;
    
    var PL$34 = new __Promise();if(PL$20/*createTable*/){
      var PL$35 = new __Promise();
      var PL$36 = new __Promise();
      var PL$37/*try catch*/ = function(code){ return function(res){ try{code(res);}catch(e){ PL$36.resolve(e); }; }; };
      var PL$38 = function(e){ PL$36.resolve(e); };
      PL$37/*try catch*/(function(){
        PL$25/*console*/["log"]("creating table");
        PL$39/*create*/ = PL$16/*table*/["create"]();
        PL$15/*con*/["query"](PL$39/*create*/).then(PL$37/*try catch*/(function(PL$40){PL$40;
        PL$35.resolve();}), PL$38);
      ;})();
      PL$36.then(PL$13/*promiseland exception catcher*/(function(PL$41/*e*/){
        PL$25/*console*/["log"](PL$41/*e*/);
        throw PL$41/*e*/;
        PL$35.resolve();;}));
      PL$35.then(PL$13/*promiseland exception catcher*/(function(){;
      PL$34.resolve();;}), PL$14/*catch rejected*/)
    }else{PL$34.resolve();
    };PL$34.then(PL$13/*promiseland exception catcher*/(function(PL$42){PL$42;;
    ;
    
    var PL$43 = new __Promise();if((PL$18/*existing*/ && PL$21/*dif*/)){
      PL$28/*i*/;
      PL$44/*tempCols*/ = [
        
      ];
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$26/*excols*/["length"]);++PL$28/*i*/){{
        PL$44/*tempCols*/["push"](PL$26/*excols*/[PL$28/*i*/]["name"]);}};
      ;
      PL$5/*sql*/["setDialect"]("postgres");
      PL$45/*tempTable*/ = PL$5/*sql*/["define"]({
        "name": PL$23/*renameName*/,
        "schema": PL$16/*table*/["getSchema"](),
        "columns": PL$44/*tempCols*/
      });
      PL$46/*usedCols*/ = [
        
      ];
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$26/*excols*/["length"]);++PL$28/*i*/){{
        PL$47/*j*/ = 0;
        for(PL$47/*j*/ = 0;(PL$47/*j*/ < PL$27/*cols*/["length"]);++PL$47/*j*/){{
          if((PL$27/*cols*/[PL$47/*j*/]["name"] == PL$26/*excols*/[PL$28/*i*/]["name"])){
            PL$46/*usedCols*/["push"](PL$27/*cols*/[PL$47/*j*/]["name"]);
            break;;
          };
          ;}};
        ;}};
      ;
      
      var PL$48 = new __Promise();if(PL$46/*usedCols*/["length"]){
        PL$25/*console*/["log"](PL$46/*usedCols*/);
        PL$49/*tempCols1*/ = [
          
        ];
        for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$46/*usedCols*/["length"]);++PL$28/*i*/){{
          PL$49/*tempCols1*/["push"](PL$16/*table*/[PL$46/*usedCols*/[PL$28/*i*/]]);}};
        ;
        PL$50/*ins*/ = PL$16/*table*/["insert"]["apply"](PL$16/*table*/, PL$49/*tempCols1*/);
        PL$25/*console*/["log"]("1");
        PL$51/*tempCols2*/ = [
          
        ];
        for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$46/*usedCols*/["length"]);++PL$28/*i*/){{
          PL$51/*tempCols2*/["push"](PL$45/*tempTable*/[PL$46/*usedCols*/[PL$28/*i*/]]);}};
        ;
        PL$52/*query*/ = PL$50/*ins*/["select"]["apply"](PL$50/*ins*/, PL$51/*tempCols2*/)["from"](PL$45/*tempTable*/)["toQuery"]();
        PL$25/*console*/["log"](PL$52/*query*/);
        PL$15/*con*/["query"](PL$52/*query*/).then(PL$13/*promiseland exception catcher*/(function(PL$53){PL$53;
        PL$48.resolve();;}), PL$14/*catch rejected*/);
        ;
      }else{PL$48.resolve();
      };PL$48.then(PL$13/*promiseland exception catcher*/(function(PL$54){PL$54;;
      ;
      PL$43.resolve();;}), PL$14/*catch rejected*/);
      ;
    }else{PL$43.resolve();
    };PL$43.then(PL$13/*promiseland exception catcher*/(function(PL$55){PL$55;;
    ;
    
    var PL$56 = new __Promise();if(PL$22/*droptemp*/){
      PL$25/*console*/["log"]("droping temp");
      PL$15/*con*/["query"](PL$45/*tempTable*/["drop"]()).then(PL$13/*promiseland exception catcher*/(function(PL$57){PL$57;
      PL$56.resolve();;}), PL$14/*catch rejected*/);
      ;
    }else{PL$56.resolve();
    };PL$56.then(PL$13/*promiseland exception catcher*/(function(PL$58){PL$58;;
    ;
    PL$25/*console*/["log"]("indexcomparison");
    PL$59/*indexNoCreate*/ = [
      
    ];
    
    var PL$60 = new __Promise();if((PL$18/*existing*/ && ! PL$21/*dif*/)){
      PL$61/*exindexes*/ = (PL$18/*existing*/["indexes"] || [
        
      ]);
      PL$47/*j*/;
      PL$47/*j*/ = 0;var PL$63 = new __Promise();
      var PL$62 = function(){var PL$64 = new __Promise();
      if((PL$47/*j*/ < PL$61/*exindexes*/["length"])){
      PL$65/*useIt*/ = false;
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$17/*indexes*/["length"]);++PL$28/*i*/){{
        if(PL$66/*indexfits*/(PL$61/*exindexes*/[PL$47/*j*/], PL$17/*indexes*/[PL$28/*i*/])){
          PL$59/*indexNoCreate*/["push"](PL$17/*indexes*/[PL$28/*i*/]);
          PL$65/*useIt*/ = true;
          break;;
        };
        ;}};
      ;
      
      var PL$67 = new __Promise();if((! PL$65/*useIt*/ && ! PL$61/*exindexes*/[PL$47/*j*/]["primaryKey"])){
        PL$25/*console*/["log"](("dropping index " + PL$61/*exindexes*/[PL$47/*j*/]["name"]));
        PL$25/*console*/["log"](PL$16/*table*/["indexes"]()["drop"](PL$61/*exindexes*/[PL$47/*j*/]["name"])["toQuery"]());
        PL$15/*con*/["query"](PL$16/*table*/["indexes"]()["drop"](PL$61/*exindexes*/[PL$47/*j*/]["name"])).then(PL$13/*promiseland exception catcher*/(function(PL$68){PL$68;
        PL$67.resolve();;}), PL$14/*catch rejected*/);
        ;
      }else{PL$67.resolve();
      };PL$67.then(PL$13/*promiseland exception catcher*/(function(PL$69){PL$69;;
      ;
      PL$64.resolve(true); return PL$64; /* continue */
      ;}), PL$14/*catch rejected*/);
      ;}else{
      PL$64.resolve(false); return PL$64; /* break */
      
      };
      PL$64;return PL$64;
      };
      var PL$70 = function(){PL$62().then(function(contLoop){
      if (contLoop){++PL$47/*j*/;PL$70();}else{PL$63.resolve();};
      });
      };
      PL$70();
      PL$63.then(function(){;
      ;
      PL$60.resolve();;});
    }else{PL$60.resolve();
    };PL$60.then(PL$13/*promiseland exception catcher*/(function(PL$71){PL$71;;
    ;
    PL$25/*console*/["log"]("index 2");
    PL$28/*i*/ = 0;var PL$73 = new __Promise();
    var PL$72 = function(){var PL$74 = new __Promise();
    if((PL$28/*i*/ < PL$17/*indexes*/["length"])){
    PL$75/*createIt*/ = true;
    PL$76/*idx*/ = PL$17/*indexes*/[PL$28/*i*/];
    for(PL$47/*j*/ = 0;(PL$47/*j*/ < PL$59/*indexNoCreate*/["length"]);++PL$47/*j*/){{
      if((PL$76/*idx*/ === PL$59/*indexNoCreate*/[PL$47/*j*/])){
        PL$75/*createIt*/ = false;
      };
      ;}};
    ;
    if(PL$76/*idx*/["primaryKey"]){
      PL$75/*createIt*/ = false;
    };
    ;
    
    var PL$77 = new __Promise();if(PL$75/*createIt*/){
      PL$78/*q*/ = PL$16/*table*/["indexes"]()["create"](PL$76/*idx*/["name"]);
      if(PL$76/*idx*/["unique"]){
        PL$78/*q*/ = PL$78/*q*/["unique"]();
      };
      ;
      PL$79/*indexCols*/ = [
        
      ];
      PL$80/*c*/ = 0;
      for(PL$80/*c*/ = 0;(PL$80/*c*/ < PL$76/*idx*/["columns"]["length"]);++PL$80/*c*/){{
        PL$79/*indexCols*/["push"](PL$16/*table*/[PL$76/*idx*/["columns"][PL$80/*c*/]]);}};
      ;
      PL$78/*q*/ = PL$78/*q*/["on"]["apply"](PL$78/*q*/, PL$79/*indexCols*/);
      PL$25/*console*/["log"]("creating index");
      PL$15/*con*/["query"](PL$78/*q*/).then(PL$13/*promiseland exception catcher*/(function(PL$81){PL$81;
      PL$77.resolve();;}), PL$14/*catch rejected*/);
      ;
    }else{PL$77.resolve();
    };PL$77.then(PL$13/*promiseland exception catcher*/(function(PL$82){PL$82;;
    ;
    PL$74.resolve(true); return PL$74; /* continue */
    ;}), PL$14/*catch rejected*/);
    ;}else{
    PL$74.resolve(false); return PL$74; /* break */
    
    };
    PL$74;return PL$74;
    };
    var PL$83 = function(){PL$72().then(function(contLoop){
    if (contLoop){++PL$28/*i*/;PL$83();}else{PL$73.resolve();};
    });
    };
    PL$83();
    PL$73.then(function(){;
    ;
    PL$11.resolve(); return;});}), PL$14/*catch rejected*/);
    ;}), PL$14/*catch rejected*/);
    ;}), PL$14/*catch rejected*/);
    ;}), PL$14/*catch rejected*/);
    ;}), PL$14/*catch rejected*/);
    ;}), PL$14/*catch rejected*/);
    ;
  })();return PL$11;
  });
  PL$84/*canConvert*/ = (function(PL$85/*parExisting*/, PL$86/*parNew*/){
  
    ;
    ;});
  PL$87/*typeSynonyms*/ = [
    [
      "int", 
      "integer"
    ], 
    [
      "character varying", 
      "varchar"
    ]
  ];
  PL$29/*sameType*/ = (function(PL$88/*type1*/, PL$89/*type2*/){
  
    ;
    var PL$90/*parse1*/ = PL$7/*parser*/["parse"](PL$88/*type1*/);
    ;
    var PL$91/*parse2*/ = PL$7/*parser*/["parse"](PL$89/*type2*/);
    ;
    var PL$92/*sameName*/;
    ;
    if((PL$90/*parse1*/["name"] == PL$91/*parse2*/["name"])){
      PL$92/*sameName*/ = true;
    };
    ;
    var PL$93/*t*/ = 0;
    ;
    for(PL$93/*t*/ = 0;(PL$93/*t*/ < PL$87/*typeSynonyms*/["length"]);++PL$93/*t*/){{
      var PL$94/*syns*/ = PL$87/*typeSynonyms*/[PL$93/*t*/];
      ;
      var PL$28/*i*/ = 0;
      ;
      var PL$95/*found1*/ = false;
      ;
      var PL$96/*found2*/ = false;
      ;
      for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$94/*syns*/["length"]);++PL$28/*i*/){{
        if((PL$90/*parse1*/["name"] == PL$94/*syns*/[PL$28/*i*/])){
          PL$95/*found1*/ = true;
        };
        ;
        if((PL$91/*parse2*/["name"] == PL$94/*syns*/[PL$28/*i*/])){
          PL$96/*found2*/ = true;
        };
        ;}};
      ;
      if((PL$95/*found1*/ && PL$96/*found2*/)){
        PL$92/*sameName*/ = true;
      };
      ;}};
    ;
    if(! PL$92/*sameName*/){
      return false;
    };
    ;
    if((PL$90/*parse1*/["length"] == PL$91/*parse2*/["length"])){
      return true;
    };
    ;
    return false;
    ;});
  PL$66/*indexfits*/ = (function(PL$97/*ex*/, PL$98/*ni*/){
  
    ;
    if((! ! PL$98/*ni*/["unique"] != ! ! PL$97/*ex*/["unique"])){
      return false;
    };
    ;
    if((! ! PL$98/*ni*/["primaryKey"] != ! ! PL$97/*ex*/["primaryKey"])){
      return false;
    };
    ;
    if(PL$98/*ni*/["name"]){
      if((PL$98/*ni*/["name"] != PL$97/*ex*/["name"])){
        return false;
      };
      ;
    };
    ;
    if((PL$98/*ni*/["columns"]["length"] != PL$97/*ex*/["columns"]["length"])){
      return false;
    };
    ;
    var PL$28/*i*/ = 0;
    ;
    for(PL$28/*i*/ = 0;(PL$28/*i*/ < PL$98/*ni*/["columns"]["length"]);++PL$28/*i*/){{
      if((PL$98/*ni*/["columns"][PL$28/*i*/] != PL$97/*ex*/["columns"][PL$28/*i*/])){
        return false;
      };
      ;}};
    ;
    return true;
    ;});
  PL$1.resolve(PL$9/*tableCreator*/); return;
  PL$1.resolve(); return;}), PL$4/*catch rejected*/);
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
