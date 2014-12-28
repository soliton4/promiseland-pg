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

if (promiseland._hasModule({ hashStr: "c53d5bc6e4c3589c3da442b33806e35f" })){ return promiseland._getModule("c53d5bc6e4c3589c3da442b33806e35f"); };
var PL$1 = (function(){
"use strict";
var PL$2/*Storage*/;

  ;
  PL$2/*Storage*/ = (function(){var PL$3/*inherited*/ = {};
var res = promiseland.createClass({"constructor": (function(PL$4/*par*/){
  
    ;
    this["con"] = PL$4/*par*/["connection"];
    this["options"] = PL$4/*par*/;
    ;})}, [], PL$3/*inherited*/);
return res; })();
  return PL$2/*Storage*/;
  ;})();
;return PL$1;
});
})();