(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f95f4a5"],{"089e":function(e,t,a){"use strict";var c=a("7a23");const i=["id"],n=["src","alt"],s=["alt"],o=["innerHTML"];function l(e,t,a,l,r,d){const b=Object(c["C"])("transition-collapse");return Object(c["J"])((Object(c["w"])(),Object(c["h"])("div",{class:"blog-card entrance-animation",id:a.blogId},[Object(c["i"])("div",{class:"blog-card_image cursor-pointer",onClick:t[0]||(t[0]=t=>e.$emit("blogCardClicked"))},[a.imageUrl?(Object(c["w"])(),Object(c["h"])("img",{key:0,class:"base-image base-image--square",src:a.imageUrl,alt:a.blogId+"-image"},null,8,n)):(Object(c["w"])(),Object(c["h"])("img",{key:1,class:"base-image base-image--square",src:"img/placeholder.svg",alt:a.blogId+"-image"},null,8,s))]),Object(c["i"])("div",{class:"blog-card_content cursor-pointer",onClick:t[1]||(t[1]=t=>e.$emit("blogCardClicked"))},[Object(c["i"])("div",{class:Object(c["r"])(["blog-card_date",{"blog-card_date--placeholder":d.hasNoBlogData}])},Object(c["E"])(a.date),3),Object(c["i"])("div",{class:Object(c["r"])(["blog-card_title ja",{"blog-card_title--placeholder":d.hasNoBlogData}])},Object(c["E"])(a.title),3),Object(c["i"])("div",{class:Object(c["r"])(["blog-card_text ja",{"blog-card_text--placeholder":d.hasNoBlogData}])},Object(c["E"])(a.description),3)]),Object(c["k"])(b,null,{default:Object(c["I"])(()=>[e.activeBlogs.includes(a.blogId)?(Object(c["w"])(),Object(c["h"])("div",{key:0,class:"blog-card_extended ja",style:{"grid-column":"1/3"},innerHTML:a.content},null,8,o)):Object(c["g"])("",!0)]),_:1})],8,i)),[[c["G"],e.loadingScreenFinished]])}var r=a("1503"),d=a("c71e"),b=a("5502");function g(e,t,a,i,n,s){return Object(c["w"])(),Object(c["f"])(c["c"],{"enter-active-class":"enter-active","leave-active-class":"leave-active",onBeforeEnter:s.beforeEnter,onEnter:s.enter,onAfterEnter:s.afterEnter,onBeforeLeave:s.beforeLeave,onLeave:s.leave,onAfterLeave:s.afterLeave},{default:Object(c["I"])(()=>[Object(c["B"])(e.$slots,"default",{},void 0,!0)]),_:3},8,["onBeforeEnter","onEnter","onAfterEnter","onBeforeLeave","onLeave","onAfterLeave"])}var j={name:"transition-collapse",methods:{beforeEnter(e){requestAnimationFrame(()=>{e.style.height||(e.style.height="0px"),e.style.display=null})},enter(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height=e.scrollHeight+"px"})})},afterEnter(e){e.style.height=null},beforeLeave(e){requestAnimationFrame(()=>{e.style.height||(e.style.height=e.offsetHeight+"px")})},leave(e){requestAnimationFrame(()=>{requestAnimationFrame(()=>{e.style.height="0px"})})},afterLeave(e){e.style.height=null}}};a("adc9");j.render=g,j.__scopeId="data-v-2dfd4551";var O=j,u={name:"blog-card",components:{TransitionCollapse:O,SquareImage:d["a"],BaseImage:r["a"]},emits:["blogCardClicked"],props:{date:String,description:String,content:String,imageUrl:String,source:String,title:String,blogId:String,isLastItem:Boolean},computed:{...Object(b["d"])({blogData:e=>e.blogData,activeBlogs:e=>e.activeBlogs,loadingScreenFinished:e=>e.loadingScreenFinished}),hasNoBlogData(){return this.blogData.length<=1}}};a("e512");u.render=l;t["a"]=u},1276:function(e,t,a){},1746:function(e,t,a){},3195:function(e,t,a){"use strict";var c=a("7a23");const i={key:0,class:"schedule-card"},n={class:"schedule-card_left"},s={class:"schedule-card_date"},o={class:"schedule-card_weekday"},l={class:"schedule-card_month-year"},r={class:"schedule-card_right"},d={class:"schedule-card_type"},b={class:"schedule-card_content"};function g(e,t,a,g,j,O){const u=Object(c["C"])("observer");return Object(c["w"])(),Object(c["h"])(c["a"],null,[Object(c["k"])(u,{once:!0,onIntersect:t[0]||(t[0]=e=>j.showCard=!0)}),Object(c["k"])(c["c"],{name:"work-card-animation"},{default:Object(c["I"])(()=>[j.showCard?(Object(c["w"])(),Object(c["h"])("div",i,[Object(c["i"])("div",n,[Object(c["i"])("div",s,Object(c["E"])(j.day),1),Object(c["i"])("div",o,Object(c["E"])(j.weekday),1),Object(c["i"])("div",l,Object(c["E"])(j.month)+"."+Object(c["E"])(j.year),1)]),Object(c["i"])("div",r,[Object(c["i"])("div",d,Object(c["E"])(j.type),1),Object(c["i"])("div",b,Object(c["E"])(j.content),1)])])):Object(c["g"])("",!0)]),_:1})],64)}var j=a("387b"),O={name:"schedule-card",components:{Observer:j["a"]},props:{scheduleData:Object},inheritAttrs:!1,data(){return{day:"",month:"",year:"",weekday:"",content:"",type:"",showCard:!1}},created(){this.day=this.scheduleData.day,this.month=this.scheduleData.month,this.year=this.scheduleData.year,this.weekday=this.scheduleData.weekday,this.type=this.scheduleData.type,this.content=this.scheduleData.content}};O.render=g;t["a"]=O},6511:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const i={class:"home"},n={class:"gallery-image-container"};function s(e,t,a,s,o,l){const r=Object(c["C"])("main-header"),d=Object(c["C"])("schedule-card"),b=Object(c["C"])("more-button-link"),g=Object(c["C"])("base-section"),j=Object(c["C"])("profile-card"),O=Object(c["C"])("observer"),u=Object(c["C"])("base-image"),m=Object(c["C"])("blog-card"),h=Object(c["C"])("router-link");return Object(c["w"])(),Object(c["h"])("div",i,[Object(c["k"])(r),e.getRecentSchedule.length?(Object(c["w"])(),Object(c["f"])(g,{key:0,title:"SCHEDULE","additional-classes":"headline--bottom-border headline--left"},{content:Object(c["I"])(()=>[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(e.getRecentSchedule,e=>(Object(c["w"])(),Object(c["f"])(d,{type:e.type,"schedule-data":e,date:`${e.day}.${e.month}.${e.year}`,content:e.content},null,8,["type","schedule-data","date","content"]))),256)),e.getRecentSchedule.length>5?(Object(c["w"])(),Object(c["f"])(b,{key:0,route:"/schedule"})):Object(c["g"])("",!0)]),_:1})):Object(c["g"])("",!0),Object(c["k"])(g,{title:"PROFILE","additional-classes":"headline--bottom-border headline--left"},{content:Object(c["I"])(()=>[Object(c["k"])(j,{"full-content":!1})]),_:1}),Object(c["k"])(O,{onIntersect:t[0]||(t[0]=e=>o.displayGallery=!0)}),Object(c["k"])(g,{title:"GALLERY","additional-classes":"headline--bottom-border headline--left"},{content:Object(c["I"])(()=>[Object(c["J"])(Object(c["i"])("div",n,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(e.getShuffledImageFilesLocation.slice(0,9),(e,t)=>(Object(c["w"])(),Object(c["f"])(u,{"image-location":e.location,style:Object(c["s"])({animationDelay:100*t+"ms"})},null,8,["image-location","style"]))),256))],512),[[c["G"],e.loadingScreenFinished&&o.displayGallery]]),Object(c["k"])(b,{route:"/gallery"})]),_:1}),Object(c["k"])(O,{onIntersect:l.triggerBlogAction,once:!0},null,8,["onIntersect"]),Object(c["k"])(g,{title:"BLOG","additional-classes":"headline--bottom-border headline--left"},{content:Object(c["I"])(()=>[Object(c["k"])(c["c"],{name:"work-card-animation"},{default:Object(c["I"])(()=>[o.displayBlogs?(Object(c["w"])(),Object(c["f"])(h,{key:0,to:"/blog"},{default:Object(c["I"])(()=>[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(l.getLimitedAmount,(e,t)=>(Object(c["w"])(),Object(c["f"])(m,{style:Object(c["s"])({animationDelay:50*t+"ms"}),title:e.title,"is-last-item":t===l.getLimitedAmount.length-1,date:e.date,description:e.description,"image-url":e.thumbnail},null,8,["style","title","is-last-item","date","description","image-url"]))),256))]),_:1})):Object(c["g"])("",!0)]),_:1}),Object(c["k"])(b,{route:"/blog"})]),_:1})])}var o=a("7a6c"),l=a("dd16"),r=a("3195"),d=a("b3b1"),b=a("330a"),g=a("fadc"),j=a("d3bd"),O=a("c71e"),u=a("089e"),m=a("5502");const h={class:"more-button"},v=Object(c["j"])("view more");function p(e,t,a,i,n,s){const o=Object(c["C"])("router-link");return Object(c["w"])(),Object(c["h"])("div",h,[Object(c["k"])(o,{class:"more-button_text",to:a.route},{default:Object(c["I"])(()=>[v]),_:1},8,["to"])])}var f={name:"more-button-link",props:{route:String}};f.render=p;var y=f,k=a("d692"),w=a("387b"),I=a("1503"),S={name:"Home",components:{BaseImage:I["a"],Observer:w["a"],MainHeader:k["a"],MoreButtonLink:y,BlogCard:u["a"],SquareImage:O["a"],LongImage:j["a"],InstagramImage:g["a"],ProfileCard:b["a"],Profile:d["default"],ScheduleCard:r["a"],BaseSection:l["a"],MainNav:o["a"]},data(){return{displayGallery:!1,displayBlogs:!1}},computed:{...Object(m["d"])({blogData:e=>e.blogData,loadingScreenFinished:e=>e.loadingScreenFinished}),...Object(m["c"])(["getShuffledImageFilesLocation","getRecentSchedule"]),getLimitedAmount(){return this.blogData.slice(0,5)}},methods:{...Object(m["b"])(["accessSpreadSheet"]),triggerBlogAction(){this.accessSpreadSheet(),this.displayBlogs=!0}}};S.render=s;t["default"]=S},"9a11":function(e,t,a){},adc9:function(e,t,a){"use strict";a("1276")},d3bd:function(e,t,a){"use strict";var c=a("7a23");function i(e,t,a,i,n,s){const o=Object(c["C"])("base-image");return Object(c["w"])(),Object(c["f"])(o,{class:"base-image--long","image-location":a.imageLocation},null,8,["image-location"])}var n=a("1503"),s={name:"long-image",components:{BaseImage:n["a"]},props:{imageLocation:String}};s.render=i;t["a"]=s},d6ff:function(e,t,a){"use strict";a("9a11")},e512:function(e,t,a){"use strict";a("1746")},fadc:function(e,t,a){"use strict";var c=a("7a23");const i={key:0,class:"instagram-image-container"},n=["alt","id","src"],s=["id"],o=Object(c["i"])("div",{class:"play-button"},"▶",-1),l={class:"instagram-video-container"},r={class:"instagram-video",preload:"metadata"},d=["src"],b={class:"instagram-modal"},g=["alt","id","src"],j=["id"],O={class:"instagram-video",autoplay:"",muted:"",loop:""},u=["src"],m={class:"instagram-modal_text"},h={class:"ja"};function v(e,t,a,v,p,f){const y=Object(c["C"])("base-modal");return Object(c["w"])(),Object(c["h"])(c["a"],null,["image"===a.type?(Object(c["w"])(),Object(c["h"])("div",i,[Object(c["i"])("img",Object(c["p"])({onClick:t[0]||(t[0]=t=>e.setActiveInstagramPost(a.id)),alt:a.title,loading:"lazy",id:a.id},e.$attrs,{class:"base-image base-image--square cursor-pointer entrance-animation",src:a.source}),null,16,n)])):(Object(c["w"])(),Object(c["h"])("div",Object(c["p"])({key:1,class:"video-container cursor-pointer entrance-animation",id:a.id},e.$attrs,{onClick:t[1]||(t[1]=t=>e.setActiveInstagramPost(a.id))}),[o,Object(c["i"])("div",l,[Object(c["i"])("video",r,[Object(c["i"])("source",{src:a.source+"#t=0.001",type:"video/mp4"},null,8,d)])])],16,s)),Object(c["k"])(y,{"show-modal":a.id===e.activeInstagramPost,onCloseModal:t[2]||(t[2]=t=>e.setActiveInstagramPost(""))},{content:Object(c["I"])(()=>[Object(c["i"])("div",b,["image"===a.type?(Object(c["w"])(),Object(c["h"])("img",{key:0,class:"instagram-image",alt:a.title,loading:"lazy",id:a.id,src:a.source},null,8,g)):(Object(c["w"])(),Object(c["h"])("div",{key:1,id:a.id,class:"instagram-video-container"},[Object(c["i"])("video",O,[Object(c["i"])("source",{src:a.source,type:"video/mp4"},null,8,u)])],8,j)),Object(c["i"])("div",m,[(Object(c["w"])(!0),Object(c["h"])(c["a"],null,Object(c["A"])(a.description,e=>(Object(c["w"])(),Object(c["h"])("p",h,Object(c["E"])(e),1))),256))])])]),_:1},8,["show-modal"])],64)}var p=a("1503"),f=a("d491"),y=a("5502"),k={name:"instagram-image",components:{BaseModal:f["a"],BaseImage:p["a"]},props:{title:String,id:String,description:Array,date:Date,source:String,imageLink:String,type:String},created(){},computed:{...Object(y["d"])({activeInstagramPost:e=>e.activeInstagramPost})},methods:{...Object(y["b"])(["setActiveInstagramPost"])}};a("d6ff");k.render=v;t["a"]=k}}]);
//# sourceMappingURL=chunk-5f95f4a5.5c7ad2f3.js.map