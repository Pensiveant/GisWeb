'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [7873],
  {
    97873: (e, t, r) => {
      r.r(t),
        r.d(t, {
          addOrUpdateResource: () => c,
          contentToBlob: () => h,
          fetchResources: () => l,
          getSiblingOfSameType: () => m,
          getSiblingOfSameTypeI: () => f,
          removeAllResources: () => i,
          removeResource: () => u,
          splitPrefixFileNameAndExtension: () => d,
        });
      var a = r(3172),
        s = r(20102),
        o = r(70586),
        n = r(17452);
      async function l(e, t = {}, r) {
        await e.load(r);
        const a = (0, n.v_)(e.itemUrl, 'resources'),
          {
            start: s = 1,
            num: l = 10,
            sortOrder: c = 'asc',
            sortField: u = 'created',
          } = t,
          i = {
            query: {
              start: s,
              num: l,
              sortOrder: c,
              sortField: u,
              token: e.apiKey,
            },
            signal: (0, o.U2)(r, 'signal'),
          },
          p = await e.portal._request(a, i);
        return {
          total: p.total,
          nextStart: p.nextStart,
          resources: p.resources.map(
            ({ created: t, size: r, resource: a }) => ({
              created: new Date(t),
              size: r,
              resource: e.resourceFromPath(a),
            }),
          ),
        };
      }
      async function c(e, t, r, a) {
        if (!e.hasPath())
          throw new s.Z(
            `portal-item-resource-${t}:invalid-path`,
            'Resource does not have a valid path',
          );
        const l = e.portalItem;
        await l.load(a);
        const c = (0, n.v_)(
            l.userItemUrl,
            'add' === t ? 'addResources' : 'updateResources',
          ),
          [u, i] = p(e.path),
          d = await h(r),
          m = new FormData();
        return (
          u && '.' !== u && m.append('resourcesPrefix', u),
          m.append('fileName', i),
          m.append('file', d, i),
          m.append('f', 'json'),
          (0, o.pC)(a) && a.access && m.append('access', a.access),
          await l.portal._request(c, {
            method: 'post',
            body: m,
            signal: (0, o.U2)(a, 'signal'),
          }),
          e
        );
      }
      async function u(e, t, r) {
        if (!t.hasPath())
          throw new s.Z(
            'portal-item-resources-remove:invalid-path',
            'Resource does not have a valid path',
          );
        await e.load(r);
        const a = (0, n.v_)(e.userItemUrl, 'removeResources');
        await e.portal._request(a, {
          method: 'post',
          query: { resource: t.path },
          signal: (0, o.U2)(r, 'signal'),
        }),
          (t.portalItem = null);
      }
      async function i(e, t) {
        await e.load(t);
        const r = (0, n.v_)(e.userItemUrl, 'removeResources');
        return e.portal._request(r, {
          method: 'post',
          query: { deleteAll: !0 },
          signal: (0, o.U2)(t, 'signal'),
        });
      }
      function p(e) {
        const t = e.lastIndexOf('/');
        return -1 === t ? ['.', e] : [e.slice(0, t), e.slice(t + 1)];
      }
      function d(e) {
        const [t, r] = (function (e) {
            const t = (0, n.Ml)(e);
            return (0, o.Wi)(t)
              ? [e, '']
              : [e.slice(0, e.length - t.length - 1), `.${t}`];
          })(e),
          [a, s] = p(t);
        return [a, s, r];
      }
      async function h(e) {
        return e instanceof Blob
          ? e
          : (await (0, a.default)(e.url, { responseType: 'blob' })).data;
      }
      function m(e, t) {
        if (!e.hasPath()) return null;
        const [r, , a] = d(e.path);
        return e.portalItem.resourceFromPath((0, n.v_)(r, t + a));
      }
      function f(e, t) {
        if (!e.hasPath()) return null;
        const [r, , a] = d(e.path);
        return e.portalItem.resourceFromPath((0, n.v_)(r, t + a));
      }
    },
  },
]);
