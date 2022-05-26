'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6841],
  {
    36841: (a, e, i) => {
      i.r(e),
        i.d(e, {
          classBreaks: () => m,
          histogram: () => f,
          summaryStatistics: () => s,
          uniqueValues: () => u,
        }),
        i(20102);
      var n = i(82971),
        t = (i(35671), i(8418)),
        l = i(59266);
      let o = null;
      async function r(a, e) {
        if (!e) return [];
        const i = a.field,
          r = a.valueExpression,
          s = a.normalizationType,
          u = a.normalizationField,
          m = a.normalizationTotal,
          f = [],
          c = a.viewInfoParams;
        let d = null,
          p = null;
        if (r) {
          if (!o) {
            const { arcadeUtils: a } = await (0, l.LC)();
            o = a;
          }
          (d = o.createFunction(r)),
            (p =
              c &&
              o.getViewInfo({
                viewingMode: c.viewingMode,
                scale: c.scale,
                spatialReference: new n.Z(c.spatialReference),
              }));
        }
        return (
          e.forEach((a) => {
            const e = a.attributes;
            let n;
            if (r) {
              const e = o.createExecContext(a, p);
              n = o.executeFunction(d, e);
            } else e && (n = e[i]);
            if (s && isFinite(n)) {
              const a = e && parseFloat(e[u]);
              n = (0, t.fk)(n, s, a, m);
            }
            f.push(n);
          }),
          f
        );
      }
      async function s(a) {
        const { attribute: e, features: i } = a,
          {
            normalizationType: n,
            normalizationField: l,
            minValue: o,
            maxValue: s,
            fieldType: u,
          } = e,
          m = await r(
            {
              field: e.field,
              valueExpression: e.valueExpression,
              normalizationType: n,
              normalizationField: l,
              normalizationTotal: e.normalizationTotal,
              viewInfoParams: e.viewInfoParams,
            },
            i,
          ),
          f = (0, t.S5)({
            normalizationType: n,
            normalizationField: l,
            minValue: o,
            maxValue: s,
          }),
          c = { value: 0.5, fieldType: u },
          d =
            'esriFieldTypeString' === u
              ? (0, t.H0)({
                  values: m,
                  supportsNullCount: f,
                  percentileParams: c,
                })
              : (0, t.i5)({
                  values: m,
                  minValue: o,
                  maxValue: s,
                  useSampleStdDev: !n,
                  supportsNullCount: f,
                  percentileParams: c,
                });
        return (0, t.F_)(d, 'esriFieldTypeDate' === u);
      }
      async function u(a) {
        const { attribute: e, features: i } = a,
          n = await r(
            {
              field: e.field,
              valueExpression: e.valueExpression,
              viewInfoParams: e.viewInfoParams,
            },
            i,
          ),
          l = (0, t.eT)(n);
        return (0, t.Qm)(l, e.domain, e.returnAllCodedValues);
      }
      async function m(a) {
        const { attribute: e, features: i } = a,
          {
            field: n,
            normalizationType: l,
            normalizationField: o,
            normalizationTotal: s,
            classificationMethod: u,
          } = e,
          m = await r(
            {
              field: n,
              valueExpression: e.valueExpression,
              normalizationType: l,
              normalizationField: o,
              normalizationTotal: s,
              viewInfoParams: e.viewInfoParams,
            },
            i,
          ),
          f = (0, t.G2)(m, {
            field: n,
            normalizationType: l,
            normalizationField: o,
            normalizationTotal: s,
            classificationMethod: u,
            standardDeviationInterval: e.standardDeviationInterval,
            numClasses: e.numClasses,
            minValue: e.minValue,
            maxValue: e.maxValue,
          });
        return (0, t.DL)(f, u);
      }
      async function f(a) {
        const { attribute: e, features: i } = a,
          {
            field: n,
            normalizationType: l,
            normalizationField: o,
            normalizationTotal: s,
            classificationMethod: u,
          } = e,
          m = await r(
            {
              field: n,
              valueExpression: e.valueExpression,
              normalizationType: l,
              normalizationField: o,
              normalizationTotal: s,
              viewInfoParams: e.viewInfoParams,
            },
            i,
          );
        return (0, t.oF)(m, {
          field: n,
          normalizationType: l,
          normalizationField: o,
          normalizationTotal: s,
          classificationMethod: u,
          standardDeviationInterval: e.standardDeviationInterval,
          numBins: e.numBins,
          minValue: e.minValue,
          maxValue: e.maxValue,
        });
      }
    },
  },
]);
