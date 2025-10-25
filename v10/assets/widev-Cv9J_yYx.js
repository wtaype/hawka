(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const a of i)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(i){const a={};return i.integrity&&(a.integrity=i.integrity),i.referrerPolicy&&(a.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?a.credentials="include":i.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(i){if(i.ep)return;i.ep=!0;const a=t(i);fetch(i.href,a)}})();function vd(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var go={exports:{}};/*!
 * jQuery JavaScript Library v3.7.1
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-08-28T13:37Z
 */var Td=go.exports,ac;function Ed(){return ac||(ac=1,(function(n){(function(e,t){n.exports=e.document?t(e,!0):function(r){if(!r.document)throw new Error("jQuery requires a window with a document");return t(r)}})(typeof window<"u"?window:Td,function(e,t){var r=[],i=Object.getPrototypeOf,a=r.slice,c=r.flat?function(s){return r.flat.call(s)}:function(s){return r.concat.apply([],s)},p=r.push,_=r.indexOf,v={},I=v.toString,P=v.hasOwnProperty,V=P.toString,G=V.call(Object),W={},Q=function(u){return typeof u=="function"&&typeof u.nodeType!="number"&&typeof u.item!="function"},Y=function(u){return u!=null&&u===u.window},J=e.document,_e={type:!0,src:!0,nonce:!0,noModule:!0};function ve(s,u,h){h=h||J;var d,m,y=h.createElement("script");if(y.text=s,u)for(d in _e)m=u[d]||u.getAttribute&&u.getAttribute(d),m&&y.setAttribute(d,m);h.head.appendChild(y).parentNode.removeChild(y)}function De(s){return s==null?s+"":typeof s=="object"||typeof s=="function"?v[I.call(s)]||"object":typeof s}var Ze="3.7.1",qe=/HTML$/i,l=function(s,u){return new l.fn.init(s,u)};l.fn=l.prototype={jquery:Ze,constructor:l,length:0,toArray:function(){return a.call(this)},get:function(s){return s==null?a.call(this):s<0?this[s+this.length]:this[s]},pushStack:function(s){var u=l.merge(this.constructor(),s);return u.prevObject=this,u},each:function(s){return l.each(this,s)},map:function(s){return this.pushStack(l.map(this,function(u,h){return s.call(u,h,u)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(l.grep(this,function(s,u){return(u+1)%2}))},odd:function(){return this.pushStack(l.grep(this,function(s,u){return u%2}))},eq:function(s){var u=this.length,h=+s+(s<0?u:0);return this.pushStack(h>=0&&h<u?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:p,sort:r.sort,splice:r.splice},l.extend=l.fn.extend=function(){var s,u,h,d,m,y,T=arguments[0]||{},R=1,A=arguments.length,N=!1;for(typeof T=="boolean"&&(N=T,T=arguments[R]||{},R++),typeof T!="object"&&!Q(T)&&(T={}),R===A&&(T=this,R--);R<A;R++)if((s=arguments[R])!=null)for(u in s)d=s[u],!(u==="__proto__"||T===d)&&(N&&d&&(l.isPlainObject(d)||(m=Array.isArray(d)))?(h=T[u],m&&!Array.isArray(h)?y=[]:!m&&!l.isPlainObject(h)?y={}:y=h,m=!1,T[u]=l.extend(N,y,d)):d!==void 0&&(T[u]=d));return T},l.extend({expando:"jQuery"+(Ze+Math.random()).replace(/\D/g,""),isReady:!0,error:function(s){throw new Error(s)},noop:function(){},isPlainObject:function(s){var u,h;return!s||I.call(s)!=="[object Object]"?!1:(u=i(s),u?(h=P.call(u,"constructor")&&u.constructor,typeof h=="function"&&V.call(h)===G):!0)},isEmptyObject:function(s){var u;for(u in s)return!1;return!0},globalEval:function(s,u,h){ve(s,{nonce:u&&u.nonce},h)},each:function(s,u){var h,d=0;if(C(s))for(h=s.length;d<h&&u.call(s[d],d,s[d])!==!1;d++);else for(d in s)if(u.call(s[d],d,s[d])===!1)break;return s},text:function(s){var u,h="",d=0,m=s.nodeType;if(!m)for(;u=s[d++];)h+=l.text(u);return m===1||m===11?s.textContent:m===9?s.documentElement.textContent:m===3||m===4?s.nodeValue:h},makeArray:function(s,u){var h=u||[];return s!=null&&(C(Object(s))?l.merge(h,typeof s=="string"?[s]:s):p.call(h,s)),h},inArray:function(s,u,h){return u==null?-1:_.call(u,s,h)},isXMLDoc:function(s){var u=s&&s.namespaceURI,h=s&&(s.ownerDocument||s).documentElement;return!qe.test(u||h&&h.nodeName||"HTML")},merge:function(s,u){for(var h=+u.length,d=0,m=s.length;d<h;d++)s[m++]=u[d];return s.length=m,s},grep:function(s,u,h){for(var d,m=[],y=0,T=s.length,R=!h;y<T;y++)d=!u(s[y],y),d!==R&&m.push(s[y]);return m},map:function(s,u,h){var d,m,y=0,T=[];if(C(s))for(d=s.length;y<d;y++)m=u(s[y],y,h),m!=null&&T.push(m);else for(y in s)m=u(s[y],y,h),m!=null&&T.push(m);return c(T)},guid:1,support:W}),typeof Symbol=="function"&&(l.fn[Symbol.iterator]=r[Symbol.iterator]),l.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(s,u){v["[object "+u+"]"]=u.toLowerCase()});function C(s){var u=!!s&&"length"in s&&s.length,h=De(s);return Q(s)||Y(s)?!1:h==="array"||u===0||typeof u=="number"&&u>0&&u-1 in s}function S(s,u){return s.nodeName&&s.nodeName.toLowerCase()===u.toLowerCase()}var x=r.pop,D=r.sort,M=r.splice,b="[\\x20\\t\\r\\n\\f]",Ge=new RegExp("^"+b+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b+"+$","g");l.contains=function(s,u){var h=u&&u.parentNode;return s===h||!!(h&&h.nodeType===1&&(s.contains?s.contains(h):s.compareDocumentPosition&&s.compareDocumentPosition(h)&16))};var cn=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function da(s,u){return u?s==="\0"?"�":s.slice(0,-1)+"\\"+s.charCodeAt(s.length-1).toString(16)+" ":"\\"+s}l.escapeSelector=function(s){return(s+"").replace(cn,da)};var Nt=J,Cn=p;(function(){var s,u,h,d,m,y=Cn,T,R,A,N,q,B=l.expando,U=0,X=0,se=io(),Te=io(),me=io(),Me=io(),o=function(w,k){return w===k&&(m=!0),0},f="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",g="(?:\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",E="\\["+b+"*("+g+")(?:"+b+"*([*^$|!~]?=)"+b+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+g+"))|)"+b+"*\\]",L=":("+g+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+E+")*)|.*)\\)|)",O=new RegExp(b+"+","g"),K=new RegExp("^"+b+"*,"+b+"*"),fe=new RegExp("^"+b+"*([>+~]|"+b+")"+b+"*"),Ue=new RegExp(b+"|>"),ye=new RegExp(L),Fe=new RegExp("^"+g+"$"),$e={ID:new RegExp("^#("+g+")"),CLASS:new RegExp("^\\.("+g+")"),TAG:new RegExp("^("+g+"|[*])"),ATTR:new RegExp("^"+E),PSEUDO:new RegExp("^"+L),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+b+"*(even|odd|(([+-]|)(\\d*)n|)"+b+"*(?:([+-]|)"+b+"*(\\d+)|))"+b+"*\\)|)","i"),bool:new RegExp("^(?:"+f+")$","i"),needsContext:new RegExp("^"+b+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b+"*((?:-\\d)?\\d*)"+b+"*\\)|)(?=[^-]|$)","i")},lt=/^(?:input|select|textarea|button)$/i,st=/^h\d$/i,He=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Bn=/[+~]/,It=new RegExp("\\\\[\\da-fA-F]{1,6}"+b+"?|\\\\([^\\r\\n\\f])","g"),mn=function(w,k){var F="0x"+w.slice(1)-65536;return k||(F<0?String.fromCharCode(F+65536):String.fromCharCode(F>>10|55296,F&1023|56320))},fd=function(){$n()},dd=oo(function(w){return w.disabled===!0&&S(w,"fieldset")},{dir:"parentNode",next:"legend"});function pd(){try{return T.activeElement}catch{}}try{y.apply(r=a.call(Nt.childNodes),Nt.childNodes),r[Nt.childNodes.length].nodeType}catch{y={apply:function(k,F){Cn.apply(k,a.call(F))},call:function(k){Cn.apply(k,a.call(arguments,1))}}}function Pe(w,k,F,j){var $,Z,te,oe,ne,Ee,he,de=k&&k.ownerDocument,we=k?k.nodeType:9;if(F=F||[],typeof w!="string"||!w||we!==1&&we!==9&&we!==11)return F;if(!j&&($n(k),k=k||T,A)){if(we!==11&&(ne=He.exec(w)))if($=ne[1]){if(we===9)if(te=k.getElementById($)){if(te.id===$)return y.call(F,te),F}else return F;else if(de&&(te=de.getElementById($))&&Pe.contains(k,te)&&te.id===$)return y.call(F,te),F}else{if(ne[2])return y.apply(F,k.getElementsByTagName(w)),F;if(($=ne[3])&&k.getElementsByClassName)return y.apply(F,k.getElementsByClassName($)),F}if(!Me[w+" "]&&(!N||!N.test(w))){if(he=w,de=k,we===1&&(Ue.test(w)||fe.test(w))){for(de=Bn.test(w)&&wa(k.parentNode)||k,(de!=k||!W.scope)&&((oe=k.getAttribute("id"))?oe=l.escapeSelector(oe):k.setAttribute("id",oe=B)),Ee=rs(w),Z=Ee.length;Z--;)Ee[Z]=(oe?"#"+oe:":scope")+" "+so(Ee[Z]);he=Ee.join(",")}try{return y.apply(F,de.querySelectorAll(he)),F}catch{Me(w,!0)}finally{oe===B&&k.removeAttribute("id")}}}return oc(w.replace(Ge,"$1"),k,F,j)}function io(){var w=[];function k(F,j){return w.push(F+" ")>u.cacheLength&&delete k[w.shift()],k[F+" "]=j}return k}function Ft(w){return w[B]=!0,w}function Qr(w){var k=T.createElement("fieldset");try{return!!w(k)}catch{return!1}finally{k.parentNode&&k.parentNode.removeChild(k),k=null}}function gd(w){return function(k){return S(k,"input")&&k.type===w}}function md(w){return function(k){return(S(k,"input")||S(k,"button"))&&k.type===w}}function ic(w){return function(k){return"form"in k?k.parentNode&&k.disabled===!1?"label"in k?"label"in k.parentNode?k.parentNode.disabled===w:k.disabled===w:k.isDisabled===w||k.isDisabled!==!w&&dd(k)===w:k.disabled===w:"label"in k?k.disabled===w:!1}}function Sr(w){return Ft(function(k){return k=+k,Ft(function(F,j){for(var $,Z=w([],F.length,k),te=Z.length;te--;)F[$=Z[te]]&&(F[$]=!(j[$]=F[$]))})})}function wa(w){return w&&typeof w.getElementsByTagName<"u"&&w}function $n(w){var k,F=w?w.ownerDocument||w:Nt;return F==T||F.nodeType!==9||!F.documentElement||(T=F,R=T.documentElement,A=!l.isXMLDoc(T),q=R.matches||R.webkitMatchesSelector||R.msMatchesSelector,R.msMatchesSelector&&Nt!=T&&(k=T.defaultView)&&k.top!==k&&k.addEventListener("unload",fd),W.getById=Qr(function(j){return R.appendChild(j).id=l.expando,!T.getElementsByName||!T.getElementsByName(l.expando).length}),W.disconnectedMatch=Qr(function(j){return q.call(j,"*")}),W.scope=Qr(function(){return T.querySelectorAll(":scope")}),W.cssHas=Qr(function(){try{return T.querySelector(":has(*,:jqfake)"),!1}catch{return!0}}),W.getById?(u.filter.ID=function(j){var $=j.replace(It,mn);return function(Z){return Z.getAttribute("id")===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&A){var Z=$.getElementById(j);return Z?[Z]:[]}}):(u.filter.ID=function(j){var $=j.replace(It,mn);return function(Z){var te=typeof Z.getAttributeNode<"u"&&Z.getAttributeNode("id");return te&&te.value===$}},u.find.ID=function(j,$){if(typeof $.getElementById<"u"&&A){var Z,te,oe,ne=$.getElementById(j);if(ne){if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne];for(oe=$.getElementsByName(j),te=0;ne=oe[te++];)if(Z=ne.getAttributeNode("id"),Z&&Z.value===j)return[ne]}return[]}}),u.find.TAG=function(j,$){return typeof $.getElementsByTagName<"u"?$.getElementsByTagName(j):$.querySelectorAll(j)},u.find.CLASS=function(j,$){if(typeof $.getElementsByClassName<"u"&&A)return $.getElementsByClassName(j)},N=[],Qr(function(j){var $;R.appendChild(j).innerHTML="<a id='"+B+"' href='' disabled='disabled'></a><select id='"+B+"-\r\\' disabled='disabled'><option selected=''></option></select>",j.querySelectorAll("[selected]").length||N.push("\\["+b+"*(?:value|"+f+")"),j.querySelectorAll("[id~="+B+"-]").length||N.push("~="),j.querySelectorAll("a#"+B+"+*").length||N.push(".#.+[+~]"),j.querySelectorAll(":checked").length||N.push(":checked"),$=T.createElement("input"),$.setAttribute("type","hidden"),j.appendChild($).setAttribute("name","D"),R.appendChild(j).disabled=!0,j.querySelectorAll(":disabled").length!==2&&N.push(":enabled",":disabled"),$=T.createElement("input"),$.setAttribute("name",""),j.appendChild($),j.querySelectorAll("[name='']").length||N.push("\\["+b+"*name"+b+"*="+b+`*(?:''|"")`)}),W.cssHas||N.push(":has"),N=N.length&&new RegExp(N.join("|")),o=function(j,$){if(j===$)return m=!0,0;var Z=!j.compareDocumentPosition-!$.compareDocumentPosition;return Z||(Z=(j.ownerDocument||j)==($.ownerDocument||$)?j.compareDocumentPosition($):1,Z&1||!W.sortDetached&&$.compareDocumentPosition(j)===Z?j===T||j.ownerDocument==Nt&&Pe.contains(Nt,j)?-1:$===T||$.ownerDocument==Nt&&Pe.contains(Nt,$)?1:d?_.call(d,j)-_.call(d,$):0:Z&4?-1:1)}),T}Pe.matches=function(w,k){return Pe(w,null,null,k)},Pe.matchesSelector=function(w,k){if($n(w),A&&!Me[k+" "]&&(!N||!N.test(k)))try{var F=q.call(w,k);if(F||W.disconnectedMatch||w.document&&w.document.nodeType!==11)return F}catch{Me(k,!0)}return Pe(k,T,null,[w]).length>0},Pe.contains=function(w,k){return(w.ownerDocument||w)!=T&&$n(w),l.contains(w,k)},Pe.attr=function(w,k){(w.ownerDocument||w)!=T&&$n(w);var F=u.attrHandle[k.toLowerCase()],j=F&&P.call(u.attrHandle,k.toLowerCase())?F(w,k,!A):void 0;return j!==void 0?j:w.getAttribute(k)},Pe.error=function(w){throw new Error("Syntax error, unrecognized expression: "+w)},l.uniqueSort=function(w){var k,F=[],j=0,$=0;if(m=!W.sortStable,d=!W.sortStable&&a.call(w,0),D.call(w,o),m){for(;k=w[$++];)k===w[$]&&(j=F.push($));for(;j--;)M.call(w,F[j],1)}return d=null,w},l.fn.uniqueSort=function(){return this.pushStack(l.uniqueSort(a.apply(this)))},u=l.expr={cacheLength:50,createPseudo:Ft,match:$e,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(w){return w[1]=w[1].replace(It,mn),w[3]=(w[3]||w[4]||w[5]||"").replace(It,mn),w[2]==="~="&&(w[3]=" "+w[3]+" "),w.slice(0,4)},CHILD:function(w){return w[1]=w[1].toLowerCase(),w[1].slice(0,3)==="nth"?(w[3]||Pe.error(w[0]),w[4]=+(w[4]?w[5]+(w[6]||1):2*(w[3]==="even"||w[3]==="odd")),w[5]=+(w[7]+w[8]||w[3]==="odd")):w[3]&&Pe.error(w[0]),w},PSEUDO:function(w){var k,F=!w[6]&&w[2];return $e.CHILD.test(w[0])?null:(w[3]?w[2]=w[4]||w[5]||"":F&&ye.test(F)&&(k=rs(F,!0))&&(k=F.indexOf(")",F.length-k)-F.length)&&(w[0]=w[0].slice(0,k),w[2]=F.slice(0,k)),w.slice(0,3))}},filter:{TAG:function(w){var k=w.replace(It,mn).toLowerCase();return w==="*"?function(){return!0}:function(F){return S(F,k)}},CLASS:function(w){var k=se[w+" "];return k||(k=new RegExp("(^|"+b+")"+w+"("+b+"|$)"))&&se(w,function(F){return k.test(typeof F.className=="string"&&F.className||typeof F.getAttribute<"u"&&F.getAttribute("class")||"")})},ATTR:function(w,k,F){return function(j){var $=Pe.attr(j,w);return $==null?k==="!=":k?($+="",k==="="?$===F:k==="!="?$!==F:k==="^="?F&&$.indexOf(F)===0:k==="*="?F&&$.indexOf(F)>-1:k==="$="?F&&$.slice(-F.length)===F:k==="~="?(" "+$.replace(O," ")+" ").indexOf(F)>-1:k==="|="?$===F||$.slice(0,F.length+1)===F+"-":!1):!0}},CHILD:function(w,k,F,j,$){var Z=w.slice(0,3)!=="nth",te=w.slice(-4)!=="last",oe=k==="of-type";return j===1&&$===0?function(ne){return!!ne.parentNode}:function(ne,Ee,he){var de,we,ue,Ne,_t,ht=Z!==te?"nextSibling":"previousSibling",Pt=ne.parentNode,Yt=oe&&ne.nodeName.toLowerCase(),Xr=!he&&!oe,yt=!1;if(Pt){if(Z){for(;ht;){for(ue=ne;ue=ue[ht];)if(oe?S(ue,Yt):ue.nodeType===1)return!1;_t=ht=w==="only"&&!_t&&"nextSibling"}return!0}if(_t=[te?Pt.firstChild:Pt.lastChild],te&&Xr){for(we=Pt[B]||(Pt[B]={}),de=we[w]||[],Ne=de[0]===U&&de[1],yt=Ne&&de[2],ue=Ne&&Pt.childNodes[Ne];ue=++Ne&&ue&&ue[ht]||(yt=Ne=0)||_t.pop();)if(ue.nodeType===1&&++yt&&ue===ne){we[w]=[U,Ne,yt];break}}else if(Xr&&(we=ne[B]||(ne[B]={}),de=we[w]||[],Ne=de[0]===U&&de[1],yt=Ne),yt===!1)for(;(ue=++Ne&&ue&&ue[ht]||(yt=Ne=0)||_t.pop())&&!((oe?S(ue,Yt):ue.nodeType===1)&&++yt&&(Xr&&(we=ue[B]||(ue[B]={}),we[w]=[U,yt]),ue===ne)););return yt-=$,yt===j||yt%j===0&&yt/j>=0}}},PSEUDO:function(w,k){var F,j=u.pseudos[w]||u.setFilters[w.toLowerCase()]||Pe.error("unsupported pseudo: "+w);return j[B]?j(k):j.length>1?(F=[w,w,"",k],u.setFilters.hasOwnProperty(w.toLowerCase())?Ft(function($,Z){for(var te,oe=j($,k),ne=oe.length;ne--;)te=_.call($,oe[ne]),$[te]=!(Z[te]=oe[ne])}):function($){return j($,0,F)}):j}},pseudos:{not:Ft(function(w){var k=[],F=[],j=Sa(w.replace(Ge,"$1"));return j[B]?Ft(function($,Z,te,oe){for(var ne,Ee=j($,null,oe,[]),he=$.length;he--;)(ne=Ee[he])&&($[he]=!(Z[he]=ne))}):function($,Z,te){return k[0]=$,j(k,null,te,F),k[0]=null,!F.pop()}}),has:Ft(function(w){return function(k){return Pe(w,k).length>0}}),contains:Ft(function(w){return w=w.replace(It,mn),function(k){return(k.textContent||l.text(k)).indexOf(w)>-1}}),lang:Ft(function(w){return Fe.test(w||"")||Pe.error("unsupported lang: "+w),w=w.replace(It,mn).toLowerCase(),function(k){var F;do if(F=A?k.lang:k.getAttribute("xml:lang")||k.getAttribute("lang"))return F=F.toLowerCase(),F===w||F.indexOf(w+"-")===0;while((k=k.parentNode)&&k.nodeType===1);return!1}}),target:function(w){var k=e.location&&e.location.hash;return k&&k.slice(1)===w.id},root:function(w){return w===R},focus:function(w){return w===pd()&&T.hasFocus()&&!!(w.type||w.href||~w.tabIndex)},enabled:ic(!1),disabled:ic(!0),checked:function(w){return S(w,"input")&&!!w.checked||S(w,"option")&&!!w.selected},selected:function(w){return w.parentNode&&w.parentNode.selectedIndex,w.selected===!0},empty:function(w){for(w=w.firstChild;w;w=w.nextSibling)if(w.nodeType<6)return!1;return!0},parent:function(w){return!u.pseudos.empty(w)},header:function(w){return st.test(w.nodeName)},input:function(w){return lt.test(w.nodeName)},button:function(w){return S(w,"input")&&w.type==="button"||S(w,"button")},text:function(w){var k;return S(w,"input")&&w.type==="text"&&((k=w.getAttribute("type"))==null||k.toLowerCase()==="text")},first:Sr(function(){return[0]}),last:Sr(function(w,k){return[k-1]}),eq:Sr(function(w,k,F){return[F<0?F+k:F]}),even:Sr(function(w,k){for(var F=0;F<k;F+=2)w.push(F);return w}),odd:Sr(function(w,k){for(var F=1;F<k;F+=2)w.push(F);return w}),lt:Sr(function(w,k,F){var j;for(F<0?j=F+k:F>k?j=k:j=F;--j>=0;)w.push(j);return w}),gt:Sr(function(w,k,F){for(var j=F<0?F+k:F;++j<k;)w.push(j);return w})}},u.pseudos.nth=u.pseudos.eq;for(s in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})u.pseudos[s]=gd(s);for(s in{submit:!0,reset:!0})u.pseudos[s]=md(s);function sc(){}sc.prototype=u.filters=u.pseudos,u.setFilters=new sc;function rs(w,k){var F,j,$,Z,te,oe,ne,Ee=Te[w+" "];if(Ee)return k?0:Ee.slice(0);for(te=w,oe=[],ne=u.preFilter;te;){(!F||(j=K.exec(te)))&&(j&&(te=te.slice(j[0].length)||te),oe.push($=[])),F=!1,(j=fe.exec(te))&&(F=j.shift(),$.push({value:F,type:j[0].replace(Ge," ")}),te=te.slice(F.length));for(Z in u.filter)(j=$e[Z].exec(te))&&(!ne[Z]||(j=ne[Z](j)))&&(F=j.shift(),$.push({value:F,type:Z,matches:j}),te=te.slice(F.length));if(!F)break}return k?te.length:te?Pe.error(w):Te(w,oe).slice(0)}function so(w){for(var k=0,F=w.length,j="";k<F;k++)j+=w[k].value;return j}function oo(w,k,F){var j=k.dir,$=k.next,Z=$||j,te=F&&Z==="parentNode",oe=X++;return k.first?function(ne,Ee,he){for(;ne=ne[j];)if(ne.nodeType===1||te)return w(ne,Ee,he);return!1}:function(ne,Ee,he){var de,we,ue=[U,oe];if(he){for(;ne=ne[j];)if((ne.nodeType===1||te)&&w(ne,Ee,he))return!0}else for(;ne=ne[j];)if(ne.nodeType===1||te)if(we=ne[B]||(ne[B]={}),$&&S(ne,$))ne=ne[j]||ne;else{if((de=we[Z])&&de[0]===U&&de[1]===oe)return ue[2]=de[2];if(we[Z]=ue,ue[2]=w(ne,Ee,he))return!0}return!1}}function Ia(w){return w.length>1?function(k,F,j){for(var $=w.length;$--;)if(!w[$](k,F,j))return!1;return!0}:w[0]}function yd(w,k,F){for(var j=0,$=k.length;j<$;j++)Pe(w,k[j],F);return F}function ao(w,k,F,j,$){for(var Z,te=[],oe=0,ne=w.length,Ee=k!=null;oe<ne;oe++)(Z=w[oe])&&(!F||F(Z,j,$))&&(te.push(Z),Ee&&k.push(oe));return te}function Aa(w,k,F,j,$,Z){return j&&!j[B]&&(j=Aa(j)),$&&!$[B]&&($=Aa($,Z)),Ft(function(te,oe,ne,Ee){var he,de,we,ue,Ne=[],_t=[],ht=oe.length,Pt=te||yd(k||"*",ne.nodeType?[ne]:ne,[]),Yt=w&&(te||!k)?ao(Pt,Ne,w,ne,Ee):Pt;if(F?(ue=$||(te?w:ht||j)?[]:oe,F(Yt,ue,ne,Ee)):ue=Yt,j)for(he=ao(ue,_t),j(he,[],ne,Ee),de=he.length;de--;)(we=he[de])&&(ue[_t[de]]=!(Yt[_t[de]]=we));if(te){if($||w){if($){for(he=[],de=ue.length;de--;)(we=ue[de])&&he.push(Yt[de]=we);$(null,ue=[],he,Ee)}for(de=ue.length;de--;)(we=ue[de])&&(he=$?_.call(te,we):Ne[de])>-1&&(te[he]=!(oe[he]=we))}}else ue=ao(ue===oe?ue.splice(ht,ue.length):ue),$?$(null,oe,ue,Ee):y.apply(oe,ue)})}function ba(w){for(var k,F,j,$=w.length,Z=u.relative[w[0].type],te=Z||u.relative[" "],oe=Z?1:0,ne=oo(function(de){return de===k},te,!0),Ee=oo(function(de){return _.call(k,de)>-1},te,!0),he=[function(de,we,ue){var Ne=!Z&&(ue||we!=h)||((k=we).nodeType?ne(de,we,ue):Ee(de,we,ue));return k=null,Ne}];oe<$;oe++)if(F=u.relative[w[oe].type])he=[oo(Ia(he),F)];else{if(F=u.filter[w[oe].type].apply(null,w[oe].matches),F[B]){for(j=++oe;j<$&&!u.relative[w[j].type];j++);return Aa(oe>1&&Ia(he),oe>1&&so(w.slice(0,oe-1).concat({value:w[oe-2].type===" "?"*":""})).replace(Ge,"$1"),F,oe<j&&ba(w.slice(oe,j)),j<$&&ba(w=w.slice(j)),j<$&&so(w))}he.push(F)}return Ia(he)}function _d(w,k){var F=k.length>0,j=w.length>0,$=function(Z,te,oe,ne,Ee){var he,de,we,ue=0,Ne="0",_t=Z&&[],ht=[],Pt=h,Yt=Z||j&&u.find.TAG("*",Ee),Xr=U+=Pt==null?1:Math.random()||.1,yt=Yt.length;for(Ee&&(h=te==T||te||Ee);Ne!==yt&&(he=Yt[Ne])!=null;Ne++){if(j&&he){for(de=0,!te&&he.ownerDocument!=T&&($n(he),oe=!A);we=w[de++];)if(we(he,te||T,oe)){y.call(ne,he);break}Ee&&(U=Xr)}F&&((he=!we&&he)&&ue--,Z&&_t.push(he))}if(ue+=Ne,F&&Ne!==ue){for(de=0;we=k[de++];)we(_t,ht,te,oe);if(Z){if(ue>0)for(;Ne--;)_t[Ne]||ht[Ne]||(ht[Ne]=x.call(ne));ht=ao(ht)}y.apply(ne,ht),Ee&&!Z&&ht.length>0&&ue+k.length>1&&l.uniqueSort(ne)}return Ee&&(U=Xr,h=Pt),_t};return F?Ft($):$}function Sa(w,k){var F,j=[],$=[],Z=me[w+" "];if(!Z){for(k||(k=rs(w)),F=k.length;F--;)Z=ba(k[F]),Z[B]?j.push(Z):$.push(Z);Z=me(w,_d($,j)),Z.selector=w}return Z}function oc(w,k,F,j){var $,Z,te,oe,ne,Ee=typeof w=="function"&&w,he=!j&&rs(w=Ee.selector||w);if(F=F||[],he.length===1){if(Z=he[0]=he[0].slice(0),Z.length>2&&(te=Z[0]).type==="ID"&&k.nodeType===9&&A&&u.relative[Z[1].type]){if(k=(u.find.ID(te.matches[0].replace(It,mn),k)||[])[0],k)Ee&&(k=k.parentNode);else return F;w=w.slice(Z.shift().value.length)}for($=$e.needsContext.test(w)?0:Z.length;$--&&(te=Z[$],!u.relative[oe=te.type]);)if((ne=u.find[oe])&&(j=ne(te.matches[0].replace(It,mn),Bn.test(Z[0].type)&&wa(k.parentNode)||k))){if(Z.splice($,1),w=j.length&&so(Z),!w)return y.apply(F,j),F;break}}return(Ee||Sa(w,he))(j,k,!A,F,!k||Bn.test(w)&&wa(k.parentNode)||k),F}W.sortStable=B.split("").sort(o).join("")===B,$n(),W.sortDetached=Qr(function(w){return w.compareDocumentPosition(T.createElement("fieldset"))&1}),l.find=Pe,l.expr[":"]=l.expr.pseudos,l.unique=l.uniqueSort,Pe.compile=Sa,Pe.select=oc,Pe.setDocument=$n,Pe.tokenize=rs,Pe.escape=l.escapeSelector,Pe.getText=l.text,Pe.isXML=l.isXMLDoc,Pe.selectors=l.expr,Pe.support=l.support,Pe.uniqueSort=l.uniqueSort})();var xt=function(s,u,h){for(var d=[],m=h!==void 0;(s=s[u])&&s.nodeType!==9;)if(s.nodeType===1){if(m&&l(s).is(h))break;d.push(s)}return d},Fs=function(s,u){for(var h=[];s;s=s.nextSibling)s.nodeType===1&&s!==u&&h.push(s);return h},Ai=l.expr.match.needsContext,bi=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function Ur(s,u,h){return Q(u)?l.grep(s,function(d,m){return!!u.call(d,m,d)!==h}):u.nodeType?l.grep(s,function(d){return d===u!==h}):typeof u!="string"?l.grep(s,function(d){return _.call(u,d)>-1!==h}):l.filter(u,s,h)}l.filter=function(s,u,h){var d=u[0];return h&&(s=":not("+s+")"),u.length===1&&d.nodeType===1?l.find.matchesSelector(d,s)?[d]:[]:l.find.matches(s,l.grep(u,function(m){return m.nodeType===1}))},l.fn.extend({find:function(s){var u,h,d=this.length,m=this;if(typeof s!="string")return this.pushStack(l(s).filter(function(){for(u=0;u<d;u++)if(l.contains(m[u],this))return!0}));for(h=this.pushStack([]),u=0;u<d;u++)l.find(s,m[u],h);return d>1?l.uniqueSort(h):h},filter:function(s){return this.pushStack(Ur(this,s||[],!1))},not:function(s){return this.pushStack(Ur(this,s||[],!0))},is:function(s){return!!Ur(this,typeof s=="string"&&Ai.test(s)?l(s):s||[],!1).length}});var lr,Si=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,Ci=l.fn.init=function(s,u,h){var d,m;if(!s)return this;if(h=h||lr,typeof s=="string")if(s[0]==="<"&&s[s.length-1]===">"&&s.length>=3?d=[null,s,null]:d=Si.exec(s),d&&(d[1]||!u))if(d[1]){if(u=u instanceof l?u[0]:u,l.merge(this,l.parseHTML(d[1],u&&u.nodeType?u.ownerDocument||u:J,!0)),bi.test(d[1])&&l.isPlainObject(u))for(d in u)Q(this[d])?this[d](u[d]):this.attr(d,u[d]);return this}else return m=J.getElementById(d[2]),m&&(this[0]=m,this.length=1),this;else return!u||u.jquery?(u||h).find(s):this.constructor(u).find(s);else{if(s.nodeType)return this[0]=s,this.length=1,this;if(Q(s))return h.ready!==void 0?h.ready(s):s(l)}return l.makeArray(s,this)};Ci.prototype=l.fn,lr=l(J);var Ri=/^(?:parents|prev(?:Until|All))/,Pi={children:!0,contents:!0,next:!0,prev:!0};l.fn.extend({has:function(s){var u=l(s,this),h=u.length;return this.filter(function(){for(var d=0;d<h;d++)if(l.contains(this,u[d]))return!0})},closest:function(s,u){var h,d=0,m=this.length,y=[],T=typeof s!="string"&&l(s);if(!Ai.test(s)){for(;d<m;d++)for(h=this[d];h&&h!==u;h=h.parentNode)if(h.nodeType<11&&(T?T.index(h)>-1:h.nodeType===1&&l.find.matchesSelector(h,s))){y.push(h);break}}return this.pushStack(y.length>1?l.uniqueSort(y):y)},index:function(s){return s?typeof s=="string"?_.call(l(s),this[0]):_.call(this,s.jquery?s[0]:s):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(s,u){return this.pushStack(l.uniqueSort(l.merge(this.get(),l(s,u))))},addBack:function(s){return this.add(s==null?this.prevObject:this.prevObject.filter(s))}});function ki(s,u){for(;(s=s[u])&&s.nodeType!==1;);return s}l.each({parent:function(s){var u=s.parentNode;return u&&u.nodeType!==11?u:null},parents:function(s){return xt(s,"parentNode")},parentsUntil:function(s,u,h){return xt(s,"parentNode",h)},next:function(s){return ki(s,"nextSibling")},prev:function(s){return ki(s,"previousSibling")},nextAll:function(s){return xt(s,"nextSibling")},prevAll:function(s){return xt(s,"previousSibling")},nextUntil:function(s,u,h){return xt(s,"nextSibling",h)},prevUntil:function(s,u,h){return xt(s,"previousSibling",h)},siblings:function(s){return Fs((s.parentNode||{}).firstChild,s)},children:function(s){return Fs(s.firstChild)},contents:function(s){return s.contentDocument!=null&&i(s.contentDocument)?s.contentDocument:(S(s,"template")&&(s=s.content||s),l.merge([],s.childNodes))}},function(s,u){l.fn[s]=function(h,d){var m=l.map(this,u,h);return s.slice(-5)!=="Until"&&(d=h),d&&typeof d=="string"&&(m=l.filter(d,m)),this.length>1&&(Pi[s]||l.uniqueSort(m),Ri.test(s)&&m.reverse()),this.pushStack(m)}});var bt=/[^\x20\t\r\n\f]+/g;function pa(s){var u={};return l.each(s.match(bt)||[],function(h,d){u[d]=!0}),u}l.Callbacks=function(s){s=typeof s=="string"?pa(s):l.extend({},s);var u,h,d,m,y=[],T=[],R=-1,A=function(){for(m=m||s.once,d=u=!0;T.length;R=-1)for(h=T.shift();++R<y.length;)y[R].apply(h[0],h[1])===!1&&s.stopOnFalse&&(R=y.length,h=!1);s.memory||(h=!1),u=!1,m&&(h?y=[]:y="")},N={add:function(){return y&&(h&&!u&&(R=y.length-1,T.push(h)),(function q(B){l.each(B,function(U,X){Q(X)?(!s.unique||!N.has(X))&&y.push(X):X&&X.length&&De(X)!=="string"&&q(X)})})(arguments),h&&!u&&A()),this},remove:function(){return l.each(arguments,function(q,B){for(var U;(U=l.inArray(B,y,U))>-1;)y.splice(U,1),U<=R&&R--}),this},has:function(q){return q?l.inArray(q,y)>-1:y.length>0},empty:function(){return y&&(y=[]),this},disable:function(){return m=T=[],y=h="",this},disabled:function(){return!y},lock:function(){return m=T=[],!h&&!u&&(y=h=""),this},locked:function(){return!!m},fireWith:function(q,B){return m||(B=B||[],B=[q,B.slice?B.slice():B],T.push(B),u||A()),this},fire:function(){return N.fireWith(this,arguments),this},fired:function(){return!!d}};return N};function ln(s){return s}function Rn(s){throw s}function Di(s,u,h,d){var m;try{s&&Q(m=s.promise)?m.call(s).done(u).fail(h):s&&Q(m=s.then)?m.call(s,u,h):u.apply(void 0,[s].slice(d))}catch(y){h.apply(void 0,[y])}}l.extend({Deferred:function(s){var u=[["notify","progress",l.Callbacks("memory"),l.Callbacks("memory"),2],["resolve","done",l.Callbacks("once memory"),l.Callbacks("once memory"),0,"resolved"],["reject","fail",l.Callbacks("once memory"),l.Callbacks("once memory"),1,"rejected"]],h="pending",d={state:function(){return h},always:function(){return m.done(arguments).fail(arguments),this},catch:function(y){return d.then(null,y)},pipe:function(){var y=arguments;return l.Deferred(function(T){l.each(u,function(R,A){var N=Q(y[A[4]])&&y[A[4]];m[A[1]](function(){var q=N&&N.apply(this,arguments);q&&Q(q.promise)?q.promise().progress(T.notify).done(T.resolve).fail(T.reject):T[A[0]+"With"](this,N?[q]:arguments)})}),y=null}).promise()},then:function(y,T,R){var A=0;function N(q,B,U,X){return function(){var se=this,Te=arguments,me=function(){var o,f;if(!(q<A)){if(o=U.apply(se,Te),o===B.promise())throw new TypeError("Thenable self-resolution");f=o&&(typeof o=="object"||typeof o=="function")&&o.then,Q(f)?X?f.call(o,N(A,B,ln,X),N(A,B,Rn,X)):(A++,f.call(o,N(A,B,ln,X),N(A,B,Rn,X),N(A,B,ln,B.notifyWith))):(U!==ln&&(se=void 0,Te=[o]),(X||B.resolveWith)(se,Te))}},Me=X?me:function(){try{me()}catch(o){l.Deferred.exceptionHook&&l.Deferred.exceptionHook(o,Me.error),q+1>=A&&(U!==Rn&&(se=void 0,Te=[o]),B.rejectWith(se,Te))}};q?Me():(l.Deferred.getErrorHook?Me.error=l.Deferred.getErrorHook():l.Deferred.getStackHook&&(Me.error=l.Deferred.getStackHook()),e.setTimeout(Me))}}return l.Deferred(function(q){u[0][3].add(N(0,q,Q(R)?R:ln,q.notifyWith)),u[1][3].add(N(0,q,Q(y)?y:ln)),u[2][3].add(N(0,q,Q(T)?T:Rn))}).promise()},promise:function(y){return y!=null?l.extend(y,d):d}},m={};return l.each(u,function(y,T){var R=T[2],A=T[5];d[T[1]]=R.add,A&&R.add(function(){h=A},u[3-y][2].disable,u[3-y][3].disable,u[0][2].lock,u[0][3].lock),R.add(T[3].fire),m[T[0]]=function(){return m[T[0]+"With"](this===m?void 0:this,arguments),this},m[T[0]+"With"]=R.fireWith}),d.promise(m),s&&s.call(m,m),m},when:function(s){var u=arguments.length,h=u,d=Array(h),m=a.call(arguments),y=l.Deferred(),T=function(R){return function(A){d[R]=this,m[R]=arguments.length>1?a.call(arguments):A,--u||y.resolveWith(d,m)}};if(u<=1&&(Di(s,y.done(T(h)).resolve,y.reject,!u),y.state()==="pending"||Q(m[h]&&m[h].then)))return y.then();for(;h--;)Di(m[h],T(h),y.reject);return y.promise()}});var ga=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;l.Deferred.exceptionHook=function(s,u){e.console&&e.console.warn&&s&&ga.test(s.name)&&e.console.warn("jQuery.Deferred exception: "+s.message,s.stack,u)},l.readyException=function(s){e.setTimeout(function(){throw s})};var hr=l.Deferred();l.fn.ready=function(s){return hr.then(s).catch(function(u){l.readyException(u)}),this},l.extend({isReady:!1,readyWait:1,ready:function(s){(s===!0?--l.readyWait:l.isReady)||(l.isReady=!0,!(s!==!0&&--l.readyWait>0)&&hr.resolveWith(J,[l]))}}),l.ready.then=hr.then;function Pn(){J.removeEventListener("DOMContentLoaded",Pn),e.removeEventListener("load",Pn),l.ready()}J.readyState==="complete"||J.readyState!=="loading"&&!J.documentElement.doScroll?e.setTimeout(l.ready):(J.addEventListener("DOMContentLoaded",Pn),e.addEventListener("load",Pn));var St=function(s,u,h,d,m,y,T){var R=0,A=s.length,N=h==null;if(De(h)==="object"){m=!0;for(R in h)St(s,u,R,h[R],!0,y,T)}else if(d!==void 0&&(m=!0,Q(d)||(T=!0),N&&(T?(u.call(s,d),u=null):(N=u,u=function(q,B,U){return N.call(l(q),U)})),u))for(;R<A;R++)u(s[R],h,T?d:d.call(s[R],R,u(s[R],h)));return m?s:N?u.call(s):A?u(s[0],h):y},et=/^-ms-/,rt=/-([a-z])/g;function jr(s,u){return u.toUpperCase()}function Ct(s){return s.replace(et,"ms-").replace(rt,jr)}var kn=function(s){return s.nodeType===1||s.nodeType===9||!+s.nodeType};function fr(){this.expando=l.expando+fr.uid++}fr.uid=1,fr.prototype={cache:function(s){var u=s[this.expando];return u||(u={},kn(s)&&(s.nodeType?s[this.expando]=u:Object.defineProperty(s,this.expando,{value:u,configurable:!0}))),u},set:function(s,u,h){var d,m=this.cache(s);if(typeof u=="string")m[Ct(u)]=h;else for(d in u)m[Ct(d)]=u[d];return m},get:function(s,u){return u===void 0?this.cache(s):s[this.expando]&&s[this.expando][Ct(u)]},access:function(s,u,h){return u===void 0||u&&typeof u=="string"&&h===void 0?this.get(s,u):(this.set(s,u,h),h!==void 0?h:u)},remove:function(s,u){var h,d=s[this.expando];if(d!==void 0){if(u!==void 0)for(Array.isArray(u)?u=u.map(Ct):(u=Ct(u),u=u in d?[u]:u.match(bt)||[]),h=u.length;h--;)delete d[u[h]];(u===void 0||l.isEmptyObject(d))&&(s.nodeType?s[this.expando]=void 0:delete s[this.expando])}},hasData:function(s){var u=s[this.expando];return u!==void 0&&!l.isEmptyObject(u)}};var ie=new fr,it=new fr,Us=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Ni=/[A-Z]/g;function ma(s){return s==="true"?!0:s==="false"?!1:s==="null"?null:s===+s+""?+s:Us.test(s)?JSON.parse(s):s}function js(s,u,h){var d;if(h===void 0&&s.nodeType===1)if(d="data-"+u.replace(Ni,"-$&").toLowerCase(),h=s.getAttribute(d),typeof h=="string"){try{h=ma(h)}catch{}it.set(s,u,h)}else h=void 0;return h}l.extend({hasData:function(s){return it.hasData(s)||ie.hasData(s)},data:function(s,u,h){return it.access(s,u,h)},removeData:function(s,u){it.remove(s,u)},_data:function(s,u,h){return ie.access(s,u,h)},_removeData:function(s,u){ie.remove(s,u)}}),l.fn.extend({data:function(s,u){var h,d,m,y=this[0],T=y&&y.attributes;if(s===void 0){if(this.length&&(m=it.get(y),y.nodeType===1&&!ie.get(y,"hasDataAttrs"))){for(h=T.length;h--;)T[h]&&(d=T[h].name,d.indexOf("data-")===0&&(d=Ct(d.slice(5)),js(y,d,m[d])));ie.set(y,"hasDataAttrs",!0)}return m}return typeof s=="object"?this.each(function(){it.set(this,s)}):St(this,function(R){var A;if(y&&R===void 0)return A=it.get(y,s),A!==void 0||(A=js(y,s),A!==void 0)?A:void 0;this.each(function(){it.set(this,s,R)})},null,u,arguments.length>1,null,!0)},removeData:function(s){return this.each(function(){it.remove(this,s)})}}),l.extend({queue:function(s,u,h){var d;if(s)return u=(u||"fx")+"queue",d=ie.get(s,u),h&&(!d||Array.isArray(h)?d=ie.access(s,u,l.makeArray(h)):d.push(h)),d||[]},dequeue:function(s,u){u=u||"fx";var h=l.queue(s,u),d=h.length,m=h.shift(),y=l._queueHooks(s,u),T=function(){l.dequeue(s,u)};m==="inprogress"&&(m=h.shift(),d--),m&&(u==="fx"&&h.unshift("inprogress"),delete y.stop,m.call(s,T,y)),!d&&y&&y.empty.fire()},_queueHooks:function(s,u){var h=u+"queueHooks";return ie.get(s,h)||ie.access(s,h,{empty:l.Callbacks("once memory").add(function(){ie.remove(s,[u+"queue",h])})})}}),l.fn.extend({queue:function(s,u){var h=2;return typeof s!="string"&&(u=s,s="fx",h--),arguments.length<h?l.queue(this[0],s):u===void 0?this:this.each(function(){var d=l.queue(this,s,u);l._queueHooks(this,s),s==="fx"&&d[0]!=="inprogress"&&l.dequeue(this,s)})},dequeue:function(s){return this.each(function(){l.dequeue(this,s)})},clearQueue:function(s){return this.queue(s||"fx",[])},promise:function(s,u){var h,d=1,m=l.Deferred(),y=this,T=this.length,R=function(){--d||m.resolveWith(y,[y])};for(typeof s!="string"&&(u=s,s=void 0),s=s||"fx";T--;)h=ie.get(y[T],s+"queueHooks"),h&&h.empty&&(d++,h.empty.add(R));return R(),m.promise(u)}});var xi=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Dn=new RegExp("^(?:([+-])=|)("+xi+")([a-z%]*)$","i"),mt=["Top","Right","Bottom","Left"],Vt=J.documentElement,$t=function(s){return l.contains(s.ownerDocument,s)},hn={composed:!0};Vt.getRootNode&&($t=function(s){return l.contains(s.ownerDocument,s)||s.getRootNode(hn)===s.ownerDocument});var dr=function(s,u){return s=u||s,s.style.display==="none"||s.style.display===""&&$t(s)&&l.css(s,"display")==="none"};function pr(s,u,h,d){var m,y,T=20,R=d?function(){return d.cur()}:function(){return l.css(s,u,"")},A=R(),N=h&&h[3]||(l.cssNumber[u]?"":"px"),q=s.nodeType&&(l.cssNumber[u]||N!=="px"&&+A)&&Dn.exec(l.css(s,u));if(q&&q[3]!==N){for(A=A/2,N=N||q[3],q=+A||1;T--;)l.style(s,u,q+N),(1-y)*(1-(y=R()/A||.5))<=0&&(T=0),q=q/y;q=q*2,l.style(s,u,q+N),h=h||[]}return h&&(q=+q||+A||0,m=h[1]?q+(h[1]+1)*h[2]:+h[2],d&&(d.unit=N,d.start=q,d.end=m)),m}var Vi={};function gr(s){var u,h=s.ownerDocument,d=s.nodeName,m=Vi[d];return m||(u=h.body.appendChild(h.createElement(d)),m=l.css(u,"display"),u.parentNode.removeChild(u),m==="none"&&(m="block"),Vi[d]=m,m)}function fn(s,u){for(var h,d,m=[],y=0,T=s.length;y<T;y++)d=s[y],d.style&&(h=d.style.display,u?(h==="none"&&(m[y]=ie.get(d,"display")||null,m[y]||(d.style.display="")),d.style.display===""&&dr(d)&&(m[y]=gr(d))):h!=="none"&&(m[y]="none",ie.set(d,"display",h)));for(y=0;y<T;y++)m[y]!=null&&(s[y].style.display=m[y]);return s}l.fn.extend({show:function(){return fn(this,!0)},hide:function(){return fn(this)},toggle:function(s){return typeof s=="boolean"?s?this.show():this.hide():this.each(function(){dr(this)?l(this).show():l(this).hide()})}});var Be=/^(?:checkbox|radio)$/i,Oi=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,Nn=/^$|^module$|\/(?:java|ecma)script/i;(function(){var s=J.createDocumentFragment(),u=s.appendChild(J.createElement("div")),h=J.createElement("input");h.setAttribute("type","radio"),h.setAttribute("checked","checked"),h.setAttribute("name","t"),u.appendChild(h),W.checkClone=u.cloneNode(!0).cloneNode(!0).lastChild.checked,u.innerHTML="<textarea>x</textarea>",W.noCloneChecked=!!u.cloneNode(!0).lastChild.defaultValue,u.innerHTML="<option></option>",W.option=!!u.lastChild})();var tt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};tt.tbody=tt.tfoot=tt.colgroup=tt.caption=tt.thead,tt.th=tt.td,W.option||(tt.optgroup=tt.option=[1,"<select multiple='multiple'>","</select>"]);function ct(s,u){var h;return typeof s.getElementsByTagName<"u"?h=s.getElementsByTagName(u||"*"):typeof s.querySelectorAll<"u"?h=s.querySelectorAll(u||"*"):h=[],u===void 0||u&&S(s,u)?l.merge([s],h):h}function Li(s,u){for(var h=0,d=s.length;h<d;h++)ie.set(s[h],"globalEval",!u||ie.get(u[h],"globalEval"))}var xn=/<|&#?\w+;/;function qs(s,u,h,d,m){for(var y,T,R,A,N,q,B=u.createDocumentFragment(),U=[],X=0,se=s.length;X<se;X++)if(y=s[X],y||y===0)if(De(y)==="object")l.merge(U,y.nodeType?[y]:y);else if(!xn.test(y))U.push(u.createTextNode(y));else{for(T=T||B.appendChild(u.createElement("div")),R=(Oi.exec(y)||["",""])[1].toLowerCase(),A=tt[R]||tt._default,T.innerHTML=A[1]+l.htmlPrefilter(y)+A[2],q=A[0];q--;)T=T.lastChild;l.merge(U,T.childNodes),T=B.firstChild,T.textContent=""}for(B.textContent="",X=0;y=U[X++];){if(d&&l.inArray(y,d)>-1){m&&m.push(y);continue}if(N=$t(y),T=ct(B.appendChild(y),"script"),N&&Li(T),h)for(q=0;y=T[q++];)Nn.test(y.type||"")&&h.push(y)}return B}var Bs=/^([^.]*)(?:\.(.+)|)/;function Ot(){return!0}function dn(){return!1}function qr(s,u,h,d,m,y){var T,R;if(typeof u=="object"){typeof h!="string"&&(d=d||h,h=void 0);for(R in u)qr(s,R,h,d,u[R],y);return s}if(d==null&&m==null?(m=h,d=h=void 0):m==null&&(typeof h=="string"?(m=d,d=void 0):(m=d,d=h,h=void 0)),m===!1)m=dn;else if(!m)return s;return y===1&&(T=m,m=function(A){return l().off(A),T.apply(this,arguments)},m.guid=T.guid||(T.guid=l.guid++)),s.each(function(){l.event.add(this,u,m,d,h)})}l.event={global:{},add:function(s,u,h,d,m){var y,T,R,A,N,q,B,U,X,se,Te,me=ie.get(s);if(kn(s))for(h.handler&&(y=h,h=y.handler,m=y.selector),m&&l.find.matchesSelector(Vt,m),h.guid||(h.guid=l.guid++),(A=me.events)||(A=me.events=Object.create(null)),(T=me.handle)||(T=me.handle=function(Me){return typeof l<"u"&&l.event.triggered!==Me.type?l.event.dispatch.apply(s,arguments):void 0}),u=(u||"").match(bt)||[""],N=u.length;N--;)R=Bs.exec(u[N])||[],X=Te=R[1],se=(R[2]||"").split(".").sort(),X&&(B=l.event.special[X]||{},X=(m?B.delegateType:B.bindType)||X,B=l.event.special[X]||{},q=l.extend({type:X,origType:Te,data:d,handler:h,guid:h.guid,selector:m,needsContext:m&&l.expr.match.needsContext.test(m),namespace:se.join(".")},y),(U=A[X])||(U=A[X]=[],U.delegateCount=0,(!B.setup||B.setup.call(s,d,se,T)===!1)&&s.addEventListener&&s.addEventListener(X,T)),B.add&&(B.add.call(s,q),q.handler.guid||(q.handler.guid=h.guid)),m?U.splice(U.delegateCount++,0,q):U.push(q),l.event.global[X]=!0)},remove:function(s,u,h,d,m){var y,T,R,A,N,q,B,U,X,se,Te,me=ie.hasData(s)&&ie.get(s);if(!(!me||!(A=me.events))){for(u=(u||"").match(bt)||[""],N=u.length;N--;){if(R=Bs.exec(u[N])||[],X=Te=R[1],se=(R[2]||"").split(".").sort(),!X){for(X in A)l.event.remove(s,X+u[N],h,d,!0);continue}for(B=l.event.special[X]||{},X=(d?B.delegateType:B.bindType)||X,U=A[X]||[],R=R[2]&&new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"),T=y=U.length;y--;)q=U[y],(m||Te===q.origType)&&(!h||h.guid===q.guid)&&(!R||R.test(q.namespace))&&(!d||d===q.selector||d==="**"&&q.selector)&&(U.splice(y,1),q.selector&&U.delegateCount--,B.remove&&B.remove.call(s,q));T&&!U.length&&((!B.teardown||B.teardown.call(s,se,me.handle)===!1)&&l.removeEvent(s,X,me.handle),delete A[X])}l.isEmptyObject(A)&&ie.remove(s,"handle events")}},dispatch:function(s){var u,h,d,m,y,T,R=new Array(arguments.length),A=l.event.fix(s),N=(ie.get(this,"events")||Object.create(null))[A.type]||[],q=l.event.special[A.type]||{};for(R[0]=A,u=1;u<arguments.length;u++)R[u]=arguments[u];if(A.delegateTarget=this,!(q.preDispatch&&q.preDispatch.call(this,A)===!1)){for(T=l.event.handlers.call(this,A,N),u=0;(m=T[u++])&&!A.isPropagationStopped();)for(A.currentTarget=m.elem,h=0;(y=m.handlers[h++])&&!A.isImmediatePropagationStopped();)(!A.rnamespace||y.namespace===!1||A.rnamespace.test(y.namespace))&&(A.handleObj=y,A.data=y.data,d=((l.event.special[y.origType]||{}).handle||y.handler).apply(m.elem,R),d!==void 0&&(A.result=d)===!1&&(A.preventDefault(),A.stopPropagation()));return q.postDispatch&&q.postDispatch.call(this,A),A.result}},handlers:function(s,u){var h,d,m,y,T,R=[],A=u.delegateCount,N=s.target;if(A&&N.nodeType&&!(s.type==="click"&&s.button>=1)){for(;N!==this;N=N.parentNode||this)if(N.nodeType===1&&!(s.type==="click"&&N.disabled===!0)){for(y=[],T={},h=0;h<A;h++)d=u[h],m=d.selector+" ",T[m]===void 0&&(T[m]=d.needsContext?l(m,this).index(N)>-1:l.find(m,this,null,[N]).length),T[m]&&y.push(d);y.length&&R.push({elem:N,handlers:y})}}return N=this,A<u.length&&R.push({elem:N,handlers:u.slice(A)}),R},addProp:function(s,u){Object.defineProperty(l.Event.prototype,s,{enumerable:!0,configurable:!0,get:Q(u)?function(){if(this.originalEvent)return u(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[s]},set:function(h){Object.defineProperty(this,s,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(s){return s[l.expando]?s:new l.Event(s)},special:{load:{noBubble:!0},click:{setup:function(s){var u=this||s;return Be.test(u.type)&&u.click&&S(u,"input")&&Vn(u,"click",!0),!1},trigger:function(s){var u=this||s;return Be.test(u.type)&&u.click&&S(u,"input")&&Vn(u,"click"),!0},_default:function(s){var u=s.target;return Be.test(u.type)&&u.click&&S(u,"input")&&ie.get(u,"click")||S(u,"a")}},beforeunload:{postDispatch:function(s){s.result!==void 0&&s.originalEvent&&(s.originalEvent.returnValue=s.result)}}}};function Vn(s,u,h){if(!h){ie.get(s,u)===void 0&&l.event.add(s,u,Ot);return}ie.set(s,u,!1),l.event.add(s,u,{namespace:!1,handler:function(d){var m,y=ie.get(this,u);if(d.isTrigger&1&&this[u]){if(y)(l.event.special[u]||{}).delegateType&&d.stopPropagation();else if(y=a.call(arguments),ie.set(this,u,y),this[u](),m=ie.get(this,u),ie.set(this,u,!1),y!==m)return d.stopImmediatePropagation(),d.preventDefault(),m}else y&&(ie.set(this,u,l.event.trigger(y[0],y.slice(1),this)),d.stopPropagation(),d.isImmediatePropagationStopped=Ot)}})}l.removeEvent=function(s,u,h){s.removeEventListener&&s.removeEventListener(u,h)},l.Event=function(s,u){if(!(this instanceof l.Event))return new l.Event(s,u);s&&s.type?(this.originalEvent=s,this.type=s.type,this.isDefaultPrevented=s.defaultPrevented||s.defaultPrevented===void 0&&s.returnValue===!1?Ot:dn,this.target=s.target&&s.target.nodeType===3?s.target.parentNode:s.target,this.currentTarget=s.currentTarget,this.relatedTarget=s.relatedTarget):this.type=s,u&&l.extend(this,u),this.timeStamp=s&&s.timeStamp||Date.now(),this[l.expando]=!0},l.Event.prototype={constructor:l.Event,isDefaultPrevented:dn,isPropagationStopped:dn,isImmediatePropagationStopped:dn,isSimulated:!1,preventDefault:function(){var s=this.originalEvent;this.isDefaultPrevented=Ot,s&&!this.isSimulated&&s.preventDefault()},stopPropagation:function(){var s=this.originalEvent;this.isPropagationStopped=Ot,s&&!this.isSimulated&&s.stopPropagation()},stopImmediatePropagation:function(){var s=this.originalEvent;this.isImmediatePropagationStopped=Ot,s&&!this.isSimulated&&s.stopImmediatePropagation(),this.stopPropagation()}},l.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},l.event.addProp),l.each({focus:"focusin",blur:"focusout"},function(s,u){function h(d){if(J.documentMode){var m=ie.get(this,"handle"),y=l.event.fix(d);y.type=d.type==="focusin"?"focus":"blur",y.isSimulated=!0,m(d),y.target===y.currentTarget&&m(y)}else l.event.simulate(u,d.target,l.event.fix(d))}l.event.special[s]={setup:function(){var d;if(Vn(this,s,!0),J.documentMode)d=ie.get(this,u),d||this.addEventListener(u,h),ie.set(this,u,(d||0)+1);else return!1},trigger:function(){return Vn(this,s),!0},teardown:function(){var d;if(J.documentMode)d=ie.get(this,u)-1,d?ie.set(this,u,d):(this.removeEventListener(u,h),ie.remove(this,u));else return!1},_default:function(d){return ie.get(d.target,s)},delegateType:u},l.event.special[u]={setup:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u);y||(J.documentMode?this.addEventListener(u,h):d.addEventListener(s,h,!0)),ie.set(m,u,(y||0)+1)},teardown:function(){var d=this.ownerDocument||this.document||this,m=J.documentMode?this:d,y=ie.get(m,u)-1;y?ie.set(m,u,y):(J.documentMode?this.removeEventListener(u,h):d.removeEventListener(s,h,!0),ie.remove(m,u))}}}),l.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(s,u){l.event.special[s]={delegateType:u,bindType:u,handle:function(h){var d,m=this,y=h.relatedTarget,T=h.handleObj;return(!y||y!==m&&!l.contains(m,y))&&(h.type=T.origType,d=T.handler.apply(this,arguments),h.type=u),d}}}),l.fn.extend({on:function(s,u,h,d){return qr(this,s,u,h,d)},one:function(s,u,h,d){return qr(this,s,u,h,d,1)},off:function(s,u,h){var d,m;if(s&&s.preventDefault&&s.handleObj)return d=s.handleObj,l(s.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if(typeof s=="object"){for(m in s)this.off(m,u,s[m]);return this}return(u===!1||typeof u=="function")&&(h=u,u=void 0),h===!1&&(h=dn),this.each(function(){l.event.remove(this,s,h,u)})}});var mr=/<script|<style|<link/i,ya=/checked\s*(?:[^=]|=\s*.checked.)/i,Ht=/^\s*<!\[CDATA\[|\]\]>\s*$/g;function Mi(s,u){return S(s,"table")&&S(u.nodeType!==11?u:u.firstChild,"tr")&&l(s).children("tbody")[0]||s}function $s(s){return s.type=(s.getAttribute("type")!==null)+"/"+s.type,s}function Fi(s){return(s.type||"").slice(0,5)==="true/"?s.type=s.type.slice(5):s.removeAttribute("type"),s}function Br(s,u){var h,d,m,y,T,R,A;if(u.nodeType===1){if(ie.hasData(s)&&(y=ie.get(s),A=y.events,A)){ie.remove(u,"handle events");for(m in A)for(h=0,d=A[m].length;h<d;h++)l.event.add(u,m,A[m][h])}it.hasData(s)&&(T=it.access(s),R=l.extend({},T),it.set(u,R))}}function Hs(s,u){var h=u.nodeName.toLowerCase();h==="input"&&Be.test(s.type)?u.checked=s.checked:(h==="input"||h==="textarea")&&(u.defaultValue=s.defaultValue)}function On(s,u,h,d){u=c(u);var m,y,T,R,A,N,q=0,B=s.length,U=B-1,X=u[0],se=Q(X);if(se||B>1&&typeof X=="string"&&!W.checkClone&&ya.test(X))return s.each(function(Te){var me=s.eq(Te);se&&(u[0]=X.call(this,Te,me.html())),On(me,u,h,d)});if(B&&(m=qs(u,s[0].ownerDocument,!1,s,d),y=m.firstChild,m.childNodes.length===1&&(m=y),y||d)){for(T=l.map(ct(m,"script"),$s),R=T.length;q<B;q++)A=m,q!==U&&(A=l.clone(A,!0,!0),R&&l.merge(T,ct(A,"script"))),h.call(s[q],A,q);if(R)for(N=T[T.length-1].ownerDocument,l.map(T,Fi),q=0;q<R;q++)A=T[q],Nn.test(A.type||"")&&!ie.access(A,"globalEval")&&l.contains(N,A)&&(A.src&&(A.type||"").toLowerCase()!=="module"?l._evalUrl&&!A.noModule&&l._evalUrl(A.src,{nonce:A.nonce||A.getAttribute("nonce")},N):ve(A.textContent.replace(Ht,""),A,N))}return s}function Ui(s,u,h){for(var d,m=u?l.filter(u,s):s,y=0;(d=m[y])!=null;y++)!h&&d.nodeType===1&&l.cleanData(ct(d)),d.parentNode&&(h&&$t(d)&&Li(ct(d,"script")),d.parentNode.removeChild(d));return s}l.extend({htmlPrefilter:function(s){return s},clone:function(s,u,h){var d,m,y,T,R=s.cloneNode(!0),A=$t(s);if(!W.noCloneChecked&&(s.nodeType===1||s.nodeType===11)&&!l.isXMLDoc(s))for(T=ct(R),y=ct(s),d=0,m=y.length;d<m;d++)Hs(y[d],T[d]);if(u)if(h)for(y=y||ct(s),T=T||ct(R),d=0,m=y.length;d<m;d++)Br(y[d],T[d]);else Br(s,R);return T=ct(R,"script"),T.length>0&&Li(T,!A&&ct(s,"script")),R},cleanData:function(s){for(var u,h,d,m=l.event.special,y=0;(h=s[y])!==void 0;y++)if(kn(h)){if(u=h[ie.expando]){if(u.events)for(d in u.events)m[d]?l.event.remove(h,d):l.removeEvent(h,d,u.handle);h[ie.expando]=void 0}h[it.expando]&&(h[it.expando]=void 0)}}}),l.fn.extend({detach:function(s){return Ui(this,s,!0)},remove:function(s){return Ui(this,s)},text:function(s){return St(this,function(u){return u===void 0?l.text(this):this.empty().each(function(){(this.nodeType===1||this.nodeType===11||this.nodeType===9)&&(this.textContent=u)})},null,s,arguments.length)},append:function(){return On(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Mi(this,s);u.appendChild(s)}})},prepend:function(){return On(this,arguments,function(s){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var u=Mi(this,s);u.insertBefore(s,u.firstChild)}})},before:function(){return On(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this)})},after:function(){return On(this,arguments,function(s){this.parentNode&&this.parentNode.insertBefore(s,this.nextSibling)})},empty:function(){for(var s,u=0;(s=this[u])!=null;u++)s.nodeType===1&&(l.cleanData(ct(s,!1)),s.textContent="");return this},clone:function(s,u){return s=s??!1,u=u??s,this.map(function(){return l.clone(this,s,u)})},html:function(s){return St(this,function(u){var h=this[0]||{},d=0,m=this.length;if(u===void 0&&h.nodeType===1)return h.innerHTML;if(typeof u=="string"&&!mr.test(u)&&!tt[(Oi.exec(u)||["",""])[1].toLowerCase()]){u=l.htmlPrefilter(u);try{for(;d<m;d++)h=this[d]||{},h.nodeType===1&&(l.cleanData(ct(h,!1)),h.innerHTML=u);h=0}catch{}}h&&this.empty().append(u)},null,s,arguments.length)},replaceWith:function(){var s=[];return On(this,arguments,function(u){var h=this.parentNode;l.inArray(this,s)<0&&(l.cleanData(ct(this)),h&&h.replaceChild(u,this))},s)}}),l.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(s,u){l.fn[s]=function(h){for(var d,m=[],y=l(h),T=y.length-1,R=0;R<=T;R++)d=R===T?this:this.clone(!0),l(y[R])[u](d),p.apply(m,d.get());return this.pushStack(m)}});var ji=new RegExp("^("+xi+")(?!px)[a-z%]+$","i"),Ln=/^--/,yr=function(s){var u=s.ownerDocument.defaultView;return(!u||!u.opener)&&(u=e),u.getComputedStyle(s)},$r=function(s,u,h){var d,m,y={};for(m in u)y[m]=s.style[m],s.style[m]=u[m];d=h.call(s);for(m in u)s.style[m]=y[m];return d},_r=new RegExp(mt.join("|"),"i");(function(){function s(){if(N){A.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",N.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",Vt.appendChild(A).appendChild(N);var q=e.getComputedStyle(N);h=q.top!=="1%",R=u(q.marginLeft)===12,N.style.right="60%",y=u(q.right)===36,d=u(q.width)===36,N.style.position="absolute",m=u(N.offsetWidth/3)===12,Vt.removeChild(A),N=null}}function u(q){return Math.round(parseFloat(q))}var h,d,m,y,T,R,A=J.createElement("div"),N=J.createElement("div");N.style&&(N.style.backgroundClip="content-box",N.cloneNode(!0).style.backgroundClip="",W.clearCloneStyle=N.style.backgroundClip==="content-box",l.extend(W,{boxSizingReliable:function(){return s(),d},pixelBoxStyles:function(){return s(),y},pixelPosition:function(){return s(),h},reliableMarginLeft:function(){return s(),R},scrollboxSize:function(){return s(),m},reliableTrDimensions:function(){var q,B,U,X;return T==null&&(q=J.createElement("table"),B=J.createElement("tr"),U=J.createElement("div"),q.style.cssText="position:absolute;left:-11111px;border-collapse:separate",B.style.cssText="box-sizing:content-box;border:1px solid",B.style.height="1px",U.style.height="9px",U.style.display="block",Vt.appendChild(q).appendChild(B).appendChild(U),X=e.getComputedStyle(B),T=parseInt(X.height,10)+parseInt(X.borderTopWidth,10)+parseInt(X.borderBottomWidth,10)===B.offsetHeight,Vt.removeChild(q)),T}}))})();function Et(s,u,h){var d,m,y,T,R=Ln.test(u),A=s.style;return h=h||yr(s),h&&(T=h.getPropertyValue(u)||h[u],R&&T&&(T=T.replace(Ge,"$1")||void 0),T===""&&!$t(s)&&(T=l.style(s,u)),!W.pixelBoxStyles()&&ji.test(T)&&_r.test(u)&&(d=A.width,m=A.minWidth,y=A.maxWidth,A.minWidth=A.maxWidth=A.width=T,T=h.width,A.width=d,A.minWidth=m,A.maxWidth=y)),T!==void 0?T+"":T}function Hr(s,u){return{get:function(){if(s()){delete this.get;return}return(this.get=u).apply(this,arguments)}}}var Ws=["Webkit","Moz","ms"],qi=J.createElement("div").style,Bi={};function zs(s){for(var u=s[0].toUpperCase()+s.slice(1),h=Ws.length;h--;)if(s=Ws[h]+u,s in qi)return s}function vr(s){var u=l.cssProps[s]||Bi[s];return u||(s in qi?s:Bi[s]=zs(s)||s)}var $i=/^(none|table(?!-c[ea]).+)/,Gs={position:"absolute",visibility:"hidden",display:"block"},Hi={letterSpacing:"0",fontWeight:"400"};function Wi(s,u,h){var d=Dn.exec(u);return d?Math.max(0,d[2]-(h||0))+(d[3]||"px"):u}function zi(s,u,h,d,m,y){var T=u==="width"?1:0,R=0,A=0,N=0;if(h===(d?"border":"content"))return 0;for(;T<4;T+=2)h==="margin"&&(N+=l.css(s,h+mt[T],!0,m)),d?(h==="content"&&(A-=l.css(s,"padding"+mt[T],!0,m)),h!=="margin"&&(A-=l.css(s,"border"+mt[T]+"Width",!0,m))):(A+=l.css(s,"padding"+mt[T],!0,m),h!=="padding"?A+=l.css(s,"border"+mt[T]+"Width",!0,m):R+=l.css(s,"border"+mt[T]+"Width",!0,m));return!d&&y>=0&&(A+=Math.max(0,Math.ceil(s["offset"+u[0].toUpperCase()+u.slice(1)]-y-A-R-.5))||0),A+N}function Lt(s,u,h){var d=yr(s),m=!W.boxSizingReliable()||h,y=m&&l.css(s,"boxSizing",!1,d)==="border-box",T=y,R=Et(s,u,d),A="offset"+u[0].toUpperCase()+u.slice(1);if(ji.test(R)){if(!h)return R;R="auto"}return(!W.boxSizingReliable()&&y||!W.reliableTrDimensions()&&S(s,"tr")||R==="auto"||!parseFloat(R)&&l.css(s,"display",!1,d)==="inline")&&s.getClientRects().length&&(y=l.css(s,"boxSizing",!1,d)==="border-box",T=A in s,T&&(R=s[A])),R=parseFloat(R)||0,R+zi(s,u,h||(y?"border":"content"),T,d,R)+"px"}l.extend({cssHooks:{opacity:{get:function(s,u){if(u){var h=Et(s,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,aspectRatio:!0,borderImageSlice:!0,columnCount:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,scale:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeMiterlimit:!0,strokeOpacity:!0},cssProps:{},style:function(s,u,h,d){if(!(!s||s.nodeType===3||s.nodeType===8||!s.style)){var m,y,T,R=Ct(u),A=Ln.test(u),N=s.style;if(A||(u=vr(R)),T=l.cssHooks[u]||l.cssHooks[R],h!==void 0){if(y=typeof h,y==="string"&&(m=Dn.exec(h))&&m[1]&&(h=pr(s,u,m),y="number"),h==null||h!==h)return;y==="number"&&!A&&(h+=m&&m[3]||(l.cssNumber[R]?"":"px")),!W.clearCloneStyle&&h===""&&u.indexOf("background")===0&&(N[u]="inherit"),(!T||!("set"in T)||(h=T.set(s,h,d))!==void 0)&&(A?N.setProperty(u,h):N[u]=h)}else return T&&"get"in T&&(m=T.get(s,!1,d))!==void 0?m:N[u]}},css:function(s,u,h,d){var m,y,T,R=Ct(u),A=Ln.test(u);return A||(u=vr(R)),T=l.cssHooks[u]||l.cssHooks[R],T&&"get"in T&&(m=T.get(s,!0,h)),m===void 0&&(m=Et(s,u,d)),m==="normal"&&u in Hi&&(m=Hi[u]),h===""||h?(y=parseFloat(m),h===!0||isFinite(y)?y||0:m):m}}),l.each(["height","width"],function(s,u){l.cssHooks[u]={get:function(h,d,m){if(d)return $i.test(l.css(h,"display"))&&(!h.getClientRects().length||!h.getBoundingClientRect().width)?$r(h,Gs,function(){return Lt(h,u,m)}):Lt(h,u,m)},set:function(h,d,m){var y,T=yr(h),R=!W.scrollboxSize()&&T.position==="absolute",A=R||m,N=A&&l.css(h,"boxSizing",!1,T)==="border-box",q=m?zi(h,u,m,N,T):0;return N&&R&&(q-=Math.ceil(h["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(T[u])-zi(h,u,"border",!1,T)-.5)),q&&(y=Dn.exec(d))&&(y[3]||"px")!=="px"&&(h.style[u]=d,d=l.css(h,u)),Wi(h,d,q)}}}),l.cssHooks.marginLeft=Hr(W.reliableMarginLeft,function(s,u){if(u)return(parseFloat(Et(s,"marginLeft"))||s.getBoundingClientRect().left-$r(s,{marginLeft:0},function(){return s.getBoundingClientRect().left}))+"px"}),l.each({margin:"",padding:"",border:"Width"},function(s,u){l.cssHooks[s+u]={expand:function(h){for(var d=0,m={},y=typeof h=="string"?h.split(" "):[h];d<4;d++)m[s+mt[d]+u]=y[d]||y[d-2]||y[0];return m}},s!=="margin"&&(l.cssHooks[s+u].set=Wi)}),l.fn.extend({css:function(s,u){return St(this,function(h,d,m){var y,T,R={},A=0;if(Array.isArray(d)){for(y=yr(h),T=d.length;A<T;A++)R[d[A]]=l.css(h,d[A],!1,y);return R}return m!==void 0?l.style(h,d,m):l.css(h,d)},s,u,arguments.length>1)}});function Ve(s,u,h,d,m){return new Ve.prototype.init(s,u,h,d,m)}l.Tween=Ve,Ve.prototype={constructor:Ve,init:function(s,u,h,d,m,y){this.elem=s,this.prop=h,this.easing=m||l.easing._default,this.options=u,this.start=this.now=this.cur(),this.end=d,this.unit=y||(l.cssNumber[h]?"":"px")},cur:function(){var s=Ve.propHooks[this.prop];return s&&s.get?s.get(this):Ve.propHooks._default.get(this)},run:function(s){var u,h=Ve.propHooks[this.prop];return this.options.duration?this.pos=u=l.easing[this.easing](s,this.options.duration*s,0,1,this.options.duration):this.pos=u=s,this.now=(this.end-this.start)*u+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):Ve.propHooks._default.set(this),this}},Ve.prototype.init.prototype=Ve.prototype,Ve.propHooks={_default:{get:function(s){var u;return s.elem.nodeType!==1||s.elem[s.prop]!=null&&s.elem.style[s.prop]==null?s.elem[s.prop]:(u=l.css(s.elem,s.prop,""),!u||u==="auto"?0:u)},set:function(s){l.fx.step[s.prop]?l.fx.step[s.prop](s):s.elem.nodeType===1&&(l.cssHooks[s.prop]||s.elem.style[vr(s.prop)]!=null)?l.style(s.elem,s.prop,s.now+s.unit):s.elem[s.prop]=s.now}}},Ve.propHooks.scrollTop=Ve.propHooks.scrollLeft={set:function(s){s.elem.nodeType&&s.elem.parentNode&&(s.elem[s.prop]=s.now)}},l.easing={linear:function(s){return s},swing:function(s){return .5-Math.cos(s*Math.PI)/2},_default:"swing"},l.fx=Ve.prototype.init,l.fx.step={};var Rt,Wt,Gi=/^(?:toggle|show|hide)$/,ke=/queueHooks$/;function Mn(){Wt&&(J.hidden===!1&&e.requestAnimationFrame?e.requestAnimationFrame(Mn):e.setTimeout(Mn,l.fx.interval),l.fx.tick())}function Fn(){return e.setTimeout(function(){Rt=void 0}),Rt=Date.now()}function zt(s,u){var h,d=0,m={height:s};for(u=u?1:0;d<4;d+=2-u)h=mt[d],m["margin"+h]=m["padding"+h]=s;return u&&(m.opacity=m.width=s),m}function Ks(s,u,h){for(var d,m=(wt.tweeners[u]||[]).concat(wt.tweeners["*"]),y=0,T=m.length;y<T;y++)if(d=m[y].call(h,u,s))return d}function Qs(s,u,h){var d,m,y,T,R,A,N,q,B="width"in u||"height"in u,U=this,X={},se=s.style,Te=s.nodeType&&dr(s),me=ie.get(s,"fxshow");h.queue||(T=l._queueHooks(s,"fx"),T.unqueued==null&&(T.unqueued=0,R=T.empty.fire,T.empty.fire=function(){T.unqueued||R()}),T.unqueued++,U.always(function(){U.always(function(){T.unqueued--,l.queue(s,"fx").length||T.empty.fire()})}));for(d in u)if(m=u[d],Gi.test(m)){if(delete u[d],y=y||m==="toggle",m===(Te?"hide":"show"))if(m==="show"&&me&&me[d]!==void 0)Te=!0;else continue;X[d]=me&&me[d]||l.style(s,d)}if(A=!l.isEmptyObject(u),!(!A&&l.isEmptyObject(X))){B&&s.nodeType===1&&(h.overflow=[se.overflow,se.overflowX,se.overflowY],N=me&&me.display,N==null&&(N=ie.get(s,"display")),q=l.css(s,"display"),q==="none"&&(N?q=N:(fn([s],!0),N=s.style.display||N,q=l.css(s,"display"),fn([s]))),(q==="inline"||q==="inline-block"&&N!=null)&&l.css(s,"float")==="none"&&(A||(U.done(function(){se.display=N}),N==null&&(q=se.display,N=q==="none"?"":q)),se.display="inline-block")),h.overflow&&(se.overflow="hidden",U.always(function(){se.overflow=h.overflow[0],se.overflowX=h.overflow[1],se.overflowY=h.overflow[2]})),A=!1;for(d in X)A||(me?"hidden"in me&&(Te=me.hidden):me=ie.access(s,"fxshow",{display:N}),y&&(me.hidden=!Te),Te&&fn([s],!0),U.done(function(){Te||fn([s]),ie.remove(s,"fxshow");for(d in X)l.style(s,d,X[d])})),A=Ks(Te?me[d]:0,d,U),d in me||(me[d]=A.start,Te&&(A.end=A.start,A.start=0))}}function _a(s,u){var h,d,m,y,T;for(h in s)if(d=Ct(h),m=u[d],y=s[h],Array.isArray(y)&&(m=y[1],y=s[h]=y[0]),h!==d&&(s[d]=y,delete s[h]),T=l.cssHooks[d],T&&"expand"in T){y=T.expand(y),delete s[d];for(h in y)h in s||(s[h]=y[h],u[h]=m)}else u[d]=m}function wt(s,u,h){var d,m,y=0,T=wt.prefilters.length,R=l.Deferred().always(function(){delete A.elem}),A=function(){if(m)return!1;for(var B=Rt||Fn(),U=Math.max(0,N.startTime+N.duration-B),X=U/N.duration||0,se=1-X,Te=0,me=N.tweens.length;Te<me;Te++)N.tweens[Te].run(se);return R.notifyWith(s,[N,se,U]),se<1&&me?U:(me||R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N]),!1)},N=R.promise({elem:s,props:l.extend({},u),opts:l.extend(!0,{specialEasing:{},easing:l.easing._default},h),originalProperties:u,originalOptions:h,startTime:Rt||Fn(),duration:h.duration,tweens:[],createTween:function(B,U){var X=l.Tween(s,N.opts,B,U,N.opts.specialEasing[B]||N.opts.easing);return N.tweens.push(X),X},stop:function(B){var U=0,X=B?N.tweens.length:0;if(m)return this;for(m=!0;U<X;U++)N.tweens[U].run(1);return B?(R.notifyWith(s,[N,1,0]),R.resolveWith(s,[N,B])):R.rejectWith(s,[N,B]),this}}),q=N.props;for(_a(q,N.opts.specialEasing);y<T;y++)if(d=wt.prefilters[y].call(N,s,q,N.opts),d)return Q(d.stop)&&(l._queueHooks(N.elem,N.opts.queue).stop=d.stop.bind(d)),d;return l.map(q,Ks,N),Q(N.opts.start)&&N.opts.start.call(s,N),N.progress(N.opts.progress).done(N.opts.done,N.opts.complete).fail(N.opts.fail).always(N.opts.always),l.fx.timer(l.extend(A,{elem:s,anim:N,queue:N.opts.queue})),N}l.Animation=l.extend(wt,{tweeners:{"*":[function(s,u){var h=this.createTween(s,u);return pr(h.elem,s,Dn.exec(u),h),h}]},tweener:function(s,u){Q(s)?(u=s,s=["*"]):s=s.match(bt);for(var h,d=0,m=s.length;d<m;d++)h=s[d],wt.tweeners[h]=wt.tweeners[h]||[],wt.tweeners[h].unshift(u)},prefilters:[Qs],prefilter:function(s,u){u?wt.prefilters.unshift(s):wt.prefilters.push(s)}}),l.speed=function(s,u,h){var d=s&&typeof s=="object"?l.extend({},s):{complete:h||!h&&u||Q(s)&&s,duration:s,easing:h&&u||u&&!Q(u)&&u};return l.fx.off?d.duration=0:typeof d.duration!="number"&&(d.duration in l.fx.speeds?d.duration=l.fx.speeds[d.duration]:d.duration=l.fx.speeds._default),(d.queue==null||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){Q(d.old)&&d.old.call(this),d.queue&&l.dequeue(this,d.queue)},d},l.fn.extend({fadeTo:function(s,u,h,d){return this.filter(dr).css("opacity",0).show().end().animate({opacity:u},s,h,d)},animate:function(s,u,h,d){var m=l.isEmptyObject(s),y=l.speed(u,h,d),T=function(){var R=wt(this,l.extend({},s),y);(m||ie.get(this,"finish"))&&R.stop(!0)};return T.finish=T,m||y.queue===!1?this.each(T):this.queue(y.queue,T)},stop:function(s,u,h){var d=function(m){var y=m.stop;delete m.stop,y(h)};return typeof s!="string"&&(h=u,u=s,s=void 0),u&&this.queue(s||"fx",[]),this.each(function(){var m=!0,y=s!=null&&s+"queueHooks",T=l.timers,R=ie.get(this);if(y)R[y]&&R[y].stop&&d(R[y]);else for(y in R)R[y]&&R[y].stop&&ke.test(y)&&d(R[y]);for(y=T.length;y--;)T[y].elem===this&&(s==null||T[y].queue===s)&&(T[y].anim.stop(h),m=!1,T.splice(y,1));(m||!h)&&l.dequeue(this,s)})},finish:function(s){return s!==!1&&(s=s||"fx"),this.each(function(){var u,h=ie.get(this),d=h[s+"queue"],m=h[s+"queueHooks"],y=l.timers,T=d?d.length:0;for(h.finish=!0,l.queue(this,s,[]),m&&m.stop&&m.stop.call(this,!0),u=y.length;u--;)y[u].elem===this&&y[u].queue===s&&(y[u].anim.stop(!0),y.splice(u,1));for(u=0;u<T;u++)d[u]&&d[u].finish&&d[u].finish.call(this);delete h.finish})}}),l.each(["toggle","show","hide"],function(s,u){var h=l.fn[u];l.fn[u]=function(d,m,y){return d==null||typeof d=="boolean"?h.apply(this,arguments):this.animate(zt(u,!0),d,m,y)}}),l.each({slideDown:zt("show"),slideUp:zt("hide"),slideToggle:zt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(s,u){l.fn[s]=function(h,d,m){return this.animate(u,h,d,m)}}),l.timers=[],l.fx.tick=function(){var s,u=0,h=l.timers;for(Rt=Date.now();u<h.length;u++)s=h[u],!s()&&h[u]===s&&h.splice(u--,1);h.length||l.fx.stop(),Rt=void 0},l.fx.timer=function(s){l.timers.push(s),l.fx.start()},l.fx.interval=13,l.fx.start=function(){Wt||(Wt=!0,Mn())},l.fx.stop=function(){Wt=null},l.fx.speeds={slow:600,fast:200,_default:400},l.fn.delay=function(s,u){return s=l.fx&&l.fx.speeds[s]||s,u=u||"fx",this.queue(u,function(h,d){var m=e.setTimeout(h,s);d.stop=function(){e.clearTimeout(m)}})},(function(){var s=J.createElement("input"),u=J.createElement("select"),h=u.appendChild(J.createElement("option"));s.type="checkbox",W.checkOn=s.value!=="",W.optSelected=h.selected,s=J.createElement("input"),s.value="t",s.type="radio",W.radioValue=s.value==="t"})();var Xs,Tr=l.expr.attrHandle;l.fn.extend({attr:function(s,u){return St(this,l.attr,s,u,arguments.length>1)},removeAttr:function(s){return this.each(function(){l.removeAttr(this,s)})}}),l.extend({attr:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2)){if(typeof s.getAttribute>"u")return l.prop(s,u,h);if((y!==1||!l.isXMLDoc(s))&&(m=l.attrHooks[u.toLowerCase()]||(l.expr.match.bool.test(u)?Xs:void 0)),h!==void 0){if(h===null){l.removeAttr(s,u);return}return m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:(s.setAttribute(u,h+""),h)}return m&&"get"in m&&(d=m.get(s,u))!==null?d:(d=l.find.attr(s,u),d??void 0)}},attrHooks:{type:{set:function(s,u){if(!W.radioValue&&u==="radio"&&S(s,"input")){var h=s.value;return s.setAttribute("type",u),h&&(s.value=h),u}}}},removeAttr:function(s,u){var h,d=0,m=u&&u.match(bt);if(m&&s.nodeType===1)for(;h=m[d++];)s.removeAttribute(h)}}),Xs={set:function(s,u,h){return u===!1?l.removeAttr(s,h):s.setAttribute(h,h),h}},l.each(l.expr.match.bool.source.match(/\w+/g),function(s,u){var h=Tr[u]||l.find.attr;Tr[u]=function(d,m,y){var T,R,A=m.toLowerCase();return y||(R=Tr[A],Tr[A]=T,T=h(d,m,y)!=null?A:null,Tr[A]=R),T}});var Er=/^(?:input|select|textarea|button)$/i,pn=/^(?:a|area)$/i;l.fn.extend({prop:function(s,u){return St(this,l.prop,s,u,arguments.length>1)},removeProp:function(s){return this.each(function(){delete this[l.propFix[s]||s]})}}),l.extend({prop:function(s,u,h){var d,m,y=s.nodeType;if(!(y===3||y===8||y===2))return(y!==1||!l.isXMLDoc(s))&&(u=l.propFix[u]||u,m=l.propHooks[u]),h!==void 0?m&&"set"in m&&(d=m.set(s,h,u))!==void 0?d:s[u]=h:m&&"get"in m&&(d=m.get(s,u))!==null?d:s[u]},propHooks:{tabIndex:{get:function(s){var u=l.find.attr(s,"tabindex");return u?parseInt(u,10):Er.test(s.nodeName)||pn.test(s.nodeName)&&s.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),W.optSelected||(l.propHooks.selected={get:function(s){var u=s.parentNode;return u&&u.parentNode&&u.parentNode.selectedIndex,null},set:function(s){var u=s.parentNode;u&&(u.selectedIndex,u.parentNode&&u.parentNode.selectedIndex)}}),l.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){l.propFix[this.toLowerCase()]=this});function Gt(s){var u=s.match(bt)||[];return u.join(" ")}function Kt(s){return s.getAttribute&&s.getAttribute("class")||""}function Wr(s){return Array.isArray(s)?s:typeof s=="string"?s.match(bt)||[]:[]}l.fn.extend({addClass:function(s){var u,h,d,m,y,T;return Q(s)?this.each(function(R){l(this).addClass(s.call(this,R,Kt(this)))}):(u=Wr(s),u.length?this.each(function(){if(d=Kt(this),h=this.nodeType===1&&" "+Gt(d)+" ",h){for(y=0;y<u.length;y++)m=u[y],h.indexOf(" "+m+" ")<0&&(h+=m+" ");T=Gt(h),d!==T&&this.setAttribute("class",T)}}):this)},removeClass:function(s){var u,h,d,m,y,T;return Q(s)?this.each(function(R){l(this).removeClass(s.call(this,R,Kt(this)))}):arguments.length?(u=Wr(s),u.length?this.each(function(){if(d=Kt(this),h=this.nodeType===1&&" "+Gt(d)+" ",h){for(y=0;y<u.length;y++)for(m=u[y];h.indexOf(" "+m+" ")>-1;)h=h.replace(" "+m+" "," ");T=Gt(h),d!==T&&this.setAttribute("class",T)}}):this):this.attr("class","")},toggleClass:function(s,u){var h,d,m,y,T=typeof s,R=T==="string"||Array.isArray(s);return Q(s)?this.each(function(A){l(this).toggleClass(s.call(this,A,Kt(this),u),u)}):typeof u=="boolean"&&R?u?this.addClass(s):this.removeClass(s):(h=Wr(s),this.each(function(){if(R)for(y=l(this),m=0;m<h.length;m++)d=h[m],y.hasClass(d)?y.removeClass(d):y.addClass(d);else(s===void 0||T==="boolean")&&(d=Kt(this),d&&ie.set(this,"__className__",d),this.setAttribute&&this.setAttribute("class",d||s===!1?"":ie.get(this,"__className__")||""))}))},hasClass:function(s){var u,h,d=0;for(u=" "+s+" ";h=this[d++];)if(h.nodeType===1&&(" "+Gt(Kt(h))+" ").indexOf(u)>-1)return!0;return!1}});var Ys=/\r/g;l.fn.extend({val:function(s){var u,h,d,m=this[0];return arguments.length?(d=Q(s),this.each(function(y){var T;this.nodeType===1&&(d?T=s.call(this,y,l(this).val()):T=s,T==null?T="":typeof T=="number"?T+="":Array.isArray(T)&&(T=l.map(T,function(R){return R==null?"":R+""})),u=l.valHooks[this.type]||l.valHooks[this.nodeName.toLowerCase()],(!u||!("set"in u)||u.set(this,T,"value")===void 0)&&(this.value=T))})):m?(u=l.valHooks[m.type]||l.valHooks[m.nodeName.toLowerCase()],u&&"get"in u&&(h=u.get(m,"value"))!==void 0?h:(h=m.value,typeof h=="string"?h.replace(Ys,""):h??"")):void 0}}),l.extend({valHooks:{option:{get:function(s){var u=l.find.attr(s,"value");return u??Gt(l.text(s))}},select:{get:function(s){var u,h,d,m=s.options,y=s.selectedIndex,T=s.type==="select-one",R=T?null:[],A=T?y+1:m.length;for(y<0?d=A:d=T?y:0;d<A;d++)if(h=m[d],(h.selected||d===y)&&!h.disabled&&(!h.parentNode.disabled||!S(h.parentNode,"optgroup"))){if(u=l(h).val(),T)return u;R.push(u)}return R},set:function(s,u){for(var h,d,m=s.options,y=l.makeArray(u),T=m.length;T--;)d=m[T],(d.selected=l.inArray(l.valHooks.option.get(d),y)>-1)&&(h=!0);return h||(s.selectedIndex=-1),y}}}}),l.each(["radio","checkbox"],function(){l.valHooks[this]={set:function(s,u){if(Array.isArray(u))return s.checked=l.inArray(l(s).val(),u)>-1}},W.checkOn||(l.valHooks[this].get=function(s){return s.getAttribute("value")===null?"on":s.value})});var Un=e.location,gn={guid:Date.now()},Ki=/\?/;l.parseXML=function(s){var u,h;if(!s||typeof s!="string")return null;try{u=new e.DOMParser().parseFromString(s,"text/xml")}catch{}return h=u&&u.getElementsByTagName("parsererror")[0],(!u||h)&&l.error("Invalid XML: "+(h?l.map(h.childNodes,function(d){return d.textContent}).join(`
`):s)),u};var Js=/^(?:focusinfocus|focusoutblur)$/,Zs=function(s){s.stopPropagation()};l.extend(l.event,{trigger:function(s,u,h,d){var m,y,T,R,A,N,q,B,U=[h||J],X=P.call(s,"type")?s.type:s,se=P.call(s,"namespace")?s.namespace.split("."):[];if(y=B=T=h=h||J,!(h.nodeType===3||h.nodeType===8)&&!Js.test(X+l.event.triggered)&&(X.indexOf(".")>-1&&(se=X.split("."),X=se.shift(),se.sort()),A=X.indexOf(":")<0&&"on"+X,s=s[l.expando]?s:new l.Event(X,typeof s=="object"&&s),s.isTrigger=d?2:3,s.namespace=se.join("."),s.rnamespace=s.namespace?new RegExp("(^|\\.)"+se.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,s.result=void 0,s.target||(s.target=h),u=u==null?[s]:l.makeArray(u,[s]),q=l.event.special[X]||{},!(!d&&q.trigger&&q.trigger.apply(h,u)===!1))){if(!d&&!q.noBubble&&!Y(h)){for(R=q.delegateType||X,Js.test(R+X)||(y=y.parentNode);y;y=y.parentNode)U.push(y),T=y;T===(h.ownerDocument||J)&&U.push(T.defaultView||T.parentWindow||e)}for(m=0;(y=U[m++])&&!s.isPropagationStopped();)B=y,s.type=m>1?R:q.bindType||X,N=(ie.get(y,"events")||Object.create(null))[s.type]&&ie.get(y,"handle"),N&&N.apply(y,u),N=A&&y[A],N&&N.apply&&kn(y)&&(s.result=N.apply(y,u),s.result===!1&&s.preventDefault());return s.type=X,!d&&!s.isDefaultPrevented()&&(!q._default||q._default.apply(U.pop(),u)===!1)&&kn(h)&&A&&Q(h[X])&&!Y(h)&&(T=h[A],T&&(h[A]=null),l.event.triggered=X,s.isPropagationStopped()&&B.addEventListener(X,Zs),h[X](),s.isPropagationStopped()&&B.removeEventListener(X,Zs),l.event.triggered=void 0,T&&(h[A]=T)),s.result}},simulate:function(s,u,h){var d=l.extend(new l.Event,h,{type:s,isSimulated:!0});l.event.trigger(d,null,u)}}),l.fn.extend({trigger:function(s,u){return this.each(function(){l.event.trigger(s,u,this)})},triggerHandler:function(s,u){var h=this[0];if(h)return l.event.trigger(s,u,h,!0)}});var Qt=/\[\]$/,eo=/\r?\n/g,Qi=/^(?:submit|button|image|reset|file)$/i,zr=/^(?:input|select|textarea|keygen)/i;function Gr(s,u,h,d){var m;if(Array.isArray(u))l.each(u,function(y,T){h||Qt.test(s)?d(s,T):Gr(s+"["+(typeof T=="object"&&T!=null?y:"")+"]",T,h,d)});else if(!h&&De(u)==="object")for(m in u)Gr(s+"["+m+"]",u[m],h,d);else d(s,u)}l.param=function(s,u){var h,d=[],m=function(y,T){var R=Q(T)?T():T;d[d.length]=encodeURIComponent(y)+"="+encodeURIComponent(R??"")};if(s==null)return"";if(Array.isArray(s)||s.jquery&&!l.isPlainObject(s))l.each(s,function(){m(this.name,this.value)});else for(h in s)Gr(h,s[h],u,m);return d.join("&")},l.fn.extend({serialize:function(){return l.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var s=l.prop(this,"elements");return s?l.makeArray(s):this}).filter(function(){var s=this.type;return this.name&&!l(this).is(":disabled")&&zr.test(this.nodeName)&&!Qi.test(s)&&(this.checked||!Be.test(s))}).map(function(s,u){var h=l(this).val();return h==null?null:Array.isArray(h)?l.map(h,function(d){return{name:u.name,value:d.replace(eo,`\r
`)}}):{name:u.name,value:h.replace(eo,`\r
`)}}).get()}});var wr=/%20/g,Ir=/#.*$/,to=/([?&])_=[^&]*/,Xi=/^(.*?):[ \t]*([^\r\n]*)$/mg,Le=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,va=/^(?:GET|HEAD)$/,Ta=/^\/\//,Yi={},Kr={},Ji="*/".concat("*"),jn=J.createElement("a");jn.href=Un.href;function Mt(s){return function(u,h){typeof u!="string"&&(h=u,u="*");var d,m=0,y=u.toLowerCase().match(bt)||[];if(Q(h))for(;d=y[m++];)d[0]==="+"?(d=d.slice(1)||"*",(s[d]=s[d]||[]).unshift(h)):(s[d]=s[d]||[]).push(h)}}function Zi(s,u,h,d){var m={},y=s===Kr;function T(R){var A;return m[R]=!0,l.each(s[R]||[],function(N,q){var B=q(u,h,d);if(typeof B=="string"&&!y&&!m[B])return u.dataTypes.unshift(B),T(B),!1;if(y)return!(A=B)}),A}return T(u.dataTypes[0])||!m["*"]&&T("*")}function es(s,u){var h,d,m=l.ajaxSettings.flatOptions||{};for(h in u)u[h]!==void 0&&((m[h]?s:d||(d={}))[h]=u[h]);return d&&l.extend(!0,s,d),s}function Ar(s,u,h){for(var d,m,y,T,R=s.contents,A=s.dataTypes;A[0]==="*";)A.shift(),d===void 0&&(d=s.mimeType||u.getResponseHeader("Content-Type"));if(d){for(m in R)if(R[m]&&R[m].test(d)){A.unshift(m);break}}if(A[0]in h)y=A[0];else{for(m in h){if(!A[0]||s.converters[m+" "+A[0]]){y=m;break}T||(T=m)}y=y||T}if(y)return y!==A[0]&&A.unshift(y),h[y]}function no(s,u,h,d){var m,y,T,R,A,N={},q=s.dataTypes.slice();if(q[1])for(T in s.converters)N[T.toLowerCase()]=s.converters[T];for(y=q.shift();y;)if(s.responseFields[y]&&(h[s.responseFields[y]]=u),!A&&d&&s.dataFilter&&(u=s.dataFilter(u,s.dataType)),A=y,y=q.shift(),y){if(y==="*")y=A;else if(A!=="*"&&A!==y){if(T=N[A+" "+y]||N["* "+y],!T){for(m in N)if(R=m.split(" "),R[1]===y&&(T=N[A+" "+R[0]]||N["* "+R[0]],T)){T===!0?T=N[m]:N[m]!==!0&&(y=R[0],q.unshift(R[1]));break}}if(T!==!0)if(T&&s.throws)u=T(u);else try{u=T(u)}catch(B){return{state:"parsererror",error:T?B:"No conversion from "+A+" to "+y}}}}return{state:"success",data:u}}l.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Un.href,type:"GET",isLocal:Le.test(Un.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Ji,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":l.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(s,u){return u?es(es(s,l.ajaxSettings),u):es(l.ajaxSettings,s)},ajaxPrefilter:Mt(Yi),ajaxTransport:Mt(Kr),ajax:function(s,u){typeof s=="object"&&(u=s,s=void 0),u=u||{};var h,d,m,y,T,R,A,N,q,B,U=l.ajaxSetup({},u),X=U.context||U,se=U.context&&(X.nodeType||X.jquery)?l(X):l.event,Te=l.Deferred(),me=l.Callbacks("once memory"),Me=U.statusCode||{},o={},f={},g="canceled",E={readyState:0,getResponseHeader:function(O){var K;if(A){if(!y)for(y={};K=Xi.exec(m);)y[K[1].toLowerCase()+" "]=(y[K[1].toLowerCase()+" "]||[]).concat(K[2]);K=y[O.toLowerCase()+" "]}return K==null?null:K.join(", ")},getAllResponseHeaders:function(){return A?m:null},setRequestHeader:function(O,K){return A==null&&(O=f[O.toLowerCase()]=f[O.toLowerCase()]||O,o[O]=K),this},overrideMimeType:function(O){return A==null&&(U.mimeType=O),this},statusCode:function(O){var K;if(O)if(A)E.always(O[E.status]);else for(K in O)Me[K]=[Me[K],O[K]];return this},abort:function(O){var K=O||g;return h&&h.abort(K),L(0,K),this}};if(Te.promise(E),U.url=((s||U.url||Un.href)+"").replace(Ta,Un.protocol+"//"),U.type=u.method||u.type||U.method||U.type,U.dataTypes=(U.dataType||"*").toLowerCase().match(bt)||[""],U.crossDomain==null){R=J.createElement("a");try{R.href=U.url,R.href=R.href,U.crossDomain=jn.protocol+"//"+jn.host!=R.protocol+"//"+R.host}catch{U.crossDomain=!0}}if(U.data&&U.processData&&typeof U.data!="string"&&(U.data=l.param(U.data,U.traditional)),Zi(Yi,U,u,E),A)return E;N=l.event&&U.global,N&&l.active++===0&&l.event.trigger("ajaxStart"),U.type=U.type.toUpperCase(),U.hasContent=!va.test(U.type),d=U.url.replace(Ir,""),U.hasContent?U.data&&U.processData&&(U.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(U.data=U.data.replace(wr,"+")):(B=U.url.slice(d.length),U.data&&(U.processData||typeof U.data=="string")&&(d+=(Ki.test(d)?"&":"?")+U.data,delete U.data),U.cache===!1&&(d=d.replace(to,"$1"),B=(Ki.test(d)?"&":"?")+"_="+gn.guid+++B),U.url=d+B),U.ifModified&&(l.lastModified[d]&&E.setRequestHeader("If-Modified-Since",l.lastModified[d]),l.etag[d]&&E.setRequestHeader("If-None-Match",l.etag[d])),(U.data&&U.hasContent&&U.contentType!==!1||u.contentType)&&E.setRequestHeader("Content-Type",U.contentType),E.setRequestHeader("Accept",U.dataTypes[0]&&U.accepts[U.dataTypes[0]]?U.accepts[U.dataTypes[0]]+(U.dataTypes[0]!=="*"?", "+Ji+"; q=0.01":""):U.accepts["*"]);for(q in U.headers)E.setRequestHeader(q,U.headers[q]);if(U.beforeSend&&(U.beforeSend.call(X,E,U)===!1||A))return E.abort();if(g="abort",me.add(U.complete),E.done(U.success),E.fail(U.error),h=Zi(Kr,U,u,E),!h)L(-1,"No Transport");else{if(E.readyState=1,N&&se.trigger("ajaxSend",[E,U]),A)return E;U.async&&U.timeout>0&&(T=e.setTimeout(function(){E.abort("timeout")},U.timeout));try{A=!1,h.send(o,L)}catch(O){if(A)throw O;L(-1,O)}}function L(O,K,fe,Ue){var ye,Fe,$e,lt,st,He=K;A||(A=!0,T&&e.clearTimeout(T),h=void 0,m=Ue||"",E.readyState=O>0?4:0,ye=O>=200&&O<300||O===304,fe&&(lt=Ar(U,E,fe)),!ye&&l.inArray("script",U.dataTypes)>-1&&l.inArray("json",U.dataTypes)<0&&(U.converters["text script"]=function(){}),lt=no(U,lt,E,ye),ye?(U.ifModified&&(st=E.getResponseHeader("Last-Modified"),st&&(l.lastModified[d]=st),st=E.getResponseHeader("etag"),st&&(l.etag[d]=st)),O===204||U.type==="HEAD"?He="nocontent":O===304?He="notmodified":(He=lt.state,Fe=lt.data,$e=lt.error,ye=!$e)):($e=He,(O||!He)&&(He="error",O<0&&(O=0))),E.status=O,E.statusText=(K||He)+"",ye?Te.resolveWith(X,[Fe,He,E]):Te.rejectWith(X,[E,He,$e]),E.statusCode(Me),Me=void 0,N&&se.trigger(ye?"ajaxSuccess":"ajaxError",[E,U,ye?Fe:$e]),me.fireWith(X,[E,He]),N&&(se.trigger("ajaxComplete",[E,U]),--l.active||l.event.trigger("ajaxStop")))}return E},getJSON:function(s,u,h){return l.get(s,u,h,"json")},getScript:function(s,u){return l.get(s,void 0,u,"script")}}),l.each(["get","post"],function(s,u){l[u]=function(h,d,m,y){return Q(d)&&(y=y||m,m=d,d=void 0),l.ajax(l.extend({url:h,type:u,dataType:y,data:d,success:m},l.isPlainObject(h)&&h))}}),l.ajaxPrefilter(function(s){var u;for(u in s.headers)u.toLowerCase()==="content-type"&&(s.contentType=s.headers[u]||"")}),l._evalUrl=function(s,u,h){return l.ajax({url:s,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(d){l.globalEval(d,u,h)}})},l.fn.extend({wrapAll:function(s){var u;return this[0]&&(Q(s)&&(s=s.call(this[0])),u=l(s,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&u.insertBefore(this[0]),u.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(s){return Q(s)?this.each(function(u){l(this).wrapInner(s.call(this,u))}):this.each(function(){var u=l(this),h=u.contents();h.length?h.wrapAll(s):u.append(s)})},wrap:function(s){var u=Q(s);return this.each(function(h){l(this).wrapAll(u?s.call(this,h):s)})},unwrap:function(s){return this.parent(s).not("body").each(function(){l(this).replaceWith(this.childNodes)}),this}}),l.expr.pseudos.hidden=function(s){return!l.expr.pseudos.visible(s)},l.expr.pseudos.visible=function(s){return!!(s.offsetWidth||s.offsetHeight||s.getClientRects().length)},l.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch{}};var ts={0:200,1223:204},Xt=l.ajaxSettings.xhr();W.cors=!!Xt&&"withCredentials"in Xt,W.ajax=Xt=!!Xt,l.ajaxTransport(function(s){var u,h;if(W.cors||Xt&&!s.crossDomain)return{send:function(d,m){var y,T=s.xhr();if(T.open(s.type,s.url,s.async,s.username,s.password),s.xhrFields)for(y in s.xhrFields)T[y]=s.xhrFields[y];s.mimeType&&T.overrideMimeType&&T.overrideMimeType(s.mimeType),!s.crossDomain&&!d["X-Requested-With"]&&(d["X-Requested-With"]="XMLHttpRequest");for(y in d)T.setRequestHeader(y,d[y]);u=function(R){return function(){u&&(u=h=T.onload=T.onerror=T.onabort=T.ontimeout=T.onreadystatechange=null,R==="abort"?T.abort():R==="error"?typeof T.status!="number"?m(0,"error"):m(T.status,T.statusText):m(ts[T.status]||T.status,T.statusText,(T.responseType||"text")!=="text"||typeof T.responseText!="string"?{binary:T.response}:{text:T.responseText},T.getAllResponseHeaders()))}},T.onload=u(),h=T.onerror=T.ontimeout=u("error"),T.onabort!==void 0?T.onabort=h:T.onreadystatechange=function(){T.readyState===4&&e.setTimeout(function(){u&&h()})},u=u("abort");try{T.send(s.hasContent&&s.data||null)}catch(R){if(u)throw R}},abort:function(){u&&u()}}}),l.ajaxPrefilter(function(s){s.crossDomain&&(s.contents.script=!1)}),l.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(s){return l.globalEval(s),s}}}),l.ajaxPrefilter("script",function(s){s.cache===void 0&&(s.cache=!1),s.crossDomain&&(s.type="GET")}),l.ajaxTransport("script",function(s){if(s.crossDomain||s.scriptAttrs){var u,h;return{send:function(d,m){u=l("<script>").attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on("load error",h=function(y){u.remove(),h=null,y&&m(y.type==="error"?404:200,y.type)}),J.head.appendChild(u[0])},abort:function(){h&&h()}}}});var ns=[],qn=/(=)\?(?=&|$)|\?\?/;l.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var s=ns.pop()||l.expando+"_"+gn.guid++;return this[s]=!0,s}}),l.ajaxPrefilter("json jsonp",function(s,u,h){var d,m,y,T=s.jsonp!==!1&&(qn.test(s.url)?"url":typeof s.data=="string"&&(s.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&qn.test(s.data)&&"data");if(T||s.dataTypes[0]==="jsonp")return d=s.jsonpCallback=Q(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback,T?s[T]=s[T].replace(qn,"$1"+d):s.jsonp!==!1&&(s.url+=(Ki.test(s.url)?"&":"?")+s.jsonp+"="+d),s.converters["script json"]=function(){return y||l.error(d+" was not called"),y[0]},s.dataTypes[0]="json",m=e[d],e[d]=function(){y=arguments},h.always(function(){m===void 0?l(e).removeProp(d):e[d]=m,s[d]&&(s.jsonpCallback=u.jsonpCallback,ns.push(d)),y&&Q(m)&&m(y[0]),y=m=void 0}),"script"}),W.createHTMLDocument=(function(){var s=J.implementation.createHTMLDocument("").body;return s.innerHTML="<form></form><form></form>",s.childNodes.length===2})(),l.parseHTML=function(s,u,h){if(typeof s!="string")return[];typeof u=="boolean"&&(h=u,u=!1);var d,m,y;return u||(W.createHTMLDocument?(u=J.implementation.createHTMLDocument(""),d=u.createElement("base"),d.href=J.location.href,u.head.appendChild(d)):u=J),m=bi.exec(s),y=!h&&[],m?[u.createElement(m[1])]:(m=qs([s],u,y),y&&y.length&&l(y).remove(),l.merge([],m.childNodes))},l.fn.load=function(s,u,h){var d,m,y,T=this,R=s.indexOf(" ");return R>-1&&(d=Gt(s.slice(R)),s=s.slice(0,R)),Q(u)?(h=u,u=void 0):u&&typeof u=="object"&&(m="POST"),T.length>0&&l.ajax({url:s,type:m||"GET",dataType:"html",data:u}).done(function(A){y=arguments,T.html(d?l("<div>").append(l.parseHTML(A)).find(d):A)}).always(h&&function(A,N){T.each(function(){h.apply(this,y||[A.responseText,N,A])})}),this},l.expr.pseudos.animated=function(s){return l.grep(l.timers,function(u){return s===u.elem}).length},l.offset={setOffset:function(s,u,h){var d,m,y,T,R,A,N,q=l.css(s,"position"),B=l(s),U={};q==="static"&&(s.style.position="relative"),R=B.offset(),y=l.css(s,"top"),A=l.css(s,"left"),N=(q==="absolute"||q==="fixed")&&(y+A).indexOf("auto")>-1,N?(d=B.position(),T=d.top,m=d.left):(T=parseFloat(y)||0,m=parseFloat(A)||0),Q(u)&&(u=u.call(s,h,l.extend({},R))),u.top!=null&&(U.top=u.top-R.top+T),u.left!=null&&(U.left=u.left-R.left+m),"using"in u?u.using.call(s,U):B.css(U)}},l.fn.extend({offset:function(s){if(arguments.length)return s===void 0?this:this.each(function(m){l.offset.setOffset(this,s,m)});var u,h,d=this[0];if(d)return d.getClientRects().length?(u=d.getBoundingClientRect(),h=d.ownerDocument.defaultView,{top:u.top+h.pageYOffset,left:u.left+h.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var s,u,h,d=this[0],m={top:0,left:0};if(l.css(d,"position")==="fixed")u=d.getBoundingClientRect();else{for(u=this.offset(),h=d.ownerDocument,s=d.offsetParent||h.documentElement;s&&(s===h.body||s===h.documentElement)&&l.css(s,"position")==="static";)s=s.parentNode;s&&s!==d&&s.nodeType===1&&(m=l(s).offset(),m.top+=l.css(s,"borderTopWidth",!0),m.left+=l.css(s,"borderLeftWidth",!0))}return{top:u.top-m.top-l.css(d,"marginTop",!0),left:u.left-m.left-l.css(d,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var s=this.offsetParent;s&&l.css(s,"position")==="static";)s=s.offsetParent;return s||Vt})}}),l.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(s,u){var h=u==="pageYOffset";l.fn[s]=function(d){return St(this,function(m,y,T){var R;if(Y(m)?R=m:m.nodeType===9&&(R=m.defaultView),T===void 0)return R?R[u]:m[y];R?R.scrollTo(h?R.pageXOffset:T,h?T:R.pageYOffset):m[y]=T},s,d,arguments.length)}}),l.each(["top","left"],function(s,u){l.cssHooks[u]=Hr(W.pixelPosition,function(h,d){if(d)return d=Et(h,u),ji.test(d)?l(h).position()[u]+"px":d})}),l.each({Height:"height",Width:"width"},function(s,u){l.each({padding:"inner"+s,content:u,"":"outer"+s},function(h,d){l.fn[d]=function(m,y){var T=arguments.length&&(h||typeof m!="boolean"),R=h||(m===!0||y===!0?"margin":"border");return St(this,function(A,N,q){var B;return Y(A)?d.indexOf("outer")===0?A["inner"+s]:A.document.documentElement["client"+s]:A.nodeType===9?(B=A.documentElement,Math.max(A.body["scroll"+s],B["scroll"+s],A.body["offset"+s],B["offset"+s],B["client"+s])):q===void 0?l.css(A,N,R):l.style(A,N,q,R)},u,T?m:void 0,T)}})}),l.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(s,u){l.fn[u]=function(h){return this.on(u,h)}}),l.fn.extend({bind:function(s,u,h){return this.on(s,null,u,h)},unbind:function(s,u){return this.off(s,null,u)},delegate:function(s,u,h,d){return this.on(u,s,h,d)},undelegate:function(s,u,h){return arguments.length===1?this.off(s,"**"):this.off(u,s||"**",h)},hover:function(s,u){return this.on("mouseenter",s).on("mouseleave",u||s)}}),l.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(s,u){l.fn[u]=function(h,d){return arguments.length>0?this.on(u,null,h,d):this.trigger(u)}});var Ea=/^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;l.proxy=function(s,u){var h,d,m;if(typeof u=="string"&&(h=s[u],u=s,s=h),!!Q(s))return d=a.call(arguments,2),m=function(){return s.apply(u||this,d.concat(a.call(arguments)))},m.guid=s.guid=s.guid||l.guid++,m},l.holdReady=function(s){s?l.readyWait++:l.ready(!0)},l.isArray=Array.isArray,l.parseJSON=JSON.parse,l.nodeName=S,l.isFunction=Q,l.isWindow=Y,l.camelCase=Ct,l.type=De,l.now=Date.now,l.isNumeric=function(s){var u=l.type(s);return(u==="number"||u==="string")&&!isNaN(s-parseFloat(s))},l.trim=function(s){return s==null?"":(s+"").replace(Ea,"$1")};var ro=e.jQuery,br=e.$;return l.noConflict=function(s){return e.$===l&&(e.$=br),s&&e.jQuery===l&&(e.jQuery=ro),l},typeof t>"u"&&(e.jQuery=e.$=l),l})})(go)),go.exports}var wd=Ed();const Ie=vd(wd),Id=()=>{};var uc={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ml=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let i=n.charCodeAt(r);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Ad=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const i=n[t++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const a=n[t++];e[r++]=String.fromCharCode((i&31)<<6|a&63)}else if(i>239&&i<365){const a=n[t++],c=n[t++],p=n[t++],_=((i&7)<<18|(a&63)<<12|(c&63)<<6|p&63)-65536;e[r++]=String.fromCharCode(55296+(_>>10)),e[r++]=String.fromCharCode(56320+(_&1023))}else{const a=n[t++],c=n[t++];e[r++]=String.fromCharCode((i&15)<<12|(a&63)<<6|c&63)}}return e.join("")},Fl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<n.length;i+=3){const a=n[i],c=i+1<n.length,p=c?n[i+1]:0,_=i+2<n.length,v=_?n[i+2]:0,I=a>>2,P=(a&3)<<4|p>>4;let V=(p&15)<<2|v>>6,G=v&63;_||(G=64,c||(V=64)),r.push(t[I],t[P],t[V],t[G])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(Ml(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Ad(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<n.length;){const a=t[n.charAt(i++)],p=i<n.length?t[n.charAt(i)]:0;++i;const v=i<n.length?t[n.charAt(i)]:64;++i;const P=i<n.length?t[n.charAt(i)]:64;if(++i,a==null||p==null||v==null||P==null)throw new bd;const V=a<<2|p>>4;if(r.push(V),v!==64){const G=p<<4&240|v>>2;if(r.push(G),P!==64){const W=v<<6&192|P;r.push(W)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class bd extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Sd=function(n){const e=Ml(n);return Fl.encodeByteArray(e,!0)},So=function(n){return Sd(n).replace(/\./g,"")},Ul=function(n){try{return Fl.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cd(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rd=()=>Cd().__FIREBASE_DEFAULTS__,Pd=()=>{if(typeof process>"u"||typeof uc>"u")return;const n=uc.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},kd=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&Ul(n[1]);return e&&JSON.parse(e)},Wo=()=>{try{return Id()||Rd()||Pd()||kd()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},jl=n=>Wo()?.emulatorHosts?.[n],Dd=n=>{const e=jl(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},ql=()=>Wo()?.config,Bl=n=>Wo()?.[`_${n}`];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function $l(n){return(await fetch(n,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",i=n.iat||0,a=n.sub||n.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c={iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}},...n};return[So(JSON.stringify(t)),So(JSON.stringify(c)),""].join(".")}const ls={};function Vd(){const n={prod:[],emulator:[]};for(const e of Object.keys(ls))ls[e]?n.emulator.push(e):n.prod.push(e);return n}function Od(n){let e=document.getElementById(n),t=!1;return e||(e=document.createElement("div"),e.setAttribute("id",n),t=!0),{created:t,element:e}}let cc=!1;function Hl(n,e){if(typeof window>"u"||typeof document>"u"||!gi(window.location.host)||ls[n]===e||ls[n]||cc)return;ls[n]=e;function t(V){return`__firebase__banner__${V}`}const r="__firebase__banner",a=Vd().prod.length>0;function c(){const V=document.getElementById(r);V&&V.remove()}function p(V){V.style.display="flex",V.style.background="#7faaf0",V.style.position="fixed",V.style.bottom="5px",V.style.left="5px",V.style.padding=".5em",V.style.borderRadius="5px",V.style.alignItems="center"}function _(V,G){V.setAttribute("width","24"),V.setAttribute("id",G),V.setAttribute("height","24"),V.setAttribute("viewBox","0 0 24 24"),V.setAttribute("fill","none"),V.style.marginLeft="-6px"}function v(){const V=document.createElement("span");return V.style.cursor="pointer",V.style.marginLeft="16px",V.style.fontSize="24px",V.innerHTML=" &times;",V.onclick=()=>{cc=!0,c()},V}function I(V,G){V.setAttribute("id",G),V.innerText="Learn more",V.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",V.setAttribute("target","__blank"),V.style.paddingLeft="5px",V.style.textDecoration="underline"}function P(){const V=Od(r),G=t("text"),W=document.getElementById(G)||document.createElement("span"),Q=t("learnmore"),Y=document.getElementById(Q)||document.createElement("a"),J=t("preprendIcon"),_e=document.getElementById(J)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(V.created){const ve=V.element;p(ve),I(Y,Q);const De=v();_(_e,J),ve.append(_e,W,Y,De),document.body.appendChild(ve)}a?(W.innerText="Preview backend disconnected.",_e.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(_e.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,W.innerText="Preview backend running in this workspace."),W.setAttribute("id",G)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",P):P()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Ld(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(gt())}function Md(){const n=Wo()?.forceEnvironment;if(n==="node")return!0;if(n==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function Fd(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Ud(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function jd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function qd(){const n=gt();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function Bd(){return!Md()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $d(){try{return typeof indexedDB=="object"}catch{return!1}}function Hd(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{e(i.error?.message||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wd="FirebaseError";class bn extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=Wd,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ss.prototype.create)}}class Ss{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},i=`${this.service}/${e}`,a=this.errors[e],c=a?zd(a,r):"Error",p=`${this.serviceName}: ${c} (${i}).`;return new bn(i,p,r)}}function zd(n,e){return n.replace(Gd,(t,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const Gd=/\{\$([^}]+)}/g;function Kd(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function kr(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const i of t){if(!r.includes(i))return!1;const a=n[i],c=e[i];if(lc(a)&&lc(c)){if(!kr(a,c))return!1}else if(a!==c)return!1}for(const i of r)if(!t.includes(i))return!1;return!0}function lc(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cs(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function is(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,a]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(a)}}),e}function ss(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Qd(n,e){const t=new Xd(n,e);return t.subscribe.bind(t)}class Xd{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let i;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");Yd(e,["next","error","complete"])?i=e:i={next:e,error:t,complete:r},i.next===void 0&&(i.next=Ca),i.error===void 0&&(i.error=Ca),i.complete===void 0&&(i.complete=Ca);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Yd(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ca(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ye(n){return n&&n._delegate?n._delegate:n}class Dr{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new Nd;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e?.identifier),r=e?.optional??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(r)return null;throw i}else{if(r)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ep(e))try{this.getOrInitializeService({instanceIdentifier:Cr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const a=this.getOrInitializeService({instanceIdentifier:i});r.resolve(a)}catch{}}}}clearInstance(e=Cr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Cr){return this.instances.has(e)}getOptions(e=Cr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[a,c]of this.instancesDeferred.entries()){const p=this.normalizeInstanceIdentifier(a);r===p&&c.resolve(i)}return i}onInit(e,t){const r=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(r)??new Set;i.add(e),this.onInitCallbacks.set(r,i);const a=this.instances.get(r);return a&&e(a,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const i of r)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:Zd(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Cr){return this.component?this.component.multipleInstances?e:Cr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Zd(n){return n===Cr?void 0:n}function ep(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tp{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Jd(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ae;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ae||(Ae={}));const np={debug:Ae.DEBUG,verbose:Ae.VERBOSE,info:Ae.INFO,warn:Ae.WARN,error:Ae.ERROR,silent:Ae.SILENT},rp=Ae.INFO,ip={[Ae.DEBUG]:"log",[Ae.VERBOSE]:"log",[Ae.INFO]:"info",[Ae.WARN]:"warn",[Ae.ERROR]:"error"},sp=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),i=ip[e];if(i)console[i](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class hu{constructor(e){this.name=e,this._logLevel=rp,this._logHandler=sp,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ae))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?np[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ae.DEBUG,...e),this._logHandler(this,Ae.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ae.VERBOSE,...e),this._logHandler(this,Ae.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ae.INFO,...e),this._logHandler(this,Ae.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ae.WARN,...e),this._logHandler(this,Ae.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ae.ERROR,...e),this._logHandler(this,Ae.ERROR,...e)}}const op=(n,e)=>e.some(t=>n instanceof t);let hc,fc;function ap(){return hc||(hc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function up(){return fc||(fc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Wl=new WeakMap,Ua=new WeakMap,zl=new WeakMap,Ra=new WeakMap,fu=new WeakMap;function cp(n){const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("success",a),n.removeEventListener("error",c)},a=()=>{t(Xn(n.result)),i()},c=()=>{r(n.error),i()};n.addEventListener("success",a),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&Wl.set(t,n)}).catch(()=>{}),fu.set(e,n),e}function lp(n){if(Ua.has(n))return;const e=new Promise((t,r)=>{const i=()=>{n.removeEventListener("complete",a),n.removeEventListener("error",c),n.removeEventListener("abort",c)},a=()=>{t(),i()},c=()=>{r(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",a),n.addEventListener("error",c),n.addEventListener("abort",c)});Ua.set(n,e)}let ja={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Ua.get(n);if(e==="objectStoreNames")return n.objectStoreNames||zl.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return Xn(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function hp(n){ja=n(ja)}function fp(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Pa(this),e,...t);return zl.set(r,e.sort?e.sort():[e]),Xn(r)}:up().includes(n)?function(...e){return n.apply(Pa(this),e),Xn(Wl.get(this))}:function(...e){return Xn(n.apply(Pa(this),e))}}function dp(n){return typeof n=="function"?fp(n):(n instanceof IDBTransaction&&lp(n),op(n,ap())?new Proxy(n,ja):n)}function Xn(n){if(n instanceof IDBRequest)return cp(n);if(Ra.has(n))return Ra.get(n);const e=dp(n);return e!==n&&(Ra.set(n,e),fu.set(e,n)),e}const Pa=n=>fu.get(n);function pp(n,e,{blocked:t,upgrade:r,blocking:i,terminated:a}={}){const c=indexedDB.open(n,e),p=Xn(c);return r&&c.addEventListener("upgradeneeded",_=>{r(Xn(c.result),_.oldVersion,_.newVersion,Xn(c.transaction),_)}),t&&c.addEventListener("blocked",_=>t(_.oldVersion,_.newVersion,_)),p.then(_=>{a&&_.addEventListener("close",()=>a()),i&&_.addEventListener("versionchange",v=>i(v.oldVersion,v.newVersion,v))}).catch(()=>{}),p}const gp=["get","getKey","getAll","getAllKeys","count"],mp=["put","add","delete","clear"],ka=new Map;function dc(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(ka.get(e))return ka.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,i=mp.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(i||gp.includes(t)))return;const a=async function(c,...p){const _=this.transaction(c,i?"readwrite":"readonly");let v=_.store;return r&&(v=v.index(p.shift())),(await Promise.all([v[t](...p),i&&_.done]))[0]};return ka.set(e,a),a}hp(n=>({...n,get:(e,t,r)=>dc(e,t)||n.get(e,t,r),has:(e,t)=>!!dc(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yp{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(_p(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function _p(n){return n.getComponent()?.type==="VERSION"}const qa="@firebase/app",pc="0.14.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const En=new hu("@firebase/app"),vp="@firebase/app-compat",Tp="@firebase/analytics-compat",Ep="@firebase/analytics",wp="@firebase/app-check-compat",Ip="@firebase/app-check",Ap="@firebase/auth",bp="@firebase/auth-compat",Sp="@firebase/database",Cp="@firebase/data-connect",Rp="@firebase/database-compat",Pp="@firebase/functions",kp="@firebase/functions-compat",Dp="@firebase/installations",Np="@firebase/installations-compat",xp="@firebase/messaging",Vp="@firebase/messaging-compat",Op="@firebase/performance",Lp="@firebase/performance-compat",Mp="@firebase/remote-config",Fp="@firebase/remote-config-compat",Up="@firebase/storage",jp="@firebase/storage-compat",qp="@firebase/firestore",Bp="@firebase/ai",$p="@firebase/firestore-compat",Hp="firebase",Wp="12.4.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ba="[DEFAULT]",zp={[qa]:"fire-core",[vp]:"fire-core-compat",[Ep]:"fire-analytics",[Tp]:"fire-analytics-compat",[Ip]:"fire-app-check",[wp]:"fire-app-check-compat",[Ap]:"fire-auth",[bp]:"fire-auth-compat",[Sp]:"fire-rtdb",[Cp]:"fire-data-connect",[Rp]:"fire-rtdb-compat",[Pp]:"fire-fn",[kp]:"fire-fn-compat",[Dp]:"fire-iid",[Np]:"fire-iid-compat",[xp]:"fire-fcm",[Vp]:"fire-fcm-compat",[Op]:"fire-perf",[Lp]:"fire-perf-compat",[Mp]:"fire-rc",[Fp]:"fire-rc-compat",[Up]:"fire-gcs",[jp]:"fire-gcs-compat",[qp]:"fire-fst",[$p]:"fire-fst-compat",[Bp]:"fire-vertex","fire-js":"fire-js",[Hp]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Co=new Map,Gp=new Map,$a=new Map;function gc(n,e){try{n.container.addComponent(e)}catch(t){En.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ai(n){const e=n.name;if($a.has(e))return En.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,n);for(const t of Co.values())gc(t,n);for(const t of Gp.values())gc(t,n);return!0}function du(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function kt(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Yn=new Ss("app","Firebase",Kp);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,r){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Dr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=Wp;function Gl(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r={name:Ba,automaticDataCollectionEnabled:!0,...e},i=r.name;if(typeof i!="string"||!i)throw Yn.create("bad-app-name",{appName:String(i)});if(t||(t=ql()),!t)throw Yn.create("no-options");const a=Co.get(i);if(a){if(kr(t,a.options)&&kr(r,a.config))return a;throw Yn.create("duplicate-app",{appName:i})}const c=new tp(i);for(const _ of $a.values())c.addComponent(_);const p=new Qp(t,r,c);return Co.set(i,p),p}function Kl(n=Ba){const e=Co.get(n);if(!e&&n===Ba&&ql())return Gl();if(!e)throw Yn.create("no-app",{appName:n});return e}function Jn(n,e,t){let r=zp[n]??n;t&&(r+=`-${t}`);const i=r.match(/\s|\//),a=e.match(/\s|\//);if(i||a){const c=[`Unable to register library "${r}" with version "${e}":`];i&&c.push(`library name "${r}" contains illegal characters (whitespace or "/")`),i&&a&&c.push("and"),a&&c.push(`version name "${e}" contains illegal characters (whitespace or "/")`),En.warn(c.join(" "));return}ai(new Dr(`${r}-version`,()=>({library:r,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp="firebase-heartbeat-database",Yp=1,ms="firebase-heartbeat-store";let Da=null;function Ql(){return Da||(Da=pp(Xp,Yp,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(ms)}catch(t){console.warn(t)}}}}).catch(n=>{throw Yn.create("idb-open",{originalErrorMessage:n.message})})),Da}async function Jp(n){try{const t=(await Ql()).transaction(ms),r=await t.objectStore(ms).get(Xl(n));return await t.done,r}catch(e){if(e instanceof bn)En.warn(e.message);else{const t=Yn.create("idb-get",{originalErrorMessage:e?.message});En.warn(t.message)}}}async function mc(n,e){try{const r=(await Ql()).transaction(ms,"readwrite");await r.objectStore(ms).put(e,Xl(n)),await r.done}catch(t){if(t instanceof bn)En.warn(t.message);else{const r=Yn.create("idb-set",{originalErrorMessage:t?.message});En.warn(r.message)}}}function Xl(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=1024,eg=30;class tg{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new rg(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){try{const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=yc();if(this._heartbeatsCache?.heartbeats==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats.length>eg){const i=ig(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(i,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(e){En.warn(e)}}async getHeartbeatsHeader(){try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache?.heartbeats==null||this._heartbeatsCache.heartbeats.length===0)return"";const e=yc(),{heartbeatsToSend:t,unsentEntries:r}=ng(this._heartbeatsCache.heartbeats),i=So(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}catch(e){return En.warn(e),""}}}function yc(){return new Date().toISOString().substring(0,10)}function ng(n,e=Zp){const t=[];let r=n.slice();for(const i of n){const a=t.find(c=>c.agent===i.agent);if(a){if(a.dates.push(i.date),_c(t)>e){a.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),_c(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class rg{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $d()?Hd().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await Jp(this.app);return t?.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const r=await this.read();return mc(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??r.lastSentHeartbeatDate,heartbeats:[...r.heartbeats,...e.heartbeats]})}else return}}function _c(n){return So(JSON.stringify({version:2,heartbeats:n})).length}function ig(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let r=1;r<n.length;r++)n[r].date<t&&(t=n[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(n){ai(new Dr("platform-logger",e=>new yp(e),"PRIVATE")),ai(new Dr("heartbeat",e=>new tg(e),"PRIVATE")),Jn(qa,pc,n),Jn(qa,pc,"esm2020"),Jn("fire-js","")}sg("");var og="firebase",ag="12.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Jn(og,ag,"app");function Yl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ug=Yl,Jl=new Ss("auth","Firebase",Yl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ro=new hu("@firebase/auth");function cg(n,...e){Ro.logLevel<=Ae.WARN&&Ro.warn(`Auth (${mi}): ${n}`,...e)}function mo(n,...e){Ro.logLevel<=Ae.ERROR&&Ro.error(`Auth (${mi}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(n,...e){throw pu(n,...e)}function Zt(n,...e){return pu(n,...e)}function Zl(n,e,t){const r={...ug(),[e]:t};return new Ss("auth","Firebase",r).create(e,{appName:n.name})}function vn(n){return Zl(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function pu(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return Jl.create(n,...e)}function ce(n,e,...t){if(!n)throw pu(e,...t)}function yn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw mo(e),new Error(e)}function wn(n,e){n||yn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ha(){return typeof self<"u"&&self.location?.href||""}function lg(){return vc()==="http:"||vc()==="https:"}function vc(){return typeof self<"u"&&self.location?.protocol||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hg(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lg()||Ud()||"connection"in navigator)?navigator.onLine:!0}function fg(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e,t){this.shortDelay=e,this.longDelay=t,wn(t>e,"Short delay should be less than long delay!"),this.isMobile=Ld()||jd()}get(){return hg()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gu(n,e){wn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eh{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;yn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;yn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;yn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pg=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],gg=new Rs(3e4,6e4);function Sn(n,e){return n.tenantId&&!e.tenantId?{...e,tenantId:n.tenantId}:e}async function un(n,e,t,r,i={}){return th(n,i,async()=>{let a={},c={};r&&(e==="GET"?c=r:a={body:JSON.stringify(r)});const p=Cs({key:n.config.apiKey,...c}).slice(1),_=await n._getAdditionalHeaders();_["Content-Type"]="application/json",n.languageCode&&(_["X-Firebase-Locale"]=n.languageCode);const v={method:e,headers:_,...a};return Fd()||(v.referrerPolicy="no-referrer"),n.emulatorConfig&&gi(n.emulatorConfig.host)&&(v.credentials="include"),eh.fetch()(await nh(n,n.config.apiHost,t,p),v)})}async function th(n,e,t){n._canInitEmulator=!1;const r={...dg,...e};try{const i=new yg(n),a=await Promise.race([t(),i.promise]);i.clearNetworkTimeout();const c=await a.json();if("needConfirmation"in c)throw uo(n,"account-exists-with-different-credential",c);if(a.ok&&!("errorMessage"in c))return c;{const p=a.ok?c.errorMessage:c.error.message,[_,v]=p.split(" : ");if(_==="FEDERATED_USER_ID_ALREADY_LINKED")throw uo(n,"credential-already-in-use",c);if(_==="EMAIL_EXISTS")throw uo(n,"email-already-in-use",c);if(_==="USER_DISABLED")throw uo(n,"user-disabled",c);const I=r[_]||_.toLowerCase().replace(/[_\s]+/g,"-");if(v)throw Zl(n,I,v);qt(n,I)}}catch(i){if(i instanceof bn)throw i;qt(n,"network-request-failed",{message:String(i)})}}async function Ps(n,e,t,r,i={}){const a=await un(n,e,t,r,i);return"mfaPendingCredential"in a&&qt(n,"multi-factor-auth-required",{_serverResponse:a}),a}async function nh(n,e,t,r){const i=`${e}${t}?${r}`,a=n,c=a.config.emulator?gu(n.config,i):`${n.config.apiScheme}://${i}`;return pg.includes(t)&&(await a._persistenceManagerAvailable,a._getPersistenceType()==="COOKIE")?a._getPersistence()._getFinalTarget(c).toString():c}function mg(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class yg{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(Zt(this.auth,"network-request-failed")),gg.get())})}}function uo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const i=Zt(n,e,r);return i.customData._tokenResponse=t,i}function Tc(n){return n!==void 0&&n.enterprise!==void 0}class _g{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mg(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function vg(n,e){return un(n,"GET","/v2/recaptchaConfig",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tg(n,e){return un(n,"POST","/v1/accounts:delete",e)}async function Po(n,e){return un(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hs(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Eg(n,e=!1){const t=Ye(n),r=await t.getIdToken(e),i=mu(r);ce(i&&i.exp&&i.auth_time&&i.iat,t.auth,"internal-error");const a=typeof i.firebase=="object"?i.firebase:void 0,c=a?.sign_in_provider;return{claims:i,token:r,authTime:hs(Na(i.auth_time)),issuedAtTime:hs(Na(i.iat)),expirationTime:hs(Na(i.exp)),signInProvider:c||null,signInSecondFactor:a?.sign_in_second_factor||null}}function Na(n){return Number(n)*1e3}function mu(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return mo("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ul(t);return i?JSON.parse(i):(mo("Failed to decode base64 JWT payload"),null)}catch(i){return mo("Caught error parsing JWT payload as JSON",i?.toString()),null}}function Ec(n){const e=mu(n);return ce(e,"internal-error"),ce(typeof e.exp<"u","internal-error"),ce(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ui(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof bn&&wg(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function wg({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){if(e){const t=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),t}else{this.errorBackoff=3e4;const r=(this.user.stsTokenManager.expirationTime??0)-Date.now()-3e5;return Math.max(0,r)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e?.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=hs(this.lastLoginAt),this.creationTime=hs(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ko(n){const e=n.auth,t=await n.getIdToken(),r=await ui(n,Po(e,{idToken:t}));ce(r?.users.length,e,"internal-error");const i=r.users[0];n._notifyReloadListener(i);const a=i.providerUserInfo?.length?rh(i.providerUserInfo):[],c=bg(n.providerData,a),p=n.isAnonymous,_=!(n.email&&i.passwordHash)&&!c?.length,v=p?_:!1,I={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:c,metadata:new Wa(i.createdAt,i.lastLoginAt),isAnonymous:v};Object.assign(n,I)}async function Ag(n){const e=Ye(n);await ko(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bg(n,e){return[...n.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function rh(n){return n.map(({providerId:e,...t})=>({providerId:e,uid:t.rawId||"",displayName:t.displayName||null,email:t.email||null,phoneNumber:t.phoneNumber||null,photoURL:t.photoUrl||null}))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sg(n,e){const t=await th(n,{},async()=>{const r=Cs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:a}=n.config,c=await nh(n,i,"/v1/token",`key=${a}`),p=await n._getAdditionalHeaders();p["Content-Type"]="application/x-www-form-urlencoded";const _={method:"POST",headers:p,body:r};return n.emulatorConfig&&gi(n.emulatorConfig.host)&&(_.credentials="include"),eh.fetch()(c,_)});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function Cg(n,e){return un(n,"POST","/v2/accounts:revokeToken",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ni{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){ce(e.idToken,"internal-error"),ce(typeof e.idToken<"u","internal-error"),ce(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ec(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){ce(e.length!==0,"internal-error");const t=Ec(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(ce(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:i,expiresIn:a}=await Sg(e,t);this.updateTokensAndExpiration(r,i,Number(a))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:i,expirationTime:a}=t,c=new ni;return r&&(ce(typeof r=="string","internal-error",{appName:e}),c.refreshToken=r),i&&(ce(typeof i=="string","internal-error",{appName:e}),c.accessToken=i),a&&(ce(typeof a=="number","internal-error",{appName:e}),c.expirationTime=a),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ni,this.toJSON())}_performRefresh(){return yn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(n,e){ce(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class Ut{constructor({uid:e,auth:t,stsTokenManager:r,...i}){this.providerId="firebase",this.proactiveRefresh=new Ig(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=t,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Wa(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await ui(this,this.stsTokenManager.getToken(this.auth,e));return ce(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Eg(this,e)}reload(){return Ag(this)}_assign(e){this!==e&&(ce(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>({...t})),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new Ut({...this,auth:e,stsTokenManager:this.stsTokenManager._clone()});return t.metadata._copy(this.metadata),t}_onReload(e){ce(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ko(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kt(this.auth.app))return Promise.reject(vn(this.auth));const e=await this.getIdToken();return await ui(this,Tg(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return{uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>({...e})),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId,...this.metadata.toJSON(),apiKey:this.auth.config.apiKey,appName:this.auth.name}}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){const r=t.displayName??void 0,i=t.email??void 0,a=t.phoneNumber??void 0,c=t.photoURL??void 0,p=t.tenantId??void 0,_=t._redirectEventId??void 0,v=t.createdAt??void 0,I=t.lastLoginAt??void 0,{uid:P,emailVerified:V,isAnonymous:G,providerData:W,stsTokenManager:Q}=t;ce(P&&Q,e,"internal-error");const Y=ni.fromJSON(this.name,Q);ce(typeof P=="string",e,"internal-error"),Hn(r,e.name),Hn(i,e.name),ce(typeof V=="boolean",e,"internal-error"),ce(typeof G=="boolean",e,"internal-error"),Hn(a,e.name),Hn(c,e.name),Hn(p,e.name),Hn(_,e.name),Hn(v,e.name),Hn(I,e.name);const J=new Ut({uid:P,auth:e,email:i,emailVerified:V,displayName:r,isAnonymous:G,photoURL:c,phoneNumber:a,tenantId:p,stsTokenManager:Y,createdAt:v,lastLoginAt:I});return W&&Array.isArray(W)&&(J.providerData=W.map(_e=>({..._e}))),_&&(J._redirectEventId=_),J}static async _fromIdTokenResponse(e,t,r=!1){const i=new ni;i.updateFromServerResponse(t);const a=new Ut({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await ko(a),a}static async _fromGetAccountInfoResponse(e,t,r){const i=t.users[0];ce(i.localId!==void 0,"internal-error");const a=i.providerUserInfo!==void 0?rh(i.providerUserInfo):[],c=!(i.email&&i.passwordHash)&&!a?.length,p=new ni;p.updateFromIdToken(r);const _=new Ut({uid:i.localId,auth:e,stsTokenManager:p,isAnonymous:c}),v={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new Wa(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!a?.length};return Object.assign(_,v),_}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wc=new Map;function _n(n){wn(n instanceof Function,"Expected a class definition");let e=wc.get(n);return e?(wn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,wc.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ih{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ih.type="NONE";const Ic=ih;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yo(n,e,t){return`firebase:${n}:${e}:${t}`}class ri{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:i,name:a}=this.auth;this.fullUserKey=yo(this.userKey,i.apiKey,a),this.fullPersistenceKey=yo("persistence",i.apiKey,a),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await Po(this.auth,{idToken:e}).catch(()=>{});return t?Ut._fromGetAccountInfoResponse(this.auth,t,e):null}return Ut._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ri(_n(Ic),e,r);const i=(await Promise.all(t.map(async v=>{if(await v._isAvailable())return v}))).filter(v=>v);let a=i[0]||_n(Ic);const c=yo(r,e.config.apiKey,e.name);let p=null;for(const v of t)try{const I=await v._get(c);if(I){let P;if(typeof I=="string"){const V=await Po(e,{idToken:I}).catch(()=>{});if(!V)break;P=await Ut._fromGetAccountInfoResponse(e,V,I)}else P=Ut._fromJSON(e,I);v!==a&&(p=P),a=v;break}}catch{}const _=i.filter(v=>v._shouldAllowMigration);return!a._shouldAllowMigration||!_.length?new ri(a,e,r):(a=_[0],p&&await a._set(c,p.toJSON()),await Promise.all(t.map(async v=>{if(v!==a)try{await v._remove(c)}catch{}})),new ri(a,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ac(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(uh(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sh(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lh(e))return"Blackberry";if(hh(e))return"Webos";if(oh(e))return"Safari";if((e.includes("chrome/")||ah(e))&&!e.includes("edge/"))return"Chrome";if(ch(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if(r?.length===2)return r[1]}return"Other"}function sh(n=gt()){return/firefox\//i.test(n)}function oh(n=gt()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ah(n=gt()){return/crios\//i.test(n)}function uh(n=gt()){return/iemobile/i.test(n)}function ch(n=gt()){return/android/i.test(n)}function lh(n=gt()){return/blackberry/i.test(n)}function hh(n=gt()){return/webos/i.test(n)}function yu(n=gt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Rg(n=gt()){return yu(n)&&!!window.navigator?.standalone}function Pg(){return qd()&&document.documentMode===10}function fh(n=gt()){return yu(n)||ch(n)||hh(n)||lh(n)||/windows phone/i.test(n)||uh(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dh(n,e=[]){let t;switch(n){case"Browser":t=Ac(gt());break;case"Worker":t=`${Ac(gt())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mi}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=a=>new Promise((c,p)=>{try{const _=e(a);c(_)}catch(_){p(_)}});r.onAbort=t,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const i of t)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r?.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dg(n,e={}){return un(n,"GET","/v2/passwordPolicy",Sn(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ng=6;class xg{constructor(e){const t=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=t.minPasswordLength??Ng,t.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=t.maxPasswordLength),t.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=t.containsLowercaseCharacter),t.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=t.containsUppercaseCharacter),t.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=t.containsNumericCharacter),t.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=t.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=e.allowedNonAlphanumericCharacters?.join("")??"",this.forceUpgradeOnSignin=e.forceUpgradeOnSignin??!1,this.schemaVersion=e.schemaVersion}validatePassword(e){const t={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,t),this.validatePasswordCharacterOptions(e,t),t.isValid&&(t.isValid=t.meetsMinPasswordLength??!0),t.isValid&&(t.isValid=t.meetsMaxPasswordLength??!0),t.isValid&&(t.isValid=t.containsLowercaseLetter??!0),t.isValid&&(t.isValid=t.containsUppercaseLetter??!0),t.isValid&&(t.isValid=t.containsNumericCharacter??!0),t.isValid&&(t.isValid=t.containsNonAlphanumericCharacter??!0),t}validatePasswordLengthOptions(e,t){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(t.meetsMinPasswordLength=e.length>=r),i&&(t.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(t,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,t,r,i,a){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vg{constructor(e,t,r,i){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new bc(this),this.idTokenSubscription=new bc(this),this.beforeStateQueue=new kg(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(a=>this._resolvePersistenceManagerAvailable=a)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_n(t)),this._initializationPromise=this.queue(async()=>{if(!this._deleted&&(this.persistenceManager=await ri.create(this,e),this._resolvePersistenceManagerAvailable?.(),!this._deleted)){if(this._popupRedirectResolver?._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=this.currentUser?.uid||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await Po(this,{idToken:e}),r=await Ut._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(r)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){if(kt(this.app)){const a=this.app.settings.authIdToken;return a?new Promise(c=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(a).then(c,c))}):this.directlySetCurrentUser(null)}const t=await this.assertedPersistence.getCurrentUser();let r=t,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=this.redirectUser?._redirectEventId,c=r?._redirectEventId,p=await this.tryRedirectSignIn(e);(!a||a===c)&&p?.user&&(r=p.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(a){r=t,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return ce(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ko(e)}catch(t){if(t?.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=fg()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kt(this.app))return Promise.reject(vn(this));const t=e?Ye(e):null;return t&&ce(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&ce(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kt(this.app)?Promise.reject(vn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kt(this.app)?Promise.reject(vn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(_n(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Dg(this),t=new xg(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ss("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(r.tenantId=this.tenantId),await Cg(this,r)}}toJSON(){return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:this._currentUser?.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_n(e)||this._popupRedirectResolver;ce(t,this,"argument-error"),this.redirectPersistenceManager=await ri.create(this,[_n(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){return this._isInitialized&&await this.queue(async()=>{}),this._currentUser?._redirectEventId===e?this._currentUser:this.redirectUser?._redirectEventId===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const e=this.currentUser?.uid??null;this.lastNotifiedUid!==e&&(this.lastNotifiedUid=e,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,i){if(this._deleted)return()=>{};const a=typeof t=="function"?t:t.next.bind(t);let c=!1;const p=this._isInitialized?Promise.resolve():this._initializationPromise;if(ce(p,this,"internal-error"),p.then(()=>{c||a(this.currentUser)}),typeof t=="function"){const _=e.addObserver(t,r,i);return()=>{c=!0,_()}}else{const _=e.addObserver(t);return()=>{c=!0,_()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return ce(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=dh(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const t=await this.heartbeatServiceProvider.getImmediate({optional:!0})?.getHeartbeatsHeader();t&&(e["X-Firebase-Client"]=t);const r=await this._getAppCheckToken();return r&&(e["X-Firebase-AppCheck"]=r),e}async _getAppCheckToken(){if(kt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=await this.appCheckServiceProvider.getImmediate({optional:!0})?.getToken();return e?.error&&cg(`Error while retrieving App Check token: ${e.error}`),e?.token}}function ar(n){return Ye(n)}class bc{constructor(e){this.auth=e,this.observer=null,this.addObserver=Qd(t=>this.observer=t)}get next(){return ce(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zo={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Og(n){zo=n}function ph(n){return zo.loadJS(n)}function Lg(){return zo.recaptchaEnterpriseScript}function Mg(){return zo.gapiScript}function Fg(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class Ug{constructor(){this.enterprise=new jg}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class jg{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const qg="recaptcha-enterprise",gh="NO_RECAPTCHA";class Bg{constructor(e){this.type=qg,this.auth=ar(e)}async verify(e="verify",t=!1){async function r(a){if(!t){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(c,p)=>{vg(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(_=>{if(_.recaptchaKey===void 0)p(new Error("recaptcha Enterprise site key undefined"));else{const v=new _g(_);return a.tenantId==null?a._agentRecaptchaConfig=v:a._tenantRecaptchaConfigs[a.tenantId]=v,c(v.siteKey)}}).catch(_=>{p(_)})})}function i(a,c,p){const _=window.grecaptcha;Tc(_)?_.enterprise.ready(()=>{_.enterprise.execute(a,{action:e}).then(v=>{c(v)}).catch(()=>{c(gh)})}):p(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Ug().execute("siteKey",{action:"verify"}):new Promise((a,c)=>{r(this.auth).then(p=>{if(!t&&Tc(window.grecaptcha))i(p,a,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let _=Lg();_.length!==0&&(_+=p),ph(_).then(()=>{i(p,a,c)}).catch(v=>{c(v)})}}).catch(p=>{c(p)})})}}async function Sc(n,e,t,r=!1,i=!1){const a=new Bg(n);let c;if(i)c=gh;else try{c=await a.verify(t)}catch{c=await a.verify(t,!0)}const p={...e};if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in p){const _=p.phoneEnrollmentInfo.phoneNumber,v=p.phoneEnrollmentInfo.recaptchaToken;Object.assign(p,{phoneEnrollmentInfo:{phoneNumber:_,recaptchaToken:v,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in p){const _=p.phoneSignInInfo.recaptchaToken;Object.assign(p,{phoneSignInInfo:{recaptchaToken:_,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return p}return r?Object.assign(p,{captchaResp:c}):Object.assign(p,{captchaResponse:c}),Object.assign(p,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(p,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),p}async function Do(n,e,t,r,i){if(n._getRecaptchaConfig()?.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const a=await Sc(n,e,t,t==="getOobCode");return r(n,a)}else return r(n,e).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const c=await Sc(n,e,t,t==="getOobCode");return r(n,c)}else return Promise.reject(a)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $g(n,e){const t=du(n,"auth");if(t.isInitialized()){const i=t.getImmediate(),a=t.getOptions();if(kr(a,e??{}))return i;qt(i,"already-initialized")}return t.initialize({options:e})}function Hg(n,e){const t=e?.persistence||[],r=(Array.isArray(t)?t:[t]).map(_n);e?.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e?.popupRedirectResolver)}function Wg(n,e,t){const r=ar(n);ce(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,a=mh(e),{host:c,port:p}=zg(e),_=p===null?"":`:${p}`,v={url:`${a}//${c}${_}/`},I=Object.freeze({host:c,port:p,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){ce(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),ce(kr(v,r.config.emulator)&&kr(I,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=v,r.emulatorConfig=I,r.settings.appVerificationDisabledForTesting=!0,gi(c)?($l(`${a}//${c}${_}`),Hl("Auth",!0)):Gg()}function mh(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function zg(n){const e=mh(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const a=i[1];return{host:a,port:Cc(r.substr(a.length+1))}}else{const[a,c]=r.split(":");return{host:a,port:Cc(c)}}}function Cc(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Gg(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return yn("not implemented")}_getIdTokenResponse(e){return yn("not implemented")}_linkToIdToken(e,t){return yn("not implemented")}_getReauthenticationResolver(e){return yn("not implemented")}}async function Kg(n,e){return un(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qg(n,e){return Ps(n,"POST","/v1/accounts:signInWithPassword",Sn(n,e))}async function yh(n,e){return un(n,"POST","/v1/accounts:sendOobCode",Sn(n,e))}async function Xg(n,e){return yh(n,e)}async function Yg(n,e){return yh(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jg(n,e){return Ps(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}async function Zg(n,e){return Ps(n,"POST","/v1/accounts:signInWithEmailLink",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends _u{constructor(e,t,r,i=null){super("password",r),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new ys(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ys(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t?.email&&t?.password){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,t,"signInWithPassword",Qg);case"emailLink":return Jg(e,{email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const r={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Do(e,r,"signUpPassword",Kg);case"emailLink":return Zg(e,{idToken:t,email:this._email,oobCode:this._password});default:qt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ii(n,e){return Ps(n,"POST","/v1/accounts:signInWithIdp",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const em="http://localhost";class Nr extends _u{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Nr(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):qt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,...a}=t;if(!r||!i)return null;const c=new Nr(r,i);return c.idToken=a.idToken||void 0,c.accessToken=a.accessToken||void 0,c.secret=a.secret,c.nonce=a.nonce,c.pendingToken=a.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return ii(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,ii(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,ii(e,t)}buildRequest(){const e={requestUri:em,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Cs(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tm(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function nm(n){const e=is(ss(n)).link,t=e?is(ss(e)).deep_link_id:null,r=is(ss(n)).deep_link_id;return(r?is(ss(r)).link:null)||r||t||e||n}class vu{constructor(e){const t=is(ss(e)),r=t.apiKey??null,i=t.oobCode??null,a=tm(t.mode??null);ce(r&&i&&a,"argument-error"),this.apiKey=r,this.operation=a,this.code=i,this.continueUrl=t.continueUrl??null,this.languageCode=t.lang??null,this.tenantId=t.tenantId??null}static parseLink(e){const t=nm(e);try{return new vu(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(){this.providerId=yi.PROVIDER_ID}static credential(e,t){return ys._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=vu.parseLink(t);return ce(r,"argument-error"),ys._fromEmailAndCode(e,r.code,r.tenantId)}}yi.PROVIDER_ID="password";yi.EMAIL_PASSWORD_SIGN_IN_METHOD="password";yi.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _h{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks extends _h{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wn extends ks{constructor(){super("facebook.com")}static credential(e){return Nr._fromParams({providerId:Wn.PROVIDER_ID,signInMethod:Wn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Wn.credentialFromTaggedObject(e)}static credentialFromError(e){return Wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Wn.credential(e.oauthAccessToken)}catch{return null}}}Wn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Wn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends ks{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Nr._fromParams({providerId:zn.PROVIDER_ID,signInMethod:zn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return zn.credentialFromTaggedObject(e)}static credentialFromError(e){return zn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return zn.credential(t,r)}catch{return null}}}zn.GOOGLE_SIGN_IN_METHOD="google.com";zn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn extends ks{constructor(){super("github.com")}static credential(e){return Nr._fromParams({providerId:Gn.PROVIDER_ID,signInMethod:Gn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Gn.credentialFromTaggedObject(e)}static credentialFromError(e){return Gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Gn.credential(e.oauthAccessToken)}catch{return null}}}Gn.GITHUB_SIGN_IN_METHOD="github.com";Gn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kn extends ks{constructor(){super("twitter.com")}static credential(e,t){return Nr._fromParams({providerId:Kn.PROVIDER_ID,signInMethod:Kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Kn.credentialFromTaggedObject(e)}static credentialFromError(e){return Kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Kn.credential(t,r)}catch{return null}}}Kn.TWITTER_SIGN_IN_METHOD="twitter.com";Kn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rm(n,e){return Ps(n,"POST","/v1/accounts:signUp",Sn(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,i=!1){const a=await Ut._fromIdTokenResponse(e,r,i),c=Rc(r);return new xr({user:a,providerId:c,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const i=Rc(r);return new xr({user:e,providerId:i,_tokenResponse:r,operationType:t})}}function Rc(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No extends bn{constructor(e,t,r,i){super(t.code,t.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,No.prototype),this.customData={appName:e.name,tenantId:e.tenantId??void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,i){return new No(e,t,r,i)}}function vh(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?No._fromErrorAndOperation(n,a,e,r):a})}async function im(n,e,t=!1){const r=await ui(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return xr._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(n,e,t=!1){const{auth:r}=n;if(kt(r.app))return Promise.reject(vn(r));const i="reauthenticate";try{const a=await ui(n,vh(r,i,e,n),t);ce(a.idToken,r,"internal-error");const c=mu(a.idToken);ce(c,r,"internal-error");const{sub:p}=c;return ce(n.uid===p,r,"user-mismatch"),xr._forOperation(n,i,a)}catch(a){throw a?.code==="auth/user-not-found"&&qt(r,"user-mismatch"),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Th(n,e,t=!1){if(kt(n.app))return Promise.reject(vn(n));const r="signIn",i=await vh(n,r,e),a=await xr._fromIdTokenResponse(n,r,i);return t||await n._updateCurrentUser(a.user),a}async function om(n,e){return Th(ar(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eh(n){const e=ar(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function jT(n,e,t){const r=ar(n);await Do(r,{requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"},"getOobCode",Yg)}async function qT(n,e,t){if(kt(n.app))return Promise.reject(vn(n));const r=ar(n),c=await Do(r,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",rm).catch(_=>{throw _.code==="auth/password-does-not-meet-requirements"&&Eh(n),_}),p=await xr._fromIdTokenResponse(r,"signIn",c);return await r._updateCurrentUser(p.user),p}function BT(n,e,t){return kt(n.app)?Promise.reject(vn(n)):om(Ye(n),yi.credential(e,t)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&Eh(n),r})}async function $T(n,e){const t=Ye(n),i={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()},{email:a}=await Xg(t.auth,i);a!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function am(n,e){return un(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HT(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=Ye(n),a={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await ui(r,am(r.auth,a));r.displayName=c.displayName||null,r.photoURL=c.photoUrl||null;const p=r.providerData.find(({providerId:_})=>_==="password");p&&(p.displayName=r.displayName,p.photoURL=r.photoURL),await r._updateTokensIfNecessary(c)}function um(n,e,t,r){return Ye(n).onIdTokenChanged(e,t,r)}function cm(n,e,t){return Ye(n).beforeAuthStateChanged(e,t)}function WT(n,e,t,r){return Ye(n).onAuthStateChanged(e,t,r)}function zT(n){return Ye(n).signOut()}const xo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wh{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(xo,"1"),this.storage.removeItem(xo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm=1e3,hm=10;class Ih extends wh{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fh(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),i=this.localCache[t];r!==i&&e(t,i,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,p,_)=>{this.notifyListeners(c,_)});return}const r=e.key;t?this.detachListener():this.stopPolling();const i=()=>{const c=this.storage.getItem(r);!t&&this.localCache[r]===c||this.notifyListeners(r,c)},a=this.storage.getItem(r);Pg()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,hm):i()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},lm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ih.type="LOCAL";const fm=Ih;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends wh{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Ah.type="SESSION";const bh=Ah;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(i=>i.isListeningto(e));if(t)return t;const r=new Go(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:i,data:a}=t.data,c=this.handlersMap[i];if(!c?.size)return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const p=Array.from(c).map(async v=>v(t.origin,a)),_=await dm(p);t.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:_})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Go.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tu(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let a,c;return new Promise((p,_)=>{const v=Tu("",20);i.port1.start();const I=setTimeout(()=>{_(new Error("unsupported_event"))},r);c={messageChannel:i,onMessage(P){const V=P;if(V.data.eventId===v)switch(V.data.status){case"ack":clearTimeout(I),a=setTimeout(()=>{_(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),p(V.data.response);break;default:clearTimeout(I),clearTimeout(a),_(new Error("invalid_response"));break}}},this.handlers.add(c),i.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:v,data:t},[i.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function en(){return window}function gm(n){en().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(){return typeof en().WorkerGlobalScope<"u"&&typeof en().importScripts=="function"}async function mm(){if(!navigator?.serviceWorker)return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ym(){return navigator?.serviceWorker?.controller||null}function _m(){return Sh()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ch="firebaseLocalStorageDb",vm=1,Vo="firebaseLocalStorage",Rh="fbase_key";class Ds{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ko(n,e){return n.transaction([Vo],e?"readwrite":"readonly").objectStore(Vo)}function Tm(){const n=indexedDB.deleteDatabase(Ch);return new Ds(n).toPromise()}function za(){const n=indexedDB.open(Ch,vm);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Vo,{keyPath:Rh})}catch(i){t(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Vo)?e(r):(r.close(),await Tm(),e(await za()))})})}async function Pc(n,e,t){const r=Ko(n,!0).put({[Rh]:e,value:t});return new Ds(r).toPromise()}async function Em(n,e){const t=Ko(n,!1).get(e),r=await new Ds(t).toPromise();return r===void 0?null:r.value}function kc(n,e){const t=Ko(n,!0).delete(e);return new Ds(t).toPromise()}const wm=800,Im=3;class Ph{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await za(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>Im)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Sh()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Go._getInstance(_m()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){if(this.activeServiceWorker=await mm(),!this.activeServiceWorker)return;this.sender=new pm(this.activeServiceWorker);const e=await this.sender._send("ping",{},800);e&&e[0]?.fulfilled&&e[0]?.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ym()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await za();return await Pc(e,xo,"1"),await kc(e,xo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pc(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>Em(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>kc(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const a=Ko(i,!1).getAll();return new Ds(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:a}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(a)&&(this.notifyListeners(i,a),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),wm)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ph.type="LOCAL";const Am=Ph;new Rs(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(n,e){return e?_n(e):(ce(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu extends _u{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ii(e,this._buildIdpRequest())}_linkToIdToken(e,t){return ii(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return ii(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Sm(n){return Th(n.auth,new Eu(n),n.bypassAuthState)}function Cm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),sm(t,new Eu(n),n.bypassAuthState)}async function Rm(n){const{auth:e,user:t}=n;return ce(t,e,"internal-error"),im(t,new Eu(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,r,i,a=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:i,tenantId:a,error:c,type:p}=e;if(c){this.reject(c);return}const _={auth:this.auth,requestUri:t,sessionId:r,tenantId:a||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(p)(_))}catch(v){this.reject(v)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Sm;case"linkViaPopup":case"linkViaRedirect":return Rm;case"reauthViaPopup":case"reauthViaRedirect":return Cm;default:qt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm=new Rs(2e3,1e4);class ti extends kh{constructor(e,t,r,i,a){super(e,t,i,a),this.provider=r,this.authWindow=null,this.pollId=null,ti.currentPopupAction&&ti.currentPopupAction.cancel(),ti.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return ce(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Tu();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Zt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){return this.authWindow?.associatedEvent||null}cancel(){this.reject(Zt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ti.currentPopupAction=null}pollUserCancellation(){const e=()=>{if(this.authWindow?.window?.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Zt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Pm.get())};e()}}ti.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const km="pendingRedirect",_o=new Map;class Dm extends kh{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=_o.get(this.auth._key());if(!e){try{const r=await Nm(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}_o.set(this.auth._key(),e)}return this.bypassAuthState||_o.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Nm(n,e){const t=Om(e),r=Vm(n);if(!await r._isAvailable())return!1;const i=await r._get(t)==="true";return await r._remove(t),i}function xm(n,e){_o.set(n._key(),e)}function Vm(n){return _n(n._redirectPersistence)}function Om(n){return yo(km,n.config.apiKey,n.name)}async function Lm(n,e,t=!1){if(kt(n.app))return Promise.reject(vn(n));const r=ar(n),i=bm(r,e),c=await new Dm(r,i,t).execute();return c&&!t&&(delete c.user._redirectEventId,await r._persistUserIfCurrent(c.user),await r._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mm=600*1e3;class Fm{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!Um(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){if(e.error&&!Dh(e)){const r=e.error.code?.split("auth/")[1]||"internal-error";t.onError(Zt(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Mm&&this.cachedEventUids.clear(),this.cachedEventUids.has(Dc(e))}saveEventToCache(e){this.cachedEventUids.add(Dc(e)),this.lastProcessedEventTime=Date.now()}}function Dc(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Dh({type:n,error:e}){return n==="unknown"&&e?.code==="auth/no-auth-event"}function Um(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Dh(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jm(n,e={}){return un(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Bm=/^https?/;async function $m(n){if(n.config.emulator)return;const{authorizedDomains:e}=await jm(n);for(const t of e)try{if(Hm(t))return}catch{}qt(n,"unauthorized-domain")}function Hm(n){const e=Ha(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===r}if(!Bm.test(t))return!1;if(qm.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new Rs(3e4,6e4);function Nc(){const n=en().___jsl;if(n?.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function zm(n){return new Promise((e,t)=>{function r(){Nc(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nc(),t(Zt(n,"network-request-failed"))},timeout:Wm.get()})}if(en().gapi?.iframes?.Iframe)e(gapi.iframes.getContext());else if(en().gapi?.load)r();else{const i=Fg("iframefcb");return en()[i]=()=>{gapi.load?r():t(Zt(n,"network-request-failed"))},ph(`${Mg()}?onload=${i}`).catch(a=>t(a))}}).catch(e=>{throw vo=null,e})}let vo=null;function Gm(n){return vo=vo||zm(n),vo}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Km=new Rs(5e3,15e3),Qm="__/auth/iframe",Xm="emulator/auth/iframe",Ym={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Jm=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Zm(n){const e=n.config;ce(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?gu(e,Xm):`https://${n.config.authDomain}/${Qm}`,r={apiKey:e.apiKey,appName:n.name,v:mi},i=Jm.get(n.config.apiHost);i&&(r.eid=i);const a=n._getFrameworks();return a.length&&(r.fw=a.join(",")),`${t}?${Cs(r).slice(1)}`}async function ey(n){const e=await Gm(n),t=en().gapi;return ce(t,n,"internal-error"),e.open({where:document.body,url:Zm(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ym,dontclear:!0},r=>new Promise(async(i,a)=>{await r.restyle({setHideOnLeave:!1});const c=Zt(n,"network-request-failed"),p=en().setTimeout(()=>{a(c)},Km.get());function _(){en().clearTimeout(p),i(r)}r.ping(_).then(_,()=>{a(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ty={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ny=500,ry=600,iy="_blank",sy="http://localhost";class xc{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function oy(n,e,t,r=ny,i=ry){const a=Math.max((window.screen.availHeight-i)/2,0).toString(),c=Math.max((window.screen.availWidth-r)/2,0).toString();let p="";const _={...ty,width:r.toString(),height:i.toString(),top:a,left:c},v=gt().toLowerCase();t&&(p=ah(v)?iy:t),sh(v)&&(e=e||sy,_.scrollbars="yes");const I=Object.entries(_).reduce((V,[G,W])=>`${V}${G}=${W},`,"");if(Rg(v)&&p!=="_self")return ay(e||"",p),new xc(null);const P=window.open(e||"",p,I);ce(P,n,"popup-blocked");try{P.focus()}catch{}return new xc(P)}function ay(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uy="__/auth/handler",cy="emulator/auth/handler",ly=encodeURIComponent("fac");async function Vc(n,e,t,r,i,a){ce(n.config.authDomain,n,"auth-domain-config-required"),ce(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:mi,eventId:i};if(e instanceof _h){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",Kd(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[I,P]of Object.entries({}))c[I]=P}if(e instanceof ks){const I=e.getScopes().filter(P=>P!=="");I.length>0&&(c.scopes=I.join(","))}n.tenantId&&(c.tid=n.tenantId);const p=c;for(const I of Object.keys(p))p[I]===void 0&&delete p[I];const _=await n._getAppCheckToken(),v=_?`#${ly}=${encodeURIComponent(_)}`:"";return`${hy(n)}?${Cs(p).slice(1)}${v}`}function hy({config:n}){return n.emulator?gu(n,cy):`https://${n.authDomain}/${uy}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa="webStorageSupport";class fy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bh,this._completeRedirectFn=Lm,this._overrideRedirectResult=xm}async _openPopup(e,t,r,i){wn(this.eventManagers[e._key()]?.manager,"_initialize() not called before _openPopup()");const a=await Vc(e,t,r,Ha(),i);return oy(e,a,Tu())}async _openRedirect(e,t,r,i){await this._originValidation(e);const a=await Vc(e,t,r,Ha(),i);return gm(a),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:i,promise:a}=this.eventManagers[t];return i?Promise.resolve(i):(wn(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await ey(e),r=new Fm(e);return t.register("authEvent",i=>(ce(i?.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(xa,{type:xa},i=>{const a=i?.[0]?.[xa];a!==void 0&&t(!!a),qt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=$m(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return fh()||oh()||yu()}}const dy=fy;var Oc="@firebase/auth",Lc="1.11.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class py{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){return this.assertAuthConfigured(),this.auth.currentUser?.uid||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e(r?.stsTokenManager.accessToken||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){ce(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gy(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function my(n){ai(new Dr("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:c,authDomain:p}=r.options;ce(c&&!c.includes(":"),"invalid-api-key",{appName:r.name});const _={apiKey:c,authDomain:p,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:dh(n)},v=new Vg(r,i,a,_);return Hg(v,t),v},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),ai(new Dr("auth-internal",e=>{const t=ar(e.getProvider("auth").getImmediate());return(r=>new py(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Jn(Oc,Lc,gy(n)),Jn(Oc,Lc,"esm2020")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yy=300,_y=Bl("authIdTokenMaxAge")||yy;let Mc=null;const vy=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>_y)return;const i=t?.token;Mc!==i&&(Mc=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Ty(n=Kl()){const e=du(n,"auth");if(e.isInitialized())return e.getImmediate();const t=$g(n,{popupRedirectResolver:dy,persistence:[Am,fm,bh]}),r=Bl("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const a=new URL(r,location.origin);if(location.origin===a.origin){const c=vy(a.toString());cm(t,c,()=>c(t.currentUser)),um(t,p=>c(p))}}const i=jl("auth");return i&&Wg(t,`http://${i}`),t}function Ey(){return document.getElementsByTagName("head")?.[0]??document}Og({loadJS(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=i=>{const a=Zt("internal-error");a.customData=i,t(a)},r.type="text/javascript",r.charset="UTF-8",Ey().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});my("Browser");var Fc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Zn,Nh;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(l,C){function S(){}S.prototype=C.prototype,l.F=C.prototype,l.prototype=new S,l.prototype.constructor=l,l.D=function(x,D,M){for(var b=Array(arguments.length-2),Ge=2;Ge<arguments.length;Ge++)b[Ge-2]=arguments[Ge];return C.prototype[D].apply(x,b)}}function t(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(r,t),r.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(l,C,S){S||(S=0);const x=Array(16);if(typeof C=="string")for(var D=0;D<16;++D)x[D]=C.charCodeAt(S++)|C.charCodeAt(S++)<<8|C.charCodeAt(S++)<<16|C.charCodeAt(S++)<<24;else for(D=0;D<16;++D)x[D]=C[S++]|C[S++]<<8|C[S++]<<16|C[S++]<<24;C=l.g[0],S=l.g[1],D=l.g[2];let M=l.g[3],b;b=C+(M^S&(D^M))+x[0]+3614090360&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[1]+3905402710&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[2]+606105819&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[3]+3250441966&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[4]+4118548399&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[5]+1200080426&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[6]+2821735955&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[7]+4249261313&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[8]+1770035416&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[9]+2336552879&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[10]+4294925233&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[11]+2304563134&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(M^S&(D^M))+x[12]+1804603682&4294967295,C=S+(b<<7&4294967295|b>>>25),b=M+(D^C&(S^D))+x[13]+4254626195&4294967295,M=C+(b<<12&4294967295|b>>>20),b=D+(S^M&(C^S))+x[14]+2792965006&4294967295,D=M+(b<<17&4294967295|b>>>15),b=S+(C^D&(M^C))+x[15]+1236535329&4294967295,S=D+(b<<22&4294967295|b>>>10),b=C+(D^M&(S^D))+x[1]+4129170786&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[6]+3225465664&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[11]+643717713&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[0]+3921069994&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[5]+3593408605&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[10]+38016083&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[15]+3634488961&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[4]+3889429448&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[9]+568446438&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[14]+3275163606&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[3]+4107603335&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[8]+1163531501&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(D^M&(S^D))+x[13]+2850285829&4294967295,C=S+(b<<5&4294967295|b>>>27),b=M+(S^D&(C^S))+x[2]+4243563512&4294967295,M=C+(b<<9&4294967295|b>>>23),b=D+(C^S&(M^C))+x[7]+1735328473&4294967295,D=M+(b<<14&4294967295|b>>>18),b=S+(M^C&(D^M))+x[12]+2368359562&4294967295,S=D+(b<<20&4294967295|b>>>12),b=C+(S^D^M)+x[5]+4294588738&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[8]+2272392833&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[11]+1839030562&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[14]+4259657740&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[1]+2763975236&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[4]+1272893353&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[7]+4139469664&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[10]+3200236656&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[13]+681279174&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[0]+3936430074&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[3]+3572445317&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[6]+76029189&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(S^D^M)+x[9]+3654602809&4294967295,C=S+(b<<4&4294967295|b>>>28),b=M+(C^S^D)+x[12]+3873151461&4294967295,M=C+(b<<11&4294967295|b>>>21),b=D+(M^C^S)+x[15]+530742520&4294967295,D=M+(b<<16&4294967295|b>>>16),b=S+(D^M^C)+x[2]+3299628645&4294967295,S=D+(b<<23&4294967295|b>>>9),b=C+(D^(S|~M))+x[0]+4096336452&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[7]+1126891415&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[14]+2878612391&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[5]+4237533241&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[12]+1700485571&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[3]+2399980690&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[10]+4293915773&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[1]+2240044497&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[8]+1873313359&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[15]+4264355552&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[6]+2734768916&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[13]+1309151649&4294967295,S=D+(b<<21&4294967295|b>>>11),b=C+(D^(S|~M))+x[4]+4149444226&4294967295,C=S+(b<<6&4294967295|b>>>26),b=M+(S^(C|~D))+x[11]+3174756917&4294967295,M=C+(b<<10&4294967295|b>>>22),b=D+(C^(M|~S))+x[2]+718787259&4294967295,D=M+(b<<15&4294967295|b>>>17),b=S+(M^(D|~C))+x[9]+3951481745&4294967295,l.g[0]=l.g[0]+C&4294967295,l.g[1]=l.g[1]+(D+(b<<21&4294967295|b>>>11))&4294967295,l.g[2]=l.g[2]+D&4294967295,l.g[3]=l.g[3]+M&4294967295}r.prototype.v=function(l,C){C===void 0&&(C=l.length);const S=C-this.blockSize,x=this.C;let D=this.h,M=0;for(;M<C;){if(D==0)for(;M<=S;)i(this,l,M),M+=this.blockSize;if(typeof l=="string"){for(;M<C;)if(x[D++]=l.charCodeAt(M++),D==this.blockSize){i(this,x),D=0;break}}else for(;M<C;)if(x[D++]=l[M++],D==this.blockSize){i(this,x),D=0;break}}this.h=D,this.o+=C},r.prototype.A=function(){var l=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);l[0]=128;for(var C=1;C<l.length-8;++C)l[C]=0;C=this.o*8;for(var S=l.length-8;S<l.length;++S)l[S]=C&255,C/=256;for(this.v(l),l=Array(16),C=0,S=0;S<4;++S)for(let x=0;x<32;x+=8)l[C++]=this.g[S]>>>x&255;return l};function a(l,C){var S=p;return Object.prototype.hasOwnProperty.call(S,l)?S[l]:S[l]=C(l)}function c(l,C){this.h=C;const S=[];let x=!0;for(let D=l.length-1;D>=0;D--){const M=l[D]|0;x&&M==C||(S[D]=M,x=!1)}this.g=S}var p={};function _(l){return-128<=l&&l<128?a(l,function(C){return new c([C|0],C<0?-1:0)}):new c([l|0],l<0?-1:0)}function v(l){if(isNaN(l)||!isFinite(l))return P;if(l<0)return Y(v(-l));const C=[];let S=1;for(let x=0;l>=S;x++)C[x]=l/S|0,S*=4294967296;return new c(C,0)}function I(l,C){if(l.length==0)throw Error("number format error: empty string");if(C=C||10,C<2||36<C)throw Error("radix out of range: "+C);if(l.charAt(0)=="-")return Y(I(l.substring(1),C));if(l.indexOf("-")>=0)throw Error('number format error: interior "-" character');const S=v(Math.pow(C,8));let x=P;for(let M=0;M<l.length;M+=8){var D=Math.min(8,l.length-M);const b=parseInt(l.substring(M,M+D),C);D<8?(D=v(Math.pow(C,D)),x=x.j(D).add(v(b))):(x=x.j(S),x=x.add(v(b)))}return x}var P=_(0),V=_(1),G=_(16777216);n=c.prototype,n.m=function(){if(Q(this))return-Y(this).m();let l=0,C=1;for(let S=0;S<this.g.length;S++){const x=this.i(S);l+=(x>=0?x:4294967296+x)*C,C*=4294967296}return l},n.toString=function(l){if(l=l||10,l<2||36<l)throw Error("radix out of range: "+l);if(W(this))return"0";if(Q(this))return"-"+Y(this).toString(l);const C=v(Math.pow(l,6));var S=this;let x="";for(;;){const D=De(S,C).g;S=J(S,D.j(C));let M=((S.g.length>0?S.g[0]:S.h)>>>0).toString(l);if(S=D,W(S))return M+x;for(;M.length<6;)M="0"+M;x=M+x}},n.i=function(l){return l<0?0:l<this.g.length?this.g[l]:this.h};function W(l){if(l.h!=0)return!1;for(let C=0;C<l.g.length;C++)if(l.g[C]!=0)return!1;return!0}function Q(l){return l.h==-1}n.l=function(l){return l=J(this,l),Q(l)?-1:W(l)?0:1};function Y(l){const C=l.g.length,S=[];for(let x=0;x<C;x++)S[x]=~l.g[x];return new c(S,~l.h).add(V)}n.abs=function(){return Q(this)?Y(this):this},n.add=function(l){const C=Math.max(this.g.length,l.g.length),S=[];let x=0;for(let D=0;D<=C;D++){let M=x+(this.i(D)&65535)+(l.i(D)&65535),b=(M>>>16)+(this.i(D)>>>16)+(l.i(D)>>>16);x=b>>>16,M&=65535,b&=65535,S[D]=b<<16|M}return new c(S,S[S.length-1]&-2147483648?-1:0)};function J(l,C){return l.add(Y(C))}n.j=function(l){if(W(this)||W(l))return P;if(Q(this))return Q(l)?Y(this).j(Y(l)):Y(Y(this).j(l));if(Q(l))return Y(this.j(Y(l)));if(this.l(G)<0&&l.l(G)<0)return v(this.m()*l.m());const C=this.g.length+l.g.length,S=[];for(var x=0;x<2*C;x++)S[x]=0;for(x=0;x<this.g.length;x++)for(let D=0;D<l.g.length;D++){const M=this.i(x)>>>16,b=this.i(x)&65535,Ge=l.i(D)>>>16,cn=l.i(D)&65535;S[2*x+2*D]+=b*cn,_e(S,2*x+2*D),S[2*x+2*D+1]+=M*cn,_e(S,2*x+2*D+1),S[2*x+2*D+1]+=b*Ge,_e(S,2*x+2*D+1),S[2*x+2*D+2]+=M*Ge,_e(S,2*x+2*D+2)}for(l=0;l<C;l++)S[l]=S[2*l+1]<<16|S[2*l];for(l=C;l<2*C;l++)S[l]=0;return new c(S,0)};function _e(l,C){for(;(l[C]&65535)!=l[C];)l[C+1]+=l[C]>>>16,l[C]&=65535,C++}function ve(l,C){this.g=l,this.h=C}function De(l,C){if(W(C))throw Error("division by zero");if(W(l))return new ve(P,P);if(Q(l))return C=De(Y(l),C),new ve(Y(C.g),Y(C.h));if(Q(C))return C=De(l,Y(C)),new ve(Y(C.g),C.h);if(l.g.length>30){if(Q(l)||Q(C))throw Error("slowDivide_ only works with positive integers.");for(var S=V,x=C;x.l(l)<=0;)S=Ze(S),x=Ze(x);var D=qe(S,1),M=qe(x,1);for(x=qe(x,2),S=qe(S,2);!W(x);){var b=M.add(x);b.l(l)<=0&&(D=D.add(S),M=b),x=qe(x,1),S=qe(S,1)}return C=J(l,D.j(C)),new ve(D,C)}for(D=P;l.l(C)>=0;){for(S=Math.max(1,Math.floor(l.m()/C.m())),x=Math.ceil(Math.log(S)/Math.LN2),x=x<=48?1:Math.pow(2,x-48),M=v(S),b=M.j(C);Q(b)||b.l(l)>0;)S-=x,M=v(S),b=M.j(C);W(M)&&(M=V),D=D.add(M),l=J(l,b)}return new ve(D,l)}n.B=function(l){return De(this,l).h},n.and=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)&l.i(x);return new c(S,this.h&l.h)},n.or=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)|l.i(x);return new c(S,this.h|l.h)},n.xor=function(l){const C=Math.max(this.g.length,l.g.length),S=[];for(let x=0;x<C;x++)S[x]=this.i(x)^l.i(x);return new c(S,this.h^l.h)};function Ze(l){const C=l.g.length+1,S=[];for(let x=0;x<C;x++)S[x]=l.i(x)<<1|l.i(x-1)>>>31;return new c(S,l.h)}function qe(l,C){const S=C>>5;C%=32;const x=l.g.length-S,D=[];for(let M=0;M<x;M++)D[M]=C>0?l.i(M+S)>>>C|l.i(M+S+1)<<32-C:l.i(M+S);return new c(D,l.h)}r.prototype.digest=r.prototype.A,r.prototype.reset=r.prototype.u,r.prototype.update=r.prototype.v,Nh=r,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.B,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=v,c.fromString=I,Zn=c}).apply(typeof Fc<"u"?Fc:typeof self<"u"?self:typeof window<"u"?window:{});var co=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var xh,os,Vh,To,Ga,Oh,Lh,Mh;(function(){var n,e=Object.defineProperty;function t(o){o=[typeof globalThis=="object"&&globalThis,o,typeof window=="object"&&window,typeof self=="object"&&self,typeof co=="object"&&co];for(var f=0;f<o.length;++f){var g=o[f];if(g&&g.Math==Math)return g}throw Error("Cannot find global object")}var r=t(this);function i(o,f){if(f)e:{var g=r;o=o.split(".");for(var E=0;E<o.length-1;E++){var L=o[E];if(!(L in g))break e;g=g[L]}o=o[o.length-1],E=g[o],f=f(E),f!=E&&f!=null&&e(g,o,{configurable:!0,writable:!0,value:f})}}i("Symbol.dispose",function(o){return o||Symbol("Symbol.dispose")}),i("Array.prototype.values",function(o){return o||function(){return this[Symbol.iterator]()}}),i("Object.entries",function(o){return o||function(f){var g=[],E;for(E in f)Object.prototype.hasOwnProperty.call(f,E)&&g.push([E,f[E]]);return g}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var a=a||{},c=this||self;function p(o){var f=typeof o;return f=="object"&&o!=null||f=="function"}function _(o,f,g){return o.call.apply(o.bind,arguments)}function v(o,f,g){return v=_,v.apply(null,arguments)}function I(o,f){var g=Array.prototype.slice.call(arguments,1);return function(){var E=g.slice();return E.push.apply(E,arguments),o.apply(this,E)}}function P(o,f){function g(){}g.prototype=f.prototype,o.Z=f.prototype,o.prototype=new g,o.prototype.constructor=o,o.Ob=function(E,L,O){for(var K=Array(arguments.length-2),fe=2;fe<arguments.length;fe++)K[fe-2]=arguments[fe];return f.prototype[L].apply(E,K)}}var V=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?o=>o&&AsyncContext.Snapshot.wrap(o):o=>o;function G(o){const f=o.length;if(f>0){const g=Array(f);for(let E=0;E<f;E++)g[E]=o[E];return g}return[]}function W(o,f){for(let E=1;E<arguments.length;E++){const L=arguments[E];var g=typeof L;if(g=g!="object"?g:L?Array.isArray(L)?"array":g:"null",g=="array"||g=="object"&&typeof L.length=="number"){g=o.length||0;const O=L.length||0;o.length=g+O;for(let K=0;K<O;K++)o[g+K]=L[K]}else o.push(L)}}class Q{constructor(f,g){this.i=f,this.j=g,this.h=0,this.g=null}get(){let f;return this.h>0?(this.h--,f=this.g,this.g=f.next,f.next=null):f=this.i(),f}}function Y(o){c.setTimeout(()=>{throw o},0)}function J(){var o=l;let f=null;return o.g&&(f=o.g,o.g=o.g.next,o.g||(o.h=null),f.next=null),f}class _e{constructor(){this.h=this.g=null}add(f,g){const E=ve.get();E.set(f,g),this.h?this.h.next=E:this.g=E,this.h=E}}var ve=new Q(()=>new De,o=>o.reset());class De{constructor(){this.next=this.g=this.h=null}set(f,g){this.h=f,this.g=g,this.next=null}reset(){this.next=this.g=this.h=null}}let Ze,qe=!1,l=new _e,C=()=>{const o=Promise.resolve(void 0);Ze=()=>{o.then(S)}};function S(){for(var o;o=J();){try{o.h.call(o.g)}catch(g){Y(g)}var f=ve;f.j(o),f.h<100&&(f.h++,o.next=f.g,f.g=o)}qe=!1}function x(){this.u=this.u,this.C=this.C}x.prototype.u=!1,x.prototype.dispose=function(){this.u||(this.u=!0,this.N())},x.prototype[Symbol.dispose]=function(){this.dispose()},x.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function D(o,f){this.type=o,this.g=this.target=f,this.defaultPrevented=!1}D.prototype.h=function(){this.defaultPrevented=!0};var M=(function(){if(!c.addEventListener||!Object.defineProperty)return!1;var o=!1,f=Object.defineProperty({},"passive",{get:function(){o=!0}});try{const g=()=>{};c.addEventListener("test",g,f),c.removeEventListener("test",g,f)}catch{}return o})();function b(o){return/^[\s\xa0]*$/.test(o)}function Ge(o,f){D.call(this,o?o.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,o&&this.init(o,f)}P(Ge,D),Ge.prototype.init=function(o,f){const g=this.type=o.type,E=o.changedTouches&&o.changedTouches.length?o.changedTouches[0]:null;this.target=o.target||o.srcElement,this.g=f,f=o.relatedTarget,f||(g=="mouseover"?f=o.fromElement:g=="mouseout"&&(f=o.toElement)),this.relatedTarget=f,E?(this.clientX=E.clientX!==void 0?E.clientX:E.pageX,this.clientY=E.clientY!==void 0?E.clientY:E.pageY,this.screenX=E.screenX||0,this.screenY=E.screenY||0):(this.clientX=o.clientX!==void 0?o.clientX:o.pageX,this.clientY=o.clientY!==void 0?o.clientY:o.pageY,this.screenX=o.screenX||0,this.screenY=o.screenY||0),this.button=o.button,this.key=o.key||"",this.ctrlKey=o.ctrlKey,this.altKey=o.altKey,this.shiftKey=o.shiftKey,this.metaKey=o.metaKey,this.pointerId=o.pointerId||0,this.pointerType=o.pointerType,this.state=o.state,this.i=o,o.defaultPrevented&&Ge.Z.h.call(this)},Ge.prototype.h=function(){Ge.Z.h.call(this);const o=this.i;o.preventDefault?o.preventDefault():o.returnValue=!1};var cn="closure_listenable_"+(Math.random()*1e6|0),da=0;function Nt(o,f,g,E,L){this.listener=o,this.proxy=null,this.src=f,this.type=g,this.capture=!!E,this.ha=L,this.key=++da,this.da=this.fa=!1}function Cn(o){o.da=!0,o.listener=null,o.proxy=null,o.src=null,o.ha=null}function xt(o,f,g){for(const E in o)f.call(g,o[E],E,o)}function Fs(o,f){for(const g in o)f.call(void 0,o[g],g,o)}function Ai(o){const f={};for(const g in o)f[g]=o[g];return f}const bi="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Ur(o,f){let g,E;for(let L=1;L<arguments.length;L++){E=arguments[L];for(g in E)o[g]=E[g];for(let O=0;O<bi.length;O++)g=bi[O],Object.prototype.hasOwnProperty.call(E,g)&&(o[g]=E[g])}}function lr(o){this.src=o,this.g={},this.h=0}lr.prototype.add=function(o,f,g,E,L){const O=o.toString();o=this.g[O],o||(o=this.g[O]=[],this.h++);const K=Ci(o,f,E,L);return K>-1?(f=o[K],g||(f.fa=!1)):(f=new Nt(f,this.src,O,!!E,L),f.fa=g,o.push(f)),f};function Si(o,f){const g=f.type;if(g in o.g){var E=o.g[g],L=Array.prototype.indexOf.call(E,f,void 0),O;(O=L>=0)&&Array.prototype.splice.call(E,L,1),O&&(Cn(f),o.g[g].length==0&&(delete o.g[g],o.h--))}}function Ci(o,f,g,E){for(let L=0;L<o.length;++L){const O=o[L];if(!O.da&&O.listener==f&&O.capture==!!g&&O.ha==E)return L}return-1}var Ri="closure_lm_"+(Math.random()*1e6|0),Pi={};function ki(o,f,g,E,L){if(Array.isArray(f)){for(let O=0;O<f.length;O++)ki(o,f[O],g,E,L);return null}return g=St(g),o&&o[cn]?o.J(f,g,p(E)?!!E.capture:!1,L):bt(o,f,g,!1,E,L)}function bt(o,f,g,E,L,O){if(!f)throw Error("Invalid event type");const K=p(L)?!!L.capture:!!L;let fe=hr(o);if(fe||(o[Ri]=fe=new lr(o)),g=fe.add(f,g,E,K,O),g.proxy)return g;if(E=pa(),g.proxy=E,E.src=o,E.listener=g,o.addEventListener)M||(L=K),L===void 0&&(L=!1),o.addEventListener(f.toString(),E,L);else if(o.attachEvent)o.attachEvent(Di(f.toString()),E);else if(o.addListener&&o.removeListener)o.addListener(E);else throw Error("addEventListener and attachEvent are unavailable.");return g}function pa(){function o(g){return f.call(o.src,o.listener,g)}const f=ga;return o}function ln(o,f,g,E,L){if(Array.isArray(f))for(var O=0;O<f.length;O++)ln(o,f[O],g,E,L);else E=p(E)?!!E.capture:!!E,g=St(g),o&&o[cn]?(o=o.i,O=String(f).toString(),O in o.g&&(f=o.g[O],g=Ci(f,g,E,L),g>-1&&(Cn(f[g]),Array.prototype.splice.call(f,g,1),f.length==0&&(delete o.g[O],o.h--)))):o&&(o=hr(o))&&(f=o.g[f.toString()],o=-1,f&&(o=Ci(f,g,E,L)),(g=o>-1?f[o]:null)&&Rn(g))}function Rn(o){if(typeof o!="number"&&o&&!o.da){var f=o.src;if(f&&f[cn])Si(f.i,o);else{var g=o.type,E=o.proxy;f.removeEventListener?f.removeEventListener(g,E,o.capture):f.detachEvent?f.detachEvent(Di(g),E):f.addListener&&f.removeListener&&f.removeListener(E),(g=hr(f))?(Si(g,o),g.h==0&&(g.src=null,f[Ri]=null)):Cn(o)}}}function Di(o){return o in Pi?Pi[o]:Pi[o]="on"+o}function ga(o,f){if(o.da)o=!0;else{f=new Ge(f,this);const g=o.listener,E=o.ha||o.src;o.fa&&Rn(o),o=g.call(E,f)}return o}function hr(o){return o=o[Ri],o instanceof lr?o:null}var Pn="__closure_events_fn_"+(Math.random()*1e9>>>0);function St(o){return typeof o=="function"?o:(o[Pn]||(o[Pn]=function(f){return o.handleEvent(f)}),o[Pn])}function et(){x.call(this),this.i=new lr(this),this.M=this,this.G=null}P(et,x),et.prototype[cn]=!0,et.prototype.removeEventListener=function(o,f,g,E){ln(this,o,f,g,E)};function rt(o,f){var g,E=o.G;if(E)for(g=[];E;E=E.G)g.push(E);if(o=o.M,E=f.type||f,typeof f=="string")f=new D(f,o);else if(f instanceof D)f.target=f.target||o;else{var L=f;f=new D(E,o),Ur(f,L)}L=!0;let O,K;if(g)for(K=g.length-1;K>=0;K--)O=f.g=g[K],L=jr(O,E,!0,f)&&L;if(O=f.g=o,L=jr(O,E,!0,f)&&L,L=jr(O,E,!1,f)&&L,g)for(K=0;K<g.length;K++)O=f.g=g[K],L=jr(O,E,!1,f)&&L}et.prototype.N=function(){if(et.Z.N.call(this),this.i){var o=this.i;for(const f in o.g){const g=o.g[f];for(let E=0;E<g.length;E++)Cn(g[E]);delete o.g[f],o.h--}}this.G=null},et.prototype.J=function(o,f,g,E){return this.i.add(String(o),f,!1,g,E)},et.prototype.K=function(o,f,g,E){return this.i.add(String(o),f,!0,g,E)};function jr(o,f,g,E){if(f=o.i.g[String(f)],!f)return!0;f=f.concat();let L=!0;for(let O=0;O<f.length;++O){const K=f[O];if(K&&!K.da&&K.capture==g){const fe=K.listener,Ue=K.ha||K.src;K.fa&&Si(o.i,K),L=fe.call(Ue,E)!==!1&&L}}return L&&!E.defaultPrevented}function Ct(o,f){if(typeof o!="function")if(o&&typeof o.handleEvent=="function")o=v(o.handleEvent,o);else throw Error("Invalid listener argument");return Number(f)>2147483647?-1:c.setTimeout(o,f||0)}function kn(o){o.g=Ct(()=>{o.g=null,o.i&&(o.i=!1,kn(o))},o.l);const f=o.h;o.h=null,o.m.apply(null,f)}class fr extends x{constructor(f,g){super(),this.m=f,this.l=g,this.h=null,this.i=!1,this.g=null}j(f){this.h=arguments,this.g?this.i=!0:kn(this)}N(){super.N(),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ie(o){x.call(this),this.h=o,this.g={}}P(ie,x);var it=[];function Us(o){xt(o.g,function(f,g){this.g.hasOwnProperty(g)&&Rn(f)},o),o.g={}}ie.prototype.N=function(){ie.Z.N.call(this),Us(this)},ie.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var Ni=c.JSON.stringify,ma=c.JSON.parse,js=class{stringify(o){return c.JSON.stringify(o,void 0)}parse(o){return c.JSON.parse(o,void 0)}};function xi(){}function Dn(){}var mt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Vt(){D.call(this,"d")}P(Vt,D);function $t(){D.call(this,"c")}P($t,D);var hn={},dr=null;function pr(){return dr=dr||new et}hn.Ia="serverreachability";function Vi(o){D.call(this,hn.Ia,o)}P(Vi,D);function gr(o){const f=pr();rt(f,new Vi(f))}hn.STAT_EVENT="statevent";function fn(o,f){D.call(this,hn.STAT_EVENT,o),this.stat=f}P(fn,D);function Be(o){const f=pr();rt(f,new fn(f,o))}hn.Ja="timingevent";function Oi(o,f){D.call(this,hn.Ja,o),this.size=f}P(Oi,D);function Nn(o,f){if(typeof o!="function")throw Error("Fn must not be null and must be a function");return c.setTimeout(function(){o()},f)}function tt(){this.g=!0}tt.prototype.ua=function(){this.g=!1};function ct(o,f,g,E,L,O){o.info(function(){if(o.g)if(O){var K="",fe=O.split("&");for(let ye=0;ye<fe.length;ye++){var Ue=fe[ye].split("=");if(Ue.length>1){const Fe=Ue[0];Ue=Ue[1];const $e=Fe.split("_");K=$e.length>=2&&$e[1]=="type"?K+(Fe+"="+Ue+"&"):K+(Fe+"=redacted&")}}}else K=null;else K=O;return"XMLHTTP REQ ("+E+") [attempt "+L+"]: "+f+`
`+g+`
`+K})}function Li(o,f,g,E,L,O,K){o.info(function(){return"XMLHTTP RESP ("+E+") [ attempt "+L+"]: "+f+`
`+g+`
`+O+" "+K})}function xn(o,f,g,E){o.info(function(){return"XMLHTTP TEXT ("+f+"): "+Bs(o,g)+(E?" "+E:"")})}function qs(o,f){o.info(function(){return"TIMEOUT: "+f})}tt.prototype.info=function(){};function Bs(o,f){if(!o.g)return f;if(!f)return null;try{const O=JSON.parse(f);if(O){for(o=0;o<O.length;o++)if(Array.isArray(O[o])){var g=O[o];if(!(g.length<2)){var E=g[1];if(Array.isArray(E)&&!(E.length<1)){var L=E[0];if(L!="noop"&&L!="stop"&&L!="close")for(let K=1;K<E.length;K++)E[K]=""}}}}return Ni(O)}catch{return f}}var Ot={NO_ERROR:0,cb:1,qb:2,pb:3,kb:4,ob:5,rb:6,Ga:7,TIMEOUT:8,ub:9},dn={ib:"complete",Fb:"success",ERROR:"error",Ga:"abort",xb:"ready",yb:"readystatechange",TIMEOUT:"timeout",sb:"incrementaldata",wb:"progress",lb:"downloadprogress",Nb:"uploadprogress"},qr;function Vn(){}P(Vn,xi),Vn.prototype.g=function(){return new XMLHttpRequest},qr=new Vn;function mr(o){return encodeURIComponent(String(o))}function ya(o){var f=1;o=o.split(":");const g=[];for(;f>0&&o.length;)g.push(o.shift()),f--;return o.length&&g.push(o.join(":")),g}function Ht(o,f,g,E){this.j=o,this.i=f,this.l=g,this.S=E||1,this.V=new ie(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new Mi}function Mi(){this.i=null,this.g="",this.h=!1}var $s={},Fi={};function Br(o,f,g){o.M=1,o.A=Mn(Ve(f)),o.u=g,o.R=!0,Hs(o,null)}function Hs(o,f){o.F=Date.now(),Ln(o),o.B=Ve(o.A);var g=o.B,E=o.S;Array.isArray(E)||(E=[String(E)]),Ys(g.i,"t",E),o.C=0,g=o.j.L,o.h=new Mi,o.g=B(o.j,g?f:null,!o.u),o.P>0&&(o.O=new fr(v(o.Y,o,o.g),o.P)),f=o.V,g=o.g,E=o.ba;var L="readystatechange";Array.isArray(L)||(L&&(it[0]=L.toString()),L=it);for(let O=0;O<L.length;O++){const K=ki(g,L[O],E||f.handleEvent,!1,f.h||f);if(!K)break;f.g[K.key]=K}f=o.J?Ai(o.J):{},o.u?(o.v||(o.v="POST"),f["Content-Type"]="application/x-www-form-urlencoded",o.g.ea(o.B,o.v,o.u,f)):(o.v="GET",o.g.ea(o.B,o.v,null,f)),gr(),ct(o.i,o.v,o.B,o.l,o.S,o.u)}Ht.prototype.ba=function(o){o=o.target;const f=this.O;f&&Mt(o)==3?f.j():this.Y(o)},Ht.prototype.Y=function(o){try{if(o==this.g)e:{const fe=Mt(this.g),Ue=this.g.ya(),ye=this.g.ca();if(!(fe<3)&&(fe!=3||this.g&&(this.h.h||this.g.la()||Zi(this.g)))){this.K||fe!=4||Ue==7||(Ue==8||ye<=0?gr(3):gr(2)),$r(this);var f=this.g.ca();this.X=f;var g=On(this);if(this.o=f==200,Li(this.i,this.v,this.B,this.l,this.S,fe,f),this.o){if(this.U&&!this.L){t:{if(this.g){var E,L=this.g;if((E=L.g?L.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!b(E)){var O=E;break t}}O=null}if(o=O)xn(this.i,this.l,o,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Hr(this,o);else{this.o=!1,this.m=3,Be(12),Et(this),_r(this);break e}}if(this.R){o=!0;let Fe;for(;!this.K&&this.C<g.length;)if(Fe=ji(this,g),Fe==Fi){fe==4&&(this.m=4,Be(14),o=!1),xn(this.i,this.l,null,"[Incomplete Response]");break}else if(Fe==$s){this.m=4,Be(15),xn(this.i,this.l,g,"[Invalid Chunk]"),o=!1;break}else xn(this.i,this.l,Fe,null),Hr(this,Fe);if(Ui(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),fe!=4||g.length!=0||this.h.h||(this.m=1,Be(16),o=!1),this.o=this.o&&o,!o)xn(this.i,this.l,g,"[Invalid Chunked Response]"),Et(this),_r(this);else if(g.length>0&&!this.W){this.W=!0;var K=this.j;K.g==this&&K.aa&&!K.P&&(K.j.info("Great, no buffering proxy detected. Bytes received: "+g.length),d(K),K.P=!0,Be(11))}}else xn(this.i,this.l,g,null),Hr(this,g);fe==4&&Et(this),this.o&&!this.K&&(fe==4?T(this.j,this):(this.o=!1,Ln(this)))}else es(this.g),f==400&&g.indexOf("Unknown SID")>0?(this.m=3,Be(12)):(this.m=0,Be(13)),Et(this),_r(this)}}}catch{}finally{}};function On(o){if(!Ui(o))return o.g.la();const f=Zi(o.g);if(f==="")return"";let g="";const E=f.length,L=Mt(o.g)==4;if(!o.h.i){if(typeof TextDecoder>"u")return Et(o),_r(o),"";o.h.i=new c.TextDecoder}for(let O=0;O<E;O++)o.h.h=!0,g+=o.h.i.decode(f[O],{stream:!(L&&O==E-1)});return f.length=0,o.h.g+=g,o.C=0,o.h.g}function Ui(o){return o.g?o.v=="GET"&&o.M!=2&&o.j.Aa:!1}function ji(o,f){var g=o.C,E=f.indexOf(`
`,g);return E==-1?Fi:(g=Number(f.substring(g,E)),isNaN(g)?$s:(E+=1,E+g>f.length?Fi:(f=f.slice(E,E+g),o.C=E+g,f)))}Ht.prototype.cancel=function(){this.K=!0,Et(this)};function Ln(o){o.T=Date.now()+o.H,yr(o,o.H)}function yr(o,f){if(o.D!=null)throw Error("WatchDog timer not null");o.D=Nn(v(o.aa,o),f)}function $r(o){o.D&&(c.clearTimeout(o.D),o.D=null)}Ht.prototype.aa=function(){this.D=null;const o=Date.now();o-this.T>=0?(qs(this.i,this.B),this.M!=2&&(gr(),Be(17)),Et(this),this.m=2,_r(this)):yr(this,this.T-o)};function _r(o){o.j.I==0||o.K||T(o.j,o)}function Et(o){$r(o);var f=o.O;f&&typeof f.dispose=="function"&&f.dispose(),o.O=null,Us(o.V),o.g&&(f=o.g,o.g=null,f.abort(),f.dispose())}function Hr(o,f){try{var g=o.j;if(g.I!=0&&(g.g==o||vr(g.h,o))){if(!o.L&&vr(g.h,o)&&g.I==3){try{var E=g.Ba.g.parse(f)}catch{E=null}if(Array.isArray(E)&&E.length==3){var L=E;if(L[0]==0){e:if(!g.v){if(g.g)if(g.g.F+3e3<o.F)y(g),Xt(g);else break e;h(g),Be(18)}}else g.xa=L[1],0<g.xa-g.K&&L[2]<37500&&g.F&&g.A==0&&!g.C&&(g.C=Nn(v(g.Va,g),6e3));zs(g.h)<=1&&g.ta&&(g.ta=void 0)}else A(g,11)}else if((o.L||g.g==o)&&y(g),!b(f))for(L=g.Ba.g.parse(f),f=0;f<L.length;f++){let ye=L[f];const Fe=ye[0];if(!(Fe<=g.K))if(g.K=Fe,ye=ye[1],g.I==2)if(ye[0]=="c"){g.M=ye[1],g.ba=ye[2];const $e=ye[3];$e!=null&&(g.ka=$e,g.j.info("VER="+g.ka));const lt=ye[4];lt!=null&&(g.za=lt,g.j.info("SVER="+g.za));const st=ye[5];st!=null&&typeof st=="number"&&st>0&&(E=1.5*st,g.O=E,g.j.info("backChannelRequestTimeoutMs_="+E)),E=g;const He=o.g;if(He){const Bn=He.g?He.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Bn){var O=E.h;O.g||Bn.indexOf("spdy")==-1&&Bn.indexOf("quic")==-1&&Bn.indexOf("h2")==-1||(O.j=O.l,O.g=new Set,O.h&&($i(O,O.h),O.h=null))}if(E.G){const It=He.g?He.g.getResponseHeader("X-HTTP-Session-Id"):null;It&&(E.wa=It,ke(E.J,E.G,It))}}g.I=3,g.l&&g.l.ra(),g.aa&&(g.T=Date.now()-o.F,g.j.info("Handshake RTT: "+g.T+"ms")),E=g;var K=o;if(E.na=q(E,E.L?E.ba:null,E.W),K.L){Gs(E.h,K);var fe=K,Ue=E.O;Ue&&(fe.H=Ue),fe.D&&($r(fe),Ln(fe)),E.g=K}else u(E);g.i.length>0&&qn(g)}else ye[0]!="stop"&&ye[0]!="close"||A(g,7);else g.I==3&&(ye[0]=="stop"||ye[0]=="close"?ye[0]=="stop"?A(g,7):ts(g):ye[0]!="noop"&&g.l&&g.l.qa(ye),g.A=0)}}gr(4)}catch{}}var Ws=class{constructor(o,f){this.g=o,this.map=f}};function qi(o){this.l=o||10,c.PerformanceNavigationTiming?(o=c.performance.getEntriesByType("navigation"),o=o.length>0&&(o[0].nextHopProtocol=="hq"||o[0].nextHopProtocol=="h2")):o=!!(c.chrome&&c.chrome.loadTimes&&c.chrome.loadTimes()&&c.chrome.loadTimes().wasFetchedViaSpdy),this.j=o?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Bi(o){return o.h?!0:o.g?o.g.size>=o.j:!1}function zs(o){return o.h?1:o.g?o.g.size:0}function vr(o,f){return o.h?o.h==f:o.g?o.g.has(f):!1}function $i(o,f){o.g?o.g.add(f):o.h=f}function Gs(o,f){o.h&&o.h==f?o.h=null:o.g&&o.g.has(f)&&o.g.delete(f)}qi.prototype.cancel=function(){if(this.i=Hi(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const o of this.g.values())o.cancel();this.g.clear()}};function Hi(o){if(o.h!=null)return o.i.concat(o.h.G);if(o.g!=null&&o.g.size!==0){let f=o.i;for(const g of o.g.values())f=f.concat(g.G);return f}return G(o.i)}var Wi=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function zi(o,f){if(o){o=o.split("&");for(let g=0;g<o.length;g++){const E=o[g].indexOf("=");let L,O=null;E>=0?(L=o[g].substring(0,E),O=o[g].substring(E+1)):L=o[g],f(L,O?decodeURIComponent(O.replace(/\+/g," ")):"")}}}function Lt(o){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let f;o instanceof Lt?(this.l=o.l,Rt(this,o.j),this.o=o.o,this.g=o.g,Wt(this,o.u),this.h=o.h,Gi(this,Un(o.i)),this.m=o.m):o&&(f=String(o).match(Wi))?(this.l=!1,Rt(this,f[1]||"",!0),this.o=Fn(f[2]||""),this.g=Fn(f[3]||"",!0),Wt(this,f[4]),this.h=Fn(f[5]||"",!0),Gi(this,f[6]||"",!0),this.m=Fn(f[7]||"")):(this.l=!1,this.i=new Er(null,this.l))}Lt.prototype.toString=function(){const o=[];var f=this.j;f&&o.push(zt(f,Qs,!0),":");var g=this.g;return(g||f=="file")&&(o.push("//"),(f=this.o)&&o.push(zt(f,Qs,!0),"@"),o.push(mr(g).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),g=this.u,g!=null&&o.push(":",String(g))),(g=this.h)&&(this.g&&g.charAt(0)!="/"&&o.push("/"),o.push(zt(g,g.charAt(0)=="/"?wt:_a,!0))),(g=this.i.toString())&&o.push("?",g),(g=this.m)&&o.push("#",zt(g,Tr)),o.join("")},Lt.prototype.resolve=function(o){const f=Ve(this);let g=!!o.j;g?Rt(f,o.j):g=!!o.o,g?f.o=o.o:g=!!o.g,g?f.g=o.g:g=o.u!=null;var E=o.h;if(g)Wt(f,o.u);else if(g=!!o.h){if(E.charAt(0)!="/")if(this.g&&!this.h)E="/"+E;else{var L=f.h.lastIndexOf("/");L!=-1&&(E=f.h.slice(0,L+1)+E)}if(L=E,L==".."||L==".")E="";else if(L.indexOf("./")!=-1||L.indexOf("/.")!=-1){E=L.lastIndexOf("/",0)==0,L=L.split("/");const O=[];for(let K=0;K<L.length;){const fe=L[K++];fe=="."?E&&K==L.length&&O.push(""):fe==".."?((O.length>1||O.length==1&&O[0]!="")&&O.pop(),E&&K==L.length&&O.push("")):(O.push(fe),E=!0)}E=O.join("/")}else E=L}return g?f.h=E:g=o.i.toString()!=="",g?Gi(f,Un(o.i)):g=!!o.m,g&&(f.m=o.m),f};function Ve(o){return new Lt(o)}function Rt(o,f,g){o.j=g?Fn(f,!0):f,o.j&&(o.j=o.j.replace(/:$/,""))}function Wt(o,f){if(f){if(f=Number(f),isNaN(f)||f<0)throw Error("Bad port number "+f);o.u=f}else o.u=null}function Gi(o,f,g){f instanceof Er?(o.i=f,Ki(o.i,o.l)):(g||(f=zt(f,Xs)),o.i=new Er(f,o.l))}function ke(o,f,g){o.i.set(f,g)}function Mn(o){return ke(o,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),o}function Fn(o,f){return o?f?decodeURI(o.replace(/%25/g,"%2525")):decodeURIComponent(o):""}function zt(o,f,g){return typeof o=="string"?(o=encodeURI(o).replace(f,Ks),g&&(o=o.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),o):null}function Ks(o){return o=o.charCodeAt(0),"%"+(o>>4&15).toString(16)+(o&15).toString(16)}var Qs=/[#\/\?@]/g,_a=/[#\?:]/g,wt=/[#\?]/g,Xs=/[#\?@]/g,Tr=/#/g;function Er(o,f){this.h=this.g=null,this.i=o||null,this.j=!!f}function pn(o){o.g||(o.g=new Map,o.h=0,o.i&&zi(o.i,function(f,g){o.add(decodeURIComponent(f.replace(/\+/g," ")),g)}))}n=Er.prototype,n.add=function(o,f){pn(this),this.i=null,o=gn(this,o);let g=this.g.get(o);return g||this.g.set(o,g=[]),g.push(f),this.h+=1,this};function Gt(o,f){pn(o),f=gn(o,f),o.g.has(f)&&(o.i=null,o.h-=o.g.get(f).length,o.g.delete(f))}function Kt(o,f){return pn(o),f=gn(o,f),o.g.has(f)}n.forEach=function(o,f){pn(this),this.g.forEach(function(g,E){g.forEach(function(L){o.call(f,L,E,this)},this)},this)};function Wr(o,f){pn(o);let g=[];if(typeof f=="string")Kt(o,f)&&(g=g.concat(o.g.get(gn(o,f))));else for(o=Array.from(o.g.values()),f=0;f<o.length;f++)g=g.concat(o[f]);return g}n.set=function(o,f){return pn(this),this.i=null,o=gn(this,o),Kt(this,o)&&(this.h-=this.g.get(o).length),this.g.set(o,[f]),this.h+=1,this},n.get=function(o,f){return o?(o=Wr(this,o),o.length>0?String(o[0]):f):f};function Ys(o,f,g){Gt(o,f),g.length>0&&(o.i=null,o.g.set(gn(o,f),G(g)),o.h+=g.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const o=[],f=Array.from(this.g.keys());for(let E=0;E<f.length;E++){var g=f[E];const L=mr(g);g=Wr(this,g);for(let O=0;O<g.length;O++){let K=L;g[O]!==""&&(K+="="+mr(g[O])),o.push(K)}}return this.i=o.join("&")};function Un(o){const f=new Er;return f.i=o.i,o.g&&(f.g=new Map(o.g),f.h=o.h),f}function gn(o,f){return f=String(f),o.j&&(f=f.toLowerCase()),f}function Ki(o,f){f&&!o.j&&(pn(o),o.i=null,o.g.forEach(function(g,E){const L=E.toLowerCase();E!=L&&(Gt(this,E),Ys(this,L,g))},o)),o.j=f}function Js(o,f){const g=new tt;if(c.Image){const E=new Image;E.onload=I(Qt,g,"TestLoadImage: loaded",!0,f,E),E.onerror=I(Qt,g,"TestLoadImage: error",!1,f,E),E.onabort=I(Qt,g,"TestLoadImage: abort",!1,f,E),E.ontimeout=I(Qt,g,"TestLoadImage: timeout",!1,f,E),c.setTimeout(function(){E.ontimeout&&E.ontimeout()},1e4),E.src=o}else f(!1)}function Zs(o,f){const g=new tt,E=new AbortController,L=setTimeout(()=>{E.abort(),Qt(g,"TestPingServer: timeout",!1,f)},1e4);fetch(o,{signal:E.signal}).then(O=>{clearTimeout(L),O.ok?Qt(g,"TestPingServer: ok",!0,f):Qt(g,"TestPingServer: server error",!1,f)}).catch(()=>{clearTimeout(L),Qt(g,"TestPingServer: error",!1,f)})}function Qt(o,f,g,E,L){try{L&&(L.onload=null,L.onerror=null,L.onabort=null,L.ontimeout=null),E(g)}catch{}}function eo(){this.g=new js}function Qi(o){this.i=o.Sb||null,this.h=o.ab||!1}P(Qi,xi),Qi.prototype.g=function(){return new zr(this.i,this.h)};function zr(o,f){et.call(this),this.H=o,this.o=f,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}P(zr,et),n=zr.prototype,n.open=function(o,f){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=o,this.D=f,this.readyState=1,Ir(this)},n.send=function(o){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const f={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};o&&(f.body=o),(this.H||c).fetch(new Request(this.D,f)).then(this.Pa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,wr(this)),this.readyState=0},n.Pa=function(o){if(this.g&&(this.l=o,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=o.headers,this.readyState=2,Ir(this)),this.g&&(this.readyState=3,Ir(this),this.g)))if(this.responseType==="arraybuffer")o.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof c.ReadableStream<"u"&&"body"in o){if(this.j=o.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Gr(this)}else o.text().then(this.Oa.bind(this),this.ga.bind(this))};function Gr(o){o.j.read().then(o.Ma.bind(o)).catch(o.ga.bind(o))}n.Ma=function(o){if(this.g){if(this.o&&o.value)this.response.push(o.value);else if(!this.o){var f=o.value?o.value:new Uint8Array(0);(f=this.B.decode(f,{stream:!o.done}))&&(this.response=this.responseText+=f)}o.done?wr(this):Ir(this),this.readyState==3&&Gr(this)}},n.Oa=function(o){this.g&&(this.response=this.responseText=o,wr(this))},n.Na=function(o){this.g&&(this.response=o,wr(this))},n.ga=function(){this.g&&wr(this)};function wr(o){o.readyState=4,o.l=null,o.j=null,o.B=null,Ir(o)}n.setRequestHeader=function(o,f){this.A.append(o,f)},n.getResponseHeader=function(o){return this.h&&this.h.get(o.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const o=[],f=this.h.entries();for(var g=f.next();!g.done;)g=g.value,o.push(g[0]+": "+g[1]),g=f.next();return o.join(`\r
`)};function Ir(o){o.onreadystatechange&&o.onreadystatechange.call(o)}Object.defineProperty(zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(o){this.m=o?"include":"same-origin"}});function to(o){let f="";return xt(o,function(g,E){f+=E,f+=":",f+=g,f+=`\r
`}),f}function Xi(o,f,g){e:{for(E in g){var E=!1;break e}E=!0}E||(g=to(g),typeof o=="string"?g!=null&&mr(g):ke(o,f,g))}function Le(o){et.call(this),this.headers=new Map,this.L=o||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}P(Le,et);var va=/^https?$/i,Ta=["POST","PUT"];n=Le.prototype,n.Fa=function(o){this.H=o},n.ea=function(o,f,g,E){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+o);f=f?f.toUpperCase():"GET",this.D=o,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():qr.g(),this.g.onreadystatechange=V(v(this.Ca,this));try{this.B=!0,this.g.open(f,String(o),!0),this.B=!1}catch(O){Yi(this,O);return}if(o=g||"",g=new Map(this.headers),E)if(Object.getPrototypeOf(E)===Object.prototype)for(var L in E)g.set(L,E[L]);else if(typeof E.keys=="function"&&typeof E.get=="function")for(const O of E.keys())g.set(O,E.get(O));else throw Error("Unknown input type for opt_headers: "+String(E));E=Array.from(g.keys()).find(O=>O.toLowerCase()=="content-type"),L=c.FormData&&o instanceof c.FormData,!(Array.prototype.indexOf.call(Ta,f,void 0)>=0)||E||L||g.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[O,K]of g)this.g.setRequestHeader(O,K);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(o),this.v=!1}catch(O){Yi(this,O)}};function Yi(o,f){o.h=!1,o.g&&(o.j=!0,o.g.abort(),o.j=!1),o.l=f,o.o=5,Kr(o),jn(o)}function Kr(o){o.A||(o.A=!0,rt(o,"complete"),rt(o,"error"))}n.abort=function(o){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=o||7,rt(this,"complete"),rt(this,"abort"),jn(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),jn(this,!0)),Le.Z.N.call(this)},n.Ca=function(){this.u||(this.B||this.v||this.j?Ji(this):this.Xa())},n.Xa=function(){Ji(this)};function Ji(o){if(o.h&&typeof a<"u"){if(o.v&&Mt(o)==4)setTimeout(o.Ca.bind(o),0);else if(rt(o,"readystatechange"),Mt(o)==4){o.h=!1;try{const O=o.ca();e:switch(O){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var f=!0;break e;default:f=!1}var g;if(!(g=f)){var E;if(E=O===0){let K=String(o.D).match(Wi)[1]||null;!K&&c.self&&c.self.location&&(K=c.self.location.protocol.slice(0,-1)),E=!va.test(K?K.toLowerCase():"")}g=E}if(g)rt(o,"complete"),rt(o,"success");else{o.o=6;try{var L=Mt(o)>2?o.g.statusText:""}catch{L=""}o.l=L+" ["+o.ca()+"]",Kr(o)}}finally{jn(o)}}}}function jn(o,f){if(o.g){o.m&&(clearTimeout(o.m),o.m=null);const g=o.g;o.g=null,f||rt(o,"ready");try{g.onreadystatechange=null}catch{}}}n.isActive=function(){return!!this.g};function Mt(o){return o.g?o.g.readyState:0}n.ca=function(){try{return Mt(this)>2?this.g.status:-1}catch{return-1}},n.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.La=function(o){if(this.g){var f=this.g.responseText;return o&&f.indexOf(o)==0&&(f=f.substring(o.length)),ma(f)}};function Zi(o){try{if(!o.g)return null;if("response"in o.g)return o.g.response;switch(o.F){case"":case"text":return o.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in o.g)return o.g.mozResponseArrayBuffer}return null}catch{return null}}function es(o){const f={};o=(o.g&&Mt(o)>=2&&o.g.getAllResponseHeaders()||"").split(`\r
`);for(let E=0;E<o.length;E++){if(b(o[E]))continue;var g=ya(o[E]);const L=g[0];if(g=g[1],typeof g!="string")continue;g=g.trim();const O=f[L]||[];f[L]=O,O.push(g)}Fs(f,function(E){return E.join(", ")})}n.ya=function(){return this.o},n.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Ar(o,f,g){return g&&g.internalChannelParams&&g.internalChannelParams[o]||f}function no(o){this.za=0,this.i=[],this.j=new tt,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Ar("failFast",!1,o),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Ar("baseRetryDelayMs",5e3,o),this.Za=Ar("retryDelaySeedMs",1e4,o),this.Ta=Ar("forwardChannelMaxRetries",2,o),this.va=Ar("forwardChannelRequestTimeoutMs",2e4,o),this.ma=o&&o.xmlHttpFactory||void 0,this.Ua=o&&o.Rb||void 0,this.Aa=o&&o.useFetchStreams||!1,this.O=void 0,this.L=o&&o.supportsCrossDomainXhr||!1,this.M="",this.h=new qi(o&&o.concurrentRequestLimit),this.Ba=new eo,this.S=o&&o.fastHandshake||!1,this.R=o&&o.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=o&&o.Pb||!1,o&&o.ua&&this.j.ua(),o&&o.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&o&&o.detectBufferingProxy||!1,this.ia=void 0,o&&o.longPollingTimeout&&o.longPollingTimeout>0&&(this.ia=o.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}n=no.prototype,n.ka=8,n.I=1,n.connect=function(o,f,g,E){Be(0),this.W=o,this.H=f||{},g&&E!==void 0&&(this.H.OSID=g,this.H.OAID=E),this.F=this.X,this.J=q(this,null,this.W),qn(this)};function ts(o){if(ns(o),o.I==3){var f=o.V++,g=Ve(o.J);if(ke(g,"SID",o.M),ke(g,"RID",f),ke(g,"TYPE","terminate"),br(o,g),f=new Ht(o,o.j,f),f.M=2,f.A=Mn(Ve(g)),g=!1,c.navigator&&c.navigator.sendBeacon)try{g=c.navigator.sendBeacon(f.A.toString(),"")}catch{}!g&&c.Image&&(new Image().src=f.A,g=!0),g||(f.g=B(f.j,null),f.g.ea(f.A)),f.F=Date.now(),Ln(f)}N(o)}function Xt(o){o.g&&(d(o),o.g.cancel(),o.g=null)}function ns(o){Xt(o),o.v&&(c.clearTimeout(o.v),o.v=null),y(o),o.h.cancel(),o.m&&(typeof o.m=="number"&&c.clearTimeout(o.m),o.m=null)}function qn(o){if(!Bi(o.h)&&!o.m){o.m=!0;var f=o.Ea;Ze||C(),qe||(Ze(),qe=!0),l.add(f,o),o.D=0}}function Ea(o,f){return zs(o.h)>=o.h.j-(o.m?1:0)?!1:o.m?(o.i=f.G.concat(o.i),!0):o.I==1||o.I==2||o.D>=(o.Sa?0:o.Ta)?!1:(o.m=Nn(v(o.Ea,o,f),R(o,o.D)),o.D++,!0)}n.Ea=function(o){if(this.m)if(this.m=null,this.I==1){if(!o){this.V=Math.floor(Math.random()*1e5),o=this.V++;const L=new Ht(this,this.j,o);let O=this.o;if(this.U&&(O?(O=Ai(O),Ur(O,this.U)):O=this.U),this.u!==null||this.R||(L.J=O,O=null),this.S)e:{for(var f=0,g=0;g<this.i.length;g++){t:{var E=this.i[g];if("__data__"in E.map&&(E=E.map.__data__,typeof E=="string")){E=E.length;break t}E=void 0}if(E===void 0)break;if(f+=E,f>4096){f=g;break e}if(f===4096||g===this.i.length-1){f=g+1;break e}}f=1e3}else f=1e3;f=s(this,L,f),g=Ve(this.J),ke(g,"RID",o),ke(g,"CVER",22),this.G&&ke(g,"X-HTTP-Session-Id",this.G),br(this,g),O&&(this.R?f="headers="+mr(to(O))+"&"+f:this.u&&Xi(g,this.u,O)),$i(this.h,L),this.Ra&&ke(g,"TYPE","init"),this.S?(ke(g,"$req",f),ke(g,"SID","null"),L.U=!0,Br(L,g,null)):Br(L,g,f),this.I=2}}else this.I==3&&(o?ro(this,o):this.i.length==0||Bi(this.h)||ro(this))};function ro(o,f){var g;f?g=f.l:g=o.V++;const E=Ve(o.J);ke(E,"SID",o.M),ke(E,"RID",g),ke(E,"AID",o.K),br(o,E),o.u&&o.o&&Xi(E,o.u,o.o),g=new Ht(o,o.j,g,o.D+1),o.u===null&&(g.J=o.o),f&&(o.i=f.G.concat(o.i)),f=s(o,g,1e3),g.H=Math.round(o.va*.5)+Math.round(o.va*.5*Math.random()),$i(o.h,g),Br(g,E,f)}function br(o,f){o.H&&xt(o.H,function(g,E){ke(f,E,g)}),o.l&&xt({},function(g,E){ke(f,E,g)})}function s(o,f,g){g=Math.min(o.i.length,g);const E=o.l?v(o.l.Ka,o.l,o):null;e:{var L=o.i;let fe=-1;for(;;){const Ue=["count="+g];fe==-1?g>0?(fe=L[0].g,Ue.push("ofs="+fe)):fe=0:Ue.push("ofs="+fe);let ye=!0;for(let Fe=0;Fe<g;Fe++){var O=L[Fe].g;const $e=L[Fe].map;if(O-=fe,O<0)fe=Math.max(0,L[Fe].g-100),ye=!1;else try{O="req"+O+"_"||"";try{var K=$e instanceof Map?$e:Object.entries($e);for(const[lt,st]of K){let He=st;p(st)&&(He=Ni(st)),Ue.push(O+lt+"="+encodeURIComponent(He))}}catch(lt){throw Ue.push(O+"type="+encodeURIComponent("_badmap")),lt}}catch{E&&E($e)}}if(ye){K=Ue.join("&");break e}}K=void 0}return o=o.i.splice(0,g),f.G=o,K}function u(o){if(!o.g&&!o.v){o.Y=1;var f=o.Da;Ze||C(),qe||(Ze(),qe=!0),l.add(f,o),o.A=0}}function h(o){return o.g||o.v||o.A>=3?!1:(o.Y++,o.v=Nn(v(o.Da,o),R(o,o.A)),o.A++,!0)}n.Da=function(){if(this.v=null,m(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var o=4*this.T;this.j.info("BP detection timer enabled: "+o),this.B=Nn(v(this.Wa,this),o)}},n.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Be(10),Xt(this),m(this))};function d(o){o.B!=null&&(c.clearTimeout(o.B),o.B=null)}function m(o){o.g=new Ht(o,o.j,"rpc",o.Y),o.u===null&&(o.g.J=o.o),o.g.P=0;var f=Ve(o.na);ke(f,"RID","rpc"),ke(f,"SID",o.M),ke(f,"AID",o.K),ke(f,"CI",o.F?"0":"1"),!o.F&&o.ia&&ke(f,"TO",o.ia),ke(f,"TYPE","xmlhttp"),br(o,f),o.u&&o.o&&Xi(f,o.u,o.o),o.O&&(o.g.H=o.O);var g=o.g;o=o.ba,g.M=1,g.A=Mn(Ve(f)),g.u=null,g.R=!0,Hs(g,o)}n.Va=function(){this.C!=null&&(this.C=null,Xt(this),h(this),Be(19))};function y(o){o.C!=null&&(c.clearTimeout(o.C),o.C=null)}function T(o,f){var g=null;if(o.g==f){y(o),d(o),o.g=null;var E=2}else if(vr(o.h,f))g=f.G,Gs(o.h,f),E=1;else return;if(o.I!=0){if(f.o)if(E==1){g=f.u?f.u.length:0,f=Date.now()-f.F;var L=o.D;E=pr(),rt(E,new Oi(E,g)),qn(o)}else u(o);else if(L=f.m,L==3||L==0&&f.X>0||!(E==1&&Ea(o,f)||E==2&&h(o)))switch(g&&g.length>0&&(f=o.h,f.i=f.i.concat(g)),L){case 1:A(o,5);break;case 4:A(o,10);break;case 3:A(o,6);break;default:A(o,2)}}}function R(o,f){let g=o.Qa+Math.floor(Math.random()*o.Za);return o.isActive()||(g*=2),g*f}function A(o,f){if(o.j.info("Error code "+f),f==2){var g=v(o.bb,o),E=o.Ua;const L=!E;E=new Lt(E||"//www.google.com/images/cleardot.gif"),c.location&&c.location.protocol=="http"||Rt(E,"https"),Mn(E),L?Js(E.toString(),g):Zs(E.toString(),g)}else Be(2);o.I=0,o.l&&o.l.pa(f),N(o),ns(o)}n.bb=function(o){o?(this.j.info("Successfully pinged google.com"),Be(2)):(this.j.info("Failed to ping google.com"),Be(1))};function N(o){if(o.I=0,o.ja=[],o.l){const f=Hi(o.h);(f.length!=0||o.i.length!=0)&&(W(o.ja,f),W(o.ja,o.i),o.h.i.length=0,G(o.i),o.i.length=0),o.l.oa()}}function q(o,f,g){var E=g instanceof Lt?Ve(g):new Lt(g);if(E.g!="")f&&(E.g=f+"."+E.g),Wt(E,E.u);else{var L=c.location;E=L.protocol,f=f?f+"."+L.hostname:L.hostname,L=+L.port;const O=new Lt(null);E&&Rt(O,E),f&&(O.g=f),L&&Wt(O,L),g&&(O.h=g),E=O}return g=o.G,f=o.wa,g&&f&&ke(E,g,f),ke(E,"VER",o.ka),br(o,E),E}function B(o,f,g){if(f&&!o.L)throw Error("Can't create secondary domain capable XhrIo object.");return f=o.Aa&&!o.ma?new Le(new Qi({ab:g})):new Le(o.ma),f.Fa(o.L),f}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function U(){}n=U.prototype,n.ra=function(){},n.qa=function(){},n.pa=function(){},n.oa=function(){},n.isActive=function(){return!0},n.Ka=function(){};function X(){}X.prototype.g=function(o,f){return new se(o,f)};function se(o,f){et.call(this),this.g=new no(f),this.l=o,this.h=f&&f.messageUrlParams||null,o=f&&f.messageHeaders||null,f&&f.clientProtocolHeaderRequired&&(o?o["X-Client-Protocol"]="webchannel":o={"X-Client-Protocol":"webchannel"}),this.g.o=o,o=f&&f.initMessageHeaders||null,f&&f.messageContentType&&(o?o["X-WebChannel-Content-Type"]=f.messageContentType:o={"X-WebChannel-Content-Type":f.messageContentType}),f&&f.sa&&(o?o["X-WebChannel-Client-Profile"]=f.sa:o={"X-WebChannel-Client-Profile":f.sa}),this.g.U=o,(o=f&&f.Qb)&&!b(o)&&(this.g.u=o),this.A=f&&f.supportsCrossDomainXhr||!1,this.v=f&&f.sendRawJson||!1,(f=f&&f.httpSessionIdParam)&&!b(f)&&(this.g.G=f,o=this.h,o!==null&&f in o&&(o=this.h,f in o&&delete o[f])),this.j=new Me(this)}P(se,et),se.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},se.prototype.close=function(){ts(this.g)},se.prototype.o=function(o){var f=this.g;if(typeof o=="string"){var g={};g.__data__=o,o=g}else this.v&&(g={},g.__data__=Ni(o),o=g);f.i.push(new Ws(f.Ya++,o)),f.I==3&&qn(f)},se.prototype.N=function(){this.g.l=null,delete this.j,ts(this.g),delete this.g,se.Z.N.call(this)};function Te(o){Vt.call(this),o.__headers__&&(this.headers=o.__headers__,this.statusCode=o.__status__,delete o.__headers__,delete o.__status__);var f=o.__sm__;if(f){e:{for(const g in f){o=g;break e}o=void 0}(this.i=o)&&(o=this.i,f=f!==null&&o in f?f[o]:void 0),this.data=f}else this.data=o}P(Te,Vt);function me(){$t.call(this),this.status=1}P(me,$t);function Me(o){this.g=o}P(Me,U),Me.prototype.ra=function(){rt(this.g,"a")},Me.prototype.qa=function(o){rt(this.g,new Te(o))},Me.prototype.pa=function(o){rt(this.g,new me)},Me.prototype.oa=function(){rt(this.g,"b")},X.prototype.createWebChannel=X.prototype.g,se.prototype.send=se.prototype.o,se.prototype.open=se.prototype.m,se.prototype.close=se.prototype.close,Mh=function(){return new X},Lh=function(){return pr()},Oh=hn,Ga={jb:0,mb:1,nb:2,Hb:3,Mb:4,Jb:5,Kb:6,Ib:7,Gb:8,Lb:9,PROXY:10,NOPROXY:11,Eb:12,Ab:13,Bb:14,zb:15,Cb:16,Db:17,fb:18,eb:19,gb:20},Ot.NO_ERROR=0,Ot.TIMEOUT=8,Ot.HTTP_ERROR=6,To=Ot,dn.COMPLETE="complete",Vh=dn,Dn.EventType=mt,mt.OPEN="a",mt.CLOSE="b",mt.ERROR="c",mt.MESSAGE="d",et.prototype.listen=et.prototype.J,os=Dn,Le.prototype.listenOnce=Le.prototype.K,Le.prototype.getLastError=Le.prototype.Ha,Le.prototype.getLastErrorCode=Le.prototype.ya,Le.prototype.getStatus=Le.prototype.ca,Le.prototype.getResponseJson=Le.prototype.La,Le.prototype.getResponseText=Le.prototype.la,Le.prototype.send=Le.prototype.ea,Le.prototype.setWithCredentials=Le.prototype.Fa,xh=Le}).apply(typeof co<"u"?co:typeof self<"u"?self:typeof window<"u"?window:{});const Uc="@firebase/firestore",jc="4.9.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}dt.UNAUTHENTICATED=new dt(null),dt.GOOGLE_CREDENTIALS=new dt("google-credentials-uid"),dt.FIRST_PARTY=new dt("first-party-uid"),dt.MOCK_USER=new dt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let _i="12.3.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vr=new hu("@firebase/firestore");function Yr(){return Vr.logLevel}function re(n,...e){if(Vr.logLevel<=Ae.DEBUG){const t=e.map(wu);Vr.debug(`Firestore (${_i}): ${n}`,...t)}}function In(n,...e){if(Vr.logLevel<=Ae.ERROR){const t=e.map(wu);Vr.error(`Firestore (${_i}): ${n}`,...t)}}function ci(n,...e){if(Vr.logLevel<=Ae.WARN){const t=e.map(wu);Vr.warn(`Firestore (${_i}): ${n}`,...t)}}function wu(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return(function(t){return JSON.stringify(t)})(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(n,e,t){let r="Unexpected state";typeof e=="string"?r=e:t=e,Fh(n,r,t)}function Fh(n,e,t){let r=`FIRESTORE (${_i}) INTERNAL ASSERTION FAILED: ${e} (ID: ${n.toString(16)})`;if(t!==void 0)try{r+=" CONTEXT: "+JSON.stringify(t)}catch{r+=" CONTEXT: "+t}throw In(r),new Error(r)}function Re(n,e,t,r){let i="Unexpected state";typeof t=="string"?i=t:r=t,n||Fh(e,i,r)}function ge(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class ee extends bn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uh{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class wy{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(dt.UNAUTHENTICATED)))}shutdown(){}}class Iy{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ay{constructor(e){this.t=e,this.currentUser=dt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Re(this.o===void 0,42304);let r=this.i;const i=_=>this.i!==r?(r=this.i,t(_)):Promise.resolve();let a=new Tn;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Tn,e.enqueueRetryable((()=>i(this.currentUser)))};const c=()=>{const _=a;e.enqueueRetryable((async()=>{await _.promise,await i(this.currentUser)}))},p=_=>{re("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=_,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit((_=>p(_))),setTimeout((()=>{if(!this.auth){const _=this.t.getImmediate({optional:!0});_?p(_):(re("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Tn)}}),0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((r=>this.i!==e?(re("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Re(typeof r.accessToken=="string",31837,{l:r}),new Uh(r.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Re(e===null||typeof e=="string",2055,{h:e}),new dt(e)}}class by{constructor(e,t,r){this.P=e,this.T=t,this.I=r,this.type="FirstParty",this.user=dt.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class Sy{constructor(e,t,r){this.P=e,this.T=t,this.I=r}getToken(){return Promise.resolve(new by(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable((()=>t(dt.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class qc{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Cy{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,kt(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){Re(this.o===void 0,3512);const r=a=>{a.error!=null&&re("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const c=a.token!==this.m;return this.m=a.token,re("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable((()=>r(a)))};const i=a=>{re("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit((a=>i(a))),setTimeout((()=>{if(!this.appCheck){const a=this.V.getImmediate({optional:!0});a?i(a):re("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){if(this.p)return Promise.resolve(new qc(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((t=>t?(Re(typeof t.token=="string",44558,{tokenResult:t}),this.m=t.token,new qc(t.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ry(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=Ry(40);for(let a=0;a<i.length;++a)r.length<20&&i[a]<t&&(r+=e.charAt(i[a]%62))}return r}}function be(n,e){return n<e?-1:n>e?1:0}function Ka(n,e){const t=Math.min(n.length,e.length);for(let r=0;r<t;r++){const i=n.charAt(r),a=e.charAt(r);if(i!==a)return Va(i)===Va(a)?be(i,a):Va(i)?1:-1}return be(n.length,e.length)}const Py=55296,ky=57343;function Va(n){const e=n.charCodeAt(0);return e>=Py&&e<=ky}function li(n,e,t){return n.length===e.length&&n.every(((r,i)=>t(r,e[i])))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bc="__name__";class Jt{constructor(e,t,r){t===void 0?t=0:t>e.length&&le(637,{offset:t,range:e.length}),r===void 0?r=e.length-t:r>e.length-t&&le(1746,{length:r,range:e.length-t}),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jt.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jt?e.forEach((r=>{t.push(r)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let i=0;i<r;i++){const a=Jt.compareSegments(e.get(i),t.get(i));if(a!==0)return a}return be(e.length,t.length)}static compareSegments(e,t){const r=Jt.isNumericId(e),i=Jt.isNumericId(t);return r&&!i?-1:!r&&i?1:r&&i?Jt.extractNumericId(e).compare(Jt.extractNumericId(t)):Ka(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Zn.fromString(e.substring(4,e.length-2))}}class xe extends Jt{construct(e,t,r){return new xe(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new ee(H.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter((i=>i.length>0)))}return new xe(t)}static emptyPath(){return new xe([])}}const Dy=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class at extends Jt{construct(e,t,r){return new at(e,t,r)}static isValidIdentifier(e){return Dy.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),at.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Bc}static keyField(){return new at([Bc])}static fromServerFormat(e){const t=[];let r="",i=0;const a=()=>{if(r.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let c=!1;for(;i<e.length;){const p=e[i];if(p==="\\"){if(i+1===e.length)throw new ee(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const _=e[i+1];if(_!=="\\"&&_!=="."&&_!=="`")throw new ee(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=_,i+=2}else p==="`"?(c=!c,i++):p!=="."||c?(r+=p,i++):(a(),i++)}if(a(),c)throw new ee(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new at(t)}static emptyPath(){return new at([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ae{constructor(e){this.path=e}static fromPath(e){return new ae(xe.fromString(e))}static fromName(e){return new ae(xe.fromString(e).popFirst(5))}static empty(){return new ae(xe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&xe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return xe.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new ae(new xe(e.slice()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jh(n,e,t){if(!t)throw new ee(H.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function Ny(n,e,t,r){if(e===!0&&r===!0)throw new ee(H.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function $c(n){if(!ae.isDocumentKey(n))throw new ee(H.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Hc(n){if(ae.isDocumentKey(n))throw new ee(H.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function qh(n){return typeof n=="object"&&n!==null&&(Object.getPrototypeOf(n)===Object.prototype||Object.getPrototypeOf(n)===null)}function Qo(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=(function(r){return r.constructor?r.constructor.name:null})(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":le(12329,{type:typeof n})}function on(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new ee(H.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Qo(n);throw new ee(H.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(n,e){const t={typeString:n};return e&&(t.value=e),t}function Ns(n,e){if(!qh(n))throw new ee(H.INVALID_ARGUMENT,"JSON must be an object");let t;for(const r in e)if(e[r]){const i=e[r].typeString,a="value"in e[r]?{value:e[r].value}:void 0;if(!(r in n)){t=`JSON missing required field: '${r}'`;break}const c=n[r];if(i&&typeof c!==i){t=`JSON field '${r}' must be a ${i}.`;break}if(a!==void 0&&c!==a.value){t=`Expected '${r}' field to equal '${a.value}'`;break}}if(t)throw new ee(H.INVALID_ARGUMENT,t);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wc=-62135596800,zc=1e6;class Oe{static now(){return Oe.fromMillis(Date.now())}static fromDate(e){return Oe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor((e-1e3*t)*zc);return new Oe(t,r)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new ee(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Wc)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new ee(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/zc}_compareTo(e){return this.seconds===e.seconds?be(this.nanoseconds,e.nanoseconds):be(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Oe._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Ns(e,Oe._jsonSchema))return new Oe(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Wc;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Oe._jsonSchemaVersion="firestore/timestamp/1.0",Oe._jsonSchema={type:Xe("string",Oe._jsonSchemaVersion),seconds:Xe("number"),nanoseconds:Xe("number")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{static fromTimestamp(e){return new pe(e)}static min(){return new pe(new Oe(0,0))}static max(){return new pe(new Oe(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s=-1;function xy(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=pe.fromTimestamp(r===1e9?new Oe(t+1,0):new Oe(t,r));return new tr(i,ae.empty(),e)}function Vy(n){return new tr(n.readTime,n.key,_s)}class tr{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new tr(pe.min(),ae.empty(),_s)}static max(){return new tr(pe.max(),ae.empty(),_s)}}function Oy(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=ae.comparator(n.documentKey,e.documentKey),t!==0?t:be(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ly="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class My{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vi(n){if(n.code!==H.FAILED_PRECONDITION||n.message!==Ly)throw n;re("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)}),(t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&le(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new z(((r,i)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,i)},this.catchCallback=a=>{this.wrapFailure(t,a).next(r,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof z?t:z.resolve(t)}catch(t){return z.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):z.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):z.reject(t)}static resolve(e){return new z(((t,r)=>{t(e)}))}static reject(e){return new z(((t,r)=>{r(e)}))}static waitFor(e){return new z(((t,r)=>{let i=0,a=0,c=!1;e.forEach((p=>{++i,p.next((()=>{++a,c&&a===i&&t()}),(_=>r(_)))})),c=!0,a===i&&t()}))}static or(e){let t=z.resolve(!1);for(const r of e)t=t.next((i=>i?z.resolve(i):r()));return t}static forEach(e,t){const r=[];return e.forEach(((i,a)=>{r.push(t.call(this,i,a))})),this.waitFor(r)}static mapArray(e,t){return new z(((r,i)=>{const a=e.length,c=new Array(a);let p=0;for(let _=0;_<a;_++){const v=_;t(e[v]).next((I=>{c[v]=I,++p,p===a&&r(c)}),(I=>i(I)))}}))}static doWhile(e,t){return new z(((r,i)=>{const a=()=>{e()===!0?t().next((()=>{a()}),i):r()};a()}))}}function Fy(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function Ti(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ae(r),this.ue=r=>t.writeSequenceNumber(r))}ae(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ue&&this.ue(e),e}}Xo.ce=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Au=-1;function Yo(n){return n==null}function Oo(n){return n===0&&1/n==-1/0}function Uy(n){return typeof n=="number"&&Number.isInteger(n)&&!Oo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bh="";function jy(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Gc(e)),e=qy(n.get(t),e);return Gc(e)}function qy(n,e){let t=e;const r=n.length;for(let i=0;i<r;i++){const a=n.charAt(i);switch(a){case"\0":t+="";break;case Bh:t+="";break;default:t+=a}}return t}function Gc(n){return n+Bh+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kc(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function ur(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function $h(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je{constructor(e,t){this.comparator=e,this.root=t||ot.EMPTY}insert(e,t){return new je(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new je(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return t+r.left.size;i<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,r)=>(e(t,r),!1)))}toString(){const e=[];return this.inorderTraversal(((t,r)=>(e.push(`${t}:${r}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new lo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new lo(this.root,e,this.comparator,!1)}getReverseIterator(){return new lo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new lo(this.root,e,this.comparator,!0)}}class lo{constructor(e,t,r,i){this.isReverse=i,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=t?r(e.key,t):1,t&&i&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,t,r,i,a){this.key=e,this.value=t,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=a??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,i,a){return new ot(e??this.key,t??this.value,r??this.color,i??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let i=this;const a=r(e,i.key);return i=a<0?i.copy(null,null,null,i.left.insert(e,t,r),null):a===0?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),t(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw le(43730,{key:this.key,value:this.value});if(this.right.isRed())throw le(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw le(27949);return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw le(57766)}get value(){throw le(16141)}get color(){throw le(16727)}get left(){throw le(29726)}get right(){throw le(36894)}copy(e,t,r,i,a){return this}insert(e,t,r){return new ot(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Je{constructor(e){this.comparator=e,this.data=new je(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,r)=>(e(t),!1)))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Qc(this.data.getIterator())}getIteratorFrom(e){return new Qc(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((r=>{t=t.add(r)})),t}isEqual(e){if(!(e instanceof Je)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(this.comparator(i,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Je(this.comparator);return t.data=e,t}}class Qc{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.fields=e,e.sort(at.comparator)}static empty(){return new At([])}unionWith(e){let t=new Je(at.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new At(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return li(this.fields,e.fields,((t,r)=>t.isEqual(r)))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.binaryString=e}static fromBase64String(e){const t=(function(i){try{return atob(i)}catch(a){throw typeof DOMException<"u"&&a instanceof DOMException?new Hh("Invalid base64 string: "+a):a}})(e);return new ut(t)}static fromUint8Array(e){const t=(function(i){let a="";for(let c=0;c<i.length;++c)a+=String.fromCharCode(i[c]);return a})(e);return new ut(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return(function(t){return btoa(t)})(this.binaryString)}toUint8Array(){return(function(t){const r=new Uint8Array(t.length);for(let i=0;i<t.length;i++)r[i]=t.charCodeAt(i);return r})(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return be(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ut.EMPTY_BYTE_STRING=new ut("");const By=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function nr(n){if(Re(!!n,39018),typeof n=="string"){let e=0;const t=By.exec(n);if(Re(!!t,46558,{timestamp:n}),t[1]){let i=t[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:We(n.seconds),nanos:We(n.nanos)}}function We(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function rr(n){return typeof n=="string"?ut.fromBase64String(n):ut.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wh="server_timestamp",zh="__type__",Gh="__previous_value__",Kh="__local_write_time__";function bu(n){return(n?.mapValue?.fields||{})[zh]?.stringValue===Wh}function Jo(n){const e=n.mapValue.fields[Gh];return bu(e)?Jo(e):e}function vs(n){const e=nr(n.mapValue.fields[Kh].timestampValue);return new Oe(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(e,t,r,i,a,c,p,_,v,I){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=i,this.ssl=a,this.forceLongPolling=c,this.autoDetectLongPolling=p,this.longPollingOptions=_,this.useFetchStreams=v,this.isUsingEmulator=I}}const Lo="(default)";class Ts{constructor(e,t){this.projectId=e,this.database=t||Lo}static empty(){return new Ts("","")}get isDefaultDatabase(){return this.database===Lo}isEqual(e){return e instanceof Ts&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qh="__type__",Hy="__max__",ho={mapValue:{}},Xh="__vector__",Mo="value";function ir(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?bu(n)?4:zy(n)?9007199254740991:Wy(n)?10:11:le(28295,{value:n})}function an(n,e){if(n===e)return!0;const t=ir(n);if(t!==ir(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return vs(n).isEqual(vs(e));case 3:return(function(i,a){if(typeof i.timestampValue=="string"&&typeof a.timestampValue=="string"&&i.timestampValue.length===a.timestampValue.length)return i.timestampValue===a.timestampValue;const c=nr(i.timestampValue),p=nr(a.timestampValue);return c.seconds===p.seconds&&c.nanos===p.nanos})(n,e);case 5:return n.stringValue===e.stringValue;case 6:return(function(i,a){return rr(i.bytesValue).isEqual(rr(a.bytesValue))})(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return(function(i,a){return We(i.geoPointValue.latitude)===We(a.geoPointValue.latitude)&&We(i.geoPointValue.longitude)===We(a.geoPointValue.longitude)})(n,e);case 2:return(function(i,a){if("integerValue"in i&&"integerValue"in a)return We(i.integerValue)===We(a.integerValue);if("doubleValue"in i&&"doubleValue"in a){const c=We(i.doubleValue),p=We(a.doubleValue);return c===p?Oo(c)===Oo(p):isNaN(c)&&isNaN(p)}return!1})(n,e);case 9:return li(n.arrayValue.values||[],e.arrayValue.values||[],an);case 10:case 11:return(function(i,a){const c=i.mapValue.fields||{},p=a.mapValue.fields||{};if(Kc(c)!==Kc(p))return!1;for(const _ in c)if(c.hasOwnProperty(_)&&(p[_]===void 0||!an(c[_],p[_])))return!1;return!0})(n,e);default:return le(52216,{left:n})}}function Es(n,e){return(n.values||[]).find((t=>an(t,e)))!==void 0}function hi(n,e){if(n===e)return 0;const t=ir(n),r=ir(e);if(t!==r)return be(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return be(n.booleanValue,e.booleanValue);case 2:return(function(a,c){const p=We(a.integerValue||a.doubleValue),_=We(c.integerValue||c.doubleValue);return p<_?-1:p>_?1:p===_?0:isNaN(p)?isNaN(_)?0:-1:1})(n,e);case 3:return Xc(n.timestampValue,e.timestampValue);case 4:return Xc(vs(n),vs(e));case 5:return Ka(n.stringValue,e.stringValue);case 6:return(function(a,c){const p=rr(a),_=rr(c);return p.compareTo(_)})(n.bytesValue,e.bytesValue);case 7:return(function(a,c){const p=a.split("/"),_=c.split("/");for(let v=0;v<p.length&&v<_.length;v++){const I=be(p[v],_[v]);if(I!==0)return I}return be(p.length,_.length)})(n.referenceValue,e.referenceValue);case 8:return(function(a,c){const p=be(We(a.latitude),We(c.latitude));return p!==0?p:be(We(a.longitude),We(c.longitude))})(n.geoPointValue,e.geoPointValue);case 9:return Yc(n.arrayValue,e.arrayValue);case 10:return(function(a,c){const p=a.fields||{},_=c.fields||{},v=p[Mo]?.arrayValue,I=_[Mo]?.arrayValue,P=be(v?.values?.length||0,I?.values?.length||0);return P!==0?P:Yc(v,I)})(n.mapValue,e.mapValue);case 11:return(function(a,c){if(a===ho.mapValue&&c===ho.mapValue)return 0;if(a===ho.mapValue)return 1;if(c===ho.mapValue)return-1;const p=a.fields||{},_=Object.keys(p),v=c.fields||{},I=Object.keys(v);_.sort(),I.sort();for(let P=0;P<_.length&&P<I.length;++P){const V=Ka(_[P],I[P]);if(V!==0)return V;const G=hi(p[_[P]],v[I[P]]);if(G!==0)return G}return be(_.length,I.length)})(n.mapValue,e.mapValue);default:throw le(23264,{he:t})}}function Xc(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return be(n,e);const t=nr(n),r=nr(e),i=be(t.seconds,r.seconds);return i!==0?i:be(t.nanos,r.nanos)}function Yc(n,e){const t=n.values||[],r=e.values||[];for(let i=0;i<t.length&&i<r.length;++i){const a=hi(t[i],r[i]);if(a)return a}return be(t.length,r.length)}function fi(n){return Qa(n)}function Qa(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?(function(t){const r=nr(t);return`time(${r.seconds},${r.nanos})`})(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?(function(t){return rr(t).toBase64()})(n.bytesValue):"referenceValue"in n?(function(t){return ae.fromName(t).toString()})(n.referenceValue):"geoPointValue"in n?(function(t){return`geo(${t.latitude},${t.longitude})`})(n.geoPointValue):"arrayValue"in n?(function(t){let r="[",i=!0;for(const a of t.values||[])i?i=!1:r+=",",r+=Qa(a);return r+"]"})(n.arrayValue):"mapValue"in n?(function(t){const r=Object.keys(t.fields||{}).sort();let i="{",a=!0;for(const c of r)a?a=!1:i+=",",i+=`${c}:${Qa(t.fields[c])}`;return i+"}"})(n.mapValue):le(61005,{value:n})}function Eo(n){switch(ir(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Jo(n);return e?16+Eo(e):16;case 5:return 2*n.stringValue.length;case 6:return rr(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return(function(r){return(r.values||[]).reduce(((i,a)=>i+Eo(a)),0)})(n.arrayValue);case 10:case 11:return(function(r){let i=0;return ur(r.fields,((a,c)=>{i+=a.length+Eo(c)})),i})(n.mapValue);default:throw le(13486,{value:n})}}function Jc(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Xa(n){return!!n&&"integerValue"in n}function Su(n){return!!n&&"arrayValue"in n}function Zc(n){return!!n&&"nullValue"in n}function el(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function wo(n){return!!n&&"mapValue"in n}function Wy(n){return(n?.mapValue?.fields||{})[Qh]?.stringValue===Xh}function fs(n){if(n.geoPointValue)return{geoPointValue:{...n.geoPointValue}};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:{...n.timestampValue}};if(n.mapValue){const e={mapValue:{fields:{}}};return ur(n.mapValue.fields,((t,r)=>e.mapValue.fields[t]=fs(r))),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=fs(n.arrayValue.values[t]);return e}return{...n}}function zy(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===Hy}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.value=e}static empty(){return new Tt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!wo(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=fs(t)}setAll(e){let t=at.emptyPath(),r={},i=[];e.forEach(((c,p)=>{if(!t.isImmediateParentOf(p)){const _=this.getFieldsMap(t);this.applyChanges(_,r,i),r={},i=[],t=p.popLast()}c?r[p.lastSegment()]=fs(c):i.push(p.lastSegment())}));const a=this.getFieldsMap(t);this.applyChanges(a,r,i)}delete(e){const t=this.field(e.popLast());wo(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return an(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=t.mapValue.fields[e.get(r)];wo(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,r){ur(t,((i,a)=>e[i]=a));for(const i of r)delete e[i]}clone(){return new Tt(fs(this.value))}}function Yh(n){const e=[];return ur(n.fields,((t,r)=>{const i=new at([t]);if(wo(r)){const a=Yh(r.mapValue).fields;if(a.length===0)e.push(i);else for(const c of a)e.push(i.child(c))}else e.push(i)})),new At(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e,t,r,i,a,c,p){this.key=e,this.documentType=t,this.version=r,this.readTime=i,this.createTime=a,this.data=c,this.documentState=p}static newInvalidDocument(e){return new pt(e,0,pe.min(),pe.min(),pe.min(),Tt.empty(),0)}static newFoundDocument(e,t,r,i){return new pt(e,1,t,pe.min(),r,i,0)}static newNoDocument(e,t){return new pt(e,2,t,pe.min(),pe.min(),Tt.empty(),0)}static newUnknownDocument(e,t){return new pt(e,3,t,pe.min(),pe.min(),Tt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(pe.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Tt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Tt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=pe.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof pt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new pt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t){this.position=e,this.inclusive=t}}function tl(n,e,t){let r=0;for(let i=0;i<n.position.length;i++){const a=e[i],c=n.position[i];if(a.field.isKeyField()?r=ae.comparator(ae.fromName(c.referenceValue),t.key):r=hi(c,t.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function nl(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!an(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ws{constructor(e,t="asc"){this.field=e,this.dir=t}}function Gy(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{}class Qe extends Jh{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new Qy(e,t,r):t==="array-contains"?new Jy(e,r):t==="in"?new Zy(e,r):t==="not-in"?new e_(e,r):t==="array-contains-any"?new t_(e,r):new Qe(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new Xy(e,r):new Yy(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&t.nullValue===void 0&&this.matchesComparison(hi(t,this.value)):t!==null&&ir(this.value)===ir(t)&&this.matchesComparison(hi(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return le(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Bt extends Jh{constructor(e,t){super(),this.filters=e,this.op=t,this.Pe=null}static create(e,t){return new Bt(e,t)}matches(e){return Zh(this)?this.filters.find((t=>!t.matches(e)))===void 0:this.filters.find((t=>t.matches(e)))!==void 0}getFlattenedFilters(){return this.Pe!==null||(this.Pe=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.Pe}getFilters(){return Object.assign([],this.filters)}}function Zh(n){return n.op==="and"}function ef(n){return Ky(n)&&Zh(n)}function Ky(n){for(const e of n.filters)if(e instanceof Bt)return!1;return!0}function Ya(n){if(n instanceof Qe)return n.field.canonicalString()+n.op.toString()+fi(n.value);if(ef(n))return n.filters.map((e=>Ya(e))).join(",");{const e=n.filters.map((t=>Ya(t))).join(",");return`${n.op}(${e})`}}function tf(n,e){return n instanceof Qe?(function(r,i){return i instanceof Qe&&r.op===i.op&&r.field.isEqual(i.field)&&an(r.value,i.value)})(n,e):n instanceof Bt?(function(r,i){return i instanceof Bt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce(((a,c,p)=>a&&tf(c,i.filters[p])),!0):!1})(n,e):void le(19439)}function nf(n){return n instanceof Qe?(function(t){return`${t.field.canonicalString()} ${t.op} ${fi(t.value)}`})(n):n instanceof Bt?(function(t){return t.op.toString()+" {"+t.getFilters().map(nf).join(" ,")+"}"})(n):"Filter"}class Qy extends Qe{constructor(e,t,r){super(e,t,r),this.key=ae.fromName(r.referenceValue)}matches(e){const t=ae.comparator(e.key,this.key);return this.matchesComparison(t)}}class Xy extends Qe{constructor(e,t){super(e,"in",t),this.keys=rf("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Yy extends Qe{constructor(e,t){super(e,"not-in",t),this.keys=rf("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function rf(n,e){return(e.arrayValue?.values||[]).map((t=>ae.fromName(t.referenceValue)))}class Jy extends Qe{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Su(t)&&Es(t.arrayValue,this.value)}}class Zy extends Qe{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Es(this.value.arrayValue,t)}}class e_ extends Qe{constructor(e,t){super(e,"not-in",t)}matches(e){if(Es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&t.nullValue===void 0&&!Es(this.value.arrayValue,t)}}class t_ extends Qe{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Su(t)||!t.arrayValue.values)&&t.arrayValue.values.some((r=>Es(this.value.arrayValue,r)))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(e,t=null,r=[],i=[],a=null,c=null,p=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=i,this.limit=a,this.startAt=c,this.endAt=p,this.Te=null}}function rl(n,e=null,t=[],r=[],i=null,a=null,c=null){return new n_(n,e,t,r,i,a,c)}function Cu(n){const e=ge(n);if(e.Te===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map((r=>Ya(r))).join(","),t+="|ob:",t+=e.orderBy.map((r=>(function(a){return a.field.canonicalString()+a.dir})(r))).join(","),Yo(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((r=>fi(r))).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((r=>fi(r))).join(",")),e.Te=t}return e.Te}function Ru(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!Gy(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!tf(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!nl(n.startAt,e.startAt)&&nl(n.endAt,e.endAt)}function Ja(n){return ae.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e,t=null,r=[],i=[],a=null,c="F",p=null,_=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=i,this.limit=a,this.limitType=c,this.startAt=p,this.endAt=_,this.Ie=null,this.Ee=null,this.de=null,this.startAt,this.endAt}}function r_(n,e,t,r,i,a,c,p){return new Ei(n,e,t,r,i,a,c,p)}function Pu(n){return new Ei(n)}function il(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function sf(n){return n.collectionGroup!==null}function ds(n){const e=ge(n);if(e.Ie===null){e.Ie=[];const t=new Set;for(const a of e.explicitOrderBy)e.Ie.push(a),t.add(a.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let p=new Je(at.comparator);return c.filters.forEach((_=>{_.getFlattenedFilters().forEach((v=>{v.isInequality()&&(p=p.add(v.field))}))})),p})(e).forEach((a=>{t.has(a.canonicalString())||a.isKeyField()||e.Ie.push(new ws(a,r))})),t.has(at.keyField().canonicalString())||e.Ie.push(new ws(at.keyField(),r))}return e.Ie}function tn(n){const e=ge(n);return e.Ee||(e.Ee=i_(e,ds(n))),e.Ee}function i_(n,e){if(n.limitType==="F")return rl(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map((i=>{const a=i.dir==="desc"?"asc":"desc";return new ws(i.field,a)}));const t=n.endAt?new Fo(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Fo(n.startAt.position,n.startAt.inclusive):null;return rl(n.path,n.collectionGroup,e,n.filters,n.limit,t,r)}}function Za(n,e){const t=n.filters.concat([e]);return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function eu(n,e,t){return new Ei(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Zo(n,e){return Ru(tn(n),tn(e))&&n.limitType===e.limitType}function of(n){return`${Cu(tn(n))}|lt:${n.limitType}`}function Jr(n){return`Query(target=${(function(t){let r=t.path.canonicalString();return t.collectionGroup!==null&&(r+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(r+=`, filters: [${t.filters.map((i=>nf(i))).join(", ")}]`),Yo(t.limit)||(r+=", limit: "+t.limit),t.orderBy.length>0&&(r+=`, orderBy: [${t.orderBy.map((i=>(function(c){return`${c.field.canonicalString()} (${c.dir})`})(i))).join(", ")}]`),t.startAt&&(r+=", startAt: ",r+=t.startAt.inclusive?"b:":"a:",r+=t.startAt.position.map((i=>fi(i))).join(",")),t.endAt&&(r+=", endAt: ",r+=t.endAt.inclusive?"a:":"b:",r+=t.endAt.position.map((i=>fi(i))).join(",")),`Target(${r})`})(tn(n))}; limitType=${n.limitType})`}function ea(n,e){return e.isFoundDocument()&&(function(r,i){const a=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(a):ae.isDocumentKey(r.path)?r.path.isEqual(a):r.path.isImmediateParentOf(a)})(n,e)&&(function(r,i){for(const a of ds(r))if(!a.field.isKeyField()&&i.data.field(a.field)===null)return!1;return!0})(n,e)&&(function(r,i){for(const a of r.filters)if(!a.matches(i))return!1;return!0})(n,e)&&(function(r,i){return!(r.startAt&&!(function(c,p,_){const v=tl(c,p,_);return c.inclusive?v<=0:v<0})(r.startAt,ds(r),i)||r.endAt&&!(function(c,p,_){const v=tl(c,p,_);return c.inclusive?v>=0:v>0})(r.endAt,ds(r),i))})(n,e)}function s_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function af(n){return(e,t)=>{let r=!1;for(const i of ds(n)){const a=o_(i,e,t);if(a!==0)return a;r=r||i.field.isKeyField()}return 0}}function o_(n,e,t){const r=n.field.isKeyField()?ae.comparator(e.key,t.key):(function(a,c,p){const _=c.data.field(a),v=p.data.field(a);return _!==null&&v!==null?hi(_,v):le(42886)})(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return le(19790,{direction:n.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[i,a]of r)if(this.equalsFn(i,e))return a}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let a=0;a<i.length;a++)if(this.equalsFn(i[a][0],e))return void(i[a]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[t]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ur(this.inner,((t,r)=>{for(const[i,a]of r)e(i,a)}))}isEmpty(){return $h(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a_=new je(ae.comparator);function An(){return a_}const uf=new je(ae.comparator);function as(...n){let e=uf;for(const t of n)e=e.insert(t.key,t);return e}function cf(n){let e=uf;return n.forEach(((t,r)=>e=e.insert(t,r.overlayedDocument))),e}function Rr(){return ps()}function lf(){return ps()}function ps(){return new Lr((n=>n.toString()),((n,e)=>n.isEqual(e)))}const u_=new je(ae.comparator),c_=new Je(ae.comparator);function Se(...n){let e=c_;for(const t of n)e=e.add(t);return e}const l_=new Je(be);function h_(){return l_}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oo(e)?"-0":e}}function hf(n){return{integerValue:""+n}}function f_(n,e){return Uy(e)?hf(e):ku(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(){this._=void 0}}function d_(n,e,t){return n instanceof Is?(function(i,a){const c={fields:{[zh]:{stringValue:Wh},[Kh]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return a&&bu(a)&&(a=Jo(a)),a&&(c.fields[Gh]=a),{mapValue:c}})(t,e):n instanceof As?df(n,e):n instanceof bs?pf(n,e):(function(i,a){const c=ff(i,a),p=sl(c)+sl(i.Ae);return Xa(c)&&Xa(i.Ae)?hf(p):ku(i.serializer,p)})(n,e)}function p_(n,e,t){return n instanceof As?df(n,e):n instanceof bs?pf(n,e):t}function ff(n,e){return n instanceof Uo?(function(r){return Xa(r)||(function(a){return!!a&&"doubleValue"in a})(r)})(e)?e:{integerValue:0}:null}class Is extends ta{}class As extends ta{constructor(e){super(),this.elements=e}}function df(n,e){const t=gf(e);for(const r of n.elements)t.some((i=>an(i,r)))||t.push(r);return{arrayValue:{values:t}}}class bs extends ta{constructor(e){super(),this.elements=e}}function pf(n,e){let t=gf(e);for(const r of n.elements)t=t.filter((i=>!an(i,r)));return{arrayValue:{values:t}}}class Uo extends ta{constructor(e,t){super(),this.serializer=e,this.Ae=t}}function sl(n){return We(n.integerValue||n.doubleValue)}function gf(n){return Su(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class g_{constructor(e,t){this.field=e,this.transform=t}}function m_(n,e){return n.field.isEqual(e.field)&&(function(r,i){return r instanceof As&&i instanceof As||r instanceof bs&&i instanceof bs?li(r.elements,i.elements,an):r instanceof Uo&&i instanceof Uo?an(r.Ae,i.Ae):r instanceof Is&&i instanceof Is})(n.transform,e.transform)}class y_{constructor(e,t){this.version=e,this.transformResults=t}}class jt{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new jt}static exists(e){return new jt(void 0,e)}static updateTime(e){return new jt(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Io(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class na{}function mf(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Du(n.key,jt.none()):new xs(n.key,n.data,jt.none());{const t=n.data,r=Tt.empty();let i=new Je(at.comparator);for(let a of e.fields)if(!i.has(a)){let c=t.field(a);c===null&&a.length>1&&(a=a.popLast(),c=t.field(a)),c===null?r.delete(a):r.set(a,c),i=i.add(a)}return new cr(n.key,r,new At(i.toArray()),jt.none())}}function __(n,e,t){n instanceof xs?(function(i,a,c){const p=i.value.clone(),_=al(i.fieldTransforms,a,c.transformResults);p.setAll(_),a.convertToFoundDocument(c.version,p).setHasCommittedMutations()})(n,e,t):n instanceof cr?(function(i,a,c){if(!Io(i.precondition,a))return void a.convertToUnknownDocument(c.version);const p=al(i.fieldTransforms,a,c.transformResults),_=a.data;_.setAll(yf(i)),_.setAll(p),a.convertToFoundDocument(c.version,_).setHasCommittedMutations()})(n,e,t):(function(i,a,c){a.convertToNoDocument(c.version).setHasCommittedMutations()})(0,e,t)}function gs(n,e,t,r){return n instanceof xs?(function(a,c,p,_){if(!Io(a.precondition,c))return p;const v=a.value.clone(),I=ul(a.fieldTransforms,_,c);return v.setAll(I),c.convertToFoundDocument(c.version,v).setHasLocalMutations(),null})(n,e,t,r):n instanceof cr?(function(a,c,p,_){if(!Io(a.precondition,c))return p;const v=ul(a.fieldTransforms,_,c),I=c.data;return I.setAll(yf(a)),I.setAll(v),c.convertToFoundDocument(c.version,I).setHasLocalMutations(),p===null?null:p.unionWith(a.fieldMask.fields).unionWith(a.fieldTransforms.map((P=>P.field)))})(n,e,t,r):(function(a,c,p){return Io(a.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):p})(n,e,t)}function v_(n,e){let t=null;for(const r of n.fieldTransforms){const i=e.data.field(r.field),a=ff(r.transform,i||null);a!=null&&(t===null&&(t=Tt.empty()),t.set(r.field,a))}return t||null}function ol(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!(function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&li(r,i,((a,c)=>m_(a,c)))})(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class xs extends na{constructor(e,t,r,i=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class cr extends na{constructor(e,t,r,i,a=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=i,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function yf(n){const e=new Map;return n.fieldMask.fields.forEach((t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}})),e}function al(n,e,t){const r=new Map;Re(n.length===t.length,32656,{Re:t.length,Ve:n.length});for(let i=0;i<t.length;i++){const a=n[i],c=a.transform,p=e.data.field(a.field);r.set(a.field,p_(c,p,t[i]))}return r}function ul(n,e,t){const r=new Map;for(const i of n){const a=i.transform,c=t.data.field(i.field);r.set(i.field,d_(a,c,e))}return r}class Du extends na{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class T_ extends na{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E_{constructor(e,t,r,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const a=this.mutations[i];a.key.isEqual(e.key)&&__(a,e,r[i])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=gs(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=gs(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=lf();return this.mutations.forEach((i=>{const a=e.get(i.key),c=a.overlayedDocument;let p=this.applyToLocalView(c,a.mutatedFields);p=t.has(i.key)?null:p;const _=mf(c,p);_!==null&&r.set(i.key,_),c.isValidDocument()||c.convertToNoDocument(pe.min())})),r}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Se())}isEqual(e){return this.batchId===e.batchId&&li(this.mutations,e.mutations,((t,r)=>ol(t,r)))&&li(this.baseMutations,e.baseMutations,((t,r)=>ol(t,r)))}}class Nu{constructor(e,t,r,i){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=i}static from(e,t,r){Re(e.mutations.length===r.length,58842,{me:e.mutations.length,fe:r.length});let i=(function(){return u_})();const a=e.mutations;for(let c=0;c<a.length;c++)i=i.insert(a[c].key,r[c].version);return new Nu(e,t,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w_{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I_{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ke,Ce;function A_(n){switch(n){case H.OK:return le(64938);case H.CANCELLED:case H.UNKNOWN:case H.DEADLINE_EXCEEDED:case H.RESOURCE_EXHAUSTED:case H.INTERNAL:case H.UNAVAILABLE:case H.UNAUTHENTICATED:return!1;case H.INVALID_ARGUMENT:case H.NOT_FOUND:case H.ALREADY_EXISTS:case H.PERMISSION_DENIED:case H.FAILED_PRECONDITION:case H.ABORTED:case H.OUT_OF_RANGE:case H.UNIMPLEMENTED:case H.DATA_LOSS:return!0;default:return le(15467,{code:n})}}function _f(n){if(n===void 0)return In("GRPC error has no .code"),H.UNKNOWN;switch(n){case Ke.OK:return H.OK;case Ke.CANCELLED:return H.CANCELLED;case Ke.UNKNOWN:return H.UNKNOWN;case Ke.DEADLINE_EXCEEDED:return H.DEADLINE_EXCEEDED;case Ke.RESOURCE_EXHAUSTED:return H.RESOURCE_EXHAUSTED;case Ke.INTERNAL:return H.INTERNAL;case Ke.UNAVAILABLE:return H.UNAVAILABLE;case Ke.UNAUTHENTICATED:return H.UNAUTHENTICATED;case Ke.INVALID_ARGUMENT:return H.INVALID_ARGUMENT;case Ke.NOT_FOUND:return H.NOT_FOUND;case Ke.ALREADY_EXISTS:return H.ALREADY_EXISTS;case Ke.PERMISSION_DENIED:return H.PERMISSION_DENIED;case Ke.FAILED_PRECONDITION:return H.FAILED_PRECONDITION;case Ke.ABORTED:return H.ABORTED;case Ke.OUT_OF_RANGE:return H.OUT_OF_RANGE;case Ke.UNIMPLEMENTED:return H.UNIMPLEMENTED;case Ke.DATA_LOSS:return H.DATA_LOSS;default:return le(39323,{code:n})}}(Ce=Ke||(Ke={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b_(){return new TextEncoder}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=new Zn([4294967295,4294967295],0);function cl(n){const e=b_().encode(n),t=new Nh;return t.update(e),new Uint8Array(t.digest())}function ll(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),a=e.getUint32(12,!0);return[new Zn([t,r],0),new Zn([i,a],0)]}class xu{constructor(e,t,r){if(this.bitmap=e,this.padding=t,this.hashCount=r,t<0||t>=8)throw new us(`Invalid padding: ${t}`);if(r<0)throw new us(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new us(`Invalid hash count: ${r}`);if(e.length===0&&t!==0)throw new us(`Invalid padding when bitmap length is 0: ${t}`);this.ge=8*e.length-t,this.pe=Zn.fromNumber(this.ge)}ye(e,t,r){let i=e.add(t.multiply(Zn.fromNumber(r)));return i.compare(S_)===1&&(i=new Zn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.pe).toNumber()}we(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.ge===0)return!1;const t=cl(e),[r,i]=ll(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);if(!this.we(c))return!1}return!0}static create(e,t,r){const i=e%8==0?0:8-e%8,a=new Uint8Array(Math.ceil(e/8)),c=new xu(a,i,t);return r.forEach((p=>c.insert(p))),c}insert(e){if(this.ge===0)return;const t=cl(e),[r,i]=ll(t);for(let a=0;a<this.hashCount;a++){const c=this.ye(r,i,a);this.Se(c)}}Se(e){const t=Math.floor(e/8),r=e%8;this.bitmap[t]|=1<<r}}class us extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{constructor(e,t,r,i,a){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=a}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const i=new Map;return i.set(e,Vs.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new ra(pe.min(),i,new je(be),An(),Se())}}class Vs{constructor(e,t,r,i,a){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=a}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Vs(r,t,Se(),Se(),Se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ao{constructor(e,t,r,i){this.be=e,this.removedTargetIds=t,this.key=r,this.De=i}}class vf{constructor(e,t){this.targetId=e,this.Ce=t}}class Tf{constructor(e,t,r=ut.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=i}}class hl{constructor(){this.ve=0,this.Fe=fl(),this.Me=ut.EMPTY_BYTE_STRING,this.xe=!1,this.Oe=!0}get current(){return this.xe}get resumeToken(){return this.Me}get Ne(){return this.ve!==0}get Be(){return this.Oe}Le(e){e.approximateByteSize()>0&&(this.Oe=!0,this.Me=e)}ke(){let e=Se(),t=Se(),r=Se();return this.Fe.forEach(((i,a)=>{switch(a){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:r=r.add(i);break;default:le(38017,{changeType:a})}})),new Vs(this.Me,this.xe,e,t,r)}qe(){this.Oe=!1,this.Fe=fl()}Qe(e,t){this.Oe=!0,this.Fe=this.Fe.insert(e,t)}$e(e){this.Oe=!0,this.Fe=this.Fe.remove(e)}Ue(){this.ve+=1}Ke(){this.ve-=1,Re(this.ve>=0,3241,{ve:this.ve})}We(){this.Oe=!0,this.xe=!0}}class C_{constructor(e){this.Ge=e,this.ze=new Map,this.je=An(),this.Je=fo(),this.He=fo(),this.Ye=new je(be)}Ze(e){for(const t of e.be)e.De&&e.De.isFoundDocument()?this.Xe(t,e.De):this.et(t,e.key,e.De);for(const t of e.removedTargetIds)this.et(t,e.key,e.De)}tt(e){this.forEachTarget(e,(t=>{const r=this.nt(t);switch(e.state){case 0:this.rt(t)&&r.Le(e.resumeToken);break;case 1:r.Ke(),r.Ne||r.qe(),r.Le(e.resumeToken);break;case 2:r.Ke(),r.Ne||this.removeTarget(t);break;case 3:this.rt(t)&&(r.We(),r.Le(e.resumeToken));break;case 4:this.rt(t)&&(this.it(t),r.Le(e.resumeToken));break;default:le(56790,{state:e.state})}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.ze.forEach(((r,i)=>{this.rt(i)&&t(i)}))}st(e){const t=e.targetId,r=e.Ce.count,i=this.ot(t);if(i){const a=i.target;if(Ja(a))if(r===0){const c=new ae(a.path);this.et(t,c,pt.newNoDocument(c,pe.min()))}else Re(r===1,20013,{expectedCount:r});else{const c=this._t(t);if(c!==r){const p=this.ut(e),_=p?this.ct(p,e,c):1;if(_!==0){this.it(t);const v=_===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ye=this.Ye.insert(t,v)}}}}}ut(e){const t=e.Ce.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:a=0}=t;let c,p;try{c=rr(r).toUint8Array()}catch(_){if(_ instanceof Hh)return ci("Decoding the base64 bloom filter in existence filter failed ("+_.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw _}try{p=new xu(c,i,a)}catch(_){return ci(_ instanceof us?"BloomFilter error: ":"Applying bloom filter failed: ",_),null}return p.ge===0?null:p}ct(e,t,r){return t.Ce.count===r-this.Pt(e,t.targetId)?0:2}Pt(e,t){const r=this.Ge.getRemoteKeysForTarget(t);let i=0;return r.forEach((a=>{const c=this.Ge.ht(),p=`projects/${c.projectId}/databases/${c.database}/documents/${a.path.canonicalString()}`;e.mightContain(p)||(this.et(t,a,null),i++)})),i}Tt(e){const t=new Map;this.ze.forEach(((a,c)=>{const p=this.ot(c);if(p){if(a.current&&Ja(p.target)){const _=new ae(p.target.path);this.It(_).has(c)||this.Et(c,_)||this.et(c,_,pt.newNoDocument(_,e))}a.Be&&(t.set(c,a.ke()),a.qe())}}));let r=Se();this.He.forEach(((a,c)=>{let p=!0;c.forEachWhile((_=>{const v=this.ot(_);return!v||v.purpose==="TargetPurposeLimboResolution"||(p=!1,!1)})),p&&(r=r.add(a))})),this.je.forEach(((a,c)=>c.setReadTime(e)));const i=new ra(e,t,this.Ye,this.je,r);return this.je=An(),this.Je=fo(),this.He=fo(),this.Ye=new je(be),i}Xe(e,t){if(!this.rt(e))return;const r=this.Et(e,t.key)?2:0;this.nt(e).Qe(t.key,r),this.je=this.je.insert(t.key,t),this.Je=this.Je.insert(t.key,this.It(t.key).add(e)),this.He=this.He.insert(t.key,this.dt(t.key).add(e))}et(e,t,r){if(!this.rt(e))return;const i=this.nt(e);this.Et(e,t)?i.Qe(t,1):i.$e(t),this.He=this.He.insert(t,this.dt(t).delete(e)),this.He=this.He.insert(t,this.dt(t).add(e)),r&&(this.je=this.je.insert(t,r))}removeTarget(e){this.ze.delete(e)}_t(e){const t=this.nt(e).ke();return this.Ge.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ue(e){this.nt(e).Ue()}nt(e){let t=this.ze.get(e);return t||(t=new hl,this.ze.set(e,t)),t}dt(e){let t=this.He.get(e);return t||(t=new Je(be),this.He=this.He.insert(e,t)),t}It(e){let t=this.Je.get(e);return t||(t=new Je(be),this.Je=this.Je.insert(e,t)),t}rt(e){const t=this.ot(e)!==null;return t||re("WatchChangeAggregator","Detected inactive target",e),t}ot(e){const t=this.ze.get(e);return t&&t.Ne?null:this.Ge.At(e)}it(e){this.ze.set(e,new hl),this.Ge.getRemoteKeysForTarget(e).forEach((t=>{this.et(e,t,null)}))}Et(e,t){return this.Ge.getRemoteKeysForTarget(e).has(t)}}function fo(){return new je(ae.comparator)}function fl(){return new je(ae.comparator)}const R_={asc:"ASCENDING",desc:"DESCENDING"},P_={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},k_={and:"AND",or:"OR"};class D_{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function tu(n,e){return n.useProto3Json||Yo(e)?e:{value:e}}function jo(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ef(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function N_(n,e){return jo(n,e.toTimestamp())}function nn(n){return Re(!!n,49232),pe.fromTimestamp((function(t){const r=nr(t);return new Oe(r.seconds,r.nanos)})(n))}function Vu(n,e){return nu(n,e).canonicalString()}function nu(n,e){const t=(function(i){return new xe(["projects",i.projectId,"databases",i.database])})(n).child("documents");return e===void 0?t:t.child(e)}function wf(n){const e=xe.fromString(n);return Re(Cf(e),10190,{key:e.toString()}),e}function ru(n,e){return Vu(n.databaseId,e.path)}function Oa(n,e){const t=wf(e);if(t.get(1)!==n.databaseId.projectId)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new ee(H.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new ae(Af(t))}function If(n,e){return Vu(n.databaseId,e)}function x_(n){const e=wf(n);return e.length===4?xe.emptyPath():Af(e)}function iu(n){return new xe(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Af(n){return Re(n.length>4&&n.get(4)==="documents",29091,{key:n.toString()}),n.popFirst(5)}function dl(n,e,t){return{name:ru(n,e),fields:t.value.mapValue.fields}}function V_(n,e){let t;if("targetChange"in e){e.targetChange;const r=(function(v){return v==="NO_CHANGE"?0:v==="ADD"?1:v==="REMOVE"?2:v==="CURRENT"?3:v==="RESET"?4:le(39313,{state:v})})(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],a=(function(v,I){return v.useProto3Json?(Re(I===void 0||typeof I=="string",58123),ut.fromBase64String(I||"")):(Re(I===void 0||I instanceof Buffer||I instanceof Uint8Array,16193),ut.fromUint8Array(I||new Uint8Array))})(n,e.targetChange.resumeToken),c=e.targetChange.cause,p=c&&(function(v){const I=v.code===void 0?H.UNKNOWN:_f(v.code);return new ee(I,v.message||"")})(c);t=new Tf(r,i,a,p||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Oa(n,r.document.name),a=nn(r.document.updateTime),c=r.document.createTime?nn(r.document.createTime):pe.min(),p=new Tt({mapValue:{fields:r.document.fields}}),_=pt.newFoundDocument(i,a,c,p),v=r.targetIds||[],I=r.removedTargetIds||[];t=new Ao(v,I,_.key,_)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Oa(n,r.document),a=r.readTime?nn(r.readTime):pe.min(),c=pt.newNoDocument(i,a),p=r.removedTargetIds||[];t=new Ao([],p,c.key,c)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Oa(n,r.document),a=r.removedTargetIds||[];t=new Ao([],a,i,null)}else{if(!("filter"in e))return le(11601,{Rt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:a}=r,c=new I_(i,a),p=r.targetId;t=new vf(p,c)}}return t}function O_(n,e){let t;if(e instanceof xs)t={update:dl(n,e.key,e.value)};else if(e instanceof Du)t={delete:ru(n,e.key)};else if(e instanceof cr)t={update:dl(n,e.key,e.data),updateMask:H_(e.fieldMask)};else{if(!(e instanceof T_))return le(16599,{Vt:e.type});t={verify:ru(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map((r=>(function(a,c){const p=c.transform;if(p instanceof Is)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(p instanceof As)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:p.elements}};if(p instanceof bs)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:p.elements}};if(p instanceof Uo)return{fieldPath:c.field.canonicalString(),increment:p.Ae};throw le(20930,{transform:c.transform})})(0,r)))),e.precondition.isNone||(t.currentDocument=(function(i,a){return a.updateTime!==void 0?{updateTime:N_(i,a.updateTime)}:a.exists!==void 0?{exists:a.exists}:le(27497)})(n,e.precondition)),t}function L_(n,e){return n&&n.length>0?(Re(e!==void 0,14353),n.map((t=>(function(i,a){let c=i.updateTime?nn(i.updateTime):nn(a);return c.isEqual(pe.min())&&(c=nn(a)),new y_(c,i.transformResults||[])})(t,e)))):[]}function M_(n,e){return{documents:[If(n,e.path)]}}function F_(n,e){const t={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),t.structuredQuery.from=[{collectionId:r.lastSegment()}]),t.parent=If(n,i);const a=(function(v){if(v.length!==0)return Sf(Bt.create(v,"and"))})(e.filters);a&&(t.structuredQuery.where=a);const c=(function(v){if(v.length!==0)return v.map((I=>(function(V){return{field:Zr(V.field),direction:q_(V.dir)}})(I)))})(e.orderBy);c&&(t.structuredQuery.orderBy=c);const p=tu(n,e.limit);return p!==null&&(t.structuredQuery.limit=p),e.startAt&&(t.structuredQuery.startAt=(function(v){return{before:v.inclusive,values:v.position}})(e.startAt)),e.endAt&&(t.structuredQuery.endAt=(function(v){return{before:!v.inclusive,values:v.position}})(e.endAt)),{ft:t,parent:i}}function U_(n){let e=x_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let i=null;if(r>0){Re(r===1,65062);const I=t.from[0];I.allDescendants?i=I.collectionId:e=e.child(I.collectionId)}let a=[];t.where&&(a=(function(P){const V=bf(P);return V instanceof Bt&&ef(V)?V.getFilters():[V]})(t.where));let c=[];t.orderBy&&(c=(function(P){return P.map((V=>(function(W){return new ws(ei(W.field),(function(Y){switch(Y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}})(W.direction))})(V)))})(t.orderBy));let p=null;t.limit&&(p=(function(P){let V;return V=typeof P=="object"?P.value:P,Yo(V)?null:V})(t.limit));let _=null;t.startAt&&(_=(function(P){const V=!!P.before,G=P.values||[];return new Fo(G,V)})(t.startAt));let v=null;return t.endAt&&(v=(function(P){const V=!P.before,G=P.values||[];return new Fo(G,V)})(t.endAt)),r_(e,i,c,a,p,"F",_,v)}function j_(n,e){const t=(function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return le(28987,{purpose:i})}})(e.purpose);return t==null?null:{"goog-listen-tags":t}}function bf(n){return n.unaryFilter!==void 0?(function(t){switch(t.unaryFilter.op){case"IS_NAN":const r=ei(t.unaryFilter.field);return Qe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=ei(t.unaryFilter.field);return Qe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const a=ei(t.unaryFilter.field);return Qe.create(a,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=ei(t.unaryFilter.field);return Qe.create(c,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return le(61313);default:return le(60726)}})(n):n.fieldFilter!==void 0?(function(t){return Qe.create(ei(t.fieldFilter.field),(function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return le(58110);default:return le(50506)}})(t.fieldFilter.op),t.fieldFilter.value)})(n):n.compositeFilter!==void 0?(function(t){return Bt.create(t.compositeFilter.filters.map((r=>bf(r))),(function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return le(1026)}})(t.compositeFilter.op))})(n):le(30097,{filter:n})}function q_(n){return R_[n]}function B_(n){return P_[n]}function $_(n){return k_[n]}function Zr(n){return{fieldPath:n.canonicalString()}}function ei(n){return at.fromServerFormat(n.fieldPath)}function Sf(n){return n instanceof Qe?(function(t){if(t.op==="=="){if(el(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NAN"}};if(Zc(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(el(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NAN"}};if(Zc(t.value))return{unaryFilter:{field:Zr(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Zr(t.field),op:B_(t.op),value:t.value}}})(n):n instanceof Bt?(function(t){const r=t.getFilters().map((i=>Sf(i)));return r.length===1?r[0]:{compositeFilter:{op:$_(t.op),filters:r}}})(n):le(54877,{filter:n})}function H_(n){const e=[];return n.fields.forEach((t=>e.push(t.canonicalString()))),{fieldPaths:e}}function Cf(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(e,t,r,i,a=pe.min(),c=pe.min(),p=ut.EMPTY_BYTE_STRING,_=null){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=a,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=p,this.expectedCount=_}withSequenceNumber(e){return new Qn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Qn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e){this.yt=e}}function z_(n){const e=U_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?eu(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G_{constructor(){this.Cn=new K_}addToCollectionParentIndex(e,t){return this.Cn.add(t),z.resolve()}getCollectionParents(e,t){return z.resolve(this.Cn.getEntries(t))}addFieldIndex(e,t){return z.resolve()}deleteFieldIndex(e,t){return z.resolve()}deleteAllFieldIndexes(e){return z.resolve()}createTargetIndexes(e,t){return z.resolve()}getDocumentsMatchingTarget(e,t){return z.resolve(null)}getIndexType(e,t){return z.resolve(0)}getFieldIndexes(e,t){return z.resolve([])}getNextCollectionGroupToUpdate(e){return z.resolve(null)}getMinOffset(e,t){return z.resolve(tr.min())}getMinOffsetFromCollectionGroup(e,t){return z.resolve(tr.min())}updateCollectionGroup(e,t,r){return z.resolve()}updateIndexEntries(e,t){return z.resolve()}}class K_{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t]||new Je(xe.comparator),a=!i.has(r);return this.index[t]=i.add(r),a}has(e){const t=e.lastSegment(),r=e.popLast(),i=this.index[t];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Je(xe.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pl={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},Rf=41943040;class vt{static withCacheSize(e){return new vt(e,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vt.DEFAULT_COLLECTION_PERCENTILE=10,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,vt.DEFAULT=new vt(Rf,vt.DEFAULT_COLLECTION_PERCENTILE,vt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),vt.DISABLED=new vt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.ar=e}next(){return this.ar+=2,this.ar}static ur(){return new di(0)}static cr(){return new di(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gl="LruGarbageCollector",Q_=1048576;function ml([n,e],[t,r]){const i=be(n,t);return i===0?be(e,r):i}class X_{constructor(e){this.Ir=e,this.buffer=new Je(ml),this.Er=0}dr(){return++this.Er}Ar(e){const t=[e,this.dr()];if(this.buffer.size<this.Ir)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();ml(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Y_{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.Rr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.Vr(6e4)}stop(){this.Rr&&(this.Rr.cancel(),this.Rr=null)}get started(){return this.Rr!==null}Vr(e){re(gl,`Garbage collection scheduled in ${e}ms`),this.Rr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.Rr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ti(t)?re(gl,"Ignoring IndexedDB error during garbage collection: ",t):await vi(t)}await this.Vr(3e5)}))}}class J_{constructor(e,t){this.mr=e,this.params=t}calculateTargetCount(e,t){return this.mr.gr(e).next((r=>Math.floor(t/100*r)))}nthSequenceNumber(e,t){if(t===0)return z.resolve(Xo.ce);const r=new X_(t);return this.mr.forEachTarget(e,(i=>r.Ar(i.sequenceNumber))).next((()=>this.mr.pr(e,(i=>r.Ar(i))))).next((()=>r.maxValue))}removeTargets(e,t,r){return this.mr.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.mr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(re("LruGarbageCollector","Garbage collection skipped; disabled"),z.resolve(pl)):this.getCacheSize(e).next((r=>r<this.params.cacheSizeCollectionThreshold?(re("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pl):this.yr(e,t)))}getCacheSize(e){return this.mr.getCacheSize(e)}yr(e,t){let r,i,a,c,p,_,v;const I=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((P=>(P>this.params.maximumSequenceNumbersToCollect?(re("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${P}`),i=this.params.maximumSequenceNumbersToCollect):i=P,c=Date.now(),this.nthSequenceNumber(e,i)))).next((P=>(r=P,p=Date.now(),this.removeTargets(e,r,t)))).next((P=>(a=P,_=Date.now(),this.removeOrphanedDocuments(e,r)))).next((P=>(v=Date.now(),Yr()<=Ae.DEBUG&&re("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-I}ms
	Determined least recently used ${i} in `+(p-c)+`ms
	Removed ${a} targets in `+(_-p)+`ms
	Removed ${P} documents in `+(v-_)+`ms
Total Duration: ${v-I}ms`),z.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:a,documentsRemoved:P}))))}}function Z_(n,e){return new J_(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ev{constructor(){this.changes=new Lr((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,pt.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?z.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tv{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nv{constructor(e,t,r,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(r=i,this.remoteDocumentCache.getEntry(e,t)))).next((i=>(r!==null&&gs(r.mutation,i,At.empty(),Oe.now()),i)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.getLocalViewOfDocuments(e,r,Se()).next((()=>r))))}getLocalViewOfDocuments(e,t,r=Se()){const i=Rr();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,r).next((a=>{let c=as();return a.forEach(((p,_)=>{c=c.insert(p,_.overlayedDocument)})),c}))))}getOverlayedDocuments(e,t){const r=Rr();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,Se())))}populateOverlays(e,t,r){const i=[];return r.forEach((a=>{t.has(a)||i.push(a)})),this.documentOverlayCache.getOverlays(e,i).next((a=>{a.forEach(((c,p)=>{t.set(c,p)}))}))}computeViews(e,t,r,i){let a=An();const c=ps(),p=(function(){return ps()})();return t.forEach(((_,v)=>{const I=r.get(v.key);i.has(v.key)&&(I===void 0||I.mutation instanceof cr)?a=a.insert(v.key,v):I!==void 0?(c.set(v.key,I.mutation.getFieldMask()),gs(I.mutation,v,I.mutation.getFieldMask(),Oe.now())):c.set(v.key,At.empty())})),this.recalculateAndSaveOverlays(e,a).next((_=>(_.forEach(((v,I)=>c.set(v,I))),t.forEach(((v,I)=>p.set(v,new tv(I,c.get(v)??null)))),p)))}recalculateAndSaveOverlays(e,t){const r=ps();let i=new je(((c,p)=>c-p)),a=Se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((c=>{for(const p of c)p.keys().forEach((_=>{const v=t.get(_);if(v===null)return;let I=r.get(_)||At.empty();I=p.applyToLocalView(v,I),r.set(_,I);const P=(i.get(p.batchId)||Se()).add(_);i=i.insert(p.batchId,P)}))})).next((()=>{const c=[],p=i.getReverseIterator();for(;p.hasNext();){const _=p.getNext(),v=_.key,I=_.value,P=lf();I.forEach((V=>{if(!a.has(V)){const G=mf(t.get(V),r.get(V));G!==null&&P.set(V,G),a=a.add(V)}})),c.push(this.documentOverlayCache.saveOverlays(e,v,P))}return z.waitFor(c)})).next((()=>r))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((r=>this.recalculateAndSaveOverlays(e,r)))}getDocumentsMatchingQuery(e,t,r,i){return(function(c){return ae.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0})(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):sf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r,i):this.getDocumentsMatchingCollectionQuery(e,t,r,i)}getNextDocuments(e,t,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,i).next((a=>{const c=i-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,i-a.size):z.resolve(Rr());let p=_s,_=a;return c.next((v=>z.forEach(v,((I,P)=>(p<P.largestBatchId&&(p=P.largestBatchId),a.get(I)?z.resolve():this.remoteDocumentCache.getEntry(e,I).next((V=>{_=_.insert(I,V)}))))).next((()=>this.populateOverlays(e,v,a))).next((()=>this.computeViews(e,_,v,Se()))).next((I=>({batchId:p,changes:cf(I)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new ae(t)).next((r=>{let i=as();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i}))}getDocumentsMatchingCollectionGroupQuery(e,t,r,i){const a=t.collectionGroup;let c=as();return this.indexManager.getCollectionParents(e,a).next((p=>z.forEach(p,(_=>{const v=(function(P,V){return new Ei(V,null,P.explicitOrderBy.slice(),P.filters.slice(),P.limit,P.limitType,P.startAt,P.endAt)})(t,_.child(a));return this.getDocumentsMatchingCollectionQuery(e,v,r,i).next((I=>{I.forEach(((P,V)=>{c=c.insert(P,V)}))}))})).next((()=>c))))}getDocumentsMatchingCollectionQuery(e,t,r,i){let a;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next((c=>(a=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,a,i)))).next((c=>{a.forEach(((_,v)=>{const I=v.getKey();c.get(I)===null&&(c=c.insert(I,pt.newInvalidDocument(I)))}));let p=as();return c.forEach(((_,v)=>{const I=a.get(_);I!==void 0&&gs(I.mutation,v,At.empty(),Oe.now()),ea(t,v)&&(p=p.insert(_,v))})),p}))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rv{constructor(e){this.serializer=e,this.Lr=new Map,this.kr=new Map}getBundleMetadata(e,t){return z.resolve(this.Lr.get(t))}saveBundleMetadata(e,t){return this.Lr.set(t.id,(function(i){return{id:i.id,version:i.version,createTime:nn(i.createTime)}})(t)),z.resolve()}getNamedQuery(e,t){return z.resolve(this.kr.get(t))}saveNamedQuery(e,t){return this.kr.set(t.name,(function(i){return{name:i.name,query:z_(i.bundledQuery),readTime:nn(i.readTime)}})(t)),z.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iv{constructor(){this.overlays=new je(ae.comparator),this.qr=new Map}getOverlay(e,t){return z.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rr();return z.forEach(t,(i=>this.getOverlay(e,i).next((a=>{a!==null&&r.set(i,a)})))).next((()=>r))}saveOverlays(e,t,r){return r.forEach(((i,a)=>{this.St(e,t,a)})),z.resolve()}removeOverlaysForBatchId(e,t,r){const i=this.qr.get(r);return i!==void 0&&(i.forEach((a=>this.overlays=this.overlays.remove(a))),this.qr.delete(r)),z.resolve()}getOverlaysForCollection(e,t,r){const i=Rr(),a=t.length+1,c=new ae(t.child("")),p=this.overlays.getIteratorFrom(c);for(;p.hasNext();){const _=p.getNext().value,v=_.getKey();if(!t.isPrefixOf(v.path))break;v.path.length===a&&_.largestBatchId>r&&i.set(_.getKey(),_)}return z.resolve(i)}getOverlaysForCollectionGroup(e,t,r,i){let a=new je(((v,I)=>v-I));const c=this.overlays.getIterator();for(;c.hasNext();){const v=c.getNext().value;if(v.getKey().getCollectionGroup()===t&&v.largestBatchId>r){let I=a.get(v.largestBatchId);I===null&&(I=Rr(),a=a.insert(v.largestBatchId,I)),I.set(v.getKey(),v)}}const p=Rr(),_=a.getIterator();for(;_.hasNext()&&(_.getNext().value.forEach(((v,I)=>p.set(v,I))),!(p.size()>=i)););return z.resolve(p)}St(e,t,r){const i=this.overlays.get(r.key);if(i!==null){const c=this.qr.get(i.largestBatchId).delete(r.key);this.qr.set(i.largestBatchId,c)}this.overlays=this.overlays.insert(r.key,new w_(t,r));let a=this.qr.get(t);a===void 0&&(a=Se(),this.qr.set(t,a)),this.qr.set(t,a.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sv{constructor(){this.sessionToken=ut.EMPTY_BYTE_STRING}getSessionToken(e){return z.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,z.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ou{constructor(){this.Qr=new Je(nt.$r),this.Ur=new Je(nt.Kr)}isEmpty(){return this.Qr.isEmpty()}addReference(e,t){const r=new nt(e,t);this.Qr=this.Qr.add(r),this.Ur=this.Ur.add(r)}Wr(e,t){e.forEach((r=>this.addReference(r,t)))}removeReference(e,t){this.Gr(new nt(e,t))}zr(e,t){e.forEach((r=>this.removeReference(r,t)))}jr(e){const t=new ae(new xe([])),r=new nt(t,e),i=new nt(t,e+1),a=[];return this.Ur.forEachInRange([r,i],(c=>{this.Gr(c),a.push(c.key)})),a}Jr(){this.Qr.forEach((e=>this.Gr(e)))}Gr(e){this.Qr=this.Qr.delete(e),this.Ur=this.Ur.delete(e)}Hr(e){const t=new ae(new xe([])),r=new nt(t,e),i=new nt(t,e+1);let a=Se();return this.Ur.forEachInRange([r,i],(c=>{a=a.add(c.key)})),a}containsKey(e){const t=new nt(e,0),r=this.Qr.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class nt{constructor(e,t){this.key=e,this.Yr=t}static $r(e,t){return ae.comparator(e.key,t.key)||be(e.Yr,t.Yr)}static Kr(e,t){return be(e.Yr,t.Yr)||ae.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ov{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.tr=1,this.Zr=new Je(nt.$r)}checkEmpty(e){return z.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,i){const a=this.tr;this.tr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new E_(a,t,r,i);this.mutationQueue.push(c);for(const p of i)this.Zr=this.Zr.add(new nt(p.key,a)),this.indexManager.addToCollectionParentIndex(e,p.key.path.popLast());return z.resolve(c)}lookupMutationBatch(e,t){return z.resolve(this.Xr(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,i=this.ei(r),a=i<0?0:i;return z.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return z.resolve(this.mutationQueue.length===0?Au:this.tr-1)}getAllMutationBatches(e){return z.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new nt(t,0),i=new nt(t,Number.POSITIVE_INFINITY),a=[];return this.Zr.forEachInRange([r,i],(c=>{const p=this.Xr(c.Yr);a.push(p)})),z.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Je(be);return t.forEach((i=>{const a=new nt(i,0),c=new nt(i,Number.POSITIVE_INFINITY);this.Zr.forEachInRange([a,c],(p=>{r=r.add(p.Yr)}))})),z.resolve(this.ti(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,i=r.length+1;let a=r;ae.isDocumentKey(a)||(a=a.child(""));const c=new nt(new ae(a),0);let p=new Je(be);return this.Zr.forEachWhile((_=>{const v=_.key.path;return!!r.isPrefixOf(v)&&(v.length===i&&(p=p.add(_.Yr)),!0)}),c),z.resolve(this.ti(p))}ti(e){const t=[];return e.forEach((r=>{const i=this.Xr(r);i!==null&&t.push(i)})),t}removeMutationBatch(e,t){Re(this.ni(t.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Zr;return z.forEach(t.mutations,(i=>{const a=new nt(i.key,t.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this.Zr=r}))}ir(e){}containsKey(e,t){const r=new nt(t,0),i=this.Zr.firstAfterOrEqual(r);return z.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,z.resolve()}ni(e,t){return this.ei(e)}ei(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Xr(e){const t=this.ei(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class av{constructor(e){this.ri=e,this.docs=(function(){return new je(ae.comparator)})(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,i=this.docs.get(r),a=i?i.size:0,c=this.ri(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:c}),this.size+=c-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return z.resolve(r?r.document.mutableCopy():pt.newInvalidDocument(t))}getEntries(e,t){let r=An();return t.forEach((i=>{const a=this.docs.get(i);r=r.insert(i,a?a.document.mutableCopy():pt.newInvalidDocument(i))})),z.resolve(r)}getDocumentsMatchingQuery(e,t,r,i){let a=An();const c=t.path,p=new ae(c.child("__id-9223372036854775808__")),_=this.docs.getIteratorFrom(p);for(;_.hasNext();){const{key:v,value:{document:I}}=_.getNext();if(!c.isPrefixOf(v.path))break;v.path.length>c.length+1||Oy(Vy(I),r)<=0||(i.has(I.key)||ea(t,I))&&(a=a.insert(I.key,I.mutableCopy()))}return z.resolve(a)}getAllFromCollectionGroup(e,t,r,i){le(9500)}ii(e,t){return z.forEach(this.docs,(r=>t(r)))}newChangeBuffer(e){return new uv(this)}getSize(e){return z.resolve(this.size)}}class uv extends ev{constructor(e){super(),this.Nr=e}applyChanges(e){const t=[];return this.changes.forEach(((r,i)=>{i.isValidDocument()?t.push(this.Nr.addEntry(e,i)):this.Nr.removeEntry(r)})),z.waitFor(t)}getFromCache(e,t){return this.Nr.getEntry(e,t)}getAllFromCache(e,t){return this.Nr.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(e){this.persistence=e,this.si=new Lr((t=>Cu(t)),Ru),this.lastRemoteSnapshotVersion=pe.min(),this.highestTargetId=0,this.oi=0,this._i=new Ou,this.targetCount=0,this.ai=di.ur()}forEachTarget(e,t){return this.si.forEach(((r,i)=>t(i))),z.resolve()}getLastRemoteSnapshotVersion(e){return z.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return z.resolve(this.oi)}allocateTargetId(e){return this.highestTargetId=this.ai.next(),z.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.oi&&(this.oi=t),z.resolve()}Pr(e){this.si.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.ai=new di(t),this.highestTargetId=t),e.sequenceNumber>this.oi&&(this.oi=e.sequenceNumber)}addTargetData(e,t){return this.Pr(t),this.targetCount+=1,z.resolve()}updateTargetData(e,t){return this.Pr(t),z.resolve()}removeTargetData(e,t){return this.si.delete(t.target),this._i.jr(t.targetId),this.targetCount-=1,z.resolve()}removeTargets(e,t,r){let i=0;const a=[];return this.si.forEach(((c,p)=>{p.sequenceNumber<=t&&r.get(p.targetId)===null&&(this.si.delete(c),a.push(this.removeMatchingKeysForTargetId(e,p.targetId)),i++)})),z.waitFor(a).next((()=>i))}getTargetCount(e){return z.resolve(this.targetCount)}getTargetData(e,t){const r=this.si.get(t)||null;return z.resolve(r)}addMatchingKeys(e,t,r){return this._i.Wr(t,r),z.resolve()}removeMatchingKeys(e,t,r){this._i.zr(t,r);const i=this.persistence.referenceDelegate,a=[];return i&&t.forEach((c=>{a.push(i.markPotentiallyOrphaned(e,c))})),z.waitFor(a)}removeMatchingKeysForTargetId(e,t){return this._i.jr(t),z.resolve()}getMatchingKeysForTargetId(e,t){const r=this._i.Hr(t);return z.resolve(r)}containsKey(e,t){return z.resolve(this._i.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e,t){this.ui={},this.overlays={},this.ci=new Xo(0),this.li=!1,this.li=!0,this.hi=new sv,this.referenceDelegate=e(this),this.Pi=new cv(this),this.indexManager=new G_,this.remoteDocumentCache=(function(i){return new av(i)})((r=>this.referenceDelegate.Ti(r))),this.serializer=new W_(t),this.Ii=new rv(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.li=!1,Promise.resolve()}get started(){return this.li}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new iv,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.ui[e.toKey()];return r||(r=new ov(t,this.referenceDelegate),this.ui[e.toKey()]=r),r}getGlobalsCache(){return this.hi}getTargetCache(){return this.Pi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ii}runTransaction(e,t,r){re("MemoryPersistence","Starting transaction:",e);const i=new lv(this.ci.next());return this.referenceDelegate.Ei(),r(i).next((a=>this.referenceDelegate.di(i).next((()=>a)))).toPromise().then((a=>(i.raiseOnCommittedEvent(),a)))}Ai(e,t){return z.or(Object.values(this.ui).map((r=>()=>r.containsKey(e,t))))}}class lv extends My{constructor(e){super(),this.currentSequenceNumber=e}}class Lu{constructor(e){this.persistence=e,this.Ri=new Ou,this.Vi=null}static mi(e){return new Lu(e)}get fi(){if(this.Vi)return this.Vi;throw le(60996)}addReference(e,t,r){return this.Ri.addReference(r,t),this.fi.delete(r.toString()),z.resolve()}removeReference(e,t,r){return this.Ri.removeReference(r,t),this.fi.add(r.toString()),z.resolve()}markPotentiallyOrphaned(e,t){return this.fi.add(t.toString()),z.resolve()}removeTarget(e,t){this.Ri.jr(t.targetId).forEach((i=>this.fi.add(i.toString())));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next((i=>{i.forEach((a=>this.fi.add(a.toString())))})).next((()=>r.removeTargetData(e,t)))}Ei(){this.Vi=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return z.forEach(this.fi,(r=>{const i=ae.fromPath(r);return this.gi(e,i).next((a=>{a||t.removeEntry(i,pe.min())}))})).next((()=>(this.Vi=null,t.apply(e))))}updateLimboDocument(e,t){return this.gi(e,t).next((r=>{r?this.fi.delete(t.toString()):this.fi.add(t.toString())}))}Ti(e){return 0}gi(e,t){return z.or([()=>z.resolve(this.Ri.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ai(e,t)])}}class qo{constructor(e,t){this.persistence=e,this.pi=new Lr((r=>jy(r.path)),((r,i)=>r.isEqual(i))),this.garbageCollector=Z_(this,t)}static mi(e,t){return new qo(e,t)}Ei(){}di(e){return z.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}gr(e){const t=this.wr(e);return this.persistence.getTargetCache().getTargetCount(e).next((r=>t.next((i=>r+i))))}wr(e){let t=0;return this.pr(e,(r=>{t++})).next((()=>t))}pr(e,t){return z.forEach(this.pi,((r,i)=>this.br(e,r,i).next((a=>a?z.resolve():t(i)))))}removeTargets(e,t,r){return this.persistence.getTargetCache().removeTargets(e,t,r)}removeOrphanedDocuments(e,t){let r=0;const i=this.persistence.getRemoteDocumentCache(),a=i.newChangeBuffer();return i.ii(e,(c=>this.br(e,c,t).next((p=>{p||(r++,a.removeEntry(c,pe.min()))})))).next((()=>a.apply(e))).next((()=>r))}markPotentiallyOrphaned(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}removeReference(e,t,r){return this.pi.set(r,e.currentSequenceNumber),z.resolve()}updateLimboDocument(e,t){return this.pi.set(t,e.currentSequenceNumber),z.resolve()}Ti(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=Eo(e.data.value)),t}br(e,t,r){return z.or([()=>this.persistence.Ai(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const i=this.pi.get(t);return z.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(e,t,r,i){this.targetId=e,this.fromCache=t,this.Es=r,this.ds=i}static As(e,t){let r=Se(),i=Se();for(const a of t.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:i=i.add(a.doc.key)}return new Mu(e,t.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fv{constructor(){this.Rs=!1,this.Vs=!1,this.fs=100,this.gs=(function(){return Bd()?8:Fy(gt())>0?6:4})()}initialize(e,t){this.ps=e,this.indexManager=t,this.Rs=!0}getDocumentsMatchingQuery(e,t,r,i){const a={result:null};return this.ys(e,t).next((c=>{a.result=c})).next((()=>{if(!a.result)return this.ws(e,t,i,r).next((c=>{a.result=c}))})).next((()=>{if(a.result)return;const c=new hv;return this.Ss(e,t,c).next((p=>{if(a.result=p,this.Vs)return this.bs(e,t,c,p.size)}))})).next((()=>a.result))}bs(e,t,r,i){return r.documentReadCount<this.fs?(Yr()<=Ae.DEBUG&&re("QueryEngine","SDK will not create cache indexes for query:",Jr(t),"since it only creates cache indexes for collection contains","more than or equal to",this.fs,"documents"),z.resolve()):(Yr()<=Ae.DEBUG&&re("QueryEngine","Query:",Jr(t),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.gs*i?(Yr()<=Ae.DEBUG&&re("QueryEngine","The SDK decides to create cache indexes for query:",Jr(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,tn(t))):z.resolve())}ys(e,t){if(il(t))return z.resolve(null);let r=tn(t);return this.indexManager.getIndexType(e,r).next((i=>i===0?null:(t.limit!==null&&i===1&&(t=eu(t,null,"F"),r=tn(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next((a=>{const c=Se(...a);return this.ps.getDocuments(e,c).next((p=>this.indexManager.getMinOffset(e,r).next((_=>{const v=this.Ds(t,p);return this.Cs(t,v,c,_.readTime)?this.ys(e,eu(t,null,"F")):this.vs(e,v,t,_)}))))})))))}ws(e,t,r,i){return il(t)||i.isEqual(pe.min())?z.resolve(null):this.ps.getDocuments(e,r).next((a=>{const c=this.Ds(t,a);return this.Cs(t,c,r,i)?z.resolve(null):(Yr()<=Ae.DEBUG&&re("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Jr(t)),this.vs(e,c,t,xy(i,_s)).next((p=>p)))}))}Ds(e,t){let r=new Je(af(e));return t.forEach(((i,a)=>{ea(e,a)&&(r=r.add(a))})),r}Cs(e,t,r,i){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const a=e.limitType==="F"?t.last():t.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(i)>0)}Ss(e,t,r){return Yr()<=Ae.DEBUG&&re("QueryEngine","Using full collection scan to execute query:",Jr(t)),this.ps.getDocumentsMatchingQuery(e,t,tr.min(),r)}vs(e,t,r,i){return this.ps.getDocumentsMatchingQuery(e,r,i).next((a=>(t.forEach((c=>{a=a.insert(c.key,c)})),a)))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu="LocalStore",dv=3e8;class pv{constructor(e,t,r,i){this.persistence=e,this.Fs=t,this.serializer=i,this.Ms=new je(be),this.xs=new Lr((a=>Cu(a)),Ru),this.Os=new Map,this.Ns=e.getRemoteDocumentCache(),this.Pi=e.getTargetCache(),this.Ii=e.getBundleCache(),this.Bs(r)}Bs(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new nv(this.Ns,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ns.setIndexManager(this.indexManager),this.Fs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Ms)))}}function gv(n,e,t,r){return new pv(n,e,t,r)}async function kf(n,e){const t=ge(n);return await t.persistence.runTransaction("Handle user change","readonly",(r=>{let i;return t.mutationQueue.getAllMutationBatches(r).next((a=>(i=a,t.Bs(e),t.mutationQueue.getAllMutationBatches(r)))).next((a=>{const c=[],p=[];let _=Se();for(const v of i){c.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}for(const v of a){p.push(v.batchId);for(const I of v.mutations)_=_.add(I.key)}return t.localDocuments.getDocuments(r,_).next((v=>({Ls:v,removedBatchIds:c,addedBatchIds:p})))}))}))}function mv(n,e){const t=ge(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",(r=>{const i=e.batch.keys(),a=t.Ns.newChangeBuffer({trackRemovals:!0});return(function(p,_,v,I){const P=v.batch,V=P.keys();let G=z.resolve();return V.forEach((W=>{G=G.next((()=>I.getEntry(_,W))).next((Q=>{const Y=v.docVersions.get(W);Re(Y!==null,48541),Q.version.compareTo(Y)<0&&(P.applyToRemoteDocument(Q,v),Q.isValidDocument()&&(Q.setReadTime(v.commitVersion),I.addEntry(Q)))}))})),G.next((()=>p.mutationQueue.removeMutationBatch(_,P)))})(t,r,e,a).next((()=>a.apply(r))).next((()=>t.mutationQueue.performConsistencyCheck(r))).next((()=>t.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId))).next((()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,(function(p){let _=Se();for(let v=0;v<p.mutationResults.length;++v)p.mutationResults[v].transformResults.length>0&&(_=_.add(p.batch.mutations[v].key));return _})(e)))).next((()=>t.localDocuments.getDocuments(r,i)))}))}function Df(n){const e=ge(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",(t=>e.Pi.getLastRemoteSnapshotVersion(t)))}function yv(n,e){const t=ge(n),r=e.snapshotVersion;let i=t.Ms;return t.persistence.runTransaction("Apply remote event","readwrite-primary",(a=>{const c=t.Ns.newChangeBuffer({trackRemovals:!0});i=t.Ms;const p=[];e.targetChanges.forEach(((I,P)=>{const V=i.get(P);if(!V)return;p.push(t.Pi.removeMatchingKeys(a,I.removedDocuments,P).next((()=>t.Pi.addMatchingKeys(a,I.addedDocuments,P))));let G=V.withSequenceNumber(a.currentSequenceNumber);e.targetMismatches.get(P)!==null?G=G.withResumeToken(ut.EMPTY_BYTE_STRING,pe.min()).withLastLimboFreeSnapshotVersion(pe.min()):I.resumeToken.approximateByteSize()>0&&(G=G.withResumeToken(I.resumeToken,r)),i=i.insert(P,G),(function(Q,Y,J){return Q.resumeToken.approximateByteSize()===0||Y.snapshotVersion.toMicroseconds()-Q.snapshotVersion.toMicroseconds()>=dv?!0:J.addedDocuments.size+J.modifiedDocuments.size+J.removedDocuments.size>0})(V,G,I)&&p.push(t.Pi.updateTargetData(a,G))}));let _=An(),v=Se();if(e.documentUpdates.forEach((I=>{e.resolvedLimboDocuments.has(I)&&p.push(t.persistence.referenceDelegate.updateLimboDocument(a,I))})),p.push(_v(a,c,e.documentUpdates).next((I=>{_=I.ks,v=I.qs}))),!r.isEqual(pe.min())){const I=t.Pi.getLastRemoteSnapshotVersion(a).next((P=>t.Pi.setTargetsMetadata(a,a.currentSequenceNumber,r)));p.push(I)}return z.waitFor(p).next((()=>c.apply(a))).next((()=>t.localDocuments.getLocalViewOfDocuments(a,_,v))).next((()=>_))})).then((a=>(t.Ms=i,a)))}function _v(n,e,t){let r=Se(),i=Se();return t.forEach((a=>r=r.add(a))),e.getEntries(n,r).next((a=>{let c=An();return t.forEach(((p,_)=>{const v=a.get(p);_.isFoundDocument()!==v.isFoundDocument()&&(i=i.add(p)),_.isNoDocument()&&_.version.isEqual(pe.min())?(e.removeEntry(p,_.readTime),c=c.insert(p,_)):!v.isValidDocument()||_.version.compareTo(v.version)>0||_.version.compareTo(v.version)===0&&v.hasPendingWrites?(e.addEntry(_),c=c.insert(p,_)):re(Fu,"Ignoring outdated watch update for ",p,". Current version:",v.version," Watch version:",_.version)})),{ks:c,qs:i}}))}function vv(n,e){const t=ge(n);return t.persistence.runTransaction("Get next mutation batch","readonly",(r=>(e===void 0&&(e=Au),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e))))}function Tv(n,e){const t=ge(n);return t.persistence.runTransaction("Allocate target","readwrite",(r=>{let i;return t.Pi.getTargetData(r,e).next((a=>a?(i=a,z.resolve(i)):t.Pi.allocateTargetId(r).next((c=>(i=new Qn(e,c,"TargetPurposeListen",r.currentSequenceNumber),t.Pi.addTargetData(r,i).next((()=>i)))))))})).then((r=>{const i=t.Ms.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(t.Ms=t.Ms.insert(r.targetId,r),t.xs.set(e,r.targetId)),r}))}async function su(n,e,t){const r=ge(n),i=r.Ms.get(e),a=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",a,(c=>r.persistence.referenceDelegate.removeTarget(c,i)))}catch(c){if(!Ti(c))throw c;re(Fu,`Failed to update sequence numbers for target ${e}: ${c}`)}r.Ms=r.Ms.remove(e),r.xs.delete(i.target)}function yl(n,e,t){const r=ge(n);let i=pe.min(),a=Se();return r.persistence.runTransaction("Execute query","readwrite",(c=>(function(_,v,I){const P=ge(_),V=P.xs.get(I);return V!==void 0?z.resolve(P.Ms.get(V)):P.Pi.getTargetData(v,I)})(r,c,tn(e)).next((p=>{if(p)return i=p.lastLimboFreeSnapshotVersion,r.Pi.getMatchingKeysForTargetId(c,p.targetId).next((_=>{a=_}))})).next((()=>r.Fs.getDocumentsMatchingQuery(c,e,t?i:pe.min(),t?a:Se()))).next((p=>(Ev(r,s_(e),p),{documents:p,Qs:a})))))}function Ev(n,e,t){let r=n.Os.get(e)||pe.min();t.forEach(((i,a)=>{a.readTime.compareTo(r)>0&&(r=a.readTime)})),n.Os.set(e,r)}class _l{constructor(){this.activeTargetIds=h_()}zs(e){this.activeTargetIds=this.activeTargetIds.add(e)}js(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Gs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class wv{constructor(){this.Mo=new _l,this.xo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e,t=!0){return t&&this.Mo.zs(e),this.xo[e]||"not-current"}updateQueryState(e,t,r){this.xo[e]=t}removeLocalQueryTarget(e){this.Mo.js(e)}isLocalQueryTarget(e){return this.Mo.activeTargetIds.has(e)}clearQueryState(e){delete this.xo[e]}getAllActiveQueryTargets(){return this.Mo.activeTargetIds}isActiveQueryTarget(e){return this.Mo.activeTargetIds.has(e)}start(){return this.Mo=new _l,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iv{Oo(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl="ConnectivityMonitor";class Tl{constructor(){this.No=()=>this.Bo(),this.Lo=()=>this.ko(),this.qo=[],this.Qo()}Oo(e){this.qo.push(e)}shutdown(){window.removeEventListener("online",this.No),window.removeEventListener("offline",this.Lo)}Qo(){window.addEventListener("online",this.No),window.addEventListener("offline",this.Lo)}Bo(){re(vl,"Network connectivity changed: AVAILABLE");for(const e of this.qo)e(0)}ko(){re(vl,"Network connectivity changed: UNAVAILABLE");for(const e of this.qo)e(1)}static v(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let po=null;function ou(){return po===null?po=(function(){return 268435456+Math.round(2147483648*Math.random())})():po++,"0x"+po.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const La="RestConnection",Av={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class bv{get $o(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Uo=t+"://"+e.host,this.Ko=`projects/${r}/databases/${i}`,this.Wo=this.databaseId.database===Lo?`project_id=${r}`:`project_id=${r}&database_id=${i}`}Go(e,t,r,i,a){const c=ou(),p=this.zo(e,t.toUriEncodedString());re(La,`Sending RPC '${e}' ${c}:`,p,r);const _={"google-cloud-resource-prefix":this.Ko,"x-goog-request-params":this.Wo};this.jo(_,i,a);const{host:v}=new URL(p),I=gi(v);return this.Jo(e,p,_,r,I).then((P=>(re(La,`Received RPC '${e}' ${c}: `,P),P)),(P=>{throw ci(La,`RPC '${e}' ${c} failed with error: `,P,"url: ",p,"request:",r),P}))}Ho(e,t,r,i,a,c){return this.Go(e,t,r,i,a)}jo(e,t,r){e["X-Goog-Api-Client"]=(function(){return"gl-js/ fire/"+_i})(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((i,a)=>e[a]=i)),r&&r.headers.forEach(((i,a)=>e[a]=i))}zo(e,t){const r=Av[e];return`${this.Uo}/v1/${t}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sv{constructor(e){this.Yo=e.Yo,this.Zo=e.Zo}Xo(e){this.e_=e}t_(e){this.n_=e}r_(e){this.i_=e}onMessage(e){this.s_=e}close(){this.Zo()}send(e){this.Yo(e)}o_(){this.e_()}__(){this.n_()}a_(e){this.i_(e)}u_(e){this.s_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ft="WebChannelConnection";class Cv extends bv{constructor(e){super(e),this.c_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,t,r,i,a){const c=ou();return new Promise(((p,_)=>{const v=new xh;v.setWithCredentials(!0),v.listenOnce(Vh.COMPLETE,(()=>{try{switch(v.getLastErrorCode()){case To.NO_ERROR:const P=v.getResponseJson();re(ft,`XHR for RPC '${e}' ${c} received:`,JSON.stringify(P)),p(P);break;case To.TIMEOUT:re(ft,`RPC '${e}' ${c} timed out`),_(new ee(H.DEADLINE_EXCEEDED,"Request time out"));break;case To.HTTP_ERROR:const V=v.getStatus();if(re(ft,`RPC '${e}' ${c} failed with status:`,V,"response text:",v.getResponseText()),V>0){let G=v.getResponseJson();Array.isArray(G)&&(G=G[0]);const W=G?.error;if(W&&W.status&&W.message){const Q=(function(J){const _e=J.toLowerCase().replace(/_/g,"-");return Object.values(H).indexOf(_e)>=0?_e:H.UNKNOWN})(W.status);_(new ee(Q,W.message))}else _(new ee(H.UNKNOWN,"Server responded with status "+v.getStatus()))}else _(new ee(H.UNAVAILABLE,"Connection failed."));break;default:le(9055,{l_:e,streamId:c,h_:v.getLastErrorCode(),P_:v.getLastError()})}}finally{re(ft,`RPC '${e}' ${c} completed.`)}}));const I=JSON.stringify(i);re(ft,`RPC '${e}' ${c} sending request:`,i),v.send(t,"POST",I,r,15)}))}T_(e,t,r){const i=ou(),a=[this.Uo,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=Mh(),p=Lh(),_={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},v=this.longPollingOptions.timeoutSeconds;v!==void 0&&(_.longPollingTimeout=Math.round(1e3*v)),this.useFetchStreams&&(_.useFetchStreams=!0),this.jo(_.initMessageHeaders,t,r),_.encodeInitMessageHeaders=!0;const I=a.join("");re(ft,`Creating RPC '${e}' stream ${i}: ${I}`,_);const P=c.createWebChannel(I,_);this.I_(P);let V=!1,G=!1;const W=new Sv({Yo:Y=>{G?re(ft,`Not sending because RPC '${e}' stream ${i} is closed:`,Y):(V||(re(ft,`Opening RPC '${e}' stream ${i} transport.`),P.open(),V=!0),re(ft,`RPC '${e}' stream ${i} sending:`,Y),P.send(Y))},Zo:()=>P.close()}),Q=(Y,J,_e)=>{Y.listen(J,(ve=>{try{_e(ve)}catch(De){setTimeout((()=>{throw De}),0)}}))};return Q(P,os.EventType.OPEN,(()=>{G||(re(ft,`RPC '${e}' stream ${i} transport opened.`),W.o_())})),Q(P,os.EventType.CLOSE,(()=>{G||(G=!0,re(ft,`RPC '${e}' stream ${i} transport closed`),W.a_(),this.E_(P))})),Q(P,os.EventType.ERROR,(Y=>{G||(G=!0,ci(ft,`RPC '${e}' stream ${i} transport errored. Name:`,Y.name,"Message:",Y.message),W.a_(new ee(H.UNAVAILABLE,"The operation could not be completed")))})),Q(P,os.EventType.MESSAGE,(Y=>{if(!G){const J=Y.data[0];Re(!!J,16349);const _e=J,ve=_e?.error||_e[0]?.error;if(ve){re(ft,`RPC '${e}' stream ${i} received error:`,ve);const De=ve.status;let Ze=(function(C){const S=Ke[C];if(S!==void 0)return _f(S)})(De),qe=ve.message;Ze===void 0&&(Ze=H.INTERNAL,qe="Unknown error status: "+De+" with message "+ve.message),G=!0,W.a_(new ee(Ze,qe)),P.close()}else re(ft,`RPC '${e}' stream ${i} received:`,J),W.u_(J)}})),Q(p,Oh.STAT_EVENT,(Y=>{Y.stat===Ga.PROXY?re(ft,`RPC '${e}' stream ${i} detected buffering proxy`):Y.stat===Ga.NOPROXY&&re(ft,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{W.__()}),0),W}terminate(){this.c_.forEach((e=>e.close())),this.c_=[]}I_(e){this.c_.push(e)}E_(e){this.c_=this.c_.filter((t=>t===e))}}function Ma(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(n){return new D_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(e,t,r=1e3,i=1.5,a=6e4){this.Mi=e,this.timerId=t,this.d_=r,this.A_=i,this.R_=a,this.V_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.V_=0}g_(){this.V_=this.R_}p_(e){this.cancel();const t=Math.floor(this.V_+this.y_()),r=Math.max(0,Date.now()-this.f_),i=Math.max(0,t-r);i>0&&re("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.V_} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.m_=this.Mi.enqueueAfterDelay(this.timerId,i,(()=>(this.f_=Date.now(),e()))),this.V_*=this.A_,this.V_<this.d_&&(this.V_=this.d_),this.V_>this.R_&&(this.V_=this.R_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.V_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const El="PersistentStream";class xf{constructor(e,t,r,i,a,c,p,_){this.Mi=e,this.S_=r,this.b_=i,this.connection=a,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=p,this.listener=_,this.state=0,this.D_=0,this.C_=null,this.v_=null,this.stream=null,this.F_=0,this.M_=new Nf(e,t)}x_(){return this.state===1||this.state===5||this.O_()}O_(){return this.state===2||this.state===3}start(){this.F_=0,this.state!==4?this.auth():this.N_()}async stop(){this.x_()&&await this.close(0)}B_(){this.state=0,this.M_.reset()}L_(){this.O_()&&this.C_===null&&(this.C_=this.Mi.enqueueAfterDelay(this.S_,6e4,(()=>this.k_())))}q_(e){this.Q_(),this.stream.send(e)}async k_(){if(this.O_())return this.close(0)}Q_(){this.C_&&(this.C_.cancel(),this.C_=null)}U_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.Q_(),this.U_(),this.M_.cancel(),this.D_++,e!==4?this.M_.reset():t&&t.code===H.RESOURCE_EXHAUSTED?(In(t.toString()),In("Using maximum backoff delay to prevent overloading the backend."),this.M_.g_()):t&&t.code===H.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.K_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.r_(t)}K_(){}auth(){this.state=1;const e=this.W_(this.D_),t=this.D_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([r,i])=>{this.D_===t&&this.G_(r,i)}),(r=>{e((()=>{const i=new ee(H.UNKNOWN,"Fetching auth token failed: "+r.message);return this.z_(i)}))}))}G_(e,t){const r=this.W_(this.D_);this.stream=this.j_(e,t),this.stream.Xo((()=>{r((()=>this.listener.Xo()))})),this.stream.t_((()=>{r((()=>(this.state=2,this.v_=this.Mi.enqueueAfterDelay(this.b_,1e4,(()=>(this.O_()&&(this.state=3),Promise.resolve()))),this.listener.t_())))})),this.stream.r_((i=>{r((()=>this.z_(i)))})),this.stream.onMessage((i=>{r((()=>++this.F_==1?this.J_(i):this.onNext(i)))}))}N_(){this.state=5,this.M_.p_((async()=>{this.state=0,this.start()}))}z_(e){return re(El,`close with error: ${e}`),this.stream=null,this.close(4,e)}W_(e){return t=>{this.Mi.enqueueAndForget((()=>this.D_===e?t():(re(El,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Rv extends xf{constructor(e,t,r,i,a,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}j_(e,t){return this.connection.T_("Listen",e,t)}J_(e){return this.onNext(e)}onNext(e){this.M_.reset();const t=V_(this.serializer,e),r=(function(a){if(!("targetChange"in a))return pe.min();const c=a.targetChange;return c.targetIds&&c.targetIds.length?pe.min():c.readTime?nn(c.readTime):pe.min()})(e);return this.listener.H_(t,r)}Y_(e){const t={};t.database=iu(this.serializer),t.addTarget=(function(a,c){let p;const _=c.target;if(p=Ja(_)?{documents:M_(a,_)}:{query:F_(a,_).ft},p.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){p.resumeToken=Ef(a,c.resumeToken);const v=tu(a,c.expectedCount);v!==null&&(p.expectedCount=v)}else if(c.snapshotVersion.compareTo(pe.min())>0){p.readTime=jo(a,c.snapshotVersion.toTimestamp());const v=tu(a,c.expectedCount);v!==null&&(p.expectedCount=v)}return p})(this.serializer,e);const r=j_(this.serializer,e);r&&(t.labels=r),this.q_(t)}Z_(e){const t={};t.database=iu(this.serializer),t.removeTarget=e,this.q_(t)}}class Pv extends xf{constructor(e,t,r,i,a,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,i,c),this.serializer=a}get X_(){return this.F_>0}start(){this.lastStreamToken=void 0,super.start()}K_(){this.X_&&this.ea([])}j_(e,t){return this.connection.T_("Write",e,t)}J_(e){return Re(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,Re(!e.writeResults||e.writeResults.length===0,55816),this.listener.ta()}onNext(e){Re(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.M_.reset();const t=L_(e.writeResults,e.commitTime),r=nn(e.commitTime);return this.listener.na(r,t)}ra(){const e={};e.database=iu(this.serializer),this.q_(e)}ea(e){const t={streamToken:this.lastStreamToken,writes:e.map((r=>O_(this.serializer,r)))};this.q_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kv{}class Dv extends kv{constructor(e,t,r,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=i,this.ia=!1}sa(){if(this.ia)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.")}Go(e,t,r,i){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([a,c])=>this.connection.Go(e,nu(t,r),i,a,c))).catch((a=>{throw a.name==="FirebaseError"?(a.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new ee(H.UNKNOWN,a.toString())}))}Ho(e,t,r,i,a){return this.sa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([c,p])=>this.connection.Ho(e,nu(t,r),i,c,p,a))).catch((c=>{throw c.name==="FirebaseError"?(c.code===H.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new ee(H.UNKNOWN,c.toString())}))}terminate(){this.ia=!0,this.connection.terminate()}}class Nv{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.oa=0,this._a=null,this.aa=!0}ua(){this.oa===0&&(this.ca("Unknown"),this._a=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this._a=null,this.la("Backend didn't respond within 10 seconds."),this.ca("Offline"),Promise.resolve()))))}ha(e){this.state==="Online"?this.ca("Unknown"):(this.oa++,this.oa>=1&&(this.Pa(),this.la(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ca("Offline")))}set(e){this.Pa(),this.oa=0,e==="Online"&&(this.aa=!1),this.ca(e)}ca(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}la(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.aa?(In(t),this.aa=!1):re("OnlineStateTracker",t)}Pa(){this._a!==null&&(this._a.cancel(),this._a=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or="RemoteStore";class xv{constructor(e,t,r,i,a){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.Ta=[],this.Ia=new Map,this.Ea=new Set,this.da=[],this.Aa=a,this.Aa.Oo((c=>{r.enqueueAndForget((async()=>{Mr(this)&&(re(Or,"Restarting streams for network reachability change."),await(async function(_){const v=ge(_);v.Ea.add(4),await Os(v),v.Ra.set("Unknown"),v.Ea.delete(4),await sa(v)})(this))}))})),this.Ra=new Nv(r,i)}}async function sa(n){if(Mr(n))for(const e of n.da)await e(!0)}async function Os(n){for(const e of n.da)await e(!1)}function Vf(n,e){const t=ge(n);t.Ia.has(e.targetId)||(t.Ia.set(e.targetId,e),Bu(t)?qu(t):wi(t).O_()&&ju(t,e))}function Uu(n,e){const t=ge(n),r=wi(t);t.Ia.delete(e),r.O_()&&Of(t,e),t.Ia.size===0&&(r.O_()?r.L_():Mr(t)&&t.Ra.set("Unknown"))}function ju(n,e){if(n.Va.Ue(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(pe.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}wi(n).Y_(e)}function Of(n,e){n.Va.Ue(e),wi(n).Z_(e)}function qu(n){n.Va=new C_({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),At:e=>n.Ia.get(e)||null,ht:()=>n.datastore.serializer.databaseId}),wi(n).start(),n.Ra.ua()}function Bu(n){return Mr(n)&&!wi(n).x_()&&n.Ia.size>0}function Mr(n){return ge(n).Ea.size===0}function Lf(n){n.Va=void 0}async function Vv(n){n.Ra.set("Online")}async function Ov(n){n.Ia.forEach(((e,t)=>{ju(n,e)}))}async function Lv(n,e){Lf(n),Bu(n)?(n.Ra.ha(e),qu(n)):n.Ra.set("Unknown")}async function Mv(n,e,t){if(n.Ra.set("Online"),e instanceof Tf&&e.state===2&&e.cause)try{await(async function(i,a){const c=a.cause;for(const p of a.targetIds)i.Ia.has(p)&&(await i.remoteSyncer.rejectListen(p,c),i.Ia.delete(p),i.Va.removeTarget(p))})(n,e)}catch(r){re(Or,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Bo(n,r)}else if(e instanceof Ao?n.Va.Ze(e):e instanceof vf?n.Va.st(e):n.Va.tt(e),!t.isEqual(pe.min()))try{const r=await Df(n.localStore);t.compareTo(r)>=0&&await(function(a,c){const p=a.Va.Tt(c);return p.targetChanges.forEach(((_,v)=>{if(_.resumeToken.approximateByteSize()>0){const I=a.Ia.get(v);I&&a.Ia.set(v,I.withResumeToken(_.resumeToken,c))}})),p.targetMismatches.forEach(((_,v)=>{const I=a.Ia.get(_);if(!I)return;a.Ia.set(_,I.withResumeToken(ut.EMPTY_BYTE_STRING,I.snapshotVersion)),Of(a,_);const P=new Qn(I.target,_,v,I.sequenceNumber);ju(a,P)})),a.remoteSyncer.applyRemoteEvent(p)})(n,t)}catch(r){re(Or,"Failed to raise snapshot:",r),await Bo(n,r)}}async function Bo(n,e,t){if(!Ti(e))throw e;n.Ea.add(1),await Os(n),n.Ra.set("Offline"),t||(t=()=>Df(n.localStore)),n.asyncQueue.enqueueRetryable((async()=>{re(Or,"Retrying IndexedDB access"),await t(),n.Ea.delete(1),await sa(n)}))}function Mf(n,e){return e().catch((t=>Bo(n,t,e)))}async function oa(n){const e=ge(n),t=sr(e);let r=e.Ta.length>0?e.Ta[e.Ta.length-1].batchId:Au;for(;Fv(e);)try{const i=await vv(e.localStore,r);if(i===null){e.Ta.length===0&&t.L_();break}r=i.batchId,Uv(e,i)}catch(i){await Bo(e,i)}Ff(e)&&Uf(e)}function Fv(n){return Mr(n)&&n.Ta.length<10}function Uv(n,e){n.Ta.push(e);const t=sr(n);t.O_()&&t.X_&&t.ea(e.mutations)}function Ff(n){return Mr(n)&&!sr(n).x_()&&n.Ta.length>0}function Uf(n){sr(n).start()}async function jv(n){sr(n).ra()}async function qv(n){const e=sr(n);for(const t of n.Ta)e.ea(t.mutations)}async function Bv(n,e,t){const r=n.Ta.shift(),i=Nu.from(r,e,t);await Mf(n,(()=>n.remoteSyncer.applySuccessfulWrite(i))),await oa(n)}async function $v(n,e){e&&sr(n).X_&&await(async function(r,i){if((function(c){return A_(c)&&c!==H.ABORTED})(i.code)){const a=r.Ta.shift();sr(r).B_(),await Mf(r,(()=>r.remoteSyncer.rejectFailedWrite(a.batchId,i))),await oa(r)}})(n,e),Ff(n)&&Uf(n)}async function wl(n,e){const t=ge(n);t.asyncQueue.verifyOperationInProgress(),re(Or,"RemoteStore received new credentials");const r=Mr(t);t.Ea.add(3),await Os(t),r&&t.Ra.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.Ea.delete(3),await sa(t)}async function Hv(n,e){const t=ge(n);e?(t.Ea.delete(2),await sa(t)):e||(t.Ea.add(2),await Os(t),t.Ra.set("Unknown"))}function wi(n){return n.ma||(n.ma=(function(t,r,i){const a=ge(t);return a.sa(),new Rv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:Vv.bind(null,n),t_:Ov.bind(null,n),r_:Lv.bind(null,n),H_:Mv.bind(null,n)}),n.da.push((async e=>{e?(n.ma.B_(),Bu(n)?qu(n):n.Ra.set("Unknown")):(await n.ma.stop(),Lf(n))}))),n.ma}function sr(n){return n.fa||(n.fa=(function(t,r,i){const a=ge(t);return a.sa(),new Pv(r,a.connection,a.authCredentials,a.appCheckCredentials,a.serializer,i)})(n.datastore,n.asyncQueue,{Xo:()=>Promise.resolve(),t_:jv.bind(null,n),r_:$v.bind(null,n),ta:qv.bind(null,n),na:Bv.bind(null,n)}),n.da.push((async e=>{e?(n.fa.B_(),await oa(n)):(await n.fa.stop(),n.Ta.length>0&&(re(Or,`Stopping write stream with ${n.Ta.length} pending writes`),n.Ta=[]))}))),n.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,t,r,i,a){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=i,this.removalCallback=a,this.deferred=new Tn,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((c=>{}))}get promise(){return this.deferred.promise}static createAndSchedule(e,t,r,i,a){const c=Date.now()+r,p=new $u(e,t,c,i,a);return p.start(r),p}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new ee(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Hu(n,e){if(In("AsyncQueue",`${e}: ${n}`),Ti(n))return new ee(H.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class si{static emptySet(e){return new si(e.comparator)}constructor(e){this.comparator=e?(t,r)=>e(t,r)||ae.comparator(t.key,r.key):(t,r)=>ae.comparator(t.key,r.key),this.keyedMap=as(),this.sortedSet=new je(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,r)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof si)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const i=t.getNext().key,a=r.getNext().key;if(!i.isEqual(a))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new si;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(){this.ga=new je(ae.comparator)}track(e){const t=e.doc.key,r=this.ga.get(t);r?e.type!==0&&r.type===3?this.ga=this.ga.insert(t,e):e.type===3&&r.type!==1?this.ga=this.ga.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.ga=this.ga.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.ga=this.ga.remove(t):e.type===1&&r.type===2?this.ga=this.ga.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.ga=this.ga.insert(t,{type:2,doc:e.doc}):le(63341,{Rt:e,pa:r}):this.ga=this.ga.insert(t,e)}ya(){const e=[];return this.ga.inorderTraversal(((t,r)=>{e.push(r)})),e}}class pi{constructor(e,t,r,i,a,c,p,_,v){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=a,this.fromCache=c,this.syncStateChanged=p,this.excludesMetadataChanges=_,this.hasCachedResults=v}static fromInitialDocuments(e,t,r,i,a){const c=[];return t.forEach((p=>{c.push({type:0,doc:p})})),new pi(e,t,si.emptySet(t),c,r,i,!0,!1,a)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Zo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==r[i].type||!t[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wv{constructor(){this.wa=void 0,this.Sa=[]}ba(){return this.Sa.some((e=>e.Da()))}}class zv{constructor(){this.queries=Al(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(t,r){const i=ge(t),a=i.queries;i.queries=Al(),a.forEach(((c,p)=>{for(const _ of p.Sa)_.onError(r)}))})(this,new ee(H.ABORTED,"Firestore shutting down"))}}function Al(){return new Lr((n=>of(n)),Zo)}async function jf(n,e){const t=ge(n);let r=3;const i=e.query;let a=t.queries.get(i);a?!a.ba()&&e.Da()&&(r=2):(a=new Wv,r=e.Da()?0:1);try{switch(r){case 0:a.wa=await t.onListen(i,!0);break;case 1:a.wa=await t.onListen(i,!1);break;case 2:await t.onFirstRemoteStoreListen(i)}}catch(c){const p=Hu(c,`Initialization of query '${Jr(e.query)}' failed`);return void e.onError(p)}t.queries.set(i,a),a.Sa.push(e),e.va(t.onlineState),a.wa&&e.Fa(a.wa)&&Wu(t)}async function qf(n,e){const t=ge(n),r=e.query;let i=3;const a=t.queries.get(r);if(a){const c=a.Sa.indexOf(e);c>=0&&(a.Sa.splice(c,1),a.Sa.length===0?i=e.Da()?0:1:!a.ba()&&e.Da()&&(i=2))}switch(i){case 0:return t.queries.delete(r),t.onUnlisten(r,!0);case 1:return t.queries.delete(r),t.onUnlisten(r,!1);case 2:return t.onLastRemoteStoreUnlisten(r);default:return}}function Gv(n,e){const t=ge(n);let r=!1;for(const i of e){const a=i.query,c=t.queries.get(a);if(c){for(const p of c.Sa)p.Fa(i)&&(r=!0);c.wa=i}}r&&Wu(t)}function Kv(n,e,t){const r=ge(n),i=r.queries.get(e);if(i)for(const a of i.Sa)a.onError(t);r.queries.delete(e)}function Wu(n){n.Ca.forEach((e=>{e.next()}))}var au,bl;(bl=au||(au={})).Ma="default",bl.Cache="cache";class Bf{constructor(e,t,r){this.query=e,this.xa=t,this.Oa=!1,this.Na=null,this.onlineState="Unknown",this.options=r||{}}Fa(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new pi(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Oa?this.Ba(e)&&(this.xa.next(e),t=!0):this.La(e,this.onlineState)&&(this.ka(e),t=!0),this.Na=e,t}onError(e){this.xa.error(e)}va(e){this.onlineState=e;let t=!1;return this.Na&&!this.Oa&&this.La(this.Na,e)&&(this.ka(this.Na),t=!0),t}La(e,t){if(!e.fromCache||!this.Da())return!0;const r=t!=="Offline";return(!this.options.qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Ba(e){if(e.docChanges.length>0)return!0;const t=this.Na&&this.Na.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}ka(e){e=pi.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Oa=!0,this.xa.next(e)}Da(){return this.options.source!==au.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $f{constructor(e){this.key=e}}class Hf{constructor(e){this.key=e}}class Qv{constructor(e,t){this.query=e,this.Ya=t,this.Za=null,this.hasCachedResults=!1,this.current=!1,this.Xa=Se(),this.mutatedKeys=Se(),this.eu=af(e),this.tu=new si(this.eu)}get nu(){return this.Ya}ru(e,t){const r=t?t.iu:new Il,i=t?t.tu:this.tu;let a=t?t.mutatedKeys:this.mutatedKeys,c=i,p=!1;const _=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,v=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((I,P)=>{const V=i.get(I),G=ea(this.query,P)?P:null,W=!!V&&this.mutatedKeys.has(V.key),Q=!!G&&(G.hasLocalMutations||this.mutatedKeys.has(G.key)&&G.hasCommittedMutations);let Y=!1;V&&G?V.data.isEqual(G.data)?W!==Q&&(r.track({type:3,doc:G}),Y=!0):this.su(V,G)||(r.track({type:2,doc:G}),Y=!0,(_&&this.eu(G,_)>0||v&&this.eu(G,v)<0)&&(p=!0)):!V&&G?(r.track({type:0,doc:G}),Y=!0):V&&!G&&(r.track({type:1,doc:V}),Y=!0,(_||v)&&(p=!0)),Y&&(G?(c=c.add(G),a=Q?a.add(I):a.delete(I)):(c=c.delete(I),a=a.delete(I)))})),this.query.limit!==null)for(;c.size>this.query.limit;){const I=this.query.limitType==="F"?c.last():c.first();c=c.delete(I.key),a=a.delete(I.key),r.track({type:1,doc:I})}return{tu:c,iu:r,Cs:p,mutatedKeys:a}}su(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r,i){const a=this.tu;this.tu=e.tu,this.mutatedKeys=e.mutatedKeys;const c=e.iu.ya();c.sort(((I,P)=>(function(G,W){const Q=Y=>{switch(Y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return le(20277,{Rt:Y})}};return Q(G)-Q(W)})(I.type,P.type)||this.eu(I.doc,P.doc))),this.ou(r),i=i??!1;const p=t&&!i?this._u():[],_=this.Xa.size===0&&this.current&&!i?1:0,v=_!==this.Za;return this.Za=_,c.length!==0||v?{snapshot:new pi(this.query,e.tu,a,c,e.mutatedKeys,_===0,v,!1,!!r&&r.resumeToken.approximateByteSize()>0),au:p}:{au:p}}va(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({tu:this.tu,iu:new Il,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{au:[]}}uu(e){return!this.Ya.has(e)&&!!this.tu.has(e)&&!this.tu.get(e).hasLocalMutations}ou(e){e&&(e.addedDocuments.forEach((t=>this.Ya=this.Ya.add(t))),e.modifiedDocuments.forEach((t=>{})),e.removedDocuments.forEach((t=>this.Ya=this.Ya.delete(t))),this.current=e.current)}_u(){if(!this.current)return[];const e=this.Xa;this.Xa=Se(),this.tu.forEach((r=>{this.uu(r.key)&&(this.Xa=this.Xa.add(r.key))}));const t=[];return e.forEach((r=>{this.Xa.has(r)||t.push(new Hf(r))})),this.Xa.forEach((r=>{e.has(r)||t.push(new $f(r))})),t}cu(e){this.Ya=e.Qs,this.Xa=Se();const t=this.ru(e.documents);return this.applyChanges(t,!0)}lu(){return pi.fromInitialDocuments(this.query,this.tu,this.mutatedKeys,this.Za===0,this.hasCachedResults)}}const zu="SyncEngine";class Xv{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class Yv{constructor(e){this.key=e,this.hu=!1}}class Jv{constructor(e,t,r,i,a,c){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=i,this.currentUser=a,this.maxConcurrentLimboResolutions=c,this.Pu={},this.Tu=new Lr((p=>of(p)),Zo),this.Iu=new Map,this.Eu=new Set,this.du=new je(ae.comparator),this.Au=new Map,this.Ru=new Ou,this.Vu={},this.mu=new Map,this.fu=di.cr(),this.onlineState="Unknown",this.gu=void 0}get isPrimaryClient(){return this.gu===!0}}async function Zv(n,e,t=!0){const r=Xf(n);let i;const a=r.Tu.get(e);return a?(r.sharedClientState.addLocalQueryTarget(a.targetId),i=a.view.lu()):i=await Wf(r,e,t,!0),i}async function eT(n,e){const t=Xf(n);await Wf(t,e,!0,!1)}async function Wf(n,e,t,r){const i=await Tv(n.localStore,tn(e)),a=i.targetId,c=n.sharedClientState.addLocalQueryTarget(a,t);let p;return r&&(p=await tT(n,e,a,c==="current",i.resumeToken)),n.isPrimaryClient&&t&&Vf(n.remoteStore,i),p}async function tT(n,e,t,r,i){n.pu=(P,V,G)=>(async function(Q,Y,J,_e){let ve=Y.view.ru(J);ve.Cs&&(ve=await yl(Q.localStore,Y.query,!1).then((({documents:l})=>Y.view.ru(l,ve))));const De=_e&&_e.targetChanges.get(Y.targetId),Ze=_e&&_e.targetMismatches.get(Y.targetId)!=null,qe=Y.view.applyChanges(ve,Q.isPrimaryClient,De,Ze);return Cl(Q,Y.targetId,qe.au),qe.snapshot})(n,P,V,G);const a=await yl(n.localStore,e,!0),c=new Qv(e,a.Qs),p=c.ru(a.documents),_=Vs.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",i),v=c.applyChanges(p,n.isPrimaryClient,_);Cl(n,t,v.au);const I=new Xv(e,t,c);return n.Tu.set(e,I),n.Iu.has(t)?n.Iu.get(t).push(e):n.Iu.set(t,[e]),v.snapshot}async function nT(n,e,t){const r=ge(n),i=r.Tu.get(e),a=r.Iu.get(i.targetId);if(a.length>1)return r.Iu.set(i.targetId,a.filter((c=>!Zo(c,e)))),void r.Tu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await su(r.localStore,i.targetId,!1).then((()=>{r.sharedClientState.clearQueryState(i.targetId),t&&Uu(r.remoteStore,i.targetId),uu(r,i.targetId)})).catch(vi)):(uu(r,i.targetId),await su(r.localStore,i.targetId,!0))}async function rT(n,e){const t=ge(n),r=t.Tu.get(e),i=t.Iu.get(r.targetId);t.isPrimaryClient&&i.length===1&&(t.sharedClientState.removeLocalQueryTarget(r.targetId),Uu(t.remoteStore,r.targetId))}async function iT(n,e,t){const r=hT(n);try{const i=await(function(c,p){const _=ge(c),v=Oe.now(),I=p.reduce(((G,W)=>G.add(W.key)),Se());let P,V;return _.persistence.runTransaction("Locally write mutations","readwrite",(G=>{let W=An(),Q=Se();return _.Ns.getEntries(G,I).next((Y=>{W=Y,W.forEach(((J,_e)=>{_e.isValidDocument()||(Q=Q.add(J))}))})).next((()=>_.localDocuments.getOverlayedDocuments(G,W))).next((Y=>{P=Y;const J=[];for(const _e of p){const ve=v_(_e,P.get(_e.key).overlayedDocument);ve!=null&&J.push(new cr(_e.key,ve,Yh(ve.value.mapValue),jt.exists(!0)))}return _.mutationQueue.addMutationBatch(G,v,J,p)})).next((Y=>{V=Y;const J=Y.applyToLocalDocumentSet(P,Q);return _.documentOverlayCache.saveOverlays(G,Y.batchId,J)}))})).then((()=>({batchId:V.batchId,changes:cf(P)})))})(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),(function(c,p,_){let v=c.Vu[c.currentUser.toKey()];v||(v=new je(be)),v=v.insert(p,_),c.Vu[c.currentUser.toKey()]=v})(r,i.batchId,t),await Ls(r,i.changes),await oa(r.remoteStore)}catch(i){const a=Hu(i,"Failed to persist write");t.reject(a)}}async function zf(n,e){const t=ge(n);try{const r=await yv(t.localStore,e);e.targetChanges.forEach(((i,a)=>{const c=t.Au.get(a);c&&(Re(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?c.hu=!0:i.modifiedDocuments.size>0?Re(c.hu,14607):i.removedDocuments.size>0&&(Re(c.hu,42227),c.hu=!1))})),await Ls(t,r,e)}catch(r){await vi(r)}}function Sl(n,e,t){const r=ge(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const i=[];r.Tu.forEach(((a,c)=>{const p=c.view.va(e);p.snapshot&&i.push(p.snapshot)})),(function(c,p){const _=ge(c);_.onlineState=p;let v=!1;_.queries.forEach(((I,P)=>{for(const V of P.Sa)V.va(p)&&(v=!0)})),v&&Wu(_)})(r.eventManager,e),i.length&&r.Pu.H_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sT(n,e,t){const r=ge(n);r.sharedClientState.updateQueryState(e,"rejected",t);const i=r.Au.get(e),a=i&&i.key;if(a){let c=new je(ae.comparator);c=c.insert(a,pt.newNoDocument(a,pe.min()));const p=Se().add(a),_=new ra(pe.min(),new Map,new je(be),c,p);await zf(r,_),r.du=r.du.remove(a),r.Au.delete(e),Gu(r)}else await su(r.localStore,e,!1).then((()=>uu(r,e,t))).catch(vi)}async function oT(n,e){const t=ge(n),r=e.batch.batchId;try{const i=await mv(t.localStore,e);Kf(t,r,null),Gf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Ls(t,i)}catch(i){await vi(i)}}async function aT(n,e,t){const r=ge(n);try{const i=await(function(c,p){const _=ge(c);return _.persistence.runTransaction("Reject batch","readwrite-primary",(v=>{let I;return _.mutationQueue.lookupMutationBatch(v,p).next((P=>(Re(P!==null,37113),I=P.keys(),_.mutationQueue.removeMutationBatch(v,P)))).next((()=>_.mutationQueue.performConsistencyCheck(v))).next((()=>_.documentOverlayCache.removeOverlaysForBatchId(v,I,p))).next((()=>_.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(v,I))).next((()=>_.localDocuments.getDocuments(v,I)))}))})(r.localStore,e);Kf(r,e,t),Gf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Ls(r,i)}catch(i){await vi(i)}}function Gf(n,e){(n.mu.get(e)||[]).forEach((t=>{t.resolve()})),n.mu.delete(e)}function Kf(n,e,t){const r=ge(n);let i=r.Vu[r.currentUser.toKey()];if(i){const a=i.get(e);a&&(t?a.reject(t):a.resolve(),i=i.remove(e)),r.Vu[r.currentUser.toKey()]=i}}function uu(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.Iu.get(e))n.Tu.delete(r),t&&n.Pu.yu(r,t);n.Iu.delete(e),n.isPrimaryClient&&n.Ru.jr(e).forEach((r=>{n.Ru.containsKey(r)||Qf(n,r)}))}function Qf(n,e){n.Eu.delete(e.path.canonicalString());const t=n.du.get(e);t!==null&&(Uu(n.remoteStore,t),n.du=n.du.remove(e),n.Au.delete(t),Gu(n))}function Cl(n,e,t){for(const r of t)r instanceof $f?(n.Ru.addReference(r.key,e),uT(n,r)):r instanceof Hf?(re(zu,"Document no longer in limbo: "+r.key),n.Ru.removeReference(r.key,e),n.Ru.containsKey(r.key)||Qf(n,r.key)):le(19791,{wu:r})}function uT(n,e){const t=e.key,r=t.path.canonicalString();n.du.get(t)||n.Eu.has(r)||(re(zu,"New document in limbo: "+t),n.Eu.add(r),Gu(n))}function Gu(n){for(;n.Eu.size>0&&n.du.size<n.maxConcurrentLimboResolutions;){const e=n.Eu.values().next().value;n.Eu.delete(e);const t=new ae(xe.fromString(e)),r=n.fu.next();n.Au.set(r,new Yv(t)),n.du=n.du.insert(t,r),Vf(n.remoteStore,new Qn(tn(Pu(t.path)),r,"TargetPurposeLimboResolution",Xo.ce))}}async function Ls(n,e,t){const r=ge(n),i=[],a=[],c=[];r.Tu.isEmpty()||(r.Tu.forEach(((p,_)=>{c.push(r.pu(_,e,t).then((v=>{if((v||t)&&r.isPrimaryClient){const I=v?!v.fromCache:t?.targetChanges.get(_.targetId)?.current;r.sharedClientState.updateQueryState(_.targetId,I?"current":"not-current")}if(v){i.push(v);const I=Mu.As(_.targetId,v);a.push(I)}})))})),await Promise.all(c),r.Pu.H_(i),await(async function(_,v){const I=ge(_);try{await I.persistence.runTransaction("notifyLocalViewChanges","readwrite",(P=>z.forEach(v,(V=>z.forEach(V.Es,(G=>I.persistence.referenceDelegate.addReference(P,V.targetId,G))).next((()=>z.forEach(V.ds,(G=>I.persistence.referenceDelegate.removeReference(P,V.targetId,G)))))))))}catch(P){if(!Ti(P))throw P;re(Fu,"Failed to update sequence numbers: "+P)}for(const P of v){const V=P.targetId;if(!P.fromCache){const G=I.Ms.get(V),W=G.snapshotVersion,Q=G.withLastLimboFreeSnapshotVersion(W);I.Ms=I.Ms.insert(V,Q)}}})(r.localStore,a))}async function cT(n,e){const t=ge(n);if(!t.currentUser.isEqual(e)){re(zu,"User change. New user:",e.toKey());const r=await kf(t.localStore,e);t.currentUser=e,(function(a,c){a.mu.forEach((p=>{p.forEach((_=>{_.reject(new ee(H.CANCELLED,c))}))})),a.mu.clear()})(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Ls(t,r.Ls)}}function lT(n,e){const t=ge(n),r=t.Au.get(e);if(r&&r.hu)return Se().add(r.key);{let i=Se();const a=t.Iu.get(e);if(!a)return i;for(const c of a){const p=t.Tu.get(c);i=i.unionWith(p.view.nu)}return i}}function Xf(n){const e=ge(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=zf.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lT.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sT.bind(null,e),e.Pu.H_=Gv.bind(null,e.eventManager),e.Pu.yu=Kv.bind(null,e.eventManager),e}function hT(n){const e=ge(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=oT.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=aT.bind(null,e),e}class $o{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=ia(e.databaseInfo.databaseId),this.sharedClientState=this.Du(e),this.persistence=this.Cu(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Fu(e,this.localStore),this.indexBackfillerScheduler=this.Mu(e,this.localStore)}Fu(e,t){return null}Mu(e,t){return null}vu(e){return gv(this.persistence,new fv,e.initialUser,this.serializer)}Cu(e){return new Pf(Lu.mi,this.serializer)}Du(e){return new wv}async terminate(){this.gcScheduler?.stop(),this.indexBackfillerScheduler?.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}$o.provider={build:()=>new $o};class fT extends $o{constructor(e){super(),this.cacheSizeBytes=e}Fu(e,t){Re(this.persistence.referenceDelegate instanceof qo,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new Y_(r,e.asyncQueue,t)}Cu(e){const t=this.cacheSizeBytes!==void 0?vt.withCacheSize(this.cacheSizeBytes):vt.DEFAULT;return new Pf((r=>qo.mi(r,t)),this.serializer)}}class cu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Sl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=cT.bind(null,this.syncEngine),await Hv(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return(function(){return new zv})()}createDatastore(e){const t=ia(e.databaseInfo.databaseId),r=(function(a){return new Cv(a)})(e.databaseInfo);return(function(a,c,p,_){return new Dv(a,c,p,_)})(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return(function(r,i,a,c,p){return new xv(r,i,a,c,p)})(this.localStore,this.datastore,e.asyncQueue,(t=>Sl(this.syncEngine,t,0)),(function(){return Tl.v()?new Tl:new Iv})())}createSyncEngine(e,t){return(function(i,a,c,p,_,v,I){const P=new Jv(i,a,c,p,_,v);return I&&(P.gu=!0),P})(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){await(async function(t){const r=ge(t);re(Or,"RemoteStore shutting down."),r.Ea.add(5),await Os(r),r.Aa.shutdown(),r.Ra.set("Unknown")})(this.remoteStore),this.datastore?.terminate(),this.eventManager?.terminate()}}cu.provider={build:()=>new cu};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Ou(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Ou(this.observer.error,e):In("Uncaught Error in snapshot listener:",e.toString()))}Nu(){this.muted=!0}Ou(e,t){setTimeout((()=>{this.muted||e(t)}),0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="FirestoreClient";class dT{constructor(e,t,r,i,a){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=i,this.user=dt.UNAUTHENTICATED,this.clientId=Iu.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=a,this.authCredentials.start(r,(async c=>{re(or,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c})),this.appCheckCredentials.start(r,(c=>(re(or,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user))))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Tn;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Hu(t,"Failed to shutdown persistence");e.reject(r)}})),e.promise}}async function Fa(n,e){n.asyncQueue.verifyOperationInProgress(),re(or,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener((async i=>{r.isEqual(i)||(await kf(e.localStore,i),r=i)})),e.persistence.setDatabaseDeletedListener((()=>n.terminate())),n._offlineComponents=e}async function Rl(n,e){n.asyncQueue.verifyOperationInProgress();const t=await pT(n);re(or,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener((r=>wl(e.remoteStore,r))),n.setAppCheckTokenChangeListener(((r,i)=>wl(e.remoteStore,i))),n._onlineComponents=e}async function pT(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){re(or,"Using user provided OfflineComponentProvider");try{await Fa(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!(function(i){return i.name==="FirebaseError"?i.code===H.FAILED_PRECONDITION||i.code===H.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11})(t))throw t;ci("Error using user provided cache. Falling back to memory cache: "+t),await Fa(n,new $o)}}else re(or,"Using default OfflineComponentProvider"),await Fa(n,new fT(void 0));return n._offlineComponents}async function Jf(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(re(or,"Using user provided OnlineComponentProvider"),await Rl(n,n._uninitializedComponentsProvider._online)):(re(or,"Using default OnlineComponentProvider"),await Rl(n,new cu))),n._onlineComponents}function gT(n){return Jf(n).then((e=>e.syncEngine))}async function Zf(n){const e=await Jf(n),t=e.eventManager;return t.onListen=Zv.bind(null,e.syncEngine),t.onUnlisten=nT.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=eT.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=rT.bind(null,e.syncEngine),t}function mT(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,v){const I=new Yf({next:V=>{I.Nu(),c.enqueueAndForget((()=>qf(a,P)));const G=V.docs.has(p);!G&&V.fromCache?v.reject(new ee(H.UNAVAILABLE,"Failed to get document because the client is offline.")):G&&V.fromCache&&_&&_.source==="server"?v.reject(new ee(H.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):v.resolve(V)},error:V=>v.reject(V)}),P=new Bf(Pu(p.path),I,{includeMetadataChanges:!0,qa:!0});return jf(a,P)})(await Zf(n),n.asyncQueue,e,t,r))),r.promise}function yT(n,e,t={}){const r=new Tn;return n.asyncQueue.enqueueAndForget((async()=>(function(a,c,p,_,v){const I=new Yf({next:V=>{I.Nu(),c.enqueueAndForget((()=>qf(a,P))),V.fromCache&&_.source==="server"?v.reject(new ee(H.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):v.resolve(V)},error:V=>v.reject(V)}),P=new Bf(p,I,{includeMetadataChanges:!0,qa:!0});return jf(a,P)})(await Zf(n),n.asyncQueue,e,t,r))),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pl=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const td="firestore.googleapis.com",kl=!0;class Dl{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new ee(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=td,this.ssl=kl}else this.host=e.host,this.ssl=e.ssl??kl;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=Rf;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<Q_)throw new ee(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Ny("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=ed(e.experimentalLongPollingOptions??{}),(function(r){if(r.timeoutSeconds!==void 0){if(isNaN(r.timeoutSeconds))throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (must not be NaN)`);if(r.timeoutSeconds<5)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (minimum allowed value is 5)`);if(r.timeoutSeconds>30)throw new ee(H.INVALID_ARGUMENT,`invalid long polling timeout: ${r.timeoutSeconds} (maximum allowed value is 30)`)}})(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(function(r,i){return r.timeoutSeconds===i.timeoutSeconds})(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class aa{constructor(e,t,r,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Dl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new ee(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new ee(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Dl(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=(function(r){if(!r)return new wy;switch(r.type){case"firstParty":return new Sy(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new ee(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}})(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return(function(t){const r=Pl.get(t);r&&(re("ComponentProvider","Removing Datastore"),Pl.delete(t),r.terminate())})(this),Promise.resolve()}}function _T(n,e,t,r={}){n=on(n,aa);const i=gi(e),a=n._getSettings(),c={...a,emulatorOptions:n._getEmulatorOptions()},p=`${e}:${t}`;i&&($l(`https://${p}`),Hl("Firestore",!0)),a.host!==td&&a.host!==p&&ci("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const _={...a,host:p,ssl:i,emulatorOptions:r};if(!kr(_,c)&&(n._setSettings(_),r.mockUserToken)){let v,I;if(typeof r.mockUserToken=="string")v=r.mockUserToken,I=dt.MOCK_USER;else{v=xd(r.mockUserToken,n._app?.options.projectId);const P=r.mockUserToken.sub||r.mockUserToken.user_id;if(!P)throw new ee(H.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");I=new dt(P)}n._authCredentials=new Iy(new Uh(v,I))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Fr(this.firestore,e,this._query)}}class ze{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new er(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ze(this.firestore,e,this._key)}toJSON(){return{type:ze._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,r){if(Ns(t,ze._jsonSchema))return new ze(e,r||null,new ae(xe.fromString(t.referencePath)))}}ze._jsonSchemaVersion="firestore/documentReference/1.0",ze._jsonSchema={type:Xe("string",ze._jsonSchemaVersion),referencePath:Xe("string")};class er extends Fr{constructor(e,t,r){super(e,t,Pu(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ze(this.firestore,null,new ae(e))}withConverter(e){return new er(this.firestore,e,this._path)}}function KT(n,e,...t){if(n=Ye(n),jh("collection","path",e),n instanceof aa){const r=xe.fromString(e,...t);return Hc(r),new er(n,null,r)}{if(!(n instanceof ze||n instanceof er))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return Hc(r),new er(n.firestore,null,r)}}function QT(n,e,...t){if(n=Ye(n),arguments.length===1&&(e=Iu.newId()),jh("doc","path",e),n instanceof aa){const r=xe.fromString(e,...t);return $c(r),new ze(n,null,new ae(r))}{if(!(n instanceof ze||n instanceof er))throw new ee(H.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(xe.fromString(e,...t));return $c(r),new ze(n.firestore,n instanceof er?n.converter:null,new ae(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nl="AsyncQueue";class xl{constructor(e=Promise.resolve()){this.Xu=[],this.ec=!1,this.tc=[],this.nc=null,this.rc=!1,this.sc=!1,this.oc=[],this.M_=new Nf(this,"async_queue_retry"),this._c=()=>{const r=Ma();r&&re(Nl,"Visibility state changed to "+r.visibilityState),this.M_.w_()},this.ac=e;const t=Ma();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this._c)}get isShuttingDown(){return this.ec}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.uc(),this.cc(e)}enterRestrictedMode(e){if(!this.ec){this.ec=!0,this.sc=e||!1;const t=Ma();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this._c)}}enqueue(e){if(this.uc(),this.ec)return new Promise((()=>{}));const t=new Tn;return this.cc((()=>this.ec&&this.sc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Xu.push(e),this.lc())))}async lc(){if(this.Xu.length!==0){try{await this.Xu[0](),this.Xu.shift(),this.M_.reset()}catch(e){if(!Ti(e))throw e;re(Nl,"Operation failed with retryable error: "+e)}this.Xu.length>0&&this.M_.p_((()=>this.lc()))}}cc(e){const t=this.ac.then((()=>(this.rc=!0,e().catch((r=>{throw this.nc=r,this.rc=!1,In("INTERNAL UNHANDLED ERROR: ",Vl(r)),r})).then((r=>(this.rc=!1,r))))));return this.ac=t,t}enqueueAfterDelay(e,t,r){this.uc(),this.oc.indexOf(e)>-1&&(t=0);const i=$u.createAndSchedule(this,e,t,r,(a=>this.hc(a)));return this.tc.push(i),i}uc(){this.nc&&le(47125,{Pc:Vl(this.nc)})}verifyOperationInProgress(){}async Tc(){let e;do e=this.ac,await e;while(e!==this.ac)}Ic(e){for(const t of this.tc)if(t.timerId===e)return!0;return!1}Ec(e){return this.Tc().then((()=>{this.tc.sort(((t,r)=>t.targetTimeMs-r.targetTimeMs));for(const t of this.tc)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Tc()}))}dc(e){this.oc.push(e)}hc(e){const t=this.tc.indexOf(e);this.tc.splice(t,1)}}function Vl(n){let e=n.message||"";return n.stack&&(e=n.stack.includes(n.message)?n.stack:n.message+`
`+n.stack),e}class Ii extends aa{constructor(e,t,r,i){super(e,t,r,i),this.type="firestore",this._queue=new xl,this._persistenceKey=i?.name||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new xl(e),this._firestoreClient=void 0,await e}}}function vT(n,e){const t=typeof n=="object"?n:Kl(),r=typeof n=="string"?n:Lo,i=du(t,"firestore").getImmediate({identifier:r});if(!i._initialized){const a=Dd("firestore");a&&_T(i,...a)}return i}function Ku(n){if(n._terminated)throw new ee(H.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||TT(n),n._firestoreClient}function TT(n){const e=n._freezeSettings(),t=(function(i,a,c,p){return new $y(i,a,c,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,ed(p.experimentalLongPollingOptions),p.useFetchStreams,p.isUsingEmulator)})(n._databaseId,n._app?.options.appId||"",n._persistenceKey,e);n._componentsProvider||e.localCache?._offlineComponentProvider&&e.localCache?._onlineComponentProvider&&(n._componentsProvider={_offline:e.localCache._offlineComponentProvider,_online:e.localCache._onlineComponentProvider}),n._firestoreClient=new dT(n._authCredentials,n._appCheckCredentials,n._queue,t,n._componentsProvider&&(function(i){const a=i?._online.build();return{_offline:i?._offline.build(a),_online:a}})(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Dt(ut.fromBase64String(e))}catch(t){throw new ee(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Dt(ut.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:Dt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Ns(e,Dt._jsonSchema))return Dt.fromBase64String(e.bytes)}}Dt._jsonSchemaVersion="firestore/bytes/1.0",Dt._jsonSchema={type:Xe("string",Dt._jsonSchemaVersion),bytes:Xe("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new ee(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new at(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new ee(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new ee(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return be(this._lat,e._lat)||be(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:rn._jsonSchemaVersion}}static fromJSON(e){if(Ns(e,rn._jsonSchema))return new rn(e.latitude,e.longitude)}}rn._jsonSchemaVersion="firestore/geoPoint/1.0",rn._jsonSchema={type:Xe("string",rn._jsonSchemaVersion),latitude:Xe("number"),longitude:Xe("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn{constructor(e){this._values=(e||[]).map((t=>t))}toArray(){return this._values.map((e=>e))}isEqual(e){return(function(r,i){if(r.length!==i.length)return!1;for(let a=0;a<r.length;++a)if(r[a]!==i[a])return!1;return!0})(this._values,e._values)}toJSON(){return{type:sn._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Ns(e,sn._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every((t=>typeof t=="number")))return new sn(e.vectorValues);throw new ee(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}sn._jsonSchemaVersion="firestore/vectorValue/1.0",sn._jsonSchema={type:Xe("string",sn._jsonSchemaVersion),vectorValues:Xe("object")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ET=/^__.*__$/;class wT{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new cr(e,this.data,this.fieldMask,t,this.fieldTransforms):new xs(e,this.data,t,this.fieldTransforms)}}class nd{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new cr(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function rd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw le(40011,{Ac:n})}}class Qu{constructor(e,t,r,i,a,c){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=i,a===void 0&&this.Rc(),this.fieldTransforms=a||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Ac(){return this.settings.Ac}Vc(e){return new Qu({...this.settings,...e},this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}mc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.gc(e),r}yc(e){const t=this.path?.child(e),r=this.Vc({path:t,fc:!1});return r.Rc(),r}wc(e){return this.Vc({path:void 0,fc:!0})}Sc(e){return Ho(e,this.settings.methodName,this.settings.bc||!1,this.path,this.settings.Dc)}contains(e){return this.fieldMask.find((t=>e.isPrefixOf(t)))!==void 0||this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))!==void 0}Rc(){if(this.path)for(let e=0;e<this.path.length;e++)this.gc(this.path.get(e))}gc(e){if(e.length===0)throw this.Sc("Document fields must not be empty");if(rd(this.Ac)&&ET.test(e))throw this.Sc('Document fields cannot begin and end with "__"')}}class IT{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||ia(e)}Cc(e,t,r,i=!1){return new Qu({Ac:e,methodName:t,Dc:r,path:at.emptyPath(),fc:!1,bc:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Xu(n){const e=n._freezeSettings(),t=ia(n._databaseId);return new IT(n._databaseId,!!e.ignoreUndefinedProperties,t)}function AT(n,e,t,r,i,a={}){const c=n.Cc(a.merge||a.mergeFields?2:0,e,t,i);Ju("Data must be an object, but it was:",c,r);const p=id(r,c);let _,v;if(a.merge)_=new At(c.fieldMask),v=c.fieldTransforms;else if(a.mergeFields){const I=[];for(const P of a.mergeFields){const V=lu(e,P,t);if(!c.contains(V))throw new ee(H.INVALID_ARGUMENT,`Field '${V}' is specified in your field mask but missing from your input data.`);od(I,V)||I.push(V)}_=new At(I),v=c.fieldTransforms.filter((P=>_.covers(P.field)))}else _=null,v=c.fieldTransforms;return new wT(new Tt(p),_,v)}class la extends ca{_toFieldTransform(e){if(e.Ac!==2)throw e.Ac===1?e.Sc(`${this._methodName}() can only appear at the top level of your update data`):e.Sc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof la}}class Yu extends ca{_toFieldTransform(e){return new g_(e.path,new Is)}isEqual(e){return e instanceof Yu}}function bT(n,e,t,r){const i=n.Cc(1,e,t);Ju("Data must be an object, but it was:",i,r);const a=[],c=Tt.empty();ur(r,((_,v)=>{const I=Zu(e,_,t);v=Ye(v);const P=i.yc(I);if(v instanceof la)a.push(I);else{const V=Ms(v,P);V!=null&&(a.push(I),c.set(I,V))}}));const p=new At(a);return new nd(c,p,i.fieldTransforms)}function ST(n,e,t,r,i,a){const c=n.Cc(1,e,t),p=[lu(e,r,t)],_=[i];if(a.length%2!=0)throw new ee(H.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let V=0;V<a.length;V+=2)p.push(lu(e,a[V])),_.push(a[V+1]);const v=[],I=Tt.empty();for(let V=p.length-1;V>=0;--V)if(!od(v,p[V])){const G=p[V];let W=_[V];W=Ye(W);const Q=c.yc(G);if(W instanceof la)v.push(G);else{const Y=Ms(W,Q);Y!=null&&(v.push(G),I.set(G,Y))}}const P=new At(v);return new nd(I,P,c.fieldTransforms)}function CT(n,e,t,r=!1){return Ms(t,n.Cc(r?4:3,e))}function Ms(n,e){if(sd(n=Ye(n)))return Ju("Unsupported field value:",e,n),id(n,e);if(n instanceof ca)return(function(r,i){if(!rd(i.Ac))throw i.Sc(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.Sc(`${r._methodName}() is not currently supported inside arrays`);const a=r._toFieldTransform(i);a&&i.fieldTransforms.push(a)})(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.fc&&e.Ac!==4)throw e.Sc("Nested arrays are not supported");return(function(r,i){const a=[];let c=0;for(const p of r){let _=Ms(p,i.wc(c));_==null&&(_={nullValue:"NULL_VALUE"}),a.push(_),c++}return{arrayValue:{values:a}}})(n,e)}return(function(r,i){if((r=Ye(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return f_(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const a=Oe.fromDate(r);return{timestampValue:jo(i.serializer,a)}}if(r instanceof Oe){const a=new Oe(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:jo(i.serializer,a)}}if(r instanceof rn)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof Dt)return{bytesValue:Ef(i.serializer,r._byteString)};if(r instanceof ze){const a=i.databaseId,c=r.firestore._databaseId;if(!c.isEqual(a))throw i.Sc(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${a.projectId}/${a.database}`);return{referenceValue:Vu(r.firestore._databaseId||i.databaseId,r._key.path)}}if(r instanceof sn)return(function(c,p){return{mapValue:{fields:{[Qh]:{stringValue:Xh},[Mo]:{arrayValue:{values:c.toArray().map((v=>{if(typeof v!="number")throw p.Sc("VectorValues must only contain numeric values.");return ku(p.serializer,v)}))}}}}}})(r,i);throw i.Sc(`Unsupported field value: ${Qo(r)}`)})(n,e)}function id(n,e){const t={};return $h(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):ur(n,((r,i)=>{const a=Ms(i,e.mc(r));a!=null&&(t[r]=a)})),{mapValue:{fields:t}}}function sd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Oe||n instanceof rn||n instanceof Dt||n instanceof ze||n instanceof ca||n instanceof sn)}function Ju(n,e,t){if(!sd(t)||!qh(t)){const r=Qo(t);throw r==="an object"?e.Sc(n+" a custom object"):e.Sc(n+" "+r)}}function lu(n,e,t){if((e=Ye(e))instanceof ua)return e._internalPath;if(typeof e=="string")return Zu(n,e);throw Ho("Field path arguments must be of type string or ",n,!1,void 0,t)}const RT=new RegExp("[~\\*/\\[\\]]");function Zu(n,e,t){if(e.search(RT)>=0)throw Ho(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new ua(...e.split("."))._internalPath}catch{throw Ho(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ho(n,e,t,r,i){const a=r&&!r.isEmpty(),c=i!==void 0;let p=`Function ${e}() called with invalid data`;t&&(p+=" (via `toFirestore()`)"),p+=". ";let _="";return(a||c)&&(_+=" (found",a&&(_+=` in field ${r}`),c&&(_+=` in document ${i}`),_+=")"),new ee(H.INVALID_ARGUMENT,p+n+_)}function od(n,e){return n.some((t=>t.isEqual(e)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ad{constructor(e,t,r,i,a){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=i,this._converter=a}get id(){return this._key.path.lastSegment()}get ref(){return new ze(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new PT(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(ha("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class PT extends ad{data(){return super.data()}}function ha(n,e){return typeof e=="string"?Zu(n,e):e instanceof ua?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kT(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new ee(H.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class ec{}class ud extends ec{}function XT(n,e,...t){let r=[];e instanceof ec&&r.push(e),r=r.concat(t),(function(a){const c=a.filter((_=>_ instanceof tc)).length,p=a.filter((_=>_ instanceof fa)).length;if(c>1||c>0&&p>0)throw new ee(H.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")})(r);for(const i of r)n=i._apply(n);return n}class fa extends ud{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new fa(e,t,r)}_apply(e){const t=this._parse(e);return cd(e._query,t),new Fr(e.firestore,e.converter,Za(e._query,t))}_parse(e){const t=Xu(e.firestore);return(function(a,c,p,_,v,I,P){let V;if(v.isKeyField()){if(I==="array-contains"||I==="array-contains-any")throw new ee(H.INVALID_ARGUMENT,`Invalid Query. You can't perform '${I}' queries on documentId().`);if(I==="in"||I==="not-in"){Ll(P,I);const W=[];for(const Q of P)W.push(Ol(_,a,Q));V={arrayValue:{values:W}}}else V=Ol(_,a,P)}else I!=="in"&&I!=="not-in"&&I!=="array-contains-any"||Ll(P,I),V=CT(p,c,P,I==="in"||I==="not-in");return Qe.create(v,I,V)})(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function YT(n,e,t){const r=e,i=ha("where",n);return fa._create(i,r,t)}class tc extends ec{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new tc(e,t)}_parse(e){const t=this._queryConstraints.map((r=>r._parse(e))).filter((r=>r.getFilters().length>0));return t.length===1?t[0]:Bt.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:((function(i,a){let c=i;const p=a.getFlattenedFilters();for(const _ of p)cd(c,_),c=Za(c,_)})(e._query,t),new Fr(e.firestore,e.converter,Za(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class nc extends ud{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new nc(e,t)}_apply(e){const t=(function(i,a,c){if(i.startAt!==null)throw new ee(H.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(i.endAt!==null)throw new ee(H.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new ws(a,c)})(e._query,this._field,this._direction);return new Fr(e.firestore,e.converter,(function(i,a){const c=i.explicitOrderBy.concat([a]);return new Ei(i.path,i.collectionGroup,c,i.filters.slice(),i.limit,i.limitType,i.startAt,i.endAt)})(e._query,t))}}function JT(n,e="asc"){const t=e,r=ha("orderBy",n);return nc._create(r,t)}function Ol(n,e,t){if(typeof(t=Ye(t))=="string"){if(t==="")throw new ee(H.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!sf(e)&&t.indexOf("/")!==-1)throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(xe.fromString(t));if(!ae.isDocumentKey(r))throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Jc(n,new ae(r))}if(t instanceof ze)return Jc(n,t._key);throw new ee(H.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Qo(t)}.`)}function Ll(n,e){if(!Array.isArray(n)||n.length===0)throw new ee(H.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function cd(n,e){const t=(function(i,a){for(const c of i)for(const p of c.getFlattenedFilters())if(a.indexOf(p.op)>=0)return p.op;return null})(n.filters,(function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}})(e.op));if(t!==null)throw t===e.op?new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new ee(H.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}class DT{convertValue(e,t="none"){switch(ir(e)){case 0:return null;case 1:return e.booleanValue;case 2:return We(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(rr(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw le(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const r={};return ur(e,((i,a)=>{r[i]=this.convertValue(a,t)})),r}convertVectorValue(e){const t=e.fields?.[Mo].arrayValue?.values?.map((r=>We(r.doubleValue)));return new sn(t)}convertGeoPoint(e){return new rn(We(e.latitude),We(e.longitude))}convertArray(e,t){return(e.values||[]).map((r=>this.convertValue(r,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Jo(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(vs(e));default:return null}}convertTimestamp(e){const t=nr(e);return new Oe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=xe.fromString(e);Re(Cf(r),9688,{name:e});const i=new Ts(r.get(1),r.get(3)),a=new ae(r.popFirst(5));return i.isEqual(t)||In(`Document ${a} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NT(n,e,t){let r;return r=n?n.toFirestore(e):e,r}class cs{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Pr extends ad{constructor(e,t,r,i,a,c){super(e,t,r,i,c),this._firestore=e,this._firestoreImpl=e,this.metadata=a}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new bo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(ha("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=Pr._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?t:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t)}}Pr._jsonSchemaVersion="firestore/documentSnapshot/1.0",Pr._jsonSchema={type:Xe("string",Pr._jsonSchemaVersion),bundleSource:Xe("string","DocumentSnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class bo extends Pr{data(e={}){return super.data(e)}}class oi{constructor(e,t,r,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new cs(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach((r=>{e.call(t,new bo(this._firestore,this._userDataWriter,r.key,r,new cs(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new ee(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=(function(i,a){if(i._snapshot.oldDocs.isEmpty()){let c=0;return i._snapshot.docChanges.map((p=>{const _=new bo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new cs(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);return p.doc,{type:"added",doc:_,oldIndex:-1,newIndex:c++}}))}{let c=i._snapshot.oldDocs;return i._snapshot.docChanges.filter((p=>a||p.type!==3)).map((p=>{const _=new bo(i._firestore,i._userDataWriter,p.doc.key,p.doc,new cs(i._snapshot.mutatedKeys.has(p.doc.key),i._snapshot.fromCache),i.query.converter);let v=-1,I=-1;return p.type!==0&&(v=c.indexOf(p.doc.key),c=c.delete(p.doc.key)),p.type!==1&&(c=c.add(p.doc),I=c.indexOf(p.doc.key)),{type:xT(p.type),doc:_,oldIndex:v,newIndex:I}}))}})(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new ee(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=oi._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=Iu.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],r=[],i=[];return this.docs.forEach((a=>{a._document!==null&&(t.push(a._document),r.push(this._userDataWriter.convertObjectMap(a._document.data.value.mapValue.fields,"previous")),i.push(a.ref.path))})),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function xT(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return le(61501,{type:n})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZT(n){n=on(n,ze);const e=on(n.firestore,Ii);return mT(Ku(e),n._key).then((t=>VT(e,n,t)))}oi._jsonSchemaVersion="firestore/querySnapshot/1.0",oi._jsonSchema={type:Xe("string",oi._jsonSchemaVersion),bundleSource:Xe("string","QuerySnapshot"),bundleName:Xe("string"),bundle:Xe("string")};class ld extends DT{constructor(e){super(),this.firestore=e}convertBytes(e){return new Dt(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new ze(this.firestore,null,t)}}function eE(n){n=on(n,Fr);const e=on(n.firestore,Ii),t=Ku(e),r=new ld(e);return kT(n._query),yT(t,n._query).then((i=>new oi(e,r,n,i)))}function tE(n,e,t){n=on(n,ze);const r=on(n.firestore,Ii),i=NT(n.converter,e);return rc(r,[AT(Xu(r),"setDoc",n._key,i,n.converter!==null,t).toMutation(n._key,jt.none())])}function nE(n,e,t,...r){n=on(n,ze);const i=on(n.firestore,Ii),a=Xu(i);let c;return c=typeof(e=Ye(e))=="string"||e instanceof ua?ST(a,"updateDoc",n._key,e,t,r):bT(a,"updateDoc",n._key,e),rc(i,[c.toMutation(n._key,jt.exists(!0))])}function rE(n){return rc(on(n.firestore,Ii),[new Du(n._key,jt.none())])}function rc(n,e){return(function(r,i){const a=new Tn;return r.asyncQueue.enqueueAndForget((async()=>iT(await gT(r),i,a))),a.promise})(Ku(n),e)}function VT(n,e,t){const r=t.docs.get(e._key),i=new ld(n);return new Pr(n,i,e._key,r,new cs(t.hasPendingWrites,t.fromCache),e.converter)}function iE(){return new Yu("serverTimestamp")}(function(e,t=!0){(function(i){_i=i})(mi),ai(new Dr("firestore",((r,{instanceIdentifier:i,options:a})=>{const c=r.getProvider("app").getImmediate(),p=new Ii(new Ay(r.getProvider("auth-internal")),new Cy(c,r.getProvider("app-check-internal")),(function(v,I){if(!Object.prototype.hasOwnProperty.apply(v.options,["projectId"]))throw new ee(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ts(v.options.projectId,I)})(c,i),c);return a={useFetchStreams:t,...a},p._setSettings(a),p}),"PUBLIC").setMultipleInstances(!0)),Jn(Uc,jc,e),Jn(Uc,jc,"esm2020")})();const OT={apiKey:"AIzaSyDVaTIJTJhVZaeTBEXiPIOVSWkaI4TLAvA",authDomain:"registrohawka.firebaseapp.com",projectId:"registrohawka",storageBucket:"registrohawka.firebasestorage.app",messagingSenderId:"447378008645",appId:"1:447378008645:web:89e0daa6e2501bdcce512c"},hd=Gl(OT),sE=Ty(hd),oE=vT(hd);(()=>{const n=[["Cielo","#0EBEFF"],["Dulce","#FF5C69"],["Paz","#29C72E"],["Mora","#7000FF"],["Futuro","#21273B"]],e=r=>{const[i,a]=Ie(r).data("tema").split("|");Ie("html").attr("data-theme",i),Ie('meta[name="theme-color"]').length?Ie('meta[name="theme-color"]').attr("content",a):Ie("<meta>",{name:"theme-color",content:a}).appendTo("head"),LT("wiTema",`${i}|${a}`,720),Ie(".mtha").removeClass("mtha"),Ie(r).addClass("mtha")},t=()=>{Ie(".witemas").html(n.map(([a,c])=>`<div class="tema" data-tema="${a}|${c}" style="background:${c}"></div>`).join(""));const r=MT("wiTema"),i=Ie(`[data-tema="${r}"]`)[0]||Ie(".mtha")[0]||Ie("[data-tema]").first()[0];i&&e(i),Ie(document).off("click.witema").on("click.witema","[data-tema]",a=>e(a.currentTarget))};return Ie(".witemas").length?t():new MutationObserver(r=>r.some(({addedNodes:i})=>[...i].some(a=>a.querySelector?.(".witemas")))&&(t(),!0)).observe(document.body,{childList:!0,subtree:!0}),{set:e}})();const aE=(()=>{const n=()=>{const e=new Date;Ie(".wty").text(e.getFullYear()),Ie(".wtu").text(e.toLocaleString()),Ie(document).off("click.infoo",".abw,.abwok").on("click.infoo",".abw,.abwok",function(){const t=this.id||"";navigator.clipboard&&t&&navigator.clipboard.writeText(t).catch(()=>{}),Ie(".abwc").toggleClass("dpn")})};return Ie(".wty,.wtu,.abw,.abwok").length?n():new MutationObserver(e=>e.some(({addedNodes:t})=>[...t].some(r=>r.querySelector?.(".wty,.wtu,.abw,.abwok")))&&(n(),!0)).observe(document.body,{childList:!0,subtree:!0}),n})(),uE=n=>n.length<=10?n:n.substring(0,10)+"...",cE=n=>{Ie("#loading-style").length||Ie("head").append('<style id="loading-style">.loading{height:1vh;background:linear-gradient(to right,#ffd105,#1e3a8a,#ffd105);background-size:200% 100%;animation:l 1.5s infinite;border-radius:3px;width:100%;position:fixed;top:0;left:0;z-index:9999}@keyframes l{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}</style>'),Ie(".loading").length||Ie("body").append('<div class="loading" style="display:none"></div>'),Ie(".loading").toggle(!!n)},lE=n=>{const e=n==="smiletop"?"smiletop.html":"smile.html";window.location.href=new URL(e,window.location.href).toString()};function hE(n,e="error",t=3e3){const r={success:"fa-check-circle",error:"fa-times-circle",warning:"fa-exclamation-triangle",info:"fa-info-circle"},i={success:"#2E7D32",error:"#D32F2F",warning:"#F9A825",info:"#0288D1"};Ie("#notificationsContainer").length||Ie("body").append('<div id="notificationsContainer" style="position:fixed;top:1rem;right:1rem;z-index:9999;display:flex;flex-direction:column;gap:.5rem;"></div>');const a=Ie(`
    <div class="notification" style="background:#fff;border-left:4px solid ${i[e]};box-shadow:0 4px 12px rgba(0,0,0,.1);border-radius:8px;padding:1rem;display:flex;align-items:center;gap:.5rem;opacity:0;transform:translateX(20px);transition:all .3s ease;">
      <i class="fas ${r[e]}" style="color:${i[e]};"></i>
      <span style="flex:1">${n}</span>
      <button style="background:none;border:none;font-size:1.2rem;cursor:pointer;">&times;</button>
    </div>
  `);Ie("#notificationsContainer").append(a),requestAnimationFrame(()=>a.css({opacity:1,transform:"translateX(0)"})),a.find("button").on("click",()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)}),setTimeout(()=>{a.css({opacity:0,transform:"translateX(20px)"}),setTimeout(()=>a.remove(),300)},t)}const fE=n=>{const[e,t,r]=n.split("-").map(Number);return new Date(e,t-1,r)},dE=(n,e="success")=>{Ie(".alert-box").remove();const t={error:{bg:"#FFE8E6",txt:"#D32F2F",border:"#FFCDD2",icon:"fa-circle-exclamation"},success:{bg:"#E8F5E9",txt:"#2E7D32",border:"#C8E6C9",icon:"fa-circle-check"}},{bg:r,txt:i,border:a,icon:c}=t[e]||t.error,p=Ie(`
        <div class="alert-box" style="
            position: fixed;
            top: 20px;
            left: 50%;
            transform: translateX(-50%);
            padding: 15px 20px;
            border-radius: 8px;
            background: ${r};
            color: ${i};
            border-left: 4px solid ${a};
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            z-index: 1000;
            display: flex;
            align-items: center;
            gap: 10px;
            min-width: 300px;
            max-width: 90%;
            
        ">
            <i class="fas ${c}"></i>
            <span>${n}</span>
        </div>
    `).appendTo("body").hide().fadeIn(300);setTimeout(()=>p.fadeOut(300,()=>p.remove()),3e3)},pE=n=>n.charAt(0).toUpperCase()+n.slice(1);function LT(n,e,t){try{localStorage.setItem(n,JSON.stringify({value:e,expiry:Date.now()+t*36e5,type:typeof e,isArray:Array.isArray(e)}))}catch(r){console.error("Error savels",r)}}function MT(n){try{const e=localStorage.getItem(n);if(!e)return null;const t=JSON.parse(e);return!t||Date.now()>t.expiry?(localStorage.removeItem(n),null):t.value}catch(e){return console.error("Error getls:",e),FT(n),null}}function FT(...n){n.forEach(e=>{e&&typeof e=="string"&&localStorage.removeItem(e)})}function UT(n,e,t="top",r=1800){const i={success:"--success",error:"--error",warning:"--warning",info:"--info"},a=i[t]?t:null,c=a?"top":t;if(Ie("#witip-styles").length||Ie('<style id="witip-styles">.witip{position:fixed;background:var(--mco);color:var(--txa);z-index:10000;padding:8px 12px;border-radius:4px;font-size:.85rem;max-width:250px;box-shadow:0 2px 8px rgba(0,0,0,.2);opacity:0;transition:opacity .2s;pointer-events:none}.witip::after{content:"";position:absolute;border:6px solid transparent}.witip.show{opacity:1}.witip.top::after{top:100%;left:50%;margin-left:-6px;border-top-color:inherit}.witip.bottom::after{bottom:100%;left:50%;margin-left:-6px;border-bottom-color:inherit}.witip.left::after{left:100%;top:50%;margin-top:-6px;border-left-color:inherit}.witip.right::after{right:100%;top:50%;margin-top:-6px;border-right-color:inherit}.witip.success{background:var(--success);color:#fff}.witip.error{background:var(--error);color:#fff}.witip.warning{background:var(--warning);color:#000}.witip.info{background:var(--info);color:#fff}</style>').appendTo("head"),typeof n=="string"&&(n.includes(",")||n.match(/^[.#a-z]/i)))return Ie(n).each((Ze,qe)=>UT(qe,e,t,r)),Ie(n);const p=Ie(n);if(!p.length)return;clearTimeout(p.data("witip-timer")),Ie(".witip").remove();const _=p.attr("id")||p.attr("id",`wtip-${Date.now()}-${Math.floor(Math.random()*1e3)}`).attr("id"),v=Ie("<div>",{class:`witip ${c} ${a||""}`,"data-for":_,html:e,css:{"border-color":a?`var(${i[a]})`:"var(--mco)"}});a&&v.css("background-color",`var(${i[a]})`),Ie("body").append(v);const{left:I,top:P,right:V,bottom:G,width:W,height:Q}=p[0].getBoundingClientRect(),Y=v.outerWidth(),J=v.outerHeight(),_e={top:{x:I+W/2-Y/2,y:P-J-8},bottom:{x:I+W/2-Y/2,y:G+8},left:{x:I-Y-8,y:P+Q/2-J/2},right:{x:V+8,y:P+Q/2-J/2}};let{x:ve,y:De}=_e[c];return ve=Math.max(8,Math.min(ve,window.innerWidth-Y-8)),De=Math.max(8,Math.min(De,window.innerHeight-J-8)),v.css({left:ve,top:De}),p.data("witip-timer",setTimeout(()=>{v.addClass("show"),r>0&&setTimeout(()=>{v.removeClass("show"),setTimeout(()=>v.remove(),200)},r)},10)),p}const gE=n=>{const e=new Date,t=new Date(n);if(t>e)return-1;let r=e.getFullYear()-t.getFullYear();const i=e.getMonth(),a=e.getDate(),c=t.getMonth(),p=t.getDate();return(i<c||i===c&&a<p)&&r--,r};export{Ie as $,JT as A,uE as B,pE as C,FT as D,nE as E,dE as M,hE as N,oE as a,eE as b,KT as c,QT as d,YT as e,qT as f,ZT as g,sE as h,tE as i,iE as j,fE as k,LT as l,lE as m,cE as n,BT as o,jT as p,XT as q,gE as r,$T as s,WT as t,HT as u,rE as v,UT as w,MT as x,zT as y,aE as z};
