// @ts-check
"use strict";

console.info("loading rapierWorker.js");

let A;
const I = new Array(128).fill(void 0);
I.push(void 0, null, true, false);
let g = I.length;
function C(A2) {
    g === I.length && I.push(I.length + 1);
    const C2 = g;
    return (g = I[C2]), (I[C2] = A2), C2;
}
function B(A2) {
    return I[A2];
}
function Q(A2) {
    const C2 = B(A2);
    return (
        (function (A3) {
            A3 < 132 || ((I[A3] = g), (g = A3));
        })(A2),
        C2
    );
}
function E(A2) {
    return A2 == null;
}
let i = null;
function D() {
    return (
        (i !== null && i.byteLength !== 0) ||
            (i = new Float64Array(A.memory.buffer)),
        i
    );
}
let o = null;
function S() {
    return (
        (o !== null && o.byteLength !== 0) ||
            (o = new Int32Array(A.memory.buffer)),
        o
    );
}
const w =
    typeof TextDecoder != "undefined"
        ? new TextDecoder("utf-8", { ignoreBOM: true, fatal: true })
        : {
              decode: () => {
                  throw Error("TextDecoder not available");
              },
          };
typeof TextDecoder != "undefined" && w.decode();
let G = null;
function k(I2, g2) {
    return (
        (I2 >>>= 0),
        w.decode(
            ((G !== null && G.byteLength !== 0) ||
                (G = new Uint8Array(A.memory.buffer)),
            G).subarray(I2, I2 + g2)
        )
    );
}
function K(A2, I2) {
    if (!(A2 instanceof I2)) throw new Error(`expected instance of ${I2.name}`);
    return A2.ptr;
}
let J = null;
function U() {
    return (
        (J !== null && J.byteLength !== 0) ||
            (J = new Float32Array(A.memory.buffer)),
        J
    );
}
let h = 128;
function y(A2) {
    if (h == 1) throw new Error("out of js stack");
    return (I[--h] = A2), h;
}
function N(A2, I2) {
    return (A2 >>>= 0), U().subarray(A2 / 4, A2 / 4 + I2);
}
let M = null;
function F() {
    return (
        (M !== null && M.byteLength !== 0) ||
            (M = new Uint32Array(A.memory.buffer)),
        M
    );
}
let a = 0;
function s(A2, I2) {
    const g2 = I2(4 * A2.length, 4) >>> 0;
    return U().set(A2, g2 / 4), (a = A2.length), g2;
}
function R(A2, I2) {
    const g2 = I2(4 * A2.length, 4) >>> 0;
    return F().set(A2, g2 / 4), (a = A2.length), g2;
}
function c(I2, g2) {
    try {
        return I2.apply(this, g2);
    } catch (I3) {
        A.__wbindgen_exn_store(C(I3));
    }
}
const q = Object.freeze({
    LinX: 0,
    0: "LinX",
    LinY: 1,
    1: "LinY",
    LinZ: 2,
    2: "LinZ",
    AngX: 3,
    3: "AngX",
    AngY: 4,
    4: "AngY",
    AngZ: 5,
    5: "AngZ",
});
Object.freeze({
    AccelerationBased: 0,
    0: "AccelerationBased",
    ForceBased: 1,
    1: "ForceBased",
}),
    Object.freeze({
        Dynamic: 0,
        0: "Dynamic",
        Fixed: 1,
        1: "Fixed",
        KinematicPositionBased: 2,
        2: "KinematicPositionBased",
        KinematicVelocityBased: 3,
        3: "KinematicVelocityBased",
    });
const Y = Object.freeze({
    Revolute: 0,
    0: "Revolute",
    Fixed: 1,
    1: "Fixed",
    Prismatic: 2,
    2: "Prismatic",
    Rope: 3,
    3: "Rope",
    Spring: 4,
    4: "Spring",
    Spherical: 5,
    5: "Spherical",
    Generic: 6,
    6: "Generic",
});
Object.freeze({
    Vertex: 0,
    0: "Vertex",
    Edge: 1,
    1: "Edge",
    Face: 2,
    2: "Face",
    Unknown: 3,
    3: "Unknown",
});
const l = Object.freeze({
        Ball: 0,
        0: "Ball",
        Cuboid: 1,
        1: "Cuboid",
        Capsule: 2,
        2: "Capsule",
        Segment: 3,
        3: "Segment",
        Polyline: 4,
        4: "Polyline",
        Triangle: 5,
        5: "Triangle",
        TriMesh: 6,
        6: "TriMesh",
        HeightField: 7,
        7: "HeightField",
        Compound: 8,
        8: "Compound",
        ConvexPolyhedron: 9,
        9: "ConvexPolyhedron",
        Cylinder: 10,
        10: "Cylinder",
        Cone: 11,
        11: "Cone",
        RoundCuboid: 12,
        12: "RoundCuboid",
        RoundTriangle: 13,
        13: "RoundTriangle",
        RoundCylinder: 14,
        14: "RoundCylinder",
        RoundCone: 15,
        15: "RoundCone",
        RoundConvexPolyhedron: 16,
        16: "RoundConvexPolyhedron",
        HalfSpace: 17,
        17: "HalfSpace",
    }),
    L =
        typeof FinalizationRegistry == "undefined"
            ? { register: () => {}, unregister: () => {} }
            : new FinalizationRegistry((I2) =>
                  A.__wbg_rawbroadphase_free(I2 >>> 0)
              );
class H {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(H.prototype);
        return (I2.__wbg_ptr = A2), L.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), L.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawbroadphase_free(I2);
    }
    constructor() {
        const I2 = A.rawbroadphase_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
}
const t =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) => A.__wbg_rawccdsolver_free(I2 >>> 0));
class p {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), t.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawccdsolver_free(I2);
    }
    constructor() {
        const I2 = A.rawccdsolver_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
}
const e =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawcharactercollision_free(I2 >>> 0)
          );
