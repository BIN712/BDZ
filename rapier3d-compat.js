let A;
const I = new Array(128).fill(void 0);
I.push(void 0, null, true, false);
let g = I.length;
function C(A2) {
  g === I.length && I.push(I.length + 1);
  const C2 = g;
  return g = I[C2], I[C2] = A2, C2;
}
function B(A2) {
  return I[A2];
}
function Q(A2) {
  const C2 = B(A2);
  return function(A3) {
    A3 < 132 || (I[A3] = g, g = A3);
  }(A2), C2;
}
function E(A2) {
  return A2 == null;
}
let i = null;
function D() {
  return i !== null && i.byteLength !== 0 || (i = new Float64Array(A.memory.buffer)), i;
}
let o = null;
function G() {
  return o !== null && o.byteLength !== 0 || (o = new Int32Array(A.memory.buffer)), o;
}
const w = typeof TextDecoder != "undefined" ? new TextDecoder("utf-8", {ignoreBOM: true, fatal: true}) : {decode: () => {
  throw Error("TextDecoder not available");
}};
typeof TextDecoder != "undefined" && w.decode();
let S = null;
function k(I2, g2) {
  return I2 >>>= 0, w.decode((S !== null && S.byteLength !== 0 || (S = new Uint8Array(A.memory.buffer)), S).subarray(I2, I2 + g2));
}
function a(A2, I2) {
  if (!(A2 instanceof I2))
    throw new Error(`expected instance of ${I2.name}`);
  return A2.ptr;
}
let h = null;
function K() {
  return h !== null && h.byteLength !== 0 || (h = new Float32Array(A.memory.buffer)), h;
}
let U = 128;
function J(A2) {
  if (U == 1)
    throw new Error("out of js stack");
  return I[--U] = A2, U;
}
function N(A2, I2) {
  return A2 >>>= 0, K().subarray(A2 / 4, A2 / 4 + I2);
}
let y = null;
function M() {
  return y !== null && y.byteLength !== 0 || (y = new Uint32Array(A.memory.buffer)), y;
}
let F = 0;
function q(A2, I2) {
  const g2 = I2(4 * A2.length, 4) >>> 0;
  return K().set(A2, g2 / 4), F = A2.length, g2;
}
function R(A2, I2) {
  const g2 = I2(4 * A2.length, 4) >>> 0;
  return M().set(A2, g2 / 4), F = A2.length, g2;
}
function s(I2, g2) {
  try {
    return I2.apply(this, g2);
  } catch (I3) {
    A.__wbindgen_exn_store(C(I3));
  }
}
Object.freeze({Dynamic: 0, 0: "Dynamic", Fixed: 1, 1: "Fixed", KinematicPositionBased: 2, 2: "KinematicPositionBased", KinematicVelocityBased: 3, 3: "KinematicVelocityBased"}), Object.freeze({Vertex: 0, 0: "Vertex", Edge: 1, 1: "Edge", Face: 2, 2: "Face", Unknown: 3, 3: "Unknown"}), Object.freeze({AccelerationBased: 0, 0: "AccelerationBased", ForceBased: 1, 1: "ForceBased"});
const c = Object.freeze({Ball: 0, 0: "Ball", Cuboid: 1, 1: "Cuboid", Capsule: 2, 2: "Capsule", Segment: 3, 3: "Segment", Polyline: 4, 4: "Polyline", Triangle: 5, 5: "Triangle", TriMesh: 6, 6: "TriMesh", HeightField: 7, 7: "HeightField", Compound: 8, 8: "Compound", ConvexPolyhedron: 9, 9: "ConvexPolyhedron", Cylinder: 10, 10: "Cylinder", Cone: 11, 11: "Cone", RoundCuboid: 12, 12: "RoundCuboid", RoundTriangle: 13, 13: "RoundTriangle", RoundCylinder: 14, 14: "RoundCylinder", RoundCone: 15, 15: "RoundCone", RoundConvexPolyhedron: 16, 16: "RoundConvexPolyhedron", HalfSpace: 17, 17: "HalfSpace"}), Y = Object.freeze({X: 0, 0: "X", Y: 1, 1: "Y", Z: 2, 2: "Z", AngX: 3, 3: "AngX", AngY: 4, 4: "AngY", AngZ: 5, 5: "AngZ"}), H = Object.freeze({Revolute: 0, 0: "Revolute", Fixed: 1, 1: "Fixed", Prismatic: 2, 2: "Prismatic", Rope: 3, 3: "Rope", Spring: 4, 4: "Spring", Spherical: 5, 5: "Spherical", Generic: 6, 6: "Generic"});
class l {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(l.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawbroadphase_free(I2);
  }
  constructor() {
    const I2 = A.rawbroadphase_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
}
class L {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawccdsolver_free(I2);
  }
  constructor() {
    const I2 = A.rawccdsolver_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
}
class t {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcharactercollision_free(I2);
  }
  constructor() {
    const I2 = A.rawcharactercollision_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  handle() {
    return A.rawcharactercollision_handle(this.__wbg_ptr);
  }
  translationDeltaApplied() {
    const I2 = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  translationDeltaRemaining() {
    const I2 = A.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  toi() {
    return A.rawcharactercollision_toi(this.__wbg_ptr);
  }
  worldWitness1() {
    const I2 = A.rawcharactercollision_worldWitness1(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  worldWitness2() {
    const I2 = A.rawcharactercollision_worldWitness2(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  worldNormal1() {
    const I2 = A.rawcharactercollision_worldNormal1(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  worldNormal2() {
    const I2 = A.rawcharactercollision_worldNormal2(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
}
class p {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(p.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcolliderset_free(I2);
  }
  coTranslation(I2) {
    const g2 = A.rawcolliderset_coTranslation(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  coRotation(I2) {
    const g2 = A.rawcolliderset_coRotation(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  coSetTranslation(I2, g2, C2, B2) {
    A.rawcolliderset_coSetTranslation(this.__wbg_ptr, I2, g2, C2, B2);
  }
  coSetTranslationWrtParent(I2, g2, C2, B2) {
    A.rawcolliderset_coSetTranslationWrtParent(this.__wbg_ptr, I2, g2, C2, B2);
  }
  coSetRotation(I2, g2, C2, B2, Q2) {
    A.rawcolliderset_coSetRotation(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  coSetRotationWrtParent(I2, g2, C2, B2, Q2) {
    A.rawcolliderset_coSetRotationWrtParent(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  coIsSensor(I2) {
    return A.rawcolliderset_coIsSensor(this.__wbg_ptr, I2) !== 0;
  }
  coShapeType(I2) {
    return A.rawcolliderset_coShapeType(this.__wbg_ptr, I2);
  }
  coHalfspaceNormal(I2) {
    const g2 = A.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  coHalfExtents(I2) {
    const g2 = A.rawcolliderset_coHalfExtents(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  coSetHalfExtents(I2, g2) {
    a(g2, DA), A.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  coRadius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coRadius(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetRadius(I2, g2) {
    A.rawcolliderset_coSetRadius(this.__wbg_ptr, I2, g2);
  }
  coHalfHeight(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHalfHeight(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetHalfHeight(I2, g2) {
    A.rawcolliderset_coSetHalfHeight(this.__wbg_ptr, I2, g2);
  }
  coRoundRadius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coRoundRadius(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetRoundRadius(I2, g2) {
    A.rawcolliderset_coSetRoundRadius(this.__wbg_ptr, I2, g2);
  }
  coVertices(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coVertices(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return g2 !== 0 && (Q2 = N(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2, 4)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coIndices(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coIndices(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return g2 !== 0 && (Q2 = function(A2, I3) {
        return A2 >>>= 0, M().subarray(A2 / 4, A2 / 4 + I3);
      }(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2, 4)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldHeights(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldHeights(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      let Q2;
      return g2 !== 0 && (Q2 = N(g2, C2).slice(), A.__wbindgen_free(g2, 4 * C2, 4)), Q2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldScale(I2) {
    const g2 = A.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  coHeightfieldNRows(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldNRows(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coHeightfieldNCols(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coHeightfieldNCols(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = G()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coParent(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawcolliderset_coParent(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = D()[B2 / 8 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  coSetEnabled(I2, g2) {
    A.rawcolliderset_coSetEnabled(this.__wbg_ptr, I2, g2);
  }
  coIsEnabled(I2) {
    return A.rawcolliderset_coIsEnabled(this.__wbg_ptr, I2) !== 0;
  }
  coFriction(I2) {
    return A.rawcolliderset_coFriction(this.__wbg_ptr, I2);
  }
  coRestitution(I2) {
    return A.rawcolliderset_coRestitution(this.__wbg_ptr, I2);
  }
  coDensity(I2) {
    return A.rawcolliderset_coDensity(this.__wbg_ptr, I2);
  }
  coMass(I2) {
    return A.rawcolliderset_coMass(this.__wbg_ptr, I2);
  }
  coVolume(I2) {
    return A.rawcolliderset_coVolume(this.__wbg_ptr, I2);
  }
  coCollisionGroups(I2) {
    return A.rawcolliderset_coCollisionGroups(this.__wbg_ptr, I2) >>> 0;
  }
  coSolverGroups(I2) {
    return A.rawcolliderset_coSolverGroups(this.__wbg_ptr, I2) >>> 0;
  }
  coActiveHooks(I2) {
    return A.rawcolliderset_coActiveHooks(this.__wbg_ptr, I2) >>> 0;
  }
  coActiveCollisionTypes(I2) {
    return A.rawcolliderset_coActiveCollisionTypes(this.__wbg_ptr, I2);
  }
  coActiveEvents(I2) {
    return A.rawcolliderset_coActiveEvents(this.__wbg_ptr, I2) >>> 0;
  }
  coContactForceEventThreshold(I2) {
    return A.rawcolliderset_coContactForceEventThreshold(this.__wbg_ptr, I2);
  }
  coContainsPoint(I2, g2) {
    a(g2, DA);
    return A.rawcolliderset_coContainsPoint(this.__wbg_ptr, I2, g2.__wbg_ptr) !== 0;
  }
  coCastShape(I2, g2, C2, B2, Q2, E2, i2, D2) {
    a(g2, DA), a(C2, BA), a(B2, DA), a(Q2, IA), a(E2, DA);
    const o2 = A.rawcolliderset_coCastShape(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, E2.__wbg_ptr, i2, D2);
    return o2 === 0 ? void 0 : iA.__wrap(o2);
  }
  coCastCollider(I2, g2, C2, B2, Q2, E2) {
    a(g2, DA), a(B2, DA);
    const i2 = A.rawcolliderset_coCastCollider(this.__wbg_ptr, I2, g2.__wbg_ptr, C2, B2.__wbg_ptr, Q2, E2);
    return i2 === 0 ? void 0 : QA.__wrap(i2);
  }
  coIntersectsShape(I2, g2, C2, B2) {
    a(g2, BA), a(C2, DA), a(B2, IA);
    return A.rawcolliderset_coIntersectsShape(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr) !== 0;
  }
  coContactShape(I2, g2, C2, B2, Q2) {
    a(g2, BA), a(C2, DA), a(B2, IA);
    const E2 = A.rawcolliderset_coContactShape(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2);
    return E2 === 0 ? void 0 : EA.__wrap(E2);
  }
  coContactCollider(I2, g2, C2) {
    const B2 = A.rawcolliderset_coContactCollider(this.__wbg_ptr, I2, g2, C2);
    return B2 === 0 ? void 0 : EA.__wrap(B2);
  }
  coProjectPoint(I2, g2, C2) {
    a(g2, DA);
    const B2 = A.rawcolliderset_coProjectPoint(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
    return u.__wrap(B2);
  }
  coIntersectsRay(I2, g2, C2, B2) {
    a(g2, DA), a(C2, DA);
    return A.rawcolliderset_coIntersectsRay(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2) !== 0;
  }
  coCastRay(I2, g2, C2, B2, Q2) {
    a(g2, DA), a(C2, DA);
    return A.rawcolliderset_coCastRay(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2, Q2);
  }
  coCastRayAndGetNormal(I2, g2, C2, B2, Q2) {
    a(g2, DA), a(C2, DA);
    const E2 = A.rawcolliderset_coCastRayAndGetNormal(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2, Q2);
    return E2 === 0 ? void 0 : $.__wrap(E2);
  }
  coSetSensor(I2, g2) {
    A.rawcolliderset_coSetSensor(this.__wbg_ptr, I2, g2);
  }
  coSetRestitution(I2, g2) {
    A.rawcolliderset_coSetRestitution(this.__wbg_ptr, I2, g2);
  }
  coSetFriction(I2, g2) {
    A.rawcolliderset_coSetFriction(this.__wbg_ptr, I2, g2);
  }
  coFrictionCombineRule(I2) {
    return A.rawcolliderset_coFrictionCombineRule(this.__wbg_ptr, I2) >>> 0;
  }
  coSetFrictionCombineRule(I2, g2) {
    A.rawcolliderset_coSetFrictionCombineRule(this.__wbg_ptr, I2, g2);
  }
  coRestitutionCombineRule(I2) {
    return A.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, I2) >>> 0;
  }
  coSetRestitutionCombineRule(I2, g2) {
    A.rawcolliderset_coSetRestitutionCombineRule(this.__wbg_ptr, I2, g2);
  }
  coSetCollisionGroups(I2, g2) {
    A.rawcolliderset_coSetCollisionGroups(this.__wbg_ptr, I2, g2);
  }
  coSetSolverGroups(I2, g2) {
    A.rawcolliderset_coSetSolverGroups(this.__wbg_ptr, I2, g2);
  }
  coSetActiveHooks(I2, g2) {
    A.rawcolliderset_coSetActiveHooks(this.__wbg_ptr, I2, g2);
  }
  coSetActiveEvents(I2, g2) {
    A.rawcolliderset_coSetActiveEvents(this.__wbg_ptr, I2, g2);
  }
  coSetActiveCollisionTypes(I2, g2) {
    A.rawcolliderset_coSetActiveCollisionTypes(this.__wbg_ptr, I2, g2);
  }
  coSetShape(I2, g2) {
    a(g2, BA), A.rawcolliderset_coSetShape(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  coSetContactForceEventThreshold(I2, g2) {
    A.rawcolliderset_coSetContactForceEventThreshold(this.__wbg_ptr, I2, g2);
  }
  coSetDensity(I2, g2) {
    A.rawcolliderset_coSetDensity(this.__wbg_ptr, I2, g2);
  }
  coSetMass(I2, g2) {
    A.rawcolliderset_coSetMass(this.__wbg_ptr, I2, g2);
  }
  coSetMassProperties(I2, g2, C2, B2, Q2) {
    a(C2, DA), a(B2, DA), a(Q2, IA), A.rawcolliderset_coSetMassProperties(this.__wbg_ptr, I2, g2, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr);
  }
  constructor() {
    const I2 = A.rawcolliderset_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  len() {
    return A.rawcolliderset_len(this.__wbg_ptr) >>> 0;
  }
  contains(I2) {
    return A.rawcolliderset_contains(this.__wbg_ptr, I2) !== 0;
  }
  createCollider(I2, g2, C2, B2, Q2, E2, i2, o2, w2, S2, k2, h2, K2, U2, J2, N2, y2, M2, F2, q2, R2, s2, c2, Y2) {
    try {
      const L2 = A.__wbindgen_add_to_stack_pointer(-16);
      a(g2, BA), a(C2, DA), a(B2, IA), a(i2, DA), a(o2, DA), a(w2, IA), a(Y2, AA), A.rawcolliderset_createCollider(L2, this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2, E2, i2.__wbg_ptr, o2.__wbg_ptr, w2.__wbg_ptr, S2, k2, h2, K2, U2, J2, N2, y2, M2, F2, q2, R2, s2, c2, Y2.__wbg_ptr);
      var H2 = G()[L2 / 4 + 0], l2 = D()[L2 / 8 + 1];
      return H2 === 0 ? void 0 : l2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  remove(I2, g2, C2, B2) {
    a(g2, m), a(C2, AA), A.rawcolliderset_remove(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2);
  }
  isHandleValid(I2) {
    return A.rawcolliderset_contains(this.__wbg_ptr, I2) !== 0;
  }
  forEachColliderHandle(g2) {
    try {
      A.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
}
class e {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(e.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactforceevent_free(I2);
  }
  collider1() {
    return A.rawcharactercollision_handle(this.__wbg_ptr);
  }
  collider2() {
    return A.rawcontactforceevent_collider2(this.__wbg_ptr);
  }
  total_force() {
    const I2 = A.rawcontactforceevent_total_force(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  total_force_magnitude() {
    return A.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
  }
  max_force_direction() {
    const I2 = A.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  max_force_magnitude() {
    return A.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
  }
}
class r {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(r.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactmanifold_free(I2);
  }
  normal() {
    const I2 = A.rawcontactmanifold_normal(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  local_n1() {
    const I2 = A.rawcontactmanifold_local_n1(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  local_n2() {
    const I2 = A.rawcontactmanifold_local_n2(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  subshape1() {
    return A.rawcontactmanifold_subshape1(this.__wbg_ptr) >>> 0;
  }
  subshape2() {
    return A.rawcontactmanifold_subshape2(this.__wbg_ptr) >>> 0;
  }
  num_contacts() {
    return A.rawcontactmanifold_num_contacts(this.__wbg_ptr) >>> 0;
  }
  contact_local_p1(I2) {
    const g2 = A.rawcontactmanifold_contact_local_p1(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  contact_local_p2(I2) {
    const g2 = A.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  contact_dist(I2) {
    return A.rawcontactmanifold_contact_dist(this.__wbg_ptr, I2);
  }
  contact_fid1(I2) {
    return A.rawcontactmanifold_contact_fid1(this.__wbg_ptr, I2) >>> 0;
  }
  contact_fid2(I2) {
    return A.rawcontactmanifold_contact_fid2(this.__wbg_ptr, I2) >>> 0;
  }
  contact_impulse(I2) {
    return A.rawcontactmanifold_contact_impulse(this.__wbg_ptr, I2);
  }
  contact_tangent_impulse_x(I2) {
    return A.rawcontactmanifold_contact_tangent_impulse_x(this.__wbg_ptr, I2);
  }
  contact_tangent_impulse_y(I2) {
    return A.rawcontactmanifold_contact_tangent_impulse_y(this.__wbg_ptr, I2);
  }
  num_solver_contacts() {
    return A.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
  }
  solver_contact_point(I2) {
    const g2 = A.rawcontactmanifold_solver_contact_point(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  solver_contact_dist(I2) {
    return A.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, I2);
  }
  solver_contact_friction(I2) {
    return A.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, I2);
  }
  solver_contact_restitution(I2) {
    return A.rawcontactmanifold_solver_contact_restitution(this.__wbg_ptr, I2);
  }
  solver_contact_tangent_velocity(I2) {
    const g2 = A.rawcontactmanifold_solver_contact_tangent_velocity(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
}
class d {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(d.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawcontactpair_free(I2);
  }
  collider1() {
    return A.rawcontactpair_collider1(this.__wbg_ptr);
  }
  collider2() {
    return A.rawcontactpair_collider2(this.__wbg_ptr);
  }
  numContactManifolds() {
    return A.rawcontactpair_numContactManifolds(this.__wbg_ptr) >>> 0;
  }
  contactManifold(I2) {
    const g2 = A.rawcontactpair_contactManifold(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : r.__wrap(g2);
  }
}
class T {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdebugrenderpipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawdebugrenderpipeline_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  vertices() {
    return Q(A.rawdebugrenderpipeline_vertices(this.__wbg_ptr));
  }
  colors() {
    return Q(A.rawdebugrenderpipeline_colors(this.__wbg_ptr));
  }
  render(I2, g2, C2, B2, Q2) {
    a(I2, AA), a(g2, p), a(C2, W), a(B2, f), a(Q2, X), A.rawdebugrenderpipeline_render(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr);
  }
}
class n {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(n.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdeserializedworld_free(I2);
  }
  takeGravity() {
    const I2 = A.rawdeserializedworld_takeGravity(this.__wbg_ptr);
    return I2 === 0 ? void 0 : DA.__wrap(I2);
  }
  takeIntegrationParameters() {
    const I2 = A.rawdeserializedworld_takeIntegrationParameters(this.__wbg_ptr);
    return I2 === 0 ? void 0 : x.__wrap(I2);
  }
  takeIslandManager() {
    const I2 = A.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
    return I2 === 0 ? void 0 : m.__wrap(I2);
  }
  takeBroadPhase() {
    const I2 = A.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
    return I2 === 0 ? void 0 : l.__wrap(I2);
  }
  takeNarrowPhase() {
    const I2 = A.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
    return I2 === 0 ? void 0 : X.__wrap(I2);
  }
  takeBodies() {
    const I2 = A.rawdeserializedworld_takeBodies(this.__wbg_ptr);
    return I2 === 0 ? void 0 : AA.__wrap(I2);
  }
  takeColliders() {
    const I2 = A.rawdeserializedworld_takeColliders(this.__wbg_ptr);
    return I2 === 0 ? void 0 : p.__wrap(I2);
  }
  takeImpulseJoints() {
    const I2 = A.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
    return I2 === 0 ? void 0 : W.__wrap(I2);
  }
  takeMultibodyJoints() {
    const I2 = A.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
    return I2 === 0 ? void 0 : f.__wrap(I2);
  }
}
class O {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawdynamicraycastvehiclecontroller_free(I2);
  }
  constructor(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_new(I2);
    return this.__wbg_ptr = g2 >>> 0, this;
  }
  current_vehicle_speed() {
    return A.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
  }
  chassis() {
    return A.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
  }
  index_up_axis() {
    return A.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
  }
  set_index_up_axis(I2) {
    A.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, I2);
  }
  index_forward_axis() {
    return A.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
  }
  set_index_forward_axis(I2) {
    A.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, I2);
  }
  add_wheel(I2, g2, C2, B2, Q2) {
    a(I2, DA), a(g2, DA), a(C2, DA), A.rawdynamicraycastvehiclecontroller_add_wheel(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2, Q2);
  }
  num_wheels() {
    return A.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>> 0;
  }
  update_vehicle(g2, C2, B2, Q2, i2, D2, o2) {
    try {
      a(C2, AA), a(B2, p), a(Q2, z), A.rawdynamicraycastvehiclecontroller_update_vehicle(this.__wbg_ptr, g2, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2, !E(D2), E(D2) ? 0 : D2, J(o2));
    } finally {
      I[U++] = void 0;
    }
  }
  wheel_chassis_connection_point_cs(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  set_wheel_chassis_connection_point_cs(I2, g2) {
    a(g2, DA), A.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  wheel_suspension_rest_length(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_rest_length(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(this.__wbg_ptr, I2, g2);
  }
  wheel_max_suspension_travel(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_max_suspension_travel(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(this.__wbg_ptr, I2, g2);
  }
  wheel_radius(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_radius(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_radius(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_radius(this.__wbg_ptr, I2, g2);
  }
  wheel_suspension_stiffness(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_stiffness(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(this.__wbg_ptr, I2, g2);
  }
  wheel_suspension_compression(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_compression(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(this.__wbg_ptr, I2, g2);
  }
  wheel_suspension_relaxation(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_suspension_relaxation(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(this.__wbg_ptr, I2, g2);
  }
  wheel_max_suspension_force(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_max_suspension_force(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(this.__wbg_ptr, I2, g2);
  }
  wheel_brake(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_brake(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_brake(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_brake(this.__wbg_ptr, I2, g2);
  }
  wheel_steering(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_steering(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_steering(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_steering(this.__wbg_ptr, I2, g2);
  }
  wheel_engine_force(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_engine_force(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_engine_force(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(this.__wbg_ptr, I2, g2);
  }
  wheel_direction_cs(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_wheel_direction_cs(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  set_wheel_direction_cs(I2, g2) {
    a(g2, DA), A.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  wheel_axle_cs(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_wheel_axle_cs(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  set_wheel_axle_cs(I2, g2) {
    a(g2, DA), A.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  wheel_friction_slip(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_friction_slip(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_friction_slip(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(this.__wbg_ptr, I2, g2);
  }
  wheel_side_friction_stiffness(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  set_wheel_side_friction_stiffness(I2, g2) {
    A.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(this.__wbg_ptr, I2, g2);
  }
  wheel_rotation(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_rotation(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_forward_impulse(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_side_impulse(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_side_impulse(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_suspension_force(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_suspension_force(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_contact_normal_ws(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  wheel_contact_point_ws(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  wheel_suspension_length(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_suspension_length(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = K()[B2 / 4 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  wheel_hard_point_ws(I2) {
    const g2 = A.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(this.__wbg_ptr, I2);
    return g2 === 0 ? void 0 : DA.__wrap(g2);
  }
  wheel_is_in_contact(I2) {
    return A.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(this.__wbg_ptr, I2) !== 0;
  }
  wheel_ground_object(I2) {
    try {
      const B2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawdynamicraycastvehiclecontroller_wheel_ground_object(B2, this.__wbg_ptr, I2);
      var g2 = G()[B2 / 4 + 0], C2 = D()[B2 / 8 + 1];
      return g2 === 0 ? void 0 : C2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class Z {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_raweventqueue_free(I2);
  }
  constructor(I2) {
    const g2 = A.raweventqueue_new(I2);
    return this.__wbg_ptr = g2 >>> 0, this;
  }
  drainCollisionEvents(g2) {
    try {
      A.raweventqueue_drainCollisionEvents(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
  drainContactForceEvents(g2) {
    try {
      A.raweventqueue_drainContactForceEvents(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
  clear() {
    A.raweventqueue_clear(this.__wbg_ptr);
  }
}
class b {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(b.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawgenericjoint_free(I2);
  }
  static generic(I2, g2, C2, B2) {
    a(I2, DA), a(g2, DA), a(C2, DA);
    const Q2 = A.rawgenericjoint_generic(I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2);
    return Q2 === 0 ? void 0 : b.__wrap(Q2);
  }
  static spring(I2, g2, C2, B2, Q2) {
    a(B2, DA), a(Q2, DA);
    const E2 = A.rawgenericjoint_spring(I2, g2, C2, B2.__wbg_ptr, Q2.__wbg_ptr);
    return b.__wrap(E2);
  }
  static rope(I2, g2, C2) {
    a(g2, DA), a(C2, DA);
    const B2 = A.rawgenericjoint_rope(I2, g2.__wbg_ptr, C2.__wbg_ptr);
    return b.__wrap(B2);
  }
  static spherical(I2, g2) {
    a(I2, DA), a(g2, DA);
    const C2 = A.rawgenericjoint_spherical(I2.__wbg_ptr, g2.__wbg_ptr);
    return b.__wrap(C2);
  }
  static prismatic(I2, g2, C2, B2, Q2, E2) {
    a(I2, DA), a(g2, DA), a(C2, DA);
    const i2 = A.rawgenericjoint_prismatic(I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2, Q2, E2);
    return i2 === 0 ? void 0 : b.__wrap(i2);
  }
  static fixed(I2, g2, C2, B2) {
    a(I2, DA), a(g2, IA), a(C2, DA), a(B2, IA);
    const Q2 = A.rawgenericjoint_fixed(I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr);
    return b.__wrap(Q2);
  }
  static revolute(I2, g2, C2) {
    a(I2, DA), a(g2, DA), a(C2, DA);
    const B2 = A.rawgenericjoint_revolute(I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr);
    return B2 === 0 ? void 0 : b.__wrap(B2);
  }
}
class W {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(W.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawimpulsejointset_free(I2);
  }
  jointType(I2) {
    return A.rawimpulsejointset_jointType(this.__wbg_ptr, I2);
  }
  jointBodyHandle1(I2) {
    return A.rawimpulsejointset_jointBodyHandle1(this.__wbg_ptr, I2);
  }
  jointBodyHandle2(I2) {
    return A.rawimpulsejointset_jointBodyHandle2(this.__wbg_ptr, I2);
  }
  jointFrameX1(I2) {
    const g2 = A.rawimpulsejointset_jointFrameX1(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  jointFrameX2(I2) {
    const g2 = A.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  jointAnchor1(I2) {
    const g2 = A.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  jointAnchor2(I2) {
    const g2 = A.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  jointSetAnchor1(I2, g2) {
    a(g2, DA), A.rawimpulsejointset_jointSetAnchor1(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  jointSetAnchor2(I2, g2) {
    a(g2, DA), A.rawimpulsejointset_jointSetAnchor2(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  jointContactsEnabled(I2) {
    return A.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, I2) !== 0;
  }
  jointSetContactsEnabled(I2, g2) {
    A.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, I2, g2);
  }
  jointLimitsEnabled(I2, g2) {
    return A.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, I2, g2) !== 0;
  }
  jointLimitsMin(I2, g2) {
    return A.rawimpulsejointset_jointLimitsMin(this.__wbg_ptr, I2, g2);
  }
  jointLimitsMax(I2, g2) {
    return A.rawimpulsejointset_jointLimitsMax(this.__wbg_ptr, I2, g2);
  }
  jointSetLimits(I2, g2, C2, B2) {
    A.rawimpulsejointset_jointSetLimits(this.__wbg_ptr, I2, g2, C2, B2);
  }
  jointConfigureMotorModel(I2, g2, C2) {
    A.rawimpulsejointset_jointConfigureMotorModel(this.__wbg_ptr, I2, g2, C2);
  }
  jointConfigureMotorVelocity(I2, g2, C2, B2) {
    A.rawimpulsejointset_jointConfigureMotorVelocity(this.__wbg_ptr, I2, g2, C2, B2);
  }
  jointConfigureMotorPosition(I2, g2, C2, B2, Q2) {
    A.rawimpulsejointset_jointConfigureMotorPosition(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  jointConfigureMotor(I2, g2, C2, B2, Q2, E2) {
    A.rawimpulsejointset_jointConfigureMotor(this.__wbg_ptr, I2, g2, C2, B2, Q2, E2);
  }
  constructor() {
    const I2 = A.rawimpulsejointset_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  createJoint(I2, g2, C2, B2) {
    a(I2, b);
    return A.rawimpulsejointset_createJoint(this.__wbg_ptr, I2.__wbg_ptr, g2, C2, B2);
  }
  remove(I2, g2) {
    A.rawimpulsejointset_remove(this.__wbg_ptr, I2, g2);
  }
  len() {
    return A.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
  }
  contains(I2) {
    return A.rawimpulsejointset_contains(this.__wbg_ptr, I2) !== 0;
  }
  forEachJointHandle(g2) {
    try {
      A.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(g2, C2) {
    try {
      A.rawimpulsejointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, g2, J(C2));
    } finally {
      I[U++] = void 0;
    }
  }
}
class x {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(x.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawintegrationparameters_free(I2);
  }
  constructor() {
    const I2 = A.rawintegrationparameters_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  get dt() {
    return A.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  get erp() {
    return A.rawintegrationparameters_erp(this.__wbg_ptr);
  }
  get allowedLinearError() {
    return A.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
  }
  get predictionDistance() {
    return A.rawdynamicraycastvehiclecontroller_current_vehicle_speed(this.__wbg_ptr);
  }
  get numSolverIterations() {
    return A.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0;
  }
  get numAdditionalFrictionIterations() {
    return A.rawintegrationparameters_numAdditionalFrictionIterations(this.__wbg_ptr) >>> 0;
  }
  get numInternalPgsIterations() {
    return A.rawintegrationparameters_numInternalPgsIterations(this.__wbg_ptr) >>> 0;
  }
  get minIslandSize() {
    return A.rawdynamicraycastvehiclecontroller_index_up_axis(this.__wbg_ptr) >>> 0;
  }
  get maxCcdSubsteps() {
    return A.rawdynamicraycastvehiclecontroller_index_forward_axis(this.__wbg_ptr) >>> 0;
  }
  set dt(I2) {
    A.rawintegrationparameters_set_dt(this.__wbg_ptr, I2);
  }
  set erp(I2) {
    A.rawintegrationparameters_set_erp(this.__wbg_ptr, I2);
  }
  set allowedLinearError(I2) {
    A.rawintegrationparameters_set_allowedLinearError(this.__wbg_ptr, I2);
  }
  set predictionDistance(I2) {
    A.rawintegrationparameters_set_predictionDistance(this.__wbg_ptr, I2);
  }
  set numSolverIterations(I2) {
    A.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, I2);
  }
  set numAdditionalFrictionIterations(I2) {
    A.rawintegrationparameters_set_numAdditionalFrictionIterations(this.__wbg_ptr, I2);
  }
  set numInternalPgsIterations(I2) {
    A.rawintegrationparameters_set_numInternalPgsIterations(this.__wbg_ptr, I2);
  }
  set minIslandSize(I2) {
    A.rawdynamicraycastvehiclecontroller_set_index_up_axis(this.__wbg_ptr, I2);
  }
  set maxCcdSubsteps(I2) {
    A.rawdynamicraycastvehiclecontroller_set_index_forward_axis(this.__wbg_ptr, I2);
  }
  switchToStandardPgsSolver() {
    A.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
  }
  switchToSmallStepsPgsSolver() {
    A.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
  }
}
class m {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(m.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawislandmanager_free(I2);
  }
  constructor() {
    const I2 = A.rawislandmanager_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  forEachActiveRigidBodyHandle(g2) {
    try {
      A.rawislandmanager_forEachActiveRigidBodyHandle(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
}
class j {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawkinematiccharactercontroller_free(I2);
  }
  constructor(I2) {
    const g2 = A.rawkinematiccharactercontroller_new(I2);
    return this.__wbg_ptr = g2 >>> 0, this;
  }
  up() {
    const I2 = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  setUp(I2) {
    a(I2, DA), A.rawkinematiccharactercontroller_setUp(this.__wbg_ptr, I2.__wbg_ptr);
  }
  offset() {
    return A.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  setOffset(I2) {
    A.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, I2);
  }
  slideEnabled() {
    return A.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0;
  }
  setSlideEnabled(I2) {
    A.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, I2);
  }
  autostepMaxHeight() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_autostepMaxHeight(C2, this.__wbg_ptr);
      var I2 = G()[C2 / 4 + 0], g2 = K()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepMinWidth() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_autostepMinWidth(C2, this.__wbg_ptr);
      var I2 = G()[C2 / 4 + 0], g2 = K()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  autostepIncludesDynamicBodies() {
    const I2 = A.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(this.__wbg_ptr);
    return I2 === 16777215 ? void 0 : I2 !== 0;
  }
  autostepEnabled() {
    return A.rawkinematiccharactercontroller_autostepEnabled(this.__wbg_ptr) !== 0;
  }
  enableAutostep(I2, g2, C2) {
    A.rawkinematiccharactercontroller_enableAutostep(this.__wbg_ptr, I2, g2, C2);
  }
  disableAutostep() {
    A.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
  }
  maxSlopeClimbAngle() {
    return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
  }
  setMaxSlopeClimbAngle(I2) {
    A.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(this.__wbg_ptr, I2);
  }
  minSlopeSlideAngle() {
    return A.rawkinematiccharactercontroller_minSlopeSlideAngle(this.__wbg_ptr);
  }
  setMinSlopeSlideAngle(I2) {
    A.rawkinematiccharactercontroller_setMinSlopeSlideAngle(this.__wbg_ptr, I2);
  }
  snapToGroundDistance() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawkinematiccharactercontroller_snapToGroundDistance(C2, this.__wbg_ptr);
      var I2 = G()[C2 / 4 + 0], g2 = K()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
  enableSnapToGround(I2) {
    A.rawkinematiccharactercontroller_enableSnapToGround(this.__wbg_ptr, I2);
  }
  disableSnapToGround() {
    A.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
  }
  snapToGroundEnabled() {
    return A.rawkinematiccharactercontroller_snapToGroundEnabled(this.__wbg_ptr) !== 0;
  }
  computeColliderMovement(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      a(C2, AA), a(B2, p), a(Q2, z), a(D2, DA), A.rawkinematiccharactercontroller_computeColliderMovement(this.__wbg_ptr, g2, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2, D2.__wbg_ptr, o2, !E(G2), E(G2) ? 0 : G2, w2, !E(S2), E(S2) ? 0 : S2, J(k2));
    } finally {
      I[U++] = void 0;
    }
  }
  computedMovement() {
    const I2 = A.rawkinematiccharactercontroller_computedMovement(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  computedGrounded() {
    return A.rawkinematiccharactercontroller_computedGrounded(this.__wbg_ptr) !== 0;
  }
  numComputedCollisions() {
    return A.rawkinematiccharactercontroller_numComputedCollisions(this.__wbg_ptr) >>> 0;
  }
  computedCollision(I2, g2) {
    a(g2, t);
    return A.rawkinematiccharactercontroller_computedCollision(this.__wbg_ptr, I2, g2.__wbg_ptr) !== 0;
  }
}
class f {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(f.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawmultibodyjointset_free(I2);
  }
  jointType(I2) {
    return A.rawmultibodyjointset_jointType(this.__wbg_ptr, I2);
  }
  jointFrameX1(I2) {
    const g2 = A.rawmultibodyjointset_jointFrameX1(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  jointFrameX2(I2) {
    const g2 = A.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  jointAnchor1(I2) {
    const g2 = A.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  jointAnchor2(I2) {
    const g2 = A.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  jointContactsEnabled(I2) {
    return A.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, I2) !== 0;
  }
  jointSetContactsEnabled(I2, g2) {
    A.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, I2, g2);
  }
  jointLimitsEnabled(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsEnabled(this.__wbg_ptr, I2, g2) !== 0;
  }
  jointLimitsMin(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, I2, g2);
  }
  jointLimitsMax(I2, g2) {
    return A.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, I2, g2);
  }
  constructor() {
    const I2 = A.rawmultibodyjointset_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  createJoint(I2, g2, C2, B2) {
    a(I2, b);
    return A.rawmultibodyjointset_createJoint(this.__wbg_ptr, I2.__wbg_ptr, g2, C2, B2);
  }
  remove(I2, g2) {
    A.rawmultibodyjointset_remove(this.__wbg_ptr, I2, g2);
  }
  contains(I2) {
    return A.rawmultibodyjointset_contains(this.__wbg_ptr, I2) !== 0;
  }
  forEachJointHandle(g2) {
    try {
      A.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
  forEachJointAttachedToRigidBody(g2, C2) {
    try {
      A.rawmultibodyjointset_forEachJointAttachedToRigidBody(this.__wbg_ptr, g2, J(C2));
    } finally {
      I[U++] = void 0;
    }
  }
}
class X {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(X.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawnarrowphase_free(I2);
  }
  constructor() {
    const I2 = A.rawnarrowphase_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  contact_pairs_with(I2, g2) {
    A.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, I2, C(g2));
  }
  contact_pair(I2, g2) {
    const C2 = A.rawnarrowphase_contact_pair(this.__wbg_ptr, I2, g2);
    return C2 === 0 ? void 0 : d.__wrap(C2);
  }
  intersection_pairs_with(I2, g2) {
    A.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, I2, C(g2));
  }
  intersection_pair(I2, g2) {
    return A.rawnarrowphase_intersection_pair(this.__wbg_ptr, I2, g2) !== 0;
  }
}
class V {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawphysicspipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawphysicspipeline_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  step(I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    a(I2, DA), a(g2, x), a(C2, m), a(B2, l), a(Q2, X), a(E2, AA), a(i2, p), a(D2, W), a(o2, f), a(G2, L), A.rawphysicspipeline_step(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, E2.__wbg_ptr, i2.__wbg_ptr, D2.__wbg_ptr, o2.__wbg_ptr, G2.__wbg_ptr);
  }
  stepWithEvents(I2, g2, B2, Q2, E2, i2, D2, o2, G2, w2, S2, k2, h2, K2) {
    a(I2, DA), a(g2, x), a(B2, m), a(Q2, l), a(E2, X), a(i2, AA), a(D2, p), a(o2, W), a(G2, f), a(w2, L), a(S2, Z), A.rawphysicspipeline_stepWithEvents(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, E2.__wbg_ptr, i2.__wbg_ptr, D2.__wbg_ptr, o2.__wbg_ptr, G2.__wbg_ptr, w2.__wbg_ptr, S2.__wbg_ptr, C(k2), C(h2), C(K2));
  }
}
class P {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(P.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawpointcolliderprojection_free(I2);
  }
  colliderHandle() {
    return A.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
  }
  point() {
    const I2 = A.rawpointcolliderprojection_point(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  isInside() {
    return A.rawpointcolliderprojection_isInside(this.__wbg_ptr) !== 0;
  }
  featureType() {
    return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawpointcolliderprojection_featureId(C2, this.__wbg_ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class u {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(u.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawpointprojection_free(I2);
  }
  point() {
    const I2 = A.rawpointprojection_point(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  isInside() {
    return A.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
  }
}
class z {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawquerypipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawquerypipeline_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  update(I2, g2) {
    a(I2, AA), a(g2, p), A.rawquerypipeline_update(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr);
  }
  castRay(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA), a(Q2, DA);
      const h2 = A.rawquerypipeline_castRay(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2, D2, o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, J(k2));
      return h2 === 0 ? void 0 : _.__wrap(h2);
    } finally {
      I[U++] = void 0;
    }
  }
  castRayAndGetNormal(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA), a(Q2, DA);
      const h2 = A.rawquerypipeline_castRayAndGetNormal(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2, D2, o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, J(k2));
      return h2 === 0 ? void 0 : v.__wrap(h2);
    } finally {
      I[U++] = void 0;
    }
  }
  intersectionsWithRay(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2, h2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA), a(Q2, DA), A.rawquerypipeline_intersectionsWithRay(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2, D2, J(o2), G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, !E(k2), E(k2) ? 0 : k2, J(h2));
    } finally {
      I[U++] = void 0, I[U++] = void 0;
    }
  }
  intersectionWithShape(g2, C2, B2, Q2, i2, o2, w2, S2, k2, h2) {
    try {
      const y2 = A.__wbindgen_add_to_stack_pointer(-16);
      a(g2, AA), a(C2, p), a(B2, DA), a(Q2, IA), a(i2, BA), A.rawquerypipeline_intersectionWithShape(y2, this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2.__wbg_ptr, o2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, !E(k2), E(k2) ? 0 : k2, J(h2));
      var K2 = G()[y2 / 4 + 0], N2 = D()[y2 / 8 + 1];
      return K2 === 0 ? void 0 : N2;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16), I[U++] = void 0;
    }
  }
  projectPoint(g2, C2, B2, Q2, i2, D2, o2, G2, w2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA);
      const S2 = A.rawquerypipeline_projectPoint(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2, i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, !E(G2), E(G2) ? 0 : G2, J(w2));
      return S2 === 0 ? void 0 : P.__wrap(S2);
    } finally {
      I[U++] = void 0;
    }
  }
  projectPointAndGetFeature(g2, C2, B2, Q2, i2, D2, o2, G2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA);
      const w2 = A.rawquerypipeline_projectPointAndGetFeature(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2, !E(i2), E(i2) ? 0 : i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, J(G2));
      return w2 === 0 ? void 0 : P.__wrap(w2);
    } finally {
      I[U++] = void 0;
    }
  }
  intersectionsWithPoint(g2, C2, B2, Q2, i2, D2, o2, G2, w2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA), A.rawquerypipeline_intersectionsWithPoint(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, J(Q2), i2, !E(D2), E(D2) ? 0 : D2, !E(o2), E(o2) ? 0 : o2, !E(G2), E(G2) ? 0 : G2, J(w2));
    } finally {
      I[U++] = void 0, I[U++] = void 0;
    }
  }
  castShape(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2, h2, K2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA), a(Q2, IA), a(i2, DA), a(D2, BA);
      const N2 = A.rawquerypipeline_castShape(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2.__wbg_ptr, D2.__wbg_ptr, o2, G2, w2, !E(S2), E(S2) ? 0 : S2, !E(k2), E(k2) ? 0 : k2, !E(h2), E(h2) ? 0 : h2, J(K2));
      return N2 === 0 ? void 0 : QA.__wrap(N2);
    } finally {
      I[U++] = void 0;
    }
  }
  intersectionsWithShape(g2, C2, B2, Q2, i2, D2, o2, G2, w2, S2, k2) {
    try {
      a(g2, AA), a(C2, p), a(B2, DA), a(Q2, IA), a(i2, BA), A.rawquerypipeline_intersectionsWithShape(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, i2.__wbg_ptr, J(D2), o2, !E(G2), E(G2) ? 0 : G2, !E(w2), E(w2) ? 0 : w2, !E(S2), E(S2) ? 0 : S2, J(k2));
    } finally {
      I[U++] = void 0, I[U++] = void 0;
    }
  }
  collidersWithAabbIntersectingAabb(g2, C2, B2) {
    try {
      a(g2, DA), a(C2, DA), A.rawquerypipeline_collidersWithAabbIntersectingAabb(this.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, J(B2));
    } finally {
      I[U++] = void 0;
    }
  }
}
class v {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(v.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawraycolliderintersection_free(I2);
  }
  colliderHandle() {
    return A.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
  }
  normal() {
    const I2 = A.rawraycolliderintersection_normal(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.__wbg_ptr);
  }
  featureType() {
    return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawpointcolliderprojection_featureId(C2, this.__wbg_ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class _ {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(_.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawraycollidertoi_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.__wbg_ptr);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.__wbg_ptr);
  }
}
class $ {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create($.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrayintersection_free(I2);
  }
  normal() {
    const I2 = A.rawraycolliderintersection_normal(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.__wbg_ptr);
  }
  featureType() {
    return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
  }
  featureId() {
    try {
      const C2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.rawpointcolliderprojection_featureId(C2, this.__wbg_ptr);
      var I2 = G()[C2 / 4 + 0], g2 = G()[C2 / 4 + 1];
      return I2 === 0 ? void 0 : g2 >>> 0;
    } finally {
      A.__wbindgen_add_to_stack_pointer(16);
    }
  }
}
class AA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(AA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrigidbodyset_free(I2);
  }
  rbTranslation(I2) {
    const g2 = A.rawrigidbodyset_rbTranslation(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbRotation(I2) {
    const g2 = A.rawrigidbodyset_rbRotation(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  rbSleep(I2) {
    A.rawrigidbodyset_rbSleep(this.__wbg_ptr, I2);
  }
  rbIsSleeping(I2) {
    return A.rawrigidbodyset_rbIsSleeping(this.__wbg_ptr, I2) !== 0;
  }
  rbIsMoving(I2) {
    return A.rawrigidbodyset_rbIsMoving(this.__wbg_ptr, I2) !== 0;
  }
  rbNextTranslation(I2) {
    const g2 = A.rawrigidbodyset_rbNextTranslation(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbNextRotation(I2) {
    const g2 = A.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  rbSetTranslation(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  rbSetRotation(I2, g2, C2, B2, Q2, E2) {
    A.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, I2, g2, C2, B2, Q2, E2);
  }
  rbSetLinvel(I2, g2, C2) {
    a(g2, DA), A.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
  }
  rbSetAngvel(I2, g2, C2) {
    a(g2, DA), A.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
  }
  rbSetNextKinematicTranslation(I2, g2, C2, B2) {
    A.rawrigidbodyset_rbSetNextKinematicTranslation(this.__wbg_ptr, I2, g2, C2, B2);
  }
  rbSetNextKinematicRotation(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetNextKinematicRotation(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  rbRecomputeMassPropertiesFromColliders(I2, g2) {
    a(g2, p), A.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(this.__wbg_ptr, I2, g2.__wbg_ptr);
  }
  rbSetAdditionalMass(I2, g2, C2) {
    A.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, I2, g2, C2);
  }
  rbSetAdditionalMassProperties(I2, g2, C2, B2, Q2, E2) {
    a(C2, DA), a(B2, DA), a(Q2, IA), A.rawrigidbodyset_rbSetAdditionalMassProperties(this.__wbg_ptr, I2, g2, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, E2);
  }
  rbLinvel(I2) {
    const g2 = A.rawrigidbodyset_rbLinvel(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbAngvel(I2) {
    const g2 = A.rawrigidbodyset_rbAngvel(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbLockTranslations(I2, g2, C2) {
    A.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, I2, g2, C2);
  }
  rbSetEnabledTranslations(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetEnabledTranslations(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  rbLockRotations(I2, g2, C2) {
    A.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, I2, g2, C2);
  }
  rbSetEnabledRotations(I2, g2, C2, B2, Q2) {
    A.rawrigidbodyset_rbSetEnabledRotations(this.__wbg_ptr, I2, g2, C2, B2, Q2);
  }
  rbDominanceGroup(I2) {
    return A.rawrigidbodyset_rbDominanceGroup(this.__wbg_ptr, I2);
  }
  rbSetDominanceGroup(I2, g2) {
    A.rawrigidbodyset_rbSetDominanceGroup(this.__wbg_ptr, I2, g2);
  }
  rbEnableCcd(I2, g2) {
    A.rawrigidbodyset_rbEnableCcd(this.__wbg_ptr, I2, g2);
  }
  rbMass(I2) {
    return A.rawrigidbodyset_rbMass(this.__wbg_ptr, I2);
  }
  rbInvMass(I2) {
    return A.rawrigidbodyset_rbInvMass(this.__wbg_ptr, I2);
  }
  rbEffectiveInvMass(I2) {
    const g2 = A.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbLocalCom(I2) {
    const g2 = A.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbWorldCom(I2) {
    const g2 = A.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbInvPrincipalInertiaSqrt(I2) {
    const g2 = A.rawrigidbodyset_rbInvPrincipalInertiaSqrt(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbPrincipalInertiaLocalFrame(I2) {
    const g2 = A.rawrigidbodyset_rbPrincipalInertiaLocalFrame(this.__wbg_ptr, I2);
    return IA.__wrap(g2);
  }
  rbPrincipalInertia(I2) {
    const g2 = A.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, I2);
    return DA.__wrap(g2);
  }
  rbEffectiveWorldInvInertiaSqrt(I2) {
    const g2 = A.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(this.__wbg_ptr, I2);
    return gA.__wrap(g2);
  }
  rbEffectiveAngularInertia(I2) {
    const g2 = A.rawrigidbodyset_rbEffectiveAngularInertia(this.__wbg_ptr, I2);
    return gA.__wrap(g2);
  }
  rbWakeUp(I2) {
    A.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, I2);
  }
  rbIsCcdEnabled(I2) {
    return A.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, I2) !== 0;
  }
  rbNumColliders(I2) {
    return A.rawrigidbodyset_rbNumColliders(this.__wbg_ptr, I2) >>> 0;
  }
  rbCollider(I2, g2) {
    return A.rawrigidbodyset_rbCollider(this.__wbg_ptr, I2, g2);
  }
  rbBodyType(I2) {
    return A.rawrigidbodyset_rbBodyType(this.__wbg_ptr, I2);
  }
  rbSetBodyType(I2, g2, C2) {
    A.rawrigidbodyset_rbSetBodyType(this.__wbg_ptr, I2, g2, C2);
  }
  rbIsFixed(I2) {
    return A.rawrigidbodyset_rbIsFixed(this.__wbg_ptr, I2) !== 0;
  }
  rbIsKinematic(I2) {
    return A.rawrigidbodyset_rbIsKinematic(this.__wbg_ptr, I2) !== 0;
  }
  rbIsDynamic(I2) {
    return A.rawrigidbodyset_rbIsDynamic(this.__wbg_ptr, I2) !== 0;
  }
  rbLinearDamping(I2) {
    return A.rawrigidbodyset_rbLinearDamping(this.__wbg_ptr, I2);
  }
  rbAngularDamping(I2) {
    return A.rawrigidbodyset_rbAngularDamping(this.__wbg_ptr, I2);
  }
  rbSetLinearDamping(I2, g2) {
    A.rawrigidbodyset_rbSetLinearDamping(this.__wbg_ptr, I2, g2);
  }
  rbSetAngularDamping(I2, g2) {
    A.rawrigidbodyset_rbSetAngularDamping(this.__wbg_ptr, I2, g2);
  }
  rbSetEnabled(I2, g2) {
    A.rawrigidbodyset_rbSetEnabled(this.__wbg_ptr, I2, g2);
  }
  rbIsEnabled(I2) {
    return A.rawrigidbodyset_rbIsEnabled(this.__wbg_ptr, I2) !== 0;
  }
  rbGravityScale(I2) {
    return A.rawrigidbodyset_rbGravityScale(this.__wbg_ptr, I2);
  }
  rbSetGravityScale(I2, g2, C2) {
    A.rawrigidbodyset_rbSetGravityScale(this.__wbg_ptr, I2, g2, C2);
  }
  rbResetForces(I2, g2) {
    A.rawrigidbodyset_rbResetForces(this.__wbg_ptr, I2, g2);
  }
  rbResetTorques(I2, g2) {
    A.rawrigidbodyset_rbResetTorques(this.__wbg_ptr, I2, g2);
  }
  rbAddForce(I2, g2, C2) {
    a(g2, DA), A.rawrigidbodyset_rbAddForce(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
  }
  rbApplyImpulse(I2, g2, C2) {
    a(g2, DA), A.rawrigidbodyset_rbApplyImpulse(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
  }
  rbAddTorque(I2, g2, C2) {
    a(g2, DA), A.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
  }
  rbApplyTorqueImpulse(I2, g2, C2) {
    a(g2, DA), A.rawrigidbodyset_rbApplyTorqueImpulse(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
  }
  rbAddForceAtPoint(I2, g2, C2, B2) {
    a(g2, DA), a(C2, DA), A.rawrigidbodyset_rbAddForceAtPoint(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2);
  }
  rbApplyImpulseAtPoint(I2, g2, C2, B2) {
    a(g2, DA), a(C2, DA), A.rawrigidbodyset_rbApplyImpulseAtPoint(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2);
  }
  rbAdditionalSolverIterations(I2) {
    return A.rawrigidbodyset_rbAdditionalSolverIterations(this.__wbg_ptr, I2) >>> 0;
  }
  rbSetAdditionalSolverIterations(I2, g2) {
    A.rawrigidbodyset_rbSetAdditionalSolverIterations(this.__wbg_ptr, I2, g2);
  }
  rbUserData(I2) {
    return A.rawrigidbodyset_rbUserData(this.__wbg_ptr, I2) >>> 0;
  }
  rbSetUserData(I2, g2) {
    A.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, I2, g2);
  }
  constructor() {
    const I2 = A.rawrigidbodyset_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  createRigidBody(I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, S2, k2, h2, K2, U2, J2, N2, y2, M2, F2, q2, R2, s2, c2) {
    a(g2, DA), a(C2, IA), a(i2, DA), a(D2, DA), a(o2, DA), a(G2, DA), a(w2, IA);
    return A.rawrigidbodyset_createRigidBody(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2, Q2, E2, i2.__wbg_ptr, D2.__wbg_ptr, o2.__wbg_ptr, G2.__wbg_ptr, w2.__wbg_ptr, S2, k2, h2, K2, U2, J2, N2, y2, M2, F2, q2, R2, s2, c2);
  }
  remove(I2, g2, C2, B2, Q2) {
    a(g2, m), a(C2, p), a(B2, W), a(Q2, f), A.rawrigidbodyset_remove(this.__wbg_ptr, I2, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr);
  }
  len() {
    return A.rawcolliderset_len(this.__wbg_ptr) >>> 0;
  }
  contains(I2) {
    return A.rawrigidbodyset_contains(this.__wbg_ptr, I2) !== 0;
  }
  forEachRigidBodyHandle(g2) {
    try {
      A.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, J(g2));
    } finally {
      I[U++] = void 0;
    }
  }
  propagateModifiedBodyPositionsToColliders(I2) {
    a(I2, p), A.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(this.__wbg_ptr, I2.__wbg_ptr);
  }
}
class IA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(IA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawrotation_free(I2);
  }
  constructor(I2, g2, C2, B2) {
    const Q2 = A.rawrotation_new(I2, g2, C2, B2);
    return this.__wbg_ptr = Q2 >>> 0, this;
  }
  static identity() {
    const I2 = A.rawrotation_identity();
    return IA.__wrap(I2);
  }
  get x() {
    return A.rawrotation_x(this.__wbg_ptr);
  }
  get y() {
    return A.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  get z() {
    return A.rawraycolliderintersection_toi(this.__wbg_ptr);
  }
  get w() {
    return A.rawintegrationparameters_erp(this.__wbg_ptr);
  }
}
class gA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(gA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawsdpmatrix3_free(I2);
  }
  elements() {
    return Q(A.rawsdpmatrix3_elements(this.__wbg_ptr));
  }
}
class CA {
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawserializationpipeline_free(I2);
  }
  constructor() {
    const I2 = A.rawserializationpipeline_new();
    return this.__wbg_ptr = I2 >>> 0, this;
  }
  serializeAll(I2, g2, C2, B2, E2, i2, D2, o2, G2) {
    a(I2, DA), a(g2, x), a(C2, m), a(B2, l), a(E2, X), a(i2, AA), a(D2, p), a(o2, W), a(G2, f);
    return Q(A.rawserializationpipeline_serializeAll(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, E2.__wbg_ptr, i2.__wbg_ptr, D2.__wbg_ptr, o2.__wbg_ptr, G2.__wbg_ptr));
  }
  deserializeAll(I2) {
    const g2 = A.rawserializationpipeline_deserializeAll(this.__wbg_ptr, C(I2));
    return g2 === 0 ? void 0 : n.__wrap(g2);
  }
}
class BA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(BA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshape_free(I2);
  }
  static cuboid(I2, g2, C2) {
    const B2 = A.rawshape_cuboid(I2, g2, C2);
    return BA.__wrap(B2);
  }
  static roundCuboid(I2, g2, C2, B2) {
    const Q2 = A.rawshape_roundCuboid(I2, g2, C2, B2);
    return BA.__wrap(Q2);
  }
  static ball(I2) {
    const g2 = A.rawshape_ball(I2);
    return BA.__wrap(g2);
  }
  static halfspace(I2) {
    a(I2, DA);
    const g2 = A.rawshape_halfspace(I2.__wbg_ptr);
    return BA.__wrap(g2);
  }
  static capsule(I2, g2) {
    const C2 = A.rawshape_capsule(I2, g2);
    return BA.__wrap(C2);
  }
  static cylinder(I2, g2) {
    const C2 = A.rawshape_cylinder(I2, g2);
    return BA.__wrap(C2);
  }
  static roundCylinder(I2, g2, C2) {
    const B2 = A.rawshape_roundCylinder(I2, g2, C2);
    return BA.__wrap(B2);
  }
  static cone(I2, g2) {
    const C2 = A.rawshape_cone(I2, g2);
    return BA.__wrap(C2);
  }
  static roundCone(I2, g2, C2) {
    const B2 = A.rawshape_roundCone(I2, g2, C2);
    return BA.__wrap(B2);
  }
  static polyline(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_polyline(C2, B2, Q2, E2);
    return BA.__wrap(i2);
  }
  static trimesh(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_trimesh(C2, B2, Q2, E2);
    return BA.__wrap(i2);
  }
  static heightfield(I2, g2, C2, B2) {
    const Q2 = q(C2, A.__wbindgen_malloc), E2 = F;
    a(B2, DA);
    const i2 = A.rawshape_heightfield(I2, g2, Q2, E2, B2.__wbg_ptr);
    return BA.__wrap(i2);
  }
  static segment(I2, g2) {
    a(I2, DA), a(g2, DA);
    const C2 = A.rawshape_segment(I2.__wbg_ptr, g2.__wbg_ptr);
    return BA.__wrap(C2);
  }
  static triangle(I2, g2, C2) {
    a(I2, DA), a(g2, DA), a(C2, DA);
    const B2 = A.rawshape_triangle(I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr);
    return BA.__wrap(B2);
  }
  static roundTriangle(I2, g2, C2, B2) {
    a(I2, DA), a(g2, DA), a(C2, DA);
    const Q2 = A.rawshape_roundTriangle(I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2);
    return BA.__wrap(Q2);
  }
  static convexHull(I2) {
    const g2 = q(I2, A.__wbindgen_malloc), C2 = F, B2 = A.rawshape_convexHull(g2, C2);
    return B2 === 0 ? void 0 : BA.__wrap(B2);
  }
  static roundConvexHull(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = A.rawshape_roundConvexHull(C2, B2, g2);
    return Q2 === 0 ? void 0 : BA.__wrap(Q2);
  }
  static convexMesh(I2, g2) {
    const C2 = q(I2, A.__wbindgen_malloc), B2 = F, Q2 = R(g2, A.__wbindgen_malloc), E2 = F, i2 = A.rawshape_convexMesh(C2, B2, Q2, E2);
    return i2 === 0 ? void 0 : BA.__wrap(i2);
  }
  static roundConvexMesh(I2, g2, C2) {
    const B2 = q(I2, A.__wbindgen_malloc), Q2 = F, E2 = R(g2, A.__wbindgen_malloc), i2 = F, D2 = A.rawshape_roundConvexMesh(B2, Q2, E2, i2, C2);
    return D2 === 0 ? void 0 : BA.__wrap(D2);
  }
  castShape(I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    a(I2, DA), a(g2, IA), a(C2, DA), a(B2, BA), a(Q2, DA), a(E2, IA), a(i2, DA);
    const G2 = A.rawshape_castShape(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, E2.__wbg_ptr, i2.__wbg_ptr, D2, o2);
    return G2 === 0 ? void 0 : iA.__wrap(G2);
  }
  intersectsShape(I2, g2, C2, B2, Q2) {
    a(I2, DA), a(g2, IA), a(C2, BA), a(B2, DA), a(Q2, IA);
    return A.rawshape_intersectsShape(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr) !== 0;
  }
  contactShape(I2, g2, C2, B2, Q2, E2) {
    a(I2, DA), a(g2, IA), a(C2, BA), a(B2, DA), a(Q2, IA);
    const i2 = A.rawshape_contactShape(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2.__wbg_ptr, E2);
    return i2 === 0 ? void 0 : EA.__wrap(i2);
  }
  containsPoint(I2, g2, C2) {
    a(I2, DA), a(g2, IA), a(C2, DA);
    return A.rawshape_containsPoint(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr) !== 0;
  }
  projectPoint(I2, g2, C2, B2) {
    a(I2, DA), a(g2, IA), a(C2, DA);
    const Q2 = A.rawshape_projectPoint(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2);
    return u.__wrap(Q2);
  }
  intersectsRay(I2, g2, C2, B2, Q2) {
    a(I2, DA), a(g2, IA), a(C2, DA), a(B2, DA);
    return A.rawshape_intersectsRay(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2) !== 0;
  }
  castRay(I2, g2, C2, B2, Q2, E2) {
    a(I2, DA), a(g2, IA), a(C2, DA), a(B2, DA);
    return A.rawshape_castRay(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2, E2);
  }
  castRayAndGetNormal(I2, g2, C2, B2, Q2, E2) {
    a(I2, DA), a(g2, IA), a(C2, DA), a(B2, DA);
    const i2 = A.rawshape_castRayAndGetNormal(this.__wbg_ptr, I2.__wbg_ptr, g2.__wbg_ptr, C2.__wbg_ptr, B2.__wbg_ptr, Q2, E2);
    return i2 === 0 ? void 0 : $.__wrap(i2);
  }
}
class QA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(QA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapecollidertoi_free(I2);
  }
  colliderHandle() {
    return A.rawcharactercollision_handle(this.__wbg_ptr);
  }
  toi() {
    return A.rawraycolliderintersection_toi(this.__wbg_ptr);
  }
  witness1() {
    const I2 = A.rawraycolliderintersection_normal(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  witness2() {
    const I2 = A.rawshapecollidertoi_witness2(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawcharactercollision_translationDeltaRemaining(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
}
class EA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(EA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapecontact_free(I2);
  }
  distance() {
    return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(this.__wbg_ptr);
  }
  point1() {
    const I2 = A.rawpointprojection_point(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  point2() {
    const I2 = A.rawraycolliderintersection_normal(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawshapecollidertoi_witness2(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawcharactercollision_translationDeltaApplied(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
}
class iA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(iA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawshapetoi_free(I2);
  }
  toi() {
    return A.rawrotation_x(this.__wbg_ptr);
  }
  witness1() {
    const I2 = A.rawshapetoi_witness1(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  witness2() {
    const I2 = A.rawcontactforceevent_total_force(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  normal1() {
    const I2 = A.rawshapetoi_normal1(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  normal2() {
    const I2 = A.rawshapetoi_normal2(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
}
class DA {
  static __wrap(A2) {
    A2 >>>= 0;
    const I2 = Object.create(DA.prototype);
    return I2.__wbg_ptr = A2, I2;
  }
  __destroy_into_raw() {
    const A2 = this.__wbg_ptr;
    return this.__wbg_ptr = 0, A2;
  }
  free() {
    const I2 = this.__destroy_into_raw();
    A.__wbg_rawvector_free(I2);
  }
  static zero() {
    const I2 = A.rawvector_zero();
    return DA.__wrap(I2);
  }
  constructor(I2, g2, C2) {
    const B2 = A.rawvector_new(I2, g2, C2);
    return this.__wbg_ptr = B2 >>> 0, this;
  }
  get x() {
    return A.rawrotation_x(this.__wbg_ptr);
  }
  set x(I2) {
    A.rawvector_set_x(this.__wbg_ptr, I2);
  }
  get y() {
    return A.rawintegrationparameters_dt(this.__wbg_ptr);
  }
  set y(I2) {
    A.rawintegrationparameters_set_dt(this.__wbg_ptr, I2);
  }
  get z() {
    return A.rawraycolliderintersection_toi(this.__wbg_ptr);
  }
  set z(I2) {
    A.rawvector_set_z(this.__wbg_ptr, I2);
  }
  xyz() {
    const I2 = A.rawvector_xyz(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  yxz() {
    const I2 = A.rawvector_yxz(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  zxy() {
    const I2 = A.rawvector_zxy(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  xzy() {
    const I2 = A.rawvector_xzy(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  yzx() {
    const I2 = A.rawvector_yzx(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
  zyx() {
    const I2 = A.rawvector_zyx(this.__wbg_ptr);
    return DA.__wrap(I2);
  }
}
async function oA(I2) {
  if (A !== void 0)
    return A;
  I2 === void 0 && (I2 = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
  const g2 = function() {
    const I3 = {wbg: {}};
    return I3.wbg.__wbindgen_number_new = function(A2) {
      return C(A2);
    }, I3.wbg.__wbindgen_boolean_get = function(A2) {
      const I4 = B(A2);
      return typeof I4 == "boolean" ? I4 ? 1 : 0 : 2;
    }, I3.wbg.__wbindgen_object_drop_ref = function(A2) {
      Q(A2);
    }, I3.wbg.__wbindgen_number_get = function(A2, I4) {
      const g3 = B(I4), C2 = typeof g3 == "number" ? g3 : void 0;
      D()[A2 / 8 + 1] = E(C2) ? 0 : C2, G()[A2 / 4 + 0] = !E(C2);
    }, I3.wbg.__wbindgen_is_function = function(A2) {
      return typeof B(A2) == "function";
    }, I3.wbg.__wbg_rawraycolliderintersection_new = function(A2) {
      return C(v.__wrap(A2));
    }, I3.wbg.__wbg_rawcontactforceevent_new = function(A2) {
      return C(e.__wrap(A2));
    }, I3.wbg.__wbg_call_01734de55d61e11d = function() {
      return s(function(A2, I4, g3) {
        return C(B(A2).call(B(I4), B(g3)));
      }, arguments);
    }, I3.wbg.__wbg_call_4c92f6aec1e1d6e6 = function() {
      return s(function(A2, I4, g3, Q2) {
        return C(B(A2).call(B(I4), B(g3), B(Q2)));
      }, arguments);
    }, I3.wbg.__wbg_call_776890ca77946e2f = function() {
      return s(function(A2, I4, g3, Q2, E2) {
        return C(B(A2).call(B(I4), B(g3), B(Q2), B(E2)));
      }, arguments);
    }, I3.wbg.__wbg_bind_60a9a80cada2f33c = function(A2, I4, g3, Q2) {
      return C(B(A2).bind(B(I4), B(g3), B(Q2)));
    }, I3.wbg.__wbg_buffer_085ec1f694018c4f = function(A2) {
      return C(B(A2).buffer);
    }, I3.wbg.__wbg_newwithbyteoffsetandlength_6da8e527659b86aa = function(A2, I4, g3) {
      return C(new Uint8Array(B(A2), I4 >>> 0, g3 >>> 0));
    }, I3.wbg.__wbg_new_8125e318e6245eed = function(A2) {
      return C(new Uint8Array(B(A2)));
    }, I3.wbg.__wbg_set_5cf90238115182c3 = function(A2, I4, g3) {
      B(A2).set(B(I4), g3 >>> 0);
    }, I3.wbg.__wbg_length_72e2208bbc0efc61 = function(A2) {
      return B(A2).length;
    }, I3.wbg.__wbg_newwithbyteoffsetandlength_69193e31c844b792 = function(A2, I4, g3) {
      return C(new Float32Array(B(A2), I4 >>> 0, g3 >>> 0));
    }, I3.wbg.__wbg_set_6146c51d49a2c0df = function(A2, I4, g3) {
      B(A2).set(B(I4), g3 >>> 0);
    }, I3.wbg.__wbg_length_d7327c75a759af37 = function(A2) {
      return B(A2).length;
    }, I3.wbg.__wbg_newwithlength_68d29ab115d0099c = function(A2) {
      return C(new Float32Array(A2 >>> 0));
    }, I3.wbg.__wbindgen_throw = function(A2, I4) {
      throw new Error(k(A2, I4));
    }, I3.wbg.__wbindgen_memory = function() {
      return C(A.memory);
    }, I3;
  }();
  (typeof I2 == "string" || typeof Request == "function" && I2 instanceof Request || typeof URL == "function" && I2 instanceof URL) && (I2 = fetch(I2));
  const {instance: w2, module: a2} = await async function(A2, I3) {
    if (typeof Response == "function" && A2 instanceof Response) {
      if (typeof WebAssembly.instantiateStreaming == "function")
        try {
          return await WebAssembly.instantiateStreaming(A2, I3);
        } catch (I4) {
          if (A2.headers.get("Content-Type") == "application/wasm")
            throw I4;
          console.warn("`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n", I4);
        }
      const g3 = await A2.arrayBuffer();
      return await WebAssembly.instantiate(g3, I3);
    }
    {
      const g3 = await WebAssembly.instantiate(A2, I3);
      return g3 instanceof WebAssembly.Instance ? {instance: g3, module: A2} : g3;
    }
  }(await I2, g2);
  return function(I3, g3) {
    return A = I3.exports, oA.__wbindgen_wasm_module = g3, h = null, i = null, o = null, y = null, S = null, A;
  }(w2, a2);
}
class GA {
  constructor(A2, I2, g2) {
    this.x = A2, this.y = I2, this.z = g2;
  }
}
class wA {
  static new(A2, I2, g2) {
    return new GA(A2, I2, g2);
  }
  static intoRaw(A2) {
    return new DA(A2.x, A2.y, A2.z);
  }
  static zeros() {
    return wA.new(0, 0, 0);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    let I2 = wA.new(A2.x, A2.y, A2.z);
    return A2.free(), I2;
  }
  static copy(A2, I2) {
    A2.x = I2.x, A2.y = I2.y, A2.z = I2.z;
  }
}
class SA {
  constructor(A2, I2, g2, C2) {
    this.x = A2, this.y = I2, this.z = g2, this.w = C2;
  }
}
class kA {
  static identity() {
    return new SA(0, 0, 0, 1);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    let I2 = new SA(A2.x, A2.y, A2.z, A2.w);
    return A2.free(), I2;
  }
  static intoRaw(A2) {
    return new IA(A2.x, A2.y, A2.z, A2.w);
  }
  static copy(A2, I2) {
    A2.x = I2.x, A2.y = I2.y, A2.z = I2.z, A2.w = I2.w;
  }
}
class aA {
  constructor(A2) {
    this.elements = A2;
  }
  get m11() {
    return this.elements[0];
  }
  get m12() {
    return this.elements[1];
  }
  get m21() {
    return this.m12;
  }
  get m13() {
    return this.elements[2];
  }
  get m31() {
    return this.m13;
  }
  get m22() {
    return this.elements[3];
  }
  get m23() {
    return this.elements[4];
  }
  get m32() {
    return this.m23;
  }
  get m33() {
    return this.elements[5];
  }
}
class hA {
  static fromRaw(A2) {
    const I2 = new aA(A2.elements());
    return A2.free(), I2;
  }
}
var KA, UA, JA, NA, yA, MA, FA, qA, RA, sA, cA, YA, HA;
!function(A2) {
  A2[A2.Dynamic = 0] = "Dynamic", A2[A2.Fixed = 1] = "Fixed", A2[A2.KinematicPositionBased = 2] = "KinematicPositionBased", A2[A2.KinematicVelocityBased = 3] = "KinematicVelocityBased";
}(KA || (KA = {}));
class lA {
  constructor(A2, I2, g2) {
    this.rawSet = A2, this.colliderSet = I2, this.handle = g2;
  }
  finalizeDeserialization(A2) {
    this.colliderSet = A2;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  lockTranslations(A2, I2) {
    return this.rawSet.rbLockTranslations(this.handle, A2, I2);
  }
  lockRotations(A2, I2) {
    return this.rawSet.rbLockRotations(this.handle, A2, I2);
  }
  setEnabledTranslations(A2, I2, g2, C2) {
    return this.rawSet.rbSetEnabledTranslations(this.handle, A2, I2, g2, C2);
  }
  restrictTranslations(A2, I2, g2, C2) {
    this.setEnabledTranslations(A2, I2, g2, C2);
  }
  setEnabledRotations(A2, I2, g2, C2) {
    return this.rawSet.rbSetEnabledRotations(this.handle, A2, I2, g2, C2);
  }
  restrictRotations(A2, I2, g2, C2) {
    this.setEnabledRotations(A2, I2, g2, C2);
  }
  dominanceGroup() {
    return this.rawSet.rbDominanceGroup(this.handle);
  }
  setDominanceGroup(A2) {
    this.rawSet.rbSetDominanceGroup(this.handle, A2);
  }
  additionalSolverIterations() {
    return this.rawSet.rbAdditionalSolverIterations(this.handle);
  }
  setAdditionalSolverIterations(A2) {
    this.rawSet.rbSetAdditionalSolverIterations(this.handle, A2);
  }
  enableCcd(A2) {
    this.rawSet.rbEnableCcd(this.handle, A2);
  }
  translation() {
    let A2 = this.rawSet.rbTranslation(this.handle);
    return wA.fromRaw(A2);
  }
  rotation() {
    let A2 = this.rawSet.rbRotation(this.handle);
    return kA.fromRaw(A2);
  }
  nextTranslation() {
    let A2 = this.rawSet.rbNextTranslation(this.handle);
    return wA.fromRaw(A2);
  }
  nextRotation() {
    let A2 = this.rawSet.rbNextRotation(this.handle);
    return kA.fromRaw(A2);
  }
  setTranslation(A2, I2) {
    this.rawSet.rbSetTranslation(this.handle, A2.x, A2.y, A2.z, I2);
  }
  setLinvel(A2, I2) {
    let g2 = wA.intoRaw(A2);
    this.rawSet.rbSetLinvel(this.handle, g2, I2), g2.free();
  }
  gravityScale() {
    return this.rawSet.rbGravityScale(this.handle);
  }
  setGravityScale(A2, I2) {
    this.rawSet.rbSetGravityScale(this.handle, A2, I2);
  }
  setRotation(A2, I2) {
    this.rawSet.rbSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w, I2);
  }
  setAngvel(A2, I2) {
    let g2 = wA.intoRaw(A2);
    this.rawSet.rbSetAngvel(this.handle, g2, I2), g2.free();
  }
  setNextKinematicTranslation(A2) {
    this.rawSet.rbSetNextKinematicTranslation(this.handle, A2.x, A2.y, A2.z);
  }
  setNextKinematicRotation(A2) {
    this.rawSet.rbSetNextKinematicRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  linvel() {
    return wA.fromRaw(this.rawSet.rbLinvel(this.handle));
  }
  angvel() {
    return wA.fromRaw(this.rawSet.rbAngvel(this.handle));
  }
  mass() {
    return this.rawSet.rbMass(this.handle);
  }
  effectiveInvMass() {
    return wA.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
  }
  invMass() {
    return this.rawSet.rbInvMass(this.handle);
  }
  localCom() {
    return wA.fromRaw(this.rawSet.rbLocalCom(this.handle));
  }
  worldCom() {
    return wA.fromRaw(this.rawSet.rbWorldCom(this.handle));
  }
  invPrincipalInertiaSqrt() {
    return wA.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
  }
  principalInertia() {
    return wA.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
  }
  principalInertiaLocalFrame() {
    return kA.fromRaw(this.rawSet.rbPrincipalInertiaLocalFrame(this.handle));
  }
  effectiveWorldInvInertiaSqrt() {
    return hA.fromRaw(this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle));
  }
  effectiveAngularInertia() {
    return hA.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
  }
  sleep() {
    this.rawSet.rbSleep(this.handle);
  }
  wakeUp() {
    this.rawSet.rbWakeUp(this.handle);
  }
  isCcdEnabled() {
    return this.rawSet.rbIsCcdEnabled(this.handle);
  }
  numColliders() {
    return this.rawSet.rbNumColliders(this.handle);
  }
  collider(A2) {
    return this.colliderSet.get(this.rawSet.rbCollider(this.handle, A2));
  }
  setEnabled(A2) {
    this.rawSet.rbSetEnabled(this.handle, A2);
  }
  isEnabled() {
    return this.rawSet.rbIsEnabled(this.handle);
  }
  bodyType() {
    return this.rawSet.rbBodyType(this.handle);
  }
  setBodyType(A2, I2) {
    return this.rawSet.rbSetBodyType(this.handle, A2, I2);
  }
  isSleeping() {
    return this.rawSet.rbIsSleeping(this.handle);
  }
  isMoving() {
    return this.rawSet.rbIsMoving(this.handle);
  }
  isFixed() {
    return this.rawSet.rbIsFixed(this.handle);
  }
  isKinematic() {
    return this.rawSet.rbIsKinematic(this.handle);
  }
  isDynamic() {
    return this.rawSet.rbIsDynamic(this.handle);
  }
  linearDamping() {
    return this.rawSet.rbLinearDamping(this.handle);
  }
  angularDamping() {
    return this.rawSet.rbAngularDamping(this.handle);
  }
  setLinearDamping(A2) {
    this.rawSet.rbSetLinearDamping(this.handle, A2);
  }
  recomputeMassPropertiesFromColliders() {
    this.rawSet.rbRecomputeMassPropertiesFromColliders(this.handle, this.colliderSet.raw);
  }
  setAdditionalMass(A2, I2) {
    this.rawSet.rbSetAdditionalMass(this.handle, A2, I2);
  }
  setAdditionalMassProperties(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(I2), E2 = wA.intoRaw(g2), i2 = kA.intoRaw(C2);
    this.rawSet.rbSetAdditionalMassProperties(this.handle, A2, Q2, E2, i2, B2), Q2.free(), E2.free(), i2.free();
  }
  setAngularDamping(A2) {
    this.rawSet.rbSetAngularDamping(this.handle, A2);
  }
  resetForces(A2) {
    this.rawSet.rbResetForces(this.handle, A2);
  }
  resetTorques(A2) {
    this.rawSet.rbResetTorques(this.handle, A2);
  }
  addForce(A2, I2) {
    const g2 = wA.intoRaw(A2);
    this.rawSet.rbAddForce(this.handle, g2, I2), g2.free();
  }
  applyImpulse(A2, I2) {
    const g2 = wA.intoRaw(A2);
    this.rawSet.rbApplyImpulse(this.handle, g2, I2), g2.free();
  }
  addTorque(A2, I2) {
    const g2 = wA.intoRaw(A2);
    this.rawSet.rbAddTorque(this.handle, g2, I2), g2.free();
  }
  applyTorqueImpulse(A2, I2) {
    const g2 = wA.intoRaw(A2);
    this.rawSet.rbApplyTorqueImpulse(this.handle, g2, I2), g2.free();
  }
  addForceAtPoint(A2, I2, g2) {
    const C2 = wA.intoRaw(A2), B2 = wA.intoRaw(I2);
    this.rawSet.rbAddForceAtPoint(this.handle, C2, B2, g2), C2.free(), B2.free();
  }
  applyImpulseAtPoint(A2, I2, g2) {
    const C2 = wA.intoRaw(A2), B2 = wA.intoRaw(I2);
    this.rawSet.rbApplyImpulseAtPoint(this.handle, C2, B2, g2), C2.free(), B2.free();
  }
}
class LA {
  constructor(A2) {
    this.enabled = true, this.status = A2, this.translation = wA.zeros(), this.rotation = kA.identity(), this.gravityScale = 1, this.linvel = wA.zeros(), this.mass = 0, this.massOnly = false, this.centerOfMass = wA.zeros(), this.translationsEnabledX = true, this.translationsEnabledY = true, this.angvel = wA.zeros(), this.principalAngularInertia = wA.zeros(), this.angularInertiaLocalFrame = kA.identity(), this.translationsEnabledZ = true, this.rotationsEnabledX = true, this.rotationsEnabledY = true, this.rotationsEnabledZ = true, this.linearDamping = 0, this.angularDamping = 0, this.canSleep = true, this.sleeping = false, this.ccdEnabled = false, this.dominanceGroup = 0, this.additionalSolverIterations = 0;
  }
  static dynamic() {
    return new LA(KA.Dynamic);
  }
  static kinematicPositionBased() {
    return new LA(KA.KinematicPositionBased);
  }
  static kinematicVelocityBased() {
    return new LA(KA.KinematicVelocityBased);
  }
  static fixed() {
    return new LA(KA.Fixed);
  }
  static newDynamic() {
    return new LA(KA.Dynamic);
  }
  static newKinematicPositionBased() {
    return new LA(KA.KinematicPositionBased);
  }
  static newKinematicVelocityBased() {
    return new LA(KA.KinematicVelocityBased);
  }
  static newStatic() {
    return new LA(KA.Fixed);
  }
  setDominanceGroup(A2) {
    return this.dominanceGroup = A2, this;
  }
  setAdditionalSolverIterations(A2) {
    return this.additionalSolverIterations = A2, this;
  }
  setEnabled(A2) {
    return this.enabled = A2, this;
  }
  setTranslation(A2, I2, g2) {
    if (typeof A2 != "number" || typeof I2 != "number" || typeof g2 != "number")
      throw TypeError("The translation components must be numbers.");
    return this.translation = {x: A2, y: I2, z: g2}, this;
  }
  setRotation(A2) {
    return kA.copy(this.rotation, A2), this;
  }
  setGravityScale(A2) {
    return this.gravityScale = A2, this;
  }
  setAdditionalMass(A2) {
    return this.mass = A2, this.massOnly = true, this;
  }
  setLinvel(A2, I2, g2) {
    if (typeof A2 != "number" || typeof I2 != "number" || typeof g2 != "number")
      throw TypeError("The linvel components must be numbers.");
    return this.linvel = {x: A2, y: I2, z: g2}, this;
  }
  setAngvel(A2) {
    return wA.copy(this.angvel, A2), this;
  }
  setAdditionalMassProperties(A2, I2, g2, C2) {
    return this.mass = A2, wA.copy(this.centerOfMass, I2), wA.copy(this.principalAngularInertia, g2), kA.copy(this.angularInertiaLocalFrame, C2), this.massOnly = false, this;
  }
  enabledTranslations(A2, I2, g2) {
    return this.translationsEnabledX = A2, this.translationsEnabledY = I2, this.translationsEnabledZ = g2, this;
  }
  restrictTranslations(A2, I2, g2) {
    return this.enabledTranslations(A2, I2, g2);
  }
  lockTranslations() {
    return this.enabledTranslations(false, false, false);
  }
  enabledRotations(A2, I2, g2) {
    return this.rotationsEnabledX = A2, this.rotationsEnabledY = I2, this.rotationsEnabledZ = g2, this;
  }
  restrictRotations(A2, I2, g2) {
    return this.enabledRotations(A2, I2, g2);
  }
  lockRotations() {
    return this.restrictRotations(false, false, false);
  }
  setLinearDamping(A2) {
    return this.linearDamping = A2, this;
  }
  setAngularDamping(A2) {
    return this.angularDamping = A2, this;
  }
  setCanSleep(A2) {
    return this.canSleep = A2, this;
  }
  setSleeping(A2) {
    return this.sleeping = A2, this;
  }
  setCcdEnabled(A2) {
    return this.ccdEnabled = A2, this;
  }
  setUserData(A2) {
    return this.userData = A2, this;
  }
}
class tA {
  constructor() {
    this.fconv = new Float64Array(1), this.uconv = new Uint32Array(this.fconv.buffer), this.data = new Array(), this.size = 0;
  }
  set(A2, I2) {
    let g2 = this.index(A2);
    for (; this.data.length <= g2; )
      this.data.push(null);
    this.data[g2] == null && (this.size += 1), this.data[g2] = I2;
  }
  len() {
    return this.size;
  }
  delete(A2) {
    let I2 = this.index(A2);
    I2 < this.data.length && (this.data[I2] != null && (this.size -= 1), this.data[I2] = null);
  }
  clear() {
    this.data = new Array();
  }
  get(A2) {
    let I2 = this.index(A2);
    return I2 < this.data.length ? this.data[I2] : null;
  }
  forEach(A2) {
    for (const I2 of this.data)
      I2 != null && A2(I2);
  }
  getAll() {
    return this.data.filter((A2) => A2 != null);
  }
  index(A2) {
    return this.fconv[0] = A2, this.uconv[0];
  }
}
class pA {
  constructor(A2) {
    this.raw = A2 || new AA(), this.map = new tA(), A2 && A2.forEachRigidBodyHandle((I2) => {
      this.map.set(I2, new lA(A2, null, I2));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createRigidBody(A2, I2) {
    let g2 = wA.intoRaw(I2.translation), C2 = kA.intoRaw(I2.rotation), B2 = wA.intoRaw(I2.linvel), Q2 = wA.intoRaw(I2.centerOfMass), E2 = wA.intoRaw(I2.angvel), i2 = wA.intoRaw(I2.principalAngularInertia), D2 = kA.intoRaw(I2.angularInertiaLocalFrame), o2 = this.raw.createRigidBody(I2.enabled, g2, C2, I2.gravityScale, I2.mass, I2.massOnly, Q2, B2, E2, i2, D2, I2.translationsEnabledX, I2.translationsEnabledY, I2.translationsEnabledZ, I2.rotationsEnabledX, I2.rotationsEnabledY, I2.rotationsEnabledZ, I2.linearDamping, I2.angularDamping, I2.status, I2.canSleep, I2.sleeping, I2.ccdEnabled, I2.dominanceGroup, I2.additionalSolverIterations);
    g2.free(), C2.free(), B2.free(), Q2.free(), E2.free(), i2.free(), D2.free();
    const G2 = new lA(this.raw, A2, o2);
    return G2.userData = I2.userData, this.map.set(o2, G2), G2;
  }
  remove(A2, I2, g2, C2, B2) {
    for (let I3 = 0; I3 < this.raw.rbNumColliders(A2); I3 += 1)
      g2.unmap(this.raw.rbCollider(A2, I3));
    C2.forEachJointHandleAttachedToRigidBody(A2, (A3) => C2.unmap(A3)), B2.forEachJointHandleAttachedToRigidBody(A2, (A3) => B2.unmap(A3)), this.raw.remove(A2, I2.raw, g2.raw, C2.raw, B2.raw), this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  forEachActiveRigidBody(A2, I2) {
    A2.forEachActiveRigidBodyHandle((A3) => {
      I2(this.get(A3));
    });
  }
  getAll() {
    return this.map.getAll();
  }
}
class eA {
  constructor(A2) {
    this.raw = A2 || new x();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  get dt() {
    return this.raw.dt;
  }
  get erp() {
    return this.raw.erp;
  }
  get allowedLinearError() {
    return this.raw.allowedLinearError;
  }
  get predictionDistance() {
    return this.raw.predictionDistance;
  }
  get numSolverIterations() {
    return this.raw.numSolverIterations;
  }
  get numAdditionalFrictionIterations() {
    return this.raw.numAdditionalFrictionIterations;
  }
  get numInternalPgsIterations() {
    return this.raw.numInternalPgsIterations;
  }
  get minIslandSize() {
    return this.raw.minIslandSize;
  }
  get maxCcdSubsteps() {
    return this.raw.maxCcdSubsteps;
  }
  set dt(A2) {
    this.raw.dt = A2;
  }
  set erp(A2) {
    this.raw.erp = A2;
  }
  set allowedLinearError(A2) {
    this.raw.allowedLinearError = A2;
  }
  set predictionDistance(A2) {
    this.raw.predictionDistance = A2;
  }
  set numSolverIterations(A2) {
    this.raw.numSolverIterations = A2;
  }
  set numAdditionalFrictionIterations(A2) {
    this.raw.numAdditionalFrictionIterations = A2;
  }
  set numInternalPgsIterations(A2) {
    this.raw.numInternalPgsIterations = A2;
  }
  set minIslandSize(A2) {
    this.raw.minIslandSize = A2;
  }
  set maxCcdSubsteps(A2) {
    this.raw.maxCcdSubsteps = A2;
  }
  switchToStandardPgsSolver() {
    this.raw.switchToStandardPgsSolver();
  }
  switchToSmallStepsPgsSolver() {
    this.raw.switchToSmallStepsPgsSolver();
  }
}
!function(A2) {
  A2[A2.Revolute = 0] = "Revolute", A2[A2.Fixed = 1] = "Fixed", A2[A2.Prismatic = 2] = "Prismatic", A2[A2.Rope = 3] = "Rope", A2[A2.Spring = 4] = "Spring", A2[A2.Spherical = 5] = "Spherical", A2[A2.Generic = 6] = "Generic";
}(UA || (UA = {})), function(A2) {
  A2[A2.AccelerationBased = 0] = "AccelerationBased", A2[A2.ForceBased = 1] = "ForceBased";
}(JA || (JA = {})), function(A2) {
  A2[A2.X = 1] = "X", A2[A2.Y = 2] = "Y", A2[A2.Z = 4] = "Z", A2[A2.AngX = 8] = "AngX", A2[A2.AngY = 16] = "AngY", A2[A2.AngZ = 32] = "AngZ";
}(NA || (NA = {}));
class rA {
  constructor(A2, I2, g2) {
    this.rawSet = A2, this.bodySet = I2, this.handle = g2;
  }
  static newTyped(A2, I2, g2) {
    switch (A2.jointType(g2)) {
      case H.Revolute:
        return new bA(A2, I2, g2);
      case H.Prismatic:
        return new ZA(A2, I2, g2);
      case H.Fixed:
        return new TA(A2, I2, g2);
      case H.Spring:
        return new OA(A2, I2, g2);
      case H.Rope:
        return new nA(A2, I2, g2);
      case H.Spherical:
        return new xA(A2, I2, g2);
      case H.Generic:
        return new WA(A2, I2, g2);
      default:
        return new rA(A2, I2, g2);
    }
  }
  finalizeDeserialization(A2) {
    this.bodySet = A2;
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  body1() {
    return this.bodySet.get(this.rawSet.jointBodyHandle1(this.handle));
  }
  body2() {
    return this.bodySet.get(this.rawSet.jointBodyHandle2(this.handle));
  }
  type() {
    return this.rawSet.jointType(this.handle);
  }
  frameX1() {
    return kA.fromRaw(this.rawSet.jointFrameX1(this.handle));
  }
  frameX2() {
    return kA.fromRaw(this.rawSet.jointFrameX2(this.handle));
  }
  anchor1() {
    return wA.fromRaw(this.rawSet.jointAnchor1(this.handle));
  }
  anchor2() {
    return wA.fromRaw(this.rawSet.jointAnchor2(this.handle));
  }
  setAnchor1(A2) {
    const I2 = wA.intoRaw(A2);
    this.rawSet.jointSetAnchor1(this.handle, I2), I2.free();
  }
  setAnchor2(A2) {
    const I2 = wA.intoRaw(A2);
    this.rawSet.jointSetAnchor2(this.handle, I2), I2.free();
  }
  setContactsEnabled(A2) {
    this.rawSet.jointSetContactsEnabled(this.handle, A2);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
}
class dA extends rA {
  limitsEnabled() {
    return this.rawSet.jointLimitsEnabled(this.handle, this.rawAxis());
  }
  limitsMin() {
    return this.rawSet.jointLimitsMin(this.handle, this.rawAxis());
  }
  limitsMax() {
    return this.rawSet.jointLimitsMax(this.handle, this.rawAxis());
  }
  setLimits(A2, I2) {
    this.rawSet.jointSetLimits(this.handle, this.rawAxis(), A2, I2);
  }
  configureMotorModel(A2) {
    this.rawSet.jointConfigureMotorModel(this.handle, this.rawAxis(), A2);
  }
  configureMotorVelocity(A2, I2) {
    this.rawSet.jointConfigureMotorVelocity(this.handle, this.rawAxis(), A2, I2);
  }
  configureMotorPosition(A2, I2, g2) {
    this.rawSet.jointConfigureMotorPosition(this.handle, this.rawAxis(), A2, I2, g2);
  }
  configureMotor(A2, I2, g2, C2) {
    this.rawSet.jointConfigureMotor(this.handle, this.rawAxis(), A2, I2, g2, C2);
  }
}
class TA extends rA {
}
class nA extends rA {
}
class OA extends rA {
}
class ZA extends dA {
  rawAxis() {
    return Y.X;
  }
}
class bA extends dA {
  rawAxis() {
    return Y.AngX;
  }
}
class WA extends rA {
}
class xA extends rA {
}
class mA {
  constructor() {
  }
  static fixed(A2, I2, g2, C2) {
    let B2 = new mA();
    return B2.anchor1 = A2, B2.anchor2 = g2, B2.frame1 = I2, B2.frame2 = C2, B2.jointType = UA.Fixed, B2;
  }
  static spring(A2, I2, g2, C2, B2) {
    let Q2 = new mA();
    return Q2.anchor1 = C2, Q2.anchor2 = B2, Q2.length = A2, Q2.stiffness = I2, Q2.damping = g2, Q2.jointType = UA.Spring, Q2;
  }
  static rope(A2, I2, g2) {
    let C2 = new mA();
    return C2.anchor1 = I2, C2.anchor2 = g2, C2.length = A2, C2.jointType = UA.Rope, C2;
  }
  static generic(A2, I2, g2, C2) {
    let B2 = new mA();
    return B2.anchor1 = A2, B2.anchor2 = I2, B2.axis = g2, B2.axesMask = C2, B2.jointType = UA.Generic, B2;
  }
  static spherical(A2, I2) {
    let g2 = new mA();
    return g2.anchor1 = A2, g2.anchor2 = I2, g2.jointType = UA.Spherical, g2;
  }
  static prismatic(A2, I2, g2) {
    let C2 = new mA();
    return C2.anchor1 = A2, C2.anchor2 = I2, C2.axis = g2, C2.jointType = UA.Prismatic, C2;
  }
  static revolute(A2, I2, g2) {
    let C2 = new mA();
    return C2.anchor1 = A2, C2.anchor2 = I2, C2.axis = g2, C2.jointType = UA.Revolute, C2;
  }
  intoRaw() {
    let A2, I2, g2 = wA.intoRaw(this.anchor1), C2 = wA.intoRaw(this.anchor2), B2 = false, Q2 = 0, E2 = 0;
    switch (this.jointType) {
      case UA.Fixed:
        let i2 = kA.intoRaw(this.frame1), D2 = kA.intoRaw(this.frame2);
        I2 = b.fixed(g2, i2, C2, D2), i2.free(), D2.free();
        break;
      case UA.Spring:
        I2 = b.spring(this.length, this.stiffness, this.damping, g2, C2);
        break;
      case UA.Rope:
        I2 = b.rope(this.length, g2, C2);
        break;
      case UA.Prismatic:
        A2 = wA.intoRaw(this.axis), this.limitsEnabled && (B2 = true, Q2 = this.limits[0], E2 = this.limits[1]), I2 = b.prismatic(g2, C2, A2, B2, Q2, E2), A2.free();
        break;
      case UA.Generic:
        A2 = wA.intoRaw(this.axis);
        let o2 = this.axesMask;
        I2 = b.generic(g2, C2, A2, o2);
        break;
      case UA.Spherical:
        I2 = b.spherical(g2, C2);
        break;
      case UA.Revolute:
        A2 = wA.intoRaw(this.axis), I2 = b.revolute(g2, C2, A2), A2.free();
    }
    return g2.free(), C2.free(), I2;
  }
}
class jA {
  constructor(A2) {
    this.raw = A2 || new W(), this.map = new tA(), A2 && A2.forEachJointHandle((I2) => {
      this.map.set(I2, rA.newTyped(A2, null, I2));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createJoint(A2, I2, g2, C2, B2) {
    const Q2 = I2.intoRaw(), E2 = this.raw.createJoint(Q2, g2, C2, B2);
    Q2.free();
    let i2 = rA.newTyped(this.raw, A2, E2);
    return this.map.set(E2, i2), i2;
  }
  remove(A2, I2) {
    this.raw.remove(A2, I2), this.unmap(A2);
  }
  forEachJointHandleAttachedToRigidBody(A2, I2) {
    this.raw.forEachJointAttachedToRigidBody(A2, I2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  getAll() {
    return this.map.getAll();
  }
}
class fA {
  constructor(A2, I2) {
    this.rawSet = A2, this.handle = I2;
  }
  static newTyped(A2, I2) {
    switch (A2.jointType(I2)) {
      case H.Revolute:
        return new uA(A2, I2);
      case H.Prismatic:
        return new PA(A2, I2);
      case H.Fixed:
        return new VA(A2, I2);
      case H.Spherical:
        return new zA(A2, I2);
      default:
        return new fA(A2, I2);
    }
  }
  isValid() {
    return this.rawSet.contains(this.handle);
  }
  setContactsEnabled(A2) {
    this.rawSet.jointSetContactsEnabled(this.handle, A2);
  }
  contactsEnabled() {
    return this.rawSet.jointContactsEnabled(this.handle);
  }
}
class XA extends fA {
}
class VA extends fA {
}
class PA extends XA {
  rawAxis() {
    return Y.X;
  }
}
class uA extends XA {
  rawAxis() {
    return Y.AngX;
  }
}
class zA extends fA {
}
class vA {
  constructor(A2) {
    this.raw = A2 || new f(), this.map = new tA(), A2 && A2.forEachJointHandle((A3) => {
      this.map.set(A3, fA.newTyped(this.raw, A3));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  createJoint(A2, I2, g2, C2) {
    const B2 = A2.intoRaw(), Q2 = this.raw.createJoint(B2, I2, g2, C2);
    B2.free();
    let E2 = fA.newTyped(this.raw, Q2);
    return this.map.set(Q2, E2), E2;
  }
  remove(A2, I2) {
    this.raw.remove(A2, I2), this.map.delete(A2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  get(A2) {
    return this.map.get(A2);
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  forEachJointHandleAttachedToRigidBody(A2, I2) {
    this.raw.forEachJointAttachedToRigidBody(A2, I2);
  }
  getAll() {
    return this.map.getAll();
  }
}
!function(A2) {
  A2[A2.Average = 0] = "Average", A2[A2.Min = 1] = "Min", A2[A2.Multiply = 2] = "Multiply", A2[A2.Max = 3] = "Max";
}(yA || (yA = {}));
class _A {
  constructor(A2) {
    this.raw = A2 || new L();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
}
class $A {
  constructor(A2) {
    this.raw = A2 || new m();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  forEachActiveRigidBodyHandle(A2) {
    this.raw.forEachActiveRigidBodyHandle(A2);
  }
}
class AI {
  constructor(A2) {
    this.raw = A2 || new l();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
}
class II {
  constructor(A2) {
    this.raw = A2 || new X(), this.tempManifold = new gI(null);
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  contactPairsWith(A2, I2) {
    this.raw.contact_pairs_with(A2, I2);
  }
  intersectionPairsWith(A2, I2) {
    this.raw.intersection_pairs_with(A2, I2);
  }
  contactPair(A2, I2, g2) {
    const C2 = this.raw.contact_pair(A2, I2);
    if (C2) {
      const I3 = C2.collider1() != A2;
      let B2;
      for (B2 = 0; B2 < C2.numContactManifolds(); ++B2)
        this.tempManifold.raw = C2.contactManifold(B2), this.tempManifold.raw && g2(this.tempManifold, I3), this.tempManifold.free();
      C2.free();
    }
  }
  intersectionPair(A2, I2) {
    return this.raw.intersection_pair(A2, I2);
  }
}
class gI {
  constructor(A2) {
    this.raw = A2;
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  normal() {
    return wA.fromRaw(this.raw.normal());
  }
  localNormal1() {
    return wA.fromRaw(this.raw.local_n1());
  }
  localNormal2() {
    return wA.fromRaw(this.raw.local_n2());
  }
  subshape1() {
    return this.raw.subshape1();
  }
  subshape2() {
    return this.raw.subshape2();
  }
  numContacts() {
    return this.raw.num_contacts();
  }
  localContactPoint1(A2) {
    return wA.fromRaw(this.raw.contact_local_p1(A2));
  }
  localContactPoint2(A2) {
    return wA.fromRaw(this.raw.contact_local_p2(A2));
  }
  contactDist(A2) {
    return this.raw.contact_dist(A2);
  }
  contactFid1(A2) {
    return this.raw.contact_fid1(A2);
  }
  contactFid2(A2) {
    return this.raw.contact_fid2(A2);
  }
  contactImpulse(A2) {
    return this.raw.contact_impulse(A2);
  }
  contactTangentImpulseX(A2) {
    return this.raw.contact_tangent_impulse_x(A2);
  }
  contactTangentImpulseY(A2) {
    return this.raw.contact_tangent_impulse_y(A2);
  }
  numSolverContacts() {
    return this.raw.num_solver_contacts();
  }
  solverContactPoint(A2) {
    return wA.fromRaw(this.raw.solver_contact_point(A2));
  }
  solverContactDist(A2) {
    return this.raw.solver_contact_dist(A2);
  }
  solverContactFriction(A2) {
    return this.raw.solver_contact_friction(A2);
  }
  solverContactRestitution(A2) {
    return this.raw.solver_contact_restitution(A2);
  }
  solverContactTangentVelocity(A2) {
    return wA.fromRaw(this.raw.solver_contact_tangent_velocity(A2));
  }
}
class CI {
  constructor(A2, I2, g2, C2, B2) {
    this.distance = A2, this.point1 = I2, this.point2 = g2, this.normal1 = C2, this.normal2 = B2;
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new CI(A2.distance(), wA.fromRaw(A2.point1()), wA.fromRaw(A2.point2()), wA.fromRaw(A2.normal1()), wA.fromRaw(A2.normal2()));
    return A2.free(), I2;
  }
}
!function(A2) {
  A2[A2.Vertex = 0] = "Vertex", A2[A2.Edge = 1] = "Edge", A2[A2.Face = 2] = "Face", A2[A2.Unknown = 3] = "Unknown";
}(MA || (MA = {}));
class BI {
  constructor(A2, I2) {
    this.point = A2, this.isInside = I2;
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new BI(wA.fromRaw(A2.point()), A2.isInside());
    return A2.free(), I2;
  }
}
class QI {
  constructor(A2, I2, g2, C2, B2) {
    this.featureType = MA.Unknown, this.featureId = void 0, this.collider = A2, this.point = I2, this.isInside = g2, B2 !== void 0 && (this.featureId = B2), C2 !== void 0 && (this.featureType = C2);
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new QI(A2.get(I2.colliderHandle()), wA.fromRaw(I2.point()), I2.isInside(), I2.featureType(), I2.featureId());
    return I2.free(), g2;
  }
}
class EI {
  constructor(A2, I2) {
    this.origin = A2, this.dir = I2;
  }
  pointAt(A2) {
    return {x: this.origin.x + this.dir.x * A2, y: this.origin.y + this.dir.y * A2, z: this.origin.z + this.dir.z * A2};
  }
}
class iI {
  constructor(A2, I2, g2, C2) {
    this.featureType = MA.Unknown, this.featureId = void 0, this.toi = A2, this.normal = I2, C2 !== void 0 && (this.featureId = C2), g2 !== void 0 && (this.featureType = g2);
  }
  static fromRaw(A2) {
    if (!A2)
      return null;
    const I2 = new iI(A2.toi(), wA.fromRaw(A2.normal()), A2.featureType(), A2.featureId());
    return A2.free(), I2;
  }
}
class DI {
  constructor(A2, I2, g2, C2, B2) {
    this.featureType = MA.Unknown, this.featureId = void 0, this.collider = A2, this.toi = I2, this.normal = g2, B2 !== void 0 && (this.featureId = B2), C2 !== void 0 && (this.featureType = C2);
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new DI(A2.get(I2.colliderHandle()), I2.toi(), wA.fromRaw(I2.normal()), I2.featureType(), I2.featureId());
    return I2.free(), g2;
  }
}
class oI {
  constructor(A2, I2) {
    this.collider = A2, this.toi = I2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new oI(A2.get(I2.colliderHandle()), I2.toi());
    return I2.free(), g2;
  }
}
class GI {
  constructor(A2, I2, g2, C2, B2) {
    this.toi = A2, this.witness1 = I2, this.witness2 = g2, this.normal1 = C2, this.normal2 = B2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new GI(I2.toi(), wA.fromRaw(I2.witness1()), wA.fromRaw(I2.witness2()), wA.fromRaw(I2.normal1()), wA.fromRaw(I2.normal2()));
    return I2.free(), g2;
  }
}
class wI extends GI {
  constructor(A2, I2, g2, C2, B2, Q2) {
    super(I2, g2, C2, B2, Q2), this.collider = A2;
  }
  static fromRaw(A2, I2) {
    if (!I2)
      return null;
    const g2 = new wI(A2.get(I2.colliderHandle()), I2.toi(), wA.fromRaw(I2.witness1()), wA.fromRaw(I2.witness2()), wA.fromRaw(I2.normal1()), wA.fromRaw(I2.normal2()));
    return I2.free(), g2;
  }
}
class SI {
  static fromRaw(A2, I2) {
    const g2 = A2.coShapeType(I2);
    let C2, B2, Q2, E2, i2, D2, o2;
    switch (g2) {
      case c.Ball:
        return new kI(A2.coRadius(I2));
      case c.Cuboid:
        return C2 = A2.coHalfExtents(I2), new hI(C2.x, C2.y, C2.z);
      case c.RoundCuboid:
        return C2 = A2.coHalfExtents(I2), B2 = A2.coRoundRadius(I2), new KI(C2.x, C2.y, C2.z, B2);
      case c.Capsule:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new UI(i2, D2);
      case c.Segment:
        return Q2 = A2.coVertices(I2), new JI(wA.new(Q2[0], Q2[1], Q2[2]), wA.new(Q2[3], Q2[4], Q2[5]));
      case c.Polyline:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new MI(Q2, E2);
      case c.Triangle:
        return Q2 = A2.coVertices(I2), new NI(wA.new(Q2[0], Q2[1], Q2[2]), wA.new(Q2[3], Q2[4], Q2[5]), wA.new(Q2[6], Q2[7], Q2[8]));
      case c.RoundTriangle:
        return Q2 = A2.coVertices(I2), B2 = A2.coRoundRadius(I2), new yI(wA.new(Q2[0], Q2[1], Q2[2]), wA.new(Q2[3], Q2[4], Q2[5]), wA.new(Q2[6], Q2[7], Q2[8]), B2);
      case c.HalfSpace:
        return o2 = wA.fromRaw(A2.coHalfspaceNormal(I2)), new aI(o2);
      case c.TriMesh:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new FI(Q2, E2);
      case c.HeightField:
        const G2 = A2.coHeightfieldScale(I2), w2 = A2.coHeightfieldHeights(I2), S2 = A2.coHeightfieldNRows(I2), k2 = A2.coHeightfieldNCols(I2);
        return new sI(S2, k2, w2, G2);
      case c.ConvexPolyhedron:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), new qI(Q2, E2);
      case c.RoundConvexPolyhedron:
        return Q2 = A2.coVertices(I2), E2 = A2.coIndices(I2), B2 = A2.coRoundRadius(I2), new RI(Q2, E2, B2);
      case c.Cylinder:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new cI(i2, D2);
      case c.RoundCylinder:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), B2 = A2.coRoundRadius(I2), new YI(i2, D2, B2);
      case c.Cone:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), new HI(i2, D2);
      case c.RoundCone:
        return i2 = A2.coHalfHeight(I2), D2 = A2.coRadius(I2), B2 = A2.coRoundRadius(I2), new lI(i2, D2, B2);
      default:
        throw new Error("unknown shape type: " + g2);
    }
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = wA.intoRaw(A2), G2 = kA.intoRaw(I2), w2 = wA.intoRaw(g2), S2 = wA.intoRaw(B2), k2 = kA.intoRaw(Q2), a2 = wA.intoRaw(E2), h2 = this.intoRaw(), K2 = C2.intoRaw(), U2 = GI.fromRaw(null, h2.castShape(o2, G2, w2, K2, S2, k2, a2, i2, D2));
    return o2.free(), G2.free(), w2.free(), S2.free(), k2.free(), a2.free(), h2.free(), K2.free(), U2;
  }
  intersectsShape(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(A2), E2 = kA.intoRaw(I2), i2 = wA.intoRaw(C2), D2 = kA.intoRaw(B2), o2 = this.intoRaw(), G2 = g2.intoRaw(), w2 = o2.intersectsShape(Q2, E2, G2, i2, D2);
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2.free(), w2;
  }
  contactShape(A2, I2, g2, C2, B2, Q2) {
    let E2 = wA.intoRaw(A2), i2 = kA.intoRaw(I2), D2 = wA.intoRaw(C2), o2 = kA.intoRaw(B2), G2 = this.intoRaw(), w2 = g2.intoRaw(), S2 = CI.fromRaw(G2.contactShape(E2, i2, w2, D2, o2, Q2));
    return E2.free(), i2.free(), D2.free(), o2.free(), G2.free(), w2.free(), S2;
  }
  containsPoint(A2, I2, g2) {
    let C2 = wA.intoRaw(A2), B2 = kA.intoRaw(I2), Q2 = wA.intoRaw(g2), E2 = this.intoRaw(), i2 = E2.containsPoint(C2, B2, Q2);
    return C2.free(), B2.free(), Q2.free(), E2.free(), i2;
  }
  projectPoint(A2, I2, g2, C2) {
    let B2 = wA.intoRaw(A2), Q2 = kA.intoRaw(I2), E2 = wA.intoRaw(g2), i2 = this.intoRaw(), D2 = BI.fromRaw(i2.projectPoint(B2, Q2, E2, C2));
    return B2.free(), Q2.free(), E2.free(), i2.free(), D2;
  }
  intersectsRay(A2, I2, g2, C2) {
    let B2 = wA.intoRaw(I2), Q2 = kA.intoRaw(g2), E2 = wA.intoRaw(A2.origin), i2 = wA.intoRaw(A2.dir), D2 = this.intoRaw(), o2 = D2.intersectsRay(B2, Q2, E2, i2, C2);
    return B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2;
  }
  castRay(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(I2), E2 = kA.intoRaw(g2), i2 = wA.intoRaw(A2.origin), D2 = wA.intoRaw(A2.dir), o2 = this.intoRaw(), G2 = o2.castRay(Q2, E2, i2, D2, C2, B2);
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2;
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(I2), E2 = kA.intoRaw(g2), i2 = wA.intoRaw(A2.origin), D2 = wA.intoRaw(A2.dir), o2 = this.intoRaw(), G2 = iI.fromRaw(o2.castRayAndGetNormal(Q2, E2, i2, D2, C2, B2));
    return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), G2;
  }
}
!function(A2) {
  A2[A2.Ball = 0] = "Ball", A2[A2.Cuboid = 1] = "Cuboid", A2[A2.Capsule = 2] = "Capsule", A2[A2.Segment = 3] = "Segment", A2[A2.Polyline = 4] = "Polyline", A2[A2.Triangle = 5] = "Triangle", A2[A2.TriMesh = 6] = "TriMesh", A2[A2.HeightField = 7] = "HeightField", A2[A2.ConvexPolyhedron = 9] = "ConvexPolyhedron", A2[A2.Cylinder = 10] = "Cylinder", A2[A2.Cone = 11] = "Cone", A2[A2.RoundCuboid = 12] = "RoundCuboid", A2[A2.RoundTriangle = 13] = "RoundTriangle", A2[A2.RoundCylinder = 14] = "RoundCylinder", A2[A2.RoundCone = 15] = "RoundCone", A2[A2.RoundConvexPolyhedron = 16] = "RoundConvexPolyhedron", A2[A2.HalfSpace = 17] = "HalfSpace";
}(FA || (FA = {}));
class kI extends SI {
  constructor(A2) {
    super(), this.type = FA.Ball, this.radius = A2;
  }
  intoRaw() {
    return BA.ball(this.radius);
  }
}
class aI extends SI {
  constructor(A2) {
    super(), this.type = FA.HalfSpace, this.normal = A2;
  }
  intoRaw() {
    let A2 = wA.intoRaw(this.normal), I2 = BA.halfspace(A2);
    return A2.free(), I2;
  }
}
class hI extends SI {
  constructor(A2, I2, g2) {
    super(), this.type = FA.Cuboid, this.halfExtents = wA.new(A2, I2, g2);
  }
  intoRaw() {
    return BA.cuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z);
  }
}
class KI extends SI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = FA.RoundCuboid, this.halfExtents = wA.new(A2, I2, g2), this.borderRadius = C2;
  }
  intoRaw() {
    return BA.roundCuboid(this.halfExtents.x, this.halfExtents.y, this.halfExtents.z, this.borderRadius);
  }
}
class UI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.Capsule, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return BA.capsule(this.halfHeight, this.radius);
  }
}
class JI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.Segment, this.a = A2, this.b = I2;
  }
  intoRaw() {
    let A2 = wA.intoRaw(this.a), I2 = wA.intoRaw(this.b), g2 = BA.segment(A2, I2);
    return A2.free(), I2.free(), g2;
  }
}
class NI extends SI {
  constructor(A2, I2, g2) {
    super(), this.type = FA.Triangle, this.a = A2, this.b = I2, this.c = g2;
  }
  intoRaw() {
    let A2 = wA.intoRaw(this.a), I2 = wA.intoRaw(this.b), g2 = wA.intoRaw(this.c), C2 = BA.triangle(A2, I2, g2);
    return A2.free(), I2.free(), g2.free(), C2;
  }
}
class yI extends SI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = FA.RoundTriangle, this.a = A2, this.b = I2, this.c = g2, this.borderRadius = C2;
  }
  intoRaw() {
    let A2 = wA.intoRaw(this.a), I2 = wA.intoRaw(this.b), g2 = wA.intoRaw(this.c), C2 = BA.roundTriangle(A2, I2, g2, this.borderRadius);
    return A2.free(), I2.free(), g2.free(), C2;
  }
}
class MI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.Polyline, this.vertices = A2, this.indices = I2 != null ? I2 : new Uint32Array(0);
  }
  intoRaw() {
    return BA.polyline(this.vertices, this.indices);
  }
}
class FI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.TriMesh, this.vertices = A2, this.indices = I2;
  }
  intoRaw() {
    return BA.trimesh(this.vertices, this.indices);
  }
}
class qI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.ConvexPolyhedron, this.vertices = A2, this.indices = I2;
  }
  intoRaw() {
    return this.indices ? BA.convexMesh(this.vertices, this.indices) : BA.convexHull(this.vertices);
  }
}
class RI extends SI {
  constructor(A2, I2, g2) {
    super(), this.type = FA.RoundConvexPolyhedron, this.vertices = A2, this.indices = I2, this.borderRadius = g2;
  }
  intoRaw() {
    return this.indices ? BA.roundConvexMesh(this.vertices, this.indices, this.borderRadius) : BA.roundConvexHull(this.vertices, this.borderRadius);
  }
}
class sI extends SI {
  constructor(A2, I2, g2, C2) {
    super(), this.type = FA.HeightField, this.nrows = A2, this.ncols = I2, this.heights = g2, this.scale = C2;
  }
  intoRaw() {
    let A2 = wA.intoRaw(this.scale), I2 = BA.heightfield(this.nrows, this.ncols, this.heights, A2);
    return A2.free(), I2;
  }
}
class cI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.Cylinder, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return BA.cylinder(this.halfHeight, this.radius);
  }
}
class YI extends SI {
  constructor(A2, I2, g2) {
    super(), this.type = FA.RoundCylinder, this.borderRadius = g2, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return BA.roundCylinder(this.halfHeight, this.radius, this.borderRadius);
  }
}
class HI extends SI {
  constructor(A2, I2) {
    super(), this.type = FA.Cone, this.halfHeight = A2, this.radius = I2;
  }
  intoRaw() {
    return BA.cone(this.halfHeight, this.radius);
  }
}
class lI extends SI {
  constructor(A2, I2, g2) {
    super(), this.type = FA.RoundCone, this.halfHeight = A2, this.radius = I2, this.borderRadius = g2;
  }
  intoRaw() {
    return BA.roundCone(this.halfHeight, this.radius, this.borderRadius);
  }
}
class LI {
  constructor(A2) {
    this.raw = A2 || new V();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  step(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2) {
    let S2 = wA.intoRaw(A2);
    G2 ? this.raw.stepWithEvents(S2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw, o2.raw, G2.raw, w2, w2 ? w2.filterContactPair : null, w2 ? w2.filterIntersectionPair : null) : this.raw.step(S2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw, o2.raw), S2.free();
  }
}
!function(A2) {
  A2[A2.EXCLUDE_FIXED = 1] = "EXCLUDE_FIXED", A2[A2.EXCLUDE_KINEMATIC = 2] = "EXCLUDE_KINEMATIC", A2[A2.EXCLUDE_DYNAMIC = 4] = "EXCLUDE_DYNAMIC", A2[A2.EXCLUDE_SENSORS = 8] = "EXCLUDE_SENSORS", A2[A2.EXCLUDE_SOLIDS = 16] = "EXCLUDE_SOLIDS", A2[A2.ONLY_DYNAMIC = 3] = "ONLY_DYNAMIC", A2[A2.ONLY_KINEMATIC = 5] = "ONLY_KINEMATIC", A2[A2.ONLY_FIXED = 6] = "ONLY_FIXED";
}(qA || (qA = {}));
class tI {
  constructor(A2) {
    this.raw = A2 || new z();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  update(A2, I2) {
    this.raw.update(A2.raw, I2.raw);
  }
  castRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = wA.intoRaw(g2.origin), w2 = wA.intoRaw(g2.dir), S2 = oI.fromRaw(I2, this.raw.castRay(A2.raw, I2.raw, G2, w2, C2, B2, Q2, E2, i2, D2, o2));
    return G2.free(), w2.free(), S2;
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = wA.intoRaw(g2.origin), w2 = wA.intoRaw(g2.dir), S2 = DI.fromRaw(I2, this.raw.castRayAndGetNormal(A2.raw, I2.raw, G2, w2, C2, B2, Q2, E2, i2, D2, o2));
    return G2.free(), w2.free(), S2;
  }
  intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    let w2 = wA.intoRaw(g2.origin), S2 = wA.intoRaw(g2.dir);
    this.raw.intersectionsWithRay(A2.raw, I2.raw, w2, S2, C2, B2, (A3) => Q2(DI.fromRaw(I2, A3)), E2, i2, D2, o2, G2), w2.free(), S2.free();
  }
  intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
    let G2 = wA.intoRaw(g2), w2 = kA.intoRaw(C2), S2 = B2.intoRaw(), k2 = this.raw.intersectionWithShape(A2.raw, I2.raw, G2, w2, S2, Q2, E2, i2, D2, o2);
    return G2.free(), w2.free(), S2.free(), k2;
  }
  projectPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = wA.intoRaw(g2), G2 = QI.fromRaw(I2, this.raw.projectPoint(A2.raw, I2.raw, o2, C2, B2, Q2, E2, i2, D2));
    return o2.free(), G2;
  }
  projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2, E2, i2) {
    let D2 = wA.intoRaw(g2), o2 = QI.fromRaw(I2, this.raw.projectPointAndGetFeature(A2.raw, I2.raw, D2, C2, B2, Q2, E2, i2));
    return D2.free(), o2;
  }
  intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = wA.intoRaw(g2);
    this.raw.intersectionsWithPoint(A2.raw, I2.raw, o2, C2, B2, Q2, E2, i2, D2), o2.free();
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, S2) {
    let k2 = wA.intoRaw(g2), a2 = kA.intoRaw(C2), h2 = wA.intoRaw(B2), K2 = Q2.intoRaw(), U2 = wI.fromRaw(I2, this.raw.castShape(A2.raw, I2.raw, k2, a2, h2, K2, E2, i2, D2, o2, G2, w2, S2));
    return k2.free(), a2.free(), h2.free(), K2.free(), U2;
  }
  intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    let w2 = wA.intoRaw(g2), S2 = kA.intoRaw(C2), k2 = B2.intoRaw();
    this.raw.intersectionsWithShape(A2.raw, I2.raw, w2, S2, k2, Q2, E2, i2, D2, o2, G2), w2.free(), S2.free(), k2.free();
  }
  collidersWithAabbIntersectingAabb(A2, I2, g2) {
    let C2 = wA.intoRaw(A2), B2 = wA.intoRaw(I2);
    this.raw.collidersWithAabbIntersectingAabb(C2, B2, g2), C2.free(), B2.free();
  }
}
class pI {
  constructor(A2) {
    this.raw = A2 || new CA();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  serializeAll(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    let o2 = wA.intoRaw(A2);
    const G2 = this.raw.serializeAll(o2, I2.raw, g2.raw, C2.raw, B2.raw, Q2.raw, E2.raw, i2.raw, D2.raw);
    return o2.free(), G2;
  }
  deserializeAll(A2) {
    return OI.fromRaw(this.raw.deserializeAll(A2));
  }
}
class eI {
  constructor(A2, I2) {
    this.vertices = A2, this.colors = I2;
  }
}
class rI {
  constructor(A2) {
    this.raw = A2 || new T();
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.vertices = void 0, this.colors = void 0;
  }
  render(A2, I2, g2, C2, B2) {
    this.raw.render(A2.raw, I2.raw, g2.raw, C2.raw, B2.raw), this.vertices = this.raw.vertices(), this.colors = this.raw.colors();
  }
}
class dI {
}
class TI {
  constructor(A2, I2, g2, C2, B2) {
    this.params = I2, this.bodies = g2, this.colliders = C2, this.queries = B2, this.raw = new j(A2), this.rawCharacterCollision = new t(), this._applyImpulsesToDynamicBodies = false, this._characterMass = null;
  }
  free() {
    this.raw && (this.raw.free(), this.rawCharacterCollision.free()), this.raw = void 0, this.rawCharacterCollision = void 0;
  }
  up() {
    return this.raw.up();
  }
  setUp(A2) {
    let I2 = wA.intoRaw(A2);
    return this.raw.setUp(I2);
  }
  applyImpulsesToDynamicBodies() {
    return this._applyImpulsesToDynamicBodies;
  }
  setApplyImpulsesToDynamicBodies(A2) {
    this._applyImpulsesToDynamicBodies = A2;
  }
  characterMass() {
    return this._characterMass;
  }
  setCharacterMass(A2) {
    this._characterMass = A2;
  }
  offset() {
    return this.raw.offset();
  }
  setOffset(A2) {
    this.raw.setOffset(A2);
  }
  slideEnabled() {
    return this.raw.slideEnabled();
  }
  setSlideEnabled(A2) {
    this.raw.setSlideEnabled(A2);
  }
  autostepMaxHeight() {
    return this.raw.autostepMaxHeight();
  }
  autostepMinWidth() {
    return this.raw.autostepMinWidth();
  }
  autostepIncludesDynamicBodies() {
    return this.raw.autostepIncludesDynamicBodies();
  }
  autostepEnabled() {
    return this.raw.autostepEnabled();
  }
  enableAutostep(A2, I2, g2) {
    this.raw.enableAutostep(A2, I2, g2);
  }
  disableAutostep() {
    return this.raw.disableAutostep();
  }
  maxSlopeClimbAngle() {
    return this.raw.maxSlopeClimbAngle();
  }
  setMaxSlopeClimbAngle(A2) {
    this.raw.setMaxSlopeClimbAngle(A2);
  }
  minSlopeSlideAngle() {
    return this.raw.minSlopeSlideAngle();
  }
  setMinSlopeSlideAngle(A2) {
    this.raw.setMinSlopeSlideAngle(A2);
  }
  snapToGroundDistance() {
    return this.raw.snapToGroundDistance();
  }
  enableSnapToGround(A2) {
    this.raw.enableSnapToGround(A2);
  }
  disableSnapToGround() {
    this.raw.disableSnapToGround();
  }
  snapToGroundEnabled() {
    return this.raw.snapToGroundEnabled();
  }
  computeColliderMovement(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(I2);
    this.raw.computeColliderMovement(this.params.dt, this.bodies.raw, this.colliders.raw, this.queries.raw, A2.handle, Q2, this._applyImpulsesToDynamicBodies, this._characterMass, g2, C2, this.colliders.castClosure(B2)), Q2.free();
  }
  computedMovement() {
    return wA.fromRaw(this.raw.computedMovement());
  }
  computedGrounded() {
    return this.raw.computedGrounded();
  }
  numComputedCollisions() {
    return this.raw.numComputedCollisions();
  }
  computedCollision(A2, I2) {
    if (this.raw.computedCollision(A2, this.rawCharacterCollision)) {
      let A3 = this.rawCharacterCollision;
      return (I2 = I2 != null ? I2 : new dI()).translationDeltaApplied = wA.fromRaw(A3.translationDeltaApplied()), I2.translationDeltaRemaining = wA.fromRaw(A3.translationDeltaRemaining()), I2.toi = A3.toi(), I2.witness1 = wA.fromRaw(A3.worldWitness1()), I2.witness2 = wA.fromRaw(A3.worldWitness2()), I2.normal1 = wA.fromRaw(A3.worldNormal1()), I2.normal2 = wA.fromRaw(A3.worldNormal2()), I2.collider = this.colliders.get(A3.handle()), I2;
    }
    return null;
  }
}
class nI {
  constructor(A2, I2, g2, C2) {
    this.raw = new O(A2.handle), this.bodies = I2, this.colliders = g2, this.queries = C2, this._chassis = A2;
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  updateVehicle(A2, I2, g2, C2) {
    this.raw.update_vehicle(A2, this.bodies.raw, this.colliders.raw, this.queries.raw, I2, g2, this.colliders.castClosure(C2));
  }
  currentVehicleSpeed() {
    return this.raw.current_vehicle_speed();
  }
  chassis() {
    return this._chassis;
  }
  get indexUpAxis() {
    return this.raw.index_up_axis();
  }
  set indexUpAxis(A2) {
    this.raw.set_index_up_axis(A2);
  }
  get indexForwardAxis() {
    return this.raw.index_forward_axis();
  }
  set setIndexForwardAxis(A2) {
    this.raw.set_index_forward_axis(A2);
  }
  addWheel(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(A2), E2 = wA.intoRaw(I2), i2 = wA.intoRaw(g2);
    this.raw.add_wheel(Q2, E2, i2, C2, B2), Q2.free(), E2.free(), i2.free();
  }
  numWheels() {
    return this.raw.num_wheels();
  }
  wheelChassisConnectionPointCs(A2) {
    return wA.fromRaw(this.raw.wheel_chassis_connection_point_cs(A2));
  }
  setWheelChassisConnectionPointCs(A2, I2) {
    let g2 = wA.intoRaw(I2);
    this.raw.set_wheel_chassis_connection_point_cs(A2, g2), g2.free();
  }
  wheelSuspensionRestLength(A2) {
    return this.raw.wheel_suspension_rest_length(A2);
  }
  setWheelSuspensionRestLength(A2, I2) {
    this.raw.set_wheel_suspension_rest_length(A2, I2);
  }
  wheelMaxSuspensionTravel(A2) {
    return this.raw.wheel_max_suspension_travel(A2);
  }
  setWheelMaxSuspensionTravel(A2, I2) {
    this.raw.set_wheel_max_suspension_travel(A2, I2);
  }
  wheelRadius(A2) {
    return this.raw.wheel_radius(A2);
  }
  setWheelRadius(A2, I2) {
    this.raw.set_wheel_radius(A2, I2);
  }
  wheelSuspensionStiffness(A2) {
    return this.raw.wheel_suspension_stiffness(A2);
  }
  setWheelSuspensionStiffness(A2, I2) {
    this.raw.set_wheel_suspension_stiffness(A2, I2);
  }
  wheelSuspensionCompression(A2) {
    return this.raw.wheel_suspension_compression(A2);
  }
  setWheelSuspensionCompression(A2, I2) {
    this.raw.set_wheel_suspension_compression(A2, I2);
  }
  wheelSuspensionRelaxation(A2) {
    return this.raw.wheel_suspension_relaxation(A2);
  }
  setWheelSuspensionRelaxation(A2, I2) {
    this.raw.set_wheel_suspension_relaxation(A2, I2);
  }
  wheelMaxSuspensionForce(A2) {
    return this.raw.wheel_max_suspension_force(A2);
  }
  setWheelMaxSuspensionForce(A2, I2) {
    this.raw.set_wheel_max_suspension_force(A2, I2);
  }
  wheelBrake(A2) {
    return this.raw.wheel_brake(A2);
  }
  setWheelBrake(A2, I2) {
    this.raw.set_wheel_brake(A2, I2);
  }
  wheelSteering(A2) {
    return this.raw.wheel_steering(A2);
  }
  setWheelSteering(A2, I2) {
    this.raw.set_wheel_steering(A2, I2);
  }
  wheelEngineForce(A2) {
    return this.raw.wheel_engine_force(A2);
  }
  setWheelEngineForce(A2, I2) {
    this.raw.set_wheel_engine_force(A2, I2);
  }
  wheelDirectionCs(A2) {
    return wA.fromRaw(this.raw.wheel_direction_cs(A2));
  }
  setWheelDirectionCs(A2, I2) {
    let g2 = wA.intoRaw(I2);
    this.raw.set_wheel_direction_cs(A2, g2), g2.free();
  }
  wheelAxleCs(A2) {
    return wA.fromRaw(this.raw.wheel_axle_cs(A2));
  }
  setWheelAxleCs(A2, I2) {
    let g2 = wA.intoRaw(I2);
    this.raw.set_wheel_axle_cs(A2, g2), g2.free();
  }
  wheelFrictionSlip(A2) {
    return this.raw.wheel_friction_slip(A2);
  }
  setWheelFrictionSlip(A2, I2) {
    this.raw.set_wheel_friction_slip(A2, I2);
  }
  wheelSideFrictionStiffness(A2) {
    return this.raw.wheel_side_friction_stiffness(A2);
  }
  setWheelSideFrictionStiffness(A2, I2) {
    this.raw.set_wheel_side_friction_stiffness(A2, I2);
  }
  wheelRotation(A2) {
    return this.raw.wheel_rotation(A2);
  }
  wheelForwardImpulse(A2) {
    return this.raw.wheel_forward_impulse(A2);
  }
  wheelSideImpulse(A2) {
    return this.raw.wheel_side_impulse(A2);
  }
  wheelSuspensionForce(A2) {
    return this.raw.wheel_suspension_force(A2);
  }
  wheelContactNormal(A2) {
    return wA.fromRaw(this.raw.wheel_contact_normal_ws(A2));
  }
  wheelContactPoint(A2) {
    return wA.fromRaw(this.raw.wheel_contact_point_ws(A2));
  }
  wheelSuspensionLength(A2) {
    return this.raw.wheel_suspension_length(A2);
  }
  wheelHardPoint(A2) {
    return wA.fromRaw(this.raw.wheel_hard_point_ws(A2));
  }
  wheelIsInContact(A2) {
    return this.raw.wheel_is_in_contact(A2);
  }
  wheelGroundObject(A2) {
    return this.colliders.get(this.raw.wheel_ground_object(A2));
  }
}
class OI {
  constructor(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2, w2, S2, k2) {
    this.gravity = A2, this.integrationParameters = new eA(I2), this.islands = new $A(g2), this.broadPhase = new AI(C2), this.narrowPhase = new II(B2), this.bodies = new pA(Q2), this.colliders = new mI(E2), this.impulseJoints = new jA(i2), this.multibodyJoints = new vA(D2), this.ccdSolver = new _A(o2), this.queryPipeline = new tI(G2), this.physicsPipeline = new LI(w2), this.serializationPipeline = new pI(S2), this.debugRenderPipeline = new rI(k2), this.characterControllers = new Set(), this.vehicleControllers = new Set(), this.impulseJoints.finalizeDeserialization(this.bodies), this.bodies.finalizeDeserialization(this.colliders), this.colliders.finalizeDeserialization(this.bodies);
  }
  free() {
    this.integrationParameters.free(), this.islands.free(), this.broadPhase.free(), this.narrowPhase.free(), this.bodies.free(), this.colliders.free(), this.impulseJoints.free(), this.multibodyJoints.free(), this.ccdSolver.free(), this.queryPipeline.free(), this.physicsPipeline.free(), this.serializationPipeline.free(), this.debugRenderPipeline.free(), this.characterControllers.forEach((A2) => A2.free()), this.vehicleControllers.forEach((A2) => A2.free()), this.integrationParameters = void 0, this.islands = void 0, this.broadPhase = void 0, this.narrowPhase = void 0, this.bodies = void 0, this.colliders = void 0, this.ccdSolver = void 0, this.impulseJoints = void 0, this.multibodyJoints = void 0, this.queryPipeline = void 0, this.physicsPipeline = void 0, this.serializationPipeline = void 0, this.debugRenderPipeline = void 0, this.characterControllers = void 0, this.vehicleControllers = void 0;
  }
  static fromRaw(A2) {
    return A2 ? new OI(wA.fromRaw(A2.takeGravity()), A2.takeIntegrationParameters(), A2.takeIslandManager(), A2.takeBroadPhase(), A2.takeNarrowPhase(), A2.takeBodies(), A2.takeColliders(), A2.takeImpulseJoints(), A2.takeMultibodyJoints()) : null;
  }
  takeSnapshot() {
    return this.serializationPipeline.serializeAll(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  static restoreSnapshot(A2) {
    return new pI().deserializeAll(A2);
  }
  debugRender() {
    return this.debugRenderPipeline.render(this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.narrowPhase), new eI(this.debugRenderPipeline.vertices, this.debugRenderPipeline.colors);
  }
  step(A2, I2) {
    this.physicsPipeline.step(this.gravity, this.integrationParameters, this.islands, this.broadPhase, this.narrowPhase, this.bodies, this.colliders, this.impulseJoints, this.multibodyJoints, this.ccdSolver, A2, I2), this.queryPipeline.update(this.bodies, this.colliders);
  }
  propagateModifiedBodyPositionsToColliders() {
    this.bodies.raw.propagateModifiedBodyPositionsToColliders(this.colliders.raw);
  }
  updateSceneQueries() {
    this.propagateModifiedBodyPositionsToColliders(), this.queryPipeline.update(this.bodies, this.colliders);
  }
  get timestep() {
    return this.integrationParameters.dt;
  }
  set timestep(A2) {
    this.integrationParameters.dt = A2;
  }
  get numSolverIterations() {
    return this.integrationParameters.numSolverIterations;
  }
  set numSolverIterations(A2) {
    this.integrationParameters.numSolverIterations = A2;
  }
  get numAdditionalFrictionIterations() {
    return this.integrationParameters.numAdditionalFrictionIterations;
  }
  set numAdditionalFrictionIterations(A2) {
    this.integrationParameters.numAdditionalFrictionIterations = A2;
  }
  get numInternalPgsIterations() {
    return this.integrationParameters.numInternalPgsIterations;
  }
  set numInternalPgsIterations(A2) {
    this.integrationParameters.numInternalPgsIterations = A2;
  }
  switchToStandardPgsSolver() {
    this.integrationParameters.switchToStandardPgsSolver();
  }
  switchToSmallStepsPgsSolver() {
    this.integrationParameters.switchToSmallStepsPgsSolver();
  }
  createRigidBody(A2) {
    return this.bodies.createRigidBody(this.colliders, A2);
  }
  createCharacterController(A2) {
    let I2 = new TI(A2, this.integrationParameters, this.bodies, this.colliders, this.queryPipeline);
    return this.characterControllers.add(I2), I2;
  }
  removeCharacterController(A2) {
    this.characterControllers.delete(A2), A2.free();
  }
  createVehicleController(A2) {
    let I2 = new nI(A2, this.bodies, this.colliders, this.queryPipeline);
    return this.vehicleControllers.add(I2), I2;
  }
  removeVehicleController(A2) {
    this.vehicleControllers.delete(A2), A2.free();
  }
  createCollider(A2, I2) {
    let g2 = I2 ? I2.handle : void 0;
    return this.colliders.createCollider(this.bodies, A2, g2);
  }
  createImpulseJoint(A2, I2, g2, C2) {
    return this.impulseJoints.createJoint(this.bodies, A2, I2.handle, g2.handle, C2);
  }
  createMultibodyJoint(A2, I2, g2, C2) {
    return this.multibodyJoints.createJoint(A2, I2.handle, g2.handle, C2);
  }
  getRigidBody(A2) {
    return this.bodies.get(A2);
  }
  getCollider(A2) {
    return this.colliders.get(A2);
  }
  getImpulseJoint(A2) {
    return this.impulseJoints.get(A2);
  }
  getMultibodyJoint(A2) {
    return this.multibodyJoints.get(A2);
  }
  removeRigidBody(A2) {
    this.bodies && this.bodies.remove(A2.handle, this.islands, this.colliders, this.impulseJoints, this.multibodyJoints);
  }
  removeCollider(A2, I2) {
    this.colliders && this.colliders.remove(A2.handle, this.islands, this.bodies, I2);
  }
  removeImpulseJoint(A2, I2) {
    this.impulseJoints && this.impulseJoints.remove(A2.handle, I2);
  }
  removeMultibodyJoint(A2, I2) {
    this.impulseJoints && this.multibodyJoints.remove(A2.handle, I2);
  }
  forEachCollider(A2) {
    this.colliders.forEach(A2);
  }
  forEachRigidBody(A2) {
    this.bodies.forEach(A2);
  }
  forEachActiveRigidBody(A2) {
    this.bodies.forEachActiveRigidBody(this.islands, A2);
  }
  castRay(A2, I2, g2, C2, B2, Q2, E2, i2) {
    return this.queryPipeline.castRay(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
  }
  castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2) {
    return this.queryPipeline.castRayAndGetNormal(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
  }
  intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    this.queryPipeline.intersectionsWithRay(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2, E2 ? E2.handle : null, i2 ? i2.handle : null, this.colliders.castClosure(D2));
  }
  intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2) {
    let D2 = this.queryPipeline.intersectionWithShape(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2 ? Q2.handle : null, E2 ? E2.handle : null, this.colliders.castClosure(i2));
    return D2 != null ? this.colliders.get(D2) : null;
  }
  projectPoint(A2, I2, g2, C2, B2, Q2, E2) {
    return this.queryPipeline.projectPoint(this.bodies, this.colliders, A2, I2, g2, C2, B2 ? B2.handle : null, Q2 ? Q2.handle : null, this.colliders.castClosure(E2));
  }
  projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2) {
    return this.queryPipeline.projectPointAndGetFeature(this.bodies, this.colliders, A2, I2, g2, C2 ? C2.handle : null, B2 ? B2.handle : null, this.colliders.castClosure(Q2));
  }
  intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2) {
    this.queryPipeline.intersectionsWithPoint(this.bodies, this.colliders, A2, this.colliders.castClosure(I2), g2, C2, B2 ? B2.handle : null, Q2 ? Q2.handle : null, this.colliders.castClosure(E2));
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, G2) {
    return this.queryPipeline.castShape(this.bodies, this.colliders, A2, I2, g2, C2, B2, Q2, E2, i2, D2 ? D2.handle : null, o2 ? o2.handle : null, this.colliders.castClosure(G2));
  }
  intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
    this.queryPipeline.intersectionsWithShape(this.bodies, this.colliders, A2, I2, g2, this.colliders.castClosure(C2), B2, Q2, E2 ? E2.handle : null, i2 ? i2.handle : null, this.colliders.castClosure(D2));
  }
  collidersWithAabbIntersectingAabb(A2, I2, g2) {
    this.queryPipeline.collidersWithAabbIntersectingAabb(A2, I2, this.colliders.castClosure(g2));
  }
  contactPairsWith(A2, I2) {
    this.narrowPhase.contactPairsWith(A2.handle, this.colliders.castClosure(I2));
  }
  intersectionPairsWith(A2, I2) {
    this.narrowPhase.intersectionPairsWith(A2.handle, this.colliders.castClosure(I2));
  }
  contactPair(A2, I2, g2) {
    this.narrowPhase.contactPair(A2.handle, I2.handle, g2);
  }
  intersectionPair(A2, I2) {
    return this.narrowPhase.intersectionPair(A2.handle, I2.handle);
  }
}
!function(A2) {
  A2[A2.NONE = 0] = "NONE", A2[A2.COLLISION_EVENTS = 1] = "COLLISION_EVENTS", A2[A2.CONTACT_FORCE_EVENTS = 2] = "CONTACT_FORCE_EVENTS";
}(RA || (RA = {}));
class ZI {
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  collider1() {
    return this.raw.collider1();
  }
  collider2() {
    return this.raw.collider2();
  }
  totalForce() {
    return wA.fromRaw(this.raw.total_force());
  }
  totalForceMagnitude() {
    return this.raw.total_force_magnitude();
  }
  maxForceDirection() {
    return wA.fromRaw(this.raw.max_force_direction());
  }
  maxForceMagnitude() {
    return this.raw.max_force_magnitude();
  }
}
class bI {
  constructor(A2, I2) {
    this.raw = I2 || new Z(A2);
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0;
  }
  drainCollisionEvents(A2) {
    this.raw.drainCollisionEvents(A2);
  }
  drainContactForceEvents(A2) {
    let I2 = new ZI();
    this.raw.drainContactForceEvents((g2) => {
      I2.raw = g2, A2(I2), I2.free();
    });
  }
  clear() {
    this.raw.clear();
  }
}
!function(A2) {
  A2[A2.NONE = 0] = "NONE", A2[A2.FILTER_CONTACT_PAIRS = 1] = "FILTER_CONTACT_PAIRS", A2[A2.FILTER_INTERSECTION_PAIRS = 2] = "FILTER_INTERSECTION_PAIRS";
}(sA || (sA = {})), function(A2) {
  A2[A2.EMPTY = 0] = "EMPTY", A2[A2.COMPUTE_IMPULSE = 1] = "COMPUTE_IMPULSE";
}(cA || (cA = {})), function(A2) {
  A2[A2.DYNAMIC_DYNAMIC = 1] = "DYNAMIC_DYNAMIC", A2[A2.DYNAMIC_KINEMATIC = 12] = "DYNAMIC_KINEMATIC", A2[A2.DYNAMIC_FIXED = 2] = "DYNAMIC_FIXED", A2[A2.KINEMATIC_KINEMATIC = 52224] = "KINEMATIC_KINEMATIC", A2[A2.KINEMATIC_FIXED = 8704] = "KINEMATIC_FIXED", A2[A2.FIXED_FIXED = 32] = "FIXED_FIXED", A2[A2.DEFAULT = 15] = "DEFAULT", A2[A2.ALL = 60943] = "ALL";
}(YA || (YA = {}));
class WI {
  constructor(A2, I2, g2, C2) {
    this.colliderSet = A2, this.handle = I2, this._parent = g2, this._shape = C2;
  }
  finalizeDeserialization(A2) {
    this.handle != null && (this._parent = A2.get(this.colliderSet.raw.coParent(this.handle)));
  }
  ensureShapeIsCached() {
    this._shape || (this._shape = SI.fromRaw(this.colliderSet.raw, this.handle));
  }
  get shape() {
    return this.ensureShapeIsCached(), this._shape;
  }
  isValid() {
    return this.colliderSet.raw.contains(this.handle);
  }
  translation() {
    return wA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
  }
  rotation() {
    return kA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
  }
  isSensor() {
    return this.colliderSet.raw.coIsSensor(this.handle);
  }
  setSensor(A2) {
    this.colliderSet.raw.coSetSensor(this.handle, A2);
  }
  setShape(A2) {
    let I2 = A2.intoRaw();
    this.colliderSet.raw.coSetShape(this.handle, I2), I2.free(), this._shape = A2;
  }
  setEnabled(A2) {
    this.colliderSet.raw.coSetEnabled(this.handle, A2);
  }
  isEnabled() {
    return this.colliderSet.raw.coIsEnabled(this.handle);
  }
  setRestitution(A2) {
    this.colliderSet.raw.coSetRestitution(this.handle, A2);
  }
  setFriction(A2) {
    this.colliderSet.raw.coSetFriction(this.handle, A2);
  }
  frictionCombineRule() {
    return this.colliderSet.raw.coFrictionCombineRule(this.handle);
  }
  setFrictionCombineRule(A2) {
    this.colliderSet.raw.coSetFrictionCombineRule(this.handle, A2);
  }
  restitutionCombineRule() {
    return this.colliderSet.raw.coRestitutionCombineRule(this.handle);
  }
  setRestitutionCombineRule(A2) {
    this.colliderSet.raw.coSetRestitutionCombineRule(this.handle, A2);
  }
  setCollisionGroups(A2) {
    this.colliderSet.raw.coSetCollisionGroups(this.handle, A2);
  }
  setSolverGroups(A2) {
    this.colliderSet.raw.coSetSolverGroups(this.handle, A2);
  }
  activeHooks() {
    return this.colliderSet.raw.coActiveHooks(this.handle);
  }
  setActiveHooks(A2) {
    this.colliderSet.raw.coSetActiveHooks(this.handle, A2);
  }
  activeEvents() {
    return this.colliderSet.raw.coActiveEvents(this.handle);
  }
  setActiveEvents(A2) {
    this.colliderSet.raw.coSetActiveEvents(this.handle, A2);
  }
  activeCollisionTypes() {
    return this.colliderSet.raw.coActiveCollisionTypes(this.handle);
  }
  setContactForceEventThreshold(A2) {
    return this.colliderSet.raw.coSetContactForceEventThreshold(this.handle, A2);
  }
  contactForceEventThreshold() {
    return this.colliderSet.raw.coContactForceEventThreshold(this.handle);
  }
  setActiveCollisionTypes(A2) {
    this.colliderSet.raw.coSetActiveCollisionTypes(this.handle, A2);
  }
  setDensity(A2) {
    this.colliderSet.raw.coSetDensity(this.handle, A2);
  }
  setMass(A2) {
    this.colliderSet.raw.coSetMass(this.handle, A2);
  }
  setMassProperties(A2, I2, g2, C2) {
    let B2 = wA.intoRaw(I2), Q2 = wA.intoRaw(g2), E2 = kA.intoRaw(C2);
    this.colliderSet.raw.coSetMassProperties(this.handle, A2, B2, Q2, E2), B2.free(), Q2.free(), E2.free();
  }
  setTranslation(A2) {
    this.colliderSet.raw.coSetTranslation(this.handle, A2.x, A2.y, A2.z);
  }
  setTranslationWrtParent(A2) {
    this.colliderSet.raw.coSetTranslationWrtParent(this.handle, A2.x, A2.y, A2.z);
  }
  setRotation(A2) {
    this.colliderSet.raw.coSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  setRotationWrtParent(A2) {
    this.colliderSet.raw.coSetRotationWrtParent(this.handle, A2.x, A2.y, A2.z, A2.w);
  }
  shapeType() {
    return this.colliderSet.raw.coShapeType(this.handle);
  }
  halfExtents() {
    return wA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
  }
  setHalfExtents(A2) {
    const I2 = wA.intoRaw(A2);
    this.colliderSet.raw.coSetHalfExtents(this.handle, I2);
  }
  radius() {
    return this.colliderSet.raw.coRadius(this.handle);
  }
  setRadius(A2) {
    this.colliderSet.raw.coSetRadius(this.handle, A2);
  }
  roundRadius() {
    return this.colliderSet.raw.coRoundRadius(this.handle);
  }
  setRoundRadius(A2) {
    this.colliderSet.raw.coSetRoundRadius(this.handle, A2);
  }
  halfHeight() {
    return this.colliderSet.raw.coHalfHeight(this.handle);
  }
  setHalfHeight(A2) {
    this.colliderSet.raw.coSetHalfHeight(this.handle, A2);
  }
  vertices() {
    return this.colliderSet.raw.coVertices(this.handle);
  }
  indices() {
    return this.colliderSet.raw.coIndices(this.handle);
  }
  heightfieldHeights() {
    return this.colliderSet.raw.coHeightfieldHeights(this.handle);
  }
  heightfieldScale() {
    let A2 = this.colliderSet.raw.coHeightfieldScale(this.handle);
    return wA.fromRaw(A2);
  }
  heightfieldNRows() {
    return this.colliderSet.raw.coHeightfieldNRows(this.handle);
  }
  heightfieldNCols() {
    return this.colliderSet.raw.coHeightfieldNCols(this.handle);
  }
  parent() {
    return this._parent;
  }
  friction() {
    return this.colliderSet.raw.coFriction(this.handle);
  }
  restitution() {
    return this.colliderSet.raw.coRestitution(this.handle);
  }
  density() {
    return this.colliderSet.raw.coDensity(this.handle);
  }
  mass() {
    return this.colliderSet.raw.coMass(this.handle);
  }
  volume() {
    return this.colliderSet.raw.coVolume(this.handle);
  }
  collisionGroups() {
    return this.colliderSet.raw.coCollisionGroups(this.handle);
  }
  solverGroups() {
    return this.colliderSet.raw.coSolverGroups(this.handle);
  }
  containsPoint(A2) {
    let I2 = wA.intoRaw(A2), g2 = this.colliderSet.raw.coContainsPoint(this.handle, I2);
    return I2.free(), g2;
  }
  projectPoint(A2, I2) {
    let g2 = wA.intoRaw(A2), C2 = BI.fromRaw(this.colliderSet.raw.coProjectPoint(this.handle, g2, I2));
    return g2.free(), C2;
  }
  intersectsRay(A2, I2) {
    let g2 = wA.intoRaw(A2.origin), C2 = wA.intoRaw(A2.dir), B2 = this.colliderSet.raw.coIntersectsRay(this.handle, g2, C2, I2);
    return g2.free(), C2.free(), B2;
  }
  castShape(A2, I2, g2, C2, B2, Q2, E2) {
    let i2 = wA.intoRaw(A2), D2 = wA.intoRaw(g2), o2 = kA.intoRaw(C2), G2 = wA.intoRaw(B2), w2 = I2.intoRaw(), S2 = GI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastShape(this.handle, i2, w2, D2, o2, G2, Q2, E2));
    return i2.free(), D2.free(), o2.free(), G2.free(), w2.free(), S2;
  }
  castCollider(A2, I2, g2, C2, B2) {
    let Q2 = wA.intoRaw(A2), E2 = wA.intoRaw(g2), i2 = wI.fromRaw(this.colliderSet, this.colliderSet.raw.coCastCollider(this.handle, Q2, I2.handle, E2, C2, B2));
    return Q2.free(), E2.free(), i2;
  }
  intersectsShape(A2, I2, g2) {
    let C2 = wA.intoRaw(I2), B2 = kA.intoRaw(g2), Q2 = A2.intoRaw(), E2 = this.colliderSet.raw.coIntersectsShape(this.handle, Q2, C2, B2);
    return C2.free(), B2.free(), Q2.free(), E2;
  }
  contactShape(A2, I2, g2, C2) {
    let B2 = wA.intoRaw(I2), Q2 = kA.intoRaw(g2), E2 = A2.intoRaw(), i2 = CI.fromRaw(this.colliderSet.raw.coContactShape(this.handle, E2, B2, Q2, C2));
    return B2.free(), Q2.free(), E2.free(), i2;
  }
  contactCollider(A2, I2) {
    return CI.fromRaw(this.colliderSet.raw.coContactCollider(this.handle, A2.handle, I2));
  }
  castRay(A2, I2, g2) {
    let C2 = wA.intoRaw(A2.origin), B2 = wA.intoRaw(A2.dir), Q2 = this.colliderSet.raw.coCastRay(this.handle, C2, B2, I2, g2);
    return C2.free(), B2.free(), Q2;
  }
  castRayAndGetNormal(A2, I2, g2) {
    let C2 = wA.intoRaw(A2.origin), B2 = wA.intoRaw(A2.dir), Q2 = iI.fromRaw(this.colliderSet.raw.coCastRayAndGetNormal(this.handle, C2, B2, I2, g2));
    return C2.free(), B2.free(), Q2;
  }
}
!function(A2) {
  A2[A2.Density = 0] = "Density", A2[A2.Mass = 1] = "Mass", A2[A2.MassProps = 2] = "MassProps";
}(HA || (HA = {}));
class xI {
  constructor(A2) {
    this.enabled = true, this.shape = A2, this.massPropsMode = HA.Density, this.density = 1, this.friction = 0.5, this.restitution = 0, this.rotation = kA.identity(), this.translation = wA.zeros(), this.isSensor = false, this.collisionGroups = 4294967295, this.solverGroups = 4294967295, this.frictionCombineRule = yA.Average, this.restitutionCombineRule = yA.Average, this.activeCollisionTypes = YA.DEFAULT, this.activeEvents = RA.NONE, this.activeHooks = sA.NONE, this.mass = 0, this.centerOfMass = wA.zeros(), this.contactForceEventThreshold = 0, this.principalAngularInertia = wA.zeros(), this.angularInertiaLocalFrame = kA.identity();
  }
  static ball(A2) {
    const I2 = new kI(A2);
    return new xI(I2);
  }
  static capsule(A2, I2) {
    const g2 = new UI(A2, I2);
    return new xI(g2);
  }
  static segment(A2, I2) {
    const g2 = new JI(A2, I2);
    return new xI(g2);
  }
  static triangle(A2, I2, g2) {
    const C2 = new NI(A2, I2, g2);
    return new xI(C2);
  }
  static roundTriangle(A2, I2, g2, C2) {
    const B2 = new yI(A2, I2, g2, C2);
    return new xI(B2);
  }
  static polyline(A2, I2) {
    const g2 = new MI(A2, I2);
    return new xI(g2);
  }
  static trimesh(A2, I2) {
    const g2 = new FI(A2, I2);
    return new xI(g2);
  }
  static cuboid(A2, I2, g2) {
    const C2 = new hI(A2, I2, g2);
    return new xI(C2);
  }
  static roundCuboid(A2, I2, g2, C2) {
    const B2 = new KI(A2, I2, g2, C2);
    return new xI(B2);
  }
  static heightfield(A2, I2, g2, C2) {
    const B2 = new sI(A2, I2, g2, C2);
    return new xI(B2);
  }
  static cylinder(A2, I2) {
    const g2 = new cI(A2, I2);
    return new xI(g2);
  }
  static roundCylinder(A2, I2, g2) {
    const C2 = new YI(A2, I2, g2);
    return new xI(C2);
  }
  static cone(A2, I2) {
    const g2 = new HI(A2, I2);
    return new xI(g2);
  }
  static roundCone(A2, I2, g2) {
    const C2 = new lI(A2, I2, g2);
    return new xI(C2);
  }
  static convexHull(A2) {
    const I2 = new qI(A2, null);
    return new xI(I2);
  }
  static convexMesh(A2, I2) {
    const g2 = new qI(A2, I2);
    return new xI(g2);
  }
  static roundConvexHull(A2, I2) {
    const g2 = new RI(A2, null, I2);
    return new xI(g2);
  }
  static roundConvexMesh(A2, I2, g2) {
    const C2 = new RI(A2, I2, g2);
    return new xI(C2);
  }
  setTranslation(A2, I2, g2) {
    if (typeof A2 != "number" || typeof I2 != "number" || typeof g2 != "number")
      throw TypeError("The translation components must be numbers.");
    return this.translation = {x: A2, y: I2, z: g2}, this;
  }
  setRotation(A2) {
    return kA.copy(this.rotation, A2), this;
  }
  setSensor(A2) {
    return this.isSensor = A2, this;
  }
  setEnabled(A2) {
    return this.enabled = A2, this;
  }
  setDensity(A2) {
    return this.massPropsMode = HA.Density, this.density = A2, this;
  }
  setMass(A2) {
    return this.massPropsMode = HA.Mass, this.mass = A2, this;
  }
  setMassProperties(A2, I2, g2, C2) {
    return this.massPropsMode = HA.MassProps, this.mass = A2, wA.copy(this.centerOfMass, I2), wA.copy(this.principalAngularInertia, g2), kA.copy(this.angularInertiaLocalFrame, C2), this;
  }
  setRestitution(A2) {
    return this.restitution = A2, this;
  }
  setFriction(A2) {
    return this.friction = A2, this;
  }
  setFrictionCombineRule(A2) {
    return this.frictionCombineRule = A2, this;
  }
  setRestitutionCombineRule(A2) {
    return this.restitutionCombineRule = A2, this;
  }
  setCollisionGroups(A2) {
    return this.collisionGroups = A2, this;
  }
  setSolverGroups(A2) {
    return this.solverGroups = A2, this;
  }
  setActiveHooks(A2) {
    return this.activeHooks = A2, this;
  }
  setActiveEvents(A2) {
    return this.activeEvents = A2, this;
  }
  setActiveCollisionTypes(A2) {
    return this.activeCollisionTypes = A2, this;
  }
  setContactForceEventThreshold(A2) {
    return this.contactForceEventThreshold = A2, this;
  }
}
class mI {
  constructor(A2) {
    this.raw = A2 || new p(), this.map = new tA(), A2 && A2.forEachColliderHandle((A3) => {
      this.map.set(A3, new WI(this, A3, null));
    });
  }
  free() {
    this.raw && this.raw.free(), this.raw = void 0, this.map && this.map.clear(), this.map = void 0;
  }
  castClosure(A2) {
    return (I2) => A2 ? A2(this.get(I2)) : void 0;
  }
  finalizeDeserialization(A2) {
    this.map.forEach((I2) => I2.finalizeDeserialization(A2));
  }
  createCollider(A2, I2, g2) {
    let C2 = g2 != null && g2 != null;
    if (C2 && isNaN(g2))
      throw Error("Cannot create a collider with a parent rigid-body handle that is not a number.");
    let B2 = I2.shape.intoRaw(), Q2 = wA.intoRaw(I2.translation), E2 = kA.intoRaw(I2.rotation), i2 = wA.intoRaw(I2.centerOfMass), D2 = wA.intoRaw(I2.principalAngularInertia), o2 = kA.intoRaw(I2.angularInertiaLocalFrame), G2 = this.raw.createCollider(I2.enabled, B2, Q2, E2, I2.massPropsMode, I2.mass, i2, D2, o2, I2.density, I2.friction, I2.restitution, I2.frictionCombineRule, I2.restitutionCombineRule, I2.isSensor, I2.collisionGroups, I2.solverGroups, I2.activeCollisionTypes, I2.activeHooks, I2.activeEvents, I2.contactForceEventThreshold, C2, C2 ? g2 : 0, A2.raw);
    B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2.free();
    let w2 = C2 ? A2.get(g2) : null, S2 = new WI(this, G2, w2, I2.shape);
    return this.map.set(G2, S2), S2;
  }
  remove(A2, I2, g2, C2) {
    this.raw.remove(A2, I2.raw, g2.raw, C2), this.unmap(A2);
  }
  unmap(A2) {
    this.map.delete(A2);
  }
  get(A2) {
    return this.map.get(A2);
  }
  len() {
    return this.map.len();
  }
  contains(A2) {
    return this.get(A2) != null;
  }
  forEach(A2) {
    this.map.forEach(A2);
  }
  getAll() {
    return this.map.getAll();
  }
}
function jI(A2, I2, g2, C2) {
  return new (g2 || (g2 = Promise))(function(B2, Q2) {
    function E2(A3) {
      try {
        D2(C2.next(A3));
      } catch (A4) {
        Q2(A4);
      }
    }
    function i2(A3) {
      try {
        D2(C2.throw(A3));
      } catch (A4) {
        Q2(A4);
      }
    }
    function D2(A3) {
      var I3;
      A3.done ? B2(A3.value) : (I3 = A3.value, I3 instanceof g2 ? I3 : new g2(function(A4) {
        A4(I3);
      })).then(E2, i2);
    }
    D2((C2 = C2.apply(A2, I2 || [])).next());
  });
}
for (var fI = {byteLength: function(A2) {
  var I2 = _I(A2), g2 = I2[0], C2 = I2[1];
  return 3 * (g2 + C2) / 4 - C2;
}, toByteArray: function(A2) {
  var I2, g2, C2 = _I(A2), B2 = C2[0], Q2 = C2[1], E2 = new PI(function(A3, I3, g3) {
    return 3 * (I3 + g3) / 4 - g3;
  }(0, B2, Q2)), i2 = 0, D2 = Q2 > 0 ? B2 - 4 : B2;
  for (g2 = 0; g2 < D2; g2 += 4)
    I2 = VI[A2.charCodeAt(g2)] << 18 | VI[A2.charCodeAt(g2 + 1)] << 12 | VI[A2.charCodeAt(g2 + 2)] << 6 | VI[A2.charCodeAt(g2 + 3)], E2[i2++] = I2 >> 16 & 255, E2[i2++] = I2 >> 8 & 255, E2[i2++] = 255 & I2;
  Q2 === 2 && (I2 = VI[A2.charCodeAt(g2)] << 2 | VI[A2.charCodeAt(g2 + 1)] >> 4, E2[i2++] = 255 & I2);
  Q2 === 1 && (I2 = VI[A2.charCodeAt(g2)] << 10 | VI[A2.charCodeAt(g2 + 1)] << 4 | VI[A2.charCodeAt(g2 + 2)] >> 2, E2[i2++] = I2 >> 8 & 255, E2[i2++] = 255 & I2);
  return E2;
}, fromByteArray: function(A2) {
  for (var I2, g2 = A2.length, C2 = g2 % 3, B2 = [], Q2 = 16383, E2 = 0, i2 = g2 - C2; E2 < i2; E2 += Q2)
    B2.push($I(A2, E2, E2 + Q2 > i2 ? i2 : E2 + Q2));
  C2 === 1 ? (I2 = A2[g2 - 1], B2.push(XI[I2 >> 2] + XI[I2 << 4 & 63] + "==")) : C2 === 2 && (I2 = (A2[g2 - 2] << 8) + A2[g2 - 1], B2.push(XI[I2 >> 10] + XI[I2 >> 4 & 63] + XI[I2 << 2 & 63] + "="));
  return B2.join("");
}}, XI = [], VI = [], PI = typeof Uint8Array != "undefined" ? Uint8Array : Array, uI = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zI = 0, vI = uI.length; zI < vI; ++zI)
  XI[zI] = uI[zI], VI[uI.charCodeAt(zI)] = zI;
function _I(A2) {
  var I2 = A2.length;
  if (I2 % 4 > 0)
    throw new Error("Invalid string. Length must be a multiple of 4");
  var g2 = A2.indexOf("=");
  return g2 === -1 && (g2 = I2), [g2, g2 === I2 ? 0 : 4 - g2 % 4];
}
function $I(A2, I2, g2) {
  for (var C2, B2, Q2 = [], E2 = I2; E2 < g2; E2 += 3)
    C2 = (A2[E2] << 16 & 16711680) + (A2[E2 + 1] << 8 & 65280) + (255 & A2[E2 + 2]), Q2.push(XI[(B2 = C2) >> 18 & 63] + XI[B2 >> 12 & 63] + XI[B2 >> 6 & 63] + XI[63 & B2]);
  return Q2.join("");
}
function Ag() {
  return jI(this, void 0, void 0, function* () {
  });
}
function Ig() {
  return function() {
    let I2, g2;
    try {
      const Q2 = A.__wbindgen_add_to_stack_pointer(-16);
      A.version(Q2);
      var C2 = G()[Q2 / 4 + 0], B2 = G()[Q2 / 4 + 1];
      return I2 = C2, g2 = B2, k(C2, B2);
    } finally {
      A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_free(I2, g2, 1);
    }
  }();
}
VI["-".charCodeAt(0)] = 62, VI["_".charCodeAt(0)] = 63;
var gg = Object.freeze({__proto__: null, version: Ig, Vector3: GA, VectorOps: wA, Quaternion: SA, RotationOps: kA, SdpMatrix3: aA, SdpMatrix3Ops: hA, get RigidBodyType() {
  return KA;
}, RigidBody: lA, RigidBodyDesc: LA, RigidBodySet: pA, IntegrationParameters: eA, get JointType() {
  return UA;
}, get MotorModel() {
  return JA;
}, get JointAxesMask() {
  return NA;
}, ImpulseJoint: rA, UnitImpulseJoint: dA, FixedImpulseJoint: TA, RopeImpulseJoint: nA, SpringImpulseJoint: OA, PrismaticImpulseJoint: ZA, RevoluteImpulseJoint: bA, GenericImpulseJoint: WA, SphericalImpulseJoint: xA, JointData: mA, ImpulseJointSet: jA, MultibodyJoint: fA, UnitMultibodyJoint: XA, FixedMultibodyJoint: VA, PrismaticMultibodyJoint: PA, RevoluteMultibodyJoint: uA, SphericalMultibodyJoint: zA, MultibodyJointSet: vA, get CoefficientCombineRule() {
  return yA;
}, CCDSolver: _A, IslandManager: $A, BroadPhase: AI, NarrowPhase: II, TempContactManifold: gI, Shape: SI, get ShapeType() {
  return FA;
}, Ball: kI, HalfSpace: aI, Cuboid: hI, RoundCuboid: KI, Capsule: UI, Segment: JI, Triangle: NI, RoundTriangle: yI, Polyline: MI, TriMesh: FI, ConvexPolyhedron: qI, RoundConvexPolyhedron: RI, Heightfield: sI, Cylinder: cI, RoundCylinder: YI, Cone: HI, RoundCone: lI, get ActiveCollisionTypes() {
  return YA;
}, Collider: WI, get MassPropsMode() {
  return HA;
}, ColliderDesc: xI, ColliderSet: mI, get FeatureType() {
  return MA;
}, Ray: EI, RayIntersection: iI, RayColliderIntersection: DI, RayColliderToi: oI, PointProjection: BI, PointColliderProjection: QI, ShapeTOI: GI, ShapeColliderTOI: wI, ShapeContact: CI, World: OI, PhysicsPipeline: LI, SerializationPipeline: pI, get ActiveEvents() {
  return RA;
}, TempContactForceEvent: ZI, EventQueue: bI, get ActiveHooks() {
  return sA;
}, get SolverFlags() {
  return cA;
}, DebugRenderBuffers: eI, DebugRenderPipeline: rI, get QueryFilterFlags() {
  return qA;
}, QueryPipeline: tI, init: Ag, CharacterCollision: dI, KinematicCharacterController: TI, DynamicRayCastVehicleController: nI});
export default gg;
export {YA as ActiveCollisionTypes, RA as ActiveEvents, sA as ActiveHooks, kI as Ball, AI as BroadPhase, _A as CCDSolver, UI as Capsule, dI as CharacterCollision, yA as CoefficientCombineRule, WI as Collider, xI as ColliderDesc, mI as ColliderSet, HI as Cone, qI as ConvexPolyhedron, hI as Cuboid, cI as Cylinder, eI as DebugRenderBuffers, rI as DebugRenderPipeline, nI as DynamicRayCastVehicleController, bI as EventQueue, MA as FeatureType, TA as FixedImpulseJoint, VA as FixedMultibodyJoint, WA as GenericImpulseJoint, aI as HalfSpace, sI as Heightfield, rA as ImpulseJoint, jA as ImpulseJointSet, eA as IntegrationParameters, $A as IslandManager, NA as JointAxesMask, mA as JointData, UA as JointType, TI as KinematicCharacterController, HA as MassPropsMode, JA as MotorModel, fA as MultibodyJoint, vA as MultibodyJointSet, II as NarrowPhase, LI as PhysicsPipeline, QI as PointColliderProjection, BI as PointProjection, MI as Polyline, ZA as PrismaticImpulseJoint, PA as PrismaticMultibodyJoint, SA as Quaternion, qA as QueryFilterFlags, tI as QueryPipeline, EI as Ray, DI as RayColliderIntersection, oI as RayColliderToi, iI as RayIntersection, bA as RevoluteImpulseJoint, uA as RevoluteMultibodyJoint, lA as RigidBody, LA as RigidBodyDesc, pA as RigidBodySet, KA as RigidBodyType, nA as RopeImpulseJoint, kA as RotationOps, lI as RoundCone, RI as RoundConvexPolyhedron, KI as RoundCuboid, YI as RoundCylinder, yI as RoundTriangle, aA as SdpMatrix3, hA as SdpMatrix3Ops, JI as Segment, pI as SerializationPipeline, SI as Shape, wI as ShapeColliderTOI, CI as ShapeContact, GI as ShapeTOI, FA as ShapeType, cA as SolverFlags, xA as SphericalImpulseJoint, zA as SphericalMultibodyJoint, OA as SpringImpulseJoint, ZI as TempContactForceEvent, gI as TempContactManifold, FI as TriMesh, NI as Triangle, dA as UnitImpulseJoint, XA as UnitMultibodyJoint, GA as Vector3, wA as VectorOps, OI as World, Ag as init, Ig as version};