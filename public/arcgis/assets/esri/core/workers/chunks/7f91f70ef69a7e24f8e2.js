'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [8422],
  {
    13867: (e, t, r) => {
      r.d(t, { Z: () => s });
      var o = r(69801);
      class s {
        constructor(e, t) {
          (this._storage = new o.WJ()),
            (this._storage.maxSize = e),
            t && this._storage.registerRemoveFunc('', t);
        }
        put(e, t, r) {
          this._storage.put(e, t, r, 1);
        }
        pop(e) {
          return this._storage.pop(e);
        }
        get(e) {
          return this._storage.get(e);
        }
        clear() {
          this._storage.clearAll();
        }
        destroy() {
          this._storage.destroy();
        }
        get maxSize() {
          return this._storage.maxSize;
        }
        set maxSize(e) {
          this._storage.maxSize = e;
        }
      }
    },
    83379: (e, t, r) => {
      r.d(t, { Z: () => y });
      var o = r(43697),
        s = r(20102),
        i = r(609),
        l = r(95330),
        n = r(20941),
        a = r(5600),
        u = r(52011);
      const p = 'loaded',
        d = (e) => {
          let t = class extends e {
            constructor(...e) {
              super(...e),
                (this._loadController = null),
                (this.loadError = null),
                (this.loadStatus = 'not-loaded'),
                this._set('loadWarnings', []),
                this.addResolvingPromise(
                  new Promise((e) => {
                    const t = this.load.bind(this);
                    this.load = (r) => {
                      const o = new Promise((e, t) => {
                        const o = (0, l.$F)(r, t);
                        this.destroyed &&
                          t(
                            new s.Z(
                              'load:instance-destroyed',
                              `Instance of '${
                                this.declaredClass || this.constructor.name
                              }' is already destroyed`,
                              { instance: this },
                            ),
                          ),
                          this._promiseProps.when(e, t).finally(() => {
                            o && o.remove();
                          });
                      });
                      if ('not-loaded' === this.loadStatus) {
                        this._set('loadStatus', 'loading');
                        const e = (this._loadController =
                          new AbortController());
                        t({ signal: e.signal }),
                          (0, l.fu)(e.signal, () => {
                            this._promiseProps.abort();
                          });
                      }
                      return e(), o;
                    };
                  }),
                ),
                this.when(
                  () => {
                    this._set('loadStatus', p), (this._loadController = null);
                  },
                  (e) => {
                    this._set('loadStatus', 'failed'),
                      this._set('loadError', e),
                      (this._loadController = null);
                  },
                );
            }
            get loaded() {
              return this.loadStatus === p;
            }
            get loadWarnings() {
              return this._get('loadWarnings');
            }
            load() {
              return null;
            }
            cancelLoad() {
              var e;
              return (
                this.isFulfilled() ||
                  (this._set(
                    'loadError',
                    new s.Z('load:cancelled', 'Cancelled'),
                  ),
                  null == (e = this._loadController) || e.abort()),
                this
              );
            }
          };
          return (
            (0, o._)(
              [(0, a.Cb)({ readOnly: !0 })],
              t.prototype,
              'loaded',
              null,
            ),
            (0, o._)(
              [(0, a.Cb)({ readOnly: !0 })],
              t.prototype,
              'loadError',
              void 0,
            ),
            (0, o._)(
              [(0, a.Cb)({ clonable: !1 })],
              t.prototype,
              'loadStatus',
              void 0,
            ),
            (0, o._)(
              [(0, a.Cb)({ type: [n.Z], readOnly: !0 })],
              t.prototype,
              'loadWarnings',
              null,
            ),
            (t = (0, o._)([(0, u.j)('esri.core.Loadable')], t)),
            t
          );
        };
      let h = class extends d(i.D) {};
      var c;
      (h = (0, o._)([(0, u.j)('esri.core.Loadable')], h)),
        ((c = h || (h = {})).LoadableMixin = d),
        (c.isLoadable = function (e) {
          return !(!e || !e.load);
        });
      const y = h;
    },
    609: (e, t, r) => {
      r.d(t, { D: () => h, v: () => d });
      var o,
        s,
        i = r(43697),
        l = r(15923),
        n = r(70586),
        a = r(95330),
        u = r(52011);
      ((s = o || (o = {}))[(s.PENDING = 0)] = 'PENDING'),
        (s[(s.RESOLVED = 1)] = 'RESOLVED'),
        (s[(s.REJECTED = 2)] = 'REJECTED');
      class p {
        constructor(e) {
          (this.instance = e),
            (this._resolver = (0, a.dD)()),
            (this._status = o.PENDING),
            (this._resolvingPromises = []),
            this._resolver.promise.then(
              () => {
                (this._status = o.RESOLVED), this._cleanUp();
              },
              () => {
                (this._status = o.REJECTED), this._cleanUp();
              },
            );
        }
        addResolvingPromise(e) {
          this._resolvingPromises.push(e), this._tryResolve();
        }
        isResolved() {
          return this._status === o.RESOLVED;
        }
        isRejected() {
          return this._status === o.REJECTED;
        }
        isFulfilled() {
          return this._status !== o.PENDING;
        }
        abort() {
          this._resolver.reject((0, a.zE)());
        }
        when(e, t) {
          return this._resolver.promise.then(e, t);
        }
        _cleanUp() {
          this._allPromise = this._resolvingPromises = this._allPromise = null;
        }
        _tryResolve() {
          if (this.isFulfilled()) return;
          const e = (0, a.dD)(),
            t = [...this._resolvingPromises, (0, n.j0)(e.promise)],
            r = (this._allPromise = Promise.all(t));
          r.then(
            () => {
              this.isFulfilled() ||
                this._allPromise !== r ||
                this._resolver.resolve(this.instance);
            },
            (e) => {
              this.isFulfilled() ||
                this._allPromise !== r ||
                (0, a.D_)(e) ||
                this._resolver.reject(e);
            },
          ),
            e.resolve();
        }
      }
      const d = (e) => {
        let t = class extends e {
          constructor(...e) {
            super(...e),
              (this._promiseProps = new p(this)),
              this.addResolvingPromise(Promise.resolve());
          }
          isResolved() {
            return this._promiseProps.isResolved();
          }
          isRejected() {
            return this._promiseProps.isRejected();
          }
          isFulfilled() {
            return this._promiseProps.isFulfilled();
          }
          when(e, t) {
            return new Promise((e, t) => {
              this._promiseProps.when(e, t);
            }).then(e, t);
          }
          catch(e) {
            return this.when(null, e);
          }
          addResolvingPromise(e) {
            e &&
              !this._promiseProps.isFulfilled() &&
              this._promiseProps.addResolvingPromise(
                '_promiseProps' in e ? e.when() : e,
              );
          }
        };
        return (t = (0, i._)([(0, u.j)('esri.core.Promise')], t)), t;
      };
      let h = class extends d(l.Z) {};
      h = (0, i._)([(0, u.j)('esri.core.Promise')], h);
    },
    62357: (e, t, r) => {
      r.d(t, { vW: () => n, F2: () => s, Wz: () => i, t_: () => l });
      const o = /^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;
      function s(e) {
        return e ? (e / 72) * 96 : 0;
      }
      function i(e) {
        return e ? (72 * e) / 96 : 0;
      }
      function l(e) {
        if ('string' == typeof e) {
          const t = e.match(o);
          if (t) {
            const r = Number(t[1]),
              o = t[3] && t[3].toLowerCase(),
              s = '-' === e.charAt(0),
              l = 'px' === o ? i(r) : r;
            return s ? -l : l;
          }
          return console.warn('screenUtils.toPt: input not recognized!'), null;
        }
        return e;
      }
      function n(e = 0, t = 0) {
        return { x: e, y: t };
      }
    },
    65587: (e, t, r) => {
      r.d(t, { Z: () => E });
      var o = r(43697),
        s = r(68773),
        i = r(40330),
        l = r(3172),
        n = r(60235),
        a = r(20102),
        u = r(96674),
        p = r(83379),
        d = r(92604),
        h = r(70586),
        c = r(95330),
        y = r(5600),
        m = (r(67676), r(80442), r(75215)),
        _ = r(71715),
        v = r(52011),
        b = r(6570),
        f = r(70171),
        C = r(41253),
        g = r(15923);
      let S = class extends g.Z {
        constructor(e) {
          super(e),
            (this.nextQueryParams = null),
            (this.queryParams = null),
            (this.results = null),
            (this.total = null);
        }
      };
      (0, o._)([(0, y.Cb)()], S.prototype, 'nextQueryParams', void 0),
        (0, o._)([(0, y.Cb)()], S.prototype, 'queryParams', void 0),
        (0, o._)([(0, y.Cb)()], S.prototype, 'results', void 0),
        (0, o._)([(0, y.Cb)()], S.prototype, 'total', void 0),
        (S = (0, o._)([(0, v.j)('esri.portal.PortalQueryResult')], S));
      const P = S;
      var w,
        O = r(86082),
        U = r(71058);
      let q;
      const G = {
        PortalGroup: () => Promise.resolve().then(r.bind(r, 68916)),
        PortalItem: () => r.e(5235).then(r.bind(r, 15235)),
        PortalUser: () => Promise.resolve().then(r.bind(r, 86082)),
      };
      let D = (w = class extends (0, u.eC)(p.Z) {
        constructor(e) {
          super(e),
            (this.access = null),
            (this.allSSL = !1),
            (this.authMode = 'auto'),
            (this.authorizedCrossOriginDomains = null),
            (this.basemapGalleryGroupQuery = null),
            (this.bingKey = null),
            (this.canListApps = !1),
            (this.canListData = !1),
            (this.canListPreProvisionedItems = !1),
            (this.canProvisionDirectPurchase = !1),
            (this.canSearchPublic = !0),
            (this.canShareBingPublic = !1),
            (this.canSharePublic = !1),
            (this.canSignInArcGIS = !1),
            (this.canSignInIDP = !1),
            (this.colorSetsGroupQuery = null),
            (this.commentsEnabled = !1),
            (this.created = null),
            (this.culture = null),
            (this.customBaseUrl = null),
            (this.defaultBasemap = null),
            (this.defaultDevBasemap = null),
            (this.defaultExtent = null),
            (this.defaultVectorBasemap = null),
            (this.description = null),
            (this.devBasemapGalleryGroupQuery = null),
            (this.eueiEnabled = null),
            (this.featuredGroups = null),
            (this.featuredItemsGroupQuery = null),
            (this.galleryTemplatesGroupQuery = null),
            (this.livingAtlasGroupQuery = null),
            (this.hasCategorySchema = !1),
            (this.helperServices = null),
            (this.homePageFeaturedContent = null),
            (this.homePageFeaturedContentCount = null),
            (this.httpPort = null),
            (this.httpsPort = null),
            (this.id = null),
            (this.ipCntryCode = null),
            (this.isPortal = !1),
            (this.isReadOnly = !1),
            (this.layerTemplatesGroupQuery = null),
            (this.maxTokenExpirationMinutes = null),
            (this.modified = null),
            (this.name = null),
            (this.portalHostname = null),
            (this.portalMode = null),
            (this.portalProperties = null),
            (this.region = null),
            (this.rotatorPanels = null),
            (this.showHomePageDescription = !1),
            (this.sourceJSON = null),
            (this.supportsHostedServices = !1),
            (this.symbolSetsGroupQuery = null),
            (this.templatesGroupQuery = null),
            (this.units = null),
            (this.url = s.Z.portalUrl),
            (this.urlKey = null),
            (this.user = null),
            (this.useStandardizedQuery = !1),
            (this.useVectorBasemaps = !1),
            (this.vectorBasemapGalleryGroupQuery = null);
        }
        normalizeCtorArgs(e) {
          return 'string' == typeof e ? { url: e } : e;
        }
        destroy() {
          this._esriId_credentialCreateHandle &&
            (this._esriId_credentialCreateHandle.remove(),
            (this._esriId_credentialCreateHandle = null));
        }
        readAuthorizedCrossOriginDomains(e) {
          if (e)
            for (const t of e)
              -1 === s.Z.request.trustedServers.indexOf(t) &&
                s.Z.request.trustedServers.push(t);
          return e;
        }
        readDefaultBasemap(e) {
          return this._readBasemap(e);
        }
        readDefaultDevBasemap(e) {
          return this._readBasemap(e);
        }
        readDefaultVectorBasemap(e) {
          return this._readBasemap(e);
        }
        get extraQuery() {
          const e = !(this.user && this.user.orgId) || this.canSearchPublic;
          return this.id && !e ? ` AND orgid:${this.id}` : null;
        }
        get isOrganization() {
          return !!this.access;
        }
        get restUrl() {
          let e = this.url;
          if (e) {
            const t = e.indexOf('/sharing');
            (e = t > 0 ? e.substring(0, t) : this.url.replace(/\/+$/, '')),
              (e += '/sharing/rest');
          }
          return e;
        }
        get stylesGroupQuery() {
          return (
            (0, n.Mr)(d.Z.getLogger(this.declaredClass), 'stylesGroupQuery', {
              replacement: 'stylesGroupQuery3d',
              version: '4.21',
            }),
            this.stylesGroupQuery3d
          );
        }
        get thumbnailUrl() {
          const e = this.restUrl,
            t = this.thumbnail;
          return e && t
            ? this._normalizeSSL(e + '/portals/self/resources/' + t)
            : null;
        }
        readUrlKey(e) {
          return e ? e.toLowerCase() : e;
        }
        readUser(e) {
          let t = null;
          return e && ((t = O.default.fromJSON(e)), (t.portal = this)), t;
        }
        load(e) {
          const t = r
            .e(3668)
            .then(r.bind(r, 93668))
            .then(({ default: t }) => {
              (0, c.k_)(e), (q = t);
            })
            .then(() =>
              this.sourceJSON
                ? this.sourceJSON
                : this._fetchSelf(this.authMode, !1, e),
            )
            .then((e) => {
              if (i.id) {
                const e = i.id;
                (this.credential = e.findCredential(this.restUrl)),
                  this.credential ||
                    this.authMode !== w.AUTH_MODE_AUTO ||
                    (this._esriId_credentialCreateHandle = e.on(
                      'credential-create',
                      () => {
                        e.findCredential(this.restUrl) && this._signIn();
                      },
                    ));
              }
              (this.sourceJSON = e), this.read(e);
            });
          return this.addResolvingPromise(t), Promise.resolve(this);
        }
        async createClosestFacilityTask() {
          (0, n.XV)(d.Z.getLogger(this.declaredClass), null, {
            replacement:
              'Use helperServices url with esri/rest/closestFacility',
            version: '4.21',
          }),
            await this.load();
          const e = this._getHelperServiceUrl('closestFacility');
          return new (0,
          (
            await Promise.all([
              r.e(7319),
              r.e(1773),
              r.e(5318),
              r.e(7055),
            ]).then(r.bind(r, 17055))
          ).default)(e);
        }
        async createElevationLayers() {
          await this.load();
          const e = this._getHelperService('defaultElevationLayers'),
            t = (
              await Promise.all([r.e(9151), r.e(9932), r.e(2515)]).then(
                r.bind(r, 49932),
              )
            ).default;
          return e ? e.map((e) => new t({ id: e.id, url: e.url })) : [];
        }
        async createGeometryService() {
          (0, n.XV)(d.Z.getLogger(this.declaredClass), null, {
            replacement:
              'Use helperServices url with esri/rest/geometryService',
            version: '4.21',
          }),
            await this.load();
          const e = this._getHelperServiceUrl('geometry');
          return new (0, (await r.e(5313).then(r.bind(r, 85313))).default)({
            url: e,
          });
        }
        async createPrintTask() {
          (0, n.XV)(d.Z.getLogger(this.declaredClass), null, {
            replacement: 'Use helperServices url with esri/rest/print',
            version: '4.21',
          }),
            await this.load();
          const e = this._getHelperServiceUrl('printTask');
          return new (0,
          (
            await Promise.all([r.e(7319), r.e(1773), r.e(6619)]).then(
              r.bind(r, 16619),
            )
          ).default)(e);
        }
        async createRouteTask() {
          (0, n.XV)(d.Z.getLogger(this.declaredClass), null, {
            replacement: 'Use helperServices url with esri/rest/route',
            version: '4.21',
          }),
            await this.load();
          const e = this._getHelperServiceUrl('route');
          return new (0,
          (
            await Promise.all([
              r.e(7319),
              r.e(1773),
              r.e(5318),
              r.e(8234),
            ]).then(r.bind(r, 8234))
          ).default)(e);
        }
        async createServiceAreaTask() {
          (0, n.XV)(d.Z.getLogger(this.declaredClass), null, {
            replacement: 'Use helperServices url with esri/rest/serviceArea',
            version: '4.21',
          }),
            await this.load();
          const e = this._getHelperServiceUrl('serviceArea');
          return new (0,
          (
            await Promise.all([
              r.e(7319),
              r.e(1773),
              r.e(5318),
              r.e(7039),
            ]).then(r.bind(r, 57039))
          ).default)(e);
        }
        fetchBasemaps(e, t) {
          const r = new C.Z();
          return (
            (r.query =
              e ||
              (s.Z.apiKey && (0, U.r)(this.url)
                ? this.devBasemapGalleryGroupQuery
                : this.useVectorBasemaps
                ? this.vectorBasemapGalleryGroupQuery
                : this.basemapGalleryGroupQuery)),
            (r.disableExtraQuery = !0),
            this.queryGroups(r, t)
              .then((e) => {
                if (
                  ((r.num = 100),
                  (r.query = 'type:"Web Map" -type:"Web Application"'),
                  e.total)
                ) {
                  const o = e.results[0];
                  return (
                    (r.sortField = o.sortField || 'name'),
                    (r.sortOrder = o.sortOrder || 'desc'),
                    o.queryItems(r, t)
                  );
                }
                return null;
              })
              .then((e) => {
                let t;
                return (
                  (t =
                    e && e.total
                      ? e.results
                          .filter((e) => 'Web Map' === e.type)
                          .map((e) => new q({ portalItem: e }))
                      : []),
                  t
                );
              })
          );
        }
        fetchCategorySchema(e) {
          return this.hasCategorySchema
            ? this._request(
                this.restUrl + '/portals/self/categorySchema',
                e,
              ).then((e) => e.categorySchema)
            : (0, c.Hc)(e)
            ? Promise.reject((0, c.zE)())
            : Promise.resolve([]);
        }
        fetchFeaturedGroups(e) {
          const t = this.featuredGroups,
            r = new C.Z();
          if (((r.num = 100), (r.sortField = 'title'), t && t.length)) {
            const o = [];
            for (const e of t)
              o.push(`(title:"${e.title}" AND owner:${e.owner})`);
            return (
              (r.query = o.join(' OR ')),
              this.queryGroups(r, e).then((e) => e.results)
            );
          }
          return (0, c.Hc)(e)
            ? Promise.reject((0, c.zE)())
            : Promise.resolve([]);
        }
        fetchRegions(e) {
          var t;
          const r =
            (null == (t = this.user) ? void 0 : t.culture) ||
            this.culture ||
            (0, f.Kd)();
          return this._request(this.restUrl + '/portals/regions', {
            ...e,
            query: { culture: r },
          });
        }
        fetchSettings(e) {
          var t;
          const r =
            (null == (t = this.user) ? void 0 : t.culture) ||
            this.culture ||
            (0, f.Kd)();
          return this._request(this.restUrl + '/portals/self/settings', {
            ...e,
            query: { culture: r },
          });
        }
        static getDefault() {
          return (
            (w._default && !w._default.destroyed) || (w._default = new w()),
            w._default
          );
        }
        queryGroups(e, t) {
          return this._queryPortal('/community/groups', e, 'PortalGroup', t);
        }
        queryItems(e, t) {
          return this._queryPortal('/search', e, 'PortalItem', t);
        }
        queryUsers(e, t) {
          return (
            e.sortField || (e.sortField = 'username'),
            this._queryPortal('/community/users', e, 'PortalUser', t)
          );
        }
        toJSON() {
          throw new a.Z(
            'internal:not-yet-implemented',
            'Portal.toJSON is not yet implemented',
          );
        }
        static fromJSON(e) {
          if (!e) return null;
          if (e.declaredClass)
            throw new Error('JSON object is already hydrated');
          return new w({ sourceJSON: e });
        }
        _getHelperService(e) {
          const t = this.helperServices && this.helperServices[e];
          if (!t)
            throw new a.Z(
              'portal:service-not-found',
              `The \`helperServices\` do not include an entry named "${e}"`,
            );
          return t;
        }
        _getHelperServiceUrl(e) {
          const t = this._getHelperService(e);
          if (!t.url)
            throw new a.Z(
              'portal:service-url-not-found',
              `The \`helperServices\` entry "${e}" does not include a \`url\` value`,
            );
          return t.url;
        }
        _fetchSelf(e = this.authMode, t = !1, r) {
          const o = this.restUrl + '/portals/self',
            s = {
              authMode: e,
              query: { culture: (0, f.Kd)().toLowerCase() },
              ...r,
            };
          return (
            'auto' === s.authMode && (s.authMode = 'no-prompt'),
            t && (s.query.default = !0),
            this._request(o, s)
          );
        }
        _queryPortal(e, t, r, o) {
          const s = (0, m.se)(C.Z, t),
            i = (t) =>
              this._request(this.restUrl + e, {
                ...s.toRequestOptions(this),
                ...o,
              })
                .then((e) => {
                  const r = s.clone();
                  return (
                    (r.start = e.nextStart),
                    new P({
                      nextQueryParams: r,
                      queryParams: s,
                      total: e.total,
                      results: w._resultsToTypedArray(
                        t,
                        { portal: this },
                        e,
                        o,
                      ),
                    })
                  );
                })
                .then((e) =>
                  Promise.all(
                    e.results.map((t) =>
                      'function' == typeof t.when ? t.when() : e,
                    ),
                  ).then(
                    () => e,
                    (t) => ((0, c.r9)(t), e),
                  ),
                );
          return r && G[r]
            ? G[r]().then(({ default: e }) => ((0, c.k_)(o), i(e)))
            : i();
        }
        _signIn() {
          if (this.authMode === w.AUTH_MODE_ANONYMOUS)
            return Promise.reject(
              new a.Z(
                'portal:invalid-auth-mode',
                `Current "authMode"' is "${this.authMode}"`,
              ),
            );
          if ('failed' === this.loadStatus)
            return Promise.reject(this.loadError);
          const e = (e) =>
            Promise.resolve()
              .then(() =>
                'not-loaded' === this.loadStatus
                  ? (e || (this.authMode = 'immediate'),
                    this.load().then(() => null))
                  : 'loading' === this.loadStatus
                  ? this.load().then(() =>
                      this.credential
                        ? null
                        : ((this.credential = e), this._fetchSelf('immediate')),
                    )
                  : this.user && this.credential === e
                  ? null
                  : ((this.credential = e), this._fetchSelf('immediate')),
              )
              .then((e) => {
                e && ((this.sourceJSON = e), this.read(e));
              });
          return i.id
            ? i.id.getCredential(this.restUrl).then((t) => e(t))
            : e(this.credential);
        }
        _normalizeSSL(e) {
          return e.replace(/^http:/i, 'https:').replace(':7080', ':7443');
        }
        _normalizeUrl(e) {
          const t = this.credential && this.credential.token;
          return this._normalizeSSL(
            t ? e + (e.indexOf('?') > -1 ? '&' : '?') + 'token=' + t : e,
          );
        }
        _requestToTypedArray(e, t, r) {
          return this._request(e, t).then((e) => {
            const t = w._resultsToTypedArray(r, { portal: this }, e);
            return Promise.all(
              t.map((t) => ('function' == typeof t.when ? t.when() : e)),
            ).then(
              () => t,
              () => t,
            );
          });
        }
        _readBasemap(e) {
          if (e) {
            const t = q.fromJSON(e);
            return (t.portalItem = { portal: this }), t;
          }
          return null;
        }
        _request(e, t = {}) {
          const r = { f: 'json', ...t.query },
            {
              authMode: o = this.authMode === w.AUTH_MODE_ANONYMOUS
                ? 'anonymous'
                : 'auto',
              body: s = null,
              cacheBust: i = !1,
              method: n = 'auto',
              responseType: a = 'json',
              signal: u,
            } = t,
            p = {
              authMode: o,
              body: s,
              cacheBust: i,
              method: n,
              query: r,
              responseType: a,
              timeout: 0,
              signal: u,
            };
          return (0, l.default)(this._normalizeSSL(e), p).then((e) => e.data);
        }
        static _resultsToTypedArray(e, t, r, o) {
          let s;
          if (r) {
            const i = (0, h.pC)(o) ? o.signal : null;
            (s =
              r.listings ||
              r.notifications ||
              r.userInvitations ||
              r.tags ||
              r.items ||
              r.groups ||
              r.comments ||
              r.provisions ||
              r.results ||
              r.relatedItems ||
              r),
              (e || t) &&
                (s = s.map((r) => {
                  const o = Object.assign(e ? e.fromJSON(r) : r, t);
                  return 'function' == typeof o.load && o.load(i), o;
                }));
          } else s = [];
          return s;
        }
      });
      (D.AUTH_MODE_ANONYMOUS = 'anonymous'),
        (D.AUTH_MODE_AUTO = 'auto'),
        (D.AUTH_MODE_IMMEDIATE = 'immediate'),
        (0, o._)([(0, y.Cb)()], D.prototype, 'access', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'allSSL', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'authMode', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'authorizedCrossOriginDomains',
          void 0,
        ),
        (0, o._)(
          [(0, _.r)('authorizedCrossOriginDomains')],
          D.prototype,
          'readAuthorizedCrossOriginDomains',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'basemapGalleryGroupQuery',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'bingKey', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canListApps', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canListData', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'canListPreProvisionedItems',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'canProvisionDirectPurchase',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canSearchPublic', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canShareBingPublic', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canSharePublic', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canSignInArcGIS', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'canSignInIDP', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'colorSetsGroupQuery', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'commentsEnabled', void 0),
        (0, o._)([(0, y.Cb)({ type: Date })], D.prototype, 'created', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'credential', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'culture', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'currentVersion', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'customBaseUrl', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'defaultBasemap', void 0),
        (0, o._)(
          [(0, _.r)('defaultBasemap')],
          D.prototype,
          'readDefaultBasemap',
          null,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'defaultDevBasemap', void 0),
        (0, o._)(
          [(0, _.r)('defaultDevBasemap')],
          D.prototype,
          'readDefaultDevBasemap',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)({ type: b.Z })],
          D.prototype,
          'defaultExtent',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'defaultVectorBasemap', void 0),
        (0, o._)(
          [(0, _.r)('defaultVectorBasemap')],
          D.prototype,
          'readDefaultVectorBasemap',
          null,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'description', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'devBasemapGalleryGroupQuery',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'eueiEnabled', void 0),
        (0, o._)(
          [(0, y.Cb)({ readOnly: !0 })],
          D.prototype,
          'extraQuery',
          null,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'featuredGroups', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'featuredItemsGroupQuery', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'galleryTemplatesGroupQuery',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'livingAtlasGroupQuery', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'hasCategorySchema', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'helpBase', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'helperServices', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'helpMap', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'homePageFeaturedContent', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'homePageFeaturedContentCount',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'httpPort', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'httpsPort', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'id', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'ipCntryCode', void 0),
        (0, o._)(
          [(0, y.Cb)({ readOnly: !0 })],
          D.prototype,
          'isOrganization',
          null,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'isPortal', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'isReadOnly', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'layerTemplatesGroupQuery',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'maxTokenExpirationMinutes',
          void 0,
        ),
        (0, o._)([(0, y.Cb)({ type: Date })], D.prototype, 'modified', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'name', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'portalHostname', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'portalMode', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'portalProperties', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'region', void 0),
        (0, o._)([(0, y.Cb)({ readOnly: !0 })], D.prototype, 'restUrl', null),
        (0, o._)([(0, y.Cb)()], D.prototype, 'rotatorPanels', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'showHomePageDescription', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'sourceJSON', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'staticImagesUrl', void 0),
        (0, o._)(
          [(0, y.Cb)({ readOnly: !0, json: { read: !1 } })],
          D.prototype,
          'stylesGroupQuery',
          null,
        ),
        (0, o._)(
          [(0, y.Cb)({ json: { name: '2DStylesGroupQuery' } })],
          D.prototype,
          'stylesGroupQuery2d',
          void 0,
        ),
        (0, o._)(
          [(0, y.Cb)({ json: { name: 'stylesGroupQuery' } })],
          D.prototype,
          'stylesGroupQuery3d',
          void 0,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'supportsHostedServices', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'symbolSetsGroupQuery', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'templatesGroupQuery', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'thumbnail', void 0),
        (0, o._)(
          [(0, y.Cb)({ readOnly: !0 })],
          D.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, o._)([(0, y.Cb)()], D.prototype, 'units', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'url', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'urlKey', void 0),
        (0, o._)([(0, _.r)('urlKey')], D.prototype, 'readUrlKey', null),
        (0, o._)([(0, y.Cb)()], D.prototype, 'user', void 0),
        (0, o._)([(0, _.r)('user')], D.prototype, 'readUser', null),
        (0, o._)([(0, y.Cb)()], D.prototype, 'useStandardizedQuery', void 0),
        (0, o._)([(0, y.Cb)()], D.prototype, 'useVectorBasemaps', void 0),
        (0, o._)(
          [(0, y.Cb)()],
          D.prototype,
          'vectorBasemapGalleryGroupQuery',
          void 0,
        ),
        (D = w = (0, o._)([(0, v.j)('esri.portal.Portal')], D));
      const E = D;
    },
    68916: (e, t, r) => {
      r.r(t), r.d(t, { default: () => d });
      var o = r(43697),
        s = r(20102),
        i = r(96674),
        l = r(5600),
        n = (r(67676), r(80442), r(75215)),
        a = r(52011),
        u = r(41253);
      let p = class extends i.wq {
        constructor(e) {
          super(e),
            (this.access = null),
            (this.created = null),
            (this.description = null),
            (this.id = null),
            (this.isInvitationOnly = !1),
            (this.modified = null),
            (this.owner = null),
            (this.portal = null),
            (this.snippet = null),
            (this.sortField = null),
            (this.sortOrder = null),
            (this.tags = null),
            (this.title = null);
        }
        get thumbnailUrl() {
          const e = this.url,
            t = this.thumbnail;
          return e && t
            ? this.portal._normalizeUrl(`${e}/info/${t}?f=json`)
            : null;
        }
        get url() {
          const e = this.get('portal.restUrl');
          return e ? e + '/community/groups/' + this.id : null;
        }
        fetchCategorySchema(e) {
          return this.portal
            ._request(this.url + '/categorySchema', e)
            .then((t) => {
              const r = t.categorySchema || [];
              return r.some(
                (e) => 'contentCategorySetsGroupQuery.LivingAtlas' === e.source,
              )
                ? this._fetchCategorySchemaSet('LivingAtlas', e)
                : r;
            });
        }
        fetchMembers(e) {
          return this.portal._request(this.url + '/users', e);
        }
        getThumbnailUrl(e) {
          let t = this.thumbnailUrl;
          return t && e && (t += `&w=${e}`), t;
        }
        toJSON() {
          throw new s.Z(
            'internal:not-yet-implemented',
            'PortalGroup.toJSON is not yet implemented',
          );
        }
        queryItems(e, t) {
          let r = (0, n.se)(u.Z, e);
          return parseFloat(this.portal.currentVersion) > 5
            ? ((r = r || new u.Z()),
              this.portal._queryPortal(
                `/content/groups/${this.id}/search`,
                r,
                'PortalItem',
                t,
              ))
            : ((r = r ? r.clone() : new u.Z()),
              (r.query = 'group:' + this.id + (r.query ? ' ' + r.query : '')),
              this.portal.queryItems(r, t));
        }
        _fetchCategorySchemaSet(e, t) {
          return this.portal
            ._fetchSelf(this.portal.authMode, !0, t)
            .then((e) => {
              const r = e.contentCategorySetsGroupQuery;
              if (r) {
                const e = new u.Z();
                return (
                  (e.disableExtraQuery = !0),
                  (e.num = 1),
                  (e.query = r),
                  this.portal.queryGroups(e, t)
                );
              }
              throw new s.Z(
                'portal-group:fetchCategorySchema',
                'contentCategorySetsGroupQuery value not found',
              );
            })
            .then((r) => {
              if (r.total) {
                const o = r.results[0],
                  s = new u.Z();
                return (
                  (s.num = 1),
                  (s.query = `typekeywords:"${e}"`),
                  o.queryItems(s, t)
                );
              }
              throw new s.Z(
                'portal-group:fetchCategorySchema',
                'contentCategorySetsGroupQuery group not found',
              );
            })
            .then((e) =>
              e.total
                ? e.results[0].fetchData('json', t).then((e) => {
                    const t = e && e.categorySchema;
                    return t && t.length ? t : [];
                  })
                : [],
            );
        }
      };
      (0, o._)([(0, l.Cb)()], p.prototype, 'access', void 0),
        (0, o._)([(0, l.Cb)({ type: Date })], p.prototype, 'created', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'description', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'id', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'isInvitationOnly', void 0),
        (0, o._)([(0, l.Cb)({ type: Date })], p.prototype, 'modified', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'owner', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'portal', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'snippet', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'sortField', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'sortOrder', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'tags', void 0),
        (0, o._)([(0, l.Cb)()], p.prototype, 'thumbnail', void 0),
        (0, o._)(
          [(0, l.Cb)({ readOnly: !0 })],
          p.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, o._)([(0, l.Cb)()], p.prototype, 'title', void 0),
        (0, o._)([(0, l.Cb)({ readOnly: !0 })], p.prototype, 'url', null),
        (p = (0, o._)([(0, a.j)('esri.portal.PortalGroup')], p));
      const d = p;
    },
    41253: (e, t, r) => {
      r.d(t, { Z: () => _ });
      var o,
        s = r(43697),
        i = r(15923),
        l = r(35454),
        n = r(22974),
        a = r(70586),
        u = r(5600),
        p = (r(75215), r(52011)),
        d = r(6570),
        h = r(82971),
        c = r(40488);
      const y = new l.X({
        avgRating: 'avg-rating',
        numRatings: 'num-ratings',
        numComments: 'num-comments',
        numViews: 'num-views',
      });
      let m = (o = class extends i.Z {
        constructor(e) {
          super(e),
            (this.categories = null),
            (this.disableExtraQuery = !1),
            (this.extent = null),
            (this.filter = null),
            (this.num = 10),
            (this.query = null),
            (this.sortField = null),
            (this.start = 1);
        }
        get sortOrder() {
          return this._get('sortOrder') || 'asc';
        }
        set sortOrder(e) {
          ('asc' !== e && 'desc' !== e) || this._set('sortOrder', e);
        }
        clone() {
          return new o({
            categories: this.categories ? (0, n.d9)(this.categories) : null,
            disableExtraQuery: this.disableExtraQuery,
            extent: this.extent ? this.extent.clone() : null,
            filter: this.filter,
            num: this.num,
            query: this.query,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            start: this.start,
          });
        }
        toRequestOptions(e, t) {
          let r, o;
          if (
            (this.categories &&
              (r = this.categories.map((e) =>
                Array.isArray(e) ? JSON.stringify(e) : e,
              )),
            this.extent)
          ) {
            const e = (0, c.iV)(this.extent, h.Z.WGS84);
            (0, a.pC)(e) && (o = `${e.xmin},${e.ymin},${e.xmax},${e.ymax}`);
          }
          let s = this.query;
          !this.disableExtraQuery &&
            e.extraQuery &&
            (s = '(' + s + ')' + e.extraQuery);
          const i = {
            categories: r,
            bbox: o,
            q: s,
            filter: this.filter,
            num: this.num,
            sortField: null,
            sortOrder: null,
            start: this.start,
          };
          return (
            this.sortField &&
              ((i.sortField = this.sortField
                .split(',')
                .map((e) => y.toJSON(e.trim()))
                .join(',')),
              (i.sortOrder = this.sortOrder)),
            { query: { ...t, ...i } }
          );
        }
      });
      (0, s._)([(0, u.Cb)()], m.prototype, 'categories', void 0),
        (0, s._)([(0, u.Cb)()], m.prototype, 'disableExtraQuery', void 0),
        (0, s._)([(0, u.Cb)({ type: d.Z })], m.prototype, 'extent', void 0),
        (0, s._)([(0, u.Cb)()], m.prototype, 'filter', void 0),
        (0, s._)([(0, u.Cb)()], m.prototype, 'num', void 0),
        (0, s._)([(0, u.Cb)()], m.prototype, 'query', void 0),
        (0, s._)([(0, u.Cb)()], m.prototype, 'sortField', void 0),
        (0, s._)([(0, u.Cb)()], m.prototype, 'sortOrder', null),
        (0, s._)([(0, u.Cb)()], m.prototype, 'start', void 0),
        (m = o = (0, s._)([(0, p.j)('esri.portal.PortalQueryParams')], m));
      const _ = m;
    },
    86082: (e, t, r) => {
      r.r(t), r.d(t, { default: () => c });
      var o = r(43697),
        s = r(20102),
        i = r(96674),
        l = r(5600),
        n = (r(67676), r(80442), r(75215), r(52011));
      let a = class extends i.wq {
        constructor(e) {
          super(e),
            (this.created = null),
            (this.id = null),
            (this.portal = null),
            (this.title = null),
            (this.username = null);
        }
        get url() {
          const e = this.get('portal.restUrl');
          return e ? `${e}/content/users/${this.username}/${this.id}` : null;
        }
        toJSON() {
          throw new s.Z(
            'internal:not-yet-implemented',
            'PortalFolder.toJSON is not yet implemented',
          );
        }
      };
      (0, o._)([(0, l.Cb)({ type: Date })], a.prototype, 'created', void 0),
        (0, o._)([(0, l.Cb)()], a.prototype, 'id', void 0),
        (0, o._)([(0, l.Cb)()], a.prototype, 'portal', void 0),
        (0, o._)([(0, l.Cb)()], a.prototype, 'title', void 0),
        (0, o._)([(0, l.Cb)({ readOnly: !0 })], a.prototype, 'url', null),
        (0, o._)([(0, l.Cb)()], a.prototype, 'username', void 0),
        (a = (0, o._)([(0, n.j)('esri.portal.PortalFolder')], a));
      const u = a;
      var p,
        d = r(68916);
      let h = (p = class extends i.wq {
        constructor(...e) {
          super(...e),
            (this.access = null),
            (this.created = null),
            (this.culture = null),
            (this.description = null),
            (this.email = null),
            (this.fullName = null),
            (this.modified = null),
            (this.orgId = null),
            (this.portal = null),
            (this.preferredView = null),
            (this.privileges = null),
            (this.region = null),
            (this.role = null),
            (this.roleId = null),
            (this.sourceJSON = null),
            (this.units = null),
            (this.username = null),
            (this.userType = null);
        }
        get thumbnailUrl() {
          const e = this.url,
            t = this.thumbnail;
          return e && t
            ? this.portal._normalizeUrl(`${e}/info/${t}?f=json`)
            : null;
        }
        get userContentUrl() {
          const e = this.get('portal.restUrl');
          return e ? `${e}/content/users/${this.username}` : null;
        }
        get url() {
          const e = this.get('portal.restUrl');
          return e ? `${e}/community/users/${this.username}` : null;
        }
        addItem(e) {
          const t = e && e.item,
            r = e && e.data,
            o = e && e.folder,
            s = { method: 'post' };
          t &&
            ((s.query = t.createPostQuery()),
            null != r &&
              ('string' == typeof r
                ? (s.query.text = r)
                : 'object' == typeof r && (s.query.text = JSON.stringify(r))));
          let i = this.userContentUrl;
          return (
            o && (i += '/' + ('string' == typeof o ? o : o.id)),
            this.portal
              ._request(i + '/addItem', s)
              .then(
                (e) => (
                  (t.id = e.id),
                  (t.portal = this.portal),
                  t.loaded ? t.reload() : t.load()
                ),
              )
          );
        }
        deleteItem(e) {
          let t = this.userContentUrl;
          return (
            e.ownerFolder && (t += '/' + e.ownerFolder),
            this.portal
              ._request(t + `/items/${e.id}/delete`, { method: 'post' })
              .then(() => {
                (e.id = null), (e.portal = null);
              })
          );
        }
        deleteItems(e) {
          const t = this.userContentUrl + '/deleteItems',
            r = e.map((e) => e.id);
          if (r.length) {
            const o = { method: 'post', query: { items: r.join(',') } };
            return this.portal._request(t, o).then(() => {
              e.forEach((e) => {
                (e.id = null), (e.portal = null);
              });
            });
          }
          return Promise.resolve(void 0);
        }
        fetchFolders() {
          return this.portal
            ._request(this.userContentUrl, { query: { num: 1 } })
            .then((e) => {
              let t;
              return (
                (t =
                  e && e.folders
                    ? e.folders.map((e) => {
                        const t = u.fromJSON(e);
                        return (t.portal = this.portal), t;
                      })
                    : []),
                t
              );
            });
        }
        fetchGroups() {
          return this.portal._request(this.url).then((e) => {
            let t;
            return (
              (t =
                e && e.groups
                  ? e.groups.map((e) => {
                      const t = d.default.fromJSON(e);
                      return (t.portal = this.portal), t;
                    })
                  : []),
              t
            );
          });
        }
        fetchItems(e) {
          e || (e = {});
          let t,
            o = this.userContentUrl;
          return (
            e.folder && (o += '/' + e.folder.id),
            r
              .e(5235)
              .then(r.bind(r, 15235))
              .then(({ default: r }) => {
                t = r;
                const s = {
                  folders: !1,
                  num: e.num || 10,
                  start: e.start || 1,
                  sortField: e.sortField || 'created',
                  sortOrder: e.sortOrder || 'asc',
                };
                return this.portal._request(o, { query: s });
              })
              .then((e) => {
                let r;
                return e && e.items
                  ? ((r = e.items.map((e) => {
                      const r = t.fromJSON(e);
                      return (r.portal = this.portal), r;
                    })),
                    Promise.all(r.map((e) => e.load()))
                      .catch((e) => e)
                      .then(() => ({
                        items: r,
                        nextStart: e.nextStart,
                        total: e.total,
                      })))
                  : { items: [], nextStart: -1, total: 0 };
              })
          );
        }
        fetchTags() {
          return this.portal._request(this.url + '/tags').then((e) => e.tags);
        }
        getThumbnailUrl(e) {
          let t = this.thumbnailUrl;
          return t && e && (t += `&w=${e}`), t;
        }
        queryFavorites(e) {
          return this.favGroupId
            ? (this._favGroup ||
                (this._favGroup = new d.default({
                  id: this.favGroupId,
                  portal: this.portal,
                })),
              this._favGroup.queryItems(e))
            : Promise.reject(
                new s.Z('internal:unknown', 'Unknown internal error', {
                  internalError: 'Unknown favGroupId',
                }),
              );
        }
        toJSON() {
          throw new s.Z(
            'internal:not-yet-implemented',
            'PortalGroup.toJSON is not yet implemented',
          );
        }
        static fromJSON(e) {
          if (!e) return null;
          if (e.declaredClass)
            throw new Error('JSON object is already hydrated');
          const t = new p();
          return (t.sourceJSON = e), t.read(e), t;
        }
      });
      (0, o._)([(0, l.Cb)()], h.prototype, 'access', void 0),
        (0, o._)([(0, l.Cb)({ type: Date })], h.prototype, 'created', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'culture', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'description', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'email', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'favGroupId', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'fullName', void 0),
        (0, o._)([(0, l.Cb)({ type: Date })], h.prototype, 'modified', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'orgId', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'portal', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'preferredView', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'privileges', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'region', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'role', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'roleId', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'sourceJSON', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'thumbnail', void 0),
        (0, o._)(
          [(0, l.Cb)({ readOnly: !0 })],
          h.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, o._)([(0, l.Cb)()], h.prototype, 'units', void 0),
        (0, o._)(
          [(0, l.Cb)({ readOnly: !0 })],
          h.prototype,
          'userContentUrl',
          null,
        ),
        (0, o._)([(0, l.Cb)({ readOnly: !0 })], h.prototype, 'url', null),
        (0, o._)([(0, l.Cb)()], h.prototype, 'username', void 0),
        (0, o._)([(0, l.Cb)()], h.prototype, 'userType', void 0),
        (h = p = (0, o._)([(0, n.j)('esri.portal.PortalUser')], h));
      const c = h;
    },
    27391: (e, t, r) => {
      r.d(t, {
        wm: () => v,
        n2: () => d,
        KV: () => h,
        EJ: () => y,
        v9: () => c,
      });
      var o = r(3172),
        s = r(20102),
        i = r(95330),
        l = r(17452),
        n = r(65587),
        a = r(41253),
        u = r(80442);
      const p = {};
      function d(e, t, r) {
        return e.styleUrl
          ? (async function (e, t) {
              try {
                return {
                  data: (await y(e, t)).data,
                  baseUrl: (0, l.Yd)(e),
                  styleUrl: e,
                };
              } catch (e) {
                return (0, i.r9)(e), null;
              }
            })(e.styleUrl, r)
          : e.styleName
          ? (function (e, t, r) {
              const o = (t && t.portal) || n.Z.getDefault();
              let i;
              const l = `${o.url} - ${o.user && o.user.username} - ${e}`;
              return (
                p[l] ||
                  (p[l] = (function (e, t, r) {
                    return t
                      .load(r)
                      .then(() => {
                        const o = new a.Z({
                          disableExtraQuery: !0,
                          query: `owner:${m} AND type:${_} AND typekeywords:"${e}"`,
                        });
                        return t.queryItems(o, r);
                      })
                      .then(({ results: t }) => {
                        let o = null;
                        const i = e.toLowerCase();
                        if (t && Array.isArray(t))
                          for (const e of t)
                            if (
                              e.typeKeywords.some(
                                (e) => e.toLowerCase() === i,
                              ) &&
                              e.type === _ &&
                              e.owner === m
                            ) {
                              o = e;
                              break;
                            }
                        if (!o)
                          throw new s.Z(
                            'symbolstyleutils:style-not-found',
                            `The style '${e}' could not be found`,
                            { styleName: e },
                          );
                        return o.load(r);
                      });
                  })(e, o, r)
                    .then((e) => ((i = e), e.fetchData()))
                    .then((t) => ({
                      data: t,
                      baseUrl: i.itemUrl,
                      styleName: e,
                    }))),
                p[l]
              );
            })(e.styleName, t, r)
          : Promise.reject(
              new s.Z(
                'symbolstyleutils:style-url-and-name-missing',
                'Either styleUrl or styleName is required to resolve a style',
              ),
            );
      }
      function h(e) {
        return null === e || 'CIMSymbolReference' === e.type
          ? e
          : { type: 'CIMSymbolReference', symbol: e };
      }
      function c(e, t) {
        if ('cimRef' === t) return e.cimRef;
        if (e.formatInfos && !(0, u.Z)('enable-feature:force-wosr'))
          for (const t of e.formatInfos) if ('gltf' === t.type) return t.href;
        return e.webRef;
      }
      function y(e, t) {
        const r = { responseType: 'json', query: { f: 'json' }, ...t };
        return (0, o.default)((0, l.Fv)(e), r);
      }
      const m = 'esri_en',
        _ = 'Style',
        v =
          'https://cdn.arcgis.com/sharing/rest/content/items/220936cc6ed342c9937abd8f180e7d1e/resources/styles/cim/{SymbolName}.json?f=json';
    },
  },
]);
