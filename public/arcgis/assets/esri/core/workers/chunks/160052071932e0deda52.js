'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7284],
  {
    79235: (e, t, r) => {
      r.d(t, { Z: () => v });
      var i,
        s = r(43697),
        o = r(67676),
        n = r(35454),
        a = r(96674),
        l = r(67900),
        p = r(20941),
        u = r(5600),
        d = (r(80442), r(75215), r(71715)),
        c = r(52011),
        y = r(30556);
      const h = (0, n.w)()({
          orthometric: 'gravity-related-height',
          gravity_related_height: 'gravity-related-height',
          ellipsoidal: 'ellipsoidal',
        }),
        m = h.jsonValues.slice();
      (0, o.e$)(m, 'orthometric');
      const f = (0, n.w)()({
        meter: 'meters',
        foot: 'feet',
        'us-foot': 'us-feet',
        'clarke-foot': 'clarke-feet',
        'clarke-yard': 'clarke-yards',
        'clarke-link': 'clarke-links',
        'sears-yard': 'sears-yards',
        'sears-foot': 'sears-feet',
        'sears-chain': 'sears-chains',
        'benoit-1895-b-chain': 'benoit-1895-b-chains',
        'indian-yard': 'indian-yards',
        'indian-1937-yard': 'indian-1937-yards',
        'gold-coast-foot': 'gold-coast-feet',
        'sears-1922-truncated-chain': 'sears-1922-truncated-chains',
        '50-kilometers': '50-kilometers',
        '150-kilometers': '150-kilometers',
      });
      let b = (i = class extends a.wq {
        constructor(e) {
          super(e),
            (this.heightModel = 'gravity-related-height'),
            (this.heightUnit = 'meters'),
            (this.vertCRS = null);
        }
        writeHeightModel(e, t, r) {
          return h.write(e, t, r);
        }
        readHeightModel(e, t, r) {
          return (
            h.read(e) ||
            (r &&
              r.messages &&
              r.messages.push(
                (function (e, t) {
                  return new p.Z(
                    'height-model:unsupported',
                    `Height model of value '${e}' is not supported`,
                    t,
                  );
                })(e, { context: r }),
              ),
            null)
          );
        }
        readHeightUnit(e, t, r) {
          return (
            f.read(e) ||
            (r && r.messages && r.messages.push(g(e, { context: r })), null)
          );
        }
        readHeightUnitService(e, t, r) {
          return (
            (0, l.$C)(e) ||
            f.read(e) ||
            (r && r.messages && r.messages.push(g(e, { context: r })), null)
          );
        }
        readVertCRS(e, t) {
          return t.vertCRS || t.ellipsoid || t.geoid;
        }
        clone() {
          return new i({
            heightModel: this.heightModel,
            heightUnit: this.heightUnit,
            vertCRS: this.vertCRS,
          });
        }
        equals(e) {
          return (
            !!e &&
            (this === e ||
              (this.heightModel === e.heightModel &&
                this.heightUnit === e.heightUnit &&
                this.vertCRS === e.vertCRS))
          );
        }
        static deriveUnitFromSR(e, t) {
          const r = (0, l.cM)(t);
          return new i({
            heightModel: e.heightModel,
            heightUnit: r,
            vertCRS: e.vertCRS,
          });
        }
        write(e, t) {
          return (t = { origin: 'web-scene', ...t }), super.write(e, t);
        }
        static fromJSON(e) {
          if (!e) return null;
          const t = new i();
          return t.read(e, { origin: 'web-scene' }), t;
        }
      });
      function g(e, t) {
        return new p.Z(
          'height-unit:unsupported',
          `Height unit of value '${e}' is not supported`,
          t,
        );
      }
      (0, s._)(
        [
          (0, u.Cb)({
            type: h.apiValues,
            constructOnly: !0,
            json: {
              origins: { 'web-scene': { type: m, default: 'ellipsoidal' } },
            },
          }),
        ],
        b.prototype,
        'heightModel',
        void 0,
      ),
        (0, s._)(
          [(0, y.c)('web-scene', 'heightModel')],
          b.prototype,
          'writeHeightModel',
          null,
        ),
        (0, s._)(
          [(0, d.r)(['web-scene', 'service'], 'heightModel')],
          b.prototype,
          'readHeightModel',
          null,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: f.apiValues,
              constructOnly: !0,
              json: {
                origins: {
                  'web-scene': { type: f.jsonValues, write: f.write },
                },
              },
            }),
          ],
          b.prototype,
          'heightUnit',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('web-scene', 'heightUnit')],
          b.prototype,
          'readHeightUnit',
          null,
        ),
        (0, s._)(
          [(0, d.r)('service', 'heightUnit')],
          b.prototype,
          'readHeightUnitService',
          null,
        ),
        (0, s._)(
          [
            (0, u.Cb)({
              type: String,
              constructOnly: !0,
              json: { origins: { 'web-scene': { write: !0 } } },
            }),
          ],
          b.prototype,
          'vertCRS',
          void 0,
        ),
        (0, s._)(
          [(0, d.r)('service', 'vertCRS', ['vertCRS', 'ellipsoid', 'geoid'])],
          b.prototype,
          'readVertCRS',
          null,
        ),
        (b = i = (0, s._)([(0, c.j)('esri.geometry.HeightModelInfo')], b));
      const v = b;
    },
    67284: (e, t, r) => {
      r.r(t), r.d(t, { default: () => Kt });
      var i,
        s = r(43697),
        o = r(51773),
        n = (r(16050), r(12501), r(95088), r(79056), r(5499), r(84382)),
        a = r(30687),
        l = r(91423),
        p = r(32400),
        u = r(3172),
        d = r(78223),
        c = r(2368),
        y = r(80539),
        h = r(20102),
        m = r(61247),
        f = r(80442),
        b = r(35454),
        g = r(92604),
        v = r(70586),
        w = r(16453),
        _ = r(78286),
        C = r(95330),
        S = r(17452),
        I = r(5600),
        x = (r(67676), r(90578)),
        F = r(71715),
        E = r(52011),
        T = r(30556),
        j = r(63213),
        O = r(96674),
        M = r(22974),
        R = r(75215);
      let q = (i = class extends O.wq {
        constructor(e) {
          super(e),
            (this.expression = null),
            (this.name = null),
            (this.returnType = 'boolean'),
            (this.title = null);
        }
        clone() {
          return new i({
            name: this.name,
            title: this.title,
            expression: this.expression,
            returnType: this.returnType,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: String, json: { write: !0 } })],
        q.prototype,
        'expression',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          q.prototype,
          'name',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: ['boolean', 'date', 'number', 'string'],
              json: { write: !0 },
            }),
          ],
          q.prototype,
          'returnType',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          q.prototype,
          'title',
          void 0,
        ),
        (q = i = (0, s._)([(0, E.j)('esri.form.ExpressionInfo')], q));
      const D = q;
      let L = class extends O.wq {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.label = null),
            (this.type = null),
            (this.visibilityExpression = null);
        }
      };
      (0, s._)(
        [(0, I.Cb)({ type: String, json: { write: !0 } })],
        L.prototype,
        'description',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'label',
          void 0,
        ),
        (0, s._)([(0, I.Cb)()], L.prototype, 'type', void 0),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          L.prototype,
          'visibilityExpression',
          void 0,
        ),
        (L = (0, s._)([(0, E.j)('esri.form.elements.Element')], L));
      const Z = L;
      var A;
      let P = (A = class extends O.wq {
        constructor(e) {
          super(e), (this.type = null);
        }
        clone() {
          return new A({ type: this.type });
        }
      });
      (0, s._)(
        [
          (0, I.Cb)({
            type: [
              'attachment',
              'audio',
              'document',
              'image',
              'signature',
              'video',
            ],
            json: { write: !0 },
          }),
        ],
        P.prototype,
        'type',
        void 0,
      ),
        (P = A =
          (0, s._)([(0, E.j)('esri.form.elements.inputs.AttachmentInput')], P));
      const G = P;
      var N;
      let V = (N = class extends Z {
        constructor(e) {
          super(e),
            (this.attachmentKeyword = null),
            (this.editable = !0),
            (this.input = null),
            (this.type = 'attachment');
        }
        clone() {
          return new N({
            attachmentKeyword: this.attachmentKeyword,
            description: this.description,
            editable: this.editable,
            input: this.input,
            label: this.label,
            visibilityExpression: this.visibilityExpression,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: String, json: { write: !0 } })],
        V.prototype,
        'attachmentKeyword',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean, json: { write: !0 } })],
          V.prototype,
          'editable',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: G,
              json: {
                read: { source: 'inputType' },
                write: { target: 'inputType' },
              },
            }),
          ],
          V.prototype,
          'input',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: ['attachment'], json: { read: !1, write: !0 } })],
          V.prototype,
          'type',
          void 0,
        ),
        (V = N =
          (0, s._)([(0, E.j)('esri.form.elements.AttachmentElement')], V));
      const k = V;
      let Q = class extends O.wq {
        constructor(e) {
          super(e), (this.type = null);
        }
      };
      (0, s._)([(0, I.Cb)()], Q.prototype, 'type', void 0),
        (Q = (0, s._)([(0, E.j)('esri.form.elements.inputs.Input')], Q));
      const U = Q;
      let B = class extends U {
        constructor(e) {
          super(e), (this.maxLength = null), (this.minLength = 0);
        }
      };
      (0, s._)(
        [(0, I.Cb)({ type: Number, json: { write: !0 } })],
        B.prototype,
        'maxLength',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: Number, json: { write: !0 } })],
          B.prototype,
          'minLength',
          void 0,
        ),
        (B = (0, s._)([(0, E.j)('esri.form.elements.inputs.TextInput')], B));
      const J = B;
      var W;
      let z = (W = class extends J {
        constructor(e) {
          super(e), (this.type = 'barcode-scanner');
        }
        clone() {
          return new W({
            maxLength: this.maxLength,
            minLength: this.minLength,
          });
        }
      });
      (0, s._)(
        [
          (0, I.Cb)({
            type: ['barcode-scanner'],
            json: { read: !1, write: !0 },
          }),
        ],
        z.prototype,
        'type',
        void 0,
      ),
        (z = W =
          (0, s._)(
            [(0, E.j)('esri.form.elements.inputs.BarcodeScannerInput')],
            z,
          ));
      const H = z;
      var $;
      let K = ($ = class extends U {
        constructor(e) {
          super(e),
            (this.noValueOptionLabel = null),
            (this.showNoValueOption = !1),
            (this.type = 'combo-box');
        }
        clone() {
          return new $({
            showNoValueOption: this.showNoValueOption,
            noValueOptionLabel: this.noValueOptionLabel,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: String, json: { write: !0 } })],
        K.prototype,
        'noValueOptionLabel',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean, json: { write: !0 } })],
          K.prototype,
          'showNoValueOption',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: ['combo-box'], json: { read: !1, write: !0 } })],
          K.prototype,
          'type',
          void 0,
        ),
        (K = $ =
          (0, s._)([(0, E.j)('esri.form.elements.inputs.ComboBoxInput')], K));
      const X = K;
      var Y;
      function ee(e) {
        return null != e ? new Date(e) : null;
      }
      function te(e) {
        return e ? e.getTime() : null;
      }
      let re = (Y = class extends U {
        constructor(e) {
          super(e),
            (this.includeTime = !1),
            (this.max = null),
            (this.min = null),
            (this.type = 'datetime-picker');
        }
        readMax(e, t) {
          return ee(t.max);
        }
        writeMax(e, t) {
          t.max = te(e);
        }
        readMin(e, t) {
          return ee(t.min);
        }
        writeMin(e, t) {
          t.min = te(e);
        }
        clone() {
          return new Y({
            includeTime: this.includeTime,
            max: this.max,
            min: this.min,
            type: this.type,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: Boolean, json: { write: !0 } })],
        re.prototype,
        'includeTime',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: Date, json: { type: Number, write: !0 } })],
          re.prototype,
          'max',
          void 0,
        ),
        (0, s._)([(0, F.r)('max')], re.prototype, 'readMax', null),
        (0, s._)([(0, T.c)('max')], re.prototype, 'writeMax', null),
        (0, s._)(
          [(0, I.Cb)({ type: Date, json: { type: Number, write: !0 } })],
          re.prototype,
          'min',
          void 0,
        ),
        (0, s._)([(0, F.r)('min')], re.prototype, 'readMin', null),
        (0, s._)([(0, T.c)('min')], re.prototype, 'writeMin', null),
        (0, s._)(
          [
            (0, I.Cb)({
              type: ['datetime-picker'],
              json: { read: !1, write: !0 },
            }),
          ],
          re.prototype,
          'type',
          void 0,
        ),
        (re = Y =
          (0, s._)(
            [(0, E.j)('esri.form.elements.inputs.DateTimePickerInput')],
            re,
          ));
      const ie = re;
      var se;
      let oe = (se = class extends U {
        constructor(e) {
          super(e),
            (this.noValueOptionLabel = null),
            (this.showNoValueOption = !1),
            (this.type = 'radio-buttons');
        }
        clone() {
          return new se({
            noValueOptionLabel: this.noValueOptionLabel,
            showNoValueOption: this.showNoValueOption,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: String, json: { write: !0 } })],
        oe.prototype,
        'noValueOptionLabel',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean, json: { write: !0 } })],
          oe.prototype,
          'showNoValueOption',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: ['radio-buttons'],
              json: { read: !1, write: !0 },
            }),
          ],
          oe.prototype,
          'type',
          void 0,
        ),
        (oe = se =
          (0, s._)(
            [(0, E.j)('esri.form.elements.inputs.RadioButtonsInput')],
            oe,
          ));
      const ne = oe;
      var ae;
      let le = (ae = class extends U {
        constructor(e) {
          super(e),
            (this.offValue = null),
            (this.onValue = null),
            (this.type = 'switch');
        }
        clone() {
          return new ae({ offValue: this.offValue, onValue: this.onValue });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: [String, Number], json: { write: !0 } })],
        le.prototype,
        'offValue',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: [String, Number], json: { write: !0 } })],
          le.prototype,
          'onValue',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: ['switch'], json: { read: !1, write: !0 } })],
          le.prototype,
          'type',
          void 0,
        ),
        (le = ae =
          (0, s._)([(0, E.j)('esri.form.elements.inputs.SwitchInput')], le));
      const pe = le;
      var ue;
      let de = (ue = class extends J {
        constructor(e) {
          super(e), (this.type = 'text-area');
        }
        clone() {
          return new ue({
            maxLength: this.maxLength,
            minLength: this.minLength,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: ['text-area'], json: { read: !1, write: !0 } })],
        de.prototype,
        'type',
        void 0,
      ),
        (de = ue =
          (0, s._)([(0, E.j)('esri.form.elements.inputs.TextAreaInput')], de));
      const ce = de;
      var ye;
      let he = (ye = class extends J {
        constructor(e) {
          super(e), (this.type = 'text-box');
        }
        clone() {
          return new ye({
            maxLength: this.maxLength,
            minLength: this.minLength,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: ['text-box'], json: { read: !1, write: !0 } })],
        he.prototype,
        'type',
        void 0,
      ),
        (he = ye =
          (0, s._)([(0, E.j)('esri.form.elements.inputs.TextBoxInput')], he));
      const me = {
        base: U,
        key: 'type',
        typeMap: {
          'barcode-scanner': H,
          'combo-box': X,
          'datetime-picker': ie,
          'radio-buttons': ne,
          switch: pe,
          'text-area': ce,
          'text-box': he,
        },
      };
      var fe,
        be = r(72729);
      let ge = (fe = class extends Z {
        constructor(e) {
          super(e),
            (this.domain = null),
            (this.editable = !0),
            (this.editableExpression = null),
            (this.fieldName = null),
            (this.hint = null),
            (this.input = null),
            (this.requiredExpression = null),
            (this.type = 'field'),
            (this.valueExpression = null);
        }
        clone() {
          return new fe({
            description: this.description,
            domain: this.domain,
            editable: this.editable,
            editableExpression: this.editableExpression,
            fieldName: this.fieldName,
            hint: this.hint,
            input: this.input,
            label: this.label,
            requiredExpression: this.requiredExpression,
            valueExpression: this.valueExpression,
            visibilityExpression: this.visibilityExpression,
          });
        }
      });
      (0, s._)(
        [
          (0, I.Cb)({
            types: be.V5,
            json: { read: { reader: be.im }, write: !0 },
          }),
        ],
        ge.prototype,
        'domain',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean, json: { write: !0 } })],
          ge.prototype,
          'editable',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          ge.prototype,
          'editableExpression',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          ge.prototype,
          'fieldName',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          ge.prototype,
          'hint',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              types: me,
              json: {
                read: { source: 'inputType' },
                write: { target: 'inputType' },
              },
            }),
          ],
          ge.prototype,
          'input',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          ge.prototype,
          'requiredExpression',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { read: !1, write: !0 } })],
          ge.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          ge.prototype,
          'valueExpression',
          void 0,
        ),
        (ge = fe = (0, s._)([(0, E.j)('esri.form.elements.FieldElement')], ge));
      const ve = ge;
      var we,
        _e = r(44729);
      let Ce = (we = class extends Z {
        constructor(e) {
          super(e),
            (this.displayCount = null),
            (this.displayType = 'list'),
            (this.editable = !0),
            (this.orderByFields = null),
            (this.relationshipId = null),
            (this.type = 'relationship');
        }
        clone() {
          return new we({
            description: this.description,
            displayCount: this.displayCount,
            displayType: this.displayType,
            editable: this.editable,
            label: this.label,
            orderByFields: (0, M.d9)(this.orderByFields),
            relationshipId: this.relationshipId,
            visibilityExpression: this.visibilityExpression,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: Number, json: { write: !0 } })],
        Ce.prototype,
        'displayCount',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ type: ['list'], json: { write: !0 } })],
          Ce.prototype,
          'displayType',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean, json: { write: !0 } })],
          Ce.prototype,
          'editable',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: [_e.Z], json: { write: !0 } })],
          Ce.prototype,
          'orderByFields',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Number, json: { write: !0 } })],
          Ce.prototype,
          'relationshipId',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: ['relationship'],
              json: { read: !1, write: !0 },
            }),
          ],
          Ce.prototype,
          'type',
          void 0,
        ),
        (Ce = we =
          (0, s._)([(0, E.j)('esri.form.elements.RelationshipElement')], Ce));
      const Se = Ce;
      function Ie(e) {
        return {
          typesWithGroup: {
            base: Z,
            key: 'type',
            typeMap: { attachment: k, field: ve, group: e, relationship: Se },
          },
          typesWithoutGroup: {
            base: Z,
            key: 'type',
            typeMap: { attachment: k, field: ve, relationship: Se },
          },
        };
      }
      function xe(e, t, r = !0) {
        if (!e) return null;
        const i = r ? t.typesWithGroup.typeMap : t.typesWithoutGroup.typeMap;
        return e.filter((e) => i[e.type]).map((e) => i[e.type].fromJSON(e));
      }
      function Fe(e, t, r = !0) {
        if (!e) return null;
        const i = r ? t.typesWithGroup.typeMap : t.typesWithoutGroup.typeMap;
        return e.filter((e) => i[e.type]).map((e) => e.toJSON());
      }
      function Ee(e, t, r = !0) {
        return e
          ? e.map((e) =>
              (0, R.N7)(r ? t.typesWithGroup : t.typesWithoutGroup, e),
            )
          : null;
      }
      var Te;
      let je = (Te = class extends Z {
        constructor(e) {
          super(e),
            (this.elements = null),
            (this.initialState = 'expanded'),
            (this.type = 'group');
        }
        castElements(e) {
          return Ee(e, Oe, !1);
        }
        readElements(e, t) {
          return xe(t.formElements, Oe, !1);
        }
        writeElements(e, t) {
          t.formElements = Fe(e, Oe, !1);
        }
        clone() {
          return new Te({
            description: this.description,
            elements: (0, M.d9)(this.elements),
            initialState: this.initialState,
            label: this.label,
            visibilityExpression: this.visibilityExpression,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ json: { write: !0 } })],
        je.prototype,
        'elements',
        void 0,
      ),
        (0, s._)([(0, x.p)('elements')], je.prototype, 'castElements', null),
        (0, s._)(
          [(0, F.r)('elements', ['formElements'])],
          je.prototype,
          'readElements',
          null,
        ),
        (0, s._)([(0, T.c)('elements')], je.prototype, 'writeElements', null),
        (0, s._)(
          [(0, I.Cb)({ type: ['collapsed', 'expanded'], json: { write: !0 } })],
          je.prototype,
          'initialState',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { read: !1, write: !0 } })],
          je.prototype,
          'type',
          void 0,
        ),
        (je = Te = (0, s._)([(0, E.j)('esri.form.elements.GroupElement')], je));
      const Oe = Ie(je);
      var Me;
      const Re = Ie(je);
      let qe = (Me = class extends O.wq {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.elements = null),
            (this.expressionInfos = null),
            (this.title = null);
        }
        castElements(e) {
          return Ee(e, Re);
        }
        readElements(e, t) {
          return xe(t.formElements, Re);
        }
        writeElements(e, t) {
          t.formElements = Fe(e, Re);
        }
        clone() {
          return new Me({
            description: this.description,
            expressionInfos: (0, M.d9)(this.expressionInfos),
            elements: (0, M.d9)(this.elements),
            title: this.title,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ type: String, json: { write: !0 } })],
        qe.prototype,
        'description',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ json: { write: !0 } })],
          qe.prototype,
          'elements',
          void 0,
        ),
        (0, s._)([(0, x.p)('elements')], qe.prototype, 'castElements', null),
        (0, s._)(
          [(0, F.r)('elements', ['formElements'])],
          qe.prototype,
          'readElements',
          null,
        ),
        (0, s._)([(0, T.c)('elements')], qe.prototype, 'writeElements', null),
        (0, s._)(
          [(0, I.Cb)({ type: [D], json: { write: !0 } })],
          qe.prototype,
          'expressionInfos',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String, json: { write: !0 } })],
          qe.prototype,
          'title',
          void 0,
        ),
        (qe = Me = (0, s._)([(0, E.j)('esri.form.FormTemplate')], qe));
      const De = qe;
      var Le = r(6570),
        Ze = r(79235),
        Ae = r(82971),
        Pe = r(29600),
        Ge = (r(66577), r(38171)),
        Ne = r(3920),
        Ve = r(83379),
        ke = r(609),
        Qe = r(78346),
        Ue = r(52421),
        Be = r(59431),
        Je = r(28694),
        We = r(74889),
        ze = r(38913),
        He = r(86973);
      let $e = 0;
      const Ke = g.Z.getLogger('esri.layers.graphics.sources.MemorySource');
      let Xe = class extends Ve.Z.LoadableMixin((0, ke.v)((0, Ne.p)(y.Z))) {
        constructor(e) {
          super(e), (this._idToClientGraphic = null), (this.type = 'memory');
        }
        load(e) {
          const t = (0, v.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(this._startWorker(t)),
            Promise.resolve(this)
          );
        }
        destroy() {
          var e;
          null == (e = this._connection) || e.close(),
            (this._connection = null);
        }
        get workerGeometryType() {
          var e;
          const t = null == (e = this.layer) ? void 0 : e.geometryType;
          return t
            ? this._geometryTypeRequiresClientGraphicMapping(t)
              ? 'polygon'
              : t
            : null;
        }
        applyEdits(e) {
          return this.load().then(() => this._applyEdits(e));
        }
        openPorts() {
          return this.load().then(() => this._connection.openPorts());
        }
        async queryFeatures(e, t = {}) {
          await this.load(t);
          const r = await this._connection.invoke(
            'queryFeatures',
            e ? e.toJSON() : null,
            t,
          );
          (0, Je.p)(e, this.layer.spatialReference, r);
          const i = We.default.fromJSON(r);
          if (!this._requiresClientGraphicMapping()) return i;
          const s = this.layer.objectIdField;
          for (const e of i.features) {
            const t = e.attributes[s],
              r = this._idToClientGraphic.get(t);
            r && (e.geometry = r.geometry);
          }
          return (i.geometryType = this.layer.geometryType), i;
        }
        async queryFeaturesJSON(e, t = {}) {
          if (this._requiresClientGraphicMapping())
            throw new h.Z(
              'query-features-json:unsupported',
              'Cannot query in JSON format for client only geometry types (mesh and extent)',
            );
          await this.load(t);
          const r = await this._connection.invoke(
            'queryFeatures',
            e ? e.toJSON() : null,
            t,
          );
          return (0, Je.p)(e, this.layer.spatialReference, r), r;
        }
        queryFeatureCount(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke(
              'queryFeatureCount',
              e ? e.toJSON() : null,
              t,
            ),
          );
        }
        queryObjectIds(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke('queryObjectIds', e ? e.toJSON() : null, t),
          );
        }
        queryExtent(e, t = {}) {
          return this.load(t)
            .then(() =>
              this._connection.invoke('queryExtent', e ? e.toJSON() : null, t),
            )
            .then((e) => ({ count: e.count, extent: Le.Z.fromJSON(e.extent) }));
        }
        querySnapping(e, t = {}) {
          return this.load(t).then(() =>
            this._connection.invoke('querySnapping', e, t),
          );
        }
        async _applyEdits(e) {
          if (!this._connection)
            throw new h.Z(
              'feature-layer-source:edit-failure',
              'Memory source not loaded',
            );
          const t = this.layer.objectIdField;
          let r = null;
          const i = [],
            s = [];
          await Promise.all([
            this._prepareClientMapping(e.addFeatures, null),
            this._prepareClientMapping(e.updateFeatures, null),
          ]);
          const o = (e) =>
            'objectId' in e && null != e.objectId
              ? e.objectId
              : 'attributes' in e && null != e.attributes[t]
              ? e.attributes[t]
              : null;
          if (
            (e.addFeatures && (r = this._prepareAddFeatures(e.addFeatures)),
            e.deleteFeatures)
          )
            for (const t of e.deleteFeatures) {
              const e = o(t);
              null != e && i.push(e);
            }
          const n =
            e.updateFeatures && this._idToClientGraphic ? new Map() : null;
          if (e.updateFeatures)
            for (const t of e.updateFeatures)
              if ((s.push(this._serializeFeature(t)), n)) {
                const e = o(t);
                null != e && n.set(e, t);
              }
          (0, Be.P)(r ? r.features : null, s, this.layer.spatialReference);
          const { fullExtent: a, featureEditResults: l } =
            await this._connection.invoke('applyEdits', {
              adds: r ? r.features : [],
              updates: s,
              deletes: i,
            });
          return (
            (this.fullExtent = a),
            r && r.finish(l.uidToObjectId),
            this._updateClientGraphicIds(n, l),
            this._createEditsResult(l)
          );
        }
        async _prepareClientMapping(e, t) {
          if ('mesh' !== this.layerOrSourceGeometryType || (0, v.Wi)(e)) return;
          const r = [];
          for (const { geometry: i } of e)
            !(0, v.pC)(i) ||
              'mesh' !== i.type ||
              i.hasExtent ||
              i.loaded ||
              r.push(i.load({ signal: t }));
          r.length && (await Promise.all(r));
        }
        _updateClientGraphicIds(e, t) {
          if (this._idToClientGraphic) {
            if (e)
              for (const r of t.updateResults) {
                if (!r.success) continue;
                const t = e.get(r.objectId);
                null != t && this._addIdToClientGraphic(t);
              }
            for (const e of t.deleteResults)
              e.success && this._idToClientGraphic.delete(e.objectId);
          }
        }
        _createEditsResult(e) {
          return {
            addFeatureResults: e.addResults
              ? e.addResults.map(this._createFeatureEditResult, this)
              : [],
            updateFeatureResults: e.updateResults
              ? e.updateResults.map(this._createFeatureEditResult, this)
              : [],
            deleteFeatureResults: e.deleteResults
              ? e.deleteResults.map(this._createFeatureEditResult, this)
              : [],
            addAttachmentResults: [],
            updateAttachmentResults: [],
            deleteAttachmentResults: [],
          };
        }
        _createFeatureEditResult(e) {
          const t =
            !0 === e.success
              ? null
              : e.error || { code: void 0, description: void 0 };
          return {
            objectId: e.objectId,
            globalId: e.globalId,
            error: t
              ? new h.Z('feature-layer-source:edit-failure', t.description, {
                  code: t.code,
                })
              : null,
          };
        }
        _prepareAddFeatures(e) {
          const t = new Map(),
            r = new Array(e.length);
          let i = null;
          for (let s = 0; s < e.length; s++) {
            const o = e[s],
              n = this._serializeFeature(o);
            !i && (0, v.pC)(o.geometry) && (i = o.geometry.type),
              (r[s] = n),
              t.set(`${n.uid}`, o);
          }
          const s = this;
          return {
            features: r,
            inferredGeometryType: i,
            finish(e) {
              const r = s.sourceJSON.objectIdField;
              for (const i in e) {
                const o = e[i],
                  n = t.get(i);
                n &&
                  (n.attributes || (n.attributes = {}),
                  -1 === o ? delete n.attributes[r] : (n.attributes[r] = o),
                  s._addIdToClientGraphic(n));
              }
            },
          };
        }
        _addIdToClientGraphic(e) {
          if (!this._idToClientGraphic) return;
          const t = this.sourceJSON.objectIdField,
            r = e.attributes && e.attributes[t];
          null != r && this._idToClientGraphic.set(r, e);
        }
        get layerOrSourceGeometryType() {
          var e, t, r;
          return null !=
            (e = null == (t = this.layer) ? void 0 : t.geometryType)
            ? e
            : null == (r = this.sourceJSON)
            ? void 0
            : r.geometryType;
        }
        _requiresClientGraphicMapping() {
          return this._geometryTypeRequiresClientGraphicMapping(
            this.layerOrSourceGeometryType,
          );
        }
        _geometryRequiresClientGraphicMapping(e) {
          return this._geometryTypeRequiresClientGraphicMapping(e.type);
        }
        _geometryTypeRequiresClientGraphicMapping(e) {
          return 'mesh' === e || 'multipatch' === e || 'extent' === e;
        }
        _serializeFeature(e) {
          const { attributes: t } = e,
            r = this._geometryForSerialization(e),
            i = ($e++).toString();
          return r
            ? { uid: i, geometry: r.toJSON(), attributes: t }
            : { uid: i, attributes: t };
        }
        _geometryForSerialization(e) {
          const { geometry: t } = e;
          return (0, v.Wi)(t)
            ? null
            : this._geometryRequiresClientGraphicMapping(t)
            ? t.extent
              ? ze.Z.fromExtent(t.extent)
              : null
            : t;
        }
        async _startWorker(e) {
          this._connection = await (0, Qe.bA)('MemorySourceWorker', {
            strategy: (0, f.Z)('feature-layers-workers')
              ? 'dedicated'
              : 'local',
            signal: e,
          });
          const {
              fields: t,
              spatialReference: r,
              objectIdField: i,
              hasM: s,
              hasZ: o,
              timeInfo: n,
            } = this.layer,
            a = 'defaults' === this.layer.originOf('spatialReference');
          await this._prepareClientMapping(this.items, e);
          const l = this._prepareAddFeatures(this.items);
          this.handles.add(
            this.on('before-changes', (e) => {
              Ke.error(
                'Source modifications will not propagate after layer has been loaded. Please use .applyEdits() instead',
              ),
                e.preventDefault();
            }),
          );
          const p = {
              features: l.features,
              fields: t && t.map((e) => e.toJSON()),
              geometryType: He.P$.toJSON(this.workerGeometryType),
              hasM: 'mesh' !== this.layerOrSourceGeometryType && s,
              hasZ: 'mesh' === this.layerOrSourceGeometryType || o,
              objectIdField: i,
              spatialReference: a ? null : r && r.toJSON(),
              timeInfo: n ? n.toJSON() : null,
            },
            u = await this._connection.invoke('load', p, { signal: e });
          for (const e of u.warnings)
            Ke.warn(e.message, { layer: this.layer, warning: e });
          u.featureErrors.length &&
            Ke.warn(
              `Encountered ${u.featureErrors.length} validation errors while loading features`,
              u.featureErrors,
            );
          const d = u.layerDefinition;
          this._geometryTypeRequiresClientGraphicMapping(
            l.inferredGeometryType,
          ) && (d.geometryType = He.P$.toJSON(l.inferredGeometryType)),
            (this.sourceJSON = d),
            this._requiresClientGraphicMapping() &&
              (this._idToClientGraphic = new Map()),
            l.finish(u.assignedObjectIds);
        }
      };
      (0, s._)(
        [(0, Ue.c)({ Type: Ge.Z, ensureType: (0, R.se)(Ge.Z) })],
        Xe.prototype,
        'itemType',
        void 0,
      ),
        (0, s._)([(0, I.Cb)()], Xe.prototype, 'type', void 0),
        (0, s._)(
          [(0, I.Cb)({ constructOnly: !0 })],
          Xe.prototype,
          'layer',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Xe.prototype,
          'workerGeometryType',
          null,
        ),
        (0, s._)([(0, I.Cb)()], Xe.prototype, 'sourceJSON', void 0),
        (Xe = (0, s._)(
          [(0, E.j)('esri.layers.graphics.sources.MemorySource')],
          Xe,
        ));
      const Ye = Xe;
      var et,
        tt = r(54295),
        rt = r(17287),
        it = r(71612),
        st = r(17017),
        ot = r(69637),
        nt = r(38009),
        at = r(68825),
        lt = r(16859),
        pt = r(34760),
        ut = r(72965),
        dt = r(28294),
        ct = r(66677),
        yt = r(21506);
      let ht = (et = class extends O.wq {
        constructor(e) {
          super(e);
        }
        clone() {
          const {
            name: e,
            fields: t,
            isAscending: r,
            isUnique: i,
            description: s,
          } = this;
          return new et({
            name: e,
            fields: t,
            isAscending: r,
            isUnique: i,
            description: s,
          });
        }
      });
      (0, s._)(
        [(0, I.Cb)({ constructOnly: !0 })],
        ht.prototype,
        'name',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ constructOnly: !0 })],
          ht.prototype,
          'fields',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ constructOnly: !0 })],
          ht.prototype,
          'isAscending',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ constructOnly: !0 })],
          ht.prototype,
          'isUnique',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ constructOnly: !0 })],
          ht.prototype,
          'description',
          void 0,
        ),
        (ht = et =
          (0, s._)([(0, E.j)('esri.layers.support.FeatureIndex')], ht));
      var mt = r(55785),
        ft = r(70082),
        bt = r(16451),
        gt = r(53518),
        vt = r(35671),
        wt = r(67900);
      let _t = class extends (0, c.J)(O.wq) {
        constructor(e) {
          super(e),
            (this.shapeAreaField = null),
            (this.shapeLengthField = null),
            (this.units = null);
        }
      };
      (0, s._)(
        [
          (0, I.Cb)({
            type: String,
            json: { read: { source: 'shapeAreaFieldName' } },
          }),
        ],
        _t.prototype,
        'shapeAreaField',
        void 0,
      ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: { read: { source: 'shapeLengthFieldName' } },
            }),
          ],
          _t.prototype,
          'shapeLengthField',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: { read: (e) => wt.gV.read(e) || wt.Jo.read(e) },
            }),
          ],
          _t.prototype,
          'units',
          void 0,
        ),
        (_t = (0, s._)(
          [(0, E.j)('esri.layers.support.GeometryFieldsInfo')],
          _t,
        ));
      const Ct = _t;
      var St = r(2319),
        It = r(30707),
        xt = r(56765);
      const Ft = new b.X({
          esriRelCardinalityOneToOne: 'one-to-one',
          esriRelCardinalityOneToMany: 'one-to-many',
          esriRelCardinalityManyToMany: 'many-to-many',
        }),
        Et = new b.X({
          esriRelRoleOrigin: 'origin',
          esriRelRoleDestination: 'destination',
        });
      let Tt = class extends (0, c.J)(O.wq) {
        constructor(e) {
          super(e),
            (this.cardinality = null),
            (this.composite = null),
            (this.id = null),
            (this.keyField = null),
            (this.keyFieldInRelationshipTable = null),
            (this.name = null),
            (this.relatedTableId = null),
            (this.relationshipTableId = null),
            (this.role = null);
        }
      };
      (0, s._)(
        [(0, I.Cb)({ json: { read: Ft.read, write: Ft.write } })],
        Tt.prototype,
        'cardinality',
        void 0,
      ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'composite',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'id',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'keyField',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'keyFieldInRelationshipTable',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'name',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'relatedTableId',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !0, write: !0 } })],
          Tt.prototype,
          'relationshipTableId',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: Et.read, write: Et.write } })],
          Tt.prototype,
          'role',
          void 0,
        ),
        (Tt = (0, s._)([(0, E.j)('esri.layers.support.Relationship')], Tt));
      const jt = Tt;
      var Ot = r(30547),
        Mt = r(60199),
        Rt = r(10158),
        qt = r(40555),
        Dt = r(56545),
        Lt = r(57444),
        Zt = r(75935),
        At = r(28141),
        Pt = r(32163);
      const Gt = new b.X({
          esriGeometryPoint: 'point',
          esriGeometryMultipoint: 'multipoint',
          esriGeometryPolyline: 'polyline',
          esriGeometryPolygon: 'polygon',
          esriGeometryMultiPatch: 'multipatch',
        }),
        Nt = {
          name: 'supportsName',
          size: 'supportsSize',
          contentType: 'supportsContentType',
          keywords: 'supportsKeywords',
          exifInfo: 'supportsExifInfo',
        },
        Vt = 'FeatureLayer',
        kt = g.Z.getLogger('esri.layers.FeatureLayer');
      function Qt(e) {
        return e && e instanceof y.Z;
      }
      function Ut(e, t, r) {
        return !!(e && e.hasOwnProperty(t) ? e[t] : r);
      }
      function Bt(e, t, r) {
        return e && e.hasOwnProperty(t) ? e[t] : r;
      }
      function Jt(e) {
        var t;
        const r =
          null == e || null == (t = e.supportedSpatialAggregationStatistics)
            ? void 0
            : t.map((e) => e.toLowerCase());
        return {
          envelope: !(null == r || !r.includes('envelopeaggregate')),
          centroid: !(null == r || !r.includes('centroidaggregate')),
          convexHull: !(null == r || !r.includes('convexhullaggregate')),
        };
      }
      const Wt = (0, gt.v)();
      function zt(e, t, r) {
        const i = !(null == r || !r.writeLayerSchema);
        return { enabled: i, ignoreOrigin: i };
      }
      let Ht = class extends (0, ot.b)(
        (0, it.h)(
          (0, at.c)(
            (0, dt.n)(
              (0, ut.M)(
                (0, pt.Q)(
                  (0, rt.Y)(
                    (0, nt.q)(
                      (0, lt.I)((0, w.R)((0, st.N)((0, tt.V)((0, c.J)(Pe.Z))))),
                    ),
                  ),
                ),
              ),
            ),
          ),
        ),
      ) {
        constructor(...e) {
          super(...e),
            (this._handles = new m.Z()),
            (this.capabilities = null),
            (this.charts = null),
            (this.copyright = null),
            (this.datesInUnknownTimezone = !1),
            (this.displayField = null),
            (this.definitionExpression = null),
            (this.dynamicDataSource = null),
            (this.editFieldsInfo = null),
            (this.editingInfo = null),
            (this.elevationInfo = null),
            (this.featureReduction = null),
            (this.fields = null),
            (this.fieldsIndex = null),
            (this.floorInfo = null),
            (this.formTemplate = null),
            (this.fullExtent = null),
            (this.gdbVersion = null),
            (this.geometryFieldsInfo = null),
            (this.geometryType = null),
            (this.hasM = void 0),
            (this.hasZ = void 0),
            (this.heightModelInfo = null),
            (this.historicMoment = null),
            (this.infoFor3D = null),
            (this.isTable = !1),
            (this.labelsVisible = !0),
            (this.labelingInfo = null),
            (this.layerId = void 0),
            (this.legendEnabled = !0),
            (this.minScale = 0),
            (this.maxScale = 0),
            (this.globalIdField = null),
            (this.objectIdField = null),
            (this.outFields = null),
            (this.path = null),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.relationships = null),
            (this.sourceJSON = null),
            (this.returnM = void 0),
            (this.returnZ = void 0),
            (this.screenSizePerspectiveEnabled = !0),
            (this.serviceDefinitionExpression = null),
            (this.spatialReference = Ae.Z.WGS84),
            (this.subtypeCode = null),
            (this.templates = null),
            (this.timeInfo = null),
            (this.title = null),
            (this.sublayerTitleMode = 'item-title'),
            (this.trackIdField = null),
            (this.type = 'feature'),
            (this.typeIdField = null),
            (this.types = null),
            (this.indexes = new (y.Z.ofType(ht))()),
            (this.userIsAdmin = !1),
            (this.version = void 0),
            (this.visible = !0);
        }
        destroy() {
          var e;
          null == (e = this.source) || e.destroy(),
            (this._handles = (0, v.SC)(this._handles));
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          const t = (0, v.pC)(e) ? e.signal : null;
          if (this.portalItem && this.portalItem.loaded && this.source)
            return void this.addResolvingPromise(
              this.createGraphicsSource(t).then((e) =>
                this._initLayerProperties(e),
              ),
            );
          const r = this.loadFromPortal(
            { supportedTypes: ['Feature Service', 'Feature Collection'] },
            e,
          )
            .catch(C.r9)
            .then(async () => {
              if (
                this.url &&
                null == this.layerId &&
                /FeatureServer|MapServer\/*$/i.test(this.url)
              ) {
                const e = await this._fetchFirstLayerId(t);
                null != e && (this.layerId = e);
              }
              if (!this.url && !this._hasMemorySource())
                throw new h.Z(
                  'feature-layer:missing-url-or-source',
                  'Feature layer must be created with either a url or a source',
                );
              return this._initLayerProperties(
                await this.createGraphicsSource(t),
              );
            })
            .then(() => this.finishLoadEditablePortalLayer(e));
          return this.addResolvingPromise(r), Promise.resolve(this);
        }
        readCapabilities(e, t) {
          return (
            (t = t.layerDefinition || t),
            {
              attachment: this._readAttachmentCapabilities(
                t.attachmentProperties,
              ),
              data: this._readDataCapabilities(t),
              metadata: this._readMetadataCapabilities(t),
              operations: this._readOperationsCapabilities(
                t.capabilities || e,
                t,
              ),
              query: this._readQueryCapabilities(t),
              queryRelated: this._readQueryRelatedCapabilities(t),
              editing: this._readEditingCapabilities(t),
            }
          );
        }
        get createQueryVersion() {
          return (
            this.commitProperty('definitionExpression'),
            this.commitProperty('dynamicDataSource'),
            this.commitProperty('timeExtent'),
            this.commitProperty('timeOffset'),
            this.commitProperty('geometryType'),
            this.commitProperty('gdbVersion'),
            this.commitProperty('historicMoment'),
            this.commitProperty('returnZ'),
            this.commitProperty('capabilities'),
            this.commitProperty('returnM'),
            (this._get('createQueryVersion') || 0) + 1
          );
        }
        get editingEnabled() {
          return (
            !(this.loaded && !this.capabilities.operations.supportsEditing) &&
            (this._isOverridden('editingEnabled')
              ? this._get('editingEnabled')
              : this._hasMemorySource() || this.userHasEditingPrivileges)
          );
        }
        set editingEnabled(e) {
          null != e
            ? this._override('editingEnabled', e)
            : this._clearOverride('editingEnabled');
        }
        readEditingEnabled(e, t) {
          return this._readEditingEnabled(t, !1);
        }
        readEditingEnabledFromWebMap(e, t, r) {
          return this._readEditingEnabled(t, !0, r);
        }
        writeEditingEnabled(e, t) {
          this._writeEditingEnabled(e, t, !1);
        }
        writeEditingEnabledToWebMap(e, t, r, i) {
          this._writeEditingEnabled(e, t, !0, i);
        }
        readEditingInfo(e, t) {
          const { editingInfo: r } = t;
          return r
            ? {
                lastEditDate:
                  null != r.lastEditDate ? new Date(r.lastEditDate) : null,
              }
            : null;
        }
        readIsTable(e, t) {
          return (
            'Table' === (t = (t && t.layerDefinition) || t).type ||
            !t.geometryType
          );
        }
        writeIsTable(e, t, r, i) {
          null != i &&
            i.writeLayerSchema &&
            (0, _.RB)(r, e ? 'Table' : 'Feature Layer', t);
        }
        readMinScale(e, t) {
          return t.effectiveMinScale || e || 0;
        }
        readMaxScale(e, t) {
          return t.effectiveMaxScale || e || 0;
        }
        readGlobalIdFieldFromService(e, t) {
          if ((t = t.layerDefinition || t).globalIdField)
            return t.globalIdField;
          if (t.fields)
            for (const e of t.fields)
              if ('esriFieldTypeGlobalID' === e.type) return e.name;
        }
        readObjectIdFieldFromService(e, t) {
          if ((t = t.layerDefinition || t).objectIdField)
            return t.objectIdField;
          if (t.fields)
            for (const e of t.fields)
              if ('esriFieldTypeOID' === e.type) return e.name;
        }
        get parsedUrl() {
          const e = this.url ? (0, S.mN)(this.url) : null;
          return (
            null != e &&
              (null != this.dynamicDataSource
                ? (e.path = (0, S.v_)(e.path, 'dynamicLayer'))
                : null != this.layerId &&
                  (e.path = (0, S.v_)(e.path, this.layerId.toString()))),
            e
          );
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        set renderer(e) {
          (0, vt.YN)(e, this.fieldsIndex), this._set('renderer', e);
        }
        readRenderer(e, t, r) {
          const i =
            ((t = t.layerDefinition || t).drawingInfo &&
              t.drawingInfo.renderer) ||
            void 0;
          if (i) {
            const e = (0, l.a)(i, t, r) || void 0;
            return (
              e ||
                kt.error('Failed to create renderer', {
                  rendererDefinition: t.drawingInfo.renderer,
                  layer: this,
                  context: r,
                }),
              e
            );
          }
          if (t.defaultSymbol)
            return t.types && t.types.length
              ? new a.Z({
                  defaultSymbol: $t(t.defaultSymbol, t, r),
                  field: t.typeIdField,
                  uniqueValueInfos: t.types.map((e) => ({
                    id: e.id,
                    symbol: $t(e.symbol, e, r),
                  })),
                })
              : new n.Z({ symbol: $t(t.defaultSymbol, t, r) });
        }
        set source(e) {
          const t = this._get('source');
          t !== e &&
            (Qt(t) && this._resetMemorySource(t),
            Qt(e) && this._initMemorySource(e),
            this._set('source', e));
        }
        castSource(e) {
          return e
            ? Array.isArray(e) || e instanceof y.Z
              ? new Ye({ layer: this, items: e })
              : e
            : null;
        }
        readSource(e, t) {
          const r = We.default.fromJSON(t.featureSet);
          return new Ye({ layer: this, items: (r && r.features) || [] });
        }
        readServiceDefinitionExpression(e, t) {
          return t.definitionQuery || t.definitionExpression;
        }
        readTemplates(e, t) {
          const r = t.editFieldsInfo,
            i = r && r.creatorField,
            s = r && r.editorField;
          return (
            (e = e && e.map((e) => ft.Z.fromJSON(e))),
            this._fixTemplates(e, i),
            this._fixTemplates(e, s),
            e
          );
        }
        readTitle(e, t) {
          const r = (t.layerDefinition && t.layerDefinition.name) || t.name,
            i = t.title || (t.layerDefinition && t.layerDefinition.title);
          if (r) {
            const e = this.portalItem && this.portalItem.title;
            if ('item-title' === this.sublayerTitleMode)
              return this.url ? (0, ct.a7)(this.url, r) : r;
            let t = r;
            if (!t && this.url) {
              const e = (0, ct.Qc)(this.url);
              (0, v.pC)(e) && (t = e.title);
            }
            if (!t) return;
            return (
              'item-title-and-service-name' === this.sublayerTitleMode &&
                e &&
                e !== t &&
                (t = e + ' - ' + t),
              (0, ct.ld)(t)
            );
          }
          if ('item-title' === this.sublayerTitleMode && i) return i;
        }
        readTitleFromWebMap(e, t) {
          return t.title || (t.layerDefinition && t.layerDefinition.name);
        }
        readTypeIdField(e, t) {
          let r = (t = t.layerDefinition || t).typeIdField;
          if (r && t.fields) {
            r = r.toLowerCase();
            const e = t.fields.find((e) => e.name.toLowerCase() === r);
            e && (r = e.name);
          }
          return r;
        }
        readTypes(e, t) {
          e = (t = t.layerDefinition || t).types;
          const r = t.editFieldsInfo,
            i = r && r.creatorField,
            s = r && r.editorField;
          return (
            e &&
            e.map(
              (e) => (
                (e = bt.Z.fromJSON(e)),
                this._fixTemplates(e.templates, i),
                this._fixTemplates(e.templates, s),
                e
              ),
            )
          );
        }
        set url(e) {
          const t = (0, ct.XG)({
            layer: this,
            url: e,
            nonStandardUrlAllowed: !0,
            logger: kt,
          });
          this._set('url', t.url),
            null != t.layerId && this._set('layerId', t.layerId);
        }
        writeUrl(e, t, r, i) {
          (0, ct.wH)(this, e, null, t, i);
        }
        readVersion(e, t) {
          return t.currentVersion
            ? t.currentVersion
            : t.hasOwnProperty('capabilities') ||
              t.hasOwnProperty('drawingInfo') ||
              t.hasOwnProperty('hasAttachments') ||
              t.hasOwnProperty('htmlPopupType') ||
              t.hasOwnProperty('relationships') ||
              t.hasOwnProperty('timeInfo') ||
              t.hasOwnProperty('typeIdField') ||
              t.hasOwnProperty('types')
            ? 10
            : 9.3;
        }
        readVisible(e, t) {
          return t.layerDefinition &&
            null != t.layerDefinition.defaultVisibility
            ? !!t.layerDefinition.defaultVisibility
            : null != t.visibility
            ? !!t.visibility
            : void 0;
        }
        addAttachment(e, t) {
          return this.load()
            .then(() => this._checkAttachmentSupport(e))
            .then(() => {
              if (!('addAttachment' in this.source))
                throw new h.Z(
                  Vt,
                  'Layer source does not support addAttachment capability',
                );
              return this.source.addAttachment(e, t);
            });
        }
        updateAttachment(e, t, r) {
          return this.load()
            .then(() => this._checkAttachmentSupport(e))
            .then(() => {
              if (!('updateAttachment' in this.source))
                throw new h.Z(
                  Vt,
                  'Layer source does not support updateAttachment capability',
                );
              return this.source.updateAttachment(e, t, r);
            });
        }
        async applyEdits(e, t) {
          const i = await r.e(4720).then(r.bind(r, 14720));
          return await this.load(), i.applyEdits(this, this.source, e, t);
        }
        on(e, t) {
          return super.on(e, t);
        }
        createPopupTemplate(e) {
          return (0, Pt.eZ)(this, e);
        }
        async createGraphicsSource(e) {
          if (this._hasMemorySource()) return this.source.load({ signal: e });
          const { default: t } = await (0, C.Hl)(
            r.e(5517).then(r.bind(r, 85517)),
            e,
          );
          return new t({ layer: this }).load({ signal: e });
        }
        createQuery() {
          const e = new Lt.Z(),
            t = this.get('capabilities.data'),
            r = this.get('capabilities.query');
          (e.dynamicDataSource = this.dynamicDataSource),
            (e.historicMoment = this.historicMoment),
            (e.gdbVersion = this.gdbVersion),
            (e.returnGeometry = !0),
            r &&
              ((e.compactGeometryEnabled = r.supportsCompactGeometry),
              (e.defaultSpatialReferenceEnabled =
                r.supportsDefaultSpatialReference)),
            t &&
              (t.supportsZ &&
                null != this.returnZ &&
                (e.returnZ = this.returnZ),
              t.supportsM &&
                null != this.returnM &&
                (e.returnM = this.returnM)),
            (e.outFields = ['*']),
            (e.where = this.definitionExpression || '1=1');
          const { timeOffset: i, timeExtent: s } = this;
          return (
            (e.timeExtent =
              null != i && null != s ? s.offset(-i.value, i.unit) : s || null),
            (e.multipatchOption =
              'multipatch' === this.geometryType ? 'xyFootprint' : null),
            e
          );
        }
        deleteAttachments(e, t) {
          return this.load()
            .then(() => this._checkAttachmentSupport(e))
            .then(() => {
              if (!('deleteAttachments' in this.source))
                throw new h.Z(
                  Vt,
                  'Layer source does not support deleteAttachments capability',
                );
              return this.source.deleteAttachments(e, t);
            });
        }
        fetchRecomputedExtents(e) {
          return this.load({ signal: null == e ? void 0 : e.signal }).then(
            () => {
              if (this.source.fetchRecomputedExtents)
                return this.source.fetchRecomputedExtents(e);
              throw new h.Z(
                Vt,
                'Layer source does not support fetchUpdates capability',
              );
            },
          );
        }
        getFeatureType(e) {
          const { typeIdField: t, types: r } = this;
          if (!t || !e) return null;
          const i = e.attributes ? e.attributes[t] : void 0;
          if (null == i) return null;
          let s = null;
          return (
            r.some((e) => {
              const { id: t } = e;
              return (
                null != t && (t.toString() === i.toString() && (s = e), !!s)
              );
            }),
            s
          );
        }
        getFieldDomain(e, t) {
          const r = t && t.feature,
            i = this.getFeatureType(r);
          if (i) {
            const t = i.domains && i.domains[e];
            if (t && 'inherited' !== t.type) return t;
          }
          return this._getLayerDomain(e);
        }
        getField(e) {
          return this.fieldsIndex.get(e);
        }
        queryAttachments(e, t) {
          return (
            (e = Dt.Z.from(e)),
            this.load().then(() => {
              if (!this.get('capabilities.data.supportsAttachment'))
                throw new h.Z(Vt, "this layer doesn't support attachments");
              const {
                attachmentTypes: t,
                objectIds: r,
                globalIds: i,
                num: s,
                size: o,
                start: n,
                where: a,
              } = e;
              if (
                !this.get('capabilities.operations.supportsQueryAttachments')
              ) {
                const l = r && r.length > 1,
                  p = t && t.length,
                  u = i && i.length,
                  d = o && o.length;
                if (l || p || u || d || s || n || a)
                  throw new h.Z(
                    Vt,
                    "when 'supportsQueryAttachments' is false, only objectIds of length 1 are supported",
                    e,
                  );
              }
              if (!((r && r.length) || a))
                throw new h.Z(
                  Vt,
                  "'objectIds' or 'where' are required to perform attachment query",
                  e,
                );
              if (!('queryAttachments' in this.source))
                throw new h.Z(
                  Vt,
                  'Layer source does not support queryAttachments capability',
                  e,
                );
              return this.source.queryAttachments(e);
            })
          );
        }
        queryFeatures(e, t) {
          return this.load()
            .then(() =>
              this.source.queryFeatures(Lt.Z.from(e) || this.createQuery(), t),
            )
            .then((e) => {
              if (null != e && e.features)
                for (const t of e.features) t.layer = t.sourceLayer = this;
              return e;
            });
        }
        queryObjectIds(e, t) {
          return this.load().then(() => {
            if (this.source.queryObjectIds)
              return this.source.queryObjectIds(
                Lt.Z.from(e) || this.createQuery(),
                t,
              );
            throw new h.Z(
              Vt,
              'Layer source does not support queryObjectIds capability',
            );
          });
        }
        queryFeatureCount(e, t) {
          return this.load().then(() => {
            if (this.source.queryFeatureCount)
              return this.source.queryFeatureCount(
                Lt.Z.from(e) || this.createQuery(),
                t,
              );
            throw new h.Z(
              Vt,
              'Layer source does not support queryFeatureCount capability',
            );
          });
        }
        queryExtent(e, t) {
          return this.load().then(() => {
            if (this.source.queryExtent)
              return this.source.queryExtent(
                Lt.Z.from(e) || this.createQuery(),
                t,
              );
            throw new h.Z(
              Vt,
              'Layer source does not support queryExtent capability',
            );
          });
        }
        queryRelatedFeatures(e, t) {
          return this.load().then(() => {
            if ('queryRelatedFeatures' in this.source)
              return this.source.queryRelatedFeatures(Zt.Z.from(e), t);
            throw new h.Z(
              Vt,
              'Layer source does not support queryRelatedFeatures capability',
            );
          });
        }
        queryRelatedFeaturesCount(e, t) {
          return this.load().then(() => {
            if ('queryRelatedFeaturesCount' in this.source)
              return this.source.queryRelatedFeaturesCount(Zt.Z.from(e), t);
            throw new h.Z(
              Vt,
              'Layer source does not support queryRelatedFeaturesCount capability',
            );
          });
        }
        queryTopFeatures(e, t) {
          return this.load().then(() => {
            if (
              'queryTopFeatures' in this.source &&
              this.get('capabilities.query.supportsTopFeaturesQuery')
            )
              return this.source.queryTopFeatures(At.Z.from(e), t).then((e) => {
                if (null != e && e.features)
                  for (const t of e.features) t.layer = t.sourceLayer = this;
                return e;
              });
            throw new h.Z(
              Vt,
              'Layer source does not support queryTopFeatures capability',
            );
          });
        }
        queryTopObjectIds(e, t) {
          return this.load().then(() => {
            if (
              'queryTopObjectIds' in this.source &&
              this.get('capabilities.query.supportsTopFeaturesQuery')
            )
              return this.source.queryTopObjectIds(At.Z.from(e), t);
            throw new h.Z(
              Vt,
              'Layer source does not support queryTopObjectIds capability',
            );
          });
        }
        queryTopFeaturesExtent(e, t) {
          return this.load().then(() => {
            if (
              'queryTopExtents' in this.source &&
              this.get('capabilities.query.supportsTopFeaturesQuery')
            )
              return this.source.queryTopExtents(At.Z.from(e), t);
            throw new h.Z(
              Vt,
              'Layer source does not support queryTopExtents capability',
            );
          });
        }
        queryTopFeatureCount(e, t) {
          return this.load().then(() => {
            if (
              'queryTopCount' in this.source &&
              this.get('capabilities.query.supportsTopFeaturesQuery')
            )
              return this.source.queryTopCount(At.Z.from(e), t);
            throw new h.Z(
              Vt,
              'Layer source does not support queryFeatureCount capability',
            );
          });
        }
        read(e, t) {
          const r = e.featureCollection;
          if (r) {
            const e = r.layers;
            e &&
              1 === e.length &&
              (super.read(e[0], t),
              null != r.showLegend &&
                super.read({ showLegend: r.showLegend }, t));
          }
          super.read(e, t),
            t &&
              'service' === t.origin &&
              this.revert(
                ['objectIdField', 'fields', 'timeInfo', 'spatialReference'],
                'service',
              );
        }
        write(e, t) {
          var r, i;
          const s = (t = {
              ...t,
              writeLayerSchema:
                null != (r = null == (i = t) ? void 0 : i.writeLayerSchema)
                  ? r
                  : this._hasMemorySource(),
            }).origin,
            o = t.layerContainerType,
            n = t.messages;
          if (this.isTable) {
            if ('web-scene' === s || ('web-map' === s && 'tables' !== o))
              return (
                n &&
                  n.push(
                    new h.Z(
                      'layer:unsupported',
                      `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a Table source cannot be written to web scenes and web maps`,
                      { layer: this },
                    ),
                  ),
                null
              );
            if (this._hasMemorySource())
              return (
                n &&
                  n.push(
                    new h.Z(
                      'layer:unsupported',
                      `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using an in-memory Table source cannot be written to web scenes and web maps`,
                      { layer: this },
                    ),
                  ),
                null
              );
          } else if (this.loaded && 'web-map' === s && 'tables' === o)
            return (
              n &&
                n.push(
                  new h.Z(
                    'layer:unsupported',
                    `Layer (${this.title}, ${this.id}) of type '${this.declaredClass}' using a non-table source cannot be written to tables in web maps`,
                    { layer: this },
                  ),
                ),
              null
            );
          return super.write(e, t);
        }
        clone() {
          if (this._hasMemorySource())
            throw new h.Z(
              Vt,
              `FeatureLayer (title: ${this.title}, id: ${this.id}) created using in-memory source cannot be cloned`,
            );
          return super.clone();
        }
        serviceSupportsSpatialReference(e) {
          return (
            !!this.loaded &&
            ('memory' === this.source.type || (0, Mt.D)(this, e))
          );
        }
        _readEditingEnabled(e, t, r) {
          var i;
          let s = null == (i = e.layerDefinition) ? void 0 : i.capabilities;
          return s
            ? this._hasEditingCapability(s)
            : ((s = e.capabilities),
              t &&
              'web-map' === (null == r ? void 0 : r.origin) &&
              !this._hasMemorySource() &&
              s
                ? this._hasEditingCapability(s)
                : void 0);
        }
        _hasEditingCapability(e) {
          return e
            .toLowerCase()
            .split(',')
            .map((e) => e.trim())
            .includes('editing');
        }
        _writeEditingEnabled(e, t, r, i) {
          if (!e) {
            var s, o;
            const e =
              null != (s = this.capabilities) &&
              null != (o = s.operations) &&
              o.supportsSync
                ? 'Query,Sync'
                : 'Query';
            (0, _.RB)('layerDefinition.capabilities', e, t),
              !r || (null != i && i.writeLayerSchema) || (t.capabilities = e);
          }
        }
        _checkAttachmentSupport(e) {
          const { attributes: t } = e,
            { objectIdField: r } = this;
          return this.get('capabilities.data.supportsAttachment')
            ? e
              ? t
                ? t[r]
                  ? void 0
                  : Promise.reject(
                      new h.Z(
                        Vt,
                        `feature is missing the identifying attribute ${r}`,
                      ),
                    )
                : Promise.reject(
                    new h.Z(
                      Vt,
                      "'attributes' are required on a feature to query attachments",
                    ),
                  )
              : Promise.reject(
                  new h.Z(
                    Vt,
                    'A feature is required to add/delete/update attachments',
                  ),
                )
            : Promise.reject(
                new h.Z(Vt, "this layer doesn't support attachments"),
              );
        }
        _getLayerDomain(e) {
          const t = this.fieldsIndex.get(e);
          return t ? t.domain : null;
        }
        _fetchFirstLayerId(e) {
          return (0, u.default)(this.url, {
            query: { f: 'json', ...this.customParameters, token: this.apiKey },
            responseType: 'json',
            signal: e,
          }).then((e) => {
            const t = e.data;
            if (t)
              return Array.isArray(t.layers) && t.layers.length > 0
                ? t.layers[0].id
                : Array.isArray(t.tables) && t.tables.length > 0
                ? t.tables[0].id
                : void 0;
          });
        }
        async _initLayerProperties(e) {
          return (
            this._set('source', e),
            e.sourceJSON &&
              ((this.sourceJSON = e.sourceJSON),
              this.read(e.sourceJSON, {
                origin: 'service',
                url: this.parsedUrl,
              })),
            this._verifySource(),
            this._verifyFields(),
            (0, vt.YN)(this.renderer, this.fieldsIndex),
            (0, vt.UF)(this.timeInfo, this.fieldsIndex),
            (0, qt.y)(this, { origin: 'service' })
          );
        }
        async hasDataChanged() {
          var e;
          if (null != (e = this.source) && e.refresh)
            try {
              var t;
              const { dataChanged: e, updates: r } = await (null ==
              (t = this.source)
                ? void 0
                : t.refresh());
              if (
                ((0, v.pC)(r) &&
                  ((this.sourceJSON = { ...this.sourceJSON, ...r }),
                  this.read(r, { origin: 'service', url: this.parsedUrl })),
                e)
              )
                return !0;
            } catch {}
          if (this.definitionExpression)
            try {
              return (
                await (async function (e, t) {
                  const { WhereClause: i } = await Promise.resolve().then(
                    r.bind(r, 41534),
                  );
                  return i.create(e, t);
                })(this.definitionExpression, this.fieldsIndex)
              ).hasDateFunctions;
            } catch {}
          return !1;
        }
        _verifyFields() {
          const e = (this.parsedUrl && this.parsedUrl.path) || 'undefined';
          this.objectIdField ||
            console.log(
              "FeatureLayer: 'objectIdField' property is not defined (url: " +
                e +
                ')',
            ),
            this.isTable ||
              this._hasMemorySource() ||
              -1 !== e.search(/\/FeatureServer\//i) ||
              (this.fields &&
                this.fields.some(function (e) {
                  return 'geometry' === e.type;
                })) ||
              console.log(
                "FeatureLayer: unable to find field of type 'geometry' in the layer 'fields' list. If you are using a map service layer, features will not have geometry (url: " +
                  e +
                  ')',
              );
        }
        _fixTemplates(e, t) {
          e &&
            e.forEach((e) => {
              const r = e.prototype && e.prototype.attributes;
              r && t && delete r[t];
            });
        }
        _verifySource() {
          if (this._hasMemorySource()) {
            if (this.url)
              throw new h.Z(
                'feature-layer:mixed-source-and-url',
                'FeatureLayer cannot be created with both an in-memory source and a url',
              );
          } else if (!this.url)
            throw new h.Z(
              'feature-layer:source-or-url-required',
              'FeatureLayer requires either a url, a valid portal item or a source',
            );
        }
        _initMemorySource(e) {
          e.forEach((e) => {
            (e.layer = this), (e.sourceLayer = this);
          }),
            this._handles.add(
              [
                e.on('after-add', (e) => {
                  (e.item.layer = this), (e.item.sourceLayer = this);
                }),
                e.on('after-remove', (e) => {
                  (e.item.layer = null), (e.item.sourceLayer = null);
                }),
              ],
              'fl-source',
            );
        }
        _resetMemorySource(e) {
          e.forEach((e) => {
            (e.layer = null), (e.sourceLayer = null);
          }),
            this._handles.remove('fl-source');
        }
        _hasMemorySource() {
          return !(this.url || !this.source);
        }
        _readAttachmentCapabilities(e) {
          const t = {
            supportsName: !1,
            supportsSize: !1,
            supportsContentType: !1,
            supportsKeywords: !1,
            supportsExifInfo: !1,
          };
          return (
            e &&
              Array.isArray(e) &&
              e.forEach((e) => {
                const r = Nt[e.name];
                r && (t[r] = !!e.isEnabled);
              }),
            t
          );
        }
        _readDataCapabilities(e) {
          return {
            isVersioned: Ut(e, 'isDataVersioned', !1),
            supportsAttachment: Ut(e, 'hasAttachments', !1),
            supportsM: Ut(e, 'hasM', !1),
            supportsZ: Ut(e, 'hasZ', !1),
          };
        }
        _readMetadataCapabilities(e) {
          return {
            supportsAdvancedFieldProperties: Ut(
              e,
              'supportsFieldDescriptionProperty',
              !1,
            ),
          };
        }
        _readOperationsCapabilities(e, t) {
          const r = e
              ? e
                  .toLowerCase()
                  .split(',')
                  .map((e) => e.trim())
              : [],
            i = r.includes('editing') && !t.datesInUnknownTimezone;
          let s = i && r.includes('create'),
            o = i && r.includes('delete'),
            n = i && r.includes('update');
          const a = r.includes('changetracking');
          return (
            i && !(s || o || n) && (s = o = n = !0),
            {
              supportsCalculate: Ut(t, 'supportsCalculate', !1),
              supportsTruncate: Ut(t, 'supportsTruncate', !1),
              supportsValidateSql: Ut(t, 'supportsValidateSql', !1),
              supportsAdd: s,
              supportsDelete: o,
              supportsEditing: i,
              supportsChangeTracking: a,
              supportsQuery: r.includes('query'),
              supportsQueryAttachments: Ut(
                t.advancedQueryCapabilities,
                'supportsQueryAttachments',
                !1,
              ),
              supportsResizeAttachments: Ut(
                t,
                'supportsAttachmentsResizing',
                !1,
              ),
              supportsSync: r.includes('sync'),
              supportsUpdate: n,
              supportsExceedsLimitStatistics: Ut(
                t,
                'supportsExceedsLimitStatistics',
                !1,
              ),
            }
          );
        }
        _readQueryCapabilities(e) {
          var t;
          const r = e.advancedQueryCapabilities,
            i = e.ownershipBasedAccessControlForFeatures,
            s = e.archivingInfo,
            o = null == (t = this.url) ? void 0 : t.includes('MapServer'),
            n = !(0, f.Z)('mapserver-pbf-enabled') && o && this.version < 10.81,
            a = (0, ct.M8)(this.url),
            l = (e.supportedQueryFormats || '').split(',').reduce((e, t) => {
              const r = t.toLowerCase().trim();
              return r && e.add(r), e;
            }, new Set());
          return {
            supportsStatistics: Ut(
              r,
              'supportsStatistics',
              e.supportsStatistics,
            ),
            supportsPercentileStatistics: Ut(
              r,
              'supportsPercentileStatistics',
              !1,
            ),
            supportsSpatialAggregationStatistics: Ut(
              r,
              'supportsSpatialAggregationStatistics',
              !1,
            ),
            supportedSpatialAggregationStatistics: Jt(r),
            supportsCentroid: Ut(r, 'supportsReturningGeometryCentroid', !1),
            supportsDistance: Ut(r, 'supportsQueryWithDistance', !1),
            supportsDistinct: Ut(
              r,
              'supportsDistinct',
              e.supportsAdvancedQueries,
            ),
            supportsExtent: Ut(r, 'supportsReturningQueryExtent', !1),
            supportsGeometryProperties: Ut(
              r,
              'supportsReturningGeometryProperties',
              !1,
            ),
            supportsHavingClause: Ut(r, 'supportsHavingClause', !1),
            supportsOrderBy: Ut(
              r,
              'supportsOrderBy',
              e.supportsAdvancedQueries,
            ),
            supportsPagination: Ut(r, 'supportsPagination', !1),
            supportsQuantization: Ut(e, 'supportsCoordinatesQuantization', !1),
            supportsQuantizationEditMode: Ut(
              e,
              'supportsQuantizationEditMode',
              !1,
            ),
            supportsQueryGeometry: Ut(e, 'supportsReturningQueryGeometry', !1),
            supportsResultType: Ut(r, 'supportsQueryWithResultType', !1),
            supportsMaxRecordCountFactor: Ut(
              r,
              'supportsMaxRecordCountFactor',
              !1,
            ),
            supportsSqlExpression: Ut(r, 'supportsSqlExpression', !1),
            supportsStandardizedQueriesOnly: Ut(
              e,
              'useStandardizedQueries',
              !1,
            ),
            supportsTopFeaturesQuery: Ut(r, 'supportsTopFeaturesQuery', !1),
            supportsQueryByOthers: Ut(i, 'allowOthersToQuery', !0),
            supportsHistoricMoment: Ut(
              s,
              'supportsQueryWithHistoricMoment',
              !1,
            ),
            supportsFormatPBF: !n && l.has('pbf'),
            supportsDisjointSpatialRelationship: Ut(
              r,
              'supportsDisjointSpatialRel',
              !1,
            ),
            supportsCacheHint: Ut(r, 'supportsQueryWithCacheHint', !1),
            supportsDefaultSpatialReference: Ut(r, 'supportsDefaultSR', !1),
            supportsCompactGeometry: a,
            maxRecordCountFactor: Bt(e, 'maxRecordCountFactor', void 0),
            maxRecordCount: Bt(e, 'maxRecordCount', void 0),
            standardMaxRecordCount: Bt(e, 'standardMaxRecordCount', void 0),
            tileMaxRecordCount: Bt(e, 'tileMaxRecordCount', void 0),
          };
        }
        _readQueryRelatedCapabilities(e) {
          const t = e.advancedQueryCapabilities,
            r = Ut(t, 'supportsAdvancedQueryRelated', !1);
          return {
            supportsPagination: Ut(t, 'supportsQueryRelatedPagination', !1),
            supportsCount: r,
            supportsOrderBy: r,
          };
        }
        _readEditingCapabilities(e) {
          const t = e.ownershipBasedAccessControlForFeatures;
          return {
            supportsGeometryUpdate: Ut(e, 'allowGeometryUpdates', !0),
            supportsGlobalId: Ut(e, 'supportsApplyEditsWithGlobalIds', !1),
            supportsReturnServiceEditsInSourceSpatialReference: Ut(
              e,
              'supportsReturnServiceEditsInSourceSR',
              !1,
            ),
            supportsRollbackOnFailure: Ut(
              e,
              'supportsRollbackOnFailureParameter',
              !1,
            ),
            supportsUpdateWithoutM: Ut(e, 'allowUpdateWithoutMValues', !1),
            supportsUploadWithItemId: Ut(
              e,
              'supportsAttachmentsByUploadId',
              !1,
            ),
            supportsDeleteByAnonymous: Ut(t, 'allowAnonymousToDelete', !0),
            supportsDeleteByOthers: Ut(t, 'allowOthersToDelete', !0),
            supportsUpdateByAnonymous: Ut(t, 'allowAnonymousToUpdate', !0),
            supportsUpdateByOthers: Ut(t, 'allowOthersToUpdate', !0),
          };
        }
      };
      (0, s._)(
        [(0, I.Cb)({ readOnly: !0, json: { read: !1 } })],
        Ht.prototype,
        'capabilities',
        void 0,
      ),
        (0, s._)(
          [
            (0, F.r)('service', 'capabilities', [
              'advancedQueryCapabilities',
              'allowGeometryUpdates',
              'allowUpdateWithoutMValues',
              'archivingInfo',
              'capabilities',
              'datesInUnknownTimezone',
              'hasAttachments',
              'hasM',
              'hasZ',
              'maxRecordCount',
              'maxRecordCountFactor',
              'ownershipBasedAccessControlForFeatures',
              'standardMaxRecordCount',
              'supportedQueryFormats',
              'supportsAdvancedQueries',
              'supportsApplyEditsWithGlobalIds',
              'supportsAttachmentsByUploadId',
              'supportsAttachmentsResizing',
              'supportsCalculate',
              'supportsCoordinatesQuantization',
              'supportsExceedsLimitStatistics',
              'supportsFieldDescriptionProperty',
              'supportsQuantizationEditMode',
              'supportsRollbackOnFailureParameter',
              'supportsStatistics',
              'supportsTruncate',
              'supportsValidateSql',
              'tileMaxRecordCount',
              'useStandardizedQueries',
            ]),
          ],
          Ht.prototype,
          'readCapabilities',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              json: {
                origins: {
                  'portal-item': { write: !0 },
                  'web-map': { write: !0 },
                },
              },
            }),
          ],
          Ht.prototype,
          'charts',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'createQueryVersion',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: {
                read: { source: 'layerDefinition.copyrightText' },
                origins: { service: { read: { source: 'copyrightText' } } },
              },
            }),
          ],
          Ht.prototype,
          'copyright',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean })],
          Ht.prototype,
          'datesInUnknownTimezone',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: {
                read: { source: 'layerDefinition.displayField' },
                origins: { service: { read: { source: 'displayField' } } },
              },
            }),
          ],
          Ht.prototype,
          'displayField',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: {
                origins: { service: { read: !1, write: !1 } },
                name: 'layerDefinition.definitionExpression',
                write: { enabled: !0, allowNull: !0 },
              },
            }),
          ],
          Ht.prototype,
          'definitionExpression',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ types: d.LB, readOnly: !0 })],
          Ht.prototype,
          'defaultSymbol',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Rt.n })],
          Ht.prototype,
          'dynamicDataSource',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'editFieldsInfo',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean })],
          Ht.prototype,
          'editingEnabled',
          null,
        ),
        (0, s._)(
          [
            (0, F.r)(['portal-item', 'web-scene'], 'editingEnabled', [
              'layerDefinition.capabilities',
            ]),
          ],
          Ht.prototype,
          'readEditingEnabled',
          null,
        ),
        (0, s._)(
          [
            (0, F.r)('web-map', 'editingEnabled', [
              'capabilities',
              'layerDefinition.capabilities',
            ]),
          ],
          Ht.prototype,
          'readEditingEnabledFromWebMap',
          null,
        ),
        (0, s._)(
          [
            (0, T.c)(['portal-item', 'web-scene'], 'editingEnabled', {
              'layerDefinition.capabilities': { type: String },
            }),
          ],
          Ht.prototype,
          'writeEditingEnabled',
          null,
        ),
        (0, s._)(
          [
            (0, T.c)('web-map', 'editingEnabled', {
              capabilities: { type: String },
              'layerDefinition.capabilities': { type: String },
            }),
          ],
          Ht.prototype,
          'writeEditingEnabledToWebMap',
          null,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'editingInfo',
          void 0,
        ),
        (0, s._)(
          [(0, F.r)('editingInfo')],
          Ht.prototype,
          'readEditingInfo',
          null,
        ),
        (0, s._)([(0, I.Cb)(yt.PV)], Ht.prototype, 'elevationInfo', void 0),
        (0, s._)([(0, I.Cb)(mt.d)], Ht.prototype, 'featureReduction', void 0),
        (0, s._)(
          [
            (0, I.Cb)({
              ...Wt.fields,
              json: {
                read: { source: 'layerDefinition.fields' },
                origins: {
                  service: { name: 'fields' },
                  'web-map': {
                    write: {
                      target: 'layerDefinition.fields',
                      overridePolicy: zt,
                    },
                  },
                },
              },
            }),
          ],
          Ht.prototype,
          'fields',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)(Wt.fieldsIndex)],
          Ht.prototype,
          'fieldsIndex',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: xt.Z,
              json: {
                read: { source: 'layerDefinition.floorInfo' },
                write: { target: 'layerDefinition.floorInfo' },
              },
            }),
          ],
          Ht.prototype,
          'floorInfo',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: De,
              json: {
                name: 'formInfo',
                write: !0,
                origins: { 'web-scene': { read: !1, write: !1 } },
              },
            }),
          ],
          Ht.prototype,
          'formTemplate',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: Le.Z,
              json: {
                origins: { service: { read: { source: 'extent' } } },
                read: { source: 'layerDefinition.extent' },
              },
            }),
          ],
          Ht.prototype,
          'fullExtent',
          void 0,
        ),
        (0, s._)([(0, I.Cb)()], Ht.prototype, 'gdbVersion', void 0),
        (0, s._)(
          [
            (0, I.Cb)({
              readOnly: !0,
              type: Ct,
              json: { read: { source: 'geometryProperties' } },
            }),
          ],
          Ht.prototype,
          'geometryFieldsInfo',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: [
                'point',
                'polygon',
                'polyline',
                'multipoint',
                'multipatch',
                'mesh',
              ],
              json: {
                origins: {
                  service: { read: Gt.read },
                  'web-map': {
                    write: {
                      target: 'layerDefinition.geometryType',
                      overridePolicy: zt,
                      writer(e, t, r) {
                        const i = e ? Gt.toJSON(e) : null;
                        i && (0, _.RB)(r, i, t);
                      },
                    },
                  },
                },
                read: {
                  source: 'layerDefinition.geometryType',
                  reader: Gt.read,
                },
              },
            }),
          ],
          Ht.prototype,
          'geometryType',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: Boolean,
              json: {
                origins: { service: { read: !0 } },
                read: { source: 'layerDefinition.hasM' },
              },
            }),
          ],
          Ht.prototype,
          'hasM',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: Boolean,
              json: {
                origins: { service: { read: !0 } },
                read: { source: 'layerDefinition.hasZ' },
              },
            }),
          ],
          Ht.prototype,
          'hasZ',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0, type: Ze.Z })],
          Ht.prototype,
          'heightModelInfo',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Date })],
          Ht.prototype,
          'historicMoment',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(yt.id)], Ht.prototype, 'id', void 0),
        (0, s._)(
          [
            (0, I.Cb)({
              readOnly: !0,
              json: { origins: { service: { read: !0 } }, read: !1 },
            }),
          ],
          Ht.prototype,
          'infoFor3D',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              readOnly: !0,
              json: {
                origins: {
                  'web-map': { write: { target: 'layerDefinition.type' } },
                },
              },
            }),
          ],
          Ht.prototype,
          'isTable',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('service', 'isTable', ['type', 'geometryType']),
            (0, F.r)('isTable', [
              'layerDefinition.type',
              'layerDefinition.geometryType',
            ]),
          ],
          Ht.prototype,
          'readIsTable',
          null,
        ),
        (0, s._)(
          [(0, T.c)('web-map', 'isTable')],
          Ht.prototype,
          'writeIsTable',
          null,
        ),
        (0, s._)([(0, I.Cb)(yt.iR)], Ht.prototype, 'labelsVisible', void 0),
        (0, s._)(
          [
            (0, I.Cb)({
              type: [St.Z],
              json: {
                origins: {
                  service: {
                    read: { source: 'drawingInfo.labelingInfo', reader: It.r },
                    write: { target: 'drawingInfo.labelingInfo', enabled: !1 },
                  },
                },
                read: {
                  source: 'layerDefinition.drawingInfo.labelingInfo',
                  reader: It.r,
                },
                write: { target: 'layerDefinition.drawingInfo.labelingInfo' },
              },
            }),
          ],
          Ht.prototype,
          'labelingInfo',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(yt.bT)], Ht.prototype, 'opacity', void 0),
        (0, s._)(
          [
            (0, I.Cb)({
              type: Number,
              json: {
                origins: { service: { read: { source: 'id' } } },
                read: !1,
              },
            }),
          ],
          Ht.prototype,
          'layerId',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(yt.rn)], Ht.prototype, 'legendEnabled', void 0),
        (0, s._)(
          [(0, I.Cb)({ type: ['show', 'hide'] })],
          Ht.prototype,
          'listMode',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(yt.rO)], Ht.prototype, 'minScale', void 0),
        (0, s._)(
          [(0, F.r)('service', 'minScale', ['minScale', 'effectiveMinScale'])],
          Ht.prototype,
          'readMinScale',
          null,
        ),
        (0, s._)([(0, I.Cb)(yt.u1)], Ht.prototype, 'maxScale', void 0),
        (0, s._)(
          [(0, F.r)('service', 'maxScale', ['maxScale', 'effectiveMaxScale'])],
          Ht.prototype,
          'readMaxScale',
          null,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String })],
          Ht.prototype,
          'globalIdField',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('globalIdField', [
              'layerDefinition.globalIdField',
              'layerDefinition.fields',
            ]),
            (0, F.r)('service', 'globalIdField', ['globalIdField', 'fields']),
          ],
          Ht.prototype,
          'readGlobalIdFieldFromService',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: {
                origins: {
                  'web-map': {
                    write: {
                      target: 'layerDefinition.objectIdField',
                      overridePolicy: zt,
                    },
                  },
                },
              },
            }),
          ],
          Ht.prototype,
          'objectIdField',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('objectIdField', [
              'layerDefinition.objectIdField',
              'layerDefinition.fields',
            ]),
            (0, F.r)('service', 'objectIdField', ['objectIdField', 'fields']),
          ],
          Ht.prototype,
          'readObjectIdFieldFromService',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              value: 'ArcGISFeatureLayer',
              type: ['ArcGISFeatureLayer'],
            }),
          ],
          Ht.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(Wt.outFields)], Ht.prototype, 'outFields', void 0),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'parsedUrl',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: {
                origins: { 'web-scene': { read: !0, write: !0 } },
                read: !1,
              },
            }),
          ],
          Ht.prototype,
          'path',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(yt.C_)], Ht.prototype, 'popupEnabled', void 0),
        (0, s._)(
          [(0, I.Cb)({ type: o.Z, json: { name: 'popupInfo', write: !0 } })],
          Ht.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: [jt], readOnly: !0 })],
          Ht.prototype,
          'relationships',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              types: p.A,
              json: {
                origins: {
                  service: {
                    write: { target: 'drawingInfo.renderer', enabled: !1 },
                  },
                  'web-scene': {
                    types: p.o,
                    name: 'layerDefinition.drawingInfo.renderer',
                    write: {
                      overridePolicy: (e, t, r) => ({
                        ignoreOrigin: null == r ? void 0 : r.writeLayerSchema,
                      }),
                    },
                  },
                },
                write: {
                  target: 'layerDefinition.drawingInfo.renderer',
                  overridePolicy: (e, t, r) => ({
                    ignoreOrigin: null == r ? void 0 : r.writeLayerSchema,
                  }),
                },
              },
            }),
          ],
          Ht.prototype,
          'renderer',
          null,
        ),
        (0, s._)(
          [
            (0, F.r)('service', 'renderer', [
              'drawingInfo.renderer',
              'defaultSymbol',
            ]),
            (0, F.r)('renderer', [
              'layerDefinition.drawingInfo.renderer',
              'layerDefinition.defaultSymbol',
            ]),
          ],
          Ht.prototype,
          'readRenderer',
          null,
        ),
        (0, s._)([(0, I.Cb)()], Ht.prototype, 'sourceJSON', void 0),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean })],
          Ht.prototype,
          'returnM',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Boolean })],
          Ht.prototype,
          'returnZ',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)(yt.YI)],
          Ht.prototype,
          'screenSizePerspectiveEnabled',
          void 0,
        ),
        (0, s._)([(0, I.Cb)({ clonable: !1 })], Ht.prototype, 'source', null),
        (0, s._)([(0, x.p)('source')], Ht.prototype, 'castSource', null),
        (0, s._)(
          [
            (0, F.r)('portal-item', 'source', ['featureSet']),
            (0, F.r)('web-map', 'source', ['featureSet']),
          ],
          Ht.prototype,
          'readSource',
          null,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'serviceDefinitionExpression',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('service', 'serviceDefinitionExpression', [
              'definitionQuery',
              'definitionExpression',
            ]),
          ],
          Ht.prototype,
          'readServiceDefinitionExpression',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: Ae.Z,
              json: {
                origins: {
                  service: { read: { source: 'extent.spatialReference' } },
                },
                read: { source: 'layerDefinition.extent.spatialReference' },
              },
            }),
          ],
          Ht.prototype,
          'spatialReference',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: Number })],
          Ht.prototype,
          'subtypeCode',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: [ft.Z] })],
          Ht.prototype,
          'templates',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('templates', [
              'editFieldsInfo',
              'creatorField',
              'editorField',
              'templates',
            ]),
          ],
          Ht.prototype,
          'readTemplates',
          null,
        ),
        (0, s._)([(0, I.Cb)({ type: Ot.Z })], Ht.prototype, 'timeInfo', void 0),
        (0, s._)([(0, I.Cb)()], Ht.prototype, 'title', void 0),
        (0, s._)(
          [
            (0, F.r)('service', 'title', ['name']),
            (0, F.r)('portal-item', 'title', [
              'layerDefinition.title',
              'layerDefinition.name',
              'title',
            ]),
          ],
          Ht.prototype,
          'readTitle',
          null,
        ),
        (0, s._)(
          [(0, F.r)('web-map', 'title', ['layerDefinition.name', 'title'])],
          Ht.prototype,
          'readTitleFromWebMap',
          null,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String })],
          Ht.prototype,
          'sublayerTitleMode',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: String,
              json: { read: { source: 'timeInfo.trackIdField' } },
            }),
          ],
          Ht.prototype,
          'trackIdField',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ json: { read: !1 } })],
          Ht.prototype,
          'type',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: String })],
          Ht.prototype,
          'typeIdField',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('service', 'typeIdField'),
            (0, F.r)('typeIdField', ['layerDefinition.typeIdField']),
          ],
          Ht.prototype,
          'readTypeIdField',
          null,
        ),
        (0, s._)([(0, I.Cb)({ type: [bt.Z] })], Ht.prototype, 'types', void 0),
        (0, s._)(
          [
            (0, F.r)('service', 'types', ['types']),
            (0, F.r)('types', ['layerDefinition.types']),
          ],
          Ht.prototype,
          'readTypes',
          null,
        ),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0, json: { write: !1 } })],
          Ht.prototype,
          'serverGens',
          void 0,
        ),
        (0, s._)(
          [(0, I.Cb)({ type: y.Z.ofType(ht), readOnly: !0 })],
          Ht.prototype,
          'indexes',
          void 0,
        ),
        (0, s._)([(0, I.Cb)(yt.HQ)], Ht.prototype, 'url', null),
        (0, s._)([(0, T.c)('url')], Ht.prototype, 'writeUrl', null),
        (0, s._)(
          [(0, I.Cb)({ readOnly: !0 })],
          Ht.prototype,
          'userIsAdmin',
          void 0,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              json: { origins: { service: { read: !0 } }, read: !1 },
            }),
          ],
          Ht.prototype,
          'version',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('service', 'version', [
              'currentVersion',
              'capabilities',
              'drawingInfo',
              'hasAttachments',
              'htmlPopupType',
              'relationships',
              'timeInfo',
              'typeIdField',
              'types',
            ]),
          ],
          Ht.prototype,
          'readVersion',
          null,
        ),
        (0, s._)(
          [
            (0, I.Cb)({
              type: Boolean,
              json: {
                origins: {
                  'portal-item': {
                    write: { target: 'layerDefinition.defaultVisibility' },
                  },
                },
              },
            }),
          ],
          Ht.prototype,
          'visible',
          void 0,
        ),
        (0, s._)(
          [
            (0, F.r)('portal-item', 'visible', [
              'visibility',
              'layerDefinition.defaultVisibility',
            ]),
          ],
          Ht.prototype,
          'readVisible',
          null,
        ),
        (Ht = (0, s._)([(0, E.j)('esri.layers.FeatureLayer')], Ht));
      const $t = (0, j.d)({ types: d.QT }),
        Kt = Ht;
    },
    68825: (e, t, r) => {
      r.d(t, { c: () => m });
      var i,
        s = r(43697),
        o = r(78286),
        n = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011)),
        l = r(35454),
        p = r(96674);
      const u = new l.X({ asc: 'ascending', desc: 'descending' });
      let d = (i = class extends p.wq {
        constructor(e) {
          super(e),
            (this.field = null),
            (this.valueExpression = null),
            (this.order = 'ascending');
        }
        clone() {
          return new i({
            field: this.field,
            valueExpression: this.valueExpression,
            order: this.order,
          });
        }
      });
      (0, s._)(
        [(0, n.Cb)({ type: String, json: { write: !0 } })],
        d.prototype,
        'field',
        void 0,
      ),
        (0, s._)(
          [(0, n.Cb)({ type: String, json: { write: !0 } })],
          d.prototype,
          'valueExpression',
          void 0,
        ),
        (0, s._)(
          [
            (0, n.Cb)({
              type: u.apiValues,
              json: { read: u.read, write: u.write },
            }),
          ],
          d.prototype,
          'order',
          void 0,
        ),
        (d = i = (0, s._)([(0, a.j)('esri.layers.support.OrderByInfo')], d));
      const c = d;
      function y(e, t, r) {
        if (!e) return null;
        const i = e.find((e) => !!e.field);
        if (!i) return null;
        const s = new c();
        return s.read(i, r), [s];
      }
      function h(e, t, r, i) {
        const s = e.find((e) => !!e.field);
        s && (0, o.RB)(r, [s.toJSON()], t);
      }
      const m = (e) => {
        let t = class extends e {
          constructor() {
            super(...arguments), (this.orderBy = null);
          }
        };
        return (
          (0, s._)(
            [
              (0, n.Cb)({
                type: [c],
                json: {
                  origins: { 'web-scene': { write: !1, read: !1 } },
                  read: { source: 'layerDefinition.orderBy', reader: y },
                  write: { target: 'layerDefinition.orderBy', writer: h },
                },
              }),
            ],
            t.prototype,
            'orderBy',
            void 0,
          ),
          (t = (0, s._)([(0, a.j)('esri.layers.mixins.OrderedLayer')], t)),
          t
        );
      };
    },
    40555: (e, t, r) => {
      r.d(t, { y: () => n });
      var i = r(66643),
        s = r(95330),
        o = r(20941);
      async function n(e, t, r) {
        const n = e && e.getAtOrigin && e.getAtOrigin('renderer', t.origin);
        if (n && 'unique-value' === n.type && n.styleOrigin) {
          const a = await (0, i.q6)(n.populateFromStyle());
          if (((0, s.k_)(r), !1 === a.ok)) {
            const r = a.error;
            t &&
              t.messages &&
              t.messages.push(
                new o.Z(
                  'renderer:style-reference',
                  `Failed to create unique value renderer from style reference: ${r.message}`,
                  { error: r, context: t },
                ),
              ),
              e.clear('renderer', t.origin);
          }
        }
      }
    },
    59431: (e, t, r) => {
      r.d(t, { P: () => a });
      var i = r(70586),
        s = r(67900),
        o = r(8744);
      function n(e, t, r) {
        if (null == e.hasM || e.hasZ)
          for (const e of t) for (const t of e) t.length > 2 && (t[2] *= r);
      }
      function a(e, t, r) {
        if ((!e && !t) || !r) return;
        const i = (0, s._R)(r);
        l(e, r, i), l(t, r, i);
      }
      function l(e, t, r) {
        if (e) for (const i of e) p(i.geometry, t, r);
      }
      function p(e, t, r) {
        if (
          (0, i.Wi)(e) ||
          !e.spatialReference ||
          (0, o.fS)(e.spatialReference, t)
        )
          return;
        const a = (0, s._R)(e.spatialReference) / r;
        if (1 !== a)
          if ('x' in e) null != e.z && (e.z *= a);
          else if ('rings' in e) n(e, e.rings, a);
          else if ('paths' in e) n(e, e.paths, a);
          else if ('points' in e && (null == e.hasM || e.hasZ))
            for (const t of e.points) t.length > 2 && (t[2] *= a);
      }
    },
  },
]);