class r {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), e.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawcharactercollision_free(I2);
    }
    constructor() {
        const I2 = A.rawcharactercollision_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    handle() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    translationDeltaApplied() {
        const I2 = A.rawcharactercollision_translationDeltaApplied(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
    translationDeltaRemaining() {
        const I2 = A.rawcharactercollision_translationDeltaRemaining(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
    toi() {
        return A.rawcharactercollision_toi(this.__wbg_ptr);
    }
    worldWitness1() {
        const I2 = A.rawcharactercollision_worldWitness1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    worldWitness2() {
        const I2 = A.rawcharactercollision_worldWitness2(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    worldNormal1() {
        const I2 = A.rawcharactercollision_worldNormal1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    worldNormal2() {
        const I2 = A.rawcharactercollision_worldNormal2(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
}
const n =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawcolliderset_free(I2 >>> 0)
          );
class d {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(d.prototype);
        return (I2.__wbg_ptr = A2), n.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), n.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawcolliderset_free(I2);
    }
    coTranslation(I2) {
        const g2 = A.rawcolliderset_coTranslation(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    coRotation(I2) {
        const g2 = A.rawcolliderset_coRotation(this.__wbg_ptr, I2);
        return HA.__wrap(g2);
    }
    coSetTranslation(I2, g2, C2, B2) {
        A.rawcolliderset_coSetTranslation(this.__wbg_ptr, I2, g2, C2, B2);
    }
    coSetTranslationWrtParent(I2, g2, C2, B2) {
        A.rawcolliderset_coSetTranslationWrtParent(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2
        );
    }
    coSetRotation(I2, g2, C2, B2, Q2) {
        A.rawcolliderset_coSetRotation(this.__wbg_ptr, I2, g2, C2, B2, Q2);
    }
    coSetRotationWrtParent(I2, g2, C2, B2, Q2) {
        A.rawcolliderset_coSetRotationWrtParent(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2,
            Q2
        );
    }
    coIsSensor(I2) {
        return A.rawcolliderset_coIsSensor(this.__wbg_ptr, I2) !== 0;
    }
    coShapeType(I2) {
        return A.rawcolliderset_coShapeType(this.__wbg_ptr, I2);
    }
    coHalfspaceNormal(I2) {
        const g2 = A.rawcolliderset_coHalfspaceNormal(this.__wbg_ptr, I2);
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    coHalfExtents(I2) {
        const g2 = A.rawcolliderset_coHalfExtents(this.__wbg_ptr, I2);
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    coSetHalfExtents(I2, g2) {
        K(g2, xA),
            A.rawcolliderset_coSetHalfExtents(this.__wbg_ptr, I2, g2.__wbg_ptr);
    }
    coRadius(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coRadius(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
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
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
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
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
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
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            let Q2;
            return (
                g2 !== 0 &&
                    ((Q2 = N(g2, C2).slice()),
                    A.__wbindgen_free(g2, 4 * C2, 4)),
                Q2
            );
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coIndices(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coIndices(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            let Q2;
            return (
                g2 !== 0 &&
                    ((Q2 = (function (A2, I3) {
                        return (A2 >>>= 0), F().subarray(A2 / 4, A2 / 4 + I3);
                    })(g2, C2).slice()),
                    A.__wbindgen_free(g2, 4 * C2, 4)),
                Q2
            );
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coTriMeshFlags(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coTriMeshFlags(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightFieldFlags(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightFieldFlags(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldHeights(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldHeights(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            let Q2;
            return (
                g2 !== 0 &&
                    ((Q2 = N(g2, C2).slice()),
                    A.__wbindgen_free(g2, 4 * C2, 4)),
                Q2
            );
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldScale(I2) {
        const g2 = A.rawcolliderset_coHeightfieldScale(this.__wbg_ptr, I2);
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    coHeightfieldNRows(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldNRows(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coHeightfieldNCols(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coHeightfieldNCols(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = S()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    coParent(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawcolliderset_coParent(B2, this.__wbg_ptr, I2);
            var g2 = S()[B2 / 4 + 0],
                C2 = D()[B2 / 8 + 1];
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
    coSetContactSkin(I2, g2) {
        A.rawcolliderset_coSetContactSkin(this.__wbg_ptr, I2, g2);
    }
    coContactSkin(I2) {
        return A.rawcolliderset_coContactSkin(this.__wbg_ptr, I2);
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
        return A.rawcolliderset_coContactForceEventThreshold(
            this.__wbg_ptr,
            I2
        );
    }
    coContainsPoint(I2, g2) {
        K(g2, xA);
        return (
            A.rawcolliderset_coContainsPoint(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            ) !== 0
        );
    }
    coCastShape(I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
        K(g2, xA), K(C2, dA), K(B2, xA), K(Q2, HA), K(E2, xA);
        const S2 = A.rawcolliderset_coCastShape(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr,
            Q2.__wbg_ptr,
            E2.__wbg_ptr,
            i2,
            D2,
            o2
        );
        return S2 === 0 ? void 0 : OA.__wrap(S2);
    }
    coCastCollider(I2, g2, C2, B2, Q2, E2, i2) {
        K(g2, xA), K(B2, xA);
        const D2 = A.rawcolliderset_coCastCollider(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2,
            B2.__wbg_ptr,
            Q2,
            E2,
            i2
        );
        return D2 === 0 ? void 0 : O.__wrap(D2);
    }
    coIntersectsShape(I2, g2, C2, B2) {
        K(g2, dA), K(C2, xA), K(B2, HA);
        return (
            A.rawcolliderset_coIntersectsShape(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr
            ) !== 0
        );
    }
    coContactShape(I2, g2, C2, B2, Q2) {
        K(g2, dA), K(C2, xA), K(B2, HA);
        const E2 = A.rawcolliderset_coContactShape(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr,
            Q2
        );
        return E2 === 0 ? void 0 : bA.__wrap(E2);
    }
    coContactCollider(I2, g2, C2) {
        const B2 = A.rawcolliderset_coContactCollider(
            this.__wbg_ptr,
            I2,
            g2,
            C2
        );
        return B2 === 0 ? void 0 : bA.__wrap(B2);
    }
    coProjectPoint(I2, g2, C2) {
        K(g2, xA);
        const B2 = A.rawcolliderset_coProjectPoint(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2
        );
        return yA.__wrap(B2);
    }
    coIntersectsRay(I2, g2, C2, B2) {
        K(g2, xA), K(C2, xA);
        return (
            A.rawcolliderset_coIntersectsRay(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2
            ) !== 0
        );
    }
    coCastRay(I2, g2, C2, B2, Q2) {
        K(g2, xA), K(C2, xA);
        return A.rawcolliderset_coCastRay(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2,
            Q2
        );
    }
    coCastRayAndGetNormal(I2, g2, C2, B2, Q2) {
        K(g2, xA), K(C2, xA);
        const E2 = A.rawcolliderset_coCastRayAndGetNormal(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2,
            Q2
        );
        return E2 === 0 ? void 0 : qA.__wrap(E2);
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
        return (
            A.rawcolliderset_coRestitutionCombineRule(this.__wbg_ptr, I2) >>> 0
        );
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
        K(g2, dA),
            A.rawcolliderset_coSetShape(this.__wbg_ptr, I2, g2.__wbg_ptr);
    }
    coSetContactForceEventThreshold(I2, g2) {
        A.rawcolliderset_coSetContactForceEventThreshold(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    coSetDensity(I2, g2) {
        A.rawcolliderset_coSetDensity(this.__wbg_ptr, I2, g2);
    }
    coSetMass(I2, g2) {
        A.rawcolliderset_coSetMass(this.__wbg_ptr, I2, g2);
    }
    coSetMassProperties(I2, g2, C2, B2, Q2) {
        K(C2, xA),
            K(B2, xA),
            K(Q2, HA),
            A.rawcolliderset_coSetMassProperties(
                this.__wbg_ptr,
                I2,
                g2,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr
            );
    }
    constructor() {
        const I2 = A.rawcolliderset_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    len() {
        return A.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(I2) {
        return A.rawcolliderset_contains(this.__wbg_ptr, I2) !== 0;
    }
    createCollider(
        I2,
        g2,
        C2,
        B2,
        Q2,
        E2,
        i2,
        o2,
        w2,
        G2,
        k2,
        J2,
        U2,
        h2,
        y2,
        N2,
        M2,
        F2,
        a2,
        s2,
        R2,
        c2,
        q2,
        Y2,
        l2
    ) {
        try {
            const t2 = A.__wbindgen_add_to_stack_pointer(-16);
            K(g2, dA),
                K(C2, xA),
                K(B2, HA),
                K(i2, xA),
                K(o2, xA),
                K(w2, HA),
                K(l2, lA),
                A.rawcolliderset_createCollider(
                    t2,
                    this.__wbg_ptr,
                    I2,
                    g2.__wbg_ptr,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    Q2,
                    E2,
                    i2.__wbg_ptr,
                    o2.__wbg_ptr,
                    w2.__wbg_ptr,
                    G2,
                    k2,
                    J2,
                    U2,
                    h2,
                    y2,
                    N2,
                    M2,
                    F2,
                    a2,
                    s2,
                    R2,
                    c2,
                    q2,
                    Y2,
                    l2.__wbg_ptr
                );
            var L2 = S()[t2 / 4 + 0],
                H2 = D()[t2 / 8 + 1];
            return L2 === 0 ? void 0 : H2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    remove(I2, g2, C2, B2) {
        K(g2, EA),
            K(C2, lA),
            A.rawcolliderset_remove(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2
            );
    }
    isHandleValid(I2) {
        return A.rawcolliderset_contains(this.__wbg_ptr, I2) !== 0;
    }
    forEachColliderHandle(g2) {
        try {
            A.rawcolliderset_forEachColliderHandle(this.__wbg_ptr, y(g2));
        } finally {
            I[h++] = void 0;
        }
    }
}
const T =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawcollidershapecasthit_free(I2 >>> 0)
          );
class O {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(O.prototype);
        return (I2.__wbg_ptr = A2), T.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), T.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawcollidershapecasthit_free(I2);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    time_of_impact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    witness1() {
        const I2 = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    witness2() {
        const I2 = A.rawcollidershapecasthit_witness2(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    normal1() {
        const I2 = A.rawcharactercollision_translationDeltaApplied(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
    normal2() {
        const I2 = A.rawcharactercollision_translationDeltaRemaining(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
}
const Z =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawcontactforceevent_free(I2 >>> 0)
          );
class b {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(b.prototype);
        return (I2.__wbg_ptr = A2), Z.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), Z.unregister(this), A2;
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
        return xA.__wrap(I2);
    }
    total_force_magnitude() {
        return A.rawcontactforceevent_total_force_magnitude(this.__wbg_ptr);
    }
    max_force_direction() {
        const I2 = A.rawcontactforceevent_max_force_direction(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    max_force_magnitude() {
        return A.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
}
const W =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawcontactmanifold_free(I2 >>> 0)
          );
class x {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(x.prototype);
        return (I2.__wbg_ptr = A2), W.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), W.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawcontactmanifold_free(I2);
    }
    normal() {
        const I2 = A.rawcontactmanifold_normal(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    local_n1() {
        const I2 = A.rawcontactmanifold_local_n1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    local_n2() {
        const I2 = A.rawcontactmanifold_local_n2(this.__wbg_ptr);
        return xA.__wrap(I2);
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
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    contact_local_p2(I2) {
        const g2 = A.rawcontactmanifold_contact_local_p2(this.__wbg_ptr, I2);
        return g2 === 0 ? void 0 : xA.__wrap(g2);
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
        return A.rawcontactmanifold_contact_tangent_impulse_x(
            this.__wbg_ptr,
            I2
        );
    }
    contact_tangent_impulse_y(I2) {
        return A.rawcontactmanifold_contact_tangent_impulse_y(
            this.__wbg_ptr,
            I2
        );
    }
    num_solver_contacts() {
        return A.rawcontactmanifold_num_solver_contacts(this.__wbg_ptr) >>> 0;
    }
    solver_contact_point(I2) {
        const g2 = A.rawcontactmanifold_solver_contact_point(
            this.__wbg_ptr,
            I2
        );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    solver_contact_dist(I2) {
        return A.rawcontactmanifold_solver_contact_dist(this.__wbg_ptr, I2);
    }
    solver_contact_friction(I2) {
        return A.rawcontactmanifold_solver_contact_friction(this.__wbg_ptr, I2);
    }
    solver_contact_restitution(I2) {
        return A.rawcontactmanifold_solver_contact_restitution(
            this.__wbg_ptr,
            I2
        );
    }
    solver_contact_tangent_velocity(I2) {
        const g2 = A.rawcontactmanifold_solver_contact_tangent_velocity(
            this.__wbg_ptr,
            I2
        );
        return xA.__wrap(g2);
    }
}
const m =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawcontactpair_free(I2 >>> 0)
          );
class j {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(j.prototype);
        return (I2.__wbg_ptr = A2), m.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), m.unregister(this), A2;
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
        return g2 === 0 ? void 0 : x.__wrap(g2);
    }
}
const f =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawdebugrenderpipeline_free(I2 >>> 0)
          );
class V {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), f.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawdebugrenderpipeline_free(I2);
    }
    constructor() {
        const I2 = A.rawdebugrenderpipeline_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    vertices() {
        return Q(A.rawdebugrenderpipeline_vertices(this.__wbg_ptr));
    }
    colors() {
        return Q(A.rawdebugrenderpipeline_colors(this.__wbg_ptr));
    }
    render(I2, g2, C2, B2, Q2) {
        K(I2, lA),
            K(g2, d),
            K(C2, gA),
            K(B2, SA),
            K(Q2, GA),
            A.rawdebugrenderpipeline_render(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr
            );
    }
}
const X =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawdeserializedworld_free(I2 >>> 0)
          );
class P {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(P.prototype);
        return (I2.__wbg_ptr = A2), X.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), X.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawdeserializedworld_free(I2);
    }
    takeGravity() {
        const I2 = A.rawdeserializedworld_takeGravity(this.__wbg_ptr);
        return I2 === 0 ? void 0 : xA.__wrap(I2);
    }
    takeIntegrationParameters() {
        const I2 = A.rawdeserializedworld_takeIntegrationParameters(
            this.__wbg_ptr
        );
        return I2 === 0 ? void 0 : BA.__wrap(I2);
    }
    takeIslandManager() {
        const I2 = A.rawdeserializedworld_takeIslandManager(this.__wbg_ptr);
        return I2 === 0 ? void 0 : EA.__wrap(I2);
    }
    takeBroadPhase() {
        const I2 = A.rawdeserializedworld_takeBroadPhase(this.__wbg_ptr);
        return I2 === 0 ? void 0 : H.__wrap(I2);
    }
    takeNarrowPhase() {
        const I2 = A.rawdeserializedworld_takeNarrowPhase(this.__wbg_ptr);
        return I2 === 0 ? void 0 : GA.__wrap(I2);
    }
    takeBodies() {
        const I2 = A.rawdeserializedworld_takeBodies(this.__wbg_ptr);
        return I2 === 0 ? void 0 : lA.__wrap(I2);
    }
    takeColliders() {
        const I2 = A.rawdeserializedworld_takeColliders(this.__wbg_ptr);
        return I2 === 0 ? void 0 : d.__wrap(I2);
    }
    takeImpulseJoints() {
        const I2 = A.rawdeserializedworld_takeImpulseJoints(this.__wbg_ptr);
        return I2 === 0 ? void 0 : gA.__wrap(I2);
    }
    takeMultibodyJoints() {
        const I2 = A.rawdeserializedworld_takeMultibodyJoints(this.__wbg_ptr);
        return I2 === 0 ? void 0 : SA.__wrap(I2);
    }
}
const u =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawdynamicraycastvehiclecontroller_free(I2 >>> 0)
          );
class v {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), u.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawdynamicraycastvehiclecontroller_free(I2);
    }
    constructor(I2) {
        const g2 = A.rawdynamicraycastvehiclecontroller_new(I2);
        return (this.__wbg_ptr = g2 >>> 0), this;
    }
    current_vehicle_speed() {
        return A.rawdynamicraycastvehiclecontroller_current_vehicle_speed(
            this.__wbg_ptr
        );
    }
    chassis() {
        return A.rawdynamicraycastvehiclecontroller_chassis(this.__wbg_ptr);
    }
    index_up_axis() {
        return (
            A.rawdynamicraycastvehiclecontroller_index_up_axis(
                this.__wbg_ptr
            ) >>> 0
        );
    }
    set_index_up_axis(I2) {
        A.rawdynamicraycastvehiclecontroller_set_index_up_axis(
            this.__wbg_ptr,
            I2
        );
    }
    index_forward_axis() {
        return (
            A.rawdynamicraycastvehiclecontroller_index_forward_axis(
                this.__wbg_ptr
            ) >>> 0
        );
    }
    set_index_forward_axis(I2) {
        A.rawdynamicraycastvehiclecontroller_set_index_forward_axis(
            this.__wbg_ptr,
            I2
        );
    }
    add_wheel(I2, g2, C2, B2, Q2) {
        K(I2, xA),
            K(g2, xA),
            K(C2, xA),
            A.rawdynamicraycastvehiclecontroller_add_wheel(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2,
                Q2
            );
    }
    num_wheels() {
        return (
            A.rawdynamicraycastvehiclecontroller_num_wheels(this.__wbg_ptr) >>>
            0
        );
    }
    update_vehicle(g2, C2, B2, Q2, i2, D2, o2) {
        try {
            K(C2, lA),
                K(B2, d),
                K(Q2, MA),
                A.rawdynamicraycastvehiclecontroller_update_vehicle(
                    this.__wbg_ptr,
                    g2,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    Q2.__wbg_ptr,
                    i2,
                    !E(D2),
                    E(D2) ? 0 : D2,
                    y(o2)
                );
        } finally {
            I[h++] = void 0;
        }
    }
    wheel_chassis_connection_point_cs(I2) {
        const g2 =
            A.rawdynamicraycastvehiclecontroller_wheel_chassis_connection_point_cs(
                this.__wbg_ptr,
                I2
            );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    set_wheel_chassis_connection_point_cs(I2, g2) {
        K(g2, xA),
            A.rawdynamicraycastvehiclecontroller_set_wheel_chassis_connection_point_cs(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            );
    }
    wheel_suspension_rest_length(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_rest_length(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_rest_length(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_rest_length(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_max_suspension_travel(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_max_suspension_travel(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_max_suspension_travel(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_travel(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_radius(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_radius(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_radius(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_radius(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_suspension_stiffness(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_stiffness(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_stiffness(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_stiffness(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_suspension_compression(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_compression(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_compression(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_compression(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_suspension_relaxation(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_relaxation(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_suspension_relaxation(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_suspension_relaxation(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_max_suspension_force(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_max_suspension_force(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_max_suspension_force(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_max_suspension_force(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_brake(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_brake(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_brake(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_brake(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_steering(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_steering(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_steering(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_steering(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_engine_force(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_engine_force(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_engine_force(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_engine_force(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_direction_cs(I2) {
        const g2 = A.rawdynamicraycastvehiclecontroller_wheel_direction_cs(
            this.__wbg_ptr,
            I2
        );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    set_wheel_direction_cs(I2, g2) {
        K(g2, xA),
            A.rawdynamicraycastvehiclecontroller_set_wheel_direction_cs(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            );
    }
    wheel_axle_cs(I2) {
        const g2 = A.rawdynamicraycastvehiclecontroller_wheel_axle_cs(
            this.__wbg_ptr,
            I2
        );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    set_wheel_axle_cs(I2, g2) {
        K(g2, xA),
            A.rawdynamicraycastvehiclecontroller_set_wheel_axle_cs(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            );
    }
    wheel_friction_slip(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_friction_slip(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_friction_slip(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_friction_slip(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_side_friction_stiffness(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_side_friction_stiffness(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    set_wheel_side_friction_stiffness(I2, g2) {
        A.rawdynamicraycastvehiclecontroller_set_wheel_side_friction_stiffness(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    wheel_rotation(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_rotation(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_forward_impulse(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_forward_impulse(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_side_impulse(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_side_impulse(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_suspension_force(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_force(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_contact_normal_ws(I2) {
        const g2 = A.rawdynamicraycastvehiclecontroller_wheel_contact_normal_ws(
            this.__wbg_ptr,
            I2
        );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    wheel_contact_point_ws(I2) {
        const g2 = A.rawdynamicraycastvehiclecontroller_wheel_contact_point_ws(
            this.__wbg_ptr,
            I2
        );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    wheel_suspension_length(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_suspension_length(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = U()[B2 / 4 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    wheel_hard_point_ws(I2) {
        const g2 = A.rawdynamicraycastvehiclecontroller_wheel_hard_point_ws(
            this.__wbg_ptr,
            I2
        );
        return g2 === 0 ? void 0 : xA.__wrap(g2);
    }
    wheel_is_in_contact(I2) {
        return (
            A.rawdynamicraycastvehiclecontroller_wheel_is_in_contact(
                this.__wbg_ptr,
                I2
            ) !== 0
        );
    }
    wheel_ground_object(I2) {
        try {
            const B2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawdynamicraycastvehiclecontroller_wheel_ground_object(
                B2,
                this.__wbg_ptr,
                I2
            );
            var g2 = S()[B2 / 4 + 0],
                C2 = D()[B2 / 8 + 1];
            return g2 === 0 ? void 0 : C2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const z =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_raweventqueue_free(I2 >>> 0)
          );
class _ {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), z.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_raweventqueue_free(I2);
    }
    constructor(I2) {
        const g2 = A.raweventqueue_new(I2);
        return (this.__wbg_ptr = g2 >>> 0), this;
    }
    drainCollisionEvents(g2) {
        try {
            A.raweventqueue_drainCollisionEvents(this.__wbg_ptr, y(g2));
        } finally {
            I[h++] = void 0;
        }
    }
    drainContactForceEvents(g2) {
        try {
            A.raweventqueue_drainContactForceEvents(this.__wbg_ptr, y(g2));
        } finally {
            I[h++] = void 0;
        }
    }
    clear() {
        A.raweventqueue_clear(this.__wbg_ptr);
    }
}
const $ =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawgenericjoint_free(I2 >>> 0)
          );
class AA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(AA.prototype);
        return (I2.__wbg_ptr = A2), $.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), $.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawgenericjoint_free(I2);
    }
    static generic(I2, g2, C2, B2) {
        K(I2, xA), K(g2, xA), K(C2, xA);
        const Q2 = A.rawgenericjoint_generic(
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2
        );
        return Q2 === 0 ? void 0 : AA.__wrap(Q2);
    }
    static spring(I2, g2, C2, B2, Q2) {
        K(B2, xA), K(Q2, xA);
        const E2 = A.rawgenericjoint_spring(
            I2,
            g2,
            C2,
            B2.__wbg_ptr,
            Q2.__wbg_ptr
        );
        return AA.__wrap(E2);
    }
    static rope(I2, g2, C2) {
        K(g2, xA), K(C2, xA);
        const B2 = A.rawgenericjoint_rope(I2, g2.__wbg_ptr, C2.__wbg_ptr);
        return AA.__wrap(B2);
    }
    static spherical(I2, g2) {
        K(I2, xA), K(g2, xA);
        const C2 = A.rawgenericjoint_spherical(I2.__wbg_ptr, g2.__wbg_ptr);
        return AA.__wrap(C2);
    }
    static prismatic(I2, g2, C2, B2, Q2, E2) {
        K(I2, xA), K(g2, xA), K(C2, xA);
        const i2 = A.rawgenericjoint_prismatic(
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2,
            Q2,
            E2
        );
        return i2 === 0 ? void 0 : AA.__wrap(i2);
    }
    static fixed(I2, g2, C2, B2) {
        K(I2, xA), K(g2, HA), K(C2, xA), K(B2, HA);
        const Q2 = A.rawgenericjoint_fixed(
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr
        );
        return AA.__wrap(Q2);
    }
    static revolute(I2, g2, C2) {
        K(I2, xA), K(g2, xA), K(C2, xA);
        const B2 = A.rawgenericjoint_revolute(
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr
        );
        return B2 === 0 ? void 0 : AA.__wrap(B2);
    }
}
const IA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawimpulsejointset_free(I2 >>> 0)
          );
class gA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(gA.prototype);
        return (I2.__wbg_ptr = A2), IA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), IA.unregister(this), A2;
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
        return HA.__wrap(g2);
    }
    jointFrameX2(I2) {
        const g2 = A.rawimpulsejointset_jointFrameX2(this.__wbg_ptr, I2);
        return HA.__wrap(g2);
    }
    jointAnchor1(I2) {
        const g2 = A.rawimpulsejointset_jointAnchor1(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    jointAnchor2(I2) {
        const g2 = A.rawimpulsejointset_jointAnchor2(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    jointSetAnchor1(I2, g2) {
        K(g2, xA),
            A.rawimpulsejointset_jointSetAnchor1(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            );
    }
    jointSetAnchor2(I2, g2) {
        K(g2, xA),
            A.rawimpulsejointset_jointSetAnchor2(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            );
    }
    jointContactsEnabled(I2) {
        return (
            A.rawimpulsejointset_jointContactsEnabled(this.__wbg_ptr, I2) !== 0
        );
    }
    jointSetContactsEnabled(I2, g2) {
        A.rawimpulsejointset_jointSetContactsEnabled(this.__wbg_ptr, I2, g2);
    }
    jointLimitsEnabled(I2, g2) {
        return (
            A.rawimpulsejointset_jointLimitsEnabled(this.__wbg_ptr, I2, g2) !==
            0
        );
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
        A.rawimpulsejointset_jointConfigureMotorModel(
            this.__wbg_ptr,
            I2,
            g2,
            C2
        );
    }
    jointConfigureMotorVelocity(I2, g2, C2, B2) {
        A.rawimpulsejointset_jointConfigureMotorVelocity(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2
        );
    }
    jointConfigureMotorPosition(I2, g2, C2, B2, Q2) {
        A.rawimpulsejointset_jointConfigureMotorPosition(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2,
            Q2
        );
    }
    jointConfigureMotor(I2, g2, C2, B2, Q2, E2) {
        A.rawimpulsejointset_jointConfigureMotor(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2,
            Q2,
            E2
        );
    }
    constructor() {
        const I2 = A.rawimpulsejointset_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    createJoint(I2, g2, C2, B2) {
        K(I2, AA);
        return A.rawimpulsejointset_createJoint(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2,
            C2,
            B2
        );
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
            A.rawimpulsejointset_forEachJointHandle(this.__wbg_ptr, y(g2));
        } finally {
            I[h++] = void 0;
        }
    }
    forEachJointAttachedToRigidBody(g2, C2) {
        try {
            A.rawimpulsejointset_forEachJointAttachedToRigidBody(
                this.__wbg_ptr,
                g2,
                y(C2)
            );
        } finally {
            I[h++] = void 0;
        }
    }
}
const CA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawintegrationparameters_free(I2 >>> 0)
          );
class BA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(BA.prototype);
        return (I2.__wbg_ptr = A2), CA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), CA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawintegrationparameters_free(I2);
    }
    constructor() {
        const I2 = A.rawintegrationparameters_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    get dt() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get contact_erp() {
        return A.rawintegrationparameters_contact_erp(this.__wbg_ptr);
    }
    get normalizedAllowedLinearError() {
        return A.rawdynamicraycastvehiclecontroller_current_vehicle_speed(
            this.__wbg_ptr
        );
    }
    get normalizedPredictionDistance() {
        return A.rawcontactforceevent_max_force_magnitude(this.__wbg_ptr);
    }
    get numSolverIterations() {
        return (
            A.rawintegrationparameters_numSolverIterations(this.__wbg_ptr) >>> 0
        );
    }
    get numAdditionalFrictionIterations() {
        return (
            A.rawdynamicraycastvehiclecontroller_index_up_axis(
                this.__wbg_ptr
            ) >>> 0
        );
    }
    get numInternalPgsIterations() {
        return (
            A.rawdynamicraycastvehiclecontroller_index_forward_axis(
                this.__wbg_ptr
            ) >>> 0
        );
    }
    get minIslandSize() {
        return A.rawimpulsejointset_len(this.__wbg_ptr) >>> 0;
    }
    get maxCcdSubsteps() {
        return A.rawintegrationparameters_maxCcdSubsteps(this.__wbg_ptr) >>> 0;
    }
    get lengthUnit() {
        return A.rawintegrationparameters_lengthUnit(this.__wbg_ptr);
    }
    set dt(I2) {
        A.rawintegrationparameters_set_dt(this.__wbg_ptr, I2);
    }
    set contact_natural_frequency(I2) {
        A.rawintegrationparameters_set_contact_natural_frequency(
            this.__wbg_ptr,
            I2
        );
    }
    set normalizedAllowedLinearError(I2) {
        A.rawintegrationparameters_set_normalizedAllowedLinearError(
            this.__wbg_ptr,
            I2
        );
    }
    set normalizedPredictionDistance(I2) {
        A.rawintegrationparameters_set_normalizedPredictionDistance(
            this.__wbg_ptr,
            I2
        );
    }
    set numSolverIterations(I2) {
        A.rawintegrationparameters_set_numSolverIterations(this.__wbg_ptr, I2);
    }
    set numAdditionalFrictionIterations(I2) {
        A.rawdynamicraycastvehiclecontroller_set_index_up_axis(
            this.__wbg_ptr,
            I2
        );
    }
    set numInternalPgsIterations(I2) {
        A.rawdynamicraycastvehiclecontroller_set_index_forward_axis(
            this.__wbg_ptr,
            I2
        );
    }
    set minIslandSize(I2) {
        A.rawintegrationparameters_set_minIslandSize(this.__wbg_ptr, I2);
    }
    set maxCcdSubsteps(I2) {
        A.rawintegrationparameters_set_maxCcdSubsteps(this.__wbg_ptr, I2);
    }
    set lengthUnit(I2) {
        A.rawintegrationparameters_set_lengthUnit(this.__wbg_ptr, I2);
    }
    switchToStandardPgsSolver() {
        A.rawintegrationparameters_switchToStandardPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolver() {
        A.rawintegrationparameters_switchToSmallStepsPgsSolver(this.__wbg_ptr);
    }
    switchToSmallStepsPgsSolverWithoutWarmstart() {
        A.rawintegrationparameters_switchToSmallStepsPgsSolverWithoutWarmstart(
            this.__wbg_ptr
        );
    }
}
const QA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawislandmanager_free(I2 >>> 0)
          );
class EA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(EA.prototype);
        return (I2.__wbg_ptr = A2), QA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), QA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawislandmanager_free(I2);
    }
    constructor() {
        const I2 = A.rawislandmanager_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    forEachActiveRigidBodyHandle(g2) {
        try {
            A.rawislandmanager_forEachActiveRigidBodyHandle(
                this.__wbg_ptr,
                y(g2)
            );
        } finally {
            I[h++] = void 0;
        }
    }
}
const iA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawkinematiccharactercontroller_free(I2 >>> 0)
          );
class DA {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), iA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawkinematiccharactercontroller_free(I2);
    }
    constructor(I2) {
        const g2 = A.rawkinematiccharactercontroller_new(I2);
        return (this.__wbg_ptr = g2 >>> 0), this;
    }
    up() {
        const I2 = A.rawcharactercollision_translationDeltaApplied(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
    setUp(I2) {
        K(I2, xA),
            A.rawkinematiccharactercontroller_setUp(
                this.__wbg_ptr,
                I2.__wbg_ptr
            );
    }
    normalNudgeFactor() {
        return A.rawkinematiccharactercontroller_normalNudgeFactor(
            this.__wbg_ptr
        );
    }
    setNormalNudgeFactor(I2) {
        A.rawkinematiccharactercontroller_setNormalNudgeFactor(
            this.__wbg_ptr,
            I2
        );
    }
    offset() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    setOffset(I2) {
        A.rawkinematiccharactercontroller_setOffset(this.__wbg_ptr, I2);
    }
    slideEnabled() {
        return (
            A.rawkinematiccharactercontroller_slideEnabled(this.__wbg_ptr) !== 0
        );
    }
    setSlideEnabled(I2) {
        A.rawkinematiccharactercontroller_setSlideEnabled(this.__wbg_ptr, I2);
    }
    autostepMaxHeight() {
        try {
            const C2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_autostepMaxHeight(
                C2,
                this.__wbg_ptr
            );
            var I2 = S()[C2 / 4 + 0],
                g2 = U()[C2 / 4 + 1];
            return I2 === 0 ? void 0 : g2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    autostepMinWidth() {
        try {
            const C2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_autostepMinWidth(
                C2,
                this.__wbg_ptr
            );
            var I2 = S()[C2 / 4 + 0],
                g2 = U()[C2 / 4 + 1];
            return I2 === 0 ? void 0 : g2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    autostepIncludesDynamicBodies() {
        const I2 =
            A.rawkinematiccharactercontroller_autostepIncludesDynamicBodies(
                this.__wbg_ptr
            );
        return I2 === 16777215 ? void 0 : I2 !== 0;
    }
    autostepEnabled() {
        return (
            A.rawkinematiccharactercontroller_autostepEnabled(
                this.__wbg_ptr
            ) !== 0
        );
    }
    enableAutostep(I2, g2, C2) {
        A.rawkinematiccharactercontroller_enableAutostep(
            this.__wbg_ptr,
            I2,
            g2,
            C2
        );
    }
    disableAutostep() {
        A.rawkinematiccharactercontroller_disableAutostep(this.__wbg_ptr);
    }
    maxSlopeClimbAngle() {
        return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(
            this.__wbg_ptr
        );
    }
    setMaxSlopeClimbAngle(I2) {
        A.rawkinematiccharactercontroller_setMaxSlopeClimbAngle(
            this.__wbg_ptr,
            I2
        );
    }
    minSlopeSlideAngle() {
        return A.rawkinematiccharactercontroller_minSlopeSlideAngle(
            this.__wbg_ptr
        );
    }
    setMinSlopeSlideAngle(I2) {
        A.rawkinematiccharactercontroller_setMinSlopeSlideAngle(
            this.__wbg_ptr,
            I2
        );
    }
    snapToGroundDistance() {
        try {
            const C2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawkinematiccharactercontroller_snapToGroundDistance(
                C2,
                this.__wbg_ptr
            );
            var I2 = S()[C2 / 4 + 0],
                g2 = U()[C2 / 4 + 1];
            return I2 === 0 ? void 0 : g2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
    enableSnapToGround(I2) {
        A.rawkinematiccharactercontroller_enableSnapToGround(
            this.__wbg_ptr,
            I2
        );
    }
    disableSnapToGround() {
        A.rawkinematiccharactercontroller_disableSnapToGround(this.__wbg_ptr);
    }
    snapToGroundEnabled() {
        return (
            A.rawkinematiccharactercontroller_snapToGroundEnabled(
                this.__wbg_ptr
            ) !== 0
        );
    }
    computeColliderMovement(g2, C2, B2, Q2, i2, D2, o2, S2, w2, G2, k2) {
        try {
            K(C2, lA),
                K(B2, d),
                K(Q2, MA),
                K(D2, xA),
                A.rawkinematiccharactercontroller_computeColliderMovement(
                    this.__wbg_ptr,
                    g2,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    Q2.__wbg_ptr,
                    i2,
                    D2.__wbg_ptr,
                    o2,
                    !E(S2),
                    E(S2) ? 0 : S2,
                    w2,
                    !E(G2),
                    E(G2) ? 0 : G2,
                    y(k2)
                );
        } finally {
            I[h++] = void 0;
        }
    }
    computedMovement() {
        const I2 = A.rawkinematiccharactercontroller_computedMovement(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
    computedGrounded() {
        return (
            A.rawkinematiccharactercontroller_computedGrounded(
                this.__wbg_ptr
            ) !== 0
        );
    }
    numComputedCollisions() {
        return (
            A.rawkinematiccharactercontroller_numComputedCollisions(
                this.__wbg_ptr
            ) >>> 0
        );
    }
    computedCollision(I2, g2) {
        K(g2, r);
        return (
            A.rawkinematiccharactercontroller_computedCollision(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            ) !== 0
        );
    }
}
const oA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawmultibodyjointset_free(I2 >>> 0)
          );
class SA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(SA.prototype);
        return (I2.__wbg_ptr = A2), oA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), oA.unregister(this), A2;
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
        return HA.__wrap(g2);
    }
    jointFrameX2(I2) {
        const g2 = A.rawmultibodyjointset_jointFrameX2(this.__wbg_ptr, I2);
        return HA.__wrap(g2);
    }
    jointAnchor1(I2) {
        const g2 = A.rawmultibodyjointset_jointAnchor1(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    jointAnchor2(I2) {
        const g2 = A.rawmultibodyjointset_jointAnchor2(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    jointContactsEnabled(I2) {
        return (
            A.rawmultibodyjointset_jointContactsEnabled(this.__wbg_ptr, I2) !==
            0
        );
    }
    jointSetContactsEnabled(I2, g2) {
        A.rawmultibodyjointset_jointSetContactsEnabled(this.__wbg_ptr, I2, g2);
    }
    jointLimitsEnabled(I2, g2) {
        return (
            A.rawmultibodyjointset_jointLimitsEnabled(
                this.__wbg_ptr,
                I2,
                g2
            ) !== 0
        );
    }
    jointLimitsMin(I2, g2) {
        return A.rawmultibodyjointset_jointLimitsMin(this.__wbg_ptr, I2, g2);
    }
    jointLimitsMax(I2, g2) {
        return A.rawmultibodyjointset_jointLimitsMax(this.__wbg_ptr, I2, g2);
    }
    constructor() {
        const I2 = A.rawmultibodyjointset_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    createJoint(I2, g2, C2, B2) {
        K(I2, AA);
        return A.rawmultibodyjointset_createJoint(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2,
            C2,
            B2
        );
    }
    remove(I2, g2) {
        A.rawmultibodyjointset_remove(this.__wbg_ptr, I2, g2);
    }
    contains(I2) {
        return A.rawmultibodyjointset_contains(this.__wbg_ptr, I2) !== 0;
    }
    forEachJointHandle(g2) {
        try {
            A.rawmultibodyjointset_forEachJointHandle(this.__wbg_ptr, y(g2));
        } finally {
            I[h++] = void 0;
        }
    }
    forEachJointAttachedToRigidBody(g2, C2) {
        try {
            A.rawmultibodyjointset_forEachJointAttachedToRigidBody(
                this.__wbg_ptr,
                g2,
                y(C2)
            );
        } finally {
            I[h++] = void 0;
        }
    }
}
const wA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawnarrowphase_free(I2 >>> 0)
          );
class GA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(GA.prototype);
        return (I2.__wbg_ptr = A2), wA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), wA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawnarrowphase_free(I2);
    }
    constructor() {
        const I2 = A.rawnarrowphase_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    contact_pairs_with(I2, g2) {
        A.rawnarrowphase_contact_pairs_with(this.__wbg_ptr, I2, C(g2));
    }
    contact_pair(I2, g2) {
        const C2 = A.rawnarrowphase_contact_pair(this.__wbg_ptr, I2, g2);
        return C2 === 0 ? void 0 : j.__wrap(C2);
    }
    intersection_pairs_with(I2, g2) {
        A.rawnarrowphase_intersection_pairs_with(this.__wbg_ptr, I2, C(g2));
    }
    intersection_pair(I2, g2) {
        return A.rawnarrowphase_intersection_pair(this.__wbg_ptr, I2, g2) !== 0;
    }
}
const kA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawphysicspipeline_free(I2 >>> 0)
          );
class KA {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), kA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawphysicspipeline_free(I2);
    }
    constructor() {
        const I2 = A.rawphysicspipeline_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    step(I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2) {
        K(I2, xA),
            K(g2, BA),
            K(C2, EA),
            K(B2, H),
            K(Q2, GA),
            K(E2, lA),
            K(i2, d),
            K(D2, gA),
            K(o2, SA),
            K(S2, p),
            A.rawphysicspipeline_step(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr,
                E2.__wbg_ptr,
                i2.__wbg_ptr,
                D2.__wbg_ptr,
                o2.__wbg_ptr,
                S2.__wbg_ptr
            );
    }
    stepWithEvents(I2, g2, B2, Q2, E2, i2, D2, o2, S2, w2, G2, k2, J2, U2) {
        K(I2, xA),
            K(g2, BA),
            K(B2, EA),
            K(Q2, H),
            K(E2, GA),
            K(i2, lA),
            K(D2, d),
            K(o2, gA),
            K(S2, SA),
            K(w2, p),
            K(G2, _),
            A.rawphysicspipeline_stepWithEvents(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr,
                E2.__wbg_ptr,
                i2.__wbg_ptr,
                D2.__wbg_ptr,
                o2.__wbg_ptr,
                S2.__wbg_ptr,
                w2.__wbg_ptr,
                G2.__wbg_ptr,
                C(k2),
                C(J2),
                C(U2)
            );
    }
}
const JA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawpointcolliderprojection_free(I2 >>> 0)
          );
class UA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(UA.prototype);
        return (I2.__wbg_ptr = A2), JA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), JA.unregister(this), A2;
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
        return xA.__wrap(I2);
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
            var I2 = S()[C2 / 4 + 0],
                g2 = S()[C2 / 4 + 1];
            return I2 === 0 ? void 0 : g2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const hA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawpointprojection_free(I2 >>> 0)
          );
class yA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(yA.prototype);
        return (I2.__wbg_ptr = A2), hA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), hA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawpointprojection_free(I2);
    }
    point() {
        const I2 = A.rawpointprojection_point(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    isInside() {
        return A.rawpointprojection_isInside(this.__wbg_ptr) !== 0;
    }
}
const NA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawquerypipeline_free(I2 >>> 0)
          );
class MA {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), NA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawquerypipeline_free(I2);
    }
    constructor() {
        const I2 = A.rawquerypipeline_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    update(I2) {
        K(I2, d), A.rawquerypipeline_update(this.__wbg_ptr, I2.__wbg_ptr);
    }
    castRay(g2, C2, B2, Q2, i2, D2, o2, S2, w2, G2, k2) {
        try {
            K(g2, lA), K(C2, d), K(B2, xA), K(Q2, xA);
            const J2 = A.rawquerypipeline_castRay(
                this.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr,
                i2,
                D2,
                o2,
                !E(S2),
                E(S2) ? 0 : S2,
                !E(w2),
                E(w2) ? 0 : w2,
                !E(G2),
                E(G2) ? 0 : G2,
                y(k2)
            );
            return J2 === 0 ? void 0 : aA.__wrap(J2);
        } finally {
            I[h++] = void 0;
        }
    }
    castRayAndGetNormal(g2, C2, B2, Q2, i2, D2, o2, S2, w2, G2, k2) {
        try {
            K(g2, lA), K(C2, d), K(B2, xA), K(Q2, xA);
            const J2 = A.rawquerypipeline_castRayAndGetNormal(
                this.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr,
                i2,
                D2,
                o2,
                !E(S2),
                E(S2) ? 0 : S2,
                !E(w2),
                E(w2) ? 0 : w2,
                !E(G2),
                E(G2) ? 0 : G2,
                y(k2)
            );
            return J2 === 0 ? void 0 : RA.__wrap(J2);
        } finally {
            I[h++] = void 0;
        }
    }
    intersectionsWithRay(g2, C2, B2, Q2, i2, D2, o2, S2, w2, G2, k2, J2) {
        try {
            K(g2, lA),
                K(C2, d),
                K(B2, xA),
                K(Q2, xA),
                A.rawquerypipeline_intersectionsWithRay(
                    this.__wbg_ptr,
                    g2.__wbg_ptr,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    Q2.__wbg_ptr,
                    i2,
                    D2,
                    y(o2),
                    S2,
                    !E(w2),
                    E(w2) ? 0 : w2,
                    !E(G2),
                    E(G2) ? 0 : G2,
                    !E(k2),
                    E(k2) ? 0 : k2,
                    y(J2)
                );
        } finally {
            (I[h++] = void 0), (I[h++] = void 0);
        }
    }
    intersectionWithShape(g2, C2, B2, Q2, i2, o2, w2, G2, k2, J2) {
        try {
            const M2 = A.__wbindgen_add_to_stack_pointer(-16);
            K(g2, lA),
                K(C2, d),
                K(B2, xA),
                K(Q2, HA),
                K(i2, dA),
                A.rawquerypipeline_intersectionWithShape(
                    M2,
                    this.__wbg_ptr,
                    g2.__wbg_ptr,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    Q2.__wbg_ptr,
                    i2.__wbg_ptr,
                    o2,
                    !E(w2),
                    E(w2) ? 0 : w2,
                    !E(G2),
                    E(G2) ? 0 : G2,
                    !E(k2),
                    E(k2) ? 0 : k2,
                    y(J2)
                );
            var U2 = S()[M2 / 4 + 0],
                N2 = D()[M2 / 8 + 1];
            return U2 === 0 ? void 0 : N2;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16), (I[h++] = void 0);
        }
    }
    projectPoint(g2, C2, B2, Q2, i2, D2, o2, S2, w2) {
        try {
            K(g2, lA), K(C2, d), K(B2, xA);
            const G2 = A.rawquerypipeline_projectPoint(
                this.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2,
                i2,
                !E(D2),
                E(D2) ? 0 : D2,
                !E(o2),
                E(o2) ? 0 : o2,
                !E(S2),
                E(S2) ? 0 : S2,
                y(w2)
            );
            return G2 === 0 ? void 0 : UA.__wrap(G2);
        } finally {
            I[h++] = void 0;
        }
    }
    projectPointAndGetFeature(g2, C2, B2, Q2, i2, D2, o2, S2) {
        try {
            K(g2, lA), K(C2, d), K(B2, xA);
            const w2 = A.rawquerypipeline_projectPointAndGetFeature(
                this.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2,
                !E(i2),
                E(i2) ? 0 : i2,
                !E(D2),
                E(D2) ? 0 : D2,
                !E(o2),
                E(o2) ? 0 : o2,
                y(S2)
            );
            return w2 === 0 ? void 0 : UA.__wrap(w2);
        } finally {
            I[h++] = void 0;
        }
    }
    intersectionsWithPoint(g2, C2, B2, Q2, i2, D2, o2, S2, w2) {
        try {
            K(g2, lA),
                K(C2, d),
                K(B2, xA),
                A.rawquerypipeline_intersectionsWithPoint(
                    this.__wbg_ptr,
                    g2.__wbg_ptr,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    y(Q2),
                    i2,
                    !E(D2),
                    E(D2) ? 0 : D2,
                    !E(o2),
                    E(o2) ? 0 : o2,
                    !E(S2),
                    E(S2) ? 0 : S2,
                    y(w2)
                );
        } finally {
            (I[h++] = void 0), (I[h++] = void 0);
        }
    }
    castShape(g2, C2, B2, Q2, i2, D2, o2, S2, w2, G2, k2, J2, U2, N2) {
        try {
            K(g2, lA), K(C2, d), K(B2, xA), K(Q2, HA), K(i2, xA), K(D2, dA);
            const M2 = A.rawquerypipeline_castShape(
                this.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr,
                i2.__wbg_ptr,
                D2.__wbg_ptr,
                o2,
                S2,
                w2,
                G2,
                !E(k2),
                E(k2) ? 0 : k2,
                !E(J2),
                E(J2) ? 0 : J2,
                !E(U2),
                E(U2) ? 0 : U2,
                y(N2)
            );
            return M2 === 0 ? void 0 : O.__wrap(M2);
        } finally {
            I[h++] = void 0;
        }
    }
    intersectionsWithShape(g2, C2, B2, Q2, i2, D2, o2, S2, w2, G2, k2) {
        try {
            K(g2, lA),
                K(C2, d),
                K(B2, xA),
                K(Q2, HA),
                K(i2, dA),
                A.rawquerypipeline_intersectionsWithShape(
                    this.__wbg_ptr,
                    g2.__wbg_ptr,
                    C2.__wbg_ptr,
                    B2.__wbg_ptr,
                    Q2.__wbg_ptr,
                    i2.__wbg_ptr,
                    y(D2),
                    o2,
                    !E(S2),
                    E(S2) ? 0 : S2,
                    !E(w2),
                    E(w2) ? 0 : w2,
                    !E(G2),
                    E(G2) ? 0 : G2,
                    y(k2)
                );
        } finally {
            (I[h++] = void 0), (I[h++] = void 0);
        }
    }
    collidersWithAabbIntersectingAabb(g2, C2, B2) {
        try {
            K(g2, xA),
                K(C2, xA),
                A.rawquerypipeline_collidersWithAabbIntersectingAabb(
                    this.__wbg_ptr,
                    g2.__wbg_ptr,
                    C2.__wbg_ptr,
                    y(B2)
                );
        } finally {
            I[h++] = void 0;
        }
    }
}
const FA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawraycolliderhit_free(I2 >>> 0)
          );
class aA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(aA.prototype);
        return (I2.__wbg_ptr = A2), FA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), FA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawraycolliderhit_free(I2);
    }
    colliderHandle() {
        return A.rawcharactercollision_handle(this.__wbg_ptr);
    }
    timeOfImpact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
}
const sA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawraycolliderintersection_free(I2 >>> 0)
          );
class RA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(RA.prototype);
        return (I2.__wbg_ptr = A2), sA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), sA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawraycolliderintersection_free(I2);
    }
    colliderHandle() {
        return A.rawpointcolliderprojection_colliderHandle(this.__wbg_ptr);
    }
    normal() {
        const I2 = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    time_of_impact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
        return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
        try {
            const C2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawpointcolliderprojection_featureId(C2, this.__wbg_ptr);
            var I2 = S()[C2 / 4 + 0],
                g2 = S()[C2 / 4 + 1];
            return I2 === 0 ? void 0 : g2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const cA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawrayintersection_free(I2 >>> 0)
          );
class qA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(qA.prototype);
        return (I2.__wbg_ptr = A2), cA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), cA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawrayintersection_free(I2);
    }
    normal() {
        const I2 = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    time_of_impact() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    featureType() {
        return A.rawpointcolliderprojection_featureType(this.__wbg_ptr);
    }
    featureId() {
        try {
            const C2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.rawpointcolliderprojection_featureId(C2, this.__wbg_ptr);
            var I2 = S()[C2 / 4 + 0],
                g2 = S()[C2 / 4 + 1];
            return I2 === 0 ? void 0 : g2 >>> 0;
        } finally {
            A.__wbindgen_add_to_stack_pointer(16);
        }
    }
}
const YA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawrigidbodyset_free(I2 >>> 0)
          );
class lA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(lA.prototype);
        return (I2.__wbg_ptr = A2), YA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), YA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawrigidbodyset_free(I2);
    }
    rbTranslation(I2) {
        const g2 = A.rawrigidbodyset_rbTranslation(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbRotation(I2) {
        const g2 = A.rawrigidbodyset_rbRotation(this.__wbg_ptr, I2);
        return HA.__wrap(g2);
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
        return xA.__wrap(g2);
    }
    rbNextRotation(I2) {
        const g2 = A.rawrigidbodyset_rbNextRotation(this.__wbg_ptr, I2);
        return HA.__wrap(g2);
    }
    rbSetTranslation(I2, g2, C2, B2, Q2) {
        A.rawrigidbodyset_rbSetTranslation(this.__wbg_ptr, I2, g2, C2, B2, Q2);
    }
    rbSetRotation(I2, g2, C2, B2, Q2, E2) {
        A.rawrigidbodyset_rbSetRotation(this.__wbg_ptr, I2, g2, C2, B2, Q2, E2);
    }
    rbSetLinvel(I2, g2, C2) {
        K(g2, xA),
            A.rawrigidbodyset_rbSetLinvel(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
    }
    rbSetAngvel(I2, g2, C2) {
        K(g2, xA),
            A.rawrigidbodyset_rbSetAngvel(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
    }
    rbSetNextKinematicTranslation(I2, g2, C2, B2) {
        A.rawrigidbodyset_rbSetNextKinematicTranslation(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2
        );
    }
    rbSetNextKinematicRotation(I2, g2, C2, B2, Q2) {
        A.rawrigidbodyset_rbSetNextKinematicRotation(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2,
            Q2
        );
    }
    rbRecomputeMassPropertiesFromColliders(I2, g2) {
        K(g2, d),
            A.rawrigidbodyset_rbRecomputeMassPropertiesFromColliders(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr
            );
    }
    rbSetAdditionalMass(I2, g2, C2) {
        A.rawrigidbodyset_rbSetAdditionalMass(this.__wbg_ptr, I2, g2, C2);
    }
    rbSetAdditionalMassProperties(I2, g2, C2, B2, Q2, E2) {
        K(C2, xA),
            K(B2, xA),
            K(Q2, HA),
            A.rawrigidbodyset_rbSetAdditionalMassProperties(
                this.__wbg_ptr,
                I2,
                g2,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr,
                E2
            );
    }
    rbLinvel(I2) {
        const g2 = A.rawrigidbodyset_rbLinvel(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbAngvel(I2) {
        const g2 = A.rawrigidbodyset_rbAngvel(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbLockTranslations(I2, g2, C2) {
        A.rawrigidbodyset_rbLockTranslations(this.__wbg_ptr, I2, g2, C2);
    }
    rbSetEnabledTranslations(I2, g2, C2, B2, Q2) {
        A.rawrigidbodyset_rbSetEnabledTranslations(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2,
            Q2
        );
    }
    rbLockRotations(I2, g2, C2) {
        A.rawrigidbodyset_rbLockRotations(this.__wbg_ptr, I2, g2, C2);
    }
    rbSetEnabledRotations(I2, g2, C2, B2, Q2) {
        A.rawrigidbodyset_rbSetEnabledRotations(
            this.__wbg_ptr,
            I2,
            g2,
            C2,
            B2,
            Q2
        );
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
    rbSetSoftCcdPrediction(I2, g2) {
        A.rawrigidbodyset_rbSetSoftCcdPrediction(this.__wbg_ptr, I2, g2);
    }
    rbMass(I2) {
        return A.rawrigidbodyset_rbMass(this.__wbg_ptr, I2);
    }
    rbInvMass(I2) {
        return A.rawrigidbodyset_rbInvMass(this.__wbg_ptr, I2);
    }
    rbEffectiveInvMass(I2) {
        const g2 = A.rawrigidbodyset_rbEffectiveInvMass(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbLocalCom(I2) {
        const g2 = A.rawrigidbodyset_rbLocalCom(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbWorldCom(I2) {
        const g2 = A.rawrigidbodyset_rbWorldCom(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbInvPrincipalInertiaSqrt(I2) {
        const g2 = A.rawrigidbodyset_rbInvPrincipalInertiaSqrt(
            this.__wbg_ptr,
            I2
        );
        return xA.__wrap(g2);
    }
    rbPrincipalInertiaLocalFrame(I2) {
        const g2 = A.rawrigidbodyset_rbPrincipalInertiaLocalFrame(
            this.__wbg_ptr,
            I2
        );
        return HA.__wrap(g2);
    }
    rbPrincipalInertia(I2) {
        const g2 = A.rawrigidbodyset_rbPrincipalInertia(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbEffectiveWorldInvInertiaSqrt(I2) {
        const g2 = A.rawrigidbodyset_rbEffectiveWorldInvInertiaSqrt(
            this.__wbg_ptr,
            I2
        );
        return pA.__wrap(g2);
    }
    rbEffectiveAngularInertia(I2) {
        const g2 = A.rawrigidbodyset_rbEffectiveAngularInertia(
            this.__wbg_ptr,
            I2
        );
        return pA.__wrap(g2);
    }
    rbWakeUp(I2) {
        A.rawrigidbodyset_rbWakeUp(this.__wbg_ptr, I2);
    }
    rbIsCcdEnabled(I2) {
        return A.rawrigidbodyset_rbIsCcdEnabled(this.__wbg_ptr, I2) !== 0;
    }
    rbSoftCcdPrediction(I2) {
        return A.rawrigidbodyset_rbSoftCcdPrediction(this.__wbg_ptr, I2);
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
        K(g2, xA),
            A.rawrigidbodyset_rbAddForce(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
    }
    rbApplyImpulse(I2, g2, C2) {
        K(g2, xA),
            A.rawrigidbodyset_rbApplyImpulse(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2
            );
    }
    rbAddTorque(I2, g2, C2) {
        K(g2, xA),
            A.rawrigidbodyset_rbAddTorque(this.__wbg_ptr, I2, g2.__wbg_ptr, C2);
    }
    rbApplyTorqueImpulse(I2, g2, C2) {
        K(g2, xA),
            A.rawrigidbodyset_rbApplyTorqueImpulse(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2
            );
    }
    rbAddForceAtPoint(I2, g2, C2, B2) {
        K(g2, xA),
            K(C2, xA),
            A.rawrigidbodyset_rbAddForceAtPoint(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2
            );
    }
    rbApplyImpulseAtPoint(I2, g2, C2, B2) {
        K(g2, xA),
            K(C2, xA),
            A.rawrigidbodyset_rbApplyImpulseAtPoint(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2
            );
    }
    rbAdditionalSolverIterations(I2) {
        return (
            A.rawrigidbodyset_rbAdditionalSolverIterations(
                this.__wbg_ptr,
                I2
            ) >>> 0
        );
    }
    rbSetAdditionalSolverIterations(I2, g2) {
        A.rawrigidbodyset_rbSetAdditionalSolverIterations(
            this.__wbg_ptr,
            I2,
            g2
        );
    }
    rbUserData(I2) {
        return A.rawrigidbodyset_rbUserData(this.__wbg_ptr, I2) >>> 0;
    }
    rbSetUserData(I2, g2) {
        A.rawrigidbodyset_rbSetUserData(this.__wbg_ptr, I2, g2);
    }
    rbUserForce(I2) {
        const g2 = A.rawrigidbodyset_rbUserForce(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    rbUserTorque(I2) {
        const g2 = A.rawrigidbodyset_rbUserTorque(this.__wbg_ptr, I2);
        return xA.__wrap(g2);
    }
    constructor() {
        const I2 = A.rawrigidbodyset_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    createRigidBody(
        I2,
        g2,
        C2,
        B2,
        Q2,
        E2,
        i2,
        D2,
        o2,
        S2,
        w2,
        G2,
        k2,
        J2,
        U2,
        h2,
        y2,
        N2,
        M2,
        F2,
        a2,
        s2,
        R2,
        c2,
        q2,
        Y2
    ) {
        K(g2, xA),
            K(C2, HA),
            K(i2, xA),
            K(D2, xA),
            K(o2, xA),
            K(S2, xA),
            K(w2, HA);
        return A.rawrigidbodyset_createRigidBody(
            this.__wbg_ptr,
            I2,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2,
            Q2,
            E2,
            i2.__wbg_ptr,
            D2.__wbg_ptr,
            o2.__wbg_ptr,
            S2.__wbg_ptr,
            w2.__wbg_ptr,
            G2,
            k2,
            J2,
            U2,
            h2,
            y2,
            N2,
            M2,
            F2,
            a2,
            s2,
            R2,
            c2,
            q2,
            Y2
        );
    }
    remove(I2, g2, C2, B2, Q2) {
        K(g2, EA),
            K(C2, d),
            K(B2, gA),
            K(Q2, SA),
            A.rawrigidbodyset_remove(
                this.__wbg_ptr,
                I2,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr
            );
    }
    len() {
        return A.rawcolliderset_len(this.__wbg_ptr) >>> 0;
    }
    contains(I2) {
        return A.rawrigidbodyset_contains(this.__wbg_ptr, I2) !== 0;
    }
    forEachRigidBodyHandle(g2) {
        try {
            A.rawrigidbodyset_forEachRigidBodyHandle(this.__wbg_ptr, y(g2));
        } finally {
            I[h++] = void 0;
        }
    }
    propagateModifiedBodyPositionsToColliders(I2) {
        K(I2, d),
            A.rawrigidbodyset_propagateModifiedBodyPositionsToColliders(
                this.__wbg_ptr,
                I2.__wbg_ptr
            );
    }
}
const LA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) => A.__wbg_rawrotation_free(I2 >>> 0));
class HA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(HA.prototype);
        return (I2.__wbg_ptr = A2), LA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), LA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawrotation_free(I2);
    }
    constructor(I2, g2, C2, B2) {
        const Q2 = A.rawrotation_new(I2, g2, C2, B2);
        return (this.__wbg_ptr = Q2 >>> 0), this;
    }
    static identity() {
        const I2 = A.rawrotation_identity();
        return HA.__wrap(I2);
    }
    get x() {
        return A.rawrotation_x(this.__wbg_ptr);
    }
    get y() {
        return A.rawintegrationparameters_dt(this.__wbg_ptr);
    }
    get z() {
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    get w() {
        return A.rawrotation_w(this.__wbg_ptr);
    }
}
const tA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawsdpmatrix3_free(I2 >>> 0)
          );
class pA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(pA.prototype);
        return (I2.__wbg_ptr = A2), tA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), tA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawsdpmatrix3_free(I2);
    }
    elements() {
        return Q(A.rawsdpmatrix3_elements(this.__wbg_ptr));
    }
}
const eA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawserializationpipeline_free(I2 >>> 0)
          );
class rA {
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), eA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawserializationpipeline_free(I2);
    }
    constructor() {
        const I2 = A.rawserializationpipeline_new();
        return (this.__wbg_ptr = I2 >>> 0), this;
    }
    serializeAll(I2, g2, C2, B2, E2, i2, D2, o2, S2) {
        K(I2, xA),
            K(g2, BA),
            K(C2, EA),
            K(B2, H),
            K(E2, GA),
            K(i2, lA),
            K(D2, d),
            K(o2, gA),
            K(S2, SA);
        return Q(
            A.rawserializationpipeline_serializeAll(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                E2.__wbg_ptr,
                i2.__wbg_ptr,
                D2.__wbg_ptr,
                o2.__wbg_ptr,
                S2.__wbg_ptr
            )
        );
    }
    deserializeAll(I2) {
        const g2 = A.rawserializationpipeline_deserializeAll(
            this.__wbg_ptr,
            C(I2)
        );
        return g2 === 0 ? void 0 : P.__wrap(g2);
    }
}
const nA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) => A.__wbg_rawshape_free(I2 >>> 0));
class dA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(dA.prototype);
        return (I2.__wbg_ptr = A2), nA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), nA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawshape_free(I2);
    }
    static cuboid(I2, g2, C2) {
        const B2 = A.rawshape_cuboid(I2, g2, C2);
        return dA.__wrap(B2);
    }
    static roundCuboid(I2, g2, C2, B2) {
        const Q2 = A.rawshape_roundCuboid(I2, g2, C2, B2);
        return dA.__wrap(Q2);
    }
    static ball(I2) {
        const g2 = A.rawshape_ball(I2);
        return dA.__wrap(g2);
    }
    static halfspace(I2) {
        K(I2, xA);
        const g2 = A.rawshape_halfspace(I2.__wbg_ptr);
        return dA.__wrap(g2);
    }
    static capsule(I2, g2) {
        const C2 = A.rawshape_capsule(I2, g2);
        return dA.__wrap(C2);
    }
    static cylinder(I2, g2) {
        const C2 = A.rawshape_cylinder(I2, g2);
        return dA.__wrap(C2);
    }
    static roundCylinder(I2, g2, C2) {
        const B2 = A.rawshape_roundCylinder(I2, g2, C2);
        return dA.__wrap(B2);
    }
    static cone(I2, g2) {
        const C2 = A.rawshape_cone(I2, g2);
        return dA.__wrap(C2);
    }
    static roundCone(I2, g2, C2) {
        const B2 = A.rawshape_roundCone(I2, g2, C2);
        return dA.__wrap(B2);
    }
    static polyline(I2, g2) {
        const C2 = s(I2, A.__wbindgen_malloc),
            B2 = a,
            Q2 = R(g2, A.__wbindgen_malloc),
            E2 = a,
            i2 = A.rawshape_polyline(C2, B2, Q2, E2);
        return dA.__wrap(i2);
    }
    static trimesh(I2, g2, C2) {
        const B2 = s(I2, A.__wbindgen_malloc),
            Q2 = a,
            E2 = R(g2, A.__wbindgen_malloc),
            i2 = a,
            D2 = A.rawshape_trimesh(B2, Q2, E2, i2, C2);
        return dA.__wrap(D2);
    }
    static heightfield(I2, g2, C2, B2, Q2) {
        const E2 = s(C2, A.__wbindgen_malloc),
            i2 = a;
        K(B2, xA);
        const D2 = A.rawshape_heightfield(I2, g2, E2, i2, B2.__wbg_ptr, Q2);
        return dA.__wrap(D2);
    }
    static segment(I2, g2) {
        K(I2, xA), K(g2, xA);
        const C2 = A.rawshape_segment(I2.__wbg_ptr, g2.__wbg_ptr);
        return dA.__wrap(C2);
    }
    static triangle(I2, g2, C2) {
        K(I2, xA), K(g2, xA), K(C2, xA);
        const B2 = A.rawshape_triangle(
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr
        );
        return dA.__wrap(B2);
    }
    static roundTriangle(I2, g2, C2, B2) {
        K(I2, xA), K(g2, xA), K(C2, xA);
        const Q2 = A.rawshape_roundTriangle(
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2
        );
        return dA.__wrap(Q2);
    }
    static convexHull(I2) {
        const g2 = s(I2, A.__wbindgen_malloc),
            C2 = a,
            B2 = A.rawshape_convexHull(g2, C2);
        return B2 === 0 ? void 0 : dA.__wrap(B2);
    }
    static roundConvexHull(I2, g2) {
        const C2 = s(I2, A.__wbindgen_malloc),
            B2 = a,
            Q2 = A.rawshape_roundConvexHull(C2, B2, g2);
        return Q2 === 0 ? void 0 : dA.__wrap(Q2);
    }
    static convexMesh(I2, g2) {
        const C2 = s(I2, A.__wbindgen_malloc),
            B2 = a,
            Q2 = R(g2, A.__wbindgen_malloc),
            E2 = a,
            i2 = A.rawshape_convexMesh(C2, B2, Q2, E2);
        return i2 === 0 ? void 0 : dA.__wrap(i2);
    }
    static roundConvexMesh(I2, g2, C2) {
        const B2 = s(I2, A.__wbindgen_malloc),
            Q2 = a,
            E2 = R(g2, A.__wbindgen_malloc),
            i2 = a,
            D2 = A.rawshape_roundConvexMesh(B2, Q2, E2, i2, C2);
        return D2 === 0 ? void 0 : dA.__wrap(D2);
    }
    castShape(I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2) {
        K(I2, xA),
            K(g2, HA),
            K(C2, xA),
            K(B2, dA),
            K(Q2, xA),
            K(E2, HA),
            K(i2, xA);
        const w2 = A.rawshape_castShape(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr,
            Q2.__wbg_ptr,
            E2.__wbg_ptr,
            i2.__wbg_ptr,
            D2,
            o2,
            S2
        );
        return w2 === 0 ? void 0 : OA.__wrap(w2);
    }
    intersectsShape(I2, g2, C2, B2, Q2) {
        K(I2, xA), K(g2, HA), K(C2, dA), K(B2, xA), K(Q2, HA);
        return (
            A.rawshape_intersectsShape(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2.__wbg_ptr
            ) !== 0
        );
    }
    contactShape(I2, g2, C2, B2, Q2, E2) {
        K(I2, xA), K(g2, HA), K(C2, dA), K(B2, xA), K(Q2, HA);
        const i2 = A.rawshape_contactShape(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr,
            Q2.__wbg_ptr,
            E2
        );
        return i2 === 0 ? void 0 : bA.__wrap(i2);
    }
    containsPoint(I2, g2, C2) {
        K(I2, xA), K(g2, HA), K(C2, xA);
        return (
            A.rawshape_containsPoint(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr
            ) !== 0
        );
    }
    projectPoint(I2, g2, C2, B2) {
        K(I2, xA), K(g2, HA), K(C2, xA);
        const Q2 = A.rawshape_projectPoint(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2
        );
        return yA.__wrap(Q2);
    }
    intersectsRay(I2, g2, C2, B2, Q2) {
        K(I2, xA), K(g2, HA), K(C2, xA), K(B2, xA);
        return (
            A.rawshape_intersectsRay(
                this.__wbg_ptr,
                I2.__wbg_ptr,
                g2.__wbg_ptr,
                C2.__wbg_ptr,
                B2.__wbg_ptr,
                Q2
            ) !== 0
        );
    }
    castRay(I2, g2, C2, B2, Q2, E2) {
        K(I2, xA), K(g2, HA), K(C2, xA), K(B2, xA);
        return A.rawshape_castRay(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr,
            Q2,
            E2
        );
    }
    castRayAndGetNormal(I2, g2, C2, B2, Q2, E2) {
        K(I2, xA), K(g2, HA), K(C2, xA), K(B2, xA);
        const i2 = A.rawshape_castRayAndGetNormal(
            this.__wbg_ptr,
            I2.__wbg_ptr,
            g2.__wbg_ptr,
            C2.__wbg_ptr,
            B2.__wbg_ptr,
            Q2,
            E2
        );
        return i2 === 0 ? void 0 : qA.__wrap(i2);
    }
}
const TA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawshapecasthit_free(I2 >>> 0)
          );
class OA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(OA.prototype);
        return (I2.__wbg_ptr = A2), TA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), TA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawshapecasthit_free(I2);
    }
    time_of_impact() {
        return A.rawrotation_x(this.__wbg_ptr);
    }
    witness1() {
        const I2 = A.rawshapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    witness2() {
        const I2 = A.rawcontactforceevent_total_force(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    normal1() {
        const I2 = A.rawshapecasthit_normal1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    normal2() {
        const I2 = A.rawshapecasthit_normal2(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
}
const ZA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) =>
              A.__wbg_rawshapecontact_free(I2 >>> 0)
          );
class bA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(bA.prototype);
        return (I2.__wbg_ptr = A2), ZA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), ZA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawshapecontact_free(I2);
    }
    distance() {
        return A.rawkinematiccharactercontroller_maxSlopeClimbAngle(
            this.__wbg_ptr
        );
    }
    point1() {
        const I2 = A.rawpointprojection_point(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    point2() {
        const I2 = A.rawcollidershapecasthit_witness1(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    normal1() {
        const I2 = A.rawcollidershapecasthit_witness2(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    normal2() {
        const I2 = A.rawcharactercollision_translationDeltaApplied(
            this.__wbg_ptr
        );
        return xA.__wrap(I2);
    }
}
const WA =
    typeof FinalizationRegistry == "undefined"
        ? { register: () => {}, unregister: () => {} }
        : new FinalizationRegistry((I2) => A.__wbg_rawvector_free(I2 >>> 0));
class xA {
    static __wrap(A2) {
        A2 >>>= 0;
        const I2 = Object.create(xA.prototype);
        return (I2.__wbg_ptr = A2), WA.register(I2, I2.__wbg_ptr, I2), I2;
    }
    __destroy_into_raw() {
        const A2 = this.__wbg_ptr;
        return (this.__wbg_ptr = 0), WA.unregister(this), A2;
    }
    free() {
        const I2 = this.__destroy_into_raw();
        A.__wbg_rawvector_free(I2);
    }
    static zero() {
        const I2 = A.rawvector_zero();
        return xA.__wrap(I2);
    }
    constructor(I2, g2, C2) {
        const B2 = A.rawvector_new(I2, g2, C2);
        return (this.__wbg_ptr = B2 >>> 0), this;
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
        return A.rawcollidershapecasthit_time_of_impact(this.__wbg_ptr);
    }
    set z(I2) {
        A.rawvector_set_z(this.__wbg_ptr, I2);
    }
    xyz() {
        const I2 = A.rawvector_xyz(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    yxz() {
        const I2 = A.rawvector_yxz(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    zxy() {
        const I2 = A.rawvector_zxy(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    xzy() {
        const I2 = A.rawvector_xzy(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    yzx() {
        const I2 = A.rawvector_yzx(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
    zyx() {
        const I2 = A.rawvector_zyx(this.__wbg_ptr);
        return xA.__wrap(I2);
    }
}
async function mA(I2) {
    if (A !== void 0) return A;
    I2 === void 0 && (I2 = new URL("rapier_wasm3d_bg.wasm", "<deleted>"));
    const g2 = (function () {
        const I3 = { wbg: {} };
        return (
            (I3.wbg.__wbindgen_number_new = function (A2) {
                return C(A2);
            }),
            (I3.wbg.__wbindgen_boolean_get = function (A2) {
                const I4 = B(A2);
                return typeof I4 == "boolean" ? (I4 ? 1 : 0) : 2;
            }),
            (I3.wbg.__wbindgen_object_drop_ref = function (A2) {
                Q(A2);
            }),
            (I3.wbg.__wbindgen_number_get = function (A2, I4) {
                const g3 = B(I4),
                    C2 = typeof g3 == "number" ? g3 : void 0;
                (D()[A2 / 8 + 1] = E(C2) ? 0 : C2), (S()[A2 / 4 + 0] = !E(C2));
            }),
            (I3.wbg.__wbindgen_is_function = function (A2) {
                return typeof B(A2) == "function";
            }),
            (I3.wbg.__wbg_rawraycolliderintersection_new = function (A2) {
                return C(RA.__wrap(A2));
            }),
            (I3.wbg.__wbg_rawcontactforceevent_new = function (A2) {
                return C(b.__wrap(A2));
            }),
            (I3.wbg.__wbg_call_b3ca7c6051f9bec1 = function () {
                return c(function (A2, I4, g3) {
                    return C(B(A2).call(B(I4), B(g3)));
                }, arguments);
            }),
            (I3.wbg.__wbg_call_8e7cb608789c2528 = function () {
                return c(function (A2, I4, g3, Q2) {
                    return C(B(A2).call(B(I4), B(g3), B(Q2)));
                }, arguments);
            }),
            (I3.wbg.__wbg_call_938992c832f74314 = function () {
                return c(function (A2, I4, g3, Q2, E2) {
                    return C(B(A2).call(B(I4), B(g3), B(Q2), B(E2)));
                }, arguments);
            }),
            (I3.wbg.__wbg_bind_4d857b598695205e = function (A2, I4, g3, Q2) {
                return C(B(A2).bind(B(I4), B(g3), B(Q2)));
            }),
            (I3.wbg.__wbg_buffer_12d079cc21e14bdb = function (A2) {
                return C(B(A2).buffer);
            }),
            (I3.wbg.__wbg_newwithbyteoffsetandlength_aa4a17c33a06e5cb =
                function (A2, I4, g3) {
                    return C(new Uint8Array(B(A2), I4 >>> 0, g3 >>> 0));
                }),
            (I3.wbg.__wbg_new_63b92bc8671ed464 = function (A2) {
                return C(new Uint8Array(B(A2)));
            }),
            (I3.wbg.__wbg_set_a47bac70306a19a7 = function (A2, I4, g3) {
                B(A2).set(B(I4), g3 >>> 0);
            }),
            (I3.wbg.__wbg_length_c20a40f15020d68a = function (A2) {
                return B(A2).length;
            }),
            (I3.wbg.__wbg_newwithbyteoffsetandlength_4a659d079a1650e0 =
                function (A2, I4, g3) {
                    return C(new Float32Array(B(A2), I4 >>> 0, g3 >>> 0));
                }),
            (I3.wbg.__wbg_set_bd975934d1b1fddb = function (A2, I4, g3) {
                B(A2).set(B(I4), g3 >>> 0);
            }),
            (I3.wbg.__wbg_length_d25bbcbc3367f684 = function (A2) {
                return B(A2).length;
            }),
            (I3.wbg.__wbg_newwithlength_1e8b839a06de01c5 = function (A2) {
                return C(new Float32Array(A2 >>> 0));
            }),
            (I3.wbg.__wbindgen_throw = function (A2, I4) {
                throw new Error(k(A2, I4));
            }),
            (I3.wbg.__wbindgen_memory = function () {
                return C(A.memory);
            }),
            I3
        );
    })();
    (typeof I2 == "string" ||
        (typeof Request == "function" && I2 instanceof Request) ||
        (typeof URL == "function" && I2 instanceof URL)) &&
        (I2 = fetch(I2));
    const { instance: w2, module: K2 } = await (async function (A2, I3) {
        if (typeof Response == "function" && A2 instanceof Response) {
            if (typeof WebAssembly.instantiateStreaming == "function")
                try {
                    return await WebAssembly.instantiateStreaming(A2, I3);
                } catch (I4) {
                    if (A2.headers.get("Content-Type") == "application/wasm")
                        throw I4;
                    console.warn(
                        "`WebAssembly.instantiateStreaming` failed because your server does not serve wasm with `application/wasm` MIME type. Falling back to `WebAssembly.instantiate` which is slower. Original error:\n",
                        I4
                    );
                }
            const g3 = await A2.arrayBuffer();
            return await WebAssembly.instantiate(g3, I3);
        }
        {
            const g3 = await WebAssembly.instantiate(A2, I3);
            return g3 instanceof WebAssembly.Instance
                ? { instance: g3, module: A2 }
                : g3;
        }
    })(await I2, g2);
    return (function (I3, g3) {
        return (
            (A = I3.exports),
            (mA.__wbindgen_wasm_module = g3),
            (J = null),
            (i = null),
            (o = null),
            (M = null),
            (G = null),
            A
        );
    })(w2, K2);
}
class jA {
    constructor(A2, I2, g2) {
        (this.x = A2), (this.y = I2), (this.z = g2);
    }
}
class fA {
    static new(A2, I2, g2) {
        return new jA(A2, I2, g2);
    }
    static intoRaw(A2) {
        return new xA(A2.x, A2.y, A2.z);
    }
    static zeros() {
        return fA.new(0, 0, 0);
    }
    static fromRaw(A2) {
        if (!A2) return null;
        let I2 = fA.new(A2.x, A2.y, A2.z);
        return A2.free(), I2;
    }
    static copy(A2, I2) {
        (A2.x = I2.x), (A2.y = I2.y), (A2.z = I2.z);
    }
}
class VA {
    constructor(A2, I2, g2, C2) {
        (this.x = A2), (this.y = I2), (this.z = g2), (this.w = C2);
    }
}
class XA {
    static identity() {
        return new VA(0, 0, 0, 1);
    }
    static fromRaw(A2) {
        if (!A2) return null;
        let I2 = new VA(A2.x, A2.y, A2.z, A2.w);
        return A2.free(), I2;
    }
    static intoRaw(A2) {
        return new HA(A2.x, A2.y, A2.z, A2.w);
    }
    static copy(A2, I2) {
        (A2.x = I2.x), (A2.y = I2.y), (A2.z = I2.z), (A2.w = I2.w);
    }
}
class PA {
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
class uA {
    static fromRaw(A2) {
        const I2 = new PA(A2.elements());
        return A2.free(), I2;
    }
}
var vA, zA, _A, $A, AI, II, gI, CI, BI, QI, EI, iI, DI, oI, SI;
!(function (A2) {
    (A2[(A2.Dynamic = 0)] = "Dynamic"),
        (A2[(A2.Fixed = 1)] = "Fixed"),
        (A2[(A2.KinematicPositionBased = 2)] = "KinematicPositionBased"),
        (A2[(A2.KinematicVelocityBased = 3)] = "KinematicVelocityBased");
})(vA || (vA = {}));
class wI {
    constructor(A2, I2, g2) {
        (this.rawSet = A2), (this.colliderSet = I2), (this.handle = g2);
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
        return this.rawSet.rbSetEnabledTranslations(
            this.handle,
            A2,
            I2,
            g2,
            C2
        );
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
    setSoftCcdPrediction(A2) {
        this.rawSet.rbSetSoftCcdPrediction(this.handle, A2);
    }
    softCcdPrediction() {
        return this.rawSet.rbSoftCcdPrediction(this.handle);
    }
    translation() {
        let A2 = this.rawSet.rbTranslation(this.handle);
        return fA.fromRaw(A2);
    }
    rotation() {
        let A2 = this.rawSet.rbRotation(this.handle);
        return XA.fromRaw(A2);
    }
    nextTranslation() {
        let A2 = this.rawSet.rbNextTranslation(this.handle);
        return fA.fromRaw(A2);
    }
    nextRotation() {
        let A2 = this.rawSet.rbNextRotation(this.handle);
        return XA.fromRaw(A2);
    }
    setTranslation(A2, I2) {
        this.rawSet.rbSetTranslation(this.handle, A2.x, A2.y, A2.z, I2);
    }
    setLinvel(A2, I2) {
        let g2 = fA.intoRaw(A2);
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
        let g2 = fA.intoRaw(A2);
        this.rawSet.rbSetAngvel(this.handle, g2, I2), g2.free();
    }
    setNextKinematicTranslation(A2) {
        this.rawSet.rbSetNextKinematicTranslation(
            this.handle,
            A2.x,
            A2.y,
            A2.z
        );
    }
    setNextKinematicRotation(A2) {
        this.rawSet.rbSetNextKinematicRotation(
            this.handle,
            A2.x,
            A2.y,
            A2.z,
            A2.w
        );
    }
    linvel() {
        return fA.fromRaw(this.rawSet.rbLinvel(this.handle));
    }
    angvel() {
        return fA.fromRaw(this.rawSet.rbAngvel(this.handle));
    }
    mass() {
        return this.rawSet.rbMass(this.handle);
    }
    effectiveInvMass() {
        return fA.fromRaw(this.rawSet.rbEffectiveInvMass(this.handle));
    }
    invMass() {
        return this.rawSet.rbInvMass(this.handle);
    }
    localCom() {
        return fA.fromRaw(this.rawSet.rbLocalCom(this.handle));
    }
    worldCom() {
        return fA.fromRaw(this.rawSet.rbWorldCom(this.handle));
    }
    invPrincipalInertiaSqrt() {
        return fA.fromRaw(this.rawSet.rbInvPrincipalInertiaSqrt(this.handle));
    }
    principalInertia() {
        return fA.fromRaw(this.rawSet.rbPrincipalInertia(this.handle));
    }
    principalInertiaLocalFrame() {
        return XA.fromRaw(
            this.rawSet.rbPrincipalInertiaLocalFrame(this.handle)
        );
    }
    effectiveWorldInvInertiaSqrt() {
        return uA.fromRaw(
            this.rawSet.rbEffectiveWorldInvInertiaSqrt(this.handle)
        );
    }
    effectiveAngularInertia() {
        return uA.fromRaw(this.rawSet.rbEffectiveAngularInertia(this.handle));
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
        this.rawSet.rbRecomputeMassPropertiesFromColliders(
            this.handle,
            this.colliderSet.raw
        );
    }
    setAdditionalMass(A2, I2) {
        this.rawSet.rbSetAdditionalMass(this.handle, A2, I2);
    }
    setAdditionalMassProperties(A2, I2, g2, C2, B2) {
        let Q2 = fA.intoRaw(I2),
            E2 = fA.intoRaw(g2),
            i2 = XA.intoRaw(C2);
        this.rawSet.rbSetAdditionalMassProperties(
            this.handle,
            A2,
            Q2,
            E2,
            i2,
            B2
        ),
            Q2.free(),
            E2.free(),
            i2.free();
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
        const g2 = fA.intoRaw(A2);
        this.rawSet.rbAddForce(this.handle, g2, I2), g2.free();
    }
    applyImpulse(A2, I2) {
        const g2 = fA.intoRaw(A2);
        this.rawSet.rbApplyImpulse(this.handle, g2, I2), g2.free();
    }
    addTorque(A2, I2) {
        const g2 = fA.intoRaw(A2);
        this.rawSet.rbAddTorque(this.handle, g2, I2), g2.free();
    }
    applyTorqueImpulse(A2, I2) {
        const g2 = fA.intoRaw(A2);
        this.rawSet.rbApplyTorqueImpulse(this.handle, g2, I2), g2.free();
    }
    addForceAtPoint(A2, I2, g2) {
        const C2 = fA.intoRaw(A2),
            B2 = fA.intoRaw(I2);
        this.rawSet.rbAddForceAtPoint(this.handle, C2, B2, g2),
            C2.free(),
            B2.free();
    }
    applyImpulseAtPoint(A2, I2, g2) {
        const C2 = fA.intoRaw(A2),
            B2 = fA.intoRaw(I2);
        this.rawSet.rbApplyImpulseAtPoint(this.handle, C2, B2, g2),
            C2.free(),
            B2.free();
    }
    userForce() {
        return fA.fromRaw(this.rawSet.rbUserForce(this.handle));
    }
    userTorque() {
        return fA.fromRaw(this.rawSet.rbUserTorque(this.handle));
    }
}
class GI {
    constructor(A2) {
        (this.enabled = true),
            (this.status = A2),
            (this.translation = fA.zeros()),
            (this.rotation = XA.identity()),
            (this.gravityScale = 1),
            (this.linvel = fA.zeros()),
            (this.mass = 0),
            (this.massOnly = false),
            (this.centerOfMass = fA.zeros()),
            (this.translationsEnabledX = true),
            (this.translationsEnabledY = true),
            (this.angvel = fA.zeros()),
            (this.principalAngularInertia = fA.zeros()),
            (this.angularInertiaLocalFrame = XA.identity()),
            (this.translationsEnabledZ = true),
            (this.rotationsEnabledX = true),
            (this.rotationsEnabledY = true),
            (this.rotationsEnabledZ = true),
            (this.linearDamping = 0),
            (this.angularDamping = 0),
            (this.canSleep = true),
            (this.sleeping = false),
            (this.ccdEnabled = false),
            (this.softCcdPrediction = 0),
            (this.dominanceGroup = 0),
            (this.additionalSolverIterations = 0);
    }
    static dynamic() {
        return new GI(vA.Dynamic);
    }
    static kinematicPositionBased() {
        return new GI(vA.KinematicPositionBased);
    }
    static kinematicVelocityBased() {
        return new GI(vA.KinematicVelocityBased);
    }
    static fixed() {
        return new GI(vA.Fixed);
    }
    static newDynamic() {
        return new GI(vA.Dynamic);
    }
    static newKinematicPositionBased() {
        return new GI(vA.KinematicPositionBased);
    }
    static newKinematicVelocityBased() {
        return new GI(vA.KinematicVelocityBased);
    }
    static newStatic() {
        return new GI(vA.Fixed);
    }
    setDominanceGroup(A2) {
        return (this.dominanceGroup = A2), this;
    }
    setAdditionalSolverIterations(A2) {
        return (this.additionalSolverIterations = A2), this;
    }
    setEnabled(A2) {
        return (this.enabled = A2), this;
    }
    setTranslation(A2, I2, g2) {
        if (
            typeof A2 != "number" ||
            typeof I2 != "number" ||
            typeof g2 != "number"
        )
            throw TypeError("The translation components must be numbers.");
        return (this.translation = { x: A2, y: I2, z: g2 }), this;
    }
    setRotation(A2) {
        return XA.copy(this.rotation, A2), this;
    }
    setGravityScale(A2) {
        return (this.gravityScale = A2), this;
    }
    setAdditionalMass(A2) {
        return (this.mass = A2), (this.massOnly = true), this;
    }
    setLinvel(A2, I2, g2) {
        if (
            typeof A2 != "number" ||
            typeof I2 != "number" ||
            typeof g2 != "number"
        )
            throw TypeError("The linvel components must be numbers.");
        return (this.linvel = { x: A2, y: I2, z: g2 }), this;
    }
    setAngvel(A2) {
        return fA.copy(this.angvel, A2), this;
    }
    setAdditionalMassProperties(A2, I2, g2, C2) {
        return (
            (this.mass = A2),
            fA.copy(this.centerOfMass, I2),
            fA.copy(this.principalAngularInertia, g2),
            XA.copy(this.angularInertiaLocalFrame, C2),
            (this.massOnly = false),
            this
        );
    }
    enabledTranslations(A2, I2, g2) {
        return (
            (this.translationsEnabledX = A2),
            (this.translationsEnabledY = I2),
            (this.translationsEnabledZ = g2),
            this
        );
    }
    restrictTranslations(A2, I2, g2) {
        return this.enabledTranslations(A2, I2, g2);
    }
    lockTranslations() {
        return this.enabledTranslations(false, false, false);
    }
    enabledRotations(A2, I2, g2) {
        return (
            (this.rotationsEnabledX = A2),
            (this.rotationsEnabledY = I2),
            (this.rotationsEnabledZ = g2),
            this
        );
    }
    restrictRotations(A2, I2, g2) {
        return this.enabledRotations(A2, I2, g2);
    }
    lockRotations() {
        return this.restrictRotations(false, false, false);
    }
    setLinearDamping(A2) {
        return (this.linearDamping = A2), this;
    }
    setAngularDamping(A2) {
        return (this.angularDamping = A2), this;
    }
    setCanSleep(A2) {
        return (this.canSleep = A2), this;
    }
    setSleeping(A2) {
        return (this.sleeping = A2), this;
    }
    setCcdEnabled(A2) {
        return (this.ccdEnabled = A2), this;
    }
    setSoftCcdPrediction(A2) {
        return (this.softCcdPrediction = A2), this;
    }
    setUserData(A2) {
        return (this.userData = A2), this;
    }
}
class kI {
    constructor() {
        (this.fconv = new Float64Array(1)),
            (this.uconv = new Uint32Array(this.fconv.buffer)),
            (this.data = new Array()),
            (this.size = 0);
    }
    set(A2, I2) {
        let g2 = this.index(A2);
        for (; this.data.length <= g2; ) this.data.push(null);
        this.data[g2] == null && (this.size += 1), (this.data[g2] = I2);
    }
    len() {
        return this.size;
    }
    delete(A2) {
        let I2 = this.index(A2);
        I2 < this.data.length &&
            (this.data[I2] != null && (this.size -= 1), (this.data[I2] = null));
    }
    clear() {
        this.data = new Array();
    }
    get(A2) {
        let I2 = this.index(A2);
        return I2 < this.data.length ? this.data[I2] : null;
    }
    forEach(A2) {
        for (const I2 of this.data) I2 != null && A2(I2);
    }
    getAll() {
        return this.data.filter((A2) => A2 != null);
    }
    index(A2) {
        return (this.fconv[0] = A2), this.uconv[0];
    }
}
class KI {
    constructor(A2) {
        (this.raw = A2 || new lA()),
            (this.map = new kI()),
            A2 &&
                A2.forEachRigidBodyHandle((I2) => {
                    this.map.set(I2, new wI(A2, null, I2));
                });
    }
    free() {
        this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
    }
    finalizeDeserialization(A2) {
        this.map.forEach((I2) => I2.finalizeDeserialization(A2));
    }
    createRigidBody(A2, I2) {
        let g2 = fA.intoRaw(I2.translation),
            C2 = XA.intoRaw(I2.rotation),
            B2 = fA.intoRaw(I2.linvel),
            Q2 = fA.intoRaw(I2.centerOfMass),
            E2 = fA.intoRaw(I2.angvel),
            i2 = fA.intoRaw(I2.principalAngularInertia),
            D2 = XA.intoRaw(I2.angularInertiaLocalFrame),
            o2 = this.raw.createRigidBody(
                I2.enabled,
                g2,
                C2,
                I2.gravityScale,
                I2.mass,
                I2.massOnly,
                Q2,
                B2,
                E2,
                i2,
                D2,
                I2.translationsEnabledX,
                I2.translationsEnabledY,
                I2.translationsEnabledZ,
                I2.rotationsEnabledX,
                I2.rotationsEnabledY,
                I2.rotationsEnabledZ,
                I2.linearDamping,
                I2.angularDamping,
                I2.status,
                I2.canSleep,
                I2.sleeping,
                I2.softCcdPrediction,
                I2.ccdEnabled,
                I2.dominanceGroup,
                I2.additionalSolverIterations
            );
        g2.free(),
            C2.free(),
            B2.free(),
            Q2.free(),
            E2.free(),
            i2.free(),
            D2.free();
        const S2 = new wI(this.raw, A2, o2);
        return (S2.userData = I2.userData), this.map.set(o2, S2), S2;
    }
    remove(A2, I2, g2, C2, B2) {
        for (let I3 = 0; I3 < this.raw.rbNumColliders(A2); I3 += 1)
            g2.unmap(this.raw.rbCollider(A2, I3));
        C2.forEachJointHandleAttachedToRigidBody(A2, (A3) => C2.unmap(A3)),
            B2.forEachJointHandleAttachedToRigidBody(A2, (A3) => B2.unmap(A3)),
            this.raw.remove(A2, I2.raw, g2.raw, C2.raw, B2.raw),
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
    forEachActiveRigidBody(A2, I2) {
        A2.forEachActiveRigidBodyHandle((A3) => {
            I2(this.get(A3));
        });
    }
    getAll() {
        return this.map.getAll();
    }
}
class JI {
    constructor(A2) {
        this.raw = A2 || new BA();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    get dt() {
        return this.raw.dt;
    }
    get contact_erp() {
        return this.raw.contact_erp;
    }
    get lengthUnit() {
        return this.raw.lengthUnit;
    }
    get normalizedAllowedLinearError() {
        return this.raw.normalizedAllowedLinearError;
    }
    get normalizedPredictionDistance() {
        return this.raw.normalizedPredictionDistance;
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
    set contact_natural_frequency(A2) {
        this.raw.contact_natural_frequency = A2;
    }
    set lengthUnit(A2) {
        this.raw.lengthUnit = A2;
    }
    set normalizedAllowedLinearError(A2) {
        this.raw.normalizedAllowedLinearError = A2;
    }
    set normalizedPredictionDistance(A2) {
        this.raw.normalizedPredictionDistance = A2;
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
    switchToSmallStepsPgsSolverWithoutWarmstart() {
        this.raw.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
}
!(function (A2) {
    (A2[(A2.Revolute = 0)] = "Revolute"),
        (A2[(A2.Fixed = 1)] = "Fixed"),
        (A2[(A2.Prismatic = 2)] = "Prismatic"),
        (A2[(A2.Rope = 3)] = "Rope"),
        (A2[(A2.Spring = 4)] = "Spring"),
        (A2[(A2.Spherical = 5)] = "Spherical"),
        (A2[(A2.Generic = 6)] = "Generic");
})(zA || (zA = {})),
    (function (A2) {
        (A2[(A2.AccelerationBased = 0)] = "AccelerationBased"),
            (A2[(A2.ForceBased = 1)] = "ForceBased");
    })(_A || (_A = {})),
    (function (A2) {
        (A2[(A2.LinX = 1)] = "LinX"),
            (A2[(A2.LinY = 2)] = "LinY"),
            (A2[(A2.LinZ = 4)] = "LinZ"),
            (A2[(A2.AngX = 8)] = "AngX"),
            (A2[(A2.AngY = 16)] = "AngY"),
            (A2[(A2.AngZ = 32)] = "AngZ");
    })($A || ($A = {}));
class UI {
    constructor(A2, I2, g2) {
        (this.rawSet = A2), (this.bodySet = I2), (this.handle = g2);
    }
    static newTyped(A2, I2, g2) {
        switch (A2.jointType(g2)) {
            case Y.Revolute:
                return new aI(A2, I2, g2);
            case Y.Prismatic:
                return new FI(A2, I2, g2);
            case Y.Fixed:
                return new yI(A2, I2, g2);
            case Y.Spring:
                return new MI(A2, I2, g2);
            case Y.Rope:
                return new NI(A2, I2, g2);
            case Y.Spherical:
                return new RI(A2, I2, g2);
            case Y.Generic:
                return new sI(A2, I2, g2);
            default:
                return new UI(A2, I2, g2);
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
        return XA.fromRaw(this.rawSet.jointFrameX1(this.handle));
    }
    frameX2() {
        return XA.fromRaw(this.rawSet.jointFrameX2(this.handle));
    }
    anchor1() {
        return fA.fromRaw(this.rawSet.jointAnchor1(this.handle));
    }
    anchor2() {
        return fA.fromRaw(this.rawSet.jointAnchor2(this.handle));
    }
    setAnchor1(A2) {
        const I2 = fA.intoRaw(A2);
        this.rawSet.jointSetAnchor1(this.handle, I2), I2.free();
    }
    setAnchor2(A2) {
        const I2 = fA.intoRaw(A2);
        this.rawSet.jointSetAnchor2(this.handle, I2), I2.free();
    }
    setContactsEnabled(A2) {
        this.rawSet.jointSetContactsEnabled(this.handle, A2);
    }
    contactsEnabled() {
        return this.rawSet.jointContactsEnabled(this.handle);
    }
}
class hI extends UI {
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
        this.rawSet.jointConfigureMotorVelocity(
            this.handle,
            this.rawAxis(),
            A2,
            I2
        );
    }
    configureMotorPosition(A2, I2, g2) {
        this.rawSet.jointConfigureMotorPosition(
            this.handle,
            this.rawAxis(),
            A2,
            I2,
            g2
        );
    }
    configureMotor(A2, I2, g2, C2) {
        this.rawSet.jointConfigureMotor(
            this.handle,
            this.rawAxis(),
            A2,
            I2,
            g2,
            C2
        );
    }
}
class yI extends UI {}
class NI extends UI {}
class MI extends UI {}
class FI extends hI {
    rawAxis() {
        return q.LinX;
    }
}
class aI extends hI {
    rawAxis() {
        return q.AngX;
    }
}
class sI extends UI {}
class RI extends UI {}
class cI {
    constructor() {}
    static fixed(A2, I2, g2, C2) {
        let B2 = new cI();
        return (
            (B2.anchor1 = A2),
            (B2.anchor2 = g2),
            (B2.frame1 = I2),
            (B2.frame2 = C2),
            (B2.jointType = zA.Fixed),
            B2
        );
    }
    static spring(A2, I2, g2, C2, B2) {
        let Q2 = new cI();
        return (
            (Q2.anchor1 = C2),
            (Q2.anchor2 = B2),
            (Q2.length = A2),
            (Q2.stiffness = I2),
            (Q2.damping = g2),
            (Q2.jointType = zA.Spring),
            Q2
        );
    }
    static rope(A2, I2, g2) {
        let C2 = new cI();
        return (
            (C2.anchor1 = I2),
            (C2.anchor2 = g2),
            (C2.length = A2),
            (C2.jointType = zA.Rope),
            C2
        );
    }
    static generic(A2, I2, g2, C2) {
        let B2 = new cI();
        return (
            (B2.anchor1 = A2),
            (B2.anchor2 = I2),
            (B2.axis = g2),
            (B2.axesMask = C2),
            (B2.jointType = zA.Generic),
            B2
        );
    }
    static spherical(A2, I2) {
        let g2 = new cI();
        return (
            (g2.anchor1 = A2),
            (g2.anchor2 = I2),
            (g2.jointType = zA.Spherical),
            g2
        );
    }
    static prismatic(A2, I2, g2) {
        let C2 = new cI();
        return (
            (C2.anchor1 = A2),
            (C2.anchor2 = I2),
            (C2.axis = g2),
            (C2.jointType = zA.Prismatic),
            C2
        );
    }
    static revolute(A2, I2, g2) {
        let C2 = new cI();
        return (
            (C2.anchor1 = A2),
            (C2.anchor2 = I2),
            (C2.axis = g2),
            (C2.jointType = zA.Revolute),
            C2
        );
    }
    intoRaw() {
        let A2,
            I2,
            g2 = fA.intoRaw(this.anchor1),
            C2 = fA.intoRaw(this.anchor2),
            B2 = false,
            Q2 = 0,
            E2 = 0;
        switch (this.jointType) {
            case zA.Fixed:
                let i2 = XA.intoRaw(this.frame1),
                    D2 = XA.intoRaw(this.frame2);
                (I2 = AA.fixed(g2, i2, C2, D2)), i2.free(), D2.free();
                break;
            case zA.Spring:
                I2 = AA.spring(
                    this.length,
                    this.stiffness,
                    this.damping,
                    g2,
                    C2
                );
                break;
            case zA.Rope:
                I2 = AA.rope(this.length, g2, C2);
                break;
            case zA.Prismatic:
                (A2 = fA.intoRaw(this.axis)),
                    this.limitsEnabled &&
                        ((B2 = true),
                        (Q2 = this.limits[0]),
                        (E2 = this.limits[1])),
                    (I2 = AA.prismatic(g2, C2, A2, B2, Q2, E2)),
                    A2.free();
                break;
            case zA.Generic:
                A2 = fA.intoRaw(this.axis);
                let o2 = this.axesMask;
                I2 = AA.generic(g2, C2, A2, o2);
                break;
            case zA.Spherical:
                I2 = AA.spherical(g2, C2);
                break;
            case zA.Revolute:
                (A2 = fA.intoRaw(this.axis)),
                    (I2 = AA.revolute(g2, C2, A2)),
                    A2.free();
        }
        return g2.free(), C2.free(), I2;
    }
}
class qI {
    constructor(A2) {
        (this.raw = A2 || new gA()),
            (this.map = new kI()),
            A2 &&
                A2.forEachJointHandle((I2) => {
                    this.map.set(I2, UI.newTyped(A2, null, I2));
                });
    }
    free() {
        this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
    }
    finalizeDeserialization(A2) {
        this.map.forEach((I2) => I2.finalizeDeserialization(A2));
    }
    createJoint(A2, I2, g2, C2, B2) {
        const Q2 = I2.intoRaw(),
            E2 = this.raw.createJoint(Q2, g2, C2, B2);
        Q2.free();
        let i2 = UI.newTyped(this.raw, A2, E2);
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
class YI {
    constructor(A2, I2) {
        (this.rawSet = A2), (this.handle = I2);
    }
    static newTyped(A2, I2) {
        switch (A2.jointType(I2)) {
            case Y.Revolute:
                return new tI(A2, I2);
            case Y.Prismatic:
                return new HI(A2, I2);
            case Y.Fixed:
                return new LI(A2, I2);
            case Y.Spherical:
                return new pI(A2, I2);
            default:
                return new YI(A2, I2);
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
class lI extends YI {}
class LI extends YI {}
class HI extends lI {
    rawAxis() {
        return q.LinX;
    }
}
class tI extends lI {
    rawAxis() {
        return q.AngX;
    }
}
class pI extends YI {}
class eI {
    constructor(A2) {
        (this.raw = A2 || new SA()),
            (this.map = new kI()),
            A2 &&
                A2.forEachJointHandle((A3) => {
                    this.map.set(A3, YI.newTyped(this.raw, A3));
                });
    }
    free() {
        this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
    }
    createJoint(A2, I2, g2, C2) {
        const B2 = A2.intoRaw(),
            Q2 = this.raw.createJoint(B2, I2, g2, C2);
        B2.free();
        let E2 = YI.newTyped(this.raw, Q2);
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
!(function (A2) {
    (A2[(A2.Average = 0)] = "Average"),
        (A2[(A2.Min = 1)] = "Min"),
        (A2[(A2.Multiply = 2)] = "Multiply"),
        (A2[(A2.Max = 3)] = "Max");
})(AI || (AI = {}));
class rI {
    constructor(A2) {
        this.raw = A2 || new p();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
}
class nI {
    constructor(A2) {
        this.raw = A2 || new EA();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    forEachActiveRigidBodyHandle(A2) {
        this.raw.forEachActiveRigidBodyHandle(A2);
    }
}
class dI {
    constructor(A2) {
        this.raw = A2 || new H();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
}
class TI {
    constructor(A2) {
        (this.raw = A2 || new GA()), (this.tempManifold = new OI(null));
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
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
                (this.tempManifold.raw = C2.contactManifold(B2)),
                    this.tempManifold.raw && g2(this.tempManifold, I3),
                    this.tempManifold.free();
            C2.free();
        }
    }
    intersectionPair(A2, I2) {
        return this.raw.intersection_pair(A2, I2);
    }
}
class OI {
    constructor(A2) {
        this.raw = A2;
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    normal() {
        return fA.fromRaw(this.raw.normal());
    }
    localNormal1() {
        return fA.fromRaw(this.raw.local_n1());
    }
    localNormal2() {
        return fA.fromRaw(this.raw.local_n2());
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
        return fA.fromRaw(this.raw.contact_local_p1(A2));
    }
    localContactPoint2(A2) {
        return fA.fromRaw(this.raw.contact_local_p2(A2));
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
        return fA.fromRaw(this.raw.solver_contact_point(A2));
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
        return fA.fromRaw(this.raw.solver_contact_tangent_velocity(A2));
    }
}
class ZI {
    constructor(A2, I2, g2, C2, B2) {
        (this.distance = A2),
            (this.point1 = I2),
            (this.point2 = g2),
            (this.normal1 = C2),
            (this.normal2 = B2);
    }
    static fromRaw(A2) {
        if (!A2) return null;
        const I2 = new ZI(
            A2.distance(),
            fA.fromRaw(A2.point1()),
            fA.fromRaw(A2.point2()),
            fA.fromRaw(A2.normal1()),
            fA.fromRaw(A2.normal2())
        );
        return A2.free(), I2;
    }
}
!(function (A2) {
    (A2[(A2.Vertex = 0)] = "Vertex"),
        (A2[(A2.Edge = 1)] = "Edge"),
        (A2[(A2.Face = 2)] = "Face"),
        (A2[(A2.Unknown = 3)] = "Unknown");
})(II || (II = {}));
class bI {
    constructor(A2, I2) {
        (this.point = A2), (this.isInside = I2);
    }
    static fromRaw(A2) {
        if (!A2) return null;
        const I2 = new bI(fA.fromRaw(A2.point()), A2.isInside());
        return A2.free(), I2;
    }
}
class WI {
    constructor(A2, I2, g2, C2, B2) {
        (this.featureType = II.Unknown),
            (this.featureId = void 0),
            (this.collider = A2),
            (this.point = I2),
            (this.isInside = g2),
            B2 !== void 0 && (this.featureId = B2),
            C2 !== void 0 && (this.featureType = C2);
    }
    static fromRaw(A2, I2) {
        if (!I2) return null;
        const g2 = new WI(
            A2.get(I2.colliderHandle()),
            fA.fromRaw(I2.point()),
            I2.isInside(),
            I2.featureType(),
            I2.featureId()
        );
        return I2.free(), g2;
    }
}
class xI {
    constructor(A2, I2) {
        (this.origin = A2), (this.dir = I2);
    }
    pointAt(A2) {
        return {
            x: this.origin.x + this.dir.x * A2,
            y: this.origin.y + this.dir.y * A2,
            z: this.origin.z + this.dir.z * A2,
        };
    }
}
class mI {
    constructor(A2, I2, g2, C2) {
        (this.featureType = II.Unknown),
            (this.featureId = void 0),
            (this.timeOfImpact = A2),
            (this.normal = I2),
            C2 !== void 0 && (this.featureId = C2),
            g2 !== void 0 && (this.featureType = g2);
    }
    static fromRaw(A2) {
        if (!A2) return null;
        const I2 = new mI(
            A2.time_of_impact(),
            fA.fromRaw(A2.normal()),
            A2.featureType(),
            A2.featureId()
        );
        return A2.free(), I2;
    }
}
class jI {
    constructor(A2, I2, g2, C2, B2) {
        (this.featureType = II.Unknown),
            (this.featureId = void 0),
            (this.collider = A2),
            (this.timeOfImpact = I2),
            (this.normal = g2),
            B2 !== void 0 && (this.featureId = B2),
            C2 !== void 0 && (this.featureType = C2);
    }
    static fromRaw(A2, I2) {
        if (!I2) return null;
        const g2 = new jI(
            A2.get(I2.colliderHandle()),
            I2.time_of_impact(),
            fA.fromRaw(I2.normal()),
            I2.featureType(),
            I2.featureId()
        );
        return I2.free(), g2;
    }
}
class fI {
    constructor(A2, I2) {
        (this.collider = A2), (this.timeOfImpact = I2);
    }
    static fromRaw(A2, I2) {
        if (!I2) return null;
        const g2 = new fI(A2.get(I2.colliderHandle()), I2.timeOfImpact());
        return I2.free(), g2;
    }
}
class VI {
    constructor(A2, I2, g2, C2, B2) {
        (this.time_of_impact = A2),
            (this.witness1 = I2),
            (this.witness2 = g2),
            (this.normal1 = C2),
            (this.normal2 = B2);
    }
    static fromRaw(A2, I2) {
        if (!I2) return null;
        const g2 = new VI(
            I2.time_of_impact(),
            fA.fromRaw(I2.witness1()),
            fA.fromRaw(I2.witness2()),
            fA.fromRaw(I2.normal1()),
            fA.fromRaw(I2.normal2())
        );
        return I2.free(), g2;
    }
}
class XI extends VI {
    constructor(A2, I2, g2, C2, B2, Q2) {
        super(I2, g2, C2, B2, Q2), (this.collider = A2);
    }
    static fromRaw(A2, I2) {
        if (!I2) return null;
        const g2 = new XI(
            A2.get(I2.colliderHandle()),
            I2.time_of_impact(),
            fA.fromRaw(I2.witness1()),
            fA.fromRaw(I2.witness2()),
            fA.fromRaw(I2.normal1()),
            fA.fromRaw(I2.normal2())
        );
        return I2.free(), g2;
    }
}
class PI {
    static fromRaw(A2, I2) {
        const g2 = A2.coShapeType(I2);
        let C2, B2, Q2, E2, i2, D2, o2;
        switch (g2) {
            case l.Ball:
                return new uI(A2.coRadius(I2));
            case l.Cuboid:
                return (C2 = A2.coHalfExtents(I2)), new zI(C2.x, C2.y, C2.z);
            case l.RoundCuboid:
                return (
                    (C2 = A2.coHalfExtents(I2)),
                    (B2 = A2.coRoundRadius(I2)),
                    new _I(C2.x, C2.y, C2.z, B2)
                );
            case l.Capsule:
                return (
                    (i2 = A2.coHalfHeight(I2)),
                    (D2 = A2.coRadius(I2)),
                    new $I(i2, D2)
                );
            case l.Segment:
                return (
                    (Q2 = A2.coVertices(I2)),
                    new Ag(
                        fA.new(Q2[0], Q2[1], Q2[2]),
                        fA.new(Q2[3], Q2[4], Q2[5])
                    )
                );
            case l.Polyline:
                return (
                    (Q2 = A2.coVertices(I2)),
                    (E2 = A2.coIndices(I2)),
                    new Cg(Q2, E2)
                );
            case l.Triangle:
                return (
                    (Q2 = A2.coVertices(I2)),
                    new Ig(
                        fA.new(Q2[0], Q2[1], Q2[2]),
                        fA.new(Q2[3], Q2[4], Q2[5]),
                        fA.new(Q2[6], Q2[7], Q2[8])
                    )
                );
            case l.RoundTriangle:
                return (
                    (Q2 = A2.coVertices(I2)),
                    (B2 = A2.coRoundRadius(I2)),
                    new gg(
                        fA.new(Q2[0], Q2[1], Q2[2]),
                        fA.new(Q2[3], Q2[4], Q2[5]),
                        fA.new(Q2[6], Q2[7], Q2[8]),
                        B2
                    )
                );
            case l.HalfSpace:
                return (o2 = fA.fromRaw(A2.coHalfspaceNormal(I2))), new vI(o2);
            case l.TriMesh:
                (Q2 = A2.coVertices(I2)), (E2 = A2.coIndices(I2));
                const S2 = A2.coTriMeshFlags(I2);
                return new Bg(Q2, E2, S2);
            case l.HeightField:
                const w2 = A2.coHeightfieldScale(I2),
                    G2 = A2.coHeightfieldHeights(I2),
                    k2 = A2.coHeightfieldNRows(I2),
                    K2 = A2.coHeightfieldNCols(I2),
                    J2 = A2.coHeightFieldFlags(I2);
                return new ig(k2, K2, G2, w2, J2);
            case l.ConvexPolyhedron:
                return (
                    (Q2 = A2.coVertices(I2)),
                    (E2 = A2.coIndices(I2)),
                    new Qg(Q2, E2)
                );
            case l.RoundConvexPolyhedron:
                return (
                    (Q2 = A2.coVertices(I2)),
                    (E2 = A2.coIndices(I2)),
                    (B2 = A2.coRoundRadius(I2)),
                    new Eg(Q2, E2, B2)
                );
            case l.Cylinder:
                return (
                    (i2 = A2.coHalfHeight(I2)),
                    (D2 = A2.coRadius(I2)),
                    new Dg(i2, D2)
                );
            case l.RoundCylinder:
                return (
                    (i2 = A2.coHalfHeight(I2)),
                    (D2 = A2.coRadius(I2)),
                    (B2 = A2.coRoundRadius(I2)),
                    new og(i2, D2, B2)
                );
            case l.Cone:
                return (
                    (i2 = A2.coHalfHeight(I2)),
                    (D2 = A2.coRadius(I2)),
                    new Sg(i2, D2)
                );
            case l.RoundCone:
                return (
                    (i2 = A2.coHalfHeight(I2)),
                    (D2 = A2.coRadius(I2)),
                    (B2 = A2.coRoundRadius(I2)),
                    new wg(i2, D2, B2)
                );
            default:
                throw new Error("unknown shape type: " + g2);
        }
    }
    castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
        let S2 = fA.intoRaw(A2),
            w2 = XA.intoRaw(I2),
            G2 = fA.intoRaw(g2),
            k2 = fA.intoRaw(B2),
            K2 = XA.intoRaw(Q2),
            J2 = fA.intoRaw(E2),
            U2 = this.intoRaw(),
            h2 = C2.intoRaw(),
            y2 = VI.fromRaw(
                null,
                U2.castShape(S2, w2, G2, h2, k2, K2, J2, i2, D2, o2)
            );
        return (
            S2.free(),
            w2.free(),
            G2.free(),
            k2.free(),
            K2.free(),
            J2.free(),
            U2.free(),
            h2.free(),
            y2
        );
    }
    intersectsShape(A2, I2, g2, C2, B2) {
        let Q2 = fA.intoRaw(A2),
            E2 = XA.intoRaw(I2),
            i2 = fA.intoRaw(C2),
            D2 = XA.intoRaw(B2),
            o2 = this.intoRaw(),
            S2 = g2.intoRaw(),
            w2 = o2.intersectsShape(Q2, E2, S2, i2, D2);
        return (
            Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), S2.free(), w2
        );
    }
    contactShape(A2, I2, g2, C2, B2, Q2) {
        let E2 = fA.intoRaw(A2),
            i2 = XA.intoRaw(I2),
            D2 = fA.intoRaw(C2),
            o2 = XA.intoRaw(B2),
            S2 = this.intoRaw(),
            w2 = g2.intoRaw(),
            G2 = ZI.fromRaw(S2.contactShape(E2, i2, w2, D2, o2, Q2));
        return (
            E2.free(), i2.free(), D2.free(), o2.free(), S2.free(), w2.free(), G2
        );
    }
    containsPoint(A2, I2, g2) {
        let C2 = fA.intoRaw(A2),
            B2 = XA.intoRaw(I2),
            Q2 = fA.intoRaw(g2),
            E2 = this.intoRaw(),
            i2 = E2.containsPoint(C2, B2, Q2);
        return C2.free(), B2.free(), Q2.free(), E2.free(), i2;
    }
    projectPoint(A2, I2, g2, C2) {
        let B2 = fA.intoRaw(A2),
            Q2 = XA.intoRaw(I2),
            E2 = fA.intoRaw(g2),
            i2 = this.intoRaw(),
            D2 = bI.fromRaw(i2.projectPoint(B2, Q2, E2, C2));
        return B2.free(), Q2.free(), E2.free(), i2.free(), D2;
    }
    intersectsRay(A2, I2, g2, C2) {
        let B2 = fA.intoRaw(I2),
            Q2 = XA.intoRaw(g2),
            E2 = fA.intoRaw(A2.origin),
            i2 = fA.intoRaw(A2.dir),
            D2 = this.intoRaw(),
            o2 = D2.intersectsRay(B2, Q2, E2, i2, C2);
        return B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2;
    }
    castRay(A2, I2, g2, C2, B2) {
        let Q2 = fA.intoRaw(I2),
            E2 = XA.intoRaw(g2),
            i2 = fA.intoRaw(A2.origin),
            D2 = fA.intoRaw(A2.dir),
            o2 = this.intoRaw(),
            S2 = o2.castRay(Q2, E2, i2, D2, C2, B2);
        return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), S2;
    }
    castRayAndGetNormal(A2, I2, g2, C2, B2) {
        let Q2 = fA.intoRaw(I2),
            E2 = XA.intoRaw(g2),
            i2 = fA.intoRaw(A2.origin),
            D2 = fA.intoRaw(A2.dir),
            o2 = this.intoRaw(),
            S2 = mI.fromRaw(o2.castRayAndGetNormal(Q2, E2, i2, D2, C2, B2));
        return Q2.free(), E2.free(), i2.free(), D2.free(), o2.free(), S2;
    }
}
!(function (A2) {
    (A2[(A2.Ball = 0)] = "Ball"),
        (A2[(A2.Cuboid = 1)] = "Cuboid"),
        (A2[(A2.Capsule = 2)] = "Capsule"),
        (A2[(A2.Segment = 3)] = "Segment"),
        (A2[(A2.Polyline = 4)] = "Polyline"),
        (A2[(A2.Triangle = 5)] = "Triangle"),
        (A2[(A2.TriMesh = 6)] = "TriMesh"),
        (A2[(A2.HeightField = 7)] = "HeightField"),
        (A2[(A2.ConvexPolyhedron = 9)] = "ConvexPolyhedron"),
        (A2[(A2.Cylinder = 10)] = "Cylinder"),
        (A2[(A2.Cone = 11)] = "Cone"),
        (A2[(A2.RoundCuboid = 12)] = "RoundCuboid"),
        (A2[(A2.RoundTriangle = 13)] = "RoundTriangle"),
        (A2[(A2.RoundCylinder = 14)] = "RoundCylinder"),
        (A2[(A2.RoundCone = 15)] = "RoundCone"),
        (A2[(A2.RoundConvexPolyhedron = 16)] = "RoundConvexPolyhedron"),
        (A2[(A2.HalfSpace = 17)] = "HalfSpace");
})(gI || (gI = {})),
    (function (A2) {
        A2[(A2.FIX_INTERNAL_EDGES = 1)] = "FIX_INTERNAL_EDGES";
    })(CI || (CI = {})),
    (function (A2) {
        (A2[(A2.DELETE_BAD_TOPOLOGY_TRIANGLES = 4)] =
            "DELETE_BAD_TOPOLOGY_TRIANGLES"),
            (A2[(A2.ORIENTED = 8)] = "ORIENTED"),
            (A2[(A2.MERGE_DUPLICATE_VERTICES = 16)] =
                "MERGE_DUPLICATE_VERTICES"),
            (A2[(A2.DELETE_DEGENERATE_TRIANGLES = 32)] =
                "DELETE_DEGENERATE_TRIANGLES"),
            (A2[(A2.DELETE_DUPLICATE_TRIANGLES = 64)] =
                "DELETE_DUPLICATE_TRIANGLES"),
            (A2[(A2.FIX_INTERNAL_EDGES = 152)] = "FIX_INTERNAL_EDGES");
    })(BI || (BI = {}));
class uI extends PI {
    constructor(A2) {
        super(), (this.type = gI.Ball), (this.radius = A2);
    }
    intoRaw() {
        return dA.ball(this.radius);
    }
}
class vI extends PI {
    constructor(A2) {
        super(), (this.type = gI.HalfSpace), (this.normal = A2);
    }
    intoRaw() {
        let A2 = fA.intoRaw(this.normal),
            I2 = dA.halfspace(A2);
        return A2.free(), I2;
    }
}
class zI extends PI {
    constructor(A2, I2, g2) {
        super(),
            (this.type = gI.Cuboid),
            (this.halfExtents = fA.new(A2, I2, g2));
    }
    intoRaw() {
        return dA.cuboid(
            this.halfExtents.x,
            this.halfExtents.y,
            this.halfExtents.z
        );
    }
}
class _I extends PI {
    constructor(A2, I2, g2, C2) {
        super(),
            (this.type = gI.RoundCuboid),
            (this.halfExtents = fA.new(A2, I2, g2)),
            (this.borderRadius = C2);
    }
    intoRaw() {
        return dA.roundCuboid(
            this.halfExtents.x,
            this.halfExtents.y,
            this.halfExtents.z,
            this.borderRadius
        );
    }
}
class $I extends PI {
    constructor(A2, I2) {
        super(),
            (this.type = gI.Capsule),
            (this.halfHeight = A2),
            (this.radius = I2);
    }
    intoRaw() {
        return dA.capsule(this.halfHeight, this.radius);
    }
}
class Ag extends PI {
    constructor(A2, I2) {
        super(), (this.type = gI.Segment), (this.a = A2), (this.b = I2);
    }
    intoRaw() {
        let A2 = fA.intoRaw(this.a),
            I2 = fA.intoRaw(this.b),
            g2 = dA.segment(A2, I2);
        return A2.free(), I2.free(), g2;
    }
}
class Ig extends PI {
    constructor(A2, I2, g2) {
        super(),
            (this.type = gI.Triangle),
            (this.a = A2),
            (this.b = I2),
            (this.c = g2);
    }
    intoRaw() {
        let A2 = fA.intoRaw(this.a),
            I2 = fA.intoRaw(this.b),
            g2 = fA.intoRaw(this.c),
            C2 = dA.triangle(A2, I2, g2);
        return A2.free(), I2.free(), g2.free(), C2;
    }
}
class gg extends PI {
    constructor(A2, I2, g2, C2) {
        super(),
            (this.type = gI.RoundTriangle),
            (this.a = A2),
            (this.b = I2),
            (this.c = g2),
            (this.borderRadius = C2);
    }
    intoRaw() {
        let A2 = fA.intoRaw(this.a),
            I2 = fA.intoRaw(this.b),
            g2 = fA.intoRaw(this.c),
            C2 = dA.roundTriangle(A2, I2, g2, this.borderRadius);
        return A2.free(), I2.free(), g2.free(), C2;
    }
}
class Cg extends PI {
    constructor(A2, I2) {
        super(),
            (this.type = gI.Polyline),
            (this.vertices = A2),
            (this.indices = I2 != null ? I2 : new Uint32Array(0));
    }
    intoRaw() {
        return dA.polyline(this.vertices, this.indices);
    }
}
class Bg extends PI {
    constructor(A2, I2, g2) {
        super(),
            (this.type = gI.TriMesh),
            (this.vertices = A2),
            (this.indices = I2),
            (this.flags = g2);
    }
    intoRaw() {
        return dA.trimesh(this.vertices, this.indices, this.flags);
    }
}
class Qg extends PI {
    constructor(A2, I2) {
        super(),
            (this.type = gI.ConvexPolyhedron),
            (this.vertices = A2),
            (this.indices = I2);
    }
    intoRaw() {
        return this.indices
            ? dA.convexMesh(this.vertices, this.indices)
            : dA.convexHull(this.vertices);
    }
}
class Eg extends PI {
    constructor(A2, I2, g2) {
        super(),
            (this.type = gI.RoundConvexPolyhedron),
            (this.vertices = A2),
            (this.indices = I2),
            (this.borderRadius = g2);
    }
    intoRaw() {
        return this.indices
            ? dA.roundConvexMesh(this.vertices, this.indices, this.borderRadius)
            : dA.roundConvexHull(this.vertices, this.borderRadius);
    }
}
class ig extends PI {
    constructor(A2, I2, g2, C2, B2) {
        super(),
            (this.type = gI.HeightField),
            (this.nrows = A2),
            (this.ncols = I2),
            (this.heights = g2),
            (this.scale = C2),
            (this.flags = B2);
    }
    intoRaw() {
        let A2 = fA.intoRaw(this.scale),
            I2 = dA.heightfield(
                this.nrows,
                this.ncols,
                this.heights,
                A2,
                this.flags
            );
        return A2.free(), I2;
    }
}
class Dg extends PI {
    constructor(A2, I2) {
        super(),
            (this.type = gI.Cylinder),
            (this.halfHeight = A2),
            (this.radius = I2);
    }
    intoRaw() {
        return dA.cylinder(this.halfHeight, this.radius);
    }
}
class og extends PI {
    constructor(A2, I2, g2) {
        super(),
            (this.type = gI.RoundCylinder),
            (this.borderRadius = g2),
            (this.halfHeight = A2),
            (this.radius = I2);
    }
    intoRaw() {
        return dA.roundCylinder(
            this.halfHeight,
            this.radius,
            this.borderRadius
        );
    }
}
class Sg extends PI {
    constructor(A2, I2) {
        super(),
            (this.type = gI.Cone),
            (this.halfHeight = A2),
            (this.radius = I2);
    }
    intoRaw() {
        return dA.cone(this.halfHeight, this.radius);
    }
}
class wg extends PI {
    constructor(A2, I2, g2) {
        super(),
            (this.type = gI.RoundCone),
            (this.halfHeight = A2),
            (this.radius = I2),
            (this.borderRadius = g2);
    }
    intoRaw() {
        return dA.roundCone(this.halfHeight, this.radius, this.borderRadius);
    }
}
class Gg {
    constructor(A2) {
        this.raw = A2 || new KA();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    step(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2, w2) {
        let G2 = fA.intoRaw(A2);
        S2
            ? this.raw.stepWithEvents(
                  G2,
                  I2.raw,
                  g2.raw,
                  C2.raw,
                  B2.raw,
                  Q2.raw,
                  E2.raw,
                  i2.raw,
                  D2.raw,
                  o2.raw,
                  S2.raw,
                  w2,
                  w2 ? w2.filterContactPair : null,
                  w2 ? w2.filterIntersectionPair : null
              )
            : this.raw.step(
                  G2,
                  I2.raw,
                  g2.raw,
                  C2.raw,
                  B2.raw,
                  Q2.raw,
                  E2.raw,
                  i2.raw,
                  D2.raw,
                  o2.raw
              ),
            G2.free();
    }
}
!(function (A2) {
    (A2[(A2.EXCLUDE_FIXED = 1)] = "EXCLUDE_FIXED"),
        (A2[(A2.EXCLUDE_KINEMATIC = 2)] = "EXCLUDE_KINEMATIC"),
        (A2[(A2.EXCLUDE_DYNAMIC = 4)] = "EXCLUDE_DYNAMIC"),
        (A2[(A2.EXCLUDE_SENSORS = 8)] = "EXCLUDE_SENSORS"),
        (A2[(A2.EXCLUDE_SOLIDS = 16)] = "EXCLUDE_SOLIDS"),
        (A2[(A2.ONLY_DYNAMIC = 3)] = "ONLY_DYNAMIC"),
        (A2[(A2.ONLY_KINEMATIC = 5)] = "ONLY_KINEMATIC"),
        (A2[(A2.ONLY_FIXED = 6)] = "ONLY_FIXED");
})(QI || (QI = {}));
class kg {
    constructor(A2) {
        this.raw = A2 || new MA();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    update(A2) {
        this.raw.update(A2.raw);
    }
    castRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
        let S2 = fA.intoRaw(g2.origin),
            w2 = fA.intoRaw(g2.dir),
            G2 = fI.fromRaw(
                I2,
                this.raw.castRay(
                    A2.raw,
                    I2.raw,
                    S2,
                    w2,
                    C2,
                    B2,
                    Q2,
                    E2,
                    i2,
                    D2,
                    o2
                )
            );
        return S2.free(), w2.free(), G2;
    }
    castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
        let S2 = fA.intoRaw(g2.origin),
            w2 = fA.intoRaw(g2.dir),
            G2 = jI.fromRaw(
                I2,
                this.raw.castRayAndGetNormal(
                    A2.raw,
                    I2.raw,
                    S2,
                    w2,
                    C2,
                    B2,
                    Q2,
                    E2,
                    i2,
                    D2,
                    o2
                )
            );
        return S2.free(), w2.free(), G2;
    }
    intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2) {
        let w2 = fA.intoRaw(g2.origin),
            G2 = fA.intoRaw(g2.dir);
        this.raw.intersectionsWithRay(
            A2.raw,
            I2.raw,
            w2,
            G2,
            C2,
            B2,
            (A3) => Q2(jI.fromRaw(I2, A3)),
            E2,
            i2,
            D2,
            o2,
            S2
        ),
            w2.free(),
            G2.free();
    }
    intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2) {
        let S2 = fA.intoRaw(g2),
            w2 = XA.intoRaw(C2),
            G2 = B2.intoRaw(),
            k2 = this.raw.intersectionWithShape(
                A2.raw,
                I2.raw,
                S2,
                w2,
                G2,
                Q2,
                E2,
                i2,
                D2,
                o2
            );
        return S2.free(), w2.free(), G2.free(), k2;
    }
    projectPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
        let o2 = fA.intoRaw(g2),
            S2 = WI.fromRaw(
                I2,
                this.raw.projectPoint(
                    A2.raw,
                    I2.raw,
                    o2,
                    C2,
                    B2,
                    Q2,
                    E2,
                    i2,
                    D2
                )
            );
        return o2.free(), S2;
    }
    projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2, E2, i2) {
        let D2 = fA.intoRaw(g2),
            o2 = WI.fromRaw(
                I2,
                this.raw.projectPointAndGetFeature(
                    A2.raw,
                    I2.raw,
                    D2,
                    C2,
                    B2,
                    Q2,
                    E2,
                    i2
                )
            );
        return D2.free(), o2;
    }
    intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
        let o2 = fA.intoRaw(g2);
        this.raw.intersectionsWithPoint(
            A2.raw,
            I2.raw,
            o2,
            C2,
            B2,
            Q2,
            E2,
            i2,
            D2
        ),
            o2.free();
    }
    castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2, w2, G2, k2) {
        let K2 = fA.intoRaw(g2),
            J2 = XA.intoRaw(C2),
            U2 = fA.intoRaw(B2),
            h2 = Q2.intoRaw(),
            y2 = XI.fromRaw(
                I2,
                this.raw.castShape(
                    A2.raw,
                    I2.raw,
                    K2,
                    J2,
                    U2,
                    h2,
                    E2,
                    i2,
                    D2,
                    o2,
                    S2,
                    w2,
                    G2,
                    k2
                )
            );
        return K2.free(), J2.free(), U2.free(), h2.free(), y2;
    }
    intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2) {
        let w2 = fA.intoRaw(g2),
            G2 = XA.intoRaw(C2),
            k2 = B2.intoRaw();
        this.raw.intersectionsWithShape(
            A2.raw,
            I2.raw,
            w2,
            G2,
            k2,
            Q2,
            E2,
            i2,
            D2,
            o2,
            S2
        ),
            w2.free(),
            G2.free(),
            k2.free();
    }
    collidersWithAabbIntersectingAabb(A2, I2, g2) {
        let C2 = fA.intoRaw(A2),
            B2 = fA.intoRaw(I2);
        this.raw.collidersWithAabbIntersectingAabb(C2, B2, g2),
            C2.free(),
            B2.free();
    }
}
class Kg {
    constructor(A2) {
        this.raw = A2 || new rA();
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    serializeAll(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
        let o2 = fA.intoRaw(A2);
        const S2 = this.raw.serializeAll(
            o2,
            I2.raw,
            g2.raw,
            C2.raw,
            B2.raw,
            Q2.raw,
            E2.raw,
            i2.raw,
            D2.raw
        );
        return o2.free(), S2;
    }
    deserializeAll(A2) {
        return Mg.fromRaw(this.raw.deserializeAll(A2));
    }
}
class Jg {
    constructor(A2, I2) {
        (this.vertices = A2), (this.colors = I2);
    }
}
class Ug {
    constructor(A2) {
        this.raw = A2 || new V();
    }
    free() {
        this.raw && this.raw.free(),
            (this.raw = void 0),
            (this.vertices = void 0),
            (this.colors = void 0);
    }
    render(A2, I2, g2, C2, B2) {
        this.raw.render(A2.raw, I2.raw, g2.raw, C2.raw, B2.raw),
            (this.vertices = this.raw.vertices()),
            (this.colors = this.raw.colors());
    }
}
class hg {}
class yg {
    constructor(A2, I2, g2, C2, B2) {
        (this.params = I2),
            (this.bodies = g2),
            (this.colliders = C2),
            (this.queries = B2),
            (this.raw = new DA(A2)),
            (this.rawCharacterCollision = new r()),
            (this._applyImpulsesToDynamicBodies = false),
            (this._characterMass = null);
    }
    free() {
        this.raw && (this.raw.free(), this.rawCharacterCollision.free()),
            (this.raw = void 0),
            (this.rawCharacterCollision = void 0);
    }
    up() {
        return this.raw.up();
    }
    setUp(A2) {
        let I2 = fA.intoRaw(A2);
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
    normalNudgeFactor() {
        return this.raw.normalNudgeFactor();
    }
    setNormalNudgeFactor(A2) {
        this.raw.setNormalNudgeFactor(A2);
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
        let Q2 = fA.intoRaw(I2);
        this.raw.computeColliderMovement(
            this.params.dt,
            this.bodies.raw,
            this.colliders.raw,
            this.queries.raw,
            A2.handle,
            Q2,
            this._applyImpulsesToDynamicBodies,
            this._characterMass,
            g2,
            C2,
            this.colliders.castClosure(B2)
        ),
            Q2.free();
    }
    computedMovement() {
        return fA.fromRaw(this.raw.computedMovement());
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
            return (
                ((I2 = I2 != null ? I2 : new hg()).translationDeltaApplied =
                    fA.fromRaw(A3.translationDeltaApplied())),
                (I2.translationDeltaRemaining = fA.fromRaw(
                    A3.translationDeltaRemaining()
                )),
                (I2.toi = A3.toi()),
                (I2.witness1 = fA.fromRaw(A3.worldWitness1())),
                (I2.witness2 = fA.fromRaw(A3.worldWitness2())),
                (I2.normal1 = fA.fromRaw(A3.worldNormal1())),
                (I2.normal2 = fA.fromRaw(A3.worldNormal2())),
                (I2.collider = this.colliders.get(A3.handle())),
                I2
            );
        }
        return null;
    }
}
class Ng {
    constructor(A2, I2, g2, C2) {
        (this.raw = new v(A2.handle)),
            (this.bodies = I2),
            (this.colliders = g2),
            (this.queries = C2),
            (this._chassis = A2);
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    updateVehicle(A2, I2, g2, C2) {
        this.raw.update_vehicle(
            A2,
            this.bodies.raw,
            this.colliders.raw,
            this.queries.raw,
            I2,
            g2,
            this.colliders.castClosure(C2)
        );
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
        let Q2 = fA.intoRaw(A2),
            E2 = fA.intoRaw(I2),
            i2 = fA.intoRaw(g2);
        this.raw.add_wheel(Q2, E2, i2, C2, B2), Q2.free(), E2.free(), i2.free();
    }
    numWheels() {
        return this.raw.num_wheels();
    }
    wheelChassisConnectionPointCs(A2) {
        return fA.fromRaw(this.raw.wheel_chassis_connection_point_cs(A2));
    }
    setWheelChassisConnectionPointCs(A2, I2) {
        let g2 = fA.intoRaw(I2);
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
        return fA.fromRaw(this.raw.wheel_direction_cs(A2));
    }
    setWheelDirectionCs(A2, I2) {
        let g2 = fA.intoRaw(I2);
        this.raw.set_wheel_direction_cs(A2, g2), g2.free();
    }
    wheelAxleCs(A2) {
        return fA.fromRaw(this.raw.wheel_axle_cs(A2));
    }
    setWheelAxleCs(A2, I2) {
        let g2 = fA.intoRaw(I2);
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
        return fA.fromRaw(this.raw.wheel_contact_normal_ws(A2));
    }
    wheelContactPoint(A2) {
        return fA.fromRaw(this.raw.wheel_contact_point_ws(A2));
    }
    wheelSuspensionLength(A2) {
        return this.raw.wheel_suspension_length(A2);
    }
    wheelHardPoint(A2) {
        return fA.fromRaw(this.raw.wheel_hard_point_ws(A2));
    }
    wheelIsInContact(A2) {
        return this.raw.wheel_is_in_contact(A2);
    }
    wheelGroundObject(A2) {
        return this.colliders.get(this.raw.wheel_ground_object(A2));
    }
}
class Mg {
    constructor(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2, w2, G2, k2) {
        (this.gravity = A2),
            (this.integrationParameters = new JI(I2)),
            (this.islands = new nI(g2)),
            (this.broadPhase = new dI(C2)),
            (this.narrowPhase = new TI(B2)),
            (this.bodies = new KI(Q2)),
            (this.colliders = new cg(E2)),
            (this.impulseJoints = new qI(i2)),
            (this.multibodyJoints = new eI(D2)),
            (this.ccdSolver = new rI(o2)),
            (this.queryPipeline = new kg(S2)),
            (this.physicsPipeline = new Gg(w2)),
            (this.serializationPipeline = new Kg(G2)),
            (this.debugRenderPipeline = new Ug(k2)),
            (this.characterControllers = new Set()),
            (this.vehicleControllers = new Set()),
            this.impulseJoints.finalizeDeserialization(this.bodies),
            this.bodies.finalizeDeserialization(this.colliders),
            this.colliders.finalizeDeserialization(this.bodies);
    }
    free() {
        this.integrationParameters.free(),
            this.islands.free(),
            this.broadPhase.free(),
            this.narrowPhase.free(),
            this.bodies.free(),
            this.colliders.free(),
            this.impulseJoints.free(),
            this.multibodyJoints.free(),
            this.ccdSolver.free(),
            this.queryPipeline.free(),
            this.physicsPipeline.free(),
            this.serializationPipeline.free(),
            this.debugRenderPipeline.free(),
            this.characterControllers.forEach((A2) => A2.free()),
            this.vehicleControllers.forEach((A2) => A2.free()),
            (this.integrationParameters = void 0),
            (this.islands = void 0),
            (this.broadPhase = void 0),
            (this.narrowPhase = void 0),
            (this.bodies = void 0),
            (this.colliders = void 0),
            (this.ccdSolver = void 0),
            (this.impulseJoints = void 0),
            (this.multibodyJoints = void 0),
            (this.queryPipeline = void 0),
            (this.physicsPipeline = void 0),
            (this.serializationPipeline = void 0),
            (this.debugRenderPipeline = void 0),
            (this.characterControllers = void 0),
            (this.vehicleControllers = void 0);
    }
    static fromRaw(A2) {
        return A2
            ? new Mg(
                  fA.fromRaw(A2.takeGravity()),
                  A2.takeIntegrationParameters(),
                  A2.takeIslandManager(),
                  A2.takeBroadPhase(),
                  A2.takeNarrowPhase(),
                  A2.takeBodies(),
                  A2.takeColliders(),
                  A2.takeImpulseJoints(),
                  A2.takeMultibodyJoints()
              )
            : null;
    }
    takeSnapshot() {
        return this.serializationPipeline.serializeAll(
            this.gravity,
            this.integrationParameters,
            this.islands,
            this.broadPhase,
            this.narrowPhase,
            this.bodies,
            this.colliders,
            this.impulseJoints,
            this.multibodyJoints
        );
    }
    static restoreSnapshot(A2) {
        return new Kg().deserializeAll(A2);
    }
    debugRender() {
        return (
            this.debugRenderPipeline.render(
                this.bodies,
                this.colliders,
                this.impulseJoints,
                this.multibodyJoints,
                this.narrowPhase
            ),
            new Jg(
                this.debugRenderPipeline.vertices,
                this.debugRenderPipeline.colors
            )
        );
    }
    step(A2, I2) {
        this.physicsPipeline.step(
            this.gravity,
            this.integrationParameters,
            this.islands,
            this.broadPhase,
            this.narrowPhase,
            this.bodies,
            this.colliders,
            this.impulseJoints,
            this.multibodyJoints,
            this.ccdSolver,
            A2,
            I2
        ),
            this.queryPipeline.update(this.colliders);
    }
    propagateModifiedBodyPositionsToColliders() {
        this.bodies.raw.propagateModifiedBodyPositionsToColliders(
            this.colliders.raw
        );
    }
    updateSceneQueries() {
        this.propagateModifiedBodyPositionsToColliders(),
            this.queryPipeline.update(this.colliders);
    }
    get timestep() {
        return this.integrationParameters.dt;
    }
    set timestep(A2) {
        this.integrationParameters.dt = A2;
    }
    get lengthUnit() {
        return this.integrationParameters.lengthUnit;
    }
    set lengthUnit(A2) {
        this.integrationParameters.lengthUnit = A2;
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
    switchToSmallStepsPgsSolverWithoutWarmstart() {
        this.integrationParameters.switchToSmallStepsPgsSolverWithoutWarmstart();
    }
    createRigidBody(A2) {
        return this.bodies.createRigidBody(this.colliders, A2);
    }
    createCharacterController(A2) {
        let I2 = new yg(
            A2,
            this.integrationParameters,
            this.bodies,
            this.colliders,
            this.queryPipeline
        );
        return this.characterControllers.add(I2), I2;
    }
    removeCharacterController(A2) {
        this.characterControllers.delete(A2), A2.free();
    }
    createVehicleController(A2) {
        let I2 = new Ng(A2, this.bodies, this.colliders, this.queryPipeline);
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
        return this.impulseJoints.createJoint(
            this.bodies,
            A2,
            I2.handle,
            g2.handle,
            C2
        );
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
        this.bodies &&
            this.bodies.remove(
                A2.handle,
                this.islands,
                this.colliders,
                this.impulseJoints,
                this.multibodyJoints
            );
    }
    removeCollider(A2, I2) {
        this.colliders &&
            this.colliders.remove(A2.handle, this.islands, this.bodies, I2);
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
        return this.queryPipeline.castRay(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2,
            B2,
            Q2 ? Q2.handle : null,
            E2 ? E2.handle : null,
            this.colliders.castClosure(i2)
        );
    }
    castRayAndGetNormal(A2, I2, g2, C2, B2, Q2, E2, i2) {
        return this.queryPipeline.castRayAndGetNormal(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2,
            B2,
            Q2 ? Q2.handle : null,
            E2 ? E2.handle : null,
            this.colliders.castClosure(i2)
        );
    }
    intersectionsWithRay(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
        this.queryPipeline.intersectionsWithRay(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2,
            B2,
            Q2,
            E2 ? E2.handle : null,
            i2 ? i2.handle : null,
            this.colliders.castClosure(D2)
        );
    }
    intersectionWithShape(A2, I2, g2, C2, B2, Q2, E2, i2) {
        let D2 = this.queryPipeline.intersectionWithShape(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2,
            B2,
            Q2 ? Q2.handle : null,
            E2 ? E2.handle : null,
            this.colliders.castClosure(i2)
        );
        return D2 != null ? this.colliders.get(D2) : null;
    }
    projectPoint(A2, I2, g2, C2, B2, Q2, E2) {
        return this.queryPipeline.projectPoint(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2,
            B2 ? B2.handle : null,
            Q2 ? Q2.handle : null,
            this.colliders.castClosure(E2)
        );
    }
    projectPointAndGetFeature(A2, I2, g2, C2, B2, Q2) {
        return this.queryPipeline.projectPointAndGetFeature(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2 ? C2.handle : null,
            B2 ? B2.handle : null,
            this.colliders.castClosure(Q2)
        );
    }
    intersectionsWithPoint(A2, I2, g2, C2, B2, Q2, E2) {
        this.queryPipeline.intersectionsWithPoint(
            this.bodies,
            this.colliders,
            A2,
            this.colliders.castClosure(I2),
            g2,
            C2,
            B2 ? B2.handle : null,
            Q2 ? Q2.handle : null,
            this.colliders.castClosure(E2)
        );
    }
    castShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2, o2, S2, w2) {
        return this.queryPipeline.castShape(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            C2,
            B2,
            Q2,
            E2,
            i2,
            D2,
            o2 ? o2.handle : null,
            S2 ? S2.handle : null,
            this.colliders.castClosure(w2)
        );
    }
    intersectionsWithShape(A2, I2, g2, C2, B2, Q2, E2, i2, D2) {
        this.queryPipeline.intersectionsWithShape(
            this.bodies,
            this.colliders,
            A2,
            I2,
            g2,
            this.colliders.castClosure(C2),
            B2,
            Q2,
            E2 ? E2.handle : null,
            i2 ? i2.handle : null,
            this.colliders.castClosure(D2)
        );
    }
    collidersWithAabbIntersectingAabb(A2, I2, g2) {
        this.queryPipeline.collidersWithAabbIntersectingAabb(
            A2,
            I2,
            this.colliders.castClosure(g2)
        );
    }
    contactPairsWith(A2, I2) {
        this.narrowPhase.contactPairsWith(
            A2.handle,
            this.colliders.castClosure(I2)
        );
    }
    intersectionPairsWith(A2, I2) {
        this.narrowPhase.intersectionPairsWith(
            A2.handle,
            this.colliders.castClosure(I2)
        );
    }
    contactPair(A2, I2, g2) {
        this.narrowPhase.contactPair(A2.handle, I2.handle, g2);
    }
    intersectionPair(A2, I2) {
        return this.narrowPhase.intersectionPair(A2.handle, I2.handle);
    }
}
!(function (A2) {
    (A2[(A2.NONE = 0)] = "NONE"),
        (A2[(A2.COLLISION_EVENTS = 1)] = "COLLISION_EVENTS"),
        (A2[(A2.CONTACT_FORCE_EVENTS = 2)] = "CONTACT_FORCE_EVENTS");
})(EI || (EI = {}));
class Fg {
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    collider1() {
        return this.raw.collider1();
    }
    collider2() {
        return this.raw.collider2();
    }
    totalForce() {
        return fA.fromRaw(this.raw.total_force());
    }
    totalForceMagnitude() {
        return this.raw.total_force_magnitude();
    }
    maxForceDirection() {
        return fA.fromRaw(this.raw.max_force_direction());
    }
    maxForceMagnitude() {
        return this.raw.max_force_magnitude();
    }
}
class ag {
    constructor(A2, I2) {
        this.raw = I2 || new _(A2);
    }
    free() {
        this.raw && this.raw.free(), (this.raw = void 0);
    }
    drainCollisionEvents(A2) {
        this.raw.drainCollisionEvents(A2);
    }
    drainContactForceEvents(A2) {
        let I2 = new Fg();
        this.raw.drainContactForceEvents((g2) => {
            (I2.raw = g2), A2(I2), I2.free();
        });
    }
    clear() {
        this.raw.clear();
    }
}
!(function (A2) {
    (A2[(A2.NONE = 0)] = "NONE"),
        (A2[(A2.FILTER_CONTACT_PAIRS = 1)] = "FILTER_CONTACT_PAIRS"),
        (A2[(A2.FILTER_INTERSECTION_PAIRS = 2)] = "FILTER_INTERSECTION_PAIRS");
})(iI || (iI = {})),
    (function (A2) {
        (A2[(A2.EMPTY = 0)] = "EMPTY"),
            (A2[(A2.COMPUTE_IMPULSE = 1)] = "COMPUTE_IMPULSE");
    })(DI || (DI = {})),
    (function (A2) {
        (A2[(A2.DYNAMIC_DYNAMIC = 1)] = "DYNAMIC_DYNAMIC"),
            (A2[(A2.DYNAMIC_KINEMATIC = 12)] = "DYNAMIC_KINEMATIC"),
            (A2[(A2.DYNAMIC_FIXED = 2)] = "DYNAMIC_FIXED"),
            (A2[(A2.KINEMATIC_KINEMATIC = 52224)] = "KINEMATIC_KINEMATIC"),
            (A2[(A2.KINEMATIC_FIXED = 8704)] = "KINEMATIC_FIXED"),
            (A2[(A2.FIXED_FIXED = 32)] = "FIXED_FIXED"),
            (A2[(A2.DEFAULT = 15)] = "DEFAULT"),
            (A2[(A2.ALL = 60943)] = "ALL");
    })(oI || (oI = {}));
class sg {
    constructor(A2, I2, g2, C2) {
        (this.colliderSet = A2),
            (this.handle = I2),
            (this._parent = g2),
            (this._shape = C2);
    }
    finalizeDeserialization(A2) {
        this.handle != null &&
            (this._parent = A2.get(this.colliderSet.raw.coParent(this.handle)));
    }
    ensureShapeIsCached() {
        this._shape ||
            (this._shape = PI.fromRaw(this.colliderSet.raw, this.handle));
    }
    get shape() {
        return this.ensureShapeIsCached(), this._shape;
    }
    isValid() {
        return this.colliderSet.raw.contains(this.handle);
    }
    translation() {
        return fA.fromRaw(this.colliderSet.raw.coTranslation(this.handle));
    }
    rotation() {
        return XA.fromRaw(this.colliderSet.raw.coRotation(this.handle));
    }
    isSensor() {
        return this.colliderSet.raw.coIsSensor(this.handle);
    }
    setSensor(A2) {
        this.colliderSet.raw.coSetSensor(this.handle, A2);
    }
    setShape(A2) {
        let I2 = A2.intoRaw();
        this.colliderSet.raw.coSetShape(this.handle, I2),
            I2.free(),
            (this._shape = A2);
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
    contactSkin() {
        return this.colliderSet.raw.coContactSkin(this.handle);
    }
    setContactSkin(A2) {
        return this.colliderSet.raw.coSetContactSkin(this.handle, A2);
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
        return this.colliderSet.raw.coSetContactForceEventThreshold(
            this.handle,
            A2
        );
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
        let B2 = fA.intoRaw(I2),
            Q2 = fA.intoRaw(g2),
            E2 = XA.intoRaw(C2);
        this.colliderSet.raw.coSetMassProperties(this.handle, A2, B2, Q2, E2),
            B2.free(),
            Q2.free(),
            E2.free();
    }
    setTranslation(A2) {
        this.colliderSet.raw.coSetTranslation(this.handle, A2.x, A2.y, A2.z);
    }
    setTranslationWrtParent(A2) {
        this.colliderSet.raw.coSetTranslationWrtParent(
            this.handle,
            A2.x,
            A2.y,
            A2.z
        );
    }
    setRotation(A2) {
        this.colliderSet.raw.coSetRotation(this.handle, A2.x, A2.y, A2.z, A2.w);
    }
    setRotationWrtParent(A2) {
        this.colliderSet.raw.coSetRotationWrtParent(
            this.handle,
            A2.x,
            A2.y,
            A2.z,
            A2.w
        );
    }
    shapeType() {
        return this.colliderSet.raw.coShapeType(this.handle);
    }
    halfExtents() {
        return fA.fromRaw(this.colliderSet.raw.coHalfExtents(this.handle));
    }
    setHalfExtents(A2) {
        const I2 = fA.intoRaw(A2);
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
        return fA.fromRaw(A2);
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
        let I2 = fA.intoRaw(A2),
            g2 = this.colliderSet.raw.coContainsPoint(this.handle, I2);
        return I2.free(), g2;
    }
    projectPoint(A2, I2) {
        let g2 = fA.intoRaw(A2),
            C2 = bI.fromRaw(
                this.colliderSet.raw.coProjectPoint(this.handle, g2, I2)
            );
        return g2.free(), C2;
    }
    intersectsRay(A2, I2) {
        let g2 = fA.intoRaw(A2.origin),
            C2 = fA.intoRaw(A2.dir),
            B2 = this.colliderSet.raw.coIntersectsRay(this.handle, g2, C2, I2);
        return g2.free(), C2.free(), B2;
    }
    castShape(A2, I2, g2, C2, B2, Q2, E2, i2) {
        let D2 = fA.intoRaw(A2),
            o2 = fA.intoRaw(g2),
            S2 = XA.intoRaw(C2),
            w2 = fA.intoRaw(B2),
            G2 = I2.intoRaw(),
            k2 = VI.fromRaw(
                this.colliderSet,
                this.colliderSet.raw.coCastShape(
                    this.handle,
                    D2,
                    G2,
                    o2,
                    S2,
                    w2,
                    Q2,
                    E2,
                    i2
                )
            );
        return D2.free(), o2.free(), S2.free(), w2.free(), G2.free(), k2;
    }
    castCollider(A2, I2, g2, C2, B2, Q2) {
        let E2 = fA.intoRaw(A2),
            i2 = fA.intoRaw(g2),
            D2 = XI.fromRaw(
                this.colliderSet,
                this.colliderSet.raw.coCastCollider(
                    this.handle,
                    E2,
                    I2.handle,
                    i2,
                    C2,
                    B2,
                    Q2
                )
            );
        return E2.free(), i2.free(), D2;
    }
    intersectsShape(A2, I2, g2) {
        let C2 = fA.intoRaw(I2),
            B2 = XA.intoRaw(g2),
            Q2 = A2.intoRaw(),
            E2 = this.colliderSet.raw.coIntersectsShape(
                this.handle,
                Q2,
                C2,
                B2
            );
        return C2.free(), B2.free(), Q2.free(), E2;
    }
    contactShape(A2, I2, g2, C2) {
        let B2 = fA.intoRaw(I2),
            Q2 = XA.intoRaw(g2),
            E2 = A2.intoRaw(),
            i2 = ZI.fromRaw(
                this.colliderSet.raw.coContactShape(this.handle, E2, B2, Q2, C2)
            );
        return B2.free(), Q2.free(), E2.free(), i2;
    }
    contactCollider(A2, I2) {
        return ZI.fromRaw(
            this.colliderSet.raw.coContactCollider(this.handle, A2.handle, I2)
        );
    }
    castRay(A2, I2, g2) {
        let C2 = fA.intoRaw(A2.origin),
            B2 = fA.intoRaw(A2.dir),
            Q2 = this.colliderSet.raw.coCastRay(this.handle, C2, B2, I2, g2);
        return C2.free(), B2.free(), Q2;
    }
    castRayAndGetNormal(A2, I2, g2) {
        let C2 = fA.intoRaw(A2.origin),
            B2 = fA.intoRaw(A2.dir),
            Q2 = mI.fromRaw(
                this.colliderSet.raw.coCastRayAndGetNormal(
                    this.handle,
                    C2,
                    B2,
                    I2,
                    g2
                )
            );
        return C2.free(), B2.free(), Q2;
    }
}
!(function (A2) {
    (A2[(A2.Density = 0)] = "Density"),
        (A2[(A2.Mass = 1)] = "Mass"),
        (A2[(A2.MassProps = 2)] = "MassProps");
})(SI || (SI = {}));
class Rg {
    constructor(A2) {
        (this.enabled = true),
            (this.shape = A2),
            (this.massPropsMode = SI.Density),
            (this.density = 1),
            (this.friction = 0.5),
            (this.restitution = 0),
            (this.rotation = XA.identity()),
            (this.translation = fA.zeros()),
            (this.isSensor = false),
            (this.collisionGroups = 4294967295),
            (this.solverGroups = 4294967295),
            (this.frictionCombineRule = AI.Average),
            (this.restitutionCombineRule = AI.Average),
            (this.activeCollisionTypes = oI.DEFAULT),
            (this.activeEvents = EI.NONE),
            (this.activeHooks = iI.NONE),
            (this.mass = 0),
            (this.centerOfMass = fA.zeros()),
            (this.contactForceEventThreshold = 0),
            (this.contactSkin = 0),
            (this.principalAngularInertia = fA.zeros()),
            (this.angularInertiaLocalFrame = XA.identity());
    }
    static ball(A2) {
        const I2 = new uI(A2);
        return new Rg(I2);
    }
    static capsule(A2, I2) {
        const g2 = new $I(A2, I2);
        return new Rg(g2);
    }
    static segment(A2, I2) {
        const g2 = new Ag(A2, I2);
        return new Rg(g2);
    }
    static triangle(A2, I2, g2) {
        const C2 = new Ig(A2, I2, g2);
        return new Rg(C2);
    }
    static roundTriangle(A2, I2, g2, C2) {
        const B2 = new gg(A2, I2, g2, C2);
        return new Rg(B2);
    }
    static polyline(A2, I2) {
        const g2 = new Cg(A2, I2);
        return new Rg(g2);
    }
    static trimesh(A2, I2, g2) {
        const C2 = new Bg(A2, I2, g2);
        return new Rg(C2);
    }
    static cuboid(A2, I2, g2) {
        const C2 = new zI(A2, I2, g2);
        return new Rg(C2);
    }
    static roundCuboid(A2, I2, g2, C2) {
        const B2 = new _I(A2, I2, g2, C2);
        return new Rg(B2);
    }
    static heightfield(A2, I2, g2, C2, B2) {
        const Q2 = new ig(A2, I2, g2, C2, B2);
        return new Rg(Q2);
    }
    static cylinder(A2, I2) {
        const g2 = new Dg(A2, I2);
        return new Rg(g2);
    }
    static roundCylinder(A2, I2, g2) {
        const C2 = new og(A2, I2, g2);
        return new Rg(C2);
    }
    static cone(A2, I2) {
        const g2 = new Sg(A2, I2);
        return new Rg(g2);
    }
    static roundCone(A2, I2, g2) {
        const C2 = new wg(A2, I2, g2);
        return new Rg(C2);
    }
    static convexHull(A2) {
        const I2 = new Qg(A2, null);
        return new Rg(I2);
    }
    static convexMesh(A2, I2) {
        const g2 = new Qg(A2, I2);
        return new Rg(g2);
    }
    static roundConvexHull(A2, I2) {
        const g2 = new Eg(A2, null, I2);
        return new Rg(g2);
    }
    static roundConvexMesh(A2, I2, g2) {
        const C2 = new Eg(A2, I2, g2);
        return new Rg(C2);
    }
    setTranslation(A2, I2, g2) {
        if (
            typeof A2 != "number" ||
            typeof I2 != "number" ||
            typeof g2 != "number"
        )
            throw TypeError("The translation components must be numbers.");
        return (this.translation = { x: A2, y: I2, z: g2 }), this;
    }
    setRotation(A2) {
        return XA.copy(this.rotation, A2), this;
    }
    setSensor(A2) {
        return (this.isSensor = A2), this;
    }
    setEnabled(A2) {
        return (this.enabled = A2), this;
    }
    setContactSkin(A2) {
        return (this.contactSkin = A2), this;
    }
    setDensity(A2) {
        return (this.massPropsMode = SI.Density), (this.density = A2), this;
    }
    setMass(A2) {
        return (this.massPropsMode = SI.Mass), (this.mass = A2), this;
    }
    setMassProperties(A2, I2, g2, C2) {
        return (
            (this.massPropsMode = SI.MassProps),
            (this.mass = A2),
            fA.copy(this.centerOfMass, I2),
            fA.copy(this.principalAngularInertia, g2),
            XA.copy(this.angularInertiaLocalFrame, C2),
            this
        );
    }
    setRestitution(A2) {
        return (this.restitution = A2), this;
    }
    setFriction(A2) {
        return (this.friction = A2), this;
    }
    setFrictionCombineRule(A2) {
        return (this.frictionCombineRule = A2), this;
    }
    setRestitutionCombineRule(A2) {
        return (this.restitutionCombineRule = A2), this;
    }
    setCollisionGroups(A2) {
        return (this.collisionGroups = A2), this;
    }
    setSolverGroups(A2) {
        return (this.solverGroups = A2), this;
    }
    setActiveHooks(A2) {
        return (this.activeHooks = A2), this;
    }
    setActiveEvents(A2) {
        return (this.activeEvents = A2), this;
    }
    setActiveCollisionTypes(A2) {
        return (this.activeCollisionTypes = A2), this;
    }
    setContactForceEventThreshold(A2) {
        return (this.contactForceEventThreshold = A2), this;
    }
}
class cg {
    constructor(A2) {
        (this.raw = A2 || new d()),
            (this.map = new kI()),
            A2 &&
                A2.forEachColliderHandle((A3) => {
                    this.map.set(A3, new sg(this, A3, null));
                });
    }
    free() {
        this.raw && this.raw.free(),
            (this.raw = void 0),
            this.map && this.map.clear(),
            (this.map = void 0);
    }
    castClosure(A2) {
        return (I2) => (A2 ? A2(this.get(I2)) : void 0);
    }
    finalizeDeserialization(A2) {
        this.map.forEach((I2) => I2.finalizeDeserialization(A2));
    }
    createCollider(A2, I2, g2) {
        let C2 = g2 != null && g2 != null;
        if (C2 && isNaN(g2))
            throw Error(
                "Cannot create a collider with a parent rigid-body handle that is not a number."
            );
        let B2 = I2.shape.intoRaw(),
            Q2 = fA.intoRaw(I2.translation),
            E2 = XA.intoRaw(I2.rotation),
            i2 = fA.intoRaw(I2.centerOfMass),
            D2 = fA.intoRaw(I2.principalAngularInertia),
            o2 = XA.intoRaw(I2.angularInertiaLocalFrame),
            S2 = this.raw.createCollider(
                I2.enabled,
                B2,
                Q2,
                E2,
                I2.massPropsMode,
                I2.mass,
                i2,
                D2,
                o2,
                I2.density,
                I2.friction,
                I2.restitution,
                I2.frictionCombineRule,
                I2.restitutionCombineRule,
                I2.isSensor,
                I2.collisionGroups,
                I2.solverGroups,
                I2.activeCollisionTypes,
                I2.activeHooks,
                I2.activeEvents,
                I2.contactForceEventThreshold,
                I2.contactSkin,
                C2,
                C2 ? g2 : 0,
                A2.raw
            );
        B2.free(), Q2.free(), E2.free(), i2.free(), D2.free(), o2.free();
        let w2 = C2 ? A2.get(g2) : null,
            G2 = new sg(this, S2, w2, I2.shape);
        return this.map.set(S2, G2), G2;
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
function qg(A2, I2, g2, C2) {
    return new (g2 || (g2 = Promise))(function (B2, Q2) {
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
            A3.done
                ? B2(A3.value)
                : ((I3 = A3.value),
                  I3 instanceof g2
                      ? I3
                      : new g2(function (A4) {
                            A4(I3);
                        })).then(E2, i2);
        }
        D2((C2 = C2.apply(A2, I2 || [])).next());
    });
}
for (
    var Yg = {
            byteLength: function (A2) {
                var I2 = rg(A2),
                    g2 = I2[0],
                    C2 = I2[1];
                return (3 * (g2 + C2)) / 4 - C2;
            },
            toByteArray: function (A2) {
                var I2,
                    g2,
                    C2 = rg(A2),
                    B2 = C2[0],
                    Q2 = C2[1],
                    E2 = new Hg(
                        (function (A3, I3, g3) {
                            return (3 * (I3 + g3)) / 4 - g3;
                        })(0, B2, Q2)
                    ),
                    i2 = 0,
                    D2 = Q2 > 0 ? B2 - 4 : B2;
                for (g2 = 0; g2 < D2; g2 += 4)
                    (I2 =
                        (Lg[A2.charCodeAt(g2)] << 18) |
                        (Lg[A2.charCodeAt(g2 + 1)] << 12) |
                        (Lg[A2.charCodeAt(g2 + 2)] << 6) |
                        Lg[A2.charCodeAt(g2 + 3)]),
                        (E2[i2++] = (I2 >> 16) & 255),
                        (E2[i2++] = (I2 >> 8) & 255),
                        (E2[i2++] = 255 & I2);
                Q2 === 2 &&
                    ((I2 =
                        (Lg[A2.charCodeAt(g2)] << 2) |
                        (Lg[A2.charCodeAt(g2 + 1)] >> 4)),
                    (E2[i2++] = 255 & I2));
                Q2 === 1 &&
                    ((I2 =
                        (Lg[A2.charCodeAt(g2)] << 10) |
                        (Lg[A2.charCodeAt(g2 + 1)] << 4) |
                        (Lg[A2.charCodeAt(g2 + 2)] >> 2)),
                    (E2[i2++] = (I2 >> 8) & 255),
                    (E2[i2++] = 255 & I2));
                return E2;
            },
            fromByteArray: function (A2) {
                for (
                    var I2,
                        g2 = A2.length,
                        C2 = g2 % 3,
                        B2 = [],
                        Q2 = 16383,
                        E2 = 0,
                        i2 = g2 - C2;
                    E2 < i2;
                    E2 += Q2
                )
                    B2.push(ng(A2, E2, E2 + Q2 > i2 ? i2 : E2 + Q2));
                C2 === 1
                    ? ((I2 = A2[g2 - 1]),
                      B2.push(lg[I2 >> 2] + lg[(I2 << 4) & 63] + "=="))
                    : C2 === 2 &&
                      ((I2 = (A2[g2 - 2] << 8) + A2[g2 - 1]),
                      B2.push(
                          lg[I2 >> 10] +
                              lg[(I2 >> 4) & 63] +
                              lg[(I2 << 2) & 63] +
                              "="
                      ));
                return B2.join("");
            },
        },
        lg = [],
        Lg = [],
        Hg = typeof Uint8Array != "undefined" ? Uint8Array : Array,
        tg = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        pg = 0,
        eg = tg.length;
    pg < eg;
    ++pg
)
    (lg[pg] = tg[pg]), (Lg[tg.charCodeAt(pg)] = pg);
function rg(A2) {
    var I2 = A2.length;
    if (I2 % 4 > 0)
        throw new Error("Invalid string. Length must be a multiple of 4");
    var g2 = A2.indexOf("=");
    return g2 === -1 && (g2 = I2), [g2, g2 === I2 ? 0 : 4 - (g2 % 4)];
}
function ng(A2, I2, g2) {
    for (var C2, B2, Q2 = [], E2 = I2; E2 < g2; E2 += 3)
        (C2 =
            ((A2[E2] << 16) & 16711680) +
            ((A2[E2 + 1] << 8) & 65280) +
            (255 & A2[E2 + 2])),
            Q2.push(
                lg[((B2 = C2) >> 18) & 63] +
                    lg[(B2 >> 12) & 63] +
                    lg[(B2 >> 6) & 63] +
                    lg[63 & B2]
            );
    return Q2.join("");
}
function dg() {
    return qg(this, void 0, void 0, function* () {
        yield mA(
            Yg.toByteArray(
            ).buffer
        );
    });
}
function Tg() {
    return (function () {
        let I2, g2;
        try {
            const Q2 = A.__wbindgen_add_to_stack_pointer(-16);
            A.version(Q2);
            var C2 = S()[Q2 / 4 + 0],
                B2 = S()[Q2 / 4 + 1];
            return (I2 = C2), (g2 = B2), k(C2, B2);
        } finally {
            A.__wbindgen_add_to_stack_pointer(16), A.__wbindgen_free(I2, g2, 1);
        }
    })();
}
(Lg["-".charCodeAt(0)] = 62), (Lg["_".charCodeAt(0)] = 63);
var Og = Object.freeze({
    __proto__: null,
    version: Tg,
    Vector3: jA,
    VectorOps: fA,
    Quaternion: VA,
    RotationOps: XA,
    SdpMatrix3: PA,
    SdpMatrix3Ops: uA,
    get RigidBodyType() {
        return vA;
    },
    RigidBody: wI,
    RigidBodyDesc: GI,
    RigidBodySet: KI,
    IntegrationParameters: JI,
    get JointType() {
        return zA;
    },
    get MotorModel() {
        return _A;
    },
    get JointAxesMask() {
        return $A;
    },
    ImpulseJoint: UI,
    UnitImpulseJoint: hI,
    FixedImpulseJoint: yI,
    RopeImpulseJoint: NI,
    SpringImpulseJoint: MI,
    PrismaticImpulseJoint: FI,
    RevoluteImpulseJoint: aI,
    GenericImpulseJoint: sI,
    SphericalImpulseJoint: RI,
    JointData: cI,
    ImpulseJointSet: qI,
    MultibodyJoint: YI,
    UnitMultibodyJoint: lI,
    FixedMultibodyJoint: LI,
    PrismaticMultibodyJoint: HI,
    RevoluteMultibodyJoint: tI,
    SphericalMultibodyJoint: pI,
    MultibodyJointSet: eI,
    get CoefficientCombineRule() {
        return AI;
    },
    CCDSolver: rI,
    IslandManager: nI,
    BroadPhase: dI,
    NarrowPhase: TI,
    TempContactManifold: OI,
    Shape: PI,
    get ShapeType() {
        return gI;
    },
    get HeightFieldFlags() {
        return CI;
    },
    get TriMeshFlags() {
        return BI;
    },
    Ball: uI,
    HalfSpace: vI,
    Cuboid: zI,
    RoundCuboid: _I,
    Capsule: $I,
    Segment: Ag,
    Triangle: Ig,
    RoundTriangle: gg,
    Polyline: Cg,
    TriMesh: Bg,
    ConvexPolyhedron: Qg,
    RoundConvexPolyhedron: Eg,
    Heightfield: ig,
    Cylinder: Dg,
    RoundCylinder: og,
    Cone: Sg,
    RoundCone: wg,
    get ActiveCollisionTypes() {
        return oI;
    },
    Collider: sg,
    get MassPropsMode() {
        return SI;
    },
    ColliderDesc: Rg,
    ColliderSet: cg,
    get FeatureType() {
        return II;
    },
    Ray: xI,
    RayIntersection: mI,
    RayColliderIntersection: jI,
    RayColliderHit: fI,
    PointProjection: bI,
    PointColliderProjection: WI,
    ShapeCastHit: VI,
    ColliderShapeCastHit: XI,
    ShapeContact: ZI,
    World: Mg,
    PhysicsPipeline: Gg,
    SerializationPipeline: Kg,
    get ActiveEvents() {
        return EI;
    },
    TempContactForceEvent: Fg,
    EventQueue: ag,
    get ActiveHooks() {
        return iI;
    },
    get SolverFlags() {
        return DI;
    },
    DebugRenderBuffers: Jg,
    DebugRenderPipeline: Ug,
    get QueryFilterFlags() {
        return QI;
    },
    QueryPipeline: kg,
    init: dg,
    CharacterCollision: hg,
    KinematicCharacterController: yg,
    DynamicRayCastVehicleController: Ng,
});
export default Og;
export {
    oI as ActiveCollisionTypes,
    EI as ActiveEvents,
    iI as ActiveHooks,
    uI as Ball,
    dI as BroadPhase,
    rI as CCDSolver,
    $I as Capsule,
    hg as CharacterCollision,
    AI as CoefficientCombineRule,
    sg as Collider,
    Rg as ColliderDesc,
    cg as ColliderSet,
    XI as ColliderShapeCastHit,
    Sg as Cone,
    Qg as ConvexPolyhedron,
    zI as Cuboid,
    Dg as Cylinder,
    Jg as DebugRenderBuffers,
    Ug as DebugRenderPipeline,
    Ng as DynamicRayCastVehicleController,
    ag as EventQueue,
    II as FeatureType,
    yI as FixedImpulseJoint,
    LI as FixedMultibodyJoint,
    sI as GenericImpulseJoint,
    vI as HalfSpace,
    CI as HeightFieldFlags,
    ig as Heightfield,
    UI as ImpulseJoint,
    qI as ImpulseJointSet,
    JI as IntegrationParameters,
    nI as IslandManager,
    $A as JointAxesMask,
    cI as JointData,
    zA as JointType,
    yg as KinematicCharacterController,
    SI as MassPropsMode,
    _A as MotorModel,
    YI as MultibodyJoint,
    eI as MultibodyJointSet,
    TI as NarrowPhase,
    Gg as PhysicsPipeline,
    WI as PointColliderProjection,
    bI as PointProjection,
    Cg as Polyline,
    FI as PrismaticImpulseJoint,
    HI as PrismaticMultibodyJoint,
    VA as Quaternion,
    QI as QueryFilterFlags,
    kg as QueryPipeline,
    xI as Ray,
    fI as RayColliderHit,
    jI as RayColliderIntersection,
    mI as RayIntersection,
    aI as RevoluteImpulseJoint,
    tI as RevoluteMultibodyJoint,
    wI as RigidBody,
    GI as RigidBodyDesc,
    KI as RigidBodySet,
    vA as RigidBodyType,
    NI as RopeImpulseJoint,
    XA as RotationOps,
    wg as RoundCone,
    Eg as RoundConvexPolyhedron,
    _I as RoundCuboid,
    og as RoundCylinder,
    gg as RoundTriangle,
    PA as SdpMatrix3,
    uA as SdpMatrix3Ops,
    Ag as Segment,
    Kg as SerializationPipeline,
    PI as Shape,
    VI as ShapeCastHit,
    ZI as ShapeContact,
    gI as ShapeType,
    DI as SolverFlags,
    RI as SphericalImpulseJoint,
    pI as SphericalMultibodyJoint,
    MI as SpringImpulseJoint,
    Fg as TempContactForceEvent,
    OI as TempContactManifold,
    Bg as TriMesh,
    BI as TriMeshFlags,
    Ig as Triangle,
    hI as UnitImpulseJoint,
    lI as UnitMultibodyJoint,
    jA as Vector3,
    fA as VectorOps,
    Mg as World,
    dg as init,
    Tg as version,
};

// @ts-ignore
const Mikal_Rapier_Comlink = (function () {
    /**
     * @license
     * Copyright 2019 Google LLC
     * SPDX-License-Identifier: Apache-2.0
     */
    const proxyMarker = Symbol("Comlink.proxy");
    const createEndpoint = Symbol("Comlink.endpoint");
    const releaseProxy = Symbol("Comlink.releaseProxy");
    const finalizer = Symbol("Comlink.finalizer");
    const throwMarker = Symbol("Comlink.thrown");
    const isObject = (val) =>
        (typeof val === "object" && val !== null) || typeof val === "function";
    /**
     * Internal transfer handle to handle objects marked to proxy.
     */
    const proxyTransferHandler = {
        canHandle: (val) => isObject(val) && val[proxyMarker],
        serialize(obj) {
            const { port1, port2 } = new MessageChannel();
            expose(obj, port1);
            return [port2, [port2]];
        },
        deserialize(port) {
            port.start();
            return wrap(port);
        },
    };
    /**
     * Internal transfer handler to handle thrown exceptions.
     */
    const throwTransferHandler = {
        canHandle: (value) => isObject(value) && throwMarker in value,
        serialize({ value }) {
            let serialized;
            if (value instanceof Error) {
                serialized = {
                    isError: true,
                    value: {
                        message: value.message,
                        name: value.name,
                        stack: value.stack,
                    },
                };
            } else {
                serialized = { isError: false, value };
            }
            return [serialized, []];
        },
        deserialize(serialized) {
            if (serialized.isError) {
                throw Object.assign(
                    new Error(serialized.value.message),
                    serialized.value
                );
            }
            throw serialized.value;
        },
    };
    /**
     * Allows customizing the serialization of certain values.
     */
    const transferHandlers = new Map([
        ["proxy", proxyTransferHandler],
        ["throw", throwTransferHandler],
    ]);
    function isAllowedOrigin(allowedOrigins, origin) {
        for (const allowedOrigin of allowedOrigins) {
            if (origin === allowedOrigin || allowedOrigin === "*") {
                return true;
            }
            if (allowedOrigin instanceof RegExp && allowedOrigin.test(origin)) {
                return true;
            }
        }
        return false;
    }
    function expose(obj, ep = globalThis, allowedOrigins = ["*"]) {
        ep.addEventListener("message", function callback(ev) {
            if (!ev || !ev.data) {
                return;
            }
            if (!isAllowedOrigin(allowedOrigins, ev.origin)) {
                console.warn(`Invalid origin '${ev.origin}' for comlink proxy`);
                return;
            }
            const { id, type, path } = Object.assign({ path: [] }, ev.data);
            const argumentList = (ev.data.argumentList || []).map(
                fromWireValue
            );
            let returnValue;
            try {
                const parent = path
                    .slice(0, -1)
                    .reduce((obj, prop) => obj[prop], obj);
                const rawValue = path.reduce((obj, prop) => obj[prop], obj);
                switch (type) {
                    case "GET" /* MessageType.GET */:
                        {
                            returnValue = rawValue;
                        }
                        break;
                    case "SET" /* MessageType.SET */:
                        {
                            parent[path.slice(-1)[0]] = fromWireValue(
                                ev.data.value
                            );
                            returnValue = true;
                        }
                        break;
                    case "APPLY" /* MessageType.APPLY */:
                        {
                            returnValue = rawValue.apply(parent, argumentList);
                        }
                        break;
                    case "CONSTRUCT" /* MessageType.CONSTRUCT */:
                        {
                            const value = new rawValue(...argumentList);
                            returnValue = proxy(value);
                        }
                        break;
                    case "ENDPOINT" /* MessageType.ENDPOINT */:
                        {
                            const { port1, port2 } = new MessageChannel();
                            expose(obj, port2);
                            returnValue = transfer(port1, [port1]);
                        }
                        break;
                    case "RELEASE" /* MessageType.RELEASE */:
                        {
                            returnValue = undefined;
                        }
                        break;
                    default:
                        return;
                }
            } catch (value) {
                returnValue = { value, [throwMarker]: 0 };
            }
            Promise.resolve(returnValue)
                .catch((value) => {
                    return { value, [throwMarker]: 0 };
                })
                .then((returnValue) => {
                    const [wireValue, transferables] = toWireValue(returnValue);
                    ep.postMessage(
                        Object.assign(Object.assign({}, wireValue), { id }),
                        transferables
                    );
                    if (type === "RELEASE" /* MessageType.RELEASE */) {
                        // detach and deactive after sending release response above.
                        ep.removeEventListener("message", callback);
                        closeEndPoint(ep);
                        if (
                            finalizer in obj &&
                            typeof obj[finalizer] === "function"
                        ) {
                            obj[finalizer]();
                        }
                    }
                })
                .catch((error) => {
                    // Send Serialization Error To Caller
                    const [wireValue, transferables] = toWireValue({
                        value: new TypeError("Unserializable return value"),
                        [throwMarker]: 0,
                    });
                    ep.postMessage(
                        Object.assign(Object.assign({}, wireValue), { id }),
                        transferables
                    );
                });
        });
        if (ep.start) {
            ep.start();
        }
    }
    function isMessagePort(endpoint) {
        return endpoint.constructor.name === "MessagePort";
    }
    function closeEndPoint(endpoint) {
        if (isMessagePort(endpoint)) endpoint.close();
    }
    function wrap(ep, target) {
        const pendingListeners = new Map();
        ep.addEventListener("message", function handleMessage(ev) {
            const { data } = ev;
            if (!data || !data.id) {
                return;
            }
            const resolver = pendingListeners.get(data.id);
            if (!resolver) {
                return;
            }
            try {
                resolver(data);
            } finally {
                pendingListeners.delete(data.id);
            }
        });
        return createProxy(ep, pendingListeners, [], target);
    }
    function throwIfProxyReleased(isReleased) {
        if (isReleased) {
            throw new Error("Proxy has been released and is not useable");
        }
    }
    function releaseEndpoint(ep) {
        return requestResponseMessage(ep, new Map(), {
            type: "RELEASE" /* MessageType.RELEASE */,
        }).then(() => {
            closeEndPoint(ep);
        });
    }
    const proxyCounter = new WeakMap();
    const proxyFinalizers =
        "FinalizationRegistry" in globalThis &&
        new FinalizationRegistry((ep) => {
            const newCount = (proxyCounter.get(ep) || 0) - 1;
            proxyCounter.set(ep, newCount);
            if (newCount === 0) {
                releaseEndpoint(ep);
            }
        });
    function registerProxy(proxy, ep) {
        const newCount = (proxyCounter.get(ep) || 0) + 1;
        proxyCounter.set(ep, newCount);
        if (proxyFinalizers) {
            proxyFinalizers.register(proxy, ep, proxy);
        }
    }
    function unregisterProxy(proxy) {
        if (proxyFinalizers) {
            proxyFinalizers.unregister(proxy);
        }
    }
    function createProxy(
        ep,
        pendingListeners,
        path = [],
        target = function () {}
    ) {
        let isProxyReleased = false;
        const propProxyCache = new Map();
        const proxy = new Proxy(target, {
            get(_target, prop) {
                throwIfProxyReleased(isProxyReleased);
                if (prop === releaseProxy) {
                    return () => {
                        for (const subProxy of propProxyCache.values()) {
                            subProxy[releaseProxy]();
                        }
                        propProxyCache.clear();
                        unregisterProxy(proxy);
                        releaseEndpoint(ep);
                        pendingListeners.clear();
                        isProxyReleased = true;
                    };
                }
                if (prop === "then") {
                    if (path.length === 0) {
                        return { then: () => proxy };
                    }
                    const r = requestResponseMessage(ep, pendingListeners, {
                        type: "GET" /* MessageType.GET */,
                        path: path.map((p) => p.toString()),
                    }).then(fromWireValue);
                    return r.then.bind(r);
                }
                const cachedProxy = propProxyCache.get(prop);
                if (cachedProxy) {
                    return cachedProxy;
                }
                const propProxy = createProxy(ep, pendingListeners, [
                    ...path,
                    prop,
                ]);
                propProxyCache.set(prop, propProxy);
                return propProxy;
            },
            set(_target, prop, rawValue) {
                throwIfProxyReleased(isProxyReleased);
                // FIXME: ES6 Proxy Handler `set` methods are supposed to return a
                // boolean. To show good will, we return true asynchronously Â¯\_(ãƒ„)_/Â¯
                const [value, transferables] = toWireValue(rawValue);
                return requestResponseMessage(
                    ep,
                    pendingListeners,
                    {
                        type: "SET" /* MessageType.SET */,
                        path: [...path, prop].map((p) => p.toString()),
                        value,
                    },
                    transferables
                ).then(fromWireValue);
            },
            apply(_target, _thisArg, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const last = path[path.length - 1];
                if (last === createEndpoint) {
                    return requestResponseMessage(ep, pendingListeners, {
                        type: "ENDPOINT" /* MessageType.ENDPOINT */,
                    }).then(fromWireValue);
                }
                // We just pretend that `bind()` didnâ€™t happen.
                if (last === "bind") {
                    return createProxy(ep, pendingListeners, path.slice(0, -1));
                }
                const [argumentList, transferables] =
                    processArguments(rawArgumentList);
                return requestResponseMessage(
                    ep,
                    pendingListeners,
                    {
                        type: "APPLY" /* MessageType.APPLY */,
                        path: path.map((p) => p.toString()),
                        argumentList,
                    },
                    transferables
                ).then(fromWireValue);
            },
            construct(_target, rawArgumentList) {
                throwIfProxyReleased(isProxyReleased);
                const [argumentList, transferables] =
                    processArguments(rawArgumentList);
                return requestResponseMessage(
                    ep,
                    pendingListeners,
                    {
                        type: "CONSTRUCT" /* MessageType.CONSTRUCT */,
                        path: path.map((p) => p.toString()),
                        argumentList,
                    },
                    transferables
                ).then(fromWireValue);
            },
        });
        registerProxy(proxy, ep);
        return proxy;
    }
    function myFlat(arr) {
        return Array.prototype.concat.apply([], arr);
    }
    function processArguments(argumentList) {
        const processed = argumentList.map(toWireValue);
        return [processed.map((v) => v[0]), myFlat(processed.map((v) => v[1]))];
    }
    const transferCache = new WeakMap();
    function transfer(obj, transfers) {
        transferCache.set(obj, transfers);
        return obj;
    }
    function proxy(obj) {
        return Object.assign(obj, { [proxyMarker]: true });
    }
    function windowEndpoint(w, context = globalThis, targetOrigin = "*") {
        return {
            postMessage: (msg, transferables) =>
                w.postMessage(msg, targetOrigin, transferables),
            addEventListener: context.addEventListener.bind(context),
            removeEventListener: context.removeEventListener.bind(context),
        };
    }
    function toWireValue(value) {
        for (const [name, handler] of transferHandlers) {
            if (handler.canHandle(value)) {
                const [serializedValue, transferables] =
                    handler.serialize(value);
                return [
                    {
                        type: "HANDLER" /* WireValueType.HANDLER */,
                        name,
                        value: serializedValue,
                    },
                    transferables,
                ];
            }
        }
        return [
            {
                type: "RAW" /* WireValueType.RAW */,
                value,
            },
            transferCache.get(value) || [],
        ];
    }
    function fromWireValue(value) {
        switch (value.type) {
            case "HANDLER" /* WireValueType.HANDLER */:
                return transferHandlers
                    .get(value.name)
                    .deserialize(value.value);
            case "RAW" /* WireValueType.RAW */:
                return value.value;
        }
    }
    function requestResponseMessage(ep, pendingListeners, msg, transfers) {
        return new Promise((resolve) => {
            const id = Math.trunc(
                Math.random() * Number.MAX_SAFE_INTEGER
            ).toString();
            pendingListeners.set(id, resolve);
            if (ep.start) {
                ep.start();
            }
            ep.postMessage(Object.assign({ id }, msg), transfers);
        });
    }

    // export { createEndpoint, expose, finalizer, proxy, proxyMarker, releaseProxy, transfer, transferHandlers, windowEndpoint, wrap };
    //# sourceMappingURL=comlink.js.map
    return { wrap: wrap, expose: expose, transfer: transfer, proxy: proxy };
})();

const Comlink = Mikal_Rapier_Comlink;

const RAPIER = Og;
console.info("rapierWorker.js rapier loaded 3d-compat, version 0.14:");

let rapierWorld = null;
let uidHandle = new Map();
let characterControllers = new Map();
let defaultLinearDamping = 0.0;
let timestepMode = 0;
let timestepValue = 1 / 60;
let collisionEvents = [];
let characterControllerCollisionEvents = [];
let postDefineCommands = new Map();
let castRayResults = [];
let castShapeResults = [];

const CommandType = {
    AddBody: 0,
    StepWorld: 1,
    ApplyImpulse: 2,
    ApplyImpulseAtPoint: 3,
    ApplyForce: 4,
    Raycast: 5,
    SetWorldGravity: 6,
    SetLinearDamping: 7,
    ApplyTorque: 8,
    SetMass: 9,
    EnablePhysics: 10,
    SetDefaultLinearDamping: 11,
    CreateCharacterController: 12,
    TranslateCharacterController: 13,
    Translate: 14,
    Rotate: 15,
    SetVelocity: 16,
    UpdateBody: 17,
    SetAngularDamping: 18,
    SetCollisionGroups: 19,
    SetTimestep: 20,
    RemoveBody: 21,
    AddSphericalJoint: 22,
    SetPositionOffset: 23,
    AddRevoluteJoint: 24,
    CastShape: 25, // Add this line for CastShape
    SetCCD: 26,
    SetSizeOverride: 27,
    SetRestitution: 28,
    SetFriction: 29,
};

const BodyType = {
    Dynamic: 0,
    Fixed: 1,
    KinematicPosition: 2,
    KinematicVelocity: 3,
};

const Shape = {
    Box: 0,
    Prism: 1,
    Wedge: 2,
    Pyramid: 3,
    CornerOut: 4,
    CornerIn: 5,
};

const TimestepMode = {
    Default: 0,
    Fixed: 1,
    Adaptive: 2,
};

async function initWorld() {
    await RAPIER.init();
    const gravity = { x: 0.0, y: 0.0, z: -9.81 };
    rapierWorld = new RAPIER.World(gravity);
    console.info("[rapierWorker] worker init world");
    return true;
}

// Scale Float32Array points in place by width, height, and depth
function scalePoints(points, height, width, depth) {
    for (let i = 0; i < points.length; i += 3) {
        points[i] *= width;
        points[i + 1] *= height;
        points[i + 2] *= depth;
    }
    return points;
}

function setTimestep(config) {
    timestepMode = config.mode;
    switch (timestepMode) {
        case TimestepMode.Default:
            timestepValue = 1 / 60;
            if (rapierWorld) rapierWorld.timestep = timestepValue;
            break;
        case TimestepMode.Fixed:
            timestepValue = config.value;
            if (rapierWorld) rapierWorld.timestep = timestepValue;
            break;
    }
}

function setRestitution(config) {
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        const collider = body.collider(0);  // Get the first collider of the body
        if (collider) {
            collider.setRestitution(config.restitution);
        }
    }
}

function setFriction(config) {
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        const collider = body.collider(0);  // Get the first collider of the body
        if (collider) {
            collider.setFriction(config.friction);
        }
    }
}

function debugRender() {
    if (!rapierWorld) return;
    return rapierWorld.debugRender();
}

function setDefaultLinearDamping(config) {
    defaultLinearDamping = config.damping;
}

function enablePhysics(config) {
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.setEnabled(config.enable);
    }
}

const ShapeTypeProperty = {
    Auto: 0,
    ModelMesh: 1,
    Box: 2,
    Sphere: 3,
    Cylinder: 4,
    Capsule: 5,
    ConvexHulls: 6,
};

const ColliderType = {
    Solid: 0,
    Sensor: 1,
};

// THE BELOW IS USED FOR 3DOBJECT EXCLUDING MODEL MESH
function createDefaultCollider(config) {
    const shapeType = config.shapeType;
    let colliderDesc;
    switch (shapeType) {
        case ShapeTypeProperty.Box:
            colliderDesc = RAPIER.ColliderDesc.cuboid(
                config.width / 2,
                config.height / 2,
                config.depth / 2
            );
            break;
        case ShapeTypeProperty.Sphere:
            colliderDesc = RAPIER.ColliderDesc.ball(
                Math.max(config.width, config.height, config.depth) / 2
            );
            break;
        case ShapeTypeProperty.Cylinder:
            colliderDesc = RAPIER.ColliderDesc.cylinder(
                config.depth / 2,
                config.width / 2
            );
            break;
        case ShapeTypeProperty.Capsule:
            colliderDesc = RAPIER.ColliderDesc.capsule(
                config.depth / 2,
                config.width / 2
            );
            break;
        default:
            console.warn("Unrecognized default collider", shapeType);
            colliderDesc = RAPIER.ColliderDesc.ball(
                Math.max(config.width, config.height, config.depth) / 2
            );
    }
    return colliderDesc;
}

//THE BELOW IS USED FOR 3D SHAPE
function createCollider(config) {
    const shape = config.shape;
    let colliderDesc;
    switch (shape) {
        case Shape.Box:
            colliderDesc = RAPIER.ColliderDesc.cuboid(
                config.width / 2,
                config.height / 2,
                config.depth / 2
            );
            break;
        case Shape.Wedge:
            const points = [
                0.5, 0.5, 0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5,
                -0.5, -0.5, -0.5, -0.5, 0.5, -0.5,
            ];
            // Create Float32Array from points
            const pointsArray = new Float32Array(points);
            const pointsArrayScaled = scalePoints(
                pointsArray,
                config.height,
                config.width,
                config.depth
            );

            colliderDesc = RAPIER.ColliderDesc.convexHull(pointsArrayScaled);
            break;
        case Shape.Pyramid:
            const pyramidPoints = [
                -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5,
                -0.5, 0, 0, 0.5,
            ];
            const pyramidPointsArray = new Float32Array(pyramidPoints);
            const pyramidPointsArrayScaled = scalePoints(
                pyramidPointsArray,
                config.height,
                config.width,
                config.depth
            );
            colliderDesc = RAPIER.ColliderDesc.convexHull(
                pyramidPointsArrayScaled
            );
            break;
        case Shape.Prism:
            const prismPoints = [
                // Bottom face vertices
                -0.5,
                -0.5,
                -0.5, // Vertex 1
                0.5,
                -0.5,
                -0.5, // Vertex 2
                0.5,
                0.5,
                -0.5, // Vertex 3
                -0.5,
                0.5,
                -0.5, // Vertex 4
                // Top face vertices
                -0.5,
                0.0,
                0.5, // Vertex 5
                0.5,
                0.0,
                0.5, // Vertex 6
            ];
            const prismPointsScaled = scalePoints(
                prismPoints,
                config.height,
                config.width,
                config.depth
            );
            colliderDesc = RAPIER.ColliderDesc.convexHull(prismPointsScaled);
            break;
        case Shape.CornerIn:
            const cornerInPoints = [
                // Bottom face vertices
                -0.5,
                -0.5,
                -0.5, // Vertex 1
                0.5,
                -0.5,
                -0.5, // Vertex 2
                0.5,
                0.5,
                -0.5, // Vertex 3
                -0.5,
                0.5,
                -0.5, // Vertex 4
                // Top face vertices
                // Bottom face vertices
                -0.5,
                -0.5,
                0.5, // Vertex 1
                0.5,
                -0.5,
                0.5, // Vertex 2
                0.5,
                0.5,
                0.5, // Vertex 3
            ];
            const cornerInPointsScaled = scalePoints(
                cornerInPoints,
                config.height,
                config.width,
                config.depth
            );
            colliderDesc = RAPIER.ColliderDesc.convexHull(cornerInPointsScaled);
            break;
        case Shape.CornerOut:
            const cornerOutPoints = [
                // Bottom face vertices
                -0.5, -0.5, -0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5,
                -0.5,
                // Top face vertices
                0.5, -0.5, 0.5,
            ];
            const cornerOutPointsScaled = scalePoints(
                cornerOutPoints,
                config.height,
                config.width,
                config.depth
            );
            colliderDesc = RAPIER.ColliderDesc.convexHull(
                cornerOutPointsScaled
            );
            break;
        default:
            console.warn("Unknown shape", shape);
            colliderDesc = RAPIER.ColliderDesc.cuboid(
                config.width / 2,
                config.height / 2,
                config.depth / 2
            );
            break;
    }
    return colliderDesc;
}

function updateBody(config) {
    if (!rapierWorld) return;
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    let body = rapierWorld.bodies.get(handle);
    // Remove the body if it exists
    if (body) {
        rapierWorld.removeRigidBody(body);
    }
    uidHandle.delete(uid);
    addBody(config);
}

function addBody(config) {
    if (!rapierWorld) return;
    let rigidBodyDesc;
    let x = config.x || 0;
    let y = config.y || 0;
    let z = config.z || 0;
    // Also add quaternion support
    let q = config.q || { x: 0, y: 0, z: 0, w: 1 };
    const bodyTypeConfig = config.immovable ? BodyType.Fixed : config.bodyType;

    switch (bodyTypeConfig) {
        case BodyType.Dynamic:
            rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic();
            break;
        case BodyType.Fixed:
            rigidBodyDesc = RAPIER.RigidBodyDesc.fixed();
            break;
        case BodyType.KinematicPosition:
            rigidBodyDesc = RAPIER.RigidBodyDesc.kinematicPositionBased();
            break;
        case BodyType.KinematicVelocity:
            rigidBodyDesc = RAPIER.RigidBodyDesc.kinematicVelocityBased();
            break;
        default:
            rigidBodyDesc = RAPIER.RigidBodyDesc.dynamic();
            break;
    }

    rigidBodyDesc.setTranslation(x, y, z);
    rigidBodyDesc.setRotation(q);

    const body = rapierWorld.createRigidBody(rigidBodyDesc);

    if (
        (config.shapeType === ShapeTypeProperty.ModelMesh ||
            config.shapeType == ShapeTypeProperty.ConvexHulls) &&
        config.modelMesh
    ) {
        // Model Mesh
        config.modelMesh.meshes.forEach((mesh) => {
            let colliderDesc;
            if (config.shapeType === ShapeTypeProperty.ModelMesh) {
                colliderDesc = RAPIER.ColliderDesc.trimesh(
                    mesh.vertices,
                    mesh.indices
                );
            } else {
                colliderDesc = RAPIER.ColliderDesc.convexHull(mesh.vertices);
            }
            // Set sensor property during creation if specified
            if (config.colliderType === ColliderType.Sensor) {
                colliderDesc.setSensor(true);
            }
            const collider = rapierWorld.createCollider(colliderDesc, body);
            collider.setMass(config.mass);
            collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
        });
    } else if (config.meshPoints && config.meshPoints.length > 0) {
        // Mesh Points
        const colliderDesc = createTrimeshCollider(config.meshPoints);
        // Set sensor property during creation if specified
        if (config.colliderType === ColliderType.Sensor) {
            colliderDesc.setSensor(true);
        }
        const collider = rapierWorld.createCollider(colliderDesc, body);
        collider.setMass(config.mass);
        collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    } else if (config.shape !== null) {
        // 3DShape
        const colliderDesc = createCollider(config);
        // Set sensor property during creation if specified
        if (config.colliderType === ColliderType.Sensor) {
            colliderDesc.setSensor(true);
        }
        const collider = rapierWorld.createCollider(colliderDesc, body);
        collider.setMass(config.mass);
        collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    } else {
        // 3DObject w/ default shape: box, ball, cylinder
        const colliderDesc = createDefaultCollider(config);
        // Set sensor property during creation if specified
        if (config.colliderType === ColliderType.Sensor) {
            colliderDesc.setSensor(true);
        }
        const collider = rapierWorld.createCollider(colliderDesc, body);
        collider.setMass(config.mass);
        collider.setActiveEvents(RAPIER.ActiveEvents.COLLISION_EVENTS);
    }

    body.setEnabledRotations(
        config?.enableRot0 ? true : false,
        config?.enableRot1 ? true : false,
        config?.enableRot2 ? true : false,
        true
    );

    body.setLinearDamping(defaultLinearDamping);

    const uid = config.uid;
    body.uid = uid;
    uidHandle.set(uid, body.handle);

    // Check for and run any commands sent before body defined
    const commands = postDefineCommands.get(uid);
    if (commands) {
        runCommands(commands);
        postDefineCommands.delete(uid);
    }
}

function createTrimeshIndices(vertexCount) {
    const indices = [];
    for (let i = 0; i < vertexCount - 2; i += 3) {
        indices.push(i, i + 1, i + 2);
    }
    return indices;
}

function setCollisionGroups(config) {
    const membership = config.membership;
    const filter = config.filter;
    // Create 32-bit number combining membership and filter which are strings representing 16-bit hex numbers using the form 0x0000)
    const membershipNumber = parseInt(membership, 16);
    const filterNumber = parseInt(filter, 16);
    if (Number.isNaN(membershipNumber) || Number.isNaN(filterNumber)) {
        console.warn("Invalid membership or filter number", membership, filter);
        return;
    }
    const group = (membershipNumber << 16) | filterNumber;
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        const collider = body.collider(0);
        if (collider) {
            collider.setCollisionGroups(group);
        } else {
            console.warn("No collider found for body with UID:", uid);
        }
    } else {
        console.warn("setCollisonGroup: body not found", uid);
    }
}

function translate(config) {
    const uid = config.uid;
    const translation = config.translation;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.setTranslation(translation);
    }
}

function rotate(config) {
    const uid = config.uid;
    const rotation = config.rotation;
    const handle = uidHandle.get(uid);

    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.setRotation(rotation);
    }
}

function addPostDefineCommands(config) {
    const uid = config.uid;
    if (!postDefineCommands.has(uid)) {
        postDefineCommands.set(uid, []);
    }
    const commands = postDefineCommands.get(uid);
    commands.push(config);
}

function setPositionOffset(config) {
    const uid = config.uid;
    const positionOffset = config.positionOffset;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    const collider = body.collider(0);
    collider.setTranslationWrtParent(positionOffset);
}

function stepWorld(dt, frame) {
    if (!rapierWorld) return;
    if (timestepMode === TimestepMode.Adaptive) {
        rapierWorld.timestep = dt;
    }

    collisionEvents = [...characterControllerCollisionEvents];
    characterControllerCollisionEvents = [];
    let eventQueue = new RAPIER.EventQueue(true);
    rapierWorld.step(eventQueue);
    handleCollisionEvents(eventQueue);
    eventQueue.free();

    // Collect and return bodies' data...
    const bodies = rapierWorld.bodies;
    const numBodies = bodies.len();
    const bodiesData = new Float32Array(numBodies * 8);
    let i = 0;
    bodies.forEach((body) => {
        const translation = body.translation();
        const rotation = body.rotation();
        bodiesData[i++] = body.uid;
        bodiesData[i++] = translation.x;
        bodiesData[i++] = translation.y;
        bodiesData[i++] = translation.z;
        bodiesData[i++] = rotation.x;
        bodiesData[i++] = rotation.y;
        bodiesData[i++] = rotation.z;
        bodiesData[i++] = rotation.w;
    });
    const castRayResultsCopy = castRayResults.slice();
    const castShapeResultsCopy = castShapeResults.slice();
    castRayResults = [];
    castShapeResults = [];
    const worldData = {
        bodiesData,
        collisionEvents,
        frame,
        castRayResults: castRayResultsCopy,
        castShapeResults: castShapeResultsCopy,
    };
    return Comlink.transfer(worldData, [worldData.bodiesData.buffer]);
}

const CollisionMsgType = {
    BODY: "body",
    CHARACTER_CONTROLLER: "characterController",
};

function handleCollisionEvents(eventQueue) {
    eventQueue.drainCollisionEvents((handle1, handle2, started) => {
        // Accessing collider information (assuming `world` is your Rapier world)
        const collider1 = rapierWorld.getCollider(handle1);
        const collider2 = rapierWorld.getCollider(handle2);
        let contactCollider1,
            contactCollider2 = null;
        const prediction = 0;
        contactCollider1 = collider1.contactCollider(collider2, prediction);
        contactCollider2 = collider2.contactCollider(collider1, prediction);
        // Get bodies
        const body1 = collider1.parent();
        const body2 = collider2.parent();
        // Create message to send to main thread
        const msg = {
            type: CollisionMsgType.BODY,
            started,
            body1UID: body1.uid,
            body2UID: body2.uid,
            contactCollider1,
            contactCollider2,
        };
        collisionEvents.push(msg);
    });
}

function applyTorque(config) {
    const uid = config.uid;
    const torque = config.torque;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.applyTorque(torque);
    }
}

function setMass(config) {
    const uid = config.uid;
    const mass = config.mass;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        // Get collider
        const collider = body.collider(0);
        if (collider) collider.setMass(mass);
    }
}

// Add function to apply impulse to a body
function applyImpulse(config) {
    const uid = config.uid;
    const impulse = config.impulse;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        const iV = new RAPIER.Vector3(impulse.x, impulse.y, impulse.z);
        body.applyImpulse(iV, true);
    }
}

function applyImpulseAtPoint(config) {
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const impulse = config.impulse;
    const point = config.point;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.applyImpulseAtPoint(impulse, point);
    }
}

// Add function apply force to a body
function applyForce(config) {
    const uid = config.uid;
    const force = config.force;
    const point = config.point;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.addForce(force, point, true);
    }
}

function setSizeOverride(config) {
    if (!rapierWorld) return;
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    let body = rapierWorld.bodies.get(handle);
    // Remove the body if it exists
    if (body) {
        rapierWorld.removeRigidBody(body);
    }
    uidHandle.delete(uid);
    addBody(config);
}

// Add function to do a raycast
function raycast(config) {
    const origin = config.origin;
    const dir = config.dir;
    const ray = new RAPIER.Ray(origin, dir);
    const maxToI = config.maxToI;
    const solid = !config.skipBackFaces;
    const uid = config.uid;
    let filterGroups = parseInt(config.filterGroups, 16);
    filterGroups = 0xffff0000 | filterGroups;
    let resultRaw = rapierWorld.castRayAndGetNormal(
        ray,
        maxToI,
        solid,
        null,
        filterGroups
    );
    let result = {};
    const parent = resultRaw?.collider?.parent();
    const hitUID = parent?.uid;
    if (resultRaw) {
        result.hitUID = hitUID;
        result.hasHit = true;
        result.uid = uid;
        result.dir = { x: dir.x, y: dir.y, z: dir.z };
        result.origin = { x: origin.x, y: origin.y, z: origin.z };
        result.tag = config.tag;
        result.timeOfImpact = resultRaw.timeOfImpact;
        result.normal = {
            x: resultRaw.normal.x,
            y: resultRaw.normal.y,
            z: resultRaw.normal.z,
        };
    } else {
        // @ts-ignore
        result = { hasHit: false, hitUID: -1, uid };
    }
    castRayResults.push(result);
    return result;
}

// Function to create a rotation quaternion from Euler angles (degrees)
function createQuaternionFromEuler(roll, pitch, yaw) {
    const cy = Math.cos(yaw * 0.5);
    const sy = Math.sin(yaw * 0.5);
    const cr = Math.cos(roll * 0.5);
    const sr = Math.sin(roll * 0.5);
    const cp = Math.cos(pitch * 0.5);
    const sp = Math.sin(pitch * 0.5);

    const w = cy * cr * cp + sy * sr * sp;
    const x = cy * sr * cp - sy * cr * sp;
    const y = cy * cr * sp + sy * sr * cp;
    const z = sy * cr * cp - cy * sr * sp;

    return new RAPIER.Quaternion(w, x, y, z);
}

// Add function to do a shape cast
function castShape(config) {
    try {
        const shape2Pos = new RAPIER.Vector3(
            config.origin.x,
            config.origin.y,
            config.origin.z
        );
        const shape2Rot = createQuaternionFromEuler(
            // Create rotation object from the input rotation angles
            (config.rotation.x * Math.PI) / 180,
            (config.rotation.y * Math.PI) / 180,
            (config.rotation.z * Math.PI) / 180
        );
        const shape2Vel = new RAPIER.Vector3(
            config.dir.x,
            config.dir.y,
            config.dir.z
        );
        let shape2 = getShapeFromConfig(config.shape); // A function to get the shape based on config
        const maxToI = config.maxToI;
        const targetDistance = config.targetDistance || 1; // Use the targetDistance from the config, default to 1 if not provided
        const stopAtPenetration = !config.skipBackfaces;
        let filterGroups = parseInt(config.filterGroups, 16);
        filterGroups = 0xffff0000 | filterGroups;

        // Find the body with the given UID
        let excludeRigidBody = null;
        if (config.excludeUID !== -1) {
            const handle = uidHandle.get(config.excludeUID);
            if (handle) {
                excludeRigidBody = rapierWorld.bodies.get(handle);
            }
        }

        let result = rapierWorld.castShape(
            shape2Pos, // RAPIER.Vector3: Position of the shape being cast
            shape2Rot, // RAPIER.Quaternion: Use the new rotation object
            shape2Vel, // RAPIER.Vector3: Velocity of the shape being cast
            shape2, // RAPIER.Ball etc.
            targetDistance, // Number
            maxToI, // Number
            stopAtPenetration, //Boolean, Stop at Penetration
            null, // filterFlags
            filterGroups, // filterGroups
            null, // filterExcludeCollider: Collider
            excludeRigidBody, // filterExcludeRigidBody: RigidBody
            null // filterPredicate
        );

        const parent = result?.collider?.parent();
        const hitUID = parent?.uid;
        let returnResult = {};
        if (result) {
            returnResult.uid = config.uid;
            returnResult.hitUID = hitUID;
            returnResult.hasHit = true;
            returnResult.time_of_impact = result.time_of_impact;
            returnResult.direction = [config.dir.x, config.dir.y, config.dir.z];
            returnResult.origin = [
                config.origin.x,
                config.origin.y,
                config.origin.z,
            ];
            returnResult.witness1 = {
                x: result.witness1.x,
                y: result.witness1.y,
                z: result.witness1.z,
            };
            returnResult.witness2 = {
                x: result.witness2.x,
                y: result.witness2.y,
                z: result.witness2.z,
            };
            returnResult.normal1 = {
                x: result.normal1.x,
                y: result.normal1.y,
                z: result.normal1.z,
            };
            returnResult.normal2 = {
                x: result.normal2.x,
                y: result.normal2.y,
                z: result.normal2.z,
            };
            returnResult.tag = config.tag;
        } else {
            returnResult = { hasHit: false, hitUID: -1 };
        }
        castShapeResults.push(returnResult);
        return returnResult;
    } catch (error) {
        console.error("Error in castShape:", error);
        throw error;
    }
}

// Helper function to create shape from config
function getShapeFromConfig(shapeConfig) {
    const { height, width, depth } = shapeConfig;

    switch (shapeConfig.type) {
        case "sphere":
            return new RAPIER.Ball(height / 2); // Assuming height is diameter for sphere
        case "box":
            return new RAPIER.Cuboid(width / 2, height / 2, depth / 2); // Dividing by 2 for half extents
        case "capsule":
            return new RAPIER.Capsule(height / 2, width / 2); // Assuming height is the total height, width is the radius
        // Add more shapes as needed
        default:
            throw new Error("Unknown shape type: " + shapeConfig.type);
    }
}

// Function to set the gravity
function setWorldGravity(config) {
    const gravity = config.gravity;
    rapierWorld.gravity = gravity;
}

// Set body linear damping
function setLinearDamping(config) {
    const uid = config.uid;
    const damping = config.damping;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.setLinearDamping(damping);
    }
}

function setCCD(config) {
    const uid = config.uid;
    const enable = config.enable;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.enableCcd(enable);
    }
}

function setAngularDamping(config) {
    const uid = config.uid;
    const damping = config.damping;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.setAngularDamping(damping);
    }
}

function createCharacterController(config) {
    const {
        uid,
        tag,
        offset,
        up,
        maxSlopeClimbAngle,
        minSlopeSlideAngle,
        applyImpulsesToDynamicBodies,
        enableAutostep,
        autostepMinWidth,
        autostepMaxHeight,
        enableSnapToGround,
        snapToGroundMaxDistance,
    } = config;
    if (characterControllers.has(tag)) {
        console.warn("Character controller already exists");
        return;
    }
    /*
            if (this.bodyType !== RAPIER.RigidBodyType.KinematicPositionBased) {
                console.warn(
                    "Character controller only works with KinematicPositionBased"
                );
                return;
            }
    */
    const characterController = rapierWorld.createCharacterController(offset);
    characterController.setUp(up);
    characterController.setMaxSlopeClimbAngle(
        (maxSlopeClimbAngle * Math.PI) / 180
    );
    characterController.setMinSlopeSlideAngle(
        (minSlopeSlideAngle * Math.PI) / 180
    );
    // Also autostep over dynamic bodies
    if (enableAutostep) {
        characterController.enableAutostep(
            autostepMaxHeight,
            autostepMinWidth,
            true
        );
    }
    if (enableSnapToGround) {
        characterController.enableSnapToGround(snapToGroundMaxDistance);
    } else {
        characterController.disableSnapToGround();
    }
    if (applyImpulsesToDynamicBodies) {
        characterController.setApplyImpulsesToDynamicBodies(true);
    } else {
        characterController.setApplyImpulsesToDynamicBodies(false);
    }
    characterControllers.set(tag, characterController);
}

function translateCharacterController(config) {
    const { uid, tag, translation } = config;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (!body) {
        console.warn(
            "[rapierWorker] translateCharacterController, body not found for uid:",
            uid
        );
        return;
    }
    const characterController = characterControllers.get(tag);
    if (!characterController) {
        console.warn("Character controller not found", tag);
        return;
    }
    characterController.computeColliderMovement(
        body.collider(),
        translation,
        RAPIER.QueryFilterFlags["EXCLUDE_SENSORS"]
    );
    // (optional) Check collisions
    for (let i = 0; i < characterController.numComputedCollisions(); i++) {
        // Do something with the collision
        let collision = characterController.computedCollision(i);
        processCharacterControllerCollision(uid, collision);
    }

    // Pass 1: Compute movement excluding sensors
    characterController.computeColliderMovement(
        body.collider(),
        translation,
        RAPIER.QueryFilterFlags.EXCLUDE_SENSORS
    );

    // Store the computed movement from the first pass
    const correctedMovement = characterController.computedMovement();

    // Pass 2: Gather collision data only (without affecting movement)
    characterController.computeColliderMovement(body.collider(), translation);

    // Check and process collisions
    for (let i = 0; i < characterController.numComputedCollisions(); i++) {
        let collision = characterController.computedCollision(i);
        processCharacterControllerCollision(uid, collision);
    }

    // Apply the computed movement from Pass 1
    const t = body.translation();
    correctedMovement.x = correctedMovement.x + t.x;
    correctedMovement.y = correctedMovement.y + t.y;
    correctedMovement.z = correctedMovement.z + t.z;
    body.setNextKinematicTranslation(correctedMovement);
}

function processCharacterControllerCollision(uid, collision) {
    const collider = collision.collider;
    const body = collider.parent();
    const normal1 = collision.normal1;
    const normal2 = collision.normal2;
    const toi = collision.toi;
    const translationDeltaApplied = collision.translationDeltaApplied;
    const translationDeltaRemaining = collision.translationDeltaRemaining;
    const witness1 = collision.witness1;
    const witness2 = collision.witness2;
    // Create message to send to main thread
    const msg = {
        type: CollisionMsgType.CHARACTER_CONTROLLER,
        body1UID: uid,
        body2UID: body.uid,
        normal1,
        normal2,
        toi,
        translationDeltaApplied,
        translationDeltaRemaining,
        witness1,
        witness2,
    };
    characterControllerCollisionEvents.push(msg);
}

function setVelocity(config) {
    const uid = config.uid;
    const velocity = config.velocity;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        body.setLinvel(velocity);
    }
}

function addSphericalJoint(config) {
    const { uid, targetUID, anchor, targetAnchor } = config;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const targetHandle = uidHandle.get(targetUID);
    if (!handle || !targetHandle) return;
    const body = rapierWorld.bodies.get(handle);
    const targetBody = rapierWorld.bodies.get(targetHandle);
    if (!body || !targetBody) return;
    const params = RAPIER.JointData.spherical(anchor, targetAnchor);
    const joint = rapierWorld.createImpulseJoint(
        params,
        body,
        targetBody,
        true
    );
}

function addRevoluteJoint(config) {
    const { uid, targetUID, anchor, targetAnchor, axis } = config;
    const handle = uidHandle.get(uid);
    if (bufferIfNoHandle(handle, config)) return;
    const targetHandle = uidHandle.get(targetUID);
    if (!handle || !targetHandle) return;
    const body = rapierWorld.bodies.get(handle);
    const targetBody = rapierWorld.bodies.get(targetHandle);
    if (!body || !targetBody) return;
    const params = RAPIER.JointData.revolute(anchor, targetAnchor, axis);
    const joint = rapierWorld.createImpulseJoint(
        params,
        body,
        targetBody,
        true
    );
}

function createTrimeshCollider(meshPoints) {
    const vertices = [];
    const indices = [];

    // Flatten meshPoints array and fill vertices
    for (let i = 0; i < meshPoints.length; i++) {
        for (let j = 0; j < meshPoints[i].length; j++) {
            vertices.push(
                meshPoints[i][j].x,
                meshPoints[i][j].y,
                meshPoints[i][j].z
            );
        }
    }

    // Generate indices
    for (let i = 0; i < meshPoints.length - 1; i++) {
        for (let j = 0; j < meshPoints[i].length - 1; j++) {
            indices.push(i * meshPoints[i].length + j);
            indices.push(i * meshPoints[i].length + j + 1);
            indices.push((i + 1) * meshPoints[i].length + j + 1);

            indices.push(i * meshPoints[i].length + j);
            indices.push((i + 1) * meshPoints[i].length + j + 1);
            indices.push((i + 1) * meshPoints[i].length + j);
        }
    }

    // Create trimesh collider description
    const colliderDesc = RAPIER.ColliderDesc.trimesh(vertices, indices);

    return colliderDesc;
}

const commandFunctions = {
    [CommandType.AddBody]: addBody,
    [CommandType.StepWorld]: stepWorld,
    [CommandType.ApplyImpulse]: applyImpulse,
    [CommandType.ApplyImpulseAtPoint]: applyImpulseAtPoint,
    [CommandType.ApplyForce]: applyForce,
    // Can't batch raycast, need to return result
    [CommandType.Raycast]: raycast,
    [CommandType.SetWorldGravity]: setWorldGravity,
    [CommandType.SetLinearDamping]: setLinearDamping,
    [CommandType.ApplyTorque]: applyTorque,
    [CommandType.SetMass]: setMass,
    [CommandType.CreateCharacterController]: createCharacterController,
    [CommandType.TranslateCharacterController]: translateCharacterController,
    [CommandType.Translate]: translate,
    [CommandType.Rotate]: rotate,
    [CommandType.UpdateBody]: updateBody,
    [CommandType.SetVelocity]: setVelocity,
    [CommandType.SetDefaultLinearDamping]: setDefaultLinearDamping,
    [CommandType.SetAngularDamping]: setAngularDamping,
    [CommandType.EnablePhysics]: enablePhysics,
    [CommandType.SetCollisionGroups]: setCollisionGroups,
    [CommandType.SetTimestep]: setTimestep,
    [CommandType.RemoveBody]: removeBody,
    [CommandType.AddSphericalJoint]: addSphericalJoint,
    [CommandType.SetPositionOffset]: setPositionOffset,
    [CommandType.AddRevoluteJoint]: addRevoluteJoint,
    [CommandType.SetCCD]: setCCD,
    [CommandType.CastShape]: castShape,
    [CommandType.SetSizeOverride]: setSizeOverride,
    [CommandType.SetRestitution]: setRestitution,
    [CommandType.SetFriction]: setFriction,
};

function runCommands(commands) {
    if (!commands || commands.length === 0) return;
    for (let i = 0; i < commands.length; i++) {
        const command = commands[i];
        const commandFunction = commandFunctions[command.type];
        if (commandFunction) {
            commandFunction(command);
        } else {
            console.error("Unknown command type", command.type);
        }
    }
    return true;
}

function removeBody(config) {
    const uid = config.uid;
    const handle = uidHandle.get(uid);
    uidHandle.delete(uid);
    if (!handle) return;
    const body = rapierWorld.bodies.get(handle);
    if (body) {
        rapierWorld.removeRigidBody(body);
    }
}

function bufferIfNoHandle(handle, config) {
    if (handle === undefined) {
        const configCopy = JSON.parse(JSON.stringify(config));
        addPostDefineCommands(configCopy);
        return true;
    }
    return false;
}

// Expose the worker's API using Comlink
Comlink.expose({
    initWorld,
    addBody,
    stepWorld,
    applyImpulse,
    applyImpulseAtPoint,
    applyForce,
    raycast,
    castShape, // Add castShape to the exposed functions
    setWorldGravity,
    setLinearDamping,
    applyTorque,
    setMass,
    runCommands,
    createCharacterController,
    translateCharacterController,
    debugRender,
    removeBody,
});