if (self.CavalryLogger) { CavalryLogger.start_js(["Ckveu"]); }

__d("AdsDataAtomPerformanceUtil",["URI","UserTimingUtils","performanceNow","requestAnimationFrameAcrossTransitions","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=new(b("URI"))(window.location.href).getQueryData().dispatchereventtimer,h=new(b("URI"))(window.location.href).getQueryData().logdispatchtimes,i={},j={};function a(a){if(a==null)return;a=a.type;g&&console.time&&console.time(a);h&&(j[a]=b("performanceNow")())}function c(a){__p&&__p();if(a==null)return;var c=a.type;g&&console.timeEnd&&console.timeEnd(c);if(h){var d=j[c];delete j[c];i[c]||(i[c]={count:0,totalFluxTime:0,totalTime:0});i[c].count+=1;i[c].totalFluxTime+=b("performanceNow")()-d;l(c,function(){i[c].totalTime+=b("performanceNow")()-d})}}var k={};function l(a,c){if(k[a])return;k[a]=1;b("requestAnimationFrameAcrossTransitions")(function(){b("setTimeoutAcrossTransitions")(function(){delete k[a],c()})})}function d(){i={}}function f(){return i}function m(){console.table(Object.keys(i).map(function(a){return babelHelpers["extends"]({action:a},i[a])}))}e.exports={startPerformanceMeasurements:a,endPerformanceMeasurements:c,resetTiming:d,getTiming:f,outputTimingTable:m}}),null);