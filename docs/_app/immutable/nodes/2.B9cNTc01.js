import{s as H,a as L,u as M,g as V,b as j,n as P}from"../chunks/scheduler.CtbWrGNo.js";import{S,i as T,e as m,s as _,c as p,a as D,f as d,d as c,k as E,g as u,h as I,l as $,m as h,t as y,b as A,j as B,n as x,o as g,p as C,q as k,r as w}from"../chunks/index.BdcAV4Um.js";function q(i){let t,o;return{c(){t=m("h3"),o=y(i[0]),this.h()},l(n){t=p(n,"H3",{class:!0});var e=D(t);o=A(e,i[0]),e.forEach(c),this.h()},h(){E(t,"class","box-title")},m(n,e){u(n,t,e),I(t,o)},p(n,e){e&1&&B(o,n[0])},d(n){n&&c(t)}}}function N(i){let t,o,n,e=i[0]&&q(i);const r=i[2].default,a=L(r,i,i[1],null);return{c(){t=m("div"),e&&e.c(),o=_(),a&&a.c(),this.h()},l(l){t=p(l,"DIV",{class:!0});var s=D(t);e&&e.l(s),o=d(s),a&&a.l(s),s.forEach(c),this.h()},h(){E(t,"class","box")},m(l,s){u(l,t,s),e&&e.m(t,null),I(t,o),a&&a.m(t,null),n=!0},p(l,[s]){l[0]?e?e.p(l,s):(e=q(l),e.c(),e.m(t,o)):e&&(e.d(1),e=null),a&&a.p&&(!n||s&2)&&M(a,r,l,l[1],n?j(r,l[1],s,null):V(l[1]),null)},i(l){n||($(a,l),n=!0)},o(l){h(a,l),n=!1},d(l){l&&c(t),e&&e.d(),a&&a.d(l)}}}function W(i,t,o){let{$$slots:n={},$$scope:e}=t,{title:r}=t;return i.$$set=a=>{"title"in a&&o(0,r=a.title),"$$scope"in a&&o(1,e=a.$$scope)},[r,e,n]}class z extends S{constructor(t){super(),T(this,t,W,N,H,{title:0})}}function F(i){let t,o=`We are a nano-sized software company dedicated to building innovative consumer-facing
		applications.`;return{c(){t=m("p"),t.textContent=o},l(n){t=p(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-9d0t5p"&&(t.textContent=o)},m(n,e){u(n,t,e)},p:P,d(n){n&&c(t)}}}function G(i){let t,o="To contact us, please use mucklstrom at gmail.";return{c(){t=m("p"),t.textContent=o},l(n){t=p(n,"P",{"data-svelte-h":!0}),g(t)!=="svelte-ky93bq"&&(t.textContent=o)},m(n,e){u(n,t,e)},p:P,d(n){n&&c(t)}}}function J(i){let t,o='<img src="nord-ship-logo.png" alt="Nord Ship" class="max-w-80 mx-auto shadow-2xl rounded-full"/>',n,e,r,a,l;return e=new z({props:{title:"About",$$slots:{default:[F]},$$scope:{ctx:i}}}),a=new z({props:{title:"Contact",$$slots:{default:[G]},$$scope:{ctx:i}}}),{c(){t=m("div"),t.innerHTML=o,n=_(),x(e.$$.fragment),r=_(),x(a.$$.fragment)},l(s){t=p(s,"DIV",{"data-svelte-h":!0}),g(t)!=="svelte-q5nmzz"&&(t.innerHTML=o),n=d(s),C(e.$$.fragment,s),r=d(s),C(a.$$.fragment,s)},m(s,f){u(s,t,f),u(s,n,f),k(e,s,f),u(s,r,f),k(a,s,f),l=!0},p(s,[f]){const v={};f&1&&(v.$$scope={dirty:f,ctx:s}),e.$set(v);const b={};f&1&&(b.$$scope={dirty:f,ctx:s}),a.$set(b)},i(s){l||($(e.$$.fragment,s),$(a.$$.fragment,s),l=!0)},o(s){h(e.$$.fragment,s),h(a.$$.fragment,s),l=!1},d(s){s&&(c(t),c(n),c(r)),w(e,s),w(a,s)}}}class Q extends S{constructor(t){super(),T(this,t,null,J,H,{})}}export{Q as component};
