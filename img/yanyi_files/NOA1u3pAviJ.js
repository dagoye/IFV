if (self.CavalryLogger) { CavalryLogger.start_js(["vq\/0F"]); }

__d("MercuryJewelCountControl",["Arbiter","CurrentUser","MercuryDispatcher","MercuryThreadInformer","MessengerState.bs","UserActivity"],(function(a,b,c,d,e,f){__p&&__p();function a(a){"use strict";__p&&__p();var c=b("MercuryDispatcher").get(),d=b("MercuryThreadInformer").get();this.render();c.subscribe("model-update-completed",function(a,b){this.$2(!1)}.bind(this));d.subscribe("unseen-updated",function(){return this.render()}.bind(this));d.subscribe("unread-updated",function(){return this.render()}.bind(this));this.$1=a;this.$1.subscribe("marked-seen",function(){this.$2(!0)}.bind(this))}a.prototype.render=function(){"use strict";var a=b("MessengerState.bs").getUnseenUnreadCount(b("CurrentUser").getID());b("Arbiter").inform("jewel/count-updated",{jewel:"mercurymessages",count:a},"state")};a.prototype.$2=function(a){"use strict";(a||this.$1.isOpen()&&b("UserActivity").isActive())&&b("MessengerState.bs").markAsSeen(b("CurrentUser").getID())};e.exports=a}),null);