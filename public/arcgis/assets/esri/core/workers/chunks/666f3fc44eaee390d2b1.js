'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [86, 7873],
  {
    65845: (e, t, r) => {
      r.d(t, { D: () => i });
      var s = r(81153);
      function i(e) {
        e &&
          e.writtenProperties &&
          e.writtenProperties.forEach((e) => {
            const t = e.target;
            e.newOrigin &&
              e.oldOrigin !== e.newOrigin &&
              (0, s.l)(t) &&
              t.updateOrigin(e.propName, e.newOrigin);
          });
      }
    },
    81153: (e, t, r) => {
      function s(e) {
        return e && 'getAtOrigin' in e && 'originOf' in e;
      }
      r.d(t, { l: () => s });
    },
    41123: (e, t, r) => {
      function s() {
        const e = crypto.getRandomValues(new Uint16Array(8));
        (e[3] = (4095 & e[3]) | 16384), (e[4] = (16383 & e[4]) | 32768);
        const t = (t) => e[t].toString(16);
        return (
          t(0) +
          t(1) +
          '-' +
          t(2) +
          '-' +
          t(3) +
          '-' +
          t(4) +
          '-' +
          t(5) +
          t(6) +
          t(7)
        );
      }
      r.d(t, { D: () => s });
    },
    54295: (e, t, r) => {
      r.d(t, { V: () => o });
      var s = r(43697),
        i = r(5600),
        a = (r(67676), r(80442), r(75215), r(52011));
      const o = (e) => {
        let t = class extends e {
          get apiKey() {
            var e;
            return this._isOverridden('apiKey')
              ? this._get('apiKey')
              : (function (e) {
                  return 'portalItem' in e;
                })(this)
              ? null == (e = this.portalItem)
                ? void 0
                : e.apiKey
              : null;
          }
          set apiKey(e) {
            null != e
              ? this._override('apiKey', e)
              : (this._clearOverride('apiKey'), this.clear('apiKey', 'user'));
          }
        };
        return (
          (0, s._)([(0, i.Cb)({ type: String })], t.prototype, 'apiKey', null),
          (t = (0, s._)([(0, a.j)('esri.layers.mixins.APIKeyMixin')], t)),
          t
        );
      };
    },
    17287: (e, t, r) => {
      r.d(t, { Y: () => p });
      var s = r(43697),
        i = r(92604),
        a = r(70586),
        o = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011)),
        l = r(66677);
      const p = (e) => {
        let t = class extends e {
          get title() {
            if (this._get('title') && 'defaults' !== this.originOf('title'))
              return this._get('title');
            if (this.url) {
              const e = (0, l.Qc)(this.url);
              if ((0, a.pC)(e) && e.title) return e.title;
            }
            return this._get('title') || '';
          }
          set title(e) {
            this._set('title', e);
          }
          set url(e) {
            this._set('url', (0, l.Nm)(e, i.Z.getLogger(this.declaredClass)));
          }
        };
        return (
          (0, s._)([(0, o.Cb)()], t.prototype, 'title', null),
          (0, s._)([(0, o.Cb)({ type: String })], t.prototype, 'url', null),
          (t = (0, s._)([(0, n.j)('esri.layers.mixins.ArcGISService')], t)),
          t
        );
      };
    },
    16859: (e, t, r) => {
      r.d(t, { I: () => I });
      var s = r(43697),
        i = r(40330),
        a = r(3172),
        o = r(66643),
        n = r(20102),
        l = r(92604),
        p = r(70586),
        u = r(95330),
        d = r(17452),
        c = r(5600),
        h = (r(67676), r(80442), r(75215), r(71715)),
        m = r(52011),
        y = r(30556),
        f = r(65587),
        g = r(15235),
        v = r(86082);
      const w = l.Z.getLogger('esri.layers.mixins.PortalLayer'),
        I = (e) => {
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
            readPortalItem(e, t, r) {
              if (t.itemId)
                return new g.default({ id: t.itemId, portal: r && r.portal });
            }
            writePortalItem(e, t) {
              e && e.id && (t.itemId = e.id);
            }
            async loadFromPortal(e, t) {
              if (this.portalItem && this.portalItem.id)
                try {
                  const s = await r.e(8062).then(r.bind(r, 18062));
                  return (
                    (0, u.k_)(t),
                    await s.load(
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
                    ((0, u.D_)(e) ||
                      w.warn(
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
                  (e) => ((0, u.r9)(e), !0),
                ),
              );
            }
            async _fetchUserHasEditingPrivileges(e) {
              const t = this.url
                ? null == i.id
                  ? void 0
                  : i.id.findCredential(this.url)
                : null;
              if (!t) return !0;
              const r =
                S.credential === t ? S.user : await this._fetchEditingUser(e);
              return (
                (S.credential = t),
                (S.user = r),
                (0, p.Wi)(r) ||
                  null == r.privileges ||
                  r.privileges.includes('features:user:edit')
              );
            }
            async _fetchEditingUser(e) {
              var t, r;
              const s =
                null == (t = this.portalItem) || null == (r = t.portal)
                  ? void 0
                  : r.user;
              if (s) return s;
              const n = i.id.findServerInfo(this.url);
              if (null == n || !n.owningSystemUrl) return null;
              const l = `${n.owningSystemUrl}/sharing/rest`,
                u = f.Z.getDefault();
              if (u && u.loaded && (0, d.Fv)(u.restUrl) === (0, d.Fv)(l))
                return u.user;
              const c = `${l}/community/self`,
                h = (0, p.pC)(e) ? e.signal : null,
                m = await (0, o.q6)(
                  (0, a.default)(c, {
                    authMode: 'no-prompt',
                    query: { f: 'json' },
                    signal: h,
                  }),
                );
              return m.ok ? v.default.fromJSON(m.value.data) : null;
            }
            read(e, t) {
              t && (t.layer = this), super.read(e, t);
            }
            write(e, t) {
              const r = t && t.portal,
                s =
                  this.portalItem &&
                  this.portalItem.id &&
                  (this.portalItem.portal || f.Z.getDefault());
              return r && s && !(0, d.tm)(s.restUrl, r.restUrl)
                ? (t.messages &&
                    t.messages.push(
                      new n.Z(
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
            (0, s._)(
              [(0, c.Cb)({ type: g.default })],
              t.prototype,
              'portalItem',
              null,
            ),
            (0, s._)(
              [(0, h.r)('web-document', 'portalItem', ['itemId'])],
              t.prototype,
              'readPortalItem',
              null,
            ),
            (0, s._)(
              [
                (0, y.c)('web-document', 'portalItem', {
                  itemId: { type: String },
                }),
              ],
              t.prototype,
              'writePortalItem',
              null,
            ),
            (0, s._)(
              [(0, c.Cb)({ clonable: !1 })],
              t.prototype,
              'resourceReferences',
              void 0,
            ),
            (0, s._)(
              [(0, c.Cb)({ readOnly: !0 })],
              t.prototype,
              'userHasEditingPrivileges',
              void 0,
            ),
            (t = (0, s._)([(0, m.j)('esri.layers.mixins.PortalLayer')], t)),
            t
          );
        },
        S = { credential: null, user: null };
    },
    32271: (e, t, r) => {
      r.d(t, { xp: () => q, Vt: () => U });
      var s = r(43697),
        i = r(3172),
        a = r(20102),
        o = (r(80442), r(92604)),
        n = r(70586),
        l = r(95330),
        p = r(17452),
        u = r(5600),
        d = (r(67676), r(75215), r(71715)),
        c = r(52011),
        h = r(30556),
        m = r(65845),
        y = r(6570),
        f = r(79235),
        g = r(82971),
        v = r(66677),
        w = r(21506),
        I = r(61064),
        S = r(65587),
        _ = r(15235),
        b = r(66643),
        x = r(41123),
        E = r(97873);
      async function P(e, t, r) {
        if (!t || !t.resources) return;
        const s = t.portalItem === e.portalItem ? new Set(e.paths) : new Set();
        (e.paths.length = 0), (e.portalItem = t.portalItem);
        const i = new Set(t.resources.toKeep.map((e) => e.resource.path)),
          o = new Set(),
          n = [];
        i.forEach((t) => {
          s.delete(t), e.paths.push(t);
        });
        for (const a of t.resources.toUpdate)
          if (
            (s.delete(a.resource.path),
            i.has(a.resource.path) || o.has(a.resource.path))
          ) {
            const { resource: t, content: s, finish: i, error: o } = a,
              l = (0, E.getSiblingOfSameTypeI)(t, (0, x.D)());
            e.paths.push(l.path),
              n.push(R({ resource: l, content: s, finish: i, error: o }, r));
          } else
            e.paths.push(a.resource.path),
              n.push(O(a, r)),
              o.add(a.resource.path);
        for (const s of t.resources.toAdd)
          n.push(R(s, r)), e.paths.push(s.resource.path);
        if (
          (s.forEach((e) => {
            const r = t.portalItem.resourceFromPath(e);
            n.push(r.portalItem.removeResource(r).catch(() => {}));
          }),
          0 === n.length)
        )
          return;
        const p = await (0, l.as)(n);
        (0, l.k_)(r);
        const u = p.filter((e) => 'error' in e).map((e) => e.error);
        if (u.length > 0)
          throw new a.Z(
            'save:resources',
            'Failed to save one or more resources',
            { errors: u },
          );
      }
      async function R(e, t) {
        const r = await (0, b.q6)(
          e.resource.portalItem.addResource(e.resource, e.content, t),
        );
        if (!0 !== r.ok) throw (e.error && e.error(r.error), r.error);
        e.finish && e.finish(e.resource);
      }
      async function O(e, t) {
        const r = await (0, b.q6)(e.resource.update(e.content, t));
        if (!0 !== r.ok) throw (e.error(r.error), r.error);
        e.finish(e.resource);
      }
      const C = o.Z.getLogger('esri.layers.mixins.SceneService'),
        U = (e) => {
          let t = class extends e {
            constructor() {
              super(...arguments),
                (this.spatialReference = null),
                (this.fullExtent = null),
                (this.heightModelInfo = null),
                (this.minScale = 0),
                (this.maxScale = 0),
                (this.version = {
                  major: Number.NaN,
                  minor: Number.NaN,
                  versionString: '',
                }),
                (this.copyright = null),
                (this.sublayerTitleMode = 'item-title'),
                (this.title = null),
                (this.layerId = null),
                (this.indexInfo = null),
                (this._debouncedSaveOperations = (0, l.Ds)(async (e, t, r) => {
                  switch (e) {
                    case q.SAVE:
                      return this._save(t);
                    case q.SAVE_AS:
                      return this._saveAs(r, t);
                  }
                }));
            }
            readSpatialReference(e, t) {
              return this._readSpatialReference(t);
            }
            _readSpatialReference(e) {
              if (null != e.spatialReference)
                return g.Z.fromJSON(e.spatialReference);
              {
                const t = e.store,
                  r = t.indexCRS || t.geographicCRS,
                  s =
                    r &&
                    parseInt(r.substring(r.lastIndexOf('/') + 1, r.length), 10);
                return null != s ? new g.Z(s) : null;
              }
            }
            readFullExtent(e, t, r) {
              if (null != e && 'object' == typeof e) {
                const s =
                  null == e.spatialReference
                    ? { ...e, spatialReference: this._readSpatialReference(t) }
                    : e;
                return y.Z.fromJSON(s, r);
              }
              const s = t.store,
                i = this._readSpatialReference(t);
              return null == i ||
                null == s ||
                null == s.extent ||
                !Array.isArray(s.extent) ||
                s.extent.some((e) => e < T)
                ? null
                : new y.Z({
                    xmin: s.extent[0],
                    ymin: s.extent[1],
                    xmax: s.extent[2],
                    ymax: s.extent[3],
                    spatialReference: i,
                  });
            }
            parseVersionString(e) {
              const t = {
                  major: Number.NaN,
                  minor: Number.NaN,
                  versionString: e,
                },
                r = e.split('.');
              return (
                r.length >= 2 &&
                  ((t.major = parseInt(r[0], 10)),
                  (t.minor = parseInt(r[1], 10))),
                t
              );
            }
            readVersion(e, t) {
              const r = t.store,
                s = null != r.version ? r.version.toString() : '';
              return this.parseVersionString(s);
            }
            readTitlePortalItem(e) {
              return 'item-title' !== this.sublayerTitleMode ? void 0 : e;
            }
            readTitleService(e, t) {
              const r = this.portalItem && this.portalItem.title;
              if ('item-title' === this.sublayerTitleMode)
                return (0, v.a7)(this.url, t.name);
              let s = t.name;
              if (!s && this.url) {
                const e = (0, v.Qc)(this.url);
                (0, n.pC)(e) && (s = e.title);
              }
              return (
                'item-title-and-service-name' === this.sublayerTitleMode &&
                  r &&
                  (s = r + ' - ' + s),
                (0, v.ld)(s)
              );
            }
            set url(e) {
              const t = (0, v.XG)({
                layer: this,
                url: e,
                nonStandardUrlAllowed: !1,
                logger: C,
              });
              this._set('url', t.url),
                null != t.layerId && this._set('layerId', t.layerId);
            }
            writeUrl(e, t, r, s) {
              (0, v.wH)(this, e, 'layers', t, s);
            }
            get parsedUrl() {
              const e = this._get('url');
              if (!e) return null;
              const t = (0, p.mN)(e);
              return (
                null != this.layerId &&
                  (t.path = `${t.path}/layers/${this.layerId}`),
                t
              );
            }
            async _fetchIndexAndUpdateExtent(e, t) {
              (this.indexInfo = (0, I.T)(
                this.parsedUrl.path,
                this.rootNode,
                e,
                this.apiKey,
                C,
                t,
              )),
                null == this.fullExtent ||
                  this.fullExtent.hasZ ||
                  this._updateExtent(await this.indexInfo);
            }
            _updateExtent(e) {
              if ('page' === (null == e ? void 0 : e.type)) {
                var t, r;
                const s = e.rootIndex % e.pageSize,
                  i =
                    null == (t = e.rootPage) || null == (r = t.nodes)
                      ? void 0
                      : r[s];
                if (
                  null == i ||
                  null == i.obb ||
                  null == i.obb.center ||
                  null == i.obb.halfSize
                )
                  throw new a.Z(
                    'sceneservice:invalid-node-page',
                    'Invalid node page.',
                  );
                if (
                  i.obb.center[0] < T ||
                  null == this.fullExtent ||
                  this.fullExtent.hasZ
                )
                  return;
                const o = i.obb.halfSize,
                  n = i.obb.center[2],
                  l = Math.sqrt(o[0] * o[0] + o[1] * o[1] + o[2] * o[2]);
                (this.fullExtent.zmin = n - l), (this.fullExtent.zmax = n + l);
              } else if ('node' === (null == e ? void 0 : e.type)) {
                var s;
                const t = null == (s = e.rootNode) ? void 0 : s.mbs;
                if (!Array.isArray(t) || 4 !== t.length || t[0] < T) return;
                const r = t[2],
                  i = t[3];
                (this.fullExtent.zmin = r - i), (this.fullExtent.zmax = r + i);
              }
            }
            async _fetchService(e) {
              if (null == this.url)
                throw new a.Z(
                  'sceneservice:url-not-set',
                  'Scene service can not be loaded without valid portal item or url',
                );
              if (null == this.layerId && /SceneServer\/*$/i.test(this.url)) {
                const t = await this._fetchFirstLayerId(e);
                null != t && (this.layerId = t);
              }
              return this._fetchServiceLayer(e);
            }
            async _fetchFirstLayerId(e) {
              const t = await (0, i.default)(this.url, {
                query: { f: 'json', token: this.apiKey },
                responseType: 'json',
                signal: e,
              });
              if (
                t.data &&
                Array.isArray(t.data.layers) &&
                t.data.layers.length > 0
              )
                return t.data.layers[0].id;
            }
            async _fetchServiceLayer(e) {
              const t = await (0, i.default)(this.parsedUrl.path, {
                query: { f: 'json', token: this.apiKey },
                responseType: 'json',
                signal: e,
              });
              t.ssl && (this.url = this.url.replace(/^http:/i, 'https:'));
              let r = !1;
              if (
                (t.data.layerType && 'Voxel' === t.data.layerType && (r = !0),
                r)
              )
                return this._fetchVoxelServiceLayer();
              const s = t.data;
              this.read(s, { origin: 'service', url: this.parsedUrl }),
                this.validateLayer(s);
            }
            async _fetchVoxelServiceLayer(e) {
              const t = (
                await (0, i.default)(this.parsedUrl.path + '/layer', {
                  query: { f: 'json', token: this.apiKey },
                  responseType: 'json',
                  signal: e,
                })
              ).data;
              this.read(t, { origin: 'service', url: this.parsedUrl }),
                this.validateLayer(t);
            }
            async _ensureLoadBeforeSave() {
              await this.load(),
                'beforeSave' in this &&
                  'function' == typeof this.beforeSave &&
                  (await this.beforeSave());
            }
            validateLayer(e) {}
            _updateTypeKeywords(e, t, r) {
              e.typeKeywords || (e.typeKeywords = []);
              const s = t.getTypeKeywords();
              for (const t of s) e.typeKeywords.push(t);
              e.typeKeywords &&
                ((e.typeKeywords = e.typeKeywords.filter(
                  (e, t, r) => r.indexOf(e) === t,
                )),
                r === N.newItem &&
                  (e.typeKeywords = e.typeKeywords.filter(
                    (e) => 'Hosted Service' !== e,
                  )));
            }
            async _saveAs(e, t) {
              const r = { ...Z, ...t };
              let s = _.default.from(e);
              s ||
                (C.error('_saveAs(): requires a portal item parameter'),
                await Promise.reject(
                  new a.Z(
                    'sceneservice:portal-item-required',
                    '_saveAs() requires a portal item to save to',
                  ),
                )),
                s.id && ((s = s.clone()), (s.id = null));
              const i = s.portal || S.Z.getDefault();
              await this._ensureLoadBeforeSave(), (s.type = j), (s.portal = i);
              const o = {
                  origin: 'portal-item',
                  url: null,
                  messages: [],
                  portal: i,
                  portalItem: s,
                  writtenProperties: [],
                  blockedRelativeUrls: [],
                  resources: {
                    toAdd: [],
                    toUpdate: [],
                    toKeep: [],
                    pendingOperations: [],
                  },
                },
                n = { layers: [this.write({}, o)] };
              return (
                await Promise.all(o.resources.pendingOperations),
                await this._validateAgainstJSONSchema(n, o, r),
                (s.url = this.url),
                s.title || (s.title = this.title),
                this._updateTypeKeywords(s, r, N.newItem),
                await i._signIn(),
                await i.user.addItem({
                  item: s,
                  folder: r && r.folder,
                  data: n,
                }),
                await P(this.resourceReferences, o, null),
                (this.portalItem = s),
                (0, m.D)(o),
                (o.portalItem = s),
                s
              );
            }
            async _save(e) {
              const t = { ...Z, ...e };
              this.portalItem ||
                (C.error(
                  '_save(): requires the .portalItem property to be set',
                ),
                await Promise.reject(
                  new a.Z(
                    'sceneservice:portal-item-not-set',
                    'Portal item to save to has not been set on this SceneService',
                  ),
                )),
                this.portalItem.type !== j &&
                  (C.error(
                    '_save(): Non-matching portal item type. Got ' +
                      this.portalItem.type +
                      ', expected ' +
                      j,
                  ),
                  await Promise.reject(
                    new a.Z(
                      'sceneservice:portal-item-wrong-type',
                      `Portal item needs to have type "${j}"`,
                    ),
                  )),
                await this._ensureLoadBeforeSave();
              const r = {
                  origin: 'portal-item',
                  url:
                    this.portalItem.itemUrl &&
                    (0, p.mN)(this.portalItem.itemUrl),
                  messages: [],
                  portal: this.portalItem.portal || S.Z.getDefault(),
                  portalItem: this.portalItem,
                  writtenProperties: [],
                  blockedRelativeUrls: [],
                  resources: {
                    toAdd: [],
                    toUpdate: [],
                    toKeep: [],
                    pendingOperations: [],
                  },
                },
                s = { layers: [this.write({}, r)] };
              return (
                await Promise.all(r.resources.pendingOperations),
                await this._validateAgainstJSONSchema(s, r, t),
                (this.portalItem.url = this.url),
                this.portalItem.title || (this.portalItem.title = this.title),
                this._updateTypeKeywords(this.portalItem, t, N.existingItem),
                await this.portalItem.update({ data: s }),
                await P(this.resourceReferences, r, null),
                (0, m.D)(r),
                this.portalItem
              );
            }
            async _validateAgainstJSONSchema(e, t, s) {
              let i = t.messages
                .filter((e) => 'error' === e.type)
                .map((e) => new a.Z(e.name, e.message, e.details));
              if (
                (s &&
                  s.validationOptions.ignoreUnsupported &&
                  (i = i.filter(
                    (e) =>
                      'layer:unsupported' !== e.name &&
                      'symbol:unsupported' !== e.name &&
                      'symbol-layer:unsupported' !== e.name &&
                      'property:unsupported' !== e.name &&
                      'url:unsupported' !== e.name &&
                      'scenemodification:unsupported' !== e.name,
                  )),
                s.validationOptions.enabled || A)
              ) {
                const t = (await r.e(7572).then(r.bind(r, 87572))).validate(
                  e,
                  s.portalItemLayerType,
                );
                if (t.length > 0) {
                  const e = `Layer item did not validate:\n${t.join('\n')}`;
                  if (
                    (C.error(`_validateAgainstJSONSchema(): ${e}`),
                    'throw' === s.validationOptions.failPolicy)
                  ) {
                    const e = t
                      .map((e) => new a.Z('sceneservice:schema-validation', e))
                      .concat(i);
                    throw new a.Z(
                      'sceneservice-validate:error',
                      'Failed to save layer item due to schema validation, see `details.errors`.',
                      { combined: e },
                    );
                  }
                }
              }
              if (i.length > 0)
                throw new a.Z(
                  'sceneservice:save',
                  "Failed to save SceneService due to unsupported or invalid content. See 'details.errors' for more detailed information",
                  { errors: i },
                );
            }
          };
          return (
            (0, s._)([(0, u.Cb)(w.id)], t.prototype, 'id', void 0),
            (0, s._)(
              [(0, u.Cb)({ type: g.Z })],
              t.prototype,
              'spatialReference',
              void 0,
            ),
            (0, s._)(
              [
                (0, d.r)('spatialReference', [
                  'spatialReference',
                  'store.indexCRS',
                  'store.geographicCRS',
                ]),
              ],
              t.prototype,
              'readSpatialReference',
              null,
            ),
            (0, s._)(
              [(0, u.Cb)({ type: y.Z })],
              t.prototype,
              'fullExtent',
              void 0,
            ),
            (0, s._)(
              [
                (0, d.r)('fullExtent', [
                  'fullExtent',
                  'store.extent',
                  'spatialReference',
                  'store.indexCRS',
                  'store.geographicCRS',
                ]),
              ],
              t.prototype,
              'readFullExtent',
              null,
            ),
            (0, s._)(
              [(0, u.Cb)({ readOnly: !0, type: f.Z })],
              t.prototype,
              'heightModelInfo',
              void 0,
            ),
            (0, s._)(
              [
                (0, u.Cb)({
                  type: Number,
                  json: {
                    name: 'layerDefinition.minScale',
                    write: !0,
                    origins: {
                      service: { read: { source: 'minScale' }, write: !1 },
                    },
                  },
                }),
              ],
              t.prototype,
              'minScale',
              void 0,
            ),
            (0, s._)(
              [
                (0, u.Cb)({
                  type: Number,
                  json: {
                    name: 'layerDefinition.maxScale',
                    write: !0,
                    origins: {
                      service: { read: { source: 'maxScale' }, write: !1 },
                    },
                  },
                }),
              ],
              t.prototype,
              'maxScale',
              void 0,
            ),
            (0, s._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'version',
              void 0,
            ),
            (0, s._)(
              [(0, d.r)('version', ['store.version'])],
              t.prototype,
              'readVersion',
              null,
            ),
            (0, s._)(
              [
                (0, u.Cb)({
                  type: String,
                  json: { read: { source: 'copyrightText' } },
                }),
              ],
              t.prototype,
              'copyright',
              void 0,
            ),
            (0, s._)(
              [(0, u.Cb)({ type: String, json: { read: !1 } })],
              t.prototype,
              'sublayerTitleMode',
              void 0,
            ),
            (0, s._)(
              [(0, u.Cb)({ type: String })],
              t.prototype,
              'title',
              void 0,
            ),
            (0, s._)(
              [(0, d.r)('portal-item', 'title')],
              t.prototype,
              'readTitlePortalItem',
              null,
            ),
            (0, s._)(
              [(0, d.r)('service', 'title', ['name'])],
              t.prototype,
              'readTitleService',
              null,
            ),
            (0, s._)(
              [
                (0, u.Cb)({
                  type: Number,
                  json: {
                    origins: {
                      service: { read: { source: 'id' } },
                      'portal-item': {
                        write: {
                          target: 'id',
                          isRequired: !0,
                          ignoreOrigin: !0,
                        },
                        read: !1,
                      },
                    },
                  },
                }),
              ],
              t.prototype,
              'layerId',
              void 0,
            ),
            (0, s._)([(0, u.Cb)(w.HQ)], t.prototype, 'url', null),
            (0, s._)([(0, h.c)('url')], t.prototype, 'writeUrl', null),
            (0, s._)([(0, u.Cb)()], t.prototype, 'parsedUrl', null),
            (0, s._)(
              [(0, u.Cb)({ readOnly: !0 })],
              t.prototype,
              'store',
              void 0,
            ),
            (0, s._)(
              [
                (0, u.Cb)({
                  type: String,
                  readOnly: !0,
                  json: { read: { source: 'store.rootNode' } },
                }),
              ],
              t.prototype,
              'rootNode',
              void 0,
            ),
            (t = (0, s._)([(0, c.j)('esri.layers.mixins.SceneService')], t)),
            t
          );
        },
        T = -1e38,
        A = !1;
      var N, K;
      ((K = N || (N = {}))[(K.existingItem = 0)] = 'existingItem'),
        (K[(K.newItem = 1)] = 'newItem');
      const j = 'Scene Service',
        Z = {
          getTypeKeywords: () => [],
          portalItemLayerType: 'unknown',
          validationOptions: {
            enabled: !0,
            ignoreUnsupported: !1,
            failPolicy: 'throw',
          },
        };
      var q;
      !(function (e) {
        (e[(e.SAVE = 0)] = 'SAVE'), (e[(e.SAVE_AS = 1)] = 'SAVE_AS');
      })(q || (q = {}));
    },
    61064: (e, t, r) => {
      r.d(t, { T: () => o });
      var s = r(3172),
        i = r(20102),
        a = r(70586);
      async function o(e, t, r, o, n, l) {
        let p = null;
        if ((0, a.pC)(r)) {
          const t = `${e}/nodepages/`,
            i = t + Math.floor(r.rootIndex / r.nodesPerPage);
          try {
            return {
              type: 'page',
              rootPage: (
                await (0, s.default)(i, {
                  query: { f: 'json', token: o },
                  responseType: 'json',
                  signal: l,
                })
              ).data,
              rootIndex: r.rootIndex,
              pageSize: r.nodesPerPage,
              lodMetric: r.lodSelectionMetricType,
              urlPrefix: t,
            };
          } catch (e) {
            (0, a.pC)(n) &&
              n.warn(
                '#fetchIndexInfo()',
                'Failed to load root node page. Falling back to node documents.',
                i,
                e,
              ),
              (p = e);
          }
        }
        if (!t) return null;
        const u = `${e}/nodes/`,
          d = u + (t && t.split('/').pop());
        try {
          return {
            type: 'node',
            rootNode: (
              await (0, s.default)(d, {
                query: { f: 'json', token: o },
                responseType: 'json',
                signal: l,
              })
            ).data,
            urlPrefix: u,
          };
        } catch (e) {
          throw new i.Z(
            'sceneservice:root-node-missing',
            'Root node missing.',
            { pageError: p, nodeError: e, url: d },
          );
        }
      }
    },
    97873: (e, t, r) => {
      r.r(t),
        r.d(t, {
          addOrUpdateResource: () => l,
          contentToBlob: () => h,
          fetchResources: () => n,
          getSiblingOfSameType: () => m,
          getSiblingOfSameTypeI: () => y,
          removeAllResources: () => u,
          removeResource: () => p,
          splitPrefixFileNameAndExtension: () => c,
        });
      var s = r(3172),
        i = r(20102),
        a = r(70586),
        o = r(17452);
      async function n(e, t = {}, r) {
        await e.load(r);
        const s = (0, o.v_)(e.itemUrl, 'resources'),
          {
            start: i = 1,
            num: n = 10,
            sortOrder: l = 'asc',
            sortField: p = 'created',
          } = t,
          u = {
            query: {
              start: i,
              num: n,
              sortOrder: l,
              sortField: p,
              token: e.apiKey,
            },
            signal: (0, a.U2)(r, 'signal'),
          },
          d = await e.portal._request(s, u);
        return {
          total: d.total,
          nextStart: d.nextStart,
          resources: d.resources.map(
            ({ created: t, size: r, resource: s }) => ({
              created: new Date(t),
              size: r,
              resource: e.resourceFromPath(s),
            }),
          ),
        };
      }
      async function l(e, t, r, s) {
        if (!e.hasPath())
          throw new i.Z(
            `portal-item-resource-${t}:invalid-path`,
            'Resource does not have a valid path',
          );
        const n = e.portalItem;
        await n.load(s);
        const l = (0, o.v_)(
            n.userItemUrl,
            'add' === t ? 'addResources' : 'updateResources',
          ),
          [p, u] = d(e.path),
          c = await h(r),
          m = new FormData();
        return (
          p && '.' !== p && m.append('resourcesPrefix', p),
          m.append('fileName', u),
          m.append('file', c, u),
          m.append('f', 'json'),
          (0, a.pC)(s) && s.access && m.append('access', s.access),
          await n.portal._request(l, {
            method: 'post',
            body: m,
            signal: (0, a.U2)(s, 'signal'),
          }),
          e
        );
      }
      async function p(e, t, r) {
        if (!t.hasPath())
          throw new i.Z(
            'portal-item-resources-remove:invalid-path',
            'Resource does not have a valid path',
          );
        await e.load(r);
        const s = (0, o.v_)(e.userItemUrl, 'removeResources');
        await e.portal._request(s, {
          method: 'post',
          query: { resource: t.path },
          signal: (0, a.U2)(r, 'signal'),
        }),
          (t.portalItem = null);
      }
      async function u(e, t) {
        await e.load(t);
        const r = (0, o.v_)(e.userItemUrl, 'removeResources');
        return e.portal._request(r, {
          method: 'post',
          query: { deleteAll: !0 },
          signal: (0, a.U2)(t, 'signal'),
        });
      }
      function d(e) {
        const t = e.lastIndexOf('/');
        return -1 === t ? ['.', e] : [e.slice(0, t), e.slice(t + 1)];
      }
      function c(e) {
        const [t, r] = (function (e) {
            const t = (0, o.Ml)(e);
            return (0, a.Wi)(t)
              ? [e, '']
              : [e.slice(0, e.length - t.length - 1), `.${t}`];
          })(e),
          [s, i] = d(t);
        return [s, i, r];
      }
      async function h(e) {
        return e instanceof Blob
          ? e
          : (await (0, s.default)(e.url, { responseType: 'blob' })).data;
      }
      function m(e, t) {
        if (!e.hasPath()) return null;
        const [r, , s] = c(e.path);
        return e.portalItem.resourceFromPath((0, o.v_)(r, t + s));
      }
      function y(e, t) {
        if (!e.hasPath()) return null;
        const [r, , s] = c(e.path);
        return e.portalItem.resourceFromPath((0, o.v_)(r, t + s));
      }
    },
    99282: (e, t, r) => {
      r.d(t, { a: () => a });
      var s = r(67900),
        i = r(68441);
      const a = {
        inches: (0, s.En)(1, 'meters', 'inches'),
        feet: (0, s.En)(1, 'meters', 'feet'),
        'us-feet': (0, s.En)(1, 'meters', 'us-feet'),
        yards: (0, s.En)(1, 'meters', 'yards'),
        miles: (0, s.En)(1, 'meters', 'miles'),
        'nautical-miles': (0, s.En)(1, 'meters', 'nautical-miles'),
        millimeters: (0, s.En)(1, 'meters', 'millimeters'),
        centimeters: (0, s.En)(1, 'meters', 'centimeters'),
        decimeters: (0, s.En)(1, 'meters', 'decimeters'),
        meters: (0, s.En)(1, 'meters', 'meters'),
        kilometers: (0, s.En)(1, 'meters', 'kilometers'),
        'decimal-degrees': 1 / (0, s.ty)(1, 'meters', i.sv.radius),
      };
    },
  },
]);
