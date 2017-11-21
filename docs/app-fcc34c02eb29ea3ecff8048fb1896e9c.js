(function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e():"function"==typeof define&&define.amd?define(e):e()})(0,function(){"use strict"
function t(t="unreachable"){return new Error(t)}function e(t,e){if(!t)throw new Error(e||"assertion failure")}function s(t){for(let e=1;e<arguments.length;e++){let s=arguments[e]
if(null===s||"object"!=typeof s)continue
let i=Z(s)
for(let e=0;e<i.length;e++){let r=i[e]
t[r]=s[r]}}return t}function i(t){let e=new Array(t)
for(let s=0;s<t;s++)e[s]=null
return e}function r(t){return t._guid=++tt}function n(t){return t._guid||r(t)}function a(){return Object.create(null)}function l(t){let e=ot.length
ot.push(t=>t.value()),ht.push((t,e)=>t.validate(e)),t.id=e}function o({tag:t}){return t===ct}function h(t){return t===ct}function u(t){let e=[]
for(let s=0,i=t.length;s<i;s++){let i=t[s].tag
if(i===pt)return pt
i!==ct&&e.push(i)}return d(e)}function c(t){let e=[],s=t.head()
for(;null!==s;){let i=s.tag
if(i===pt)return pt
i!==ct&&e.push(i),s=t.nextNode(s)}return d(e)}function p(t){let e=[]
for(let s=0,i=t.length;s<i;s++){let i=t[s]
if(i===pt)return pt
i!==ct&&e.push(i)}return d(e)}function d(t){switch(t.length){case 0:return ct
case 1:return t[0]
case 2:return ft.create(t[0],t[1])
default:return bt.create(t)}}function m(...t){let e=t[0],s=t[1],i=t[2]
return"string"==typeof e?function(e,s,i){return g(e,s,i,t)}:i?g(e,s,i,[]):void function(t,e){let s,i=Symbol(e)
f(t).trackedProperties[e]=!0,void 0!==t[e]&&(s=t[e])
Object.defineProperty(t,e,{configurable:!0,get(){return this[i]},set(t){f(this).dirtyableTagFor(e).inner.dirty(),this[i]=t,Lt()}})}(e,s)}function g(t,e,s,i){let r=f(t)
return r.trackedProperties[e]=!0,r.trackedPropertyDependencies[e]=i||[],{enumerable:!0,configurable:!1,get:s.get,set:function(){f(this).dirtyableTagFor(e).inner.dirty(),s.set.apply(this,arguments),Lt()}}}function f(t){let e=t[Ot]
return e&&function(t,e){return Tt.call(t,e)}(t,Ot)?e:t[Ot]=new Nt(e)}function b(t,e,s=function(t,e){throw Dt.for(t,e)}){if("object"==typeof t&&t){return f(t).tagFor(e)}return ct}function y(t){return t[It]}function v(t,e){t[It]=e}function k(t){return function(e){return Array.isArray(e)&&e[0]===t}}function S(t,e,s){let i=t[1],r=t[2],n=t[3]
s.expr(r),n?s.dynamicAttr(i,n,e):s.dynamicAttr(i,null,e)}function w(t){return!(!t||!t[Ae])}function _(t,e,s){let i=t.lookupComponent(e,s)
return i}function E(t){return x(t)?"":String(t)}function x(t){return null===t||void 0===t||"function"!=typeof t.toString}function C(t){return"object"==typeof t&&null!==t&&"function"==typeof t.toHTML}function A(t){return"object"==typeof t&&null!==t&&"number"==typeof t.nodeType}function N(t){return A(t)&&11===t.nodeType}function O(t){return"string"==typeof t}function T(t,e){return new We(t,e)}function L(t,e){let s=t.parentElement(),i=t.firstNode(),r=t.lastNode(),n=i
for(;n;){let t=n.nextSibling
if(s.insertBefore(n,e),n===r)return t
n=t}return null}function D(t){let e=t.parentElement(),s=t.firstNode(),i=t.lastNode(),r=s
for(;r;){let t=r.nextSibling
if(e.removeChild(r),r===i)return t
r=t}return null}function B(t,e,s){if(!t)return e
if(!function(t,e){let s=t.createElementNS(e,"svg")
try{s.insertAdjacentHTML("beforeend","<circle></circle>")}catch(t){}finally{return 1!==s.childNodes.length||s.firstChild.namespaceURI!==Ke}}(t,s))return e
let i=t.createElement("div")
return class extends e{insertHTMLBefore(t,e,r){return null===r||""===r?super.insertHTMLBefore(t,e,r):t.namespaceURI!==s?super.insertHTMLBefore(t,e,r):function(t,e,s,i){let r="<svg>"+s+"</svg>"
e.innerHTML=r
var n=function(t,e,s){let i=t.firstChild,r=null,n=i
for(;n;)r=n,n=n.nextSibling,e.insertBefore(r,s)
return[i,r]}(e.firstChild,t,i)
let a=n[0],l=n[1]
return new Xe(t,a,l)}(t,i,r,e)}}}function R(t,e){return t&&function(t){let e=t.createElement("div")
if(e.innerHTML="first",e.insertAdjacentHTML("beforeend","second"),2===e.childNodes.length)return!1
return!0}(t)?class extends e{constructor(t){super(t),this.uselessComment=t.createComment("")}insertHTMLBefore(t,e,s){if(null===s)return super.insertHTMLBefore(t,e,s)
let i=!1,r=e?e.previousSibling:t.lastChild
r&&r instanceof Text&&(i=!0,t.insertBefore(this.uselessComment,e))
let n=super.insertHTMLBefore(t,e,s)
return i&&t.removeChild(this.uselessComment),n}}:e}function F(t,e){return-1!==t.indexOf(e)}function M(t,e){return(null===t||F(ls,t))&&F(hs,e)}function P(t,e){return null!==t&&(F(os,t)&&F(us,e))}function I(t,e){return M(t,e)||P(t,e)}function j(t,e,s,i){let r=null
if(null===i||void 0===i)return i
if(C(i))return i.toHTML()
r=e?e.tagName.toUpperCase():null
let n=E(i)
if(M(r,s)){let e=t.protocolForURL(n)
if(F(as,e))return`unsafe:${n}`}return P(r,s)?`unsafe:${n}`:n}function z(t,e){let s,i
if(e in t)i=e,s="prop"
else{let r=e.toLowerCase()
r in t?(s="prop",i=r):(s="attr",i=e)}return"prop"!==s||"style"!==i.toLowerCase()&&!function(t,e){let s=cs[t.toUpperCase()]
return s&&s[e.toLowerCase()]||!1}(t.tagName,i)||(s="attr"),{normalized:i,type:s}}function V(t,e){let s=t.tagName
if(t.namespaceURI===qe)return H(s,e)
var i=z(t,e)
let r=i.type,n=i.normalized
return"attr"===r?H(s,n):function(t,e){if(I(t,e))return gs
if(function(t,e){return("INPUT"===t||"TEXTAREA"===t)&&"value"===e}(t,e))return bs
if(function(t,e){return"OPTION"===t&&"selected"===e}(t,e))return ys
return ms}(s,n)}function H(t,e){return I(t,e)?fs:ds}function U(t){return!1===t||void 0===t||null===t||void 0===t.toString?null:!0===t?"":"function"==typeof t?null:String(t)}function $(t,e,i){let r=t.block,n=t.referrer,a=r.hasEval,l=r.symbols,o=s({},e,{asPartial:i,referrer:n})
return new ce(r.statements,t,o,{referrer:n,hasEval:a,symbols:l})}function G(){}function Y(t,e,s){return t|e<<16|s<<30}function X(t,e){return t|e<<30}function W(t,e){let s=t.getSelf(),i=e.capture(),r=i.positional.at(0).value()
return"function"!=typeof r&&function(t,e){let s=function(t){let e,s,i=""
if(null===t||void 0===t)return i
"parent"in t&&"property"in t?(e=t.parent.value(),s=t.property):"_parentValue"in t&&"_propertyKey"in t&&(e=t._parentValue,s=t._propertyKey)
void 0!==s&&(i+=`('${s}' on ${function(t){let e=typeof t
if(null===t||void 0===t)return e
if("number"===e||"boolean"===e)return t.toString()
if(t.debugName)return t.debugName
try{return JSON.stringify(t)}catch(t){}return t.toString()}(e)}) `)
return i}(e)
throw new Error(`You tried to create an action with the {{action}} helper, but the first argument ${s}was ${typeof t} instead of a function.`)}(r,i.positional.at(0)),new ii(function(...t){let e=i.positional.value()
e.shift(),e.push(...t),r.apply(s&&s.value(),e)})}function K(t){return void 0!==t.rootName&&void 0!==t.collection&&void 0!==t.name&&void 0!==t.type}function q(t){let e=t.type,s=function(t){let e=[]
t.rootName&&e.push(t.rootName)
t.collection&&e.push(t.collection)
t.namespace&&e.push(t.namespace)
t.name&&e.push(t.name)
if(e.length>0){let s=e.join("/")
return K(t)&&(s="/"+s),s}}(t)
return s?e+":"+s:e}function J(t){let e={}
if(t.indexOf(":")>-1){var s=t.split(":")
let i=s[0],r=s[1]
e.type=i
let n
0===r.indexOf("/")?(n=r.substr(1).split("/"),e.rootName=n.shift(),e.collection=n.shift()):n=r.split("/"),n.length>0&&(e.name=n.pop(),n.length>0&&(e.namespace=n.join("/")))}else e.type=t
return e}function Q(t,e){if(!e)throw new Error("Assertion Failed: "+t)}const Z=Object.keys
let tt=0
class et{constructor(){this.dict=a()}add(t){return"string"==typeof t?this.dict[t]=t:this.dict[n(t)]=t,this}delete(t){"string"==typeof t?delete this.dict[t]:t._guid&&delete this.dict[t._guid]}}class st{constructor(){this.stack=[],this.current=null}get size(){return this.stack.length}push(t){this.current=t,this.stack.push(t)}pop(){let t=this.stack.pop(),e=this.stack.length
return this.current=0===e?null:this.stack[e-1],void 0===t?null:t}isEmpty(){return 0===this.stack.length}}class it{constructor(t){this.next=null,this.prev=null,this.value=t}}class rt{constructor(){this.clear()}head(){return this._head}tail(){return this._tail}clear(){this._head=this._tail=null}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t.next}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=e.next}insertBefore(t,e=null){return null===e?this.append(t):(e.prev?e.prev.next=t:this._head=t,t.prev=e.prev,t.next=e,e.prev=t,t)}append(t){let e=this._tail
return e?(e.next=t,t.prev=e,t.next=null):this._head=t,this._tail=t}remove(t){return t.prev?t.prev.next=t.next:this._head=t.next,t.next?t.next.prev=t.prev:this._tail=t.prev,t}}class nt{constructor(t,e){this._head=t,this._tail=e}forEachNode(t){let e=this._head
for(;null!==e;)t(e),e=this.nextNode(e)}head(){return this._head}tail(){return this._tail}toArray(){let t=[]
return this.forEachNode(e=>t.push(e)),t}nextNode(t){return t===this._tail?null:t.next}}new nt(null,null)
const at=Object.freeze([])
class lt{validate(t){return this.value()===t}}lt.id=0
const ot=[],ht=[]
class ut{constructor(t,e){this.type=t,this.inner=e}value(){return(0,ot[this.type])(this.inner)}validate(t){return(0,ht[this.type])(this.inner,t)}}ot.push(()=>0),ht.push((t,e)=>0===e)
const ct=new ut(0,null)
ot.push(()=>NaN),ht.push((t,e)=>NaN===e)
const pt=new ut(1,null)
ot.push(()=>dt),ht.push((t,e)=>e===dt)
new ut(2,null)
let dt=1
class mt extends lt{static create(t=dt){return new ut(this.id,new mt(t))}constructor(t=dt){super(),this.revision=t}value(){return this.revision}dirty(){this.revision=++dt}}l(mt)
class gt extends lt{constructor(){super(...arguments),this.lastChecked=null,this.lastValue=null}value(){let t=this.lastChecked,e=this.lastValue
return t!==dt&&(this.lastChecked=dt,this.lastValue=e=this.compute()),this.lastValue}invalidate(){this.lastChecked=null}}class ft extends gt{static create(t,e){return new ut(this.id,new ft(t,e))}constructor(t,e){super(),this.first=t,this.second=e}compute(){return Math.max(this.first.value(),this.second.value())}}l(ft)
class bt extends gt{static create(t){return new ut(this.id,new bt(t))}constructor(t){super(),this.tags=t}compute(){let t=this.tags,e=-1
for(let s=0;s<t.length;s++){let i=t[s].value()
e=Math.max(i,e)}return e}}l(bt)
class yt extends gt{static create(t){return new ut(this.id,new yt(t))}constructor(t){super(),this.tag=t,this.lastUpdated=1}compute(){return Math.max(this.lastUpdated,this.tag.value())}update(t){t!==this.tag&&(this.tag=t,this.lastUpdated=dt,this.invalidate())}}l(yt)
class vt{constructor(){this.lastRevision=null,this.lastValue=null}value(){let t=this.tag,e=this.lastRevision,s=this.lastValue
return null!==e&&t.validate(e)||(s=this.lastValue=this.compute(),this.lastRevision=t.value()),s}invalidate(){this.lastRevision=null}}class kt{constructor(t){this.lastValue=null,this.lastRevision=null,this.initialized=!1,this.tag=t.tag,this.reference=t}peek(){return this.initialized?this.lastValue:this.initialize()}revalidate(){if(!this.initialized)return this.initialize()
let t=this.reference,e=this.lastRevision,s=t.tag
if(s.validate(e))return St
this.lastRevision=s.value()
let i=this.lastValue,r=t.value()
return r===i?St:(this.lastValue=r,r)}initialize(){let t=this.reference,e=this.lastValue=t.value()
return this.lastRevision=t.tag.value(),this.initialized=!0,e}}const St="adb3b78e-3d22-4e4b-877a-6317c2c5c145"
class wt{constructor(t){this.inner=t,this.tag=ct}value(){return this.inner}}class _t extends it{constructor(t,e){super(t.valueReferenceFor(e)),this.retained=!1,this.seen=!1,this.key=e.key,this.iterable=t,this.memo=t.memoReferenceFor(e)}update(t){this.retained=!0,this.iterable.updateValueReference(this.value,t),this.iterable.updateMemoReference(this.memo,t)}shouldRemove(){return!this.retained}reset(){this.retained=!1,this.seen=!1}}class Et{constructor(t){this.iterator=null,this.map=a(),this.list=new rt,this.tag=t.tag,this.iterable=t}isEmpty(){return(this.iterator=this.iterable.iterate()).isEmpty()}iterate(){let t
return t=null===this.iterator?this.iterable.iterate():this.iterator,this.iterator=null,t}has(t){return!!this.map[t]}get(t){return this.map[t]}wasSeen(t){let e=this.map[t]
return void 0!==e&&e.seen}append(t){let e=this.map,s=this.list,i=this.iterable,r=e[t.key]=new _t(i,t)
return s.append(r),r}insertBefore(t,e){let s=this.map,i=this.list,r=this.iterable,n=s[t.key]=new _t(r,t)
return n.retained=!0,i.insertBefore(n,e),n}move(t,e){let s=this.list
t.retained=!0,s.remove(t),s.insertBefore(t,e)}remove(t){this.list.remove(t),delete this.map[t.key]}nextNode(t){return this.list.nextNode(t)}head(){return this.list.head()}}class xt{constructor(t){this.iterator=null
let e=new Et(t)
this.artifacts=e}next(){let t=this.artifacts,e=(this.iterator=this.iterator||t.iterate()).next()
return null===e?null:t.append(e)}}var Ct;(function(t){t[t.Append=0]="Append",t[t.Prune=1]="Prune",t[t.Done=2]="Done"})(Ct||(Ct={}))
class At{constructor({target:t,artifacts:e}){this.target=t,this.artifacts=e,this.iterator=e.iterate(),this.current=e.head()}sync(){let t=Ct.Append
for(;;)switch(t){case Ct.Append:t=this.nextAppend()
break
case Ct.Prune:t=this.nextPrune()
break
case Ct.Done:return void this.nextDone()}}advanceToKey(t){let e=this.current,s=this.artifacts,i=e
for(;null!==i&&i.key!==t;)i.seen=!0,i=s.nextNode(i)
null!==i&&(this.current=s.nextNode(i))}nextAppend(){let t=this.iterator,e=this.current,s=this.artifacts,i=t.next()
if(null===i)return this.startPrune()
let r=i.key
return null!==e&&e.key===r?this.nextRetain(i):s.has(r)?this.nextMove(i):this.nextInsert(i),Ct.Append}nextRetain(t){let e=this.artifacts,s=this.current;(s=s).update(t),this.current=e.nextNode(s),this.target.retain(t.key,s.value,s.memo)}nextMove(t){let e=this.current,s=this.artifacts,i=this.target,r=t.key,n=s.get(t.key)
n.update(t),s.wasSeen(t.key)?(s.move(n,e),i.move(n.key,n.value,n.memo,e?e.key:null)):this.advanceToKey(r)}nextInsert(t){let e=this.artifacts,s=this.target,i=this.current,r=e.insertBefore(t,i)
s.insert(r.key,r.value,r.memo,i?i.key:null)}startPrune(){return this.current=this.artifacts.head(),Ct.Prune}nextPrune(){let t=this.artifacts,e=this.target,s=this.current
if(null===s)return Ct.Done
let i=s
return this.current=t.nextNode(i),i.shouldRemove()?(t.remove(i),e.delete(i.key)):i.reset(),Ct.Prune}nextDone(){this.target.done()}}class Nt{constructor(t){this.tags=a(),this.computedPropertyTags=a(),this.trackedProperties=t?Object.create(t.trackedProperties):a(),this.trackedPropertyDependencies=t?Object.create(t.trackedPropertyDependencies):a()}tagFor(t){let e=this.tags[t]
if(e)return e
let s
return(s=this.trackedPropertyDependencies[t])?this.tags[t]=function(t,e,s){let i=[t.dirtyableTagFor(e)]
if(s&&s.length)for(let r=0;r<s.length;r++)i.push(t.tagFor(s[r]))
return p(i)}(this,t,s):this.tags[t]=mt.create()}dirtyableTagFor(t){let e
return this.trackedPropertyDependencies[t]?(e=this.computedPropertyTags[t])||(this.computedPropertyTags[t]=mt.create()):(e=this.tags[t])||(this.tags[t]=mt.create())}}let Ot=Symbol("ember-object"),Tt=Object.prototype.hasOwnProperty,Lt=function(){}
class Dt extends Error{constructor(t,e,s){super(s),this.target=t,this.key=e}static for(t,e){return new Dt(t,e,`The property '${e}' on ${t} was changed after being rendered. If you want to change a property used in a template after the component has rendered, mark the property as a tracked property with the @tracked decorator.`)}}class Bt{constructor(t){this.debugName=null,this.__args__=null,Object.assign(this,t)}get element(){let t=this.bounds
return e(t&&t.firstNode===t.lastNode,"The 'element' property can only be accessed on components that contain a single root element in their template. Try using 'bounds' instead to access the first and last nodes."),t.firstNode}get args(){return this.__args__}set args(t){this.__args__=t,f(this).dirtyableTagFor("args").inner.dirty()}static create(t){return new this(t)}didInsertElement(){}didUpdate(){}willDestroy(){}destroy(){this.willDestroy()}toString(){return`${this.debugName} component`}}const Rt={dynamicLayout:!1,dynamicTag:!0,prepareArgs:!1,createArgs:!0,attributeHook:!0,elementHook:!0}
class Ft{constructor(t,e,s,i){this.name=t,this.manager=e,this.ComponentClass=s,this.layout=i,this.state={name:t,capabilities:Rt,ComponentClass:s,layout:i}}toJSON(){return{GlimmerDebug:`<component-definition name="${this.name}">`}}}class Mt{constructor(t,e=null){this._registry=t,this._resolver=e,this._lookups={},this._factoryDefinitionLookups={}}factoryFor(t){let e=this._factoryDefinitionLookups[t]
if(e||(this._resolver&&(e=this._resolver.retrieve(t)),e||(e=this._registry.registration(t)),e&&(this._factoryDefinitionLookups[t]=e)),e)return this.buildFactory(t,e)}lookup(t){let e=!1!==this._registry.registeredOption(t,"singleton")
if(e&&this._lookups[t])return this._lookups[t]
let s=this.factoryFor(t)
if(!s)return
if(!1===this._registry.registeredOption(t,"instantiate"))return s.class
let i=s.create()
return e&&i&&(this._lookups[t]=i),i}defaultInjections(t){return{}}buildInjections(t){let e,s=this.defaultInjections(t),i=this._registry.registeredInjections(t)
for(let r=0;r<i.length;r++)s[(e=i[r]).property]=this.lookup(e.source)
return s}buildFactory(t,e){let s=this.buildInjections(t)
return{class:e,create(t){let i=Object.assign({},s,t)
return e.create(i)}}}}class Pt{constructor(t){this._registrations={},this._registeredOptions={},this._registeredInjections={},t&&t.fallback&&(this._fallback=t.fallback)}register(t,e,s){this._registrations[t]=e,s&&(this._registeredOptions[t]=s)}registration(t){let e=this._registrations[t]
return void 0===e&&this._fallback&&(e=this._fallback.registration(t)),e}unregister(t){delete this._registrations[t],delete this._registeredOptions[t],delete this._registeredInjections[t]}registerOption(t,e,s){let i=this._registeredOptions[t]
i||(i={},this._registeredOptions[t]=i),i[e]=s}registeredOption(t,e){let s,i=this.registeredOptions(t)
return i&&(s=i[e]),void 0===s&&void 0!==this._fallback&&(s=this._fallback.registeredOption(t,e)),s}registeredOptions(t){let e=this._registeredOptions[t]
if(void 0===e){let s=t.split(":")[0]
e=this._registeredOptions[s]}return e}unregisterOption(t,e){let s=this._registeredOptions[t]
s&&delete s[e]}registerInjection(t,e,s){let i=this._registeredInjections[t]
void 0===i&&(this._registeredInjections[t]=i=[]),i.push({property:e,source:s})}registeredInjections(t){let e=t.split(":")[0],s=this._fallback?this._fallback.registeredInjections(t):[]
return Array.prototype.push.apply(s,this._registeredInjections[e]),Array.prototype.push.apply(s,this._registeredInjections[t]),s}}const It="__owner__"
class jt{constructor(t){this._bounds=t}get firstNode(){return this._bounds.firstNode()}get lastNode(){return this._bounds.lastNode()}}class zt{constructor(){this.evaluateOpcode=i(78).slice()}add(t,e){this.evaluateOpcode[t]=e}evaluate(t,e,s){(0,this.evaluateOpcode[s])(t,e)}}const Vt=new zt
class Ht{constructor(){r(this)}}class Ut extends Ht{constructor(){super(...arguments),this.next=null,this.prev=null}}var $t;(function(t){t[t.pc=0]="pc",t[t.ra=1]="ra",t[t.fp=2]="fp",t[t.sp=3]="sp",t[t.s0=4]="s0",t[t.s1=5]="s1",t[t.t0=6]="t0",t[t.t1=7]="t1",t[t.v0=8]="v0"})($t||($t={}))
class Gt extends wt{constructor(t){super(t)}static create(t){return void 0===t?Wt:null===t?Kt:!0===t?qt:!1===t?Jt:"number"==typeof t?new Xt(t):new Yt(t)}get(t){return Wt}}class Yt extends Gt{constructor(){super(...arguments),this.lengthReference=null}get(t){if("length"===t){let t=this.lengthReference
return null===t&&(t=this.lengthReference=new Xt(this.inner.length)),t}return super.get(t)}}class Xt extends Gt{constructor(t){super(t)}}const Wt=new Xt(void 0),Kt=new Xt(null),qt=new Xt(!0),Jt=new Xt(!1)
class Qt{constructor(t){this.inner=t,this.tag=t.tag}value(){return this.toBool(this.inner.value())}toBool(t){return!!t}}class Zt extends vt{constructor(t){super(),this.parts=t,this.tag=u(t)}compute(){let t=new Array
for(let e=0;e<this.parts.length;e++){let s=this.parts[e].value()
null!==s&&void 0!==s&&(t[e]=function(t){return"function"!=typeof t.toString?"":String(t)}(s))}return t.length>0?t.join(""):null}}Vt.add(1,(t,{op1:e})=>{let s=t.stack,i=t.constants.resolveHandle(e)(t,s.pop())
t.loadValue($t.v0,i)}),Vt.add(4,(t,{op1:e})=>{let s=t.referenceForSymbol(e)
t.stack.push(s)}),Vt.add(2,(t,{op1:e})=>{let s=t.stack.pop()
t.scope().bindSymbol(e,s)}),Vt.add(3,(t,{op1:e})=>{let s=t.stack.pop(),i=t.stack.pop(),r=t.stack.pop(),n=r?[s,i,r]:null
t.scope().bindBlock(e,n)}),Vt.add(76,(t,{op1:e})=>{let s=t.constants.getString(e),i=t.scope().getPartialMap()[s]
void 0===i&&(i=t.getSelf().get(s)),t.stack.push(i)}),Vt.add(17,(t,{op1:e,op2:s})=>{t.pushRootScope(e,!!s)}),Vt.add(5,(t,{op1:e})=>{let s=t.constants.getString(e),i=t.stack.pop()
t.stack.push(i.get(s))}),Vt.add(6,(t,{op1:e})=>{let s=t.stack,i=t.scope().getBlock(e)
i?(s.push(i[2]),s.push(i[1]),s.push(i[0])):(s.push(null),s.push(null),s.push(null))}),Vt.add(7,(t,{op1:e})=>{let s=!!t.scope().getBlock(e)
t.stack.push(s?qt:Jt)}),Vt.add(8,t=>{let e=t.stack.pop(),s=e&&e.parameters.length
t.stack.push(s?qt:Jt)}),Vt.add(9,(t,{op1:e})=>{let s=new Array(e)
for(let i=e;i>0;i--){s[i-1]=t.stack.pop()}t.stack.push(new Zt(s))})
var te;(function(t){t[t.Text=0]="Text",t[t.Append=1]="Append",t[t.Comment=2]="Comment",t[t.Modifier=3]="Modifier",t[t.Block=4]="Block",t[t.Component=5]="Component",t[t.OpenElement=6]="OpenElement",t[t.OpenSplattedElement=7]="OpenSplattedElement",t[t.FlushElement=8]="FlushElement",t[t.CloseElement=9]="CloseElement",t[t.StaticAttr=10]="StaticAttr",t[t.DynamicAttr=11]="DynamicAttr",t[t.AttrSplat=12]="AttrSplat",t[t.Yield=13]="Yield",t[t.Partial=14]="Partial",t[t.DynamicArg=15]="DynamicArg",t[t.StaticArg=16]="StaticArg",t[t.TrustingAttr=17]="TrustingAttr",t[t.Debugger=18]="Debugger",t[t.ClientSideStatement=19]="ClientSideStatement",t[t.Unknown=20]="Unknown",t[t.Get=21]="Get",t[t.MaybeLocal=22]="MaybeLocal",t[t.HasBlock=23]="HasBlock",t[t.HasBlockParams=24]="HasBlockParams",t[t.Undefined=25]="Undefined",t[t.Helper=26]="Helper",t[t.Concat=27]="Concat",t[t.ClientSideExpression=28]="ClientSideExpression"})(te||(te={}))
const ee=k(te.Get),se=k(te.MaybeLocal)
var ie;(function(t){t[t.OpenComponentElement=0]="OpenComponentElement",t[t.DidCreateElement=1]="DidCreateElement",t[t.SetComponentAttrs=2]="SetComponentAttrs",t[t.DidRenderLayout=3]="DidRenderLayout",t[t.Debugger=4]="Debugger"})(ie||(ie={}))
var re=te
class ne{constructor(t=0){this.offset=t,this.names=a(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}compile(t,e){let s=t[this.offset],i=this.names[s],r=this.funcs[i]
r(t,e)}}let ae,le
class oe{constructor(){var t=function(t=new he,e=new ue){return t.add("if",(t,e,s,i,r)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #if requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END"),r.expr(t[0]),r.toBoolean(),r.enter(1),r.jumpUnless("ELSE"),r.invokeStaticBlock(s),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("unless",(t,e,s,i,r)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #unless requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END"),r.expr(t[0]),r.toBoolean(),r.enter(1),r.jumpIf("ELSE"),r.invokeStaticBlock(s),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("with",(t,e,s,i,r)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #with requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END"),r.expr(t[0]),r.dup(),r.toBoolean(),r.enter(2),r.jumpUnless("ELSE"),r.invokeStaticBlock(s,1),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("each",(t,e,s,i,r)=>{r.startLabels(),r.pushFrame(),r.returnTo("END"),e&&"key"===e[0][0]?r.expr(e[1][0]):r.pushPrimitiveReference(null),r.expr(t[0]),r.enter(2),r.putIterator(),r.jumpUnless("ELSE"),r.pushFrame(),r.returnTo("ITER"),r.dup($t.fp,1),r.enterList("BODY"),r.label("ITER"),r.iterate("BREAK"),r.label("BODY"),r.invokeStaticBlock(s,2),r.pop(2),r.exit(),r.return(),r.label("BREAK"),r.exitList(),r.popFrame(),i?(r.jump("EXIT"),r.label("ELSE"),r.invokeStaticBlock(i),r.label("EXIT"),r.exit(),r.return()):(r.label("ELSE"),r.exit(),r.return()),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("in-element",(t,e,s,i,r)=>{if(!t||1!==t.length)throw new Error("SYNTAX ERROR: #in-element requires a single argument")
r.startLabels(),r.pushFrame(),r.returnTo("END")
let n=e[0],a=e[1]
for(let l=0;l<n.length;l++){let t=n[l]
if("nextSibling"!==t&&"guid"!==t)throw new Error(`SYNTAX ERROR: #in-element does not take a \`${n[0]}\` option`)
r.expr(a[l])}r.expr(t[0]),r.dup(),r.enter(4),r.jumpUnless("ELSE"),r.pushRemoteElement(),r.invokeStaticBlock(s),r.popRemoteElement(),r.label("ELSE"),r.exit(),r.return(),r.label("END"),r.popFrame(),r.stopLabels()}),t.add("-with-dynamic-vars",(t,e,s,i,r)=>{if(e){let t=e[0],i=e[1]
r.compileParams(i),r.pushDynamicScope(),r.bindDynamicScope(t),r.invokeStaticBlock(s),r.popDynamicScope()}else r.invokeStaticBlock(s)}),t.add("component",(t,e,s,i,r)=>{let n=t[0],a=t.slice(1)
r.dynamicComponent(n,a,e,!0,s,i)}),e.add("component",(t,e,s,i)=>{let r=e[0],n=e.slice(1)
return i.dynamicComponent(r,n,s,!0,null,null),!0}),{blocks:t,inlines:e}}()
let e=t.blocks,s=t.inlines
this.blocks=e,this.inlines=s}}class he{constructor(){this.names=a(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e,s,i,r,n){let a=this.names[t]
if(void 0===a){(0,this.missing)(t,e,s,i,r,n)}else{(0,this.funcs[a])(e,s,i,r,n)}}}class ue{constructor(){this.names=a(),this.funcs=[]}add(t,e){this.funcs.push(e),this.names[t]=this.funcs.length-1}addMissing(t){this.missing=t}compile(t,e){let s=t[1]
if(!Array.isArray(s))return["expr",s]
let i,r,n
if(s[0]===re.Helper)i=s[1],r=s[2],n=s[3]
else{if(s[0]!==re.Unknown)return["expr",s]
i=s[1],r=n=null}let a=this.names[i]
if(void 0===a&&this.missing){let t=(0,this.missing)(i,r,n,e)
return!1===t?["expr",s]:t}if(void 0!==a){let t=(0,this.funcs[a])(i,r,n,e)
return!1===t?["expr",s]:t}return["expr",s]}}class ce{constructor(t,e,s,i){this.statements=t,this.containingLayout=e,this.options=s,this.symbolTable=i,this.compiled=null,this.statementCompiler=function(){if(ae)return ae
const t=ae=new ne
t.add(re.Text,(t,e)=>{e.text(t[1])}),t.add(re.Comment,(t,e)=>{e.comment(t[1])}),t.add(re.CloseElement,(t,e)=>{e.closeElement()}),t.add(re.FlushElement,(t,e)=>{e.flushElement()}),t.add(re.Modifier,(t,e)=>{let s=e.lookup,i=e.referrer,r=t[1],n=t[2],a=t[3],l=s.lookupModifier(r,i)
if(!l)throw new Error(`Compile Error ${r} is not a modifier: Helpers may not be used in the element form.`)
e.modifier(l,n,a)}),t.add(re.StaticAttr,(t,e)=>{let s=t[1],i=t[2],r=t[3]
e.staticAttr(s,r,i)}),t.add(re.DynamicAttr,(t,e)=>{S(t,!1,e)}),t.add(re.TrustingAttr,(t,e)=>{S(t,!0,e)}),t.add(re.OpenElement,(t,e)=>{e.openPrimitiveElement(t[1])}),t.add(re.OpenSplattedElement,(t,e)=>{e.setComponentAttrs(!0),e.putComponentOperations(),e.openElementWithOperations(t[1])}),t.add(re.Component,(t,e)=>{let s=t[1],i=t[2],r=t[3],n=t[4],a=e.lookup,l=e.referrer,o=a.lookupComponentSpec(s,l)
if(null===o)throw new Error(`Compile Error: Cannot find component ${s}`)
{let t=a.getCapabilities(o),s=[[re.ClientSideStatement,ie.SetComponentAttrs,!0],...i,[re.ClientSideStatement,ie.SetComponentAttrs,!1]],l=e.inlineBlock({statements:s,parameters:at}),h=e.template(n)
if(!1===t.dynamicLayout){let s=a.getLayout(o)
e.pushComponentDefinition(o),e.invokeStaticComponent(t,s,l,null,r,!1,h&&h)}else e.pushComponentDefinition(o),e.invokeComponent(l,null,r,!1,h&&h)}}),t.add(re.Partial,(t,e)=>{let s=t[1],i=t[2],r=e.referrer
e.startLabels(),e.pushFrame(),e.returnTo("END"),e.expr(s),e.dup(),e.enter(2),e.jumpUnless("ELSE"),e.invokePartial(r,e.evalSymbols(),i),e.popScope(),e.popFrame(),e.label("ELSE"),e.exit(),e.return(),e.label("END"),e.popFrame(),e.stopLabels()}),t.add(re.Yield,(t,e)=>{let s=t[1],i=t[2]
e.yield(s,i)}),t.add(re.AttrSplat,(t,e)=>{let s=t[1]
e.yield(s,[]),e.didCreateElement($t.s0),e.setComponentAttrs(!1)}),t.add(re.Debugger,(t,e)=>{let s=t[1]
e.debugger(e.evalSymbols(),s)}),t.add(re.ClientSideStatement,(t,s)=>{e.compile(t,s)}),t.add(re.Append,(t,e)=>{let s=t[1],i=t[2]
if(!0===(e.macros.inlines.compile(t,e)||s))return
let r=ee(s),n=se(s)
i?e.guardedAppend(s,!0):r||n?e.guardedAppend(s,!1):(e.expr(s),e.dynamicContent(!1))}),t.add(re.Block,(t,e)=>{let s=t[1],i=t[2],r=t[3],n=t[4],a=t[5],l=e.template(n),o=e.template(a),h=l&&l,u=o&&o
e.macros.blocks.compile(s,i,r,h,u,e)})
const e=new ne(1)
return e.add(ie.OpenComponentElement,(t,e)=>{e.putComponentOperations(),e.openElementWithOperations(t[2])}),e.add(ie.DidCreateElement,(t,e)=>{e.didCreateElement($t.s0)}),e.add(ie.SetComponentAttrs,(t,e)=>{e.setComponentAttrs(t[2])}),e.add(ie.Debugger,()=>{}),e.add(ie.DidRenderLayout,(t,e)=>{e.didRenderLayout($t.s0)}),t}()}static topLevel(t,e){return new ce(t.statements,{block:t,referrer:e.referrer},e,{referrer:e.referrer,hasEval:t.hasEval,symbols:t.symbols})}compile(){let t=this.compiled
if(null!==t)return t
let e=this.options,s=this.statements,i=this.containingLayout,r=i.referrer,n=e.program,a=e.lookup,l=e.macros,o=e.asPartial,h=new(0,e.Builder)(n,a,r,l,i,o)
for(let c=0;c<s.length;c++)this.statementCompiler.compile(s[c],h)
let u=h.commit(n.heap)
return this.compiled=u}}class pe{constructor(t){this.builder=t}static(t,e){let s=e[0],i=e[1],r=e[2],n=e[3],a=this.builder,l=a.lookup
if(null!==t){let e=l.getCapabilities(t)
if(!1===e.dynamicLayout){let o=l.getLayout(t)
a.pushComponentDefinition(t),a.invokeStaticComponent(e,o,null,s,i,!1,r,n)}else a.pushComponentDefinition(t),a.invokeComponent(null,s,i,!1,r,n)}}}class de{constructor(t){this.buffer=t,this.typePos=0,this.size=0}encode(t,...e){if(t>255)throw new Error(`Opcode type over 8-bits. Got ${t}.`)
this.buffer.push(t|e.length<<8),this.typePos=this.buffer.length-1,e.forEach(t=>{if(t>65535)throw new Error(`Operand over 16-bits. Got ${t}.`)
this.buffer.push(t)}),this.size=this.buffer.length}compact(t){return String.fromCharCode(...t)}patch(t,e){if(-1!==this.buffer[t+1])throw new Error("Trying to patch operand in populated slot instead of a reserved slot.")
this.buffer[t+1]=e}}class me{constructor(){this.labels=a(),this.targets=[]}label(t,e){this.labels[t]=e}target(t,e,s){this.targets.push({at:t,Target:e,target:s})}patch(t){let e=this.targets,s=this.labels
for(let r=0;r<e.length;r++){var i=e[r]
let n=i.at,a=s[i.target]-n
t.patch(n,a)}}}class ge{constructor(t,e,s,i,r,n){this.program=t,this.lookup=e,this.referrer=s,this.macros=i,this.containingLayout=r,this.asPartial=n,this.encoder=new de([]),this.labelsStack=new st,this.isComponentAttrs=!1,this.component=new pe(this),this.constants=t.constants,this.expressionCompiler=function(){if(le)return le
const t=le=new ne
return t.add(re.Unknown,(t,e)=>{let s=e.lookup,i=e.asPartial,r=e.referrer,n=t[1],a=s.lookupHelper(n,r)
null!==a?e.helper(a,null,null):i?e.resolveMaybeLocal(n):(e.getVariable(0),e.getProperty(n))}),t.add(re.Concat,(t,e)=>{let s=t[1]
for(let i=0;i<s.length;i++)e.expr(s[i])
e.concat(s.length)}),t.add(re.Helper,(t,e)=>{let s=e.lookup,i=e.referrer,r=t[1],n=t[2],a=t[3]
if("component"===r){let t=n[0],s=n.slice(1)
return void e.curryComponent(t,s,a,!0)}let l=s.lookupHelper(r,i)
if(null===l)throw new Error(`Compile Error: ${r} is not a helper`)
e.helper(l,n,a)}),t.add(re.Get,(t,e)=>{let s=t[1],i=t[2]
e.getVariable(s)
for(let r=0;r<i.length;r++)e.getProperty(i[r])}),t.add(re.MaybeLocal,(t,e)=>{let s=t[1]
if(e.asPartial){let t=s[0]
s=s.slice(1),e.resolveMaybeLocal(t)}else e.getVariable(0)
for(let i=0;i<s.length;i++)e.getProperty(s[i])}),t.add(re.Undefined,(t,e)=>e.pushPrimitiveReference(void 0)),t.add(re.HasBlock,(t,e)=>{e.hasBlock(t[1])}),t.add(re.HasBlockParams,(t,e)=>{e.hasBlockParams(t[1])}),t}()}get pos(){return this.encoder.typePos}get nextPos(){return this.encoder.size}expr(t){Array.isArray(t)?this.expressionCompiler.compile(t,this):this.pushPrimitiveReference(t)}upvars(t){return i(t)}reserve(t,e=1){let s=[]
for(let i=0;i<e;i++)s[i]=-1
this.push(t,...s)}push(t,...e){this.encoder.encode(t,...e)}commit(t){this.push(20)
let e=this.encoder.buffer,s=t.malloc()
for(let i=0;i<e.length;i++)t.push(e[i])
return t.finishMalloc(s,this.containingLayout.block.symbols.length),s}setComponentAttrs(t){this.isComponentAttrs=t}pushArgs(t,e){let s=this.constants.stringArray(t)
this.push(61,s,e)}get labels(){return this.labelsStack.current}startLabels(){this.labelsStack.push(new me)}stopLabels(){this.labelsStack.pop().patch(this.encoder)}pushComponentDefinition(t){this.push(59,this.constants.handle(t))}pushDynamicComponentManager(t){this.push(60,this.constants.serializable(t))}prepareArgs(t){this.push(63,t)}createComponent(t,e,s){let i=(!0===e?1:0)|(!0===s?1:0)<<1
this.push(64,i,t)}registerComponentDestructor(t){this.push(65,t)}beginComponentTransaction(){this.push(71)}commitComponentTransaction(){this.push(72)}putComponentOperations(){this.push(66)}getComponentSelf(t){this.push(67,t)}getComponentTagName(t){this.push(68,t)}getComponentLayout(t){this.push(69,t)}invokeComponentLayout(){this.push(70)}didCreateElement(t){this.push(73,t)}didRenderLayout(t){this.push(74,t)}invokePartial(t,e,s){let i=this.constants.serializable(t),r=this.constants.stringArray(e),n=this.constants.array(s)
this.push(75,i,r,n)}resolveMaybeLocal(t){this.push(76,this.string(t))}debugger(t,e){this.push(77,this.constants.stringArray(t),this.constants.array(e))}dynamicContent(t){this.push(24,t?1:0)}text(t){this.push(22,this.constants.string(t))}openPrimitiveElement(t){this.push(25,this.constants.string(t))}openElementWithOperations(t){this.push(26,this.constants.string(t))}openDynamicElement(){this.push(27)}flushElement(){this.push(31)}closeElement(){this.push(32)}staticAttr(t,e,s){let i=this.constants.string(t),r=e?this.constants.string(e):0
if(this.isComponentAttrs)this.pushPrimitiveReference(s),this.push(30,i,1,r)
else{let t=this.constants.string(s)
this.push(28,i,t,r)}}dynamicAttr(t,e,s){let i=this.constants.string(t),r=e?this.constants.string(e):0
this.isComponentAttrs?this.push(30,i,!0===s?1:0,r):this.push(29,i,!0===s?1:0,r)}comment(t){let e=this.constants.string(t)
this.push(23,e)}modifier(t,e,s){this.pushFrame(),this.compileArgs(e,s,null,!0),this.push(33,this.constants.handle(t)),this.popFrame()}putIterator(){this.push(55)}enterList(t){this.reserve(53),this.labels.target(this.pos,53,t)}exitList(){this.push(54)}iterate(t){this.reserve(56),this.labels.target(this.pos,56,t)}setVariable(t){this.push(2,t)}setBlock(t){this.push(3,t)}getVariable(t){this.push(4,t)}getProperty(t){this.push(5,this.string(t))}getBlock(t){this.push(6,t)}hasBlock(t){this.push(7,t)}hasBlockParams(t){this.getBlock(t),this.resolveBlock(),this.push(8)}concat(t){this.push(9,t)}load(t){this.push(15,t)}fetch(t){this.push(16,t)}dup(t=$t.sp,e=0){return this.push(13,t,e)}pop(t=1){return this.push(14,t)}pushRemoteElement(){this.push(34)}popRemoteElement(){this.push(35)}label(t){this.labels.label(t,this.nextPos)}pushRootScope(t,e){this.push(17,t,e?1:0)}pushChildScope(){this.push(18)}popScope(){this.push(19)}returnTo(t){this.reserve(21),this.labels.target(this.pos,21,t)}pushDynamicScope(){this.push(37)}popDynamicScope(){this.push(38)}primitive(t){let e,s=0
switch(typeof t){case"number":t%1==0?t>-1?e=t:(e=this.negative(t),s=4):(e=this.float(t),s=1)
break
case"string":e=this.string(t),s=2
break
case"boolean":e=0|t,s=3
break
case"object":e=2,s=3
break
case"undefined":e=3,s=3
break
default:throw new Error("Invalid primitive passed to pushPrimitive")}this.push(11,e<<3|s)}float(t){return this.constants.float(t)}negative(t){return this.constants.negative(t)}pushPrimitiveReference(t){this.primitive(t),this.primitiveReference()}primitiveReference(){this.push(12)}helper(t,e,s){this.pushFrame(),this.compileArgs(e,s,null,!0),this.push(1,this.constants.handle(t)),this.popFrame(),this.fetch($t.v0)}bindDynamicScope(t){this.push(36,this.names(t))}enter(t){this.push(50,t)}exit(){this.push(51)}return(){this.push(20)}pushFrame(){this.push(48)}popFrame(){this.push(49)}invokeVirtual(){this.push(42)}invokeYield(){this.push(44)}toBoolean(){this.push(52)}jump(t){this.reserve(45),this.labels.target(this.pos,45,t)}jumpIf(t){this.reserve(46),this.labels.target(this.pos,46,t)}jumpUnless(t){this.reserve(47),this.labels.target(this.pos,47,t)}string(t){return this.constants.string(t)}names(t){let e=[]
for(let s=0;s<t.length;s++){let i=t[s]
e[s]=this.constants.string(i)}return this.constants.array(e)}symbols(t){return this.constants.array(t)}inlineBlock(t){let e=t.parameters,s=t.statements,i={parameters:e,referrer:this.containingLayout.referrer},r={program:this.program,macros:this.macros,Builder:this.constructor,lookup:this.lookup,asPartial:this.asPartial,referrer:this.referrer}
return new ce(s,this.containingLayout,r,i)}evalSymbols(){let t=this.containingLayout.block
return t.hasEval?t.symbols:null}compileParams(t){if(!t)return 0
for(let e=0;e<t.length;e++)this.expr(t[e])
return t.length}compileArgs(t,e,s,i){s&&(this.pushYieldableBlock(s.main),this.pushYieldableBlock(s.else),this.pushYieldableBlock(s.attrs))
let r=this.compileParams(t)<<4
i&&(r|=8),s&&(r|=7)
let n=at
if(e){n=e[0]
let t=e[1]
for(let e=0;e<t.length;e++)this.expr(t[e])}this.pushArgs(n,r)}invokeStaticBlock(t,e=0){let s=t.symbolTable.parameters,i=s.length,r=Math.min(e,i)
if(this.pushFrame(),r){this.pushChildScope()
for(let t=0;t<r;t++)this.dup($t.fp,e-t),this.setVariable(s[t])}this.pushBlock(t),this.resolveBlock(),this.invokeVirtual(),r&&this.popScope(),this.popFrame()}guardedAppend(t,e){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.isComponent(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,null,null,!1,null,null),this.exit(),this.return(),this.label("ELSE"),this.dynamicContent(e),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}yield(t,e){this.compileArgs(e,null,null,!1),this.getBlock(t),this.resolveBlock(),this.invokeYield(),this.popScope(),this.popFrame()}invokeComponent(t,e,s,i,r,n=null,a){this.fetch($t.s0),this.dup($t.sp,1),this.load($t.s0),this.pushFrame()
let l={main:r,else:n,attrs:t}
this.compileArgs(e,s,l,i),this.prepareArgs($t.s0),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent($t.s0,null!==r,null!==n),this.registerComponentDestructor($t.s0),this.getComponentSelf($t.s0),a?(this.pushSymbolTable(a.symbolTable),this.pushLayout(a),this.resolveLayout()):this.getComponentLayout($t.s0),this.invokeComponentLayout(),this.didRenderLayout($t.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load($t.s0)}invokeStaticComponent(e,s,i,r,n,a,l,o=null){let h=s.symbolTable
if(h.hasEval||e.prepareArgs)return void this.invokeComponent(i,r,n,a,l,o,s)
this.fetch($t.s0),this.dup($t.sp,1),this.load($t.s0)
let u=h.symbols
e.createArgs&&(this.pushFrame(),this.compileArgs(null,n,null,a)),this.beginComponentTransaction(),this.pushDynamicScope(),this.createComponent($t.s0,null!==l,null!==o),e.createArgs&&this.popFrame(),this.registerComponentDestructor($t.s0)
let c=[]
this.getComponentSelf($t.s0),c.push({symbol:0,isBlock:!1})
for(let d=0;d<u.length;d++){let e=u[d]
switch(e.charAt(0)){case"&":let s=null
if("&default"===e)s=l
else if("&inverse"===e)s=o
else{if("&attrs"!==e)throw t()
s=i}s?(this.pushYieldableBlock(s),c.push({symbol:d+1,isBlock:!0})):(this.pushYieldableBlock(null),c.push({symbol:d+1,isBlock:!0}))
break
case"@":if(!n)break
let r=n[0],h=n[1],u=e
a&&(u=e.slice(1))
let p=r.indexOf(u);-1!==p&&(this.expr(h[p]),c.push({symbol:d+1,isBlock:!1}))}}this.pushRootScope(u.length+1,!!(l||o||i))
for(let t=c.length-1;t>=0;t--){var p=c[t]
let e=p.symbol
p.isBlock?this.setBlock(e):this.setVariable(e)}this.pushFrame(),this.invokeStatic(s),this.didRenderLayout($t.s0),this.popFrame(),this.popScope(),this.popDynamicScope(),this.commitComponentTransaction(),this.load($t.s0)}dynamicComponent(t,e,s,i,r,n=null){this.startLabels(),this.pushFrame(),this.returnTo("END"),this.expr(t),this.dup(),this.enter(2),this.jumpUnless("ELSE"),this.pushDynamicComponentManager(this.referrer),this.invokeComponent(null,e,s,i,r,n),this.label("ELSE"),this.exit(),this.return(),this.label("END"),this.popFrame(),this.stopLabels()}isComponent(){this.push(57)}curryComponent(t,e,s,i){let r=this.referrer
this.pushFrame(),this.compileArgs(e,s,null,i),this.expr(t),this.push(58,this.constants.serializable(r)),this.popFrame(),this.fetch($t.v0)}pushSymbolTable(t){if(t){let e=this.constants.table(t)
this.push(41,e)}else this.primitive(null)}pushBlockScope(){this.push(40)}pushYieldableBlock(t){this.pushSymbolTable(t&&t.symbolTable),this.pushBlockScope(),this.pushBlock(t)}template(t){return t?this.inlineBlock(t):null}}class fe extends ge{pushBlock(t){t?this.pushOther(t):this.primitive(null)}resolveBlock(){this.push(39)}pushLayout(t){t?this.pushOther(t):this.primitive(null)}resolveLayout(){this.push(39)}invokeStatic(t){this.pushOther(t),this.push(39),this.push(42)}pushOther(t){this.push(10,this.other(t))}other(t){return this.constants.other(t)}}class be{constructor(){this.stack=null,this.positional=new ye,this.named=new ke,this.blocks=new we}setup(t,e,s,i,r){this.stack=t
let n=this.named,a=e.length,l=t.sp-a+1
n.setup(t,l,a,e,r)
let o=l-i
this.positional.setup(t,o,i)
let h=this.blocks,u=s.length,c=o-3*u
h.setup(t,c,u,s)}get tag(){return u([this.positional,this.named])}get base(){return this.blocks.base}get length(){return this.positional.length+this.named.length+3*this.blocks.length}at(t){return this.positional.at(t)}realloc(t){if(t>0){let e=this.positional,s=this.named,i=this.stack,r=e.base+t
for(let t=e.length+s.length-1;t>=0;t--)i.set(i.get(t,e.base),t,r)
e.base+=t,s.base+=t,i.sp+=t}}capture(){let t=0===this.positional.length?xe:this.positional.capture(),e=0===this.named.length?Ee:this.named.capture()
return{tag:this.tag,length:this.length,positional:t,named:e}}clear(){let t=this.stack,e=this.length
t.pop(e)}}class ye{constructor(){this.base=0,this.length=0,this.stack=null,this._tag=null,this._references=null}setup(t,e,s){this.stack=t,this.base=e,this.length=s,0===s?(this._tag=ct,this._references=at):(this._tag=null,this._references=null)}get tag(){let t=this._tag
return t||(t=this._tag=u(this.references)),t}at(t){let e=this.base,s=this.length,i=this.stack
return t<0||t>=s?Wt:i.get(t,e)}capture(){return new ve(this.tag,this.references)}prepend(t){let e=t.length
if(e>0){let s=this.base,i=this.length,r=this.stack
this.base=s-=e,this.length=i+e
for(let n=0;n<e;n++)r.set(t.at(n),n,s)
this._tag=null,this._references=null}}get references(){let t=this._references
if(!t){let e=this.stack,s=this.base,i=this.length
t=this._references=e.slice(s,s+i)}return t}}class ve{constructor(t,e,s=e.length){this.tag=t,this.references=e,this.length=s}static empty(){return new ve(ct,at,0)}at(t){return this.references[t]}value(){return this.references.map(this.valueOf)}get(t){let e=this.references,s=this.length
if("length"===t)return Gt.create(s)
{let i=parseInt(t,10)
return i<0||i>=s?Wt:e[i]}}valueOf(t){return t.value()}}class ke{constructor(){this.base=0,this.length=0,this._tag=null,this._references=null,this._names=at,this._atNames=at}setup(t,e,s,i,r){this.stack=t,this.base=e,this.length=s,0===s?(this._tag=ct,this._references=at,this._names=at,this._atNames=at):(this._tag=null,this._references=null,r?(this._names=i,this._atNames=null):(this._names=null,this._atNames=i))}get tag(){return u(this.references)}get names(){let t=this._names
return t||(t=this._names=this._atNames.map(this.toSyntheticName)),t}get atNames(){let t=this._atNames
return t||(t=this._atNames=this._names.map(this.toAtName)),t}has(t){return-1!==this.names.indexOf(t)}get(t,e=!0){let s=this.base,i=this.stack,r=(e?this.names:this.atNames).indexOf(t)
return-1===r?Wt:i.get(r,s)}capture(){return new Se(this.tag,this.names,this.references)}merge(t){let e=t.length
if(e>0){let s=this.names,i=this.length,r=this.stack,n=t.names
Object.isFrozen(s)&&0===s.length&&(s=[])
for(let a=0;a<e;a++){let e=n[a];-1===s.indexOf(e)&&(i=s.push(e),r.push(t.references[a]))}this.length=i,this._tag=null,this._references=null,this._names=s,this._atNames=null}}get references(){let t=this._references
if(!t){let e=this.base,s=this.length,i=this.stack
t=this._references=i.slice(e,e+s)}return t}toSyntheticName(t){return t.slice(1)}toAtName(t){return`@${t}`}}class Se{constructor(t,e,s){this.tag=t,this.names=e,this.references=s,this.length=e.length,this._map=null}get map(){let t=this._map
if(!t){let e=this.names,s=this.references
t=this._map=a()
for(let i=0;i<e.length;i++){t[e[i]]=s[i]}}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names,s=this.references,i=e.indexOf(t)
return-1===i?Wt:s[i]}value(){let t=this.names,e=this.references,s=a()
for(let i=0;i<t.length;i++){s[t[i]]=e[i].value()}return s}}class we{constructor(){this.internalValues=null,this.internalTag=null,this.names=at,this.length=0,this.base=0}setup(t,e,s,i){this.stack=t,this.names=i,this.base=e,this.length=s,0===s?(this.internalTag=ct,this.internalValues=at):(this.internalTag=null,this.internalValues=null)}get values(){let t=this.internalValues
if(!t){let e=this.base,s=this.length,i=this.stack
t=this.internalValues=i.slice(e,e+3*s)}return t}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.base,s=this.stack,i=this.names,r=i.indexOf(t)
if(-1===i.indexOf(t))return null
let n=s.get(3*r,e),a=s.get(3*r+1,e),l=s.get(3*r+2,e)
return null===l?null:[l,a,n]}capture(){return new _e(this.names,this.values)}}class _e{constructor(t,e){this.names=t,this.values=e,this.length=t.length}has(t){return-1!==this.names.indexOf(t)}get(t){let e=this.names.indexOf(t)
return-1===e?null:[this.values[3*e+2],this.values[3*e+1],this.values[3*e]]}}const Ee=new Se(ct,at,at),xe=new ve(ct,at),Ce={tag:ct,length:0,positional:xe,named:Ee},Ae="CURRIED COMPONENT DEFINITION [id=6f00feb9-a0ef-4547-99ea-ac328f80acea]"
class Ne{constructor(t,e){this.inner=t,this.args=e,this[Ae]=!0}unwrap(t){t.realloc(this.offset)
let e=this
for(;;){var s=e
let i=s.args,r=s.inner
if(i&&(t.positional.prepend(i.positional),t.named.merge(i.named)),!w(r))return r
e=r}}get offset(){let t=this.inner,e=this.args,s=e?e.positional.length:0
return w(t)?s+t.offset:s}}class Oe extends Qt{static create(t){return new Oe(t)}toBool(t){return w(t)}}Vt.add(24,(t,{op1:e})=>{let s,i=t.stack.pop(),r=i.value()
s=e?t.elements().appendTrustingDynamicContent(r):t.elements().appendCautiousDynamicContent(r),o(i)||t.updateWith(new Te(i,s))})
class Te extends Ut{constructor(t,e){super(),this.reference=t,this.content=e,this.tag=t.tag}evaluate(t){let e=this.content,s=this.reference
e.update(t.env,s.value())}}Vt.add(18,t=>t.pushChildScope()),Vt.add(19,t=>t.popScope()),Vt.add(37,t=>t.pushDynamicScope()),Vt.add(38,t=>t.popDynamicScope()),Vt.add(10,(t,{op1:e})=>{t.stack.push(t.constants.getOther(e))}),Vt.add(11,(t,{op1:e})=>{let s=t.stack,i=e>>3
switch(7&e){case 0:s.push(i)
break
case 1:s.push(t.constants.getFloat(i))
break
case 2:s.push(t.constants.getString(i))
break
case 3:switch(i){case 0:s.push(!1)
break
case 1:s.push(!0)
break
case 2:s.push(null)
break
case 3:s.push(void 0)}break
case 4:s.push(t.constants.getNegative(i))}}),Vt.add(12,t=>{let e=t.stack
e.push(Gt.create(e.pop()))}),Vt.add(13,(t,{op1:e,op2:s})=>{let i=t.fetchValue(e)-s
t.stack.dup(i)}),Vt.add(14,(t,{op1:e})=>{t.stack.pop(e)}),Vt.add(15,(t,{op1:e})=>{t.load(e)}),Vt.add(16,(t,{op1:e})=>{t.fetch(e)}),Vt.add(36,(t,{op1:e})=>{let s=t.constants.getArray(e)
t.bindDynamicScope(s)}),Vt.add(48,t=>{t.pushFrame()}),Vt.add(49,t=>{t.popFrame()}),Vt.add(50,(t,{op1:e})=>{t.enter(e)}),Vt.add(51,t=>{t.exit()}),Vt.add(41,(t,{op1:e})=>{t.stack.push(t.constants.getSymbolTable(e))}),Vt.add(40,t=>{t.stack.push(t.scope())}),Vt.add(39,t=>{let e=t.stack,s=e.pop()
e.push(s?s.compile():null)}),Vt.add(42,t=>{t.call(t.stack.pop())}),Vt.add(43,(t,{op1:e})=>{t.call(e)}),Vt.add(44,t=>{let e=t.stack,s=e.pop(),i=e.pop(),r=e.pop(),n=e.pop()
if(null===r)return t.pushFrame(),void t.pushScope(i)
let a=i
{let t=r.parameters,e=t.length
if(e>0){a=a.child()
for(let s=0;s<e;s++)a.bindSymbol(t[s],n.at(s))}}t.pushFrame(),t.pushScope(a),t.call(s)}),Vt.add(45,(t,{op1:e})=>{t.goto(e)}),Vt.add(46,(t,{op1:e})=>{let s=t.stack.pop()
if(o(s))s.value()&&t.goto(e)
else{let i=new kt(s)
i.peek()&&t.goto(e),t.updateWith(new Le(i))}}),Vt.add(47,(t,{op1:e})=>{let s=t.stack.pop()
if(o(s))s.value()||t.goto(e)
else{let i=new kt(s)
i.peek()||t.goto(e),t.updateWith(new Le(i))}}),Vt.add(20,t=>{t.return()}),Vt.add(21,(t,{op1:e})=>{t.returnTo(e)}),Vt.add(52,t=>{let e=t.env,s=t.stack
s.push(e.toConditionalReference(s.pop()))})
class Le extends Ut{constructor(t){super(),this.type="assert",this.tag=t.tag,this.cache=t}evaluate(t){(function(t){return t!==St})(this.cache.revalidate())&&t.throw()}}class De extends Ut{constructor(t,e){super(),this.target=e,this.type="jump-if-not-modified",this.tag=t,this.lastRevision=t.value()}evaluate(t){let e=this.tag,s=this.target,i=this.lastRevision
!t.alwaysRevalidate&&e.validate(i)&&t.goto(s)}didModify(){this.lastRevision=this.tag.value()}}class Be extends Ut{constructor(t){super(),this.target=t,this.type="did-modify",this.tag=ct}evaluate(){this.target.didModify()}}class Re{constructor(t){this.tag=ct,this.type="label",this.label=null,this.prev=null,this.next=null,r(this),this.label=t}evaluate(){}inspect(){return`${this.label} [${this._guid}]`}}Vt.add(22,(t,{op1:e})=>{t.elements().appendText(t.constants.getString(e))}),Vt.add(26,(t,{op1:e})=>{let s=t.constants.getString(e)
t.elements().openElement(s)}),Vt.add(23,(t,{op1:e})=>{t.elements().appendComment(t.constants.getString(e))}),Vt.add(25,(t,{op1:e})=>{t.elements().openElement(t.constants.getString(e))}),Vt.add(27,t=>{let e=t.stack.pop().value()
t.elements().openElement(e)}),Vt.add(34,t=>{let e,s,i=t.stack.pop(),r=t.stack.pop(),n=t.stack.pop().value()
if(o(i))e=i.value()
else{let s=new kt(i)
e=s.peek(),t.updateWith(new Le(s))}if(o(r))s=r.value()
else{let e=new kt(r)
s=e.peek(),t.updateWith(new Le(e))}t.elements().pushRemoteElement(e,n,s)}),Vt.add(35,t=>{t.elements().popRemoteElement()}),Vt.add(31,t=>{let e=t.fetchValue($t.t0)
e&&(e.flush(t),t.loadValue($t.t0,null)),t.elements().flushElement()}),Vt.add(32,t=>{t.elements().closeElement()}),Vt.add(33,(t,{op1:e})=>{let s=t.constants.resolveHandle(e),i=t.stack.pop()
var r=t.elements()
let n=r.constructing,a=r.updateOperations,l=t.dynamicScope(),o=s.create(n,i,l,a)
t.env.scheduleInstallModifier(o,s)
let u=s.getDestructor(o)
u&&t.newDestroyable(u)
let c=s.getTag(o)
h(c)||t.updateWith(new Fe(c,s,o))})
class Fe extends Ut{constructor(t,e,s){super(),this.tag=t,this.manager=e,this.modifier=s,this.type="update-modifier",this.lastUpdated=t.value()}evaluate(t){let e=this.manager,s=this.modifier,i=this.tag,r=this.lastUpdated
i.validate(r)||(t.env.scheduleUpdateModifier(s,e),this.lastUpdated=i.value())}}Vt.add(28,(t,{op1:e,op2:s,op3:i})=>{let r=t.constants.getString(e),n=t.constants.getString(s),a=i?t.constants.getString(i):null
t.elements().setStaticAttribute(r,n,a)}),Vt.add(29,(t,{op1:e,op2:s,op3:i})=>{let r=t.constants.getString(e),n=t.stack.pop(),a=n.value(),l=i?t.constants.getString(i):null,h=t.elements().setDynamicAttribute(r,a,!!s,l)
o(n)||t.updateWith(new Me(n,h))})
class Me extends Ut{constructor(t,e){super(),this.reference=t,this.attribute=e,this.type="patch-element",this.tag=t.tag,this.lastRevision=this.tag.value()}evaluate(t){let e=this.attribute,s=this.reference,i=this.tag
i.validate(this.lastRevision)||(this.lastRevision=i.value(),e.update(s.value(),t.env))}}class Pe{constructor(t,e,s,i){this.inner=t,this.resolver=e,this.meta=s,this.args=i,this.tag=t.tag,this.lastValue=null,this.lastDefinition=null}value(){let t=this.inner,e=this.lastValue,s=t.value()
if(s===e)return this.lastDefinition
let i=null
if(w(s))i=s
else if("string"==typeof s&&s){i=_(this.resolver,s,this.meta)}return i=this.curry(i),this.lastValue=s,this.lastDefinition=i,i}get(){return Wt}curry(t){let e=this.args
return!e&&w(t)?t:t?new Ne(t,e):null}}class Ie{constructor(t){this.list=t,this.tag=u(t),this.list=t}value(){let t=[],e=this.list
for(let s=0;s<e.length;s++){let i=E(e[s].value())
i&&t.push(i)}return 0===t.length?null:t.join(" ")}}const je=new be
Vt.add(57,t=>{let e=t.stack,s=e.pop()
e.push(Oe.create(s))}),Vt.add(58,(t,{op1:e})=>{let s=t.stack,i=s.pop(),r=s.pop(),n=null
r.length&&(n=r.capture())
let a=t.constants.getSerializable(e),l=t.constants.resolver
t.loadValue($t.v0,new Pe(i,l,a,n))}),Vt.add(59,(t,{op1:e})=>{let s=t.constants.resolveHandle(e),i=s.manager
t.stack.push({definition:s,manager:i,state:null})}),Vt.add(60,(e,{op1:s})=>{let i,r=e.stack,n=r.pop().value()
if("string"==typeof n){let t=e.constants
i=_(e.constants.resolver,n,t.getSerializable(s))}else{if(!w(n))throw t()
i=n}r.push({definition:i,manager:null,state:null})}),Vt.add(61,(t,{op1:e,op2:s})=>{let i=t.stack,r=t.constants.getStringArray(e),n=s>>4,a=8&s,l=[]
4&s&&l.push("main"),2&s&&l.push("else"),1&s&&l.push("attrs"),je.setup(i,r,l,n,!!a),i.push(je)}),Vt.add(63,(t,{op1:e})=>{let s,i=t.stack,r=t.fetchValue(e),n=r.definition
w(n)?(s=i.pop(),n=r.definition=n.unwrap(s)):s=i.pop()
var a=n
let l=a.manager,o=a.state
if(r.manager=n.manager,!0!==l.getCapabilities(o).prepareArgs)return void i.push(s)
let h=s.blocks.values,u=s.blocks.names,c=l.prepareArgs(o,s)
if(c){s.clear()
for(let t=0;t<h.length;t++)i.push(h[t])
let t=c.positional,e=c.named,r=t.length
for(let s=0;s<r;s++)i.push(t[s])
let n=Object.keys(e)
for(let s=0;s<n.length;s++)i.push(e[n[s]])
s.setup(i,n,u,r,!0)}i.push(s)}),Vt.add(64,(t,{op1:e,op2:s})=>{let i=t.dynamicScope(),r=t.fetchValue(s),n=r.definition,a=r.manager,l=1&e,o=null
a.getCapabilities(n.state).createArgs&&(o=t.stack.peek())
let u=a.create(t.env,n.state,o,i,t.getSelf(),!!l)
r.state=u
let c=a.getTag(u)
h(c)||t.updateWith(new Ve(c,u,a,i))}),Vt.add(65,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.manager,r=s.state,n=i.getDestructor(r)
n&&t.newDestroyable(n)}),Vt.add(71,t=>{t.beginCacheGroup(),t.elements().pushSimpleBlock()}),Vt.add(66,t=>{t.loadValue($t.t0,new ze)}),Vt.add(30,(t,{op1:e,op2:s,op3:i})=>{let r=t.constants.getString(e),n=t.stack.pop(),a=i?t.constants.getString(i):null
t.fetchValue($t.t0).setAttribute(r,n,!!s,a)})
class ze{constructor(){this.attributes=a(),this.classes=[]}setAttribute(t,e,s,i){let r={value:e,namespace:i,trusting:s}
"class"===t&&this.classes.push(e),this.attributes[t]=r}flush(t){for(let e in this.attributes){let s=this.attributes[e],i=s.value,r=s.namespace,n=s.trusting
"class"===e&&(i=new Ie(this.classes))
let a=t.elements().setDynamicAttribute(e,i.value(),n,r)
o(i)||t.updateWith(new Me(i,a))}}}Vt.add(73,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.definition,r=s.state,n=i.manager,a=t.fetchValue($t.t0)
n.didCreateElement(r,t.elements().expectConstructing("DidCreateElementOpcode#evaluate"),a)}),Vt.add(67,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.definition,r=s.state,n=i.manager
t.stack.push(n.getSelf(r))}),Vt.add(68,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.definition,r=s.state,n=i.manager
t.stack.push(n.getTagName(r))}),Vt.add(69,(e,{op1:s})=>{let i,r=e.fetchValue(s),n=r.manager,a=r.definition,l=e.constants.resolver,o=e.stack,h=r.state,u=a.state
if(function(t,e){return!1===e.getCapabilities(t).dynamicLayout}(u,n))i=n.getLayout(u,l)
else{if(!function(t,e){return!0===e.getCapabilities(t).dynamicLayout}(u,n))throw t()
i=n.getDynamicLayout(h,l)}o.push(i.symbolTable),o.push(i.handle)}),Vt.add(70,t=>{let e=t.stack,s=e.pop()
var i=e.pop()
let r=i.symbols,n=i.hasEval
{let i=t.pushRootScope(r.length+1,!0)
i.bindSelf(e.pop())
let l=t.stack.pop(),o=null,h=-1
n&&(h=r.indexOf("$eval")+1,o=a())
let u=l.named.atNames
for(let t=u.length-1;t>=0;t--){let e=u[t],s=r.indexOf(u[t]),a=l.named.get(e,!1);-1!==s&&i.bindSymbol(s+1,a),n&&(o[e]=a)}let c=(t,e)=>{let s=r.indexOf(t),n=p.get(e);-1!==s&&i.bindBlock(s+1,n),o&&(o[t]=n)},p=l.blocks
c("&attrs","attrs"),c("&inverse","else"),c("&default","main"),o&&i.bindEvalScope(o),t.call(s)}}),Vt.add(74,(t,{op1:e})=>{var s=t.fetchValue(e)
let i=s.manager,r=s.state,n=t.elements().popBlock()
i.didRenderLayout(r,n),t.env.didCreate(r,i),t.updateWith(new He(i,r,n))}),Vt.add(72,t=>{t.commitCacheGroup()})
class Ve extends Ut{constructor(t,e,s,i){super(),this.tag=t,this.component=e,this.manager=s,this.dynamicScope=i,this.type="update-component"}evaluate(t){let e=this.component,s=this.manager,i=this.dynamicScope
s.update(e,i)}}class He extends Ut{constructor(t,e,s){super(),this.manager=t,this.component=e,this.bounds=s,this.type="did-update-layout",this.tag=ct}evaluate(t){let e=this.manager,s=this.component,i=this.bounds
e.didUpdateLayout(s,i),t.env.didUpdate(s,e)}}let Ue=function(t,e){console.info("Use `context`, and `get(<path>)` to debug this template."),e("this")}
class $e{constructor(t,e,s){this.scope=t,this.locals=a()
for(let i=0;i<s.length;i++){let r=s[i],n=e[r-1],a=t.getSymbol(r)
this.locals[n]=a}}get(t){let e=this.scope,s=this.locals,i=t.split(".")
var r=t.split(".")
let n,a=r[0],l=r.slice(1),o=e.getEvalScope()
return"this"===a?n=e.getSelf():s[a]?n=s[a]:0===a.indexOf("@")&&o[a]?n=o[a]:(n=this.scope.getSelf(),l=i),l.reduce((t,e)=>t.get(e),n)}}Vt.add(77,(t,{op1:e,op2:s})=>{let i=t.constants.getStringArray(e),r=t.constants.getArray(s),n=new $e(t.scope(),i,r)
Ue(t.getSelf().value(),t=>n.get(t).value())}),Vt.add(75,(t,{op1:e,op2:s,op3:i})=>{let r=t.constants,n=t.constants.resolver,l=t.stack.pop().value(),o=r.getSerializable(e),h=r.getStringArray(s),u=r.getArray(i),c=n.lookupPartial(l,o)
var p=n.resolve(c).getPartial()
let d=p.symbolTable,m=p.handle
{let e=d.symbols,s=t.scope(),i=t.pushRootScope(e.length,!1)
i.bindCallerScope(s.getCallerScope()),i.bindEvalScope(s.getEvalScope()),i.bindSelf(s.getSelf())
let r=a()
for(let t=0;t<u.length;t++){let e=u[t],i=h[e-1],n=s.getSymbol(e)
r[i]=n}let n=s.getEvalScope()
for(let t=0;t<e.length;t++){let s=t+1,r=n[e[t]]
void 0!==r&&i.bind(s,r)}i.bindPartialMap(r),t.pushFrame(),t.call(m)}})
class Ge{constructor(t){this.tag=t.tag,this.artifacts=t}value(){return!this.artifacts.isEmpty()}}Vt.add(55,t=>{let e=t.stack,s=e.pop(),i=e.pop(),r=t.env.iterableFor(s,i.value()),n=new xt(r)
e.push(n),e.push(new Ge(n.artifacts))}),Vt.add(53,(t,{op1:e})=>{t.enterList(e)}),Vt.add(54,t=>{t.exitList()}),Vt.add(56,(t,{op1:e})=>{let s=t.stack.peek().next()
if(s){let e=t.iterate(s.memo,s.value)
t.enterItem(s.key,e)}else t.goto(e)})
class Ye{constructor(t,e){this.element=t,this.nextSibling=e}}class Xe{constructor(t,e,s){this.parentNode=t,this.first=e,this.last=s}parentElement(){return this.parentNode}firstNode(){return this.first}lastNode(){return this.last}}class We{constructor(t,e){this.parentNode=t,this.node=e}parentElement(){return this.parentNode}firstNode(){return this.node}lastNode(){return this.node}}const Ke="http://www.w3.org/2000/svg",qe="http://www.w3.org/2000/svg",Je={foreignObject:1,desc:1,title:1},Qe=Object.create(null);["b","big","blockquote","body","br","center","code","dd","div","dl","dt","em","embed","h1","h2","h3","h4","h5","h6","head","hr","i","img","li","listing","main","meta","nobr","ol","p","pre","ruby","s","small","span","strong","strike","sub","sup","table","tt","u","ul","var"].forEach(t=>Qe[t]=1)
let Ze="undefined"==typeof document?null:document
class ts{constructor(t){this.document=t,this.setupUselessElement()}setupUselessElement(){this.uselessElement=this.document.createElement("div")}createElement(t,e){let s,i
if(e?(s=e.namespaceURI===qe||"svg"===t,i=Je[e.tagName]):(s="svg"===t,i=!1),s&&!i){if(Qe[t])throw new Error(`Cannot create a ${t} inside an SVG context`)
return this.document.createElementNS(qe,t)}return this.document.createElement(t)}insertBefore(t,e,s){t.insertBefore(e,s)}insertHTMLBefore(t,e,s){return function(t,e,s,i){let r,n=e,a=t,l=s,o=l?l.previousSibling:n.lastChild
if(null===i||""===i)return new Xe(n,null,null)
null===l?(n.insertAdjacentHTML("beforeend",i),r=n.lastChild):l instanceof HTMLElement?(l.insertAdjacentHTML("beforebegin",i),r=l.previousSibling):(n.insertBefore(a,l),a.insertAdjacentHTML("beforebegin",i),r=a.previousSibling,n.removeChild(a))
let h=o?o.nextSibling:n.firstChild
return new Xe(n,h,r)}(this.uselessElement,t,e,s)}createTextNode(t){return this.document.createTextNode(t)}createComment(t){return this.document.createComment(t)}}var es;(function(t){class e extends ts{createElementNS(t,e){return this.document.createElementNS(t,e)}setAttribute(t,e,s,i=null){i?t.setAttributeNS(i,e,s):t.setAttribute(e,s)}}t.TreeConstruction=e
let s=e
s=R(Ze,s),s=B(Ze,s,qe),t.DOMTreeConstruction=s})(es||(es={}))
class ss extends ts{constructor(t){super(t),this.document=t,this.namespace=null}setAttribute(t,e,s){t.setAttribute(e,s)}removeAttribute(t,e){t.removeAttribute(e)}insertAfter(t,e,s){this.insertBefore(t,e,s.nextSibling)}}let is=ss
is=R(Ze,is)
var rs=is=B(Ze,is,qe)
const ns=es.DOMTreeConstruction,as=["javascript:","vbscript:"],ls=["A","BODY","LINK","IMG","IFRAME","BASE","FORM"],os=["EMBED"],hs=["href","src","background","action"],us=["src"],cs={INPUT:{form:!0,autocorrect:!0,list:!0},SELECT:{form:!0},OPTION:{form:!0},TEXTAREA:{form:!0},LABEL:{form:!0},FIELDSET:{form:!0},LEGEND:{form:!0},OBJECT:{form:!0}}
class ps{constructor(t){this.attribute=t}}class ds extends ps{set(t,e,s){let i=U(e)
if(null!==i){var r=this.attribute
let e=r.name,s=r.namespace
t.__setAttribute(e,i,s)}}update(t,e){let s=U(t)
var i=this.attribute
let r=i.element,n=i.name
null===s?r.removeAttribute(n):r.setAttribute(n,s)}}class ms extends ps{set(t,e,s){if(null!==e&&void 0!==e){let s=this.attribute.name
this.value=e,t.__setProperty(s,e)}}update(t,e){var s=this.attribute
let i=s.element,r=s.name
this.value!==t&&(i[r]=this.value=t,null!==t&&void 0!==t||this.removeAttribute())}removeAttribute(){var t=this.attribute
let e=t.element,s=t.name,i=t.namespace
i?e.removeAttributeNS(i,s):e.removeAttribute(s)}}class gs extends ms{set(t,e,s){var i=this.attribute
let r=j(s,i.element,i.name,e)
super.set(t,r,s)}update(t,e){var s=this.attribute
let i=j(e,s.element,s.name,t)
super.update(i,e)}}class fs extends ds{set(t,e,s){var i=this.attribute
let r=j(s,i.element,i.name,e)
super.set(t,r,s)}update(t,e){var s=this.attribute
let i=j(e,s.element,s.name,t)
super.update(i,e)}}class bs extends ms{set(t,e){t.__setProperty("value",E(e))}update(t){let e=this.attribute.element,s=e.value,i=E(t)
s!==i&&(e.value=i)}}class ys extends ms{set(t,e){null!==e&&void 0!==e&&!1!==e&&t.__setProperty("selected",!0)}update(t){let e=this.attribute.element
e.selected=!!t}}class vs{constructor(t,e,s,i){this.slots=t,this.callerScope=e,this.evalScope=s,this.partialMap=i}static root(t,e=0){let s=new Array(e+1)
for(let i=0;i<=e;i++)s[i]=Wt
return new vs(s,null,null,null).init({self:t})}static sized(t=0){let e=new Array(t+1)
for(let s=0;s<=t;s++)e[s]=Wt
return new vs(e,null,null,null)}init({self:t}){return this.slots[0]=t,this}getSelf(){return this.get(0)}getSymbol(t){return this.get(t)}getBlock(t){return this.get(t)}getEvalScope(){return this.evalScope}getPartialMap(){return this.partialMap}bind(t,e){this.set(t,e)}bindSelf(t){this.set(0,t)}bindSymbol(t,e){this.set(t,e)}bindBlock(t,e){this.set(t,e)}bindEvalScope(t){this.evalScope=t}bindPartialMap(t){this.partialMap=t}bindCallerScope(t){this.callerScope=t}getCallerScope(){return this.callerScope}child(){return new vs(this.slots.slice(),this.callerScope,this.evalScope,this.partialMap)}get(t){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
return this.slots[t]}set(t,e){if(t>=this.slots.length)throw new RangeError(`BUG: cannot get $${t} from scope; length=${this.slots.length}`)
this.slots[t]=e}}class ks{constructor(){this.scheduledInstallManagers=[],this.scheduledInstallModifiers=[],this.scheduledUpdateModifierManagers=[],this.scheduledUpdateModifiers=[],this.createdComponents=[],this.createdManagers=[],this.updatedComponents=[],this.updatedManagers=[],this.destructors=[]}didCreate(t,e){this.createdComponents.push(t),this.createdManagers.push(e)}didUpdate(t,e){this.updatedComponents.push(t),this.updatedManagers.push(e)}scheduleInstallModifier(t,e){this.scheduledInstallManagers.push(e),this.scheduledInstallModifiers.push(t)}scheduleUpdateModifier(t,e){this.scheduledUpdateModifierManagers.push(e),this.scheduledUpdateModifiers.push(t)}didDestroy(t){this.destructors.push(t)}commit(){let t=this.createdComponents,e=this.createdManagers
for(let h=0;h<t.length;h++){let s=t[h]
e[h].didCreate(s)}let s=this.updatedComponents,i=this.updatedManagers
for(let h=0;h<s.length;h++){let t=s[h]
i[h].didUpdate(t)}let r=this.destructors
for(let h=0;h<r.length;h++)r[h].destroy()
let n=this.scheduledInstallManagers,a=this.scheduledInstallModifiers
for(let h=0;h<n.length;h++){let t=n[h],e=a[h]
t.install(e)}let l=this.scheduledUpdateModifierManagers,o=this.scheduledUpdateModifiers
for(let h=0;h<l.length;h++){let t=l[h],e=o[h]
t.update(e)}}}class Ss{constructor({appendOperations:t,updateOperations:e}){this._transaction=null,this.appendOperations=t,this.updateOperations=e}toConditionalReference(t){return new Qt(t)}getAppendOperations(){return this.appendOperations}getDOM(){return this.updateOperations}getIdentity(t){return n(t)+""}begin(){this._transaction=new ks}get transaction(){return this._transaction}didCreate(t,e){this.transaction.didCreate(t,e)}didUpdate(t,e){this.transaction.didUpdate(t,e)}scheduleInstallModifier(t,e){this.transaction.scheduleInstallModifier(t,e)}scheduleUpdateModifier(t,e){this.transaction.scheduleUpdateModifier(t,e)}didDestroy(t){this.transaction.didDestroy(t)}commit(){let t=this.transaction
this._transaction=null,t.commit()}attributeFor(t,e,s,i=null){return V(t,e)}}class ws{constructor(t){this.trusting=t}retry(t,e){let s=this.bounds,i=s.parentElement(),r=D(s),n=Ts.forInitialRender(t,{element:i,nextSibling:r})
return this.trusting?n.__appendTrustingDynamicContent(e):n.__appendCautiousDynamicContent(e)}}class _s{constructor(t){this.inner=t,this.bounds=t.bounds}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}update(t,e){let s=this.inner=this.inner.update(t,e)
return this.bounds=s.bounds,this}}class Es extends ws{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
if(e===s)return this
if(A(e)||C(e))return this.retry(t,e)
let i
if((i=x(e)?"":O(e)?e:String(e))!==s){this.bounds.firstNode().nodeValue=this.lastValue=i}return this}}class xs extends ws{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){return e===this.lastValue?this:this.retry(t,e)}}class Cs extends ws{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
return e===s?this:C(e)&&e.toHTML()===s.toHTML()?(this.lastValue=e,this):this.retry(t,e)}}class As extends ws{constructor(t,e,s){super(s),this.bounds=t,this.lastValue=e}update(t,e){let s=this.lastValue
if(e===s)return this
return function(t){return x(t)?"":O(t)?t:C(t)?t.toHTML():A(t)?t:String(t)}(e)===s?this:this.retry(t,e)}}class Ns{constructor(t){this.node=t}firstNode(){return this.node}}class Os{constructor(t){this.node=t}lastNode(){return this.node}}class Ts{constructor(t,e,s){this.constructing=null,this.operations=null,this.cursorStack=new st,this.blockStack=new st,this.pushElement(e,s),this.env=t,this.dom=t.getAppendOperations(),this.updateOperations=t.getDOM()}static forInitialRender(t,e){let s=new this(t,e.element,e.nextSibling)
return s.pushSimpleBlock(),s}static resume(t,e,s){let i=new this(t,e.parentElement(),s)
return i.pushSimpleBlock(),i.pushBlockTracker(e),i}get element(){return this.cursorStack.current.element}get nextSibling(){return this.cursorStack.current.nextSibling}expectConstructing(t){return this.constructing}block(){return this.blockStack.current}popElement(){this.cursorStack.pop(),this.cursorStack.current}pushSimpleBlock(){return this.pushBlockTracker(new Ls(this.element))}pushUpdatableBlock(){return this.pushBlockTracker(new Bs(this.element))}pushBlockList(t){return this.pushBlockTracker(new Rs(this.element,t))}pushBlockTracker(t,e=!1){let s=this.blockStack.current
return null!==s&&(s.newDestroyable(t),e||s.didAppendBounds(t)),this.__openBlock(),this.blockStack.push(t),t}popBlock(){return this.block().finalize(this),this.__closeBlock(),this.blockStack.pop()}__openBlock(){}__closeBlock(){}openElement(t){let e=this.__openElement(t)
return this.constructing=e,e}__openElement(t){return this.dom.createElement(t,this.element)}flushElement(){let t=this.element,e=this.constructing
this.__flushElement(t,e),this.constructing=null,this.operations=null,this.pushElement(e,null),this.didOpenElement(e)}__flushElement(t,e){this.dom.insertBefore(t,e,this.nextSibling)}closeElement(){this.willCloseElement(),this.popElement()}pushRemoteElement(t,e,s=null){this.__pushRemoteElement(t,e,s)}__pushRemoteElement(t,e,s){this.pushElement(t,s)
let i=new Ds(t)
this.pushBlockTracker(i,!0)}popRemoteElement(){this.popBlock(),this.popElement()}pushElement(t,e){this.cursorStack.push(new Ye(t,e))}didAddDestroyable(t){this.block().newDestroyable(t)}didAppendBounds(t){return this.block().didAppendBounds(t),t}didAppendNode(t){return this.block().didAppendNode(t),t}didOpenElement(t){return this.block().openElement(t),t}willCloseElement(){this.block().closeElement()}appendText(t){return this.didAppendNode(this.__appendText(t))}__appendText(t){let e=this.dom,s=this.element,i=this.nextSibling,r=e.createTextNode(t)
return e.insertBefore(s,r,i),r}__appendNode(t){return this.dom.insertBefore(this.element,t,this.nextSibling),t}__appendFragment(t){let e=t.firstChild
if(e){let s=function(t,e,s){return new Xe(t,e,s)}(this.element,e,t.lastChild)
return this.dom.insertBefore(this.element,t,this.nextSibling),s}return T(this.element,this.__appendComment(""))}__appendHTML(t){return this.dom.insertHTMLBefore(this.element,this.nextSibling,t)}appendTrustingDynamicContent(t){let e=new _s(this.__appendTrustingDynamicContent(t))
return this.didAppendBounds(e),e}__appendTrustingDynamicContent(t){if(O(t))return this.trustedContent(t)
if(x(t))return this.trustedContent("")
if(C(t))return this.trustedContent(t.toHTML())
if(N(t)){let e=this.__appendFragment(t)
return new xs(e,t,!0)}if(A(t)){let e=this.__appendNode(t)
return new xs(T(this.element,e),e,!0)}return this.trustedContent(String(t))}appendCautiousDynamicContent(t){let e=new _s(this.__appendCautiousDynamicContent(t))
return this.didAppendBounds(e.bounds),e}__appendCautiousDynamicContent(t){if(O(t))return this.untrustedContent(t)
if(x(t))return this.untrustedContent("")
if(N(t)){let e=this.__appendFragment(t)
return new xs(e,t,!1)}if(A(t)){let e=this.__appendNode(t)
return new xs(T(this.element,e),e,!1)}if(C(t)){let e=t.toHTML(),s=this.__appendHTML(e)
return new Cs(s,t,!1)}return this.untrustedContent(String(t))}trustedContent(t){let e=this.__appendHTML(t)
return new As(e,t,!0)}untrustedContent(t){let e=this.__appendText(t),s=T(this.element,e)
return new Es(s,t,!1)}appendComment(t){return this.didAppendNode(this.__appendComment(t))}__appendComment(t){let e=this.dom,s=this.element,i=this.nextSibling,r=e.createComment(t)
return e.insertBefore(s,r,i),r}__setAttribute(t,e,s){this.dom.setAttribute(this.constructing,t,e,s)}__setProperty(t,e){this.constructing[t]=e}setStaticAttribute(t,e,s){this.__setAttribute(t,e,s)}setDynamicAttribute(t,e,s,i){let r=this.constructing,n=new(this.env.attributeFor(r,t,s,i))({element:r,name:t,namespace:i||null})
return n.set(this,e,this.env),n}}class Ls{constructor(t){this.parent=t,this.first=null,this.last=null,this.destroyables=null,this.nesting=0}destroy(){let t=this.destroyables
if(t&&t.length)for(let e=0;e<t.length;e++)t[e].destroy()}parentElement(){return this.parent}firstNode(){return this.first&&this.first.firstNode()}lastNode(){return this.last&&this.last.lastNode()}openElement(t){this.didAppendNode(t),this.nesting++}closeElement(){this.nesting--}didAppendNode(t){0===this.nesting&&(this.first||(this.first=new Ns(t)),this.last=new Os(t))}didAppendBounds(t){0===this.nesting&&(this.first||(this.first=t),this.last=t)}newDestroyable(t){this.destroyables=this.destroyables||[],this.destroyables.push(t)}finalize(t){this.first||t.appendComment("")}}class Ds extends Ls{destroy(){super.destroy(),D(this)}}class Bs extends Ls{reset(t){let e=this.destroyables
if(e&&e.length)for(let i=0;i<e.length;i++)t.didDestroy(e[i])
let s=D(this)
return this.first=null,this.last=null,this.destroyables=null,this.nesting=0,s}}class Rs{constructor(t,e){this.parent=t,this.boundList=e,this.parent=t,this.boundList=e}destroy(){this.boundList.forEachNode(t=>t.destroy())}parentElement(){return this.parent}firstNode(){let t=this.boundList.head()
return t&&t.firstNode()}lastNode(){let t=this.boundList.tail()
return t&&t.lastNode()}openElement(t){}closeElement(){}didAppendNode(t){}didAppendBounds(t){}newDestroyable(t){}finalize(t){}}class Fs{constructor(t,e,{alwaysRevalidate:s=!1}){this.frameStack=new st,this.env=t,this.constants=e.constants,this.dom=t.getDOM(),this.alwaysRevalidate=s}execute(t,e){let s=this.frameStack
for(this.try(t,e);;){if(s.isEmpty())break
let t=this.frame.nextStatement()
null!==t?t.evaluate(this):this.frameStack.pop()}}get frame(){return this.frameStack.current}goto(t){this.frame.goto(t)}try(t,e){this.frameStack.push(new zs(this,t,e))}throw(){this.frame.handleException(),this.frameStack.pop()}}class Ms extends Ut{constructor(t,e,s,i){super(),this.start=t,this.state=e,this.type="block",this.next=null,this.prev=null,this.children=i,this.bounds=s}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}evaluate(t){t.try(this.children,null)}destroy(){this.bounds.destroy()}didDestroy(){this.state.env.didDestroy(this.bounds)}}class Ps extends Ms{constructor(t,e,s,i){super(t,e,s,i),this.type="try",this.tag=this._tag=yt.create(ct)}didInitializeChildren(){this._tag.inner.update(c(this.children))}evaluate(t){t.try(this.children,this)}handleException(){let t=this.state,e=this.bounds,s=this.children,i=this.start,r=this.prev,n=this.next
s.clear()
let a=Ts.resume(t.env,e,e.reset(t.env)),l=Us.resume(t,a),o=new rt
l.execute(i,e=>{e.stack=Hs.restore(t.stack),e.updatingOpcodeStack.push(o),e.updateWith(this),e.updatingOpcodeStack.push(s)}),this.prev=r,this.next=n}}class Is{constructor(t,e){this.opcode=t,this.marker=e,this.didInsert=!1,this.didDelete=!1,this.map=t.map,this.updating=t.children}insert(t,e,s,i){let r=this.map,n=this.opcode,a=this.updating,l=null,o=null
l=i?(o=r[i]).bounds.firstNode():this.marker
let h=n.vmForInsertion(l),u=null,c=n.start
h.execute(c,i=>{r[t]=u=i.iterate(s,e),i.updatingOpcodeStack.push(new rt),i.updateWith(u),i.updatingOpcodeStack.push(u.children)}),a.insertBefore(u,o),this.didInsert=!0}retain(t,e,s){}move(t,e,s,i){let r=this.map,n=this.updating,a=r[t],l=r[i]||null
i?L(a,l.firstNode()):L(a,this.marker),n.remove(a),n.insertBefore(a,l)}delete(t){let e=this.map,s=e[t]
s.didDestroy(),D(s),this.updating.remove(s),delete e[t],this.didDelete=!0}done(){this.opcode.didInitializeChildren(this.didInsert||this.didDelete)}}class js extends Ms{constructor(t,e,s,i,r){super(t,e,s,i),this.type="list-block",this.map=a(),this.lastIterated=1,this.artifacts=r
let n=this._tag=yt.create(ct)
this.tag=p([r.tag,n])}didInitializeChildren(t=!0){this.lastIterated=this.artifacts.tag.value(),t&&this._tag.inner.update(c(this.children))}evaluate(t){let e=this.artifacts,s=this.lastIterated
if(!e.tag.validate(s)){let s=this.bounds,i=t.dom,r=i.createComment("")
i.insertAfter(s.parentElement(),r,s.lastNode())
let n=new Is(this,r)
new At({target:n,artifacts:e}).sync(),this.parentElement().removeChild(r)}super.evaluate(t)}vmForInsertion(t){let e=this.bounds,s=this.state,i=Ts.forInitialRender(s.env,{element:e.parentElement(),nextSibling:t})
return Us.resume(s,i)}}class zs{constructor(t,e,s){this.vm=t,this.ops=e,this.exceptionHandler=s,this.vm=t,this.ops=e,this.current=e.head()}goto(t){this.current=t}nextStatement(){let t=this.current,e=this.ops
return t&&(this.current=e.nextNode(t)),t}handleException(){this.exceptionHandler&&this.exceptionHandler.handleException()}}class Vs{constructor(t,e,s,i){this.env=t,this.program=e,this.updating=s,this.bounds=i}rerender({alwaysRevalidate:t=!1}={alwaysRevalidate:!1}){let e=this.env,s=this.program,i=this.updating
new Fs(e,s,{alwaysRevalidate:t}).execute(i,this)}parentElement(){return this.bounds.parentElement()}firstNode(){return this.bounds.firstNode()}lastNode(){return this.bounds.lastNode()}handleException(){throw"this should never happen"}destroy(){this.bounds.destroy(),D(this.bounds)}}class Hs{constructor(t,e,s){this.stack=t,this.fp=e,this.sp=s}static empty(){return new this([],0,-1)}static restore(t){return new this(t.slice(),0,t.length-1)}push(t){this.stack[++this.sp]=t}dup(t=this.sp){this.push(this.stack[t])}pop(t=1){let e=this.stack[this.sp]
return this.sp-=t,e}peek(t=0){return this.stack[this.sp-t]}get(t,e=this.fp){return this.stack[e+t]}set(t,e,s=this.fp){this.stack[s+e]=t}slice(t,e){return this.stack.slice(t,e)}capture(t){let e=this.sp+1,s=e-t
return this.stack.slice(s,e)}reset(){this.stack.length=0}toArray(){return this.stack.slice(this.fp,this.sp+1)}}class Us{constructor(t,e,s,i,r){this.program=t,this.env=e,this.elementStack=r,this.dynamicScopeStack=new st,this.scopeStack=new st,this.updatingOpcodeStack=new st,this.cacheGroups=new st,this.listBlockStack=new st,this.stack=Hs.empty(),this._pc=-1,this.ra=-1,this.currentOpSize=0,this.s0=null,this.s1=null,this.t0=null,this.t1=null,this.v0=null,this.env=e,this.heap=t.heap,this.constants=t.constants,this.elementStack=r,this.scopeStack.push(s),this.dynamicScopeStack.push(i)}get pc(){return this._pc}set pc(t){this._pc=t}get fp(){return this.stack.fp}set fp(t){this.stack.fp=t}get sp(){return this.stack.sp}set sp(t){this.stack.sp=t}fetch(t){this.stack.push(this[$t[t]])}load(t){this[$t[t]]=this.stack.pop()}fetchValue(t){return this[$t[t]]}loadValue(t,e){this[$t[t]]=e}pushFrame(){this.stack.push(this.ra),this.stack.push(this.fp),this.fp=this.sp-1}popFrame(){this.sp=this.fp-1,this.ra=this.stack.get(0),this.fp=this.stack.get(1)}goto(t){let e=this.pc+t-this.currentOpSize
this.pc=e}call(t){this.ra=this.pc,this.pc=this.heap.getaddr(t)}returnTo(t){let e=this.pc+t-this.currentOpSize
this.ra=e}return(){this.pc=this.ra}static initial(t,e,s,i,r,n,a){let l=t.heap.scopesizeof(a),o=vs.root(s,l),h=new Us(t,e,o,r,n)
return h.pc=h.heap.getaddr(a),h.updatingOpcodeStack.push(new rt),h}static resume({program:t,env:e,scope:s,dynamicScope:i},r){return new Us(t,e,s,i,r)}capture(t){return{env:this.env,program:this.program,dynamicScope:this.dynamicScope(),scope:this.scope(),stack:this.stack.capture(t)}}beginCacheGroup(){this.cacheGroups.push(this.updating().tail())}commitCacheGroup(){let t=new Re("END"),e=this.updating(),s=this.cacheGroups.pop(),i=s?e.nextNode(s):e.head(),r=e.tail(),n=c(new nt(i,r)),a=new De(n,t)
e.insertBefore(a,i),e.append(new Be(a)),e.append(t)}enter(t){let e=new rt,s=this.capture(t),i=this.elements().pushUpdatableBlock(),r=new Ps(this.heap.gethandle(this.pc),s,i,e)
this.didEnter(r)}iterate(t,e){let s=this.stack
s.push(e),s.push(t)
let i=this.capture(2),r=this.elements().pushUpdatableBlock()
return new Ps(this.heap.gethandle(this.pc),i,r,new rt)}enterItem(t,e){this.listBlock().map[t]=e,this.didEnter(e)}enterList(t){let e=new rt,s=this.capture(0),i=this.elements().pushBlockList(e),r=this.stack.peek().artifacts,n=this.pc+t-this.currentOpSize,a=this.heap.gethandle(n),l=new js(a,s,i,e,r)
this.listBlockStack.push(l),this.didEnter(l)}didEnter(t){this.updateWith(t),this.updatingOpcodeStack.push(t.children)}exit(){this.elements().popBlock(),this.updatingOpcodeStack.pop()
this.updating().tail().didInitializeChildren()}exitList(){this.exit(),this.listBlockStack.pop()}updateWith(t){this.updating().append(t)}listBlock(){return this.listBlockStack.current}updating(){return this.updatingOpcodeStack.current}elements(){return this.elementStack}scope(){return this.scopeStack.current}dynamicScope(){return this.dynamicScopeStack.current}pushChildScope(){this.scopeStack.push(this.scope().child())}pushDynamicScope(){let t=this.dynamicScope().child()
return this.dynamicScopeStack.push(t),t}pushRootScope(t,e){let s=vs.sized(t)
return e&&s.bindCallerScope(this.scope()),this.scopeStack.push(s),s}pushScope(t){this.scopeStack.push(t)}popScope(){this.scopeStack.pop()}popDynamicScope(){this.dynamicScopeStack.pop()}newDestroyable(t){this.elements().didAddDestroyable(t)}getSelf(){return this.scope().getSelf()}referenceForSymbol(t){return this.scope().getSymbol(t)}execute(t,e){this.pc=this.heap.getaddr(t),e&&e(this)
let s
for(;;)if((s=this.next()).done)break
return s.value}next(){let t,e=this.env,s=this.program,i=this.updatingOpcodeStack,r=this.elementStack,n=this.nextStatement()
return null!==n?(Vt.evaluate(this,n,n.type),t={done:!1,value:null}):(this.stack.reset(),t={done:!0,value:new Vs(e,s,i.pop(),r.popBlock())}),t}nextStatement(){let t=this.pc,e=this.program
if(-1===t)return null
let s=this.program.opcode(t).size,i=this.currentOpSize=s
return this.pc+=i,e.opcode(t)}bindDynamicScope(t){let e=this.dynamicScope()
for(let s=t.length-1;s>=0;s--){let i=this.constants.getString(t[s])
e.set(i,this.stack.pop())}}}class $s{constructor(t){this.vm=t}next(){return this.vm.next()}}let Gs=0
class Ys{constructor(t,e){this.options=t,this.parsedLayout=e,this.layout=null,this.partial=null
let s=e.block
this.symbols=s.symbols,this.hasEval=s.hasEval,this.statements=s.statements,this.referrer=e.referrer,this.id=e.id||`client-${Gs++}`}renderLayout(t){let e=t.env,s=t.self,i=t.dynamicScope
var r=t.args
let n=void 0===r?Ce:r,a=t.builder,l=this.asLayout().compile(),o=Us.initial(this.options.program,e,s,n,i,a,l)
return new $s(o)}asLayout(){return this.layout?this.layout:this.layout=$(this.parsedLayout,this.options,!1)}asPartial(){return this.partial?this.partial:this.partial=$(this.parsedLayout,this.options,!0)}}class Xs{get(t){return qs.create(this,t)}}class Ws extends Xs{constructor(){super(...arguments),this._lastRevision=null,this._lastValue=null}value(){let t=this.tag,e=this._lastRevision,s=this._lastValue
return e&&t.validate(e)||(s=this._lastValue=this.compute(),this._lastRevision=t.value()),s}}class Ks extends wt{constructor(){super(...arguments),this.children=a()}get(t){let e=this.children[t]
return e||(e=this.children[t]=new Js(this.inner,t)),e}}class qs extends Ws{static create(t,e){return o(t)?new Js(t.value(),e):new Qs(t,e)}get(t){return new Qs(this,t)}}class Js extends qs{constructor(t,e){super(),this._parentValue=t,this._propertyKey=e,this.tag=b(t,e)}compute(){return this._parentValue[this._propertyKey]}}class Qs extends qs{constructor(t,e){super()
let s=t.tag,i=yt.create(ct)
this._parentReference=t,this._parentObjectTag=i,this._propertyKey=e,this.tag=p([s,i])}compute(){let t=this._parentReference,e=this._parentObjectTag,s=this._propertyKey,i=t.value()
return e.inner.update(b(i,s)),"string"==typeof i&&"length"===s?i.length:"object"==typeof i&&i?i[s]:void 0}}class Zs extends Xs{constructor(t){super(),this.tag=mt.create(),this._value=t}value(){return this._value}update(t){t!==this._value&&(this.tag.inner.dirty(),this._value=t)}}class ti{constructor(t,e,s){let i=t.ComponentClass,r=t.name
this.args=e
let n={debugName:r,args:this.namedArgsSnapshot()}
v(n,s),this.component=i.create(n)}get tag(){return this.args.tag}namedArgsSnapshot(){return Object.freeze(this.args.named.value())}}class ei{static create(t){return new ei(t)}constructor(t){this.env=t.env}prepareArgs(t,e){return null}getCapabilities(t){return t.capabilities}getLayout({name:t,layout:e},s){return s.compileTemplate(t,e)}create(t,e,s,i,r,n){let a=y(this.env)
return new ti(e,s.capture(),a)}getSelf(t){return new Ks(t.component)}didCreateElement(t,e){}didRenderLayout(t,e){t.component.bounds=new jt(e)}didCreate(t){t&&t.component.didInsertElement()}getTag({tag:t}){return t}update(t,e){t.component.args=t.namedArgsSnapshot()}didUpdateLayout(){}didUpdate({component:t}){t.didUpdate()}getDestructor(t){return t.component}}class si{constructor(t,e){this.cache=G,this.inner=null,this.chains=null,this.lastParentValue=G,this._guid=0,this.tag=pt,this.parent=t,this.property=e}value(){let t=this.lastParentValue,e=this.property,s=this.inner,i=this._parentValue()
if(null===i||void 0===i)return this.cache=void 0
if(t===i)s=this.inner
else{let t="object"==typeof i?ui.for(i).referenceTypeFor(e):ci
s=this.inner=new t(i,e,this)}return this.cache=s.value()}get(t){let e=this._getChains()
return t in e?e[t]:e[t]=new si(this,t)}label(){return"[reference Direct]"}_getChains(){return this.chains?this.chains:this.chains=a()}_parentValue(){let t=this.parent.value()
return this.lastParentValue=t,t}}class ii{constructor(t){this.chains=a(),this.tag=pt,this.object=t}value(){return this.object}update(t){this.object=t}get(t){let e=this.chains
return t in e?e[t]:e[t]=new si(this,t)}chainFor(t){let e=this.chains
return t in e?e[t]:null}path(t){return this.referenceFromParts(t.split("."))}referenceFromParts(t){return t.reduce((t,e)=>t.get(e),this)}label(){return"[reference Root]"}}const ri={destroy(){}}
class ni{constructor(t,e){this.tag=pt,this.parent=t}chain(){return ri}notify(){}value(){return this.parent[this.property]}get(t){return new ni(this.parent[this.property],t)}}class ai{constructor(t){this.tag=pt,this.inner=t}update(t){this.inner=t}chain(){return ri}notify(){}value(){return this.inner}referenceFromParts(t){throw new Error("Not implemented")}chainFor(t){throw new Error("Not implemented")}get(t){return new ni(this.inner,t)}}class li{constructor(t){this.object=t}root(){return new ai(this.object)}}const oi="df8be4c8-4e89-44e2-a8f9-550c8dacdca7",hi=Object.hasOwnProperty
class ui{constructor(t,{RootReferenceFactory:e,DefaultPathReferenceFactory:s}){this.references=null,this.slots=null,this.referenceTypes=null,this.propertyMetadata=null,this.object=t,this.RootReferenceFactory=e||ii,this.DefaultPathReferenceFactory=s||ci}static for(t){if(null===t||void 0===t)return new ui(t,{})
if(hi.call(t,"_meta")&&t._meta)return t._meta
if(!Object.isExtensible(t))return new li(t)
let e=ui
if(t.constructor&&t.constructor[oi]){e=t.constructor[oi].InstanceMetaConstructor}else t[oi]&&(e=t[oi].InstanceMetaConstructor)
return t._meta=new e(t,{})}static exists(t){return"object"==typeof t&&t._meta}static metadataForProperty(t){return null}addReference(t,e){let s=this.references=this.references||a();(s[t]=s[t]||new et).add(e)}addReferenceTypeFor(t,e){this.referenceTypes=this.referenceTypes||a(),this.referenceTypes[t]=e}referenceTypeFor(t){return this.referenceTypes?this.referenceTypes[t]||ci:ci}removeReference(t,e){if(!this.references)return
this.references[t].delete(e)}getReferenceTypes(){return this.referenceTypes=this.referenceTypes||a(),this.referenceTypes}referencesFor(t){return this.references?this.references[t]:null}getSlots(){return this.slots=this.slots||a()}root(){return this.rootCache=this.rootCache||new this.RootReferenceFactory(this.object)}}class ci{constructor(t,e,s){this.tag=pt,this.object=t,this.property=e}value(){return this.object[this.property]}label(){return"[reference Property]"}}class pi{constructor(t,e){this._registry=t,this._resolver=e}register(t,e,s){let i=this._toAbsoluteSpecifier(t)
this._registry.register(i,e,s)}registration(t){let e=this._toAbsoluteSpecifier(t)
return this._registry.registration(e)}unregister(t){let e=this._toAbsoluteSpecifier(t)
this._registry.unregister(e)}registerOption(t,e,s){let i=this._toAbsoluteOrTypeSpecifier(t)
this._registry.registerOption(i,e,s)}registeredOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOption(s,e)}registeredOptions(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredOptions(e)}unregisterOption(t,e){let s=this._toAbsoluteOrTypeSpecifier(t)
this._registry.unregisterOption(s,e)}registerInjection(t,e,s){let i=this._toAbsoluteOrTypeSpecifier(t),r=this._toAbsoluteSpecifier(s)
this._registry.registerInjection(i,e,r)}registeredInjections(t){let e=this._toAbsoluteOrTypeSpecifier(t)
return this._registry.registeredInjections(e)}_toAbsoluteSpecifier(t,e){return this._resolver.identify(t,e)}_toAbsoluteOrTypeSpecifier(t){return function(t){return-1===t.indexOf(":")}(t)?t:this._toAbsoluteSpecifier(t)}}class di{constructor(t=null){this.bucket=t?s({},t):{}}get(t){return this.bucket[t]}set(t,e){return this.bucket[t]=e}child(){return new di(this.bucket)}}class mi{constructor(t,e){this.position=0,this.array=t,this.keyFor=e}isEmpty(){return 0===this.array.length}next(){let t=this.position,e=this.array,s=this.keyFor
if(t>=e.length)return null
let i=e[t],r=s(i,t),n=t
return this.position++,{key:r,value:i,memo:n}}}class gi{constructor(t,e,s){this.position=0,this.keys=t,this.values=e,this.keyFor=s}isEmpty(){return 0===this.keys.length}next(){let t=this.position,e=this.keys,s=this.values,i=this.keyFor
if(t>=e.length)return null
let r=s[t],n=e[t],a=i(r,n)
return this.position++,{key:a,value:r,memo:n}}}class fi{isEmpty(){return!0}next(){throw new Error("Cannot call next() on an empty iterator")}}const bi=new fi
class yi{constructor(t,e){this.tag=t.tag,this.ref=t,this.keyFor=e}iterate(){let t=this.ref,e=this.keyFor,s=t.value()
if(Array.isArray(s))return s.length>0?new mi(s,e):bi
if(void 0===s||null===s)return bi
if(void 0!==s.forEach){let t=[]
return s.forEach(function(e){t.push(e)}),t.length>0?new mi(t,e):bi}if("object"==typeof s){let t=Object.keys(s)
return t.length>0?new gi(t,t.map(t=>s[t]),e):bi}throw new Error(`Don't know how to {{#each ${s}}}`)}valueReferenceFor(t){return new Zs(t.value)}updateValueReference(t,e){t.update(e.value)}memoReferenceFor(t){return new Zs(t.memo)}updateMemoReference(t,e){t.update(e.memo)}}const vi={},ki=Object.freeze([])
class Si{constructor(){this.strings=[],this.arrays=[ki],this.tables=[],this.handles=[],this.serializables=[],this.resolved=[],this.floats=[],this.negatives=[]}float(t){let e=this.floats.indexOf(t)
return e>-1?e:this.floats.push(t)-1}negative(t){return this.negatives.push(t)-1}string(t){let e=this.strings.indexOf(t)
return e>-1?e:this.strings.push(t)-1}stringArray(t){let e=new Array(t.length)
for(let s=0;s<t.length;s++)e[s]=this.string(t[s])
return this.array(e)}array(t){if(0===t.length)return 0
let e=this.arrays.indexOf(t)
return e>-1?e:this.arrays.push(t)-1}table(t){let e=this.tables.indexOf(t)
return e>-1?e:this.tables.push(t)-1}handle(t){return this.resolved.push(vi),this.handles.push(t)}serializable(t){let e=this.serializables.indexOf(t)
return e>-1?e:this.serializables.push(t)-1}toPool(){return{strings:this.strings,arrays:this.arrays,tables:this.tables,handles:this.handles,serializables:this.serializables,floats:this.floats,negatives:this.negatives}}}class wi extends Si{constructor(t,e){super(),this.resolver=t,e&&(this.strings=e.strings,this.arrays=e.arrays,this.tables=e.tables,this.handles=e.handles,this.serializables=e.serializables,this.floats=e.floats,this.negatives=e.negatives,this.resolved=this.handles.map(()=>vi))}getFloat(t){return this.floats[t]}getNegative(t){return this.negatives[t]}getString(t){return this.strings[t]}getStringArray(t){let e=this.getArray(t),s=new Array(e.length)
for(let i=0;i<e.length;i++){let t=e[i]
s[i]=this.getString(t)}return s}getArray(t){return this.arrays[t]}getSymbolTable(t){return this.tables[t]}resolveHandle(t){let e=t-1,s=this.resolved[e]
if(s===vi){let t=this.handles[e]
s=this.resolved[e]=this.resolver.resolve(t)}return s}getSerializable(t){return this.serializables[t]}}class _i extends wi{constructor(){super(...arguments),this.others=[]}getOther(t){return this.others[t-1]}other(t){return this.others.push(t)}}class Ei{constructor(t){this.heap=t,this.offset=0}get size(){return 1+((768&this.heap.getbyaddr(this.offset))>>8)}get type(){return 255&this.heap.getbyaddr(this.offset)}get op1(){return this.heap.getbyaddr(this.offset+1)}get op2(){return this.heap.getbyaddr(this.offset+2)}get op3(){return this.heap.getbyaddr(this.offset+3)}}var xi;(function(t){t[t.Allocated=0]="Allocated",t[t.Freed=1]="Freed",t[t.Purged=2]="Purged",t[t.Pointer=3]="Pointer"})(xi||(xi={}))
class Ci{constructor(t){if(this.offset=0,this.handle=0,t){let e=t.buffer,s=t.table,i=t.handle
this.heap=new Uint16Array(e),this.table=s,this.offset=this.heap.length,this.handle=i}else this.heap=new Uint16Array(1048576),this.table=[]}push(t){this.heap[this.offset++]=t}getbyaddr(t){return this.heap[t]}setbyaddr(t,e){this.heap[t]=e}malloc(){this.table.push(this.offset,0)
let t=this.handle
return this.handle+=2,t}finishMalloc(t,e){let s=this.table[t],i=Y(this.offset-s,e,xi.Allocated)
this.table[t+1]=i}size(){return this.offset}getaddr(t){return this.table[t]}gethandle(t){this.table.push(t,Y(0,0,xi.Pointer))
let e=this.handle
return this.handle+=2,e}sizeof(t){return-1}scopesizeof(t){return(1073676288&this.table[t+1])>>16}free(t){let e=this.table[t+1]
this.table[t+1]=X(e,xi.Freed)}compact(){let t=0,e=this.table,s=this.table.length,i=this.heap
for(let r=0;r<s;r+=2){let s=e[r],n=e[r+1],a=65535&n,l=-1&n
if(l!==xi.Purged)if(l===xi.Freed)e[r+1]=X(n,xi.Purged),t+=a
else if(l===xi.Allocated){for(let e=s;e<=r+a;e++)i[e-t]=i[e]
e[r]=s-t}else l===xi.Pointer&&(e[r]=s-t)}this.offset=this.offset-t}capture(){let t=function(t,e,s){if(t instanceof Uint16Array){if(void 0!==t.slice)return t.slice(e,s).buffer
let i=new Uint16Array(s)
for(;e<s;e++)i[e]=t[e]
return i.buffer}return null}(this.heap,0,this.offset)
return{handle:this.handle,table:this.table,buffer:t}}}class Ai{constructor(t=new Si,e=new Ci){this.constants=t,this.heap=e,this._opcode=new Ei(this.heap)}opcode(t){return this._opcode.offset=t,this._opcode}}class Ni extends Ai{}class Oi{constructor(){this.byName=a(),this.byHandle=a()}hasName(t){return t in this.byName}getHandle(t){return this.byName[t]}hasHandle(t){return t in this.byHandle}getByHandle(t){return this.byHandle[t]}register(t,e,s){this.byHandle[t]=s,this.byName[e]=t}}class Ti{constructor(t,e){this.tag=pt,this.parent=t,this.property=e}value(){return this.parent.value()[this.property]}get(t){return new Ti(this,t)}}class Li{constructor(t,e){this.tag=pt,this.helper=t,this.args=e.capture()}value(){let t=this.helper,e=this.args
return t(e.positional.value(),e.named.value())}get(t){return new Ti(this,t)}}class Di{constructor(t){this.owner=t,this.handleLookup=[],this.cache={component:new Oi,template:new Oi,compiledTemplate:new Oi,helper:new Oi,manager:new Oi,modifier:new Oi}}setCompileOptions(t){this.templateOptions=t}lookup(t,e,s){return this.cache[t].hasName(e)?this.cache[t].getHandle(e):null}register(t,e,s){let i=this.cache[t],r=this.handleLookup.length
return this.handleLookup.push(i),this.cache[t].register(r,e,s),r}lookupModifier(t,e){let s=this.lookup("modifier",t)
if(null===s)throw new Error(`Modifier for ${t} not found.`)
return s}compileTemplate(t,e){if(!this.cache.compiledTemplate.hasName(t)){let s=this.resolve(e),i=s.block,r=s.meta,n=s.id,a=JSON.parse(i),l=new Ys(this.templateOptions,{id:n,block:a,referrer:r}).asLayout(),o={handle:l.compile(),symbolTable:l.symbolTable}
return this.register("compiledTemplate",t,o),o}let s=this.lookup("compiledTemplate",t)
return this.resolve(s)}registerHelper(t,e){return this.register("helper",t,(t,s)=>new Li(e,s))}registerInternalHelper(t,e){this.register("helper",t,e)}registerComponent(t,e,s,i){let r=this.registerTemplate(e,i),n=this.managerFor(r.meta.managerId),a=new Ft(t,n,s,r.handle)
return this.register("component",t,a)}lookupComponentHandle(t,e){return this.cache.component.hasName(t)||this.lookupComponent(t,e),this.lookup("component",t,e)}managerFor(t="main"){let e
if(this.cache.manager.hasName(t)){let e=this.cache.manager.getHandle(t)
return this.cache.manager.getByHandle(e)}{let s=this.owner.rootName
if(!(e=this.owner.lookup(`component-manager:/${s}/component-managers/${t}`)))throw new Error(`No component manager found for ID ${t}.`)
return this.register("manager",t,e),e}}registerTemplate(t,e){return{name:t,handle:this.register("template",t,e),meta:e.meta}}lookupComponent(t,e){let s
if(this.cache.component.hasName(t))s=this.lookup("component",t,e)
else{let i=function(t,e){if(null===t||void 0===t)throw new Error(e)
return t}(this.identifyComponent(t,e),`Could not find the component '${t}'`),r=this.owner.lookup("template",i),n=this.owner.identify("component",i),a=null
a=void 0!==n?this.owner.factoryFor(n):{create:t=>Bt.create(t)},s=this.registerComponent(t,i,a,r)}return this.resolve(s)}lookupHelper(t,e){if(!this.cache.helper.hasName(t)){let s=this.owner,i=`helper:${t}`,r=e.specifier,n=s.identify(i,r)
if(void 0===n)return null
let a=this.owner.lookup(n,e.specifier)
return this.registerHelper(t,a)}return this.lookup("helper",t,e)}lookupPartial(t,e){throw new Error("Partials are not available in Glimmer applications.")}resolve(t){return this.handleLookup[t].getByHandle(t)}identifyComponent(t,e){let s=this.owner,i=`template:${t}`,r=e.specifier,n=s.identify(i,r)
if(void 0===n&&s.identify(`component:${t}`,r))throw new Error(`The component '${t}' is missing a template. All components must have a template. Make sure there is a template.hbs in the component directory.`)
return n}}var Bi={id:"j7SGa6Pm",block:'{"symbols":["root"],"statements":[[4,"each",[[22,["roots"]]],[["key"],["id"]],{"statements":[[4,"in-element",[[21,1,["parent"]]],[["guid","nextSibling"],["%cursor:0%",[21,1,["nextSibling"]]]],{"statements":[[1,[26,"component",[[21,1,["component"]]],null],false]],"parameters":[]},null]],"parameters":[1]},null]],"hasEval":false}',meta:{specifier:"template:/-application/application/src/templates/main"}}
class Ri{constructor(t){this.resolver=t}getComponentDefinition(t){let s=this.resolver.resolve(t)
return e(!!s,`Couldn't find a template for ${t}`),s}getCapabilities(t){let e=this.getComponentDefinition(t),s=e.manager,i=e.state
return s.getCapabilities(i)}getLayout(t){let e=this.getComponentDefinition(t),s=e.manager.getLayout(e,this.resolver)
return{compile:()=>s.handle,symbolTable:s.symbolTable}}lookupHelper(t,e){return this.resolver.lookupHelper(t,e)}lookupModifier(t,e){return this.resolver.lookupModifier(t,e)}lookupComponentSpec(t,e){return this.resolver.lookupComponentHandle(t,e)}lookupPartial(t,e){return this.resolver.lookupPartial(t,e)}}class Fi extends Ss{static create(t={}){return t.document=t.document||self.document,t.appendOperations=t.appendOperations||new ns(t.document),new Fi(t)}constructor(t){super({appendOperations:t.appendOperations,updateOperations:new rs(t.document||document)}),v(this,y(t))
let e=this.resolver=new Di(y(this)),s=this.program=new Ni(new _i(e)),i=new oe,r=new Ri(e)
this.compileOptions={program:s,macros:i,lookup:r,Builder:fe},this.resolver.setCompileOptions(this.compileOptions),e.registerTemplate("main",Bi),e.registerInternalHelper("action",W),e.registerHelper("if",t=>t[0]?t[1]:t[2]),this.uselessAnchor=t.document.createElement("a")}protocolForURL(t){return this.uselessAnchor.href=t,this.uselessAnchor.protocol}iterableFor(t,e){let s
if(!e)throw new Error("Must specify a key for #each")
switch(e){case"@index":s=((t,e)=>String(e))
break
case"@primitive":s=(t=>String(t))
break
default:s=(t=>t[e])}return new yi(t,s)}}class Mi{constructor(t){this._roots=[],this._rootsIndex=0,this._initializers=[],this._initialized=!1,this._rendering=!1,this._rendered=!1,this._scheduled=!1,this._notifiers=[],this.rootName=t.rootName,this.resolver=t.resolver,this.document=t.document||"undefined"!=typeof window&&window.document}renderComponent(t,e,s=null){this._roots.push({id:this._rootsIndex++,component:t,parent:e,nextSibling:s}),this.scheduleRerender()}boot(){this.initialize(),this.env=this.lookup(`environment:/${this.rootName}/main/main`),this._render()}scheduleRerender(){!this._scheduled&&this._rendered&&(this._rendering=!0,this._scheduled=!0,requestAnimationFrame(()=>{this._scheduled=!1,this._rerender(),this._rendering=!1}))}initialize(){this.initRegistry(),this.initContainer()}registerInitializer(t){this._initializers.push(t)}initRegistry(){let t=this._registry=new Pt,e=new pi(this._registry,this.resolver)
t.register(`environment:/${this.rootName}/main/main`,Fi),t.registerOption("helper","instantiate",!1),t.registerOption("template","instantiate",!1),t.register(`document:/${this.rootName}/main/main`,this.document),t.registerOption("document","instantiate",!1),t.registerInjection("environment","document",`document:/${this.rootName}/main/main`),t.registerInjection("component-manager","env",`environment:/${this.rootName}/main/main`)
let s=this._initializers
for(let i=0;i<s.length;i++)s[i].initialize(e)
this._initialized=!0}initContainer(){this._container=new Mt(this._registry,this.resolver),this._container.defaultInjections=(t=>{let e={}
return v(e,this),e})}get mainLayout(){return function({id:t,meta:e,block:i}){let r,n=t||`client-${Gs++}`
return{id:n,meta:e,create:(t,a)=>{let l=a?s({},a,e):e
return r||(r=JSON.parse(i)),new Ys(t,{id:n,block:r,referrer:l})}}}(Bi).create(this.env.compileOptions)}get templateIterator(){let t=this.env,e=this.mainLayout,s=new ii({roots:this._roots}),i=new di,r={element:this.document.body,nextSibling:null}
return e.renderLayout({env:t,self:s,dynamicScope:i,builder:function(t,e){return Ts.forInitialRender(t,e)}(t,r)})}_rerender(){let t=this.env,e=this._result
if(!e)throw new Error("Cannot re-render before initial render has completed")
try{t.begin(),e.rerender(),t.commit(),this._didRender()}catch(t){this._didError(t)}}_render(){let t=this.env,e=this.templateIterator
try{t.begin()
let s
do{s=e.next()}while(!s.done)
t.commit(),this._result=s.value,this._didRender()}catch(t){throw this._didError(t),t}}_didRender(){this._rendered=!0
let t=this._notifiers
this._notifiers=[],t.forEach(t=>t[0]())}_didError(t){let e=this._notifiers
this._notifiers=[],e.forEach(e=>e[1](t))}identify(t,e){return this.resolver.identify(t,e)}factoryFor(t,e){return this._container.factoryFor(this.identify(t,e))}lookup(t,e){return this._container.lookup(this.identify(t,e))}}class Pi{constructor(t,e){this.config=t,this.registry=e}identify(t,e){if(function(t){var e=t.split(":")
let s=e[0],i=e[1]
return!!(s&&i&&0===i.indexOf("/")&&i.split("/").length>3)}(t))return t
let s,i=J(t)
if(e){let t=J(e)
if(K(t)){Q("Specifier must not include a rootName, collection, or namespace when combined with an absolute referrer",void 0===i.rootName&&void 0===i.collection&&void 0===i.namespace),i.rootName=t.rootName,i.collection=t.collection
let e=this._definitiveCollection(i.type)
if(!i.name)return i.namespace=t.namespace,i.name=t.name,this._serializeAndVerify(i)
if(i.namespace=t.namespace?t.namespace+"/"+t.name:t.name,function(t){let e=t.namespace,s=t.collection,i=e.lastIndexOf("/-")
if(i>-1){i+=2
let t=e.indexOf("/",i)
s=e.slice(i,t>-1?t:void 0)}return s}(i)===e&&(s=this._serializeAndVerify(i)))return s
if(e&&(i.namespace+="/-"+e,s=this._serializeAndVerify(i)))return s
i.rootName=i.collection=i.namespace=void 0}else Q('Referrer must either be "absolute" or include a `type` to determine the associated type',t.type),i.collection=this._definitiveCollection(t.type),Q(`'${t.type}' does not have a definitive collection`,i.collection)}if(i.collection||(i.collection=this._definitiveCollection(i.type),Q(`'${i.type}' does not have a definitive collection`,i.collection)),!i.rootName){if(i.rootName=this.config.app.rootName||"app",s=this._serializeAndVerify(i))return s
let t
i.namespace?(t=this.config.addons&&this.config.addons[i.namespace],i.rootName=i.namespace,i.namespace=void 0):(t=this.config.addons&&this.config.addons[i.name],i.rootName=i.name,i.name="main")}return(s=this._serializeAndVerify(i))?s:void 0}retrieve(t){return this.registry.get(t)}resolve(t,e){let s=this.identify(t,e)
if(s)return this.retrieve(s)}_definitiveCollection(t){let e=this.config.types[t]
return Q(`'${t}' is not a recognized type`,e),e.definitiveCollection}_serializeAndVerify(t){let e=q(t)
if(this.registry.has(e))return e}}class Ii{constructor(t={}){this._entries=t}has(t){return t in this._entries}get(t){return this._entries[t]}}var ji=function(t,e,s,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i)
else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,s,a):r(e,s))||a)
return n>3&&a&&Object.defineProperty(e,s,a),a}
const zi={position:"absolute",background:"#61dafb",font:"normal 15px sans-serif","text-align":"center",cursor:"pointer"}
class Vi extends Bt{constructor(){super(...arguments),this.hover=!1}get text(){return this.hover?"*"+this.args.text+"*":this.args.text}get style(){const t=1.3*this.args.size,e=Object.assign({},zi,{top:this.args.y+"px",width:t+"px",height:t+"px",left:this.args.x+"px","border-radius":t/2+"px","line-height":t+"px",background:this.hover?"#ff0":zi.background})
return Object.keys(e).map(t=>`${t}:${e[t]}`).join(";")}enter(){this.hover=!0}leave(){this.hover=!1}}ji([m],Vi.prototype,"hover",void 0),ji([m("args","hover")],Vi.prototype,"text",null),ji([m("args","hover")],Vi.prototype,"style",null)
var Hi=function(t,e,s,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i)
else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,s,a):r(e,s))||a)
return n>3&&a&&Object.defineProperty(e,s,a),a}
const Ui={position:"absolute","transform-origin":"0 0",left:"50%",top:"50%",width:"10px",height:"10px",zoom:".75"}
class $i extends Bt{constructor(){super(...arguments),this.targetSize=25,this.intervalID=null,this.seconds=0,this.elapsed=0,this.style="",this.x=0,this.y=0,this.s=1e3}tick(){this.seconds=this.seconds%10+1}updateRender(){const t=this.elapsed/1e3%10,e="scaleX("+(1+(t>5?10-t:t)/10)/2.1+") scaleY(0.7) translateZ(0.1px)",s=Object.assign({},Ui,{transform:e})
this.style=Object.keys(s).map(t=>`${t}:${s[t]}`).join(";")}didInsertElement(){const t=(new Date).getTime()
this.intervalID=setInterval(this.tick.bind(this),1e3)
const e=()=>{this.elapsed=(new Date).getTime()-t,this.updateRender(),requestAnimationFrame(e)}
requestAnimationFrame(e)}}Hi([m],$i.prototype,"seconds",void 0),Hi([m],$i.prototype,"elapsed",void 0),Hi([m],$i.prototype,"style",void 0)
class Gi extends Bt{get attrs(){let t=this.args.targetSize/2,e=this.args.x-t,s=this.args.y-t,i=this.args.s/2
return{dotX:e-t,dotY:s-t,s:i,size:this.args.targetSize,renderDot:this.args.s<=this.args.targetSize,x1:e,x2:e-i,x3:e+i,y1:s-i/2,y2:s+i/2,y3:s+i/2}}}(function(t,e,s,i){var r,n=arguments.length,a=n<3?e:null===i?i=Object.getOwnPropertyDescriptor(e,s):i
if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,s,i)
else for(var l=t.length-1;l>=0;l--)(r=t[l])&&(a=(n<3?r(a):n>3?r(e,s,a):r(e,s))||a)
n>3&&a&&Object.defineProperty(e,s,a)})([m("args")],Gi.prototype,"attrs",null)
var Yi={"component:/sierpinski-glimmer/components/SierpinskiDot":Vi,"template:/sierpinski-glimmer/components/SierpinskiDot":{id:"PI6QDaG/",block:'{"symbols":[],"statements":[[6,"div"],[11,"style",[20,"style"],null],[11,"onmouseenter",[26,"action",[[22,["enter"]]],null],null],[11,"onmouseleave",[26,"action",[[22,["leave"]]],null],null],[8],[0," "],[1,[20,"text"],false],[9]],"hasEval":false}',meta:{specifier:"template:/sierpinski-glimmer/components/SierpinskiDot"}},"component:/sierpinski-glimmer/components/SierpinskiGlimmer":$i,"template:/sierpinski-glimmer/components/SierpinskiGlimmer":{id:"N2UOKSxQ",block:'{"symbols":[],"statements":[[6,"div"],[11,"style",[20,"style"],null],[8],[0,"\\n    "],[6,"div"],[8],[0,"\\n    "],[5,"SierpinskiTriangle",[],[["@x","@y","@s","@targetSize","@children"],[[20,"x"],[20,"y"],[20,"s"],[20,"targetSize"],[20,"seconds"]]],{"statements":[[0,"\\n        "],[1,[20,"seconds"],false],[0,"\\n    "]],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n"],[9]],"hasEval":false}',meta:{specifier:"template:/sierpinski-glimmer/components/SierpinskiGlimmer"}},"component:/sierpinski-glimmer/components/SierpinskiTriangle":Gi,"template:/sierpinski-glimmer/components/SierpinskiTriangle":{id:"IkstrLL/",block:'{"symbols":["@children","@targetSize"],"statements":[[4,"if",[[22,["attrs","renderDot"]]],null,{"statements":[[0,"    "],[5,"SierpinskiDot",[],[["@x","@y","@size","@text"],[[22,["attrs","dotX"]],[22,["attrs","dotY"]],[21,2,[]],[21,1,[]]]],{"statements":[],"parameters":[]}],[0,"\\n"]],"parameters":[]},{"statements":[[0,"    "],[6,"div"],[8],[0,"\\n        "],[5,"SierpinskiTriangle",[],[["@x","@y","@s","@children","@targetSize"],[[22,["attrs","x1"]],[22,["attrs","y1"]],[22,["attrs","s"]],[21,1,[]],[21,2,[]]]],{"statements":[],"parameters":[]}],[0,"\\n        "],[5,"SierpinskiTriangle",[],[["@x","@y","@s","@children","@targetSize"],[[22,["attrs","x2"]],[22,["attrs","y2"]],[22,["attrs","s"]],[21,1,[]],[21,2,[]]]],{"statements":[],"parameters":[]}],[0,"\\n        "],[5,"SierpinskiTriangle",[],[["@x","@y","@s","@children","@targetSize"],[[22,["attrs","x3"]],[22,["attrs","y3"]],[22,["attrs","s"]],[21,1,[]],[21,2,[]]]],{"statements":[],"parameters":[]}],[0,"\\n    "],[9],[0,"\\n"]],"parameters":[]}]],"hasEval":false}',meta:{specifier:"template:/sierpinski-glimmer/components/SierpinskiTriangle"}}},Xi={app:{name:"sierpinski-glimmer",rootName:"sierpinski-glimmer"},types:{application:{definitiveCollection:"main"},component:{definitiveCollection:"components"},"component-test":{unresolvable:!0},helper:{definitiveCollection:"components"},"helper-test":{unresolvable:!0},renderer:{definitiveCollection:"main"},template:{definitiveCollection:"components"}},collections:{main:{types:["application","renderer"]},components:{group:"ui",types:["component","component-test","template","helper","helper-test"],defaultType:"component",privateCollections:["utils"]},styles:{group:"ui",unresolvable:!0},utils:{unresolvable:!0}}}
class Wi extends Mi{constructor(){let t=new Ii(Yi)
super({resolver:new Pi(Xi,t),rootName:Xi.app.rootName})}}const Ki=new Wi,qi=document.getElementById("app");(function(t){Lt=t})(()=>{Ki.scheduleRerender()}),Ki.registerInitializer({initialize(t){t.register(`component-manager:/${Ki.rootName}/component-managers/main`,ei)}}),Ki.renderComponent("SierpinskiGlimmer",qi,null),Ki.boot()})
