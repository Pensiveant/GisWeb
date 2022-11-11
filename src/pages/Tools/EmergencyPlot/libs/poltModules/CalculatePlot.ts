import Point from '@arcgis/core/geometry/Point';

let b: any = null;
const newPoint = (x: any, y: any, spatialReference?: any) => {
  return new Point({ x, y, spatialReference });
};

class CalculatePlot {
  TWO_PI = 6.28318530717959;
  HALF_PI = 1.5707963267949;
  FITTING_COUNT = 100;
  ZERO_TOLERANCE = 0.0001;

  fa(c: any, d: any) {
    return Math.sqrt(Math.pow(c.x - d.x, 2) + Math.pow(c.y - d.y, 2));
  }

  fb(d: any) {
    var e = 0;
    var c = 0;
    while (c < d.length - 1) {
      e = e + this.fa(d[c], d[c + 1]);
      c++;
    }
    return e;
  }

  fc(c: any, d: any) {
    return newPoint((c.x + d.x) / 2, (c.y + d.y) / 2, c.spatialReference);
  }

  fd(c: any) {
    return Math.pow(this.fb(c), 0.99);
  }

  fe(c: any, i: any, h: any) {
    var g = newPoint((c.x + i.x) / 2, (c.y + i.y) / 2, c.spatialReference);
    var f = newPoint(g.x - c.y + i.y, g.y + c.x - i.x, c.spatialReference);
    var e = newPoint((c.x + h.x) / 2, (c.y + h.y) / 2, c.spatialReference);
    var d = newPoint(e.x - c.y + h.y, e.y + c.x - h.x, c.spatialReference);
    return this.ff(g, f, e, d);
  }

  ff(i: any, h: any, g: any, d: any) {
    var j;
    var c;
    var l;
    var k;
    if (i.y === h.y) {
      j = (d.x - g.x) / (d.y - g.y);
      c = j * (i.y - g.y) + g.x;
      l = i.y;
      return newPoint(c, l, i.spatialReference);
    }
    if (g.y === d.y) {
      k = (h.x - i.x) / (h.y - i.y);
      c = k * (g.y - i.y) + i.x;
      l = g.y;
      return newPoint(c, l, i.spatialReference);
    }
    k = (h.x - i.x) / (h.y - i.y);
    j = (d.x - g.x) / (d.y - g.y);
    l = (k * i.y - i.x - j * g.y + g.x) / (k - j);
    c = k * l - k * i.y + i.x;
    return newPoint(c, l, i.spatialReference);
  }

  fg(d: any, c: any) {
    var e;
    var f = Math.asin(Math.abs(c.y - d.y) / this.fa(d, c));
    if (c.y >= d.y && c.x >= d.x) {
      e = f + Math.PI;
    } else {
      if (c.y >= d.y && c.x < d.x) {
        e = this.TWO_PI - f;
      } else {
        if (c.y < d.y && c.x < d.x) {
          e = f;
        } else {
          if (c.y < d.y && c.x >= d.x) {
            e = Math.PI - f;
          }
        }
      }
    }
    return e;
  }

  fh(e: any, d: any, c: any) {
    let fg1: any = this.fg(d, e),
      fg2: any = this.fg(d, c);
    var f = fg1 - fg2;
    return f < 0 ? f + this.TWO_PI : f;
  }

  fi(c: any, e: any, d: any) {
    return (d.y - c.y) * (e.x - c.x) > (e.y - c.y) * (d.x - c.x);
  }

  fj(f: any, e: any, d: any) {
    var c = e.x + f * (d.x - e.x);
    var g = e.y + f * (d.y - e.y);
    return newPoint(c, g, e.spatialReference);
  }

  fk(n: any, l: any, m: any, k: any, f: any) {
    n = Math.max(Math.min(n, 1), 0);
    var j = 1 - n;
    var g = n * n;
    var e = g * n;
    var d = j * j;
    var c = d * j;
    var i = c * l.x + 3 * d * n * m.x + 3 * j * g * k.x + e * f.x;
    var h = c * l.y + 3 * d * n * m.y + 3 * j * g * k.y + e * f.y;
    return newPoint(i, h, l.spatialReference);
  }

