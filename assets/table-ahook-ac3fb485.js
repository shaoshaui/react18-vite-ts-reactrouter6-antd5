import{r as v,bI as be,bJ as Pe,aJ as $,i as R,j as L,n as le,o as te,b5 as q,t as G,bK as ce}from"./index-2d76c2ef.js";import{c as w,f as b,b as g,g as Se,h as Re,d as X}from"./tslib.es6-59680bf8.js";import{T as we}from"./Table-7e1b85b0.js";var Fe=function(e){return function(n,r){var t=v.useRef(!1);e(function(){return function(){t.current=!1}},[]),e(function(){if(!t.current)t.current=!0;else return n()},r)}},Y=function(e){return typeof e=="function"},Ce=!1;const Z=Ce;function A(e){Z&&(Y(e)||console.error("useMemoizedFn expected parameter is a function, got ".concat(typeof e)));var n=v.useRef(e);n.current=v.useMemo(function(){return e},[e]);var r=v.useRef();return r.current||(r.current=function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];return n.current.apply(this,t)}),r.current}const V=Fe(v.useEffect);var fe=function(e,n){var r=n.manual,t=n.ready,a=t===void 0?!0:t,o=n.defaultParams,u=o===void 0?[]:o,f=n.refreshDeps,l=f===void 0?[]:f,i=n.refreshDepsAction,m=v.useRef(!1);return m.current=!1,V(function(){!r&&a&&(m.current=!0,e.run.apply(e,w([],b(u),!1)))},[a]),V(function(){m.current||r||(m.current=!0,i?i():e.refresh())},w([],b(l),!1)),{onBefore:function(){if(!a)return{stopNow:!0}}}};fe.onInit=function(e){var n=e.ready,r=n===void 0?!0:n,t=e.manual;return{loading:!t&&r}};const Te=fe;function ze(e,n){if(e===n)return!0;for(var r=0;r<e.length;r++)if(!Object.is(e[r],n[r]))return!1;return!0}function de(e,n){var r=v.useRef({deps:n,obj:void 0,initialized:!1}).current;return(r.initialized===!1||!ze(r.deps,n))&&(r.deps=n,r.obj=e(),r.initialized=!0),r.obj}function ve(e){var n=v.useRef(e);return n.current=e,n}var Ae=function(e){Z&&(Y(e)||console.error("useUnmount expected parameter is a function, got ".concat(typeof e)));var n=ve(e);v.useEffect(function(){return function(){n.current()}},[])};const ue=Ae;var k=new Map,De=function(e,n,r){var t=k.get(e);t!=null&&t.timer&&clearTimeout(t.timer);var a=void 0;n>-1&&(a=setTimeout(function(){k.delete(e)},n)),k.set(e,g(g({},r),{timer:a}))},_e=function(e){return k.get(e)},Q=new Map,xe=function(e){return Q.get(e)},Ee=function(e,n){Q.set(e,n),n.then(function(r){return Q.delete(e),r}).catch(function(){Q.delete(e)})},M={},$e=function(e,n){M[e]&&M[e].forEach(function(r){return r(n)})},ae=function(e,n){return M[e]||(M[e]=[]),M[e].push(n),function(){var t=M[e].indexOf(n);M[e].splice(t,1)}},Oe=function(e,n){var r=n.cacheKey,t=n.cacheTime,a=t===void 0?5*60*1e3:t,o=n.staleTime,u=o===void 0?0:o,f=n.setCache,l=n.getCache,i=v.useRef(),m=v.useRef(),d=function(c,s){f?f(s):De(c,a,s),$e(c,s.data)},p=function(c,s){return s===void 0&&(s=[]),l?l(s):_e(c)};return de(function(){if(r){var c=p(r);c&&Object.hasOwnProperty.call(c,"data")&&(e.state.data=c.data,e.state.params=c.params,(u===-1||new Date().getTime()-c.time<=u)&&(e.state.loading=!1)),i.current=ae(r,function(s){e.setState({data:s})})}},[]),ue(function(){var c;(c=i.current)===null||c===void 0||c.call(i)}),r?{onBefore:function(c){var s=p(r,c);return!s||!Object.hasOwnProperty.call(s,"data")?{}:u===-1||new Date().getTime()-s.time<=u?{loading:!1,data:s==null?void 0:s.data,error:void 0,returnNow:!0}:{data:s==null?void 0:s.data,error:void 0}},onRequest:function(c,s){var P=xe(r);return P&&P!==m.current?{servicePromise:P}:(P=c.apply(void 0,w([],b(s),!1)),m.current=P,Ee(r,P),{servicePromise:P})},onSuccess:function(c,s){var P;r&&((P=i.current)===null||P===void 0||P.call(i),d(r,{data:c,params:s,time:new Date().getTime()}),i.current=ae(r,function(C){e.setState({data:C})}))},onMutate:function(c){var s;r&&((s=i.current)===null||s===void 0||s.call(i),d(r,{data:c,params:e.state.params,time:new Date().getTime()}),i.current=ae(r,function(P){e.setState({data:P})}))}}:{}};const je=Oe;var Me=function(e,n){var r=n.debounceWait,t=n.debounceLeading,a=n.debounceTrailing,o=n.debounceMaxWait,u=v.useRef(),f=v.useMemo(function(){var l={};return t!==void 0&&(l.leading=t),a!==void 0&&(l.trailing=a),o!==void 0&&(l.maxWait=o),l},[t,a,o]);return v.useEffect(function(){if(r){var l=e.runAsync.bind(e);return u.current=be(function(i){i()},r,f),e.runAsync=function(){for(var i=[],m=0;m<arguments.length;m++)i[m]=arguments[m];return new Promise(function(d,p){var c;(c=u.current)===null||c===void 0||c.call(u,function(){l.apply(void 0,w([],b(i),!1)).then(d).catch(p)})})},function(){var i;(i=u.current)===null||i===void 0||i.cancel(),e.runAsync=l}}},[r,f]),r?{onCancel:function(){var l;(l=u.current)===null||l===void 0||l.cancel()}}:{}};const Be=Me;var Le=function(e,n){var r=n.loadingDelay,t=n.ready,a=v.useRef();if(!r)return{};var o=function(){a.current&&clearTimeout(a.current)};return{onBefore:function(){return o(),t!==!1&&(a.current=setTimeout(function(){e.setState({loading:!0})},r)),{loading:!1}},onFinally:function(){o()},onCancel:function(){o()}}};const Ve=Le;var We=!!(typeof window<"u"&&window.document&&window.document.createElement);const ee=We;function oe(){return ee?document.visibilityState!=="hidden":!0}var H=[];function He(e){return H.push(e),function(){var r=H.indexOf(e);H.splice(r,1)}}if(ee){var Ie=function(){if(oe())for(var e=0;e<H.length;e++){var n=H[e];n()}};window.addEventListener("visibilitychange",Ie,!1)}var Ne=function(e,n){var r=n.pollingInterval,t=n.pollingWhenHidden,a=t===void 0?!0:t,o=n.pollingErrorRetryCount,u=o===void 0?-1:o,f=v.useRef(),l=v.useRef(),i=v.useRef(0),m=function(){var d;f.current&&clearTimeout(f.current),(d=l.current)===null||d===void 0||d.call(l)};return V(function(){r||m()},[r]),r?{onBefore:function(){m()},onError:function(){i.current+=1},onSuccess:function(){i.current=0},onFinally:function(){u===-1||u!==-1&&i.current<=u?f.current=setTimeout(function(){!a&&!oe()?l.current=He(function(){e.refresh()}):e.refresh()},r):i.current=0},onCancel:function(){m()}}:{}};const Ue=Ne;function Je(e,n){var r=!1;return function(){for(var t=[],a=0;a<arguments.length;a++)t[a]=arguments[a];r||(r=!0,e.apply(void 0,w([],b(t),!1)),setTimeout(function(){r=!1},n))}}function Ke(){return ee&&typeof navigator.onLine<"u"?navigator.onLine:!0}var I=[];function qe(e){return I.push(e),function(){var r=I.indexOf(e);r>-1&&I.splice(r,1)}}if(ee){var se=function(){if(!(!oe()||!Ke()))for(var e=0;e<I.length;e++){var n=I[e];n()}};window.addEventListener("visibilitychange",se,!1),window.addEventListener("focus",se,!1)}var Ge=function(e,n){var r=n.refreshOnWindowFocus,t=n.focusTimespan,a=t===void 0?5e3:t,o=v.useRef(),u=function(){var f;(f=o.current)===null||f===void 0||f.call(o)};return v.useEffect(function(){if(r){var f=Je(e.refresh.bind(e),a);o.current=qe(function(){f()})}return function(){u()}},[r,a]),ue(function(){u()}),{}};const ke=Ge;var Qe=function(e,n){var r=n.retryInterval,t=n.retryCount,a=v.useRef(),o=v.useRef(0),u=v.useRef(!1);return t?{onBefore:function(){u.current||(o.current=0),u.current=!1,a.current&&clearTimeout(a.current)},onSuccess:function(){o.current=0},onError:function(){if(o.current+=1,t===-1||o.current<=t){var f=r??Math.min(1e3*Math.pow(2,o.current),3e4);a.current=setTimeout(function(){u.current=!0,e.refresh()},f)}else o.current=0},onCancel:function(){o.current=0,a.current&&clearTimeout(a.current)}}:{}};const Xe=Qe;var Ye=function(e,n){var r=n.throttleWait,t=n.throttleLeading,a=n.throttleTrailing,o=v.useRef(),u={};return t!==void 0&&(u.leading=t),a!==void 0&&(u.trailing=a),v.useEffect(function(){if(r){var f=e.runAsync.bind(e);return o.current=Pe(function(l){l()},r,u),e.runAsync=function(){for(var l=[],i=0;i<arguments.length;i++)l[i]=arguments[i];return new Promise(function(m,d){var p;(p=o.current)===null||p===void 0||p.call(o,function(){f.apply(void 0,w([],b(l),!1)).then(m).catch(d)})})},function(){var l;e.runAsync=f,(l=o.current)===null||l===void 0||l.cancel()}}},[r,t,a]),r?{onCancel:function(){var f;(f=o.current)===null||f===void 0||f.cancel()}}:{}};const Ze=Ye;var en=function(e){Z&&(Y(e)||console.error('useMount: parameter `fn` expected to be a function, but got "'.concat(typeof e,'".'))),v.useEffect(function(){e==null||e()},[])};const nn=en;var rn=function(){var e=b(v.useState({}),2),n=e[1];return v.useCallback(function(){return n({})},[])};const tn=rn;var an=function(){function e(n,r,t,a){a===void 0&&(a={}),this.serviceRef=n,this.options=r,this.subscribe=t,this.initState=a,this.count=0,this.state={loading:!1,params:void 0,data:void 0,error:void 0},this.state=g(g(g({},this.state),{loading:!r.manual}),a)}return e.prototype.setState=function(n){n===void 0&&(n={}),this.state=g(g({},this.state),n),this.subscribe()},e.prototype.runPluginHandler=function(n){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];var a=this.pluginImpls.map(function(o){var u;return(u=o[n])===null||u===void 0?void 0:u.call.apply(u,w([o],b(r),!1))}).filter(Boolean);return Object.assign.apply(Object,w([{}],b(a),!1))},e.prototype.runAsync=function(){for(var n,r,t,a,o,u,f,l,i,m,d=[],p=0;p<arguments.length;p++)d[p]=arguments[p];return Se(this,void 0,void 0,function(){var c,s,P,C,D,_,T,x,z,S,O;return Re(this,function(E){switch(E.label){case 0:if(this.count+=1,c=this.count,s=this.runPluginHandler("onBefore",d),P=s.stopNow,C=P===void 0?!1:P,D=s.returnNow,_=D===void 0?!1:D,T=X(s,["stopNow","returnNow"]),C)return[2,new Promise(function(){})];if(this.setState(g({loading:!0,params:d},T)),_)return[2,Promise.resolve(T.data)];(r=(n=this.options).onBefore)===null||r===void 0||r.call(n,d),E.label=1;case 1:return E.trys.push([1,3,,4]),x=this.runPluginHandler("onRequest",this.serviceRef.current,d).servicePromise,x||(x=(O=this.serviceRef).current.apply(O,w([],b(d),!1))),[4,x];case 2:return z=E.sent(),c!==this.count?[2,new Promise(function(){})]:(this.setState({data:z,error:void 0,loading:!1}),(a=(t=this.options).onSuccess)===null||a===void 0||a.call(t,z,d),this.runPluginHandler("onSuccess",z,d),(u=(o=this.options).onFinally)===null||u===void 0||u.call(o,d,z,void 0),c===this.count&&this.runPluginHandler("onFinally",d,z,void 0),[2,z]);case 3:if(S=E.sent(),c!==this.count)return[2,new Promise(function(){})];throw this.setState({error:S,loading:!1}),(l=(f=this.options).onError)===null||l===void 0||l.call(f,S,d),this.runPluginHandler("onError",S,d),(m=(i=this.options).onFinally)===null||m===void 0||m.call(i,d,void 0,S),c===this.count&&this.runPluginHandler("onFinally",d,void 0,S),S;case 4:return[2]}})})},e.prototype.run=function(){for(var n=this,r=[],t=0;t<arguments.length;t++)r[t]=arguments[t];this.runAsync.apply(this,w([],b(r),!1)).catch(function(a){n.options.onError||console.error(a)})},e.prototype.cancel=function(){this.count+=1,this.setState({loading:!1}),this.runPluginHandler("onCancel")},e.prototype.refresh=function(){this.run.apply(this,w([],b(this.state.params||[]),!1))},e.prototype.refreshAsync=function(){return this.runAsync.apply(this,w([],b(this.state.params||[]),!1))},e.prototype.mutate=function(n){var r=Y(n)?n(this.state.data):n;this.runPluginHandler("onMutate",r),this.setState({data:r})},e}();const un=an;function on(e,n,r){n===void 0&&(n={}),r===void 0&&(r=[]);var t=n.manual,a=t===void 0?!1:t,o=X(n,["manual"]);Z&&n.defaultParams&&!Array.isArray(n.defaultParams)&&console.warn("expected defaultParams is array, got ".concat(typeof n.defaultParams));var u=g({manual:a},o),f=ve(e),l=tn(),i=de(function(){var m=r.map(function(d){var p;return(p=d==null?void 0:d.onInit)===null||p===void 0?void 0:p.call(d,u)}).filter(Boolean);return new un(f,u,l,Object.assign.apply(Object,w([{}],b(m),!1)))},[]);return i.options=u,i.pluginImpls=r.map(function(m){return m(i,u)}),nn(function(){if(!a){var m=i.state.params||n.defaultParams||[];i.run.apply(i,w([],b(m),!1))}}),ue(function(){i.cancel()}),{loading:i.state.loading,data:i.state.data,error:i.state.error,params:i.state.params||[],cancel:A(i.cancel.bind(i)),refresh:A(i.refresh.bind(i)),refreshAsync:A(i.refreshAsync.bind(i)),run:A(i.run.bind(i)),runAsync:A(i.runAsync.bind(i)),mutate:A(i.mutate.bind(i))}}function ln(e,n,r){return on(e,n,w(w([],b(r||[]),!1),[Be,Ve,Ue,ke,Ze,Te,je,Xe],!1))}var sn=function(e,n){var r;n===void 0&&(n={});var t=n.defaultPageSize,a=t===void 0?10:t,o=n.defaultCurrent,u=o===void 0?1:o,f=X(n,["defaultPageSize","defaultCurrent"]),l=ln(e,g({defaultParams:[{current:u,pageSize:a}],refreshDepsAction:function(){D(1)}},f)),i=l.params[0]||{},m=i.current,d=m===void 0?1:m,p=i.pageSize,c=p===void 0?a:p,s=((r=l.data)===null||r===void 0?void 0:r.total)||0,P=v.useMemo(function(){return Math.ceil(s/c)},[c,s]),C=function(T,x){var z=T<=0?1:T,S=x<=0?1:x,O=Math.ceil(s/S);z>O&&(z=Math.max(1,O));var E=b(l.params||[]),B=E[0],N=B===void 0?{}:B,ne=E.slice(1);l.run.apply(l,w([g(g({},N),{current:z,pageSize:S})],b(ne),!1))},D=function(T){C(T,c)},_=function(T){C(d,T)};return g(g({},l),{pagination:{current:d,pageSize:c,total:s,totalPage:P,onChange:A(C),changeCurrent:A(D),changePageSize:A(_)}})};const cn=sn;var fn=function(e,n){var r;n===void 0&&(n={});var t=n.form,a=n.defaultType,o=a===void 0?"simple":a,u=n.defaultParams,f=n.manual,l=f===void 0?!1:f,i=n.refreshDeps,m=i===void 0?[]:i,d=n.ready,p=d===void 0?!0:d,c=X(n,["form","defaultType","defaultParams","manual","refreshDeps","ready"]),s=cn(e,g(g({ready:p,manual:!0},c),{onSuccess:function(){for(var y,h=[],F=0;F<arguments.length;F++)h[F]=arguments[F];E.current=!0,(y=c.onSuccess)===null||y===void 0||y.call.apply(y,w([c],b(h),!1))}})),P=s.params,C=P===void 0?[]:P,D=s.run,_=C[2]||{},T=b(v.useState((_==null?void 0:_.type)||o),2),x=T[0],z=T[1],S=v.useRef({}),O=v.useRef([]),E=v.useRef(!1),B=!!(t!=null&&t.getInternalHooks),N=function(){if(!t)return{};if(B)return t.getFieldsValue(null,function(){return!0});var y=t.getFieldsValue(),h={};return Object.keys(y).forEach(function(F){(!t.getFieldInstance||t.getFieldInstance(F))&&(h[F]=y[F])}),h},ne=function(){if(!t)return Promise.resolve({});var y=N(),h=Object.keys(y);return B?t.validateFields(h):new Promise(function(F,j){t.validateFields(h,function(W,re){W?j(W):F(re)})})},U=function(){if(t){if(B)return t.setFieldsValue(S.current);var y={};Object.keys(S.current).forEach(function(h){(!t.getFieldInstance||t.getFieldInstance(h))&&(y[h]=S.current[h])}),t.setFieldsValue(y)}},me=function(){var y=N();S.current=g(g({},S.current),y),z(function(h){return h==="simple"?"advance":"simple"})},J=function(y){p&&setTimeout(function(){ne().then(function(h){h===void 0&&(h={});var F=y||g(g({pageSize:n.defaultPageSize||10},(C==null?void 0:C[0])||{}),{current:1});if(!t){D(F);return}S.current=g(g({},S.current),h),D(F,h,{allFormData:S.current,type:x})}).catch(function(h){return h})})},he=function(){var y,h;t&&t.resetFields(),J(g(g({},(u==null?void 0:u[0])||{}),{pageSize:n.defaultPageSize||((h=(y=n.defaultParams)===null||y===void 0?void 0:y[0])===null||h===void 0?void 0:h.pageSize)||10,current:1}))},ge=function(y){var h,F,j;(h=y==null?void 0:y.preventDefault)===null||h===void 0||h.call(y),J(E.current?void 0:g({pageSize:n.defaultPageSize||((j=(F=n.defaultParams)===null||F===void 0?void 0:F[0])===null||j===void 0?void 0:j.pageSize)||10,current:1},(u==null?void 0:u[0])||{}))},pe=function(y,h,F,j){var W=b(C||[]),re=W[0],ye=W.slice(1);D.apply(void 0,w([g(g({},re),{current:y.current,pageSize:y.pageSize,filters:h,sorter:F,extra:j})],b(ye),!1))};v.useEffect(function(){if(C.length>0){S.current=(_==null?void 0:_.allFormData)||{},U(),D.apply(void 0,w([],b(C),!1));return}!l&&p&&(S.current=(u==null?void 0:u[1])||{},U(),J(u==null?void 0:u[0]))},[]),V(function(){p&&U()},[x]);var K=v.useRef(!1);return K.current=!1,V(function(){!l&&p&&(K.current=!0,t&&t.resetFields(),S.current=(u==null?void 0:u[1])||{},U(),J(u==null?void 0:u[0]))},[p]),V(function(){K.current||p&&(l||(K.current=!0,s.pagination.changeCurrent(1)))},w([],b(m),!1)),g(g({},s),{tableProps:{dataSource:((r=s.data)===null||r===void 0?void 0:r.list)||O.current,loading:s.loading,onChange:A(pe),pagination:{current:s.pagination.current,pageSize:s.pagination.pageSize,total:s.pagination.total}},search:{submit:A(ge),type:x,changeType:A(me),reset:A(he)}})};const dn=fn,{Option:ie}=ce,vn=({current:e,pageSize:n},r)=>{let t=`page=${e}&size=${n}`;return Object.entries(r).forEach(([a,o])=>{o&&(t+=`&${a}=${o}`)}),fetch(`https://randomuser.me/api?results=55&${t}`).then(a=>a.json()).then(a=>({total:a.info.results,list:a.results}))};function pn(){const[e]=$.useForm(),{tableProps:n,search:r}=dn(vn,{defaultPageSize:5,form:e}),{type:t,changeType:a,submit:o,reset:u}=r,f=[{title:"name",dataIndex:["name","last"]},{title:"email",dataIndex:"email"},{title:"phone",dataIndex:"phone"},{title:"gender",dataIndex:"gender"}],l=R("div",{children:L($,{form:e,children:[L(le,{gutter:24,children:[R(te,{span:8,children:R($.Item,{label:"name",name:"name",children:R(q,{placeholder:"name"})})}),R(te,{span:8,children:R($.Item,{label:"email",name:"email",children:R(q,{placeholder:"email"})})}),R(te,{span:8,children:R($.Item,{label:"phone",name:"phone",children:R(q,{placeholder:"phone"})})})]}),L(le,{gutter:24,justify:"end",style:{marginBottom:24},children:[R(G,{type:"primary",onClick:o,children:"Search"}),R(G,{onClick:u,style:{marginLeft:16},children:"Reset"}),R(G,{type:"link",onClick:a,children:"Simple Search"})]})]})}),i=R("div",{style:{marginBottom:16},children:L($,{form:e,style:{display:"flex",justifyContent:"flex-end"},children:[R($.Item,{name:"gender",initialValue:"male",children:L(ce,{style:{width:120,marginRight:16},onChange:o,children:[R(ie,{value:"",children:"all"}),R(ie,{value:"male",children:"male"}),R(ie,{value:"female",children:"female"})]})}),R($.Item,{name:"name",children:R(q.Search,{placeholder:"enter name",style:{width:240},onSearch:o})}),R(G,{type:"link",onClick:a,children:"Advanced Search"})]})});return L("div",{children:[t==="simple"?i:l,R(we,{columns:f,rowKey:"email",...n})]})}export{pn as default};
