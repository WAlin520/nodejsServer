webpackJsonp([5],{BGpX:function(t,e){},Whlx:function(t,e){},efwC:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n("Xxa5"),a=n.n(s),o=(n("34+y"),n("X+yh")),i=n.n(o),m=n("exGp"),r=n.n(m),c=(n("SZh7"),{name:"goodsComment",data:function(){return{show:!1,pageIndex:1,commentList:[],more_show:!0,newcomment:"",id:this.$route.params.id}},props:["parentId"],created:function(){this.getNewsInfo()},methods:{getNewsInfo:function(){var t=this;return r()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$http.get("api/getcomments/"+t.id+"?pageindex="+t.pageIndex);case 2:n=e.sent,0===(s=n.data).status?t.commentList=t.commentList.concat(s.message):i()("加载评论失败！");case 5:case"end":return e.stop()}},e,t)}))()},getmoreInfo:function(){var t=this;this.pageIndex++,this.more_show=!1,this.getNewsInfo(),setInterval(function(){t.more_show=!0},1e3)},postComment:function(){var t=this;return r()(a.a.mark(function e(){var n,s;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(0!==t.newcomment.trim().length){e.next=5;break}return i()("评论内容不能为空"),e.abrupt("return");case 5:return e.next=7,t.$http.post("api/postcomment/"+t.id,{content:t.newcomment.trim()});case 7:n=e.sent,0===n.res.status?(i()("发表评论成功"),s={user_name:"匿名用户",add_time:Date.now(),content:t.newcomment},t.commentList.unshift(s),t.show=!1,t.newcomment=""):i()("发表评论失败");case 10:case"end":return e.stop()}},e,t)}))()}}}),u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("评论区")]),t._v(" "),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.newcomment,expression:"newcomment"}],attrs:{placeholder:"请输入要BB的内容（最多吐槽120字）",maxlength:"120"},domProps:{value:t.newcomment},on:{input:function(e){e.target.composing||(t.newcomment=e.target.value)}}}),t._v(" "),n("mt-button",{attrs:{type:"primary",size:"large"},on:{click:t.postComment}},[t._v("发表评论")]),t._v(" "),n("hr"),t._v(" "),n("div",{staticClass:"comment-container"},[t._l(t.commentList,function(e,s){return n("div",{key:e.add_time,staticClass:"commentList"},[n("div",{staticClass:"commentList-left"},[n("span",{staticClass:"mui-icon mui-icon-contact mui-icon-icon-contact-filled"}),t._v(" "),n("span",{staticClass:"commentList-floor"},[t._v(t._s(s+1)+"楼")])]),t._v(" "),n("div",{staticClass:"commentList-commentBox"},[n("p",[n("span",{staticClass:"commentList-username"},[t._v(t._s(e.user_name))]),t._v(" "),n("span",{staticClass:"commentList-time"},[t._v(t._s(t._f("dateFormat")(e.add_time)))])]),t._v(" "),n("p",{staticClass:"commentList-contentBox"},[t._v(t._s(e.content))])])])}),t._v(" "),n("transition",{attrs:{mode:"out-in"}},[t.more_show?n("button",{key:"more",staticClass:"mui-btn mui-btn-outlined mui-btn-primary",staticStyle:{width:"100%"},attrs:{type:"button"},on:{click:t.getmoreInfo}},[t._v("\n        加载更多\n        ")]):n("button",{staticClass:"mui-btn mui-btn-outlined mui-btn-primary mui-disabled",staticStyle:{width:"100%"},attrs:{type:"button",disabled:""}},[n("span",{key:"loading",staticClass:"mui-spinner"}),t._v(" "),n("span",[t._v("Loading...")])])])],2)],1)},staticRenderFns:[]};var d={name:"goodsComment",components:{comment:n("VU/8")(c,u,!1,function(t){n("Whlx")},"data-v-0ad84c69",null).exports}},p={render:function(){var t=this.$createElement;return(this._self._c||t)("comment",{attrs:{parentId:this.$route.params.id}})},staticRenderFns:[]};var l=n("VU/8")(d,p,!1,function(t){n("BGpX")},"data-v-23ed12c5",null);e.default=l.exports}});
//# sourceMappingURL=5.e126ffbed3fb183642c4.js.map