  fl(h: any, g: any, d: any, c: any, f: any) {
    if (typeof f === 'undefined' || f == null || f === undefined) {
      f = true;
    }
    var j: any = this.fg(h, g);
    var e = f ? j + d : j - d;
    var k = c * Math.cos(e);
    var i = c * Math.sin(e);
    return newPoint(g.x + k, g.y + i, h.spatialReference);
  }

  fm(c: any, j: any, k: any, d: any) {
    var m;
    var l;
    var e;
    var f = [];
    var h = d - k;
    h = h < 0 ? h + this.TWO_PI : h;
    var g = 0;
    while (g <= this.FITTING_COUNT) {
      e = k + (h * g) / this.FITTING_COUNT;
      m = c.x + j * Math.cos(e);
      l = c.y + j * Math.sin(e);
      f.push(newPoint(m, l));
      g++;
    }
    return f;
  }

  fn(q: any, h: any, f: any, e: any) {
    var g;
    var p;
    var n;
    var k;
    var o;
    var l = this.fo(h, f, e);
    var m = Math.sqrt(l.x * l.x + l.y * l.y);
    var j = l.x / m;
    var i = l.y / m;
    var d = this.fa(h, f);
    var c = this.fa(f, e);
    if (m > this.ZERO_TOLERANCE) {
      if (this.fi(h, f, e)) {
        g = q * d;
        p = f.x - g * i;
        n = f.y + g * j;
        k = newPoint(p, n, f.spatialReference);
        g = q * c;
        p = f.x + g * i;
        n = f.y - g * j;
        o = newPoint(p, n, f.spatialReference);
      } else {
        g = q * d;
        p = f.x + g * i;
        n = f.y - g * j;
        k = newPoint(p, n, f.spatialReference);
        g = q * c;
        p = f.x - g * i;
        n = f.y + g * j;
        o = newPoint(p, n, f.spatialReference);
      }
    } else {
      p = f.x + q * (h.x - f.x);
      n = f.y + q * (h.y - f.y);
      k = newPoint(p, n, f.spatialReference);
      p = f.x + q * (e.x - f.x);
      n = f.y + q * (e.y - f.y);
      o = newPoint(p, n, f.spatialReference);
    }
    return [k, o];
  }

  fo(g: any, f: any, e: any) {
    var m = g.x - f.x;
    var k = g.y - f.y;
    var d = Math.sqrt(m * m + k * k);
    m = m / d;
    k = k / d;
    var l = e.x - f.x;
    var j = e.y - f.y;
    var c = Math.sqrt(l * l + j * j);
    l = l / c;
    j = j / c;
    var i = m + l;
    var h = k + j;
    return newPoint(i, h, f.spatialReference);
  }

  fp(n: any, p: any) {
    var f;
    var e;
    var d;
    var j;
    var l = 0;
    var c;
    var h = this.fq(p);
    var k = [h];
    var g = 0;
    while (g < p.length - 2) {
      f = p[g];
      e = p[g + 1];
      d = p[g + 2];
      j = this.fn(n, f, e, d);
      k = k.concat(j);
      g++;
    }
    var o = this.fr(p);
    k.push(o);
    var m = [];
    g = 0;
    while (g < p.length - 1) {
      f = p[g];
      e = p[g + 1];
      m.push(f);
      l = 0;
      while (l < this.FITTING_COUNT) {
        c = this.fk(l / this.FITTING_COUNT, f, k[g * 2], k[g * 2 + 1], e);
        m.push(c);
        l++;
      }
      m.push(e);
      g++;
    }
    return m;
  }

