!function(e,t){for(var r in t)e[r]=t[r]}(exports,function(e){var t={};function r(n){if(t[n])return t[n].exports;var u=t[n]={i:n,l:!1,exports:{}};return e[n].call(u.exports,u,u.exports,r),u.l=!0,u.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r.w={},r(r.s=6)}([function(e,t){e.exports=require("babel-runtime/core-js/json/stringify")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n,u=r(0),o=(n=u)&&n.__esModule?n:{default:n};function s(e,t){return{statusCode:e,headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Credentials":!0},body:(0,o.default)(t)}}t.success=function(e){return s(200,e)},t.failure=function(e){return s(500,e)}},function(e,t){e.exports=require("aws-sdk")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.call=function(e,t){return(new o.default.DynamoDB.DocumentClient)[e](t).promise()};var n,u=r(2),o=(n=u)&&n.__esModule?n:{default:n};o.default.config.update({region:"us-east-1"})},function(e,t){e.exports=require("babel-runtime/helpers/asyncToGenerator")},function(e,t){e.exports=require("babel-runtime/regenerator")},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.main=void 0;var n,u=a(r(5)),o=a(r(4)),s=(t.main=(n=(0,o.default)(u.default.mark(function e(t,r,n){var o,a;return u.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return o={TableName:"notes",KeyConditionExpression:"userId = :userId",ExpressionAttributeValues:{":userId":t.requestContext.identity.cognitoIdentityId}},e.prev=1,e.next=4,s.call("query",o);case 4:a=e.sent,n(null,(0,i.success)(a.Items)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),n(null,(0,i.failure)({status:!1}));case 12:case"end":return e.stop()}},e,this,[[1,8]])})),function(e,t,r){return n.apply(this,arguments)}),function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}(r(3))),i=r(1);function a(e){return e&&e.__esModule?e:{default:e}}}]));