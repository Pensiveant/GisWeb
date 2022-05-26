'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [9941],
  {
    53073: (e, t, n) => {
      n.d(t, { Z: () => o });
      var r = n(75148),
        s = n(91136),
        a = n(90961),
        i = n(90658),
        l = n(95330),
        u = n(8667);
      class o extends s.Z {
        constructor(e) {
          super(e),
            (this._relation = ''),
            (this._relationGeom = null),
            (this._relationString = ''),
            (this.declaredClass =
              'esri.arcade.featureset.actions.SpatialFilter'),
            (this._relationString = e.relationString),
            (this._parent = e.parentfeatureset),
            (this._maxProcessing = 40),
            (this._relation = e.relation),
            (this._relationGeom = e.relationGeom);
        }
        _getSet(e) {
          return null === this._wset
            ? this._ensureLoaded()
                .then(() =>
                  this._parent._getFilteredSet(
                    'esriSpatialRelRelation' !== this._relation
                      ? this._relation
                      : this._relation + ':' + this._relationString,
                    this._relationGeom,
                    null,
                    null,
                    e,
                  ),
                )
                .then(
                  (t) => (
                    this._checkCancelled(e),
                    (this._wset = new a.Z(
                      t._candidates.slice(0),
                      t._known.slice(0),
                      t._ordered,
                      this._clonePageDefinition(t.pagesDefinition),
                    )),
                    this._wset
                  ),
                )
            : (0, l.DB)(this._wset);
        }
        _isInFeatureSet(e) {
          let t = this._parent._isInFeatureSet(e);
          return t === i.dj.NotInFeatureSet
            ? t
            : ((t = this._idstates[e]), void 0 === t ? i.dj.Unknown : t);
        }
        _getFeature(e, t, n) {
          return this._parent._getFeature(e, t, n);
        }
        _getFeatures(e, t, n, r) {
          return this._parent._getFeatures(e, t, n, r);
        }
        _featureFromCache(e) {
          return this._parent._featureFromCache(e);
        }
        executeSpatialRelationTest(e) {
          if (null === e.geometry) return (0, l.DB)(!1);
          switch (this._relation) {
            case 'esriSpatialRelEnvelopeIntersects': {
              const t = (0, i.SV)(this._relationGeom),
                n = (0, i.SV)(e.geometry);
              return (0, u.kK)(t, n);
            }
            case 'esriSpatialRelIntersects':
              return (0, u.kK)(this._relationGeom, e.geometry);
            case 'esriSpatialRelContains':
              return (0, u.r3)(this._relationGeom, e.geometry);
            case 'esriSpatialRelOverlaps':
              return (0, u.Nm)(this._relationGeom, e.geometry);
            case 'esriSpatialRelWithin':
              return (0, u.uh)(this._relationGeom, e.geometry);
            case 'esriSpatialRelTouches':
              return (0, u.W4)(this._relationGeom, e.geometry);
            case 'esriSpatialRelCrosses':
              return (0, u.jU)(this._relationGeom, e.geometry);
            case 'esriSpatialRelRelation':
              return (0, u.LV)(
                this._relationGeom,
                e.geometry,
                this._relationString,
              );
          }
        }
        _fetchAndRefineFeatures(e, t, n) {
          const r = new a.Z([], e, !1, null),
            s = Math.min(t, e.length);
          return this._parent
            ._getFeatures(r, -1, s, n)
            .then(() => {
              this._checkCancelled(n);
              const t = [];
              for (let n = 0; n < s; n++) {
                const r = this._parent._featureFromCache(e[n]);
                t.push(this.executeSpatialRelationTest(r));
              }
              return (0, l.$6)(t);
            })
            .then((n) => {
              for (let r = 0; r < t; r++)
                !0 === n[r]
                  ? (this._idstates[e[r]] = i.dj.InFeatureSet)
                  : (this._idstates[e[r]] = i.dj.NotInFeatureSet);
              return 'success';
            });
        }
        _getFilteredSet(e, t, n, r, s) {
          return this._ensureLoaded()
            .then(() =>
              this._parent._getFilteredSet(
                'esriSpatialRelRelation' !== this._relation
                  ? this._relation
                  : this._relation + ':' + this._relationString,
                this._relationGeom,
                n,
                r,
                s,
              ),
            )
            .then((e) => {
              let n;
              return (
                this._checkCancelled(s),
                (n =
                  null !== t
                    ? new a.Z(
                        e._candidates.slice(0).concat(e._known.slice(0)),
                        [],
                        e._ordered,
                        this._clonePageDefinition(e.pagesDefinition),
                      )
                    : new a.Z(
                        e._candidates.slice(0),
                        e._known.slice(0),
                        e._ordered,
                        this._clonePageDefinition(e.pagesDefinition),
                      )),
                n
              );
            });
        }
        _stat(e, t, n, r, s, a, i) {
          return '' !== n
            ? (0, l.DB)({ calculated: !1 })
            : this._parent
                ._stat(
                  e,
                  t,
                  'esriSpatialRelRelation' !== this._relation
                    ? this._relation
                    : this._relation + ':' + this._relationString,
                  this._relationGeom,
                  s,
                  a,
                  i,
                )
                .then((l) =>
                  !1 === l.calculated
                    ? null === s && '' === n && null === r
                      ? this._manualStat(e, t, a, i)
                      : { calculated: !1 }
                    : l,
                );
        }
        _canDoAggregates(e, t, n, r, s) {
          return '' !== n || null !== r || null === this._parent
            ? (0, l.DB)(!1)
            : this._parent._canDoAggregates(
                e,
                t,
                'esriSpatialRelRelation' !== this._relation
                  ? this._relation
                  : this._relation + ':' + this._relationString,
                this._relationGeom,
                s,
              );
        }
        _getAggregatePagesDataSourceDefinition(e, t, n, r, s, a, i) {
          return null === this._parent
            ? (0, l.d1)(new Error('Should never be called'))
            : this._parent._getAggregatePagesDataSourceDefinition(
                e,
                t,
                'esriSpatialRelRelation' !== this._relation
                  ? this._relation
                  : this._relation + ':' + this._relationString,
                this._relationGeom,
                s,
                a,
                i,
              );
        }
        static registerAction() {
          (s.Z._featuresetFunctions.intersects = function (e) {
            return null == e
              ? new r.Z({ parentfeatureset: this })
              : new o({
                  parentfeatureset: this,
                  relation: 'esriSpatialRelIntersects',
                  relationGeom: e,
                });
          }),
            (s.Z._featuresetFunctions.envelopeIntersects = function (e) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelEnvelopeIntersects',
                    relationGeom: e,
                  });
            }),
            (s.Z._featuresetFunctions.contains = function (e) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelContains',
                    relationGeom: e,
                  });
            }),
            (s.Z._featuresetFunctions.overlaps = function (e) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelOverlaps',
                    relationGeom: e,
                  });
            }),
            (s.Z._featuresetFunctions.within = function (e) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelWithin',
                    relationGeom: e,
                  });
            }),
            (s.Z._featuresetFunctions.touches = function (e) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelTouches',
                    relationGeom: e,
                  });
            }),
            (s.Z._featuresetFunctions.crosses = function (e) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelCrosses',
                    relationGeom: e,
                  });
            }),
            (s.Z._featuresetFunctions.relate = function (e, t) {
              return null == e
                ? new r.Z({ parentfeatureset: this })
                : new o({
                    parentfeatureset: this,
                    relation: 'esriSpatialRelRelation',
                    relationGeom: e,
                    relationString: t,
                  });
            });
        }
      }
    },
    75148: (e, t, n) => {
      n.d(t, { Z: () => l });
      var r = n(91136),
        s = n(90961),
        a = n(90658),
        i = n(95330);
      class l extends r.Z {
        constructor(e) {
          super(e),
            (this.declaredClass = 'esri.layers.featureset.sources.Empty'),
            (this._maxProcessing = 1e3),
            (this._wset = new s.Z([], [], !1, null)),
            (this._parent = e.parentfeatureset),
            (this._databaseType = a.Bj.Standardised);
        }
        _getSet() {
          return (0, i.DB)(this._wset);
        }
        optimisePagingFeatureQueries() {}
        _isInFeatureSet() {
          return a.dj.NotInFeatureSet;
        }
        _getFeature() {
          return (0, i.d1)(new Error('No Feature Found in EmptySet'));
        }
        queryAttachments() {
          return (0, i.DB)([]);
        }
        _getFeatures() {
          return (0, i.DB)('success');
        }
        _featureFromCache() {
          return null;
        }
        _fetchAndRefineFeatures() {
          return (0, i.d1)(
            new Error(
              'Fetch and Refine should not be called in this featureset',
            ),
          );
        }
        _getFilteredSet() {
          return (0, i.DB)(new s.Z([], [], !1, null));
        }
        _stat(e, t, n, r, s, a, i) {
          return this._manualStat(e, t, a, i);
        }
        _canDoAggregates() {
          return (0, i.DB)(!1);
        }
      }
    },
    91136: (e, t, n) => {
      n.d(t, { Z: () => _ });
      var r = n(95330);
      class s {
        constructor(e, t) {
          (this._lastId = -1), (this._progress = t), (this._parent = e);
        }
        reset() {
          this._lastId = -1;
        }
        nextBatch(e) {
          if (null !== this._parent._mainSetInUse)
            return this._parent._mainSetInUse.then(
              (t) => this.nextBatch(e),
              (t) => this.nextBatch(e),
            );
          const t = { returnpromise: null, hasset: !1 },
            n = [];
          return (
            (t.returnpromise = (0, r.Ue)((r, s) => {
              this._parent._getSet(this._progress).then(
                (a) => {
                  let i = a._known.length - 1;
                  if (
                    ('GETPAGES' === a._known[a._known.length - 1] && (i -= 1),
                    this._lastId + e > i &&
                      a._known.length > 0 &&
                      'GETPAGES' === a._known[a._known.length - 1])
                  )
                    this._parent
                      ._expandPagedSet(
                        a,
                        this._parent._maxQueryRate(),
                        0,
                        0,
                        this._progress,
                      )
                      .then(
                        (n) => {
                          (t.hasset = !0),
                            (this._parent._mainSetInUse = null),
                            this.nextBatch(e).then(r, s);
                        },
                        (e) => {
                          (t.hasset = !0),
                            (this._parent._mainSetInUse = null),
                            s(e);
                        },
                      );
                  else {
                    if (i >= this._lastId + e || 0 === a._candidates.length) {
                      for (let t = 0; t < e; t++) {
                        const e = t + this._lastId + 1;
                        if (e >= a._known.length) break;
                        n[t] = a._known[e];
                      }
                      return (
                        (this._lastId += n.length),
                        0 === n.length &&
                          ((t.hasset = !0),
                          (this._parent._mainSetInUse = null),
                          r([])),
                        void this._parent
                          ._getFeatureBatch(n, this._progress)
                          .then(
                            (e) => {
                              (t.hasset = !0),
                                (this._parent._mainSetInUse = null),
                                r(e);
                            },
                            (e) => {
                              (t.hasset = !0),
                                (this._parent._mainSetInUse = null),
                                s(e);
                            },
                          )
                      );
                    }
                    this._parent
                      ._refineSetBlock(
                        a,
                        this._parent._maxProcessingRate(),
                        this._progress,
                      )
                      .then(
                        () => {
                          (t.hasset = !0),
                            (this._parent._mainSetInUse = null),
                            this.nextBatch(e).then(r, s);
                        },
                        (e) => {
                          (t.hasset = !0),
                            (this._parent._mainSetInUse = null),
                            s(e);
                        },
                      );
                  }
                },
                (e) => {
                  (t.hasset = !0), (this._parent._mainSetInUse = null), s(e);
                },
              );
            })),
            !1 === t.hasset &&
              ((this._parent._mainSetInUse = t.returnpromise), (t.hasset = !0)),
            t.returnpromise
          );
        }
        next() {
          if (null !== this._parent._mainSetInUse)
            return this._parent._mainSetInUse.then(
              (e) => this.next(),
              (e) => this.next(),
            );
          const e = { returnpromise: null, hasset: !1 };
          return (
            (e.returnpromise = (0, r.Ue)((t, n) => {
              this._parent._getSet(this._progress).then(
                (r) => {
                  this._lastId < r._known.length - 1
                    ? 'GETPAGES' === r._known[this._lastId + 1]
                      ? this._parent
                          ._expandPagedSet(
                            r,
                            this._parent._maxQueryRate(),
                            0,
                            0,
                            this._progress,
                          )
                          .then(
                            (t) => (
                              (e.hasset = !0),
                              (this._parent._mainSetInUse = null),
                              this.next()
                            ),
                          )
                          .then(t, n)
                      : ((this._lastId += 1),
                        this._parent
                          ._getFeature(
                            r,
                            r._known[this._lastId],
                            this._progress,
                          )
                          .then(
                            (n) => {
                              (e.hasset = !0),
                                (this._parent._mainSetInUse = null),
                                t(n);
                            },
                            (t) => {
                              (e.hasset = !0),
                                (this._parent._mainSetInUse = null),
                                n(t);
                            },
                          ))
                    : r._candidates.length > 0
                    ? this._parent
                        ._refineSetBlock(
                          r,
                          this._parent._maxProcessingRate(),
                          this._progress,
                        )
                        .then(
                          () => {
                            (e.hasset = !0),
                              (this._parent._mainSetInUse = null),
                              this.next().then(t, n);
                          },
                          (t) => {
                            (e.hasset = !0),
                              (this._parent._mainSetInUse = null),
                              n(t);
                          },
                        )
                    : ((e.hasset = !0),
                      (this._parent._mainSetInUse = null),
                      t(null));
                },
                (t) => {
                  (e.hasset = !0), (this._parent._mainSetInUse = null), n(t);
                },
              );
            })),
            !1 === e.hasset &&
              ((this._parent._mainSetInUse = e.returnpromise), (e.hasset = !0)),
            e.returnpromise
          );
        }
        count() {
          return -1 !== this._parent._totalCount
            ? (0, r.DB)(this._parent._totalCount)
            : this._parent
                ._getSet(this._progress)
                .then((e) => this._refineAllSets(e))
                .then(
                  (e) => (
                    (this._parent._totalCount = e._known.length),
                    (0, r.DB)(this._parent._totalCount)
                  ),
                );
        }
        _refineAllSets(e) {
          return e._known.length > 0 &&
            'GETPAGES' === e._known[e._known.length - 1]
            ? this._parent
                ._expandPagedSet(
                  e,
                  this._parent._maxQueryRate(),
                  0,
                  1,
                  this._progress,
                )
                .then((t) => this._refineAllSets(e))
                .then((e) => (0, r.DB)(e))
            : e._candidates.length > 0
            ? 'GETPAGES' === e._known[e._candidates.length - 1]
              ? this._parent
                  ._expandPagedSet(
                    e,
                    this._parent._maxQueryRate(),
                    0,
                    2,
                    this._progress,
                  )
                  .then((t) => this._refineAllSets(e))
                  .then((e) => (0, r.DB)(e))
              : this._parent
                  ._refineSetBlock(
                    e,
                    this._parent._maxProcessingRate(),
                    this._progress,
                  )
                  .then((e) =>
                    e._candidates.length > 0
                      ? this._refineAllSets(e)
                      : (0, r.DB)(e),
                  )
            : (0, r.DB)(e);
        }
      }
      var a = n(90961),
        i = n(90658),
        l = n(48039),
        u = n(95002),
        o = n(41534),
        c = n(8667),
        h = n(82971),
        d = n(99514);
      class _ {
        constructor(e) {
          (this.recentlyUsedQueries = null),
            (this.featureSetQueryInterceptor = null),
            (this._idstates = []),
            (this._parent = null),
            (this._wset = null),
            (this._mainSetInUse = null),
            (this._maxProcessing = 200),
            (this._maxQuery = 500),
            (this._totalCount = -1),
            (this._databaseType = i.Bj.NotEvaluated),
            (this._databaseTypeProbed = null),
            (this.declaredRootClass =
              'esri.arcade.featureset.support.FeatureSet'),
            (this._featureCache = []),
            (this.types = null),
            (this.fields = null),
            (this.geometryType = ''),
            (this.objectIdField = ''),
            (this.globalIdField = ''),
            (this.spatialReference = null),
            (this.hasM = !1),
            (this.hasZ = !1),
            (this._transparent = !1),
            (this.loaded = !1),
            (this._loadPromise = null),
            (this._fieldsIndex = null),
            e && e.lrucache && (this.recentlyUsedQueries = e.lrucache),
            e &&
              e.interceptor &&
              (this.featureSetQueryInterceptor = e.interceptor);
        }
        optimisePagingFeatureQueries(e) {
          this._parent && this._parent.optimisePagingFeatureQueries(e);
        }
        _hasMemorySource() {
          return !0;
        }
        prop(e, t) {
          return void 0 === t
            ? this[e]
            : (void 0 !== this[e] && (this[e] = t), this);
        }
        end() {
          return null !== this._parent && !0 === this._parent._transparent
            ? this._parent.end()
            : this._parent;
        }
        _ensureLoaded() {
          return this.load();
        }
        load() {
          return (
            null === this._loadPromise &&
              (this._loadPromise = (0, r.Ue)((e, t) => {
                if (!0 === this._parent.loaded)
                  return this._initialiseFeatureSet(), void e(this);
                this._parent.load().then(() => {
                  try {
                    this._initialiseFeatureSet(), e(this);
                  } catch (e) {
                    t(e);
                  }
                }, t);
              })),
            this._loadPromise
          );
        }
        _initialiseFeatureSet() {
          null !== this._parent
            ? ((this.fields = this._parent.fields.slice(0)),
              (this.geometryType = this._parent.geometryType),
              (this.objectIdField = this._parent.objectIdField),
              (this.globalIdField = this._parent.globalIdField),
              (this.spatialReference = this._parent.spatialReference),
              (this.hasM = this._parent.hasM),
              (this.hasZ = this._parent.hasZ),
              (this.typeIdField = this._parent.typeIdField),
              (this.types = this._parent.types))
            : ((this.fields = []),
              (this.typeIdField = ''),
              (this.objectIdField = ''),
              (this.globalIdField = ''),
              (this.spatialReference = new h.Z({ wkid: 4326 })),
              (this.geometryType = i.Qk.point));
        }
        getField(e, t) {
          let n;
          return (
            (t = t || this.fields) &&
              ((e = e.toLowerCase()),
              t.some((t) => (t && t.name.toLowerCase() === e && (n = t), !!n))),
            n
          );
        }
        getFieldsIndex() {
          return (
            null === this._fieldsIndex &&
              (this._fieldsIndex = new d.Z(this.fields)),
            this._fieldsIndex
          );
        }
        _maxProcessingRate() {
          return null !== this._parent
            ? Math.min(this._maxProcessing, this._parent._maxProcessingRate())
            : Math.min(this._maxProcessing, this._maxQueryRate());
        }
        _maxQueryRate() {
          return null !== this._parent
            ? Math.max(this._maxQuery, this._parent._maxQueryRate())
            : this._maxQuery;
        }
        _checkCancelled(e) {
          if (null !== e && e.aborted)
            throw new Error('Operation has been cancelled.');
        }
        nativeCapabilities() {
          return this._parent.nativeCapabilities();
        }
        _canDoAggregates(e, t, n, s, a) {
          return null === this._parent
            ? (0, r.DB)(!1)
            : this._parent._canDoAggregates(e, t, n, s, a);
        }
        _getAggregatePagesDataSourceDefinition(e, t, n, s, a, i, l) {
          return null === this._parent
            ? (0, r.d1)(new Error('Should never be called'))
            : this._parent._getAggregatePagesDataSourceDefinition(
                e,
                t,
                n,
                s,
                a,
                i,
                l,
              );
        }
        _getAgregagtePhysicalPage(e, t, n) {
          return null === this._parent
            ? (0, r.d1)(new Error('Should never be called'))
            : this._parent._getAgregagtePhysicalPage(e, t, n);
        }
        databaseType() {
          if (this._databaseType === i.Bj.NotEvaluated) {
            if (null !== l.Z.applicationCache) {
              const e = l.Z.applicationCache.getDatabaseType(
                this._cacheableFeatureSetSourceKey(),
              );
              if (null !== e) return e;
            }
            if (null !== this._databaseTypeProbed)
              return this._databaseTypeProbed;
            const e = [
              {
                thetype: i.Bj.SqlServer,
                testwhere:
                  "(CAST( '2015-01-01' as DATETIME) = CAST( '2015-01-01' as DATETIME)) AND OBJECTID<0",
              },
              {
                thetype: i.Bj.Oracle,
                testwhere:
                  "(TO_DATE('2003-11-18','YYYY-MM-DD') = TO_DATE('2003-11-18','YYYY-MM-DD')) AND OBJECTID<0",
              },
              {
                thetype: i.Bj.StandardisedNoInterval,
                testwhere:
                  "(date '2015-01-01 10:10:10' = date '2015-01-01 10:10:10') AND OBJECTID<0",
              },
            ];
            let t = (0, r.Ue)((t, n) => {
              this._getDatabaseTypeImpl(e, 0).then(
                (e) => {
                  (this._databaseType = e), t(this._databaseType);
                },
                (e) => {
                  n(e);
                },
              );
            });
            return (
              null !== l.Z.applicationCache &&
                (l.Z.applicationCache.setDatabaseType(
                  this._cacheableFeatureSetSourceKey(),
                  t,
                ),
                (t = t.catch((e) => {
                  throw (
                    (l.Z.applicationCache.clearDatabaseType(
                      this._cacheableFeatureSetSourceKey(),
                    ),
                    e)
                  );
                }))),
              (this._databaseTypeProbed = t),
              this._databaseTypeProbed
            );
          }
          return (0, r.DB)(this._databaseType);
        }
        _cacheableFeatureSetSourceKey() {
          return 'MUSTBESET';
        }
        _getDatabaseTypeImpl(e, t) {
          return t >= e.length
            ? (0, r.DB)(i.Bj.StandardisedNoInterval)
            : this._runDatabaseProbe(e[t].testwhere).then((n) =>
                !0 === n ? e[t].thetype : this._getDatabaseTypeImpl(e, t + 1),
              );
        }
        _runDatabaseProbe(e) {
          return null !== this._parent
            ? this._parent._runDatabaseProbe(e)
            : (0, r.d1)(new Error('Not Implemented'));
        }
        isTable() {
          return this._parent.isTable();
        }
        _featureFromCache(e) {
          if (void 0 !== this._featureCache[e]) return this._featureCache[e];
        }
        _isInFeatureSet(e) {
          return i.dj.Unknown;
        }
        _getSet(e) {
          throw new Error('Not implemented in abstract class');
        }
        _getFeature(e, t, n) {
          try {
            return (
              this._checkCancelled(n),
              void 0 !== this._featureFromCache(t)
                ? (0, r.DB)(this._featureFromCache(t))
                : this._getFeatures(e, t, this._maxProcessingRate(), n).then(
                    () => (
                      this._checkCancelled(n),
                      void 0 !== this._featureFromCache(t)
                        ? this._featureFromCache(t)
                        : (0, r.d1)(new Error('Feature Not Found'))
                    ),
                  )
            );
          } catch (e) {
            return (0, r.d1)(e);
          }
        }
        _getFeatureBatch(e, t) {
          try {
            this._checkCancelled(t);
            const n = new a.Z([], e, !1, null),
              r = [];
            return this._getFeatures(n, -1, e.length, t).then(() => {
              this._checkCancelled(t);
              for (const t of e)
                void 0 !== this._featureFromCache(t) &&
                  r.push(this._featureFromCache(t));
              return r;
            });
          } catch (e) {
            return (0, r.d1)(e);
          }
        }
        _getFeatures(e, t, n, s) {
          return (0, r.DB)('success');
        }
        _getFilteredSet(e, t, n, r, s) {
          throw new Error('Not implemented in abstract class');
        }
        _refineSetBlock(e, t, n) {
          try {
            if (
              !0 ===
              this._checkIfNeedToExpandCandidatePage(e, this._maxQueryRate())
            )
              return this._expandPagedSet(
                e,
                this._maxQueryRate(),
                0,
                0,
                n,
              ).then(() => this._refineSetBlock(e, t, n));
            this._checkCancelled(n);
            const s = e._candidates.length;
            this._refineKnowns(e, t);
            let a = s - e._candidates.length;
            return 0 === e._candidates.length || a >= t
              ? (0, r.DB)(e)
              : this._refineIfParentKnown(e, t - a, n).then(() => {
                  if (
                    (this._checkCancelled(n),
                    this._refineKnowns(e, t - a),
                    (a = s - e._candidates.length),
                    a < t && e._candidates.length > 0)
                  ) {
                    const r = t - a,
                      s = this._prepareFetchAndRefineSet(e._candidates);
                    return this._fetchAndRefineFeatures(
                      s,
                      s.length > r ? r : e._candidates.length,
                      n,
                    ).then(
                      () => (
                        this._checkCancelled(n), this._refineKnowns(e, t - a), e
                      ),
                    );
                  }
                  return e;
                });
          } catch (e) {
            return (0, r.d1)(e);
          }
        }
        _fetchAndRefineFeatures(e, t, n) {
          return null;
        }
        _prepareFetchAndRefineSet(e) {
          const t = [];
          for (let n = 0; n < e.length; n++)
            this._isPhysicalFeature(e[n]) && t.push(e[n]);
          return t;
        }
        _isPhysicalFeature(e) {
          return null === this._parent || this._parent._isPhysicalFeature(e);
        }
        _refineKnowns(e, t) {
          let n = 0,
            r = null;
          const s = [];
          t = this._maxQueryRate();
          for (
            let a = 0;
            a < e._candidates.length && 'GETPAGES' !== e._candidates[a];
            a++
          ) {
            let l = !1;
            const u = this._candidateIdTransform(e._candidates[a]);
            u !== e._candidates[a] && (l = !0);
            const o = this._isInFeatureSet(u);
            if (o === i.dj.InFeatureSet)
              !0 === l
                ? e._known.indexOf(u) < 0 && (e._known.push(u), (n += 1))
                : (e._known.push(e._candidates[a]), (n += 1)),
                null === r
                  ? (r = { start: a, end: a })
                  : r.end === a - 1
                  ? (r.end = a)
                  : (s.push(r), (r = { start: a, end: a }));
            else if (o === i.dj.NotInFeatureSet)
              null === r
                ? (r = { start: a, end: a })
                : r.end === a - 1
                ? (r.end = a)
                : (s.push(r), (r = { start: a, end: a })),
                (n += 1);
            else if (o === i.dj.Unknown && ((n += 1), !0 === e._ordered)) break;
            if (n >= t) break;
          }
          null !== r && s.push(r);
          for (let t = s.length - 1; t >= 0; t--)
            e._candidates.splice(s[t].start, s[t].end - s[t].start + 1);
        }
        _refineIfParentKnown(e, t, n) {
          const r = new a.Z([], [], e._ordered, null);
          return (
            (r._candidates = e._candidates.slice(0)),
            this._parent._refineSetBlock(r, t, n)
          );
        }
        _candidateIdTransform(e) {
          return this._parent._candidateIdTransform(e);
        }
        _checkIfNeedToExpandKnownPage(e, t) {
          if (null === e.pagesDefinition) return !1;
          let n = 0;
          for (let r = e._lastFetchedIndex; r < e._known.length; r++) {
            if ('GETPAGES' === e._known[r]) return !0;
            if (
              void 0 === this._featureCache[e._known[r]] &&
              ((n += 1), n >= t)
            )
              break;
          }
          return !1;
        }
        _checkIfNeedToExpandCandidatePage(e, t) {
          if (null === e.pagesDefinition) return !1;
          let n = 0;
          for (let r = 0; r < e._candidates.length; r++) {
            if ('GETPAGES' === e._candidates[r]) return !0;
            if (((n += 1), n >= t)) break;
          }
          return !1;
        }
        _expandPagedSet(e, t, n, s, a) {
          return null === this._parent
            ? (0, r.d1)(new Error('Parent Paging not implemented'))
            : this._parent._expandPagedSet(e, t, n, s, a);
        }
        _expandPagedSetFeatureSet(e, t, n, s, a) {
          return (
            e._known.length > 0 &&
              'GETPAGES' === e._known[e._known.length - 1] &&
              (s = 1),
            0 === s &&
              e._candidates.length > 0 &&
              'GETPAGES' === e._candidates[e._candidates.length - 1] &&
              (s = 2),
            0 === s
              ? (0, r.DB)('finished')
              : this._getPage(e, s, a).then((r) =>
                  n + r < t
                    ? this._expandPagedSet(e, t, n + r, 0, a)
                    : 'success',
                )
          );
        }
        _getPage(e, t, n) {
          const s = 1 === t ? e._known : e._candidates;
          if (
            e.pagesDefinition.internal.set.length >
              e.pagesDefinition.resultOffset ||
            !0 === e.pagesDefinition.internal.fullyResolved
          ) {
            s.length = s.length - 1;
            let t = 0;
            for (
              let n = 0;
              n < e.pagesDefinition.resultRecordCount &&
              !(
                e.pagesDefinition.resultOffset + n >=
                e.pagesDefinition.internal.set.length
              );
              n++
            )
              (s[s.length] =
                e.pagesDefinition.internal.set[
                  e.pagesDefinition.resultOffset + n
                ]),
                t++;
            e.pagesDefinition.resultOffset += t;
            let n = !1;
            return (
              !0 === e.pagesDefinition.internal.fullyResolved &&
                e.pagesDefinition.internal.set.length <=
                  e.pagesDefinition.resultOffset &&
                (n = !0),
              !1 === n && s.push('GETPAGES'),
              (0, r.DB)(t)
            );
          }
          return this._getPhysicalPage(e, t, n).then(() =>
            this._getPage(e, t, n),
          );
        }
        _getPhysicalPage(e, t, n) {
          return null;
        }
        _clonePageDefinition(e) {
          return null === this._parent
            ? null
            : this._parent._clonePageDefinition(e);
        }
        _first(e) {
          return this.iterator(e).next();
        }
        first(e) {
          return this._first(e);
        }
        calculateStatistic(e, t, n, r) {
          return this._ensureLoaded().then(() =>
            this._stat(e, t, '', null, null, n, r).then((s) =>
              !1 === s.calculated
                ? this._manualStat(e, t, n, r).then((e) => e.result)
                : s.result,
            ),
          );
        }
        _manualStat(e, t, n, s) {
          switch (e.toLowerCase()) {
            case 'count':
              return (0, u.QX)(this, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'distinct':
              return (0, u.EB)(this, t, n).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'avg':
            case 'mean':
              return (0, u.J6)(this, t, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'stdev':
              return (0, u.m)(this, t, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'variance':
              return (0, u.CA)(this, t, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'sum':
              return (0, u.Sm)(this, t, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'min':
              return (0, u.VV)(this, t, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            case 'max':
              return (0, u.Fp)(this, t, s).then((e) => ({
                calculated: !0,
                result: e,
              }));
            default:
              return (0, r.DB)({ calculated: !0, result: 0 });
          }
        }
        _stat(e, t, n, r, s, a, i) {
          return this._parent
            ._stat(e, t, n, r, s, a, i)
            .then((l) =>
              !1 === l.calculated
                ? null === s && '' === n && null === r
                  ? this._manualStat(e, t, a, i)
                  : { calculated: !1 }
                : l,
            );
        }
        _unionAllGeomSelf(e) {
          const t = this.iterator(this._defaultTracker(e)),
            n = [];
          return (0, r.Ue)((e, r) => {
            this._unionShapeInBatches(n, t, e, r);
          });
        }
        _unionAllGeom(e) {
          return (0, r.Ue)((t, n) => {
            const r = this.iterator(this._defaultTracker(e));
            this._unionShapeInBatches([], r, t, n);
          });
        }
        _unionShapeInBatches(e, t, n, r) {
          t.next().then((s) => {
            try {
              null !== s && null !== s.geometry && e.push(s.geometry),
                e.length > 30 || (null === s && e.length > 1)
                  ? (0, c.G0)(e).then((a) => {
                      try {
                        null === s
                          ? n(a)
                          : ((e = [a]), this._unionShapeInBatches(e, t, n, r));
                      } catch (e) {
                        r(e);
                      }
                    }, r)
                  : null === s
                  ? 1 === e.length
                    ? n(e[0])
                    : n(null)
                  : this._unionShapeInBatches(e, t, n, r);
            } catch (e) {
              r(e);
            }
          }, r);
        }
        iterator(e) {
          return new s(this, e);
        }
        intersection(e, t = !1) {
          return _._featuresetFunctions.intersection.bind(this)(e, t);
        }
        difference(e, t = !1, n = !0) {
          return _._featuresetFunctions.difference.bind(this)(e, t, n);
        }
        symmetricDifference(e, t = !1, n = !0) {
          return _._featuresetFunctions.symmetricDifference.bind(this)(e, t, n);
        }
        morphShape(e, t, n = 'unknown', r = null) {
          return _._featuresetFunctions.morphShape.bind(this)(e, t, n, r);
        }
        morphShapeAndAttributes(e, t, n = 'unknown') {
          return _._featuresetFunctions.morphShapeAndAttributes.bind(this)(
            e,
            t,
            n,
          );
        }
        union(e, t = !1) {
          return _._featuresetFunctions.union.bind(this)(e, t);
        }
        intersects(e) {
          return _._featuresetFunctions.intersects.bind(this)(e);
        }
        envelopeIntersects(e) {
          return _._featuresetFunctions.envelopeIntersects.bind(this)(e);
        }
        contains(e) {
          return _._featuresetFunctions.contains.bind(this)(e);
        }
        overlaps(e) {
          return _._featuresetFunctions.overlaps.bind(this)(e);
        }
        relate(e, t) {
          return _._featuresetFunctions.relate.bind(this)(e, t);
        }
        within(e) {
          return _._featuresetFunctions.within.bind(this)(e);
        }
        touches(e) {
          return _._featuresetFunctions.touches.bind(this)(e);
        }
        top(e) {
          return _._featuresetFunctions.top.bind(this)(e);
        }
        crosses(e) {
          return _._featuresetFunctions.crosses.bind(this)(e);
        }
        buffer(e, t, n, r = !0) {
          return _._featuresetFunctions.buffer.bind(this)(e, t, n, r);
        }
        filter(e, t = null) {
          return _._featuresetFunctions.filter.bind(this)(e, t);
        }
        orderBy(e) {
          return _._featuresetFunctions.orderBy.bind(this)(e);
        }
        dissolve(e, t) {
          return _._featuresetFunctions.dissolve.bind(this)(e, t);
        }
        groupby(e, t) {
          return _._featuresetFunctions.groupby.bind(this)(e, t);
        }
        reduce(e, t = null, n) {
          return (0, r.Ue)((r, s) => {
            this._reduceImpl(
              this.iterator(this._defaultTracker(n)),
              e,
              t,
              0,
              r,
              s,
              0,
            );
          });
        }
        _reduceImpl(e, t, n, s, a, i, l) {
          try {
            if (++l > 1e3)
              return void setTimeout(() => {
                (l = 0), this._reduceImpl(e, t, n, s, a, i, l);
              });
            e.next().then((u) => {
              try {
                if (null === u) a(n);
                else {
                  const o = t(n, u, s, this);
                  (0, r.y8)(o)
                    ? o.then((n) => {
                        this._reduceImpl(e, t, n, s + 1, a, i, l);
                      }, i)
                    : this._reduceImpl(e, t, o, s + 1, a, i, l);
                }
              } catch (e) {
                i(e);
              }
            }, i);
          } catch (e) {
            i(e);
          }
        }
        removeField(e) {
          return _._featuresetFunctions.removeField.bind(this)(e);
        }
        addField(e, t, n = null) {
          return _._featuresetFunctions.addField.bind(this)(e, t, n);
        }
        sumArea(e, t = !1, n) {
          const r = (0, i.EI)(e);
          return this.reduce(
            (e, n) =>
              null === n.geometry
                ? 0
                : t
                ? (0, c.Y4)(n.geometry, r).then((t) => e + t)
                : (0, c.CJ)(n.geometry, r).then((t) => e + t),
            0,
            n,
          );
        }
        sumLength(e, t = !1, n) {
          const r = (0, i.Lz)(e);
          return this.reduce(
            (e, n) =>
              null === n.geometry
                ? 0
                : t
                ? (0, c.kQ)(n.geometry, r).then((t) => e + t)
                : (0, c.sz)(n.geometry, r).then((t) => e + t),
            0,
            n,
          );
        }
        _substituteVars(e, t) {
          if (null !== t) {
            const n = {};
            for (const e in t) n[e.toLowerCase()] = t[e];
            e.parameters = n;
          }
        }
        distinct(e, t = 1e3, n = null, r) {
          return this.load().then(() => {
            const s = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(s, n),
              this.calculateStatistic('distinct', s, t, this._defaultTracker(r))
            );
          });
        }
        min(e, t = null, n) {
          return this.load().then(() => {
            const r = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(r, t),
              this.calculateStatistic('min', r, -1, this._defaultTracker(n))
            );
          });
        }
        max(e, t = null, n) {
          return this.load().then(() => {
            const r = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(r, t),
              this.calculateStatistic('max', r, -1, this._defaultTracker(n))
            );
          });
        }
        avg(e, t = null, n) {
          return this.load().then(() => {
            const r = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(r, t),
              this.calculateStatistic('avg', r, -1, this._defaultTracker(n))
            );
          });
        }
        sum(e, t = null, n) {
          return this.load().then(() => {
            const r = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(r, t),
              this.calculateStatistic('sum', r, -1, this._defaultTracker(n))
            );
          });
        }
        stdev(e, t = null, n) {
          return this.load().then(() => {
            const r = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(r, t),
              this.calculateStatistic('stdev', r, -1, this._defaultTracker(n))
            );
          });
        }
        variance(e, t = null, n) {
          return this.load().then(() => {
            const r = o.WhereClause.create(e, this.getFieldsIndex());
            return (
              this._substituteVars(r, t),
              this.calculateStatistic(
                'variance',
                r,
                -1,
                this._defaultTracker(n),
              )
            );
          });
        }
        count(e) {
          return this.load().then(() =>
            this.calculateStatistic(
              'count',
              o.WhereClause.create('1', this.getFieldsIndex()),
              -1,
              this._defaultTracker(e),
            ),
          );
        }
        _defaultTracker(e) {
          return e || { aborted: !1 };
        }
        forEach(e, t) {
          return (0, r.Ue)((n, r) => {
            this._forEachImpl(
              this.iterator(this._defaultTracker(t)),
              e,
              this,
              n,
              r,
              0,
            );
          });
        }
        _forEachImpl(e, t, n, s, a, i) {
          try {
            if (++i > 1e3)
              return void setTimeout(() => {
                (i = 0), this._forEachImpl(e, t, n, s, a, i);
              }, 0);
            e.next().then((l) => {
              try {
                if (null === l) s(n);
                else {
                  const u = t(l);
                  null == u
                    ? this._forEachImpl(e, t, n, s, a, i)
                    : (0, r.y8)(u)
                    ? u.then(() => {
                        try {
                          this._forEachImpl(e, t, n, s, a, i);
                        } catch (e) {
                          a(e);
                        }
                      }, a)
                    : this._forEachImpl(e, t, n, s, a, i);
                }
              } catch (e) {
                a(e);
              }
            }, a);
          } catch (e) {
            a(e);
          }
        }
        convertToJSON(e) {
          const t = {
            layerDefinition: { geometryType: this.geometryType, fields: [] },
            featureSet: { features: [], geometryType: this.geometryType },
          };
          for (let e = 0; e < this.fields.length; e++)
            t.layerDefinition.fields.push((0, i.Sh)(this.fields[e]));
          return this.reduce(
            (e, n) => {
              const r = {
                geometry: n.geometry && n.geometry.toJSON(),
                attributes: {},
              };
              for (const e in n.attributes) r.attributes[e] = n.attributes[e];
              return t.featureSet.features.push(r), 1;
            },
            0,
            e,
          ).then(() => t);
        }
        castToText() {
          return 'object, FeatureSet';
        }
        queryAttachments(e, t, n, r, s) {
          return this._parent.queryAttachments(e, t, n, r, s);
        }
        serviceUrl() {
          return this._parent.serviceUrl();
        }
        subtypes() {
          return this.typeIdField
            ? {
                subtypeField: this.typeIdField,
                subtypes: this.types
                  ? this.types.map((e) => ({ name: e.name, code: e.id }))
                  : [],
              }
            : null;
        }
        relationshipMetaData() {
          return this._parent.relationshipMetaData();
        }
        get gdbVersion() {
          return this._parent ? this._parent.gdbVersion : '';
        }
        schema() {
          const e = [];
          for (const t of this.fields) e.push((0, i.Sh)(t));
          return {
            objectIdField: this.objectIdField,
            globalIdField: this.globalIdField,
            geometryType:
              void 0 === i.q2[this.geometryType] ? '' : i.q2[this.geometryType],
            fields: e,
          };
        }
        convertToText(e, t) {
          return 'schema' === e
            ? this._ensureLoaded().then(() => JSON.stringify(this.schema()))
            : 'featureset' === e
            ? this._ensureLoaded().then(() => {
                const e = [];
                return this.reduce(
                  (t, n) => {
                    const r = {
                      geometry: n.geometry ? n.geometry.toJSON() : null,
                      attributes: n.attributes,
                    };
                    return (
                      null !== r.geometry &&
                        r.geometry.spatialReference &&
                        delete r.geometry.spatialReference,
                      e.push(r),
                      1
                    );
                  },
                  0,
                  t,
                ).then(() => {
                  const t = this.schema();
                  return (
                    (t.features = e),
                    (t.spatialReference = this.spatialReference.toJSON()),
                    JSON.stringify(t)
                  );
                });
              })
            : (0, r.DB)(this.castToText());
        }
        getFeatureByObjectId(e, t) {
          return this._parent.getFeatureByObjectId(e, t);
        }
        getOwningSystemUrl() {
          return this._parent.getOwningSystemUrl();
        }
        getIdentityUser() {
          return this._parent.getIdentityUser();
        }
        getRootFeatureSet() {
          return null !== this._parent
            ? this._parent.getRootFeatureSet()
            : this;
        }
        getDataSourceFeatureSet() {
          return null !== this._parent
            ? this._parent.getDataSourceFeatureSet()
            : this;
        }
        castAsJson(e = null) {
          return 'keeptype' === (null == e ? void 0 : e.featureset)
            ? this
            : 'none' === (null == e ? void 0 : e.featureset)
            ? null
            : { type: 'FeatureSet' };
        }
        castAsJsonAsync(e = null, t = null) {
          return 'keeptype' === (null == t ? void 0 : t.featureset)
            ? (0, r.DB)(this)
            : 'schema' === (null == t ? void 0 : t.featureset)
            ? this._ensureLoaded().then(() =>
                JSON.parse(JSON.stringify(this.schema())),
              )
            : 'none' === (null == t ? void 0 : t.featureset)
            ? (0, r.DB)(null)
            : this._ensureLoaded().then(() => {
                const n = [];
                return this.reduce(
                  (e, r) => {
                    const s = {
                      geometry: r.geometry
                        ? !0 === (null == t ? void 0 : t.keepGeometryType)
                          ? r.geometry
                          : r.geometry.toJSON()
                        : null,
                      attributes: r.attributes,
                    };
                    return (
                      null !== s.geometry &&
                        s.geometry.spatialReference &&
                        !0 !== (null == t ? void 0 : t.keepGeometryType) &&
                        delete s.geometry.spatialReference,
                      n.push(s),
                      1
                    );
                  },
                  0,
                  e,
                ).then(() => {
                  const e = this.schema();
                  return (
                    (e.features = n),
                    (e.spatialReference =
                      !0 === (null == t ? void 0 : t.keepGeometryType)
                        ? this.spatialReference
                        : this.spatialReference.toJSON()),
                    e
                  );
                });
              });
        }
      }
      _._featuresetFunctions = {};
    },
    90961: (e, t, n) => {
      n.d(t, { Z: () => r });
      class r {
        constructor(e, t, n, r) {
          (this._candidates = null),
            (this._known = null),
            (this._lastFetchedIndex = 0),
            (this._ordered = !1),
            (this.pagesDefinition = null),
            (this._candidates = e),
            (this._known = t),
            (this._ordered = n),
            (this.pagesDefinition = r);
        }
      }
    },
    48039: (e, t, n) => {
      n.d(t, { Z: () => r });
      class r {
        constructor() {
          (this._databaseTypeMetaData = {}), (this._layerInfo = {});
        }
        clearDatabaseType(e) {
          void 0 === this._databaseTypeMetaData[e] &&
            delete this._databaseTypeMetaData[e];
        }
        getDatabaseType(e) {
          return 'MUSTBESET' === e || void 0 === this._databaseTypeMetaData[e]
            ? null
            : this._databaseTypeMetaData[e];
        }
        setDatabaseType(e, t) {
          this._databaseTypeMetaData[e] = t;
        }
        getLayerInfo(e) {
          return void 0 === this._layerInfo[e] ? null : this._layerInfo[e];
        }
        setLayerInfo(e, t) {
          this._layerInfo[e] = t;
        }
        clearLayerInfo(e) {
          void 0 !== this._layerInfo[e] && delete this._layerInfo[e];
        }
      }
      r.applicationCache = null;
    },
    36515: (e, t, n) => {
      n.d(t, {
        $e: () => o,
        TE: () => T,
        y5: () => S,
        oX: () => d,
        vR: () => _,
        DT: () => p,
        bB: () => u,
        hq: () => y,
        zR: () => i,
        XF: () => l,
        fz: () => h,
      });
      var r = n(90658),
        s = n(41534),
        a = n(99490);
      function i(e, t) {
        return c(e.parseTree, t, e.parameters);
      }
      function l(e, t, n) {
        return c(e, t, n);
      }
      function u(e, t, n, a) {
        return s.WhereClause.create(
          c(e.parseTree, r.Bj.Standardised, e.parameters, t, n),
          a,
        );
      }
      function o(e, t, n = 'AND') {
        return s.WhereClause.create(
          '((' +
            i(e, r.Bj.Standardised) +
            ')' +
            n +
            '(' +
            i(t, r.Bj.Standardised) +
            '))',
          e.fieldsIndex,
        );
      }
      function c(e, t, n, r = null, s = null) {
        let a, i, l, u;
        switch (e.type) {
          case 'interval':
            return T(c(e.value, t, n, r, s), e.qualifier, e.op);
          case 'case_expression': {
            let a = ' CASE ';
            'simple' === e.format && (a += c(e.operand, t, n, r, s));
            for (let i = 0; i < e.clauses.length; i++)
              a +=
                ' WHEN ' +
                c(e.clauses[i].operand, t, n, r, s) +
                ' THEN ' +
                c(e.clauses[i].value, t, n, r, s);
            return (
              null !== e.else && (a += ' ELSE ' + c(e.else, t, n, r, s)),
              (a += ' END '),
              a
            );
          }
          case 'param': {
            const r = n[e.value.toLowerCase()];
            if ('string' == typeof r)
              return (
                "'" +
                n[e.value.toLowerCase()].toString().replace(/'/g, "''") +
                "'"
              );
            if (r instanceof Date) return d(r, t);
            if (r instanceof Array) {
              const e = [];
              for (let n = 0; n < r.length; n++)
                'string' == typeof r[n]
                  ? e.push("'" + r[n].toString().replace(/'/g, "''") + "'")
                  : r[n] instanceof Date
                  ? e.push(d(r[n], t))
                  : e.push(r[n].toString());
              return e;
            }
            return r.toString();
          }
          case 'expr_list':
            i = [];
            for (const a of e.value) i.push(c(a, t, n, r, s));
            return i;
          case 'unary_expr':
            return ' ( NOT ' + c(e.expr, t, n, r, s) + ' ) ';
          case 'binary_expr':
            switch (e.operator) {
              case 'AND':
                return (
                  ' (' +
                  c(e.left, t, n, r, s) +
                  ' AND ' +
                  c(e.right, t, n, r, s) +
                  ') '
                );
              case 'OR':
                return (
                  ' (' +
                  c(e.left, t, n, r, s) +
                  ' OR ' +
                  c(e.right, t, n, r, s) +
                  ') '
                );
              case 'IS':
                if ('null' !== e.right.type)
                  throw new Error('Unsupported RHS for IS');
                return ' (' + c(e.left, t, n, r, s) + ' IS NULL )';
              case 'ISNOT':
                if ('null' !== e.right.type)
                  throw new Error('Unsupported RHS for IS');
                return ' (' + c(e.left, t, n, r, s) + ' IS NOT NULL )';
              case 'IN':
                return (
                  (a = []),
                  'expr_list' === e.right.type
                    ? ((a = c(e.right, t, n, r, s)),
                      ' (' +
                        c(e.left, t, n, r, s) +
                        ' IN (' +
                        a.join(',') +
                        ')) ')
                    : ((u = c(e.right, t, n, r, s)),
                      u instanceof Array
                        ? ' (' +
                          c(e.left, t, n, r, s) +
                          ' IN (' +
                          u.join(',') +
                          ')) '
                        : ' (' + c(e.left, t, n, r, s) + ' IN (' + u + ')) ')
                );
              case 'NOT IN':
                return (
                  (a = []),
                  'expr_list' === e.right.type
                    ? ((a = c(e.right, t, n, r, s)),
                      ' (' +
                        c(e.left, t, n, r, s) +
                        ' NOT IN (' +
                        a.join(',') +
                        ')) ')
                    : ((u = c(e.right, t, n, r, s)),
                      u instanceof Array
                        ? ' (' +
                          c(e.left, t, n, r, s) +
                          ' NOT IN (' +
                          u.join(',') +
                          ')) '
                        : ' (' +
                          c(e.left, t, n, r, s) +
                          ' NOT IN (' +
                          u +
                          ')) ')
                );
              case 'BETWEEN':
                return (
                  (l = c(e.right, t, n, r, s)),
                  ' (' +
                    c(e.left, t, n, r, s) +
                    ' BETWEEN ' +
                    l[0] +
                    ' AND ' +
                    l[1] +
                    ' ) '
                );
              case 'NOTBETWEEN':
                return (
                  (l = c(e.right, t, n, r, s)),
                  ' (' +
                    c(e.left, t, n, r, s) +
                    ' NOT BETWEEN ' +
                    l[0] +
                    ' AND ' +
                    l[1] +
                    ' ) '
                );
              case 'LIKE':
                return '' !== e.escape
                  ? ' (' +
                      c(e.left, t, n, r, s) +
                      ' LIKE ' +
                      c(e.right, t, n, r, s) +
                      " ESCAPE '" +
                      e.escape +
                      "') "
                  : ' (' +
                      c(e.left, t, n, r, s) +
                      ' LIKE ' +
                      c(e.right, t, n, r, s) +
                      ') ';
              case 'NOT LIKE':
                return '' !== e.escape
                  ? ' (' +
                      c(e.left, t, n, r, s) +
                      ' NOT LIKE ' +
                      c(e.right, t, n, r, s) +
                      " ESCAPE '" +
                      e.escape +
                      "') "
                  : ' (' +
                      c(e.left, t, n, r, s) +
                      ' NOT LIKE ' +
                      c(e.right, t, n, r, s) +
                      ') ';
              case '<>':
              case '<':
              case '>':
              case '>=':
              case '<=':
              case '=':
              case '*':
              case '-':
              case '+':
              case '/':
                return (
                  ' (' +
                  c(e.left, t, n, r, s) +
                  ' ' +
                  e.operator +
                  ' ' +
                  c(e.right, t, n, r, s) +
                  ') '
                );
            }
            throw new Error('Not Supported Operator ' + e.operator);
          case 'null':
            return 'null';
          case 'bool':
            return !0 === e.value ? '1' : '0';
          case 'string':
            return "'" + e.value.toString().replace(/'/g, "''") + "'";
          case 'timestamp':
          case 'date':
            return d(e.value, t);
          case 'number':
            return e.value.toString();
          case 'current_time':
            return _('date' === e.mode, t);
          case 'column_ref':
            return r && r.toLowerCase() === e.column.toLowerCase()
              ? '(' + s + ')'
              : e.column;
          case 'function': {
            const a = c(e.args, t, n, r, s);
            return h(e.name, a, t);
          }
        }
        throw new Error('Unsupported sql syntax ' + e.type);
      }
      function h(e, t, n) {
        switch (e.toLowerCase().trim()) {
          case 'abs':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for call to ABS');
            return 'abs(' + t[0] + ')';
          case 'ceiling':
          case 'ceil':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for call to CEILING');
            switch (n) {
              case r.Bj.Standardised:
              case r.Bj.StandardisedNoInterval:
            }
            return 'CEILING(' + t[0] + ')';
          case 'floor':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for call to Floor');
            return 'FLOOR(' + t[0] + ')';
          case 'log':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for call to LOG');
            return 'LOG(' + t[0] + ')';
          case 'log10':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for call to LOG10');
            return 'LOG10(' + t[0] + ')';
          case 'power':
            if (2 !== t.length)
              throw new Error('Invalid Parameter for call to POWER');
            return 'POWER(' + t[0] + ',' + t[1] + ')';
          case 'round':
            if (2 === t.length) return 'ROUND(' + t[0] + ',' + t[1] + ')';
            if (1 === t.length) return 'ROUND(' + t[0] + ')';
            throw new Error('Invalid Parameter for call to ROUND');
          case 'truncate':
            if (t.length < 1 || t.length > 2)
              throw new Error('Invalid Parameter for TRUNCATE function');
            return n === r.Bj.SqlServer
              ? 'ROUND(' + t[0] + (1 === t.length ? '0' : ',' + t[1]) + ',1)'
              : 'TRUNCATE(' + t[0] + (1 === t.length ? ')' : ',' + t[1] + ')');
          case 'char_length':
          case 'len':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for CHAR_LENGTH function');
            switch (n) {
              case r.Bj.SqlServer:
                return 'LEN(' + t[0] + ')';
              case r.Bj.Oracle:
                return 'LENGTH(' + t[0] + ')';
              default:
                return 'CHAR_LENGTH(' + t[0] + ')';
            }
          case 'concat':
            if (t.length < 1)
              throw new Error('Invalid Parameter for CONCAT function');
            {
              let e = 'CONCAT(';
              for (let n = 0; n < t.length; n++)
                0 !== n && (e += ','), (e += t[n]);
              return (e += ')'), e;
            }
          case 'lower':
          case 'lcase':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for Lower function');
            return 'LOWER(' + t[0] + ')';
          case 'upper':
          case 'ucase':
            if (1 !== t.length)
              throw new Error('Invalid Parameter for Upper function');
            return 'UPPER(' + t[0] + ')';
          case 'substring': {
            let e = '';
            switch (n) {
              case r.Bj.Oracle:
                return (
                  (e = 'SUBSTR(' + t[0] + ',' + t[1]),
                  3 === t.length && (e += ',' + t[2]),
                  (e += ')'),
                  e
                );
              case r.Bj.SqlServer:
                return (
                  (e =
                    3 === t.length
                      ? 'SUBSTRING(' + t[0] + ',' + t[1] + ',' + t[2] + ')'
                      : 'SUBSTRING(' +
                        t[0] +
                        ',  ' +
                        t[1] +
                        ', LEN(' +
                        t[0] +
                        ') - ' +
                        t[1] +
                        ')'),
                  e
                );
              default:
                return (
                  (e = 'SUBSTRING(' + t[0] + ' FROM ' + t[1]),
                  3 === t.length && (e += ' FOR ' + t[2]),
                  (e += ')'),
                  e
                );
            }
          }
          case 'extract':
            return 'EXTRACT(' + t[0].replace(/\'/g, '') + ' FROM ' + t[1] + ')';
        }
        throw new Error('Function Not Recognised');
      }
      function d(e, t) {
        const n = a.ou.fromJSDate(e),
          s =
            0 === n.hour &&
            0 === n.minute &&
            0 === n.second &&
            0 === n.millisecond;
        switch (t) {
          case r.Bj.FILEGDB:
          case r.Bj.Standardised:
          case r.Bj.StandardisedNoInterval:
            return s
              ? `date '${n.toFormat('yyyy-LL-dd')}'`
              : `date '${n.toFormat('yyyy-LL-dd HH:mm:ss')}'`;
          case r.Bj.Oracle:
            return s
              ? `TO_DATE('${n.toFormat('yyyy-LL-dd')}','YYYY-MM-DD')`
              : `TO_DATE('${n.toFormat(
                  'yyyy-LL-dd HH:mm:ss',
                )}','YYYY-MM-DD HH24:MI:SS')`;
          case r.Bj.SqlServer:
            return `'${n.toFormat(s ? 'yyyy-LL-dd' : 'yyyy-LL-dd HH:mm:ss')}'`;
          case r.Bj.PGDB:
            return `#${n.toFormat(s ? 'LL-dd-yyyy' : 'LL-dd-yyyy HH:mm:ss')}#`;
          case r.Bj.Postgres:
            return `TIMESTAMP '${n.toFormat(
              s ? 'yyyy-LL-dd' : 'yyyy-LL-dd HH:mm:ss',
            )}'`;
          default:
            return `date '${n.toFormat('yyyy-LL-dd HH:mm:ss')}'`;
        }
      }
      function _(e, t) {
        switch (t) {
          case r.Bj.FILEGDB:
          case r.Bj.Standardised:
          case r.Bj.StandardisedNoInterval:
          case r.Bj.Oracle:
            return e ? 'CURRENT_DATE' : 'CURRENT_TIMESTAMP';
          case r.Bj.SqlServer:
            return e ? 'CAST(GETDATE() AS DATE)' : 'GETDATE()';
          case r.Bj.PGDB:
          case r.Bj.Postgres:
          default:
            return e ? 'CURRENT_DATE' : 'CURRENT_TIMESTAMP';
        }
      }
      function p(e, t, n = {}) {
        const r = {},
          s = {},
          a = {
            esriFieldTypeSmallInteger: 'integer',
            esriFieldTypeInteger: 'integer',
            esriFieldTypeSingle: 'double',
            esriFieldTypeDouble: 'double',
            esriFieldTypeString: 'string',
            esriFieldTypeDate: 'date',
            esriFieldTypeOID: 'integer',
            oid: 'integer',
            long: 'integer',
            'small-integer': 'integer',
            integer: 'integer',
            single: 'double',
            double: 'double',
            date: 'date',
            string: 'string',
          };
        for (const e of t) {
          const t = a[e.type];
          r[e.name.toLowerCase()] = void 0 === t ? '' : t;
        }
        for (const e in n) {
          const t = a[n[e]];
          s[e.toLowerCase()] = void 0 === t ? '' : t;
        }
        switch (f(r, e.parseTree, e.parameters, s)) {
          case 'double':
            return 'double';
          case 'integer':
            return 'integer';
          case 'date':
            return 'date';
          case 'string':
            return 'string';
        }
        return '';
      }
      function f(e, t, n, r) {
        let s;
        switch (t.type) {
          case 'interval':
            return 'integer';
          case 'case_expression': {
            const s = [];
            if ('simple' === t.format) {
              for (let a = 0; a < t.clauses.length; a++)
                s.push(f(e, t.clauses[a].value, n, r));
              null !== t.else && s.push(f(e, t.else, n, r));
            } else {
              for (let a = 0; a < t.clauses.length; a++)
                s.push(f(e, t.else, n, r));
              null !== t.else && s.push(f(e, t.else, n, r));
            }
            return m(s);
          }
          case 'param': {
            const e = r[t.value.toLowerCase()];
            if (void 0 === e && n) {
              const e = n[t.value.toLowerCase()];
              if (void 0 === e) return '';
              if (null === e) return '';
              if ('string' == typeof e || e instanceof String) return 'string';
              if ('boolean' == typeof e) return 'boolean';
              if (e instanceof Date) return 'date';
              if ('number' == typeof e)
                return e % 1 == 0 ? 'integer' : 'double';
            }
            return void 0 === e ? '' : e;
          }
          case 'expr_list': {
            const s = [];
            for (const a of t.value) s.push(f(e, a, n, r));
            return s;
          }
          case 'unary_expr':
            return 'boolean';
          case 'binary_expr':
            switch (t.operator) {
              case 'AND':
              case 'OR':
              case 'IN':
              case 'NOT IN':
              case 'BETWEEN':
              case 'NOTBETWEEN':
              case 'LIKE':
              case 'NOT LIKE':
              case '<>':
              case '<':
              case '>':
              case '>=':
              case '<=':
              case '=':
                return 'boolean';
              case 'IS':
              case 'ISNOT':
                if ('null' !== t.right.type)
                  throw new Error('Unsupported RHS for IS');
                return 'boolean';
              case '*':
              case '-':
              case '+':
              case '/':
                return m([f(e, t.left, n, r), f(e, t.right, n, r)]);
              default:
                throw new Error('Not Supported Operator ' + t.operator);
            }
          case 'null':
            return '';
          case 'bool':
            return 'boolean';
          case 'string':
            return 'string';
          case 'number':
            return null === t.value
              ? ''
              : t.value % 1 == 0
              ? 'integer'
              : 'double';
          case 'date':
          case 'timestamp':
          case 'current_time':
            return 'date';
          case 'column_ref': {
            const n = e[t.column.toLowerCase()];
            return void 0 === n ? '' : n;
          }
          case 'function':
            switch (t.name.toLowerCase()) {
              case 'position':
              case 'extract':
              case 'char_length':
                return 'integer';
              case 'round':
                return (
                  (s = f(e, t.args, n, r)),
                  s instanceof Array ? (s.length > 0 ? s[0] : '') : s
                );
              case 'sign':
                return (
                  (s = f(e, t.args, n, r)),
                  s instanceof Array && (s = m(s)),
                  'integer' === s || 'double' === s ? s : 'double'
                );
              case 'ceiling':
              case 'floor':
              case 'abs': {
                const s = f(e, t.args, n, r);
                return s instanceof Array ? m(s) : s;
              }
              case 'area':
              case 'length':
              case 'log':
              case 'log10':
              case 'sin':
              case 'cos':
              case 'tan':
              case 'asin':
              case 'acos':
              case 'atan':
              case 'power':
              case 'truncate':
                return 'double';
              case 'substring':
              case 'trim':
              case 'concat':
              case 'lower':
              case 'upper':
                return 'string';
            }
            return '';
        }
        throw new Error('Unsupported sql syntax ' + t.type);
      }
      const g = { boolean: 1, string: 2, integer: 3, double: 4, date: 5 };
      function m(e) {
        if (e) {
          let t = '';
          for (const n of e) '' !== n && (t = '' === t || g[t] < g[n] ? n : t);
          return t;
        }
        return '';
      }
      function y(e, t) {
        return w(e.parseTree, t);
      }
      function S(e) {
        return 'column_ref' === e.parseTree.type;
      }
      function w(e, t) {
        if (null == e) return !1;
        switch (e.type) {
          case 'when_clause':
            return w(e.operand, t) || w(e.value, t);
          case 'case_expression':
            for (const n of e.clauses) if (w(n, t)) return !0;
            return (
              !('simple' !== e.format || !w(e.operand, t)) ||
              !(null === e.else || !w(e.else, t))
            );
          case 'param':
          case 'null':
          case 'bool':
          case 'date':
          case 'timestamp':
          case 'string':
          case 'number':
            return !1;
          case 'expr_list':
            for (const n of e.value) if (w(n, t)) return !0;
            return !1;
          case 'unary_expr':
            return w(e.expr, t);
          case 'binary_expr':
            return w(e.left, t) || w(e.right, t);
          case 'column_ref':
            return t.toLowerCase() === e.column.toLowerCase();
          case 'function':
            return w(e.args, t);
        }
        return !1;
      }
      function I(e) {
        let t = '';
        return (t += e.period.toUpperCase()), t;
      }
      function T(e, t, n) {
        let r = '';
        return (
          (r =
            'interval-period' === t.type
              ? I(t)
              : I(t.start) + ' TO ' + I(t.end)),
          'INTERVAL ' + n + ' ' + e + ' ' + r
        );
      }
    },
    95002: (e, t, n) => {
      n.d(t, {
        tj: () => d,
        QX: () => S,
        g3: () => h,
        EB: () => T,
        Fp: () => p,
        J6: () => f,
        VV: () => _,
        m: () => m,
        Sm: () => y,
        CA: () => g,
      });
      var r = n(61363),
        s = n(90658),
        a = n(36515),
        i = n(95330);
      function l(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t += e[n];
        return t / e.length;
      }
      function u(e) {
        const t = l(e);
        let n = 0;
        for (let r = 0; r < e.length; r++) n += (t - e[r]) ** 2;
        return n / e.length;
      }
      function o(e) {
        const t = l(e);
        let n = 0;
        for (let r = 0; r < e.length; r++) n += (t - e[r]) ** 2;
        return n / (e.length - 1);
      }
      function c(e) {
        let t = 0;
        for (let n = 0; n < e.length; n++) t += e[n];
        return t;
      }
      function h(e) {
        switch (e.toLowerCase()) {
          case 'distinct':
            return 'distinct';
          case 'avg':
          case 'mean':
            return 'avg';
          case 'min':
            return 'min';
          case 'sum':
            return 'sum';
          case 'max':
            return 'max';
          case 'stdev':
          case 'stddev':
            return 'stddev';
          case 'var':
          case 'variance':
            return 'var';
          case 'count':
            return 'count';
        }
        return '';
      }
      function d(e, t, n = 1e3) {
        switch (e.toLowerCase()) {
          case 'distinct':
            return (function (e, t) {
              const n = [],
                r = {},
                a = [];
              for (let i = 0; i < e.length; i++) {
                if (void 0 !== e[i] && null !== e[i]) {
                  const t = e[i];
                  if ((0, s.hj)(t) || (0, s.HD)(t))
                    void 0 === r[t] && (n.push(t), (r[t] = 1));
                  else {
                    let e = !1;
                    for (let n = 0; n < a.length; n++)
                      !0 === (0, s.tt)(a[n], t) && (e = !0);
                    !1 === e && (a.push(t), n.push(t));
                  }
                }
                if (n.length >= t && -1 !== t) return n;
              }
              return n;
            })(t, n);
          case 'avg':
          case 'mean':
            return l(t);
          case 'min':
            return Math.min.apply(Math, t);
          case 'sum':
            return c(t);
          case 'max':
            return Math.max.apply(Math, t);
          case 'stdev':
          case 'stddev':
            return Math.sqrt(u(t));
          case 'var':
          case 'variance':
            return u(t);
          case 'count':
            return t.length;
        }
        return 0;
      }
      function _(e, t, n) {
        return w(e, t, n, !0).then((e) =>
          0 === e.length ? null : Math.min.apply(Math, e),
        );
      }
      function p(e, t, n) {
        return w(e, t, n, !0).then((e) =>
          0 === e.length ? null : Math.max.apply(Math, e),
        );
      }
      function f(e, t, n) {
        let r = '';
        return (
          !1 === (0, a.y5)(t) && (r = (0, a.DT)(t, e.fields, null)),
          w(e, t, n, !0).then((e) => {
            if (0 === e.length) return null;
            const t = l(e);
            return null === t
              ? t
              : 'integer' === r
              ? (function (e) {
                  return (
                    (e = +e),
                    isFinite(e)
                      ? e - (e % 1) || (e < 0 ? -0 : 0 === e ? e : 0)
                      : e
                  );
                })(t)
              : t;
          })
        );
      }
      function g(e, t, n) {
        return w(e, t, n, !0).then((e) => (0 === e.length ? null : o(e)));
      }
      function m(e, t, n) {
        return w(e, t, n, !0).then((e) =>
          0 === e.length ? null : Math.sqrt(o(e)),
        );
      }
      function y(e, t, n) {
        return w(e, t, n, !0).then((e) => (0 === e.length ? null : c(e)));
      }
      function S(e, t) {
        try {
          return e.iterator(t).count();
        } catch (e) {
          return (0, i.d1)(e);
        }
      }
      function w(e, t, n, r = !1) {
        try {
          const s = e.iterator(n);
          return (0, i.Ue)((e, n) => {
            I(s, [], t, r, e, n);
          });
        } catch (e) {
          return (0, i.d1)(e);
        }
      }
      function I(e, t, n, s, a, i) {
        (0, r.X)(
          e.next().then((r) => {
            try {
              if (null !== r) {
                const l = n.calculateValue(r);
                return (
                  null === l
                    ? !1 === s && (t[t.length] = l)
                    : (t[t.length] = l),
                  I(e, t, n, s, a, i)
                );
              }
              a(t);
            } catch (e) {
              i(e);
            }
          }, i),
        );
      }
      function T(e, t, n = 1e3, r = null) {
        return (function (e, t, n, r) {
          try {
            return b(e.iterator(r), {}, [], t, n);
          } catch (e) {
            return (0, i.d1)(e);
          }
        })(e, t, n, r);
      }
      function b(e, t, n, r, s) {
        return e.next().then((a) => {
          if (null !== a) {
            const i = r.calculateValue(a);
            return (
              null != i && void 0 === t[i] && (n.push(i), (t[i] = 1)),
              n.length >= s && -1 !== s ? n : b(e, t, n, r, s)
            );
          }
          return n;
        });
      }
    },
    80903: (e, t, n) => {
      n.d(t, { Z: () => u });
      var r = n(50758),
        s = n(92604),
        a = n(95330),
        i = n(25045);
      const l = s.Z.getLogger('esri.core.workers.Connection');
      class u {
        constructor() {
          (this._clients = new Array()),
            (this._clientPromises = new Array()),
            (this._clientIdx = 0);
        }
        destroy() {
          this.close();
        }
        get closed() {
          return !this._clients || !this._clients.length;
        }
        open(e, t) {
          return new Promise((n, r) => {
            let s = !0;
            const l = (e) => {
              (0, a.k_)(t.signal), s && ((s = !1), e());
            };
            (this._clients.length = e.length),
              (this._clientPromises.length = e.length);
            for (let s = 0; s < e.length; ++s) {
              const u = e[s];
              (0, a.y8)(u)
                ? (this._clientPromises[s] = u.then(
                    (e) => (
                      (this._clients[s] = new i.default(e, t)),
                      l(n),
                      this._clients[s]
                    ),
                    () => (l(r), null),
                  ))
                : ((this._clients[s] = new i.default(u, t)),
                  (this._clientPromises[s] = Promise.resolve(this._clients[s])),
                  l(n));
            }
          });
        }
        broadcast(e, t, n) {
          const r = new Array(this._clientPromises.length);
          for (let s = 0; s < this._clientPromises.length; ++s) {
            const a = this._clientPromises[s];
            r[s] = a.then((r) => r.invoke(e, t, n));
          }
          return r;
        }
        close() {
          for (const e of this._clientPromises) e.then((e) => e.close());
          (this._clients.length = 0), (this._clientPromises.length = 0);
        }
        getAvailableClient() {
          let e;
          for (let t = 0; t < this._clients.length; ++t) {
            const n = this._clients[t];
            if (n) {
              if (!n.isBusy()) return Promise.resolve(n);
            } else (e = e || []), e.push(this._clientPromises[t]);
          }
          return e
            ? Promise.race(e)
            : ((this._clientIdx = (this._clientIdx + 1) % this._clients.length),
              Promise.resolve(this._clients[this._clientIdx]));
        }
        invoke(e, t, n) {
          let r = null;
          return (
            Array.isArray(n)
              ? (l.warn(
                  'invoke()',
                  'The transferList parameter is deprecated, use the options object instead',
                ),
                (r = { transferList: n }))
              : (r = n),
            this.closed
              ? Promise.reject(new Error('Connection closed'))
              : this.getAvailableClient().then((n) => n.invoke(e, t, r))
          );
        }
        on(e, t) {
          return Promise.all(this._clientPromises).then(() =>
            (0, r.AL)(this._clients.map((n) => n.on(e, t))),
          );
        }
        openPorts() {
          return new Promise((e) => {
            const t = new Array(this._clientPromises.length);
            let n = t.length;
            for (let r = 0; r < this._clientPromises.length; ++r)
              this._clientPromises[r].then((s) => {
                (t[r] = s.openPort()), 0 == --n && e(t);
              });
          });
        }
        get test() {
          return { numClients: this._clients.length };
        }
      }
    },
    8667: (e, t, n) => {
      n.d(t, {
        f3: () => C,
        oq: () => c,
        r3: () => d,
        jU: () => _,
        z7: () => h,
        Cz: () => N,
        e5: () => F,
        ED: () => S,
        TE: () => p,
        fS: () => f,
        D$: () => x,
        Y4: () => O,
        rd: () => R,
        j2: () => B,
        kQ: () => G,
        wf: () => v,
        kK: () => g,
        Gg: () => T,
        cv: () => P,
        Nm: () => w,
        CJ: () => k,
        sz: () => L,
        LV: () => I,
        U1: () => A,
        og: () => b,
        Sp: () => E,
        W4: () => m,
        G0: () => D,
        uh: () => y,
      }),
        n(66577);
      var r = n(78346),
        s = (n(13473), n(33955));
      function a(e) {
        var t;
        return Array.isArray(e)
          ? null == (t = e[0])
            ? void 0
            : t.spatialReference
          : null == e
          ? void 0
          : e.spatialReference;
      }
      function i(e) {
        return e
          ? Array.isArray(e)
            ? e.map(i)
            : e.toJSON
            ? e.toJSON()
            : e
          : e;
      }
      function l(e) {
        return Array.isArray(e) ? e.map((e) => (0, s.im)(e)) : (0, s.im)(e);
      }
      let u;
      async function o(e, t) {
        return (
          await (async function () {
            return (
              u ||
                (u = (0, r.bA)('geometryEngineWorker', {
                  strategy: 'distributed',
                })),
              u
            );
          })()
        ).invoke('executeGEOperation', { operation: e, parameters: i(t) });
      }
      async function c(e, t) {
        return l(await o('clip', [a(e), e, t]));
      }
      async function h(e, t) {
        return l(await o('cut', [a(e), e, t]));
      }
      function d(e, t) {
        return o('contains', [a(e), e, t]);
      }
      function _(e, t) {
        return o('crosses', [a(e), e, t]);
      }
      function p(e, t, n) {
        return o('distance', [a(e), e, t, n]);
      }
      function f(e, t) {
        return o('equals', [a(e), e, t]);
      }
      function g(e, t) {
        return o('intersects', [a(e), e, t]);
      }
      function m(e, t) {
        return o('touches', [a(e), e, t]);
      }
      function y(e, t) {
        return o('within', [a(e), e, t]);
      }
      function S(e, t) {
        return o('disjoint', [a(e), e, t]);
      }
      function w(e, t) {
        return o('overlaps', [a(e), e, t]);
      }
      function I(e, t, n) {
        return o('relate', [a(e), e, t, n]);
      }
      function T(e) {
        return o('isSimple', [a(e), e]);
      }
      async function b(e) {
        return l(await o('simplify', [a(e), e]));
      }
      async function F(e, t) {
        return l(await o('difference', [a(e), e, t]));
      }
      async function E(e, t) {
        return l(await o('symmetricDifference', [a(e), e, t]));
      }
      async function v(e, t) {
        return l(await o('intersect', [a(e), e, t]));
      }
      async function D(e, t = null) {
        const n = (function (e, t) {
          let n;
          return (
            Array.isArray(e)
              ? (n = e)
              : ((n = []), n.push(e), null != t && n.push(t)),
            n
          );
        })(e, t);
        return l(await o('union', [a(n), n]));
      }
      async function P(e, t, n, r, s, i) {
        return l(await o('offset', [a(e), e, t, n, r, s, i]));
      }
      async function C(e, t, n, r = !1) {
        const s = [a(e), e, t, n, r];
        return l(await o('buffer', s));
      }
      async function R(e, t, n, r, s, i) {
        const u = [a(e), e, t, n, r, s, i];
        return l(await o('geodesicBuffer', u));
      }
      async function A(e, t, n) {
        var r;
        if (null == e) throw new Error('Illegal Argument Exception');
        const s = e.spatialReference;
        n =
          null != (r = n)
            ? r
            : (function (e) {
                return 'xmin' in e ? e.center : 'x' in e ? e : e.extent.center;
              })(e);
        const a = e.constructor.fromJSON(await o('rotate', [s, e, t, n]));
        return (a.spatialReference = s), a;
      }
      async function x(e, t, n, r) {
        return l(await o('generalize', [a(e), e, t, n, r]));
      }
      async function N(e, t, n) {
        return l(await o('densify', [a(e), e, t, n]));
      }
      async function B(e, t, n, r = 0) {
        return l(await o('geodesicDensify', [a(e), e, t, n, r]));
      }
      function k(e, t) {
        return o('planarArea', [a(e), e, t]);
      }
      function L(e, t) {
        return o('planarLength', [a(e), e, t]);
      }
      function O(e, t, n) {
        return o('geodesicArea', [a(e), e, t, n]);
      }
      function G(e, t, n) {
        return o('geodesicLength', [a(e), e, t, n]);
      }
    },
  },
]);
