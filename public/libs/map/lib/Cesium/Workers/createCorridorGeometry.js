define(["./GeometryOffsetAttribute-24539cee","./arrayRemoveDuplicates-b1a32b72","./Transforms-0513682f","./Matrix2-860854d4","./RuntimeError-1349fdaf","./ComponentDatatype-8f55628c","./PolylineVolumeGeometryLibrary-56728ca3","./CorridorGeometryLibrary-f13980a3","./when-4bbc8319","./GeometryAttribute-51279fbd","./GeometryAttributes-7827a6c2","./IndexDatatype-1d853600","./PolygonPipeline-3743e201","./VertexFormat-b8b51b88","./combine-e9466e32","./WebGLConstants-508b9636","./EllipsoidTangentPlane-f1d486a2","./AxisAlignedBoundingBox-0f9561a9","./IntersectionTests-b659b8db","./Plane-0e4269ac","./PolylinePipeline-5b728e6e","./EllipsoidGeodesic-0a6aa4ee","./EllipsoidRhumbLine-d4d43630"],(function(t,e,r,a,i,o,n,s,l,d,u,m,c,y,f,p,g,h,b,C,A,_,w){"use strict";const v=new a.Cartesian3,T=new a.Cartesian3,G=new a.Cartesian3,E=new a.Cartesian3,V=new a.Cartesian3,x=new a.Cartesian3,F=new a.Cartesian3,L=new a.Cartesian3;function P(t,e){for(let r=0;r<t.length;r++)t[r]=e.scaleToGeodeticSurface(t[r],t[r]);return t}function N(t,e,r,i,o,n){const l=t.normals,d=t.tangents,u=t.bitangents,m=a.Cartesian3.normalize(a.Cartesian3.cross(r,e,F),F);n.normal&&s.CorridorGeometryLibrary.addAttribute(l,e,i,o),n.tangent&&s.CorridorGeometryLibrary.addAttribute(d,m,i,o),n.bitangent&&s.CorridorGeometryLibrary.addAttribute(u,r,i,o)}function D(t,e,r){const i=t.positions,n=t.corners,c=t.endPositions,y=t.lefts,f=t.normals,p=new u.GeometryAttributes;let g,h,b,C=0,A=0,_=0;for(h=0;h<i.length;h+=2)b=i[h].length-3,C+=b,_+=2*b,A+=i[h+1].length-3;for(C+=3,A+=3,h=0;h<n.length;h++){g=n[h];const t=n[h].leftPositions;l.defined(t)?(b=t.length,C+=b,_+=b):(b=n[h].rightPositions.length,A+=b,_+=b)}const w=l.defined(c);let V;w&&(V=c[0].length-3,C+=V,A+=V,V/=3,_+=6*V);const P=C+A,D=new Float64Array(P),M={normals:e.normal?new Float32Array(P):void 0,tangents:e.tangent?new Float32Array(P):void 0,bitangents:e.bitangent?new Float32Array(P):void 0};let O,I,S,R,k,H,z=0,B=P-1,U=v,Y=T;const W=V/2,q=m.IndexDatatype.createTypedArray(P/3,_);let J=0;if(w){H=G,k=E;const t=c[0];for(U=a.Cartesian3.fromArray(f,0,U),Y=a.Cartesian3.fromArray(y,0,Y),h=0;h<W;h++)H=a.Cartesian3.fromArray(t,3*(W-1-h),H),k=a.Cartesian3.fromArray(t,3*(W+h),k),s.CorridorGeometryLibrary.addAttribute(D,k,z),s.CorridorGeometryLibrary.addAttribute(D,H,void 0,B),N(M,U,Y,z,B,e),I=z/3,R=I+1,O=(B-2)/3,S=O-1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3}let j,K,Q=0,X=0,Z=i[Q++],$=i[Q++];for(D.set(Z,z),D.set($,B-$.length+1),Y=a.Cartesian3.fromArray(y,X,Y),b=$.length-3,h=0;h<b;h+=3)j=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z,h,F),F),K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,b-h,L),L),U=a.Cartesian3.normalize(a.Cartesian3.add(j,K,U),U),N(M,U,Y,z,B,e),I=z/3,R=I+1,O=(B-2)/3,S=O-1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3;for(j=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z,b,F),F),K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,b,L),L),U=a.Cartesian3.normalize(a.Cartesian3.add(j,K,U),U),X+=3,h=0;h<n.length;h++){let t;g=n[h];const o=g.leftPositions,d=g.rightPositions;let u,m,c=x,p=G,C=E;if(U=a.Cartesian3.fromArray(f,X,U),l.defined(o)){for(N(M,U,Y,void 0,B,e),B-=3,u=R,m=S,t=0;t<o.length/3;t++)c=a.Cartesian3.fromArray(o,3*t,c),q[J++]=u,q[J++]=m-t-1,q[J++]=m-t,s.CorridorGeometryLibrary.addAttribute(D,c,void 0,B),p=a.Cartesian3.fromArray(D,3*(m-t-1),p),C=a.Cartesian3.fromArray(D,3*u,C),Y=a.Cartesian3.normalize(a.Cartesian3.subtract(p,C,Y),Y),N(M,U,Y,void 0,B,e),B-=3;c=a.Cartesian3.fromArray(D,3*u,c),p=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*m,p),c,p),C=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*(m-t),C),c,C),Y=a.Cartesian3.normalize(a.Cartesian3.add(p,C,Y),Y),N(M,U,Y,z,void 0,e),z+=3}else{for(N(M,U,Y,z,void 0,e),z+=3,u=S,m=R,t=0;t<d.length/3;t++)c=a.Cartesian3.fromArray(d,3*t,c),q[J++]=u,q[J++]=m+t,q[J++]=m+t+1,s.CorridorGeometryLibrary.addAttribute(D,c,z),p=a.Cartesian3.fromArray(D,3*u,p),C=a.Cartesian3.fromArray(D,3*(m+t),C),Y=a.Cartesian3.normalize(a.Cartesian3.subtract(p,C,Y),Y),N(M,U,Y,z,void 0,e),z+=3;c=a.Cartesian3.fromArray(D,3*u,c),p=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*(m+t),p),c,p),C=a.Cartesian3.subtract(a.Cartesian3.fromArray(D,3*m,C),c,C),Y=a.Cartesian3.normalize(a.Cartesian3.negate(a.Cartesian3.add(C,p,Y),Y),Y),N(M,U,Y,void 0,B,e),B-=3}for(Z=i[Q++],$=i[Q++],Z.splice(0,3),$.splice($.length-3,3),D.set(Z,z),D.set($,B-$.length+1),b=$.length-3,X+=3,Y=a.Cartesian3.fromArray(y,X,Y),t=0;t<$.length;t+=3)j=r.geodeticSurfaceNormal(a.Cartesian3.fromArray(Z,t,F),F),K=r.geodeticSurfaceNormal(a.Cartesian3.fromArray($,b-t,L),L),U=a.Cartesian3.normalize(a.Cartesian3.add(j,K,U),U),N(M,U,Y,z,B,e),R=z/3,I=R-1,S=(B-2)/3,O=S+1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3;z-=3,B+=3}if(U=a.Cartesian3.fromArray(f,f.length-3,U),N(M,U,Y,z,B,e),w){z+=3,B-=3,H=G,k=E;const t=c[1];for(h=0;h<W;h++)H=a.Cartesian3.fromArray(t,3*(V-h-1),H),k=a.Cartesian3.fromArray(t,3*h,k),s.CorridorGeometryLibrary.addAttribute(D,H,void 0,B),s.CorridorGeometryLibrary.addAttribute(D,k,z),N(M,U,Y,z,B,e),R=z/3,I=R-1,S=(B-2)/3,O=S+1,q[J++]=O,q[J++]=I,q[J++]=S,q[J++]=S,q[J++]=I,q[J++]=R,z+=3,B-=3}if(p.position=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:D}),e.st){const t=new Float32Array(P/3*2);let e,r,a=0;if(w){C/=3,A/=3;const i=Math.PI/(V+1);let n;r=1/(C-V+1),e=1/(A-V+1);const s=V/2;for(h=s+1;h<V+1;h++)n=o.CesiumMath.PI_OVER_TWO+i*h,t[a++]=e*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n));for(h=1;h<A-V+1;h++)t[a++]=h*e,t[a++]=0;for(h=V;h>s;h--)n=o.CesiumMath.PI_OVER_TWO-h*i,t[a++]=1-e*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n));for(h=s;h>0;h--)n=o.CesiumMath.PI_OVER_TWO-i*h,t[a++]=1-r*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n));for(h=C-V;h>0;h--)t[a++]=h*r,t[a++]=1;for(h=1;h<s+1;h++)n=o.CesiumMath.PI_OVER_TWO+i*h,t[a++]=r*(1+Math.cos(n)),t[a++]=.5*(1+Math.sin(n))}else{for(C/=3,A/=3,r=1/(C-1),e=1/(A-1),h=0;h<A;h++)t[a++]=h*e,t[a++]=0;for(h=C;h>0;h--)t[a++]=(h-1)*r,t[a++]=1}p.st=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:t})}return e.normal&&(p.normal=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M.normals})),e.tangent&&(p.tangent=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M.tangents})),e.bitangent&&(p.bitangent=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:M.bitangents})),{attributes:p,indices:q}}function M(t,e,r){r[e++]=t[0],r[e++]=t[1],r[e++]=t[2];for(let a=3;a<t.length;a+=3){const i=t[a],o=t[a+1],n=t[a+2];r[e++]=i,r[e++]=o,r[e++]=n,r[e++]=i,r[e++]=o,r[e++]=n}return r[e++]=t[0],r[e++]=t[1],r[e++]=t[2],r}function O(e,r){const i=new y.VertexFormat({position:r.position,normal:r.normal||r.bitangent||e.shadowVolume,tangent:r.tangent,bitangent:r.normal||r.bitangent,st:r.st}),n=e.ellipsoid,u=D(s.CorridorGeometryLibrary.computePositions(e),i,n),f=e.height,p=e.extrudedHeight;let g=u.attributes;const h=u.indices;let b=g.position.values,C=b.length;const A=new Float64Array(6*C);let _=new Float64Array(C);_.set(b);let w,F=new Float64Array(4*C);b=c.PolygonPipeline.scaleToGeodeticHeight(b,f,n),F=M(b,0,F),_=c.PolygonPipeline.scaleToGeodeticHeight(_,p,n),F=M(_,2*C,F),A.set(b),A.set(_,C),A.set(F,2*C),g.position.values=A,g=function(t,e){if(!(e.normal||e.tangent||e.bitangent||e.st))return t;const r=t.position.values;let i,o;(e.normal||e.bitangent)&&(i=t.normal.values,o=t.bitangent.values);const n=t.position.values.length/18,l=3*n,d=2*n,u=2*l;let m;if(e.normal||e.bitangent||e.tangent){const n=e.normal?new Float32Array(6*l):void 0,d=e.tangent?new Float32Array(6*l):void 0,c=e.bitangent?new Float32Array(6*l):void 0;let y=v,f=T,p=G,g=E,h=V,b=x,C=u;for(m=0;m<l;m+=3){const t=C+u;y=a.Cartesian3.fromArray(r,m,y),f=a.Cartesian3.fromArray(r,m+l,f),p=a.Cartesian3.fromArray(r,(m+3)%l,p),f=a.Cartesian3.subtract(f,y,f),p=a.Cartesian3.subtract(p,y,p),g=a.Cartesian3.normalize(a.Cartesian3.cross(f,p,g),g),e.normal&&(s.CorridorGeometryLibrary.addAttribute(n,g,t),s.CorridorGeometryLibrary.addAttribute(n,g,t+3),s.CorridorGeometryLibrary.addAttribute(n,g,C),s.CorridorGeometryLibrary.addAttribute(n,g,C+3)),(e.tangent||e.bitangent)&&(b=a.Cartesian3.fromArray(i,m,b),e.bitangent&&(s.CorridorGeometryLibrary.addAttribute(c,b,t),s.CorridorGeometryLibrary.addAttribute(c,b,t+3),s.CorridorGeometryLibrary.addAttribute(c,b,C),s.CorridorGeometryLibrary.addAttribute(c,b,C+3)),e.tangent&&(h=a.Cartesian3.normalize(a.Cartesian3.cross(b,g,h),h),s.CorridorGeometryLibrary.addAttribute(d,h,t),s.CorridorGeometryLibrary.addAttribute(d,h,t+3),s.CorridorGeometryLibrary.addAttribute(d,h,C),s.CorridorGeometryLibrary.addAttribute(d,h,C+3))),C+=6}if(e.normal){for(n.set(i),m=0;m<l;m+=3)n[m+l]=-i[m],n[m+l+1]=-i[m+1],n[m+l+2]=-i[m+2];t.normal.values=n}else t.normal=void 0;if(e.bitangent?(c.set(o),c.set(o,l),t.bitangent.values=c):t.bitangent=void 0,e.tangent){const e=t.tangent.values;d.set(e),d.set(e,l),t.tangent.values=d}}if(e.st){const e=t.st.values,r=new Float32Array(6*d);r.set(e),r.set(e,d);let a=2*d;for(let t=0;t<2;t++){for(r[a++]=e[0],r[a++]=e[1],m=2;m<d;m+=2){const t=e[m],i=e[m+1];r[a++]=t,r[a++]=i,r[a++]=t,r[a++]=i}r[a++]=e[0],r[a++]=e[1]}t.st.values=r}return t}(g,r);const L=C/3;if(e.shadowVolume){const t=g.normal.values;C=t.length;let e=new Float32Array(6*C);for(w=0;w<C;w++)t[w]=-t[w];e.set(t,C),e=M(t,4*C,e),g.extrudeDirection=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:e}),r.normal||(g.normal=void 0)}if(l.defined(e.offsetAttribute)){let r=new Uint8Array(6*L);if(e.offsetAttribute===t.GeometryOffsetAttribute.TOP)r=t.arrayFill(r,1,0,L),r=t.arrayFill(r,1,2*L,4*L);else{const a=e.offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1;r=t.arrayFill(r,a)}g.applyOffset=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:r})}const P=h.length,N=L+L,O=m.IndexDatatype.createTypedArray(A.length/3,2*P+3*N);O.set(h);let I,S,R,k,H=P;for(w=0;w<P;w+=3){const t=h[w],e=h[w+1],r=h[w+2];O[H++]=r+L,O[H++]=e+L,O[H++]=t+L}for(w=0;w<N;w+=2)I=w+N,S=I+N,R=I+1,k=S+1,O[H++]=I,O[H++]=S,O[H++]=R,O[H++]=R,O[H++]=S,O[H++]=k;return{attributes:g,indices:O}}const I=new a.Cartesian3,S=new a.Cartesian3,R=new a.Cartographic;function k(t,e,r,i,o,n){const s=a.Cartesian3.subtract(e,t,I);a.Cartesian3.normalize(s,s);const l=r.geodeticSurfaceNormal(t,S),d=a.Cartesian3.cross(s,l,I);a.Cartesian3.multiplyByScalar(d,i,d);let u=o.latitude,m=o.longitude,c=n.latitude,y=n.longitude;a.Cartesian3.add(t,d,S),r.cartesianToCartographic(S,R);let f=R.latitude,p=R.longitude;u=Math.min(u,f),m=Math.min(m,p),c=Math.max(c,f),y=Math.max(y,p),a.Cartesian3.subtract(t,d,S),r.cartesianToCartographic(S,R),f=R.latitude,p=R.longitude,u=Math.min(u,f),m=Math.min(m,p),c=Math.max(c,f),y=Math.max(y,p),o.latitude=u,o.longitude=m,n.latitude=c,n.longitude=y}const H=new a.Cartesian3,z=new a.Cartesian3,B=new a.Cartographic,U=new a.Cartographic;function Y(t,r,i,o,s){t=P(t,r);const d=e.arrayRemoveDuplicates(t,a.Cartesian3.equalsEpsilon),u=d.length;if(u<2||i<=0)return new a.Rectangle;const m=.5*i;let c,y;if(B.latitude=Number.POSITIVE_INFINITY,B.longitude=Number.POSITIVE_INFINITY,U.latitude=Number.NEGATIVE_INFINITY,U.longitude=Number.NEGATIVE_INFINITY,o===n.CornerType.ROUNDED){const t=d[0];a.Cartesian3.subtract(t,d[1],H),a.Cartesian3.normalize(H,H),a.Cartesian3.multiplyByScalar(H,m,H),a.Cartesian3.add(t,H,z),r.cartesianToCartographic(z,R),c=R.latitude,y=R.longitude,B.latitude=Math.min(B.latitude,c),B.longitude=Math.min(B.longitude,y),U.latitude=Math.max(U.latitude,c),U.longitude=Math.max(U.longitude,y)}for(let t=0;t<u-1;++t)k(d[t],d[t+1],r,m,B,U);const f=d[u-1];a.Cartesian3.subtract(f,d[u-2],H),a.Cartesian3.normalize(H,H),a.Cartesian3.multiplyByScalar(H,m,H),a.Cartesian3.add(f,H,z),k(f,z,r,m,B,U),o===n.CornerType.ROUNDED&&(r.cartesianToCartographic(z,R),c=R.latitude,y=R.longitude,B.latitude=Math.min(B.latitude,c),B.longitude=Math.min(B.longitude,y),U.latitude=Math.max(U.latitude,c),U.longitude=Math.max(U.longitude,y));const p=l.defined(s)?s:new a.Rectangle;return p.north=U.latitude,p.south=B.latitude,p.east=U.longitude,p.west=B.longitude,p}function W(t){const e=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).positions,r=t.width,i=l.defaultValue(t.height,0),s=l.defaultValue(t.extrudedHeight,i);this._positions=e,this._ellipsoid=a.Ellipsoid.clone(l.defaultValue(t.ellipsoid,a.Ellipsoid.WGS84)),this._vertexFormat=y.VertexFormat.clone(l.defaultValue(t.vertexFormat,y.VertexFormat.DEFAULT)),this._width=r,this._height=Math.max(i,s),this._extrudedHeight=Math.min(i,s),this._cornerType=l.defaultValue(t.cornerType,n.CornerType.ROUNDED),this._granularity=l.defaultValue(t.granularity,o.CesiumMath.RADIANS_PER_DEGREE),this._shadowVolume=l.defaultValue(t.shadowVolume,!1),this._workerName="createCorridorGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this.packedLength=1+e.length*a.Cartesian3.packedLength+a.Ellipsoid.packedLength+y.VertexFormat.packedLength+7}W.pack=function(t,e,r){r=l.defaultValue(r,0);const i=t._positions,o=i.length;e[r++]=o;for(let t=0;t<o;++t,r+=a.Cartesian3.packedLength)a.Cartesian3.pack(i[t],e,r);return a.Ellipsoid.pack(t._ellipsoid,e,r),r+=a.Ellipsoid.packedLength,y.VertexFormat.pack(t._vertexFormat,e,r),r+=y.VertexFormat.packedLength,e[r++]=t._width,e[r++]=t._height,e[r++]=t._extrudedHeight,e[r++]=t._cornerType,e[r++]=t._granularity,e[r++]=t._shadowVolume?1:0,e[r]=l.defaultValue(t._offsetAttribute,-1),e};const q=a.Ellipsoid.clone(a.Ellipsoid.UNIT_SPHERE),J=new y.VertexFormat,j={positions:void 0,ellipsoid:q,vertexFormat:J,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,shadowVolume:void 0,offsetAttribute:void 0};return W.unpack=function(t,e,r){e=l.defaultValue(e,0);const i=t[e++],o=new Array(i);for(let r=0;r<i;++r,e+=a.Cartesian3.packedLength)o[r]=a.Cartesian3.unpack(t,e);const n=a.Ellipsoid.unpack(t,e,q);e+=a.Ellipsoid.packedLength;const s=y.VertexFormat.unpack(t,e,J);e+=y.VertexFormat.packedLength;const d=t[e++],u=t[e++],m=t[e++],c=t[e++],f=t[e++],p=1===t[e++],g=t[e];return l.defined(r)?(r._positions=o,r._ellipsoid=a.Ellipsoid.clone(n,r._ellipsoid),r._vertexFormat=y.VertexFormat.clone(s,r._vertexFormat),r._width=d,r._height=u,r._extrudedHeight=m,r._cornerType=c,r._granularity=f,r._shadowVolume=p,r._offsetAttribute=-1===g?void 0:g,r):(j.positions=o,j.width=d,j.height=u,j.extrudedHeight=m,j.cornerType=c,j.granularity=f,j.shadowVolume=p,j.offsetAttribute=-1===g?void 0:g,new W(j))},W.computeRectangle=function(t,e){const r=(t=l.defaultValue(t,l.defaultValue.EMPTY_OBJECT)).positions,i=t.width;return Y(r,l.defaultValue(t.ellipsoid,a.Ellipsoid.WGS84),i,l.defaultValue(t.cornerType,n.CornerType.ROUNDED),e)},W.createGeometry=function(i){let n=i._positions;const u=i._width,m=i._ellipsoid;n=P(n,m);const y=e.arrayRemoveDuplicates(n,a.Cartesian3.equalsEpsilon);if(y.length<2||u<=0)return;const f=i._height,p=i._extrudedHeight,g=!o.CesiumMath.equalsEpsilon(f,p,0,o.CesiumMath.EPSILON2),h=i._vertexFormat,b={ellipsoid:m,positions:y,width:u,cornerType:i._cornerType,granularity:i._granularity,saveAttributes:!0};let C;if(g)b.height=f,b.extrudedHeight=p,b.shadowVolume=i._shadowVolume,b.offsetAttribute=i._offsetAttribute,C=O(b,h);else{if(C=D(s.CorridorGeometryLibrary.computePositions(b),h,m),C.attributes.position.values=c.PolygonPipeline.scaleToGeodeticHeight(C.attributes.position.values,f,m),l.defined(i._offsetAttribute)){const e=i._offsetAttribute===t.GeometryOffsetAttribute.NONE?0:1,r=C.attributes.position.values.length,a=new Uint8Array(r/3);t.arrayFill(a,e),C.attributes.applyOffset=new d.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:a})}}const A=C.attributes,_=r.BoundingSphere.fromVertices(A.position.values,void 0,3);return h.position||(C.attributes.position.values=void 0),new d.Geometry({attributes:A,indices:C.indices,primitiveType:d.PrimitiveType.TRIANGLES,boundingSphere:_,offsetAttribute:i._offsetAttribute})},W.createShadowVolume=function(t,e,r){const a=t._granularity,i=t._ellipsoid,o=e(a,i),n=r(a,i);return new W({positions:t._positions,width:t._width,cornerType:t._cornerType,ellipsoid:i,granularity:a,extrudedHeight:o,height:n,vertexFormat:y.VertexFormat.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(W.prototype,{rectangle:{get:function(){return l.defined(this._rectangle)||(this._rectangle=Y(this._positions,this._ellipsoid,this._width,this._cornerType)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return[0,0,0,1,1,0]}}}),function(t,e){return l.defined(e)&&(t=W.unpack(t,e)),t._ellipsoid=a.Ellipsoid.clone(t._ellipsoid),W.createGeometry(t)}}));
