webpackJsonp([13],{RmEf:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=e("Xxa5"),a=e.n(s),r=(e("34+y"),e("X+yh")),i=e.n(r),o=e("exGp"),c=e.n(o),f=e("SZh7"),u=(e("YaEn"),{name:"newsInfo",data:function(){return{id:this.$route.params.id,newsInfo:[]}},created:function(){this.getNewsInfo()},methods:{getNewsInfo:function(){var n=this;return c()(a.a.mark(function t(){var e,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$http.get("api/getnew/"+n.id);case 2:e=t.sent,0===(s=e.data).status?n.newsInfo=s.message[0]:i()("新闻资讯加载失败。。。");case 5:case"end":return t.stop()}},t,n)}))()}},components:{comment:f.a}}),d={render:function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"newsinfo-containners"},[e("h3",{staticClass:"title"},[n._v(n._s(n.newsInfo.title))]),n._v(" "),e("p",{staticClass:"subtitle"},[e("span",[n._v("发表时间："+n._s(n._f("dateFormat")(n.newsInfo.add_time)))]),n._v(" "),e("span",[n._v("点击"+n._s(n.newsInfo.click)+"次")])]),n._v(" "),e("hr"),n._v(" "),e("div",{staticClass:"content",domProps:{innerHTML:n._s(n.newsInfo.content)}}),n._v(" "),e("comment",{attrs:{parentId:this.id}})],1)},staticRenderFns:[]};var _=e("VU/8")(u,d,!1,function(n){e("yKmW")},null,null);t.default=_.exports},yKmW:function(n,t){}});
//# sourceMappingURL=13.06f88599fce2c3fb7d27.js.map