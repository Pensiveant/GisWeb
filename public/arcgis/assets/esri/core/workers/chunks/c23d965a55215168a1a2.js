'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7277],
  {
    7277: (e, t, s) => {
      s.r(t), s.d(t, { toBinaryGLTF: () => Y });
      var i,
        n = s(17452),
        r = s(95330),
        E = s(13473);
      !(function (e) {
        (e[(e.JSON = 1313821514)] = 'JSON'), (e[(e.BIN = 5130562)] = 'BIN');
      })(i || (i = {}));
      class _ {
        constructor(e, t) {
          if (!e) throw new Error('GLB requires a JSON gltf chunk');
          (this.length = _.HEADER_SIZE), (this.length += _.CHUNK_HEADER_SIZE);
          const s = this._textToArrayBuffer(e);
          if (
            ((this.length += this._alignTo(s.byteLength, 4)),
            t &&
              ((this.length += _.CHUNK_HEADER_SIZE),
              (this.length += t.byteLength),
              t.byteLength % 4))
          )
            throw new Error(
              'Expected BIN chunk length to be divisible by 4 at this point',
            );
          (this.buffer = new ArrayBuffer(this.length)),
            (this.outView = new DataView(this.buffer)),
            this._writeHeader();
          const n = this._writeChunk(s, 12, i.JSON, 32);
          t && this._writeChunk(t, n, i.BIN);
        }
        _writeHeader() {
          this.outView.setUint32(0, _.MAGIC, !0),
            this.outView.setUint32(4, _.VERSION, !0),
            this.outView.setUint32(8, this.length, !0);
        }
        _writeChunk(e, t, s, i = 0) {
          const n = this._alignTo(e.byteLength, 4);
          for (
            this.outView.setUint32(t, n, !0),
              this.outView.setUint32((t += 4), s, !0),
              this._writeArrayBuffer(
                this.outView.buffer,
                e,
                (t += 4),
                0,
                e.byteLength,
              ),
              t += e.byteLength;
            t % 4;

          )
            i && this.outView.setUint8(t, i), t++;
          return t;
        }
        _writeArrayBuffer(e, t, s, i, n) {
          new Uint8Array(e, s, n).set(new Uint8Array(t, i, n), 0);
        }
        _textToArrayBuffer(e) {
          return new TextEncoder().encode(e).buffer;
        }
        _alignTo(e, t) {
          return t * Math.ceil(e / t);
        }
      }
      (_.HEADER_SIZE = 12),
        (_.CHUNK_HEADER_SIZE = 8),
        (_.MAGIC = 1179937895),
        (_.VERSION = 2);
      var a,
        T,
        R,
        o,
        A,
        c,
        N,
        h = s(30175),
        f = s(70586),
        u = s(51305),
        S = s(94961),
        C = s(17896),
        I = s(65617),
        O = s(60746),
        l = s(66459);
      !(function (e) {
        (e[(e.External = 0)] = 'External'),
          (e[(e.DataURI = 1)] = 'DataURI'),
          (e[(e.GLB = 2)] = 'GLB');
      })(a || (a = {})),
        (function (e) {
          (e[(e.External = 0)] = 'External'),
            (e[(e.DataURI = 1)] = 'DataURI'),
            (e[(e.GLB = 2)] = 'GLB');
        })(T || (T = {})),
        (function (e) {
          (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER');
        })(R || (R = {})),
        (function (e) {
          (e.SCALAR = 'SCALAR'),
            (e.VEC2 = 'VEC2'),
            (e.VEC3 = 'VEC3'),
            (e.VEC4 = 'VEC4'),
            (e.MAT2 = 'MAT2'),
            (e.MAT3 = 'MAT3'),
            (e.MAT4 = 'MAT4');
        })(o || (o = {})),
        (function (e) {
          (e[(e.POINTS = 0)] = 'POINTS'),
            (e[(e.LINES = 1)] = 'LINES'),
            (e[(e.LINE_LOOP = 2)] = 'LINE_LOOP'),
            (e[(e.LINE_STRIP = 3)] = 'LINE_STRIP'),
            (e[(e.TRIANGLES = 4)] = 'TRIANGLES'),
            (e[(e.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
            (e[(e.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN');
        })(A || (A = {})),
        (function (e) {
          (e.OPAQUE = 'OPAQUE'), (e.MASK = 'MASK'), (e.BLEND = 'BLEND');
        })(c || (c = {})),
        (function (e) {
          (e[(e.NoColor = 0)] = 'NoColor'),
            (e[(e.FaceColor = 1)] = 'FaceColor'),
            (e[(e.VertexColor = 2)] = 'VertexColor');
        })(N || (N = {}));
      var L = s(35371);
      class d {
        constructor(e, t, s, i, n) {
          (this.buffer = e),
            (this.componentType = s),
            (this.dataType = i),
            (this.data = []),
            (this.isFinalized = !1),
            (this.accessorIndex = -1),
            (this.accessorAttribute = null),
            (this.accessorMin = null),
            (this.accessorMax = null),
            t.bufferViews || (t.bufferViews = []),
            (this.index = t.bufferViews.length),
            (this.bufferView = { buffer: e.index, byteLength: -1, target: n });
          const r = this._getElementSize();
          r >= 4 &&
            n !== R.ELEMENT_ARRAY_BUFFER &&
            (this.bufferView.byteStride = r),
            t.bufferViews.push(this.bufferView),
            (this.numComponentsForDataType =
              this._calculateNumComponentsForDataType());
        }
        push(e) {
          const t = this.data.length;
          if ((this.data.push(e), this.accessorIndex >= 0)) {
            const s = t % this.numComponentsForDataType,
              i = this.accessorMin[s];
            this.accessorMin[s] = 'number' != typeof i ? e : Math.min(i, e);
            const n = this.accessorMax[s];
            this.accessorMax[s] = 'number' != typeof n ? e : Math.max(n, e);
          }
        }
        get dataSize() {
          return this.data.length * this._sizeComponentType();
        }
        get byteSize() {
          return (e = this.dataSize), 4 * Math.ceil(e / 4);
          var e;
        }
        getByteOffset() {
          if (!this.isFinalized)
            throw new Error(
              'Cannot get BufferView offset until it is finalized',
            );
          return this.buffer.getByteOffset(this);
        }
        get byteOffset() {
          if (!this.isFinalized)
            throw new Error(
              'Cannot get BufferView offset until it is finalized',
            );
          return this.buffer.getByteOffset(this);
        }
        _createTypedArray(e, t) {
          switch (this.componentType) {
            case L.g.BYTE:
              return new Int8Array(e, t);
            case L.g.FLOAT:
              return new Float32Array(e, t);
            case L.g.SHORT:
              return new Int16Array(e, t);
            case L.g.UNSIGNED_BYTE:
              return new Uint8Array(e, t);
            case L.g.UNSIGNED_INT:
              return new Uint32Array(e, t);
            case L.g.UNSIGNED_SHORT:
              return new Uint16Array(e, t);
          }
        }
        writeOutToBuffer(e, t) {
          this._createTypedArray(e, t).set(this.data);
        }
        writeAsync(e) {
          if (this.asyncWritePromise)
            throw new Error(
              "Can't write multiple bufferView values asynchronously",
            );
          return (
            (this.asyncWritePromise = e.then((e) => {
              const t = new Uint8Array(e);
              for (let e = 0; e < t.length; ++e) this.data.push(t[e]);
              delete this.asyncWritePromise;
            })),
            this.asyncWritePromise
          );
        }
        startAccessor(e) {
          if (this.accessorIndex >= 0)
            throw new Error(
              'Accessor was started without ending the previous one',
            );
          (this.accessorIndex = this.data.length), (this.accessorAttribute = e);
          const t = this.numComponentsForDataType;
          (this.accessorMin = new Array(t)), (this.accessorMax = new Array(t));
        }
        endAccessor() {
          if (this.accessorIndex < 0)
            throw new Error(
              'An accessor was not started, but was attempted to be ended',
            );
          const e = this._getElementSize(),
            t = this.numComponentsForDataType,
            s = (this.data.length - this.accessorIndex) / t;
          if (s % 1)
            throw new Error(
              'An accessor was ended with missing component values',
            );
          for (let e = 0; e < this.accessorMin.length; ++e)
            'number' != typeof this.accessorMin[e] && (this.accessorMin[e] = 0),
              'number' != typeof this.accessorMax[e] &&
                (this.accessorMax[e] = 0);
          const i = {
            byteOffset: e * (this.accessorIndex / t),
            componentType: this.componentType,
            count: s,
            type: this.dataType,
            min: this.accessorMin,
            max: this.accessorMax,
            name: this.accessorAttribute,
          };
          switch (this.accessorAttribute) {
            case 'TEXCOORD_0':
            case 'TEXCOORD_1':
            case 'COLOR_0':
            case 'WEIGHTS_0':
              switch (this.componentType) {
                case L.g.UNSIGNED_BYTE:
                case L.g.UNSIGNED_SHORT:
                  i.normalized = !0;
              }
          }
          return (
            (this.accessorIndex = -1),
            (this.accessorAttribute = null),
            (this.accessorMin = null),
            (this.accessorMax = null),
            i
          );
        }
        get finalized() {
          return this.finalizedPromise
            ? this.finalizedPromise
            : this.isFinalized
            ? (this.finalizedPromise = Promise.resolve())
            : (this.finalizedPromise = new Promise(
                (e) => (this.finalizedPromiseResolve = e),
              ));
        }
        finalize() {
          const e = this.bufferView;
          return new Promise((e) => {
            const t = this.buffer.getViewFinalizePromises(this);
            this.asyncWritePromise && t.push(this.asyncWritePromise),
              e((0, r.as)(t));
          }).then(() => {
            (this.isFinalized = !0),
              (e.byteOffset = this.getByteOffset()),
              (e.byteLength = this.dataSize),
              this.finalizedPromiseResolve && this.finalizedPromiseResolve();
          });
        }
        _getElementSize() {
          return this._sizeComponentType() * this.numComponentsForDataType;
        }
        _sizeComponentType() {
          switch (this.componentType) {
            case L.g.BYTE:
            case L.g.UNSIGNED_BYTE:
              return 1;
            case L.g.SHORT:
            case L.g.UNSIGNED_SHORT:
              return 2;
            case L.g.UNSIGNED_INT:
            case L.g.FLOAT:
              return 4;
          }
        }
        _calculateNumComponentsForDataType() {
          switch (this.dataType) {
            case o.SCALAR:
              return 1;
            case o.VEC2:
              return 2;
            case o.VEC3:
              return 3;
            case o.VEC4:
            case o.MAT2:
              return 4;
            case o.MAT3:
              return 9;
            case o.MAT4:
              return 16;
          }
        }
      }
      class M {
        constructor(e) {
          (this.gltf = e),
            (this.bufferViews = []),
            (this.isFinalized = !1),
            e.buffers || (e.buffers = []),
            (this.index = e.buffers.length);
          const t = { byteLength: -1 };
          e.buffers.push(t), (this.buffer = t);
        }
        addBufferView(e, t, s) {
          if (this.finalizePromise)
            throw new Error('Cannot add buffer view after fiinalizing buffer');
          const i = new d(this, this.gltf, e, t, s);
          return this.bufferViews.push(i), i;
        }
        getByteOffset(e) {
          let t = 0;
          for (const s of this.bufferViews) {
            if (s === e) return t;
            t += s.byteSize;
          }
          throw new Error('Given bufferView was not present in this buffer');
        }
        getViewFinalizePromises(e) {
          const t = [];
          for (const s of this.bufferViews) {
            if (e && s === e) return t;
            t.push(s.finalized);
          }
          return t;
        }
        getArrayBuffer() {
          if (!this.isFinalized)
            throw new Error(
              'Cannot get ArrayBuffer from Buffer before it is finalized',
            );
          const e = this._getTotalSize(),
            t = new ArrayBuffer(e);
          let s = 0;
          for (const e of this.bufferViews)
            e.writeOutToBuffer(t, s), (s += e.byteSize);
          return t;
        }
        finalize() {
          if (this.finalizePromise)
            throw new Error(`Buffer ${this.index} was already finalized`);
          return (
            (this.finalizePromise = new Promise((e) => {
              e((0, r.as)(this.getViewFinalizePromises()));
            }).then(() => {
              this.isFinalized = !0;
              const e = this.getArrayBuffer();
              (this.buffer.byteLength = e.byteLength), (this.buffer.uri = e);
            })),
            this.gltf.extras.promises.push(this.finalizePromise),
            this.finalizePromise
          );
        }
        _getTotalSize() {
          let e = 0;
          for (const t of this.bufferViews) e += t.byteSize;
          return e;
        }
      }
      function D(e, t) {
        (0, f.Wi)(t.normal) && (t.normal = new Float32Array(t.position.length));
        const s = e.faces,
          { position: i, normal: n } = t,
          r = s.length / 3;
        for (let e = 0; e < r; ++e) {
          const t = 3 * s[3 * e + 0],
            r = 3 * s[3 * e + 1],
            E = 3 * s[3 * e + 2],
            _ = (0, C.s)(B, i[t + 0], i[t + 1], i[t + 2]),
            a = (0, C.s)(P, i[r + 0], i[r + 1], i[r + 2]),
            T = (0, C.s)(g, i[E + 0], i[E + 1], i[E + 2]),
            R = (0, C.f)(a, a, _),
            o = (0, C.f)(T, T, _),
            A = (0, C.c)(R, R, o);
          (n[t + 0] += A[0]),
            (n[t + 1] += A[1]),
            (n[t + 2] += A[2]),
            (n[r + 0] += A[0]),
            (n[r + 1] += A[1]),
            (n[r + 2] += A[2]),
            (n[E + 0] += A[0]),
            (n[E + 1] += A[1]),
            (n[E + 2] += A[2]);
        }
        for (let e = 0; e < n.length; e += 3)
          (0, C.s)(U, n[e], n[e + 1], n[e + 2]),
            (0, C.n)(U, U),
            (n[e + 0] = U[0]),
            (n[e + 1] = U[1]),
            (n[e + 2] = U[2]);
      }
      s(66577);
      const B = (0, I.c)(),
        P = (0, I.c)(),
        g = (0, I.c)(),
        U = (0, I.c)();
      s(80442);
      var p = s(20102);
      async function G(e) {
        const t = m(e);
        if ((0, f.Wi)(t))
          throw new p.Z('imageToArrayBuffer', 'Unsupported image type');
        const s = await (async function (e) {
            if (!(e instanceof HTMLImageElement)) return 'image/png';
            const t = e.src;
            if ((0, n.HK)(t)) {
              const { mediaType: e } = (0, n.sJ)(t);
              return 'image/jpeg' === e ? e : 'image/png';
            }
            return /\.png$/i.test(t)
              ? 'image/png'
              : /\.(jpg|jpeg)$/i.test(t)
              ? 'image/jpeg'
              : 'image/png';
          })(e),
          i = await new Promise((e) => t.toBlob(e, s));
        if (!i) throw new p.Z('imageToArrayBuffer', 'Failed to encode image');
        return { data: await i.arrayBuffer(), type: s };
      }
      function m(e) {
        if (e instanceof HTMLCanvasElement) return e;
        if (e instanceof HTMLVideoElement) return null;
        const t = document.createElement('canvas');
        (t.width = e.width), (t.height = e.height);
        const s = t.getContext('2d');
        return (
          e instanceof HTMLImageElement
            ? s.drawImage(e, 0, 0, e.width, e.height)
            : e instanceof ImageData && s.putImageData(e, e.width, e.height),
          t
        );
      }
      class F {
        constructor(e, t, s) {
          (this.params = {}),
            (this.materialMap = new Array()),
            (this.imageMap = new Map()),
            (this.textureMap = new Map()),
            (this.gltf = {
              asset: {
                version: '2.0',
                copyright: e.copyright,
                generator: e.generator,
              },
              extras: { options: t, binChunkBuffer: null, promises: [] },
            }),
            s && (this.params = s),
            this._addScenes(e);
        }
        _addScenes(e) {
          this.gltf.scene = e.defaultScene;
          const t =
            this.gltf.extras.options.bufferOutputType === a.GLB ||
            this.gltf.extras.options.imageOutputType === T.GLB;
          t && (this.gltf.extras.binChunkBuffer = new M(this.gltf)),
            e.forEachScene((e) => {
              this._addScene(e);
            }),
            t && this.gltf.extras.binChunkBuffer.finalize();
        }
        _addScene(e) {
          this.gltf.scenes || (this.gltf.scenes = []);
          const t = {};
          e.name && (t.name = e.name),
            e.forEachNode((e) => {
              t.nodes || (t.nodes = []);
              const s = this._addNode(e);
              t.nodes.push(s);
            }),
            this.gltf.scenes.push(t);
        }
        _addNode(e) {
          this.gltf.nodes || (this.gltf.nodes = []);
          const t = {};
          e.name && (t.name = e.name);
          const s = e.translation;
          (0, C.k)(s, I.Z) || (t.translation = (0, I.a)(s));
          const i = e.rotation;
          (0, u.j)(i, S.I) || (t.rotation = (0, S.b)(i));
          const n = e.scale;
          (0, C.k)(n, I.O) || (t.scale = (0, I.a)(n)),
            e.mesh && e.mesh.vertexAttributes.position
              ? (t.mesh = this._addMesh(e.mesh))
              : e.forEachNode((e) => {
                  t.children || (t.children = []);
                  const s = this._addNode(e);
                  t.children.push(s);
                });
          const r = this.gltf.nodes.length;
          return this.gltf.nodes.push(t), r;
        }
        _addMesh(e) {
          this.gltf.meshes || (this.gltf.meshes = []);
          const t = { primitives: [] },
            s = this.gltf.extras.options.bufferOutputType === a.GLB;
          let i;
          (i = s ? this.gltf.extras.binChunkBuffer : new M(this.gltf)),
            this.params.origin ||
              (this.params.origin = (function (e) {
                if ((0, f.pC)(e.transform))
                  return e.transform.getOriginPoint(e.spatialReference);
                const t = e.extent.xmax - e.extent.width / 2,
                  s = e.extent.ymax - e.extent.height / 2,
                  i = e.extent.zmin;
                return new E.Z({
                  x: t,
                  y: s,
                  z: i,
                  spatialReference: e.extent.spatialReference,
                });
              })(e));
          const n = (0, l.Yq)(
            e.vertexAttributes,
            e.transform,
            this.params.origin,
            { geographic: this.params.geographic, unit: 'meters' },
          );
          (function (e, t) {
            if (e.components)
              for (const s of e.components)
                s.faces && 'smooth' === s.shading && D(s, t);
          })(e, n),
            this._flipYZAxis(n);
          const r = i.addBufferView(L.g.FLOAT, o.VEC3, R.ARRAY_BUFFER);
          let _, T, A, c;
          n.normal && (_ = i.addBufferView(L.g.FLOAT, o.VEC3, R.ARRAY_BUFFER)),
            e.vertexAttributes.uv &&
              (T = i.addBufferView(L.g.FLOAT, o.VEC2, R.ARRAY_BUFFER)),
            n.tangent &&
              (A = i.addBufferView(L.g.FLOAT, o.VEC4, R.ARRAY_BUFFER)),
            e.vertexAttributes.color &&
              (c = i.addBufferView(L.g.UNSIGNED_BYTE, o.VEC4, R.ARRAY_BUFFER)),
            r.startAccessor('POSITION'),
            _ && _.startAccessor('NORMAL'),
            T && T.startAccessor('TEXCOORD_0'),
            A && A.startAccessor('TANGENT'),
            c && c.startAccessor('COLOR_0');
          const N = n.position.length / 3,
            { position: h, normal: u, tangent: S } = n,
            { color: C, uv: I } = e.vertexAttributes;
          for (let e = 0; e < N; ++e)
            r.push(h[3 * e + 0]),
              r.push(h[3 * e + 1]),
              r.push(h[3 * e + 2]),
              _ &&
                (0, f.pC)(u) &&
                (_.push(u[3 * e + 0]),
                _.push(u[3 * e + 1]),
                _.push(u[3 * e + 2])),
              T && (0, f.pC)(I) && (T.push(I[2 * e + 0]), T.push(I[2 * e + 1])),
              A &&
                (0, f.pC)(S) &&
                (A.push(S[4 * e + 0]),
                A.push(S[4 * e + 1]),
                A.push(S[4 * e + 2]),
                A.push(S[4 * e + 3])),
              c &&
                (0, f.pC)(C) &&
                (c.push(C[4 * e + 0]),
                c.push(C[4 * e + 1]),
                c.push(C[4 * e + 2]),
                c.push(C[4 * e + 3]));
          const O = r.endAccessor(),
            d = this._addAccessor(r.index, O);
          let B, P, g, U, p;
          if (_) {
            const e = _.endAccessor();
            B = this._addAccessor(_.index, e);
          }
          if (T) {
            const e = T.endAccessor();
            P = this._addAccessor(T.index, e);
          }
          if (A) {
            const e = A.endAccessor();
            g = this._addAccessor(A.index, e);
          }
          if (c) {
            const e = c.endAccessor();
            U = this._addAccessor(c.index, e);
          }
          e.components && e.components.length > 0 && e.components[0].faces
            ? ((p = i.addBufferView(
                L.g.UNSIGNED_INT,
                o.SCALAR,
                R.ELEMENT_ARRAY_BUFFER,
              )),
              this._addMeshVertexIndexed(p, e.components, t, d, B, P, g, U))
            : this._addMeshVertexNonIndexed(e.components, t, d, B, P, g, U),
            r.finalize(),
            _ && _.finalize(),
            T && T.finalize(),
            A && A.finalize(),
            p && p.finalize(),
            c && c.finalize(),
            s || i.finalize();
          const G = this.gltf.meshes.length;
          return this.gltf.meshes.push(t), G;
        }
        _flipYZAxis({ position: e, normal: t, tangent: s }) {
          this._flipYZBuffer(e, 3),
            this._flipYZBuffer(t, 3),
            this._flipYZBuffer(s, 4);
        }
        _flipYZBuffer(e, t) {
          if (!(0, f.Wi)(e))
            for (let s = 1, i = 2; s < e.length; s += t, i += t) {
              const t = e[s],
                n = e[i];
              (e[s] = n), (e[i] = -t);
            }
        }
        _addMaterial(e) {
          if (null === e) return;
          const t = this.materialMap.indexOf(e);
          if (-1 !== t) return t;
          this.gltf.materials || (this.gltf.materials = []);
          const s = {};
          switch (e.alphaMode) {
            case 'mask':
              s.alphaMode = c.MASK;
              break;
            case 'auto':
            case 'blend':
              s.alphaMode = c.BLEND;
          }
          0.5 !== e.alphaCutoff && (s.alphaCutoff = e.alphaCutoff),
            e.doubleSided && (s.doubleSided = e.doubleSided),
            (s.pbrMetallicRoughness = {});
          const i = (e) => e ** 2.1,
            n = (e) => {
              const t = e.toRgba();
              return (
                (t[0] = i(t[0] / 255)),
                (t[1] = i(t[1] / 255)),
                (t[2] = i(t[2] / 255)),
                t
              );
            };
          if (
            ((0, f.pC)(e.color) &&
              (s.pbrMetallicRoughness.baseColorFactor = n(e.color)),
            (0, f.pC)(e.colorTexture) &&
              (s.pbrMetallicRoughness.baseColorTexture = {
                index: this._addTexture(e.colorTexture),
              }),
            (0, f.pC)(e.normalTexture) &&
              (s.normalTexture = { index: this._addTexture(e.normalTexture) }),
            e instanceof O.Z)
          ) {
            if (
              ((0, f.pC)(e.emissiveTexture) &&
                (s.emissiveTexture = {
                  index: this._addTexture(e.emissiveTexture),
                }),
              (0, f.pC)(e.emissiveColor))
            ) {
              const t = n(e.emissiveColor);
              s.emissiveFactor = [t[0], t[1], t[2]];
            }
            (0, f.pC)(e.occlusionTexture) &&
              (s.occlusionTexture = {
                index: this._addTexture(e.occlusionTexture),
              }),
              (0, f.pC)(e.metallicRoughnessTexture) &&
                (s.pbrMetallicRoughness.metallicRoughnessTexture = {
                  index: this._addTexture(e.metallicRoughnessTexture),
                }),
              (s.pbrMetallicRoughness.metallicFactor = e.metallic),
              (s.pbrMetallicRoughness.roughnessFactor = e.roughness);
          } else
            (s.pbrMetallicRoughness.metallicFactor = 1),
              (s.pbrMetallicRoughness.roughnessFactor = 1);
          const r = this.gltf.materials.length;
          return this.gltf.materials.push(s), this.materialMap.push(e), r;
        }
        _addTexture(e) {
          return (
            this.gltf.textures || (this.gltf.textures = []),
            (0, h.s1)(this.textureMap, e, () => {
              const t = {
                  sampler: this._addSampler(e),
                  source: this._addImage(e),
                },
                s = this.gltf.textures.length;
              return this.gltf.textures.push(t), s;
            })
          );
        }
        _addImage(e) {
          const t = this.imageMap.get(e);
          if (null != t) return t;
          this.gltf.images || (this.gltf.images = []);
          const s = {};
          if (e.url) s.uri = e.url;
          else {
            s.extras = e.data;
            for (let t = 0; t < this.gltf.images.length; ++t)
              if (e.data === this.gltf.images[t].extras) return t;
            switch (this.gltf.extras.options.imageOutputType) {
              case T.GLB: {
                const t = this.gltf.extras.binChunkBuffer.addBufferView(
                    L.g.UNSIGNED_BYTE,
                    o.SCALAR,
                  ),
                  i = G(e.data).then(
                    ({ data: e, type: t }) => ((s.mimeType = t), e),
                  );
                t.writeAsync(i).then(() => {
                  t.finalize();
                }),
                  (s.bufferView = t.index);
                break;
              }
              case T.DataURI:
                s.uri = (function (e) {
                  const t = m(e);
                  return (0, f.pC)(t) ? t.toDataURL() : '';
                })(e.data);
                break;
              default:
                this.gltf.extras.promises.push(
                  G(e.data).then(({ data: e, type: t }) => {
                    (s.uri = e), (s.mimeType = t);
                  }),
                );
            }
          }
          const i = this.gltf.images.length;
          return this.gltf.images.push(s), this.imageMap.set(e, i), i;
        }
        _addSampler(e) {
          this.gltf.samplers || (this.gltf.samplers = []);
          let t = L.e8.REPEAT,
            s = L.e8.REPEAT;
          if ('string' == typeof e.wrap)
            switch (e.wrap) {
              case 'clamp':
                (t = L.e8.CLAMP_TO_EDGE), (s = L.e8.CLAMP_TO_EDGE);
                break;
              case 'mirror':
                (t = L.e8.MIRRORED_REPEAT), (s = L.e8.MIRRORED_REPEAT);
            }
          else {
            switch (e.wrap.vertical) {
              case 'clamp':
                s = L.e8.CLAMP_TO_EDGE;
                break;
              case 'mirror':
                s = L.e8.MIRRORED_REPEAT;
            }
            switch (e.wrap.horizontal) {
              case 'clamp':
                t = L.e8.CLAMP_TO_EDGE;
                break;
              case 'mirror':
                t = L.e8.MIRRORED_REPEAT;
            }
          }
          const i = { wrapS: t, wrapT: s };
          for (let e = 0; e < this.gltf.samplers.length; ++e)
            if (JSON.stringify(i) === JSON.stringify(this.gltf.samplers[e]))
              return e;
          const n = this.gltf.samplers.length;
          return this.gltf.samplers.push(i), n;
        }
        _addAccessor(e, t) {
          this.gltf.accessors || (this.gltf.accessors = []);
          const s = {
            bufferView: e,
            byteOffset: t.byteOffset,
            componentType: t.componentType,
            count: t.count,
            type: t.type,
            min: t.min,
            max: t.max,
            name: t.name,
          };
          t.normalized && (s.normalized = !0);
          const i = this.gltf.accessors.length;
          return this.gltf.accessors.push(s), i;
        }
        _addMeshVertexIndexed(e, t, s, i, n, r, E, _) {
          for (const a of t) {
            e.startAccessor('INDICES');
            for (let t = 0; t < a.faces.length; ++t) e.push(a.faces[t]);
            const t = e.endAccessor(),
              T = {
                attributes: { POSITION: i },
                indices: this._addAccessor(e.index, t),
                material: this._addMaterial(a.material),
              };
            n && 'flat' !== a.shading && (T.attributes.NORMAL = n),
              r && (T.attributes.TEXCOORD_0 = r),
              E && 'flat' !== a.shading && (T.attributes.TANGENT = E),
              _ && (T.attributes.COLOR_0 = _),
              s.primitives.push(T);
          }
        }
        _addMeshVertexNonIndexed(e, t, s, i, n, r, E) {
          const _ = { attributes: { POSITION: s } };
          i && (_.attributes.NORMAL = i),
            n && (_.attributes.TEXCOORD_0 = n),
            r && (_.attributes.TANGENT = r),
            E && (_.attributes.COLOR_0 = E),
            e && (_.material = this._addMaterial(e[0].material)),
            t.primitives.push(_);
        }
      }
      var w = s(67676);
      class y {
        constructor() {
          (this.copyright = ''),
            (this.defaultScene = 0),
            (this.generator = ''),
            (this._scenes = []);
        }
        addScene(e) {
          if (this._scenes.includes(e)) throw new Error('Scene already added');
          this._scenes.push(e);
        }
        removeScene(e) {
          (0, w.Od)(this._scenes, e);
        }
        forEachScene(e) {
          this._scenes.forEach(e);
        }
      }
      class H {
        constructor(e) {
          (this.mesh = e),
            (this.name = ''),
            (this.translation = (0, I.c)()),
            (this.rotation = (0, S.a)()),
            (this.scale = (0, I.a)(I.O)),
            (this._nodes = []);
        }
        addNode(e) {
          if (this._nodes.includes(e)) throw new Error('Node already added');
          this._nodes.push(e);
        }
        forEachNode(e) {
          this._nodes.forEach(e);
        }
        set rotationAngles(e) {
          (0, u.k)(this.rotation, e[0], e[1], e[2]);
        }
      }
      const b = 'model.glb';
      class x {
        constructor() {
          (this.name = ''), (this._nodes = []);
        }
        addNode(e) {
          if (this._nodes.includes(e)) throw new Error('Node already added');
          this._nodes.push(e);
        }
        forEachNode(e) {
          this._nodes.forEach(e);
        }
      }
      class V {
        constructor(e, t) {
          (this._file = { type: 'model/gltf-binary', data: e }),
            (this.origin = t);
        }
        buffer() {
          return Promise.resolve(this._file);
        }
        download(e) {
          (0, n.io)(new Blob([this._file.data], { type: this._file.type }), e);
        }
      }
      function Y(e, t) {
        const s = new y(),
          i = new x();
        return (
          s.addScene(i),
          i.addNode(new H(e)),
          (function (e, t) {
            return (function (e, t, s) {
              const i = new F(e, (t = t || {}), s);
              let n = i.params;
              n
                ? n.origin || (n.origin = new E.Z({ x: -1, y: -1, z: -1 }))
                : (n = { origin: new E.Z({ x: -1, y: -1, z: -1 }) });
              const R = n.origin,
                o = i.gltf,
                A = o.extras.promises;
              let c = 1,
                N = 1,
                h = null;
              return (0, r.as)(A).then(() => {
                const e = { origin: R };
                delete o.extras;
                const s = 'number' == typeof t.jsonSpacing ? t.jsonSpacing : 4,
                  i = JSON.stringify(
                    o,
                    (s, i) => {
                      if ('extras' !== s) {
                        if (i instanceof ArrayBuffer) {
                          if (
                            (function (e) {
                              if (e.byteLength < 8) return !1;
                              const t = new Uint8Array(e);
                              return (
                                137 === t[0] &&
                                80 === t[1] &&
                                78 === t[2] &&
                                71 === t[3] &&
                                13 === t[4] &&
                                10 === t[5] &&
                                26 === t[6] &&
                                10 === t[7]
                              );
                            })(i)
                          )
                            switch (t.imageOutputType) {
                              case T.DataURI:
                              case T.GLB:
                                break;
                              case T.External:
                              default: {
                                const t = `img${N}.png`;
                                return N++, (e[t] = i), t;
                              }
                            }
                          switch (t.bufferOutputType) {
                            case a.DataURI:
                              return (function (e) {
                                const t = [],
                                  s = new Uint8Array(e);
                                for (let e = 0; e < s.length; e++)
                                  t.push(String.fromCharCode(s[e]));
                                return (
                                  'data:application/octet-stream;base64,' +
                                  btoa(t.join(''))
                                );
                              })(i);
                            case a.GLB:
                              if (h)
                                throw new Error(
                                  'Already encountered an ArrayBuffer, there should only be one in the GLB format.',
                                );
                              return void (h = i);
                            case a.External:
                            default: {
                              const t = `data${c}.bin`;
                              return c++, (e[t] = i), t;
                            }
                          }
                        }
                        return i;
                      }
                    },
                    s,
                  );
                return (
                  t.bufferOutputType === a.GLB || t.imageOutputType === T.GLB
                    ? (e[b] = new _(i, h).buffer)
                    : (e['model.gltf'] = i),
                  e
                );
              });
            })(
              e,
              {
                bufferOutputType: a.GLB,
                imageOutputType: T.GLB,
                jsonSpacing: 0,
              },
              t,
            );
          })(s, t).then((e) => new V(e[b], e.origin))
        );
      }
    },
    35371: (e, t, s) => {
      var i,
        n,
        r,
        E,
        _,
        a,
        T,
        R,
        o,
        A,
        c,
        N,
        h,
        f,
        u,
        S,
        C,
        I,
        O,
        l,
        L,
        d,
        M,
        D;
      s.d(t, {
        zi: () => r,
        db: () => E,
        w0: () => _,
        VY: () => D,
        wb: () => o,
        q_: () => P,
        Wf: () => T,
        g: () => R,
        Lu: () => B,
        OU: () => d,
        LR: () => a,
        qi: () => l,
        VI: () => f,
        Br: () => S,
        MX: () => n,
        Tg: () => C,
        _g: () => M,
        lP: () => u,
        xS: () => A,
        Lm: () => L,
        cw: () => c,
        No: () => h,
        e8: () => N,
        l1: () => I,
      }),
        (function (e) {
          (e[(e.DEPTH_BUFFER_BIT = 256)] = 'DEPTH_BUFFER_BIT'),
            (e[(e.STENCIL_BUFFER_BIT = 1024)] = 'STENCIL_BUFFER_BIT'),
            (e[(e.COLOR_BUFFER_BIT = 16384)] = 'COLOR_BUFFER_BIT');
        })(i || (i = {})),
        (function (e) {
          (e[(e.POINTS = 0)] = 'POINTS'),
            (e[(e.LINES = 1)] = 'LINES'),
            (e[(e.LINE_LOOP = 2)] = 'LINE_LOOP'),
            (e[(e.LINE_STRIP = 3)] = 'LINE_STRIP'),
            (e[(e.TRIANGLES = 4)] = 'TRIANGLES'),
            (e[(e.TRIANGLE_STRIP = 5)] = 'TRIANGLE_STRIP'),
            (e[(e.TRIANGLE_FAN = 6)] = 'TRIANGLE_FAN');
        })(n || (n = {})),
        (function (e) {
          (e[(e.ZERO = 0)] = 'ZERO'),
            (e[(e.ONE = 1)] = 'ONE'),
            (e[(e.SRC_COLOR = 768)] = 'SRC_COLOR'),
            (e[(e.ONE_MINUS_SRC_COLOR = 769)] = 'ONE_MINUS_SRC_COLOR'),
            (e[(e.SRC_ALPHA = 770)] = 'SRC_ALPHA'),
            (e[(e.ONE_MINUS_SRC_ALPHA = 771)] = 'ONE_MINUS_SRC_ALPHA'),
            (e[(e.DST_ALPHA = 772)] = 'DST_ALPHA'),
            (e[(e.ONE_MINUS_DST_ALPHA = 773)] = 'ONE_MINUS_DST_ALPHA'),
            (e[(e.DST_COLOR = 774)] = 'DST_COLOR'),
            (e[(e.ONE_MINUS_DST_COLOR = 775)] = 'ONE_MINUS_DST_COLOR'),
            (e[(e.SRC_ALPHA_SATURATE = 776)] = 'SRC_ALPHA_SATURATE'),
            (e[(e.CONSTANT_COLOR = 32769)] = 'CONSTANT_COLOR'),
            (e[(e.ONE_MINUS_CONSTANT_COLOR = 32770)] =
              'ONE_MINUS_CONSTANT_COLOR'),
            (e[(e.CONSTANT_ALPHA = 32771)] = 'CONSTANT_ALPHA'),
            (e[(e.ONE_MINUS_CONSTANT_ALPHA = 32772)] =
              'ONE_MINUS_CONSTANT_ALPHA');
        })(r || (r = {})),
        (function (e) {
          (e[(e.ADD = 32774)] = 'ADD'),
            (e[(e.SUBTRACT = 32778)] = 'SUBTRACT'),
            (e[(e.REVERSE_SUBTRACT = 32779)] = 'REVERSE_SUBTRACT');
        })(E || (E = {})),
        (function (e) {
          (e[(e.ARRAY_BUFFER = 34962)] = 'ARRAY_BUFFER'),
            (e[(e.ELEMENT_ARRAY_BUFFER = 34963)] = 'ELEMENT_ARRAY_BUFFER'),
            (e[(e.UNIFORM_BUFFER = 35345)] = 'UNIFORM_BUFFER'),
            (e[(e.PIXEL_PACK_BUFFER = 35051)] = 'PIXEL_PACK_BUFFER'),
            (e[(e.PIXEL_UNPACK_BUFFER = 35052)] = 'PIXEL_UNPACK_BUFFER'),
            (e[(e.COPY_READ_BUFFER = 36662)] = 'COPY_READ_BUFFER'),
            (e[(e.COPY_WRITE_BUFFER = 36663)] = 'COPY_WRITE_BUFFER');
        })(_ || (_ = {})),
        (function (e) {
          (e[(e.FRONT = 1028)] = 'FRONT'),
            (e[(e.BACK = 1029)] = 'BACK'),
            (e[(e.FRONT_AND_BACK = 1032)] = 'FRONT_AND_BACK');
        })(a || (a = {})),
        (function (e) {
          (e[(e.CW = 2304)] = 'CW'), (e[(e.CCW = 2305)] = 'CCW');
        })(T || (T = {})),
        (function (e) {
          (e[(e.BYTE = 5120)] = 'BYTE'),
            (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (e[(e.SHORT = 5122)] = 'SHORT'),
            (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.FLOAT = 5126)] = 'FLOAT');
        })(R || (R = {})),
        (function (e) {
          (e[(e.NEVER = 512)] = 'NEVER'),
            (e[(e.LESS = 513)] = 'LESS'),
            (e[(e.EQUAL = 514)] = 'EQUAL'),
            (e[(e.LEQUAL = 515)] = 'LEQUAL'),
            (e[(e.GREATER = 516)] = 'GREATER'),
            (e[(e.NOTEQUAL = 517)] = 'NOTEQUAL'),
            (e[(e.GEQUAL = 518)] = 'GEQUAL'),
            (e[(e.ALWAYS = 519)] = 'ALWAYS');
        })(o || (o = {})),
        (function (e) {
          (e[(e.ZERO = 0)] = 'ZERO'),
            (e[(e.KEEP = 7680)] = 'KEEP'),
            (e[(e.REPLACE = 7681)] = 'REPLACE'),
            (e[(e.INCR = 7682)] = 'INCR'),
            (e[(e.DECR = 7683)] = 'DECR'),
            (e[(e.INVERT = 5386)] = 'INVERT'),
            (e[(e.INCR_WRAP = 34055)] = 'INCR_WRAP'),
            (e[(e.DECR_WRAP = 34056)] = 'DECR_WRAP');
        })(A || (A = {})),
        (function (e) {
          (e[(e.NEAREST = 9728)] = 'NEAREST'),
            (e[(e.LINEAR = 9729)] = 'LINEAR'),
            (e[(e.NEAREST_MIPMAP_NEAREST = 9984)] = 'NEAREST_MIPMAP_NEAREST'),
            (e[(e.LINEAR_MIPMAP_NEAREST = 9985)] = 'LINEAR_MIPMAP_NEAREST'),
            (e[(e.NEAREST_MIPMAP_LINEAR = 9986)] = 'NEAREST_MIPMAP_LINEAR'),
            (e[(e.LINEAR_MIPMAP_LINEAR = 9987)] = 'LINEAR_MIPMAP_LINEAR');
        })(c || (c = {})),
        (function (e) {
          (e[(e.CLAMP_TO_EDGE = 33071)] = 'CLAMP_TO_EDGE'),
            (e[(e.REPEAT = 10497)] = 'REPEAT'),
            (e[(e.MIRRORED_REPEAT = 33648)] = 'MIRRORED_REPEAT');
        })(N || (N = {})),
        (function (e) {
          (e[(e.TEXTURE_2D = 3553)] = 'TEXTURE_2D'),
            (e[(e.TEXTURE_CUBE_MAP = 34067)] = 'TEXTURE_CUBE_MAP'),
            (e[(e.TEXTURE_3D = 32879)] = 'TEXTURE_3D'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_X = 34069)] =
              'TEXTURE_CUBE_MAP_POSITIVE_X'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_X'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Y'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Y'),
            (e[(e.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073)] =
              'TEXTURE_CUBE_MAP_POSITIVE_Z'),
            (e[(e.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074)] =
              'TEXTURE_CUBE_MAP_NEGATIVE_Z'),
            (e[(e.TEXTURE_2D_ARRAY = 35866)] = 'TEXTURE_2D_ARRAY');
        })(h || (h = {})),
        (function (e) {
          (e[(e.DEPTH_COMPONENT = 6402)] = 'DEPTH_COMPONENT'),
            (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (e[(e.ALPHA = 6406)] = 'ALPHA'),
            (e[(e.RGB = 6407)] = 'RGB'),
            (e[(e.RGBA = 6408)] = 'RGBA'),
            (e[(e.LUMINANCE = 6409)] = 'LUMINANCE'),
            (e[(e.LUMINANCE_ALPHA = 6410)] = 'LUMINANCE_ALPHA'),
            (e[(e.RED = 6403)] = 'RED'),
            (e[(e.RG = 33319)] = 'RG'),
            (e[(e.RED_INTEGER = 36244)] = 'RED_INTEGER'),
            (e[(e.RG_INTEGER = 33320)] = 'RG_INTEGER'),
            (e[(e.RGB_INTEGER = 36248)] = 'RGB_INTEGER'),
            (e[(e.RGBA_INTEGER = 36249)] = 'RGBA_INTEGER');
        })(f || (f = {})),
        (function (e) {
          (e[(e.RGBA4 = 32854)] = 'RGBA4'),
            (e[(e.R16F = 33325)] = 'R16F'),
            (e[(e.RG16F = 33327)] = 'RG16F'),
            (e[(e.RGB32F = 34837)] = 'RGB32F'),
            (e[(e.RGBA16F = 34842)] = 'RGBA16F'),
            (e[(e.R32F = 33326)] = 'R32F'),
            (e[(e.RG32F = 33328)] = 'RG32F'),
            (e[(e.RGBA32F = 34836)] = 'RGBA32F'),
            (e[(e.R11F_G11F_B10F = 35898)] = 'R11F_G11F_B10F'),
            (e[(e.RGB8 = 32849)] = 'RGB8'),
            (e[(e.RGBA8 = 32856)] = 'RGBA8'),
            (e[(e.RGB5_A1 = 32855)] = 'RGB5_A1'),
            (e[(e.R8 = 33321)] = 'R8'),
            (e[(e.RG8 = 33323)] = 'RG8'),
            (e[(e.R8I = 33329)] = 'R8I'),
            (e[(e.R8UI = 33330)] = 'R8UI'),
            (e[(e.R16I = 33331)] = 'R16I'),
            (e[(e.R16UI = 33332)] = 'R16UI'),
            (e[(e.R32I = 33333)] = 'R32I'),
            (e[(e.R32UI = 33334)] = 'R32UI'),
            (e[(e.RG8I = 33335)] = 'RG8I'),
            (e[(e.RG8UI = 33336)] = 'RG8UI'),
            (e[(e.RG16I = 33337)] = 'RG16I'),
            (e[(e.RG16UI = 33338)] = 'RG16UI'),
            (e[(e.RG32I = 33339)] = 'RG32I'),
            (e[(e.RG32UI = 33340)] = 'RG32UI'),
            (e[(e.RGB16F = 34843)] = 'RGB16F'),
            (e[(e.RGB9_E5 = 35901)] = 'RGB9_E5'),
            (e[(e.SRGB8 = 35905)] = 'SRGB8'),
            (e[(e.SRGB8_ALPHA8 = 35907)] = 'SRGB8_ALPHA8'),
            (e[(e.RGB565 = 36194)] = 'RGB565'),
            (e[(e.RGBA32UI = 36208)] = 'RGBA32UI'),
            (e[(e.RGB32UI = 36209)] = 'RGB32UI'),
            (e[(e.RGBA16UI = 36214)] = 'RGBA16UI'),
            (e[(e.RGB16UI = 36215)] = 'RGB16UI'),
            (e[(e.RGBA8UI = 36220)] = 'RGBA8UI'),
            (e[(e.RGB8UI = 36221)] = 'RGB8UI'),
            (e[(e.RGBA32I = 36226)] = 'RGBA32I'),
            (e[(e.RGB32I = 36227)] = 'RGB32I'),
            (e[(e.RGBA16I = 36232)] = 'RGBA16I'),
            (e[(e.RGB16I = 36233)] = 'RGB16I'),
            (e[(e.RGBA8I = 36238)] = 'RGBA8I'),
            (e[(e.RGB8I = 36239)] = 'RGB8I'),
            (e[(e.R8_SNORM = 36756)] = 'R8_SNORM'),
            (e[(e.RG8_SNORM = 36757)] = 'RG8_SNORM'),
            (e[(e.RGB8_SNORM = 36758)] = 'RGB8_SNORM'),
            (e[(e.RGBA8_SNORM = 36759)] = 'RGBA8_SNORM'),
            (e[(e.RGB10_A2 = 32857)] = 'RGB10_A2'),
            (e[(e.RGB10_A2UI = 36975)] = 'RGB10_A2UI');
        })(u || (u = {})),
        (function (e) {
          (e[(e.FLOAT = 5126)] = 'FLOAT'),
            (e[(e.UNSIGNED_BYTE = 5121)] = 'UNSIGNED_BYTE'),
            (e[(e.UNSIGNED_INT_24_8 = 34042)] = 'UNSIGNED_INT_24_8'),
            (e[(e.UNSIGNED_SHORT_4_4_4_4 = 32819)] = 'UNSIGNED_SHORT_4_4_4_4'),
            (e[(e.UNSIGNED_SHORT_5_5_5_1 = 32820)] = 'UNSIGNED_SHORT_5_5_5_1'),
            (e[(e.UNSIGNED_SHORT_5_6_5 = 33635)] = 'UNSIGNED_SHORT_5_6_5'),
            (e[(e.BYTE = 5120)] = 'BYTE'),
            (e[(e.UNSIGNED_SHORT = 5123)] = 'UNSIGNED_SHORT'),
            (e[(e.SHORT = 5122)] = 'SHORT'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.HALF_FLOAT = 5131)] = 'HALF_FLOAT'),
            (e[(e.UNSIGNED_INT_2_10_10_10_REV = 33640)] =
              'UNSIGNED_INT_2_10_10_10_REV'),
            (e[(e.UNSIGNED_INT_10F_11F_11F_REV = 35899)] =
              'UNSIGNED_INT_10F_11F_11F_REV'),
            (e[(e.UNSIGNED_INT_5_9_9_9_REV = 35902)] =
              'UNSIGNED_INT_5_9_9_9_REV'),
            (e[(e.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269)] =
              'FLOAT_32_UNSIGNED_INT_24_8_REV');
        })(S || (S = {})),
        (function (e) {
          (e[(e.DEPTH_COMPONENT16 = 33189)] = 'DEPTH_COMPONENT16'),
            (e[(e.STENCIL_INDEX8 = 36168)] = 'STENCIL_INDEX8'),
            (e[(e.DEPTH_STENCIL = 34041)] = 'DEPTH_STENCIL'),
            (e[(e.DEPTH_COMPONENT24 = 33190)] = 'DEPTH_COMPONENT24'),
            (e[(e.DEPTH_COMPONENT32F = 36012)] = 'DEPTH_COMPONENT32F'),
            (e[(e.DEPTH24_STENCIL8 = 35056)] = 'DEPTH24_STENCIL8'),
            (e[(e.DEPTH32F_STENCIL8 = 36013)] = 'DEPTH32F_STENCIL8');
        })(C || (C = {})),
        (function (e) {
          (e[(e.STATIC_DRAW = 35044)] = 'STATIC_DRAW'),
            (e[(e.DYNAMIC_DRAW = 35048)] = 'DYNAMIC_DRAW'),
            (e[(e.STREAM_DRAW = 35040)] = 'STREAM_DRAW'),
            (e[(e.STATIC_READ = 35045)] = 'STATIC_READ'),
            (e[(e.DYNAMIC_READ = 35049)] = 'DYNAMIC_READ'),
            (e[(e.STREAM_READ = 35041)] = 'STREAM_READ'),
            (e[(e.STATIC_COPY = 35046)] = 'STATIC_COPY'),
            (e[(e.DYNAMIC_COPY = 35050)] = 'DYNAMIC_COPY'),
            (e[(e.STREAM_COPY = 35042)] = 'STREAM_COPY');
        })(I || (I = {})),
        (function (e) {
          (e[(e.FRAGMENT_SHADER = 35632)] = 'FRAGMENT_SHADER'),
            (e[(e.VERTEX_SHADER = 35633)] = 'VERTEX_SHADER');
        })(O || (O = {})),
        (function (e) {
          (e[(e.FRAMEBUFFER = 36160)] = 'FRAMEBUFFER'),
            (e[(e.READ_FRAMEBUFFER = 36008)] = 'READ_FRAMEBUFFER'),
            (e[(e.DRAW_FRAMEBUFFER = 36009)] = 'DRAW_FRAMEBUFFER');
        })(l || (l = {})),
        (function (e) {
          (e[(e.TEXTURE = 0)] = 'TEXTURE'),
            (e[(e.RENDER_BUFFER = 1)] = 'RENDER_BUFFER'),
            (e[(e.CUBEMAP = 2)] = 'CUBEMAP');
        })(L || (L = {})),
        (function (e) {
          (e[(e.NONE = 0)] = 'NONE'),
            (e[(e.DEPTH_RENDER_BUFFER = 1)] = 'DEPTH_RENDER_BUFFER'),
            (e[(e.STENCIL_RENDER_BUFFER = 2)] = 'STENCIL_RENDER_BUFFER'),
            (e[(e.DEPTH_STENCIL_RENDER_BUFFER = 3)] =
              'DEPTH_STENCIL_RENDER_BUFFER'),
            (e[(e.DEPTH_STENCIL_TEXTURE = 4)] = 'DEPTH_STENCIL_TEXTURE');
        })(d || (d = {})),
        (function (e) {
          (e[(e.Texture = 0)] = 'Texture'),
            (e[(e.Buffer = 1)] = 'Buffer'),
            (e[(e.VAO = 2)] = 'VAO'),
            (e[(e.Shader = 3)] = 'Shader'),
            (e[(e.Program = 4)] = 'Program'),
            (e[(e.Framebuffer = 5)] = 'Framebuffer'),
            (e[(e.Renderbuffer = 6)] = 'Renderbuffer'),
            (e[(e.Sync = 7)] = 'Sync'),
            (e[(e.COUNT = 8)] = 'COUNT');
        })(M || (M = {})),
        (function (e) {
          (e[(e.COLOR_ATTACHMENT0 = 36064)] = 'COLOR_ATTACHMENT0'),
            (e[(e.COLOR_ATTACHMENT1 = 36065)] = 'COLOR_ATTACHMENT1'),
            (e[(e.COLOR_ATTACHMENT2 = 36066)] = 'COLOR_ATTACHMENT2'),
            (e[(e.COLOR_ATTACHMENT3 = 36067)] = 'COLOR_ATTACHMENT3'),
            (e[(e.COLOR_ATTACHMENT4 = 36068)] = 'COLOR_ATTACHMENT4'),
            (e[(e.COLOR_ATTACHMENT5 = 36069)] = 'COLOR_ATTACHMENT5'),
            (e[(e.COLOR_ATTACHMENT6 = 36070)] = 'COLOR_ATTACHMENT6'),
            (e[(e.COLOR_ATTACHMENT7 = 36071)] = 'COLOR_ATTACHMENT7'),
            (e[(e.COLOR_ATTACHMENT8 = 36072)] = 'COLOR_ATTACHMENT8'),
            (e[(e.COLOR_ATTACHMENT9 = 36073)] = 'COLOR_ATTACHMENT9'),
            (e[(e.COLOR_ATTACHMENT10 = 36074)] = 'COLOR_ATTACHMENT10'),
            (e[(e.COLOR_ATTACHMENT11 = 36075)] = 'COLOR_ATTACHMENT11'),
            (e[(e.COLOR_ATTACHMENT12 = 36076)] = 'COLOR_ATTACHMENT12'),
            (e[(e.COLOR_ATTACHMENT13 = 36077)] = 'COLOR_ATTACHMENT13'),
            (e[(e.COLOR_ATTACHMENT14 = 36078)] = 'COLOR_ATTACHMENT14'),
            (e[(e.COLOR_ATTACHMENT15 = 36079)] = 'COLOR_ATTACHMENT15');
        })(D || (D = {}));
      const B = 33306;
      var P, g, U, p, G, m, F;
      !(function (e) {
        (e[(e.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776)] =
          'COMPRESSED_RGB_S3TC_DXT1_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777)] =
            'COMPRESSED_RGBA_S3TC_DXT1_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778)] =
            'COMPRESSED_RGBA_S3TC_DXT3_EXT'),
          (e[(e.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779)] =
            'COMPRESSED_RGBA_S3TC_DXT5_EXT'),
          (e[(e.COMPRESSED_R11_EAC = 37488)] = 'COMPRESSED_R11_EAC'),
          (e[(e.COMPRESSED_SIGNED_R11_EAC = 37489)] =
            'COMPRESSED_SIGNED_R11_EAC'),
          (e[(e.COMPRESSED_RG11_EAC = 37490)] = 'COMPRESSED_RG11_EAC'),
          (e[(e.COMPRESSED_SIGNED_RG11_EAC = 37491)] =
            'COMPRESSED_SIGNED_RG11_EAC'),
          (e[(e.COMPRESSED_RGB8_ETC2 = 37492)] = 'COMPRESSED_RGB8_ETC2'),
          (e[(e.COMPRESSED_SRGB8_ETC2 = 37493)] = 'COMPRESSED_SRGB8_ETC2'),
          (e[(e.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494)] =
            'COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (e[(e.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495)] =
            'COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2'),
          (e[(e.COMPRESSED_RGBA8_ETC2_EAC = 37496)] =
            'COMPRESSED_RGBA8_ETC2_EAC'),
          (e[(e.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497)] =
            'COMPRESSED_SRGB8_ALPHA8_ETC2_EAC');
      })(P || (P = {})),
        (function (e) {
          (e[(e.FLOAT = 5126)] = 'FLOAT'),
            (e[(e.FLOAT_VEC2 = 35664)] = 'FLOAT_VEC2'),
            (e[(e.FLOAT_VEC3 = 35665)] = 'FLOAT_VEC3'),
            (e[(e.FLOAT_VEC4 = 35666)] = 'FLOAT_VEC4'),
            (e[(e.INT = 5124)] = 'INT'),
            (e[(e.INT_VEC2 = 35667)] = 'INT_VEC2'),
            (e[(e.INT_VEC3 = 35668)] = 'INT_VEC3'),
            (e[(e.INT_VEC4 = 35669)] = 'INT_VEC4'),
            (e[(e.BOOL = 35670)] = 'BOOL'),
            (e[(e.BOOL_VEC2 = 35671)] = 'BOOL_VEC2'),
            (e[(e.BOOL_VEC3 = 35672)] = 'BOOL_VEC3'),
            (e[(e.BOOL_VEC4 = 35673)] = 'BOOL_VEC4'),
            (e[(e.FLOAT_MAT2 = 35674)] = 'FLOAT_MAT2'),
            (e[(e.FLOAT_MAT3 = 35675)] = 'FLOAT_MAT3'),
            (e[(e.FLOAT_MAT4 = 35676)] = 'FLOAT_MAT4'),
            (e[(e.SAMPLER_2D = 35678)] = 'SAMPLER_2D'),
            (e[(e.SAMPLER_CUBE = 35680)] = 'SAMPLER_CUBE'),
            (e[(e.UNSIGNED_INT = 5125)] = 'UNSIGNED_INT'),
            (e[(e.UNSIGNED_INT_VEC2 = 36294)] = 'UNSIGNED_INT_VEC2'),
            (e[(e.UNSIGNED_INT_VEC3 = 36295)] = 'UNSIGNED_INT_VEC3'),
            (e[(e.UNSIGNED_INT_VEC4 = 36296)] = 'UNSIGNED_INT_VEC4'),
            (e[(e.FLOAT_MAT2x3 = 35685)] = 'FLOAT_MAT2x3'),
            (e[(e.FLOAT_MAT2x4 = 35686)] = 'FLOAT_MAT2x4'),
            (e[(e.FLOAT_MAT3x2 = 35687)] = 'FLOAT_MAT3x2'),
            (e[(e.FLOAT_MAT3x4 = 35688)] = 'FLOAT_MAT3x4'),
            (e[(e.FLOAT_MAT4x2 = 35689)] = 'FLOAT_MAT4x2'),
            (e[(e.FLOAT_MAT4x3 = 35690)] = 'FLOAT_MAT4x3'),
            (e[(e.SAMPLER_3D = 35679)] = 'SAMPLER_3D'),
            (e[(e.SAMPLER_2D_SHADOW = 35682)] = 'SAMPLER_2D_SHADOW'),
            (e[(e.SAMPLER_2D_ARRAY = 36289)] = 'SAMPLER_2D_ARRAY'),
            (e[(e.SAMPLER_2D_ARRAY_SHADOW = 36292)] =
              'SAMPLER_2D_ARRAY_SHADOW'),
            (e[(e.SAMPLER_CUBE_SHADOW = 36293)] = 'SAMPLER_CUBE_SHADOW'),
            (e[(e.INT_SAMPLER_2D = 36298)] = 'INT_SAMPLER_2D'),
            (e[(e.INT_SAMPLER_3D = 36299)] = 'INT_SAMPLER_3D'),
            (e[(e.INT_SAMPLER_CUBE = 36300)] = 'INT_SAMPLER_CUBE'),
            (e[(e.INT_SAMPLER_2D_ARRAY = 36303)] = 'INT_SAMPLER_2D_ARRAY'),
            (e[(e.UNSIGNED_INT_SAMPLER_2D = 36306)] =
              'UNSIGNED_INT_SAMPLER_2D'),
            (e[(e.UNSIGNED_INT_SAMPLER_3D = 36307)] =
              'UNSIGNED_INT_SAMPLER_3D'),
            (e[(e.UNSIGNED_INT_SAMPLER_CUBE = 36308)] =
              'UNSIGNED_INT_SAMPLER_CUBE'),
            (e[(e.UNSIGNED_INT_SAMPLER_2D_ARRAY = 36311)] =
              'UNSIGNED_INT_SAMPLER_2D_ARRAY');
        })(g || (g = {})),
        (function (e) {
          (e[(e.OBJECT_TYPE = 37138)] = 'OBJECT_TYPE'),
            (e[(e.SYNC_CONDITION = 37139)] = 'SYNC_CONDITION'),
            (e[(e.SYNC_STATUS = 37140)] = 'SYNC_STATUS'),
            (e[(e.SYNC_FLAGS = 37141)] = 'SYNC_FLAGS');
        })(U || (U = {})),
        (function (e) {
          (e[(e.UNSIGNALED = 37144)] = 'UNSIGNALED'),
            (e[(e.SIGNALED = 37145)] = 'SIGNALED');
        })(p || (p = {})),
        (function (e) {
          (e[(e.ALREADY_SIGNALED = 37146)] = 'ALREADY_SIGNALED'),
            (e[(e.TIMEOUT_EXPIRED = 37147)] = 'TIMEOUT_EXPIRED'),
            (e[(e.CONDITION_SATISFIED = 37148)] = 'CONDITION_SATISFIED'),
            (e[(e.WAIT_FAILED = 37149)] = 'WAIT_FAILED');
        })(G || (G = {})),
        (function (e) {
          e[(e.SYNC_GPU_COMMANDS_COMPLETE = 37143)] =
            'SYNC_GPU_COMMANDS_COMPLETE';
        })(m || (m = {})),
        (function (e) {
          e[(e.SYNC_FLUSH_COMMANDS_BIT = 1)] = 'SYNC_FLUSH_COMMANDS_BIT';
        })(F || (F = {}));
    },
  },
]);
