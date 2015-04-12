(function(){var __modFun = function(__require, promiseland){ __modFun = undefined;

var __Promise = promiseland.Promise;
var Promise = promiseland.Promise;
if (promiseland._hasModule({ hashStr: "d7296371d6d4d6476c3b620769fe024b" })){ return promiseland._getModule("d7296371d6d4d6476c3b620769fe024b"); };
var PL$6/*RegExp*/;try{PL$6/*RegExp*/ = RegExp;}catch(e){};
var PL$1 = (function(){
"use strict";

  ;
  var PL$2/*quote*/ = (function(PL$3/*word*/, PL$4/*quoteCharacter*/){
  
    ;
    var PL$5/*q*/;
    ;
    if(PL$4/*quoteCharacter*/){
      PL$5/*q*/ = PL$4/*quoteCharacter*/;
    }else{
    PL$5/*q*/ = "\"";
    };
    return ((PL$5/*q*/ + PL$3/*word*/["replace"](new PL$6/*RegExp*/(PL$5/*q*/, "g"), (PL$5/*q*/ + PL$5/*q*/))) + PL$5/*q*/);
    ;});
  ;
  var PL$7/*Storage*/ = (function(){var PL$8/*inherited*/ = {};
  var res = promiseland.createClass({
    "constructor": (function(PL$9/*par*/){
    
      ;
      this["con"] = PL$9/*par*/["connection"];
      this["options"] = (PL$9/*par*/ || {
        
      });
      ;}),
    "registerClass": (function(PL$9/*par*/){
    var PL$10 = new __Promise();
    var PL$12/*promiseland exception catcher*/ = function(code){
      return function(res){
        try{ code(res); }catch(e){
          PL$10.reject(e);
        };
      };
    };
    var PL$13/*catch rejected*/ = function(e){
      PL$10.reject(e);
    };
    var PL$14/*sql*/;
    var PL$16/*con*/;
    var PL$17/*tableNameStr*/;
    var PL$18/*schemaNameStr*/;
    var PL$19/*columns*/;
    var PL$20/*propertiesAr*/;
    var PL$21/*i*/;
    var PL$22/*prop*/;
    var PL$23/*col*/;
    var PL$24/*table*/;
    var PL$25/*tabCreated*/;
    var PL$26/*getTable*/;
    var PL$33/*selectStar*/;
    var PL$15/*this*/ = this;
    PL$12/*promiseland exception catcher*/(function(){
    
      ;
      PL$14/*sql*/ = PL$15/*this*/["con"]["sql"];
      PL$16/*con*/ = PL$15/*this*/["con"];
      PL$17/*tableNameStr*/ = PL$9/*par*/["className"];
      PL$18/*schemaNameStr*/ = (PL$9/*par*/["moduleName"] || ("pland_" + PL$9/*par*/["moduleHash"]));
      PL$19/*columns*/ = [
        
      ];
      PL$19/*columns*/["push"]({
        "name": "id",
        "dataType": "varchar",
        "primaryKey": true
      });
      PL$20/*propertiesAr*/ = PL$9/*par*/["propertiesAr"];
      PL$21/*i*/ = 0;
      for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$20/*propertiesAr*/["length"]);++PL$21/*i*/){{
        PL$22/*prop*/ = PL$20/*propertiesAr*/[PL$21/*i*/];
        if((PL$22/*prop*/["name"] == "id")){
          continue;;
        };
        ;
        PL$23/*col*/ = {
          "name": PL$22/*prop*/["name"],
          "dataType": "varchar"
        };
        if((PL$22/*prop*/["meta"] && PL$22/*prop*/["meta"]["type"])){
          PL$23/*col*/["dataType"] = PL$22/*prop*/["meta"]["type"];
        };
        ;
        PL$19/*columns*/["push"](PL$23/*col*/);}};
      ;
      PL$24/*table*/ = PL$14/*sql*/["define"]({
        "name": PL$17/*tableNameStr*/,
        "schema": PL$18/*schemaNameStr*/,
        "columns": PL$19/*columns*/
      });
      PL$25/*tabCreated*/ = false;
      PL$26/*getTable*/ = (function(){
      var PL$27 = new __Promise();
      var PL$29/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$27.reject(e);
          };
        };
      };
      var PL$30/*catch rejected*/ = function(e){
        PL$27.reject(e);
      };
      PL$29/*promiseland exception catcher*/(function(){
      
        ;
        if(PL$25/*tabCreated*/){
          PL$27.resolve(PL$24/*table*/); return;
        };
        ;
        PL$16/*con*/["query"]((("CREATE SCHEMA IF NOT EXISTS " + PL$2/*quote*/(PL$18/*schemaNameStr*/)) + ";")).then(PL$29/*promiseland exception catcher*/(function(PL$31){PL$31;
        PL$16/*con*/["createTable"]({
          "table": PL$24/*table*/
        }).then(PL$29/*promiseland exception catcher*/(function(PL$32){PL$32;
        PL$25/*tabCreated*/ = true;
        PL$27.resolve(PL$24/*table*/); return;
        PL$27.resolve(); return;}), PL$30/*catch rejected*/);
        ;}), PL$30/*catch rejected*/);
        ;
      })();return PL$27;
      });
      PL$33/*selectStar*/ = (function(PL$34/*parId*/){
      var PL$35 = new __Promise();
      var PL$37/*promiseland exception catcher*/ = function(code){
        return function(res){
          try{ code(res); }catch(e){
            PL$35.reject(e);
          };
        };
      };
      var PL$38/*catch rejected*/ = function(e){
        PL$35.reject(e);
      };
      var PL$24/*table*/;
      var PL$40/*res*/;
      PL$37/*promiseland exception catcher*/(function(){
      
        ;
        PL$26/*getTable*/().then(PL$37/*promiseland exception catcher*/(function(PL$39){PL$24/*table*/ = PL$39;
        PL$16/*con*/["query"](PL$24/*table*/["select"](PL$24/*table*/["star"]())["from"](PL$24/*table*/)["where"](PL$24/*table*/["id"]["equals"](PL$34/*parId*/))["toQuery"]()).then(PL$37/*promiseland exception catcher*/(function(PL$41){PL$40/*res*/ = PL$41;
        if((PL$40/*res*/ && PL$40/*res*/["rows"])){
          PL$35.resolve(PL$40/*res*/["rows"][0]); return;
        };
        ;
        PL$35.resolve(undefined); return;
        PL$35.resolve(); return;}), PL$38/*catch rejected*/);
        ;}), PL$38/*catch rejected*/);
        ;
      })();return PL$35;
      });
      PL$10.resolve({
        "save": (function(PL$9/*par*/){
        var PL$42 = new __Promise();
        var PL$44/*promiseland exception catcher*/ = function(code){
          return function(res){
            try{ code(res); }catch(e){
              PL$42.reject(e);
            };
          };
        };
        var PL$45/*catch rejected*/ = function(e){
          PL$42.reject(e);
        };
        var PL$24/*table*/;
        var PL$47/*starRes*/;
        var PL$21/*i*/;
        var PL$49/*o*/;
        PL$44/*promiseland exception catcher*/(function(){
        
          ;
          PL$26/*getTable*/().then(PL$44/*promiseland exception catcher*/(function(PL$46){PL$24/*table*/ = PL$46;
          PL$33/*selectStar*/(PL$9/*par*/["properties"]["id"]["value"]).then(PL$44/*promiseland exception catcher*/(function(PL$48){PL$47/*starRes*/ = PL$48;
          PL$21/*i*/ = 0;
          PL$49/*o*/ = {
            
          };
          for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$9/*par*/["propertiesAr"]["length"]);++PL$21/*i*/){{
            PL$49/*o*/[PL$9/*par*/["propertiesAr"][PL$21/*i*/]["name"]] = PL$9/*par*/["propertiesAr"][PL$21/*i*/]["value"];}};
          ;
          
          var PL$50 = new __Promise();if(PL$47/*starRes*/){
            for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$9/*par*/["propertiesAr"]["length"]);++PL$21/*i*/){{
              if((PL$9/*par*/["propertiesAr"][PL$21/*i*/]["name"] == "id")){
                continue;;
              };
              ;
              PL$49/*o*/[PL$9/*par*/["propertiesAr"][PL$21/*i*/]["name"]] = PL$9/*par*/["propertiesAr"][PL$21/*i*/]["value"];}};
            ;
            PL$16/*con*/["query"](PL$24/*table*/["update"](PL$49/*o*/)["where"](PL$24/*table*/["id"]["equals"](PL$9/*par*/["properties"]["id"]["value"]))).then(PL$44/*promiseland exception catcher*/(function(PL$51){PL$51;
            PL$50.resolve();;}), PL$45/*catch rejected*/);
            ;
          }else{
          for(PL$21/*i*/ = 0;(PL$21/*i*/ < PL$9/*par*/["propertiesAr"]["length"]);++PL$21/*i*/){{
            PL$49/*o*/[PL$9/*par*/["propertiesAr"][PL$21/*i*/]["name"]] = PL$9/*par*/["propertiesAr"][PL$21/*i*/]["value"];}};
          ;
          PL$16/*con*/["query"](PL$24/*table*/["insert"](PL$49/*o*/)).then(PL$44/*promiseland exception catcher*/(function(PL$52){PL$52;
          PL$50.resolve();;}), PL$45/*catch rejected*/);
          ;
          };PL$50.then(PL$44/*promiseland exception catcher*/(function(PL$53){PL$53;;
          ;
          PL$42.resolve(); return;}), PL$45/*catch rejected*/);
          ;}), PL$45/*catch rejected*/);
          ;}), PL$45/*catch rejected*/);
          ;
        })();return PL$42;
        }),
        "load": (function(PL$9/*par*/){
        var PL$54 = new __Promise();
        var PL$56/*promiseland exception catcher*/ = function(code){
          return function(res){
            try{ code(res); }catch(e){
              PL$54.reject(e);
            };
          };
        };
        var PL$57/*catch rejected*/ = function(e){
          PL$54.reject(e);
        };
        PL$56/*promiseland exception catcher*/(function(){
        
          ;
          PL$33/*selectStar*/(PL$9/*par*/["properties"]["id"]["value"]).then(PL$56/*promiseland exception catcher*/(function(PL$58){PL$54.resolve(PL$58); return;
          PL$54.resolve(); return;}), PL$57/*catch rejected*/);
          ;
        })();return PL$54;
        }),
        "delete": (function(PL$9/*par*/){
        var PL$59 = new __Promise();
        var PL$61/*promiseland exception catcher*/ = function(code){
          return function(res){
            try{ code(res); }catch(e){
              PL$59.reject(e);
            };
          };
        };
        var PL$62/*catch rejected*/ = function(e){
          PL$59.reject(e);
        };
        var PL$24/*table*/;
        PL$61/*promiseland exception catcher*/(function(){
        
          ;
          PL$26/*getTable*/().then(PL$61/*promiseland exception catcher*/(function(PL$63){PL$24/*table*/ = PL$63;
          PL$16/*con*/["query"](PL$24/*table*/["delete"]()["where"](PL$24/*table*/["id"]["equals"](PL$9/*par*/["properties"]["id"]["value"]))).then(PL$61/*promiseland exception catcher*/(function(PL$64){PL$64;
          PL$59.resolve(); return;}), PL$62/*catch rejected*/);
          ;}), PL$62/*catch rejected*/);
          ;
        })();return PL$59;
        })
      }); return;
      PL$10.resolve(); return;
    })();return PL$10;
    })
  }, [], PL$8/*inherited*/);
  return res; })();
  ;
  return PL$7/*Storage*/;
  ;})();
;return PL$1;
};
  
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
