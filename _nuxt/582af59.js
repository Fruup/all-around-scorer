(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5],{218:function(t,e,o){var content=o(222);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("5104c818",content,!0,{sourceMap:!1})},221:function(t,e,o){"use strict";var n=o(218);o.n(n).a},222:function(t,e,o){(e=o(58)(!1)).push([t.i,'.post-link{text-decoration:none}.post-card{text-align:left;border:1px solid transparent;width:100%;margin:1rem 0;padding:1rem 1.5rem;box-shadow:1px 2px 2px 2px rgba(0,0,0,.2);border-radius:6px}.post-card .post-meta{margin-bottom:.8rem;display:flex;justify-content:space-between}@media screen and (max-width:470px){.post-card .post-meta{flex-direction:column}}.post-card .post-date,.post-card .post-title{align-self:flex-end}@media screen and (max-width:470px){.post-card .post-date,.post-card .post-title{align-self:flex-start}}.post-card .post-date{color:grey;margin-bottom:.2rem}.post-card .post-title{font-family:"Oswald";font-size:1.5rem;text-decoration:underline;-webkit-text-decoration-color:#5959ff;text-decoration-color:#5959ff}@media screen and (max-width:470px){.post-card .post-title{margin-bottom:.5rem}}.post-card .post-excerpt{text-align:left;color:#383838;font-size:1rem}.post-card:hover{border-color:grey}',""]),t.exports=e},223:function(t,e,o){var content=o(239);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("bcb473de",content,!0,{sourceMap:!1})},234:function(t,e,o){"use strict";o.r(e);var n={props:["post"]},r=(o(221),o(30)),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("nuxt-link",{staticClass:"post-link",attrs:{to:t.post.slug}},[o("div",{staticClass:"post-card"},[o("div",{staticClass:"post-meta"},[o("span",{staticClass:"post-title"},[t._v(t._s(t.post.title))]),t._v(" "),o("span",{staticClass:"post-date"},[t._v(t._s(t.post.date))])]),t._v(" "),o("span",{staticClass:"post-excerpt"},[t._v(t._s(t.post.excerpt))])])])}),[],!1,null,null,null);e.default=component.exports},238:function(t,e,o){"use strict";var n=o(223);o.n(n).a},239:function(t,e,o){(e=o(58)(!1)).push([t.i,'.container{margin:0 auto;min-height:100vh;text-align:center}.container a{color:#000;-webkit-text-decoration-color:#5959ff;text-decoration-color:#5959ff}.container a:hover{color:#5959ff}.content{margin:auto;width:768px;padding:0 1rem 3rem}@media screen and (max-width:768px){.content{width:100vw}}.content ul{list-style-type:none;padding:0}.title{margin:auto;font-family:"Open Sans";display:block;font-weight:300;font-size:100px;color:#272727;letter-spacing:1px}',""]),t.exports=e},254:function(t,e,o){"use strict";o.r(e);o(31);var n=o(6),r={components:{PostCard:o(234).default},head:function(){return{title:"All Around Scorer"}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var o,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$content,e.next=3,o({deep:!0}).only(["title","slug","date","excerpt"]).fetch();case 3:return n=e.sent,e.abrupt("return",{posts:n});case 5:case"end":return e.stop()}}),e)})))()}},c=(o(238),o(30)),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("header",{staticClass:"title"},[this._v("All Around Scorer")]),this._v(" "),e("main",{staticClass:"content"},[e("ul",{staticClass:"posts"},this._l(this.posts,(function(t){return e("li",{key:t.index},[e("PostCard",{attrs:{post:t}})],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{PostCard:o(234).default})}}]);