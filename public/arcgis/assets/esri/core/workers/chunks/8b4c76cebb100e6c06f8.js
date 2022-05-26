'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [5235],
  {
    15235: (e, t, i) => {
      i.r(t), i.d(t, { default: () => I });
      var r = i(43697),
        o = i(99880),
        a = i(20102),
        s = i(96674),
        n = i(22974),
        l = i(83379),
        p = i(70586),
        c = i(17452),
        d = i(5600),
        u = i(75215),
        h = i(71715),
        m = i(52011),
        g = i(6570),
        y = i(65587),
        b = i(15923),
        v = i(92604),
        f = (i(67676), i(80442), i(90578));
      const w = v.Z.getLogger('esri.portal.PortalItemResource');
      let x = class extends b.Z {
        constructor(e) {
          super(e), (this.portalItem = null);
        }
        normalizeCtorArgs(e) {
          return e && e.portalItem && e.path
            ? { ...e, path: this._normalizePath(e.path, e.portalItem) }
            : e;
        }
        set path(e) {
          (0, p.pC)(e) && (0, c.YP)(e)
            ? w.error(
                'portalitemresource:invalid-path',
                'A portal item resource path must be relative',
              )
            : this._set('path', e);
        }
        _castPath(e) {
          return this._normalizePath(e, this.portalItem);
        }
        get url() {
          return this.portalItem && this.path
            ? `${this.portalItem.itemUrl}/resources/${this.path}`
            : null;
        }
        get itemRelativeUrl() {
          return this.portalItem && this.path
            ? `./resources/${this.path}`
            : null;
        }
        fetch(e = 'json', t) {
          const i = this.url;
          if ((0, p.Wi)(i))
            throw new a.Z(
              'portal-item-resource:fetch',
              'Portal item resource does not refer to a valid item or path',
            );
          return this.portalItem.portal._request(i, {
            responseType: e,
            query: { token: this.portalItem.apiKey },
            signal: (0, p.U2)(t, 'signal'),
          });
        }
        async update(e, t) {
          return (await i.e(7873).then(i.bind(i, 97873))).addOrUpdateResource(
            this,
            'update',
            e,
            t,
          );
        }
        hasPath() {
          return (0, p.pC)(this.path);
        }
        _normalizePath(e, t) {
          return (0, p.Wi)(e)
            ? e
            : ((e = e.replace(/^\/+/, '')),
              (0, p.pC)(t) && (0, c.YP)(e) && (e = (0, c.PF)(e, t.itemUrl)),
              e.replace(/^\/+/, '').replace(/^(\.\/)?resources\//, ''));
        }
      };
      (0, r._)([(0, d.Cb)()], x.prototype, 'portalItem', void 0),
        (0, r._)(
          [(0, d.Cb)({ type: String, value: null })],
          x.prototype,
          'path',
          null,
        ),
        (0, r._)([(0, f.p)('path')], x.prototype, '_castPath', null),
        (0, r._)(
          [(0, d.Cb)({ type: String, readOnly: !0 })],
          x.prototype,
          'url',
          null,
        ),
        (0, r._)(
          [(0, d.Cb)({ type: String, readOnly: !0 })],
          x.prototype,
          'itemRelativeUrl',
          null,
        ),
        (x = (0, r._)([(0, m.j)('esri.portal.PortalItemResource')], x));
      const k = x;
      let C = class extends b.Z {
        constructor(e) {
          super(e), (this.created = null), (this.rating = null);
        }
      };
      (0, r._)([(0, d.Cb)()], C.prototype, 'created', void 0),
        (0, r._)([(0, d.Cb)()], C.prototype, 'rating', void 0),
        (C = (0, r._)([(0, m.j)('esri.portal.PortalRating')], C));
      const O = C;
      var _;
      let S = (_ = class extends (0, s.eC)(l.Z) {
        constructor(e) {
          super(e),
            (this.access = null),
            (this.accessInformation = null),
            (this.apiKey = null),
            (this.applicationProxies = null),
            (this.avgRating = null),
            (this.categories = null),
            (this.created = null),
            (this.culture = null),
            (this.description = null),
            (this.extent = null),
            (this.groupCategories = null),
            (this.id = null),
            (this.itemControl = null),
            (this.licenseInfo = null),
            (this.modified = null),
            (this.name = null),
            (this.numComments = null),
            (this.numRatings = null),
            (this.numViews = null),
            (this.owner = null),
            (this.ownerFolder = null),
            (this.portal = null),
            (this.screenshots = null),
            (this.size = null),
            (this.snippet = null),
            (this.sourceJSON = null),
            (this.tags = null),
            (this.title = null),
            (this.type = null),
            (this.typeKeywords = null),
            (this.url = null);
        }
        static from(e) {
          return (0, u.TJ)(_, e);
        }
        destroy() {
          this.portal = null;
        }
        get displayName() {
          const e = this.type,
            t = this.typeKeywords || [];
          let i = e;
          return (
            'Feature Service' === e || 'Feature Collection' === e
              ? (i =
                  t.indexOf('Table') > -1
                    ? 'Table'
                    : t.indexOf('Route Layer') > -1
                    ? 'Route Layer'
                    : t.indexOf('Markup') > -1
                    ? 'Markup'
                    : 'Feature Layer')
              : 'Image Service' === e
              ? (i =
                  t.indexOf('Elevation 3D Layer') > -1
                    ? 'Elevation Layer'
                    : t.indexOf('Tiled Imagery') > -1
                    ? 'Tiled Imagery Layer'
                    : 'Imagery Layer')
              : 'Scene Service' === e
              ? (i = 'Scene Layer')
              : 'Media Service' === e
              ? (i = 'Media Layer')
              : 'Scene Package' === e
              ? (i = 'Scene Layer Package')
              : 'Stream Service' === e
              ? (i = 'Feature Layer')
              : 'Geoprocessing Service' === e &&
                this.portal &&
                this.portal.isPortal
              ? (i =
                  t.indexOf('Web Tool') > -1 ? 'Tool' : 'Geoprocessing Service')
              : 'Geocoding Service' === e
              ? (i = 'Locator')
              : 'Geoenrichment Service' === e
              ? (i = 'GeoEnrichment Service')
              : 'Microsoft Powerpoint' === e
              ? (i = 'Microsoft PowerPoint')
              : 'GeoJson' === e
              ? (i = 'GeoJSON')
              : 'Globe Service' === e
              ? (i = 'Globe Layer')
              : 'Vector Tile Service' === e
              ? (i = 'Tile Layer')
              : 'netCDF' === e
              ? (i = 'NetCDF')
              : 'Map Service' === e
              ? (i =
                  -1 === t.indexOf('Spatiotemporal') &&
                  (t.indexOf('Hosted Service') > -1 ||
                    t.indexOf('Tiled') > -1) &&
                  -1 === t.indexOf('Relational')
                    ? 'Tile Layer'
                    : 'Map Image Layer')
              : e && e.toLowerCase().indexOf('add in') > -1
              ? (i = e.replace(/(add in)/gi, 'Add-In'))
              : 'datastore catalog service' === e
              ? (i = 'Big Data File Share')
              : 'Compact Tile Package' === e
              ? (i = 'Tile Package (tpkx)')
              : 'OGCFeatureServer' === e
              ? (i = 'OGC Feature Layer')
              : 'web mapping application' === e &&
                t.indexOf('configurableApp') > -1 &&
                (i = 'Instant App'),
            i
          );
        }
        readExtent(e) {
          return e && e.length
            ? new g.Z(e[0][0], e[0][1], e[1][0], e[1][1])
            : null;
        }
        get iconUrl() {
          const e = (this.type && this.type.toLowerCase()) || '',
            t = this.typeKeywords || [];
          let i,
            r = !1,
            a = !1,
            s = !1,
            n = !1,
            l = !1,
            p = !1;
          return (
            e.indexOf('service') > 0 ||
            'feature collection' === e ||
            'kml' === e ||
            'wms' === e ||
            'wmts' === e ||
            'wfs' === e
              ? ((r = t.indexOf('Hosted Service') > -1),
                'feature service' === e ||
                'feature collection' === e ||
                'kml' === e ||
                'wfs' === e
                  ? ((a = t.indexOf('Table') > -1),
                    (s = t.indexOf('Route Layer') > -1),
                    (n = t.indexOf('Markup') > -1),
                    (l = -1 !== t.indexOf('Spatiotemporal')),
                    (p = -1 !== t.indexOf('UtilityNetwork')),
                    (i =
                      l && a
                        ? 'spatiotemporaltable'
                        : a
                        ? 'table'
                        : s
                        ? 'routelayer'
                        : n
                        ? 'markup'
                        : l
                        ? 'spatiotemporal'
                        : r
                        ? 'featureshosted'
                        : p
                        ? 'utilitynetwork'
                        : 'features'))
                  : (i =
                      'map service' === e || 'wms' === e || 'wmts' === e
                        ? r || t.indexOf('Tiled') > -1 || 'wmts' === e
                          ? 'maptiles'
                          : 'mapimages'
                        : 'scene service' === e
                        ? t.indexOf('Line') > -1
                          ? 'sceneweblayerline'
                          : t.indexOf('3DObject') > -1
                          ? 'sceneweblayermultipatch'
                          : t.indexOf('Point') > -1
                          ? 'sceneweblayerpoint'
                          : t.indexOf('IntegratedMesh') > -1
                          ? 'sceneweblayermesh'
                          : t.indexOf('PointCloud') > -1
                          ? 'sceneweblayerpointcloud'
                          : t.indexOf('Polygon') > -1
                          ? 'sceneweblayerpolygon'
                          : t.indexOf('Building') > -1
                          ? 'sceneweblayerbuilding'
                          : t.indexOf('Voxel') > -1
                          ? 'sceneweblayervoxel'
                          : 'sceneweblayer'
                        : 'image service' === e
                        ? t.indexOf('Elevation 3D Layer') > -1
                          ? 'elevationlayer'
                          : t.indexOf('Tiled Imagery') > -1
                          ? 'tiledimagerylayer'
                          : 'imagery'
                        : 'stream service' === e
                        ? 'streamlayer'
                        : 'media service' === e
                        ? 'mediaservice'
                        : 'vector tile service' === e
                        ? 'vectortile'
                        : 'datastore catalog service' === e
                        ? 'datastorecollection'
                        : 'geocoding service' === e
                        ? 'geocodeservice'
                        : 'geoprocessing service' === e &&
                          t.indexOf('Web Tool') > -1 &&
                          this.portal &&
                          this.portal.isPortal
                        ? 'tool'
                        : 'layers'))
              : (i =
                  'web map' === e || 'cityengine web scene' === e
                    ? 'maps'
                    : 'web scene' === e
                    ? t.indexOf('ViewingMode-Local') > -1
                      ? 'webscenelocal'
                      : 'websceneglobal'
                    : 'web mapping application' === e &&
                      t.indexOf('configurableApp') > -1
                    ? 'instantapps'
                    : 'web mapping application' === e ||
                      'mobile application' === e ||
                      'application' === e ||
                      'operation view' === e ||
                      'desktop application' === e
                    ? 'apps'
                    : 'map document' === e ||
                      'map package' === e ||
                      'published map' === e ||
                      'scene document' === e ||
                      'globe document' === e ||
                      'basemap package' === e ||
                      'mobile basemap package' === e ||
                      'mobile map package' === e ||
                      'project package' === e ||
                      'project template' === e ||
                      'pro map' === e ||
                      'layout' === e ||
                      ('layer' === e && t.indexOf('ArcGIS Pro') > -1) ||
                      ('explorer map' === e && t.indexOf('Explorer Document'))
                    ? 'mapsgray'
                    : 'service definition' === e ||
                      'csv' === e ||
                      'shapefile' === e ||
                      'cad drawing' === e ||
                      'geojson' === e ||
                      '360 vr experience' === e ||
                      'netcdf' === e ||
                      'administrative report' === e
                    ? 'datafiles'
                    : 'explorer add in' === e ||
                      'desktop add in' === e ||
                      'windows viewer add in' === e ||
                      'windows viewer configuration' === e
                    ? 'appsgray'
                    : 'arcgis pro add in' === e ||
                      'arcgis pro configuration' === e
                    ? 'addindesktop'
                    : 'rule package' === e ||
                      'file geodatabase' === e ||
                      'sqlite geodatabase' === e ||
                      'csv collection' === e ||
                      'kml collection' === e ||
                      'windows mobile package' === e ||
                      'map template' === e ||
                      'desktop application template' === e ||
                      'gml' === e ||
                      'arcpad package' === e ||
                      'code sample' === e ||
                      'form' === e ||
                      'document link' === e ||
                      'earth configuration' === e ||
                      'operations dashboard add in' === e ||
                      'rules package' === e ||
                      'image' === e ||
                      'workflow manager package' === e ||
                      ('explorer map' === e &&
                        t.indexOf('Explorer Mapping Application') > -1) ||
                      t.indexOf('Document') > -1
                    ? 'datafilesgray'
                    : 'network analysis service' === e ||
                      'geoprocessing service' === e ||
                      'geodata service' === e ||
                      'geometry service' === e ||
                      'geoprocessing package' === e ||
                      'locator package' === e ||
                      'geoprocessing sample' === e ||
                      'workflow manager service' === e
                    ? 'toolsgray'
                    : 'layer' === e ||
                      'layer package' === e ||
                      'explorer layer' === e
                    ? 'layersgray'
                    : 'scene package' === e
                    ? 'scenepackage'
                    : 'mobile scene package' === e
                    ? 'mobilescenepackage'
                    : 'tile package' === e || 'compact tile package' === e
                    ? 'tilepackage'
                    : 'task file' === e
                    ? 'taskfile'
                    : 'report template' === e
                    ? 'report-template'
                    : 'statistical data collection' === e
                    ? 'statisticaldatacollection'
                    : 'insights workbook' === e
                    ? 'workbook'
                    : 'insights model' === e
                    ? 'insightsmodel'
                    : 'insights page' === e
                    ? 'insightspage'
                    : 'insights theme' === e
                    ? 'insightstheme'
                    : 'hub initiative' === e
                    ? 'hubinitiative'
                    : 'hubpage' === e
                    ? 'hubpage'
                    : 'hub event' === e
                    ? 'hubevent'
                    : 'hub site application' === e
                    ? 'hubsite'
                    : 'hub project' === e
                    ? 'hubproject'
                    : 'relational database connection' === e
                    ? 'relationaldatabaseconnection'
                    : 'big data file share' === e
                    ? 'datastorecollection'
                    : 'image collection' === e
                    ? 'imagecollection'
                    : 'style' === e
                    ? 'style'
                    : 'desktop style' === e
                    ? 'desktopstyle'
                    : 'dashboard' === e
                    ? 'dashboard'
                    : 'raster function template' === e
                    ? 'rasterprocessingtemplate'
                    : 'vector tile package' === e
                    ? 'vectortilepackage'
                    : 'ortho mapping project' === e
                    ? 'orthomappingproject'
                    : 'ortho mapping template' === e
                    ? 'orthomappingtemplate'
                    : 'solution' === e
                    ? 'solutions'
                    : 'geopackage' === e
                    ? 'geopackage'
                    : 'deep learning package' === e
                    ? 'deeplearningpackage'
                    : 'real time analytic' === e
                    ? 'realtimeanalytics'
                    : 'big data analytic' === e
                    ? 'bigdataanalytics'
                    : 'feed' === e
                    ? 'feed'
                    : 'excalibur imagery project' === e
                    ? 'excaliburimageryproject'
                    : 'notebook' === e
                    ? 'notebook'
                    : 'storymap' === e
                    ? 'storymap'
                    : 'survey123 add in' === e
                    ? 'survey123addin'
                    : 'mission' === e
                    ? 'mission'
                    : 'mission report' === e
                    ? 'missionreport'
                    : 'quickcapture project' === e
                    ? 'quickcaptureproject'
                    : 'pro report' === e
                    ? 'proreport'
                    : 'urban model' === e
                    ? 'urbanmodel'
                    : 'web experience' === e
                    ? 'experiencebuilder'
                    : 'web experience template' === e
                    ? 'webexperiencetemplate'
                    : 'experience builder widget' === e
                    ? 'experiencebuilderwidget'
                    : 'experience builder widget package' === e
                    ? 'experiencebuilderwidgetpackage'
                    : 'workflow' === e
                    ? 'workflow'
                    : 'insights script' === e
                    ? 'insightsscript'
                    : 'kernel gateway connection' === e
                    ? 'kernelgatewayconnection'
                    : 'hub initiative template' === e
                    ? 'hubinitiativetemplate'
                    : 'storymap theme' === e
                    ? 'storymaptheme'
                    : 'knowledge graph' === e
                    ? 'knowledgegraph'
                    : 'native application' === e
                    ? 'nativeapp'
                    : 'native application installer' === e
                    ? 'nativeappinstaller'
                    : 'link chart' === e
                    ? 'linkchart'
                    : 'investigation' === e
                    ? 'investigation'
                    : 'ogcfeatureserver' === e
                    ? 'features'
                    : 'pro project' === e
                    ? 'proproject'
                    : 'insights workbook package' === e
                    ? 'insightsworkbookpackage'
                    : 'apache parquet' === e
                    ? 'apacheparquet'
                    : 'maps'),
            i ? (0, o.V)('esri/images/portal/' + i + '16.png') : null
          );
        }
        get isLayer() {
          return (
            [
              'Map Service',
              'Feature Service',
              'Feature Collection',
              'Scene Service',
              'Image Service',
              'Stream Service',
              'Vector Tile Service',
              'WMTS',
              'WMS',
            ].indexOf(this.type) > -1
          );
        }
        get itemUrl() {
          const e = this.get('portal.restUrl');
          return e ? e + '/content/items/' + this.id : null;
        }
        get thumbnailUrl() {
          const e = this.itemUrl,
            t = this.thumbnail;
          return e && t
            ? this.portal._normalizeUrl(`${e}/info/${t}?f=json`)
            : null;
        }
        get userItemUrl() {
          const e = this.get('portal.restUrl');
          if (!e) return null;
          const t = this.owner || this.get('portal.user.username');
          return t
            ? `${e}/content/users/${
                this.ownerFolder ? `${t}/${this.ownerFolder}` : t
              }/items/${this.id}`
            : null;
        }
        load(e) {
          this.portal || (this.portal = y.Z.getDefault());
          const t = this.portal
            .load(e)
            .then(() =>
              this.sourceJSON
                ? this.sourceJSON
                : this.id && this.itemUrl
                ? this.portal._request(this.itemUrl, {
                    signal: (0, p.pC)(e) ? e.signal : null,
                    query: { token: this.apiKey },
                  })
                : {},
            )
            .then((e) => {
              (this.sourceJSON = e), this.read(e);
            });
          return this.addResolvingPromise(t), Promise.resolve(this);
        }
        addRating(e) {
          const t = { method: 'post', query: {} };
          return (
            e instanceof O && (e = e.rating),
            isNaN(e) || 'number' != typeof e || (t.query.rating = e),
            this.portal
              ._request(this.itemUrl + '/addRating', t)
              .then(() => new O({ rating: e, created: new Date() }))
          );
        }
        clone() {
          const e = {
            access: this.access,
            accessInformation: this.accessInformation,
            applicationProxies: (0, n.d9)(this.applicationProxies),
            avgRating: this.avgRating,
            categories: (0, n.d9)(this.categories),
            created: (0, n.d9)(this.created),
            culture: this.culture,
            description: this.description,
            extent: (0, n.d9)(this.extent),
            groupCategories: (0, n.d9)(this.groupCategories),
            id: this.id,
            itemControl: this.itemControl,
            licenseInfo: this.licenseInfo,
            modified: (0, n.d9)(this.modified),
            name: this.name,
            numComments: this.numComments,
            numRatings: this.numRatings,
            numViews: this.numViews,
            owner: this.owner,
            ownerFolder: this.ownerFolder,
            portal: this.portal,
            screenshots: (0, n.d9)(this.screenshots),
            size: this.size,
            snippet: this.snippet,
            tags: (0, n.d9)(this.tags),
            thumbnail: this.thumbnail,
            title: this.title,
            type: this.type,
            typeKeywords: (0, n.d9)(this.typeKeywords),
            url: this.url,
          };
          return (
            this.loaded && (e.loadStatus = 'loaded'),
            new _({ sourceJSON: this.sourceJSON }).set(e)
          );
        }
        createPostQuery() {
          const e = this.toJSON();
          for (const t in e)
            'tags' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'typeKeywords' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'extent' === t && e[t] && (e[t] = JSON.stringify(e[t]));
          return e;
        }
        deleteRating() {
          return this.portal
            ._request(this.itemUrl + '/deleteRating', { method: 'post' })
            .then(() => {});
        }
        fetchData(e = 'json', t) {
          return this.portal._request(this.itemUrl + '/data', {
            responseType: e,
            ...t,
            query: { token: this.apiKey },
          });
        }
        fetchRating(e) {
          return this.portal
            ._request(this.itemUrl + '/rating', {
              query: { token: this.apiKey },
              ...e,
            })
            .then((e) =>
              null != e.rating
                ? ((e.created = new Date(e.created)), new O(e))
                : null,
            );
        }
        fetchRelatedItems(e, t) {
          return this.portal._requestToTypedArray(
            this.itemUrl + '/relatedItems',
            { query: { ...e, token: this.apiKey }, ...t },
            _,
          );
        }
        getThumbnailUrl(e) {
          let t = this.thumbnailUrl;
          return t && e && (t += `&w=${e}`), t;
        }
        reload() {
          return this.portal
            ._request(this.itemUrl, {
              cacheBust: !0,
              query: { token: this.apiKey },
            })
            .then((e) => ((this.sourceJSON = e), this.read(e), this));
        }
        update(e) {
          return this.id
            ? this.load()
                .then(() => this.portal._signIn())
                .then(() => {
                  const t = e && e.data,
                    i = { method: 'post' };
                  i.query = this.createPostQuery();
                  for (const e in i.query)
                    null === i.query[e] && (i.query[e] = '');
                  return (
                    (i.query.clearEmptyFields = !0),
                    null != t &&
                      ('string' == typeof t
                        ? (i.query.text = t)
                        : 'object' == typeof t &&
                          (i.query.text = JSON.stringify(t))),
                    this.portal
                      ._request(`${this.userItemUrl}/update`, i)
                      .then(() => this.reload())
                  );
                })
            : Promise.reject(
                new a.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        updateThumbnail(e) {
          return this.id
            ? this.load()
                .then(() => this.portal._signIn())
                .then(() => {
                  const t = e.thumbnail,
                    i = e.filename,
                    r = { method: 'post' };
                  if ('string' == typeof t)
                    (0, c.HK)(t)
                      ? (r.query = { data: t })
                      : (r.query = { url: (0, c.hF)(t) }),
                      (0, p.pC)(i) && (r.query.filename = i);
                  else {
                    const e = new FormData();
                    (0, p.pC)(i) ? e.append('file', t, i) : e.append('file', t),
                      (r.body = e);
                  }
                  return this.portal
                    ._request(`${this.userItemUrl}/updateThumbnail`, r)
                    .then(() => this.reload());
                })
            : Promise.reject(
                new a.Z(
                  'portal:item-does-not-exist',
                  'The item does not exist yet and cannot be updated',
                ),
              );
        }
        async fetchResources(e = {}, t) {
          return (await i.e(7873).then(i.bind(i, 97873))).fetchResources(
            this,
            e,
            t,
          );
        }
        async addResource(e, t, r) {
          const o = await i.e(7873).then(i.bind(i, 97873));
          return (e.portalItem = this), o.addOrUpdateResource(e, 'add', t, r);
        }
        async removeResource(e, t) {
          const r = await i.e(7873).then(i.bind(i, 97873));
          if (e.portalItem && e.portalItem.itemUrl !== this.itemUrl)
            throw new a.Z(
              'removeresource:portal-item-mismatch',
              'The portal item associated with the provided resource does not match the item',
            );
          return r.removeResource(this, e, t);
        }
        async removeAllResources(e) {
          return (await i.e(7873).then(i.bind(i, 97873))).removeAllResources(
            this,
            e,
          );
        }
        resourceFromPath(e) {
          return new k({ portalItem: this, path: e });
        }
        toJSON() {
          const e = this.extent,
            t = {
              created: this.created && this.created.getTime(),
              description: this.description,
              extent: e && [
                [e.xmin, e.ymin],
                [e.xmax, e.ymax],
              ],
              id: this.id,
              modified: this.modified && this.modified.getTime(),
              name: this.name,
              owner: this.owner,
              ownerFolder: this.ownerFolder,
              snippet: this.snippet,
              tags: this.tags,
              thumbnail: this.thumbnail,
              title: this.title,
              type: this.type,
              typeKeywords: this.typeKeywords,
              url: this.url,
            };
          return (0, n.yd)(t);
        }
        static fromJSON(e) {
          if (!e) return null;
          if (e.declaredClass)
            throw new Error('JSON object is already hydrated');
          return new _({ sourceJSON: e });
        }
        _getPostQuery() {
          const e = this.toJSON();
          for (const t in e)
            'tags' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'typeKeywords' === t && null !== e[t] && (e[t] = e[t].join(', ')),
              'extent' === t && e[t] && (e[t] = JSON.stringify(e[t]));
          return e;
        }
      });
      (0, r._)(
        [(0, d.Cb)({ type: ['private', 'shared', 'org', 'public'] })],
        S.prototype,
        'access',
        void 0,
      ),
        (0, r._)([(0, d.Cb)()], S.prototype, 'accessInformation', void 0),
        (0, r._)([(0, d.Cb)({ type: String })], S.prototype, 'apiKey', void 0),
        (0, r._)(
          [(0, d.Cb)({ json: { read: { source: 'appProxies' } } })],
          S.prototype,
          'applicationProxies',
          void 0,
        ),
        (0, r._)([(0, d.Cb)()], S.prototype, 'avgRating', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'categories', void 0),
        (0, r._)([(0, d.Cb)({ type: Date })], S.prototype, 'created', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'culture', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'description', void 0),
        (0, r._)(
          [(0, d.Cb)({ readOnly: !0 })],
          S.prototype,
          'displayName',
          null,
        ),
        (0, r._)([(0, d.Cb)({ type: g.Z })], S.prototype, 'extent', void 0),
        (0, r._)([(0, h.r)('extent')], S.prototype, 'readExtent', null),
        (0, r._)([(0, d.Cb)()], S.prototype, 'groupCategories', void 0),
        (0, r._)([(0, d.Cb)({ readOnly: !0 })], S.prototype, 'iconUrl', null),
        (0, r._)([(0, d.Cb)()], S.prototype, 'id', void 0),
        (0, r._)([(0, d.Cb)({ readOnly: !0 })], S.prototype, 'isLayer', null),
        (0, r._)([(0, d.Cb)()], S.prototype, 'itemControl', void 0),
        (0, r._)([(0, d.Cb)({ readOnly: !0 })], S.prototype, 'itemUrl', null),
        (0, r._)([(0, d.Cb)()], S.prototype, 'licenseInfo', void 0),
        (0, r._)([(0, d.Cb)({ type: Date })], S.prototype, 'modified', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'name', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'numComments', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'numRatings', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'numViews', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'owner', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'ownerFolder', void 0),
        (0, r._)([(0, d.Cb)({ type: y.Z })], S.prototype, 'portal', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'screenshots', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'size', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'snippet', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'sourceJSON', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'tags', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'thumbnail', void 0),
        (0, r._)(
          [(0, d.Cb)({ readOnly: !0 })],
          S.prototype,
          'thumbnailUrl',
          null,
        ),
        (0, r._)([(0, d.Cb)()], S.prototype, 'title', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'type', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'typeKeywords', void 0),
        (0, r._)([(0, d.Cb)()], S.prototype, 'url', void 0),
        (0, r._)(
          [(0, d.Cb)({ readOnly: !0 })],
          S.prototype,
          'userItemUrl',
          null,
        ),
        (S = _ = (0, r._)([(0, m.j)('esri.portal.PortalItem')], S));
      const I = S;
    },
  },
]);
