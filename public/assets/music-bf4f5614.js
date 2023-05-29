import{_ as T,r as U,o as a,c as p,a as _,w as S,p as A,b as O,d as l,u as F,e as E,f as v,g as z,h as o,F as P,t as b,i as Y,n as V,j as Z,k as D,l as ee,m as R,q as te,s as N,v as J,K as se,x as le,y as ne}from"./index-f97316e7.js";import{I as w}from"./icon-1273f975.js";const oe={},B=u=>(A("data-v-ceed5319"),u=u(),O(),u),ie={class:"music-btn"},re=B(()=>l("span",null,"正在播放",-1)),ce=B(()=>l("span",null,"推荐",-1)),ae=B(()=>l("span",null,"搜索",-1)),ue=B(()=>l("span",null,"我的歌单",-1)),de=B(()=>l("span",null,"我听过的",-1));function _e(u,d){const e=U("router-link");return a(),p("div",ie,[_(e,{to:"/music/playlist"},{default:S(()=>[re]),_:1}),_(e,{to:"/music/toplist"},{default:S(()=>[ce]),_:1}),_(e,{to:"/music/search"},{default:S(()=>[ae]),_:1}),_(e,{to:"/music/userlist"},{default:S(()=>[ue]),_:1}),_(e,{to:"/music/historylist"},{default:S(()=>[de]),_:1})])}const pe=T(oe,[["render",_e],["__scopeId","data-v-ceed5319"]]),ve=""+new URL("player_cover-75234800.png",import.meta.url).href;const me={class:"music-info"},fe=["src"],ye={key:1,src:ve,alt:""},he={key:1},ge={class:"lyric-items"},xe={key:0},$e={key:1},ke={key:3},Ie={__name:"lyric",setup(u){const d=F();let e=E(()=>d.lyricIndex),s=E(()=>d.currentMusic),c=E(()=>d.lyric),n=E(()=>d.nolyric),i=v(null);z(()=>{if(h.value)return;let m,r=d.lyricIndex;m=Array.from(document.querySelectorAll(".lyric-item")).slice(0,r).reduce((f,k)=>f+k.clientHeight,0),i.value.scrollTo({top:m,behavior:"smooth"})},{flush:"post"});function I(m){d.audioEle.currentTime=m.time}let h=v(!1),x;function C(){h.value=!0,clearTimeout(x),x=setTimeout(()=>{h.value=!1},2e3)}let $=v("");z(()=>{$.value=`${d.currentMusic.image}?300y300`});function M(m){$.value="../../assets/image/imgError.png"}return(m,r)=>(a(),p(P,null,[l("dl",me,[l("dt",null,[o(s).id?(a(),p("img",{key:0,src:o($),onErrorOnce:M},null,40,fe)):(a(),p("img",ye))]),o(s).id?(a(),p(P,{key:0},[l("dd",null,"歌曲名："+b(o(s).name),1),l("dd",null,"歌手名："+b(o(s).singer),1),l("dd",null,"专辑名："+b(o(s).album),1)],64)):(a(),p("dd",he,"Player在线音乐播放器"))]),l("div",{class:"lyric",ref_key:"lyricREF",ref:i,onScroll:C},[l("div",ge,[o(s).id?o(n)?(a(),p("p",$e,"暂无歌词")):o(c).length>0?(a(!0),p(P,{key:2},Y(o(c),(g,f)=>(a(),p("span",{key:f,class:V(["lyric-item",{active:o(e)===f}])},[Z(b(g.text)+" ",1),_(w,{type:"play",size:15,title:"从当前开始",onClick:k=>I(g)},null,8,["onClick"])],2))),128)):(a(),p("p",ke,"歌词加载失败！")):(a(),p("p",xe,"还未选择音乐哦！"))])],544)],64))}},be=T(Ie,[["__scopeId","data-v-f4948770"]]);const we={__name:"progress",props:{percent:{type:Number,default:0}},emits:["changePercent"],setup(u,{emit:d}){const e=u,s=F(),c=v(null),n=v(null),i=v(null);z(()=>{let r=e.percent;n.value.style.width=c.value.clientWidth*r+"px",i.value.style.left=c.value.clientWidth*r+"px"},{flush:"post"}),D(()=>{I()});function I(){document.addEventListener("mousemove",$),document.addEventListener("mouseup",M)}function h(r){if(!s.currentMusic.id)return;let g=c.value.getBoundingClientRect(),f=Math.min(Math.max(r.clientX-g.left,0),g.width);n.value.style.width=f+"px",i.value.style.left=f+"px"}let x=v(!1);function C(r){h(r),s.isMove=!0,x.value=!0}function $(r){x.value&&h(r)}function M(r){x.value&&(x.value=!1,s.isMove=!1,m())}function m(){const r=n.value.clientWidth/c.value.clientWidth;d("changePercent",r.toFixed(3))}return(r,g)=>(a(),p("div",{class:"progress",onMousedown:C},[l("div",{class:"progress-bar",ref_key:"progress_bar",ref:c},null,512),l("div",{class:"progress-current",ref_key:"progress_current",ref:n},null,512),l("div",{class:"progress-dot",ref_key:"progress_dot",ref:i},null,512)],32))}},W=T(we,[["__scopeId","data-v-5047f323"]]);const K=u=>(A("data-v-6428bdb8"),u=u(),O(),u),Ee={class:"bar-btns"},Se={class:"progress-bar"},Ce={class:"music-info"},Me=K(()=>l("span",null,"您似乎还没有选择音乐哦！",-1)),Le=K(()=>l("span",null,"00:00/00:00",-1)),Pe={class:"volume"},Te={class:"volume-progress"},Be={__name:"bar",setup(u){const d=ee(),e=F();let s=E(()=>e.currentMusic),c=E(()=>e.audioEle),n=v("order"),i=v("切换为：单曲循环");function I(){let t="";switch(n.value){case"order":n.value="loop",t="单曲循环",i.value="切换为：随机播放";break;case"loop":n.value="shuffle",t="随机播放",i.value="切换为：顺序播放";break;case"shuffle":n.value="order",t="顺序播放",i.value="切换为：单曲循环";break}window.$tip(`已更改为：${t}`)}function h(t){if(!s.value.id){window.$tip("需要先选择歌曲哦！");return}c.value.currentTime=Math.floor(s.value.duration*t),r.value=c.value.currentTime}function x(){if(!s.value.id){window.$tip("需要先选择歌曲哦！");return}e.getPlayList.length===1||e.currentIndex-1===0?e.setCurrentIndex(e.getPlayList.length-1):(e.setCurrentIndex(e.currentIndex-1),e.audioEle.src=e.currentMusic.url,e.audioEle.play())}function C(){if(!s.value.id){window.$tip("需要先选择歌曲哦！");return}e.playing?e.audioEle.pause():e.audioEle.play(),e.setPlaying(!e.playing)}function $(){if(!s.value.id){window.$tip("需要先选择歌曲哦！");return}e.getPlayList.length===1||e.getPlayList.length-1===e.currentIndex?e.setCurrentIndex(0):(e.setCurrentIndex(M(e.currentIndex)),e.audioEle.src=e.currentMusic.url,e.audioEle.play())}function M(t){return n.value==="order"?t+1:n.value==="loop"?t:Math.floor(Math.random()*e.getPlayList.length)}let m=v(0);R(s,t=>{r.value=0;let y=JSON.parse(localStorage.getItem("historyList"))||[];y.some(Q=>Q.id===t.id)||(y.unshift(t),localStorage.setItem("historyList",JSON.stringify(y)))});let r=v(0);R(r,()=>{let t=0;for(let y=0;y<e.lyric.length;y++)c.value.currentTime>=e.lyric[y].time&&(t=y);e.lyricIndex=t}),D(()=>{c.value.addEventListener("timeupdate",()=>{e.isMove||(m.value=Number.parseFloat((c.value.currentTime/s.value.duration).toFixed(3)),r.value=c.value.currentTime,m.value===1&&$())}),e.audioEle.addEventListener("error",y=>{window.$tip("当前歌曲无法播放，已自动切换到下一首");let L=JSON.parse(localStorage.getItem("historyList"))||[];L.shift(),localStorage.setItem("historyList",JSON.stringify(L)),$()});let t=parseFloat(localStorage.getItem("volume"));f.value=t||1,e.audioEle.volume=t||1});function g(t){let y=Math.floor(t/60).toString().padStart(2,0),L=Math.floor(t%60).toString().padStart(2,0);return`${y}:${L}`}let f=v(1),k=v("voice");function H(){if(k.value==="voice")k.value="voice-close",e.audioEle.volume=0,f.value=0;else{k.value="voice";let t=parseFloat(localStorage.getItem("volume"));e.audioEle.volume=t||1,f.value=t||1}}function X(t){localStorage.setItem("volume",t),e.audioEle.volume=t,t==0?k.value="voice-close":k.value="voice"}function G(){if(!s.value.id){window.$tip("还没有播放歌曲哦！");return}d.push({name:"comment",params:{id:s.value.id}})}return(t,y)=>(a(),p("div",{class:V(["bar",{disable:!o(s).id}])},[l("div",Ee,[_(w,{type:"previous",size:36,onClick:x}),_(w,{type:o(e).playing?"pause":"play",size:55,onClick:C},null,8,["type"]),_(w,{type:"next",size:36,onClick:$})]),l("div",Se,[l("div",Ce,[o(s).id?(a(),p(P,{key:0},[l("span",null,b(o(s).name)+"-"+b(o(s).singer),1),l("span",null,b(g(o(r)))+"/"+b(g(o(s).duration)),1)],64)):(a(),p(P,{key:1},[Me,Le],64))]),_(W,{percent:o(m),onChangePercent:h},null,8,["percent"])]),_(w,{type:o(n),title:o(i),size:24,onClick:I},null,8,["type","title"]),_(w,{type:"comments",size:24,onClick:G}),l("div",Pe,[_(w,{type:o(k),size:24,onClick:H},null,8,["type"]),l("div",Te,[_(W,{percent:o(f),onChangePercent:X},null,8,["percent"])])])],2))}},Ne=T(Be,[["__scopeId","data-v-6428bdb8"]]),q=/\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;function Fe(u){const d=u.split(`
`),e=[];for(let s=0;s<d.length;s++){const c=d[s],n=q.exec(c);if(!n)continue;const i=c.replace(q,"").trim();i&&e.push({time:(n[1]*6e4+n[2]*1e3+(n[3]||0)*1)/1e3,text:i})}return e}const j=u=>(A("data-v-7515ced7"),u=u(),O(),u),ze={class:"music"},Re={class:"music-content"},Ae={class:"music-left"},Oe={class:"music-right"},Je={class:"music-bar"},We=j(()=>l("div",{class:"bg"},null,-1)),qe=j(()=>l("div",{class:"mask"},null,-1)),Ue={__name:"music",setup(u){const d=te(),e=F(),s=E(()=>e.currentMusic);function c(n){ne(n).then(i=>{i.lrc&&i.lrc.lyric?(e.nolyric=!1,e.lyric=Fe(i.lrc.lyric)):e.nolyric=!0})}return R(s,n=>{if(c(n.id),!n.image)return;let i=`url(${n.image}?300y300)`;document.querySelector(".bg").style.backgroundImage=i}),(n,i)=>{const I=U("router-view");return a(),p("div",ze,[l("div",Re,[l("div",Ae,[_(pe),o(d).meta.keepAlive?(a(),N(I,{key:0},{default:S(({Component:h})=>[(a(),N(se,null,[(a(),N(le(h)))],1024))]),_:1})):J("",!0),o(d).meta.keepAlive?J("",!0):(a(),N(I,{key:1}))]),l("div",Oe,[_(be)])]),l("div",Je,[_(Ne)]),We,qe])}}},Ke=T(Ue,[["__scopeId","data-v-7515ced7"]]);export{Ke as default};