  fq(s: any, l?: any) {
    if (typeof l === 'undefined' || l == null || l === undefined) {
      l = 0;
    }
    var v;
    var h;
    var g;
    var A;
    var u;
    var p;
    var m;
    var j;
    var i;
    var q;
    var f;
    var e;
    var d;
    var c;
    var z = s[0];
    var x = s[1];
    var w = s[2];
    var o = this.fn(l, z, x, w);
    var k = o[0];
    var y = this.fo(z, x, w);
    var r = Math.sqrt(y.x * y.x + y.y * y.y);
    if (r > this.ZERO_TOLERANCE) {
      v = this.fc(z, x);
      h = z.x - v.x;
      g = z.y - v.y;
      A = this.fa(z, x);
      u = 2 / A;
      p = -u * g;
      m = u * h;
      j = p * p - m * m;
      i = 2 * p * m;
      q = m * m - p * p;
      f = k.x - v.x;
      e = k.y - v.y;
      d = v.x + j * f + i * e;
      c = v.y + i * f + q * e;
    } else {
      d = z.x + l * (x.x - z.x);
      c = z.y + l * (x.y - z.y);
    }
    return newPoint(d, c, z.spatialReference);
  }

  fr(s: any, l?: any) {
    if (typeof l === 'undefined' || l == null || l === undefined) {
      l = 0;
    }
    var w;
    var h;
    var g;
    var B;
    var u;
    var p;
    var m;
    var j;
    var i;
    var q;
    var f;
    var e;
    var d;
    var c;
    var k = s.length;
    var A = s[k - 3];
    var y = s[k - 2];
    var x = s[k - 1];
    var o = this.fn(l, A, y, x);
    var v = o[1];
    var z = this.fo(A, y, x);
    var r = Math.sqrt(z.x * z.x + z.y * z.y);
    if (r > this.ZERO_TOLERANCE) {
      w = this.fc(y, x);
      h = x.x - w.x;
      g = x.y - w.y;
      B = this.fa(y, x);
      u = 2 / B;
      p = -u * g;
      m = u * h;
      j = p * p - m * m;
      i = 2 * p * m;
      q = m * m - p * p;
      f = v.x - w.x;
      e = v.y - w.y;
      d = w.x + j * f + i * e;
      c = w.y + i * f + q * e;
    } else {
      d = x.x + l * (y.x - x.x);
      c = x.y + l * (y.y - x.y);
    }
    return newPoint(d, c, x.spatialReference);
  }

  fs(k: any) {
    var j;
    var f;
    var d = 0;
    var e;
    var i;
    var g;
    if (k.length <= 2) {
      return k;
    }
    var h = [];
    var c = k.length - 1;
    var l = 0;
    while (l <= 1) {
      j = 0;
      f = 0;
      d = 0;
      while (d <= c) {
        e = this.ft(c, d);
        i = Math.pow(l, d);
        g = Math.pow(1 - l, c - d);
        j = j + e * i * g * k[d].x;
        f = f + e * i * g * k[d].y;
        d++;
      }
      h.push(newPoint(j, f, k[0].spatialReference));
      l = l + 0.01;
    }
    h.push(k[c]);
    return h;
  }

  ft(d: any, c: any) {
    return this.fu(d) / (this.fu(c) * this.fu(d - c));
  }

  fu(e: any) {
    if (e <= 1) {
      return 1;
    }
    if (e === 2) {
      return 2;
    }
    if (e === 3) {
      return 6;
    }
    if (e === 4) {
      return 24;
    }
    if (e === 5) {
      return 120;
    }
    var c = 1;
    var d = 1;
    while (d <= e) {
      c = c * d;
      d++;
    }
    return c;
  }

  fv(o: any) {
    var p;
    var l;
    var j;
    var f = 0;
    var h;
    if (o.length <= 2) {
      return o;
    }
    var c = 2;
    var e = [];
    var d = o.length - c - 1;
    e.push(o[0]);
    var g = 0;
    while (g <= d) {
      p = 0;
      while (p <= 1) {
        l = 0;
        j = 0;
        f = 0;
        while (f <= c) {
          h = this.fw(f, p);
          l = l + h * o[g + f].x;
          j = j + h * o[g + f].y;
          f++;
        }
        e.push(newPoint(l, j));
        p = p + 0.05;
      }
      g++;
    }
    e.push(o[o.length - 1]);
    return e;
  }

  fw(c: any, d: any) {
    if (c === 0) {
      return Math.pow(d - 1, 2) / 2;
    }
    if (c === 1) {
      return (-2 * Math.pow(d, 2) + 2 * d + 1) / 2;
    }
    if (c === 2) {
      return Math.pow(d, 2) / 2;
    }
    return 0;
  }
}

export default CalculatePlot;
