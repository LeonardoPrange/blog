(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{CvFZ:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Wbzz"),r=function(){return Object(a.useStaticQuery)("868887449").settingsJson.tags}},JTHd:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("Wbzz"),r=function(){return Object(a.useStaticQuery)("2928712368").settingsJson.authors}},Jmu9:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return o}));var a=n("JTHd"),r=function(e){var t=e.authorIDs,n=Object(a.a)().filter((function(e){return t.find((function(t){return t===e.id}))}));return n.map((function(e,t){return n.length===t+1?e.name:e.name+", "}))},o={label:"Authors",fields:[{label:"Authors",name:"rawJson.authors",component:"group-list",itemProps:function(e){return{key:e.id,label:e.name}},defaultItem:function(){return{name:"New Author",id:Math.random().toString(36).substr(2,9),email:"",link:""}},fields:[{label:"Name",name:"name",component:"text",parse:function(e){return e||""}},{label:"Email",name:"email",component:"text",parse:function(e){return e||""}},{label:"Link",name:"link",component:"text",parse:function(e){return e||""}}]}]}},"d+8V":function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c}));var a=n("q1tI"),r=n.n(a),o=n("Wbzz"),l=n("CvFZ"),i=function(e){var t=e.tagIDs,n=Object(l.a)().filter((function(e){return t.find((function(t){return t===e.id}))}));return n.map((function(e,t){var a=u(e.text);return n.length===t+1?r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Link,{to:"/posts/tag/"+a},e.text)):r.a.createElement(r.a.Fragment,null,r.a.createElement(o.Link,{to:"/posts/tag/"+a},e.text),", ")}))},u=function(e){return e.toLowerCase().replace(" ","-")},c={label:"Tags",fields:[{label:"Tags",name:"rawJson.tags",component:"group-list",itemProps:function(e){return{key:e.id,label:e.text}},defaultItem:function(){return{name:"New Tag",id:Math.random().toString(36).substr(2,9),text:""}},fields:[{label:"Text",name:"text",component:"text",parse:function(e){return e||""}}]}]}},oF8j:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d})),n.d(t,"ListNav",(function(){return f}));var a=n("q1tI"),r=n.n(a),o=n("vOnD"),l=n("7heW"),i=n("S8eP"),u=n("Jmu9"),c=n("d+8V"),m=n("Wbzz"),s=n("0qiq");function d(e){var t=e.data,n=e.pageContext,a=Object(l.useLocalJsonForm)(t.page,p)[0],o=(Object(l.useLocalJsonForm)(t.tags,c.b)[0],n.slug),d=n.numPages,g=n.currentPage,b=n.tagText,h=1===g,x=g===d,E=g-1==1?o:o+"/"+(g-1).toString(),k=o+"/"+(g+1).toString();return a.title=b+" - "+g,r.a.createElement(s.a,{page:a},r.a.createElement(r.a.Fragment,null,t.posts&&t.posts.edges.map((function(e){return r.a.createElement(i.k,{article:!0,key:e.node.id},e.node.frontmatter.draft&&r.a.createElement(i.b,null,"Draft"),r.a.createElement("h2",null,r.a.createElement(m.Link,{to:e.node.frontmatter.path},e.node.frontmatter.title)),r.a.createElement("p",null,e.node.excerpt),r.a.createElement(i.g,null,r.a.createElement(i.i,null,e.node.frontmatter.date),e.node.frontmatter.authors&&r.a.createElement(i.i,null,r.a.createElement("em",null,"By")," ",r.a.createElement(u.b,{authorIDs:e.node.frontmatter.authors})),r.a.createElement(i.h,null,r.a.createElement(m.Link,{to:e.node.frontmatter.path},"Read Article →"))))})),r.a.createElement(f,null,!h&&r.a.createElement(m.Link,{to:E,rel:"prev"},"← Newer"),!x&&r.a.createElement(m.Link,{to:k,rel:"next"},"Older →"))))}var f=o.default.div.withConfig({displayName:"tagList__ListNav",componentId:"sc-qjteu-0"})(["display:flex;width:100%;justify-content:center;a{display:inline-block;padding:0.5rem 1rem;}"]),p={label:"Page",fields:[{label:"Title",name:"rawJson.title",component:"text"},{label:"Hero",name:"rawJson.hero",component:"group",fields:[{label:"Headline",name:"headline",component:"text"},{label:"Textline",name:"textline",component:"text"},{label:"Image",name:"image",component:"image",parse:function(e){return"../images/"+e},uploadDir:function(){return"/content/images/"},previewSrc:function(e){return e.jsonNode.hero&&e.jsonNode.hero.image?e.jsonNode.hero.image.childImageSharp.fluid.src:""}},{label:"Actions",name:"ctas",component:"group-list",itemProps:function(e){return{key:e.link,label:e.label}},fields:[{label:"Label",name:"label",component:"text"},{label:"Link",name:"link",component:"text"},{label:"Primary",name:"primary",component:"toggle"},{label:"Arrow",name:"arrow",component:"toggle"}]},{label:"Large",name:"large",component:"toggle"}]}]}}}]);
//# sourceMappingURL=component---src-templates-tag-list-js-1be71342d9310de4bd6e.js.map