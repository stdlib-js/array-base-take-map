// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-resolve-getter@v0.2.2-esm/index.mjs";import{factory as t}from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ind@v0.2.2-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-assert-is-complex-floating-point-data-type@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.1-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-reinterpret-complex@v0.1.2-esm/index.mjs";function a(e,r,n,l){var a,o,i,d,c,m,p;for(o=s(e),i=s(r),a=t(n),c=e.length-1,d=[],m=0;m<r.length;m++)p=a(i(r,m),c),d.push(l.call(null,o(e,p),p));return d}function o(e,s,a,o,i,d,c){var m,p,h;return m=n(e),p=n(s),h=n(o),m.accessorProtocol||p.accessorProtocol||h.accessorProtocol?r(m.dtype)&&r(h.dtype)?(function(e,s,r,n,l,a,o){var i,d,c,m,p,h,f,g;for(d=s.data,c=s.accessors[0],i=t(r),m=e.length/2-1,h=2*l,p=2*a,f=0;f<d.length;f++)g=2*i(c(d,f),m),n[p]=o.call(null,e[g],g),n[p+1]=o.call(null,e[g+1],g+1),p+=h}(l(e,0),p,a,l(o,0),i,d,c),o):(function(e,s,r,n,l,a,o){var i,d,c,m,p,h,f,g,j,v,u;for(d=e.data,c=s.data,m=n.data,p=e.accessors[0],h=s.accessors[0],f=n.accessors[1],i=t(r),g=d.length-1,j=a,v=0;v<c.length;v++)u=i(h(c,v),g),f(m,j,o.call(null,p(d,u),u)),j+=l}(m,p,a,h,i,d,c),o):(function(e,s,r,n,l,a,o){var i,d,c,m,p;for(i=t(r),d=e.length-1,c=a,m=0;m<s.length;m++)p=i(s[m],d),n[c]=e[p],c+=l;for(m=0;m<n.length;m++)n[m]=o.call(null,n[m],m)}(e,s,a,o,i,d,c),o)}e(a,"assign",o);export{o as assign,a as default};
//# sourceMappingURL=index.mjs.map
