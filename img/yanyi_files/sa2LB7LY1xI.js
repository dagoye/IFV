if (self.CavalryLogger) { CavalryLogger.start_js(["1bTug"]); }

__d("NotificationEndpointState",["BusinessUserConf","KeyedCallbackManager","RangedCallbackManager","flatMapArray","objectValues","react-relay/classic/query/stableStringify"],(function(a,b,c,d,e,f){__p&&__p();var g={AdsUnifiedNavNotificationsPayloadPagelet:"AdsUnifiedNavNotificationsPayloadPagelet",BusinessManagerNotificationsPayloadPagelet:"BusinessManagerNotificationsPayloadPagelet",WebNotificationsPayloadPagelet:"WebNotificationsPayloadPagelet","/notifications/client/ads_unified_nav/":"AdsUnifiedNavNotificationsPayloadPagelet","/notifications/client/business_manager/":"BusinessManagerNotificationsPayloadPagelet","/ajax/notifications/client/get.php":b("BusinessUserConf").businessUserID?"BusinessManagerNotificationsPayloadPagelet":"WebNotificationsPayloadPagelet"};h.getInstance=function(a){"use strict";var b=a.classification!=null?a.classification:"_",c=a.readness!=null?a.readness:"_",d=a.environment!=null?a.environment:"_";b="(c)"+b+"(s)"+c+"(s)"+d;c=h.$1[a.endpointControllerName];c==null&&(h.$1[a.endpointControllerName]=c={});c[b]==null&&(c[b]=new h(a));return c[b]};h.getAllInstances=function(a){"use strict";a!=null?a=[a]:a=Object.keys(h.$1);return b("flatMapArray")(a,function(a){a=h.$1[a];if(a==null)return[];else return b("objectValues")(a)})};function h(a){__p&&__p();var c=a.businessUserID,d=a.classification,e=a.endpointControllerName,f=a.environment;a=a.readness;this.notifications=new(b("KeyedCallbackManager"))();this.businessUserID=c!=null?c:b("BusinessUserConf").businessUserID;this.classification=d;this.endpointControllerName=e;this.environment=f;this.readness=a;c=function(a){a=this.notifications.getResource(a);return a.creation_time};this.order=new(b("RangedCallbackManager"))(c.bind(this),function(a,b){return b-a});this.graphQLPageInfo=null}h.prototype.getConfig=function(){"use strict";return{businessUserID:this.businessUserID,classification:this.classification,endpointControllerName:this.endpointControllerName,environment:this.environment,readness:this.readness}};h.prototype.getHash=function(){"use strict";return b("react-relay/classic/query/stableStringify")(this.getConfig())};h.prototype.getRequestParams=function(a){"use strict";a=Math.max(0,a-this.order.getAllResources().length);return{businessUserID:this.businessUserID,classification:this.classification!=null?this.classification.toLowerCase():undefined,cursor:this.graphQLPageInfo&&this.graphQLPageInfo.end_cursor,environment:this.environment,filter:this.readness==null?undefined:this.readness==="SEEN_AND_READ"?"read":"unread",readness:this.readness,length:a}};h.prototype.getStreamingTransportPageletName=function(){"use strict";return g[this.endpointControllerName]||this.endpointControllerName};h.$1={};e.exports=h}),null);
__d("NotificationException.react",["ix","cx","fbt","invariant","Image.react","React","URI","XUIButton.react","asset"],(function(a,b,c,d,e,f,g,h,i,j){"use strict";__p&&__p();var k;c=babelHelpers.inherits(a,b("React").Component);k=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=k.constructor).call.apply(a,[this].concat(d)),this.state={stacktraceVisible:!1},this.$1=function(a){a.preventDefault(),this.setState(function(a){return babelHelpers["extends"]({},a,{stacktraceVisible:!a.stacktraceVisible})})}.bind(this),b}a.prototype.$2=function(){var a=this.props.notification.primerAttributes;return a==null?null:babelHelpers["extends"]({},a,{ajaxify:new(b("URI"))(a.ajaxify).getUnqualifiedURI()})};a.prototype.$3=function(){var a=this.props.notification.renderer_data;a&&a.__typename==="NotificationExceptionNotificationRendererData"||j(0,undefined);return a};a.prototype.render=function(){var a=this.$3();return b("React").createElement("li",{className:"_3r-5"},b("React").createElement("div",{className:"_3r-b"},b("React").createElement(b("Image.react"),{className:"_3r-c",src:this.props.notification.thumbnail.uri,width:this.props.isNotifsPage?32:48}),b("React").createElement("p",{className:"_3r-d"},i._("{exception type} rendering `{notification type}` notification: \u201c{exception message}\u201d",[i._param("exception type",b("React").createElement("strong",null,a.exception_type)),i._param("notification type",a.original_notification_type),i._param("exception message",b("React").createElement("em",null,a.exception_message))])),b("React").createElement("ul",{className:"_3r-g"},b("React").createElement("li",{className:"_3r-h"},b("React").createElement(b("XUIButton.react"),babelHelpers["extends"]({},this.$2(),{href:"#",image:b("React").createElement(b("Image.react"),{src:g("425336")}),label:i._("Report bug")}))),b("React").createElement("li",null,b("React").createElement("a",{href:"#",onClick:this.$1},this.state.stacktraceVisible?i._("Hide trace"):i._("Show trace"))))),this.state.stacktraceVisible&&b("React").createElement("pre",{className:"_3r-j"},a.exception_stacktrace))};e.exports=a}),null);
__d("PageNotifInlineLikeLink.react",["cx","fbt","AsyncRequest","Button.react","FanFBPageActionOrigin","Middot.react","PageFanning","PageFanningInviteInlineNotif.react","React","ReactDOM","XPagesPageInviteInlineActionAsyncController"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").PureComponent);i=c&&c.prototype;function a(){__p&&__p();var a,c;for(var d=arguments.length,e=new Array(d),f=0;f<d;f++)e[f]=arguments[f];return c=(a=i.constructor).call.apply(a,[this].concat(e)),this.state={liked:!1,rendered:!1,declined:!1,disabled:!1,showInlineLinks:null},this.$1=!0,this.$2=function(a){a.preventDefault(),this.state.liked||(this.setState({liked:!0,disabled:!0}),b("PageFanning").setFanStatus(b("ReactDOM").findDOMNode(this),this.props.pageID,!0,!1,this.$3,this.$4,{fan_origin:b("FanFBPageActionOrigin").PAGE_INVITE_NOTIF_INLINE_ACCEPT}))}.bind(this),this.$5=function(a){a.preventDefault(),this.state.liked||(this.setState({declined:!0,disabled:!0}),b("PageFanningInviteInlineNotif.react").setFanStatus(this.props.pageID,!1,this.$6,this.$7,{fan_origin:this.props.origin,fan_source:this.props.origin}))}.bind(this),this.$3=function(){this.setState({liked:!0})}.bind(this),this.$4=function(){this.setState({liked:!1})}.bind(this),this.$6=function(){this.setState({declined:!0})}.bind(this),this.$7=function(){this.setState({declined:!1})}.bind(this),c}a.prototype.componentWillUnmount=function(){this.$1=!1};a.prototype.$8=function(){var a=b("XPagesPageInviteInlineActionAsyncController").getURIBuilder().getURI();new(b("AsyncRequest"))().setURI(a).setMethod("POST").setData({page_id:this.props.pageID}).setHandler(function(a){this.$1&&this.setState({showInlineLinks:a.payload.show_inline_links,rendered:a.payload.see_inline_actions,liked:a.payload.invite_status==="LIKED",declined:a.payload.invite_status==="DECLINED",disabled:a.payload.invite_status==="LIKED"||a.payload.invite_status==="DECLINED"})}.bind(this)).setErrorHandler(function(a){this.setState({rendered:!1})}.bind(this)).send()};a.prototype.$9=function(){var a=this.state.liked?h._("You liked this Page"):h._("Like Page"),c=this.state.declined?h._("You declined"):h._("Decline");return b("React").createElement("div",{className:"_6t87"},b("React").createElement(b("Middot.react"),{className:this.state.showInlineLinks==="showlinkswhenhover"&&!this.props.showInlineCTAWhenHover?"_6t88":""}),b("React").createElement("span",{className:this.state.declined?"_6t88":""},b("React").createElement(b("Button.react"),{className:(this.state.disabled?"":"_6t89")+(this.state.disabled?" _6t8a":""),label:a,onClick:this.$2})),b("React").createElement(b("Middot.react"),{className:this.state.disabled?"_6t88":""}),b("React").createElement("span",{className:this.state.liked?"_6t88":""},b("React").createElement(b("Button.react"),{className:(this.state.disabled?"":"_6t89")+(this.state.disabled?" _6t8a":""),label:c,onClick:this.$5})))};a.prototype.render=function(){!this.state.liked&&!this.state.declined&&this.$8();if(!this.state.rendered)return null;if(this.state.showInlineLinks==="links")return this.$9();else return this.state.showInlineLinks==="linkshover"&&this.props.showInlineCTAWhenHover?this.$9():null};e.exports=a}),null);
__d("NotificationListItemFBOnlyBase.react",["NotificationException.react","NotificationListItemBase.react","React"],(function(a,b,c,d,e,f){"use strict";function g(a){return((a=a)!=null?(a=a.notification)!=null?(a=a.renderer_data)!=null?a.__typename:a:a:a)==="NotificationExceptionNotificationRendererData"}a=function(a){return g(a)?b("React").createElement(b("NotificationException.react"),a):b("React").createElement(b("NotificationListItemBase.react"),a)};e.exports=a}),null);
__d("ReactRouterXUISubNavigationItem.react",["ix","cx","fbt","Image.react","Link.react","PopoverMenu.react","React","ReactRouterDOM","fbglyph","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j,k=b("ReactRouterDOM").NavLink;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=b("React").Children.toArray(this.props.children),c=this.props,d=c.icon;c=c.menu;c&&(c=b("React").createElement(b("PopoverMenu.react"),{alignh:"left",alignv:"middle",autoflip:!0,className:"_2yax",dynamicoffsety:!0,hasarrow:!0,menu:c,position:"right"},b("React").createElement(b("Link.react"),{className:"_5n0n",role:"button"},b("React").createElement(b("Image.react"),{alt:i._("Open"),src:g("123797")}))));d&&(d=b("React").createElement(b("Image.react"),{className:"_2yaw",height:"16",src:d,width:"16"}));if(this.props.disabled)return b("React").createElement("div",{className:b("joinClasses")(this.props.className,"_2yaa")},b("React").createElement("span",{className:"_2yau _2528"},d,b("React").createElement("span",{className:"_2yav"},a[0]),this.props.accessory));d=b("React").createElement(k,{activeClassName:"_2yap","aria-current":"page",className:"_2yau",exact:!0,to:this.props.to,rel:this.props.rel},d,b("React").createElement("span",{className:"_2yav"},a[0]),this.props.accessory);var e="_2yaa"+(c?" _5n0o":"");return a.length===1?b("React").createElement("div",{className:b("joinClasses")(this.props.className,e)},d,c):b("React").createElement("div",{className:this.props.className},b("React").createElement("div",{className:e},d,c),a.length>1&&b("React").createElement("div",{className:"_3o_h"},a[a.length-1]))};function a(){"use strict";j.apply(this,arguments)}e.exports=a}),null);
__d("NotificationJewelFunnelLoggingConstants",[],(function(a,b,c,d,e,f){"use strict";e.exports={FUNNEL_LOGGING_NAME:"WWW_NOTIFICATION_FUNNEL",FUNNEL_LOGGING_EVENT:{FETCH_NOTIFICATIONS:"fetch_notifications",OPEN_JEWEL:"open_jewel",CLOSE_JEWEL:"close_jewel",MOUSE_OVER_ON_JEWEL:"mouse_over_on_jewel",SCROLL_TO_FETCH:"scroll_to_fetch",FETCH_NEXT_SET:"fetch_next_set",CLEAR_BADGE_COUNT:"clear_badge_count"}}}),null);
__d("cssPercent",[],(function(a,b,c,d,e,f){"use strict";function a(a){return(a*100).toFixed(3)+"%"}e.exports=a}),null);
__d("FbFeedKeyboardController",["csx","cx","fbt","Arbiter","AsyncRequest","CSS","DOM","DOMQuery","DOMScroll","Event","FbFeedHighlight","Focus","JSXDOM","KeyboardShortcuts","LikeConfirmer","NavigationMessage","Parent","ReactComposerEvents","ReactComposerIDGenerator","Run","Scroll","SubscriptionsHandler","UITinyViewportAction","Vector","ViewportBounds","emptyFunction","ge","getActiveElement","isAsyncScrollQuery","isElementNode","throttle","translateKey"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=45,k=0;function l(){k=b("UITinyViewportAction").isTiny()?0:b("ViewportBounds").getTop()}function m(a){if(!a)return null;if(a.previousElementSibling instanceof HTMLElement)return a.previousElementSibling;a=a.previousSibling;while(a&&!(a instanceof HTMLElement))a=a.previousSibling;return a||null}function n(a){if(a.nextElementSibling instanceof HTMLElement)return a.nextElementSibling;a=a.nextSibling;while(a&&!(a instanceof HTMLElement))a=a.nextSibling;return a||null}function o(a){"use strict";this.root=a,this.init()}o.prototype.getStories=function(a){"use strict";return b("DOMQuery").scry(a||this.root,"._5jmm")};o.prototype.isStory=function(a){"use strict";return b("CSS").matchesSelector(a,"._5jmm")};o.prototype.clickLike=function(){"use strict";__p&&__p();var a=this.$3();this.clickElement(a,"._3l2t",".UFILikeLink");if(a!==this.selected)return;a=this.getParentStory(b("getActiveElement")());if(a){a=[].concat(b("DOMQuery").scry(a,"._3l2t"),b("DOMQuery").scry(a,".UFILikeLink"));for(var c=0;c<a.length;c++)b("CSS").hasClass(a[c],"accessible_elem")||b("Focus").setWithoutOutline(a[c])}};o.prototype.clickComment=function(){"use strict";this.clickElement(this.$3(),"._666h","._2pgm",".comment_link")};o.prototype.clickShare=function(){"use strict";this.click("._2nj7",".share_action_link")};o.prototype.clickSeeMore=function(){"use strict";this.click(".see_more_link")};o.prototype.clickLeft=function(){"use strict";this.click("._1mri")};o.prototype.clickRight=function(){"use strict";this.click("._2fu-")};o.prototype.openAttachment=function(){"use strict";this.click("._5dec","a._52c6","._4-eo",".uiVideoThumb")};o.prototype.getHeadline=function(a){"use strict";return b("DOMQuery").scry(a,"h5._5pbw")[0]};o.prototype.$4=function(a){"use strict";var c=b("Parent").bySelector(a,"._5pcb"),d=b("ge")("pagelet_soft_permalink_posts");return!!(c||d&&b("DOM").contains(d,a))};o.prototype.getPreviousSibling=function(a){"use strict";__p&&__p();var c=m(a);if(c&&this.getParentStory(c))return c;c=null;if(this.$4(a)){var d=this.getStories(this.root);a=d.indexOf(a);while(a>-1){if(a===0)c=b("ge")("pagelet_composer"),c=c&&b("Parent").bySelector(c,"._5jmm");else if(a>0){c=d[a-1];if(c.offsetHeight>0)break}a--}}return c instanceof HTMLElement?c:this.selected};o.prototype.getPreviousStory=function(a){"use strict";a=this.getPreviousSibling(a);while(a&&!this.isStory(a))a=this.getPreviousSibling(a);return a};o.prototype.getParentStory=function(a){"use strict";a=b("Parent").bySelector(a,"._5jmm");return a instanceof HTMLElement?a:null};o.prototype.getNextSibling=function(a){"use strict";__p&&__p();var c=n(a);if(c&&this.getParentStory(c))return c;c=null;if(this.$4(a)){var d=this.getStories(this.root),e=d.indexOf(a);if(e>-1){c=d[++e];while(c&&c.offsetHeight===0)c=d[++e]}}else b("ge")("pagelet_composer",a)&&(c=b("DOMQuery").scry(document,"div._5pcb ._5jmm")[0]);return c||this.selected};o.prototype.getNextStory=function(a){"use strict";a=this.getNextSibling(a);while(a&&!this.isStory(a))a=this.getNextSibling(a);return a};o.prototype.setSelected=function(a,c){"use strict";if(a){var d="_5qdu",e=b("DOMQuery").scry(a,"._5qdu");!e.length&&c&&b("DOM").prependContent(a,b("JSXDOM").div({className:d}))}c&&(this.selected&&this.setTabindexOnStory(this.selected,"-1"),this.selected&&b("CSS").removeClass(this.selected,"_5qdv"),this.selected=a,a&&this.setTabindexOnStory(a,"0"),a&&b("CSS").addClass(a,"_5qdv"),a&&b("FbFeedHighlight").highlightSingle(a))};o.prototype.$3=function(){"use strict";var a=b("DOM").scry(this.selected,"._1qch");return a.length>0?b("DOM").scry(this.selected,"._3el7")[0]:this.selected};o.prototype.focusComposer=function(){"use strict";__p&&__p();var a=["pagelet_composer","pagelet_group_composer","pagelet_event_composer","PageComposerPagelet_","PageComposerPagelet_Admin_View","timeline_composer_container"],c=null;for(var d=0;d<a.length;d++){var e=a[d];c=b("ge")(e);if(c)break}if(c){e=b("DOM").scry(c,"textarea")[0];if(e)b("Focus").set(e),b("DOMScroll").scrollTo(c,!0);else{d=b("DOM").scry(c,"div._36bx")[0];a=d&&d.id;b("ReactComposerIDGenerator").isComposerID(a)&&(b("Arbiter").inform(b("ReactComposerEvents").ACTIVATE_ATTACHMENT+d.id),b("DOMScroll").scrollTo(c,!0))}}};o.prototype.getScrollOffset=function(){"use strict";return 10+(this.scrollOffset||0)};o.prototype.getAnimationLength=function(a){"use strict";return Math.min(Math.abs(b("Vector").getElementPosition(a).y-b("ViewportBounds").getTop()-b("Scroll").getTop(document.body)),400)};o.prototype.findTop=function(){"use strict";var a=this.getStories();for(var c=0;c<a.length;c++)if(b("Vector").getElementPosition(a[c]).y>b("Vector").getScrollPosition().y)return a[c];return null};o.prototype.onLeave=function(){"use strict";this.subscriptions&&this.subscriptions.release()};o.prototype.init=function(){"use strict";__p&&__p();b("Run").onLeave(this.onLeave.bind(this)),this.subscriptions=new(b("SubscriptionsHandler"))(),this.subscriptions.addSubscriptions(b("Arbiter").subscribe(b("NavigationMessage").NAVIGATION_BEGIN,this.onLeave.bind(this)),b("KeyboardShortcuts").register("j",this.vert.bind(this,1),{shortcutInfo:{displayKeys:[b("translateKey")("j")],description:i._("Scroll to the next News Feed post")}}),b("KeyboardShortcuts").register("k",this.vert.bind(this,-1),{shortcutInfo:{displayKeys:[b("translateKey")("k")],description:i._("Scroll to the previous News Feed post")}}),b("KeyboardShortcuts").register("p",this.focusComposer.bind(this),{shortcutInfo:{displayKeys:[b("translateKey")("p")],description:i._("Make a new post")}}),b("KeyboardShortcuts").register("l",function(){var a=this.getParentStory(b("getActiveElement")());b("LikeConfirmer").like(function(){this.setSelected(a,!1),this.clickLike()}.bind(this),b("getActiveElement")())}.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("l")],description:i._("Like or unlike the selected post")}}),b("KeyboardShortcuts").register("c",this.clickComment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("c")],description:i._("Comment on the selected post")}}),b("KeyboardShortcuts").register("s",this.clickShare.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("s")],description:i._("Share the selected post")}}),b("KeyboardShortcuts").register("o",this.openAttachment.bind(this),{filter:this.hasActiveStory.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("o")],description:i._("Open attachment of the selected post")}}),b("KeyboardShortcuts").register("RETURN",this.clickSeeMore.bind(this),{filter:this.hasExpandableStoryInFocus.bind(this),shortcutInfo:{displayKeys:[b("translateKey")("enter")],description:i._("See more of the selected post")}}),b("KeyboardShortcuts").register("LEFT",this.clickLeft.bind(this),{filter:this.hasActiveStory.bind(this)}),b("KeyboardShortcuts").register("RIGHT",this.clickRight.bind(this),{filter:this.hasActiveStory.bind(this)}),b("Event").listen(this.root,"focusin",function(event){var a=event.getTarget();if(!this.isStory(a)){var c=b("DOM").isNodeOfType(a,["object","embed","iframe"]);a=this.getParentStory(a);var d=this.selected;a&&!c&&d&&(this.setSelected(a,!0),this.selected=a)}}.bind(this)))};o.prototype.hasActiveStory=function(event,a){"use strict";a=b("getActiveElement")();return!(a&&b("CSS").shown(a))||!!this.getParentStory(a)};o.prototype.hasExpandableStoryInFocus=function(event,a){"use strict";a=b("getActiveElement")();return!!(a&&a.getElementsByClassName("text_exposed_root").length&&!a.getElementsByClassName("text_exposed_root text_exposed").length)};o.prototype.clickElement=function(a){"use strict";__p&&__p();if(!a)return;var c;for(var d=0,e=arguments.length<=1?0:arguments.length-1;d<e;d++){c=b("DOM").scry(a,d+1<1||arguments.length<=d+1?undefined:arguments[d+1])[0];if(c&&b("CSS").shown(c)){c.click();return}}};o.prototype.click=function(){"use strict";for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];this.clickElement.apply(this,[this.selected].concat(b))};o.prototype.$5=function(){"use strict";if(!this.$1){this.scrollOffset=0;var a=b("ge")("pagelet_feed_switcher_root");a&&(this.scrollOffset+=a.getBoundingClientRect().height);this.subscriptions.addSubscriptions(b("Event").listen(document,"scroll",function(){this.selected&&!this.scrolling&&this.setSelected(null,!1)}.bind(this)));this.$1=!0}};o.prototype.$6=function(){"use strict";this.$2||(l(),this.subscriptions.addSubscriptions(b("Event").listen(window,"resize",b("throttle")(l))),this.$2=!0)};o.prototype.vert=function(a){"use strict";__p&&__p();this.$5();var c;if(this.selected){this.selected.id=="pagelet_composer"?c=a>0?this.getStories()[0]:null:a===0?c=this.selected:c=a>0?this.getNextStory(this.selected):this.getPreviousStory(this.selected)||b("ge")("pagelet_composer");if(!c)return;else if(!b("isElementNode")(c)||b("CSS").hasClass(c,"hidden_elem")){this.selected&&b("CSS").removeClass(this.selected,"selectedStorySimple");this.selected=c;this.vert(a);return}}(!c||b("Parent").byClass(c,"hidden_elem")||!b("DOM").contains(document,c))&&(c=this.findTop(),c&&a<0&&(c=this.getPreviousStory(c)));if(!c)return;this.anim&&this.anim();var d=Date.now()-(this.lastScroll||0)>30,e=b("emptyFunction");a!==0&&(e=this.setFocused.bind(this,c));b("isAsyncScrollQuery")()&&(d=!1,e(),e=b("emptyFunction"));this.scrolling=!0;this.scrollingTimer&&clearTimeout(this.scrollingTimer);this.$6();var f=b("Vector").getViewportDimensions().y-k-this.getScrollOffset();if(this.selected){var g=b("DOM").scry(this.selected,"._2pum")[0],h=b("DOM").scry(c,"._2pum")[0];g&&a>0&&(this.isExplore=!0);h&&(this.isExplore=!1)}this.root.id==="pagelet_explore_feed"&&(this.isExplore=!0);this.isExplore&&(f-=j);this.anim=b("DOMScroll").scrollTo(c,d?this.getAnimationLength(c):0,!1,f,0,function(){this.scrollingTimer=setTimeout(function(){this.scrolling=!1}.bind(this),300);var a=b("Vector").getScrollPosition();e();a.distanceTo(b("Vector").getScrollPosition())!==0&&b("DOMScroll").scrollTo(a,0)}.bind(this));this.setSelected(c,!0);this.lastScroll=Date.now()};o.prototype.setTabindexOnStory=function(a,b){"use strict";a&&this.isStory(a)&&(a.tabIndex=parseInt(b,10))};o.prototype.setFocused=function(a){"use strict";a&&this.isStory(a)&&b("Focus").setWithoutOutline(a)};o.init=function(a){"use strict";return new o(a)};e.exports=o}),null);
__d("XUISubNavigation.react",["ix","cx","fbt","Image.react","React","ReactDOM","XUISubNavigation","fbglyph"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=b("React").Children.toArray(this.props.children),c=this.props,d=c.maxVisible,e=c.selected;e&&(a=a.map(function(a){a.props.itemKey===e&&(a=b("React").cloneElement(a,{selected:!0}));return a}));c=null;if(d&&a.length>d){var f=b("React").createElement("a",{className:"_1fsj",href:"#",key:"overflowLink",ref:"overflowLink"},b("React").createElement(b("Image.react"),{className:"_s6o",src:g("125305")}),i._("See more"));c=b("React").createElement("div",{className:"_1fsh"},a.slice(d),f);a=a.slice(0,d)}return b("React").createElement("div",{className:"_2fvv"},a,c)};a.prototype.componentDidMount=function(){"use strict";var a=b("ReactDOM").findDOMNode(this);if(a instanceof HTMLElement){var c=b("ReactDOM").findDOMNode(this.refs.overflowLink);this.$1=new(b("XUISubNavigation"))(a,c instanceof HTMLElement?c:null)}};a.prototype.componentWillUnmount=function(){"use strict";this.$1.destroy()};function a(){"use strict";j.apply(this,arguments)}e.exports=a}),null);
__d("XUISubNavigationItem.react",["ix","cx","fbt","Image.react","Link.react","PopoverMenu.react","React","XUISpinner.react","fbglyph","joinClasses"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j;j=babelHelpers.inherits(a,b("React").Component);j&&j.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=b("React").Children.toArray(this.props.children),c=this.props,d=c.endpoint,e=c.icon;c=c.menu;c&&(c=b("React").createElement(b("PopoverMenu.react"),{alignh:"left",alignv:"middle",autoflip:!0,className:"_2yax",dynamicoffsety:!0,hasarrow:!0,menu:c,position:"right"},b("React").createElement(b("Link.react"),{className:"_5n0n",role:"button"},b("React").createElement(b("Image.react"),{alt:i._("Open"),src:g("123797")}))));e!=null&&(e=b("React").isValidElement(e)?b("React").createElement(b("React").Fragment,null,e):b("React").createElement(b("Image.react"),{className:"_2yaw",height:"16",src:e,width:"16"}));var f=null;d&&(f=b("React").createElement(b("XUISpinner.react"),{className:"_2wwb"}));var h="false";this.props.selected&&(h="page");var j=this.props.className;if(this.props.disabled)return b("React").createElement("div",{className:b("joinClasses")(j,"_2yaa")},b("React").createElement("span",{className:"_2yau _2528"},e,b("React").createElement("span",{className:"_2yav"},a[0]),this.props.accessory));d=b("React").createElement("a",{className:"_2yau","data-endpoint":d,href:this.props.href,rel:this.props.rel,"aria-current":h,onClick:this.props.onClick},e,b("React").createElement("span",{className:"_2yav"},a[0]),f,this.props.accessory);h="_2yaa"+(c?" _5n0o":"");if(a.length===1){this.props.selected&&(j=b("joinClasses")(j,"_2yap"));return b("React").createElement("div",{className:b("joinClasses")(j,h)},d,c)}return b("React").createElement("div",{className:j},b("React").createElement("div",{className:h},d,c),b("React").createElement("div",{className:"_3o_h"},a[a.length-1]))};function a(){"use strict";j.apply(this,arguments)}e.exports=a}),null);
__d("WorkAdminTitleText.react",["cx","React","joinClasses"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){var c=a.children,d=a.weight,e=a.size,f=a.display;f=f===void 0?"block":f;var g=a.headingLevel;a=a.className;d=b("joinClasses")("_6qsm"+(d==="light"?" _13si":"")+(d==="medium"?" _13s8":"")+(e===24?" _4t5l":"")+(e===32?" _4t5m":""),a);e=g?{role:"heading","aria-level":""+g}:null;return f==="block"?b("React").createElement("div",babelHelpers["extends"]({},e,{className:d}),c):b("React").createElement("span",babelHelpers["extends"]({},e,{className:d}),c)}e.exports=a}),null);
__d("WorkAccountUploadErrors",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MISSING_EMAIL:"Missing Email",INVALID_EMAIL:"Invalid Email",INVALID_USERNAME_ALREADY_USED:"Username already used",INVALID_USERNAME_ALREADY_USED_OTHER_COMPANY:"Username already used in other company",INVALID_USERNAME_ALREADY_USED_OTHER_COMMUNITY:"Username already used in another community",INVALID_USERNAME_ALREADY_USED_OTHER_COMMUNITY_SIGNUP:"Username already used in another community signup",INVALID_USERNAME_BIZ_EMAIL_SIGNUP:"Business email signup",INVALID_USERNAME_BIZ_EMAIL:"Business email",INVALID_USERNAME_ALREADY_USED_LEGACY_SIGNUP:"Username already used in an instance without subcommunities enabled signup",INVALID_USERNAME_ALREADY_USED_LEGACY:"Username already used in an instance without subcommunities enabled",INVALID_UNAVAILABLE_EMAIL:"Unavailable Email",INVALID_DUPLICATE_EMAIL:"Duplicate Email",INVALID_DOMAIN_CONFLICT:"Domain Conflict",INVALID_EMAIL_DOMAIN:"Invalid Email Domain",INVITING_SELF:"Inviting Self",REMINDER_SENT:"Reminder Sent",MISSING_NAME:"Missing Name",INVALID_NAME:"Invalid Name",MISSING_JOB_TITLE:"Missing Job Title",MISSING_LOCALE:"Missing Locale",INVALID_LOCALE:"Invalid Locale",MISSING_LOCATION:"Missing Location",MISSING_DEPARTMENT:"Missing Department",MISSING_DIVISION:"Missing Division",MISSING_ORGANIZATION:"Missing Organization",MISSING_MANAGER_EMAIL:"Missing Manager Email",INVALID_MANAGER_EMAIL:"Invalid Manager Email",INVALID_MANAGER_IS_SELF:"Invalid Manager Is Self",INVALID_MANAGER_IS_NOT_COWORKER:"Invalid Manager Not Coworker",INVALID_MANAGER_EMPLOYEE_ID:"Invalid Manager Employee ID",MISSING_PHONE_NUMBER:"Missing Phone Number",INVALID_PHONE_NUMBER:"Invalid Phone Number",USERNAME_NOT_FOUND_IN_COMPANY:"username_not_found_in_company",USER_ALREADY_INACTIVE:"user_already_inactive",INVALID_LAUNCHED:"Invalid Launched Value",INVALID_DUPLICATE_IDENTIFIER:"Duplicate Identifier",MISSING_IDENTIFIER:"Missing Identifier",MISSING_EXTERNAL_ID:"Missing Employee ID",INVALID_EXTERNAL_ID_ALREADY_EXISTS:"Employee ID already used",INVALID_DUPLICATE_EXTERNAL_ID:"Duplicate Employee ID",INVALID_LOGIN_METHOD:"invalid_login_method",INVALID_START_DATE:"Invalid Start Date",INVALID_START_DATE_FORMAT:"Invalid Start Date Format",MISSING_START_DATE:"Missing Start Date"})}),null);