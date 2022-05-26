'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9070],
  {
    99070: (t, e, n) => {
      n.r(e), n.d(e, { loadGLTFMesh: () => B });
      var o = n(22303),
        r = n(3172),
        s = n(30175),
        a = n(70586),
        i = n(21787),
        c = n(46521),
        u = n(65617),
        l = n(88669),
        f = n(62540),
        p = n(60746),
        m = n(81118),
        g = n(71630),
        d = n(56481),
        C = n(20773),
        x = n(11077),
        w = n(8323),
        h = n(66459),
        y = n(40270),
        b = n(88246),
        v = n(91911),
        A = n(64291),
        E = n(57758),
        T = n(35371),
        R = n(56067),
        M = n(75488),
        S = n(10816);
      async function B(t, e, n) {
        const i = new y.C(
            (function (t) {
              return null != t && t.resolveFile
                ? {
                    busy: !1,
                    request: async (e, n, o) => {
                      const s = t.resolveFile(e),
                        i =
                          'image' === n
                            ? 'image'
                            : 'binary' === n
                            ? 'array-buffer'
                            : 'json';
                      return (
                        await (0, r.default)(s, {
                          responseType: i,
                          signal: (0, a.pC)(o) ? o.signal : null,
                        })
                      ).data;
                    },
                  }
                : null;
            })(n),
          ),
          c = (await (0, b.z)(i, e, n, !0)).model,
          f = c.lods.shift(),
          C = new Map(),
          x = new Map();
        c.textures.forEach((t, e) =>
          C.set(
            e,
            (function (t) {
              return new m.Z({ data: t.data, wrap: L(t.parameters.wrap) });
            })(t),
          ),
        ),
          c.materials.forEach((t, e) =>
            x.set(
              e,
              (function (t, e) {
                const n = new o.Z(
                    (function (t, e) {
                      return (0, l.f)(P(t[0]), P(t[1]), P(t[2]), e);
                    })(t.color, t.opacity),
                  ),
                  r = t.emissiveFactor
                    ? new o.Z(
                        (function (t) {
                          return (0, u.f)(P(t[0]), P(t[1]), P(t[2]));
                        })(t.emissiveFactor),
                      )
                    : null;
                return new p.Z({
                  color: n,
                  colorTexture: (0, a.Wg)(
                    (0, a.yw)(t.textureColor, (t) => e.get(t)),
                  ),
                  normalTexture: (0, a.Wg)(
                    (0, a.yw)(t.textureNormal, (t) => e.get(t)),
                  ),
                  emissiveColor: r,
                  emissiveTexture: (0, a.Wg)(
                    (0, a.yw)(t.textureEmissive, (t) => e.get(t)),
                  ),
                  occlusionTexture: (0, a.Wg)(
                    (0, a.yw)(t.textureOcclusion, (t) => e.get(t)),
                  ),
                  alphaMode: k(t.alphaMode),
                  alphaCutoff: t.alphaCutoff,
                  doubleSided: t.doubleSided,
                  metallic: t.metallicFactor,
                  roughness: t.roughnessFactor,
                  metallicRoughnessTexture: (0, a.Wg)(
                    (0, a.yw)(t.textureMetallicRoughness, (t) => e.get(t)),
                  ),
                });
              })(t, C),
            ),
          );
        const v = (function (t) {
          let e = 0;
          const n = { color: !1, tangent: !1, normal: !1, texCoord0: !1 },
            o = new Map(),
            r = new Map(),
            a = [];
          for (const i of t.parts) {
            const {
                attributes: {
                  position: t,
                  normal: c,
                  color: u,
                  tangent: l,
                  texCoord0: f,
                },
              } = i,
              p = `\n      ${$(t, o)}/\n      ${$(c, o)}/\n      ${$(
                u,
                o,
              )}/\n      ${$(l, o)}/\n      ${$(f, o)}/\n      ${F(
                i.transform,
              )}\n    `;
            let m = !1;
            const g = (0, s.s1)(
              r,
              p,
              () => ((m = !0), { start: e, length: t.count }),
            );
            m && (e += t.count),
              c && (n.normal = !0),
              u && (n.color = !0),
              l && (n.tangent = !0),
              f && (n.texCoord0 = !0),
              a.push({ gltf: i, writeVertices: m, region: g });
          }
          return {
            vertexAttributes: {
              position: (0, w.gS)(d.fP, e),
              normal: n.normal ? (0, w.gS)(d.ct, e) : null,
              tangent: n.tangent ? (0, w.gS)(d.ek, e) : null,
              color: n.color ? (0, w.gS)(d.mc, e) : null,
              texCoord0: n.texCoord0 ? (0, w.gS)(d.Eu, e) : null,
            },
            parts: a,
            components: [],
          };
        })(f);
        for (const t of v.parts) I(v, t, x);
        const {
            position: A,
            normal: E,
            tangent: T,
            color: R,
            texCoord0: M,
          } = v.vertexAttributes,
          S = {
            position: A.typedBuffer,
            normal: (0, a.pC)(E) ? E.typedBuffer : null,
            tangent: (0, a.pC)(T) ? T.typedBuffer : null,
            uv: (0, a.pC)(M) ? M.typedBuffer : null,
            color: (0, a.pC)(R) ? R.typedBuffer : null,
          },
          B = (0, h.w1)(S, t, n);
        return {
          transform: B.transform,
          components: v.components,
          spatialReference: t.spatialReference,
          vertexAttributes: new g.Q({
            position: B.vertexAttributes.position,
            normal: B.vertexAttributes.normal,
            tangent: B.vertexAttributes.tangent,
            color: S.color,
            uv: S.uv,
          }),
        };
      }
      function $(t, e) {
        if ((0, a.Wi)(t)) return '-';
        const n = t.typedBuffer;
        return `${(0, s.s1)(e, n.buffer, () => e.size)}/${n.byteOffset}/${
          n.byteLength
        }`;
      }
      function F(t) {
        return (0, a.pC)(t) ? t.toString() : '-';
      }
      function I(t, e, n) {
        e.writeVertices &&
          (function (t, e) {
            const {
                position: n,
                normal: o,
                tangent: r,
                color: s,
                texCoord0: u,
              } = t.vertexAttributes,
              l = e.region.start,
              { attributes: f, transform: p } = e.gltf,
              m = f.position.count;
            if (
              ((0, C.t)(n.slice(l, m), f.position, p),
              (0, a.pC)(f.normal) && (0, a.pC)(o))
            ) {
              const t = (0, i.a)((0, c.c)(), p);
              (0, C.a)(o.slice(l, m), f.normal, t);
            } else
              (0, a.pC)(o) && (0, R.f)(o, 0, 0, 1, { dstIndex: l, count: m });
            if ((0, a.pC)(f.tangent) && (0, a.pC)(r)) {
              const t = (0, i.a)((0, c.c)(), p);
              (0, x.t)(r.slice(l, m), f.tangent, t);
            } else
              (0, a.pC)(r) &&
                (0, M.f)(r, 0, 0, 1, 1, { dstIndex: l, count: m });
            if (
              ((0, a.pC)(f.texCoord0) && (0, a.pC)(u)
                ? (0, S.n)(u.slice(l, m), f.texCoord0)
                : (0, a.pC)(u) && (0, S.f)(u, 0, 0, { dstIndex: l, count: m }),
              (0, a.pC)(f.color) && (0, a.pC)(s))
            ) {
              const t = f.color,
                e = s.slice(l, m);
              if (4 === t.elementCount)
                t instanceof d.ek
                  ? (0, x.s)(e, t, 255)
                  : t instanceof d.mc
                  ? (0, M.c)(e, t)
                  : t instanceof d.v6 && (0, x.a)(e, t, 8);
              else {
                (0, M.f)(e, 255, 255, 255, 255);
                const n = d.ne.fromTypedArray(
                  e.typedBuffer,
                  e.typedBufferStride,
                );
                t instanceof d.ct
                  ? (0, C.s)(n, t, 255)
                  : t instanceof d.ne
                  ? (0, R.c)(n, t)
                  : t instanceof d.mw && (0, C.b)(n, t, 8);
              }
            } else (0, a.pC)(s) && (0, M.f)(s.slice(l, m), 255, 255, 255, 255);
          })(t, e);
        const o = e.gltf,
          r = (function (t, e) {
            switch (e) {
              case T.MX.TRIANGLES:
                return (0, v.nh)(t, A.DX);
              case T.MX.TRIANGLE_STRIP:
                return (0, v.DA)(t);
              case T.MX.TRIANGLE_FAN:
                return (0, v.jX)(t);
            }
          })(o.indices || o.attributes.position.count, o.primitiveType),
          s = e.region.start;
        if (s) for (let t = 0; t < r.length; t++) r[t] += s;
        t.components.push(
          new f.Z({
            faces: r,
            material: n.get(o.material),
            trustSourceNormals: !0,
          }),
        );
      }
      function k(t) {
        switch (t) {
          case 'OPAQUE':
            return 'opaque';
          case 'MASK':
            return 'mask';
          case 'BLEND':
            return 'blend';
        }
      }
      function L(t) {
        return { horizontal: N(t.s), vertical: N(t.t) };
      }
      function N(t) {
        switch (t) {
          case T.e8.CLAMP_TO_EDGE:
            return 'clamp';
          case T.e8.MIRRORED_REPEAT:
            return 'mirror';
          case T.e8.REPEAT:
            return 'repeat';
        }
      }
      function P(t) {
        return t ** (1 / E.K) * 255;
      }
    },
  },
]);
