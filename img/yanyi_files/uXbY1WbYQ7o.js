if (self.CavalryLogger) { CavalryLogger.start_js(["KiJbY"]); }

__d("AdsDataAtomInstrumentation",[],(function(a,b,c,d,e,f){"use strict";var g=[];a={addInstrumentation:function(a){g.push(a)},onActionStart:function(a,b){g.forEach(function(c){return c.actionStart(a,b)})},onActionEnd:function(a,b){g.forEach(function(c){return c.actionEnd(a,b)})}};e.exports=a}),null);