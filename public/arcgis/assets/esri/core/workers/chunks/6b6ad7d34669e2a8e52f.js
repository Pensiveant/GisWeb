'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6690],
  {
    28228: (e, t, n) => {
      n.d(t, { Z: () => i });
      var r = n(33586);
      class i extends r.Z {
        constructor(e) {
          super(),
            (this.immutable = !1),
            this.setField('url', e),
            (this.immutable = !0);
        }
      }
    },
    80692: (e, t, n) => {
      n.d(t, { Z: () => i });
      var r = n(33586);
      class i extends r.Z {
        constructor(e, t, n, r, i, s) {
          super(),
            (this.attachmentUrl = i),
            (this.immutable = !1),
            this.setField('id', e),
            this.setField('name', t),
            this.setField('contenttype', n),
            this.setField('size', r),
            this.setField('exifinfo', s),
            (this.immutable = !0);
        }
      }
    },
    33586: (e, t, n) => {
      n.d(t, { Z: () => u });
      var r = n(12384),
        i = n(61363),
        s = n(95330),
        o = n(9361);
      function a(e, t = !1) {
        if (null == e) return null;
        if ((0, i.j)(e)) return (0, i.t)(e);
        if ((0, i.i)(e)) return (0, i.z)(e);
        if ((0, i.f)(e)) return (0, i.d)(e);
        if ((0, i.o)(e)) return (0, i.A)(e);
        if ((0, i.a)(e)) {
          const n = [];
          for (const r of e) n.push(a(r, t));
          return n;
        }
        const n = new u();
        n.immutable = !1;
        for (const r of Object.keys(e)) {
          const i = e[r];
          void 0 !== i && n.setField(r, a(i, t));
        }
        return (n.immutable = t), n;
      }
      class u {
        constructor(e) {
          (this.declaredClass = 'esri.arcade.Dictionary'),
            (this.attributes = null),
            (this.plain = !1),
            (this.immutable = !0),
            (this.attributes =
              e instanceof u ? e.attributes : null == e ? {} : e);
        }
        field(e) {
          const t = e.toLowerCase(),
            n = this.attributes[e];
          if (void 0 !== n) return n;
          for (const e in this.attributes)
            if (e.toLowerCase() === t) return this.attributes[e];
          throw new Error('Field not Found : ' + e);
        }
        setField(e, t) {
          if (this.immutable) throw new Error('Dictionary is Immutable');
          const n = e.toLowerCase();
          if (void 0 === this.attributes[e]) {
            for (const e in this.attributes)
              if (e.toLowerCase() === n) return void (this.attributes[e] = t);
            this.attributes[e] = t;
          } else this.attributes[e] = t;
        }
        hasField(e) {
          const t = e.toLowerCase();
          if (void 0 !== this.attributes[e]) return !0;
          for (const e in this.attributes) if (e.toLowerCase() === t) return !0;
          return !1;
        }
        keys() {
          let e = [];
          for (const t in this.attributes) e.push(t);
          return (e = e.sort()), e;
        }
        castToText() {
          let e = '';
          for (const t in this.attributes) {
            '' !== e && (e += ',');
            const n = this.attributes[t];
            null == n
              ? (e += JSON.stringify(t) + ':null')
              : (0, i.i)(n) || (0, i.j)(n) || (0, i.f)(n)
              ? (e += JSON.stringify(t) + ':' + JSON.stringify(n))
              : n instanceof o.Z || n instanceof r.Z || n instanceof Array
              ? (e += JSON.stringify(t) + ':' + (0, i.u)(n))
              : n instanceof Date
              ? (e += JSON.stringify(t) + ':' + JSON.stringify(n))
              : null !== n &&
                'object' == typeof n &&
                void 0 !== n.castToText &&
                (e += JSON.stringify(t) + ':' + n.castToText());
          }
          return '{' + e + '}';
        }
        static convertObjectToArcadeDictionary(e, t = !0) {
          const n = new u();
          n.immutable = !1;
          for (const t in e) {
            const r = e[t];
            void 0 !== r && n.setField(t.toString(), a(r));
          }
          return (n.immutable = t), n;
        }
        static convertJsonToArcade(e, t = !1) {
          return a(e, t);
        }
        castAsJson(e = null) {
          const t = {};
          for (let n in this.attributes) {
            const r = this.attributes[n];
            void 0 !== r &&
              (null != e && e.keyTranslate && (n = e.keyTranslate(n)),
              (t[n] = (0, i.w)(r, e)));
          }
          return t;
        }
        castDictionaryValueAsJsonAsync(e, t, n, r = null, s) {
          return (0, i.x)(n, r, s).then((n) => ((e[t] = n), n));
        }
        castAsJsonAsync(e = null, t = null) {
          const n = {},
            r = [];
          for (let s in this.attributes) {
            const a = this.attributes[s];
            null != t && t.keyTranslate && (s = t.keyTranslate(s)),
              void 0 !== a &&
                ((0, i.y)(a) || a instanceof o.Z || a instanceof Date
                  ? (n[s] = (0, i.w)(a, t))
                  : r.push(this.castDictionaryValueAsJsonAsync(n, s, a, e, t)));
          }
          return r.length > 0 ? (0, s.$6)(r).then(() => n) : (0, s.DB)(n);
        }
      }
    },
    15274: (e, t, n) => {
      n.d(t, { Z: () => f });
      var r = n(33586),
        i = n(12384),
        s = n(61363),
        o = n(95330),
        a = n(9361),
        u = n(13473),
        l = n(33955),
        c = n(98732),
        h = n(70586);
      class f {
        constructor() {
          (this.arcadeDeclaredClass = 'esri.arcade.Feature'),
            (this._optimizedGeomDefinition = null),
            (this._geometry = null),
            (this.attributes = null),
            (this._layer = null),
            (this._datesfixed = !0),
            (this.immutable = !0),
            (this._datefields = null),
            (this.immutable = !0);
        }
        static createFromGraphic(e) {
          const t = new f();
          return (
            (t._geometry = (0, h.pC)(e.geometry) ? e.geometry : null),
            void 0 === e.attributes || null === e.attributes
              ? (t.attributes = {})
              : (t.attributes = e.attributes),
            e._sourceLayer
              ? ((t._layer = e._sourceLayer), (t._datesfixed = !1))
              : e._layer
              ? ((t._layer = e._layer), (t._datesfixed = !1))
              : e.layer && 'fields' in e.layer
              ? ((t._layer = e.layer), (t._datesfixed = !1))
              : e.sourceLayer &&
                'fields' in e.sourceLayer &&
                ((t._layer = e.sourceLayer), (t._datesfixed = !1)),
            t
          );
        }
        static createFromArcadeFeature(e) {
          const t = new f();
          return (
            (t._datesfixed = e._datesfixed),
            (t.attributes = e.attributes),
            (t._geometry = e._geometry),
            (t._optimizedGeomDefinition = e._optimizedGeomDefinition),
            e._layer && (t._layer = e._layer),
            t
          );
        }
        static createFromOptimisedFeature(e, t, n) {
          const r = new f();
          return (
            (r._geometry = e.geometry ? { geometry: e.geometry } : null),
            (r._optimizedGeomDefinition = n),
            (r.attributes = e.attributes || {}),
            (r._layer = t),
            (r._datesfixed = !1),
            r
          );
        }
        static createFromArcadeDictionary(e) {
          const t = new f();
          return (
            (t.attributes = e.field('attributes')),
            null !== t.attributes && t.attributes instanceof r.Z
              ? ((t.attributes = t.attributes.attributes),
                null === t.attributes && (t.attributes = {}))
              : (t.attributes = {}),
            (t._geometry = e.field('geometry')),
            null !== t._geometry &&
              (t._geometry instanceof r.Z
                ? (t._geometry = f.parseGeometryFromDictionary(t._geometry))
                : t._geometry instanceof a.Z || (t._geometry = null)),
            t
          );
        }
        static createFromGraphicLikeObject(e, t, n = null) {
          const r = new f();
          return (
            null === t && (t = {}),
            (r.attributes = t),
            (r._geometry = (0, h.pC)(e) ? e : null),
            (r._layer = n),
            r._layer && (r._datesfixed = !1),
            r
          );
        }
        repurposeFromGraphicLikeObject(e, t, n = null) {
          null === t && (t = {}),
            (this.attributes = t),
            (this._geometry = e || null),
            (this._layer = n),
            this._layer ? (this._datesfixed = !1) : (this._datesfixed = !0);
        }
        castToText() {
          let e = '';
          !1 === this._datesfixed && this._fixDates();
          for (const t in this.attributes) {
            '' !== e && (e += ',');
            const n = this.attributes[t];
            null == n
              ? (e += JSON.stringify(t) + ':null')
              : (0, s.i)(n) || (0, s.j)(n) || (0, s.f)(n)
              ? (e += JSON.stringify(t) + ':' + JSON.stringify(n))
              : n instanceof a.Z || n instanceof i.Z || n instanceof Array
              ? (e += JSON.stringify(t) + ':' + (0, s.u)(n))
              : n instanceof Date
              ? (e += JSON.stringify(t) + ':' + JSON.stringify(n))
              : null !== n &&
                'object' == typeof n &&
                void 0 !== n.castToText &&
                (e += JSON.stringify(t) + ':' + n.castToText());
          }
          return (
            '{"geometry":' +
            (null === this.geometry() ? 'null' : (0, s.u)(this.geometry())) +
            ',"attributes":{' +
            e +
            '}}'
          );
        }
        _fixDates() {
          if (null !== this._datefields)
            return (
              this._datefields.length > 0 &&
                this._fixDateFields(this._datefields),
              void (this._datesfixed = !0)
            );
          const e = [];
          for (let t = 0; t < this._layer.fields.length; t++) {
            const n = this._layer.fields[t];
            ('date' !== n.type && 'esriFieldTypeDate' !== n.type) ||
              e.push(n.name);
          }
          (this._datefields = e),
            e.length > 0 && this._fixDateFields(e),
            (this._datesfixed = !0);
        }
        _fixDateFields(e) {
          this.attributes = { ...this.attributes };
          for (let t = 0; t < e.length; t++) {
            let n = this.attributes[e[t]];
            if (null === n);
            else if (void 0 === n) {
              for (const r in this.attributes)
                if (r.toLowerCase() === e[t].toLowerCase()) {
                  (n = this.attributes[r]),
                    null !== n &&
                      (n instanceof Date || (this.attributes[r] = new Date(n)));
                  break;
                }
            } else n instanceof Date || (this.attributes[e[t]] = new Date(n));
          }
        }
        geometry() {
          return (
            null === this._geometry ||
              this._geometry instanceof a.Z ||
              (this._optimizedGeomDefinition
                ? ((this._geometry = (0, h.Wg)(
                    (0, l.im)(
                      (0, c.di)(
                        this._geometry,
                        this._optimizedGeomDefinition.geometryType,
                        this._optimizedGeomDefinition.hasZ,
                        this._optimizedGeomDefinition.hasM,
                      ),
                    ),
                  )),
                  (this._geometry.spatialReference =
                    this._optimizedGeomDefinition.spatialReference))
                : (this._geometry = (0, h.Wg)((0, l.im)(this._geometry)))),
            this._geometry
          );
        }
        field(e) {
          !1 === this._datesfixed && this._fixDates();
          const t = this.attributes[e];
          if (void 0 !== t) return t;
          const n = e.toLowerCase();
          for (const e in this.attributes)
            if (e.toLowerCase() === n) return this.attributes[e];
          if (this._hasFieldDefinition(n)) return null;
          throw new Error('Field not Found : ' + e);
        }
        _hasFieldDefinition(e) {
          if (null === this._layer) return !1;
          for (let t = 0; t < this._layer.fields.length; t++)
            if (this._layer.fields[t].name.toLowerCase() === e) return !0;
          return !1;
        }
        setField(e, t) {
          if (this.immutable) throw new Error('Feature is Immutable');
          if (!1 === (0, s.y)(t))
            throw new Error('Illegal Value Assignment to Feature');
          const n = e.toLowerCase();
          if (void 0 === this.attributes[e]) {
            for (const e in this.attributes)
              if (e.toLowerCase() === n) return void (this.attributes[e] = t);
            this.attributes[e] = t;
          } else this.attributes[e] = t;
        }
        hasField(e) {
          const t = e.toLowerCase();
          if (void 0 !== this.attributes[e]) return !0;
          for (const e in this.attributes) if (e.toLowerCase() === t) return !0;
          return !!this._hasFieldDefinition(t);
        }
        keys() {
          let e = [];
          const t = {};
          for (const n in this.attributes) e.push(n), (t[n.toLowerCase()] = 1);
          if (null !== this._layer)
            for (let n = 0; n < this._layer.fields.length; n++) {
              const r = this._layer.fields[n];
              1 !== t[r.name.toLowerCase()] && e.push(r.name);
            }
          return (e = e.sort()), e;
        }
        static parseGeometryFromDictionary(e) {
          const t = f._convertDictionaryToJson(e, !0);
          return (
            void 0 !== t.hasm && ((t.hasM = t.hasm), delete t.hasm),
            void 0 !== t.hasz && ((t.hasZ = t.hasz), delete t.hasz),
            void 0 !== t.spatialreference &&
              ((t.spatialReference = t.spatialreference),
              delete t.spatialreference),
            void 0 !== t.rings &&
              (t.rings = this._fixPathArrays(
                t.rings,
                !0 === t.hasZ,
                !0 === t.hasZ,
              )),
            void 0 !== t.paths &&
              (t.paths = this._fixPathArrays(
                t.paths,
                !0 === t.hasZ,
                !0 === t.hasM,
              )),
            void 0 !== t.points &&
              (t.points = this._fixPointArrays(
                t.points,
                !0 === t.hasZ,
                !0 === t.hasM,
              )),
            (0, l.im)(t)
          );
        }
        static _fixPathArrays(e, t, n) {
          const r = [];
          if (e instanceof Array)
            for (let i = 0; i < e.length; i++)
              r.push(this._fixPointArrays(e[i], t, n));
          else if (e instanceof i.Z)
            for (let i = 0; i < e.length(); i++)
              r.push(this._fixPointArrays(e.get(i), t, n));
          return r;
        }
        static _fixPointArrays(e, t, n) {
          const r = [];
          if (e instanceof Array)
            for (let s = 0; s < e.length; s++) {
              const o = e[s];
              o instanceof u.Z
                ? t && n
                  ? r.push([o.x, o.y, o.z, o.m])
                  : t
                  ? r.push([o.x, o.y, o.z])
                  : n
                  ? r.push([o.x, o.y, o.m])
                  : r.push([o.x, o.y])
                : o instanceof i.Z
                ? r.push(o.toArray())
                : r.push(o);
            }
          else if (e instanceof i.Z)
            for (let s = 0; s < e.length(); s++) {
              const o = e.get(s);
              o instanceof u.Z
                ? t && n
                  ? r.push([o.x, o.y, o.z, o.m])
                  : t
                  ? r.push([o.x, o.y, o.z])
                  : n
                  ? r.push([o.x, o.y, o.m])
                  : r.push([o.x, o.y])
                : o instanceof i.Z
                ? r.push(o.toArray())
                : r.push(o);
            }
          return r;
        }
        static _convertDictionaryToJson(e, t = !1) {
          const n = {};
          for (const i in e.attributes) {
            let s = e.attributes[i];
            s instanceof r.Z && (s = f._convertDictionaryToJson(s)),
              t ? (n[i.toLowerCase()] = s) : (n[i] = s);
          }
          return n;
        }
        static parseAttributesFromDictionary(e) {
          const t = {};
          for (const n in e.attributes) {
            const r = e.attributes[n];
            if (!(0, s.y)(r)) throw new Error('Illegal Argument');
            t[n] = r;
          }
          return t;
        }
        static fromJson(e) {
          let t = null;
          null !== e.geometry &&
            void 0 !== e.geometry &&
            (t = (0, l.im)(e.geometry));
          const n = {};
          if (null !== e.attributes && void 0 !== e.attributes)
            for (const t in e.attributes) {
              const r = e.attributes[t];
              if (null === r) n[t] = r;
              else {
                if (!((0, s.f)(r) || (0, s.j)(r) || (0, s.i)(r) || (0, s.o)(r)))
                  throw new Error('Illegal Argument');
                n[t] = r;
              }
            }
          return f.createFromGraphicLikeObject(t, n, null);
        }
        fullSchema() {
          return this._layer;
        }
        gdbVersion() {
          if (null === this._layer) return '';
          const e = this._layer.gdbVersion;
          return void 0 === e
            ? ''
            : '' === e &&
              this._layer.capabilities &&
              this._layer.capabilities.isVersioned
            ? 'SDE.DEFAULT'
            : e;
        }
        castAsJson(e) {
          const t = {
            attributes: {},
            geometry:
              !0 === (null == e ? void 0 : e.keepGeometryType)
                ? this.geometry()
                : this.geometry().toJSON(),
          };
          for (const n in this.attributes) {
            const r = this.attributes[n];
            void 0 !== r && (t.attributes[n] = (0, s.w)(r, e));
          }
          return t;
        }
        castAsJsonAsync(e = null, t) {
          return (0, o.DB)(this.castAsJson(t));
        }
      }
    },
    9609: (e, t, n) => {
      n.d(t, { Z: () => r });
      class r {
        constructor(e, t) {
          (this.definition = null),
            (this.context = null),
            (this.definition = e),
            (this.context = t);
        }
      }
    },
    12384: (e, t, n) => {
      n.d(t, { Z: () => r });
      class r {
        constructor(e = []) {
          this._elements = e;
        }
        length() {
          return this._elements.length;
        }
        get(e) {
          return this._elements[e];
        }
        toArray() {
          const e = [];
          for (let t = 0; t < this.length(); t++) e.push(this.get(t));
          return e;
        }
      }
    },
    50728: (e, t, n) => {
      n.d(t, { Z: () => s });
      var r = n(12384),
        i = n(25785);
      class s extends r.Z {
        constructor(e, t, n, r, i) {
          super(e),
            (this._lazyPath = []),
            (this._hasZ = !1),
            (this._hasM = !1),
            (this._hasZ = n),
            (this._hasM = r),
            (this._spRef = t),
            (this._cacheId = i);
        }
        get(e) {
          if (void 0 === this._lazyPath[e]) {
            const t = this._elements[e];
            if (void 0 === t) return;
            this._lazyPath[e] = new i.Z(
              t,
              this._spRef,
              this._hasZ,
              this._hasM,
              this._cacheId,
              e,
            );
          }
          return this._lazyPath[e];
        }
        equalityTest(e) {
          return (
            e === this ||
            (null !== e &&
              e instanceof s != 0 &&
              e.getUniqueHash() === this.getUniqueHash())
          );
        }
        getUniqueHash() {
          return this._cacheId.toString();
        }
      }
    },
    25785: (e, t, n) => {
      n.d(t, { Z: () => s });
      var r = n(12384),
        i = n(13473);
      class s extends r.Z {
        constructor(e, t, n, r, i, s) {
          super(e),
            (this._lazyPt = []),
            (this._hasZ = !1),
            (this._hasM = !1),
            (this._spRef = t),
            (this._hasZ = n),
            (this._hasM = r),
            (this._cacheId = i),
            (this._partId = s);
        }
        get(e) {
          if (void 0 === this._lazyPt[e]) {
            const t = this._elements[e];
            if (void 0 === t) return;
            const n = this._hasZ,
              r = this._hasM;
            let s = null;
            (s =
              n && !r
                ? new i.Z(t[0], t[1], t[2], void 0, this._spRef)
                : r && !n
                ? new i.Z(t[0], t[1], void 0, t[2], this._spRef)
                : n && r
                ? new i.Z(t[0], t[1], t[2], t[3], this._spRef)
                : new i.Z(t[0], t[1], this._spRef)),
              (s.cache._arcadeCacheId =
                this._cacheId.toString() +
                '-' +
                this._partId.toString() +
                '-' +
                e.toString()),
              (this._lazyPt[e] = s);
          }
          return this._lazyPt[e];
        }
        equalityTest(e) {
          return (
            e === this ||
            (null !== e &&
              e instanceof s != 0 &&
              e.getUniqueHash() === this.getUniqueHash())
          );
        }
        getUniqueHash() {
          return this._cacheId.toString() + '-' + this._partId.toString();
        }
      }
    },
    90658: (e, t, n) => {
      n.d(t, {
        Bj: () => r,
        dj: () => i,
        JW: () => l,
        Lz: () => g,
        EI: () => m,
        tI: () => y,
        tt: () => d,
        Sh: () => c,
        US: () => w,
        hj: () => f,
        HD: () => h,
        yE: () => x,
        Qk: () => E,
        q2: () => A,
        Dt: () => C,
        SV: () => D,
        hd: () => F,
      });
      var r,
        i,
        s,
        o = n(95330),
        a = n(6570),
        u = n(1231);
      function l(e) {
        return u.Z.fromJSON(e.toJSON());
      }
      function c(e) {
        return e.toJSON ? e.toJSON() : e;
      }
      function h(e) {
        return 'string' == typeof e || e instanceof String;
      }
      function f(e) {
        return 'number' == typeof e;
      }
      function p(e) {
        return e instanceof Date;
      }
      function d(e, t) {
        return e === t || (!(!p(e) || !p(t)) && e.getTime() === t.getTime());
      }
      function m(e) {
        if (void 0 === e) return null;
        if ('number' == typeof e) return e;
        switch (e.toLowerCase()) {
          case 'meters':
          case 'meter':
            return 109404;
          case 'miles':
          case 'mile':
            return 109413;
          case 'kilometers':
          case 'kilometer':
          case 'km':
            return 109414;
        }
        return null;
      }
      function D(e) {
        if (null === e) return null;
        switch (e.type) {
          case 'polygon':
          case 'multipoint':
          case 'polyline':
            return e.extent;
          case 'point':
            return new a.Z({
              xmin: e.x,
              ymin: e.y,
              xmax: e.x,
              ymax: e.y,
              spatialReference: e.spatialReference,
            });
          case 'extent':
            return e;
        }
        return null;
      }
      function g(e) {
        if (void 0 === e) return null;
        if ('number' == typeof e) return e;
        if ('number' == typeof e) return e;
        switch (e.toLowerCase()) {
          case 'meters':
          case 'meter':
            return 9001;
          case 'miles':
          case 'mile':
            return 9035;
          case 'kilometers':
          case 'kilometer':
          case 'km':
            return 9036;
        }
        return null;
      }
      ((s = r || (r = {}))[(s.Standardised = 0)] = 'Standardised'),
        (s[(s.StandardisedNoInterval = 1)] = 'StandardisedNoInterval'),
        (s[(s.SqlServer = 2)] = 'SqlServer'),
        (s[(s.Oracle = 3)] = 'Oracle'),
        (s[(s.Postgres = 4)] = 'Postgres'),
        (s[(s.PGDB = 5)] = 'PGDB'),
        (s[(s.FILEGDB = 6)] = 'FILEGDB'),
        (s[(s.NotEvaluated = 7)] = 'NotEvaluated'),
        (function (e) {
          (e[(e.InFeatureSet = 0)] = 'InFeatureSet'),
            (e[(e.NotInFeatureSet = 1)] = 'NotInFeatureSet'),
            (e[(e.Unknown = 2)] = 'Unknown');
        })(i || (i = {}));
      const y = 1e3,
        E = {
          point: 'point',
          polygon: 'polygon',
          polyline: 'polyline',
          multipoint: 'multipoint',
          extent: 'extent',
          esriGeometryPoint: 'point',
          esriGeometryPolygon: 'polygon',
          esriGeometryPolyline: 'polyline',
          esriGeometryMultipoint: 'multipoint',
          esriGeometryEnvelope: 'extent',
          envelope: 'extent',
        },
        A = {
          point: 'esriGeometryPoint',
          polygon: 'esriGeometryPolygon',
          polyline: 'esriGeometryPolyline',
          multipoint: 'esriGeometryMultipoint',
          extent: 'esriGeometryEnvelope',
          esriGeometryPoint: 'esriGeometryPoint',
          esriGeometryPolygon: 'esriGeometryPolygon',
          esriGeometryPolyline: 'esriGeometryPolyline',
          esriGeometryMultipoint: 'esriGeometryMultipoint',
          esriGeometryEnvelope: 'esriGeometryEnvelope',
          envelope: 'esriGeometryEnvelope',
        },
        x = {
          'small-integer': 'esriFieldTypeSmallInteger',
          integer: 'esriFieldTypeInteger',
          long: 'esriFieldTypeLong',
          single: 'esriFieldTypeSingle',
          double: 'esriFieldTypeDouble',
          string: 'esriFieldTypeString',
          date: 'esriFieldTypeDate',
          oid: 'esriFieldTypeOID',
          geometry: 'esriFieldTypeGeometry',
          blob: 'esriFieldTypeBlob',
          raster: 'esriFieldTypeRaster',
          guid: 'esriFieldTypeGUID',
          'global-id': 'esriFieldTypeGlobalID',
          xml: 'eesriFieldTypeXML',
          esriFieldTypeSmallInteger: 'esriFieldTypeSmallInteger',
          esriFieldTypeInteger: 'esriFieldTypeInteger',
          esriFieldTypeLong: 'esriFieldTypeLong',
          esriFieldTypeSingle: 'esriFieldTypeSingle',
          esriFieldTypeDouble: 'esriFieldTypeDouble',
          esriFieldTypeString: 'esriFieldTypeString',
          esriFieldTypeDate: 'esriFieldTypeDate',
          esriFieldTypeOID: 'esriFieldTypeOID',
          esriFieldTypeGeometry: 'esriFieldTypeGeometry',
          esriFieldTypeBlob: 'esriFieldTypeBlob',
          esriFieldTypeRaster: 'esriFieldTypeRaster',
          esriFieldTypeGUID: 'esriFieldTypeGUID',
          esriFieldTypeGlobalID: 'esriFieldTypeGlobalID',
          esriFieldTypeXML: 'eesriFieldTypeXML',
        };
      function C(e, t) {
        return (0, o.Ue)((n, r) => {
          const i = (0, o.DB)(!0);
          e.reduce(
            (e, n, r, i) =>
              e.then(
                (e) => {
                  try {
                    return t(e, n, r, i);
                  } catch (e) {
                    return (0, o.d1)(e);
                  }
                },
                (e) => (0, o.d1)(e),
              ),
            i,
          ).then(n, r);
        });
      }
      function w(e) {
        return void 0 === e
          ? ''
          : (e = (e = (e = e.replace(
              /\/featureserver\/[0-9]*/i,
              '/FeatureServer',
            )).replace(/\/mapserver\/[0-9]*/i, '/MapServer')).split('?')[0]);
      }
      function F(e, t) {
        t || (t = {}), 'function' == typeof t && (t = { cmp: t });
        const n = 'boolean' == typeof t.cycles && t.cycles,
          r =
            t.cmp &&
            ((i = t.cmp),
            function (e) {
              return function (t, n) {
                const r = { key: t, value: e[t] },
                  s = { key: n, value: e[n] };
                return i(r, s);
              };
            });
        var i;
        const s = [];
        return (function e(t) {
          if (
            (t && t.toJSON && 'function' == typeof t.toJSON && (t = t.toJSON()),
            void 0 === t)
          )
            return;
          if ('number' == typeof t) return isFinite(t) ? '' + t : 'null';
          if ('object' != typeof t) return JSON.stringify(t);
          let i, o;
          if (Array.isArray(t)) {
            for (o = '[', i = 0; i < t.length; i++)
              i && (o += ','), (o += e(t[i]) || 'null');
            return o + ']';
          }
          if (null === t) return 'null';
          if (-1 !== s.indexOf(t)) {
            if (n) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
          }
          const a = s.push(t) - 1,
            u = Object.keys(t).sort(r && r(t));
          for (o = '', i = 0; i < u.length; i++) {
            const n = u[i],
              r = e(t[n]);
            r && (o && (o += ','), (o += JSON.stringify(n) + ':' + r));
          }
          return s.splice(a, 1), '{' + o + '}';
        })(e);
      }
    },
    71201: (e, t, n) => {
      n.d(t, {
        RI: () => y,
        ws: () => x,
        B9: () => E,
        Es: () => C,
        Ay: () => m,
        s9: () => d,
        _R: () => u,
        nB: () => F,
        AW: () => s,
      });
      var r = n(13473),
        i = n(87416);
      function s(e, t, n) {
        return Math.sqrt(
          (e[0] - t[0]) ** 2 +
            (e[1] - t[1]) ** 2 +
            (void 0 !== e[2] && void 0 !== t[2]
              ? (e[2] * n - t[2] * n) ** 2
              : 0),
        );
      }
      const o = [];
      for (const e of [
        [9002, 56146130, 6131, 6132, 8050, 8051, 8228],
        [9003, 5702, 6358, 6359, 6360, 8052, 8053],
        [9095, 5754],
      ]) {
        const t = e[0];
        for (let n = 1; n < e.length; n++) o[e[n]] = t;
      }
      const a = [];
      function u(e) {
        return e.vcsWkid && void 0 !== o[e.vcsWkid]
          ? a[o[e.vcsWkid]]
          : e.latestVcsWkid && void 0 !== o[e.latestVcsWkid]
          ? a[o[e.latestVcsWkid]]
          : 1;
      }
      function l(e, t, n) {
        const r = { x: 0, y: 0 };
        t && (r.z = 0), n && (r.m = 0);
        let i = 0,
          s = e[0];
        for (let o = 0; o < e.length; o++) {
          const a = e[o];
          if (!1 === p(a, s)) {
            const e = f(s, a, t),
              o = c(s, a, t, n);
            (o.x *= e),
              (o.y *= e),
              (r.x += o.x),
              (r.y += o.y),
              t && ((o.z *= e), (r.z += o.z)),
              n && ((o.m *= e), (r.m += o.m)),
              (i += e),
              (s = a);
          }
        }
        return (
          i > 0
            ? ((r.x /= i), (r.y /= i), t && (r.z /= i), n && (r.m /= i))
            : ((r.x = e[0][0]),
              (r.y = e[0][1]),
              t && (r.z = e[0][2]),
              n && t ? (r.m = e[0][3]) : n && (r.m = e[0][2])),
          r
        );
      }
      function c(e, t, n, r) {
        const i = { x: (e[0] + t[0]) / 2, y: (e[1] + t[1]) / 2 };
        return (
          n && (i.z = (e[2] + t[2]) / 2),
          n && r ? (i.m = (e[3] + t[3]) / 2) : r && (i.m = (e[2] + t[2]) / 2),
          i
        );
      }
      function h(e, t) {
        if (e.length <= 1) return 0;
        let n = 0;
        for (let r = 1; r < e.length; r++) n += f(e[r - 1], e[r], t);
        return n;
      }
      function f(e, t, n) {
        const r = t[0] - e[0],
          i = t[1] - e[1];
        if (n) {
          const e = t[2] - t[2];
          return Math.sqrt(r * r + i * i + e * e);
        }
        return Math.sqrt(r * r + i * i);
      }
      function p(e, t) {
        if (e.length !== t.length) return !1;
        for (let n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
      }
      function d(e) {
        const t = { x: 0, y: 0, spatialReference: e.spatialReference.toJSON() },
          n = { x: 0, y: 0, spatialReference: e.spatialReference.toJSON() };
        let i = 0,
          s = 0;
        for (let r = 0; r < e.paths.length; r++) {
          if (0 === e.paths[r].length) continue;
          const o = h(e.paths[r], !0 === e.hasZ);
          if (0 === o) {
            const n = l(e.paths[r], !0 === e.hasZ, !0 === e.hasM);
            (t.x += n.x),
              (t.y += n.y),
              !0 === e.hasZ && (t.z += n.z),
              !0 === e.hasM && (t.m += n.m),
              ++i;
          } else {
            const t = l(e.paths[r], !0 === e.hasZ, !0 === e.hasM);
            (n.x += t.x * o),
              (n.y += t.y * o),
              !0 === e.hasZ && (n.z += t.z * o),
              !0 === e.hasM && (n.m += t.m * o),
              (s += o);
          }
        }
        return s > 0
          ? ((n.x /= s),
            (n.y /= s),
            !0 === e.hasZ && (n.z /= s),
            !0 === e.hasM && (n.m /= s),
            new r.Z(n))
          : i > 0
          ? ((t.x /= i),
            (t.y /= i),
            !0 === e.hasZ && (n.z /= i),
            !0 === e.hasM && (t.m /= i),
            new r.Z(t))
          : null;
      }
      function m(e) {
        if (0 === e.points.length) return null;
        let t = 0,
          n = 0,
          i = 0,
          s = 0;
        for (let r = 0; r < e.points.length; r++) {
          const o = e.getPoint(r);
          !0 === o.hasZ && (i += o.z),
            !0 === o.hasM && (s += o.m),
            (t += o.x),
            (n += o.y),
            (s += o.m);
        }
        const o = {
          x: t / e.points.length,
          y: n / e.points.length,
          spatialReference: null,
        };
        return (
          (o.spatialReference = e.spatialReference.toJSON()),
          !0 === e.hasZ && (o.z = i / e.points.length),
          !0 === e.hasM && (o.m = s / e.points.length),
          new r.Z(o)
        );
      }
      function D(e, t, n = 0) {
        for (; e < n; ) e += t;
        const r = n + t;
        for (; e >= r; ) e -= t;
        return e;
      }
      function g(e, t) {
        return Math.atan2(t.y - e.y, t.x - e.x);
      }
      function y(e, t) {
        return D(g(e, t), 2 * Math.PI) * (180 / Math.PI);
      }
      function E(e, t) {
        return D(Math.PI / 2 - g(e, t), 2 * Math.PI) * (180 / Math.PI);
      }
      function A(e, t, n) {
        const r = { x: e.x - t.x, y: e.y - t.y },
          i = { x: n.x - t.x, y: n.y - t.y };
        return Math.atan2(
          (function (e, t) {
            return e.x * t.y - t.x * e.y;
          })(r, i),
          (function (e, t) {
            return e.x * t.x + e.y * t.y;
          })(r, i),
        );
      }
      function x(e, t, n) {
        return D(A(e, t, n), 2 * Math.PI) * (180 / Math.PI);
      }
      function C(e, t, n) {
        return D(-1 * A(e, t, n), 2 * Math.PI) * (180 / Math.PI);
      }
      (a[9002] = 0.3048),
        (a[9003] = 0.3048006096012192),
        (a[9095] = 0.3048007491);
      const w = [0, 0];
      function F(e) {
        for (let t = 0; t < e.length; t++) {
          const n = e[t];
          for (let r = 0; r < n.length - 1; r++) {
            const s = n[r],
              o = n[r + 1];
            for (let n = t + 1; n < e.length; n++)
              for (let t = 0; t < e[n].length - 1; t++) {
                const r = e[n][t],
                  a = e[n][t + 1];
                if (
                  (0, i.UT)(s, o, r, a, w) &&
                  !(
                    (w[0] === s[0] && w[1] === s[1]) ||
                    (w[0] === r[0] && w[1] === r[1]) ||
                    (w[0] === o[0] && w[1] === o[1]) ||
                    (w[0] === a[0] && w[1] === a[1])
                  )
                )
                  return !0;
              }
          }
          const r = n.length;
          if (!(r < 3))
            for (let e = 0; e <= r - 2; e++) {
              const t = n[e],
                s = n[e + 1];
              for (let o = e + 2; o <= r - 2; o++) {
                const e = n[o],
                  r = n[o + 1];
                if (
                  (0, i.UT)(t, s, e, r, w) &&
                  !(
                    (w[0] === t[0] && w[1] === t[1]) ||
                    (w[0] === e[0] && w[1] === e[1]) ||
                    (w[0] === s[0] && w[1] === s[1]) ||
                    (w[0] === r[0] && w[1] === r[1])
                  )
                )
                  return !0;
              }
            }
        }
        return !1;
      }
    },
    13976: (e, t, n) => {
      n.d(t, { r: () => f });
      var r = n(61363),
        i = n(70171),
        s = n(99490);
      function o(e) {
        const t = new Date(e.getTime()),
          n = t.getFullYear(),
          r = new Date(0);
        r.setFullYear(n + 1, 0, 4), r.setHours(0, 0, 0, 0);
        const i = a(r),
          s = new Date(0);
        s.setFullYear(n, 0, 4), s.setHours(0, 0, 0, 0);
        const o = a(s);
        return t.getTime() >= i.getTime()
          ? n + 1
          : t.getTime() >= o.getTime()
          ? n
          : n - 1;
      }
      function a(e) {
        const t = new Date(e.getTime()),
          n = t.getDay(),
          r = (n < 1 ? 7 : 0) + n - 1;
        return t.setDate(t.getDate() - r), t.setHours(0, 0, 0, 0), t;
      }
      function u(e, t, n) {
        return (
          e +
          ((function (e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
          })(n)
            ? c
            : l)[t]
        );
      }
      const l = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
        c = [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335];
      function h(e) {
        return null === e ? e : isNaN(e.getTime()) ? null : e;
      }
      function f(e, t) {
        (e.today = function (e, n) {
          return t(e, n, function (e, t, n) {
            (0, r.p)(n, 0, 0);
            const i = new Date();
            return i.setHours(0, 0, 0, 0), i;
          });
        }),
          (e.now = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 0, 0), new Date();
            });
          }),
          (e.timestamp = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 0, 0);
              let i = new Date();
              return (
                (i = new Date(
                  i.getUTCFullYear(),
                  i.getUTCMonth(),
                  i.getUTCDate(),
                  i.getUTCHours(),
                  i.getUTCMinutes(),
                  i.getUTCSeconds(),
                  i.getUTCMilliseconds(),
                )),
                i
              );
            });
          }),
          (e.toutc = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i
                ? null
                : new Date(
                    i.getUTCFullYear(),
                    i.getUTCMonth(),
                    i.getUTCDate(),
                    i.getUTCHours(),
                    i.getUTCMinutes(),
                    i.getUTCSeconds(),
                    i.getUTCMilliseconds(),
                  );
            });
          }),
          (e.tolocal = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i
                ? null
                : s.ou
                    .utc(
                      i.getFullYear(),
                      i.getMonth() + 1,
                      i.getDate(),
                      i.getHours(),
                      i.getMinutes(),
                      i.getSeconds(),
                      i.getMilliseconds(),
                    )
                    .toJSDate();
            });
          }),
          (e.day = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getDate();
            });
          }),
          (e.month = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getMonth();
            });
          }),
          (e.year = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getFullYear();
            });
          }),
          (e.hour = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getHours();
            });
          }),
          (e.second = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getSeconds();
            });
          }),
          (e.millisecond = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getMilliseconds();
            });
          }),
          (e.minute = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getMinutes();
            });
          }),
          (e.week = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 2);
              const i = (0, r.A)(n[0]);
              if (null === i) return NaN;
              const s = (0, r.t)((0, r.C)(n[1], 0));
              if (s < 0 || s > 6) throw new Error('Invalid Parameter');
              const o = i.getDate(),
                a = i.getMonth(),
                l = i.getFullYear(),
                c = i.getDay(),
                h = u(o, a, l) - 1,
                f = Math.floor(h / 7);
              return c - s + (c - s < 0 ? 7 : 0) < h - 7 * f ? f + 1 : f;
            });
          }),
          (e.weekday = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getDay();
            });
          }),
          (e.isoweekday = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              if (null === i) return NaN;
              let s = i.getDay();
              return 0 === s && (s = 7), s;
            });
          }),
          (e.isomonth = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : i.getMonth() + 1;
            });
          }),
          (e.isoweek = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              if (null === i) return NaN;
              const s =
                a(i).getTime() -
                (function (e) {
                  const t = o(e),
                    n = new Date(0);
                  return n.setFullYear(t, 0, 4), n.setHours(0, 0, 0, 0), a(n);
                })(i).getTime();
              return Math.round(s / 6048e5) + 1;
            });
          }),
          (e.isoyear = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = (0, r.A)(n[0]);
              return null === i ? NaN : o(i);
            });
          }),
          (e.date = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, r.p)(n, 0, 7), 3 === n.length))
                return h(
                  new Date(
                    (0, r.t)(n[0]),
                    (0, r.t)(n[1]),
                    (0, r.t)(n[2]),
                    0,
                    0,
                    0,
                    0,
                  ),
                );
              if (4 === n.length)
                return h(
                  new Date(
                    (0, r.t)(n[0]),
                    (0, r.t)(n[1]),
                    (0, r.t)(n[2]),
                    (0, r.t)(n[3]),
                    0,
                    0,
                    0,
                  ),
                );
              if (5 === n.length)
                return h(
                  new Date(
                    (0, r.t)(n[0]),
                    (0, r.t)(n[1]),
                    (0, r.t)(n[2]),
                    (0, r.t)(n[3]),
                    (0, r.t)(n[4]),
                    0,
                    0,
                  ),
                );
              if (6 === n.length)
                return h(
                  new Date(
                    (0, r.t)(n[0]),
                    (0, r.t)(n[1]),
                    (0, r.t)(n[2]),
                    (0, r.t)(n[3]),
                    (0, r.t)(n[4]),
                    (0, r.t)(n[5]),
                    0,
                  ),
                );
              if (7 === n.length)
                return h(
                  new Date(
                    (0, r.t)(n[0]),
                    (0, r.t)(n[1]),
                    (0, r.t)(n[2]),
                    (0, r.t)(n[3]),
                    (0, r.t)(n[4]),
                    (0, r.t)(n[5]),
                    (0, r.t)(n[6]),
                  ),
                );
              if (2 === n.length) {
                let e,
                  t = (0, r.d)(n[1]);
                return '' === t
                  ? null
                  : ((t = (0, r.D)(t)),
                    (e =
                      'X' === t
                        ? s.ou.fromSeconds((0, r.t)(n[0]))
                        : 'x' === t
                        ? s.ou.fromMillis((0, r.t)(n[0]))
                        : s.ou.fromFormat((0, r.d)(n[0]), t, {
                            locale: (0, i.Kd)(),
                            numberingSystem: 'latn',
                          })),
                    e.isValid ? e.toJSDate() : null);
              }
              if (1 === n.length) {
                if ((0, r.f)(n[0])) {
                  if (
                    '' ===
                    n[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                  )
                    return null;
                  if (!0 === /^[0-9][0-9][0-9][0-9]$/.test(n[0]))
                    return (0, r.A)(n[0] + '-01-01');
                }
                const e = (0, r.t)(n[0]);
                return !1 === isNaN(e) ? h(new Date(e)) : (0, r.A)(n[0]);
              }
              return 0 === n.length ? new Date() : void 0;
            });
          }),
          (e.datediff = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 2, 3);
              const i = (0, r.E)(n[0]),
                s = (0, r.E)(n[1]);
              if (null === i || null === s) return NaN;
              switch ((0, r.d)(n[2]).toLowerCase()) {
                case 'days':
                case 'day':
                case 'd':
                  return i.diff(s, 'days').days;
                case 'months':
                case 'month':
                  return i.diff(s, 'months').months;
                case 'minutes':
                case 'minute':
                case 'm':
                  return 'M' === n[2]
                    ? i.diff(s, 'months').months
                    : i.diff(s, 'minutes').minutes;
                case 'seconds':
                case 'second':
                case 's':
                  return i.diff(s, 'seconds').seconds;
                case 'milliseconds':
                case 'millisecond':
                case 'ms':
                default:
                  return i.diff(s).milliseconds;
                case 'hours':
                case 'hour':
                case 'h':
                  return i.diff(s, 'hours').hours;
                case 'years':
                case 'year':
                case 'y':
                  return i.diff(s, 'years').years;
              }
            });
          }),
          (e.dateadd = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 2, 3);
              const i = (0, r.E)(n[0]);
              if (null === i) return null;
              let s = (0, r.t)(n[1]);
              if (isNaN(s)) return i.toJSDate();
              let o = 'milliseconds';
              switch ((0, r.d)(n[2]).toLowerCase()) {
                case 'days':
                case 'day':
                case 'd':
                  (o = 'days'), (s = (0, r.F)(s));
                  break;
                case 'months':
                case 'month':
                  (o = 'months'), (s = (0, r.F)(s));
                  break;
                case 'minutes':
                case 'minute':
                case 'm':
                  o = 'M' === n[2] ? 'months' : 'minutes';
                  break;
                case 'seconds':
                case 'second':
                case 's':
                  o = 'seconds';
                  break;
                case 'milliseconds':
                case 'millisecond':
                case 'ms':
                  o = 'milliseconds';
                  break;
                case 'hours':
                case 'hour':
                case 'h':
                  o = 'hours';
                  break;
                case 'years':
                case 'year':
                case 'y':
                  o = 'years';
              }
              return i.plus({ [o]: s }).toJSDate();
            });
          });
      }
    },
    24240: (e, t, n) => {
      n.d(t, { t: () => o });
      var r = n(61363);
      function i(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t += e[n];
        return t / e.length;
      }
      function s(e) {
        const t = i(e);
        let n = 0;
        for (let r = 0; r < e.length; r++) n += (t - e[r]) ** 2;
        return n / e.length;
      }
      function o(e, t, n = 1e3) {
        switch (e.toLowerCase()) {
          case 'distinct':
            return (function (e, t) {
              const n = [],
                i = {},
                s = [];
              for (let o = 0; o < e.length; o++) {
                if (void 0 !== e[o] && null !== e[o] && e[o] !== r.v) {
                  const t = e[o];
                  if ((0, r.j)(t) || (0, r.f)(t))
                    void 0 === i[t] && (n.push(t), (i[t] = 1));
                  else {
                    let e = !1;
                    for (let n = 0; n < s.length; n++)
                      !0 === (0, r.e)(s[n], t) && (e = !0);
                    !1 === e && (s.push(t), n.push(t));
                  }
                }
                if (n.length >= t && -1 !== t) return n;
              }
              return n;
            })(t, n);
          case 'avg':
          case 'mean':
            return i((0, r.W)(t));
          case 'min':
            return Math.min.apply(Math, (0, r.W)(t));
          case 'sum':
            return (function (e) {
              let t = 0;
              for (let n = 0; n < e.length; n++) t += e[n];
              return t;
            })((0, r.W)(t));
          case 'max':
            return Math.max.apply(Math, (0, r.W)(t));
          case 'stdev':
          case 'stddev':
            return Math.sqrt(s((0, r.W)(t)));
          case 'var':
          case 'variance':
            return s((0, r.W)(t));
          case 'count':
            return t.length;
        }
        return 0;
      }
    },
    12834: (e, t, n) => {
      n.d(t, { r: () => g });
      var r = n(33586),
        i = n(15274),
        s = n(25785),
        o = n(61363),
        a = n(6570),
        u = n(9361),
        l = n(65091),
        c = n(13473),
        h = n(38913),
        f = n(58901),
        p = n(71201),
        d = n(33955),
        m = n(86662);
      function D(e) {
        return e && 'esri.arcade.Feature' === e.arcadeDeclaredClass;
      }
      function g(e, t) {
        (e.ringisclockwise = function (e, n) {
          return t(e, n, function (e, t, n) {
            (0, o.p)(n, 1, 1);
            let r = [],
              i = !1,
              a = !1;
            if (null === n[0]) return !1;
            if ((0, o.a)(n[0])) {
              for (const e of n[0]) {
                if (!(e instanceof c.Z)) throw new Error('Invalid Argument');
                r.push(
                  e.hasZ
                    ? e.hasM
                      ? [e.x, e.y, e.z, e.m]
                      : [e.x, e.y, e.z]
                    : [e.x, e.y],
                );
              }
              r.length > 0 && ((i = n[0][0].hasZ), (a = n[0][0].hasM));
            } else if (n[0] instanceof s.Z)
              (r = n[0]._elements),
                r.length > 0 && ((i = n[0]._hasZ), (a = n[0]._hasM));
            else {
              if (!(0, o.b)(n[0])) throw new Error('Invalid Argument');
              for (const e of n[0].toArray()) {
                if (!(e instanceof c.Z)) throw new Error('Invalid Argument');
                r.push(
                  e.hasZ
                    ? e.hasM
                      ? [e.x, e.y, e.z, e.m]
                      : [e.x, e.y, e.z]
                    : [e.x, e.y],
                );
              }
              r.length > 0 && ((i = n[0].get(0).hasZ), (a = n[0].get(0).hasM));
            }
            return !(r.length < 3) && (0, m.bu)(r, a, i);
          });
        }),
          (e.polygon = function (e, n) {
            return t(e, n, function (t, n, s) {
              (0, o.p)(s, 1, 1);
              let a = null;
              if (s[0] instanceof r.Z) {
                if (
                  ((a = (0, o.s)(
                    i.Z.parseGeometryFromDictionary(s[0]),
                    e.spatialReference,
                  )),
                  a instanceof h.Z == 0)
                )
                  throw new Error('Illegal Parameter');
              } else a = s[0] instanceof h.Z ? (0, d.im)(s[0].toJSON()) : (0, o.s)(new h.Z(JSON.parse(s[0])), e.spatialReference);
              if (
                null !== a &&
                !1 === a.spatialReference.equals(e.spatialReference)
              )
                throw new Error(
                  'Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.',
                );
              return (0, o.G)(a);
            });
          }),
          (e.polyline = function (e, n) {
            return t(e, n, function (t, n, s) {
              (0, o.p)(s, 1, 1);
              let a = null;
              if (s[0] instanceof r.Z) {
                if (
                  ((a = (0, o.s)(
                    i.Z.parseGeometryFromDictionary(s[0]),
                    e.spatialReference,
                  )),
                  a instanceof f.Z == 0)
                )
                  throw new Error('Illegal Parameter');
              } else a = s[0] instanceof f.Z ? (0, d.im)(s[0].toJSON()) : (0, o.s)(new f.Z(JSON.parse(s[0])), e.spatialReference);
              if (
                null !== a &&
                !1 === a.spatialReference.equals(e.spatialReference)
              )
                throw new Error(
                  'Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.',
                );
              return (0, o.G)(a);
            });
          }),
          (e.point = function (e, n) {
            return t(e, n, function (t, n, s) {
              (0, o.p)(s, 1, 1);
              let a = null;
              if (s[0] instanceof r.Z) {
                if (
                  ((a = (0, o.s)(
                    i.Z.parseGeometryFromDictionary(s[0]),
                    e.spatialReference,
                  )),
                  a instanceof c.Z == 0)
                )
                  throw new Error('Illegal Parameter');
              } else a = s[0] instanceof c.Z ? (0, d.im)(s[0].toJSON()) : (0, o.s)(new c.Z(JSON.parse(s[0])), e.spatialReference);
              if (
                null !== a &&
                !1 === a.spatialReference.equals(e.spatialReference)
              )
                throw new Error(
                  'Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.',
                );
              return (0, o.G)(a);
            });
          }),
          (e.multipoint = function (e, n) {
            return t(e, n, function (t, n, s) {
              (0, o.p)(s, 1, 1);
              let a = null;
              if (s[0] instanceof r.Z) {
                if (
                  ((a = (0, o.s)(
                    i.Z.parseGeometryFromDictionary(s[0]),
                    e.spatialReference,
                  )),
                  a instanceof l.Z == 0)
                )
                  throw new Error('Illegal Parameter');
              } else a = s[0] instanceof l.Z ? (0, d.im)(s[0].toJSON()) : (0, o.s)(new l.Z(JSON.parse(s[0])), e.spatialReference);
              if (
                null !== a &&
                !1 === a.spatialReference.equals(e.spatialReference)
              )
                throw new Error(
                  'Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.',
                );
              return (0, o.G)(a);
            });
          }),
          (e.extent = function (e, n) {
            return t(e, n, function (t, n, s) {
              (s = (0, o.H)(s)), (0, o.p)(s, 1, 1);
              let u = null;
              if (s[0] instanceof r.Z)
                u = (0, o.s)(
                  i.Z.parseGeometryFromDictionary(s[0]),
                  e.spatialReference,
                );
              else if (s[0] instanceof c.Z) {
                const e = {
                    xmin: s[0].x,
                    ymin: s[0].y,
                    xmax: s[0].x,
                    ymax: s[0].y,
                    spatialReference: s[0].spatialReference.toJSON(),
                  },
                  t = s[0];
                t.hasZ
                  ? ((e.zmin = t.z), (e.zmax = t.z))
                  : t.hasM && ((e.mmin = t.m), (e.mmax = t.m)),
                  (u = (0, d.im)(e));
              } else
                u =
                  s[0] instanceof h.Z ||
                  s[0] instanceof f.Z ||
                  s[0] instanceof l.Z
                    ? (0, d.im)(s[0].extent.toJSON())
                    : s[0] instanceof a.Z
                    ? (0, d.im)(s[0].toJSON())
                    : (0, o.s)(new a.Z(JSON.parse(s[0])), e.spatialReference);
              if (
                null !== u &&
                !1 === u.spatialReference.equals(e.spatialReference)
              )
                throw new Error(
                  'Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.',
                );
              return (0, o.G)(u);
            });
          }),
          (e.geometry = function (e, n) {
            return t(e, n, function (t, n, s) {
              (0, o.p)(s, 1, 1);
              let a = null;
              if (null === s[0]) return null;
              if (
                ((a = D(s[0])
                  ? (0, o.s)(s[0].geometry(), e.spatialReference)
                  : s[0] instanceof r.Z
                  ? (0, o.s)(
                      i.Z.parseGeometryFromDictionary(s[0]),
                      e.spatialReference,
                    )
                  : (0, o.s)((0, d.im)(JSON.parse(s[0])), e.spatialReference)),
                null !== a &&
                  !1 === a.spatialReference.equals(e.spatialReference))
              )
                throw new Error(
                  'Cannot create Geometry in this SpatialReference. Engine is using a different spatial reference.',
                );
              return (0, o.G)(a);
            });
          }),
          (e.setgeometry = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 2, 2), !D(n[0])))
                throw new Error('Illegal Argument');
              if (!0 === n[0].immutable)
                throw new Error('Feature is Immutable');
              if (!(n[1] instanceof u.Z || null === n[1]))
                throw new Error('Illegal Argument');
              return (n[0]._geometry = n[1]), o.v;
            });
          }),
          (e.feature = function (e, n) {
            return t(e, n, function (t, n, s) {
              if (0 === s.length) throw new Error('Missing Parameters');
              let a = null;
              if (1 === s.length)
                if ((0, o.f)(s[0])) a = i.Z.fromJson(JSON.parse(s[0]));
                else if (D(s[0])) a = i.Z.createFromArcadeFeature(s[0]);
                else if (s[0] instanceof u.Z)
                  a = i.Z.createFromGraphicLikeObject(s[0], null, null);
                else {
                  if (!(s[0] instanceof r.Z))
                    throw new Error('Illegal Argument');
                  {
                    let e = s[0].hasField('geometry')
                        ? s[0].field('geometry')
                        : null,
                      t = s[0].hasField('attributes')
                        ? s[0].field('attributes')
                        : null;
                    null !== e &&
                      e instanceof r.Z &&
                      (e = i.Z.parseGeometryFromDictionary(e)),
                      null !== t && (t = i.Z.parseAttributesFromDictionary(t)),
                      (a = i.Z.createFromGraphicLikeObject(e, t, null));
                  }
                }
              else if (2 === s.length) {
                let e = null,
                  t = null;
                if (null !== s[0])
                  if (s[0] instanceof u.Z) e = s[0];
                  else {
                    if (!(e instanceof r.Z))
                      throw new Error('Illegal Argument');
                    e = i.Z.parseGeometryFromDictionary(s[0]);
                  }
                if (null !== s[1]) {
                  if (!(s[1] instanceof r.Z))
                    throw new Error('Illegal Argument');
                  t = i.Z.parseAttributesFromDictionary(s[1]);
                }
                a = i.Z.createFromGraphicLikeObject(e, t, null);
              } else {
                let e = null;
                const t = {};
                if (null !== s[0])
                  if (s[0] instanceof u.Z) e = s[0];
                  else {
                    if (!(e instanceof r.Z))
                      throw new Error('Illegal Argument');
                    e = i.Z.parseGeometryFromDictionary(s[0]);
                  }
                for (let e = 1; e < s.length; e += 2) {
                  const n = (0, o.d)(s[e]),
                    r = s[e + 1];
                  if (
                    !(
                      null == r ||
                      (0, o.f)(r) ||
                      isNaN(r) ||
                      (0, o.o)(r) ||
                      (0, o.j)(r) ||
                      (0, o.i)(r)
                    )
                  )
                    throw new Error('Illegal Argument');
                  if ((0, o.c)(r) || !1 === (0, o.y)(r))
                    throw new Error('Illegal Argument');
                  t[n] = r === o.v ? null : r;
                }
                a = i.Z.createFromGraphicLikeObject(e, t, null);
              }
              return (
                (a._geometry = (0, o.s)(a.geometry(), e.spatialReference)),
                (a.immutable = !1),
                a
              );
            });
          }),
          (e.dictionary = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (0 === n.length) {
                const e = new r.Z();
                return (e.immutable = !1), e;
              }
              if (1 === n.length && (0, o.f)(n[0]))
                try {
                  const e = JSON.parse(n[0]),
                    t = r.Z.convertObjectToArcadeDictionary(e, !1);
                  return (t.immutable = !1), t;
                } catch (e) {
                  throw new Error('Missing Parameters or Illegal Json');
                }
              if (n.length % 2 != 0) throw new Error('Missing Parameters');
              const i = {};
              for (let e = 0; e < n.length; e += 2) {
                const t = (0, o.d)(n[e]),
                  r = n[e + 1];
                if (
                  !(
                    null == r ||
                    (0, o.f)(r) ||
                    isNaN(r) ||
                    (0, o.o)(r) ||
                    (0, o.j)(r) ||
                    (0, o.i)(r) ||
                    (0, o.a)(r) ||
                    (0, o.b)(r)
                  )
                )
                  throw new Error('Illegal Argument');
                if ((0, o.c)(r)) throw new Error('Illegal Argument');
                i[t] = r === o.v ? null : r;
              }
              const s = new r.Z(i);
              return (s.immutable = !1), s;
            });
          }),
          (e.haskey = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 2, 2);
              const i = (0, o.d)(n[1]);
              if (D(n[0])) return n[0].hasField(i);
              if (n[0] instanceof r.Z) return n[0].hasField(i);
              throw new Error('Illegal Argument');
            });
          }),
          (e.indexof = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 2, 2);
              const r = n[1];
              if ((0, o.a)(n[0])) {
                for (let e = 0; e < n[0].length; e++)
                  if ((0, o.e)(r, n[0][e])) return e;
                return -1;
              }
              if ((0, o.b)(n[0])) {
                const e = n[0].length();
                for (let t = 0; t < e; t++)
                  if ((0, o.e)(r, n[0].get(t))) return t;
                return -1;
              }
              throw new Error('Illegal Argument');
            });
          }),
          (e.angle = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (
                ((n = (0, o.H)(n)), (0, o.p)(n, 2, 3), !(n[0] instanceof c.Z))
              )
                throw new Error('Illegal Argument');
              if (!(n[1] instanceof c.Z)) throw new Error('Illegal Argument');
              if (n.length > 2 && !(n[2] instanceof c.Z))
                throw new Error('Illegal Argument');
              return 2 === n.length
                ? (0, p.RI)(n[0], n[1])
                : (0, p.ws)(n[0], n[1], n[2]);
            });
          }),
          (e.bearing = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (
                ((n = (0, o.H)(n)), (0, o.p)(n, 2, 3), !(n[0] instanceof c.Z))
              )
                throw new Error('Illegal Argument');
              if (!(n[1] instanceof c.Z)) throw new Error('Illegal Argument');
              if (n.length > 2 && !(n[2] instanceof c.Z))
                throw new Error('Illegal Argument');
              return 2 === n.length
                ? (0, p.B9)(n[0], n[1])
                : (0, p.Es)(n[0], n[1], n[2]);
            });
          }),
          (e.isselfintersecting = function (e, n) {
            return t(e, n, function (t, n, r) {
              (r = (0, o.H)(r)), (0, o.p)(r, 1, 1);
              let i = r[0];
              if (i instanceof h.Z) return i.isSelfIntersecting;
              if (i instanceof f.Z) return (i = i.paths), (0, p.nB)(i);
              if (i instanceof l.Z) {
                const e = i.points;
                for (let t = 0; t < e.length; t++)
                  for (let n = 0; n < e.length; n++)
                    if (n !== t) {
                      let r = !0;
                      for (let i = 0; i < e[t].length; i++)
                        if (e[t][i] !== e[n][i]) {
                          r = !1;
                          break;
                        }
                      if (!0 === r) return !0;
                    }
              }
              return (
                !(!(0, o.a)(i) && !(0, o.b)(i)) &&
                ((i = (0, o.J)(i, e.spatialReference)),
                null !== i && (i = i.paths),
                (0, p.nB)(i))
              );
            });
          });
      }
    },
    18811: (e, t, n) => {
      n.r(t),
        n.d(t, { registerFunctions: () => E, setGeometryEngine: () => g });
      var r = n(40330),
        i = n(77286),
        s = n(61363),
        o = n(71201),
        a = n(6570),
        u = n(9361),
        l = n(65091),
        c = n(13473),
        h = n(38913),
        f = n(58901),
        p = n(33955),
        d = n(67900);
      let m = null;
      function D(e) {
        return 0 === r.i8.indexOf('4.')
          ? h.Z.fromExtent(e)
          : new h.Z({
              spatialReference: e.spatialReference,
              rings: [
                [
                  [e.xmin, e.ymin],
                  [e.xmin, e.ymax],
                  [e.xmax, e.ymax],
                  [e.xmax, e.ymin],
                  [e.xmin, e.ymin],
                ],
              ],
            });
      }
      function g(e) {
        m = e;
      }
      function y(e, t) {
        if (
          'polygon' !== e.type &&
          'polyline' !== e.type &&
          'extent' !== e.type
        )
          return 0;
        let n = 1;
        (e.spatialReference.vcsWkid || e.spatialReference.latestVcsWkid) &&
          (n = (0, o._R)(e.spatialReference) / (0, d.c9)(e.spatialReference));
        let r = 0;
        if ('polyline' === e.type)
          for (const t of e.paths)
            for (let e = 1; e < t.length; e++)
              r += (0, o.AW)(t[e], t[e - 1], n);
        else if ('polygon' === e.type)
          for (const t of e.rings) {
            for (let e = 1; e < t.length; e++)
              r += (0, o.AW)(t[e], t[e - 1], n);
            (t[0][0] !== t[t.length - 1][0] ||
              t[0][1] !== t[t.length - 1][1] ||
              (void 0 !== t[0][2] && t[0][2] !== t[t.length - 1][2])) &&
              (r += (0, o.AW)(t[0], t[t.length - 1], n));
          }
        else
          'extent' === e.type &&
            ((r += 2 * (0, o.AW)([e.xmin, e.ymin, 0], [e.xmax, e.ymin, 0], n)),
            (r += 2 * (0, o.AW)([e.xmin, e.ymin, 0], [e.xmin, e.ymax, 0], n)),
            (r *= 2),
            (r +=
              4 * Math.abs((0, s.C)(e.zmax, 0) * n - (0, s.C)(e.zmin, 0) * n)));
        const i = new f.Z({
          hasZ: !1,
          hasM: !1,
          spatialReference: e.spatialReference,
          paths: [
            [0, 0],
            [0, r],
          ],
        });
        return m.planarLength(i, t);
      }
      function E(e, t) {
        function n(e) {
          if (((0, s.p)(e, 2, 2), e[0] instanceof u.Z && e[1] instanceof u.Z));
          else if (e[0] instanceof u.Z && null === e[1]);
          else if (e[1] instanceof u.Z && null === e[0]);
          else if (null !== e[0] || null !== e[1])
            throw new Error('Illegal Argument');
        }
        (e.disjoint = function (e, r) {
          return t(e, r, function (e, t, r) {
            return (
              n((r = (0, s.H)(r))),
              null === r[0] || null === r[1] || m.disjoint(r[0], r[1])
            );
          });
        }),
          (e.intersects = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null !== r[1] && m.intersects(r[0], r[1])
              );
            });
          }),
          (e.touches = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null !== r[1] && m.touches(r[0], r[1])
              );
            });
          }),
          (e.crosses = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null !== r[1] && m.crosses(r[0], r[1])
              );
            });
          }),
          (e.within = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null !== r[1] && m.within(r[0], r[1])
              );
            });
          }),
          (e.contains = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null !== r[1] && m.contains(r[0], r[1])
              );
            });
          }),
          (e.overlaps = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null !== r[1] && m.overlaps(r[0], r[1])
              );
            });
          }),
          (e.equals = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (
                (0, s.p)(n, 2, 2),
                n[0] === n[1] ||
                  (n[0] instanceof u.Z && n[1] instanceof u.Z
                    ? m.equals(n[0], n[1])
                    : !(!(0, s.o)(n[0]) || !(0, s.o)(n[1])) &&
                      n[0].getTime() === n[1].getTime())
              );
            });
          }),
          (e.relate = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (
                ((n = (0, s.H)(n)),
                (0, s.p)(n, 3, 3),
                n[0] instanceof u.Z && n[1] instanceof u.Z)
              )
                return m.relate(n[0], n[1], (0, s.d)(n[2]));
              if (n[0] instanceof u.Z && null === n[1]) return !1;
              if (n[1] instanceof u.Z && null === n[0]) return !1;
              if (null === n[0] && null === n[1]) return !1;
              throw new Error('Illegal Argument');
            });
          }),
          (e.intersection = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null === r[0] || null === r[1] ? null : m.intersect(r[0], r[1])
              );
            });
          }),
          (e.union = function (e, n) {
            return t(e, n, function (t, n, r) {
              const o = [];
              if (0 === (r = (0, s.H)(r)).length)
                throw new Error(
                  'Function called with wrong number of Parameters',
                );
              if (1 === r.length)
                if ((0, s.a)(r[0])) {
                  const e = (0, s.H)(r[0]);
                  for (let t = 0; t < e.length; t++)
                    if (null !== e[t]) {
                      if (!(e[t] instanceof u.Z))
                        throw new Error('Illegal Argument');
                      o.push(e[t]);
                    }
                } else {
                  if (!(0, s.b)(r[0])) {
                    if (r[0] instanceof u.Z)
                      return (0, s.s)((0, i.r1)(r[0]), e.spatialReference);
                    if (null === r[0]) return null;
                    throw new Error('Illegal Argument');
                  }
                  {
                    const e = (0, s.H)(r[0].toArray());
                    for (let t = 0; t < e.length; t++)
                      if (null !== e[t]) {
                        if (!(e[t] instanceof u.Z))
                          throw new Error('Illegal Argument');
                        o.push(e[t]);
                      }
                  }
                }
              else
                for (let e = 0; e < r.length; e++)
                  if (null !== r[e]) {
                    if (!(r[e] instanceof u.Z))
                      throw new Error('Illegal Argument');
                    o.push(r[e]);
                  }
              return 0 === o.length ? null : m.union(o);
            });
          }),
          (e.difference = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null !== r[0] && null === r[1]
                  ? (0, i.r1)(r[0])
                  : null === r[0]
                  ? null
                  : m.difference(r[0], r[1])
              );
            });
          }),
          (e.symmetricdifference = function (e, r) {
            return t(e, r, function (e, t, r) {
              return (
                n((r = (0, s.H)(r))),
                null === r[0] && null === r[1]
                  ? null
                  : null === r[0]
                  ? (0, i.r1)(r[1])
                  : null === r[1]
                  ? (0, i.r1)(r[0])
                  : m.symmetricDifference(r[0], r[1])
              );
            });
          }),
          (e.clip = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (
                ((n = (0, s.H)(n)),
                (0, s.p)(n, 2, 2),
                !(n[1] instanceof a.Z) && null !== n[1])
              )
                throw new Error('Illegal Argument');
              if (null === n[0]) return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return null === n[1] ? null : m.clip(n[0], n[1]);
            });
          }),
          (e.cut = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (
                ((n = (0, s.H)(n)),
                (0, s.p)(n, 2, 2),
                !(n[1] instanceof f.Z) && null !== n[1])
              )
                throw new Error('Illegal Argument');
              if (null === n[0]) return [];
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return null === n[1] ? [(0, i.r1)(n[0])] : m.cut(n[0], n[1]);
            });
          }),
          (e.area = function (e, n) {
            return t(e, n, function (t, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const t = (0, s.K)(r[0], e.spatialReference);
                return null === t
                  ? 0
                  : m.planarArea(t, (0, i.EI)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return m.planarArea(r[0], (0, i.EI)((0, s.C)(r[1], -1)));
            });
          }),
          (e.areageodetic = function (e, n) {
            return t(e, n, function (t, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const t = (0, s.K)(r[0], e.spatialReference);
                return null === t
                  ? 0
                  : m.geodesicArea(t, (0, i.EI)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return m.geodesicArea(r[0], (0, i.EI)((0, s.C)(r[1], -1)));
            });
          }),
          (e.length = function (e, n) {
            return t(e, n, function (t, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const t = (0, s.J)(r[0], e.spatialReference);
                return null === t
                  ? 0
                  : m.planarLength(t, (0, i.Lz)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return m.planarLength(r[0], (0, i.Lz)((0, s.C)(r[1], -1)));
            });
          }),
          (e.length3d = function (e, n) {
            return t(e, n, function (t, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const t = (0, s.J)(r[0], e.spatialReference);
                return null === t
                  ? 0
                  : !0 === t.hasZ
                  ? y(t, (0, i.Lz)((0, s.C)(r[1], -1)))
                  : m.planarLength(t, (0, i.Lz)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return !0 === r[0].hasZ
                ? y(r[0], (0, i.Lz)((0, s.C)(r[1], -1)))
                : m.planarLength(r[0], (0, i.Lz)((0, s.C)(r[1], -1)));
            });
          }),
          (e.lengthgeodetic = function (e, n) {
            return t(e, n, function (t, n, r) {
              if (((0, s.p)(r, 1, 2), null === (r = (0, s.H)(r))[0])) return 0;
              if ((0, s.a)(r[0]) || (0, s.b)(r[0])) {
                const t = (0, s.J)(r[0], e.spatialReference);
                return null === t
                  ? 0
                  : m.geodesicLength(t, (0, i.Lz)((0, s.C)(r[1], -1)));
              }
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return m.geodesicLength(r[0], (0, i.Lz)((0, s.C)(r[1], -1)));
            });
          }),
          (e.distance = function (e, n) {
            return t(e, n, function (t, n, r) {
              (r = (0, s.H)(r)), (0, s.p)(r, 2, 3);
              let o = r[0];
              ((0, s.a)(r[0]) || (0, s.b)(r[0])) &&
                (o = (0, s.L)(r[0], e.spatialReference));
              let a = r[1];
              if (
                (((0, s.a)(r[1]) || (0, s.b)(r[1])) &&
                  (a = (0, s.L)(r[1], e.spatialReference)),
                !(o instanceof u.Z))
              )
                throw new Error('Illegal Argument');
              if (!(a instanceof u.Z)) throw new Error('Illegal Argument');
              return m.distance(o, a, (0, i.Lz)((0, s.C)(r[2], -1)));
            });
          }),
          (e.distancegeodetic = function (e, n) {
            return t(e, n, function (e, t, n) {
              (n = (0, s.H)(n)), (0, s.p)(n, 2, 3);
              const r = n[0],
                o = n[1];
              if (!(r instanceof c.Z)) throw new Error('Illegal Argument');
              if (!(o instanceof c.Z)) throw new Error('Illegal Argument');
              const a = new f.Z({
                paths: [],
                spatialReference: r.spatialReference,
              });
              return (
                a.addPath([r, o]),
                m.geodesicLength(a, (0, i.Lz)((0, s.C)(n[2], -1)))
              );
            });
          }),
          (e.densify = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              if (r <= 0) throw new Error('Illegal Argument');
              return n[0] instanceof h.Z || n[0] instanceof f.Z
                ? m.densify(n[0], r, (0, i.Lz)((0, s.C)(n[2], -1)))
                : n[0] instanceof a.Z
                ? m.densify(D(n[0]), r, (0, i.Lz)((0, s.C)(n[2], -1)))
                : n[0];
            });
          }),
          (e.densifygeodetic = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              if (r <= 0) throw new Error('Illegal Argument');
              return n[0] instanceof h.Z || n[0] instanceof f.Z
                ? m.geodesicDensify(n[0], r, (0, i.Lz)((0, s.C)(n[2], -1)))
                : n[0] instanceof a.Z
                ? m.geodesicDensify(D(n[0]), r, (0, i.Lz)((0, s.C)(n[2], -1)))
                : n[0];
            });
          }),
          (e.generalize = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 4), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              return m.generalize(
                n[0],
                r,
                (0, s.z)((0, s.C)(n[2], !0)),
                (0, i.Lz)((0, s.C)(n[3], -1)),
              );
            });
          }),
          (e.buffer = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              return 0 === r
                ? (0, i.r1)(n[0])
                : m.buffer(n[0], r, (0, i.Lz)((0, s.C)(n[2], -1)));
            });
          }),
          (e.buffergeodetic = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 3), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              return 0 === r
                ? (0, i.r1)(n[0])
                : m.geodesicBuffer(n[0], r, (0, i.Lz)((0, s.C)(n[2], -1)));
            });
          }),
          (e.offset = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 2, 6), null === n[0]))
                return null;
              if (!(n[0] instanceof h.Z || n[0] instanceof f.Z))
                throw new Error('Illegal Argument');
              const r = (0, s.t)(n[1]);
              if (isNaN(r)) throw new Error('Illegal Argument');
              const o = (0, s.t)((0, s.C)(n[4], 10));
              if (isNaN(o)) throw new Error('Illegal Argument');
              const a = (0, s.t)((0, s.C)(n[5], 0));
              if (isNaN(a)) throw new Error('Illegal Argument');
              return m.offset(
                n[0],
                r,
                (0, i.Lz)((0, s.C)(n[2], -1)),
                (0, s.d)((0, s.C)(n[3], 'round')).toLowerCase(),
                o,
                a,
              );
            });
          }),
          (e.rotate = function (e, n) {
            return t(e, n, function (e, t, n) {
              (n = (0, s.H)(n)), (0, s.p)(n, 2, 3);
              let r = n[0];
              if (null === r) return null;
              if (!(r instanceof u.Z)) throw new Error('Illegal Argument');
              r instanceof a.Z && (r = h.Z.fromExtent(r));
              const i = (0, s.t)(n[1]);
              if (isNaN(i)) throw new Error('Illegal Argument');
              const o = (0, s.C)(n[2], null);
              if (null === o) return m.rotate(r, i);
              if (o instanceof c.Z) return m.rotate(r, i, o);
              throw new Error('Illegal Argument');
            });
          }),
          (e.centroid = function (e, n) {
            return t(e, n, function (t, n, r) {
              if (((r = (0, s.H)(r)), (0, s.p)(r, 1, 1), null === r[0]))
                return null;
              let p = r[0];
              if (
                (((0, s.a)(r[0]) || (0, s.b)(r[0])) &&
                  (p = (0, s.L)(r[0], e.spatialReference)),
                null === p)
              )
                return null;
              if (!(p instanceof u.Z)) throw new Error('Illegal Argument');
              return p instanceof c.Z
                ? (0, s.s)((0, i.r1)(r[0]), e.spatialReference)
                : p instanceof h.Z
                ? p.centroid
                : p instanceof f.Z
                ? (0, o.s9)(p)
                : p instanceof l.Z
                ? (0, o.Ay)(p)
                : p instanceof a.Z
                ? p.center
                : null;
            });
          }),
          (e.multiparttosinglepart = function (e, n) {
            return t(e, n, function (t, n, r) {
              (r = (0, s.H)(r)), (0, s.p)(r, 1, 1);
              const o = [];
              if (null === r[0]) return null;
              if (!(r[0] instanceof u.Z)) throw new Error('Illegal Argument');
              if (r[0] instanceof c.Z)
                return [(0, s.s)((0, i.r1)(r[0]), e.spatialReference)];
              if (r[0] instanceof a.Z)
                return [(0, s.s)((0, i.r1)(r[0]), e.spatialReference)];
              const d = m.simplify(r[0]);
              if (d instanceof h.Z) {
                const e = [],
                  t = [];
                for (let n = 0; n < d.rings.length; n++)
                  if (d.isClockwise(d.rings[n])) {
                    const t = (0, p.im)({
                      rings: [d.rings[n]],
                      hasZ: !0 === d.hasZ,
                      hasM: !0 === d.hasM,
                      spatialReference: d.spatialReference.toJSON(),
                    });
                    e.push(t);
                  } else t.push({ ring: d.rings[n], pt: d.getPoint(n, 0) });
                for (let n = 0; n < t.length; n++)
                  for (let r = 0; r < e.length; r++)
                    if (e[r].contains(t[n].pt)) {
                      e[r].addRing(t[n].ring);
                      break;
                    }
                return e;
              }
              if (d instanceof f.Z) {
                const e = [];
                for (let t = 0; t < d.paths.length; t++) {
                  const n = (0, p.im)({
                    paths: [d.paths[t]],
                    hasZ: !0 === d.hasZ,
                    hasM: !0 === d.hasM,
                    spatialReference: d.spatialReference.toJSON(),
                  });
                  e.push(n);
                }
                return e;
              }
              if (r[0] instanceof l.Z) {
                const t = (0, s.s)((0, i.r1)(r[0]), e.spatialReference);
                for (let e = 0; e < t.points.length; e++) o.push(t.getPoint(e));
                return o;
              }
              return null;
            });
          }),
          (e.issimple = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 1, 1), null === n[0]))
                return !0;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return m.isSimple(n[0]);
            });
          }),
          (e.simplify = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((n = (0, s.H)(n)), (0, s.p)(n, 1, 1), null === n[0]))
                return null;
              if (!(n[0] instanceof u.Z)) throw new Error('Illegal Argument');
              return m.simplify(n[0]);
            });
          });
      }
    },
    38176: (e, t, n) => {
      n.d(t, { r: () => o });
      var r = n(61363),
        i = n(14808);
      function s(e, t, n) {
        return void 0 === n || 0 == +n
          ? Math[e](t)
          : ((t = +t),
            (n = +n),
            isNaN(t) || 'number' != typeof n || n % 1 != 0
              ? NaN
              : ((t = t.toString().split('e')),
                +(
                  (t = (t = Math[e](+(t[0] + 'e' + (t[1] ? +t[1] - n : -n))))
                    .toString()
                    .split('e'))[0] +
                  'e' +
                  (t[1] ? +t[1] + n : n)
                )));
      }
      function o(e, t) {
        function n(e, t, n) {
          const i = (0, r.t)(e);
          return isNaN(i)
            ? i
            : isNaN(t) || isNaN(n) || t > n
            ? NaN
            : i < t
            ? t
            : i > n
            ? n
            : i;
        }
        (e.number = function (e, n) {
          return t(e, n, function (e, t, n) {
            (0, r.p)(n, 1, 2);
            const s = n[0];
            if ((0, r.j)(s)) return s;
            if (null === s) return 0;
            if ((0, r.o)(s)) return Number(s);
            if ((0, r.i)(s)) return Number(s);
            if ((0, r.a)(s)) return NaN;
            if ('' === s) return Number(s);
            if (void 0 === s) return Number(s);
            if ((0, r.f)(s)) {
              if (void 0 !== n[1]) {
                let e = (0, r.M)(n[1], '‰', '');
                return (e = (0, r.M)(e, '¤', '')), (0, i.Qc)(s, { pattern: e });
              }
              return Number(s.trim());
            }
            return Number(s);
          });
        }),
          (e.abs = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.abs((0, r.t)(n[0]));
            });
          }),
          (e.acos = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.acos((0, r.t)(n[0]));
            });
          }),
          (e.asin = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.asin((0, r.t)(n[0]));
            });
          }),
          (e.atan = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.atan((0, r.t)(n[0]));
            });
          }),
          (e.atan2 = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (
                (0, r.p)(n, 2, 2), Math.atan2((0, r.t)(n[0]), (0, r.t)(n[1]))
              );
            });
          }),
          (e.ceil = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, r.p)(n, 1, 2), 2 === n.length)) {
                let e = (0, r.t)(n[1]);
                return isNaN(e) && (e = 0), s('ceil', (0, r.t)(n[0]), -1 * e);
              }
              return Math.ceil((0, r.t)(n[0]));
            });
          }),
          (e.round = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, r.p)(n, 1, 2), 2 === n.length)) {
                let e = (0, r.t)(n[1]);
                return isNaN(e) && (e = 0), s('round', (0, r.t)(n[0]), -1 * e);
              }
              return Math.round((0, r.t)(n[0]));
            });
          }),
          (e.floor = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, r.p)(n, 1, 2), 2 === n.length)) {
                let e = (0, r.t)(n[1]);
                return isNaN(e) && (e = 0), s('floor', (0, r.t)(n[0]), -1 * e);
              }
              return Math.floor((0, r.t)(n[0]));
            });
          }),
          (e.cos = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.cos((0, r.t)(n[0]));
            });
          }),
          (e.isnan = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), 'number' == typeof n[0] && isNaN(n[0]);
            });
          }),
          (e.exp = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.exp((0, r.t)(n[0]));
            });
          }),
          (e.log = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.log((0, r.t)(n[0]));
            });
          }),
          (e.pow = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 2, 2), (0, r.t)(n[0]) ** (0, r.t)(n[1]);
            });
          }),
          (e.random = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 0, 0), Math.random();
            });
          }),
          (e.sin = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.sin((0, r.t)(n[0]));
            });
          }),
          (e.sqrt = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.sqrt((0, r.t)(n[0]));
            });
          }),
          (e.tan = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, r.p)(n, 1, 1), Math.tan((0, r.t)(n[0]));
            });
          }),
          (e.defaultvalue = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (
                (0, r.p)(n, 2, 2),
                null === n[0] || '' === n[0] || void 0 === n[0] ? n[1] : n[0]
              );
            });
          }),
          (e.isempty = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (
                (0, r.p)(n, 1, 1),
                null === n[0] || '' === n[0] || void 0 === n[0]
              );
            });
          }),
          (e.boolean = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, r.p)(n, 1, 1);
              const i = n[0];
              return (0, r.z)(i);
            });
          }),
          (e.constrain = function (e, i) {
            return t(e, i, function (e, t, i) {
              (0, r.p)(i, 3, 3);
              const s = (0, r.t)(i[1]),
                o = (0, r.t)(i[2]);
              if ((0, r.a)(i[0])) {
                const e = [];
                for (const t of i[0]) e.push(n(t, s, o));
                return e;
              }
              if ((0, r.b)(i[0])) {
                const e = [];
                for (let t = 0; t < i[0].length(); t++)
                  e.push(n(i[0].get(t), s, o));
                return e;
              }
              return n(i[0], s, o);
            });
          });
      }
    },
    58130: (e, t, n) => {
      n.d(t, { r: () => o });
      var r = n(61363),
        i = n(24240);
      function s(e, t, n, s) {
        if (1 === s.length) {
          if ((0, r.a)(s[0])) return (0, i.t)(e, s[0], -1);
          if ((0, r.b)(s[0])) return (0, i.t)(e, s[0].toArray(), -1);
        }
        return (0, i.t)(e, s, -1);
      }
      function o(e, t) {
        (e.stdev = function (e, n) {
          return t(e, n, function (e, t, n) {
            return s('stdev', 0, 0, n);
          });
        }),
          (e.variance = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('variance', 0, 0, n);
            });
          }),
          (e.average = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('mean', 0, 0, n);
            });
          }),
          (e.mean = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('mean', 0, 0, n);
            });
          }),
          (e.sum = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('sum', 0, 0, n);
            });
          }),
          (e.min = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('min', 0, 0, n);
            });
          }),
          (e.max = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('max', 0, 0, n);
            });
          }),
          (e.distinct = function (e, n) {
            return t(e, n, function (e, t, n) {
              return s('distinct', 0, 0, n);
            });
          }),
          (e.count = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, r.p)(n, 1, 1), (0, r.a)(n[0]) || (0, r.f)(n[0])))
                return n[0].length;
              if ((0, r.b)(n[0])) return n[0].length();
              throw new Error('Invalid Parameters for Count');
            });
          });
      }
    },
    27360: (e, t, n) => {
      n.d(t, { r: () => fe });
      var r = n(28228),
        i = n(80692),
        s = n(33586),
        o = n(61363),
        a = n(90658);
      const u = (e) => (t, n, r) => ((r = r || 14), +e(t, n).toFixed(r)),
        l = (e, t) => e + t,
        c = (e, t) => e * t,
        h = (e, t) => e / t,
        f = (e, t, n) => u(l)(e, t, n),
        p = (e, t, n) => u(c)(e, t, n),
        d = (e, t, n) => u(h)(e, t, n),
        m = 360,
        D = 2 * Math.PI,
        g = 3600,
        y = 60,
        E = (180 * g) / Math.PI,
        A = 60 * m * y,
        x = 90 * g,
        C = 180 * g,
        w = String.fromCharCode(7501);
      function F(e) {
        if (!1 === (0, o.f)(e)) throw new Error('Invalid Parameter');
        return e;
      }
      function b(e, t) {
        const n = 10 ** t;
        return Math.round(e * n) / n;
      }
      function S(e) {
        const t =
          parseFloat(e.toString().replace(Math.trunc(e).toString(), '0')) *
          Math.sign(e);
        return e < 0
          ? { fraction: t, integer: Math.ceil(e) }
          : { fraction: t, integer: Math.floor(e) };
      }
      var N, v, I, T;
      function k(e, t) {
        switch (e) {
          case N.north:
            return 'SHORT' === t ? 'N' : 'North';
          case N.east:
            return 'SHORT' === t ? 'E' : 'East';
          case N.south:
            return 'SHORT' === t ? 'S' : 'South';
          case N.west:
            return 'SHORT' === t ? 'W' : 'West';
        }
      }
      function B(e, t, n) {
        for (; e.length < n; ) e = t + e;
        return e;
      }
      function _(e, t) {
        return e - Math.floor(e / t) * t;
      }
      function O(e) {
        switch (e) {
          case v.truncated_degrees:
          case v.decimal_degrees:
            return m;
          case v.radians:
            return D;
          case v.gradians:
            return 400;
          case v.seconds:
            return A;
          case v.fractional_degree_minutes:
            return 60;
          case v.fractional_minute_seconds:
            return y;
          default:
            throw new Error('Unnexpected evaluations');
        }
      }
      function R(e) {
        switch (e.toUpperCase().trim()) {
          case 'NORTH':
          case 'NORTHAZIMUTH':
          case 'NORTH AZIMUTH':
            return I.north_azimuth;
          case 'POLAR':
            return I.polar;
          case 'QUADRANT':
            return I.quadrant;
          case 'SOUTH':
          case 'SOUTHAZIMUTH':
          case 'SOUTH AZIMUTH':
            return I.south_azimuth;
        }
        throw new Error('Unsupported direction type');
      }
      function L(e) {
        switch (e.toUpperCase().trim()) {
          case 'D':
          case 'DD':
          case 'DECIMALDEGREE':
          case 'DECIMAL DEGREE':
          case 'DEGREE':
          case 'DECIMALDEGREES':
          case 'DECIMAL DEGREES':
          case 'DEGREES':
            return v.decimal_degrees;
          case 'DMS':
          case 'DEGREESMINUTESSECONDS':
          case 'DEGREES MINUTES SECONDS':
            return v.degrees_minutes_seconds;
          case 'R':
          case 'RAD':
          case 'RADS':
          case 'RADIAN':
          case 'RADIANS':
            return v.radians;
          case 'G':
          case 'GON':
          case 'GONS':
          case 'GRAD':
          case 'GRADS':
          case 'GRADIAN':
          case 'GRADIANS':
            return v.gradians;
        }
        throw new Error('Unsupported units');
      }
      !(function (e) {
        (e[(e.north = 0)] = 'north'),
          (e[(e.east = 1)] = 'east'),
          (e[(e.south = 2)] = 'south'),
          (e[(e.west = 3)] = 'west');
      })(N || (N = {})),
        (function (e) {
          (e[(e.decimal_degrees = 1)] = 'decimal_degrees'),
            (e[(e.seconds = 2)] = 'seconds'),
            (e[(e.degrees_minutes_seconds = 3)] = 'degrees_minutes_seconds'),
            (e[(e.radians = 4)] = 'radians'),
            (e[(e.gradians = 5)] = 'gradians'),
            (e[(e.truncated_degrees = 6)] = 'truncated_degrees'),
            (e[(e.fractional_degree_minutes = 7)] =
              'fractional_degree_minutes'),
            (e[(e.fractional_minute_seconds = 8)] =
              'fractional_minute_seconds');
        })(v || (v = {})),
        (function (e) {
          (e[(e.north_azimuth = 1)] = 'north_azimuth'),
            (e[(e.polar = 2)] = 'polar'),
            (e[(e.quadrant = 3)] = 'quadrant'),
            (e[(e.south_azimuth = 4)] = 'south_azimuth');
        })(I || (I = {})),
        (function (e) {
          (e[(e.meridian = 0)] = 'meridian'),
            (e[(e.direction = 1)] = 'direction');
        })(T || (T = {}));
      class M {
        constructor(e, t, n) {
          (this.m_degrees = e), (this.m_minutes = t), (this.m_seconds = n);
        }
        getField(e) {
          switch (e) {
            case v.decimal_degrees:
            case v.truncated_degrees:
              return this.m_degrees;
            case v.fractional_degree_minutes:
              return this.m_minutes;
            case v.seconds:
            case v.fractional_minute_seconds:
              return this.m_seconds;
            default:
              throw new Error('Unnexpected evaluation');
          }
        }
        static secondsToDMS(e) {
          const t = S(e).fraction;
          let n = S(e).integer;
          const r = Math.floor(n / g);
          n -= r * g;
          const i = Math.floor(n / y);
          return (n -= i * y), new M(r, i, n + t);
        }
        static numberToDms(e) {
          const t = S(e).fraction,
            n = S(e).integer,
            r = p(S(100 * t).fraction, 100),
            i = S(100 * t).integer;
          return new M(n, i, r);
        }
        format(e, t) {
          let n = b(this.m_seconds, t),
            r = this.m_minutes,
            i = this.m_degrees;
          if (e === v.seconds || e === v.fractional_minute_seconds)
            y <= n && ((n -= y), ++r),
              60 <= r && ((r = 0), ++i),
              m <= i && (i = 0);
          else if (e === v.fractional_degree_minutes)
            (n = 0),
              (r = 30 <= this.m_seconds ? this.m_minutes + 1 : this.m_minutes),
              (i = this.m_degrees),
              60 <= r && ((r = 0), ++i),
              m <= i && (i = 0);
          else if (e === v.decimal_degrees || e === v.truncated_degrees) {
            const e = d(this.m_seconds, g),
              t = d(this.m_minutes, 60);
            (i = Math.round(this.m_degrees + t + e)), (r = 0), (n = 0);
          }
          return new M(i, r, n);
        }
        static dmsToSeconds(e, t, n) {
          return e * g + t * y + n;
        }
      }
      class U {
        constructor(e, t, n) {
          (this.meridian = e), (this.angle = t), (this.direction = n);
        }
        fetchAzimuth(e) {
          return e === T.meridian ? this.meridian : this.direction;
        }
      }
      class Z {
        constructor(e) {
          this.m_angle = e;
        }
        static createFromAngleAndDirection(e, t) {
          return new Z(
            new z(
              Z._convertDirectionFormat(
                e.extractAngularUnits(v.seconds),
                t,
                I.north_azimuth,
              ),
            ),
          );
        }
        getAngle(e) {
          const t = this.m_angle.extractAngularUnits(v.seconds);
          switch (e) {
            case I.north_azimuth:
            case I.south_azimuth:
            case I.polar:
              return new z(Z._convertDirectionFormat(t, I.north_azimuth, e));
            case I.quadrant: {
              const e = Z.secondsNorthAzimuthToQuadrant(t);
              return new z(e.angle);
            }
          }
        }
        getMeridian(e) {
          const t = this.m_angle.extractAngularUnits(v.seconds);
          switch (e) {
            case I.north_azimuth:
              return N.north;
            case I.south_azimuth:
              return N.south;
            case I.polar:
              return N.east;
            case I.quadrant:
              return Z.secondsNorthAzimuthToQuadrant(t).meridian;
          }
        }
        getDirection(e) {
          const t = this.m_angle.extractAngularUnits(v.seconds);
          switch (e) {
            case I.north_azimuth:
              return N.east;
            case I.south_azimuth:
              return N.west;
            case I.polar:
              return N.north;
            case I.quadrant:
              return Z.secondsNorthAzimuthToQuadrant(t).direction;
          }
        }
        static secondsNorthAzimuthToQuadrant(e) {
          const t = e <= x || e >= 972e3 ? N.north : N.south,
            n = t === N.north ? Math.min(A - e, e) : Math.abs(e - C),
            r = e > C ? N.west : N.east;
          return new U(t, n, r);
        }
        static createFromAngleMeridianAndDirection(e, t, n) {
          return new Z(
            new z(
              Z.secondsQuadrantToNorthAzimuth(
                e.extractAngularUnits(v.seconds),
                t,
                n,
              ),
            ),
          );
        }
        static secondsQuadrantToNorthAzimuth(e, t, n) {
          return t === N.north
            ? n === N.east
              ? e
              : A - e
            : n === N.east
            ? C - e
            : C + e;
        }
        static _convertDirectionFormat(e, t, n) {
          let r = 0;
          switch (t) {
            case I.north_azimuth:
              r = e;
              break;
            case I.polar:
              r = x - e;
              break;
            case I.quadrant:
              throw new Error('Unnexpected evaluation');
            case I.south_azimuth:
              r = e + C;
          }
          let i = 0;
          switch (n) {
            case I.north_azimuth:
              i = r;
              break;
            case I.polar:
              i = x - r;
              break;
            case I.quadrant:
              throw new Error('Unnexpected evaluation');
            case I.south_azimuth:
              i = r - C;
          }
          return (
            (i = (function (e, t) {
              return e % 1296e3;
            })(i)),
            i < 0 ? A + i : i
          );
        }
      }
      function P(e, t, n) {
        let r = null;
        switch (t) {
          case v.decimal_degrees:
            r = p(e, g);
            break;
          case v.seconds:
            r = e;
            break;
          case v.gradians:
            r = p(e, 3240);
            break;
          case v.radians:
            r = p(e, E);
            break;
          default:
            throw new Error('Unnexpected evaluation');
        }
        switch (n) {
          case v.decimal_degrees:
            return d(r, g);
          case v.seconds:
            return r;
          case v.gradians:
            return d(r, 3240);
          case v.radians:
            return r / E;
          default:
            throw new Error('Unnexpected evaluation');
        }
      }
      class z {
        constructor(e) {
          this.m_seconds = e;
        }
        static createFromAngleAndUnits(e, t) {
          return new z(P(e, t, v.seconds));
        }
        extractAngularUnits(e) {
          return P(this.m_seconds, v.seconds, G(e));
        }
        static createFromDegreesMinutesSeconds(e, t, n) {
          return new z(f(f(p(e, g), p(t, y)), n));
        }
      }
      function G(e) {
        switch (e) {
          case v.decimal_degrees:
          case v.truncated_degrees:
          case v.degrees_minutes_seconds:
            return v.decimal_degrees;
          case v.gradians:
            return v.gradians;
          case v.fractional_degree_minutes:
            return v.fractional_degree_minutes;
          case v.radians:
            return v.radians;
          case v.seconds:
          case v.fractional_minute_seconds:
            return v.seconds;
        }
      }
      class H {
        constructor(e, t, n, r) {
          (this.m_view = e),
            (this.m_angle = t),
            (this.m_merdian = n),
            (this.m_direction = r),
            (this.m_dms = null),
            (this.m_formatted_dms = null);
        }
        static createFromStringAndBearing(e, t, n) {
          return new H(e, t.getAngle(n), t.getMeridian(n), t.getDirection(n));
        }
        fetchAngle() {
          return this.m_angle;
        }
        fetchMeridian() {
          return this.m_merdian;
        }
        fetchDirection() {
          return this.m_direction;
        }
        fetchView() {
          return this.m_view;
        }
        fetchDms() {
          return null === this.m_dms && this._calculateDms(), this.m_dms;
        }
        fetchFormattedDms() {
          return (
            null === this.m_formatted_dms && this._calculateDms(),
            this.m_formatted_dms
          );
        }
        _calculateDms() {
          let e = null,
            t = v.truncated_degrees,
            n = 0;
          for (let r = 0; r < this.m_view.length; r++) {
            const i = this.m_view[r];
            switch (i) {
              case 'm':
                (e = J(this.m_view, r, i)),
                  (t =
                    t === v.truncated_degrees
                      ? v.fractional_degree_minutes
                      : t),
                  (r = e.newpos);
                continue;
              case 's':
                (e = J(this.m_view, r, i)),
                  (t = v.fractional_minute_seconds),
                  (n = n < e.rounding ? e.rounding : n),
                  (r = e.newpos);
                continue;
              default:
                continue;
            }
          }
          (this.m_dms = M.secondsToDMS(
            this.m_angle.extractAngularUnits(v.seconds),
          )),
            (this.m_formatted_dms = M.secondsToDMS(
              this.m_angle.extractAngularUnits(v.seconds),
            ).format(t, n));
        }
      }
      function j(e, t, n, r, i) {
        let s = null;
        switch (t) {
          case v.decimal_degrees:
          case v.radians:
          case v.gradians:
            return (
              (s = _(b(e.extractAngularUnits(t), r), O(t))),
              B(s.toFixed(r), '0', n + r + (r > 0 ? 1 : 0))
            );
          case v.truncated_degrees:
          case v.fractional_degree_minutes:
            return (
              (s = _(i.fetchFormattedDms().getField(t), O(t))),
              B(s.toFixed(r), '0', n + r + (r > 0 ? 1 : 0))
            );
          case v.fractional_minute_seconds:
            return (
              (s = _(b(i.fetchDms().getField(t), r), O(t))),
              B(s.toFixed(r), '0', n + r + (r > 0 ? 1 : 0))
            );
          default:
            throw new Error('Unnexepected evaluation');
        }
      }
      function V(e) {
        switch (e.toUpperCase().trim()) {
          case 'N':
          case 'NORTH':
            return N.north;
          case 'E':
          case 'EAST':
            return N.east;
          case 'S':
          case 'SOUTH':
            return N.south;
          case 'W':
          case 'WEST':
            return N.west;
        }
        return null;
      }
      function Y(e) {
        const t = parseFloat(e);
        if ((0, o.j)(t)) {
          if (isNaN(t)) throw new Error('Invalid conversion');
          return t;
        }
        throw new Error('Invalid conversion');
      }
      function q(e, t, n) {
        const r = n === I.quadrant;
        let i = null,
          s = null,
          a = 0,
          u = 0,
          l = 0;
        if (r) {
          if (e.length < 2) throw new Error('Conversion Error');
          l = 1;
          const t = (function (e) {
            switch ((0, o.t)(e)) {
              case 1:
                return { first: N.north, second: N.east };
              case 2:
                return { first: N.south, second: N.east };
              case 3:
                return { first: N.south, second: N.west };
              case 4:
                return { first: N.north, second: N.west };
            }
            return null;
          })((0, o.d)(e[e.length - 1]));
          if (
            (t
              ? ((i = t.first), (s = t.second))
              : ((a = 1),
                (i = V((0, o.d)(e[0]))),
                (s = V((0, o.d)(e[e.length - 1])))),
            null === i || null === s)
          )
            throw new Error('Invalid Conversion');
        }
        switch (t) {
          case v.decimal_degrees:
          case v.radians:
          case v.gradians:
            if (0 === e.length) throw new Error('Invalid Conversion');
            return r
              ? Z.createFromAngleMeridianAndDirection(
                  z.createFromAngleAndUnits(Y(e[a]), G(t)),
                  i,
                  s,
                )
              : Z.createFromAngleAndDirection(
                  z.createFromAngleAndUnits(Y(e[a]), G(t)),
                  n,
                );
          case v.degrees_minutes_seconds:
            if (((u = e.length - l - a), 3 === u)) {
              const t = z.createFromDegreesMinutesSeconds(
                Y(e[a]),
                Y(e[a + 1]),
                Y(e[a + 2]),
              );
              return r
                ? Z.createFromAngleMeridianAndDirection(t, i, s)
                : Z.createFromAngleAndDirection(t, n);
            }
            if (1 === u) {
              const t = Y(e[a]),
                o = M.numberToDms(t),
                u = z.createFromDegreesMinutesSeconds(
                  o.m_degrees,
                  o.m_minutes,
                  o.m_seconds,
                );
              return r
                ? Z.createFromAngleMeridianAndDirection(u, i, s)
                : Z.createFromAngleAndDirection(u, n);
            }
        }
        throw new Error('Conversion Error');
      }
      function J(e, t, n) {
        const r = { padding: 0, rounding: 0, newpos: t };
        let i = !1;
        for (; t < e.length; ) {
          const s = e[t];
          if (s === n) i ? r.rounding++ : r.padding++, t++;
          else {
            if ('.' !== s) break;
            (i = !0), t++;
          }
        }
        return (r.newpos = t - 1), r;
      }
      function X(e, t, n) {
        const r = { escaped: '', newpos: t };
        for (t++; t < e.length; ) {
          const n = e[t];
          if ((t++, ']' === n)) break;
          r.escaped += n;
        }
        return (r.newpos = t - 1), r;
      }
      function W(e, t, n) {
        if (!(t instanceof s.Z)) throw new Error('Invalid Parameter');
        if (!1 === t.hasField('directionType'))
          throw new Error('Invalid Parameter - Missing directionType');
        if (!1 === t.hasField('angleType'))
          throw new Error('Invalid Parameter - Missing directionType');
        const r = R(F(t.field('directiontype'))),
          i = (function (e, t, n) {
            if ((0, o.j)(e))
              return (function (e, t, n) {
                if (n === I.quadrant) throw new Error('Conversion error');
                if (t === v.degrees_minutes_seconds) {
                  const t = M.numberToDms(e);
                  return Z.createFromAngleAndDirection(
                    z.createFromDegreesMinutesSeconds(
                      t.m_degrees,
                      t.m_minutes,
                      t.m_seconds,
                    ),
                    n,
                  );
                }
                return Z.createFromAngleAndDirection(
                  z.createFromAngleAndUnits(e, G(t)),
                  n,
                );
              })((0, o.t)(e), t, n);
            if ((0, o.f)(e))
              return q(
                (function (e) {
                  const t = [
                    ' ',
                    '-',
                    '/',
                    "'",
                    '"',
                    '\\',
                    '^',
                    '°',
                    w,
                    '\t',
                    '\r',
                    '\n',
                    '*',
                  ];
                  let n = '';
                  for (let r = 0; r < e.length; r++) {
                    const i = e.charAt(r);
                    -1 !== t.indexOf(i) ? (n += 'RRSPLITRRSPLITRR') : (n += i);
                  }
                  return n.split('RRSPLITRRSPLITRR').filter((e) => '' !== e);
                })(e),
                t,
                n,
              );
            if ((0, o.a)(e)) return q(e, t, n);
            if ((0, o.b)(e)) return q(e.toArray(), t, n);
            throw new Error('Conversion Error');
          })(e, L(F(t.field('angletype'))), r);
        if (!(n instanceof s.Z)) throw new Error('Invalid Parameter');
        if (!1 === n.hasField('directionType'))
          throw new Error('Invalid Parameter - Missing directionType');
        if (!1 === n.hasField('outputType'))
          throw new Error('Invalid Parameter - Missing directionType');
        const a = R(F(n.field('directiontype'))),
          u = n.hasField('angleType') ? L(F(n.field('angletype'))) : null,
          l = F(n.field('outputType')).toUpperCase().trim();
        if (!a || !l) throw new Error('Conversion error');
        if (!(u || ('TEXT' === l && n.hasField('format'))))
          throw new Error('Invalid unit');
        switch (l) {
          case 'VALUE':
            return a === I.quadrant || u === v.degrees_minutes_seconds
              ? (function (e, t, n) {
                  const r = e.getAngle(t);
                  if (t === I.quadrant && n === v.degrees_minutes_seconds) {
                    const n = M.secondsToDMS(r.extractAngularUnits(v.seconds));
                    return [
                      k(e.getMeridian(t), 'SHORT'),
                      n.m_degrees,
                      n.m_minutes,
                      n.m_seconds,
                      k(e.getDirection(t), 'SHORT'),
                    ];
                  }
                  if (n === v.degrees_minutes_seconds) {
                    const e = M.secondsToDMS(r.extractAngularUnits(v.seconds));
                    return [e.m_degrees, e.m_minutes, e.m_seconds];
                  }
                  return t === I.quadrant
                    ? [
                        k(e.getMeridian(t), 'SHORT'),
                        r.extractAngularUnits(n),
                        k(e.getDirection(t), 'SHORT'),
                      ]
                    : [r.extractAngularUnits(n)];
                })(i, a, u)
              : (function (e, t, n) {
                  const r = G(n);
                  if (r && n !== v.degrees_minutes_seconds)
                    return e.getAngle(t).extractAngularUnits(r);
                  throw new Error('Conversion Error');
                })(i, a, u);
          case 'TEXT': {
            let e = '';
            return (
              n.hasField('format') && (e = (0, o.d)(n.field('format'))),
              (null !== e && '' !== e) ||
                (e = (function (e, t) {
                  let n = '';
                  switch (e) {
                    case v.decimal_degrees:
                      n = t === I.quadrant ? 'DD.DD°' : 'DDD.DD°';
                      break;
                    case v.degrees_minutes_seconds:
                      n =
                        t === I.quadrant ? 'dd° mm\' ss"' : 'ddd° mm\' ss.ss"';
                      break;
                    case v.radians:
                      n = 'R.RR';
                      break;
                    case v.gradians:
                      n = 'GGG.GG' + w;
                      break;
                    default:
                      throw new Error('Conversion error');
                  }
                  return t === I.quadrant && (n = 'p ' + n + ' b'), n;
                })(u, a)),
              (function (e, t, n) {
                let r = '',
                  i = null,
                  s = null;
                const o = H.createFromStringAndBearing(t, e, n),
                  a = {
                    D: v.decimal_degrees,
                    d: v.truncated_degrees,
                    m: v.fractional_degree_minutes,
                    s: v.fractional_minute_seconds,
                    R: v.radians,
                    G: v.gradians,
                  };
                for (let u = 0; u < t.length; u++) {
                  const l = t[u];
                  switch (l) {
                    case '[':
                      (i = X(t, u)), (r += i.escaped), (u = i.newpos);
                      continue;
                    case 'D':
                    case 'd':
                    case 'm':
                    case 's':
                    case 'R':
                    case 'G':
                      (i = J(t, u, l)),
                        (s = e.getAngle(n)),
                        (r += j(s, a[l], i.padding, i.rounding, o)),
                        (u = i.newpos);
                      continue;
                    case 'P':
                    case 'p':
                      r += k(o.fetchMeridian(), 'p' === l ? 'SHORT' : 'LONG');
                      continue;
                    case 'B':
                    case 'b':
                      r += k(o.fetchDirection(), 'b' === l ? 'SHORT' : 'LONG');
                      continue;
                    default:
                      r += l;
                  }
                }
                return r;
              })(i, e, a)
            );
          }
          default:
            throw new Error('Invalid Parameter');
        }
      }
      const K = 2654435761,
        $ = 2246822519,
        Q = 3266489917,
        ee = 668265263,
        te = 374761393;
      function ne(e) {
        const t = [];
        for (let n = 0, r = e.length; n < r; n++) {
          let r = e.charCodeAt(n);
          r < 128
            ? t.push(r)
            : r < 2048
            ? t.push(192 | (r >> 6), 128 | (63 & r))
            : r < 55296 || r >= 57344
            ? t.push(224 | (r >> 12), 128 | ((r >> 6) & 63), 128 | (63 & r))
            : (n++,
              (r = 65536 + (((1023 & r) << 10) | (1023 & e.charCodeAt(n)))),
              t.push(
                240 | (r >> 18),
                128 | ((r >> 12) & 63),
                128 | ((r >> 6) & 63),
                128 | (63 & r),
              ));
        }
        return new Uint8Array(t);
      }
      class re {
        constructor(e) {
          (this.seed = e), (this.totallen = 0), (this.bufs = []), this.init();
        }
        init() {
          return (this.bufs = []), (this.totallen = 0), this;
        }
        updateFloatArray(e) {
          const t = [];
          for (const n of e)
            isNaN(n)
              ? t.push('NaN')
              : n === 1 / 0
              ? t.push('Infinity')
              : n === -1 / 0
              ? t.push('-Infinity')
              : 0 === n
              ? t.push('0')
              : t.push(n.toString(16));
          this.update(ne(t.join('')));
        }
        updateIntArray(e) {
          const t = Int32Array.from(e);
          this.update(new Uint8Array(t.buffer));
        }
        updateUint8Array(e) {
          this.update(Uint8Array.from(e));
        }
        updateWithString(e) {
          return this.update(ne(e));
        }
        update(e) {
          return this.bufs.push(e), (this.totallen += e.length), this;
        }
        digest() {
          const e = new Uint8Array(this.totallen);
          let t = 0;
          for (const n of this.bufs) e.set(n, t), (t += n.length);
          return this.init(), this._xxHash32(e, this.seed);
        }
        _xxHash32(e, t = 0) {
          const n = e;
          let r = (t + te) & 4294967295,
            i = 0;
          if (n.length >= 16) {
            const n = [
                (t + K + $) & 4294967295,
                (t + $) & 4294967295,
                (t + 0) & 4294967295,
                (t - K) & 4294967295,
              ],
              s = e,
              o = s.length - 16;
            let a = 0;
            for (i = 0; (4294967280 & i) <= o; i += 4) {
              const e = i,
                t = s[e + 0] + (s[e + 1] << 8),
                r = s[e + 2] + (s[e + 3] << 8),
                o = t * $ + ((r * $) << 16);
              let u = (n[a] + o) & 4294967295;
              u = (u << 13) | (u >>> 19);
              const l = 65535 & u,
                c = u >>> 16;
              (n[a] = (l * K + ((c * K) << 16)) & 4294967295),
                (a = (a + 1) & 3);
            }
            r =
              (((n[0] << 1) | (n[0] >>> 31)) +
                ((n[1] << 7) | (n[1] >>> 25)) +
                ((n[2] << 12) | (n[2] >>> 20)) +
                ((n[3] << 18) | (n[3] >>> 14))) &
              4294967295;
          }
          r = (r + e.length) & 4294967295;
          const s = e.length - 4;
          for (; i <= s; i += 4) {
            const e = i,
              t = n[e + 0] + (n[e + 1] << 8),
              s = n[e + 2] + (n[e + 3] << 8);
            (r = (r + (t * Q + ((s * Q) << 16))) & 4294967295),
              (r = (r << 17) | (r >>> 15)),
              (r = ((65535 & r) * ee + (((r >>> 16) * ee) << 16)) & 4294967295);
          }
          for (; i < n.length; ++i)
            (r += n[i] * te),
              (r = (r << 11) | (r >>> 21)),
              (r = ((65535 & r) * K + (((r >>> 16) * K) << 16)) & 4294967295);
          return (
            (r ^= r >>> 15),
            (r = (((65535 & r) * $) & 4294967295) + (((r >>> 16) * $) << 16)),
            (r ^= r >>> 13),
            (r = (((65535 & r) * Q) & 4294967295) + (((r >>> 16) * Q) << 16)),
            (r ^= r >>> 16),
            r < 0 ? r + 4294967296 : r
          );
        }
      }
      var ie = n(6570),
        se = n(65091),
        oe = n(13473),
        ae = n(38913),
        ue = n(58901),
        le = n(82971);
      function ce(e, t) {
        if (e.x === t.x && e.y === t.y) {
          if (e.hasZ) {
            if (e.z !== t.z) return !1;
          } else if (t.hasZ) return !1;
          if (e.hasM) {
            if (e.m !== t.m) return !1;
          } else if (t.hasM) return !1;
          return !0;
        }
        return !1;
      }
      function he(e, t, n) {
        if (null !== e)
          if ((0, o.a)(e)) {
            if ((t.updateUint8Array([61]), n.map.has(e))) {
              const r = n.map.get(e);
              t.updateIntArray([61237541 ^ r]);
            } else {
              n.map.set(e, n.currentLength++);
              for (const r of e) he(r, t, n);
              n.map.delete(e), n.currentLength--;
            }
            t.updateUint8Array([199]);
          } else if ((0, o.b)(e)) {
            if ((t.updateUint8Array([61]), n.map.has(e))) {
              const r = n.map.get(e);
              t.updateIntArray([61237541 ^ r]);
            } else {
              n.map.set(e, n.currentLength++);
              for (const r of e.toArray()) he(r, t, n);
              n.map.delete(e), n.currentLength--;
            }
            t.updateUint8Array([199]);
          } else {
            if ((0, o.o)(e))
              return (
                t.updateIntArray([e.getTime()]), void t.updateUint8Array([241])
              );
            if ((0, o.f)(e))
              return (
                t.updateIntArray([e.length]),
                t.updateWithString(e),
                void t.updateUint8Array([41])
              );
            if ((0, o.i)(e)) t.updateUint8Array([!0 === e ? 1 : 0, 113]);
            else {
              if ((0, o.j)(e))
                return t.updateFloatArray([e]), void t.updateUint8Array([173]);
              if (e instanceof i.Z)
                throw new Error('Type not supported in Hash');
              if (e instanceof r.Z)
                throw new Error('Type not supported in Hash');
              if (!(e instanceof s.Z)) {
                if ((0, o.k)(e)) throw new Error('Type not supported in Hash');
                if (e instanceof oe.Z)
                  return (
                    t.updateIntArray([3833836621]),
                    t.updateIntArray([0]),
                    t.updateFloatArray([e.x]),
                    t.updateIntArray([1]),
                    t.updateFloatArray([e.y]),
                    e.hasZ &&
                      (t.updateIntArray([2]), t.updateFloatArray([e.z])),
                    e.hasM &&
                      (t.updateIntArray([3]), t.updateFloatArray([e.m])),
                    t.updateIntArray([3765347959]),
                    void he(e.spatialReference.wkid, t, n)
                  );
                if (e instanceof ae.Z) {
                  t.updateIntArray([1266616829]);
                  for (let r = 0; r < e.rings.length; r++) {
                    const i = e.rings[r],
                      s = [];
                    let o = null,
                      a = null;
                    for (let t = 0; t < i.length; t++) {
                      const n = e.getPoint(r, t);
                      if (0 === t) o = n;
                      else if (ce(a, n)) continue;
                      (a = n), (t === i.length - 1 && ce(o, n)) || s.push(n);
                    }
                    t.updateIntArray([1397116793, s.length]);
                    for (let e = 0; e < s.length; e++) {
                      const r = s[e];
                      t.updateIntArray([3962308117, e]),
                        he(r, t, n),
                        t.updateIntArray([2716288009]);
                    }
                    t.updateIntArray([2278822459]);
                  }
                  return (
                    t.updateIntArray([3878477243]),
                    void he(e.spatialReference.wkid, t, n)
                  );
                }
                if (e instanceof ue.Z) {
                  t.updateIntArray([4106883559]);
                  for (let r = 0; r < e.paths.length; r++) {
                    const i = e.paths[r];
                    t.updateIntArray([1397116793, i.length]);
                    for (let s = 0; s < i.length; s++)
                      t.updateIntArray([3962308117, s]),
                        he(e.getPoint(r, s), t, n),
                        t.updateIntArray([2716288009]);
                    t.updateIntArray([2278822459]);
                  }
                  return (
                    t.updateIntArray([2568784753]),
                    void he(e.spatialReference.wkid, t, n)
                  );
                }
                if (e instanceof se.Z) {
                  t.updateIntArray([588535921, e.points.length]);
                  for (let r = 0; r < e.points.length; r++) {
                    const i = e.getPoint(r);
                    t.updateIntArray([r]), he(i, t, n);
                  }
                  return (
                    t.updateIntArray([1700171621]),
                    void he(e.spatialReference.wkid, t, n)
                  );
                }
                if (e instanceof ie.Z)
                  return (
                    t.updateIntArray([3483648373]),
                    t.updateIntArray([0]),
                    t.updateFloatArray([e.xmax]),
                    t.updateIntArray([1]),
                    t.updateFloatArray([e.xmin]),
                    t.updateIntArray([2]),
                    t.updateFloatArray([e.ymax]),
                    t.updateIntArray([3]),
                    t.updateFloatArray([e.ymin]),
                    e.hasZ &&
                      (t.updateIntArray([4]),
                      t.updateFloatArray([e.zmax]),
                      t.updateIntArray([5]),
                      t.updateFloatArray([e.zmin])),
                    e.hasM &&
                      (t.updateIntArray([6]),
                      t.updateFloatArray([e.mmax]),
                      t.updateIntArray([7]),
                      t.updateFloatArray([e.mmin])),
                    t.updateIntArray([3622027469]),
                    void he(e.spatialReference.wkid, t, n)
                  );
                if (e instanceof le.Z)
                  return (
                    t.updateIntArray([14]),
                    void 0 !== e.wkid &&
                      null !== e.wkid &&
                      t.updateIntArray([e.wkid]),
                    void (e.wkt && t.updateWithString(e.wkt))
                  );
                if ((0, o.c)(e)) throw new Error('Type not supported in Hash');
                if ((0, o.q)(e)) throw new Error('Type not supported in Hash');
                if ((0, o.r)(e)) throw new Error('Type not supported in Hash');
                if (e === o.v) throw new Error('Type not supported in Hash');
                throw new Error('Type not supported in Hash');
              }
              if ((t.updateUint8Array([223]), n.map.has(e))) {
                const r = n.map.get(e);
                t.updateIntArray([61237541 ^ r]);
              } else {
                n.map.set(e, n.currentLength++);
                for (const r of e.keys())
                  t.updateIntArray([r.length]),
                    t.updateWithString(r),
                    t.updateUint8Array([251]),
                    he(e.field(r), t, n),
                    t.updateUint8Array([239]);
                n.map.delete(e), n.currentLength--;
              }
              t.updateUint8Array([73]);
            }
          }
        else t.updateUint8Array([0, 139]);
      }
      function fe(e, t) {
        (e.portal = function (e, n) {
          return t(e, n, function (e, t, n) {
            return (0, o.p)(n, 1, 1), new r.Z((0, o.d)(n[0]));
          });
        }),
          (e.trim = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, o.p)(n, 1, 1), (0, o.d)(n[0]).trim();
            });
          }),
          (e.tohex = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 1, 1);
              const r = (0, o.t)(n[0]);
              return isNaN(r) ? r : r.toString(16);
            });
          }),
          (e.upper = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, o.p)(n, 1, 1), (0, o.d)(n[0]).toUpperCase();
            });
          }),
          (e.proper = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 1, 2);
              let r = 1;
              2 === n.length &&
                'firstword' === (0, o.d)(n[1]).toLowerCase() &&
                (r = 2);
              const i = /\s/,
                s = (0, o.d)(n[0]);
              let a = '',
                u = !0;
              for (let e = 0; e < s.length; e++) {
                let t = s[e];
                i.test(t)
                  ? 1 === r && (u = !0)
                  : t.toUpperCase() !== t.toLowerCase() &&
                    (u
                      ? ((t = t.toUpperCase()), (u = !1))
                      : (t = t.toLowerCase())),
                  (a += t);
              }
              return a;
            });
          }),
          (e.lower = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, o.p)(n, 1, 1), (0, o.d)(n[0]).toLowerCase();
            });
          }),
          (e.guid = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 0, 1), n.length > 0))
                switch ((0, o.d)(n[0]).toLowerCase()) {
                  case 'digits':
                    return (0, o.O)()
                      .replace('-', '')
                      .replace('-', '')
                      .replace('-', '')
                      .replace('-', '');
                  case 'digits-hyphen':
                    return (0, o.O)();
                  case 'digits-hyphen-braces':
                    return '{' + (0, o.O)() + '}';
                  case 'digits-hyphen-parentheses':
                    return '(' + (0, o.O)() + ')';
                }
              return '{' + (0, o.O)() + '}';
            });
          }),
          (e.console = function (e, n) {
            return t(e, n, function (t, n, r) {
              return (
                0 === r.length ||
                  (1 === r.length
                    ? e.console((0, o.d)(r[0]))
                    : e.console((0, o.d)(r))),
                o.v
              );
            });
          }),
          (e.mid = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 2, 3);
              let r = (0, o.t)(n[1]);
              if (isNaN(r)) return '';
              if ((r < 0 && (r = 0), 2 === n.length))
                return (0, o.d)(n[0]).substr(r);
              let i = (0, o.t)(n[2]);
              return isNaN(i)
                ? ''
                : (i < 0 && (i = 0), (0, o.d)(n[0]).substr(r, i));
            });
          }),
          (e.find = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 2, 3);
              let r = 0;
              if (n.length > 2) {
                if (((r = (0, o.t)((0, o.C)(n[2], 0))), isNaN(r))) return -1;
                r < 0 && (r = 0);
              }
              return (0, o.d)(n[1]).indexOf((0, o.d)(n[0]), r);
            });
          }),
          (e.left = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 2, 2);
              let r = (0, o.t)(n[1]);
              return isNaN(r)
                ? ''
                : (r < 0 && (r = 0), (0, o.d)(n[0]).substr(0, r));
            });
          }),
          (e.right = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 2, 2);
              let r = (0, o.t)(n[1]);
              return isNaN(r)
                ? ''
                : (r < 0 && (r = 0), (0, o.d)(n[0]).substr(-1 * r, r));
            });
          }),
          (e.split = function (e, n) {
            return t(e, n, function (e, t, n) {
              let r;
              (0, o.p)(n, 2, 4);
              let i = (0, o.t)((0, o.C)(n[2], -1));
              const s = (0, o.z)((0, o.C)(n[3], !1));
              if (
                (-1 === i || null === i || !0 === s
                  ? (r = (0, o.d)(n[0]).split((0, o.d)(n[1])))
                  : (isNaN(i) && (i = -1),
                    i < -1 && (i = -1),
                    (r = (0, o.d)(n[0]).split((0, o.d)(n[1]), i))),
                !1 === s)
              )
                return r;
              const a = [];
              for (let e = 0; e < r.length && !(-1 !== i && a.length >= i); e++)
                '' !== r[e] && void 0 !== r[e] && a.push(r[e]);
              return a;
            });
          }),
          (e.text = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, o.p)(n, 1, 2), (0, o.u)(n[0], n[1]);
            });
          }),
          (e.concatenate = function (e, n) {
            return t(e, n, function (e, t, n) {
              const r = [];
              if (n.length < 1) return '';
              if ((0, o.a)(n[0])) {
                const e = (0, o.C)(n[2], '');
                for (let t = 0; t < n[0].length; t++)
                  r[t] = (0, o.u)(n[0][t], e);
                return n.length > 1 ? r.join(n[1]) : r.join('');
              }
              if ((0, o.b)(n[0])) {
                const e = (0, o.C)(n[2], '');
                for (let t = 0; t < n[0].length(); t++)
                  r[t] = (0, o.u)(n[0].get(t), e);
                return n.length > 1 ? r.join(n[1]) : r.join('');
              }
              for (let e = 0; e < n.length; e++) r[e] = (0, o.u)(n[e]);
              return r.join('');
            });
          }),
          (e.reverse = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), (0, o.a)(n[0]))) {
                const e = n[0].slice(0);
                return e.reverse(), e;
              }
              if ((0, o.b)(n[0])) {
                const e = n[0].toArray().slice(0);
                return e.reverse(), e;
              }
              throw new Error('Invalid Parameter');
            });
          }),
          (e.replace = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 3, 4);
              const r = (0, o.d)(n[0]),
                i = (0, o.d)(n[1]),
                s = (0, o.d)(n[2]);
              return 4 !== n.length || (0, o.z)(n[3])
                ? (0, o.M)(r, i, s)
                : r.replace(i, s);
            });
          }),
          (e.schema = function (e, n) {
            return t(e, n, function (e, t, n) {
              if ((0, o.k)(n[0])) {
                const e = (0, o.P)(n[0]);
                return e ? s.Z.convertObjectToArcadeDictionary(e) : null;
              }
              throw new Error('Invalid Parameter');
            });
          }),
          (e.subtypes = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), (0, o.k)(n[0]))) {
                const e = (0, o.Q)(n[0]);
                return e ? s.Z.convertObjectToArcadeDictionary(e) : null;
              }
              throw new Error('Invalid Parameter');
            });
          }),
          (e.subtypecode = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), (0, o.k)(n[0]))) {
                const e = (0, o.Q)(n[0]);
                if (!e) return null;
                if (e.subtypeField && n[0].hasField(e.subtypeField)) {
                  const t = n[0].field(e.subtypeField);
                  for (const n of e.subtypes) if (n.code === t) return n.code;
                  return null;
                }
                return null;
              }
              throw new Error('Invalid Parameter');
            });
          }),
          (e.subtypename = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), (0, o.k)(n[0]))) {
                const e = (0, o.Q)(n[0]);
                if (!e) return '';
                if (e.subtypeField && n[0].hasField(e.subtypeField)) {
                  const t = n[0].field(e.subtypeField);
                  for (const n of e.subtypes) if (n.code === t) return n.name;
                  return '';
                }
                return '';
              }
              throw new Error('Invalid Parameter');
            });
          }),
          (e.gdbversion = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), (0, o.k)(n[0]))) return n[0].gdbVersion();
              throw new Error('Invalid Parameter');
            });
          }),
          (e.domain = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 2, 3), (0, o.k)(n[0]))) {
                const e = (0, o.T)(
                  n[0],
                  (0, o.d)(n[1]),
                  void 0 === n[2] ? void 0 : (0, o.t)(n[2]),
                );
                return e && e.domain
                  ? 'coded-value' === e.domain.type ||
                    'codedValue' === e.domain.type
                    ? s.Z.convertObjectToArcadeDictionary({
                        type: 'codedValue',
                        name: e.domain.name,
                        dataType: a.yE[e.field.type],
                        codedValues: e.domain.codedValues.map((e) => ({
                          name: e.name,
                          code: e.code,
                        })),
                      })
                    : s.Z.convertObjectToArcadeDictionary({
                        type: 'range',
                        name: e.domain.name,
                        dataType: a.yE[e.field.type],
                        min: e.domain.min,
                        max: e.domain.max,
                      })
                  : null;
              }
              throw new Error('Invalid Parameter');
            });
          }),
          (e.domainname = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 2, 4), (0, o.k)(n[0])))
                return (0, o.U)(
                  n[0],
                  (0, o.d)(n[1]),
                  n[2],
                  void 0 === n[3] ? void 0 : (0, o.t)(n[3]),
                );
              throw new Error('Invalid Parameter');
            });
          }),
          (e.domaincode = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 2, 4), (0, o.k)(n[0])))
                return (0, o.V)(
                  n[0],
                  (0, o.d)(n[1]),
                  n[2],
                  void 0 === n[3] ? void 0 : (0, o.t)(n[3]),
                );
              throw new Error('Invalid Parameter');
            });
          }),
          (e.urlencode = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), null === n[0])) return '';
              if (n[0] instanceof s.Z) {
                let e = '';
                for (const t of n[0].keys()) {
                  const r = n[0].field(t);
                  '' !== e && (e += '&'),
                    (e +=
                      null === r
                        ? encodeURIComponent(t) + '='
                        : encodeURIComponent(t) + '=' + encodeURIComponent(r));
                }
                return e;
              }
              return encodeURIComponent((0, o.d)(n[0]));
            });
          }),
          (e.hash = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 1, 1);
              const r = new re(0);
              return (
                he(n[0], r, { map: new Map(), currentLength: 0 }), r.digest()
              );
            });
          }),
          (e.convertdirection = function (e, n) {
            return t(e, n, function (e, t, n) {
              return (0, o.p)(n, 3, 3), W(n[0], n[1], n[2]);
            });
          }),
          (e.fromjson = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (((0, o.p)(n, 1, 1), !1 === (0, o.f)(n[0])))
                throw new Error('Invalid Parameter');
              return s.Z.convertJsonToArcade(JSON.parse((0, o.d)(n[0])));
            });
          }),
          (e.expects = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (n.length < 1)
                throw new Error(
                  'Function called with wrong number of Parameters',
                );
              return o.v;
            });
          }),
          (e.tocharcode = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 1, 2);
              const r = (0, o.t)((0, o.C)(n[1], 0)),
                i = (0, o.d)(n[0]);
              if (0 === i.length && 1 === n.length) return null;
              if (i.length <= r || r < 0) throw new Error('Illegal argument');
              return i.charCodeAt(r);
            });
          }),
          (e.tocodepoint = function (e, n) {
            return t(e, n, function (e, t, n) {
              (0, o.p)(n, 1, 2);
              const r = (0, o.t)((0, o.C)(n[1], 0)),
                i = (0, o.d)(n[0]);
              if (0 === i.length && 1 === n.length) return null;
              if (i.length <= r || r < 0) throw new Error('Illegal argument');
              return i.codePointAt(r);
            });
          }),
          (e.fromcharcode = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (n.length < 1)
                throw new Error(
                  'Function called with wrong number of Parameters',
                );
              const r = n
                .map((e) => Math.trunc((0, o.t)(e)))
                .filter((e) => e >= 0 && e <= 65535);
              return 0 === r.length ? null : String.fromCharCode.apply(null, r);
            });
          }),
          (e.fromcodepoint = function (e, n) {
            return t(e, n, function (e, t, n) {
              if (n.length < 1)
                throw new Error(
                  'Function called with wrong number of Parameters',
                );
              let r;
              try {
                r = n
                  .map((e) => Math.trunc((0, o.t)(e)))
                  .filter((e) => e <= 1114111 && e >>> 0 === e);
              } catch (e) {
                return null;
              }
              return 0 === r.length
                ? null
                : String.fromCodePoint.apply(null, r);
            });
          });
      }
    },
    77286: (e, t, n) => {
      n.d(t, { r1: () => a, Lz: () => o, EI: () => i, SV: () => s });
      var r = n(6570);
      function i(e) {
        if (void 0 === e) return null;
        if ('number' == typeof e) return e;
        let t = e.toLowerCase();
        switch (((t = t.replace(/\s/g, '')), (t = t.replace(/-/g, '')), t)) {
          case 'meters':
          case 'meter':
          case 'm':
          case 'squaremeters':
          case 'squaremeter':
            return 109404;
          case 'miles':
          case 'mile':
          case 'squaremile':
          case 'squaremiles':
            return 109413;
          case 'kilometers':
          case 'kilometer':
          case 'squarekilometers':
          case 'squarekilometer':
          case 'km':
            return 109414;
          case 'acres':
          case 'acre':
          case 'ac':
            return 109402;
          case 'hectares':
          case 'hectare':
          case 'ha':
            return 109401;
          case 'yard':
          case 'yd':
          case 'yards':
          case 'squareyards':
          case 'squareyard':
            return 109442;
          case 'feet':
          case 'ft':
          case 'foot':
          case 'squarefeet':
          case 'squarefoot':
            return 109405;
          case 'nm':
          case 'nmi':
          case 'nauticalmile':
          case 'nauticalmiles':
          case 'squarenauticalmile':
          case 'squarenauticalmiles':
            return 109409;
        }
        return null;
      }
      function s(e) {
        if (null === e) return null;
        switch (e.type) {
          case 'polygon':
          case 'multipoint':
          case 'polyline':
            return e.extent;
          case 'point':
            return new r.Z({
              xmin: e.x,
              ymin: e.y,
              xmax: e.x,
              ymax: e.y,
              spatialReference: e.spatialReference,
            });
          case 'extent':
            return e;
        }
        return null;
      }
      function o(e) {
        if (void 0 === e) return null;
        if ('number' == typeof e) return e;
        let t = e.toLowerCase();
        switch (((t = t.replace(/\s/g, '')), (t = t.replace(/-/g, '')), t)) {
          case 'meters':
          case 'meter':
          case 'm':
          case 'squaremeters':
          case 'squaremeter':
            return 9001;
          case 'miles':
          case 'mile':
          case 'squaremile':
          case 'squaremiles':
            return 9035;
          case 'kilometers':
          case 'kilometer':
          case 'squarekilometers':
          case 'squarekilometer':
          case 'km':
            return 9036;
          case 'yard':
          case 'yd':
          case 'yards':
          case 'squareyards':
          case 'squareyard':
            return 9096;
          case 'feet':
          case 'ft':
          case 'foot':
          case 'squarefeet':
          case 'squarefoot':
            return 9002;
          case 'nm':
          case 'nmi':
          case 'nauticalmile':
          case 'nauticalmiles':
          case 'squarenauticalmile':
          case 'squarenauticalmiles':
            return 9030;
        }
        return null;
      }
      function a(e) {
        if (null === e) return null;
        const t = e.clone();
        return (
          void 0 !== e.cache._geVersion &&
            (t.cache._geVersion = e.cache._geVersion),
          t
        );
      }
    },
    90077: (e, t, n) => {
      n.d(t, {
        gW: () => a,
        AA: () => b,
        Kq: () => g,
        mb: () => D,
        Vf: () => S,
        dN: () => N,
        H5: () => C,
        w8: () => m,
        bV: () => d,
        UA: () => x,
        FS: () => A,
      });
      const r = {
        all: { min: '2', max: '2' },
        none: { min: '2', max: '2' },
        any: { min: '2', max: '2' },
        reduce: { min: '2', max: '3' },
        map: { min: '2', max: '2' },
        filter: { min: '2', max: '2' },
        fromcodepoint: { min: '1', max: '*' },
        fromcharcode: { min: '1', max: '*' },
        tocodepoint: { min: '1', max: '2' },
        tocharcode: { min: '1', max: '2' },
        concatenate: { min: '0', max: '*' },
        expects: { min: '1', max: '*' },
        getfeatureset: { min: '1', max: '2' },
        week: { min: '1', max: '2' },
        fromjson: { min: '1', max: '1' },
        length3d: { min: '1', max: '2' },
        tohex: { min: '1', max: '1' },
        hash: { min: '1', max: '1' },
        isoweek: { min: '1', max: '1' },
        isoweekday: { min: '1', max: '1' },
        isomonth: { min: '1', max: '1' },
        isoyear: { min: '1', max: '1' },
        resize: { min: '2', max: '3' },
        slice: { min: '0', max: '*' },
        splice: { min: '0', max: '*' },
        push: { min: '2', max: '2' },
        pop: { min: '1', max: '1' },
        includes: { min: '2', max: '2' },
        array: { min: '1', max: '2' },
        front: { min: '1', max: '1' },
        back: { min: '1', max: '1' },
        insert: { min: '3', max: '3' },
        erase: { min: '2', max: '2' },
        split: { min: '2', max: '4' },
        guid: { min: '0', max: '1' },
        today: { min: '0', max: '0' },
        angle: { min: '2', max: '3' },
        bearing: { min: '2', max: '3' },
        urlencode: { min: '1', max: '1' },
        now: { min: '0', max: '0' },
        timestamp: { min: '0', max: '0' },
        day: { min: '1', max: '1' },
        month: { min: '1', max: '1' },
        year: { min: '1', max: '1' },
        hour: { min: '1', max: '1' },
        second: { min: '1', max: '1' },
        millisecond: { min: '1', max: '1' },
        minute: { min: '1', max: '1' },
        weekday: { min: '1', max: '1' },
        toutc: { min: '1', max: '1' },
        tolocal: { min: '1', max: '1' },
        date: { min: '0', max: '7' },
        datediff: { min: '2', max: '3' },
        dateadd: { min: '2', max: '3' },
        trim: { min: '1', max: '1' },
        text: { min: '1', max: '2' },
        left: { min: '2', max: '2' },
        right: { min: '2', max: '2' },
        mid: { min: '2', max: '3' },
        upper: { min: '1', max: '1' },
        proper: { min: '1', max: '2' },
        lower: { min: '1', max: '1' },
        find: { min: '2', max: '3' },
        iif: { min: '3', max: '3' },
        decode: { min: '2', max: '*' },
        when: { min: '2', max: '*' },
        defaultvalue: { min: '2', max: '2' },
        isempty: { min: '1', max: '1' },
        domaincode: { min: '2', max: '4' },
        domainname: { min: '2', max: '4' },
        polygon: { min: '1', max: '1' },
        point: { min: '1', max: '1' },
        polyline: { min: '1', max: '1' },
        extent: { min: '1', max: '1' },
        multipoint: { min: '1', max: '1' },
        ringisclockwise: { min: '1', max: '1' },
        geometry: { min: '1', max: '1' },
        count: { min: '0', max: '*' },
        number: { min: '1', max: '2' },
        acos: { min: '1', max: '1' },
        asin: { min: '1', max: '1' },
        atan: { min: '1', max: '1' },
        atan2: { min: '2', max: '2' },
        ceil: { min: '1', max: '2' },
        floor: { min: '1', max: '2' },
        round: { min: '1', max: '2' },
        cos: { min: '1', max: '1' },
        exp: { min: '1', max: '1' },
        log: { min: '1', max: '1' },
        min: { min: '0', max: '*' },
        constrain: { min: '3', max: '3' },
        console: { min: '0', max: '*' },
        max: { min: '0', max: '*' },
        pow: { min: '2', max: '2' },
        random: { min: '0', max: '0' },
        sqrt: { min: '1', max: '1' },
        sin: { min: '1', max: '1' },
        tan: { min: '1', max: '1' },
        abs: { min: '1', max: '1' },
        isnan: { min: '1', max: '1' },
        stdev: { min: '0', max: '*' },
        average: { min: '0', max: '*' },
        mean: { min: '0', max: '*' },
        sum: { min: '0', max: '*' },
        variance: { min: '0', max: '*' },
        distinct: { min: '0', max: '*' },
        first: { min: '1', max: '1' },
        top: { min: '2', max: '2' },
        boolean: { min: '1', max: '1' },
        dictionary: { min: '0', max: '*' },
        typeof: { min: '1', max: '1' },
        reverse: { min: '1', max: '1' },
        replace: { min: '3', max: '4' },
        sort: { min: '1', max: '2' },
        feature: { min: '1', max: '*' },
        haskey: { min: '2', max: '2' },
        indexof: { min: '2', max: '2' },
        disjoint: { min: '2', max: '2' },
        intersects: { min: '2', max: '2' },
        touches: { min: '2', max: '2' },
        crosses: { min: '2', max: '2' },
        within: { min: '2', max: '2' },
        contains: { min: '2', max: '2' },
        overlaps: { min: '2', max: '2' },
        equals: { min: '2', max: '2' },
        relate: { min: '3', max: '3' },
        intersection: { min: '2', max: '2' },
        union: { min: '1', max: '2' },
        difference: { min: '2', max: '2' },
        symmetricdifference: { min: '2', max: '2' },
        clip: { min: '2', max: '2' },
        cut: { min: '2', max: '2' },
        area: { min: '1', max: '2' },
        areageodetic: { min: '1', max: '2' },
        length: { min: '1', max: '2' },
        lengthgeodetic: { min: '1', max: '2' },
        distancegeodetic: { min: '2', max: '3' },
        distance: { min: '2', max: '3' },
        densify: { min: '2', max: '3' },
        densifygeodetic: { min: '2', max: '3' },
        generalize: { min: '2', max: '4' },
        buffer: { min: '2', max: '3' },
        buffergeodetic: { min: '2', max: '3' },
        offset: { min: '2', max: '6' },
        rotate: { min: '2', max: '3' },
        issimple: { min: '1', max: '1' },
        simplify: { min: '1', max: '1' },
        centroid: { min: '1', max: '1' },
        isselfintersecting: { min: '1', max: '1' },
        multiparttosinglepart: { min: '1', max: '1' },
        setgeometry: { min: '2', max: '2' },
        portal: { min: '1', max: '1' },
        getuser: { min: '1', max: '2' },
        subtypes: { min: '1', max: '1' },
        subtypecode: { min: '1', max: '1' },
        subtypename: { min: '1', max: '1' },
        domain: { min: '2', max: '3' },
        convertdirection: { min: '3', max: '3' },
        schema: { min: '1', max: '1' },
      };
      for (const e in r) (r[e].fmin = r[e].min), (r[e].fmax = r[e].max);
      const i = [
          'featureset',
          'getuser',
          'featuresetbyid',
          'featuresetbyname',
          'featuresetbyassociation',
          'featuresetbyrelationshipname',
          'featuresetbyurl',
          'getfeatureset',
          'attachments',
          'featuresetbyportalitem',
        ],
        s = [
          'disjoint',
          'intersects',
          'touches',
          'crosses',
          'within',
          'contains',
          'overlaps',
          'equals',
          'relate',
          'intersection',
          'union',
          'difference',
          'symmetricdifference',
          'clip',
          'cut',
          'area',
          'areageodetic',
          'length',
          'length3d',
          'lengthgeodetic',
          'distance',
          'distancegeodetic',
          'densify',
          'densifygeodetic',
          'generalize',
          'buffer',
          'buffergeodetic',
          'offset',
          'rotate',
          'issimple',
          'simplify',
          'multiparttosinglepart',
        ];
      function o(e) {
        return 'string' == typeof e || e instanceof String;
      }
      function a(e, t) {
        const n = r[e.name.toLowerCase()];
        void 0 === n
          ? (r[e.name.toLowerCase()] =
              'sync' === t
                ? { min: e.min, max: e.max }
                : { fmin: e.min, fmax: e.max })
          : 'sync' === t
          ? ((n.min = e.min), (n.max = e.max))
          : ((n.fmin = e.min), (n.fmax = e.max));
      }
      function u(e, t) {
        return ('0' !== e.min && t.length < Number(e.min)) ||
          ('*' !== e.max && t.length > Number(e.max))
          ? -2
          : 1;
      }
      function l(e, t, n) {
        if (null !== n.localScope && void 0 !== n.localScope[e.toLowerCase()]) {
          const r = n.localScope[e.toLowerCase()];
          if ('FormulaFunction' === r.type)
            return (
              void 0 === r.signature && (r.signature = { min: '0', max: '*' }),
              u(r.signature, t)
            );
          if ('any' === r.type)
            return (
              void 0 === r.signature && (r.signature = { min: '0', max: '*' }),
              u(r.signature, t)
            );
        }
        if (void 0 !== n.globalScope[e.toLowerCase()]) {
          const r = n.globalScope[e.toLowerCase()];
          if ('FormulaFunction' === r.type)
            return (
              void 0 === r.signature && (r.signature = { min: '0', max: '*' }),
              u(r.signature, t)
            );
          if ('any' === r.type)
            return (
              void 0 === r.signature && (r.signature = { min: '0', max: '*' }),
              u(r.signature, t)
            );
        }
        return -1;
      }
      function c(e, t) {
        if (e) for (const n of e) h(n, t);
      }
      function h(e, t) {
        if (e && !1 !== t(e))
          switch (e.type) {
            case 'ArrayExpression':
              c(e.elements, t);
              break;
            case 'AssignmentExpression':
            case 'BinaryExpression':
            case 'LogicalExpression':
              h(e.left, t), h(e.right, t);
              break;
            case 'BlockStatement':
            case 'Program':
              c(e.body, t);
              break;
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'EmptyStatement':
            case 'Identifier':
            case 'Literal':
              break;
            case 'CallExpression':
              h(e.callee, t), c(e.arguments, t);
              break;
            case 'ExpressionStatement':
              h(e.expression, t);
              break;
            case 'ForInStatement':
              h(e.left, t), h(e.right, t), h(e.body, t);
              break;
            case 'ForStatement':
              h(e.init, t), h(e.test, t), h(e.update, t), h(e.body, t);
              break;
            case 'FunctionDeclaration':
              h(e.id, t), c(e.params, t), h(e.body, t);
              break;
            case 'IfStatement':
              h(e.test, t), h(e.consequent, t), h(e.alternate, t);
              break;
            case 'MemberExpression':
              h(e.object, t), h(e.property, t);
              break;
            case 'ObjectExpression':
              c(e.properties, t);
              break;
            case 'Property':
              h(e.key, t), h(e.value, t);
              break;
            case 'ReturnStatement':
            case 'UnaryExpression':
            case 'UpdateExpression':
              h(e.argument, t);
              break;
            case 'VariableDeclaration':
              c(e.declarations, t);
              break;
            case 'VariableDeclarator':
              h(e.id, t), h(e.init, t);
              break;
            case 'TemplateLiteral':
              c(e.expressions, t), c(e.quasis, t);
          }
      }
      function f(e, t = !0) {
        let n = C(e, 'SYNTAX', 'UNREOGNISED');
        try {
          switch (e.type) {
            case 'VariableDeclarator':
              return 'Identifier' !== e.id.type
                ? C(e, 'SYNTAX', 'VARIABLEMUSTHAVEIDENTIFIER')
                : null !== e.init
                ? f(e.init, !1)
                : '';
            case 'VariableDeclaration':
              for (let r = 0; r < e.declarations.length; r++)
                if (((n = f(e.declarations[r], t)), '' !== n)) return n;
              return '';
            case 'ForInStatement':
              if (((n = f(e.left, t)), '' !== n)) return n;
              if ('VariableDeclaration' === e.left.type) {
                if (e.left.declarations.length > 1)
                  return C(e, 'SYNTAX', 'ONLY1VAR');
                if (null !== e.left.declarations[0].init)
                  return C(e, 'SYNTAX', 'CANNOTDECLAREVAL');
              } else if ('Identifier' !== e.left.type)
                return C(e, 'SYNTAX', 'LEFTNOTVAR');
              return (
                (n = f(e.right, t)),
                '' !== n ? n : ((n = f(e.body, t)), '' !== n ? n : '')
              );
            case 'ForStatement':
              return (null !== e.test && ((n = f(e.test, t)), '' !== n)) ||
                (null !== e.init && ((n = f(e.init, t)), '' !== n)) ||
                (null !== e.update && ((n = f(e.update, t)), '' !== n)) ||
                (null !== e.body && ((n = f(e.body, t)), '' !== n))
                ? n
                : '';
            case 'ContinueStatement':
            case 'EmptyStatement':
            case 'BreakStatement':
            case 'Literal':
            case 'TemplateElement':
              return '';
            case 'IfStatement':
              return (
                (n = f(e.test, t)),
                '' !== n ||
                (null !== e.consequent &&
                  ((n = f(e.consequent, !1)), '' !== n)) ||
                (null !== e.alternate && ((n = f(e.alternate, !1)), '' !== n))
                  ? n
                  : ''
              );
            case 'BlockStatement': {
              const r = [];
              for (let t = 0; t < e.body.length; t++)
                'EmptyStatement' !== e.body[t].type && r.push(e.body[t]);
              e.body = r;
              for (let r = 0; r < e.body.length; r++)
                if (((n = f(e.body[r], t)), '' !== n)) return n;
              return '';
            }
            case 'FunctionDeclaration':
              return !1 === t
                ? C(e, 'SYNTAX', 'GLOBALFUNCTIONSONLY')
                : 'Identifier' !== e.id.type
                ? C(e, 'SYNTAX', 'FUNCTIONMUSTHAVEIDENTIFIER')
                : f(e.body, !1);
            case 'ReturnStatement':
              return null !== e.argument ? f(e.argument, t) : '';
            case 'UpdateExpression':
              return 'Identifier' !== e.argument.type &&
                'MemberExpression' !== e.argument.type
                ? C(e, 'SYNTAX', 'ASSIGNMENTTOVARSONLY')
                : f(e.argument, t);
            case 'AssignmentExpression':
              if (
                'Identifier' !== e.left.type &&
                'MemberExpression' !== e.left.type
              )
                return C(e, 'SYNTAX', 'ASSIGNMENTTOVARSONLY');
              if (((n = f(e.left, t)), '' !== n)) return n;
              switch (e.operator) {
                case '=':
                case '/=':
                case '*=':
                case '%=':
                case '+=':
                case '-=':
                  break;
                default:
                  return C(e, 'SYNTAX', 'OPERATORNOTRECOGNISED');
              }
              return f(e.right, !1);
            case 'ExpressionStatement':
              return (
                'AssignmentExpression' === e.expression.type ||
                  e.expression.type,
                f(e.expression, !1)
              );
            case 'Identifier':
              n = '';
              break;
            case 'MemberExpression':
              return (
                (n = f(e.object, t)),
                '' !== n ? n : !0 === e.computed ? f(e.property, t) : ''
              );
            case 'CallExpression':
              if ('Identifier' !== e.callee.type)
                return C(e, 'SYNTAX', 'ONLYNODESSUPPORTED');
              n = '';
              for (let r = 0; r < e.arguments.length; r++)
                if (((n = f(e.arguments[r], t)), '' !== n)) return n;
              return '';
            case 'UnaryExpression':
              n = f(e.argument, t);
              break;
            case 'BinaryExpression':
              if (((n = f(e.left, t)), '' !== n)) return n;
              if (((n = f(e.right, t)), '' !== n)) return n;
              switch (e.operator) {
                case '|':
                case '&':
                case '>>':
                case '<<':
                case '>>>':
                case '^':
                case '==':
                case '!=':
                case '<':
                case '<=':
                case '>':
                case '>=':
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                  break;
                default:
                  return C(e, 'SYNTAX', 'OPERATORNOTRECOGNISED');
              }
              return '';
            case 'LogicalExpression':
              if (((n = f(e.left, t)), '' !== n)) return n;
              if (((n = f(e.right)), '' !== n)) return n;
              switch (e.operator) {
                case '&&':
                case '||':
                  break;
                default:
                  return C(e, 'SYNTAX', 'OPERATORNOTRECOGNISED');
              }
              return '';
            case 'ArrayExpression':
              n = '';
              for (let r = 0; r < e.elements.length; r++)
                if (((n = f(e.elements[r], t)), '' !== n)) return n;
              return n;
            case 'TemplateLiteral':
              n = '';
              for (let r = 0; r < e.quasis.length; r++)
                if (((n = f(e.quasis[r], t)), '' !== n)) return n;
              for (let r = 0; r < e.expressions.length; r++)
                if (((n = f(e.expressions[r], t)), '' !== n)) return n;
              return n;
            case 'ObjectExpression':
              n = '';
              for (let r = 0; r < e.properties.length; r++) {
                if (
                  ((n = ''),
                  null !== e.properties[r].key &&
                    ('Literal' !== e.properties[r].key.type &&
                      'Identifier' !== e.properties[r].key.type &&
                      (n = C(e, 'SYNTAX', 'OBJECTPROPERTYMUSTBESTRING')),
                    'Literal' === e.properties[r].key.type))
                ) {
                  const t = e.properties[r].key,
                    i = 'value' in t ? t.value : null;
                  'string' == typeof i ||
                    i instanceof String ||
                    (n = C(e, 'SYNTAX', 'OBJECTPROPERTYMUSTBESTRING'));
                }
                if (('' === n && (n = f(e.properties[r], t)), '' !== n))
                  return n;
              }
              return n;
            case 'Property':
              return 'Literal' !== e.key.type && 'Identifier' !== e.key.type
                ? C(e, 'SYNTAX', 'ONLYLITERAL')
                : (('Identifier' !== e.key.type &&
                    ((n = f(e.key, t)), '' !== n)) ||
                    (n = f(e.value, t)),
                  n);
            default:
              return n;
          }
          return n;
        } catch (e) {
          throw e;
        }
      }
      function p(e, t) {
        let n = C(e, 'SYNTAX', 'UNREOGNISED'),
          r = null,
          i = '';
        try {
          switch (e.type) {
            case 'VariableDeclarator': {
              const n = null === e.init ? '' : p(e.init, t);
              return '' !== n
                ? n
                : ('Identifier' === e.id.type &&
                    (null === t.localScope
                      ? (t.globalScope[e.id.name.toLowerCase()] = {
                          type: 'any',
                        })
                      : (t.localScope[e.id.name.toLowerCase()] = {
                          type: 'any',
                        })),
                  '');
            }
            case 'FunctionDeclaration':
              return (
                (r = y(e.id.name.toLowerCase(), e)),
                (i = (function (e, t) {
                  const n = { globalScope: t.globalScope, localScope: {} };
                  for (let t = 0; t < e.params.length; t++) {
                    const r = e.params[t].name;
                    n.localScope[r.toLowerCase()] = { type: 'any' };
                  }
                  return p(e.body, n);
                })(e, t)),
                '' !== i
                  ? i
                  : null !== t.localScope
                  ? C(e, 'SYNTAX', 'GLOBALFUNCTIONSONLY')
                  : ((r.isnative = !1),
                    (t.globalScope[e.id.name.toLowerCase()] = {
                      type: 'FormulaFunction',
                      signature: [r],
                    }),
                    '')
              );
            case 'VariableDeclaration':
              n = '';
              for (let r = 0; r < e.declarations.length; r++)
                if (((n = p(e.declarations[r], t)), '' !== n)) return n;
              return n;
            case 'IfStatement':
              return (
                (n = p(e.test, t)),
                '' !== n
                  ? n
                  : 'AssignmentExpression' === e.test.type ||
                    'UpdateExpression' === e.test.type
                  ? C(e.test, 'SYNTAX', 'CANNOT_USE_ASSIGNMENT_IN_CONDITION')
                  : (null !== e.consequent &&
                      ((n = p(e.consequent, t)), '' !== n)) ||
                    (null !== e.alternate &&
                      ((n = p(e.alternate, t)), '' !== n))
                  ? n
                  : ''
              );
            case 'EmptyStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'Literal':
            case 'TemplateElement':
              return '';
            case 'BlockStatement':
              for (let r = 0; r < e.body.length; r++)
                if (((n = p(e.body[r], t)), '' !== n)) return n;
              return '';
            case 'ReturnStatement':
              return null !== e.argument ? p(e.argument, t) : '';
            case 'ForInStatement':
              if ('VariableDeclaration' === e.left.type) {
                if (e.left.declarations.length > 1)
                  return C(e, 'SYNTAX', 'ONLY1VAR');
                if (null !== e.left.declarations[0].init)
                  return C(e, 'SYNTAX', 'CANNOTDECLAREVAL');
              } else if ('Identifier' !== e.left.type)
                return C(e, 'SYNTAX', 'LEFTNOTVAR');
              return (
                (n = p(e.left, t)),
                '' !== n
                  ? n
                  : ((n = p(e.right, t)),
                    '' !== n ? n : ((n = p(e.body, t)), '' !== n ? n : ''))
              );
            case 'ForStatement':
              return (null !== e.init && ((n = p(e.init, t)), '' !== n)) ||
                (null !== e.test && ((n = p(e.test, t)), '' !== n)) ||
                (null !== e.body && ((n = p(e.body, t)), '' !== n)) ||
                (null !== e.update && ((n = p(e.update, t)), '' !== n))
                ? n
                : '';
            case 'UpdateExpression': {
              if (
                'Identifier' !== e.argument.type &&
                'MemberExpression' !== e.argument.type
              )
                return C(e, 'SYNTAX', 'ASSIGNMENTTOVARSONLY');
              let n = !1;
              return 'MemberExpression' === e.argument.type
                ? p(e.argument, t)
                : (null !== t.localScope &&
                    void 0 !== t.localScope[e.argument.name.toLowerCase()] &&
                    (n = !0),
                  void 0 !== t.globalScope[e.argument.name.toLowerCase()] &&
                    (n = !0),
                  !1 === n
                    ? 'Identifier ' +
                      e.argument.name +
                      ' has not been declared.'
                    : '');
            }
            case 'AssignmentExpression': {
              if (
                'Identifier' !== e.left.type &&
                'MemberExpression' !== e.left.type
              )
                return C(e, 'SYNTAX', 'ASSIGNMENTTOVARSONLY');
              let n = p(e.right, t);
              if ('' !== n) return n;
              let r = !1;
              return 'MemberExpression' === e.left.type
                ? ((n = p(e.left, t)), '' !== n ? n : '')
                : (null !== t.localScope &&
                    void 0 !== t.localScope[e.left.name.toLowerCase()] &&
                    (r = !0),
                  void 0 !== t.globalScope[e.left.name.toLowerCase()] &&
                    (r = !0),
                  !1 === r
                    ? 'Identifier ' + e.left.name + ' has not been declared.'
                    : '');
            }
            case 'ExpressionStatement':
              return (
                'AssignmentExpression' === e.expression.type ||
                  e.expression.type,
                p(e.expression, t)
              );
            case 'Identifier': {
              const r = e.name.toLowerCase();
              if (null !== t.localScope && void 0 !== t.localScope[r])
                return '';
              n =
                void 0 !== t.globalScope[r]
                  ? ''
                  : C(e, 'SYNTAX', 'VARIABLENOTFOUND');
              break;
            }
            case 'MemberExpression':
              return (
                (n = p(e.object, t)),
                '' !== n ? n : !0 === e.computed ? p(e.property, t) : ''
              );
            case 'CallExpression': {
              if ('Identifier' !== e.callee.type)
                return C(e, 'SYNTAX', 'ONLYNODESSUPPORTED');
              n = '';
              for (let r = 0; r < e.arguments.length; r++)
                if (((n = p(e.arguments[r], t)), '' !== n)) return n;
              const r = l(e.callee.name, e.arguments, t);
              -1 === r && (n = C(e, 'SYNTAX', 'NOTFOUND')),
                -2 === r && (n = C(e, 'SYNTAX', 'WRONGSIGNATURE'));
              break;
            }
            case 'UnaryExpression':
              n = p(e.argument, t);
              break;
            case 'BinaryExpression':
              return (
                (n = p(e.left, t)),
                '' !== n ? n : ((n = p(e.right, t)), '' !== n ? n : '')
              );
            case 'LogicalExpression':
              return (
                (n = p(e.left, t)),
                '' !== n
                  ? n
                  : 'AssignmentExpression' === e.left.type ||
                    'UpdateExpression' === e.left.type
                  ? C(e.left, 'SYNTAX', 'CANNOT_USE_ASSIGNMENT_IN_CONDITION')
                  : ((n = p(e.right, t)),
                    '' !== n
                      ? n
                      : 'AssignmentExpression' === e.right.type ||
                        'UpdateExpression' === e.right.type
                      ? C(
                          e.right,
                          'SYNTAX',
                          'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                        )
                      : '')
              );
            case 'ArrayExpression':
              n = '';
              for (let r = 0; r < e.elements.length; r++)
                if (((n = p(e.elements[r], t)), '' !== n)) return n;
              return n;
            case 'TemplateLiteral':
              n = '';
              for (let r = 0; r < e.quasis.length; r++)
                if (((n = p(e.quasis[r], t)), '' !== n)) return n;
              for (let r = 0; r < e.expressions.length; r++)
                if (((n = p(e.expressions[r], t)), '' !== n)) return n;
              return n;
            case 'ObjectExpression':
              n = '';
              for (let r = 0; r < e.properties.length; r++) {
                if (
                  ((n = ''),
                  null !== e.properties[r].key &&
                    ('Literal' !== e.properties[r].key.type &&
                      'Identifier' !== e.properties[r].key.type &&
                      (n = C(e, 'SYNTAX', 'OBJECTPROPERTYMUSTBESTRING')),
                    'Literal' === e.properties[r].key.type))
                ) {
                  const t = e.properties[r].key,
                    i = 'value' in t ? t.value : null;
                  'string' == typeof i ||
                    i instanceof String ||
                    (n = C(e, 'SYNTAX', 'OBJECTPROPERTYMUSTBESTRING'));
                }
                if (('' === n && (n = p(e.properties[r], t)), '' !== n))
                  return n;
              }
              return n;
            case 'Property':
              return 'Literal' !== e.key.type && 'Identifier' !== e.key.type
                ? C(e, 'SYNTAX', 'ONLYLITERAL')
                : (('Identifier' !== e.key.type &&
                    ((n = p(e.key, t)), '' !== n)) ||
                    (n = p(e.value, t)),
                  n);
            default:
              return n;
          }
          return n;
        } catch (e) {
          throw e;
        }
      }
      function d(e, t) {
        let n = !1;
        const r = t.toLowerCase();
        return (
          h(
            e,
            (e) =>
              !n &&
              ('Identifier' === e.type &&
                e.name &&
                e.name.toLowerCase() === r &&
                (n = !0),
              !0),
          ),
          n
        );
      }
      function m(e, t) {
        let n = !1;
        const r = t.toLowerCase();
        return (
          h(
            e,
            (e) =>
              !(
                n ||
                ('CallExpression' === e.type &&
                  'Identifier' === e.callee.type &&
                  e.callee.name &&
                  e.callee.name.toLowerCase() === r &&
                  ((n = !0), 1))
              ),
          ),
          n
        );
      }
      function D(e) {
        const t = [];
        return (
          h(
            e,
            (e) =>
              'MemberExpression' !== e.type ||
              'Identifier' !== e.object.type ||
              (!1 === e.computed &&
              e.object &&
              e.object.name &&
              e.property &&
              'Identifier' === e.property.type &&
              e.property.name
                ? t.push(
                    e.object.name.toLowerCase() +
                      '.' +
                      e.property.name.toLowerCase(),
                  )
                : e.object &&
                  e.object.name &&
                  e.property &&
                  'Literal' === e.property.type &&
                  'string' == typeof e.property.value &&
                  t.push(
                    e.object.name.toLowerCase() +
                      '.' +
                      e.property.value.toString().toLowerCase(),
                  ),
              !1),
          ),
          t
        );
      }
      function g(e) {
        const t = [];
        return (
          h(e, (e) => {
            if ('CallExpression' === e.type) {
              if (
                'Identifier' === e.callee.type &&
                'expects' === e.callee.name.toLowerCase()
              ) {
                let n = '';
                for (let r = 0; r < (e.arguments || []).length; r++)
                  0 === r
                    ? 'Identifier' === e.arguments[r].type &&
                      (n = e.arguments[r].name.toLowerCase())
                    : n &&
                      'Literal' === e.arguments[r].type &&
                      o(e.arguments[r].value) &&
                      t.push(n + '.' + e.arguments[r].value.toLowerCase());
                return !1;
              }
              if (
                'Identifier' === e.callee.type &&
                ['domainname', 'domaincode', 'domain', 'haskey'].indexOf(
                  e.callee.name.toLowerCase(),
                ) > -1 &&
                e.arguments.length >= 2
              ) {
                let n = '';
                return (
                  'Identifier' === e.arguments[0].type &&
                    (n = e.arguments[0].name.toLowerCase()),
                  n &&
                    'Literal' === e.arguments[1].type &&
                    o(e.arguments[1].value) &&
                    t.push(n + '.' + e.arguments[1].value.toLowerCase()),
                  !1
                );
              }
            }
            return (
              'MemberExpression' !== e.type ||
              'Identifier' !== e.object.type ||
              (!1 === e.computed &&
              e.object &&
              e.object.name &&
              e.property &&
              'Identifier' === e.property.type &&
              e.property.name
                ? t.push(
                    e.object.name.toLowerCase() +
                      '.' +
                      e.property.name.toLowerCase(),
                  )
                : e.object &&
                  e.object.name &&
                  e.property &&
                  'Literal' === e.property.type &&
                  'string' == typeof e.property.value &&
                  t.push(
                    e.object.name.toLowerCase() +
                      '.' +
                      e.property.value.toString().toLowerCase(),
                  ),
              !1)
            );
          }),
          t
        );
      }
      function y(e, t) {
        const n = [];
        if (void 0 !== t.params && null !== t.params)
          for (let e = 0; e < t.params.length; e++) n.push('any');
        return { name: e, return: 'any', params: n };
      }
      function E(e, t, n, r) {
        const i = {};
        null == e && (e = {}),
          null == n && (n = {}),
          (i.infinity = { type: 'any' }),
          (i.textformatting = { type: 'any' }),
          (i.pi = { type: 'any' });
        for (const e in t)
          'sync' === r && void 0 !== t[e].min
            ? (i[e] = {
                type: 'FormulaFunction',
                signature: { min: t[e].min, max: t[e].max },
              })
            : 'sync' !== r &&
              void 0 !== t[e].fmin &&
              (i[e] = {
                type: 'FormulaFunction',
                signature: { min: t[e].fmin, max: t[e].fmax },
              });
        for (let e = 0; e < n.length; e++) {
          const t = n[e];
          i[t.name] = { type: 'FormulaFunction', signature: t };
        }
        for (const t in e) (i[t] = e[t]), (i[t].type = 'any');
        return i;
      }
      function A(e, t, n = 'async', i = r) {
        const s = {
          globalScope: E(t.vars, i, t.customFunctions, n),
          localScope: null,
        };
        return p(e.body[0].body, s);
      }
      function x(e) {
        return 'BlockStatement' !== e.body[0].body.type
          ? 'Invalid formula content.'
          : f(e.body[0].body);
      }
      function C(e, t, n) {
        let r = '';
        switch (t) {
          case 'SYNTAX':
          default:
            r = 'Syntax Error: ';
            break;
          case 'RUNTIME':
            r = 'Runtime Error: ';
        }
        try {
          switch (e.type) {
            case 'IfStatement':
              switch (n) {
                case 'CANNOT_USE_ASSIGNMENT_IN_CONDITION':
                  r += ' Assignments not be made in logical tests';
                  break;
                case 'CANNOT_USE_NONBOOLEAN_IN_CONDITION':
                  r += ' Non Boolean used as Condition';
              }
              break;
            case 'UpdateExpression':
            case 'AssignmentExpression':
              switch (n) {
                case 'CANNOT_USE_ASSIGNMENT_IN_CONDITION':
                  r += ' Assignments not be made in logical tests';
                  break;
                case 'ASSIGNMENTTOVARSONLY':
                  r += ' Assignments can only be made to identifiers';
              }
              break;
            case 'ExpressionStatement':
              r += ' Assignments can only be made to identifiers';
              break;
            case 'FunctionDeclaration':
              switch (n) {
                case 'GLOBALFUNCTIONSONLY':
                  r += ' Functions cannot be declared as variables';
                  break;
                case 'FUNCTIONMUSTHAVEIDENTIFIER':
                  r += ' Function Definition must have an identifier';
              }
              break;
            case 'VariableDeclaration':
              r += ' Only 1 variable can be declared at a time';
              break;
            case 'VariableDeclarator':
              switch (n) {
                case 'FUNCTIONVARIABLEDECLARATOR':
                  r += ' Functions cannot be declared as variables';
                  break;
                case 'VARIABLEMUSTHAVEIDENTIFIER':
                  r += ' Variable Definition must have an identifier';
              }
              break;
            case 'Identifier':
              (r += ' Identifier Not Found. '), (r += e.name);
              break;
            case 'ObjectExpression':
              'OBJECTPROPERTYMUSTBESTRING' === n &&
                (r += ' Property name must be a string');
              break;
            case 'ForStatement':
              'CANNOT_USE_NONBOOLEAN_IN_CONDITION' === n &&
                (r += ' Non Boolean used as Condition');
              break;
            case 'ForInStatement':
              switch (n) {
                case 'ONLY1VAR':
                  r += ' Can only declare 1 var for use with IN';
                  break;
                case 'CANNOTDECLAREVAL':
                  r += ' Can only declare value for use with IN';
                  break;
                case 'LEFTNOVAR':
                  r += 'Must provide a variable to iterate with.';
                  break;
                case 'VARIABLENOTDECLARED':
                  r += 'Variable must be declared before it is used..';
                  break;
                case 'CANNOTITERATETHISTYPE':
                  r += 'This type cannot be used in an IN loop';
              }
              break;
            case 'MemberExpression':
              switch (n) {
                case 'PROPERTYNOTFOUND':
                  (r += 'Cannot find member property. '),
                    (r +=
                      !1 === e.computed && 'Identifier' === e.property.type
                        ? e.property.name
                        : '');
                  break;
                case 'OUTOFBOUNDS':
                  (r += 'Out of Bounds. '),
                    (r +=
                      !1 === e.computed && 'Identifier' === e.property.type
                        ? e.property.name
                        : '');
                  break;
                case 'NOTFOUND':
                  (r += 'Cannot call member method on null. '),
                    (r +=
                      !1 === e.computed && 'Identifier' === e.property.type
                        ? e.property.name
                        : '');
                  break;
                case 'INVALIDTYPE':
                  (r += 'Cannot call member property on object of this type. '),
                    (r +=
                      !1 === e.computed && 'Identifier' === e.property.type
                        ? e.property.name
                        : '');
              }
              break;
            case 'Property':
              'ONLYLITERAL' === n &&
                (r += 'Property names must be literals or identifiers');
              break;
            case 'Literal':
              break;
            case 'CallExpression':
              switch (n) {
                case 'WRONGSIGNATURE':
                  (r += 'Function signature does not match: '),
                    (r += 'Identifier' === e.callee.type ? e.callee.name : '');
                  break;
                case 'ONLYNODESUPPORTED':
                  (r += 'Functions must be declared.'),
                    (r += 'Identifier' === e.callee.type ? e.callee.name : '');
                  break;
                case 'NOTAFUNCTION':
                  (r += 'Not a Function: '),
                    (r += 'Identifier' === e.callee.type ? e.callee.name : '');
                  break;
                case 'NOTFOUND':
                  r +=
                    'Function Not Found: ' +
                    ('Identifier' === e.callee.type ? e.callee.name : '');
              }
              break;
            case 'UnaryExpression':
              switch (n) {
                case 'NOTSUPPORTEDUNARYOPERATOR':
                  r +=
                    'Operator ' +
                    e.operator +
                    ' not allowed in this context. Only ! can be used with boolean, and - with a number';
                  break;
                case 'NOTSUPPORTEDTYPE':
                  r +=
                    'Unary operator ' +
                    e.operator +
                    ' cannot be used with this argument.';
              }
            case 'BinaryExpression':
              'OPERATORNOTRECOGNISED' === n &&
                (r += 'Binary Operator not recognised ' + e.operator);
              break;
            case 'LogicalExpression':
              switch (n) {
                case 'ONLYBOOLEAN':
                  r +=
                    'Operator ' +
                    e.operator +
                    ' cannot be used. Only || or && are allowed values';
                  break;
                case 'ONLYORORAND':
                  r +=
                    'Logical Expression ' +
                    e.operator +
                    ' being applied to parameters that are not boolean.';
              }
              break;
            case 'ArrayExpression':
              'FUNCTIONCONTEXTILLEGAL' === n &&
                (r += ' Cannot Put Function inside Array.');
              break;
            default:
              r += 'Expression contains unrecognised code structures.';
          }
        } catch (e) {
          throw e;
        }
        return r;
      }
      function w(e, t, n) {
        return {
          line: e.loc.start.line,
          character: e.loc.start.column,
          reason: C(e, t, n),
        };
      }
      function F(e, t, n, r, i = !0) {
        if (null === e) throw new Error('Unnexpexted Expression Syntax');
        let s = null;
        try {
          switch (e.type) {
            case 'VariableDeclarator':
              return (
                'Identifier' !== e.id.type
                  ? r.push(w(e, 'SYNTAX', 'VARIABLEMUSTHAVEIDENTIFIER'))
                  : (null !== t.localScope
                      ? t.localScope[e.id.name.toLowerCase()]
                      : t.globalScope[e.id.name.toLowerCase()],
                    null === t.localScope
                      ? (t.globalScope[e.id.name.toLowerCase()] = {
                          type: 'any',
                        })
                      : (t.localScope[e.id.name.toLowerCase()] = {
                          type: 'any',
                        })),
                void (null !== e.init && F(e.init, t, n, r, i))
              );
            case 'FunctionDeclaration':
              return (
                !1 === i && r.push(w(e, 'SYNTAX', 'GLOBALFUNCTIONSONLY')),
                'Identifier' !== e.id.type &&
                  r.push(w(e, 'SYNTAX', 'FUNCTIONMUSTHAVEIDENTIFIER')),
                (s = y('', e)),
                (function (e, t, n, r) {
                  const i = { globalScope: t.globalScope, localScope: {} };
                  for (let t = 0; t < e.params.length; t++) {
                    const n = e.params[t].name;
                    i.localScope[n.toLowerCase()] = { type: 'any' };
                  }
                  F(e.body, i, n, r, !1);
                })(e, t, n, r),
                null !== t.localScope &&
                  r.push(w(e, 'SYNTAX', 'GLOBALFUNCTIONSONLY')),
                (s.isnative = !1),
                void (
                  'Identifier' === e.id.type &&
                  (t.globalScope[e.id.name.toLowerCase()] = {
                    type: 'FormulaFunction',
                    signature: [s],
                  })
                )
              );
            case 'VariableDeclaration':
              for (let s = 0; s < e.declarations.length; s++)
                F(e.declarations[s], t, n, r, i);
              return;
            case 'IfStatement':
              return (
                null !== e.test &&
                  (F(e.test, t, n, r, i),
                  ('AssignmentExpression' !== e.test.type &&
                    'UpdateExpression' !== e.test.type) ||
                    r.push(
                      w(e.test, 'SYNTAX', 'CANNOT_USE_ASSIGNMENT_IN_CONDITION'),
                    )),
                null !== e.consequent && F(e.consequent, t, n, r, i),
                void (null !== e.alternate && F(e.alternate, t, n, r, i))
              );
            case 'EmptyStatement':
            case 'BreakStatement':
            case 'ContinueStatement':
            case 'Literal':
            case 'TemplateElement':
              return;
            case 'BlockStatement':
              if (null !== e.body)
                for (let s = 0; s < e.body.length; s++)
                  F(e.body[s], t, n, r, i);
              return;
            case 'ReturnStatement':
              return void (null !== e.argument && F(e.argument, t, n, r, i));
            case 'ForInStatement':
              return (
                'VariableDeclaration' === e.left.type
                  ? (e.left.declarations.length > 1 &&
                      r.push(w(e, 'SYNTAX', 'ONLY1VAR')),
                    null !== e.left.declarations[0].init &&
                      r.push(w(e, 'SYNTAX', 'CANNOTDECLAREVAL')))
                  : 'Identifier' !== e.left.type &&
                    r.push(w(e, 'SYNTAX', 'LEFTNOTVAR')),
                F(e.left, t, n, r, i),
                F(e.right, t, n, r, i),
                void F(e.body, t, n, r, i)
              );
            case 'ForStatement':
              return (
                null !== e.init && F(e.init, t, n, r, i),
                null !== e.test && F(e.test, t, n, r, i),
                null !== e.body && F(e.body, t, n, r, i),
                void (null !== e.update && F(e.update, t, n, r, i))
              );
            case 'UpdateExpression':
              if (
                'Identifier' !== e.argument.type &&
                'MemberExpression' !== e.argument.type
              )
                r.push(w(e, 'SYNTAX', 'ASSIGNMENTTOVARSONLY'));
              else {
                if ('Identifier' === e.argument.type) {
                  let i = !1;
                  !1 === n &&
                    (null !== t.localScope &&
                      void 0 !== t.localScope[e.argument.name.toLowerCase()] &&
                      (i = !0),
                    void 0 !== t.globalScope[e.argument.name.toLowerCase()] &&
                      (i = !0),
                    !1 === i &&
                      r.push({
                        line: null === e ? 0 : e.loc.start.line,
                        character: null === e ? 0 : e.loc.start.column,
                        reason:
                          'Identifier ' +
                          e.argument.name +
                          ' has not been declared.',
                      }));
                }
                'MemberExpression' === e.argument.type &&
                  F(e.argument, t, n, r, i);
              }
              return;
            case 'AssignmentExpression': {
              switch (
                ('Identifier' !== e.left.type &&
                  'MemberExpression' !== e.left.type &&
                  r.push(w(e, 'SYNTAX', 'ASSIGNMENTTOVARSONLY')),
                e.operator)
              ) {
                case '=':
                case '/=':
                case '*=':
                case '%=':
                case '+=':
                case '-=':
                  break;
                default:
                  r.push(w(e, 'SYNTAX', 'OPERATORNOTRECOGNISED'));
              }
              F(e.right, t, n, r, i);
              let s = !1;
              return (
                'Identifier' === e.left.type &&
                  (null !== t.localScope &&
                    void 0 !== t.localScope[e.left.name.toLowerCase()] &&
                    (s = !0),
                  void 0 !== t.globalScope[e.left.name.toLowerCase()] &&
                    (s = !0),
                  !1 === n &&
                    !1 === s &&
                    r.push({
                      line: null === e ? 0 : e.loc.start.line,
                      character: null === e ? 0 : e.loc.start.column,
                      reason:
                        'Identifier ' + e.left.name + ' has not been declared.',
                    })),
                void (
                  'MemberExpression' === e.left.type && F(e.left, t, n, r, i)
                )
              );
            }
            case 'ExpressionStatement':
              return (
                'AssignmentExpression' === e.expression.type ||
                  e.expression.type,
                void F(e.expression, t, n, r, i)
              );
            case 'Identifier': {
              const i = e.name.toLowerCase();
              if (null !== t.localScope && void 0 !== t.localScope[i]) return;
              if (void 0 !== t.globalScope[i]) return;
              !1 === n && r.push(w(e, 'SYNTAX', 'VARIABLENOTFOUND'));
              break;
            }
            case 'MemberExpression':
              return (
                F(e.object, t, n, r, i),
                void (!0 === e.computed && F(e.property, t, n, r, i))
              );
            case 'CallExpression':
              'Identifier' !== e.callee.type &&
                r.push(w(e, 'SYNTAX', 'ONLYNODESSUPPORTED'));
              for (let s = 0; s < e.arguments.length; s++)
                F(e.arguments[s], t, n, r, i);
              if ('Identifier' === e.callee.type) {
                const i = l(e.callee.name, e.arguments, t);
                !1 === n && -1 === i && r.push(w(e, 'SYNTAX', 'NOTFOUND')),
                  -2 === i && r.push(w(e, 'SYNTAX', 'WRONGSIGNATURE'));
              }
              return;
            case 'UnaryExpression':
              return void F(e.argument, t, n, r, i);
            case 'BinaryExpression':
              switch (
                (F(e.left, t, n, r, i), F(e.right, t, n, r, i), e.operator)
              ) {
                case '==':
                case '!=':
                case '<':
                case '<=':
                case '>':
                case '>=':
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                case '&':
                case '|':
                case '^':
                case '<<':
                case '>>':
                case '>>>':
                  break;
                default:
                  r.push(w(e, 'SYNTAX', 'OPERATORNOTRECOGNISED'));
              }
              return;
            case 'LogicalExpression':
              switch (e.operator) {
                case '&&':
                case '||':
                  break;
                default:
                  r.push(w(e, 'SYNTAX', 'OPERATORNOTRECOGNISED'));
              }
              return (
                F(e.left, t, n, r, i),
                ('AssignmentExpression' !== e.left.type &&
                  'UpdateExpression' !== e.left.type) ||
                  r.push(w(e, 'SYNTAX', 'CANNOT_USE_ASSIGNMENT_IN_CONDITION')),
                F(e.right, t, n, r, i),
                void (
                  ('AssignmentExpression' !== e.right.type &&
                    'UpdateExpression' !== e.right.type) ||
                  r.push(w(e, 'SYNTAX', 'CANNOT_USE_ASSIGNMENT_IN_CONDITION'))
                )
              );
            case 'ArrayExpression':
              for (let s = 0; s < e.elements.length; s++)
                F(e.elements[s], t, n, r, i);
              return;
            case 'TemplateLiteral':
              for (let s = 0; s < e.quasis.length; s++)
                F(e.quasis[s], t, n, r, i);
              for (let s = 0; s < e.expressions.length; s++)
                F(e.expressions[s], t, n, r, i);
              return;
            case 'ObjectExpression':
              for (let s = 0; s < e.properties.length; s++)
                F(e.properties[s], t, n, r, i);
              return;
            case 'Property':
              return (
                'Literal' !== e.key.type &&
                  'Identifier' !== e.key.type &&
                  r.push(w(e, 'SYNTAX', 'ONLYLITERAL')),
                'Literal' === e.key.type && F(e.key, t, n, r, i),
                void F(e.value, t, n, r, i)
              );
            default:
              r.push(w(e, 'SYNTAX', 'UNRECOGNISED'));
          }
          return;
        } catch (t) {
          r.push({
            line: null === e ? 0 : e.loc.start.line,
            character: null === e ? 0 : e.loc.start.column,
            reason: 'Unnexpected Syntax',
          });
        }
      }
      function b(e, t, n, i = 'async', s = r) {
        const o = [];
        if ('BlockStatement' !== e.body[0].body.type)
          return [{ line: 0, character: 0, reason: 'Invalid Body' }];
        null == t && (t = { vars: {}, customFunctions: [] });
        const a = {
          globalScope: E(t.vars, s, t.customFunctions, i),
          localScope: null,
        };
        try {
          F(e.body[0].body, a, n, o);
        } catch (e) {}
        return o;
      }
      function S(e) {
        const t = [];
        return (
          h(
            e,
            (e) => (
              'CallExpression' === e.type &&
                'Identifier' === e.callee.type &&
                t.push(e.callee.name.toLowerCase()),
              !0
            ),
          ),
          t
        );
      }
      function N(e, t = []) {
        let n = null;
        if (void 0 === e.usesFeatureSet) {
          null === n && (n = S(e)), (e.usesFeatureSet = !1);
          for (let t = 0; t < n.length; t++)
            i.indexOf(n[t]) > -1 && ((e.usesFeatureSet = !0), (e.isAsync = !0));
          if (!1 === e.usesFeatureSet && t && t.length > 0)
            for (const n of t)
              if (d(e, n)) {
                (e.usesFeatureSet = !0), (e.isAsync = !0);
                break;
              }
        }
        if (void 0 === e.usesGeometry) {
          (e.usesGeometry = !1), null === n && (n = S(e));
          for (let t = 0; t < n.length; t++)
            s.indexOf(n[t]) > -1 && (e.usesGeometry = !0);
        }
      }
    },
    84211: (e, t, n) => {
      n.d(t, { A: () => a });
      var r = n(9609),
        i = n(12384),
        s = n(61363),
        o = n(95330);
      const a = Object.freeze({
        __proto__: null,
        registerFunctions: function (e) {
          function t(t, n) {
            if (n instanceof r.Z) return e.arcadeCustomFunctionHandler(n);
            if (n instanceof s.N)
              return (...e) => n.fn(t, { preparsed: !0, arguments: e });
            if (n instanceof s.S)
              return (...e) => {
                if (e.length !== n.paramCount)
                  throw new Error('Invalid parameters');
                return n.fn(...e);
              };
            throw new Error('Invalid Parameter');
          }
          function n(e) {
            if (e instanceof i.Z) return e.toArray();
            if ((0, s.a)(e)) return e;
            throw new Error('Invalid Parameter');
          }
          (e.functions.array = function (t, n) {
            return e.standardFunction(t, n, function (e, t, n) {
              (0, s.p)(n, 1, 2);
              const r = (0, s.t)(n[0]);
              if (isNaN(r) || !1 === (0, s.B)(r))
                throw new Error('Invalid Parameter');
              const i = (0, s.C)(n[1], null),
                o = new Array(r);
              return o.fill(i), o;
            });
          }),
            (e.functions.front = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 1, 1), (0, s.b)(n[0]))) {
                  if (n[0].length() <= 0) throw new Error('Array is empty');
                  return n[0].get(0);
                }
                if ((0, s.a)(n[0])) {
                  if (n[0].length <= 0) throw new Error('Array is empty');
                  return n[0][0];
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.back = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 1, 1), (0, s.b)(n[0]))) {
                  if (n[0].length() <= 0) throw new Error('Array is empty');
                  return n[0].get(n[0].length() - 1);
                }
                if ((0, s.a)(n[0])) {
                  if (n[0].length <= 0) throw new Error('Array is empty');
                  return n[0][n[0].length - 1];
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.push = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 1, 2), (0, s.a)(n[0])))
                  return (n[0][n[0].length] = n[1]), n[0].length;
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.pop = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 1, 1), (0, s.a)(n[0]))) {
                  if (n[0].length <= 0) throw new Error('Array is empty');
                  const e = n[0][n[0].length - 1];
                  return (n[0].length = n[0].length - 1), e;
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.erase = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 2, 2), (0, s.a)(n[0]))) {
                  let e = (0, s.t)(n[1]);
                  if (isNaN(e) || !1 === (0, s.B)(e))
                    throw new Error('Invalid Parameter');
                  const t = n[0];
                  if (t.length <= 0) throw new Error('Array is empty');
                  if ((e < 0 && (e = t.length + e), e < 0))
                    throw new Error('Element not found');
                  if (e >= t.length)
                    throw new Error('Index is greater than array');
                  return t.splice(e, 1), s.v;
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.insert = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 3, 3), (0, s.a)(n[0]))) {
                  const e = (0, s.t)(n[1]);
                  if (isNaN(e) || !1 === (0, s.B)(e))
                    throw new Error('Invalid Parameter');
                  const t = n[2],
                    r = n[0];
                  if (e > r.length)
                    throw new Error('Index is greater than array');
                  if (e < 0 && e < -1 * r.length)
                    throw new Error('Index is greater than array');
                  return e === r.length
                    ? ((r[e] = t), s.v)
                    : (r.splice(e, 0, t), s.v);
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.resize = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 2, 3), (0, s.a)(n[0]))) {
                  const e = (0, s.t)(n[1]);
                  if (isNaN(e) || !1 === (0, s.B)(e))
                    throw new Error('Invalid Parameter');
                  if (e < 0) throw new Error('Size cannot be negative');
                  const t = (0, s.C)(n[2], null),
                    r = n[0];
                  if (r.length >= e) return (r.length = e), s.v;
                  const i = r.length;
                  r.length = e;
                  for (let e = i; e < r.length; e++) r[e] = t;
                  return s.v;
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.includes = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 2, 2), (0, s.a)(n[0]))) {
                  const e = n[1];
                  return n[0].findIndex((t) => (0, s.e)(t, e)) > -1;
                }
                if ((0, s.b)(n[0])) {
                  const e = n[1];
                  return n[0].toArray().findIndex((t) => (0, s.e)(t, e)) > -1;
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.slice = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                if (((0, s.p)(n, 1, 3), (0, s.a)(n[0]))) {
                  const e = (0, s.t)((0, s.C)(n[1], 0)),
                    t = (0, s.t)((0, s.C)(n[2], n[0].length));
                  if (isNaN(e) || !1 === (0, s.B)(e))
                    throw new Error('Invalid Parameter');
                  if (isNaN(t) || !1 === (0, s.B)(t))
                    throw new Error('Invalid Parameter');
                  return n[0].slice(e, t);
                }
                if ((0, s.b)(n[0])) {
                  const e = n[0],
                    t = (0, s.t)((0, s.C)(n[1], 0)),
                    r = (0, s.t)((0, s.C)(n[2], e.length()));
                  if (isNaN(t) || !1 === (0, s.B)(t))
                    throw new Error('Invalid Parameter');
                  if (isNaN(r) || !1 === (0, s.B)(r))
                    throw new Error('Invalid Parameter');
                  return e.toArray().slice(t, r);
                }
                throw new Error('Invalid Parameter');
              });
            }),
            (e.functions.splice = function (t, n) {
              return e.standardFunction(t, n, function (e, t, n) {
                const r = [];
                for (let e = 0; e < n.length; e++)
                  (0, s.a)(n[e])
                    ? r.push(...n[e])
                    : (0, s.b)(n[e])
                    ? r.push(...n[e].toArray())
                    : r.push(n[e]);
                return r;
              });
            }),
            'sync' === e.mode &&
              ((e.functions.any = function (r, i) {
                return e.standardFunction(r, i, function (e, i, o) {
                  (0, s.p)(o, 2, 2);
                  const a = t(r, o[1]),
                    u = n(o[0]);
                  for (const e of u) {
                    const t = a(e);
                    if ((0, s.i)(t) && !0 === t) return !0;
                  }
                  return !1;
                });
              }),
              (e.functions.all = function (r, i) {
                return e.standardFunction(r, i, function (e, i, o) {
                  (0, s.p)(o, 2, 2);
                  const a = t(r, o[1]),
                    u = n(o[0]);
                  for (const e of u) if (!0 !== a(e)) return !1;
                  return !0;
                });
              }),
              (e.functions.none = function (r, i) {
                return e.standardFunction(r, i, function (e, i, o) {
                  (0, s.p)(o, 2, 2);
                  const a = t(r, o[1]),
                    u = n(o[0]);
                  for (const e of u) if (!0 === a(e)) return !1;
                  return !0;
                });
              }),
              (e.functions.reduce = function (r, i) {
                return e.standardFunction(r, i, function (e, i, o) {
                  (0, s.p)(o, 2, 3);
                  const a = t(r, o[1]),
                    u = n(o[0]);
                  return 2 === o.length
                    ? 0 === u.length
                      ? null
                      : u.reduce((e, t) => {
                          const n = a(e, t);
                          return void 0 !== n && n !== s.v ? n : null;
                        })
                    : u.reduce((e, t) => {
                        const n = a(e, t);
                        return void 0 !== n && n !== s.v ? n : null;
                      }, o[2]);
                });
              }),
              (e.functions.map = function (r, i) {
                return e.standardFunction(r, i, function (e, i, o) {
                  (0, s.p)(o, 2, 2);
                  const a = t(r, o[1]),
                    u = n(o[0]),
                    l = [];
                  for (const e of u) {
                    const t = a(e);
                    void 0 !== t && t !== s.v ? l.push(t) : l.push(null);
                  }
                  return l;
                });
              }),
              (e.functions.filter = function (r, i) {
                return e.standardFunction(r, i, function (e, i, o) {
                  (0, s.p)(o, 2, 2);
                  const a = t(r, o[1]),
                    u = n(o[0]),
                    l = [];
                  for (const e of u) !0 === a(e) && l.push(e);
                  return l;
                });
              })),
            'async' === e.mode &&
              ((e.functions.any = function (r, i) {
                return e.standardFunctionAsync(r, i, function (e, i, a) {
                  (0, s.p)(a, 2, 2);
                  const u = t(r, a[1]),
                    l = n(a[0]),
                    c = { result: !1 };
                  return l
                    .reduce(
                      (e, t, n) =>
                        e.then((e) => {
                          if (
                            (n > 0 && !0 === e && (c.result = !0),
                            !0 === c.result)
                          )
                            return (0, o.DB)(!0);
                          const r = u(t);
                          return (0, o.y8)(r) ? r : (0, o.DB)(r);
                        }),
                      Promise.resolve(!1),
                    )
                    .then((e) => (!0 === e && (c.result = !0), c.result));
                });
              }),
              (e.functions.all = function (r, i) {
                return e.standardFunctionAsync(r, i, function (e, i, a) {
                  (0, s.p)(a, 2, 2);
                  const u = t(r, a[1]),
                    l = n(a[0]),
                    c = { result: !0 };
                  return l
                    .reduce(
                      (e, t, n) =>
                        e.then((e) => {
                          if (
                            (n > 0 && !0 !== e && (c.result = !1),
                            !1 === c.result)
                          )
                            return (0, o.DB)(!1);
                          const r = u(t);
                          return (0, o.y8)(r) ? r : (0, o.DB)(r);
                        }),
                      Promise.resolve(!0),
                    )
                    .then((e) => (!0 !== e && (c.result = !1), c.result));
                });
              }),
              (e.functions.none = function (r, i) {
                return e.standardFunctionAsync(r, i, function (e, i, a) {
                  (0, s.p)(a, 2, 2);
                  const u = t(r, a[1]),
                    l = n(a[0]),
                    c = { result: !0 };
                  return l
                    .reduce(
                      (e, t, n) =>
                        e.then((e) => {
                          if (
                            (n > 0 && !0 === e && (c.result = !1),
                            !1 === c.result)
                          )
                            return (0, o.DB)(!0);
                          const r = u(t);
                          return (0, o.y8)(r) ? r : (0, o.DB)(r);
                        }),
                      Promise.resolve(!1),
                    )
                    .then((e) => (!0 === e && (c.result = !1), c.result));
                });
              }),
              (e.functions.filter = function (r, i) {
                return e.standardFunctionAsync(r, i, function (e, i, a) {
                  (0, s.p)(a, 2, 2);
                  const u = t(r, a[1]),
                    l = n(a[0]),
                    c = [];
                  return l
                    .reduce(
                      (e, t, n) =>
                        e.then((e) => {
                          n > 0 && !0 === e && c.push(l[n - 1]);
                          const r = u(t);
                          return (0, o.y8)(r) ? r : (0, o.DB)(r);
                        }),
                      Promise.resolve(!1),
                    )
                    .then(
                      (e) => (
                        !0 === e && l.length > 0 && c.push(l[l.length - 1]), c
                      ),
                    );
                });
              }),
              (e.functions.reduce = function (r, i) {
                return e.standardFunctionAsync(r, i, function (e, i, a) {
                  (0, s.p)(a, 2, 3);
                  const u = t(r, a[1]),
                    l = n(a[0]);
                  let c = null;
                  if (a.length > 2) {
                    const e = (0, s.C)(a[2], null);
                    c = l.reduce(
                      (e, t) =>
                        e.then((e) => {
                          (void 0 !== e && e !== s.v) || (e = null);
                          const n = u(e, t);
                          return (0, o.y8)(n) ? n : (0, o.DB)(n);
                        }),
                      Promise.resolve(e),
                    );
                  } else {
                    if (0 === l.length) return null;
                    c = l.reduce((e, t, n) => {
                      if (n <= 1) {
                        const n = u(e, t);
                        return (0, o.y8)(n) ? n : (0, o.DB)(n);
                      }
                      return e.then((e) => {
                        (void 0 !== e && e !== s.v) || (e = null);
                        const n = u(e, t);
                        return (0, o.y8)(n) ? n : (0, o.DB)(n);
                      });
                    });
                  }
                  return c.then((e) => (void 0 !== e && e !== s.v ? e : null));
                });
              }),
              (e.functions.map = function (r, i) {
                return e.standardFunctionAsync(r, i, function (e, i, a) {
                  (0, s.p)(a, 2, 2);
                  const u = t(r, a[1]),
                    l = n(a[0]),
                    c = { result: [] };
                  return l
                    .reduce(
                      (e, t, n) =>
                        e.then((e) => {
                          n > 0 &&
                            (void 0 !== e && e !== s.v
                              ? c.result.push(e)
                              : c.result.push(null));
                          const r = u(t);
                          return (0, o.y8)(r) ? r : (0, o.DB)(r);
                        }),
                      Promise.resolve(),
                    )
                    .then(
                      (e) => (
                        l.length > 0 &&
                          (void 0 !== e && e !== s.v
                            ? c.result.push(e)
                            : c.result.push(null)),
                        c.result
                      ),
                    );
                });
              }));
        },
      });
    },
    61363: (e, t, n) => {
      n.d(t, {
        $: () => fe,
        A: () => se,
        B: () => U,
        C: () => O,
        D: () => W,
        E: () => oe,
        F: () => Y,
        G: () => ce,
        H: () => De,
        I: () => b,
        J: () => Ee,
        K: () => ye,
        L: () => Ae,
        M: () => k,
        N: () => F,
        O: () => q,
        P: () => Be,
        Q: () => Ie,
        R: () => S,
        S: () => N,
        T: () => ve,
        U: () => Te,
        V: () => ke,
        W: () => te,
        X: () => we,
        Y: () => xe,
        Z: () => pe,
        _: () => he,
        a: () => Z,
        b: () => H,
        c: () => B,
        d: () => ee,
        e: () => Q,
        f: () => R,
        g: () => $,
        h: () => Fe,
        i: () => L,
        j: () => M,
        k: () => P,
        l: () => _e,
        m: () => I,
        n: () => T,
        o: () => j,
        p: () => V,
        q: () => z,
        r: () => G,
        s: () => le,
        t: () => ie,
        u: () => ne,
        v: () => v,
        w: () => be,
        x: () => Ne,
        y: () => _,
        z: () => ue,
      });
      var r = n(9609),
        i = n(12384),
        s = n(50728),
        o = n(25785),
        a = n(95330),
        u = n(6570),
        l = n(9361),
        c = n(65091),
        h = n(13473),
        f = n(38913),
        p = n(58901),
        d = n(99490),
        m = n(70586),
        D = n(14808),
        g = n(86662),
        y = n(70171),
        E = n(90658);
      class A {
        constructor(e) {
          this.value = e;
        }
      }
      class x {
        constructor(e) {
          this.value = e;
        }
      }
      class C {
        constructor(e) {
          this.fn = e;
        }
      }
      class w {
        constructor(e, t) {
          (this.paramCount = t), (this.fn = e);
        }
      }
      const F = C,
        b = x,
        S = A,
        N = w,
        v = { type: 'VOID' },
        I = { type: 'BREAK' },
        T = { type: 'CONTINUE' };
      function k(e, t, n) {
        return '' === t || null == t || t === n || t === n
          ? e
          : (e = e.split(t).join(n));
      }
      function B(e) {
        return e instanceof C || e instanceof r.Z || e instanceof w;
      }
      function _(e) {
        return !!(
          R(e) ||
          M(e) ||
          j(e) ||
          L(e) ||
          null === e ||
          e === v ||
          'number' == typeof e
        );
      }
      function O(e, t) {
        return void 0 === e ? t : e;
      }
      function R(e) {
        return 'string' == typeof e || e instanceof String;
      }
      function L(e) {
        return 'boolean' == typeof e;
      }
      function M(e) {
        return 'number' == typeof e;
      }
      function U(e) {
        return 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
      }
      function Z(e) {
        return e instanceof Array;
      }
      function P(e) {
        return (
          'esri.arcade.Feature' === (null == e ? void 0 : e.arcadeDeclaredClass)
        );
      }
      function z(e) {
        return (
          !0 ===
          (e &&
            e.declaredRootClass &&
            'esri.arcade.featureset.support.FeatureSet' === e.declaredRootClass)
        );
      }
      function G(e) {
        return (
          !0 ===
          (e &&
            e.declaredRootClass &&
            'esri.arcade.featureSetCollection' === e.declaredRootClass)
        );
      }
      function H(e) {
        return e instanceof i.Z;
      }
      function j(e) {
        return e instanceof Date;
      }
      function V(e, t, n) {
        if (e.length < t || e.length > n)
          throw new Error('Function called with wrong number of Parameters');
      }
      function Y(e) {
        return e < 0 ? -Math.round(-e) : Math.round(e);
      }
      function q() {
        let e = Date.now();
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
          /[xy]/g,
          function (t) {
            const n = (e + 16 * Math.random()) % 16 | 0;
            return (
              (e = Math.floor(e / 16)),
              ('x' === t ? n : (3 & n) | 8).toString(16)
            );
          },
        );
      }
      function J(e, t) {
        return !1 === isNaN(e)
          ? null == t || '' === t
            ? e.toString()
            : ((t = k(t, '‰', '')),
              (t = k(t, '¤', '')),
              (0, D.WU)(e, { pattern: t }))
          : e.toString();
      }
      function X(e, t) {
        const n = d.ou.fromJSDate(e);
        return null == t || '' === t
          ? n.toISO({ suppressMilliseconds: !0 })
          : n.toFormat(W(t), { locale: (0, y.Kd)(), numberingSystem: 'latn' });
      }
      function W(e) {
        e = e.replace(/LTS|LT|LL?L?L?|l{1,4}/g, '[$&]');
        let t = '';
        const n =
          /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
        for (const r of e.match(n))
          switch (r) {
            case 'D':
              t += 'd';
              break;
            case 'DD':
              t += 'dd';
              break;
            case 'DDD':
              t += 'o';
              break;
            case 'd':
              t += 'c';
              break;
            case 'ddd':
              t += 'ccc';
              break;
            case 'dddd':
              t += 'cccc';
              break;
            case 'M':
              t += 'L';
              break;
            case 'MM':
              t += 'LL';
              break;
            case 'MMM':
              t += 'LLL';
              break;
            case 'MMMM':
              t += 'LLLL';
              break;
            case 'YY':
              t += 'yy';
              break;
            case 'Y':
            case 'YYYY':
              t += 'yyyy';
              break;
            case 'Q':
              t += 'q';
              break;
            case 'Z':
              t += 'ZZ';
              break;
            case 'ZZ':
              t += 'ZZZ';
              break;
            case 'S':
              t += "'S'";
              break;
            case 'SS':
              t += "'SS'";
              break;
            case 'SSS':
              t += 'u';
              break;
            case 'A':
            case 'a':
              t += 'a';
              break;
            case 'm':
            case 'mm':
            case 'h':
            case 'hh':
            case 'H':
            case 'HH':
            case 's':
            case 'ss':
            case 'X':
            case 'x':
              t += r;
              break;
            default:
              r.length >= 2 && '[' === r.slice(0, 1) && ']' === r.slice(-1)
                ? (t += `'${r.slice(1, -1)}'`)
                : (t += `'${r}'`);
          }
        return t;
      }
      function K(e, t, n) {
        switch (n) {
          case '>':
            return e > t;
          case '<':
            return e < t;
          case '>=':
            return e >= t;
          case '<=':
            return e <= t;
        }
        return !1;
      }
      function $(e, t, n) {
        if (null === e) {
          if (null === t || t === v) return K(null, null, n);
          if (M(t)) return K(0, t, n);
          if (R(t)) return K(0, ie(t), n);
          if (L(t)) return K(0, ie(t), n);
          if (j(t)) return K(0, t.getTime(), n);
        }
        if (e === v) {
          if (null === t || t === v) return K(null, null, n);
          if (M(t)) return K(0, t, n);
          if (R(t)) return K(0, ie(t), n);
          if (L(t)) return K(0, ie(t), n);
          if (j(t)) return K(0, t.getTime(), n);
        } else if (M(e)) {
          if (M(t)) return K(e, t, n);
          if (L(t)) return K(e, ie(t), n);
          if (null === t || t === v) return K(e, 0, n);
          if (R(t)) return K(e, ie(t), n);
          if (j(t)) return K(e, t.getTime(), n);
        } else if (R(e)) {
          if (R(t)) return K(ee(e), ee(t), n);
          if (j(t)) return K(ie(e), t.getTime(), n);
          if (M(t)) return K(ie(e), t, n);
          if (null === t || t === v) return K(ie(e), 0, n);
          if (L(t)) return K(ie(e), ie(t), n);
        } else if (j(e)) {
          if (j(t)) return K(e, t, n);
          if (null === t || t === v) return K(e.getTime(), 0, n);
          if (M(t)) return K(e.getTime(), t, n);
          if (L(t)) return K(e.getTime(), ie(t), n);
          if (R(t)) return K(e.getTime(), ie(t), n);
        } else if (L(e)) {
          if (L(t)) return K(e, t, n);
          if (M(t)) return K(ie(e), ie(t), n);
          if (j(t)) return K(ie(e), t.getTime(), n);
          if (null === t || t === v) return K(ie(e), 0, n);
          if (R(t)) return K(ie(e), ie(t), n);
        }
        return !!Q(e, t) && ('<=' === n || '>=' === n);
      }
      function Q(e, t) {
        if (e === t) return !0;
        if ((null === e && t === v) || (null === t && e === v)) return !0;
        if (j(e) && j(t)) return e.getTime() === t.getTime();
        if (e instanceof s.Z) return e.equalityTest(t);
        if (e instanceof o.Z) return e.equalityTest(t);
        if (e instanceof h.Z && t instanceof h.Z) {
          const n = e.cache._arcadeCacheId,
            r = t.cache._arcadeCacheId;
          if (null != n) return n === r;
        }
        if (
          void 0 !== e &&
          void 0 !== t &&
          null !== e &&
          null !== t &&
          'object' == typeof e &&
          'object' == typeof t
        ) {
          if (
            e._arcadeCacheId === t._arcadeCacheId &&
            void 0 !== e._arcadeCacheId &&
            null !== e._arcadeCacheId
          )
            return !0;
          if (
            e._underlyingGraphic === t._underlyingGraphic &&
            void 0 !== e._underlyingGraphic &&
            null !== e._underlyingGraphic
          )
            return !0;
        }
        return !1;
      }
      function ee(e, t) {
        if (R(e)) return e;
        if (null === e) return '';
        if (M(e)) return J(e, t);
        if (L(e)) return e.toString();
        if (j(e)) return X(e, t);
        if (e instanceof l.Z) return JSON.stringify(e.toJSON());
        if (Z(e)) {
          const t = [];
          for (let n = 0; n < e.length; n++) t[n] = re(e[n]);
          return '[' + t.join(',') + ']';
        }
        if (e instanceof i.Z) {
          const t = [];
          for (let n = 0; n < e.length(); n++) t[n] = re(e.get(n));
          return '[' + t.join(',') + ']';
        }
        return null !== e && 'object' == typeof e && void 0 !== e.castToText
          ? e.castToText()
          : B(e)
          ? 'object, Function'
          : '';
      }
      function te(e) {
        const t = [];
        if (!1 === Z(e)) return null;
        if (e instanceof i.Z) {
          for (let n = 0; n < e.length(); n++) t[n] = ie(e.get(n));
          return t;
        }
        for (let n = 0; n < e.length; n++) t[n] = ie(e[n]);
        return t;
      }
      function ne(e, t) {
        if (R(e)) return e;
        if (null === e) return '';
        if (M(e)) return J(e, t);
        if (L(e)) return e.toString();
        if (j(e)) return X(e, t);
        if (e instanceof l.Z)
          return e instanceof u.Z
            ? '{"xmin":' +
                e.xmin.toString() +
                ',"ymin":' +
                e.ymin.toString() +
                ',' +
                (e.hasZ ? '"zmin":' + e.zmin.toString() + ',' : '') +
                (e.hasM ? '"mmin":' + e.mmin.toString() + ',' : '') +
                '"xmax":' +
                e.xmax.toString() +
                ',"ymax":' +
                e.ymax.toString() +
                ',' +
                (e.hasZ ? '"zmax":' + e.zmax.toString() + ',' : '') +
                (e.hasM ? '"mmax":' + e.mmax.toString() + ',' : '') +
                '"spatialReference":' +
                me(e.spatialReference) +
                '}'
            : me(e.toJSON(), (e, t) =>
                e.key === t.key
                  ? 0
                  : 'spatialReference' === e.key
                  ? 1
                  : 'spatialReference' === t.key || e.key < t.key
                  ? -1
                  : e.key > t.key
                  ? 1
                  : 0,
              );
        if (Z(e)) {
          const t = [];
          for (let n = 0; n < e.length; n++) t[n] = re(e[n]);
          return '[' + t.join(',') + ']';
        }
        if (e instanceof i.Z) {
          const t = [];
          for (let n = 0; n < e.length(); n++) t[n] = re(e.get(n));
          return '[' + t.join(',') + ']';
        }
        return null !== e && 'object' == typeof e && void 0 !== e.castToText
          ? e.castToText()
          : B(e)
          ? 'object, Function'
          : '';
      }
      function re(e) {
        if (null === e) return 'null';
        if (L(e) || M(e) || R(e)) return JSON.stringify(e);
        if (e instanceof l.Z) return ne(e);
        if (e instanceof i.Z) return ne(e);
        if (e instanceof Array) return ne(e);
        if (e instanceof Date) return JSON.stringify(X(e, ''));
        if (null !== e && 'object' == typeof e) {
          if (void 0 !== e.castToText) return e.castToText();
        } else if (e === v) return 'null';
        return 'null';
      }
      function ie(e, t) {
        return M(e)
          ? e
          : null === e || '' === e
          ? 0
          : j(e)
          ? NaN
          : L(e)
          ? e
            ? 1
            : 0
          : Z(e) || '' === e || void 0 === e
          ? NaN
          : void 0 !== t && R(e)
          ? ((t = k(t, '‰', '')),
            (t = k(t, '¤', '')),
            (0, D.Qc)(e, { pattern: t }))
          : e === v
          ? 0
          : Number(e);
      }
      function se(e) {
        if (j(e)) return e;
        if (R(e)) {
          const t = ae(e);
          if (t) return t.toJSDate();
        }
        return null;
      }
      function oe(e) {
        return j(e) ? d.ou.fromJSDate(e) : R(e) ? ae(e) : null;
      }
      function ae(e) {
        const t = / (\d\d)/;
        let n = d.ou.fromISO(e);
        return n.isValid ||
          (t.test(e) &&
            ((e = e.replace(t, 'T$1')), (n = d.ou.fromISO(e)), n.isValid))
          ? n
          : null;
      }
      function ue(e) {
        return L(e)
          ? e
          : R(e)
          ? 'true' === (e = e.toLowerCase())
          : !!M(e) && 0 !== e && !isNaN(e);
      }
      function le(e, t) {
        return (0, m.Wi)(e)
          ? null
          : ((null !== e.spatialReference && void 0 !== e.spatialReference) ||
              (e.spatialReference = t),
            e);
      }
      function ce(e) {
        if (null === e) return null;
        if (e instanceof h.Z)
          return 'NaN' === e.x || null === e.x || isNaN(e.x) ? null : e;
        if (e instanceof f.Z) {
          if (0 === e.rings.length) return null;
          for (const t of e.rings) if (t.length > 0) return e;
          return null;
        }
        if (e instanceof p.Z) {
          if (0 === e.paths.length) return null;
          for (const t of e.paths) if (t.length > 0) return e;
          return null;
        }
        return e instanceof c.Z
          ? 0 === e.points.length
            ? null
            : e
          : e instanceof u.Z
          ? 'NaN' === e.xmin || null === e.xmin || isNaN(e.xmin)
            ? null
            : e
          : null;
      }
      function he(e, t) {
        if (!e) return t;
        if (!e.domain) return t;
        let n = null;
        if ('string' === e.field.type || 'esriFieldTypeString' === e.field.type)
          t = ee(t);
        else {
          if (null == t) return null;
          if ('' === t) return t;
          t = ie(t);
        }
        for (let r = 0; r < e.domain.codedValues.length; r++) {
          const i = e.domain.codedValues[r];
          i.code === t && (n = i);
        }
        return null === n ? t : n.name;
      }
      function fe(e, t) {
        if (!e) return t;
        if (!e.domain) return t;
        let n = null;
        t = ee(t);
        for (let r = 0; r < e.domain.codedValues.length; r++) {
          const i = e.domain.codedValues[r];
          i.name === t && (n = i);
        }
        return null === n ? t : n.code;
      }
      function pe(e, t, n = null, r = null) {
        if (!t) return null;
        if (!t.fields) return null;
        let i,
          s,
          o = null;
        for (let n = 0; n < t.fields.length; n++) {
          const r = t.fields[n];
          r.name.toLowerCase() === e.toString().toLowerCase() && (o = r);
        }
        if (null === o) throw new Error('Field not found');
        return (
          null === r &&
            n &&
            t.typeIdField &&
            (r = n.hasField(t.typeIdField) ? n.field(t.typeIdField) : null),
          null != r &&
            t.types.some(function (e) {
              return (
                e.id === r &&
                ((i = e.domains && e.domains[o.name]),
                i && 'inherited' === i.type && ((i = de(o.name, t)), (s = !0)),
                !0)
              );
            }),
          s || i || (i = de(e, t)),
          { field: o, domain: i }
        );
      }
      function de(e, t) {
        let n;
        return (
          t.fields.some(function (t) {
            return (
              t.name.toLowerCase() === e.toLowerCase() && (n = t.domain), !!n
            );
          }),
          n
        );
      }
      function me(e, t) {
        t || (t = {}), 'function' == typeof t && (t = { cmp: t });
        const n = 'boolean' == typeof t.cycles && t.cycles,
          r =
            t.cmp &&
            ((i = t.cmp),
            function (e) {
              return function (t, n) {
                const r = { key: t, value: e[t] },
                  s = { key: n, value: e[n] };
                return i(r, s);
              };
            });
        var i;
        const s = [];
        return (function e(t) {
          if (
            (t && t.toJSON && 'function' == typeof t.toJSON && (t = t.toJSON()),
            void 0 === t)
          )
            return;
          if ('number' == typeof t) return isFinite(t) ? '' + t : 'null';
          if ('object' != typeof t) return JSON.stringify(t);
          let i, o;
          if (Array.isArray(t)) {
            for (o = '[', i = 0; i < t.length; i++)
              i && (o += ','), (o += e(t[i]) || 'null');
            return o + ']';
          }
          if (null === t) return 'null';
          if (-1 !== s.indexOf(t)) {
            if (n) return JSON.stringify('__cycle__');
            throw new TypeError('Converting circular structure to JSON');
          }
          const a = s.push(t) - 1,
            u = Object.keys(t).sort(r && r(t));
          for (o = '', i = 0; i < u.length; i++) {
            const n = u[i],
              r = e(t[n]);
            r && (o && (o += ','), (o += JSON.stringify(n) + ':' + r));
          }
          return s.splice(a, 1), '{' + o + '}';
        })(e);
      }
      function De(e) {
        if (null === e) return null;
        const t = [];
        for (const n of e)
          n &&
          n.arcadeDeclaredClass &&
          'esri.arcade.Feature' === n.arcadeDeclaredClass
            ? t.push(n.geometry())
            : t.push(n);
        return t;
      }
      function ge(e, t) {
        if (!(t instanceof h.Z)) throw new Error('Invalid Argument');
        e.push(
          t.hasZ
            ? t.hasM
              ? [t.x, t.y, t.z, t.m]
              : [t.x, t.y, t.z]
            : [t.x, t.y],
        );
      }
      function ye(e, t) {
        if (Z(e) || H(e)) {
          let n = !1,
            r = !1,
            i = [],
            s = t;
          if (Z(e)) {
            for (const t of e) ge(i, t);
            i.length > 0 &&
              ((s = e[0].spatialReference), (n = e[0].hasZ), (r = e[0].hasM));
          } else if (e instanceof o.Z)
            (i = e._elements),
              i.length > 0 &&
                ((n = e._hasZ), (r = e._hasM), (s = e.get(0).spatialReference));
          else {
            if (!H(e)) throw new Error('Invalid Argument');
            for (const t of e.toArray()) ge(i, t);
            i.length > 0 &&
              ((s = e.get(0).spatialReference),
              (n = !0 === e.get(0).hasZ),
              (r = !0 === e.get(0).hasM));
          }
          return 0 === i.length
            ? null
            : (!1 === (0, g.bu)(i, r, n) && (i = i.slice(0).reverse()),
              new f.Z({ rings: [i], spatialReference: s, hasZ: n, hasM: r }));
        }
        return e;
      }
      function Ee(e, t) {
        if (Z(e) || H(e)) {
          let n = !1,
            r = !1,
            i = [],
            s = t;
          if (Z(e)) {
            for (const t of e) ge(i, t);
            i.length > 0 &&
              ((s = e[0].spatialReference),
              (n = !0 === e[0].hasZ),
              (r = !0 === e[0].hasM));
          } else if (e instanceof o.Z)
            (i = e._elements),
              i.length > 0 &&
                ((n = e._hasZ), (r = e._hasM), (s = e.get(0).spatialReference));
          else if (H(e)) {
            for (const t of e.toArray()) ge(i, t);
            i.length > 0 &&
              ((s = e.get(0).spatialReference),
              (n = !0 === e.get(0).hasZ),
              (r = !0 === e.get(0).hasM));
          }
          return 0 === i.length
            ? null
            : new p.Z({ paths: [i], spatialReference: s, hasZ: n, hasM: r });
        }
        return e;
      }
      function Ae(e, t) {
        if (Z(e) || H(e)) {
          let n = !1,
            r = !1,
            i = [],
            s = t;
          if (Z(e)) {
            for (const t of e) ge(i, t);
            i.length > 0 &&
              ((s = e[0].spatialReference),
              (n = !0 === e[0].hasZ),
              (r = !0 === e[0].hasM));
          } else if (e instanceof o.Z)
            (i = e._elements),
              i.length > 0 &&
                ((n = e._hasZ), (r = e._hasM), (s = e.get(0).spatialReference));
          else if (H(e)) {
            for (const t of e.toArray()) ge(i, t);
            i.length > 0 &&
              ((s = e.get(0).spatialReference),
              (n = !0 === e.get(0).hasZ),
              (r = !0 === e.get(0).hasM));
          }
          return 0 === i.length
            ? null
            : new c.Z({ points: i, spatialReference: s, hasZ: n, hasM: r });
        }
        return e;
      }
      function xe(e, t = !1) {
        const n = [];
        if (null === e) return n;
        if (!0 === Z(e)) {
          for (let r = 0; r < e.length; r++) {
            const i = ee(e[r]);
            ('' === i && !0 !== t) || n.push(i);
          }
          return n;
        }
        if (e instanceof i.Z) {
          for (let r = 0; r < e.length(); r++) {
            const i = ee(e.get(r));
            ('' === i && !0 !== t) || n.push(i);
          }
          return n;
        }
        if (_(e)) {
          const r = ee(e);
          return ('' === r && !0 !== t) || n.push(r), n;
        }
        return [];
      }
      let Ce = 0;
      function we(e) {
        return (
          Ce++,
          Ce % 100 == 0
            ? ((Ce = 0),
              (0, a.Ue)((t) => {
                setTimeout(() => {
                  t(e);
                }, 0);
              }))
            : e
        );
      }
      function Fe(e, t, n) {
        switch (n) {
          case '&':
            return e & t;
          case '|':
            return e | t;
          case '^':
            return e ^ t;
          case '<<':
            return e << t;
          case '>>':
            return e >> t;
          case '>>>':
            return e >>> t;
        }
      }
      function be(e, t = null) {
        return null == e
          ? null
          : L(e) || M(e) || R(e)
          ? e
          : e instanceof l.Z
          ? !0 === (null == t ? void 0 : t.keepGeometryType)
            ? e
            : e.toJSON()
          : e instanceof i.Z
          ? e.toArray().map((e) => be(e, t))
          : e instanceof Array
          ? e.map((e) => be(e, t))
          : e instanceof Date
          ? e
          : null !== e && 'object' == typeof e && void 0 !== e.castAsJson
          ? e.castAsJson(t)
          : null;
      }
      function Se(e, t, n, r, i) {
        return Ne(e, t, n).then((e) => {
          i[r] = e;
        });
      }
      function Ne(e, t = null, n = null) {
        if ((e instanceof i.Z && (e = e.toArray()), null == e))
          return (0, a.DB)(null);
        if (_(e) || e instanceof l.Z || e instanceof Date)
          return (0, a.DB)(be(e, n));
        if (e instanceof Array) {
          const r = [],
            i = [];
          for (const s of e)
            null === s || _(s) || s instanceof l.Z || s instanceof Date
              ? i.push(be(s, n))
              : (i.push(null), r.push(Se(s, t, n, i.length - 1, i)));
          return r.length > 0 ? (0, a.$6)(r).then(() => i) : (0, a.DB)(i);
        }
        return null !== e &&
          'object' == typeof e &&
          void 0 !== e.castAsJsonAsync
          ? e.castAsJsonAsync(t, n)
          : (0, a.DB)(null);
      }
      function ve(e, t, n) {
        const r = e.fullSchema();
        return null === r ? null : r.fields ? pe(t, r, e, n) : null;
      }
      function Ie(e) {
        const t = e.fullSchema();
        return null === t
          ? null
          : t.fields && t.typeIdField
          ? {
              subtypeField: t.typeIdField,
              subtypes: t.types
                ? t.types.map((e) => ({ name: e.name, code: e.id }))
                : [],
            }
          : null;
      }
      function Te(e, t, n, r) {
        const i = e.fullSchema();
        if (null === i) return null;
        if (!i.fields) return null;
        const s = pe(t, i, e, r);
        if (void 0 === n)
          try {
            n = e.field(t);
          } catch (e) {
            return null;
          }
        return he(s, n);
      }
      function ke(e, t, n, r) {
        const i = e.fullSchema();
        if (null === i) return null;
        if (!i.fields) return null;
        if (void 0 === n) {
          try {
            n = e.field(t);
          } catch (e) {
            return null;
          }
          return n;
        }
        return fe(pe(t, i, e, r), n);
      }
      function Be(e) {
        const t = e.fullSchema();
        if (null === t) return null;
        if (!t.fields) return null;
        const n = [];
        for (const e of t.fields) n.push((0, E.Sh)(e));
        return {
          objectIdField: t.objectIdField,
          globalIdField: t.globalIdField,
          geometryType:
            void 0 === E.q2[t.geometryType] ? '' : E.q2[t.geometryType],
          fields: n,
        };
      }
      const _e = Object.freeze({
        __proto__: null,
        ReturnResultE: A,
        ImplicitResultE: x,
        NativeFunctionE: C,
        SizzleFunctionE: w,
        NativeFunction: F,
        ImplicitResult: b,
        ReturnResult: S,
        SizzleFunction: N,
        voidOperation: v,
        breakResult: I,
        continueResult: T,
        multiReplace: k,
        isFunctionParameter: B,
        isSimpleType: _,
        defaultUndefined: O,
        isString: R,
        isBoolean: L,
        isNumber: M,
        isInteger: U,
        isArray: Z,
        isFeature: P,
        isFeatureSet: z,
        isFeatureSetCollection: G,
        isImmutableArray: H,
        isDate: j,
        pcCheck: V,
        absRound: Y,
        generateUUID: q,
        formatNumber: J,
        formatDate: X,
        standardiseDateFormat: W,
        greaterThanLessThan: $,
        equalityTest: Q,
        toString: ee,
        toNumberArray: te,
        toStringExplicit: ne,
        toNumber: ie,
        toDate: se,
        toDateTime: oe,
        toBoolean: ue,
        fixSpatialReference: le,
        fixNullGeometry: ce,
        getDomainValue: he,
        getDomainCode: fe,
        getDomain: pe,
        stableStringify: me,
        autoCastFeatureToGeometry: De,
        autoCastArrayOfPointsToPolygon: ye,
        autoCastArrayOfPointsToPolyline: Ee,
        autoCastArrayOfPointsToMultiPoint: Ae,
        toStringArray: xe,
        tick: we,
        binaryOperator: Fe,
        castAsJson: be,
        castAsJsonAsync: Ne,
        featureFullDomain: ve,
        featureSubtypes: Ie,
        featureDomainValueLookup: Te,
        featureDomainCodeLookup: ke,
        featureSchema: Be,
      });
    },
    14808: (e, t, n) => {
      n.d(t, { lt: () => l, WU: () => a, Qc: () => c });
      var r = n(19153),
        i = n(70171);
      const s = {
        ar: ['.', ','],
        bg: [',', ' '],
        bs: [',', '.'],
        ca: [',', '.'],
        cs: [',', ' '],
        da: [',', '.'],
        de: [',', '.'],
        'de-ch': ['.', '’'],
        el: [',', '.'],
        en: ['.', ','],
        'en-au': ['.', ','],
        es: [',', '.'],
        'es-mx': ['.', ','],
        et: [',', ' '],
        fi: [',', ' '],
        fr: [',', ' '],
        'fr-ch': [',', ' '],
        he: ['.', ','],
        hi: ['.', ',', '#,##,##0.###'],
        hr: [',', '.'],
        hu: [',', ' '],
        id: [',', '.'],
        it: [',', '.'],
        'it-ch': ['.', '’'],
        ja: ['.', ','],
        ko: ['.', ','],
        lt: [',', ' '],
        lv: [',', ' '],
        mk: [',', '.'],
        nb: [',', ' '],
        nl: [',', '.'],
        pl: [',', ' '],
        pt: [',', '.'],
        'pt-pt': [',', ' '],
        ro: [',', '.'],
        ru: [',', ' '],
        sk: [',', ' '],
        sl: [',', '.'],
        sr: [',', '.'],
        sv: [',', ' '],
        th: ['.', ','],
        tr: [',', '.'],
        uk: [',', ' '],
        vi: [',', '.'],
        zh: ['.', ','],
      };
      function o(e) {
        e || (e = (0, i.Kd)());
        let t = e in s;
        if (!t) {
          const n = e.split('-');
          n.length > 1 && n[0] in s && ((e = n[0]), (t = !0)), t || (e = 'en');
        }
        const [n, r, o = '#,##0.###'] = s[e];
        return { decimal: n, group: r, pattern: o };
      }
      function a(e, t) {
        const n = o((t = { ...t }).locale);
        t.customs = n;
        const r = t.pattern || n.pattern;
        return isNaN(e) || Math.abs(e) === 1 / 0
          ? null
          : (function (e, t, n) {
              const r = (n = n || {}).customs.group,
                i = n.customs.decimal,
                s = t.split(';'),
                o = s[0];
              if (-1 !== (t = s[e < 0 ? 1 : 0] || '-' + o).indexOf('%'))
                e *= 100;
              else if (-1 !== t.indexOf('‰')) e *= 1e3;
              else {
                if (-1 !== t.indexOf('¤'))
                  throw new Error('currency notation not supported');
                if (-1 !== t.indexOf('E'))
                  throw new Error('exponential notation not supported');
              }
              const a = u,
                l = o.match(a);
              if (!l)
                throw new Error(
                  'unable to find a number expression in pattern: ' + t,
                );
              return (
                !1 === n.fractional && (n.places = 0),
                t.replace(
                  a,
                  (function (e, t, n) {
                    !0 === (n = n || {}).places && (n.places = 0),
                      n.places === 1 / 0 && (n.places = 6);
                    const r = t.split('.'),
                      i = 'string' == typeof n.places && n.places.indexOf(',');
                    let s = n.places;
                    i
                      ? (s = n.places.substring(i + 1))
                      : s >= 0 || (s = (r[1] || []).length),
                      n.round < 0 || (e = Number(e.toFixed(Number(s))));
                    const o = String(Math.abs(e)).split('.'),
                      a = o[1] || '';
                    if (r[1] || n.places) {
                      i && (n.places = n.places.substring(0, i));
                      const e =
                        void 0 !== n.places
                          ? n.places
                          : r[1] && r[1].lastIndexOf('0') + 1;
                      e > a.length && (o[1] = a.padEnd(Number(e), '0')),
                        s < a.length && (o[1] = a.substr(0, Number(s)));
                    } else o[1] && o.pop();
                    const u = r[0].replace(',', '');
                    let l = u.indexOf('0');
                    -1 !== l &&
                      ((l = u.length - l),
                      l > o[0].length && (o[0] = o[0].padStart(l, '0')),
                      -1 === u.indexOf('#') &&
                        (o[0] = o[0].substr(o[0].length - l)));
                    let c,
                      h,
                      f = r[0].lastIndexOf(',');
                    if (-1 !== f) {
                      c = r[0].length - f - 1;
                      const e = r[0].substr(0, f);
                      (f = e.lastIndexOf(',')),
                        -1 !== f && (h = e.length - f - 1);
                    }
                    const p = [];
                    for (let e = o[0]; e; ) {
                      const t = e.length - c;
                      p.push(t > 0 ? e.substr(t) : e),
                        (e = t > 0 ? e.slice(0, t) : ''),
                        h && ((c = h), (h = void 0));
                    }
                    return (
                      (o[0] = p.reverse().join(n.group || ',')),
                      o.join(n.decimal || '.')
                    );
                  })(e, l[0], {
                    decimal: i,
                    group: r,
                    places: n.places,
                    round: n.round,
                  }),
                )
              );
            })(e, r, t);
      }
      const u = /[#0,]*[#0](?:\.0*#*)?/;
      function l(e) {
        const t = o((e = e || {}).locale),
          n = e.pattern || t.pattern,
          i = t.group,
          s = t.decimal;
        let a = 1;
        if (-1 !== n.indexOf('%')) a /= 100;
        else if (-1 !== n.indexOf('‰')) a /= 1e3;
        else if (-1 !== n.indexOf('¤'))
          throw new Error('currency notation not supported');
        const l = n.split(';');
        1 === l.length && l.push('-' + l[0]);
        const c = f(
          l,
          function (t) {
            return (t = '(?:' + (0, r.Qs)(t, '.') + ')').replace(
              u,
              function (t) {
                const n = {
                    signed: !1,
                    separator: e.strict ? i : [i, ''],
                    fractional: e.fractional,
                    decimal: s,
                    exponent: !1,
                  },
                  r = t.split('.');
                let o = e.places;
                1 === r.length && 1 !== a && (r[1] = '###'),
                  1 === r.length || 0 === o
                    ? (n.fractional = !1)
                    : (void 0 === o &&
                        (o = e.pattern ? r[1].lastIndexOf('0') + 1 : 1 / 0),
                      o && null == e.fractional && (n.fractional = !0),
                      !e.places && o < r[1].length && (o += ',' + r[1].length),
                      (n.places = o));
                const u = r[0].split(',');
                return (
                  u.length > 1 &&
                    ((n.groupSize = u.pop().length),
                    u.length > 1 && (n.groupSize2 = u.pop().length)),
                  '(' +
                    (function (e) {
                      'places' in (e = e || {}) || (e.places = 1 / 0),
                        'string' != typeof e.decimal && (e.decimal = '.'),
                        ('fractional' in e && !/^0/.test(String(e.places))) ||
                          (e.fractional = [!0, !1]),
                        'exponent' in e || (e.exponent = [!0, !1]),
                        'eSigned' in e || (e.eSigned = [!0, !1]);
                      const t = h(e),
                        n = f(
                          e.fractional,
                          function (t) {
                            let n = '';
                            return (
                              t &&
                                0 !== e.places &&
                                ((n = '\\' + e.decimal),
                                e.places === 1 / 0
                                  ? (n = '(?:' + n + '\\d+)?')
                                  : (n += '\\d{' + e.places + '}')),
                              n
                            );
                          },
                          !0,
                        );
                      let r = t + n;
                      return (
                        n && (r = '(?:(?:' + r + ')|(?:' + n + '))'),
                        r +
                          f(e.exponent, function (t) {
                            return t
                              ? '([eE]' + h({ signed: e.eSigned }) + ')'
                              : '';
                          })
                      );
                    })(n) +
                    ')'
                );
              },
            );
          },
          !0,
        );
        return {
          regexp: c.replace(/[\xa0 ]/g, '[\\s\\xa0]'),
          group: i,
          decimal: s,
          factor: a,
        };
      }
      function c(e, t) {
        const n = l(t),
          r = new RegExp('^' + n.regexp + '$').exec(e);
        if (!r) return NaN;
        let i = r[1];
        if (!r[1]) {
          if (!r[2]) return NaN;
          (i = r[2]), (n.factor *= -1);
        }
        return (
          (i = i
            .replace(new RegExp('[' + n.group + '\\s\\xa0]', 'g'), '')
            .replace(n.decimal, '.')),
          Number(i) * n.factor
        );
      }
      function h(e) {
        return (
          'signed' in (e = e || {}) || (e.signed = [!0, !1]),
          'separator' in e
            ? 'groupSize' in e || (e.groupSize = 3)
            : (e.separator = ''),
          f(
            e.signed,
            function (e) {
              return e ? '[-+]' : '';
            },
            !0,
          ) +
            f(
              e.separator,
              function (t) {
                if (!t) return '(?:\\d+)';
                ' ' === (t = (0, r.Qs)(t))
                  ? (t = '\\s')
                  : ' ' === t && (t = '\\s\\xa0');
                const n = e.groupSize,
                  i = e.groupSize2;
                if (i) {
                  const e =
                    '(?:0|[1-9]\\d{0,' +
                    (i - 1) +
                    '}(?:[' +
                    t +
                    ']\\d{' +
                    i +
                    '})*[' +
                    t +
                    ']\\d{' +
                    n +
                    '})';
                  return n - i > 0
                    ? '(?:' + e + '|(?:0|[1-9]\\d{0,' + (n - 1) + '}))'
                    : e;
                }
                return (
                  '(?:0|[1-9]\\d{0,' +
                  (n - 1) +
                  '}(?:[' +
                  t +
                  ']\\d{' +
                  n +
                  '})*)'
                );
              },
              !0,
            )
        );
      }
      const f = function (e, t, n) {
          if (!(e instanceof Array)) return t(e);
          const r = [];
          for (let n = 0; n < e.length; n++) r.push(t(e[n]));
          return p(r.join('|'), n);
        },
        p = function (e, t) {
          return '(' + (t ? '?:' : '') + e + ')';
        };
    },
    70171: (e, t, n) => {
      var r, i, s;
      let o;
      n.d(t, { Ze: () => p, Kd: () => l, qe: () => h });
      const a =
        null != (r = null == (i = globalThis.esriConfig) ? void 0 : i.locale)
          ? r
          : null == (s = globalThis.dojoConfig)
          ? void 0
          : s.locale;
      function u() {
        var e, t;
        return null !=
          (e =
            null != a
              ? a
              : null == (t = globalThis.navigator)
              ? void 0
              : t.language)
          ? e
          : 'en';
      }
      function l() {
        return void 0 === o && (o = u()), o;
      }
      const c = [];
      function h(e) {
        return (
          c.push(e),
          {
            remove() {
              c.splice(c.indexOf(e), 1);
            },
          }
        );
      }
      const f = [];
      function p(e) {
        return (
          f.push(e),
          {
            remove() {
              c.splice(f.indexOf(e), 1);
            },
          }
        );
      }
      null == globalThis.addEventListener ||
        globalThis.addEventListener('languagechange', function () {
          const e = null != undefined ? undefined : u();
          o !== e &&
            ((o = e),
            [...f].forEach((t) => {
              t.call(null, e);
            }),
            [...c].forEach((t) => {
              t.call(null, e);
            }));
        });
    },
    1231: (e, t, n) => {
      n.d(t, { Z: () => D });
      var r,
        i = n(43697),
        s = n(35454),
        o = n(96674),
        a = n(5600),
        u = (n(67676), n(80442), n(75215)),
        l = n(36030),
        c = n(71715),
        h = n(52011),
        f = n(72729),
        p = n(86719);
      const d = new s.X({
        binary: 'binary',
        coordinate: 'coordinate',
        countOrAmount: 'count-or-amount',
        dateAndTime: 'date-and-time',
        description: 'description',
        locationOrPlaceName: 'location-or-place-name',
        measurement: 'measurement',
        nameOrTitle: 'name-or-title',
        none: 'none',
        orderedOrRanked: 'ordered-or-ranked',
        percentageOrRatio: 'percentage-or-ratio',
        typeOrCategory: 'type-or-category',
        uniqueIdentifier: 'unique-identifier',
      });
      let m = (r = class extends o.wq {
        constructor(e) {
          super(e),
            (this.alias = null),
            (this.defaultValue = void 0),
            (this.description = null),
            (this.domain = null),
            (this.editable = !0),
            (this.length = -1),
            (this.name = null),
            (this.nullable = !0),
            (this.type = null),
            (this.valueType = null);
        }
        readDescription(e, { description: t }) {
          let n;
          try {
            n = JSON.parse(t);
          } catch (e) {}
          return n ? n.value : null;
        }
        readValueType(e, { description: t }) {
          let n;
          try {
            n = JSON.parse(t);
          } catch (e) {}
          return n ? d.fromJSON(n.fieldValueType) : null;
        }
        clone() {
          return new r({
            alias: this.alias,
            defaultValue: this.defaultValue,
            description: this.description,
            domain: (this.domain && this.domain.clone()) || null,
            editable: this.editable,
            length: this.length,
            name: this.name,
            nullable: this.nullable,
            type: this.type,
            valueType: this.valueType,
          });
        }
      });
      (0, i._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        m.prototype,
        'alias',
        void 0,
      ),
        (0, i._)(
          [
            (0, a.Cb)({
              type: [String, Number],
              json: { write: { allowNull: !0 } },
            }),
          ],
          m.prototype,
          'defaultValue',
          void 0,
        ),
        (0, i._)([(0, a.Cb)()], m.prototype, 'description', void 0),
        (0, i._)(
          [(0, c.r)('description')],
          m.prototype,
          'readDescription',
          null,
        ),
        (0, i._)(
          [
            (0, a.Cb)({
              types: f.V5,
              json: { read: { reader: f.im }, write: !0 },
            }),
          ],
          m.prototype,
          'domain',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'editable',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: u.z8, json: { write: !0 } })],
          m.prototype,
          'length',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          m.prototype,
          'name',
          void 0,
        ),
        (0, i._)(
          [(0, a.Cb)({ type: Boolean, json: { write: !0 } })],
          m.prototype,
          'nullable',
          void 0,
        ),
        (0, i._)([(0, l.J)(p.v)], m.prototype, 'type', void 0),
        (0, i._)([(0, a.Cb)()], m.prototype, 'valueType', void 0),
        (0, i._)(
          [(0, c.r)('valueType', ['description'])],
          m.prototype,
          'readValueType',
          null,
        ),
        (m = r = (0, i._)([(0, h.j)('esri.layers.support.Field')], m));
      const D = m;
    },
    72729: (e, t, n) => {
      n.d(t, { im: () => b, V5: () => F }), n(80442);
      var r,
        i = n(43697),
        s = n(22974),
        o = n(5600),
        a = (n(75215), n(36030)),
        u = n(52011),
        l = n(96674);
      n(67676);
      let c = (r = class extends l.wq {
        constructor(e) {
          super(e), (this.name = null), (this.code = null);
        }
        clone() {
          return new r({ name: this.name, code: this.code });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'name',
        void 0,
      ),
        (0, i._)(
          [(0, o.Cb)({ type: [String, Number], json: { write: !0 } })],
          c.prototype,
          'code',
          void 0,
        ),
        (c = r = (0, i._)([(0, u.j)('esri.layers.support.CodedValue')], c));
      const h = c,
        f = new (n(35454).X)({
          inherited: 'inherited',
          codedValue: 'coded-value',
          range: 'range',
        });
      let p = class extends l.wq {
        constructor(e) {
          super(e), (this.name = null), (this.type = null);
        }
      };
      (0, i._)(
        [(0, o.Cb)({ type: String, json: { write: !0 } })],
        p.prototype,
        'name',
        void 0,
      ),
        (0, i._)([(0, a.J)(f)], p.prototype, 'type', void 0),
        (p = (0, i._)([(0, u.j)('esri.layers.support.Domain')], p));
      const d = p;
      var m;
      let D = (m = class extends d {
        constructor(e) {
          super(e), (this.codedValues = null), (this.type = 'coded-value');
        }
        getName(e) {
          let t = null;
          if (this.codedValues) {
            const n = String(e);
            this.codedValues.some(
              (e) => (String(e.code) === n && (t = e.name), !!t),
            );
          }
          return t;
        }
        clone() {
          return new m({
            codedValues: (0, s.d9)(this.codedValues),
            name: this.name,
          });
        }
      });
      (0, i._)(
        [(0, o.Cb)({ type: [h], json: { write: !0 } })],
        D.prototype,
        'codedValues',
        void 0,
      ),
        (0, i._)(
          [(0, a.J)({ codedValue: 'coded-value' })],
          D.prototype,
          'type',
          void 0,
        ),
        (D = m =
          (0, i._)([(0, u.j)('esri.layers.support.CodedValueDomain')], D));
      const g = D;
      var y;
      n(92604), n(37697);
      let E = (y = class extends d {
        constructor(e) {
          super(e), (this.type = 'inherited');
        }
        clone() {
          return new y();
        }
      });
      (0, i._)(
        [(0, a.J)({ inherited: 'inherited' })],
        E.prototype,
        'type',
        void 0,
      ),
        (E = y =
          (0, i._)([(0, u.j)('esri.layers.support.InheritedDomain')], E));
      const A = E;
      var x;
      let C = (x = class extends d {
        constructor(e) {
          super(e),
            (this.maxValue = null),
            (this.minValue = null),
            (this.type = 'range');
        }
        clone() {
          return new x({
            maxValue: this.maxValue,
            minValue: this.minValue,
            name: this.name,
          });
        }
      });
      (0, i._)(
        [
          (0, o.Cb)({
            type: Number,
            json: {
              type: [Number],
              read: {
                source: 'range',
                reader: (e, t) => t.range && t.range[1],
              },
              write: {
                enabled: !1,
                overridePolicy() {
                  return {
                    enabled: null != this.maxValue && null == this.minValue,
                  };
                },
                target: 'range',
                writer(e, t, n) {
                  t[n] = [this.minValue || 0, e];
                },
              },
            },
          }),
        ],
        C.prototype,
        'maxValue',
        void 0,
      ),
        (0, i._)(
          [
            (0, o.Cb)({
              type: Number,
              json: {
                type: [Number],
                read: {
                  source: 'range',
                  reader: (e, t) => t.range && t.range[0],
                },
                write: {
                  target: 'range',
                  writer(e, t, n) {
                    t[n] = [e, this.maxValue || 0];
                  },
                },
              },
            }),
          ],
          C.prototype,
          'minValue',
          void 0,
        ),
        (0, i._)([(0, a.J)({ range: 'range' })], C.prototype, 'type', void 0),
        (C = x = (0, i._)([(0, u.j)('esri.layers.support.RangeDomain')], C));
      const w = C,
        F = {
          key: 'type',
          base: d,
          typeMap: { range: C, 'coded-value': g, inherited: A },
        };
      function b(e) {
        if (!e || !e.type) return null;
        switch (e.type) {
          case 'range':
            return w.fromJSON(e);
          case 'codedValue':
            return g.fromJSON(e);
          case 'inherited':
            return A.fromJSON(e);
        }
        return null;
      }
    },
    86719: (e, t, n) => {
      n.d(t, { v: () => r });
      const r = new (n(35454).X)({
        esriFieldTypeSmallInteger: 'small-integer',
        esriFieldTypeInteger: 'integer',
        esriFieldTypeSingle: 'single',
        esriFieldTypeDouble: 'double',
        esriFieldTypeLong: 'long',
        esriFieldTypeString: 'string',
        esriFieldTypeDate: 'date',
        esriFieldTypeOID: 'oid',
        esriFieldTypeGeometry: 'geometry',
        esriFieldTypeBlob: 'blob',
        esriFieldTypeRaster: 'raster',
        esriFieldTypeGUID: 'guid',
        esriFieldTypeGlobalID: 'global-id',
        esriFieldTypeXML: 'xml',
      });
    },
    51706: (e, t, n) => {
      var r, i;
      function s(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function o(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function a(e) {
        return e.valueExpression
          ? r.Expression
          : e.field && 'string' == typeof e.field
          ? r.Field
          : r.Unknown;
      }
      function u(e, t) {
        const n = t || a(e),
          s = e.valueUnit || 'unknown';
        return n === r.Unknown
          ? i.Constant
          : e.stops
          ? i.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? i.ClampedLinear
          : 'unknown' === s
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? i.Proportional
              : i.Additive
            : i.Identity
          : i.RealWorldSize;
      }
      n.d(t, {
        RY: () => r,
        hL: () => i,
        PS: () => a,
        QW: () => u,
        iY: () => s,
        qh: () => o,
      }),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Expression = 'expression'),
            (e.Field = 'field');
        })(r || (r = {})),
        (function (e) {
          (e.Unknown = 'unknown'),
            (e.Stops = 'stops'),
            (e.ClampedLinear = 'clamped-linear'),
            (e.Proportional = 'proportional'),
            (e.Additive = 'additive'),
            (e.Constant = 'constant'),
            (e.Identity = 'identity'),
            (e.RealWorldSize = 'real-world-size');
        })(i || (i = {}));
    },
    96690: (e, t, n) => {
      n.r(t),
        n.d(t, {
          Dictionary: () => s.Z,
          arcade: () => Yt,
          arcadeFeature: () => o.Z,
          convertFeatureLayerToFeatureSet: () => fn,
          convertMapToFeatureSetCollection: () => pn,
          convertServiceUrlToWorkspace: () => hn,
          createExecContext: () => en,
          createFeature: () => tn,
          createFunction: () => Qt,
          createSyntaxTree: () => $t,
          dependsOnView: () => un,
          enableFeatureSetOperations: () => Dn,
          enableGeometryOperations: () => mn,
          evalSyntaxTree: () => rn,
          executeAsyncFunction: () => on,
          executeFunction: () => sn,
          extractFieldNames: () => an,
          getViewInfo: () => cn,
          hasGeometryFunctions: () => En,
          hasGeometryOperations: () => xn,
          hasVariable: () => ln,
          loadScriptDependencies: () => dn,
          updateExecContext: () => nn,
        });
      var r = n(28228),
        i = n(80692),
        s = n(33586),
        o = n(15274),
        a = n(50728),
        u = n(25785),
        l = n(61363),
        c = n(90077),
        h = n(84211),
        f = n(13976),
        p = n(12834),
        d = n(18811),
        m = n(38176),
        D = n(58130),
        g = n(27360),
        y = n(95330),
        E = n(6570),
        A = n(9361),
        x = n(65091),
        C = n(13473),
        w = n(38913),
        F = n(58901),
        b = n(82971);
      function S(e, t, n) {
        try {
          return n(e, null, t.arguments);
        } catch (e) {
          throw e;
        }
      }
      function N(e) {
        return e instanceof Error ? (0, y.d1)(e) : (0, y.d1)(new Error(e));
      }
      function v(e, t) {
        try {
          switch (t.type) {
            case 'EmptyStatement':
              return 'lc.voidOperation';
            case 'VariableDeclarator':
              return (function (e, t) {
                let n = null === t.init ? null : v(e, t.init);
                n === l.v && (n = null);
                const r = t.id.name.toLowerCase();
                if (null !== e.localScope) {
                  if (void 0 !== e.localScope[r])
                    return "lscope['" + r + "']=" + n + '; ';
                  if (void 0 !== e.localScope._SymbolsMap[r])
                    return (
                      "lscope['" +
                      e.localScope._SymbolsMap[r] +
                      "']=" +
                      n +
                      '; '
                    );
                  {
                    const t = Z(e);
                    return (
                      (e.localScope._SymbolsMap[r] = t),
                      (e.mangleMap[r] = t),
                      "lscope['" + t + "']=" + n + '; '
                    );
                  }
                }
                if (void 0 !== e.globalScope[r])
                  return "gscope['" + r + "']=" + n + '; ';
                if (void 0 !== e.globalScope._SymbolsMap[r])
                  return (
                    "gscope['" + e.globalScope._SymbolsMap[r] + "']=" + n + '; '
                  );
                {
                  const t = Z(e);
                  return (
                    (e.globalScope._SymbolsMap[r] = t),
                    (e.mangleMap[r] = t),
                    "gscope['" + t + "']=" + n + '; '
                  );
                }
              })(e, t);
            case 'VariableDeclaration':
              return (function (e, t) {
                const n = [];
                for (let r = 0; r < t.declarations.length; r++)
                  n.push(v(e, t.declarations[r]));
                return (
                  n.join('\n') + ' \n lastStatement=  lc.voidOperation; \n'
                );
              })(e, t);
            case 'BlockStatement':
              return T(e, t);
            case 'FunctionDeclaration':
              return (function (e, t) {
                const n = t.id.name.toLowerCase(),
                  r = {
                    isAsync: e.isAsync,
                    spatialReference: e.spatialReference,
                    console: e.console,
                    lrucache: e.lrucache,
                    interceptor: e.interceptor,
                    services: e.services,
                    symbols: e.symbols,
                    mangleMap: e.mangleMap,
                    localScope: { _SymbolsMap: {} },
                    depthCounter: e.depthCounter + 1,
                    globalScope: e.globalScope,
                  };
                if (r.depthCounter > 64)
                  throw new Error('Exceeded maximum function depth');
                let i =
                  'new lc.SizzleFunction( lang.functionDepthchecker(function() { var lastStatement = lc.voidOperation; \n   var lscope = runtimeCtx.localStack[runtimeCtx.localStack.length-1];\n';
                for (let n = 0; n < t.params.length; n++) {
                  const s = t.params[n].name.toLowerCase(),
                    o = Z(e);
                  (r.localScope._SymbolsMap[s] = o),
                    (r.mangleMap[s] = o),
                    (i +=
                      "lscope['" + o + "']=arguments[" + n.toString() + '];\n');
                }
                if (
                  (!0 === e.isAsync
                    ? ((i +=
                        'return lang.__awaiter(this, void 0, void 0, function* () {\n'),
                      (i += T(r, t.body) + '\n return lastStatement; '),
                      (i += '});  }'),
                      (i += ', runtimeCtx),' + t.params.length + ')'),
                      (i += '\n lastStatement = lc.voidOperation; \n'))
                    : ((i +=
                        T(r, t.body) +
                        '\n return lastStatement; }, runtimeCtx),' +
                        t.params.length +
                        ')'),
                      (i += '\n lastStatement = lc.voidOperation; \n')),
                  void 0 !== e.globalScope[n])
                )
                  return "gscope['" + n + "']=" + i;
                if (void 0 !== e.globalScope._SymbolsMap[n])
                  return "gscope['" + e.globalScope._SymbolsMap[n] + "']=" + i;
                {
                  const t = Z(e);
                  return (
                    (e.globalScope._SymbolsMap[n] = t),
                    (e.mangleMap[n] = t),
                    "gscope['" + t + "']=" + i
                  );
                }
              })(e, t);
            case 'ReturnStatement':
              return (function (e, t) {
                return null === t.argument
                  ? 'return lc.voidOperation'
                  : 'return ' + v(e, t.argument);
              })(e, t);
            case 'IfStatement':
              return (function (e, t) {
                if (
                  'AssignmentExpression' === t.test.type ||
                  'UpdateExpression' === t.test.type
                )
                  throw new Error(
                    (0, c.H5)(
                      t.test,
                      'RUNTIME',
                      'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                    ),
                  );
                const n = v(e, t.test),
                  r = P(e);
                let i =
                  'var ' +
                  r +
                  ' = ' +
                  n +
                  ';\n if (' +
                  r +
                  ' === true) {\n' +
                  I(e, t.consequent) +
                  '\n }\n';
                return (
                  null !== t.alternate
                    ? (i +=
                        'else if (' +
                        r +
                        '===false)   { \n' +
                        I(e, t.alternate) +
                        '}\n')
                    : (i +=
                        'else if (' +
                        r +
                        '===false) { \n lastStatement = lc.voidOperation;\n }\n'),
                  (i +=
                    "else { lang.error({type: '" +
                    t.type +
                    "'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION'); \n}\n"),
                  i
                );
              })(e, t);
            case 'ExpressionStatement':
              return (function (e, t) {
                return 'AssignmentExpression' === t.expression.type
                  ? 'lastStatement = lc.voidOperation; ' +
                      v(e, t.expression) +
                      '; \n '
                  : (t.expression.type,
                    'lastStatement = ' + v(e, t.expression) + '; ');
              })(e, t);
            case 'AssignmentExpression':
              return (function (e, t) {
                const n = v(e, t.right);
                let r = null,
                  i = '';
                if ('MemberExpression' === t.left.type)
                  return (
                    (r = v(e, t.left.object)),
                    (i =
                      !0 === t.left.computed
                        ? v(e, t.left.property)
                        : "'" + t.left.property.name + "'"),
                    'lang.assignmember(' +
                      r +
                      ',' +
                      i +
                      ",'" +
                      t.operator +
                      "'," +
                      n +
                      ')'
                  );
                if (((r = t.left.name.toLowerCase()), null !== e.localScope)) {
                  if (void 0 !== e.localScope[r])
                    return (
                      "lscope['" +
                      r +
                      "']=lang.assign(" +
                      n +
                      ",'" +
                      t.operator +
                      "', lscope['" +
                      r +
                      "'])"
                    );
                  if (void 0 !== e.localScope._SymbolsMap[r])
                    return (
                      "lscope['" +
                      e.localScope._SymbolsMap[r] +
                      "']=lang.assign(" +
                      n +
                      ",'" +
                      t.operator +
                      "', lscope['" +
                      e.localScope._SymbolsMap[r] +
                      "'])"
                    );
                }
                if (void 0 !== e.globalScope[r])
                  return (
                    "gscope['" +
                    r +
                    "']=lang.assign(" +
                    n +
                    ",'" +
                    t.operator +
                    "', gscope['" +
                    r +
                    "'])"
                  );
                if (void 0 !== e.globalScope._SymbolsMap[r])
                  return (
                    "gscope['" +
                    e.globalScope._SymbolsMap[r] +
                    "']=lang.assign(" +
                    n +
                    ",'" +
                    t.operator +
                    "', gscope['" +
                    e.globalScope._SymbolsMap[r] +
                    "'])"
                  );
                throw new Error('Variable not recognised');
              })(e, t);
            case 'UpdateExpression':
              return (function (e, t) {
                let n = null,
                  r = '';
                if ('MemberExpression' === t.argument.type)
                  return (
                    (n = v(e, t.argument.object)),
                    (r =
                      !0 === t.argument.computed
                        ? v(e, t.argument.property)
                        : "'" + t.argument.property.name + "'"),
                    'lang.memberupdate(' +
                      n +
                      ',' +
                      r +
                      ",'" +
                      t.operator +
                      "'," +
                      t.prefix +
                      ')'
                  );
                if (
                  ((n = t.argument.name.toLowerCase()), null !== e.localScope)
                ) {
                  if (void 0 !== e.localScope[n])
                    return (
                      "lang.update(lscope, '" +
                      n +
                      "','" +
                      t.operator +
                      "'," +
                      t.prefix +
                      ')'
                    );
                  if (void 0 !== e.localScope._SymbolsMap[n])
                    return (
                      "lang.update(lscope, '" +
                      e.localScope._SymbolsMap[n] +
                      "','" +
                      t.operator +
                      "'," +
                      t.prefix +
                      ')'
                    );
                }
                if (void 0 !== e.globalScope[n])
                  return (
                    "lang.update(gscope, '" +
                    n +
                    "','" +
                    t.operator +
                    "'," +
                    t.prefix +
                    ')'
                  );
                if (void 0 !== e.globalScope._SymbolsMap[n])
                  return (
                    "lang.update(gscope, '" +
                    e.globalScope._SymbolsMap[n] +
                    "','" +
                    t.operator +
                    "'," +
                    t.prefix +
                    ')'
                  );
                throw new Error('Variable not recognised');
              })(e, t);
            case 'BreakStatement':
              return 'break';
            case 'ContinueStatement':
              return 'continue';
            case 'TemplateLiteral':
              return (function (e, t) {
                try {
                  const n = [];
                  let r = 0;
                  for (const i of t.quasis)
                    n.push(
                      i.value
                        ? JSON.stringify(i.value.cooked)
                        : JSON.stringify(''),
                    ),
                      !1 === i.tail &&
                        (n.push(
                          t.expressions[r]
                            ? 'lang.castString(lang.aCheck(' +
                                v(e, t.expressions[r]) +
                                ", 'TemplateLiteral'))"
                            : '',
                        ),
                        r++);
                  return '([' + n.join(',') + "]).join('')";
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'TemplateElement':
              return JSON.stringify(t.value ? t.value.cooked : '');
            case 'ForStatement':
              return (function (e, t) {
                let n = 'lastStatement = lc.voidOperation; \n';
                null !== t.init && (n += v(e, t.init) + '; ');
                const r = P(e),
                  i = P(e);
                return (
                  (n += 'var ' + r + ' = true; '),
                  (n += '\n do { '),
                  null !== t.update &&
                    (n +=
                      ' if (' +
                      r +
                      '===false) {\n ' +
                      v(e, t.update) +
                      '  \n}\n ' +
                      r +
                      '=false; \n'),
                  null !== t.test &&
                    ((n += 'var ' + i + ' = ' + v(e, t.test) + '; '),
                    (n +=
                      'if (' +
                      i +
                      '===false) { break; } else if (' +
                      i +
                      "!==true) { lang.error({type: '" +
                      t.type +
                      "'},'RUNTIME','CANNOT_USE_NONBOOLEAN_IN_CONDITION');   }\n")),
                  (n += v(e, t.body)),
                  null !== t.update && (n += '\n ' + v(e, t.update)),
                  (n +=
                    '\n' +
                    r +
                    ' = true; \n} while(true);  lastStatement = lc.voidOperation; '),
                  n
                );
              })(e, t);
            case 'ForInStatement':
              return (function (e, t) {
                const n = P(e),
                  r = P(e),
                  i = P(e);
                let s = 'var ' + n + ' = ' + v(e, t.right) + ';\n';
                'VariableDeclaration' === t.left.type && (s += v(e, t.left));
                let o =
                  'VariableDeclaration' === t.left.type
                    ? t.left.declarations[0].id.name
                    : t.left.name;
                o = o.toLowerCase();
                let a = '';
                return (
                  null !== e.localScope &&
                    (void 0 !== e.localScope[o]
                      ? (a = "lscope['" + o + "']")
                      : void 0 !== e.localScope._SymbolsMap[o] &&
                        (a = "lscope['" + e.localScope._SymbolsMap[o] + "']")),
                  '' === a &&
                    (void 0 !== e.globalScope[o]
                      ? (a = "gscope['" + o + "']")
                      : void 0 !== e.globalScope._SymbolsMap[o] &&
                        (a = "gscope['" + e.globalScope._SymbolsMap[o] + "']")),
                  (s +=
                    'if (' +
                    n +
                    '===null) {  lastStatement = lc.voidOperation; }\n '),
                  (s +=
                    'else if (lc.isArray(' +
                    n +
                    ') || lc.isString(' +
                    n +
                    ')) {'),
                  (s += 'var ' + r + '=' + n + '.length; \n'),
                  (s +=
                    'for(var ' +
                    i +
                    '=0; ' +
                    i +
                    '<' +
                    r +
                    '; ' +
                    i +
                    '++) {\n'),
                  (s += a + '=' + i + ';\n'),
                  (s += v(e, t.body)),
                  (s += '\n}\n'),
                  (s += ' lastStatement = lc.voidOperation; \n'),
                  (s += ' \n}\n'),
                  (s += 'else if (lc.isImmutableArray(' + n + ')) {'),
                  (s += 'var ' + r + '=' + n + '.length(); \n'),
                  (s +=
                    'for(var ' +
                    i +
                    '=0; ' +
                    i +
                    '<' +
                    r +
                    '; ' +
                    i +
                    '++) {\n'),
                  (s += a + '=' + i + ';\n'),
                  (s += v(e, t.body)),
                  (s += '\n}\n'),
                  (s += ' lastStatement = lc.voidOperation; \n'),
                  (s += ' \n}\n'),
                  (s +=
                    'else if (( ' +
                    n +
                    ' instanceof lang.Dictionary) || ( ' +
                    n +
                    ' instanceof lang.Feature)) {'),
                  (s += 'var ' + r + '=' + n + '.keys(); \n'),
                  (s +=
                    'for(var ' +
                    i +
                    '=0; ' +
                    i +
                    '<' +
                    r +
                    '.length; ' +
                    i +
                    '++) {\n'),
                  (s += a + '=' + r + '[' + i + '];\n'),
                  (s += v(e, t.body)),
                  (s += '\n}\n'),
                  (s += ' lastStatement = lc.voidOperation; \n'),
                  (s += ' \n}\n'),
                  e.isAsync &&
                    ((s += 'else if (lc.isFeatureSet(' + n + ')) {'),
                    (s +=
                      'var ' +
                      r +
                      '=' +
                      n +
                      '.iterator(runtimeCtx.abortSignal); \n'),
                    (s +=
                      'for(var ' +
                      i +
                      '=lang. graphicToFeature( yield ' +
                      r +
                      '.next(),' +
                      n +
                      '); ' +
                      i +
                      '!=null; ' +
                      i +
                      '=lang. graphicToFeature( yield ' +
                      r +
                      '.next(),' +
                      n +
                      ')) {\n'),
                    (s += a + '=' + i + ';\n'),
                    (s += v(e, t.body)),
                    (s += '\n}\n'),
                    (s += ' lastStatement = lc.voidOperation; \n'),
                    (s += ' \n}\n')),
                  (s += 'else { lastStatement = lc.voidOperation; } \n'),
                  s
                );
              })(e, t);
            case 'Identifier':
              return (function (e, t) {
                try {
                  const n = t.name.toLowerCase();
                  if (null !== e.localScope) {
                    if (void 0 !== e.localScope[n])
                      return "lscope['" + n + "']";
                    if (void 0 !== e.localScope._SymbolsMap[n])
                      return "lscope['" + e.localScope._SymbolsMap[n] + "']";
                  }
                  if (void 0 !== e.globalScope[n]) return "gscope['" + n + "']";
                  if (void 0 !== e.globalScope._SymbolsMap[n])
                    return "gscope['" + e.globalScope._SymbolsMap[n] + "']";
                  throw new Error((0, c.H5)(t, 'RUNTIME', 'VARIABLENOTFOUND'));
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'MemberExpression':
              return (function (e, t) {
                try {
                  let n;
                  return (
                    (n =
                      !0 === t.computed
                        ? v(e, t.property)
                        : "'" + t.property.name + "'"),
                    'lang.member(' + v(e, t.object) + ',' + n + ')'
                  );
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'Literal':
              return null === t.value || void 0 === t.value
                ? 'null'
                : JSON.stringify(t.value);
            case 'ThisExpression':
            case 'ConditionalExpression':
            case 'Array':
              throw new Error((0, c.H5)(t, 'RUNTIME', 'NOTSUPPORTED'));
            case 'CallExpression':
              return (function (e, t) {
                try {
                  if ('Identifier' !== t.callee.type)
                    throw new Error(
                      (0, c.H5)(t, 'RUNTIME', 'ONLYNODESSUPPORTED'),
                    );
                  const n = t.callee.name.toLowerCase();
                  let r = '';
                  if (
                    (null !== e.localScope &&
                      (void 0 !== e.localScope[n]
                        ? (r = "lscope['" + n + "']")
                        : void 0 !== e.localScope._SymbolsMap[n] &&
                          (r =
                            "lscope['" + e.localScope._SymbolsMap[n] + "']")),
                    '' === r &&
                      (void 0 !== e.globalScope[n]
                        ? (r = "gscope['" + n + "']")
                        : void 0 !== e.globalScope._SymbolsMap[n] &&
                          (r =
                            "gscope['" + e.globalScope._SymbolsMap[n] + "']")),
                    '' !== r)
                  ) {
                    let n = '[';
                    for (let r = 0; r < t.arguments.length; r++)
                      r > 0 && (n += ', '), (n += v(e, t.arguments[r]));
                    return (
                      (n += ']'),
                      e.isAsync
                        ? '(yield lang.callfunc(' +
                          r +
                          ',' +
                          n +
                          ',runtimeCtx) )'
                        : 'lang.callfunc(' + r + ',' + n + ',runtimeCtx)'
                    );
                  }
                  throw new Error((0, c.H5)(t, 'RUNTIME', 'NOTFOUND'));
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'UnaryExpression':
              return (function (e, t) {
                try {
                  return (
                    'lang.unary(' + v(e, t.argument) + ",'" + t.operator + "')"
                  );
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'BinaryExpression':
              return (function (e, t) {
                try {
                  return (
                    'lang.binary(' +
                    v(e, t.left) +
                    ',' +
                    v(e, t.right) +
                    ",'" +
                    t.operator +
                    "')"
                  );
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'LogicalExpression':
              return (function (e, t) {
                try {
                  if (
                    'AssignmentExpression' === t.left.type ||
                    'UpdateExpression' === t.left.type
                  )
                    throw new Error(
                      (0, c.H5)(
                        t.left,
                        'RUNTIME',
                        'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                      ),
                    );
                  if (
                    'AssignmentExpression' === t.right.type ||
                    'UpdateExpression' === t.right.type
                  )
                    throw new Error(
                      (0, c.H5)(
                        t.right,
                        'RUNTIME',
                        'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                      ),
                    );
                  if ('&&' === t.operator || '||' === t.operator)
                    return (
                      '(lang.logicalCheck(' +
                      v(e, t.left) +
                      ') ' +
                      t.operator +
                      ' lang.logicalCheck(' +
                      v(e, t.right) +
                      '))'
                    );
                  throw new Error((0, c.H5)(t, 'RUNTIME', 'ONLYORORAND'));
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'ArrayExpression':
              return (function (e, t) {
                try {
                  const n = [];
                  for (let r = 0; r < t.elements.length; r++)
                    'Literal' === t.elements[r].type
                      ? n.push(v(e, t.elements[r]))
                      : n.push(
                          'lang.aCheck(' +
                            v(e, t.elements[r]) +
                            ",'ArrayExpression')",
                        );
                  return '[' + n.join(',') + ']';
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'ObjectExpression':
              return (function (e, t) {
                let n = 'lang.dictionary([';
                for (let r = 0; r < t.properties.length; r++) {
                  const i = t.properties[r];
                  r > 0 && (n += ','),
                    (n +=
                      'lang.strCheck(' +
                      ('Identifier' === i.key.type
                        ? "'" + i.key.name + "'"
                        : v(e, i.key)) +
                      ",'ObjectExpression'),lang.aCheck(" +
                      v(e, i.value) +
                      ", 'ObjectExpression')");
                }
                return (n += '])'), n;
              })(e, t);
            case 'Property':
              return (function (e, t) {
                throw new Error('Should not get here');
              })();
            default:
              throw new Error((0, c.H5)(t, 'RUNTIME', 'UNREOGNISED'));
          }
        } catch (e) {
          throw e;
        }
      }
      function I(e, t) {
        return 'BlockStatement' === t.type
          ? v(e, t)
          : 'ReturnStatement' === t.type ||
            'BreakStatement' === t.type ||
            'ContinueStatement' === t.type
          ? v(e, t) + '; '
          : 'UpdateExpression' === t.type
          ? 'lastStatement = ' + v(e, t) + '; '
          : 'ExpressionStatement' === t.type
          ? v(e, t)
          : 'ObjectExpression' === t.type
          ? 'lastStatement = ' + v(e, t) + '; '
          : v(e, t) + '; ';
      }
      function T(e, t) {
        let n = '';
        for (let r = 0; r < t.body.length; r++)
          'ReturnStatement' === t.body[r].type ||
          'BreakStatement' === t.body[r].type ||
          'ContinueStatement' === t.body[r].type
            ? (n += v(e, t.body[r]) + '; \n')
            : 'UpdateExpression' === t.body[r].type ||
              'ObjectExpression' === t.body[r].type
            ? (n += 'lastStatement = ' + v(e, t.body[r]) + '; \n')
            : (n += v(e, t.body[r]) + ' \n');
        return n;
      }
      let k = 0;
      const B = {};
      function _(e) {
        return null === e
          ? ''
          : (0, l.a)(e) || (0, l.b)(e)
          ? 'Array'
          : (0, l.o)(e)
          ? 'Date'
          : (0, l.f)(e)
          ? 'String'
          : (0, l.i)(e)
          ? 'Boolean'
          : (0, l.j)(e)
          ? 'Number'
          : e instanceof i.Z
          ? 'Attachment'
          : e instanceof r.Z
          ? 'Portal'
          : e instanceof s.Z
          ? 'Dictionary'
          : (0, l.k)(e)
          ? 'Feature'
          : e instanceof C.Z
          ? 'Point'
          : e instanceof w.Z
          ? 'Polygon'
          : e instanceof F.Z
          ? 'Polyline'
          : e instanceof x.Z
          ? 'Multipoint'
          : e instanceof E.Z
          ? 'Extent'
          : (0, l.c)(e)
          ? 'Function'
          : (0, l.q)(e)
          ? 'FeatureSet'
          : (0, l.r)(e)
          ? 'FeatureSetCollection'
          : e === l.v
          ? ''
          : 'number' == typeof e && isNaN(e)
          ? 'Number'
          : 'Unrecognised Type';
      }
      function O(e, t, n, r) {
        try {
          const i = t[n];
          if ((0, l.e)(i, r)) return t[n + 1];
          {
            const i = t.length - n;
            return 1 === i
              ? t[n]
              : 2 === i
              ? null
              : 3 === i
              ? t[n + 2]
              : O(e, t, n + 2, r);
          }
        } catch (e) {
          throw e;
        }
      }
      function R(e, t, n, r) {
        try {
          if (!0 === r) return t[n + 1];
          if (3 == t.length - n) return t[n + 2];
          {
            const r = t[n + 2];
            if (!1 === (0, l.i)(r))
              throw new Error('WHEN needs boolean test conditions');
            return R(e, t, n + 2, r);
          }
        } catch (e) {
          throw e;
        }
      }
      function L(e, t) {
        const n = e.length,
          r = Math.floor(n / 2);
        return 0 === n
          ? []
          : 1 === n
          ? [e[0]]
          : (function (e, t, n) {
              const r = [];
              for (; e.length > 0 || t.length > 0; )
                if (e.length > 0 && t.length > 0) {
                  let i = n(e[0], t[0]);
                  isNaN(i) && (i = 0),
                    i <= 0
                      ? (r.push(e[0]), (e = e.slice(1)))
                      : (r.push(t[0]), (t = t.slice(1)));
                } else
                  e.length > 0
                    ? (r.push(e[0]), (e = e.slice(1)))
                    : t.length > 0 && (r.push(t[0]), (t = t.slice(1)));
              return r;
            })(L(e.slice(0, r), t), L(e.slice(r, n), t), t);
      }
      function M(e, t) {
        try {
          const n = e.length,
            r = Math.floor(n / 2);
          if (0 === n) return (0, y.DB)([]);
          if (1 === n) return (0, y.DB)([e[0]]);
          const i = [M(e.slice(0, r), t), M(e.slice(r, n), t)];
          return (0, y.$6)(i).then((e) => U(e[0], e[1], t, []));
        } catch (e) {
          return (0, y.d1)(e);
        }
      }
      function U(e, t, n, r) {
        return (0, y.Ue)((i, s) => {
          const o = r;
          e.length > 0 || t.length > 0
            ? e.length > 0 && t.length > 0
              ? n(e[0], t[0]).then((a) => {
                  try {
                    isNaN(a) && (a = 1),
                      a <= 0
                        ? (o.push(e[0]), (e = e.slice(1)))
                        : (o.push(t[0]), (t = t.slice(1))),
                      U(e, t, n, r).then((e) => {
                        i(e);
                      }, s);
                  } catch (e) {
                    s(e);
                  }
                }, s)
              : e.length > 0
              ? (o.push(e[0]),
                U((e = e.slice(1)), t, n, r).then((e) => {
                  i(e);
                }, s))
              : t.length > 0 &&
                (o.push(t[0]),
                (t = t.slice(1)),
                U(e, t, n, r).then((e) => {
                  i(e);
                }, s))
            : i(r);
        });
      }
      function Z(e) {
        return (
          e.symbols.symbolCounter++, '_T' + e.symbols.symbolCounter.toString()
        );
      }
      function P(e) {
        return (
          e.symbols.symbolCounter++,
          '_Tvar' + e.symbols.symbolCounter.toString()
        );
      }
      (0, f.r)(B, S),
        (0, g.r)(B, S),
        (0, m.r)(B, S),
        (0, p.r)(B, S),
        (0, D.r)(B, S),
        (B.typeof = function (e, t) {
          return S(e, t, function (e, t, n) {
            (0, l.p)(n, 1, 1);
            const r = _(n[0]);
            if ('Unrecognised Type' === r) throw new Error('Unrecognised Type');
            return r;
          });
        }),
        (B.iif = function (e, t) {
          try {
            return S(e, t, function (e, t, n) {
              if (((0, l.p)(n, 3, 3), !1 === (0, l.i)(n[0])))
                throw new Error(
                  'IF Function must have a boolean test condition',
                );
              return n[0] ? n[1] : n[2];
            });
          } catch (e) {
            throw e;
          }
        }),
        (B.decode = function (e, t) {
          try {
            return S(e, t, function (t, n, r) {
              if (r.length < 2) throw new Error('Missing Parameters');
              if (2 === r.length) return r[1];
              {
                if ((r.length - 1) % 2 == 0)
                  throw new Error('Must have a default value result.');
                const t = r[0];
                return O(e, r, 1, t);
              }
            });
          } catch (e) {
            throw e;
          }
        }),
        (B.when = function (e, t) {
          try {
            return S(e, t, function (t, n, r) {
              if (r.length < 3) throw new Error('Missing Parameters');
              if (r.length % 2 == 0)
                throw new Error('Must have a default value result.');
              const i = r[0];
              if (!1 === (0, l.i)(i))
                throw new Error('WHEN needs boolean test conditions');
              return R(e, r, 0, i);
            });
          } catch (e) {
            throw e;
          }
        }),
        (B.top = function (e, t) {
          return S(e, t, function (e, t, n) {
            if (((0, l.p)(n, 2, 2), (0, l.a)(n[0])))
              return (0, l.t)(n[1]) >= n[0].length
                ? n[0].slice(0)
                : n[0].slice(0, (0, l.t)(n[1]));
            if ((0, l.b)(n[0]))
              return (0, l.t)(n[1]) >= n[0].length()
                ? n[0].slice(0)
                : n[0].slice(0, (0, l.t)(n[1]));
            throw new Error('Top cannot accept this parameter type');
          });
        }),
        (B.first = function (e, t) {
          return S(e, t, function (e, t, n) {
            return (
              (0, l.p)(n, 1, 1),
              (0, l.a)(n[0])
                ? 0 === n[0].length
                  ? null
                  : n[0][0]
                : (0, l.b)(n[0])
                ? 0 === n[0].length()
                  ? null
                  : n[0].get(0)
                : null
            );
          });
        }),
        (B.sort = function (e, t) {
          return S(e, t, function (t, n, r) {
            (0, l.p)(r, 1, 2);
            let i = r[0];
            if (((0, l.b)(i) && (i = i.toArray()), !1 === (0, l.a)(i)))
              throw new Error('Illegal Argument');
            if (r.length > 1) {
              if (!1 === (0, l.c)(r[1])) throw new Error('Illegal Argument');
              let n = i;
              const s = function (e, n) {
                return J.callfunc(r[1], [e, n], t);
              };
              return e.isAsync
                ? M(n, s)
                : ((n = L(n, function (e, t) {
                    return s(e, t);
                  })),
                  n);
            }
            {
              let e = i;
              if (0 === e.length) return [];
              const t = {};
              for (let n = 0; n < e.length; n++) {
                const r = _(e[n]);
                '' !== r && (t[r] = !0);
              }
              if (
                !0 === t.Array ||
                !0 === t.Dictionary ||
                !0 === t.Feature ||
                !0 === t.Point ||
                !0 === t.Polygon ||
                !0 === t.Polyline ||
                !0 === t.Multipoint ||
                !0 === t.Extent ||
                !0 === t.Function
              )
                return e.slice(0);
              let n = 0,
                r = '';
              for (const e in t) n++, (r = e);
              return (
                (e =
                  n > 1 || 'String' === r
                    ? L(e, function (e, t) {
                        if (null == e || e === l.v)
                          return null == t || t === l.v ? 0 : 1;
                        if (null == t || t === l.v) return -1;
                        const n = (0, l.d)(e),
                          r = (0, l.d)(t);
                        return n < r ? -1 : n === r ? 0 : 1;
                      })
                    : 'Number' === r
                    ? L(e, function (e, t) {
                        return e - t;
                      })
                    : 'Boolean' === r
                    ? L(e, function (e, t) {
                        return e === t ? 0 : t ? -1 : 1;
                      })
                    : 'Date' === r
                    ? L(e, function (e, t) {
                        return t - e;
                      })
                    : e.slice(0)),
                e
              );
            }
          });
        });
      const z = {};
      for (const e in B) z[e] = new l.N(B[e]);
      (0, d.registerFunctions)(B, S);
      for (const e in B) B[e] = new l.N(B[e]);
      const G = function () {};
      G.prototype = B;
      const H = function () {};
      function j(e, t, n) {
        const r = {};
        e || (e = {}),
          n || (n = {}),
          (r._SymbolsMap = {}),
          (r.textformatting = 1),
          (r.infinity = 1),
          (r.pi = 1);
        for (const e in t) r[e] = 1;
        for (const e in n) r[e] = 1;
        for (const t in e) r[t] = 1;
        return r;
      }
      function V(e, t) {
        const n = {
          mode: t,
          compiled: !0,
          functions: {},
          signatures: [],
          failDefferred: N,
          standardFunction: S,
          standardFunctionAsync: S,
          evaluateIdentifier: Y,
        };
        for (let t = 0; t < e.length; t++) e[t].registerFunctions(n);
        if ('sync' === t) {
          for (const e in n.functions)
            (B[e] = new l.N(n.functions[e])), (G.prototype[e] = B[e]);
          for (let e = 0; e < n.signatures.length; e++)
            (0, c.gW)(n.signatures[e], 'sync');
        } else {
          for (const e in n.functions)
            (z[e] = new l.N(n.functions[e])), (H.prototype[e] = z[e]);
          for (let e = 0; e < n.signatures.length; e++)
            (0, c.gW)(n.signatures[e], 'async');
        }
      }
      function Y(e, t) {
        const n = t.name;
        if ('_SymbolsMap' === n) throw 'Illegal';
        if (e.localStack.length > 0) {
          if (
            '_t' !== n.substr(0, 2).toLowerCase() &&
            void 0 !== e.localStack[e.localStack.length - 1][n]
          )
            return e.localStack[e.localStack.length - 1][n];
          const t = e.mangleMap[n];
          if (
            void 0 !== t &&
            void 0 !== e.localStack[e.localStack.length - 1][t]
          )
            return e.localStack[e.localStack.length - 1][t];
        }
        if (
          '_t' !== n.substr(0, 2).toLowerCase() &&
          void 0 !== e.globalScope[n]
        )
          return e.globalScope[n];
        if (1 === e.globalScope._SymbolsMap[n]) return e.globalScope[n];
        const r = e.mangleMap[n];
        return void 0 !== r ? e.globalScope[r] : void 0;
      }
      (H.prototype = z), l.s, V([h.A], 'sync'), V([h.A], 'async');
      let q = 0;
      const J = {
        error(e, t, n) {
          throw new Error((0, c.H5)(e, t, n));
        },
        __awaiter: (e, t, n, r) =>
          (0, y.Ue)((n, i) => {
            function s(e) {
              try {
                a(r.next(e));
              } catch (e) {
                i(e);
              }
            }
            function o(e) {
              try {
                a(r.throw(e));
              } catch (e) {
                i(e);
              }
            }
            function a(e) {
              e.done
                ? n(e.value)
                : e.value && e.value.then
                ? e.value.then(s, o)
                : (q++,
                  q % 100 == 0
                    ? setTimeout(() => {
                        (q = 0), s(e.value);
                      }, 0)
                    : s(e.value));
            }
            a((r = r.apply(e, t || [])).next());
          }),
        functionDepthchecker: (e, t) =>
          function () {
            if ((t.depthCounter++, t.localStack.push([]), t.depthCounter > 64))
              throw new Error('Exceeded maximum function depth');
            const n = e.apply(this, arguments);
            return (0, y.y8)(n)
              ? n.then(
                  (e) => (
                    t.depthCounter--,
                    (t.localStack.length = t.localStack.length - 1),
                    e
                  ),
                )
              : (t.depthCounter--,
                (t.localStack.length = t.localStack.length - 1),
                n);
          },
        castString: (e) => (0, l.d)(e),
        aCheck(e, t) {
          if ((0, l.c)(e))
            throw new Error(
              (0, c.H5)({ type: t }, 'RUNTIME', 'FUNCTIONCONTEXTILLEGAL'),
            );
          return e === l.v ? null : e;
        },
        Dictionary: s.Z,
        Feature: o.Z,
        dictionary(e) {
          const t = {};
          for (let n = 0; n < e.length; n += 2) {
            if ((0, l.c)(e[n + 1])) throw new Error('Illegal Argument');
            if (!1 === (0, l.f)(e[n])) throw new Error('Illegal Argument');
            e[n + 1] === l.v
              ? (t[e[n].toString()] = null)
              : (t[e[n].toString()] = e[n + 1]);
          }
          const n = new s.Z(t);
          return (n.immutable = !1), n;
        },
        strCheck(e) {
          if (!1 === (0, l.f)(e)) throw new Error('Illegal Argument');
          return e;
        },
        unary(e, t) {
          if ((0, l.i)(e)) {
            if ('!' === t) return !e;
            if ('-' === t) return -1 * (0, l.t)(e);
            if ('+' === t) return 1 * (0, l.t)(e);
            if ('~' === t) return ~(0, l.t)(e);
            throw new Error(
              (0, c.H5)(
                {
                  type: 'UnaryExpression',
                  operator: t,
                  prefix: null,
                  argument: null,
                },
                'RUNTIME',
                'NOTSUPPORTEDUNARYOPERATOR',
              ),
            );
          }
          if ('-' === t) return -1 * (0, l.t)(e);
          if ('+' === t) return 1 * (0, l.t)(e);
          if ('~' === t) return ~(0, l.t)(e);
          throw new Error(
            (0, c.H5)(
              {
                type: 'UnaryExpression',
                operator: t,
                prefix: null,
                argument: null,
              },
              'RUNTIME',
              'NOTSUPPORTEDUNARYOPERATOR',
            ),
          );
        },
        logicalCheck(e) {
          if (!1 === (0, l.i)(e))
            throw new Error(
              (0, c.H5)(
                {
                  type: 'LogicalExpression',
                  operator: null,
                  left: null,
                  right: null,
                },
                'RUNTIME',
                'ONLYORORAND',
              ),
            );
          return e;
        },
        logical(e, t, n) {
          if ((0, l.i)(e) && (0, l.i)(t))
            switch (n) {
              case '||':
                return e || t;
              case '&&':
                return e && t;
              default:
                throw new Error(
                  (0, c.H5)(
                    {
                      type: 'LogicalExpression',
                      operator: null,
                      left: null,
                      right: null,
                    },
                    'RUNTIME',
                    'ONLYORORAND',
                  ),
                );
            }
          throw new Error(
            (0, c.H5)(
              {
                type: 'LogicalExpression',
                operator: null,
                left: null,
                right: null,
              },
              'RUNTIME',
              'ONLYORORAND',
            ),
          );
        },
        binary(e, t, n) {
          switch (n) {
            case '|':
            case '<<':
            case '>>':
            case '>>>':
            case '^':
            case '&':
              return (0, l.h)((0, l.t)(e), (0, l.t)(t), n);
            case '==':
            case '=':
              return (0, l.e)(e, t);
            case '!=':
              return !(0, l.e)(e, t);
            case '<':
            case '>':
            case '<=':
            case '>=':
              return (0, l.g)(e, t, n);
            case '+':
              return (0, l.f)(e) || (0, l.f)(t)
                ? (0, l.d)(e) + (0, l.d)(t)
                : (0, l.t)(e) + (0, l.t)(t);
            case '-':
              return (0, l.t)(e) - (0, l.t)(t);
            case '*':
              return (0, l.t)(e) * (0, l.t)(t);
            case '/':
              return (0, l.t)(e) / (0, l.t)(t);
            case '%':
              return (0, l.t)(e) % (0, l.t)(t);
            default:
              throw new Error(
                (0, c.H5)(
                  { type: 'BinaryExpression', operator: n, left: e, right: t },
                  'RUNTIME',
                  'OPERATORNOTRECOGNISED',
                ),
              );
          }
        },
        assign(e, t, n) {
          switch (t) {
            case '=':
              return e === l.v ? null : e;
            case '/=':
              return (0, l.t)(n) / (0, l.t)(e);
            case '*=':
              return (0, l.t)(n) * (0, l.t)(e);
            case '-=':
              return (0, l.t)(n) - (0, l.t)(e);
            case '+=':
              return (0, l.f)(n) || (0, l.f)(e)
                ? (0, l.d)(n) + (0, l.d)(e)
                : (0, l.t)(n) + (0, l.t)(e);
            case '%=':
              return (0, l.t)(n) % (0, l.t)(e);
            default:
              throw new Error(
                (0, c.H5)(
                  {
                    type: 'AssignmentExpression',
                    operator: t,
                    left: null,
                    right: null,
                  },
                  'RUNTIME',
                  'OPERATORNOTRECOGNISED',
                ),
              );
          }
        },
        update(e, t, n, r) {
          const i = (0, l.t)(e[t]);
          return (
            (e[t] = '++' === n ? i + 1 : i - 1),
            !1 === r ? i : '++' === n ? i + 1 : i - 1
          );
        },
        graphicToFeature: (e, t) =>
          null === e
            ? null
            : o.Z.createFromGraphicLikeObject(e.geometry, e.attributes, t),
        memberupdate(e, t, n, r) {
          let i;
          if ((0, l.a)(e)) {
            if (!(0, l.j)(t)) throw new Error('Invalid Parameter');
            if ((t < 0 && (t = e.length + t), t < 0 || t >= e.length))
              throw new Error('Assignment outside of array bounds');
            (i = (0, l.t)(e[t])), (e[t] = '++' === n ? i + 1 : i - 1);
          } else if (e instanceof s.Z) {
            if (!1 === (0, l.f)(t))
              throw new Error('Dictionary accessor must be a string');
            if (!0 !== e.hasField(t)) throw new Error('Invalid Parameter');
            (i = (0, l.t)(e.field(t))),
              e.setField(t, '++' === n ? i + 1 : i - 1);
          } else {
            if (!(0, l.k)(e))
              throw (0, l.b)(e)
                ? new Error('Array is Immutable')
                : new Error('Invalid Parameter');
            if (!1 === (0, l.f)(t))
              throw new Error('Feature accessor must be a string');
            if (!0 !== e.hasField(t)) throw new Error('Invalid Parameter');
            (i = (0, l.t)(e.field(t))),
              e.setField(t, '++' === n ? i + 1 : i - 1);
          }
          return !1 === r ? i : '++' === n ? i + 1 : i - 1;
        },
        assignmember(e, t, n, r) {
          if ((0, l.a)(e)) {
            if (!(0, l.j)(t)) throw new Error('Invalid Parameter');
            if ((t < 0 && (t = e.length + t), t < 0 || t > e.length))
              throw new Error('Assignment outside of array bounds');
            if (t === e.length) {
              if ('=' !== n) throw new Error('Invalid Parameter');
              e[t] = this.assign(r, n, e[t]);
            } else e[t] = this.assign(r, n, e[t]);
          } else if (e instanceof s.Z) {
            if (!1 === (0, l.f)(t))
              throw new Error('Dictionary accessor must be a string');
            if (!0 === e.hasField(t))
              e.setField(t, this.assign(r, n, e.field(t)));
            else {
              if ('=' !== n) throw new Error('Invalid Parameter');
              e.setField(t, this.assign(r, n, null));
            }
          } else {
            if (!(0, l.k)(e))
              throw (0, l.b)(e)
                ? new Error('Array is Immutable')
                : new Error('Invalid Parameter');
            if (!1 === (0, l.f)(t))
              throw new Error('Feature accessor must be a string');
            if (!0 === e.hasField(t))
              e.setField(t, this.assign(r, n, e.field(t)));
            else {
              if ('=' !== n) throw new Error('Invalid Parameter');
              e.setField(t, this.assign(r, n, null));
            }
          }
        },
        member(e, t) {
          if (null === e)
            throw new Error(
              (0, c.H5)(
                {
                  type: 'MemberExpression',
                  object: null,
                  property: null,
                  computed: null,
                },
                'RUNTIME',
                'NOTFOUND',
              ),
            );
          if (e instanceof s.Z || (0, l.k)(e)) {
            if ((0, l.f)(t)) return e.field(t);
            throw new Error(
              (0, c.H5)(
                {
                  type: 'MemberExpression',
                  object: null,
                  property: null,
                  computed: null,
                },
                'RUNTIME',
                'INVALIDTYPE',
              ),
            );
          }
          if (e instanceof A.Z) {
            if ((0, l.f)(t))
              return (function (e, t, n) {
                let r;
                switch ((t = t.toLowerCase())) {
                  case 'hasz': {
                    const t = e.hasZ;
                    return void 0 !== t && t;
                  }
                  case 'hasm': {
                    const t = e.hasM;
                    return void 0 !== t && t;
                  }
                  case 'spatialreference': {
                    let t = e.spatialReference._arcadeCacheId;
                    if (void 0 === t) {
                      let n = !0;
                      Object.freeze &&
                        Object.isFrozen(e.spatialReference) &&
                        (n = !1),
                        n &&
                          (k++,
                          (e.spatialReference._arcadeCacheId = k),
                          (t = k));
                    }
                    const n = new s.Z({
                      wkt: e.spatialReference.wkt,
                      wkid: e.spatialReference.wkid,
                    });
                    return (
                      void 0 !== t &&
                        (n._arcadeCacheId = 'SPREF' + t.toString()),
                      n
                    );
                  }
                }
                switch (e.type) {
                  case 'extent':
                    switch (t) {
                      case 'xmin':
                      case 'xmax':
                      case 'ymin':
                      case 'ymax':
                      case 'zmin':
                      case 'zmax':
                      case 'mmin':
                      case 'mmax': {
                        const n = e[t];
                        return void 0 !== n ? n : null;
                      }
                      case 'type':
                        return 'Extent';
                    }
                    break;
                  case 'polygon':
                    switch (t) {
                      case 'rings':
                        return (
                          (r = e.cache._arcadeCacheId),
                          void 0 === r &&
                            (k++, (r = k), (e.cache._arcadeCacheId = r)),
                          new a.Z(
                            e.rings,
                            e.spatialReference,
                            !0 === e.hasZ,
                            !0 === e.hasM,
                            r,
                          )
                        );
                      case 'type':
                        return 'Polygon';
                    }
                    break;
                  case 'point':
                    switch (t) {
                      case 'x':
                      case 'y':
                      case 'z':
                      case 'm':
                        return void 0 !== e[t] ? e[t] : null;
                      case 'type':
                        return 'Point';
                    }
                    break;
                  case 'polyline':
                    switch (t) {
                      case 'paths':
                        return (
                          (r = e.cache._arcadeCacheId),
                          void 0 === r &&
                            (k++, (r = k), (e.cache._arcadeCacheId = r)),
                          new a.Z(
                            e.paths,
                            e.spatialReference,
                            !0 === e.hasZ,
                            !0 === e.hasM,
                            r,
                          )
                        );
                      case 'type':
                        return 'Polyline';
                    }
                    break;
                  case 'multipoint':
                    switch (t) {
                      case 'points':
                        return (
                          (r = e.cache._arcadeCacheId),
                          void 0 === r &&
                            (k++, (r = k), (e.cache._arcadeCacheId = r)),
                          new u.Z(
                            e.points,
                            e.spatialReference,
                            !0 === e.hasZ,
                            !0 === e.hasM,
                            r,
                            1,
                          )
                        );
                      case 'type':
                        return 'Multipoint';
                    }
                }
                throw new Error(
                  (0, c.H5)('MemberExpression', 'RUNTIME', 'PROPERTYNOTFOUND'),
                );
              })(e, t);
            throw new Error(
              (0, c.H5)(
                {
                  type: 'MemberExpression',
                  object: null,
                  property: null,
                  computed: null,
                },
                'RUNTIME',
                'INVALIDTYPE',
              ),
            );
          }
          if ((0, l.a)(e)) {
            if ((0, l.j)(t) && isFinite(t) && Math.floor(t) === t) {
              if ((t < 0 && (t = e.length + t), t >= e.length || t < 0))
                throw new Error(
                  (0, c.H5)(
                    {
                      type: 'MemberExpression',
                      object: null,
                      property: null,
                      computed: null,
                    },
                    'RUNTIME',
                    'OUTOFBOUNDS',
                  ),
                );
              return e[t];
            }
            throw new Error(
              (0, c.H5)(
                {
                  type: 'MemberExpression',
                  object: null,
                  property: null,
                  computed: null,
                },
                'RUNTIME',
                'INVALIDTYPE',
              ),
            );
          }
          if ((0, l.f)(e)) {
            if ((0, l.j)(t) && isFinite(t) && Math.floor(t) === t) {
              if ((t < 0 && (t = e.length + t), t >= e.length || t < 0))
                throw new Error(
                  (0, c.H5)(
                    {
                      type: 'MemberExpression',
                      object: null,
                      property: null,
                      computed: null,
                    },
                    'RUNTIME',
                    'OUTOFBOUNDS',
                  ),
                );
              return e[t];
            }
            throw new Error(
              (0, c.H5)(
                {
                  type: 'MemberExpression',
                  object: null,
                  property: null,
                  computed: null,
                },
                'RUNTIME',
                'INVALIDTYPE',
              ),
            );
          }
          if ((0, l.b)(e)) {
            if ((0, l.j)(t) && isFinite(t) && Math.floor(t) === t) {
              if ((t < 0 && (t = e.length() + t), t >= e.length() || t < 0))
                throw new Error(
                  (0, c.H5)(
                    {
                      type: 'MemberExpression',
                      object: null,
                      property: null,
                      computed: null,
                    },
                    'RUNTIME',
                    'OUTOFBOUNDS',
                  ),
                );
              return e.get(t);
            }
            throw new Error(
              (0, c.H5)(
                {
                  type: 'MemberExpression',
                  object: null,
                  property: null,
                  computed: null,
                },
                'RUNTIME',
                'INVALIDTYPE',
              ),
            );
          }
          throw new Error(
            (0, c.H5)(
              {
                type: 'MemberExpression',
                object: null,
                property: null,
                computed: null,
              },
              'RUNTIME',
              'INVALIDTYPE',
            ),
          );
        },
        callfunc(e, t, n) {
          return e instanceof l.N
            ? e.fn(n, { arguments: t, preparsed: !0 })
            : e instanceof l.S
            ? e.fn.apply(this, t)
            : e.apply(this, t);
        },
      };
      function X(e) {
        console.log(e);
      }
      function W(e, t = null, n = !1) {
        null === t && (t = { vars: {}, customfunctions: {} });
        const r = {
          isAsync: n,
          globalScope: j(t.vars, n ? z : B, t.customfunctions),
          localScope: null,
          mangleMap: {},
          console: X,
          lrucache: t.lrucache,
          interceptor: t.interceptor,
          services: t.services,
          symbols: { symbolCounter: 0 },
        };
        let i = v(r, e.body[0].body);
        '' === i && (i = 'lc.voidOperation; ');
        let a = '';
        a = n
          ? 'var runtimeCtx=this.prepare(context, true);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \nreturn lang.__awaiter(this, void 0, void 0, function* () {\n\n function mainBody() {\n var lastStatement=lc.voidOperation;\n return lang.__awaiter(this, void 0, void 0, function* () {\n' +
            i +
            '\n return lastStatement; }); } \n return this.postProcess(yield mainBody()); }); '
          : 'var runtimeCtx=this.prepare(context, false);\n var lc = this.lc;  var lang = this.lang; var gscope=runtimeCtx.globalScope; \n function mainBody() {\n var lastStatement=lc.voidOperation;\n ' +
            i +
            '\n return lastStatement; } \n return this.postProcess(mainBody()); ';
        const u = {
          lc: l.l,
          lang: J,
          mangles: r.mangleMap,
          postProcess(e) {
            if (
              (e instanceof l.R && (e = e.value),
              e instanceof l.I && (e = e.value),
              e === l.v && (e = null),
              e === l.m)
            )
              throw new Error('Cannot return BREAK');
            if (e === l.n) throw new Error('Cannot return CONTINUE');
            if ((0, l.c)(e)) throw new Error('Cannot return FUNCTION');
            return e;
          },
          prepare(e, t) {
            let n = e.spatialReference;
            null == n && (n = new b.Z({ wkid: 102100 }));
            const r = (function (e, t, n) {
              const r = n ? new H() : new G();
              e || (e = {}), t || (t = {});
              const i = new s.Z({
                newline: '\n',
                tab: '\t',
                singlequote: "'",
                doublequote: '"',
                forwardslash: '/',
                backwardslash: '\\',
              });
              (i.immutable = !1),
                (r._SymbolsMap = { textformatting: 1, infinity: 1, pi: 1 }),
                (r.textformatting = i),
                (r.infinity = Number.POSITIVE_INFINITY),
                (r.pi = Math.PI);
              for (const e in t) (r[e] = t[e]), (r._SymbolsMap[e] = 1);
              for (const t in e)
                (r._SymbolsMap[t] = 1),
                  e[t] && 'esri.Graphic' === e[t].declaredClass
                    ? (r[t] = o.Z.createFromGraphic(e[t]))
                    : (r[t] = e[t]);
              return r;
            })(e.vars, e.customfunctions, t);
            return {
              localStack: [],
              isAsync: t,
              mangleMap: this.mangles,
              spatialReference: n,
              globalScope: r,
              abortSignal:
                void 0 === e.abortSignal || null === e.abortSignal
                  ? { aborted: !1 }
                  : e.abortSignal,
              localScope: null,
              services: e.services,
              console: e.console ? e.console : X,
              lrucache: e.lrucache,
              interceptor: e.interceptor,
              symbols: { symbolCounter: 0 },
              depthCounter: 1,
            };
          },
        };
        return new Function('context', 'spatialReference', a).bind(u);
      }
      var K = n(9609);
      function $(e, t, n) {
        try {
          return !0 === t.preparsed
            ? n(e, null, t.arguments)
            : n(
                e,
                t,
                (function (e, t) {
                  const n = [];
                  for (let r = 0; r < t.arguments.length; r++)
                    n.push(Q(e, t.arguments[r]));
                  return n;
                })(e, t),
              );
        } catch (e) {
          throw e;
        }
      }
      function Q(e, t) {
        try {
          switch (t.type) {
            case 'EmptyStatement':
              return l.v;
            case 'VariableDeclarator':
              return (function (e, t) {
                let n = null === t.init ? null : Q(e, t.init);
                if ((n === l.v && (n = null), 'Identifier' !== t.id.type))
                  throw new Error('Can only assign a regular variable');
                const r = t.id.name.toLowerCase();
                return (
                  null !== e.localScope
                    ? (e.localScope[r] = {
                        value: n,
                        valueset: !0,
                        node: t.init,
                      })
                    : (e.globalScope[r] = {
                        value: n,
                        valueset: !0,
                        node: t.init,
                      }),
                  l.v
                );
              })(e, t);
            case 'VariableDeclaration':
              return (function (e, t) {
                for (let n = 0; n < t.declarations.length; n++)
                  Q(e, t.declarations[n]);
                return l.v;
              })(e, t);
            case 'BlockStatement':
              return (function (e, t) {
                let n = l.v;
                for (let r = 0; r < t.body.length; r++)
                  if (
                    ((n = Q(e, t.body[r])),
                    n instanceof l.R || n === l.m || n === l.n)
                  )
                    return n;
                return n;
              })(e, t);
            case 'FunctionDeclaration':
              return (function (e, t) {
                const n = t.id.name.toLowerCase();
                return (
                  (e.globalScope[n] = {
                    valueset: !0,
                    node: null,
                    value: new K.Z(t, e),
                  }),
                  l.v
                );
              })(e, t);
            case 'ReturnStatement':
              return (function (e, t) {
                if (null === t.argument) return new l.R(l.v);
                const n = Q(e, t.argument);
                return new l.R(n);
              })(e, t);
            case 'IfStatement':
              return (function (e, t) {
                if (
                  'AssignmentExpression' === t.test.type ||
                  'UpdateExpression' === t.test.type
                )
                  throw new Error(
                    (0, c.H5)(
                      t.test,
                      'RUNTIME',
                      'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                    ),
                  );
                const n = Q(e, t.test);
                if (!0 === n) return Q(e, t.consequent);
                if (!1 === n)
                  return null !== t.alternate ? Q(e, t.alternate) : l.v;
                throw new Error(
                  (0, c.H5)(t, 'RUNTIME', 'CANNOT_USE_NONBOOLEAN_IN_CONDITION'),
                );
              })(e, t);
            case 'ExpressionStatement':
              return (function (e, t) {
                if (
                  'AssignmentExpression' === t.expression.type ||
                  'UpdateExpression' === t.expression.type
                )
                  return Q(e, t.expression);
                if ('CallExpression' === t.expression.type) {
                  const n = Q(e, t.expression);
                  return n === l.v ? l.v : new l.I(n);
                }
                {
                  const n = Q(e, t.expression);
                  return n === l.v ? l.v : new l.I(n);
                }
              })(e, t);
            case 'AssignmentExpression':
              return (function (e, t) {
                const n = Q(e, t.right);
                let r = null,
                  i = '';
                if ('MemberExpression' === t.left.type) {
                  if (
                    ((r = Q(e, t.left.object)),
                    !0 === t.left.computed
                      ? (i = Q(e, t.left.property))
                      : 'Identifier' === t.left.property.type &&
                        (i = t.left.property.name),
                    (0, l.a)(r))
                  ) {
                    if (!(0, l.j)(i)) throw new Error('Invalid Parameter');
                    if ((i < 0 && (i = r.length + i), i < 0 || i > r.length))
                      throw new Error('Assignment outside of array bounds');
                    if (i === r.length) {
                      if ('=' !== t.operator)
                        throw new Error('Invalid Parameter');
                      r[i] = te(n, t.operator, r[i], t);
                    } else r[i] = te(n, t.operator, r[i], t);
                  } else if (r instanceof s.Z) {
                    if (!1 === (0, l.f)(i))
                      throw new Error('Dictionary accessor must be a string');
                    if (!0 === r.hasField(i))
                      r.setField(i, te(n, t.operator, r.field(i), t));
                    else {
                      if ('=' !== t.operator)
                        throw new Error('Invalid Parameter');
                      r.setField(i, te(n, t.operator, null, t));
                    }
                  } else {
                    if (!(0, l.k)(r))
                      throw (0, l.b)(r)
                        ? new Error('Array is Immutable')
                        : new Error('Invalid Parameter');
                    if (!1 === (0, l.f)(i))
                      throw new Error('Feature accessor must be a string');
                    if (!0 === r.hasField(i))
                      r.setField(i, te(n, t.operator, r.field(i), t));
                    else {
                      if ('=' !== t.operator)
                        throw new Error('Invalid Parameter');
                      r.setField(i, te(n, t.operator, null, t));
                    }
                  }
                  return l.v;
                }
                if (
                  ((r = t.left.name.toLowerCase()),
                  null !== e.localScope && void 0 !== e.localScope[r])
                )
                  return (
                    (e.localScope[r] = {
                      value: te(n, t.operator, e.localScope[r].value, t),
                      valueset: !0,
                      node: t.right,
                    }),
                    l.v
                  );
                if (void 0 !== e.globalScope[r])
                  return (
                    (e.globalScope[r] = {
                      value: te(n, t.operator, e.globalScope[r].value, t),
                      valueset: !0,
                      node: t.right,
                    }),
                    l.v
                  );
                throw new Error('Variable not recognised');
              })(e, t);
            case 'UpdateExpression':
              return (function (e, t) {
                let n,
                  r = null,
                  i = '';
                if ('MemberExpression' === t.argument.type) {
                  if (
                    ((r = Q(e, t.argument.object)),
                    !0 === t.argument.computed
                      ? (i = Q(e, t.argument.property))
                      : 'Identifier' === t.argument.property.type &&
                        (i = t.argument.property.name),
                    (0, l.a)(r))
                  ) {
                    if (!(0, l.j)(i)) throw new Error('Invalid Parameter');
                    if ((i < 0 && (i = r.length + i), i < 0 || i >= r.length))
                      throw new Error('Assignment outside of array bounds');
                    (n = (0, l.t)(r[i])),
                      (r[i] = '++' === t.operator ? n + 1 : n - 1);
                  } else if (r instanceof s.Z) {
                    if (!1 === (0, l.f)(i))
                      throw new Error('Dictionary accessor must be a string');
                    if (!0 !== r.hasField(i))
                      throw new Error('Invalid Parameter');
                    (n = (0, l.t)(r.field(i))),
                      r.setField(i, '++' === t.operator ? n + 1 : n - 1);
                  } else {
                    if (!(0, l.k)(r))
                      throw (0, l.b)(r)
                        ? new Error('Array is Immutable')
                        : new Error('Invalid Parameter');
                    if (!1 === (0, l.f)(i))
                      throw new Error('Feature accessor must be a string');
                    if (!0 !== r.hasField(i))
                      throw new Error('Invalid Parameter');
                    (n = (0, l.t)(r.field(i))),
                      r.setField(i, '++' === t.operator ? n + 1 : n - 1);
                  }
                  return !1 === t.prefix
                    ? n
                    : '++' === t.operator
                    ? n + 1
                    : n - 1;
                }
                if (
                  ((r =
                    'Identifier' === t.argument.type
                      ? t.argument.name.toLowerCase()
                      : ''),
                  !r)
                )
                  throw new Error('Invalid identifier');
                if (null !== e.localScope && void 0 !== e.localScope[r])
                  return (
                    (n = (0, l.t)(e.localScope[r].value)),
                    (e.localScope[r] = {
                      value: '++' === t.operator ? n + 1 : n - 1,
                      valueset: !0,
                      node: t,
                    }),
                    !1 === t.prefix ? n : '++' === t.operator ? n + 1 : n - 1
                  );
                if (void 0 !== e.globalScope[r])
                  return (
                    (n = (0, l.t)(e.globalScope[r].value)),
                    (e.globalScope[r] = {
                      value: '++' === t.operator ? n + 1 : n - 1,
                      valueset: !0,
                      node: t,
                    }),
                    !1 === t.prefix ? n : '++' === t.operator ? n + 1 : n - 1
                  );
                throw new Error('Variable not recognised');
              })(e, t);
            case 'BreakStatement':
              return l.m;
            case 'ContinueStatement':
              return l.n;
            case 'TemplateElement':
              return (function (e, t) {
                return t.value ? t.value.cooked : '';
              })(0, t);
            case 'TemplateLiteral':
              return (function (e, t) {
                let n = '',
                  r = 0;
                for (const i of t.quasis)
                  (n += i.value ? i.value.cooked : ''),
                    !1 === i.tail &&
                      ((n += t.expressions[r]
                        ? (0, l.d)(Q(e, t.expressions[r]))
                        : ''),
                      r++);
                return n;
              })(e, t);
            case 'ForStatement':
              return (function (e, t) {
                null !== t.init && Q(e, t.init);
                const n = { testResult: !0, lastAction: l.v };
                do {
                  ee(e, t, n);
                } while (!0 === n.testResult);
                return n.lastAction instanceof l.R ? n.lastAction : l.v;
              })(e, t);
            case 'ForInStatement':
              return (function (e, t) {
                const n = Q(e, t.right);
                'VariableDeclaration' === t.left.type && Q(e, t.left);
                let r = null,
                  i = '';
                if ('VariableDeclaration' === t.left.type) {
                  const e = t.left.declarations[0].id;
                  'Identifier' === e.type && (i = e.name);
                } else 'Identifier' === t.left.type && (i = t.left.name);
                if (!i)
                  throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDVARIABLE'));
                if (
                  ((i = i.toLowerCase()),
                  null !== e.localScope &&
                    void 0 !== e.localScope[i] &&
                    (r = e.localScope[i]),
                  null === r &&
                    void 0 !== e.globalScope[i] &&
                    (r = e.globalScope[i]),
                  null === r)
                )
                  throw new Error(
                    (0, c.H5)(t, 'RUNTIME', 'VARIABLENOTDECLARED'),
                  );
                if ((0, l.a)(n) || (0, l.f)(n)) {
                  const i = n.length;
                  for (let n = 0; n < i; n++) {
                    r.value = n;
                    const i = Q(e, t.body);
                    if (i === l.m) break;
                    if (i instanceof l.R) return i;
                  }
                  return l.v;
                }
                if ((0, l.b)(n)) {
                  for (let i = 0; i < n.length(); i++) {
                    r.value = i;
                    const n = Q(e, t.body);
                    if (n === l.m) break;
                    if (n instanceof l.R) return n;
                  }
                  return l.v;
                }
                if (!(n instanceof s.Z || (0, l.k)(n))) return l.v;
                {
                  const i = n.keys();
                  for (let n = 0; n < i.length; n++) {
                    r.value = i[n];
                    const s = Q(e, t.body);
                    if (s === l.m) break;
                    if (s instanceof l.R) return s;
                  }
                }
              })(e, t);
            case 'Identifier':
              return ie(e, t);
            case 'MemberExpression':
              return (function (e, t) {
                try {
                  const n = Q(e, t.object);
                  if (null === n)
                    throw new Error((0, c.H5)(t, 'RUNTIME', 'NOTFOUND'));
                  if (!1 === t.computed) {
                    if ('Identifier' === t.property.type) {
                      if (n instanceof s.Z || (0, l.k)(n))
                        return n.field(t.property.name);
                      if (n instanceof A.Z) return re(n, t.property.name, t);
                    }
                    throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                  }
                  {
                    let r = Q(e, t.property);
                    if (n instanceof s.Z || (0, l.k)(n)) {
                      if ((0, l.f)(r)) return n.field(r);
                      throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                    }
                    if (n instanceof A.Z) {
                      if ((0, l.f)(r)) return re(n, r, t);
                      throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                    }
                    if ((0, l.a)(n)) {
                      if ((0, l.j)(r) && isFinite(r) && Math.floor(r) === r) {
                        if (
                          (r < 0 && (r = n.length + r), r >= n.length || r < 0)
                        )
                          throw new Error(
                            (0, c.H5)(t, 'RUNTIME', 'OUTOFBOUNDS'),
                          );
                        return n[r];
                      }
                      throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                    }
                    if ((0, l.f)(n)) {
                      if ((0, l.j)(r) && isFinite(r) && Math.floor(r) === r) {
                        if (
                          (r < 0 && (r = n.length + r), r >= n.length || r < 0)
                        )
                          throw new Error(
                            (0, c.H5)(t, 'RUNTIME', 'OUTOFBOUNDS'),
                          );
                        return n[r];
                      }
                      throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                    }
                    if ((0, l.b)(n)) {
                      if ((0, l.j)(r) && isFinite(r) && Math.floor(r) === r) {
                        if (
                          (r < 0 && (r = n.length() + r),
                          r >= n.length() || r < 0)
                        )
                          throw new Error(
                            (0, c.H5)(t, 'RUNTIME', 'OUTOFBOUNDS'),
                          );
                        return n.get(r);
                      }
                      throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                    }
                    throw new Error((0, c.H5)(t, 'RUNTIME', 'INVALIDTYPE'));
                  }
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'Literal':
              return t.value;
            case 'CallExpression':
              return (function (e, t) {
                try {
                  if ('Identifier' !== t.callee.type)
                    throw new Error(
                      (0, c.H5)(t, 'RUNTIME', 'ONLYNODESSUPPORTED'),
                    );
                  if (
                    null !== e.localScope &&
                    void 0 !== e.localScope[t.callee.name.toLowerCase()]
                  ) {
                    const n = e.localScope[t.callee.name.toLowerCase()];
                    if (n.value instanceof l.N) return n.value.fn(e, t);
                    if (n.value instanceof K.Z)
                      return he(e, t, n.value.definition);
                    throw new Error((0, c.H5)(t, 'RUNTIME', 'NOTAFUNCTION'));
                  }
                  if (void 0 !== e.globalScope[t.callee.name.toLowerCase()]) {
                    const n = e.globalScope[t.callee.name.toLowerCase()];
                    if (n.value instanceof l.N) return n.value.fn(e, t);
                    if (n.value instanceof K.Z)
                      return he(e, t, n.value.definition);
                    throw new Error((0, c.H5)(t, 'RUNTIME', 'NOTAFUNCTION'));
                  }
                  throw new Error((0, c.H5)(t, 'RUNTIME', 'NOTFOUND'));
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'UnaryExpression':
              return (function (e, t) {
                try {
                  const n = Q(e, t.argument);
                  if ((0, l.i)(n)) {
                    if ('!' === t.operator) return !n;
                    if ('-' === t.operator) return -1 * (0, l.t)(n);
                    if ('+' === t.operator) return 1 * (0, l.t)(n);
                    if ('~' === t.operator) return ~(0, l.t)(n);
                    throw new Error(
                      (0, c.H5)(t, 'RUNTIME', 'NOTSUPPORTEDUNARYOPERATOR'),
                    );
                  }
                  if ('~' === t.operator) return ~(0, l.t)(n);
                  if ('-' === t.operator) return -1 * (0, l.t)(n);
                  if ('+' === t.operator) return 1 * (0, l.t)(n);
                  throw new Error(
                    (0, c.H5)(t, 'RUNTIME', 'NOTSUPPORTEDUNARYOPERATOR'),
                  );
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'BinaryExpression':
              return (function (e, t) {
                try {
                  const n = [Q(e, t.left), Q(e, t.right)],
                    r = n[0],
                    i = n[1];
                  switch (t.operator) {
                    case '|':
                    case '<<':
                    case '>>':
                    case '>>>':
                    case '^':
                    case '&':
                      return (0, l.h)((0, l.t)(r), (0, l.t)(i), t.operator);
                    case '==':
                      return (0, l.e)(r, i);
                    case '!=':
                      return !(0, l.e)(r, i);
                    case '<':
                    case '>':
                    case '<=':
                    case '>=':
                      return (0, l.g)(r, i, t.operator);
                    case '+':
                      return (0, l.f)(r) || (0, l.f)(i)
                        ? (0, l.d)(r) + (0, l.d)(i)
                        : (0, l.t)(r) + (0, l.t)(i);
                    case '-':
                      return (0, l.t)(r) - (0, l.t)(i);
                    case '*':
                      return (0, l.t)(r) * (0, l.t)(i);
                    case '/':
                      return (0, l.t)(r) / (0, l.t)(i);
                    case '%':
                      return (0, l.t)(r) % (0, l.t)(i);
                    default:
                      throw new Error(
                        (0, c.H5)(t, 'RUNTIME', 'OPERATORNOTRECOGNISED'),
                      );
                  }
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'LogicalExpression':
              return (function (e, t) {
                try {
                  if (
                    'AssignmentExpression' === t.left.type ||
                    'UpdateExpression' === t.left.type
                  )
                    throw new Error(
                      (0, c.H5)(
                        t.left,
                        'RUNTIME',
                        'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                      ),
                    );
                  if (
                    'AssignmentExpression' === t.right.type ||
                    'UpdateExpression' === t.right.type
                  )
                    throw new Error(
                      (0, c.H5)(
                        t.right,
                        'RUNTIME',
                        'CANNOT_USE_ASSIGNMENT_IN_CONDITION',
                      ),
                    );
                  const n = Q(e, t.left);
                  if ((0, l.i)(n))
                    switch (t.operator) {
                      case '||':
                        if (!0 === n) return n;
                        {
                          const n = Q(e, t.right);
                          if ((0, l.i)(n)) return n;
                          throw new Error(
                            (0, c.H5)(t, 'RUNTIME', 'ONLYORORAND'),
                          );
                        }
                      case '&&':
                        if (!1 === n) return n;
                        {
                          const n = Q(e, t.right);
                          if ((0, l.i)(n)) return n;
                          throw new Error(
                            (0, c.H5)(t, 'RUNTIME', 'ONLYORORAND'),
                          );
                        }
                      default:
                        throw new Error((0, c.H5)(t, 'RUNTIME', 'ONLYORORAND'));
                    }
                  throw new Error((0, c.H5)(t, 'RUNTIME', 'ONLYBOOLEAN'));
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'ArrayExpression':
              return (function (e, t) {
                try {
                  const n = [];
                  for (let r = 0; r < t.elements.length; r++) {
                    const i = Q(e, t.elements[r]);
                    if ((0, l.c)(i))
                      throw new Error(
                        (0, c.H5)(t, 'RUNTIME', 'FUNCTIONCONTEXTILLEGAL'),
                      );
                    i === l.v ? n.push(null) : n.push(i);
                  }
                  return n;
                } catch (e) {
                  throw e;
                }
              })(e, t);
            case 'ObjectExpression':
              return (function (e, t) {
                const n = {};
                for (let r = 0; r < t.properties.length; r++) {
                  const i = Q(e, t.properties[r]);
                  if ((0, l.c)(i.value)) throw new Error('Illegal Argument');
                  if (!1 === (0, l.f)(i.key))
                    throw new Error('Illegal Argument');
                  i.value === l.v
                    ? (n[i.key.toString()] = null)
                    : (n[i.key.toString()] = i.value);
                }
                const r = new s.Z(n);
                return (r.immutable = !1), r;
              })(e, t);
            case 'Property':
              return (function (e, t) {
                return {
                  key: 'Identifier' === t.key.type ? t.key.name : Q(e, t.key),
                  value: Q(e, t.value),
                };
              })(e, t);
            default:
              throw new Error((0, c.H5)(t, 'RUNTIME', 'UNREOGNISED'));
          }
        } catch (e) {
          throw e;
        }
      }
      function ee(e, t, n) {
        if (null !== t.test) {
          if (((n.testResult = Q(e, t.test)), !1 === n.testResult)) return;
          if (!0 !== n.testResult)
            throw new Error(
              (0, c.H5)(t, 'RUNTIME', 'CANNOT_USE_NONBOOLEAN_IN_CONDITION'),
            );
        }
        (n.lastAction = Q(e, t.body)),
          n.lastAction !== l.m
            ? n.lastAction instanceof l.R
              ? (n.testResult = !1)
              : null !== t.update && Q(e, t.update)
            : (n.testResult = !1);
      }
      function te(e, t, n, r) {
        switch (t) {
          case '=':
            return e === l.v ? null : e;
          case '/=':
            return (0, l.t)(n) / (0, l.t)(e);
          case '*=':
            return (0, l.t)(n) * (0, l.t)(e);
          case '-=':
            return (0, l.t)(n) - (0, l.t)(e);
          case '+=':
            return (0, l.f)(n) || (0, l.f)(e)
              ? (0, l.d)(n) + (0, l.d)(e)
              : (0, l.t)(n) + (0, l.t)(e);
          case '%=':
            return (0, l.t)(n) % (0, l.t)(e);
          default:
            throw new Error((0, c.H5)(r, 'RUNTIME', 'OPERATORNOTRECOGNISED'));
        }
      }
      let ne = 0;
      function re(e, t, n) {
        let r;
        switch ((t = t.toLowerCase())) {
          case 'hasz': {
            const t = e.hasZ;
            return void 0 !== t && t;
          }
          case 'hasm': {
            const t = e.hasM;
            return void 0 !== t && t;
          }
          case 'spatialreference': {
            let t = e.spatialReference._arcadeCacheId;
            if (void 0 === t) {
              let n = !0;
              Object.freeze && Object.isFrozen(e.spatialReference) && (n = !1),
                n && (ne++, (e.spatialReference._arcadeCacheId = ne), (t = ne));
            }
            const n = new s.Z({
              wkt: e.spatialReference.wkt,
              wkid: e.spatialReference.wkid,
            });
            return (
              void 0 !== t && (n._arcadeCacheId = 'SPREF' + t.toString()), n
            );
          }
        }
        switch (e.type) {
          case 'extent':
            switch (t) {
              case 'xmin':
              case 'xmax':
              case 'ymin':
              case 'ymax':
              case 'zmin':
              case 'zmax':
              case 'mmin':
              case 'mmax': {
                const n = e[t];
                return void 0 !== n ? n : null;
              }
              case 'type':
                return 'Extent';
            }
            break;
          case 'polygon':
            switch (t) {
              case 'rings':
                return (
                  (r = e.cache._arcadeCacheId),
                  void 0 === r &&
                    (ne++, (r = ne), (e.cache._arcadeCacheId = r)),
                  new a.Z(
                    e.rings,
                    e.spatialReference,
                    !0 === e.hasZ,
                    !0 === e.hasM,
                    r,
                  )
                );
              case 'type':
                return 'Polygon';
            }
            break;
          case 'point':
            switch (t) {
              case 'x':
              case 'y':
              case 'z':
              case 'm':
                return void 0 !== e[t] ? e[t] : null;
              case 'type':
                return 'Point';
            }
            break;
          case 'polyline':
            switch (t) {
              case 'paths':
                return (
                  (r = e.cache._arcadeCacheId),
                  void 0 === r &&
                    (ne++, (r = ne), (e.cache._arcadeCacheId = r)),
                  new a.Z(
                    e.paths,
                    e.spatialReference,
                    !0 === e.hasZ,
                    !0 === e.hasM,
                    r,
                  )
                );
              case 'type':
                return 'Polyline';
            }
            break;
          case 'multipoint':
            switch (t) {
              case 'points':
                return (
                  (r = e.cache._arcadeCacheId),
                  void 0 === r &&
                    (ne++, (r = ne), (e.cache._arcadeCacheId = r)),
                  new u.Z(
                    e.points,
                    e.spatialReference,
                    !0 === e.hasZ,
                    !0 === e.hasM,
                    r,
                    1,
                  )
                );
              case 'type':
                return 'Multipoint';
            }
        }
        throw new Error((0, c.H5)(n, 'RUNTIME', 'PROPERTYNOTFOUND'));
      }
      function ie(e, t) {
        let n;
        try {
          const r = t.name.toLowerCase();
          if (null !== e.localScope && void 0 !== e.localScope[r])
            return (
              (n = e.localScope[r]),
              !0 === n.valueset ||
                ((n.value = Q(e, n.node)), (n.valueset = !0)),
              n.value
            );
          if (void 0 !== e.globalScope[r])
            return (
              (n = e.globalScope[r]),
              !0 === n.valueset ||
                ((n.value = Q(e, n.node)), (n.valueset = !0)),
              n.value
            );
          throw new Error((0, c.H5)(t, 'RUNTIME', 'VARIABLENOTFOUND'));
        } catch (e) {
          throw e;
        }
      }
      const se = {};
      function oe(e) {
        return null == e
          ? ''
          : (0, l.a)(e) || (0, l.b)(e)
          ? 'Array'
          : (0, l.o)(e)
          ? 'Date'
          : (0, l.f)(e)
          ? 'String'
          : (0, l.i)(e)
          ? 'Boolean'
          : (0, l.j)(e)
          ? 'Number'
          : e instanceof i.Z
          ? 'Attachment'
          : e instanceof r.Z
          ? 'Portal'
          : e instanceof s.Z
          ? 'Dictionary'
          : (0, l.k)(e)
          ? 'Feature'
          : e instanceof C.Z
          ? 'Point'
          : e instanceof w.Z
          ? 'Polygon'
          : e instanceof F.Z
          ? 'Polyline'
          : e instanceof x.Z
          ? 'Multipoint'
          : e instanceof E.Z
          ? 'Extent'
          : (0, l.c)(e)
          ? 'Function'
          : (0, l.q)(e)
          ? 'FeatureSet'
          : (0, l.r)(e)
          ? 'FeatureSetCollection'
          : e === l.v
          ? ''
          : 'number' == typeof e && isNaN(e)
          ? 'Number'
          : 'Unrecognised Type';
      }
      function ae(e, t, n, r) {
        try {
          const i = Q(e, t.arguments[n]);
          if ((0, l.e)(i, r)) return Q(e, t.arguments[n + 1]);
          {
            const i = t.arguments.length - n;
            return 1 === i
              ? Q(e, t.arguments[n])
              : 2 === i
              ? null
              : 3 === i
              ? Q(e, t.arguments[n + 2])
              : ae(e, t, n + 2, r);
          }
        } catch (e) {
          throw e;
        }
      }
      function ue(e, t, n, r) {
        try {
          if (!0 === r) return Q(e, t.arguments[n + 1]);
          if (3 == t.arguments.length - n) return Q(e, t.arguments[n + 2]);
          {
            const r = Q(e, t.arguments[n + 2]);
            if (!1 === (0, l.i)(r))
              throw new Error('WHEN needs boolean test conditions');
            return ue(e, t, n + 2, r);
          }
        } catch (e) {
          throw e;
        }
      }
      function le(e, t) {
        const n = e.length,
          r = Math.floor(n / 2);
        return 0 === n
          ? []
          : 1 === n
          ? [e[0]]
          : (function (e, t, n) {
              const r = [];
              for (; e.length > 0 || t.length > 0; )
                if (e.length > 0 && t.length > 0) {
                  let i = n(e[0], t[0]);
                  isNaN(i) && (i = 0),
                    i <= 0
                      ? (r.push(e[0]), (e = e.slice(1)))
                      : (r.push(t[0]), (t = t.slice(1)));
                } else
                  e.length > 0
                    ? (r.push(e[0]), (e = e.slice(1)))
                    : t.length > 0 && (r.push(t[0]), (t = t.slice(1)));
              return r;
            })(le(e.slice(0, r), t), le(e.slice(r, n), t), t);
      }
      function ce(e, t, n) {
        try {
          const r = e.body;
          if (n.length !== e.params.length)
            throw new Error('Invalid Parameter calls to function.');
          for (let r = 0; r < n.length; r++)
            t.localScope[e.params[r].name.toLowerCase()] = {
              value: n[r],
              valueset: !0,
              node: null,
            };
          const i = Q(t, r);
          if (i instanceof l.R) return i.value;
          if (i === l.m) throw new Error('Cannot Break from a Function');
          if (i === l.n) throw new Error('Cannot Continue from a Function');
          return i instanceof l.I ? i.value : i;
        } catch (e) {
          throw e;
        }
      }
      function he(e, t, n) {
        return $(e, t, function (t, r, i) {
          const s = {
            spatialReference: e.spatialReference,
            globalScope: e.globalScope,
            depthCounter: e.depthCounter + 1,
            console: e.console,
            lrucache: e.lrucache,
            interceptor: e.interceptor,
            localScope: {},
          };
          if (s.depthCounter > 64)
            throw new Error('Exceeded maximum function depth');
          return ce(n, s, i);
        });
      }
      function fe(e) {
        return function () {
          const t = {
            spatialReference: e.context.spatialReference,
            console: e.context.console,
            lrucache: e.context.lrucache,
            interceptor: e.context.interceptor,
            localScope: {},
            depthCounter: e.context.depthCounter + 1,
            globalScope: e.context.globalScope,
          };
          if (t.depthCounter > 64)
            throw new Error('Exceeded maximum function depth');
          return ce(e.definition, t, arguments);
        };
      }
      (0, f.r)(se, $),
        (0, g.r)(se, $),
        (0, m.r)(se, $),
        (0, p.r)(se, $),
        (0, D.r)(se, $),
        (0, d.registerFunctions)(se, $),
        (se.typeof = function (e, t) {
          return $(e, t, function (e, t, n) {
            (0, l.p)(n, 1, 1);
            const r = oe(n[0]);
            if ('Unrecognised Type' === r) throw new Error('Unrecognised Type');
            return r;
          });
        }),
        (se.iif = function (e, t) {
          try {
            (0, l.p)(null === t.arguments ? [] : t.arguments, 3, 3);
            const n = Q(e, t.arguments[0]);
            if (!1 === (0, l.i)(n))
              throw new Error('IF Function must have a boolean test condition');
            const r = Q(e, t.arguments[1]),
              i = Q(e, t.arguments[2]);
            return !0 === n ? r : i;
          } catch (e) {
            throw e;
          }
        }),
        (se.decode = function (e, t) {
          try {
            if (t.arguments.length < 2) throw new Error('Missing Parameters');
            if (2 === t.arguments.length) return Q(e, t.arguments[1]);
            if ((t.arguments.length - 1) % 2 == 0)
              throw new Error('Must have a default value result.');
            return ae(e, t, 1, Q(e, t.arguments[0]));
          } catch (e) {
            throw e;
          }
        }),
        (se.when = function (e, t) {
          try {
            if (t.arguments.length < 3) throw new Error('Missing Parameters');
            if (t.arguments.length % 2 == 0)
              throw new Error('Must have a default value result.');
            const n = Q(e, t.arguments[0]);
            if (!1 === (0, l.i)(n))
              throw new Error('WHEN needs boolean test conditions');
            return ue(e, t, 0, n);
          } catch (e) {
            throw e;
          }
        }),
        (se.top = function (e, t) {
          return $(e, t, function (e, t, n) {
            if (((0, l.p)(n, 2, 2), (0, l.a)(n[0])))
              return (0, l.t)(n[1]) >= n[0].length
                ? n[0].slice(0)
                : n[0].slice(0, (0, l.t)(n[1]));
            if ((0, l.b)(n[0]))
              return (0, l.t)(n[1]) >= n[0].length()
                ? n[0].slice(0)
                : n[0].slice(0, (0, l.t)(n[1]));
            throw new Error('Top cannot accept this parameter type');
          });
        }),
        (se.first = function (e, t) {
          return $(e, t, function (e, t, n) {
            return (
              (0, l.p)(n, 1, 1),
              (0, l.a)(n[0])
                ? 0 === n[0].length
                  ? null
                  : n[0][0]
                : (0, l.b)(n[0])
                ? 0 === n[0].length()
                  ? null
                  : n[0].get(0)
                : null
            );
          });
        }),
        (se.sort = function (e, t) {
          return $(e, t, function (e, t, n) {
            (0, l.p)(n, 1, 2);
            let r = n[0];
            if (((0, l.b)(r) && (r = r.toArray()), !1 === (0, l.a)(r)))
              throw new Error('Illegal Argument');
            if (n.length > 1) {
              if (!1 === (0, l.c)(n[1])) throw new Error('Illegal Argument');
              let e = r;
              const t = fe(n[1]);
              return (
                (e = le(e, function (e, n) {
                  return t(e, n);
                })),
                e
              );
            }
            {
              let e = r;
              if (0 === e.length) return [];
              const t = {};
              for (let n = 0; n < e.length; n++) {
                const r = oe(e[n]);
                '' !== r && (t[r] = !0);
              }
              if (
                !0 === t.Array ||
                !0 === t.Dictionary ||
                !0 === t.Feature ||
                !0 === t.Point ||
                !0 === t.Polygon ||
                !0 === t.Polyline ||
                !0 === t.Multipoint ||
                !0 === t.Extent ||
                !0 === t.Function
              )
                return e.slice(0);
              let n = 0,
                i = '';
              for (const e in t) n++, (i = e);
              return (
                (e =
                  n > 1 || 'String' === i
                    ? le(e, function (e, t) {
                        if (null == e || e === l.v)
                          return null == t || t === l.v ? 0 : 1;
                        if (null == t || t === l.v) return -1;
                        const n = (0, l.d)(e),
                          r = (0, l.d)(t);
                        return n < r ? -1 : n === r ? 0 : 1;
                      })
                    : 'Number' === i
                    ? le(e, function (e, t) {
                        return e - t;
                      })
                    : 'Boolean' === i
                    ? le(e, function (e, t) {
                        return e === t ? 0 : t ? -1 : 1;
                      })
                    : 'Date' === i
                    ? le(e, function (e, t) {
                        return t - e;
                      })
                    : e.slice(0)),
                e
              );
            }
          });
        });
      for (const e in se)
        se[e] = { value: new l.N(se[e]), valueset: !0, node: null };
      const pe = function () {};
      function de(e, t) {
        const n = new pe();
        e || (e = {}), t || (t = {});
        const r = new s.Z({
          newline: '\n',
          tab: '\t',
          singlequote: "'",
          doublequote: '"',
          forwardslash: '/',
          backwardslash: '\\',
        });
        (r.immutable = !1),
          (n.textformatting = { value: r, valueset: !0, node: null });
        for (const e in t)
          n[e] = { value: new l.N(t[e]), native: !0, valueset: !0, node: null };
        for (const t in e)
          e[t] && 'esri.Graphic' === e[t].declaredClass
            ? (n[t] = {
                value: o.Z.createFromGraphic(e[t]),
                valueset: !0,
                node: null,
              })
            : (n[t] = { value: e[t], valueset: !0, node: null });
        return n;
      }
      function me(e) {
        console.log(e);
      }
      function De(e) {
        const t = {
          mode: 'sync',
          compiled: !1,
          functions: {},
          signatures: [],
          standardFunction: $,
          evaluateIdentifier: ie,
          arcadeCustomFunctionHandler: fe,
        };
        for (let n = 0; n < e.length; n++) e[n].registerFunctions(t);
        for (const e in t.functions)
          (se[e] = {
            value: new l.N(t.functions[e]),
            valueset: !0,
            node: null,
          }),
            (pe.prototype[e] = se[e]);
        for (let e = 0; e < t.signatures.length; e++)
          (0, c.gW)(t.signatures[e], 'async');
      }
      function ge(e, t) {
        let n = t.spatialReference;
        null == n && (n = new b.Z({ wkid: 102100 }));
        let r = Q(
          {
            spatialReference: n,
            globalScope: de(t.vars, t.customfunctions),
            localScope: null,
            console: t.console ? t.console : me,
            lrucache: t.lrucache,
            interceptor: t.interceptor,
            depthCounter: 1,
          },
          e.body[0].body,
        );
        if (
          (r instanceof l.R && (r = r.value),
          r instanceof l.I && (r = r.value),
          r === l.v && (r = null),
          r === l.m)
        )
          throw new Error('Cannot return BREAK');
        if (r === l.n) throw new Error('Cannot return CONTINUE');
        if (r instanceof K.Z) throw new Error('Cannot return FUNCTION');
        if (r instanceof l.N) throw new Error('Cannot return FUNCTION');
        return r;
      }
      ((pe.prototype = se).infinity = {
        value: Number.POSITIVE_INFINITY,
        valueset: !0,
        node: null,
      }),
        (pe.prototype.pi = { value: Math.PI, valueset: !0, node: null }),
        l.s,
        De([h.A]);
      const ye = 'AssignmentExpression',
        Ee = 'BlockStatement',
        Ae = 'Identifier',
        xe = 'MemberExpression',
        Ce = 'Program';
      class we {
        constructor() {
          (this.attach = !1),
            (this.comments = []),
            (this.stack = []),
            (this.leading = []),
            (this.trailing = []);
        }
        insertInnerComments(e, t) {
          if (e.type === Ee && 0 === e.body.length) {
            const n = [];
            for (let e = this.leading.length - 1; e >= 0; --e) {
              const r = this.leading[e];
              t.end.offset >= r.start &&
                (n.unshift(r.comment),
                this.leading.splice(e, 1),
                this.trailing.splice(e, 1));
            }
            n.length && (e.innerComments = n);
          }
        }
        findTrailingComments(e) {
          let t = [];
          if (this.trailing.length > 0) {
            for (let n = this.trailing.length - 1; n >= 0; --n) {
              const r = this.trailing[n];
              r.start >= e.end.offset && t.unshift(r.comment);
            }
            return (this.trailing.length = 0), t;
          }
          const n = this.stack[this.stack.length - 1];
          if (n && n.node.trailingComments) {
            const r = n.node.trailingComments[0];
            r &&
              r.range[0] >= e.end.offset &&
              ((t = n.node.trailingComments), delete n.node.trailingComments);
          }
          return t;
        }
        findLeadingComments(e) {
          const t = [];
          let n;
          for (; this.stack.length > 0; ) {
            const t = this.stack[this.stack.length - 1];
            if (!(t && t.start >= e.start.offset)) break;
            (n = t.node), this.stack.pop();
          }
          if (n) {
            for (
              let r = (n.leadingComments ? n.leadingComments.length : 0) - 1;
              r >= 0;
              --r
            ) {
              const i = n.leadingComments[r];
              i.range[1] <= e.start.offset &&
                (t.unshift(i), n.leadingComments.splice(r, 1));
            }
            return (
              n.leadingComments &&
                0 === n.leadingComments.length &&
                delete n.leadingComments,
              t
            );
          }
          for (let n = this.leading.length - 1; n >= 0; --n) {
            const r = this.leading[n];
            r.start <= e.start.offset &&
              (t.unshift(r.comment), this.leading.splice(n, 1));
          }
          return t;
        }
        visitNode(e, t) {
          if (e.type === Ce && e.body.length > 0) return;
          this.insertInnerComments(e, t);
          const n = this.findTrailingComments(t),
            r = this.findLeadingComments(t);
          r.length > 0 && (e.leadingComments = r),
            n.length > 0 && (e.trailingComments = n),
            this.stack.push({ node: e, start: t.start.offset });
        }
        visitComment(e, t) {
          if ((this.comments.push(e), this.attach)) {
            const n = {
              comment: {
                type: e.type,
                value: e.value,
                range: [t.start.offset, t.end.offset],
              },
              start: t.start.offset,
            };
            e.loc && (n.comment.loc = e.loc),
              this.leading.push(n),
              this.trailing.push(n);
          }
        }
        visit(e, t) {
          'Line' === e.type || 'Block' === e.type
            ? this.visitComment(e, t)
            : this.attach && this.visitNode(e, t);
        }
      }
      function Fe(e, t) {
        if (!e) throw new Error('ASSERT: ' + t);
      }
      class be {
        constructor() {
          (this.errors = []), (this.tolerant = !1);
        }
        recordError(e) {
          this.errors.push(e);
        }
        tolerate(e) {
          if (!this.tolerant) throw e;
          this.recordError(e);
        }
        constructError(e, t) {
          let n = new Error(e);
          try {
            throw n;
          } catch (e) {
            Object.create &&
              Object.defineProperty &&
              ((n = Object.create(e)),
              Object.defineProperty(n, 'column', { value: t }));
          }
          return n;
        }
        createError(e, t, n, r) {
          const i = 'Line ' + t + ': ' + r,
            s = this.constructError(i, n);
          return (s.index = e), (s.lineNumber = t), (s.description = r), s;
        }
        throwError(e, t, n, r) {
          throw this.createError(e, t, n, r);
        }
        tolerateError(e, t, n, r) {
          const i = this.createError(e, t, n, r);
          if (!this.tolerant) throw i;
          this.recordError(i);
        }
      }
      const Se = 'Invalid hexadecimal escape sequence',
        Ne = 'Invalid left-hand side in assignment',
        ve = 'Invalid regular expression',
        Ie = 'Octal literals are not allowed in template strings.',
        Te = 'Unexpected token %0',
        ke = 'Invalid regular expression: missing /';
      class Be {}
      class _e extends Be {
        constructor(e, t) {
          super(), (this.type = e), (this.value = t);
        }
      }
      class Oe extends Be {
        constructor(e) {
          super(), (this.elements = e), (this.type = 'ArrayExpression');
        }
      }
      const Re = ['=', '/=', '*=', '%=', '+=', '-='];
      class Le extends Be {
        constructor(e, t, n) {
          super(),
            (this.operator = e),
            (this.left = t),
            (this.right = n),
            (this.type = ye);
        }
      }
      const Me = ['||', '&&'];
      class Ue extends Be {
        constructor(e, t, n) {
          super(),
            (this.operator = e),
            (this.left = t),
            (this.right = n),
            (this.type = Me.includes(e)
              ? 'LogicalExpression'
              : 'BinaryExpression');
        }
      }
      class Ze extends Be {
        constructor(e) {
          super(), (this.body = e), (this.type = Ee);
        }
      }
      class Pe extends Be {
        constructor() {
          super(...arguments), (this.type = 'BreakStatement');
        }
      }
      class ze extends Be {
        constructor(e, t) {
          super(),
            (this.callee = e),
            (this.args = t),
            (this.type = 'CallExpression'),
            (this.arguments = t);
        }
      }
      class Ge extends Be {
        constructor(e, t) {
          super(),
            (this.object = e),
            (this.property = t),
            (this.type = xe),
            (this.computed = !0);
        }
      }
      class He extends Be {
        constructor(e, t) {
          super(),
            (this.object = e),
            (this.property = t),
            (this.type = xe),
            (this.computed = !1);
        }
      }
      class je extends Be {
        constructor() {
          super(...arguments), (this.type = 'ContinueStatement');
        }
      }
      class Ve extends Be {
        constructor() {
          super(...arguments), (this.type = 'EmptyStatement');
        }
      }
      class Ye extends Be {
        constructor(e) {
          super(), (this.expression = e), (this.type = 'ExpressionStatement');
        }
      }
      class qe extends Be {
        constructor(e, t, n) {
          super(),
            (this.left = e),
            (this.right = t),
            (this.body = n),
            (this.type = 'ForInStatement'),
            (this.each = !1);
        }
      }
      class Je extends Be {
        constructor(e, t, n, r) {
          super(),
            (this.init = e),
            (this.test = t),
            (this.update = n),
            (this.body = r),
            (this.type = 'ForStatement');
        }
      }
      class Xe extends Be {
        constructor(e, t, n) {
          super(),
            (this.id = e),
            (this.params = t),
            (this.body = n),
            (this.type = 'FunctionDeclaration'),
            (this.generator = !1),
            (this.expression = !1),
            (this.async = !1);
        }
      }
      class We extends Be {
        constructor(e) {
          super(), (this.name = e), (this.type = Ae);
        }
      }
      class Ke extends Be {
        constructor(e, t, n) {
          super(),
            (this.test = e),
            (this.consequent = t),
            (this.alternate = n),
            (this.type = 'IfStatement');
        }
      }
      class $e extends Be {
        constructor(e, t) {
          super(), (this.value = e), (this.raw = t), (this.type = 'Literal');
        }
      }
      class Qe extends Be {
        constructor(e) {
          super(), (this.properties = e), (this.type = 'ObjectExpression');
        }
      }
      class et extends Be {
        constructor(e, t, n, r, i, s) {
          super(),
            (this.kind = e),
            (this.key = t),
            (this.computed = n),
            (this.value = r),
            (this.method = i),
            (this.shorthand = s),
            (this.type = 'Property');
        }
      }
      class tt extends Be {
        constructor(e) {
          super(), (this.argument = e), (this.type = 'ReturnStatement');
        }
      }
      class nt extends Be {
        constructor(e) {
          super(), (this.body = e), (this.type = Ce);
        }
      }
      class rt extends Be {
        constructor(e, t) {
          super(),
            (this.value = e),
            (this.tail = t),
            (this.type = 'TemplateElement');
        }
      }
      class it extends Be {
        constructor(e, t) {
          super(),
            (this.quasis = e),
            (this.expressions = t),
            (this.type = 'TemplateLiteral');
        }
      }
      class st extends Be {
        constructor(e, t) {
          super(),
            (this.operator = e),
            (this.argument = t),
            (this.type = 'UnaryExpression'),
            (this.prefix = !0);
        }
      }
      class ot extends Be {
        constructor(e, t, n) {
          super(),
            (this.operator = e),
            (this.argument = t),
            (this.prefix = n),
            (this.type = 'UpdateExpression');
        }
      }
      class at extends Be {
        constructor(e, t) {
          super(),
            (this.declarations = e),
            (this.kind = t),
            (this.type = 'VariableDeclaration');
        }
      }
      class ut extends Be {
        constructor(e, t) {
          super(),
            (this.id = e),
            (this.init = t),
            (this.type = 'VariableDeclarator');
        }
      }
      const lt = {
          NonAsciiIdentifierStart:
            /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD23\uDF00-\uDF1C\uDF27\uDF30-\uDF45\uDFE0-\uDFF6]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD44\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC5F\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDEB8\uDF00-\uDF1A]|\uD806[\uDC00-\uDC2B\uDCA0-\uDCDF\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD0\uDDE1\uDDE3\uDE00\uDE0B-\uDE32\uDE3A\uDE50\uDE5C-\uDE89\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD30\uDD46\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD89\uDD98\uDEE0-\uDEF2]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF50\uDF93-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD838[\uDD00-\uDD2C\uDD37-\uDD3D\uDD4E\uDEC0-\uDEEB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43\uDD4B]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]/,
          NonAsciiIdentifierPart:
            /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05EF-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u07FD\u0800-\u082D\u0840-\u085B\u0860-\u086A\u08A0-\u08B4\u08B6-\u08BD\u08D3-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u09FC\u09FE\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9-\u0AFF\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D00-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1878\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CD0-\u1CD2\u1CD4-\u1CFA\u1D00-\u1DF9\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FEF\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7BF\uA7C2-\uA7C6\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB67\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF2D-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE35\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2\uDD00-\uDD27\uDD30-\uDD39\uDF00-\uDF1C\uDF27\uDF30-\uDF50\uDFE0-\uDFF6]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD44-\uDD46\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDC9-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3B-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC5E\uDC5F\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB8\uDEC0-\uDEC9\uDF00-\uDF1A\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDC00-\uDC3A\uDCA0-\uDCE9\uDCFF\uDDA0-\uDDA7\uDDAA-\uDDD7\uDDDA-\uDDE1\uDDE3\uDDE4\uDE00-\uDE3E\uDE47\uDE50-\uDE99\uDE9D\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6\uDD00-\uDD06\uDD08\uDD09\uDD0B-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD47\uDD50-\uDD59\uDD60-\uDD65\uDD67\uDD68\uDD6A-\uDD8E\uDD90\uDD91\uDD93-\uDD98\uDDA0-\uDDA9\uDEE0-\uDEF6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDE40-\uDE7F\uDF00-\uDF4A\uDF4F-\uDF87\uDF8F-\uDF9F\uDFE0\uDFE1\uDFE3]|\uD821[\uDC00-\uDFF7]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00-\uDD1E\uDD50-\uDD52\uDD64-\uDD67\uDD70-\uDEFB]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDD00-\uDD2C\uDD30-\uDD3D\uDD40-\uDD49\uDD4E\uDEC0-\uDEF9]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4B\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/,
        },
        ct = {
          fromCodePoint: (e) =>
            e < 65536
              ? String.fromCharCode(e)
              : String.fromCharCode(55296 + ((e - 65536) >> 10)) +
                String.fromCharCode(56320 + ((e - 65536) & 1023)),
          isWhiteSpace: (e) =>
            32 === e ||
            9 === e ||
            11 === e ||
            12 === e ||
            160 === e ||
            (e >= 5760 &&
              [
                5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200,
                8201, 8202, 8239, 8287, 12288, 65279,
              ].indexOf(e) >= 0),
          isLineTerminator: (e) =>
            10 === e || 13 === e || 8232 === e || 8233 === e,
          isIdentifierStart: (e) =>
            36 === e ||
            95 === e ||
            (e >= 65 && e <= 90) ||
            (e >= 97 && e <= 122) ||
            92 === e ||
            (e >= 128 && lt.NonAsciiIdentifierStart.test(ct.fromCodePoint(e))),
          isIdentifierPart: (e) =>
            36 === e ||
            95 === e ||
            (e >= 65 && e <= 90) ||
            (e >= 97 && e <= 122) ||
            (e >= 48 && e <= 57) ||
            92 === e ||
            (e >= 128 && lt.NonAsciiIdentifierPart.test(ct.fromCodePoint(e))),
          isDecimalDigit: (e) => e >= 48 && e <= 57,
          isHexDigit: (e) =>
            (e >= 48 && e <= 57) ||
            (e >= 65 && e <= 70) ||
            (e >= 97 && e <= 102),
          isOctalDigit: (e) => e >= 48 && e <= 55,
        };
      var ht, ft;
      ((ft = ht || (ht = {}))[(ft.BooleanLiteral = 1)] = 'BooleanLiteral'),
        (ft[(ft.EOF = 2)] = 'EOF'),
        (ft[(ft.Identifier = 3)] = 'Identifier'),
        (ft[(ft.Keyword = 4)] = 'Keyword'),
        (ft[(ft.NullLiteral = 5)] = 'NullLiteral'),
        (ft[(ft.NumericLiteral = 6)] = 'NumericLiteral'),
        (ft[(ft.Punctuator = 7)] = 'Punctuator'),
        (ft[(ft.StringLiteral = 8)] = 'StringLiteral'),
        (ft[(ft.RegularExpression = 9)] = 'RegularExpression'),
        (ft[(ft.Template = 10)] = 'Template');
      const pt = {};
      function dt(e) {
        return '0123456789abcdef'.indexOf(e.toLowerCase());
      }
      function mt(e) {
        return '01234567'.indexOf(e);
      }
      (pt[ht.BooleanLiteral] = 'Boolean'),
        (pt[ht.EOF] = '<end>'),
        (pt[ht.Identifier] = 'Identifier'),
        (pt[ht.Keyword] = 'Keyword'),
        (pt[ht.NullLiteral] = 'Null'),
        (pt[ht.NumericLiteral] = 'Numeric'),
        (pt[ht.Punctuator] = 'Punctuator'),
        (pt[ht.StringLiteral] = 'String'),
        (pt[ht.RegularExpression] = 'RegularExpression'),
        (pt[ht.Template] = 'Template');
      class Dt {
        constructor(e, t) {
          (this.source = e),
            (this.errorHandler = t),
            (this.trackComment = !1),
            (this.isModule = !1),
            (this.length = e.length),
            (this.index = 0),
            (this.lineNumber = e.length > 0 ? 1 : 0),
            (this.lineStart = 0),
            (this.curlyStack = []);
        }
        saveState() {
          return {
            index: this.index,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            curlyStack: this.curlyStack.slice(),
          };
        }
        restoreState(e) {
          (this.index = e.index),
            (this.lineNumber = e.lineNumber),
            (this.lineStart = e.lineStart),
            (this.curlyStack = e.curlyStack);
        }
        eof() {
          return this.index >= this.length;
        }
        throwUnexpectedToken(e = 'Unexpected token ILLEGAL') {
          return this.errorHandler.throwError(
            this.index,
            this.lineNumber,
            this.index - this.lineStart + 1,
            e,
          );
        }
        _tolerateUnexpectedToken(e = 'Unexpected token ILLEGAL') {
          this.errorHandler.tolerateError(
            this.index,
            this.lineNumber,
            this.index - this.lineStart + 1,
            e,
          );
        }
        _skipSingleLineComment(e) {
          let t = [],
            n = 0,
            r = null;
          for (
            this.trackComment &&
            ((t = []),
            (n = this.index - e),
            (r = {
              start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - e,
              },
              end: { line: 0, column: 0 },
            }));
            !this.eof();

          ) {
            const i = this.source.charCodeAt(this.index);
            if ((++this.index, ct.isLineTerminator(i))) {
              if (r) {
                r.end = {
                  line: this.lineNumber,
                  column: this.index - this.lineStart - 1,
                };
                const i = {
                  multiLine: !1,
                  slice: [n + e, this.index - 1],
                  range: [n, this.index - 1],
                  loc: r,
                };
                t.push(i);
              }
              return (
                13 === i &&
                  10 === this.source.charCodeAt(this.index) &&
                  ++this.index,
                ++this.lineNumber,
                (this.lineStart = this.index),
                t
              );
            }
          }
          if (r) {
            r.end = {
              line: this.lineNumber,
              column: this.index - this.lineStart,
            };
            const i = {
              multiLine: !1,
              slice: [n + e, this.index],
              range: [n, this.index],
              loc: r,
            };
            t.push(i);
          }
          return t;
        }
        _skipMultiLineComment() {
          const e = [];
          let t = 0,
            n = null;
          for (
            this.trackComment &&
            ((t = this.index - 2),
            (n = {
              start: {
                line: this.lineNumber,
                column: this.index - this.lineStart - 2,
              },
              end: { line: 0, column: 0 },
            }));
            !this.eof();

          ) {
            const r = this.source.charCodeAt(this.index);
            if (ct.isLineTerminator(r))
              13 === r &&
                10 === this.source.charCodeAt(this.index + 1) &&
                ++this.index,
                ++this.lineNumber,
                ++this.index,
                (this.lineStart = this.index);
            else if (42 === r) {
              if (47 === this.source.charCodeAt(this.index + 1)) {
                if (((this.index += 2), n)) {
                  n.end = {
                    line: this.lineNumber,
                    column: this.index - this.lineStart,
                  };
                  const r = {
                    multiLine: !0,
                    slice: [t + 2, this.index - 2],
                    range: [t, this.index],
                    loc: n,
                  };
                  e.push(r);
                }
                return e;
              }
              ++this.index;
            } else ++this.index;
          }
          if (n) {
            n.end = {
              line: this.lineNumber,
              column: this.index - this.lineStart,
            };
            const r = {
              multiLine: !0,
              slice: [t + 2, this.index],
              range: [t, this.index],
              loc: n,
            };
            e.push(r);
          }
          return this._tolerateUnexpectedToken(), e;
        }
        scanComments() {
          let e = null;
          this.trackComment && (e = []);
          let t = 0 === this.index;
          for (; !this.eof(); ) {
            let n = this.source.charCodeAt(this.index);
            if (ct.isWhiteSpace(n)) ++this.index;
            else if (ct.isLineTerminator(n))
              ++this.index,
                13 === n &&
                  10 === this.source.charCodeAt(this.index) &&
                  ++this.index,
                ++this.lineNumber,
                (this.lineStart = this.index),
                (t = !0);
            else if (47 === n)
              if (((n = this.source.charCodeAt(this.index + 1)), 47 === n)) {
                this.index += 2;
                const n = this._skipSingleLineComment(2);
                e && (e = e.concat(n)), (t = !0);
              } else {
                if (42 !== n) break;
                {
                  this.index += 2;
                  const t = this._skipMultiLineComment();
                  e && (e = e.concat(t));
                }
              }
            else if (t && 45 === n) {
              if (
                45 !== this.source.charCodeAt(this.index + 1) ||
                62 !== this.source.charCodeAt(this.index + 2)
              )
                break;
              {
                this.index += 3;
                const t = this._skipSingleLineComment(3);
                e && (e = e.concat(t));
              }
            } else {
              if (60 !== n || this.isModule) break;
              if ('!--' !== this.source.slice(this.index + 1, this.index + 4))
                break;
              {
                this.index += 4;
                const t = this._skipSingleLineComment(4);
                e && (e = e.concat(t));
              }
            }
          }
          return e;
        }
        _isKeyword(e) {
          switch ((e = e.toLowerCase()).length) {
            case 2:
              return 'if' === e || 'in' === e;
            case 3:
              return 'var' === e || 'for' === e;
            case 4:
              return 'else' === e;
            case 5:
              return 'break' === e;
            case 6:
              return 'return' === e;
            case 8:
              return 'function' === e || 'continue' === e;
            default:
              return !1;
          }
        }
        _codePointAt(e) {
          let t = this.source.charCodeAt(e);
          if (t >= 55296 && t <= 56319) {
            const n = this.source.charCodeAt(e + 1);
            n >= 56320 &&
              n <= 57343 &&
              (t = 1024 * (t - 55296) + n - 56320 + 65536);
          }
          return t;
        }
        _scanHexEscape(e) {
          const t = 'u' === e ? 4 : 2;
          let n = 0;
          for (let e = 0; e < t; ++e) {
            if (
              this.eof() ||
              !ct.isHexDigit(this.source.charCodeAt(this.index))
            )
              return null;
            n = 16 * n + dt(this.source[this.index++]);
          }
          return String.fromCharCode(n);
        }
        _scanUnicodeCodePointEscape() {
          let e = this.source[this.index],
            t = 0;
          for (
            '}' === e && this.throwUnexpectedToken();
            !this.eof() &&
            ((e = this.source[this.index++]), ct.isHexDigit(e.charCodeAt(0)));

          )
            t = 16 * t + dt(e);
          return (
            (t > 1114111 || '}' !== e) && this.throwUnexpectedToken(),
            ct.fromCodePoint(t)
          );
        }
        _getIdentifier() {
          const e = this.index++;
          for (; !this.eof(); ) {
            const t = this.source.charCodeAt(this.index);
            if (92 === t) return (this.index = e), this._getComplexIdentifier();
            if (t >= 55296 && t < 57343)
              return (this.index = e), this._getComplexIdentifier();
            if (!ct.isIdentifierPart(t)) break;
            ++this.index;
          }
          return this.source.slice(e, this.index);
        }
        _getComplexIdentifier() {
          let e,
            t = this._codePointAt(this.index),
            n = ct.fromCodePoint(t);
          for (
            this.index += n.length,
              92 === t &&
                (117 !== this.source.charCodeAt(this.index) &&
                  this.throwUnexpectedToken(),
                ++this.index,
                '{' === this.source[this.index]
                  ? (++this.index, (e = this._scanUnicodeCodePointEscape()))
                  : ((e = this._scanHexEscape('u')),
                    (null !== e &&
                      '\\' !== e &&
                      ct.isIdentifierStart(e.charCodeAt(0))) ||
                      this.throwUnexpectedToken()),
                (n = e));
            !this.eof() &&
            ((t = this._codePointAt(this.index)), ct.isIdentifierPart(t));

          )
            (e = ct.fromCodePoint(t)),
              (n += e),
              (this.index += e.length),
              92 === t &&
                ((n = n.substr(0, n.length - 1)),
                117 !== this.source.charCodeAt(this.index) &&
                  this.throwUnexpectedToken(),
                ++this.index,
                '{' === this.source[this.index]
                  ? (++this.index, (e = this._scanUnicodeCodePointEscape()))
                  : ((e = this._scanHexEscape('u')),
                    (null !== e &&
                      '\\' !== e &&
                      ct.isIdentifierPart(e.charCodeAt(0))) ||
                      this.throwUnexpectedToken()),
                (n += e));
          return n;
        }
        _octalToDecimal(e) {
          let t = '0' !== e,
            n = mt(e);
          return (
            !this.eof() &&
              ct.isOctalDigit(this.source.charCodeAt(this.index)) &&
              ((t = !0),
              (n = 8 * n + mt(this.source[this.index++])),
              '0123'.indexOf(e) >= 0 &&
                !this.eof() &&
                ct.isOctalDigit(this.source.charCodeAt(this.index)) &&
                (n = 8 * n + mt(this.source[this.index++]))),
            { code: n, octal: t }
          );
        }
        _scanIdentifier() {
          let e;
          const t = this.index,
            n =
              92 === this.source.charCodeAt(t)
                ? this._getComplexIdentifier()
                : this._getIdentifier();
          if (
            ((e =
              1 === n.length
                ? ht.Identifier
                : this._isKeyword(n)
                ? ht.Keyword
                : 'null' === n.toLowerCase()
                ? ht.NullLiteral
                : 'true' === n.toLowerCase() || 'false' === n.toLowerCase()
                ? ht.BooleanLiteral
                : ht.Identifier),
            e !== ht.Identifier && t + n.length !== this.index)
          ) {
            const e = this.index;
            (this.index = t),
              this._tolerateUnexpectedToken(
                'Keyword must not contain escaped characters',
              ),
              (this.index = e);
          }
          return {
            type: e,
            value: n,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: t,
            end: this.index,
          };
        }
        _scanPunctuator() {
          const e = this.index;
          let t = this.source[this.index];
          switch (t) {
            case '(':
            case '{':
              '{' === t && this.curlyStack.push('{'), ++this.index;
              break;
            case '.':
            case ')':
            case ';':
            case ',':
            case '[':
            case ']':
            case ':':
            case '?':
            case '~':
              ++this.index;
              break;
            case '}':
              ++this.index, this.curlyStack.pop();
              break;
            default:
              (t = this.source.substr(this.index, 4)),
                '>>>=' === t
                  ? (this.index += 4)
                  : ((t = t.substr(0, 3)),
                    '===' === t ||
                    '!==' === t ||
                    '>>>' === t ||
                    '<<=' === t ||
                    '>>=' === t ||
                    '**=' === t
                      ? (this.index += 3)
                      : ((t = t.substr(0, 2)),
                        '&&' === t ||
                        '||' === t ||
                        '==' === t ||
                        '!=' === t ||
                        '+=' === t ||
                        '-=' === t ||
                        '*=' === t ||
                        '/=' === t ||
                        '++' === t ||
                        '--' === t ||
                        '<<' === t ||
                        '>>' === t ||
                        '&=' === t ||
                        '|=' === t ||
                        '^=' === t ||
                        '%=' === t ||
                        '<=' === t ||
                        '>=' === t ||
                        '=>' === t ||
                        '**' === t
                          ? (this.index += 2)
                          : ((t = this.source[this.index]),
                            '<>=!+-*%&|^/'.indexOf(t) >= 0 && ++this.index)));
          }
          return (
            this.index === e && this.throwUnexpectedToken(),
            {
              type: ht.Punctuator,
              value: t,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index,
            }
          );
        }
        _scanHexLiteral(e) {
          let t = '';
          for (
            ;
            !this.eof() && ct.isHexDigit(this.source.charCodeAt(this.index));

          )
            t += this.source[this.index++];
          return (
            0 === t.length && this.throwUnexpectedToken(),
            ct.isIdentifierStart(this.source.charCodeAt(this.index)) &&
              this.throwUnexpectedToken(),
            {
              type: ht.NumericLiteral,
              value: parseInt('0x' + t, 16),
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index,
            }
          );
        }
        _scanBinaryLiteral(e) {
          let t = '';
          for (; !this.eof(); ) {
            const e = this.source[this.index];
            if ('0' !== e && '1' !== e) break;
            t += this.source[this.index++];
          }
          if ((0 === t.length && this.throwUnexpectedToken(), !this.eof())) {
            const e = this.source.charCodeAt(this.index);
            (ct.isIdentifierStart(e) || ct.isDecimalDigit(e)) &&
              this.throwUnexpectedToken();
          }
          return {
            type: ht.NumericLiteral,
            value: parseInt(t, 2),
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: e,
            end: this.index,
          };
        }
        _scanOctalLiteral(e, t) {
          let n = '',
            r = !1;
          for (
            ct.isOctalDigit(e.charCodeAt(0))
              ? ((r = !0), (n = '0' + this.source[this.index++]))
              : ++this.index;
            !this.eof() && ct.isOctalDigit(this.source.charCodeAt(this.index));

          )
            n += this.source[this.index++];
          return (
            r || 0 !== n.length || this.throwUnexpectedToken(),
            (ct.isIdentifierStart(this.source.charCodeAt(this.index)) ||
              ct.isDecimalDigit(this.source.charCodeAt(this.index))) &&
              this.throwUnexpectedToken(),
            {
              type: ht.NumericLiteral,
              value: parseInt(n, 8),
              octal: r,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: t,
              end: this.index,
            }
          );
        }
        _scanNumericLiteral() {
          const e = this.index;
          let t = this.source[e];
          Fe(
            ct.isDecimalDigit(t.charCodeAt(0)) || '.' === t,
            'Numeric literal must start with a decimal digit or a decimal point',
          );
          let n = '';
          if ('.' !== t) {
            if (
              ((n = this.source[this.index++]),
              (t = this.source[this.index]),
              '0' === n)
            ) {
              if ('x' === t || 'X' === t)
                return ++this.index, this._scanHexLiteral(e);
              if ('b' === t || 'B' === t)
                return ++this.index, this._scanBinaryLiteral(e);
              if ('o' === t || 'O' === t) return this._scanOctalLiteral(t, e);
            }
            for (; ct.isDecimalDigit(this.source.charCodeAt(this.index)); )
              n += this.source[this.index++];
            t = this.source[this.index];
          }
          if ('.' === t) {
            for (
              n += this.source[this.index++];
              ct.isDecimalDigit(this.source.charCodeAt(this.index));

            )
              n += this.source[this.index++];
            t = this.source[this.index];
          }
          if ('e' === t || 'E' === t)
            if (
              ((n += this.source[this.index++]),
              (t = this.source[this.index]),
              ('+' !== t && '-' !== t) || (n += this.source[this.index++]),
              ct.isDecimalDigit(this.source.charCodeAt(this.index)))
            )
              for (; ct.isDecimalDigit(this.source.charCodeAt(this.index)); )
                n += this.source[this.index++];
            else this.throwUnexpectedToken();
          return (
            ct.isIdentifierStart(this.source.charCodeAt(this.index)) &&
              this.throwUnexpectedToken(),
            {
              type: ht.NumericLiteral,
              value: parseFloat(n),
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index,
            }
          );
        }
        _scanStringLiteral() {
          const e = this.index;
          let t = this.source[e];
          Fe("'" === t || '"' === t, 'String literal must starts with a quote'),
            ++this.index;
          let n = !1,
            r = '';
          for (; !this.eof(); ) {
            let e = this.source[this.index++];
            if (e === t) {
              t = '';
              break;
            }
            if ('\\' === e)
              if (
                ((e = this.source[this.index++]),
                e && ct.isLineTerminator(e.charCodeAt(0)))
              )
                ++this.lineNumber,
                  '\r' === e &&
                    '\n' === this.source[this.index] &&
                    ++this.index,
                  (this.lineStart = this.index);
              else
                switch (e) {
                  case 'u':
                    if ('{' === this.source[this.index])
                      ++this.index, (r += this._scanUnicodeCodePointEscape());
                    else {
                      const t = this._scanHexEscape(e);
                      null === t && this.throwUnexpectedToken(), (r += t);
                    }
                    break;
                  case 'x': {
                    const t = this._scanHexEscape(e);
                    null === t && this.throwUnexpectedToken(Se), (r += t);
                    break;
                  }
                  case 'n':
                    r += '\n';
                    break;
                  case 'r':
                    r += '\r';
                    break;
                  case 't':
                    r += '\t';
                    break;
                  case 'b':
                    r += '\b';
                    break;
                  case 'f':
                    r += '\f';
                    break;
                  case 'v':
                    r += '\v';
                    break;
                  case '8':
                  case '9':
                    (r += e), this._tolerateUnexpectedToken();
                    break;
                  default:
                    if (e && ct.isOctalDigit(e.charCodeAt(0))) {
                      const t = this._octalToDecimal(e);
                      (n = t.octal || n), (r += String.fromCharCode(t.code));
                    } else r += e;
                }
            else {
              if (ct.isLineTerminator(e.charCodeAt(0))) break;
              r += e;
            }
          }
          return (
            '' !== t && ((this.index = e), this.throwUnexpectedToken()),
            {
              type: ht.StringLiteral,
              value: r,
              octal: n,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: e,
              end: this.index,
            }
          );
        }
        _scanTemplate() {
          let e = '',
            t = !1;
          const n = this.index,
            r = '`' === this.source[n];
          let i = !1,
            s = 2;
          for (++this.index; !this.eof(); ) {
            let n = this.source[this.index++];
            if ('`' === n) {
              (s = 1), (i = !0), (t = !0);
              break;
            }
            if ('$' === n) {
              if ('{' === this.source[this.index]) {
                this.curlyStack.push('${'), ++this.index, (t = !0);
                break;
              }
              e += n;
            } else if ('\\' === n)
              if (
                ((n = this.source[this.index++]),
                ct.isLineTerminator(n.charCodeAt(0)))
              )
                ++this.lineNumber,
                  '\r' === n &&
                    '\n' === this.source[this.index] &&
                    ++this.index,
                  (this.lineStart = this.index);
              else
                switch (n) {
                  case 'n':
                    e += '\n';
                    break;
                  case 'r':
                    e += '\r';
                    break;
                  case 't':
                    e += '\t';
                    break;
                  case 'u':
                    if ('{' === this.source[this.index])
                      ++this.index, (e += this._scanUnicodeCodePointEscape());
                    else {
                      const t = this.index,
                        r = this._scanHexEscape(n);
                      null !== r ? (e += r) : ((this.index = t), (e += n));
                    }
                    break;
                  case 'x': {
                    const t = this._scanHexEscape(n);
                    null === t && this.throwUnexpectedToken(Se), (e += t);
                    break;
                  }
                  case 'b':
                    e += '\b';
                    break;
                  case 'f':
                    e += '\f';
                    break;
                  case 'v':
                    e += '\v';
                    break;
                  default:
                    '0' === n
                      ? (ct.isDecimalDigit(
                          this.source.charCodeAt(this.index),
                        ) && this.throwUnexpectedToken(Ie),
                        (e += '\0'))
                      : ct.isOctalDigit(n.charCodeAt(0))
                      ? this.throwUnexpectedToken(Ie)
                      : (e += n);
                }
            else
              ct.isLineTerminator(n.charCodeAt(0))
                ? (++this.lineNumber,
                  '\r' === n &&
                    '\n' === this.source[this.index] &&
                    ++this.index,
                  (this.lineStart = this.index),
                  (e += '\n'))
                : (e += n);
          }
          return (
            t || this.throwUnexpectedToken(),
            r || this.curlyStack.pop(),
            {
              type: ht.Template,
              value: this.source.slice(n + 1, this.index - s),
              cooked: e,
              head: r,
              tail: i,
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: n,
              end: this.index,
            }
          );
        }
        _testRegExp(e, t) {
          let n = e;
          t.indexOf('u') >= 0 &&
            (n = n
              .replace(
                /\\u\{([0-9a-fA-F]+)\}|\\u([a-fA-F0-9]{4})/g,
                (e, t, n) => {
                  const r = parseInt(t || n, 16);
                  return (
                    r > 1114111 && this.throwUnexpectedToken(ve),
                    r <= 65535 ? String.fromCharCode(r) : '￿'
                  );
                },
              )
              .replace(/[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '￿'));
          try {
            RegExp(n);
          } catch (e) {
            this.throwUnexpectedToken(ve);
          }
          try {
            return new RegExp(e, t);
          } catch (e) {
            return null;
          }
        }
        _scanRegExpBody() {
          let e = this.source[this.index];
          Fe('/' === e, 'Regular expression literal must start with a slash');
          let t = this.source[this.index++],
            n = !1,
            r = !1;
          for (; !this.eof(); )
            if (((e = this.source[this.index++]), (t += e), '\\' === e))
              (e = this.source[this.index++]),
                ct.isLineTerminator(e.charCodeAt(0)) &&
                  this.throwUnexpectedToken(ke),
                (t += e);
            else if (ct.isLineTerminator(e.charCodeAt(0)))
              this.throwUnexpectedToken(ke);
            else if (n) ']' === e && (n = !1);
            else {
              if ('/' === e) {
                r = !0;
                break;
              }
              '[' === e && (n = !0);
            }
          return r || this.throwUnexpectedToken(ke), t.substr(1, t.length - 2);
        }
        _scanRegExpFlags() {
          let e = '',
            t = '';
          for (; !this.eof(); ) {
            let n = this.source[this.index];
            if (!ct.isIdentifierPart(n.charCodeAt(0))) break;
            if ((++this.index, '\\' !== n || this.eof())) (t += n), (e += n);
            else if (((n = this.source[this.index]), 'u' === n)) {
              ++this.index;
              let n = this.index;
              const r = this._scanHexEscape('u');
              if (null !== r)
                for (t += r, e += '\\u'; n < this.index; ++n)
                  e += this.source[n];
              else (this.index = n), (t += 'u'), (e += '\\u');
              this._tolerateUnexpectedToken();
            } else (e += '\\'), this._tolerateUnexpectedToken();
          }
          return t;
        }
        scanRegExp() {
          const e = this.index,
            t = this._scanRegExpBody(),
            n = this._scanRegExpFlags(),
            r = this._testRegExp(t, n);
          return {
            type: ht.RegularExpression,
            value: '',
            pattern: t,
            flags: n,
            regex: r,
            lineNumber: this.lineNumber,
            lineStart: this.lineStart,
            start: e,
            end: this.index,
          };
        }
        lex() {
          if (this.eof())
            return {
              type: ht.EOF,
              value: '',
              lineNumber: this.lineNumber,
              lineStart: this.lineStart,
              start: this.index,
              end: this.index,
            };
          const e = this.source.charCodeAt(this.index);
          return ct.isIdentifierStart(e)
            ? this._scanIdentifier()
            : 40 === e || 41 === e || 59 === e
            ? this._scanPunctuator()
            : 39 === e || 34 === e
            ? this._scanStringLiteral()
            : 46 === e
            ? ct.isDecimalDigit(this.source.charCodeAt(this.index + 1))
              ? this._scanNumericLiteral()
              : this._scanPunctuator()
            : ct.isDecimalDigit(e)
            ? this._scanNumericLiteral()
            : 96 === e ||
              (125 === e &&
                '${' === this.curlyStack[this.curlyStack.length - 1])
            ? this._scanTemplate()
            : e >= 55296 &&
              e < 57343 &&
              ct.isIdentifierStart(this._codePointAt(this.index))
            ? this._scanIdentifier()
            : this._scanPunctuator();
        }
      }
      class gt {
        constructor(e, t = {}, n) {
          (this.config = {
            range: 'boolean' == typeof t.range && t.range,
            loc: 'boolean' == typeof t.loc && t.loc,
            source: null,
            tokens: 'boolean' == typeof t.tokens && t.tokens,
            comment: 'boolean' == typeof t.comment && t.comment,
            tolerant: 'boolean' == typeof t.tolerant && t.tolerant,
            globalReturn: !!t.globalReturn,
          }),
            this.config.loc &&
              t.source &&
              null !== t.source &&
              (this.config.source = String(t.source)),
            (this.delegate = n),
            (this.errorHandler = new be()),
            (this.errorHandler.tolerant = this.config.tolerant),
            (this.scanner = new Dt(e, this.errorHandler)),
            (this.scanner.trackComment = this.config.comment),
            (this.operatorPrecedence = {
              ')': 0,
              ';': 0,
              ',': 0,
              '=': 0,
              ']': 0,
              '||': 1,
              '&&': 2,
              '|': 3,
              '^': 4,
              '&': 5,
              '==': 6,
              '!=': 6,
              '===': 6,
              '!==': 6,
              '<': 7,
              '>': 7,
              '<=': 7,
              '>=': 7,
              '<<': 8,
              '>>': 8,
              '>>>': 8,
              '+': 9,
              '-': 9,
              '*': 11,
              '/': 11,
              '%': 11,
            }),
            (this.lookahead = {
              type: ht.EOF,
              value: '',
              lineNumber: this.scanner.lineNumber,
              lineStart: 0,
              start: 0,
              end: 0,
            }),
            (this.hasLineTerminator = !1),
            (this.context = {
              allowIn: !0,
              firstCoverInitializedNameError: null,
              isAssignmentTarget: !1,
              isBindingElement: !1,
              inFunctionBody: !1,
              inIteration: !1,
              curlyParsing: 'asObject',
            }),
            (this.tokens = []),
            (this.startMarker = {
              index: 0,
              line: this.scanner.lineNumber,
              column: 0,
            }),
            (this.lastMarker = {
              index: 0,
              line: this.scanner.lineNumber,
              column: 0,
            }),
            this.nextToken(),
            (this.lastMarker = {
              index: this.scanner.index,
              line: this.scanner.lineNumber,
              column: this.scanner.index - this.scanner.lineStart,
            });
        }
        tolerateError(e, ...t) {
          const n = t.slice(),
            r = e.replace(
              /%(\d)/g,
              (e, t) => (
                Fe(t < n.length, 'Message reference must be in range'), n[t]
              ),
            ),
            i = this.lastMarker.index,
            s = this.scanner.lineNumber,
            o = this.lastMarker.column + 1;
          this.errorHandler.tolerateError(i, s, o, r);
        }
        unexpectedTokenError(e, t) {
          let n,
            r = t || Te;
          if (
            (e
              ? (t ||
                  (r =
                    e.type === ht.EOF
                      ? 'Unexpected end of input'
                      : e.type === ht.Identifier
                      ? 'Unexpected identifier'
                      : e.type === ht.NumericLiteral
                      ? 'Unexpected number'
                      : e.type === ht.StringLiteral
                      ? 'Unexpected string'
                      : e.type === ht.Template
                      ? 'Unexpected quasi %0'
                      : Te),
                (n = e.value.toString()))
              : (n = 'ILLEGAL'),
            (r = r.replace('%0', n)),
            e && 'number' == typeof e.lineNumber)
          ) {
            const t = e.start,
              n = e.lineNumber,
              i = this.lastMarker.index - this.lastMarker.column,
              s = e.start - i + 1;
            return this.errorHandler.createError(t, n, s, r);
          }
          const i = this.lastMarker.index,
            s = this.lastMarker.line,
            o = this.lastMarker.column + 1;
          return this.errorHandler.createError(i, s, o, r);
        }
        throwUnexpectedToken(e, t) {
          throw this.unexpectedTokenError(e, t);
        }
        tolerateUnexpectedToken(e, t) {
          this.errorHandler.tolerate(this.unexpectedTokenError(e, t));
        }
        collectComments() {
          if (this.config.comment) {
            const e = this.scanner.scanComments();
            if (e && e.length > 0 && this.delegate)
              for (let t = 0; t < e.length; ++t) {
                const n = e[t],
                  r = new _e(
                    n.multiLine ? 'Block' : 'Line',
                    this.scanner.source.slice(n.slice[0], n.slice[1]),
                  );
                this.config.range && (r.range = n.range),
                  this.config.loc && (r.loc = n.loc);
                const i = {
                  start: {
                    line: n.loc.start.line,
                    column: n.loc.start.column,
                    offset: n.range[0],
                  },
                  end: {
                    line: n.loc.end.line,
                    column: n.loc.end.column,
                    offset: n.range[1],
                  },
                };
                this.delegate(r, i);
              }
          } else this.scanner.scanComments();
        }
        peekAhead(e) {
          const t = this.scanner.saveState();
          e.call(this, () => (this.scanner.scanComments(), this.scanner.lex())),
            this.scanner.restoreState(t);
        }
        getTokenRaw(e) {
          return this.scanner.source.slice(e.start, e.end);
        }
        convertToken(e) {
          const t = { type: pt[e.type], value: this.getTokenRaw(e) };
          if (
            (this.config.range && (t.range = [e.start, e.end]),
            this.config.loc &&
              (t.loc = {
                start: {
                  line: this.startMarker.line,
                  column: this.startMarker.column,
                },
                end: {
                  line: this.scanner.lineNumber,
                  column: this.scanner.index - this.scanner.lineStart,
                },
              }),
            e.type === ht.RegularExpression)
          ) {
            const n = e.pattern,
              r = e.flags;
            t.regex = { pattern: n, flags: r };
          }
          return t;
        }
        nextToken() {
          const e = this.lookahead;
          (this.lastMarker.index = this.scanner.index),
            (this.lastMarker.line = this.scanner.lineNumber),
            (this.lastMarker.column =
              this.scanner.index - this.scanner.lineStart),
            this.collectComments(),
            this.scanner.index !== this.startMarker.index &&
              ((this.startMarker.index = this.scanner.index),
              (this.startMarker.line = this.scanner.lineNumber),
              (this.startMarker.column =
                this.scanner.index - this.scanner.lineStart));
          const t = this.scanner.lex();
          return (
            (this.hasLineTerminator = e.lineNumber !== t.lineNumber),
            (this.lookahead = t),
            this.config.tokens &&
              t.type !== ht.EOF &&
              this.tokens.push(this.convertToken(t)),
            e
          );
        }
        createNode() {
          return {
            index: this.startMarker.index,
            line: this.startMarker.line,
            column: this.startMarker.column,
          };
        }
        startNode(e, t = 0) {
          let n = e.start - e.lineStart,
            r = e.lineNumber;
          return (
            n < 0 && ((n += t), r--), { index: e.start, line: r, column: n }
          );
        }
        finalize(e, t) {
          if (
            (this.config.range && (t.range = [e.index, this.lastMarker.index]),
            this.config.loc &&
              ((t.loc = {
                start: { line: e.line, column: e.column },
                end: {
                  line: this.lastMarker.line,
                  column: this.lastMarker.column,
                },
              }),
              this.config.source && (t.loc.source = this.config.source)),
            this.delegate)
          ) {
            const n = {
              start: { line: e.line, column: e.column, offset: e.index },
              end: {
                line: this.lastMarker.line,
                column: this.lastMarker.column,
                offset: this.lastMarker.index,
              },
            };
            this.delegate(t, n);
          }
          return t;
        }
        expect(e) {
          const t = this.nextToken();
          (t.type === ht.Punctuator && t.value === e) ||
            this.throwUnexpectedToken(t);
        }
        expectCommaSeparator() {
          if (this.config.tolerant) {
            const e = this.lookahead;
            e.type === ht.Punctuator && ',' === e.value
              ? this.nextToken()
              : e.type === ht.Punctuator && ';' === e.value
              ? (this.nextToken(), this.tolerateUnexpectedToken(e))
              : this.tolerateUnexpectedToken(e, Te);
          } else this.expect(',');
        }
        expectKeyword(e) {
          const t = this.nextToken();
          (t.type === ht.Keyword &&
            t.value.toString().toLowerCase() === e.toLowerCase()) ||
            this.throwUnexpectedToken(t);
        }
        match(e) {
          return (
            this.lookahead.type === ht.Punctuator && this.lookahead.value === e
          );
        }
        matchKeyword(e) {
          return (
            this.lookahead.type === ht.Keyword &&
            this.lookahead.value.toLowerCase() === e.toLowerCase()
          );
        }
        matchContextualKeyword(e) {
          return (
            this.lookahead.type === ht.Identifier && this.lookahead.value === e
          );
        }
        matchAssign() {
          if (this.lookahead.type !== ht.Punctuator) return !1;
          const e = this.lookahead.value;
          return Re.includes(e);
        }
        isolateCoverGrammar(e) {
          const t = this.context.isBindingElement,
            n = this.context.isAssignmentTarget,
            r = this.context.firstCoverInitializedNameError;
          (this.context.isBindingElement = !0),
            (this.context.isAssignmentTarget = !0),
            (this.context.firstCoverInitializedNameError = null);
          const i = e.call(this);
          return (
            null !== this.context.firstCoverInitializedNameError &&
              this.throwUnexpectedToken(
                this.context.firstCoverInitializedNameError,
              ),
            (this.context.isBindingElement = t),
            (this.context.isAssignmentTarget = n),
            (this.context.firstCoverInitializedNameError = r),
            i
          );
        }
        inheritCoverGrammar(e) {
          const t = this.context.isBindingElement,
            n = this.context.isAssignmentTarget,
            r = this.context.firstCoverInitializedNameError;
          (this.context.isBindingElement = !0),
            (this.context.isAssignmentTarget = !0),
            (this.context.firstCoverInitializedNameError = null);
          const i = e.call(this);
          return (
            (this.context.isBindingElement =
              this.context.isBindingElement && t),
            (this.context.isAssignmentTarget =
              this.context.isAssignmentTarget && n),
            (this.context.firstCoverInitializedNameError =
              r || this.context.firstCoverInitializedNameError),
            i
          );
        }
        consumeSemicolon() {
          this.match(';')
            ? this.nextToken()
            : this.hasLineTerminator ||
              (this.lookahead.type === ht.EOF ||
                this.match('}') ||
                this.throwUnexpectedToken(this.lookahead),
              (this.lastMarker.index = this.startMarker.index),
              (this.lastMarker.line = this.startMarker.line),
              (this.lastMarker.column = this.startMarker.column));
        }
        parsePrimaryExpression() {
          const e = this.createNode();
          let t, n, r;
          switch (this.lookahead.type) {
            case ht.Identifier:
              t = this.finalize(e, new We(this.nextToken().value));
              break;
            case ht.NumericLiteral:
            case ht.StringLiteral:
              (this.context.isAssignmentTarget = !1),
                (this.context.isBindingElement = !1),
                (n = this.nextToken()),
                (r = this.getTokenRaw(n)),
                (t = this.finalize(e, new $e(n.value, r)));
              break;
            case ht.BooleanLiteral:
              (this.context.isAssignmentTarget = !1),
                (this.context.isBindingElement = !1),
                (n = this.nextToken()),
                (r = this.getTokenRaw(n)),
                (t = this.finalize(
                  e,
                  new $e('true' === n.value.toString().toLowerCase(), r),
                ));
              break;
            case ht.NullLiteral:
              (this.context.isAssignmentTarget = !1),
                (this.context.isBindingElement = !1),
                (n = this.nextToken()),
                (r = this.getTokenRaw(n)),
                (t = this.finalize(e, new $e(null, r)));
              break;
            case ht.Template:
              t = this.parseTemplateLiteral();
              break;
            case ht.Punctuator:
              switch (this.lookahead.value) {
                case '(':
                  (this.context.isBindingElement = !1),
                    (t = this.inheritCoverGrammar(this.parseGroupExpression));
                  break;
                case '[':
                  t = this.inheritCoverGrammar(this.parseArrayInitializer);
                  break;
                case '{':
                  t = this.inheritCoverGrammar(this.parseObjectInitializer);
                  break;
                default:
                  t = this.throwUnexpectedToken(this.nextToken());
              }
              break;
            case ht.Keyword:
              (this.context.isAssignmentTarget = !1),
                (this.context.isBindingElement = !1),
                (t = this.throwUnexpectedToken(this.nextToken()));
              break;
            default:
              t = this.throwUnexpectedToken(this.nextToken());
          }
          return t;
        }
        parseArrayInitializer() {
          const e = this.createNode(),
            t = [];
          for (this.expect('['); !this.match(']'); )
            this.match(',')
              ? (this.nextToken(), t.push(null))
              : (t.push(
                  this.inheritCoverGrammar(this.parseAssignmentExpression),
                ),
                this.match(']') || this.expect(','));
          return this.expect(']'), this.finalize(e, new Oe(t));
        }
        parseObjectPropertyKey() {
          const e = this.createNode(),
            t = this.nextToken();
          let n;
          switch (t.type) {
            case ht.StringLiteral:
            case ht.NumericLiteral:
              n = this.finalize(e, new $e(t.value, this.getTokenRaw(t)));
              break;
            case ht.Identifier:
            case ht.BooleanLiteral:
            case ht.NullLiteral:
            case ht.Keyword:
              n = this.finalize(e, new We(t.value));
              break;
            default:
              n = this.throwUnexpectedToken(t);
          }
          return n;
        }
        parseObjectProperty() {
          const e = this.createNode(),
            t = this.lookahead;
          let n = !1,
            r = !1,
            i = null;
          if (t.type === ht.Identifier) {
            const r = t.value;
            this.nextToken(),
              (n = this.match('[')),
              (i = this.finalize(e, new We(r)));
          } else
            this.match('*')
              ? this.nextToken()
              : ((n = this.match('[')), (i = this.parseObjectPropertyKey()));
          i || this.throwUnexpectedToken(this.lookahead);
          let s = null;
          return (
            this.match(':')
              ? (this.nextToken(),
                (s = this.inheritCoverGrammar(this.parseAssignmentExpression)))
              : t.type === ht.Identifier
              ? ((r = !0), (s = this.finalize(e, new We(t.value))))
              : this.throwUnexpectedToken(this.nextToken()),
            this.finalize(e, new et('init', i, n, s, !1, r))
          );
        }
        parseObjectInitializer() {
          const e = this.createNode();
          this.expect('{');
          const t = [];
          for (; !this.match('}'); )
            t.push(this.parseObjectProperty()),
              this.match('}') || this.expectCommaSeparator();
          return this.expect('}'), this.finalize(e, new Qe(t));
        }
        parseTemplateHead() {
          Fe(
            this.lookahead.head,
            'Template literal must start with a template head',
          );
          const e = this.createNode(),
            t = this.nextToken(),
            n = t.value,
            r = t.cooked;
          return this.finalize(e, new rt({ raw: n, cooked: r }, t.tail));
        }
        parseTemplateElement() {
          this.lookahead.type !== ht.Template && this.throwUnexpectedToken();
          const e = this.createNode(),
            t = this.nextToken(),
            n = t.value,
            r = t.cooked;
          return this.finalize(e, new rt({ raw: n, cooked: r }, t.tail));
        }
        parseTemplateLiteral() {
          const e = this.createNode(),
            t = [],
            n = [];
          let r = this.parseTemplateHead();
          for (n.push(r); !r.tail; )
            t.push(this.parseExpression()),
              (r = this.parseTemplateElement()),
              n.push(r);
          return this.finalize(e, new it(n, t));
        }
        parseGroupExpression() {
          this.expect('('), (this.context.isBindingElement = !0);
          const e = this.inheritCoverGrammar(this.parseAssignmentExpression);
          return this.expect(')'), (this.context.isBindingElement = !1), e;
        }
        parseArguments() {
          this.expect('(');
          const e = [];
          if (!this.match(')'))
            for (;;) {
              const t = this.isolateCoverGrammar(
                this.parseAssignmentExpression,
              );
              if ((e.push(t), this.match(')'))) break;
              if ((this.expectCommaSeparator(), this.match(')'))) break;
            }
          return this.expect(')'), e;
        }
        isIdentifierName(e) {
          return (
            e.type === ht.Identifier ||
            e.type === ht.Keyword ||
            e.type === ht.BooleanLiteral ||
            e.type === ht.NullLiteral
          );
        }
        parseIdentifierName() {
          const e = this.createNode(),
            t = this.nextToken();
          return (
            this.isIdentifierName(t) || this.throwUnexpectedToken(t),
            this.finalize(e, new We(t.value))
          );
        }
        parseLeftHandSideExpressionAllowCall() {
          const e = this.lookahead,
            t = this.context.allowIn;
          this.context.allowIn = !0;
          let n = this.inheritCoverGrammar(this.parsePrimaryExpression);
          for (;;)
            if (this.match('(')) {
              (this.context.isBindingElement = !1),
                (this.context.isAssignmentTarget = !1);
              const t = this.parseArguments();
              n = this.finalize(this.startNode(e), new ze(n, t));
            } else if (this.match('[')) {
              (this.context.isBindingElement = !1),
                (this.context.isAssignmentTarget = !0),
                this.expect('[');
              const t = this.isolateCoverGrammar(this.parseExpression);
              this.expect(']'),
                (n = this.finalize(this.startNode(e), new Ge(n, t)));
            } else {
              if (!this.match('.')) break;
              {
                (this.context.isBindingElement = !1),
                  (this.context.isAssignmentTarget = !0),
                  this.expect('.');
                const t = this.parseIdentifierName();
                n = this.finalize(this.startNode(e), new He(n, t));
              }
            }
          return (this.context.allowIn = t), n;
        }
        parseLeftHandSideExpression() {
          Fe(
            this.context.allowIn,
            'callee of new expression always allow in keyword.',
          );
          const e = this.startNode(this.lookahead);
          let t = this.inheritCoverGrammar(this.parsePrimaryExpression);
          for (;;)
            if (this.match('[')) {
              (this.context.isBindingElement = !1),
                (this.context.isAssignmentTarget = !0),
                this.expect('[');
              const n = this.isolateCoverGrammar(this.parseExpression);
              this.expect(']'), (t = this.finalize(e, new Ge(t, n)));
            } else {
              if (!this.match('.')) break;
              {
                (this.context.isBindingElement = !1),
                  (this.context.isAssignmentTarget = !0),
                  this.expect('.');
                const n = this.parseIdentifierName();
                t = this.finalize(e, new He(t, n));
              }
            }
          return t;
        }
        parseUpdateExpression() {
          let e;
          const t = this.lookahead;
          if (this.match('++') || this.match('--')) {
            const n = this.startNode(t),
              r = this.nextToken();
            (e = this.inheritCoverGrammar(this.parseUnaryExpression)),
              this.context.isAssignmentTarget || this.tolerateError(Ne);
            const i = !0;
            (e = this.finalize(n, new ot(r.value, e, i))),
              (this.context.isAssignmentTarget = !1),
              (this.context.isBindingElement = !1);
          } else if (
            ((e = this.inheritCoverGrammar(
              this.parseLeftHandSideExpressionAllowCall,
            )),
            !this.hasLineTerminator &&
              this.lookahead.type === ht.Punctuator &&
              (this.match('++') || this.match('--')))
          ) {
            this.context.isAssignmentTarget || this.tolerateError(Ne),
              (this.context.isAssignmentTarget = !1),
              (this.context.isBindingElement = !1);
            const n = this.nextToken().value,
              r = !1;
            e = this.finalize(this.startNode(t), new ot(n, e, r));
          }
          return e;
        }
        parseUnaryExpression() {
          let e;
          if (
            this.match('+') ||
            this.match('-') ||
            this.match('~') ||
            this.match('!')
          ) {
            const t = this.startNode(this.lookahead),
              n = this.nextToken();
            (e = this.inheritCoverGrammar(this.parseUnaryExpression)),
              (e = this.finalize(t, new st(n.value, e))),
              (this.context.isAssignmentTarget = !1),
              (this.context.isBindingElement = !1);
          } else e = this.parseUpdateExpression();
          return e;
        }
        binaryPrecedence(e) {
          const t = e.value;
          let n;
          return (
            (n =
              e.type === ht.Punctuator
                ? this.operatorPrecedence[t] || 0
                : e.type === ht.Keyword && this.context.allowIn && 'in' === t
                ? 12
                : 0),
            n
          );
        }
        parseBinaryExpression() {
          const e = this.lookahead;
          let t = this.inheritCoverGrammar(this.parseUnaryExpression);
          const n = this.lookahead;
          let r = this.binaryPrecedence(n);
          if (r > 0) {
            this.nextToken(),
              (this.context.isAssignmentTarget = !1),
              (this.context.isBindingElement = !1);
            const i = [e, this.lookahead];
            let s = t,
              o = this.inheritCoverGrammar(this.parseUnaryExpression);
            const a = [s, n.value, o],
              u = [r];
            for (; (r = this.binaryPrecedence(this.lookahead)), !(r <= 0); ) {
              for (; a.length > 2 && r <= u[u.length - 1]; ) {
                o = a.pop();
                const e = a.pop();
                u.pop(), (s = a.pop()), i.pop();
                const t = i[i.length - 1],
                  n = this.startNode(t, t.lineStart);
                a.push(this.finalize(n, new Ue(e, s, o)));
              }
              a.push(this.nextToken().value),
                u.push(r),
                i.push(this.lookahead),
                a.push(this.inheritCoverGrammar(this.parseUnaryExpression));
            }
            let l = a.length - 1;
            t = a[l];
            let c = i.pop();
            for (; l > 1; ) {
              const e = i.pop();
              if (!e) break;
              const n = c && c.lineStart,
                r = this.startNode(e, n),
                s = a[l - 1];
              (t = this.finalize(r, new Ue(s, a[l - 2], t))), (l -= 2), (c = e);
            }
          }
          return t;
        }
        parseAssignmentExpression() {
          const e = this.lookahead;
          let t = e,
            n = this.inheritCoverGrammar(this.parseBinaryExpression);
          if (this.matchAssign()) {
            this.context.isAssignmentTarget || this.tolerateError(Ne),
              this.match('=') ||
                ((this.context.isAssignmentTarget = !1),
                (this.context.isBindingElement = !1)),
              (t = this.nextToken());
            const r = t.value,
              i = this.isolateCoverGrammar(this.parseAssignmentExpression);
            (n = this.finalize(this.startNode(e), new Le(r, n, i))),
              (this.context.firstCoverInitializedNameError = null);
          }
          return n;
        }
        parseExpression() {
          return this.isolateCoverGrammar(this.parseAssignmentExpression);
        }
        parseStatementListItem() {
          let e;
          return (
            (this.context.isAssignmentTarget = !0),
            (this.context.isBindingElement = !0),
            (e =
              this.lookahead.type === ht.Keyword &&
              'function' === this.lookahead.value
                ? this.parseFunctionDeclaration()
                : this.parseStatement()),
            e
          );
        }
        parseBlock() {
          const e = this.createNode();
          this.expect('{');
          const t = [];
          for (; !this.match('}'); ) t.push(this.parseStatementListItem());
          return this.expect('}'), this.finalize(e, new Ze(t));
        }
        parseObjectStatement() {
          const e = this.createNode(),
            t = this.parseObjectInitializer();
          return this.finalize(e, new Ye(t));
        }
        parseBlockOrObjectStatement() {
          let e = 'asObject' === this.context.curlyParsing;
          return (
            'asObjectOrBlock' === this.context.curlyParsing &&
              this.peekAhead((t) => {
                let n = t();
                (n.type !== ht.Identifier && n.type !== ht.StringLiteral) ||
                  ((n = t()),
                  n.type === ht.Punctuator && ':' === n.value && (e = !0));
              }),
            e ? this.parseObjectStatement() : this.parseBlock()
          );
        }
        parseVariableIdentifier() {
          const e = this.createNode(),
            t = this.nextToken();
          return (
            t.type !== ht.Identifier &&
              this.throwUnexpectedToken(t, 'Identifier expected'),
            this.finalize(e, new We(t.value))
          );
        }
        parseVariableDeclaration(e) {
          const t = this.createNode(),
            n = this.parseVariableIdentifier();
          let r = null;
          return (
            this.match('=')
              ? (this.nextToken(),
                (r = this.isolateCoverGrammar(this.parseAssignmentExpression)))
              : n.type === Ae || e.inFor || this.expect('='),
            this.finalize(t, new ut(n, r))
          );
        }
        parseVariableDeclarationList(e) {
          const t = [this.parseVariableDeclaration(e)];
          for (; this.match(','); )
            this.nextToken(), t.push(this.parseVariableDeclaration(e));
          return t;
        }
        parseVariableStatement() {
          const e = this.createNode();
          this.expectKeyword('var');
          const t = this.parseVariableDeclarationList({ inFor: !1 });
          return this.consumeSemicolon(), this.finalize(e, new at(t, 'var'));
        }
        parseEmptyStatement() {
          const e = this.createNode();
          return this.expect(';'), this.finalize(e, new Ve());
        }
        parseExpressionStatement() {
          const e = this.createNode(),
            t = this.parseExpression();
          return this.consumeSemicolon(), this.finalize(e, new Ye(t));
        }
        parseIfClause() {
          const e = this.context.curlyParsing;
          this.context.curlyParsing = 'asObjectOrBlock';
          const t = this.parseStatement();
          return (this.context.curlyParsing = e), t;
        }
        parseIfStatement() {
          const e = this.createNode();
          let t,
            n = null;
          this.expectKeyword('if'), this.expect('(');
          const r = this.parseExpression();
          return (
            !this.match(')') && this.config.tolerant
              ? (this.tolerateUnexpectedToken(this.nextToken()),
                (t = this.finalize(this.createNode(), new Ve())))
              : (this.expect(')'),
                (t = this.parseIfClause()),
                this.matchKeyword('else') &&
                  (this.nextToken(), (n = this.parseIfClause()))),
            this.finalize(e, new Ke(r, t, n))
          );
        }
        parseForStatement() {
          let e = null,
            t = null,
            n = null,
            r = null,
            i = null;
          const s = this.createNode();
          if ((this.expectKeyword('for'), this.expect('('), this.match(';')))
            this.nextToken();
          else if (this.matchKeyword('var')) {
            const t = this.createNode();
            this.nextToken();
            const n = this.context.allowIn;
            this.context.allowIn = !1;
            const s = this.parseVariableDeclarationList({ inFor: !0 });
            (this.context.allowIn = n),
              1 === s.length && this.matchKeyword('in')
                ? (s[0].init &&
                    this.tolerateError(
                      '%0 loop variable declaration may not have an initializer',
                      'for-in',
                    ),
                  (r = this.finalize(t, new at(s, 'var'))),
                  this.nextToken(),
                  (i = this.parseExpression()))
                : ((e = this.finalize(t, new at(s, 'var'))), this.expect(';'));
          } else {
            const t = this.context.isBindingElement,
              n = this.context.isAssignmentTarget,
              s = this.context.firstCoverInitializedNameError,
              o = this.context.allowIn;
            (this.context.allowIn = !1),
              (e = this.inheritCoverGrammar(this.parseAssignmentExpression)),
              (this.context.allowIn = o),
              this.matchKeyword('in')
                ? ((this.context.isAssignmentTarget && e.type !== ye) ||
                    this.tolerateError('Invalid left-hand side in for-in'),
                  this.nextToken(),
                  (r = e),
                  (i = this.parseExpression()),
                  (e = null))
                : ((this.context.isBindingElement = t),
                  (this.context.isAssignmentTarget = n),
                  (this.context.firstCoverInitializedNameError = s),
                  this.expect(';'));
          }
          let o;
          if (
            (r ||
              (this.match(';') ||
                (t = this.isolateCoverGrammar(this.parseExpression)),
              this.expect(';'),
              this.match(')') ||
                (n = this.isolateCoverGrammar(this.parseExpression))),
            !this.match(')') && this.config.tolerant)
          )
            this.tolerateUnexpectedToken(this.nextToken()),
              (o = this.finalize(this.createNode(), new Ve()));
          else {
            this.expect(')');
            const e = this.context.inIteration,
              t = this.context.curlyParsing;
            (this.context.inIteration = !0),
              (this.context.curlyParsing = 'asObjectOrBlock'),
              (o = this.isolateCoverGrammar(this.parseStatement)),
              (this.context.curlyParsing = t),
              (this.context.inIteration = e);
          }
          return r && i
            ? this.finalize(s, new qe(r, i, o))
            : this.finalize(s, new Je(e, t, n, o));
        }
        parseContinueStatement() {
          const e = this.createNode();
          return (
            this.expectKeyword('continue'),
            this.consumeSemicolon(),
            this.finalize(e, new je())
          );
        }
        parseBreakStatement() {
          const e = this.createNode();
          return (
            this.expectKeyword('break'),
            this.consumeSemicolon(),
            this.finalize(e, new Pe())
          );
        }
        parseReturnStatement() {
          this.config.globalReturn ||
            this.context.inFunctionBody ||
            this.tolerateError('Illegal return statement');
          const e = this.createNode();
          this.expectKeyword('return');
          const t =
            (this.match(';') ||
              this.match('}') ||
              this.hasLineTerminator ||
              this.lookahead.type === ht.EOF) &&
            this.lookahead.type !== ht.StringLiteral &&
            this.lookahead.type !== ht.Template
              ? null
              : this.parseExpression();
          return this.consumeSemicolon(), this.finalize(e, new tt(t));
        }
        parseStatement() {
          let e;
          switch (this.lookahead.type) {
            case ht.BooleanLiteral:
            case ht.NullLiteral:
            case ht.NumericLiteral:
            case ht.StringLiteral:
            case ht.Template:
            case ht.Identifier:
              e = this.parseExpressionStatement();
              break;
            case ht.Punctuator: {
              const t = this.lookahead.value;
              e =
                '{' === t
                  ? this.parseBlockOrObjectStatement()
                  : '(' === t
                  ? this.parseExpressionStatement()
                  : ';' === t
                  ? this.parseEmptyStatement()
                  : this.parseExpressionStatement();
              break;
            }
            case ht.Keyword:
              switch (this.lookahead.value.toLowerCase()) {
                case 'break':
                  e = this.parseBreakStatement();
                  break;
                case 'continue':
                  e = this.parseContinueStatement();
                  break;
                case 'for':
                  e = this.parseForStatement();
                  break;
                case 'function':
                  e = this.parseFunctionDeclaration();
                  break;
                case 'if':
                  e = this.parseIfStatement();
                  break;
                case 'return':
                  e = this.parseReturnStatement();
                  break;
                case 'var':
                  e = this.parseVariableStatement();
                  break;
                default:
                  e = this.parseExpressionStatement();
              }
              break;
            default:
              e = this.throwUnexpectedToken(this.lookahead);
          }
          return e;
        }
        parseFunctionSourceElements() {
          const e = this.createNode();
          this.expect('{');
          const t = this.context.inIteration,
            n = this.context.inFunctionBody;
          (this.context.inIteration = !1), (this.context.inFunctionBody = !0);
          const r = [];
          for (; this.lookahead.type !== ht.EOF && !this.match('}'); )
            r.push(this.parseStatementListItem());
          return (
            this.expect('}'),
            (this.context.inIteration = t),
            (this.context.inFunctionBody = n),
            this.finalize(e, new Ze(r))
          );
        }
        parseFormalParameters() {
          const e = [];
          if ((this.expect('('), !this.match(')')))
            for (
              ;
              this.lookahead.type !== ht.EOF &&
              (e.push(this.parseVariableIdentifier()), !this.match(')')) &&
              (this.expect(','), !this.match(')'));

            );
          return this.expect(')'), e;
        }
        parseFunctionDeclaration() {
          const e = this.createNode();
          this.expectKeyword('function');
          const t = this.parseVariableIdentifier(),
            n = this.parseFormalParameters(),
            r = this.parseFunctionSourceElements();
          return this.finalize(e, new Xe(t, n, r));
        }
        parseScript() {
          const e = this.createNode(),
            t = [];
          for (; this.lookahead.type !== ht.EOF; )
            t.push(this.parseStatementListItem());
          return this.finalize(e, new nt(t));
        }
      }
      function yt(e, t, n) {
        let r = null;
        const i = (e, t) => {
          n && n(e, t), r && r.visit(e, t);
        };
        let s = 'function' == typeof n ? i : void 0,
          o = !1;
        if (t) {
          o = 'boolean' == typeof t.comment && t.comment;
          const e = 'boolean' == typeof t.attachComment && t.attachComment;
          (o || e) &&
            ((r = new we()), (r.attach = e), (t.comment = !0), (s = i));
        }
        const a = new gt(e, t, s),
          u = a.parseScript();
        return (
          o && r && (u.comments = r.comments),
          a.config.tokens && (u.tokens = a.tokens),
          a.config.tolerant && (u.errors = a.errorHandler.errors),
          u
        );
      }
      function Et(e, t = []) {
        const n = yt('function _() { ' + e + '\n}');
        if (null === n.body || void 0 === n.body)
          throw new Error('No formula provided.');
        if (0 === n.body.length) throw new Error('No formula provided.');
        if (0 === n.body.length) throw new Error('No formula provided.');
        if ('BlockStatement' !== n.body[0].body.type)
          throw new Error('Invalid formula content.');
        const r = (0, c.UA)(n);
        if ('' !== r) throw new Error(r);
        return (0, c.dN)(n, t), n;
      }
      var At = n(80442);
      const xt = [
        'feature',
        'angle',
        'bearing',
        'centroid',
        'envelopeintersects',
        'extent',
        'geometry',
        'isselfintersecting',
        'ringisclockwise',
      ];
      let Ct = !1,
        wt = !1,
        Ft = null,
        bt = [];
      function St(e, t) {
        return !0 === t.useAsync || !0 === e.isAsync
          ? (function (e, t) {
              if (null === Ft)
                throw new Error('Async Arcade must be enabled for this script');
              return (0, At.Z)('esri-csp-restrictions')
                ? function (t) {
                    return Ft.executeScript(e, t);
                  }
                : W(e, t, !0);
            })(e, t)
          : (0, At.Z)('esri-csp-restrictions')
          ? function (t) {
              return ge(e, t);
            }
          : W(e, t);
      }
      function Nt(e, t = []) {
        return Et(e, t);
      }
      function vt(e, t) {
        if (!0 === t.useAsync || !0 === e.isAsync) {
          if (null === Ft)
            throw new Error('Async Arcade must be enabled for this script');
          return Ft.executeScript(e, t);
        }
        return ge(e, t);
      }
      function It(e, t) {
        return (function (e, t) {
          return (0, c.bV)(e, t);
        })(e, t);
      }
      function Tt(e) {
        return (t = e), (0, c.Kq)(t);
        var t;
      }
      function kt(e, t = []) {
        return (
          void 0 === e.usesGeometry && (0, c.dN)(e, t), !0 === e.usesGeometry
        );
      }
      let Bt = null;
      function _t() {
        return (
          Bt ||
          ((Bt = (0, y.$6)([
            Promise.all([n.e(5837), n.e(1433)]).then(n.bind(n, 61433)),
            Promise.resolve().then(n.bind(n, 18811)),
          ]).then(([e, t]) => ((wt = !0), t.setGeometryEngine(e), !0))),
          Bt)
        );
      }
      let Ot = null;
      function Rt() {
        return (
          null !== Ot ||
            (Ot = n
              .e(6748)
              .then(n.bind(n, 66748))
              .then((e) => (V([e], 'async'), !0))
              .then(() =>
                Promise.all([n.e(6748), n.e(8828)]).then(n.bind(n, 18828)),
              )
              .then((e) => {
                Ft = e;
                for (const e of bt) Ft.extend(e), V(e, 'async');
                return (bt = null), !0;
              })),
          Ot
        );
      }
      function Lt() {
        return Ct;
      }
      function Mt() {
        return !!Ft;
      }
      function Ut() {
        return wt;
      }
      let Zt = null;
      function Pt() {
        return (
          Zt ||
          ((Zt = Rt().then(() =>
            (0, y.$6)([
              Promise.all([
                n.e(6968),
                n.e(7319),
                n.e(1773),
                n.e(9989),
                n.e(7604),
                n.e(635),
                n.e(1534),
                n.e(5257),
                n.e(8326),
                n.e(7284),
                n.e(9870),
                n.e(9662),
                n.e(8422),
                n.e(9941),
                n.e(8734),
              ]).then(n.bind(n, 42666)),
              Promise.all([
                n.e(6968),
                n.e(7319),
                n.e(1773),
                n.e(9989),
                n.e(7604),
                n.e(635),
                n.e(1534),
                n.e(5257),
                n.e(8326),
                n.e(7284),
                n.e(9870),
                n.e(9662),
                n.e(8422),
                n.e(9941),
                n.e(8734),
                n.e(8758),
              ]).then(n.bind(n, 48758)),
              Promise.all([n.e(1534), n.e(9941), n.e(8927)]).then(
                n.bind(n, 7301),
              ),
              Promise.all([n.e(1534), n.e(9153)]).then(n.bind(n, 59153)),
              n.e(565).then(n.bind(n, 90565)),
            ]).then(
              ([e, t, n, r, i]) => (
                (jt = e),
                Ft.extend([t, n, r, i]),
                V([t, n, r, i], 'async'),
                (Ct = !0),
                !0
              ),
            ),
          )),
          Zt)
        );
      }
      function zt(e, t = []) {
        return (
          void 0 === e.usesFeatureSet && (0, c.dN)(e, t),
          !0 === e.usesFeatureSet
        );
      }
      function Gt(e, t, n = [], r = !1) {
        return (0, y.Ue)((i, s) => {
          const o = 'string' == typeof e ? Nt(e) : e,
            a = [];
          o &&
            (!1 === Ut() && (kt(o) || r) && a.push(_t()),
            !1 === Mt() && (!0 === o.isAsync || t) && a.push(Rt()),
            !1 === Lt() &&
              (zt(o) ||
                (function (e, t) {
                  if (t) {
                    for (const n of t) if (It(e, n)) return !0;
                    return !1;
                  }
                  return !1;
                })(o, n)) &&
              a.push(Pt())),
            a.length
              ? (0, y.$6)(a).then(() => {
                  i(!0);
                }, s)
              : i(!0);
        });
      }
      function Ht(e) {
        if (kt(e)) return !0;
        const t = (0, c.Vf)(e);
        let n = !1;
        for (let e = 0; e < t.length; e++)
          if (xt.indexOf(t[e]) > -1) {
            n = !0;
            break;
          }
        return n;
      }
      let jt = null;
      function Vt() {
        return jt;
      }
      const Yt = Object.freeze({
        __proto__: null,
        compileScript: St,
        extend: function (e) {
          De(e),
            V(e, 'sync'),
            null === Ft ? bt.push(e) : (V(e, 'async'), Ft.extend(e));
        },
        parseScript: Nt,
        validateScript: function (e, t, n = '') {
          return (function (e, t, n) {
            return (0, c.FS)(e, t, n);
          })(e, t, n);
        },
        scriptCheck: function (e, t, n, r = '') {
          return (function (e, t, n, r, i) {
            const s = [],
              o = 'function _() { \n'.length - 1,
              a = 'function _() { \n' + e + '\n}';
            try {
              const e = yt(a, { tolerant: !0, loc: !0, range: !0 }),
                i = e.errors;
              if (i.length > 0)
                for (let e = 0; e < i.length; e++)
                  s.push({
                    line: i[e].lineNumber - 2,
                    character: i[e].column,
                    reason: i[e].description,
                  });
              const u = (0, c.AA)(e, t, n, r, void 0);
              for (let e = 0; e < u.length; e++)
                (u[e].line = u[e].line - 2),
                  u[e].range && (u[e].range = [u[e][0] - o, u[e][1] - o]),
                  u[e].loc &&
                    ((u[e].loc.start.line = u[e].loc.start.line - 2),
                    (u[e].loc.end.line = u[e].loc.end.line - 2)),
                  s.push(u[e]);
            } catch (e) {
              try {
                if ('Unexpected token }' === e.description) {
                  const t = a.split('\n').length;
                  e.lineNumber === t
                    ? ((e.index = a.length - 1),
                      s.push({
                        line: e.lineNumber - 4,
                        character: e.column,
                        reason: 'Unexpected end of script',
                      }))
                    : ((e.index = a.length - 1),
                      s.push({
                        line: e.lineNumber - 2,
                        character: e.column,
                        reason: 'Unexpected end of script',
                      }));
                } else
                  s.push({
                    line: e.lineNumber - 2,
                    character: e.column,
                    reason: e.description,
                  });
              } catch (e) {}
            }
            return s;
          })(e, t, n, r);
        },
        parseAndExecuteScript: function (e, t, n = []) {
          return vt(Et(e, n), t);
        },
        executeScript: vt,
        referencesMember: It,
        referencesFunction: function (e, t) {
          return (function (e, t) {
            return (0, c.w8)(e, t);
          })(e, t);
        },
        extractFieldLiterals: function (e, t = !1) {
          return (n = e), (0, c.mb)(n);
          var n;
        },
        extractExpectedFieldLiterals: Tt,
        scriptUsesGeometryEngine: kt,
        enableGeometrySupport: _t,
        enableAsyncSupport: Rt,
        isFeatureSetSupportEnabled: Lt,
        isAsyncEnabled: Mt,
        isGeometryEnabled: Ut,
        enableFeatureSetSupport: Pt,
        scriptUsesFeatureSet: zt,
        scriptIsAsync: function (e, t = []) {
          return void 0 === e.isAsync && (0, c.dN)(e, t), !0 === e.isAsync;
        },
        loadScriptDependencies: Gt,
        scriptTouchesGeometry: Ht,
        featureSetUtils: Vt,
      });
      var qt = n(22974),
        Jt = n(51706);
      const Xt = /^\$(feature|aggregatedFeatures)\./i,
        Wt = {
          vars: { $feature: 'any', $view: 'any' },
          spatialReference: null,
        };
      function Kt(e) {
        return e.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      }
      function $t(e) {
        if (!e) return null;
        try {
          return Nt(e);
        } catch (e) {}
        return null;
      }
      function Qt(e, t) {
        const n = 'string' == typeof e ? $t(e) : e;
        if (!n) return null;
        try {
          return St(n, (t = t || (0, qt.d9)(Wt)));
        } catch (e) {}
        return null;
      }
      function en(e, t) {
        return {
          vars: {
            $feature: null == e ? new o.Z() : o.Z.createFromGraphic(e),
            $view: t && t.view,
          },
          spatialReference: t && t.sr,
        };
      }
      function tn(e, t, n) {
        return o.Z.createFromGraphicLikeObject(t, e, n);
      }
      function nn(e, t) {
        e.vars.$feature = t;
      }
      function rn(e, t) {
        let n;
        try {
          n = vt(e, t);
        } catch (e) {
          n = null;
        }
        return n;
      }
      function sn(e, t) {
        let n;
        try {
          n = e ? e(t) : null;
        } catch (e) {
          n = null;
        }
        return n;
      }
      function on(e, t) {
        try {
          return e ? e(t) : Promise.resolve(null);
        } catch (e) {
          return Promise.resolve(null);
        }
      }
      function an(e, t) {
        if (!e) return [];
        const n = 'string' == typeof e ? $t(e) : e;
        if (!n) return [];
        const r = Tt(n);
        let i = new Array();
        r.forEach((e) => {
          Xt.test(e) && ((e = e.replace(Xt, '')), i.push(e));
        });
        const s = i.filter((e) => e.includes('*'));
        return (
          (i = i.filter((e) => !s.includes(e))),
          t &&
            s.forEach((e) => {
              const n = new RegExp(
                `^${e.split(/\*+/).map(Kt).join('.*')}$`,
                'i',
              );
              t.forEach((e) => (n.test(e) ? i.push(e) : null));
            }),
          [...new Set(i.sort())]
        );
      }
      function un(e) {
        return It(e, '$view');
      }
      function ln(e, t) {
        return !!e && It(e, t);
      }
      function cn(e) {
        if (
          e &&
          (null != e.spatialReference ||
            (null != e.scale && null != e.viewingMode))
        )
          return {
            view:
              e.viewingMode && null != e.scale
                ? new s.Z({ viewingMode: e.viewingMode, scale: e.scale })
                : null,
            sr: e.spatialReference,
          };
      }
      function hn({
        url: e,
        spatialReference: t,
        lrucache: n,
        interceptor: r,
      }) {
        const i = Vt();
        return i ? i.createFeatureSetCollectionFromService(e, t, n, r) : null;
      }
      function fn({
        layer: e,
        spatialReference: t,
        outFields: n,
        returnGeometry: r,
        lrucache: i,
        interceptor: s,
      }) {
        if (null === e) return null;
        const o = Vt();
        return o ? o.constructFeatureSet(e, t, n, null == r || r, i, s) : null;
      }
      function pn(e) {
        if (null === (null == e ? void 0 : e.map)) return null;
        const t = Vt();
        return t
          ? t.createFeatureSetCollectionFromMap(
              e.map,
              e.spatialReference,
              e.lrucache,
              e.interceptor,
            )
          : null;
      }
      function dn(e, t, n = []) {
        return Gt(e, t, n);
      }
      function mn() {
        return _t();
      }
      function Dn() {
        return Pt();
      }
      function gn(e, t) {
        if (!e) return !1;
        if ('string' == typeof e) return t(e);
        const n = e;
        if (
          (function (e) {
            return (
              'simple' === e.type ||
              'class-breaks' === e.type ||
              'unique-value' === e.type ||
              'dot-density' === e.type ||
              'dictionary' === e.type
            );
          })(n)
        ) {
          if ('dot-density' === n.type) {
            const e = n.attributes.some((e) => t(e.valueExpression));
            if (e) return e;
          }
          const e = n.visualVariables,
            r =
              !!e &&
              e.some((e) => {
                let n = t(e.valueExpression);
                return (
                  'size' === e.type &&
                    ((0, Jt.iY)(e.minSize) &&
                      (n = n || t(e.minSize.valueExpression)),
                    (0, Jt.iY)(e.maxSize) &&
                      (n = n || t(e.maxSize.valueExpression))),
                  n
                );
              });
          return !(!('valueExpression' in n) || !t(n.valueExpression)) || r;
        }
        if (
          (function (e) {
            return 'esri.layers.support.LabelClass' === e.declaredClass;
          })(n)
        ) {
          const e = n.labelExpressionInfo && n.labelExpressionInfo.expression;
          return !(!e || !t(e)) || !1;
        }
        return (
          !!(function (e) {
            return 'esri.PopupTemplate' === e.declaredClass;
          })(n) &&
          ((!!n.expressionInfos &&
            n.expressionInfos.some((e) => t(e.expression))) ||
            (Array.isArray(n.content) &&
              n.content.some((e) => {
                var n;
                return (
                  'expression' === e.type &&
                  t(null == (n = e.expressionInfo) ? void 0 : n.expression)
                );
              })))
        );
      }
      function yn(e) {
        const t = $t(e);
        return !!t && Ht(t);
      }
      function En(e) {
        return gn(e, yn);
      }
      function An(e) {
        const t = $t(e);
        return !!t && kt(t);
      }
      function xn(e) {
        return gn(e, An);
      }
    },
  },
]);
