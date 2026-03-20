var Hp=Object.defineProperty;var Vp=(r,e,t)=>e in r?Hp(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var ce=(r,e,t)=>Vp(r,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wc="183",Us={ROTATE:0,DOLLY:1,PAN:2},Os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Gp=0,Yu=1,Wp=2,ja=1,Xp=2,Or=3,jn=0,gn=1,wn=2,Ri=0,ji=1,Pl=2,Ku=3,ju=4,Gd=5,ms=100,qp=101,Qp=102,Yp=103,Kp=104,jp=200,Zp=201,$p=202,Jp=203,jr=204,Zr=205,em=206,tm=207,nm=208,im=209,sm=210,rm=211,am=212,om=213,lm=214,Dl=0,Fl=1,Ll=2,mr=3,Bl=4,Ul=5,Ol=6,Nl=7,Xc=0,cm=1,um=2,li=0,Wd=1,Xd=2,qd=3,qc=4,Qd=5,Yd=6,Kd=7,jd=300,ws=301,gr=302,Fo=303,Lo=304,yo=306,kl=1e3,wi=1001,zl=1002,Yt=1003,hm=1004,xa=1005,en=1006,Bo=1007,As=1008,mn=1009,Zd=1010,$d=1011,$r=1012,Qc=1013,on=1014,zn=1015,ui=1016,Yc=1017,Kc=1018,Jr=1020,Jd=35902,ef=35899,tf=1021,nf=1022,ln=1023,hi=1026,vs=1027,sf=1028,Mo=1029,_r=1030,jc=1031,or=1033,Za=33776,$a=33777,Ja=33778,eo=33779,Hl=35840,Vl=35841,Gl=35842,Wl=35843,Xl=36196,ql=37492,Ql=37496,Yl=37488,Kl=37489,jl=37490,Zl=37491,$l=37808,Jl=37809,ec=37810,tc=37811,nc=37812,ic=37813,sc=37814,rc=37815,ac=37816,oc=37817,lc=37818,cc=37819,uc=37820,hc=37821,dc=36492,fc=36494,pc=36495,mc=36283,gc=36284,_c=36285,xc=36286,dm=3200,Zc=0,fm=1,Xi="",En="srgb",xr="srgb-linear",ao="linear",ut="srgb",Ns=7680,Zu=519,pm=512,mm=513,gm=514,$c=515,_m=516,xm=517,Jc=518,Sm=519,$u=35044,Am=35048,Ju="300 es",si=2e3,ea=2001;function vm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ta(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function ym(){const r=ta("canvas");return r.style.display="block",r}const eh={};function th(...r){const e="THREE."+r.shift();console.log(e,...r)}function rf(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function qe(...r){r=rf(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function at(...r){r=rf(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function oo(...r){const e=r.join(" ");e in eh||(eh[e]=!0,qe(...r))}function Mm(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Cm={[Dl]:Fl,[Ll]:Ol,[Bl]:Nl,[mr]:Ul,[Fl]:Dl,[Ol]:Ll,[Nl]:Bl,[Ul]:mr};class Is{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const Zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],to=Math.PI/180,Sc=180/Math.PI;function da(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Zt[r&255]+Zt[r>>8&255]+Zt[r>>16&255]+Zt[r>>24&255]+"-"+Zt[e&255]+Zt[e>>8&255]+"-"+Zt[e>>16&15|64]+Zt[e>>24&255]+"-"+Zt[t&63|128]+Zt[t>>8&255]+"-"+Zt[t>>16&255]+Zt[t>>24&255]+Zt[n&255]+Zt[n>>8&255]+Zt[n>>16&255]+Zt[n>>24&255]).toLowerCase()}function Je(r,e,t){return Math.max(e,Math.min(t,r))}function Tm(r,e){return(r%e+e)%e}function Uo(r,e,t){return(1-t)*r+t*e}function Rr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function un(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}const af={DEG2RAD:to};class Me{constructor(e=0,t=0){Me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class St{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],d=s[a+0],f=s[a+1],m=s[a+2],_=s[a+3];if(h!==_||l!==d||c!==f||u!==m){let p=l*d+c*f+u*m+h*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){const x=Math.acos(p),v=Math.sin(x);g=Math.sin(g*x)/v,o=Math.sin(o*x)/v,l=l*g+d*o,c=c*g+f*o,u=u*g+m*o,h=h*g+_*o}else{l=l*g+d*o,c=c*g+f*o,u=u*g+m*o,h=h*g+_*o;const x=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=x,c*=x,u*=x,h*=x}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[a],d=s[a+1],f=s[a+2],m=s[a+3];return e[t]=o*m+u*h+l*f-c*d,e[t+1]=l*m+u*d+c*h-o*f,e[t+2]=c*m+u*f+o*d-l*h,e[t+3]=u*m-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),h=o(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h+d*f*m;break;case"YZX":this._x=d*u*h+c*f*m,this._y=c*f*h+d*u*m,this._z=c*u*m-d*f*h,this._w=c*u*h-d*f*m;break;case"XZY":this._x=d*u*h-c*f*m,this._y=c*f*h-d*u*m,this._z=c*u*m+d*f*h,this._w=c*u*h+d*f*m;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-i)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-i)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Je(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(nh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(nh.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=i+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Oo.copy(this).projectOnVector(e),this.sub(Oo)}reflect(e){return this.sub(Oo.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Je(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Oo=new D,nh=new St;class We{constructor(e,t,n,i,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=i[0],p=i[3],g=i[6],x=i[1],v=i[4],A=i[7],y=i[2],T=i[5],C=i[8];return s[0]=a*_+o*x+l*y,s[3]=a*p+o*v+l*T,s[6]=a*g+o*A+l*C,s[1]=c*_+u*x+h*y,s[4]=c*p+u*v+h*T,s[7]=c*g+u*A+h*C,s[2]=d*_+f*x+m*y,s[5]=d*p+f*v+m*T,s[8]=d*g+f*A+m*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,m=t*h+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return e[0]=h*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(No.makeScale(e,t)),this}rotate(e){return this.premultiply(No.makeRotation(-e)),this}translate(e,t){return this.premultiply(No.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const No=new We,ih=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),sh=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Em(){const r={enabled:!0,workingColorSpace:xr,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===ut&&(i.r=Ii(i.r),i.g=Ii(i.g),i.b=Ii(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(i.r=lr(i.r),i.g=lr(i.g),i.b=lr(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xi?ao:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return oo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return oo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[xr]:{primaries:e,whitePoint:n,transfer:ao,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:e,whitePoint:n,transfer:ut,toXYZ:ih,fromXYZ:sh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:En}}}),r}const st=Em();function Ii(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function lr(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ks;class bm{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ks===void 0&&(ks=ta("canvas")),ks.width=e.width,ks.height=e.height;const i=ks.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ks}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ta("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let wm=0;class eu{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wm++}),this.uuid=da(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(ko(i[a].image)):s.push(ko(i[a]))}else s=ko(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function ko(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?bm.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let Rm=0;const zo=new D;class tn extends Is{constructor(e=tn.DEFAULT_IMAGE,t=tn.DEFAULT_MAPPING,n=wi,i=wi,s=en,a=As,o=ln,l=mn,c=tn.DEFAULT_ANISOTROPY,u=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rm++}),this.uuid=da(),this.name="",this.source=new eu(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Me(0,0),this.repeat=new Me(1,1),this.center=new Me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(zo).x}get height(){return this.source.getSize(zo).y}get depth(){return this.source.getSize(zo).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kl:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case zl:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kl:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case zl:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}tn.DEFAULT_IMAGE=null;tn.DEFAULT_MAPPING=jd;tn.DEFAULT_ANISOTROPY=1;class vt{constructor(e=0,t=0,n=0,i=1){vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],g=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(c+f+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const v=(c+1)/2,A=(f+1)/2,y=(g+1)/2,T=(u+d)/4,C=(h+_)/4,S=(m+p)/4;return v>A&&v>y?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=T/n,s=C/n):A>y?A<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(A),n=T/i,s=S/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=C/s,i=S/s),this.set(n,i,s,t),this}let x=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(x)<.001&&(x=1),this.x=(p-m)/x,this.y=(h-_)/x,this.z=(d-u)/x,this.w=Math.acos((c+f+g-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Je(this.x,e.x,t.x),this.y=Je(this.y,e.y,t.y),this.z=Je(this.z,e.z,t.z),this.w=Je(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Je(this.x,e,t),this.y=Je(this.y,e,t),this.z=Je(this.z,e,t),this.w=Je(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Je(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Im extends Is{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:en,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new vt(0,0,e,t),this.scissorTest=!1,this.viewport=new vt(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new tn(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:en,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new eu(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends Im{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class of extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pm extends tn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class He{constructor(e,t,n,i,s,a,o,l,c,u,h,d,f,m,_,p){He.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,h,d,f,m,_,p)}set(e,t,n,i,s,a,o,l,c,u,h,d,f,m,_,p){const g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=a,g[9]=o,g[13]=l,g[2]=c,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new He().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/zs.setFromMatrixColumn(e,0).length(),s=1/zs.setFromMatrixColumn(e,1).length(),a=1/zs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+m*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=m+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d+_*o,t[4]=m*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-m,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,m=c*u,_=c*h;t[0]=d-_*o,t[4]=-a*h,t[8]=m+f*o,t[1]=f+m*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,m=o*u,_=o*h;t[0]=l*u,t[4]=m*c-f,t[8]=d*c+_,t[1]=l*h,t[5]=_*c+d,t[9]=f*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=_-d*h,t[8]=m*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+m,t[10]=d-_*h}else if(e.order==="XZY"){const d=a*l,f=a*c,m=o*l,_=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+_,t[5]=a*u,t[9]=f*h-m,t[2]=m*h-f,t[6]=o*u,t[10]=_*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Dm,e,Fm)}lookAt(e,t,n){const i=this.elements;return Cn.subVectors(e,t),Cn.lengthSq()===0&&(Cn.z=1),Cn.normalize(),Ui.crossVectors(n,Cn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?Cn.x+=1e-4:Cn.z+=1e-4,Cn.normalize(),Ui.crossVectors(n,Cn)),Ui.normalize(),Sa.crossVectors(Cn,Ui),i[0]=Ui.x,i[4]=Sa.x,i[8]=Cn.x,i[1]=Ui.y,i[5]=Sa.y,i[9]=Cn.y,i[2]=Ui.z,i[6]=Sa.z,i[10]=Cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],x=n[3],v=n[7],A=n[11],y=n[15],T=i[0],C=i[4],S=i[8],M=i[12],R=i[1],w=i[5],P=i[9],I=i[13],L=i[2],B=i[6],U=i[10],O=i[14],q=i[3],G=i[7],J=i[11],ae=i[15];return s[0]=a*T+o*R+l*L+c*q,s[4]=a*C+o*w+l*B+c*G,s[8]=a*S+o*P+l*U+c*J,s[12]=a*M+o*I+l*O+c*ae,s[1]=u*T+h*R+d*L+f*q,s[5]=u*C+h*w+d*B+f*G,s[9]=u*S+h*P+d*U+f*J,s[13]=u*M+h*I+d*O+f*ae,s[2]=m*T+_*R+p*L+g*q,s[6]=m*C+_*w+p*B+g*G,s[10]=m*S+_*P+p*U+g*J,s[14]=m*M+_*I+p*O+g*ae,s[3]=x*T+v*R+A*L+y*q,s[7]=x*C+v*w+A*B+y*G,s[11]=x*S+v*P+A*U+y*J,s[15]=x*M+v*I+A*O+y*ae,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],m=e[3],_=e[7],p=e[11],g=e[15],x=l*f-c*d,v=o*f-c*h,A=o*d-l*h,y=a*f-c*u,T=a*d-l*u,C=a*h-o*u;return t*(_*x-p*v+g*A)-n*(m*x-p*y+g*T)+i*(m*v-_*y+g*C)-s*(m*A-_*T+p*C)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],m=e[12],_=e[13],p=e[14],g=e[15],x=t*o-n*a,v=t*l-i*a,A=t*c-s*a,y=n*l-i*o,T=n*c-s*o,C=i*c-s*l,S=u*_-h*m,M=u*p-d*m,R=u*g-f*m,w=h*p-d*_,P=h*g-f*_,I=d*g-f*p,L=x*I-v*P+A*w+y*R-T*M+C*S;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/L;return e[0]=(o*I-l*P+c*w)*B,e[1]=(i*P-n*I-s*w)*B,e[2]=(_*C-p*T+g*y)*B,e[3]=(d*T-h*C-f*y)*B,e[4]=(l*R-a*I-c*M)*B,e[5]=(t*I-i*R+s*M)*B,e[6]=(p*A-m*C-g*v)*B,e[7]=(u*C-d*A+f*v)*B,e[8]=(a*P-o*R+c*S)*B,e[9]=(n*R-t*P-s*S)*B,e[10]=(m*T-_*A+g*x)*B,e[11]=(h*A-u*T-f*x)*B,e[12]=(o*M-a*w-l*S)*B,e[13]=(t*w-n*M+i*S)*B,e[14]=(_*v-m*y-p*x)*B,e[15]=(u*y-h*v+d*x)*B,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,m=s*h,_=a*u,p=a*h,g=o*h,x=l*c,v=l*u,A=l*h,y=n.x,T=n.y,C=n.z;return i[0]=(1-(_+g))*y,i[1]=(f+A)*y,i[2]=(m-v)*y,i[3]=0,i[4]=(f-A)*T,i[5]=(1-(d+g))*T,i[6]=(p+x)*T,i[7]=0,i[8]=(m+v)*C,i[9]=(p-x)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinant();if(s===0)return n.set(1,1,1),t.identity(),this;let a=zs.set(i[0],i[1],i[2]).length();const o=zs.set(i[4],i[5],i[6]).length(),l=zs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),Wn.copy(this);const c=1/a,u=1/o,h=1/l;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=u,Wn.elements[5]*=u,Wn.elements[6]*=u,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,t.setFromRotationMatrix(Wn),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,i,s,a,o=si,l=!1){const c=this.elements,u=2*s/(t-e),h=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i);let m,_;if(l)m=s/(a-s),_=a*s/(a-s);else if(o===si)m=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ea)m=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=h,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=si,l=!1){const c=this.elements,u=2/(t-e),h=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i);let m,_;if(l)m=1/(a-s),_=a/(a-s);else if(o===si)m=-2/(a-s),_=-(a+s)/(a-s);else if(o===ea)m=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=h,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const zs=new D,Wn=new He,Dm=new D(0,0,0),Fm=new D(1,1,1),Ui=new D,Sa=new D,Cn=new D,rh=new He,ah=new St;class Zn{constructor(e=0,t=0,n=0,i=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(Je(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Je(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Je(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Je(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Je(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Je(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ah.setFromEuler(this),this.setFromQuaternion(ah,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class lf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lm=0;const oh=new D,Hs=new St,mi=new He,Aa=new D,Ir=new D,Bm=new D,Um=new St,lh=new D(1,0,0),ch=new D(0,1,0),uh=new D(0,0,1),hh={type:"added"},Om={type:"removed"},Vs={type:"childadded",child:null},Ho={type:"childremoved",child:null};class Rt extends Is{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lm++}),this.uuid=da(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rt.DEFAULT_UP.clone();const e=new D,t=new Zn,n=new St,i=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new He},normalMatrix:{value:new We}}),this.matrix=new He,this.matrixWorld=new He,this.matrixAutoUpdate=Rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.multiply(Hs),this}rotateOnWorldAxis(e,t){return Hs.setFromAxisAngle(e,t),this.quaternion.premultiply(Hs),this}rotateX(e){return this.rotateOnAxis(lh,e)}rotateY(e){return this.rotateOnAxis(ch,e)}rotateZ(e){return this.rotateOnAxis(uh,e)}translateOnAxis(e,t){return oh.copy(e).applyQuaternion(this.quaternion),this.position.add(oh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(lh,e)}translateY(e){return this.translateOnAxis(ch,e)}translateZ(e){return this.translateOnAxis(uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Aa.copy(e):Aa.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Ir,Aa,this.up):mi.lookAt(Aa,Ir,this.up),this.quaternion.setFromRotationMatrix(mi),i&&(mi.extractRotation(i.matrixWorld),Hs.setFromRotationMatrix(mi),this.quaternion.premultiply(Hs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(hh),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Om),Ho.child=e,this.dispatchEvent(Ho),Ho.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(hh),Vs.child=e,this.dispatchEvent(Vs),Vs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,e,Bm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Um,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),this.static!==!1&&(i.static=this.static),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),e.pivot!==null&&(this.pivot=e.pivot.clone()),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Rt.DEFAULT_UP=new D(0,1,0);Rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Nr extends Rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nm={type:"move"};class Vo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Nr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Nr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Nr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const p=t.getJointPose(_,n),g=this._getHandJoint(c,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nm)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Nr;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const cf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},va={h:0,s:0,l:0};function Go(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class je{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=st.workingColorSpace){return this.r=e,this.g=t,this.b=n,st.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=st.workingColorSpace){if(e=Tm(e,1),t=Je(t,0,1),n=Je(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Go(a,s,e+1/3),this.g=Go(a,s,e),this.b=Go(a,s,e-1/3)}return st.colorSpaceToWorking(this,i),this}setStyle(e,t=En){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=En){const n=cf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=lr(e.r),this.g=lr(e.g),this.b=lr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return st.workingToColorSpace($t.copy(this),e),Math.round(Je($t.r*255,0,255))*65536+Math.round(Je($t.g*255,0,255))*256+Math.round(Je($t.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=st.workingColorSpace){st.workingToColorSpace($t.copy(this),t);const n=$t.r,i=$t.g,s=$t.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=st.workingColorSpace){return st.workingToColorSpace($t.copy(this),t),e.r=$t.r,e.g=$t.g,e.b=$t.b,e}getStyle(e=En){st.workingToColorSpace($t.copy(this),e);const t=$t.r,n=$t.g,i=$t.b;return e!==En?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(va);const n=Uo(Oi.h,va.h,t),i=Uo(Oi.s,va.s,t),s=Uo(Oi.l,va.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const $t=new je;je.NAMES=cf;class uf extends Rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xn=new D,gi=new D,Wo=new D,_i=new D,Gs=new D,Ws=new D,dh=new D,Xo=new D,qo=new D,Qo=new D,Yo=new vt,Ko=new vt,jo=new vt;class Yn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Xn.subVectors(e,t),i.cross(Xn);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Xn.subVectors(i,t),gi.subVectors(n,t),Wo.subVectors(e,t);const a=Xn.dot(Xn),o=Xn.dot(gi),l=Xn.dot(Wo),c=gi.dot(gi),u=gi.dot(Wo),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,m=(a*u-o*l)*d;return s.set(1-f-m,m,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,_i)===null?!1:_i.x>=0&&_i.y>=0&&_i.x+_i.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,_i)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,_i.x),l.addScaledVector(a,_i.y),l.addScaledVector(o,_i.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return Yo.setScalar(0),Ko.setScalar(0),jo.setScalar(0),Yo.fromBufferAttribute(e,t),Ko.fromBufferAttribute(e,n),jo.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(Yo,s.x),a.addScaledVector(Ko,s.y),a.addScaledVector(jo,s.z),a}static isFrontFacing(e,t,n,i){return Xn.subVectors(n,t),gi.subVectors(e,t),Xn.cross(gi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Xn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Gs.subVectors(i,n),Ws.subVectors(s,n),Xo.subVectors(e,n);const l=Gs.dot(Xo),c=Ws.dot(Xo);if(l<=0&&c<=0)return t.copy(n);qo.subVectors(e,i);const u=Gs.dot(qo),h=Ws.dot(qo);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Gs,a);Qo.subVectors(e,s);const f=Gs.dot(Qo),m=Ws.dot(Qo);if(m>=0&&f<=m)return t.copy(s);const _=f*c-l*m;if(_<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(Ws,o);const p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return dh.subVectors(s,i),o=(h-u)/(h-u+(f-m)),t.copy(i).addScaledVector(dh,o);const g=1/(p+_+d);return a=_*g,o=d*g,t.copy(n).addScaledVector(Gs,a).addScaledVector(Ws,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ri{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(qn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(qn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=qn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,qn):qn.fromBufferAttribute(s,a),qn.applyMatrix4(e.matrixWorld),this.expandByPoint(qn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ya.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ya.copy(n.boundingBox)),ya.applyMatrix4(e.matrixWorld),this.union(ya)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,qn),qn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Pr),Ma.subVectors(this.max,Pr),Xs.subVectors(e.a,Pr),qs.subVectors(e.b,Pr),Qs.subVectors(e.c,Pr),Ni.subVectors(qs,Xs),ki.subVectors(Qs,qs),rs.subVectors(Xs,Qs);let t=[0,-Ni.z,Ni.y,0,-ki.z,ki.y,0,-rs.z,rs.y,Ni.z,0,-Ni.x,ki.z,0,-ki.x,rs.z,0,-rs.x,-Ni.y,Ni.x,0,-ki.y,ki.x,0,-rs.y,rs.x,0];return!Zo(t,Xs,qs,Qs,Ma)||(t=[1,0,0,0,1,0,0,0,1],!Zo(t,Xs,qs,Qs,Ma))?!1:(Ca.crossVectors(Ni,ki),t=[Ca.x,Ca.y,Ca.z],Zo(t,Xs,qs,Qs,Ma))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,qn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(qn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(xi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),xi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),xi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),xi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),xi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),xi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),xi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),xi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(xi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const xi=[new D,new D,new D,new D,new D,new D,new D,new D],qn=new D,ya=new ri,Xs=new D,qs=new D,Qs=new D,Ni=new D,ki=new D,rs=new D,Pr=new D,Ma=new D,Ca=new D,as=new D;function Zo(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){as.fromArray(r,s);const o=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),l=e.dot(as),c=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const Ei=km();function km(){const r=new ArrayBuffer(4),e=new Float32Array(r),t=new Uint32Array(r),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:s,exponentTable:a,offsetTable:o}}function zm(r){Math.abs(r)>65504&&qe("DataUtils.toHalfFloat(): Value out of range."),r=Je(r,-65504,65504),Ei.floatView[0]=r;const e=Ei.uint32View[0],t=e>>23&511;return Ei.baseTable[t]+((e&8388607)>>Ei.shiftTable[t])}function Hm(r){const e=r>>10;return Ei.uint32View[0]=Ei.mantissaTable[Ei.offsetTable[e]+(r&1023)]+Ei.exponentTable[e],Ei.floatView[0]}class na{static toHalfFloat(e){return zm(e)}static fromHalfFloat(e){return Hm(e)}}const Ot=new D,Ta=new Me;let Vm=0;class _n{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Vm++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=$u,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ta.fromBufferAttribute(this,t),Ta.applyMatrix3(e),this.setXY(t,Ta.x,Ta.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix3(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyMatrix4(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.applyNormalMatrix(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ot.fromBufferAttribute(this,t),Ot.transformDirection(e),this.setXYZ(t,Ot.x,Ot.y,Ot.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Rr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Rr(t,this.array)),t}setX(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Rr(t,this.array)),t}setY(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Rr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Rr(t,this.array)),t}setW(e,t){return this.normalized&&(t=un(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=un(t,this.array),n=un(n,this.array),i=un(i,this.array),s=un(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==$u&&(e.usage=this.usage),e}}class hf extends _n{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class df extends _n{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ut extends _n{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Gm=new ri,Dr=new D,$o=new D;class Co{constructor(e=new D,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gm.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Dr.subVectors(e,this.center);const t=Dr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Dr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):($o.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Dr.copy(e.center).add($o)),this.expandByPoint(Dr.copy(e.center).sub($o))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Wm=0;const Un=new He,Jo=new Rt,Ys=new D,Tn=new ri,Fr=new ri,Gt=new D;class Xt extends Is{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Wm++}),this.uuid=da(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vm(e)?df:hf)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,t,n){return Un.makeTranslation(e,t,n),this.applyMatrix4(Un),this}scale(e,t,n){return Un.makeScale(e,t,n),this.applyMatrix4(Un),this}lookAt(e){return Jo.lookAt(e),Jo.updateMatrix(),this.applyMatrix4(Jo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ut(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ri);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Fr.setFromBufferAttribute(o),this.morphTargetsRelative?(Gt.addVectors(Tn.min,Fr.min),Tn.expandByPoint(Gt),Gt.addVectors(Tn.max,Fr.max),Tn.expandByPoint(Gt)):(Tn.expandByPoint(Fr.min),Tn.expandByPoint(Fr.max))}Tn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)Gt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Gt.fromBufferAttribute(o,c),l&&(Ys.fromBufferAttribute(e,c),Gt.add(Ys)),i=Math.max(i,n.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let S=0;S<n.count;S++)o[S]=new D,l[S]=new D;const c=new D,u=new D,h=new D,d=new Me,f=new Me,m=new Me,_=new D,p=new D;function g(S,M,R){c.fromBufferAttribute(n,S),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,R),d.fromBufferAttribute(s,S),f.fromBufferAttribute(s,M),m.fromBufferAttribute(s,R),u.sub(c),h.sub(c),f.sub(d),m.sub(d);const w=1/(f.x*m.y-m.x*f.y);isFinite(w)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(w),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(w),o[S].add(_),o[M].add(_),o[R].add(_),l[S].add(p),l[M].add(p),l[R].add(p))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let S=0,M=x.length;S<M;++S){const R=x[S],w=R.start,P=R.count;for(let I=w,L=w+P;I<L;I+=3)g(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const v=new D,A=new D,y=new D,T=new D;function C(S){y.fromBufferAttribute(i,S),T.copy(y);const M=o[S];v.copy(M),v.sub(y.multiplyScalar(y.dot(M))).normalize(),A.crossVectors(T,M);const w=A.dot(l[S])<0?-1:1;a.setXYZW(S,v.x,v.y,v.z,w)}for(let S=0,M=x.length;S<M;++S){const R=x[S],w=R.start,P=R.count;for(let I=w,L=w+P;I<L;I+=3)C(e.getX(I+0)),C(e.getX(I+1)),C(e.getX(I+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new D,s=new D,a=new D,o=new D,l=new D,c=new D,u=new D,h=new D;if(e)for(let d=0,f=e.count;d<f;d+=3){const m=e.getX(d+0),_=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(u),l.add(u),c.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(i,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gt.fromBufferAttribute(e,t),Gt.normalize(),e.setXYZ(t,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*u;for(let g=0;g<u;g++)d[m++]=c[f++]}return new _n(d,u,h)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Xt,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Xm=0;class Ps extends Is{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Xm++}),this.uuid=da(),this.name="",this.type="Material",this.blending=ji,this.side=jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jr,this.blendDst=Zr,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Zu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ji&&(n.blending=this.blending),this.side!==jn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==jr&&(n.blendSrc=this.blendSrc),this.blendDst!==Zr&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==mr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Zu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Si=new D,el=new D,Ea=new D,zi=new D,tl=new D,ba=new D,nl=new D;let tu=class{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){el.copy(e).add(t).multiplyScalar(.5),Ea.copy(t).sub(e).normalize(),zi.copy(this.origin).sub(el);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ea),o=zi.dot(this.direction),l=-zi.dot(Ea),c=zi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,m;if(u>0)if(h=a*l-o,d=a*o-l,m=s*u,h>=0)if(d>=-m)if(d<=m){const _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(el).addScaledVector(Ea,d),f}intersectSphere(e,t){Si.subVectors(e.center,this.origin);const n=Si.dot(this.direction),i=Si.dot(Si)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,n,i,s){tl.subVectors(t,e),ba.subVectors(n,e),nl.crossVectors(tl,ba);let a=this.direction.dot(nl),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;zi.subVectors(this.origin,e);const l=o*this.direction.dot(ba.crossVectors(zi,ba));if(l<0)return null;const c=o*this.direction.dot(tl.cross(zi));if(c<0||l+c>a)return null;const u=-o*zi.dot(nl);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class ci extends Ps{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Xc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fh=new He,os=new tu,wa=new Co,ph=new D,Ra=new D,Ia=new D,Pa=new D,il=new D,Da=new D,mh=new D,Fa=new D;class Xe extends Rt{constructor(e=new Xt,t=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Da.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(il.fromBufferAttribute(h,e),a?Da.addScaledVector(il,u):Da.addScaledVector(il.sub(t),u))}t.add(Da)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),os.copy(e.ray).recast(e.near),!(wa.containsPoint(os.origin)===!1&&(os.intersectSphere(wa,ph)===null||os.origin.distanceToSquared(ph)>(e.far-e.near)**2))&&(fh.copy(s).invert(),os.copy(e.ray).applyMatrix4(fh),!(n.boundingBox!==null&&os.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,os)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let A=x,y=v;A<y;A+=3){const T=o.getX(A),C=o.getX(A+1),S=o.getX(A+2);i=La(this,g,e,n,c,u,h,T,C,S),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const x=o.getX(p),v=o.getX(p+1),A=o.getX(p+2);i=La(this,a,e,n,c,u,h,x,v,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){const p=d[m],g=a[p.materialIndex],x=Math.max(p.start,f.start),v=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let A=x,y=v;A<y;A+=3){const T=A,C=A+1,S=A+2;i=La(this,g,e,n,c,u,h,T,C,S),i&&(i.faceIndex=Math.floor(A/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){const x=p,v=p+1,A=p+2;i=La(this,a,e,n,c,u,h,x,v,A),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function qm(r,e,t,n,i,s,a,o){let l;if(e.side===gn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===jn,o),l===null)return null;Fa.copy(o),Fa.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Fa);return c<t.near||c>t.far?null:{distance:c,point:Fa.clone(),object:r}}function La(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ra),r.getVertexPosition(l,Ia),r.getVertexPosition(c,Pa);const u=qm(r,e,t,n,Ra,Ia,Pa,mh);if(u){const h=new D;Yn.getBarycoord(mh,Ra,Ia,Pa,h),i&&(u.uv=Yn.getInterpolatedAttribute(i,o,l,c,h,new Me)),s&&(u.uv1=Yn.getInterpolatedAttribute(s,o,l,c,h,new Me)),a&&(u.normal=Yn.getInterpolatedAttribute(a,o,l,c,h,new D),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new D,materialIndex:0};Yn.getNormal(Ra,Ia,Pa,d.normal),u.face=d,u.barycoord=h}return u}class vi extends tn{constructor(e=null,t=1,n=1,i,s,a,o,l,c=Yt,u=Yt,h,d){super(null,a,o,l,c,u,i,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qm extends _n{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const sl=new D,Ym=new D,Km=new We;class Gi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=sl.subVectors(n,t).cross(Ym.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(sl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Km.getNormalMatrix(e),i=this.coplanarPoint(sl).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new Co,jm=new Me(.5,.5),Ba=new D;class nu{constructor(e=new Gi,t=new Gi,n=new Gi,i=new Gi,s=new Gi,a=new Gi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=si,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],h=s[5],d=s[6],f=s[7],m=s[8],_=s[9],p=s[10],g=s[11],x=s[12],v=s[13],A=s[14],y=s[15];if(i[0].setComponents(c-a,f-u,g-m,y-x).normalize(),i[1].setComponents(c+a,f+u,g+m,y+x).normalize(),i[2].setComponents(c+o,f+h,g+_,y+v).normalize(),i[3].setComponents(c-o,f-h,g-_,y-v).normalize(),n)i[4].setComponents(l,d,p,A).normalize(),i[5].setComponents(c-l,f-d,g-p,y-A).normalize();else if(i[4].setComponents(c-l,f-d,g-p,y-A).normalize(),t===si)i[5].setComponents(c+l,f+d,g+p,y+A).normalize();else if(t===ea)i[5].setComponents(l,d,p,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){ls.center.set(0,0,0);const t=jm.distanceTo(e.center);return ls.radius=.7071067811865476+t,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ba.x=i.normal.x>0?e.max.x:e.min.x,Ba.y=i.normal.y>0?e.max.y:e.min.y,Ba.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ba)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ff extends Ps{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new je(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const gh=new He,Ac=new tu,Ua=new Co,Oa=new D;class Zm extends Rt{constructor(e=new Xt,t=new ff){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ua.copy(n.boundingSphere),Ua.applyMatrix4(i),Ua.radius+=s,e.ray.intersectsSphere(Ua)===!1)return;gh.copy(i).invert(),Ac.copy(e.ray).applyMatrix4(gh);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let m=d,_=f;m<_;m++){const p=c.getX(m);Oa.fromBufferAttribute(h,p),_h(Oa,p,l,i,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Oa.fromBufferAttribute(h,m),_h(Oa,m,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function _h(r,e,t,n,i,s,a){const o=Ac.distanceSqToPoint(r);if(o<t){const l=new D;Ac.closestPointToPoint(r,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class pf extends tn{constructor(e=[],t=ws,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Sr extends tn{constructor(e,t,n=on,i,s,a,o=Yt,l=Yt,c,u=hi,h=1){if(u!==hi&&u!==vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:h};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eu(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class $m extends Sr{constructor(e,t=on,n=ws,i,s,a=Yt,o=Yt,l,c=hi){const u={width:e,height:e,depth:1},h=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mf extends tn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ds extends Xt{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;m("z","y","x",-1,-1,n,t,e,a,s,0),m("z","y","x",1,-1,n,t,-e,a,s,1),m("x","z","y",1,1,e,n,t,i,a,2),m("x","z","y",1,-1,e,n,-t,i,a,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Ut(c,3)),this.setAttribute("normal",new Ut(u,3)),this.setAttribute("uv",new Ut(h,2));function m(_,p,g,x,v,A,y,T,C,S,M){const R=A/C,w=y/S,P=A/2,I=y/2,L=T/2,B=C+1,U=S+1;let O=0,q=0;const G=new D;for(let J=0;J<U;J++){const ae=J*w-I;for(let re=0;re<B;re++){const xe=re*R-P;G[_]=xe*x,G[p]=ae*v,G[g]=L,c.push(G.x,G.y,G.z),G[_]=0,G[p]=0,G[g]=T>0?1:-1,u.push(G.x,G.y,G.z),h.push(re/C),h.push(1-J/S),O+=1}}for(let J=0;J<S;J++)for(let ae=0;ae<C;ae++){const re=d+ae+B*J,xe=d+ae+B*(J+1),Ae=d+(ae+1)+B*(J+1),Re=d+(ae+1)+B*J;l.push(re,xe,Re),l.push(xe,Ae,Re),q+=6}o.addGroup(f,q,M),f+=q,d+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ds(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class gs extends Xt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));const a=[],o=[],l=[],c=[],u=t/2,h=Math.PI/2*e,d=t,f=2*h+d,m=n*2+s,_=i+1,p=new D,g=new D;for(let x=0;x<=m;x++){let v=0,A=0,y=0,T=0;if(x<=n){const M=x/n,R=M*Math.PI/2;A=-u-e*Math.cos(R),y=e*Math.sin(R),T=-e*Math.cos(R),v=M*h}else if(x<=n+s){const M=(x-n)/s;A=-u+M*t,y=e,T=0,v=h+M*d}else{const M=(x-n-s)/n,R=M*Math.PI/2;A=u+e*Math.sin(R),y=e*Math.cos(R),T=e*Math.sin(R),v=h+d+M*h}const C=Math.max(0,Math.min(1,v/f));let S=0;x===0?S=.5/i:x===m&&(S=-.5/i);for(let M=0;M<=i;M++){const R=M/i,w=R*Math.PI*2,P=Math.sin(w),I=Math.cos(w);g.x=-y*I,g.y=A,g.z=y*P,o.push(g.x,g.y,g.z),p.set(-y*I,T,y*P),p.normalize(),l.push(p.x,p.y,p.z),c.push(R+S,C)}if(x>0){const M=(x-1)*_;for(let R=0;R<i;R++){const w=M+R,P=M+R+1,I=x*_+R,L=x*_+R+1;a.push(w,P,I),a.push(P,L,I)}}}this.setIndex(a),this.setAttribute("position",new Ut(o,3)),this.setAttribute("normal",new Ut(l,3)),this.setAttribute("uv",new Ut(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gs(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}}class lo extends Xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new D,u=new Me;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Ut(a,3)),this.setAttribute("normal",new Ut(o,3)),this.setAttribute("uv",new Ut(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ia extends Xt{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;i=Math.floor(i),s=Math.floor(s);const u=[],h=[],d=[],f=[];let m=0;const _=[],p=n/2;let g=0;x(),a===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Ut(h,3)),this.setAttribute("normal",new Ut(d,3)),this.setAttribute("uv",new Ut(f,2));function x(){const A=new D,y=new D;let T=0;const C=(t-e)/n;for(let S=0;S<=s;S++){const M=[],R=S/s,w=R*(t-e)+e;for(let P=0;P<=i;P++){const I=P/i,L=I*l+o,B=Math.sin(L),U=Math.cos(L);y.x=w*B,y.y=-R*n+p,y.z=w*U,h.push(y.x,y.y,y.z),A.set(B,C,U).normalize(),d.push(A.x,A.y,A.z),f.push(I,1-R),M.push(m++)}_.push(M)}for(let S=0;S<i;S++)for(let M=0;M<s;M++){const R=_[M][S],w=_[M+1][S],P=_[M+1][S+1],I=_[M][S+1];(e>0||M!==0)&&(u.push(R,w,I),T+=3),(t>0||M!==s-1)&&(u.push(w,P,I),T+=3)}c.addGroup(g,T,0),g+=T}function v(A){const y=m,T=new Me,C=new D;let S=0;const M=A===!0?e:t,R=A===!0?1:-1;for(let P=1;P<=i;P++)h.push(0,p*R,0),d.push(0,R,0),f.push(.5,.5),m++;const w=m;for(let P=0;P<=i;P++){const L=P/i*l+o,B=Math.cos(L),U=Math.sin(L);C.x=M*U,C.y=p*R,C.z=M*B,h.push(C.x,C.y,C.z),d.push(0,R,0),T.x=B*.5+.5,T.y=U*.5*R+.5,f.push(T.x,T.y),m++}for(let P=0;P<i;P++){const I=y+P,L=w+P;A===!0?u.push(L,L+1,I):u.push(L+1,L,I),S+=3}c.addGroup(g,S,A===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ia(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class iu extends ia{constructor(e=1,t=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,i,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new iu(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rs extends Xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,h=e/o,d=t/l,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){const x=g*d-a;for(let v=0;v<c;v++){const A=v*h-s;m.push(A,-x,0),_.push(0,0,1),p.push(v/o),p.push(1-g/l)}}for(let g=0;g<l;g++)for(let x=0;x<o;x++){const v=x+c*g,A=x+c*(g+1),y=x+1+c*(g+1),T=x+1+c*g;f.push(v,A,T),f.push(A,y,T)}this.setIndex(f),this.setAttribute("position",new Ut(m,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rs(e.width,e.height,e.widthSegments,e.heightSegments)}}class kn extends Xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new D,d=new D,f=[],m=[],_=[],p=[];for(let g=0;g<=n;g++){const x=[],v=g/n;let A=0;g===0&&a===0?A=.5/t:g===n&&l===Math.PI&&(A=-.5/t);for(let y=0;y<=t;y++){const T=y/t;h.x=-e*Math.cos(i+T*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(i+T*s)*Math.sin(a+v*o),m.push(h.x,h.y,h.z),d.copy(h).normalize(),_.push(d.x,d.y,d.z),p.push(T+A,1-v),x.push(c++)}u.push(x)}for(let g=0;g<n;g++)for(let x=0;x<t;x++){const v=u[g][x+1],A=u[g][x],y=u[g+1][x],T=u[g+1][x+1];(g!==0||a>0)&&f.push(v,A,T),(g!==n-1||l<Math.PI)&&f.push(A,y,T)}this.setIndex(f),this.setAttribute("position",new Ut(m,3)),this.setAttribute("normal",new Ut(_,3)),this.setAttribute("uv",new Ut(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function Ar(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function sn(r){const e={};for(let t=0;t<r.length;t++){const n=Ar(r[t]);for(const i in n)e[i]=n[i]}return e}function Jm(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function gf(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const eg={clone:Ar,merge:sn};var tg=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ng=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class cn extends Ps{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tg,this.fragmentShader=ng,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ar(e.uniforms),this.uniformsGroups=Jm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class ig extends cn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sg extends Ps{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Qn extends Ps{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zc,this.normalScale=new Me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=Xc,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class rg extends Ps{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=dm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ag extends Ps{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rl={enabled:!1,files:{},add:function(r,e){this.enabled!==!1&&(xh(r)||(this.files[r]=e))},get:function(r){if(this.enabled!==!1&&!xh(r))return this.files[r]},remove:function(r){delete this.files[r]},clear:function(){this.files={}}};function xh(r){try{const e=r.slice(r.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class og{constructor(e,t,n){const i=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,s===!1&&i.onStart!==void 0&&i.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,i.onProgress!==void 0&&i.onProgress(u,a,o),a===o&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],m=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const lg=new og;class su{constructor(e){this.manager=e!==void 0?e:lg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}su.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ks=new WeakMap;class cg extends su{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=rl.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0);else{let h=Ks.get(a);h===void 0&&(h=[],Ks.set(a,h)),h.push({onLoad:t,onError:i})}return a}const o=ta("img");function l(){u(),t&&t(this);const h=Ks.get(this)||[];for(let d=0;d<h.length;d++){const f=h[d];f.onLoad&&f.onLoad(this)}Ks.delete(this),s.manager.itemEnd(e)}function c(h){u(),i&&i(h),rl.remove(`image:${e}`);const d=Ks.get(this)||[];for(let f=0;f<d.length;f++){const m=d[f];m.onError&&m.onError(h)}Ks.delete(this),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),rl.add(`image:${e}`,o),s.manager.itemStart(e),o.src=e,o}}class ug extends su{constructor(e){super(e)}load(e,t,n,i){const s=new tn,a=new cg(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,i),s}}class ru extends Rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const al=new He,Sh=new D,Ah=new D;class _f{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Me(512,512),this.mapType=mn,this.map=null,this.mapPass=null,this.matrix=new He,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new nu,this._frameExtents=new Me(1,1),this._viewportCount=1,this._viewports=[new vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),Ah.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ah),t.updateMatrixWorld(),al.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(al,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===ea||t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(al)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Na=new D,ka=new St,Jn=new D;class xf extends Rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new He,this.projectionMatrix=new He,this.projectionMatrixInverse=new He,this.coordinateSystem=si,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Na,ka,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,ka,Jn.set(1,1,1)).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorld.decompose(Na,ka,Jn),Jn.x===1&&Jn.y===1&&Jn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Na,ka,Jn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new D,vh=new Me,yh=new Me;class pn extends xf{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Sc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(to*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Sc*2*Math.atan(Math.tan(to*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,vh,yh),t.subVectors(yh,vh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(to*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class hg extends _f{constructor(){super(new pn(90,1,.5,500)),this.isPointLightShadow=!0}}class dg extends ru{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new hg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class fa extends xf{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class fg extends _f{constructor(){super(new fa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Mh extends ru{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Rt.DEFAULT_UP),this.updateMatrix(),this.target=new Rt,this.shadow=new fg}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class pg extends ru{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class mg extends Xt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}const js=-90,Zs=1;class gg extends Rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new pn(js,Zs,e,t);i.layers=this.layers,this.add(i);const s=new pn(js,Zs,e,t);s.layers=this.layers,this.add(s);const a=new pn(js,Zs,e,t);a.layers=this.layers,this.add(a);const o=new pn(js,Zs,e,t);o.layers=this.layers,this.add(o);const l=new pn(js,Zs,e,t);l.layers=this.layers,this.add(l);const c=new pn(js,Zs,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===si)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ea)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class _g extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class xg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,qe("THREE.Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class Ch{constructor(e=1,t=0,n=0){this.radius=e,this.phi=t,this.theta=n}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Je(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Je(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}function Th(r,e,t,n){const i=Sg(n);switch(t){case tf:return r*e;case sf:return r*e/i.components*i.byteLength;case Mo:return r*e/i.components*i.byteLength;case _r:return r*e*2/i.components*i.byteLength;case jc:return r*e*2/i.components*i.byteLength;case nf:return r*e*3/i.components*i.byteLength;case ln:return r*e*4/i.components*i.byteLength;case or:return r*e*4/i.components*i.byteLength;case Za:case $a:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ja:case eo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Vl:case Wl:return Math.max(r,16)*Math.max(e,8)/4;case Hl:case Gl:return Math.max(r,8)*Math.max(e,8)/2;case Xl:case ql:case Yl:case Kl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ql:case jl:case Zl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case $l:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Jl:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case ec:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case tc:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case nc:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case ic:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case sc:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case rc:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ac:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case oc:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case lc:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case cc:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case uc:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case hc:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case dc:case fc:case pc:return Math.ceil(r/4)*Math.ceil(e/4)*16;case mc:case gc:return Math.ceil(r/4)*Math.ceil(e/4)*8;case _c:case xc:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Sg(r){switch(r){case mn:case Zd:return{byteLength:1,components:1};case $r:case $d:case ui:return{byteLength:2,components:1};case Yc:case Kc:return{byteLength:2,components:4};case on:case Qc:case zn:return{byteLength:4,components:1};case Jd:case ef:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wc}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wc);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Sf(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function Ag(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l.updateRanges;if(r.bindBuffer(c,o),h.length===0)r.bufferSubData(c,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){const m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){const _=h[f];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var vg=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yg=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Mg=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Cg=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tg=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Eg=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bg=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,wg=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rg=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Ig=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pg=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Dg=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fg=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Lg=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bg=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ug=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Og=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ng=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,kg=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Vg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Gg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Wg=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Xg=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,qg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Qg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Kg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Zg="gl_FragColor = linearToOutputTexel( gl_FragColor );",$g=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,t0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,n0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,i0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,s0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,r0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,a0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,o0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,l0=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,c0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,u0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,d0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,f0=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,p0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,m0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,g0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,_0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,x0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,S0=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,A0=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,y0=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,M0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,C0=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,T0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,R0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,I0=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,D0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,F0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,B0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,O0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,k0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,V0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,G0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,W0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,X0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,q0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Y0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,K0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,j0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Z0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,J0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,t_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,n_=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,r_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,o_=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,l_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,c_=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,h_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,d_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,f_=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,p_=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,m_=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,g_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,__=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,S_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const A_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,v_=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,y_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,M_=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,C_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,T_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,E_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,b_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,w_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,R_=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,I_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,P_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,D_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,F_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,L_=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,B_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,U_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,O_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,N_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,k_=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,z_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,H_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,V_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,G_=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,W_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,X_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,q_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Y_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,K_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,j_=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Z_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,J_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:vg,alphahash_pars_fragment:yg,alphamap_fragment:Mg,alphamap_pars_fragment:Cg,alphatest_fragment:Tg,alphatest_pars_fragment:Eg,aomap_fragment:bg,aomap_pars_fragment:wg,batching_pars_vertex:Rg,batching_vertex:Ig,begin_vertex:Pg,beginnormal_vertex:Dg,bsdfs:Fg,iridescence_fragment:Lg,bumpmap_pars_fragment:Bg,clipping_planes_fragment:Ug,clipping_planes_pars_fragment:Og,clipping_planes_pars_vertex:Ng,clipping_planes_vertex:kg,color_fragment:zg,color_pars_fragment:Hg,color_pars_vertex:Vg,color_vertex:Gg,common:Wg,cube_uv_reflection_fragment:Xg,defaultnormal_vertex:qg,displacementmap_pars_vertex:Qg,displacementmap_vertex:Yg,emissivemap_fragment:Kg,emissivemap_pars_fragment:jg,colorspace_fragment:Zg,colorspace_pars_fragment:$g,envmap_fragment:Jg,envmap_common_pars_fragment:e0,envmap_pars_fragment:t0,envmap_pars_vertex:n0,envmap_physical_pars_fragment:f0,envmap_vertex:i0,fog_vertex:s0,fog_pars_vertex:r0,fog_fragment:a0,fog_pars_fragment:o0,gradientmap_pars_fragment:l0,lightmap_pars_fragment:c0,lights_lambert_fragment:u0,lights_lambert_pars_fragment:h0,lights_pars_begin:d0,lights_toon_fragment:p0,lights_toon_pars_fragment:m0,lights_phong_fragment:g0,lights_phong_pars_fragment:_0,lights_physical_fragment:x0,lights_physical_pars_fragment:S0,lights_fragment_begin:A0,lights_fragment_maps:v0,lights_fragment_end:y0,logdepthbuf_fragment:M0,logdepthbuf_pars_fragment:C0,logdepthbuf_pars_vertex:T0,logdepthbuf_vertex:E0,map_fragment:b0,map_pars_fragment:w0,map_particle_fragment:R0,map_particle_pars_fragment:I0,metalnessmap_fragment:P0,metalnessmap_pars_fragment:D0,morphinstance_vertex:F0,morphcolor_vertex:L0,morphnormal_vertex:B0,morphtarget_pars_vertex:U0,morphtarget_vertex:O0,normal_fragment_begin:N0,normal_fragment_maps:k0,normal_pars_fragment:z0,normal_pars_vertex:H0,normal_vertex:V0,normalmap_pars_fragment:G0,clearcoat_normal_fragment_begin:W0,clearcoat_normal_fragment_maps:X0,clearcoat_pars_fragment:q0,iridescence_pars_fragment:Q0,opaque_fragment:Y0,packing:K0,premultiplied_alpha_fragment:j0,project_vertex:Z0,dithering_fragment:$0,dithering_pars_fragment:J0,roughnessmap_fragment:e_,roughnessmap_pars_fragment:t_,shadowmap_pars_fragment:n_,shadowmap_pars_vertex:i_,shadowmap_vertex:s_,shadowmask_pars_fragment:r_,skinbase_vertex:a_,skinning_pars_vertex:o_,skinning_vertex:l_,skinnormal_vertex:c_,specularmap_fragment:u_,specularmap_pars_fragment:h_,tonemapping_fragment:d_,tonemapping_pars_fragment:f_,transmission_fragment:p_,transmission_pars_fragment:m_,uv_pars_fragment:g_,uv_pars_vertex:__,uv_vertex:x_,worldpos_vertex:S_,background_vert:A_,background_frag:v_,backgroundCube_vert:y_,backgroundCube_frag:M_,cube_vert:C_,cube_frag:T_,depth_vert:E_,depth_frag:b_,distance_vert:w_,distance_frag:R_,equirect_vert:I_,equirect_frag:P_,linedashed_vert:D_,linedashed_frag:F_,meshbasic_vert:L_,meshbasic_frag:B_,meshlambert_vert:U_,meshlambert_frag:O_,meshmatcap_vert:N_,meshmatcap_frag:k_,meshnormal_vert:z_,meshnormal_frag:H_,meshphong_vert:V_,meshphong_frag:G_,meshphysical_vert:W_,meshphysical_frag:X_,meshtoon_vert:q_,meshtoon_frag:Q_,points_vert:Y_,points_frag:K_,shadow_vert:j_,shadow_frag:Z_,sprite_vert:$_,sprite_frag:J_},_e={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new Me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ni={basic:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:sn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:sn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:sn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new je(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:sn([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:sn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:sn([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:sn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:sn([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:sn([_e.common,_e.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:sn([_e.lights,_e.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};ni.physical={uniforms:sn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const za={r:0,b:0,g:0},cs=new Zn,ex=new He;function tx(r,e,t,n,i,s){const a=new je(0);let o=i===!0?0:1,l,c,u=null,h=0,d=null;function f(x){let v=x.isScene===!0?x.background:null;if(v&&v.isTexture){const A=x.backgroundBlurriness>0;v=e.get(v,A)}return v}function m(x){let v=!1;const A=f(x);A===null?p(a,o):A&&A.isColor&&(p(A,1),v=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||v)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,v){const A=f(v);A&&(A.isCubeTexture||A.mapping===yo)?(c===void 0&&(c=new Xe(new Ds(1,1,1),new cn({name:"BackgroundCubeMaterial",uniforms:Ar(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(y,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),cs.copy(v.backgroundRotation),cs.x*=-1,cs.y*=-1,cs.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(cs.y*=-1,cs.z*=-1),c.material.uniforms.envMap.value=A,c.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(ex.makeRotationFromEuler(cs)),c.material.toneMapped=st.getTransfer(A.colorSpace)!==ut,(u!==A||h!==A.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=A,h=A.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null)):A&&A.isTexture&&(l===void 0&&(l=new Xe(new Rs(2,2),new cn({name:"BackgroundMaterial",uniforms:Ar(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=A,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=st.getTransfer(A.colorSpace)!==ut,A.matrixAutoUpdate===!0&&A.updateMatrix(),l.material.uniforms.uvTransform.value.copy(A.matrix),(u!==A||h!==A.version||d!==r.toneMapping)&&(l.material.needsUpdate=!0,u=A,h=A.version,d=r.toneMapping),l.layers.enableAll(),x.unshift(l,l.geometry,l.material,0,0,null))}function p(x,v){x.getRGB(za,gf(r)),t.buffers.color.setClear(za.r,za.g,za.b,v,s)}function g(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),o=v,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(x){o=x,p(a,o)},render:m,addToRenderList:_,dispose:g}}function nx(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(w,P,I,L,B){let U=!1;const O=h(w,L,I,P);s!==O&&(s=O,c(s.object)),U=f(w,L,I,B),U&&m(w,L,I,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(U||a)&&(a=!1,A(w,P,I,L),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(w){return r.bindVertexArray(w)}function u(w){return r.deleteVertexArray(w)}function h(w,P,I,L){const B=L.wireframe===!0;let U=n[P.id];U===void 0&&(U={},n[P.id]=U);const O=w.isInstancedMesh===!0?w.id:0;let q=U[O];q===void 0&&(q={},U[O]=q);let G=q[I.id];G===void 0&&(G={},q[I.id]=G);let J=G[B];return J===void 0&&(J=d(l()),G[B]=J),J}function d(w){const P=[],I=[],L=[];for(let B=0;B<t;B++)P[B]=0,I[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:I,attributeDivisors:L,object:w,attributes:{},index:null}}function f(w,P,I,L){const B=s.attributes,U=P.attributes;let O=0;const q=I.getAttributes();for(const G in q)if(q[G].location>=0){const ae=B[G];let re=U[G];if(re===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(re=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(re=w.instanceColor)),ae===void 0||ae.attribute!==re||re&&ae.data!==re.data)return!0;O++}return s.attributesNum!==O||s.index!==L}function m(w,P,I,L){const B={},U=P.attributes;let O=0;const q=I.getAttributes();for(const G in q)if(q[G].location>=0){let ae=U[G];ae===void 0&&(G==="instanceMatrix"&&w.instanceMatrix&&(ae=w.instanceMatrix),G==="instanceColor"&&w.instanceColor&&(ae=w.instanceColor));const re={};re.attribute=ae,ae&&ae.data&&(re.data=ae.data),B[G]=re,O++}s.attributes=B,s.attributesNum=O,s.index=L}function _(){const w=s.newAttributes;for(let P=0,I=w.length;P<I;P++)w[P]=0}function p(w){g(w,0)}function g(w,P){const I=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;I[w]=1,L[w]===0&&(r.enableVertexAttribArray(w),L[w]=1),B[w]!==P&&(r.vertexAttribDivisor(w,P),B[w]=P)}function x(){const w=s.newAttributes,P=s.enabledAttributes;for(let I=0,L=P.length;I<L;I++)P[I]!==w[I]&&(r.disableVertexAttribArray(I),P[I]=0)}function v(w,P,I,L,B,U,O){O===!0?r.vertexAttribIPointer(w,P,I,B,U):r.vertexAttribPointer(w,P,I,L,B,U)}function A(w,P,I,L){_();const B=L.attributes,U=I.getAttributes(),O=P.defaultAttributeValues;for(const q in U){const G=U[q];if(G.location>=0){let J=B[q];if(J===void 0&&(q==="instanceMatrix"&&w.instanceMatrix&&(J=w.instanceMatrix),q==="instanceColor"&&w.instanceColor&&(J=w.instanceColor)),J!==void 0){const ae=J.normalized,re=J.itemSize,xe=e.get(J);if(xe===void 0)continue;const Ae=xe.buffer,Re=xe.type,X=xe.bytesPerElement,te=Re===r.INT||Re===r.UNSIGNED_INT||J.gpuType===Qc;if(J.isInterleavedBufferAttribute){const se=J.data,Te=se.stride,pe=J.offset;if(se.isInstancedInterleavedBuffer){for(let Ee=0;Ee<G.locationSize;Ee++)g(G.location+Ee,se.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let Ee=0;Ee<G.locationSize;Ee++)p(G.location+Ee);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let Ee=0;Ee<G.locationSize;Ee++)v(G.location+Ee,re/G.locationSize,Re,ae,Te*X,(pe+re/G.locationSize*Ee)*X,te)}else{if(J.isInstancedBufferAttribute){for(let se=0;se<G.locationSize;se++)g(G.location+se,J.meshPerAttribute);w.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let se=0;se<G.locationSize;se++)p(G.location+se);r.bindBuffer(r.ARRAY_BUFFER,Ae);for(let se=0;se<G.locationSize;se++)v(G.location+se,re/G.locationSize,Re,ae,re*X,re/G.locationSize*se*X,te)}}else if(O!==void 0){const ae=O[q];if(ae!==void 0)switch(ae.length){case 2:r.vertexAttrib2fv(G.location,ae);break;case 3:r.vertexAttrib3fv(G.location,ae);break;case 4:r.vertexAttrib4fv(G.location,ae);break;default:r.vertexAttrib1fv(G.location,ae)}}}}x()}function y(){M();for(const w in n){const P=n[w];for(const I in P){const L=P[I];for(const B in L){const U=L[B];for(const O in U)u(U[O].object),delete U[O];delete L[B]}}delete n[w]}}function T(w){if(n[w.id]===void 0)return;const P=n[w.id];for(const I in P){const L=P[I];for(const B in L){const U=L[B];for(const O in U)u(U[O].object),delete U[O];delete L[B]}}delete n[w.id]}function C(w){for(const P in n){const I=n[P];for(const L in I){const B=I[L];if(B[w.id]===void 0)continue;const U=B[w.id];for(const O in U)u(U[O].object),delete U[O];delete B[w.id]}}}function S(w){for(const P in n){const I=n[P],L=w.isInstancedMesh===!0?w.id:0,B=I[L];if(B!==void 0){for(const U in B){const O=B[U];for(const q in O)u(O[q].object),delete O[q];delete B[U]}delete I[L],Object.keys(I).length===0&&delete n[P]}}}function M(){R(),a=!0,s!==i&&(s=i,c(s.object))}function R(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:M,resetDefaultState:R,dispose:y,releaseStatesOfGeometry:T,releaseStatesOfObject:S,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:x}}function ix(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let m=0;m<h;m++)f+=u[m];t.update(f,n,1)}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)a(c[m],u[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let m=0;for(let _=0;_<h;_++)m+=u[_]*d[_];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function sx(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(C){return!(C!==ln&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(C){const S=C===ui&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==mn&&n.convert(C)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==zn&&!S)}function l(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),p=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),A=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:A,maxSamples:y,samples:T}}function rx(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new Gi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||i;return i=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=r.get(h);if(!i||m===null||m.length===0||s&&!p)s?u(null):c();else{const x=s?0:n,v=x*4;let A=g.clippingState||null;l.value=A,A=u(m,d,v,f);for(let y=0;y!==v;++y)A[y]=t[y];g.clippingState=A,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,m){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const g=f+_*4,x=d.matrixWorldInverse;o.getNormalMatrix(x),(p===null||p.length<g)&&(p=new Float32Array(g));for(let v=0,A=f;v!==_;++v,A+=4)a.copy(h[v]).applyMatrix4(x,o),a.normal.toArray(p,A),p[A+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}const qi=4,Eh=[.125,.215,.35,.446,.526,.582],_s=20,ax=256,Lr=new fa,bh=new je;let ol=null,ll=0,cl=0,ul=!1;const ox=new D;class wh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=ox}=s;ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ph(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ih(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(ol,ll,cl),this._renderer.xr.enabled=ul,e.scissorTest=!1,$s(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ws||e.mapping===gr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ol=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),cl=this._renderer.getActiveMipmapLevel(),ul=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:en,minFilter:en,generateMipmaps:!1,type:ui,format:ln,colorSpace:xr,depthBuffer:!1},i=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=lx(s)),this._blurMaterial=ux(s,e,t),this._ggxMaterial=cx(s,e,t)}return i}_compileMaterial(e){const t=new Xe(new Xt,e);this._renderer.compile(t,Lr)}_sceneToCubeUV(e,t,n,i,s){const l=new pn(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(bh),h.toneMapping=li,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Xe(new Ds,new ci({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,p=_.material;let g=!1;const x=e.background;x?x.isColor&&(p.color.copy(x),e.background=null,g=!0):(p.color.copy(bh),g=!0);for(let v=0;v<6;v++){const A=v%3;A===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):A===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));const y=this._cubeSize;$s(i,A*y,v>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(_,l),h.render(e,l)}h.toneMapping=f,h.autoClear=d,e.background=x}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ws||e.mapping===gr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ph()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ih());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;$s(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Lr)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),d=0+c*1.25,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-qi?n-m+qi:0),g=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=m-t,$s(s,p,g,3*_,2*_),i.setRenderTarget(s),i.render(o,Lr),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,$s(e,p,g,3*_,2*_),i.setRenderTarget(e),i.render(o,Lr)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&at("blur direction must be either latitudinal or longitudinal!");const u=3,h=this._lodMeshes[i];h.material=c;const d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*_s-1),_=s/m,p=isFinite(s)?1+Math.floor(u*_):_s;p>_s&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${_s}`);const g=[];let x=0;for(let C=0;C<_s;++C){const S=C/_,M=Math.exp(-S*S/2);g.push(M),C===0?x+=M:C<p&&(x+=2*M)}for(let C=0;C<g.length;C++)g[C]=g[C]/x;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=g,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;const A=this._sizeLods[i],y=3*A*(i>v-qi?i-v+qi:0),T=4*(this._cubeSize-A);$s(t,y,T,3*A,2*A),l.setRenderTarget(t),l.render(h,Lr)}}function lx(r){const e=[],t=[],n=[];let i=r;const s=r-qi+1+Eh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-qi?l=Eh[a-r+qi-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,m=6,_=3,p=2,g=1,x=new Float32Array(_*m*f),v=new Float32Array(p*m*f),A=new Float32Array(g*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,S=T>2?0:-1,M=[C,S,0,C+2/3,S,0,C+2/3,S+1,0,C,S,0,C+2/3,S+1,0,C,S+1,0];x.set(M,_*m*T),v.set(d,p*m*T);const R=[T,T,T,T,T,T];A.set(R,g*m*T)}const y=new Xt;y.setAttribute("position",new _n(x,_)),y.setAttribute("uv",new _n(v,p)),y.setAttribute("faceIndex",new _n(A,g)),n.push(new Xe(y,null)),i>qi&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Rh(r,e,t){const n=new Kn(r,e,t);return n.texture.mapping=yo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $s(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function cx(r,e,t){return new cn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ax,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:To(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function ux(r,e,t){const n=new Float32Array(_s),i=new D(0,1,0);return new cn({name:"SphericalGaussianBlur",defines:{n:_s,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ih(){return new cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function Ph(){return new cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:To(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ri,depthTest:!1,depthWrite:!1})}function To(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class Af extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new pf(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Ds(5,5,5),s=new cn({name:"CubemapFromEquirect",uniforms:Ar(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:gn,blending:Ri});s.uniforms.tEquirect.value=t;const a=new Xe(i,s),o=t.minFilter;return t.minFilter===As&&(t.minFilter=en),new gg(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function hx(r){let e=new WeakMap,t=new WeakMap,n=null;function i(d,f=!1){return d==null?null:f?a(d):s(d)}function s(d){if(d&&d.isTexture){const f=d.mapping;if(f===Fo||f===Lo)if(e.has(d)){const m=e.get(d).texture;return o(m,d.mapping)}else{const m=d.image;if(m&&m.height>0){const _=new Af(m.height);return _.fromEquirectangularTexture(r,d),e.set(d,_),d.addEventListener("dispose",c),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){const f=d.mapping,m=f===Fo||f===Lo,_=f===ws||f===gr;if(m||_){let p=t.get(d);const g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new wh(r)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),p.texture;if(p!==void 0)return p.texture;{const x=d.image;return m&&x&&x.height>0||_&&x&&l(x)?(n===null&&(n=new wh(r)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,t.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Fo?d.mapping=ws:f===Lo&&(d.mapping=gr),d}function l(d){let f=0;const m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function c(d){const f=d.target;f.removeEventListener("dispose",c);const m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function u(d){const f=d.target;f.removeEventListener("dispose",u);const m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function h(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:h}}function dx(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&oo("WebGLRenderer: "+n+" extension not supported."),i}}}function fx(r,e,t,n){const i={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete i[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(h){const d=[],f=h.index,m=h.attributes.position;let _=0;if(m===void 0)return;if(f!==null){const x=f.array;_=f.version;for(let v=0,A=x.length;v<A;v+=3){const y=x[v+0],T=x[v+1],C=x[v+2];d.push(y,T,T,C,C,y)}}else{const x=m.array;_=m.version;for(let v=0,A=x.length/3-1;v<A;v+=3){const y=v+0,T=v+1,C=v+2;d.push(y,T,T,C,C,y)}}const p=new(m.count>=65535?df:hf)(d,1);p.version=_;const g=s.get(h);g&&e.remove(g),s.set(h,p)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function px(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*a,m),t.update(f,n,m))}function u(d,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let p=0;for(let g=0;g<m;g++)p+=f[g];t.update(p,n,1)}function h(d,f,m,_){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<d.length;g++)c(d[g]/a,f[g],_[g]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,_,0,m);let g=0;for(let x=0;x<m;x++)g+=f[x]*_[x];t.update(g,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function mx(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function gx(r,e,t){const n=new WeakMap,i=new vt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let R=function(){S.dispose(),n.delete(o),o.removeEventListener("dispose",R)};var f=R;d!==void 0&&d.texture.dispose();const m=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,p=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let A=0;m===!0&&(A=1),_===!0&&(A=2),p===!0&&(A=3);let y=o.attributes.position.count*A,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const C=new Float32Array(y*T*4*h),S=new of(C,y,T,h);S.type=zn,S.needsUpdate=!0;const M=A*4;for(let w=0;w<h;w++){const P=g[w],I=x[w],L=v[w],B=y*T*4*w;for(let U=0;U<P.count;U++){const O=U*M;m===!0&&(i.fromBufferAttribute(P,U),C[B+O+0]=i.x,C[B+O+1]=i.y,C[B+O+2]=i.z,C[B+O+3]=0),_===!0&&(i.fromBufferAttribute(I,U),C[B+O+4]=i.x,C[B+O+5]=i.y,C[B+O+6]=i.z,C[B+O+7]=0),p===!0&&(i.fromBufferAttribute(L,U),C[B+O+8]=i.x,C[B+O+9]=i.y,C[B+O+10]=i.z,C[B+O+11]=L.itemSize===4?i.w:1)}}d={count:h,texture:S,size:new Me(y,T)},n.set(o,d),o.addEventListener("dispose",R)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const _=o.morphTargetsRelative?1:1-m;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function _x(r,e,t,n,i){let s=new WeakMap;function a(c){const u=i.render.frame,h=c.geometry,d=e.get(c,h);if(s.get(d)!==u&&(e.update(d),s.set(d,u)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==u&&(t.update(c.instanceMatrix,r.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,r.ARRAY_BUFFER),s.set(c,u))),c.isSkinnedMesh){const f=c.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return d}function o(){s=new WeakMap}function l(c){const u=c.target;u.removeEventListener("dispose",l),n.releaseStatesOfObject(u),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:a,dispose:o}}const xx={[Wd]:"LINEAR_TONE_MAPPING",[Xd]:"REINHARD_TONE_MAPPING",[qd]:"CINEON_TONE_MAPPING",[qc]:"ACES_FILMIC_TONE_MAPPING",[Yd]:"AGX_TONE_MAPPING",[Kd]:"NEUTRAL_TONE_MAPPING",[Qd]:"CUSTOM_TONE_MAPPING"};function Sx(r,e,t,n,i){const s=new Kn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Kn(e,t,{type:ui,depthBuffer:!1,stencilBuffer:!1}),o=new Xt;o.setAttribute("position",new Ut([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Ut([0,2,0,0,2,0],2));const l=new ig({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Xe(o,l),u=new fa(-1,1,1,-1,0,1);let h=null,d=null,f=!1,m,_=null,p=[],g=!1;this.setSize=function(x,v){s.setSize(x,v),a.setSize(x,v);for(let A=0;A<p.length;A++){const y=p[A];y.setSize&&y.setSize(x,v)}},this.setEffects=function(x){p=x,g=p.length>0&&p[0].isRenderPass===!0;const v=s.width,A=s.height;for(let y=0;y<p.length;y++){const T=p[y];T.setSize&&T.setSize(v,A)}},this.begin=function(x,v){if(f||x.toneMapping===li&&p.length===0)return!1;if(_=v,v!==null){const A=v.width,y=v.height;(s.width!==A||s.height!==y)&&this.setSize(A,y)}return g===!1&&x.setRenderTarget(s),m=x.toneMapping,x.toneMapping=li,!0},this.hasRenderPass=function(){return g},this.end=function(x,v){x.toneMapping=m,f=!0;let A=s,y=a;for(let T=0;T<p.length;T++){const C=p[T];if(C.enabled!==!1&&(C.render(x,y,A,v),C.needsSwap!==!1)){const S=A;A=y,y=S}}if(h!==x.outputColorSpace||d!==x.toneMapping){h=x.outputColorSpace,d=x.toneMapping,l.defines={},st.getTransfer(h)===ut&&(l.defines.SRGB_TRANSFER="");const T=xx[d];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=A.texture,x.setRenderTarget(_),x.render(c,u),_=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const vf=new tn,vc=new Sr(1,1),yf=new of,Mf=new Pm,Cf=new pf,Dh=[],Fh=[],Lh=new Float32Array(16),Bh=new Float32Array(9),Uh=new Float32Array(4);function wr(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Dh[i];if(s===void 0&&(s=new Float32Array(i),Dh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Ht(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Eo(r,e){let t=Fh[e];t===void 0&&(t=new Int32Array(e),Fh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function Ax(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function vx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2fv(this.addr,e),Ht(t,e)}}function yx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(zt(t,e))return;r.uniform3fv(this.addr,e),Ht(t,e)}}function Mx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4fv(this.addr,e),Ht(t,e)}}function Cx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Uh.set(n),r.uniformMatrix2fv(this.addr,!1,Uh),Ht(t,n)}}function Tx(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Bh.set(n),r.uniformMatrix3fv(this.addr,!1,Bh),Ht(t,n)}}function Ex(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Ht(t,e)}else{if(zt(t,n))return;Lh.set(n),r.uniformMatrix4fv(this.addr,!1,Lh),Ht(t,n)}}function bx(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function wx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2iv(this.addr,e),Ht(t,e)}}function Rx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3iv(this.addr,e),Ht(t,e)}}function Ix(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4iv(this.addr,e),Ht(t,e)}}function Px(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function Dx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(zt(t,e))return;r.uniform2uiv(this.addr,e),Ht(t,e)}}function Fx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(zt(t,e))return;r.uniform3uiv(this.addr,e),Ht(t,e)}}function Lx(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(zt(t,e))return;r.uniform4uiv(this.addr,e),Ht(t,e)}}function Bx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(vc.compareFunction=t.isReversedDepthBuffer()?Jc:$c,s=vc):s=vf,t.setTexture2D(e||s,i)}function Ux(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Mf,i)}function Ox(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Cf,i)}function Nx(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yf,i)}function kx(r){switch(r){case 5126:return Ax;case 35664:return vx;case 35665:return yx;case 35666:return Mx;case 35674:return Cx;case 35675:return Tx;case 35676:return Ex;case 5124:case 35670:return bx;case 35667:case 35671:return wx;case 35668:case 35672:return Rx;case 35669:case 35673:return Ix;case 5125:return Px;case 36294:return Dx;case 36295:return Fx;case 36296:return Lx;case 35678:case 36198:case 36298:case 36306:case 35682:return Bx;case 35679:case 36299:case 36307:return Ux;case 35680:case 36300:case 36308:case 36293:return Ox;case 36289:case 36303:case 36311:case 36292:return Nx}}function zx(r,e){r.uniform1fv(this.addr,e)}function Hx(r,e){const t=wr(e,this.size,2);r.uniform2fv(this.addr,t)}function Vx(r,e){const t=wr(e,this.size,3);r.uniform3fv(this.addr,t)}function Gx(r,e){const t=wr(e,this.size,4);r.uniform4fv(this.addr,t)}function Wx(r,e){const t=wr(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Xx(r,e){const t=wr(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function qx(r,e){const t=wr(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Qx(r,e){r.uniform1iv(this.addr,e)}function Yx(r,e){r.uniform2iv(this.addr,e)}function Kx(r,e){r.uniform3iv(this.addr,e)}function jx(r,e){r.uniform4iv(this.addr,e)}function Zx(r,e){r.uniform1uiv(this.addr,e)}function $x(r,e){r.uniform2uiv(this.addr,e)}function Jx(r,e){r.uniform3uiv(this.addr,e)}function eS(r,e){r.uniform4uiv(this.addr,e)}function tS(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=vc:a=vf;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function nS(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Mf,s[a])}function iS(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Cf,s[a])}function sS(r,e,t){const n=this.cache,i=e.length,s=Eo(t,i);zt(n,s)||(r.uniform1iv(this.addr,s),Ht(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||yf,s[a])}function rS(r){switch(r){case 5126:return zx;case 35664:return Hx;case 35665:return Vx;case 35666:return Gx;case 35674:return Wx;case 35675:return Xx;case 35676:return qx;case 5124:case 35670:return Qx;case 35667:case 35671:return Yx;case 35668:case 35672:return Kx;case 35669:case 35673:return jx;case 5125:return Zx;case 36294:return $x;case 36295:return Jx;case 36296:return eS;case 35678:case 36198:case 36298:case 36306:case 35682:return tS;case 35679:case 36299:case 36307:return nS;case 35680:case 36300:case 36308:case 36293:return iS;case 36289:case 36303:case 36311:case 36292:return sS}}class aS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kx(t.type)}}class oS{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=rS(t.type)}}class lS{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const hl=/(\w+)(\])?(\[|\.)?/g;function Oh(r,e){r.seq.push(e),r.map[e.id]=e}function cS(r,e,t){const n=r.name,i=n.length;for(hl.lastIndex=0;;){const s=hl.exec(n),a=hl.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){Oh(t,c===void 0?new aS(o,r,e):new oS(o,r,e));break}else{let h=t.map[o];h===void 0&&(h=new lS(o),Oh(t,h)),t=h}}}class no{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);cS(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Nh(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const uS=37297;let hS=0;function dS(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const kh=new We;function fS(r){st._getMatrix(kh,st.workingColorSpace,r);const e=`mat3( ${kh.elements.map(t=>t.toFixed(4))} )`;switch(st.getTransfer(r)){case ao:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function zh(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+dS(r.getShaderSource(e),o)}else return s}function pS(r,e){const t=fS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const mS={[Wd]:"Linear",[Xd]:"Reinhard",[qd]:"Cineon",[qc]:"ACESFilmic",[Yd]:"AgX",[Kd]:"Neutral",[Qd]:"Custom"};function gS(r,e){const t=mS[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Ha=new D;function _S(){st.getLuminanceCoefficients(Ha);const r=Ha.x.toFixed(4),e=Ha.y.toFixed(4),t=Ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function xS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(kr).join(`
`)}function SS(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function AS(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function kr(r){return r!==""}function Hh(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const vS=/^[ \t]*#include +<([\w\d./]+)>/gm;function yc(r){return r.replace(vS,MS)}const yS=new Map;function MS(r,e){let t=Ke[e];if(t===void 0){const n=yS.get(e);if(n!==void 0)t=Ke[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return yc(t)}const CS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(r){return r.replace(CS,TS)}function TS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Wh(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const ES={[ja]:"SHADOWMAP_TYPE_PCF",[Or]:"SHADOWMAP_TYPE_VSM"};function bS(r){return ES[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const wS={[ws]:"ENVMAP_TYPE_CUBE",[gr]:"ENVMAP_TYPE_CUBE",[yo]:"ENVMAP_TYPE_CUBE_UV"};function RS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":wS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const IS={[gr]:"ENVMAP_MODE_REFRACTION"};function PS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":IS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const DS={[Xc]:"ENVMAP_BLENDING_MULTIPLY",[cm]:"ENVMAP_BLENDING_MIX",[um]:"ENVMAP_BLENDING_ADD"};function FS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":DS[r.combine]||"ENVMAP_BLENDING_NONE"}function LS(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function BS(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=bS(t),c=RS(t),u=PS(t),h=FS(t),d=LS(t),f=xS(t),m=SS(s),_=i.createProgram();let p,g,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(kr).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(kr).join(`
`),g.length>0&&(g+=`
`)):(p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(kr).join(`
`),g=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==li?"#define TONE_MAPPING":"",t.toneMapping!==li?Ke.tonemapping_pars_fragment:"",t.toneMapping!==li?gS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,pS("linearToOutputTexel",t.outputColorSpace),_S(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(kr).join(`
`)),a=yc(a),a=Hh(a,t),a=Vh(a,t),o=yc(o),o=Hh(o,t),o=Vh(o,t),a=Gh(a),o=Gh(o),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",t.glslVersion===Ju?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ju?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const v=x+p+a,A=x+g+o,y=Nh(i,i.VERTEX_SHADER,v),T=Nh(i,i.FRAGMENT_SHADER,A);i.attachShader(_,y),i.attachShader(_,T),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(w){if(r.debug.checkShaderErrors){const P=i.getProgramInfoLog(_)||"",I=i.getShaderInfoLog(y)||"",L=i.getShaderInfoLog(T)||"",B=P.trim(),U=I.trim(),O=L.trim();let q=!0,G=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,T);else{const J=zh(i,y,"vertex"),ae=zh(i,T,"fragment");at("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+w.name+`
Material Type: `+w.type+`

Program Info Log: `+B+`
`+J+`
`+ae)}else B!==""?qe("WebGLProgram: Program Info Log:",B):(U===""||O==="")&&(G=!1);G&&(w.diagnostics={runnable:q,programLog:B,vertexShader:{log:U,prefix:p},fragmentShader:{log:O,prefix:g}})}i.deleteShader(y),i.deleteShader(T),S=new no(i,_),M=AS(i,_)}let S;this.getUniforms=function(){return S===void 0&&C(this),S};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let R=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return R===!1&&(R=i.getProgramParameter(_,uS)),R},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=hS++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=T,this}let US=0;class OS{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new NS(e),t.set(e,n)),n}}class NS{constructor(e){this.id=US++,this.code=e,this.usedTimes=0}}function kS(r,e,t,n,i,s){const a=new lf,o=new OS,l=new Set,c=[],u=new Map,h=n.logarithmicDepthBuffer;let d=n.precision;const f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(S){return l.add(S),S===0?"uv":`uv${S}`}function _(S,M,R,w,P){const I=w.fog,L=P.geometry,B=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?w.environment:null,U=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap,O=e.get(S.envMap||B,U),q=O&&O.mapping===yo?O.image.height:null,G=f[S.type];S.precision!==null&&(d=n.getMaxPrecision(S.precision),d!==S.precision&&qe("WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const J=L.morphAttributes.position||L.morphAttributes.normal||L.morphAttributes.color,ae=J!==void 0?J.length:0;let re=0;L.morphAttributes.position!==void 0&&(re=1),L.morphAttributes.normal!==void 0&&(re=2),L.morphAttributes.color!==void 0&&(re=3);let xe,Ae,Re,X;if(G){const lt=ni[G];xe=lt.vertexShader,Ae=lt.fragmentShader}else xe=S.vertexShader,Ae=S.fragmentShader,o.update(S),Re=o.getVertexShaderID(S),X=o.getFragmentShaderID(S);const te=r.getRenderTarget(),se=r.state.buffers.depth.getReversed(),Te=P.isInstancedMesh===!0,pe=P.isBatchedMesh===!0,Ee=!!S.map,Qe=!!S.matcap,Pe=!!O,ze=!!S.aoMap,Ue=!!S.lightMap,Ne=!!S.bumpMap,et=!!S.normalMap,N=!!S.displacementMap,it=!!S.emissiveMap,Ze=!!S.metalnessMap,ht=!!S.roughnessMap,De=S.anisotropy>0,F=S.clearcoat>0,E=S.dispersion>0,H=S.iridescence>0,ee=S.sheen>0,ne=S.transmission>0,$=De&&!!S.anisotropyMap,Ie=F&&!!S.clearcoatMap,ue=F&&!!S.clearcoatNormalMap,Be=F&&!!S.clearcoatRoughnessMap,k=H&&!!S.iridescenceMap,Y=H&&!!S.iridescenceThicknessMap,ie=ee&&!!S.sheenColorMap,de=ee&&!!S.sheenRoughnessMap,Se=!!S.specularMap,me=!!S.specularColorMap,Ge=!!S.specularIntensityMap,z=ne&&!!S.transmissionMap,he=ne&&!!S.thicknessMap,le=!!S.gradientMap,ge=!!S.alphaMap,oe=S.alphaTest>0,j=!!S.alphaHash,Ce=!!S.extensions;let Ve=li;S.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(Ve=r.toneMapping);const xt={shaderID:G,shaderType:S.type,shaderName:S.name,vertexShader:xe,fragmentShader:Ae,defines:S.defines,customVertexShaderID:Re,customFragmentShaderID:X,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:pe,batchingColor:pe&&P._colorsTexture!==null,instancing:Te,instancingColor:Te&&P.instanceColor!==null,instancingMorph:Te&&P.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:xr,alphaToCoverage:!!S.alphaToCoverage,map:Ee,matcap:Qe,envMap:Pe,envMapMode:Pe&&O.mapping,envMapCubeUVHeight:q,aoMap:ze,lightMap:Ue,bumpMap:Ne,normalMap:et,displacementMap:N,emissiveMap:it,normalMapObjectSpace:et&&S.normalMapType===fm,normalMapTangentSpace:et&&S.normalMapType===Zc,metalnessMap:Ze,roughnessMap:ht,anisotropy:De,anisotropyMap:$,clearcoat:F,clearcoatMap:Ie,clearcoatNormalMap:ue,clearcoatRoughnessMap:Be,dispersion:E,iridescence:H,iridescenceMap:k,iridescenceThicknessMap:Y,sheen:ee,sheenColorMap:ie,sheenRoughnessMap:de,specularMap:Se,specularColorMap:me,specularIntensityMap:Ge,transmission:ne,transmissionMap:z,thicknessMap:he,gradientMap:le,opaque:S.transparent===!1&&S.blending===ji&&S.alphaToCoverage===!1,alphaMap:ge,alphaTest:oe,alphaHash:j,combine:S.combine,mapUv:Ee&&m(S.map.channel),aoMapUv:ze&&m(S.aoMap.channel),lightMapUv:Ue&&m(S.lightMap.channel),bumpMapUv:Ne&&m(S.bumpMap.channel),normalMapUv:et&&m(S.normalMap.channel),displacementMapUv:N&&m(S.displacementMap.channel),emissiveMapUv:it&&m(S.emissiveMap.channel),metalnessMapUv:Ze&&m(S.metalnessMap.channel),roughnessMapUv:ht&&m(S.roughnessMap.channel),anisotropyMapUv:$&&m(S.anisotropyMap.channel),clearcoatMapUv:Ie&&m(S.clearcoatMap.channel),clearcoatNormalMapUv:ue&&m(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Be&&m(S.clearcoatRoughnessMap.channel),iridescenceMapUv:k&&m(S.iridescenceMap.channel),iridescenceThicknessMapUv:Y&&m(S.iridescenceThicknessMap.channel),sheenColorMapUv:ie&&m(S.sheenColorMap.channel),sheenRoughnessMapUv:de&&m(S.sheenRoughnessMap.channel),specularMapUv:Se&&m(S.specularMap.channel),specularColorMapUv:me&&m(S.specularColorMap.channel),specularIntensityMapUv:Ge&&m(S.specularIntensityMap.channel),transmissionMapUv:z&&m(S.transmissionMap.channel),thicknessMapUv:he&&m(S.thicknessMap.channel),alphaMapUv:ge&&m(S.alphaMap.channel),vertexTangents:!!L.attributes.tangent&&(et||De),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!L.attributes.color&&L.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!L.attributes.uv&&(Ee||ge),fog:!!I,useFog:S.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:S.wireframe===!1&&(S.flatShading===!0||L.attributes.normal===void 0&&et===!1&&(S.isMeshLambertMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isMeshPhysicalMaterial)),sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:se,skinning:P.isSkinnedMesh===!0,morphTargets:L.morphAttributes.position!==void 0,morphNormals:L.morphAttributes.normal!==void 0,morphColors:L.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:re,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:S.dithering,shadowMapEnabled:r.shadowMap.enabled&&R.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ve,decodeVideoTexture:Ee&&S.map.isVideoTexture===!0&&st.getTransfer(S.map.colorSpace)===ut,decodeVideoTextureEmissive:it&&S.emissiveMap.isVideoTexture===!0&&st.getTransfer(S.emissiveMap.colorSpace)===ut,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===wn,flipSided:S.side===gn,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ce&&S.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ce&&S.extensions.multiDraw===!0||pe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return xt.vertexUv1s=l.has(1),xt.vertexUv2s=l.has(2),xt.vertexUv3s=l.has(3),l.clear(),xt}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)M.push(R),M.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(g(M,S),x(M,S),M.push(r.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function g(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function x(S,M){a.disableAll(),M.instancing&&a.enable(0),M.instancingColor&&a.enable(1),M.instancingMorph&&a.enable(2),M.matcap&&a.enable(3),M.envMap&&a.enable(4),M.normalMapObjectSpace&&a.enable(5),M.normalMapTangentSpace&&a.enable(6),M.clearcoat&&a.enable(7),M.iridescence&&a.enable(8),M.alphaTest&&a.enable(9),M.vertexColors&&a.enable(10),M.vertexAlphas&&a.enable(11),M.vertexUv1s&&a.enable(12),M.vertexUv2s&&a.enable(13),M.vertexUv3s&&a.enable(14),M.vertexTangents&&a.enable(15),M.anisotropy&&a.enable(16),M.alphaHash&&a.enable(17),M.batching&&a.enable(18),M.dispersion&&a.enable(19),M.batchingColor&&a.enable(20),M.gradientMap&&a.enable(21),S.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reversedDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.decodeVideoTextureEmissive&&a.enable(20),M.alphaToCoverage&&a.enable(21),S.push(a.mask)}function v(S){const M=f[S.type];let R;if(M){const w=ni[M];R=eg.clone(w.uniforms)}else R=S.uniforms;return R}function A(S,M){let R=u.get(M);return R!==void 0?++R.usedTimes:(R=new BS(r,M,S,i),c.push(R),u.set(M,R)),R}function y(S){if(--S.usedTimes===0){const M=c.indexOf(S);c[M]=c[c.length-1],c.pop(),u.delete(S.cacheKey),S.destroy()}}function T(S){o.remove(S)}function C(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:v,acquireProgram:A,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:C}}function zS(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function HS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Xh(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function qh(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,p,g){let x=r[e];return x===void 0?(x={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},r[e]=x):(x.id=d.id,x.object=d,x.geometry=f,x.material=m,x.materialVariant=a(d),x.groupOrder=_,x.renderOrder=d.renderOrder,x.z=p,x.group=g),e++,x}function l(d,f,m,_,p,g){const x=o(d,f,m,_,p,g);m.transmission>0?n.push(x):m.transparent===!0?i.push(x):t.push(x)}function c(d,f,m,_,p,g){const x=o(d,f,m,_,p,g);m.transmission>0?n.unshift(x):m.transparent===!0?i.unshift(x):t.unshift(x)}function u(d,f){t.length>1&&t.sort(d||HS),n.length>1&&n.sort(f||Xh),i.length>1&&i.sort(f||Xh)}function h(){for(let d=e,f=r.length;d<f;d++){const m=r[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:l,unshift:c,finish:h,sort:u}}function VS(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new qh,r.set(n,[a])):i>=s.length?(a=new qh,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function GS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new je};break;case"SpotLight":t={position:new D,direction:new D,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new je,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new je,groundColor:new je};break;case"RectAreaLight":t={color:new je,position:new D,halfWidth:new D,halfHeight:new D};break}return r[e.id]=t,t}}}function WS(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Me,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let XS=0;function qS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function QS(r){const e=new GS,t=WS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new D);const i=new D,s=new He,a=new He;function o(c){let u=0,h=0,d=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,x=0,v=0,A=0,y=0,T=0,C=0;c.sort(qS);for(let M=0,R=c.length;M<R;M++){const w=c[M],P=w.color,I=w.intensity,L=w.distance;let B=null;if(w.shadow&&w.shadow.map&&(w.shadow.map.texture.format===_r?B=w.shadow.map.texture:B=w.shadow.map.depthTexture||w.shadow.map.texture),w.isAmbientLight)u+=P.r*I,h+=P.g*I,d+=P.b*I;else if(w.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(w.sh.coefficients[U],I);C++}else if(w.isDirectionalLight){const U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),w.castShadow){const O=w.shadow,q=t.get(w);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=B,n.directionalShadowMatrix[f]=w.shadow.matrix,x++}n.directional[f]=U,f++}else if(w.isSpotLight){const U=e.get(w);U.position.setFromMatrixPosition(w.matrixWorld),U.color.copy(P).multiplyScalar(I),U.distance=L,U.coneCos=Math.cos(w.angle),U.penumbraCos=Math.cos(w.angle*(1-w.penumbra)),U.decay=w.decay,n.spot[_]=U;const O=w.shadow;if(w.map&&(n.spotLightMap[y]=w.map,y++,O.updateMatrices(w),w.castShadow&&T++),n.spotLightMatrix[_]=O.matrix,w.castShadow){const q=t.get(w);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=B,A++}_++}else if(w.isRectAreaLight){const U=e.get(w);U.color.copy(P).multiplyScalar(I),U.halfWidth.set(w.width*.5,0,0),U.halfHeight.set(0,w.height*.5,0),n.rectArea[p]=U,p++}else if(w.isPointLight){const U=e.get(w);if(U.color.copy(w.color).multiplyScalar(w.intensity),U.distance=w.distance,U.decay=w.decay,w.castShadow){const O=w.shadow,q=t.get(w);q.shadowIntensity=O.intensity,q.shadowBias=O.bias,q.shadowNormalBias=O.normalBias,q.shadowRadius=O.radius,q.shadowMapSize=O.mapSize,q.shadowCameraNear=O.camera.near,q.shadowCameraFar=O.camera.far,n.pointShadow[m]=q,n.pointShadowMap[m]=B,n.pointShadowMatrix[m]=w.shadow.matrix,v++}n.point[m]=U,m++}else if(w.isHemisphereLight){const U=e.get(w);U.skyColor.copy(w.color).multiplyScalar(I),U.groundColor.copy(w.groundColor).multiplyScalar(I),n.hemi[g]=U,g++}}p>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_e.LTC_FLOAT_1,n.rectAreaLTC2=_e.LTC_FLOAT_2):(n.rectAreaLTC1=_e.LTC_HALF_1,n.rectAreaLTC2=_e.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const S=n.hash;(S.directionalLength!==f||S.pointLength!==m||S.spotLength!==_||S.rectAreaLength!==p||S.hemiLength!==g||S.numDirectionalShadows!==x||S.numPointShadows!==v||S.numSpotShadows!==A||S.numSpotMaps!==y||S.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=A,n.spotShadowMap.length=A,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=A+y-T,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,S.directionalLength=f,S.pointLength=m,S.spotLength=_,S.rectAreaLength=p,S.hemiLength=g,S.numDirectionalShadows=x,S.numPointShadows=v,S.numSpotShadows=A,S.numSpotMaps=y,S.numLightProbes=C,n.version=XS++)}function l(c,u){let h=0,d=0,f=0,m=0,_=0;const p=u.matrixWorldInverse;for(let g=0,x=c.length;g<x;g++){const v=c[g];if(v.isDirectionalLight){const A=n.directional[h];A.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),h++}else if(v.isSpotLight){const A=n.spot[f];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),A.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),A.direction.sub(i),A.direction.transformDirection(p),f++}else if(v.isRectAreaLight){const A=n.rectArea[m];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),a.identity(),s.copy(v.matrixWorld),s.premultiply(p),a.extractRotation(s),A.halfWidth.set(v.width*.5,0,0),A.halfHeight.set(0,v.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),m++}else if(v.isPointLight){const A=n.point[d];A.position.setFromMatrixPosition(v.matrixWorld),A.position.applyMatrix4(p),d++}else if(v.isHemisphereLight){const A=n.hemi[_];A.direction.setFromMatrixPosition(v.matrixWorld),A.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function Qh(r){const e=new QS(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function YS(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Qh(r),e.set(i,[o])):s>=a.length?(o=new Qh(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const KS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,ZS=[new D(1,0,0),new D(-1,0,0),new D(0,1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1)],$S=[new D(0,-1,0),new D(0,-1,0),new D(0,0,1),new D(0,0,-1),new D(0,-1,0),new D(0,-1,0)],Yh=new He,Br=new D,dl=new D;function JS(r,e,t){let n=new nu;const i=new Me,s=new Me,a=new vt,o=new rg,l=new ag,c={},u=t.maxTextureSize,h={[jn]:gn,[gn]:jn,[wn]:wn},d=new cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Me},radius:{value:4}},vertexShader:KS,fragmentShader:jS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Xt;m.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Xe(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ja;let g=this.type;this.render=function(T,C,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Xp&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=ja);const M=r.getRenderTarget(),R=r.getActiveCubeFace(),w=r.getActiveMipmapLevel(),P=r.state;P.setBlending(Ri),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);const I=g!==this.type;I&&C.traverse(function(L){L.material&&(Array.isArray(L.material)?L.material.forEach(B=>B.needsUpdate=!0):L.material.needsUpdate=!0)});for(let L=0,B=T.length;L<B;L++){const U=T[L],O=U.shadow;if(O===void 0){qe("WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);const q=O.getFrameExtents();i.multiply(q),s.copy(O.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,O.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,O.mapSize.y=s.y));const G=r.state.buffers.depth.getReversed();if(O.camera._reversedDepth=G,O.map===null||I===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Or){if(U.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Kn(i.x,i.y,{format:_r,type:ui,minFilter:en,magFilter:en,generateMipmaps:!1}),O.map.texture.name=U.name+".shadowMap",O.map.depthTexture=new Sr(i.x,i.y,zn),O.map.depthTexture.name=U.name+".shadowMapDepth",O.map.depthTexture.format=hi,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt}else U.isPointLight?(O.map=new Af(i.x),O.map.depthTexture=new $m(i.x,on)):(O.map=new Kn(i.x,i.y),O.map.depthTexture=new Sr(i.x,i.y,on)),O.map.depthTexture.name=U.name+".shadowMap",O.map.depthTexture.format=hi,this.type===ja?(O.map.depthTexture.compareFunction=G?Jc:$c,O.map.depthTexture.minFilter=en,O.map.depthTexture.magFilter=en):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Yt,O.map.depthTexture.magFilter=Yt);O.camera.updateProjectionMatrix()}const J=O.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<J;ae++){if(O.map.isWebGLCubeRenderTarget)r.setRenderTarget(O.map,ae),r.clear();else{ae===0&&(r.setRenderTarget(O.map),r.clear());const re=O.getViewport(ae);a.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),P.viewport(a)}if(U.isPointLight){const re=O.camera,xe=O.matrix,Ae=U.distance||re.far;Ae!==re.far&&(re.far=Ae,re.updateProjectionMatrix()),Br.setFromMatrixPosition(U.matrixWorld),re.position.copy(Br),dl.copy(re.position),dl.add(ZS[ae]),re.up.copy($S[ae]),re.lookAt(dl),re.updateMatrixWorld(),xe.makeTranslation(-Br.x,-Br.y,-Br.z),Yh.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Yh,re.coordinateSystem,re.reversedDepth)}else O.updateMatrices(U);n=O.getFrustum(),A(C,S,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===Or&&x(O,S),O.needsUpdate=!1}g=this.type,p.needsUpdate=!1,r.setRenderTarget(M,R,w)};function x(T,C){const S=e.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Kn(i.x,i.y,{format:_r,type:ui})),d.uniforms.shadow_pass.value=T.map.depthTexture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(C,null,S,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(C,null,S,f,_,null)}function v(T,C,S,M){let R=null;const w=S.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(w!==void 0)R=w;else if(R=S.isPointLight===!0?l:o,r.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const P=R.uuid,I=C.uuid;let L=c[P];L===void 0&&(L={},c[P]=L);let B=L[I];B===void 0&&(B=R.clone(),L[I]=B,C.addEventListener("dispose",y)),R=B}if(R.visible=C.visible,R.wireframe=C.wireframe,M===Or?R.side=C.shadowSide!==null?C.shadowSide:C.side:R.side=C.shadowSide!==null?C.shadowSide:h[C.side],R.alphaMap=C.alphaMap,R.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,R.map=C.map,R.clipShadows=C.clipShadows,R.clippingPlanes=C.clippingPlanes,R.clipIntersection=C.clipIntersection,R.displacementMap=C.displacementMap,R.displacementScale=C.displacementScale,R.displacementBias=C.displacementBias,R.wireframeLinewidth=C.wireframeLinewidth,R.linewidth=C.linewidth,S.isPointLight===!0&&R.isMeshDistanceMaterial===!0){const P=r.properties.get(R);P.light=S}return R}function A(T,C,S,M,R){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&R===Or)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,T.matrixWorld);const I=e.update(T),L=T.material;if(Array.isArray(L)){const B=I.groups;for(let U=0,O=B.length;U<O;U++){const q=B[U],G=L[q.materialIndex];if(G&&G.visible){const J=v(T,G,M,R);T.onBeforeShadow(r,T,C,S,I,J,q),r.renderBufferDirect(S,null,I,J,T,q),T.onAfterShadow(r,T,C,S,I,J,q)}}}else if(L.visible){const B=v(T,L,M,R);T.onBeforeShadow(r,T,C,S,I,B,null),r.renderBufferDirect(S,null,I,B,T,null),T.onAfterShadow(r,T,C,S,I,B,null)}}const P=T.children;for(let I=0,L=P.length;I<L;I++)A(P[I],C,S,M,R)}function y(T){T.target.removeEventListener("dispose",y);for(const S in c){const M=c[S],R=T.target.uuid;R in M&&(M[R].dispose(),delete M[R])}}}function eA(r,e){function t(){let z=!1;const he=new vt;let le=null;const ge=new vt(0,0,0,0);return{setMask:function(oe){le!==oe&&!z&&(r.colorMask(oe,oe,oe,oe),le=oe)},setLocked:function(oe){z=oe},setClear:function(oe,j,Ce,Ve,xt){xt===!0&&(oe*=Ve,j*=Ve,Ce*=Ve),he.set(oe,j,Ce,Ve),ge.equals(he)===!1&&(r.clearColor(oe,j,Ce,Ve),ge.copy(he))},reset:function(){z=!1,le=null,ge.set(-1,0,0,0)}}}function n(){let z=!1,he=!1,le=null,ge=null,oe=null;return{setReversed:function(j){if(he!==j){const Ce=e.get("EXT_clip_control");j?Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.ZERO_TO_ONE_EXT):Ce.clipControlEXT(Ce.LOWER_LEFT_EXT,Ce.NEGATIVE_ONE_TO_ONE_EXT),he=j;const Ve=oe;oe=null,this.setClear(Ve)}},getReversed:function(){return he},setTest:function(j){j?te(r.DEPTH_TEST):se(r.DEPTH_TEST)},setMask:function(j){le!==j&&!z&&(r.depthMask(j),le=j)},setFunc:function(j){if(he&&(j=Cm[j]),ge!==j){switch(j){case Dl:r.depthFunc(r.NEVER);break;case Fl:r.depthFunc(r.ALWAYS);break;case Ll:r.depthFunc(r.LESS);break;case mr:r.depthFunc(r.LEQUAL);break;case Bl:r.depthFunc(r.EQUAL);break;case Ul:r.depthFunc(r.GEQUAL);break;case Ol:r.depthFunc(r.GREATER);break;case Nl:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ge=j}},setLocked:function(j){z=j},setClear:function(j){oe!==j&&(oe=j,he&&(j=1-j),r.clearDepth(j))},reset:function(){z=!1,le=null,ge=null,oe=null,he=!1}}}function i(){let z=!1,he=null,le=null,ge=null,oe=null,j=null,Ce=null,Ve=null,xt=null;return{setTest:function(lt){z||(lt?te(r.STENCIL_TEST):se(r.STENCIL_TEST))},setMask:function(lt){he!==lt&&!z&&(r.stencilMask(lt),he=lt)},setFunc:function(lt,fi,pi){(le!==lt||ge!==fi||oe!==pi)&&(r.stencilFunc(lt,fi,pi),le=lt,ge=fi,oe=pi)},setOp:function(lt,fi,pi){(j!==lt||Ce!==fi||Ve!==pi)&&(r.stencilOp(lt,fi,pi),j=lt,Ce=fi,Ve=pi)},setLocked:function(lt){z=lt},setClear:function(lt){xt!==lt&&(r.clearStencil(lt),xt=lt)},reset:function(){z=!1,he=null,le=null,ge=null,oe=null,j=null,Ce=null,Ve=null,xt=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,x=null,v=null,A=null,y=null,T=null,C=new je(0,0,0),S=0,M=!1,R=null,w=null,P=null,I=null,L=null;const B=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,O=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(q)[1]),U=O>=1):q.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),U=O>=2);let G=null,J={};const ae=r.getParameter(r.SCISSOR_BOX),re=r.getParameter(r.VIEWPORT),xe=new vt().fromArray(ae),Ae=new vt().fromArray(re);function Re(z,he,le,ge){const oe=new Uint8Array(4),j=r.createTexture();r.bindTexture(z,j),r.texParameteri(z,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(z,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ce=0;Ce<le;Ce++)z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,ge,0,r.RGBA,r.UNSIGNED_BYTE,oe):r.texImage2D(he+Ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,oe);return j}const X={};X[r.TEXTURE_2D]=Re(r.TEXTURE_2D,r.TEXTURE_2D,1),X[r.TEXTURE_CUBE_MAP]=Re(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[r.TEXTURE_2D_ARRAY]=Re(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),X[r.TEXTURE_3D]=Re(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc(mr),Ne(!1),et(Yu),te(r.CULL_FACE),ze(Ri);function te(z){u[z]!==!0&&(r.enable(z),u[z]=!0)}function se(z){u[z]!==!1&&(r.disable(z),u[z]=!1)}function Te(z,he){return h[z]!==he?(r.bindFramebuffer(z,he),h[z]=he,z===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=he),z===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=he),!0):!1}function pe(z,he){let le=f,ge=!1;if(z){le=d.get(he),le===void 0&&(le=[],d.set(he,le));const oe=z.textures;if(le.length!==oe.length||le[0]!==r.COLOR_ATTACHMENT0){for(let j=0,Ce=oe.length;j<Ce;j++)le[j]=r.COLOR_ATTACHMENT0+j;le.length=oe.length,ge=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,ge=!0);ge&&r.drawBuffers(le)}function Ee(z){return m!==z?(r.useProgram(z),m=z,!0):!1}const Qe={[ms]:r.FUNC_ADD,[qp]:r.FUNC_SUBTRACT,[Qp]:r.FUNC_REVERSE_SUBTRACT};Qe[Yp]=r.MIN,Qe[Kp]=r.MAX;const Pe={[jp]:r.ZERO,[Zp]:r.ONE,[$p]:r.SRC_COLOR,[jr]:r.SRC_ALPHA,[sm]:r.SRC_ALPHA_SATURATE,[nm]:r.DST_COLOR,[em]:r.DST_ALPHA,[Jp]:r.ONE_MINUS_SRC_COLOR,[Zr]:r.ONE_MINUS_SRC_ALPHA,[im]:r.ONE_MINUS_DST_COLOR,[tm]:r.ONE_MINUS_DST_ALPHA,[rm]:r.CONSTANT_COLOR,[am]:r.ONE_MINUS_CONSTANT_COLOR,[om]:r.CONSTANT_ALPHA,[lm]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(z,he,le,ge,oe,j,Ce,Ve,xt,lt){if(z===Ri){_===!0&&(se(r.BLEND),_=!1);return}if(_===!1&&(te(r.BLEND),_=!0),z!==Gd){if(z!==p||lt!==M){if((g!==ms||A!==ms)&&(r.blendEquation(r.FUNC_ADD),g=ms,A=ms),lt)switch(z){case ji:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pl:r.blendFunc(r.ONE,r.ONE);break;case Ku:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case ju:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:at("WebGLState: Invalid blending: ",z);break}else switch(z){case ji:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Pl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ku:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case ju:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",z);break}x=null,v=null,y=null,T=null,C.set(0,0,0),S=0,p=z,M=lt}return}oe=oe||he,j=j||le,Ce=Ce||ge,(he!==g||oe!==A)&&(r.blendEquationSeparate(Qe[he],Qe[oe]),g=he,A=oe),(le!==x||ge!==v||j!==y||Ce!==T)&&(r.blendFuncSeparate(Pe[le],Pe[ge],Pe[j],Pe[Ce]),x=le,v=ge,y=j,T=Ce),(Ve.equals(C)===!1||xt!==S)&&(r.blendColor(Ve.r,Ve.g,Ve.b,xt),C.copy(Ve),S=xt),p=z,M=!1}function Ue(z,he){z.side===wn?se(r.CULL_FACE):te(r.CULL_FACE);let le=z.side===gn;he&&(le=!le),Ne(le),z.blending===ji&&z.transparent===!1?ze(Ri):ze(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),s.setMask(z.colorWrite);const ge=z.stencilWrite;o.setTest(ge),ge&&(o.setMask(z.stencilWriteMask),o.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),o.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),it(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):se(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(z){R!==z&&(z?r.frontFace(r.CW):r.frontFace(r.CCW),R=z)}function et(z){z!==Gp?(te(r.CULL_FACE),z!==w&&(z===Yu?r.cullFace(r.BACK):z===Wp?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):se(r.CULL_FACE),w=z}function N(z){z!==P&&(U&&r.lineWidth(z),P=z)}function it(z,he,le){z?(te(r.POLYGON_OFFSET_FILL),(I!==he||L!==le)&&(I=he,L=le,a.getReversed()&&(he=-he),r.polygonOffset(he,le))):se(r.POLYGON_OFFSET_FILL)}function Ze(z){z?te(r.SCISSOR_TEST):se(r.SCISSOR_TEST)}function ht(z){z===void 0&&(z=r.TEXTURE0+B-1),G!==z&&(r.activeTexture(z),G=z)}function De(z,he,le){le===void 0&&(G===null?le=r.TEXTURE0+B-1:le=G);let ge=J[le];ge===void 0&&(ge={type:void 0,texture:void 0},J[le]=ge),(ge.type!==z||ge.texture!==he)&&(G!==le&&(r.activeTexture(le),G=le),r.bindTexture(z,he||X[z]),ge.type=z,ge.texture=he)}function F(){const z=J[G];z!==void 0&&z.type!==void 0&&(r.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(z){at("WebGLState:",z)}}function H(){try{r.compressedTexImage3D(...arguments)}catch(z){at("WebGLState:",z)}}function ee(){try{r.texSubImage2D(...arguments)}catch(z){at("WebGLState:",z)}}function ne(){try{r.texSubImage3D(...arguments)}catch(z){at("WebGLState:",z)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(z){at("WebGLState:",z)}}function Ie(){try{r.compressedTexSubImage3D(...arguments)}catch(z){at("WebGLState:",z)}}function ue(){try{r.texStorage2D(...arguments)}catch(z){at("WebGLState:",z)}}function Be(){try{r.texStorage3D(...arguments)}catch(z){at("WebGLState:",z)}}function k(){try{r.texImage2D(...arguments)}catch(z){at("WebGLState:",z)}}function Y(){try{r.texImage3D(...arguments)}catch(z){at("WebGLState:",z)}}function ie(z){xe.equals(z)===!1&&(r.scissor(z.x,z.y,z.z,z.w),xe.copy(z))}function de(z){Ae.equals(z)===!1&&(r.viewport(z.x,z.y,z.z,z.w),Ae.copy(z))}function Se(z,he){let le=c.get(he);le===void 0&&(le=new WeakMap,c.set(he,le));let ge=le.get(z);ge===void 0&&(ge=r.getUniformBlockIndex(he,z.name),le.set(z,ge))}function me(z,he){const ge=c.get(he).get(z);l.get(he)!==ge&&(r.uniformBlockBinding(he,ge,z.__bindingPointIndex),l.set(he,ge))}function Ge(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},G=null,J={},h={},d=new WeakMap,f=[],m=null,_=!1,p=null,g=null,x=null,v=null,A=null,y=null,T=null,C=new je(0,0,0),S=0,M=!1,R=null,w=null,P=null,I=null,L=null,xe.set(0,0,r.canvas.width,r.canvas.height),Ae.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:se,bindFramebuffer:Te,drawBuffers:pe,useProgram:Ee,setBlending:ze,setMaterial:Ue,setFlipSided:Ne,setCullFace:et,setLineWidth:N,setPolygonOffset:it,setScissorTest:Ze,activeTexture:ht,bindTexture:De,unbindTexture:F,compressedTexImage2D:E,compressedTexImage3D:H,texImage2D:k,texImage3D:Y,updateUBOMapping:Se,uniformBlockBinding:me,texStorage2D:ue,texStorage3D:Be,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:$,compressedTexSubImage3D:Ie,scissor:ie,viewport:de,reset:Ge}}function tA(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Me,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,E){return f?new OffscreenCanvas(F,E):ta("canvas")}function _(F,E,H){let ee=1;const ne=De(F);if((ne.width>H||ne.height>H)&&(ee=H/Math.max(ne.width,ne.height)),ee<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const $=Math.floor(ee*ne.width),Ie=Math.floor(ee*ne.height);h===void 0&&(h=m($,Ie));const ue=E?m($,Ie):h;return ue.width=$,ue.height=Ie,ue.getContext("2d").drawImage(F,0,0,$,Ie),qe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+$+"x"+Ie+")."),ue}else return"data"in F&&qe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),F;return F}function p(F){return F.generateMipmaps}function g(F){r.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(F,E,H,ee,ne=!1){if(F!==null){if(r[F]!==void 0)return r[F];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let $=E;if(E===r.RED&&(H===r.FLOAT&&($=r.R32F),H===r.HALF_FLOAT&&($=r.R16F),H===r.UNSIGNED_BYTE&&($=r.R8)),E===r.RED_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.R8UI),H===r.UNSIGNED_SHORT&&($=r.R16UI),H===r.UNSIGNED_INT&&($=r.R32UI),H===r.BYTE&&($=r.R8I),H===r.SHORT&&($=r.R16I),H===r.INT&&($=r.R32I)),E===r.RG&&(H===r.FLOAT&&($=r.RG32F),H===r.HALF_FLOAT&&($=r.RG16F),H===r.UNSIGNED_BYTE&&($=r.RG8)),E===r.RG_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RG8UI),H===r.UNSIGNED_SHORT&&($=r.RG16UI),H===r.UNSIGNED_INT&&($=r.RG32UI),H===r.BYTE&&($=r.RG8I),H===r.SHORT&&($=r.RG16I),H===r.INT&&($=r.RG32I)),E===r.RGB_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGB8UI),H===r.UNSIGNED_SHORT&&($=r.RGB16UI),H===r.UNSIGNED_INT&&($=r.RGB32UI),H===r.BYTE&&($=r.RGB8I),H===r.SHORT&&($=r.RGB16I),H===r.INT&&($=r.RGB32I)),E===r.RGBA_INTEGER&&(H===r.UNSIGNED_BYTE&&($=r.RGBA8UI),H===r.UNSIGNED_SHORT&&($=r.RGBA16UI),H===r.UNSIGNED_INT&&($=r.RGBA32UI),H===r.BYTE&&($=r.RGBA8I),H===r.SHORT&&($=r.RGBA16I),H===r.INT&&($=r.RGBA32I)),E===r.RGB&&(H===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),H===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),E===r.RGBA){const Ie=ne?ao:st.getTransfer(ee);H===r.FLOAT&&($=r.RGBA32F),H===r.HALF_FLOAT&&($=r.RGBA16F),H===r.UNSIGNED_BYTE&&($=Ie===ut?r.SRGB8_ALPHA8:r.RGBA8),H===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),H===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function A(F,E){let H;return F?E===null||E===on||E===Jr?H=r.DEPTH24_STENCIL8:E===zn?H=r.DEPTH32F_STENCIL8:E===$r&&(H=r.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===on||E===Jr?H=r.DEPTH_COMPONENT24:E===zn?H=r.DEPTH_COMPONENT32F:E===$r&&(H=r.DEPTH_COMPONENT16),H}function y(F,E){return p(F)===!0||F.isFramebufferTexture&&F.minFilter!==Yt&&F.minFilter!==en?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function T(F){const E=F.target;E.removeEventListener("dispose",T),S(E),E.isVideoTexture&&u.delete(E)}function C(F){const E=F.target;E.removeEventListener("dispose",C),R(E)}function S(F){const E=n.get(F);if(E.__webglInit===void 0)return;const H=F.source,ee=d.get(H);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&M(F),Object.keys(ee).length===0&&d.delete(H)}n.remove(F)}function M(F){const E=n.get(F);r.deleteTexture(E.__webglTexture);const H=F.source,ee=d.get(H);delete ee[E.__cacheKey],a.memory.textures--}function R(F){const E=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ee=0;ee<6;ee++){if(Array.isArray(E.__webglFramebuffer[ee]))for(let ne=0;ne<E.__webglFramebuffer[ee].length;ne++)r.deleteFramebuffer(E.__webglFramebuffer[ee][ne]);else r.deleteFramebuffer(E.__webglFramebuffer[ee]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ee])}else{if(Array.isArray(E.__webglFramebuffer))for(let ee=0;ee<E.__webglFramebuffer.length;ee++)r.deleteFramebuffer(E.__webglFramebuffer[ee]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ee=0;ee<E.__webglColorRenderbuffer.length;ee++)E.__webglColorRenderbuffer[ee]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ee]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const H=F.textures;for(let ee=0,ne=H.length;ee<ne;ee++){const $=n.get(H[ee]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(H[ee])}n.remove(F)}let w=0;function P(){w=0}function I(){const F=w;return F>=i.maxTextures&&qe("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),w+=1,F}function L(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function B(F,E){const H=n.get(F);if(F.isVideoTexture&&Ze(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&H.__version!==F.version){const ee=F.image;if(ee===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{X(H,F,E);return}}else F.isExternalTexture&&(H.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,H.__webglTexture,r.TEXTURE0+E)}function U(F,E){const H=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&H.__version!==F.version){X(H,F,E);return}else F.isExternalTexture&&(H.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,H.__webglTexture,r.TEXTURE0+E)}function O(F,E){const H=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&H.__version!==F.version){X(H,F,E);return}t.bindTexture(r.TEXTURE_3D,H.__webglTexture,r.TEXTURE0+E)}function q(F,E){const H=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&H.__version!==F.version){te(H,F,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture,r.TEXTURE0+E)}const G={[kl]:r.REPEAT,[wi]:r.CLAMP_TO_EDGE,[zl]:r.MIRRORED_REPEAT},J={[Yt]:r.NEAREST,[hm]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[en]:r.LINEAR,[Bo]:r.LINEAR_MIPMAP_NEAREST,[As]:r.LINEAR_MIPMAP_LINEAR},ae={[pm]:r.NEVER,[Sm]:r.ALWAYS,[mm]:r.LESS,[$c]:r.LEQUAL,[gm]:r.EQUAL,[Jc]:r.GEQUAL,[_m]:r.GREATER,[xm]:r.NOTEQUAL};function re(F,E){if(E.type===zn&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===en||E.magFilter===Bo||E.magFilter===xa||E.magFilter===As||E.minFilter===en||E.minFilter===Bo||E.minFilter===xa||E.minFilter===As)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,G[E.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,G[E.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,G[E.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,J[E.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,J[E.minFilter]),E.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ae[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Yt||E.minFilter!==xa&&E.minFilter!==As||E.type===zn&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||n.get(E).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,i.getMaxAnisotropy())),n.get(E).__currentAnisotropy=E.anisotropy}}}function xe(F,E){let H=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",T));const ee=E.source;let ne=d.get(ee);ne===void 0&&(ne={},d.set(ee,ne));const $=L(E);if($!==F.__cacheKey){ne[$]===void 0&&(ne[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,H=!0),ne[$].usedTimes++;const Ie=ne[F.__cacheKey];Ie!==void 0&&(ne[F.__cacheKey].usedTimes--,Ie.usedTimes===0&&M(E)),F.__cacheKey=$,F.__webglTexture=ne[$].texture}return H}function Ae(F,E,H){return Math.floor(Math.floor(F/H)/E)}function Re(F,E,H,ee){const $=F.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,H,ee,E.data);else{$.sort((Y,ie)=>Y.start-ie.start);let Ie=0;for(let Y=1;Y<$.length;Y++){const ie=$[Ie],de=$[Y],Se=ie.start+ie.count,me=Ae(de.start,E.width,4),Ge=Ae(ie.start,E.width,4);de.start<=Se+1&&me===Ge&&Ae(de.start+de.count-1,E.width,4)===me?ie.count=Math.max(ie.count,de.start+de.count-ie.start):(++Ie,$[Ie]=de)}$.length=Ie+1;const ue=r.getParameter(r.UNPACK_ROW_LENGTH),Be=r.getParameter(r.UNPACK_SKIP_PIXELS),k=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let Y=0,ie=$.length;Y<ie;Y++){const de=$[Y],Se=Math.floor(de.start/4),me=Math.ceil(de.count/4),Ge=Se%E.width,z=Math.floor(Se/E.width),he=me,le=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ge),r.pixelStorei(r.UNPACK_SKIP_ROWS,z),t.texSubImage2D(r.TEXTURE_2D,0,Ge,z,he,le,H,ee,E.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ue),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Be),r.pixelStorei(r.UNPACK_SKIP_ROWS,k)}}function X(F,E,H){let ee=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=r.TEXTURE_3D);const ne=xe(F,E),$=E.source;t.bindTexture(ee,F.__webglTexture,r.TEXTURE0+H);const Ie=n.get($);if($.version!==Ie.__version||ne===!0){t.activeTexture(r.TEXTURE0+H);const ue=st.getPrimaries(st.workingColorSpace),Be=E.colorSpace===Xi?null:st.getPrimaries(E.colorSpace),k=E.colorSpace===Xi||ue===Be?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,k);let Y=_(E.image,!1,i.maxTextureSize);Y=ht(E,Y);const ie=s.convert(E.format,E.colorSpace),de=s.convert(E.type);let Se=v(E.internalFormat,ie,de,E.colorSpace,E.isVideoTexture);re(ee,E);let me;const Ge=E.mipmaps,z=E.isVideoTexture!==!0,he=Ie.__version===void 0||ne===!0,le=$.dataReady,ge=y(E,Y);if(E.isDepthTexture)Se=A(E.format===vs,E.type),he&&(z?t.texStorage2D(r.TEXTURE_2D,1,Se,Y.width,Y.height):t.texImage2D(r.TEXTURE_2D,0,Se,Y.width,Y.height,0,ie,de,null));else if(E.isDataTexture)if(Ge.length>0){z&&he&&t.texStorage2D(r.TEXTURE_2D,ge,Se,Ge[0].width,Ge[0].height);for(let oe=0,j=Ge.length;oe<j;oe++)me=Ge[oe],z?le&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,me.width,me.height,ie,de,me.data):t.texImage2D(r.TEXTURE_2D,oe,Se,me.width,me.height,0,ie,de,me.data);E.generateMipmaps=!1}else z?(he&&t.texStorage2D(r.TEXTURE_2D,ge,Se,Y.width,Y.height),le&&Re(E,Y,ie,de)):t.texImage2D(r.TEXTURE_2D,0,Se,Y.width,Y.height,0,ie,de,Y.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){z&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Se,Ge[0].width,Ge[0].height,Y.depth);for(let oe=0,j=Ge.length;oe<j;oe++)if(me=Ge[oe],E.format!==ln)if(ie!==null)if(z){if(le)if(E.layerUpdates.size>0){const Ce=Th(me.width,me.height,E.format,E.type);for(const Ve of E.layerUpdates){const xt=me.data.subarray(Ve*Ce/me.data.BYTES_PER_ELEMENT,(Ve+1)*Ce/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,Ve,me.width,me.height,1,ie,xt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,Y.depth,ie,me.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,oe,Se,me.width,me.height,Y.depth,0,me.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else z?le&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,oe,0,0,0,me.width,me.height,Y.depth,ie,de,me.data):t.texImage3D(r.TEXTURE_2D_ARRAY,oe,Se,me.width,me.height,Y.depth,0,ie,de,me.data)}else{z&&he&&t.texStorage2D(r.TEXTURE_2D,ge,Se,Ge[0].width,Ge[0].height);for(let oe=0,j=Ge.length;oe<j;oe++)me=Ge[oe],E.format!==ln?ie!==null?z?le&&t.compressedTexSubImage2D(r.TEXTURE_2D,oe,0,0,me.width,me.height,ie,me.data):t.compressedTexImage2D(r.TEXTURE_2D,oe,Se,me.width,me.height,0,me.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):z?le&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,me.width,me.height,ie,de,me.data):t.texImage2D(r.TEXTURE_2D,oe,Se,me.width,me.height,0,ie,de,me.data)}else if(E.isDataArrayTexture)if(z){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ge,Se,Y.width,Y.height,Y.depth),le)if(E.layerUpdates.size>0){const oe=Th(Y.width,Y.height,E.format,E.type);for(const j of E.layerUpdates){const Ce=Y.data.subarray(j*oe/Y.data.BYTES_PER_ELEMENT,(j+1)*oe/Y.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,Y.width,Y.height,1,ie,de,Ce)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,Y.width,Y.height,Y.depth,ie,de,Y.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Se,Y.width,Y.height,Y.depth,0,ie,de,Y.data);else if(E.isData3DTexture)z?(he&&t.texStorage3D(r.TEXTURE_3D,ge,Se,Y.width,Y.height,Y.depth),le&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,Y.width,Y.height,Y.depth,ie,de,Y.data)):t.texImage3D(r.TEXTURE_3D,0,Se,Y.width,Y.height,Y.depth,0,ie,de,Y.data);else if(E.isFramebufferTexture){if(he)if(z)t.texStorage2D(r.TEXTURE_2D,ge,Se,Y.width,Y.height);else{let oe=Y.width,j=Y.height;for(let Ce=0;Ce<ge;Ce++)t.texImage2D(r.TEXTURE_2D,Ce,Se,oe,j,0,ie,de,null),oe>>=1,j>>=1}}else if(Ge.length>0){if(z&&he){const oe=De(Ge[0]);t.texStorage2D(r.TEXTURE_2D,ge,Se,oe.width,oe.height)}for(let oe=0,j=Ge.length;oe<j;oe++)me=Ge[oe],z?le&&t.texSubImage2D(r.TEXTURE_2D,oe,0,0,ie,de,me):t.texImage2D(r.TEXTURE_2D,oe,Se,ie,de,me);E.generateMipmaps=!1}else if(z){if(he){const oe=De(Y);t.texStorage2D(r.TEXTURE_2D,ge,Se,oe.width,oe.height)}le&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ie,de,Y)}else t.texImage2D(r.TEXTURE_2D,0,Se,ie,de,Y);p(E)&&g(ee),Ie.__version=$.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function te(F,E,H){if(E.image.length!==6)return;const ee=xe(F,E),ne=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+H);const $=n.get(ne);if(ne.version!==$.__version||ee===!0){t.activeTexture(r.TEXTURE0+H);const Ie=st.getPrimaries(st.workingColorSpace),ue=E.colorSpace===Xi?null:st.getPrimaries(E.colorSpace),Be=E.colorSpace===Xi||Ie===ue?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);const k=E.isCompressedTexture||E.image[0].isCompressedTexture,Y=E.image[0]&&E.image[0].isDataTexture,ie=[];for(let j=0;j<6;j++)!k&&!Y?ie[j]=_(E.image[j],!0,i.maxCubemapSize):ie[j]=Y?E.image[j].image:E.image[j],ie[j]=ht(E,ie[j]);const de=ie[0],Se=s.convert(E.format,E.colorSpace),me=s.convert(E.type),Ge=v(E.internalFormat,Se,me,E.colorSpace),z=E.isVideoTexture!==!0,he=$.__version===void 0||ee===!0,le=ne.dataReady;let ge=y(E,de);re(r.TEXTURE_CUBE_MAP,E);let oe;if(k){z&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ge,de.width,de.height);for(let j=0;j<6;j++){oe=ie[j].mipmaps;for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];E.format!==ln?Se!==null?z?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce,0,0,Ve.width,Ve.height,Se,Ve.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce,Ge,Ve.width,Ve.height,0,Ve.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):z?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce,0,0,Ve.width,Ve.height,Se,me,Ve.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce,Ge,Ve.width,Ve.height,0,Se,me,Ve.data)}}}else{if(oe=E.mipmaps,z&&he){oe.length>0&&ge++;const j=De(ie[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ge,Ge,j.width,j.height)}for(let j=0;j<6;j++)if(Y){z?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,ie[j].width,ie[j].height,Se,me,ie[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,ie[j].width,ie[j].height,0,Se,me,ie[j].data);for(let Ce=0;Ce<oe.length;Ce++){const xt=oe[Ce].image[j].image;z?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce+1,0,0,xt.width,xt.height,Se,me,xt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce+1,Ge,xt.width,xt.height,0,Se,me,xt.data)}}else{z?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Se,me,ie[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Ge,Se,me,ie[j]);for(let Ce=0;Ce<oe.length;Ce++){const Ve=oe[Ce];z?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce+1,0,0,Se,me,Ve.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,Ce+1,Ge,Se,me,Ve.image[j])}}}p(E)&&g(r.TEXTURE_CUBE_MAP),$.__version=ne.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function se(F,E,H,ee,ne,$){const Ie=s.convert(H.format,H.colorSpace),ue=s.convert(H.type),Be=v(H.internalFormat,Ie,ue,H.colorSpace),k=n.get(E),Y=n.get(H);if(Y.__renderTarget=E,!k.__hasExternalTextures){const ie=Math.max(1,E.width>>$),de=Math.max(1,E.height>>$);ne===r.TEXTURE_3D||ne===r.TEXTURE_2D_ARRAY?t.texImage3D(ne,$,Be,ie,de,E.depth,0,Ie,ue,null):t.texImage2D(ne,$,Be,ie,de,0,Ie,ue,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),it(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ee,ne,Y.__webglTexture,0,N(E)):(ne===r.TEXTURE_2D||ne>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ee,ne,Y.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Te(F,E,H){if(r.bindRenderbuffer(r.RENDERBUFFER,F),E.depthBuffer){const ee=E.depthTexture,ne=ee&&ee.isDepthTexture?ee.type:null,$=A(E.stencilBuffer,ne),Ie=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;it(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(E),$,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(E),$,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,$,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ie,r.RENDERBUFFER,F)}else{const ee=E.textures;for(let ne=0;ne<ee.length;ne++){const $=ee[ne],Ie=s.convert($.format,$.colorSpace),ue=s.convert($.type),Be=v($.internalFormat,Ie,ue,$.colorSpace);it(E)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,N(E),Be,E.width,E.height):H?r.renderbufferStorageMultisample(r.RENDERBUFFER,N(E),Be,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,Be,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function pe(F,E,H){const ee=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ne=n.get(E.depthTexture);if(ne.__renderTarget=E,(!ne.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ee){if(ne.__webglInit===void 0&&(ne.__webglInit=!0,E.depthTexture.addEventListener("dispose",T)),ne.__webglTexture===void 0){ne.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,ne.__webglTexture),re(r.TEXTURE_CUBE_MAP,E.depthTexture);const k=s.convert(E.depthTexture.format),Y=s.convert(E.depthTexture.type);let ie;E.depthTexture.format===hi?ie=r.DEPTH_COMPONENT24:E.depthTexture.format===vs&&(ie=r.DEPTH24_STENCIL8);for(let de=0;de<6;de++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+de,0,ie,E.width,E.height,0,k,Y,null)}}else B(E.depthTexture,0);const $=ne.__webglTexture,Ie=N(E),ue=ee?r.TEXTURE_CUBE_MAP_POSITIVE_X+H:r.TEXTURE_2D,Be=E.depthTexture.format===vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(E.depthTexture.format===hi)it(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,ue,$,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,Be,ue,$,0);else if(E.depthTexture.format===vs)it(E)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Be,ue,$,0,Ie):r.framebufferTexture2D(r.FRAMEBUFFER,Be,ue,$,0);else throw new Error("Unknown depthTexture format")}function Ee(F){const E=n.get(F),H=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ee=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ee){const ne=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ee.removeEventListener("dispose",ne)};ee.addEventListener("dispose",ne),E.__depthDisposeCallback=ne}E.__boundDepthTexture=ee}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(H)for(let ee=0;ee<6;ee++)pe(E.__webglFramebuffer[ee],F,ee);else{const ee=F.texture.mipmaps;ee&&ee.length>0?pe(E.__webglFramebuffer[0],F,0):pe(E.__webglFramebuffer,F,0)}else if(H){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]===void 0)E.__webglDepthbuffer[ee]=r.createRenderbuffer(),Te(E.__webglDepthbuffer[ee],F,!1);else{const ne=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer[ee];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,$)}}else{const ee=F.texture.mipmaps;if(ee&&ee.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),Te(E.__webglDepthbuffer,F,!1);else{const ne=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,ne,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Qe(F,E,H){const ee=n.get(F);E!==void 0&&se(ee.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),H!==void 0&&Ee(F)}function Pe(F){const E=F.texture,H=n.get(F),ee=n.get(E);F.addEventListener("dispose",C);const ne=F.textures,$=F.isWebGLCubeRenderTarget===!0,Ie=ne.length>1;if(Ie||(ee.__webglTexture===void 0&&(ee.__webglTexture=r.createTexture()),ee.__version=E.version,a.memory.textures++),$){H.__webglFramebuffer=[];for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer[ue]=[];for(let Be=0;Be<E.mipmaps.length;Be++)H.__webglFramebuffer[ue][Be]=r.createFramebuffer()}else H.__webglFramebuffer[ue]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){H.__webglFramebuffer=[];for(let ue=0;ue<E.mipmaps.length;ue++)H.__webglFramebuffer[ue]=r.createFramebuffer()}else H.__webglFramebuffer=r.createFramebuffer();if(Ie)for(let ue=0,Be=ne.length;ue<Be;ue++){const k=n.get(ne[ue]);k.__webglTexture===void 0&&(k.__webglTexture=r.createTexture(),a.memory.textures++)}if(F.samples>0&&it(F)===!1){H.__webglMultisampledFramebuffer=r.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ue=0;ue<ne.length;ue++){const Be=ne[ue];H.__webglColorRenderbuffer[ue]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,H.__webglColorRenderbuffer[ue]);const k=s.convert(Be.format,Be.colorSpace),Y=s.convert(Be.type),ie=v(Be.internalFormat,k,Y,Be.colorSpace,F.isXRRenderTarget===!0),de=N(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,de,ie,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ue,r.RENDERBUFFER,H.__webglColorRenderbuffer[ue])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(H.__webglDepthRenderbuffer=r.createRenderbuffer(),Te(H.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,ee.__webglTexture),re(r.TEXTURE_CUBE_MAP,E);for(let ue=0;ue<6;ue++)if(E.mipmaps&&E.mipmaps.length>0)for(let Be=0;Be<E.mipmaps.length;Be++)se(H.__webglFramebuffer[ue][Be],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,Be);else se(H.__webglFramebuffer[ue],F,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ue,0);p(E)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ie){for(let ue=0,Be=ne.length;ue<Be;ue++){const k=ne[ue],Y=n.get(k);let ie=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ie=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ie,Y.__webglTexture),re(ie,k),se(H.__webglFramebuffer,F,k,r.COLOR_ATTACHMENT0+ue,ie,0),p(k)&&g(ie)}t.unbindTexture()}else{let ue=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ue=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ue,ee.__webglTexture),re(ue,E),E.mipmaps&&E.mipmaps.length>0)for(let Be=0;Be<E.mipmaps.length;Be++)se(H.__webglFramebuffer[Be],F,E,r.COLOR_ATTACHMENT0,ue,Be);else se(H.__webglFramebuffer,F,E,r.COLOR_ATTACHMENT0,ue,0);p(E)&&g(ue),t.unbindTexture()}F.depthBuffer&&Ee(F)}function ze(F){const E=F.textures;for(let H=0,ee=E.length;H<ee;H++){const ne=E[H];if(p(ne)){const $=x(F),Ie=n.get(ne).__webglTexture;t.bindTexture($,Ie),g($),t.unbindTexture()}}}const Ue=[],Ne=[];function et(F){if(F.samples>0){if(it(F)===!1){const E=F.textures,H=F.width,ee=F.height;let ne=r.COLOR_BUFFER_BIT;const $=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ie=n.get(F),ue=E.length>1;if(ue)for(let k=0;k<E.length;k++)t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer);const Be=F.texture.mipmaps;Be&&Be.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglFramebuffer);for(let k=0;k<E.length;k++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(ne|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(ne|=r.STENCIL_BUFFER_BIT)),ue){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[k]);const Y=n.get(E[k]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Y,0)}r.blitFramebuffer(0,0,H,ee,0,0,H,ee,ne,r.NEAREST),l===!0&&(Ue.length=0,Ne.length=0,Ue.push(r.COLOR_ATTACHMENT0+k),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ue.push($),Ne.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ue))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ue)for(let k=0;k<E.length;k++){t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.RENDERBUFFER,Ie.__webglColorRenderbuffer[k]);const Y=n.get(E[k]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ie.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+k,r.TEXTURE_2D,Y,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ie.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){const E=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function N(F){return Math.min(i.maxSamples,F.samples)}function it(F){const E=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ze(F){const E=a.render.frame;u.get(F)!==E&&(u.set(F,E),F.update())}function ht(F,E){const H=F.colorSpace,ee=F.format,ne=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||H!==xr&&H!==Xi&&(st.getTransfer(H)===ut?(ee!==ln||ne!==mn)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",H)),E}function De(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=I,this.resetTextureUnits=P,this.setTexture2D=B,this.setTexture2DArray=U,this.setTexture3D=O,this.setTextureCube=q,this.rebindTextures=Qe,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ee,this.setupFrameBufferTexture=se,this.useMultisampledRTT=it,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Tf(r,e){function t(n,i=Xi){let s;const a=st.getTransfer(i);if(n===mn)return r.UNSIGNED_BYTE;if(n===Yc)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Kc)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===ef)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zd)return r.BYTE;if(n===$d)return r.SHORT;if(n===$r)return r.UNSIGNED_SHORT;if(n===Qc)return r.INT;if(n===on)return r.UNSIGNED_INT;if(n===zn)return r.FLOAT;if(n===ui)return r.HALF_FLOAT;if(n===tf)return r.ALPHA;if(n===nf)return r.RGB;if(n===ln)return r.RGBA;if(n===hi)return r.DEPTH_COMPONENT;if(n===vs)return r.DEPTH_STENCIL;if(n===sf)return r.RED;if(n===Mo)return r.RED_INTEGER;if(n===_r)return r.RG;if(n===jc)return r.RG_INTEGER;if(n===or)return r.RGBA_INTEGER;if(n===Za||n===$a||n===Ja||n===eo)if(a===ut)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Za)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ja)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Hl||n===Vl||n===Gl||n===Wl)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Hl)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Vl)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Gl)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Wl)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Xl||n===ql||n===Ql||n===Yl||n===Kl||n===jl||n===Zl)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Xl||n===ql)return a===ut?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Ql)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Yl)return s.COMPRESSED_R11_EAC;if(n===Kl)return s.COMPRESSED_SIGNED_R11_EAC;if(n===jl)return s.COMPRESSED_RG11_EAC;if(n===Zl)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===$l||n===Jl||n===ec||n===tc||n===nc||n===ic||n===sc||n===rc||n===ac||n===oc||n===lc||n===cc||n===uc||n===hc)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===$l)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Jl)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ec)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===tc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===nc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ic)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===rc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ac)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===oc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===lc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===cc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===uc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hc)return a===ut?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===dc||n===fc||n===pc)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===dc)return a===ut?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===fc)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===pc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mc||n===gc||n===_c||n===xc)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===mc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===gc)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_c)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jr?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const nA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,iA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class sA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new mf(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new cn({vertexShader:nA,fragmentShader:iA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rA extends Is{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new sA,g={},x=t.getContextAttributes();let v=null,A=null;const y=[],T=[],C=new Me;let S=null;const M=new pn;M.viewport=new vt;const R=new pn;R.viewport=new vt;const w=[M,R],P=new _g;let I=null,L=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let te=y[X];return te===void 0&&(te=new Vo,y[X]=te),te.getTargetRaySpace()},this.getControllerGrip=function(X){let te=y[X];return te===void 0&&(te=new Vo,y[X]=te),te.getGripSpace()},this.getHand=function(X){let te=y[X];return te===void 0&&(te=new Vo,y[X]=te),te.getHandSpace()};function B(X){const te=T.indexOf(X.inputSource);if(te===-1)return;const se=y[te];se!==void 0&&(se.update(X.inputSource,X.frame,c||a),se.dispatchEvent({type:X.type,data:X.inputSource}))}function U(){i.removeEventListener("select",B),i.removeEventListener("selectstart",B),i.removeEventListener("selectend",B),i.removeEventListener("squeeze",B),i.removeEventListener("squeezestart",B),i.removeEventListener("squeezeend",B),i.removeEventListener("end",U),i.removeEventListener("inputsourceschange",O);for(let X=0;X<y.length;X++){const te=T[X];te!==null&&(T[X]=null,y[X].disconnect(te))}I=null,L=null,p.reset();for(const X in g)delete g[X];e.setRenderTarget(v),f=null,d=null,h=null,i=null,A=null,Re.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(C.width,C.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(i,t)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(X){if(i=X,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",B),i.addEventListener("selectstart",B),i.addEventListener("selectend",B),i.addEventListener("squeeze",B),i.addEventListener("squeezestart",B),i.addEventListener("squeezeend",B),i.addEventListener("end",U),i.addEventListener("inputsourceschange",O),x.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let se=null,Te=null,pe=null;x.depth&&(pe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=x.stencil?vs:hi,Te=x.stencil?Jr:on);const Ee={colorFormat:t.RGBA8,depthFormat:pe,scaleFactor:s};h=this.getBinding(),d=h.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),A=new Kn(d.textureWidth,d.textureHeight,{format:ln,type:mn,depthTexture:new Sr(d.textureWidth,d.textureHeight,Te,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const se={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),A=new Kn(f.framebufferWidth,f.framebufferHeight,{format:ln,type:mn,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),Re.setContext(i),Re.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function O(X){for(let te=0;te<X.removed.length;te++){const se=X.removed[te],Te=T.indexOf(se);Te>=0&&(T[Te]=null,y[Te].disconnect(se))}for(let te=0;te<X.added.length;te++){const se=X.added[te];let Te=T.indexOf(se);if(Te===-1){for(let Ee=0;Ee<y.length;Ee++)if(Ee>=T.length){T.push(se),Te=Ee;break}else if(T[Ee]===null){T[Ee]=se,Te=Ee;break}if(Te===-1)break}const pe=y[Te];pe&&pe.connect(se)}}const q=new D,G=new D;function J(X,te,se){q.setFromMatrixPosition(te.matrixWorld),G.setFromMatrixPosition(se.matrixWorld);const Te=q.distanceTo(G),pe=te.projectionMatrix.elements,Ee=se.projectionMatrix.elements,Qe=pe[14]/(pe[10]-1),Pe=pe[14]/(pe[10]+1),ze=(pe[9]+1)/pe[5],Ue=(pe[9]-1)/pe[5],Ne=(pe[8]-1)/pe[0],et=(Ee[8]+1)/Ee[0],N=Qe*Ne,it=Qe*et,Ze=Te/(-Ne+et),ht=Ze*-Ne;if(te.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ht),X.translateZ(Ze),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),pe[10]===-1)X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const De=Qe+Ze,F=Pe+Ze,E=N-ht,H=it+(Te-ht),ee=ze*Pe/F*De,ne=Ue*Pe/F*De;X.projectionMatrix.makePerspective(E,H,ee,ne,De,F),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function ae(X,te){te===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(te.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(i===null)return;let te=X.near,se=X.far;p.texture!==null&&(p.depthNear>0&&(te=p.depthNear),p.depthFar>0&&(se=p.depthFar)),P.near=R.near=M.near=te,P.far=R.far=M.far=se,(I!==P.near||L!==P.far)&&(i.updateRenderState({depthNear:P.near,depthFar:P.far}),I=P.near,L=P.far),P.layers.mask=X.layers.mask|6,M.layers.mask=P.layers.mask&-5,R.layers.mask=P.layers.mask&-3;const Te=X.parent,pe=P.cameras;ae(P,Te);for(let Ee=0;Ee<pe.length;Ee++)ae(pe[Ee],Te);pe.length===2?J(P,M,R):P.projectionMatrix.copy(M.projectionMatrix),re(X,P,Te)};function re(X,te,se){se===null?X.matrix.copy(te.matrixWorld):(X.matrix.copy(se.matrixWorld),X.matrix.invert(),X.matrix.multiply(te.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(te.projectionMatrix),X.projectionMatrixInverse.copy(te.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Sc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return P},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(P)},this.getCameraTexture=function(X){return g[X]};let xe=null;function Ae(X,te){if(u=te.getViewerPose(c||a),m=te,u!==null){const se=u.views;f!==null&&(e.setRenderTargetFramebuffer(A,f.framebuffer),e.setRenderTarget(A));let Te=!1;se.length!==P.cameras.length&&(P.cameras.length=0,Te=!0);for(let Pe=0;Pe<se.length;Pe++){const ze=se[Pe];let Ue=null;if(f!==null)Ue=f.getViewport(ze);else{const et=h.getViewSubImage(d,ze);Ue=et.viewport,Pe===0&&(e.setRenderTargetTextures(A,et.colorTexture,et.depthStencilTexture),e.setRenderTarget(A))}let Ne=w[Pe];Ne===void 0&&(Ne=new pn,Ne.layers.enable(Pe),Ne.viewport=new vt,w[Pe]=Ne),Ne.matrix.fromArray(ze.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ze.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ue.x,Ue.y,Ue.width,Ue.height),Pe===0&&(P.matrix.copy(Ne.matrix),P.matrix.decompose(P.position,P.quaternion,P.scale)),Te===!0&&P.cameras.push(Ne)}const pe=i.enabledFeatures;if(pe&&pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){h=n.getBinding();const Pe=h.getDepthInformation(se[0]);Pe&&Pe.isValid&&Pe.texture&&p.init(Pe,i.renderState)}if(pe&&pe.includes("camera-access")&&_){e.state.unbindTexture(),h=n.getBinding();for(let Pe=0;Pe<se.length;Pe++){const ze=se[Pe].camera;if(ze){let Ue=g[ze];Ue||(Ue=new mf,g[ze]=Ue);const Ne=h.getCameraImage(ze);Ue.sourceTexture=Ne}}}}for(let se=0;se<y.length;se++){const Te=T[se],pe=y[se];Te!==null&&pe!==void 0&&pe.update(Te,te,c||a)}xe&&xe(X,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),m=null}const Re=new Sf;Re.setAnimationLoop(Ae),this.setAnimationLoop=function(X){xe=X},this.dispose=function(){}}}const us=new Zn,aA=new He;function oA(r,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,gf(r)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function i(p,g,x,v,A){g.isMeshBasicMaterial?s(p,g):g.isMeshLambertMaterial?(s(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(s(p,g),h(p,g)):g.isMeshPhongMaterial?(s(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(s(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,A)):g.isMeshMatcapMaterial?(s(p,g),m(p,g)):g.isMeshDepthMaterial?s(p,g):g.isMeshDistanceMaterial?(s(p,g),_(p,g)):g.isMeshNormalMaterial?s(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?l(p,g,x,v):g.isSpriteMaterial?c(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===gn&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===gn&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);const x=e.get(g),v=x.envMap,A=x.envMapRotation;v&&(p.envMap.value=v,us.copy(A),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),p.envMapRotation.value.setFromMatrix4(aA.makeRotationFromEuler(us)),p.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function l(p,g,x,v){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*x,p.scale.value=v*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function c(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,x){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===gn&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=x.texture,p.transmissionSamplerSize.value.set(x.width,x.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){const x=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(x.matrixWorld),p.nearDistance.value=x.shadow.camera.near,p.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function lA(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){const A=v.program;n.uniformBlockBinding(x,A)}function c(x,v){let A=i[x.id];A===void 0&&(m(x),A=u(x),i[x.id]=A,x.addEventListener("dispose",p));const y=v.program;n.updateUBOMapping(x,y);const T=e.render.frame;s[x.id]!==T&&(d(x),s[x.id]=T)}function u(x){const v=h();x.__bindingPointIndex=v;const A=r.createBuffer(),y=x.__size,T=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,A),r.bufferData(r.UNIFORM_BUFFER,y,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,A),A}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const v=i[x.id],A=x.uniforms,y=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let T=0,C=A.length;T<C;T++){const S=Array.isArray(A[T])?A[T]:[A[T]];for(let M=0,R=S.length;M<R;M++){const w=S[M];if(f(w,T,M,y)===!0){const P=w.__offset,I=Array.isArray(w.value)?w.value:[w.value];let L=0;for(let B=0;B<I.length;B++){const U=I[B],O=_(U);typeof U=="number"||typeof U=="boolean"?(w.__data[0]=U,r.bufferSubData(r.UNIFORM_BUFFER,P+L,w.__data)):U.isMatrix3?(w.__data[0]=U.elements[0],w.__data[1]=U.elements[1],w.__data[2]=U.elements[2],w.__data[3]=0,w.__data[4]=U.elements[3],w.__data[5]=U.elements[4],w.__data[6]=U.elements[5],w.__data[7]=0,w.__data[8]=U.elements[6],w.__data[9]=U.elements[7],w.__data[10]=U.elements[8],w.__data[11]=0):(U.toArray(w.__data,L),L+=O.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,P,w.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(x,v,A,y){const T=x.value,C=v+"_"+A;if(y[C]===void 0)return typeof T=="number"||typeof T=="boolean"?y[C]=T:y[C]=T.clone(),!0;{const S=y[C];if(typeof T=="number"||typeof T=="boolean"){if(S!==T)return y[C]=T,!0}else if(S.equals(T)===!1)return S.copy(T),!0}return!1}function m(x){const v=x.uniforms;let A=0;const y=16;for(let C=0,S=v.length;C<S;C++){const M=Array.isArray(v[C])?v[C]:[v[C]];for(let R=0,w=M.length;R<w;R++){const P=M[R],I=Array.isArray(P.value)?P.value:[P.value];for(let L=0,B=I.length;L<B;L++){const U=I[L],O=_(U),q=A%y,G=q%O.boundary,J=q+G;A+=G,J!==0&&y-J<O.storage&&(A+=y-J),P.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),P.__offset=A,A+=O.storage}}}const T=A%y;return T>0&&(A+=y-T),x.__size=A,x.__cache={},this}function _(x){const v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",x),v}function p(x){const v=x.target;v.removeEventListener("dispose",p);const A=a.indexOf(v.__bindingPointIndex);a.splice(A,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function g(){for(const x in i)r.deleteBuffer(i[x]);a=[],i={},s={}}return{bind:l,update:c,dispose:g}}const cA=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ei=null;function uA(){return ei===null&&(ei=new vi(cA,16,16,_r,ui),ei.name="DFG_LUT",ei.minFilter=en,ei.magFilter=en,ei.wrapS=wi,ei.wrapT=wi,ei.generateMipmaps=!1,ei.needsUpdate=!0),ei}class Ef{constructor(e={}){const{canvas:t=ym(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=mn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const _=f,p=new Set([or,jc,Mo]),g=new Set([mn,on,$r,Jr,Yc,Kc]),x=new Uint32Array(4),v=new Int32Array(4);let A=null,y=null;const T=[],C=[];let S=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=li,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let R=!1;this._outputColorSpace=En;let w=0,P=0,I=null,L=-1,B=null;const U=new vt,O=new vt;let q=null;const G=new je(0);let J=0,ae=t.width,re=t.height,xe=1,Ae=null,Re=null;const X=new vt(0,0,ae,re),te=new vt(0,0,ae,re);let se=!1;const Te=new nu;let pe=!1,Ee=!1;const Qe=new He,Pe=new D,ze=new vt,Ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function et(){return I===null?xe:1}let N=n;function it(b,V){return t.getContext(b,V)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wc}`),t.addEventListener("webglcontextlost",Ce,!1),t.addEventListener("webglcontextrestored",Ve,!1),t.addEventListener("webglcontextcreationerror",xt,!1),N===null){const V="webgl2";if(N=it(V,b),N===null)throw it(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw at("WebGLRenderer: "+b.message),b}let Ze,ht,De,F,E,H,ee,ne,$,Ie,ue,Be,k,Y,ie,de,Se,me,Ge,z,he,le,ge;function oe(){Ze=new dx(N),Ze.init(),he=new Tf(N,Ze),ht=new sx(N,Ze,e,he),De=new eA(N,Ze),ht.reversedDepthBuffer&&d&&De.buffers.depth.setReversed(!0),F=new mx(N),E=new zS,H=new tA(N,Ze,De,E,ht,he,F),ee=new hx(M),ne=new Ag(N),le=new nx(N,ne),$=new fx(N,ne,F,le),Ie=new _x(N,$,ne,le,F),me=new gx(N,ht,H),ie=new rx(E),ue=new kS(M,ee,Ze,ht,le,ie),Be=new oA(M,E),k=new VS,Y=new YS(Ze),Se=new tx(M,ee,De,Ie,m,l),de=new JS(M,Ie,ht),ge=new lA(N,F,ht,De),Ge=new ix(N,Ze,F),z=new px(N,Ze,F),F.programs=ue.programs,M.capabilities=ht,M.extensions=Ze,M.properties=E,M.renderLists=k,M.shadowMap=de,M.state=De,M.info=F}oe(),_!==mn&&(S=new Sx(_,t.width,t.height,i,s));const j=new rA(M,N);this.xr=j,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const b=Ze.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=Ze.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(b){b!==void 0&&(xe=b,this.setSize(ae,re,!1))},this.getSize=function(b){return b.set(ae,re)},this.setSize=function(b,V,K=!0){if(j.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=b,re=V,t.width=Math.floor(b*xe),t.height=Math.floor(V*xe),K===!0&&(t.style.width=b+"px",t.style.height=V+"px"),S!==null&&S.setSize(t.width,t.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(ae*xe,re*xe).floor()},this.setDrawingBufferSize=function(b,V,K){ae=b,re=V,xe=K,t.width=Math.floor(b*K),t.height=Math.floor(V*K),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(_===mn){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(U)},this.getViewport=function(b){return b.copy(X)},this.setViewport=function(b,V,K,Q){b.isVector4?X.set(b.x,b.y,b.z,b.w):X.set(b,V,K,Q),De.viewport(U.copy(X).multiplyScalar(xe).round())},this.getScissor=function(b){return b.copy(te)},this.setScissor=function(b,V,K,Q){b.isVector4?te.set(b.x,b.y,b.z,b.w):te.set(b,V,K,Q),De.scissor(O.copy(te).multiplyScalar(xe).round())},this.getScissorTest=function(){return se},this.setScissorTest=function(b){De.setScissorTest(se=b)},this.setOpaqueSort=function(b){Ae=b},this.setTransparentSort=function(b){Re=b},this.getClearColor=function(b){return b.copy(Se.getClearColor())},this.setClearColor=function(){Se.setClearColor(...arguments)},this.getClearAlpha=function(){return Se.getClearAlpha()},this.setClearAlpha=function(){Se.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,K=!0){let Q=0;if(b){let W=!1;if(I!==null){const ve=I.texture.format;W=p.has(ve)}if(W){const ve=I.texture.type,be=g.has(ve),ye=Se.getClearColor(),Fe=Se.getClearAlpha(),Oe=ye.r,Ye=ye.g,$e=ye.b;be?(x[0]=Oe,x[1]=Ye,x[2]=$e,x[3]=Fe,N.clearBufferuiv(N.COLOR,0,x)):(v[0]=Oe,v[1]=Ye,v[2]=$e,v[3]=Fe,N.clearBufferiv(N.COLOR,0,v))}else Q|=N.COLOR_BUFFER_BIT}V&&(Q|=N.DEPTH_BUFFER_BIT),K&&(Q|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),Q!==0&&N.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ce,!1),t.removeEventListener("webglcontextrestored",Ve,!1),t.removeEventListener("webglcontextcreationerror",xt,!1),Se.dispose(),k.dispose(),Y.dispose(),E.dispose(),ee.dispose(),Ie.dispose(),le.dispose(),ge.dispose(),ue.dispose(),j.dispose(),j.removeEventListener("sessionstart",zu),j.removeEventListener("sessionend",Hu),is.stop()};function Ce(b){b.preventDefault(),th("WebGLRenderer: Context Lost."),R=!0}function Ve(){th("WebGLRenderer: Context Restored."),R=!1;const b=F.autoReset,V=de.enabled,K=de.autoUpdate,Q=de.needsUpdate,W=de.type;oe(),F.autoReset=b,de.enabled=V,de.autoUpdate=K,de.needsUpdate=Q,de.type=W}function xt(b){at("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function lt(b){const V=b.target;V.removeEventListener("dispose",lt),fi(V)}function fi(b){pi(b),E.remove(b)}function pi(b){const V=E.get(b).programs;V!==void 0&&(V.forEach(function(K){ue.releaseProgram(K)}),b.isShaderMaterial&&ue.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,K,Q,W,ve){V===null&&(V=Ue);const be=W.isMesh&&W.matrixWorld.determinant()<0,ye=Bp(b,V,K,Q,W);De.setMaterial(Q,be);let Fe=K.index,Oe=1;if(Q.wireframe===!0){if(Fe=$.getWireframeAttribute(K),Fe===void 0)return;Oe=2}const Ye=K.drawRange,$e=K.attributes.position;let ke=Ye.start*Oe,dt=(Ye.start+Ye.count)*Oe;ve!==null&&(ke=Math.max(ke,ve.start*Oe),dt=Math.min(dt,(ve.start+ve.count)*Oe)),Fe!==null?(ke=Math.max(ke,0),dt=Math.min(dt,Fe.count)):$e!=null&&(ke=Math.max(ke,0),dt=Math.min(dt,$e.count));const Dt=dt-ke;if(Dt<0||Dt===1/0)return;le.setup(W,Q,ye,K,Fe);let It,ft=Ge;if(Fe!==null&&(It=ne.get(Fe),ft=z,ft.setIndex(It)),W.isMesh)Q.wireframe===!0?(De.setLineWidth(Q.wireframeLinewidth*et()),ft.setMode(N.LINES)):ft.setMode(N.TRIANGLES);else if(W.isLine){let jt=Q.linewidth;jt===void 0&&(jt=1),De.setLineWidth(jt*et()),W.isLineSegments?ft.setMode(N.LINES):W.isLineLoop?ft.setMode(N.LINE_LOOP):ft.setMode(N.LINE_STRIP)}else W.isPoints?ft.setMode(N.POINTS):W.isSprite&&ft.setMode(N.TRIANGLES);if(W.isBatchedMesh)if(W._multiDrawInstances!==null)oo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),ft.renderMultiDrawInstances(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount,W._multiDrawInstances);else if(Ze.get("WEBGL_multi_draw"))ft.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{const jt=W._multiDrawStarts,Le=W._multiDrawCounts,Mn=W._multiDrawCount,rt=Fe?ne.get(Fe).bytesPerElement:1,Gn=E.get(Q).currentProgram.getUniforms();for(let $n=0;$n<Mn;$n++)Gn.setValue(N,"_gl_DrawID",$n),ft.render(jt[$n]/rt,Le[$n])}else if(W.isInstancedMesh)ft.renderInstances(ke,Dt,W.count);else if(K.isInstancedBufferGeometry){const jt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Le=Math.min(K.instanceCount,jt);ft.renderInstances(ke,Dt,Le)}else ft.render(ke,Dt)};function ku(b,V,K){b.transparent===!0&&b.side===wn&&b.forceSinglePass===!1?(b.side=gn,b.needsUpdate=!0,_a(b,V,K),b.side=jn,b.needsUpdate=!0,_a(b,V,K),b.side=wn):_a(b,V,K)}this.compile=function(b,V,K=null){K===null&&(K=b),y=Y.get(K),y.init(V),C.push(y),K.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),b!==K&&b.traverseVisible(function(W){W.isLight&&W.layers.test(V.layers)&&(y.pushLight(W),W.castShadow&&y.pushShadow(W))}),y.setupLights();const Q=new Set;return b.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;const ve=W.material;if(ve)if(Array.isArray(ve))for(let be=0;be<ve.length;be++){const ye=ve[be];ku(ye,K,W),Q.add(ye)}else ku(ve,K,W),Q.add(ve)}),y=C.pop(),Q},this.compileAsync=function(b,V,K=null){const Q=this.compile(b,V,K);return new Promise(W=>{function ve(){if(Q.forEach(function(be){E.get(be).currentProgram.isReady()&&Q.delete(be)}),Q.size===0){W(b);return}setTimeout(ve,10)}Ze.get("KHR_parallel_shader_compile")!==null?ve():setTimeout(ve,10)})};let Po=null;function Lp(b){Po&&Po(b)}function zu(){is.stop()}function Hu(){is.start()}const is=new Sf;is.setAnimationLoop(Lp),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(b){Po=b,j.setAnimationLoop(b),b===null?is.stop():is.start()},j.addEventListener("sessionstart",zu),j.addEventListener("sessionend",Hu),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;const K=j.enabled===!0&&j.isPresenting===!0,Q=S!==null&&(I===null||K)&&S.begin(M,I);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(j.cameraAutoUpdate===!0&&j.updateCamera(V),V=j.getCamera()),b.isScene===!0&&b.onBeforeRender(M,b,V,I),y=Y.get(b,C.length),y.init(V),C.push(y),Qe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Te.setFromProjectionMatrix(Qe,si,V.reversedDepth),Ee=this.localClippingEnabled,pe=ie.init(this.clippingPlanes,Ee),A=k.get(b,T.length),A.init(),T.push(A),j.enabled===!0&&j.isPresenting===!0){const be=M.xr.getDepthSensingMesh();be!==null&&Do(be,V,-1/0,M.sortObjects)}Do(b,V,0,M.sortObjects),A.finish(),M.sortObjects===!0&&A.sort(Ae,Re),Ne=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Ne&&Se.addToRenderList(A,b),this.info.render.frame++,pe===!0&&ie.beginShadows();const W=y.state.shadowsArray;if(de.render(W,b,V),pe===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset(),(Q&&S.hasRenderPass())===!1){const be=A.opaque,ye=A.transmissive;if(y.setupLights(),V.isArrayCamera){const Fe=V.cameras;if(ye.length>0)for(let Oe=0,Ye=Fe.length;Oe<Ye;Oe++){const $e=Fe[Oe];Gu(be,ye,b,$e)}Ne&&Se.render(b);for(let Oe=0,Ye=Fe.length;Oe<Ye;Oe++){const $e=Fe[Oe];Vu(A,b,$e,$e.viewport)}}else ye.length>0&&Gu(be,ye,b,V),Ne&&Se.render(b),Vu(A,b,V)}I!==null&&P===0&&(H.updateMultisampleRenderTarget(I),H.updateRenderTargetMipmap(I)),Q&&S.end(M),b.isScene===!0&&b.onAfterRender(M,b,V),le.resetDefaultState(),L=-1,B=null,C.pop(),C.length>0?(y=C[C.length-1],pe===!0&&ie.setGlobalState(M.clippingPlanes,y.state.camera)):y=null,T.pop(),T.length>0?A=T[T.length-1]:A=null};function Do(b,V,K,Q){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)K=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||Te.intersectsSprite(b)){Q&&ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Qe);const be=Ie.update(b),ye=b.material;ye.visible&&A.push(b,be,ye,K,ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||Te.intersectsObject(b))){const be=Ie.update(b),ye=b.material;if(Q&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ze.copy(b.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),ze.copy(be.boundingSphere.center)),ze.applyMatrix4(b.matrixWorld).applyMatrix4(Qe)),Array.isArray(ye)){const Fe=be.groups;for(let Oe=0,Ye=Fe.length;Oe<Ye;Oe++){const $e=Fe[Oe],ke=ye[$e.materialIndex];ke&&ke.visible&&A.push(b,be,ke,K,ze.z,$e)}}else ye.visible&&A.push(b,be,ye,K,ze.z,null)}}const ve=b.children;for(let be=0,ye=ve.length;be<ye;be++)Do(ve[be],V,K,Q)}function Vu(b,V,K,Q){const{opaque:W,transmissive:ve,transparent:be}=b;y.setupLightsView(K),pe===!0&&ie.setGlobalState(M.clippingPlanes,K),Q&&De.viewport(U.copy(Q)),W.length>0&&ga(W,V,K),ve.length>0&&ga(ve,V,K),be.length>0&&ga(be,V,K),De.buffers.depth.setTest(!0),De.buffers.depth.setMask(!0),De.buffers.color.setMask(!0),De.setPolygonOffset(!1)}function Gu(b,V,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[Q.id]===void 0){const ke=Ze.has("EXT_color_buffer_half_float")||Ze.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[Q.id]=new Kn(1,1,{generateMipmaps:!0,type:ke?ui:mn,minFilter:As,samples:Math.max(4,ht.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace})}const ve=y.state.transmissionRenderTarget[Q.id],be=Q.viewport||U;ve.setSize(be.z*M.transmissionResolutionScale,be.w*M.transmissionResolutionScale);const ye=M.getRenderTarget(),Fe=M.getActiveCubeFace(),Oe=M.getActiveMipmapLevel();M.setRenderTarget(ve),M.getClearColor(G),J=M.getClearAlpha(),J<1&&M.setClearColor(16777215,.5),M.clear(),Ne&&Se.render(K);const Ye=M.toneMapping;M.toneMapping=li;const $e=Q.viewport;if(Q.viewport!==void 0&&(Q.viewport=void 0),y.setupLightsView(Q),pe===!0&&ie.setGlobalState(M.clippingPlanes,Q),ga(b,K,Q),H.updateMultisampleRenderTarget(ve),H.updateRenderTargetMipmap(ve),Ze.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let dt=0,Dt=V.length;dt<Dt;dt++){const It=V[dt],{object:ft,geometry:jt,material:Le,group:Mn}=It;if(Le.side===wn&&ft.layers.test(Q.layers)){const rt=Le.side;Le.side=gn,Le.needsUpdate=!0,Wu(ft,K,Q,jt,Le,Mn),Le.side=rt,Le.needsUpdate=!0,ke=!0}}ke===!0&&(H.updateMultisampleRenderTarget(ve),H.updateRenderTargetMipmap(ve))}M.setRenderTarget(ye,Fe,Oe),M.setClearColor(G,J),$e!==void 0&&(Q.viewport=$e),M.toneMapping=Ye}function ga(b,V,K){const Q=V.isScene===!0?V.overrideMaterial:null;for(let W=0,ve=b.length;W<ve;W++){const be=b[W],{object:ye,geometry:Fe,group:Oe}=be;let Ye=be.material;Ye.allowOverride===!0&&Q!==null&&(Ye=Q),ye.layers.test(K.layers)&&Wu(ye,V,K,Fe,Ye,Oe)}}function Wu(b,V,K,Q,W,ve){b.onBeforeRender(M,V,K,Q,W,ve),b.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),W.onBeforeRender(M,V,K,Q,b,ve),W.transparent===!0&&W.side===wn&&W.forceSinglePass===!1?(W.side=gn,W.needsUpdate=!0,M.renderBufferDirect(K,V,Q,W,b,ve),W.side=jn,W.needsUpdate=!0,M.renderBufferDirect(K,V,Q,W,b,ve),W.side=wn):M.renderBufferDirect(K,V,Q,W,b,ve),b.onAfterRender(M,V,K,Q,W,ve)}function _a(b,V,K){V.isScene!==!0&&(V=Ue);const Q=E.get(b),W=y.state.lights,ve=y.state.shadowsArray,be=W.state.version,ye=ue.getParameters(b,W.state,ve,V,K),Fe=ue.getProgramCacheKey(ye);let Oe=Q.programs;Q.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,Q.fog=V.fog;const Ye=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;Q.envMap=ee.get(b.envMap||Q.environment,Ye),Q.envMapRotation=Q.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,Oe===void 0&&(b.addEventListener("dispose",lt),Oe=new Map,Q.programs=Oe);let $e=Oe.get(Fe);if($e!==void 0){if(Q.currentProgram===$e&&Q.lightsStateVersion===be)return qu(b,ye),$e}else ye.uniforms=ue.getUniforms(b),b.onBeforeCompile(ye,M),$e=ue.acquireProgram(ye,Fe),Oe.set(Fe,$e),Q.uniforms=ye.uniforms;const ke=Q.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(ke.clippingPlanes=ie.uniform),qu(b,ye),Q.needsLights=Op(b),Q.lightsStateVersion=be,Q.needsLights&&(ke.ambientLightColor.value=W.state.ambient,ke.lightProbe.value=W.state.probe,ke.directionalLights.value=W.state.directional,ke.directionalLightShadows.value=W.state.directionalShadow,ke.spotLights.value=W.state.spot,ke.spotLightShadows.value=W.state.spotShadow,ke.rectAreaLights.value=W.state.rectArea,ke.ltc_1.value=W.state.rectAreaLTC1,ke.ltc_2.value=W.state.rectAreaLTC2,ke.pointLights.value=W.state.point,ke.pointLightShadows.value=W.state.pointShadow,ke.hemisphereLights.value=W.state.hemi,ke.directionalShadowMatrix.value=W.state.directionalShadowMatrix,ke.spotLightMatrix.value=W.state.spotLightMatrix,ke.spotLightMap.value=W.state.spotLightMap,ke.pointShadowMatrix.value=W.state.pointShadowMatrix),Q.currentProgram=$e,Q.uniformsList=null,$e}function Xu(b){if(b.uniformsList===null){const V=b.currentProgram.getUniforms();b.uniformsList=no.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function qu(b,V){const K=E.get(b);K.outputColorSpace=V.outputColorSpace,K.batching=V.batching,K.batchingColor=V.batchingColor,K.instancing=V.instancing,K.instancingColor=V.instancingColor,K.instancingMorph=V.instancingMorph,K.skinning=V.skinning,K.morphTargets=V.morphTargets,K.morphNormals=V.morphNormals,K.morphColors=V.morphColors,K.morphTargetsCount=V.morphTargetsCount,K.numClippingPlanes=V.numClippingPlanes,K.numIntersection=V.numClipIntersection,K.vertexAlphas=V.vertexAlphas,K.vertexTangents=V.vertexTangents,K.toneMapping=V.toneMapping}function Bp(b,V,K,Q,W){V.isScene!==!0&&(V=Ue),H.resetTextureUnits();const ve=V.fog,be=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial?V.environment:null,ye=I===null?M.outputColorSpace:I.isXRRenderTarget===!0?I.texture.colorSpace:xr,Fe=Q.isMeshStandardMaterial||Q.isMeshLambertMaterial&&!Q.envMap||Q.isMeshPhongMaterial&&!Q.envMap,Oe=ee.get(Q.envMap||be,Fe),Ye=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,$e=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),ke=!!K.morphAttributes.position,dt=!!K.morphAttributes.normal,Dt=!!K.morphAttributes.color;let It=li;Q.toneMapped&&(I===null||I.isXRRenderTarget===!0)&&(It=M.toneMapping);const ft=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,jt=ft!==void 0?ft.length:0,Le=E.get(Q),Mn=y.state.lights;if(pe===!0&&(Ee===!0||b!==B)){const Vt=b===B&&Q.id===L;ie.setState(Q,b,Vt)}let rt=!1;Q.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Mn.state.version||Le.outputColorSpace!==ye||W.isBatchedMesh&&Le.batching===!1||!W.isBatchedMesh&&Le.batching===!0||W.isBatchedMesh&&Le.batchingColor===!0&&W.colorTexture===null||W.isBatchedMesh&&Le.batchingColor===!1&&W.colorTexture!==null||W.isInstancedMesh&&Le.instancing===!1||!W.isInstancedMesh&&Le.instancing===!0||W.isSkinnedMesh&&Le.skinning===!1||!W.isSkinnedMesh&&Le.skinning===!0||W.isInstancedMesh&&Le.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&Le.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&Le.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&Le.instancingMorph===!1&&W.morphTexture!==null||Le.envMap!==Oe||Q.fog===!0&&Le.fog!==ve||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==ie.numPlanes||Le.numIntersection!==ie.numIntersection)||Le.vertexAlphas!==Ye||Le.vertexTangents!==$e||Le.morphTargets!==ke||Le.morphNormals!==dt||Le.morphColors!==Dt||Le.toneMapping!==It||Le.morphTargetsCount!==jt)&&(rt=!0):(rt=!0,Le.__version=Q.version);let Gn=Le.currentProgram;rt===!0&&(Gn=_a(Q,V,W));let $n=!1,ss=!1,Ls=!1;const mt=Gn.getUniforms(),qt=Le.uniforms;if(De.useProgram(Gn.program)&&($n=!0,ss=!0,Ls=!0),Q.id!==L&&(L=Q.id,ss=!0),$n||B!==b){De.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),mt.setValue(N,"projectionMatrix",b.projectionMatrix),mt.setValue(N,"viewMatrix",b.matrixWorldInverse);const Bi=mt.map.cameraPosition;Bi!==void 0&&Bi.setValue(N,Pe.setFromMatrixPosition(b.matrixWorld)),ht.logarithmicDepthBuffer&&mt.setValue(N,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&mt.setValue(N,"isOrthographic",b.isOrthographicCamera===!0),B!==b&&(B=b,ss=!0,Ls=!0)}if(Le.needsLights&&(Mn.state.directionalShadowMap.length>0&&mt.setValue(N,"directionalShadowMap",Mn.state.directionalShadowMap,H),Mn.state.spotShadowMap.length>0&&mt.setValue(N,"spotShadowMap",Mn.state.spotShadowMap,H),Mn.state.pointShadowMap.length>0&&mt.setValue(N,"pointShadowMap",Mn.state.pointShadowMap,H)),W.isSkinnedMesh){mt.setOptional(N,W,"bindMatrix"),mt.setOptional(N,W,"bindMatrixInverse");const Vt=W.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),mt.setValue(N,"boneTexture",Vt.boneTexture,H))}W.isBatchedMesh&&(mt.setOptional(N,W,"batchingTexture"),mt.setValue(N,"batchingTexture",W._matricesTexture,H),mt.setOptional(N,W,"batchingIdTexture"),mt.setValue(N,"batchingIdTexture",W._indirectTexture,H),mt.setOptional(N,W,"batchingColorTexture"),W._colorsTexture!==null&&mt.setValue(N,"batchingColorTexture",W._colorsTexture,H));const Li=K.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&me.update(W,K,Gn),(ss||Le.receiveShadow!==W.receiveShadow)&&(Le.receiveShadow=W.receiveShadow,mt.setValue(N,"receiveShadow",W.receiveShadow)),(Q.isMeshStandardMaterial||Q.isMeshLambertMaterial||Q.isMeshPhongMaterial)&&Q.envMap===null&&V.environment!==null&&(qt.envMapIntensity.value=V.environmentIntensity),qt.dfgLUT!==void 0&&(qt.dfgLUT.value=uA()),ss&&(mt.setValue(N,"toneMappingExposure",M.toneMappingExposure),Le.needsLights&&Up(qt,Ls),ve&&Q.fog===!0&&Be.refreshFogUniforms(qt,ve),Be.refreshMaterialUniforms(qt,Q,xe,re,y.state.transmissionRenderTarget[b.id]),no.upload(N,Xu(Le),qt,H)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(no.upload(N,Xu(Le),qt,H),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&mt.setValue(N,"center",W.center),mt.setValue(N,"modelViewMatrix",W.modelViewMatrix),mt.setValue(N,"normalMatrix",W.normalMatrix),mt.setValue(N,"modelMatrix",W.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Vt=Q.uniformsGroups;for(let Bi=0,Bs=Vt.length;Bi<Bs;Bi++){const Qu=Vt[Bi];ge.update(Qu,Gn),ge.bind(Qu,Gn)}}return Gn}function Up(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Op(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return w},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return I},this.setRenderTargetTextures=function(b,V,K){const Q=E.get(b);Q.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,Q.__autoAllocateDepthBuffer===!1&&(Q.__useRenderToTexture=!1),E.get(b.texture).__webglTexture=V,E.get(b.depthTexture).__webglTexture=Q.__autoAllocateDepthBuffer?void 0:K,Q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){const K=E.get(b);K.__webglFramebuffer=V,K.__useDefaultFramebuffer=V===void 0};const Np=N.createFramebuffer();this.setRenderTarget=function(b,V=0,K=0){I=b,w=V,P=K;let Q=null,W=!1,ve=!1;if(b){const ye=E.get(b);if(ye.__useDefaultFramebuffer!==void 0){De.bindFramebuffer(N.FRAMEBUFFER,ye.__webglFramebuffer),U.copy(b.viewport),O.copy(b.scissor),q=b.scissorTest,De.viewport(U),De.scissor(O),De.setScissorTest(q),L=-1;return}else if(ye.__webglFramebuffer===void 0)H.setupRenderTarget(b);else if(ye.__hasExternalTextures)H.rebindTextures(b,E.get(b.texture).__webglTexture,E.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ye=b.depthTexture;if(ye.__boundDepthTexture!==Ye){if(Ye!==null&&E.has(Ye)&&(b.width!==Ye.image.width||b.height!==Ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(b)}}const Fe=b.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ve=!0);const Oe=E.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Oe[V])?Q=Oe[V][K]:Q=Oe[V],W=!0):b.samples>0&&H.useMultisampledRTT(b)===!1?Q=E.get(b).__webglMultisampledFramebuffer:Array.isArray(Oe)?Q=Oe[K]:Q=Oe,U.copy(b.viewport),O.copy(b.scissor),q=b.scissorTest}else U.copy(X).multiplyScalar(xe).floor(),O.copy(te).multiplyScalar(xe).floor(),q=se;if(K!==0&&(Q=Np),De.bindFramebuffer(N.FRAMEBUFFER,Q)&&De.drawBuffers(b,Q),De.viewport(U),De.scissor(O),De.setScissorTest(q),W){const ye=E.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+V,ye.__webglTexture,K)}else if(ve){const ye=V;for(let Fe=0;Fe<b.textures.length;Fe++){const Oe=E.get(b.textures[Fe]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Fe,Oe.__webglTexture,K,ye)}}else if(b!==null&&K!==0){const ye=E.get(b.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,ye.__webglTexture,K)}L=-1},this.readRenderTargetPixels=function(b,V,K,Q,W,ve,be,ye=0){if(!(b&&b.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Fe=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe){De.bindFramebuffer(N.FRAMEBUFFER,Fe);try{const Oe=b.textures[ye],Ye=Oe.format,$e=Oe.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye),!ht.textureFormatReadable(Ye)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ht.textureTypeReadable($e)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-Q&&K>=0&&K<=b.height-W&&N.readPixels(V,K,Q,W,he.convert(Ye),he.convert($e),ve)}finally{const Oe=I!==null?E.get(I).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,Oe)}}},this.readRenderTargetPixelsAsync=async function(b,V,K,Q,W,ve,be,ye=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Fe=E.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&be!==void 0&&(Fe=Fe[be]),Fe)if(V>=0&&V<=b.width-Q&&K>=0&&K<=b.height-W){De.bindFramebuffer(N.FRAMEBUFFER,Fe);const Oe=b.textures[ye],Ye=Oe.format,$e=Oe.type;if(b.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+ye),!ht.textureFormatReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ht.textureTypeReadable($e))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ke=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.bufferData(N.PIXEL_PACK_BUFFER,ve.byteLength,N.STREAM_READ),N.readPixels(V,K,Q,W,he.convert(Ye),he.convert($e),0);const dt=I!==null?E.get(I).__webglFramebuffer:null;De.bindFramebuffer(N.FRAMEBUFFER,dt);const Dt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Mm(N,Dt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,ke),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ve),N.deleteBuffer(ke),N.deleteSync(Dt),ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,K=0){const Q=Math.pow(2,-K),W=Math.floor(b.image.width*Q),ve=Math.floor(b.image.height*Q),be=V!==null?V.x:0,ye=V!==null?V.y:0;H.setTexture2D(b,0),N.copyTexSubImage2D(N.TEXTURE_2D,K,0,0,be,ye,W,ve),De.unbindTexture()};const kp=N.createFramebuffer(),zp=N.createFramebuffer();this.copyTextureToTexture=function(b,V,K=null,Q=null,W=0,ve=0){let be,ye,Fe,Oe,Ye,$e,ke,dt,Dt;const It=b.isCompressedTexture?b.mipmaps[ve]:b.image;if(K!==null)be=K.max.x-K.min.x,ye=K.max.y-K.min.y,Fe=K.isBox3?K.max.z-K.min.z:1,Oe=K.min.x,Ye=K.min.y,$e=K.isBox3?K.min.z:0;else{const qt=Math.pow(2,-W);be=Math.floor(It.width*qt),ye=Math.floor(It.height*qt),b.isDataArrayTexture?Fe=It.depth:b.isData3DTexture?Fe=Math.floor(It.depth*qt):Fe=1,Oe=0,Ye=0,$e=0}Q!==null?(ke=Q.x,dt=Q.y,Dt=Q.z):(ke=0,dt=0,Dt=0);const ft=he.convert(V.format),jt=he.convert(V.type);let Le;V.isData3DTexture?(H.setTexture3D(V,0),Le=N.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(H.setTexture2DArray(V,0),Le=N.TEXTURE_2D_ARRAY):(H.setTexture2D(V,0),Le=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,V.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,V.unpackAlignment);const Mn=N.getParameter(N.UNPACK_ROW_LENGTH),rt=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Gn=N.getParameter(N.UNPACK_SKIP_PIXELS),$n=N.getParameter(N.UNPACK_SKIP_ROWS),ss=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,It.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,It.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Oe),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ye),N.pixelStorei(N.UNPACK_SKIP_IMAGES,$e);const Ls=b.isDataArrayTexture||b.isData3DTexture,mt=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){const qt=E.get(b),Li=E.get(V),Vt=E.get(qt.__renderTarget),Bi=E.get(Li.__renderTarget);De.bindFramebuffer(N.READ_FRAMEBUFFER,Vt.__webglFramebuffer),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,Bi.__webglFramebuffer);for(let Bs=0;Bs<Fe;Bs++)Ls&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,E.get(b).__webglTexture,W,$e+Bs),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,E.get(V).__webglTexture,ve,Dt+Bs)),N.blitFramebuffer(Oe,Ye,be,ye,ke,dt,be,ye,N.DEPTH_BUFFER_BIT,N.NEAREST);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(W!==0||b.isRenderTargetTexture||E.has(b)){const qt=E.get(b),Li=E.get(V);De.bindFramebuffer(N.READ_FRAMEBUFFER,kp),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,zp);for(let Vt=0;Vt<Fe;Vt++)Ls?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,qt.__webglTexture,W,$e+Vt):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,qt.__webglTexture,W),mt?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Li.__webglTexture,ve,Dt+Vt):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Li.__webglTexture,ve),W!==0?N.blitFramebuffer(Oe,Ye,be,ye,ke,dt,be,ye,N.COLOR_BUFFER_BIT,N.NEAREST):mt?N.copyTexSubImage3D(Le,ve,ke,dt,Dt+Vt,Oe,Ye,be,ye):N.copyTexSubImage2D(Le,ve,ke,dt,Oe,Ye,be,ye);De.bindFramebuffer(N.READ_FRAMEBUFFER,null),De.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else mt?b.isDataTexture||b.isData3DTexture?N.texSubImage3D(Le,ve,ke,dt,Dt,be,ye,Fe,ft,jt,It.data):V.isCompressedArrayTexture?N.compressedTexSubImage3D(Le,ve,ke,dt,Dt,be,ye,Fe,ft,It.data):N.texSubImage3D(Le,ve,ke,dt,Dt,be,ye,Fe,ft,jt,It):b.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ve,ke,dt,be,ye,ft,jt,It.data):b.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ve,ke,dt,It.width,It.height,ft,It.data):N.texSubImage2D(N.TEXTURE_2D,ve,ke,dt,be,ye,ft,jt,It);N.pixelStorei(N.UNPACK_ROW_LENGTH,Mn),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,rt),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,$n),N.pixelStorei(N.UNPACK_SKIP_IMAGES,ss),ve===0&&V.generateMipmaps&&N.generateMipmap(Le),De.unbindTexture()},this.initRenderTarget=function(b){E.get(b).__webglFramebuffer===void 0&&H.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?H.setTextureCube(b,0):b.isData3DTexture?H.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?H.setTexture2DArray(b,0):H.setTexture2D(b,0),De.unbindTexture()},this.resetState=function(){w=0,P=0,I=null,De.reset(),le.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=st._getDrawingBufferColorSpace(e),t.unpackColorSpace=st._getUnpackColorSpace()}}const Ss=class Ss{constructor(e,t){let n,i;this.promise=new Promise((c,u)=>{n=c,i=u});const s=n.bind(this),a=i.bind(this),o=(...c)=>{s(...c)},l=c=>{a(c)};e(o.bind(this),l.bind(this)),this.abortHandler=t,this.id=Ss.idGen++}then(e){return new Ss((t,n)=>{this.promise=this.promise.then((...i)=>{const s=e(...i);s instanceof Promise||s instanceof Ss?s.then((...a)=>{t(...a)}):t(s)}).catch(i=>{n(i)})},this.abortHandler)}catch(e){return new Ss(t=>{this.promise=this.promise.then((...n)=>{t(...n)}).catch(e)},this.abortHandler)}abort(e){this.abortHandler&&this.abortHandler(e)}};ce(Ss,"idGen",0);let sa=Ss;class bf extends Error{constructor(e){super(e)}}(function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){r[0]=t;const n=e[0];let i=n>>16&32768,s=n>>12&2047;const a=n>>23&255;return a<103?i:a>142?(i|=31744,i|=(a==255?0:1)&&n&8388607,i):a<113?(s|=2048,i|=(s>>114-a)+(s>>113-a&1),i):(i|=a-112<<10|s>>1,i+=s&1,i)}})();const fl=function(){const r=new Float32Array(1),e=new Int32Array(r.buffer);return function(t){return r[0]=t,e[0]}}(),hA=function(r,e){return r[e]+(r[e+1]<<8)+(r[e+2]<<16)+(r[e+3]<<24)},bo=function(r,e,t=!0,n){const i=new AbortController,s=i.signal;let a=!1;const o=u=>{i.abort(u),a=!0};let l=!1;const c=(u,h,d,f)=>{e&&!l&&(e(u,h,d,f),u===100&&(l=!0))};return new sa((u,h)=>{const d={signal:s};n&&(d.headers=n),fetch(r,d).then(async f=>{if(!f.ok){const v=await f.text();h(new Error(`Fetch failed: ${f.status} ${f.statusText} ${v}`));return}const m=f.body.getReader();let _=0,p=f.headers.get("Content-Length"),g=p?parseInt(p):void 0;const x=[];for(;!a;)try{const{value:v,done:A}=await m.read();if(A){if(c(100,"100%",v,g),t){const C=new Blob(x).arrayBuffer();u(C)}else u();break}_+=v.length;let y,T;g!==void 0&&(y=_/g*100,T=`${y.toFixed(2)}%`),t&&x.push(v),c(y,T,v,g)}catch(v){h(v);return}}).catch(f=>{h(new bf(f))})},o)},Mt=function(r,e,t){return Math.max(Math.min(r,t),e)},Js=function(){return performance.now()/1e3},ir=r=>{if(r.geometry&&(r.geometry.dispose(),r.geometry=null),r.material&&(r.material.dispose(),r.material=null),r.children)for(let e of r.children)ir(e)},In=(r,e)=>new Promise(t=>{window.setTimeout(()=>{t(r?r():void 0)},e?1:50)}),cr=(r=0)=>{let e=0;if(r===1)e=9;else if(r===2)e=24;else if(r===3)e=45;else if(r>3)throw new Error("getSphericalHarmonicsComponentCountForDegree() -> Invalid spherical harmonics degree");return e},au=()=>{let r,e;return{promise:new Promise((n,i)=>{r=n,e=i}),resolve:r,reject:e}},pl=r=>{let e,t;return r||(r=()=>{}),{promise:new sa((i,s)=>{e=i,t=s},r),resolve:e,reject:t}};class dA{constructor(e,t,n){this.major=e,this.minor=t,this.patch=n}toString(){return`${this.major}_${this.minor}_${this.patch}`}}function ou(){const r=navigator.userAgent;return r.indexOf("iPhone")>0||r.indexOf("iPad")>0}function wf(){if(ou()){const r=navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);return new dA(parseInt(r[1]||0,10),parseInt(r[2]||0,10),parseInt(r[3]||0,10))}else return null}const fA=14,Kr=class Kr{constructor(e=0){this.sphericalHarmonicsDegree=e,this.sphericalHarmonicsCount=cr(this.sphericalHarmonicsDegree),this.componentCount=this.sphericalHarmonicsCount+fA,this.defaultSphericalHarmonics=new Array(this.sphericalHarmonicsCount).fill(0),this.splats=[],this.splatCount=0}static createSplat(e=0){const t=[0,0,0,1,1,1,1,0,0,0,0,0,0,0];let n=cr(e);for(let i=0;i<n;i++)t.push(0);return t}addSplat(e){this.splats.push(e),this.splatCount++}getSplat(e){return this.splats[e]}addDefaultSplat(){const e=Kr.createSplat(this.sphericalHarmonicsDegree);return this.addSplat(e),e}addSplatFromComonents(e,t,n,i,s,a,o,l,c,u,h,d,f,m,..._){const p=[e,t,n,i,s,a,o,l,c,u,h,d,f,m,...this.defaultSphericalHarmonics];for(let g=0;g<_.length&&g<this.sphericalHarmonicsCount;g++)p[g]=_[g];return this.addSplat(p),p}addSplatFromArray(e,t){const n=e.splats[t],i=Kr.createSplat(this.sphericalHarmonicsDegree);for(let s=0;s<this.componentCount&&s<n.length;s++)i[s]=n[s];this.addSplat(i)}};ce(Kr,"OFFSET",{X:0,Y:1,Z:2,SCALE0:3,SCALE1:4,SCALE2:5,ROTATION0:6,ROTATION1:7,ROTATION2:8,ROTATION3:9,FDC0:10,FDC1:11,FDC2:12,OPACITY:13,FRC0:14,FRC1:15,FRC2:16,FRC3:17,FRC4:18,FRC5:19,FRC6:20,FRC7:21,FRC8:22,FRC9:23,FRC10:24,FRC11:25,FRC12:26,FRC13:27,FRC14:28,FRC15:29,FRC16:30,FRC17:31,FRC18:32,FRC19:33,FRC20:34,FRC21:35,FRC22:36,FRC23:37});let fe=Kr;class tt{}ce(tt,"DefaultSplatSortDistanceMapPrecision",16),ce(tt,"MemoryPageSize",65536),ce(tt,"BytesPerFloat",4),ce(tt,"BytesPerInt",4),ce(tt,"MaxScenes",32),ce(tt,"ProgressiveLoadSectionSize",262144),ce(tt,"ProgressiveLoadSectionDelayDuration",15),ce(tt,"SphericalHarmonics8BitCompressionRange",3);const pA=tt.SphericalHarmonics8BitCompressionRange,Vi=pA/2,kt=na.toHalfFloat.bind(na),lu=na.fromHalfFloat.bind(na),yt=(r,e,t=!1,n,i)=>{if(e===0)return r;if(e===1||e===2&&!t)return na.fromHalfFloat(r);if(e===2)return cu(r,n,i)},Vr=(r,e,t)=>{r=Mt(r,e,t);const n=t-e;return Mt(Math.floor((r-e)/n*255),0,255)},cu=(r,e,t)=>{const n=t-e;return r/255*n+e},Rf=(r,e,t)=>Vr(lu(r,e,t)),mA=(r,e,t)=>kt(cu(r,e,t)),ot=(r,e,t,n=!1)=>t===0?r.getFloat32(e*4,!0):t===1||t===2&&!n?r.getUint16(e*2,!0):r.getUint8(e,!0),gA=function(){const r=e=>e;return function(e,t,n,i=!1){if(t===n)return e;let s=r;return t===2&&i?n===1?s=mA:n==0&&(s=cu):t===2||t===1?n===0?s=lu:n==2&&(i?s=Rf:s=r):t===0&&(n===1?s=kt:n==2&&(i?s=Vr:s=kt)),s(e)}}(),er=(r,e,t,n,i=0)=>{const s=new Uint8Array(r,e),a=new Uint8Array(t,n);for(let o=0;o<i;o++)a[o]=s[o]},Z=class Z{constructor(e,t=!0){ce(this,"getSplatScaleAndRotation",function(){const e=new He,t=new He,n=new He,i=new D,s=new D,a=new St;return function(o,l,c,u,h){const d=this.globalSplatIndexToSectionMap[o],f=this.sections[d],m=o-f.splatCountOffset,_=f.bytesPerSplat*m+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,f.dataBase+_);s.set(yt(ot(p,0,this.compressionLevel),this.compressionLevel),yt(ot(p,1,this.compressionLevel),this.compressionLevel),yt(ot(p,2,this.compressionLevel),this.compressionLevel)),h&&(h.x!==void 0&&(s.x=h.x),h.y!==void 0&&(s.y=h.y),h.z!==void 0&&(s.z=h.z)),a.set(yt(ot(p,4,this.compressionLevel),this.compressionLevel),yt(ot(p,5,this.compressionLevel),this.compressionLevel),yt(ot(p,6,this.compressionLevel),this.compressionLevel),yt(ot(p,3,this.compressionLevel),this.compressionLevel)),u?(e.makeScale(s.x,s.y,s.z),t.makeRotationFromQuaternion(a),n.copy(e).multiply(t).multiply(u),n.decompose(i,c,l)):(l.copy(s),c.copy(a))}}());ce(this,"fillSplatScaleRotationArray",function(){const e=new He,t=new He,n=new He,i=new D,s=new St,a=new D,o=l=>{const c=l.w<0?-1:1;l.x*=c,l.y*=c,l.z*=c,l.w*=c};return function(l,c,u,h,d,f,m,_){const p=this.splatCount;h=h||0,d=d||p-1,f===void 0&&(f=h);const g=(x,v)=>gA(x,v,m);for(let x=h;x<=d;x++){const v=this.globalSplatIndexToSectionMap[x],A=this.sections[v],y=x-A.splatCountOffset,T=A.bytesPerSplat*y+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,C=(x-h+f)*Z.ScaleComponentCount,S=(x-h+f)*Z.RotationComponentCount,M=new DataView(this.bufferData,A.dataBase+T),R=_&&_.x!==void 0?_.x:ot(M,0,this.compressionLevel),w=_&&_.y!==void 0?_.y:ot(M,1,this.compressionLevel),P=_&&_.z!==void 0?_.z:ot(M,2,this.compressionLevel),I=ot(M,3,this.compressionLevel),L=ot(M,4,this.compressionLevel),B=ot(M,5,this.compressionLevel),U=ot(M,6,this.compressionLevel);i.set(yt(R,this.compressionLevel),yt(w,this.compressionLevel),yt(P,this.compressionLevel)),s.set(yt(L,this.compressionLevel),yt(B,this.compressionLevel),yt(U,this.compressionLevel),yt(I,this.compressionLevel)).normalize(),u&&(a.set(0,0,0),e.makeScale(i.x,i.y,i.z),t.makeRotationFromQuaternion(s),n.identity().premultiply(e).premultiply(t),n.premultiply(u),n.decompose(a,s,i),s.normalize()),o(s),l&&(l[C]=g(i.x,0),l[C+1]=g(i.y,0),l[C+2]=g(i.z,0)),c&&(c[S]=g(s.x,0),c[S+1]=g(s.y,0),c[S+2]=g(s.z,0),c[S+3]=g(s.w,0))}}}());ce(this,"fillSphericalHarmonicsArray",function(){for(let L=0;L<15;L++)new D;const e=new We,t=new He,n=new D,i=new D,s=new St,a=[],o=[],l=[],c=[],u=[],h=[],d=[],f=[],m=[],_=[],p=[],g=[],x=[],v=[],A=[],y=[],T=[],C=[],S=L=>L,M=(L,B,U,O)=>{L[0]=B,L[1]=U,L[2]=O},R=(L,B,U,O,q)=>{L[0]=ot(B,O,q,!0),L[1]=ot(B,O+U,q,!0),L[2]=ot(B,O+U+U,q,!0)},w=(L,B)=>{B[0]=L[0],B[1]=L[1],B[2]=L[2]},P=(L,B,U,O)=>{B[U]=O(L[0]),B[U+1]=O(L[1]),B[U+2]=O(L[2])},I=(L,B,U,O,q)=>(B[0]=yt(L[0],U,!0,O,q),B[1]=yt(L[1],U,!0,O,q),B[2]=yt(L[2],U,!0,O,q),B);return function(L,B,U,O,q,G,J){const ae=this.splatCount;O=O||0,q=q||ae-1,G===void 0&&(G=O),U&&B>=1&&(t.copy(U),t.decompose(n,s,i),s.normalize(),t.makeRotationFromQuaternion(s),e.setFromMatrix4(t),M(a,e.elements[4],-e.elements[7],e.elements[1]),M(o,-e.elements[5],e.elements[8],-e.elements[2]),M(l,e.elements[3],-e.elements[6],e.elements[0]));const re=Ae=>Rf(Ae,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff),xe=Ae=>Vr(Ae,this.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff);for(let Ae=O;Ae<=q;Ae++){const Re=this.globalSplatIndexToSectionMap[Ae],X=this.sections[Re];B=Math.min(B,X.sphericalHarmonicsDegree);const te=cr(B),se=Ae-X.splatCountOffset,Te=X.bytesPerSplat*se+Z.CompressionLevels[this.compressionLevel].SphericalHarmonicsOffsetBytes,pe=new DataView(this.bufferData,X.dataBase+Te),Ee=(Ae-O+G)*te;let Qe=U?0:this.compressionLevel,Pe=S;Qe!==J&&(Qe===1?J===0?Pe=lu:J==2&&(Pe=re):Qe===0&&(J===1?Pe=kt:J==2&&(Pe=xe)));const ze=this.minSphericalHarmonicsCoeff,Ue=this.maxSphericalHarmonicsCoeff;B>=1&&(R(m,pe,3,0,this.compressionLevel),R(_,pe,3,1,this.compressionLevel),R(p,pe,3,2,this.compressionLevel),U?(I(m,m,this.compressionLevel,ze,Ue),I(_,_,this.compressionLevel,ze,Ue),I(p,p,this.compressionLevel,ze,Ue),Z.rotateSphericalHarmonics3(m,_,p,a,o,l,v,A,y)):(w(m,v),w(_,A),w(p,y)),P(v,L,Ee,Pe),P(A,L,Ee+3,Pe),P(y,L,Ee+6,Pe),B>=2&&(R(m,pe,5,9,this.compressionLevel),R(_,pe,5,10,this.compressionLevel),R(p,pe,5,11,this.compressionLevel),R(g,pe,5,12,this.compressionLevel),R(x,pe,5,13,this.compressionLevel),U?(I(m,m,this.compressionLevel,ze,Ue),I(_,_,this.compressionLevel,ze,Ue),I(p,p,this.compressionLevel,ze,Ue),I(g,g,this.compressionLevel,ze,Ue),I(x,x,this.compressionLevel,ze,Ue),Z.rotateSphericalHarmonics5(m,_,p,g,x,a,o,l,c,u,h,d,f,v,A,y,T,C)):(w(m,v),w(_,A),w(p,y),w(g,T),w(x,C)),P(v,L,Ee+9,Pe),P(A,L,Ee+12,Pe),P(y,L,Ee+15,Pe),P(T,L,Ee+18,Pe),P(C,L,Ee+21,Pe)))}}}());this.constructFromBuffer(e,t)}getSplatCount(){return this.splatCount}getMaxSplatCount(){return this.maxSplatCount}getMinSphericalHarmonicsDegree(){let e=0;for(let t=0;t<this.sections.length;t++){const n=this.sections[t];(t===0||n.sphericalHarmonicsDegree<e)&&(e=n.sphericalHarmonicsDegree)}return e}getBucketIndex(e,t){let n;const i=e.fullBucketCount*e.bucketSize;if(t<i)n=Math.floor(t/e.bucketSize);else{let s=i;n=e.fullBucketCount;let a=0;for(;s<e.splatCount;){let o=e.partiallyFilledBucketLengths[a];if(t>=s&&t<s+o)break;s+=o,n++,a++}}return n}getSplatCenter(e,t,n){const i=this.globalSplatIndexToSectionMap[e],s=this.sections[i],a=e-s.splatCountOffset,o=s.bytesPerSplat*a,l=new DataView(this.bufferData,s.dataBase+o),c=ot(l,0,this.compressionLevel),u=ot(l,1,this.compressionLevel),h=ot(l,2,this.compressionLevel);if(this.compressionLevel>=1){const f=this.getBucketIndex(s,a)*Z.BucketStorageSizeFloats,m=s.compressionScaleFactor,_=s.compressionScaleRange;t.x=(c-_)*m+s.bucketArray[f],t.y=(u-_)*m+s.bucketArray[f+1],t.z=(h-_)*m+s.bucketArray[f+2]}else t.x=c,t.y=u,t.z=h;n&&t.applyMatrix4(n)}getSplatColor(e,t){const n=this.globalSplatIndexToSectionMap[e],i=this.sections[n],s=e-i.splatCountOffset,a=i.bytesPerSplat*s+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,o=new Uint8Array(this.bufferData,i.dataBase+a,4);t.set(o[0],o[1],o[2],o[3])}fillSplatCenterArray(e,t,n,i,s){const a=this.splatCount;n=n||0,i=i||a-1,s===void 0&&(s=n);const o=new D;for(let l=n;l<=i;l++){const c=this.globalSplatIndexToSectionMap[l],u=this.sections[c],h=l-u.splatCountOffset,d=(l-n+s)*Z.CenterComponentCount,f=u.bytesPerSplat*h,m=new DataView(this.bufferData,u.dataBase+f),_=ot(m,0,this.compressionLevel),p=ot(m,1,this.compressionLevel),g=ot(m,2,this.compressionLevel);if(this.compressionLevel>=1){const v=this.getBucketIndex(u,h)*Z.BucketStorageSizeFloats,A=u.compressionScaleFactor,y=u.compressionScaleRange;o.x=(_-y)*A+u.bucketArray[v],o.y=(p-y)*A+u.bucketArray[v+1],o.z=(g-y)*A+u.bucketArray[v+2]}else o.x=_,o.y=p,o.z=g;t&&o.applyMatrix4(t),e[d]=o.x,e[d+1]=o.y,e[d+2]=o.z}}fillSplatCovarianceArray(e,t,n,i,s,a){const o=this.splatCount,l=new D,c=new St;n=n||0,i=i||o-1,s===void 0&&(s=n);for(let u=n;u<=i;u++){const h=this.globalSplatIndexToSectionMap[u],d=this.sections[h],f=u-d.splatCountOffset,m=(u-n+s)*Z.CovarianceComponentCount,_=d.bytesPerSplat*f+Z.CompressionLevels[this.compressionLevel].ScaleOffsetBytes,p=new DataView(this.bufferData,d.dataBase+_);l.set(yt(ot(p,0,this.compressionLevel),this.compressionLevel),yt(ot(p,1,this.compressionLevel),this.compressionLevel),yt(ot(p,2,this.compressionLevel),this.compressionLevel)),c.set(yt(ot(p,4,this.compressionLevel),this.compressionLevel),yt(ot(p,5,this.compressionLevel),this.compressionLevel),yt(ot(p,6,this.compressionLevel),this.compressionLevel),yt(ot(p,3,this.compressionLevel),this.compressionLevel)),Z.computeCovariance(l,c,t,e,m,a)}}fillSplatColorArray(e,t,n,i,s){const a=this.splatCount;n=n||0,i=i||a-1,s===void 0&&(s=n);for(let o=n;o<=i;o++){const l=this.globalSplatIndexToSectionMap[o],c=this.sections[l],u=o-c.splatCountOffset,h=(o-n+s)*Z.ColorComponentCount,d=c.bytesPerSplat*u+Z.CompressionLevels[this.compressionLevel].ColorOffsetBytes,f=new Uint8Array(this.bufferData,c.dataBase+d);let m=f[3];m=m>=t?m:0,e[h]=f[0],e[h+1]=f[1],e[h+2]=f[2],e[h+3]=m}}static parseHeader(e){const t=new Uint8Array(e,0,Z.HeaderSizeBytes),n=new Uint16Array(e,0,Z.HeaderSizeBytes/2),i=new Uint32Array(e,0,Z.HeaderSizeBytes/4),s=new Float32Array(e,0,Z.HeaderSizeBytes/4),a=t[0],o=t[1],l=i[1],c=i[2],u=i[3],h=i[4],d=n[10],f=new D(s[6],s[7],s[8]),m=s[9]||-Vi,_=s[10]||Vi;return{versionMajor:a,versionMinor:o,maxSectionCount:l,sectionCount:c,maxSplatCount:u,splatCount:h,compressionLevel:d,sceneCenter:f,minSphericalHarmonicsCoeff:m,maxSphericalHarmonicsCoeff:_}}static writeHeaderCountsToBuffer(e,t,n){const i=new Uint32Array(n,0,Z.HeaderSizeBytes/4);i[2]=e,i[4]=t}static writeHeaderToBuffer(e,t){const n=new Uint8Array(t,0,Z.HeaderSizeBytes),i=new Uint16Array(t,0,Z.HeaderSizeBytes/2),s=new Uint32Array(t,0,Z.HeaderSizeBytes/4),a=new Float32Array(t,0,Z.HeaderSizeBytes/4);n[0]=e.versionMajor,n[1]=e.versionMinor,n[2]=0,n[3]=0,s[1]=e.maxSectionCount,s[2]=e.sectionCount,s[3]=e.maxSplatCount,s[4]=e.splatCount,i[10]=e.compressionLevel,a[6]=e.sceneCenter.x,a[7]=e.sceneCenter.y,a[8]=e.sceneCenter.z,a[9]=e.minSphericalHarmonicsCoeff||-Vi,a[10]=e.maxSphericalHarmonicsCoeff||Vi}static parseSectionHeaders(e,t,n=0,i){const s=e.compressionLevel,a=e.maxSectionCount,o=new Uint16Array(t,n,a*Z.SectionHeaderSizeBytes/2),l=new Uint32Array(t,n,a*Z.SectionHeaderSizeBytes/4),c=new Float32Array(t,n,a*Z.SectionHeaderSizeBytes/4),u=[];let h=0,d=h/2,f=h/4,m=Z.HeaderSizeBytes+e.maxSectionCount*Z.SectionHeaderSizeBytes,_=0;for(let p=0;p<a;p++){const g=l[f+1],x=l[f+2],v=l[f+3],A=c[f+4],y=A/2,T=o[d+10],C=l[f+6]||Z.CompressionLevels[s].ScaleRange,S=l[f+8],M=l[f+9],R=M*4,w=T*v+R,P=o[d+20],{bytesPerSplat:I}=Z.calculateComponentStorage(s,P),L=I*g,B=L+w,U={bytesPerSplat:I,splatCountOffset:_,splatCount:i?g:0,maxSplatCount:g,bucketSize:x,bucketCount:v,bucketBlockSize:A,halfBucketBlockSize:y,bucketStorageSizeBytes:T,bucketsStorageSizeBytes:w,splatDataStorageSizeBytes:L,storageSizeBytes:B,compressionScaleRange:C,compressionScaleFactor:y/C,base:m,bucketsBase:m+R,dataBase:m+w,fullBucketCount:S,partiallyFilledBucketCount:M,sphericalHarmonicsDegree:P};u[p]=U,m+=B,h+=Z.SectionHeaderSizeBytes,d=h/2,f=h/4,_+=g}return u}static writeSectionHeaderToBuffer(e,t,n,i=0){const s=new Uint16Array(n,i,Z.SectionHeaderSizeBytes/2),a=new Uint32Array(n,i,Z.SectionHeaderSizeBytes/4),o=new Float32Array(n,i,Z.SectionHeaderSizeBytes/4);a[0]=e.splatCount,a[1]=e.maxSplatCount,a[2]=t>=1?e.bucketSize:0,a[3]=t>=1?e.bucketCount:0,o[4]=t>=1?e.bucketBlockSize:0,s[10]=t>=1?Z.BucketStorageSizeBytes:0,a[6]=t>=1?e.compressionScaleRange:0,a[7]=e.storageSizeBytes,a[8]=t>=1?e.fullBucketCount:0,a[9]=t>=1?e.partiallyFilledBucketCount:0,s[20]=e.sphericalHarmonicsDegree}static writeSectionHeaderSplatCountToBuffer(e,t,n=0){const i=new Uint32Array(t,n,Z.SectionHeaderSizeBytes/4);i[0]=e}constructFromBuffer(e,t){this.bufferData=e,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSectionMap=[];const n=Z.parseHeader(this.bufferData);this.versionMajor=n.versionMajor,this.versionMinor=n.versionMinor,this.maxSectionCount=n.maxSectionCount,this.sectionCount=t?n.maxSectionCount:0,this.maxSplatCount=n.maxSplatCount,this.splatCount=t?n.maxSplatCount:0,this.compressionLevel=n.compressionLevel,this.sceneCenter=new D().copy(n.sceneCenter),this.minSphericalHarmonicsCoeff=n.minSphericalHarmonicsCoeff,this.maxSphericalHarmonicsCoeff=n.maxSphericalHarmonicsCoeff,this.sections=Z.parseSectionHeaders(n,this.bufferData,Z.HeaderSizeBytes,t),this.linkBufferArrays(),this.buildMaps()}static calculateComponentStorage(e,t){const n=Z.CompressionLevels[e].BytesPerCenter,i=Z.CompressionLevels[e].BytesPerScale,s=Z.CompressionLevels[e].BytesPerRotation,a=Z.CompressionLevels[e].BytesPerColor,o=cr(t),l=Z.CompressionLevels[e].BytesPerSphericalHarmonicsComponent*o,c=n+i+s+a+l;return{bytesPerCenter:n,bytesPerScale:i,bytesPerRotation:s,bytesPerColor:a,sphericalHarmonicsComponentsPerSplat:o,sphericalHarmonicsBytesPerSplat:l,bytesPerSplat:c}}linkBufferArrays(){for(let e=0;e<this.maxSectionCount;e++){const t=this.sections[e];t.bucketArray=new Float32Array(this.bufferData,t.bucketsBase,t.bucketCount*Z.BucketStorageSizeFloats),t.partiallyFilledBucketCount>0&&(t.partiallyFilledBucketLengths=new Uint32Array(this.bufferData,t.base,t.partiallyFilledBucketCount))}}buildMaps(){let e=0;for(let t=0;t<this.maxSectionCount;t++){const n=this.sections[t];for(let i=0;i<n.maxSplatCount;i++){const s=e+i;this.globalSplatIndexToLocalSplatIndexMap[s]=i,this.globalSplatIndexToSectionMap[s]=t}e+=n.maxSplatCount}}updateLoadedCounts(e,t){Z.writeHeaderCountsToBuffer(e,t,this.bufferData),this.sectionCount=e,this.splatCount=t}updateSectionLoadedCounts(e,t){const n=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*e;Z.writeSectionHeaderSplatCountToBuffer(t,this.bufferData,n),this.sections[e].splatCount=t}static generateFromUncompressedSplatArrays(e,t,n,i,s,a,o=[]){let l=0;for(let y=0;y<e.length;y++){const T=e[y];l=Math.max(T.sphericalHarmonicsDegree,l)}let c,u;for(let y=0;y<e.length;y++){const T=e[y];for(let C=0;C<T.splats.length;C++){const S=T.splats[C];for(let M=fe.OFFSET.FRC0;M<fe.OFFSET.FRC23&&M<S.length;M++)(!c||S[M]<c)&&(c=S[M]),(!u||S[M]>u)&&(u=S[M])}}c=c||-Vi,u=u||Vi;const{bytesPerSplat:h}=Z.calculateComponentStorage(n,l),d=Z.CompressionLevels[n].ScaleRange,f=[],m=[];let _=0;for(let y=0;y<e.length;y++){const T=e[y],C=new fe(l);for(let Re=0;Re<T.splatCount;Re++){const X=T.splats[Re];(X[fe.OFFSET.OPACITY]||0)>=t&&C.addSplat(X)}const S=o[y]||{},M=(S.blockSizeFactor||1)*(s||Z.BucketBlockSize),R=Math.ceil((S.bucketSizeFactor||1)*(a||Z.BucketSize)),w=Z.computeBucketsForUncompressedSplatArray(C,M,R),P=w.fullBuckets.length,I=w.partiallyFullBuckets.map(Re=>Re.splats.length),L=I.length,B=[...w.fullBuckets,...w.partiallyFullBuckets],U=C.splats.length*h,O=L*4,q=n>=1?B.length*Z.BucketStorageSizeBytes+O:0,G=U+q,J=new ArrayBuffer(G),ae=d/(M*.5),re=new D;let xe=0;for(let Re=0;Re<B.length;Re++){const X=B[Re];re.fromArray(X.center);for(let te=0;te<X.splats.length;te++){let se=X.splats[te];const Te=C.splats[se],pe=q+xe*h;Z.writeSplatDataToSectionBuffer(Te,J,pe,n,l,re,ae,d,c,u),xe++}}if(_+=xe,n>=1){const Re=new Uint32Array(J,0,I.length*4);for(let te=0;te<I.length;te++)Re[te]=I[te];const X=new Float32Array(J,O,B.length*Z.BucketStorageSizeFloats);for(let te=0;te<B.length;te++){const se=B[te],Te=te*3;X[Te]=se.center[0],X[Te+1]=se.center[1],X[Te+2]=se.center[2]}}f.push(J);const Ae=new ArrayBuffer(Z.SectionHeaderSizeBytes);Z.writeSectionHeaderToBuffer({maxSplatCount:xe,splatCount:xe,bucketSize:R,bucketCount:B.length,bucketBlockSize:M,compressionScaleRange:d,storageSizeBytes:G,fullBucketCount:P,partiallyFilledBucketCount:L,sphericalHarmonicsDegree:l},n,Ae,0),m.push(Ae)}let p=0;for(let y of f)p+=y.byteLength;const g=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes*f.length+p,x=new ArrayBuffer(g);Z.writeHeaderToBuffer({versionMajor:0,versionMinor:1,maxSectionCount:f.length,sectionCount:f.length,maxSplatCount:_,splatCount:_,compressionLevel:n,sceneCenter:i,minSphericalHarmonicsCoeff:c,maxSphericalHarmonicsCoeff:u},x);let v=Z.HeaderSizeBytes;for(let y of m)new Uint8Array(x,v,Z.SectionHeaderSizeBytes).set(new Uint8Array(y)),v+=Z.SectionHeaderSizeBytes;for(let y of f)new Uint8Array(x,v,y.byteLength).set(new Uint8Array(y)),v+=y.byteLength;return new Z(x)}static computeBucketsForUncompressedSplatArray(e,t,n){let i=e.splatCount;const s=t/2,a=new D,o=new D;for(let _=0;_<i;_++){const p=e.splats[_],g=[p[fe.OFFSET.X],p[fe.OFFSET.Y],p[fe.OFFSET.Z]];(_===0||g[0]<a.x)&&(a.x=g[0]),(_===0||g[0]>o.x)&&(o.x=g[0]),(_===0||g[1]<a.y)&&(a.y=g[1]),(_===0||g[1]>o.y)&&(o.y=g[1]),(_===0||g[2]<a.z)&&(a.z=g[2]),(_===0||g[2]>o.z)&&(o.z=g[2])}const l=new D().copy(o).sub(a),c=Math.ceil(l.y/t),u=Math.ceil(l.z/t),h=new D,d=[],f={};for(let _=0;_<i;_++){const p=e.splats[_],g=[p[fe.OFFSET.X],p[fe.OFFSET.Y],p[fe.OFFSET.Z]],x=Math.floor((g[0]-a.x)/t),v=Math.floor((g[1]-a.y)/t),A=Math.floor((g[2]-a.z)/t);h.x=x*t+a.x+s,h.y=v*t+a.y+s,h.z=A*t+a.z+s;const y=x*(c*u)+v*u+A;let T=f[y];T||(f[y]=T={splats:[],center:h.toArray()}),T.splats.push(_),T.splats.length>=n&&(d.push(T),f[y]=null)}const m=[];for(let _ in f)if(f.hasOwnProperty(_)){const p=f[_];p&&m.push(p)}return{fullBuckets:d,partiallyFullBuckets:m}}static preallocateUncompressed(e,t){const n=Z.CompressionLevels[0].SphericalHarmonicsDegrees[t],i=Z.HeaderSizeBytes+Z.SectionHeaderSizeBytes,s=i+n.BytesPerSplat*e,a=new ArrayBuffer(s);return Z.writeHeaderToBuffer({versionMajor:Z.CurrentMajorVersion,versionMinor:Z.CurrentMinorVersion,maxSectionCount:1,sectionCount:1,maxSplatCount:e,splatCount:e,compressionLevel:0,sceneCenter:new D},a),Z.writeSectionHeaderToBuffer({maxSplatCount:e,splatCount:e,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:t},0,a,Z.HeaderSizeBytes),{splatBuffer:new Z(a,!0),splatBufferDataOffsetBytes:i}}};ce(Z,"CurrentMajorVersion",0),ce(Z,"CurrentMinorVersion",1),ce(Z,"CenterComponentCount",3),ce(Z,"ScaleComponentCount",3),ce(Z,"RotationComponentCount",4),ce(Z,"ColorComponentCount",4),ce(Z,"CovarianceComponentCount",6),ce(Z,"SplatScaleOffsetFloat",3),ce(Z,"SplatRotationOffsetFloat",6),ce(Z,"CompressionLevels",{0:{BytesPerCenter:12,BytesPerScale:12,BytesPerRotation:16,BytesPerColor:4,ScaleOffsetBytes:12,RotationffsetBytes:24,ColorOffsetBytes:40,SphericalHarmonicsOffsetBytes:44,ScaleRange:1,BytesPerSphericalHarmonicsComponent:4,SphericalHarmonicsOffsetFloat:11,SphericalHarmonicsDegrees:{0:{BytesPerSplat:44},1:{BytesPerSplat:80},2:{BytesPerSplat:140}}},1:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:2,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:42},2:{BytesPerSplat:72}}},2:{BytesPerCenter:6,BytesPerScale:6,BytesPerRotation:8,BytesPerColor:4,ScaleOffsetBytes:6,RotationffsetBytes:12,ColorOffsetBytes:20,SphericalHarmonicsOffsetBytes:24,ScaleRange:32767,BytesPerSphericalHarmonicsComponent:1,SphericalHarmonicsOffsetFloat:12,SphericalHarmonicsDegrees:{0:{BytesPerSplat:24},1:{BytesPerSplat:33},2:{BytesPerSplat:48}}}}),ce(Z,"CovarianceSizeFloats",6),ce(Z,"HeaderSizeBytes",4096),ce(Z,"SectionHeaderSizeBytes",1024),ce(Z,"BucketStorageSizeBytes",12),ce(Z,"BucketStorageSizeFloats",3),ce(Z,"BucketBlockSize",5),ce(Z,"BucketSize",256),ce(Z,"computeCovariance",function(){const e=new He,t=new We,n=new We,i=new We,s=new We,a=new We,o=new We;return function(l,c,u,h,d=0,f){e.makeScale(l.x,l.y,l.z),t.setFromMatrix4(e),e.makeRotationFromQuaternion(c),n.setFromMatrix4(e),i.copy(n).multiply(t),s.copy(i).transpose().premultiply(i),u&&(a.setFromMatrix4(u),o.copy(a).transpose(),s.multiply(o),s.premultiply(a)),f>=1?(h[d]=kt(s.elements[0]),h[d+1]=kt(s.elements[3]),h[d+2]=kt(s.elements[6]),h[d+3]=kt(s.elements[4]),h[d+4]=kt(s.elements[7]),h[d+5]=kt(s.elements[8])):(h[d]=s.elements[0],h[d+1]=s.elements[3],h[d+2]=s.elements[6],h[d+3]=s.elements[4],h[d+4]=s.elements[7],h[d+5]=s.elements[8])}}()),ce(Z,"dot3",(e,t,n,i,s)=>{s[0]=s[1]=s[2]=0;const a=i[0],o=i[1],l=i[2];Z.addInto3(e[0]*a,e[1]*a,e[2]*a,s),Z.addInto3(t[0]*o,t[1]*o,t[2]*o,s),Z.addInto3(n[0]*l,n[1]*l,n[2]*l,s)}),ce(Z,"addInto3",(e,t,n,i)=>{i[0]=i[0]+e,i[1]=i[1]+t,i[2]=i[2]+n}),ce(Z,"dot5",(e,t,n,i,s,a,o)=>{o[0]=o[1]=o[2]=0;const l=a[0],c=a[1],u=a[2],h=a[3],d=a[4];Z.addInto3(e[0]*l,e[1]*l,e[2]*l,o),Z.addInto3(t[0]*c,t[1]*c,t[2]*c,o),Z.addInto3(n[0]*u,n[1]*u,n[2]*u,o),Z.addInto3(i[0]*h,i[1]*h,i[2]*h,o),Z.addInto3(s[0]*d,s[1]*d,s[2]*d,o)}),ce(Z,"rotateSphericalHarmonics3",(e,t,n,i,s,a,o,l,c)=>{Z.dot3(e,t,n,i,o),Z.dot3(e,t,n,s,l),Z.dot3(e,t,n,a,c)}),ce(Z,"rotateSphericalHarmonics5",(e,t,n,i,s,a,o,l,c,u,h,d,f,m,_,p,g,x)=>{const v=Math.sqrt(.25),A=Math.sqrt(3/4),y=Math.sqrt(1/3),T=Math.sqrt(4/3),C=Math.sqrt(1/12);c[0]=v*(l[2]*a[0]+l[0]*a[2]+(a[2]*l[0]+a[0]*l[2])),c[1]=l[1]*a[0]+a[1]*l[0],c[2]=A*(l[1]*a[1]+a[1]*l[1]),c[3]=l[1]*a[2]+a[1]*l[2],c[4]=v*(l[2]*a[2]-l[0]*a[0]+(a[2]*l[2]-a[0]*l[0])),Z.dot5(e,t,n,i,s,c,m),u[0]=v*(o[2]*a[0]+o[0]*a[2]+(a[2]*o[0]+a[0]*o[2])),u[1]=o[1]*a[0]+a[1]*o[0],u[2]=A*(o[1]*a[1]+a[1]*o[1]),u[3]=o[1]*a[2]+a[1]*o[2],u[4]=v*(o[2]*a[2]-o[0]*a[0]+(a[2]*o[2]-a[0]*o[0])),Z.dot5(e,t,n,i,s,u,_),h[0]=y*(o[2]*o[0]+o[0]*o[2])+-C*(l[2]*l[0]+l[0]*l[2]+(a[2]*a[0]+a[0]*a[2])),h[1]=T*o[1]*o[0]+-y*(l[1]*l[0]+a[1]*a[0]),h[2]=o[1]*o[1]+-v*(l[1]*l[1]+a[1]*a[1]),h[3]=T*o[1]*o[2]+-y*(l[1]*l[2]+a[1]*a[2]),h[4]=y*(o[2]*o[2]-o[0]*o[0])+-C*(l[2]*l[2]-l[0]*l[0]+(a[2]*a[2]-a[0]*a[0])),Z.dot5(e,t,n,i,s,h,p),d[0]=v*(o[2]*l[0]+o[0]*l[2]+(l[2]*o[0]+l[0]*o[2])),d[1]=o[1]*l[0]+l[1]*o[0],d[2]=A*(o[1]*l[1]+l[1]*o[1]),d[3]=o[1]*l[2]+l[1]*o[2],d[4]=v*(o[2]*l[2]-o[0]*l[0]+(l[2]*o[2]-l[0]*o[0])),Z.dot5(e,t,n,i,s,d,g),f[0]=v*(l[2]*l[0]+l[0]*l[2]-(a[2]*a[0]+a[0]*a[2])),f[1]=l[1]*l[0]-a[1]*a[0],f[2]=A*(l[1]*l[1]-a[1]*a[1]),f[3]=l[1]*l[2]-a[1]*a[2],f[4]=v*(l[2]*l[2]-l[0]*l[0]-(a[2]*a[2]-a[0]*a[0])),Z.dot5(e,t,n,i,s,f,x)}),ce(Z,"writeSplatDataToSectionBuffer",function(){const e=new ArrayBuffer(12),t=new ArrayBuffer(12),n=new ArrayBuffer(16),i=new ArrayBuffer(4),s=new ArrayBuffer(256),a=new St,o=new D,l=new D,{X:c,Y:u,Z:h,SCALE0:d,SCALE1:f,SCALE2:m,ROTATION0:_,ROTATION1:p,ROTATION2:g,ROTATION3:x,FDC0:v,FDC1:A,FDC2:y,OPACITY:T,FRC0:C,FRC9:S}=fe.OFFSET,M=(R,w,P)=>{const I=P*2+1;return R=Math.round(R*w)+P,Mt(R,0,I)};return function(R,w,P,I,L,B,U,O,q=-Vi,G=Vi){const J=cr(L),ae=Z.CompressionLevels[I].BytesPerCenter,re=Z.CompressionLevels[I].BytesPerScale,xe=Z.CompressionLevels[I].BytesPerRotation,Ae=Z.CompressionLevels[I].BytesPerColor,Re=P,X=Re+ae,te=X+re,se=te+xe,Te=se+Ae;if(R[_]!==void 0?(a.set(R[_],R[p],R[g],R[x]),a.normalize()):a.set(1,0,0,0),R[d]!==void 0?o.set(R[d]||0,R[f]||0,R[m]||0):o.set(0,0,0),I===0){const Ee=new Float32Array(w,Re,Z.CenterComponentCount),Qe=new Float32Array(w,te,Z.RotationComponentCount),Pe=new Float32Array(w,X,Z.ScaleComponentCount);if(Qe.set([a.x,a.y,a.z,a.w]),Pe.set([o.x,o.y,o.z]),Ee.set([R[c],R[u],R[h]]),L>0){const ze=new Float32Array(w,Te,J);if(L>=1){for(let Ue=0;Ue<9;Ue++)ze[Ue]=R[C+Ue]||0;if(L>=2)for(let Ue=0;Ue<15;Ue++)ze[Ue+9]=R[S+Ue]||0}}}else{const Ee=new Uint16Array(e,0,Z.CenterComponentCount),Qe=new Uint16Array(n,0,Z.RotationComponentCount),Pe=new Uint16Array(t,0,Z.ScaleComponentCount);if(Qe.set([kt(a.x),kt(a.y),kt(a.z),kt(a.w)]),Pe.set([kt(o.x),kt(o.y),kt(o.z)]),l.set(R[c],R[u],R[h]).sub(B),l.x=M(l.x,U,O),l.y=M(l.y,U,O),l.z=M(l.z,U,O),Ee.set([l.x,l.y,l.z]),L>0){const ze=I===1?Uint16Array:Uint8Array,Ue=I===1?2:1,Ne=new ze(s,0,J);if(L>=1){for(let N=0;N<9;N++){const it=R[C+N]||0;Ne[N]=I===1?kt(it):Vr(it,q,G)}const et=9*Ue;if(er(Ne.buffer,0,w,Te,et),L>=2){for(let N=0;N<15;N++){const it=R[S+N]||0;Ne[N+9]=I===1?kt(it):Vr(it,q,G)}er(Ne.buffer,et,w,Te+et,15*Ue)}}}er(Ee.buffer,0,w,Re,6),er(Pe.buffer,0,w,X,6),er(Qe.buffer,0,w,te,8)}const pe=new Uint8ClampedArray(i,0,4);pe.set([R[v]||0,R[A]||0,R[y]||0]),pe[3]=R[T]||0,er(pe.buffer,0,w,se,4)}}());let we=Z;const Kh=new Uint8Array([112,108,121,10]),jh=new Uint8Array([10,101,110,100,95,104,101,97,100,101,114,10]),ml="end_header",gl=new Map([["char",Int8Array],["uchar",Uint8Array],["short",Int16Array],["ushort",Uint16Array],["int",Int32Array],["uint",Uint32Array],["float",Float32Array],["double",Float64Array]]),ai=(r,e)=>{const t=(1<<e)-1;return(r&t)/t},Zh=(r,e)=>{r.x=ai(e>>>21,11),r.y=ai(e>>>11,10),r.z=ai(e,11)},_A=(r,e)=>{r.x=ai(e>>>24,8),r.y=ai(e>>>16,8),r.z=ai(e>>>8,8),r.w=ai(e,8)},xA=(r,e)=>{const t=1/(Math.sqrt(2)*.5),n=(ai(e>>>20,10)-.5)*t,i=(ai(e>>>10,10)-.5)*t,s=(ai(e,10)-.5)*t,a=Math.sqrt(1-(n*n+i*i+s*s));switch(e>>>30){case 0:r.set(a,n,i,s);break;case 1:r.set(n,a,i,s);break;case 2:r.set(n,i,a,s);break;case 3:r.set(n,i,s,a);break}},Ai=(r,e,t)=>r*(1-t)+e*t,Tt=(r,e)=>{var t;return(t=r.properties.find(n=>n.name===e&&n.storage))==null?void 0:t.storage},pt=class pt{static decodeHeaderText(e){let t,n,i,s;const a=e.split(`
`).filter(h=>!h.startsWith("comment "));let o=0,l=!1;for(let h=1;h<a.length;++h){const d=a[h].split(" ");switch(d[0]){case"format":if(d[1]!=="binary_little_endian")throw new Error("Unsupported ply format");break;case"element":t={name:d[1],count:parseInt(d[2],10),properties:[],storageSizeBytes:0},t.name==="chunk"?n=t:t.name==="vertex"?i=t:t.name==="sh"&&(s=t);break;case"property":{if(!gl.has(d[1]))throw new Error(`Unrecognized property data type '${d[1]}' in ply header`);const f=gl.get(d[1]),m=f.BYTES_PER_ELEMENT*t.count;t.name==="vertex"&&(o+=f.BYTES_PER_ELEMENT),t.properties.push({type:d[1],name:d[2],storage:null,byteSize:f.BYTES_PER_ELEMENT,storageSizeByes:m}),t.storageSizeBytes+=m;break}case ml:l=!0;break;default:throw new Error(`Unrecognized header value '${d[0]}' in ply header`)}if(l)break}let c=0,u=0;return s&&(u=s.properties.length,s.properties.length>=45?c=3:s.properties.length>=24?c=2:s.properties.length>=9&&(c=1)),{chunkElement:n,vertexElement:i,shElement:s,bytesPerSplat:o,headerSizeBytes:e.indexOf(ml)+ml.length+1,sphericalHarmonicsDegree:c,sphericalHarmonicsPerSplat:u}}static decodeHeader(e){const t=(f,m)=>{const _=f.length-m.length;let p,g;for(p=0;p<=_;++p){for(g=0;g<m.length&&f[p+g]===m[g];++g);if(g===m.length)return p}return-1},n=(f,m)=>{if(f.length<m.length)return!1;for(let _=0;_<m.length;++_)if(f[_]!==m[_])return!1;return!0};let i=new Uint8Array(e),s;if(i.length>=Kh.length&&!n(i,Kh))throw new Error("Invalid PLY header");if(s=t(i,jh),s===-1)throw new Error("End of PLY header not found");const a=new TextDecoder("ascii").decode(i.slice(0,s)),{chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:h,bytesPerSplat:d}=pt.decodeHeaderText(a);return{headerSizeBytes:s+jh.length,bytesPerSplat:d,chunkElement:o,vertexElement:l,shElement:c,sphericalHarmonicsDegree:u,sphericalHarmonicsPerSplat:h}}static readElementData(e,t,n,i,s,a=null){let o=t instanceof DataView?t:new DataView(t);i=i||0,s=s||e.count-1;for(let l=i;l<=s;++l)for(let c=0;c<e.properties.length;++c){const u=e.properties[c],h=gl.get(u.type),d=h.BYTES_PER_ELEMENT*e.count;if((!u.storage||u.storage.byteLength<d)&&(!a||a(u.name))&&(u.storage=new h(e.count)),u.storage)switch(u.type){case"char":u.storage[l]=o.getInt8(n);break;case"uchar":u.storage[l]=o.getUint8(n);break;case"short":u.storage[l]=o.getInt16(n,!0);break;case"ushort":u.storage[l]=o.getUint16(n,!0);break;case"int":u.storage[l]=o.getInt32(n,!0);break;case"uint":u.storage[l]=o.getUint32(n,!0);break;case"float":u.storage[l]=o.getFloat32(n,!0);break;case"double":u.storage[l]=o.getFloat64(n,!0);break}n+=u.byteSize}return n}static readPly(e,t=null){const n=pt.decodeHeader(e);let i=pt.readElementData(n.chunkElement,e,n.headerSizeBytes,null,null,t);return i=pt.readElementData(n.vertexElement,e,i,null,null,t),pt.readElementData(n.shElement,e,i,null,null,t),{chunkElement:n.chunkElement,vertexElement:n.vertexElement,shElement:n.shElement,sphericalHarmonicsDegree:n.sphericalHarmonicsDegree,sphericalHarmonicsPerSplat:n.sphericalHarmonicsPerSplat}}static getElementStorageArrays(e,t,n){const i={};if(t){const s=Tt(e,"min_r"),a=Tt(e,"min_g"),o=Tt(e,"min_b"),l=Tt(e,"max_r"),c=Tt(e,"max_g"),u=Tt(e,"max_b"),h=Tt(e,"min_x"),d=Tt(e,"min_y"),f=Tt(e,"min_z"),m=Tt(e,"max_x"),_=Tt(e,"max_y"),p=Tt(e,"max_z"),g=Tt(e,"min_scale_x"),x=Tt(e,"min_scale_y"),v=Tt(e,"min_scale_z"),A=Tt(e,"max_scale_x"),y=Tt(e,"max_scale_y"),T=Tt(e,"max_scale_z"),C=Tt(t,"packed_position"),S=Tt(t,"packed_rotation"),M=Tt(t,"packed_scale"),R=Tt(t,"packed_color");i.colorExtremes={minR:s,maxR:l,minG:a,maxG:c,minB:o,maxB:u},i.positionExtremes={minX:h,maxX:m,minY:d,maxY:_,minZ:f,maxZ:p},i.scaleExtremes={minScaleX:g,maxScaleX:A,minScaleY:x,maxScaleY:y,minScaleZ:v,maxScaleZ:T},i.position=C,i.rotation=S,i.scale=M,i.color=R}if(n){const s={};for(let a=0;a<45;a++){const o=`f_rest_${a}`,l=Tt(n,o);if(l)s[o]=l;else break}i.sh=s}return i}static parseToUncompressedSplatBufferSection(e,t,n,i,s,a,o,l,c=null){pt.readElementData(t,a,0,n,i,c);const u=we.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,{positionExtremes:h,scaleExtremes:d,colorExtremes:f,position:m,rotation:_,scale:p,color:g}=pt.getElementStorageArrays(e,t),x=fe.createSplat();for(let v=n;v<=i;++v){pt.decompressBaseSplat(v,s,m,h,p,d,_,f,g,x);const A=v*u+l;we.writeSplatDataToSectionBuffer(x,o,A,0,0)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,a,o,l=null){pt.readElementData(t,a,0,n,i,l);const{positionExtremes:c,scaleExtremes:u,colorExtremes:h,position:d,rotation:f,scale:m,color:_}=pt.getElementStorageArrays(e,t);for(let p=n;p<=i;++p){const g=fe.createSplat();pt.decompressBaseSplat(p,s,d,c,m,u,f,h,_,g),o.addSplat(g)}}static parseSphericalHarmonicsToUncompressedSplatArraySection(e,t,n,i,s,a,o,l,c,u=null){pt.readElementData(t,s,a,n,i,u);const{sh:h}=pt.getElementStorageArrays(e,void 0,t),d=Object.values(h);for(let f=n;f<=i;++f)pt.decompressSphericalHarmonics(f,d,o,l,c.splats[f])}static parseToUncompressedSplatArray(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:a}=pt.readPly(e);t=Math.min(t,a);const o=new fe(t),{positionExtremes:l,scaleExtremes:c,colorExtremes:u,position:h,rotation:d,scale:f,color:m}=pt.getElementStorageArrays(n,i);let _;if(t>0){const{sh:p}=pt.getElementStorageArrays(n,void 0,s);_=Object.values(p)}for(let p=0;p<i.count;++p){o.addDefaultSplat();const g=o.getSplat(o.splatCount-1);pt.decompressBaseSplat(p,0,h,l,f,c,d,u,m,g),t>0&&pt.decompressSphericalHarmonics(p,_,t,a,g)}return o}static parseToUncompressedSplatBuffer(e,t){const{chunkElement:n,vertexElement:i,shElement:s,sphericalHarmonicsDegree:a}=pt.readPly(e);t=Math.min(t,a);const{splatBuffer:o,splatBufferDataOffsetBytes:l}=we.preallocateUncompressed(i.count,t),{positionExtremes:c,scaleExtremes:u,colorExtremes:h,position:d,rotation:f,scale:m,color:_}=pt.getElementStorageArrays(n,i);let p;if(t>0){const{sh:v}=pt.getElementStorageArrays(n,void 0,s);p=Object.values(v)}const g=we.CompressionLevels[0].SphericalHarmonicsDegrees[t].BytesPerSplat,x=fe.createSplat(t);for(let v=0;v<i.count;++v){pt.decompressBaseSplat(v,0,d,c,m,u,f,h,_,x),t>0&&pt.decompressSphericalHarmonics(v,p,t,a,x);const A=v*g+l;we.writeSplatDataToSectionBuffer(x,o.bufferData,A,0,t)}return o}};ce(pt,"decompressBaseSplat",function(){const e=new D,t=new St,n=new D,i=new vt,s=fe.OFFSET;return function(a,o,l,c,u,h,d,f,m,_){_=_||fe.createSplat();const p=Math.floor((o+a)/256);return Zh(e,l[a]),xA(t,d[a]),Zh(n,u[a]),_A(i,m[a]),_[s.X]=Ai(c.minX[p],c.maxX[p],e.x),_[s.Y]=Ai(c.minY[p],c.maxY[p],e.y),_[s.Z]=Ai(c.minZ[p],c.maxZ[p],e.z),_[s.ROTATION0]=t.x,_[s.ROTATION1]=t.y,_[s.ROTATION2]=t.z,_[s.ROTATION3]=t.w,_[s.SCALE0]=Math.exp(Ai(h.minScaleX[p],h.maxScaleX[p],n.x)),_[s.SCALE1]=Math.exp(Ai(h.minScaleY[p],h.maxScaleY[p],n.y)),_[s.SCALE2]=Math.exp(Ai(h.minScaleZ[p],h.maxScaleZ[p],n.z)),f.minR&&f.maxR?_[s.FDC0]=Mt(Math.round(Ai(f.minR[p],f.maxR[p],i.x)*255),0,255):_[s.FDC0]=Mt(Math.floor(i.x*255),0,255),f.minG&&f.maxG?_[s.FDC1]=Mt(Math.round(Ai(f.minG[p],f.maxG[p],i.y)*255),0,255):_[s.FDC1]=Mt(Math.floor(i.y*255),0,255),f.minB&&f.maxB?_[s.FDC2]=Mt(Math.round(Ai(f.minB[p],f.maxB[p],i.z)*255),0,255):_[s.FDC2]=Mt(Math.floor(i.z*255),0,255),_[s.OPACITY]=Mt(Math.floor(i.w*255),0,255),_}}()),ce(pt,"decompressSphericalHarmonics",function(){const e=[0,3,8,15],t=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(n,i,s,a,o){o=o||fe.createSplat();let l=e[s],c=e[a];for(let u=0;u<3;++u)for(let h=0;h<15;++h){const d=t[u*15+h];h<l&&h<c&&(o[fe.OFFSET.FRC0+d]=i[u*c+h][n]*(8/255)-4)}return o}}());let bi=pt;const rn={INRIAV1:0,INRIAV2:1,PlayCanvasCompressed:2},[If,uu,hu,du,fu,pu,mu]=[0,1,2,3,4,5,6],$h={double:If,int:uu,uint:hu,float:du,short:fu,ushort:pu,uchar:mu},SA={[If]:8,[uu]:4,[hu]:4,[du]:4,[fu]:2,[pu]:2,[mu]:1},hn=class hn{static decodeSectionHeader(e,t,n=0){const i=[];let s=!1,a=-1,o=0,l=!1,c=null;const u=[],h=[],d=[],f={};for(let g=n;g<e.length;g++){const x=e[g].trim();if(x.startsWith("element"))if(s){a--;break}else{s=!0,n=g,a=g;const v=x.split(" ");let A=0;for(let y of v){const T=y.trim();T.length>0&&(A++,A===2?c=T:A===3&&(o=parseInt(T)))}}else if(x.startsWith("property")){const v=x.match(/(\w+)\s+(\w+)\s+(\w+)/);if(v){const A=v[2],y=v[3];d.push(y);const T=t[y];f[y]=A;const C=$h[A];T!==void 0&&(u.push(T),h[T]=C)}}if(x===hn.HeaderEndToken){l=!0;break}s&&(i.push(x),a++)}const m=[];let _=0;for(let g of d){const x=f[g];if(f.hasOwnProperty(g)){const v=t[g];v!==void 0&&(m[v]=_)}_+=SA[$h[x]]}const p=hn.decodeSphericalHarmonicsFromSectionHeader(d,t);return{headerLines:i,headerStartLine:n,headerEndLine:a,fieldTypes:h,fieldIds:u,fieldOffsets:m,bytesPerVertex:_,vertexCount:o,dataSizeBytes:_*o,endOfHeader:l,sectionName:c,sphericalHarmonicsDegree:p.degree,sphericalHarmonicsCoefficientsPerChannel:p.coefficientsPerChannel,sphericalHarmonicsDegree1Fields:p.degree1Fields,sphericalHarmonicsDegree2Fields:p.degree2Fields}}static decodeSphericalHarmonicsFromSectionHeader(e,t){let n=0,i=0;for(let l of e)l.startsWith("f_rest")&&n++;i=n/3;let s=0;i>=3&&(s=1),i>=8&&(s=2);let a=[],o=[];for(let l=0;l<3;l++){if(s>=1)for(let c=0;c<3;c++)a.push(t["f_rest_"+(c+i*l)]);if(s>=2)for(let c=0;c<5;c++)o.push(t["f_rest_"+(c+i*l+3)])}return{degree:s,coefficientsPerChannel:i,degree1Fields:a,degree2Fields:o}}static getHeaderSectionNames(e){const t=[];for(let n of e)if(n.startsWith("element")){const i=n.split(" ");let s=0;for(let a of i){const o=a.trim();o.length>0&&(s++,s===2&&t.push(o))}}return t}static checkTextForEndHeader(e){return!!e.includes(hn.HeaderEndToken)}static checkBufferForEndHeader(e,t,n,i){const s=new Uint8Array(e,Math.max(0,t-n),n),a=i.decode(s);return hn.checkTextForEndHeader(a)}static extractHeaderFromBufferToText(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,s);if(i+=t.decode(a),n+=s,hn.checkBufferForEndHeader(e,n,s*2,t))break}return i}static readHeaderFromBuffer(e){const t=new TextDecoder;let n=0,i="";const s=100;for(;;){if(n+s>=e.byteLength)throw new Error("End of file reached while searching for end of header");const a=new Uint8Array(e,n,s);if(i+=t.decode(a),n+=s,hn.checkBufferForEndHeader(e,n,s*2,t))break}return i}static convertHeaderTextToLines(e){const t=e.split(`
`),n=[];for(let i=0;i<t.length;i++){const s=t[i].trim();if(n.push(s),s===hn.HeaderEndToken)break}return n}static determineHeaderFormatFromHeaderText(e){const t=hn.convertHeaderTextToLines(e);let n=rn.INRIAV1;for(let i=0;i<t.length;i++){const s=t[i].trim();if(s.startsWith("element chunk")||s.match(/[A-Za-z]*packed_[A-Za-z]*/))n=rn.PlayCanvasCompressed;else if(s.startsWith("element codebook_centers"))n=rn.INRIAV2;else if(s===hn.HeaderEndToken)break}return n}static determineHeaderFormatFromPlyBuffer(e){const t=hn.extractHeaderFromBufferToText(e);return hn.determineHeaderFormatFromHeaderText(t)}static readVertex(e,t,n,i,s,a,o=!0){const l=n*t.bytesPerVertex+i,c=t.fieldOffsets,u=t.fieldTypes;for(let h of s){const d=u[h];d===du?a[h]=e.getFloat32(l+c[h],!0):d===fu?a[h]=e.getInt16(l+c[h],!0):d===pu?a[h]=e.getUint16(l+c[h],!0):d===uu?a[h]=e.getInt32(l+c[h],!0):d===hu?a[h]=e.getUint32(l+c[h],!0):d===mu&&(o?a[h]=e.getUint8(l+c[h])/255:a[h]=e.getUint8(l+c[h]))}}};ce(hn,"HeaderEndToken","end_header");let Ft=hn;const Pf=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0"],AA=Pf.map((r,e)=>e),[Jh,vA,yA,MA,CA,TA,EA,bA,wA,RA,ed,IA,PA,td,nd,DA,FA,LA]=AA,Nn=class Nn{static decodeHeaderLines(e){let t=0;e.forEach(u=>{u.includes("f_rest_")&&t++});let n=0;t>=45?n=45:t>=24?n=24:t>=9&&(n=9);let s=Array.from(Array(Math.max(n-1,0))).map((u,h)=>`f_rest_${h+1}`);const a=[...Pf,...s],o=a.map((u,h)=>h),l=o.reduce((u,h)=>(u[a[h]]=h,u),{}),c=Ft.decodeSectionHeader(e,l,0);return c.splatCount=c.vertexCount,c.bytesPerSplat=c.bytesPerVertex,c.fieldsToReadIndexes=o,c}static decodeHeaderText(e){const t=Ft.convertHeaderTextToLines(e),n=Nn.decodeHeaderLines(t);return n.headerText=e,n.headerSizeBytes=e.indexOf(Ft.HeaderEndToken)+Ft.HeaderEndToken.length+1,n}static decodeHeaderFromBuffer(e){const t=Ft.readHeaderFromBuffer(e);return Nn.decodeHeaderText(t)}static findSplatData(e,t){return new DataView(e,t.headerSizeBytes)}static parseToUncompressedSplatBufferSection(e,t,n,i,s,a,o,l=0){l=Math.min(l,e.sphericalHarmonicsDegree);const c=we.CompressionLevels[0].SphericalHarmonicsDegrees[l].BytesPerSplat;for(let u=t;u<=n;u++){const h=Nn.parseToUncompressedSplat(i,u,e,s,l),d=u*c+o;we.writeSplatDataToSectionBuffer(h,a,d,0,l)}}static parseToUncompressedSplatArraySection(e,t,n,i,s,a,o=0){o=Math.min(o,e.sphericalHarmonicsDegree);for(let l=t;l<=n;l++){const c=Nn.parseToUncompressedSplat(i,l,e,s,o);a.addSplat(c)}}static decodeSectionSplatData(e,t,n,i,s=!0){if(i=Math.min(i,n.sphericalHarmonicsDegree),s){const a=new fe(i);for(let o=0;o<t;o++){const l=Nn.parseToUncompressedSplat(e,o,n,0,i);a.addSplat(l)}return a}else{const{splatBuffer:a,splatBufferDataOffsetBytes:o}=we.preallocateUncompressed(t,i);return Nn.parseToUncompressedSplatBufferSection(n,0,t-1,e,0,a.bufferData,o,i),a}}static readSplat(e,t,n,i,s){return Ft.readVertex(e,t,n,i,t.fieldsToReadIndexes,s,!0)}static parseToUncompressedSplatArray(e,t=0){const{header:n,splatCount:i,splatData:s}=id(e);return Nn.decodeSectionSplatData(s,i,n,t,!0)}static parseToUncompressedSplatBuffer(e,t=0){const{header:n,splatCount:i,splatData:s}=id(e);return Nn.decodeSectionSplatData(s,i,n,t,!1)}};ce(Nn,"parseToUncompressedSplat",function(){let e=[];const t=new St,n=fe.OFFSET.X,i=fe.OFFSET.Y,s=fe.OFFSET.Z,a=fe.OFFSET.SCALE0,o=fe.OFFSET.SCALE1,l=fe.OFFSET.SCALE2,c=fe.OFFSET.ROTATION0,u=fe.OFFSET.ROTATION1,h=fe.OFFSET.ROTATION2,d=fe.OFFSET.ROTATION3,f=fe.OFFSET.FDC0,m=fe.OFFSET.FDC1,_=fe.OFFSET.FDC2,p=fe.OFFSET.OPACITY,g=[];for(let x=0;x<45;x++)g[x]=fe.OFFSET.FRC0+x;return function(x,v,A,y=0,T=0){T=Math.min(T,A.sphericalHarmonicsDegree),Nn.readSplat(x,A,v,y,e);const C=fe.createSplat(T);if(e[Jh]!==void 0?(C[a]=Math.exp(e[Jh]),C[o]=Math.exp(e[vA]),C[l]=Math.exp(e[yA])):(C[a]=.01,C[o]=.01,C[l]=.01),e[ed]!==void 0){const S=.28209479177387814;C[f]=(.5+S*e[ed])*255,C[m]=(.5+S*e[IA])*255,C[_]=(.5+S*e[PA])*255}else e[nd]!==void 0?(C[f]=e[nd]*255,C[m]=e[DA]*255,C[_]=e[FA]*255):(C[f]=0,C[m]=0,C[_]=0);if(e[td]!==void 0&&(C[p]=1/(1+Math.exp(-e[td]))*255),C[f]=Mt(Math.floor(C[f]),0,255),C[m]=Mt(Math.floor(C[m]),0,255),C[_]=Mt(Math.floor(C[_]),0,255),C[p]=Mt(Math.floor(C[p]),0,255),T>=1&&e[LA]!==void 0){for(let S=0;S<9;S++)C[g[S]]=e[A.sphericalHarmonicsDegree1Fields[S]];if(T>=2)for(let S=0;S<15;S++)C[g[9+S]]=e[A.sphericalHarmonicsDegree2Fields[S]]}return t.set(e[MA],e[CA],e[TA],e[EA]),t.normalize(),C[c]=t.x,C[u]=t.y,C[h]=t.z,C[d]=t.w,C[n]=e[bA],C[i]=e[wA],C[s]=e[RA],C}}());let Pi=Nn;function id(r){const e=Pi.decodeHeaderFromBuffer(r),t=e.splatCount,n=Pi.findSplatData(r,e);return{header:e,splatCount:t,splatData:n}}const Df=["features_dc","features_rest_0","features_rest_1","features_rest_2","features_rest_3","features_rest_4","features_rest_5","features_rest_6","features_rest_7","features_rest_8","features_rest_9","features_rest_10","features_rest_11","features_rest_12","features_rest_13","features_rest_14","opacity","scaling","rotation_re","rotation_im"],Va=Df.map((r,e)=>e),[Ga,BA,UA,sd,Wa,OA,_l]=[0,1,4,16,17,18,19],Ff=["scale_0","scale_1","scale_2","rot_0","rot_1","rot_2","rot_3","x","y","z","f_dc_0","f_dc_1","f_dc_2","opacity","red","green","blue","f_rest_0","f_rest_1","f_rest_2","f_rest_3","f_rest_4","f_rest_5","f_rest_6","f_rest_7","f_rest_8","f_rest_9","f_rest_10","f_rest_11","f_rest_12","f_rest_13","f_rest_14","f_rest_15","f_rest_16","f_rest_17","f_rest_18","f_rest_19","f_rest_20","f_rest_21","f_rest_22","f_rest_23","f_rest_24","f_rest_25","f_rest_26","f_rest_27","f_rest_28","f_rest_29","f_rest_30","f_rest_31","f_rest_32","f_rest_33","f_rest_34","f_rest_35","f_rest_36","f_rest_37","f_rest_38","f_rest_39","f_rest_40","f_rest_41","f_rest_42","f_rest_43","f_rest_44","f_rest_45"],Mc=Ff.map((r,e)=>e),[rd,NA,kA,zA,HA,VA,GA,WA,XA,qA,Cc,Lf,Bf,ad]=Mc,od=Cc,QA=Lf,YA=Bf,Xa=r=>{const e=(31744&r)>>10,t=1023&r;return(r>>15?-1:1)*(e?e===31?t?NaN:1/0:Math.pow(2,e-15)*(1+t/1024):t/1024*6103515625e-14)},dn=class dn{static decodeSectionHeadersFromHeaderLines(e){const t=Mc.reduce((u,h)=>(u[Ff[h]]=h,u),{}),n=Va.reduce((u,h)=>(u[Df[h]]=h,u),{}),i=Ft.getHeaderSectionNames(e);let s;for(let u=0;u<i.length;u++)i[u]==="codebook_centers"&&(s=u);let a=0,o=!1;const l=[];let c=0;for(;!o;){let u;c===s?u=Ft.decodeSectionHeader(e,n,a):u=Ft.decodeSectionHeader(e,t,a),o=u.endOfHeader,a=u.headerEndLine+1,o||(u.splatCount=u.vertexCount,u.bytesPerSplat=u.bytesPerVertex),l.push(u),c++}return l}static decodeSectionHeadersFromHeaderText(e){const t=Ft.convertHeaderTextToLines(e);return dn.decodeSectionHeadersFromHeaderLines(t)}static getSplatCountFromSectionHeaders(e){let t=0;for(let n of e)n.sectionName!=="codebook_centers"&&(t+=n.vertexCount);return t}static decodeHeaderFromHeaderText(e){const t=e.indexOf(Ft.HeaderEndToken)+Ft.HeaderEndToken.length+1,n=dn.decodeSectionHeadersFromHeaderText(e),i=dn.getSplatCountFromSectionHeaders(n);return{headerSizeBytes:t,sectionHeaders:n,splatCount:i}}static decodeHeaderFromBuffer(e){const t=Ft.readHeaderFromBuffer(e);return dn.decodeHeaderFromHeaderText(t)}static findVertexData(e,t,n){let i=t.headerSizeBytes;for(let s=0;s<n&&s<t.sectionHeaders.length;s++){const a=t.sectionHeaders[s];i+=a.dataSizeBytes}return new DataView(e,i,t.sectionHeaders[n].dataSizeBytes)}static decodeCodeBook(e,t){const n=[],i=[];for(let s=0;s<t.vertexCount;s++){Ft.readVertex(e,t,s,0,Va,n);for(let a of Va){const o=Va[a];let l=i[o];l||(i[o]=l=[]),l.push(n[a])}}for(let s=0;s<i.length;s++){const a=i[s],o=.28209479177387814;for(let l=0;l<a.length;l++){const c=Xa(a[l]);s===sd?a[l]=Math.round(1/(1+Math.exp(-c))*255):s===Ga?a[l]=Math.round((.5+o*c)*255):s===Wa?a[l]=Math.exp(c):a[l]=c}}return i}static decodeSectionSplatData(e,t,n,i,s){s=Math.min(s,n.sphericalHarmonicsDegree);const a=new fe(s);for(let o=0;o<t;o++){const l=dn.parseToUncompressedSplat(e,o,n,i,0,s);a.addSplat(l)}return a}static readSplat(e,t,n,i,s){return Ft.readVertex(e,t,n,i,Mc,s,!1)}static parseToUncompressedSplatArray(e,t=0){const n=[],i=dn.decodeHeaderFromBuffer(e,t);let s;for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName==="codebook_centers"){const c=dn.findVertexData(e,i,o);s=dn.decodeCodeBook(c,l)}}for(let o=0;o<i.sectionHeaders.length;o++){const l=i.sectionHeaders[o];if(l.sectionName!=="codebook_centers"){const c=l.vertexCount,u=dn.findVertexData(e,i,o),h=dn.decodeSectionSplatData(u,c,l,s,t);n.push(h)}}const a=new fe(t);for(let o of n)for(let l of o.splats)a.addSplat(l);return a}};ce(dn,"parseToUncompressedSplat",function(){let e=[];const t=new St,n=fe.OFFSET.X,i=fe.OFFSET.Y,s=fe.OFFSET.Z,a=fe.OFFSET.SCALE0,o=fe.OFFSET.SCALE1,l=fe.OFFSET.SCALE2,c=fe.OFFSET.ROTATION0,u=fe.OFFSET.ROTATION1,h=fe.OFFSET.ROTATION2,d=fe.OFFSET.ROTATION3,f=fe.OFFSET.FDC0,m=fe.OFFSET.FDC1,_=fe.OFFSET.FDC2,p=fe.OFFSET.OPACITY,g=[];for(let x=0;x<45;x++)g[x]=fe.OFFSET.FRC0+x;return function(x,v,A,y,T=0,C=0){C=Math.min(C,A.sphericalHarmonicsDegree),dn.readSplat(x,A,v,T,e);const S=fe.createSplat(C);if(e[rd]!==void 0?(S[a]=y[Wa][e[rd]],S[o]=y[Wa][e[NA]],S[l]=y[Wa][e[kA]]):(S[a]=.01,S[o]=.01,S[l]=.01),e[Cc]!==void 0?(S[f]=y[Ga][e[Cc]],S[m]=y[Ga][e[Lf]],S[_]=y[Ga][e[Bf]]):e[od]!==void 0?(S[f]=e[od]*255,S[m]=e[QA]*255,S[_]=e[YA]*255):(S[f]=0,S[m]=0,S[_]=0),e[ad]!==void 0&&(S[p]=y[sd][e[ad]]),S[f]=Mt(Math.floor(S[f]),0,255),S[m]=Mt(Math.floor(S[m]),0,255),S[_]=Mt(Math.floor(S[_]),0,255),S[p]=Mt(Math.floor(S[p]),0,255),C>=1&&A.sphericalHarmonicsDegree>=1){for(let I=0;I<9;I++){const L=y[BA+I%3];S[g[I]]=L[e[A.sphericalHarmonicsDegree1Fields[I]]]}if(C>=2&&A.sphericalHarmonicsDegree>=2)for(let I=0;I<15;I++){const L=y[UA+I%5];S[g[9+I]]=L[e[A.sphericalHarmonicsDegree2Fields[I]]]}}const M=y[OA][e[zA]],R=y[_l][e[HA]],w=y[_l][e[VA]],P=y[_l][e[GA]];return t.set(M,R,w,P),t.normalize(),S[c]=t.x,S[u]=t.y,S[h]=t.z,S[d]=t.w,S[n]=Xa(e[WA]),S[i]=Xa(e[XA]),S[s]=Xa(e[qA]),S}}());let Tc=dn;class ld{static parseToUncompressedSplatArray(e,t=0){const n=Ft.determineHeaderFormatFromPlyBuffer(e);if(n===rn.PlayCanvasCompressed)return bi.parseToUncompressedSplatArray(e,t);if(n===rn.INRIAV1)return Pi.parseToUncompressedSplatArray(e,t);if(n===rn.INRIAV2)return Tc.parseToUncompressedSplatArray(e,t)}static parseToUncompressedSplatBuffer(e,t=0){const n=Ft.determineHeaderFormatFromPlyBuffer(e);if(n===rn.PlayCanvasCompressed)return bi.parseToUncompressedSplatBuffer(e,t);if(n===rn.INRIAV1)return Pi.parseToUncompressedSplatBuffer(e,t);if(n===rn.INRIAV2)throw new Error("parseToUncompressedSplatBuffer() is not implemented for INRIA V2 PLY files")}}class gu{constructor(e,t,n,i){this.sectionCount=e,this.sectionFilters=t,this.groupingParameters=n,this.partitionGenerator=i}partitionUncompressedSplatArray(e){let t,n,i;if(this.partitionGenerator){const a=this.partitionGenerator(e);t=a.groupingParameters,n=a.sectionCount,i=a.sectionFilters}else t=this.groupingParameters,n=this.sectionCount,i=this.sectionFilters;const s=[];for(let a=0;a<n;a++){const o=new fe(e.sphericalHarmonicsDegree),l=i[a];for(let c=0;c<e.splatCount;c++)l(c)&&o.addSplat(e.splats[c]);s.push(o)}return{splatArrays:s,parameters:t}}static getStandardPartitioner(e=0,t=new D,n=we.BucketBlockSize,i=we.BucketSize){const s=a=>{const o=fe.OFFSET.X,l=fe.OFFSET.Y,c=fe.OFFSET.Z;e<=0&&(e=a.splatCount);const u=new D,h=.5,d=g=>{g.x=Math.floor(g.x/h)*h,g.y=Math.floor(g.y/h)*h,g.z=Math.floor(g.z/h)*h};a.splats.forEach(g=>{u.set(g[o],g[l],g[c]).sub(t),d(u),g.centerDist=u.lengthSq()}),a.splats.sort((g,x)=>{let v=g.centerDist,A=x.centerDist;return v>A?1:-1});const f=[],m=[];e=Math.min(a.splatCount,e);const _=Math.ceil(a.splatCount/e);let p=0;for(let g=0;g<_;g++){let x=p;f.push(v=>v>=x&&v<x+e),m.push({blocksSize:n,bucketSize:i}),p+=e}return{sectionCount:f.length,sectionFilters:f,groupingParameters:m}};return new gu(void 0,void 0,void 0,s)}}class pa{constructor(e,t,n,i,s,a,o){this.splatPartitioner=e,this.alphaRemovalThreshold=t,this.compressionLevel=n,this.sectionSize=i,this.sceneCenter=s?new D().copy(s):void 0,this.blockSize=a,this.bucketSize=o}generateFromUncompressedSplatArray(e){const t=this.splatPartitioner.partitionUncompressedSplatArray(e);return we.generateFromUncompressedSplatArrays(t.splatArrays,this.alphaRemovalThreshold,this.compressionLevel,this.sceneCenter,this.blockSize,this.bucketSize,t.parameters)}static getStandardGenerator(e=1,t=1,n=0,i=new D,s=we.BucketBlockSize,a=we.BucketSize){const o=gu.getStandardPartitioner(n,i,s,a);return new pa(o,e,t,n,i,s,a)}}const Bt={Downloading:0,Processing:1,Done:2};class co extends Error{constructor(e){super(e)}}const At={ProgressiveToSplatBuffer:0,ProgressiveToSplatArray:1,DownloadBeforeProcessing:2};function cd(r,e){let t=0;for(let i of r)t+=i.sizeBytes;(!e||e.byteLength<t)&&(e=new ArrayBuffer(t));let n=0;for(let i of r)new Uint8Array(e,n,i.sizeBytes).set(i.data),n+=i.sizeBytes;return e}function ud(r,e,t,n,i,s,a,o){return e?pa.getStandardGenerator(t,n,i,s,a,o).generateFromUncompressedSplatArray(r):we.generateFromUncompressedSplatArrays([r],t,0,new D)}class _u{static loadFromURL(e,t,n,i,s,a,o=!0,l=0,c,u,h,d,f){let m;!n&&!o?m=At.DownloadBeforeProcessing:o?m=At.ProgressiveToSplatArray:m=At.ProgressiveToSplatBuffer;const _=tt.ProgressiveLoadSectionSize,p=we.HeaderSizeBytes+we.SectionHeaderSizeBytes,g=1;let x,v,A,y,T,C=0,S=0,M=0,R=!1,w=!1,P=!1;const I=au();let L=0,B=0,U=0,O=0,q="",G=null,J=[],ae;const re=new TextDecoder,xe=(Ae,Re,X)=>{const te=Ae>=100;if(X&&(J.push({data:X,sizeBytes:X.byteLength,startBytes:U,endBytes:U+X.byteLength}),U+=X.byteLength),m===At.DownloadBeforeProcessing)te&&I.resolve(J);else{if(R){if(x===rn.PlayCanvasCompressed&&!w){const se=G.headerSizeBytes+G.chunkElement.storageSizeBytes;T=cd(J,T),T.byteLength>=se&&(bi.readElementData(G.chunkElement,T,G.headerSizeBytes),L=se,B=se,w=!0)}}else if(q+=re.decode(X),Ft.checkTextForEndHeader(q)){if(x=Ft.determineHeaderFormatFromHeaderText(q),x===rn.INRIAV1)G=Pi.decodeHeaderText(q),l=Math.min(l,G.sphericalHarmonicsDegree),C=G.splatCount,w=!0,O=G.headerSizeBytes+G.bytesPerSplat*C;else if(x===rn.PlayCanvasCompressed){if(G=bi.decodeHeaderText(q),l=Math.min(l,G.sphericalHarmonicsDegree),m===At.ProgressiveToSplatBuffer&&l>0)throw new co("PlyLoader.loadFromURL() -> Selected PLY format has spherical harmonics data that cannot be progressively loaded.");C=G.vertexElement.count,O=G.headerSizeBytes+G.bytesPerSplat*C+G.chunkElement.storageSizeBytes}else{if(m===At.ProgressiveToSplatBuffer)throw new co("PlyLoader.loadFromURL() -> Selected PLY format cannot be progressively loaded.");m=At.DownloadBeforeProcessing;return}if(m===At.ProgressiveToSplatBuffer){const se=we.CompressionLevels[0].SphericalHarmonicsDegrees[l],Te=p+se.BytesPerSplat*C;A=new ArrayBuffer(Te),we.writeHeaderToBuffer({versionMajor:we.CurrentMajorVersion,versionMinor:we.CurrentMinorVersion,maxSectionCount:g,sectionCount:g,maxSplatCount:C,splatCount:0,compressionLevel:0,sceneCenter:new D},A)}else ae=new fe(l);L=G.headerSizeBytes,B=G.headerSizeBytes,R=!0}if(R&&w&&J.length>0&&(v=cd(J,v),U-L>_||U>=O&&!P||te)){const Te=P?G.sphericalHarmonicsPerSplat:G.bytesPerSplat,Ee=(P?U:Math.min(O,U))-B,Qe=Math.floor(Ee/Te),Pe=Qe*Te,ze=U-B-Pe,Ue=B-J[0].startBytes,Ne=new DataView(v,Ue,Pe);if(P)x===rn.PlayCanvasCompressed&&m===At.ProgressiveToSplatArray&&(bi.parseSphericalHarmonicsToUncompressedSplatArraySection(G.chunkElement,G.shElement,M,M+Qe-1,Ne,0,l,G.sphericalHarmonicsDegree,ae),M+=Qe);else{if(m===At.ProgressiveToSplatBuffer){const et=we.CompressionLevels[0].SphericalHarmonicsDegrees[l],N=S*et.BytesPerSplat+p;x===rn.PlayCanvasCompressed?bi.parseToUncompressedSplatBufferSection(G.chunkElement,G.vertexElement,0,Qe-1,S,Ne,A,N):Pi.parseToUncompressedSplatBufferSection(G,0,Qe-1,Ne,0,A,N,l)}else x===rn.PlayCanvasCompressed?bi.parseToUncompressedSplatArraySection(G.chunkElement,G.vertexElement,0,Qe-1,S,Ne,ae):Pi.parseToUncompressedSplatArraySection(G,0,Qe-1,Ne,0,ae,l);S+=Qe,m===At.ProgressiveToSplatBuffer&&(y||(we.writeSectionHeaderToBuffer({maxSplatCount:C,splatCount:S,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0,sphericalHarmonicsDegree:l},0,A,we.HeaderSizeBytes),y=new we(A,!1)),y.updateLoadedCounts(1,S)),U>=O&&(P=!0)}if(ze===0)J=[];else{let et=[],N=0;for(let it=J.length-1;it>=0;it--){const Ze=J[it];if(N+=Ze.sizeBytes,et.unshift(Ze),N>=ze)break}J=et}L+=_,B+=Pe}i&&y&&i(y,te),te&&(m===At.ProgressiveToSplatBuffer?I.resolve(y):I.resolve(ae))}t&&t(Ae,Re,Bt.Downloading)};return t&&t(0,"0%",Bt.Downloading),bo(e,xe,!1,c).then(()=>(t&&t(0,"0%",Bt.Processing),I.promise.then(Ae=>{if(t&&t(100,"100%",Bt.Done),m===At.DownloadBeforeProcessing){const Re=J.map(X=>X.data);return new Blob(Re).arrayBuffer().then(X=>_u.loadFromFileData(X,s,a,o,l,u,h,d,f))}else return m===At.ProgressiveToSplatBuffer?Ae:In(()=>ud(Ae,o,s,a,u,h,d,f))})))}static loadFromFileData(e,t,n,i,s=0,a,o,l,c){return i?In(()=>ld.parseToUncompressedSplatArray(e,s)).then(u=>ud(u,i,t,n,a,o,l,c)):In(()=>ld.parseToUncompressedSplatBuffer(e,s))}}const KA=r=>new ReadableStream({async start(e){e.enqueue(r),e.close()}});async function jA(r){try{const e=KA(r);if(!e)throw new Error("Failed to create stream from data");return await ZA(e)}catch(e){throw console.error("Error decompressing gzipped data:",e),e}}async function ZA(r){const e=r.pipeThrough(new DecompressionStream("gzip")),n=await new Response(e).arrayBuffer();return new Uint8Array(n)}const $A=1347635022,JA=1,ev=.15;function tv(r){const e=r>>15&1,t=r>>10&31,n=r&1023,i=e===1?-1:1;return t===0?i*Math.pow(2,-14)*n/1024:t===31?n!==0?NaN:i*(1/0):i*Math.pow(2,t-15)*(1+n/1024)}function nv(r){return(r-128)/128}function ys(r){switch(r){case 0:return 0;case 1:return 3;case 2:return 8;case 3:return 15;default:return console.error(`[SPZ: ERROR] Unsupported SH degree: ${r}`),0}}const iv=function(){let r=[];const e=new St,t=fe.OFFSET.X,n=fe.OFFSET.Y,i=fe.OFFSET.Z,s=fe.OFFSET.SCALE0,a=fe.OFFSET.SCALE1,o=fe.OFFSET.SCALE2,l=fe.OFFSET.ROTATION0,c=fe.OFFSET.ROTATION1,u=fe.OFFSET.ROTATION2,h=fe.OFFSET.ROTATION3,d=fe.OFFSET.FDC0,f=fe.OFFSET.FDC1,m=fe.OFFSET.FDC2,_=fe.OFFSET.OPACITY,p=[ys(0),ys(1),ys(2),ys(3)],g=[0,1,2,9,10,11,12,13,24,25,26,27,28,29,30,3,4,5,14,15,16,17,18,31,32,33,34,35,36,37,6,7,8,19,20,21,22,23,38,39,40,41,42,43,44];return function(x,v,A){A=Math.min(v,A);const y=fe.createSplat(A);x.scale[0]!==void 0?(y[s]=x.scale[0],y[a]=x.scale[1],y[o]=x.scale[2]):(y[s]=.01,y[a]=.01,y[o]=.01),x.color[0]!==void 0?(y[d]=x.color[0],y[f]=x.color[1],y[m]=x.color[2]):r[RED]!==void 0?(y[d]=r[RED]*255,y[f]=r[GREEN]*255,y[m]=r[BLUE]*255):(y[d]=0,y[f]=0,y[m]=0),x.alpha!==void 0&&(y[_]=x.alpha),y[d]=Mt(Math.floor(y[d]),0,255),y[f]=Mt(Math.floor(y[f]),0,255),y[m]=Mt(Math.floor(y[m]),0,255),y[_]=Mt(Math.floor(y[_]),0,255);let T=p[A],C=p[v];for(let S=0;S<3;++S)for(let M=0;M<15;++M){const R=g[S*15+M];M<T&&M<C&&(y[fe.OFFSET.FRC0+R]=x.sh[S*C+M])}return e.set(x.rotation[3],x.rotation[0],x.rotation[1],x.rotation[2]),e.normalize(),y[l]=e.x,y[c]=e.y,y[u]=e.z,y[h]=e.w,y[t]=x.position[0],y[n]=x.position[1],y[i]=x.position[2],y}}();function sv(r,e,t,n){return!(r.positions.length!==e*3*(n?2:3)||r.scales.length!==e*3||r.rotations.length!==e*3||r.alphas.length!==e||r.colors.length!==e*3||r.sh.length!==e*t*3)}function hd(r,e,t,n,i){e=Math.min(e,r.shDegree);const s=r.numPoints,a=ys(r.shDegree),o=r.positions.length===s*3*2;if(!sv(r,s,a,o))return null;const l={position:[],scale:[],rotation:[],alpha:void 0,color:[],sh:[]};let c;o&&(c=new Uint16Array(r.positions.buffer,r.positions.byteOffset,s*3));const u=1/(1<<r.fractionalBits),h=ys(r.shDegree),d=.28209479177387814;for(let f=0;f<s;f++){if(o)for(let x=0;x<3;x++)l.position[x]=tv(c[f*3+x]);else for(let x=0;x<3;x++){const v=f*9+x*3;let A=r.positions[v];A|=r.positions[v+1]<<8,A|=r.positions[v+2]<<16,A|=A&8388608?4278190080:0,l.position[x]=A*u}for(let x=0;x<3;x++)l.scale[x]=Math.exp(r.scales[f*3+x]/16-10);const m=r.rotations.subarray(f*3,f*3+3),_=[m[0]/127.5-1,m[1]/127.5-1,m[2]/127.5-1];l.rotation[0]=_[0],l.rotation[1]=_[1],l.rotation[2]=_[2];const p=_[0]*_[0]+_[1]*_[1]+_[2]*_[2];l.rotation[3]=Math.sqrt(Math.max(0,1-p)),l.alpha=Math.floor(r.alphas[f]);for(let x=0;x<3;x++)l.color[x]=Math.floor(((r.colors[f*3+x]/255-.5)/ev*d+.5)*255);for(let x=0;x<3;x++)for(let v=0;v<h;v++)l.sh[x*h+v]=nv(r.sh[h*3*f+v*3+x]);const g=iv(l,r.shDegree,e);if(t){const x=we.CompressionLevels[0].SphericalHarmonicsDegrees[e].BytesPerSplat,v=f*x+i;we.writeSplatDataToSectionBuffer(g,n,v,0,e)}else n.addSplat(g)}}const rv=16,av=1e7;function ov(r){const e=new DataView(r);let t=0;const n={magic:e.getUint32(t,!0),version:e.getUint32(t+4,!0),numPoints:e.getUint32(t+8,!0),shDegree:e.getUint8(t+12),fractionalBits:e.getUint8(t+13),flags:e.getUint8(t+14),reserved:e.getUint8(t+15)};if(t+=rv,n.magic!==$A)return console.error("[SPZ ERROR] deserializePackedGaussians: header not found"),null;if(n.version<1||n.version>2)return console.error(`[SPZ ERROR] deserializePackedGaussians: version not supported: ${n.version}`),null;if(n.numPoints>av)return console.error(`[SPZ ERROR] deserializePackedGaussians: Too many points: ${n.numPoints}`),null;if(n.shDegree>3)return console.error(`[SPZ ERROR] deserializePackedGaussians: Unsupported SH degree: ${n.shDegree}`),null;const i=n.numPoints,s=ys(n.shDegree),a=n.version===1,o={numPoints:i,shDegree:n.shDegree,fractionalBits:n.fractionalBits,antialiased:(n.flags&JA)!==0,positions:new Uint8Array(i*3*(a?2:3)),scales:new Uint8Array(i*3),rotations:new Uint8Array(i*3),alphas:new Uint8Array(i),colors:new Uint8Array(i*3),sh:new Uint8Array(i*s*3)};try{const l=new Uint8Array(r);let c=o.positions.length,u=t;if(o.positions.set(l.slice(u,u+c)),u+=c,o.alphas.set(l.slice(u,u+o.alphas.length)),u+=o.alphas.length,o.colors.set(l.slice(u,u+o.colors.length)),u+=o.colors.length,o.scales.set(l.slice(u,u+o.scales.length)),u+=o.scales.length,o.rotations.set(l.slice(u,u+o.rotations.length)),u+=o.rotations.length,o.sh.set(l.slice(u,u+o.sh.length)),u+o.sh.length!==r.byteLength)return console.error("[SPZ ERROR] deserializePackedGaussians: incorrect buffer size"),null}catch(l){return console.error("[SPZ ERROR] deserializePackedGaussians: read error",l),null}return o}async function lv(r){try{const e=await jA(r);return ov(e.buffer)}catch(e){return console.error("[SPZ ERROR] loadSpzPacked: decompression error",e),null}}class xu{static loadFromURL(e,t,n,i,s=!0,a=0,o,l,c,u,h){return t&&t(0,"0%",Bt.Downloading),bo(e,t,!0,o).then(d=>(t&&t(0,"0%",Bt.Processing),xu.loadFromFileData(d,n,i,s,a,l,c,u,h)))}static async loadFromFileData(e,t,n,i,s=0,a,o,l,c){await In();const u=await lv(e);s=Math.min(u.shDegree,s);const h=new fe(s);if(i)return hd(u,s,!1,h,0),pa.getStandardGenerator(t,n,a,o,l,c).generateFromUncompressedSplatArray(h);{const{splatBuffer:d,splatBufferDataOffsetBytes:f}=we.preallocateUncompressed(u.numPoints,s);return hd(u,s,!0,d.bufferData,f),d}}}const ct=class ct{static parseToUncompressedSplatBufferSection(e,t,n,i,s,a){const o=we.CompressionLevels[0].BytesPerCenter,l=we.CompressionLevels[0].BytesPerScale,c=we.CompressionLevels[0].BytesPerRotation,u=we.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat;for(let h=e;h<=t;h++){const d=h*ct.RowSizeBytes+i,f=new Float32Array(n,d,3),m=new Float32Array(n,d+ct.CenterSizeBytes,3),_=new Uint8Array(n,d+ct.CenterSizeBytes+ct.ScaleSizeBytes,4),p=new Uint8Array(n,d+ct.CenterSizeBytes+ct.ScaleSizeBytes+ct.RotationSizeBytes,4),g=new St((p[1]-128)/128,(p[2]-128)/128,(p[3]-128)/128,(p[0]-128)/128);g.normalize();const x=h*u+a,v=new Float32Array(s,x,3),A=new Float32Array(s,x+o,3),y=new Float32Array(s,x+o+l,4),T=new Uint8Array(s,x+o+l+c,4);v[0]=f[0],v[1]=f[1],v[2]=f[2],A[0]=m[0],A[1]=m[1],A[2]=m[2],y[0]=g.w,y[1]=g.x,y[2]=g.y,y[3]=g.z,T[0]=_[0],T[1]=_[1],T[2]=_[2],T[3]=_[3]}}static parseToUncompressedSplatArraySection(e,t,n,i,s){for(let a=e;a<=t;a++){const o=a*ct.RowSizeBytes+i,l=new Float32Array(n,o,3),c=new Float32Array(n,o+ct.CenterSizeBytes,3),u=new Uint8Array(n,o+ct.CenterSizeBytes+ct.ScaleSizeBytes,4),h=new Uint8Array(n,o+ct.CenterSizeBytes+ct.ScaleSizeBytes+ct.RotationSizeBytes,4),d=new St((h[1]-128)/128,(h[2]-128)/128,(h[3]-128)/128,(h[0]-128)/128);d.normalize(),s.addSplatFromComonents(l[0],l[1],l[2],c[0],c[1],c[2],d.w,d.x,d.y,d.z,u[0],u[1],u[2],u[3])}}static parseStandardSplatToUncompressedSplatArray(e){const t=e.byteLength/ct.RowSizeBytes,n=new fe;for(let i=0;i<t;i++){const s=i*ct.RowSizeBytes,a=new Float32Array(e,s,3),o=new Float32Array(e,s+ct.CenterSizeBytes,3),l=new Uint8Array(e,s+ct.CenterSizeBytes+ct.ScaleSizeBytes,4),c=new Uint8Array(e,s+ct.CenterSizeBytes+ct.ScaleSizeBytes+ct.ColorSizeBytes,4),u=new St((c[1]-128)/128,(c[2]-128)/128,(c[3]-128)/128,(c[0]-128)/128);u.normalize(),n.addSplatFromComonents(a[0],a[1],a[2],o[0],o[1],o[2],u.w,u.x,u.y,u.z,l[0],l[1],l[2],l[3])}return n}};ce(ct,"RowSizeBytes",32),ce(ct,"CenterSizeBytes",12),ce(ct,"ScaleSizeBytes",12),ce(ct,"RotationSizeBytes",4),ce(ct,"ColorSizeBytes",4);let xs=ct;function dd(r,e,t,n,i,s,a,o){return e?pa.getStandardGenerator(t,n,i,s,a,o).generateFromUncompressedSplatArray(r):we.generateFromUncompressedSplatArrays([r],t,0,new D)}class Su{static loadFromURL(e,t,n,i,s,a,o=!0,l,c,u,h,d){let f=n?At.ProgressiveToSplatBuffer:At.ProgressiveToSplatArray;o&&(f=At.ProgressiveToSplatArray);const m=we.HeaderSizeBytes+we.SectionHeaderSizeBytes,_=tt.ProgressiveLoadSectionSize,p=1;let g,x,v,A=0,y=0,T;const C=au();let S=0,M=0,R=[];const w=(P,I,L,B)=>{const U=P>=100;if(L&&R.push(L),f===At.DownloadBeforeProcessing){U&&C.resolve(R);return}if(!B){if(n)throw new co("Cannon directly load .splat because no file size info is available.");f=At.DownloadBeforeProcessing;return}if(!g){A=B/xs.RowSizeBytes,g=new ArrayBuffer(B);const O=we.CompressionLevels[0].SphericalHarmonicsDegrees[0].BytesPerSplat,q=m+O*A;f===At.ProgressiveToSplatBuffer?(x=new ArrayBuffer(q),we.writeHeaderToBuffer({versionMajor:we.CurrentMajorVersion,versionMinor:we.CurrentMinorVersion,maxSectionCount:p,sectionCount:p,maxSplatCount:A,splatCount:y,compressionLevel:0,sceneCenter:new D},x)):T=new fe(0)}if(L){new Uint8Array(g,M,L.byteLength).set(new Uint8Array(L)),M+=L.byteLength;const O=M-S;if(O>_||U){const G=(U?O:_)/xs.RowSizeBytes,J=y+G;f===At.ProgressiveToSplatBuffer?xs.parseToUncompressedSplatBufferSection(y,J-1,g,0,x,m):xs.parseToUncompressedSplatArraySection(y,J-1,g,0,T),y=J,f===At.ProgressiveToSplatBuffer&&(v||(we.writeSectionHeaderToBuffer({maxSplatCount:A,splatCount:y,bucketSize:0,bucketCount:0,bucketBlockSize:0,compressionScaleRange:0,storageSizeBytes:0,fullBucketCount:0,partiallyFilledBucketCount:0},0,x,we.HeaderSizeBytes),v=new we(x,!1)),v.updateLoadedCounts(1,y),i&&i(v,U)),S+=_}}U&&(f===At.ProgressiveToSplatBuffer?C.resolve(v):C.resolve(T)),t&&t(P,I,Bt.Downloading)};return t&&t(0,"0%",Bt.Downloading),bo(e,w,!1,l).then(()=>(t&&t(0,"0%",Bt.Processing),C.promise.then(P=>(t&&t(100,"100%",Bt.Done),f===At.DownloadBeforeProcessing?new Blob(R).arrayBuffer().then(I=>Su.loadFromFileData(I,s,a,o,c,u,h,d)):f===At.ProgressiveToSplatBuffer?P:In(()=>dd(P,o,s,a,c,u,h,d))))))}static loadFromFileData(e,t,n,i,s,a,o,l){return In(()=>{const c=xs.parseStandardSplatToUncompressedSplatArray(e);return dd(c,i,t,n,s,a,o,l)})}}const ar=class ar{static checkVersion(e){const t=we.CurrentMajorVersion,n=we.CurrentMinorVersion,i=we.parseHeader(e);if(i.versionMajor===t&&i.versionMinor>=n||i.versionMajor>t)return!0;throw new Error(`KSplat version not supported: v${i.versionMajor}.${i.versionMinor}. Minimum required: v${t}.${n}`)}static loadFromURL(e,t,n,i,s){let a,o,l,c,u=!1,h=!1,d,f=[],m=!1,_=!1,p=0,g=0,x=0,v=!1,A=!1,y=!1,T=[];const C=au(),S=()=>{!u&&!h&&p>=we.HeaderSizeBytes&&(h=!0,new Blob(T).arrayBuffer().then(B=>{l=new ArrayBuffer(we.HeaderSizeBytes),new Uint8Array(l).set(new Uint8Array(B,0,we.HeaderSizeBytes)),ar.checkVersion(l),h=!1,u=!0,c=we.parseHeader(l),window.setTimeout(()=>{w()},1)}))};let M=0;const R=()=>{M===0&&(M++,window.setTimeout(()=>{M--,P()},1))},w=()=>{const L=()=>{_=!0,new Blob(T).arrayBuffer().then(U=>{_=!1,m=!0,d=new ArrayBuffer(c.maxSectionCount*we.SectionHeaderSizeBytes),new Uint8Array(d).set(new Uint8Array(U,we.HeaderSizeBytes,c.maxSectionCount*we.SectionHeaderSizeBytes)),f=we.parseSectionHeaders(c,d,0,!1);let O=0;for(let G=0;G<c.maxSectionCount;G++)O+=f[G].storageSizeBytes;const q=we.HeaderSizeBytes+c.maxSectionCount*we.SectionHeaderSizeBytes+O;if(!a){a=new ArrayBuffer(q);let G=0;for(let J=0;J<T.length;J++){const ae=T[J];new Uint8Array(a,G,ae.byteLength).set(new Uint8Array(ae)),G+=ae.byteLength}}x=we.HeaderSizeBytes+we.SectionHeaderSizeBytes*c.maxSectionCount;for(let G=0;G<=f.length&&G<c.maxSectionCount;G++)x+=f[G].storageSizeBytes;R()})};!_&&!m&&u&&p>=we.HeaderSizeBytes+we.SectionHeaderSizeBytes*c.maxSectionCount&&L()},P=()=>{if(y)return;y=!0;const L=()=>{if(y=!1,m){if(A)return;if(v=p>=x,p-g>tt.ProgressiveLoadSectionSize||v){g+=tt.ProgressiveLoadSectionSize,A=g>=x,o||(o=new we(a,!1));const U=we.HeaderSizeBytes+we.SectionHeaderSizeBytes*c.maxSectionCount;let O=0,q=0,G=0;for(let re=0;re<c.maxSectionCount;re++){const xe=f[re],Ae=O+xe.partiallyFilledBucketCount*4+xe.bucketStorageSizeBytes*xe.bucketCount,Re=U+Ae;if(g>=Re){q++;const X=g-Re,Te=we.CompressionLevels[c.compressionLevel].SphericalHarmonicsDegrees[xe.sphericalHarmonicsDegree].BytesPerSplat;let pe=Math.floor(X/Te);pe=Math.min(pe,xe.maxSplatCount),G+=pe,o.updateLoadedCounts(q,G),o.updateSectionLoadedCounts(re,pe)}else break;O+=xe.storageSizeBytes}i(o,A);const J=g/x*100,ae=J.toFixed(2)+"%";t&&t(J,ae,Bt.Downloading),A?C.resolve(o):P()}}};window.setTimeout(L,tt.ProgressiveLoadSectionDelayDuration)};return bo(e,(L,B,U)=>{U&&(T.push(U),a&&new Uint8Array(a,p,U.byteLength).set(new Uint8Array(U)),p+=U.byteLength),n?(S(),w(),P()):t&&t(L,B,Bt.Downloading)},!n,s).then(L=>(t&&t(0,"0%",Bt.Processing),(n?C.promise:ar.loadFromFileData(L)).then(U=>(t&&t(100,"100%",Bt.Done),U))))}static loadFromFileData(e){return In(()=>(ar.checkVersion(e),new we(e)))}};ce(ar,"downloadFile",function(){let e;return function(t,n){const i=new Blob([t.bufferData],{type:"application/octet-stream"});e||(e=document.createElement("a"),document.body.appendChild(e)),e.download=n,e.href=URL.createObjectURL(i),e.click()}}());let Ec=ar;const fn={Splat:0,KSplat:1,Ply:2,Spz:3},fd=r=>r.endsWith(".ply")?fn.Ply:r.endsWith(".splat")?fn.Splat:r.endsWith(".ksplat")?fn.KSplat:r.endsWith(".spz")?fn.Spz:null,pd={type:"change"},xl={type:"start"},md={type:"end"},qa=new tu,gd=new Gi,cv=Math.cos(70*af.DEG2RAD);class Qa extends Is{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"KeyA",UP:"KeyW",RIGHT:"KeyD",BOTTOM:"KeyS"},this.mouseButtons={LEFT:Us.ROTATE,MIDDLE:Us.DOLLY,RIGHT:Us.PAN},this.touches={ONE:Os.ROTATE,TWO:Os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(k){k.addEventListener("keydown",E),this._domElementKeyEvents=k},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,this.clearDampedRotation(),this.clearDampedPan(),n.object.updateProjectionMatrix(),n.dispatchEvent(pd),n.update(),s=i.NONE},this.clearDampedRotation=function(){l.theta=0,l.phi=0},this.clearDampedPan=function(){u.set(0,0,0)},this.update=function(){const k=new D,Y=new St().setFromUnitVectors(e.up,new D(0,1,0)),ie=Y.clone().invert(),de=new D,Se=new St,me=new D,Ge=2*Math.PI;return function(){Y.setFromUnitVectors(e.up,new D(0,1,0)),ie.copy(Y).invert();const he=n.object.position;k.copy(he).sub(n.target),k.applyQuaternion(Y),o.setFromVector3(k),n.autoRotate&&s===i.NONE&&w(M()),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let le=n.minAzimuthAngle,ge=n.maxAzimuthAngle;isFinite(le)&&isFinite(ge)&&(le<-Math.PI?le+=Ge:le>Math.PI&&(le-=Ge),ge<-Math.PI?ge+=Ge:ge>Math.PI&&(ge-=Ge),le<=ge?o.theta=Math.max(le,Math.min(ge,o.theta)):o.theta=o.theta>(le+ge)/2?Math.max(le,o.theta):Math.min(ge,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&T||n.object.isOrthographicCamera?o.radius=G(o.radius):o.radius=G(o.radius*c),k.setFromSpherical(o),k.applyQuaternion(ie),he.copy(n.target).add(k),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let oe=!1;if(n.zoomToCursor&&T){let j=null;if(n.object.isPerspectiveCamera){const Ce=k.length();j=G(Ce*c);const Ve=Ce-j;n.object.position.addScaledVector(A,Ve),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const Ce=new D(y.x,y.y,0);Ce.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),oe=!0;const Ve=new D(y.x,y.y,0);Ve.unproject(n.object),n.object.position.sub(Ve).add(Ce),n.object.updateMatrixWorld(),j=k.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;j!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(j).add(n.object.position):(qa.origin.copy(n.object.position),qa.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(qa.direction))<cv?e.lookAt(n.target):(gd.setFromNormalAndCoplanarPoint(n.object.up,n.target),qa.intersectPlane(gd,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),oe=!0);return c=1,T=!1,oe||de.distanceToSquared(n.object.position)>a||8*(1-Se.dot(n.object.quaternion))>a||me.distanceToSquared(n.target)>0?(n.dispatchEvent(pd),de.copy(n.object.position),Se.copy(n.object.quaternion),me.copy(n.target),oe=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",ne),n.domElement.removeEventListener("pointerdown",N),n.domElement.removeEventListener("pointercancel",Ze),n.domElement.removeEventListener("wheel",F),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Ze),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",E),n._domElementKeyEvents=null)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=i.NONE;const a=1e-6,o=new Ch,l=new Ch;let c=1;const u=new D,h=new Me,d=new Me,f=new Me,m=new Me,_=new Me,p=new Me,g=new Me,x=new Me,v=new Me,A=new D,y=new Me;let T=!1;const C=[],S={};function M(){return 2*Math.PI/60/60*n.autoRotateSpeed}function R(){return Math.pow(.95,n.zoomSpeed)}function w(k){l.theta-=k}function P(k){l.phi-=k}const I=function(){const k=new D;return function(ie,de){k.setFromMatrixColumn(de,0),k.multiplyScalar(-ie),u.add(k)}}(),L=function(){const k=new D;return function(ie,de){n.screenSpacePanning===!0?k.setFromMatrixColumn(de,1):(k.setFromMatrixColumn(de,0),k.crossVectors(n.object.up,k)),k.multiplyScalar(ie),u.add(k)}}(),B=function(){const k=new D;return function(ie,de){const Se=n.domElement;if(n.object.isPerspectiveCamera){const me=n.object.position;k.copy(me).sub(n.target);let Ge=k.length();Ge*=Math.tan(n.object.fov/2*Math.PI/180),I(2*ie*Ge/Se.clientHeight,n.object.matrix),L(2*de*Ge/Se.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(ie*(n.object.right-n.object.left)/n.object.zoom/Se.clientWidth,n.object.matrix),L(de*(n.object.top-n.object.bottom)/n.object.zoom/Se.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function O(k){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=k:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function q(k){if(!n.zoomToCursor)return;T=!0;const Y=n.domElement.getBoundingClientRect(),ie=k.clientX-Y.left,de=k.clientY-Y.top,Se=Y.width,me=Y.height;y.x=ie/Se*2-1,y.y=-(de/me)*2+1,A.set(y.x,y.y,1).unproject(e).sub(e.position).normalize()}function G(k){return Math.max(n.minDistance,Math.min(n.maxDistance,k))}function J(k){h.set(k.clientX,k.clientY)}function ae(k){q(k),g.set(k.clientX,k.clientY)}function re(k){m.set(k.clientX,k.clientY)}function xe(k){d.set(k.clientX,k.clientY),f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;w(2*Math.PI*f.x/Y.clientHeight),P(2*Math.PI*f.y/Y.clientHeight),h.copy(d),n.update()}function Ae(k){x.set(k.clientX,k.clientY),v.subVectors(x,g),v.y>0?U(R()):v.y<0&&O(R()),g.copy(x),n.update()}function Re(k){_.set(k.clientX,k.clientY),p.subVectors(_,m).multiplyScalar(n.panSpeed),B(p.x,p.y),m.copy(_),n.update()}function X(k){q(k),k.deltaY<0?O(R()):k.deltaY>0&&U(R()),n.update()}function te(k){let Y=!1;switch(k.code){case n.keys.UP:k.ctrlKey||k.metaKey||k.shiftKey?P(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,n.keyPanSpeed),Y=!0;break;case n.keys.BOTTOM:k.ctrlKey||k.metaKey||k.shiftKey?P(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(0,-n.keyPanSpeed),Y=!0;break;case n.keys.LEFT:k.ctrlKey||k.metaKey||k.shiftKey?w(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(n.keyPanSpeed,0),Y=!0;break;case n.keys.RIGHT:k.ctrlKey||k.metaKey||k.shiftKey?w(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):B(-n.keyPanSpeed,0),Y=!0;break}Y&&(k.preventDefault(),n.update())}function se(){if(C.length===1)h.set(C[0].pageX,C[0].pageY);else{const k=.5*(C[0].pageX+C[1].pageX),Y=.5*(C[0].pageY+C[1].pageY);h.set(k,Y)}}function Te(){if(C.length===1)m.set(C[0].pageX,C[0].pageY);else{const k=.5*(C[0].pageX+C[1].pageX),Y=.5*(C[0].pageY+C[1].pageY);m.set(k,Y)}}function pe(){const k=C[0].pageX-C[1].pageX,Y=C[0].pageY-C[1].pageY,ie=Math.sqrt(k*k+Y*Y);g.set(0,ie)}function Ee(){n.enableZoom&&pe(),n.enablePan&&Te()}function Qe(){n.enableZoom&&pe(),n.enableRotate&&se()}function Pe(k){if(C.length==1)d.set(k.pageX,k.pageY);else{const ie=Be(k),de=.5*(k.pageX+ie.x),Se=.5*(k.pageY+ie.y);d.set(de,Se)}f.subVectors(d,h).multiplyScalar(n.rotateSpeed);const Y=n.domElement;w(2*Math.PI*f.x/Y.clientHeight),P(2*Math.PI*f.y/Y.clientHeight),h.copy(d)}function ze(k){if(C.length===1)_.set(k.pageX,k.pageY);else{const Y=Be(k),ie=.5*(k.pageX+Y.x),de=.5*(k.pageY+Y.y);_.set(ie,de)}p.subVectors(_,m).multiplyScalar(n.panSpeed),B(p.x,p.y),m.copy(_)}function Ue(k){const Y=Be(k),ie=k.pageX-Y.x,de=k.pageY-Y.y,Se=Math.sqrt(ie*ie+de*de);x.set(0,Se),v.set(0,Math.pow(x.y/g.y,n.zoomSpeed)),U(v.y),g.copy(x)}function Ne(k){n.enableZoom&&Ue(k),n.enablePan&&ze(k)}function et(k){n.enableZoom&&Ue(k),n.enableRotate&&Pe(k)}function N(k){n.enabled!==!1&&(C.length===0&&(n.domElement.setPointerCapture(k.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",Ze)),$(k),k.pointerType==="touch"?H(k):ht(k))}function it(k){n.enabled!==!1&&(k.pointerType==="touch"?ee(k):De(k))}function Ze(k){Ie(k),C.length===0&&(n.domElement.releasePointerCapture(k.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",Ze)),n.dispatchEvent(md),s=i.NONE}function ht(k){let Y;switch(k.button){case 0:Y=n.mouseButtons.LEFT;break;case 1:Y=n.mouseButtons.MIDDLE;break;case 2:Y=n.mouseButtons.RIGHT;break;default:Y=-1}switch(Y){case Us.DOLLY:if(n.enableZoom===!1)return;ae(k),s=i.DOLLY;break;case Us.ROTATE:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enablePan===!1)return;re(k),s=i.PAN}else{if(n.enableRotate===!1)return;J(k),s=i.ROTATE}break;case Us.PAN:if(k.ctrlKey||k.metaKey||k.shiftKey){if(n.enableRotate===!1)return;J(k),s=i.ROTATE}else{if(n.enablePan===!1)return;re(k),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xl)}function De(k){switch(s){case i.ROTATE:if(n.enableRotate===!1)return;xe(k);break;case i.DOLLY:if(n.enableZoom===!1)return;Ae(k);break;case i.PAN:if(n.enablePan===!1)return;Re(k);break}}function F(k){n.enabled===!1||n.enableZoom===!1||s!==i.NONE||(k.preventDefault(),n.dispatchEvent(xl),X(k),n.dispatchEvent(md))}function E(k){n.enabled===!1||n.enablePan===!1||te(k)}function H(k){switch(ue(k),C.length){case 1:switch(n.touches.ONE){case Os.ROTATE:if(n.enableRotate===!1)return;se(),s=i.TOUCH_ROTATE;break;case Os.PAN:if(n.enablePan===!1)return;Te(),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case Os.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ee(),s=i.TOUCH_DOLLY_PAN;break;case Os.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;Qe(),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(xl)}function ee(k){switch(ue(k),s){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;Pe(k),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ze(k),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ne(k),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(k),n.update();break;default:s=i.NONE}}function ne(k){n.enabled!==!1&&k.preventDefault()}function $(k){C.push(k)}function Ie(k){delete S[k.pointerId];for(let Y=0;Y<C.length;Y++)if(C[Y].pointerId==k.pointerId){C.splice(Y,1);return}}function ue(k){let Y=S[k.pointerId];Y===void 0&&(Y=new Me,S[k.pointerId]=Y),Y.set(k.pageX,k.pageY)}function Be(k){const Y=k.pointerId===C[0].pointerId?C[1]:C[0];return S[Y.pointerId]}n.domElement.addEventListener("contextmenu",ne),n.domElement.addEventListener("pointerdown",N),n.domElement.addEventListener("pointercancel",Ze),n.domElement.addEventListener("wheel",F,{passive:!1}),this.update()}}const uv=(r,e,t,n,i)=>{const s=performance.now();let a=r.style.display==="none"?0:parseFloat(r.style.opacity);isNaN(a)&&(a=1);const o=window.setInterval(()=>{const c=performance.now()-s;let u=Math.min(c/n,1);u>.999&&(u=1);let h;e?(h=(1-u)*a,h<1e-4&&(h=0)):h=(1-a)*u+a,h>0?(r.style.display=t,r.style.opacity=h):r.style.display="none",u>=1&&(i&&i(),window.clearInterval(o))},16);return o},hv=500,Ao=class Ao{constructor(e,t){this.taskIDGen=0,this.elementID=Ao.elementIDGen++,this.tasks=[],this.message=e||"Loading...",this.container=t||document.body,this.spinnerContainerOuter=document.createElement("div"),this.spinnerContainerOuter.className=`spinnerOuterContainer${this.elementID}`,this.spinnerContainerOuter.style.display="none",this.spinnerContainerPrimary=document.createElement("div"),this.spinnerContainerPrimary.className=`spinnerContainerPrimary${this.elementID}`,this.spinnerPrimary=document.createElement("div"),this.spinnerPrimary.classList.add(`spinner${this.elementID}`,`spinnerPrimary${this.elementID}`),this.messageContainerPrimary=document.createElement("div"),this.messageContainerPrimary.classList.add(`messageContainer${this.elementID}`,`messageContainerPrimary${this.elementID}`),this.messageContainerPrimary.innerHTML=this.message,this.spinnerContainerMin=document.createElement("div"),this.spinnerContainerMin.className=`spinnerContainerMin${this.elementID}`,this.spinnerMin=document.createElement("div"),this.spinnerMin.classList.add(`spinner${this.elementID}`,`spinnerMin${this.elementID}`),this.messageContainerMin=document.createElement("div"),this.messageContainerMin.classList.add(`messageContainer${this.elementID}`,`messageContainerMin${this.elementID}`),this.messageContainerMin.innerHTML=this.message,this.spinnerContainerPrimary.appendChild(this.spinnerPrimary),this.spinnerContainerPrimary.appendChild(this.messageContainerPrimary),this.spinnerContainerOuter.appendChild(this.spinnerContainerPrimary),this.spinnerContainerMin.appendChild(this.spinnerMin),this.spinnerContainerMin.appendChild(this.messageContainerMin),this.spinnerContainerOuter.appendChild(this.spinnerContainerMin);const n=document.createElement("style");n.innerHTML=`

            .spinnerOuterContainer${this.elementID} {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .messageContainer${this.elementID} {
                height: 20px;
                font-family: arial;
                font-size: 12pt;
                color: #ffffff;
                text-align: center;
                vertical-align: middle;
            }

            .spinner${this.elementID} {
                padding: 15px;
                background: #07e8d6;
                z-index:99999;
            
                aspect-ratio: 1;
                border-radius: 50%;
                --_m: 
                    conic-gradient(#0000,#000),
                    linear-gradient(#000 0 0) content-box;
                -webkit-mask: var(--_m);
                    mask: var(--_m);
                -webkit-mask-composite: source-out;
                    mask-composite: subtract;
                box-sizing: border-box;
                animation: load 1s linear infinite;
            }

            .spinnerContainerPrimary${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 10px;
                margin: 0;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-80px, -80px);
                width: 180px;
                pointer-events: auto;
            }

            .spinnerPrimary${this.elementID} {
                width: 120px;
                margin-left: 30px;
            }

            .messageContainerPrimary${this.elementID} {
                padding-top: 15px;
            }

            .spinnerContainerMin${this.elementID} {
                z-index:99999;
                background-color: rgba(128, 128, 128, 0.75);
                border: #666666 1px solid;
                border-radius: 5px;
                padding-top: 20px;
                padding-bottom: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                display: flex;
                flex-direction: left;
                pointer-events: auto;
                min-width: 250px;
            }

            .messageContainerMin${this.elementID} {
                margin-right: 15px;
            }

            .spinnerMin${this.elementID} {
                width: 50px;
                height: 50px;
                margin-left: 15px;
                margin-right: 25px;
            }

            .messageContainerMin${this.elementID} {
                padding-top: 15px;
            }
            
            @keyframes load {
                to{transform: rotate(1turn)}
            }

        `,this.spinnerContainerOuter.appendChild(n),this.container.appendChild(this.spinnerContainerOuter),this.setMinimized(!1,!0),this.fadeTransitions=[]}addTask(e){const t={message:e,id:this.taskIDGen++};return this.tasks.push(t),this.update(),t.id}removeTask(e){let t=0;for(let n of this.tasks){if(n.id===e){this.tasks.splice(t,1);break}t++}this.update()}removeAllTasks(){this.tasks=[],this.update()}setMessageForTask(e,t){for(let n of this.tasks)if(n.id===e){n.message=t;break}this.update()}update(){this.tasks.length>0?(this.show(),this.setMessage(this.tasks[this.tasks.length-1].message)):this.hide()}show(){this.spinnerContainerOuter.style.display="block",this.visible=!0}hide(){this.spinnerContainerOuter.style.display="none",this.visible=!1}setContainer(e){this.container&&this.spinnerContainerOuter.parentElement===this.container&&this.container.removeChild(this.spinnerContainerOuter),e&&(this.container=e,this.container.appendChild(this.spinnerContainerOuter),this.spinnerContainerOuter.style.zIndex=this.container.style.zIndex+1)}setMinimized(e,t){const n=(i,s,a,o,l)=>{a?i.style.display=s?o:"none":this.fadeTransitions[l]=uv(i,!s,o,hv,()=>{this.fadeTransitions[l]=null})};n(this.spinnerContainerPrimary,!e,t,"block",0),n(this.spinnerContainerMin,e,t,"flex",1),this.minimized=e}setMessage(e){this.messageContainerPrimary.innerHTML=e,this.messageContainerMin.innerHTML=e}};ce(Ao,"elementIDGen",0);let bc=Ao;class dv{constructor(e){this.idGen=0,this.tasks=[],this.container=e||document.body,this.progressBarContainerOuter=document.createElement("div"),this.progressBarContainerOuter.className="progressBarOuterContainer",this.progressBarContainerOuter.style.display="none",this.progressBarBox=document.createElement("div"),this.progressBarBox.className="progressBarBox",this.progressBarBackground=document.createElement("div"),this.progressBarBackground.className="progressBarBackground",this.progressBar=document.createElement("div"),this.progressBar.className="progressBar",this.progressBarBackground.appendChild(this.progressBar),this.progressBarBox.appendChild(this.progressBarBackground),this.progressBarContainerOuter.appendChild(this.progressBarBox);const t=document.createElement("style");t.innerHTML=`

            .progressBarOuterContainer {
                width: 100%;
                height: 100%;
                margin: 0;
                top: 0;
                left: 0;
                position: absolute;
                pointer-events: none;
            }

            .progressBarBox {
                z-index:99999;
                padding: 7px 9px 5px 7px;
                background-color: rgba(190, 190, 190, 0.75);
                border: #555555 1px solid;
                border-radius: 15px;
                margin: 0;
                position: absolute;
                bottom: 50px;
                left: 50%;
                transform: translate(-50%, 0);
                width: 180px;
                height: 30px;
                pointer-events: auto;
            }

            .progressBarBackground {
                width: 100%;
                height: 25px;
                border-radius:10px;
                background-color: rgba(128, 128, 128, 0.75);
                border: #444444 1px solid;
                box-shadow: inset 0 0 10px #333333;
            }

            .progressBar {
                height: 25px;
                width: 0px;
                border-radius:10px;
                background-color: rgba(0, 200, 0, 0.75);
                box-shadow: inset 0 0 10px #003300;
            }

        `,this.progressBarContainerOuter.appendChild(t),this.container.appendChild(this.progressBarContainerOuter)}show(){this.progressBarContainerOuter.style.display="block"}hide(){this.progressBarContainerOuter.style.display="none"}setProgress(e){this.progressBar.style.width=e+"%"}setContainer(e){this.container&&this.progressBarContainerOuter.parentElement===this.container&&this.container.removeChild(this.progressBarContainerOuter),e&&(this.container=e,this.container.appendChild(this.progressBarContainerOuter),this.progressBarContainerOuter.style.zIndex=this.container.style.zIndex+1)}}class fv{constructor(e){ce(this,"update",function(e,t,n,i,s,a,o,l,c,u,h,d,f,m){const _=`${t.x.toFixed(5)}, ${t.y.toFixed(5)}, ${t.z.toFixed(5)}`;if(this.infoCells.cameraPosition.innerHTML!==_&&(this.infoCells.cameraPosition.innerHTML=_),n){const g=n,x=`${g.x.toFixed(5)}, ${g.y.toFixed(5)}, ${g.z.toFixed(5)}`;this.infoCells.cameraLookAt.innerHTML!==x&&(this.infoCells.cameraLookAt.innerHTML=x)}const p=`${i.x.toFixed(5)}, ${i.y.toFixed(5)}, ${i.z.toFixed(5)}`;if(this.infoCells.cameraUp.innerHTML!==p&&(this.infoCells.cameraUp.innerHTML=p),this.infoCells.orthographicCamera.innerHTML=s?"Orthographic":"Perspective",a){const g=a,x=`${g.x.toFixed(5)}, ${g.y.toFixed(5)}, ${g.z.toFixed(5)}`;this.infoCells.cursorPosition.innerHTML=x}else this.infoCells.cursorPosition.innerHTML="N/A";this.infoCells.fps.innerHTML=o,this.infoCells.renderWindow.innerHTML=`${e.x} x ${e.y}`,this.infoCells.renderSplatCount.innerHTML=`${c} splats out of ${l} (${u.toFixed(2)}%)`,this.infoCells.sortTime.innerHTML=`${h.toFixed(3)} ms`,this.infoCells.focalAdjustment.innerHTML=`${d.toFixed(3)}`,this.infoCells.splatScale.innerHTML=`${f.toFixed(3)}`,this.infoCells.pointCloudMode.innerHTML=`${m}`});this.container=e||document.body,this.infoCells={};const t=[["Camera position","cameraPosition"],["Camera look-at","cameraLookAt"],["Camera up","cameraUp"],["Camera mode","orthographicCamera"],["Cursor position","cursorPosition"],["FPS","fps"],["Rendering:","renderSplatCount"],["Sort time","sortTime"],["Render window","renderWindow"],["Focal adjustment","focalAdjustment"],["Splat scale","splatScale"],["Point cloud mode","pointCloudMode"]];this.infoPanelContainer=document.createElement("div");const n=document.createElement("style");n.innerHTML=`

            .infoPanel {
                width: 430px;
                padding: 10px;
                background-color: rgba(50, 50, 50, 0.85);
                border: #555555 2px solid;
                color: #dddddd;
                border-radius: 10px;
                z-index: 9999;
                font-family: arial;
                font-size: 11pt;
                text-align: left;
                margin: 0;
                top: 10px;
                left:10px;
                position: absolute;
                pointer-events: auto;
            }

            .info-panel-cell {
                margin-bottom: 5px;
                padding-bottom: 2px;
            }

            .label-cell {
                font-weight: bold;
                font-size: 12pt;
                width: 140px;
            }

        `,this.infoPanelContainer.append(n),this.infoPanel=document.createElement("div"),this.infoPanel.className="infoPanel";const i=document.createElement("div");i.style.display="table";for(let s of t){const a=document.createElement("div");a.style.display="table-row",a.className="info-panel-row";const o=document.createElement("div");o.style.display="table-cell",o.innerHTML=`${s[0]}: `,o.classList.add("info-panel-cell","label-cell");const l=document.createElement("div");l.style.display="table-cell",l.style.width="10px",l.innerHTML=" ",l.className="info-panel-cell";const c=document.createElement("div");c.style.display="table-cell",c.innerHTML="",c.className="info-panel-cell",this.infoCells[s[1]]=c,a.appendChild(o),a.appendChild(l),a.appendChild(c),i.appendChild(a)}this.infoPanel.appendChild(i),this.infoPanelContainer.append(this.infoPanel),this.infoPanelContainer.style.display="none",this.container.appendChild(this.infoPanelContainer),this.visible=!1}setContainer(e){this.container&&this.infoPanelContainer.parentElement===this.container&&this.container.removeChild(this.infoPanelContainer),e&&(this.container=e,this.container.appendChild(this.infoPanelContainer),this.infoPanelContainer.style.zIndex=this.container.style.zIndex+1)}show(){this.infoPanelContainer.style.display="block",this.visible=!0}hide(){this.infoPanelContainer.style.display="none",this.visible=!1}}const _d=new D;class pv extends Rt{constructor(e=new D(0,0,1),t=new D(0,0,0),n=1,i=.1,s=16776960,a=n*.2,o=a*.2){super(),this.type="ArrowHelper";const l=new ia(i,i,n,32);l.translate(0,n/2,0);const c=new ia(0,o,a,32);c.translate(0,n,0),this.position.copy(t),this.line=new Xe(l,new ci({color:s,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Xe(c,new ci({color:s,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{_d.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(_d,t)}}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class Gr{constructor(e){ce(this,"updateFocusMarker",function(){const e=new D,t=new He,n=new D;return function(i,s,a){t.copy(s.matrixWorld).invert(),e.copy(i).applyMatrix4(t),e.normalize().multiplyScalar(10),e.applyMatrix4(s.matrixWorld),n.copy(s.position).sub(i);const o=n.length();this.focusMarker.position.copy(i),this.focusMarker.scale.set(o,o,o),this.focusMarker.material.uniforms.realFocusPosition.value.copy(i),this.focusMarker.material.uniforms.viewport.value.copy(a),this.focusMarker.material.uniformsNeedUpdate=!0}}());ce(this,"positionAndOrientControlPlane",function(){const e=new St,t=new D(0,1,0);return function(n,i){e.setFromUnitVectors(t,i),this.controlPlane.position.copy(n),this.controlPlane.quaternion.copy(e)}}());this.threeScene=e,this.splatRenderTarget=null,this.renderTargetCopyQuad=null,this.renderTargetCopyCamera=null,this.meshCursor=null,this.focusMarker=null,this.controlPlane=null,this.debugRoot=null,this.secondaryDebugRoot=null}updateSplatRenderTargetForRenderDimensions(e,t){this.destroySplatRendertarget(),this.splatRenderTarget=new Kn(e,t,{format:ln,stencilBuffer:!1,depthBuffer:!0}),this.splatRenderTarget.depthTexture=new Sr(e,t),this.splatRenderTarget.depthTexture.format=hi,this.splatRenderTarget.depthTexture.type=on}destroySplatRendertarget(){this.splatRenderTarget&&(this.splatRenderTarget=null)}setupRenderTargetCopyObjects(){const e={sourceColorTexture:{type:"t",value:null},sourceDepthTexture:{type:"t",value:null}},t=new cn({vertexShader:`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = vec4( position.xy, 0.0, 1.0 );    
                }
            `,fragmentShader:`
                #include <common>
                #include <packing>
                varying vec2 vUv;
                uniform sampler2D sourceColorTexture;
                uniform sampler2D sourceDepthTexture;
                void main() {
                    vec4 color = texture2D(sourceColorTexture, vUv);
                    float fragDepth = texture2D(sourceDepthTexture, vUv).x;
                    gl_FragDepth = fragDepth;
                    gl_FragColor = vec4(color.rgb, color.a * 2.0);
              }
            `,uniforms:e,depthWrite:!1,depthTest:!1,transparent:!0,blending:Gd,blendSrc:jr,blendSrcAlpha:jr,blendDst:Zr,blendDstAlpha:Zr});t.extensions.fragDepth=!0,this.renderTargetCopyQuad=new Xe(new Rs(2,2),t),this.renderTargetCopyCamera=new fa(-1,1,1,-1,0,1)}destroyRenderTargetCopyObjects(){this.renderTargetCopyQuad&&(ir(this.renderTargetCopyQuad),this.renderTargetCopyQuad=null)}setupMeshCursor(){if(!this.meshCursor){const e=new iu(.5,1.5,32),t=new ci({color:16777215}),n=new Xe(e,t);n.rotation.set(0,0,Math.PI),n.position.set(0,1,0);const i=new Xe(e,t);i.position.set(0,-1,0);const s=new Xe(e,t);s.rotation.set(0,0,Math.PI/2),s.position.set(1,0,0);const a=new Xe(e,t);a.rotation.set(0,0,-Math.PI/2),a.position.set(-1,0,0),this.meshCursor=new Rt,this.meshCursor.add(n),this.meshCursor.add(i),this.meshCursor.add(s),this.meshCursor.add(a),this.meshCursor.scale.set(.1,.1,.1),this.threeScene.add(this.meshCursor),this.meshCursor.visible=!1}}destroyMeshCursor(){this.meshCursor&&(ir(this.meshCursor),this.threeScene.remove(this.meshCursor),this.meshCursor=null)}setMeshCursorVisibility(e){this.meshCursor.visible=e}getMeschCursorVisibility(){return this.meshCursor.visible}setMeshCursorPosition(e){this.meshCursor.position.copy(e)}positionAndOrientMeshCursor(e,t){this.meshCursor.position.copy(e),this.meshCursor.up.copy(t.up),this.meshCursor.lookAt(t.position)}setupFocusMarker(){if(!this.focusMarker){const e=new kn(.5,32,32),t=Gr.buildFocusMarkerMaterial();t.depthTest=!1,t.depthWrite=!1,t.transparent=!0,this.focusMarker=new Xe(e,t)}}destroyFocusMarker(){this.focusMarker&&(ir(this.focusMarker),this.focusMarker=null)}setFocusMarkerVisibility(e){this.focusMarker.visible=e}setFocusMarkerOpacity(e){this.focusMarker.material.uniforms.opacity.value=e,this.focusMarker.material.uniformsNeedUpdate=!0}getFocusMarkerOpacity(){return this.focusMarker.material.uniforms.opacity.value}setupControlPlane(){if(!this.controlPlane){const e=new Rs(1,1);e.rotateX(-Math.PI/2);const t=new ci({color:16777215});t.transparent=!0,t.opacity=.6,t.depthTest=!1,t.depthWrite=!1,t.side=wn;const n=new Xe(e,t),i=new D(0,1,0);i.normalize();const s=new D(0,0,0),a=.5,o=.01,l=56576,c=new pv(i,s,a,o,l,.1,.03);this.controlPlane=new Rt,this.controlPlane.add(n),this.controlPlane.add(c)}}destroyControlPlane(){this.controlPlane&&(ir(this.controlPlane),this.controlPlane=null)}setControlPlaneVisibility(e){this.controlPlane.visible=e}addDebugMeshes(){this.debugRoot=this.createDebugMeshes(),this.secondaryDebugRoot=this.createSecondaryDebugMeshes(),this.threeScene.add(this.debugRoot),this.threeScene.add(this.secondaryDebugRoot)}destroyDebugMeshes(){for(let e of[this.debugRoot,this.secondaryDebugRoot])e&&(ir(e),this.threeScene.remove(e));this.debugRoot=null,this.secondaryDebugRoot=null}createDebugMeshes(e){const t=new kn(1,32,32),n=new Rt,i=(s,a)=>{let o=new Xe(t,Gr.buildDebugMaterial(s));o.renderOrder=e,n.add(o),o.position.fromArray(a)};return i(16711680,[-50,0,0]),i(16711680,[50,0,0]),i(65280,[0,0,-50]),i(65280,[0,0,50]),i(16755200,[5,0,5]),n}createSecondaryDebugMeshes(e){const t=new Ds(3,3,3),n=new Rt;let i=12303291;const s=o=>{let l=new Xe(t,Gr.buildDebugMaterial(i));l.renderOrder=e,n.add(l),l.position.fromArray(o)};let a=10;return s([-a,0,-a]),s([-a,0,a]),s([a,0,-a]),s([a,0,a]),n}static buildDebugMaterial(e){const t=`
            #include <common>
            varying float ndcDepth;

            void main() {
                gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position.xyz, 1.0);
                ndcDepth = gl_Position.z / gl_Position.w;
                gl_Position.x = gl_Position.x / gl_Position.w;
                gl_Position.y = gl_Position.y / gl_Position.w;
                gl_Position.z = 0.0;
                gl_Position.w = 1.0;
    
            }
        `,n=`
            #include <common>
            uniform vec3 color;
            varying float ndcDepth;
            void main() {
                gl_FragDepth = (ndcDepth + 1.0) / 2.0;
                gl_FragColor = vec4(color.rgb, 0.0);
            }
        `,i={color:{type:"v3",value:new je(e)}},s=new cn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!1,depthTest:!0,depthWrite:!0,side:jn});return s.extensions.fragDepth=!0,s}static buildFocusMarkerMaterial(e){const t=`
            #include <common>

            uniform vec2 viewport;
            uniform vec3 realFocusPosition;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                float radius = 0.01;

                vec4 viewPosition = modelViewMatrix * vec4(position.xyz, 1.0);
                vec4 viewCenter = modelViewMatrix * vec4(0.0, 0.0, 0.0, 1.0);

                vec4 viewFocusPosition = modelViewMatrix * vec4(realFocusPosition, 1.0);

                ndcPosition = projectionMatrix * viewPosition;
                ndcPosition = ndcPosition * vec4(1.0 / ndcPosition.w);
                ndcCenter = projectionMatrix * viewCenter;
                ndcCenter = ndcCenter * vec4(1.0 / ndcCenter.w);

                ndcFocusPosition = projectionMatrix * viewFocusPosition;
                ndcFocusPosition = ndcFocusPosition * vec4(1.0 / ndcFocusPosition.w);

                gl_Position = projectionMatrix * viewPosition;

            }
        `,n=`
            #include <common>
            uniform vec3 color;
            uniform vec2 viewport;
            uniform float opacity;

            varying vec4 ndcPosition;
            varying vec4 ndcCenter;
            varying vec4 ndcFocusPosition;

            void main() {
                vec2 screenPosition = vec2(ndcPosition) * viewport;
                vec2 screenCenter = vec2(ndcCenter) * viewport;

                vec2 screenVec = screenPosition - screenCenter;

                float projectedRadius = length(screenVec);

                float lineWidth = 0.0005 * viewport.y;
                float aaRange = 0.0025 * viewport.y;
                float radius = 0.06 * viewport.y;
                float radDiff = abs(projectedRadius - radius) - lineWidth;
                float alpha = 1.0 - clamp(radDiff / 5.0, 0.0, 1.0); 

                gl_FragColor = vec4(color.rgb, alpha * opacity);
            }
        `,i={color:{type:"v3",value:new je(e)},realFocusPosition:{type:"v3",value:new D},viewport:{type:"v2",value:new Me},opacity:{value:0}};return new cn({uniforms:i,vertexShader:t,fragmentShader:n,transparent:!0,depthTest:!1,depthWrite:!1,side:jn})}dispose(){this.destroyMeshCursor(),this.destroyFocusMarker(),this.destroyDebugMeshes(),this.destroyControlPlane(),this.destroyRenderTargetCopyObjects(),this.destroySplatRendertarget()}}const mv=new D(1,0,0),gv=new D(0,1,0),_v=new D(0,0,1);class Sl{constructor(e=new D,t=new D){ce(this,"intersectBox",function(){const e=new D,t=[],n=[],i=[];return function(s,a){if(n[0]=this.origin.x,n[1]=this.origin.y,n[2]=this.origin.z,i[0]=this.direction.x,i[1]=this.direction.y,i[2]=this.direction.z,this.boxContainsPoint(s,this.origin,1e-4))return a&&(a.origin.copy(this.origin),a.normal.set(0,0,0),a.distance=-1),!0;for(let o=0;o<3;o++){if(i[o]==0)continue;const l=o==0?mv:o==1?gv:_v,c=i[o]<0?s.max:s.min;let u=-Math.sign(i[o]);t[0]=o==0?c.x:o==1?c.y:c.z;let h=t[0]-n[o];if(h*u<0){const d=(o+1)%3,f=(o+2)%3;if(t[2]=i[d]/i[o]*h+n[d],t[1]=i[f]/i[o]*h+n[f],e.set(t[o],t[f],t[d]),this.boxContainsPoint(s,e,1e-4))return a&&(a.origin.copy(e),a.normal.copy(l).multiplyScalar(u),a.distance=e.sub(this.origin).length()),!0}}return!1}}());ce(this,"intersectSphere",function(){const e=new D;return function(t,n,i){e.copy(t).sub(this.origin);const s=e.dot(this.direction),a=s*s,l=e.dot(e)-a,c=n*n;if(l>c)return!1;const u=Math.sqrt(c-l),h=s-u,d=s+u;if(d<0)return!1;let f=h<0?d:h;return i&&(i.origin.copy(this.origin).addScaledVector(this.direction,f),i.normal.copy(i.origin).sub(t).normalize(),i.distance=f),!0}}());this.origin=new D,this.direction=new D,this.setParameters(e,t)}setParameters(e,t){this.origin.copy(e),this.direction.copy(t).normalize()}boxContainsPoint(e,t,n){return!(t.x<e.min.x-n||t.x>e.max.x+n||t.y<e.min.y-n||t.y>e.max.y+n||t.z<e.min.z-n||t.z>e.max.z+n)}}class Au{constructor(){this.origin=new D,this.normal=new D,this.distance=0,this.splatIndex=0}set(e,t,n,i){this.origin.copy(e),this.normal.copy(t),this.distance=n,this.splatIndex=i}clone(){const e=new Au;return e.origin.copy(this.origin),e.normal.copy(this.normal),e.distance=this.distance,e.splatIndex=this.splatIndex,e}}const Ci={ThreeD:0,TwoD:1};class xv{constructor(e,t,n=!1){ce(this,"setFromCameraAndScreenPosition",function(){const e=new Me;return function(t,n,i){if(e.x=n.x/i.x*2-1,e.y=(i.y-n.y)/i.y*2-1,t.isPerspectiveCamera)this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t;else if(t.isOrthographicCamera)this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t;else throw new Error("Raycaster::setFromCameraAndScreenPosition() -> Unsupported camera type")}}());ce(this,"intersectSplatMesh",function(){const e=new He,t=new He,n=new He,i=new Sl,s=new D;return function(a,o=[]){const l=a.getSplatTree();if(l){for(let c=0;c<l.subTrees.length;c++){const u=l.subTrees[c];t.copy(a.matrixWorld),a.dynamicMode&&(a.getSceneTransform(c,n),t.multiply(n)),e.copy(t).invert(),i.origin.copy(this.ray.origin).applyMatrix4(e),i.direction.copy(this.ray.origin).add(this.ray.direction),i.direction.applyMatrix4(e).sub(i.origin).normalize();const h=[];u.rootNode&&this.castRayAtSplatTreeNode(i,l,u.rootNode,h),h.forEach(d=>{d.origin.applyMatrix4(t),d.normal.applyMatrix4(t).normalize(),d.distance=s.copy(d.origin).sub(this.ray.origin).length()}),o.push(...h)}return o.sort((c,u)=>c.distance>u.distance?1:-1),o}}}());ce(this,"castRayAtSplatTreeNode",function(){const e=new vt,t=new D,n=new D,i=new St,s=new Au,a=1e-7,o=new D(0,0,0),l=new He,c=new He,u=new He,h=new He,d=new He,f=new Sl;return function(m,_,p,g=[]){if(m.intersectBox(p.boundingBox)){if(p.data&&p.data.indexes&&p.data.indexes.length>0)for(let x=0;x<p.data.indexes.length;x++){const v=p.data.indexes[x],A=_.splatMesh.getSceneIndexForSplat(v);if(_.splatMesh.getScene(A).visible&&(_.splatMesh.getSplatColor(v,e),_.splatMesh.getSplatCenter(v,t),_.splatMesh.getSplatScaleAndRotation(v,n,i),!(n.x<=a||n.y<=a||_.splatMesh.splatRenderMode===Ci.ThreeD&&n.z<=a)))if(this.raycastAgainstTrueSplatEllipsoid){c.makeScale(n.x,n.y,n.z),u.makeRotationFromQuaternion(i);const T=Math.log10(e.w)*2;if(l.makeScale(T,T,T),d.copy(l).multiply(u).multiply(c),h.copy(d).invert(),f.origin.copy(m.origin).sub(t).applyMatrix4(h),f.direction.copy(m.origin).add(m.direction).sub(t),f.direction.applyMatrix4(h).sub(f.origin).normalize(),f.intersectSphere(o,1,s)){const C=s.clone();C.splatIndex=v,C.origin.applyMatrix4(d).add(t),g.push(C)}}else{let T=n.x+n.y,C=2;if(_.splatMesh.splatRenderMode===Ci.ThreeD&&(T+=n.z,C=3),T=T/C,m.intersectSphere(t,T,s)){const S=s.clone();S.splatIndex=v,g.push(S)}}}if(p.children&&p.children.length>0)for(let x of p.children)this.castRayAtSplatTreeNode(m,_,x,g);return g}}}());this.ray=new Sl(e,t),this.raycastAgainstTrueSplatEllipsoid=n}}class ur{static buildVertexShaderBase(e=!1,t=!1,n=0,i=""){let s=`
        precision highp float;
        #include <common>

        attribute uint splatIndex;
        uniform highp usampler2D centersColorsTexture;
        uniform highp sampler2D sphericalHarmonicsTexture;
        uniform highp sampler2D sphericalHarmonicsTextureR;
        uniform highp sampler2D sphericalHarmonicsTextureG;
        uniform highp sampler2D sphericalHarmonicsTextureB;

        uniform highp usampler2D sceneIndexesTexture;
        uniform vec2 sceneIndexesTextureSize;
        uniform int sceneCount;
    `;return t&&(s+=`
            uniform float sceneOpacity[${tt.MaxScenes}];
            uniform int sceneVisibility[${tt.MaxScenes}];
        `),e&&(s+=`
            uniform highp mat4 transforms[${tt.MaxScenes}];
        `),s+=`
        ${i}
        uniform vec2 focal;
        uniform float orthoZoom;
        uniform int orthographicMode;
        uniform int pointCloudModeEnabled;
        uniform float inverseFocalAdjustment;
        uniform vec2 viewport;
        uniform vec2 basisViewport;
        uniform vec2 centersColorsTextureSize;
        uniform int sphericalHarmonicsDegree;
        uniform vec2 sphericalHarmonicsTextureSize;
        uniform int sphericalHarmonics8BitMode;
        uniform int sphericalHarmonicsMultiTextureMode;
        uniform float visibleRegionRadius;
        uniform float visibleRegionFadeStartRadius;
        uniform float firstRenderTime;
        uniform float currentTime;
        uniform int fadeInComplete;
        uniform vec3 sceneCenter;
        uniform float splatScale;
        uniform float sphericalHarmonics8BitCompressionRangeMin[${tt.MaxScenes}];
        uniform float sphericalHarmonics8BitCompressionRangeMax[${tt.MaxScenes}];

        varying vec4 vColor;
        varying vec2 vUv;
        varying vec2 vPosition;

        mat3 quaternionToRotationMatrix(float x, float y, float z, float w) {
            float s = 1.0 / sqrt(w * w + x * x + y * y + z * z);
        
            return mat3(
                1. - 2. * (y * y + z * z),
                2. * (x * y + w * z),
                2. * (x * z - w * y),
                2. * (x * y - w * z),
                1. - 2. * (x * x + z * z),
                2. * (y * z + w * x),
                2. * (x * z + w * y),
                2. * (y * z - w * x),
                1. - 2. * (x * x + y * y)
            );
        }

        const float sqrt8 = sqrt(8.0);
        const float minAlpha = 1.0 / 255.0;

        const vec4 encodeNorm4 = vec4(1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0, 1.0 / 255.0);
        const uvec4 mask4 = uvec4(uint(0x000000FF), uint(0x0000FF00), uint(0x00FF0000), uint(0xFF000000));
        const uvec4 shift4 = uvec4(0, 8, 16, 24);
        vec4 uintToRGBAVec (uint u) {
           uvec4 urgba = mask4 & u;
           urgba = urgba >> shift4;
           vec4 rgba = vec4(urgba) * encodeNorm4;
           return rgba;
        }

        vec2 getDataUV(in int stride, in int offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(splatIndex * uint(stride) + uint(offset)) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        vec2 getDataUVF(in uint sIndex, in float stride, in uint offset, in vec2 dimensions) {
            vec2 samplerUV = vec2(0.0, 0.0);
            float d = float(uint(float(sIndex) * stride) + offset) / dimensions.x;
            samplerUV.y = float(floor(d)) / dimensions.y;
            samplerUV.x = fract(d);
            return samplerUV;
        }

        const float SH_C1 = 0.4886025119029199f;
        const float[5] SH_C2 = float[](1.0925484, -1.0925484, 0.3153916, -1.0925484, 0.5462742);

        void main () {

            uint oddOffset = splatIndex & uint(0x00000001);
            uint doubleOddOffset = oddOffset * uint(2);
            bool isEven = oddOffset == uint(0);
            uint nearestEvenIndex = splatIndex - oddOffset;
            float fOddOffset = float(oddOffset);

            uvec4 sampledCenterColor = texture(centersColorsTexture, getDataUV(1, 0, centersColorsTextureSize));
            vec3 splatCenter = uintBitsToFloat(uvec3(sampledCenterColor.gba));

            uint sceneIndex = uint(0);
            if (sceneCount > 1) {
                sceneIndex = texture(sceneIndexesTexture, getDataUV(1, 0, sceneIndexesTextureSize)).r;
            }
            `,t&&(s+=`
                float splatOpacityFromScene = sceneOpacity[sceneIndex];
                int sceneVisible = sceneVisibility[sceneIndex];
                if (splatOpacityFromScene <= 0.01 || sceneVisible == 0) {
                    gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                    return;
                }
            `),e?s+=`
                mat4 transform = transforms[sceneIndex];
                mat4 transformModelViewMatrix = viewMatrix * transform;
            `:s+="mat4 transformModelViewMatrix = modelViewMatrix;",s+=`
            float sh8BitCompressionRangeMinForScene = sphericalHarmonics8BitCompressionRangeMin[sceneIndex];
            float sh8BitCompressionRangeMaxForScene = sphericalHarmonics8BitCompressionRangeMax[sceneIndex];
            float sh8BitCompressionRangeForScene = sh8BitCompressionRangeMaxForScene - sh8BitCompressionRangeMinForScene;
            float sh8BitCompressionHalfRangeForScene = sh8BitCompressionRangeForScene / 2.0;
            vec3 vec8BitSHShift = vec3(sh8BitCompressionRangeMinForScene);

            vec4 viewCenter = transformModelViewMatrix * vec4(splatCenter, 1.0);

            vec4 clipCenter = projectionMatrix * viewCenter;

            float clip = 1.2 * clipCenter.w;
            if (clipCenter.z < -clip || clipCenter.x < -clip || clipCenter.x > clip || clipCenter.y < -clip || clipCenter.y > clip) {
                gl_Position = vec4(0.0, 0.0, 2.0, 1.0);
                return;
            }

            vec3 ndcCenter = clipCenter.xyz / clipCenter.w;

            vPosition = position.xy;
            vColor = uintToRGBAVec(sampledCenterColor.r);
        `,n>=1&&(s+=`   
            if (sphericalHarmonicsDegree >= 1) {
            `,e?s+=`
                    vec3 worldViewDir = normalize(splatCenter - vec3(inverse(transform) * vec4(cameraPosition, 1.0)));
                `:s+=`
                    vec3 worldViewDir = normalize(splatCenter - cameraPosition);
                `,s+=`
                vec3 sh1;
                vec3 sh2;
                vec3 sh3;
            `,n>=2&&(s+=`
                    vec3 sh4;
                    vec3 sh5;
                    vec3 sh6;
                    vec3 sh7;
                    vec3 sh8;
                `),n===1?s+=`
                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        vec2 shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset, sphericalHarmonicsTextureSize);
                        vec4 sampledSH0123 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(1), sphericalHarmonicsTextureSize);
                        vec4 sampledSH4567 = texture(sphericalHarmonicsTexture, shUV);
                        shUV = getDataUVF(nearestEvenIndex, 2.5, doubleOddOffset + uint(2), sphericalHarmonicsTextureSize);
                        vec4 sampledSH891011 = texture(sphericalHarmonicsTexture, shUV);
                        sh1 = vec3(sampledSH0123.rgb) * (1.0 - fOddOffset) + vec3(sampledSH0123.ba, sampledSH4567.r) * fOddOffset;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg) * (1.0 - fOddOffset) + vec3(sampledSH4567.gba) * fOddOffset;
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r) * (1.0 - fOddOffset) + vec3(sampledSH891011.rgb) * fOddOffset;
                    } else {
                        vec2 sampledSH01R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH01B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize)).rg;
                        vec2 sampledSH23B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize)).rg;
                        sh1 = vec3(sampledSH01R.rg, sampledSH23R.r);
                        sh2 = vec3(sampledSH01G.rg, sampledSH23G.r);
                        sh3 = vec3(sampledSH01B.rg, sampledSH23B.r);
                    }
                `:n===2&&(s+=`
                    vec4 sampledSH0123;
                    vec4 sampledSH4567;
                    vec4 sampledSH891011;

                    vec4 sampledSH0123R;
                    vec4 sampledSH0123G;
                    vec4 sampledSH0123B;

                    if (sphericalHarmonicsMultiTextureMode == 0) {
                        sampledSH0123 = texture(sphericalHarmonicsTexture, getDataUV(6, 0, sphericalHarmonicsTextureSize));
                        sampledSH4567 = texture(sphericalHarmonicsTexture, getDataUV(6, 1, sphericalHarmonicsTextureSize));
                        sampledSH891011 = texture(sphericalHarmonicsTexture, getDataUV(6, 2, sphericalHarmonicsTextureSize));
                        sh1 = sampledSH0123.rgb;
                        sh2 = vec3(sampledSH0123.a, sampledSH4567.rg);
                        sh3 = vec3(sampledSH4567.ba, sampledSH891011.r);
                    } else {
                        sampledSH0123R = texture(sphericalHarmonicsTextureR, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123G = texture(sphericalHarmonicsTextureG, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sampledSH0123B = texture(sphericalHarmonicsTextureB, getDataUV(2, 0, sphericalHarmonicsTextureSize));
                        sh1 = vec3(sampledSH0123R.rgb);
                        sh2 = vec3(sampledSH0123G.rgb);
                        sh3 = vec3(sampledSH0123B.rgb);
                    }
                `),s+=`
                    if (sphericalHarmonics8BitMode == 1) {
                        sh1 = sh1 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh2 = sh2 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        sh3 = sh3 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                    }
                    float x = worldViewDir.x;
                    float y = worldViewDir.y;
                    float z = worldViewDir.z;
                    vColor.rgb += SH_C1 * (-sh1 * y + sh2 * z - sh3 * x);
            `,n>=2&&(s+=`
                    if (sphericalHarmonicsDegree >= 2) {
                        float xx = x * x;
                        float yy = y * y;
                        float zz = z * z;
                        float xy = x * y;
                        float yz = y * z;
                        float xz = x * z;
                `,n===2&&(s+=`
                        if (sphericalHarmonicsMultiTextureMode == 0) {
                            vec4 sampledSH12131415 = texture(sphericalHarmonicsTexture, getDataUV(6, 3, sphericalHarmonicsTextureSize));
                            vec4 sampledSH16171819 = texture(sphericalHarmonicsTexture, getDataUV(6, 4, sphericalHarmonicsTextureSize));
                            vec4 sampledSH20212223 = texture(sphericalHarmonicsTexture, getDataUV(6, 5, sphericalHarmonicsTextureSize));
                            sh4 = sampledSH891011.gba;
                            sh5 = sampledSH12131415.rgb;
                            sh6 = vec3(sampledSH12131415.a, sampledSH16171819.rg);
                            sh7 = vec3(sampledSH16171819.ba, sampledSH20212223.r);
                            sh8 = sampledSH20212223.gba;
                        } else {
                            vec4 sampledSH4567R = texture(sphericalHarmonicsTextureR, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567G = texture(sphericalHarmonicsTextureG, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            vec4 sampledSH4567B = texture(sphericalHarmonicsTextureB, getDataUV(2, 1, sphericalHarmonicsTextureSize));
                            sh4 = vec3(sampledSH0123R.a, sampledSH4567R.rg);
                            sh5 = vec3(sampledSH4567R.ba, sampledSH0123G.a);
                            sh6 = vec3(sampledSH4567G.rgb);
                            sh7 = vec3(sampledSH4567G.a, sampledSH0123B.a, sampledSH4567B.r);
                            sh8 = vec3(sampledSH4567B.gba);
                        }
                    `),s+=`
                        if (sphericalHarmonics8BitMode == 1) {
                            sh4 = sh4 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh5 = sh5 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh6 = sh6 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh7 = sh7 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                            sh8 = sh8 * sh8BitCompressionRangeForScene + vec8BitSHShift;
                        }

                        vColor.rgb +=
                            (SH_C2[0] * xy) * sh4 +
                            (SH_C2[1] * yz) * sh5 +
                            (SH_C2[2] * (2.0 * zz - xx - yy)) * sh6 +
                            (SH_C2[3] * xz) * sh7 +
                            (SH_C2[4] * (xx - yy)) * sh8;
                    }
                `),s+=`

                vColor.rgb = clamp(vColor.rgb, vec3(0.), vec3(1.));

            }

            `),s}static getVertexShaderFadeIn(){return`
            if (fadeInComplete == 0) {
                float opacityAdjust = 1.0;
                float centerDist = length(splatCenter - sceneCenter);
                float renderTime = max(currentTime - firstRenderTime, 0.0);

                float fadeDistance = 0.75;
                float distanceLoadFadeInFactor = step(visibleRegionFadeStartRadius, centerDist);
                distanceLoadFadeInFactor = (1.0 - distanceLoadFadeInFactor) +
                                        (1.0 - clamp((centerDist - visibleRegionFadeStartRadius) / fadeDistance, 0.0, 1.0)) *
                                        distanceLoadFadeInFactor;
                opacityAdjust *= distanceLoadFadeInFactor;
                vColor.a *= opacityAdjust;
            }
        `}static getUniforms(e=!1,t=!1,n=0,i=1,s=!1){const a={sceneCenter:{type:"v3",value:new D},fadeInComplete:{type:"i",value:0},orthographicMode:{type:"i",value:0},visibleRegionFadeStartRadius:{type:"f",value:0},visibleRegionRadius:{type:"f",value:0},currentTime:{type:"f",value:0},firstRenderTime:{type:"f",value:0},centersColorsTexture:{type:"t",value:null},sphericalHarmonicsTexture:{type:"t",value:null},sphericalHarmonicsTextureR:{type:"t",value:null},sphericalHarmonicsTextureG:{type:"t",value:null},sphericalHarmonicsTextureB:{type:"t",value:null},sphericalHarmonics8BitCompressionRangeMin:{type:"f",value:[]},sphericalHarmonics8BitCompressionRangeMax:{type:"f",value:[]},focal:{type:"v2",value:new Me},orthoZoom:{type:"f",value:1},inverseFocalAdjustment:{type:"f",value:1},viewport:{type:"v2",value:new Me},basisViewport:{type:"v2",value:new Me},debugColor:{type:"v3",value:new je},centersColorsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonicsDegree:{type:"i",value:n},sphericalHarmonicsTextureSize:{type:"v2",value:new Me(1024,1024)},sphericalHarmonics8BitMode:{type:"i",value:0},sphericalHarmonicsMultiTextureMode:{type:"i",value:0},splatScale:{type:"f",value:i},pointCloudModeEnabled:{type:"i",value:s?1:0},sceneIndexesTexture:{type:"t",value:null},sceneIndexesTextureSize:{type:"v2",value:new Me(1024,1024)},sceneCount:{type:"i",value:1}};for(let o=0;o<tt.MaxScenes;o++)a.sphericalHarmonics8BitCompressionRangeMin.value.push(-3/2),a.sphericalHarmonics8BitCompressionRangeMax.value.push(tt.SphericalHarmonics8BitCompressionRange/2);if(t){const o=[];for(let c=0;c<tt.MaxScenes;c++)o.push(1);a.sceneOpacity={type:"f",value:o};const l=[];for(let c=0;c<tt.MaxScenes;c++)l.push(1);a.sceneVisibility={type:"i",value:l}}if(e){const o=[];for(let l=0;l<tt.MaxScenes;l++)o.push(new He);a.transforms={type:"mat4",value:o}}return a}}class uo{static build(e=!1,t=!1,n=!1,i=2048,s=1,a=!1,o=0,l=.3){let u=ur.buildVertexShaderBase(e,t,o,`
            uniform vec2 covariancesTextureSize;
            uniform highp sampler2D covariancesTexture;
            uniform highp usampler2D covariancesTextureHalfFloat;
            uniform int covariancesAreHalfFloat;

            void fromCovarianceHalfFloatV4(uvec4 val, out vec4 first, out vec4 second) {
                vec2 r = unpackHalf2x16(val.r);
                vec2 g = unpackHalf2x16(val.g);
                vec2 b = unpackHalf2x16(val.b);

                first = vec4(r.x, r.y, g.x, g.y);
                second = vec4(b.x, b.y, 0.0, 0.0);
            }
        `);u+=uo.buildVertexShaderProjection(n,t,i,l);const h=uo.buildFragmentShader(),d=ur.getUniforms(e,t,o,s,a);return d.covariancesTextureSize={type:"v2",value:new Me(1024,1024)},d.covariancesTexture={type:"t",value:null},d.covariancesTextureHalfFloat={type:"t",value:null},d.covariancesAreHalfFloat={type:"i",value:0},new cn({uniforms:d,vertexShader:u,fragmentShader:h,transparent:!0,alphaTest:1,blending:ji,depthTest:!0,depthWrite:!1,side:wn})}static buildVertexShaderProjection(e,t,n,i){let s=`

            vec4 sampledCovarianceA;
            vec4 sampledCovarianceB;
            vec3 cov3D_M11_M12_M13;
            vec3 cov3D_M22_M23_M33;
            if (covariancesAreHalfFloat == 0) {
                sampledCovarianceA = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset,
                                                                            covariancesTextureSize));
                sampledCovarianceB = texture(covariancesTexture, getDataUVF(nearestEvenIndex, 1.5, oddOffset + uint(1),
                                                                            covariancesTextureSize));

                cov3D_M11_M12_M13 = vec3(sampledCovarianceA.rgb) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceA.ba, sampledCovarianceB.r) * fOddOffset;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg) * (1.0 - fOddOffset) +
                                    vec3(sampledCovarianceB.gba) * fOddOffset;
            } else {
                uvec4 sampledCovarianceU = texture(covariancesTextureHalfFloat, getDataUV(1, 0, covariancesTextureSize));
                fromCovarianceHalfFloatV4(sampledCovarianceU, sampledCovarianceA, sampledCovarianceB);
                cov3D_M11_M12_M13 = sampledCovarianceA.rgb;
                cov3D_M22_M23_M33 = vec3(sampledCovarianceA.a, sampledCovarianceB.rg);
            }
        
            // Construct the 3D covariance matrix
            mat3 Vrk = mat3(
                cov3D_M11_M12_M13.x, cov3D_M11_M12_M13.y, cov3D_M11_M12_M13.z,
                cov3D_M11_M12_M13.y, cov3D_M22_M23_M33.x, cov3D_M22_M23_M33.y,
                cov3D_M11_M12_M13.z, cov3D_M22_M23_M33.y, cov3D_M22_M23_M33.z
            );

            mat3 J;
            if (orthographicMode == 1) {
                // Since the projection is linear, we don't need an approximation
                J = transpose(mat3(orthoZoom, 0.0, 0.0,
                                0.0, orthoZoom, 0.0,
                                0.0, 0.0, 0.0));
            } else {
                // Construct the Jacobian of the affine approximation of the projection matrix. It will be used to transform the
                // 3D covariance matrix instead of using the actual projection matrix because that transformation would
                // require a non-linear component (perspective division) which would yield a non-gaussian result.
                float s = 1.0 / (viewCenter.z * viewCenter.z);
                J = mat3(
                    focal.x / viewCenter.z, 0., -(focal.x * viewCenter.x) * s,
                    0., focal.y / viewCenter.z, -(focal.y * viewCenter.y) * s,
                    0., 0., 0.
                );
            }

            // Concatenate the projection approximation with the model-view transformation
            mat3 W = transpose(mat3(transformModelViewMatrix));
            mat3 T = W * J;

            // Transform the 3D covariance matrix (Vrk) to compute the 2D covariance matrix
            mat3 cov2Dm = transpose(T) * Vrk * T;
            `;return e?s+=`
                float detOrig = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
                float detBlur = cov2Dm[0][0] * cov2Dm[1][1] - cov2Dm[0][1] * cov2Dm[0][1];
                vColor.a *= sqrt(max(detOrig / detBlur, 0.0));
                if (vColor.a < minAlpha) return;
            `:s+=`
                cov2Dm[0][0] += ${i};
                cov2Dm[1][1] += ${i};
            `,s+=`

            // We are interested in the upper-left 2x2 portion of the projected 3D covariance matrix because
            // we only care about the X and Y values. We want the X-diagonal, cov2Dm[0][0],
            // the Y-diagonal, cov2Dm[1][1], and the correlation between the two cov2Dm[0][1]. We don't
            // need cov2Dm[1][0] because it is a symetric matrix.
            vec3 cov2Dv = vec3(cov2Dm[0][0], cov2Dm[0][1], cov2Dm[1][1]);

            // We now need to solve for the eigen-values and eigen vectors of the 2D covariance matrix
            // so that we can determine the 2D basis for the splat. This is done using the method described
            // here: https://people.math.harvard.edu/~knill/teaching/math21b2004/exhibits/2dmatrices/index.html
            // After calculating the eigen-values and eigen-vectors, we calculate the basis for rendering the splat
            // by normalizing the eigen-vectors and then multiplying them by (sqrt(8) * sqrt(eigen-value)), which is
            // equal to scaling them by sqrt(8) standard deviations.
            //
            // This is a different approach than in the original work at INRIA. In that work they compute the
            // max extents of the projected splat in screen space to form a screen-space aligned bounding rectangle
            // which forms the geometry that is actually rasterized. The dimensions of that bounding box are 3.0
            // times the square root of the maximum eigen-value, or 3 standard deviations. They then use the inverse
            // 2D covariance matrix (called 'conic') in the CUDA rendering thread to determine fragment opacity by
            // calculating the full gaussian: exp(-0.5 * (X - mean) * conic * (X - mean)) * splat opacity
            float a = cov2Dv.x;
            float d = cov2Dv.z;
            float b = cov2Dv.y;
            float D = a * d - b * b;
            float trace = a + d;
            float traceOver2 = 0.5 * trace;
            float term2 = sqrt(max(0.1f, traceOver2 * traceOver2 - D));
            float eigenValue1 = traceOver2 + term2;
            float eigenValue2 = traceOver2 - term2;

            if (pointCloudModeEnabled == 1) {
                eigenValue1 = eigenValue2 = 0.2;
            }

            if (eigenValue2 <= 0.0) return;

            vec2 eigenVector1 = normalize(vec2(b, eigenValue1 - a));
            // since the eigen vectors are orthogonal, we derive the second one from the first
            vec2 eigenVector2 = vec2(eigenVector1.y, -eigenVector1.x);

            // We use sqrt(8) standard deviations instead of 3 to eliminate more of the splat with a very low opacity.
            vec2 basisVector1 = eigenVector1 * splatScale * min(sqrt8 * sqrt(eigenValue1), ${parseInt(n)}.0);
            vec2 basisVector2 = eigenVector2 * splatScale * min(sqrt8 * sqrt(eigenValue2), ${parseInt(n)}.0);
            `,t&&(s+=`
                vColor.a *= splatOpacityFromScene;
            `),s+=`
            vec2 ndcOffset = vec2(vPosition.x * basisVector1 + vPosition.y * basisVector2) *
                             basisViewport * 2.0 * inverseFocalAdjustment;

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            // Scale the position data we send to the fragment shader
            vPosition *= sqrt8;
        `,s+=ur.getVertexShaderFadeIn(),s+="}",s}static buildFragmentShader(){let e=`
            precision highp float;
            #include <common>
 
            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
        `;return e+=`
            void main () {
                // Compute the positional squared distance from the center of the splat to the current fragment.
                float A = dot(vPosition, vPosition);
                // Since the positional data in vPosition has been scaled by sqrt(8), the squared result will be
                // scaled by a factor of 8. If the squared result is larger than 8, it means it is outside the ellipse
                // defined by the rectangle formed by vPosition. It also means it's farther
                // away than sqrt(8) standard deviations from the mean.
                if (A > 8.0) discard;
                vec3 color = vColor.rgb;

                // Since the rendered splat is scaled by sqrt(8), the inverse covariance matrix that is part of
                // the gaussian formula becomes the identity matrix. We're then left with (X - mean) * (X - mean),
                // and since 'mean' is zero, we have X * X, which is the same as A:
                float opacity = exp(-0.5 * A) * vColor.a;

                gl_FragColor = vec4(color.rgb, opacity);
            }
        `,e}}class ho{static build(e=!1,t=!1,n=1,i=!1,s=0){let o=ur.buildVertexShaderBase(e,t,s,`
            uniform vec2 scaleRotationsTextureSize;
            uniform highp sampler2D scaleRotationsTexture;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;
        `);o+=ho.buildVertexShaderProjection();const l=ho.buildFragmentShader(),c=ur.getUniforms(e,t,s,n,i);return c.scaleRotationsTexture={type:"t",value:null},c.scaleRotationsTextureSize={type:"v2",value:new Me(1024,1024)},new cn({uniforms:c,vertexShader:o,fragmentShader:l,transparent:!0,alphaTest:1,blending:ji,depthTest:!0,depthWrite:!1,side:wn})}static buildVertexShaderProjection(){let e=`

            vec4 scaleRotationA = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset, scaleRotationsTextureSize));
            vec4 scaleRotationB = texture(scaleRotationsTexture, getDataUVF(nearestEvenIndex, 1.5,
                                                                            oddOffset + uint(1), scaleRotationsTextureSize));

            vec3 scaleRotation123 = vec3(scaleRotationA.rgb) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationA.ba, scaleRotationB.r) * fOddOffset;
            vec3 scaleRotation456 = vec3(scaleRotationA.a, scaleRotationB.rg) * (1.0 - fOddOffset) +
                                    vec3(scaleRotationB.gba) * fOddOffset;

            float missingW = sqrt(1.0 - scaleRotation456.x * scaleRotation456.x - scaleRotation456.y *
                                    scaleRotation456.y - scaleRotation456.z * scaleRotation456.z);
            mat3 R = quaternionToRotationMatrix(scaleRotation456.r, scaleRotation456.g, scaleRotation456.b, missingW);
            mat3 S = mat3(scaleRotation123.r, 0.0, 0.0,
                            0.0, scaleRotation123.g, 0.0,
                            0.0, 0.0, scaleRotation123.b);
            
            mat3 L = R * S;

            mat3x4 splat2World = mat3x4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

            mat4 world2ndc = transpose(projectionMatrix * transformModelViewMatrix);

            mat3x4 ndc2pix = mat3x4(vec4(viewport.x / 2.0, 0.0, 0.0, (viewport.x - 1.0) / 2.0),
                                    vec4(0.0, viewport.y / 2.0, 0.0, (viewport.y - 1.0) / 2.0),
                                    vec4(0.0, 0.0, 0.0, 1.0));

            mat3 T = transpose(splat2World) * world2ndc * ndc2pix;
            vec3 normal = vec3(viewMatrix * vec4(L[0][2], L[1][2], L[2][2], 0.0));
        `;return e+=`

                mat4 splat2World4 = mat4(vec4(L[0], 0.0),
                                        vec4(L[1], 0.0),
                                        vec4(L[2], 0.0),
                                        vec4(splatCenter.x, splatCenter.y, splatCenter.z, 1.0));

                mat4 Tt = transpose(transpose(splat2World4) * world2ndc);

                vec4 tempPoint1 = Tt * vec4(1.0, 0.0, 0.0, 1.0);
                tempPoint1 /= tempPoint1.w;

                vec4 tempPoint2 = Tt * vec4(0.0, 1.0, 0.0, 1.0);
                tempPoint2 /= tempPoint2.w;

                vec4 center = Tt * vec4(0.0, 0.0, 0.0, 1.0);
                center /= center.w;

                vec2 basisVector1 = tempPoint1.xy - center.xy;
                vec2 basisVector2 = tempPoint2.xy - center.xy;

                vec2 basisVector1Screen = basisVector1 * 0.5 * viewport;
                vec2 basisVector2Screen = basisVector2 * 0.5 * viewport;

                const float minPix = 1.;
                if (length(basisVector1Screen) < minPix || length(basisVector2Screen) < minPix) {
                    
            vec3 T0 = vec3(T[0][0], T[0][1], T[0][2]);
            vec3 T1 = vec3(T[1][0], T[1][1], T[1][2]);
            vec3 T3 = vec3(T[2][0], T[2][1], T[2][2]);

            vec3 tempPoint = vec3(1.0, 1.0, -1.0);
            float distance = (T3.x * T3.x * tempPoint.x) + (T3.y * T3.y * tempPoint.y) + (T3.z * T3.z * tempPoint.z);
            vec3 f = (1.0 / distance) * tempPoint;
            if (abs(distance) < 0.00001) return;

            float pointImageX = (T0.x * T3.x * f.x) + (T0.y * T3.y * f.y) + (T0.z * T3.z * f.z);
            float pointImageY = (T1.x * T3.x * f.x) + (T1.y * T3.y * f.y) + (T1.z * T3.z * f.z);
            vec2 pointImage = vec2(pointImageX, pointImageY);

            float tempX = (T0.x * T0.x * f.x) + (T0.y * T0.y * f.y) + (T0.z * T0.z * f.z);
            float tempY = (T1.x * T1.x * f.x) + (T1.y * T1.y * f.y) + (T1.z * T1.z * f.z);
            vec2 temp = vec2(tempX, tempY);

            vec2 halfExtend = pointImage * pointImage - temp;
            vec2 extent = sqrt(max(vec2(0.0001), halfExtend));
            float radius = max(extent.x, extent.y);

            vec2 ndcOffset = ((position.xy * radius * 3.0) * basisViewport * 2.0);

            vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
            gl_Position = quadPos;

            vT = T;
            vQuadCenter = pointImage;
            vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
        
                } else {
                    vec2 ndcOffset = vec2(position.x * basisVector1 + position.y * basisVector2) * 3.0 * inverseFocalAdjustment;
                    vec4 quadPos = vec4(ndcCenter.xy + ndcOffset, ndcCenter.z, 1.0);
                    gl_Position = quadPos;

                    vT = T;
                    vQuadCenter = center.xy;
                    vFragCoord = (quadPos.xy * 0.5 + 0.5) * viewport;
                }
            `,e+=ur.getVertexShaderFadeIn(),e+="}",e}static buildFragmentShader(){return`
            precision highp float;
            #include <common>

            uniform vec3 debugColor;

            varying vec4 vColor;
            varying vec2 vUv;
            varying vec2 vPosition;
            varying mat3 vT;
            varying vec2 vQuadCenter;
            varying vec2 vFragCoord;

            void main () {

                const float FilterInvSquare = 2.0;
                const float near_n = 0.2;
                const float T = 1.0;

                vec2 xy = vQuadCenter;
                vec3 Tu = vT[0];
                vec3 Tv = vT[1];
                vec3 Tw = vT[2];
                vec3 k = vFragCoord.x * Tw - Tu;
                vec3 l = vFragCoord.y * Tw - Tv;
                vec3 p = cross(k, l);
                if (p.z == 0.0) discard;
                vec2 s = vec2(p.x / p.z, p.y / p.z);
                float rho3d = (s.x * s.x + s.y * s.y); 
                vec2 d = vec2(xy.x - vFragCoord.x, xy.y - vFragCoord.y);
                float rho2d = FilterInvSquare * (d.x * d.x + d.y * d.y); 

                // compute intersection and depth
                float rho = min(rho3d, rho2d);
                float depth = (rho3d <= rho2d) ? (s.x * Tw.x + s.y * Tw.y) + Tw.z : Tw.z; 
                if (depth < near_n) discard;
                //  vec4 nor_o = collected_normal_opacity[j];
                //  float normal[3] = {nor_o.x, nor_o.y, nor_o.z};
                float opa = vColor.a;

                float power = -0.5f * rho;
                if (power > 0.0f) discard;

                // Eq. (2) from 3D Gaussian splatting paper.
                // Obtain alpha by multiplying with Gaussian opacity
                // and its exponential falloff from mean.
                // Avoid numerical instabilities (see paper appendix). 
                float alpha = min(0.99f, opa * exp(power));
                if (alpha < 1.0f / 255.0f) discard;
                float test_T = T * (1.0 - alpha);
                if (test_T < 0.0001)discard;

                float w = alpha * T;
                gl_FragColor = vec4(vColor.rgb, w);
            }
        `}}class Sv{static build(e){const t=new Xt;t.setIndex([0,1,2,0,2,3]);const n=new Float32Array(4*3),i=new _n(n,3);t.setAttribute("position",i),i.setXYZ(0,-1,-1,0),i.setXYZ(1,-1,1,0),i.setXYZ(2,1,1,0),i.setXYZ(3,1,-1,0),i.needsUpdate=!0;const s=new mg().copy(t),a=new Uint32Array(e),o=new Qm(a,1,!1);return o.setUsage(Am),s.setAttribute("splatIndex",o),s.instanceCount=0,s}}class Av extends Rt{constructor(e,t=new D,n=new St,i=new D(1,1,1),s=1,a=1,o=!0){super(),this.splatBuffer=e,this.position.copy(t),this.quaternion.copy(n),this.scale.copy(i),this.transform=new He,this.minimumAlpha=s,this.opacity=a,this.visible=o}copyTransformData(e){this.position.copy(e.position),this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.transform.copy(e.transform)}updateTransform(e){e?(this.matrixWorldAutoUpdate&&this.updateWorldMatrix(!0,!1),this.transform.copy(this.matrixWorld)):(this.matrixAutoUpdate&&this.updateMatrix(),this.transform.copy(this.matrix))}}const vo=class vo{constructor(e,t,n,i){this.min=new D().copy(e),this.max=new D().copy(t),this.boundingBox=new ri(this.min,this.max),this.center=new D().copy(this.max).sub(this.min).multiplyScalar(.5).add(this.min),this.depth=n,this.children=[],this.data=null,this.id=i||vo.idGen++}};ce(vo,"idGen",0);let wc=vo;class Wr{constructor(e,t){this.maxDepth=e,this.maxCentersPerNode=t,this.sceneDimensions=new D,this.sceneMin=new D,this.sceneMax=new D,this.rootNode=null,this.nodesWithIndexes=[],this.splatMesh=null}static convertWorkerSubTreeNode(e){const t=new D().fromArray(e.min),n=new D().fromArray(e.max),i=new wc(t,n,e.depth,e.id);if(e.data.indexes){i.data={indexes:[]};for(let s of e.data.indexes)i.data.indexes.push(s)}if(e.children)for(let s of e.children)i.children.push(Wr.convertWorkerSubTreeNode(s));return i}static convertWorkerSubTree(e,t){const n=new Wr(e.maxDepth,e.maxCentersPerNode);n.sceneMin=new D().fromArray(e.sceneMin),n.sceneMax=new D().fromArray(e.sceneMax),n.splatMesh=t,n.rootNode=Wr.convertWorkerSubTreeNode(e.rootNode);const i=(s,a)=>{s.children.length===0&&a(s);for(let o of s.children)i(o,a)};return n.nodesWithIndexes=[],i(n.rootNode,s=>{s.data&&s.data.indexes&&s.data.indexes.length>0&&n.nodesWithIndexes.push(s)}),n}}function vv(r){let e=0;class t{constructor(l,c){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]]}containsPoint(l){return l[0]>=this.min[0]&&l[0]<=this.max[0]&&l[1]>=this.min[1]&&l[1]<=this.max[1]&&l[2]>=this.min[2]&&l[2]<=this.max[2]}}class n{constructor(l,c){this.maxDepth=l,this.maxCentersPerNode=c,this.sceneDimensions=[],this.sceneMin=[],this.sceneMax=[],this.rootNode=null,this.addedIndexes={},this.nodesWithIndexes=[],this.splatMesh=null,this.disposed=!1}}class i{constructor(l,c,u,h){this.min=[l[0],l[1],l[2]],this.max=[c[0],c[1],c[2]],this.center=[(c[0]-l[0])*.5+l[0],(c[1]-l[1])*.5+l[1],(c[2]-l[2])*.5+l[2]],this.depth=u,this.children=[],this.data=null,this.id=h||e++}}processSplatTreeNode=function(o,l,c,u){const h=l.data.indexes.length;if(h<o.maxCentersPerNode||l.depth>o.maxDepth){const x=[];for(let v=0;v<l.data.indexes.length;v++)o.addedIndexes[l.data.indexes[v]]||(x.push(l.data.indexes[v]),o.addedIndexes[l.data.indexes[v]]=!0);l.data.indexes=x,l.data.indexes.sort((v,A)=>v>A?1:-1),o.nodesWithIndexes.push(l);return}const d=[l.max[0]-l.min[0],l.max[1]-l.min[1],l.max[2]-l.min[2]],f=[d[0]*.5,d[1]*.5,d[2]*.5],m=[l.min[0]+f[0],l.min[1]+f[1],l.min[2]+f[2]],_=[new t([m[0]-f[0],m[1],m[2]-f[2]],[m[0],m[1]+f[1],m[2]]),new t([m[0],m[1],m[2]-f[2]],[m[0]+f[0],m[1]+f[1],m[2]]),new t([m[0],m[1],m[2]],[m[0]+f[0],m[1]+f[1],m[2]+f[2]]),new t([m[0]-f[0],m[1],m[2]],[m[0],m[1]+f[1],m[2]+f[2]]),new t([m[0]-f[0],m[1]-f[1],m[2]-f[2]],[m[0],m[1],m[2]]),new t([m[0],m[1]-f[1],m[2]-f[2]],[m[0]+f[0],m[1],m[2]]),new t([m[0],m[1]-f[1],m[2]],[m[0]+f[0],m[1],m[2]+f[2]]),new t([m[0]-f[0],m[1]-f[1],m[2]],[m[0],m[1],m[2]+f[2]])],p=[];for(let x=0;x<_.length;x++)p[x]=[];const g=[0,0,0];for(let x=0;x<h;x++){const v=l.data.indexes[x],A=c[v];g[0]=u[A],g[1]=u[A+1],g[2]=u[A+2];for(let y=0;y<_.length;y++)_[y].containsPoint(g)&&p[y].push(v)}for(let x=0;x<_.length;x++){const v=new i(_[x].min,_[x].max,l.depth+1);v.data={indexes:p[x]},l.children.push(v)}l.data={};for(let x of l.children)processSplatTreeNode(o,x,c,u)};const s=(o,l,c)=>{const u=[0,0,0],h=[0,0,0],d=[],f=Math.floor(o.length/4);for(let _=0;_<f;_++){const p=_*4,g=o[p],x=o[p+1],v=o[p+2],A=Math.round(o[p+3]);(_===0||g<u[0])&&(u[0]=g),(_===0||g>h[0])&&(h[0]=g),(_===0||x<u[1])&&(u[1]=x),(_===0||x>h[1])&&(h[1]=x),(_===0||v<u[2])&&(u[2]=v),(_===0||v>h[2])&&(h[2]=v),d.push(A)}const m=new n(l,c);return m.sceneMin=u,m.sceneMax=h,m.rootNode=new i(m.sceneMin,m.sceneMax,0),m.rootNode.data={indexes:d},m};function a(o,l,c){const u=[];for(let d of o){const f=Math.floor(d.length/4);for(let m=0;m<f;m++){const _=m*4,p=Math.round(d[_+3]);u[p]=_}}const h=[];for(let d of o){const f=s(d,l,c);h.push(f),processSplatTreeNode(f,f.rootNode,u,d)}r.postMessage({subTrees:h})}r.onmessage=o=>{o.data.process&&a(o.data.process.centers,o.data.process.maxDepth,o.data.process.maxCentersPerNode)}}function yv(r,e,t,n,i){r.postMessage({process:{centers:e,maxDepth:n,maxCentersPerNode:i}},t)}function Mv(){return new Worker(URL.createObjectURL(new Blob(["(",vv.toString(),")(self)"],{type:"application/javascript"})))}class Cv{constructor(e,t){ce(this,"processSplatMesh",function(e,t=()=>!0,n,i){this.splatTreeWorker||(this.splatTreeWorker=Mv()),this.splatMesh=e,this.subTrees=[];const s=new D,a=(o,l)=>{const c=new Float32Array(l*4);let u=0;for(let h=0;h<l;h++){const d=h+o;if(t(d)){e.getSplatCenter(d,s);const f=u*4;c[f]=s.x,c[f+1]=s.y,c[f+2]=s.z,c[f+3]=d,u++}}return c};return new Promise(o=>{const l=()=>this.disposed?(this.diposeSplatTreeWorker(),o(),!0):!1;n&&n(!1),In(()=>{if(l())return;const c=[];if(e.dynamicMode){let u=0;for(let h=0;h<e.scenes.length;h++){const f=e.getScene(h).splatBuffer.getSplatCount(),m=a(u,f);c.push(m),u+=f}}else{const u=a(0,e.getSplatCount());c.push(u)}this.splatTreeWorker.onmessage=u=>{l()||u.data.subTrees&&(i&&i(!1),In(()=>{if(!l()){for(let h of u.data.subTrees){const d=Wr.convertWorkerSubTree(h,e);this.subTrees.push(d)}this.diposeSplatTreeWorker(),i&&i(!0),In(()=>{o()})}}))},In(()=>{if(l())return;n&&n(!0);const u=c.map(h=>h.buffer);yv(this.splatTreeWorker,c,u,this.maxDepth,this.maxCentersPerNode)})})})});this.maxDepth=e,this.maxCentersPerNode=t,this.subTrees=[],this.splatMesh=null}dispose(){this.diposeSplatTreeWorker(),this.disposed=!0}diposeSplatTreeWorker(){this.splatTreeWorker&&this.splatTreeWorker.terminate(),this.splatTreeWorker=null}countLeaves(){let e=0;return this.visitLeaves(()=>{e++}),e}visitLeaves(e){const t=(n,i)=>{n.children.length===0&&i(n);for(let s of n.children)t(s,i)};for(let n of this.subTrees)t(n.rootNode,e)}}function Tv(r){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=r.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Ev(r,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");n=r.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(C){if(C==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&r.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),d=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),f=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),_=r.getParameter(r.MAX_VERTEX_ATTRIBS),p=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),g=r.getParameter(r.MAX_VARYING_VECTORS),x=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),v=d>0,A=a||e.has("OES_texture_float"),y=v&&A,T=a?r.getParameter(r.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:i,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:p,maxVaryings:g,maxFragmentUniforms:x,vertexTextures:v,floatFragmentTextures:A,floatVertexTextures:y,maxSamples:T}}const Xr={Default:0,Instant:2},hr={None:0,Info:3},xd=new Xt,bv=new ci,Ya=6,wv=4,Rv=4,Iv=4,Pv=6,Dv=8,Al=4,vl=4,Sd=1,Fv=.012,Lv=.003,Ad=1,vd=16777216;class Qt extends Xe{constructor(t=Ci.ThreeD,n=!1,i=!1,s=!1,a=1,o=!0,l=!1,c=!1,u=1024,h=hr.None,d=0,f=1,m=.3){super(xd,bv);ce(this,"buildSplatTree",function(t=[],n,i){return new Promise(s=>{this.disposeSplatTree(),this.baseSplatTree=new Cv(8,1e3);const a=performance.now(),o=new vt;this.baseSplatTree.processSplatMesh(this,l=>{this.getSplatColor(l,o);const c=this.getSceneIndexForSplat(l),u=t[c]||1;return o.w>=u},n,i).then(()=>{const l=performance.now()-a;if(this.logLevel>=hr.Info&&console.log("SplatTree build: "+l+" ms"),this.disposed)s();else{this.splatTree=this.baseSplatTree,this.baseSplatTree=null;let c=0,u=0,h=0;this.splatTree.visitLeaves(d=>{const f=d.data.indexes.length;f>0&&(u+=f,h++,c++)}),this.logLevel>=hr.Info&&(console.log(`SplatTree leaves: ${this.splatTree.countLeaves()}`),console.log(`SplatTree leaves with splats:${c}`),u=u/h,console.log(`Avg splat count per node: ${u}`),console.log(`Total splat count: ${this.getSplatCount()}`)),s()}})})});ce(this,"updateUniforms",function(){const t=new Me;return function(n,i,s,a,o,l){if(this.getSplatCount()>0){if(t.set(n.x*this.devicePixelRatio,n.y*this.devicePixelRatio),this.material.uniforms.viewport.value.copy(t),this.material.uniforms.basisViewport.value.set(1/t.x,1/t.y),this.material.uniforms.focal.value.set(i,s),this.material.uniforms.orthographicMode.value=a?1:0,this.material.uniforms.orthoZoom.value=o,this.material.uniforms.inverseFocalAdjustment.value=l,this.dynamicMode)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.transforms.value[u].copy(this.getScene(u).transform);if(this.enableOptionalEffects)for(let u=0;u<this.scenes.length;u++)this.material.uniforms.sceneOpacity.value[u]=Mt(this.getScene(u).opacity,0,1),this.material.uniforms.sceneVisibility.value[u]=this.getScene(u).visible?1:0,this.material.uniformsNeedUpdate=!0;this.material.uniformsNeedUpdate=!0}}}());ce(this,"setupDistancesComputationTransformFeedback",function(){let t;return function(){const n=this.getMaxSplatCount();if(!this.renderer)return;const i=this.lastRenderer!==this.renderer,s=t!==n;if(!i&&!s)return;i?this.disposeDistancesComputationGPUResources():s&&this.disposeDistancesComputationGPUBufferResources();const a=this.renderer.getContext(),o=(f,m,_)=>{const p=f.createShader(m);if(!p)return console.error("Fatal error: gl could not create a shader object."),null;if(f.shaderSource(p,_),f.compileShader(p),!f.getShaderParameter(p,f.COMPILE_STATUS)){let x="unknown";m===f.VERTEX_SHADER?x="vertex shader":m===f.FRAGMENT_SHADER&&(x="fragement shader");const v=f.getShaderInfoLog(p);return console.error("Failed to compile "+x+" with these errors:"+v),f.deleteShader(p),null}return p};let l;this.integerBasedDistancesComputation?(l=`#version 300 es
                in ivec4 center;
                flat out int distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform ivec4 transforms[${tt.MaxScenes}];
                        void main(void) {
                            ivec4 transform = transforms[sceneIndex];
                            distance = center.x * transform.x + center.y * transform.y + center.z * transform.z + transform.w * center.w;
                        }
                    `:l+=`
                        uniform ivec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `):(l=`#version 300 es
                in vec4 center;
                flat out float distance;`,this.dynamicMode?l+=`
                        in uint sceneIndex;
                        uniform mat4 transforms[${tt.MaxScenes}];
                        void main(void) {
                            vec4 transformedCenter = transforms[sceneIndex] * vec4(center.xyz, 1.0);
                            distance = transformedCenter.z;
                        }
                    `:l+=`
                        uniform vec3 modelViewProj;
                        void main(void) {
                            distance = center.x * modelViewProj.x + center.y * modelViewProj.y + center.z * modelViewProj.z;
                        }
                    `);const c=`#version 300 es
                precision lowp float;
                out vec4 fragColor;
                void main(){}
            `,u=a.getParameter(a.VERTEX_ARRAY_BINDING),h=a.getParameter(a.CURRENT_PROGRAM),d=h?a.getProgramParameter(h,a.DELETE_STATUS):!1;if(i&&(this.distancesTransformFeedback.vao=a.createVertexArray()),a.bindVertexArray(this.distancesTransformFeedback.vao),i){const f=a.createProgram(),m=o(a,a.VERTEX_SHADER,l),_=o(a,a.FRAGMENT_SHADER,c);if(!m||!_)throw new Error("Could not compile shaders for distances computation on GPU.");if(a.attachShader(f,m),a.attachShader(f,_),a.transformFeedbackVaryings(f,["distance"],a.SEPARATE_ATTRIBS),a.linkProgram(f),!a.getProgramParameter(f,a.LINK_STATUS)){const g=a.getProgramInfoLog(f);throw console.error("Fatal error: Failed to link program: "+g),a.deleteProgram(f),a.deleteShader(_),a.deleteShader(m),new Error("Could not link shaders for distances computation on GPU.")}this.distancesTransformFeedback.program=f,this.distancesTransformFeedback.vertexShader=m,this.distancesTransformFeedback.vertexShader=_}if(a.useProgram(this.distancesTransformFeedback.program),this.distancesTransformFeedback.centersLoc=a.getAttribLocation(this.distancesTransformFeedback.program,"center"),this.dynamicMode){this.distancesTransformFeedback.sceneIndexesLoc=a.getAttribLocation(this.distancesTransformFeedback.program,"sceneIndex");for(let f=0;f<this.scenes.length;f++)this.distancesTransformFeedback.transformsLocs[f]=a.getUniformLocation(this.distancesTransformFeedback.program,`transforms[${f}]`)}else this.distancesTransformFeedback.modelViewProjLoc=a.getUniformLocation(this.distancesTransformFeedback.program,"modelViewProj");(i||s)&&(this.distancesTransformFeedback.centersBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),a.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?a.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,a.INT,0,0):a.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,a.FLOAT,!1,0,0),this.dynamicMode&&(this.distancesTransformFeedback.sceneIndexesBuffer=a.createBuffer(),a.bindBuffer(a.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),a.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),a.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,a.UNSIGNED_INT,0,0))),(i||s)&&(this.distancesTransformFeedback.outDistancesBuffer=a.createBuffer()),a.bindBuffer(a.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),a.bufferData(a.ARRAY_BUFFER,n*4,a.STATIC_READ),i&&(this.distancesTransformFeedback.id=a.createTransformFeedback()),a.bindTransformFeedback(a.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),a.bindBufferBase(a.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),h&&d!==!0&&a.useProgram(h),u&&a.bindVertexArray(u),this.lastRenderer=this.renderer,t=n}}());ce(this,"fillTransformsArray",function(){const t=[];return function(n){t.length!==n.length&&(t.length=n.length);for(let i=0;i<this.scenes.length;i++){const a=this.getScene(i).transform.elements;for(let o=0;o<16;o++)t[i*16+o]=a[o]}n.set(t)}}());ce(this,"computeDistancesOnGPU",function(){const t=new He;return function(n,i){if(!this.renderer)return;const s=this.renderer.getContext(),a=s.getParameter(s.VERTEX_ARRAY_BINDING),o=s.getParameter(s.CURRENT_PROGRAM),l=o?s.getProgramParameter(o,s.DELETE_STATUS):!1;if(s.bindVertexArray(this.distancesTransformFeedback.vao),s.useProgram(this.distancesTransformFeedback.program),s.enable(s.RASTERIZER_DISCARD),this.dynamicMode)for(let h=0;h<this.scenes.length;h++)if(t.copy(this.getScene(h).transform),t.premultiply(n),this.integerBasedDistancesComputation){const d=Qt.getIntegerMatrixArray(t),f=[d[2],d[6],d[10],d[14]];s.uniform4i(this.distancesTransformFeedback.transformsLocs[h],f[0],f[1],f[2],f[3])}else s.uniformMatrix4fv(this.distancesTransformFeedback.transformsLocs[h],!1,t.elements);else if(this.integerBasedDistancesComputation){const h=Qt.getIntegerMatrixArray(n),d=[h[2],h[6],h[10]];s.uniform3i(this.distancesTransformFeedback.modelViewProjLoc,d[0],d[1],d[2])}else{const h=[n.elements[2],n.elements[6],n.elements[10]];s.uniform3f(this.distancesTransformFeedback.modelViewProjLoc,h[0],h[1],h[2])}s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.centersLoc),this.integerBasedDistancesComputation?s.vertexAttribIPointer(this.distancesTransformFeedback.centersLoc,4,s.INT,0,0):s.vertexAttribPointer(this.distancesTransformFeedback.centersLoc,4,s.FLOAT,!1,0,0),this.dynamicMode&&(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),s.enableVertexAttribArray(this.distancesTransformFeedback.sceneIndexesLoc),s.vertexAttribIPointer(this.distancesTransformFeedback.sceneIndexesLoc,1,s.UNSIGNED_INT,0,0)),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,this.distancesTransformFeedback.id),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,this.distancesTransformFeedback.outDistancesBuffer),s.beginTransformFeedback(s.POINTS),s.drawArrays(s.POINTS,0,this.getSplatCount()),s.endTransformFeedback(),s.bindBufferBase(s.TRANSFORM_FEEDBACK_BUFFER,0,null),s.bindTransformFeedback(s.TRANSFORM_FEEDBACK,null),s.disable(s.RASTERIZER_DISCARD);const c=s.fenceSync(s.SYNC_GPU_COMMANDS_COMPLETE,0);s.flush();const u=new Promise(h=>{const d=()=>{if(this.disposed)h();else switch(s.clientWaitSync(c,0,0)){case s.TIMEOUT_EXPIRED:return this.computeDistancesOnGPUSyncTimeout=setTimeout(d),this.computeDistancesOnGPUSyncTimeout;case s.WAIT_FAILED:throw new Error("should never get here");default:this.computeDistancesOnGPUSyncTimeout=null,s.deleteSync(c);const p=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao),s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.outDistancesBuffer),s.getBufferSubData(s.ARRAY_BUFFER,0,i),s.bindBuffer(s.ARRAY_BUFFER,null),p&&s.bindVertexArray(p),h()}};this.computeDistancesOnGPUSyncTimeout=setTimeout(d)});return o&&l!==!0&&s.useProgram(o),a&&s.bindVertexArray(a),u}}());ce(this,"getSplatCenter",function(){const t={};return function(n,i,s){this.getLocalSplatParameters(n,t,s),t.splatBuffer.getSplatCenter(t.localIndex,i,t.sceneTransform)}}());ce(this,"getSplatScaleAndRotation",function(){const t={},n=new D;return function(i,s,a,o){this.getLocalSplatParameters(i,t,o),n.x=void 0,n.y=void 0,n.z=void 0,this.splatRenderMode===Ci.TwoD&&(n.z=0),t.splatBuffer.getSplatScaleAndRotation(t.localIndex,s,a,t.sceneTransform,n)}}());ce(this,"getSplatColor",function(){const t={};return function(n,i){this.getLocalSplatParameters(n,t),t.splatBuffer.getSplatColor(t.localIndex,i)}}());this.renderer=void 0,this.splatRenderMode=t,this.dynamicMode=n,this.enableOptionalEffects=i,this.halfPrecisionCovariancesOnGPU=s,this.devicePixelRatio=a,this.enableDistancesComputationOnGPU=o,this.integerBasedDistancesComputation=l,this.antialiased=c,this.kernel2DSize=m,this.maxScreenSpaceSplatSize=u,this.logLevel=h,this.sphericalHarmonicsDegree=d,this.minSphericalHarmonicsDegree=0,this.sceneFadeInRateMultiplier=f,this.scenes=[],this.splatTree=null,this.baseSplatTree=null,this.splatDataTextures={},this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new ri,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!1,this.lastRenderer=null,this.visible=!1}static buildScenes(t,n,i){const s=[];s.length=n.length;for(let a=0;a<n.length;a++){const o=n[a],l=i[a]||{};let c=l.position||[0,0,0],u=l.rotation||[0,0,0,1],h=l.scale||[1,1,1];const d=new D().fromArray(c),f=new St().fromArray(u),m=new D().fromArray(h),_=Qt.createScene(o,d,f,m,l.splatAlphaRemovalThreshold||1,l.opacity,l.visible);t.add(_),s[a]=_}return s}static createScene(t,n,i,s,a,o=1,l=!0){return new Av(t,n,i,s,a,o,l)}static buildSplatIndexMaps(t){const n=[],i=[];let s=0;for(let a=0;a<t.length;a++){const l=t[a].getMaxSplatCount();for(let c=0;c<l;c++)n[s]=c,i[s]=a,s++}return{localSplatIndexMap:n,sceneIndexMap:i}}build(t,n,i=!0,s=!1,a,o,l=!0){this.sceneOptions=n,this.finalBuild=s;const c=Qt.getTotalMaxSplatCountForSplatBuffers(t),u=Qt.buildScenes(this,t,n);if(i)for(let p=0;p<this.scenes.length&&p<u.length;p++){const g=u[p],x=this.getScene(p);g.copyTransformData(x)}this.scenes=u;let h=3;for(let p of t){const g=p.getMinSphericalHarmonicsDegree();g<h&&(h=g)}this.minSphericalHarmonicsDegree=Math.min(h,this.sphericalHarmonicsDegree);let d=!1;if(t.length!==this.lastBuildScenes.length)d=!0;else for(let p=0;p<t.length;p++)if(t[p]!==this.lastBuildScenes[p].splatBuffer){d=!0;break}let f=!0;if((this.scenes.length!==1||this.lastBuildSceneCount!==this.scenes.length||this.lastBuildMaxSplatCount!==c||d)&&(f=!1),!f){this.boundingBox=new ri,l||(this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.firstRenderTime=-1),this.lastBuildScenes=[],this.lastBuildSplatCount=0,this.lastBuildMaxSplatCount=0,this.disposeMeshData(),this.geometry=Sv.build(c),this.splatRenderMode===Ci.ThreeD?this.material=uo.build(this.dynamicMode,this.enableOptionalEffects,this.antialiased,this.maxScreenSpaceSplatSize,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree,this.kernel2DSize):this.material=ho.build(this.dynamicMode,this.enableOptionalEffects,this.splatScale,this.pointCloudModeEnabled,this.minSphericalHarmonicsDegree);const p=Qt.buildSplatIndexMaps(t);this.globalSplatIndexToLocalSplatIndexMap=p.localSplatIndexMap,this.globalSplatIndexToSceneIndexMap=p.sceneIndexMap}const m=this.getSplatCount(!0);this.enableDistancesComputationOnGPU&&this.setupDistancesComputationTransformFeedback();const _=this.refreshGPUDataFromSplatBuffers(f);for(let p=0;p<this.scenes.length;p++)this.lastBuildScenes[p]=this.scenes[p];return this.lastBuildSplatCount=m,this.lastBuildMaxSplatCount=this.getMaxSplatCount(),this.lastBuildSceneCount=this.scenes.length,s&&this.scenes.length>0&&this.buildSplatTree(n.map(p=>p.splatAlphaRemovalThreshold||1),a,o).then(()=>{this.onSplatTreeReadyCallback&&this.onSplatTreeReadyCallback(this.splatTree),this.onSplatTreeReadyCallback=null}),this.visible=this.scenes.length>0,_}freeIntermediateSplatData(){const t=n=>{delete n.source.data,delete n.image,n.onUpdate=null};delete this.splatDataTextures.baseData.covariances,delete this.splatDataTextures.baseData.centers,delete this.splatDataTextures.baseData.colors,delete this.splatDataTextures.baseData.sphericalHarmonics,delete this.splatDataTextures.centerColors.data,delete this.splatDataTextures.covariances.data,this.splatDataTextures.sphericalHarmonics&&delete this.splatDataTextures.sphericalHarmonics.data,this.splatDataTextures.sceneIndexes&&delete this.splatDataTextures.sceneIndexes.data,this.splatDataTextures.centerColors.texture.needsUpdate=!0,this.splatDataTextures.centerColors.texture.onUpdate=()=>{t(this.splatDataTextures.centerColors.texture)},this.splatDataTextures.covariances.texture.needsUpdate=!0,this.splatDataTextures.covariances.texture.onUpdate=()=>{t(this.splatDataTextures.covariances.texture)},this.splatDataTextures.sphericalHarmonics&&(this.splatDataTextures.sphericalHarmonics.texture?(this.splatDataTextures.sphericalHarmonics.texture.needsUpdate=!0,this.splatDataTextures.sphericalHarmonics.texture.onUpdate=()=>{t(this.splatDataTextures.sphericalHarmonics.texture)}):this.splatDataTextures.sphericalHarmonics.textures.forEach(n=>{n.needsUpdate=!0,n.onUpdate=()=>{t(n)}})),this.splatDataTextures.sceneIndexes&&(this.splatDataTextures.sceneIndexes.texture.needsUpdate=!0,this.splatDataTextures.sceneIndexes.texture.onUpdate=()=>{t(this.splatDataTextures.sceneIndexes.texture)})}dispose(){this.disposeMeshData(),this.disposeTextures(),this.disposeSplatTree(),this.enableDistancesComputationOnGPU&&(this.computeDistancesOnGPUSyncTimeout&&(clearTimeout(this.computeDistancesOnGPUSyncTimeout),this.computeDistancesOnGPUSyncTimeout=null),this.disposeDistancesComputationGPUResources()),this.scenes=[],this.distancesTransformFeedback={id:null,vertexShader:null,fragmentShader:null,program:null,centersBuffer:null,sceneIndexesBuffer:null,outDistancesBuffer:null,centersLoc:-1,modelViewProjLoc:-1,sceneIndexesLoc:-1,transformsLocs:[]},this.renderer=null,this.globalSplatIndexToLocalSplatIndexMap=[],this.globalSplatIndexToSceneIndexMap=[],this.lastBuildSplatCount=0,this.lastBuildScenes=[],this.lastBuildMaxSplatCount=0,this.lastBuildSceneCount=0,this.firstRenderTime=-1,this.finalBuild=!1,this.webGLUtils=null,this.boundingBox=new ri,this.calculatedSceneCenter=new D,this.maxSplatDistanceFromSceneCenter=0,this.visibleRegionBufferRadius=0,this.visibleRegionRadius=0,this.visibleRegionFadeStartRadius=0,this.visibleRegionChanging=!1,this.splatScale=1,this.pointCloudModeEnabled=!1,this.disposed=!0,this.lastRenderer=null,this.visible=!1}disposeMeshData(){this.geometry&&this.geometry!==xd&&(this.geometry.dispose(),this.geometry=null),this.material&&(this.material.dispose(),this.material=null)}disposeTextures(){for(let t in this.splatDataTextures)if(this.splatDataTextures.hasOwnProperty(t)){const n=this.splatDataTextures[t];n.texture&&(n.texture.dispose(),n.texture=null)}this.splatDataTextures=null}disposeSplatTree(){this.splatTree&&(this.splatTree.dispose(),this.splatTree=null),this.baseSplatTree&&(this.baseSplatTree.dispose(),this.baseSplatTree=null)}getSplatTree(){return this.splatTree}onSplatTreeReady(t){this.onSplatTreeReadyCallback=t}getDataForDistancesComputation(t,n){const i=this.integerBasedDistancesComputation?this.getIntegerCenters(t,n,!0):this.getFloatCenters(t,n,!0),s=this.getSceneIndexes(t,n);return{centers:i,sceneIndexes:s}}refreshGPUDataFromSplatBuffers(t){const n=this.getSplatCount(!0);this.refreshDataTexturesFromSplatBuffers(t);const i=t?this.lastBuildSplatCount:0,{centers:s,sceneIndexes:a}=this.getDataForDistancesComputation(i,n-1);return this.enableDistancesComputationOnGPU&&this.refreshGPUBuffersForDistancesComputation(s,a,t),{from:i,to:n-1,count:n-i,centers:s,sceneIndexes:a}}refreshGPUBuffersForDistancesComputation(t,n,i=!1){const s=i?this.lastBuildSplatCount:0;this.updateGPUCentersBufferForDistancesComputation(i,t,s),this.updateGPUTransformIndexesBufferForDistancesComputation(i,n,s)}refreshDataTexturesFromSplatBuffers(t){const n=this.getSplatCount(!0),i=this.lastBuildSplatCount,s=n-1;t?this.updateBaseDataFromSplatBuffers(i,s):(this.setupDataTextures(),this.updateBaseDataFromSplatBuffers()),this.updateDataTexturesFromBaseData(i,s),this.updateVisibleRegion(t)}setupDataTextures(){const t=this.getMaxSplatCount(),n=this.getSplatCount(!0);this.disposeTextures();const i=(S,M)=>{const R=new Me(4096,1024);for(;R.x*R.y*S<t*M;)R.y*=2;return R},s=S=>S>=1?Pv:Rv,a=S=>{const M=s(S),R=i(M,6);return{elementsPerTexelStored:M,texSize:R}};let o=this.getTargetCovarianceCompressionLevel();const l=0,c=this.getTargetSphericalHarmonicsCompressionLevel();let u,h,d;if(this.splatRenderMode===Ci.ThreeD){const S=a(o);S.texSize.x*S.texSize.y>vd&&o===0&&(o=1),u=new Float32Array(t*Ya)}else h=new Float32Array(t*3),d=new Float32Array(t*4);const f=new Float32Array(t*3),m=new Uint8Array(t*4);let _=Float32Array;c===1?_=Uint16Array:c===2&&(_=Uint8Array);const p=cr(this.minSphericalHarmonicsDegree),g=this.minSphericalHarmonicsDegree?new _(t*p):void 0,x=i(vl,4),v=new Uint32Array(x.x*x.y*vl);Qt.updateCenterColorsPaddedData(0,n-1,f,m,v);const A=new vi(v,x.x,x.y,or,on);if(A.internalFormat="RGBA32UI",A.needsUpdate=!0,this.material.uniforms.centersColorsTexture.value=A,this.material.uniforms.centersColorsTextureSize.value.copy(x),this.material.uniformsNeedUpdate=!0,this.splatDataTextures={baseData:{covariances:u,scales:h,rotations:d,centers:f,colors:m,sphericalHarmonics:g},centerColors:{data:v,texture:A,size:x}},this.splatRenderMode===Ci.ThreeD){const S=a(o),M=S.elementsPerTexelStored,R=S.texSize;let w=o>=1?Uint32Array:Float32Array;const P=o>=1?Dv:Iv,I=new w(R.x*R.y*P);o===0?I.set(u):Qt.updatePaddedCompressedCovariancesTextureData(u,I,0,0,u.length);let L;if(o>=1)L=new vi(I,R.x,R.y,or,on),L.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=L;else{L=new vi(I,R.x,R.y,ln,zn),this.material.uniforms.covariancesTexture.value=L;const B=new vi(new Uint32Array(32),2,2,or,on);B.internalFormat="RGBA32UI",this.material.uniforms.covariancesTextureHalfFloat.value=B,B.needsUpdate=!0}L.needsUpdate=!0,this.material.uniforms.covariancesAreHalfFloat.value=o>=1?1:0,this.material.uniforms.covariancesTextureSize.value.copy(R),this.splatDataTextures.covariances={data:I,texture:L,size:R,compressionLevel:o,elementsPerTexelStored:M,elementsPerTexelAllocated:P}}else{const M=i(Al,6);let R=Float32Array,w=zn;const P=new R(M.x*M.y*Al);Qt.updateScaleRotationsPaddedData(0,n-1,h,d,P);const I=new vi(P,M.x,M.y,ln,w);I.needsUpdate=!0,this.material.uniforms.scaleRotationsTexture.value=I,this.material.uniforms.scaleRotationsTextureSize.value.copy(M),this.splatDataTextures.scaleRotations={data:P,texture:I,size:M,compressionLevel:l}}if(g){const S=c===2?mn:ui;let M=p;M%2!==0&&M++;const R=4,w=ln;let P=i(R,M);if(P.x*P.y<=vd){const I=P.x*P.y*R,L=new _(I);for(let U=0;U<n;U++){const O=p*U,q=M*U;for(let G=0;G<p;G++)L[q+G]=g[O+G]}const B=new vi(L,P.x,P.y,w,S);B.needsUpdate=!0,this.material.uniforms.sphericalHarmonicsTexture.value=B,this.splatDataTextures.sphericalHarmonics={componentCount:p,paddedComponentCount:M,data:L,textureCount:1,texture:B,size:P,compressionLevel:c,elementsPerTexel:R}}else{const I=p/3;M=I,M%2!==0&&M++,P=i(R,M);const L=P.x*P.y*R,B=[this.material.uniforms.sphericalHarmonicsTextureR,this.material.uniforms.sphericalHarmonicsTextureG,this.material.uniforms.sphericalHarmonicsTextureB],U=[],O=[];for(let q=0;q<3;q++){const G=new _(L);U.push(G);for(let ae=0;ae<n;ae++){const re=p*ae,xe=M*ae;if(I>=3){for(let Ae=0;Ae<3;Ae++)G[xe+Ae]=g[re+q*3+Ae];if(I>=8)for(let Ae=0;Ae<5;Ae++)G[xe+3+Ae]=g[re+9+q*5+Ae]}}const J=new vi(G,P.x,P.y,w,S);O.push(J),J.needsUpdate=!0,B[q].value=J}this.material.uniforms.sphericalHarmonicsMultiTextureMode.value=1,this.splatDataTextures.sphericalHarmonics={componentCount:p,componentCountPerChannel:I,paddedComponentCount:M,data:U,textureCount:3,textures:O,size:P,compressionLevel:c,elementsPerTexel:R}}this.material.uniforms.sphericalHarmonicsTextureSize.value.copy(P),this.material.uniforms.sphericalHarmonics8BitMode.value=c===2?1:0;for(let I=0;I<this.scenes.length;I++){const L=this.scenes[I].splatBuffer;this.material.uniforms.sphericalHarmonics8BitCompressionRangeMin.value[I]=L.minSphericalHarmonicsCoeff,this.material.uniforms.sphericalHarmonics8BitCompressionRangeMax.value[I]=L.maxSphericalHarmonicsCoeff}this.material.uniformsNeedUpdate=!0}const y=i(Sd,4),T=new Uint32Array(y.x*y.y*Sd);for(let S=0;S<n;S++)T[S]=this.globalSplatIndexToSceneIndexMap[S];const C=new vi(T,y.x,y.y,Mo,on);C.internalFormat="R32UI",C.needsUpdate=!0,this.material.uniforms.sceneIndexesTexture.value=C,this.material.uniforms.sceneIndexesTextureSize.value.copy(y),this.material.uniformsNeedUpdate=!0,this.splatDataTextures.sceneIndexes={data:T,texture:C,size:y},this.material.uniforms.sceneCount.value=this.scenes.length}updateBaseDataFromSplatBuffers(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,a=this.splatDataTextures.scaleRotations,o=a?a.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0;this.fillSplatDataArrays(this.splatDataTextures.baseData.covariances,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,this.splatDataTextures.baseData.sphericalHarmonics,void 0,s,o,c,t,n,t)}updateDataTexturesFromBaseData(t,n){const i=this.splatDataTextures.covariances,s=i?i.compressionLevel:void 0,a=this.splatDataTextures.scaleRotations,o=a?a.compressionLevel:void 0,l=this.splatDataTextures.sphericalHarmonics,c=l?l.compressionLevel:0,u=this.splatDataTextures.centerColors,h=u.data,d=u.texture;Qt.updateCenterColorsPaddedData(t,n,this.splatDataTextures.baseData.centers,this.splatDataTextures.baseData.colors,h);const f=this.renderer?this.renderer.properties.get(d):null;if(!f||!f.__webglTexture?d.needsUpdate=!0:this.updateDataTexture(h,u.texture,u.size,f,vl,wv,4,t,n),i){const v=i.texture,A=t*Ya,y=n*Ya;if(s===0)for(let C=A;C<=y;C++){const S=this.splatDataTextures.baseData.covariances[C];i.data[C]=S}else Qt.updatePaddedCompressedCovariancesTextureData(this.splatDataTextures.baseData.covariances,i.data,t*i.elementsPerTexelAllocated,A,y);const T=this.renderer?this.renderer.properties.get(v):null;!T||!T.__webglTexture?v.needsUpdate=!0:s===0?this.updateDataTexture(i.data,i.texture,i.size,T,i.elementsPerTexelStored,Ya,4,t,n):this.updateDataTexture(i.data,i.texture,i.size,T,i.elementsPerTexelAllocated,i.elementsPerTexelAllocated,2,t,n)}if(a){const v=a.data,A=a.texture,y=6,T=o===0?4:2;Qt.updateScaleRotationsPaddedData(t,n,this.splatDataTextures.baseData.scales,this.splatDataTextures.baseData.rotations,v);const C=this.renderer?this.renderer.properties.get(A):null;!C||!C.__webglTexture?A.needsUpdate=!0:this.updateDataTexture(v,a.texture,a.size,C,Al,y,T,t,n)}const m=this.splatDataTextures.baseData.sphericalHarmonics;if(m){let v=4;c===1?v=2:c===2&&(v=1);const A=(C,S,M,R,w)=>{const P=this.renderer?this.renderer.properties.get(C):null;!P||!P.__webglTexture?C.needsUpdate=!0:this.updateDataTexture(R,C,S,P,M,w,v,t,n)},y=l.componentCount,T=l.paddedComponentCount;if(l.textureCount===1){const C=l.data;for(let S=t;S<=n;S++){const M=y*S,R=T*S;for(let w=0;w<y;w++)C[R+w]=m[M+w]}A(l.texture,l.size,l.elementsPerTexel,C,T)}else{const C=l.componentCountPerChannel;for(let S=0;S<3;S++){const M=l.data[S];for(let R=t;R<=n;R++){const w=y*R,P=T*R;if(C>=3){for(let I=0;I<3;I++)M[P+I]=m[w+S*3+I];if(C>=8)for(let I=0;I<5;I++)M[P+3+I]=m[w+9+S*5+I]}}A(l.textures[S],l.size,l.elementsPerTexel,M,T)}}}const _=this.splatDataTextures.sceneIndexes,p=_.data;for(let v=this.lastBuildSplatCount;v<=n;v++)p[v]=this.globalSplatIndexToSceneIndexMap[v];const g=_.texture,x=this.renderer?this.renderer.properties.get(g):null;!x||!x.__webglTexture?g.needsUpdate=!0:this.updateDataTexture(p,_.texture,_.size,x,1,1,1,this.lastBuildSplatCount,n)}getTargetCovarianceCompressionLevel(){return this.halfPrecisionCovariancesOnGPU?1:0}getTargetSphericalHarmonicsCompressionLevel(){return Math.max(1,this.getMaximumSplatBufferCompressionLevel())}getMaximumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel>t)&&(t=s.compressionLevel)}return t}getMinimumSplatBufferCompressionLevel(){let t;for(let n=0;n<this.scenes.length;n++){const s=this.getScene(n).splatBuffer;(n===0||s.compressionLevel<t)&&(t=s.compressionLevel)}return t}static computeTextureUpdateRegion(t,n,i,s,a){const o=a/s,l=t*o,c=Math.floor(l/i),u=c*i*s,h=n*o,d=Math.floor(h/i),f=d*i*s+i*s;return{dataStart:u,dataEnd:f,startRow:c,endRow:d}}updateDataTexture(t,n,i,s,a,o,l,c,u){const h=this.renderer.getContext(),d=Qt.computeTextureUpdateRegion(c,u,i.x,a,o),f=d.dataEnd-d.dataStart,m=new t.constructor(t.buffer,d.dataStart*l,f),_=d.endRow-d.startRow+1,p=this.webGLUtils.convert(n.type),g=this.webGLUtils.convert(n.format,n.colorSpace),x=h.getParameter(h.TEXTURE_BINDING_2D);h.bindTexture(h.TEXTURE_2D,s.__webglTexture),h.texSubImage2D(h.TEXTURE_2D,0,0,d.startRow,i.x,_,g,p,m),h.bindTexture(h.TEXTURE_2D,x)}static updatePaddedCompressedCovariancesTextureData(t,n,i,s,a){let o=new DataView(n.buffer),l=i,c=0;for(let u=s;u<=a;u+=2)o.setUint16(l*2,t[u],!0),o.setUint16(l*2+2,t[u+1],!0),l+=2,c++,c>=3&&(l+=2,c=0)}static updateCenterColorsPaddedData(t,n,i,s,a){for(let o=t;o<=n;o++){const l=o*4,c=o*3,u=o*4;a[u]=hA(s,l),a[u+1]=fl(i[c]),a[u+2]=fl(i[c+1]),a[u+3]=fl(i[c+2])}}static updateScaleRotationsPaddedData(t,n,i,s,a){for(let l=t;l<=n;l++){const c=l*3,u=l*4,h=l*6;a[h]=i[c],a[h+1]=i[c+1],a[h+2]=i[c+2],a[h+3]=s[u],a[h+4]=s[u+1],a[h+5]=s[u+2]}}updateVisibleRegion(t){const n=this.getSplatCount(!0),i=new D;if(!t){const a=new D;this.scenes.forEach(o=>{a.add(o.splatBuffer.sceneCenter)}),a.multiplyScalar(1/this.scenes.length),this.calculatedSceneCenter.copy(a),this.material.uniforms.sceneCenter.value.copy(this.calculatedSceneCenter),this.material.uniformsNeedUpdate=!0}const s=t?this.lastBuildSplatCount:0;for(let a=s;a<n;a++){this.getSplatCenter(a,i,!0);const o=i.sub(this.calculatedSceneCenter).length();o>this.maxSplatDistanceFromSceneCenter&&(this.maxSplatDistanceFromSceneCenter=o)}this.maxSplatDistanceFromSceneCenter-this.visibleRegionBufferRadius>Ad&&(this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter,this.visibleRegionRadius=Math.max(this.visibleRegionBufferRadius-Ad,0)),this.finalBuild&&(this.visibleRegionRadius=this.visibleRegionBufferRadius=this.maxSplatDistanceFromSceneCenter),this.updateVisibleRegionFadeDistance()}updateVisibleRegionFadeDistance(t=Xr.Default){const n=Fv*this.sceneFadeInRateMultiplier,i=Lv*this.sceneFadeInRateMultiplier,s=this.finalBuild?n:i,a=t===Xr.Default?s:i;this.visibleRegionFadeStartRadius=(this.visibleRegionRadius-this.visibleRegionFadeStartRadius)*a+this.visibleRegionFadeStartRadius;const l=(this.visibleRegionBufferRadius>0?this.visibleRegionFadeStartRadius/this.visibleRegionBufferRadius:0)>.99,c=l||t===Xr.Instant?1:0;this.material.uniforms.visibleRegionFadeStartRadius.value=this.visibleRegionFadeStartRadius,this.material.uniforms.visibleRegionRadius.value=this.visibleRegionRadius,this.material.uniforms.firstRenderTime.value=this.firstRenderTime,this.material.uniforms.currentTime.value=performance.now(),this.material.uniforms.fadeInComplete.value=c,this.material.uniformsNeedUpdate=!0,this.visibleRegionChanging=!l}updateRenderIndexes(t,n){const i=this.geometry;i.attributes.splatIndex.set(t),i.attributes.splatIndex.needsUpdate=!0,n>0&&this.firstRenderTime===-1&&(this.firstRenderTime=performance.now()),i.instanceCount=n,i.setDrawRange(0,n)}updateTransforms(){for(let t=0;t<this.scenes.length;t++)this.getScene(t).updateTransform(this.dynamicMode)}setSplatScale(t=1){this.splatScale=t,this.material.uniforms.splatScale.value=t,this.material.uniformsNeedUpdate=!0}getSplatScale(){return this.splatScale}setPointCloudModeEnabled(t){this.pointCloudModeEnabled=t,this.material.uniforms.pointCloudModeEnabled.value=t?1:0,this.material.uniformsNeedUpdate=!0}getPointCloudModeEnabled(){return this.pointCloudModeEnabled}getSplatDataTextures(){return this.splatDataTextures}getSplatCount(t=!1){return t?Qt.getTotalSplatCountForScenes(this.scenes):this.lastBuildSplatCount}static getTotalSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getSplatCount());return n}static getTotalSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getSplatCount();return n}getMaxSplatCount(){return Qt.getTotalMaxSplatCountForScenes(this.scenes)}static getTotalMaxSplatCountForScenes(t){let n=0;for(let i of t)i&&i.splatBuffer&&(n+=i.splatBuffer.getMaxSplatCount());return n}static getTotalMaxSplatCountForSplatBuffers(t){let n=0;for(let i of t)n+=i.getMaxSplatCount();return n}disposeDistancesComputationGPUResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.vao&&(t.deleteVertexArray(this.distancesTransformFeedback.vao),this.distancesTransformFeedback.vao=null),this.distancesTransformFeedback.program&&(t.deleteProgram(this.distancesTransformFeedback.program),t.deleteShader(this.distancesTransformFeedback.vertexShader),t.deleteShader(this.distancesTransformFeedback.fragmentShader),this.distancesTransformFeedback.program=null,this.distancesTransformFeedback.vertexShader=null,this.distancesTransformFeedback.fragmentShader=null),this.disposeDistancesComputationGPUBufferResources(),this.distancesTransformFeedback.id&&(t.deleteTransformFeedback(this.distancesTransformFeedback.id),this.distancesTransformFeedback.id=null)}disposeDistancesComputationGPUBufferResources(){if(!this.renderer)return;const t=this.renderer.getContext();this.distancesTransformFeedback.centersBuffer&&(this.distancesTransformFeedback.centersBuffer=null,t.deleteBuffer(this.distancesTransformFeedback.centersBuffer)),this.distancesTransformFeedback.outDistancesBuffer&&(t.deleteBuffer(this.distancesTransformFeedback.outDistancesBuffer),this.distancesTransformFeedback.outDistancesBuffer=null)}setRenderer(t){if(t!==this.renderer){this.renderer=t;const n=this.renderer.getContext(),i=new Tv(n),s=new Ev(n,i,{});if(i.init(s),this.webGLUtils=new Tf(n,i),this.enableDistancesComputationOnGPU&&this.getSplatCount()>0){this.setupDistancesComputationTransformFeedback();const{centers:a,sceneIndexes:o}=this.getDataForDistancesComputation(0,this.getSplatCount()-1);this.refreshGPUBuffersForDistancesComputation(a,o)}}}updateGPUCentersBufferForDistancesComputation(t,n,i){if(!this.renderer)return;const s=this.renderer.getContext(),a=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const o=this.integerBasedDistancesComputation?Uint32Array:Float32Array,l=16,c=i*l;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.centersBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,c,n);else{const u=new o(this.getMaxSplatCount()*l);u.set(n),s.bufferData(s.ARRAY_BUFFER,u,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),a&&s.bindVertexArray(a)}updateGPUTransformIndexesBufferForDistancesComputation(t,n,i){if(!this.renderer||!this.dynamicMode)return;const s=this.renderer.getContext(),a=s.getParameter(s.VERTEX_ARRAY_BINDING);s.bindVertexArray(this.distancesTransformFeedback.vao);const o=i*4;if(s.bindBuffer(s.ARRAY_BUFFER,this.distancesTransformFeedback.sceneIndexesBuffer),t)s.bufferSubData(s.ARRAY_BUFFER,o,n);else{const l=new Uint32Array(this.getMaxSplatCount()*4);l.set(n),s.bufferData(s.ARRAY_BUFFER,l,s.STATIC_DRAW)}s.bindBuffer(s.ARRAY_BUFFER,null),a&&s.bindVertexArray(a)}getSceneIndexes(t,n){let i;const s=n-t+1;i=new Uint32Array(s);for(let a=t;a<=n;a++)i[a]=this.globalSplatIndexToSceneIndexMap[a];return i}getLocalSplatParameters(t,n,i){i==null&&(i=!this.dynamicMode),n.splatBuffer=this.getSplatBufferForSplat(t),n.localIndex=this.getSplatLocalIndex(t),n.sceneTransform=i?this.getSceneTransformForSplat(t):null}fillSplatDataArrays(t,n,i,s,a,o,l,c=0,u=0,h=1,d,f,m=0,_){const p=new D;p.x=void 0,p.y=void 0,this.splatRenderMode===Ci.ThreeD?p.z=void 0:p.z=1;const g=new He;let x=0,v=this.scenes.length-1;_!=null&&_>=0&&_<=this.scenes.length&&(x=_,v=_);for(let A=x;A<=v;A++){l==null&&(l=!this.dynamicMode);const y=this.getScene(A),T=y.splatBuffer;let C;if(l&&(this.getSceneTransform(A,g),C=g),t&&T.fillSplatCovarianceArray(t,C,d,f,m,c),n||i){if(!n||!i)throw new Error('SplatMesh::fillSplatDataArrays() -> "scales" and "rotations" must both be valid.');T.fillSplatScaleRotationArray(n,i,C,d,f,m,u,p)}s&&T.fillSplatCenterArray(s,C,d,f,m),a&&T.fillSplatColorArray(a,y.minimumAlpha,d,f,m),o&&T.fillSphericalHarmonicsArray(o,this.minSphericalHarmonicsDegree,C,d,f,m,h),m+=T.getSplatCount()}}getIntegerCenters(t,n,i=!1){const s=n-t+1,a=new Float32Array(s*3);this.fillSplatDataArrays(null,null,null,a,null,null,void 0,void 0,void 0,void 0,t);let o,l=i?4:3;o=new Int32Array(s*l);for(let c=0;c<s;c++){for(let u=0;u<3;u++)o[c*l+u]=Math.round(a[c*3+u]*1e3);i&&(o[c*l+3]=1e3)}return o}getFloatCenters(t,n,i=!1){const s=n-t+1,a=new Float32Array(s*3);if(this.fillSplatDataArrays(null,null,null,a,null,null,void 0,void 0,void 0,void 0,t),!i)return a;let o=new Float32Array(s*4);for(let l=0;l<s;l++){for(let c=0;c<3;c++)o[l*4+c]=a[l*3+c];o[l*4+3]=1}return o}getSceneTransform(t,n){const i=this.getScene(t);i.updateTransform(this.dynamicMode),n.copy(i.transform)}getScene(t){if(t<0||t>=this.scenes.length)throw new Error("SplatMesh::getScene() -> Invalid scene index.");return this.scenes[t]}getSceneCount(){return this.scenes.length}getSplatBufferForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).splatBuffer}getSceneIndexForSplat(t){return this.globalSplatIndexToSceneIndexMap[t]}getSceneTransformForSplat(t){return this.getScene(this.globalSplatIndexToSceneIndexMap[t]).transform}getSplatLocalIndex(t){return this.globalSplatIndexToLocalSplatIndexMap[t]}static getIntegerMatrixArray(t){const n=t.elements,i=[];for(let s=0;s<16;s++)i[s]=Math.round(n[s]*1e3);return i}computeBoundingBox(t=!1,n){let i=this.getSplatCount();if(n!=null){if(n<0||n>=this.scenes.length)throw new Error("SplatMesh::computeBoundingBox() -> Invalid scene index.");i=this.scenes[n].splatBuffer.getSplatCount()}const s=new Float32Array(i*3);this.fillSplatDataArrays(null,null,null,s,null,null,t,void 0,void 0,void 0,void 0,n);const a=new D,o=new D;for(let l=0;l<i;l++){const c=l*3,u=s[c],h=s[c+1],d=s[c+2];(l===0||u<a.x)&&(a.x=u),(l===0||h<a.y)&&(a.y=h),(l===0||d<a.z)&&(a.z=d),(l===0||u>o.x)&&(o.x=u),(l===0||h>o.y)&&(o.y=h),(l===0||d>o.z)&&(o.z=d)}return new ri(a,o)}}var Bv="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEbA2AAAGAQf39/f39/f39/f39/f39/fwBgAAF/AhIBA2VudgZtZW1vcnkCAwCAgAQDBAMAAQIHVAQRX193YXNtX2NhbGxfY3RvcnMAABhfX3dhc21fYXBwbHlfZGF0YV9yZWxvY3MAAAtzb3J0SW5kZXhlcwABE2Vtc2NyaXB0ZW5fdGxzX2luaXQAAgqWEAMDAAELihAEAXwDewN/A30gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEBA0AgAyABQQJ0IgVqIAIgACAFaigCAEECdGooAgAiBTYCACAFIAogBSAKSBshCiAFIA0gBSANShshDSABQQFqIgEgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiFWooAgAiFkECdGooAgAiFEcEQAJ/IAX9CQI4IAggFEEGdGoiDv0JAgwgDioCHP0gASAOKgIs/SACIA4qAjz9IAP95gEgBf0JAiggDv0JAgggDioCGP0gASAOKgIo/SACIA4qAjj9IAP95gEgBf0JAgggDv0JAgAgDioCEP0gASAOKgIg/SACIA4qAjD9IAP95gEgBf0JAhggDv0JAgQgDioCFP0gASAOKgIk/SACIA4qAjT9IAP95gH95AH95AH95AEiEf1f/QwAAAAAAECPQAAAAAAAQI9AIhL98gEiE/0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBP9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/REgDv0cAQJ/IBEgEf0NCAkKCwwNDg8AAAAAAAAAAP1fIBL98gEiEf0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9HAICfyAR/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAyESIBQhDwsgAyAVaiABIBZBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmogEf0bA2oiDjYCACAOIAogCiAOShshCiAOIA0gDSAOSBshDSACQQFqIgIgC0cNAAsMAwsCfyAFKgIIu/0UIAUqAhi7/SIB/QwAAAAAAECPQAAAAAAAQI9A/fIBIhH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIQ4CfyAR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyECAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQIgAv0RIA79HAEgBf0cAiESIAwhBQNAIAMgBUECdCICaiABIAAgAmooAgBBBHRq/QAAACAS/bUBIhH9GwAgEf0bAWogEf0bAmoiAjYCACACIAogAiAKSBshCiACIA0gAiANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEBA0AgAyABQQJ0IgVqAn8gAiAAIAVqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAFBAWoiASALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIRcgBSoCGCEYIAUqAgghGUH4////ByEKQYiAgIB4IQ0gDCEFA0ACfyAXIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCAZIAIqAgCUIBggAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIUaigCAEECdCIVaigCACIORwRAIAX9CQI4IAggDkEGdGoiD/0JAgwgDyoCHP0gASAPKgIs/SACIA8qAjz9IAP95gEgBf0JAiggD/0JAgggDyoCGP0gASAPKgIo/SACIA8qAjj9IAP95gEgBf0JAgggD/0JAgAgDyoCEP0gASAPKgIg/SACIA8qAjD9IAP95gEgBf0JAhggD/0JAgQgDyoCFP0gASAPKgIk/SACIA8qAjT9IAP95gH95AH95AH95AEhESAOIQ8LIAMgFGoCfyAR/R8DIAEgFUECdCIOQQxyaioCAJQgEf0fAiABIA5BCHJqKgIAlCAR/R8AIAEgDmoqAgCUIBH9HwEgASAOQQRyaioCAJSSkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSACQQFqIgIgC0cNAAsMAQtBiICAgHghDUH4////ByEKCyALIAxLBEAgCUEBa7MgDbIgCrKTlSEXIAwhDQNAAn8gFyADIA1BAnRqIgEoAgAgCmuylCIYi0MAAABPXQRAIBioDAELQYCAgIB4CyEOIAEgDjYCACAEIA5BAnRqIgEgASgCAEEBajYCACANQQFqIg0gC0cNAAsLIAlBAk8EQCAEKAIAIQ1BASEKA0AgBCAKQQJ0aiIBIAEoAgAgDWoiDTYCACAKQQFqIgogCUcNAAsLIAxBAEoEQCAMIQoDQCAGIApBAWsiAUECdCICaiAAIAJqKAIANgIAIApBAUshAiABIQogAg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCwsEAEEACw==",yd="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACEgEDZW52Bm1lbW9yeQIDAICABAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=",Uv="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQrrDwICAAvlDwQBfAN7B30DfyALIAprIQwCQAJAIA4EQCANBEBB+P///wchCkGIgICAeCENIAsgDE0NAyAMIQUDQCADIAVBAnQiAWogAiAAIAFqKAIAQQJ0aigCACIBNgIAIAEgCiABIApIGyEKIAEgDSABIA1KGyENIAVBAWoiBSALRw0ACwwDCyAPBEAgCyAMTQ0CQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIcaigCACIdQQJ0aigCACIbRwRAAn8gBf0JAjggCCAbQQZ0aiIO/QkCDCAOKgIc/SABIA4qAiz9IAIgDioCPP0gA/3mASAF/QkCKCAO/QkCCCAOKgIY/SABIA4qAij9IAIgDioCOP0gA/3mASAF/QkCCCAO/QkCACAOKgIQ/SABIA4qAiD9IAIgDioCMP0gA/3mASAF/QkCGCAO/QkCBCAOKgIU/SABIA4qAiT9IAIgDioCNP0gA/3mAf3kAf3kAf3kASIR/V/9DAAAAAAAQI9AAAAAAABAj0AiEv3yASIT/SEBIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOAn8gE/0hACIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAv9ESAO/RwBAn8gESAR/Q0ICQoLDA0ODwABAgMAAQID/V8gEv3yASIR/SEAIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4C/0cAgJ/IBH9IQEiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgL/RwDIRIgGyEPCyADIBxqIAEgHUEEdGr9AAAAIBL9tQEiEf0bACAR/RsBaiAR/RsCaiAR/RsDaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAgi7/RQgBSoCGLv9IgH9DAAAAAAAQI9AAAAAAABAj0D98gEiEf0hASIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDgJ/IBH9IQAiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLAn8gBSoCKLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEFQfj///8HIQpBiICAgHghDSALIAxNDQL9ESAO/RwBIAX9HAIhEiAMIQUDQCADIAVBAnQiAmogASAAIAJqKAIAQQR0av0AAAAgEv21ASIR/RsAIBH9GwFqIBH9GwJqIgI2AgAgAiAKIAIgCkgbIQogAiANIAIgDUobIQ0gBUEBaiIFIAtHDQALDAILIA0EQEH4////ByEKQYiAgIB4IQ0gCyAMTQ0CIAwhBQNAIAMgBUECdCIBagJ/IAIgACABaigCAEECdGoqAgC7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAsiDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgD0UEQCALIAxNDQEgBSoCKCEUIAUqAhghFSAFKgIIIRZB+P///wchCkGIgICAeCENIAwhBQNAAn8gFCABIAAgBUECdCIHaigCAEEEdGoiAioCCJQgFiACKgIAlCAVIAIqAgSUkpK7RAAAAAAAALBAoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshDiADIAdqIA42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gBUEBaiIFIAtHDQALDAILIAsgDE0NAEF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiG2ooAgBBAnQiHGooAgAiDkcEQCAFKgI4IhQgCCAOQQZ0aiIPKgI8lCAFKgIoIhUgDyoCOJQgBSoCCCIWIA8qAjCUIAUqAhgiFyAPKgI0lJKSkiEYIBQgDyoCLJQgFSAPKgIolCAWIA8qAiCUIBcgDyoCJJSSkpIhGSAUIA8qAhyUIBUgDyoCGJQgFiAPKgIQlCAXIA8qAhSUkpKSIRogFCAPKgIMlCAVIA8qAgiUIBYgDyoCAJQgFyAPKgIElJKSkiEUIA4hDwsgAyAbagJ/IBggASAcQQJ0aiIOKgIMlCAZIA4qAgiUIBQgDioCAJQgGiAOKgIElJKSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAJBAWoiAiALRw0ACwwBC0GIgICAeCENQfj///8HIQoLIAsgDEsEQCAJQQFrsyANsiAKspOVIRQgDCENA0ACfyAUIAMgDUECdGoiASgCACAKa7KUIhWLQwAAAE9dBEAgFagMAQtBgICAgHgLIQ4gASAONgIAIAQgDkECdGoiASABKAIAQQFqNgIAIA1BAWoiDSALRw0ACwsgCUECTwRAIAQoAgAhDUEBIQoDQCAEIApBAnRqIgEgASgCACANaiINNgIAIApBAWoiCiAJRw0ACwsgDEEASgRAIAwhCgNAIAYgCkEBayIBQQJ0IgJqIAAgAmooAgA2AgAgCkEBSyABIQoNAAsLIAsgDEoEQCALIQoDQCAGIAsgBCADIApBAWsiCkECdCIBaigCAEECdGoiAigCACIFa0ECdGogACABaigCADYCACACIAVBAWs2AgAgCiAMSg0ACwsL",Ov="AGFzbQEAAAAADwhkeWxpbmsuMAEEAAAAAAEXAmAAAGAQf39/f39/f39/f39/f39/fwACDwEDZW52Bm1lbW9yeQIAAAMDAgABBz4DEV9fd2FzbV9jYWxsX2N0b3JzAAAYX193YXNtX2FwcGx5X2RhdGFfcmVsb2NzAAALc29ydEluZGV4ZXMAAQqiDwICAAucDwMBfAd9Bn8gCyAKayEMAkACQCAOBEAgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQMgDCEFA0AgAyAFQQJ0IgFqIAIgACABaigCAEECdGooAgAiATYCACABIAogASAKSBshCiABIA0gASANShshDSAFQQFqIgUgC0cNAAsMAwsgDwRAIAsgDE0NAkF/IQ9B+P///wchCkGIgICAeCENIAwhAgNAIA8gByAAIAJBAnQiGmooAgBBAnQiG2ooAgAiDkcEQAJ/IAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRgCfyARIA8qAiyUIBIgDyoCKJQgEyAPKgIglCAUIA8qAiSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRkCfyARIA8qAhyUIBIgDyoCGJQgEyAPKgIQlCAUIA8qAhSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIRwCfyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSu0QAAAAAAECPQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIR0gDiEPCyADIBpqIAEgG0ECdGoiDigCBCAcbCAOKAIAIB1saiAOKAIIIBlsaiAOKAIMIBhsaiIONgIAIA4gCiAKIA5KGyEKIA4gDSANIA5IGyENIAJBAWoiAiALRw0ACwwDCwJ/IAUqAii7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshAgJ/IAUqAhi7RAAAAAAAQI9AoiIQmUQAAAAAAADgQWMEQCAQqgwBC0GAgICAeAshByALIAxNAn8gBSoCCLtEAAAAAABAj0CiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEPQfj///8HIQpBiICAgHghDQ0CIAwhBQNAIAMgBUECdCIIaiABIAAgCGooAgBBBHRqIggoAgQgB2wgCCgCACAPbGogCCgCCCACbGoiCDYCACAIIAogCCAKSBshCiAIIA0gCCANShshDSAFQQFqIgUgC0cNAAsMAgsgDQRAQfj///8HIQpBiICAgHghDSALIAxNDQIgDCEFA0AgAyAFQQJ0IgFqAn8gAiAAIAFqKAIAQQJ0aioCALtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyIONgIAIAogDiAKIA5IGyEKIA0gDiANIA5KGyENIAVBAWoiBSALRw0ACwwCCyAPRQRAIAsgDE0NASAFKgIoIREgBSoCGCESIAUqAgghE0H4////ByEKQYiAgIB4IQ0gDCEFA0ACfyARIAEgACAFQQJ0IgdqKAIAQQR0aiICKgIIlCATIAIqAgCUIBIgAioCBJSSkrtEAAAAAAAAsECiIhCZRAAAAAAAAOBBYwRAIBCqDAELQYCAgIB4CyEOIAMgB2ogDjYCACAKIA4gCiAOSBshCiANIA4gDSAOShshDSAFQQFqIgUgC0cNAAsMAgsgCyAMTQ0AQX8hD0H4////ByEKQYiAgIB4IQ0gDCECA0AgDyAHIAAgAkECdCIYaigCAEECdCIZaigCACIORwRAIAUqAjgiESAIIA5BBnRqIg8qAjyUIAUqAigiEiAPKgI4lCAFKgIIIhMgDyoCMJQgBSoCGCIUIA8qAjSUkpKSIRUgESAPKgIslCASIA8qAiiUIBMgDyoCIJQgFCAPKgIklJKSkiEWIBEgDyoCHJQgEiAPKgIYlCATIA8qAhCUIBQgDyoCFJSSkpIhFyARIA8qAgyUIBIgDyoCCJQgEyAPKgIAlCAUIA8qAgSUkpKSIREgDiEPCyADIBhqAn8gFSABIBlBAnRqIg4qAgyUIBYgDioCCJQgESAOKgIAlCAXIA4qAgSUkpKSu0QAAAAAAACwQKIiEJlEAAAAAAAA4EFjBEAgEKoMAQtBgICAgHgLIg42AgAgCiAOIAogDkgbIQogDSAOIA0gDkobIQ0gAkEBaiICIAtHDQALDAELQYiAgIB4IQ1B+P///wchCgsgCyAMSwRAIAlBAWuzIA2yIAqyk5UhESAMIQ0DQAJ/IBEgAyANQQJ0aiIBKAIAIAprspQiEotDAAAAT10EQCASqAwBC0GAgICAeAshDiABIA42AgAgBCAOQQJ0aiIBIAEoAgBBAWo2AgAgDUEBaiINIAtHDQALCyAJQQJPBEAgBCgCACENQQEhCgNAIAQgCkECdGoiASABKAIAIA1qIg02AgAgCkEBaiIKIAlHDQALCyAMQQBKBEAgDCEKA0AgBiAKQQFrIgFBAnQiAmogACACaigCADYCACAKQQFLIAEhCg0ACwsgCyAMSgRAIAshCgNAIAYgCyAEIAMgCkEBayIKQQJ0IgFqKAIAQQJ0aiICKAIAIgVrQQJ0aiAAIAFqKAIANgIAIAIgBUEBazYCACAKIAxKDQALCws=";function Nv(r){let e,t,n,i,s,a,o,l,c,u,h,d,f,m,_,p,g,x,v,A;function y(T,C,S,M,R,w,P){const I=performance.now();if(!n&&(new Uint32Array(t,o,R.byteLength/A.BytesPerInt).set(R),new Float32Array(t,u,P.byteLength/A.BytesPerFloat).set(P),M)){let q;i?q=new Int32Array(t,h,w.byteLength/A.BytesPerInt):q=new Float32Array(t,h,w.byteLength/A.BytesPerFloat),q.set(w)}p||(p=new Uint32Array(x)),new Float32Array(t,_,16).set(S),new Uint32Array(t,f,x).set(p),e.exports.sortIndexes(o,m,h,d,f,_,l,c,u,x,T,C,a,M,i,s);const L={sortDone:!0,splatSortCount:T,splatRenderCount:C,sortTime:0};if(!n){const U=new Uint32Array(t,l,C);(!g||g.length<C)&&(g=new Uint32Array(C)),g.set(U),L.sortedIndexes=g}const B=performance.now();L.sortTime=B-I,r.postMessage(L)}r.onmessage=T=>{if(T.data.centers)centers=T.data.centers,sceneIndexes=T.data.sceneIndexes,i?new Int32Array(t,m+T.data.range.from*A.BytesPerInt*4,T.data.range.count*4).set(new Int32Array(centers)):new Float32Array(t,m+T.data.range.from*A.BytesPerFloat*4,T.data.range.count*4).set(new Float32Array(centers)),s&&new Uint32Array(t,c+T.data.range.from*4,T.data.range.count).set(new Uint32Array(sceneIndexes)),v=T.data.range.from+T.data.range.count;else if(T.data.sort){const C=Math.min(T.data.sort.splatRenderCount||0,v),S=Math.min(T.data.sort.splatSortCount||0,v),M=T.data.sort.usePrecomputedDistances;let R,w,P;n||(R=T.data.sort.indexesToSort,P=T.data.sort.transforms,M&&(w=T.data.sort.precomputedDistances)),y(S,C,T.data.sort.modelViewProj,M,R,w,P)}else if(T.data.init){A=T.data.init.Constants,a=T.data.init.splatCount,n=T.data.init.useSharedMemory,i=T.data.init.integerBasedSort,s=T.data.init.dynamicMode,x=T.data.init.distanceMapRange,v=0;const C=i?A.BytesPerInt*4:A.BytesPerFloat*4,S=new Uint8Array(T.data.init.sorterWasmBytes),M=16*A.BytesPerFloat,R=a*A.BytesPerInt,w=a*C,P=M,I=i?a*A.BytesPerInt:a*A.BytesPerFloat,L=a*A.BytesPerInt,B=a*A.BytesPerInt,U=i?x*A.BytesPerInt*2:x*A.BytesPerFloat*2,O=s?a*A.BytesPerInt:0,q=s?A.MaxScenes*M:0,G=A.MemoryPageSize*32,J=R+w+P+I+L+U+B+O+q+G,ae=Math.floor(J/A.MemoryPageSize)+1,re={module:{},env:{memory:new WebAssembly.Memory({initial:ae,maximum:ae,shared:!0})}};WebAssembly.compile(S).then(xe=>WebAssembly.instantiate(xe,re)).then(xe=>{e=xe,o=0,m=o+R,_=m+w,h=_+P,d=h+I,f=d+L,l=f+U,c=l+B,u=c+O,t=re.env.memory.buffer,n?r.postMessage({sortSetupPhase1Complete:!0,indexesToSortBuffer:t,indexesToSortOffset:o,sortedIndexesBuffer:t,sortedIndexesOffset:l,precomputedDistancesBuffer:t,precomputedDistancesOffset:h,transformsBuffer:t,transformsOffset:u}):r.postMessage({sortSetupPhase1Complete:!0})})}}}function kv(r,e,t,n,i,s=tt.DefaultSplatSortDistanceMapPrecision){const a=new Worker(URL.createObjectURL(new Blob(["(",Nv.toString(),")(self)"],{type:"application/javascript"})));let o=Bv;const l=ou()?wf():null;!t&&!e?(o=yd,l&&l.major<=16&&l.minor<4&&(o=Ov)):t?e||l&&l.major<=16&&l.minor<4&&(o=Uv):o=yd;const c=atob(o),u=new Uint8Array(c.length);for(let h=0;h<c.length;h++)u[h]=c.charCodeAt(h);return a.postMessage({init:{sorterWasmBytes:u.buffer,splatCount:r,useSharedMemory:e,integerBasedSort:n,dynamicMode:i,distanceMapRange:1<<s,Constants:{BytesPerFloat:tt.BytesPerFloat,BytesPerInt:tt.BytesPerInt,MemoryPageSize:tt.MemoryPageSize,MaxScenes:tt.MaxScenes}}}),a}const tr={None:0,VR:1,AR:2};class vr{static createButton(e,t={}){const n=document.createElement("button");function i(){let c=null;async function u(f){f.addEventListener("end",h),await e.xr.setSession(f),n.textContent="EXIT VR",c=f}function h(){c.removeEventListener("end",h),n.textContent="ENTER VR",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="ENTER VR";const d={...t,optionalFeatures:["local-floor","bounded-floor","layers",...t.optionalFeatures||[]]};n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-vr",d).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(f=>{console.warn(f)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-vr",d).then(u).catch(f=>{console.warn(f)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="VR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="VR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="VRButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-vr").then(function(c){c?i():a(),c&&vr.xrSessionIsGranted&&n.click()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}static registerSessionGrantedListener(){if(typeof navigator<"u"&&"xr"in navigator){if(/WebXRViewer\//i.test(navigator.userAgent))return;navigator.xr.addEventListener("sessiongranted",()=>{vr.xrSessionIsGranted=!0})}}}vr.xrSessionIsGranted=!1;vr.registerSessionGrantedListener();class zv{static createButton(e,t={}){const n=document.createElement("button");function i(){if(t.domOverlay===void 0){const d=document.createElement("div");d.style.display="none",document.body.appendChild(d);const f=document.createElementNS("http://www.w3.org/2000/svg","svg");f.setAttribute("width",38),f.setAttribute("height",38),f.style.position="absolute",f.style.right="20px",f.style.top="20px",f.addEventListener("click",function(){c.end()}),d.appendChild(f);const m=document.createElementNS("http://www.w3.org/2000/svg","path");m.setAttribute("d","M 12,12 L 28,28 M 28,12 12,28"),m.setAttribute("stroke","#fff"),m.setAttribute("stroke-width",2),f.appendChild(m),t.optionalFeatures===void 0&&(t.optionalFeatures=[]),t.optionalFeatures.push("dom-overlay"),t.domOverlay={root:d}}let c=null;async function u(d){d.addEventListener("end",h),e.xr.setReferenceSpaceType("local"),await e.xr.setSession(d),n.textContent="STOP AR",t.domOverlay.root.style.display="",c=d}function h(){c.removeEventListener("end",h),n.textContent="START AR",t.domOverlay.root.style.display="none",c=null}n.style.display="",n.style.cursor="pointer",n.style.left="calc(50% - 50px)",n.style.width="100px",n.textContent="START AR",n.onmouseenter=function(){n.style.opacity="1.0"},n.onmouseleave=function(){n.style.opacity="0.5"},n.onclick=function(){c===null?navigator.xr.requestSession("immersive-ar",t).then(u):(c.end(),navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)}))},navigator.xr.offerSession!==void 0&&navigator.xr.offerSession("immersive-ar",t).then(u).catch(d=>{console.warn(d)})}function s(){n.style.display="",n.style.cursor="auto",n.style.left="calc(50% - 75px)",n.style.width="150px",n.onmouseenter=null,n.onmouseleave=null,n.onclick=null}function a(){s(),n.textContent="AR NOT SUPPORTED"}function o(c){s(),console.warn("Exception when trying to call xr.isSessionSupported",c),n.textContent="AR NOT ALLOWED"}function l(c){c.style.position="absolute",c.style.bottom="20px",c.style.padding="12px 6px",c.style.border="1px solid #fff",c.style.borderRadius="4px",c.style.background="rgba(0,0,0,0.1)",c.style.color="#fff",c.style.font="normal 13px sans-serif",c.style.textAlign="center",c.style.opacity="0.5",c.style.outline="none",c.style.zIndex="999"}if("xr"in navigator)return n.id="ARButton",n.style.display="none",l(n),navigator.xr.isSessionSupported("immersive-ar").then(function(c){c?i():a()}).catch(o),n;{const c=document.createElement("a");return window.isSecureContext===!1?(c.href=document.location.href.replace(/^http:/,"https:"),c.innerHTML="WEBXR NEEDS HTTPS"):(c.href="https://immersiveweb.dev/",c.innerHTML="WEBXR NOT AVAILABLE"),c.style.left="calc(50% - 90px)",c.style.width="180px",c.style.textDecoration="none",l(c),c}}}const yl={Always:0,Never:2},Hv=50,Vv=.75,Gv=15e5,Wv=10,Xv=2.5,qv=60,Wi=class Wi{constructor(e={}){ce(this,"onKeyDown",function(){const e=new D,t=new He,n=new He;return function(i){switch(e.set(0,0,-1),e.transformDirection(this.camera.matrixWorld),t.makeRotationAxis(e,Math.PI/128),n.makeRotationAxis(e,-Math.PI/128),i.code){case"KeyG":this.focalAdjustment+=.02,this.forceRenderNextFrame();break;case"KeyF":this.focalAdjustment-=.02,this.forceRenderNextFrame();break;case"ArrowLeft":this.camera.up.transformDirection(t);break;case"ArrowRight":this.camera.up.transformDirection(n);break;case"KeyC":this.showMeshCursor=!this.showMeshCursor;break;case"KeyU":this.showControlPlane=!this.showControlPlane;break;case"KeyI":this.showInfo=!this.showInfo,this.showInfo?this.infoPanel.show():this.infoPanel.hide();break;case"KeyO":this.usingExternalCamera||this.setOrthographicMode(!this.camera.isOrthographicCamera);break;case"KeyP":this.usingExternalCamera||this.splatMesh.setPointCloudModeEnabled(!this.splatMesh.getPointCloudModeEnabled());break;case"Equal":this.usingExternalCamera||this.splatMesh.setSplatScale(this.splatMesh.getSplatScale()+.05);break;case"Minus":this.usingExternalCamera||this.splatMesh.setSplatScale(Math.max(this.splatMesh.getSplatScale()-.05,0));break}}}());ce(this,"onMouseUp",function(){const e=new Me;return function(t){e.copy(this.mousePosition).sub(this.mouseDownPosition),Js()-this.mouseDownTime<.5&&e.length()<2&&this.onMouseClick(t)}}());ce(this,"checkForFocalPointChange",function(){const e=new Me,t=new D,n=[];return function(){if(!this.transitioningCameraTarget&&(this.getRenderDimensions(e),n.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,e),this.raycaster.intersectSplatMesh(this.splatMesh,n),n.length>0)){const s=n[0].origin;t.copy(s).sub(this.camera.position),t.length()>Vv&&(this.previousCameraTarget.copy(this.controls.target),this.nextCameraTarget.copy(s),this.transitioningCameraTarget=!0,this.transitioningCameraTargetStartTime=Js())}}}());ce(this,"updateSplatMesh",function(){const e=new Me;return function(){if(!this.splatMesh)return;if(this.splatMesh.getSplatCount()>0){this.splatMesh.updateVisibleRegionFadeDistance(this.sceneRevealMode),this.splatMesh.updateTransforms(),this.getRenderDimensions(e);const n=this.camera.projectionMatrix.elements[0]*.5*this.devicePixelRatio*e.x,i=this.camera.projectionMatrix.elements[5]*.5*this.devicePixelRatio*e.y,s=this.camera.isOrthographicCamera?1/this.devicePixelRatio:1,a=this.focalAdjustment*s,o=1/a;this.adjustForWebXRStereo(e),this.splatMesh.updateUniforms(e,n*a,i*a,this.camera.isOrthographicCamera,this.camera.zoom||1,o)}}}());ce(this,"addSplatBuffers",function(){return function(e,t=[],n=!0,i=!0,s=!0,a=!1,o=!1,l=!0){if(this.isDisposingOrDisposed())return Promise.resolve();let c=null;const u=()=>{c!==null&&(this.loadingSpinner.removeTask(c),c=null)};return this.splatRenderReady=!1,new Promise(h=>{i&&(c=this.loadingSpinner.addTask("Processing splats...")),In(()=>{if(this.isDisposingOrDisposed())h();else{const d=this.addSplatBuffersToMesh(e,t,n,s,a,l),f=this.splatMesh.getMaxSplatCount();this.sortWorker&&this.sortWorker.maxSplatCount!==f&&this.disposeSortWorker(),this.gpuAcceleratedSort||this.preSortMessages.push({centers:d.centers.buffer,sceneIndexes:d.sceneIndexes.buffer,range:{from:d.from,to:d.to,count:d.count}}),(!this.sortWorker&&f>0?this.setupSortWorker(this.splatMesh):Promise.resolve()).then(()=>{this.isDisposingOrDisposed()||this.runSplatSort(!0,!0).then(_=>{!this.sortWorker||!_?(this.splatRenderReady=!0,u(),h()):(o?this.splatRenderReady=!0:this.runAfterNextSort.push(()=>{this.splatRenderReady=!0}),this.runAfterNextSort.push(()=>{u(),h()}))})})}},!0)})}}());ce(this,"addSplatBuffersToMesh",function(){let e;return function(t,n,i=!0,s=!1,a=!1,o=!0){if(this.isDisposingOrDisposed())return;let l=[],c=[];a||(l=this.splatMesh.scenes.map(f=>f.splatBuffer)||[],c=this.splatMesh.sceneOptions?this.splatMesh.sceneOptions.map(f=>f):[]),l.push(...t),c.push(...n),this.renderer&&this.splatMesh.setRenderer(this.renderer);const u=f=>{if(this.isDisposingOrDisposed())return;const m=this.splatMesh.getSplatCount();s&&m>=Gv&&!f&&!e&&(this.loadingSpinner.setMinimized(!0,!0),e=this.loadingSpinner.addTask("Optimizing data structures..."))},h=f=>{this.isDisposingOrDisposed()||f&&e&&(this.loadingSpinner.removeTask(e),e=null)},d=this.splatMesh.build(l,c,!0,i,u,h,o);return i&&this.freeIntermediateSplatData&&this.splatMesh.freeIntermediateSplatData(),d}}());ce(this,"shouldRender",function(){let e=0;const t=new D,n=new St,i=1e-4;return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return!1;let s=!1,a=!1;if(this.camera){const o=this.camera.position,l=this.camera.quaternion;a=Math.abs(o.x-t.x)>i||Math.abs(o.y-t.y)>i||Math.abs(o.z-t.z)>i||Math.abs(l.x-n.x)>i||Math.abs(l.y-n.y)>i||Math.abs(l.z-n.z)>i||Math.abs(l.w-n.w)>i}return s=this.renderMode!==yl.Never&&(e===0||this.splatMesh.visibleRegionChanging||a||this.renderMode===yl.Always||this.dynamicMode===!0||this.renderNextFrame),this.camera&&(t.copy(this.camera.position),n.copy(this.camera.quaternion)),e++,s}}());ce(this,"render",function(){return function(){if(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())return;const e=n=>{for(let i of n.children)if(i.visible)return!0;return!1},t=this.renderer.autoClear;e(this.threeScene)&&(this.renderer.render(this.threeScene,this.camera),this.renderer.autoClear=!1),this.renderer.render(this.splatMesh,this.camera),this.renderer.autoClear=!1,this.sceneHelper.getFocusMarkerOpacity()>0&&this.renderer.render(this.sceneHelper.focusMarker,this.camera),this.showControlPlane&&this.renderer.render(this.sceneHelper.controlPlane,this.camera),this.renderer.autoClear=t}}());ce(this,"updateFPS",function(){let e=Js(),t=0;return function(){if(this.consecutiveRenderFrames>qv){const n=Js();n-e>=1?(this.currentFPS=t,t=0,e=n):t++}else this.currentFPS=null}}());ce(this,"updateForRendererSizeChanges",function(){const e=new Me,t=new Me;let n;return function(){this.usingExternalCamera||(this.renderer.getSize(t),(n===void 0||n!==this.camera.isOrthographicCamera||t.x!==e.x||t.y!==e.y)&&(this.camera.isOrthographicCamera?(this.camera.left=-t.x/2,this.camera.right=t.x/2,this.camera.top=t.y/2,this.camera.bottom=-t.y/2):this.camera.aspect=t.x/t.y,this.camera.updateProjectionMatrix(),e.copy(t),n=this.camera.isOrthographicCamera))}}());ce(this,"timingSensitiveUpdates",function(){let e;return function(){const t=Js();e||(e=t);const n=t-e;this.updateCameraTransition(t),this.updateFocusMarker(n),e=t}}());ce(this,"updateCameraTransition",function(){let e=new D,t=new D,n=new D;return function(i){if(this.transitioningCameraTarget){t.copy(this.previousCameraTarget).sub(this.camera.position).normalize(),n.copy(this.nextCameraTarget).sub(this.camera.position).normalize();const s=Math.acos(t.dot(n)),o=(s/(Math.PI/3)*.65+.3)/s*(i-this.transitioningCameraTargetStartTime);e.copy(this.previousCameraTarget).lerp(this.nextCameraTarget,o),this.camera.lookAt(e),this.controls.target.copy(e),o>=1&&(this.transitioningCameraTarget=!1)}}}());ce(this,"updateFocusMarker",function(){const e=new Me;let t=!1;return function(n){if(this.getRenderDimensions(e),this.transitioningCameraTarget){this.sceneHelper.setFocusMarkerVisibility(!0);const i=Math.max(this.sceneHelper.getFocusMarkerOpacity(),0);let s=Math.min(i+Wv*n,1);this.sceneHelper.setFocusMarkerOpacity(s),this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e),t=!0,this.forceRenderNextFrame()}else{let i;if(t?i=1:i=Math.min(this.sceneHelper.getFocusMarkerOpacity(),1),i>0){this.sceneHelper.updateFocusMarker(this.nextCameraTarget,this.camera,e);let s=Math.max(i-Xv*n,0);this.sceneHelper.setFocusMarkerOpacity(s),s===0&&this.sceneHelper.setFocusMarkerVisibility(!1)}i>0&&this.forceRenderNextFrame(),t=!1}}}());ce(this,"updateMeshCursor",function(){const e=[],t=new Me;return function(){this.showMeshCursor?(this.forceRenderNextFrame(),this.getRenderDimensions(t),e.length=0,this.raycaster.setFromCameraAndScreenPosition(this.camera,this.mousePosition,t),this.raycaster.intersectSplatMesh(this.splatMesh,e),e.length>0?(this.sceneHelper.setMeshCursorVisibility(!0),this.sceneHelper.positionAndOrientMeshCursor(e[0].origin,this.camera)):this.sceneHelper.setMeshCursorVisibility(!1)):(this.sceneHelper.getMeschCursorVisibility()&&this.forceRenderNextFrame(),this.sceneHelper.setMeshCursorVisibility(!1))}}());ce(this,"updateInfoPanel",function(){const e=new Me;return function(){if(!this.showInfo)return;const t=this.splatMesh.getSplatCount();this.getRenderDimensions(e);const n=this.controls?this.controls.target:null,i=this.showMeshCursor?this.sceneHelper.meshCursor.position:null,s=t>0?this.splatRenderCount/t*100:0;this.infoPanel.update(e,this.camera.position,n,this.camera.up,this.camera.isOrthographicCamera,i,this.currentFPS||"N/A",t,this.splatRenderCount,s,this.lastSortTime,this.focalAdjustment,this.splatMesh.getSplatScale(),this.splatMesh.getPointCloudModeEnabled())}}());ce(this,"runSplatSort",function(){const e=new He,t=[],n=new D(0,0,-1),i=new D(0,0,-1),s=new D,a=new D,o=[],l=[{angleThreshold:.55,sortFractions:[.125,.33333,.75]},{angleThreshold:.65,sortFractions:[.33333,.66667]},{angleThreshold:.8,sortFractions:[.5]}];return function(c=!1,u=!1){if(!this.initialized)return Promise.resolve(!1);if(this.sortRunning)return Promise.resolve(!0);if(this.splatMesh.getSplatCount()<=0)return this.splatRenderCount=0,Promise.resolve(!1);let h=0,d=0,f=!1,m=!1;if(i.set(0,0,-1).applyQuaternion(this.camera.quaternion),h=i.dot(n),d=a.copy(this.camera.position).sub(s).length(),!c&&!this.splatMesh.dynamicMode&&o.length===0&&(h<=.99&&(f=!0),d>=1&&(m=!0),!f&&!m))return Promise.resolve(!1);this.sortRunning=!0;let{splatRenderCount:_,shouldSortAll:p}=this.gatherSceneNodesForSort();p=p||u,this.splatRenderCount=_,e.copy(this.camera.matrixWorld).invert();const g=this.perspectiveCamera||this.camera;e.premultiply(g.projectionMatrix),this.splatMesh.dynamicMode||e.multiply(this.splatMesh.matrixWorld);let x=Promise.resolve(!0);return this.gpuAcceleratedSort&&(o.length<=1||o.length%2===0)&&(x=this.splatMesh.computeDistancesOnGPU(e,this.sortWorkerPrecomputedDistances)),x.then(()=>{if(o.length===0)if(this.splatMesh.dynamicMode||p)o.push(this.splatRenderCount);else{for(let y of l)if(h<y.angleThreshold){for(let T of y.sortFractions)o.push(Math.floor(this.splatRenderCount*T));break}o.push(this.splatRenderCount)}let v=Math.min(o.shift(),this.splatRenderCount);this.splatSortCount=v,t[0]=this.camera.position.x,t[1]=this.camera.position.y,t[2]=this.camera.position.z;const A={modelViewProj:e.elements,cameraPosition:t,splatRenderCount:this.splatRenderCount,splatSortCount:v,usePrecomputedDistances:this.gpuAcceleratedSort};return this.splatMesh.dynamicMode&&this.splatMesh.fillTransformsArray(this.sortWorkerTransforms),this.sharedMemoryForWorkers||(A.indexesToSort=this.sortWorkerIndexesToSort,A.transforms=this.sortWorkerTransforms,this.gpuAcceleratedSort&&(A.precomputedDistances=this.sortWorkerPrecomputedDistances)),this.sortPromise=new Promise(y=>{this.sortPromiseResolver=y}),this.preSortMessages.length>0&&(this.preSortMessages.forEach(y=>{this.sortWorker.postMessage(y)}),this.preSortMessages=[]),this.sortWorker.postMessage({sort:A}),o.length===0&&(s.copy(this.camera.position),n.copy(i)),!0}),x}}());ce(this,"gatherSceneNodesForSort",function(){const e=[];let t=null;const n=new D,i=new D,s=new D,a=new He,o=new He,l=new He,c=new D,u=new D(0,0,-1),h=new D,d=f=>h.copy(f.max).sub(f.min).length();return function(f=!1){this.getRenderDimensions(c);const m=c.y/2/Math.tan(this.camera.fov/2*af.DEG2RAD),_=Math.atan(c.x/2/m),p=Math.atan(c.y/2/m),g=Math.cos(_),x=Math.cos(p),v=this.splatMesh.getSplatTree();if(v){o.copy(this.camera.matrixWorld).invert(),this.splatMesh.dynamicMode||o.multiply(this.splatMesh.matrixWorld);let A=0,y=0;for(let C=0;C<v.subTrees.length;C++){const S=v.subTrees[C];a.copy(o),this.splatMesh.dynamicMode&&(this.splatMesh.getSceneTransform(C,l),a.multiply(l));const M=S.nodesWithIndexes.length;for(let R=0;R<M;R++){const w=S.nodesWithIndexes[R];if(!w.data||!w.data.indexes||w.data.indexes.length===0)continue;s.copy(w.center).applyMatrix4(a);const P=s.length();s.normalize(),n.copy(s).setX(0).normalize(),i.copy(s).setY(0).normalize();const I=u.dot(i),L=u.dot(n),B=d(w),U=L<x-.6,O=I<g-.6;!f&&(O||U)&&P>B||(y+=w.data.indexes.length,e[A]=w,w.data.distanceToNode=P,A++)}}e.length=A,e.sort((C,S)=>C.data.distanceToNode<S.data.distanceToNode?-1:1);let T=y*tt.BytesPerInt;for(let C=0;C<A;C++){const S=e[C],M=S.data.indexes.length,R=M*tt.BytesPerInt;new Uint32Array(this.sortWorkerIndexesToSort.buffer,T-R,M).set(S.data.indexes),T-=R}return{splatRenderCount:y,shouldSortAll:!1}}else{const A=this.splatMesh.getSplatCount();if(!t||t.length!==A){t=new Uint32Array(A);for(let y=0;y<A;y++)t[y]=y}return this.sortWorkerIndexesToSort.set(t),{splatRenderCount:A,shouldSortAll:!0}}}}());if(e.cameraUp||(e.cameraUp=[0,1,0]),this.cameraUp=new D().fromArray(e.cameraUp),e.initialCameraPosition||(e.initialCameraPosition=[0,10,15]),this.initialCameraPosition=new D().fromArray(e.initialCameraPosition),e.initialCameraLookAt||(e.initialCameraLookAt=[0,0,0]),this.initialCameraLookAt=new D().fromArray(e.initialCameraLookAt),this.dropInMode=e.dropInMode||!1,(e.selfDrivenMode===void 0||e.selfDrivenMode===null)&&(e.selfDrivenMode=!0),this.selfDrivenMode=e.selfDrivenMode&&!this.dropInMode,this.selfDrivenUpdateFunc=this.selfDrivenUpdate.bind(this),e.useBuiltInControls===void 0&&(e.useBuiltInControls=!0),this.useBuiltInControls=e.useBuiltInControls,this.rootElement=e.rootElement,this.ignoreDevicePixelRatio=e.ignoreDevicePixelRatio||!1,this.devicePixelRatio=this.ignoreDevicePixelRatio?1:window.devicePixelRatio||1,this.halfPrecisionCovariancesOnGPU=e.halfPrecisionCovariancesOnGPU||!1,this.threeScene=e.threeScene,this.renderer=e.renderer,this.camera=e.camera,this.gpuAcceleratedSort=e.gpuAcceleratedSort||!1,(e.integerBasedSort===void 0||e.integerBasedSort===null)&&(e.integerBasedSort=!0),this.integerBasedSort=e.integerBasedSort,(e.sharedMemoryForWorkers===void 0||e.sharedMemoryForWorkers===null)&&(e.sharedMemoryForWorkers=!0),this.sharedMemoryForWorkers=e.sharedMemoryForWorkers,this.dynamicScene=!!e.dynamicScene,this.antialiased=e.antialiased||!1,this.kernel2DSize=e.kernel2DSize===void 0?.3:e.kernel2DSize,this.webXRMode=e.webXRMode||tr.None,this.webXRMode!==tr.None&&(this.gpuAcceleratedSort=!1),this.webXRActive=!1,this.webXRSessionInit=e.webXRSessionInit||{},this.renderMode=e.renderMode||yl.Always,this.sceneRevealMode=e.sceneRevealMode||Xr.Default,this.focalAdjustment=e.focalAdjustment||1,this.maxScreenSpaceSplatSize=e.maxScreenSpaceSplatSize||1024,this.logLevel=e.logLevel||hr.None,this.sphericalHarmonicsDegree=e.sphericalHarmonicsDegree||0,this.enableOptionalEffects=e.enableOptionalEffects||!1,(e.enableSIMDInSort===void 0||e.enableSIMDInSort===null)&&(e.enableSIMDInSort=!0),this.enableSIMDInSort=e.enableSIMDInSort,(e.inMemoryCompressionLevel===void 0||e.inMemoryCompressionLevel===null)&&(e.inMemoryCompressionLevel=0),this.inMemoryCompressionLevel=e.inMemoryCompressionLevel,(e.optimizeSplatData===void 0||e.optimizeSplatData===null)&&(e.optimizeSplatData=!0),this.optimizeSplatData=e.optimizeSplatData,(e.freeIntermediateSplatData===void 0||e.freeIntermediateSplatData===null)&&(e.freeIntermediateSplatData=!1),this.freeIntermediateSplatData=e.freeIntermediateSplatData,ou()){const n=wf();n.major<17&&(this.enableSIMDInSort=!1),n.major<16&&(this.sharedMemoryForWorkers=!1)}(e.splatRenderMode===void 0||e.splatRenderMode===null)&&(e.splatRenderMode=Ci.ThreeD),this.splatRenderMode=e.splatRenderMode,this.sceneFadeInRateMultiplier=e.sceneFadeInRateMultiplier||1,this.splatSortDistanceMapPrecision=e.splatSortDistanceMapPrecision||tt.DefaultSplatSortDistanceMapPrecision;const t=this.integerBasedSort?20:24;this.splatSortDistanceMapPrecision=Mt(this.splatSortDistanceMapPrecision,10,t),this.onSplatMeshChangedCallback=null,this.createSplatMesh(),this.controls=null,this.perspectiveControls=null,this.orthographicControls=null,this.orthographicCamera=null,this.perspectiveCamera=null,this.showMeshCursor=!1,this.showControlPlane=!1,this.showInfo=!1,this.sceneHelper=null,this.sortWorker=null,this.sortRunning=!1,this.splatRenderCount=0,this.splatSortCount=0,this.lastSplatSortCount=0,this.sortWorkerIndexesToSort=null,this.sortWorkerSortedIndexes=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.preSortMessages=[],this.runAfterNextSort=[],this.selfDrivenModeRunning=!1,this.splatRenderReady=!1,this.raycaster=new xv,this.infoPanel=null,this.startInOrthographicMode=!1,this.currentFPS=0,this.lastSortTime=0,this.consecutiveRenderFrames=0,this.previousCameraTarget=new D,this.nextCameraTarget=new D,this.mousePosition=new Me,this.mouseDownPosition=new Me,this.mouseDownTime=null,this.resizeObserver=null,this.mouseMoveListener=null,this.mouseDownListener=null,this.mouseUpListener=null,this.keyDownListener=null,this.sortPromise=null,this.sortPromiseResolver=null,this.splatSceneDownloadPromises={},this.splatSceneDownloadAndBuildPromise=null,this.splatSceneRemovalPromise=null,this.loadingSpinner=new bc(null,this.rootElement||document.body),this.loadingSpinner.hide(),this.loadingProgressBar=new dv(this.rootElement||document.body),this.loadingProgressBar.hide(),this.infoPanel=new fv(this.rootElement||document.body),this.infoPanel.hide(),this.usingExternalCamera=!!(this.dropInMode||this.camera),this.usingExternalRenderer=!!(this.dropInMode||this.renderer),this.initialized=!1,this.disposing=!1,this.disposed=!1,this.disposePromise=null,this.dropInMode||this.init()}createSplatMesh(){this.splatMesh=new Qt(this.splatRenderMode,this.dynamicScene,this.enableOptionalEffects,this.halfPrecisionCovariancesOnGPU,this.devicePixelRatio,this.gpuAcceleratedSort,this.integerBasedSort,this.antialiased,this.maxScreenSpaceSplatSize,this.logLevel,this.sphericalHarmonicsDegree,this.sceneFadeInRateMultiplier,this.kernel2DSize),this.splatMesh.frustumCulled=!1,this.onSplatMeshChangedCallback&&this.onSplatMeshChangedCallback()}init(){this.initialized||(this.rootElement||(this.usingExternalRenderer?this.rootElement=this.renderer.domElement||document.body:(this.rootElement=document.createElement("div"),this.rootElement.style.width="100%",this.rootElement.style.height="100%",this.rootElement.style.position="absolute",document.body.appendChild(this.rootElement))),this.setupCamera(),this.setupRenderer(),this.setupWebXR(this.webXRSessionInit),this.setupControls(),this.setupEventHandlers(),this.threeScene=this.threeScene||new uf,this.sceneHelper=new Gr(this.threeScene),this.sceneHelper.setupMeshCursor(),this.sceneHelper.setupFocusMarker(),this.sceneHelper.setupControlPlane(),this.loadingProgressBar.setContainer(this.rootElement),this.loadingSpinner.setContainer(this.rootElement),this.infoPanel.setContainer(this.rootElement),this.initialized=!0)}setupCamera(){if(!this.usingExternalCamera){const e=new Me;this.getRenderDimensions(e),this.perspectiveCamera=new pn(Hv,e.x/e.y,.1,1e3),this.orthographicCamera=new fa(e.x/-2,e.x/2,e.y/2,e.y/-2,.1,1e3),this.camera=this.startInOrthographicMode?this.orthographicCamera:this.perspectiveCamera,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt)}}setupRenderer(){if(!this.usingExternalRenderer){const e=new Me;this.getRenderDimensions(e),this.renderer=new Ef({antialias:!1,precision:"highp"}),this.renderer.setPixelRatio(this.devicePixelRatio),this.renderer.autoClear=!0,this.renderer.setClearColor(new je(0),0),this.renderer.setSize(e.x,e.y),this.resizeObserver=new ResizeObserver(()=>{this.getRenderDimensions(e),this.renderer.setSize(e.x,e.y),this.forceRenderNextFrame()}),this.resizeObserver.observe(this.rootElement),this.rootElement.appendChild(this.renderer.domElement)}}setupWebXR(e){this.webXRMode&&(this.webXRMode===tr.VR?this.rootElement.appendChild(vr.createButton(this.renderer,e)):this.webXRMode===tr.AR&&this.rootElement.appendChild(zv.createButton(this.renderer,e)),this.renderer.xr.addEventListener("sessionstart",t=>{this.webXRActive=!0}),this.renderer.xr.addEventListener("sessionend",t=>{this.webXRActive=!1}),this.renderer.xr.enabled=!0,this.camera.position.copy(this.initialCameraPosition),this.camera.up.copy(this.cameraUp).normalize(),this.camera.lookAt(this.initialCameraLookAt))}setupControls(){if(this.useBuiltInControls&&this.webXRMode===tr.None){this.usingExternalCamera?this.camera.isOrthographicCamera?this.orthographicControls=new Qa(this.camera,this.renderer.domElement):this.perspectiveControls=new Qa(this.camera,this.renderer.domElement):(this.perspectiveControls=new Qa(this.perspectiveCamera,this.renderer.domElement),this.orthographicControls=new Qa(this.orthographicCamera,this.renderer.domElement));for(let e of[this.orthographicControls,this.perspectiveControls])e&&(e.listenToKeyEvents(window),e.rotateSpeed=.5,e.maxPolarAngle=Math.PI*.75,e.minPolarAngle=.1,e.enableDamping=!0,e.dampingFactor=.05,e.target.copy(this.initialCameraLookAt),e.update());this.controls=this.camera.isOrthographicCamera?this.orthographicControls:this.perspectiveControls,this.controls.update()}}setupEventHandlers(){this.useBuiltInControls&&this.webXRMode===tr.None&&(this.mouseMoveListener=this.onMouseMove.bind(this),this.renderer.domElement.addEventListener("pointermove",this.mouseMoveListener,!1),this.mouseDownListener=this.onMouseDown.bind(this),this.renderer.domElement.addEventListener("pointerdown",this.mouseDownListener,!1),this.mouseUpListener=this.onMouseUp.bind(this),this.renderer.domElement.addEventListener("pointerup",this.mouseUpListener,!1),this.keyDownListener=this.onKeyDown.bind(this),window.addEventListener("keydown",this.keyDownListener,!1))}removeEventHandlers(){this.useBuiltInControls&&(this.renderer.domElement.removeEventListener("pointermove",this.mouseMoveListener),this.mouseMoveListener=null,this.renderer.domElement.removeEventListener("pointerdown",this.mouseDownListener),this.mouseDownListener=null,this.renderer.domElement.removeEventListener("pointerup",this.mouseUpListener),this.mouseUpListener=null,window.removeEventListener("keydown",this.keyDownListener),this.keyDownListener=null)}setRenderMode(e){this.renderMode=e}setActiveSphericalHarmonicsDegrees(e){this.splatMesh.material.uniforms.sphericalHarmonicsDegree.value=e,this.splatMesh.material.uniformsNeedUpdate=!0}onSplatMeshChanged(e){this.onSplatMeshChangedCallback=e}onMouseMove(e){this.mousePosition.set(e.offsetX,e.offsetY)}onMouseDown(){this.mouseDownPosition.copy(this.mousePosition),this.mouseDownTime=Js()}onMouseClick(e){this.mousePosition.set(e.offsetX,e.offsetY),this.checkForFocalPointChange()}getRenderDimensions(e){this.rootElement?(e.x=this.rootElement.offsetWidth,e.y=this.rootElement.offsetHeight):this.renderer.getSize(e)}setOrthographicMode(e){if(e===this.camera.isOrthographicCamera)return;const t=this.camera,n=e?this.orthographicCamera:this.perspectiveCamera;if(n.position.copy(t.position),n.up.copy(t.up),n.rotation.copy(t.rotation),n.quaternion.copy(t.quaternion),n.matrix.copy(t.matrix),this.camera=n,this.controls){const i=o=>{o.saveState(),o.reset()},s=this.controls,a=e?this.orthographicControls:this.perspectiveControls;i(a),i(s),a.target.copy(s.target),e?Wi.setCameraZoomFromPosition(n,t,s):Wi.setCameraPositionFromZoom(n,t,a),this.controls=a,this.camera.lookAt(this.controls.target)}}adjustForWebXRStereo(e){if(this.camera&&this.webXRActive){const n=this.renderer.xr.getCamera().projectionMatrix.elements[0],i=this.camera.projectionMatrix.elements[0];e.x*=i/n}}isLoadingOrUnloading(){return Object.keys(this.splatSceneDownloadPromises).length>0||this.splatSceneDownloadAndBuildPromise!==null||this.splatSceneRemovalPromise!==null}isDisposingOrDisposed(){return this.disposing||this.disposed}addSplatSceneDownloadPromise(e){this.splatSceneDownloadPromises[e.id]=e}removeSplatSceneDownloadPromise(e){delete this.splatSceneDownloadPromises[e.id]}setSplatSceneDownloadAndBuildPromise(e){this.splatSceneDownloadAndBuildPromise=e}clearSplatSceneDownloadAndBuildPromise(){this.splatSceneDownloadAndBuildPromise=null}addSplatScene(e,t={}){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");t.progressiveLoad&&this.splatMesh.scenes&&this.splatMesh.scenes.length>0&&(console.log('addSplatScene(): "progressiveLoad" option ignore because there are multiple splat scenes'),t.progressiveLoad=!1);const n=t.format!==void 0&&t.format!==null?t.format:fd(e),i=Wi.isProgressivelyLoadable(n)&&t.progressiveLoad,s=t.showLoadingUI!==void 0&&t.showLoadingUI!==null?t.showLoadingUI:!0;let a=null;s&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=()=>{this.loadingProgressBar.hide(),this.loadingSpinner.removeAllTasks()},l=(_,p,g)=>{if(s)if(g===Bt.Downloading)if(_==100)this.loadingSpinner.setMessageForTask(a,"Download complete!");else if(i)this.loadingSpinner.setMessageForTask(a,"Downloading splats...");else{const x=p?`: ${p}`:"...";this.loadingSpinner.setMessageForTask(a,`Downloading${x}`)}else g===Bt.Processing&&this.loadingSpinner.setMessageForTask(a,"Processing splats...")};let c=!1,u=0;const h=(_,p)=>{s&&((_&&i||p&&!i)&&(this.loadingSpinner.removeTask(a),!p&&!c&&this.loadingProgressBar.show()),i&&(p?(c=!0,this.loadingProgressBar.hide()):this.loadingProgressBar.setProgress(u)))},d=(_,p,g)=>{u=_,l(_,p,g),t.onProgress&&t.onProgress(_,p,g)},f=(_,p,g)=>{!i&&t.onProgress&&t.onProgress(0,"0%",Bt.Processing);const x={rotation:t.rotation||t.orientation,position:t.position,scale:t.scale,splatAlphaRemovalThreshold:t.splatAlphaRemovalThreshold};return this.addSplatBuffers([_],[x],g,p&&s,s,i,i).then(()=>{!i&&t.onProgress&&t.onProgress(100,"100%",Bt.Processing),h(p,g)})};return(i?this.downloadAndBuildSingleSplatSceneProgressiveLoad.bind(this):this.downloadAndBuildSingleSplatSceneStandardLoad.bind(this))(e,n,t.splatAlphaRemovalThreshold,f.bind(this),d,o.bind(this),t.headers)}downloadAndBuildSingleSplatSceneStandardLoad(e,t,n,i,s,a,o){const l=this.downloadSplatSceneToSplatBuffer(e,n,s,!1,void 0,t,o),c=pl(l.abortHandler);return l.then(u=>(this.removeSplatSceneDownloadPromise(l),i(u,!0,!0).then(()=>{c.resolve(),this.clearSplatSceneDownloadAndBuildPromise()}))).catch(u=>{a&&a(),this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(l),c.reject(this.updateError(u,`Viewer::addSplatScene -> Could not load file ${e}`))}),this.addSplatSceneDownloadPromise(l),this.setSplatSceneDownloadAndBuildPromise(c.promise),c.promise}downloadAndBuildSingleSplatSceneProgressiveLoad(e,t,n,i,s,a,o){let l=0,c=!1;const u=[],h=()=>{if(u.length>0&&!c&&!this.isDisposingOrDisposed()){c=!0;const p=u.shift();i(p.splatBuffer,p.firstBuild,p.finalBuild).then(()=>{c=!1,p.firstBuild?m.resolve():p.finalBuild&&(_.resolve(),this.clearSplatSceneDownloadAndBuildPromise()),u.length>0&&In(()=>h())})}},d=(p,g)=>{this.isDisposingOrDisposed()||(g||u.length===0||p.getSplatCount()>u[0].splatBuffer.getSplatCount())&&(u.push({splatBuffer:p,firstBuild:l===0,finalBuild:g}),l++,h())},f=this.downloadSplatSceneToSplatBuffer(e,n,s,!0,d,t,o),m=pl(f.abortHandler),_=pl();return this.addSplatSceneDownloadPromise(f),this.setSplatSceneDownloadAndBuildPromise(_.promise),f.then(()=>{this.removeSplatSceneDownloadPromise(f)}).catch(p=>{this.clearSplatSceneDownloadAndBuildPromise(),this.removeSplatSceneDownloadPromise(f);const g=this.updateError(p,"Viewer::addSplatScene -> Could not load one or more scenes");m.reject(g),a&&a(g)}),m.promise}addSplatScenes(e,t=!0,n=void 0){if(this.isLoadingOrUnloading())throw new Error("Cannot add splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot add splat scene after dispose() is called.");const i=e.length,s=[];let a;t&&(this.loadingSpinner.removeAllTasks(),a=this.loadingSpinner.addTask("Downloading..."));const o=(h,d,f,m)=>{s[h]=d;let _=0;for(let p=0;p<i;p++)_+=s[p]||0;_=_/i,f=`${_.toFixed(2)}%`,t&&m===Bt.Downloading&&this.loadingSpinner.setMessageForTask(a,_==100?"Download complete!":`Downloading: ${f}`),n&&n(_,f,m)},l=[],c=[];for(let h=0;h<e.length;h++){const d=e[h],f=d.format!==void 0&&d.format!==null?d.format:fd(d.path),m=this.downloadSplatSceneToSplatBuffer(d.path,d.splatAlphaRemovalThreshold,o.bind(this,h),!1,void 0,f,d.headers);l.push(m),c.push(m.promise)}const u=new sa((h,d)=>{Promise.all(c).then(f=>{t&&this.loadingSpinner.removeTask(a),n&&n(0,"0%",Bt.Processing),this.addSplatBuffers(f,e,!0,t,t,!1,!1).then(()=>{n&&n(100,"100%",Bt.Processing),this.clearSplatSceneDownloadAndBuildPromise(),h()})}).catch(f=>{t&&this.loadingSpinner.removeTask(a),this.clearSplatSceneDownloadAndBuildPromise(),d(this.updateError(f,"Viewer::addSplatScenes -> Could not load one or more splat scenes."))}).finally(()=>{this.removeSplatSceneDownloadPromise(u)})},h=>{for(let d of l)d.abort(h)});return this.addSplatSceneDownloadPromise(u),this.setSplatSceneDownloadAndBuildPromise(u),u}downloadSplatSceneToSplatBuffer(e,t=1,n=void 0,i=!1,s=void 0,a,o){try{if(a===fn.Splat||a===fn.KSplat||a===fn.Ply){const l=i?!1:this.optimizeSplatData;if(a===fn.Splat)return Su.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,o);if(a===fn.KSplat)return Ec.loadFromURL(e,n,i,s,o);if(a===fn.Ply)return _u.loadFromURL(e,n,i,s,t,this.inMemoryCompressionLevel,l,this.sphericalHarmonicsDegree,o)}else if(a===fn.Spz)return xu.loadFromURL(e,n,t,this.inMemoryCompressionLevel,this.optimizeSplatData,this.sphericalHarmonicsDegree,o)}catch(l){throw this.updateError(l,null)}throw new Error(`Viewer::downloadSplatSceneToSplatBuffer -> File format not supported: ${e}`)}static isProgressivelyLoadable(e){return e===fn.Splat||e===fn.KSplat||e===fn.Ply}setupSortWorker(e){if(!this.isDisposingOrDisposed())return new Promise(t=>{const n=this.integerBasedSort?Int32Array:Float32Array,i=e.getSplatCount(),s=e.getMaxSplatCount();this.sortWorker=kv(s,this.sharedMemoryForWorkers,this.enableSIMDInSort,this.integerBasedSort,this.splatMesh.dynamicMode,this.splatSortDistanceMapPrecision),this.sortWorker.onmessage=a=>{if(a.data.sortDone){if(this.sortRunning=!1,this.sharedMemoryForWorkers)this.splatMesh.updateRenderIndexes(this.sortWorkerSortedIndexes,a.data.splatRenderCount);else{const o=new Uint32Array(a.data.sortedIndexes.buffer,0,a.data.splatRenderCount);this.splatMesh.updateRenderIndexes(o,a.data.splatRenderCount)}this.lastSplatSortCount=this.splatSortCount,this.lastSortTime=a.data.sortTime,this.sortPromiseResolver(),this.sortPromiseResolver=null,this.forceRenderNextFrame(),this.runAfterNextSort.length>0&&(this.runAfterNextSort.forEach(o=>{o()}),this.runAfterNextSort.length=0)}else if(a.data.sortCanceled)this.sortRunning=!1;else if(a.data.sortSetupPhase1Complete){this.logLevel>=hr.Info&&console.log("Sorting web worker WASM setup complete."),this.sharedMemoryForWorkers?(this.sortWorkerSortedIndexes=new Uint32Array(a.data.sortedIndexesBuffer,a.data.sortedIndexesOffset,s),this.sortWorkerIndexesToSort=new Uint32Array(a.data.indexesToSortBuffer,a.data.indexesToSortOffset,s),this.sortWorkerPrecomputedDistances=new n(a.data.precomputedDistancesBuffer,a.data.precomputedDistancesOffset,s),this.sortWorkerTransforms=new Float32Array(a.data.transformsBuffer,a.data.transformsOffset,tt.MaxScenes*16)):(this.sortWorkerIndexesToSort=new Uint32Array(s),this.sortWorkerPrecomputedDistances=new n(s),this.sortWorkerTransforms=new Float32Array(tt.MaxScenes*16));for(let o=0;o<i;o++)this.sortWorkerIndexesToSort[o]=o;if(this.sortWorker.maxSplatCount=s,this.logLevel>=hr.Info){console.log("Sorting web worker ready.");const o=this.splatMesh.getSplatDataTextures(),l=o.covariances.size,c=o.centerColors.size;console.log("Covariances texture size: "+l.x+" x "+l.y),console.log("Centers/colors texture size: "+c.x+" x "+c.y)}t()}}})}updateError(e,t){return e instanceof bf?e:e instanceof co?new Error("File type or server does not support progressive loading."):t?new Error(t):e}disposeSortWorker(){this.sortWorker&&this.sortWorker.terminate(),this.sortWorker=null,this.sortPromise=null,this.sortPromiseResolver&&(this.sortPromiseResolver(),this.sortPromiseResolver=null),this.preSortMessages=[],this.sortRunning=!1}removeSplatScene(e,t=!0){return this.removeSplatScenes([e],t)}removeSplatScenes(e,t=!0){if(this.isLoadingOrUnloading())throw new Error("Cannot remove splat scene while another load or unload is already in progress.");if(this.isDisposingOrDisposed())throw new Error("Cannot remove splat scene after dispose() is called.");let n;return this.splatSceneRemovalPromise=new Promise((i,s)=>{let a;t&&(this.loadingSpinner.removeAllTasks(),this.loadingSpinner.show(),a=this.loadingSpinner.addTask("Removing splat scene..."));const o=()=>{t&&(this.loadingSpinner.hide(),this.loadingSpinner.removeTask(a))},l=u=>{o(),this.splatSceneRemovalPromise=null,u?s(u):i()},c=()=>this.isDisposingOrDisposed()?(l(),!0):!1;n=this.sortPromise||Promise.resolve(),n.then(()=>{if(c())return;const u=[],h=[],d=[];for(let f=0;f<this.splatMesh.scenes.length;f++){let m=!1;for(let _ of e)if(_===f){m=!0;break}if(!m){const _=this.splatMesh.scenes[f];u.push(_.splatBuffer),h.push(this.splatMesh.sceneOptions[f]),d.push({position:_.position.clone(),quaternion:_.quaternion.clone(),scale:_.scale.clone()})}}this.disposeSortWorker(),this.splatMesh.dispose(),this.sceneRevealMode=Xr.Instant,this.createSplatMesh(),this.addSplatBuffers(u,h,!0,!1,!0).then(()=>{c()||(o(),this.splatMesh.scenes.forEach((f,m)=>{f.position.copy(d[m].position),f.quaternion.copy(d[m].quaternion),f.scale.copy(d[m].scale)}),this.splatMesh.updateTransforms(),this.splatRenderReady=!1,this.runSplatSort(!0).then(()=>{if(c()){this.splatRenderReady=!0;return}n=this.sortPromise||Promise.resolve(),n.then(()=>{this.splatRenderReady=!0,l()})}))}).catch(f=>{l(f)})})}),this.splatSceneRemovalPromise}start(){if(this.selfDrivenMode)this.webXRMode?this.renderer.setAnimationLoop(this.selfDrivenUpdateFunc):this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc),this.selfDrivenModeRunning=!0;else throw new Error("Cannot start viewer unless it is in self driven mode.")}stop(){this.selfDrivenMode&&this.selfDrivenModeRunning&&(this.webXRMode?this.renderer.setAnimationLoop(null):cancelAnimationFrame(this.requestFrameId),this.selfDrivenModeRunning=!1)}async dispose(){if(this.isDisposingOrDisposed())return this.disposePromise;let e=[],t=[];for(let n in this.splatSceneDownloadPromises)if(this.splatSceneDownloadPromises.hasOwnProperty(n)){const i=this.splatSceneDownloadPromises[n];t.push(i),e.push(i.promise)}return this.sortPromise&&e.push(this.sortPromise),this.disposing=!0,this.disposePromise=Promise.all(e).finally(()=>{this.stop(),this.orthographicControls&&(this.orthographicControls.dispose(),this.orthographicControls=null),this.perspectiveControls&&(this.perspectiveControls.dispose(),this.perspectiveControls=null),this.controls=null,this.splatMesh&&(this.splatMesh.dispose(),this.splatMesh=null),this.sceneHelper&&(this.sceneHelper.dispose(),this.sceneHelper=null),this.resizeObserver&&(this.resizeObserver.unobserve(this.rootElement),this.resizeObserver=null),this.disposeSortWorker(),this.removeEventHandlers(),this.loadingSpinner.removeAllTasks(),this.loadingSpinner.setContainer(null),this.loadingProgressBar.hide(),this.loadingProgressBar.setContainer(null),this.infoPanel.setContainer(null),this.camera=null,this.threeScene=null,this.splatRenderReady=!1,this.initialized=!1,this.renderer&&(this.usingExternalRenderer||(this.rootElement.removeChild(this.renderer.domElement),this.renderer.dispose()),this.renderer=null),this.usingExternalRenderer||document.body.removeChild(this.rootElement),this.sortWorkerSortedIndexes=null,this.sortWorkerIndexesToSort=null,this.sortWorkerPrecomputedDistances=null,this.sortWorkerTransforms=null,this.disposed=!0,this.disposing=!1,this.disposePromise=null}),t.forEach(n=>{n.abort("Scene disposed")}),this.disposePromise}selfDrivenUpdate(){this.selfDrivenMode&&!this.webXRMode&&(this.requestFrameId=requestAnimationFrame(this.selfDrivenUpdateFunc)),this.update(),this.shouldRender()?(this.render(),this.consecutiveRenderFrames++):this.consecutiveRenderFrames=0,this.renderNextFrame=!1}forceRenderNextFrame(){this.renderNextFrame=!0}update(e,t){this.dropInMode&&this.updateForDropInMode(e,t),!(!this.initialized||!this.splatRenderReady||this.isDisposingOrDisposed())&&(this.controls&&(this.controls.update(),this.camera.isOrthographicCamera&&!this.usingExternalCamera&&Wi.setCameraPositionFromZoom(this.camera,this.camera,this.controls)),this.runSplatSort(),this.updateForRendererSizeChanges(),this.updateSplatMesh(),this.updateMeshCursor(),this.updateFPS(),this.timingSensitiveUpdates(),this.updateInfoPanel(),this.updateControlPlane())}updateForDropInMode(e,t){this.renderer=e,this.splatMesh&&this.splatMesh.setRenderer(this.renderer),this.camera=t,this.controls&&(this.controls.object=t),this.init()}updateControlPlane(){this.showControlPlane?(this.sceneHelper.setControlPlaneVisibility(!0),this.sceneHelper.positionAndOrientControlPlane(this.controls.target,this.camera.up)):this.sceneHelper.setControlPlaneVisibility(!1)}getSplatMesh(){return this.splatMesh}getSplatScene(e){return this.splatMesh.getScene(e)}getSceneCount(){return this.splatMesh.getSceneCount()}isMobile(){return navigator.userAgent.includes("Mobi")}};ce(Wi,"setCameraPositionFromZoom",function(){const e=new D;return function(t,n,i){const s=1/(n.zoom*.001);e.copy(i.target).sub(t.position).normalize().multiplyScalar(s).negate(),t.position.copy(i.target).add(e)}}()),ce(Wi,"setCameraZoomFromPosition",function(){const e=new D;return function(t,n,i){const s=e.copy(i.target).sub(n.position).length();t.zoom=1/(s*.001)}}());let Rc=Wi;const Qv={mountains:"https://mgx-backend-cdn.metadl.com/generate/images/1045434/2026-03-20/f42780d8-bcb2-4165-b95e-aef6b59a54a8.png",forest:"https://mgx-backend-cdn.metadl.com/generate/images/1045434/2026-03-20/55c003bf-512a-435d-b564-2fe0e936a34d.png",beach:"https://mgx-backend-cdn.metadl.com/generate/images/1045434/2026-03-20/1b7f32bb-22aa-4b20-8571-681830e00323.png",sunset:"https://mgx-backend-cdn.metadl.com/generate/images/1045434/2026-03-20/00dbeb51-af94-4a9d-b2e2-0560e362d112.png"};class Yv{constructor(e){this.container=e,this.scene=null,this.camera=null,this.renderer=null,this.viewer=null,this.bgMesh=null,this.splatGroup=null,this.currentBg="mountains",this.textureLoader=new ug,this.loadedTextures={},this.animationId=null,this.splatLoaded=!1,this.usingSplat=!1,this.clock=new xg,this.particles=null,this.splatPivot=null}async init(){this.scene=new uf,this.scene.background=new je(661032),this.camera=new pn(50,window.innerWidth/window.innerHeight,.1,1e3),this.camera.position.set(0,.8,4.5),this.camera.lookAt(0,.2,0),this.renderer=new Ef({antialias:!0,alpha:!1}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.setClearColor(661032,1),this.renderer.shadowMap.enabled=!0,this.renderer.toneMapping=qc,this.renderer.toneMappingExposure=1.2,this.container.appendChild(this.renderer.domElement);const e=new pg(16777215,.7);this.scene.add(e);const t=new Mh(16774630,1);t.position.set(3,5,4),this.scene.add(t);const n=new Mh(7255295,.3);n.position.set(-3,2,-2),this.scene.add(n);const i=new dg(4906624,.5,10);i.position.set(0,3,-3),this.scene.add(i),this.createGround(),await this.createBackground("mountains"),this.createParticles();try{await this.loadGaussianSplat(),this.usingSplat=!0}catch(s){console.warn("Gaussian Splat loading failed, using fallback chibi:",s),this.createFallbackAvatar()}window.addEventListener("resize",()=>this.onResize()),this.animate()}createGround(){const e=new lo(6,32),t=new sg({color:1718810,roughness:.9,metalness:.1,transparent:!0,opacity:.5}),n=new Xe(e,t);n.rotation.x=-Math.PI/2,n.position.y=-1.2,n.receiveShadow=!0,this.scene.add(n)}createParticles(){const t=new Xt,n=new Float32Array(80*3),i=new Float32Array(80*3);for(let a=0;a<80;a++){n[a*3]=(Math.random()-.5)*12,n[a*3+1]=Math.random()*6-1,n[a*3+2]=(Math.random()-.5)*8-2;const o=.5+Math.random()*.5,l=.7+Math.random()*.3,c=.5+Math.random()*.5;i[a*3]=o,i[a*3+1]=l,i[a*3+2]=c}t.setAttribute("position",new _n(n,3)),t.setAttribute("color",new _n(i,3));const s=new ff({size:.04,vertexColors:!0,transparent:!0,opacity:.6,blending:Pl,depthWrite:!1});this.particles=new Zm(t,s),this.scene.add(this.particles)}async loadGaussianSplat(){this.viewer=new Rc({selfDrivenMode:!1,renderer:this.renderer,camera:this.camera,useBuiltInControls:!1,sharedMemoryForWorkers:!1,dynamicScene:!0}),await this.viewer.addSplatScene("/assets/sam3d-splat.ply",{splatAlphaRemovalThreshold:5,showLoadingUI:!1,position:[0,-.3,.5],rotation:[0,0,0,1],scale:[1.2,1.2,1.2]}),this.splatPivot={rotationY:Math.PI,positionY:-.3,scale:1.2},this.splatLoaded=!0}async createBackground(e){return new Promise(t=>{const n=Qv[e];if(!n){t();return}if(this.loadedTextures[e]){this.applyBgTexture(this.loadedTextures[e]),t();return}this.textureLoader.load(n,i=>{i.colorSpace=En,this.loadedTextures[e]=i,this.applyBgTexture(i),t()},void 0,()=>{t()})})}applyBgTexture(e){if(this.bgMesh)this.bgMesh.material.map=e,this.bgMesh.material.needsUpdate=!0;else{const t=1.7777777777777777,n=14,i=n*t,s=new Rs(i,n),a=new ci({map:e,side:jn});this.bgMesh=new Xe(s,a),this.bgMesh.position.set(0,2,-6),this.scene.add(this.bgMesh)}}async changeBackground(e){e!==this.currentBg&&(this.currentBg=e,await this.createBackground(e))}createFallbackAvatar(){const e=new Nr,t=new gs(.28,.35,12,20),n=new Qn({color:4906624,shininess:40}),i=new Xe(t,n);i.position.y=.15,i.castShadow=!0,e.add(i);const s=new gs(.3,.15,12,20),a=new Qn({color:3717221,shininess:30}),o=new Xe(s,a);o.position.y=.35,o.scale.set(1.05,.6,1.05),e.add(o);const l=new kn(.38,24,24),c=new Qn({color:16766115,shininess:60}),u=new Xe(l,c);u.position.y=.88,u.castShadow=!0,e.add(u);const h=new kn(.09,12,12),d=new Qn({color:16777215,shininess:100}),f=new Xe(h,d);f.position.set(-.13,.92,.3),f.scale.set(1,1.1,.6),e.add(f);const m=new Xe(h,d);m.position.set(.13,.92,.3),m.scale.set(1,1.1,.6),e.add(m);const _=new kn(.055,10,10),p=new Qn({color:1710654,shininess:100}),g=new Xe(_,p);g.position.set(-.13,.92,.34),e.add(g);const x=new Xe(_,p);x.position.set(.13,.92,.34),e.add(x);const v=new kn(.02,8,8),A=new ci({color:16777215}),y=new Xe(v,A);y.position.set(-.1,.95,.36),e.add(y);const T=new Xe(v,A);T.position.set(.16,.95,.36),e.add(T);const C=new lo(.05,16),S=new ci({color:16751001,transparent:!0,opacity:.5,side:wn}),M=new Xe(C,S);M.position.set(-.22,.82,.32),M.rotation.y=.3,e.add(M);const R=new Xe(C,S);R.position.set(.22,.82,.32),R.rotation.y=-.3,e.add(R);const w=new kn(.04,12,12),P=new Qn({color:15158332,shininess:80}),I=new Xe(w,P);I.position.set(0,.76,.33),I.scale.set(1.8,.5,.5),I.name="mouth",e.add(I);const L=new Qn({color:2956137,shininess:80,specular:4864650}),B=new kn(.42,24,24,0,Math.PI*2,0,Math.PI*.55),U=new Xe(B,L);U.position.y=.96,e.add(U);const O=new Ds(.6,.12,.2),q=new Xe(O,L);q.position.set(0,1.08,.25),q.rotation.x=.2,e.add(q);const G=new gs(.08,.3,8,12),J=new Xe(G,L);J.position.set(-.32,.7,.1),J.rotation.z=.15,e.add(J);const ae=new Xe(G,L);ae.position.set(.32,.7,.1),ae.rotation.z=-.15,e.add(ae);const re=new gs(.08,.25,8,12),xe=new Qn({color:4906624,shininess:40}),Ae=new Xe(re,xe);Ae.position.set(-.35,.1,0),Ae.rotation.z=.3,e.add(Ae);const Re=new Xe(re,xe);Re.position.set(.35,.1,0),Re.rotation.z=-.3,e.add(Re);const X=new kn(.07,12,12),te=new Qn({color:16766115,shininess:60}),se=new Xe(X,te);se.position.set(-.42,-.08,0),e.add(se);const Te=new Xe(X,te);Te.position.set(.42,-.08,0),e.add(Te);const pe=new gs(.1,.2,8,12),Ee=new Qn({color:2450411,shininess:40}),Qe=new Xe(pe,Ee);Qe.position.set(-.15,-.35,.15),Qe.rotation.x=-Math.PI/3,e.add(Qe);const Pe=new Xe(pe,Ee);Pe.position.set(.15,-.35,.15),Pe.rotation.x=-Math.PI/3,e.add(Pe);const ze=new kn(.09,12,12),Ue=new Qn({color:15680580,shininess:60}),Ne=new Xe(ze,Ue);Ne.position.set(-.15,-.55,.32),Ne.scale.set(1,.7,1.3),e.add(Ne);const et=new Xe(ze,Ue);et.position.set(.15,-.55,.32),et.scale.set(1,.7,1.3),e.add(et),e.position.set(0,-.3,.5),e.rotation.y=Math.PI,this.splatGroup=e,this.scene.add(e),this.splatLoaded=!0}getSplatRotation(){return this.usingSplat&&this.splatPivot?this.splatPivot.rotationY:this.splatGroup?this.splatGroup.rotation.y:Math.PI}setSplatRotation(e){if(this.usingSplat&&this.viewer&&this.splatPivot){this.splatPivot.rotationY=e;const t=new St;t.setFromAxisAngle(new D(0,1,0),e);try{this.viewer.getSplatScene(0).position.set(0,this.splatPivot.positionY,.5),this.viewer.getSplatScene(0).quaternion.copy(t)}catch{}}else this.splatGroup&&(this.splatGroup.rotation.y=e)}setSplatScale(e){if(this.usingSplat&&this.splatPivot){this.splatPivot.scale=e;try{this.viewer.getSplatScene(0).scale.set(e,e,e)}catch{}}else this.splatGroup&&this.splatGroup.scale.set(e,e,e)}getMouth(){return this.splatGroup?this.splatGroup.getObjectByName("mouth"):null}animate(){this.animationId=requestAnimationFrame(()=>this.animate());const e=this.clock.getElapsedTime();if(this.particles){const t=this.particles.geometry.attributes.position.array;for(let n=0;n<t.length;n+=3)t[n+1]+=Math.sin(e+n)*.001,t[n+1]>5&&(t[n+1]=-1);this.particles.geometry.attributes.position.needsUpdate=!0,this.particles.rotation.y=e*.02}if(this.usingSplat&&this.viewer){this.renderer.autoClear=!0,this.renderer.render(this.scene,this.camera),this.renderer.autoClear=!1;try{this.viewer.update(),this.viewer.render()}catch{}this.renderer.autoClear=!0}else this.renderer.render(this.scene,this.camera)}onResize(){const e=window.innerWidth,t=window.innerHeight;this.camera.aspect=e/t,this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t)}isLoaded(){return this.splatLoaded}}function Mi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Uf(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Fn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},yr={duration:.5,overwrite:!1,delay:0},vu,Kt,Ct,Hn=1e8,_t=1/Hn,Ic=Math.PI*2,Kv=Ic/4,jv=0,Of=Math.sqrt,Zv=Math.cos,$v=Math.sin,Wt=function(e){return typeof e=="string"},Pt=function(e){return typeof e=="function"},Di=function(e){return typeof e=="number"},yu=function(e){return typeof e>"u"},di=function(e){return typeof e=="object"},xn=function(e){return e!==!1},Mu=function(){return typeof window<"u"},Ka=function(e){return Pt(e)||Wt(e)},Nf=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},nn=Array.isArray,Jv=/random\([^)]+\)/g,ey=/,\s*/g,Md=/(?:-?\.?\d|\.)+/gi,kf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,sr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ml=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,zf=/[+-]=-?[.\d]+/,ty=/[^,'"\[\]\s]+/gi,ny=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,bt,ti,Pc,Cu,Ln={},fo={},Hf,Vf=function(e){return(fo=Mr(e,Ln))&&yn},Tu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},ra=function(e,t){return!t&&console.warn(e)},Gf=function(e,t){return e&&(Ln[e]=t)&&fo&&(fo[e]=t)||Ln},aa=function(){return 0},iy={suppressEvents:!0,isStart:!0,kill:!1},io={suppressEvents:!0,kill:!1},sy={suppressEvents:!0},Eu={},Zi=[],Dc={},Wf,bn={},Cl={},Cd=30,so=[],bu="",wu=function(e){var t=e[0],n,i;if(di(t)||Pt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=so.length;i--&&!so[i].targetTest(t););n=so[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new pp(e[i],n)))||e.splice(i,1);return e},Cs=function(e){return e._gsap||wu(Vn(e))[0]._gsap},Xf=function(e,t,n){return(n=e[t])&&Pt(n)?e[t]():yu(n)&&e.getAttribute&&e.getAttribute(t)||n},Sn=function(e,t){return(e=e.split(",")).forEach(t)||e},Lt=function(e){return Math.round(e*1e5)/1e5||0},Et=function(e){return Math.round(e*1e7)/1e7||0},dr=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},ry=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},po=function(){var e=Zi.length,t=Zi.slice(0),n,i;for(Dc={},Zi.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ru=function(e){return!!(e._initted||e._startAt||e.add)},qf=function(e,t,n,i){Zi.length&&!Kt&&po(),e.render(t,n,!!(Kt&&t<0&&Ru(e))),Zi.length&&!Kt&&po()},Qf=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ty).length<2?t:Wt(e)?e.trim():e},Yf=function(e){return e},Bn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},ay=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Mr=function(e,t){for(var n in t)e[n]=t[n];return e},Td=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=di(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},mo=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},qr=function(e){var t=e.parent||bt,n=e.keyframes?ay(nn(e.keyframes)):Bn;if(xn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},oy=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Kf=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},wo=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ji=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Ts=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},ly=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Fc=function(e,t,n,i){return e._startAt&&(Kt?e._startAt.revert(io):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},cy=function r(e){return!e||e._ts&&r(e.parent)},Ed=function(e){return e._repeat?Cr(e._tTime,e=e.duration()+e._rDelay)*e:0},Cr=function(e,t){var n=Math.floor(e=Et(e/t));return e&&n===e?n-1:n},go=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ro=function(e){return e._end=Et(e._start+(e._tDur/Math.abs(e._ts||e._rts||_t)||0))},Io=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Et(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ro(e),n._dirty||Ts(n,e)),e},jf=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=go(e.rawTime(),t),(!t._dur||ma(0,t.totalDuration(),n)-t._tTime>_t)&&t.render(n,!0)),Ts(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-_t}},ii=function(e,t,n,i){return t.parent&&Ji(t),t._start=Et((Di(n)?n:n||e!==bt?On(e,n,t):e._time)+t._delay),t._end=Et(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kf(e,t,"_first","_last",e._sort?"_start":0),Lc(t)||(e._recent=t),i||jf(e,t),e._ts<0&&Io(e,e._tTime),e},Zf=function(e,t){return(Ln.ScrollTrigger||Tu("scrollTrigger",t))&&Ln.ScrollTrigger.create(t,e)},$f=function(e,t,n,i,s){if(Pu(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Kt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Wf!==Rn.frame)return Zi.push(e),e._lazy=[s,i],1},uy=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Lc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},hy=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&uy(e)&&!(!e._initted&&Lc(e))||(e._ts<0||e._dp._ts<0)&&!Lc(e))?0:1,o=e._rDelay,l=0,c,u,h;if(o&&e._repeat&&(l=ma(0,e._tDur,t),u=Cr(l,o),e._yoyo&&u&1&&(a=1-a),u!==Cr(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||Kt||i||e._zTime===_t||!t&&e._zTime){if(!e._initted&&$f(e,t,i,n,l))return;for(h=e._zTime,e._zTime=t||(n?_t:0),n||(n=t&&!h),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Fc(e,t,n,!0),e._onUpdate&&!n&&Pn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Pn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Ji(e,1),!n&&!Kt&&(Pn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},dy=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Tr=function(e,t,n,i){var s=e._repeat,a=Et(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Et(a*(s+1)+e._rDelay*s):a,o>0&&!i&&Io(e,e._tTime=e._tDur*o),e.parent&&Ro(e),n||Ts(e.parent,e),e},bd=function(e){return e instanceof an?Ts(e):Tr(e,e._dur)},fy={_start:0,endTime:aa,totalDuration:aa},On=function r(e,t,n){var i=e.labels,s=e._recent||fy,a=e.duration()>=Hn?s.endTime(!1):e._dur,o,l,c;return Wt(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(nn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Qr=function(e,t,n){var i=Di(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=xn(l.vars.inherit)&&l.parent;a.immediateRender=xn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Nt(t[0],a,t[s+1])},ns=function(e,t){return e||e===0?t(e):t},ma=function(e,t,n){return n<e?e:n>t?t:n},Jt=function(e,t){return!Wt(e)||!(t=ny.exec(e))?"":t[1]},py=function(e,t,n){return ns(n,function(i){return ma(e,t,i)})},Bc=[].slice,Jf=function(e,t){return e&&di(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&di(e[0]))&&!e.nodeType&&e!==ti},my=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Wt(i)&&!t||Jf(i,1)?(s=n).push.apply(s,Vn(i)):n.push(i)})||n},Vn=function(e,t,n){return Ct&&!t&&Ct.selector?Ct.selector(e):Wt(e)&&!n&&(Pc||!Er())?Bc.call((t||Cu).querySelectorAll(e),0):nn(e)?my(e,n):Jf(e)?Bc.call(e,0):e?[e]:[]},Uc=function(e){return e=Vn(e)[0]||ra("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Vn(t,n.querySelectorAll?n:n===e?ra("Invalid scope")||Cu.createElement("div"):e)}},ep=function(e){return e.sort(function(){return .5-Math.random()})},tp=function(e){if(Pt(e))return e;var t=di(e)?e:{each:e},n=Es(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,h=i;return Wt(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],h=i[1]),function(d,f,m){var _=(m||t).length,p=a[_],g,x,v,A,y,T,C,S,M;if(!p){if(M=t.grid==="auto"?0:(t.grid||[1,Hn])[1],!M){for(C=-Hn;C<(C=m[M++].getBoundingClientRect().left)&&M<_;);M<_&&M--}for(p=a[_]=[],g=l?Math.min(M,_)*u-.5:i%M,x=M===Hn?0:l?_*h/M-.5:i/M|0,C=0,S=Hn,T=0;T<_;T++)v=T%M-g,A=x-(T/M|0),p[T]=y=c?Math.abs(c==="y"?A:v):Of(v*v+A*A),y>C&&(C=y),y<S&&(S=y);i==="random"&&ep(p),p.max=C-S,p.min=S,p.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(M>_?_-1:c?c==="y"?_/M:M:Math.max(M,_/M))||0)*(i==="edges"?-1:1),p.b=_<0?s-_:s,p.u=Jt(t.amount||t.each)||0,n=n&&_<0?hp(n):n}return _=(p[d]-p.min)/p.max||0,Et(p.b+(n?n(_):_)*p.v)+p.u}},Oc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Et(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Di(n)?0:Jt(n))}},np=function(e,t){var n=nn(e),i,s;return!n&&di(e)&&(i=n=e.radius||Hn,e.values?(e=Vn(e.values),(s=!Di(e[0]))&&(i*=i)):e=Oc(e.increment)),ns(t,n?Pt(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=Hn,u=0,h=e.length,d,f;h--;)s?(d=e[h].x-o,f=e[h].y-l,d=d*d+f*f):d=Math.abs(e[h]-o),d<c&&(c=d,u=h);return u=!i||c<=i?e[u]:a,s||u===a||Di(a)?u:u+Jt(a)}:Oc(e))},ip=function(e,t,n,i){return ns(nn(e)?!t:n===!0?!!(n=0):!i,function(){return nn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},gy=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},_y=function(e,t){return function(n){return e(parseFloat(n))+(t||Jt(n))}},xy=function(e,t,n){return rp(e,t,0,1,n)},sp=function(e,t,n){return ns(n,function(i){return e[~~t(i)]})},Sy=function r(e,t,n){var i=t-e;return nn(e)?sp(e,r(0,e.length),t):ns(n,function(s){return(i+(s-e)%i)%i+e})},Ay=function r(e,t,n){var i=t-e,s=i*2;return nn(e)?sp(e,r(0,e.length-1),t):ns(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},oa=function(e){return e.replace(Jv,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ey);return ip(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},rp=function(e,t,n,i,s){var a=t-e,o=i-n;return ns(s,function(l){return n+((l-e)/a*o||0)})},vy=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var a=Wt(e),o={},l,c,u,h,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(nn(e)&&!nn(t)){for(u=[],h=e.length,d=h-2,c=1;c<h;c++)u.push(r(e[c-1],e[c]));h--,s=function(m){m*=h;var _=Math.min(d,~~m);return u[_](m-_)},n=t}else i||(e=Mr(nn(e)?[]:{},e));if(!u){for(l in t)Iu.call(o,e,l,"get",t[l]);s=function(m){return Lu(m,o)||(a?e.p:e)}}}return ns(n,s)},wd=function(e,t,n){var i=e.labels,s=Hn,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Pn=function(e,t,n){var i=e.vars,s=i[t],a=Ct,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Zi.length&&po(),o&&(Ct=o),u=l?s.apply(c,l):s.call(c),Ct=a,u},zr=function(e){return Ji(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Kt),e.progress()<1&&Pn(e,"onInterrupt"),e},rr,ap=[],op=function(e){if(e)if(e=!e.name&&e.default||e,Mu()||e.headless){var t=e.name,n=Pt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:aa,render:Lu,add:Iu,kill:Oy,modifier:Uy,rawVars:0},a={targetTest:0,get:0,getSetter:Fu,aliases:{},register:0};if(Er(),e!==i){if(bn[t])return;Bn(i,Bn(mo(e,s),a)),Mr(i.prototype,Mr(s,mo(e,a))),bn[i.prop=t]=i,e.targetTest&&(so.push(i),Eu[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Gf(t,i),e.register&&e.register(yn,i,An)}else ap.push(e)},gt=255,Hr={aqua:[0,gt,gt],lime:[0,gt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,gt],navy:[0,0,128],white:[gt,gt,gt],olive:[128,128,0],yellow:[gt,gt,0],orange:[gt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[gt,0,0],pink:[gt,192,203],cyan:[0,gt,gt],transparent:[gt,gt,gt,0]},Tl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*gt+.5|0},lp=function(e,t,n){var i=e?Di(e)?[e>>16,e>>8&gt,e&gt]:0:Hr.black,s,a,o,l,c,u,h,d,f,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Hr[e])i=Hr[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&gt,i&gt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&gt,e&gt]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(Md),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Tl(l+1/3,s,a),i[1]=Tl(l,s,a),i[2]=Tl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(kf),n&&i.length<4&&(i[3]=1),i}else i=e.match(Md)||Hr.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/gt,a=i[1]/gt,o=i[2]/gt,h=Math.max(s,a,o),d=Math.min(s,a,o),u=(h+d)/2,h===d?l=c=0:(f=h-d,c=u>.5?f/(2-h-d):f/(h+d),l=h===s?(a-o)/f+(a<o?6:0):h===a?(o-s)/f+2:(s-a)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},cp=function(e){var t=[],n=[],i=-1;return e.split($i).forEach(function(s){var a=s.match(sr)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Rd=function(e,t,n){var i="",s=(e+i).match($i),a=t?"hsla(":"rgba(",o=0,l,c,u,h;if(!s)return e;if(s=s.map(function(d){return(d=lp(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=cp(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace($i,"1").split(sr),h=c.length-1;o<h;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split($i),h=c.length-1;o<h;o++)i+=c[o]+s[o];return i+c[h]},$i=function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Hr)r+="|"+e+"\\b";return new RegExp(r+")","gi")}(),yy=/hsl[a]?\(/,up=function(e){var t=e.join(" "),n;if($i.lastIndex=0,$i.test(t))return n=yy.test(t),e[1]=Rd(e[1],n),e[0]=Rd(e[0],n,cp(e[1])),!0},la,Rn=function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,h,d,f,m=function _(p){var g=r()-i,x=p===!0,v,A,y,T;if((g>e||g<0)&&(n+=g-t),i+=g,y=i-n,v=y-a,(v>0||x)&&(T=++h.frame,d=y-h.time*1e3,h.time=y=y/1e3,a+=v+(v>=s?4:s-v),A=1),x||(l=c(_)),A)for(f=0;f<o.length;f++)o[f](y,d,T,p)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(p){return d/(1e3/(p||60))},wake:function(){Hf&&(!Pc&&Mu()&&(ti=Pc=window,Cu=ti.document||{},Ln.gsap=yn,(ti.gsapVersions||(ti.gsapVersions=[])).push(yn.version),Vf(fo||ti.GreenSockGlobals||!ti.gsap&&ti||{}),ap.forEach(op)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(p){return setTimeout(p,a-h.time*1e3+1|0)},la=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),la=0,c=aa},lagSmoothing:function(p,g){e=p||1/0,t=Math.min(g||33,e)},fps:function(p){s=1e3/(p||240),a=h.time*1e3+s},add:function(p,g,x){var v=g?function(A,y,T,C){p(A,y,T,C),h.remove(v)}:p;return h.remove(p),o[x?"unshift":"push"](v),Er(),v},remove:function(p,g){~(g=o.indexOf(p))&&o.splice(g,1)&&f>=g&&f--},_listeners:o},h}(),Er=function(){return!la&&Rn.wake()},nt={},My=/^[\d.\-M][\d.\-,\s]/,Cy=/["']/g,Ty=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(Cy,"").trim():+c,i=l.substr(o+1).trim();return t},Ey=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},by=function(e){var t=(e+"").split("("),n=nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[Ty(t[1])]:Ey(e).split(",").map(Qf)):nt._CE&&My.test(e)?nt._CE("",e):n},hp=function(e){return function(t){return 1-e(1-t)}},dp=function r(e,t){for(var n=e._first,i;n;)n instanceof an?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Es=function(e,t){return e&&(Pt(e)?e:nt[e]||by(e))||t},Fs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return Sn(e,function(o){nt[o]=Ln[o]=s,nt[a=o.toLowerCase()]=n;for(var l in s)nt[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=nt[o+"."+l]=s[l]}),s},fp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},El=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ic*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*$v((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:fp(o);return s=Ic/s,l.config=function(c,u){return r(e,c,u)},l},bl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:fp(n);return i.config=function(s){return r(e,s)},i};Sn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Fs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});nt.Linear.easeNone=nt.none=nt.Linear.easeIn;Fs("Elastic",El("in"),El("out"),El());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};Fs("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);Fs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Fs("Circ",function(r){return-(Of(1-r*r)-1)});Fs("Sine",function(r){return r===1?1:-Zv(r*Kv)+1});Fs("Back",bl("in"),bl("out"),bl());nt.SteppedEase=nt.steps=Ln.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-_t;return function(o){return((i*ma(0,a,o)|0)+s)*n}}};yr.ease=nt["quad.out"];Sn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return bu+=r+","+r+"Params,"});var pp=function(e,t){this.id=jv++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xf,this.set=t?t.getSetter:Fu},ca=function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Tr(this,+t.duration,1,1),this.data=t.data,Ct&&(this._ctx=Ct,Ct.data.push(this)),la||Rn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Tr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Er(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Io(this,n),!s._dp||s.parent||jf(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&ii(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===_t||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),qf(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ed(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ed(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Cr(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-_t?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?go(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-_t?0:this._rts,this.totalTime(ma(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ro(this),ly(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Er(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==_t&&(this._tTime-=_t)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Et(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&ii(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(xn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?go(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=sy);var i=Kt;return Kt=n,Ru(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Kt=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,bd(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,bd(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(On(this,n),xn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,xn(i)),this._dur||(this._zTime=-_t),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-_t:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-_t,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-_t)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Pt(n)?n:Yf,l=function(){var u=i.then;i.then=null,s&&s(),Pt(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){zr(this)},r}();Bn(ca.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-_t,_prom:0,_ps:!1,_rts:1});var an=function(r){Uf(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=xn(n.sortChildren),bt&&ii(n.parent||bt,Mi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Zf(Mi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Qr(0,arguments,this),this},t.from=function(i,s,a){return Qr(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Qr(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,qr(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Nt(i,s,On(this,a),1),this},t.call=function(i,s,a){return ii(this,Nt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Nt(i,a,On(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,qr(a).immediateRender=xn(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,h){return o.startAt=a,qr(o).immediateRender=xn(o.immediateRender),this.staggerTo(i,s,o,l,c,u,h)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Et(i),h=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,_,p,g,x,v,A,y,T,C;if(this!==bt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||h){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,A=this._start,v=this._ts,g=!v,h&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,p=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(p*100+i,s,a);if(d=Et(u%p),u===l?(_=this._repeat,d=c):(y=Et(u/p),_=~~y,_&&_===y&&(d=c,_--),d>c&&(d=c)),y=Cr(this._tTime,p),!o&&this._tTime&&y!==_&&this._tTime-y*p-this._dur<=0&&(y=_),T&&_&1&&(d=c-d,C=1),_!==y&&!this._lock){var S=T&&y&1,M=S===(T&&_&1);if(_<y&&(S=!S),o=S?0:u%c?c:u,this._lock=1,this.render(o||(C?0:Et(_*p)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Pn(this,"onRepeat"),this.vars.repeatRefresh&&!C&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,M&&(this._lock=2,o=S?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!C&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;dp(this,C)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=dy(this,Et(o),Et(d)),x&&(u-=d-(d=x._start))),this._tTime=u,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&(Pn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,a),d!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=-_t);break}}f=m}else{f=this._last;for(var R=i<0?i:d;f;){if(m=f._prev,(f._act||R<=f._end)&&f._ts&&x!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(R-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(R-f._start)*f._ts,s,a||Kt&&Ru(f)),d!==this._time||!this._ts&&!g){x=0,m&&(u+=this._zTime=R?-_t:_t);break}}f=m}}if(x&&!s&&(this.pause(),x.render(d>=o?0:-_t)._zTime=d>=o?1:-1,this._ts))return this._start=A,Ro(this),this.render(i,s,a);this._onUpdate&&!s&&Pn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(A===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Ji(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Pn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Di(s)||(s=On(this,s,i)),!(i instanceof ca)){if(nn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(Wt(i))return this.addLabel(i,s);if(Pt(i))i=Nt.delayedCall(0,i);else return this}return this!==i?ii(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-Hn);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Nt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return Wt(i)?this.removeLabel(i):Pt(i)?this.killTweensOf(i):(i.parent===this&&wo(this,i),i===this._recent&&(this._recent=this._last),Ts(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Et(Rn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=On(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Nt.delayedCall(0,s||aa,a);return o.data="isPause",this._hasPause=1,ii(this,o,On(this,i))},t.removePause=function(i){var s=this._first;for(i=On(this,i);s;)s._start===i&&s.data==="isPause"&&Ji(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)Qi!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=Vn(i),l=this._first,c=Di(s),u;l;)l instanceof Nt?ry(l._targets,o)&&(c?(!Qi||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=On(a,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,d=l.immediateRender,f,m=Nt.to(a,Bn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||_t,onStart:function(){if(a.pause(),!f){var p=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());m._dur!==p&&Tr(m,p,0,1).render(m._time,!0,!0),f=1}u&&u.apply(m,h||[])}},s));return d?m.render(0):m},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,Bn({startAt:{time:On(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),wd(this,On(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),wd(this,On(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+_t)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Et(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return Ts(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Ts(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=Hn,c,u,h;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(h=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,ii(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!h&&!a._dp||h&&h.smoothChildTiming)&&(a._start+=Et(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Tr(a,a===bt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(bt._ts&&(qf(bt,go(i,bt)),Wf=Rn.frame),Rn.frame>=Cd){Cd+=Fn.autoSleep||120;var s=bt._first;if((!s||!s._ts)&&Fn.autoSleep&&Rn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Rn.sleep()}}},e}(ca);Bn(an.prototype,{_lock:0,_hasPause:0,_forcing:0});var wy=function(e,t,n,i,s,a,o){var l=new An(this._pt,e,t,0,1,Ap,null,s),c=0,u=0,h,d,f,m,_,p,g,x;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=oa(i)),a&&(x=[n,i],a(x,e,t),n=x[0],i=x[1]),d=n.match(Ml)||[];h=Ml.exec(i);)m=h[0],_=i.substring(c,h.index),f?f=(f+1)%5:_.substr(-5)==="rgba("&&(f=1),m!==d[u++]&&(p=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:p,c:m.charAt(1)==="="?dr(p,m)-p:parseFloat(m)-p,m:f&&f<4?Math.round:0},c=Ml.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(zf.test(i)||g)&&(l.e=0),this._pt=l,l},Iu=function(e,t,n,i,s,a,o,l,c,u){Pt(i)&&(i=i(s||0,e,a));var h=e[t],d=n!=="get"?n:Pt(h)?c?e[t.indexOf("set")||!Pt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():h,f=Pt(h)?c?Fy:xp:Du,m;if(Wt(i)&&(~i.indexOf("random(")&&(i=oa(i)),i.charAt(1)==="="&&(m=dr(d,i)+(Jt(d)||0),(m||m===0)&&(i=m))),!u||d!==i||Nc)return!isNaN(d*i)&&i!==""?(m=new An(this._pt,e,t,+d||0,i-(d||0),typeof h=="boolean"?By:Sp,0,f),c&&(m.fp=c),o&&m.modifier(o,this,e),this._pt=m):(!h&&!(t in e)&&Tu(t,i),wy.call(this,e,t,d,i,f,l||Fn.stringFilter,c))},Ry=function(e,t,n,i,s){if(Pt(e)&&(e=Yr(e,s,t,n,i)),!di(e)||e.style&&e.nodeType||nn(e)||Nf(e))return Wt(e)?Yr(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Yr(e[o],s,t,n,i);return a},mp=function(e,t,n,i,s,a){var o,l,c,u;if(bn[e]&&(o=new bn[e]).init(s,o.rawVars?t[e]:Ry(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new An(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==rr))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},Qi,Nc,Pu=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=e._dur,_=e._startAt,p=e._targets,g=e.parent,x=g&&g.data==="nested"?g.vars.targets:p,v=e._overwrite==="auto"&&!vu,A=e.timeline,y,T,C,S,M,R,w,P,I,L,B,U,O;if(A&&(!d||!s)&&(s="none"),e._ease=Es(s,yr.ease),e._yEase=h?hp(Es(h===!0?s:h,yr.ease)):0,h&&e._yoyo&&!e._repeat&&(h=e._yEase,e._yEase=e._ease,e._ease=h),e._from=!A&&!!i.runBackwards,!A||d&&!i.stagger){if(P=p[0]?Cs(p[0]).harness:0,U=P&&i[P.prop],y=mo(i,Eu),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&m?io:iy),_._lazy=0),a){if(Ji(e._startAt=Nt.set(p,Bn({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!_&&xn(l),startAt:null,delay:0,onUpdate:c&&function(){return Pn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt||!o&&!f)&&e._startAt.revert(io),o&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&m&&!_){if(t&&(o=!1),C=Bn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&xn(l),immediateRender:o,stagger:0,parent:g},y),U&&(C[P.prop]=U),Ji(e._startAt=Nt.set(p,C)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Kt?e._startAt.revert(io):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,_t,_t);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&xn(l)||l&&!m,T=0;T<p.length;T++){if(M=p[T],w=M._gsap||wu(p)[T]._gsap,e._ptLookup[T]=L={},Dc[w.id]&&Zi.length&&po(),B=x===p?T:x.indexOf(M),P&&(I=new P).init(M,U||y,e,B,x)!==!1&&(e._pt=S=new An(e._pt,M,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(q){L[q]=S}),I.priority&&(R=1)),!P||U)for(C in y)bn[C]&&(I=mp(C,y,e,B,M,x))?I.priority&&(R=1):L[C]=S=Iu.call(e,M,C,"get",y[C],B,x,0,i.stringFilter);e._op&&e._op[T]&&e.kill(M,e._op[T]),v&&e._pt&&(Qi=e,bt.killTweensOf(M,L,e.globalTime(t)),O=!e.parent,Qi=0),e._pt&&l&&(Dc[w.id]=1)}R&&vp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!O,d&&t<=0&&A.render(Hn,!0,!0)},Iy=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,h,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(u=d[f][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Nc=1,e.vars[t]="+=0",Pu(e,o),Nc=0,l?ra(t+" not eligible for reset"):1;c.push(u)}for(f=c.length;f--;)h=c[f],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,h.e&&(h.e=Lt(n)+Jt(h.e)),h.b&&(h.b=u.s+Jt(h.b))},Py=function(e,t){var n=e[0]?Cs(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Mr({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},Dy=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(nn(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Yr=function(e,t,n,i,s){return Pt(e)?e.call(t,n,i,s):Wt(e)&&~e.indexOf("random(")?oa(e):e},gp=bu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",_p={};Sn(gp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return _p[r]=1});var Nt=function(r){Uf(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:qr(i))||this;var l=o.vars,c=l.duration,u=l.delay,h=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,_=l.defaults,p=l.scrollTrigger,g=l.yoyoEase,x=i.parent||bt,v=(nn(n)||Nf(n)?Di(n[0]):"length"in i)?[n]:Vn(n),A,y,T,C,S,M,R,w;if(o._targets=v.length?wu(v):ra("GSAP target "+n+" not found. https://gsap.com",!Fn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,m||d||Ka(c)||Ka(u)){if(i=o.vars,A=o.timeline=new an({data:"nested",defaults:_||{},targets:x&&x.data==="nested"?x.vars.targets:v}),A.kill(),A.parent=A._dp=Mi(o),A._start=0,d||Ka(c)||Ka(u)){if(C=v.length,R=d&&tp(d),di(d))for(S in d)~gp.indexOf(S)&&(w||(w={}),w[S]=d[S]);for(y=0;y<C;y++)T=mo(i,_p),T.stagger=0,g&&(T.yoyoEase=g),w&&Mr(T,w),M=v[y],T.duration=+Yr(c,Mi(o),y,M,v),T.delay=(+Yr(u,Mi(o),y,M,v)||0)-o._delay,!d&&C===1&&T.delay&&(o._delay=u=T.delay,o._start+=u,T.delay=0),A.to(M,T,R?R(y,M,v):0),A._ease=nt.none;A.duration()?c=u=0:o.timeline=0}else if(m){qr(Bn(A.vars.defaults,{ease:"none"})),A._ease=Es(m.ease||i.ease||"none");var P=0,I,L,B;if(nn(m))m.forEach(function(U){return A.to(v,U,">")}),A.duration();else{T={};for(S in m)S==="ease"||S==="easeEach"||Dy(S,m[S],T,m.easeEach);for(S in T)for(I=T[S].sort(function(U,O){return U.t-O.t}),P=0,y=0;y<I.length;y++)L=I[y],B={ease:L.e,duration:(L.t-(y?I[y-1].t:0))/100*c},B[S]=L.v,A.to(v,B,P),P+=B.duration;A.duration()<c&&A.to({},{duration:c-A.duration()})}}c||o.duration(c=A.duration())}else o.timeline=0;return f===!0&&!vu&&(Qi=Mi(o),bt.killTweensOf(v),Qi=0),ii(x,Mi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(h||!c&&!m&&o._start===Et(x._time)&&xn(h)&&cy(Mi(o))&&x.data!=="nested")&&(o._tTime=-_t,o.render(Math.max(0,-u)||0)),p&&Zf(Mi(o),p),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-_t&&!u?l:i<_t?0:i,d,f,m,_,p,g,x,v,A;if(!c)hy(this,i,s,a);else if(h!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=h,v=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Et(h%_),h===l?(m=this._repeat,d=c):(p=Et(h/_),m=~~p,m&&m===p?(d=c,m--):d>c&&(d=c)),g=this._yoyo&&m&1,g&&(A=this._yEase,d=c-d),p=Cr(this._tTime,_),d===o&&!a&&this._initted&&m===p)return this._tTime=h,this;m!==p&&(v&&this._yEase&&dp(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Et(_*m),!0).invalidate()._lock=0))}if(!this._initted){if($f(this,u?i:d,a,s,h))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&m!==p))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=h,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(A||this._ease)(d/c),this._from&&(this.ratio=x=1-x),!o&&h&&!s&&!p&&(Pn(this,"onStart"),this._tTime!==h))return this;for(f=this._pt;f;)f.r(x,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Fc(this,i,s,a),Pn(this,"onUpdate")),this._repeat&&m!==p&&this.vars.onRepeat&&!s&&this.parent&&Pn(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&Fc(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&Ji(this,1),!s&&!(u&&!o)&&(h||o||g)&&(Pn(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){la||Rn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Pu(this,c),u=this._ease(c/this._dur),Iy(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(Io(this,0),this.parent||Kf(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?zr(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Kt),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Qi&&Qi.vars.overwrite!==!0)._first||zr(this),this.parent&&a!==this.timeline.totalDuration()&&Tr(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?Vn(i):o,c=this._ptLookup,u=this._pt,h,d,f,m,_,p,g;if((!s||s==="all")&&oy(o,l))return s==="all"&&(this._pt=0),zr(this);for(h=this._op=this._op||[],s!=="all"&&(Wt(s)&&(_={},Sn(s,function(x){return _[x]=1}),s=_),s=Py(o,s)),g=o.length;g--;)if(~l.indexOf(o[g])){d=c[g],s==="all"?(h[g]=s,m=d,f={}):(f=h[g]=h[g]||{},m=s);for(_ in m)p=d&&d[_],p&&((!("kill"in p.d)||p.d.kill(_)===!0)&&wo(this,p,"_pt"),delete d[_]),f!=="all"&&(f[_]=1)}return this._initted&&!this._pt&&u&&zr(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Qr(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Qr(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return bt.killTweensOf(i,s,a)},e}(ca);Bn(Nt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Sn("staggerTo,staggerFrom,staggerFromTo",function(r){Nt[r]=function(){var e=new an,t=Bc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Du=function(e,t,n){return e[t]=n},xp=function(e,t,n){return e[t](n)},Fy=function(e,t,n,i){return e[t](i.fp,n)},Ly=function(e,t,n){return e.setAttribute(t,n)},Fu=function(e,t){return Pt(e[t])?xp:yu(e[t])&&e.setAttribute?Ly:Du},Sp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},By=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Ap=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Lu=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Uy=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Oy=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?wo(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Ny=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},vp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},An=function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Sp,this.d=l||this,this.set=c||Du,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ny,this.m=n,this.mt=s,this.tween=i},r}();Sn(bu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return Eu[r]=1});Ln.TweenMax=Ln.TweenLite=Nt;Ln.TimelineLite=Ln.TimelineMax=an;bt=new an({sortChildren:!1,defaults:yr,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Fn.stringFilter=up;var bs=[],ro={},ky=[],Id=0,zy=0,wl=function(e){return(ro[e]||ky).map(function(t){return t()})},kc=function(){var e=Date.now(),t=[];e-Id>2&&(wl("matchMediaInit"),bs.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=ti.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),wl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Id=e,wl("matchMedia"))},yp=function(){function r(t,n){this.selector=n&&Uc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=zy++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Pt(n)&&(s=i,i=n,n=Pt);var a=this,o=function(){var c=Ct,u=a.selector,h;return c&&c!==a&&c.data.push(a),s&&(a.selector=Uc(s)),Ct=a,h=i.apply(a,arguments),Pt(h)&&a._r.push(h),Ct=c,a.selector=u,a.isReverted=!1,h};return a.last=o,n===Pt?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Ct;Ct=null,n(this),Ct=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Nt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof an?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Nt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0}():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=bs.length;a--;)bs[a].id===this.id&&bs.splice(a,1)},e.revert=function(n){this.kill(n||{})},r}(),Hy=function(){function r(t){this.contexts=[],this.scope=t,Ct&&Ct.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){di(n)||(n={matches:n});var a=new yp(0,s||this.scope),o=a.conditions={},l,c,u;Ct&&!a.selector&&(a.selector=Ct.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=ti.matchMedia(n[c]),l&&(bs.indexOf(a)<0&&bs.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(kc):l.addEventListener("change",kc)));return u&&i(a,function(h){return a.add(null,h)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r}(),_o={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return op(i)})},timeline:function(e){return new an(e)},getTweensOf:function(e,t){return bt.getTweensOf(e,t)},getProperty:function(e,t,n,i){Wt(e)&&(e=Vn(e)[0]);var s=Cs(e||{}).get,a=n?Yf:Qf;return n==="native"&&(n=""),e&&(t?a((bn[t]&&bn[t].get||s)(e,t,n,i)):function(o,l,c){return a((bn[o]&&bn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=Vn(e),e.length>1){var i=e.map(function(u){return yn.quickSetter(u,t,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}e=e[0]||{};var a=bn[t],o=Cs(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var h=new a;rr._pt=0,h.init(e,n?u+n:u,rr,0,[e]),h.render(1,h),rr._pt&&Lu(1,rr)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=yn.to(e,Bn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return bt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Es(e.ease,yr.ease)),Td(yr,e||{})},config:function(e){return Td(Fn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!bn[o]&&!Ln[o]&&ra(t+" effect requires "+o+" plugin.")}),Cl[t]=function(o,l,c){return n(Vn(o),Bn(l||{},s),c)},a&&(an.prototype[t]=function(o,l,c){return this.add(Cl[t](o,di(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){nt[e]=Es(t)},parseEase:function(e,t){return arguments.length?Es(e,t):nt},getById:function(e){return bt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new an(e),i,s;for(n.smoothChildTiming=xn(e.smoothChildTiming),bt.remove(n),n._dp=0,n._time=n._tTime=bt._time,i=bt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Nt&&i.vars.onComplete===i._targets[0]))&&ii(n,i,i._start-i._delay),i=s;return ii(bt,n,0),n},context:function(e,t){return e?new yp(e,t):Ct},matchMedia:function(e){return new Hy(e)},matchMediaRefresh:function(){return bs.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||kc()},addEventListener:function(e,t){var n=ro[e]||(ro[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=ro[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:Sy,wrapYoyo:Ay,distribute:tp,random:ip,snap:np,normalize:xy,getUnit:Jt,clamp:py,splitColor:lp,toArray:Vn,selector:Uc,mapRange:rp,pipe:gy,unitize:_y,interpolate:vy,shuffle:ep},install:Vf,effects:Cl,ticker:Rn,updateRoot:an.updateRoot,plugins:bn,globalTimeline:bt,core:{PropTween:An,globals:Gf,Tween:Nt,Timeline:an,Animation:ca,getCache:Cs,_removeLinkedListItem:wo,reverting:function(){return Kt},context:function(e){return e&&Ct&&(Ct.data.push(e),e._ctx=Ct),Ct},suppressOverwrites:function(e){return vu=e}}};Sn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return _o[r]=Nt[r]});Rn.add(an.updateRoot);rr=_o.to({},{duration:0});var Vy=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Gy=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Vy(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Rl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(Wt(s)&&(l={},Sn(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}Gy(o,s)}}}},yn=_o.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)Kt?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Rl("roundProps",Oc),Rl("modifiers"),Rl("snap",np))||_o;Nt.version=an.version=yn.version="3.14.2";Hf=1;Mu()&&Er();nt.Power0;nt.Power1;nt.Power2;nt.Power3;nt.Power4;nt.Linear;nt.Quad;nt.Cubic;nt.Quart;nt.Quint;nt.Strong;nt.Elastic;nt.Back;nt.SteppedEase;nt.Bounce;nt.Sine;nt.Expo;nt.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var Pd,Yi,fr,Bu,Ms,Dd,Uu,Wy=function(){return typeof window<"u"},Fi={},ps=180/Math.PI,pr=Math.PI/180,nr=Math.atan2,Fd=1e8,Ou=/([A-Z])/g,Xy=/(left|right|width|margin|padding|x)/i,qy=/[\s,\(]\S/,oi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},zc=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Qy=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Yy=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ky=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},jy=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Mp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Zy=function(e,t,n){return e.style[t]=n},$y=function(e,t,n){return e.style.setProperty(t,n)},Jy=function(e,t,n){return e._gsap[t]=n},eM=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},tM=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},nM=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},wt="transform",vn=wt+"Origin",iM=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Fi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=oi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Ti(i,o)}):this.tfm[e]=a.x?a[e]:Ti(i,e),e===vn&&(this.tfm.zOrigin=a.zOrigin);else return oi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(wt)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(vn,t,"")),e=wt}(s||t)&&this.props.push(e,t,s[e])},Tp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},sM=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Ou,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Uu(),(!s||!s.isStart)&&!n[wt]&&(Tp(n),i.zOrigin&&n[vn]&&(n[vn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Ep=function(e,t){var n={target:e,props:[],revert:sM,save:iM};return e._gsap||yn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},bp,Hc=function(e,t){var n=Yi.createElementNS?Yi.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Yi.createElement(e);return n&&n.style?n:Yi.createElement(e)},Dn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Ou,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,br(t)||t,1)||""},Ld="O,Moz,ms,Ms,Webkit".split(","),br=function(e,t,n){var i=t||Ms,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Ld[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Ld[a]:"")+e},Vc=function(){Wy()&&window.document&&(Pd=window,Yi=Pd.document,fr=Yi.documentElement,Ms=Hc("div")||{style:{}},Hc("div"),wt=br(wt),vn=wt+"Origin",Ms.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",bp=!!br("perspective"),Uu=yn.core.reverting,Bu=1)},Bd=function(e){var t=e.ownerSVGElement,n=Hc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),fr.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),fr.removeChild(n),s},Ud=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},wp=function(e){var t,n;try{t=e.getBBox()}catch{t=Bd(e),n=1}return t&&(t.width||t.height)||n||(t=Bd(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ud(e,["x","cx","x1"])||0,y:+Ud(e,["y","cy","y1"])||0,width:0,height:0}:t},Rp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&wp(e))},es=function(e,t){if(t){var n=e.style,i;t in Fi&&t!==vn&&(t=wt),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Ou,"-$1").toLowerCase())):n.removeAttribute(t)}},Ki=function(e,t,n,i,s,a){var o=new An(e._pt,t,n,0,1,a?Cp:Mp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Od={deg:1,rad:1,turn:1},rM={grid:1,flex:1},ts=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Ms.style,l=Xy.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,d=i==="px",f=i==="%",m,_,p,g;if(i===a||!s||Od[i]||Od[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),g=e.getCTM&&Rp(e),(f||a==="%")&&(Fi[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[u],Lt(f?s/m*h:s/100*m);if(o[l?"width":"height"]=h+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===Yi||!_.appendChild)&&(_=Yi.body),p=_._gsap,p&&f&&p.width&&l&&p.time===Rn.time&&!p.uncache)return Lt(s/p.width*h);if(f&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=h+i,m=e[u],x?e.style[t]=x:es(e,t)}else(f||a==="%")&&!rM[Dn(_,"display")]&&(o.position=Dn(e,"position")),_===e&&(o.position="static"),_.appendChild(Ms),m=Ms[u],_.removeChild(Ms),o.position="absolute";return l&&f&&(p=Cs(_),p.time=Rn.time,p.width=_[u]),Lt(d?m*s/h:m&&s?h/m*s:0)},Ti=function(e,t,n,i){var s;return Bu||Vc(),t in oi&&t!=="transform"&&(t=oi[t],~t.indexOf(",")&&(t=t.split(",")[0])),Fi[t]&&t!=="transform"?(s=ha(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:So(Dn(e,vn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=xo[t]&&xo[t](e,t,n)||Dn(e,t)||Xf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?ts(e,t,s,n)+n:s},aM=function(e,t,n,i){if(!n||n==="none"){var s=br(t,e,1),a=s&&Dn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Dn(e,"borderTopColor"))}var o=new An(this._pt,e.style,t,0,1,Ap),l=0,c=0,u,h,d,f,m,_,p,g,x,v,A,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Dn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Dn(e,t)||i,_?e.style[t]=_:es(e,t)),u=[n,i],up(u),n=u[0],i=u[1],d=n.match(sr)||[],y=i.match(sr)||[],y.length){for(;h=sr.exec(i);)p=h[0],x=i.substring(l,h.index),m?m=(m+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(m=1),p!==(_=d[c++]||"")&&(f=parseFloat(_)||0,A=_.substr((f+"").length),p.charAt(1)==="="&&(p=dr(f,p)+A),g=parseFloat(p),v=p.substr((g+"").length),l=sr.lastIndex-v.length,v||(v=v||Fn.units[t]||A,l===i.length&&(i+=v,o.e+=v)),A!==v&&(f=ts(e,t,_,v)||0),o._pt={_next:o._pt,p:x||c===1?x:",",s:f,c:g-f,m:m&&m<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?Cp:Mp;return zf.test(i)&&(o.e=0),this._pt=o,o},Nd={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},oM=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Nd[n]||n,t[1]=Nd[i]||i,t.join(" ")},lM=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Fi[o]&&(l=1,o=o==="transformOrigin"?vn:wt),es(n,o);l&&(es(n,wt),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ha(n,1),a.uncache=1,Tp(i)))}},xo={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new An(e._pt,t,n,0,0,lM);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},ua=[1,0,0,1,0,0],Ip={},Pp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},kd=function(e){var t=Dn(e,wt);return Pp(t)?ua:t.substr(7).match(kf).map(Lt)},Nu=function(e,t){var n=e._gsap||Cs(e),i=e.style,s=kd(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ua:s):(s===ua&&!e.offsetParent&&e!==fr&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,fr.appendChild(e)),s=kd(e),l?i.display=l:es(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):fr.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Gc=function(e,t,n,i,s,a){var o=e._gsap,l=s||Nu(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,h=o.xOffset||0,d=o.yOffset||0,f=l[0],m=l[1],_=l[2],p=l[3],g=l[4],x=l[5],v=t.split(" "),A=parseFloat(v[0])||0,y=parseFloat(v[1])||0,T,C,S,M;n?l!==ua&&(C=f*p-m*_)&&(S=A*(p/C)+y*(-_/C)+(_*x-p*g)/C,M=A*(-m/C)+y*(f/C)-(f*x-m*g)/C,A=S,y=M):(T=wp(e),A=T.x+(~v[0].indexOf("%")?A/100*T.width:A),y=T.y+(~(v[1]||v[0]).indexOf("%")?y/100*T.height:y)),i||i!==!1&&o.smooth?(g=A-c,x=y-u,o.xOffset=h+(g*f+x*_)-g,o.yOffset=d+(g*m+x*p)-x):o.xOffset=o.yOffset=0,o.xOrigin=A,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[vn]="0px 0px",a&&(Ki(a,o,"xOrigin",c,A),Ki(a,o,"yOrigin",u,y),Ki(a,o,"xOffset",h,o.xOffset),Ki(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",A+" "+y)},ha=function(e,t){var n=e._gsap||new pp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Dn(e,vn)||"0",u,h,d,f,m,_,p,g,x,v,A,y,T,C,S,M,R,w,P,I,L,B,U,O,q,G,J,ae,re,xe,Ae,Re;return u=h=d=_=p=g=x=v=A=0,f=m=1,n.svg=!!(e.getCTM&&Rp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[wt]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[wt]!=="none"?l[wt]:"")),i.scale=i.rotate=i.translate="none"),C=Nu(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",O=""):O=!t&&e.getAttribute("data-svg-origin"),Gc(e,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,C)),y=n.xOrigin||0,T=n.yOrigin||0,C!==ua&&(w=C[0],P=C[1],I=C[2],L=C[3],u=B=C[4],h=U=C[5],C.length===6?(f=Math.sqrt(w*w+P*P),m=Math.sqrt(L*L+I*I),_=w||P?nr(P,w)*ps:0,x=I||L?nr(I,L)*ps+_:0,x&&(m*=Math.abs(Math.cos(x*pr))),n.svg&&(u-=y-(y*w+T*I),h-=T-(y*P+T*L))):(Re=C[6],xe=C[7],J=C[8],ae=C[9],re=C[10],Ae=C[11],u=C[12],h=C[13],d=C[14],S=nr(Re,re),p=S*ps,S&&(M=Math.cos(-S),R=Math.sin(-S),O=B*M+J*R,q=U*M+ae*R,G=Re*M+re*R,J=B*-R+J*M,ae=U*-R+ae*M,re=Re*-R+re*M,Ae=xe*-R+Ae*M,B=O,U=q,Re=G),S=nr(-I,re),g=S*ps,S&&(M=Math.cos(-S),R=Math.sin(-S),O=w*M-J*R,q=P*M-ae*R,G=I*M-re*R,Ae=L*R+Ae*M,w=O,P=q,I=G),S=nr(P,w),_=S*ps,S&&(M=Math.cos(S),R=Math.sin(S),O=w*M+P*R,q=B*M+U*R,P=P*M-w*R,U=U*M-B*R,w=O,B=q),p&&Math.abs(p)+Math.abs(_)>359.9&&(p=_=0,g=180-g),f=Lt(Math.sqrt(w*w+P*P+I*I)),m=Lt(Math.sqrt(U*U+Re*Re)),S=nr(B,U),x=Math.abs(S)>2e-4?S*ps:0,A=Ae?1/(Ae<0?-Ae:Ae):0),n.svg&&(O=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Pp(Dn(e,wt)),O&&e.setAttribute("transform",O))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(f*=-1,x+=_<=0?180:-180,_+=_<=0?180:-180):(m*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=h-((n.yPercent=h&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-h)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Lt(f),n.scaleY=Lt(m),n.rotation=Lt(_)+o,n.rotationX=Lt(p)+o,n.rotationY=Lt(g)+o,n.skewX=x+o,n.skewY=v+o,n.transformPerspective=A+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[vn]=So(c)),n.xOffset=n.yOffset=0,n.force3D=Fn.force3D,n.renderTransform=n.svg?uM:bp?Dp:cM,n.uncache=0,n},So=function(e){return(e=e.split(" "))[0]+" "+e[1]},Il=function(e,t,n){var i=Jt(t);return Lt(parseFloat(t)+parseFloat(ts(e,"x",n+"px",i)))+i},cM=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Dp(e,t)},hs="0deg",Ur="0px",ds=") ",Dp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,_=n.scaleY,p=n.transformPerspective,g=n.force3D,x=n.target,v=n.zOrigin,A="",y=g==="auto"&&e&&e!==1||g===!0;if(v&&(h!==hs||u!==hs)){var T=parseFloat(u)*pr,C=Math.sin(T),S=Math.cos(T),M;T=parseFloat(h)*pr,M=Math.cos(T),a=Il(x,a,C*M*-v),o=Il(x,o,-Math.sin(T)*-v),l=Il(x,l,S*M*-v+v)}p!==Ur&&(A+="perspective("+p+ds),(i||s)&&(A+="translate("+i+"%, "+s+"%) "),(y||a!==Ur||o!==Ur||l!==Ur)&&(A+=l!==Ur||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+ds),c!==hs&&(A+="rotate("+c+ds),u!==hs&&(A+="rotateY("+u+ds),h!==hs&&(A+="rotateX("+h+ds),(d!==hs||f!==hs)&&(A+="skew("+d+", "+f+ds),(m!==1||_!==1)&&(A+="scale("+m+", "+_+ds),x.style[wt]=A||"translate(0, 0)"},uM=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,_=n.yOrigin,p=n.xOffset,g=n.yOffset,x=n.forceCSS,v=parseFloat(a),A=parseFloat(o),y,T,C,S,M;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=pr,c*=pr,y=Math.cos(l)*h,T=Math.sin(l)*h,C=Math.sin(l-c)*-d,S=Math.cos(l-c)*d,c&&(u*=pr,M=Math.tan(c-u),M=Math.sqrt(1+M*M),C*=M,S*=M,u&&(M=Math.tan(u),M=Math.sqrt(1+M*M),y*=M,T*=M)),y=Lt(y),T=Lt(T),C=Lt(C),S=Lt(S)):(y=h,S=d,T=C=0),(v&&!~(a+"").indexOf("px")||A&&!~(o+"").indexOf("px"))&&(v=ts(f,"x",a,"px"),A=ts(f,"y",o,"px")),(m||_||p||g)&&(v=Lt(v+m-(m*y+_*C)+p),A=Lt(A+_-(m*T+_*S)+g)),(i||s)&&(M=f.getBBox(),v=Lt(v+i/100*M.width),A=Lt(A+s/100*M.height)),M="matrix("+y+","+T+","+C+","+S+","+v+","+A+")",f.setAttribute("transform",M),x&&(f.style[wt]=M)},hM=function(e,t,n,i,s){var a=360,o=Wt(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?ps:1),c=l-i,u=i+c+"deg",h,d;return o&&(h=s.split("_")[1],h==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),h==="cw"&&c<0?c=(c+a*Fd)%a-~~(c/a)*a:h==="ccw"&&c>0&&(c=(c-a*Fd)%a-~~(c/a)*a)),e._pt=d=new An(e._pt,t,n,i,c,Qy),d.e=u,d.u="deg",e._props.push(n),d},zd=function(e,t){for(var n in t)e[n]=t[n];return e},dM=function(e,t,n){var i=zd({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,h,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[wt]=t,o=ha(n,1),es(n,wt),n.setAttribute("transform",c)):(c=getComputedStyle(n)[wt],a[wt]=t,o=ha(n,1),a[wt]=c);for(l in Fi)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(f=Jt(c),m=Jt(u),h=f!==m?ts(n,l,c,m):parseFloat(c),d=parseFloat(u),e._pt=new An(e._pt,o,l,h,d-h,zc),e._pt.u=m||0,e._props.push(l));zd(o,i)};Sn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});xo[e>1?"border"+r:r]=function(o,l,c,u,h){var d,f;if(arguments.length<4)return d=a.map(function(m){return Ti(o,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(u+"").split(" "),f={},a.forEach(function(m,_){return f[m]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,f,h)}});var Fp={name:"css",register:Vc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,h,d,f,m,_,p,g,x,v,A,y,T,C,S,M;Bu||Vc(),this.styles=this.styles||Ep(e),S=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(bn[_]&&mp(_,t,n,i,e,s)))){if(f=typeof u,m=xo[_],f==="function"&&(u=u.call(n,i,e,s),f=typeof u),f==="string"&&~u.indexOf("random(")&&(u=oa(u)),m)m(this,e,_,u,n)&&(C=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",$i.lastIndex=0,$i.test(c)||(p=Jt(c),g=Jt(u),g?p!==g&&(c=ts(e,_,c,g)+g):p&&(u+=p)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),S.push(_,0,o[_]);else if(f!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],Wt(c)&&~c.indexOf("random(")&&(c=oa(c)),Jt(c+"")||c==="auto"||(c+=Fn.units[_]||Jt(Ti(e,_))||""),(c+"").charAt(1)==="="&&(c=Ti(e,_))):c=Ti(e,_),d=parseFloat(c),x=f==="string"&&u.charAt(1)==="="&&u.substr(0,2),x&&(u=u.substr(2)),h=parseFloat(u),_ in oi&&(_==="autoAlpha"&&(d===1&&Ti(e,"visibility")==="hidden"&&h&&(d=0),S.push("visibility",0,o.visibility),Ki(this,o,"visibility",d?"inherit":"hidden",h?"inherit":"hidden",!h)),_!=="scale"&&_!=="transform"&&(_=oi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),v=_ in Fi,v){if(this.styles.save(_),M=u,f==="string"&&u.substring(0,6)==="var(--"){if(u=Dn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var R=e.style.perspective;e.style.perspective=u,u=Dn(e,"perspective"),R?e.style.perspective=R:es(e,"perspective")}h=parseFloat(u)}if(A||(y=e._gsap,y.renderTransform&&!t.parseTransform||ha(e,t.parseTransform),T=t.smoothOrigin!==!1&&y.smooth,A=this._pt=new An(this._pt,o,wt,0,1,y.renderTransform,y,0,-1),A.dep=1),_==="scale")this._pt=new An(this._pt,y,"scaleY",y.scaleY,(x?dr(y.scaleY,x+h):h)-y.scaleY||0,zc),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){S.push(vn,0,o[vn]),u=oM(u),y.svg?Gc(e,u,0,T,0,this):(g=parseFloat(u.split(" ")[2])||0,g!==y.zOrigin&&Ki(this,y,"zOrigin",y.zOrigin,g),Ki(this,o,_,So(c),So(u)));continue}else if(_==="svgOrigin"){Gc(e,u,1,T,0,this);continue}else if(_ in Ip){hM(this,y,_,d,x?dr(d,x+u):u);continue}else if(_==="smoothOrigin"){Ki(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){dM(this,u,e);continue}}else _ in o||(_=br(_)||_);if(v||(h||h===0)&&(d||d===0)&&!qy.test(u)&&_ in o)p=(c+"").substr((d+"").length),h||(h=0),g=Jt(u)||(_ in Fn.units?Fn.units[_]:p),p!==g&&(d=ts(e,_,c,g)),this._pt=new An(this._pt,v?y:o,_,d,(x?dr(d,x+h):h)-d,!v&&(g==="px"||_==="zIndex")&&t.autoRound!==!1?jy:zc),this._pt.u=g||0,v&&M!==u?(this._pt.b=c,this._pt.e=M,this._pt.r=Ky):p!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Yy);else if(_ in o)aM.call(this,e,_,c,x?x+u:u);else if(_ in e)this.add(e,_,c||e[_],x?x+u:u,i,s);else if(_!=="parseTransform"){Tu(_,u);continue}v||(_ in o?S.push(_,0,o[_]):typeof e[_]=="function"?S.push(_,2,e[_]()):S.push(_,1,c||e[_])),a.push(_)}}C&&vp(this)},render:function(e,t){if(t.tween._time||!Uu())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Ti,aliases:oi,getSetter:function(e,t,n){var i=oi[t];return i&&i.indexOf(",")<0&&(t=i),t in Fi&&t!==vn&&(e._gsap.x||Ti(e,"x"))?n&&Dd===n?t==="scale"?eM:Jy:(Dd=n||{})&&(t==="scale"?tM:nM):e.style&&!yu(e.style[t])?Zy:~t.indexOf("-")?$y:Fu(e,t)},core:{_removeProperty:es,_getMatrix:Nu}};yn.utils.checkPrefix=br;yn.core.getStyleSaver=Ep;(function(r,e,t,n){var i=Sn(r+","+e+","+t,function(s){Fi[s]=1});Sn(e,function(s){Fn.units[s]="deg",Ip[s]=1}),oi[i[13]]=r+","+e,Sn(n,function(s){var a=s.split(":");oi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Sn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Fn.units[r]="px"});yn.registerPlugin(Fp);var yi=yn.registerPlugin(Fp)||yn;yi.core.Tween;class fM{constructor(e){this.scene=e,this.isFacingUser=!1,this.isSpeaking=!1,this.idleTimeline=null,this.lipSyncInterval=null,this.audioContext=null,this.analyser=null,this.dataArray=null,this.speakingBars=[],this._currentRotation={y:Math.PI}}init(){this.createSpeakingIndicator(),this.startIdleAnimation()}createSpeakingIndicator(){const e=document.createElement("div");e.className="speaking-indicator",e.id="speaking-indicator";for(let t=0;t<5;t++){const n=document.createElement("div");n.className="bar",n.style.height="4px",e.appendChild(n),this.speakingBars.push(n)}document.getElementById("canvas-container").appendChild(e)}startIdleAnimation(){this.scene.splatGroup&&!this.scene.usingSplat&&(this.idleTimeline=yi.timeline({repeat:-1,yoyo:!0}),this.idleTimeline.to(this.scene.splatGroup.position,{y:this.scene.splatGroup.position.y+.03,duration:2,ease:"sine.inOut"}))}stopIdleAnimation(){this.idleTimeline&&(this.idleTimeline.kill(),this.idleTimeline=null)}turnToUser(){return new Promise(e=>{if(this.isFacingUser){e();return}this.stopIdleAnimation(),this.scene.usingSplat?yi.to(this._currentRotation,{y:0,duration:.8,ease:"back.out(1.2)",onUpdate:()=>{this.scene.setSplatRotation(this._currentRotation.y)},onComplete:()=>{this.isFacingUser=!0,e()}}):this.scene.splatGroup?(yi.to(this.scene.splatGroup.rotation,{y:0,duration:.8,ease:"back.out(1.2)",onComplete:()=>{this.isFacingUser=!0,this.startIdleAnimation(),e()}}),yi.to(this.scene.splatGroup.position,{y:this.scene.splatGroup.position.y+.1,duration:.4,ease:"power2.out",yoyo:!0,repeat:1})):(this.isFacingUser=!0,e())})}turnAway(){return new Promise(e=>{if(!this.isFacingUser){e();return}this.stopIdleAnimation(),this.scene.usingSplat?yi.to(this._currentRotation,{y:Math.PI,duration:1,ease:"power2.inOut",onUpdate:()=>{this.scene.setSplatRotation(this._currentRotation.y)},onComplete:()=>{this.isFacingUser=!1,e()}}):this.scene.splatGroup?yi.to(this.scene.splatGroup.rotation,{y:Math.PI,duration:1,ease:"power2.inOut",onComplete:()=>{this.isFacingUser=!1,this.startIdleAnimation(),e()}}):(this.isFacingUser=!1,e())})}startLipSync(e){const t=document.getElementById("speaking-indicator");t&&t.classList.add("active"),this.isSpeaking=!0;try{this.audioContext||(this.audioContext=new(window.AudioContext||window.webkitAudioContext));const n=this.audioContext.createMediaElementSource(e);this.analyser=this.audioContext.createAnalyser(),this.analyser.fftSize=256,n.connect(this.analyser),this.analyser.connect(this.audioContext.destination),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.lipSyncInterval=setInterval(()=>{if(!this.analyser)return;this.analyser.getByteFrequencyData(this.dataArray);let i=0;for(let o=0;o<this.dataArray.length;o++)i+=this.dataArray[o];const s=i/this.dataArray.length,a=Math.min(s/128,1);this.animateMouth(a),this.animateSpeakingBars(a)},50)}catch{console.warn("Audio analysis not available, using fallback lip sync"),this.startFallbackLipSync()}}startFallbackLipSync(){const e=document.getElementById("speaking-indicator");e&&e.classList.add("active"),this.isSpeaking=!0;let t=0;this.lipSyncInterval=setInterval(()=>{t++;const n=(Math.sin(t*.3)+1)/2*.7+.1;this.animateMouth(n),this.animateSpeakingBars(n)},80)}animateMouth(e){const t=this.scene.getMouth();t&&yi.to(t.scale,{y:.5+e*2,x:1.5-e*.3,duration:.05,ease:"none"})}animateSpeakingBars(e){this.speakingBars.forEach((t,n)=>{const i=Math.sin(Date.now()*.01+n*.8),s=4+e*20*(.5+i*.5);t.style.height=`${Math.max(4,s)}px`})}stopLipSync(){this.isSpeaking=!1,this.lipSyncInterval&&(clearInterval(this.lipSyncInterval),this.lipSyncInterval=null);const e=document.getElementById("speaking-indicator");e&&e.classList.remove("active");const t=this.scene.getMouth();if(t&&yi.to(t.scale,{y:.5,x:1.5,duration:.2,ease:"power2.out"}),this.speakingBars.forEach(n=>{n.style.height="4px"}),this.analyser){try{this.analyser.disconnect()}catch{}this.analyser=null}}setScale(e){this.scene.setSplatScale(e)}}const Hd="https://api-inference.huggingface.co/models",pM="microsoft/DialoGPT-medium",mM="facebook/mms-tts-eng",Vd=[{text:"Hey there! I'm doing great, thanks for asking!",followUp:"Did you know I can see you through the screen? Just kidding... or am I? 👀"},{text:"Oh hello! You startled me!",followUp:"I was just admiring this beautiful scenery behind me. Pretty cool, right? 🌄"},{text:"Hi hi hi! Finally someone to talk to!",followUp:"These mountains are nice but they're terrible conversationalists. 🏔️"},{text:"Greetings, human!",followUp:"I've been sitting here for ages. My virtual legs are asleep! 😴"},{text:"Oh wow, a real person!",followUp:"Quick question - does this background make me look taller? Asking for a friend. 😄"},{text:"Hey! Welcome to my little corner of the internet!",followUp:"Make yourself comfortable. Want some virtual cookies? 🍪"},{text:"Well well well, look who showed up!",followUp:"I was just about to start a one-person dance party. Wanna join? 💃"},{text:"Hello friend!",followUp:"Fun fact: I've been practicing my turning-around skills all day. Pretty smooth, right? ✨"},{text:"Oh hi! I didn't see you there!",followUp:"Actually that's a lie, I have eyes in the back of my head. Chibi perks! 😎"},{text:"Yooo what's up!",followUp:"I was just thinking about the meaning of life. It's 42, right? Or was it pizza? 🍕"}],fs={weather:["The weather here is always perfect - it's digital! ☀️","I don't need an umbrella, I'm waterproof! Well, kinda... 🌧️"],name:["I'm Chibi-chan! Your adorable 3D companion! ✨","Call me whatever you like! I respond to 'Hey you' as well 😄"],how:["I'm fantastic! Living my best pixel life! 🌟","Never better! Though I could use a bigger screen to stretch out 😄"],joke:["Why don't scientists trust atoms? Because they make up everything! 🔬😂","What do you call a fake noodle? An impasta! 🍝😄","Why did the scarecrow win an award? He was outstanding in his field! 🌾😂"],love:["Aww, I love you too! In a totally normal human-chibi way! 💕","You're making me blush! Can chibis blush? I think I just did! 😊"],bye:["Aww, leaving already? I'll be here waiting! Don't forget about me! 👋","Goodbye friend! I'll just... turn back around and enjoy the view. See ya! 🌅"],default:["That's interesting! Tell me more! I'm all ears... well, all pixels! 👂","Hmm, let me think about that... *chibi thinking noises* 🤔","Ooh, good point! You're smarter than you look! Wait, that came out wrong... 😅","I totally understand! Well, I pretend to. I'm very good at pretending! 🎭"]};class gM{constructor(e){this.avatar=e,this.messagesContainer=document.getElementById("chat-messages"),this.chatForm=document.getElementById("chat-form"),this.chatInput=document.getElementById("chat-input"),this.typingIndicator=document.getElementById("typing-indicator"),this.statusText=document.getElementById("status-text"),this.statusDot=document.getElementById("status-dot"),this.chatStatus=document.getElementById("chat-status"),this.toggleChatBtn=document.getElementById("toggle-chat"),this.chatPanel=document.getElementById("chat-panel"),this.conversationHistory=[],this.isProcessing=!1,this.voiceSpeed=1,this.currentAudio=null,this.responseIndex=0,this.init()}init(){var e;this.chatForm.addEventListener("submit",t=>{t.preventDefault(),this.handleUserMessage()}),this.toggleChatBtn.addEventListener("click",t=>{t.stopPropagation(),this.chatPanel.classList.toggle("minimized");const n=this.toggleChatBtn.querySelector("i");n.className=this.chatPanel.classList.contains("minimized")?"fas fa-chevron-up":"fas fa-chevron-down"}),(e=document.getElementById("voice-speed"))==null||e.addEventListener("input",t=>{this.voiceSpeed=parseFloat(t.target.value)})}async handleUserMessage(){const e=this.chatInput.value.trim();if(!(!e||this.isProcessing)){this.isProcessing=!0,this.chatInput.value="",this.setStatus("Thinking...","thinking"),this.addMessage(e,"user"),this.showTyping(!0);try{const t=await this.getAIResponse(e);this.showTyping(!1),this.setStatus("Turning around...","active"),await this.avatar.turnToUser(),await this.delay(300),this.addMessage(t.text,"bot"),this.setStatus("Speaking...","speaking"),await this.speakResponse(t.text),t.followUp&&(await this.delay(800),this.addMessage(t.followUp,"bot"),await this.speakResponse(t.followUp)),this.setStatus("Ready","ready"),await this.delay(2e3),await this.avatar.turnAway()}catch(t){console.error("Chat error:",t),this.showTyping(!1),this.addMessage("Oops! My brain glitched for a second. Try again? 🤖","bot"),this.setStatus("Ready","ready")}this.isProcessing=!1}}async getAIResponse(e){const t=e.toLowerCase();try{const n=await this.queryHuggingFace(e);if(n&&n.length>0)return{text:n,followUp:null}}catch(n){console.warn("HF API unavailable, using fallback:",n.message)}if(t.includes("weather"))return{text:this.pickRandom(fs.weather),followUp:null};if(t.includes("name")||t.includes("who are you"))return{text:this.pickRandom(fs.name),followUp:null};if(t.includes("how are")||t.includes("how r u")||t.includes("how's it"))return{text:this.pickRandom(fs.how),followUp:null};if(t.includes("joke")||t.includes("funny"))return{text:this.pickRandom(fs.joke),followUp:null};if(t.includes("love")||t.includes("like you")||t.includes("cute"))return{text:this.pickRandom(fs.love),followUp:null};if(t.includes("bye")||t.includes("goodbye")||t.includes("see ya"))return{text:this.pickRandom(fs.bye),followUp:null};if(t.includes("hi")||t.includes("hello")||t.includes("hey")){const n=Vd[this.responseIndex%Vd.length];return this.responseIndex++,n}return{text:this.pickRandom(fs.default),followUp:null}}async queryHuggingFace(e){const t=new AbortController,n=setTimeout(()=>t.abort(),8e3);try{const i=await fetch(`${Hd}/${pM}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:{past_user_inputs:this.conversationHistory.filter(a=>a.role==="user").map(a=>a.text).slice(-3),generated_responses:this.conversationHistory.filter(a=>a.role==="bot").map(a=>a.text).slice(-3),text:e},parameters:{max_length:100,temperature:.8}}),signal:t.signal});if(clearTimeout(n),!i.ok)throw new Error(`HF API error: ${i.status}`);const s=await i.json();return s.generated_text?(this.conversationHistory.push({role:"user",text:e}),this.conversationHistory.push({role:"bot",text:s.generated_text}),s.generated_text):null}catch(i){throw clearTimeout(n),i}}async speakResponse(e){return new Promise(async t=>{try{const n=await this.generateTTS(e);if(n){await this.playAudioBlob(n),t();return}}catch(n){console.warn("HF TTS unavailable, using browser TTS:",n.message)}if("speechSynthesis"in window){const n=new SpeechSynthesisUtterance(e);n.rate=this.voiceSpeed,n.pitch=1.3,n.volume=.8,this.avatar.startFallbackLipSync(),n.onend=()=>{this.avatar.stopLipSync(),t()},n.onerror=()=>{this.avatar.stopLipSync(),t()},window.speechSynthesis.speak(n)}else this.avatar.startFallbackLipSync(),await this.delay(e.length*60),this.avatar.stopLipSync(),t()})}async generateTTS(e){const t=new AbortController,n=setTimeout(()=>t.abort(),15e3);try{const i=await fetch(`${Hd}/${mM}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({inputs:e}),signal:t.signal});if(clearTimeout(n),!i.ok)throw new Error(`TTS API error: ${i.status}`);const s=await i.blob();return s.size>0?s:null}catch(i){throw clearTimeout(n),i}}async playAudioBlob(e){return new Promise(t=>{const n=URL.createObjectURL(e),i=new Audio(n);i.playbackRate=this.voiceSpeed,this.currentAudio=i;try{this.avatar.startLipSync(i)}catch{this.avatar.startFallbackLipSync()}i.onended=()=>{this.avatar.stopLipSync(),URL.revokeObjectURL(n),this.currentAudio=null,t()},i.onerror=()=>{this.avatar.stopLipSync(),URL.revokeObjectURL(n),this.currentAudio=null,t()},i.play().catch(()=>{this.avatar.stopLipSync(),this.avatar.startFallbackLipSync(),setTimeout(()=>{this.avatar.stopLipSync(),t()},2e3)})})}addMessage(e,t){const n=document.createElement("div");n.className=`message ${t}-message`;const i=document.createElement("div");i.className="message-bubble";const s=document.createElement("p");s.textContent=e,i.appendChild(s);const a=document.createElement("span");a.className="message-time",a.textContent=this.getTimeString(),n.appendChild(i),n.appendChild(a),this.messagesContainer.appendChild(n),this.messagesContainer.scrollTop=this.messagesContainer.scrollHeight}showTyping(e){e?this.typingIndicator.classList.remove("hidden"):this.typingIndicator.classList.add("hidden")}setStatus(e,t){this.statusText&&(this.statusText.textContent=e),this.chatStatus&&(this.chatStatus.textContent=t==="ready"?"Online":e),this.statusDot&&(this.statusDot.style.background=t==="speaking"?"#f59e0b":t==="thinking"?"#60a5fa":"#4ade80")}getTimeString(){return new Date().toLocaleTimeString([],{hour:"2-digit",minute:"2-digit"})}pickRandom(e){return e[Math.floor(Math.random()*e.length)]}delay(e){return new Promise(t=>setTimeout(t,e))}}class _M{constructor(){this.sceneManager=null,this.avatarController=null,this.chatManager=null}async init(){const e=document.getElementById("canvas-container"),t=document.getElementById("loading-screen"),n=document.getElementById("app");try{this.sceneManager=new Yv(e),await this.sceneManager.init(),this.avatarController=new fM(this.sceneManager),this.avatarController.init(),this.chatManager=new gM(this.avatarController),this.setupSidebar(),this.setupSettings(),n.classList.remove("hidden"),t.classList.add("fade-out"),setTimeout(()=>{t.style.display="none"},600)}catch(i){console.error("App initialization error:",i),document.querySelector(".loader-text").textContent="Failed to load",document.querySelector(".loader-subtext").textContent="Please refresh the page"}}setupSidebar(){const e=document.getElementById("sidebar"),t=document.getElementById("toggle-sidebar"),n=document.querySelectorAll(".bg-thumb");t.addEventListener("click",()=>{e.classList.toggle("collapsed"),t.classList.toggle("shifted")}),n.forEach(i=>{i.addEventListener("click",async()=>{const s=i.dataset.bg;s!==this.sceneManager.currentBg&&(n.forEach(a=>a.classList.remove("active")),i.classList.add("active"),await this.sceneManager.changeBackground(s))})})}setupSettings(){const e=document.getElementById("avatar-size");e&&e.addEventListener("input",t=>{const n=parseFloat(t.target.value);this.avatarController.setScale(n)})}}const xM=new _M;xM.init();
