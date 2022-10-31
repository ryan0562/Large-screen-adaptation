define(["./when-4bbc8319","./Transforms-0513682f","./Matrix2-860854d4","./RuntimeError-1349fdaf","./ComponentDatatype-8f55628c","./FrustumGeometry-47451456","./GeometryAttribute-51279fbd","./GeometryAttributes-7827a6c2","./combine-e9466e32","./WebGLConstants-508b9636","./Plane-0e4269ac","./VertexFormat-b8b51b88"],(function(e,t,r,n,a,i,u,o,s,c,p,m){"use strict";function h(n){const a=n.frustum,u=n.orientation,o=n.origin,s=e.defaultValue(n._drawNearPlane,!0);let c,p;a instanceof i.PerspectiveFrustum?(c=0,p=i.PerspectiveFrustum.packedLength):a instanceof i.OrthographicFrustum&&(c=1,p=i.OrthographicFrustum.packedLength),this._frustumType=c,this._frustum=a.clone(),this._origin=r.Cartesian3.clone(o),this._orientation=t.Quaternion.clone(u),this._drawNearPlane=s,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+p+r.Cartesian3.packedLength+t.Quaternion.packedLength}h.pack=function(n,a,u){u=e.defaultValue(u,0);const o=n._frustumType,s=n._frustum;return a[u++]=o,0===o?(i.PerspectiveFrustum.pack(s,a,u),u+=i.PerspectiveFrustum.packedLength):(i.OrthographicFrustum.pack(s,a,u),u+=i.OrthographicFrustum.packedLength),r.Cartesian3.pack(n._origin,a,u),u+=r.Cartesian3.packedLength,t.Quaternion.pack(n._orientation,a,u),a[u+=t.Quaternion.packedLength]=n._drawNearPlane?1:0,a};const f=new i.PerspectiveFrustum,d=new i.OrthographicFrustum,g=new t.Quaternion,_=new r.Cartesian3;return h.unpack=function(n,a,u){a=e.defaultValue(a,0);const o=n[a++];let s;0===o?(s=i.PerspectiveFrustum.unpack(n,a,f),a+=i.PerspectiveFrustum.packedLength):(s=i.OrthographicFrustum.unpack(n,a,d),a+=i.OrthographicFrustum.packedLength);const c=r.Cartesian3.unpack(n,a,_);a+=r.Cartesian3.packedLength;const p=t.Quaternion.unpack(n,a,g),m=1===n[a+=t.Quaternion.packedLength];if(!e.defined(u))return new h({frustum:s,origin:c,orientation:p,_drawNearPlane:m});const l=o===u._frustumType?u._frustum:void 0;return u._frustum=s.clone(l),u._frustumType=o,u._origin=r.Cartesian3.clone(c,u._origin),u._orientation=t.Quaternion.clone(p,u._orientation),u._drawNearPlane=m,u},h.createGeometry=function(e){const r=e._frustumType,n=e._frustum,s=e._origin,c=e._orientation,p=e._drawNearPlane,m=new Float64Array(24);i.FrustumGeometry._computeNearFarPlanes(s,c,r,n,m);const h=new o.GeometryAttributes({position:new u.GeometryAttribute({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:m})});let f,d;const g=p?2:1,_=new Uint16Array(8*(g+1));let l=p?0:1;for(;l<2;++l)f=p?8*l:0,d=4*l,_[f]=d,_[f+1]=d+1,_[f+2]=d+1,_[f+3]=d+2,_[f+4]=d+2,_[f+5]=d+3,_[f+6]=d+3,_[f+7]=d;for(l=0;l<2;++l)f=8*(g+l),d=4*l,_[f]=d,_[f+1]=d+4,_[f+2]=d+1,_[f+3]=d+5,_[f+4]=d+2,_[f+5]=d+6,_[f+6]=d+3,_[f+7]=d+7;return new u.Geometry({attributes:h,indices:_,primitiveType:u.PrimitiveType.LINES,boundingSphere:t.BoundingSphere.fromVertices(m)})},function(t,r){return e.defined(r)&&(t=h.unpack(t,r)),h.createGeometry(t)}}));