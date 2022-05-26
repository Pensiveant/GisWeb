'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8833],
  {
    32078: (e, t, r) => {
      r.d(t, { D: () => L, b: () => D });
      var i = r(64822),
        o = r(1391),
        n = r(62707),
        a = r(18361),
        s = r(51546),
        l = r(77171),
        c = r(47624),
        d = r(64267),
        u = r(37099),
        h = r(76056),
        f = r(135),
        m = r(11317),
        p = r(99917),
        g = r(92555),
        v = r(74486),
        _ = r(5543),
        T = r(15817),
        x = r(66242),
        b = r(62554),
        E = r(42001),
        A = r(19419),
        S = r(26322),
        R = r(85504),
        M = r(72303),
        C = r(98401),
        O = r(94124),
        y = r(93396),
        w = r(90692),
        N = r(74709),
        P = r(33680),
        I = r(35065);
      function D(e) {
        const t = new P.kG(),
          r = t.vertex.code,
          D = t.fragment.code;
        t.include(y.a, { name: 'Default Material Shader', output: e.output }),
          t.vertex.uniforms
            .add('proj', 'mat4')
            .add('view', 'mat4')
            .add('cameraPosition', 'vec3')
            .add('localOrigin', 'vec3');
        const L = e.hasModelTransformation;
        return (
          L && t.vertex.uniforms.add('model', 'mat4'),
          t.include(u.f),
          t.varyings.add('vpos', 'vec3'),
          t.include(C.kl, e),
          t.include(c.fQ, e),
          t.include(g.LC, e),
          (e.output !== a.H.Color && e.output !== a.H.Alpha) ||
            (t.include(d.O, e),
            t.include(l.w, { linearDepth: !1, hasModelTransformation: L }),
            e.normalType === d.h.Attribute &&
              e.offsetBackfaces &&
              t.include(n.w),
            t.include(T.Q, e),
            t.include(p.B, e),
            e.instancedColor && t.attributes.add(I.T.INSTANCECOLOR, 'vec4'),
            t.varyings.add('localvpos', 'vec3'),
            t.include(f.D, e),
            t.include(o.q, e),
            t.include(h.R, e),
            t.include(m.c, e),
            t.vertex.uniforms.add('externalColor', 'vec4'),
            t.varyings.add('vcolorExt', 'vec4'),
            e.multipassTerrainEnabled && t.varyings.add('depth', 'float'),
            r.add(N.H`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${e.instancedColor ? 'vcolorExt *= instanceColor;' : ''}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${N.H.float(O.bf)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        }
        else {
          vpos = calculateVPos();
          localvpos = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${
            e.normalType === d.h.Attribute
              ? N.H`
          vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`
              : ''
          }
          vpos = addVerticalOffset(vpos, localOrigin);
          ${
            e.vertexTangents
              ? 'vTangent = dpTransformVertexTangent(tangent);'
              : ''
          }
          gl_Position = transformPosition(proj, view, ${
            L ? 'model,' : ''
          } vpos);
          ${
            e.normalType === d.h.Attribute && e.offsetBackfaces
              ? 'gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);'
              : ''
          }
        }

        ${
          e.multipassTerrainEnabled ? 'depth = (view * vec4(vpos, 1.0)).z;' : ''
        }
        forwardLinearDepth();
        forwardTextureCoordinates();
      }
    `)),
          e.output === a.H.Alpha &&
            (t.include(s.p2, e),
            t.include(O.sj, e),
            e.multipassTerrainEnabled &&
              (t.fragment.include(_.S), t.include(E.l, e)),
            t.fragment.uniforms
              .add('cameraPosition', 'vec3')
              .add('localOrigin', 'vec3')
              .add('opacity', 'float')
              .add('layerOpacity', 'float'),
            e.hasColorTexture && t.fragment.uniforms.add('tex', 'sampler2D'),
            t.fragment.include(w.y),
            D.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${
          e.multipassTerrainEnabled
            ? 'terrainDepthTest(gl_FragCoord, depth);'
            : ''
        }
        ${
          e.hasColorTexture
            ? N.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied ? 'texColor.rgb /= texColor.a;' : ''}
        discardOrAdjustAlpha(texColor);`
            : N.H`vec4 texColor = vec4(1.0);`
        }
        ${
          e.attributeColor
            ? N.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`
            : N.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `
        }
        gl_FragColor = vec4(opacity_);
      }
    `)),
          e.output === a.H.Color &&
            (t.include(s.p2, e),
            t.include(b.X, e),
            t.include(x.K, e),
            t.include(O.sj, e),
            e.receiveShadows && t.include(M.hX, e),
            e.multipassTerrainEnabled &&
              (t.fragment.include(_.S), t.include(E.l, e)),
            t.fragment.uniforms
              .add('cameraPosition', 'vec3')
              .add('localOrigin', 'vec3')
              .add('ambient', 'vec3')
              .add('diffuse', 'vec3')
              .add('opacity', 'float')
              .add('layerOpacity', 'float'),
            e.hasColorTexture && t.fragment.uniforms.add('tex', 'sampler2D'),
            t.include(R.jV, e),
            t.include(S.T, e),
            t.fragment.include(w.y),
            t.include(A.k, e),
            D.add(N.H`
      void main() {
        discardBySlice(vpos);
        ${
          e.multipassTerrainEnabled
            ? 'terrainDepthTest(gl_FragCoord, depth);'
            : ''
        }
        ${
          e.hasColorTexture
            ? N.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied ? 'texColor.rgb /= texColor.a;' : ''}
        discardOrAdjustAlpha(texColor);`
            : N.H`vec4 texColor = vec4(1.0);`
        }
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${
          e.normalType === d.h.ScreenDerivative
            ? N.H`
        vec3 normal = screenDerivativeNormal(localvpos);`
            : N.H`
        shadingParams.normalView = vNormalWorld;
        vec3 normal = shadingNormal(shadingParams);`
        }
        ${e.pbrMode === R.f7.Normal ? 'applyPBRFactors();' : ''}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${
          e.receiveShadows
            ? 'float shadow = readShadowMap(vpos, linearDepth);'
            : e.viewingMode === i.JY.Global
            ? 'float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);'
            : 'float shadow = 0.0;'
        }
        vec3 matColor = max(ambient, diffuse);
        ${
          e.attributeColor
            ? N.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`
            : N.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `
        }
        ${
          e.hasNormalTexture
            ? N.H`
              mat3 tangentSpace = ${
                e.vertexTangents
                  ? 'computeTangentSpace(normal);'
                  : 'computeTangentSpace(normal, vpos, vuv0);'
              }
              vec3 shadedNormal = computeTextureNormal(tangentSpace, vuv0);`
            : 'vec3 shadedNormal = normal;'
        }
        ${
          e.pbrMode === R.f7.Normal || e.pbrMode === R.f7.Schematic
            ? e.viewingMode === i.JY.Global
              ? N.H`vec3 normalGround = normalize(vpos + localOrigin);`
              : N.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`
            : N.H``
        }
        ${
          e.pbrMode === R.f7.Normal || e.pbrMode === R.f7.Schematic
            ? N.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`
            : 'vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);'
        }
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled ? 'gl_FragColor = premultiplyAlpha(gl_FragColor);' : ''}
      }
    `)),
          t.include(v.s, e),
          t
        );
      }
      const L = Object.freeze({ __proto__: null, build: D });
    },
    41846: (e, t, r) => {
      r.d(t, { R: () => N, b: () => w });
      var i = r(64822),
        o = r(1391),
        n = r(62707),
        a = r(18361),
        s = r(51546),
        l = r(77171),
        c = r(47624),
        d = r(64267),
        u = r(37099),
        h = r(76056),
        f = r(135),
        m = r(11317),
        p = r(92555),
        g = r(74486),
        v = r(5543),
        _ = r(66242),
        T = r(62554),
        x = r(42001),
        b = r(26322),
        E = r(85504),
        A = r(72303),
        S = r(98401),
        R = r(94124),
        M = r(90692),
        C = r(74709),
        O = r(33680),
        y = r(35065);
      function w(e) {
        const t = new O.kG(),
          r = t.vertex.code,
          w = t.fragment.code;
        return (
          t.vertex.uniforms
            .add('proj', 'mat4')
            .add('view', 'mat4')
            .add('cameraPosition', 'vec3')
            .add('localOrigin', 'vec3'),
          t.include(u.f),
          t.varyings.add('vpos', 'vec3'),
          t.include(S.kl, e),
          t.include(c.fQ, e),
          t.include(p.LC, e),
          (e.output !== a.H.Color && e.output !== a.H.Alpha) ||
            (t.include(d.O, e),
            t.include(l.w, { linearDepth: !1 }),
            e.offsetBackfaces && t.include(n.w),
            e.instancedColor && t.attributes.add(y.T.INSTANCECOLOR, 'vec4'),
            t.varyings.add('vNormalWorld', 'vec3'),
            t.varyings.add('localvpos', 'vec3'),
            e.multipassTerrainEnabled && t.varyings.add('depth', 'float'),
            t.include(f.D, e),
            t.include(o.q, e),
            t.include(h.R, e),
            t.include(m.c, e),
            t.vertex.uniforms.add('externalColor', 'vec4'),
            t.varyings.add('vcolorExt', 'vec4'),
            r.add(C.H`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${e.instancedColor ? 'vcolorExt *= instanceColor;' : ''}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${C.H.float(R.bf)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          }
          else {
            vpos = calculateVPos();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${
              e.offsetBackfaces
                ? 'gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);'
                : ''
            }
          }
          ${
            e.multipassTerrainEnabled
              ? C.H`depth = (view * vec4(vpos, 1.0)).z;`
              : ''
          }
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),
          e.output === a.H.Alpha &&
            (t.include(s.p2, e),
            t.include(R.sj, e),
            e.multipassTerrainEnabled &&
              (t.fragment.include(v.S), t.include(x.l, e)),
            t.fragment.uniforms
              .add('cameraPosition', 'vec3')
              .add('localOrigin', 'vec3')
              .add('opacity', 'float')
              .add('layerOpacity', 'float'),
            t.fragment.uniforms.add('view', 'mat4'),
            e.hasColorTexture && t.fragment.uniforms.add('tex', 'sampler2D'),
            t.fragment.include(M.y),
            w.add(C.H`
      void main() {
        discardBySlice(vpos);
        ${
          e.multipassTerrainEnabled
            ? C.H`terrainDepthTest(gl_FragCoord, depth);`
            : ''
        }
        ${
          e.hasColorTexture
            ? C.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied ? 'texColor.rgb /= texColor.a;' : ''}
        discardOrAdjustAlpha(texColor);`
            : C.H`vec4 texColor = vec4(1.0);`
        }
        ${
          e.attributeColor
            ? C.H`
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`
            : C.H`
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `
        }

        gl_FragColor = vec4(opacity_);
      }
    `)),
          e.output === a.H.Color &&
            (t.include(s.p2, e),
            t.include(T.X, e),
            t.include(_.K, e),
            t.include(R.sj, e),
            e.receiveShadows && t.include(A.hX, e),
            e.multipassTerrainEnabled &&
              (t.fragment.include(v.S), t.include(x.l, e)),
            t.fragment.uniforms
              .add('cameraPosition', 'vec3')
              .add('localOrigin', 'vec3')
              .add('ambient', 'vec3')
              .add('diffuse', 'vec3')
              .add('opacity', 'float')
              .add('layerOpacity', 'float'),
            t.fragment.uniforms.add('view', 'mat4'),
            e.hasColorTexture && t.fragment.uniforms.add('tex', 'sampler2D'),
            t.include(E.jV, e),
            t.include(b.T, e),
            t.fragment.include(M.y),
            w.add(C.H`
      void main() {
        discardBySlice(vpos);
        ${
          e.multipassTerrainEnabled
            ? C.H`terrainDepthTest(gl_FragCoord, depth);`
            : ''
        }
        ${
          e.hasColorTexture
            ? C.H`
        vec4 texColor = texture2D(tex, vuv0);
        ${e.textureAlphaPremultiplied ? 'texColor.rgb /= texColor.a;' : ''}
        discardOrAdjustAlpha(texColor);`
            : C.H`vec4 texColor = vec4(1.0);`
        }
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${e.pbrMode === E.f7.Normal ? 'applyPBRFactors();' : ''}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * lightingMainIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${
          e.receiveShadows
            ? 'float shadow = readShadowMap(vpos, linearDepth);'
            : e.viewingMode === i.JY.Global
            ? 'float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);'
            : 'float shadow = 0.0;'
        }
        vec3 matColor = max(ambient, diffuse);
        ${
          e.attributeColor
            ? C.H`
        vec3 albedo_ = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`
            : C.H`
        vec3 albedo_ = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
        float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));
        `
        }
        ${C.H`
        vec3 shadedNormal = normalize(vNormalWorld);
        albedo_ *= 1.2;
        vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
        float alignmentLightView = clamp(dot(viewForward, -lightingMainDirection), 0.0, 1.0);
        float transmittance = 1.0 - clamp(dot(viewForward, shadedNormal), 0.0, 1.0);
        float treeRadialFalloff = vColor.r;
        float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
        additionalLight += backLightFactor * lightingMainIntensity;`}
        ${
          e.pbrMode === E.f7.Normal || e.pbrMode === E.f7.Schematic
            ? e.viewingMode === i.JY.Global
              ? C.H`vec3 normalGround = normalize(vpos + localOrigin);`
              : C.H`vec3 normalGround = vec3(0.0, 0.0, 1.0);`
            : C.H``
        }
        ${
          e.pbrMode === E.f7.Normal || e.pbrMode === E.f7.Schematic
            ? C.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * lightingMainIntensity[2];
            vec3 shadedColor = evaluateSceneLightingPBR(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`
            : 'vec3 shadedColor = evaluateSceneLighting(shadedNormal, albedo_, shadow, 1.0 - ssao, additionalLight);'
        }
        gl_FragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${e.oitEnabled ? 'gl_FragColor = premultiplyAlpha(gl_FragColor);' : ''}
      }
    `)),
          t.include(g.s, e),
          t
        );
      }
      const N = Object.freeze({ __proto__: null, build: w });
    },
    21787: (e, t, r) => {
      r.d(t, { a: () => s, f: () => o, i: () => c, t: () => n });
      var i = r(46851);
      function o(e, t) {
        return (
          (e[0] = t[0]),
          (e[1] = t[1]),
          (e[2] = t[2]),
          (e[3] = t[4]),
          (e[4] = t[5]),
          (e[5] = t[6]),
          (e[6] = t[8]),
          (e[7] = t[9]),
          (e[8] = t[10]),
          e
        );
      }
      function n(e, t) {
        if (e === t) {
          const r = t[1],
            i = t[2],
            o = t[5];
          (e[1] = t[3]),
            (e[2] = t[6]),
            (e[3] = r),
            (e[5] = t[7]),
            (e[6] = i),
            (e[7] = o);
        } else
          (e[0] = t[0]),
            (e[1] = t[3]),
            (e[2] = t[6]),
            (e[3] = t[1]),
            (e[4] = t[4]),
            (e[5] = t[7]),
            (e[6] = t[2]),
            (e[7] = t[5]),
            (e[8] = t[8]);
        return e;
      }
      function a(e, t, r) {
        const i = t[0],
          o = t[1],
          n = t[2],
          a = t[3],
          s = t[4],
          l = t[5],
          c = t[6],
          d = t[7],
          u = t[8],
          h = r[0],
          f = r[1],
          m = r[2],
          p = r[3],
          g = r[4],
          v = r[5],
          _ = r[6],
          T = r[7],
          x = r[8];
        return (
          (e[0] = h * i + f * a + m * c),
          (e[1] = h * o + f * s + m * d),
          (e[2] = h * n + f * l + m * u),
          (e[3] = p * i + g * a + v * c),
          (e[4] = p * o + g * s + v * d),
          (e[5] = p * n + g * l + v * u),
          (e[6] = _ * i + T * a + x * c),
          (e[7] = _ * o + T * s + x * d),
          (e[8] = _ * n + T * l + x * u),
          e
        );
      }
      function s(e, t) {
        const r = t[0],
          i = t[1],
          o = t[2],
          n = t[3],
          a = t[4],
          s = t[5],
          l = t[6],
          c = t[7],
          d = t[8],
          u = t[9],
          h = t[10],
          f = t[11],
          m = t[12],
          p = t[13],
          g = t[14],
          v = t[15],
          _ = r * s - i * a,
          T = r * l - o * a,
          x = r * c - n * a,
          b = i * l - o * s,
          E = i * c - n * s,
          A = o * c - n * l,
          S = d * p - u * m,
          R = d * g - h * m,
          M = d * v - f * m,
          C = u * g - h * p,
          O = u * v - f * p,
          y = h * v - f * g;
        let w = _ * y - T * O + x * C + b * M - E * R + A * S;
        return w
          ? ((w = 1 / w),
            (e[0] = (s * y - l * O + c * C) * w),
            (e[1] = (l * M - a * y - c * R) * w),
            (e[2] = (a * O - s * M + c * S) * w),
            (e[3] = (o * O - i * y - n * C) * w),
            (e[4] = (r * y - o * M + n * R) * w),
            (e[5] = (i * M - r * O - n * S) * w),
            (e[6] = (p * A - g * E + v * b) * w),
            (e[7] = (g * x - m * A - v * T) * w),
            (e[8] = (m * E - p * x + v * _) * w),
            e)
          : null;
      }
      function l(e, t, r) {
        return (
          (e[0] = t[0] - r[0]),
          (e[1] = t[1] - r[1]),
          (e[2] = t[2] - r[2]),
          (e[3] = t[3] - r[3]),
          (e[4] = t[4] - r[4]),
          (e[5] = t[5] - r[5]),
          (e[6] = t[6] - r[6]),
          (e[7] = t[7] - r[7]),
          (e[8] = t[8] - r[8]),
          e
        );
      }
      function c(e) {
        const t = i.E,
          r = e[0],
          o = e[1],
          n = e[2],
          a = e[3],
          s = e[4],
          l = e[5],
          c = e[6],
          d = e[7],
          u = e[8];
        return (
          Math.abs(1 - (r * r + a * a + c * c)) <= t &&
          Math.abs(1 - (o * o + s * s + d * d)) <= t &&
          Math.abs(1 - (n * n + l * l + u * u)) <= t
        );
      }
      const d = a,
        u = l;
      Object.freeze({
        __proto__: null,
        fromMat4: o,
        copy: function (e, t) {
          return (
            (e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = t[2]),
            (e[3] = t[3]),
            (e[4] = t[4]),
            (e[5] = t[5]),
            (e[6] = t[6]),
            (e[7] = t[7]),
            (e[8] = t[8]),
            e
          );
        },
        set: function (e, t, r, i, o, n, a, s, l, c) {
          return (
            (e[0] = t),
            (e[1] = r),
            (e[2] = i),
            (e[3] = o),
            (e[4] = n),
            (e[5] = a),
            (e[6] = s),
            (e[7] = l),
            (e[8] = c),
            e
          );
        },
        identity: function (e) {
          return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 1),
            (e[5] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 1),
            e
          );
        },
        transpose: n,
        invert: function (e, t) {
          const r = t[0],
            i = t[1],
            o = t[2],
            n = t[3],
            a = t[4],
            s = t[5],
            l = t[6],
            c = t[7],
            d = t[8],
            u = d * a - s * c,
            h = -d * n + s * l,
            f = c * n - a * l;
          let m = r * u + i * h + o * f;
          return m
            ? ((m = 1 / m),
              (e[0] = u * m),
              (e[1] = (-d * i + o * c) * m),
              (e[2] = (s * i - o * a) * m),
              (e[3] = h * m),
              (e[4] = (d * r - o * l) * m),
              (e[5] = (-s * r + o * n) * m),
              (e[6] = f * m),
              (e[7] = (-c * r + i * l) * m),
              (e[8] = (a * r - i * n) * m),
              e)
            : null;
        },
        adjoint: function (e, t) {
          const r = t[0],
            i = t[1],
            o = t[2],
            n = t[3],
            a = t[4],
            s = t[5],
            l = t[6],
            c = t[7],
            d = t[8];
          return (
            (e[0] = a * d - s * c),
            (e[1] = o * c - i * d),
            (e[2] = i * s - o * a),
            (e[3] = s * l - n * d),
            (e[4] = r * d - o * l),
            (e[5] = o * n - r * s),
            (e[6] = n * c - a * l),
            (e[7] = i * l - r * c),
            (e[8] = r * a - i * n),
            e
          );
        },
        determinant: function (e) {
          const t = e[0],
            r = e[1],
            i = e[2],
            o = e[3],
            n = e[4],
            a = e[5],
            s = e[6],
            l = e[7],
            c = e[8];
          return (
            t * (c * n - a * l) + r * (-c * o + a * s) + i * (l * o - n * s)
          );
        },
        multiply: a,
        translate: function (e, t, r) {
          const i = t[0],
            o = t[1],
            n = t[2],
            a = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            d = t[7],
            u = t[8],
            h = r[0],
            f = r[1];
          return (
            (e[0] = i),
            (e[1] = o),
            (e[2] = n),
            (e[3] = a),
            (e[4] = s),
            (e[5] = l),
            (e[6] = h * i + f * a + c),
            (e[7] = h * o + f * s + d),
            (e[8] = h * n + f * l + u),
            e
          );
        },
        rotate: function (e, t, r) {
          const i = t[0],
            o = t[1],
            n = t[2],
            a = t[3],
            s = t[4],
            l = t[5],
            c = t[6],
            d = t[7],
            u = t[8],
            h = Math.sin(r),
            f = Math.cos(r);
          return (
            (e[0] = f * i + h * a),
            (e[1] = f * o + h * s),
            (e[2] = f * n + h * l),
            (e[3] = f * a - h * i),
            (e[4] = f * s - h * o),
            (e[5] = f * l - h * n),
            (e[6] = c),
            (e[7] = d),
            (e[8] = u),
            e
          );
        },
        scale: function (e, t, r) {
          const i = r[0],
            o = r[1],
            n = r[2];
          return (
            (e[0] = i * t[0]),
            (e[1] = i * t[1]),
            (e[2] = i * t[2]),
            (e[3] = o * t[3]),
            (e[4] = o * t[4]),
            (e[5] = o * t[5]),
            (e[6] = n * t[6]),
            (e[7] = n * t[7]),
            (e[8] = n * t[8]),
            e
          );
        },
        scaleByVec2: function (e, t, r) {
          const i = r[0],
            o = r[1];
          return (
            (e[0] = i * t[0]),
            (e[1] = i * t[1]),
            (e[2] = i * t[2]),
            (e[3] = o * t[3]),
            (e[4] = o * t[4]),
            (e[5] = o * t[5]),
            e
          );
        },
        fromTranslation: function (e, t) {
          return (
            (e[0] = 1),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = 1),
            (e[5] = 0),
            (e[6] = t[0]),
            (e[7] = t[1]),
            (e[8] = 1),
            e
          );
        },
        fromRotation: function (e, t) {
          const r = Math.sin(t),
            i = Math.cos(t);
          return (
            (e[0] = i),
            (e[1] = r),
            (e[2] = 0),
            (e[3] = -r),
            (e[4] = i),
            (e[5] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 1),
            e
          );
        },
        fromScaling: function (e, t) {
          return (
            (e[0] = t[0]),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = t[1]),
            (e[5] = 0),
            (e[6] = 0),
            (e[7] = 0),
            (e[8] = 1),
            e
          );
        },
        fromMat2d: function (e, t) {
          return (
            (e[0] = t[0]),
            (e[1] = t[1]),
            (e[2] = 0),
            (e[3] = t[2]),
            (e[4] = t[3]),
            (e[5] = 0),
            (e[6] = t[4]),
            (e[7] = t[5]),
            (e[8] = 1),
            e
          );
        },
        fromQuat: function (e, t) {
          const r = t[0],
            i = t[1],
            o = t[2],
            n = t[3],
            a = r + r,
            s = i + i,
            l = o + o,
            c = r * a,
            d = i * a,
            u = i * s,
            h = o * a,
            f = o * s,
            m = o * l,
            p = n * a,
            g = n * s,
            v = n * l;
          return (
            (e[0] = 1 - u - m),
            (e[3] = d - v),
            (e[6] = h + g),
            (e[1] = d + v),
            (e[4] = 1 - c - m),
            (e[7] = f - p),
            (e[2] = h - g),
            (e[5] = f + p),
            (e[8] = 1 - c - u),
            e
          );
        },
        normalFromMat4Legacy: function (e, t) {
          const r = t[0],
            i = t[1],
            o = t[2],
            n = t[4],
            a = t[5],
            s = t[6],
            l = t[8],
            c = t[9],
            d = t[10],
            u = d * a - s * c,
            h = -d * n + s * l,
            f = c * n - a * l,
            m = r * u + i * h + o * f;
          if (!m) return null;
          const p = 1 / m;
          return (
            (e[0] = u * p),
            (e[1] = (-d * i + o * c) * p),
            (e[2] = (s * i - o * a) * p),
            (e[3] = h * p),
            (e[4] = (d * r - o * l) * p),
            (e[5] = (-s * r + o * n) * p),
            (e[6] = f * p),
            (e[7] = (-c * r + i * l) * p),
            (e[8] = (a * r - i * n) * p),
            e
          );
        },
        normalFromMat4: s,
        projection: function (e, t, r) {
          return (
            (e[0] = 2 / t),
            (e[1] = 0),
            (e[2] = 0),
            (e[3] = 0),
            (e[4] = -2 / r),
            (e[5] = 0),
            (e[6] = -1),
            (e[7] = 1),
            (e[8] = 1),
            e
          );
        },
        str: function (e) {
          return (
            'mat3(' +
            e[0] +
            ', ' +
            e[1] +
            ', ' +
            e[2] +
            ', ' +
            e[3] +
            ', ' +
            e[4] +
            ', ' +
            e[5] +
            ', ' +
            e[6] +
            ', ' +
            e[7] +
            ', ' +
            e[8] +
            ')'
          );
        },
        frob: function (e) {
          return Math.sqrt(
            e[0] ** 2 +
              e[1] ** 2 +
              e[2] ** 2 +
              e[3] ** 2 +
              e[4] ** 2 +
              e[5] ** 2 +
              e[6] ** 2 +
              e[7] ** 2 +
              e[8] ** 2,
          );
        },
        add: function (e, t, r) {
          return (
            (e[0] = t[0] + r[0]),
            (e[1] = t[1] + r[1]),
            (e[2] = t[2] + r[2]),
            (e[3] = t[3] + r[3]),
            (e[4] = t[4] + r[4]),
            (e[5] = t[5] + r[5]),
            (e[6] = t[6] + r[6]),
            (e[7] = t[7] + r[7]),
            (e[8] = t[8] + r[8]),
            e
          );
        },
        subtract: l,
        multiplyScalar: function (e, t, r) {
          return (
            (e[0] = t[0] * r),
            (e[1] = t[1] * r),
            (e[2] = t[2] * r),
            (e[3] = t[3] * r),
            (e[4] = t[4] * r),
            (e[5] = t[5] * r),
            (e[6] = t[6] * r),
            (e[7] = t[7] * r),
            (e[8] = t[8] * r),
            e
          );
        },
        multiplyScalarAndAdd: function (e, t, r, i) {
          return (
            (e[0] = t[0] + r[0] * i),
            (e[1] = t[1] + r[1] * i),
            (e[2] = t[2] + r[2] * i),
            (e[3] = t[3] + r[3] * i),
            (e[4] = t[4] + r[4] * i),
            (e[5] = t[5] + r[5] * i),
            (e[6] = t[6] + r[6] * i),
            (e[7] = t[7] + r[7] * i),
            (e[8] = t[8] + r[8] * i),
            e
          );
        },
        exactEquals: function (e, t) {
          return (
            e[0] === t[0] &&
            e[1] === t[1] &&
            e[2] === t[2] &&
            e[3] === t[3] &&
            e[4] === t[4] &&
            e[5] === t[5] &&
            e[6] === t[6] &&
            e[7] === t[7] &&
            e[8] === t[8]
          );
        },
        equals: function (e, t) {
          const r = e[0],
            o = e[1],
            n = e[2],
            a = e[3],
            s = e[4],
            l = e[5],
            c = e[6],
            d = e[7],
            u = e[8],
            h = t[0],
            f = t[1],
            m = t[2],
            p = t[3],
            g = t[4],
            v = t[5],
            _ = t[6],
            T = t[7],
            x = t[8];
          return (
            Math.abs(r - h) <= i.E * Math.max(1, Math.abs(r), Math.abs(h)) &&
            Math.abs(o - f) <= i.E * Math.max(1, Math.abs(o), Math.abs(f)) &&
            Math.abs(n - m) <= i.E * Math.max(1, Math.abs(n), Math.abs(m)) &&
            Math.abs(a - p) <= i.E * Math.max(1, Math.abs(a), Math.abs(p)) &&
            Math.abs(s - g) <= i.E * Math.max(1, Math.abs(s), Math.abs(g)) &&
            Math.abs(l - v) <= i.E * Math.max(1, Math.abs(l), Math.abs(v)) &&
            Math.abs(c - _) <= i.E * Math.max(1, Math.abs(c), Math.abs(_)) &&
            Math.abs(d - T) <= i.E * Math.max(1, Math.abs(d), Math.abs(T)) &&
            Math.abs(u - x) <= i.E * Math.max(1, Math.abs(u), Math.abs(x))
          );
        },
        isOrthoNormal: c,
        mul: d,
        sub: u,
      });
    },
    46521: (e, t, r) => {
      function i() {
        return [1, 0, 0, 0, 1, 0, 0, 0, 1];
      }
      function o(e, t) {
        return new Float64Array(e, t, 9);
      }
      r.d(t, { a: () => o, c: () => i }),
        Object.freeze({
          __proto__: null,
          create: i,
          clone: function (e) {
            return [e[0], e[1], e[2], e[3], e[4], e[5], e[6], e[7], e[8]];
          },
          fromValues: function (e, t, r, i, o, n, a, s, l) {
            return [e, t, r, i, o, n, a, s, l];
          },
          createView: o,
        });
    },
    13598: (e, t, r) => {
      function i() {
        return [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      }
      function o(e) {
        return [
          e[0],
          e[1],
          e[2],
          e[3],
          e[4],
          e[5],
          e[6],
          e[7],
          e[8],
          e[9],
          e[10],
          e[11],
          e[12],
          e[13],
          e[14],
          e[15],
        ];
      }
      function n(e, t) {
        return new Float64Array(e, t, 16);
      }
      r.d(t, { I: () => a, a: () => n, b: () => o, c: () => i });
      const a = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
      Object.freeze({
        __proto__: null,
        create: i,
        clone: o,
        fromValues: function (e, t, r, i, o, n, a, s, l, c, d, u, h, f, m, p) {
          return [e, t, r, i, o, n, a, s, l, c, d, u, h, f, m, p];
        },
        createView: n,
        IDENTITY: a,
      });
    },
    51305: (e, t, r) => {
      r.d(t, {
        c: () => f,
        g: () => d,
        j: () => O,
        k: () => p,
        m: () => u,
        s: () => c,
      });
      var i = r(46521),
        o = r(94961),
        n = r(65617),
        a = r(46851),
        s = r(17896),
        l = r(98766);
      function c(e, t, r) {
        r *= 0.5;
        const i = Math.sin(r);
        return (
          (e[0] = i * t[0]),
          (e[1] = i * t[1]),
          (e[2] = i * t[2]),
          (e[3] = Math.cos(r)),
          e
        );
      }
      function d(e, t) {
        const r = 2 * Math.acos(t[3]),
          i = Math.sin(r / 2);
        return (
          i > a.E
            ? ((e[0] = t[0] / i), (e[1] = t[1] / i), (e[2] = t[2] / i))
            : ((e[0] = 1), (e[1] = 0), (e[2] = 0)),
          r
        );
      }
      function u(e, t, r) {
        const i = t[0],
          o = t[1],
          n = t[2],
          a = t[3],
          s = r[0],
          l = r[1],
          c = r[2],
          d = r[3];
        return (
          (e[0] = i * d + a * s + o * c - n * l),
          (e[1] = o * d + a * l + n * s - i * c),
          (e[2] = n * d + a * c + i * l - o * s),
          (e[3] = a * d - i * s - o * l - n * c),
          e
        );
      }
      function h(e, t, r, i) {
        const o = t[0],
          n = t[1],
          s = t[2],
          l = t[3];
        let c,
          d,
          u,
          h,
          f,
          m = r[0],
          p = r[1],
          g = r[2],
          v = r[3];
        return (
          (d = o * m + n * p + s * g + l * v),
          d < 0 && ((d = -d), (m = -m), (p = -p), (g = -g), (v = -v)),
          1 - d > a.E
            ? ((c = Math.acos(d)),
              (u = Math.sin(c)),
              (h = Math.sin((1 - i) * c) / u),
              (f = Math.sin(i * c) / u))
            : ((h = 1 - i), (f = i)),
          (e[0] = h * o + f * m),
          (e[1] = h * n + f * p),
          (e[2] = h * s + f * g),
          (e[3] = h * l + f * v),
          e
        );
      }
      function f(e, t) {
        return (e[0] = -t[0]), (e[1] = -t[1]), (e[2] = -t[2]), (e[3] = t[3]), e;
      }
      function m(e, t) {
        const r = t[0] + t[4] + t[8];
        let i;
        if (r > 0)
          (i = Math.sqrt(r + 1)),
            (e[3] = 0.5 * i),
            (i = 0.5 / i),
            (e[0] = (t[5] - t[7]) * i),
            (e[1] = (t[6] - t[2]) * i),
            (e[2] = (t[1] - t[3]) * i);
        else {
          let r = 0;
          t[4] > t[0] && (r = 1), t[8] > t[3 * r + r] && (r = 2);
          const o = (r + 1) % 3,
            n = (r + 2) % 3;
          (i = Math.sqrt(t[3 * r + r] - t[3 * o + o] - t[3 * n + n] + 1)),
            (e[r] = 0.5 * i),
            (i = 0.5 / i),
            (e[3] = (t[3 * o + n] - t[3 * n + o]) * i),
            (e[o] = (t[3 * o + r] + t[3 * r + o]) * i),
            (e[n] = (t[3 * n + r] + t[3 * r + n]) * i);
        }
        return e;
      }
      function p(e, t, r, i) {
        const o = (0.5 * Math.PI) / 180;
        (t *= o), (r *= o), (i *= o);
        const n = Math.sin(t),
          a = Math.cos(t),
          s = Math.sin(r),
          l = Math.cos(r),
          c = Math.sin(i),
          d = Math.cos(i);
        return (
          (e[0] = n * l * d - a * s * c),
          (e[1] = a * s * d + n * l * c),
          (e[2] = a * l * c - n * s * d),
          (e[3] = a * l * d + n * s * c),
          e
        );
      }
      const g = l.c,
        v = l.s,
        _ = l.a,
        T = u,
        x = l.b,
        b = l.d,
        E = l.l,
        A = l.e,
        S = A,
        R = l.f,
        M = R,
        C = l.n,
        O = l.g,
        y = l.h,
        w = (0, n.c)(),
        N = (0, n.f)(1, 0, 0),
        P = (0, n.f)(0, 1, 0),
        I = (0, o.a)(),
        D = (0, o.a)(),
        L = (0, i.c)();
      Object.freeze({
        __proto__: null,
        identity: function (e) {
          return (e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e;
        },
        setAxisAngle: c,
        getAxisAngle: d,
        multiply: u,
        rotateX: function (e, t, r) {
          r *= 0.5;
          const i = t[0],
            o = t[1],
            n = t[2],
            a = t[3],
            s = Math.sin(r),
            l = Math.cos(r);
          return (
            (e[0] = i * l + a * s),
            (e[1] = o * l + n * s),
            (e[2] = n * l - o * s),
            (e[3] = a * l - i * s),
            e
          );
        },
        rotateY: function (e, t, r) {
          r *= 0.5;
          const i = t[0],
            o = t[1],
            n = t[2],
            a = t[3],
            s = Math.sin(r),
            l = Math.cos(r);
          return (
            (e[0] = i * l - n * s),
            (e[1] = o * l + a * s),
            (e[2] = n * l + i * s),
            (e[3] = a * l - o * s),
            e
          );
        },
        rotateZ: function (e, t, r) {
          r *= 0.5;
          const i = t[0],
            o = t[1],
            n = t[2],
            a = t[3],
            s = Math.sin(r),
            l = Math.cos(r);
          return (
            (e[0] = i * l + o * s),
            (e[1] = o * l - i * s),
            (e[2] = n * l + a * s),
            (e[3] = a * l - n * s),
            e
          );
        },
        calculateW: function (e, t) {
          const r = t[0],
            i = t[1],
            o = t[2];
          return (
            (e[0] = r),
            (e[1] = i),
            (e[2] = o),
            (e[3] = Math.sqrt(Math.abs(1 - r * r - i * i - o * o))),
            e
          );
        },
        slerp: h,
        random: function (e) {
          const t = (0, a.R)(),
            r = (0, a.R)(),
            i = (0, a.R)(),
            o = Math.sqrt(1 - t),
            n = Math.sqrt(t);
          return (
            (e[0] = o * Math.sin(2 * Math.PI * r)),
            (e[1] = o * Math.cos(2 * Math.PI * r)),
            (e[2] = n * Math.sin(2 * Math.PI * i)),
            (e[3] = n * Math.cos(2 * Math.PI * i)),
            e
          );
        },
        invert: function (e, t) {
          const r = t[0],
            i = t[1],
            o = t[2],
            n = t[3],
            a = r * r + i * i + o * o + n * n,
            s = a ? 1 / a : 0;
          return (
            (e[0] = -r * s), (e[1] = -i * s), (e[2] = -o * s), (e[3] = n * s), e
          );
        },
        conjugate: f,
        fromMat3: m,
        fromEuler: p,
        str: function (e) {
          return 'quat(' + e[0] + ', ' + e[1] + ', ' + e[2] + ', ' + e[3] + ')';
        },
        copy: g,
        set: v,
        add: _,
        mul: T,
        scale: x,
        dot: b,
        lerp: E,
        length: A,
        len: S,
        squaredLength: R,
        sqrLen: M,
        normalize: C,
        exactEquals: O,
        equals: y,
        rotationTo: function (e, t, r) {
          const i = (0, s.d)(t, r);
          return i < -0.999999
            ? ((0, s.c)(w, N, t),
              (0, s.u)(w) < 1e-6 && (0, s.c)(w, P, t),
              (0, s.n)(w, w),
              c(e, w, Math.PI),
              e)
            : i > 0.999999
            ? ((e[0] = 0), (e[1] = 0), (e[2] = 0), (e[3] = 1), e)
            : ((0, s.c)(w, t, r),
              (e[0] = w[0]),
              (e[1] = w[1]),
              (e[2] = w[2]),
              (e[3] = 1 + i),
              C(e, e));
        },
        sqlerp: function (e, t, r, i, o, n) {
          return h(I, t, o, n), h(D, r, i, n), h(e, I, D, 2 * n * (1 - n)), e;
        },
        setAxes: function (e, t, r, i) {
          const o = L;
          return (
            (o[0] = r[0]),
            (o[3] = r[1]),
            (o[6] = r[2]),
            (o[1] = i[0]),
            (o[4] = i[1]),
            (o[7] = i[2]),
            (o[2] = -t[0]),
            (o[5] = -t[1]),
            (o[8] = -t[2]),
            C(e, m(e, o))
          );
        },
      });
    },
    94961: (e, t, r) => {
      function i() {
        return [0, 0, 0, 1];
      }
      function o(e) {
        return [e[0], e[1], e[2], e[3]];
      }
      function n(e, t) {
        return new Float64Array(e, t, 4);
      }
      r.d(t, { I: () => a, a: () => i, b: () => o, c: () => n });
      const a = [0, 0, 0, 1];
      Object.freeze({
        __proto__: null,
        create: i,
        clone: o,
        fromValues: function (e, t, r, i) {
          return [e, t, r, i];
        },
        createView: n,
        IDENTITY: a,
      });
    },
    20773: (e, t, r) => {
      r.d(t, { a: () => n, b: () => l, n: () => s, s: () => a, t: () => o });
      var i = r(72220);
      function o(e, t, r) {
        if (e.count !== t.count)
          return void i.c.error(
            'source and destination buffers need to have the same number of elements',
          );
        const o = e.count,
          n = r[0],
          a = r[1],
          s = r[2],
          l = r[4],
          c = r[5],
          d = r[6],
          u = r[8],
          h = r[9],
          f = r[10],
          m = r[12],
          p = r[13],
          g = r[14],
          v = e.typedBuffer,
          _ = e.typedBufferStride,
          T = t.typedBuffer,
          x = t.typedBufferStride;
        for (let e = 0; e < o; e++) {
          const t = e * _,
            r = e * x,
            i = T[r],
            o = T[r + 1],
            b = T[r + 2];
          (v[t] = n * i + l * o + u * b + m),
            (v[t + 1] = a * i + c * o + h * b + p),
            (v[t + 2] = s * i + d * o + f * b + g);
        }
      }
      function n(e, t, r) {
        if (e.count !== t.count)
          return void i.c.error(
            'source and destination buffers need to have the same number of elements',
          );
        const o = e.count,
          n = r[0],
          a = r[1],
          s = r[2],
          l = r[3],
          c = r[4],
          d = r[5],
          u = r[6],
          h = r[7],
          f = r[8],
          m = e.typedBuffer,
          p = e.typedBufferStride,
          g = t.typedBuffer,
          v = t.typedBufferStride;
        for (let e = 0; e < o; e++) {
          const t = e * p,
            r = e * v,
            i = g[r],
            o = g[r + 1],
            _ = g[r + 2];
          (m[t] = n * i + l * o + u * _),
            (m[t + 1] = a * i + c * o + h * _),
            (m[t + 2] = s * i + d * o + f * _);
        }
      }
      function a(e, t, r) {
        const i = Math.min(e.count, t.count),
          o = e.typedBuffer,
          n = e.typedBufferStride,
          a = t.typedBuffer,
          s = t.typedBufferStride;
        for (let e = 0; e < i; e++) {
          const t = e * n,
            i = e * s;
          (o[t] = r * a[i]),
            (o[t + 1] = r * a[i + 1]),
            (o[t + 2] = r * a[i + 2]);
        }
      }
      function s(e, t) {
        const r = Math.min(e.count, t.count),
          i = e.typedBuffer,
          o = e.typedBufferStride,
          n = t.typedBuffer,
          a = t.typedBufferStride;
        for (let e = 0; e < r; e++) {
          const t = e * o,
            r = e * a,
            s = n[r],
            l = n[r + 1],
            c = n[r + 2],
            d = Math.sqrt(s * s + l * l + c * c);
          if (d > 0) {
            const e = 1 / d;
            (i[t] = e * s), (i[t + 1] = e * l), (i[t + 2] = e * c);
          }
        }
      }
      function l(e, t, r) {
        const i = Math.min(e.count, t.count),
          o = e.typedBuffer,
          n = e.typedBufferStride,
          a = t.typedBuffer,
          s = t.typedBufferStride;
        for (let e = 0; e < i; e++) {
          const t = e * n,
            i = e * s;
          (o[t] = a[i] >> r),
            (o[t + 1] = a[i + 1] >> r),
            (o[t + 2] = a[i + 2] >> r);
        }
      }
      Object.freeze({
        __proto__: null,
        transformMat4: o,
        transformMat3: n,
        scale: a,
        normalize: s,
        shiftRight: l,
      });
    },
    56067: (e, t, r) => {
      function i(e, t, r) {
        const i = e.typedBuffer,
          o = e.typedBufferStride,
          n = t.typedBuffer,
          a = t.typedBufferStride,
          s = r ? r.count : t.count;
        let l = (r && r.dstIndex ? r.dstIndex : 0) * o,
          c = (r && r.srcIndex ? r.srcIndex : 0) * a;
        for (let e = 0; e < s; ++e)
          (i[l] = n[c]),
            (i[l + 1] = n[c + 1]),
            (i[l + 2] = n[c + 2]),
            (l += o),
            (c += a);
      }
      function o(e, t, r, i, o) {
        var n, a;
        const s = e.typedBuffer,
          l = e.typedBufferStride,
          c = null != (n = null == o ? void 0 : o.count) ? n : e.count;
        let d = (null != (a = null == o ? void 0 : o.dstIndex) ? a : 0) * l;
        for (let e = 0; e < c; ++e)
          (s[d] = t), (s[d + 1] = r), (s[d + 2] = i), (d += l);
      }
      r.d(t, { c: () => i, f: () => o }),
        Object.freeze({ __proto__: null, copy: i, fill: o });
    },
    72119: (e, t, r) => {
      function i() {
        return new Float32Array(3);
      }
      function o(e, t, r) {
        const i = new Float32Array(3);
        return (i[0] = e), (i[1] = t), (i[2] = r), i;
      }
      function n() {
        return i();
      }
      function a() {
        return o(1, 1, 1);
      }
      function s() {
        return o(1, 0, 0);
      }
      function l() {
        return o(0, 1, 0);
      }
      function c() {
        return o(0, 0, 1);
      }
      r.d(t, { c: () => i, f: () => o });
      const d = n(),
        u = a(),
        h = s(),
        f = l(),
        m = c();
      Object.freeze({
        __proto__: null,
        create: i,
        clone: function (e) {
          const t = new Float32Array(3);
          return (t[0] = e[0]), (t[1] = e[1]), (t[2] = e[2]), t;
        },
        fromValues: o,
        createView: function (e, t) {
          return new Float32Array(e, t, 3);
        },
        zeros: n,
        ones: a,
        unitX: s,
        unitY: l,
        unitZ: c,
        ZEROS: d,
        ONES: u,
        UNIT_X: h,
        UNIT_Y: f,
        UNIT_Z: m,
      });
    },
    32243: (e, t, r) => {
      function i(e) {
        return (
          (e = e || globalThis.location.hostname),
          c.some((t) => {
            var r;
            return null != (null == (r = e) ? void 0 : r.match(t));
          })
        );
      }
      function o(e, t) {
        return e && (t = t || globalThis.location.hostname)
          ? null != t.match(n) || null != t.match(s)
            ? e.replace('static.arcgis.com', 'staticdev.arcgis.com')
            : null != t.match(a) || null != t.match(l)
            ? e.replace('static.arcgis.com', 'staticqa.arcgis.com')
            : e
          : e;
      }
      r.d(t, { pJ: () => o, XO: () => i });
      const n = /^devext.arcgis.com$/,
        a = /^qaext.arcgis.com$/,
        s = /^[\w-]*\.mapsdevext.arcgis.com$/,
        l = /^[\w-]*\.mapsqa.arcgis.com$/,
        c = [
          /^([\w-]*\.)?[\w-]*\.zrh-dev-local.esri.com$/,
          n,
          a,
          /^jsapps.esri.com$/,
          s,
          l,
        ];
    },
    72220: (e, t, r) => {
      r.d(t, { c: () => i });
      const i = r(92604).Z.getLogger('esri.views.3d.support.buffer.math');
    },
    98833: (e, t, r) => {
      r.r(t),
        r.d(t, {
          fetch: () => ai,
          gltfToEngineResources: () => li,
          parseUrl: () => si,
        });
      var i = r(32243),
        o = r(70586),
        n = r(21787),
        a = r(46521),
        s = r(52138),
        l = r(13598),
        c = r(17896),
        d = r(65617),
        u = r(60437),
        h = r(56481),
        f = r(20773),
        m = r(11077),
        p = r(8323),
        g = r(40270),
        v = r(88246),
        _ = r(91911),
        T = r(3172),
        x = r(66643),
        b = r(20102),
        E = r(92604),
        A = r(95330),
        S = r(23670);
      async function R(e, t) {
        const { data: r } = await (0, T.default)(e, {
          responseType: 'image',
          ...t,
        });
        return r;
      }
      var M = r(47026),
        C = r(44553),
        O = r(11726);
      class y {
        constructor(e, t, r, i) {
          (this.primitiveIndices = e),
            (this._numIndexPerPrimitive = t),
            (this.indices = r),
            (this.position = i),
            (this.center = (0, d.c)()),
            (0, O.hu)(e.length >= 1),
            (0, O.hu)(r.length % this._numIndexPerPrimitive == 0),
            (0, O.hu)(r.length >= e.length * this._numIndexPerPrimitive),
            (0, O.hu)(3 === i.size || 4 === i.size);
          const { data: o, size: n } = i,
            a = e.length;
          let s = n * r[this._numIndexPerPrimitive * e[0]];
          w.clear(),
            w.push(s),
            (this.bbMin = (0, d.f)(o[s], o[s + 1], o[s + 2])),
            (this.bbMax = (0, d.a)(this.bbMin));
          for (let t = 0; t < a; ++t) {
            const i = this._numIndexPerPrimitive * e[t];
            for (let e = 0; e < this._numIndexPerPrimitive; ++e) {
              (s = n * r[i + e]), w.push(s);
              let t = o[s];
              (this.bbMin[0] = Math.min(t, this.bbMin[0])),
                (this.bbMax[0] = Math.max(t, this.bbMax[0])),
                (t = o[s + 1]),
                (this.bbMin[1] = Math.min(t, this.bbMin[1])),
                (this.bbMax[1] = Math.max(t, this.bbMax[1])),
                (t = o[s + 2]),
                (this.bbMin[2] = Math.min(t, this.bbMin[2])),
                (this.bbMax[2] = Math.max(t, this.bbMax[2]));
            }
          }
          (0, c.e)(this.center, this.bbMin, this.bbMax, 0.5),
            (this.radius =
              0.5 *
              Math.max(
                Math.max(
                  this.bbMax[0] - this.bbMin[0],
                  this.bbMax[1] - this.bbMin[1],
                ),
                this.bbMax[2] - this.bbMin[2],
              ));
          let l = this.radius * this.radius;
          for (let e = 0; e < w.length; ++e) {
            s = w.getItemAt(e);
            const t = o[s] - this.center[0],
              r = o[s + 1] - this.center[1],
              i = o[s + 2] - this.center[2],
              n = t * t + r * r + i * i;
            if (n <= l) continue;
            const a = Math.sqrt(n),
              c = 0.5 * (a - this.radius);
            (this.radius = this.radius + c), (l = this.radius * this.radius);
            const d = c / a;
            (this.center[0] += t * d),
              (this.center[1] += r * d),
              (this.center[2] += i * d);
          }
          w.clear();
        }
        getCenter() {
          return this.center;
        }
        getBSRadius() {
          return this.radius;
        }
        getBBMin() {
          return this.bbMin;
        }
        getBBMax() {
          return this.bbMax;
        }
        getChildren() {
          if (this._children) return this._children;
          if ((0, c.h)(this.bbMin, this.bbMax) > 1) {
            const e = (0, c.e)((0, d.c)(), this.bbMin, this.bbMax, 0.5),
              t = this.primitiveIndices.length,
              r = new Uint8Array(t),
              i = new Array(8);
            for (let e = 0; e < 8; ++e) i[e] = 0;
            const { data: o, size: n } = this.position;
            for (let a = 0; a < t; ++a) {
              let t = 0;
              const s = this._numIndexPerPrimitive * this.primitiveIndices[a];
              let l = n * this.indices[s],
                c = o[l],
                d = o[l + 1],
                u = o[l + 2];
              for (let e = 1; e < this._numIndexPerPrimitive; ++e) {
                l = n * this.indices[s + e];
                const t = o[l],
                  r = o[l + 1],
                  i = o[l + 2];
                t < c && (c = t), r < d && (d = r), i < u && (u = i);
              }
              c < e[0] && (t |= 1),
                d < e[1] && (t |= 2),
                u < e[2] && (t |= 4),
                (r[a] = t),
                ++i[t];
            }
            let a = 0;
            for (let e = 0; e < 8; ++e) i[e] > 0 && ++a;
            if (a < 2) return;
            const s = new Array(8);
            for (let e = 0; e < 8; ++e)
              s[e] = i[e] > 0 ? new Uint32Array(i[e]) : void 0;
            for (let e = 0; e < 8; ++e) i[e] = 0;
            for (let e = 0; e < t; ++e) {
              const t = r[e];
              s[t][i[t]++] = this.primitiveIndices[e];
            }
            this._children = new Array(8);
            for (let e = 0; e < 8; ++e)
              void 0 !== s[e] &&
                (this._children[e] = new y(
                  s[e],
                  this._numIndexPerPrimitive,
                  this.indices,
                  this.position,
                ));
          }
          return this._children;
        }
        static prune() {
          w.prune();
        }
      }
      const w = new C.Z({ deallocator: null });
      var N,
        P,
        I = r(99001);
      class D {
        constructor() {
          this.id = (0, I.D)();
        }
        unload() {}
      }
      ((P = N || (N = {}))[(P.Layer = 0)] = 'Layer'),
        (P[(P.Object = 1)] = 'Object'),
        (P[(P.Geometry = 2)] = 'Geometry'),
        (P[(P.Material = 3)] = 'Material'),
        (P[(P.Texture = 4)] = 'Texture'),
        (P[(P.COUNT = 5)] = 'COUNT');
      var L = r(64291),
        F = r(35065);
      class H extends D {
        constructor(e, t = [], r = M.MX.Triangle, i = -1) {
          super(),
            (this._primitiveType = r),
            (this.edgeIndicesLength = i),
            (this.type = N.Geometry),
            (this._vertexAttributes = new Map()),
            (this._indices = new Map()),
            (this._boundingInfo = null);
          for (const [t, r] of e) r && this._vertexAttributes.set(t, { ...r });
          if (null == t || 0 === t.length) {
            const e = (function (e) {
                const t = e.values().next().value;
                return null == t ? 0 : t.data.length / t.size;
              })(this._vertexAttributes),
              t = (0, L.p)(e);
            this.edgeIndicesLength =
              this.edgeIndicesLength < 0 ? e : this.edgeIndicesLength;
            for (const e of this._vertexAttributes.keys())
              this._indices.set(e, t);
          } else
            for (const [e, r] of t)
              r &&
                (this._indices.set(e, B(r)),
                e === F.T.POSITION &&
                  (this.edgeIndicesLength =
                    this.edgeIndicesLength < 0
                      ? this._indices.get(e).length
                      : this.edgeIndicesLength));
        }
        cloneShallow() {
          const e = new H([], void 0, this._primitiveType, void 0),
            { _vertexAttributes: t, _indices: r } = e;
          return (
            this._vertexAttributes.forEach((e, r) => {
              t.set(r, e);
            }),
            this._indices.forEach((e, t) => {
              r.set(t, e);
            }),
            (e.screenToWorldRatio = this.screenToWorldRatio),
            (e._boundingInfo = this._boundingInfo),
            e
          );
        }
        get vertexAttributes() {
          return this._vertexAttributes;
        }
        getMutableAttribute(e) {
          const t = this._vertexAttributes.get(e);
          return (
            t &&
              !t.exclusive &&
              ((t.data = Array.from(t.data)), (t.exclusive = !0)),
            t
          );
        }
        get indices() {
          return this._indices;
        }
        get indexCount() {
          const e = this._indices.values().next().value;
          return e ? e.length : 0;
        }
        get primitiveType() {
          return this._primitiveType;
        }
        get faceCount() {
          return this.indexCount / 3;
        }
        get boundingInfo() {
          return (
            (0, o.Wi)(this._boundingInfo) &&
              (this._boundingInfo = this._calculateBoundingInfo()),
            this._boundingInfo
          );
        }
        computeAttachmentOrigin(e) {
          return this.primitiveType === M.MX.Triangle
            ? this._computeAttachmentOriginTriangles(e)
            : this._computeAttachmentOriginPoints(e);
        }
        _computeAttachmentOriginTriangles(e) {
          const t = this.indices.get(F.T.POSITION),
            r = this.vertexAttributes.get(F.T.POSITION);
          return (0, L.cM)(r, t, e);
        }
        _computeAttachmentOriginPoints(e) {
          const t = this.indices.get(F.T.POSITION),
            r = this.vertexAttributes.get(F.T.POSITION);
          return (0, L.NO)(r, t, e);
        }
        invalidateBoundingInfo() {
          this._boundingInfo = null;
        }
        _calculateBoundingInfo() {
          const e = this.indices.get(F.T.POSITION);
          if (0 === e.length) return null;
          const t = this.primitiveType === M.MX.Triangle ? 3 : 1;
          (0, O.hu)(
            e.length % t == 0,
            'Indexing error: ' + e.length + ' not divisible by ' + t,
          );
          const r = (0, L.p)(e.length / t),
            i = this.vertexAttributes.get(F.T.POSITION);
          return new y(r, t, e, i);
        }
      }
      function B(e) {
        if (e.BYTES_PER_ELEMENT === Uint16Array.BYTES_PER_ELEMENT) return e;
        for (const t of e) if (t >= 65536) return e;
        return new Uint16Array(e);
      }
      var U = r(74085),
        z = r(32448),
        G = r(22021),
        V = r(1533),
        W = r(17452),
        q = r(85958),
        k = r(99880);
      let X;
      var $;
      !(function (e) {
        (e[(e.ETC1_RGB = 0)] = 'ETC1_RGB'),
          (e[(e.ETC2_RGBA = 1)] = 'ETC2_RGBA'),
          (e[(e.BC1_RGB = 2)] = 'BC1_RGB'),
          (e[(e.BC3_RGBA = 3)] = 'BC3_RGBA'),
          (e[(e.BC4_R = 4)] = 'BC4_R'),
          (e[(e.BC5_RG = 5)] = 'BC5_RG'),
          (e[(e.BC7_M6_RGB = 6)] = 'BC7_M6_RGB'),
          (e[(e.BC7_M5_RGBA = 7)] = 'BC7_M5_RGBA'),
          (e[(e.PVRTC1_4_RGB = 8)] = 'PVRTC1_4_RGB'),
          (e[(e.PVRTC1_4_RGBA = 9)] = 'PVRTC1_4_RGBA'),
          (e[(e.ASTC_4x4_RGBA = 10)] = 'ASTC_4x4_RGBA'),
          (e[(e.ATC_RGB = 11)] = 'ATC_RGB'),
          (e[(e.ATC_RGBA = 12)] = 'ATC_RGBA'),
          (e[(e.FXT1_RGB = 17)] = 'FXT1_RGB'),
          (e[(e.PVRTC2_4_RGB = 18)] = 'PVRTC2_4_RGB'),
          (e[(e.PVRTC2_4_RGBA = 19)] = 'PVRTC2_4_RGBA'),
          (e[(e.ETC2_EAC_R11 = 20)] = 'ETC2_EAC_R11'),
          (e[(e.ETC2_EAC_RG11 = 21)] = 'ETC2_EAC_RG11'),
          (e[(e.RGBA32 = 13)] = 'RGBA32'),
          (e[(e.RGB565 = 14)] = 'RGB565'),
          (e[(e.BGR565 = 15)] = 'BGR565'),
          (e[(e.RGBA4444 = 16)] = 'RGBA4444');
      })($ || ($ = {}));
      var j = r(35371),
        Y = r(75656);
      function Z(e, t, r, i, o = 0) {
        const n = e.gl,
          a = e.capabilities.instancing;
        e.bindBuffer(r);
        for (const e of i) {
          const r = t.get(e.name);
          void 0 === r &&
            console.error(
              `There is no location for vertex attribute '${e.name}' defined.`,
            );
          const i = o * e.stride;
          if (e.count <= 4)
            n.vertexAttribPointer(
              r,
              e.count,
              e.type,
              e.normalized,
              e.stride,
              e.offset + i,
            ),
              n.enableVertexAttribArray(r),
              e.divisor > 0 && a && a.vertexAttribDivisor(r, e.divisor);
          else if (9 === e.count)
            for (let t = 0; t < 3; t++)
              n.vertexAttribPointer(
                r + t,
                3,
                e.type,
                e.normalized,
                e.stride,
                e.offset + 12 * t + i,
              ),
                n.enableVertexAttribArray(r + t),
                e.divisor > 0 && a && a.vertexAttribDivisor(r + t, e.divisor);
          else if (16 === e.count)
            for (let t = 0; t < 4; t++)
              n.vertexAttribPointer(
                r + t,
                4,
                e.type,
                e.normalized,
                e.stride,
                e.offset + 16 * t + i,
              ),
                n.enableVertexAttribArray(r + t),
                e.divisor > 0 && a && a.vertexAttribDivisor(r + t, e.divisor);
          else
            console.error(
              'Unsupported vertex attribute element count: ' + e.count,
            );
        }
      }
      function J(e, t, r, i) {
        const o = e.gl,
          n = e.capabilities.instancing;
        e.bindBuffer(r);
        for (const e of i) {
          const r = t.get(e.name);
          if (e.count <= 4)
            o.disableVertexAttribArray(r),
              e.divisor && e.divisor > 0 && n && n.vertexAttribDivisor(r, 0);
          else if (9 === e.count)
            for (let t = 0; t < 3; t++)
              o.disableVertexAttribArray(r + t),
                e.divisor &&
                  e.divisor > 0 &&
                  n &&
                  n.vertexAttribDivisor(r + t, 0);
          else if (16 === e.count)
            for (let t = 0; t < 4; t++)
              o.disableVertexAttribArray(r + t),
                e.divisor &&
                  e.divisor > 0 &&
                  n &&
                  n.vertexAttribDivisor(r + t, 0);
          else
            console.error(
              'Unsupported vertex attribute element count: ' + e.count,
            );
        }
        e.unbindBuffer(j.w0.ARRAY_BUFFER);
      }
      function K(e) {
        switch (e) {
          case j.VI.ALPHA:
          case j.VI.LUMINANCE:
          case j.VI.RED:
          case j.VI.RED_INTEGER:
          case j.lP.R8:
          case j.lP.R8I:
          case j.lP.R8UI:
          case j.lP.R8_SNORM:
          case j.Tg.STENCIL_INDEX8:
            return 1;
          case j.VI.LUMINANCE_ALPHA:
          case j.VI.RG:
          case j.VI.RG_INTEGER:
          case j.lP.RGBA4:
          case j.lP.R16F:
          case j.lP.R16I:
          case j.lP.R16UI:
          case j.lP.RG8:
          case j.lP.RG8I:
          case j.lP.RG8UI:
          case j.lP.RG8_SNORM:
          case j.lP.RGB565:
          case j.lP.RGB5_A1:
          case j.Tg.DEPTH_COMPONENT16:
            return 2;
          case j.VI.DEPTH_COMPONENT:
          case j.VI.RGB:
          case j.VI.RGB_INTEGER:
          case j.lP.RGB8:
          case j.lP.RGB8I:
          case j.lP.RGB8UI:
          case j.lP.RGB8_SNORM:
          case j.lP.SRGB8:
          case j.Tg.DEPTH_COMPONENT24:
            return 3;
          case j.VI.DEPTH_STENCIL:
          case j.VI.RGBA:
          case j.VI.RGBA_INTEGER:
          case j.lP.RGBA8:
          case j.lP.R32F:
          case j.lP.R11F_G11F_B10F:
          case j.lP.RG16F:
          case j.lP.R32I:
          case j.lP.R32UI:
          case j.lP.RG16I:
          case j.lP.RG16UI:
          case j.lP.RGBA8I:
          case j.lP.RGBA8UI:
          case j.lP.RGBA8_SNORM:
          case j.lP.SRGB8_ALPHA8:
          case j.lP.RGB9_E5:
          case j.lP.RGB10_A2UI:
          case j.lP.RGB10_A2:
          case j.Tg.DEPTH_STENCIL:
          case j.Tg.DEPTH_COMPONENT32F:
          case j.Tg.DEPTH24_STENCIL8:
            return 4;
          case j.Tg.DEPTH32F_STENCIL8:
            return 5;
          case j.lP.RGB16F:
          case j.lP.RGB16I:
          case j.lP.RGB16UI:
            return 6;
          case j.lP.RG32F:
          case j.lP.RG32I:
          case j.lP.RG32UI:
          case j.lP.RGBA16F:
          case j.lP.RGBA16I:
          case j.lP.RGBA16UI:
            return 8;
          case j.lP.RGB32F:
          case j.lP.RGB32I:
          case j.lP.RGB32UI:
            return 12;
          case j.lP.RGBA32F:
          case j.lP.RGBA32I:
          case j.lP.RGBA32UI:
            return 16;
          case j.q_.COMPRESSED_RGB_S3TC_DXT1_EXT:
          case j.q_.COMPRESSED_RGBA_S3TC_DXT1_EXT:
            return 0.5;
          case j.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT:
          case j.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT:
            return 1;
          case j.q_.COMPRESSED_R11_EAC:
          case j.q_.COMPRESSED_SIGNED_R11_EAC:
          case j.q_.COMPRESSED_RGB8_ETC2:
          case j.q_.COMPRESSED_SRGB8_ETC2:
          case j.q_.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2:
          case j.q_.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2:
            return 0.5;
          case j.q_.COMPRESSED_RG11_EAC:
          case j.q_.COMPRESSED_SIGNED_RG11_EAC:
          case j.q_.COMPRESSED_RGBA8_ETC2_EAC:
          case j.q_.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:
            return 1;
        }
        return 0;
      }
      function Q(e) {
        if ((0, o.Wi)(e)) return 0;
        if ('descriptor' in e) return e.glName ? Q(e.descriptor) : 0;
        const t = e.internalFormat || ('pixelFormat' in e && e.pixelFormat);
        if (!t) return 0;
        const r = 'hasMipmap' in e && e.hasMipmap ? 1.3 : 1,
          i = e.width * e.height;
        return K(t) * i * r;
      }
      r(80442);
      let ee = null,
        te = null;
      async function re() {
        return (
          (0, o.Wi)(te) &&
            ((te = (function () {
              if ((0, o.Wi)(X)) {
                const e = (e) => (0, k.V)(`esri/libs/basisu/${e}`);
                X = r
                  .e(1421)
                  .then(r.bind(r, 21421))
                  .then((e) => e.b)
                  .then(({ default: t }) =>
                    t({ locateFile: e }).then(
                      (e) => (e.initializeBasis(), delete e.then, e),
                    ),
                  );
              }
              return X;
            })()),
            (ee = await te)),
          te
        );
      }
      function ie(e, t, r, i, o) {
        const n = K(
            t ? j.q_.COMPRESSED_RGBA8_ETC2_EAC : j.q_.COMPRESSED_RGB8_ETC2,
          ),
          a = o && e > 1 ? (4 ** e - 1) / (3 * 4 ** (e - 1)) : 1;
        return Math.ceil(r * i * n * a);
      }
      function oe(e) {
        return e.getNumImages() >= 1 && !e.isUASTC();
      }
      function ne(e) {
        return e.getFaces() >= 1 && e.isETC1S();
      }
      function ae(e, t, r, i, o, n, a, s) {
        const { compressedTextureETC: l, compressedTextureS3TC: c } =
            e.capabilities,
          [d, u] = l
            ? i
              ? [$.ETC2_RGBA, j.q_.COMPRESSED_RGBA8_ETC2_EAC]
              : [$.ETC1_RGB, j.q_.COMPRESSED_RGB8_ETC2]
            : c
            ? i
              ? [$.BC3_RGBA, j.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT]
              : [$.BC1_RGB, j.q_.COMPRESSED_RGB_S3TC_DXT1_EXT]
            : [$.RGBA32, j.VI.RGBA],
          h = t.hasMipmap ? r : Math.min(1, r),
          f = [];
        for (let e = 0; e < h; e++)
          f.push(new Uint8Array(a(e, d))), s(e, d, f[e]);
        const m = f.length > 1,
          p = m ? j.cw.LINEAR_MIPMAP_LINEAR : j.cw.LINEAR,
          g = {
            ...t,
            samplingMode: p,
            hasMipmap: m,
            internalFormat: u,
            width: o,
            height: n,
          };
        return new Y.x(e, g, { type: 'compressed', levels: f });
      }
      const se = E.Z.getLogger('esri.views.3d.webgl-engine.lib.DDSUtil');
      function le(e) {
        return (
          e.charCodeAt(0) +
          (e.charCodeAt(1) << 8) +
          (e.charCodeAt(2) << 16) +
          (e.charCodeAt(3) << 24)
        );
      }
      const ce = le('DXT1'),
        de = le('DXT3'),
        ue = le('DXT5');
      const he = new Map([
        [F.T.POSITION, 0],
        [F.T.NORMAL, 1],
        [F.T.UV0, 2],
        [F.T.COLOR, 3],
        [F.T.SIZE, 4],
        [F.T.TANGENT, 4],
        [F.T.AUXPOS1, 5],
        [F.T.SYMBOLCOLOR, 5],
        [F.T.AUXPOS2, 6],
        [F.T.FEATUREATTRIBUTE, 6],
        [F.T.INSTANCEFEATUREATTRIBUTE, 6],
        [F.T.INSTANCECOLOR, 7],
        [F.T.MODEL, 8],
        [F.T.MODELNORMAL, 12],
        [F.T.MODELORIGINHI, 11],
        [F.T.MODELORIGINLO, 15],
      ]);
      var fe = r(21968);
      new fe.G(F.T.POSITION, 3, j.g.FLOAT, 0, 12),
        new fe.G(F.T.POSITION, 3, j.g.FLOAT, 0, 20),
        new fe.G(F.T.UV0, 2, j.g.FLOAT, 12, 20),
        new fe.G(F.T.POSITION, 3, j.g.FLOAT, 0, 32),
        new fe.G(F.T.NORMAL, 3, j.g.FLOAT, 12, 32),
        new fe.G(F.T.UV0, 2, j.g.FLOAT, 24, 32),
        new fe.G(F.T.POSITION, 3, j.g.FLOAT, 0, 16),
        new fe.G(F.T.COLOR, 4, j.g.UNSIGNED_BYTE, 12, 16);
      const me = [new fe.G(F.T.POSITION, 2, j.g.FLOAT, 0, 8)],
        pe = [
          new fe.G(F.T.POSITION, 2, j.g.FLOAT, 0, 16),
          new fe.G(F.T.UV0, 2, j.g.FLOAT, 8, 16),
        ];
      var ge = r(67676),
        ve = r(49300),
        _e = r(54738);
      const Te = E.Z.getLogger('esri.views.webgl.BufferObject');
      class xe {
        constructor(e, t, r, i) {
          (this._context = e),
            (this.bufferType = t),
            (this.usage = r),
            (this._glName = null),
            (this._size = -1),
            (this._indexType = void 0),
            e.instanceCounter.increment(j._g.Buffer, this),
            (this._glName = this._context.gl.createBuffer()),
            (0, ve.zu)(this._context.gl),
            i && this.setData(i);
        }
        static createIndex(e, t, r) {
          return new xe(e, j.w0.ELEMENT_ARRAY_BUFFER, t, r);
        }
        static createVertex(e, t, r) {
          return new xe(e, j.w0.ARRAY_BUFFER, t, r);
        }
        static createUniform(e, t, r) {
          if (e.type !== _e.zO.WEBGL2)
            throw new Error('Uniform buffers are supported in WebGL2 only!');
          return new xe(e, j.w0.UNIFORM_BUFFER, t, r);
        }
        static createPixelPack(e, t = j.l1.STREAM_READ, r) {
          if (e.type !== _e.zO.WEBGL2)
            throw new Error('Pixel pack buffers are supported in WebGL2 only!');
          const i = new xe(e, j.w0.PIXEL_PACK_BUFFER, t);
          return r && i.setSize(r), i;
        }
        static createPixelUnpack(e, t = j.l1.STREAM_DRAW, r) {
          if (e.type !== _e.zO.WEBGL2)
            throw new Error(
              'Pixel unpack buffers are supported in WebGL2 only!',
            );
          return new xe(e, j.w0.PIXEL_UNPACK_BUFFER, t, r);
        }
        get glName() {
          return this._glName;
        }
        get size() {
          return this._size;
        }
        get indexType() {
          return this._indexType;
        }
        get byteSize() {
          return this.bufferType === j.w0.ELEMENT_ARRAY_BUFFER
            ? this._indexType === j.g.UNSIGNED_INT
              ? 4 * this._size
              : 2 * this._size
            : this._size;
        }
        get _isVAOAware() {
          return (
            this.bufferType === j.w0.ELEMENT_ARRAY_BUFFER ||
            this.bufferType === j.w0.ARRAY_BUFFER
          );
        }
        dispose() {
          var e;
          null != (e = this._context) && e.gl
            ? (this._glName &&
                (this._context.gl.deleteBuffer(this._glName),
                (this._glName = null)),
              this._context.instanceCounter.decrement(j._g.Buffer, this),
              (this._context = null))
            : this._glName && Te.warn('Leaked WebGL buffer object');
        }
        setSize(e, t = null) {
          if (
            (e <= 0 && Te.error('Buffer size needs to be positive!'),
            this.bufferType === j.w0.ELEMENT_ARRAY_BUFFER && (0, o.pC)(t))
          )
            switch (((this._indexType = t), t)) {
              case j.g.UNSIGNED_SHORT:
                e *= 2;
                break;
              case j.g.UNSIGNED_INT:
                e *= 4;
            }
          this._setBufferData(e);
        }
        setData(e) {
          if (!e) return;
          let t = e.byteLength;
          this.bufferType === j.w0.ELEMENT_ARRAY_BUFFER &&
            ((0, V.Uc)(e) && ((t /= 2), (this._indexType = j.g.UNSIGNED_SHORT)),
            (0, V.ZY)(e) && ((t /= 4), (this._indexType = j.g.UNSIGNED_INT))),
            this._setBufferData(t, e);
        }
        _setBufferData(e, t = null) {
          this._size = e;
          const r = this._context.getBoundVAO();
          this._isVAOAware && this._context.bindVAO(null),
            this._context.bindBuffer(this);
          const i = this._context.gl;
          (0, o.pC)(t)
            ? i.bufferData(this.bufferType, t, this.usage)
            : i.bufferData(this.bufferType, e, this.usage),
            (0, ve.zu)(i),
            this._isVAOAware && this._context.bindVAO(r);
        }
        setSubData(e, t = 0, r = 0, i = e.byteLength) {
          if (!e) return;
          (t < 0 || t >= this._size) && Te.error('offset is out of range!');
          let o = t,
            n = r,
            a = i,
            s = e.byteLength;
          this.bufferType === j.w0.ELEMENT_ARRAY_BUFFER &&
            ((0, V.Uc)(e)
              ? ((s /= 2), (o *= 2), (n *= 2), (a *= 2))
              : (0, V.ZY)(e) && ((s /= 4), (o *= 4), (n *= 4), (a *= 4))),
            void 0 === i && (i = s - 1),
            r >= i && Te.error('end must be bigger than start!'),
            t + r - i > this._size &&
              Te.error('An attempt to write beyond the end of the buffer!');
          const l = this._context.getBoundVAO();
          this._isVAOAware && this._context.bindVAO(null),
            this._context.bindBuffer(this);
          const c = this._context.gl,
            d = ArrayBuffer.isView(e) ? e.buffer : e,
            u = 0 === n && a === e.byteLength ? d : d.slice(n, a);
          c.bufferSubData(this.bufferType, o, u),
            (0, ve.zu)(c),
            this._isVAOAware && this._context.bindVAO(l);
        }
        setSubDataFromView(e, t, r, i) {
          if (!e) return;
          (t < 0 || t >= this._size) && Te.error('offset is out of range!'),
            r >= i && Te.error('end must be bigger than start!'),
            t + r - i > this._size &&
              Te.error('An attempt to write beyond the end of the buffer!');
          const o = this._context.getBoundVAO();
          this._isVAOAware && this._context.bindVAO(null),
            this._context.bindBuffer(this);
          const n = this._context.gl;
          if (this._context.type === _e.zO.WEBGL2)
            n.bufferSubData(
              this.bufferType,
              t * e.BYTES_PER_ELEMENT,
              e,
              r,
              i - r,
            );
          else {
            const o = 0 === r && i === e.length ? e : e.subarray(r, i);
            n.bufferSubData(this.bufferType, t * e.BYTES_PER_ELEMENT, o);
          }
          (0, ve.zu)(n), this._isVAOAware && this._context.bindVAO(o);
        }
        getSubData(e, t = 0, r, i) {
          if (this._context.type !== _e.zO.WEBGL2)
            return void Te.error(
              'Get buffer subdata is supported in WebGL2 only!',
            );
          if (r < 0 || i < 0)
            return void Te.error(
              'Problem getting subdata: offset and length were less than zero!',
            );
          const o = (function (e) {
            return (0, ge.zG)(e);
          })(e)
            ? e.BYTES_PER_ELEMENT
            : 1;
          if (o * ((null != r ? r : 0) + (null != i ? i : 0)) > e.byteLength)
            return void Te.error(
              'Problem getting subdata: offset and length exceeded destination size!',
            );
          t + o * (null != i ? i : 0) > this.byteSize &&
            Te.warn(
              'Potential problem getting subdata: requested data exceeds buffer size!',
            );
          const n = this._context.gl;
          this._context.bindBuffer(this, j.w0.COPY_READ_BUFFER),
            n.getBufferSubData(j.w0.COPY_READ_BUFFER, t, e, r, i),
            this._context.unbindBuffer(j.w0.COPY_READ_BUFFER);
        }
        async getSubDataAsync(e, t = 0, r, i) {
          this._context.type === _e.zO.WEBGL2
            ? (await this._context.clientWaitAsync(),
              this.getSubData(e, t, r, i))
            : Te.error('Get buffer subdata is supported in WebGL2 only!');
        }
      }
      const be = E.Z.getLogger('esri.views.webgl.VertexArrayObject');
      class Ee {
        constructor(e, t, r, i, o = null) {
          (this._context = e),
            (this._locations = t),
            (this._layout = r),
            (this._buffers = i),
            (this._indexBuffer = o),
            (this._glName = null),
            (this._initialized = !1),
            e.instanceCounter.increment(j._g.VAO, this);
        }
        get glName() {
          return this._glName;
        }
        get vertexBuffers() {
          return this._buffers;
        }
        get indexBuffer() {
          return this._indexBuffer;
        }
        get size() {
          return Object.keys(this._buffers).reduce(
            (e, t) => e + this._buffers[t].size,
            (0, o.pC)(this._indexBuffer) ? this._indexBuffer.size : 0,
          );
        }
        get layout() {
          return this._layout;
        }
        get locations() {
          return this._locations;
        }
        dispose(e = !0) {
          if (this._context) {
            if (this._glName) {
              var t, r;
              const e =
                null == (t = this._context) || null == (r = t.capabilities)
                  ? void 0
                  : r.vao;
              e
                ? (e.deleteVertexArray(this._glName), (this._glName = null))
                : be.warn('Leaked WebGL VAO');
            }
            if (
              (this._context.getBoundVAO() === this &&
                this._context.bindVAO(null),
              e)
            ) {
              for (const e in this._buffers)
                this._buffers[e].dispose(), delete this._buffers[e];
              this._indexBuffer = (0, o.O3)(this._indexBuffer);
            }
            this._context.instanceCounter.decrement(j._g.VAO, this),
              (this._context = null);
          } else
            (this._glName ||
              (e && Object.getOwnPropertyNames(this._buffers).length > 0)) &&
              be.warn('Leaked WebGL VAO');
        }
        initialize() {
          if (this._initialized) return;
          const e = this._context.capabilities.vao;
          if (e) {
            const t = e.createVertexArray();
            e.bindVertexArray(t),
              this._bindLayout(),
              e.bindVertexArray(null),
              (this._glName = t);
          }
          this._initialized = !0;
        }
        bind() {
          this.initialize();
          const e = this._context.capabilities.vao;
          e
            ? e.bindVertexArray(this.glName)
            : (this._context.bindVAO(null), this._bindLayout());
        }
        _bindLayout() {
          const { _buffers: e, _layout: t, _indexBuffer: r } = this;
          e || be.error('Vertex buffer dictionary is empty!');
          const i = this._context.gl;
          for (const r in e) {
            const i = e[r];
            i || be.error('Vertex buffer is uninitialized!');
            const o = t[r];
            o || be.error('Vertex element descriptor is empty!'),
              Z(this._context, this._locations, i, o);
          }
          (0, o.pC)(r) &&
            (this._context.capabilities.vao
              ? i.bindBuffer(i.ELEMENT_ARRAY_BUFFER, r.glName)
              : this._context.bindBuffer(r));
        }
        unbind() {
          this.initialize();
          const e = this._context.capabilities.vao;
          e ? e.bindVertexArray(null) : this._unbindLayout();
        }
        _unbindLayout() {
          const { _buffers: e, _layout: t } = this;
          e || be.error('Vertex buffer dictionary is empty!');
          for (const r in e) {
            const i = e[r];
            i || be.error('Vertex buffer is uninitialized!');
            const o = t[r];
            J(this._context, this._locations, i, o);
          }
          (0, o.pC)(this._indexBuffer) &&
            this._context.unbindBuffer(this._indexBuffer.bufferType);
        }
      }
      class Ae {
        constructor(e, t) {
          (this._context = e),
            (this._desc = t),
            (this.type = 'renderbuffer'),
            this._context.instanceCounter.increment(j._g.Renderbuffer, this);
          const r = this._context.gl;
          (this.glName = r.createRenderbuffer()),
            this._context.bindRenderbuffer(this);
          const { width: i, height: o, internalFormat: n, multisampled: a } = t;
          if (a) {
            if (this._context.type !== _e.zO.WEBGL2)
              throw new Error(
                'Multisampled renderbuffers are not supported in WebGL1!',
              );
            r.renderbufferStorageMultisample(
              r.RENDERBUFFER,
              this.samples,
              n,
              i,
              o,
            );
          } else r.renderbufferStorage(r.RENDERBUFFER, n, i, o);
        }
        get descriptor() {
          return this._desc;
        }
        get samples() {
          const e = this._desc.samples,
            t = this._context.parameters.maxSamples;
          return e ? Math.min(e, t) : t;
        }
        resize(e, t) {
          const r = this._desc;
          if (r.width === e && r.height === t) return;
          (r.width = e), (r.height = t);
          const i = this._context.gl;
          this._context.bindRenderbuffer(this),
            r.multisampled
              ? i.renderbufferStorageMultisample(
                  i.RENDERBUFFER,
                  this.samples,
                  r.internalFormat,
                  r.width,
                  r.height,
                )
              : i.renderbufferStorage(
                  i.RENDERBUFFER,
                  r.internalFormat,
                  r.width,
                  r.height,
                );
        }
        dispose() {
          this._context &&
            (this._context.gl.deleteRenderbuffer(this.glName),
            this._context.instanceCounter.decrement(j._g.Renderbuffer, this),
            (this._context = null));
        }
      }
      const Se = E.Z.getLogger('esri.views.webgl.FrameBufferObject');
      class Re {
        constructor(e, t, r = null, i = null) {
          if (
            ((this._context = e),
            (this._glName = null),
            (this._depthAttachment = null),
            (this._stencilAttachment = null),
            (this._colorAttachments = new Map()),
            (this._initialized = !1),
            (this._desc = { ...t }),
            e.instanceCounter.increment(j._g.Framebuffer, this),
            (0, o.pC)(r))
          ) {
            Array.isArray(r) || (r = [r]);
            for (let e = 0; e < r.length; ++e) {
              const t = r[e],
                i = j.VY.COLOR_ATTACHMENT0 + e;
              let o;
              Oe(t)
                ? (Me(t)
                    ? ((o = t.descriptor), this._colorAttachments.set(i, t))
                    : ((o = t),
                      this._colorAttachments.set(i, new Y.x(this._context, o))),
                  ye(o, this._desc))
                : (Ce(t)
                    ? ((o = t.descriptor), this._colorAttachments.set(i, t))
                    : ((o = t),
                      this._colorAttachments.set(i, new Ae(this._context, o))),
                  we(o, this._desc)),
                this._validateColorAttachmentPoint(i);
            }
          }
          if ((0, o.pC)(i)) {
            let e, t;
            if (Oe(i))
              this._context.capabilities.depthTexture ||
                console.error(
                  'Setting the depth/stencil texture as an attachment requires WEBGL_depth_texture or WebGL2',
                ),
                Me(i)
                  ? ((t = i.descriptor), (this._depthStencilTexture = i))
                  : ((t = i),
                    (this._depthStencilTexture = new Y.x(this._context, t))),
                ye(t, this._desc);
            else {
              var n;
              Ce(i)
                ? ((t = i.descriptor), (e = i))
                : ((t = i), (e = new Ae(this._context, t)));
              const r =
                null != (n = this._desc.depthStencilTarget)
                  ? n
                  : j.OU.DEPTH_STENCIL_RENDER_BUFFER;
              r === j.OU.STENCIL_RENDER_BUFFER
                ? (this._stencilAttachment = e)
                : r === j.OU.DEPTH_RENDER_BUFFER ||
                  r === j.OU.DEPTH_STENCIL_RENDER_BUFFER
                ? (this._depthAttachment = e)
                : console.error(
                    'If a Renderbuffer is provided, "depthStencilTarget" must be one of STENCIL_RENDER_BUFFER, DEPTH_RENDER_BUFFER or DEPTH_STENCIL_RENDER_BUFFER',
                  ),
                we(t, this._desc);
            }
          }
        }
        dispose() {
          if (!this._desc) return;
          const e = this._context.getBoundFramebufferObject();
          this._disposeColorAttachments(),
            this._disposeDepthStencilAttachments(),
            this._glName &&
              (this._context.gl.deleteFramebuffer(this._glName),
              (this._glName = null)),
            this._context.bindFramebuffer(e),
            this._context.instanceCounter.decrement(j._g.Framebuffer, this),
            (this._desc = null);
        }
        get glName() {
          return this._glName;
        }
        get descriptor() {
          return this._desc;
        }
        get colorTexture() {
          const e = this._colorAttachments.get(j.VY.COLOR_ATTACHMENT0);
          return e && Me(e) ? e : null;
        }
        get colorAttachment() {
          return this._colorAttachments.get(j.VY.COLOR_ATTACHMENT0);
        }
        get depthStencilAttachment() {
          return (
            this._depthStencilTexture ||
            this._depthAttachment ||
            this._stencilAttachment
          );
        }
        get depthStencilTexture() {
          return this._depthStencilTexture;
        }
        get width() {
          return this._desc.width;
        }
        get height() {
          return this._desc.height;
        }
        get gpuMemoryUsage() {
          return (
            [...this._colorAttachments].reduce((e, [t, r]) => e + Q(r), 0) +
            Q(this.depthStencilAttachment)
          );
        }
        getColorTexture(e) {
          const t = this._colorAttachments.get(e);
          return t && Me(t) ? t : null;
        }
        attachColorTexture(e, t = j.VY.COLOR_ATTACHMENT0) {
          e &&
            (this._validateColorAttachmentPoint(t),
            ye(e.descriptor, this._desc),
            this._disposeColorAttachments(),
            this._initialized &&
              (this._context.bindFramebuffer(this),
              this._framebufferTexture2D(e.glName, t)),
            this._colorAttachments.set(t, e));
        }
        detachColorTexture(e = j.VY.COLOR_ATTACHMENT0) {
          const t = this._colorAttachments.get(e);
          if (Me(t)) {
            const r = t;
            return (
              this._initialized &&
                (this._context.bindFramebuffer(this),
                this._framebufferTexture2D(null, e)),
              this._colorAttachments.delete(e),
              r
            );
          }
        }
        setColorTextureTarget(e, t = j.VY.COLOR_ATTACHMENT0) {
          const r = this._colorAttachments.get(t);
          Me(r) && this._framebufferTexture2D(r.glName, t, e);
        }
        attachDepthStencilTexture(e) {
          if ((0, o.Wi)(e)) return;
          const t = e.descriptor;
          t.pixelFormat !== j.VI.DEPTH_STENCIL &&
            console.error(
              'Depth/Stencil texture must have a pixel type of DEPTH_STENCIL!',
            ),
            t.dataType !== j.Br.UNSIGNED_INT_24_8 &&
              console.error(
                'Depth/Stencil texture must have data type of UNSIGNED_INT_24_8!',
              ),
            this._context.capabilities.depthTexture ||
              console.error(
                "Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture!",
              ),
            ye(t, this._desc),
            this._desc.depthStencilTarget &&
              this._desc.depthStencilTarget !== j.OU.DEPTH_STENCIL_TEXTURE &&
              (this._desc.depthStencilTarget = j.OU.DEPTH_STENCIL_TEXTURE),
            this._disposeDepthStencilAttachments(),
            this._initialized &&
              (this._context.bindFramebuffer(this),
              this._framebufferTexture2D(e.glName, j.Lu)),
            (this._depthStencilTexture = e);
        }
        detachDepthStencilTexture() {
          const e = this._depthStencilTexture;
          return (
            e &&
              this._initialized &&
              (this._context.bindFramebuffer(this),
              this._framebufferTexture2D(null, j.Lu)),
            (this._depthStencilTexture = null),
            e
          );
        }
        attachDepthStencilBuffer(e) {
          if ((0, o.Wi)(e)) return;
          const t = e.descriptor;
          if (
            (t.internalFormat !== j.Tg.DEPTH_STENCIL &&
              t.internalFormat !== j.Tg.DEPTH_COMPONENT16 &&
              console.error(
                'Depth/Stencil buffer must have correct internalFormat',
              ),
            we(t, this._desc),
            this._disposeDepthStencilAttachments(),
            (this._desc.depthStencilTarget =
              t.internalFormat === j.Tg.DEPTH_STENCIL
                ? j.OU.DEPTH_STENCIL_RENDER_BUFFER
                : j.OU.DEPTH_RENDER_BUFFER),
            this._initialized)
          ) {
            this._context.bindFramebuffer(this);
            const t = this._context.gl,
              r =
                this._desc.depthStencilTarget === j.OU.DEPTH_RENDER_BUFFER
                  ? t.DEPTH_ATTACHMENT
                  : t.DEPTH_STENCIL_ATTACHMENT;
            t.framebufferRenderbuffer(
              j.qi.FRAMEBUFFER,
              r,
              t.RENDERBUFFER,
              e.glName,
            );
          }
          this._depthAttachment = e;
        }
        detachDepthStencilBuffer() {
          const e = this._context.gl,
            t = this._depthAttachment;
          if (t && this._initialized) {
            this._context.bindFramebuffer(this);
            const t =
              this._desc.depthStencilTarget === j.OU.DEPTH_RENDER_BUFFER
                ? e.DEPTH_ATTACHMENT
                : e.DEPTH_STENCIL_ATTACHMENT;
            e.framebufferRenderbuffer(
              j.qi.FRAMEBUFFER,
              t,
              e.RENDERBUFFER,
              null,
            );
          }
          return (this._depthAttachment = null), t;
        }
        detachAll() {
          this._colorAttachments.forEach((e, t) =>
            this._detachColorAttachment(t),
          ),
            this.detachDepthStencilBuffer(),
            this.detachDepthStencilTexture();
        }
        copyToTexture(e, t, r, i, o, n, a) {
          (e < 0 || t < 0 || o < 0 || n < 0) &&
            console.error('Offsets cannot be negative!'),
            (r <= 0 || i <= 0) &&
              console.error('Copy width and height must be greater than zero!');
          const s = this._desc,
            l = a.descriptor;
          a.descriptor.target !== j.No.TEXTURE_2D &&
            console.error('Texture target must be TEXTURE_2D!'),
            (e + r > s.width ||
              t + i > s.height ||
              o + r > l.width ||
              n + i > l.height) &&
              console.error(
                'Bad dimensions, the current input values will attempt to read or copy out of bounds!',
              );
          const c = this._context,
            d = c.bindTexture(a, Y.x.TEXTURE_UNIT_FOR_UPDATES);
          c.setActiveTexture(Y.x.TEXTURE_UNIT_FOR_UPDATES),
            c.bindFramebuffer(this),
            c.gl.copyTexSubImage2D(j.No.TEXTURE_2D, 0, o, n, e, t, r, i),
            c.bindTexture(d, Y.x.TEXTURE_UNIT_FOR_UPDATES);
        }
        readPixels(e, t, r, i, o, n, a) {
          (r <= 0 || i <= 0) &&
            console.error('Copy width and height must be greater than zero!'),
            a || console.error('Target memory is not initialized!'),
            this._context.bindFramebuffer(this),
            this._context.gl.readPixels(e, t, r, i, o, n, a);
        }
        async readPixelsAsync(e, t, r, i, o, n, a) {
          if (this._context.type !== _e.zO.WEBGL2)
            return (
              (0, ve.hZ)() &&
                console.warn(
                  'Attempting to read pixels using pixel buffer object without WebGL2',
                ),
              void this.readPixels(e, t, r, i, o, n, a)
            );
          const s = this._context.gl,
            l = xe.createPixelPack(
              this._context,
              j.l1.STREAM_READ,
              a.byteLength,
            );
          this._context.bindBuffer(l),
            this._context.bindFramebuffer(this),
            s.readPixels(e, t, r, i, o, n, 0),
            this._context.unbindBuffer(j.w0.PIXEL_PACK_BUFFER),
            await l.getSubDataAsync(a),
            l.dispose();
        }
        resize(e, t) {
          const r = this._desc;
          if (r.width !== e || r.height !== t) {
            if (!this._initialized)
              return (
                (r.width = e),
                (r.height = t),
                this._colorAttachments.forEach((r) => {
                  r && r.resize(e, t);
                }),
                void (
                  this._depthStencilTexture &&
                  this._depthStencilTexture.resize(e, t)
                )
              );
            (r.width = e),
              (r.height = t),
              this._colorAttachments.forEach((r) => {
                r && r.resize(e, t);
              }),
              null != this._depthStencilTexture
                ? this._depthStencilTexture.resize(e, t)
                : (this._depthAttachment || this._stencilAttachment) &&
                  (this._depthAttachment && this._depthAttachment.resize(e, t),
                  this._stencilAttachment &&
                    this._stencilAttachment.resize(e, t)),
              this._context.getBoundFramebufferObject() === this &&
                this._context.bindFramebuffer(null),
              (this._initialized = !1);
          }
        }
        initializeAndBind(e = j.qi.FRAMEBUFFER) {
          var t, r, i, o;
          const n = this._context.gl;
          if (this._initialized) return void n.bindFramebuffer(e, this.glName);
          this._glName && n.deleteFramebuffer(this._glName);
          const a = this._context,
            s = n.createFramebuffer(),
            l = this._desc,
            c = null != (t = l.colorTarget) ? t : j.Lm.RENDER_BUFFER,
            d = null != (r = l.width) ? r : 1,
            u = null != (i = l.height) ? i : 1;
          if ((n.bindFramebuffer(e, s), 0 === this._colorAttachments.size))
            if (c === j.Lm.TEXTURE || c === j.Lm.CUBEMAP)
              this._colorAttachments.set(
                j.VY.COLOR_ATTACHMENT0,
                (function (e, t, r) {
                  return new Y.x(e, {
                    target: r,
                    pixelFormat: j.VI.RGBA,
                    dataType: j.Br.UNSIGNED_BYTE,
                    samplingMode: j.cw.NEAREST,
                    wrapMode: j.e8.CLAMP_TO_EDGE,
                    width: t.width,
                    height: t.height,
                  });
                })(
                  a,
                  l,
                  this.descriptor.colorTarget === j.Lm.CUBEMAP
                    ? j.No.TEXTURE_CUBE_MAP
                    : j.No.TEXTURE_2D,
                ),
              );
            else {
              const e = new Ae(a, {
                internalFormat: j.lP.RGBA4,
                width: d,
                height: u,
              });
              this._colorAttachments.set(j.VY.COLOR_ATTACHMENT0, e);
            }
          this._colorAttachments.forEach((t, r) => {
            t &&
              (Me(t)
                ? this._framebufferTexture2D(t.glName, r, Ne(t), e)
                : n.framebufferRenderbuffer(e, r, n.RENDERBUFFER, t.glName));
          });
          const h = null != (o = l.depthStencilTarget) ? o : j.OU.NONE;
          switch (h) {
            case j.OU.DEPTH_RENDER_BUFFER:
            case j.OU.DEPTH_STENCIL_RENDER_BUFFER: {
              this._depthAttachment ||
                (this._depthAttachment = new Ae(a, {
                  internalFormat:
                    l.depthStencilTarget === j.OU.DEPTH_RENDER_BUFFER
                      ? j.Tg.DEPTH_COMPONENT16
                      : j.Tg.DEPTH_STENCIL,
                  width: d,
                  height: u,
                }));
              const t =
                h === j.OU.DEPTH_RENDER_BUFFER
                  ? n.DEPTH_ATTACHMENT
                  : n.DEPTH_STENCIL_ATTACHMENT;
              n.framebufferRenderbuffer(
                e,
                t,
                n.RENDERBUFFER,
                this._depthAttachment.glName,
              );
              break;
            }
            case j.OU.STENCIL_RENDER_BUFFER:
              this._stencilAttachment ||
                (this._stencilAttachment = new Ae(a, {
                  internalFormat: j.Tg.STENCIL_INDEX8,
                  width: d,
                  height: u,
                })),
                n.framebufferRenderbuffer(
                  e,
                  n.STENCIL_ATTACHMENT,
                  n.RENDERBUFFER,
                  this._stencilAttachment.glName,
                );
              break;
            case j.OU.DEPTH_STENCIL_TEXTURE:
              if (!this._depthStencilTexture) {
                a.capabilities.depthTexture ||
                  console.error(
                    "Extension WEBGL_depth_texture isn't supported therefore it is no possible to set the depth/stencil texture as an attachment!",
                  );
                const e = {
                  target: j.No.TEXTURE_2D,
                  pixelFormat: j.VI.DEPTH_STENCIL,
                  dataType: j.Br.UNSIGNED_INT_24_8,
                  samplingMode: j.cw.NEAREST,
                  wrapMode: j.e8.CLAMP_TO_EDGE,
                  width: d,
                  height: u,
                };
                this._depthStencilTexture = new Y.x(a, e);
              }
              this._framebufferTexture2D(
                this._depthStencilTexture.glName,
                n.DEPTH_STENCIL_ATTACHMENT,
                Ne(this._depthStencilTexture),
                e,
              );
          }
          (0, ve.CG)() &&
            n.checkFramebufferStatus(e) !== n.FRAMEBUFFER_COMPLETE &&
            console.error('Framebuffer is incomplete!'),
            (this._glName = s),
            (this._initialized = !0);
        }
        _framebufferTexture2D(
          e,
          t = j.VY.COLOR_ATTACHMENT0,
          r = j.No.TEXTURE_2D,
          i = j.qi.FRAMEBUFFER,
          o = 0,
        ) {
          this._context.gl.framebufferTexture2D(i, t, r, e, o);
        }
        _detachColorAttachment(e) {
          (0, ve.hZ)() &&
            console.warn(
              'Detaching an FBO attachment can be a slow due to invalidating framebuffer completeness!',
            );
          const t = this._context.gl,
            r = this._colorAttachments.get(e);
          return (
            Me(r)
              ? this._initialized &&
                (this._context.bindFramebuffer(this),
                this._framebufferTexture2D(null, e))
              : this._initialized &&
                (this._context.bindFramebuffer(this),
                t.framebufferRenderbuffer(
                  j.qi.FRAMEBUFFER,
                  e,
                  t.RENDERBUFFER,
                  null,
                )),
            this._colorAttachments.delete(e),
            r
          );
        }
        _disposeColorAttachments() {
          this._colorAttachments.forEach((e, t) => {
            this._detachColorAttachment(t), e.dispose();
          }),
            this._colorAttachments.clear();
        }
        _disposeDepthStencilAttachments() {
          const e = this._context.gl;
          if (this._depthAttachment) {
            if (this._initialized) {
              this._context.bindFramebuffer(this);
              const t =
                this._desc.depthStencilTarget === j.OU.DEPTH_RENDER_BUFFER
                  ? e.DEPTH_ATTACHMENT
                  : e.DEPTH_STENCIL_ATTACHMENT;
              e.framebufferRenderbuffer(
                j.qi.FRAMEBUFFER,
                t,
                e.RENDERBUFFER,
                null,
              );
            }
            this._depthAttachment.dispose(), (this._depthAttachment = null);
          }
          this._stencilAttachment &&
            (this._initialized &&
              (this._context.bindFramebuffer(this),
              e.framebufferRenderbuffer(
                j.qi.FRAMEBUFFER,
                e.STENCIL_ATTACHMENT,
                e.RENDERBUFFER,
                null,
              )),
            this._stencilAttachment.dispose(),
            (this._stencilAttachment = null)),
            this._depthStencilTexture &&
              (this._initialized &&
                (this._context.bindFramebuffer(this),
                this._framebufferTexture2D(null, e.DEPTH_STENCIL_ATTACHMENT)),
              this._depthStencilTexture.dispose(),
              (this._depthStencilTexture = null));
        }
        _validateColorAttachmentPoint(e) {
          if (-1 === Re._MAX_COLOR_ATTACHMENTS) {
            const e = this._context.capabilities.drawBuffers;
            if (e) {
              const t = this._context.gl;
              Re._MAX_COLOR_ATTACHMENTS = t.getParameter(
                e.MAX_COLOR_ATTACHMENTS,
              );
            } else Re._MAX_COLOR_ATTACHMENTS = 1;
          }
          const t = e - j.VY.COLOR_ATTACHMENT0;
          t + 1 > Re._MAX_COLOR_ATTACHMENTS &&
            Se.error(
              'esri.FrameBufferObject',
              `illegal attachment point for color attachment: ${
                t + 1
              }. Implementation supports up to ${
                Re._MAX_COLOR_ATTACHMENTS
              } color attachments`,
            );
        }
      }
      function Me(e) {
        return 'type' in e && 'texture' === e.type;
      }
      function Ce(e) {
        return 'type' in e && 'renderbuffer' === e.type;
      }
      function Oe(e) {
        return Me(e) || 'pixelFormat' in e;
      }
      function ye(e, t) {
        e.target !== j.No.TEXTURE_2D &&
          e.target !== j.No.TEXTURE_CUBE_MAP &&
          console.error('Texture type must be TEXTURE_2D or TEXTURE_CUBE_MAP!'),
          void 0 !== t.width &&
          t.width >= 0 &&
          void 0 !== t.height &&
          t.height >= 0
            ? (t.width === e.width && t.height === e.height) ||
              console.error(
                "Color attachment texture must match the framebuffer's!",
              )
            : ((t.width = e.width), (t.height = e.height));
      }
      function we(e, t) {
        void 0 !== t.width &&
        t.width >= 0 &&
        void 0 !== t.height &&
        t.height >= 0
          ? (t.width === e.width && t.height === e.height) ||
            console.error(
              "Renderbuffer dimensions must match the framebuffer's!",
            )
          : ((t.width = e.width), (t.height = e.height));
      }
      function Ne(e) {
        return e.descriptor.target === j.No.TEXTURE_CUBE_MAP
          ? j.No.TEXTURE_CUBE_MAP_POSITIVE_X
          : j.No.TEXTURE_2D;
      }
      Re._MAX_COLOR_ATTACHMENTS = -1;
      var Pe,
        Ie,
        De = r(46314);
      class Le extends D {
        constructor(e, t) {
          super(),
            (this.data = e),
            (this.type = N.Texture),
            (this._glTexture = null),
            (this._powerOfTwoStretchInfo = null),
            (this._loadingPromise = null),
            (this._loadingController = null),
            (this.events = new z.Z()),
            (this.params = t || {}),
            (this.params.mipmap = !1 !== this.params.mipmap),
            (this.params.noUnpackFlip = this.params.noUnpackFlip || !1),
            (this.params.preMultiplyAlpha = this.params.preMultiplyAlpha || !1),
            (this.params.wrap = this.params.wrap || {
              s: j.e8.REPEAT,
              t: j.e8.REPEAT,
            }),
            (this.params.powerOfTwoResizeMode =
              this.params.powerOfTwoResizeMode || M.CE.STRETCH),
            (this.estimatedTexMemRequired = Le._estimateTexMemRequired(
              this.data,
              this.params,
            )),
            this._startPreload();
        }
        _startPreload() {
          const e = this.data;
          (0, o.Wi)(e) ||
            (e instanceof HTMLVideoElement
              ? this._startPreloadVideoElement(e)
              : e instanceof HTMLImageElement &&
                this._startPreloadImageElement(e));
        }
        _startPreloadVideoElement(e) {
          (0, W.jc)(e.src) ||
            ('auto' === e.preload && e.crossOrigin) ||
            ((e.preload = 'auto'),
            (e.crossOrigin = 'anonymous'),
            (e.src = e.src));
        }
        _startPreloadImageElement(e) {
          (0, W.HK)(e.src) ||
            (0, W.jc)(e.src) ||
            e.crossOrigin ||
            ((e.crossOrigin = 'anonymous'), (e.src = e.src));
        }
        static _getDataDimensions(e) {
          return e instanceof HTMLVideoElement
            ? { width: e.videoWidth, height: e.videoHeight }
            : e;
        }
        static _estimateTexMemRequired(e, t) {
          if ((0, o.Wi)(e)) return 0;
          if ((0, V.eP)(e) || (0, V.lq)(e))
            return t.encoding === Le.KTX2_ENCODING
              ? (function (e, t) {
                  if ((0, o.Wi)(ee)) return e.byteLength;
                  const r = new ee.KTX2File(new Uint8Array(e)),
                    i = ne(r)
                      ? ie(
                          r.getLevels(),
                          r.getHasAlpha(),
                          r.getWidth(),
                          r.getHeight(),
                          t,
                        )
                      : 0;
                  return r.close(), r.delete(), i;
                })(e, t.mipmap)
              : t.encoding === Le.BASIS_ENCODING
              ? (function (e, t) {
                  if ((0, o.Wi)(ee)) return e.byteLength;
                  const r = new ee.BasisFile(new Uint8Array(e)),
                    i = oe(r)
                      ? ie(
                          r.getNumLevels(0),
                          r.getHasAlpha(),
                          r.getImageWidth(0, 0),
                          r.getImageHeight(0, 0),
                          t,
                        )
                      : 0;
                  return r.close(), r.delete(), i;
                })(e, t.mipmap)
              : e.byteLength;
          const { width: r, height: i } =
            e instanceof Image ||
            e instanceof ImageData ||
            e instanceof HTMLCanvasElement ||
            e instanceof HTMLVideoElement
              ? Le._getDataDimensions(e)
              : t;
          return (t.mipmap ? 4 / 3 : 1) * r * i * (t.components || 4) || 0;
        }
        dispose() {
          this.data = void 0;
        }
        get width() {
          return this.params.width;
        }
        get height() {
          return this.params.height;
        }
        _createDescriptor(e) {
          var t;
          return {
            target: j.No.TEXTURE_2D,
            pixelFormat: j.VI.RGBA,
            dataType: j.Br.UNSIGNED_BYTE,
            wrapMode: this.params.wrap,
            flipped: !this.params.noUnpackFlip,
            samplingMode: this.params.mipmap
              ? j.cw.LINEAR_MIPMAP_LINEAR
              : j.cw.LINEAR,
            hasMipmap: this.params.mipmap,
            preMultiplyAlpha: this.params.preMultiplyAlpha,
            maxAnisotropy:
              null != (t = this.params.maxAnisotropy)
                ? t
                : this.params.mipmap
                ? e.parameters.maxMaxAnisotropy
                : 1,
          };
        }
        get glTexture() {
          return this._glTexture;
        }
        load(e, t) {
          if ((0, o.pC)(this._glTexture)) return this._glTexture;
          if ((0, o.pC)(this._loadingPromise)) return this._loadingPromise;
          const r = this.data;
          return (0, o.Wi)(r)
            ? ((this._glTexture = new Y.x(e, this._createDescriptor(e), null)),
              this._glTexture)
            : 'string' == typeof r
            ? this._loadFromURL(e, t, r)
            : r instanceof Image
            ? this._loadFromImageElement(e, t, r)
            : r instanceof HTMLVideoElement
            ? this._loadFromVideoElement(e, t, r)
            : r instanceof ImageData || r instanceof HTMLCanvasElement
            ? this._loadFromImage(e, r, t)
            : ((0, V.eP)(r) || (0, V.lq)(r)) &&
              this.params.encoding === Le.DDS_ENCODING
            ? ((this.data = void 0), this._loadFromDDSData(e, r))
            : ((0, V.eP)(r) || (0, V.lq)(r)) &&
              this.params.encoding === Le.KTX2_ENCODING
            ? ((this.data = void 0), this._loadFromKTX2(e, r))
            : ((0, V.eP)(r) || (0, V.lq)(r)) &&
              this.params.encoding === Le.BASIS_ENCODING
            ? ((this.data = void 0), this._loadFromBasis(e, r))
            : (0, V.lq)(r)
            ? this._loadFromPixelData(e, r)
            : (0, V.eP)(r)
            ? this._loadFromPixelData(e, new Uint8Array(r))
            : null;
        }
        get requiresFrameUpdates() {
          return this.data instanceof HTMLVideoElement;
        }
        frameUpdate(e, t, r) {
          if (
            !(this.data instanceof HTMLVideoElement) ||
            (0, o.Wi)(this._glTexture)
          )
            return r;
          if (
            this.data.readyState < Pe.HAVE_CURRENT_DATA ||
            r === this.data.currentTime
          )
            return r;
          if ((0, o.pC)(this._powerOfTwoStretchInfo)) {
            const {
              framebuffer: r,
              vao: i,
              sourceTexture: o,
            } = this._powerOfTwoStretchInfo;
            o.setData(this.data),
              this._drawStretchedTexture(e, t, r, i, o, this._glTexture);
          } else {
            const { width: e, height: t } = this.data,
              { width: r, height: i } = this._glTexture.descriptor;
            e !== r || t !== i
              ? this._glTexture.updateData(
                  0,
                  0,
                  0,
                  Math.min(e, r),
                  Math.min(t, i),
                  this.data,
                )
              : this._glTexture.setData(this.data);
          }
          return (
            this._glTexture.descriptor.hasMipmap &&
              this._glTexture.generateMipmap(),
            this.data.currentTime
          );
        }
        _loadFromDDSData(e, t) {
          return (
            (this._glTexture = (function (e, t, r) {
              const {
                textureData: i,
                internalFormat: o,
                width: n,
                height: a,
              } = (function (e, t) {
                const r = new Int32Array(e, 0, 31);
                if (542327876 !== r[0])
                  return se.error('Invalid magic number in DDS header'), null;
                if (!(4 & r[20]))
                  return (
                    se.error('Unsupported format, must contain a FourCC code'),
                    null
                  );
                const i = r[21];
                let o, n;
                switch (i) {
                  case ce:
                    (o = 8), (n = j.q_.COMPRESSED_RGB_S3TC_DXT1_EXT);
                    break;
                  case de:
                    (o = 16), (n = j.q_.COMPRESSED_RGBA_S3TC_DXT3_EXT);
                    break;
                  case ue:
                    (o = 16), (n = j.q_.COMPRESSED_RGBA_S3TC_DXT5_EXT);
                    break;
                  default:
                    return (
                      se.error(
                        'Unsupported FourCC code:',
                        (function (e) {
                          return String.fromCharCode(
                            255 & e,
                            (e >> 8) & 255,
                            (e >> 16) & 255,
                            (e >> 24) & 255,
                          );
                        })(i),
                      ),
                      null
                    );
                }
                let a = 1,
                  s = r[4],
                  l = r[3];
                (0 == (3 & s) && 0 == (3 & l)) ||
                  (se.warn(
                    'Rounding up compressed texture size to nearest multiple of 4.',
                  ),
                  (s = (s + 3) & -4),
                  (l = (l + 3) & -4));
                const c = s,
                  d = l;
                let u, h;
                131072 & r[2] && !1 !== t && (a = Math.max(1, r[7])),
                  1 === a ||
                    ((0, G.wt)(s) && (0, G.wt)(l)) ||
                    (se.warn(
                      'Ignoring mipmaps of non power of two sized compressed texture.',
                    ),
                    (a = 1));
                let f = r[1] + 4;
                const m = [];
                for (let t = 0; t < a; ++t)
                  (h = ((s + 3) >> 2) * ((l + 3) >> 2) * o),
                    (u = new Uint8Array(e, f, h)),
                    m.push(u),
                    (f += h),
                    (s = Math.max(1, s >> 1)),
                    (l = Math.max(1, l >> 1));
                return {
                  textureData: { type: 'compressed', levels: m },
                  internalFormat: n,
                  width: c,
                  height: d,
                };
              })(r, t.hasMipmap);
              return (
                (t.samplingMode =
                  i.levels.length > 1
                    ? j.cw.LINEAR_MIPMAP_LINEAR
                    : j.cw.LINEAR),
                (t.hasMipmap = i.levels.length > 1),
                (t.internalFormat = o),
                (t.width = n),
                (t.height = a),
                new Y.x(e, t, i)
              );
            })(e, this._createDescriptor(e), t)),
            this._glTexture
          );
        }
        _loadFromKTX2(e, t) {
          return this._loadAsync(() =>
            (async function (e, t, r) {
              (0, o.Wi)(ee) && (ee = await re());
              const i = new ee.KTX2File(new Uint8Array(r));
              if (!ne(i)) return null;
              i.startTranscoding();
              const n = ae(
                e,
                t,
                i.getLevels(),
                i.getHasAlpha(),
                i.getWidth(),
                i.getHeight(),
                (e, t) => i.getImageTranscodedSizeInBytes(e, 0, 0, t),
                (e, t, r) => i.transcodeImage(r, e, 0, 0, t, 0, -1, -1),
              );
              return i.close(), i.delete(), n;
            })(e, this._createDescriptor(e), t).then(
              (e) => ((this._glTexture = e), e),
            ),
          );
        }
        _loadFromBasis(e, t) {
          return this._loadAsync(() =>
            (async function (e, t, r) {
              (0, o.Wi)(ee) && (ee = await re());
              const i = new ee.BasisFile(new Uint8Array(r));
              if (!oe(i)) return null;
              i.startTranscoding();
              const n = ae(
                e,
                t,
                i.getNumLevels(0),
                i.getHasAlpha(),
                i.getImageWidth(0, 0),
                i.getImageHeight(0, 0),
                (e, t) => i.getImageTranscodedSizeInBytes(0, e, t),
                (e, t, r) => i.transcodeImage(r, 0, e, t, 0, 0),
              );
              return i.close(), i.delete(), n;
            })(e, this._createDescriptor(e), t).then(
              (e) => ((this._glTexture = e), e),
            ),
          );
        }
        _loadFromPixelData(e, t) {
          (0, O.hu)(this.params.width > 0 && this.params.height > 0);
          const r = this._createDescriptor(e);
          return (
            (r.pixelFormat =
              1 === this.params.components
                ? j.VI.LUMINANCE
                : 3 === this.params.components
                ? j.VI.RGB
                : j.VI.RGBA),
            (r.width = this.params.width),
            (r.height = this.params.height),
            (this._glTexture = new Y.x(e, r, t)),
            this._glTexture
          );
        }
        _loadFromURL(e, t, r) {
          return this._loadAsync(async (i) => {
            const o = await R(r, { signal: i });
            return (0, A.k_)(i), this._loadFromImage(e, o, t);
          });
        }
        _loadFromImageElement(e, t, r) {
          return r.complete
            ? this._loadFromImage(e, r, t)
            : this._loadAsync(async (i) => {
                const o = await (0, q.f)(r, r.src, !1, i);
                return (0, A.k_)(i), this._loadFromImage(e, o, t);
              });
        }
        _loadFromVideoElement(e, t, r) {
          return r.readyState >= Pe.HAVE_CURRENT_DATA
            ? this._loadFromImage(e, r, t)
            : this._loadFromVideoElementAsync(e, t, r);
        }
        _loadFromVideoElementAsync(e, t, r) {
          return this._loadAsync(
            (i) =>
              new Promise((n, a) => {
                const s = () => {
                    r.removeEventListener('loadeddata', l),
                      r.removeEventListener('error', c),
                      (0, o.hw)(d);
                  },
                  l = () => {
                    r.readyState >= Pe.HAVE_CURRENT_DATA &&
                      (s(), n(this._loadFromImage(e, r, t)));
                  },
                  c = (e) => {
                    s(), a(e || new b.Z('Failed to load video'));
                  };
                r.addEventListener('loadeddata', l),
                  r.addEventListener('error', c);
                const d = (0, A.fu)(i, () => c((0, A.zE)()));
              }),
          );
        }
        _loadFromImage(e, t, r) {
          const i = Le._getDataDimensions(t);
          (this.params.width = i.width), (this.params.height = i.height);
          const o = this._createDescriptor(e);
          return (
            (o.pixelFormat =
              3 === this.params.components ? j.VI.RGB : j.VI.RGBA),
            !this._requiresPowerOfTwo(e, o) ||
            ((0, G.wt)(i.width) && (0, G.wt)(i.height))
              ? ((o.width = i.width),
                (o.height = i.height),
                (this._glTexture = new Y.x(e, o, t)),
                this._glTexture)
              : ((this._glTexture = this._makePowerOfTwoTexture(e, t, i, o, r)),
                this._glTexture)
          );
        }
        _loadAsync(e) {
          const t = new AbortController();
          this._loadingController = t;
          const r = e(t.signal);
          this._loadingPromise = r;
          const i = () => {
            this._loadingController === t && (this._loadingController = null),
              this._loadingPromise === r && (this._loadingPromise = null);
          };
          return r.then(i, i), r;
        }
        _requiresPowerOfTwo(e, t) {
          const r = j.e8.CLAMP_TO_EDGE,
            i =
              'number' == typeof t.wrapMode
                ? t.wrapMode === r
                : t.wrapMode.s === r && t.wrapMode.t === r;
          return !(0, De.Z)(e.gl) && (t.hasMipmap || !i);
        }
        _makePowerOfTwoTexture(e, t, r, i, o) {
          const { width: n, height: a } = r,
            s = (0, G.Sf)(n),
            l = (0, G.Sf)(a);
          let c;
          switch (
            ((i.width = s), (i.height = l), this.params.powerOfTwoResizeMode)
          ) {
            case M.CE.PAD:
              (i.textureCoordinateScaleFactor = [n / s, a / l]),
                (c = new Y.x(e, i)),
                c.updateData(0, 0, 0, n, a, t);
              break;
            case M.CE.STRETCH:
            case null:
            case void 0:
              c = this._stretchToPowerOfTwo(e, t, i, o());
              break;
            default:
              (0, U.Bg)(this.params.powerOfTwoResizeMode);
          }
          return i.hasMipmap && c.generateMipmap(), c;
        }
        _stretchToPowerOfTwo(e, t, r, i) {
          const o = new Y.x(e, r),
            n = new Re(
              e,
              { colorTarget: j.Lm.TEXTURE, depthStencilTarget: j.OU.NONE },
              o,
            ),
            a = new Y.x(
              e,
              {
                target: j.No.TEXTURE_2D,
                pixelFormat: r.pixelFormat,
                dataType: j.Br.UNSIGNED_BYTE,
                wrapMode: j.e8.CLAMP_TO_EDGE,
                samplingMode: j.cw.LINEAR,
                flipped: !!r.flipped,
                maxAnisotropy: 8,
                preMultiplyAlpha: r.preMultiplyAlpha,
              },
              t,
            ),
            s = (function (e, t = me, r = he, i = -1, o = 1) {
              let n = null;
              return (
                (n =
                  t === pe
                    ? new Float32Array([
                        i,
                        i,
                        0,
                        0,
                        o,
                        i,
                        1,
                        0,
                        i,
                        o,
                        0,
                        1,
                        o,
                        o,
                        1,
                        1,
                      ])
                    : new Float32Array([i, i, o, i, i, o, o, o])),
                new Ee(
                  e,
                  r,
                  { geometry: t },
                  { geometry: xe.createVertex(e, j.l1.STATIC_DRAW, n) },
                )
              );
            })(e),
            l = e.getBoundFramebufferObject();
          return (
            this._drawStretchedTexture(e, i, n, s, a, o),
            this.requiresFrameUpdates
              ? (this._powerOfTwoStretchInfo = {
                  vao: s,
                  sourceTexture: a,
                  framebuffer: n,
                })
              : (s.dispose(!0),
                a.dispose(),
                n.detachColorTexture(),
                n.dispose()),
            e.bindFramebuffer(l),
            o
          );
        }
        _drawStretchedTexture(e, t, r, i, o, n) {
          e.bindFramebuffer(r);
          const a = e.getViewport();
          e.setViewport(0, 0, n.descriptor.width, n.descriptor.height);
          const s = e.useTechnique(t);
          s.setUniform4f('uColor', 1, 1, 1, 1),
            s.bindTexture(o, 'tex'),
            e.bindVAO(i),
            e.drawArrays(
              j.MX.TRIANGLE_STRIP,
              0,
              (function (e, t) {
                return (
                  e.vertexBuffers[t].size /
                  (function (e) {
                    return e[0].stride;
                  })(e.layout[t])
                );
              })(i, 'geometry'),
            ),
            e.bindFramebuffer(null),
            e.setViewport(a.x, a.y, a.width, a.height);
        }
        unload() {
          if ((0, o.pC)(this._powerOfTwoStretchInfo)) {
            const {
              framebuffer: e,
              vao: t,
              sourceTexture: r,
            } = this._powerOfTwoStretchInfo;
            t.dispose(!0),
              r.dispose(),
              e.dispose(),
              (this._glTexture = null),
              (this._powerOfTwoStretchInfo = null);
          }
          if (
            ((0, o.pC)(this._glTexture) &&
              (this._glTexture.dispose(), (this._glTexture = null)),
            (0, o.pC)(this._loadingController))
          ) {
            const e = this._loadingController;
            (this._loadingController = null),
              (this._loadingPromise = null),
              e.abort();
          }
          this.events.emit('unloaded');
        }
      }
      (Le.DDS_ENCODING = 'image/vnd-ms.dds'),
        (Le.KTX2_ENCODING = 'image/ktx2'),
        (Le.BASIS_ENCODING = 'image/x.basis'),
        ((Ie = Pe || (Pe = {}))[(Ie.HAVE_NOTHING = 0)] = 'HAVE_NOTHING'),
        (Ie[(Ie.HAVE_METADATA = 1)] = 'HAVE_METADATA'),
        (Ie[(Ie.HAVE_CURRENT_DATA = 2)] = 'HAVE_CURRENT_DATA'),
        (Ie[(Ie.HAVE_FUTURE_DATA = 3)] = 'HAVE_FUTURE_DATA'),
        (Ie[(Ie.HAVE_ENOUGH_DATA = 4)] = 'HAVE_ENOUGH_DATA');
      var Fe,
        He = r(64822),
        Be = r(65576),
        Ue = r(18361),
        ze = r(19419),
        Ge = r(94124),
        Ve = r(37782);
      class We extends D {
        constructor(e, t) {
          super(),
            (this.type = N.Material),
            (this.supportsEdges = !1),
            (this._visible = !0),
            (this._renderPriority = 0),
            (this._insertOrder = 0),
            (this._vertexAttributeLocations = he),
            (this._parameters = (0, Ve.Uf)(e, t)),
            this.validateParameters(this._parameters);
        }
        dispose() {}
        get parameters() {
          return this._parameters;
        }
        update(e) {
          return !1;
        }
        setParameters(e) {
          (0, Ve.LO)(this._parameters, e) &&
            (this.validateParameters(this._parameters),
            this.parametersChanged());
        }
        validateParameters(e) {}
        get visible() {
          return this._visible;
        }
        set visible(e) {
          e !== this._visible &&
            ((this._visible = e), this.parametersChanged());
        }
        shouldRender(e) {
          return (
            this.isVisible() &&
            this.isVisibleInPass(e.pass) &&
            0 != (this.renderOccluded & e.renderOccludedMask)
          );
        }
        isVisibleInPass(e) {
          return !0;
        }
        get renderOccluded() {
          return this.parameters.renderOccluded;
        }
        get renderPriority() {
          return this._renderPriority;
        }
        set renderPriority(e) {
          e !== this._renderPriority &&
            ((this._renderPriority = e), this.parametersChanged());
        }
        get insertOrder() {
          return this._insertOrder;
        }
        set insertOrder(e) {
          e !== this._insertOrder &&
            ((this._insertOrder = e), this.parametersChanged());
        }
        get vertexAttributeLocations() {
          return this._vertexAttributeLocations;
        }
        isVisible() {
          return this._visible;
        }
        parametersChanged() {
          (0, o.pC)(this.repository) && this.repository.materialChanged(this);
        }
      }
      !(function (e) {
        (e[(e.Occlude = 1)] = 'Occlude'),
          (e[(e.Transparent = 2)] = 'Transparent'),
          (e[(e.OccludeAndTransparent = 4)] = 'OccludeAndTransparent'),
          (e[(e.OccludeAndTransparentStencil = 8)] =
            'OccludeAndTransparentStencil'),
          (e[(e.Opaque = 16)] = 'Opaque');
      })(Fe || (Fe = {}));
      const qe = { renderOccluded: Fe.Occlude };
      function ke(e, t, r = j.db.ADD, i = [0, 0, 0, 0]) {
        return {
          srcRgb: e,
          srcAlpha: e,
          dstRgb: t,
          dstAlpha: t,
          opRgb: r,
          opAlpha: r,
          color: { r: i[0], g: i[1], b: i[2], a: i[3] },
        };
      }
      const Xe = { face: j.LR.BACK, mode: j.Wf.CCW },
        $e = { face: j.LR.FRONT, mode: j.Wf.CCW },
        je = (e) => (e === M.Vr.Back ? Xe : e === M.Vr.Front ? $e : null),
        Ye = { zNear: 0, zFar: 1 },
        Ze = { r: !0, g: !0, b: !0, a: !0 };
      function Je(e) {
        return st.intern(e);
      }
      function Ke(e) {
        return ct.intern(e);
      }
      function Qe(e) {
        return ut.intern(e);
      }
      function et(e) {
        return ft.intern(e);
      }
      function tt(e) {
        return pt.intern(e);
      }
      function rt(e) {
        return vt.intern(e);
      }
      function it(e) {
        return Tt.intern(e);
      }
      function ot(e) {
        return bt.intern(e);
      }
      class nt {
        constructor(e, t) {
          (this.makeKey = e), (this.makeRef = t), (this.interns = new Map());
        }
        intern(e) {
          if (!e) return null;
          const t = this.makeKey(e),
            r = this.interns;
          return r.has(t) || r.set(t, this.makeRef(e)), r.get(t);
        }
      }
      function at(e) {
        return '[' + e.join(',') + ']';
      }
      const st = new nt(lt, (e) => ({ __tag: 'Blending', ...e }));
      function lt(e) {
        return e
          ? at([
              e.srcRgb,
              e.srcAlpha,
              e.dstRgb,
              e.dstAlpha,
              e.opRgb,
              e.opAlpha,
              e.color.r,
              e.color.g,
              e.color.b,
              e.color.a,
            ])
          : null;
      }
      const ct = new nt(dt, (e) => ({ __tag: 'Culling', ...e }));
      function dt(e) {
        return e ? at([e.face, e.mode]) : null;
      }
      const ut = new nt(ht, (e) => ({ __tag: 'PolygonOffset', ...e }));
      function ht(e) {
        return e ? at([e.factor, e.units]) : null;
      }
      const ft = new nt(mt, (e) => ({ __tag: 'DepthTest', ...e }));
      function mt(e) {
        return e ? at([e.func]) : null;
      }
      const pt = new nt(gt, (e) => ({ __tag: 'StencilTest', ...e }));
      function gt(e) {
        return e
          ? at([
              e.function.func,
              e.function.ref,
              e.function.mask,
              e.operation.fail,
              e.operation.zFail,
              e.operation.zPass,
            ])
          : null;
      }
      const vt = new nt(_t, (e) => ({ __tag: 'DepthWrite', ...e }));
      function _t(e) {
        return e ? at([e.zNear, e.zFar]) : null;
      }
      const Tt = new nt(xt, (e) => ({ __tag: 'ColorWrite', ...e }));
      function xt(e) {
        return e ? at([e.r, e.g, e.b, e.a]) : null;
      }
      const bt = new nt(Et, (e) => ({ __tag: 'StencilWrite', ...e }));
      function Et(e) {
        return e ? at([e.mask]) : null;
      }
      const At = new nt(
          function (e) {
            return e
              ? at([
                  lt(e.blending),
                  dt(e.culling),
                  ht(e.polygonOffset),
                  mt(e.depthTest),
                  gt(e.stencilTest),
                  _t(e.depthWrite),
                  xt(e.colorWrite),
                  Et(e.stencilWrite),
                ])
              : null;
          },
          (e) => ({
            blending: Je(e.blending),
            culling: Ke(e.culling),
            polygonOffset: Qe(e.polygonOffset),
            depthTest: et(e.depthTest),
            stencilTest: tt(e.stencilTest),
            depthWrite: rt(e.depthWrite),
            colorWrite: it(e.colorWrite),
            stencilWrite: ot(e.stencilWrite),
          }),
        ),
        St = (function (
          e,
          t,
          r,
          i,
          o = j.db.ADD,
          n = j.db.ADD,
          a = [0, 0, 0, 0],
        ) {
          return {
            srcRgb: e,
            srcAlpha: t,
            dstRgb: r,
            dstAlpha: i,
            opRgb: o,
            opAlpha: n,
            color: { r: a[0], g: a[1], b: a[2], a: a[3] },
          };
        })(
          j.zi.SRC_ALPHA,
          j.zi.ONE,
          j.zi.ONE_MINUS_SRC_ALPHA,
          j.zi.ONE_MINUS_SRC_ALPHA,
        ),
        Rt = ke(j.zi.ONE, j.zi.ONE),
        Mt = ke(j.zi.ZERO, j.zi.ONE_MINUS_SRC_ALPHA);
      function Ct(e) {
        return e === M.Am.FrontFace ? null : e === M.Am.Alpha ? Mt : Rt;
      }
      const Ot = { factor: -1, units: -2 };
      function yt(e) {
        return e ? Ot : null;
      }
      function wt(e, t = j.wb.LESS) {
        return e === M.Am.NONE || e === M.Am.FrontFace ? t : j.wb.LEQUAL;
      }
      var Nt,
        Pt,
        It = r(50173),
        Dt = r(97995),
        Lt = r(51305),
        Ft = r(94961),
        Ht = r(72119),
        Bt = r(88669),
        Ut = r(98766);
      ((Pt = Nt || (Nt = {}))[(Pt.X = 0)] = 'X'),
        (Pt[(Pt.Y = 1)] = 'Y'),
        (Pt[(Pt.Z = 2)] = 'Z');
      var zt = r(22807),
        Gt = r(12981);
      new zt.x(function () {
        return { origin: null, direction: null };
      }),
        (0, d.c)(),
        (0, d.c)();
      const Vt = E.Z.getLogger('esri.geometry.support.sphere');
      function Wt() {
        return (0, Bt.c)();
      }
      function qt(e, t = Wt()) {
        return (0, Ut.c)(t, e);
      }
      function kt(e) {
        return Array.isArray(e) ? e[3] : e;
      }
      function Xt(e) {
        return Array.isArray(e) ? e : tr;
      }
      function $t(e, t, r) {
        if ((0, o.Wi)(t)) return !1;
        const { origin: i, direction: n } = t,
          a = jt;
        (a[0] = i[0] - e[0]), (a[1] = i[1] - e[1]), (a[2] = i[2] - e[2]);
        const s = n[0] * n[0] + n[1] * n[1] + n[2] * n[2],
          l = 2 * (n[0] * a[0] + n[1] * a[1] + n[2] * a[2]),
          c =
            l * l -
            4 * s * (a[0] * a[0] + a[1] * a[1] + a[2] * a[2] - e[3] * e[3]);
        if (c < 0) return !1;
        const d = Math.sqrt(c);
        let u = (-l - d) / (2 * s);
        const h = (-l + d) / (2 * s);
        return (
          (u < 0 || (h < u && h > 0)) && (u = h),
          !(
            u < 0 ||
            (r &&
              ((r[0] = i[0] + n[0] * u),
              (r[1] = i[1] + n[1] * u),
              (r[2] = i[2] + n[2] * u)),
            0)
          )
        );
      }
      const jt = (0, d.c)();
      function Yt(e, t, r) {
        const i = Gt.WM.get(),
          o = Gt.MP.get();
        (0, c.c)(i, t.origin, t.direction);
        const n = kt(e);
        (0, c.c)(r, i, t.origin), (0, c.a)(r, r, (1 / (0, c.l)(r)) * n);
        const a = Jt(e, t.origin),
          l = (function (e, t) {
            const r = (0, c.d)(e, t) / ((0, c.l)(e) * (0, c.l)(t));
            return -(0, G.ZF)(r);
          })(t.origin, r);
        return (0, s.d)(o, l + a, i), (0, c.m)(r, r, o), r;
      }
      function Zt(e, t, r) {
        const i = (0, c.f)(Gt.WM.get(), t, Xt(e)),
          o = (0, c.a)(Gt.WM.get(), i, e[3] / (0, c.l)(i));
        return (0, c.b)(r, o, Xt(e));
      }
      function Jt(e, t) {
        const r = (0, c.f)(Gt.WM.get(), t, Xt(e)),
          i = (0, c.l)(r),
          o = kt(e),
          n = o + Math.abs(o - i);
        return (0, G.ZF)(o / n);
      }
      const Kt = (0, d.c)();
      function Qt(e, t, r, i) {
        const o = (0, c.f)(Kt, t, Xt(e));
        switch (r) {
          case Nt.X: {
            const e = (0, G.jE)(o, Kt)[2];
            return (0, c.s)(i, -Math.sin(e), Math.cos(e), 0);
          }
          case Nt.Y: {
            const e = (0, G.jE)(o, Kt),
              t = e[1],
              r = e[2],
              n = Math.sin(t);
            return (0, c.s)(i, -n * Math.cos(r), -n * Math.sin(r), Math.cos(t));
          }
          case Nt.Z:
            return (0, c.n)(i, o);
          default:
            return;
        }
      }
      function er(e, t) {
        const r = (0, c.f)(rr, t, Xt(e));
        return (0, c.l)(r) - e[3];
      }
      const tr = (0, d.c)(),
        rr = (0, d.c)();
      Object.freeze({
        __proto__: null,
        create: Wt,
        copy: qt,
        fromCenterAndRadius: function (e, t) {
          return (0, Bt.f)(e[0], e[1], e[2], t);
        },
        wrap: function (e) {
          return e;
        },
        clear: function (e) {
          e[0] = e[1] = e[2] = e[3] = 0;
        },
        fromRadius: function (e) {
          return e;
        },
        getRadius: kt,
        getCenter: Xt,
        fromValues: function (e, t, r, i) {
          return (0, Bt.f)(e, t, r, i);
        },
        elevate: function (e, t, r) {
          return e !== r && (0, c.g)(r, e), (r[3] = e[3] + t), r;
        },
        setExtent: function (e, t, r) {
          return (
            Vt.error('sphere.setExtent is not yet supported'),
            e === r ? r : qt(e, r)
          );
        },
        intersectRay: $t,
        intersectsRay: function (e, t) {
          return $t(e, t, null);
        },
        intersectRayClosestSilhouette: function (e, t, r) {
          if ($t(e, t, r)) return r;
          const i = Yt(e, t, Gt.WM.get());
          return (
            (0, c.b)(
              r,
              t.origin,
              (0, c.a)(
                Gt.WM.get(),
                t.direction,
                (0, c.i)(t.origin, i) / (0, c.l)(t.direction),
              ),
            ),
            r
          );
        },
        closestPointOnSilhouette: Yt,
        closestPoint: function (e, t, r) {
          return $t(e, t, r)
            ? r
            : ((function (e, t, r) {
                const i = (0, c.d)(e.direction, (0, c.f)(r, t, e.origin));
                (0, c.b)(r, e.origin, (0, c.a)(r, e.direction, i));
              })(t, Xt(e), r),
              Zt(e, r, r));
        },
        projectPoint: Zt,
        distanceToSilhouette: function (e, t) {
          const r = (0, c.f)(Gt.WM.get(), t, Xt(e)),
            i = (0, c.p)(r),
            o = e[3] * e[3];
          return Math.sqrt(Math.abs(i - o));
        },
        angleToSilhouette: Jt,
        axisAt: Qt,
        altitudeAt: er,
        setAltitudeAt: function (e, t, r, i) {
          const o = er(e, t),
            n = Qt(e, t, Nt.Z, rr),
            a = (0, c.a)(rr, n, r - o);
          return (0, c.b)(i, t, a);
        },
      });
      const ir = new (class {
        constructor(e = 0) {
          (this.offset = e),
            (this.sphere = Wt()),
            (this.tmpVertex = (0, d.c)());
        }
        applyToVertex(e, t, r) {
          const i = this.objectTransform.transform;
          let o = i[0] * e + i[4] * t + i[8] * r + i[12],
            n = i[1] * e + i[5] * t + i[9] * r + i[13],
            a = i[2] * e + i[6] * t + i[10] * r + i[14];
          const s = this.offset / Math.sqrt(o * o + n * n + a * a);
          (o += o * s), (n += n * s), (a += a * s);
          const l = this.objectTransform.inverse;
          return (
            (this.tmpVertex[0] = l[0] * o + l[4] * n + l[8] * a + l[12]),
            (this.tmpVertex[1] = l[1] * o + l[5] * n + l[9] * a + l[13]),
            (this.tmpVertex[2] = l[2] * o + l[6] * n + l[10] * a + l[14]),
            this.tmpVertex
          );
        }
        applyToMinMax(e, t) {
          const r =
            this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
          (e[0] += e[0] * r), (e[1] += e[1] * r), (e[2] += e[2] * r);
          const i =
            this.offset / Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
          (t[0] += t[0] * i), (t[1] += t[1] * i), (t[2] += t[2] * i);
        }
        applyToAabb(e) {
          const t =
            this.offset / Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]);
          (e[0] += e[0] * t), (e[1] += e[1] * t), (e[2] += e[2] * t);
          const r =
            this.offset / Math.sqrt(e[3] * e[3] + e[4] * e[4] + e[5] * e[5]);
          return (e[3] += e[3] * r), (e[4] += e[4] * r), (e[5] += e[5] * r), e;
        }
        applyToBoundingSphere(e) {
          const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]),
            r = this.offset / t;
          return (
            (this.sphere[0] = e[0] + e[0] * r),
            (this.sphere[1] = e[1] + e[1] * r),
            (this.sphere[2] = e[2] + e[2] * r),
            (this.sphere[3] = e[3] + (e[3] * this.offset) / t),
            this.sphere
          );
        }
      })();
      new (class {
        constructor(e = 0) {
          (this.offset = e),
            (this.componentLocalOriginLength = 0),
            (this.tmpVertex = (0, d.c)()),
            (this.mbs = (0, Bt.c)()),
            (this.obb = {
              center: (0, d.c)(),
              halfSize: (0, Ht.c)(),
              quaternion: null,
            });
        }
        set localOrigin(e) {
          this.componentLocalOriginLength = Math.sqrt(
            e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
          );
        }
        applyToVertex(e, t, r) {
          const i = e,
            o = t,
            n = r + this.componentLocalOriginLength,
            a = this.offset / Math.sqrt(i * i + o * o + n * n);
          return (
            (this.tmpVertex[0] = e + i * a),
            (this.tmpVertex[1] = t + o * a),
            (this.tmpVertex[2] = r + n * a),
            this.tmpVertex
          );
        }
        applyToAabb(e) {
          const t = e[0],
            r = e[1],
            i = e[2] + this.componentLocalOriginLength,
            o = e[3],
            n = e[4],
            a = e[5] + this.componentLocalOriginLength,
            s = this.offset / Math.sqrt(t * t + r * r + i * i);
          (e[0] += t * s), (e[1] += r * s), (e[2] += i * s);
          const l = this.offset / Math.sqrt(o * o + n * n + a * a);
          return (e[3] += o * l), (e[4] += n * l), (e[5] += a * l), e;
        }
        applyToMbs(e) {
          const t = Math.sqrt(e[0] * e[0] + e[1] * e[1] + e[2] * e[2]),
            r = this.offset / t;
          return (
            (this.mbs[0] = e[0] + e[0] * r),
            (this.mbs[1] = e[1] + e[1] * r),
            (this.mbs[2] = e[2] + e[2] * r),
            (this.mbs[3] = e[3] + (e[3] * this.offset) / t),
            this.mbs
          );
        }
        applyToObb(e) {
          const t = e.center,
            r =
              this.offset / Math.sqrt(t[0] * t[0] + t[1] * t[1] + t[2] * t[2]);
          (this.obb.center[0] = t[0] + t[0] * r),
            (this.obb.center[1] = t[1] + t[1] * r),
            (this.obb.center[2] = t[2] + t[2] * r),
            (0, c.q)(this.obb.halfSize, e.halfSize, e.quaternion),
            (0, c.b)(this.obb.halfSize, this.obb.halfSize, e.center);
          const i =
            this.offset /
            Math.sqrt(
              this.obb.halfSize[0] * this.obb.halfSize[0] +
                this.obb.halfSize[1] * this.obb.halfSize[1] +
                this.obb.halfSize[2] * this.obb.halfSize[2],
            );
          return (
            (this.obb.halfSize[0] += this.obb.halfSize[0] * i),
            (this.obb.halfSize[1] += this.obb.halfSize[1] * i),
            (this.obb.halfSize[2] += this.obb.halfSize[2] * i),
            (0, c.f)(this.obb.halfSize, this.obb.halfSize, e.center),
            (0, Lt.c)(or, e.quaternion),
            (0, c.q)(this.obb.halfSize, this.obb.halfSize, or),
            (this.obb.halfSize[0] *= this.obb.halfSize[0] < 0 ? -1 : 1),
            (this.obb.halfSize[1] *= this.obb.halfSize[1] < 0 ? -1 : 1),
            (this.obb.halfSize[2] *= this.obb.halfSize[2] < 0 ? -1 : 1),
            (this.obb.quaternion = e.quaternion),
            this.obb
          );
        }
      })(),
        new (class {
          constructor(e = 0) {
            (this.offset = e), (this.tmpVertex = (0, d.c)());
          }
          applyToVertex(e, t, r) {
            const i = e + this.localOrigin[0],
              o = t + this.localOrigin[1],
              n = r + this.localOrigin[2],
              a = this.offset / Math.sqrt(i * i + o * o + n * n);
            return (
              (this.tmpVertex[0] = e + i * a),
              (this.tmpVertex[1] = t + o * a),
              (this.tmpVertex[2] = r + n * a),
              this.tmpVertex
            );
          }
          applyToAabb(e) {
            const t = e[0] + this.localOrigin[0],
              r = e[1] + this.localOrigin[1],
              i = e[2] + this.localOrigin[2],
              o = e[3] + this.localOrigin[0],
              n = e[4] + this.localOrigin[1],
              a = e[5] + this.localOrigin[2],
              s = this.offset / Math.sqrt(t * t + r * r + i * i);
            (e[0] += t * s), (e[1] += r * s), (e[2] += i * s);
            const l = this.offset / Math.sqrt(o * o + n * n + a * a);
            return (e[3] += o * l), (e[4] += n * l), (e[5] += a * l), e;
          }
        })();
      const or = (0, Ft.a)();
      function nr(e, t, r, i) {
        const o = r.typedBuffer,
          n = r.typedBufferStride,
          a = e.length;
        i *= n;
        for (let r = 0; r < a; ++r) {
          const a = 2 * e[r];
          (o[i] = t[a]), (o[i + 1] = t[a + 1]), (i += n);
        }
      }
      function ar(e, t, r, i, o) {
        const n = r.typedBuffer,
          a = r.typedBufferStride,
          s = e.length;
        if (((i *= a), null == o || 1 === o))
          for (let r = 0; r < s; ++r) {
            const o = 3 * e[r];
            (n[i] = t[o]),
              (n[i + 1] = t[o + 1]),
              (n[i + 2] = t[o + 2]),
              (i += a);
          }
        else
          for (let r = 0; r < s; ++r) {
            const s = 3 * e[r];
            for (let e = 0; e < o; ++e)
              (n[i] = t[s]),
                (n[i + 1] = t[s + 1]),
                (n[i + 2] = t[s + 2]),
                (i += a);
          }
      }
      function sr(e, t, r, i, o, n = 1) {
        if (!r) return void ar(e, t, i, o, n);
        const a = i.typedBuffer,
          s = i.typedBufferStride,
          l = e.length,
          c = r[0],
          d = r[1],
          u = r[2],
          h = r[4],
          f = r[5],
          m = r[6],
          p = r[8],
          g = r[9],
          v = r[10],
          _ = r[12],
          T = r[13],
          x = r[14];
        if (((o *= s), 1 === n))
          for (let r = 0; r < l; ++r) {
            const i = 3 * e[r],
              n = t[i],
              l = t[i + 1],
              b = t[i + 2];
            (a[o] = c * n + h * l + p * b + _),
              (a[o + 1] = d * n + f * l + g * b + T),
              (a[o + 2] = u * n + m * l + v * b + x),
              (o += s);
          }
        else
          for (let r = 0; r < l; ++r) {
            const i = 3 * e[r],
              l = t[i],
              b = t[i + 1],
              E = t[i + 2],
              A = c * l + h * b + p * E + _,
              S = d * l + f * b + g * E + T,
              R = u * l + m * b + v * E + x;
            for (let e = 0; e < n; ++e)
              (a[o] = A), (a[o + 1] = S), (a[o + 2] = R), (o += s);
          }
      }
      function lr(e, t, r, i, o, n = 1) {
        if (!r) return void ar(e, t, i, o, n);
        const a = r,
          l = i.typedBuffer,
          c = i.typedBufferStride,
          d = e.length,
          u = a[0],
          h = a[1],
          f = a[2],
          m = a[4],
          p = a[5],
          g = a[6],
          v = a[8],
          _ = a[9],
          T = a[10],
          x = !(0, s.p)(a),
          b = 1e-6,
          E = 1 - b;
        if (((o *= c), 1 === n))
          for (let r = 0; r < d; ++r) {
            const i = 3 * e[r],
              n = t[i],
              a = t[i + 1],
              s = t[i + 2];
            let d = u * n + m * a + v * s,
              A = h * n + p * a + _ * s,
              S = f * n + g * a + T * s;
            if (x) {
              const e = d * d + A * A + S * S;
              if (e < E && e > b) {
                const t = 1 / Math.sqrt(e);
                (d *= t), (A *= t), (S *= t);
              }
            }
            (l[o + 0] = d), (l[o + 1] = A), (l[o + 2] = S), (o += c);
          }
        else
          for (let r = 0; r < d; ++r) {
            const i = 3 * e[r],
              a = t[i],
              s = t[i + 1],
              d = t[i + 2];
            let A = u * a + m * s + v * d,
              S = h * a + p * s + _ * d,
              R = f * a + g * s + T * d;
            if (x) {
              const e = A * A + S * S + R * R;
              if (e < E && e > b) {
                const t = 1 / Math.sqrt(e);
                (A *= t), (S *= t), (R *= t);
              }
            }
            for (let e = 0; e < n; ++e)
              (l[o + 0] = A), (l[o + 1] = S), (l[o + 2] = R), (o += c);
          }
      }
      function cr(e, t, r, i, o, n = 1) {
        if (!r)
          return void (function (e, t, r, i, o = 1) {
            const n = r.typedBuffer,
              a = r.typedBufferStride,
              s = e.length;
            if (((i *= a), 1 === o))
              for (let r = 0; r < s; ++r) {
                const o = 4 * e[r];
                (n[i] = t[o]),
                  (n[i + 1] = t[o + 1]),
                  (n[i + 2] = t[o + 2]),
                  (n[i + 3] = t[o + 3]),
                  (i += a);
              }
            else
              for (let r = 0; r < s; ++r) {
                const s = 4 * e[r];
                for (let e = 0; e < o; ++e)
                  (n[i] = t[s]),
                    (n[i + 1] = t[s + 1]),
                    (n[i + 2] = t[s + 2]),
                    (n[i + 3] = t[s + 3]),
                    (i += a);
              }
          })(e, t, i, o, n);
        const a = r,
          l = i.typedBuffer,
          c = i.typedBufferStride,
          d = e.length,
          u = a[0],
          h = a[1],
          f = a[2],
          m = a[4],
          p = a[5],
          g = a[6],
          v = a[8],
          _ = a[9],
          T = a[10],
          x = !(0, s.p)(a),
          b = 1e-6,
          E = 1 - b;
        if (((o *= c), 1 === n))
          for (let r = 0; r < d; ++r) {
            const i = 4 * e[r],
              n = t[i],
              a = t[i + 1],
              s = t[i + 2],
              d = t[i + 3];
            let A = u * n + m * a + v * s,
              S = h * n + p * a + _ * s,
              R = f * n + g * a + T * s;
            if (x) {
              const e = A * A + S * S + R * R;
              if (e < E && e > b) {
                const t = 1 / Math.sqrt(e);
                (A *= t), (S *= t), (R *= t);
              }
            }
            (l[o + 0] = A),
              (l[o + 1] = S),
              (l[o + 2] = R),
              (l[o + 3] = d),
              (o += c);
          }
        else
          for (let r = 0; r < d; ++r) {
            const i = 4 * e[r],
              a = t[i],
              s = t[i + 1],
              d = t[i + 2],
              A = t[i + 3];
            let S = u * a + m * s + v * d,
              R = h * a + p * s + _ * d,
              M = f * a + g * s + T * d;
            if (x) {
              const e = S * S + R * R + M * M;
              if (e < E && e > b) {
                const t = 1 / Math.sqrt(e);
                (S *= t), (R *= t), (M *= t);
              }
            }
            for (let e = 0; e < n; ++e)
              (l[o + 0] = S),
                (l[o + 1] = R),
                (l[o + 2] = M),
                (l[o + 3] = A),
                (o += c);
          }
      }
      function dr(e, t, r, i, o, n = 1) {
        const a = i.typedBuffer,
          s = i.typedBufferStride,
          l = e.length;
        if (((o *= s), 1 === n)) {
          if (4 === r)
            for (let r = 0; r < l; ++r) {
              const i = 4 * e[r];
              (a[o] = t[i]),
                (a[o + 1] = t[i + 1]),
                (a[o + 2] = t[i + 2]),
                (a[o + 3] = t[i + 3]),
                (o += s);
            }
          else if (3 === r)
            for (let r = 0; r < l; ++r) {
              const i = 3 * e[r];
              (a[o] = t[i]),
                (a[o + 1] = t[i + 1]),
                (a[o + 2] = t[i + 2]),
                (a[o + 3] = 255),
                (o += s);
            }
        } else if (4 === r)
          for (let r = 0; r < l; ++r) {
            const i = 4 * e[r];
            for (let e = 0; e < n; ++e)
              (a[o] = t[i]),
                (a[o + 1] = t[i + 1]),
                (a[o + 2] = t[i + 2]),
                (a[o + 3] = t[i + 3]),
                (o += s);
          }
        else if (3 === r)
          for (let r = 0; r < l; ++r) {
            const i = 3 * e[r];
            for (let e = 0; e < n; ++e)
              (a[o] = t[i]),
                (a[o + 1] = t[i + 1]),
                (a[o + 2] = t[i + 2]),
                (a[o + 3] = 255),
                (o += s);
          }
      }
      var ur = r(43697),
        hr = r(51546),
        fr = r(47624),
        mr = r(64267),
        pr = r(135),
        gr = r(92555),
        vr = r(68853),
        _r = r(42001),
        Tr = r(85504),
        xr = r(72303),
        br = r(98401),
        Er = r(89243);
      const Ar = (0, r(10937).c)();
      class Sr {
        constructor(e, t) {
          (this._module = e), (this._loadModule = t);
        }
        get() {
          return this._module;
        }
        async reload() {
          return (this._module = await this._loadModule()), this._module;
        }
      }
      function Rr(e = {}) {
        return (t, r) => {
          var i, o;
          (t._parameterNames = null != (i = t._parameterNames) ? i : []),
            t._parameterNames.push(r);
          const n = t._parameterNames.length - 1,
            a = e.count || 2,
            s = Math.ceil(Math.log2(a)),
            l = null != (o = t._parameterBits) ? o : [0];
          let c = 0;
          for (; l[c] + s > 16; ) c++, c >= l.length && l.push(0);
          t._parameterBits = l;
          const d = l[c],
            u = ((1 << s) - 1) << d;
          (l[c] += s),
            Object.defineProperty(t, r, {
              get() {
                return this[n];
              },
              set(e) {
                if (
                  this[n] !== e &&
                  ((this[n] = e),
                  (this._keyDirty = !0),
                  (this._parameterBits[c] =
                    (this._parameterBits[c] & ~u) | ((+e << d) & u)),
                  'number' != typeof e && 'boolean' != typeof e)
                )
                  throw (
                    'Configuration value for ' +
                    r +
                    ' must be boolean or number, got ' +
                    typeof e
                  );
              },
            });
        };
      }
      class Mr {
        constructor(e, t, r) {
          (this._context = e),
            (this._locations = r),
            (this._textures = new Map()),
            (this._freeTextureUnits = new C.Z({ deallocator: null })),
            (this._glProgram = e.programCache.acquire(
              t.generateSource('vertex'),
              t.generateSource('fragment'),
              r,
            )),
            (this._glProgram.stop = () => {
              throw new Error('Wrapped _glProgram used directly');
            }),
            (this._fragmentUniforms = (0, ve.hZ)()
              ? t.fragmentUniforms.entries
              : null);
        }
        dispose() {
          this._glProgram.dispose();
        }
        get glName() {
          return this._glProgram.glName;
        }
        get isCompiled() {
          return this._glProgram.isCompiled;
        }
        setUniform1b(e, t) {
          this._glProgram.setUniform1i(e, t ? 1 : 0);
        }
        setUniform1i(e, t) {
          this._glProgram.setUniform1i(e, t);
        }
        setUniform1f(e, t) {
          this._glProgram.setUniform1f(e, t);
        }
        setUniform1fv(e, t) {
          this._glProgram.setUniform1fv(e, t);
        }
        setUniform1iv(e, t) {
          this._glProgram.setUniform1iv(e, t);
        }
        setUniform2f(e, t, r) {
          this._glProgram.setUniform2f(e, t, r);
        }
        setUniform2fv(e, t) {
          this._glProgram.setUniform2fv(e, t);
        }
        setUniform2iv(e, t) {
          this._glProgram.setUniform2iv(e, t);
        }
        setUniform3f(e, t, r, i) {
          this._glProgram.setUniform3f(e, t, r, i);
        }
        setUniform3fv(e, t) {
          this._glProgram.setUniform3fv(e, t);
        }
        setUniform3iv(e, t) {
          this._glProgram.setUniform3iv(e, t);
        }
        setUniform4f(e, t, r, i, o) {
          this._glProgram.setUniform4f(e, t, r, i, o);
        }
        setUniform4fv(e, t) {
          this._glProgram.setUniform4fv(e, t);
        }
        setUniform4iv(e, t) {
          this._glProgram.setUniform4iv(e, t);
        }
        setUniformMatrix3fv(e, t) {
          this._glProgram.setUniformMatrix3fv(e, t);
        }
        setUniformMatrix4fv(e, t) {
          this._glProgram.setUniformMatrix4fv(e, t);
        }
        assertCompatibleVertexAttributeLocations(e) {
          e.locations !== this._locations &&
            console.error('VertexAttributeLocations are incompatible');
        }
        stop() {
          this._textures.clear(), this._freeTextureUnits.clear();
        }
        bindTexture(e, t) {
          if ((0, o.Wi)(e) || null == e.glName) {
            const e = this._textures.get(t);
            return (
              e &&
                (this._context.bindTexture(null, e.unit),
                this._freeTextureUnit(e),
                this._textures.delete(t)),
              null
            );
          }
          let r = this._textures.get(t);
          return (
            null == r
              ? ((r = this._allocTextureUnit(e)), this._textures.set(t, r))
              : (r.texture = e),
            this._context.useProgram(this),
            this.setUniform1i(t, r.unit),
            this._context.bindTexture(e, r.unit),
            r.unit
          );
        }
        rebindTextures() {
          this._context.useProgram(this),
            this._textures.forEach((e, t) => {
              this._context.bindTexture(e.texture, e.unit),
                this.setUniform1i(t, e.unit);
            }),
            (0, o.pC)(this._fragmentUniforms) &&
              this._fragmentUniforms.forEach((e) => {
                if (
                  ('sampler2D' === e.type || 'samplerCube' === e.type) &&
                  !this._textures.has(e.name)
                )
                  throw new Error(
                    `Texture sampler ${e.name} has no bound texture`,
                  );
              });
        }
        _allocTextureUnit(e) {
          return {
            texture: e,
            unit:
              0 === this._freeTextureUnits.length
                ? this._textures.size
                : this._freeTextureUnits.pop(),
          };
        }
        _freeTextureUnit(e) {
          this._freeTextureUnits.push(e.unit);
        }
      }
      j.wb.LESS, j.wb.ALWAYS;
      const Cr = { mask: 255 },
        Or = {
          function: {
            func: j.wb.ALWAYS,
            ref: M.hU.OutlineVisualElementMask,
            mask: M.hU.OutlineVisualElementMask,
          },
          operation: { fail: j.xS.KEEP, zFail: j.xS.KEEP, zPass: j.xS.ZERO },
        },
        yr = {
          function: {
            func: j.wb.ALWAYS,
            ref: M.hU.OutlineVisualElementMask,
            mask: M.hU.OutlineVisualElementMask,
          },
          operation: { fail: j.xS.KEEP, zFail: j.xS.KEEP, zPass: j.xS.REPLACE },
        };
      j.wb.EQUAL,
        M.hU.OutlineVisualElementMask,
        M.hU.OutlineVisualElementMask,
        j.xS.KEEP,
        j.xS.KEEP,
        j.xS.KEEP,
        j.wb.NOTEQUAL,
        M.hU.OutlineVisualElementMask,
        M.hU.OutlineVisualElementMask,
        j.xS.KEEP,
        j.xS.KEEP,
        j.xS.KEEP;
      var wr = r(32078);
      const Nr = E.Z.getLogger(
        'esri.views.3d.webgl-engine.shaders.DefaultTechnique',
      );
      class Pr extends class {
        constructor(e, t, r) {
          (this.release = r),
            t && (this._config = t.snapshot()),
            (this._program = this.initializeProgram(e)),
            (this._pipeline = this.initializePipeline(e));
        }
        destroy() {
          (this._program = (0, o.O3)(this._program)),
            (this._pipeline = this._config = null);
        }
        reload(e) {
          (0, o.O3)(this._program),
            (this._program = this.initializeProgram(e)),
            (this._pipeline = this.initializePipeline(e));
        }
        get program() {
          return this._program;
        }
        get key() {
          return this._config.key;
        }
        get configuration() {
          return this._config;
        }
        bindPass(e, t) {}
        bindMaterial(e, t) {}
        bindDraw(e) {}
        bindPipelineState(e, t = null, r) {
          e.setPipelineState(this.getPipelineState(t, r));
        }
        ensureAttributeLocations(e) {
          this.program.assertCompatibleVertexAttributeLocations(e);
        }
        get primitiveType() {
          return j.MX.TRIANGLES;
        }
        getPipelineState(e, t) {
          return this._pipeline;
        }
      } {
        initializeProgram(e) {
          const t = Pr.shader.get(),
            r = this.configuration,
            i = t.build({
              oitEnabled: r.transparencyPassType === M.Am.Color,
              output: r.output,
              viewingMode: e.viewingMode,
              receiveShadows: r.receiveShadows,
              slicePlaneEnabled: r.slicePlaneEnabled,
              sliceHighlightDisabled: r.sliceHighlightDisabled,
              sliceEnabledForVertexPrograms: !1,
              symbolColor: r.symbolColors,
              vvSize: r.vvSize,
              vvColor: r.vvColor,
              vvInstancingEnabled: !0,
              instanced: r.instanced,
              instancedColor: r.instancedColor,
              instancedDoublePrecision: r.instancedDoublePrecision,
              pbrMode: r.usePBR
                ? r.isSchematic
                  ? Tr.f7.Schematic
                  : Tr.f7.Normal
                : Tr.f7.Disabled,
              hasMetalnessAndRoughnessTexture:
                r.hasMetalnessAndRoughnessTexture,
              hasEmissionTexture: r.hasEmissionTexture,
              hasOcclusionTexture: r.hasOcclusionTexture,
              hasNormalTexture: r.hasNormalTexture,
              hasColorTexture: r.hasColorTexture,
              hasModelTransformation: r.hasModelTransformation,
              receiveAmbientOcclusion: r.receiveAmbientOcclusion,
              useCustomDTRExponentForWater: !1,
              normalType: r.normalsTypeDerivate
                ? mr.h.ScreenDerivative
                : mr.h.Attribute,
              doubleSidedMode: r.doubleSidedMode,
              vertexTangents: r.vertexTangents,
              attributeTextureCoordinates:
                r.hasMetalnessAndRoughnessTexture ||
                r.hasEmissionTexture ||
                r.hasOcclusionTexture ||
                r.hasNormalTexture ||
                r.hasColorTexture
                  ? pr.N.Default
                  : pr.N.None,
              textureAlphaPremultiplied: r.textureAlphaPremultiplied,
              attributeColor: r.vertexColors,
              screenSizePerspectiveEnabled: r.screenSizePerspective,
              verticalOffsetEnabled: r.verticalOffset,
              offsetBackfaces: r.offsetBackfaces,
              doublePrecisionRequiresObfuscation: (0, Er.I)(e.rctx),
              alphaDiscardMode: r.alphaDiscardMode,
              supportsTextureAtlas: !1,
              multipassTerrainEnabled: r.multipassTerrainEnabled,
              cullAboveGround: r.cullAboveGround,
            });
          return new Mr(e.rctx, i, he);
        }
        bindPass(e, t) {
          var r, i;
          !(function (e, t) {
            e.setUniformMatrix4fv('proj', t);
          })(this.program, t.camera.projectionMatrix);
          const n = this.configuration.output;
          this.configuration.hasModelTransformation &&
            ((0, o.pC)(e.modelTransformation)
              ? this.program.setUniformMatrix4fv('model', e.modelTransformation)
              : Nr.warnOnce(
                  'hasModelTransformation true, but no modelTransformation found.',
                )),
            (this.configuration.output === Ue.H.Depth ||
              t.multipassTerrainEnabled ||
              n === Ue.H.Shadow) &&
              this.program.setUniform2fv('nearFar', t.camera.nearFar),
            t.multipassTerrainEnabled &&
              (this.program.setUniform2fv('inverseViewport', t.inverseViewport),
              (0, _r.p)(this.program, t)),
            n === Ue.H.Alpha &&
              (this.program.setUniform1f('opacity', e.opacity),
              this.program.setUniform1f('layerOpacity', e.layerOpacity),
              this.program.setUniform4fv('externalColor', e.externalColor),
              this.program.setUniform1i('colorMixMode', Ve.FZ[e.colorMixMode])),
            n === Ue.H.Color
              ? (t.lighting.setUniforms(this.program, !1, t.hasFillLights),
                this.program.setUniform3fv('ambient', e.ambient),
                this.program.setUniform3fv('diffuse', e.diffuse),
                this.program.setUniform4fv('externalColor', e.externalColor),
                this.program.setUniform1i(
                  'colorMixMode',
                  Ve.FZ[e.colorMixMode],
                ),
                this.program.setUniform1f('opacity', e.opacity),
                this.program.setUniform1f('layerOpacity', e.layerOpacity),
                this.configuration.usePBR &&
                  (0, Tr.nW)(this.program, e, this.configuration.isSchematic))
              : n === Ue.H.Highlight && (0, vr.wW)(this.program, t),
            (0, br.uj)(this.program, e),
            (0, gr.Mo)(this.program, e, t),
            (0, Ve.bj)(
              e.screenSizePerspective,
              this.program,
              'screenSizePerspectiveAlignment',
            ),
            (e.textureAlphaMode !== M.JJ.Mask &&
              e.textureAlphaMode !== M.JJ.MaskBlend) ||
              this.program.setUniform1f(
                'textureAlphaCutoff',
                e.textureAlphaCutoff,
              ),
            null == (r = t.shadowMap) || r.bind(this.program),
            null == (i = t.ssaoHelper) || i.bind(this.program, t.camera);
        }
        bindDraw(e) {
          const t = this.configuration.instancedDoublePrecision
            ? (0, d.f)(
                e.camera.viewInverseTransposeMatrix[3],
                e.camera.viewInverseTransposeMatrix[7],
                e.camera.viewInverseTransposeMatrix[11],
              )
            : e.origin;
          (function (e, t, r) {
            (0, s.j)(Ar, r, t),
              e.setUniform3fv('localOrigin', t),
              e.setUniformMatrix4fv('view', Ar);
          })(this.program, t, e.camera.viewMatrix),
            this.program.rebindTextures(),
            (this.configuration.output === Ue.H.Color ||
              this.configuration.output === Ue.H.Alpha ||
              (this.configuration.output === Ue.H.Depth &&
                this.configuration.screenSizePerspective) ||
              (this.configuration.output === Ue.H.Normal &&
                this.configuration.screenSizePerspective) ||
              (this.configuration.output === Ue.H.Highlight &&
                this.configuration.screenSizePerspective)) &&
              (function (e, t, r) {
                e.setUniform3f(
                  'cameraPosition',
                  r[3] - t[0],
                  r[7] - t[1],
                  r[11] - t[2],
                );
              })(this.program, t, e.camera.viewInverseTransposeMatrix),
            this.configuration.output === Ue.H.Normal &&
              this.program.setUniformMatrix4fv(
                'viewNormal',
                e.camera.viewInverseTransposeMatrix,
              ),
            this.configuration.instancedDoublePrecision &&
              (0, fr.d3)(this.program, t),
            (0, hr.Vv)(this.program, this.configuration, e.slicePlane, {
              origin: t,
            }),
            this.configuration.output === Ue.H.Color &&
              (0, xr.vL)(this.program, e, t);
        }
        _convertDepthTestFunction(e) {
          return e === M.Gv.Lequal ? j.wb.LEQUAL : j.wb.LESS;
        }
        _setPipeline(e, t) {
          const r = this.configuration,
            i = e === M.Am.NONE,
            o = e === M.Am.FrontFace;
          return (function (e) {
            return At.intern(e);
          })({
            blending:
              (r.output !== Ue.H.Color && r.output !== Ue.H.Alpha) ||
              !r.transparent
                ? null
                : i
                ? St
                : Ct(e),
            culling: Ir(r) && je(r.cullFace),
            depthTest: {
              func: wt(e, this._convertDepthTestFunction(r.customDepthTest)),
            },
            depthWrite: i || o ? r.writeDepth && Ye : null,
            colorWrite: Ze,
            stencilWrite: r.sceneHasOcludees ? Cr : null,
            stencilTest: r.sceneHasOcludees ? (t ? yr : Or) : null,
            polygonOffset: i || o ? null : yt(r.enableOffset),
          });
        }
        initializePipeline() {
          return (
            (this._occludeePipelineState = this._setPipeline(
              this.configuration.transparencyPassType,
              !0,
            )),
            this._setPipeline(this.configuration.transparencyPassType, !1)
          );
        }
        getPipelineState(e, t) {
          return t ? this._occludeePipelineState : super.getPipelineState(e, t);
        }
      }
      function Ir(e) {
        return e.cullFace
          ? e.cullFace !== M.Vr.None
          : !e.slicePlaneEnabled && !e.transparent && !e.doubleSidedMode;
      }
      Pr.shader = new Sr(wr.D, () => r.e(9291).then(r.bind(r, 79291)));
      class Dr extends class {
        constructor() {
          (this._key = ''),
            (this._keyDirty = !1),
            (this._parameterBits = this._parameterBits
              ? this._parameterBits.map(() => 0)
              : []),
            this._parameterNames || (this._parameterNames = []);
        }
        get key() {
          return (
            this._keyDirty &&
              ((this._keyDirty = !1),
              (this._key = String.fromCharCode.apply(
                String,
                this._parameterBits,
              ))),
            this._key
          );
        }
        snapshot() {
          const e = this._parameterNames,
            t = { key: this.key };
          for (const r of e) t[r] = this[r];
          return t;
        }
      } {
        constructor() {
          super(...arguments),
            (this.output = Ue.H.Color),
            (this.alphaDiscardMode = M.JJ.Opaque),
            (this.doubleSidedMode = ze.q.None),
            (this.isSchematic = !1),
            (this.vertexColors = !1),
            (this.offsetBackfaces = !1),
            (this.symbolColors = !1),
            (this.vvSize = !1),
            (this.vvColor = !1),
            (this.verticalOffset = !1),
            (this.receiveShadows = !1),
            (this.slicePlaneEnabled = !1),
            (this.sliceHighlightDisabled = !1),
            (this.receiveAmbientOcclusion = !1),
            (this.screenSizePerspective = !1),
            (this.textureAlphaPremultiplied = !1),
            (this.hasColorTexture = !1),
            (this.usePBR = !1),
            (this.hasMetalnessAndRoughnessTexture = !1),
            (this.hasEmissionTexture = !1),
            (this.hasOcclusionTexture = !1),
            (this.hasNormalTexture = !1),
            (this.instanced = !1),
            (this.instancedColor = !1),
            (this.instancedDoublePrecision = !1),
            (this.vertexTangents = !1),
            (this.normalsTypeDerivate = !1),
            (this.writeDepth = !0),
            (this.sceneHasOcludees = !1),
            (this.transparent = !1),
            (this.enableOffset = !0),
            (this.cullFace = M.Vr.None),
            (this.transparencyPassType = M.Am.NONE),
            (this.multipassTerrainEnabled = !1),
            (this.cullAboveGround = !1),
            (this.hasModelTransformation = !1),
            (this.customDepthTest = M.Gv.Less);
        }
      }
      (0, ur._)([Rr({ count: Ue.H.COUNT })], Dr.prototype, 'output', void 0),
        (0, ur._)(
          [Rr({ count: M.JJ.COUNT })],
          Dr.prototype,
          'alphaDiscardMode',
          void 0,
        ),
        (0, ur._)(
          [Rr({ count: ze.q.COUNT })],
          Dr.prototype,
          'doubleSidedMode',
          void 0,
        ),
        (0, ur._)([Rr()], Dr.prototype, 'isSchematic', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'vertexColors', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'offsetBackfaces', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'symbolColors', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'vvSize', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'vvColor', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'verticalOffset', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'receiveShadows', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'slicePlaneEnabled', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'sliceHighlightDisabled', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'receiveAmbientOcclusion', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'screenSizePerspective', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'textureAlphaPremultiplied', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'hasColorTexture', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'usePBR', void 0),
        (0, ur._)(
          [Rr()],
          Dr.prototype,
          'hasMetalnessAndRoughnessTexture',
          void 0,
        ),
        (0, ur._)([Rr()], Dr.prototype, 'hasEmissionTexture', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'hasOcclusionTexture', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'hasNormalTexture', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'instanced', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'instancedColor', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'instancedDoublePrecision', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'vertexTangents', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'normalsTypeDerivate', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'writeDepth', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'sceneHasOcludees', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'transparent', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'enableOffset', void 0),
        (0, ur._)(
          [Rr({ count: M.Vr.COUNT })],
          Dr.prototype,
          'cullFace',
          void 0,
        ),
        (0, ur._)(
          [Rr({ count: M.Am.COUNT })],
          Dr.prototype,
          'transparencyPassType',
          void 0,
        ),
        (0, ur._)([Rr()], Dr.prototype, 'multipassTerrainEnabled', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'cullAboveGround', void 0),
        (0, ur._)([Rr()], Dr.prototype, 'hasModelTransformation', void 0),
        (0, ur._)(
          [Rr({ count: M.Gv.COUNT })],
          Dr.prototype,
          'customDepthTest',
          void 0,
        );
      var Lr = r(41846);
      class Fr extends Pr {
        initializeProgram(e) {
          const t = Fr.shader.get(),
            r = this.configuration,
            i = t.build({
              oitEnabled: r.transparencyPassType === M.Am.Color,
              output: r.output,
              viewingMode: e.viewingMode,
              receiveShadows: r.receiveShadows,
              slicePlaneEnabled: r.slicePlaneEnabled,
              sliceHighlightDisabled: r.sliceHighlightDisabled,
              sliceEnabledForVertexPrograms: !1,
              symbolColor: r.symbolColors,
              vvSize: r.vvSize,
              vvColor: r.vvColor,
              vvInstancingEnabled: !0,
              instanced: r.instanced,
              instancedColor: r.instancedColor,
              instancedDoublePrecision: r.instancedDoublePrecision,
              pbrMode: r.usePBR ? Tr.f7.Normal : Tr.f7.Disabled,
              hasMetalnessAndRoughnessTexture: !1,
              hasEmissionTexture: !1,
              hasOcclusionTexture: !1,
              hasNormalTexture: !1,
              hasColorTexture: r.hasColorTexture,
              hasModelTransformation: !1,
              receiveAmbientOcclusion: r.receiveAmbientOcclusion,
              useCustomDTRExponentForWater: !1,
              normalType: mr.h.Attribute,
              doubleSidedMode: ze.q.WindingOrder,
              vertexTangents: !1,
              attributeTextureCoordinates: r.hasColorTexture
                ? pr.N.Default
                : pr.N.None,
              textureAlphaPremultiplied: r.textureAlphaPremultiplied,
              attributeColor: r.vertexColors,
              screenSizePerspectiveEnabled: r.screenSizePerspective,
              verticalOffsetEnabled: r.verticalOffset,
              offsetBackfaces: r.offsetBackfaces,
              doublePrecisionRequiresObfuscation: (0, Er.I)(e.rctx),
              alphaDiscardMode: r.alphaDiscardMode,
              supportsTextureAtlas: !1,
              multipassTerrainEnabled: r.multipassTerrainEnabled,
              cullAboveGround: r.cullAboveGround,
            });
          return new Mr(e.rctx, i, he);
        }
      }
      Fr.shader = new Sr(Lr.R, () => r.e(8625).then(r.bind(r, 28625)));
      class Hr extends We {
        constructor(e) {
          super(e, Ur),
            (this.supportsEdges = !0),
            (this.techniqueConfig = new Dr()),
            (this.vertexBufferLayout = (function (e) {
              const t =
                  e.textureId ||
                  e.normalTextureId ||
                  e.metallicRoughnessTextureId ||
                  e.emissiveTextureId ||
                  e.occlusionTextureId,
                r = (0, Be.U$)().vec3f(F.T.POSITION).vec3f(F.T.NORMAL);
              return (
                e.vertexTangents && r.vec4f(F.T.TANGENT),
                t && r.vec2f(F.T.UV0),
                e.vertexColors && r.vec4u8(F.T.COLOR),
                e.symbolColors && r.vec4u8(F.T.SYMBOLCOLOR),
                r
              );
            })(this.parameters)),
            (this.instanceBufferLayout = e.instanced
              ? (function (e) {
                  let t = (0, Be.U$)();
                  return (
                    (t = e.instancedDoublePrecision
                      ? t
                          .vec3f(F.T.MODELORIGINHI)
                          .vec3f(F.T.MODELORIGINLO)
                          .mat3f(F.T.MODEL)
                          .mat3f(F.T.MODELNORMAL)
                      : t.mat4f(F.T.MODEL).mat4f(F.T.MODELNORMAL)),
                    e.instanced &&
                      e.instanced.indexOf('color') > -1 &&
                      (t = t.vec4f(F.T.INSTANCECOLOR)),
                    e.instanced &&
                      e.instanced.indexOf('featureAttribute') > -1 &&
                      (t = t.vec4f(F.T.INSTANCEFEATUREATTRIBUTE)),
                    t
                  );
                })(this.parameters)
              : null);
        }
        isVisibleInPass(e) {
          return (
            (e !== It.C.MATERIAL_DEPTH_SHADOWMAP_ALL &&
              e !== It.C.MATERIAL_DEPTH_SHADOWMAP_DEFAULT &&
              e !== It.C.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT) ||
            this.parameters.castShadows
          );
        }
        isVisible() {
          const e = this.parameters;
          if (!super.isVisible() || 0 === e.layerOpacity) return !1;
          const t = e.instanced,
            r = e.vertexColors,
            i = e.symbolColors,
            o = !!t && t.indexOf('color') > -1,
            n = e.vvColorEnabled,
            a = 'replace' === e.colorMixMode,
            s = e.opacity > 0,
            l = e.externalColor && e.externalColor[3] > 0;
          return r && (o || n || i)
            ? !!a || s
            : r
            ? a
              ? l
              : s
            : o || n || i
            ? !!a || s
            : a
            ? l
            : s;
        }
        getTechniqueConfig(e, t) {
          return (
            (this.techniqueConfig.output = e),
            (this.techniqueConfig.hasNormalTexture =
              !!this.parameters.normalTextureId),
            (this.techniqueConfig.hasColorTexture =
              !!this.parameters.textureId),
            (this.techniqueConfig.vertexTangents =
              this.parameters.vertexTangents),
            (this.techniqueConfig.instanced = !!this.parameters.instanced),
            (this.techniqueConfig.instancedDoublePrecision =
              this.parameters.instancedDoublePrecision),
            (this.techniqueConfig.vvSize = this.parameters.vvSizeEnabled),
            (this.techniqueConfig.verticalOffset =
              null !== this.parameters.verticalOffset),
            (this.techniqueConfig.screenSizePerspective =
              null !== this.parameters.screenSizePerspective),
            (this.techniqueConfig.slicePlaneEnabled =
              this.parameters.slicePlaneEnabled),
            (this.techniqueConfig.sliceHighlightDisabled =
              this.parameters.sliceHighlightDisabled),
            (this.techniqueConfig.alphaDiscardMode =
              this.parameters.textureAlphaMode),
            (this.techniqueConfig.normalsTypeDerivate =
              'screenDerivative' === this.parameters.normals),
            (this.techniqueConfig.transparent = this.parameters.transparent),
            (this.techniqueConfig.writeDepth = this.parameters.writeDepth),
            (0, o.pC)(this.parameters.customDepthTest) &&
              (this.techniqueConfig.customDepthTest =
                this.parameters.customDepthTest),
            (this.techniqueConfig.sceneHasOcludees =
              this.parameters.sceneHasOcludees),
            (this.techniqueConfig.cullFace = this.parameters.slicePlaneEnabled
              ? M.Vr.None
              : this.parameters.cullFace),
            (this.techniqueConfig.multipassTerrainEnabled =
              t.multipassTerrainEnabled),
            (this.techniqueConfig.cullAboveGround = t.cullAboveGround),
            (this.techniqueConfig.hasModelTransformation = (0, o.pC)(
              this.parameters.modelTransformation,
            )),
            (e !== Ue.H.Color && e !== Ue.H.Alpha) ||
              ((this.techniqueConfig.vertexColors =
                this.parameters.vertexColors),
              (this.techniqueConfig.symbolColors =
                this.parameters.symbolColors),
              this.parameters.treeRendering
                ? (this.techniqueConfig.doubleSidedMode = ze.q.WindingOrder)
                : (this.techniqueConfig.doubleSidedMode =
                    this.parameters.doubleSided &&
                    'normal' === this.parameters.doubleSidedType
                      ? ze.q.View
                      : this.parameters.doubleSided &&
                        'winding-order' === this.parameters.doubleSidedType
                      ? ze.q.WindingOrder
                      : ze.q.None),
              (this.techniqueConfig.instancedColor =
                !!this.parameters.instanced &&
                this.parameters.instanced.indexOf('color') > -1),
              (this.techniqueConfig.receiveShadows =
                this.parameters.receiveShadows &&
                this.parameters.shadowMappingEnabled),
              (this.techniqueConfig.receiveAmbientOcclusion =
                !!t.ssaoEnabled && this.parameters.receiveSSAO),
              (this.techniqueConfig.vvColor = this.parameters.vvColorEnabled),
              (this.techniqueConfig.textureAlphaPremultiplied =
                !!this.parameters.textureAlphaPremultiplied),
              (this.techniqueConfig.usePBR = this.parameters.usePBR),
              (this.techniqueConfig.hasMetalnessAndRoughnessTexture =
                !!this.parameters.metallicRoughnessTextureId),
              (this.techniqueConfig.hasEmissionTexture =
                !!this.parameters.emissiveTextureId),
              (this.techniqueConfig.hasOcclusionTexture =
                !!this.parameters.occlusionTextureId),
              (this.techniqueConfig.offsetBackfaces = !(
                !this.parameters.transparent ||
                !this.parameters.offsetTransparentBackfaces
              )),
              (this.techniqueConfig.isSchematic =
                this.parameters.usePBR && this.parameters.isSchematic),
              (this.techniqueConfig.transparencyPassType =
                t.transparencyPassType),
              (this.techniqueConfig.enableOffset =
                t.camera.relativeElevation < 5e5)),
            this.techniqueConfig
          );
        }
        intersect(e, t, r, i, n, a, s) {
          if (null !== this.parameters.verticalOffset) {
            const e = i.camera;
            (0, c.s)(Xr, r[12], r[13], r[14]);
            let t = null;
            switch (i.viewingMode) {
              case He.JY.Global:
                t = (0, c.n)(qr, Xr);
                break;
              case He.JY.Local:
                t = (0, c.g)(qr, Wr);
            }
            let o = 0;
            if (null !== this.parameters.verticalOffset) {
              const r = (0, c.f)($r, Xr, e.eye),
                i = (0, c.l)(r),
                n = (0, c.a)(r, r, 1 / i);
              let a = null;
              this.parameters.screenSizePerspective && (a = (0, c.d)(t, n)),
                (o += (0, Ve.Hx)(
                  e,
                  i,
                  this.parameters.verticalOffset,
                  a,
                  this.parameters.screenSizePerspective,
                ));
            }
            (0, c.a)(t, t, o),
              (0, c.t)(kr, t, i.transform.inverseRotation),
              (n = (0, c.f)(Gr, n, kr)),
              (a = (0, c.f)(Vr, a, kr));
          }
          var l;
          (0, Ve.Bw)(
            e,
            t,
            i,
            n,
            a,
            ((l = i.verticalOffset),
            (0, o.pC)(l) ? ((ir.offset = l), ir) : null),
            s,
          );
        }
        requiresSlot(e) {
          return (
            e ===
              (this.parameters.transparent
                ? this.parameters.writeDepth
                  ? Dt.r.TRANSPARENT_MATERIAL
                  : Dt.r.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL
                : Dt.r.OPAQUE_MATERIAL) || e === Dt.r.DRAPED_MATERIAL
          );
        }
        createGLMaterial(e) {
          return e.output === Ue.H.Color ||
            e.output === Ue.H.Alpha ||
            e.output === Ue.H.Depth ||
            e.output === Ue.H.Normal ||
            e.output === Ue.H.Shadow ||
            e.output === Ue.H.Highlight
            ? new Br(e)
            : null;
        }
        createBufferWriter() {
          return new zr(this.vertexBufferLayout, this.instanceBufferLayout);
        }
      }
      class Br extends class extends class {
        constructor(e) {
          (this._material = e.material),
            (this._techniqueRep = e.techniqueRep),
            (this._output = e.output);
        }
        dispose() {
          this._techniqueRep.release(this._technique);
        }
        get technique() {
          return this._technique;
        }
        ensureTechnique(e, t, r = this._output) {
          return (
            (this._technique = this._techniqueRep.releaseAndAcquire(
              e,
              this._material.getTechniqueConfig(r, t),
              this._technique,
            )),
            this._technique
          );
        }
        ensureResources(e) {
          return M.Rw.LOADED;
        }
      } {
        constructor(e) {
          super(e),
            (this._numLoading = 0),
            (this._disposed = !1),
            (this._textureRepository = e.textureRep),
            (this._textureId = e.textureId),
            this._acquire(e.textureId, (e) => (this._texture = e)),
            this._acquire(e.normalTextureId, (e) => (this._textureNormal = e)),
            this._acquire(
              e.emissiveTextureId,
              (e) => (this._textureEmissive = e),
            ),
            this._acquire(
              e.occlusionTextureId,
              (e) => (this._textureOcclusion = e),
            ),
            this._acquire(
              e.metallicRoughnessTextureId,
              (e) => (this._textureMetallicRoughness = e),
            );
        }
        dispose() {
          (this._texture = (0, o.RY)(this._texture)),
            (this._textureNormal = (0, o.RY)(this._textureNormal)),
            (this._textureEmissive = (0, o.RY)(this._textureEmissive)),
            (this._textureOcclusion = (0, o.RY)(this._textureOcclusion)),
            (this._textureMetallicRoughness = (0, o.RY)(
              this._textureMetallicRoughness,
            )),
            (this._disposed = !0);
        }
        ensureResources(e) {
          return 0 === this._numLoading ? M.Rw.LOADED : M.Rw.LOADING;
        }
        updateTexture(e) {
          ((0, o.Wi)(this._texture) || e !== this._texture.id) &&
            ((this._texture = (0, o.RY)(this._texture)),
            (this._textureId = e),
            this._acquire(this._textureId, (e) => (this._texture = e)));
        }
        bindTextures(e) {
          (0, o.pC)(this._texture) &&
            e.bindTexture(this._texture.glTexture, 'tex'),
            (0, o.pC)(this._textureNormal) &&
              e.bindTexture(this._textureNormal.glTexture, 'normalTexture'),
            (0, o.pC)(this._textureEmissive) &&
              e.bindTexture(this._textureEmissive.glTexture, 'texEmission'),
            (0, o.pC)(this._textureOcclusion) &&
              e.bindTexture(this._textureOcclusion.glTexture, 'texOcclusion'),
            (0, o.pC)(this._textureMetallicRoughness) &&
              e.bindTexture(
                this._textureMetallicRoughness.glTexture,
                'texMetallicRoughness',
              );
        }
        bindTextureScale(e) {
          const t = (0, o.pC)(this._texture) ? this._texture.glTexture : null;
          (0, o.pC)(t) && t.descriptor.textureCoordinateScaleFactor
            ? e.setUniform2fv(
                'textureCoordinateScaleFactor',
                t.descriptor.textureCoordinateScaleFactor,
              )
            : e.setUniform2f('textureCoordinateScaleFactor', 1, 1);
        }
        _acquire(e, t) {
          if ((0, o.Wi)(e)) return void t(null);
          const r = this._textureRepository.acquire(e);
          if ((0, A.y8)(r))
            return (
              ++this._numLoading,
              void r
                .then((e) => {
                  if (this._disposed) return (0, o.RY)(e), void t(null);
                  t(e);
                })
                .finally(() => --this._numLoading)
            );
          t(r);
        }
      } {
        constructor(e) {
          super({ ...e, ...e.material.parameters });
        }
        updateParameters(e) {
          const t = this._material.parameters;
          return (
            this.updateTexture(t.textureId),
            this.ensureTechnique(t.treeRendering ? Fr : Pr, e)
          );
        }
        _updateShadowState(e) {
          e.shadowMappingEnabled !==
            this._material.parameters.shadowMappingEnabled &&
            this._material.setParameters({
              shadowMappingEnabled: e.shadowMappingEnabled,
            });
        }
        _updateOccludeeState(e) {
          e.hasOccludees !== this._material.parameters.sceneHasOcludees &&
            this._material.setParameters({ sceneHasOcludees: e.hasOccludees });
        }
        beginSlot(e) {
          return (
            (this._output !== Ue.H.Color && this._output !== Ue.H.Alpha) ||
              (this._updateShadowState(e), this._updateOccludeeState(e)),
            this.updateParameters(e)
          );
        }
        bind(e, t) {
          t.bindPass(this._material.parameters, e),
            this.bindTextures(t.program);
        }
      }
      const Ur = {
        textureId: void 0,
        initTextureTransparent: !1,
        isSchematic: !1,
        usePBR: !1,
        normalTextureId: void 0,
        vertexTangents: !1,
        occlusionTextureId: void 0,
        emissiveTextureId: void 0,
        metallicRoughnessTextureId: void 0,
        emissiveFactor: [0, 0, 0],
        mrrFactors: [0, 1, 0.5],
        ambient: [0.2, 0.2, 0.2],
        diffuse: [0.8, 0.8, 0.8],
        externalColor: [1, 1, 1, 1],
        colorMixMode: 'multiply',
        opacity: 1,
        layerOpacity: 1,
        vertexColors: !1,
        symbolColors: !1,
        doubleSided: !1,
        doubleSidedType: 'normal',
        cullFace: M.Vr.Back,
        instanced: void 0,
        instancedDoublePrecision: !1,
        normals: 'default',
        receiveSSAO: !0,
        fillLightsEnabled: !0,
        receiveShadows: !0,
        castShadows: !0,
        shadowMappingEnabled: !1,
        verticalOffset: null,
        screenSizePerspective: null,
        slicePlaneEnabled: !1,
        sliceHighlightDisabled: !1,
        offsetTransparentBackfaces: !1,
        vvSizeEnabled: !1,
        vvSizeMinSize: [1, 1, 1],
        vvSizeMaxSize: [100, 100, 100],
        vvSizeOffset: [0, 0, 0],
        vvSizeFactor: [1, 1, 1],
        vvSizeValue: [1, 1, 1],
        vvColorEnabled: !1,
        vvColorValues: [0, 0, 0, 0, 0, 0, 0, 0],
        vvColorColors: [
          1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0,
          0, 1, 0, 0, 0, 1, 0, 0, 0,
        ],
        vvSymbolAnchor: [0, 0, 0],
        vvSymbolRotationMatrix: (0, a.c)(),
        modelTransformation: null,
        transparent: !1,
        writeDepth: !0,
        customDepthTest: M.Gv.Less,
        textureAlphaMode: M.JJ.Blend,
        textureAlphaCutoff: Ge.F,
        textureAlphaPremultiplied: !1,
        sceneHasOcludees: !1,
        ...qe,
      };
      class zr {
        constructor(e, t) {
          (this.vertexBufferLayout = e), (this.instanceBufferLayout = t);
        }
        allocate(e) {
          return this.vertexBufferLayout.createBuffer(e);
        }
        elementCount(e) {
          return e.indices.get(F.T.POSITION).length;
        }
        write(e, t, r, i) {
          !(function (e, t, r, i, o, n) {
            for (const a of t.fieldNames) {
              const t = e.vertexAttributes.get(a),
                s = e.indices.get(a);
              if (t && s)
                switch (a) {
                  case F.T.POSITION: {
                    (0, O.hu)(3 === t.size);
                    const e = o.getField(a, h.ct);
                    e && sr(s, t.data, r, e, n);
                    break;
                  }
                  case F.T.NORMAL: {
                    (0, O.hu)(3 === t.size);
                    const e = o.getField(a, h.ct);
                    e && lr(s, t.data, i, e, n);
                    break;
                  }
                  case F.T.UV0: {
                    (0, O.hu)(2 === t.size);
                    const e = o.getField(a, h.Eu);
                    e && nr(s, t.data, e, n);
                    break;
                  }
                  case F.T.COLOR: {
                    (0, O.hu)(3 === t.size || 4 === t.size);
                    const e = o.getField(a, h.mc);
                    e && dr(s, t.data, t.size, e, n);
                    break;
                  }
                  case F.T.SYMBOLCOLOR: {
                    (0, O.hu)(3 === t.size || 4 === t.size);
                    const e = o.getField(a, h.mc);
                    e && dr(s, t.data, t.size, e, n);
                    break;
                  }
                  case F.T.TANGENT: {
                    (0, O.hu)(4 === t.size);
                    const e = o.getField(a, h.ek);
                    e && cr(s, t.data, i, e, n);
                    break;
                  }
                }
            }
          })(
            t,
            this.vertexBufferLayout,
            e.transformation,
            e.invTranspTransformation,
            r,
            i,
          );
        }
      }
      const Gr = (0, d.c)(),
        Vr = (0, d.c)(),
        Wr = (0, d.f)(0, 0, 1),
        qr = (0, d.c)(),
        kr = (0, d.c)(),
        Xr = (0, d.c)(),
        $r = (0, d.c)(),
        jr = E.Z.getLogger('esri.views.3d.layers.graphics.objectResourceUtils');
      function Yr(e) {
        throw new b.Z('', `Request for object resource failed: ${e}`);
      }
      function Zr(e) {
        const t = e.params,
          r = t.topology;
        let i = !0;
        switch (
          (t.vertexAttributes ||
            (jr.warn('Geometry must specify vertex attributes'), (i = !1)),
          t.topology)
        ) {
          case 'PerAttributeArray':
            break;
          case 'Indexed':
          case null:
          case void 0: {
            const e = t.faces;
            if (e) {
              if (t.vertexAttributes)
                for (const r in t.vertexAttributes) {
                  const t = e[r];
                  t && t.values
                    ? (null != t.valueType &&
                        'UInt32' !== t.valueType &&
                        (jr.warn(
                          `Unsupported indexed geometry indices type '${t.valueType}', only UInt32 is currently supported`,
                        ),
                        (i = !1)),
                      null != t.valuesPerElement &&
                        1 !== t.valuesPerElement &&
                        (jr.warn(
                          `Unsupported indexed geometry values per element '${t.valuesPerElement}', only 1 is currently supported`,
                        ),
                        (i = !1)))
                    : (jr.warn(
                        `Indexed geometry does not specify face indices for '${r}' attribute`,
                      ),
                      (i = !1));
                }
            } else jr.warn('Indexed geometries must specify faces'), (i = !1);
            break;
          }
          default:
            jr.warn(`Unsupported topology '${r}'`), (i = !1);
        }
        e.params.material || (jr.warn('Geometry requires material'), (i = !1));
        const o = e.params.vertexAttributes;
        for (const e in o)
          o[e].values ||
            (jr.warn(
              'Geometries with externally defined attributes are not yet supported',
            ),
            (i = !1));
        return i;
      }
      function Jr(e) {
        const t = (0, u.cS)();
        return (
          e.forEach((e) => {
            const r = e.boundingInfo;
            (0, o.pC)(r) &&
              ((0, u.pp)(t, r.getBBMin()), (0, u.pp)(t, r.getBBMax()));
          }),
          t
        );
      }
      async function Kr(e, t) {
        const r = [];
        for (const i in e) {
          const n = e[i],
            a = n.images[0].data;
          if (!a) {
            jr.warn('Externally referenced texture data is not yet supported');
            continue;
          }
          const s = n.encoding + ';base64,' + a,
            l = '/textureDefinitions/' + i,
            c =
              'rgba' === n.channels
                ? n.alphaChannelUsage || 'transparency'
                : 'none',
            d = {
              noUnpackFlip: !0,
              wrap: { s: j.e8.REPEAT, t: j.e8.REPEAT },
              preMultiplyAlpha: Qr(c) !== M.JJ.Opaque,
            },
            u =
              (0, o.pC)(t) && t.disableTextures
                ? Promise.resolve(null)
                : R(s, t);
          r.push(
            u.then((e) => ({
              refId: l,
              image: e,
              params: d,
              alphaChannelUsage: c,
            })),
          );
        }
        const i = await Promise.all(r),
          n = {};
        for (const e of i) n[e.refId] = e;
        return n;
      }
      function Qr(e) {
        switch (e) {
          case 'mask':
            return M.JJ.Mask;
          case 'maskAndTransparency':
            return M.JJ.MaskBlend;
          case 'none':
            return M.JJ.Opaque;
          default:
            return M.JJ.Blend;
        }
      }
      function ei(e) {
        const t = e.params;
        return {
          id: 1,
          material: t.material,
          texture: t.texture,
          region: t.texture,
        };
      }
      const ti = new S.G(1, 2, 'wosr');
      var ri = r(57758),
        ii = r(10816),
        oi = r(75488),
        ni = r(56067);
      async function ai(e, t) {
        const r = si((0, i.pJ)(e));
        if ('wosr' === r.fileType) {
          const e = await (t.cache
              ? t.cache.loadWOSR(r.url, t)
              : (async function (e, t) {
                  const r = await (async function (e, t) {
                    const r = (0, o.pC)(t) && t.streamDataRequester;
                    if (r)
                      return (async function (e, t, r) {
                        const i = await (0, x.q6)(t.request(e, 'json', r));
                        if (!0 === i.ok) return i.value;
                        (0, A.r9)(i.error), Yr(i.error.details.url);
                      })(e, r, t);
                    const i = await (0, x.q6)((0, T.default)(e, (0, o.Wg)(t)));
                    if (!0 === i.ok) return i.value.data;
                    (0, A.r9)(i.error), Yr(i.error);
                  })(e, t);
                  return {
                    resource: r,
                    textures: await Kr(r.textureDefinitions, t),
                  };
                })(r.url, t)),
            i = (function (e, t) {
              const r = [],
                i = [],
                n = [],
                a = [],
                s = e.resource,
                l = S.G.parse(s.version || '1.0', 'wosr');
              ti.validate(l);
              const c = s.model.name,
                u = s.model.geometries,
                h = s.materialDefinitions,
                f = e.textures;
              let m = 0;
              const p = new Map();
              for (let e = 0; e < u.length; e++) {
                const s = u[e];
                if (!Zr(s)) continue;
                const l = ei(s),
                  c = s.params.vertexAttributes,
                  g = [];
                for (const e in c) {
                  const t = c[e],
                    r = t.values;
                  g.push([
                    e,
                    { data: r, size: t.valuesPerElement, exclusive: !0 },
                  ]);
                }
                const v = [];
                if ('PerAttributeArray' !== s.params.topology) {
                  const e = s.params.faces;
                  for (const t in e) v.push([t, new Uint32Array(e[t].values)]);
                }
                const _ = f && f[l.texture];
                if (_ && !p.has(l.texture)) {
                  const { image: e, params: t } = _,
                    r = new Le(e, t);
                  a.push(r), p.set(l.texture, r);
                }
                const T = p.get(l.texture),
                  x = T ? T.id : void 0;
                let b = n[l.material] ? n[l.material][l.texture] : null;
                if (!b) {
                  const e =
                    h[l.material.substring(l.material.lastIndexOf('/') + 1)]
                      .params;
                  1 === e.transparency && (e.transparency = 0);
                  const r = _ && _.alphaChannelUsage,
                    i =
                      e.transparency > 0 ||
                      'transparency' === r ||
                      'maskAndTransparency' === r,
                    a = _ ? Qr(_.alphaChannelUsage) : void 0,
                    s = {
                      ambient: (0, d.d)(e.diffuse),
                      diffuse: (0, d.d)(e.diffuse),
                      opacity: 1 - (e.transparency || 0),
                      transparent: i,
                      textureAlphaMode: a,
                      textureAlphaCutoff: 0.33,
                      textureId: x,
                      initTextureTransparent: !0,
                      doubleSided: !0,
                      cullFace: M.Vr.None,
                      colorMixMode: e.externalColorMixMode || 'tint',
                      textureAlphaPremultiplied:
                        !!_ && !!_.params.preMultiplyAlpha,
                    };
                  (0, o.pC)(t) &&
                    t.materialParamsMixin &&
                    Object.assign(s, t.materialParamsMixin),
                    (b = new Hr(s)),
                    n[l.material] || (n[l.material] = {}),
                    (n[l.material][l.texture] = b);
                }
                i.push(b);
                const E = new H(g, v);
                (m += v.position ? v.position.length : 0), r.push(E);
              }
              return {
                name: c,
                stageResources: { textures: a, materials: i, geometries: r },
                pivotOffset: s.model.pivotOffset,
                boundingBox: Jr(r),
                numberOfVertices: m,
                lodThreshold: null,
              };
            })(e, t);
          return {
            lods: [i],
            referenceBoundingBox: i.boundingBox,
            isEsriSymbolResource: !1,
            isWosr: !0,
            remove: e.remove,
          };
        }
        const n = await (t.cache
            ? t.cache.loadGLTF(r.url, t, t.usePBR)
            : (0, v.z)(new g.C(t.streamDataRequester), r.url, t, t.usePBR)),
          a = (0, o.U2)(n.model.meta, 'ESRI_proxyEllipsoid');
        n.meta.isEsriSymbolResource &&
          (0, o.pC)(a) &&
          -1 !== n.meta.uri.indexOf('/RealisticTrees/') &&
          (function (e, t) {
            for (let r = 0; r < e.model.lods.length; ++r) {
              const i = e.model.lods[r];
              e.customMeta.esriTreeRendering = !0;
              for (const n of i.parts) {
                const i = n.attributes.normal;
                if ((0, o.Wi)(i)) return;
                const a = n.attributes.position,
                  u = a.count,
                  f = (0, d.c)(),
                  m = (0, d.c)(),
                  g = (0, d.c)(),
                  v = (0, p.gS)(h.mc, u),
                  _ = (0, p.gS)(h.ct, u),
                  T = (0, s.a)((0, l.c)(), n.transform);
                for (let o = 0; o < u; o++) {
                  a.getVec(o, m),
                    i.getVec(o, f),
                    (0, c.m)(m, m, n.transform),
                    (0, c.f)(g, m, t.center),
                    (0, c.E)(g, g, t.radius);
                  const s = g[2],
                    l = (0, c.l)(g),
                    d = Math.min(0.45 + 0.55 * l * l, 1);
                  (0, c.E)(g, g, t.radius),
                    (0, c.m)(g, g, T),
                    (0, c.n)(g, g),
                    r + 1 !== e.model.lods.length &&
                      e.model.lods.length > 1 &&
                      (0, c.e)(
                        g,
                        g,
                        f,
                        s > -1 ? 0.2 : Math.min(-4 * s - 3.8, 1),
                      ),
                    _.setVec(o, g),
                    v.set(o, 0, 255 * d),
                    v.set(o, 1, 255 * d),
                    v.set(o, 2, 255 * d),
                    v.set(o, 3, 255);
                }
                (n.attributes.normal = _), (n.attributes.color = v);
              }
            }
          })(n, a);
        const u = n.meta.isEsriSymbolResource
            ? {
                usePBR: t.usePBR,
                isSchematic: !1,
                treeRendering: n.customMeta.esriTreeRendering,
                mrrFactors: [0, 1, 0.2],
              }
            : { usePBR: t.usePBR, isSchematic: !1, mrrFactors: [0, 1, 0.5] },
          f = {
            ...t.materialParamsMixin,
            treeRendering: n.customMeta.esriTreeRendering,
          };
        if (null != r.specifiedLodIndex) {
          const e = li(n, u, f, r.specifiedLodIndex);
          let t = e[0].boundingBox;
          return (
            0 !== r.specifiedLodIndex && (t = li(n, u, f, 0)[0].boundingBox),
            {
              lods: e,
              referenceBoundingBox: t,
              isEsriSymbolResource: n.meta.isEsriSymbolResource,
              isWosr: !1,
              remove: n.remove,
            }
          );
        }
        const m = li(n, u, f);
        return {
          lods: m,
          referenceBoundingBox: m[0].boundingBox,
          isEsriSymbolResource: n.meta.isEsriSymbolResource,
          isWosr: !1,
          remove: n.remove,
        };
      }
      function si(e) {
        const t = e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);
        return t
          ? {
              fileType: 'gltf',
              url: t[1],
              specifiedLodIndex: null != t[4] ? Number(t[4]) : null,
            }
          : e.match(/(.*\.(json|json\.gz))$/)
          ? { fileType: 'wosr', url: e, specifiedLodIndex: null }
          : { fileType: 'unknown', url: e, specifiedLodIndex: null };
      }
      function li(e, t, r, i) {
        const s = e.model,
          l = (0, a.c)(),
          c = new Array(),
          d = new Map(),
          g = new Map();
        return (
          s.lods.forEach((e, a) => {
            if (void 0 !== i && a !== i) return;
            const v = {
              name: e.name,
              stageResources: {
                textures: new Array(),
                materials: new Array(),
                geometries: new Array(),
              },
              lodThreshold: (0, o.pC)(e.lodThreshold) ? e.lodThreshold : null,
              pivotOffset: [0, 0, 0],
              numberOfVertices: 0,
              boundingBox: (0, u.cS)(),
            };
            c.push(v),
              e.parts.forEach((e) => {
                const i =
                    e.material +
                    (e.attributes.normal ? '_normal' : '') +
                    (e.attributes.color ? '_color' : '') +
                    (e.attributes.texCoord0 ? '_texCoord0' : '') +
                    (e.attributes.tangent ? '_tangent' : ''),
                  a = s.materials.get(e.material),
                  c = (0, o.pC)(e.attributes.texCoord0),
                  T = (0, o.pC)(e.attributes.normal),
                  x = (function (e) {
                    switch (e) {
                      case 'BLEND':
                        return M.JJ.Blend;
                      case 'MASK':
                        return M.JJ.Mask;
                      case 'OPAQUE':
                      case null:
                      case void 0:
                        return M.JJ.Opaque;
                    }
                  })(a.alphaMode);
                if (!d.has(i)) {
                  if (c) {
                    if ((0, o.pC)(a.textureColor) && !g.has(a.textureColor)) {
                      const e = s.textures.get(a.textureColor),
                        t = {
                          ...e.parameters,
                          preMultiplyAlpha: x !== M.JJ.Opaque,
                        };
                      g.set(a.textureColor, new Le(e.data, t));
                    }
                    if ((0, o.pC)(a.textureNormal) && !g.has(a.textureNormal)) {
                      const e = s.textures.get(a.textureNormal);
                      g.set(a.textureNormal, new Le(e.data, e.parameters));
                    }
                    if (
                      (0, o.pC)(a.textureOcclusion) &&
                      !g.has(a.textureOcclusion)
                    ) {
                      const e = s.textures.get(a.textureOcclusion);
                      g.set(a.textureOcclusion, new Le(e.data, e.parameters));
                    }
                    if (
                      (0, o.pC)(a.textureEmissive) &&
                      !g.has(a.textureEmissive)
                    ) {
                      const e = s.textures.get(a.textureEmissive);
                      g.set(a.textureEmissive, new Le(e.data, e.parameters));
                    }
                    if (
                      (0, o.pC)(a.textureMetallicRoughness) &&
                      !g.has(a.textureMetallicRoughness)
                    ) {
                      const e = s.textures.get(a.textureMetallicRoughness);
                      g.set(
                        a.textureMetallicRoughness,
                        new Le(e.data, e.parameters),
                      );
                    }
                  }
                  const n = a.color[0] ** (1 / ri.K),
                    l = a.color[1] ** (1 / ri.K),
                    u = a.color[2] ** (1 / ri.K),
                    h = a.emissiveFactor[0] ** (1 / ri.K),
                    f = a.emissiveFactor[1] ** (1 / ri.K),
                    m = a.emissiveFactor[2] ** (1 / ri.K),
                    p =
                      (0, o.pC)(a.textureColor) && c
                        ? g.get(a.textureColor)
                        : null;
                  d.set(
                    i,
                    new Hr({
                      ...t,
                      transparent: x === M.JJ.Blend,
                      customDepthTest: M.Gv.Lequal,
                      textureAlphaMode: x,
                      textureAlphaCutoff: a.alphaCutoff,
                      diffuse: [n, l, u],
                      ambient: [n, l, u],
                      opacity: a.opacity,
                      doubleSided: a.doubleSided,
                      doubleSidedType: 'winding-order',
                      cullFace: a.doubleSided ? M.Vr.None : M.Vr.Back,
                      vertexColors: !!e.attributes.color,
                      vertexTangents: !!e.attributes.tangent,
                      normals: T ? 'default' : 'screenDerivative',
                      castShadows: !0,
                      receiveSSAO: !0,
                      fillLightsEnabled: !0,
                      textureId: (0, o.pC)(p) ? p.id : void 0,
                      colorMixMode: a.colorMixMode,
                      normalTextureId:
                        (0, o.pC)(a.textureNormal) && c
                          ? g.get(a.textureNormal).id
                          : void 0,
                      textureAlphaPremultiplied:
                        (0, o.pC)(p) && !!p.params.preMultiplyAlpha,
                      occlusionTextureId:
                        (0, o.pC)(a.textureOcclusion) && c
                          ? g.get(a.textureOcclusion).id
                          : void 0,
                      emissiveTextureId:
                        (0, o.pC)(a.textureEmissive) && c
                          ? g.get(a.textureEmissive).id
                          : void 0,
                      metallicRoughnessTextureId:
                        (0, o.pC)(a.textureMetallicRoughness) && c
                          ? g.get(a.textureMetallicRoughness).id
                          : void 0,
                      emissiveFactor: [h, f, m],
                      mrrFactors: [
                        a.metallicFactor,
                        a.roughnessFactor,
                        t.mrrFactors[2],
                      ],
                      isSchematic: !1,
                      ...r,
                    }),
                  );
                }
                const b = (function (e, t) {
                    switch (t) {
                      case j.MX.TRIANGLES:
                        return (0, _.nh)(e);
                      case j.MX.TRIANGLE_STRIP:
                        return (0, _.DA)(e);
                      case j.MX.TRIANGLE_FAN:
                        return (0, _.jX)(e);
                    }
                  })(e.indices || e.attributes.position.count, e.primitiveType),
                  E = e.attributes.position.count,
                  A = (0, p.gS)(h.ct, E);
                (0, f.t)(A, e.attributes.position, e.transform);
                const S = [
                    [
                      F.T.POSITION,
                      {
                        data: A.typedBuffer,
                        size: A.elementCount,
                        exclusive: !0,
                      },
                    ],
                  ],
                  R = [[F.T.POSITION, b]];
                if ((0, o.pC)(e.attributes.normal)) {
                  const t = (0, p.gS)(h.ct, E);
                  (0, n.a)(l, e.transform),
                    (0, f.a)(t, e.attributes.normal, l),
                    S.push([
                      F.T.NORMAL,
                      {
                        data: t.typedBuffer,
                        size: t.elementCount,
                        exclusive: !0,
                      },
                    ]),
                    R.push([F.T.NORMAL, b]);
                }
                if ((0, o.pC)(e.attributes.tangent)) {
                  const t = (0, p.gS)(h.ek, E);
                  (0, n.a)(l, e.transform),
                    (0, m.t)(t, e.attributes.tangent, l),
                    S.push([
                      F.T.TANGENT,
                      {
                        data: t.typedBuffer,
                        size: t.elementCount,
                        exclusive: !0,
                      },
                    ]),
                    R.push([F.T.TANGENT, b]);
                }
                if ((0, o.pC)(e.attributes.texCoord0)) {
                  const t = (0, p.gS)(h.Eu, E);
                  (0, ii.n)(t, e.attributes.texCoord0),
                    S.push([
                      F.T.UV0,
                      {
                        data: t.typedBuffer,
                        size: t.elementCount,
                        exclusive: !0,
                      },
                    ]),
                    R.push([F.T.UV0, b]);
                }
                if ((0, o.pC)(e.attributes.color)) {
                  const t = (0, p.gS)(h.mc, E);
                  if (4 === e.attributes.color.elementCount)
                    e.attributes.color instanceof h.ek
                      ? (0, m.s)(t, e.attributes.color, 255)
                      : e.attributes.color instanceof h.mc
                      ? (0, oi.c)(t, e.attributes.color)
                      : e.attributes.color instanceof h.v6 &&
                        (0, m.s)(t, e.attributes.color, 1 / 256);
                  else {
                    (0, oi.f)(t, 255, 255, 255, 255);
                    const r = new h.ne(t.buffer, 0, 4);
                    e.attributes.color instanceof h.ct
                      ? (0, f.s)(r, e.attributes.color, 255)
                      : e.attributes.color instanceof h.ne
                      ? (0, ni.c)(r, e.attributes.color)
                      : e.attributes.color instanceof h.mw &&
                        (0, f.s)(r, e.attributes.color, 1 / 256);
                  }
                  S.push([
                    F.T.COLOR,
                    {
                      data: t.typedBuffer,
                      size: t.elementCount,
                      exclusive: !0,
                    },
                  ]),
                    R.push([F.T.COLOR, b]);
                }
                const C = new H(S, R);
                v.stageResources.geometries.push(C),
                  v.stageResources.materials.push(d.get(i)),
                  c &&
                    ((0, o.pC)(a.textureColor) &&
                      v.stageResources.textures.push(g.get(a.textureColor)),
                    (0, o.pC)(a.textureNormal) &&
                      v.stageResources.textures.push(g.get(a.textureNormal)),
                    (0, o.pC)(a.textureOcclusion) &&
                      v.stageResources.textures.push(g.get(a.textureOcclusion)),
                    (0, o.pC)(a.textureEmissive) &&
                      v.stageResources.textures.push(g.get(a.textureEmissive)),
                    (0, o.pC)(a.textureMetallicRoughness) &&
                      v.stageResources.textures.push(
                        g.get(a.textureMetallicRoughness),
                      )),
                  (v.numberOfVertices += E);
                const O = C.boundingInfo;
                (0, o.pC)(O) &&
                  ((0, u.pp)(v.boundingBox, O.getBBMin()),
                  (0, u.pp)(v.boundingBox, O.getBBMax()));
              });
          }),
          c
        );
      }
    },
    6206: (e, t, r) => {
      var i, o;
      r.d(t, { a9: () => i }),
        r(22021),
        ((o = i || (i = {}))[(o.Multiply = 1)] = 'Multiply'),
        (o[(o.Ignore = 2)] = 'Ignore'),
        (o[(o.Replace = 3)] = 'Replace'),
        (o[(o.Tint = 4)] = 'Tint');
    },
    65576: (e, t, r) => {
      r.d(t, { U$: () => s });
      var i = r(56481),
        o = r(79583);
      class n {
        constructor(e, t) {
          (this.layout = e),
            (this.buffer =
              'number' == typeof t ? new ArrayBuffer(t * e.stride) : t);
          for (const t of e.fieldNames) {
            const r = e.fields.get(t);
            this[t] = new r.constructor(this.buffer, r.offset, this.stride);
          }
        }
        get stride() {
          return this.layout.stride;
        }
        get count() {
          return this.buffer.byteLength / this.stride;
        }
        get byteLength() {
          return this.buffer.byteLength;
        }
        getField(e, t) {
          const r = this[e];
          return r &&
            r.elementCount === t.ElementCount &&
            r.elementType === t.ElementType
            ? r
            : null;
        }
        slice(e, t) {
          return new n(
            this.layout,
            this.buffer.slice(e * this.stride, t * this.stride),
          );
        }
        copyFrom(e, t, r, i) {
          const o = this.stride;
          if (o % 4 == 0) {
            const n = new Uint32Array(e.buffer, t * o, (i * o) / 4);
            new Uint32Array(this.buffer, r * o, (i * o) / 4).set(n);
          } else {
            const n = new Uint8Array(e.buffer, t * o, i * o);
            new Uint8Array(this.buffer, r * o, i * o).set(n);
          }
        }
      }
      class a {
        constructor() {
          (this.stride = 0), (this.fields = new Map()), (this.fieldNames = []);
        }
        vec2f(e, t) {
          return this._appendField(e, i.Eu, t), this;
        }
        vec2f64(e, t) {
          return this._appendField(e, i.q6, t), this;
        }
        vec3f(e, t) {
          return this._appendField(e, i.ct, t), this;
        }
        vec3f64(e, t) {
          return this._appendField(e, i.fP, t), this;
        }
        vec4f(e, t) {
          return this._appendField(e, i.ek, t), this;
        }
        vec4f64(e, t) {
          return this._appendField(e, i.Cd, t), this;
        }
        mat3f(e, t) {
          return this._appendField(e, i.gK, t), this;
        }
        mat3f64(e, t) {
          return this._appendField(e, i.ey, t), this;
        }
        mat4f(e, t) {
          return this._appendField(e, i.bj, t), this;
        }
        mat4f64(e, t) {
          return this._appendField(e, i.O1, t), this;
        }
        vec4u8(e, t) {
          return this._appendField(e, i.mc, t), this;
        }
        f32(e, t) {
          return this._appendField(e, i.ly, t), this;
        }
        f64(e, t) {
          return this._appendField(e, i.oS, t), this;
        }
        u8(e, t) {
          return this._appendField(e, i.D_, t), this;
        }
        u16(e, t) {
          return this._appendField(e, i.av, t), this;
        }
        i8(e, t) {
          return this._appendField(e, i.Hz, t), this;
        }
        vec2i8(e, t) {
          return this._appendField(e, i.Vs, t), this;
        }
        vec2i16(e, t) {
          return this._appendField(e, i.or, t), this;
        }
        vec2u8(e, t) {
          return this._appendField(e, i.xA, t), this;
        }
        vec4u16(e, t) {
          return this._appendField(e, i.v6, t), this;
        }
        u32(e, t) {
          return this._appendField(e, i.Nu, t), this;
        }
        _appendField(e, t, r) {
          const i = t.ElementCount * (0, o.n1)(t.ElementType),
            n = this.stride;
          this.fields.set(e, {
            size: i,
            constructor: t,
            offset: n,
            optional: r,
          }),
            (this.stride += i),
            this.fieldNames.push(e);
        }
        alignTo(e) {
          return (
            (this.stride = Math.floor((this.stride + e - 1) / e) * e), this
          );
        }
        hasField(e) {
          return this.fieldNames.indexOf(e) >= 0;
        }
        createBuffer(e) {
          return new n(this, e);
        }
        createView(e) {
          return new n(this, e);
        }
        clone() {
          const e = new a();
          return (
            (e.stride = this.stride),
            (e.fields = new Map()),
            this.fields.forEach((t, r) => e.fields.set(r, t)),
            (e.fieldNames = this.fieldNames.slice()),
            (e.BufferType = this.BufferType),
            e
          );
        }
      }
      function s() {
        return new a();
      }
    },
    1391: (e, t, r) => {
      r.d(t, { q: () => n });
      var i = r(18361),
        o = r(74709);
      function n(e, t) {
        t.output === i.H.Color && t.receiveShadows
          ? (e.varyings.add('linearDepth', 'float'),
            e.vertex.code.add(
              o.H`void forwardLinearDepth() { linearDepth = gl_Position.w; }`,
            ))
          : t.output === i.H.Depth || t.output === i.H.Shadow
          ? (e.varyings.add('linearDepth', 'float'),
            e.vertex.uniforms.add('nearFar', 'vec2'),
            e.vertex.code.add(o.H`void forwardLinearDepth() {
linearDepth = (-position_view().z - nearFar[0]) / (nearFar[1] - nearFar[0]);
}`))
          : e.vertex.code.add(o.H`void forwardLinearDepth() {}`);
      }
    },
    62707: (e, t, r) => {
      r.d(t, { w: () => o });
      var i = r(74709);
      function o(e) {
        e.vertex.code
          .add(i.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`);
      }
    },
    18361: (e, t, r) => {
      var i;
      r.d(t, { H: () => i }),
        (function (e) {
          (e[(e.Color = 0)] = 'Color'),
            (e[(e.Depth = 1)] = 'Depth'),
            (e[(e.Normal = 2)] = 'Normal'),
            (e[(e.Shadow = 3)] = 'Shadow'),
            (e[(e.Highlight = 4)] = 'Highlight'),
            (e[(e.Draped = 5)] = 'Draped'),
            (e[(e.Occlusion = 6)] = 'Occlusion'),
            (e[(e.Alpha = 7)] = 'Alpha'),
            (e[(e.COUNT = 8)] = 'COUNT');
        })(i || (i = {}));
    },
    51546: (e, t, r) => {
      r.d(t, { p2: () => c, Vv: () => d });
      var i = r(70586),
        o = r(52138),
        n = r(13598),
        a = r(17896),
        s = r(65617),
        l = r(74709);
      function c(e, t) {
        if (t.slicePlaneEnabled) {
          e.extensions.add('GL_OES_standard_derivatives'),
            t.sliceEnabledForVertexPrograms &&
              (e.vertex.uniforms.add('slicePlaneOrigin', 'vec3'),
              e.vertex.uniforms.add('slicePlaneBasis1', 'vec3'),
              e.vertex.uniforms.add('slicePlaneBasis2', 'vec3')),
            e.fragment.uniforms.add('slicePlaneOrigin', 'vec3'),
            e.fragment.uniforms.add('slicePlaneBasis1', 'vec3'),
            e.fragment.uniforms.add('slicePlaneBasis2', 'vec3');
          const r = l.H`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,
            i = l.H`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,
            o = t.sliceHighlightDisabled
              ? l.H`#define highlightSlice(_color_, _pos_) (_color_)`
              : l.H`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `;
          t.sliceEnabledForVertexPrograms && e.vertex.code.add(r),
            e.fragment.code.add(r),
            e.fragment.code.add(o);
        } else {
          const r = l.H`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;
          t.sliceEnabledForVertexPrograms && e.vertex.code.add(r),
            e.fragment.code.add(r);
        }
      }
      function d(e, t, r, n) {
        if (t.slicePlaneEnabled)
          if ((0, i.pC)(r)) {
            if (
              ((0, a.g)(u, r.origin),
              (0, a.g)(h, r.basis1),
              (0, a.g)(f, r.basis2),
              (0, i.pC)(n) &&
                (0, i.pC)(n.origin) &&
                (0, a.f)(u, r.origin, n.origin),
              (0, i.pC)(n) && (0, i.pC)(n.view))
            ) {
              const e = (0, i.pC)(n.origin)
                ? (0, o.j)(m, n.view, n.origin)
                : n.view;
              (0, a.b)(h, h, u),
                (0, a.b)(f, f, u),
                (0, a.m)(u, u, e),
                (0, a.m)(h, h, e),
                (0, a.m)(f, f, e),
                (0, a.f)(h, h, u),
                (0, a.f)(f, f, u);
            }
            e.setUniform3fv('slicePlaneOrigin', u),
              e.setUniform3fv('slicePlaneBasis1', h),
              e.setUniform3fv('slicePlaneBasis2', f);
          } else
            e.setUniform3fv('slicePlaneBasis1', s.Z),
              e.setUniform3fv('slicePlaneBasis2', s.Z),
              e.setUniform3fv('slicePlaneOrigin', s.Z);
      }
      const u = (0, s.c)(),
        h = (0, s.c)(),
        f = (0, s.c)(),
        m = (0, n.c)();
    },
    77171: (e, t, r) => {
      r.d(t, { w: () => o });
      var i = r(74709);
      function o(e, t) {
        const r = { hasModelTransformation: !1, ...t };
        if (r.hasModelTransformation)
          return r.linearDepth
            ? void e.vertex.code
                .add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, mat4 model, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * (model * vec4(pos, 1.0));
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`)
            : void e.vertex.code
                .add(i.H`vec4 transformPosition(mat4 proj, mat4 view, mat4 model, vec3 pos) {
return proj * (view * (model * vec4(pos, 1.0)));
}`);
        r.linearDepth
          ? e.vertex.code
              .add(i.H`vec4 transformPositionWithDepth(mat4 proj, mat4 view, vec3 pos, vec2 nearFar, out float depth) {
vec4 eye = view * vec4(pos, 1.0);
depth = (-eye.z - nearFar[0]) / (nearFar[1] - nearFar[0]) ;
return proj * eye;
}`)
          : e.vertex.code
              .add(i.H`vec4 transformPosition(mat4 proj, mat4 view, vec3 pos) {
return proj * (view * vec4(pos, 1.0));
}`);
      }
    },
    47624: (e, t, r) => {
      r.d(t, { fQ: () => c, d3: () => d });
      var i = r(65617),
        o = r(18361),
        n = r(89243),
        a = r(74709),
        s = r(35065),
        l = r(9820);
      function c(e, t) {
        t.instanced &&
          t.instancedDoublePrecision &&
          (e.attributes.add(s.T.MODELORIGINHI, 'vec3'),
          e.attributes.add(s.T.MODELORIGINLO, 'vec3'),
          e.attributes.add(s.T.MODEL, 'mat3'),
          e.attributes.add(s.T.MODELNORMAL, 'mat3')),
          t.instancedDoublePrecision &&
            (e.vertex.include(n.$, t),
            e.vertex.uniforms.add('viewOriginHi', 'vec3'),
            e.vertex.uniforms.add('viewOriginLo', 'vec3'));
        const r = [
          a.H`
    vec3 calculateVPos() {
      ${
        t.instancedDoublePrecision
          ? 'return model * localPosition().xyz;'
          : 'return localPosition().xyz;'
      }
    }
    `,
          a.H`
    vec3 subtractOrigin(vec3 _pos) {
      ${
        t.instancedDoublePrecision
          ? a.H`
          vec3 originDelta = dpAdd(viewOriginHi, viewOriginLo, -modelOriginHi, -modelOriginLo);
          return _pos - originDelta;`
          : 'return vpos;'
      }
    }
    `,
          a.H`
    vec3 dpNormal(vec4 _normal) {
      ${
        t.instancedDoublePrecision
          ? 'return normalize(modelNormal * _normal.xyz);'
          : 'return normalize(_normal.xyz);'
      }
    }
    `,
          a.H`
    vec3 dpNormalView(vec4 _normal) {
      ${
        t.instancedDoublePrecision
          ? 'return normalize((viewNormal * vec4(modelNormal * _normal.xyz, 1.0)).xyz);'
          : 'return normalize((viewNormal * _normal).xyz);'
      }
    }
    `,
          t.vertexTangents
            ? a.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${
        t.instancedDoublePrecision
          ? 'return vec4(modelNormal * _tangent.xyz, _tangent.w);'
          : 'return _tangent;'
      }

    }
    `
            : a.H``,
        ];
        e.vertex.code.add(r[0]),
          e.vertex.code.add(r[1]),
          e.vertex.code.add(r[2]),
          t.output === o.H.Normal && e.vertex.code.add(r[3]),
          e.vertex.code.add(r[4]);
      }
      function d(e, t) {
        (0, l.po)(t, u, h, 3),
          e.setUniform3fv('viewOriginHi', u),
          e.setUniform3fv('viewOriginLo', h);
      }
      const u = (0, i.c)(),
        h = (0, i.c)();
    },
    64267: (e, t, r) => {
      r.d(t, { O: () => l, h: () => n });
      var i = r(74709);
      function o(e) {
        const t = i.H`vec3 decodeNormal(vec2 f) {
float z = 1.0 - abs(f.x) - abs(f.y);
return vec3(f + sign(f) * min(z, 0.0), z);
}`;
        e.fragment.code.add(t), e.vertex.code.add(t);
      }
      var n,
        a,
        s = r(35065);
      function l(e, t) {
        t.normalType === n.Attribute &&
          (e.attributes.add(s.T.NORMAL, 'vec3'),
          e.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`)),
          t.normalType === n.CompressedAttribute &&
            (e.include(o),
            e.attributes.add(s.T.NORMALCOMPRESSED, 'vec2'),
            e.vertex.code.add(i.H`vec3 normalModel() {
return decodeNormal(normalCompressed);
}`)),
          t.normalType === n.ScreenDerivative &&
            (e.extensions.add('GL_OES_standard_derivatives'),
            e.fragment.code
              .add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`));
      }
      ((a = n || (n = {}))[(a.Attribute = 0)] = 'Attribute'),
        (a[(a.CompressedAttribute = 1)] = 'CompressedAttribute'),
        (a[(a.Ground = 2)] = 'Ground'),
        (a[(a.ScreenDerivative = 3)] = 'ScreenDerivative'),
        (a[(a.COUNT = 4)] = 'COUNT');
    },
    37099: (e, t, r) => {
      r.d(t, { f: () => n });
      var i = r(74709),
        o = r(35065);
      function n(e) {
        e.attributes.add(o.T.POSITION, 'vec3'),
          e.vertex.code.add(i.H`vec3 positionModel() { return position; }`);
      }
    },
    76056: (e, t, r) => {
      r.d(t, { R: () => s });
      var i = r(6206),
        o = r(74709);
      function n(e) {
        e.vertex.code.add(o.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${o.H.int(i.a9.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${o.H.int(i.a9.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${o.H.int(i.a9.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `);
      }
      var a = r(35065);
      function s(e, t) {
        t.symbolColor
          ? (e.include(n),
            e.attributes.add(a.T.SYMBOLCOLOR, 'vec4'),
            e.varyings.add('colorMixMode', 'mediump float'))
          : e.fragment.uniforms.add('colorMixMode', 'int'),
          t.symbolColor
            ? e.vertex.code.add(o.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)
            : e.vertex.code.add(o.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`);
      }
    },
    135: (e, t, r) => {
      r.d(t, { D: () => s, N: () => i });
      var i,
        o,
        n = r(74709),
        a = r(35065);
      function s(e, t) {
        t.attributeTextureCoordinates === i.Default &&
          (e.attributes.add(a.T.UV0, 'vec2'),
          e.varyings.add('vuv0', 'vec2'),
          e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
}`)),
          t.attributeTextureCoordinates === i.Atlas &&
            (e.attributes.add(a.T.UV0, 'vec2'),
            e.varyings.add('vuv0', 'vec2'),
            e.attributes.add(a.T.UVREGION, 'vec4'),
            e.varyings.add('vuvRegion', 'vec4'),
            e.vertex.code.add(n.H`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`)),
          t.attributeTextureCoordinates === i.None &&
            e.vertex.code.add(n.H`void forwardTextureCoordinates() {}`);
      }
      ((o = i || (i = {}))[(o.None = 0)] = 'None'),
        (o[(o.Default = 1)] = 'Default'),
        (o[(o.Atlas = 2)] = 'Atlas'),
        (o[(o.COUNT = 3)] = 'COUNT');
    },
    11317: (e, t, r) => {
      r.d(t, { c: () => n });
      var i = r(74709),
        o = r(35065);
      function n(e, t) {
        t.attributeColor
          ? (e.attributes.add(o.T.COLOR, 'vec4'),
            e.varyings.add('vColor', 'vec4'),
            e.vertex.code.add(
              i.H`void forwardVertexColor() { vColor = color; }`,
            ),
            e.vertex.code.add(
              i.H`void forwardNormalizedVertexColor() { vColor = color * 0.003921568627451; }`,
            ))
          : e.vertex.code.add(i.H`void forwardVertexColor() {}
void forwardNormalizedVertexColor() {}`);
      }
    },
    99917: (e, t, r) => {
      r.d(t, { B: () => c });
      var i = r(64822),
        o = r(64267),
        n = (r(46521), r(13598), r(65617), r(37099)),
        a = r(89243),
        s = r(74709);
      function l(e, t) {
        e.include(n.f),
          e.vertex.include(a.$, t),
          e.varyings.add('vPositionWorldCameraRelative', 'vec3'),
          e.varyings.add('vPosition_view', 'vec3'),
          e.vertex.uniforms.add('transformWorldFromModelRS', 'mat3'),
          e.vertex.uniforms.add('transformWorldFromModelTH', 'vec3'),
          e.vertex.uniforms.add('transformWorldFromModelTL', 'vec3'),
          e.vertex.uniforms.add('transformWorldFromViewTH', 'vec3'),
          e.vertex.uniforms.add('transformWorldFromViewTL', 'vec3'),
          e.vertex.uniforms.add('transformViewFromCameraRelativeRS', 'mat3'),
          e.vertex.uniforms.add('transformProjFromView', 'mat4'),
          e.vertex.code.add(s.H`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}
vec3 position_view() {
return transformViewFromCameraRelativeRS * positionWorldCameraRelative();
}
void forwardPosition() {
vPositionWorldCameraRelative = positionWorldCameraRelative();
vPosition_view = position_view();
gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
}
vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),
          e.fragment.uniforms.add('transformWorldFromViewTL', 'vec3'),
          e.fragment.code.add(s.H`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`);
      }
      function c(e, t) {
        t.normalType === o.h.Attribute ||
        t.normalType === o.h.CompressedAttribute
          ? (e.include(o.O, t),
            e.varyings.add('vNormalWorld', 'vec3'),
            e.varyings.add('vNormalView', 'vec3'),
            e.vertex.uniforms.add('transformNormalGlobalFromModel', 'mat3'),
            e.vertex.uniforms.add('transformNormalViewFromGlobal', 'mat3'),
            e.vertex.code.add(s.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`))
          : t.normalType === o.h.Ground
          ? (e.include(l, t),
            e.varyings.add('vNormalWorld', 'vec3'),
            e.vertex.code.add(s.H`
    void forwardNormal() {
      vNormalWorld = ${
        t.viewingMode === i.JY.Global
          ? s.H`normalize(vPositionWorldCameraRelative);`
          : s.H`vec3(0.0, 0.0, 1.0);`
      }
    }
    `))
          : e.vertex.code.add(s.H`void forwardNormal() {}`);
      }
    },
    91982: (e, t, r) => {
      r.d(t, { i: () => a });
      var i = r(135),
        o = r(74709);
      function n(e) {
        e.extensions.add('GL_EXT_shader_texture_lod'),
          e.extensions.add('GL_OES_standard_derivatives'),
          e.fragment.code.add(o.H`#ifndef GL_EXT_shader_texture_lod
float calcMipMapLevel(const vec2 ddx, const vec2 ddy) {
float deltaMaxSqr = max(dot(ddx, ddx), dot(ddy, ddy));
return max(0.0, 0.5 * log2(deltaMaxSqr));
}
#endif
vec4 textureAtlasLookup(sampler2D texture, vec2 textureSize, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
#ifdef GL_EXT_shader_texture_lod
return texture2DGradEXT(texture, uvAtlas, dUVdx, dUVdy);
#else
vec2 dUVdxAuto = dFdx(uvAtlas);
vec2 dUVdyAuto = dFdy(uvAtlas);
float mipMapLevel = calcMipMapLevel(dUVdx * textureSize, dUVdy * textureSize);
float autoMipMapLevel = calcMipMapLevel(dUVdxAuto * textureSize, dUVdyAuto * textureSize);
return texture2D(texture, uvAtlas, mipMapLevel - autoMipMapLevel);
#endif
}`);
      }
      function a(e, t) {
        e.include(i.D, t),
          e.fragment.code.add(o.H`
  struct TextureLookupParameter {
    vec2 uv;
    ${t.supportsTextureAtlas ? 'vec2 size;' : ''}
  } vtc;
  `),
          t.attributeTextureCoordinates === i.N.Default &&
            e.fragment.code
              .add(o.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return texture2D(tex, params.uv);
}`),
          t.attributeTextureCoordinates === i.N.Atlas &&
            (e.include(n),
            e.fragment.code
              .add(o.H`vec4 textureLookup(sampler2D tex, TextureLookupParameter params) {
return textureAtlasLookup(tex, params.size, params.uv, vuvRegion);
}`));
      }
    },
    92555: (e, t, r) => {
      r.d(t, { LC: () => a, Mo: () => s });
      var i = r(64822),
        o = r(74709);
      function n(e) {
        e.vertex.code
          .add(o.H`float screenSizePerspectiveMinSize(float size, vec4 factor) {
float nonZeroSize = 1.0 - step(size, 0.0);
return (
factor.z * (
1.0 +
nonZeroSize *
2.0 * factor.w / (
size + (1.0 - nonZeroSize)
)
)
);
}`),
          e.vertex.code
            .add(o.H`float screenSizePerspectiveViewAngleDependentFactor(float absCosAngle) {
return absCosAngle * absCosAngle * absCosAngle;
}`),
          e.vertex.code
            .add(o.H`vec4 screenSizePerspectiveScaleFactor(float absCosAngle, float distanceToCamera, vec4 params) {
return vec4(
min(params.x / (distanceToCamera - params.y), 1.0),
screenSizePerspectiveViewAngleDependentFactor(absCosAngle),
params.z,
params.w
);
}`),
          e.vertex.code
            .add(o.H`float applyScreenSizePerspectiveScaleFactorFloat(float size, vec4 factor) {
return max(mix(size * factor.x, size, factor.y), screenSizePerspectiveMinSize(size, factor));
}`),
          e.vertex.code
            .add(o.H`float screenSizePerspectiveScaleFloat(float size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorFloat(
size,
screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params)
);
}`),
          e.vertex.code
            .add(o.H`vec2 applyScreenSizePerspectiveScaleFactorVec2(vec2 size, vec4 factor) {
return mix(size * clamp(factor.x, screenSizePerspectiveMinSize(size.y, factor) / max(1e-5, size.y), 1.0), size, factor.y);
}`),
          e.vertex.code
            .add(o.H`vec2 screenSizePerspectiveScaleVec2(vec2 size, float absCosAngle, float distanceToCamera, vec4 params) {
return applyScreenSizePerspectiveScaleFactorVec2(size, screenSizePerspectiveScaleFactor(absCosAngle, distanceToCamera, params));
}`);
      }
      function a(e, t) {
        const r = e.vertex.code;
        t.verticalOffsetEnabled
          ? (e.vertex.uniforms.add('verticalOffset', 'vec4'),
            t.screenSizePerspectiveEnabled &&
              (e.include(n),
              e.vertex.uniforms.add('screenSizePerspectiveAlignment', 'vec4')),
            r.add(o.H`
    vec3 calculateVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      float viewDistance = length((view * vec4(worldPos, 1.0)).xyz);
      ${
        t.viewingMode === i.JY.Global
          ? o.H`vec3 worldNormal = normalize(worldPos + localOrigin);`
          : o.H`vec3 worldNormal = vec3(0.0, 0.0, 1.0);`
      }
      ${
        t.screenSizePerspectiveEnabled
          ? o.H`
          float cosAngle = dot(worldNormal, normalize(worldPos - cameraPosition));
          float verticalOffsetScreenHeight = screenSizePerspectiveScaleFloat(verticalOffset.x, abs(cosAngle), viewDistance, screenSizePerspectiveAlignment);`
          : o.H`
          float verticalOffsetScreenHeight = verticalOffset.x;`
      }
      // Screen sized offset in world space, used for example for line callouts
      float worldOffset = clamp(verticalOffsetScreenHeight * verticalOffset.y * viewDistance, verticalOffset.z, verticalOffset.w);
      return worldNormal * worldOffset;
    }

    vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) {
      return worldPos + calculateVerticalOffset(worldPos, localOrigin);
    }
    `))
          : r.add(
              o.H`vec3 addVerticalOffset(vec3 worldPos, vec3 localOrigin) { return worldPos; }`,
            );
      }
      function s(e, t, r) {
        if (!t.verticalOffset) return;
        const i = (function (e, t, r, i = l) {
            return (
              (i.screenLength = e.screenLength),
              (i.perDistance = Math.tan(0.5 * t) / (0.5 * r)),
              (i.minWorldLength = e.minWorldLength),
              (i.maxWorldLength = e.maxWorldLength),
              i
            );
          })(t.verticalOffset, r.camera.fovY, r.camera.fullViewport[3]),
          o = r.camera.pixelRatio || 1;
        e.setUniform4f(
          'verticalOffset',
          i.screenLength * o,
          i.perDistance,
          i.minWorldLength,
          i.maxWorldLength,
        );
      }
      r(37782);
      const l = {
        screenLength: 0,
        perDistance: 0,
        minWorldLength: 0,
        maxWorldLength: 0,
      };
    },
    74486: (e, t, r) => {
      r.d(t, { s: () => p });
      var i = r(18361),
        o = r(51546),
        n = r(77171),
        a = r(64267),
        s = r(135),
        l = r(99917),
        c = r(20285),
        d = r(74709);
      function u(e, t) {
        e.fragment.include(c.n),
          t.output === i.H.Shadow
            ? (e.extensions.add('GL_OES_standard_derivatives'),
              e.fragment.code
                .add(d.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 2.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
float result = depth + SLOPE_SCALE * m + BIAS;
return clamp(result, .0, .999999);
}
void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_calculateFragDepth(_linearDepth));
}`))
            : t.output === i.H.Depth &&
              e.fragment.code.add(d.H`void outputDepth(float _linearDepth) {
gl_FragColor = float2rgba(_linearDepth);
}`);
      }
      var h = r(68853),
        f = r(98401),
        m = r(94124);
      function p(e, t) {
        const r = e.vertex.code,
          c = e.fragment.code,
          p = t.hasModelTransformation;
        (t.output !== i.H.Depth && t.output !== i.H.Shadow) ||
          (e.include(n.w, { linearDepth: !0, hasModelTransformation: p }),
          e.include(s.D, t),
          e.include(f.kl, t),
          e.include(u, t),
          e.include(o.p2, t),
          e.vertex.uniforms.add('nearFar', 'vec2'),
          e.varyings.add('depth', 'float'),
          t.hasColorTexture && e.fragment.uniforms.add('tex', 'sampler2D'),
          r.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPositionWithDepth(proj, view, ${
          p ? 'model,' : ''
        } vpos, nearFar, depth);
        forwardTextureCoordinates();
      }
    `),
          e.include(m.sj, t),
          c.add(d.H`
      void main(void) {
        discardBySlice(vpos);
        ${
          t.hasColorTexture
            ? d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`
            : ''
        }
        outputDepth(depth);
      }
    `)),
          t.output === i.H.Normal &&
            (e.include(n.w, { linearDepth: !1, hasModelTransformation: p }),
            e.include(a.O, t),
            e.include(l.B, t),
            e.include(s.D, t),
            e.include(f.kl, t),
            t.hasColorTexture && e.fragment.uniforms.add('tex', 'sampler2D'),
            e.vertex.uniforms.add('viewNormal', 'mat4'),
            e.varyings.add('vPositionView', 'vec3'),
            r.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        ${
          t.normalType === a.h.Attribute
            ? d.H`
        vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`
            : ''
        }
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p ? 'model,' : ''} vpos);
        forwardTextureCoordinates();
      }
    `),
            e.include(o.p2, t),
            e.include(m.sj, t),
            c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${
          t.hasColorTexture
            ? d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`
            : ''
        }

        ${
          t.normalType === a.h.ScreenDerivative
            ? d.H`
            vec3 normal = screenDerivativeNormal(vPositionView);`
            : d.H`
            vec3 normal = normalize(vNormalWorld);
            if (gl_FrontFacing == false) normal = -normal;`
        }
        gl_FragColor = vec4(vec3(0.5) + 0.5 * normal, 1.0);
      }
    `)),
          t.output === i.H.Highlight &&
            (e.include(n.w, { linearDepth: !1, hasModelTransformation: p }),
            e.include(s.D, t),
            e.include(f.kl, t),
            t.hasColorTexture && e.fragment.uniforms.add('tex', 'sampler2D'),
            r.add(d.H`
      void main(void) {
        vpos = calculateVPos();
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, ${p ? 'model,' : ''} vpos);
        forwardTextureCoordinates();
      }
    `),
            e.include(o.p2, t),
            e.include(m.sj, t),
            e.include(h.bA),
            c.add(d.H`
      void main() {
        discardBySlice(vpos);
        ${
          t.hasColorTexture
            ? d.H`
        vec4 texColor = texture2D(tex, vuv0);
        discardOrAdjustAlpha(texColor);`
            : ''
        }
        outputHighlight();
      }
    `));
      }
    },
    68853: (e, t, r) => {
      r.d(t, { bA: () => s, wW: () => l });
      var i = r(88669),
        o = r(74709);
      const n = (0, i.f)(1, 1, 0, 1),
        a = (0, i.f)(1, 0, 1, 1);
      function s(e) {
        e.fragment.uniforms.add('depthTex', 'sampler2D'),
          e.fragment.uniforms.add('highlightViewportPixelSz', 'vec4'),
          e.fragment.constants
            .add('occludedHighlightFlag', 'vec4', n)
            .add('unoccludedHighlightFlag', 'vec4', a),
          e.fragment.code.add(o.H`void outputHighlight() {
vec4 fragCoord = gl_FragCoord;
float sceneDepth = texture2D(depthTex, (fragCoord.xy - highlightViewportPixelSz.xy) * highlightViewportPixelSz.zw).r;
if (fragCoord.z > sceneDepth + 5e-7) {
gl_FragColor = occludedHighlightFlag;
}
else {
gl_FragColor = unoccludedHighlightFlag;
}
}`);
      }
      function l(e, t) {
        e.bindTexture(t.highlightDepthTexture, 'depthTex'),
          e.setUniform4f(
            'highlightViewportPixelSz',
            0,
            0,
            t.inverseViewport[0],
            t.inverseViewport[1],
          );
      }
    },
    5543: (e, t, r) => {
      r.d(t, { S: () => n });
      var i = r(20285),
        o = r(74709);
      function n(e) {
        e.include(i.n),
          e.code.add(o.H`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromTexture(sampler2D depthTex, vec2 uv, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(texture2D(depthTex, uv)), nearFar);
}`);
      }
    },
    15817: (e, t, r) => {
      r.d(t, { Q: () => l });
      var i = r(135),
        o = r(91982),
        n = r(19419),
        a = r(74709),
        s = r(35065);
      function l(e, t) {
        const r = e.fragment;
        t.vertexTangents
          ? (e.attributes.add(s.T.TANGENT, 'vec4'),
            e.varyings.add('vTangent', 'vec4'),
            t.doubleSidedMode === n.q.WindingOrder
              ? r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)
              : r.code.add(a.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`))
          : (e.extensions.add('GL_OES_standard_derivatives'),
            r.code
              .add(a.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`)),
          t.attributeTextureCoordinates !== i.N.None &&
            (e.include(o.i, t),
            r.uniforms.add('normalTexture', 'sampler2D'),
            r.uniforms.add('normalTextureSize', 'vec2'),
            r.code.add(a.H`
    vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
      vtc.uv = uv;
      ${t.supportsTextureAtlas ? 'vtc.size = normalTextureSize;' : ''}
      vec3 rawNormal = textureLookup(normalTexture, vtc).rgb * 2.0 - 1.0;
      return tangentSpace * rawNormal;
    }
  `));
      }
    },
    66242: (e, t, r) => {
      r.d(t, { K: () => o });
      var i = r(74709);
      function o(e, t) {
        const r = e.fragment;
        t.receiveAmbientOcclusion
          ? (r.uniforms.add('ssaoTex', 'sampler2D'),
            r.uniforms.add('viewportPixelSz', 'vec4'),
            r.code.add(i.H`float evaluateAmbientOcclusion() {
return 1.0 - texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
}
float evaluateAmbientOcclusionInverse() {
float ssao = texture2D(ssaoTex, (gl_FragCoord.xy - viewportPixelSz.xy) * viewportPixelSz.zw).a;
return viewportPixelSz.z < 0.0 ? 1.0 : ssao;
}`))
          : r.code.add(i.H`float evaluateAmbientOcclusion() { return 0.0; }
float evaluateAmbientOcclusionInverse() { return 1.0; }`);
      }
    },
    62554: (e, t, r) => {
      r.d(t, { X: () => h });
      var i = r(64822),
        o = r(85504),
        n = r(74709);
      function a(e, t) {
        const r = e.fragment,
          i =
            void 0 !== t.lightingSphericalHarmonicsOrder
              ? t.lightingSphericalHarmonicsOrder
              : 2;
        0 === i
          ? (r.uniforms.add('lightingAmbientSH0', 'vec3'),
            r.code
              .add(n.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`))
          : 1 === i
          ? (r.uniforms.add('lightingAmbientSH_R', 'vec4'),
            r.uniforms.add('lightingAmbientSH_G', 'vec4'),
            r.uniforms.add('lightingAmbientSH_B', 'vec4'),
            r.code
              .add(n.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`))
          : 2 === i &&
            (r.uniforms.add('lightingAmbientSH0', 'vec3'),
            r.uniforms.add('lightingAmbientSH_R1', 'vec4'),
            r.uniforms.add('lightingAmbientSH_G1', 'vec4'),
            r.uniforms.add('lightingAmbientSH_B1', 'vec4'),
            r.uniforms.add('lightingAmbientSH_R2', 'vec4'),
            r.uniforms.add('lightingAmbientSH_G2', 'vec4'),
            r.uniforms.add('lightingAmbientSH_B2', 'vec4'),
            r.code
              .add(n.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),
            (t.pbrMode !== o.f7.Normal && t.pbrMode !== o.f7.Schematic) ||
              r.code.add(n.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`));
      }
      var s = r(66242);
      function l(e) {
        const t = e.fragment;
        t.uniforms.add('lightingMainDirection', 'vec3'),
          t.uniforms.add('lightingMainIntensity', 'vec3'),
          t.uniforms.add('lightingFixedFactor', 'float'),
          t.uniforms.add('lightingSpecularStrength', 'float'),
          t.uniforms.add('lightingEnvironmentStrength', 'float'),
          t.code
            .add(n.H`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, lightingMainDirection), 0.0, 1.0);
dotVal = mix(dotVal, 1.0, lightingFixedFactor);
return lightingMainIntensity * ((1.0 - shadowing) * dotVal);
}`);
      }
      var c = r(26322),
        d = r(27754),
        u = r(72303);
      function h(e, t) {
        const r = e.fragment;
        e.include(l),
          e.include(s.K, t),
          t.pbrMode !== o.f7.Disabled && e.include(c.T, t),
          e.include(a, t),
          t.receiveShadows && e.include(u.hX, t),
          r.uniforms.add('lightingGlobalFactor', 'float'),
          r.uniforms.add('ambientBoostFactor', 'float'),
          r.uniforms.add('hasFillLights', 'bool'),
          e.include(d.e),
          r.code.add(n.H`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${
      t.pbrMode === o.f7.Disabled
        ? ''
        : 'const vec3 GROUND_REFLECTANCE = vec3(0.2);'
    }
  `),
          r.code.add(n.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${
        t.viewingMode === i.JY.Global
          ? n.H`normalize(vPosWorld)`
          : n.H`vec3(0.0, 0.0, 1.0)`
      }, lightingMainDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),
          r.code
            .add(n.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * lightingMainIntensity;
}`),
          t.pbrMode === o.f7.Disabled ||
          t.pbrMode === o.f7.WaterOnIntegratedMesh
            ? r.code
                .add(n.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`)
            : (t.pbrMode !== o.f7.Normal && t.pbrMode !== o.f7.Schematic) ||
              (r.code.add(n.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 mainLightDirection = lightingMainDirection;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),
              r.code
                .add(n.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),
              r.code
                .add(n.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0)? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * lightingMainIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),
              r.code
                .add(n.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * lightingMainIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * lightingMainIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
inputs.skyRadianceToSurface = ambientLightRadianceComponent + mainLightRadianceComponent + horizonLightRadianceComponent;
inputs.groundRadianceToSurface = GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),
              r.code.add(n.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${
          t.pbrMode === o.f7.Schematic
            ? n.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`
            : n.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`
        }
        return outColor;
      }
    `));
      }
    },
    42001: (e, t, r) => {
      r.d(t, { p: () => n, l: () => o });
      var i = r(74709);
      function o(e, t) {
        e.fragment.uniforms.add('terrainDepthTexture', 'sampler2D'),
          e.fragment.uniforms.add('nearFar', 'vec2'),
          e.fragment.uniforms.add('inverseViewport', 'vec2'),
          e.fragment.code.add(i.H`
    // Compare the linearized depths of fragment and terrain. Discard fragments on the wrong side of the terrain.
    void terrainDepthTest(vec4 fragCoord, float fragmentDepth){

      float terrainDepth = linearDepthFromTexture(terrainDepthTexture, fragCoord.xy * inverseViewport, nearFar);
      if(fragmentDepth ${t.cullAboveGround ? '>' : '<='} terrainDepth){
        discard;
      }
    }
  `);
      }
      function n(e, t) {
        t.multipassTerrainEnabled &&
          t.terrainLinearDepthTexture &&
          e.bindTexture(t.terrainLinearDepthTexture, 'terrainDepthTexture');
      }
    },
    19419: (e, t, r) => {
      r.d(t, { k: () => s, q: () => i });
      var i,
        o,
        n = r(74085),
        a = r(74709);
      function s(e, t) {
        const r = e.fragment;
        switch (
          (r.code.add(a.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),
          t.doubleSidedMode)
        ) {
          case i.None:
            r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);
            break;
          case i.View:
            r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);
            break;
          case i.WindingOrder:
            r.code.add(a.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);
            break;
          default:
            (0, n.Bg)(t.doubleSidedMode);
          case i.COUNT:
        }
      }
      ((o = i || (i = {}))[(o.None = 0)] = 'None'),
        (o[(o.View = 1)] = 'View'),
        (o[(o.WindingOrder = 2)] = 'WindingOrder'),
        (o[(o.COUNT = 3)] = 'COUNT');
    },
    26322: (e, t, r) => {
      r.d(t, { T: () => s });
      var i = r(74709);
      function o(e) {
        const t = e.fragment.code;
        t.add(i.H`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),
          t.add(i.H`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),
          t.add(i.H`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`);
      }
      var n = r(85504),
        a = r(27754);
      function s(e, t) {
        const r = e.fragment.code;
        e.include(a.e),
          t.pbrMode === n.f7.Water || t.pbrMode === n.f7.WaterOnIntegratedMesh
            ? (r.add(i.H`
    struct PBRShadingWater
    {
        float NdotL;   // cos angle between normal and light direction
        float NdotV;   // cos angle between normal and view direction
        float NdotH;   // cos angle between normal and half vector
        float VdotH;   // cos angle between view direction and half vector
        float LdotH;   // cos angle between light direction and half vector
        float VdotN;   // cos angle between view direction and normal vector
    };

    float dtrExponent = ${t.useCustomDTRExponentForWater ? '2.2' : '2.0'};
    `),
              r.add(i.H`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),
              r.add(i.H`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),
              r.add(i.H`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),
              r.add(i.H`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`))
            : (t.pbrMode !== n.f7.Normal && t.pbrMode !== n.f7.Schematic) ||
              (e.include(o),
              r.add(i.H`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),
              r.add(i.H`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),
              r.add(i.H`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`),
              r.add(i.H`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),
              r.add(i.H`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),
              r.add(i.H`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`));
      }
    },
    85504: (e, t, r) => {
      r.d(t, { f7: () => i, jV: () => l, nW: () => c });
      var i,
        o,
        n = r(72119),
        a = r(91982),
        s = r(74709);
      function l(e, t) {
        const r = e.fragment,
          o =
            t.hasMetalnessAndRoughnessTexture ||
            t.hasEmissionTexture ||
            t.hasOcclusionTexture;
        t.pbrMode === i.Normal && o && e.include(a.i, t),
          t.pbrMode !== i.Schematic
            ? (t.pbrMode === i.Disabled &&
                r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),
              t.pbrMode === i.Normal &&
                (r.uniforms.add('emissionFactor', 'vec3'),
                r.uniforms.add('mrrFactors', 'vec3'),
                r.code.add(s.H`vec3 mrr;
vec3 emission;
float occlusion;`),
                t.hasMetalnessAndRoughnessTexture &&
                  (r.uniforms.add('texMetallicRoughness', 'sampler2D'),
                  t.supportsTextureAtlas &&
                    r.uniforms.add('texMetallicRoughnessSize', 'vec2'),
                  r.code
                    .add(s.H`void applyMetallnessAndRoughness(TextureLookupParameter params) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, params).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),
                t.hasEmissionTexture &&
                  (r.uniforms.add('texEmission', 'sampler2D'),
                  t.supportsTextureAtlas &&
                    r.uniforms.add('texEmissionSize', 'vec2'),
                  r.code
                    .add(s.H`void applyEmission(TextureLookupParameter params) {
emission *= textureLookup(texEmission, params).rgb;
}`)),
                t.hasOcclusionTexture
                  ? (r.uniforms.add('texOcclusion', 'sampler2D'),
                    t.supportsTextureAtlas &&
                      r.uniforms.add('texOcclusionSize', 'vec2'),
                    r.code
                      .add(s.H`void applyOcclusion(TextureLookupParameter params) {
occlusion *= textureLookup(texOcclusion, params).r;
}
float getBakedOcclusion() {
return occlusion;
}`))
                  : r.code.add(s.H`float getBakedOcclusion() { return 1.0; }`),
                r.code.add(s.H`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;
      ${o ? 'vtc.uv = vuv0;' : ''}
      ${
        t.hasMetalnessAndRoughnessTexture
          ? t.supportsTextureAtlas
            ? 'vtc.size = texMetallicRoughnessSize; applyMetallnessAndRoughness(vtc);'
            : 'applyMetallnessAndRoughness(vtc);'
          : ''
      }
      ${
        t.hasEmissionTexture
          ? t.supportsTextureAtlas
            ? 'vtc.size = texEmissionSize; applyEmission(vtc);'
            : 'applyEmission(vtc);'
          : ''
      }
      ${
        t.hasOcclusionTexture
          ? t.supportsTextureAtlas
            ? 'vtc.size = texOcclusionSize; applyOcclusion(vtc);'
            : 'applyOcclusion(vtc);'
          : ''
      }
    }
  `)))
            : r.code.add(s.H`const vec3 mrr = vec3(0.0, 0.6, 0.2);
const vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`);
      }
      function c(e, t, r = !1) {
        r ||
          (e.setUniform3fv('mrrFactors', t.mrrFactors),
          e.setUniform3fv('emissionFactor', t.emissiveFactor));
      }
      (0, n.f)(0, 0.6, 0.2),
        ((o = i || (i = {}))[(o.Disabled = 0)] = 'Disabled'),
        (o[(o.Normal = 1)] = 'Normal'),
        (o[(o.Schematic = 2)] = 'Schematic'),
        (o[(o.Water = 3)] = 'Water'),
        (o[(o.WaterOnIntegratedMesh = 4)] = 'WaterOnIntegratedMesh'),
        (o[(o.COUNT = 5)] = 'COUNT');
    },
    27754: (e, t, r) => {
      r.d(t, { e: () => o });
      var i = r(74709);
      function o(e) {
        e.vertex.code.add(i.H`const float PI = 3.141592653589793;`),
          e.fragment.code.add(i.H`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`);
      }
    },
    72303: (e, t, r) => {
      r.d(t, { hX: () => n, vL: () => a });
      var i = r(20285),
        o = r(74709);
      function n(e) {
        e.fragment.include(i.n),
          e.fragment.uniforms.add('shadowMapTex', 'sampler2D'),
          e.fragment.uniforms.add('numCascades', 'int'),
          e.fragment.uniforms.add('cascadeDistances', 'vec4'),
          e.fragment.uniforms.add('shadowMapMatrix', 'mat4', 4),
          e.fragment.uniforms.add('depthHalfPixelSz', 'float'),
          e.fragment.code
            .add(o.H`int chooseCascade(float _linearDepth, out mat4 mat) {
vec4 distance = cascadeDistances;
float depth = _linearDepth;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, vec3 lvpos) {
return vec2(float(i - 2 * (i / 2)) * 0.5, float(i / 2) * 0.5) + 0.5 * lvpos.xy;
}
float readShadowMapDepth(vec2 uv, sampler2D _depthTex) {
return rgba2float(texture2D(_depthTex, uv));
}
float posIsInShadow(vec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, float halfPixelSize, sampler2D _depthTex) {
float texSize = 0.5 / halfPixelSize;
vec2 st = fract((vec2(halfPixelSize) + uv) * texSize);
float s00 = posIsInShadow(uv + vec2(-halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s10 = posIsInShadow(uv + vec2(halfPixelSize, -halfPixelSize), lvpos, _depthTex);
float s11 = posIsInShadow(uv + vec2(halfPixelSize, halfPixelSize), lvpos, _depthTex);
float s01 = posIsInShadow(uv + vec2(-halfPixelSize, halfPixelSize), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0) { return 0.0; }
if (lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
vec2 uv = cascadeCoordinates(i, lvpos);
return filterShadow(uv, lvpos, depthHalfPixelSz, shadowMapTex);
}`);
      }
      function a(e, t, r) {
        t.shadowMappingEnabled && t.shadowMap.bindView(e, r);
      }
    },
    98401: (e, t, r) => {
      r.d(t, { kl: () => n, uj: () => a });
      var i = r(74709),
        o = r(35065);
      function n(e, t) {
        t.vvInstancingEnabled &&
          (t.vvSize || t.vvColor) &&
          e.attributes.add(o.T.INSTANCEFEATUREATTRIBUTE, 'vec4'),
          t.vvSize
            ? (e.vertex.uniforms.add('vvSizeMinSize', 'vec3'),
              e.vertex.uniforms.add('vvSizeMaxSize', 'vec3'),
              e.vertex.uniforms.add('vvSizeOffset', 'vec3'),
              e.vertex.uniforms.add('vvSizeFactor', 'vec3'),
              e.vertex.uniforms.add('vvSymbolRotationMatrix', 'mat3'),
              e.vertex.uniforms.add('vvSymbolAnchor', 'vec3'),
              e.vertex.code.add(i.H`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),
              e.vertex.code.add(i.H`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${
        t.vvInstancingEnabled
          ? i.H`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`
          : ''
      }
    `))
            : e.vertex.code
                .add(i.H`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),
          t.vvColor
            ? (e.vertex.constants.add('vvColorNumber', 'int', 8),
              e.vertex.code.add(i.H`
      uniform float vvColorValues[vvColorNumber];
      uniform vec4 vvColorColors[vvColorNumber];

      vec4 vvGetColor(vec4 featureAttribute, float values[vvColorNumber], vec4 colors[vvColorNumber]) {
        float value = featureAttribute.y;
        if (value <= values[0]) {
          return colors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (values[i] >= value) {
            float f = (value - values[i-1]) / (values[i] - values[i-1]);
            return mix(colors[i-1], colors[i], f);
          }
        }
        return colors[vvColorNumber - 1];
      }

      ${
        t.vvInstancingEnabled
          ? i.H`
      vec4 vvColor() {
        return vvGetColor(instanceFeatureAttribute, vvColorValues, vvColorColors);
      }`
          : ''
      }
    `))
            : e.vertex.code.add(i.H`vec4 vvColor() { return vec4(1.0); }`);
      }
      function a(e, t) {
        (function (e, t) {
          t.vvSizeEnabled &&
            (e.setUniform3fv('vvSizeMinSize', t.vvSizeMinSize),
            e.setUniform3fv('vvSizeMaxSize', t.vvSizeMaxSize),
            e.setUniform3fv('vvSizeOffset', t.vvSizeOffset),
            e.setUniform3fv('vvSizeFactor', t.vvSizeFactor)),
            t.vvColorEnabled &&
              (e.setUniform1fv('vvColorValues', t.vvColorValues),
              e.setUniform4fv('vvColorColors', t.vvColorColors));
        })(e, t),
          t.vvSizeEnabled &&
            (e.setUniform3fv('vvSymbolAnchor', t.vvSymbolAnchor),
            e.setUniformMatrix3fv(
              'vvSymbolRotationMatrix',
              t.vvSymbolRotationMatrix,
            ));
      }
    },
    94124: (e, t, r) => {
      r.d(t, { sj: () => s, F: () => n, bf: () => a });
      var i = r(74709),
        o = r(47026);
      const n = 0.1,
        a = 0.001;
      function s(e, t) {
        const r = e.fragment;
        switch (t.alphaDiscardMode) {
          case o.JJ.Blend:
            r.code.add(i.H`
        #define discardOrAdjustAlpha(color) { if (color.a < ${i.H.float(
          a,
        )}) { discard; } }
      `);
            break;
          case o.JJ.Opaque:
            r.code.add(i.H`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);
            break;
          case o.JJ.Mask:
            r.uniforms.add('textureAlphaCutoff', 'float'),
              r.code.add(
                i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`,
              );
            break;
          case o.JJ.MaskBlend:
            e.fragment.uniforms.add('textureAlphaCutoff', 'float'),
              e.fragment.code.add(
                i.H`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`,
              );
        }
      }
    },
    89243: (e, t, r) => {
      r.d(t, { $: () => n, I: () => a });
      var i = r(80442),
        o = r(74709);
      function n({ code: e }, t) {
        t.doublePrecisionRequiresObfuscation
          ? e.add(o.H`vec3 dpPlusFrc(vec3 a, vec3 b) {
return mix(a, a + b, vec3(notEqual(b, vec3(0))));
}
vec3 dpMinusFrc(vec3 a, vec3 b) {
return mix(vec3(0), a - b, vec3(notEqual(a, b)));
}
vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = dpPlusFrc(hiA, hiB);
vec3 e = dpMinusFrc(t1, hiA);
vec3 t2 = dpMinusFrc(hiB, e) + dpMinusFrc(hiA, dpMinusFrc(t1, e)) + loA + loB;
return t1 + t2;
}`)
          : e.add(o.H`vec3 dpAdd(vec3 hiA, vec3 loA, vec3 hiB, vec3 loB) {
vec3 t1 = hiA + hiB;
vec3 e = t1 - hiA;
vec3 t2 = ((hiB - e) + (hiA - (t1 - e))) + loA + loB;
return t1 + t2;
}`);
      }
      function a(e) {
        return (
          !!(0, i.Z)('force-double-precision-obfuscation') ||
          e.driverTest.doublePrecisionRequiresObfuscation
        );
      }
    },
    93396: (e, t, r) => {
      r.d(t, { a: () => a });
      var i = r(18361),
        o = r(74709),
        n = r(49300);
      function a(e, t) {
        const r = o.H`
  /*
  *  ${t.name}
  *  ${
    t.output === i.H.Color
      ? 'RenderOutput: Color'
      : t.output === i.H.Depth
      ? 'RenderOutput: Depth'
      : t.output === i.H.Shadow
      ? 'RenderOutput: Shadow'
      : t.output === i.H.Normal
      ? 'RenderOutput: Normal'
      : t.output === i.H.Highlight
      ? 'RenderOutput: Highlight'
      : ''
  }
  */
  `;
        (0, n.CG)() && (e.fragment.code.add(r), e.vertex.code.add(r));
      }
    },
    90692: (e, t, r) => {
      r.d(t, { y: () => a });
      var i = r(6206),
        o = r(74709);
      function n(e) {
        e.code.add(o.H`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`);
      }
      function a(e) {
        e.include(n),
          e.code.add(o.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${o.H.int(i.a9.Multiply)}) {
        return allMixed;
      }
      else if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalColor;
      }
      else {
        // tint (or something invalid)
        float vIn = rgb2v(internalMixed);
        vec3 hsvTint = rgb2hsv(externalColor);
        vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
        return hsv2rgb(hsvOut);
      }
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${o.H.int(i.a9.Ignore)}) {
        return internalMixed;
      }
      else if (mode == ${o.H.int(i.a9.Replace)}) {
        return externalOpacity;
      }
      else {
        // multiply or tint (or something invalid)
        return allMixed;
      }
    }
  `);
      }
    },
    20285: (e, t, r) => {
      r.d(t, { n: () => o });
      var i = r(74709);
      function o(e) {
        e.code.add(i.H`const float MAX_RGBA_FLOAT =
255.0 / 256.0 +
255.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 +
255.0 / 256.0 / 256.0 / 256.0 / 256.0;
const vec4 FIXED_POINT_FACTORS = vec4(1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0);
vec4 float2rgba(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA_FLOAT);
vec4 fixedPointU8 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS) * 256.0);
const float toU8AsFloat = 1.0 / 255.0;
return fixedPointU8 * toU8AsFloat;
}
const vec4 RGBA_2_FLOAT_FACTORS = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, RGBA_2_FLOAT_FACTORS);
}`);
      }
    },
    33680: (e, t, r) => {
      r.d(t, { kG: () => n });
      const i = r(92604).Z.getLogger(
        'esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder',
      );
      class o {
        constructor() {
          this.includedModules = new Map();
        }
        include(e, t) {
          this.includedModules.has(e)
            ? this.includedModules.get(e) !== t &&
              i.error(
                'Trying to include shader module multiple times with different sets of options.',
              )
            : (this.includedModules.set(e, t), e(this.builder, t));
        }
      }
      class n extends o {
        constructor() {
          super(...arguments),
            (this.vertex = new l()),
            (this.fragment = new l()),
            (this.attributes = new c()),
            (this.varyings = new d()),
            (this.extensions = new u()),
            (this.constants = new h());
        }
        get fragmentUniforms() {
          return this.fragment.uniforms;
        }
        get builder() {
          return this;
        }
        generateSource(e) {
          const t = this.extensions.generateSource(e),
            r = this.attributes.generateSource(e),
            i = this.varyings.generateSource(),
            o = 'vertex' === e ? this.vertex : this.fragment,
            n = o.uniforms.generateSource(),
            a = o.code.generateSource(),
            s = 'vertex' === e ? m : f,
            l = this.constants
              .generateSource()
              .concat(o.constants.generateSource());
          return `\n${t.join('\n')}\n\n${s}\n\n${l.join('\n')}\n\n${n.join(
            '\n',
          )}\n\n${r.join('\n')}\n\n${i.join('\n')}\n\n${a.join('\n')}`;
        }
      }
      class a {
        constructor() {
          this._entries = new Map();
        }
        add(e, t, r) {
          const i = `${e}_${t}_${r}`;
          return this._entries.set(i, { name: e, type: t, arraySize: r }), this;
        }
        generateSource() {
          return Array.from(this._entries.values()).map((e) => {
            return `uniform ${e.type} ${e.name}${
              ((t = e.arraySize), t ? `[${t}]` : '')
            };`;
            var t;
          });
        }
        get entries() {
          return Array.from(this._entries.values());
        }
      }
      class s {
        constructor() {
          this._entries = new Array();
        }
        add(e) {
          this._entries.push(e);
        }
        generateSource() {
          return this._entries;
        }
      }
      class l extends o {
        constructor() {
          super(...arguments),
            (this.uniforms = new a()),
            (this.code = new s()),
            (this.constants = new h());
        }
        get builder() {
          return this;
        }
      }
      class c {
        constructor() {
          this._entries = new Array();
        }
        add(e, t) {
          this._entries.push([e, t]);
        }
        generateSource(e) {
          return 'fragment' === e
            ? []
            : this._entries.map((e) => `attribute ${e[1]} ${e[0]};`);
        }
      }
      class d {
        constructor() {
          this._entries = new Array();
        }
        add(e, t) {
          this._entries.push([e, t]);
        }
        generateSource() {
          return this._entries.map((e) => `varying ${e[1]} ${e[0]};`);
        }
      }
      class u {
        constructor() {
          this._entries = new Set();
        }
        add(e) {
          this._entries.add(e);
        }
        generateSource(e) {
          const t = 'vertex' === e ? u.ALLOWLIST_VERTEX : u.ALLOWLIST_FRAGMENT;
          return Array.from(this._entries)
            .filter((e) => t.includes(e))
            .map((e) => `#extension ${e} : enable`);
        }
      }
      (u.ALLOWLIST_FRAGMENT = [
        'GL_EXT_shader_texture_lod',
        'GL_OES_standard_derivatives',
      ]),
        (u.ALLOWLIST_VERTEX = []);
      class h {
        constructor() {
          this._entries = [];
        }
        add(e, t, r) {
          let i = 'ERROR_CONSTRUCTOR_STRING';
          switch (t) {
            case 'float':
              i = h._numberToFloatStr(r);
              break;
            case 'int':
              i = h._numberToIntStr(r);
              break;
            case 'bool':
              i = r.toString();
              break;
            case 'vec2':
              i = `vec2(${h._numberToFloatStr(
                r[0],
              )},                            ${h._numberToFloatStr(r[1])})`;
              break;
            case 'vec3':
              i = `vec3(${h._numberToFloatStr(
                r[0],
              )},                            ${h._numberToFloatStr(
                r[1],
              )},                            ${h._numberToFloatStr(r[2])})`;
              break;
            case 'vec4':
              i = `vec4(${h._numberToFloatStr(
                r[0],
              )},                            ${h._numberToFloatStr(
                r[1],
              )},                            ${h._numberToFloatStr(
                r[2],
              )},                            ${h._numberToFloatStr(r[3])})`;
              break;
            case 'ivec2':
              i = `ivec2(${h._numberToIntStr(
                r[0],
              )},                             ${h._numberToIntStr(r[1])})`;
              break;
            case 'ivec3':
              i = `ivec3(${h._numberToIntStr(
                r[0],
              )},                             ${h._numberToIntStr(
                r[1],
              )},                             ${h._numberToIntStr(r[2])})`;
              break;
            case 'ivec4':
              i = `ivec4(${h._numberToIntStr(
                r[0],
              )},                             ${h._numberToIntStr(
                r[1],
              )},                             ${h._numberToIntStr(
                r[2],
              )},                             ${h._numberToIntStr(r[3])})`;
              break;
            case 'mat2':
            case 'mat3':
            case 'mat4':
              i = `${t}(${Array.prototype.map
                .call(r, (e) => h._numberToFloatStr(e))
                .join(', ')})`;
          }
          return this._entries.push(`const ${t} ${e} = ${i};`), this;
        }
        static _numberToIntStr(e) {
          return e.toFixed(0);
        }
        static _numberToFloatStr(e) {
          return Number.isInteger(e) ? e.toFixed(1) : e.toString();
        }
        generateSource() {
          return Array.from(this._entries);
        }
      }
      const f =
          '#ifdef GL_FRAGMENT_PRECISION_HIGH\n  precision highp float;\n  precision highp sampler2D;\n#else\n  precision mediump float;\n  precision mediump sampler2D;\n#endif',
        m = 'precision highp float;\nprecision highp sampler2D;';
    },
    74709: (e, t, r) => {
      function i(e, ...t) {
        let r = '';
        for (let i = 0; i < t.length; i++) r += e[i] + t[i];
        return (r += e[e.length - 1]), r;
      }
      r.d(t, { H: () => i }),
        (function (e) {
          (e.int = function (e) {
            return Math.round(e).toString();
          }),
            (e.float = function (e) {
              return e.toPrecision(8);
            });
        })(i || (i = {}));
    },
    50173: (e, t, r) => {
      var i;
      r.d(t, { C: () => i }),
        (function (e) {
          (e[(e.MATERIAL = 0)] = 'MATERIAL'),
            (e[(e.MATERIAL_ALPHA = 1)] = 'MATERIAL_ALPHA'),
            (e[(e.MATERIAL_DEPTH = 2)] = 'MATERIAL_DEPTH'),
            (e[(e.MATERIAL_NORMAL = 3)] = 'MATERIAL_NORMAL'),
            (e[(e.MATERIAL_DEPTH_SHADOWMAP_ALL = 4)] =
              'MATERIAL_DEPTH_SHADOWMAP_ALL'),
            (e[(e.MATERIAL_HIGHLIGHT = 5)] = 'MATERIAL_HIGHLIGHT'),
            (e[(e.MATERIAL_DEPTH_SHADOWMAP_DEFAULT = 6)] =
              'MATERIAL_DEPTH_SHADOWMAP_DEFAULT'),
            (e[(e.MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT = 7)] =
              'MATERIAL_DEPTH_SHADOWMAP_HIGHLIGHT'),
            (e[(e.MAX_PASS = 8)] = 'MAX_PASS');
        })(i || (i = {}));
    },
    97995: (e, t, r) => {
      var i;
      r.d(t, { r: () => i }),
        (function (e) {
          (e[(e.INTEGRATED_MESH = 0)] = 'INTEGRATED_MESH'),
            (e[(e.OPAQUE_TERRAIN = 1)] = 'OPAQUE_TERRAIN'),
            (e[(e.OPAQUE_MATERIAL = 2)] = 'OPAQUE_MATERIAL'),
            (e[(e.OPAQUE_PLUGIN = 3)] = 'OPAQUE_PLUGIN'),
            (e[(e.TRANSPARENT_MATERIAL = 4)] = 'TRANSPARENT_MATERIAL'),
            (e[(e.TRANSPARENT_PLUGIN = 5)] = 'TRANSPARENT_PLUGIN'),
            (e[(e.TRANSPARENT_TERRAIN = 6)] = 'TRANSPARENT_TERRAIN'),
            (e[(e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL = 7)] =
              'TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL'),
            (e[(e.OCCLUDED_TERRAIN = 8)] = 'OCCLUDED_TERRAIN'),
            (e[(e.OCCLUDER_MATERIAL = 9)] = 'OCCLUDER_MATERIAL'),
            (e[(e.TRANSPARENT_OCCLUDER_MATERIAL = 10)] =
              'TRANSPARENT_OCCLUDER_MATERIAL'),
            (e[(e.OCCLUSION_PIXELS = 11)] = 'OCCLUSION_PIXELS'),
            (e[(e.POSTPROCESSING_ENVIRONMENT_OPAQUE = 12)] =
              'POSTPROCESSING_ENVIRONMENT_OPAQUE'),
            (e[(e.POSTPROCESSING_ENVIRONMENT_TRANSPARENT = 13)] =
              'POSTPROCESSING_ENVIRONMENT_TRANSPARENT'),
            (e[(e.LASERLINES = 14)] = 'LASERLINES'),
            (e[(e.LASERLINES_CONTRAST_CONTROL = 15)] =
              'LASERLINES_CONTRAST_CONTROL'),
            (e[(e.HUD_MATERIAL = 16)] = 'HUD_MATERIAL'),
            (e[(e.LABEL_MATERIAL = 17)] = 'LABEL_MATERIAL'),
            (e[(e.LINE_CALLOUTS = 18)] = 'LINE_CALLOUTS'),
            (e[(e.LINE_CALLOUTS_HUD_DEPTH = 19)] = 'LINE_CALLOUTS_HUD_DEPTH'),
            (e[(e.DRAPED_MATERIAL = 20)] = 'DRAPED_MATERIAL'),
            (e[(e.DRAPED_WATER = 21)] = 'DRAPED_WATER'),
            (e[(e.VOXEL = 22)] = 'VOXEL'),
            (e[(e.MAX_SLOTS = 23)] = 'MAX_SLOTS');
        })(i || (i = {}));
    },
    11726: (e, t, r) => {
      r.d(t, { hu: () => o }), r(4307), r(97323), r(98766), (0, r(88669).c)();
      class i {
        constructor(e) {
          this.message = e;
        }
        toString() {
          return `AssertException: ${this.message}`;
        }
      }
      function o(e, t) {
        if (!e)
          throw (
            ((t = t || 'assert'), console.log(new Error(t).stack), new i(t))
          );
      }
    },
    35065: (e, t, r) => {
      var i;
      r.d(t, { T: () => i }),
        (function (e) {
          (e.POSITION = 'position'),
            (e.NORMAL = 'normal'),
            (e.UV0 = 'uv0'),
            (e.AUXPOS1 = 'auxpos1'),
            (e.AUXPOS2 = 'auxpos2'),
            (e.MAPPOS = 'mapPos'),
            (e.COLOR = 'color'),
            (e.SYMBOLCOLOR = 'symbolColor'),
            (e.SIZE = 'size'),
            (e.TANGENT = 'tangent'),
            (e.OFFSET = 'offset'),
            (e.SUBDIVISIONFACTOR = 'subdivisionFactor'),
            (e.COLORFEATUREATTRIBUTE = 'colorFeatureAttribute'),
            (e.SIZEFEATUREATTRIBUTE = 'sizeFeatureAttribute'),
            (e.OPACITYFEATUREATTRIBUTE = 'opacityFeatureAttribute'),
            (e.DISTANCETOSTART = 'distanceToStart'),
            (e.UVMAPSPACE = 'uvMapSpace'),
            (e.BOUNDINGRECT = 'boundingRect'),
            (e.UVREGION = 'uvRegion'),
            (e.NORMALCOMPRESSED = 'normalCompressed'),
            (e.PROFILERIGHT = 'profileRight'),
            (e.PROFILEUP = 'profileUp'),
            (e.PROFILEVERTEXANDNORMAL = 'profileVertexAndNormal'),
            (e.FEATUREVALUE = 'featureValue'),
            (e.MODELORIGINHI = 'modelOriginHi'),
            (e.MODELORIGINLO = 'modelOriginLo'),
            (e.MODEL = 'model'),
            (e.MODELNORMAL = 'modelNormal'),
            (e.INSTANCECOLOR = 'instanceColor'),
            (e.INSTANCEFEATUREATTRIBUTE = 'instanceFeatureAttribute'),
            (e.LOCALTRANSFORM = 'localTransform'),
            (e.GLOBALTRANSFORM = 'globalTransform'),
            (e.BOUNDINGSPHERE = 'boundingSphere'),
            (e.MODELORIGIN = 'modelOrigin'),
            (e.MODELSCALEFACTORS = 'modelScaleFactors'),
            (e.FEATUREATTRIBUTE = 'featureAttribute'),
            (e.STATE = 'state'),
            (e.LODLEVEL = 'lodLevel'),
            (e.POSITION0 = 'position0'),
            (e.POSITION1 = 'position1'),
            (e.NORMALA = 'normalA'),
            (e.NORMALB = 'normalB'),
            (e.COMPONENTINDEX = 'componentIndex'),
            (e.VARIANTOFFSET = 'variantOffset'),
            (e.VARIANTSTROKE = 'variantStroke'),
            (e.VARIANTEXTENSION = 'variantExtension'),
            (e.U8PADDING = 'u8padding'),
            (e.U16PADDING = 'u16padding'),
            (e.SIDENESS = 'sideness'),
            (e.START = 'start'),
            (e.END = 'end'),
            (e.UP = 'up'),
            (e.EXTRUDE = 'extrude');
        })(i || (i = {}));
    },
    47026: (e, t, r) => {
      var i, o, n, a, s, l, c, d, u, h, f, m, p, g;
      r.d(t, {
        JJ: () => p,
        Vr: () => i,
        Gv: () => o,
        CE: () => f,
        MX: () => h,
        Rw: () => l,
        hU: () => c,
        Am: () => a,
      }),
        (function (e) {
          (e[(e.None = 0)] = 'None'),
            (e[(e.Front = 1)] = 'Front'),
            (e[(e.Back = 2)] = 'Back'),
            (e[(e.COUNT = 3)] = 'COUNT');
        })(i || (i = {})),
        (function (e) {
          (e[(e.Less = 0)] = 'Less'),
            (e[(e.Lequal = 1)] = 'Lequal'),
            (e[(e.COUNT = 2)] = 'COUNT');
        })(o || (o = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'), (e[(e.SMAA = 1)] = 'SMAA');
        })(n || (n = {})),
        (function (e) {
          (e[(e.Color = 0)] = 'Color'),
            (e[(e.Alpha = 1)] = 'Alpha'),
            (e[(e.FrontFace = 2)] = 'FrontFace'),
            (e[(e.NONE = 3)] = 'NONE'),
            (e[(e.COUNT = 4)] = 'COUNT');
        })(a || (a = {})),
        (function (e) {
          (e[(e.BACKGROUND = 0)] = 'BACKGROUND'),
            (e[(e.UPDATE = 1)] = 'UPDATE');
        })(s || (s = {})),
        (function (e) {
          (e[(e.NOT_LOADED = 0)] = 'NOT_LOADED'),
            (e[(e.LOADING = 1)] = 'LOADING'),
            (e[(e.LOADED = 2)] = 'LOADED');
        })(l || (l = {})),
        (function (e) {
          (e[(e.IntegratedMeshMaskExcluded = 1)] =
            'IntegratedMeshMaskExcluded'),
            (e[(e.OutlineVisualElementMask = 2)] = 'OutlineVisualElementMask');
        })(c || (c = {})),
        (function (e) {
          (e[(e.ASYNC = 0)] = 'ASYNC'), (e[(e.SYNC = 1)] = 'SYNC');
        })(d || (d = {})),
        (function (e) {
          (e[(e.Highlight = 0)] = 'Highlight'),
            (e[(e.MaskOccludee = 1)] = 'MaskOccludee'),
            (e[(e.COUNT = 2)] = 'COUNT');
        })(u || (u = {})),
        (function (e) {
          (e[(e.Triangle = 0)] = 'Triangle'),
            (e[(e.Point = 1)] = 'Point'),
            (e[(e.Line = 2)] = 'Line');
        })(h || (h = {})),
        (function (e) {
          (e[(e.STRETCH = 1)] = 'STRETCH'), (e[(e.PAD = 2)] = 'PAD');
        })(f || (f = {})),
        (function (e) {
          (e[(e.CHANGED = 0)] = 'CHANGED'),
            (e[(e.UNCHANGED = 1)] = 'UNCHANGED');
        })(m || (m = {})),
        (function (e) {
          (e[(e.Blend = 0)] = 'Blend'),
            (e[(e.Opaque = 1)] = 'Opaque'),
            (e[(e.Mask = 2)] = 'Mask'),
            (e[(e.MaskBlend = 3)] = 'MaskBlend'),
            (e[(e.COUNT = 4)] = 'COUNT');
        })(p || (p = {})),
        (function (e) {
          (e[(e.OFF = 0)] = 'OFF'), (e[(e.ON = 1)] = 'ON');
        })(g || (g = {}));
    },
    37782: (e, t, r) => {
      r.d(t, {
        bj: () => S,
        FZ: () => O,
        Uf: () => R,
        Bw: () => p,
        LO: () => M,
        Hx: () => A,
      });
      var i = r(22021),
        o = r(70586),
        n = r(17896),
        a = r(65617),
        s = r(60437),
        l = r(47026);
      function c(e, t) {
        return Math.max(
          (0, i.t7)(e * t.scale, e, t.factor),
          (function (e, t) {
            return 0 === e
              ? t.minPixelSize
              : t.minPixelSize * (1 + (2 * t.paddingPixels) / e);
          })(e, t),
        );
      }
      r(64822), (0, i.Vl)(10), (0, i.Vl)(12), (0, i.Vl)(70), (0, i.Vl)(40);
      const d = { scale: 0, factor: 0, minPixelSize: 0, paddingPixels: 0 };
      var u = r(11726),
        h = r(35065),
        f = (r(52138), r(13598));
      r(9820), new Float64Array(3), new Float32Array(6), (0, f.c)();
      const m = (0, s.Ue)();
      function p(e, t, r, i, n, a, s) {
        if (
          !(function (e) {
            return !!(0, o.pC)(e) && !e.visible;
          })(t)
        )
          if (e.boundingInfo) {
            (0, u.hu)(e.primitiveType === l.MX.Triangle);
            const t = r.tolerance;
            v(e.boundingInfo, i, n, t, a, s);
          } else {
            const t = e.indices.get(h.T.POSITION),
              r = e.vertexAttributes.get(h.T.POSITION);
            T(i, n, 0, t.length / 3, t, r, void 0, a, s);
          }
      }
      const g = (0, a.c)();
      function v(e, t, r, i, a, l) {
        if ((0, o.Wi)(e)) return;
        const c = (function (e, t, r) {
          return (0, n.s)(
            r,
            1 / (t[0] - e[0]),
            1 / (t[1] - e[1]),
            1 / (t[2] - e[2]),
          );
        })(t, r, g);
        if (
          ((0, s.op)(m, e.getBBMin()),
          (0, s.Tn)(m, e.getBBMax()),
          (0, o.pC)(a) && a.applyToAabb(m),
          (function (e, t, r, i) {
            return (function (e, t, r, i, o) {
              const n = (e[0] - i - t[0]) * r[0],
                a = (e[3] + i - t[0]) * r[0];
              let s = Math.min(n, a),
                l = Math.max(n, a);
              const c = (e[1] - i - t[1]) * r[1],
                d = (e[4] + i - t[1]) * r[1];
              if (((l = Math.min(l, Math.max(c, d))), l < 0)) return !1;
              if (((s = Math.max(s, Math.min(c, d))), s > l)) return !1;
              const u = (e[2] - i - t[2]) * r[2],
                h = (e[5] + i - t[2]) * r[2];
              return (
                (l = Math.min(l, Math.max(u, h))),
                !(l < 0) &&
                  ((s = Math.max(s, Math.min(u, h))), !(s > l) && s < 1 / 0)
              );
            })(e, t, r, i);
          })(m, t, c, i))
        ) {
          const { primitiveIndices: o, indices: n, position: s } = e,
            c = o ? o.length : n.length / 3;
          if (c > y) {
            const o = e.getChildren();
            if (void 0 !== o) {
              for (let e = 0; e < 8; ++e)
                void 0 !== o[e] && v(o[e], t, r, i, a, l);
              return;
            }
          }
          T(t, r, 0, c, n, s, o, a, l);
        }
      }
      const _ = (0, a.c)();
      function T(e, t, r, i, n, a, s, l, c) {
        if (s)
          return (function (e, t, r, i, n, a, s, l, c) {
            const d = a.data,
              u = a.stride || a.size,
              h = e[0],
              f = e[1],
              m = e[2],
              p = t[0] - h,
              g = t[1] - f,
              v = t[2] - m;
            for (let e = r; e < i; ++e) {
              const t = s[e];
              let r = 3 * t,
                i = u * n[r++],
                a = d[i++],
                T = d[i++],
                x = d[i];
              i = u * n[r++];
              let b = d[i++],
                A = d[i++],
                S = d[i];
              i = u * n[r];
              let R = d[i++],
                M = d[i++],
                C = d[i];
              (0, o.pC)(l) &&
                (([a, T, x] = l.applyToVertex(a, T, x, e)),
                ([b, A, S] = l.applyToVertex(b, A, S, e)),
                ([R, M, C] = l.applyToVertex(R, M, C, e)));
              const O = b - a,
                y = A - T,
                w = S - x,
                N = R - a,
                P = M - T,
                I = C - x,
                D = g * I - P * v,
                L = v * N - I * p,
                F = p * P - N * g,
                H = O * D + y * L + w * F;
              if (Math.abs(H) <= Number.EPSILON) continue;
              const B = h - a,
                U = f - T,
                z = m - x,
                G = B * D + U * L + z * F;
              if (H > 0) {
                if (G < 0 || G > H) continue;
              } else if (G > 0 || G < H) continue;
              const V = U * w - y * z,
                W = z * O - w * B,
                q = B * y - O * U,
                k = p * V + g * W + v * q;
              if (H > 0) {
                if (k < 0 || G + k > H) continue;
              } else if (k > 0 || G + k < H) continue;
              const X = (N * V + P * W + I * q) / H;
              X >= 0 && c(X, E(O, y, w, N, P, I, _), t, !1);
            }
          })(e, t, r, i, n, a, s, l, c);
        const d = a.data,
          u = a.stride || a.size,
          h = e[0],
          f = e[1],
          m = e[2],
          p = t[0] - h,
          g = t[1] - f,
          v = t[2] - m;
        for (let e = r, t = 3 * r; e < i; ++e) {
          let r = u * n[t++],
            i = d[r++],
            a = d[r++],
            s = d[r];
          r = u * n[t++];
          let T = d[r++],
            x = d[r++],
            b = d[r];
          r = u * n[t++];
          let A = d[r++],
            S = d[r++],
            R = d[r];
          (0, o.pC)(l) &&
            (([i, a, s] = l.applyToVertex(i, a, s, e)),
            ([T, x, b] = l.applyToVertex(T, x, b, e)),
            ([A, S, R] = l.applyToVertex(A, S, R, e)));
          const M = T - i,
            C = x - a,
            O = b - s,
            y = A - i,
            w = S - a,
            N = R - s,
            P = g * N - w * v,
            I = v * y - N * p,
            D = p * w - y * g,
            L = M * P + C * I + O * D;
          if (Math.abs(L) <= Number.EPSILON) continue;
          const F = h - i,
            H = f - a,
            B = m - s,
            U = F * P + H * I + B * D;
          if (L > 0) {
            if (U < 0 || U > L) continue;
          } else if (U > 0 || U < L) continue;
          const z = H * O - C * B,
            G = B * M - O * F,
            V = F * C - M * H,
            W = p * z + g * G + v * V;
          if (L > 0) {
            if (W < 0 || U + W > L) continue;
          } else if (W > 0 || U + W < L) continue;
          const q = (y * z + w * G + N * V) / L;
          q >= 0 && c(q, E(M, C, O, y, w, N, _), e, !1);
        }
      }
      const x = (0, a.c)(),
        b = (0, a.c)();
      function E(e, t, r, i, o, a, s) {
        return (
          (0, n.s)(x, e, t, r),
          (0, n.s)(b, i, o, a),
          (0, n.c)(s, x, b),
          (0, n.n)(s, s),
          s
        );
      }
      function A(e, t, r, o, n) {
        let a = (r.screenLength || 0) * e.pixelRatio;
        n &&
          (a = (function (e, t, r, i) {
            return c(
              e,
              (function (e, t, r) {
                const i = r.parameters,
                  o = r.paddingPixelsOverride;
                return (
                  (d.scale = Math.min(i.divisor / (t - i.offset), 1)),
                  (d.factor = (function (e) {
                    return Math.abs(e * e * e);
                  })(e)),
                  (d.minPixelSize = i.minPixelSize),
                  (d.paddingPixels = o),
                  d
                );
              })(t, r, i),
            );
          })(a, o, t, n));
        const s = (a * Math.tan(0.5 * e.fovY)) / (0.5 * e.fullHeight);
        return (0, i.uZ)(
          s * t,
          r.minWorldLength || 0,
          null != r.maxWorldLength ? r.maxWorldLength : 1 / 0,
        );
      }
      function S(e, t, r) {
        if (!e) return;
        const i = e.parameters,
          o = e.paddingPixelsOverride;
        t.setUniform4f(r, i.divisor, i.offset, i.minPixelSize, o);
      }
      function R(e, t) {
        const r = t ? R(t) : {};
        for (const t in e) {
          let i = e[t];
          i && i.forEach && (i = C(i)), (null == i && t in r) || (r[t] = i);
        }
        return r;
      }
      function M(e, t) {
        let r = !1;
        for (const i in t) {
          const o = t[i];
          void 0 !== o &&
            ((r = !0), Array.isArray(o) ? (e[i] = o.slice()) : (e[i] = o));
        }
        return r;
      }
      function C(e) {
        const t = [];
        return e.forEach((e) => t.push(e)), t;
      }
      const O = { multiply: 1, ignore: 2, replace: 3, tint: 4 },
        y = 1e3;
    },
    64822: (e, t, r) => {
      var i;
      r.d(t, { JY: () => i }),
        (function (e) {
          (e[(e.Global = 1)] = 'Global'), (e[(e.Local = 2)] = 'Local');
        })(i || (i = {}));
    },
    75656: (e, t, r) => {
      r.d(t, { x: () => c }), r(80442);
      var i = r(22021),
        o = r(70586),
        n = r(49300),
        a = r(54738),
        s = r(35371),
        l = r(46314);
      class c {
        constructor(e, t, r = null) {
          if (
            ((this._context = e),
            (this.type = 'texture'),
            (this._glName = null),
            (this._descriptor = void 0),
            (this._samplingModeDirty = !1),
            (this._wrapModeDirty = !1),
            (this._wasImmutablyAllocated = !1),
            e.instanceCounter.increment(s._g.Texture, this),
            (this._descriptor = {
              target: s.No.TEXTURE_2D,
              samplingMode: s.cw.LINEAR,
              wrapMode: s.e8.REPEAT,
              flipped: !1,
              hasMipmap: !1,
              isOpaque: !1,
              unpackAlignment: 4,
              preMultiplyAlpha: !1,
              isImmutable: !1,
              ...t,
            }),
            e.type !== a.zO.WEBGL2 &&
              (this._descriptor.isImmutable &&
                (this._descriptor.isImmutable = !1),
              h(this._descriptor.target)))
          )
            throw new Error(
              '3D and array textures are not supported in WebGL1',
            );
          this._descriptor.target === s.No.TEXTURE_CUBE_MAP
            ? this._setDataCubeMap(r)
            : this.setData(r);
        }
        get glName() {
          return this._glName;
        }
        get descriptor() {
          return this._descriptor;
        }
        get isDirty() {
          return this._samplingModeDirty || this._wrapModeDirty;
        }
        dispose() {
          this._context.gl &&
            this._glName &&
            (this._context.unbindTextureAllUnits(this),
            this._context.gl.deleteTexture(this._glName),
            (this._glName = null),
            this._context.instanceCounter.decrement(s._g.Texture, this));
        }
        release() {
          this.dispose();
        }
        resize(e, t) {
          const r = this._descriptor;
          if (r.width !== e || r.height !== t) {
            if (this._wasImmutablyAllocated)
              throw new Error("Immutable textures can't be resized!");
            (r.width = e),
              (r.height = t),
              this._descriptor.target === s.No.TEXTURE_CUBE_MAP
                ? this._setDataCubeMap(null)
                : this.setData(null);
          }
        }
        _setDataCubeMap(e = null) {
          for (
            let t = s.No.TEXTURE_CUBE_MAP_POSITIVE_X;
            t <= s.No.TEXTURE_CUBE_MAP_NEGATIVE_Z;
            t++
          )
            this._setData(e, t);
        }
        setData(e) {
          this._setData(e);
        }
        _setData(e, t) {
          if (!this._context || !this._context.gl) return;
          const r = this._context.gl;
          this._glName || (this._glName = r.createTexture()),
            void 0 === e && (e = null);
          const i = this._descriptor;
          null != t || (t = i.target);
          const a = h(t);
          var m;
          null === e &&
            ((i.width = i.width || 4),
            (i.height = i.height || 4),
            a && (i.depth = null != (m = i.depth) ? m : 1));
          const p = this._context.bindTexture(this, c.TEXTURE_UNIT_FOR_UPDATES);
          this._context.setActiveTexture(c.TEXTURE_UNIT_FOR_UPDATES),
            c._validateTexture(this._context, i),
            this._configurePixelStorage();
          const g = i.pixelFormat;
          let v = i.internalFormat
            ? i.internalFormat
            : this._deriveInternalFormat(g, i.dataType);
          if (u(e)) {
            let o = e.width,
              s = e.height;
            const l = 1;
            e instanceof HTMLVideoElement &&
              ((o = e.videoWidth), (s = e.videoHeight)),
              i.width && i.height,
              a && i.depth,
              i.isImmutable &&
                !this._wasImmutablyAllocated &&
                this._texStorage(t, v, i.hasMipmap, o, s, l),
              this._texImage(t, 0, v, o, s, l, e),
              (0, n.zu)(r),
              i.hasMipmap && this.generateMipmap(),
              void 0 === i.width && (i.width = o),
              void 0 === i.height && (i.height = s),
              a && void 0 === i.depth && (i.depth = l);
          } else {
            const { width: c, height: u, depth: h } = i;
            if (
              ((null != c && null != u) ||
                console.error('Width and height must be specified!'),
              a && null == h && console.error('Depth must be specified!'),
              i.isImmutable &&
                !this._wasImmutablyAllocated &&
                this._texStorage(t, v, i.hasMipmap, c, u, h),
              r.DEPTH24_STENCIL8 &&
                v === r.DEPTH_STENCIL &&
                (v = r.DEPTH24_STENCIL8),
              d(e))
            ) {
              const o = e.levels,
                n = f(t, c, u, h),
                a = Math.min(n - 1, o.length - 1);
              (0, l.Z)(r)
                ? r.texParameteri(i.target, r.TEXTURE_MAX_LEVEL, a)
                : (i.hasMipmap = i.hasMipmap && n === o.length);
              const d = v;
              if (
                !(function (e) {
                  return e in s.q_;
                })(d)
              )
                throw new Error(
                  'Attempting to use compressed data with an umcompressed format!',
                );
              this._forEachMipmapLevel((e, r, i, n) => {
                const a = o[Math.min(e, o.length - 1)];
                this._compressedTexImage(t, e, d, r, i, n, a);
              }, a);
            } else
              (0, o.pC)(e)
                ? (this._texImage(t, 0, v, c, u, h, e),
                  (0, n.zu)(r),
                  i.hasMipmap && this.generateMipmap())
                : this._forEachMipmapLevel((e, i, o, a) => {
                    this._texImage(t, e, v, i, o, a, null), (0, n.zu)(r);
                  });
          }
          c._applySamplingMode(r, this._descriptor),
            c._applyWrapMode(r, this._descriptor),
            c._applyAnisotropicFilteringParameters(
              this._context,
              this._descriptor,
            ),
            (0, n.zu)(r),
            this._context.bindTexture(p, c.TEXTURE_UNIT_FOR_UPDATES);
        }
        updateData(e, t, r, i, o, n) {
          n || console.error('An attempt to use uninitialized data!'),
            this._glName ||
              console.error('An attempt to update uninitialized texture!');
          const a = this._context.gl,
            s = this._descriptor,
            {
              pixelFormat: l,
              internalFormat: h,
              dataType: f,
              isImmutable: m,
              target: p,
            } = s;
          if (m && !this._wasImmutablyAllocated)
            throw new Error(
              'Cannot update immutable texture before allocation!',
            );
          const g = this._context.bindTexture(this, c.TEXTURE_UNIT_FOR_UPDATES);
          (t < 0 ||
            r < 0 ||
            i > s.width ||
            o > s.height ||
            t + i > s.width ||
            r + o > s.height) &&
            console.error('An attempt to update out of bounds of the texture!'),
            this._configurePixelStorage(),
            u(n)
              ? a.texSubImage2D(p, e, t, r, l, f, n)
              : d(n)
              ? a.compressedTexSubImage2D(p, e, t, r, i, o, h, n.levels[e])
              : a.texSubImage2D(p, e, t, r, i, o, l, f, n),
            this._context.bindTexture(g, c.TEXTURE_UNIT_FOR_UPDATES);
        }
        updateData3D(e, t, r, i, o, n, a, s) {
          s || console.error('An attempt to use uninitialized data!'),
            this._glName ||
              console.error('An attempt to update uninitialized texture!');
          const u = this._context.gl;
          if (!(0, l.Z)(u))
            throw new Error('3D textures are not supported in WebGL1');
          const f = this._descriptor,
            {
              pixelFormat: m,
              dataType: p,
              isImmutable: g,
              target: v,
              internalFormat: _,
            } = f;
          if (g && !this._wasImmutablyAllocated)
            throw new Error(
              'Cannot update immutable texture before allocation!',
            );
          h(v) ||
            console.warn(
              'Attempting to set 3D texture data on a non-3D texture',
            );
          const T = this._context.bindTexture(this, c.TEXTURE_UNIT_FOR_UPDATES);
          if (
            (this._context.setActiveTexture(c.TEXTURE_UNIT_FOR_UPDATES),
            (t < 0 ||
              r < 0 ||
              i < 0 ||
              o > f.width ||
              n > f.height ||
              a > f.depth ||
              t + o > f.width ||
              r + n > f.height ||
              i + a > f.depth) &&
              console.error(
                'An attempt to update out of bounds of the texture!',
              ),
            this._configurePixelStorage(),
            d(s))
          )
            (s = s.levels[e]),
              u.compressedTexSubImage3D(v, e, t, r, i, o, n, a, _, s);
          else {
            const l = s;
            u.texSubImage3D(v, e, t, r, i, o, n, a, m, p, l);
          }
          this._context.bindTexture(T, c.TEXTURE_UNIT_FOR_UPDATES);
        }
        generateMipmap() {
          const e = this._descriptor;
          if (!e.hasMipmap) {
            if (this._wasImmutablyAllocated)
              throw new Error(
                'Cannot add mipmaps to immutable texture after allocation',
              );
            (e.hasMipmap = !0),
              (this._samplingModeDirty = !0),
              c._validateTexture(this._context, e);
          }
          e.samplingMode === s.cw.LINEAR
            ? ((this._samplingModeDirty = !0),
              (e.samplingMode = s.cw.LINEAR_MIPMAP_NEAREST))
            : e.samplingMode === s.cw.NEAREST &&
              ((this._samplingModeDirty = !0),
              (e.samplingMode = s.cw.NEAREST_MIPMAP_NEAREST));
          const t = this._context.bindTexture(this, c.TEXTURE_UNIT_FOR_UPDATES);
          this._context.setActiveTexture(c.TEXTURE_UNIT_FOR_UPDATES),
            this._context.gl.generateMipmap(e.target),
            this._context.bindTexture(t, c.TEXTURE_UNIT_FOR_UPDATES);
        }
        setSamplingMode(e) {
          e !== this._descriptor.samplingMode &&
            ((this._descriptor.samplingMode = e),
            (this._samplingModeDirty = !0));
        }
        setWrapMode(e) {
          e !== this._descriptor.wrapMode &&
            ((this._descriptor.wrapMode = e),
            c._validateTexture(this._context, this._descriptor),
            (this._wrapModeDirty = !0));
        }
        applyChanges() {
          const e = this._context.gl,
            t = this._descriptor;
          this._samplingModeDirty &&
            (c._applySamplingMode(e, t), (this._samplingModeDirty = !1)),
            this._wrapModeDirty &&
              (c._applyWrapMode(e, t), (this._wrapModeDirty = !1));
        }
        _deriveInternalFormat(e, t) {
          if (this._context.type === a.zO.WEBGL1) return e;
          switch (t) {
            case s.Br.FLOAT:
              switch (e) {
                case s.VI.RGBA:
                  return s.lP.RGBA32F;
                case s.VI.RGB:
                  return s.lP.RGB32F;
                default:
                  throw new Error('Unable to derive format');
              }
            case s.Br.UNSIGNED_BYTE:
              switch (e) {
                case s.VI.RGBA:
                  return s.lP.RGBA8;
                case s.VI.RGB:
                  return s.lP.RGB8;
              }
            default:
              return e;
          }
        }
        _configurePixelStorage() {
          const e = this._context.gl,
            {
              unpackAlignment: t,
              flipped: r,
              preMultiplyAlpha: i,
            } = this._descriptor;
          e.pixelStorei(e.UNPACK_ALIGNMENT, t),
            e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL, r ? 1 : 0),
            e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL, i ? 1 : 0);
        }
        _texStorage(e, t, r, i, o, n) {
          const a = this._context.gl;
          if (!(0, l.Z)(a))
            throw new Error('Immutable textures are not supported in WebGL1');
          if (
            !(function (e) {
              return e in s.lP;
            })(t)
          )
            throw new Error(
              'Immutable textures must have a sized internal format',
            );
          if (!this._descriptor.isImmutable) return;
          const c = r ? f(e, i, o, n) : 1;
          h(e)
            ? a.texStorage3D(e, c, t, i, o, n)
            : a.texStorage2D(e, c, t, i, o),
            (this._wasImmutablyAllocated = !0);
        }
        _texImage(e, t, r, i, n, s, l) {
          const c = this._context.gl;
          let d = null;
          const f = this._context.type === a.zO.WEBGL2,
            m = h(e),
            { isImmutable: p, pixelFormat: g, dataType: v } = this._descriptor;
          if ((f && (d = c), f || !u(l)))
            if (p) {
              if ((0, o.pC)(l)) {
                const r = l;
                m
                  ? d.texSubImage3D(e, t, 0, 0, 0, i, n, s, g, v, r)
                  : c.texSubImage2D(e, t, 0, 0, i, n, g, v, r);
              }
            } else {
              const a = (0, o.Wg)(l);
              m
                ? d.texImage3D(e, t, r, i, n, s, 0, g, v, a)
                : c.texImage2D(e, t, r, i, n, 0, g, v, a);
            }
          else c.texImage2D(e, 0, r, g, v, l);
        }
        _compressedTexImage(e, t, r, i, n, s, l) {
          const c = this._context.gl;
          let d = null;
          const u = h(e),
            f = this._descriptor.isImmutable;
          if (u) {
            if (this._context.type !== a.zO.WEBGL2)
              throw new Error('3D textures are not supported in WebGL1');
            d = c;
          }
          f
            ? (0, o.pC)(l) &&
              (u
                ? d.compressedTexSubImage3D(e, t, 0, 0, 0, i, n, s, r, l)
                : c.compressedTexSubImage2D(e, t, 0, 0, i, n, r, l))
            : u
            ? d.compressedTexImage3D(e, t, r, i, n, s, 0, l)
            : c.compressedTexImage2D(e, t, r, i, n, 0, l);
        }
        _forEachMipmapLevel(e, t = 1 / 0) {
          let {
            width: r,
            height: i,
            depth: o,
            hasMipmap: n,
            target: a,
          } = this._descriptor;
          const l = a === s.No.TEXTURE_3D;
          for (
            let a = 0;
            e(a, r, i, o),
              n && (1 !== r || 1 !== i || (l && 1 !== o)) && !(a >= t);
            ++a
          )
            (r = Math.max(1, r >> 1)),
              (i = Math.max(1, i >> 1)),
              l && (o = Math.max(1, o >> 1));
        }
        static _validateTexture(e, t) {
          (t.width < 0 || t.height < 0 || t.depth < 0) &&
            console.error('Negative dimension parameters are not allowed!');
          const r = (0, l.Z)(e.gl),
            o = (0, i.wt)(t.width) && (0, i.wt)(t.height);
          r ||
            (!t.isImmutable && !h(t.target)) ||
            console.error(
              'Immutable and 3D-like textures are not supported in WebGL1!',
            ),
            r ||
              o ||
              ('number' == typeof t.wrapMode
                ? t.wrapMode !== s.e8.CLAMP_TO_EDGE &&
                  console.error(
                    'Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!',
                  )
                : (t.wrapMode.s === s.e8.CLAMP_TO_EDGE &&
                    t.wrapMode.t === s.e8.CLAMP_TO_EDGE) ||
                  console.error(
                    'Non-power-of-two textures must have a wrap mode of CLAMP_TO_EDGE!',
                  ),
              t.hasMipmap &&
                console.error('Mipmapping requires power-of-two textures!'));
        }
        static _applySamplingMode(e, t) {
          let r = t.samplingMode,
            i = t.samplingMode;
          r === s.cw.LINEAR_MIPMAP_NEAREST || r === s.cw.LINEAR_MIPMAP_LINEAR
            ? ((r = s.cw.LINEAR), t.hasMipmap || (i = s.cw.LINEAR))
            : (r !== s.cw.NEAREST_MIPMAP_NEAREST &&
                r !== s.cw.NEAREST_MIPMAP_LINEAR) ||
              ((r = s.cw.NEAREST), t.hasMipmap || (i = s.cw.NEAREST)),
            e.texParameteri(t.target, e.TEXTURE_MAG_FILTER, r),
            e.texParameteri(t.target, e.TEXTURE_MIN_FILTER, i);
        }
        static _applyWrapMode(e, t) {
          'number' == typeof t.wrapMode
            ? (e.texParameteri(t.target, e.TEXTURE_WRAP_S, t.wrapMode),
              e.texParameteri(t.target, e.TEXTURE_WRAP_T, t.wrapMode))
            : (e.texParameteri(t.target, e.TEXTURE_WRAP_S, t.wrapMode.s),
              e.texParameteri(t.target, e.TEXTURE_WRAP_T, t.wrapMode.t));
        }
        static _applyAnisotropicFilteringParameters(e, t) {
          var r;
          const i = e.capabilities.textureFilterAnisotropic;
          i &&
            e.gl.texParameterf(
              t.target,
              i.TEXTURE_MAX_ANISOTROPY,
              null != (r = t.maxAnisotropy) ? r : 1,
            );
        }
      }
      function d(e) {
        return (0, o.pC)(e) && 'type' in e && 'compressed' === e.type;
      }
      function u(e) {
        return (
          (0, o.pC)(e) &&
          !d(e) &&
          !(function (e) {
            return (0, o.pC)(e) && 'byteLength' in e;
          })(e)
        );
      }
      function h(e) {
        return e === s.No.TEXTURE_3D || e === s.No.TEXTURE_2D_ARRAY;
      }
      function f(e, t, r, i = 1) {
        let o = Math.max(t, r);
        return (
          e === s.No.TEXTURE_3D && (o = Math.max(o, i)),
          Math.round(Math.log(o) / Math.LN2) + 1
        );
      }
      c.TEXTURE_UNIT_FOR_UPDATES = 0;
    },
    21968: (e, t, r) => {
      r.d(t, { G: () => i });
      class i {
        constructor(e, t, r, i, o, n = !1, a = 0) {
          (this.name = e),
            (this.count = t),
            (this.type = r),
            (this.offset = i),
            (this.stride = o),
            (this.normalized = n),
            (this.divisor = a);
        }
      }
    },
    46314: (e, t, r) => {
      function i(e) {
        return (
          window.WebGL2RenderingContext &&
          e instanceof window.WebGL2RenderingContext
        );
      }
      r.d(t, { Z: () => i });
    },
    49300: (e, t, r) => {
      r.d(t, { zu: () => c, hZ: () => s, CG: () => l });
      var i = r(20102),
        o = r(80442);
      const n = r(92604).Z.getLogger('esri/views/webgl'),
        a = !!(0, o.Z)('enable-feature:webgl-debug');
      function s() {
        return a;
      }
      function l() {
        return a;
      }
      function c(e) {
        if (s()) {
          const t = e.getError();
          if (t) {
            const r = (function (e, t) {
                switch (t) {
                  case e.INVALID_ENUM:
                    return 'Invalid Enum. An unacceptable value has been specified for an enumerated argument.';
                  case e.INVALID_VALUE:
                    return 'Invalid Value. A numeric argument is out of range.';
                  case e.INVALID_OPERATION:
                    return 'Invalid Operation. The specified command is not allowed for the current state.';
                  case e.INVALID_FRAMEBUFFER_OPERATION:
                    return 'Invalid Framebuffer operation. The currently bound framebuffer is not framebuffer complete when trying to render to or to read from it.';
                  case e.OUT_OF_MEMORY:
                    return 'Out of memory. Not enough memory is left to execute the command.';
                  case e.CONTEXT_LOST_WEBGL:
                    return 'WebGL context has been lost';
                  default:
                    return 'Unknown error';
                }
              })(e, t),
              o = new Error().stack;
            n.error(
              new i.Z('webgl-error', 'WebGL error occured', {
                message: r,
                stack: o,
              }),
            );
          }
        }
      }
    },
    54738: (e, t, r) => {
      var i, o;
      function n(e, t, r = {}) {
        const o =
          t === i.WEBGL1
            ? ['webgl', 'experimental-webgl', 'webkit-3d', 'moz-webgl']
            : ['webgl2'];
        let n = null;
        for (const t of o) {
          try {
            n = e.getContext(t, r);
          } catch (e) {}
          if (n) break;
        }
        return n;
      }
      r.d(t, { zO: () => i, kr: () => n }),
        r(80442),
        ((o = i || (i = {}))[(o.WEBGL1 = 1)] = 'WEBGL1'),
        (o[(o.WEBGL2 = 2)] = 'WEBGL2');
    },
    9820: (e, t, r) => {
      function i(e, t, r) {
        for (let i = 0; i < r; ++i)
          (t[2 * i] = e[i]), (t[2 * i + 1] = e[i] - t[2 * i]);
      }
      function o(e, t, r, o) {
        for (let s = 0; s < o; ++s)
          (n[0] = e[s]), i(n, a, 1), (t[s] = a[0]), (r[s] = a[1]);
      }
      r.d(t, { po: () => o });
      const n = new Float64Array(1),
        a = new Float32Array(2);
    },
  },
]);
