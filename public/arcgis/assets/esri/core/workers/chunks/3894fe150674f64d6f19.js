'use strict';
(self.webpackChunkRemoteClient = self.webpackChunkRemoteClient || []).push([
  [6550],
  {
    6550: (e, r, t) => {
      t.r(r), t.d(r, { v: () => u });
      var n,
        o,
        a,
        i = { exports: {} };
      (n = i),
        (o =
          'undefined' != typeof document && document.currentScript
            ? document.currentScript.src
            : void 0),
        (a = function (e) {
          var r,
            t,
            n = void 0 !== (e = e || {}) ? e : {};
          (n.ready = new Promise(function (e, n) {
            (r = e), (t = n);
          })),
            n.expectedDataFileDownloads || (n.expectedDataFileDownloads = 0),
            n.expectedDataFileDownloads++,
            (function (e) {
              function r() {
                n.FS_createDataFile(
                  '/',
                  'common_defines.glsl',
                  wr(
                    'ayxUgPAuy417602nE2GFETpy+ABW9UcLZ0irWTPhlXrxYEPqcJS/qizrXKoJeE4hRKPxCWeZ6WveLZln3h0J1mARkuAwy4FoynmeKQD+dk084wxSsB9SYkzmUnKl0BgDNwf7b42076TCYoNXLTgLEIrUKyLiw0xTDaBf3FFRvr8Sgvwmx8MtaEuwDWyWBHvl3itnyTRoUwGSFDOm1HhsBUP9ZpG0/qQ9EedxGwMxGen3EmzN6wtPpKFWjFZ0vrBBgvwmx8MtaGKwDWyWBHvlSitnyTRoUwHYFDOm1HhsBeb9ZpG0/qQ9Q7ptHBkeIeVECXbknkxAqP0ajFZ49fUEpfcljvIQERGeNS3ddUDBfppI9Ut0SgvWWWuxzxgDCqJZb42076RcL81ILT4RA954jF36+WxykccjxB8XsfMNokA8RTs=',
                  ),
                  !0,
                  !0,
                  !1,
                ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_apron_common.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_apron_from_staging_cs.glsl',
                    wr(
                      'JClIiew0hsFLx3mfE1O+LHcN9FkbsFocJQmqU3Cp2Ur3fRn7Vp36t2K5A+MkHgImQKnHFGvD033qQvETsHV7+CYK65Njx8MryG2XKQD1NUs/4RZIzw9OdECoWWDm0nl6eEGTA+nQ5uXzXrpwWg8sLKHxCWWZiwJ1J5RmzxUPp7kRk/cpyMI6JTiGP0G6JkjB/jtT9g1OYHKhY3S4wEpnRgf7et/XgOh1SKBxBkUnK+T8Dmzelh8BkYlr1BISxadLxuwux8snOlzTOVO2O1TIfQtk5Q1NdyCsW0yr3UplQLXqMunQh447TK5wHgw2YuNfA2fBlgoBs/dfoT4p+PMJ7Povwd8saBzYbEGjOkXXOJFP4ghAMjHjFmGsmzwEI+kTKbC/8vBhEfs3NlEwNO9S+zyZ0X1Iq/wC+W8/sbBC7BNgjo1oaAvG60WwP1fQfYFk5F8CKXKjVgzi2nd6RqpZZ4HwoKRwBvx8FU0qLOZIwg60vAFIo/wCZHwP3s8xmHLG5+MPRTvJtjOlNR6pEp8tWQReZnruEEj03HtuCfscR42C38pdN64gxBgrK+xevWlSxUNMtfQCcIofsfc9rUftPd57LArrk2+BMlfQIv5GTLZSfSf4UUT5BXFgR6EcLuiGqqs+CvNog79lN+RYu3dSDFBE5esCctjE8OQH7FXzMzZoPFSe7TXcyATRdpo4U/clfXL7HAb0BEUuXeZSdq3RNfB7Q+t6gfr+Ku8Rm0EqOAtokbgKY9rETeNI4xqhKTX4Ll6U9GDZ3yHQfZwiTK52C3j+HFXkGUJxXeZoXIz6Lyl3AvApk7+q8flU73YXHjEwrPsTPZOZAkgPrVTkbx+x926V7SHJxCYvI/5GLd11Qcj/HCuaRAQyNrVIKcW/eWhQDOt9zLjj6nBYoWNSUGVyqrdNa9TXRUTluV3oKCix8RCDuTPL3Sk6UIcpALEkS8k4DUPoH15gN6xJfaHBZilaqb5+gfru63pEuyQcCCAmqkUIIszFRwGx8FahCB7JxSyFzWDDzCs6XpVmD/52UcpxlUniBgtlIOUNdqfbeXAJ6RZ7gan+9n0A6iQmIgENsBGsY9eWVUTl7RTkfCn04xa+WiPakmJnEY/0QbAzF+A4lBPxH0dzIb8dHeiaOilbo09nlrPp8DROszdSChoj/l2ud4rSAki29kB2fCn08QbsVfPBwGg+WIe5IfcyTcJ+lj5FBV8yJO0LT/HXeWwJr1IzvLLj9zQQ9miACDdPgB7gJAHEQRvIkgtjwDTk5EquWu84xCYvEdu5FOsOcepRp38J9158O+oWVP1LZmhEtlB2uobOpHM87X2FvSws7QrCDlEITEWs/moItLy+v0K5Xeg6NDolQtyUSsLMXctth2wIpCJ2Y7hJCrAJQmdNr1J06Ig1tT1D62eNvOUw5xGMdy0YJ36xlW15tLwCsAu6VuJve/YXU5TwI8XyO81ilnct3XYEO+INBrBLTE1IvlVg87gfKTQK6GyH6arj1UegaC0eLDigxw5s5tRQSAGnQLpRUbGwWIjtYI6NLxdsgSlFiDhIy+hCK5pLC3sko18g6NJKaF0P/3q7qeP+cW64bQYFGiP66ghsgrsoAeWlXfV8e7H3PZLrJcvyKiFFrDxFpQlNynYcVKtmITJy5Up2q4Y1bnak7GCHsdX0fResbElgT2KqWAl2mZYCUaT8A7FnVpuwQqXvJc2eaC9ukCNMiCVN3n3IK5pLC3s8+Fkz6MV0bRn3BwTu+qrtYgb9N1IKGjH+UKhn5sVLW6DHDu8DL/j8B78ITaSNaCFfkrkA9yZFwCjBd51hCzI7+hxF+5VyVku0VXCPhfjhcwrxZy0CIyT5VLs/tLwCAaz2EyJ8e/bPAL5a4sXyOi1Wj/YuiCFNwGybdy1hCzI7+hxFo5VyVkiyUHK7hfntbgbBYIoyJzDjUqR3SbsoAeXxCXaZe7HgA6gDsmegQjUK65NNpHVNwnaXKUb3f10N3y1n1yJbTiTMH3et0+PqcUPYW6uXGhHecIhNPCovK+b9CWbQ0Jyab8YQ5Tk9ISZUxsYJ4OJx8EeyHmf/Imsi6VUG/gpGbADmVX2nwGGkYBrubMS06y/vPMUJeE4sT6b0EmbclgDmDbRW7QM64TpeiMYjwcAly3bdK0ykOgZfhnQs5gRCdgmrXXqmnTwEHhiTA8ez7ODvV+9QPTIWFoTfLkz+uygBQq5c7jB7+ONukvYf3dkpL3GdKwDqdlDW+RwdnWEIdz61WR7ClTVrRgzyKY2p1fB7brxwEwosLO24WiLf105SoPc+i38+//QLgJRKjo0lKVidE0GnJEvKMBBVzx9ETSH4XXSh23IgEstCNQ==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_apron_to_staging_cs.glsl',
                    wr(
                      'ayxUgPAuy41w60egGGGQH1wVrEgrmkhCZ0qqSXetlTfyexv7Zbu7+jDlX5BiAAIofrbsBmXQ2EXPAb8d5jAo/WpFOw==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_common.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_dbg_ray_ps.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB/odRrxfJDy5i3pULttHQNlHOWoTiLQ2ALmB68AoTU1zj5Yg+4f3d0px33IQSq7N109+Q0O/ARIc12vU33oiDU4PUP3Z8Ss7+e5EaZqLRkgOprrF2Pa0xksaKBS+DMu5bhdifoh2sQnJjjObBL+dkLI7Q0G+QULZDelDzOh20pnRhHzaIjhh44ZO6NlCwIwNqL0CGHYwktOq+wOoWxysf8Xkrk2y858aF6GOH+0OUjLakIrmh1EezasUXKh2z0gJMzlBO76quthF5BnHQEqMKoMR3Tc1RYJrPZs9TkjzuMSrfolgo15ZgHPc0U7mw==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_dda.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_dynamic_sections_depth_ps.glsl',
                    wr(
                      'ayxUgPAuy41g4UinBH+HF0EBgXMF+QVIZVyiWTPqw3r8cQ/BbZ206y/jUpB3Fw4xSKr2FF3JxQwvJEKKu02k',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_dynamic_sections_ps.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_dynamic_sections_query_ps.glsl',
                    wr(
                      'ayxUgPAuy418/UKsHXWSBEtfhlpP/ghHfE2jHDG+2m3heDz6cIq75yvpbrxhERksTqvrOHLKmEUkO13ElEo=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_dynamic_sections_vs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB+nfQXwbYG8qgfZAsIOHgw8TrDsT27W1UPkC6NdoWF7oWERj/dg2MgrlziaIn+nOVcN+hZe9Qd0YVmnX3bzlRgDeALnZpGuoujlUq5wGwIrYvi4ViuZ30wBFKlQsnwy/89fiestz8FzaBX5IEGuOVHQpBVJ8wpfez2oHC7ogDwpQA2+b4i16/A0WKFbAgEkLO/HDmzd01oa5cE57T0i/uUWzvUvzcw8IV6dbB33Zg2EfhVH5EtEZyasSnarhjVvW6nzVpKp1ep7EaJlHlZISOZQHm3MwgpNqvtS9TU0/7Bf7KhpjsI9PBGQKUPkdkLWd5555hh0ZDvpDky42mYyJMxQaJ21//A8D/FnExksLeQR8iKLnwJOsOxH9zk4orAEvlwt8ds7F0GJ6n+hOVzBdKw/4ApId2mBc0qpzHp8Xe5QfIe7/u17Db40Ul5sYuxdrnCZ2VdV5f4LbT0vsfYQo17e2N4XOF2H9yWIP0rAfYt3LWEIdz7/HCua3HspX6NfIOiz5NtkDO1WkgI9J+ZuvHQT1Uca5ZVta9d75/UB/xPoMvImJ0OL+CyVdimucZ1sRrtEcyasEEjPG3loR6NjeqbR7/wvQ5MDgrYkNqpeunBSG0dC9rgBcNbbzuYRk13uLjYpJArrky/b2QTSfZB/ALEkfT/TD1XPHUJsXplMfLuOGI57Fuopkr/pcapXvWsfMjNSmugIcebATegHoGzyLDryLQrrkybCzDyEd4Y4ALE6SzP4WUDiBEZNX7VjY6TUe2xLCvBtgaKxiYASqmoWBCNPz5VtdNbfRgEPrVrvdHKcmkrrk2COgmdobZ0lVPcnUcXoWQu9VQtkPb5Zf+jGZWhKBpMDxPrs9ntckHIBMjUt+ccRbcHTTn62vFLiOXussAuIxjDB3hc+XospTIglVMV7HB2dYSYYcqwTPOjDenFMqr56lLvp4TRO4jpSGywn/REUctjVRyzPuBPmMATB/xGl7SnBw2h1EZAjWLI6e9B3rFH/GUd2Df8JcqvQPX9MpQghgqjl6UsV7VsCAjYd/F63Z9XpUVGk+wKtfGq/oEvlCE2kjWgvXbnJT6Q/UM13nWytS0xNJOUcUeifNW5FmWx8l7P+7XsNpQR4TWUk+F6iW8/FfVes/RBdLDTisF/sVO3x/Sc7WJLwL7l4XN1iyEEqZiEycqNWBubccH4JtUxyq7+qqTldvm2NHjUu60jCDlKWRU2ayAhx0C/4/wzsDqE78jg6Xoy5ao4xSPtInD9Jo0J9PLd0LLBLc3tGq2Nlu+rk62YO/2XE52Ur5G6hawAAQ03+lW0imdDj/w+TRfIDKyQpX4PGKcDJQdw4zmxJuQliPu0XQ88CRW1MvgcewsgYQg==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_editable_slice_plane_gs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB/odRrxfJD6oi7jX6p3W00sT/64SC2Z2kv+B79H8zUrnEJdh+Av29lojGyBJUG5MUg30wpS4gJbPgmrXWuXw3B7YAr9bJf6t6S+GO9rBxl+Yuq3R3PM10YsaME59zMy9bBch/AuhoRFQmP+RgD3IEHHuFlWoUsWMjWqY3qm7iVUBwTyVrS1+e1gWKBqSWBPYqruAmGNllIT5fET5jAE+P4518RuycEXGF6AJVS+OUqfFXMrmksLZDfvDjO4hG1wCfu+edX08v00TO90Q0MyeYc7RyLP00ET5egB+SV7rLAS/rc4141naEHUYlfsWy6pEtMG5g5IIHLoCTP1lXtmW6tdZY2g76x3EfF3AUVlNO9S/CrJhFpY6ahJsXV7vLAUqVBzht15MEjKqQ7nfwiEbpYvo0MLIny8VQb4myUlCfcSI8Tzo6psGrcyf2dISKoRqWjW11YBsrhaIm51obBN7FTe2MQtP0GJ6zSIJU3efd00G0sEPTrtFUC9wnxtXa4xGcXQqqRzD8FZix4sNuNeoSRPllREpqxPKpkroOgb7B6hON1oYhGRuWmEdlSVNoRgAKcaPCj7UB2dYTUpbKtVZ57Q+PBxG7Yg39dPYqpWo1siAlFIsfEIbJmLseYHrwepdCt6MEjGtGDK3QSOOIRlAP12YmCiDgqwGxknU7EVKMW/NaRRDvd9sr/4Nu9J5y1JYE8B5f8LXenZUfkWpVzvfGaxPlSFrWiG3XncYdNnALMmBHisDg+wQQtiGOhLP+jFJCduFLcy6dCqpM9cpnAkCDc2oOBPK4K7KAFCq1/eDDTi+UWP9i6OkGg+fZB4CP8mFtz1WQ2wD1syeOZLOuifNXkbTeklxKq4qm5G5j9/Z2Viz/UOdu/TUFWgtBuoZ1abnWjGuQXAyRg6WJ4lVL4gQYwxc2g87OQ=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_editable_slice_plane_ps.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB/odRrxfJDy5i3pULttHQNlHOWoTiLWw1awFKlQtXw05DxuhfYswd9zqRL+Rla4P0By4RhP/kMCHyO9MRnolWNsd1C+fY20/tvpXqNrAE14YrP9BDGRhgwRTuwCr2x3saEf1rB7o6doaH6fI0GjdgTF4AlO8UsWMmPoDCjFvzUpRhbqVoe15utmEfIkBAgmdqLsDmzN6UFOqaNBoXZ78PwSjvhsjswkOFmSZRv3eQvUahxL5QcLcz78VHLmuB90JMw=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_editable_slice_plane_vs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB/odRrxfJDy5i3pULttHQNlHOWoTiLQ2ALmB68AoTU1zjhelaJgo6dFrm6cJUT3O0U74lEPnWFQHyPmHHSk6kVmZwrqYIu0qrmqR6B8FwEaNqrHEG3L2kZ+EbxS4jlz5/VS0rEpwPI4J2vfbBH5Zg2Nt3QssEtMfg2WU2ChwXxmR0OjKYOF/O1xRu8uUgopHdr3FGvN301P/uw+i3x79vw9tvYzx9khJ1/TcQCwCVTWdxMGuktMfg3cU2ChwXxmR/1FQkw=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_missing_bricks_stage1_cs.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_missing_bricks_stage2_cs.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_missing_bricks_stage3_cs.glsl',
                    wr(
                      'JClIiew0hsFLx3mfE1O+LHcN9FkbsF0fJQmqU3Cp2Ur3fRn7Vp36t2K7He9oHQ4kTZrrDnjc6ViwX+wCqHwy/3M87LZvjcQmx3SGKEX3dEc94RRJ/jRPd0+vUna7m3JlZw+8BO7XgKulEbkkT1BlYeXuCHrc2lEBC6IT5D04+bBVj/QlwN4hJ3b+Rg/4dkaEsUQGs0tJYDulV2Do3HspTAL9YcS+4+lxX7xtHQNlf6rDBGfQ2gpX67Qcsm5yvbABg/AshttmMR7Afgn7dkfBcRUO5kVRPWG+FU7klXwnTOi+epCz5ug0UIsoUg83K+laR2HY2AJDoLhD4C4v+PEOoOBgyNgkJBGJKgChOVzBdIArmkQEMjysRC7o2HxnQKtJZMT5qvF9Dep3UgMgJ+5UqyLf2VABp+oO4jd74uADr1Zgk40rLViKuQj/NArcONls8kVSMnisGwiynDUmCfUOOsj646pxTb5mHAE8Yrt1wg6WmQJG5aVaIn979uINuUPyjsMtLVWD/WD/MVbLbYM/AARNMmS4WVL4x3BoTbUVM/X6qaRwCu15hRkmKqpSrmgexQIc5fsCa9V7uf5C4xO3aIRFQjzstm+OMXvJcYA/SblMTTD+EEX7GEprQLIceruV7aQ+Q6g9xPIkMvpDoHwbAENVoPQeItefseULokemL3shJhGK/C7J2UyIOJpiRfl2fjfiHlL4S0J6CaVTfbvBdOpgQ+5slvr8LfJUoyQWDDFAtv0TD7OZDbAFk17oLyj4Jla5+zLHziPXR5ElVPc/V3L8FlblB0pmTKIccbGVZ2htAP96kL/4pP5e720cCSwhpOwCIs7eS0IK7FHzNTj64xGR/DLLjSUha4AlTrBbLoujWUHPBkJhIa9SdJfXZ2BKCO1WhrP+pHdeumgWTTIj+ewCIszGAlWq7AWyfC74/haVuSKBzmgnV9MrAKU5Ucp8DFa8SxoyMKNfM6fTNWcJtPF8ir7/9DhDoWEXCTZi/l5HYNyWEgys9lr1NTr9+Rip/WDeyDpoVZQtV/chTMFqlgb5HwtlO+AVM6rQNXxao1gE7vWliR5MsSQmIgENsBG8ddDCQUnl7AihKSj4/gXsUTXIyy06EZL8WKMjVsE4myniDgt9IKwKUaHBdmEJslMzh6jv5WAK8G5SPhYAxRGgapn1cnTIkgtjJTTk5Eq/R+WannhkEYTwLrM/SsM4zmx0LnNHHMUtFbmVZ2xIolN9pKOq5mEF+GyWTSId51i8dxvYRX6n6g5h0ijO8gu4bPIvzydFO52USo52Uc12h2xHiEZ7If8QSPc0d3tApVdgl9fj8E8+pQTup35PgDzFK11NRX61/RVd3sT+5RLsWvJ8LjstVcbtL47PXYR7nCFQoiJ3cv8RR/QOWSldqRxjp8Vg6HUX+ymDhecr+UKmahUyJ1Os+wxxlZZL40KrE6p8arE9WIjtM47EJoR0liJHoz4EeqdIBv0KQHda5l1/r9pnYGAL8ymBu/nt70PmCXhCak/Pt0gi7flmbljsQPY1L/L4EZL2YNveISZ/0y5VsTBB1qwNQ+gfXmA35lR2utA1ZltD7X6NrunsNEWgJBEfICP+8QllmeVxY4rsXO98GMHFb+z1IdfCPTwZgDhE42UUiDgbT/4PQnw1rAEz+Jw1fluv6myLtOb9NAG6YhQIN2Ltbhdny+lFU6rtQ94vKPP/b8biTaSNaD1YiDgAsAlUwWqsQeIEXmIJ0UIewsguBCPLNibL+u3beQrtdxsDIh3oQ6Zh0sV9EIG4DvJ8OrH2C7RWJI7eITJUxrER52QQhHSaIvUKWTIw/hBFo5V8Z02vX3aX84eOO0yTA11CZRbFdYA+mcVVSLH7DyIoNLHlEaVd5o7PPS5Xg+tgozNc0G2BKQADTmA3rBZUsMZiYF2lVDO8tarnZgb/fY0DImLZYo1LUtlMAYbIMg+zN/DpDblHqS/ZLHwC1rVgzD9KwHGdKwDqCyJ7rA5U+R9wZkeqRTOqwOzicRG+bru3LDH5WKFjLQ9QSKbzFF2I8s7jEa5cjFYgRUIRxuwpwNkEw0eeJVOkP3w10xtU+QhAenb3eEiVjhiOaViTA+nQpW2qRKFtFAI3TLaiagjV11v/F7gTqS8v9XkF1rVgzMQmwHGdKwDqdhR7rAxI+Q1EYETmf2CX2Hx6Zwrwbru4+O3pWrwJeBZISOW4EnTc1RABEq1XulFRsbBEj/c0jo0vF3aGIX+zP1fU7Q1F+DRMYD2zTGDzlTUmBkOjNMS9qqxafpskFUZ0a4eSRyLM30xV5exU3jMu5eAXksYi28suLUOsIEW5bQSEOFkJv0tNeyrpWDO73G9sCe7ybIq9/uw0DKkkFTIoK/lCDmze6UBTrPtY8gNq1bxC/alymoRFQkzdQSraXFLLcZcG/QpCfHqldBmzuB8pCa9KbIfpquNmDOt0LQQhYrcRpnTc1REJovQ41jMp+tcQo0Yw5+lhczzsuQC+IEHHK9Mg/whKfg3lHQb1lXx/TKUPO4O21ch7AP9lOwMzLelQu23W2Gtl7KNqCHx7+OYHrwChz887F1iCuX33P1LBe8BkRwd0VT7jG0f8/Ht/RqVdZ6G15M1QSqUE7mBPYqoe4CQT1FF+rPxJepk8/vUR7FXzM8BoeBGS9mCGMQSOOMV4APoLI3uBcwawHnxnXeZPM/WV7dt5Cu16jbQiHehDpmcZHn1DrOw8Y9vFzvkG4kvcZ1ZCRTvGuSbB3wSMbZoiVPc/Mm+sSR2wAgs1CfUOKOiePu09bpQpxKGHSKoR7yQHBCtV5foOdpmLAqFC8A+hNWCcQhHGuWDHy2iMMIBsBvc0TSalWQetSxs7JMwcM+iVbgQeQ74pxPqqq6UR5ywVHyo3tccOZpfOAgtC+gehd3v9/1KH9R/HyWYwMdNmAORkDYSnWU+dYQsycuYcM73ce30JBfJokIXo9n1SpFsbAyEn8rhaIpGeCka3o0bxAzL1vhrGpXyOm2FoGtMgT7Q3SPtxHQjoQgsubqwJOuieNWAS5pMD6dCqpDRD7yRdQmUj/l4Ka9rXTk28uFrvPyn0/Qei7WDaxS1oRpQlVLJ2Tcp8ll6wDURgcuMMYejSZ2ZcthwhgrX4pGAL+yQcCD02hzvvIpmWAgHqt0f2LjLl9UvsUi7KjTotRZPrTvciTME4kDniGU58JqwPR6TAcCkBoFNhxK/5pGAMvnwBCGUs5UbmCbOWAgHluEd3NTXlsBW+WvXL8iEmVYPhYOp2RdB3niVDKk92eusmVvXHSm5bqUljk73462ETwWCAQz0fphH+LUm7KCzPuEcimXuxv03sV+4yijxoVom5IssvS8p80ypJr052cu4MQPYOZylFo1J0vN2HjjRDvinE+iwkqhm4dhsZR36s9gNnwZavrUKrbO4pLzg9Rbn7NcjLQdZHnylO/lsYcqxZBrBLUAQj5hwz6JU1pDRMsSmGr+wk70PvbQFNI1Sp9Esi19kC4A2lXfV8Mv9oUon3NMfDPc12lEEq93YEcqxZBrAZTmZctFIoxb81KTRDvimZ14CJgBHvJFJNZSWa9Q5xyt9MRj2uQeg/MOLPAKLCN9zEPC1HmiJEsi55hLFZQPwKX00wtFVwo+p8Z00G5jLp0KqkNBGyCXhNZT+HQjU87A==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_quad_ps.glsl',
                    wr(
                      'ODpUhfAzx8JKhHCaK0indnQ+4xhSq2YhBCPlVXWm0XDiNCbNOunQ5iPzXrpwWg8sT6HxCWWZiwLEJ5RmzxUPoHkYxuwux8sn1nXTP0G6Jkg3/ktisAx0Zky+Bx7C2XRwexbqIYaz5ODjX6gkT00RB53NKUvthxAIQrld6Do04/0Rlfgt3sEtOiq3bEeIIkHc0x1D4B9DKV/MUHKx2mB9AQ/xaoWu4+t6EfIkQkRlK+S4EWfahAJHt6Ne3ioozuQHnqJNpI4tJEKWQSqiOE3CdwtLsBhKfyLgWWH68TVudrL7cd/XgPF6CqlrAABlMetcF27cxBBl5f9s9TkjzvQHvO0olaBCIV/GOkW0ZATCapxLzx1YTSbpASjFvzZsR6JVb+nQh454AudrBxltLuVSrnbQ2UwB+LhXqHw05ORCulYjmo0nPUW5+k+7OVafFflBmh1EezasFEeh2z0gJMxHHu76qqs7DOt9LQ4qLuVD7zmZwEdC8bBWLGw9vbBT4gPngo15ZgGAtWDmeBTCMchBKksLPX3+HFLlx3syJMwcM6ev/tt3DPJmlk14Yv5Ut3AHxEdtqvxPZeYv9OhO7FXzM8AXPkK57SXWegSUNsNlG9ohMnLlHwa4BGB9dqVTf6fHpOU0X745yup0a4c77yRSTUZItvsGcN2NnJpC7FTtAx06KVai/DDaxQSZOIcpWKMjYDfAFkK4DHR9TL5jd63FYew4Q/h7i7fVNPluu2EKQWUR66hOLMuNL5pC7ByuMy7lF1KJ9S/cjXWEbpYvFP92Vjf4V1S8Sxs+CfYQM7rQYSd1SK8n1POxiUI1',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_quad_vs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB+nfQXwbYG8qgfZAsIOHgw8TrDsT27W1UPkC6NdoWF7oWERj/dg2MgrljiaIn+nOVdpgXNK8RJEZ13uUHyr1GFgew2+NMTqo6TlRLskBAgmcOX+FW3U6VRSPbhW+WdWm7NUiuolo6chJjiFKUPldk3K0wlJ41AmGD2zSDO+0HY7CQXsZomF/PdLRap8SWBPYe/2A2vfuygsz7pc6Dh7/PELiLFpo6czRTvTbEe7CXTLaxBS+QRFMnKxHGWt1iEhQKjBeYuppPw+UeE0X1xrcqYRDmzmxk1S6+EZs3JrvKFM/LVgnoN4ZBHXYhD3fx+pEtMG9hlEfw36Cky80G0pFOZbVoCj5NtiCvtzAgI3NtVCrGPV0wIL5e4C4m5z+P49vFwzgNVkaFiIxlC4JQrdMchBQjU=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_raycast_common.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_raycast_hdda.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_raycast_ps.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_raycast_query_ps.glsl',
                    wr(
                      'ayxUgPAuy418/UKsHXWSBEtfhlpP/ghHfE2jHDG+2m3heDzsaJ256zH+br93XAopOyQT65M=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_common.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHjPnmjXDeAz8aIiF+if4bql2EwAgAe3/OHTQ01W8Qqts8S40+2Edxssh184p12yWPn+wOksw7RUGuAx0ZFGqY2C41HZsSxfxVpO1+OjuGMIOf2dmK6P2A2fflmdyUcE57T0i/uVFxrEz2sl5fCjfbEK+OEDN4h4GrUsdO3KzUnqu2mdkCTD7apCz5epLRKFtf2dmJ+brAg+z2kNYqrlHoXQo5fRT0qlpjtgmIVecPk33BUHHbBBJ/jRefDuBNjCt23FgT8uUcunQqqRiBqw3Uk1lYu1uCHDQ0UtPmu5c+Tk3zuMSrfollaBCaBGPIlT3dgSEOJR54w5IZjvjF0y+3G9WRKlYbN/XgKQ0FftnQU1lYqpWkHTc1X1X/rhIrnwy//MOuVcl3Y07K1CK8E6wdk3KOIUj6A5HMiH8GEWtuB8pCaBQfIWuqqQ0BMF6Fw4xK+VfkGrW6UZAsfk4dD035PVZwTmhjtstKwLGuWD3MXvSfZATV1ALPX2sEEjz2WBtTLUcYKu75u16BL5gik0zLfJUoyQBxkNCoJVtIpk9/f8DuBOhfMoXO1SF7SnBOHvHd58jUrpKYg36JkX/BGdtEss2M+jD7+cnQ74pxL0aMuZQoWEtA01TqPkLObS8sbALokehfHtoaFa56iXN2U3LdqwvT7s5YD/tCXnpUCYDCeZKdquHNaQ0Q/lWl7/pNuNeoVsADCtGoMcBa9XCR+JZwTmhfC30KwPGuWCOyhfXfZA4Sbg4eyH4C0PkCENNWqVdf63qem9yEPt939eApKpEuWERX2Vi5f84cdzVVkgNomzlNTbiqzzsuWDbxCY8ONNsALAJV8HvDU//BXR7Nv0xGeiVc2VGAuopxPrt22dUrHAbAisd/+44d9fZUEyauFzeKTL/5FnGtm+O/3AXZL0DcvcgV4o4KxemNH5cHd5xM7vWdGVAqC9FO5uiTaQ=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_depth_ps.glsl',
                    wr(
                      'ayxUgPAuy41g4UinBH+HF0EBgXMF+QVIZVyiWTPqw3r8cQ/BeoG5/ivlX7xbAh5rLyRCirtNpA==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_depth_vs.glsl',
                    wr(
                      'ayxUgPAuy41g4UinBH+HF0EBgXMF+QVIZVyiWTPqw3r8cQ/BeoG5/ivlX7xbBB5rLyRCirtNpA==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_ps.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_query_ps.glsl',
                    wr(
                      'ayxUgPAuy418/UKsHXWSBEtfhlpP/ghHfE2jHDG+2m3heDztbIeu4y3kQpB0AUMiJDtdxJRK',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_query_vs.glsl',
                    wr(
                      'ayxUgPAuy418/UKsHXWSBEtfhlpP/ghHfE2jHDG+2m3heDztbIeu4y3kQpByAUMiJDtdxJRK',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_sections_vs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CWE37w1P/wVYVkqpUX6n2zvjeBDyK+nQh0ipWKlqFggjAYDLVA+z2kPpDblHqTA08ilFj/YujpBolDHTJU73IEExvllW/xh0Z0evSEy5wHRtL0OxJsSq5ffjRaZrHE0sMeX5C3HWlnd3Qq9c7i4/+P5QkvxNpMEpMXeGOAi7OUfF+BBJ/ksWMmLvHHWk1GEpRhbqKZK/6bc0V71rHzIzMdX2CHDU104ayMZf4CU05ORKivYjz9khJ1/TcQDmfwTLbQ0G5g5IIHLqTnyl6mN6drPoMunQ5uVtDLpwWgEqIetFDm3Xlh8B97ET7ikvseYHr6pgyN8nJW6QP3+hP0HTR4NJ41AmGHHlH3et0zVRcJxjWLGf2N0ZafJlCwIwNqJdoGHYwktOq7haoW9ysf8XuBM2y857aFeU9k2IIFf7bpw09Qd0YSLtGkOXxXp6Ess2MIG07u1yQ7EmUjUcGNVgmkHr7y8r5v0LcTlWm/kM7EXkzZ9oOF6VxjW5P1D7aYYtRFALPX2sCUnj3GFgRqgcerv66+hnDL5csk0mLeVDq20c11ZEyJIBbtgvsf8XuBP3Oc57aFeU9i3xIFf7dpw+TbZHKV+GFlPkS2NsSvQcdbra59tiEMF8kuFISOVEuyQECEES5f4VbdTp5+M9ulrkKwQ4J0LdlEqNxELAfZVseI4MTQPZPHTJZiFmXLIcZa3WJqRyEfFku6z5Hfxet2EeMjZRpPsCXcnZUatvxhDkMj/4LhHJtmD29BL7SaYJco5bLnHpF0L5DQs9BuZ5QPu4HwQeFfFggPrn5eNf5y1/Zz5Pz7hHLZaWV08LuBPwKTr1sBzLp2DYwjAtdNM/ULY1QamGWQbmDkghcrBTa63ZSnpZAv1su6rl9zQM73QdHho35PETXcjDQ0XrtBOrfDzO5geFxjaOhmg4XoATVbk/UPtpDEf0RVIyeKxbTL7QdlZe5rUpg4Xl9n0EpmotGyo67104ccnXQUT+lTmMVnuxv03s7y/WyCRoQpYtQ7J2CYkm00L5GFt+M/V0GeiVcmV2llN6ja7j63pDoyQEAj0n5m67bebBTVOp/DjyLDry9UrsRSXNmWA+Xp78TIglVMV7lhPgBFg+cr1XFuGcLgQj5hx0iIXa62cK6mAdA2V/qlaQctDTVQHvuABuAwv+4wu4Wu7AlkVCPOy5YLEkS8lHhT9/HUJ3JdMJSeOVKClOqmNDp6nj8H0M8CecFD95hzvCDlKWRU2ayAhx0C/4/wzsDqE78jg6Xoy5ao4xSPtInD9Jo0J9PLd0LJ1hNSlPtFN+l8P523oM7GSFtmV/qlaQdB4MTESa9ghw1Nf9q2/GE6E6KSclbpDqH9vbCtw4zmxQuCVNJ+IQUs8aXmhN6EQoxb8YjjRDsSbEquUx40WmaxxNKlOs/w5smd9RsA6jROQue/0tV5K1YPv7aMtqmitJuXZNIawMVuAOWTJFo1pnxb81KXIR8WS7rPnb/0fhfVJQZXPrqEcvmcZNUj25XegoBODlUIK3OZWgQkUS0CVGszNChNQgfM86flcAnzEZ6JVze0YOwX+XhfzrbFSjWwEdJCHvxxdtypYfAbOjS+QwBOLgA4X8H97CO3M8+W9FuTJNwhVCNTzs',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_section_gen_common.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_section_gen_ps.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7Clnzqdw/rbYH6qCHlXKJrHDIhRKPxCWfKmEX8EaARjFZWm2cextcP+uhyhGybKVOydkA37xVH4gpfe0aoTzOlwGZ9NAH7KY20qvfzX6wkBUJlNKrgAm7mxENYAa1A9TkpzuBC65Njx8smLH2VbGWEZSmu4Bhf/x5fOj6pX3K83HpnCV6+Oc364+o0R6pnQU0jMOX1OHTK6VJOtpNF7iQ+/c8Rlvgjy5ZFQl2SNU+iIgzGcRdC+QVMMm+saFaQ4FtAffa3KZG04+J7EaIkAQwoMuZUFTH9lgIB5bgT5gM65fwDv8Y0y9V7LArrRgO+MErAfZUG3iR0RhfULUaa8EpLfIB6TLbXgOh1GvFxBkUnK+RVpmzelh8Bkd0/1BISxaZL7EYux8snOlzG7FO2O1TIfYEO5Q1NdyCsHnmvxWBWR6lYdpfhh454AudmBxltIONfq23X0QIc5cwiWgkV2MRV5RP0wMQuJ0OLuTWkN0nUdJY+Yh5NdDf+WUHP1n1WRa9PZ/PXgKdxD+1s6WcpI/NeunBa1EtPofEJZZlmscQnlGbPFfl+YRGT9ynIOVbJOIY/Qbpbfjf+S2KwDEpuWbNjfafR7/cvbpRlhaMqN/4ZrW0cCUtPorhaIu3zycUshWe2dXs9JliA9jLDjVHXeZ48TLIkIBasHnnzA3RlQLVIKMW/NuF6B/dvxPWlDMVum0EqORBzgMclV//wZ8JvxhDkMCj0RTuP92DYyCuXOJU+T7oJUiHTCUnjNF19UaNQTLvFdGpxWJMDkbTj4uVDoiQBDCgyqf0VMf2WAkY9rUftPSjO5FSeqiSVoEI9dpoqT6U7BNH/GEvgB05gYIIcdJfSZXx2DfFtgamxiR5EoW0UAjcvqu0UY9TGTkS3/nehOwTy+D2K8DPalkVCEpYiRL4wKa4Vc0rxEkRnJqRQfKvUYWBGqL40xOqjpHsWuyQECCZ2ql4SdubVTU2q6giMVlab8w2i6jSO2D4tUtVsQ4gjSs1srFP5WHAhD6xEM73DcGoanWEhkazv5ydLryhCQXVrphG6dNzVEQn1tFatbHK9sBe6ViOdhXhkEda1AOZ/DZ8V+S//BVhmcvocRfuVNWp2s1J6kIXst09QwylPTTMn6QKUWZHAR0L2sFYsbHehvlLgA6+ehGRoR4P6c/9mCpQ0wmIQRxs8YqVVBubQdjoB9hIj5Pq6qiRPvjjKXWxrsTzFCXjATUihuANg3gTy8Q6gUeA/xmA+VIWqYNozXPtonD8M915kN+9KBvEfeWhamV98p8fuqDQW6GyH6WUj6EKQZx0CUEXslW15tLzsnWjBOaI1NSskRIL8YIzbS9x9nxNSti9xM/8NefgPT2gHoVBgpJc1qztD+WyQhfwt8lSjWxwIJFOg6xMumdFH5D26XPk5N848Q4/1KcCBaMFskGIt3XVNPO8VU/QOCzBfqUR2pOpmbHcX92aKhe3h5G6sax8AKizr/wtx1ZQvK2/GRe41P7H9UI/3aIegQjMV+WwAsTpLxfhZULBWC3U3smNlqdlgbAEF7GaJhfz3S0Ggdy0bKjrv9DhxyddBROz3Pot8e/7lFrn6L8LCOmgM0zpFtGIM0jRZFr5bBzJiogw/6IQ7OQD9RUJM65M=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_section_gen_vs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB+nfQXwbYG8qgfZAsIOHgw8TrDsT27W1UPkC6NdoWF7oWERj/dg2MgrlziaIn+nOVcN+hZe9Qd0YVmnX3bzlRgDeALnZpGuoujlUq5wGwIrYvi4VSuZ30wBFKlQs3wy/89Bieof3sEpJn2sOleIJVTF7xwdnWFHcyupSWfg2XpqSBf3Zor6t6QkGO9rBxllNO/7VCLfxE1MmrpA3iw04s8UieElwvI7OFCQKRvaXEjFYRZT5EsDYSboDSf4mTVrQKj6YIq9qrk0VuYkBwMsJOVDCiLq00FVrPdd3js+/88XovBNpI4tJEKDQSq+OATSfZAVsAJFTSLjCky+2m1sRZlPeYW57780bpRtHE0zJ+kD72vX6VJOtscX7T019M8Uu2wz3swrLQrrk0+iIgTSfZB/sA1ZfT/TD1WXxXp6drBTa4G21fdkAv1sSWBPLutIoHHNlgpSsfxWNmxyseUMpVXu3MBoG1SF7Sm4OHvDfZ0TVQVCH1ivHEj03HMEI70xGej6/OF3Ub4pgzI1LflYu20d2FF+tfQGbNwE5+c9v0PgP8gXJViIok2kdgTSfZB+APdMTSLjCk/kAnpnWplMf6nb79tiFMF6lLsmJ9VDrmoVCBksz+VcD7O7m+YNpVehMTohJhnPlErVoC6EOIUpQ+V2Yj3/Jlb8CkVsdrBLTLvFdOdxQ6MpjbTVMuVCkHQeDCtEmu4QXcrGQ/MH9z6LUVGxaB7JuS7B3yXFdJo2RfcmSyHlDU//BVgyQKgcZ6DQNXl4AvBsw6mq8v0RvHQTDiBisfdHKpSHDhBL7FrvfAPInTvGuTDB3hc4dJIiRYggU/v/CUfzDgVqcvscO/qbJSkDQ7Z5i6nV9HhQoWEtGzId+egGYdyYWgHo7FTeLDTi+RaP9i7d8jgkUJ0pf6Ehe9doGEX1NEZ7PKJEOuiaNW52tvF6ja7j63oQkHQeDCsn1UcQXcrGQ0Kgx0HgMjz0vhrluW2OnGZ4CutGAPcmS9dHg0rxBU5NJPsmYLjUdmwHvxw0xPK4qiRDtCRaHSox1UGjY9fTfVeyxxTxPTj0vhvsHmDJ8jgnQo/tSbg4V/tony3+DnRkJdMKVqnWcFZEr1I9nfOqqzQEwXkdHiw2416hd+bGTkCr/Th0KwTi4AOvVt7czCYvVMjgafd7BJU2w3ctYQsyIuMKeeDZdGdMmUpkl6n65XcGsHDEUGVvux//JFiWUk62xxdu2DX0zxS7bPIszCstH5+iYIF5BMJ0mjwAvkUyC6wXSedLYWYJp19wp8Dk8DQF8XvEnQli/lS3cAcfRwGq6g5l0Nix8gelXeZ8MiZoXYnuJdyASMF+h0Eq2lwycusVecAEWGBdr1N96Ig18nEAqiGUtfkd+l2uahcyM1aa6xdj2tMOsFLiA618ar94GN25TaSNaMJqnCF/oSV7IuMKeeYEU3dFmU9jqdZwKSlD92e7quX31UegfBcBGjG1+QRngrsoXA==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_shell_back_depth_ps.glsl',
                    wr(
                      'ayxUgPAuy41g4UinBH+HF0EBgXMF+QVIZVyiWTPqw3r8cQ/Beoy/5i7VU65nGTI1O2ZWiuosjA==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_shell_back_msaa_ps.glsl',
                    wr(
                      'ayxUgPAuy41p91mybBHaXDE74hpK5Q9OKQuwU2ut2Ur3fAbyZbu46yHhbr93XAopOyQT65M=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_shell_back_ps.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_shell_back_query_ps.glsl',
                    wr(
                      'ayxUgPAuy418/UKsHXWSBEtfhlpP/ghHfE2jHDG+2m3heDztYYG25h3oUKxvLR02Zi9dlfVi',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_shell_dbg_ps.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB+rO0PtYImq5ieqQqdlFgQrRsiSEWfahQLgCqNd5gM3+C9ZkvAuyYU+wXvAbEG6NE034g158wRHfVvqHGWt1iYpcxH/bc3XgP+HO+8kFAEqI7G4IGbWwm4BX+xe4CRz9f9Fzvcv3MApJHGJKQiwJEXApVUG9zRHezWuSEy42mZgXQrxZ7uz5NtiXqNbAR0kIe+xSyKJmBII/sE5jFZ7sb9Nif8mg9ogIUWWbEO4OkvWInQssEtddzG/HHi7lSgpX6P9OszovrE6U6koUl9wcqQBAS6ZhBcR66hVqHx0saJX+bdwyJZFQhHGYw+2O0bNfZ1SzwhEfj3+WS7ohTs8CewcaIm44+F6F8FnHQEqMLE8xSKZwEdC9rgD6Do95OMHj1wswd9odRHWtxWxdg6EX5cj5CcLOHLtFESh0Ht9dqVTf4uosYkebpQpUhsgIbkRvHTc1VdNpOokbTA047Bf7AOvnctoYhGN6mD9dlTLb9shQRMDVTbjDWq8lSUnGaAVP+jppLRySqUE7k1lMO9FunYcllREpqtPZtA99+URqXDuMMI6aBrGqW6bMASOOJIhQr5OfCbTGkn8BGcpAuZPY63W/+h1Ed1miLU3a7E8xXl/Zy8r5vEBbN3T97AnnwCMVjcpMV6T7WjCwkfFbJojTvdrMmKlWU/+S11sSvUcdbraeNtiEMF/jb/9HflBrmcXVkgrqfkebczCCvwNr1L1NTT/aAzGqGmOxCaEbpYvE/cwVj3hJlDjNF93UZlPY6nWcDIZafJonbX/8KJdoGcTGSwtq7haIoufAkcOrUehNTWx5lSFqmDI3yclR4U/f7k5VsntFR2dYQh3PrVZHsLceylfBv06xLz463luuXctGywn/ccUctjVRxrIxlrvfC3081HG/zLBwBc+Qqw4Ra8JV9R5GkOrZiF0Pu1IM6HbNX9Mpa0pgqjl6UsVvFscAjcv611cD7OVR0+h8VWMVlab/AO19jXahSQnUoc4Sbg4BJk4ww+wBF5mcvoccPyVenxdmV9miLX4vxlpkw4EAiwmqlyua9eeCyzP42qLfHu+vwi5QDSO2johRYO5VL8zBMB9gzj4S0RnJrZ0LOiVOiZbo0hmlrSq8nEAqiFSCikdzEOuY/rZTVOhth0ufDz9zyS+Uubtwic6VcjjbPcxSPtegS1HKER9IOhXXLyVJCcZ7wcewvqq62EXwWqLASowqgzvchfVFgnl6A9t1zzO/AurW/U1wy9gR4P6c4ZnCpQ0030O5wcyY6JJD7xLc3tGq2Nlu+rk62YO/2XN9mVzpAHvLUlgQjU=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_shell_vs.glsl',
                    wr(
                      'ayFfhfU1ysgEhm6cNEW7CXE94RRJ/kVMZVqqHh7CuB+nfQXwbYG8qgfZAsIOHgw8TrDsT27W1UPkC6NdoWF7oWERj/dg2MgrlziaIn+nOVdprHQs/ApSfVyyFH+n1nR9fQzwKdn6u62qWKEkBAgmceXxCV3X2VBMA6AIoVFR/fFIiew0hsEnK3mHJU+5dhmEvlAG+QULdD6pXWfo3HtWQBDBbICz/ttkXa5qF1ZlT4CVbW7Yz01UseRf7j865fkNiLl9jp1haF6GOAChM0eXOB9U/wZ0ZCHTSnqtwkp6Waf9bN/XgOh1GqBxBkUpLelQE2vW2AIc5akaoTMu5bAUqfpzjss6J1y5OlOIIkHcR4BW8QhOKV+GFXKx2mB9AapTaoWu4+t6Q6MkQERlJOZQuyLWw1YBs/0Esnw94/8Pk0Uz8cMnOlyH9RvaXAfBdIApnWFCfHL6HEX7lXxndrZTYN/6h459Db5/Fw52YuNfkGrWxE9AqaNHD1Yy/7AEoFzg2o0hJm6P6h+yMk3QR4MgQQVOKXKBcyua2mB9CbBZcPv67PZ7DsF/lzIzK+9GkHcC10FE/pVtbcwvseYHrwChOt8nJW6Q6h/aM1z7a4MtQ7IQH1jqFUfkS3p8XeZKdquGquJmDPNWkqkaLOVDomUeVi8r5v0JZtDQnJpvxkXuNT9oJVCP92iHoC7fFflsALEkfT/TD1XPH05xdrVMcqvQNbk0CvBWlLX5eYc7wg5STTNEpqxHcpmLAuYNtFbtAy/+F0aJ6yzK8jvUeZApCKEzR2akWU/+NFt9WuocIuaFNSA9WJMD6dCqpPoR8iQVMjMroO9HKJnGGSxo7BPnLjT8z0eVxjbHyD8Xa4MtQ7J2GYT8V17pERAfWOYcdKTqRWZaCupgi7SquTRWkHQAAi9ioLgXObS8AgGjvlzsAy3izwyJ6y3PwWh1EZoif7k5Vsl5JHM87OQ=',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_single_dda.glsl',
                    wr(
                      'RUI87LZvjuBF3TiRKQC5M3c26R0G9gRZKQulSWG+0HGmNBH/cMr6zgbLEblhAB4sTqu4DnGZ1EfkFqlBoTU1sSldirkv2sUt1jiQLVOyJSlY+hxFpEtGc1ulVEy61GxWbAX7e7u/+/HjVaZ3BgwrNu3tDmzNlk9AGpNA9Tkr4rwRkPwjnY06KWGsOEWvCVTL/1UG5g5IIXKiWX+81Ep7SBq3BO6hh440EblhEVllIeX0CHCZiwJXoK8HqWx1obxC1rdwgo14ZgHfbBD5Zg2fFXMGsB1OcWasT2etxUpqRqrxe9/XgKQ0FapnQU0iMOtVXA+zlgJHquoTqSky/+RCpbl9jp1zaFjGcAC6N1z7a4dD4BgQMnmnEDrFvzUpUss2KcT6quJ4DP9wUhskLqoM72Xcwn1XquAC7QMv4/kOpV1o3MwxF0WD4X+nOVeNI/5GsEsLMiH4HFaX1nplRrQcLsSs6+hhBsF9HTImLeZevSzP104N5f84cSgp9OQBpGzyzcwkLW6J/yakM1CIOJQTQwRHfSDhGFbPw0pqRqlOd+Hhh44Zab4pxE0sJKoZvHAXxn1CqvQIcJc6sa5S4gOwdaBCaBHGuTujXASEONNsAPgEMhP/WVX/BHspSLUcZafN7+g0Cu0pxqkpK+1Zu2gLTwJOtfkWd9yasecH7F3kOT9oPF7G7SHFyATIcZQkVL44dXLlF1L/S0pqSqlJfbybNYkeQ74pxPqqJfhQqyRPTTZAqOgLZ+bRUPEGpVbvKHPjKUi57SXW8jjLa9p3Ld12BHKsWQbjH05idqVTf6fHO3tzAb40xKri6+RWkGgbCi02rPYAKsrCR1E9r1ztMym/4laEtWDJ3yksMchBKvd2BITxdCywSwsyMalQfLqVKClKDPN5i6nv23deo2sARTY27+g4YdbaTVPp7FDuMDTjuVnrk2COjWghV9NkQ7g6S9Y2GAauS0hNPfxdYr3QSn1BtPt6jLXm4D1uxSRSTWU5hztHIpmWAgGn6lbgN2CcmkLsuWDToEJoEcZsUrYve9B9i3ngBFgyebFZd63ZYWh2tF1w39eApDQekw5STTcn/kS9bJnVTU2q6lyMViacmm/GHG+O4CkxEYT8ALkzQcB9l2z2BFkycO8MVL7QcSsJtF1qyvrOwFVD6GwAHiwt5BGmd5nUR1Wx/RUiNTWx8Q6gE+7axS06EYX4M7IlKa5uli8US0ZzIO8ReeLUbFZAtVNMrav/7XAK7X2FAzFq/1ihcFLbQ1ma6xNnySi9sBSpULJ83ykxbpL8OPEmS9c00zpFtBgyNukVUvE0Z2hQ7zEZs7iApDRMsSmXsysl5lTvbQECUVS3/gZh3Jb3/xDsXe4rVkJoEZD8I5qNR8t0nD4A6nZkN+9NDqBFGyUJ9hIj5JUlqiRPvjnK6qN5hzvvJAQIJhXl8RRt5tVN/A2+CIxWe7E+VIWqYMnfKcAj/kYA9zBIPe0NBvwKWGZ2sF1/6Ig1bnEXwX+Lou/o1UW9bR4EK2q3+R5dzdNafhKjQKhnVpuwEYD1L8/ZaCFrnBNWtjofqYZZBuYOSCZyol50l9Z6ZUYRvjTErO/nIBn/KkJBZXKkqEsiiZgSDeX8HbF1YJyab+y5YNzMMRdFljR/pzlXhDNEBvQOR2Yz005ysY4YAwnmsSaJu/jnfEO7bBdNNyPzC2oImZZ5Tar3Q9xRUbGwBKPrYIbYISZFxiUA6nYUnziaBqxLRnMq0wpnrcVmKQTmDTLE8aHtPW6UJFIWSEiqEe8i39pNQLG4EeAwe6ywBalHH9jCMC1due1SvjpNyjCBLek0X3cq0wlJu5wuBCPmHDPEgf/qZgzyZVpZbB+HO+8kmZZETre4T2syL7H7QvETsZWNI2gNxv4fviVL+3ucOU4fEDJ5pxIPnb81KQnmRx7C+qqkNEO+YJcCGjTrXe85UtF9SLb3OHTYN+T1EZdY3GegQmgRxrlgjj9Xy0eQI0y4WTJvrB55+Rh6VkqpUHy6xtHvSViTA8T6ZWKqEaZiUkVRSKL2T3TY2rG9QqVA7gMtKSQYxrh9jt5Nw3bbIEGkIk0k7RUGvUtCekaZSnKknDyJHkO+KcT6qjmHO+8kUk1lAeW4SC3R31awFqRWoTUo/jtElP8hzchyqRLTbAD3dgRyrA9D81gLYEygVX2t0Up5exC+NMSo7+LjX6pbGx4qHbbtFWTY1Ud+EqNA6Cgy/v4Zj+ov8dspJDTTPkGuCVDB9CZW/xgHMiSnUD/ox3Rwdhf7cbuq5fc0HO9gFwExI9XqBnuVlk5Atrhs9z03vbAGhP4fzcIkJ0Pady3ddgSEOFkGsEsEPXKhET7llRgDCea+KcT6qqR9Be8sFg8iHeleC23LmEMB+7gDr2xynJpC7Llgjo1oaBHGPkWjI1bKOJdE9zRIfT7jCyjFvzUpCeYcKcT6pas0TrMpUmBPYqoR7yKZlgIO6swoxRNhscMtnmd6jt4tLRGi3WH3IEHWa5oj/mYhMnKsWQbolTUmBrVUcoC/qu1gWZMDUk1lYqoR7yTexENF5aVHcT024fwHk1Tzz8khLV+SsTKyME3KfZcTUARYO2mBcwawlTUpCeYceru11ed7D/F7yh8iIKoM73Qa2UxGmvQOZdEv+P4F5FryM/IrJ12J627cMUaIOJQ+QbMCKV+GWQawSzUpCeZffKTa+KQpQ/1miaoqMe9urGseAlAJrOsIXdrZ/f8Q4BPiMzcnOhjdlEqOjQSEONNsAL4wMnrvFkr/GQVoCfgccJfaZeVlFvtWkLL4J/lZoGgWREgr5bhHIpmWArAZwTmhfHuxaBHGuWCOzzrBeZh3Ld12BHKsWQawS1YfI+YcM+iVNXQZab4pxPr3iYAR7yRSASQxsccRY9WWHwEUrV+6UVGxsBHG6yHX8jwtYKw8T6R2D5msHUP8H0pNIKdFKMW/NSlUbpQpxKjv8GFDoSQRAikt+KNqCMS7KCzP4xyhOjTjsBGJ6zTHwy9oWIAjDaQjVsJ5GkOwAkVmN/5PdqvBfGZHtaQE7qzv5yZDom0cMndq/FQEMJnXDgGz/VCzfDm4sBns6yXa2DomEYdiWfdqBMY2igavS0oyaKwbKOjIGANfo187xLfr/EtRtnIXDndi6x3vdNzVEAGnsUf6fCn05Be+XWDPgzFoD8b7Dq52G4R503awCRAyL4FzK8KaOilaqU5nxO6q8nUP62xSDzxi60KsYdfSS0+iuAhwOD7jsErsWu/e2DxmScajYLgkQMFq32xJBVtnJqIABqqVY2hFs1kzvLWq93sR6inNYE805VirJAHZUFWarE9r1zTk5EK6VuJujT4TBbuwTaQtKa440zpFtBkyJuEJBq1LeGBHmQ47vu662ThD6FLVh2x5hzvvJAQ2E3zlpUdv2M7Ookq6aLEBd2g+atfEaZWgLoQ4hRcQinYvcvgUVqtmIQQj5hxnpcU1uTQO92e76KI00QOSKFIbHhKYsVwPs5YC5jn/bqFhe/wpSbmraNj2evk00zp75AsNaYFzBrAdcCB05gEzvNhlMhlpkwPp0Kqk/ly/JE9NKCurx1Uqz+0SfE7sRdpuBrirPOy5YNj2ehU4zmxNti57lqQPfaA2BzIknQ5O4Y4YAwlD6FLUh6q5NEWidElgT0+AuEd21MYCHOWhWu8DabnmOdfEbI7bE3ts2nct3XYE0kNKe7BWC38z9GMh4MNOOHTqvn+/6detL27FJFIbHnPXEVoizdtSGsiSPot8e+X9EuykYMPEJhcDzjp75gsIhG6oFM1CEB9YrFllk4dIKRTmUWichbisYjivWV5NMxm4bOY5tLwCAbPDVtx8ZrHkD7wITaTQRUI87LYP9yVL1mzTfLAfRDJmrA9HpMBwegnuXWCHv+TgfQ35IFIaLSf4VO9yl88CSLa4EnE5P7H2Db4T4sHAOClDh/AzuDgEqRKFI0kPC2E9/g15oOphZnbyFHqmrqrnexbwfchNLCzlRLskBNNBE+XuPDbkcpyaGcE5oXzePyFFhfFghjVL0XaHZS3dCzIpgXMGsEs1aki1WTP4j4eONEO+KYe7NieqAPUkEB9HQK6jagiZlrGwAa1A5HxpcmhKxu8lzZ8E0HWDbB33O3s800sO5jAbVAXmSkj56Dy/NBXFOLn6t2LnULdbQEUzevXFSyLP7RPNS/cT9wdrzGgMxu0t3pZoxmqWLUvsdllfhlkGsEtIc1qjHCDylWNSJz6wcMTnqrXvAv8/Uh4qMLHHUyrPnxkBAL5W4DdgnJoRxrlgzcw7LTjHdgCkOVbQ000O5kIQMjC0WXKjjhgDCUPjBO6nh44ZO8IOf2dqbarNFGeZh2YBsb5S7y899OIWxv8j2o06KUiQLVOjP0rDOA5P5AMLdjbtHHKk0np7QLL2ZMS85fY0CqJ0AAIzJ+4RBmHaw1BApuEdjFYt9PNW7PQh3M4gF0OHNX+vMEHWR5dC8TRfYDvgEH3gw3BqGuZOaJ2F+fB1EeooUhsgIbkRvWPA6UdPobRH9zk4orAMo0Etz8FhRTudlCr3dlLBe8ds8wRHfSCsRAa+0HY9AfYSI8j6uqokT745XF1pYrof/y2CuygB5fERZz9osfMNo0HljpBoIUeD+nP/JEXdR4A4QRlfO2mBcwawmjopSq5ZcKP64+I0DO5olRggYutdvWET0lsbyJJHIs806fUOk0ehKswkaAzG/iXaCVLLYJYgf7lOcyDpClK4CHpmW6IVKMW/qqR9Bb4hjakaLOVFkGkTHklEobARY9Wasfc9olzeODo8KW6Q+CzbyAiEf6w+Qbkxdw3qEErkDlkgAMs2M+jOGI40Q74pjbyqauRUpmMaDypTtscJbc3pT/ERp1bldDj+J0OCsGmjp2iEONM3Ld12BHKsWQbmDkghCaBjY6fGNTQ0S+xonYX58OtDuyRZTXVs8LFHKJnRfVcNoGzyNSH0z1iI73uOgmdoaJw/AL44BPHaWX2gRxpPcrVMcqvQOwQjQ74pxPqq8nVd7zlSCiA21e4IetzafVW3pV/oMnP3zxKJ6mmVoEJoEdNsAPcVa+lINnXVNGhdHsNuO77UeSUJpfFli6impHoMvWkTAWx5qh5Ib9jPAlOg7EbzMnqcmkLsuWDToEJoEZtBKvd2C4s43gu9S1x3cuIcdqyVYWYJpV16kPr+7HFD7GULTTEq71/1D7O7KAHl3CLCEATV1COTZQH8/nNFO8a5ZJMXe+1Wuhi4GUprDf8NR7rBOSlbp0VMgbTurS9ulAR4TWU071L8JMnXUECouFoiLjrozweiV6GDjTopSLnqNLYkUJ8V+WwADUd9M/hZQvXYNTQJq11r4Lvo9zwT/3uFAGs6oEGudhPbDFjv6AZw2Da/6kvgE7A5gH5hCuuTYI4mRdZ5nmwP6gt2N+FCK5pmHykJr1Jn6NHj9jReviTV4WVtpRGgalIdTkCr/WoImZb3/A2tR6EwOjs8bpa5fY6dCpQj/kYA9yF6O+AcBrgPT2h2tUh2uMY4qTRdvjnN14BiqkrCDlJNZQGB3CZd9/N6xEqoWvN1YLFnHta1cYKfaIxg32xZ+3Zecu0BT+NCJhgJ5hwzq9p6e3BDoymNrO/nuRmrYBMyJje36gJszelUThqpX6hnVpuwEca5NsHVLSRHh2xWtjoEmaweQ+Q0XX0qo1BMptB0e0wQ6iGHteX2cBj0CXhNZWKq8QEikd9RfqujR94xOuL7B4KxNs/BZGhWrCJPiDJF0HkmUPEHXnd+rFtMutR7bkyZ+GCIru/2PUPpIlIDICvtWQVty8V9T6rsbOw9KPr1BuT6L8HfLGEY60YA93YE3xX5BrBLCzJy4BhgvOplKRTmeE2lhcPKQCbMVzcuEWruWL0rgrsoAeW4R6F8Nf7iD61fYJONDAxwud5lgwli5Vu2E94keV8TwFFCocc8MiTMHDPE+qqkO0y+eR0eZSvkEatg2JZRUaT7AixRUbGwQuwTodjIK3sRgMYwuCUEmTiBLVk0WGYz/g0Gu5V5aFqyY2Po8Kr0dRH/ZN9gT2KqEe8kUpkNAYb3CXTcKeWwBL5c7HyPPidJg/VtzTNK0H2BbgCwWXs2rA1JsB9wcV2zTnbo1uXrZgf3Z4WuIHiHO+8kUk0CAaPHF23KlqywSqps8TMoaGMR1rd1h40OhH+sOk+7CWE79hx5+QVdMgnpEzO42makfQ2+XLL60XKmAJIkAR0kQqC2agiZlgKwQuxF4DB7rGhWg+0f2MIwwXSsOFK+Ok08pB954ARYOxLLNjPolTUpNCDRRLSV2cHVcoBIPT9tNKT0SyLa2U5OEOAT7zMp/PFdz6JggYIlKWHTPkWjI1bKrXQssEsLMi/LNjPoyBgDCUPsbJCv+Oo0UqBoHR9+T4Dlagi0vA0O5ZlA5Hxq1bAWlPgu3cstOkXTKkOjdlbFYRpH4x9CfDWsS3q83TVtTae+aIi95fZ9F6dpUgsqMKpYCnLL2VREobhS4j8u4/EBtbdNpNstKwXGIUGlNUz7apJfzxNNdyDTHXep6ntsSLRZepDy/OF3UL52ExQaMf5QvXaVllREpqtH8z0izvUMqB9g2MgrexGI9lK6N0iNFfk3nWELMn2jWVStxmFmW6McV6CbquNmCvopBgJlYPxeo3HU0wABouoOZnxz+L4H4hPF6uxoOF2H9yWkdkXWfdMuRR9cdzfiWVD/zXBlWuocfaf6/uxxQ7x/ixUgLqdSoHYc01AD5f8Va9179+INoRP1LsQkIV/PlEqOdguLONsuT6VPdyCsD0noDnl6CbFVf6SV6OE0C/9lgvo2K/BU73AdTU9AsfsPIs3E+PwLohOoUVFoaEOH4B/d2UXWbNNnHfdmPGe3dCywS1loUJlZfayVPrk0U7A839eAT4AR73IXDnEBpvcLbcuWH7AUqVC1dGu/eB3GqW6egWiUNsNgAOd4FHu3dCywS0JkTKUPM6vaentwQ6Mpjazv57kZvWULMjY2pOoTK4K7KAFC4xyhPzP081rG8CaOwjgpaYYpALY6VsHtHV+qZiEycrBTa63ZSn0JFf9lxOeq43FFkHIdFSAu1fYCY8vTUVXtr1zuLj+4q2/suWDHy2hgWIATTrgie8l5Ck31DwNkM+AQM6/qe2Z2ov99hYX85XgWqihSChow618AZ+bQS02x/UGodVabsEK3lEqOjWhocqkBcJgFYftbvGrfOQNkM+BVM6vaeWZb6hxni6jn5XhKpSRdQigj8xG9Z83DUE/klW2hfCacmm/GE2CBgmhlHMu5V7J2SsF9l2zkBAtxM/8NBrzdcClbp0UzkLLv6i5ulClSKQABxm6LQPjpdGCXy1wPVnux1CaNbMjg5BxgQ4fgH6QiRdZs32xSClJNN+IdD6u4HwQj5hx6pq6q4H0RvjTEQHR5qh7gJB3YAlGp+QlntFGxsASgXOAojSQpQpLGMI5rBJQ2w3ct3QsyJeQQSvVLPW1Np2NgvND69zlOvjfE6mxPgBHvf39nAgHluCNG+Onf1TqYG+U1KWFzEcm2cIKcCJY42zQM9y8+cvZZR+gCWCAkzBwz6JV263sR+inZ+uM071L8LBYJJH6m7RVw3NhWzxSjS+QwcqpFO8a5YI7bJ9x9nxNU9yBFPqxEBvcOX01fqUR2pOp7bHUR+3qQ8unr5UOrLUlgT2LluEdr35YKSBGTXe4oBPzxQo38JIbbKSQ00yt/uTl7wO0NR88dSn4noxAzr+pnaEcE+1aCs+bwcUPmLX9nZWKquBwPs5YCAeXsE+8zKfzxDsakYOrpCRd2thh/kRdn4Uc3acImal566FVh4Y4YAwnmvinE+snLWTOAVzcyBg3GfjUqz9dODeX7XO0zKb2wDKPrLc/BYXMRyWNNti8E1n2HU+IFCh9YrFkz6MgYAwnmQQTu+qr2cRfrdhxNJi3mXr05tLxfLM+Vba5ze/j+ErlHYMfDaDxUnu1VpTME12iSL/VRJhgk6RoS6Nh0e0quY2GFo9XtZwzBbRYMbTTvUvwky9dbfrbsBnAod7HmB68AodzMMRdUiP1p2lxfqRL+RgBLBD0g7QB59dtxKRTmUXqm8vjlbTz7Z4BBZSXVR6BoLcVLW6C4Tjm0UZyaQux3xB/hFwx1p8YW7wR3nxX5bACTb1MNxTdvxENnaFCZT2epx/6oNBH/cLu/KyajCsIOf2cCAbP9BDGZxvDiA6ETvHwpKTFug/ckjoAE1nmKE1OjN2Amt3QssEtNZUanSDOs0HikKUPzaJzy6yD5Gb9lAAwoD72yF2PL10++G+ZD4C46/GZLz7Vgn8hlkjHIQSr3dlQz/hhLsEQWMk2jUSjFvxgDNEP3Z5D67u34EfIkX1x+Yuq3R23XllJNA6JWjFZ7sfZdifg0jsEpO2ysPADqdhSKvEIrmksLeySjXyDo1npmWwelBO7XgKQ0R6pnRk0mLeb3FSKEllREpvgbsXJrvbBSyKlsjp1meB3TfA7nfx+pElkG5g5IJnLlT3yX1nplRrSlBO76qvJxAPwkFR8kJrE8bSKZ0E5OpOwT6C80zuYDoKJNpI1oLl2JLVT3IEXII/4ssEtddzG4WXeq0kpqRqpTe8TnqvJxAKosQkN1bqoB4TKVlhIP9bRHsXJruKtvxj5Kjo0+LVLVuQC7N1fQR4Mj40sWMnr+GF+XxmFoW7IcOMTqpLE9Q7QpFTIzLeZuvG3D031Iq+5cD1Z7sfYOo1L1jo1oJFCV7R+hN0iEJdMrRR90ZD30HErPwWdgRa9SO6S7+fBLE/F6zVZISIc77yQE00ET5bgOcdYE9fkRuGi1AZZFQhHG8C7adgSEONMlU7h0ejv4JkX/Hnt9CfscI/O4gKQ0Fftq0PoxL/pupncdMkFOqfcVWY3rqp1owTmhfHBjLFWHxjPayFTXI9NjD/ceUxHHWAiwP0RtRvwcdrDBcOpgQ+xonYXvLP5UvSsXFSxV5ewIIs3eR7AHtEfkMi+xJ1fG7y/C2CXBOIQtTLslKViBcwawSwsyCeYcM+iVNSk0Q7EmyfenpOdQvWcaTTEqoLgVY8CMLytC7ETpNTf0sBmC/SHx3jwtaIBhDfdoBJSldCywS1AfWOYcM+jxUUh2LdtRsPLu7WYY9CRdQnVuu7RVIpHODgG84BP7fDrp+RHPlEqOjWhoXZI/VIgmBJk4PWLRNGJcBsluQI32QSFNr+wg39eApDRD7ytdTTUt+REObJnSRkDl60PgPz6/nWjsuWCO2y0rAsYqf6c5V4Ql01TxEnRhJu0LZ+ieNWVItUhWlPqgpGQC7GUfVkhIqhHvIpaZAmKq9hHkLi+x9hCjXmCM2ycwVIq0Q7I4UMFq0Wz3GUJ2cvgWBrzQbX1ctFkzh7Xl9nAK8GgGCH9PgBHvJJnQfVGq60c/fHP3zxKjQKGFjXhmBM+5avcxe9J3nxNTAlF3DeUXUKuVOiYJtlNg6LPkpEE1vlLUQXQfqkK/ZRHTDCzPuEcimT39/wO4E/c9wWh1EYH8NPEgS9x9nxNUpUJ+O+JRQM8benoA/TEZ6JWqpH0Q8VaMszEd6V66agZNHwH1o2oItLyxsELsaPQyKSckXc6tafOgLoQ402xGuCQyeuUXUrAACzQJ9gczo5UppHM893qLhekt/1+7P1JGbkrslW0imZYC62/GE6F8e7FoWJX2H9jMJIQl0yt/viVLDfoYSuUOWElCmwcewpU1KTRDvmCC+qL341ahLAQMKWLouA5x1ulUQA7lE6Bhe+L5VoixLM/ePBdukiAA+nZN1+MmUPEHAjtfzBwz6JU1KVJulCnE+qqkNBHvK10FLDaq7A9nmd9RTra5Qec9OPSqb+y5YI6NaGgR0zpFtGUE1HcKBq1LWXc05VJ2l9xmZna163uCu+nhSxOgdxsZLC3kGQ5x1ulUQKm0E+cDK/7jTuzvIcKBaCRQlTh/pzlXiDifR+MfdGQz4FUzrNdyVkqpUGaW87GJHkO+JFJNZWKqHuBx0ddGROXxE7tRUbGwQuwTYI6NZ2dlqd1v7XZJxWHTIv8fC2Uz4g0GvNo1ekGnWHbEqe/pfU7qexMDNjLrQ6pqzZZUTr39C3FyVpuwQuwToY6NaDxclsYppDl7x3efI1IwQmE90xFP5Op2ZlyoSE7o56rycQCqIZQFKiztbqNtFd5WSKv/T2XmMuL/Pa9c7TPfOxNau7cyyTQIhGuSIVC7Tk01/hhC+Q57fQG2U2DhnKakczz3eouFJi3mXr13KQZ/D6SxXA+zlrGwQuwToXwtLSsCxv0lwtlF+2icPwDqdmI9/1kLsAdKel2ZTHy7jhiONEO+KcT6qmLjQqBbFgQ2VZ7xFG3m3kvkPa9c9DIvzGgMxu8lzZ9gzWucE0i+Insx4wxI5EcLdkayFHet2WFoSxPxesj67uHmRa5bAgI2a+yjagiZlgIBQuwToXdw+ONeufEp2vIrJ22dOBvaXASErFkGsEsLPX3mET7lmDUEI0O+KcT6qqQ0WKkkWgknJdX7CG7WxAxA5fITsXJruJ1oxrlgjo1oaBHTbFKyIlHWdllC8gx0cT3gU2HzuB8pCea+KcT6qqs7Q+IpX01ISKoRRyKZll8sz7gToXwmnJpC7LlggYI/LRGIKUWzdlDLOIBJ4h8LcCusEGCn6n1gXeZecMS+4/dgAvBnF00jMOVc73DYzxgsz7hHoXwo/uIWkwMf2sIXfBmP6k+IPk3QR5Aj5QVfPnLlCkmX0Xx6Xe8HHu76qqQ0TLEnXENlNuJUoSTa2U9RqusCInQy/7AQrUqhwd8sLUPPo03ddgSEOJUjUksDezz4WVGwiDU5EuZLM/T64/d7PPZgkDImLf9fuz9SnQlW7JVtIpl7setvxhOhfI1oaFKJ9S/cdhmEe5whULhYdw3vFkr/GT19RLZjerva1ed7D/F7v7MrNqJYvGstCUtSscMQX5fOuM1O7FDuMDQ6YQrrk2COjQSEOJoqAP81fT7jCwjxSxUpSplTY6nEYOFLF/Z7ganiLeZV5gl4TWUB5bhHebS8ArBC7BOhfHvzOlSH8nujp2iEONNsAKpbLnKsWQbtZiEyCeYcf6nGYVZiAvIp2fr85eYKwg5STWViqfkUdubGTVJC8RPnAyv+4wrrk2CO0EVCONM+RaMjVsqsGkn8BFkpX8xBHsK4HwQjbpQE7teAqzsR4ilfQGhvp7VKL5SbDwzo4RPAKC/480LclEqNxC5oAf5GLd1bLtJ9GhKwDE5mDfpTa63ZSmpGqvF7zLP84XdQ72cdAjcmozxtebS8AgGz90vkMATlsBSt9WCTjS8XRYM0f+QyCuh3kkK4Al13MbhRcKfaZ20F5gwgzfT4vxlpviQACDE3+F/vdNzVFgn0tletfGu/oE7sA26egWg+UIq5HvdmCpQ4zGyhRRsyaKxJCPicLgQjuzEZ6dClqzROsykdASFiznWOJNDbUk3/lW10OTilsA+tQeLG8jopSLnhJrIke8FphiVEAlhmM+INDuXce30Jq11rl6n+4WQQsimSCCZxqkOufS3CR1ma6AhxlXvn9QH/E+U5wTwpbpT4OYdbLqkSkCNOpF8yNOAWR+RLd2BHmU96stCquTRSsDmC4UhI6V6hdwZNRE2q+RMi29//zxGlSeQDMiY+Edu5cYCdQp8V+UEqviB3Mb9ZReUZWWxHsmNlp81w6DRevmCSv+lxolejax0fbVOk4ThxzddQ5ELmUegyBOIhS4PGKcDbYY0j/kZJoTNHYawVR+MfdGRGvll/6Ig1YGIG/TrMvObr5UPndhMUGier/E1g0Nh9Ugu2Vt41Nee5GN2USqOnZ2c4sCNNpyNQwawXSeIGSn47vFl36Md0cAkH93uBuf7te1/hCXgbICG5uBVjwJYfAbetSt45NfWwT8brIdfyOzxQgTgb2lxWxWFZG7AFRGA/7VB6stA9e0i/tzLp0KWrNCqhJAUFLCHiEQNry9NBVaz3XaEoM/SwFKPhJcKNISxCxi1SsnZNynuBQ/0ORWY36FcewsNwahrmT32Bqqq5NBD3YxxFNyPzGPQPs7soDuq4I+gvL/D+AakTIcLCJi8RkvFF9yRF3TiHI7AfQ3dy4hxevJVjZlGjUDOGtfjgcRG+bwACKGL+Waok2sNQU6D2EyIsNOL5FqVc746FPAVQnsFs9yJpxWCqYAAfZnMq1lAInb9jbEr1HH2tov7bYgzmbIgyJy3/X6tlAM8CHOWwEWfaaLnzF75B5DLZFz5envwsh31X0H2DZQD9C3A74iZV+RFwMiTMEzzoweLhNBX/ZZG/ZS3sEbskExkCVq3xBGqZwvn1Qr5S+Hw4OidClfwzjtlMwTiVJVKkIjIk6QtS+QhKZQmwU2ut2TXmexbwbYWo80+APMUrXT4JbZrZNFH85Ha4EK1KryR7sHUR1rdwyI1ugjiBLVn5LwRzsVkWvltNMg/gHGGpzDtzNEKjKdT0uuKjCu8rXTkKBoq5agjP00ESQrh+4CR7rLAZiPw42vI+J2CWIH+1OVHK6BhU6UsGMiCnRUy7wXR7XUq+JsSo6/0vPMUJeBsgIbm4E0bc2lZA5fET4zU1zuMLnPxggY06KUjTZgCkIkHUI3QsnWFCZDfvDzOs3HNvCfu+YJK/6bc8U+MkQkFlcqMKagjb2U1N5fZW5gMp8OlC8bkmz8E7LQrrRkmxdgzHbYFU9QVfTSTjAXakm20pCPscZYWp/ttiDOZhHkM9YqwX73DYzwxZ5aRHsXJr97lCtxMkx8suZknLtBv3OEHDR4Et6UsWMib+DEPzlWgEI69aM8y5//ZmBvB9LRsqOu9d4X2Zlx8BqfkUdgMt/ugHoB34jotuaEOH4G6udhiEKN18RkILaXLoEED2m2wkBP0cfa291fZ1Gr40xBk3N+8K73l/vEtH5bAEd8sp9P4Wk0XuJMgkZkvGuH2OOkXXbKw6T69Ofnz2WQC2S2doUOhGM/SVuqokBbcpn/ohK+xX4X5fQBkBq/0AXcvX6LBf7EfzKT5zaEzrk02k20HHLNMvT7s5YHKxWUH1H3R/Rr5Zf5fWeuh7EbZqkaj4J+RFkHIdFSBN7KNqCNDQArgBo1/uLnXwaA/G+h/B3SnVbZYTVL8kQSHkFkr0QiYYW6NIZrrbNWp7D/F739eAiYBYqSRaAyAlmuoGe5CWWSxo7BPiKSnj9V+SxjbB1S0kONhxALM/QsK3dCywS0h9PqlOM/WVcmxdPOhmnL/m23deo2sARSY3+OoCbM3pVE69qV+oZ1absEKP/2CGzickXoFiQfdoBMdHFlbxGl53DfhUYa3GfWZForcE7vqqpDQRqnAHHyti6V4LbcuNLyu4lTmMVjL/5EKg9i/ejXVoANR0G9pcU8xxn0OwQwp7IdMcYr3UeSFFp099u6zl/HEPsiQRGDcw71+7Xc/ZWkSpsUenenv9/w28E36OnWFoSuuTAPc/QoQwhwHxEwVqcrBZUoXUbSdQ7xxo6dCqpDRD929SRTEP60nhfJmKAlWI+R8sJnKx62/GE6GOjWhoUpPrMrI4UPtunDRFBwVqcqdEBuPBcHkHvgcewvqqpDRDvn2pDD1s8hHkOVLCZkSp7AYswWCcmkLsE6EhoEJoEca5JcIlQYRj/kYA9wsycqwaU+IZcGddmUp8sNDmqm5DtTTEqTEn+h+1P39nAgHluEcizfvw6Ey2E6phezwMVIrtIYDXH6kS02wA9ysfWKxZW51hCylMqk926M4YjjRDvimNvKpq/nyufFwUZR3l7CpjwZhYuUK3Pot8e7FoEcb6NdzfLcpsrDpPrzNIfPVZDa1LWGZMthJq87gfKTRDvinErsfl8h+2JFlQZTaB/Qt22JhbGm/GE6F8e+ydO8a5YI7IJDt90zct3XYEhKxZBvMeWWA3qEhMvtptbEVN5CnP56r3YFS/KghWSEiquEcimZZWbKS0Hft8cKywFqL8LNrMZjIK/kYA93YE2RVzBrAWJhhyrF98pNpnKRTm+WyQhfzrbAajWxECKS34GQR3y8RHT7HHRe4kPv25WcGTYI7ELmgZhSNMuCQKxTjNBvM0RGIz/Qx2l8F9e0y1VGaIvqOJHkO+JFIfIDb/Q6Ei2tlOTrejaot8e7y9DqNcMJWgQjU87OtFoyNWyjiFKfNfAyN8vFUG+ZslJQn2EiPI+ruqJEqlBHgQSEipVKFgIS487A==',
                    ),
                    !0,
                    !0,
                    !1,
                  ),
                  n.FS_createDataFile(
                    '/',
                    'voxel_tree_traversal.glsl',
                    wr(
                      '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',
                    ),
                    !0,
                    !0,
                    !1,
                  );
              }
              n.calledRun
                ? r()
                : (n.preRun || (n.preRun = []), n.preRun.push(r));
            })();
          var a,
            i = {};
          for (a in n) n.hasOwnProperty(a) && (i[a] = n[a]);
          var s,
            u,
            l = './this.program',
            c = '';
          'undefined' != typeof document &&
            document.currentScript &&
            (c = document.currentScript.src),
            o && (c = o),
            (c =
              0 !== c.indexOf('blob:')
                ? c.substr(0, c.replace(/[?#].*/, '').lastIndexOf('/') + 1)
                : ''),
            (s = function (e) {
              var r = new XMLHttpRequest();
              return r.open('GET', e, !1), r.send(null), r.responseText;
            }),
            (u = function (e, r, t) {
              var n = new XMLHttpRequest();
              n.open('GET', e, !0),
                (n.responseType = 'arraybuffer'),
                (n.onload = function () {
                  200 == n.status || (0 == n.status && n.response)
                    ? r(n.response)
                    : t();
                }),
                (n.onerror = t),
                n.send(null);
            });
          var f = n.print || console.log.bind(console),
            d = n.printErr || console.warn.bind(console);
          for (a in i) i.hasOwnProperty(a) && (n[a] = i[a]);
          (i = null), n.arguments, n.thisProgram && (l = n.thisProgram), n.quit;
          var E,
            p,
            g,
            h = [];
          n.wasmBinary && (p = n.wasmBinary),
            n.noExitRuntime,
            'object' != typeof WebAssembly &&
              re('no native wasm support detected');
          var m = !1,
            w =
              'undefined' != typeof TextDecoder
                ? new TextDecoder('utf8')
                : void 0;
          function v(e, r, t) {
            for (var n = r + t, o = r; e[o] && !(o >= n); ) ++o;
            if (o - r > 16 && e.subarray && w)
              return w.decode(e.subarray(r, o));
            for (var a = ''; r < o; ) {
              var i = e[r++];
              if (128 & i) {
                var s = 63 & e[r++];
                if (192 != (224 & i)) {
                  var u = 63 & e[r++];
                  if (
                    (i =
                      224 == (240 & i)
                        ? ((15 & i) << 12) | (s << 6) | u
                        : ((7 & i) << 18) |
                          (s << 12) |
                          (u << 6) |
                          (63 & e[r++])) < 65536
                  )
                    a += String.fromCharCode(i);
                  else {
                    var l = i - 65536;
                    a += String.fromCharCode(
                      55296 | (l >> 10),
                      56320 | (1023 & l),
                    );
                  }
                } else a += String.fromCharCode(((31 & i) << 6) | s);
              } else a += String.fromCharCode(i);
            }
            return a;
          }
          function y(e, r) {
            return e ? v(T, e, r) : '';
          }
          function k(e, r, t, n) {
            if (!(n > 0)) return 0;
            for (var o = t, a = t + n - 1, i = 0; i < e.length; ++i) {
              var s = e.charCodeAt(i);
              if (
                (s >= 55296 &&
                  s <= 57343 &&
                  (s =
                    (65536 + ((1023 & s) << 10)) | (1023 & e.charCodeAt(++i))),
                s <= 127)
              ) {
                if (t >= a) break;
                r[t++] = s;
              } else if (s <= 2047) {
                if (t + 1 >= a) break;
                (r[t++] = 192 | (s >> 6)), (r[t++] = 128 | (63 & s));
              } else if (s <= 65535) {
                if (t + 2 >= a) break;
                (r[t++] = 224 | (s >> 12)),
                  (r[t++] = 128 | ((s >> 6) & 63)),
                  (r[t++] = 128 | (63 & s));
              } else {
                if (t + 3 >= a) break;
                (r[t++] = 240 | (s >> 18)),
                  (r[t++] = 128 | ((s >> 12) & 63)),
                  (r[t++] = 128 | ((s >> 6) & 63)),
                  (r[t++] = 128 | (63 & s));
              }
            }
            return (r[t] = 0), t - o;
          }
          function B(e, r, t) {
            return k(e, T, r, t);
          }
          function C(e) {
            for (var r = 0, t = 0; t < e.length; ++t) {
              var n = e.charCodeAt(t);
              n >= 55296 &&
                n <= 57343 &&
                (n = (65536 + ((1023 & n) << 10)) | (1023 & e.charCodeAt(++t))),
                n <= 127 ? ++r : (r += n <= 2047 ? 2 : n <= 65535 ? 3 : 4);
            }
            return r;
          }
          var Q,
            A,
            T,
            R,
            x,
            H,
            F,
            U,
            W,
            S,
            D =
              'undefined' != typeof TextDecoder
                ? new TextDecoder('utf-16le')
                : void 0;
          function q(e, r) {
            for (var t = e, n = t >> 1, o = n + r / 2; !(n >= o) && x[n]; ) ++n;
            if ((t = n << 1) - e > 32 && D) return D.decode(T.subarray(e, t));
            for (var a = '', i = 0; !(i >= r / 2); ++i) {
              var s = R[(e + 2 * i) >> 1];
              if (0 == s) break;
              a += String.fromCharCode(s);
            }
            return a;
          }
          function b(e, r, t) {
            if ((void 0 === t && (t = 2147483647), t < 2)) return 0;
            for (
              var n = r, o = (t -= 2) < 2 * e.length ? t / 2 : e.length, a = 0;
              a < o;
              ++a
            ) {
              var i = e.charCodeAt(a);
              (R[r >> 1] = i), (r += 2);
            }
            return (R[r >> 1] = 0), r - n;
          }
          function O(e) {
            return 2 * e.length;
          }
          function P(e, r) {
            for (var t = 0, n = ''; !(t >= r / 4); ) {
              var o = H[(e + 4 * t) >> 2];
              if (0 == o) break;
              if ((++t, o >= 65536)) {
                var a = o - 65536;
                n += String.fromCharCode(55296 | (a >> 10), 56320 | (1023 & a));
              } else n += String.fromCharCode(o);
            }
            return n;
          }
          function L(e, r, t) {
            if ((void 0 === t && (t = 2147483647), t < 4)) return 0;
            for (var n = r, o = n + t - 4, a = 0; a < e.length; ++a) {
              var i = e.charCodeAt(a);
              if (
                (i >= 55296 &&
                  i <= 57343 &&
                  (i =
                    (65536 + ((1023 & i) << 10)) | (1023 & e.charCodeAt(++a))),
                (H[r >> 2] = i),
                (r += 4) + 4 > o)
              )
                break;
            }
            return (H[r >> 2] = 0), r - n;
          }
          function N(e) {
            for (var r = 0, t = 0; t < e.length; ++t) {
              var n = e.charCodeAt(t);
              n >= 55296 && n <= 57343 && ++t, (r += 4);
            }
            return r;
          }
          function V(e, r) {
            return e % r > 0 && (e += r - (e % r)), e;
          }
          function I(e) {
            (Q = e),
              (n.HEAP8 = A = new Int8Array(e)),
              (n.HEAP16 = R = new Int16Array(e)),
              (n.HEAP32 = H = new Int32Array(e)),
              (n.HEAPU8 = T = new Uint8Array(e)),
              (n.HEAPU16 = x = new Uint16Array(e)),
              (n.HEAPU32 = F = new Uint32Array(e)),
              (n.HEAPF32 = U = new Float32Array(e)),
              (n.HEAPF64 = W = new Float64Array(e));
          }
          n.INITIAL_MEMORY;
          var Z = [],
            M = [],
            Y = [];
          function G(e) {
            Z.unshift(e);
          }
          function K(e) {
            Y.unshift(e);
          }
          var X,
            J,
            j,
            z = 0,
            _ = null;
          function $(e) {
            z++, n.monitorRunDependencies && n.monitorRunDependencies(z);
          }
          function ee(e) {
            if (
              (z--,
              n.monitorRunDependencies && n.monitorRunDependencies(z),
              0 == z && _)
            ) {
              var r = _;
              (_ = null), r();
            }
          }
          function re(e) {
            n.onAbort && n.onAbort(e),
              d((e = 'Aborted(' + e + ')')),
              (m = !0),
              (e += '. Build with -s ASSERTIONS=1 for more info.');
            var r = new WebAssembly.RuntimeError(e);
            throw (t(r), r);
          }
          function te(e) {
            return e.startsWith('data:application/octet-stream;base64,');
          }
          function ne(e) {
            try {
              if (e == X && p) return new Uint8Array(p);
              throw 'both async and sync fetching of the wasm failed';
            } catch (e) {
              re(e);
            }
          }
          function oe(e) {
            for (; e.length > 0; ) {
              var r = e.shift();
              if ('function' != typeof r) {
                var t = r.func;
                'number' == typeof t
                  ? void 0 === r.arg
                    ? S.get(t)()
                    : S.get(t)(r.arg)
                  : t(void 0 === r.arg ? null : r.arg);
              } else r(n);
            }
          }
          function ae(e) {
            (this.excPtr = e),
              (this.ptr = e - 16),
              (this.set_type = function (e) {
                H[(this.ptr + 4) >> 2] = e;
              }),
              (this.get_type = function () {
                return H[(this.ptr + 4) >> 2];
              }),
              (this.set_destructor = function (e) {
                H[(this.ptr + 8) >> 2] = e;
              }),
              (this.get_destructor = function () {
                return H[(this.ptr + 8) >> 2];
              }),
              (this.set_refcount = function (e) {
                H[this.ptr >> 2] = e;
              }),
              (this.set_caught = function (e) {
                (e = e ? 1 : 0), (A[(this.ptr + 12) >> 0] = e);
              }),
              (this.get_caught = function () {
                return 0 != A[(this.ptr + 12) >> 0];
              }),
              (this.set_rethrown = function (e) {
                (e = e ? 1 : 0), (A[(this.ptr + 13) >> 0] = e);
              }),
              (this.get_rethrown = function () {
                return 0 != A[(this.ptr + 13) >> 0];
              }),
              (this.init = function (e, r) {
                this.set_type(e),
                  this.set_destructor(r),
                  this.set_refcount(0),
                  this.set_caught(!1),
                  this.set_rethrown(!1);
              }),
              (this.add_ref = function () {
                var e = H[this.ptr >> 2];
                H[this.ptr >> 2] = e + 1;
              }),
              (this.release_ref = function () {
                var e = H[this.ptr >> 2];
                return (H[this.ptr >> 2] = e - 1), 1 === e;
              });
          }
          (n.preloadedImages = {}),
            (n.preloadedAudios = {}),
            te((X = 'vxlLayer.wasm')) ||
              (X = (function (e) {
                return n.locateFile ? n.locateFile(e, c) : c + e;
              })(X));
          var ie = {
              splitPath: function (e) {
                return /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/
                  .exec(e)
                  .slice(1);
              },
              normalizeArray: function (e, r) {
                for (var t = 0, n = e.length - 1; n >= 0; n--) {
                  var o = e[n];
                  '.' === o
                    ? e.splice(n, 1)
                    : '..' === o
                    ? (e.splice(n, 1), t++)
                    : t && (e.splice(n, 1), t--);
                }
                if (r) for (; t; t--) e.unshift('..');
                return e;
              },
              normalize: function (e) {
                var r = '/' === e.charAt(0),
                  t = '/' === e.substr(-1);
                return (
                  (e = ie
                    .normalizeArray(
                      e.split('/').filter(function (e) {
                        return !!e;
                      }),
                      !r,
                    )
                    .join('/')) ||
                    r ||
                    (e = '.'),
                  e && t && (e += '/'),
                  (r ? '/' : '') + e
                );
              },
              dirname: function (e) {
                var r = ie.splitPath(e),
                  t = r[0],
                  n = r[1];
                return t || n
                  ? (n && (n = n.substr(0, n.length - 1)), t + n)
                  : '.';
              },
              basename: function (e) {
                if ('/' === e) return '/';
                var r = (e = (e = ie.normalize(e)).replace(
                  /\/$/,
                  '',
                )).lastIndexOf('/');
                return -1 === r ? e : e.substr(r + 1);
              },
              extname: function (e) {
                return ie.splitPath(e)[3];
              },
              join: function () {
                var e = Array.prototype.slice.call(arguments, 0);
                return ie.normalize(e.join('/'));
              },
              join2: function (e, r) {
                return ie.normalize(e + '/' + r);
              },
            },
            se = {
              resolve: function () {
                for (
                  var e = '', r = !1, t = arguments.length - 1;
                  t >= -1 && !r;
                  t--
                ) {
                  var n = t >= 0 ? arguments[t] : fe.cwd();
                  if ('string' != typeof n)
                    throw new TypeError(
                      'Arguments to path.resolve must be strings',
                    );
                  if (!n) return '';
                  (e = n + '/' + e), (r = '/' === n.charAt(0));
                }
                return (
                  (r ? '/' : '') +
                    (e = ie
                      .normalizeArray(
                        e.split('/').filter(function (e) {
                          return !!e;
                        }),
                        !r,
                      )
                      .join('/')) || '.'
                );
              },
              relative: function (e, r) {
                function t(e) {
                  for (var r = 0; r < e.length && '' === e[r]; r++);
                  for (var t = e.length - 1; t >= 0 && '' === e[t]; t--);
                  return r > t ? [] : e.slice(r, t - r + 1);
                }
                (e = se.resolve(e).substr(1)), (r = se.resolve(r).substr(1));
                for (
                  var n = t(e.split('/')),
                    o = t(r.split('/')),
                    a = Math.min(n.length, o.length),
                    i = a,
                    s = 0;
                  s < a;
                  s++
                )
                  if (n[s] !== o[s]) {
                    i = s;
                    break;
                  }
                var u = [];
                for (s = i; s < n.length; s++) u.push('..');
                return (u = u.concat(o.slice(i))).join('/');
              },
            },
            ue = {
              ttys: [],
              init: function () {},
              shutdown: function () {},
              register: function (e, r) {
                (ue.ttys[e] = { input: [], output: [], ops: r }),
                  fe.registerDevice(e, ue.stream_ops);
              },
              stream_ops: {
                open: function (e) {
                  var r = ue.ttys[e.node.rdev];
                  if (!r) throw new fe.ErrnoError(43);
                  (e.tty = r), (e.seekable = !1);
                },
                close: function (e) {
                  e.tty.ops.flush(e.tty);
                },
                flush: function (e) {
                  e.tty.ops.flush(e.tty);
                },
                read: function (e, r, t, n, o) {
                  if (!e.tty || !e.tty.ops.get_char)
                    throw new fe.ErrnoError(60);
                  for (var a = 0, i = 0; i < n; i++) {
                    var s;
                    try {
                      s = e.tty.ops.get_char(e.tty);
                    } catch (e) {
                      throw new fe.ErrnoError(29);
                    }
                    if (void 0 === s && 0 === a) throw new fe.ErrnoError(6);
                    if (null == s) break;
                    a++, (r[t + i] = s);
                  }
                  return a && (e.node.timestamp = Date.now()), a;
                },
                write: function (e, r, t, n, o) {
                  if (!e.tty || !e.tty.ops.put_char)
                    throw new fe.ErrnoError(60);
                  try {
                    for (var a = 0; a < n; a++)
                      e.tty.ops.put_char(e.tty, r[t + a]);
                  } catch (e) {
                    throw new fe.ErrnoError(29);
                  }
                  return n && (e.node.timestamp = Date.now()), a;
                },
              },
              default_tty_ops: {
                get_char: function (e) {
                  if (!e.input.length) {
                    var r = null;
                    if (
                      ('undefined' != typeof window &&
                      'function' == typeof window.prompt
                        ? null !== (r = window.prompt('Input: ')) && (r += '\n')
                        : 'function' == typeof readline &&
                          null !== (r = readline()) &&
                          (r += '\n'),
                      !r)
                    )
                      return null;
                    e.input = mr(r, !0);
                  }
                  return e.input.shift();
                },
                put_char: function (e, r) {
                  null === r || 10 === r
                    ? (f(v(e.output, 0)), (e.output = []))
                    : 0 != r && e.output.push(r);
                },
                flush: function (e) {
                  e.output &&
                    e.output.length > 0 &&
                    (f(v(e.output, 0)), (e.output = []));
                },
              },
              default_tty1_ops: {
                put_char: function (e, r) {
                  null === r || 10 === r
                    ? (d(v(e.output, 0)), (e.output = []))
                    : 0 != r && e.output.push(r);
                },
                flush: function (e) {
                  e.output &&
                    e.output.length > 0 &&
                    (d(v(e.output, 0)), (e.output = []));
                },
              },
            },
            le = {
              ops_table: null,
              mount: function (e) {
                return le.createNode(null, '/', 16895, 0);
              },
              createNode: function (e, r, t, n) {
                if (fe.isBlkdev(t) || fe.isFIFO(t)) throw new fe.ErrnoError(63);
                le.ops_table ||
                  (le.ops_table = {
                    dir: {
                      node: {
                        getattr: le.node_ops.getattr,
                        setattr: le.node_ops.setattr,
                        lookup: le.node_ops.lookup,
                        mknod: le.node_ops.mknod,
                        rename: le.node_ops.rename,
                        unlink: le.node_ops.unlink,
                        rmdir: le.node_ops.rmdir,
                        readdir: le.node_ops.readdir,
                        symlink: le.node_ops.symlink,
                      },
                      stream: { llseek: le.stream_ops.llseek },
                    },
                    file: {
                      node: {
                        getattr: le.node_ops.getattr,
                        setattr: le.node_ops.setattr,
                      },
                      stream: {
                        llseek: le.stream_ops.llseek,
                        read: le.stream_ops.read,
                        write: le.stream_ops.write,
                        allocate: le.stream_ops.allocate,
                        mmap: le.stream_ops.mmap,
                        msync: le.stream_ops.msync,
                      },
                    },
                    link: {
                      node: {
                        getattr: le.node_ops.getattr,
                        setattr: le.node_ops.setattr,
                        readlink: le.node_ops.readlink,
                      },
                      stream: {},
                    },
                    chrdev: {
                      node: {
                        getattr: le.node_ops.getattr,
                        setattr: le.node_ops.setattr,
                      },
                      stream: fe.chrdev_stream_ops,
                    },
                  });
                var o = fe.createNode(e, r, t, n);
                return (
                  fe.isDir(o.mode)
                    ? ((o.node_ops = le.ops_table.dir.node),
                      (o.stream_ops = le.ops_table.dir.stream),
                      (o.contents = {}))
                    : fe.isFile(o.mode)
                    ? ((o.node_ops = le.ops_table.file.node),
                      (o.stream_ops = le.ops_table.file.stream),
                      (o.usedBytes = 0),
                      (o.contents = null))
                    : fe.isLink(o.mode)
                    ? ((o.node_ops = le.ops_table.link.node),
                      (o.stream_ops = le.ops_table.link.stream))
                    : fe.isChrdev(o.mode) &&
                      ((o.node_ops = le.ops_table.chrdev.node),
                      (o.stream_ops = le.ops_table.chrdev.stream)),
                  (o.timestamp = Date.now()),
                  e && ((e.contents[r] = o), (e.timestamp = o.timestamp)),
                  o
                );
              },
              getFileDataAsTypedArray: function (e) {
                return e.contents
                  ? e.contents.subarray
                    ? e.contents.subarray(0, e.usedBytes)
                    : new Uint8Array(e.contents)
                  : new Uint8Array(0);
              },
              expandFileStorage: function (e, r) {
                var t = e.contents ? e.contents.length : 0;
                if (!(t >= r)) {
                  (r = Math.max(r, (t * (t < 1048576 ? 2 : 1.125)) >>> 0)),
                    0 != t && (r = Math.max(r, 256));
                  var n = e.contents;
                  (e.contents = new Uint8Array(r)),
                    e.usedBytes > 0 &&
                      e.contents.set(n.subarray(0, e.usedBytes), 0);
                }
              },
              resizeFileStorage: function (e, r) {
                if (e.usedBytes != r)
                  if (0 == r) (e.contents = null), (e.usedBytes = 0);
                  else {
                    var t = e.contents;
                    (e.contents = new Uint8Array(r)),
                      t &&
                        e.contents.set(t.subarray(0, Math.min(r, e.usedBytes))),
                      (e.usedBytes = r);
                  }
              },
              node_ops: {
                getattr: function (e) {
                  var r = {};
                  return (
                    (r.dev = fe.isChrdev(e.mode) ? e.id : 1),
                    (r.ino = e.id),
                    (r.mode = e.mode),
                    (r.nlink = 1),
                    (r.uid = 0),
                    (r.gid = 0),
                    (r.rdev = e.rdev),
                    fe.isDir(e.mode)
                      ? (r.size = 4096)
                      : fe.isFile(e.mode)
                      ? (r.size = e.usedBytes)
                      : fe.isLink(e.mode)
                      ? (r.size = e.link.length)
                      : (r.size = 0),
                    (r.atime = new Date(e.timestamp)),
                    (r.mtime = new Date(e.timestamp)),
                    (r.ctime = new Date(e.timestamp)),
                    (r.blksize = 4096),
                    (r.blocks = Math.ceil(r.size / r.blksize)),
                    r
                  );
                },
                setattr: function (e, r) {
                  void 0 !== r.mode && (e.mode = r.mode),
                    void 0 !== r.timestamp && (e.timestamp = r.timestamp),
                    void 0 !== r.size && le.resizeFileStorage(e, r.size);
                },
                lookup: function (e, r) {
                  throw fe.genericErrors[44];
                },
                mknod: function (e, r, t, n) {
                  return le.createNode(e, r, t, n);
                },
                rename: function (e, r, t) {
                  if (fe.isDir(e.mode)) {
                    var n;
                    try {
                      n = fe.lookupNode(r, t);
                    } catch (e) {}
                    if (n)
                      for (var o in n.contents) throw new fe.ErrnoError(55);
                  }
                  delete e.parent.contents[e.name],
                    (e.parent.timestamp = Date.now()),
                    (e.name = t),
                    (r.contents[t] = e),
                    (r.timestamp = e.parent.timestamp),
                    (e.parent = r);
                },
                unlink: function (e, r) {
                  delete e.contents[r], (e.timestamp = Date.now());
                },
                rmdir: function (e, r) {
                  var t = fe.lookupNode(e, r);
                  for (var n in t.contents) throw new fe.ErrnoError(55);
                  delete e.contents[r], (e.timestamp = Date.now());
                },
                readdir: function (e) {
                  var r = ['.', '..'];
                  for (var t in e.contents)
                    e.contents.hasOwnProperty(t) && r.push(t);
                  return r;
                },
                symlink: function (e, r, t) {
                  var n = le.createNode(e, r, 41471, 0);
                  return (n.link = t), n;
                },
                readlink: function (e) {
                  if (!fe.isLink(e.mode)) throw new fe.ErrnoError(28);
                  return e.link;
                },
              },
              stream_ops: {
                read: function (e, r, t, n, o) {
                  var a = e.node.contents;
                  if (o >= e.node.usedBytes) return 0;
                  var i = Math.min(e.node.usedBytes - o, n);
                  if (i > 8 && a.subarray) r.set(a.subarray(o, o + i), t);
                  else for (var s = 0; s < i; s++) r[t + s] = a[o + s];
                  return i;
                },
                write: function (e, r, t, n, o, a) {
                  if ((r.buffer === A.buffer && (a = !1), !n)) return 0;
                  var i = e.node;
                  if (
                    ((i.timestamp = Date.now()),
                    r.subarray && (!i.contents || i.contents.subarray))
                  ) {
                    if (a)
                      return (
                        (i.contents = r.subarray(t, t + n)),
                        (i.usedBytes = n),
                        n
                      );
                    if (0 === i.usedBytes && 0 === o)
                      return (
                        (i.contents = r.slice(t, t + n)), (i.usedBytes = n), n
                      );
                    if (o + n <= i.usedBytes)
                      return i.contents.set(r.subarray(t, t + n), o), n;
                  }
                  if (
                    (le.expandFileStorage(i, o + n),
                    i.contents.subarray && r.subarray)
                  )
                    i.contents.set(r.subarray(t, t + n), o);
                  else for (var s = 0; s < n; s++) i.contents[o + s] = r[t + s];
                  return (i.usedBytes = Math.max(i.usedBytes, o + n)), n;
                },
                llseek: function (e, r, t) {
                  var n = r;
                  if (
                    (1 === t
                      ? (n += e.position)
                      : 2 === t &&
                        fe.isFile(e.node.mode) &&
                        (n += e.node.usedBytes),
                    n < 0)
                  )
                    throw new fe.ErrnoError(28);
                  return n;
                },
                allocate: function (e, r, t) {
                  le.expandFileStorage(e.node, r + t),
                    (e.node.usedBytes = Math.max(e.node.usedBytes, r + t));
                },
                mmap: function (e, r, t, n, o, a) {
                  if (0 !== r) throw new fe.ErrnoError(28);
                  if (!fe.isFile(e.node.mode)) throw new fe.ErrnoError(43);
                  var i,
                    s,
                    u = e.node.contents;
                  if (2 & a || u.buffer !== Q) {
                    if (
                      ((n > 0 || n + t < u.length) &&
                        (u = u.subarray
                          ? u.subarray(n, n + t)
                          : Array.prototype.slice.call(u, n, n + t)),
                      (s = !0),
                      !(i = void re()))
                    )
                      throw new fe.ErrnoError(48);
                    A.set(u, i);
                  } else (s = !1), (i = u.byteOffset);
                  return { ptr: i, allocated: s };
                },
                msync: function (e, r, t, n, o) {
                  if (!fe.isFile(e.node.mode)) throw new fe.ErrnoError(43);
                  return 2 & o || le.stream_ops.write(e, r, 0, n, t, !1), 0;
                },
              },
            };
          function ce(e, r, t, n) {
            var o = n ? '' : 'al ' + e;
            u(
              e,
              function (t) {
                (function (e, r) {
                  e || re('Assertion failed: ' + r);
                })(t, 'Loading data file "' + e + '" failed (no arrayBuffer).'),
                  r(new Uint8Array(t)),
                  o && ee();
              },
              function (r) {
                if (!t) throw 'Loading data file "' + e + '" failed.';
                t();
              },
            ),
              o && $();
          }
          var fe = {
              root: null,
              mounts: [],
              devices: {},
              streams: [],
              nextInode: 1,
              nameTable: null,
              currentPath: '/',
              initialized: !1,
              ignorePermissions: !0,
              ErrnoError: null,
              genericErrors: {},
              filesystems: null,
              syncFSRequests: 0,
              lookupPath: function (e, r) {
                if (((r = r || {}), !(e = se.resolve(fe.cwd(), e))))
                  return { path: '', node: null };
                var t = { follow_mount: !0, recurse_count: 0 };
                for (var n in t) void 0 === r[n] && (r[n] = t[n]);
                if (r.recurse_count > 8) throw new fe.ErrnoError(32);
                for (
                  var o = ie.normalizeArray(
                      e.split('/').filter(function (e) {
                        return !!e;
                      }),
                      !1,
                    ),
                    a = fe.root,
                    i = '/',
                    s = 0;
                  s < o.length;
                  s++
                ) {
                  var u = s === o.length - 1;
                  if (u && r.parent) break;
                  if (
                    ((a = fe.lookupNode(a, o[s])),
                    (i = ie.join2(i, o[s])),
                    fe.isMountpoint(a) &&
                      (!u || (u && r.follow_mount)) &&
                      (a = a.mounted.root),
                    !u || r.follow)
                  )
                    for (var l = 0; fe.isLink(a.mode); ) {
                      var c = fe.readlink(i);
                      if (
                        ((i = se.resolve(ie.dirname(i), c)),
                        (a = fe.lookupPath(i, {
                          recurse_count: r.recurse_count,
                        }).node),
                        l++ > 40)
                      )
                        throw new fe.ErrnoError(32);
                    }
                }
                return { path: i, node: a };
              },
              getPath: function (e) {
                for (var r; ; ) {
                  if (fe.isRoot(e)) {
                    var t = e.mount.mountpoint;
                    return r
                      ? '/' !== t[t.length - 1]
                        ? t + '/' + r
                        : t + r
                      : t;
                  }
                  (r = r ? e.name + '/' + r : e.name), (e = e.parent);
                }
              },
              hashName: function (e, r) {
                for (var t = 0, n = 0; n < r.length; n++)
                  t = ((t << 5) - t + r.charCodeAt(n)) | 0;
                return ((e + t) >>> 0) % fe.nameTable.length;
              },
              hashAddNode: function (e) {
                var r = fe.hashName(e.parent.id, e.name);
                (e.name_next = fe.nameTable[r]), (fe.nameTable[r] = e);
              },
              hashRemoveNode: function (e) {
                var r = fe.hashName(e.parent.id, e.name);
                if (fe.nameTable[r] === e) fe.nameTable[r] = e.name_next;
                else
                  for (var t = fe.nameTable[r]; t; ) {
                    if (t.name_next === e) {
                      t.name_next = e.name_next;
                      break;
                    }
                    t = t.name_next;
                  }
              },
              lookupNode: function (e, r) {
                var t = fe.mayLookup(e);
                if (t) throw new fe.ErrnoError(t, e);
                for (
                  var n = fe.hashName(e.id, r), o = fe.nameTable[n];
                  o;
                  o = o.name_next
                ) {
                  var a = o.name;
                  if (o.parent.id === e.id && a === r) return o;
                }
                return fe.lookup(e, r);
              },
              createNode: function (e, r, t, n) {
                var o = new fe.FSNode(e, r, t, n);
                return fe.hashAddNode(o), o;
              },
              destroyNode: function (e) {
                fe.hashRemoveNode(e);
              },
              isRoot: function (e) {
                return e === e.parent;
              },
              isMountpoint: function (e) {
                return !!e.mounted;
              },
              isFile: function (e) {
                return 32768 == (61440 & e);
              },
              isDir: function (e) {
                return 16384 == (61440 & e);
              },
              isLink: function (e) {
                return 40960 == (61440 & e);
              },
              isChrdev: function (e) {
                return 8192 == (61440 & e);
              },
              isBlkdev: function (e) {
                return 24576 == (61440 & e);
              },
              isFIFO: function (e) {
                return 4096 == (61440 & e);
              },
              isSocket: function (e) {
                return 49152 == (49152 & e);
              },
              flagModes: {
                r: 0,
                'r+': 2,
                w: 577,
                'w+': 578,
                a: 1089,
                'a+': 1090,
              },
              modeStringToFlags: function (e) {
                var r = fe.flagModes[e];
                if (void 0 === r)
                  throw new Error('Unknown file open mode: ' + e);
                return r;
              },
              flagsToPermissionString: function (e) {
                var r = ['r', 'w', 'rw'][3 & e];
                return 512 & e && (r += 'w'), r;
              },
              nodePermissions: function (e, r) {
                return fe.ignorePermissions ||
                  ((!r.includes('r') || 292 & e.mode) &&
                    (!r.includes('w') || 146 & e.mode) &&
                    (!r.includes('x') || 73 & e.mode))
                  ? 0
                  : 2;
              },
              mayLookup: function (e) {
                return (
                  fe.nodePermissions(e, 'x') || (e.node_ops.lookup ? 0 : 2)
                );
              },
              mayCreate: function (e, r) {
                try {
                  return fe.lookupNode(e, r), 20;
                } catch (e) {}
                return fe.nodePermissions(e, 'wx');
              },
              mayDelete: function (e, r, t) {
                var n;
                try {
                  n = fe.lookupNode(e, r);
                } catch (e) {
                  return e.errno;
                }
                var o = fe.nodePermissions(e, 'wx');
                if (o) return o;
                if (t) {
                  if (!fe.isDir(n.mode)) return 54;
                  if (fe.isRoot(n) || fe.getPath(n) === fe.cwd()) return 10;
                } else if (fe.isDir(n.mode)) return 31;
                return 0;
              },
              mayOpen: function (e, r) {
                return e
                  ? fe.isLink(e.mode)
                    ? 32
                    : fe.isDir(e.mode) &&
                      ('r' !== fe.flagsToPermissionString(r) || 512 & r)
                    ? 31
                    : fe.nodePermissions(e, fe.flagsToPermissionString(r))
                  : 44;
              },
              MAX_OPEN_FDS: 4096,
              nextfd: function (e, r) {
                (e = e || 0), (r = r || fe.MAX_OPEN_FDS);
                for (var t = e; t <= r; t++) if (!fe.streams[t]) return t;
                throw new fe.ErrnoError(33);
              },
              getStream: function (e) {
                return fe.streams[e];
              },
              createStream: function (e, r, t) {
                fe.FSStream ||
                  ((fe.FSStream = function () {}),
                  (fe.FSStream.prototype = {
                    object: {
                      get: function () {
                        return this.node;
                      },
                      set: function (e) {
                        this.node = e;
                      },
                    },
                    isRead: {
                      get: function () {
                        return 1 != (2097155 & this.flags);
                      },
                    },
                    isWrite: {
                      get: function () {
                        return 0 != (2097155 & this.flags);
                      },
                    },
                    isAppend: {
                      get: function () {
                        return 1024 & this.flags;
                      },
                    },
                  }));
                var n = new fe.FSStream();
                for (var o in e) n[o] = e[o];
                e = n;
                var a = fe.nextfd(r, t);
                return (e.fd = a), (fe.streams[a] = e), e;
              },
              closeStream: function (e) {
                fe.streams[e] = null;
              },
              chrdev_stream_ops: {
                open: function (e) {
                  var r = fe.getDevice(e.node.rdev);
                  (e.stream_ops = r.stream_ops),
                    e.stream_ops.open && e.stream_ops.open(e);
                },
                llseek: function () {
                  throw new fe.ErrnoError(70);
                },
              },
              major: function (e) {
                return e >> 8;
              },
              minor: function (e) {
                return 255 & e;
              },
              makedev: function (e, r) {
                return (e << 8) | r;
              },
              registerDevice: function (e, r) {
                fe.devices[e] = { stream_ops: r };
              },
              getDevice: function (e) {
                return fe.devices[e];
              },
              getMounts: function (e) {
                for (var r = [], t = [e]; t.length; ) {
                  var n = t.pop();
                  r.push(n), t.push.apply(t, n.mounts);
                }
                return r;
              },
              syncfs: function (e, r) {
                'function' == typeof e && ((r = e), (e = !1)),
                  fe.syncFSRequests++,
                  fe.syncFSRequests > 1 &&
                    d(
                      'warning: ' +
                        fe.syncFSRequests +
                        ' FS.syncfs operations in flight at once, probably just doing extra work',
                    );
                var t = fe.getMounts(fe.root.mount),
                  n = 0;
                function o(e) {
                  return fe.syncFSRequests--, r(e);
                }
                function a(e) {
                  if (e) return a.errored ? void 0 : ((a.errored = !0), o(e));
                  ++n >= t.length && o(null);
                }
                t.forEach(function (r) {
                  if (!r.type.syncfs) return a(null);
                  r.type.syncfs(r, e, a);
                });
              },
              mount: function (e, r, t) {
                var n,
                  o = '/' === t,
                  a = !t;
                if (o && fe.root) throw new fe.ErrnoError(10);
                if (!o && !a) {
                  var i = fe.lookupPath(t, { follow_mount: !1 });
                  if (((t = i.path), (n = i.node), fe.isMountpoint(n)))
                    throw new fe.ErrnoError(10);
                  if (!fe.isDir(n.mode)) throw new fe.ErrnoError(54);
                }
                var s = { type: e, opts: r, mountpoint: t, mounts: [] },
                  u = e.mount(s);
                return (
                  (u.mount = s),
                  (s.root = u),
                  o
                    ? (fe.root = u)
                    : n && ((n.mounted = s), n.mount && n.mount.mounts.push(s)),
                  u
                );
              },
              unmount: function (e) {
                var r = fe.lookupPath(e, { follow_mount: !1 });
                if (!fe.isMountpoint(r.node)) throw new fe.ErrnoError(28);
                var t = r.node,
                  n = t.mounted,
                  o = fe.getMounts(n);
                Object.keys(fe.nameTable).forEach(function (e) {
                  for (var r = fe.nameTable[e]; r; ) {
                    var t = r.name_next;
                    o.includes(r.mount) && fe.destroyNode(r), (r = t);
                  }
                }),
                  (t.mounted = null);
                var a = t.mount.mounts.indexOf(n);
                t.mount.mounts.splice(a, 1);
              },
              lookup: function (e, r) {
                return e.node_ops.lookup(e, r);
              },
              mknod: function (e, r, t) {
                var n = fe.lookupPath(e, { parent: !0 }).node,
                  o = ie.basename(e);
                if (!o || '.' === o || '..' === o) throw new fe.ErrnoError(28);
                var a = fe.mayCreate(n, o);
                if (a) throw new fe.ErrnoError(a);
                if (!n.node_ops.mknod) throw new fe.ErrnoError(63);
                return n.node_ops.mknod(n, o, r, t);
              },
              create: function (e, r) {
                return (
                  (r = void 0 !== r ? r : 438),
                  (r &= 4095),
                  (r |= 32768),
                  fe.mknod(e, r, 0)
                );
              },
              mkdir: function (e, r) {
                return (
                  (r = void 0 !== r ? r : 511),
                  (r &= 1023),
                  (r |= 16384),
                  fe.mknod(e, r, 0)
                );
              },
              mkdirTree: function (e, r) {
                for (var t = e.split('/'), n = '', o = 0; o < t.length; ++o)
                  if (t[o]) {
                    n += '/' + t[o];
                    try {
                      fe.mkdir(n, r);
                    } catch (e) {
                      if (20 != e.errno) throw e;
                    }
                  }
              },
              mkdev: function (e, r, t) {
                return (
                  void 0 === t && ((t = r), (r = 438)),
                  (r |= 8192),
                  fe.mknod(e, r, t)
                );
              },
              symlink: function (e, r) {
                if (!se.resolve(e)) throw new fe.ErrnoError(44);
                var t = fe.lookupPath(r, { parent: !0 }).node;
                if (!t) throw new fe.ErrnoError(44);
                var n = ie.basename(r),
                  o = fe.mayCreate(t, n);
                if (o) throw new fe.ErrnoError(o);
                if (!t.node_ops.symlink) throw new fe.ErrnoError(63);
                return t.node_ops.symlink(t, n, e);
              },
              rename: function (e, r) {
                var t,
                  n,
                  o = ie.dirname(e),
                  a = ie.dirname(r),
                  i = ie.basename(e),
                  s = ie.basename(r);
                if (
                  ((t = fe.lookupPath(e, { parent: !0 }).node),
                  (n = fe.lookupPath(r, { parent: !0 }).node),
                  !t || !n)
                )
                  throw new fe.ErrnoError(44);
                if (t.mount !== n.mount) throw new fe.ErrnoError(75);
                var u,
                  l = fe.lookupNode(t, i),
                  c = se.relative(e, a);
                if ('.' !== c.charAt(0)) throw new fe.ErrnoError(28);
                if ('.' !== (c = se.relative(r, o)).charAt(0))
                  throw new fe.ErrnoError(55);
                try {
                  u = fe.lookupNode(n, s);
                } catch (e) {}
                if (l !== u) {
                  var f = fe.isDir(l.mode),
                    d = fe.mayDelete(t, i, f);
                  if (d) throw new fe.ErrnoError(d);
                  if ((d = u ? fe.mayDelete(n, s, f) : fe.mayCreate(n, s)))
                    throw new fe.ErrnoError(d);
                  if (!t.node_ops.rename) throw new fe.ErrnoError(63);
                  if (fe.isMountpoint(l) || (u && fe.isMountpoint(u)))
                    throw new fe.ErrnoError(10);
                  if (n !== t && (d = fe.nodePermissions(t, 'w')))
                    throw new fe.ErrnoError(d);
                  fe.hashRemoveNode(l);
                  try {
                    t.node_ops.rename(l, n, s);
                  } catch (e) {
                    throw e;
                  } finally {
                    fe.hashAddNode(l);
                  }
                }
              },
              rmdir: function (e) {
                var r = fe.lookupPath(e, { parent: !0 }).node,
                  t = ie.basename(e),
                  n = fe.lookupNode(r, t),
                  o = fe.mayDelete(r, t, !0);
                if (o) throw new fe.ErrnoError(o);
                if (!r.node_ops.rmdir) throw new fe.ErrnoError(63);
                if (fe.isMountpoint(n)) throw new fe.ErrnoError(10);
                r.node_ops.rmdir(r, t), fe.destroyNode(n);
              },
              readdir: function (e) {
                var r = fe.lookupPath(e, { follow: !0 }).node;
                if (!r.node_ops.readdir) throw new fe.ErrnoError(54);
                return r.node_ops.readdir(r);
              },
              unlink: function (e) {
                var r = fe.lookupPath(e, { parent: !0 }).node,
                  t = ie.basename(e),
                  n = fe.lookupNode(r, t),
                  o = fe.mayDelete(r, t, !1);
                if (o) throw new fe.ErrnoError(o);
                if (!r.node_ops.unlink) throw new fe.ErrnoError(63);
                if (fe.isMountpoint(n)) throw new fe.ErrnoError(10);
                r.node_ops.unlink(r, t), fe.destroyNode(n);
              },
              readlink: function (e) {
                var r = fe.lookupPath(e).node;
                if (!r) throw new fe.ErrnoError(44);
                if (!r.node_ops.readlink) throw new fe.ErrnoError(28);
                return se.resolve(fe.getPath(r.parent), r.node_ops.readlink(r));
              },
              stat: function (e, r) {
                var t = fe.lookupPath(e, { follow: !r }).node;
                if (!t) throw new fe.ErrnoError(44);
                if (!t.node_ops.getattr) throw new fe.ErrnoError(63);
                return t.node_ops.getattr(t);
              },
              lstat: function (e) {
                return fe.stat(e, !0);
              },
              chmod: function (e, r, t) {
                var n;
                if (
                  !(n =
                    'string' == typeof e
                      ? fe.lookupPath(e, { follow: !t }).node
                      : e).node_ops.setattr
                )
                  throw new fe.ErrnoError(63);
                n.node_ops.setattr(n, {
                  mode: (4095 & r) | (-4096 & n.mode),
                  timestamp: Date.now(),
                });
              },
              lchmod: function (e, r) {
                fe.chmod(e, r, !0);
              },
              fchmod: function (e, r) {
                var t = fe.getStream(e);
                if (!t) throw new fe.ErrnoError(8);
                fe.chmod(t.node, r);
              },
              chown: function (e, r, t, n) {
                var o;
                if (
                  !(o =
                    'string' == typeof e
                      ? fe.lookupPath(e, { follow: !n }).node
                      : e).node_ops.setattr
                )
                  throw new fe.ErrnoError(63);
                o.node_ops.setattr(o, { timestamp: Date.now() });
              },
              lchown: function (e, r, t) {
                fe.chown(e, r, t, !0);
              },
              fchown: function (e, r, t) {
                var n = fe.getStream(e);
                if (!n) throw new fe.ErrnoError(8);
                fe.chown(n.node, r, t);
              },
              truncate: function (e, r) {
                if (r < 0) throw new fe.ErrnoError(28);
                var t;
                if (
                  !(t =
                    'string' == typeof e
                      ? fe.lookupPath(e, { follow: !0 }).node
                      : e).node_ops.setattr
                )
                  throw new fe.ErrnoError(63);
                if (fe.isDir(t.mode)) throw new fe.ErrnoError(31);
                if (!fe.isFile(t.mode)) throw new fe.ErrnoError(28);
                var n = fe.nodePermissions(t, 'w');
                if (n) throw new fe.ErrnoError(n);
                t.node_ops.setattr(t, { size: r, timestamp: Date.now() });
              },
              ftruncate: function (e, r) {
                var t = fe.getStream(e);
                if (!t) throw new fe.ErrnoError(8);
                if (0 == (2097155 & t.flags)) throw new fe.ErrnoError(28);
                fe.truncate(t.node, r);
              },
              utime: function (e, r, t) {
                var n = fe.lookupPath(e, { follow: !0 }).node;
                n.node_ops.setattr(n, { timestamp: Math.max(r, t) });
              },
              open: function (e, r, t, o, a) {
                if ('' === e) throw new fe.ErrnoError(44);
                var i;
                if (
                  ((t = void 0 === t ? 438 : t),
                  (t =
                    64 &
                    (r = 'string' == typeof r ? fe.modeStringToFlags(r) : r)
                      ? (4095 & t) | 32768
                      : 0),
                  'object' == typeof e)
                )
                  i = e;
                else {
                  e = ie.normalize(e);
                  try {
                    i = fe.lookupPath(e, { follow: !(131072 & r) }).node;
                  } catch (e) {}
                }
                var s = !1;
                if (64 & r)
                  if (i) {
                    if (128 & r) throw new fe.ErrnoError(20);
                  } else (i = fe.mknod(e, t, 0)), (s = !0);
                if (!i) throw new fe.ErrnoError(44);
                if (
                  (fe.isChrdev(i.mode) && (r &= -513),
                  65536 & r && !fe.isDir(i.mode))
                )
                  throw new fe.ErrnoError(54);
                if (!s) {
                  var u = fe.mayOpen(i, r);
                  if (u) throw new fe.ErrnoError(u);
                }
                512 & r && fe.truncate(i, 0), (r &= -131713);
                var l = fe.createStream(
                  {
                    node: i,
                    path: fe.getPath(i),
                    flags: r,
                    seekable: !0,
                    position: 0,
                    stream_ops: i.stream_ops,
                    ungotten: [],
                    error: !1,
                  },
                  o,
                  a,
                );
                return (
                  l.stream_ops.open && l.stream_ops.open(l),
                  !n.logReadFiles ||
                    1 & r ||
                    (fe.readFiles || (fe.readFiles = {}),
                    e in fe.readFiles || (fe.readFiles[e] = 1)),
                  l
                );
              },
              close: function (e) {
                if (fe.isClosed(e)) throw new fe.ErrnoError(8);
                e.getdents && (e.getdents = null);
                try {
                  e.stream_ops.close && e.stream_ops.close(e);
                } catch (e) {
                  throw e;
                } finally {
                  fe.closeStream(e.fd);
                }
                e.fd = null;
              },
              isClosed: function (e) {
                return null === e.fd;
              },
              llseek: function (e, r, t) {
                if (fe.isClosed(e)) throw new fe.ErrnoError(8);
                if (!e.seekable || !e.stream_ops.llseek)
                  throw new fe.ErrnoError(70);
                if (0 != t && 1 != t && 2 != t) throw new fe.ErrnoError(28);
                return (
                  (e.position = e.stream_ops.llseek(e, r, t)),
                  (e.ungotten = []),
                  e.position
                );
              },
              read: function (e, r, t, n, o) {
                if (n < 0 || o < 0) throw new fe.ErrnoError(28);
                if (fe.isClosed(e)) throw new fe.ErrnoError(8);
                if (1 == (2097155 & e.flags)) throw new fe.ErrnoError(8);
                if (fe.isDir(e.node.mode)) throw new fe.ErrnoError(31);
                if (!e.stream_ops.read) throw new fe.ErrnoError(28);
                var a = void 0 !== o;
                if (a) {
                  if (!e.seekable) throw new fe.ErrnoError(70);
                } else o = e.position;
                var i = e.stream_ops.read(e, r, t, n, o);
                return a || (e.position += i), i;
              },
              write: function (e, r, t, n, o, a) {
                if (n < 0 || o < 0) throw new fe.ErrnoError(28);
                if (fe.isClosed(e)) throw new fe.ErrnoError(8);
                if (0 == (2097155 & e.flags)) throw new fe.ErrnoError(8);
                if (fe.isDir(e.node.mode)) throw new fe.ErrnoError(31);
                if (!e.stream_ops.write) throw new fe.ErrnoError(28);
                e.seekable && 1024 & e.flags && fe.llseek(e, 0, 2);
                var i = void 0 !== o;
                if (i) {
                  if (!e.seekable) throw new fe.ErrnoError(70);
                } else o = e.position;
                var s = e.stream_ops.write(e, r, t, n, o, a);
                return i || (e.position += s), s;
              },
              allocate: function (e, r, t) {
                if (fe.isClosed(e)) throw new fe.ErrnoError(8);
                if (r < 0 || t <= 0) throw new fe.ErrnoError(28);
                if (0 == (2097155 & e.flags)) throw new fe.ErrnoError(8);
                if (!fe.isFile(e.node.mode) && !fe.isDir(e.node.mode))
                  throw new fe.ErrnoError(43);
                if (!e.stream_ops.allocate) throw new fe.ErrnoError(138);
                e.stream_ops.allocate(e, r, t);
              },
              mmap: function (e, r, t, n, o, a) {
                if (0 != (2 & o) && 0 == (2 & a) && 2 != (2097155 & e.flags))
                  throw new fe.ErrnoError(2);
                if (1 == (2097155 & e.flags)) throw new fe.ErrnoError(2);
                if (!e.stream_ops.mmap) throw new fe.ErrnoError(43);
                return e.stream_ops.mmap(e, r, t, n, o, a);
              },
              msync: function (e, r, t, n, o) {
                return e && e.stream_ops.msync
                  ? e.stream_ops.msync(e, r, t, n, o)
                  : 0;
              },
              munmap: function (e) {
                return 0;
              },
              ioctl: function (e, r, t) {
                if (!e.stream_ops.ioctl) throw new fe.ErrnoError(59);
                return e.stream_ops.ioctl(e, r, t);
              },
              readFile: function (e, r) {
                if (
                  (((r = r || {}).flags = r.flags || 0),
                  (r.encoding = r.encoding || 'binary'),
                  'utf8' !== r.encoding && 'binary' !== r.encoding)
                )
                  throw new Error('Invalid encoding type "' + r.encoding + '"');
                var t,
                  n = fe.open(e, r.flags),
                  o = fe.stat(e).size,
                  a = new Uint8Array(o);
                return (
                  fe.read(n, a, 0, o, 0),
                  'utf8' === r.encoding
                    ? (t = v(a, 0))
                    : 'binary' === r.encoding && (t = a),
                  fe.close(n),
                  t
                );
              },
              writeFile: function (e, r, t) {
                (t = t || {}).flags = t.flags || 577;
                var n = fe.open(e, t.flags, t.mode);
                if ('string' == typeof r) {
                  var o = new Uint8Array(C(r) + 1),
                    a = k(r, o, 0, o.length);
                  fe.write(n, o, 0, a, void 0, t.canOwn);
                } else {
                  if (!ArrayBuffer.isView(r))
                    throw new Error('Unsupported data type');
                  fe.write(n, r, 0, r.byteLength, void 0, t.canOwn);
                }
                fe.close(n);
              },
              cwd: function () {
                return fe.currentPath;
              },
              chdir: function (e) {
                var r = fe.lookupPath(e, { follow: !0 });
                if (null === r.node) throw new fe.ErrnoError(44);
                if (!fe.isDir(r.node.mode)) throw new fe.ErrnoError(54);
                var t = fe.nodePermissions(r.node, 'x');
                if (t) throw new fe.ErrnoError(t);
                fe.currentPath = r.path;
              },
              createDefaultDirectories: function () {
                fe.mkdir('/tmp'), fe.mkdir('/home'), fe.mkdir('/home/web_user');
              },
              createDefaultDevices: function () {
                fe.mkdir('/dev'),
                  fe.registerDevice(fe.makedev(1, 3), {
                    read: function () {
                      return 0;
                    },
                    write: function (e, r, t, n, o) {
                      return n;
                    },
                  }),
                  fe.mkdev('/dev/null', fe.makedev(1, 3)),
                  ue.register(fe.makedev(5, 0), ue.default_tty_ops),
                  ue.register(fe.makedev(6, 0), ue.default_tty1_ops),
                  fe.mkdev('/dev/tty', fe.makedev(5, 0)),
                  fe.mkdev('/dev/tty1', fe.makedev(6, 0));
                var e = (function () {
                  if (
                    'object' == typeof crypto &&
                    'function' == typeof crypto.getRandomValues
                  ) {
                    var e = new Uint8Array(1);
                    return function () {
                      return crypto.getRandomValues(e), e[0];
                    };
                  }
                  return function () {
                    re('randomDevice');
                  };
                })();
                fe.createDevice('/dev', 'random', e),
                  fe.createDevice('/dev', 'urandom', e),
                  fe.mkdir('/dev/shm'),
                  fe.mkdir('/dev/shm/tmp');
              },
              createSpecialDirectories: function () {
                fe.mkdir('/proc');
                var e = fe.mkdir('/proc/self');
                fe.mkdir('/proc/self/fd'),
                  fe.mount(
                    {
                      mount: function () {
                        var r = fe.createNode(e, 'fd', 16895, 73);
                        return (
                          (r.node_ops = {
                            lookup: function (e, r) {
                              var t = +r,
                                n = fe.getStream(t);
                              if (!n) throw new fe.ErrnoError(8);
                              var o = {
                                parent: null,
                                mount: { mountpoint: 'fake' },
                                node_ops: {
                                  readlink: function () {
                                    return n.path;
                                  },
                                },
                              };
                              return (o.parent = o), o;
                            },
                          }),
                          r
                        );
                      },
                    },
                    {},
                    '/proc/self/fd',
                  );
              },
              createStandardStreams: function () {
                n.stdin
                  ? fe.createDevice('/dev', 'stdin', n.stdin)
                  : fe.symlink('/dev/tty', '/dev/stdin'),
                  n.stdout
                    ? fe.createDevice('/dev', 'stdout', null, n.stdout)
                    : fe.symlink('/dev/tty', '/dev/stdout'),
                  n.stderr
                    ? fe.createDevice('/dev', 'stderr', null, n.stderr)
                    : fe.symlink('/dev/tty1', '/dev/stderr'),
                  fe.open('/dev/stdin', 0),
                  fe.open('/dev/stdout', 1),
                  fe.open('/dev/stderr', 1);
              },
              ensureErrnoError: function () {
                fe.ErrnoError ||
                  ((fe.ErrnoError = function (e, r) {
                    (this.node = r),
                      (this.setErrno = function (e) {
                        this.errno = e;
                      }),
                      this.setErrno(e),
                      (this.message = 'FS error');
                  }),
                  (fe.ErrnoError.prototype = new Error()),
                  (fe.ErrnoError.prototype.constructor = fe.ErrnoError),
                  [44].forEach(function (e) {
                    (fe.genericErrors[e] = new fe.ErrnoError(e)),
                      (fe.genericErrors[e].stack = '<generic error, no stack>');
                  }));
              },
              staticInit: function () {
                fe.ensureErrnoError(),
                  (fe.nameTable = new Array(4096)),
                  fe.mount(le, {}, '/'),
                  fe.createDefaultDirectories(),
                  fe.createDefaultDevices(),
                  fe.createSpecialDirectories(),
                  (fe.filesystems = { MEMFS: le });
              },
              init: function (e, r, t) {
                (fe.init.initialized = !0),
                  fe.ensureErrnoError(),
                  (n.stdin = e || n.stdin),
                  (n.stdout = r || n.stdout),
                  (n.stderr = t || n.stderr),
                  fe.createStandardStreams();
              },
              quit: function () {
                fe.init.initialized = !1;
                var e = n._fflush;
                e && e(0);
                for (var r = 0; r < fe.streams.length; r++) {
                  var t = fe.streams[r];
                  t && fe.close(t);
                }
              },
              getMode: function (e, r) {
                var t = 0;
                return e && (t |= 365), r && (t |= 146), t;
              },
              findObject: function (e, r) {
                var t = fe.analyzePath(e, r);
                return t.exists ? t.object : null;
              },
              analyzePath: function (e, r) {
                try {
                  e = (n = fe.lookupPath(e, { follow: !r })).path;
                } catch (e) {}
                var t = {
                  isRoot: !1,
                  exists: !1,
                  error: 0,
                  name: null,
                  path: null,
                  object: null,
                  parentExists: !1,
                  parentPath: null,
                  parentObject: null,
                };
                try {
                  var n = fe.lookupPath(e, { parent: !0 });
                  (t.parentExists = !0),
                    (t.parentPath = n.path),
                    (t.parentObject = n.node),
                    (t.name = ie.basename(e)),
                    (n = fe.lookupPath(e, { follow: !r })),
                    (t.exists = !0),
                    (t.path = n.path),
                    (t.object = n.node),
                    (t.name = n.node.name),
                    (t.isRoot = '/' === n.path);
                } catch (e) {
                  t.error = e.errno;
                }
                return t;
              },
              createPath: function (e, r, t, n) {
                e = 'string' == typeof e ? e : fe.getPath(e);
                for (var o = r.split('/').reverse(); o.length; ) {
                  var a = o.pop();
                  if (a) {
                    var i = ie.join2(e, a);
                    try {
                      fe.mkdir(i);
                    } catch (e) {}
                    e = i;
                  }
                }
                return i;
              },
              createFile: function (e, r, t, n, o) {
                var a = ie.join2('string' == typeof e ? e : fe.getPath(e), r),
                  i = fe.getMode(n, o);
                return fe.create(a, i);
              },
              createDataFile: function (e, r, t, n, o, a) {
                var i = r
                    ? ie.join2('string' == typeof e ? e : fe.getPath(e), r)
                    : e,
                  s = fe.getMode(n, o),
                  u = fe.create(i, s);
                if (t) {
                  if ('string' == typeof t) {
                    for (
                      var l = new Array(t.length), c = 0, f = t.length;
                      c < f;
                      ++c
                    )
                      l[c] = t.charCodeAt(c);
                    t = l;
                  }
                  fe.chmod(u, 146 | s);
                  var d = fe.open(u, 577);
                  fe.write(d, t, 0, t.length, 0, a),
                    fe.close(d),
                    fe.chmod(u, s);
                }
                return u;
              },
              createDevice: function (e, r, t, n) {
                var o = ie.join2('string' == typeof e ? e : fe.getPath(e), r),
                  a = fe.getMode(!!t, !!n);
                fe.createDevice.major || (fe.createDevice.major = 64);
                var i = fe.makedev(fe.createDevice.major++, 0);
                return (
                  fe.registerDevice(i, {
                    open: function (e) {
                      e.seekable = !1;
                    },
                    close: function (e) {
                      n && n.buffer && n.buffer.length && n(10);
                    },
                    read: function (e, r, n, o, a) {
                      for (var i = 0, s = 0; s < o; s++) {
                        var u;
                        try {
                          u = t();
                        } catch (e) {
                          throw new fe.ErrnoError(29);
                        }
                        if (void 0 === u && 0 === i) throw new fe.ErrnoError(6);
                        if (null == u) break;
                        i++, (r[n + s] = u);
                      }
                      return i && (e.node.timestamp = Date.now()), i;
                    },
                    write: function (e, r, t, o, a) {
                      for (var i = 0; i < o; i++)
                        try {
                          n(r[t + i]);
                        } catch (e) {
                          throw new fe.ErrnoError(29);
                        }
                      return o && (e.node.timestamp = Date.now()), i;
                    },
                  }),
                  fe.mkdev(o, a, i)
                );
              },
              forceLoadFile: function (e) {
                if (e.isDevice || e.isFolder || e.link || e.contents) return !0;
                if ('undefined' != typeof XMLHttpRequest)
                  throw new Error(
                    'Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.',
                  );
                if (!s)
                  throw new Error(
                    'Cannot load without read() or XMLHttpRequest.',
                  );
                try {
                  (e.contents = mr(s(e.url), !0)),
                    (e.usedBytes = e.contents.length);
                } catch (e) {
                  throw new fe.ErrnoError(29);
                }
              },
              createLazyFile: function (e, r, t, n, o) {
                function a() {
                  (this.lengthKnown = !1), (this.chunks = []);
                }
                if (
                  ((a.prototype.get = function (e) {
                    if (!(e > this.length - 1 || e < 0)) {
                      var r = e % this.chunkSize,
                        t = (e / this.chunkSize) | 0;
                      return this.getter(t)[r];
                    }
                  }),
                  (a.prototype.setDataGetter = function (e) {
                    this.getter = e;
                  }),
                  (a.prototype.cacheLength = function () {
                    var e = new XMLHttpRequest();
                    if (
                      (e.open('HEAD', t, !1),
                      e.send(null),
                      !(
                        (e.status >= 200 && e.status < 300) ||
                        304 === e.status
                      ))
                    )
                      throw new Error(
                        "Couldn't load " + t + '. Status: ' + e.status,
                      );
                    var r,
                      n = Number(e.getResponseHeader('Content-length')),
                      o =
                        (r = e.getResponseHeader('Accept-Ranges')) &&
                        'bytes' === r,
                      a =
                        (r = e.getResponseHeader('Content-Encoding')) &&
                        'gzip' === r,
                      i = 1048576;
                    o || (i = n);
                    var s = function (e, r) {
                        if (e > r)
                          throw new Error(
                            'invalid range (' +
                              e +
                              ', ' +
                              r +
                              ') or no bytes requested!',
                          );
                        if (r > n - 1)
                          throw new Error(
                            'only ' + n + ' bytes available! programmer error!',
                          );
                        var o = new XMLHttpRequest();
                        if (
                          (o.open('GET', t, !1),
                          n !== i &&
                            o.setRequestHeader('Range', 'bytes=' + e + '-' + r),
                          'undefined' != typeof Uint8Array &&
                            (o.responseType = 'arraybuffer'),
                          o.overrideMimeType &&
                            o.overrideMimeType(
                              'text/plain; charset=x-user-defined',
                            ),
                          o.send(null),
                          !(
                            (o.status >= 200 && o.status < 300) ||
                            304 === o.status
                          ))
                        )
                          throw new Error(
                            "Couldn't load " + t + '. Status: ' + o.status,
                          );
                        return void 0 !== o.response
                          ? new Uint8Array(o.response || [])
                          : mr(o.responseText || '', !0);
                      },
                      u = this;
                    u.setDataGetter(function (e) {
                      var r = e * i,
                        t = (e + 1) * i - 1;
                      if (
                        ((t = Math.min(t, n - 1)),
                        void 0 === u.chunks[e] && (u.chunks[e] = s(r, t)),
                        void 0 === u.chunks[e])
                      )
                        throw new Error('doXHR failed!');
                      return u.chunks[e];
                    }),
                      (!a && n) ||
                        ((i = n = 1),
                        (n = this.getter(0).length),
                        (i = n),
                        f(
                          'LazyFiles on gzip forces download of the whole file when length is accessed',
                        )),
                      (this._length = n),
                      (this._chunkSize = i),
                      (this.lengthKnown = !0);
                  }),
                  'undefined' != typeof XMLHttpRequest)
                )
                  throw 'Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc';
                var i = { isDevice: !1, url: t },
                  s = fe.createFile(e, r, i, n, o);
                i.contents
                  ? (s.contents = i.contents)
                  : i.url && ((s.contents = null), (s.url = i.url)),
                  Object.defineProperties(s, {
                    usedBytes: {
                      get: function () {
                        return this.contents.length;
                      },
                    },
                  });
                var u = {};
                return (
                  Object.keys(s.stream_ops).forEach(function (e) {
                    var r = s.stream_ops[e];
                    u[e] = function () {
                      return fe.forceLoadFile(s), r.apply(null, arguments);
                    };
                  }),
                  (u.read = function (e, r, t, n, o) {
                    fe.forceLoadFile(s);
                    var a = e.node.contents;
                    if (o >= a.length) return 0;
                    var i = Math.min(a.length - o, n);
                    if (a.slice)
                      for (var u = 0; u < i; u++) r[t + u] = a[o + u];
                    else for (u = 0; u < i; u++) r[t + u] = a.get(o + u);
                    return i;
                  }),
                  (s.stream_ops = u),
                  s
                );
              },
              createPreloadedFile: function (e, r, t, o, a, i, s, u, l, c) {
                Browser.init();
                var f = r ? se.resolve(ie.join2(e, r)) : e;
                function d(t) {
                  function d(t) {
                    c && c(),
                      u || fe.createDataFile(e, r, t, o, a, l),
                      i && i(),
                      ee();
                  }
                  var E = !1;
                  n.preloadPlugins.forEach(function (e) {
                    E ||
                      (e.canHandle(f) &&
                        (e.handle(t, f, d, function () {
                          s && s(), ee();
                        }),
                        (E = !0)));
                  }),
                    E || d(t);
                }
                $(),
                  'string' == typeof t
                    ? ce(
                        t,
                        function (e) {
                          d(e);
                        },
                        s,
                      )
                    : d(t);
              },
              indexedDB: function () {
                return (
                  window.indexedDB ||
                  window.mozIndexedDB ||
                  window.webkitIndexedDB ||
                  window.msIndexedDB
                );
              },
              DB_NAME: function () {
                return 'EM_FS_' + window.location.pathname;
              },
              DB_VERSION: 20,
              DB_STORE_NAME: 'FILE_DATA',
              saveFilesToDB: function (e, r, t) {
                (r = r || function () {}), (t = t || function () {});
                var n = fe.indexedDB();
                try {
                  var o = n.open(fe.DB_NAME(), fe.DB_VERSION);
                } catch (e) {
                  return t(e);
                }
                (o.onupgradeneeded = function () {
                  f('creating db'),
                    o.result.createObjectStore(fe.DB_STORE_NAME);
                }),
                  (o.onsuccess = function () {
                    var n = o.result.transaction(
                        [fe.DB_STORE_NAME],
                        'readwrite',
                      ),
                      a = n.objectStore(fe.DB_STORE_NAME),
                      i = 0,
                      s = 0,
                      u = e.length;
                    function l() {
                      0 == s ? r() : t();
                    }
                    e.forEach(function (e) {
                      var r = a.put(fe.analyzePath(e).object.contents, e);
                      (r.onsuccess = function () {
                        ++i + s == u && l();
                      }),
                        (r.onerror = function () {
                          s++, i + s == u && l();
                        });
                    }),
                      (n.onerror = t);
                  }),
                  (o.onerror = t);
              },
              loadFilesFromDB: function (e, r, t) {
                (r = r || function () {}), (t = t || function () {});
                var n = fe.indexedDB();
                try {
                  var o = n.open(fe.DB_NAME(), fe.DB_VERSION);
                } catch (e) {
                  return t(e);
                }
                (o.onupgradeneeded = t),
                  (o.onsuccess = function () {
                    var n = o.result;
                    try {
                      var a = n.transaction([fe.DB_STORE_NAME], 'readonly');
                    } catch (e) {
                      return void t(e);
                    }
                    var i = a.objectStore(fe.DB_STORE_NAME),
                      s = 0,
                      u = 0,
                      l = e.length;
                    function c() {
                      0 == u ? r() : t();
                    }
                    e.forEach(function (e) {
                      var r = i.get(e);
                      (r.onsuccess = function () {
                        fe.analyzePath(e).exists && fe.unlink(e),
                          fe.createDataFile(
                            ie.dirname(e),
                            ie.basename(e),
                            r.result,
                            !0,
                            !0,
                            !0,
                          ),
                          ++s + u == l && c();
                      }),
                        (r.onerror = function () {
                          u++, s + u == l && c();
                        });
                    }),
                      (a.onerror = t);
                  }),
                  (o.onerror = t);
              },
            },
            de = {
              mappings: {},
              DEFAULT_POLLMASK: 5,
              umask: 511,
              calculateAt: function (e, r, t) {
                if ('/' === r[0]) return r;
                var n;
                if (-100 === e) n = fe.cwd();
                else {
                  var o = fe.getStream(e);
                  if (!o) throw new fe.ErrnoError(8);
                  n = o.path;
                }
                if (0 == r.length) {
                  if (!t) throw new fe.ErrnoError(44);
                  return n;
                }
                return ie.join2(n, r);
              },
              doStat: function (e, r, t) {
                try {
                  var n = e(r);
                } catch (e) {
                  if (
                    e &&
                    e.node &&
                    ie.normalize(r) !== ie.normalize(fe.getPath(e.node))
                  )
                    return -54;
                  throw e;
                }
                return (
                  (H[t >> 2] = n.dev),
                  (H[(t + 4) >> 2] = 0),
                  (H[(t + 8) >> 2] = n.ino),
                  (H[(t + 12) >> 2] = n.mode),
                  (H[(t + 16) >> 2] = n.nlink),
                  (H[(t + 20) >> 2] = n.uid),
                  (H[(t + 24) >> 2] = n.gid),
                  (H[(t + 28) >> 2] = n.rdev),
                  (H[(t + 32) >> 2] = 0),
                  (j = [
                    n.size >>> 0,
                    ((J = n.size),
                    +Math.abs(J) >= 1
                      ? J > 0
                        ? (0 |
                            Math.min(
                              +Math.floor(J / 4294967296),
                              4294967295,
                            )) >>>
                          0
                        : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (H[(t + 40) >> 2] = j[0]),
                  (H[(t + 44) >> 2] = j[1]),
                  (H[(t + 48) >> 2] = 4096),
                  (H[(t + 52) >> 2] = n.blocks),
                  (H[(t + 56) >> 2] = (n.atime.getTime() / 1e3) | 0),
                  (H[(t + 60) >> 2] = 0),
                  (H[(t + 64) >> 2] = (n.mtime.getTime() / 1e3) | 0),
                  (H[(t + 68) >> 2] = 0),
                  (H[(t + 72) >> 2] = (n.ctime.getTime() / 1e3) | 0),
                  (H[(t + 76) >> 2] = 0),
                  (j = [
                    n.ino >>> 0,
                    ((J = n.ino),
                    +Math.abs(J) >= 1
                      ? J > 0
                        ? (0 |
                            Math.min(
                              +Math.floor(J / 4294967296),
                              4294967295,
                            )) >>>
                          0
                        : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>> 0
                      : 0),
                  ]),
                  (H[(t + 80) >> 2] = j[0]),
                  (H[(t + 84) >> 2] = j[1]),
                  0
                );
              },
              doMsync: function (e, r, t, n, o) {
                var a = T.slice(e, e + t);
                fe.msync(r, a, o, t, n);
              },
              doMkdir: function (e, r) {
                return (
                  '/' === (e = ie.normalize(e))[e.length - 1] &&
                    (e = e.substr(0, e.length - 1)),
                  fe.mkdir(e, r, 0),
                  0
                );
              },
              doMknod: function (e, r, t) {
                switch (61440 & r) {
                  case 32768:
                  case 8192:
                  case 24576:
                  case 4096:
                  case 49152:
                    break;
                  default:
                    return -28;
                }
                return fe.mknod(e, r, t), 0;
              },
              doReadlink: function (e, r, t) {
                if (t <= 0) return -28;
                var n = fe.readlink(e),
                  o = Math.min(t, C(n)),
                  a = A[r + o];
                return B(n, r, t + 1), (A[r + o] = a), o;
              },
              doAccess: function (e, r) {
                if (-8 & r) return -28;
                var t;
                if (!(t = fe.lookupPath(e, { follow: !0 }).node)) return -44;
                var n = '';
                return (
                  4 & r && (n += 'r'),
                  2 & r && (n += 'w'),
                  1 & r && (n += 'x'),
                  n && fe.nodePermissions(t, n) ? -2 : 0
                );
              },
              doDup: function (e, r, t) {
                var n = fe.getStream(t);
                return n && fe.close(n), fe.open(e, r, 0, t, t).fd;
              },
              doReadv: function (e, r, t, n) {
                for (var o = 0, a = 0; a < t; a++) {
                  var i = H[(r + 8 * a) >> 2],
                    s = H[(r + (8 * a + 4)) >> 2],
                    u = fe.read(e, A, i, s, n);
                  if (u < 0) return -1;
                  if (((o += u), u < s)) break;
                }
                return o;
              },
              doWritev: function (e, r, t, n) {
                for (var o = 0, a = 0; a < t; a++) {
                  var i = H[(r + 8 * a) >> 2],
                    s = H[(r + (8 * a + 4)) >> 2],
                    u = fe.write(e, A, i, s, n);
                  if (u < 0) return -1;
                  o += u;
                }
                return o;
              },
              varargs: void 0,
              get: function () {
                return (de.varargs += 4), H[(de.varargs - 4) >> 2];
              },
              getStr: function (e) {
                return y(e);
              },
              getStreamFromFD: function (e) {
                var r = fe.getStream(e);
                if (!r) throw new fe.ErrnoError(8);
                return r;
              },
              get64: function (e, r) {
                return e;
              },
            },
            Ee = {};
          function pe(e) {
            for (; e.length; ) {
              var r = e.pop();
              e.pop()(r);
            }
          }
          function ge(e) {
            return this.fromWireType(F[e >> 2]);
          }
          var he = {},
            me = {},
            we = {};
          function ve(e, r) {
            return (
              (e = (function (e) {
                if (void 0 === e) return '_unknown';
                var r = (e = e.replace(/[^a-zA-Z0-9_]/g, '$')).charCodeAt(0);
                return r >= 48 && r <= 57 ? '_' + e : e;
              })(e)),
              function () {
                return r.apply(this, arguments);
              }
            );
          }
          function ye(e, r) {
            var t = ve(r, function (e) {
              (this.name = r), (this.message = e);
              var t = new Error(e).stack;
              void 0 !== t &&
                (this.stack =
                  this.toString() + '\n' + t.replace(/^Error(:[^\n]*)?\n/, ''));
            });
            return (
              (t.prototype = Object.create(e.prototype)),
              (t.prototype.constructor = t),
              (t.prototype.toString = function () {
                return void 0 === this.message
                  ? this.name
                  : this.name + ': ' + this.message;
              }),
              t
            );
          }
          var ke = void 0;
          function Be(e) {
            throw new ke(e);
          }
          function Ce(e, r, t) {
            function n(r) {
              var n = t(r);
              n.length !== e.length && Be('Mismatched type converter count');
              for (var o = 0; o < e.length; ++o) He(e[o], n[o]);
            }
            e.forEach(function (e) {
              we[e] = r;
            });
            var o = new Array(r.length),
              a = [],
              i = 0;
            r.forEach(function (e, r) {
              me.hasOwnProperty(e)
                ? (o[r] = me[e])
                : (a.push(e),
                  he.hasOwnProperty(e) || (he[e] = []),
                  he[e].push(function () {
                    (o[r] = me[e]), ++i === a.length && n(o);
                  }));
            }),
              0 === a.length && n(o);
          }
          function Qe(e) {
            switch (e) {
              case 1:
                return 0;
              case 2:
                return 1;
              case 4:
                return 2;
              case 8:
                return 3;
              default:
                throw new TypeError('Unknown type size: ' + e);
            }
          }
          var Ae = void 0;
          function Te(e) {
            for (var r = '', t = e; T[t]; ) r += Ae[T[t++]];
            return r;
          }
          var Re = void 0;
          function xe(e) {
            throw new Re(e);
          }
          function He(e, r, t) {
            if (((t = t || {}), !('argPackAdvance' in r)))
              throw new TypeError(
                'registerType registeredInstance requires argPackAdvance',
              );
            var n = r.name;
            if (
              (e ||
                xe(
                  'type "' +
                    n +
                    '" must have a positive integer typeid pointer',
                ),
              me.hasOwnProperty(e))
            ) {
              if (t.ignoreDuplicateRegistrations) return;
              xe("Cannot register type '" + n + "' twice");
            }
            if (((me[e] = r), delete we[e], he.hasOwnProperty(e))) {
              var o = he[e];
              delete he[e],
                o.forEach(function (e) {
                  e();
                });
            }
          }
          var Fe = [],
            Ue = [
              {},
              { value: void 0 },
              { value: null },
              { value: !0 },
              { value: !1 },
            ];
          function We(e) {
            e > 4 && 0 == --Ue[e].refcount && ((Ue[e] = void 0), Fe.push(e));
          }
          function Se(e) {
            switch (e) {
              case void 0:
                return 1;
              case null:
                return 2;
              case !0:
                return 3;
              case !1:
                return 4;
              default:
                var r = Fe.length ? Fe.pop() : Ue.length;
                return (Ue[r] = { refcount: 1, value: e }), r;
            }
          }
          function De(e, r, t) {
            n.hasOwnProperty(e)
              ? ((void 0 === t ||
                  (void 0 !== n[e].overloadTable &&
                    void 0 !== n[e].overloadTable[t])) &&
                  xe("Cannot register public name '" + e + "' twice"),
                (function (e, r, t) {
                  if (void 0 === e[r].overloadTable) {
                    var n = e[r];
                    (e[r] = function () {
                      return (
                        e[r].overloadTable.hasOwnProperty(arguments.length) ||
                          xe(
                            "Function '" +
                              t +
                              "' called with an invalid number of arguments (" +
                              arguments.length +
                              ') - expects one of (' +
                              e[r].overloadTable +
                              ')!',
                          ),
                        e[r].overloadTable[arguments.length].apply(
                          this,
                          arguments,
                        )
                      );
                    }),
                      (e[r].overloadTable = []),
                      (e[r].overloadTable[n.argCount] = n);
                  }
                })(n, e, e),
                n.hasOwnProperty(t) &&
                  xe(
                    'Cannot register multiple overloads of a function with the same number of arguments (' +
                      t +
                      ')!',
                  ),
                (n[e].overloadTable[t] = r))
              : ((n[e] = r), void 0 !== t && (n[e].numArguments = t));
          }
          function qe(e, r, t) {
            switch (r) {
              case 0:
                return function (e) {
                  var r = t ? A : T;
                  return this.fromWireType(r[e]);
                };
              case 1:
                return function (e) {
                  var r = t ? R : x;
                  return this.fromWireType(r[e >> 1]);
                };
              case 2:
                return function (e) {
                  var r = t ? H : F;
                  return this.fromWireType(r[e >> 2]);
                };
              default:
                throw new TypeError('Unknown integer type: ' + e);
            }
          }
          function be(e) {
            var r = Br(e),
              t = Te(r);
            return yr(r), t;
          }
          function Oe(e, r) {
            var t = me[e];
            return void 0 === t && xe(r + ' has unknown type ' + be(e)), t;
          }
          function Pe(e) {
            if (null === e) return 'null';
            var r = typeof e;
            return 'object' === r || 'array' === r || 'function' === r
              ? e.toString()
              : '' + e;
          }
          function Le(e, r) {
            switch (r) {
              case 2:
                return function (e) {
                  return this.fromWireType(U[e >> 2]);
                };
              case 3:
                return function (e) {
                  return this.fromWireType(W[e >> 3]);
                };
              default:
                throw new TypeError('Unknown float type: ' + e);
            }
          }
          function Ne(e, r, t) {
            n.hasOwnProperty(e) || Be('Replacing nonexistant public symbol'),
              void 0 !== n[e].overloadTable && void 0 !== t
                ? (n[e].overloadTable[t] = r)
                : ((n[e] = r), (n[e].argCount = t));
          }
          function Ve(e, r, t) {
            return e.includes('j')
              ? (function (e, r, t) {
                  var o = n['dynCall_' + e];
                  return t && t.length
                    ? o.apply(null, [r].concat(t))
                    : o.call(null, r);
                })(e, r, t)
              : S.get(r).apply(null, t);
          }
          function Ie(e, r) {
            var t = (e = Te(e)).includes('j')
              ? (function (e, r) {
                  var t = [];
                  return function () {
                    t.length = arguments.length;
                    for (var n = 0; n < arguments.length; n++)
                      t[n] = arguments[n];
                    return Ve(e, r, t);
                  };
                })(e, r)
              : S.get(r);
            return (
              'function' != typeof t &&
                xe('unknown function pointer with signature ' + e + ': ' + r),
              t
            );
          }
          var Ze = void 0;
          function Me(e, r, t) {
            switch (r) {
              case 0:
                return t
                  ? function (e) {
                      return A[e];
                    }
                  : function (e) {
                      return T[e];
                    };
              case 1:
                return t
                  ? function (e) {
                      return R[e >> 1];
                    }
                  : function (e) {
                      return x[e >> 1];
                    };
              case 2:
                return t
                  ? function (e) {
                      return H[e >> 2];
                    }
                  : function (e) {
                      return F[e >> 2];
                    };
              default:
                throw new TypeError('Unknown integer type: ' + e);
            }
          }
          var Ye = {};
          function Ge(e) {
            return (
              e || xe('Cannot use deleted val. handle = ' + e), Ue[e].value
            );
          }
          function Ke(e) {
            try {
              return g.grow((e - Q.byteLength + 65535) >>> 16), I(g.buffer), 1;
            } catch (e) {}
          }
          var Xe = {
              counter: 1,
              buffers: [],
              programs: [],
              framebuffers: [],
              renderbuffers: [],
              textures: [],
              shaders: [],
              vaos: [],
              contexts: [],
              offscreenCanvases: {},
              queries: [],
              samplers: [],
              transformFeedbacks: [],
              syncs: [],
              stringCache: {},
              stringiCache: {},
              unpackAlignment: 4,
              recordError: function (e) {
                Xe.lastError || (Xe.lastError = e);
              },
              getNewId: function (e) {
                for (var r = Xe.counter++, t = e.length; t < r; t++)
                  e[t] = null;
                return r;
              },
              getSource: function (e, r, t, n) {
                for (var o = '', a = 0; a < r; ++a) {
                  var i = n ? H[(n + 4 * a) >> 2] : -1;
                  o += y(H[(t + 4 * a) >> 2], i < 0 ? void 0 : i);
                }
                return o;
              },
              createContext: function (e, r) {
                if (n.preinitializedWebGLContext) {
                  var t = n.preinitializedWebGLContext;
                  r.majorVersion =
                    'undefined' != typeof WebGL2RenderingContext &&
                    t instanceof WebGL2RenderingContext
                      ? 2
                      : 1;
                } else
                  e.getContextSafariWebGL2Fixed ||
                    ((e.getContextSafariWebGL2Fixed = e.getContext),
                    (e.getContext = function (r, t) {
                      var n = e.getContextSafariWebGL2Fixed(r, t);
                      return ('webgl' == r) ==
                        n instanceof WebGLRenderingContext
                        ? n
                        : null;
                    })),
                    (t = e.getContext('webgl2', r));
                return t ? Xe.registerContext(t, r) : 0;
              },
              registerContext: function (e, r) {
                var t = Xe.getNewId(Xe.contexts),
                  n = {
                    handle: t,
                    attributes: r,
                    version: r.majorVersion,
                    GLctx: e,
                  };
                return (
                  e.canvas && (e.canvas.GLctxObject = n),
                  (Xe.contexts[t] = n),
                  (void 0 === r.enableExtensionsByDefault ||
                    r.enableExtensionsByDefault) &&
                    Xe.initExtensions(n),
                  t
                );
              },
              makeContextCurrent: function (e) {
                return (
                  (Xe.currentContext = Xe.contexts[e]),
                  (n.ctx = dr = Xe.currentContext && Xe.currentContext.GLctx),
                  !(e && !dr)
                );
              },
              getContext: function (e) {
                return Xe.contexts[e];
              },
              deleteContext: function (e) {
                Xe.currentContext === Xe.contexts[e] &&
                  (Xe.currentContext = null),
                  'object' == typeof Je &&
                    Je.removeAllHandlersOnTarget(Xe.contexts[e].GLctx.canvas),
                  Xe.contexts[e] &&
                    Xe.contexts[e].GLctx.canvas &&
                    (Xe.contexts[e].GLctx.canvas.GLctxObject = void 0),
                  (Xe.contexts[e] = null);
              },
              initExtensions: function (e) {
                if ((e || (e = Xe.currentContext), !e.initExtensionsDone)) {
                  e.initExtensionsDone = !0;
                  var r = e.GLctx;
                  (function (e) {
                    e.dibvbi = e.getExtension(
                      'WEBGL_draw_instanced_base_vertex_base_instance',
                    );
                  })(r),
                    (function (e) {
                      e.mdibvbi = e.getExtension(
                        'WEBGL_multi_draw_instanced_base_vertex_base_instance',
                      );
                    })(r),
                    e.version >= 2 &&
                      (r.disjointTimerQueryExt = r.getExtension(
                        'EXT_disjoint_timer_query_webgl2',
                      )),
                    (e.version < 2 || !r.disjointTimerQueryExt) &&
                      (r.disjointTimerQueryExt = r.getExtension(
                        'EXT_disjoint_timer_query',
                      )),
                    (function (e) {
                      e.multiDrawWebgl = e.getExtension('WEBGL_multi_draw');
                    })(r),
                    (r.getSupportedExtensions() || []).forEach(function (e) {
                      e.includes('lose_context') ||
                        e.includes('debug') ||
                        r.getExtension(e);
                    });
                }
              },
            },
            Je = {
              inEventHandler: 0,
              removeAllEventListeners: function () {
                for (var e = Je.eventHandlers.length - 1; e >= 0; --e)
                  Je._removeHandler(e);
                (Je.eventHandlers = []), (Je.deferredCalls = []);
              },
              registerRemoveEventListeners: function () {
                Je.removeEventListenersRegistered ||
                  (Je.removeEventListenersRegistered = !0);
              },
              deferredCalls: [],
              deferCall: function (e, r, t) {
                function n(e, r) {
                  if (e.length != r.length) return !1;
                  for (var t in e) if (e[t] != r[t]) return !1;
                  return !0;
                }
                for (var o in Je.deferredCalls) {
                  var a = Je.deferredCalls[o];
                  if (a.targetFunction == e && n(a.argsList, t)) return;
                }
                Je.deferredCalls.push({
                  targetFunction: e,
                  precedence: r,
                  argsList: t,
                }),
                  Je.deferredCalls.sort(function (e, r) {
                    return e.precedence < r.precedence;
                  });
              },
              removeDeferredCalls: function (e) {
                for (var r = 0; r < Je.deferredCalls.length; ++r)
                  Je.deferredCalls[r].targetFunction == e &&
                    (Je.deferredCalls.splice(r, 1), --r);
              },
              canPerformEventHandlerRequests: function () {
                return (
                  Je.inEventHandler &&
                  Je.currentEventHandler.allowsDeferredCalls
                );
              },
              runDeferredCalls: function () {
                if (Je.canPerformEventHandlerRequests())
                  for (var e = 0; e < Je.deferredCalls.length; ++e) {
                    var r = Je.deferredCalls[e];
                    Je.deferredCalls.splice(e, 1),
                      --e,
                      r.targetFunction.apply(null, r.argsList);
                  }
              },
              eventHandlers: [],
              removeAllHandlersOnTarget: function (e, r) {
                for (var t = 0; t < Je.eventHandlers.length; ++t)
                  Je.eventHandlers[t].target != e ||
                    (r && r != Je.eventHandlers[t].eventTypeString) ||
                    Je._removeHandler(t--);
              },
              _removeHandler: function (e) {
                var r = Je.eventHandlers[e];
                r.target.removeEventListener(
                  r.eventTypeString,
                  r.eventListenerFunc,
                  r.useCapture,
                ),
                  Je.eventHandlers.splice(e, 1);
              },
              registerOrRemoveHandler: function (e) {
                var r = function (r) {
                  ++Je.inEventHandler,
                    (Je.currentEventHandler = e),
                    Je.runDeferredCalls(),
                    e.handlerFunc(r),
                    Je.runDeferredCalls(),
                    --Je.inEventHandler;
                };
                if (e.callbackfunc)
                  (e.eventListenerFunc = r),
                    e.target.addEventListener(
                      e.eventTypeString,
                      r,
                      e.useCapture,
                    ),
                    Je.eventHandlers.push(e),
                    Je.registerRemoveEventListeners();
                else
                  for (var t = 0; t < Je.eventHandlers.length; ++t)
                    Je.eventHandlers[t].target == e.target &&
                      Je.eventHandlers[t].eventTypeString ==
                        e.eventTypeString &&
                      Je._removeHandler(t--);
              },
              getNodeNameForTarget: function (e) {
                return e
                  ? e == window
                    ? '#window'
                    : e == screen
                    ? '#screen'
                    : e && e.nodeName
                    ? e.nodeName
                    : ''
                  : '';
              },
              fullscreenEnabled: function () {
                return (
                  document.fullscreenEnabled || document.webkitFullscreenEnabled
                );
              },
            },
            je = ['default', 'low-power', 'high-performance'],
            ze = [0, document, window];
          function _e(e, r) {
            var t = r >> 2,
              n = H[t + 6],
              o = {
                alpha: !!H[t + 0],
                depth: !!H[t + 1],
                stencil: !!H[t + 2],
                antialias: !!H[t + 3],
                premultipliedAlpha: !!H[t + 4],
                preserveDrawingBuffer: !!H[t + 5],
                powerPreference: je[n],
                failIfMajorPerformanceCaveat: !!H[t + 7],
                majorVersion: H[t + 8],
                minorVersion: H[t + 9],
                enableExtensionsByDefault: H[t + 10],
                explicitSwapControl: H[t + 11],
                proxyContextToMainThread: H[t + 12],
                renderViaOffscreenBackBuffer: H[t + 13],
              },
              a = (function (e) {
                return (function (e) {
                  return (
                    (e = (function (e) {
                      return e > 2 ? y(e) : e;
                    })(e)),
                    ze[e] || document.querySelector(e)
                  );
                })(e);
              })(e);
            return a ? (o.explicitSwapControl ? 0 : Xe.createContext(a, o)) : 0;
          }
          var $e = {};
          function er() {
            if (!er.strings) {
              var e = {
                USER: 'web_user',
                LOGNAME: 'web_user',
                PATH: '/',
                PWD: '/',
                HOME: '/home/web_user',
                LANG:
                  (
                    ('object' == typeof navigator &&
                      navigator.languages &&
                      navigator.languages[0]) ||
                    'C'
                  ).replace('-', '_') + '.UTF-8',
                _: l || './this.program',
              };
              for (var r in $e) void 0 === $e[r] ? delete e[r] : (e[r] = $e[r]);
              var t = [];
              for (var r in e) t.push(r + '=' + e[r]);
              er.strings = t;
            }
            return er.strings;
          }
          var rr = [];
          function tr(e, r, t, n) {
            for (var o = 0; o < e; o++) {
              var a = dr[t](),
                i = a && Xe.getNewId(n);
              a ? ((a.name = i), (n[i] = a)) : Xe.recordError(1282),
                (H[(r + 4 * o) >> 2] = i);
            }
          }
          function nr(e, r) {
            (F[e >> 2] = r), (F[(e + 4) >> 2] = (r - F[e >> 2]) / 4294967296);
          }
          function or(e) {
            return ']' == e.slice(-1) && e.lastIndexOf('[');
          }
          function ar(e) {
            return 0 == (e -= 5120)
              ? A
              : 1 == e
              ? T
              : 2 == e
              ? R
              : 4 == e
              ? H
              : 6 == e
              ? U
              : 5 == e || 28922 == e || 28520 == e || 30779 == e || 30782 == e
              ? F
              : x;
          }
          function ir(e) {
            return 31 - Math.clz32(e.BYTES_PER_ELEMENT);
          }
          function sr(e) {
            return e % 4 == 0 && (e % 100 != 0 || e % 400 == 0);
          }
          function ur(e, r) {
            for (var t = 0, n = 0; n <= r; t += e[n++]);
            return t;
          }
          var lr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            cr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
          function fr(e, r) {
            for (var t = new Date(e.getTime()); r > 0; ) {
              var n = sr(t.getFullYear()),
                o = t.getMonth(),
                a = (n ? lr : cr)[o];
              if (!(r > a - t.getDate())) return t.setDate(t.getDate() + r), t;
              (r -= a - t.getDate() + 1),
                t.setDate(1),
                o < 11
                  ? t.setMonth(o + 1)
                  : (t.setMonth(0), t.setFullYear(t.getFullYear() + 1));
            }
            return t;
          }
          var dr,
            Er = function (e, r, t, n) {
              e || (e = this),
                (this.parent = e),
                (this.mount = e.mount),
                (this.mounted = null),
                (this.id = fe.nextInode++),
                (this.name = r),
                (this.mode = t),
                (this.node_ops = {}),
                (this.stream_ops = {}),
                (this.rdev = n);
            },
            pr = 365,
            gr = 146;
          Object.defineProperties(Er.prototype, {
            read: {
              get: function () {
                return (this.mode & pr) === pr;
              },
              set: function (e) {
                e ? (this.mode |= pr) : (this.mode &= ~pr);
              },
            },
            write: {
              get: function () {
                return (this.mode & gr) === gr;
              },
              set: function (e) {
                e ? (this.mode |= gr) : (this.mode &= ~gr);
              },
            },
            isFolder: {
              get: function () {
                return fe.isDir(this.mode);
              },
            },
            isDevice: {
              get: function () {
                return fe.isChrdev(this.mode);
              },
            },
          }),
            (fe.FSNode = Er),
            fe.staticInit(),
            (n.FS_createPath = fe.createPath),
            (n.FS_createDataFile = fe.createDataFile),
            (n.FS_createPreloadedFile = fe.createPreloadedFile),
            (n.FS_createLazyFile = fe.createLazyFile),
            (n.FS_createDevice = fe.createDevice),
            (n.FS_unlink = fe.unlink),
            (ke = n.InternalError = ye(Error, 'InternalError')),
            (function () {
              for (var e = new Array(256), r = 0; r < 256; ++r)
                e[r] = String.fromCharCode(r);
              Ae = e;
            })(),
            (Re = n.BindingError = ye(Error, 'BindingError')),
            (n.count_emval_handles = function () {
              for (var e = 0, r = 5; r < Ue.length; ++r)
                void 0 !== Ue[r] && ++e;
              return e;
            }),
            (n.get_first_emval = function () {
              for (var e = 5; e < Ue.length; ++e)
                if (void 0 !== Ue[e]) return Ue[e];
              return null;
            }),
            (Ze = n.UnboundTypeError = ye(Error, 'UnboundTypeError'));
          for (var hr = 0; hr < 32; ++hr) rr.push(new Array(hr));
          function mr(e, r, t) {
            var n = t > 0 ? t : C(e) + 1,
              o = new Array(n),
              a = k(e, o, 0, o.length);
            return r && (o.length = a), o;
          }
          var wr =
              'function' == typeof atob
                ? atob
                : function (e) {
                    var r,
                      t,
                      n,
                      o,
                      a,
                      i,
                      s =
                        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                      u = '',
                      l = 0;
                    e = e.replace(/[^A-Za-z0-9\+\/\=]/g, '');
                    do {
                      (r =
                        (s.indexOf(e.charAt(l++)) << 2) |
                        ((o = s.indexOf(e.charAt(l++))) >> 4)),
                        (t =
                          ((15 & o) << 4) |
                          ((a = s.indexOf(e.charAt(l++))) >> 2)),
                        (n = ((3 & a) << 6) | (i = s.indexOf(e.charAt(l++)))),
                        (u += String.fromCharCode(r)),
                        64 !== a && (u += String.fromCharCode(t)),
                        64 !== i && (u += String.fromCharCode(n));
                    } while (l < e.length);
                    return u;
                  },
            vr = {
              __assert_fail: function (e, r, t, n) {
                re(
                  'Assertion failed: ' +
                    y(e) +
                    ', at: ' +
                    [
                      r ? y(r) : 'unknown filename',
                      t,
                      n ? y(n) : 'unknown function',
                    ],
                );
              },
              __cxa_allocate_exception: function (e) {
                return kr(e + 16) + 16;
              },
              __cxa_atexit: function (e, r) {},
              __cxa_throw: function (e, r, t) {
                throw (new ae(e).init(r, t), e);
              },
              __sys_fcntl64: function (e, r, t) {
                de.varargs = t;
                try {
                  var n = de.getStreamFromFD(e);
                  switch (r) {
                    case 0:
                      return (o = de.get()) < 0
                        ? -28
                        : fe.open(n.path, n.flags, 0, o).fd;
                    case 1:
                    case 2:
                    case 13:
                    case 14:
                      return 0;
                    case 3:
                      return n.flags;
                    case 4:
                      var o = de.get();
                      return (n.flags |= o), 0;
                    case 12:
                      return (o = de.get()), (R[(o + 0) >> 1] = 2), 0;
                    case 16:
                    case 8:
                    default:
                      return -28;
                    case 9:
                      return (H[Qr() >> 2] = 28), -1;
                  }
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    -e.errno
                  );
                }
              },
              __sys_ioctl: function (e, r, t) {
                de.varargs = t;
                try {
                  var n = de.getStreamFromFD(e);
                  switch (r) {
                    case 21509:
                    case 21505:
                    case 21510:
                    case 21511:
                    case 21512:
                    case 21506:
                    case 21507:
                    case 21508:
                    case 21523:
                    case 21524:
                      return n.tty ? 0 : -59;
                    case 21519:
                      if (!n.tty) return -59;
                      var o = de.get();
                      return (H[o >> 2] = 0), 0;
                    case 21520:
                      return n.tty ? -28 : -59;
                    case 21531:
                      return (o = de.get()), fe.ioctl(n, r, o);
                    default:
                      re('bad ioctl syscall ' + r);
                  }
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    -e.errno
                  );
                }
              },
              __sys_open: function (e, r, t) {
                de.varargs = t;
                try {
                  var n = de.getStr(e),
                    o = t ? de.get() : 0;
                  return fe.open(n, r, o).fd;
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    -e.errno
                  );
                }
              },
              _embind_finalize_value_object: function (e) {
                var r = Ee[e];
                delete Ee[e];
                var t = r.rawConstructor,
                  n = r.rawDestructor,
                  o = r.fields;
                Ce(
                  [e],
                  o
                    .map(function (e) {
                      return e.getterReturnType;
                    })
                    .concat(
                      o.map(function (e) {
                        return e.setterArgumentType;
                      }),
                    ),
                  function (e) {
                    var a = {};
                    return (
                      o.forEach(function (r, t) {
                        var n = r.fieldName,
                          i = e[t],
                          s = r.getter,
                          u = r.getterContext,
                          l = e[t + o.length],
                          c = r.setter,
                          f = r.setterContext;
                        a[n] = {
                          read: function (e) {
                            return i.fromWireType(s(u, e));
                          },
                          write: function (e, r) {
                            var t = [];
                            c(f, e, l.toWireType(t, r)), pe(t);
                          },
                        };
                      }),
                      [
                        {
                          name: r.name,
                          fromWireType: function (e) {
                            var r = {};
                            for (var t in a) r[t] = a[t].read(e);
                            return n(e), r;
                          },
                          toWireType: function (e, r) {
                            for (var o in a)
                              if (!(o in r))
                                throw new TypeError(
                                  'Missing field:  "' + o + '"',
                                );
                            var i = t();
                            for (o in a) a[o].write(i, r[o]);
                            return null !== e && e.push(n, i), i;
                          },
                          argPackAdvance: 8,
                          readValueFromPointer: ge,
                          destructorFunction: n,
                        },
                      ]
                    );
                  },
                );
              },
              _embind_register_bigint: function (e, r, t, n, o) {},
              _embind_register_bool: function (e, r, t, n, o) {
                var a = Qe(t);
                He(e, {
                  name: (r = Te(r)),
                  fromWireType: function (e) {
                    return !!e;
                  },
                  toWireType: function (e, r) {
                    return r ? n : o;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: function (e) {
                    var n;
                    if (1 === t) n = A;
                    else if (2 === t) n = R;
                    else {
                      if (4 !== t)
                        throw new TypeError('Unknown boolean type size: ' + r);
                      n = H;
                    }
                    return this.fromWireType(n[e >> a]);
                  },
                  destructorFunction: null,
                });
              },
              _embind_register_emval: function (e, r) {
                He(e, {
                  name: (r = Te(r)),
                  fromWireType: function (e) {
                    var r = Ue[e].value;
                    return We(e), r;
                  },
                  toWireType: function (e, r) {
                    return Se(r);
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: ge,
                  destructorFunction: null,
                });
              },
              _embind_register_enum: function (e, r, t, n) {
                var o = Qe(t);
                function a() {}
                (r = Te(r)),
                  (a.values = {}),
                  He(e, {
                    name: r,
                    constructor: a,
                    fromWireType: function (e) {
                      return this.constructor.values[e];
                    },
                    toWireType: function (e, r) {
                      return r.value;
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: qe(r, o, n),
                    destructorFunction: null,
                  }),
                  De(r, a);
              },
              _embind_register_enum_value: function (e, r, t) {
                var n = Oe(e, 'enum');
                r = Te(r);
                var o = n.constructor,
                  a = Object.create(n.constructor.prototype, {
                    value: { value: t },
                    constructor: {
                      value: ve(n.name + '_' + r, function () {}),
                    },
                  });
                (o.values[t] = a), (o[r] = a);
              },
              _embind_register_float: function (e, r, t) {
                var n = Qe(t);
                He(e, {
                  name: (r = Te(r)),
                  fromWireType: function (e) {
                    return e;
                  },
                  toWireType: function (e, r) {
                    if ('number' != typeof r && 'boolean' != typeof r)
                      throw new TypeError(
                        'Cannot convert "' + Pe(r) + '" to ' + this.name,
                      );
                    return r;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: Le(r, n),
                  destructorFunction: null,
                });
              },
              _embind_register_function: function (e, r, t, n, o, a) {
                var i = (function (e, r) {
                  for (var t = [], n = 0; n < e; n++) t.push(H[(r >> 2) + n]);
                  return t;
                })(r, t);
                (e = Te(e)),
                  (o = Ie(n, o)),
                  De(
                    e,
                    function () {
                      !(function (e, r) {
                        var t = [],
                          n = {};
                        throw (
                          (r.forEach(function e(r) {
                            n[r] ||
                              me[r] ||
                              (we[r]
                                ? we[r].forEach(e)
                                : (t.push(r), (n[r] = !0)));
                          }),
                          new Ze(e + ': ' + t.map(be).join([', '])))
                        );
                      })('Cannot call ' + e + ' due to unbound types', i);
                    },
                    r - 1,
                  ),
                  Ce([], i, function (t) {
                    var n = [t[0], null].concat(t.slice(1));
                    return (
                      Ne(
                        e,
                        (function (e, r, t, n, o) {
                          var a = r.length;
                          a < 2 &&
                            xe(
                              "argTypes array size mismatch! Must at least get return value and 'this' types!",
                            );
                          for (
                            var i = null !== r[1] && !1, s = !1, u = 1;
                            u < r.length;
                            ++u
                          )
                            if (
                              null !== r[u] &&
                              void 0 === r[u].destructorFunction
                            ) {
                              s = !0;
                              break;
                            }
                          var l = 'void' !== r[0].name,
                            c = a - 2,
                            f = new Array(c),
                            d = [],
                            E = [];
                          return function () {
                            var t;
                            arguments.length !== c &&
                              xe(
                                'function ' +
                                  e +
                                  ' called with ' +
                                  arguments.length +
                                  ' arguments, expected ' +
                                  c +
                                  ' args!',
                              ),
                              (E.length = 0),
                              (d.length = i ? 2 : 1),
                              (d[0] = o),
                              i && ((t = r[1].toWireType(E, this)), (d[1] = t));
                            for (var a = 0; a < c; ++a)
                              (f[a] = r[a + 2].toWireType(E, arguments[a])),
                                d.push(f[a]);
                            function u(e) {
                              if (s) pe(E);
                              else
                                for (var n = i ? 1 : 2; n < r.length; n++) {
                                  var o = 1 === n ? t : f[n - 2];
                                  null !== r[n].destructorFunction &&
                                    r[n].destructorFunction(o);
                                }
                              if (l) return r[0].fromWireType(e);
                            }
                            return u(n.apply(null, d));
                          };
                        })(e, n, 0, o, a),
                        r - 1,
                      ),
                      []
                    );
                  });
              },
              _embind_register_integer: function (e, r, t, n, o) {
                (r = Te(r)), -1 === o && (o = 4294967295);
                var a = Qe(t),
                  i = function (e) {
                    return e;
                  };
                if (0 === n) {
                  var s = 32 - 8 * t;
                  i = function (e) {
                    return (e << s) >>> s;
                  };
                }
                var u = r.includes('unsigned');
                He(e, {
                  name: r,
                  fromWireType: i,
                  toWireType: function (e, t) {
                    if ('number' != typeof t && 'boolean' != typeof t)
                      throw new TypeError(
                        'Cannot convert "' + Pe(t) + '" to ' + this.name,
                      );
                    if (t < n || t > o)
                      throw new TypeError(
                        'Passing a number "' +
                          Pe(t) +
                          '" from JS side to C/C++ side to an argument of type "' +
                          r +
                          '", which is outside the valid range [' +
                          n +
                          ', ' +
                          o +
                          ']!',
                      );
                    return u ? t >>> 0 : 0 | t;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: Me(r, a, 0 !== n),
                  destructorFunction: null,
                });
              },
              _embind_register_memory_view: function (e, r, t) {
                var n = [
                  Int8Array,
                  Uint8Array,
                  Int16Array,
                  Uint16Array,
                  Int32Array,
                  Uint32Array,
                  Float32Array,
                  Float64Array,
                ][r];
                function o(e) {
                  var r = F,
                    t = r[(e >>= 2)],
                    o = r[e + 1];
                  return new n(Q, o, t);
                }
                He(
                  e,
                  {
                    name: (t = Te(t)),
                    fromWireType: o,
                    argPackAdvance: 8,
                    readValueFromPointer: o,
                  },
                  { ignoreDuplicateRegistrations: !0 },
                );
              },
              _embind_register_std_string: function (e, r) {
                var t = 'std::string' === (r = Te(r));
                He(e, {
                  name: r,
                  fromWireType: function (e) {
                    var r,
                      n = F[e >> 2];
                    if (t)
                      for (var o = e + 4, a = 0; a <= n; ++a) {
                        var i = e + 4 + a;
                        if (a == n || 0 == T[i]) {
                          var s = y(o, i - o);
                          void 0 === r
                            ? (r = s)
                            : ((r += String.fromCharCode(0)), (r += s)),
                            (o = i + 1);
                        }
                      }
                    else {
                      var u = new Array(n);
                      for (a = 0; a < n; ++a)
                        u[a] = String.fromCharCode(T[e + 4 + a]);
                      r = u.join('');
                    }
                    return yr(e), r;
                  },
                  toWireType: function (e, r) {
                    r instanceof ArrayBuffer && (r = new Uint8Array(r));
                    var n = 'string' == typeof r;
                    n ||
                      r instanceof Uint8Array ||
                      r instanceof Uint8ClampedArray ||
                      r instanceof Int8Array ||
                      xe('Cannot pass non-string to std::string');
                    var o = (
                        t && n
                          ? function () {
                              return C(r);
                            }
                          : function () {
                              return r.length;
                            }
                      )(),
                      a = kr(4 + o + 1);
                    if (((F[a >> 2] = o), t && n)) B(r, a + 4, o + 1);
                    else if (n)
                      for (var i = 0; i < o; ++i) {
                        var s = r.charCodeAt(i);
                        s > 255 &&
                          (yr(a),
                          xe(
                            'String has UTF-16 code units that do not fit in 8 bits',
                          )),
                          (T[a + 4 + i] = s);
                      }
                    else for (i = 0; i < o; ++i) T[a + 4 + i] = r[i];
                    return null !== e && e.push(yr, a), a;
                  },
                  argPackAdvance: 8,
                  readValueFromPointer: ge,
                  destructorFunction: function (e) {
                    yr(e);
                  },
                });
              },
              _embind_register_std_wstring: function (e, r, t) {
                var n, o, a, i, s;
                (t = Te(t)),
                  2 === r
                    ? ((n = q),
                      (o = b),
                      (i = O),
                      (a = function () {
                        return x;
                      }),
                      (s = 1))
                    : 4 === r &&
                      ((n = P),
                      (o = L),
                      (i = N),
                      (a = function () {
                        return F;
                      }),
                      (s = 2)),
                  He(e, {
                    name: t,
                    fromWireType: function (e) {
                      for (
                        var t, o = F[e >> 2], i = a(), u = e + 4, l = 0;
                        l <= o;
                        ++l
                      ) {
                        var c = e + 4 + l * r;
                        if (l == o || 0 == i[c >> s]) {
                          var f = n(u, c - u);
                          void 0 === t
                            ? (t = f)
                            : ((t += String.fromCharCode(0)), (t += f)),
                            (u = c + r);
                        }
                      }
                      return yr(e), t;
                    },
                    toWireType: function (e, n) {
                      'string' != typeof n &&
                        xe('Cannot pass non-string to C++ string type ' + t);
                      var a = i(n),
                        u = kr(4 + a + r);
                      return (
                        (F[u >> 2] = a >> s),
                        o(n, u + 4, a + r),
                        null !== e && e.push(yr, u),
                        u
                      );
                    },
                    argPackAdvance: 8,
                    readValueFromPointer: ge,
                    destructorFunction: function (e) {
                      yr(e);
                    },
                  });
              },
              _embind_register_value_object: function (e, r, t, n, o, a) {
                Ee[e] = {
                  name: Te(r),
                  rawConstructor: Ie(t, n),
                  rawDestructor: Ie(o, a),
                  fields: [],
                };
              },
              _embind_register_value_object_field: function (
                e,
                r,
                t,
                n,
                o,
                a,
                i,
                s,
                u,
                l,
              ) {
                Ee[e].fields.push({
                  fieldName: Te(r),
                  getterReturnType: t,
                  getter: Ie(n, o),
                  getterContext: a,
                  setterArgumentType: i,
                  setter: Ie(s, u),
                  setterContext: l,
                });
              },
              _embind_register_void: function (e, r) {
                He(e, {
                  isVoid: !0,
                  name: (r = Te(r)),
                  argPackAdvance: 0,
                  fromWireType: function () {},
                  toWireType: function (e, r) {},
                });
              },
              _emval_decref: We,
              _emval_incref: function (e) {
                e > 4 && (Ue[e].refcount += 1);
              },
              _emval_new_cstring: function (e) {
                return Se(
                  (function (e) {
                    var r = Ye[e];
                    return void 0 === r ? Te(e) : r;
                  })(e),
                );
              },
              _emval_new_object: function () {
                return Se({});
              },
              _emval_set_property: function (e, r, t) {
                (e = Ge(e)), (r = Ge(r)), (t = Ge(t)), (e[r] = t);
              },
              _emval_take_value: function (e, r) {
                return Se(
                  (e = Oe(e, '_emval_take_value')).readValueFromPointer(r),
                );
              },
              abort: function () {
                re('');
              },
              emscripten_memcpy_big: function (e, r, t) {
                T.copyWithin(e, r, r + t);
              },
              emscripten_resize_heap: function (e) {
                var r = T.length,
                  t = 2147483648;
                if ((e >>>= 0) > t) return !1;
                for (var n = 1; n <= 4; n *= 2) {
                  var o = r * (1 + 0.2 / n);
                  if (
                    ((o = Math.min(o, e + 100663296)),
                    Ke(Math.min(t, V(Math.max(e, o), 65536))))
                  )
                    return !0;
                }
                return !1;
              },
              emscripten_webgl_create_context: function (e, r) {
                return _e(e, r);
              },
              emscripten_webgl_init_context_attributes: function (e) {
                for (var r = e >> 2, t = 0; t < 14; ++t) H[r + t] = 0;
                H[r + 0] =
                  H[r + 1] =
                  H[r + 3] =
                  H[r + 4] =
                  H[r + 8] =
                  H[r + 10] =
                    1;
              },
              emscripten_webgl_make_context_current: function (e) {
                return Xe.makeContextCurrent(e) ? 0 : -5;
              },
              environ_get: function (e, r) {
                var t = 0;
                return (
                  er().forEach(function (n, o) {
                    var a = r + t;
                    (H[(e + 4 * o) >> 2] = a),
                      (function (e, r, t) {
                        for (var n = 0; n < e.length; ++n)
                          A[r++ >> 0] = e.charCodeAt(n);
                        A[r >> 0] = 0;
                      })(n, a),
                      (t += n.length + 1);
                  }),
                  0
                );
              },
              environ_sizes_get: function (e, r) {
                var t = er();
                H[e >> 2] = t.length;
                var n = 0;
                return (
                  t.forEach(function (e) {
                    n += e.length + 1;
                  }),
                  (H[r >> 2] = n),
                  0
                );
              },
              fd_close: function (e) {
                try {
                  var r = de.getStreamFromFD(e);
                  return fe.close(r), 0;
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    e.errno
                  );
                }
              },
              fd_read: function (e, r, t, n) {
                try {
                  var o = de.getStreamFromFD(e),
                    a = de.doReadv(o, r, t);
                  return (H[n >> 2] = a), 0;
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    e.errno
                  );
                }
              },
              fd_seek: function (e, r, t, n, o) {
                try {
                  var a = de.getStreamFromFD(e),
                    i = 4294967296 * t + (r >>> 0),
                    s = 9007199254740992;
                  return i <= -s || i >= s
                    ? -61
                    : (fe.llseek(a, i, n),
                      (j = [
                        a.position >>> 0,
                        ((J = a.position),
                        +Math.abs(J) >= 1
                          ? J > 0
                            ? (0 |
                                Math.min(
                                  +Math.floor(J / 4294967296),
                                  4294967295,
                                )) >>>
                              0
                            : ~~+Math.ceil((J - +(~~J >>> 0)) / 4294967296) >>>
                              0
                          : 0),
                      ]),
                      (H[o >> 2] = j[0]),
                      (H[(o + 4) >> 2] = j[1]),
                      a.getdents && 0 === i && 0 === n && (a.getdents = null),
                      0);
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    e.errno
                  );
                }
              },
              fd_write: function (e, r, t, n) {
                try {
                  var o = de.getStreamFromFD(e),
                    a = de.doWritev(o, r, t);
                  return (H[n >> 2] = a), 0;
                } catch (e) {
                  return (
                    (void 0 !== fe && e instanceof fe.ErrnoError) || re(e),
                    e.errno
                  );
                }
              },
              glActiveTexture: function (e) {
                dr.activeTexture(e);
              },
              glAttachShader: function (e, r) {
                dr.attachShader(Xe.programs[e], Xe.shaders[r]);
              },
              glBindAttribLocation: function (e, r, t) {
                dr.bindAttribLocation(Xe.programs[e], r, y(t));
              },
              glBindBuffer: function (e, r) {
                35051 == e
                  ? (dr.currentPixelPackBufferBinding = r)
                  : 35052 == e && (dr.currentPixelUnpackBufferBinding = r),
                  dr.bindBuffer(e, Xe.buffers[r]);
              },
              glBindBufferBase: function (e, r, t) {
                dr.bindBufferBase(e, r, Xe.buffers[t]);
              },
              glBindBufferRange: function (e, r, t, n, o) {
                dr.bindBufferRange(e, r, Xe.buffers[t], n, o);
              },
              glBindFramebuffer: function (e, r) {
                dr.bindFramebuffer(e, Xe.framebuffers[r]);
              },
              glBindTexture: function (e, r) {
                dr.bindTexture(e, Xe.textures[r]);
              },
              glBindVertexArray: function (e) {
                dr.bindVertexArray(Xe.vaos[e]);
              },
              glBufferData: function (e, r, t, n) {
                t ? dr.bufferData(e, T, n, t, r) : dr.bufferData(e, r, n);
              },
              glBufferSubData: function (e, r, t, n) {
                dr.bufferSubData(e, r, T, n, t);
              },
              glClear: function (e) {
                dr.clear(e);
              },
              glClearBufferfi: function (e, r, t, n) {
                dr.clearBufferfi(e, r, t, n);
              },
              glClearBufferfv: function (e, r, t) {
                dr.clearBufferfv(e, r, U, t >> 2);
              },
              glClearBufferiv: function (e, r, t) {
                dr.clearBufferiv(e, r, H, t >> 2);
              },
              glClearBufferuiv: function (e, r, t) {
                dr.clearBufferuiv(e, r, F, t >> 2);
              },
              glClearColor: function (e, r, t, n) {
                dr.clearColor(e, r, t, n);
              },
              glClearDepthf: function (e) {
                dr.clearDepth(e);
              },
              glClearStencil: function (e) {
                dr.clearStencil(e);
              },
              glCompileShader: function (e) {
                dr.compileShader(Xe.shaders[e]);
              },
              glCreateProgram: function () {
                var e = Xe.getNewId(Xe.programs),
                  r = dr.createProgram();
                return (
                  (r.name = e),
                  (r.maxUniformLength =
                    r.maxAttributeLength =
                    r.maxUniformBlockNameLength =
                      0),
                  (r.uniformIdCounter = 1),
                  (Xe.programs[e] = r),
                  e
                );
              },
              glCreateShader: function (e) {
                var r = Xe.getNewId(Xe.shaders);
                return (Xe.shaders[r] = dr.createShader(e)), r;
              },
              glDeleteBuffers: function (e, r) {
                for (var t = 0; t < e; t++) {
                  var n = H[(r + 4 * t) >> 2],
                    o = Xe.buffers[n];
                  o &&
                    (dr.deleteBuffer(o),
                    (o.name = 0),
                    (Xe.buffers[n] = null),
                    n == dr.currentPixelPackBufferBinding &&
                      (dr.currentPixelPackBufferBinding = 0),
                    n == dr.currentPixelUnpackBufferBinding &&
                      (dr.currentPixelUnpackBufferBinding = 0));
                }
              },
              glDeleteFramebuffers: function (e, r) {
                for (var t = 0; t < e; ++t) {
                  var n = H[(r + 4 * t) >> 2],
                    o = Xe.framebuffers[n];
                  o &&
                    (dr.deleteFramebuffer(o),
                    (o.name = 0),
                    (Xe.framebuffers[n] = null));
                }
              },
              glDeleteProgram: function (e) {
                if (e) {
                  var r = Xe.programs[e];
                  r
                    ? (dr.deleteProgram(r),
                      (r.name = 0),
                      (Xe.programs[e] = null))
                    : Xe.recordError(1281);
                }
              },
              glDeleteQueries: function (e, r) {
                for (var t = 0; t < e; t++) {
                  var n = H[(r + 4 * t) >> 2],
                    o = Xe.queries[n];
                  o && (dr.deleteQuery(o), (Xe.queries[n] = null));
                }
              },
              glDeleteShader: function (e) {
                if (e) {
                  var r = Xe.shaders[e];
                  r
                    ? (dr.deleteShader(r), (Xe.shaders[e] = null))
                    : Xe.recordError(1281);
                }
              },
              glDeleteTextures: function (e, r) {
                for (var t = 0; t < e; t++) {
                  var n = H[(r + 4 * t) >> 2],
                    o = Xe.textures[n];
                  o &&
                    (dr.deleteTexture(o),
                    (o.name = 0),
                    (Xe.textures[n] = null));
                }
              },
              glDeleteVertexArrays: function (e, r) {
                for (var t = 0; t < e; t++) {
                  var n = H[(r + 4 * t) >> 2];
                  dr.deleteVertexArray(Xe.vaos[n]), (Xe.vaos[n] = null);
                }
              },
              glDrawArrays: function (e, r, t) {
                dr.drawArrays(e, r, t);
              },
              glDrawBuffers: function (e, r) {
                for (var t = rr[e], n = 0; n < e; n++)
                  t[n] = H[(r + 4 * n) >> 2];
                dr.drawBuffers(t);
              },
              glDrawElements: function (e, r, t, n) {
                dr.drawElements(e, r, t, n);
              },
              glDrawElementsInstanced: function (e, r, t, n, o) {
                dr.drawElementsInstanced(e, r, t, n, o);
              },
              glEnableVertexAttribArray: function (e) {
                dr.enableVertexAttribArray(e);
              },
              glFramebufferTexture2D: function (e, r, t, n, o) {
                dr.framebufferTexture2D(e, r, t, Xe.textures[n], o);
              },
              glGenBuffers: function (e, r) {
                tr(e, r, 'createBuffer', Xe.buffers);
              },
              glGenFramebuffers: function (e, r) {
                tr(e, r, 'createFramebuffer', Xe.framebuffers);
              },
              glGenQueries: function (e, r) {
                tr(e, r, 'createQuery', Xe.queries);
              },
              glGenTextures: function (e, r) {
                tr(e, r, 'createTexture', Xe.textures);
              },
              glGenVertexArrays: function (e, r) {
                tr(e, r, 'createVertexArray', Xe.vaos);
              },
              glGenerateMipmap: function (e) {
                dr.generateMipmap(e);
              },
              glGetIntegerv: function (e, r) {
                !(function (e, r, t) {
                  if (r) {
                    var n = void 0;
                    switch (e) {
                      case 36346:
                        n = 1;
                        break;
                      case 36344:
                        return;
                      case 34814:
                      case 36345:
                        n = 0;
                        break;
                      case 34466:
                        var o = dr.getParameter(34467);
                        n = o ? o.length : 0;
                        break;
                      case 33309:
                        if (Xe.currentContext.version < 2)
                          return void Xe.recordError(1282);
                        n = 2 * (dr.getSupportedExtensions() || []).length;
                        break;
                      case 33307:
                      case 33308:
                        if (Xe.currentContext.version < 2)
                          return void Xe.recordError(1280);
                        n = 33307 == e ? 3 : 0;
                    }
                    if (void 0 === n) {
                      var a = dr.getParameter(e);
                      switch (typeof a) {
                        case 'number':
                          n = a;
                          break;
                        case 'boolean':
                          n = a ? 1 : 0;
                          break;
                        case 'string':
                          return void Xe.recordError(1280);
                        case 'object':
                          if (null === a)
                            switch (e) {
                              case 34964:
                              case 35725:
                              case 34965:
                              case 36006:
                              case 36007:
                              case 32873:
                              case 34229:
                              case 36662:
                              case 36663:
                              case 35053:
                              case 35055:
                              case 36010:
                              case 35097:
                              case 35869:
                              case 32874:
                              case 36389:
                              case 35983:
                              case 35368:
                              case 34068:
                                n = 0;
                                break;
                              default:
                                return void Xe.recordError(1280);
                            }
                          else {
                            if (
                              a instanceof Float32Array ||
                              a instanceof Uint32Array ||
                              a instanceof Int32Array ||
                              a instanceof Array
                            ) {
                              for (var i = 0; i < a.length; ++i)
                                H[(r + 4 * i) >> 2] = a[i];
                              return;
                            }
                            try {
                              n = 0 | a.name;
                            } catch (r) {
                              return (
                                Xe.recordError(1280),
                                void d(
                                  'GL_INVALID_ENUM in glGet0v: Unknown object returned from WebGL getParameter(' +
                                    e +
                                    ')! (error: ' +
                                    r +
                                    ')',
                                )
                              );
                            }
                          }
                          break;
                        default:
                          return (
                            Xe.recordError(1280),
                            void d(
                              'GL_INVALID_ENUM in glGet0v: Native code calling glGet0v(' +
                                e +
                                ') and it returns ' +
                                a +
                                ' of type ' +
                                typeof a +
                                '!',
                            )
                          );
                      }
                    }
                    H[r >> 2] = n;
                  } else Xe.recordError(1281);
                })(e, r);
              },
              glGetQueryObjectui64vEXT: function (e, r, t) {
                if (t) {
                  var n,
                    o = Xe.queries[e];
                  nr(
                    t,
                    'boolean' ==
                      typeof (n =
                        Xe.currentContext.version < 2
                          ? dr.disjointTimerQueryExt.getQueryObjectEXT(o, r)
                          : dr.getQueryParameter(o, r))
                      ? n
                        ? 1
                        : 0
                      : n,
                  );
                } else Xe.recordError(1281);
              },
              glGetQueryObjectuivEXT: function (e, r, t) {
                if (t) {
                  var n,
                    o = Xe.queries[e],
                    a = dr.disjointTimerQueryExt.getQueryObjectEXT(o, r);
                  (n = 'boolean' == typeof a ? (a ? 1 : 0) : a),
                    (H[t >> 2] = n);
                } else Xe.recordError(1281);
              },
              glGetUniformBlockIndex: function (e, r) {
                return dr.getUniformBlockIndex(Xe.programs[e], y(r));
              },
              glGetUniformLocation: function (e, r) {
                if (((r = y(r)), (e = Xe.programs[e]))) {
                  !(function (e) {
                    var r,
                      t,
                      n = e.uniformLocsById,
                      o = e.uniformSizeAndIdsByName;
                    if (!n)
                      for (
                        e.uniformLocsById = n = {},
                          e.uniformArrayNamesById = {},
                          r = 0;
                        r < dr.getProgramParameter(e, 35718);
                        ++r
                      ) {
                        var a = dr.getActiveUniform(e, r),
                          i = a.name,
                          s = a.size,
                          u = or(i),
                          l = u > 0 ? i.slice(0, u) : i,
                          c = e.uniformIdCounter;
                        for (
                          e.uniformIdCounter += s, o[l] = [s, c], t = 0;
                          t < s;
                          ++t
                        )
                          (n[c] = t), (e.uniformArrayNamesById[c++] = l);
                      }
                  })(e);
                  var t = e.uniformLocsById,
                    n = 0,
                    o = r,
                    a = or(r);
                  a > 0 &&
                    ((n =
                      (function (e) {
                        return parseInt(e);
                      })(r.slice(a + 1)) >>> 0),
                    (o = r.slice(0, a)));
                  var i = e.uniformSizeAndIdsByName[o];
                  if (
                    i &&
                    n < i[0] &&
                    (t[(n += i[1])] = t[n] || dr.getUniformLocation(e, r))
                  )
                    return n;
                } else Xe.recordError(1281);
                return -1;
              },
              glLinkProgram: function (e) {
                (e = Xe.programs[e]),
                  dr.linkProgram(e),
                  (e.uniformLocsById = 0),
                  (e.uniformSizeAndIdsByName = {});
              },
              glPixelStorei: function (e, r) {
                3317 == e && (Xe.unpackAlignment = r), dr.pixelStorei(e, r);
              },
              glQueryCounterEXT: function (e, r) {
                dr.disjointTimerQueryExt.queryCounterEXT(Xe.queries[e], r);
              },
              glReadBuffer: function (e) {
                dr.readBuffer(e);
              },
              glReadPixels: function (e, r, t, n, o, a, i) {
                if (dr.currentPixelPackBufferBinding)
                  dr.readPixels(e, r, t, n, o, a, i);
                else {
                  var s = ar(a);
                  dr.readPixels(e, r, t, n, o, a, s, i >> ir(s));
                }
              },
              glShaderSource: function (e, r, t, n) {
                var o = Xe.getSource(e, r, t, n);
                dr.shaderSource(Xe.shaders[e], o);
              },
              glTexImage3D: function (e, r, t, n, o, a, i, s, u, l) {
                if (dr.currentPixelUnpackBufferBinding)
                  dr.texImage3D(e, r, t, n, o, a, i, s, u, l);
                else if (l) {
                  var c = ar(u);
                  dr.texImage3D(e, r, t, n, o, a, i, s, u, c, l >> ir(c));
                } else dr.texImage3D(e, r, t, n, o, a, i, s, u, null);
              },
              glTexParameteri: function (e, r, t) {
                dr.texParameteri(e, r, t);
              },
              glTexStorage2D: function (e, r, t, n, o) {
                dr.texStorage2D(e, r, t, n, o);
              },
              glTexStorage3D: function (e, r, t, n, o, a) {
                dr.texStorage3D(e, r, t, n, o, a);
              },
              glTexSubImage2D: function (e, r, t, n, o, a, i, s, u) {
                if (dr.currentPixelUnpackBufferBinding)
                  dr.texSubImage2D(e, r, t, n, o, a, i, s, u);
                else if (u) {
                  var l = ar(s);
                  dr.texSubImage2D(e, r, t, n, o, a, i, s, l, u >> ir(l));
                } else dr.texSubImage2D(e, r, t, n, o, a, i, s, null);
              },
              glTexSubImage3D: function (e, r, t, n, o, a, i, s, u, l, c) {
                if (dr.currentPixelUnpackBufferBinding)
                  dr.texSubImage3D(e, r, t, n, o, a, i, s, u, l, c);
                else if (c) {
                  var f = ar(l);
                  dr.texSubImage3D(e, r, t, n, o, a, i, s, u, l, f, c >> ir(f));
                } else dr.texSubImage3D(e, r, t, n, o, a, i, s, u, l, null);
              },
              glUniform1i: function (e, r) {
                dr.uniform1i(
                  (function (e) {
                    var r = dr.currentProgram;
                    if (r) {
                      var t = r.uniformLocsById[e];
                      return (
                        'number' == typeof t &&
                          (r.uniformLocsById[e] = t =
                            dr.getUniformLocation(
                              r,
                              r.uniformArrayNamesById[e] +
                                (t > 0 ? '[' + t + ']' : ''),
                            )),
                        t
                      );
                    }
                    Xe.recordError(1282);
                  })(e),
                  r,
                );
              },
              glUniformBlockBinding: function (e, r, t) {
                (e = Xe.programs[e]), dr.uniformBlockBinding(e, r, t);
              },
              glUseProgram: function (e) {
                (e = Xe.programs[e]), dr.useProgram(e), (dr.currentProgram = e);
              },
              glVertexAttribIPointer: function (e, r, t, n, o) {
                dr.vertexAttribIPointer(e, r, t, n, o);
              },
              glVertexAttribPointer: function (e, r, t, n, o, a) {
                dr.vertexAttribPointer(e, r, t, !!n, o, a);
              },
              setTempRet0: function (e) {},
              strftime_l: function (e, r, t, n) {
                return (function (e, r, t, n) {
                  var o = H[(n + 40) >> 2],
                    a = {
                      tm_sec: H[n >> 2],
                      tm_min: H[(n + 4) >> 2],
                      tm_hour: H[(n + 8) >> 2],
                      tm_mday: H[(n + 12) >> 2],
                      tm_mon: H[(n + 16) >> 2],
                      tm_year: H[(n + 20) >> 2],
                      tm_wday: H[(n + 24) >> 2],
                      tm_yday: H[(n + 28) >> 2],
                      tm_isdst: H[(n + 32) >> 2],
                      tm_gmtoff: H[(n + 36) >> 2],
                      tm_zone: o ? y(o) : '',
                    },
                    i = y(t),
                    s = {
                      '%c': '%a %b %d %H:%M:%S %Y',
                      '%D': '%m/%d/%y',
                      '%F': '%Y-%m-%d',
                      '%h': '%b',
                      '%r': '%I:%M:%S %p',
                      '%R': '%H:%M',
                      '%T': '%H:%M:%S',
                      '%x': '%m/%d/%y',
                      '%X': '%H:%M:%S',
                      '%Ec': '%c',
                      '%EC': '%C',
                      '%Ex': '%m/%d/%y',
                      '%EX': '%H:%M:%S',
                      '%Ey': '%y',
                      '%EY': '%Y',
                      '%Od': '%d',
                      '%Oe': '%e',
                      '%OH': '%H',
                      '%OI': '%I',
                      '%Om': '%m',
                      '%OM': '%M',
                      '%OS': '%S',
                      '%Ou': '%u',
                      '%OU': '%U',
                      '%OV': '%V',
                      '%Ow': '%w',
                      '%OW': '%W',
                      '%Oy': '%y',
                    };
                  for (var u in s) i = i.replace(new RegExp(u, 'g'), s[u]);
                  var l = [
                      'Sunday',
                      'Monday',
                      'Tuesday',
                      'Wednesday',
                      'Thursday',
                      'Friday',
                      'Saturday',
                    ],
                    c = [
                      'January',
                      'February',
                      'March',
                      'April',
                      'May',
                      'June',
                      'July',
                      'August',
                      'September',
                      'October',
                      'November',
                      'December',
                    ];
                  function f(e, r, t) {
                    for (
                      var n = 'number' == typeof e ? e.toString() : e || '';
                      n.length < r;

                    )
                      n = t[0] + n;
                    return n;
                  }
                  function d(e, r) {
                    return f(e, r, '0');
                  }
                  function E(e, r) {
                    function t(e) {
                      return e < 0 ? -1 : e > 0 ? 1 : 0;
                    }
                    var n;
                    return (
                      0 === (n = t(e.getFullYear() - r.getFullYear())) &&
                        0 === (n = t(e.getMonth() - r.getMonth())) &&
                        (n = t(e.getDate() - r.getDate())),
                      n
                    );
                  }
                  function p(e) {
                    switch (e.getDay()) {
                      case 0:
                        return new Date(e.getFullYear() - 1, 11, 29);
                      case 1:
                        return e;
                      case 2:
                        return new Date(e.getFullYear(), 0, 3);
                      case 3:
                        return new Date(e.getFullYear(), 0, 2);
                      case 4:
                        return new Date(e.getFullYear(), 0, 1);
                      case 5:
                        return new Date(e.getFullYear() - 1, 11, 31);
                      case 6:
                        return new Date(e.getFullYear() - 1, 11, 30);
                    }
                  }
                  function g(e) {
                    var r = fr(new Date(e.tm_year + 1900, 0, 1), e.tm_yday),
                      t = new Date(r.getFullYear(), 0, 4),
                      n = new Date(r.getFullYear() + 1, 0, 4),
                      o = p(t),
                      a = p(n);
                    return E(o, r) <= 0
                      ? E(a, r) <= 0
                        ? r.getFullYear() + 1
                        : r.getFullYear()
                      : r.getFullYear() - 1;
                  }
                  var h = {
                    '%a': function (e) {
                      return l[e.tm_wday].substring(0, 3);
                    },
                    '%A': function (e) {
                      return l[e.tm_wday];
                    },
                    '%b': function (e) {
                      return c[e.tm_mon].substring(0, 3);
                    },
                    '%B': function (e) {
                      return c[e.tm_mon];
                    },
                    '%C': function (e) {
                      return d(((e.tm_year + 1900) / 100) | 0, 2);
                    },
                    '%d': function (e) {
                      return d(e.tm_mday, 2);
                    },
                    '%e': function (e) {
                      return f(e.tm_mday, 2, ' ');
                    },
                    '%g': function (e) {
                      return g(e).toString().substring(2);
                    },
                    '%G': function (e) {
                      return g(e);
                    },
                    '%H': function (e) {
                      return d(e.tm_hour, 2);
                    },
                    '%I': function (e) {
                      var r = e.tm_hour;
                      return 0 == r ? (r = 12) : r > 12 && (r -= 12), d(r, 2);
                    },
                    '%j': function (e) {
                      return d(
                        e.tm_mday +
                          ur(sr(e.tm_year + 1900) ? lr : cr, e.tm_mon - 1),
                        3,
                      );
                    },
                    '%m': function (e) {
                      return d(e.tm_mon + 1, 2);
                    },
                    '%M': function (e) {
                      return d(e.tm_min, 2);
                    },
                    '%n': function () {
                      return '\n';
                    },
                    '%p': function (e) {
                      return e.tm_hour >= 0 && e.tm_hour < 12 ? 'AM' : 'PM';
                    },
                    '%S': function (e) {
                      return d(e.tm_sec, 2);
                    },
                    '%t': function () {
                      return '\t';
                    },
                    '%u': function (e) {
                      return e.tm_wday || 7;
                    },
                    '%U': function (e) {
                      var r = new Date(e.tm_year + 1900, 0, 1),
                        t = 0 === r.getDay() ? r : fr(r, 7 - r.getDay()),
                        n = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                      if (E(t, n) < 0) {
                        var o =
                            ur(
                              sr(n.getFullYear()) ? lr : cr,
                              n.getMonth() - 1,
                            ) - 31,
                          a = 31 - t.getDate() + o + n.getDate();
                        return d(Math.ceil(a / 7), 2);
                      }
                      return 0 === E(t, r) ? '01' : '00';
                    },
                    '%V': function (e) {
                      var r,
                        t = new Date(e.tm_year + 1900, 0, 4),
                        n = new Date(e.tm_year + 1901, 0, 4),
                        o = p(t),
                        a = p(n),
                        i = fr(new Date(e.tm_year + 1900, 0, 1), e.tm_yday);
                      return E(i, o) < 0
                        ? '53'
                        : E(a, i) <= 0
                        ? '01'
                        : ((r =
                            o.getFullYear() < e.tm_year + 1900
                              ? e.tm_yday + 32 - o.getDate()
                              : e.tm_yday + 1 - o.getDate()),
                          d(Math.ceil(r / 7), 2));
                    },
                    '%w': function (e) {
                      return e.tm_wday;
                    },
                    '%W': function (e) {
                      var r = new Date(e.tm_year, 0, 1),
                        t =
                          1 === r.getDay()
                            ? r
                            : fr(r, 0 === r.getDay() ? 1 : 7 - r.getDay() + 1),
                        n = new Date(e.tm_year + 1900, e.tm_mon, e.tm_mday);
                      if (E(t, n) < 0) {
                        var o =
                            ur(
                              sr(n.getFullYear()) ? lr : cr,
                              n.getMonth() - 1,
                            ) - 31,
                          a = 31 - t.getDate() + o + n.getDate();
                        return d(Math.ceil(a / 7), 2);
                      }
                      return 0 === E(t, r) ? '01' : '00';
                    },
                    '%y': function (e) {
                      return (e.tm_year + 1900).toString().substring(2);
                    },
                    '%Y': function (e) {
                      return e.tm_year + 1900;
                    },
                    '%z': function (e) {
                      var r = e.tm_gmtoff,
                        t = r >= 0;
                      return (
                        (r = ((r = Math.abs(r) / 60) / 60) * 100 + (r % 60)),
                        (t ? '+' : '-') + String('0000' + r).slice(-4)
                      );
                    },
                    '%Z': function (e) {
                      return e.tm_zone;
                    },
                    '%%': function () {
                      return '%';
                    },
                  };
                  for (var u in h)
                    i.includes(u) &&
                      (i = i.replace(new RegExp(u, 'g'), h[u](a)));
                  var m = mr(i, !1);
                  return m.length > r
                    ? 0
                    : ((function (e, r) {
                        A.set(e, r);
                      })(m, e),
                      m.length - 1);
                })(e, r, t, n);
              },
            };
          (function () {
            var e = { env: vr, wasi_snapshot_preview1: vr };
            function r(e, r) {
              var t = e.exports;
              (n.asm = t),
                I((g = n.asm.memory).buffer),
                (S = n.asm.__indirect_function_table),
                (function (e) {
                  M.unshift(e);
                })(n.asm.__wasm_call_ctors),
                ee();
            }
            function o(e) {
              r(e.instance);
            }
            function a(r) {
              return (
                p || 'function' != typeof fetch
                  ? Promise.resolve().then(function () {
                      return ne(X);
                    })
                  : fetch(X, { credentials: 'same-origin' })
                      .then(function (e) {
                        if (!e.ok)
                          throw (
                            "failed to load wasm binary file at '" + X + "'"
                          );
                        return e.arrayBuffer();
                      })
                      .catch(function () {
                        return ne(X);
                      })
              )
                .then(function (r) {
                  return WebAssembly.instantiate(r, e);
                })
                .then(function (e) {
                  return e;
                })
                .then(r, function (e) {
                  d('failed to asynchronously prepare wasm: ' + e), re(e);
                });
            }
            if (($(), n.instantiateWasm))
              try {
                return n.instantiateWasm(e, r);
              } catch (e) {
                return (
                  d('Module.instantiateWasm callback failed with error: ' + e),
                  !1
                );
              }
            (p ||
            'function' != typeof WebAssembly.instantiateStreaming ||
            te(X) ||
            'function' != typeof fetch
              ? a(o)
              : fetch(X, { credentials: 'same-origin' }).then(function (r) {
                  return WebAssembly.instantiateStreaming(r, e).then(
                    o,
                    function (e) {
                      return (
                        d('wasm streaming compile failed: ' + e),
                        d('falling back to ArrayBuffer instantiation'),
                        a(o)
                      );
                    },
                  );
                })
            ).catch(t);
          })(),
            (n.___wasm_call_ctors = function () {
              return (n.___wasm_call_ctors = n.asm.__wasm_call_ctors).apply(
                null,
                arguments,
              );
            });
          var yr = (n._free = function () {
              return (yr = n._free = n.asm.free).apply(null, arguments);
            }),
            kr = (n._malloc = function () {
              return (kr = n._malloc = n.asm.malloc).apply(null, arguments);
            });
          (n.__Z16get_new_requestsi = function () {
            return (n.__Z16get_new_requestsi =
              n.asm._Z16get_new_requestsi).apply(null, arguments);
          }),
            (n.__Z7respondiiN6i3slib3vxl13Wasm_responseE = function () {
              return (n.__Z7respondiiN6i3slib3vxl13Wasm_responseE =
                n.asm._Z7respondiiN6i3slib3vxl13Wasm_responseE).apply(
                null,
                arguments,
              );
            }),
            (n.__Z9add_layerRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjjddddbi =
              function () {
                return (n.__Z9add_layerRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjjddddbi =
                  n.asm._Z9add_layerRKNSt3__212basic_stringIcNS_11char_traitsIcEENS_9allocatorIcEEEEjjddddbi).apply(
                  null,
                  arguments,
                );
              }),
            (n.__Z12remove_layeri = function () {
              return (n.__Z12remove_layeri = n.asm._Z12remove_layeri).apply(
                null,
                arguments,
              );
            }),
            (n.__Z21initialize_voxel_wasmiiiiiiiiddbb = function () {
              return (n.__Z21initialize_voxel_wasmiiiiiiiiddbb =
                n.asm._Z21initialize_voxel_wasmiiiiiiiiddbb).apply(
                null,
                arguments,
              );
            }),
            (n.__Z23uninitialize_voxel_wasmv = function () {
              return (n.__Z23uninitialize_voxel_wasmv =
                n.asm._Z23uninitialize_voxel_wasmv).apply(null, arguments);
            }),
            (n.__Z15set_view_matrixffffffffffffffff = function () {
              return (n.__Z15set_view_matrixffffffffffffffff =
                n.asm._Z15set_view_matrixffffffffffffffff).apply(
                null,
                arguments,
              );
            }),
            (n.__Z21set_projection_matrixffffffffffffffff = function () {
              return (n.__Z21set_projection_matrixffffffffffffffff =
                n.asm._Z21set_projection_matrixffffffffffffffff).apply(
                null,
                arguments,
              );
            }),
            (n.__Z12set_near_fardd = function () {
              return (n.__Z12set_near_fardd = n.asm._Z12set_near_fardd).apply(
                null,
                arguments,
              );
            }),
            (n.__Z4cullv = function () {
              return (n.__Z4cullv = n.asm._Z4cullv).apply(null, arguments);
            }),
            (n.__Z31update_camera_pos_and_directiondddddd = function () {
              return (n.__Z31update_camera_pos_and_directiondddddd =
                n.asm._Z31update_camera_pos_and_directiondddddd).apply(
                null,
                arguments,
              );
            }),
            (n.__Z8get_nearv = function () {
              return (n.__Z8get_nearv = n.asm._Z8get_nearv).apply(
                null,
                arguments,
              );
            }),
            (n.__Z7get_farv = function () {
              return (n.__Z7get_farv = n.asm._Z7get_farv).apply(
                null,
                arguments,
              );
            }),
            (n.__Z17begin_color_framebddd = function () {
              return (n.__Z17begin_color_framebddd =
                n.asm._Z17begin_color_framebddd).apply(null, arguments);
            }),
            (n.__Z11begin_framev = function () {
              return (n.__Z11begin_framev = n.asm._Z11begin_framev).apply(
                null,
                arguments,
              );
            }),
            (n.__Z32get_texture_units_bound_in_framev = function () {
              return (n.__Z32get_texture_units_bound_in_framev =
                n.asm._Z32get_texture_units_bound_in_framev).apply(
                null,
                arguments,
              );
            }),
            (n.__Z23get_active_texture_unitv = function () {
              return (n.__Z23get_active_texture_unitv =
                n.asm._Z23get_active_texture_unitv).apply(null, arguments);
            }),
            (n.__Z12set_viewportii = function () {
              return (n.__Z12set_viewportii = n.asm._Z12set_viewportii).apply(
                null,
                arguments,
              );
            }),
            (n.__Z4drawv = function () {
              return (n.__Z4drawv = n.asm._Z4drawv).apply(null, arguments);
            }),
            (n.__Z11set_qualityi = function () {
              return (n.__Z11set_qualityi = n.asm._Z11set_qualityi).apply(
                null,
                arguments,
              );
            }),
            (n.__Z10pick_depthii = function () {
              return (n.__Z10pick_depthii = n.asm._Z10pick_depthii).apply(
                null,
                arguments,
              );
            }),
            (n.__Z11pick_objectii = function () {
              return (n.__Z11pick_objectii = n.asm._Z11pick_objectii).apply(
                null,
                arguments,
              );
            }),
            (n.__Z11set_enabledib = function () {
              return (n.__Z11set_enabledib = n.asm._Z11set_enabledib).apply(
                null,
                arguments,
              );
            }),
            (n.__Z23handle_masked_ui_updateijj = function () {
              return (n.__Z23handle_masked_ui_updateijj =
                n.asm._Z23handle_masked_ui_updateijj).apply(null, arguments);
            }),
            (n.__Z21set_scene_time_extentddb = function () {
              return (n.__Z21set_scene_time_extentddb =
                n.asm._Z21set_scene_time_extentddb).apply(null, arguments);
            }),
            (n.__Z20set_upscaling_limitsidd = function () {
              return (n.__Z20set_upscaling_limitsidd =
                n.asm._Z20set_upscaling_limitsidd).apply(null, arguments);
            }),
            (n.__Z21estimate_memory_usagei = function () {
              return (n.__Z21estimate_memory_usagei =
                n.asm._Z21estimate_memory_usagei).apply(null, arguments);
            });
          var Br = (n.___getTypeName = function () {
            return (Br = n.___getTypeName = n.asm.__getTypeName).apply(
              null,
              arguments,
            );
          });
          n.___embind_register_native_and_builtin_types = function () {
            return (n.___embind_register_native_and_builtin_types =
              n.asm.__embind_register_native_and_builtin_types).apply(
              null,
              arguments,
            );
          };
          var Cr,
            Qr = (n.___errno_location = function () {
              return (Qr = n.___errno_location = n.asm.__errno_location).apply(
                null,
                arguments,
              );
            });
          function Ar(e) {
            function t() {
              Cr ||
                ((Cr = !0),
                (n.calledRun = !0),
                m ||
                  (n.noFSInit || fe.init.initialized || fe.init(),
                  (fe.ignorePermissions = !1),
                  oe(M),
                  r(n),
                  n.onRuntimeInitialized && n.onRuntimeInitialized(),
                  (function () {
                    if (n.postRun)
                      for (
                        'function' == typeof n.postRun &&
                        (n.postRun = [n.postRun]);
                        n.postRun.length;

                      )
                        K(n.postRun.shift());
                    oe(Y);
                  })()));
            }
            z > 0 ||
              ((function () {
                if (n.preRun)
                  for (
                    'function' == typeof n.preRun && (n.preRun = [n.preRun]);
                    n.preRun.length;

                  )
                    G(n.preRun.shift());
                oe(Z);
              })(),
              z > 0 ||
                (n.setStatus
                  ? (n.setStatus('Running...'),
                    setTimeout(function () {
                      setTimeout(function () {
                        n.setStatus('');
                      }, 1),
                        t();
                    }, 1))
                  : t()));
          }
          if (
            ((n.stackSave = function () {
              return (n.stackSave = n.asm.stackSave).apply(null, arguments);
            }),
            (n.stackRestore = function () {
              return (n.stackRestore = n.asm.stackRestore).apply(
                null,
                arguments,
              );
            }),
            (n.stackAlloc = function () {
              return (n.stackAlloc = n.asm.stackAlloc).apply(null, arguments);
            }),
            (n.dynCall_iij = function () {
              return (n.dynCall_iij = n.asm.dynCall_iij).apply(null, arguments);
            }),
            (n.dynCall_jiji = function () {
              return (n.dynCall_jiji = n.asm.dynCall_jiji).apply(
                null,
                arguments,
              );
            }),
            (n.dynCall_viijii = function () {
              return (n.dynCall_viijii = n.asm.dynCall_viijii).apply(
                null,
                arguments,
              );
            }),
            (n.dynCall_iiiiij = function () {
              return (n.dynCall_iiiiij = n.asm.dynCall_iiiiij).apply(
                null,
                arguments,
              );
            }),
            (n.dynCall_iiiiijj = function () {
              return (n.dynCall_iiiiijj = n.asm.dynCall_iiiiijj).apply(
                null,
                arguments,
              );
            }),
            (n.dynCall_iiiiiijj = function () {
              return (n.dynCall_iiiiiijj = n.asm.dynCall_iiiiiijj).apply(
                null,
                arguments,
              );
            }),
            (n.stringToUTF8 = B),
            (n.lengthBytesUTF8 = C),
            (n.addRunDependency = $),
            (n.removeRunDependency = ee),
            (n.FS_createPath = fe.createPath),
            (n.FS_createDataFile = fe.createDataFile),
            (n.FS_createPreloadedFile = fe.createPreloadedFile),
            (n.FS_createLazyFile = fe.createLazyFile),
            (n.FS_createDevice = fe.createDevice),
            (n.FS_unlink = fe.unlink),
            (n.addFunction = function (e, r) {
              return (function (e, r) {
                if (!E) {
                  E = new WeakMap();
                  for (var t = 0; t < S.length; t++) {
                    var n = S.get(t);
                    n && E.set(n, t);
                  }
                }
                if (E.has(e)) return E.get(e);
                var o = (function () {
                  if (h.length) return h.pop();
                  try {
                    S.grow(1);
                  } catch (e) {
                    if (!(e instanceof RangeError)) throw e;
                    throw 'Unable to grow wasm table. Set ALLOW_TABLE_GROWTH.';
                  }
                  return S.length - 1;
                })();
                try {
                  S.set(o, e);
                } catch (t) {
                  if (!(t instanceof TypeError)) throw t;
                  var a = (function (e, r) {
                    if ('function' == typeof WebAssembly.Function) {
                      for (
                        var t = { i: 'i32', j: 'i64', f: 'f32', d: 'f64' },
                          n = {
                            parameters: [],
                            results: 'v' == r[0] ? [] : [t[r[0]]],
                          },
                          o = 1;
                        o < r.length;
                        ++o
                      )
                        n.parameters.push(t[r[o]]);
                      return new WebAssembly.Function(n, e);
                    }
                    var a = [1, 0, 1, 96],
                      i = r.slice(0, 1),
                      s = r.slice(1),
                      u = { i: 127, j: 126, f: 125, d: 124 };
                    for (a.push(s.length), o = 0; o < s.length; ++o)
                      a.push(u[s[o]]);
                    'v' == i ? a.push(0) : (a = a.concat([1, u[i]])),
                      (a[1] = a.length - 2);
                    var l = new Uint8Array(
                        [0, 97, 115, 109, 1, 0, 0, 0].concat(
                          a,
                          [
                            2, 7, 1, 1, 101, 1, 102, 0, 0, 7, 5, 1, 1, 102, 0,
                            0,
                          ],
                        ),
                      ),
                      c = new WebAssembly.Module(l);
                    return new WebAssembly.Instance(c, { e: { f: e } }).exports
                      .f;
                  })(e, r);
                  S.set(o, a);
                }
                return E.set(e, o), o;
              })(e, r);
            }),
            (_ = function e() {
              Cr || Ar(), Cr || (_ = e);
            }),
            (n.run = Ar),
            n.preInit)
          )
            for (
              'function' == typeof n.preInit && (n.preInit = [n.preInit]);
              n.preInit.length > 0;

            )
              n.preInit.pop()();
          return Ar(), e.ready;
        }),
        (n.exports = a);
      const s = i.exports,
        u = Object.freeze(
          (function (e, r) {
            for (var t = 0; t < r.length; t++) {
              const n = r[t];
              if ('string' != typeof n && !Array.isArray(n))
                for (const r in n)
                  if ('default' !== r && !(r in e)) {
                    const t = Object.getOwnPropertyDescriptor(n, r);
                    t &&
                      Object.defineProperty(
                        e,
                        r,
                        t.get ? t : { enumerable: !0, get: () => n[r] },
                      );
                  }
            }
            return Object.freeze(e);
          })({ __proto__: null, default: s }, [i.exports]),
        );
    },
  },
]);
