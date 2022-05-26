'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7682],
  {
    91040: (e, t, i) => {
      i.d(t, { yZ: () => n });
      var r = i(67900);
      function n(e, t) {
        const i = t || e.extent,
          n = e.width,
          s = (0, r.c9)(i && i.spatialReference);
        return i && n ? (i.width / n) * s * r.hd * 96 : 0;
      }
    },
    510: (e, t, i) => {
      i.r(t), i.d(t, { default: () => Ct });
      var r,
        n = i(43697),
        s = i(51773),
        a = i(70586),
        o = i(16453),
        l = i(95330),
        u = i(5600),
        p = (i(67676), i(80442), i(75215)),
        c = i(52011),
        m = i(30556),
        d = i(29600),
        h = i(66577),
        y = i(38171),
        f = i(30030),
        g = i(3172),
        b = i(20102),
        v = i(35454),
        R = i(22974),
        w = i(92604),
        _ = i(17452),
        S = i(44422),
        C = i(71715),
        x = i(21506),
        I = i(35956),
        F = i(96674),
        N = i(36030);
      const T = new Set(['raster', 'raster2', 'dem', 'fillraster']),
        D = new Set(['rasters']),
        P = (e) => (e && e.rasterFunction ? A.fromJSON(e) : e),
        O = (e) => (e && e instanceof A ? e.toJSON() : e),
        j = (e) => (null == e ? void 0 : e.functionName) && !e.declaredClass,
        V = (e) => (j(e) ? new A(e) : e);
      let A = (r = class extends F.wq {
        constructor(e) {
          super(e),
            (this.functionName = null),
            (this.outputPixelType = 'unknown'),
            (this.variableName = null),
            (this.rasterFunctionDefinition = null);
        }
        set functionArguments(e) {
          if (e) {
            const t = Object.keys(e);
            if (
              t.some((t) => T.has(t.toLowerCase()) && j(e[t])) ||
              t.some(
                (t) =>
                  D.has(t.toLowerCase()) &&
                  Array.isArray(e[t]) &&
                  e[t].some((e) => j(e)),
              )
            ) {
              e = (0, R.d9)(e);
              for (const i of t)
                T.has(i.toLowerCase())
                  ? (e[i] = V(e[i]))
                  : D.has(i.toLowerCase()) &&
                    Array.isArray(e[i]) &&
                    (e[i] = e[i].map((e) => V(e)));
            }
          }
          this._set('functionArguments', e);
        }
        readFunctionArguments(e) {
          return ((e) => {
            if (null == e) return null;
            e = (0, R.d9)(e);
            const t = {};
            for (const i of Object.keys(e))
              T.has(i.toLowerCase())
                ? (t[i] = P(e[i]))
                : D.has(i.toLowerCase()) && Array.isArray(e[i])
                ? (t[i] = e[i].map(P))
                : (t[i] = e[i]);
            return t;
          })(e);
        }
        writeFunctionArguments(e, t, i) {
          const r = {};
          for (const t of Object.keys(e))
            T.has(t.toLowerCase())
              ? (r[t] = O(e[t]))
              : D.has(t.toLowerCase()) && Array.isArray(e[t])
              ? (r[t] = e[t].map(O))
              : (r[t] = O(e[t]));
          t[i] = r;
        }
        readFunctionName(e, t) {
          const i = t.rasterFunctionInfos;
          return (
            t.name ||
            (i && i.length && 'None' !== i[0].name
              ? i[0].name
              : t.rasterFunctionDefinition
              ? t.rasterFunctionDefinition.name
              : t.rasterFunction)
          );
        }
        clone() {
          return new r({
            functionName: this.functionName,
            functionArguments: (0, R.d9)(this.functionArguments),
            outputPixelType: this.outputPixelType,
            variableName: this.variableName,
            rasterFunctionDefinition: (0, R.d9)(this.rasterFunctionDefinition),
          });
        }
      });
      (0, n._)(
        [
          (0, u.Cb)({
            json: { type: Object, name: 'rasterFunctionArguments' },
          }),
        ],
        A.prototype,
        'functionArguments',
        null,
      ),
        (0, n._)(
          [(0, C.r)('functionArguments')],
          A.prototype,
          'readFunctionArguments',
          null,
        ),
        (0, n._)(
          [(0, m.c)('functionArguments')],
          A.prototype,
          'writeFunctionArguments',
          null,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              json: { type: String, write: { target: 'rasterFunction' } },
            }),
          ],
          A.prototype,
          'functionName',
          void 0,
        ),
        (0, n._)(
          [
            (0, C.r)('functionName', [
              'rasterFunction',
              'rasterFunctionInfos',
              'rasterFunctionDefinition',
            ]),
          ],
          A.prototype,
          'readFunctionName',
          null,
        ),
        (0, n._)(
          [
            (0, N.J)(
              {
                C128: 'c128',
                C64: 'c64',
                F32: 'f32',
                F64: 'f64',
                S16: 's16',
                S32: 's32',
                S8: 's8',
                U1: 'u1',
                U16: 'u16',
                U2: 'u2',
                U32: 'u32',
                U4: 'u4',
                U8: 'u8',
                UNKNOWN: 'unknown',
              },
              { ignoreUnknown: !1 },
            ),
            (0, u.Cb)({ json: { default: 'unknown' } }),
          ],
          A.prototype,
          'outputPixelType',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: String, json: { read: !0, write: !0 } })],
          A.prototype,
          'variableName',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Object,
              json: { name: 'rasterFunctionDefinition' },
            }),
          ],
          A.prototype,
          'rasterFunctionDefinition',
          void 0,
        ),
        (A = r = (0, n._)([(0, c.j)('esri.layers.support.RasterFunction')], A));
      const M = A,
        J = {
          StretchFunction: {
            arguments: {
              ComputeGamma: {
                isDataset: !1,
                isPublic: !1,
                name: 'ComputeGamma',
                type: 'RasterFunctionVariable',
                value: !1,
              },
              DRA: {
                isDataset: !1,
                isPublic: !1,
                name: 'DRA',
                type: 'RasterFunctionVariable',
                value: !1,
              },
              EstimateStatsHistogram: {
                isDataset: !1,
                isPublic: !1,
                name: 'EstimateStatsHistogram',
                type: 'RasterFunctionVariable',
                value: !1,
              },
              Gamma: {
                displayName: 'Gamma',
                isDataset: !1,
                isPublic: !1,
                name: 'Gamma',
                type: 'RasterFunctionVariable',
              },
              Histograms: {
                isDataset: !1,
                isPublic: !1,
                name: 'Histograms',
                type: 'RasterFunctionVariable',
              },
              Max: {
                isDataset: !1,
                isPublic: !1,
                name: 'Max',
                type: 'RasterFunctionVariable',
                value: 255,
              },
              MaxPercent: {
                isDataset: !1,
                isPublic: !1,
                name: 'MaxPercent',
                type: 'RasterFunctionVariable',
                value: 0.5,
              },
              Min: {
                isDataset: !1,
                isPublic: !1,
                name: 'Min',
                type: 'RasterFunctionVariable',
                value: 0,
              },
              MinPercent: {
                isDataset: !1,
                isPublic: !1,
                name: 'MinPercent',
                type: 'RasterFunctionVariable',
                value: 0.25,
              },
              NumberOfStandardDeviations: {
                isDataset: !1,
                isPublic: !1,
                name: 'NumberOfStandardDeviation',
                type: 'RasterFunctionVariable',
                value: 2,
              },
              Raster: {
                isDataset: !0,
                isPublic: !1,
                name: 'Raster',
                type: 'RasterFunctionVariable',
              },
              SigmoidStrengthLevel: {
                isDataset: !1,
                isPublic: !1,
                name: 'SigmoidStrengthLevel',
                type: 'RasterFunctionVariable',
                value: 2,
              },
              Statistics: {
                isDataset: !1,
                isPublic: !1,
                name: 'Statistics',
                type: 'RasterFunctionVariable',
              },
              StretchType: {
                isDataset: !1,
                isPublic: !1,
                name: 'StretchType',
                type: 'RasterFunctionVariable',
                value: 0,
              },
              type: 'StretchFunctionArguments',
              UseGamma: {
                isDataset: !1,
                isPublic: !1,
                name: 'UseGamma',
                type: 'RasterFunctionVariable',
                value: !1,
              },
            },
            description:
              'Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.',
            function: {
              description:
                'Enhances an image by adjusting the range of values displayed. This does not alter the underlying pixel values. If a pixel has a value outside of the specified range, it will appear as either the minimum or maximum value.',
              name: 'Stretch',
              pixelType: 'UNKNOWN',
              type: 'StretchFunction',
            },
            functionType: 0,
            name: 'Stretch',
            thumbnail: '',
          },
          RemapFunction: {
            name: 'Remap',
            description:
              'Changes pixel values by assigning new values to ranges of pixel values or using an external table.',
            function: {
              type: 'RemapFunction',
              pixelType: 'UNKNOWN',
              name: 'Remap',
              description:
                'Changes pixel values by assigning new values to ranges of pixel values or using an external table.',
            },
            arguments: {
              Raster: {
                name: 'Raster',
                isPublic: !1,
                isDataset: !0,
                type: 'RasterFunctionVariable',
              },
              UseTable: {
                name: 'UseTable',
                isPublic: !1,
                isDataset: !1,
                value: !1,
                type: 'RasterFunctionVariable',
              },
              InputRanges: {
                name: 'InputRanges',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
                displayName: 'Input Ranges',
              },
              OutputValues: {
                name: 'OutputValues',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
                displayName: 'Output Values',
              },
              NoDataRanges: {
                name: 'NoDataRanges',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
                displayName: 'NoData Ranges',
              },
              Table: {
                name: 'Table',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              InputField: {
                name: 'InputField',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              OutputField: {
                name: 'OutputField',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              InputMaxField: {
                name: 'InputMaxField',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              RemapTableType: {
                name: 'RemapTableType',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              AllowUnmatched: {
                name: 'AllowUnmatched',
                isPublic: !1,
                isDataset: !1,
                value: !0,
                type: 'RasterFunctionVariable',
              },
              type: 'RemapFunctionArguments',
            },
            functionType: 0,
            thumbnail: '',
          },
          ColormapFunction: {
            name: 'Colormap',
            description:
              'Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.',
            function: {
              type: 'ColormapFunction',
              pixelType: 'UNKNOWN',
              name: 'Colormap',
              description:
                'Changes pixel values to display the raster data as either a grayscale or a red, green, blue (RGB) image, based on a colormap or a color ramp.',
            },
            arguments: {
              Raster: {
                name: 'Raster',
                isPublic: !1,
                isDataset: !0,
                type: 'RasterFunctionVariable',
              },
              ColorSchemeType: {
                name: 'ColorSchemeType',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              Colormap: {
                name: 'Colormap',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              ColormapName: {
                name: 'ColormapName',
                isPublic: !1,
                isDataset: !1,
                value: 'Gray',
                type: 'RasterFunctionVariable',
              },
              ColorRamp: {
                name: 'ColorRamp',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              type: 'ColormapFunctionArguments',
            },
            functionType: 0,
            thumbnail: '',
          },
          ShadedReliefFunction: {
            name: 'Shaded Relief',
            description:
              "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.",
            function: {
              type: 'ShadedReliefFunction',
              pixelType: 'UNKNOWN',
              name: 'Shaded Relief',
              description:
                "Creates a multiband, color coded, 3D representation of the surface, with the sun's relative position taken into account for shading the image.",
            },
            arguments: {
              Raster: {
                name: 'Raster',
                isPublic: !1,
                isDataset: !0,
                type: 'RasterFunctionVariable',
              },
              ColorSchemeType: {
                name: 'ColorSchemeType',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              ColorRamp: {
                name: 'ColorRamp',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              HillshadeType: {
                name: 'HillshadeType',
                isPublic: !1,
                isDataset: !1,
                value: 0,
                type: 'RasterFunctionVariable',
              },
              Colormap: {
                name: 'Colormap',
                isPublic: !1,
                isDataset: !1,
                type: 'RasterFunctionVariable',
              },
              Azimuth: {
                name: 'Azimuth',
                isPublic: !1,
                isDataset: !1,
                value: 315,
                type: 'RasterFunctionVariable',
              },
              Altitude: {
                name: 'Altitude',
                isPublic: !1,
                isDataset: !1,
                value: 45,
                type: 'RasterFunctionVariable',
              },
              SlopeType: {
                name: 'SlopeType',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              ZFactor: {
                name: 'ZFactor',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              PSPower: {
                name: 'PSPower',
                isPublic: !1,
                isDataset: !1,
                value: 0.664,
                type: 'RasterFunctionVariable',
              },
              PSZFactor: {
                name: 'PSZFactor',
                isPublic: !1,
                isDataset: !1,
                value: 0.024,
                type: 'RasterFunctionVariable',
              },
              RemoveEdgeEffect: {
                name: 'RemoveEdgeEffect',
                isPublic: !1,
                isDataset: !1,
                value: !1,
                type: 'RasterFunctionVariable',
              },
              type: 'ShadedReliefFunctionArguments',
            },
            functionType: 0,
            thumbnail: '',
          },
          HillshadeFunction: {
            name: 'Hillshade',
            description:
              "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image",
            function: {
              type: 'HillshadeFunction',
              pixelType: 'UNKNOWN',
              name: 'Hillshade',
              description:
                "Creates a 3D representation of the surface, with the sun's relative position taken into account for shading the image",
            },
            arguments: {
              DEM: {
                name: 'DEM',
                isPublic: !1,
                isDataset: !0,
                type: 'RasterFunctionVariable',
              },
              HillshadeType: {
                name: 'HillshadeType',
                isPublic: !1,
                isDataset: !1,
                value: 0,
                type: 'RasterFunctionVariable',
              },
              Azimuth: {
                name: 'Azimuth',
                isPublic: !1,
                isDataset: !1,
                value: 315,
                type: 'RasterFunctionVariable',
              },
              Altitude: {
                name: 'Altitude',
                isPublic: !1,
                isDataset: !1,
                value: 45,
                type: 'RasterFunctionVariable',
              },
              SlopeType: {
                name: 'SlopeType',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              ZFactor: {
                name: 'ZFactor',
                isPublic: !1,
                isDataset: !1,
                value: 1,
                type: 'RasterFunctionVariable',
              },
              PSPower: {
                name: 'PSPower',
                isPublic: !1,
                isDataset: !1,
                value: 0.664,
                type: 'RasterFunctionVariable',
              },
              PSZFactor: {
                name: 'PSZFactor',
                isPublic: !1,
                isDataset: !1,
                value: 0.024,
                type: 'RasterFunctionVariable',
              },
              RemoveEdgeEffect: {
                name: 'RemoveEdgeEffect',
                isPublic: !1,
                isDataset: !1,
                value: !1,
                type: 'RasterFunctionVariable',
              },
              type: 'HillshadeFunctionArguments',
            },
            functionType: 0,
            thumbnail: '',
          },
          ResampleFunction: {
            name: 'Resample',
            description: 'Changes the cell size of a raster.',
            function: {
              type: 'ResampleFunction',
              pixelType: 'UNKNOWN',
              name: 'Resample',
              description: 'Changes the cell size of a raster.',
            },
            arguments: {
              Raster: {
                name: 'Raster',
                isPublic: !1,
                isDataset: !0,
                type: 'RasterFunctionVariable',
              },
              ResamplingType: {
                name: 'ResamplingType',
                isPublic: !1,
                isDataset: !1,
                value: 0,
                type: 'RasterFunctionVariable',
              },
              InputCellSize: {
                name: 'InputCellsize',
                isPublic: !1,
                isDataset: !1,
                value: { x: 0, y: 0 },
                type: 'RasterFunctionVariable',
              },
              OutputCellSize: {
                name: 'OutputCellsize',
                isPublic: !1,
                isDataset: !1,
                value: { x: 0, y: 0 },
                type: 'RasterFunctionVariable',
              },
              type: 'ResampleFunctionArguments',
            },
            functionType: 0,
            thumbnail: '',
          },
        };
      var E = i(93010),
        z = i(75509),
        q = i(27922);
      const L = {
          u1: [0, 1],
          u2: [0, 3],
          u4: [0, 15],
          u8: [0, 255],
          s8: [-128, 127],
          u16: [0, 65535],
          s16: [-32768, 32767],
        },
        Z = {
          simple_scalar: 'Simple Scalar',
          wind_barb: 'Wind Barb',
          single_arrow: 'Single Arrow',
          beaufort_kn: 'Beaufort Wind (Knots)',
          beaufort_m: 'Beaufort Wind (MetersPerSecond)',
          ocean_current_m: 'Ocean Current (MetersPerSecond)',
          ocean_current_kn: 'Ocean Current (Knots)',
        },
        U = new Set([
          'raster-stretch',
          'unique-value',
          'class-breaks',
          'raster-shaded-relief',
          'vector-field',
          'raster-colormap',
        ]);
      function k(e) {
        return U.has(e.type);
      }
      function H(e, t) {
        if (!e || !t) return (0, R.d9)(e || t);
        const i = (0, R.d9)(e);
        if (t.rasterFunctionDefinition) {
          const e = t.rasterFunctionDefinition;
          (e.thumbnail || e.thumbnailEx) &&
            (e.thumbnail = e.thumbnailEx = null),
            Q(i.rasterFunctionDefinition.arguments, t);
        } else
          'none' !== t.functionName.toLowerCase() &&
            (B(i.functionArguments).Raster = t);
        return i;
      }
      function Q(e, t) {
        for (const i in e)
          'raster' === i.toLowerCase() &&
            ('RasterFunctionVariable' === e[i].type
              ? ((e[i] = t.rasterFunctionDefinition),
                (e[i].type = 'RasterFunctionTemplate'))
              : 'RasterFunctionTemplate' === e[i].type && Q(e[i].arguments, t));
      }
      function G(e) {
        const t = (0, R.d9)(J[e.functionName + 'Function']),
          i = e.functionArguments;
        for (const e in i)
          'raster' === e.toLowerCase()
            ? ((t.arguments[e] = G(i[e])),
              (t.arguments[e].type = 'RasterFunctionTemplate'))
            : 'colormap' === e.toLowerCase()
            ? ((t.arguments[e].value = Y(i[e])),
              (t.arguments.ColorSchemeType.value = 0))
            : (t.arguments[e].value = i[e]);
        return t;
      }
      function B(e) {
        const t = e.Raster;
        return t && 'esri.layers.support.RasterFunction' === t.declaredClass
          ? B(t.functionArguments)
          : e;
      }
      const W = {
        none: 0,
        standardDeviation: 3,
        histogramEqualization: 4,
        minMax: 5,
        percentClip: 6,
        sigmoid: 9,
      };
      function $(e, t) {
        const i = L[String(t).toLowerCase()];
        return (
          i &&
            e.push(
              [Math.floor(i[0] - 1), 0, 0, 0],
              [Math.ceil(i[1] + 1), 0, 0, 0],
            ),
          e
        );
      }
      function X(e) {
        if (!e) return;
        const { fields: t } = e,
          i =
            t && t.find((e) => e && e.name && 'value' === e.name.toLowerCase());
        return i && i.name;
      }
      function K(e) {
        const t = [];
        return (
          e.forEach((e) => {
            const i = e;
            if (Array.isArray(i)) t.push(i);
            else {
              if (null == i.min || null == i.max) return;
              const e = [i.min, i.max, i.avg || 0, i.stddev || 0];
              t.push(e);
            }
          }),
          t
        );
      }
      function Y(e) {
        const t = [],
          i = [];
        return (
          e.forEach((e) => {
            t.push(e[0]), i.push((0, E.io)([...e.slice(1), 255]));
          }),
          { type: 'RasterColormap', values: t, colors: i }
        );
      }
      var ee,
        te = i(90578),
        ie = i(13473);
      const re = (0, v.w)()({
          MT_FIRST: 'first',
          MT_LAST: 'last',
          MT_MIN: 'min',
          MT_MAX: 'max',
          MT_MEAN: 'mean',
          MT_BLEND: 'blend',
          MT_SUM: 'sum',
        }),
        ne = (0, v.w)()({
          esriMosaicNone: 'none',
          esriMosaicCenter: 'center',
          esriMosaicNadir: 'nadir',
          esriMosaicViewpoint: 'viewpoint',
          esriMosaicAttribute: 'attribute',
          esriMosaicLockRaster: 'lock-raster',
          esriMosaicNorthwest: 'northwest',
          esriMosaicSeamline: 'seamline',
        });
      let se = (ee = class extends F.wq {
        constructor(e) {
          super(e),
            (this.ascending = !0),
            (this.itemRenderingRule = null),
            (this.lockRasterIds = null),
            (this.method = null),
            (this.multidimensionalDefinition = null),
            (this.objectIds = null),
            (this.operation = null),
            (this.sortField = null),
            (this.sortValue = null),
            (this.viewpoint = null),
            (this.where = null);
        }
        readAscending(e, t) {
          return null != t.ascending
            ? t.ascending
            : null == t.sortAscending || t.sortAscending;
        }
        readMethod(e, t) {
          return (function (e) {
            let t;
            switch (e ? e.toLowerCase().replace('esrimosaic', '') : '') {
              case 'byattribute':
              case 'attribute':
                t = 'esriMosaicAttribute';
                break;
              case 'lockraster':
                t = 'esriMosaicLockRaster';
                break;
              case 'center':
                t = 'esriMosaicCenter';
                break;
              case 'northwest':
                t = 'esriMosaicNorthwest';
                break;
              case 'nadir':
                t = 'esriMosaicNadir';
                break;
              case 'viewpoint':
                t = 'esriMosaicViewpoint';
                break;
              case 'seamline':
                t = 'esriMosaicSeamline';
                break;
              default:
                t = 'esriMosaicNone';
            }
            return ne.fromJSON(t);
          })(t.mosaicMethod || t.defaultMosaicMethod);
        }
        readOperation(e, t) {
          const i = t.mosaicOperation,
            r = t.mosaicOperator && t.mosaicOperator.toLowerCase(),
            n = i || (r ? re.toJSON(r) : null);
          return re.fromJSON(n) || 'first';
        }
        castSortValue(e) {
          return null == e || 'string' == typeof e || 'number' == typeof e
            ? e
            : `${e}`;
        }
        clone() {
          return new ee({
            ascending: this.ascending,
            itemRenderingRule: (0, R.d9)(this.itemRenderingRule),
            lockRasterIds: (0, R.d9)(this.lockRasterIds),
            method: this.method,
            multidimensionalDefinition: (0, R.d9)(
              this.multidimensionalDefinition,
            ),
            objectIds: (0, R.d9)(this.objectIds),
            operation: this.operation,
            sortField: this.sortField,
            sortValue: this.sortValue,
            viewpoint: (0, R.d9)(this.viewpoint),
            where: this.where,
          });
        }
      });
      (0, n._)(
        [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
        se.prototype,
        'ascending',
        void 0,
      ),
        (0, n._)(
          [(0, C.r)('ascending', ['ascending', 'sortAscending'])],
          se.prototype,
          'readAscending',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: M, json: { write: !0 } })],
          se.prototype,
          'itemRenderingRule',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: [p.z8],
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: 'lock-raster' === this.method };
                  },
                },
              },
            }),
          ],
          se.prototype,
          'lockRasterIds',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                type: ne.jsonValues,
                write: { target: 'mosaicMethod', writer: ne.write },
              },
            }),
          ],
          se.prototype,
          'method',
          void 0,
        ),
        (0, n._)(
          [(0, C.r)('method', ['mosaicMethod', 'defaultMosaicMethod'])],
          se.prototype,
          'readMethod',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: [I.Z], json: { write: !0 } })],
          se.prototype,
          'multidimensionalDefinition',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: [p.z8], json: { name: 'fids', write: !0 } })],
          se.prototype,
          'objectIds',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              json: {
                type: re.jsonValues,
                read: { reader: re.read },
                write: { target: 'mosaicOperation', writer: re.write },
              },
            }),
          ],
          se.prototype,
          'operation',
          void 0,
        ),
        (0, n._)(
          [(0, C.r)('operation', ['mosaicOperation', 'mosaicOperator'])],
          se.prototype,
          'readOperation',
          null,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                write: {
                  overridePolicy() {
                    return { enabled: 'attribute' === this.method };
                  },
                },
              },
            }),
          ],
          se.prototype,
          'sortField',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: [String, Number],
              json: {
                write: {
                  allowNull: !0,
                  overridePolicy() {
                    return {
                      enabled: 'attribute' === this.method,
                      allowNull: !0,
                    };
                  },
                },
              },
            }),
          ],
          se.prototype,
          'sortValue',
          void 0,
        ),
        (0, n._)([(0, te.p)('sortValue')], se.prototype, 'castSortValue', null),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          se.prototype,
          'viewpoint',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          se.prototype,
          'where',
          void 0,
        ),
        (se = ee = (0, n._)([(0, c.j)('esri.layers.support.MosaicRule')], se));
      const ae = se;
      var oe = i(69608);
      let le = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.layer = null),
            (this.adjustAspectRatio = void 0),
            (this.bandIds = void 0),
            (this.compression = void 0),
            (this.compressionQuality = void 0),
            (this.compressionTolerance = 0.01),
            (this.format = null),
            (this.interpolation = null),
            (this.noData = null),
            (this.noDataInterpretation = void 0),
            (this.pixelType = void 0),
            (this.lercVersion = 2);
        }
        writeAdjustAspectRatio(e, t, i) {
          this.layer.version < 10.3 || (t[i] = e);
        }
        writeCompressionQuality(e, t, i) {
          this.format &&
            this.format.toLowerCase().indexOf('jpg') > -1 &&
            null != e &&
            (t[i] = e);
        }
        writeCompressionTolerance(e, t, i) {
          'lerc' === this.format && null != e && (t[i] = e);
        }
        writeLercVersion(e, t, i) {
          'lerc' === this.format && this.layer.version >= 10.5 && (t[i] = e);
        }
        get version() {
          const e = this.layer;
          return (
            e.commitProperty('bandIds'),
            e.commitProperty('format'),
            e.commitProperty('compressionQuality'),
            e.commitProperty('compressionTolerance'),
            e.commitProperty('interpolation'),
            e.commitProperty('noData'),
            e.commitProperty('noDataInterpretation'),
            e.commitProperty('mosaicRule'),
            e.commitProperty('renderingRule'),
            e.commitProperty('adjustAspectRatio'),
            e.commitProperty('pixelFilter'),
            e.commitProperty('renderer'),
            e.commitProperty('definitionExpression'),
            (this._get('version') || 0) + 1
          );
        }
        set version(e) {
          this._set('version', e);
        }
        get mosaicRule() {
          const e = this.layer;
          let t = e.mosaicRule;
          const i = e.definitionExpression;
          return (
            t
              ? i && i !== t.where && ((t = t.clone()), (t.where = i))
              : i && (t = new ae({ where: i })),
            t
          );
        }
        get renderingRule() {
          const e = this.layer;
          let t = e.renderingRule;
          const i = e.pixelFilter,
            r =
              !e.format ||
              e.format.indexOf('jpg') > -1 ||
              e.format.indexOf('png') > -1;
          return (
            (t = this._addResampleRasterFunction(t)),
            r && !i && (t = this.combineRendererWithRenderingRule()),
            t
          );
        }
        combineRendererWithRenderingRule() {
          var e;
          const t = this.layer,
            { rasterInfo: i, renderingRule: r, renderer: n } = t;
          return n && k(n)
            ? H(
                (function (e, t) {
                  switch (((t = t || {}), e.type)) {
                    case 'raster-stretch':
                      return (function (e, t) {
                        const i = t.convertToRFT,
                          r = new M();
                        r.functionName = 'Stretch';
                        const n = W[z.v.toJSON(e.stretchType)],
                          s = 'u8',
                          a = {
                            StretchType: n,
                            Statistics: K(e.statistics),
                            DRA: e.dynamicRangeAdjustment,
                            UseGamma: e.useGamma,
                            Gamma: e.gamma,
                            ComputeGamma: e.computeGamma,
                          };
                        if (
                          (null != e.outputMin && (a.Min = e.outputMin),
                          null != e.outputMax && (a.Max = e.outputMax),
                          n === W.standardDeviation
                            ? ((a.NumberOfStandardDeviations =
                                e.numberOfStandardDeviations),
                              (r.outputPixelType = s))
                            : n === W.percentClip
                            ? ((a.MinPercent = e.minPercent),
                              (a.MaxPercent = e.maxPercent),
                              (r.outputPixelType = s))
                            : n === W.minMax
                            ? (r.outputPixelType = s)
                            : n === W.sigmoid &&
                              (a.SigmoidStrengthLevel = e.sigmoidStrengthLevel),
                          (r.functionArguments = a),
                          (r.variableName = 'Raster'),
                          e.colorRamp)
                        ) {
                          const n = e.colorRamp,
                            s = new M();
                          if (i)
                            s.functionArguments = { ColorRamp: (0, E.pM)(n) };
                          else {
                            const i = (0, E.Uh)(n);
                            i
                              ? (s.functionArguments = { colorRamp: i })
                              : !t.convertColorRampToColormap ||
                                ('algorithmic' !== n.type &&
                                  'multipart' !== n.type)
                              ? (s.functionArguments = {
                                  colorRamp: e.colorRamp.toJSON(),
                                })
                              : (s.functionArguments = {
                                  Colormap: (0, E.Jw)(n, 256),
                                });
                          }
                          return (
                            (s.variableName = 'Raster'),
                            (s.functionName = 'Colormap'),
                            (s.functionArguments.Raster = r),
                            i ? new M({ rasterFunctionDefinition: G(s) }) : s
                          );
                        }
                        return i
                          ? new M({ rasterFunctionDefinition: G(r) })
                          : r;
                      })(e, t);
                    case 'class-breaks':
                      return (function (e, t) {
                        const i = [],
                          r = [],
                          n = [],
                          s = [],
                          a = 1e-6,
                          { pixelType: o, rasterAttributeTable: l } = t,
                          u = l && l.features,
                          p = X(l);
                        if (u && Array.isArray(u) && e.classBreakInfos) {
                          e.classBreakInfos.forEach((t, i) => {
                            const r = t.symbol.color;
                            let n;
                            r.a &&
                              u.forEach((a) => {
                                (n = a.attributes[e.field]),
                                  ((n >= t.minValue && n < t.maxValue) ||
                                    (i === e.classBreakInfos.length - 1 &&
                                      n >= t.minValue)) &&
                                    s.push([a.attributes[p], r.r, r.g, r.b]);
                              });
                          });
                          const i = o ? $(s, o) : s,
                            r = new M();
                          return (
                            (r.functionName = 'Colormap'),
                            (r.functionArguments = {}),
                            (r.functionArguments.Colormap = i),
                            (r.variableName = 'Raster'),
                            t.convertToRFT
                              ? new M({ rasterFunctionDefinition: G(r) })
                              : r
                          );
                        }
                        e.classBreakInfos.forEach((e, t) => {
                          const o = e.symbol && e.symbol.color;
                          o.a
                            ? (0 === t
                                ? i.push(e.minValue, e.maxValue + a)
                                : i.push(e.minValue + a, e.maxValue + a),
                              r.push(t),
                              s.push([t, o.r, o.g, o.b]))
                            : n.push(e.minValue, e.maxValue);
                        });
                        const c = o ? $(s, o) : s,
                          m = new M();
                        (m.functionName = 'Remap'),
                          (m.functionArguments = {
                            InputRanges: i,
                            OutputValues: r,
                            NoDataRanges: n,
                          }),
                          (m.variableName = 'Raster');
                        const d = new M();
                        return (
                          (d.functionName = 'Colormap'),
                          (d.functionArguments = { Colormap: c, Raster: m }),
                          t.convertToRFT
                            ? new M({ rasterFunctionDefinition: G(d) })
                            : d
                        );
                      })(e, t);
                    case 'unique-value':
                      return (function (e, t) {
                        var i, r;
                        const n = [],
                          { pixelType: s, rasterAttributeTable: a } = t,
                          o = a && a.features,
                          l = X(a),
                          u =
                            null == (i = e.defaultSymbol) ||
                            null == (r = i.color)
                              ? void 0
                              : r.toRgb(),
                          p = e.uniqueValueInfos;
                        if (p)
                          if (o) {
                            const t = new Map();
                            p.forEach((e) => {
                              var i;
                              const r = e.value,
                                n =
                                  null == (i = e.symbol.color)
                                    ? void 0
                                    : i.toRgb();
                              null != r && n && t.set(String(r), n);
                            });
                            const i = e.field;
                            o.forEach(({ attributes: e }) => {
                              const r = String(e[i]),
                                s = e[l];
                              if (t.has(r)) {
                                const e = t.get(r);
                                n.push([s, ...e]);
                              } else u && n.push([s, ...u]);
                            });
                          } else
                            for (let e = 0; e < p.length; e++) {
                              const t = p[e],
                                i = t.symbol.color,
                                r = +t.value;
                              if (null != i && i.a) {
                                if (isNaN(r)) return null;
                                n.push([r, i.r, i.g, i.b]);
                              }
                            }
                        const c = s && n.length > 0 ? $(n, s) : n,
                          m = new M();
                        return (
                          (m.functionName = 'Colormap'),
                          (m.functionArguments = {}),
                          (m.functionArguments.Colormap = c),
                          (m.variableName = 'Raster'),
                          t.convertToRFT
                            ? new M({ rasterFunctionDefinition: G(m) })
                            : m
                        );
                      })(e, t);
                    case 'raster-colormap':
                      return (function (e, t) {
                        const i = e.extractColormap();
                        if (!i || 0 === i.length) return;
                        const { pixelType: r } = t,
                          n = r ? $(i, r) : i,
                          s = new M();
                        return (
                          (s.functionName = 'Colormap'),
                          (s.functionArguments = {}),
                          (s.functionArguments.Colormap = n),
                          t.convertToRFT
                            ? new M({ rasterFunctionDefinition: G(s) })
                            : s
                        );
                      })(e, t);
                    case 'vector-field':
                      return (function (e, t) {
                        const i = new M();
                        i.functionName = 'VectorFieldRenderer';
                        const { dataType: r, bandProperties: n } = t,
                          s = 'vector-uv' === r;
                        let a, o;
                        n &&
                          2 === n.length &&
                          ((a = n
                            .map((e) => e.BandName.toLowerCase())
                            .indexOf('magnitude')),
                          (o = n
                            .map((e) => e.BandName.toLowerCase())
                            .indexOf('direction'))),
                          (-1 !== a && null !== a) || ((a = 0), (o = 1));
                        const l = 'arithmetic' === e.rotationType ? 1 : 2,
                          u = 'flow-from' === e.flowRepresentation ? 0 : 1,
                          p = e.visualVariables
                            ? e.visualVariables.find(
                                (e) => 'Magnitude' === e.field,
                              )
                            : new q.Z(),
                          c = {
                            magnitudeBandID: a,
                            directionBandID: o,
                            isUVComponents: s,
                            referenceSystem: l,
                            massFlowAngleRepresentation: u,
                            symbolTileSize: 50,
                            symbolTileSizeUnits: 100,
                            calculationMethod: 'Vector Average',
                            symbologyName:
                              Z[e.style.toLowerCase().replace('-', '_')],
                            minimumMagnitude: p.minDataValue,
                            maximumMagnitude: p.maxDataValue,
                            minimumSymbolSize: p.minSize,
                            maximumSymbolSize: p.maxSize,
                          };
                        return (
                          (i.functionArguments = c),
                          t.convertToRFT
                            ? new M({ rasterFunctionDefinition: G(i) })
                            : i
                        );
                      })(e, t);
                    case 'raster-shaded-relief':
                      return (function (e, t) {
                        const i = t.convertToRFT;
                        if ('elevation' !== t.dataType) return new M();
                        const r = new M();
                        r.functionName = 'Hillshade';
                        const n = 'traditional' === e.hillshadeType ? 0 : 1,
                          s = 'none' === e.scalingType ? 1 : 3,
                          a = {
                            HillshadeType: n,
                            SlopeType: s,
                            ZFactor: e.zFactor,
                          };
                        return (
                          0 === n &&
                            ((a.Azimuth = e.azimuth),
                            (a.Altitude = e.altitude)),
                          3 === s &&
                            ((a.PSPower = e.pixelSizePower),
                            (a.PSZFactor = e.pixelSizeFactor)),
                          (r.functionArguments = a),
                          (r.variableName = 'Raster'),
                          e.colorRamp &&
                            ((r.functionName = 'ShadedRelief'),
                            i
                              ? (a.ColorRamp = (0, E.pM)(e.colorRamp))
                              : (a.Colormap = (0, E.Jw)(e.colorRamp, 256))),
                          i ? new M({ rasterFunctionDefinition: G(r) }) : r
                        );
                      })(e, t);
                    case 'flow':
                      throw new Error('Unsupported rendering rule.');
                  }
                })(n, {
                  rasterAttributeTable: i.attributeTable,
                  pixelType: i.pixelType,
                  dataType: i.dataType,
                  bandProperties:
                    null == (e = i.keyProperties) ? void 0 : e.BandProperties,
                  convertColorRampToColormap: t.version < 10.6,
                  convertToRFT: !(null == r || !r.rasterFunctionDefinition),
                }),
                r,
              )
            : r;
        }
        _addResampleRasterFunction(e) {
          var t;
          if (
            'vector-field' !==
              (null == (t = this.layer.renderer) ? void 0 : t.type) ||
            'Resample' === (null == e ? void 0 : e.functionName)
          )
            return e;
          const i =
            'esriImageServiceDataTypeVector-UV' === this.layer.serviceDataType
              ? 7
              : 10;
          let r = new M({
            functionName: 'Resample',
            functionArguments: {
              ResamplingType: i,
              InputCellSize: {
                x: this.layer.pixelSizeX,
                y: this.layer.pixelSizeY,
              },
            },
          });
          return (
            (r =
              null != e && e.rasterFunctionDefinition
                ? new M({ rasterFunctionDefinition: G(r) })
                : r),
            H(r, e)
          );
        }
      };
      (0, n._)([(0, u.Cb)()], le.prototype, 'layer', void 0),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          le.prototype,
          'adjustAspectRatio',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('adjustAspectRatio')],
          le.prototype,
          'writeAdjustAspectRatio',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } }), (0, S.B)('layer.bandIds')],
          le.prototype,
          'bandIds',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          le.prototype,
          'compression',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({ json: { write: !0 } }),
            (0, S.B)('layer.compressionQuality'),
          ],
          le.prototype,
          'compressionQuality',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('compressionQuality')],
          le.prototype,
          'writeCompressionQuality',
          null,
        ),
        (0, n._)(
          [
            (0, u.Cb)({ json: { write: !0 } }),
            (0, S.B)('layer.compressionTolerance'),
          ],
          le.prototype,
          'compressionTolerance',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('compressionTolerance')],
          le.prototype,
          'writeCompressionTolerance',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } }), (0, S.B)('layer.format')],
          le.prototype,
          'format',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                read: { reader: oe.c.read },
                write: { writer: oe.c.write },
              },
            }),
            (0, S.B)('layer.interpolation'),
          ],
          le.prototype,
          'interpolation',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } }), (0, S.B)('layer.noData')],
          le.prototype,
          'noData',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                read: { reader: oe.k.read },
                write: { writer: oe.k.write },
              },
            }),
            (0, S.B)('layer.noDataInterpretation'),
          ],
          le.prototype,
          'noDataInterpretation',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          le.prototype,
          'pixelType',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          le.prototype,
          'lercVersion',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('lercVersion')],
          le.prototype,
          'writeLercVersion',
          null,
        ),
        (0, n._)([(0, u.Cb)({ type: Number })], le.prototype, 'version', null),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          le.prototype,
          'mosaicRule',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          le.prototype,
          'renderingRule',
          null,
        ),
        (le = (0, n._)(
          [(0, c.j)('esri.layers.mixins.ExportImageServiceParameters')],
          le,
        ));
      var ue = i(1231),
        pe = i(99514),
        ce = i(54163),
        me = i(48526),
        de = i(88281),
        he = i(75993),
        ye = i(80676),
        fe = i(67058),
        ge = i(91219),
        be = i(82526),
        ve = i(11282),
        Re = i(82971);
      let we = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.north = null),
            (this.up = null),
            (this.spatialReference = null);
        }
      };
      (0, n._)(
        [(0, u.Cb)({ type: Number, json: { write: !0 } })],
        we.prototype,
        'north',
        void 0,
      ),
        (0, n._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          we.prototype,
          'up',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Re.Z, json: { write: !0 } })],
          we.prototype,
          'spatialReference',
          void 0,
        ),
        (we = (0, n._)([(0, c.j)('esri.rest.support.ImageAngleResult')], we));
      const _e = we;
      var Se = i(74889);
      let Ce = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.catalogItemVisibilities = null),
            (this.catalogItems = null),
            (this.location = null),
            (this.name = null),
            (this.objectId = null),
            (this.processedValues = null),
            (this.properties = null),
            (this.value = null);
        }
      };
      (0, n._)(
        [(0, u.Cb)({ json: { write: !0 } })],
        Ce.prototype,
        'catalogItemVisibilities',
        void 0,
      ),
        (0, n._)(
          [(0, u.Cb)({ type: Se.default, json: { write: !0 } })],
          Ce.prototype,
          'catalogItems',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          Ce.prototype,
          'location',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ce.prototype,
          'name',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ce.prototype,
          'objectId',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ce.prototype,
          'processedValues',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ce.prototype,
          'properties',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ce.prototype,
          'value',
          void 0,
        ),
        (Ce = (0, n._)(
          [(0, c.j)('esri.rest.support.ImageIdentifyResult')],
          Ce,
        ));
      const xe = Ce;
      let Ie = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.attributes = null),
            (this.location = null),
            (this.locationId = null),
            (this.rasterId = null),
            (this.resolution = null),
            (this.pixelValue = null);
        }
      };
      (0, n._)(
        [(0, u.Cb)({ json: { write: !0 } })],
        Ie.prototype,
        'attributes',
        void 0,
      ),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          Ie.prototype,
          'location',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ie.prototype,
          'locationId',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ie.prototype,
          'rasterId',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ie.prototype,
          'resolution',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ie.prototype,
          'pixelValue',
          void 0,
        ),
        (Ie = (0, n._)([(0, c.j)('esri.rest.support.ImageSample')], Ie));
      const Fe = Ie;
      let Ne = class extends F.wq {
        constructor() {
          super(...arguments), (this.samples = null);
        }
      };
      (0, n._)(
        [(0, u.Cb)({ type: [Fe], json: { write: !0 } })],
        Ne.prototype,
        'samples',
        void 0,
      ),
        (Ne = (0, n._)([(0, c.j)('esri.rest.support.ImageSampleResult')], Ne));
      const Te = Ne;
      let De = class extends F.wq {
        constructor() {
          super(...arguments), (this.geometries = null);
        }
      };
      (0, n._)(
        [(0, u.Cb)({ json: { write: !0 } })],
        De.prototype,
        'geometries',
        void 0,
      ),
        (De = (0, n._)(
          [(0, c.j)('esri.rest.support.ImagePixelLocationResult')],
          De,
        ));
      const Pe = De;
      function Oe(e) {
        const t = null == e ? void 0 : e.time;
        if (t && (null != t.start || null != t.end)) {
          const i = [];
          null != t.start && i.push(t.start),
            null != t.end && -1 === i.indexOf(t.end) && i.push(t.end),
            (e.time = i.join(','));
        }
      }
      async function je(e, t, i) {
        const r = (0, ve.en)(e),
          n = t.geometry ? [t.geometry] : [],
          s = await (0, be.aX)(n),
          o = t.toJSON();
        Oe(o);
        const l = s && s[0];
        (0, a.pC)(l) && (o.geometry = l.toJSON());
        const u = (0, ve.cv)({ ...r.query, f: 'json', ...o });
        return (0, ve.lA)(u, i);
      }
      async function Ve(e, t, i) {
        const r = (0, ve.en)(e),
          n = t.geometry ? [t.geometry] : [];
        return (0, be.aX)(n)
          .then((e) => {
            const n = t.toJSON(),
              s = e && e[0];
            (0, a.pC)(s) && (n.geometry = JSON.stringify(s.toJSON()));
            const o = (0, ve.cv)({ ...r.query, f: 'json', ...n }),
              l = (0, ve.lA)(o, i);
            return (0, g.default)(r.path + '/identify', l);
          })
          .then((e) => xe.fromJSON(e.data));
      }
      function Ae(e) {
        const { imageCoordinateSystem: t } = e;
        if (t) {
          const { id: e, referenceServiceName: i } = t;
          return null != e
            ? i
              ? { icsid: e, icsns: i }
              : { icsid: e }
            : { ics: t };
        }
        return e.toJSON();
      }
      function Me(e, t) {
        const i = Ae(e),
          { icsid: r, icsns: n, wkid: s } = i;
        return null != r
          ? null == n ||
            (null != t && t.toLowerCase().includes('/' + n.toLowerCase() + '/'))
            ? `0:${r}`
            : JSON.stringify(i)
          : s
          ? s.toString()
          : JSON.stringify(i);
      }
      i(67900), i(40330), i(98326), i(56545);
      var Je,
        Ee = i(41818),
        ze = i(6570),
        qe = (i(9361), i(65091)),
        Le = i(38913),
        Ze = (i(58901), i(45091), i(8744), i(57444)),
        Ue = i(5396),
        ke = i(4967);
      i(98732), i(75935), i(28141);
      let He = (Je = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.angleNames = null),
            (this.point = null),
            (this.spatialReference = null),
            (this.rasterId = null);
        }
        clone() {
          return new Je(
            (0, R.d9)({
              angleNames: this.angleNames,
              point: this.point,
              spatialReference: this.spatialReference,
              rasterId: this.rasterId,
            }),
          );
        }
      });
      (0, n._)(
        [(0, u.Cb)({ type: [String], json: { name: 'angleName', write: !0 } })],
        He.prototype,
        'angleNames',
        void 0,
      ),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          He.prototype,
          'point',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Re.Z, json: { write: !0 } })],
          He.prototype,
          'spatialReference',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: p.z8, json: { write: !0 } })],
          He.prototype,
          'rasterId',
          void 0,
        ),
        (He = Je =
          (0, n._)([(0, c.j)('esri.rest.support.ImageAngleParameters')], He));
      const Qe = He;
      var Ge,
        Be = i(92835),
        We = i(33955);
      let $e = (Ge = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.geometry = null),
            (this.mosaicRule = null),
            (this.renderingRule = null),
            (this.pixelSize = null),
            (this.raster = void 0),
            (this.timeExtent = null);
        }
        writeGeometry(e, t, i) {
          null != e && ((t.geometryType = (0, We.Ji)(e)), (t[i] = e.toJSON()));
        }
        clone() {
          return new Ge(
            (0, R.d9)({
              geometry: this.geometry,
              mosaicRule: this.mosaicRule,
              renderingRule: this.renderingRule,
              pixelSize: this.pixelSize,
              raster: this.raster,
              timeExtent: this.timeExtent,
            }),
          );
        }
      });
      (0, n._)(
        [(0, u.Cb)({ types: h.qM, json: { read: We.im } })],
        $e.prototype,
        'geometry',
        void 0,
      ),
        (0, n._)([(0, m.c)('geometry')], $e.prototype, 'writeGeometry', null),
        (0, n._)(
          [(0, u.Cb)({ type: ae, json: { write: !0 } })],
          $e.prototype,
          'mosaicRule',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: M, json: { write: !0 } })],
          $e.prototype,
          'renderingRule',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          $e.prototype,
          'pixelSize',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          $e.prototype,
          'raster',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Be.Z,
              json: { read: { source: 'time' }, write: { target: 'time' } },
            }),
          ],
          $e.prototype,
          'timeExtent',
          void 0,
        ),
        ($e = Ge =
          (0, n._)(
            [(0, c.j)('esri.rest.support.ImageHistogramParameters')],
            $e,
          ));
      const Xe = $e;
      var Ke;
      let Ye = (Ke = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.geometry = null),
            (this.renderingRules = null),
            (this.pixelSize = null),
            (this.returnGeometry = !0),
            (this.returnCatalogItems = !0),
            (this.returnPixelValues = !0),
            (this.maxItemCount = null),
            (this.timeExtent = null),
            (this.raster = void 0),
            (this.viewId = void 0),
            (this.processAsMultidimensional = !1);
        }
        writeGeometry(e, t, i) {
          null != e &&
            ((t.geometryType = (0, We.Ji)(e)),
            (t[i] = JSON.stringify(e.toJSON())));
        }
        set mosaicRule(e) {
          let t = e;
          t &&
            t.mosaicMethod &&
            (t = ae.fromJSON({
              ...t.toJSON(),
              mosaicMethod: t.mosaicMethod,
              mosaicOperation: t.mosaicOperation,
            })),
            this._set('mosaicRule', t);
        }
        writeMosaicRule(e, t, i) {
          null != e && (t[i] = JSON.stringify(e.toJSON()));
        }
        set renderingRule(e) {
          let t = e;
          t &&
            t.rasterFunction &&
            (t = M.fromJSON({
              ...t.toJSON(),
              rasterFunction: t.rasterFunction,
              rasterFunctionArguments: t.rasterFunctionArguments,
            })),
            this._set('renderingRule', t);
        }
        writeRenderingRule(e, t, i) {
          null != e && (t[i] = JSON.stringify(e.toJSON())),
            e.rasterFunctionDefinition &&
              (t[i] = JSON.stringify(e.rasterFunctionDefinition));
        }
        writeRenderingRules(e, t, i) {
          null != e &&
            (t[i] = JSON.stringify(
              e.map((e) => e.rasterFunctionDefinition || e.toJSON()),
            ));
        }
        writePixelSize(e, t, i) {
          null != e && (t[i] = JSON.stringify(e));
        }
        writeTimeExtent(e, t, i) {
          if (null != e) {
            const r = (0, a.pC)(e.start) ? e.start.getTime() : null,
              n = (0, a.pC)(e.end) ? e.end.getTime() : null;
            t[i] = null != r ? (null != n ? `${r},${n}` : `${r}`) : null;
          }
        }
        clone() {
          return new Ke(
            (0, R.d9)({
              geometry: this.geometry,
              mosaicRule: this.mosaicRule,
              renderingRule: this.renderingRule,
              pixelSize: this.pixelSize,
              returnGeometry: this.returnGeometry,
              returnCatalogItems: this.returnCatalogItems,
              returnPixelValues: this.returnPixelValues,
              maxItemCount: this.maxItemCount,
              processAsMultidimensional: this.processAsMultidimensional,
              raster: this.raster,
              viewId: this.viewId,
              timeExtent: this.timeExtent,
            }),
          );
        }
      });
      (0, n._)(
        [(0, u.Cb)({ json: { write: !0 } })],
        Ye.prototype,
        'geometry',
        void 0,
      ),
        (0, n._)([(0, m.c)('geometry')], Ye.prototype, 'writeGeometry', null),
        (0, n._)(
          [(0, u.Cb)({ type: ae, json: { write: !0 } })],
          Ye.prototype,
          'mosaicRule',
          null,
        ),
        (0, n._)(
          [(0, m.c)('mosaicRule')],
          Ye.prototype,
          'writeMosaicRule',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: M, json: { write: !0 } })],
          Ye.prototype,
          'renderingRule',
          null,
        ),
        (0, n._)(
          [(0, m.c)('renderingRule')],
          Ye.prototype,
          'writeRenderingRule',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: [M], json: { write: !0 } })],
          Ye.prototype,
          'renderingRules',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('renderingRules')],
          Ye.prototype,
          'writeRenderingRules',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          Ye.prototype,
          'pixelSize',
          void 0,
        ),
        (0, n._)([(0, m.c)('pixelSize')], Ye.prototype, 'writePixelSize', null),
        (0, n._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          Ye.prototype,
          'returnGeometry',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          Ye.prototype,
          'returnCatalogItems',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          Ye.prototype,
          'returnPixelValues',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          Ye.prototype,
          'maxItemCount',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Be.Z, json: { write: { target: 'time' } } })],
          Ye.prototype,
          'timeExtent',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('timeExtent')],
          Ye.prototype,
          'writeTimeExtent',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ye.prototype,
          'raster',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ json: { write: !0 } })],
          Ye.prototype,
          'viewId',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          Ye.prototype,
          'processAsMultidimensional',
          void 0,
        ),
        (Ye = Ke =
          (0, n._)(
            [(0, c.j)('esri.rest.support.ImageIdentifyParameters')],
            Ye,
          ));
      const et = Ye;
      var tt;
      let it = (tt = class extends F.wq {
        constructor() {
          super(...arguments), (this.geometries = null), (this.rasterId = null);
        }
        writeGeometry(e, t, i) {
          t.geometries = {
            geometryType: 'esriGeometryPoint',
            geometries: e.map((e) => e.toJSON()),
          };
        }
        clone() {
          return new tt({
            geometries: this.geometries.map((e) => e.clone()),
            rasterId: this.rasterId,
          });
        }
      });
      (0, n._)(
        [(0, u.Cb)({ type: [ie.Z], json: { write: !0 } })],
        it.prototype,
        'geometries',
        void 0,
      ),
        (0, n._)([(0, m.c)('geometries')], it.prototype, 'writeGeometry', null),
        (0, n._)(
          [(0, u.Cb)({ type: p.z8, json: { write: !0 } })],
          it.prototype,
          'rasterId',
          void 0,
        ),
        (it = tt =
          (0, n._)(
            [(0, c.j)('esri.rest.support.ImagePixelLocationParameters')],
            it,
          ));
      const rt = it;
      var nt;
      let st = (nt = class extends F.wq {
        constructor() {
          super(...arguments),
            (this.geometry = null),
            (this.interpolation = 'nearest'),
            (this.mosaicRule = null),
            (this.outFields = null),
            (this.pixelSize = null),
            (this.returnFirstValueOnly = !0),
            (this.sampleDistance = null),
            (this.sampleCount = null),
            (this.sliceId = null),
            (this.timeExtent = null);
        }
        writeGeometry(e, t, i) {
          null != e && ((t.geometryType = (0, We.Ji)(e)), (t[i] = e.toJSON()));
        }
        set locations(e) {
          if (null != e && e.length) {
            const t = new qe.Z({ spatialReference: e[0].spatialReference });
            (t.points = e.map((e) => [e.x, e.y])),
              this._set('locations', e),
              (this.geometry = t);
          }
        }
        clone() {
          return new nt(
            (0, R.d9)({
              geometry: this.geometry,
              locations: this.locations,
              interpolation: this.interpolation,
              mosaicRule: this.mosaicRule,
              outFields: this.outFields,
              raster: this.raster,
              returnFirstValueOnly: this.returnFirstValueOnly,
              sampleDistance: this.sampleDistance,
              sampleCount: this.sampleCount,
              sliceId: this.sliceId,
              pixelSize: this.pixelSize,
              timeExtent: this.timeExtent,
            }),
          );
        }
      });
      (0, n._)(
        [(0, u.Cb)({ types: h.qM, json: { read: We.im } })],
        st.prototype,
        'geometry',
        void 0,
      ),
        (0, n._)([(0, m.c)('geometry')], st.prototype, 'writeGeometry', null),
        (0, n._)([(0, u.Cb)()], st.prototype, 'locations', null),
        (0, n._)(
          [
            (0, u.Cb)({
              type: String,
              json: {
                type: oe.c.jsonValues,
                read: oe.c.read,
                write: oe.c.write,
              },
            }),
          ],
          st.prototype,
          'interpolation',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: ae, json: { write: !0 } })],
          st.prototype,
          'mosaicRule',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: [String], json: { write: !0 } })],
          st.prototype,
          'outFields',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: ie.Z, json: { write: !0 } })],
          st.prototype,
          'pixelSize',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: String, json: { write: !0 } })],
          st.prototype,
          'raster',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Boolean, json: { write: !0 } })],
          st.prototype,
          'returnFirstValueOnly',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          st.prototype,
          'sampleDistance',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          st.prototype,
          'sampleCount',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ type: Number, json: { write: !0 } })],
          st.prototype,
          'sliceId',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Be.Z,
              json: { read: { source: 'time' }, write: { target: 'time' } },
            }),
          ],
          st.prototype,
          'timeExtent',
          void 0,
        ),
        (st = nt =
          (0, n._)([(0, c.j)('esri.rest.support.ImageSampleParameters')], st));
      const at = st;
      var ot = i(23808);
      const lt = w.Z.getLogger('esri.layers.mixins.ArcGISImageService'),
        ut = (0, v.w)()({
          U1: 'u1',
          U2: 'u2',
          U4: 'u4',
          U8: 'u8',
          S8: 's8',
          U16: 'u16',
          S16: 's16',
          U32: 'u32',
          S32: 's32',
          F32: 'f32',
          F64: 'f64',
          C64: 'c64',
          C128: 'c128',
          UNKNOWN: 'unknown',
        }),
        pt = new Set([
          'png',
          'png8',
          'png24',
          'png32',
          'jpg',
          'bmp',
          'gif',
          'jpgpng',
          'lerc',
          'tiff',
        ]),
        ct = (0, u.Eg)(p.q9, { min: 0, max: 255 }),
        mt = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this._functionRasterInfos = {}),
                (this._rasterJobHandler = {
                  instance: null,
                  refCount: 0,
                  connectionPromise: null,
                }),
                (this._defaultServiceMosaicRule = null),
                (this._serviceSourceType = null),
                (this._serviceSupportsMosaicRule = null),
                (this.rasterAttributeTableFieldPrefix = 'Raster.'),
                (this.adjustAspectRatio = null),
                (this.bandCount = null),
                (this.bandIds = void 0),
                (this.capabilities = null),
                (this.compressionQuality = void 0),
                (this.compressionTolerance = 0.01),
                (this.copyright = null),
                (this.definitionExpression = null),
                (this.exportImageServiceParameters = null),
                (this.rasterInfo = null),
                (this.fields = null),
                (this.fullExtent = null),
                (this.hasMultidimensions = !1),
                (this.imageMaxHeight = 4100),
                (this.imageMaxWidth = 4100),
                (this.interpolation = void 0),
                (this.minScale = 0),
                (this.maxScale = 0),
                (this.multidimensionalInfo = null),
                (this.noData = null),
                (this.noDataInterpretation = void 0),
                (this.objectIdField = null),
                (this.geometryType = 'polygon'),
                (this.typeIdField = null),
                (this.types = []),
                (this.pixelSizeX = null),
                (this.pixelSizeY = null),
                (this.pixelFilter = null),
                (this.raster = void 0),
                (this.viewId = void 0),
                (this.symbolizer = null),
                (this.rasterAttributeTable = null),
                (this.rasterFunctionInfos = null),
                (this.serviceDataType = null),
                (this.spatialReference = null),
                (this.pixelType = null),
                (this.serviceRasterInfo = null),
                (this.sourceJSON = null),
                (this.url = null),
                (this.version = void 0);
            }
            initialize() {
              this._set(
                'exportImageServiceParameters',
                new le({ layer: this }),
              );
            }
            readDefaultServiceMosaicRule(e, t) {
              return this._serviceSupportsMosaicRule ? ae.fromJSON(t) : null;
            }
            readServiceSourceType(e, t) {
              return this._isMosaicDataset(t)
                ? 'mosaic-dataset'
                : 'raster-dataset';
            }
            readServiceSupportsMosaicRule(e, t) {
              return this._isMosaicRuleSupported(t);
            }
            get rasterFunctionNamesIndex() {
              const e = new Map();
              return (
                !this.rasterFunctionInfos ||
                  ((0, a.pC)(this.rasterFunctionInfos) &&
                    this.rasterFunctionInfos.length < 1) ||
                  ((0, a.pC)(this.rasterFunctionInfos) &&
                    this.rasterFunctionInfos.forEach((t) => {
                      e.set(t.name.toLowerCase().replace(/ /gi, '_'), t.name);
                    })),
                e
              );
            }
            readBandIds(e, t) {
              if (
                Array.isArray(e) &&
                e.length > 0 &&
                e.every((e) => 'number' == typeof e)
              )
                return e;
            }
            readCapabilities(e, t) {
              return this._readCapabilities(t);
            }
            writeCompressionQuality(e, t, i) {
              null != e && 'lerc' !== this.format && (t[i] = e);
            }
            writeCompressionTolerance(e, t, i) {
              'lerc' === this.format && null != e && (t[i] = e);
            }
            get fieldsIndex() {
              return this.fields ? new pe.Z(this.fields) : null;
            }
            set format(e) {
              e &&
                pt.has(e.toLowerCase()) &&
                this._set('format', e.toLowerCase());
            }
            readFormat(e, t) {
              return 'esriImageServiceDataTypeVector-UV' ===
                t.serviceDataType ||
                'esriImageServiceDataTypeVector-MagDir' === t.serviceDataType ||
                null != this.pixelFilter
                ? 'lerc'
                : 'jpgpng';
            }
            readMinScale(e, t) {
              return null != t.minLOD && null != t.maxLOD ? e : 0;
            }
            readMaxScale(e, t) {
              return null != t.minLOD && null != t.maxLOD ? e : 0;
            }
            set mosaicRule(e) {
              let t = e;
              t &&
                t.mosaicMethod &&
                (t = ae.fromJSON({
                  ...t.toJSON(),
                  mosaicMethod: t.mosaicMethod,
                  mosaicOperation: t.mosaicOperation,
                })),
                this._set('mosaicRule', t);
            }
            readMosaicRule(e, t) {
              const i = e || t.mosaicRule;
              return i
                ? ae.fromJSON(i)
                : this._isMosaicRuleSupported(t)
                ? ae.fromJSON(t)
                : null;
            }
            writeMosaicRule(e, t, i) {
              let r = this.mosaicRule;
              const n = this.definitionExpression;
              r
                ? n && n !== r.where && ((r = r.clone()), (r.where = n))
                : n && (r = new ae({ where: n })),
                this._isValidCustomizedMosaicRule(r) && (t[i] = r.toJSON());
            }
            writeNoData(e, t, i) {
              null != e && 'number' == typeof e && (t[i] = ct(e));
            }
            readObjectIdField(e, t) {
              if (!e) {
                const i = t.fields.filter(
                  (e) => 'esriFieldTypeOID' === e.type || 'oid' === e.type,
                );
                e = i && i[0] && i[0].name;
              }
              return e;
            }
            get parsedUrl() {
              return this.url ? (0, _.mN)(this.url) : null;
            }
            set renderer(e) {
              this.loaded && (e = this._configRenderer(e)),
                this._set('renderer', e);
            }
            readRenderer(e, t, i) {
              var r, n;
              const s =
                  null == t ||
                  null == (r = t.layerDefinition) ||
                  null == (n = r.drawingInfo)
                    ? void 0
                    : n.renderer,
                a = (0, f.ij)(s, i);
              return null == a
                ? null
                : ('vector-field' === a.type &&
                    t.symbolTileSize &&
                    !s.symbolTileSize &&
                    (a.symbolTileSize = t.symbolTileSize),
                  k(a) ||
                    lt.warn(
                      'ArcGISImageService',
                      "Imagery layer doesn't support given renderer type.",
                    ),
                  a);
            }
            writeRenderer(e, t, i) {
              (t.layerDefinition = t.layerDefinition || {}),
                (t.layerDefinition.drawingInfo =
                  t.layerDefinition.drawingInfo || {}),
                (t.layerDefinition.drawingInfo.renderer = e.toJSON()),
                'vector-field' === e.type &&
                  (t.symbolTileSize = e.symbolTileSize);
            }
            get rasterFields() {
              const e = this.rasterAttributeTableFieldPrefix || 'Raster.',
                t = new ue.Z({
                  name: 'Raster.ItemPixelValue',
                  alias: 'Item Pixel Value',
                  domain: null,
                  editable: !1,
                  length: 50,
                  type: 'string',
                }),
                i = new ue.Z({
                  name: 'Raster.ServicePixelValue',
                  alias: 'Service Pixel Value',
                  domain: null,
                  editable: !1,
                  length: 50,
                  type: 'string',
                }),
                r = new ue.Z({
                  name: 'Raster.ServicePixelValue.Raw',
                  alias: 'Raw Service Pixel Value',
                  domain: null,
                  editable: !1,
                  length: 50,
                  type: 'string',
                });
              let n = this.fields ? (0, R.d9)(this.fields) : [];
              n.push(i),
                this.capabilities.operations.supportsQuery &&
                  this.fields &&
                  this.fields.length > 0 &&
                  n.push(t),
                this.version >= 10.4 &&
                  (0, a.pC)(this.rasterFunctionInfos) &&
                  this.rasterFunctionInfos.some(
                    (e) => 'none' === e.name.toLowerCase(),
                  ) &&
                  n.push(r),
                (0, a.pC)(this.rasterFunctionInfos) &&
                  this.rasterFunctionInfos
                    .filter((e) => 'none' !== e.name.toLowerCase())
                    .forEach((e) => {
                      n.push(
                        new ue.Z({
                          name: 'Raster.ServicePixelValue.' + e.name,
                          alias: e.name,
                          domain: null,
                          editable: !1,
                          length: 50,
                          type: 'string',
                        }),
                      );
                    }),
                null == this.pixelFilter ||
                  ('esriImageServiceDataTypeVector-UV' !==
                    this.serviceDataType &&
                    'esriImageServiceDataTypeVector-MagDir' !==
                      this.serviceDataType) ||
                  (n.push(
                    new ue.Z({
                      name: 'Raster.Magnitude',
                      alias: 'Magnitude',
                      domain: null,
                      editable: !1,
                      type: 'double',
                    }),
                  ),
                  n.push(
                    new ue.Z({
                      name: 'Raster.Direction',
                      alias: 'Direction',
                      domain: null,
                      editable: !1,
                      type: 'double',
                    }),
                  ));
              const s =
                (this.rasterInfo.attributeTable &&
                  this.rasterInfo.attributeTable.fields) ||
                null;
              if (s && s.length > 0) {
                const t = s
                  .filter(
                    (e) =>
                      'esriFieldTypeOID' !== e.type &&
                      'value' !== e.name.toLowerCase(),
                  )
                  .map((t) => {
                    const i = (0, R.d9)(t);
                    return (i.name = e + t.name), i;
                  });
                n = n.concat(t);
              }
              return n;
            }
            set renderingRule(e) {
              let t = e;
              t &&
                t.rasterFunction &&
                (t = M.fromJSON({
                  ...t.toJSON(),
                  rasterFunction: t.rasterFunction,
                  rasterFunctionArguments: t.rasterFunctionArguments,
                })),
                this._set('renderingRule', t);
            }
            readRenderingRule(e, t) {
              const i = t.rasterFunctionInfos;
              return t.renderingRule || (i && i.length && 'None' !== i[0].name)
                ? this._isRFTJson(t.renderingRule)
                  ? M.fromJSON({ rasterFunctionDefinition: t.renderingRule })
                  : M.fromJSON(
                      t.renderingRule || {
                        rasterFunctionInfos: t.rasterFunctionInfos,
                      },
                    )
                : null;
            }
            writeRenderingRule(e, t, i) {
              const r = e.toJSON();
              r.rasterFunctionDefinition
                ? (t[i] = r.rasterFunctionDefinition)
                : (t[i] = r);
            }
            readSpatialReference(e, t) {
              const i = e || t.extent.spatialReference;
              return i ? Re.Z.fromJSON(i) : null;
            }
            readPixelType(e) {
              return ut.fromJSON(e) || e;
            }
            writePixelType(e, t, i) {
              ((0, a.Wi)(this.serviceRasterInfo) ||
                this.pixelType !== this.serviceRasterInfo.pixelType) &&
                (t[i] = ut.toJSON(e));
            }
            readVersion(e, t) {
              let i = t.currentVersion;
              return (
                i ||
                  (i =
                    t.hasOwnProperty('fields') || t.hasOwnProperty('timeInfo')
                      ? 10
                      : 9.3),
                i
              );
            }
            applyFilter(e) {
              let t = e;
              return (
                this.pixelFilter &&
                  ((t = this._clonePixelData(e)), this.pixelFilter(t)),
                t
              );
            }
            async applyRenderer(e, t) {
              let i = e;
              if (
                !this._isPicture() &&
                this.renderer &&
                this.symbolizer &&
                !this.pixelFilter
              ) {
                const r =
                    JSON.stringify(this._cachedRendererJson) !==
                    JSON.stringify(this.renderer.toJSON()),
                  n = this._rasterJobHandler.instance,
                  { bandIds: s } = this;
                if (n) {
                  r &&
                    (this.symbolizer.bind(),
                    await n.updateSymbolizer(this.symbolizer, t),
                    (this._cachedRendererJson = this.renderer.toJSON()));
                  const a = await n.symbolize({ bandIds: s, ...e }, t);
                  i = { extent: e.extent, pixelBlock: a };
                } else
                  i = {
                    extent: e.extent,
                    pixelBlock: this.symbolizer.symbolize({ bandIds: s, ...e }),
                  };
              }
              return i;
            }
            destroy() {
              this._shutdownJobHandler();
            }
            increaseRasterJobHandlerUsage() {
              this._rasterJobHandler.refCount++;
            }
            decreaseRasterJobHandlerUsage() {
              this._rasterJobHandler.refCount--,
                this._rasterJobHandler.refCount <= 0 &&
                  this._shutdownJobHandler();
            }
            async computeAngles(e, t) {
              if (
                (await this._fetchCapabilities(null == t ? void 0 : t.signal),
                !this.capabilities.operations.supportsComputeAngles)
              )
                throw new b.Z(
                  'imagery-layer:compute-angles',
                  'this operation is not supported on the input image service',
                );
              return (
                (e = (0, p.TJ)(Qe, e).clone()),
                (async function (e, t, i) {
                  var r;
                  const n = t.toJSON();
                  (0, a.pC)(n.angleName) &&
                    (n.angleName = n.angleName.join(',')),
                    (0, a.pC)(t.point) &&
                      null != (r = t.point.spatialReference) &&
                      r.imageCoordinateSystem &&
                      (n.point.spatialReference = Ae(t.point.spatialReference)),
                    (0, a.pC)(t.spatialReference) &&
                      t.spatialReference.imageCoordinateSystem &&
                      (n.spatialReference = Me(t.spatialReference));
                  const s = (0, ve.en)(e),
                    o = (0, ve.cv)({ ...s.query, f: 'json', ...n }),
                    l = (0, ve.lA)(o, i),
                    { data: u } = await (0, g.default)(
                      `${s.path}/computeAngles`,
                      l,
                    );
                  return (
                    (u.spatialReference = u.spatialReference
                      ? null != u.spatialReference.geodataXform
                        ? new Re.Z({
                            wkid: 0,
                            imageCoordinateSystem: u.spatialReference,
                          })
                        : Re.Z.fromJSON(u.spatialReference)
                      : null),
                    'NaN' === u.north && (u.north = null),
                    'NaN' === u.up && (u.up = null),
                    new _e(u)
                  );
                })(this.url, e, this._getRequestOptions(t))
              );
            }
            async computePixelSpaceLocations(e, t) {
              if (
                (await this._fetchCapabilities(null == t ? void 0 : t.signal),
                !this.capabilities.operations.supportsComputePixelLocation)
              )
                throw new b.Z(
                  'imagery-layer:compute-pixel-space-locations',
                  'this operation is not supported on the input image service',
                );
              return (
                (e = (0, p.TJ)(rt, e).clone()),
                (async function (e, t, i) {
                  const r = t.toJSON(),
                    { geometries: n } = t;
                  for (let e = 0; e < n.length; e++) {
                    var s;
                    null != (s = n[e].spatialReference) &&
                      s.imageCoordinateSystem &&
                      (r.geometries.geometries[e].spatialReference = Ae(
                        n[e].spatialReference,
                      ));
                  }
                  const a = (0, ve.en)(e),
                    o = (0, ve.cv)({ ...a.query, f: 'json', ...r }),
                    l = (0, ve.lA)(o, i),
                    { data: u } = await (0, g.default)(
                      `${a.path}/computePixelLocation`,
                      l,
                    );
                  return Pe.fromJSON(u);
                })(this.url, e, this._getRequestOptions(t))
              );
            }
            async computeHistograms(e, t) {
              if (
                (await this._fetchCapabilities(null == t ? void 0 : t.signal),
                !this.capabilities.operations.supportsComputeHistograms)
              )
                throw new b.Z(
                  'imagery-layer:compute-histograms',
                  'this operation is not supported on the input image service',
                );
              e = (0, p.TJ)(Xe, e).clone();
              const { raster: i, mosaicRule: r, renderingRule: n } = this;
              return (
                n && null == e.renderingRule && (e.renderingRule = n),
                r && null == e.mosaicRule && (e.mosaicRule = r),
                i && null == e.raster && (e.raster = i),
                (async function (e, t, i) {
                  const r = await je(e, t, i),
                    n = (0, ve.en)(e),
                    { data: s } = await (0, g.default)(
                      `${n.path}/computeHistograms`,
                      r,
                    );
                  return { histograms: s.histograms };
                })(this.url, e, this._getRequestOptions(t))
              );
            }
            async computeStatisticsHistograms(e, t) {
              if (
                (await this._fetchCapabilities(null == t ? void 0 : t.signal),
                !this.capabilities.operations
                  .supportsComputeStatisticsHistograms)
              )
                throw new b.Z(
                  'imagery-layer:compute-statistics-histograms',
                  'this operation is not supported on the input image service',
                );
              e = (0, p.TJ)(Xe, e).clone();
              const { raster: i, mosaicRule: r, renderingRule: n } = this;
              return (
                n && null == e.renderingRule && (e.renderingRule = n),
                r && null == e.mosaicRule && (e.mosaicRule = r),
                i && null == e.raster && (e.raster = i),
                (async function (e, t, i) {
                  const r = await je(e, t, i),
                    n = (0, ve.en)(e),
                    { data: s } = await (0, g.default)(
                      `${n.path}/computeStatisticsHistograms`,
                      r,
                    ),
                    { statistics: a } = s;
                  return (
                    null != a &&
                      a.length &&
                      a.forEach((e) => {
                        (e.avg = e.mean), (e.stddev = e.standardDeviation);
                      }),
                    { statistics: a, histograms: s.histograms }
                  );
                })(this.url, e, this._getRequestOptions(t))
              );
            }
            getField(e) {
              const { fieldsIndex: t } = this;
              return (0, a.pC)(t) ? t.get(e) : void 0;
            }
            getFieldDomain(e, t) {
              const i = this.getField(e);
              return i ? i.domain : null;
            }
            fetchImage(e, t, i, r = {}) {
              if (null == e || null == t || null == i)
                return Promise.reject(
                  new b.Z(
                    'imagery-layer:fetch-image',
                    'Insufficient parameters for requesting an image. A valid extent, width and height values are required.',
                  ),
                );
              const n =
                this.renderer || this.symbolizer
                  ? this.generateRasterInfo(this.renderingRule, {
                      signal: r.signal,
                    })
                  : null;
              return (0, l.gx)(n).then((n) => {
                n && (this.rasterInfo = n);
                const s = {
                  imageServiceParameters: this.getExportImageServiceParameters(
                    e,
                    t,
                    i,
                    r.timeExtent,
                  ),
                  imageProps: {
                    extent: e,
                    width: t,
                    height: i,
                    format: this.format,
                  },
                  requestAsImageElement:
                    (r.requestAsImageElement && !this.pixelFilter) || !1,
                  signal: r.signal,
                };
                return this._requestArrayBuffer(s);
              });
            }
            fetchKeyProperties(e) {
              return (0, g.default)(this.parsedUrl.path + '/keyProperties', {
                query: this._getQueryParams({
                  renderingRule:
                    this.version >= 10.3
                      ? null == e
                        ? void 0
                        : e.renderingRule
                      : null,
                }),
              }).then((e) => e.data);
            }
            fetchRasterAttributeTable(e) {
              return this.version < 10.1
                ? Promise.reject(
                    new b.Z(
                      '#fetchRasterAttributeTable()',
                      'Failed to get rasterAttributeTable',
                    ),
                  )
                : (0, g.default)(
                    this.parsedUrl.path + '/rasterAttributeTable',
                    {
                      query: this._getQueryParams({
                        renderingRule:
                          this.version >= 10.3
                            ? null == e
                              ? void 0
                              : e.renderingRule
                            : null,
                      }),
                    },
                  ).then((e) => Se.default.fromJSON(e.data));
            }
            async getCatalogItemRasterInfo(e, t) {
              const i = (0, g.default)(
                  this.parsedUrl.path + '/' + e + '/info',
                  { query: this._getQueryParams(), ...t },
                ).then((e) => e.data),
                r = (0, g.default)(
                  this.parsedUrl.path + '/' + e + '/info/keyProperties',
                  { query: this._getQueryParams(), ...t },
                )
                  .then((e) => e.data)
                  .catch(() => {}),
                n = await Promise.all([i, r]);
              if (!n[0]) return;
              const s = ze.Z.fromJSON(n[0].extent),
                a = n[0].statistics
                  ? n[0].statistics.map((e) => ({
                      min: e[0],
                      max: e[1],
                      avg: e[2],
                      stddev: e[3],
                    }))
                  : null;
              return new me.Z({
                bandCount: n[0].bandCount,
                extent: s,
                spatialReference: s.sr,
                pixelSize: new ie.Z({
                  x: n[0].pixelSizeX,
                  y: n[0].pixelSizeY,
                  spatialReference: s.sr,
                }),
                pixelType: n[0].pixelType.toLowerCase(),
                statistics: a,
                histograms: n[0].histograms,
                keyProperties: n[1] || {},
              });
            }
            async getCatalogItemICSInfo(e, t) {
              const { data: i } = await (0, g.default)(
                  this.parsedUrl.path + '/' + e + '/info/ics',
                  { query: this._getQueryParams(), ...t },
                ),
                r = i && i.ics;
              if (!r) return;
              let n = null;
              try {
                n = (
                  await (0, g.default)(
                    this.parsedUrl.path + '/' + e + '/info',
                    { query: this._getQueryParams(), ...t },
                  )
                ).data.extent;
              } catch {}
              if (!n || !n.spatialReference)
                return {
                  ics: r,
                  icsToPixelTransform: null,
                  icsExtent: null,
                  northDirection: null,
                };
              const s =
                  this.version >= 10.7
                    ? (0, g.default)(
                        this.parsedUrl.path + '/' + e + '/info/icstopixel',
                        { query: this._getQueryParams(), ...t },
                      )
                        .then((e) => e.data)
                        .catch(() => ({}))
                    : {},
                a = n.spatialReference,
                o = {
                  geometries: JSON.stringify({
                    geometryType: 'esriGeometryEnvelope',
                    geometries: [n],
                  }),
                  inSR: a.wkid || JSON.stringify(a),
                  outSR: '0:' + e,
                },
                l = (0, g.default)(this.parsedUrl.path + '/project', {
                  query: this._getQueryParams(o),
                  ...t,
                })
                  .then((e) => e.data)
                  .catch(() => ({})),
                u = (n.xmin + n.xmax) / 2,
                p = (n.ymax - n.ymin) / 6,
                c = n.ymin + p,
                m = [];
              for (let e = 0; e < 5; e++) m.push({ x: u, y: c + p * e });
              const d = {
                  geometries: JSON.stringify({
                    geometryType: 'esriGeometryPoint',
                    geometries: m,
                  }),
                  inSR: a.wkid || JSON.stringify(a),
                  outSR: '0:' + e,
                },
                h = (0, g.default)(this.parsedUrl.path + '/project', {
                  query: this._getQueryParams(d),
                  ...t,
                })
                  .then((e) => e.data)
                  .catch(() => ({})),
                y = await Promise.all([s, l, h]);
              let f = y[0].ipxf;
              if (null == f) {
                var b, v, R;
                const e = null == (b = r.geodataXform) ? void 0 : b.xf_0;
                'topup' ===
                  (null == e || null == (v = e.name)
                    ? void 0
                    : v.toLowerCase()) &&
                  6 ===
                    (null == e || null == (R = e.coefficients)
                      ? void 0
                      : R.length) &&
                  (f = {
                    affine: {
                      name: 'ics [sensor: Frame] to pixel (column, row) transformation',
                      coefficients: e.coefficients,
                      cellsizeRatio: 0,
                      type: 'GeometricXform',
                    },
                  });
              }
              const w = ze.Z.fromJSON(
                y[1] && y[1].geometries && y[1].geometries[0],
              );
              w &&
                (w.spatialReference = new Re.Z({
                  wkid: 0,
                  imageCoordinateSystem: r,
                }));
              const _ = y[2].geometries
                  ? y[2].geometries.filter(
                      (e) =>
                        null != e &&
                        null != e.x &&
                        null != e.y &&
                        'NaN' !== e.x &&
                        'NaN' !== e.y,
                    )
                  : [],
                S = _.length;
              if (S < 3)
                return {
                  ics: r,
                  icsToPixelTransform: f,
                  icsExtent: w,
                  northDirection: null,
                };
              let C = 0,
                x = 0,
                I = 0,
                F = 0;
              for (let e = 0; e < S; e++)
                (C += _[e].x),
                  (x += _[e].y),
                  (I += _[e].x * _[e].x),
                  (F += _[e].x * _[e].y);
              const N = (S * F - C * x) / (S * I - C * C);
              let T = 0;
              const D = _[4].x > _[0].x,
                P = _[4].y > _[0].y;
              return (
                N === 1 / 0
                  ? (T = P ? 90 : 270)
                  : 0 === N
                  ? (T = D ? 0 : 180)
                  : N > 0
                  ? (T = D
                      ? (180 * Math.atan(N)) / Math.PI
                      : (180 * Math.atan(N)) / Math.PI + 180)
                  : N < 0 &&
                    (T = P
                      ? 180 + (180 * Math.atan(N)) / Math.PI
                      : 360 + (180 * Math.atan(N)) / Math.PI),
                {
                  ics: r,
                  icsToPixelTransform: f,
                  icsExtent: w,
                  northDirection: T,
                }
              );
            }
            async generateRasterInfo(e, t) {
              var i;
              if (
                (!e ||
                  'none' ===
                    (null == e || null == (i = e.functionName)
                      ? void 0
                      : i.toLowerCase()) ||
                  this._isVectorFieldResampleFunction(e)) &&
                (0, a.pC)(this.serviceRasterInfo)
              )
                return this.serviceRasterInfo;
              const r = (function (e) {
                if (!e) return null;
                const t = JSON.stringify(e).match(/"rasterFunction":"(.*?")/gi),
                  i =
                    null == t
                      ? void 0
                      : t.map((e) =>
                          e.replace('"rasterFunction":"', '').replace('"', ''),
                        );
                return i ? i.join('/') : null;
              })(e);
              if (this._functionRasterInfos[r])
                return this._functionRasterInfos[r];
              const n = this._generateRasterInfo(e, t);
              this._functionRasterInfos[r] = n;
              try {
                return await n;
              } catch {
                return (this._functionRasterInfos[r] = null), null;
              }
            }
            getExportImageServiceParameters(e, t, i, r) {
              var n;
              const s = Me(
                (e = e.clone().shiftCentralMeridian()).spatialReference,
                this.parsedUrl.path,
              );
              (0, a.pC)(this.serviceRasterInfo) &&
                this.pixelType !== this.serviceRasterInfo.pixelType &&
                (this.exportImageServiceParameters.pixelType = this.pixelType);
              const o = this.exportImageServiceParameters.toJSON(),
                { bandIds: l, noData: u } = o;
              let { renderingRule: p } = o;
              const c =
                  null == (n = this.renderingRule)
                    ? void 0
                    : n.rasterFunctionDefinition,
                m = !this.renderer || 'raster-stretch' === this.renderer.type;
              if (
                null != l &&
                l.length &&
                this._hasRenderingRule(this.renderingRule) &&
                !c &&
                m
              ) {
                const e = {
                  rasterFunction: 'ExtractBand',
                  rasterFunctionArguments: { BandIds: l },
                };
                if ('Stretch' === p.rasterFunction)
                  (e.rasterFunctionArguments.Raster =
                    p.rasterFunctionArguments.Raster),
                    (p.rasterFunctionArguments.Raster = e);
                else if ('Colormap' === p.rasterFunction) {
                  const t = p.rasterFunctionArguments.Raster;
                  'Stretch' === (null == t ? void 0 : t.rasterFunction)
                    ? ((e.rasterFunctionArguments.Raster =
                        t.rasterFunctionArguments.Raster),
                      (t.rasterFunctionArguments.Raster = e))
                    : ((e.rasterFunctionArguments.Raster = t),
                      (p.rasterFunctionArguments.Raster = e));
                } else (e.rasterFunctionArguments.Raster = p), (p = e);
                o.bandIds = void 0;
              } else o.bandIds = null == l ? void 0 : l.join(',');
              u instanceof Array && u.length > 0 && (o.noData = u.join(','));
              const d = this._serviceSupportsMosaicRule
                ? this._combineMosaicRuleWithTimeExtent(
                    this.exportImageServiceParameters.mosaicRule,
                    r,
                  )
                : null;
              (o.mosaicRule = d && JSON.stringify(d)),
                (o.renderingRule = this._getRenderingRuleString(M.fromJSON(p)));
              const h = {};
              if (r) {
                const { start: e, end: t } = r.toJSON();
                e && t && e === t
                  ? (h.time = '' + e)
                  : (null == e && null == t) ||
                    (h.time = `${null == e ? 'null' : e},${
                      null == t ? 'null' : t
                    }`);
              }
              return {
                bbox: e.xmin + ',' + e.ymin + ',' + e.xmax + ',' + e.ymax,
                bboxSR: s,
                imageSR: s,
                size: t + ',' + i,
                ...o,
                ...h,
              };
            }
            async getSamples(e, t) {
              if (
                (await this._fetchCapabilities(null == t ? void 0 : t.signal),
                !this.capabilities.operations.supportsGetSamples)
              )
                throw new b.Z(
                  'imagery-layer:get-samples',
                  'getSamples operation is not supported on the input image service',
                );
              e = (0, p.TJ)(at, e).clone();
              const { raster: i } = this;
              return (
                i && null == e.raster && (e.raster = i),
                (async function (e, t, i) {
                  var r, n;
                  const s = t.toJSON();
                  Oe(s),
                    null != (r = s.outFields) &&
                      r.length &&
                      (s.outFields = s.outFields.join(','));
                  const o = await (0, be.aX)(t.geometry),
                    l = null == o ? void 0 : o[0];
                  (0, a.pC)(l) && (s.geometry = l.toJSON());
                  const u = (0, ve.en)(e),
                    p = (0, ve.cv)({ ...u.query, f: 'json', ...s }),
                    c = (0, ve.lA)(p, i),
                    { data: m } = await (0, g.default)(
                      `${u.path}/getSamples`,
                      c,
                    ),
                    d =
                      null == m || null == (n = m.samples)
                        ? void 0
                        : n.map((e) => {
                            const t =
                              'NaN' === e.value || '' === e.value
                                ? null
                                : e.value.split(' ').map((e) => Number(e));
                            return { ...e, pixelValue: t };
                          });
                  return Te.fromJSON({ samples: d });
                })(this.url, e, this._getRequestOptions(t))
              );
            }
            async identify(e, t) {
              if (
                (await this._fetchCapabilities(null == t ? void 0 : t.signal),
                !this.capabilities.operations.supportsIdentify)
              )
                throw new b.Z(
                  'imagery-layer:query-rasters',
                  'query operation is not supported on the input image service',
                );
              e = (0, p.TJ)(et, e).clone();
              const { raster: i, mosaicRule: r, renderingRule: n } = this;
              if (
                (n && null == e.renderingRule && (e.renderingRule = n),
                r && null == e.mosaicRule)
              ) {
                const t = this._combineMosaicRuleWithTimeExtent(
                  r,
                  e.timeExtent,
                );
                e.mosaicRule = (0, a.Wg)(t);
              }
              return (
                i && null == e.raster && (e.raster = i),
                Ve(this.url, e, this._getRequestOptions(t))
              );
            }
            createQuery() {
              const e = new Ze.Z();
              return (
                (e.outFields = ['*']),
                (e.returnGeometry = !0),
                (e.where = this.definitionExpression || '1=1'),
                e
              );
            }
            async queryRasters(e, t) {
              return (
                ({ query: e, requestOptions: t } = await this._prepareForQuery(
                  e,
                  t,
                )),
                (0, ke.e)(this.url, e, t)
              );
            }
            async queryObjectIds(e, t) {
              return (
                ({ query: e, requestOptions: t } = await this._prepareForQuery(
                  e,
                  t,
                )),
                (0, Ue.G)(this.url, e, t)
              );
            }
            async queryRasterCount(e, t) {
              return (
                ({ query: e, requestOptions: t } = await this._prepareForQuery(
                  e,
                  t,
                )),
                (0, Ee.P)(this.url, e, t)
              );
            }
            async queryVisibleRasters(e, t) {
              if (!e)
                throw new b.Z(
                  'imagery-layer: query-visible-rasters',
                  'missing query parameter',
                );
              const {
                pixelSize: i,
                returnDomainValues: r,
                returnTopmostRaster: n,
                showNoDataRecords: s,
              } = t || {
                pixelSize: null,
                returnDomainValues: !1,
                returnTopmostRaster: !1,
                showNoDataRecords: !1,
              };
              let o = !1,
                l = null,
                u = null;
              const p = 'raster.servicepixelvalue',
                c = this.rasterFunctionNamesIndex;
              if (
                (0, a.pC)(e.outFields) &&
                ((o = e.outFields.some(
                  (e) => -1 === e.toLowerCase().indexOf(p),
                )),
                this.version >= 10.4)
              ) {
                const t = e.outFields
                  .filter(
                    (e) =>
                      e.toLowerCase().indexOf(p) > -1 && e.length > p.length,
                  )
                  .map((e) => {
                    const t = e.slice(p.length + 1);
                    return [this._updateRenderingRulesFunctionName(t, c), t];
                  });
                (l = t.map((e) => new M({ functionName: e[0] }))),
                  (u = t.map((e) => e[1])),
                  0 === l.length
                    ? this.renderingRule
                      ? (l.push(this.renderingRule),
                        u.push(this.renderingRule.functionName))
                      : (l = null)
                    : this.renderingRule &&
                      !l.some(
                        (e) =>
                          e.functionName === this.renderingRule.functionName,
                      ) &&
                      (l.push(this.renderingRule),
                      u.push(this.renderingRule.functionName));
              }
              const m =
                  (0, a.Wi)(e.outSpatialReference) ||
                  e.outSpatialReference.equals(this.spatialReference),
                d = e.timeExtent || this.timeExtent,
                h = this._combineMosaicRuleWithTimeExtent(
                  this.exportImageServiceParameters.mosaicRule,
                  d,
                ),
                y = this._getQueryParams({
                  geometry: e.geometry,
                  timeExtent: d,
                  mosaicRule: h,
                  renderingRule:
                    this.version < 10.4 ? this.renderingRule : null,
                  renderingRules: l,
                  pixelSize: i,
                  returnCatalogItems: o,
                  returnGeometry: m,
                  raster: this.raster,
                  maxItemCount: n ? 1 : null,
                });
              delete y.f;
              const f = new et(y);
              try {
                var g, v;
                await this.generateRasterInfo(this.renderingRule);
                const i = await Ve(this.url, f, {
                    signal: null == t ? void 0 : t.signal,
                    query: { ...this.customParameters },
                  }),
                  n = e.outFields,
                  l = i.value.toLowerCase().indexOf('nodata') > -1;
                if (
                  !o ||
                  m ||
                  !(null == i || null == (g = i.catalogItems)
                    ? void 0
                    : g.features.length) ||
                  (!s && l)
                )
                  return this._processVisibleRastersResponse(i, {
                    returnDomainValues: r,
                    templateRRFunctionNames: u,
                    showNoDataRecords: s,
                    templateFields: n,
                  });
                const p = this.objectIdField || 'ObjectId',
                  c = i.catalogItems.features,
                  d = c.map((e) => {
                    var t;
                    return null == (t = e.attributes) ? void 0 : t[p];
                  }),
                  h = new Ze.Z({
                    objectIds: d,
                    returnGeometry: !0,
                    outSpatialReference: e.outSpatialReference,
                    outFields: [p],
                  }),
                  y = await this.queryRasters(h);
                return (
                  null != y &&
                    null != (v = y.features) &&
                    v.length &&
                    y.features.forEach((t) => {
                      c.forEach((i) => {
                        i.attributes[p] === t.attributes[p] &&
                          ((i.geometry = new Le.Z(t.geometry)),
                          (0, a.pC)(e.outSpatialReference) &&
                            (i.geometry.spatialReference =
                              e.outSpatialReference));
                      });
                    }),
                  this._processVisibleRastersResponse(i, {
                    returnDomainValues: r,
                    templateRRFunctionNames: u,
                    showNoDataRecords: s,
                    templateFields: n,
                  })
                );
              } catch {
                throw new b.Z(
                  'imagery-layer:query-visible-rasters',
                  'encountered error when querying visible rasters',
                );
              }
            }
            async fetchVariableStatisticsHistograms(e, t) {
              const i = (0, g.default)(this.parsedUrl.path + '/statistics', {
                  query: this._getQueryParams({ variable: e }),
                  signal: t,
                }).then((e) => {
                  var t;
                  return null == (t = e.data) ? void 0 : t.statistics;
                }),
                r = (0, g.default)(this.parsedUrl.path + '/histograms', {
                  query: this._getQueryParams({ variable: e }),
                  signal: t,
                }).then((e) => {
                  var t;
                  return null == (t = e.data) ? void 0 : t.histograms;
                }),
                n = await Promise.all([i, r]);
              return (
                n[0] &&
                  n[0].forEach((e) => {
                    (e.avg = e.mean), (e.stddev = e.standardDeviation);
                  }),
                { statistics: n[0] || null, histograms: n[1] || null }
              );
            }
            async createStreamlinesMesh(e, t) {
              const i = this._rasterJobHandler.instance;
              return i
                ? i.createStreamlinesMesh(e, t)
                : (0, ot.z_)(
                    e.rendererSettings,
                    e.flowData,
                    (0, a.pC)(t.signal)
                      ? t.signal
                      : new AbortController().signal,
                  );
            }
            async _fetchService(e) {
              await this._fetchServiceInfo(e),
                (0, a.pC)(this.serviceRasterInfo) &&
                  !this.rasterInfo &&
                  (this.rasterInfo = this.serviceRasterInfo);
              const t = this.sourceJSON,
                i = (0, a.pC)(this.serviceRasterInfo)
                  ? Promise.resolve(this.serviceRasterInfo)
                  : this._fetchAuxiliaryRasterInfo({
                      serviceInfo: t,
                      signal: e,
                    }).then((e) => (this._set('serviceRasterInfo', e), e)),
                r = this._hasRenderingRule(this.renderingRule)
                  ? this.generateRasterInfo(this.renderingRule, { signal: e })
                  : null,
                n = this._getRasterFunctionInfos();
              return Promise.all([i, r, n]).then((e) => {
                e[1]
                  ? this._set('rasterInfo', e[1])
                  : this._set('rasterInfo', e[0]),
                  e[2] && this._set('rasterFunctionInfos', e[2]),
                  this.renderer &&
                    !this._isSupportedRenderer(this.renderer) &&
                    (this._set('renderer', null),
                    lt.warn(
                      'ArcGISImageService',
                      'Switching to the default renderer. Renderer applied is not valid for this Imagery Layer',
                    )),
                  this._set('renderer', this._configRenderer(this.renderer)),
                  this.watch('renderingRule', (e) => {
                    (this.renderer ||
                      this.symbolizer ||
                      (this.popupEnabled && this.popupTemplate)) &&
                      this.generateRasterInfo(e).then((e) => {
                        e && (this.rasterInfo = e);
                      });
                  });
                const t =
                  (0, a.pC)(this.serviceRasterInfo) &&
                  this.serviceRasterInfo.multidimensionalInfo;
                t && this._updateMultidimensionalDefinition(t);
              });
            }
            _combineMosaicRuleWithTimeExtent(e, t) {
              const i = this.timeInfo;
              if (
                (0, a.Wi)(e) ||
                (0, a.Wi)(this.multidimensionalInfo) ||
                (0, a.Wi)(t) ||
                (0, a.Wi)(null == i ? void 0 : i.startField)
              )
                return e;
              const { startField: r } = i;
              var n;
              if (
                ((e = e.clone()), 'mosaic-dataset' === this._serviceSourceType)
              )
                return (
                  (e.multidimensionalDefinition =
                    null == (n = e.multidimensionalDefinition)
                      ? void 0
                      : n.filter((e) => e.dimensionName !== r)),
                  this._cleanupMultidimensionalDefinition(e)
                );
              e.multidimensionalDefinition = e.multidimensionalDefinition || [];
              const s = e.multidimensionalDefinition.filter(
                  (e) => e.dimensionName === r,
                ),
                o = (0, a.pC)(t.start) ? t.start.getTime() : null,
                l = (0, a.pC)(t.end) ? t.end.getTime() : null,
                u = null == o || null == l || o === l,
                p = u ? [o || l] : [[o, l]],
                c = this.version >= 10.8;
              if (s.length)
                s.forEach((e) => {
                  e.dimensionName === r &&
                    (c
                      ? ((e.dimensionName = null),
                        (e.isSlice = null),
                        (e.values = null))
                      : ((e.isSlice = u), (e.values = p)));
                });
              else if (!c) {
                const t = e.multidimensionalDefinition.filter(
                  (e) => null != e.variableName && null == e.dimensionName,
                );
                t.length
                  ? t.forEach((e) => {
                      (e.dimensionName = r), (e.isSlice = u), (e.values = p);
                    })
                  : e.multidimensionalDefinition.push(
                      new I.Z({
                        variableName: '',
                        dimensionName: r,
                        isSlice: u,
                        values: p,
                      }),
                    );
              }
              return this._cleanupMultidimensionalDefinition(e);
            }
            _cleanupMultidimensionalDefinition(e) {
              return (0, a.Wi)(e)
                ? null
                : (e.multidimensionalDefinition &&
                    ((e.multidimensionalDefinition =
                      e.multidimensionalDefinition.filter(
                        (e) => !(!e.variableName && !e.dimensionName),
                      )),
                    0 === e.multidimensionalDefinition.length &&
                      (e.multidimensionalDefinition = null)),
                  'mosaic-dataset' !== this._serviceSourceType &&
                  null == e.multidimensionalDefinition
                    ? null
                    : e);
            }
            async _prepareForQuery(e, t) {
              var i;
              if (
                (await this._fetchCapabilities(
                  null == (i = t) ? void 0 : i.signal,
                ),
                !this.capabilities.operations.supportsQuery)
              )
                throw new b.Z(
                  'imagery-layer:query-rasters',
                  'query operation is not supported on the input image service',
                );
              return (
                (e = (0, a.pC)(e) ? (0, p.TJ)(Ze.Z, e) : this.createQuery()),
                (t = this._getRequestOptions(t)),
                this.raster && (t.query = { ...t.query, raster: this.raster }),
                { query: e, requestOptions: t }
              );
            }
            async _initJobHandler() {
              if (null != this._rasterJobHandler.connectionPromise)
                return this._rasterJobHandler.connectionPromise;
              const e = new de.Z();
              (this._rasterJobHandler.connectionPromise = e.initialize().then(
                () => {
                  this._rasterJobHandler.instance = e;
                },
                () => null,
              )),
                await this._rasterJobHandler.connectionPromise;
            }
            _shutdownJobHandler() {
              this._rasterJobHandler.instance &&
                this._rasterJobHandler.instance.destroy(),
                (this._rasterJobHandler.instance = null),
                (this._rasterJobHandler.connectionPromise = null),
                (this._rasterJobHandler.refCount = 0);
            }
            _isSupportedRenderer(e) {
              const { rasterInfo: t, renderingRule: i } = this;
              return (
                ('unique-value' === e.type &&
                  this._hasRenderingRule(i) &&
                  1 === t.bandCount &&
                  ['u8', 's8'].includes(t.pixelType)) ||
                (0, fe.U0)(this.rasterInfo).includes(this.renderer.type)
              );
            }
            async _fetchCapabilities(e) {
              return (
                this.capabilities || (await this._fetchServiceInfo(e)),
                this.capabilities
              );
            }
            async _fetchServiceInfo(e) {
              var t;
              let i = this.sourceJSON;
              if (!i) {
                const { data: t, ssl: r } = await (0, g.default)(
                  this.parsedUrl.path,
                  { query: this._getQueryParams(), signal: e },
                );
                (i = t),
                  (this.sourceJSON = i),
                  r && (this.url = this.url.replace(/^http:/i, 'https:'));
              }
              if (
                (null == (t = i.capabilities)
                  ? void 0
                  : t
                      .toLowerCase()
                      .split(',')
                      .map((e) => e.trim())
                      .indexOf('tilesonly')) > -1
              )
                throw new b.Z(
                  'imagery-layer:fetch-service-info',
                  'use ImageryTileLayer to open tiles-only image services',
                );
              this.read(i, { origin: 'service', url: this.parsedUrl });
            }
            _isMosaicDataset(e) {
              var t;
              return e.serviceSourceType
                ? 'esriImageServiceSourceTypeMosaicDataset' ===
                    e.serviceSourceType
                : (null == (t = e.fields) ? void 0 : t.length) > 0;
            }
            _isMosaicRuleSupported(e) {
              var t;
              if (!e) return !1;
              const i = this._isMosaicDataset(e),
                r =
                  e.currentVersion >= 10.71 &&
                  e.hasMultidimensions &&
                  e.timeInfo &&
                  !(
                    e.objectIdField &&
                    (null == (t = e.fields) ? void 0 : t.length) > 1
                  );
              return i || r;
            }
            _isVectorFieldResampleFunction(e) {
              if (!(0, a.pC)(e)) return !1;
              const { functionName: t, functionArguments: i } = e,
                r = 'resample' === (null == t ? void 0 : t.toLowerCase()),
                n =
                  (null == i ? void 0 : i.ResampleType) ||
                  (null == i ? void 0 : i.resampleType);
              return r && (7 === n || 10 === n);
            }
            _isPicture() {
              return (
                !this.format ||
                this.format.indexOf('jpg') > -1 ||
                this.format.indexOf('png') > -1
              );
            }
            _configRenderer(e) {
              if (!this._isPicture() && !this.pixelFilter) {
                if (!this.bandIds && this.rasterInfo.bandCount >= 3) {
                  const e = (0, fe.YD)(this.rasterInfo);
                  !e ||
                    (3 === this.rasterInfo.bandCount &&
                      0 === e[0] &&
                      1 === e[1] &&
                      2 === e[2]) ||
                    (this.bandIds = e);
                }
                var t, i;
                e ||
                  (e = (0, fe.Ob)(this.rasterInfo, {
                    bandIds: this.bandIds,
                    variableName: this.renderingRule
                      ? null
                      : null == (t = this.mosaicRule) ||
                        null == (i = t.multidimensionalDefinition)
                      ? void 0
                      : i[0].variableName,
                  }));
                const r = (0, fe.ol)(e.toJSON());
                this.symbolizer
                  ? ((this.symbolizer.rendererJSON = r),
                    (this.symbolizer.rasterInfo = this.rasterInfo))
                  : (this.symbolizer = new ge.Z({
                      rendererJSON: r,
                      rasterInfo: this.rasterInfo,
                    })),
                  this.symbolizer.bind().success || (this.symbolizer = null);
              }
              return e;
            }
            _clonePixelData(e) {
              return null == e
                ? e
                : {
                    extent: e.extent && e.extent.clone(),
                    pixelBlock: (0, a.pC)(e.pixelBlock) && e.pixelBlock.clone(),
                  };
            }
            _getQueryParams(e) {
              (0, a.pC)(null == e ? void 0 : e.renderingRule) &&
                'string' != typeof e.renderingRule &&
                (e.renderingRule = this._getRenderingRuleString(
                  e.renderingRule,
                ));
              const { raster: t, viewId: i } = this;
              return {
                raster: t,
                viewId: i,
                f: 'json',
                ...e,
                ...this.customParameters,
              };
            }
            _getRequestOptions(e) {
              return {
                ...e,
                query: {
                  ...(null == e ? void 0 : e.query),
                  ...this.customParameters,
                },
              };
            }
            _decodePixelBlock(e, t, i) {
              return this._rasterJobHandler.instance
                ? this._rasterJobHandler.instance.decode({
                    data: e,
                    options: t,
                  })
                : (0, he.J)(e, t, i);
            }
            async _fetchMultidimensionalInfo(e) {
              var t;
              const i = await (0, g.default)(
                this.parsedUrl.path + '/multidimensionalInfo',
                { query: this._getQueryParams(), signal: e },
              ).then((e) => {
                var t;
                return null == (t = e.data) ? void 0 : t.multidimensionalInfo;
              });
              return (
                null != (t = i.variables) &&
                  t.length &&
                  i.variables.forEach((e) => {
                    var t;
                    null != (t = e.statistics) &&
                      t.length &&
                      e.statistics.forEach((e) => {
                        (e.avg = e.mean), (e.stddev = e.standardDeviation);
                      });
                  }),
                i
              );
            }
            async _getRasterFunctionInfos(e) {
              const t = this.sourceJSON.rasterFunctionInfos;
              return this.serviceRasterInfo
                ? t
                : t && this.version >= 10.3
                ? 1 === t.length && 'none' === t[0].name.toLowerCase()
                  ? t
                  : null ==
                    (i = (
                      await (0, g.default)(
                        this.parsedUrl.path + '/rasterFunctionInfos',
                        { query: this._getQueryParams(), signal: e },
                      )
                    ).data)
                  ? void 0
                  : i.rasterFunctionInfos
                : null;
              var i;
            }
            async _fetchAuxiliaryRasterInfo(e) {
              const t = e && e.serviceInfo;
              if (!t)
                return Promise.reject(
                  new b.Z(
                    'imagery-layer:fetch-metadata',
                    'valid serviceInfo is required',
                  ),
                );
              const i = e.signal,
                r =
                  !!(t.hasRasterAttributeTable && this.version >= 10.1) &&
                  (0, g.default)(
                    this.parsedUrl.path + '/rasterAttributeTable',
                    {
                      query: this._getQueryParams({
                        renderingRule:
                          this.version >= 10.1
                            ? null == e
                              ? void 0
                              : e.renderingRule
                            : null,
                      }),
                      signal: i,
                    },
                  )
                    .then((e) => Se.default.fromJSON(e.data))
                    .catch(() => null),
                n =
                  !!(t.hasColormap && this.version >= 10.1) &&
                  (0, g.default)(this.parsedUrl.path + '/colormap', {
                    query: this._getQueryParams({
                      renderingRule:
                        this.version >= 10.6
                          ? null == e
                            ? void 0
                            : e.renderingRule
                          : null,
                    }),
                    signal: i,
                  }).then((e) => {
                    var t;
                    return null == (t = e.data) ? void 0 : t.colormap;
                  }),
                s =
                  !!(t.hasHistograms && this.version >= 10.1) &&
                  (0, g.default)(this.parsedUrl.path + '/histograms', {
                    query: this._getQueryParams({
                      renderingRule:
                        this.version >= 10.1
                          ? null == e
                            ? void 0
                            : e.renderingRule
                          : null,
                    }),
                    signal: i,
                  }).then((e) => {
                    var t;
                    return null == (t = e.data) ? void 0 : t.histograms;
                  }),
                a =
                  this.version >= 10.3 &&
                  (0, g.default)(this.parsedUrl.path + '/keyProperties', {
                    query: this._getQueryParams({
                      renderingRule: null == e ? void 0 : e.renderingRule,
                    }),
                    signal: i,
                  })
                    .then((e) => e.data)
                    .catch(() => {}),
                o =
                  !!(t.hasMultidimensions && this.version >= 10.3) &&
                  this._fetchMultidimensionalInfo(),
                l = await Promise.all([r, n, s, a, o]);
              let u = null;
              if (t.minValues && t.minValues.length === t.bandCount) {
                u = [];
                for (let e = 0; e < t.minValues.length; e++)
                  u.push({
                    min: t.minValues[e],
                    max: t.maxValues[e],
                    avg: t.meanValues[e],
                    stddev: t.stdvValues[e],
                  });
              }
              const p = Math.ceil(
                  (t.extent.xmax - t.extent.xmin) / t.pixelSizeX - 0.1,
                ),
                c = Math.ceil(
                  (t.extent.ymax - t.extent.ymin) / t.pixelSizeY - 0.1,
                ),
                m = Re.Z.fromJSON(
                  t.spatialReference || t.extent.spatialReference,
                );
              return new me.Z({
                width: p,
                height: c,
                bandCount: t.bandCount,
                extent: ze.Z.fromJSON(t.extent),
                spatialReference: m,
                pixelSize: new ie.Z({
                  x: t.pixelSizeX,
                  y: t.pixelSizeY,
                  spatialReference: m,
                }),
                pixelType: t.pixelType.toLowerCase(),
                statistics: u,
                attributeTable: l[0] || null,
                colormap: l[1] || null,
                histograms: l[2] || null,
                keyProperties: l[3] || {},
                multidimensionalInfo: l[4] || null,
              });
            }
            async _requestArrayBuffer(e) {
              var t;
              const { imageProps: i, requestAsImageElement: r, signal: n } = e;
              if (
                r &&
                !this.pixelFilter &&
                (null == (t = i.format) ? void 0 : t.indexOf('png')) > -1
              )
                return {
                  imageElement: (
                    await (0, g.default)(this.parsedUrl.path + '/exportImage', {
                      responseType: 'image',
                      query: this._getQueryParams({
                        f: 'image',
                        ...e.imageServiceParameters,
                      }),
                      signal: n,
                    })
                  ).data,
                  params: i,
                };
              const s = this._initJobHandler(),
                a = (0, g.default)(this.parsedUrl.path + '/exportImage', {
                  responseType: 'array-buffer',
                  query: this._getQueryParams({
                    f: 'image',
                    ...e.imageServiceParameters,
                  }),
                  signal: n,
                }),
                o = (await Promise.all([a, s]))[0].data,
                l = i.format || 'jpgpng';
              let u = l;
              if (('bsq' !== u && 'bip' !== u && (u = (0, he.y)(o)), !u))
                throw new b.Z(
                  'imagery-layer:fetch-image',
                  'unsupported format signature ' +
                    String.fromCharCode.apply(null, new Uint8Array(o)),
                );
              const p = { signal: n },
                c =
                  'gif' === l ||
                  'bmp' === l ||
                  (l.indexOf('png') > -1 && ('png' === u || 'jpg' === u))
                    ? (0, he.J)(o, { useCanvas: !0, ...i }, p)
                    : this._decodePixelBlock(
                        o,
                        {
                          width: i.width,
                          height: i.height,
                          planes: null,
                          pixelType: null,
                          noDataValue: null,
                          format: l,
                        },
                        p,
                      );
              return {
                pixelData: { pixelBlock: await c, extent: i.extent },
                params: i,
              };
            }
            async _generateRasterInfo(e, t) {
              const { data: i } = await (0, g.default)(this.parsedUrl.path, {
                query: this._getQueryParams({ renderingRule: e }),
                ...t,
              });
              return await this._fetchAuxiliaryRasterInfo({
                serviceInfo: i,
                renderingRule: e,
                ...t,
              });
            }
            _isValidCustomizedMosaicRule(e) {
              var t;
              return (
                e &&
                JSON.stringify(e.toJSON()) !==
                  JSON.stringify(
                    null == (t = this._defaultServiceMosaicRule)
                      ? void 0
                      : t.toJSON(),
                  )
              );
            }
            _updateMultidimensionalDefinition(e) {
              if (this._isValidCustomizedMosaicRule(this.mosaicRule)) return;
              const t = e.variables[0].dimensions,
                i = [];
              for (const e in t)
                if (t.hasOwnProperty(e)) {
                  const r = t[e],
                    n = r.extent;
                  let s = !0,
                    a = [n[0]];
                  r.hasRanges && !0 === r.hasRanges
                    ? ((s = !1), (a = [r.values[0]]))
                    : 'stdz' === r.name.toLowerCase() &&
                      Math.abs(n[1]) <= Math.abs(n[0]) &&
                      (a = [n[1]]),
                    i.push(
                      new I.Z({
                        variableName: '',
                        dimensionName: t[e].name,
                        isSlice: s,
                        values: a,
                      }),
                    );
                }
              if (i.length > 0) {
                this.mosaicRule = this.mosaicRule || new ae();
                const e = this.mosaicRule.multidimensionalDefinition;
                (!e || (e && e.length <= 0)) &&
                  (this.mosaicRule.multidimensionalDefinition = i);
              }
            }
            _formatAttributeValue(e, t) {
              if ('string' == typeof e) {
                const i = this.popupTemplate && this.popupTemplate.fieldInfos,
                  r = this._getFieldInfo(i, t),
                  n = r && r.format;
                if (n) {
                  let t, i;
                  return e.trim().indexOf(',') > -1
                    ? ((t = ','),
                      (i = t + ' '),
                      this._formatDelimitedString(e, t, i, n))
                    : e.trim().indexOf(';') > -1
                    ? ((t = ';'),
                      (i = t + ' '),
                      this._formatDelimitedString(e, t, i, n))
                    : e.trim().indexOf(' ') > -1
                    ? ((t = i = ' '), this._formatDelimitedString(e, t, i, n))
                    : this._formatNumberFromString(e, n);
                }
              }
              return e;
            }
            _getFieldInfo(e, t) {
              if (!e || !e.length || !t) return;
              const i = t.toLowerCase();
              let r;
              return (
                e.some(
                  (e) =>
                    !(
                      !e.fieldName ||
                      (e.fieldName.toLowerCase() !== i &&
                        e.fieldName.toLowerCase() !== i.replace(/ /g, '_')) ||
                      ((r = e), 0)
                    ),
                ),
                r
              );
            }
            _formatDelimitedString(e, t, i, r) {
              return e && t && i && r
                ? e
                    .trim()
                    .split(t)
                    .map((e) => this._formatNumberFromString(e, r))
                    .join(i)
                : e;
            }
            _formatNumberFromString(e, t) {
              if (!e || !t) return e;
              const i = Number(e);
              return isNaN(i) ? e : t.format(i);
            }
            _processVisibleRastersResponse(e, t) {
              t = t || {};
              const i = e.value,
                {
                  templateRRFunctionNames: r,
                  showNoDataRecords: n,
                  returnDomainValues: s,
                  templateFields: o,
                } = t,
                l = e.processedValues;
              let u = e.catalogItems && e.catalogItems.features,
                p =
                  (e.properties &&
                    e.properties.Values &&
                    e.properties.Values.map((e) => e.replace(/ /gi, ', '))) ||
                  [];
              const c = this.objectIdField || 'ObjectId',
                m =
                  'string' == typeof i &&
                  i.toLowerCase().indexOf('nodata') > -1,
                d = [];
              if (i && !u && !m) {
                const e = {};
                (e[c] = 0),
                  (p = [i]),
                  (u = [new y.Z(this.fullExtent, null, e)]);
              }
              if (!u) return [];
              let h, f, g;
              this._updateResponseFieldNames(u, o), m && !n && (u = []);
              for (let e = 0; e < u.length; e++) {
                if (((h = u[e]), null != i)) {
                  if (
                    ((f = p[e]),
                    (g =
                      this.renderingRule &&
                      l &&
                      l.length > 0 &&
                      r &&
                      r.length > 0 &&
                      r.indexOf(this.renderingRule.functionName) > -1
                        ? l[r.indexOf(this.renderingRule.functionName)]
                        : i),
                    'nodata' === f.toLowerCase() && !n)
                  )
                    continue;
                  const t = 'Raster.ItemPixelValue',
                    s = 'Raster.ServicePixelValue';
                  (h.attributes[t] = this._formatAttributeValue(f, t)),
                    (h.attributes[s] = this._formatAttributeValue(g, s)),
                    this._updateFeatureWithMagDirValues(h, f);
                  const o = this.fields && this.fields.length > 0;
                  let u =
                    this.renderingRule &&
                    (0, a.pC)(this.serviceRasterInfo) &&
                    this.serviceRasterInfo.attributeTable
                      ? o
                        ? f
                        : i
                      : g;
                  this.renderingRule || (u = o ? f : i),
                    this._updateFeatureWithRasterAttributeTableValues(h, u);
                }
                if (
                  ((h.sourceLayer = h.layer = this),
                  s && this._updateFeatureWithDomainValues(h),
                  r && l && r.length === l.length)
                )
                  for (let e = 0; e < r.length; e++) {
                    const t = 'Raster.ServicePixelValue.' + r[e];
                    h.attributes[t] = this._formatAttributeValue(l[e], t);
                  }
                d.push(u[e]);
              }
              return d;
            }
            _updateFeatureWithRasterAttributeTableValues(e, t) {
              const i =
                  (this.rasterInfo && this.rasterInfo.attributeTable) ||
                  ((0, a.pC)(this.serviceRasterInfo) &&
                    this.serviceRasterInfo.attributeTable),
                r = i && i.features;
              if (!r) return;
              const n = i.fields,
                s = n
                  .map((e) => e.name)
                  .filter((e) => 'value' === e.toLowerCase()),
                o = s && s[0];
              if (!o) return;
              const l = r.filter(
                (e) => e.attributes[o] === (null != t ? parseInt(t, 10) : null),
              );
              l &&
                l[0] &&
                n.forEach((t) => {
                  const i = this.rasterAttributeTableFieldPrefix + t.name;
                  e.attributes[i] = this._formatAttributeValue(
                    l[0].attributes[t.name],
                    i,
                  );
                });
            }
            _updateFeatureWithMagDirValues(e, t) {
              if (
                'esriImageServiceDataTypeVector-UV' !== this.serviceDataType &&
                'esriImageServiceDataTypeVector-MagDir' !== this.serviceDataType
              )
                return;
              const i = t.split(/,\s*/).map((e) => parseFloat(e)),
                r = i.map((e) => [e]),
                n = i.map((e) => ({
                  minValue: e,
                  maxValue: e,
                  noDataValue: null,
                })),
                s = new ce.Z({
                  height: 1,
                  width: 1,
                  pixelType: 'f32',
                  pixels: r,
                  statistics: n,
                });
              null != this.pixelFilter &&
                this.pixelFilter({
                  pixelBlock: s,
                  extent: new ze.Z(0, 0, 0, 0, this.spatialReference),
                });
              const a =
                'esriImageServiceDataTypeVector-MagDir' === this.serviceDataType
                  ? [s.pixels[0][0], s.pixels[1][0]]
                  : (0, ye.Tg)([s.pixels[0][0], s.pixels[1][0]]);
              (e.attributes['Raster.Magnitude'] = a[0]),
                (e.attributes['Raster.Direction'] = a[1]);
            }
            _updateFeatureWithDomainValues(e) {
              const t =
                this.fields &&
                this.fields.filter(
                  (e) => e.domain && 'coded-value' === e.domain.type,
                );
              null != t &&
                t.forEach((t) => {
                  const i = e.attributes[t.name];
                  if (null != i) {
                    const r = t.domain.codedValues.find((e) => e.code === i);
                    r && (e.attributes[t.name] = r.name);
                  }
                });
            }
            _updateResponseFieldNames(e, t) {
              if (!t || t.length < 1) return;
              const i = this.fieldsIndex;
              (0, a.pC)(i) &&
                e.forEach((e) => {
                  if (e && e.attributes)
                    for (const r of t)
                      if (i.has(r)) {
                        const t = i.get(r).name;
                        t !== r &&
                          ((e.attributes[r] = e.attributes[t]),
                          delete e.attributes[t]);
                      }
                });
            }
            _getRenderingRuleString(e) {
              if (this._hasRenderingRule(e)) {
                var t;
                let i = e.toJSON();
                return (
                  (i = null != (t = i.rasterFunctionDefinition) ? t : i),
                  (i.thumbnail || i.thumbnailEx) &&
                    (i.thumbnail = i.thumbnailEx = null),
                  JSON.stringify(i)
                );
              }
              return null;
            }
            _hasRenderingRule(e) {
              return (
                e && e.functionName && 'none' !== e.functionName.toLowerCase()
              );
            }
            _updateRenderingRulesFunctionName(e, t) {
              if (!e || e.length < 1) return;
              if ('Raw' === e) return e.replace('Raw', 'None');
              const i = e.toLowerCase().replace(/ /gi, '_');
              return t.has(i) ? t.get(i) : e;
            }
            _isRFTJson(e) {
              return (
                e &&
                e.name &&
                e.arguments &&
                e.function &&
                e.hasOwnProperty('functionType')
              );
            }
            _readCapabilities(e) {
              const t = e.capabilities
                  ? e.capabilities
                      .toLowerCase()
                      .split(',')
                      .map((e) => e.trim())
                  : ['image', 'catalog'],
                {
                  currentVersion: i,
                  advancedQueryCapabilities: r,
                  maxRecordCount: n,
                } = e,
                s = t.indexOf('image') > -1,
                a = 'esriImageServiceDataTypeElevation' === e.serviceDataType,
                o = !!(
                  e.spatialReference ||
                  (e.extent && e.extent.spatialReference)
                ),
                l = t.includes('edit');
              return {
                data: { supportsAttachment: !1 },
                operations: {
                  supportsComputeHistograms: s,
                  supportsExportImage: s,
                  supportsIdentify: s,
                  supportsMeasure: t.indexOf('mensuration') > -1 && o,
                  supportsDownload: t.indexOf('download') > -1,
                  supportsQuery:
                    t.indexOf('catalog') > -1 &&
                    e.fields &&
                    e.fields.length > 0,
                  supportsGetSamples: i >= 10.2 && s,
                  supportsProject: i >= 10.3 && s,
                  supportsComputeStatisticsHistograms: i >= 10.4 && s,
                  supportsQueryBoundary: i >= 10.6 && s,
                  supportsCalculateVolume: i >= 10.7 && a,
                  supportsComputePixelLocation:
                    i >= 10.7 && t.indexOf('catalog') > -1,
                  supportsComputeAngles: i >= 10.91,
                  supportsAdd: l,
                  supportsDelete: l,
                  supportsEditing: l,
                  supportsUpdate: l,
                  supportsCalculate: !1,
                  supportsTruncate: !1,
                  supportsValidateSql: !1,
                  supportsChangeTracking: !1,
                  supportsQueryAttachments: !1,
                  supportsResizeAttachments: !1,
                  supportsSync: !1,
                  supportsExceedsLimitStatistics: !1,
                },
                query: {
                  maxRecordCount: n,
                  maxRecordCountFactor: void 0,
                  supportsStatistics: !(null == r || !r.supportsStatistics),
                  supportsOrderBy: !(null == r || !r.supportsOrderBy),
                  supportsDistinct: !(null == r || !r.supportsDistinct),
                  supportsPagination: !(null == r || !r.supportsPagination),
                  supportsStandardizedQueriesOnly: !(
                    null == r || !r.useStandardizedQueries
                  ),
                  supportsPercentileStatistics: !(
                    null == r || !r.supportsPercentileStatistics
                  ),
                  supportsCentroid: !(
                    null == r || !r.supportsReturningGeometryCentroid
                  ),
                  supportsDistance: !(
                    null == r || !r.supportsQueryWithDistance
                  ),
                  supportsExtent: !(
                    null == r || !r.supportsReturningQueryExtent
                  ),
                  supportsGeometryProperties: !(
                    null == r || !r.supportsReturningGeometryProperties
                  ),
                  supportsHavingClause: !(null == r || !r.supportsHavingClause),
                  supportsQuantization: !1,
                  supportsQuantizationEditMode: !1,
                  supportsQueryGeometry: !1,
                  supportsResultType: !1,
                  supportsMaxRecordCountFactor: !1,
                  supportsSqlExpression: !1,
                  supportsTopFeaturesQuery: !1,
                  supportsQueryByOthers: !1,
                  supportsHistoricMoment: !1,
                  supportsFormatPBF: !1,
                  supportsDisjointSpatialRelationship: !1,
                  supportsCacheHint: !1,
                  supportsSpatialAggregationStatistics: !1,
                  supportedSpatialAggregationStatistics: {
                    envelope: !1,
                    centroid: !1,
                    convexHull: !1,
                  },
                  supportsDefaultSpatialReference: !(
                    null == r || !r.supportsDefaultSR
                  ),
                  supportsCompactGeometry: !1,
                  standardMaxRecordCount: void 0,
                  tileMaxRecordCount: void 0,
                },
              };
            }
          };
          return (
            (0, n._)(
              [(0, u.Cb)()],
              t.prototype,
              '_functionRasterInfos',
              void 0,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, '_rasterJobHandler', void 0),
            (0, n._)(
              [(0, u.Cb)({ dependsOn: ['_serviceSupportsMosaicRule'] })],
              t.prototype,
              '_defaultServiceMosaicRule',
              void 0,
            ),
            (0, n._)(
              [(0, C.r)('_defaultServiceMosaicRule', ['defaultMosaicMethod'])],
              t.prototype,
              'readDefaultServiceMosaicRule',
              null,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, '_cachedRendererJson', void 0),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              '_serviceSourceType',
              void 0,
            ),
            (0, n._)(
              [(0, C.r)('_serviceSourceType', ['serviceSourceType', 'fields'])],
              t.prototype,
              'readServiceSourceType',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              '_serviceSupportsMosaicRule',
              void 0,
            ),
            (0, n._)(
              [
                (0, C.r)('_serviceSupportsMosaicRule', [
                  'currentVersion',
                  'fields',
                ]),
              ],
              t.prototype,
              'readServiceSupportsMosaicRule',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)()],
              t.prototype,
              'rasterAttributeTableFieldPrefix',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'rasterFunctionNamesIndex',
              null,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'adjustAspectRatio', void 0),
            (0, n._)(
              [
                (0, u.Cb)({ readOnly: !0 }),
                (0, S.B)('serviceRasterInfo.bandCount'),
              ],
              t.prototype,
              'bandCount',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: [p.z8], json: { write: !0 } })],
              t.prototype,
              'bandIds',
              void 0,
            ),
            (0, n._)([(0, C.r)('bandIds')], t.prototype, 'readBandIds', null),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0, json: { read: !1 } })],
              t.prototype,
              'capabilities',
              void 0,
            ),
            (0, n._)(
              [
                (0, C.r)('service', 'capabilities', [
                  'capabilities',
                  'currentVersion',
                  'serviceDataType',
                ]),
              ],
              t.prototype,
              'readCapabilities',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: Number })],
              t.prototype,
              'compressionQuality',
              void 0,
            ),
            (0, n._)(
              [(0, m.c)('compressionQuality')],
              t.prototype,
              'writeCompressionQuality',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: Number })],
              t.prototype,
              'compressionTolerance',
              void 0,
            ),
            (0, n._)(
              [(0, m.c)('compressionTolerance')],
              t.prototype,
              'writeCompressionTolerance',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ json: { read: { source: 'copyrightText' } } })],
              t.prototype,
              'copyright',
              void 0,
            ),
            (0, n._)(
              [
                (0, u.Cb)({
                  type: String,
                  json: {
                    name: 'layerDefinition.definitionExpression',
                    write: { enabled: !0, allowNull: !0 },
                  },
                }),
              ],
              t.prototype,
              'definitionExpression',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0, constructOnly: !0 })],
              t.prototype,
              'exportImageServiceParameters',
              void 0,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'rasterInfo', void 0),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0, type: [ue.Z] })],
              t.prototype,
              'fields',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'fieldsIndex',
              null,
            ),
            (0, n._)(
              [
                (0, u.Cb)({
                  type: [
                    'png',
                    'png8',
                    'png24',
                    'png32',
                    'jpg',
                    'bmp',
                    'gif',
                    'jpgpng',
                    'lerc',
                    'tiff',
                  ],
                  json: { write: !0 },
                }),
              ],
              t.prototype,
              'format',
              null,
            ),
            (0, n._)(
              [(0, C.r)('service', 'format', ['serviceDataType'])],
              t.prototype,
              'readFormat',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: ze.Z })],
              t.prototype,
              'fullExtent',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'hasMultidimensions',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ json: { read: { source: 'maxImageHeight' } } })],
              t.prototype,
              'imageMaxHeight',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ json: { read: { source: 'maxImageWidth' } } })],
              t.prototype,
              'imageMaxWidth',
              void 0,
            ),
            (0, n._)(
              [
                (0, u.Cb)({
                  type: String,
                  json: {
                    type: oe.c.jsonValues,
                    read: oe.c.read,
                    write: oe.c.write,
                  },
                }),
              ],
              t.prototype,
              'interpolation',
              void 0,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'minScale', void 0),
            (0, n._)(
              [(0, C.r)('service', 'minScale')],
              t.prototype,
              'readMinScale',
              null,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'maxScale', void 0),
            (0, n._)(
              [(0, C.r)('service', 'maxScale')],
              t.prototype,
              'readMaxScale',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: ae })],
              t.prototype,
              'mosaicRule',
              null,
            ),
            (0, n._)(
              [(0, C.r)('mosaicRule', ['mosaicRule', 'defaultMosaicMethod'])],
              t.prototype,
              'readMosaicRule',
              null,
            ),
            (0, n._)(
              [(0, m.c)('mosaicRule')],
              t.prototype,
              'writeMosaicRule',
              null,
            ),
            (0, n._)(
              [
                (0, u.Cb)({ readOnly: !0 }),
                (0, S.B)('serviceRasterInfo.multidimensionalInfo'),
              ],
              t.prototype,
              'multidimensionalInfo',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ json: { type: p.z8 } })],
              t.prototype,
              'noData',
              void 0,
            ),
            (0, n._)([(0, m.c)('noData')], t.prototype, 'writeNoData', null),
            (0, n._)(
              [
                (0, u.Cb)({
                  type: String,
                  json: {
                    type: oe.k.jsonValues,
                    read: oe.k.read,
                    write: oe.k.write,
                  },
                }),
              ],
              t.prototype,
              'noDataInterpretation',
              void 0,
            ),
            (0, n._)(
              [
                (0, u.Cb)({
                  type: String,
                  readOnly: !0,
                  json: { read: { source: ['fields'] } },
                }),
              ],
              t.prototype,
              'objectIdField',
              void 0,
            ),
            (0, n._)(
              [(0, C.r)('objectIdField')],
              t.prototype,
              'readObjectIdField',
              null,
            ),
            (0, n._)([(0, u.Cb)({})], t.prototype, 'geometryType', void 0),
            (0, n._)([(0, u.Cb)({})], t.prototype, 'typeIdField', void 0),
            (0, n._)([(0, u.Cb)({})], t.prototype, 'types', void 0),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'parsedUrl',
              null,
            ),
            (0, n._)(
              [
                (0, u.Cb)({ readOnly: !0 }),
                (0, S.B)('serviceRasterInfo.pixelSize.x'),
              ],
              t.prototype,
              'pixelSizeX',
              void 0,
            ),
            (0, n._)(
              [
                (0, u.Cb)({ readOnly: !0 }),
                (0, S.B)('serviceRasterInfo.pixelSize.y'),
              ],
              t.prototype,
              'pixelSizeY',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: Function })],
              t.prototype,
              'pixelFilter',
              void 0,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'raster', void 0),
            (0, n._)([(0, u.Cb)()], t.prototype, 'viewId', void 0),
            (0, n._)(
              [
                (0, u.Cb)({
                  types: f.dr,
                  json: {
                    name: 'layerDefinition.drawingInfo.renderer',
                    origins: {
                      'web-scene': {
                        types: f.FK,
                        name: 'layerDefinition.drawingInfo.renderer',
                        write: {
                          overridePolicy: (e) => ({
                            enabled:
                              e &&
                              'vector-field' !== e.type &&
                              'flow' !== e.type,
                          }),
                        },
                      },
                    },
                  },
                }),
              ],
              t.prototype,
              'renderer',
              null,
            ),
            (0, n._)([(0, C.r)('renderer')], t.prototype, 'readRenderer', null),
            (0, n._)(
              [(0, m.c)('renderer')],
              t.prototype,
              'writeRenderer',
              null,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'symbolizer', void 0),
            (0, n._)([(0, u.Cb)(x.Oh)], t.prototype, 'opacity', void 0),
            (0, n._)(
              [
                (0, u.Cb)({ readOnly: !0 }),
                (0, S.B)('serviceRasterInfo.attributeTable'),
              ],
              t.prototype,
              'rasterAttributeTable',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'rasterFields',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ constructOnly: !0 })],
              t.prototype,
              'rasterFunctionInfos',
              void 0,
            ),
            (0, n._)(
              [(0, u.Cb)({ type: M })],
              t.prototype,
              'renderingRule',
              null,
            ),
            (0, n._)(
              [
                (0, C.r)('renderingRule', [
                  'renderingRule',
                  'rasterFunctionInfos',
                ]),
              ],
              t.prototype,
              'readRenderingRule',
              null,
            ),
            (0, n._)(
              [(0, m.c)('renderingRule')],
              t.prototype,
              'writeRenderingRule',
              null,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'serviceDataType', void 0),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0, type: Re.Z })],
              t.prototype,
              'spatialReference',
              void 0,
            ),
            (0, n._)(
              [(0, C.r)('spatialReference', ['spatialReference', 'extent'])],
              t.prototype,
              'readSpatialReference',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ json: { type: ut.jsonValues } })],
              t.prototype,
              'pixelType',
              void 0,
            ),
            (0, n._)(
              [(0, C.r)('pixelType')],
              t.prototype,
              'readPixelType',
              null,
            ),
            (0, n._)(
              [(0, m.c)('pixelType')],
              t.prototype,
              'writePixelType',
              null,
            ),
            (0, n._)(
              [(0, u.Cb)({ constructOnly: !0, type: me.Z })],
              t.prototype,
              'serviceRasterInfo',
              void 0,
            ),
            (0, n._)([(0, u.Cb)()], t.prototype, 'sourceJSON', void 0),
            (0, n._)([(0, u.Cb)(x.HQ)], t.prototype, 'url', void 0),
            (0, n._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'version',
              void 0,
            ),
            (0, n._)(
              [(0, C.r)('version', ['currentVersion', 'fields', 'timeInfo'])],
              t.prototype,
              'readVersion',
              null,
            ),
            (t = (0, n._)(
              [(0, c.j)('esri.layers.mixins.ArcGISImageService')],
              t,
            )),
            t
          );
        };
      var dt = i(17287),
        ht = i(71612),
        yt = i(17017),
        ft = i(38009),
        gt = i(16859),
        bt = i(34760),
        vt = i(72965),
        Rt = i(28294),
        wt = i(60199),
        _t = i(32163);
      let St = class extends (0, ht.h)(
        (0, Rt.n)(
          (0, bt.Q)(
            (0, vt.M)(
              (0, ft.q)((0, gt.I)(mt((0, yt.N)((0, dt.Y)((0, o.R)(d.Z)))))),
            ),
          ),
        ),
      ) {
        constructor(...e) {
          super(...e),
            (this.legendEnabled = !0),
            (this.isReference = null),
            (this.operationalLayerType = 'ArcGISImageServiceLayer'),
            (this.popupEnabled = !0),
            (this.popupTemplate = null),
            (this.type = 'imagery');
        }
        normalizeCtorArgs(e, t) {
          return 'string' == typeof e ? { url: e, ...t } : e;
        }
        load(e) {
          const t = (0, a.pC)(e) ? e.signal : null;
          return (
            this.addResolvingPromise(
              this.loadFromPortal({ supportedTypes: ['Image Service'] }, e)
                .catch(l.r9)
                .then(() => this._fetchService(t)),
            ),
            Promise.resolve(this)
          );
        }
        writeOperationalLayerType(e, t, i) {
          var r;
          const n =
            'vector-field' === (null == (r = this.renderer) ? void 0 : r.type);
          t[i] = n
            ? 'ArcGISImageServiceVectorLayer'
            : 'ArcGISImageServiceLayer';
        }
        get defaultPopupTemplate() {
          return this.createPopupTemplate();
        }
        createPopupTemplate(e) {
          const t = this.rasterFields,
            i = this.title,
            r = new Set();
          let n = !1,
            s = !1;
          this.capabilities &&
            ((n =
              this.capabilities.operations.supportsQuery &&
              this.fields &&
              this.fields.length > 0),
            (s =
              n &&
              ('esriImageServiceDataTypeVector-UV' === this.serviceDataType ||
                'esriImageServiceDataTypeVector-MagDir' ===
                  this.serviceDataType)));
          const a = new Set();
          n &&
            (a.add('raster.itempixelvalue'),
            s && a.add('raster.magnitude').add('raster.direction'));
          for (const e of t) {
            const t = e.name.toLowerCase();
            a.has(t) ||
              t.indexOf('raster.servicepixelvalue.') > -1 ||
              r.add(e.name);
          }
          return (0, _t.eZ)(
            { fields: t, title: i },
            { ...e, visibleFieldNames: r },
          );
        }
        queryFeatures(e, t) {
          return this.queryRasters(e, t).then((e) => {
            if (null != e && e.features)
              for (const t of e.features) t.layer = t.sourceLayer = this;
            return e;
          });
        }
        queryFeatureCount(e, t) {
          return this.queryRasterCount(e, t);
        }
        redraw() {
          this.emit('redraw');
        }
        serviceSupportsSpatialReference(e) {
          return (0, wt.D)(this, e);
        }
      };
      (0, n._)([(0, u.Cb)(x.rn)], St.prototype, 'legendEnabled', void 0),
        (0, n._)(
          [(0, u.Cb)({ type: ['show', 'hide'] })],
          St.prototype,
          'listMode',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: Boolean,
              json: {
                read: !1,
                write: { enabled: !0, overridePolicy: () => ({ enabled: !1 }) },
              },
            }),
          ],
          St.prototype,
          'isReference',
          void 0,
        ),
        (0, n._)(
          [
            (0, u.Cb)({
              type: ['ArcGISImageServiceLayer'],
              json: {
                origins: {
                  'web-map': {
                    type: [
                      'ArcGISImageServiceLayer',
                      'ArcGISImageServiceVectorLayer',
                    ],
                    read: !1,
                    write: { target: 'layerType', ignoreOrigin: !0 },
                  },
                },
              },
            }),
          ],
          St.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, n._)(
          [(0, m.c)('web-map', 'operationalLayerType')],
          St.prototype,
          'writeOperationalLayerType',
          null,
        ),
        (0, n._)([(0, u.Cb)(x.C_)], St.prototype, 'popupEnabled', void 0),
        (0, n._)(
          [
            (0, u.Cb)({
              type: s.Z,
              json: {
                read: { source: 'popupInfo' },
                write: { target: 'popupInfo' },
              },
            }),
          ],
          St.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, n._)(
          [(0, u.Cb)({ readOnly: !0 })],
          St.prototype,
          'defaultPopupTemplate',
          null,
        ),
        (0, n._)(
          [(0, u.Cb)({ readOnly: !0, json: { read: !1 } })],
          St.prototype,
          'type',
          void 0,
        ),
        (St = (0, n._)([(0, c.j)('esri.layers.ImageryLayer')], St));
      const Ct = St;
    },
    17287: (e, t, i) => {
      i.d(t, { Y: () => u });
      var r = i(43697),
        n = i(92604),
        s = i(70586),
        a = i(5600),
        o = (i(67676), i(80442), i(75215), i(52011)),
        l = i(66677);
      const u = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, s.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, n.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, r._)([(0, a.Cb)()], t.prototype, 'title', null),
          (0, r._)([(0, a.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, r._)([(0, o.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, i) => {
      i.d(t, { I: () => R });
      var r = i(43697),
        n = i(40330),
        s = i(3172),
        a = i(66643),
        o = i(20102),
        l = i(92604),
        u = i(70586),
        p = i(95330),
        c = i(17452),
        m = i(5600),
        d = (i(67676), i(80442), i(75215), i(71715)),
        h = i(52011),
        y = i(30556),
        f = i(65587),
        g = i(15235),
        b = i(86082);
      const v = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
        R = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this.resourceReferences = { portalItem: null, paths: [] }),
                (this.userHasEditingPrivileges = !0);
            }
            destroy() {
              var e;
              null == (e = this.portalItem) || e.destroy(),
                (this.portalItem = null);
            }
            set portalItem(e) {
              e !== this._get('portalItem') &&
                (this.removeOrigin('portal-item'), this._set('portalItem', e));
            }
            readPortalItem(e, t, i) {
              if (t.itemId)
                return new g.default({ id: t.itemId, portal: i && i.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const r = await i.e(8062).then(i.bind(i, 18062));
                  return (
                    (0, p.k_)(t),
                    await r.load(
                      {
                        instance: this,
                        supportedTypes: e.supportedTypes,
                        validateItem: e.validateItem,
                        supportsData: e.supportsData,
                      },
                      t,
                    )
                  );
                } catch (e) {
                  throw (
                    ((0, p.D_)(e) ||
                      v.warn(
                        `Failed to load layer (${this.title}, ${this.id}) portal item (${this.portalItem.id})\n  ${e}`,
                      ),
                    e)
                  );
                }
            }
            async finishLoadEditablePortalLayer(e) {
              this._set(
                'userHasEditingPrivileges',
                await this._fetchUserHasEditingPrivileges(e).catch(
                  (e) => ((0, p.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == n.id
                  ? void 0
                  : n.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const i =
                w.credential === t ? w.user : await this._fetchEditingUser(e);
              return (
                (w.credential = t),
                (w.user = i),
                (0, u.Wi)(i) ||
                  null == i.privileges ||
                  i.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, i;
              const r =
                null == (t = this.portalItem) || null == (i = t.portal)
                  ? void 0
                  : i.user;
              if (r) return r;
              const o = n.id.findServerInfo(this.url);
              if (null == o || !o.owningSystemUrl) return null;
              const l = `${o.owningSystemUrl}/sharing/rest`,
                p = f.Z.getDefault();
              if (p && p.loaded && (0, c.Fv)(p.restUrl) === (0, c.Fv)(l))
                return p.user;
              const m = `${l}/community/self`,
                d = (0, u.pC)(e) ? e.signal : null,
                h = await (0, a.q6)(
                  (0, s.default)(m, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: d,
                  }),
                );
              return h.ok ? b.default.fromJSON(h.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const i = t && t.portal,
                r =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || f.Z.getDefault());
              return i && r && !(0, c.tm)(r.restUrl, i.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new o.Z(
                        'layer:cross-portal',
                        `The layer '${this.title} (${this.id})' cannot be persisted because it refers to an item on a different portal than the one being saved to. To save the scene, set the layer.portalItem to null or save the scene to the same portal as the item associated with the layer`,
                        { layer: this },
                      ),
                    ),
                  null)
                : super.write(e, { ...t, layer: this });
            }
          };
          return (
            (0, r._)(
              [(0, m.Cb)({ type: g.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, r._)(
              [(0, d.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, r._)(
              [
                (0, y.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, r._)(
              [(0, m.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, r._)(
              [(0, m.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, r._)([(0, h.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        w = { credential: null, user: null };
    },
    99282: (e, t, i) => {
      i.d(t, { a: () => s });
      var r = i(67900),
        n = i(68441);
      const s = {
        inches: (0, r.En)(1, 'meters', 'inches'),
        feet: (0, r.En)(1, 'meters', 'feet'),
        'us-feet': (0, r.En)(1, 'meters', 'us-feet'),
        yards: (0, r.En)(1, 'meters', 'yards'),
        miles: (0, r.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, r.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, r.En)(1, 'meters', 'millimeters'),
        centimeters: (0, r.En)(1, 'meters', 'centimeters'),
        decimeters: (0, r.En)(1, 'meters', 'decimeters'),
        meters: (0, r.En)(1, 'meters', 'meters'),
        kilometers: (0, r.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, r.ty)(1, 'meters', n.sv.radius),
      };
    },
    41818: (e, t, i) => {
      i.d(t, { P: () => a });
      var r = i(11282),
        n = i(34599),
        s = i(57444);
      async function a(e, t, i) {
        const a = (0, r.en)(e);
        return (0, n.executeQueryForCount)(a, s.Z.from(t), { ...i }).then(
          (e) => e.data.count,
        );
      }
    },
    5396: (e, t, i) => {
      i.d(t, { G: () => a });
      var r = i(11282),
        n = i(34599),
        s = i(57444);
      async function a(e, t, i) {
        const a = (0, r.en)(e);
        return (0, n.executeQueryForIds)(a, s.Z.from(t), { ...i }).then(
          (e) => e.data.objectIds,
        );
      }
    },
    4967: (e, t, i) => {
      i.d(t, { e: () => o, F: () => l });
      var r = i(11282),
        n = i(34599),
        s = i(74889),
        a = i(57444);
      async function o(e, t, i) {
        const r = await l(e, t, i);
        return s.default.fromJSON(r);
      }
      async function l(e, t, i) {
        const s = (0, r.en)(e),
          o = { ...i },
          l = a.Z.from(t),
          { data: u } = await (0, n.executeQuery)(
            s,
            l,
            l.sourceSpatialReference,
            o,
          );
        return u;
      }
    },
    98326: (e, t, i) => {
      i.d(t, { Z: () => c });
      var r,
        n = i(43697),
        s = i(96674),
        a = i(5600),
        o = (i(67676), i(80442), i(75215)),
        l = i(52011);
      const u = {
        1: { id: 1, rotation: 0, mirrored: !1 },
        2: { id: 2, rotation: 0, mirrored: !0 },
        3: { id: 3, rotation: 180, mirrored: !1 },
        4: { id: 4, rotation: 180, mirrored: !0 },
        5: { id: 5, rotation: -90, mirrored: !0 },
        6: { id: 6, rotation: 90, mirrored: !1 },
        7: { id: 7, rotation: 90, mirrored: !0 },
        8: { id: 8, rotation: -90, mirrored: !1 },
      };
      let p = (r = class extends s.wq {
        constructor(e) {
          super(e),
            (this.contentType = null),
            (this.exifInfo = null),
            (this.id = null),
            (this.globalId = null),
            (this.keywords = null),
            (this.name = null),
            (this.parentGlobalId = null),
            (this.parentObjectId = null),
            (this.size = null),
            (this.url = null);
        }
        get orientationInfo() {
          const { exifInfo: e } = this,
            t = (function (e) {
              const { exifInfo: t, exifName: i, tagName: r } = e;
              if (!t || !i || !r) return null;
              const n = t.find((e) => e.name === i);
              return n
                ? (function (e) {
                    const { tagName: t, tags: i } = e;
                    if (!i || !t) return null;
                    const r = i.find((e) => e.name === t);
                    return (r && r.value) || null;
                  })({ tagName: r, tags: n.tags })
                : null;
            })({ exifName: 'Exif IFD0', tagName: 'Orientation', exifInfo: e });
          return u[t] || null;
        }
        clone() {
          return new r({
            contentType: this.contentType,
            exifInfo: this.exifInfo,
            id: this.id,
            globalId: this.globalId,
            keywords: this.keywords,
            name: this.name,
            parentGlobalId: this.parentGlobalId,
            parentObjectId: this.parentObjectId,
            size: this.size,
            url: this.url,
          });
        }
      });
      (0, n._)(
        [(0, a.Cb)({ type: String })],
        p.prototype,
        'contentType',
        void 0,
      ),
        (0, n._)([(0, a.Cb)()], p.prototype, 'exifInfo', void 0),
        (0, n._)(
          [(0, a.Cb)({ readOnly: !0 })],
          p.prototype,
          'orientationInfo',
          null,
        ),
        (0, n._)([(0, a.Cb)({ type: o.z8 })], p.prototype, 'id', void 0),
        (0, n._)(
          [(0, a.Cb)({ type: String })],
          p.prototype,
          'globalId',
          void 0,
        ),
        (0, n._)(
          [(0, a.Cb)({ type: String })],
          p.prototype,
          'keywords',
          void 0,
        ),
        (0, n._)([(0, a.Cb)({ type: String })], p.prototype, 'name', void 0),
        (0, n._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          p.prototype,
          'parentGlobalId',
          void 0,
        ),
        (0, n._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          p.prototype,
          'parentObjectId',
          void 0,
        ),
        (0, n._)([(0, a.Cb)({ type: o.z8 })], p.prototype, 'size', void 0),
        (0, n._)(
          [(0, a.Cb)({ json: { read: !1 } })],
          p.prototype,
          'url',
          void 0,
        ),
        (p = r = (0, n._)([(0, l.j)('esri.layers.support.AttachmentInfo')], p));
      const c = p;
    },
    11282: (e, t, i) => {
      i.d(t, { lA: () => n, cv: () => a, en: () => s });
      var r = i(17452);
      function n(e, t) {
        return t ? { ...t, query: { ...e, ...t.query } } : { query: e };
      }
      function s(e) {
        return 'string' == typeof e ? (0, r.mN)(e) : e;
      }
      function a(e, t, i) {
        const r = {};
        for (const n in e) {
          if ('declaredClass' === n) continue;
          const s = e[n];
          if (null != s && 'function' != typeof s)
            if (Array.isArray(s)) {
              r[n] = [];
              for (let e = 0; e < s.length; e++) r[n][e] = a(s[e]);
            } else if ('object' == typeof s)
              if (s.toJSON) {
                const e = s.toJSON(i && i[n]);
                r[n] = t ? e : JSON.stringify(e);
              } else r[n] = t ? s : JSON.stringify(s);
            else r[n] = s;
        }
        return r;
      }
      i(91040);
    },
  },
]);
