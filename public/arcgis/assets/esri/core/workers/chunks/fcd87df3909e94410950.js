'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [1188, 4889],
  {
    65845: (e, t, i) => {
      i.d(t, { D: () => o });
      var r = i(81153);
      function o(e) {
        e &&
          e.writtenProperties &&
          e.writtenProperties.forEach((e) => {
            const t = e.target;
            e.newOrigin &&
              e.oldOrigin !== e.newOrigin &&
              (0, r.l)(t) &&
              t.updateOrigin(e.propName, e.newOrigin);
          });
      }
    },
    74085: (e, t, i) => {
      function r(e) {}
      i.d(t, { Bg: () => r }), i(80442);
    },
    81153: (e, t, i) => {
      function r(e) {
        return e && 'getAtOrigin' in e && 'originOf' in e;
      }
      i.d(t, { l: () => r });
    },
    66277: (e, t, i) => {
      i.r(t), i.d(t, { default: () => Ze });
      var r = i(43697),
        o = i(68773),
        s = (i(66577), i(38171)),
        a = i(51773),
        l =
          (i(16050),
          i(12501),
          i(95088),
          i(79056),
          i(5499),
          i(84382),
          i(30687),
          i(91423)),
        n = i(80539),
        u = i(20102),
        p = i(3920),
        d = i(92604),
        c = i(70586),
        m = i(16453),
        y = i(78286),
        b = i(17445),
        h = i(67900),
        f = i(17452),
        v = i(5600),
        g = (i(67676), i(80442), i(75215)),
        C = i(71715),
        T = i(52011),
        S = i(30556),
        w = i(65845),
        _ = i(6570),
        N = i(44547),
        O = i(8744),
        I = i(29600),
        D = i(71612),
        x = i(38009),
        F = i(16859),
        B = i(72965),
        E = i(66677),
        j = i(78223),
        A = i(96674),
        P = i(4095),
        L = i(77987),
        M = i(20256);
      let J = class extends A.wq {
        constructor() {
          super(...arguments),
            (this.directionLines = new P.Z({ color: [0, 122, 194], width: 6 })),
            (this.directionPoints = new L.Z({
              color: [255, 255, 255],
              size: 6,
              outline: { color: [0, 122, 194], width: 2 },
            })),
            (this.pointBarriers = new L.Z({
              style: 'x',
              size: 10,
              outline: { color: [255, 0, 0], width: 3 },
            })),
            (this.polygonBarriers = new M.Z({
              color: [255, 170, 0, 0.6],
              outline: { width: 7.5, color: [255, 0, 0, 0.6] },
            })),
            (this.polylineBarriers = new P.Z({
              width: 7.5,
              color: [255, 85, 0, 0.7],
            })),
            (this.routeInfo = new P.Z({ width: 8, color: [20, 89, 127] })),
            (this.firstStop = new L.Z({
              color: [0, 255, 0],
              size: 20,
              outline: { color: [255, 255, 255], width: 4 },
            })),
            (this.middleStop = new L.Z({
              color: [51, 51, 51],
              size: 12,
              outline: { color: [0, 122, 194], width: 3 },
            })),
            (this.lastStop = new L.Z({
              color: [255, 0, 0],
              size: 20,
              outline: { color: [255, 255, 255], width: 4 },
            })),
            (this.invalidStop = new L.Z({
              color: [255, 0, 0],
              size: 12,
              outline: { color: [255, 255, 255], width: 3 },
            })),
            (this.waypointStop = new L.Z({
              color: [255, 255, 255],
              size: 12,
              outline: { color: [0, 122, 194], width: 3 },
            })),
            (this.breakStop = new L.Z({
              color: [255, 255, 255],
              size: 12,
              outline: { color: [0, 122, 194], width: 3 },
            }));
        }
      };
      (0, r._)(
        [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
        J.prototype,
        'directionLines',
        void 0,
      ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'directionPoints',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'routeInfo',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'firstStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'middleStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'lastStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'invalidStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'waypointStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, types: j.LB })],
          J.prototype,
          'breakStop',
          void 0,
        ),
        (J = (0, r._)([(0, T.j)('esri.layers.support.DefaultSymbols')], J));
      const W = J;
      var R,
        V = i(65587),
        Z = i(15235),
        U = i(93924),
        q = i(23334),
        k = i(58901),
        z = i(49352),
        G = i(21878);
      let H = (R = class extends A.wq {
        constructor(e) {
          super(e),
            (this.directionLineType = null),
            (this.directionPointId = null),
            (this.distance = null),
            (this.duration = null),
            (this.fromLevel = null),
            (this.geometry = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.symbol = null),
            (this.toLevel = null);
        }
        static fromPortalJSON(e) {
          var t, i;
          return new R({
            directionLineType: z.td.fromJSON(e.attributes.DirectionLineType),
            directionPointId: e.attributes.DirectionPointID,
            distance: e.attributes.Meters,
            duration: e.attributes.Minutes,
            fromLevel: null != (t = e.attributes.FromLevel) ? t : null,
            geometry: k.Z.fromJSON(e.geometry),
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
            toLevel: null != (i = e.attributes.ToLevel) ? i : null,
          });
        }
        toPortalJSON() {
          const e = {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              DirectionLineType: (0, c.pC)(this.directionLineType)
                ? z.td.toJSON(this.directionLineType)
                : null,
              DirectionPointID: (0, c.Wg)(this.directionPointId),
              Meters: (0, c.Wg)(this.distance),
              Minutes: (0, c.Wg)(this.duration),
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
          return (
            (0, c.pC)(this.fromLevel) &&
              (e.attributes.FromLevel = this.fromLevel),
            (0, c.pC)(this.toLevel) && (e.attributes.ToLevel = this.toLevel),
            e
          );
        }
      });
      (H.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'DirectionLineType',
          alias: 'Line Type',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriDirectionsLineType',
            codedValues: [
              { name: 'Unknown', code: 0 },
              { name: 'Segment', code: 1 },
              { name: 'Maneuver Segment', code: 2 },
              { name: 'Restriction violation', code: 3 },
              { name: 'Scale cost barrier crossing', code: 4 },
              { name: 'Heavy Traffic', code: 5 },
              { name: 'Slow Traffic', code: 6 },
              { name: 'Moderate Traffic', code: 7 },
            ],
          },
        },
        {
          name: 'DirectionPointID',
          alias: 'Direction Point ID',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'FromLevel',
          alias: 'Start from 3D Level',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'Meters',
          alias: 'Length in Meters',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'Minutes',
          alias: 'Duration in Minutes',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ToLevel',
          alias: 'End at 3D Level',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
      ]),
        (H.popupInfo = {
          title: 'Direction Lines',
          fieldInfos: [
            {
              fieldName: 'DirectionLineType',
              label: 'Line Type',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Meters',
              label: 'Length in Meters',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Minutes',
              label: 'Duration in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'DirectionPointID',
              label: 'Direction Point ID',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'FromLevel',
              label: 'Start from 3D Level',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ToLevel',
              label: 'End at 3D Level',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.td.apiValues,
              json: {
                read: {
                  source: 'attributes.DirectionLineType',
                  reader: z.td.read,
                },
              },
            }),
          ],
          H.prototype,
          'directionLineType',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              json: { read: { source: 'attributes.DirectionPointID' } },
            }),
          ],
          H.prototype,
          'directionPointId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.Meters' } } })],
          H.prototype,
          'distance',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.Minutes' } } })],
          H.prototype,
          'duration',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.FromLevel' } } })],
          H.prototype,
          'fromLevel',
          void 0,
        ),
        (0, r._)([(0, v.Cb)({ type: k.Z })], H.prototype, 'geometry', void 0),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.ObjectID' } } })],
          H.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          H.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          H.prototype,
          'symbol',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.ToLevel' } } })],
          H.prototype,
          'toLevel',
          void 0,
        ),
        (H = R = (0, r._)([(0, T.j)('esri.rest.support.DirectionLine')], H));
      const $ = H;
      var Y,
        K = i(13473);
      let X = (Y = class extends A.wq {
        constructor(e) {
          super(e),
            (this.alternateName = null),
            (this.arrivalTime = null),
            (this.arrivalTimeOffset = null),
            (this.azimuth = null),
            (this.branchName = null),
            (this.directionPointType = null),
            (this.displayText = null),
            (this.exitName = null),
            (this.geometry = null),
            (this.intersectingName = null),
            (this.level = null),
            (this.name = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.sequence = null),
            (this.shortVoiceInstruction = null),
            (this.stopId = null),
            (this.symbol = null),
            (this.towardName = null),
            (this.voiceInstruction = null);
        }
        readArrivalTime(e, t) {
          return (0, c.pC)(t.attributes.ArrivalTime)
            ? new Date(t.attributes.ArrivalTime)
            : null;
        }
        static fromPortalJSON(e) {
          var t, i, r, o, s, l, n, u, p, d, m, y, b;
          return new Y({
            alternateName: null != (t = e.attributes.AlternateName) ? t : null,
            arrivalTime: (0, c.pC)(e.attributes.ArrivalTime)
              ? new Date(e.attributes.ArrivalTime)
              : null,
            arrivalTimeOffset:
              null != (i = e.attributes.ArrivalUTCOffset) ? i : null,
            azimuth: null != (r = e.attributes.Azimuth) ? r : null,
            branchName: null != (o = e.attributes.BranchName) ? o : null,
            directionPointType: z.cW.fromJSON(e.attributes.DirectionPointType),
            displayText: null != (s = e.attributes.DisplayText) ? s : null,
            exitName: null != (l = e.attributes.ExitName) ? l : null,
            geometry: K.Z.fromJSON(e.geometry),
            intersectingName:
              null != (n = e.attributes.IntersectingName) ? n : null,
            level: null != (u = e.attributes.Level) ? u : null,
            name: null != (p = e.attributes.Name) ? p : null,
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            sequence: e.attributes.Sequence,
            shortVoiceInstruction:
              null != (d = e.attributes.ShortVoiceInstruction) ? d : null,
            stopId: null != (m = e.attributes.StopID) ? m : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
            towardName: null != (y = e.attributes.TowardName) ? y : null,
            voiceInstruction:
              null != (b = e.attributes.VoiceInstruction) ? b : null,
          });
        }
        toPortalJSON() {
          const e = {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              DirectionPointType: (0, c.pC)(this.directionPointType)
                ? z.cW.toJSON(this.directionPointType)
                : null,
              Sequence: (0, c.Wg)(this.sequence),
              StopID: this.stopId,
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
          return (
            (0, c.pC)(this.alternateName) &&
              (e.attributes.AlternateName = this.alternateName),
            (0, c.pC)(this.arrivalTime) &&
              (e.attributes.ArrivalTime = this.arrivalTime.getTime()),
            (0, c.pC)(this.arrivalTimeOffset) &&
              (e.attributes.ArrivalUTCOffset = this.arrivalTimeOffset),
            (0, c.pC)(this.azimuth) && (e.attributes.Azimuth = this.azimuth),
            (0, c.pC)(this.branchName) &&
              (e.attributes.BranchName = this.branchName),
            (0, c.pC)(this.displayText) &&
              (e.attributes.DisplayText = this.displayText),
            (0, c.pC)(this.exitName) && (e.attributes.ExitName = this.exitName),
            (0, c.pC)(this.intersectingName) &&
              (e.attributes.IntersectingName = this.intersectingName),
            (0, c.pC)(this.level) && (e.attributes.Level = this.level),
            (0, c.pC)(this.name) && (e.attributes.Name = this.name),
            (0, c.pC)(this.shortVoiceInstruction) &&
              (e.attributes.ShortVoiceInstruction = this.shortVoiceInstruction),
            (0, c.pC)(this.towardName) &&
              (e.attributes.TowardName = this.towardName),
            (0, c.pC)(this.voiceInstruction) &&
              (e.attributes.VoiceInstruction = this.voiceInstruction),
            e
          );
        }
      });
      (X.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'AlternateName',
          alias: 'Alternative Feature Name',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'ArrivalTime',
          alias: 'Maneuver Starts at',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ArrivalUTCOffset',
          alias: 'Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'Azimuth',
          alias: 'Azimuth',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'BranchName',
          alias: 'Signpost Branch Name',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'DirectionPointType',
          alias: 'Directions Item Type',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriDirectionPointType',
            codedValues: [
              { name: 'Unknown', code: 0 },
              { name: '', code: 1 },
              { name: 'Arrive at stop', code: 50 },
              { name: 'Depart at stop', code: 51 },
              { name: 'Go straight', code: 52 },
              { name: 'Take ferry', code: 100 },
              { name: 'Take off ferry', code: 101 },
              { name: 'Keep center at fork', code: 102 },
              { name: 'Take roundabout', code: 103 },
              { name: 'Make U-Turn', code: 104 },
              { name: 'Pass the door', code: 150 },
              { name: 'Take stairs', code: 151 },
              { name: '', code: 152 },
              { name: 'Take escalator', code: 153 },
              { name: 'Take pedestrian ramp', code: 154 },
              { name: 'Keep left at fork', code: 200 },
              { name: 'Ramp left', code: 201 },
              { name: 'Take left-handed roundabout', code: 202 },
              { name: 'Make left-handed U-Turn', code: 203 },
              { name: 'Bear left', code: 204 },
              { name: 'Turn left', code: 205 },
              { name: 'Make sharp left', code: 206 },
              { name: 'Turn left, followed by turn left', code: 207 },
              { name: 'Turn left, followed by turn right', code: 208 },
              { name: 'Keep right at fork', code: 300 },
              { name: 'Ramp right', code: 301 },
              { name: 'Take right-handed roundabout', code: 302 },
              { name: 'Make right-handed U-Turn', code: 303 },
              { name: 'Bear right', code: 304 },
              { name: 'Turn right', code: 305 },
              { name: 'Make sharp right', code: 306 },
              { name: 'Turn right, followed by turn left', code: 307 },
              { name: 'Turn right, followed by turn right', code: 308 },
              { name: 'Indicates up direction of elevator', code: 400 },
              { name: 'Indicates up direction of escalator', code: 401 },
              { name: 'Take up-stairs', code: 402 },
              { name: 'Indicates down direction of elevator', code: 500 },
              { name: 'Indicates down direction of escalator', code: 501 },
              { name: 'Take down-stairs', code: 502 },
              { name: 'General event', code: 1e3 },
              { name: 'Landmark', code: 1001 },
              { name: 'Time zone change', code: 1002 },
              { name: 'Heavy traffic segment', code: 1003 },
              { name: 'Scale cost barrier crossing', code: 1004 },
              { name: 'Administrative Border crossing', code: 1005 },
              { name: 'Restriction violation', code: 1006 },
            ],
          },
        },
        {
          name: 'DisplayText',
          alias: 'Text to Display',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'ExitName',
          alias: 'Highway Exit Name',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'IntersectingName',
          alias: 'Intersecting Feature Name',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'Level',
          alias: '3D Logical Level',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'Name',
          alias: 'Primary Feature Name',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'Sequence',
          alias: 'Sequence',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ShortVoiceInstruction',
          alias: 'Voice Instruction',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'StopID',
          alias: 'Stop ID',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'TowardName',
          alias: 'Signpost Toward Name',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'VoiceInstruction',
          alias: 'Voice Full Instruction',
          type: 'esriFieldTypeString',
          length: 2048,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
      ]),
        (X.popupInfo = {
          title: '{DisplayText}',
          fieldInfos: [
            {
              fieldName: 'DirectionPointType',
              label: 'Directions Item Type',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'DisplayText',
              label: 'Text to Display',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Sequence',
              label: 'Sequence',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'StopID',
              label: 'Stop ID',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ArrivalTime',
              label: 'Maneuver Starts at',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ArrivalUTCOffset',
              label: 'Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Azimuth',
              label: 'Azimuth',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Name',
              label: 'Primary Feature Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'AlternateName',
              label: 'Alternative Feature Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ExitName',
              label: 'Highway Exit Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'IntersectingName',
              label: 'Intersecting Feature Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'BranchName',
              label: 'Signpost Branch Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TowardName',
              label: 'Signpost Toward Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ShortVoiceInstruction',
              label: 'Voice Instruction',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'VoiceInstruction',
              label: 'Voice Full Instruction',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          X.prototype,
          'alternateName',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], X.prototype, 'arrivalTime', void 0),
        (0, r._)(
          [(0, C.r)('arrivalTime', ['attributes.ArrivalTime'])],
          X.prototype,
          'readArrivalTime',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              json: { read: { source: 'attributes.ArrivalUTCOffset' } },
            }),
          ],
          X.prototype,
          'arrivalTimeOffset',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.Azimuth' } } })],
          X.prototype,
          'azimuth',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.BranchName' } } })],
          X.prototype,
          'branchName',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.cW.apiValues,
              json: {
                read: {
                  source: 'attributes.DirectionPointType',
                  reader: z.cW.read,
                },
              },
            }),
          ],
          X.prototype,
          'directionPointType',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.DisplayText' } } })],
          X.prototype,
          'displayText',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.ExitName' } } })],
          X.prototype,
          'exitName',
          void 0,
        ),
        (0, r._)([(0, v.Cb)({ type: K.Z })], X.prototype, 'geometry', void 0),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          X.prototype,
          'intersectingName',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          X.prototype,
          'level',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.Name' } } })],
          X.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.ObjectID' } } })],
          X.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          X.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.Sequence' } } })],
          X.prototype,
          'sequence',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          X.prototype,
          'shortVoiceInstruction',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.StopID' } } })],
          X.prototype,
          'stopId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          X.prototype,
          'symbol',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.TowardName' } } })],
          X.prototype,
          'towardName',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          X.prototype,
          'voiceInstruction',
          void 0,
        ),
        (X = Y = (0, r._)([(0, T.j)('esri.rest.support.DirectionPoint')], X));
      const Q = X;
      var ee,
        te = i(22974);
      function ie(e, t) {
        if ((0, c.Wi)(e)) return null;
        const i = {},
          r = new RegExp(`^${t}`, 'i');
        for (const o in e)
          e.hasOwnProperty(o) && r.test(o) && (i[o.substring(t.length)] = e[o]);
        return i;
      }
      function re(e, t) {
        return (0, c.Wi)(e) || (0, c.Wi)(t) ? null : Math.round((e - t) / 6e4);
      }
      let oe = (ee = class extends A.wq {
        constructor(e) {
          super(e),
            (this.addedCost = null),
            (this.barrierType = null),
            (this.costs = null),
            (this.curbApproach = null),
            (this.fullEdge = null),
            (this.geometry = null),
            (this.name = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.sideOfEdge = null),
            (this.sourceId = null),
            (this.sourceOid = null),
            (this.status = null),
            (this.symbol = null);
        }
        readCosts(e, t) {
          return ie(t.attributes, 'Attr_');
        }
        writeCosts(e, t) {
          if (!(0, c.Wi)(e)) {
            t.attributes || (t.attributes = {});
            for (const i in e) t.attributes[`Attr_${i}`] = e[i];
          }
        }
        static fromPortalJSON(e) {
          var t, i;
          return new ee({
            addedCost: null != (t = e.attributes.AddedCost) ? t : null,
            barrierType: (0, c.pC)(e.attributes.BarrierType)
              ? z.oi.fromJSON(e.attributes.BarrierType)
              : null,
            costs: (0, c.pC)(e.attributes.Costs)
              ? JSON.parse(e.attributes.Costs)
              : null,
            curbApproach: (0, c.pC)(e.attributes.CurbApproach)
              ? z.W7.fromJSON(e.attributes.CurbApproach)
              : null,
            fullEdge: (0, c.pC)(e.attributes.FullEdge)
              ? z.Dd.fromJSON(e.attributes.FullEdge)
              : null,
            geometry: K.Z.fromJSON(e.geometry),
            name: null != (i = e.attributes.Name) ? i : null,
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            status: (0, c.pC)(e.attributes.Status)
              ? z.SS.fromJSON(e.attributes.Status)
              : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
          });
        }
        clone() {
          return new ee(
            (0, te.d9)({
              addedCost: this.addedCost,
              barrierType: this.barrierType,
              costs: this.costs,
              curbApproach: this.curbApproach,
              fullEdge: this.fullEdge,
              geometry: this.geometry,
              name: this.name,
              objectId: this.objectId,
              popupTemplate: this.popupTemplate,
              sideOfEdge: this.sideOfEdge,
              sourceId: this.sourceId,
              sourceOid: this.sourceOid,
              status: this.status,
              symbol: this.symbol,
            }),
          );
        }
        toPortalJSON() {
          return {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              AddedCost: this.addedCost,
              BarrierType: (0, c.pC)(this.barrierType)
                ? z.oi.toJSON(this.barrierType)
                : null,
              Costs: (0, c.pC)(this.costs) ? JSON.stringify(this.costs) : null,
              CurbApproach: (0, c.pC)(this.curbApproach)
                ? z.W7.toJSON(this.curbApproach)
                : null,
              FullEdge: (0, c.pC)(this.fullEdge)
                ? z.Dd.toJSON(this.fullEdge)
                : null,
              Name: this.name,
              Status: (0, c.pC)(this.status) ? z.SS.toJSON(this.status) : null,
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
        }
      });
      (oe.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'AddedCost',
          alias: 'Added Cost',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'BarrierType',
          alias: 'Barrier Type',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNABarrierType',
            codedValues: [
              { name: 'Restriction', code: 0 },
              { name: 'Scaled Cost', code: 1 },
              { name: 'Added Cost', code: 2 },
            ],
          },
        },
        {
          name: 'Costs',
          alias: 'Costs',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'CurbApproach',
          alias: 'Curb Approach',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: {
            type: 'codedValue',
            name: 'esriNACurbApproachType',
            codedValues: [
              { name: 'Either side', code: 0 },
              { name: 'From the right', code: 1 },
              { name: 'From the left', code: 2 },
              { name: 'Depart in the same direction', code: 3 },
            ],
          },
        },
        {
          name: 'FullEdge',
          alias: 'Full Edge',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNAIntYesNo',
            codedValues: [
              { name: 'No', code: 0 },
              { name: 'Yes', code: 1 },
            ],
          },
        },
        {
          name: 'Name',
          alias: 'Name',
          type: 'esriFieldTypeString',
          length: 255,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'Status',
          alias: 'Status',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNAObjectStatus',
            codedValues: [
              { name: 'OK', code: 0 },
              { name: 'Not Located on Network', code: 1 },
              { name: 'Network Unbuilt', code: 2 },
              { name: 'Prohibited Street', code: 3 },
              { name: 'Invalid Field Values', code: 4 },
              { name: 'Cannot Reach', code: 5 },
              { name: 'Time Window Violation', code: 6 },
            ],
          },
        },
      ]),
        (oe.popupInfo = {
          title: 'Point Barriers',
          fieldInfos: [
            {
              fieldName: 'Name',
              label: 'Name',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'BarrierType',
              label: 'Barrier Type',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'AddedCost',
              label: 'Added Cost',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              format: { places: 3, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          oe.prototype,
          'addedCost',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.oi.apiValues,
              json: {
                name: 'attributes.BarrierType',
                read: { reader: z.oi.read },
                write: { writer: z.oi.write },
              },
            }),
          ],
          oe.prototype,
          'barrierType',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], oe.prototype, 'costs', void 0),
        (0, r._)(
          [(0, C.r)('costs', ['attributes'])],
          oe.prototype,
          'readCosts',
          null,
        ),
        (0, r._)([(0, S.c)('costs')], oe.prototype, 'writeCosts', null),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.W7.apiValues,
              json: {
                read: { source: 'attributes.CurbApproach', reader: z.W7.read },
              },
            }),
          ],
          oe.prototype,
          'curbApproach',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.Dd.apiValues,
              json: {
                name: 'attributes.FullEdge',
                read: { reader: z.Dd.read },
                write: { writer: z.Dd.write },
              },
            }),
          ],
          oe.prototype,
          'fullEdge',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: K.Z, json: { write: !0 } })],
          oe.prototype,
          'geometry',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.Name', write: !0 } })],
          oe.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.ObjectID', write: !0 } })],
          oe.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          oe.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.BW.apiValues,
              json: {
                read: { source: 'attributes.SideOfEdge', reader: z.BW.read },
              },
            }),
          ],
          oe.prototype,
          'sideOfEdge',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SourceID' } } })],
          oe.prototype,
          'sourceId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SourceOID' } } })],
          oe.prototype,
          'sourceOid',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.SS.apiValues,
              json: {
                read: { source: 'attributes.Status', reader: z.SS.read },
              },
            }),
          ],
          oe.prototype,
          'status',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          oe.prototype,
          'symbol',
          void 0,
        ),
        (oe = ee = (0, r._)([(0, T.j)('esri.rest.support.PointBarrier')], oe));
      const se = oe;
      var ae,
        le = i(38913);
      let ne = (ae = class extends A.wq {
        constructor(e) {
          super(e),
            (this.barrierType = null),
            (this.costs = null),
            (this.geometry = null),
            (this.name = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.scaleFactor = null),
            (this.symbol = null);
        }
        readCosts(e, t) {
          return ie(t.attributes, 'Attr_');
        }
        writeCosts(e, t) {
          if (!(0, c.Wi)(e)) {
            t.attributes || (t.attributes = {});
            for (const i in e) t.attributes[`Attr_${i}`] = e[i];
          }
        }
        static fromPortalJSON(e) {
          var t, i;
          return new ae({
            barrierType: (0, c.pC)(e.attributes.BarrierType)
              ? z.oi.fromJSON(e.attributes.BarrierType)
              : null,
            costs: (0, c.pC)(e.attributes.Costs)
              ? JSON.parse(e.attributes.Costs)
              : null,
            geometry: le.Z.fromJSON(e.geometry),
            name: null != (t = e.attributes.Name) ? t : null,
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            scaleFactor: null != (i = e.attributes.ScaleFactor) ? i : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
          });
        }
        clone() {
          return new ae(
            (0, te.d9)({
              barrierType: this.barrierType,
              costs: this.costs,
              geometry: this.geometry,
              name: this.name,
              objectId: this.objectId,
              popupTemplate: this.popupTemplate,
              scaleFactor: this.scaleFactor,
              symbol: this.symbol,
            }),
          );
        }
        toPortalJSON() {
          var e, t;
          return {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              BarrierType: (0, c.pC)(this.barrierType)
                ? z.oi.toJSON(this.barrierType)
                : null,
              Costs: (0, c.pC)(this.costs) ? JSON.stringify(this.costs) : null,
              Name: null != (e = this.name) ? e : null,
              ScaleFactor: null != (t = this.scaleFactor) ? t : null,
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
        }
      });
      (ne.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'BarrierType',
          alias: 'Barrier Type',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNABarrierType',
            codedValues: [
              { name: 'Restriction', code: 0 },
              { name: 'Scaled Cost', code: 1 },
              { name: 'Added Cost', code: 2 },
            ],
          },
        },
        {
          name: 'Costs',
          alias: 'Costs',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'Name',
          alias: 'Name',
          type: 'esriFieldTypeString',
          length: 255,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ScaleFactor',
          alias: 'Scale Factor',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
      ]),
        (ne.popupInfo = {
          title: 'Polygon Barriers',
          fieldInfos: [
            {
              fieldName: 'Name',
              label: 'Name',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'BarrierType',
              label: 'Barrier Type',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ScaleFactor',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              format: { places: 3, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Costs',
              label: 'Costs',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.oi.apiValues,
              json: {
                name: 'attributes.BarrierType',
                read: { reader: z.oi.read },
                write: { writer: z.oi.write },
              },
            }),
          ],
          ne.prototype,
          'barrierType',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], ne.prototype, 'costs', void 0),
        (0, r._)(
          [(0, C.r)('costs', ['attributes'])],
          ne.prototype,
          'readCosts',
          null,
        ),
        (0, r._)([(0, S.c)('costs')], ne.prototype, 'writeCosts', null),
        (0, r._)(
          [(0, v.Cb)({ type: le.Z, json: { write: !0 } })],
          ne.prototype,
          'geometry',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.Name', write: !0 } })],
          ne.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.ObjectID', write: !0 } })],
          ne.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          ne.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          ne.prototype,
          'scaleFactor',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          ne.prototype,
          'symbol',
          void 0,
        ),
        (ne = ae =
          (0, r._)([(0, T.j)('esri.rest.support.PolygonBarrier')], ne));
      const ue = ne;
      var pe;
      let de = (pe = class extends A.wq {
        constructor(e) {
          super(e),
            (this.barrierType = null),
            (this.costs = null),
            (this.geometry = null),
            (this.name = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.scaleFactor = null),
            (this.symbol = null);
        }
        readCosts(e, t) {
          return ie(t.attributes, 'Attr_');
        }
        static fromPortalJSON(e) {
          var t, i;
          return new pe({
            barrierType: (0, c.pC)(e.attributes.BarrierType)
              ? z.oi.fromJSON(e.attributes.BarrierType)
              : null,
            costs: (0, c.pC)(e.attributes.Costs)
              ? JSON.parse(e.attributes.Costs)
              : null,
            geometry: k.Z.fromJSON(e.geometry),
            name: null != (t = e.attributes.Name) ? t : null,
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            scaleFactor: null != (i = e.attributes.ScaleFactor) ? i : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
          });
        }
        clone() {
          return new pe(
            (0, te.d9)({
              barrierType: this.barrierType,
              costs: this.costs,
              geometry: this.geometry,
              name: this.name,
              objectId: this.objectId,
              popupTemplate: this.popupTemplate,
              scaleFactor: this.scaleFactor,
              symbol: this.symbol,
            }),
          );
        }
        toPortalJSON() {
          return {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              BarrierType: (0, c.pC)(this.barrierType)
                ? z.oi.toJSON(this.barrierType)
                : null,
              Costs: (0, c.pC)(this.costs) ? JSON.stringify(this.costs) : null,
              Name: this.name,
              ScaleFactor: this.scaleFactor,
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
        }
      });
      (de.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'BarrierType',
          alias: 'Barrier Type',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNABarrierType',
            codedValues: [
              { name: 'Restriction', code: 0 },
              { name: 'Scaled Cost', code: 1 },
              { name: 'Added Cost', code: 2 },
            ],
          },
        },
        {
          name: 'Costs',
          alias: 'Costs',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'Name',
          alias: 'Name',
          type: 'esriFieldTypeString',
          length: 255,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ScaleFactor',
          alias: 'Scale Factor',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
      ]),
        (de.popupInfo = {
          title: 'Line Barriers',
          fieldInfos: [
            {
              fieldName: 'Name',
              label: 'Name',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'BarrierType',
              label: 'Barrier Type',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ScaleFactor',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              format: { places: 3, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Costs',
              label: 'Costs',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.oi.apiValues,
              json: {
                read: { source: 'attributes.BarrierType', reader: z.oi.read },
              },
            }),
          ],
          de.prototype,
          'barrierType',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], de.prototype, 'costs', void 0),
        (0, r._)(
          [(0, C.r)('costs', ['attributes'])],
          de.prototype,
          'readCosts',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: k.Z, json: { write: !0 } })],
          de.prototype,
          'geometry',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.Name', write: !0 } })],
          de.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.ObjectID', write: !0 } })],
          de.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          de.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          de.prototype,
          'scaleFactor',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          de.prototype,
          'symbol',
          void 0,
        ),
        (de = pe =
          (0, r._)([(0, T.j)('esri.rest.support.PolylineBarrier')], de));
      const ce = de;
      var me = i(49827);
      let ye = class extends A.wq {
        constructor(e) {
          super(e),
            (this.accumulateAttributes = null),
            (this.directionsLanguage = null),
            (this.findBestSequence = null),
            (this.preserveFirstStop = null),
            (this.preserveLastStop = null),
            (this.startTimeIsUTC = null),
            (this.timeWindowsAreUTC = null),
            (this.travelMode = null);
        }
      };
      (0, r._)(
        [
          (0, v.Cb)({
            type: [String],
            json: {
              read: { source: 'accumulateAttributeNames' },
              write: { target: 'accumulateAttributeNames' },
            },
          }),
        ],
        ye.prototype,
        'accumulateAttributes',
        void 0,
      ),
        (0, r._)(
          [(0, v.Cb)({ type: String, json: { write: !0 } })],
          ye.prototype,
          'directionsLanguage',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          ye.prototype,
          'findBestSequence',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          ye.prototype,
          'preserveFirstStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          ye.prototype,
          'preserveLastStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          ye.prototype,
          'startTimeIsUTC',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          ye.prototype,
          'timeWindowsAreUTC',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: me.Z, json: { write: !0 } })],
          ye.prototype,
          'travelMode',
          void 0,
        ),
        (ye = (0, r._)([(0, T.j)('esri.layers.support.RouteSettings')], ye));
      const be = ye;
      var he;
      let fe = (he = class extends A.wq {
        constructor(e) {
          super(e),
            (this.analysisSettings = null),
            (this.endTime = null),
            (this.endTimeOffset = null),
            (this.firstStopId = null),
            (this.geometry = null),
            (this.lastStopId = null),
            (this.messages = null),
            (this.name = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.startTime = null),
            (this.startTimeOffset = null),
            (this.stopCount = null),
            (this.symbol = null),
            (this.totalCosts = null),
            (this.totalDistance = null),
            (this.totalDuration = null),
            (this.totalLateDuration = null),
            (this.totalViolations = null),
            (this.totalWait = null),
            (this.totalWaitDuration = null),
            (this.version = '1.0.0');
        }
        readEndTime(e, t) {
          return (0, c.pC)(t.attributes.EndTimeUTC)
            ? new Date(t.attributes.EndTimeUTC)
            : null;
        }
        readEndTimeOffset(e, t) {
          return re(t.attributes.EndTime, t.attributes.EndTimeUTC);
        }
        readStartTime(e, t) {
          return (0, c.pC)(t.attributes.StartTimeUTC)
            ? new Date(t.attributes.StartTimeUTC)
            : null;
        }
        readStartTimeOffset(e, t) {
          return re(t.attributes.StartTime, t.attributes.StartTimeUTC);
        }
        readTotalCosts(e, t) {
          return ie(t.attributes, 'Total_');
        }
        readTotalViolations(e, t) {
          return ie(t.attributes, 'TotalViolation_');
        }
        readTotalWait(e, t) {
          return ie(t.attributes, 'TotalWait_');
        }
        static fromPortalJSON(e) {
          var t, i, r, o, s, l;
          return new he({
            analysisSettings: (0, c.pC)(e.attributes.AnalysisSettings)
              ? be.fromJSON(JSON.parse(e.attributes.AnalysisSettings))
              : null,
            endTime: (0, c.pC)(e.attributes.EndTime)
              ? new Date(e.attributes.EndTime)
              : null,
            endTimeOffset: null != (t = e.attributes.EndUTCOffset) ? t : null,
            geometry: k.Z.fromJSON(e.geometry),
            messages: (0, c.pC)(e.attributes.Messages)
              ? JSON.parse(e.attributes.Messages)
              : null,
            name: e.attributes.RouteName,
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            startTime: (0, c.pC)(e.attributes.StartTime)
              ? new Date(e.attributes.StartTime)
              : null,
            startTimeOffset:
              null != (i = e.attributes.StartUTCOffset) ? i : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
            totalCosts: (0, c.pC)(e.attributes.TotalCosts)
              ? JSON.parse(e.attributes.TotalCosts)
              : null,
            totalDistance: null != (r = e.attributes.TotalMeters) ? r : null,
            totalDuration: null != (o = e.attributes.TotalMinutes) ? o : null,
            totalLateDuration:
              null != (s = e.attributes.TotalLateMinutes) ? s : null,
            totalWaitDuration:
              null != (l = e.attributes.TotalWaitMinutes) ? l : null,
            version: e.attributes.Version,
          });
        }
        toPortalJSON() {
          return {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              AnalysisSettings: (0, c.pC)(this.analysisSettings)
                ? JSON.stringify(this.analysisSettings.toJSON())
                : null,
              EndTime: (0, c.pC)(this.endTime) ? this.endTime.getTime() : null,
              EndUTCOffset: this.endTimeOffset,
              Messages: (0, c.pC)(this.messages)
                ? JSON.stringify(this.messages)
                : null,
              RouteName: (0, c.Wg)(this.name),
              StartTime: (0, c.pC)(this.startTime)
                ? this.startTime.getTime()
                : null,
              StartUTCOffset: this.startTimeOffset,
              TotalCosts: (0, c.pC)(this.totalCosts)
                ? JSON.stringify(this.totalCosts)
                : null,
              TotalLateMinutes: this.totalLateDuration,
              TotalMeters: this.totalDistance,
              TotalMinutes: this.totalDuration,
              TotalWaitMinutes: this.totalWaitDuration,
              Version: (0, c.Wg)(this.version),
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
        }
      });
      (fe.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'AnalysisSettings',
          alias: 'Analysis Settings',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'EndTime',
          alias: 'End Time',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'EndUTCOffset',
          alias: 'End Time: Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'Messages',
          alias: 'Analysis Messages',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'RouteName',
          alias: 'Route Name',
          type: 'esriFieldTypeString',
          length: 1024,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
        {
          name: 'StartTime',
          alias: 'Start Time',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'StartUTCOffset',
          alias: 'Start Time: Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'TotalCosts',
          alias: 'Total Costs',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'TotalLateMinutes',
          alias: 'Total Late Minutes',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'TotalMeters',
          alias: 'Total Meters',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'TotalMinutes',
          alias: 'Total Minutes',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'TotalWaitMinutes',
          alias: 'Total Wait Minutes',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'Version',
          alias: 'Version',
          type: 'esriFieldTypeString',
          length: 16,
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: null,
        },
      ]),
        (fe.popupInfo = {
          title: 'Route Details',
          fieldInfos: [
            {
              fieldName: 'RouteName',
              label: 'Route Name',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TotalMinutes',
              label: 'Total Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TotalMeters',
              label: 'Total Meters',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TotalLateMinutes',
              label: 'Total Late Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TotalWaitMinutes',
              label: 'Total Wait Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TotalCosts',
              label: 'Total Costs',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'StartTime',
              label: 'Start Time',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'StartUTCOffset',
              label: 'Start Time: Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'EndTime',
              label: 'End Time',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'EndUTCOffset',
              label: 'End Time: Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Messages',
              label: 'Analysis Messages',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'AnalysisSettings',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Version',
              label: 'Version',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'analysisSettings',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'endTime', void 0),
        (0, r._)(
          [(0, C.r)('endTime', ['attributes.EndTimeUTC'])],
          fe.prototype,
          'readEndTime',
          null,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'endTimeOffset', void 0),
        (0, r._)(
          [
            (0, C.r)('endTimeOffset', [
              'attributes.EndTime',
              'attributes.EndTimeUTC',
            ]),
          ],
          fe.prototype,
          'readEndTimeOffset',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.FirstStopID' } } })],
          fe.prototype,
          'firstStopId',
          void 0,
        ),
        (0, r._)([(0, v.Cb)({ type: k.Z })], fe.prototype, 'geometry', void 0),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.LastStopID' } } })],
          fe.prototype,
          'lastStopId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'messages',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.Name' } } })],
          fe.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.ObjectID' } } })],
          fe.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          fe.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'startTime', void 0),
        (0, r._)(
          [(0, C.r)('startTime', ['attributes.StartTimeUTC'])],
          fe.prototype,
          'readStartTime',
          null,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'startTimeOffset', void 0),
        (0, r._)(
          [
            (0, C.r)('startTimeOffset', [
              'attributes.StartTime',
              'attributes.StartTimeUTC',
            ]),
          ],
          fe.prototype,
          'readStartTimeOffset',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.StopCount' } } })],
          fe.prototype,
          'stopCount',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          fe.prototype,
          'symbol',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'totalCosts', void 0),
        (0, r._)(
          [(0, C.r)('totalCosts', ['attributes'])],
          fe.prototype,
          'readTotalCosts',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'totalDistance',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'totalDuration',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'totalLateDuration',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'totalViolations', void 0),
        (0, r._)(
          [(0, C.r)('totalViolations', ['attributes'])],
          fe.prototype,
          'readTotalViolations',
          null,
        ),
        (0, r._)([(0, v.Cb)()], fe.prototype, 'totalWait', void 0),
        (0, r._)(
          [(0, C.r)('totalWait', ['attributes'])],
          fe.prototype,
          'readTotalWait',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'totalWaitDuration',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          fe.prototype,
          'version',
          void 0,
        ),
        (fe = he = (0, r._)([(0, T.j)('esri.rest.support.RouteInfo')], fe));
      const ve = fe;
      var ge = i(36030);
      const Ce = {
        type: String,
        json: { read: { source: 'token' }, write: { target: 'token' } },
      };
      var Te,
        Se = i(82971);
      let we = (Te = class extends A.wq {
        constructor(e) {
          super(e),
            (this.accumulateAttributes = null),
            (this.apiKey = null),
            (this.attributeParameterValues = null),
            (this.directionsLanguage = null),
            (this.directionsLengthUnits = null),
            (this.directionsOutputType = null),
            (this.directionsStyleName = null),
            (this.directionsTimeAttribute = null),
            (this.findBestSequence = null),
            (this.ignoreInvalidLocations = null),
            (this.impedanceAttribute = null),
            (this.outputGeometryPrecision = null),
            (this.outputGeometryPrecisionUnits = null),
            (this.outputLines = 'true-shape'),
            (this.outSpatialReference = null),
            (this.pointBarriers = null),
            (this.polygonBarriers = null),
            (this.polylineBarriers = null),
            (this.preserveFirstStop = null),
            (this.preserveLastStop = null),
            (this.restrictionAttributes = null),
            (this.restrictUTurns = null),
            (this.returnBarriers = !1),
            (this.returnDirections = !1),
            (this.returnPolygonBarriers = !1),
            (this.returnPolylineBarriers = !1),
            (this.returnRoutes = !0),
            (this.returnStops = !1),
            (this.returnZ = !0),
            (this.startTime = null),
            (this.startTimeIsUTC = !0),
            (this.stops = null),
            (this.timeWindowsAreUTC = null),
            (this.travelMode = null),
            (this.useHierarchy = null),
            (this.useTimeWindows = null);
        }
        static from(e) {
          return (0, g.TJ)(Te, e);
        }
        writePointBarriers(e, t, i) {
          this._writeNetworkFeatures(e, t, i);
        }
        writePolygonBarrier(e, t, i) {
          this._writeNetworkFeatures(e, t, i);
        }
        writePolylineBarrier(e, t, i) {
          this._writeNetworkFeatures(e, t, i);
        }
        readStartTime(e, t) {
          return null != t.startTime ? new Date(t.startTime) : null;
        }
        writeStartTime(e, t) {
          t.startTime = e ? e.getTime() : null;
        }
        writeStops(e, t, i) {
          this._writeNetworkFeatures(e, t, i);
        }
        clone() {
          return new Te(
            (0, te.d9)({
              accumulateAttributes: this.accumulateAttributes,
              apiKey: this.apiKey,
              attributeParameterValues: this.attributeParameterValues,
              directionsLanguage: this.directionsLanguage,
              directionsLengthUnits: this.directionsLengthUnits,
              directionsOutputType: this.directionsOutputType,
              directionsStyleName: this.directionsStyleName,
              directionsTimeAttribute: this.directionsTimeAttribute,
              findBestSequence: this.findBestSequence,
              ignoreInvalidLocations: this.ignoreInvalidLocations,
              impedanceAttribute: this.impedanceAttribute,
              outputGeometryPrecision: this.outputGeometryPrecision,
              outputGeometryPrecisionUnits: this.outputGeometryPrecisionUnits,
              outputLines: this.outputLines,
              outSpatialReference: this.outSpatialReference,
              pointBarriers: this.pointBarriers,
              polygonBarriers: this.polygonBarriers,
              polylineBarriers: this.polylineBarriers,
              preserveFirstStop: this.preserveFirstStop,
              preserveLastStop: this.preserveLastStop,
              restrictionAttributes: this.restrictionAttributes,
              restrictUTurns: this.restrictUTurns,
              returnBarriers: this.returnBarriers,
              returnDirections: this.returnDirections,
              returnPolygonBarriers: this.returnPolygonBarriers,
              returnPolylineBarriers: this.returnPolylineBarriers,
              returnRoutes: this.returnRoutes,
              returnStops: this.returnStops,
              returnZ: this.returnZ,
              startTime: this.startTime,
              startTimeIsUTC: this.startTimeIsUTC,
              stops: this.stops,
              timeWindowsAreUTC: this.timeWindowsAreUTC,
              travelMode: this.travelMode,
              useHierarchy: this.useHierarchy,
              useTimeWindows: this.useTimeWindows,
            }),
          );
        }
        _writeNetworkFeatures(e, t, i) {
          t[i] = n.Z.isCollection(e)
            ? { features: e.toArray().map((e) => e.toJSON()) }
            : e.toJSON();
        }
      });
      (0, r._)(
        [
          (0, v.Cb)({
            type: [String],
            json: { name: 'accumulateAttributeNames', write: !0 },
          }),
        ],
        we.prototype,
        'accumulateAttributes',
        void 0,
      ),
        (0, r._)([(0, v.Cb)(Ce)], we.prototype, 'apiKey', void 0),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'attributeParameterValues',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: String, json: { write: !0 } })],
          we.prototype,
          'directionsLanguage',
          void 0,
        ),
        (0, r._)(
          [(0, ge.J)(z.GX)],
          we.prototype,
          'directionsLengthUnits',
          void 0,
        ),
        (0, r._)(
          [(0, ge.J)(z.$7)],
          we.prototype,
          'directionsOutputType',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: String, json: { write: !0 } })],
          we.prototype,
          'directionsStyleName',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: String, json: { write: !0 } })],
          we.prototype,
          'directionsTimeAttribute',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'findBestSequence',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'ignoreInvalidLocations',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: String,
              json: {
                read: { source: 'impedanceAttributeName' },
                write: { target: 'impedanceAttributeName' },
              },
            }),
          ],
          we.prototype,
          'impedanceAttribute',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Number, json: { write: !0 } })],
          we.prototype,
          'outputGeometryPrecision',
          void 0,
        ),
        (0, r._)(
          [(0, ge.J)(z.q$)],
          we.prototype,
          'outputGeometryPrecisionUnits',
          void 0,
        ),
        (0, r._)([(0, ge.J)(z.no)], we.prototype, 'outputLines', void 0),
        (0, r._)(
          [(0, v.Cb)({ type: Se.Z, json: { write: !0 } })],
          we.prototype,
          'outSpatialReference',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, S.c)('pointBarriers')],
          we.prototype,
          'writePointBarriers',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, S.c)('polygonBarriers')],
          we.prototype,
          'writePolygonBarrier',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, S.c)('polylineBarriers')],
          we.prototype,
          'writePolylineBarrier',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'preserveFirstStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'preserveLastStop',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: [String], json: { write: !0 } })],
          we.prototype,
          'restrictionAttributes',
          void 0,
        ),
        (0, r._)([(0, ge.J)(z.ip)], we.prototype, 'restrictUTurns', void 0),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnDirections',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnPolygonBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnPolylineBarriers',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnRoutes',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnStops',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'returnZ',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Date, json: { type: Number, write: !0 } })],
          we.prototype,
          'startTime',
          void 0,
        ),
        (0, r._)([(0, C.r)('startTime')], we.prototype, 'readStartTime', null),
        (0, r._)([(0, S.c)('startTime')], we.prototype, 'writeStartTime', null),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'startTimeIsUTC',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'stops',
          void 0,
        ),
        (0, r._)([(0, S.c)('stops')], we.prototype, 'writeStops', null),
        (0, r._)(
          [(0, v.Cb)({ json: { write: !0 } })],
          we.prototype,
          'timeWindowsAreUTC',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: me.Z, json: { write: !0 } })],
          we.prototype,
          'travelMode',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'useHierarchy',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Boolean, json: { write: !0 } })],
          we.prototype,
          'useTimeWindows',
          void 0,
        ),
        (we = Te =
          (0, r._)([(0, T.j)('esri.rest.support.RouteParameters')], we));
      const _e = we;
      var Ne;
      let Oe = (Ne = class extends A.wq {
        constructor(e) {
          super(e),
            (this.arriveCurbApproach = null),
            (this.arriveTime = null),
            (this.arriveTimeOffset = null),
            (this.bearing = null),
            (this.bearingTol = null),
            (this.cumulativeCosts = null),
            (this.cumulativeDistance = null),
            (this.cumulativeDuration = null),
            (this.curbApproach = null),
            (this.departCurbApproach = null),
            (this.departTime = null),
            (this.departTimeOffset = null),
            (this.distanceToNetworkInMeters = null),
            (this.geometry = null),
            (this.lateDuration = null),
            (this.locationType = null),
            (this.name = null),
            (this.navLatency = null),
            (this.objectId = null),
            (this.popupTemplate = null),
            (this.posAlong = null),
            (this.routeName = null),
            (this.serviceCosts = null),
            (this.serviceDistance = null),
            (this.serviceDuration = null),
            (this.sequence = null),
            (this.sideOfEdge = null),
            (this.snapX = null),
            (this.snapY = null),
            (this.snapZ = null),
            (this.sourceId = null),
            (this.sourceOid = null),
            (this.status = null),
            (this.symbol = null),
            (this.timeWindowEnd = null),
            (this.timeWindowEndOffset = null),
            (this.timeWindowStart = null),
            (this.timeWindowStartOffset = null),
            (this.violations = null),
            (this.waitDuration = null),
            (this.wait = null);
        }
        readArriveTimeOffset(e, t) {
          return re(t.attributes.ArriveTime, t.attributes.ArriveTimeUTC);
        }
        readCumulativeCosts(e, t) {
          return ie(t.attributes, 'Cumul_');
        }
        readDepartTimeOffset(e, t) {
          return re(t.attributes.DepartTime, t.attributes.DepartTimeUTC);
        }
        readServiceCosts(e, t) {
          return ie(t.attributes, 'Attr_');
        }
        writeServiceCosts(e, t) {
          if (!(0, c.Wi)(e)) {
            t.attributes || (t.attributes = {});
            for (const i in e) t.attributes[`Attr_${i}`] = e[i];
          }
        }
        writeTimeWindowEnd(e, t) {
          (0, c.Wi)(e) ||
            (t.attributes || (t.attributes = {}),
            (t.attributes.TimeWindowEnd = e.getTime()));
        }
        writeTimeWindowStart(e, t) {
          (0, c.Wi)(e) ||
            (t.attributes || (t.attributes = {}),
            (t.attributes.TimeWindowStart = e.getTime()));
        }
        readViolations(e, t) {
          return ie(t.attributes, 'Violation_');
        }
        readWait(e, t) {
          return ie(t.attributes, 'Wait_');
        }
        static fromPortalJSON(e) {
          var t, i, r, o, s, l, n, u, p, d;
          return new Ne({
            arriveCurbApproach: (0, c.pC)(e.attributes.ArrivalCurbApproach)
              ? z.W7.fromJSON(e.attributes.ArrivalCurbApproach)
              : null,
            arriveTime: (0, c.pC)(e.attributes.ArrivalTime)
              ? new Date(e.attributes.ArrivalTime)
              : null,
            arriveTimeOffset: e.attributes.ArrivalUTCOffset,
            cumulativeCosts: (0, c.pC)(e.attributes.CumulativeCosts)
              ? JSON.parse(e.attributes.CumulativeCosts)
              : null,
            cumulativeDistance:
              null != (t = e.attributes.CumulativeMeters) ? t : null,
            cumulativeDuration:
              null != (i = e.attributes.CumulativeMinutes) ? i : null,
            curbApproach: (0, c.pC)(e.attributes.CurbApproach)
              ? z.W7.fromJSON(e.attributes.CurbApproach)
              : null,
            departCurbApproach: (0, c.pC)(e.attributes.DepartureCurbApproach)
              ? z.W7.fromJSON(e.attributes.DepartureCurbApproach)
              : null,
            departTime: (0, c.pC)(e.attributes.DepartureTime)
              ? new Date(e.attributes.DepartureTime)
              : null,
            departTimeOffset:
              null != (r = e.attributes.DepartureUTCOffset) ? r : null,
            geometry: K.Z.fromJSON(e.geometry),
            lateDuration: null != (o = e.attributes.LateMinutes) ? o : null,
            locationType: (0, c.pC)(e.attributes.LocationType)
              ? z.yP.fromJSON(e.attributes.LocationType)
              : null,
            name: e.attributes.Name,
            objectId: e.attributes.__OBJECTID,
            popupTemplate: (0, c.pC)(e.popupInfo)
              ? a.Z.fromJSON(e.popupInfo)
              : null,
            routeName: e.attributes.RouteName,
            sequence: null != (s = e.attributes.Sequence) ? s : null,
            serviceCosts: (0, c.pC)(e.attributes.ServiceCosts)
              ? JSON.parse(e.attributes.ServiceCosts)
              : null,
            serviceDistance:
              null != (l = e.attributes.ServiceMeters) ? l : null,
            serviceDuration:
              null != (n = e.attributes.ServiceMinutes) ? n : null,
            status: (0, c.pC)(e.attributes.Status)
              ? z.SS.fromJSON(e.attributes.Status)
              : null,
            symbol: (0, c.pC)(e.symbol) ? (0, G.im)(e.symbol) : null,
            timeWindowEnd: (0, c.pC)(e.attributes.TimeWindowEnd)
              ? new Date(e.attributes.TimeWindowEnd)
              : null,
            timeWindowEndOffset:
              null != (u = e.attributes.TimeWindowEndUTCOffset) ? u : null,
            timeWindowStart: (0, c.pC)(e.attributes.TimeWindowStart)
              ? new Date(e.attributes.TimeWindowStart)
              : null,
            timeWindowStartOffset:
              null != (p = e.attributes.TimeWindowStartUTCOffset) ? p : null,
            waitDuration: null != (d = e.attributes.WaitMinutes) ? d : null,
          });
        }
        clone() {
          return new Ne(
            (0, te.d9)({
              arriveCurbApproach: this.arriveCurbApproach,
              arriveTime: this.arriveTime,
              arriveTimeOffset: this.arriveTimeOffset,
              bearing: this.bearing,
              bearingTol: this.bearingTol,
              cumulativeCosts: this.cumulativeCosts,
              cumulativeDistance: this.cumulativeDistance,
              cumulativeTime: this.cumulativeDuration,
              curbApproach: this.curbApproach,
              departCurbApproach: this.departCurbApproach,
              departTime: this.departTime,
              departTimeOffset: this.departTimeOffset,
              distanceToNetworkInMeters: this.distanceToNetworkInMeters,
              geometry: this.geometry,
              lateDuration: this.lateDuration,
              locationType: this.locationType,
              name: this.name,
              navLatency: this.navLatency,
              objectId: this.objectId,
              popupTemplate: this.popupTemplate,
              posAlong: this.posAlong,
              routeName: this.routeName,
              serviceCosts: this.serviceCosts,
              serviceDistance: this.serviceDistance,
              serviceDuration: this.serviceDuration,
              sequence: this.sequence,
              sideOfEdge: this.sideOfEdge,
              snapX: this.snapX,
              snapY: this.snapY,
              snapZ: this.snapZ,
              sourceId: this.sourceId,
              sourceOid: this.sourceOid,
              status: this.status,
              symbol: this.symbol,
              timeWindowEnd: this.timeWindowEnd,
              timeWindowEndOffset: this.timeWindowEndOffset,
              timeWindowStart: this.timeWindowStart,
              timeWindowStartOffset: this.timeWindowStartOffset,
              waitDuration: this.waitDuration,
            }),
          );
        }
        toPortalJSON() {
          var e, t;
          return {
            geometry: (0, c.pC)(this.geometry) ? this.geometry.toJSON() : null,
            attributes: {
              __OBJECTID: (0, c.Wg)(this.objectId),
              ArrivalCurbApproach: (0, c.pC)(this.arriveCurbApproach)
                ? z.W7.toJSON(this.arriveCurbApproach)
                : null,
              ArrivalTime: (0, c.pC)(this.arriveTime)
                ? this.arriveTime.getTime()
                : null,
              ArrivalUTCOffset: this.arriveTimeOffset,
              CumulativeCosts: (0, c.pC)(this.cumulativeCosts)
                ? JSON.stringify(this.cumulativeCosts)
                : null,
              CumulativeMeters: this.cumulativeDistance,
              CumulativeMinutes: this.cumulativeDuration,
              CurbApproach: (0, c.pC)(this.curbApproach)
                ? z.W7.toJSON(this.curbApproach)
                : null,
              DepartureCurbApproach: (0, c.pC)(this.departCurbApproach)
                ? z.W7.toJSON(this.departCurbApproach)
                : null,
              DepartureTime: (0, c.pC)(this.departTime)
                ? this.departTime.getTime()
                : null,
              DepartureUTCOffset: this.departTimeOffset,
              LateMinutes: this.lateDuration,
              LocationType: (0, c.pC)(this.locationType)
                ? z.yP.toJSON(this.locationType)
                : null,
              Name: (0, c.Wg)(this.name),
              RouteName: (0, c.Wg)(this.routeName),
              Sequence: this.sequence,
              ServiceCosts: (0, c.pC)(this.serviceCosts)
                ? JSON.stringify(this.serviceCosts)
                : null,
              ServiceMeters: this.serviceDistance,
              ServiceMinutes: this.serviceDuration,
              Status: (0, c.pC)(this.status) ? z.SS.toJSON(this.status) : null,
              TimeWindowEnd: (0, c.pC)(this.timeWindowEnd)
                ? this.timeWindowEnd.getTime()
                : null,
              TimeWindowEndUTCOffset:
                null != (e = this.timeWindowEndOffset)
                  ? e
                  : this.arriveTimeOffset,
              TimeWindowStart: (0, c.pC)(this.timeWindowStart)
                ? this.timeWindowStart.getTime()
                : null,
              TimeWindowStartUTCOffset:
                null != (t = this.timeWindowEndOffset)
                  ? t
                  : this.arriveTimeOffset,
              WaitMinutes: this.waitDuration,
            },
            symbol: (0, c.pC)(this.symbol) ? this.symbol.toJSON() : null,
            popupInfo: (0, c.pC)(this.popupTemplate)
              ? this.popupTemplate.toJSON()
              : null,
          };
        }
      });
      (Oe.fields = [
        {
          name: '__OBJECTID',
          alias: 'OBJECTID',
          type: 'esriFieldTypeOID',
          editable: !1,
          nullable: !1,
          domain: null,
        },
        {
          name: 'ArrivalCurbApproach',
          alias: 'Arrival Curb Approach',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNACurbApproachType',
            codedValues: [
              { name: 'Either side', code: 0 },
              { name: 'From the right', code: 1 },
              { name: 'From the left', code: 2 },
              { name: 'Depart in the same direction', code: 3 },
            ],
          },
        },
        {
          name: 'ArrivalTime',
          alias: 'Arrival Time',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ArrivalUTCOffset',
          alias: 'Arrival Time: Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'CumulativeCosts',
          alias: 'Cumulative Costs',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'CumulativeMeters',
          alias: 'Cumulative Meters',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'CumulativeMinutes',
          alias: 'Cumulative Minutes',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'CurbApproach',
          alias: 'Curb Approach',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: {
            type: 'codedValue',
            name: 'esriNACurbApproachType',
            codedValues: [
              { name: 'Either side', code: 0 },
              { name: 'From the right', code: 1 },
              { name: 'From the left', code: 2 },
              { name: 'Depart in the same direction', code: 3 },
            ],
          },
        },
        {
          name: 'DepartureCurbApproach',
          alias: 'Departure Curb Approach',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNACurbApproachType',
            codedValues: [
              { name: 'Either side', code: 0 },
              { name: 'From the right', code: 1 },
              { name: 'From the left', code: 2 },
              { name: 'Depart in the same direction', code: 3 },
            ],
          },
        },
        {
          name: 'DepartureTime',
          alias: 'Departure Time',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'DepartureUTCOffset',
          alias: 'Departure Time: Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'LateMinutes',
          alias: 'Minutes Late',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'LocationType',
          alias: 'Location Type',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNALocationType',
            codedValues: [
              { name: 'Stop', code: 0 },
              { name: 'Waypoint', code: 1 },
            ],
          },
        },
        {
          name: 'Name',
          alias: 'Name',
          type: 'esriFieldTypeString',
          length: 255,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'RouteName',
          alias: 'Route Name',
          type: 'esriFieldTypeString',
          length: 255,
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'Sequence',
          alias: 'Sequence',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'ServiceCosts',
          alias: 'Service Costs',
          type: 'esriFieldTypeString',
          length: 1048576,
          editable: !0,
          nullable: !0,
          visible: !1,
          domain: null,
        },
        {
          name: 'ServiceMeters',
          alias: 'Service Meters',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'ServiceMinutes',
          alias: 'Service Minutes',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'Status',
          alias: 'Status',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
          domain: {
            type: 'codedValue',
            name: 'esriNAObjectStatus',
            codedValues: [
              { name: 'OK', code: 0 },
              { name: 'Not Located on Network', code: 1 },
              { name: 'Network Unbuilt', code: 2 },
              { name: 'Prohibited Street', code: 3 },
              { name: 'Invalid Field Values', code: 4 },
              { name: 'Cannot Reach', code: 5 },
              { name: 'Time Window Violation', code: 6 },
            ],
          },
        },
        {
          name: 'TimeWindowEnd',
          alias: 'Time Window End',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'TimeWindowEndUTCOffset',
          alias: 'Time Window End: Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'TimeWindowStart',
          alias: 'Time Window Start',
          type: 'esriFieldTypeDate',
          length: 36,
          editable: !0,
          nullable: !0,
          visible: !1,
        },
        {
          name: 'TimeWindowStartUTCOffset',
          alias: 'Time Window Start: Offset from UTC in Minutes',
          type: 'esriFieldTypeInteger',
          editable: !0,
          nullable: !0,
          visible: !0,
        },
        {
          name: 'WaitMinutes',
          alias: 'Minutes Early',
          type: 'esriFieldTypeDouble',
          editable: !0,
          nullable: !0,
          visible: !1,
        },
      ]),
        (Oe.popupInfo = {
          title: '{Name}',
          fieldInfos: [
            {
              fieldName: 'Name',
              label: 'Name',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'RouteName',
              label: 'Route Name',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Sequence',
              label: 'Sequence',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ArrivalTime',
              label: 'Arrival Time',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ArrivalUTCOffset',
              label: 'Arrival Time: Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'DepartureTime',
              label: 'Departure Time',
              isEditable: !0,
              tooltip: '',
              visible: !0,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'DepartureUTCOffset',
              label: 'Departure Time: Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'CurbApproach',
              label: 'Curb Approach',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ArrivalCurbApproach',
              label: 'Arrival Curb Approach',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'DepartureCurbApproach',
              label: 'Departure Curb Approach',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'Status',
              label: 'Status',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'LocationType',
              label: 'Location Type',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TimeWindowStart',
              label: 'Time Window Start',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TimeWindowStartUTCOffset',
              label: 'Time Window Start: Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TimeWindowEnd',
              label: 'Time Window End',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              format: { dateFormat: 'shortDateShortTime24' },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'TimeWindowEndUTCOffset',
              label: 'Time Window End: Offset from UTC in Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 0, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ServiceMinutes',
              label: 'Service Minutes',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ServiceMeters',
              label: 'Service Meters',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'ServiceCosts',
              label: 'Service Costs',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'CumulativeMinutes',
              label: 'Cumulative Minutes',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'CumulativeMeters',
              label: 'Cumulative Meters',
              isEditable: !1,
              tooltip: '',
              visible: !0,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'CumulativeCosts',
              label: 'Cumulative Costs',
              isEditable: !0,
              tooltip: '',
              visible: !1,
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'LateMinutes',
              label: 'Minutes Late',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
            {
              fieldName: 'WaitMinutes',
              label: 'Minutes Early',
              isEditable: !1,
              tooltip: '',
              visible: !1,
              format: { places: 2, digitSeparator: !0 },
              stringFieldOption: 'textbox',
            },
          ],
          description: null,
          showAttachments: !1,
          mediaInfos: [],
        }),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.W7.apiValues,
              json: {
                read: {
                  source: 'attributes.ArrivalCurbApproach',
                  reader: z.W7.read,
                },
              },
            }),
          ],
          Oe.prototype,
          'arriveCurbApproach',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: Date,
              json: { read: { source: 'attributes.ArriveTimeUTC' } },
            }),
          ],
          Oe.prototype,
          'arriveTime',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Oe.prototype, 'arriveTimeOffset', void 0),
        (0, r._)(
          [
            (0, C.r)('arriveTimeOffset', [
              'attributes.ArriveTime',
              'attributes.ArriveTimeUTC',
            ]),
          ],
          Oe.prototype,
          'readArriveTimeOffset',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              json: { name: 'attributes.Bearing', read: !1, write: !0 },
            }),
          ],
          Oe.prototype,
          'bearing',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              json: { name: 'attributes.BearingTol', read: !1, write: !0 },
            }),
          ],
          Oe.prototype,
          'bearingTol',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Oe.prototype, 'cumulativeCosts', void 0),
        (0, r._)(
          [(0, C.r)('cumulativeCosts', ['attributes'])],
          Oe.prototype,
          'readCumulativeCosts',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'cumulativeDistance',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'cumulativeDuration',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.W7.apiValues,
              json: {
                name: 'attributes.CurbApproach',
                read: { reader: z.W7.read },
                write: { writer: z.W7.write },
              },
            }),
          ],
          Oe.prototype,
          'curbApproach',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.W7.apiValues,
              json: {
                read: {
                  source: 'attributes.DepartCurbApproach',
                  reader: z.W7.read,
                },
              },
            }),
          ],
          Oe.prototype,
          'departCurbApproach',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: Date,
              json: { read: { source: 'attributes.DepartTimeUTC' } },
            }),
          ],
          Oe.prototype,
          'departTime',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Oe.prototype, 'departTimeOffset', void 0),
        (0, r._)(
          [
            (0, C.r)('departTimeOffset', [
              'attributes.DepartTime',
              'attributes.DepartTimeUTC',
            ]),
          ],
          Oe.prototype,
          'readDepartTimeOffset',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              json: {
                read: { source: 'attributes.DistanceToNetworkInMeters' },
              },
            }),
          ],
          Oe.prototype,
          'distanceToNetworkInMeters',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: K.Z, json: { write: !0 } })],
          Oe.prototype,
          'geometry',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.LateMinutes', read: !1 } })],
          Oe.prototype,
          'lateDuration',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.yP.apiValues,
              json: {
                name: 'attributes.LocationType',
                read: { reader: z.yP.read },
                write: { writer: z.yP.write },
              },
            }),
          ],
          Oe.prototype,
          'locationType',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.Name', write: !0 } })],
          Oe.prototype,
          'name',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.NavLatency' } } })],
          Oe.prototype,
          'navLatency',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.ObjectID', write: !0 } })],
          Oe.prototype,
          'objectId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: a.Z, json: { read: !1 } })],
          Oe.prototype,
          'popupTemplate',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.PosAlong' } } })],
          Oe.prototype,
          'posAlong',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.RouteName', write: !0 } })],
          Oe.prototype,
          'routeName',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Oe.prototype, 'serviceCosts', void 0),
        (0, r._)(
          [(0, C.r)('serviceCosts', ['attributes'])],
          Oe.prototype,
          'readServiceCosts',
          null,
        ),
        (0, r._)(
          [(0, S.c)('serviceCosts')],
          Oe.prototype,
          'writeServiceCosts',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'serviceDistance',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'serviceDuration',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { name: 'attributes.Sequence', write: !0 } })],
          Oe.prototype,
          'sequence',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.BW.apiValues,
              json: {
                read: { source: 'attributes.SideOfEdge', reader: z.BW.read },
              },
            }),
          ],
          Oe.prototype,
          'sideOfEdge',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SnapX' } } })],
          Oe.prototype,
          'snapX',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SnapY' } } })],
          Oe.prototype,
          'snapY',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SnapZ' } } })],
          Oe.prototype,
          'snapZ',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SourceID' } } })],
          Oe.prototype,
          'sourceId',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: { source: 'attributes.SourceOID' } } })],
          Oe.prototype,
          'sourceOid',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: z.SS.apiValues,
              json: {
                read: { source: 'attributes.Status', reader: z.SS.read },
              },
            }),
          ],
          Oe.prototype,
          'status',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ types: j.LB, json: { read: !1 } })],
          Oe.prototype,
          'symbol',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: Date,
              json: { name: 'attributes.TimeWindowEnd' },
            }),
          ],
          Oe.prototype,
          'timeWindowEnd',
          void 0,
        ),
        (0, r._)(
          [(0, S.c)('timeWindowEnd')],
          Oe.prototype,
          'writeTimeWindowEnd',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'timeWindowEndOffset',
          void 0,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: Date,
              json: { name: 'attributes.TimeWindowStart' },
            }),
          ],
          Oe.prototype,
          'timeWindowStart',
          void 0,
        ),
        (0, r._)(
          [(0, S.c)('timeWindowStart')],
          Oe.prototype,
          'writeTimeWindowStart',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'timeWindowStartOffset',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Oe.prototype, 'violations', void 0),
        (0, r._)(
          [(0, C.r)('violations', ['attributes'])],
          Oe.prototype,
          'readViolations',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ json: { read: !1 } })],
          Oe.prototype,
          'waitDuration',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Oe.prototype, 'wait', void 0),
        (0, r._)(
          [(0, C.r)('wait', ['attributes'])],
          Oe.prototype,
          'readWait',
          null,
        ),
        (Oe = Ne = (0, r._)([(0, T.j)('esri.rest.support.Stop')], Oe));
      const Ie = Oe;
      var De = i(65091);
      function xe(e) {
        return e.length ? e : null;
      }
      function Fe(e) {
        return 'layers' in e;
      }
      async function Be(e) {
        const t = Se.Z.WGS84;
        return await (0, N.iQ)(e.spatialReference, t), (0, N.iV)(e, t);
      }
      function Ee(e, t) {
        switch (t) {
          case 'seconds':
            return e / 60;
          case 'hours':
            return 60 * e;
          case 'days':
            return 60 * e * 24;
          default:
            return e;
        }
      }
      function je(e, t) {
        return 'decimal-degrees' === t || 'points' === t || 'unknown' === t
          ? e
          : (0, h.En)(e, t, 'meters');
      }
      const Ae = n.Z.ofType($),
        Pe = n.Z.ofType(Q),
        Le = n.Z.ofType(se),
        Me = n.Z.ofType(ue),
        Je = n.Z.ofType(ce),
        We = n.Z.ofType(Ie),
        Re = d.Z.getLogger('esri.layers.RouteLayer');
      let Ve = class extends (0, D.h)(
        (0, B.M)((0, x.q)((0, F.I)((0, m.R)((0, p.p)(I.Z))))),
      ) {
        constructor(...e) {
          super(...e),
            (this._featureCollection = null),
            (this._type = 'Feature Collection'),
            (this.defaultSymbols = new W()),
            (this.directionLines = null),
            (this.directionPoints = null),
            (this.featureCollectionType = 'route'),
            (this.legendEnabled = !1),
            (this.maxScale = 0),
            (this.minScale = 0),
            (this.pointBarriers = new Le()),
            (this.polygonBarriers = new Me()),
            (this.polylineBarriers = new Je()),
            (this.routeInfo = null),
            (this.spatialReference = Se.Z.WGS84),
            (this.stops = new We()),
            (this.type = 'route'),
            this.handles.add(
              (0, b.YP)(
                () => this.stops.toArray(),
                () => {
                  (0, c.Wi)(this.routeInfo) && this._setStopSymbol(this.stops);
                },
                { sync: !0 },
              ),
            );
        }
        writeFeatureCollectionWebmap(e, t, i, r) {
          const o = [
              this._writePolygonBarriers(),
              this._writePolylineBarriers(),
              this._writePointBarriers(),
              this._writeRouteInfo(),
              this._writeDirectionLines(),
              this._writeDirectionPoints(),
              this._writeStops(),
            ].filter((e) => !!e),
            s = o.map((e, t) => t),
            a = 'web-map' === r.origin ? 'featureCollection.layers' : 'layers';
          (0, y.RB)(a, o, t),
            (t.opacity = this.opacity),
            (t.visibility = this.visible),
            (t.visibleLayers = s);
        }
        readDirectionLines(e, t) {
          return this._getNetworkFeatures(t, 'DirectionLines', (e) =>
            $.fromPortalJSON(e),
          );
        }
        readDirectionPoints(e, t) {
          return this._getNetworkFeatures(t, 'DirectionPoints', (e) =>
            Q.fromPortalJSON(e),
          );
        }
        get fullExtent() {
          if ((0, c.pC)(this.routeInfo) && (0, c.pC)(this.routeInfo.geometry))
            return this.routeInfo.geometry.extent;
          if (this.stops.length > 1) {
            const { spatialReference: e } = this.stops[0],
              t = new De.Z({ spatialReference: e }),
              i = this.stops.toArray().map((e) => e.geometry);
            for (const e of i) (0, c.pC)(e) && t.addPoint(e);
            return t.extent;
          }
          return new _.Z({
            xmin: -180,
            ymin: -90,
            xmax: 180,
            ymax: 90,
            spatialReference: Se.Z.WGS84,
          });
        }
        readMaxScale(e, t) {
          var i;
          const r = (Fe(t) ? t.layers : t.featureCollection.layers).find((e) =>
            (0, c.pC)(e.layerDefinition.maxScale),
          );
          return null != (i = null == r ? void 0 : r.layerDefinition.maxScale)
            ? i
            : 0;
        }
        readMinScale(e, t) {
          var i;
          const r = (Fe(t) ? t.layers : t.featureCollection.layers).find((e) =>
            (0, c.pC)(e.layerDefinition.minScale),
          );
          return null != (i = null == r ? void 0 : r.layerDefinition.minScale)
            ? i
            : 0;
        }
        readPointBarriers(e, t) {
          return this._getNetworkFeatures(t, 'Barriers', (e) =>
            se.fromPortalJSON(e),
          );
        }
        readPolygonBarriers(e, t) {
          return this._getNetworkFeatures(t, 'PolygonBarriers', (e) =>
            ue.fromPortalJSON(e),
          );
        }
        readPolylineBarriers(e, t) {
          return this._getNetworkFeatures(t, 'PolylineBarriers', (e) =>
            ce.fromPortalJSON(e),
          );
        }
        readRouteInfo(e, t) {
          const i = this._getNetworkFeatures(t, 'RouteInfo', (e) =>
            ve.fromPortalJSON(e),
          );
          return i.length > 0 ? i.getItemAt(0) : null;
        }
        readSpatialReference(e, t) {
          var i, r;
          const o = Fe(t) ? t.layers : t.featureCollection.layers;
          if (!o.length) return Se.Z.WGS84;
          const { layerDefinition: s } = o[0],
            a =
              null !=
              (i =
                null != (r = s.spatialReference)
                  ? r
                  : s.extent.spatialReference)
                ? i
                : O.Zn;
          return Se.Z.fromJSON(a);
        }
        readStops(e, t) {
          return this._getNetworkFeatures(
            t,
            'Stops',
            (e) => Ie.fromPortalJSON(e),
            (e) => this._setStopSymbol(e),
          );
        }
        get title() {
          return (0, c.pC)(this.routeInfo) && (0, c.pC)(this.routeInfo.name)
            ? this.routeInfo.name
            : 'Route';
        }
        set title(e) {
          e ? this._override('title', e) : this._clearOverride('title');
        }
        get url() {
          return o.Z.routeServiceUrl;
        }
        set url(e) {
          null != e
            ? this._set('url', (0, E.Nm)(e, Re))
            : this._set('url', o.Z.routeServiceUrl);
        }
        load(e) {
          return (
            this.addResolvingPromise(
              this.loadFromPortal(
                { supportedTypes: ['Feature Collection'] },
                e,
              ),
            ),
            Promise.resolve(this)
          );
        }
        removeAll() {
          (0, c.pC)(this.directionLines) &&
            (this.directionLines.removeAll(),
            this._set('directionLines', null)),
            (0, c.pC)(this.directionPoints) &&
              (this.directionPoints.removeAll(),
              this._set('directionPoints', null)),
            (0, c.pC)(this.routeInfo) && this._set('routeInfo', null),
            this.pointBarriers.removeAll(),
            this.polygonBarriers.removeAll(),
            this.polylineBarriers.removeAll(),
            this.stops.removeAll();
        }
        async save() {
          await this.load();
          const { fullExtent: e, portalItem: t } = this;
          if (!t)
            throw new u.Z(
              'routelayer:portal-item-not-set',
              'save() requires to the layer to have a portal item',
            );
          if (!t.id)
            throw new u.Z(
              'routelayer:portal-item-not-saved',
              'Please use saveAs() first to save the routelayer',
            );
          if ('Feature Collection' !== t.type)
            throw new u.Z(
              'routelayer:portal-item-wrong-type',
              'Portal item needs to have type "Feature Collection"',
            );
          if ((0, c.Wi)(this.routeInfo))
            throw new u.Z(
              'routelayer:route-unsolved',
              'save() requires a solved route',
            );
          const { portal: i } = t;
          if (
            (await i._signIn(),
            i.user || (await t.reload()),
            i.user.username !== t.owner)
          )
            throw new u.Z(
              'routelayer:not-portal-item-owner',
              'You can only overwrite your portal items',
            );
          const { itemUrl: r } = t,
            o = {
              messages: [],
              origin: 'portal-item',
              portal: i,
              url: r && (0, f.mN)(r),
              writtenProperties: [],
            },
            s = this.write(null, o);
          return (
            (t.extent = await Be(e)),
            (t.title = this.title),
            await t.update({ data: s }),
            t
          );
        }
        async saveAs(e, t = {}) {
          if ((await this.load(), (0, c.Wi)(this.routeInfo)))
            throw new u.Z(
              'routelayer:route-unsolved',
              'saveAs() requires a solved route',
            );
          const i = Z.default.from(e).clone();
          null != i.extent || (i.extent = await Be(this.fullExtent)),
            (i.id = null),
            null != i.portal || (i.portal = V.Z.getDefault()),
            null != i.title || (i.title = this.title),
            (i.type = 'Feature Collection'),
            (i.typeKeywords = [
              'Data',
              'Feature Collection',
              'Multilayer',
              'Route Layer',
            ]);
          const { portal: r } = i,
            o = {
              messages: [],
              origin: 'portal-item',
              portal: r,
              url: null,
              writtenProperties: [],
            };
          await r._signIn();
          const s = null == t ? void 0 : t.folder,
            a = this.write(null, o);
          return (
            await r.user.addItem({ item: i, folder: s, data: a }),
            (this.portalItem = i),
            (0, w.D)(o),
            (o.portalItem = i),
            i
          );
        }
        async solve(e, t) {
          var i, r, o, s, a, l;
          const p = null != (i = null == e ? void 0 : e.stops) ? i : this.stops,
            d =
              null != (r = null == e ? void 0 : e.pointBarriers)
                ? r
                : xe(this.pointBarriers),
            m =
              null != (o = null == e ? void 0 : e.polylineBarriers)
                ? o
                : xe(this.polylineBarriers),
            y =
              null != (s = null == e ? void 0 : e.polygonBarriers)
                ? s
                : xe(this.polygonBarriers);
          if ((0, c.Wi)(p))
            throw new u.Z(
              'routelayer:undefined-stops',
              'the route layer must have stops defined in the route parameters.',
            );
          if (
            (((function (e) {
              return 'esri.rest.support.FeatureSet' === e.declaredClass;
            })(p) ||
              (function (e) {
                return (
                  'esri.rest.support.NetworkFeatureSet' === e.declaredClass
                );
              })(p)) &&
              p.features.length < 2) ||
            (n.Z.isCollection(p) && p.length < 2)
          )
            throw new u.Z(
              'routelayer:insufficent-stops',
              'the route layer must have two or more stops to solve a route.',
            );
          const b = await (0, U.bI)(this.url, null == e ? void 0 : e.apiKey, t),
            { defaultTravelMode: h, supportedTravelModes: f } = b,
            v = f.find((e) => e.id === h),
            g = null != (a = null == e ? void 0 : e.travelMode) ? a : v,
            C =
              null != (l = null == e ? void 0 : e.accumulateAttributes)
                ? l
                : [];
          (0, c.pC)(g) && C.push(g.distanceAttributeName);
          const T = { startTime: new Date() },
            S = {
              accumulateAttributes: C,
              directionsOutputType: 'featuresets',
              ignoreInvalidLocations: !0,
              pointBarriers: d,
              polylineBarriers: m,
              polygonBarriers: y,
              preserveFirstStop: !0,
              preserveLastStop: !0,
              returnBarriers: !!d,
              returnDirections: !0,
              returnPolygonBarriers: !!y,
              returnPolylineBarriers: !!m,
              returnRoutes: !0,
              returnStops: !0,
              stops: p,
            },
            w = e ? _e.from(e) : new _e();
          for (const e in T) null == w[e] && (w[e] = T[e]);
          w.set(S);
          const _ = await (0, q.F)(this.url, w, t),
            N = this._toRouteLayerSolution(_);
          return (
            this._isOverridden('title') ||
              (this.title = (0, c.yl)(N.routeInfo.name, 'Route')),
            (function (e, t, i) {
              var r, o, s, a, l, n, p, d, m, y, b;
              const {
                  impedance: h,
                  networkDataset: f,
                  supportedTravelModes: v,
                  defaultTravelMode: g,
                } = t,
                C = f.networkAttributes.filter(
                  (e) => 'esriNAUTCost' === e.usageType,
                ),
                T = v.find((e) => e.id === g),
                S = null != (r = i.travelMode) ? r : T;
              if ((0, c.Wi)(S))
                return void Re.warn(
                  'route-layer:missing-travel-mode',
                  'The routing service must have a default travel mode or one must be specified in the route parameter.',
                );
              const { timeAttributeName: w, distanceAttributeName: _ } = S,
                N = C.find((e) => e.name === w),
                O = C.find((e) => e.name === _),
                I =
                  null !=
                  (o =
                    null !=
                    (s =
                      null == (a = i.travelMode)
                        ? void 0
                        : a.impedanceAttributeName)
                      ? s
                      : i.impedanceAttribute)
                    ? o
                    : h,
                D = z.hB.fromJSON(null == N ? void 0 : N.units),
                x = z.GX.fromJSON(null == O ? void 0 : O.units);
              if (!D || !x)
                throw new u.Z(
                  'routelayer:unknown-impedance-units',
                  'the units of either the distance or time impedance are unknown',
                );
              const F =
                  null != (l = i.directionsLanguage) ? l : t.directionsLanguage,
                B =
                  null !=
                  (n =
                    null != (p = i.accumulateAttributes)
                      ? p
                      : t.accumulateAttributeNames)
                    ? n
                    : [],
                E = new Set(
                  C.filter(
                    ({ name: e }) =>
                      e === w || e === _ || e === I || B.includes(e),
                  ).map(({ name: e }) => e),
                ),
                j = (e) => {
                  for (const t in e) E.has(t) || delete e[t];
                };
              for (const t of e.pointBarriers) {
                var A;
                (0, c.pC)(t.costs) &&
                  ((t.addedCost = null != (A = t.costs[I]) ? A : 0),
                  j(t.costs));
              }
              for (const t of e.polygonBarriers) {
                var P;
                (0, c.pC)(t.costs) &&
                  ((t.scaleFactor = null != (P = t.costs[I]) ? P : 1),
                  j(t.costs));
              }
              for (const t of e.polylineBarriers) {
                var L;
                (0, c.pC)(t.costs) &&
                  ((t.scaleFactor = null != (L = t.costs[I]) ? L : 1),
                  j(t.costs));
              }
              const { routeInfo: M } = e,
                {
                  findBestSequence: J,
                  preserveFirstStop: W,
                  preserveLastStop: R,
                  startTimeIsUTC: V,
                  timeWindowsAreUTC: Z,
                } = i;
              (M.analysisSettings = new be({
                accumulateAttributes: B,
                directionsLanguage: F,
                findBestSequence: J,
                preserveFirstStop: W,
                preserveLastStop: R,
                startTimeIsUTC: V,
                timeWindowsAreUTC: Z,
                travelMode: S,
              })),
                (M.totalDuration = Ee(
                  null != (d = M.totalCosts[w]) ? d : 0,
                  D,
                )),
                (M.totalDistance = je(
                  null != (m = M.totalCosts[_]) ? m : 0,
                  x,
                )),
                (M.totalLateDuration = Ee(
                  null != (y = M.totalViolations[w]) ? y : 0,
                  D,
                )),
                (M.totalWaitDuration = Ee(
                  null != (b = M.totalWait[w]) ? b : 0,
                  D,
                )),
                (0, c.pC)(M.totalCosts) && j(M.totalCosts),
                (0, c.pC)(M.totalViolations) && j(M.totalViolations),
                (0, c.pC)(M.totalWait) && j(M.totalWait);
              for (const t of e.stops) {
                var U, q, k, G, H, $;
                (0, c.pC)(t.serviceCosts) &&
                  ((t.serviceDuration = Ee(
                    null != (U = t.serviceCosts[w]) ? U : 0,
                    D,
                  )),
                  (t.serviceDistance = je(
                    null != (q = t.serviceCosts[_]) ? q : 0,
                    x,
                  )),
                  j(t.serviceCosts)),
                  (0, c.pC)(t.cumulativeCosts) &&
                    ((t.cumulativeDuration = Ee(
                      null != (k = t.cumulativeCosts[w]) ? k : 0,
                      D,
                    )),
                    (t.cumulativeDistance = je(
                      null != (G = t.cumulativeCosts[_]) ? G : 0,
                      x,
                    )),
                    j(t.cumulativeCosts)),
                  (0, c.pC)(t.violations) &&
                    ((t.lateDuration = Ee(
                      null != (H = t.violations[w]) ? H : 0,
                      D,
                    )),
                    j(t.violations)),
                  (0, c.pC)(t.wait) &&
                    ((t.waitDuration = Ee(null != ($ = t.wait[w]) ? $ : 0, D)),
                    j(t.wait));
              }
            })(N, b, w),
            N
          );
        }
        update(e) {
          const {
            stops: t,
            directionLines: i,
            directionPoints: r,
            pointBarriers: o,
            polylineBarriers: s,
            polygonBarriers: a,
            routeInfo: l,
          } = e;
          this.set({
            stops: t,
            pointBarriers: o,
            polylineBarriers: s,
            polygonBarriers: a,
          }),
            this._set('directionLines', i),
            this._set('directionPoints', r),
            this._set('routeInfo', l);
        }
        _getLayerDefinition() {
          return {
            capabilities: 'Query,Update,Editing',
            extent: this.fullExtent.toJSON(),
            hasM: !1,
            hasZ: !1,
            maxScale: this.maxScale,
            minScale: this.minScale,
            objectIdField: '__OBJECTID',
            spatialReference: this.spatialReference.toJSON(),
            type: 'Feature Layer',
            typeIdField: '',
          };
        }
        _getNetworkFeatures(e, t, i, r) {
          const o = (Fe(e) ? e.layers : e.featureCollection.layers).find(
            (e) => e.layerDefinition.name === t,
          );
          if ((0, c.Wi)(o)) return new n.Z();
          const { layerDefinition: u, popupInfo: p, featureSet: d } = o,
            m = u.drawingInfo.renderer,
            { features: y } = d,
            b = m && (0, l.a)(m),
            h = y.map((e) => {
              var r;
              const o = i(e),
                { attributes: l } = e,
                n = new s.Z({ attributes: l });
              return (
                null != o.symbol ||
                  (o.symbol =
                    null != (r = null == b ? void 0 : b.getSymbol(n))
                      ? r
                      : this._getNetworkSymbol(t)),
                null != o.popupTemplate ||
                  (o.popupTemplate = p && a.Z.fromJSON(p)),
                o
              );
            });
          return r && h.some((e) => !e.symbol) && r(h), new n.Z(h);
        }
        _getNetworkSymbol(e) {
          switch (e) {
            case 'Barriers':
              return this.defaultSymbols.pointBarriers;
            case 'DirectionPoints':
              return this.defaultSymbols.directionPoints;
            case 'DirectionLines':
              return this.defaultSymbols.directionLines;
            case 'PolylineBarriers':
              return this.defaultSymbols.polylineBarriers;
            case 'PolygonBarriers':
              return this.defaultSymbols.polygonBarriers;
            case 'RouteInfo':
              return this.defaultSymbols.routeInfo;
            case 'Stops':
              return null;
          }
        }
        _setStopSymbol(e) {
          if (!e || 0 === e.length) return;
          if ((0, c.Wi)(this.routeInfo) || 1 === e.length)
            return void e.forEach((t, i) => {
              switch (i) {
                case 0:
                  t.symbol = this.defaultSymbols.firstStop;
                  break;
                case e.length - 1:
                  t.symbol = this.defaultSymbols.lastStop;
                  break;
                default:
                  t.symbol = this.defaultSymbols.middleStop;
              }
            });
          const t = e.map((e) => e.sequence).filter((e) => (0, c.pC)(e)),
            i = Math.min(...t),
            r = Math.max(...t);
          for (const t of e)
            t.sequence !== i
              ? t.sequence !== r
                ? 'ok' === t.status || 'not-located-on-closest' === t.status
                  ? 'waypoint' !== t.locationType
                    ? 'break' !== t.locationType
                      ? (t.symbol = this.defaultSymbols.middleStop)
                      : (t.symbol = this.defaultSymbols.breakStop)
                    : (t.symbol = this.defaultSymbols.waypointStop)
                  : (t.symbol = this.defaultSymbols.invalidStop)
                : (t.symbol = this.defaultSymbols.lastStop)
              : (t.symbol = this.defaultSymbols.firstStop);
        }
        _toRouteLayerSolution(e) {
          var t, i, r, o, s;
          const a = e.routeResults[0].stops.map((e) => Ie.fromJSON(e.toJSON()));
          this._setStopSymbol(a);
          const l = new We(a),
            n = new Me(
              null == (t = e.polygonBarriers)
                ? void 0
                : t.map((e) => {
                    const t = ue.fromJSON(e.toJSON());
                    return (t.symbol = this.defaultSymbols.polygonBarriers), t;
                  }),
            ),
            u = new Je(
              null == (i = e.polylineBarriers)
                ? void 0
                : i.map((e) => {
                    const t = ce.fromJSON(e.toJSON());
                    return (t.symbol = this.defaultSymbols.polylineBarriers), t;
                  }),
            ),
            p = new Le(
              null == (r = e.pointBarriers)
                ? void 0
                : r.map((e) => {
                    const t = se.fromJSON(e.toJSON());
                    return (t.symbol = this.defaultSymbols.pointBarriers), t;
                  }),
            ),
            d = ve.fromJSON(e.routeResults[0].route.toJSON());
          d.symbol = this.defaultSymbols.routeInfo;
          const c = new Pe(
            null == (o = e.routeResults[0].directionPoints)
              ? void 0
              : o.features.map((e) => {
                  const t = Q.fromJSON(e.toJSON());
                  return (t.symbol = this.defaultSymbols.directionPoints), t;
                }),
          );
          return {
            directionLines: new Ae(
              null == (s = e.routeResults[0].directionLines)
                ? void 0
                : s.features.map((e) => {
                    const t = $.fromJSON(e.toJSON());
                    return (t.symbol = this.defaultSymbols.directionLines), t;
                  }),
            ),
            directionPoints: c,
            pointBarriers: p,
            polygonBarriers: n,
            polylineBarriers: u,
            routeInfo: d,
            stops: l,
          };
        }
        _writeDirectionLines() {
          return (0, c.Wi)(this.directionLines) || !this.directionLines.length
            ? null
            : {
                featureSet: {
                  features: this.directionLines
                    .toArray()
                    .map((e) => e.toPortalJSON()),
                  geometryType: 'esriGeometryPolyline',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: this.defaultSymbols.directionLines.toJSON(),
                    },
                  },
                  fields: $.fields,
                  geometryType: 'esriGeometryPolyline',
                  name: 'DirectionLines',
                  title: 'Direction Lines',
                },
                popupInfo: $.popupInfo,
              };
        }
        _writeDirectionPoints() {
          return (0, c.Wi)(this.directionPoints) || !this.directionPoints.length
            ? null
            : {
                featureSet: {
                  features: this.directionPoints
                    .toArray()
                    .map((e) => e.toPortalJSON()),
                  geometryType: 'esriGeometryPoint',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: this.defaultSymbols.directionPoints.toJSON(),
                    },
                  },
                  fields: Q.fields,
                  geometryType: 'esriGeometryPoint',
                  name: 'DirectionPoints',
                  title: 'Direction Points',
                },
                popupInfo: Q.popupInfo,
              };
        }
        _writePointBarriers() {
          return (0, c.Wi)(this.pointBarriers) || !this.pointBarriers.length
            ? null
            : {
                featureSet: {
                  features: this.pointBarriers
                    .toArray()
                    .map((e) => e.toPortalJSON()),
                  geometryType: 'esriGeometryPoint',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: this.defaultSymbols.pointBarriers.toJSON(),
                    },
                  },
                  fields: se.fields,
                  geometryType: 'esriGeometryPoint',
                  name: 'Barrier',
                  title: 'Point Barrier',
                },
                popupInfo: se.popupInfo,
              };
        }
        _writePolygonBarriers() {
          return (0, c.Wi)(this.polygonBarriers) || !this.polygonBarriers.length
            ? null
            : {
                featureSet: {
                  features: this.polygonBarriers
                    .toArray()
                    .map((e) => e.toPortalJSON()),
                  geometryType: 'esriGeometryPolygon',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: this.defaultSymbols.polygonBarriers.toJSON(),
                    },
                  },
                  fields: ue.fields,
                  geometryType: 'esriGeometryPolygon',
                  name: 'PolygonBarriers',
                  title: 'Polygon Barriers',
                },
                popupInfo: ue.popupInfo,
              };
        }
        _writePolylineBarriers() {
          return (0, c.Wi)(this.polylineBarriers) ||
            !this.polylineBarriers.length
            ? null
            : {
                featureSet: {
                  features: this.polylineBarriers
                    .toArray()
                    .map((e) => e.toPortalJSON()),
                  geometryType: 'esriGeometryPolyline',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: this.defaultSymbols.polylineBarriers.toJSON(),
                    },
                  },
                  fields: ce.fields,
                  geometryType: 'esriGeometryPolyline',
                  name: 'PolylineBarriers',
                  title: 'Line Barriers',
                },
                popupInfo: ce.popupInfo,
              };
        }
        _writeRouteInfo() {
          return (0, c.Wi)(this.routeInfo)
            ? null
            : {
                featureSet: {
                  features: [this.routeInfo.toPortalJSON()],
                  geometryType: 'esriGeometryPolyline',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'simple',
                      symbol: this.defaultSymbols.routeInfo.toJSON(),
                    },
                  },
                  fields: ve.fields,
                  geometryType: 'esriGeometryPolyline',
                  name: 'RouteInfo',
                  title: 'Route Details',
                },
                popupInfo: ve.popupInfo,
              };
        }
        _writeStops() {
          return (0, c.Wi)(this.stops) || !this.stops.length
            ? null
            : {
                featureSet: {
                  features: this.stops.toArray().map((e) => e.toPortalJSON()),
                  geometryType: 'esriGeometryPoint',
                },
                layerDefinition: {
                  ...this._getLayerDefinition(),
                  drawingInfo: {
                    renderer: {
                      type: 'uniqueValue',
                      field1: 'Sequence',
                      defaultSymbol: this.defaultSymbols.middleStop.toJSON(),
                      uniqueValueInfos: [
                        {
                          value: '1',
                          symbol: this.defaultSymbols.firstStop.toJSON(),
                          label: 'First Stop',
                        },
                        {
                          value: `${this.stops.length}`,
                          symbol: this.defaultSymbols.lastStop.toJSON(),
                          label: 'Last Stop',
                        },
                      ],
                    },
                  },
                  fields: Ie.fields,
                  geometryType: 'esriGeometryPoint',
                  name: 'Stops',
                  title: 'Stops',
                },
                popupInfo: Ie.popupInfo,
              };
        }
      };
      (0, r._)(
        [
          (0, v.Cb)({
            readOnly: !0,
            json: {
              read: !1,
              origins: {
                'portal-item': { write: { allowNull: !0, ignoreOrigin: !0 } },
                'web-map': {
                  write: {
                    overridePolicy() {
                      return {
                        allowNull: !0,
                        ignoreOrigin: null == this.portalItem,
                      };
                    },
                  },
                },
              },
            },
          }),
        ],
        Ve.prototype,
        '_featureCollection',
        void 0,
      ),
        (0, r._)(
          [(0, S.c)(['web-map', 'portal-item'], '_featureCollection')],
          Ve.prototype,
          'writeFeatureCollectionWebmap',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              readOnly: !0,
              json: {
                read: !1,
                origins: {
                  'web-map': {
                    write: {
                      target: 'type',
                      overridePolicy() {
                        return { ignoreOrigin: null != this.portalItem };
                      },
                    },
                  },
                },
              },
            }),
          ],
          Ve.prototype,
          '_type',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, type: W })],
          Ve.prototype,
          'defaultSymbols',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ readOnly: !0 })],
          Ve.prototype,
          'directionLines',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'directionLines', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readDirectionLines',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ readOnly: !0 })],
          Ve.prototype,
          'directionPoints',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'directionPoints', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readDirectionPoints',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              readOnly: !0,
              json: {
                read: !1,
                origins: { 'web-map': { write: { ignoreOrigin: !0 } } },
              },
            }),
          ],
          Ve.prototype,
          'featureCollectionType',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ readOnly: !0 })],
          Ve.prototype,
          'fullExtent',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              json: {
                origins: {
                  'web-map': { name: 'featureCollection.showLegend' },
                },
                write: !0,
              },
            }),
          ],
          Ve.prototype,
          'legendEnabled',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: ['show', 'hide'] })],
          Ve.prototype,
          'listMode',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Number, nonNullable: !0, json: { write: !1 } })],
          Ve.prototype,
          'maxScale',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'maxScale', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readMaxScale',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Number, nonNullable: !0, json: { write: !1 } })],
          Ve.prototype,
          'minScale',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'minScale', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readMinScale',
          null,
        ),
        (0, r._)(
          [
            (0, v.Cb)({
              type: ['ArcGISFeatureLayer'],
              value: 'ArcGISFeatureLayer',
            }),
          ],
          Ve.prototype,
          'operationalLayerType',
          void 0,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, type: n.Z.ofType(se) })],
          Ve.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'pointBarriers', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readPointBarriers',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, type: n.Z.ofType(ue) })],
          Ve.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'polygonBarriers', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readPolygonBarriers',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, type: n.Z.ofType(ce) })],
          Ve.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'polylineBarriers', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readPolylineBarriers',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ readOnly: !0 })],
          Ve.prototype,
          'routeInfo',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'routeInfo', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readRouteInfo',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ type: Se.Z })],
          Ve.prototype,
          'spatialReference',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'spatialReference', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readSpatialReference',
          null,
        ),
        (0, r._)(
          [(0, v.Cb)({ nonNullable: !0, type: n.Z.ofType(Ie) })],
          Ve.prototype,
          'stops',
          void 0,
        ),
        (0, r._)(
          [
            (0, C.r)(['web-map', 'portal-item'], 'stops', [
              'layers',
              'featureCollection.layers',
            ]),
          ],
          Ve.prototype,
          'readStops',
          null,
        ),
        (0, r._)([(0, v.Cb)()], Ve.prototype, 'title', null),
        (0, r._)(
          [(0, v.Cb)({ readOnly: !0, json: { read: !1 } })],
          Ve.prototype,
          'type',
          void 0,
        ),
        (0, r._)([(0, v.Cb)()], Ve.prototype, 'url', null),
        (Ve = (0, r._)([(0, T.j)('esri.layers.RouteLayer')], Ve));
      const Ze = Ve;
    },
    16859: (e, t, i) => {
      i.d(t, { I: () => C });
      var r = i(43697),
        o = i(40330),
        s = i(3172),
        a = i(66643),
        l = i(20102),
        n = i(92604),
        u = i(70586),
        p = i(95330),
        d = i(17452),
        c = i(5600),
        m = (i(67676), i(80442), i(75215), i(71715)),
        y = i(52011),
        b = i(30556),
        h = i(65587),
        f = i(15235),
        v = i(86082);
      const g = n.Z.getLogger('esri.layers.mixins.PortalLayer'),
        C = (e) => {
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
                return new f.default({ id: t.itemId, portal: i && i.portal });
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
                      g.warn(
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
                ? null == o.id
                  ? void 0
                  : o.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const i =
                T.credential === t ? T.user : await this._fetchEditingUser(e);
              return (
                (T.credential = t),
                (T.user = i),
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
              const l = o.id.findServerInfo(this.url);
              if (null == l || !l.owningSystemUrl) return null;
              const n = `${l.owningSystemUrl}/sharing/rest`,
                p = h.Z.getDefault();
              if (p && p.loaded && (0, d.Fv)(p.restUrl) === (0, d.Fv)(n))
                return p.user;
              const c = `${n}/community/self`,
                m = (0, u.pC)(e) ? e.signal : null,
                y = await (0, a.q6)(
                  (0, s.default)(c, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: m,
                  }),
                );
              return y.ok ? v.default.fromJSON(y.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const i = t && t.portal,
                r =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || h.Z.getDefault());
              return i && r && !(0, d.tm)(r.restUrl, i.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new l.Z(
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
              [(0, c.Cb)({ type: f.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, r._)(
              [(0, m.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, r._)(
              [
                (0, b.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, r._)(
              [(0, c.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, r._)(
              [(0, c.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, r._)([(0, y.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        T = { credential: null, user: null };
    },
    12501: (e, t, i) => {
      i.d(t, { Z: () => y });
      var r,
        o = i(43697),
        s = i(22974),
        a = i(5600),
        l = (i(75215), i(52011)),
        n = i(30556),
        u = i(35671),
        p = i(5499),
        d = i(12571),
        c = i(84475);
      let m = (r = class extends (0, d.W)(p.Z) {
        constructor(e) {
          super(e),
            (this.config = null),
            (this.fieldMap = null),
            (this.scaleExpression = null),
            (this.scaleExpressionTitle = null),
            (this.url = null),
            (this.type = 'dictionary');
        }
        get _loader() {
          return new c.DictionaryLoader(this.url, this.config, this.fieldMap);
        }
        writeData(e, t) {
          e &&
            (t.scalingExpressionInfo = { expression: e, returnType: 'number' });
        }
        writeVisualVariables(e, t, i, r) {
          (null != r && r.origin) || super.writeVisualVariables(e, t, i, r);
        }
        clone() {
          return new r({
            config: (0, s.d9)(this.config),
            scaleExpression: this.scaleExpression,
            scaleExpressionTitle: this.scaleExpressionTitle,
            fieldMap: (0, s.d9)(this.fieldMap),
            url: (0, s.d9)(this.url),
            visualVariables: (0, s.d9)(this.visualVariables),
          });
        }
        async getSymbolAsync(e, t) {
          return this._loader.getSymbolAsync(e, t);
        }
        async collectRequiredFields(e, t) {
          await this.collectVVRequiredFields(e, t),
            this.scaleExpression &&
              (await (0, u.io)(e, t, this.scaleExpression));
          for (const i in this.fieldMap) {
            const r = this.fieldMap[i];
            t.has(r) && e.add(r);
          }
        }
        get arcadeRequired() {
          return !0;
        }
        getSymbol() {
          return null;
        }
        getSymbols() {
          return [];
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return `${this.url}-${JSON.stringify(this.fieldMap)}`;
        }
        getSymbolFields() {
          return this._loader.getSymbolFields();
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: c.DictionaryLoader })],
        m.prototype,
        '_loader',
        null,
      ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: Object,
              json: {
                read: { source: 'configuration' },
                write: { target: 'configuration' },
              },
            }),
          ],
          m.prototype,
          'config',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: Object, json: { write: !0 } })],
          m.prototype,
          'fieldMap',
          void 0,
        ),
        (0, o._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                read: { source: 'scalingExpressionInfo.expression' },
                write: !0,
              },
            }),
          ],
          m.prototype,
          'scaleExpression',
          void 0,
        ),
        (0, o._)([(0, n.c)('scaleExpression')], m.prototype, 'writeData', null),
        (0, o._)(
          [
            (0, a.Cb)({
              type: String,
              json: {
                read: { source: 'scalingExpressionInfo.title' },
                write: {
                  target: 'scalingExpressionInfo.title',
                  overridePolicy(e) {
                    return { enabled: !!e && !!this.scaleExpression };
                  },
                },
              },
            }),
          ],
          m.prototype,
          'scaleExpressionTitle',
          void 0,
        ),
        (0, o._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          m.prototype,
          'url',
          void 0,
        ),
        (0, o._)(
          [(0, n.c)('visualVariables')],
          m.prototype,
          'writeVisualVariables',
          null,
        ),
        (m = r = (0, o._)([(0, l.j)('esri.renderers.DictionaryRenderer')], m));
      const y = m;
    },
    95088: (e, t, i) => {
      i.d(t, { Z: () => D });
      var r,
        o = i(43697),
        s = i(22303),
        a = i(22974),
        l = i(44422),
        n = i(75215),
        u = i(36030),
        p = i(5600),
        d = i(52011),
        c = i(35671),
        m = i(5499),
        y = i(12571),
        b = i(96674),
        h = i(92604),
        f = (i(67676), i(80442), i(90578));
      const v = h.Z.getLogger('esri.renderers.support.AttributeColorInfo');
      let g = (r = class extends b.wq {
        constructor(e) {
          super(e),
            (this.color = null),
            (this.field = null),
            (this.label = null),
            (this.valueExpression = null),
            (this.valueExpressionTitle = null);
        }
        castField(e) {
          return null == e
            ? e
            : 'function' == typeof e
            ? (v.error('.field: field must be a string value'), null)
            : (0, n.Zs)(e);
        }
        getAttributeHash() {
          return `${this.field}-${this.valueExpression}`;
        }
        clone() {
          return new r({
            color: this.color && this.color.clone(),
            field: this.field,
            label: this.label,
            valueExpression: this.valueExpression,
            valueExpressionTitle: this.valueExpressionTitle,
          });
        }
      });
      (0, o._)(
        [(0, p.Cb)({ type: s.Z, json: { type: [Number], write: !0 } })],
        g.prototype,
        'color',
        void 0,
      ),
        (0, o._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          g.prototype,
          'field',
          void 0,
        ),
        (0, o._)([(0, f.p)('field')], g.prototype, 'castField', null),
        (0, o._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          g.prototype,
          'label',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          g.prototype,
          'valueExpression',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: String, json: { write: !0 } })],
          g.prototype,
          'valueExpressionTitle',
          void 0,
        ),
        (g = r =
          (0, o._)([(0, d.j)('esri.renderers.support.AttributeColorInfo')], g));
      const C = g;
      var T;
      let S = (T = class extends b.wq {
        constructor() {
          super(...arguments), (this.unit = null);
        }
        clone() {
          return new T({ unit: this.unit });
        }
      });
      (0, o._)(
        [(0, p.Cb)({ type: String, json: { write: !0 } })],
        S.prototype,
        'unit',
        void 0,
      ),
        (S = T =
          (0, o._)(
            [(0, d.j)('esri.renderers.support.DotDensityLegendOptions')],
            S,
          ));
      const w = S;
      var _,
        N = i(20256),
        O = i(4095);
      let I = (_ = class extends (0, y.W)(m.Z) {
        constructor(e) {
          super(e),
            (this.attributes = null),
            (this.backgroundColor = new s.Z([0, 0, 0, 0])),
            (this.blendDots = !0),
            (this.dotBlendingEnabled = !0),
            (this.dotShape = 'square'),
            (this.dotSize = 1),
            (this.legendOptions = null),
            (this.outline = new O.Z()),
            (this.dotValue = null),
            (this.referenceDotValue = null),
            (this.referenceScale = null),
            (this.seed = 1),
            (this.type = 'dot-density');
        }
        calculateDotValue(e) {
          if (null == this.referenceScale) return this.dotValue;
          const t = (e / this.referenceScale) * this.dotValue;
          return t < 1 ? 1 : t;
        }
        getSymbol() {
          return new N.Z({ outline: this.outline });
        }
        async getSymbolAsync() {
          return this.getSymbol();
        }
        getSymbols() {
          return [this.getSymbol()];
        }
        getAttributeHash() {
          return (
            this.attributes &&
            this.attributes.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return JSON.stringify(this.outline);
        }
        clone() {
          return new _({
            attributes: (0, a.d9)(this.attributes),
            backgroundColor: (0, a.d9)(this.backgroundColor),
            dotBlendingEnabled: (0, a.d9)(this.dotBlendingEnabled),
            dotShape: (0, a.d9)(this.dotShape),
            dotSize: (0, a.d9)(this.dotSize),
            dotValue: (0, a.d9)(this.dotValue),
            legendOptions: (0, a.d9)(this.legendOptions),
            outline: (0, a.d9)(this.outline),
            referenceScale: (0, a.d9)(this.referenceScale),
            visualVariables: (0, a.d9)(this.visualVariables),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
        getControllerHash() {
          return `${this.attributes.map(
            (e) => e.field || e.valueExpression || '',
          )}-${(this.outline && JSON.stringify(this.outline.toJSON())) || ''}`;
        }
        async collectRequiredFields(e, t) {
          await this.collectVVRequiredFields(e, t);
          for (const i of this.attributes)
            i.valueExpression && (await (0, c.io)(e, t, i.valueExpression)),
              i.field && e.add(i.field);
        }
      });
      (0, o._)(
        [(0, p.Cb)({ type: [C], json: { write: !0 } })],
        I.prototype,
        'attributes',
        void 0,
      ),
        (0, o._)(
          [(0, p.Cb)({ type: s.Z, json: { write: !0 } })],
          I.prototype,
          'backgroundColor',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Boolean }), (0, l.B)('dotBlendingEnabled')],
          I.prototype,
          'blendDots',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Boolean, json: { write: !0 } })],
          I.prototype,
          'dotBlendingEnabled',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: String, json: { write: !1 } })],
          I.prototype,
          'dotShape',
          void 0,
        ),
        (0, o._)(
          [
            (0, p.Cb)({
              type: Number,
              json: {
                write: !0,
                origins: {
                  'web-map': { write: !1 },
                  'web-scene': { write: !1 },
                },
              },
            }),
          ],
          I.prototype,
          'dotSize',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: w, json: { write: !0 } })],
          I.prototype,
          'legendOptions',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: O.Z, json: { default: null, write: !0 } })],
          I.prototype,
          'outline',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Number, json: { write: !0 } })],
          I.prototype,
          'dotValue',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Number }), (0, l.B)('dotValue')],
          I.prototype,
          'referenceDotValue',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Number, json: { write: !0 } })],
          I.prototype,
          'referenceScale',
          void 0,
        ),
        (0, o._)(
          [(0, p.Cb)({ type: Number, json: { write: !0 } })],
          I.prototype,
          'seed',
          void 0,
        ),
        (0, o._)(
          [(0, u.J)({ dotDensity: 'dot-density' })],
          I.prototype,
          'type',
          void 0,
        ),
        (I = _ = (0, o._)([(0, d.j)('esri.renderers.DotDensityRenderer')], I));
      const D = I;
    },
    79056: (e, t, i) => {
      i.d(t, { Z: () => f });
      var r,
        o = i(43697),
        s = i(22303),
        a = i(22974),
        l = i(5600),
        n = (i(75215), i(36030)),
        u = i(52011),
        p = i(35671),
        d = i(5499),
        c = i(96674);
      i(67676), i(80442);
      let m = (r = class extends c.wq {
        constructor(e) {
          super(e), (this.color = null), (this.ratio = null);
        }
        clone() {
          return new r({ color: this.color, ratio: this.ratio });
        }
      });
      (0, o._)(
        [(0, l.Cb)({ type: s.Z, json: { write: !0 } })],
        m.prototype,
        'color',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          m.prototype,
          'ratio',
          void 0,
        ),
        (m = r =
          (0, o._)([(0, u.j)('esri.renderers.support.HeatmapColorStop')], m));
      const y = m;
      var b;
      let h = (b = class extends d.Z {
        constructor(e) {
          super(e),
            (this.blurRadius = 10),
            (this.referenceScale = 0),
            (this.colorStops = [
              new y({ ratio: 0, color: new s.Z('rgba(255, 140, 0, 0)') }),
              new y({ ratio: 0.75, color: new s.Z('rgba(255, 140, 0, 1)') }),
              new y({ ratio: 0.9, color: new s.Z('rgba(255, 0,   0, 1)') }),
            ]),
            (this.field = null),
            (this.fieldOffset = 0),
            (this.maxPixelIntensity = 100),
            (this.minPixelIntensity = 0),
            (this.type = 'heatmap');
        }
        async collectRequiredFields(e, t) {
          const i = this.field;
          i && 'string' == typeof i && (0, p.AB)(e, t, i);
        }
        getAttributeHash() {
          return null;
        }
        getMeshHash() {
          return `${JSON.stringify(this.colorStops)}.${this.blurRadius}.${
            this.field
          }`;
        }
        clone() {
          return new b({
            blurRadius: this.blurRadius,
            referenceScale: this.referenceScale,
            colorStops: (0, a.d9)(this.colorStops),
            field: this.field,
            maxPixelIntensity: this.maxPixelIntensity,
            minPixelIntensity: this.minPixelIntensity,
          });
        }
      });
      (0, o._)(
        [(0, l.Cb)({ type: Number, json: { write: !0 } })],
        h.prototype,
        'blurRadius',
        void 0,
      ),
        (0, o._)(
          [(0, l.Cb)({ type: Number })],
          h.prototype,
          'referenceScale',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: [y], json: { write: !0 } })],
          h.prototype,
          'colorStops',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: String, json: { write: !0 } })],
          h.prototype,
          'field',
          void 0,
        ),
        (0, o._)(
          [
            (0, l.Cb)({
              type: Number,
              json: {
                write: {
                  overridePolicy: (e, t, i) => ({ enabled: null == i }),
                },
              },
            }),
          ],
          h.prototype,
          'fieldOffset',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          h.prototype,
          'maxPixelIntensity',
          void 0,
        ),
        (0, o._)(
          [(0, l.Cb)({ type: Number, json: { write: !0 } })],
          h.prototype,
          'minPixelIntensity',
          void 0,
        ),
        (0, o._)(
          [(0, n.J)({ heatmap: 'heatmap' })],
          h.prototype,
          'type',
          void 0,
        ),
        (h = b = (0, o._)([(0, u.j)('esri.renderers.HeatmapRenderer')], h));
      const f = h;
    },
    84382: (e, t, i) => {
      i.d(t, { Z: () => m });
      var r,
        o = i(43697),
        s = i(22974),
        a = i(5600),
        l = (i(75215), i(36030)),
        n = i(52011),
        u = i(5499),
        p = i(12571),
        d = i(9833);
      let c = (r = class extends (0, p.W)(u.Z) {
        constructor(e) {
          super(e),
            (this.description = null),
            (this.label = null),
            (this.symbol = null),
            (this.type = 'simple');
        }
        async collectRequiredFields(e, t) {
          await Promise.all([
            this.collectSymbolFields(e, t),
            this.collectVVRequiredFields(e, t),
          ]);
        }
        async collectSymbolFields(e, t) {
          await Promise.all(
            this.getSymbols().map((i) => i.collectRequiredFields(e, t)),
          );
        }
        getSymbol(e, t) {
          return this.symbol;
        }
        async getSymbolAsync(e, t) {
          return this.symbol;
        }
        getSymbols() {
          return this.symbol ? [this.symbol] : [];
        }
        getAttributeHash() {
          return (
            this.visualVariables &&
            this.visualVariables.reduce((e, t) => e + t.getAttributeHash(), '')
          );
        }
        getMeshHash() {
          return this.getSymbols().reduce((e, t) => e + JSON.stringify(t), '');
        }
        get arcadeRequired() {
          return this.arcadeRequiredForVisualVariables;
        }
        clone() {
          return new r({
            description: this.description,
            label: this.label,
            symbol: this.symbol && this.symbol.clone(),
            visualVariables: (0, s.d9)(this.visualVariables),
            authoringInfo: this.authoringInfo && this.authoringInfo.clone(),
          });
        }
      });
      (0, o._)(
        [(0, a.Cb)({ type: String, json: { write: !0 } })],
        c.prototype,
        'description',
        void 0,
      ),
        (0, o._)(
          [(0, a.Cb)({ type: String, json: { write: !0 } })],
          c.prototype,
          'label',
          void 0,
        ),
        (0, o._)([(0, a.Cb)(d.G)], c.prototype, 'symbol', void 0),
        (0, o._)([(0, l.J)({ simple: 'simple' })], c.prototype, 'type', void 0),
        (c = r = (0, o._)([(0, n.j)('esri.renderers.SimpleRenderer')], c));
      const m = c;
    },
    84475: (e, t, i) => {
      i.r(t), i.d(t, { DictionaryLoader: () => b });
      var r = i(22303),
        o = i(3172),
        s = i(20102),
        a = i(92604),
        l = i(13867),
        n = i(70586),
        u = i(95330),
        p = i(19153),
        d = i(59266),
        c = i(17386);
      const m = a.Z.getLogger('esri.renderers.support.DictionaryLoader'),
        y = {
          type: 'CIMSimpleLineCallout',
          lineSymbol: {
            type: 'CIMLineSymbol',
            symbolLayers: [
              { type: 'CIMSolidStroke', width: 0.5, color: [0, 0, 0, 255] },
            ],
          },
        };
      class b {
        constructor(e, t, i) {
          (this.config = null),
            (this.fieldMap = null),
            (this.url = null),
            (this._ongoingRequests = new Map()),
            (this._symbolCache = new l.Z(100)),
            (this.url = e),
            (this.config = t),
            (this.fieldMap = i);
        }
        getSymbolFields() {
          return this._symbolFields;
        }
        async getSymbolAsync(e, t) {
          let i;
          this._dictionaryPromise ||
            (this._dictionaryPromise = this.fetchResources(t));
          try {
            i = await this._dictionaryPromise;
          } catch (e) {
            if ((0, u.D_)(e)) return (this._dictionaryPromise = null), null;
          }
          const o = {};
          if (this.fieldMap)
            for (const t of this._symbolFields) {
              const i = this.fieldMap[t];
              if (i && null != e.attributes[i]) {
                const r = '' + e.attributes[i];
                o[t] = r;
              } else o[t] = '';
            }
          const s = i(o, t);
          if (!s || 'string' != typeof s) return null;
          const a = (0, p.hP)(s).toString(),
            l = this._symbolCache.get(a);
          if (l)
            return (
              l.catch(() => {
                this._symbolCache.pop(a);
              }),
              l
            );
          const d = s.split(';'),
            c = [],
            m = [];
          for (const e of d)
            if (e)
              if (e.includes('po:')) {
                const t = e.substr(3).split('|');
                if (3 === t.length) {
                  const e = t[0],
                    i = t[1];
                  let o = t[2];
                  if ('DashTemplate' === i)
                    o = o.split(' ').map((e) => Number(e));
                  else if ('Color' === i) {
                    const e = new r.Z(o).toRgba();
                    o = [e[0], e[1], e[2], 255 * e[3]];
                  } else o = Number(o);
                  m.push({ primitiveName: e, propertyName: i, value: o });
                }
              } else if (e.includes('|')) {
                for (const t of e.split('|'))
                  if (this._itemNames.has(t)) {
                    c.push(t);
                    break;
                  }
              } else this._itemNames.has(e) && c.push(e);
          const y =
              !(0, n.pC)(e.geometry) ||
              (!e.geometry.hasZ && 'point' === e.geometry.type),
            b = this._cimPartsToCIMSymbol(c, m, y, t);
          return this._symbolCache.put(a, b, 1), b;
        }
        async fetchResources(e) {
          if (this._dictionaryPromise) return this._dictionaryPromise;
          if (!this.url) return void m.error('no valid URL!');
          const t = (0, n.pC)(e) ? e.abortOptions : null,
            i = (0, o.default)(
              this.url + '/resources/styles/dictionary-info.json',
              { responseType: 'json', query: { f: 'json' }, ...t },
            ),
            [{ data: r }] = await Promise.all([i, (0, d.LC)()]);
          if (!r)
            throw (
              ((this._dictionaryPromise = null),
              new s.Z(
                'esri.renderers.DictionaryRenderer',
                'Bad dictionary data!',
              ))
            );
          const a = r.expression,
            l = r.authoringInfo;
          (this._refSymbolUrlTemplate = this.url + '/' + r.cimRefTemplateUrl),
            (this._itemNames = new Set(r.itemsNames)),
            (this._symbolFields = l.symbol);
          const u = {};
          if (this.config) {
            const e = this.config;
            for (const t in e) u[t] = e[t];
          }
          if (l.configuration)
            for (const e of l.configuration)
              u.hasOwnProperty(e.name) || (u[e.name] = e.value);
          const p = [];
          if ((0, n.pC)(e) && e.fields && this.fieldMap)
            for (const t of this._symbolFields) {
              const i = this.fieldMap[t],
                r = e.fields.filter((e) => e.name === i);
              r.length > 0 && p.push({ ...r[0], name: t });
            }
          return (
            (this._dictionaryPromise = (0, d.pp)(
              a,
              (0, n.pC)(e) ? e.spatialReference : null,
              p,
              u,
            )
              .then((e) => {
                const t = { scale: 0 };
                return (i, r) => {
                  const o = e.repurposeFeature({
                    geometry: null,
                    attributes: i,
                  });
                  return (
                    (t.scale = (0, n.pC)(r) ? r.scale : void 0),
                    e.evaluate({ $feature: o, $view: t })
                  );
                };
              })
              .catch(
                (e) => (
                  m.error('Creating dictinoary expression failed:', e), null
                ),
              )),
            this._dictionaryPromise
          );
        }
        async _cimPartsToCIMSymbol(e, t, i, r) {
          const o = new Array(e.length);
          for (let t = 0; t < e.length; t++)
            o[t] = this._getSymbolPart(e[t], r);
          const s = await Promise.all(o),
            a = this.fieldMap;
          for (const e of s) h(e, a);
          return new c.Z({ data: this._combineSymbolParts(s, t, i) });
        }
        async _getSymbolPart(e, t) {
          if (this._ongoingRequests.has(e))
            return this._ongoingRequests.get(e).then((e) => e.data);
          const i = this._refSymbolUrlTemplate.replace(/\{itemName\}/gi, e),
            r = (0, o.default)(i, {
              responseType: 'json',
              query: { f: 'json' },
              ...t,
            });
          this._ongoingRequests.set(e, r);
          try {
            return (await r).data;
          } catch (t) {
            return this._ongoingRequests.delete(e), Promise.reject(t);
          }
        }
        _combineSymbolParts(e, t, i) {
          if (!e || 0 === e.length) return null;
          const r = { ...e[0] };
          if (e.length > 1) {
            r.symbolLayers = [];
            for (const t of e) {
              const e = t;
              r.symbolLayers.unshift(...e.symbolLayers);
            }
          }
          return (
            i && (r.callout = y),
            { type: 'CIMSymbolReference', symbol: r, primitiveOverrides: t }
          );
        }
      }
      function h(e, t) {
        if (!e) return;
        const i = e.symbolLayers;
        if (!i) return;
        let r = i.length;
        for (; r--; ) {
          const e = i[r];
          e && !1 !== e.enable && 'CIMVectorMarker' === e.type && f(e, t);
        }
      }
      function f(e, t) {
        const i = e.markerGraphics;
        if (i)
          for (const e of i) {
            if (!e) continue;
            const i = e.symbol;
            if (i)
              switch (i.type) {
                case 'CIMPointSymbol':
                case 'CIMLineSymbol':
                case 'CIMPolygonSymbol':
                  h(i, t);
                  break;
                case 'CIMTextSymbol':
                  i.fieldMap = t;
              }
          }
      }
    },
    91423: (e, t, i) => {
      i.d(t, { a: () => l });
      var r = i(20941),
        o = i(63213),
        s = i(32400);
      const a = (0, o.d)({ types: s.A });
      function l(e, t, i) {
        return e
          ? e && (e.styleName || e.styleUrl) && 'uniqueValue' !== e.type
            ? (i &&
                i.messages &&
                i.messages.push(
                  new r.Z(
                    'renderer:unsupported',
                    "Only UniqueValueRenderer can be referenced from a web style, but found '" +
                      e.type +
                      "'",
                    { definition: e, context: i },
                  ),
                ),
              null)
            : a(e, t, i)
          : null;
      }
    },
    99282: (e, t, i) => {
      i.d(t, { a: () => s });
      var r = i(67900),
        o = i(68441);
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
        'decimal-degrees': 1 / (0, r.ty)(1, 'meters', o.sv.radius),
      };
    },
    32400: (e, t, i) => {
      i.d(t, { A: () => p, o: () => d });
      var r = i(16050),
        o = i(12501),
        s = i(95088),
        a = i(79056),
        l = i(5499),
        n = i(84382),
        u = i(30687);
      const p = {
          key: 'type',
          base: l.Z,
          typeMap: {
            heatmap: a.Z,
            simple: n.Z,
            'unique-value': u.Z,
            'class-breaks': r.Z,
            'dot-density': s.Z,
            dictionary: o.Z,
          },
          errorContext: 'renderer',
        },
        d = {
          key: 'type',
          base: l.Z,
          typeMap: { simple: n.Z, 'unique-value': u.Z, 'class-breaks': r.Z },
          errorContext: 'renderer',
        };
    },
    51706: (e, t, i) => {
      var r, o;
      function s(e) {
        return (
          e && 'esri.renderers.visualVariables.SizeVariable' === e.declaredClass
        );
      }
      function a(e) {
        return null != e && !isNaN(e) && isFinite(e);
      }
      function l(e) {
        return e.valueExpression
          ? r.Expression
          : e.field && 'string' == typeof e.field
          ? r.Field
          : r.Unknown;
      }
      function n(e, t) {
        const i = t || l(e),
          s = e.valueUnit || 'unknown';
        return i === r.Unknown
          ? o.Constant
          : e.stops
          ? o.Stops
          : null != e.minSize &&
            null != e.maxSize &&
            null != e.minDataValue &&
            null != e.maxDataValue
          ? o.ClampedLinear
          : 'unknown' === s
          ? null != e.minSize && null != e.minDataValue
            ? e.minSize && e.minDataValue
              ? o.Proportional
              : o.Additive
            : o.Identity
          : o.RealWorldSize;
      }
      i.d(t, {
        RY: () => r,
        hL: () => o,
        PS: () => l,
        QW: () => n,
        iY: () => s,
        qh: () => a,
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
        })(o || (o = {}));
    },
    28101: (e, t, i) => {
      i.d(t, {
        PR: () => S,
        Lq: () => y,
        Km: () => b,
        cM: () => h,
        ap: () => f,
        V3: () => C,
        B3: () => m,
      });
      var r = i(22303),
        o = i(38171),
        s = i(74085),
        a = i(92604),
        l = i(70586),
        n = i(99282),
        u = i(51706);
      const p = a.Z.getLogger(
          'esri.renderers.visualVariables.support.visualVariableUtils',
        ),
        d = new o.Z(),
        c = Math.PI,
        m = /^\s*(return\s+)?\$view\.scale\s*(;)?\s*$/i;
      function y(e, t, i) {
        const o =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'color' === e.type)
            : e;
        if (!o) return;
        if ('esri.renderers.visualVariables.ColorVariable' !== o.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.ColorVariable',
          );
        const s = 'number' == typeof t,
          a = s ? null : t,
          n = a && a.attributes;
        let u = s ? t : null;
        const d = o.field,
          { ipData: c, hasExpression: m } = o.cache;
        let y = o.cache.compiledFunc;
        if (!d && !m) {
          const e = o.stops;
          return e && e[0] && e[0].color;
        }
        if ('number' != typeof u)
          if (m) {
            if (!(0, l.pC)(i) || !(0, l.pC)(i.arcade))
              return void p.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: i.viewingMode,
                scale: i.scale,
                spatialReference: i.spatialReference,
              },
              t = i.arcade.arcadeUtils,
              r = t.getViewInfo(e),
              s = t.createExecContext(a, r);
            if (!y) {
              const e = t.createSyntaxTree(o.valueExpression);
              (y = t.createFunction(e)), (o.cache.compiledFunc = y);
            }
            u = t.executeFunction(y, s);
          } else n && (u = n[d]);
        const b = o.normalizationField,
          h = n ? parseFloat(n[b]) : void 0;
        if (null != u && (!b || s || (!isNaN(h) && 0 !== h))) {
          isNaN(h) || s || (u /= h);
          const e = T(u, c);
          if (e) {
            const t = e[0],
              s = e[1],
              a =
                t === s
                  ? o.stops[t].color
                  : r.Z.blendColors(
                      o.stops[t].color,
                      o.stops[s].color,
                      e[2],
                      (0, l.pC)(i) ? i.color : void 0,
                    );
            return new r.Z(a);
          }
        }
      }
      function b(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'opacity' === e.type)
            : e;
        if (!r) return;
        if (
          'esri.renderers.visualVariables.OpacityVariable' !== r.declaredClass
        )
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.OpacityVariable',
          );
        const o = 'number' == typeof t,
          s = o ? null : t,
          a = s && s.attributes;
        let n = o ? t : null;
        const u = r.field,
          { ipData: d, hasExpression: c } = r.cache;
        let m = r.cache.compiledFunc;
        if (!u && !c) {
          const e = r.stops;
          return e && e[0] && e[0].opacity;
        }
        if ('number' != typeof n)
          if (c) {
            if ((0, l.Wi)(i) || (0, l.Wi)(i.arcade))
              return void p.error(
                'Use of arcade expressions requires an arcade context',
              );
            const e = {
                viewingMode: i.viewingMode,
                scale: i.scale,
                spatialReference: i.spatialReference,
              },
              t = i.arcade.arcadeUtils,
              o = t.getViewInfo(e),
              a = t.createExecContext(s, o);
            if (!m) {
              const e = t.createSyntaxTree(r.valueExpression);
              (m = t.createFunction(e)), (r.cache.compiledFunc = m);
            }
            n = t.executeFunction(m, a);
          } else a && (n = a[u]);
        const y = r.normalizationField,
          b = a ? parseFloat(a[y]) : void 0;
        if (null != n && (!y || o || (!isNaN(b) && 0 !== b))) {
          isNaN(b) || o || (n /= b);
          const e = T(n, d);
          if (e) {
            const t = e[0],
              i = e[1];
            if (t === i) return r.stops[t].opacity;
            {
              const o = r.stops[t].opacity;
              return o + (r.stops[i].opacity - o) * e[2];
            }
          }
        }
      }
      function h(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'rotation' === e.type)
            : e;
        if (!r) return;
        if (
          'esri.renderers.visualVariables.RotationVariable' !== r.declaredClass
        )
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.RotationVariable',
          );
        const o = r.axis || 'heading',
          s = 'heading' === o && 'arithmetic' === r.rotationType ? 90 : 0,
          a = 'heading' === o && 'arithmetic' === r.rotationType ? -1 : 1,
          n = 'number' == typeof t ? null : t,
          u = n && n.attributes,
          d = r.field,
          { hasExpression: c } = r.cache;
        let m = r.cache.compiledFunc,
          y = 0;
        if (!d && !c) return y;
        if (c) {
          if ((0, l.Wi)(i) || (0, l.Wi)(i.arcade))
            return void p.error(
              'Use of arcade expressions requires an arcade context',
            );
          const e = {
              viewingMode: i.viewingMode,
              scale: i.scale,
              spatialReference: i.spatialReference,
            },
            t = i.arcade.arcadeUtils,
            o = t.getViewInfo(e),
            s = t.createExecContext(n, o);
          if (!m) {
            const e = t.createSyntaxTree(r.valueExpression);
            (m = t.createFunction(e)), (r.cache.compiledFunc = m);
          }
          y = t.executeFunction(m, s);
        } else u && (y = u[d] || 0);
        return (y = 'number' != typeof y || isNaN(y) ? null : s + a * y), y;
      }
      function f(e, t, i) {
        const r =
          'visualVariables' in e && e.visualVariables
            ? e.visualVariables.find((e) => 'size' === e.type)
            : e;
        if (!r) return;
        if ('esri.renderers.visualVariables.SizeVariable' !== r.declaredClass)
          return void p.warn(
            'The visualVariable should be an instance of esri.renderers.visualVariables.SizeVariable',
          );
        const o = (function (e, t, i, r, o) {
          switch (t.transformationType) {
            case u.hL.Additive:
              return (function (e, t, i, r) {
                return e + (v(t.minSize, i, r) || t.minDataValue);
              })(e, t, i, r);
            case u.hL.Constant:
              return (function (e, t, i) {
                const r = e.stops;
                let o = r && r.length && r[0].size;
                return null == o && (o = e.minSize), v(o, t, i);
              })(t, i, r);
            case u.hL.ClampedLinear:
              return (function (e, t, i, r) {
                const o =
                    (e - t.minDataValue) / (t.maxDataValue - t.minDataValue),
                  s = v(t.minSize, i, r),
                  a = v(t.maxSize, i, r),
                  n = (0, l.pC)(r) ? r.shape : void 0;
                if (e <= t.minDataValue) return s;
                if (e >= t.maxDataValue) return a;
                if ('area' === t.scaleBy && n) {
                  const e = 'circle' === n,
                    t = e ? c * (s / 2) ** 2 : s * s,
                    i = t + o * ((e ? c * (a / 2) ** 2 : a * a) - t);
                  return e ? 2 * Math.sqrt(i / c) : Math.sqrt(i);
                }
                return s + o * (a - s);
              })(e, t, i, r);
            case u.hL.Proportional:
              return (function (e, t, i, r) {
                const o = (0, l.pC)(r) ? r.shape : void 0,
                  s = e / t.minDataValue,
                  a = v(t.minSize, i, r),
                  n = v(t.maxSize, i, r);
                let u = null;
                return (
                  (u =
                    'circle' === o
                      ? 2 * Math.sqrt(s * (a / 2) ** 2)
                      : 'square' === o || 'diamond' === o || 'image' === o
                      ? Math.sqrt(s * a ** 2)
                      : s * a),
                  g(u, a, n)
                );
              })(e, t, i, r);
            case u.hL.Stops:
              return (function (e, t, i, r, o) {
                const [s, a, l] = T(e, o);
                if (s === a) return v(t.stops[s].size, i, r);
                {
                  const e = v(t.stops[s].size, i, r);
                  return e + (v(t.stops[a].size, i, r) - e) * l;
                }
              })(e, t, i, r, o);
            case u.hL.RealWorldSize:
              return (function (e, t, i, r) {
                const o =
                    ((0, l.pC)(r) && r.resolution ? r.resolution : 1) *
                    n.a[t.valueUnit],
                  s = v(t.minSize, i, r),
                  a = v(t.maxSize, i, r),
                  { valueRepresentation: u } = t;
                let p = null;
                return (
                  (p =
                    'area' === u
                      ? (2 * Math.sqrt(e / c)) / o
                      : 'radius' === u || 'distance' === u
                      ? (2 * e) / o
                      : e / o),
                  g(p, s, a)
                );
              })(e, t, i, r);
            case u.hL.Identity:
              return e;
            case u.hL.Unknown:
              return null;
          }
        })(
          (function (e, t, i) {
            const r = 'number' == typeof t,
              o = r ? null : t,
              s = o && o.attributes;
            let a = r ? t : null;
            const { isScaleDriven: n } = e.cache;
            let d = e.cache.compiledFunc;
            if (n) {
              const t = (0, l.pC)(i) ? i.scale : void 0,
                r = (0, l.pC)(i) ? i.view : void 0;
              a =
                null == t || '3d' === r
                  ? (function (e) {
                      let t = null,
                        i = null;
                      const r = e.stops;
                      return (
                        r
                          ? ((t = r[0].value), (i = r[r.length - 1].value))
                          : ((t = e.minDataValue || 0),
                            (i = e.maxDataValue || 0)),
                        (t + i) / 2
                      );
                    })(e)
                  : t;
            } else if (!r)
              switch (e.inputValueType) {
                case u.RY.Expression: {
                  if ((0, l.Wi)(i) || (0, l.Wi)(i.arcade))
                    return void p.error(
                      'Use of arcade expressions requires an arcade context',
                    );
                  const t = {
                      viewingMode: i.viewingMode,
                      scale: i.scale,
                      spatialReference: i.spatialReference,
                    },
                    r = i.arcade.arcadeUtils,
                    s = r.getViewInfo(t),
                    n = r.createExecContext(o, s);
                  if (!d) {
                    const t = r.createSyntaxTree(e.valueExpression);
                    (d = r.createFunction(t)), (e.cache.compiledFunc = d);
                  }
                  a = r.executeFunction(d, n);
                  break;
                }
                case u.RY.Field:
                  s && (a = s[e.field]);
                  break;
                case u.RY.Unknown:
                  a = null;
              }
            if (!(0, u.qh)(a)) return null;
            if (r || !e.normalizationField) return a;
            const c = s ? parseFloat(s[e.normalizationField]) : null;
            return (0, u.qh)(c) && 0 !== c ? a / c : null;
          })(r, t, i),
          r,
          t,
          i,
          r.cache.ipData,
        );
        return null == o || isNaN(o) ? 0 : o;
      }
      function v(e, t, i) {
        return null == e
          ? null
          : (0, u.iY)(e)
          ? f(e, t, i)
          : (0, u.qh)(e)
          ? e
          : null;
      }
      function g(e, t, i) {
        return (0, u.qh)(i) && e > i ? i : (0, u.qh)(t) && e < t ? t : e;
      }
      function C(e, t, i) {
        const { isScaleDriven: r } = e.cache;
        if (!((r && '3d' === i) || t)) return null;
        const o = { scale: t, view: i };
        let s = v(e.minSize, d, o),
          a = v(e.maxSize, d, o);
        if (null != s || null != a) {
          if (s > a) {
            const e = a;
            (a = s), (s = e);
          }
          return { minSize: s, maxSize: a };
        }
      }
      function T(e, t) {
        if (!t) return;
        let i = 0,
          r = t.length - 1;
        return (
          t.some((t, o) => (e < t ? ((r = o), !0) : ((i = o), !1))),
          [i, r, (e - t[i]) / (t[r] - t[i])]
        );
      }
      function S(e, t, i) {
        const r = ['proportional', 'proportional', 'proportional'];
        for (const o of e) {
          const e = o.useSymbolValue ? 'symbol-value' : f(o, t, i);
          switch (o.axis) {
            case 'width':
              r[0] = e;
              break;
            case 'depth':
              r[1] = e;
              break;
            case 'height':
              r[2] = e;
              break;
            case 'width-and-depth':
              (r[0] = e), (r[1] = e);
              break;
            case 'all':
            case void 0:
            case null:
              (r[0] = e), (r[1] = e), (r[2] = e);
              break;
            default:
              (0, s.Bg)(o.axis);
          }
        }
        return r;
      }
    },
    23334: (e, t, i) => {
      i.d(t, { F: () => N });
      var r = i(3172),
        o = i(70586),
        s = i(28263),
        a = i(82526),
        l = i(93924),
        n = i(11282),
        u = i(43697),
        p = i(38171),
        d = i(96674),
        c = i(5600),
        m = (i(67676), i(80442), i(75215), i(71715)),
        y = i(52011),
        b = i(74889),
        h = i(79166),
        f = i(95642);
      let v = class extends d.wq {
        constructor(e) {
          super(e),
            (this.directionLines = null),
            (this.directionPoints = null),
            (this.directions = null),
            (this.route = null),
            (this.routeName = null),
            (this.stops = null);
        }
      };
      (0, u._)(
        [(0, c.Cb)({ type: b.default, json: { write: !0 } })],
        v.prototype,
        'directionLines',
        void 0,
      ),
        (0, u._)(
          [(0, c.Cb)({ type: b.default, json: { write: !0 } })],
          v.prototype,
          'directionPoints',
          void 0,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: f.Z, json: { write: !0 } })],
          v.prototype,
          'directions',
          void 0,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: p.Z, json: { write: !0 } })],
          v.prototype,
          'route',
          void 0,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: String, json: { write: !0 } })],
          v.prototype,
          'routeName',
          void 0,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: [p.Z], json: { write: !0 } })],
          v.prototype,
          'stops',
          void 0,
        ),
        (v = (0, u._)([(0, y.j)('esri.rest.support.RouteResult')], v));
      const g = v;
      function C(e) {
        return e && b.default.fromJSON(e).features.map((e) => e);
      }
      let T = class extends d.wq {
        constructor(e) {
          super(e),
            (this.messages = null),
            (this.pointBarriers = null),
            (this.polylineBarriers = null),
            (this.polygonBarriers = null),
            (this.routeResults = null);
        }
        readPointBarriers(e, t) {
          return C(t.barriers);
        }
        readPolylineBarriers(e) {
          return C(e);
        }
        readPolygonBarriers(e) {
          return C(e);
        }
      };
      (0, u._)([(0, c.Cb)({ type: [h.Z] })], T.prototype, 'messages', void 0),
        (0, u._)(
          [(0, c.Cb)({ type: [p.Z] })],
          T.prototype,
          'pointBarriers',
          void 0,
        ),
        (0, u._)(
          [(0, m.r)('pointBarriers', ['barriers'])],
          T.prototype,
          'readPointBarriers',
          null,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: [p.Z] })],
          T.prototype,
          'polylineBarriers',
          void 0,
        ),
        (0, u._)(
          [(0, m.r)('polylineBarriers')],
          T.prototype,
          'readPolylineBarriers',
          null,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: [p.Z] })],
          T.prototype,
          'polygonBarriers',
          void 0,
        ),
        (0, u._)(
          [(0, m.r)('polygonBarriers')],
          T.prototype,
          'readPolygonBarriers',
          null,
        ),
        (0, u._)(
          [(0, c.Cb)({ type: [g] })],
          T.prototype,
          'routeResults',
          void 0,
        ),
        (T = (0, u._)([(0, y.j)('esri.rest.support.RouteSolveResult')], T));
      const S = T,
        w = (0, s.E)({
          accumulateAttributes: { name: 'accumulateAttributeNames' },
          attributeParameterValues: !0,
          directionsTimeAttribute: { name: 'directionsTimeAttributeName' },
          impedanceAttribute: { name: 'impedanceAttributeName' },
          outSpatialReference: {
            name: 'outSR',
            getter: (e) => e.outSpatialReference.wkid,
          },
          pointBarriers: { name: 'barriers' },
          polylineBarriers: !0,
          polygonBarriers: !0,
          restrictionAttributes: { name: 'restrictionAttributeNames' },
          stops: !0,
          travelMode: !0,
        });
      function _(e) {
        return (
          'esri.rest.support.FeatureSet' ===
          (null == e ? void 0 : e.declaredClass)
        );
      }
      async function N(e, t, i) {
        const s = [],
          u = [],
          p = {},
          d = {},
          c = (0, n.en)(e),
          { path: m } = c;
        _(t.stops) && (0, l.et)(t.stops.features, u, 'stops.features', p),
          _(t.pointBarriers) &&
            (0, l.et)(t.pointBarriers.features, u, 'pointBarriers.features', p),
          _(t.polylineBarriers) &&
            (0, l.et)(
              t.polylineBarriers.features,
              u,
              'polylineBarriers.features',
              p,
            ),
          _(t.polygonBarriers) &&
            (0, l.et)(
              t.polygonBarriers.features,
              u,
              'polygonBarriers.features',
              p,
            );
        const y = await (0, a.aX)(u);
        for (const e in p) {
          const t = p[e];
          s.push(e), (d[e] = y.slice(t[0], t[1]));
        }
        if ((0, l.Wf)(d, s)) {
          let e = null;
          try {
            e = await (0, l.bI)(m, t.apiKey, i);
          } catch {}
          e && !e.hasZ && (0, l.ef)(d, s);
        }
        for (const e in d)
          d[e].forEach((i, r) => {
            t.get(e)[r].geometry = i;
          });
        const b = {
            ...i,
            query: { ...c.query, ...w.toQueryParams(t), f: 'json' },
          },
          h = m.endsWith('/solve') ? m : `${m}/solve`,
          { data: f } = await (0, r.default)(h, b);
        return (function (e) {
          var t, i, r, s, a;
          const l = new Map(),
            {
              directionLines: n,
              directionPoints: u,
              directions: p,
              routes: d,
              stops: c,
              barriers: m,
              polygonBarriers: y,
              polylineBarriers: b,
              messages: h,
            } = e,
            f =
              null !=
              (t =
                null !=
                (i =
                  null !=
                  (r =
                    null != (s = null == d ? void 0 : d.spatialReference)
                      ? s
                      : null == c
                      ? void 0
                      : c.spatialReference)
                    ? r
                    : null == m
                    ? void 0
                    : m.spatialReference)
                  ? i
                  : null == y
                  ? void 0
                  : y.spatialReference)
                ? t
                : null == b
                ? void 0
                : b.spatialReference;
          null == d ||
            d.features.forEach((e) => {
              const t = e.attributes.Name,
                i = e.attributes.ObjectID;
              l.has(t)
                ? ((l.get(t).route = e), (l.get(t).routeId = i))
                : l.set(t, { route: e, routeId: i, routeName: t }),
                (0, o.pC)(e.geometry) && (e.geometry.spatialReference = f);
            }),
            null == p ||
              p.forEach((e) => {
                const t = e.routeName;
                l.has(t)
                  ? (l.get(t).directions = e)
                  : l.set(t, { routeName: t, directions: e });
              }),
            null == c ||
              c.features.forEach((e) => {
                var t;
                const i = null != (t = e.attributes.RouteName) ? t : null;
                l.has(i)
                  ? l.get(i).stops
                    ? l.get(i).stops.push(e)
                    : (l.get(i).stops = [e])
                  : l.set(i, { stops: [e], routeName: i }),
                  (0, o.pC)(e.geometry) && (e.geometry.spatialReference = f);
              });
          const v =
            null ==
              (a =
                null == c
                  ? void 0
                  : c.features.every((e) => null == e.attributes.RouteName)) ||
            a;
          if ((null == c ? void 0 : c.features.length) > 0 && v) {
            const e = Array.from(l.keys())[0];
            (l.get(e).stops = l.get(null).stops), l.delete(null);
          }
          null == n ||
            n.features.forEach((e) => {
              var t;
              const i = e.attributes.RouteID,
                r =
                  null ==
                  (t = Array.from(l.values()).find((e) => e.routeId === i))
                    ? void 0
                    : t.routeName;
              if (r)
                if (l.has(r))
                  if (l.get(r).directionLines)
                    l.get(r).directionLines.features.push(e);
                  else {
                    const {
                      fieldAliases: t,
                      geometryType: i,
                      spatialReference: o,
                    } = n;
                    l.get(r).directionLines = {
                      features: [e],
                      fieldAliases: t,
                      geometryType: i,
                      spatialReference: o,
                    };
                  }
                else {
                  const {
                    fieldAliases: t,
                    geometryType: i,
                    spatialReference: o,
                  } = n;
                  l.set(r, {
                    routeName: r,
                    directionLines: {
                      features: [e],
                      fieldAliases: t,
                      geometryType: i,
                      spatialReference: o,
                    },
                  });
                }
            }),
            null == u ||
              u.features.forEach((e) => {
                var t;
                const i = e.attributes.RouteID,
                  r =
                    null ==
                    (t = Array.from(l.values()).find((e) => e.routeId === i))
                      ? void 0
                      : t.routeName;
                if (r)
                  if (l.has(r))
                    if (l.get(r).directionPoints)
                      l.get(r).directionPoints.features.push(e);
                    else {
                      const {
                        fieldAliases: t,
                        geometryType: i,
                        spatialReference: o,
                      } = u;
                      l.get(r).directionPoints = {
                        features: [e],
                        fieldAliases: t,
                        geometryType: i,
                        spatialReference: o,
                      };
                    }
                  else {
                    const {
                      fieldAliases: t,
                      geometryType: i,
                      spatialReference: o,
                    } = u;
                    l.set(r, {
                      routeName: r,
                      directionPoints: {
                        features: [e],
                        fieldAliases: t,
                        geometryType: i,
                        spatialReference: o,
                      },
                    });
                  }
              });
          const g = Array.from(l.values());
          return S.fromJSON({
            routeResults: g,
            barriers: m,
            polygonBarriers: y,
            polylineBarriers: b,
            messages: h,
          });
        })(f);
      }
    },
    95642: (e, t, i) => {
      i.d(t, { Z: () => f });
      var r = i(43697),
        o = (i(66577), i(70586)),
        s = i(5600),
        a = (i(67676), i(80442), i(75215), i(71715)),
        l = i(52011),
        n = i(38171);
      let u = class extends n.Z {};
      (0, r._)([(0, s.Cb)()], u.prototype, 'events', void 0),
        (0, r._)([(0, s.Cb)()], u.prototype, 'strings', void 0),
        (u = (0, r._)([(0, l.j)('esri.rest.support.DirectionsFeature')], u));
      const p = u;
      var d = i(74889),
        c = i(6570),
        m = i(82971),
        y = i(58901),
        b = i(13473);
      let h = class extends d.default {
        constructor(e) {
          super(e),
            (this.extent = null),
            (this.features = null),
            (this.geometryType = 'polyline'),
            (this.routeId = null),
            (this.routeName = null),
            (this.totalDriveTime = null),
            (this.totalLength = null),
            (this.totalTime = null);
        }
        readFeatures(e, t) {
          var i;
          if (!e) return [];
          const r =
              null != (i = t.summary.envelope.spatialReference)
                ? i
                : t.spatialReference,
            o = r && m.Z.fromJSON(r);
          return e.map((e) => {
            var t, i;
            const r = this._decompressGeometry(e.compressedGeometry),
              s = new y.Z({ ...r, spatialReference: o }),
              a =
                null !=
                (t =
                  null == (i = e.events)
                    ? void 0
                    : i.map((e) => {
                        const {
                          arriveTimeUTC: t,
                          ETA: i,
                          point: { x: r, y: s, z: a },
                          strings: l,
                        } = e;
                        return new p({
                          geometry: new b.Z({
                            x: r,
                            y: s,
                            z: a,
                            hasZ: void 0 !== a,
                            spatialReference: o,
                          }),
                          attributes: { ETA: i, arriveTimeUTC: t },
                          strings: l,
                        });
                      }))
                  ? t
                  : [];
            return new p({
              attributes: e.attributes,
              events: a,
              geometry: s,
              strings: e.strings,
            });
          });
        }
        get mergedGeometry() {
          if (!this.features) return null;
          const e = this.features.map(({ geometry: e }) => (0, o.Wg)(e)),
            t = this.get('extent.spatialReference');
          return this._mergePolylinesToSinglePath(e, t);
        }
        get strings() {
          return this.features.map(({ strings: e }) => e);
        }
        _decompressGeometry(e) {
          let t = 0,
            i = 0,
            r = 0,
            o = 0;
          const s = [];
          let a,
            l,
            n,
            u,
            p,
            d,
            c,
            m,
            y = 0,
            b = 0,
            h = 0;
          if (
            ((p = e.match(/((\+|\-)[^\+\-\|]+|\|)/g)),
            p || (p = []),
            0 === parseInt(p[y], 32))
          ) {
            y = 2;
            const e = parseInt(p[y], 32);
            y++,
              (d = parseInt(p[y], 32)),
              y++,
              1 & e &&
                ((b = p.indexOf('|') + 1), (c = parseInt(p[b], 32)), b++),
              2 & e &&
                ((h = p.indexOf('|', b) + 1), (m = parseInt(p[h], 32)), h++);
          } else (d = parseInt(p[y], 32)), y++;
          for (; y < p.length && '|' !== p[y]; ) {
            (a = parseInt(p[y], 32) + t),
              y++,
              (t = a),
              (l = parseInt(p[y], 32) + i),
              y++,
              (i = l);
            const e = [a / d, l / d];
            b && ((u = parseInt(p[b], 32) + r), b++, (r = u), e.push(u / c)),
              h && ((n = parseInt(p[h], 32) + o), h++, (o = n), e.push(n / m)),
              s.push(e);
          }
          return { paths: [s], hasZ: b > 0, hasM: h > 0 };
        }
        _mergePolylinesToSinglePath(e, t) {
          if (0 === e.length) return new y.Z({ spatialReference: t });
          const i = [];
          for (const t of e) for (const e of t.paths) i.push(...e);
          const r = [];
          i.forEach((e, t) => {
            (0 !== t && e[0] === i[t - 1][0] && e[1] === i[t - 1][1]) ||
              r.push(e);
          });
          const { hasM: o, hasZ: s } = e[0];
          return new y.Z({ hasM: o, hasZ: s, paths: [r], spatialReference: t });
        }
      };
      (0, r._)(
        [
          (0, s.Cb)({
            type: c.Z,
            json: { read: { source: 'summary.envelope' } },
          }),
        ],
        h.prototype,
        'extent',
        void 0,
      ),
        (0, r._)([(0, s.Cb)()], h.prototype, 'features', void 0),
        (0, r._)([(0, a.r)('features')], h.prototype, 'readFeatures', null),
        (0, r._)([(0, s.Cb)()], h.prototype, 'geometryType', void 0),
        (0, r._)(
          [(0, s.Cb)({ readOnly: !0 })],
          h.prototype,
          'mergedGeometry',
          null,
        ),
        (0, r._)([(0, s.Cb)()], h.prototype, 'routeId', void 0),
        (0, r._)([(0, s.Cb)()], h.prototype, 'routeName', void 0),
        (0, r._)(
          [(0, s.Cb)({ value: null, readOnly: !0 })],
          h.prototype,
          'strings',
          null,
        ),
        (0, r._)(
          [(0, s.Cb)({ json: { read: { source: 'summary.totalDriveTime' } } })],
          h.prototype,
          'totalDriveTime',
          void 0,
        ),
        (0, r._)(
          [(0, s.Cb)({ json: { read: { source: 'summary.totalLength' } } })],
          h.prototype,
          'totalLength',
          void 0,
        ),
        (0, r._)(
          [(0, s.Cb)({ json: { read: { source: 'summary.totalTime' } } })],
          h.prototype,
          'totalTime',
          void 0,
        ),
        (h = (0, r._)([(0, l.j)('esri.rest.support.DirectionsFeatureSet')], h));
      const f = h;
    },
    74889: (e, t, i) => {
      i.r(t), i.d(t, { default: () => C });
      var r,
        o = i(43697),
        s = i(66577),
        a = i(38171),
        l = i(35454),
        n = i(96674),
        u = i(22974),
        p = i(70586),
        d = i(5600),
        c = (i(75215), i(71715)),
        m = i(52011),
        y = i(30556),
        b = i(82971),
        h = i(33955),
        f = i(1231);
      const v = new l.X({
        esriGeometryPoint: 'point',
        esriGeometryMultipoint: 'multipoint',
        esriGeometryPolyline: 'polyline',
        esriGeometryPolygon: 'polygon',
        esriGeometryEnvelope: 'extent',
        mesh: 'mesh',
        '': null,
      });
      let g = (r = class extends n.wq {
        constructor(e) {
          super(e),
            (this.displayFieldName = null),
            (this.exceededTransferLimit = !1),
            (this.features = []),
            (this.fields = null),
            (this.geometryType = null),
            (this.hasM = !1),
            (this.hasZ = !1),
            (this.queryGeometry = null),
            (this.spatialReference = null);
        }
        readFeatures(e, t) {
          const i = b.Z.fromJSON(t.spatialReference),
            r = [];
          for (let t = 0; t < e.length; t++) {
            const o = e[t],
              s = a.Z.fromJSON(o),
              l = o.geometry && o.geometry.spatialReference;
            (0, p.pC)(s.geometry) && !l && (s.geometry.spatialReference = i);
            const n = o.aggregateGeometries,
              u = s.aggregateGeometries;
            if (n && (0, p.pC)(u))
              for (const e in u) {
                const t = u[e],
                  r = n[e],
                  o = null == r ? void 0 : r.spatialReference;
                (0, p.pC)(t) && !o && (t.spatialReference = i);
              }
            r.push(s);
          }
          return r;
        }
        writeGeometryType(e, t, i, r) {
          if (e) return void v.write(e, t, i, r);
          const { features: o } = this;
          if (o)
            for (const e of o)
              if (e && (0, p.pC)(e.geometry))
                return void v.write(e.geometry.type, t, i, r);
        }
        readQueryGeometry(e, t) {
          if (!e) return null;
          const i = !!e.spatialReference,
            r = (0, h.im)(e);
          return (
            !i &&
              t.spatialReference &&
              (r.spatialReference = b.Z.fromJSON(t.spatialReference)),
            r
          );
        }
        writeSpatialReference(e, t) {
          if (e) return void (t.spatialReference = e.toJSON());
          const { features: i } = this;
          if (i)
            for (const e of i)
              if (e && (0, p.pC)(e.geometry) && e.geometry.spatialReference)
                return void (t.spatialReference =
                  e.geometry.spatialReference.toJSON());
        }
        clone() {
          return new r(this.cloneProperties());
        }
        cloneProperties() {
          return (0, u.d9)({
            displayFieldName: this.displayFieldName,
            exceededTransferLimit: this.exceededTransferLimit,
            features: this.features,
            fields: this.fields,
            geometryType: this.geometryType,
            hasM: this.hasM,
            hasZ: this.hasZ,
            queryGeometry: this.queryGeometry,
            spatialReference: this.spatialReference,
            transform: this.transform,
          });
        }
        toJSON(e) {
          const t = this.write();
          if (t.features && Array.isArray(e) && e.length > 0)
            for (let i = 0; i < t.features.length; i++) {
              const r = t.features[i];
              if (r.geometry) {
                const t = e && e[i];
                r.geometry = (t && t.toJSON()) || r.geometry;
              }
            }
          return t;
        }
        quantize(e) {
          const {
              scale: [t, i],
              translate: [r, o],
            } = e,
            s = this.features,
            a = this._getQuantizationFunction(
              this.geometryType,
              (e) => Math.round((e - r) / t),
              (e) => Math.round((o - e) / i),
            );
          for (let e = 0, t = s.length; e < t; e++)
            a((0, p.Wg)(s[e].geometry)) || (s.splice(e, 1), e--, t--);
          return (this.transform = e), this;
        }
        unquantize() {
          const { geometryType: e, features: t, transform: i } = this;
          if (!i) return this;
          const {
              translate: [r, o],
              scale: [s, a],
            } = i,
            l = this._getHydrationFunction(
              e,
              (e) => e * s + r,
              (e) => o - e * a,
            );
          for (const { geometry: e } of t) (0, p.pC)(e) && l(e);
          return (this.transform = null), this;
        }
        _quantizePoints(e, t, i) {
          let r, o;
          const s = [];
          for (let a = 0, l = e.length; a < l; a++) {
            const l = e[a];
            if (a > 0) {
              const e = t(l[0]),
                a = i(l[1]);
              (e === r && a === o) ||
                (s.push([e - r, a - o]), (r = e), (o = a));
            } else (r = t(l[0])), (o = i(l[1])), s.push([r, o]);
          }
          return s.length > 0 ? s : null;
        }
        _getQuantizationFunction(e, t, i) {
          return 'point' === e
            ? (e) => ((e.x = t(e.x)), (e.y = i(e.y)), e)
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const r = (0, h.oU)(e) ? e.rings : e.paths,
                  o = [];
                for (let e = 0, s = r.length; e < s; e++) {
                  const s = r[e],
                    a = this._quantizePoints(s, t, i);
                  a && o.push(a);
                }
                return o.length > 0
                  ? ((0, h.oU)(e) ? (e.rings = o) : (e.paths = o), e)
                  : null;
              }
            : 'multipoint' === e
            ? (e) => {
                const r = this._quantizePoints(e.points, t, i);
                return r.length > 0 ? ((e.points = r), e) : null;
              }
            : 'extent' === e
            ? (e) => e
            : null;
        }
        _getHydrationFunction(e, t, i) {
          return 'point' === e
            ? (e) => {
                (e.x = t(e.x)), (e.y = i(e.y));
              }
            : 'polyline' === e || 'polygon' === e
            ? (e) => {
                const r = (0, h.oU)(e) ? e.rings : e.paths;
                let o, s;
                for (let e = 0, a = r.length; e < a; e++) {
                  const a = r[e];
                  for (let e = 0, r = a.length; e < r; e++) {
                    const r = a[e];
                    e > 0
                      ? ((o += r[0]), (s += r[1]))
                      : ((o = r[0]), (s = r[1])),
                      (r[0] = t(o)),
                      (r[1] = i(s));
                  }
                }
              }
            : 'extent' === e
            ? (e) => {
                (e.xmin = t(e.xmin)),
                  (e.ymin = i(e.ymin)),
                  (e.xmax = t(e.xmax)),
                  (e.ymax = i(e.ymax));
              }
            : 'multipoint' === e
            ? (e) => {
                const r = e.points;
                let o, s;
                for (let e = 0, a = r.length; e < a; e++) {
                  const a = r[e];
                  e > 0 ? ((o += a[0]), (s += a[1])) : ((o = a[0]), (s = a[1])),
                    (a[0] = t(o)),
                    (a[1] = i(s));
                }
              }
            : void 0;
        }
      });
      (0, o._)(
        [(0, d.Cb)({ type: String, json: { write: !0 } })],
        g.prototype,
        'displayFieldName',
        void 0,
      ),
        (0, o._)(
          [
            (0, d.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          g.prototype,
          'exceededTransferLimit',
          void 0,
        ),
        (0, o._)(
          [(0, d.Cb)({ type: [a.Z], json: { write: !0 } })],
          g.prototype,
          'features',
          void 0,
        ),
        (0, o._)([(0, c.r)('features')], g.prototype, 'readFeatures', null),
        (0, o._)(
          [(0, d.Cb)({ type: [f.Z], json: { write: !0 } })],
          g.prototype,
          'fields',
          void 0,
        ),
        (0, o._)(
          [
            (0, d.Cb)({
              type: [
                'point',
                'multipoint',
                'polyline',
                'polygon',
                'extent',
                'mesh',
              ],
              json: { read: { reader: v.read } },
            }),
          ],
          g.prototype,
          'geometryType',
          void 0,
        ),
        (0, o._)(
          [(0, y.c)('geometryType')],
          g.prototype,
          'writeGeometryType',
          null,
        ),
        (0, o._)(
          [
            (0, d.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          g.prototype,
          'hasM',
          void 0,
        ),
        (0, o._)(
          [
            (0, d.Cb)({
              type: Boolean,
              json: { write: { overridePolicy: (e) => ({ enabled: e }) } },
            }),
          ],
          g.prototype,
          'hasZ',
          void 0,
        ),
        (0, o._)(
          [(0, d.Cb)({ types: s.qM, json: { write: !0 } })],
          g.prototype,
          'queryGeometry',
          void 0,
        ),
        (0, o._)(
          [(0, c.r)('queryGeometry')],
          g.prototype,
          'readQueryGeometry',
          null,
        ),
        (0, o._)(
          [(0, d.Cb)({ type: b.Z, json: { write: !0 } })],
          g.prototype,
          'spatialReference',
          void 0,
        ),
        (0, o._)(
          [(0, y.c)('spatialReference')],
          g.prototype,
          'writeSpatialReference',
          null,
        ),
        (0, o._)(
          [(0, d.Cb)({ json: { write: !0 } })],
          g.prototype,
          'transform',
          void 0,
        ),
        (g = r = (0, o._)([(0, m.j)('esri.rest.support.FeatureSet')], g)),
        (g.prototype.toJSON.isDefaultToJSON = !0);
      const C = g;
    },
  },
]);
