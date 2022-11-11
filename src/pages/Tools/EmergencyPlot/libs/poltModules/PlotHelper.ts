/**
 * 动态标绘公用辅助工具类
 *
 * @class PlotHelper
 */

class PlotHelper {
  LEFT_SIDE = 'left';
  RIGHT_SIDE = 'right';
  USE_BEZIER_FIT = 'useBezierFit';
  USE_BSPLINE_FIT = 'useBSplieFit';

  constructor(private options?: any) {
    this.options = Object.assign({}, options);
  }

  /**
   * 根据起始点、结束点、偏移角度、距离、方向（左侧或右侧）计算第三点
   *
   * @param {object} startPnt - 起点
   * @param {object} endPnt - 终点
   * @param {number} angle 偏移角度
   * @param {number} length 长度
   * @param {string} side 方向(LEFT_SIDE,RIGHT_SIDE)
   * @return {object} 计算点
   */
  getThirdPoint(
    startPnt: any,
    endPnt: any,
    angle: any,
    length: any,
    side: any,
  ) {
    // 阿尔法，(希腊语的第一个字母，在数学中一般用来表示角度)
    let alpha;
    //
    let azimuth: any = this.getAzimuthAngle(startPnt, endPnt);
    if (side === this.LEFT_SIDE) {
      alpha = azimuth + angle;
    } else {
      alpha = azimuth - angle;
    }
    let dx = length * Math.cos(alpha);
    let dy = length * Math.sin(alpha);
    let x = endPnt.x + dx;
    let y = endPnt.y + dy;
    let point = {
      x: x,
      y: y,
    };
    return point;
  }

  /**
   * 根据起始点、结束点计算方位角(此方法算出角度不是坐标方位角，还没弄明白为什么这么计算)
   *
   * @param {object} startPnt - 起点
   * @param {object} endPnt - 终点
   * @return {number} 方位角
   */
  getAzimuthAngle(startPnt: any, endPnt: any) {
    // 定义方位角
    let azimuth;
    // 两点连线与水平线夹角（锐角）
    let angle = Math.asin(
      Math.abs(endPnt.y - startPnt.y) / this.distance(startPnt, endPnt),
    );
    // 根据终点在起点的四个象限计算方位角
    // 第一象限
    if (endPnt.y >= startPnt.y && endPnt.x >= startPnt.x) {
      azimuth = angle + Math.PI;
    }
    // 第二象限
    else if (endPnt.y >= startPnt.y && endPnt.x < startPnt.x) {
      azimuth = 2 * Math.PI - angle;
    }
    // 第三象限
    else if (endPnt.y < startPnt.y && endPnt.x < startPnt.x) {
      azimuth = angle;
    }
    // 第四象限
    else if (endPnt.y < startPnt.y && endPnt.x >= startPnt.x) {
      azimuth = Math.PI - angle;
    }
    return azimuth;
  }

  /**
   * 获取箭头头部点组
   * @param {object} points 控制点数组组
   * @param {number} headHeightFactor 头部高度因子
   * @param {number} headWidthFactor 头部宽度因子
   * @param {number} neckHeightFactor 肩部高度因子
   * @param {number} neckWidthFactor 肩部宽度因子
   * @return {object} 箭头头部点数组
   */
  getArrowHeadPoints(
    points: any,
    headHeightFactor: any,
    headWidthFactor: any,
    neckHeightFactor: any,
    neckWidthFactor: any,
  ) {
    // 控制点总距离
    let allLen = this.getBaseLength(points);
    // 头部高度
    let headHeight = allLen * headHeightFactor;
    // 头部宽度
    let headWidth = headHeight * headWidthFactor;
    // 肩部宽度
    let neckWidth = headHeight * neckWidthFactor;
    // 控制点数组长度
    let n = points.length;
    // 头部顶点
    let headPnt = points[n - 1];
    let len = this.distance(headPnt, points[n - 2]);
    // 头部高度
    headHeight = headHeight > len ? len : headHeight;
    // 肩部高度
    let neckHeight = headHeight * neckHeightFactor;
    // 计算箭头上各点
    let headEndPnt = this.getThirdPoint(
      points[n - 2],
      headPnt,
      0,
      headHeight,
      this.LEFT_SIDE,
    );
    let neckEndPnt = this.getThirdPoint(
      points[n - 2],
      headPnt,
      0,
      neckHeight,
      this.LEFT_SIDE,
    );
    let headLeftPnt = this.getThirdPoint(
      headPnt,
      headEndPnt,
      Math.PI * 1.5,
      headWidth,
      this.RIGHT_SIDE,
    );
    let neckLeftPnt = this.getThirdPoint(
      headPnt,
      neckEndPnt,
      Math.PI * 1.5,
      neckWidth,
      this.RIGHT_SIDE,
    );
    let headRightPnt = this.getThirdPoint(
      headPnt,
      headEndPnt,
      Math.PI * 1.5,
      headWidth,
      this.LEFT_SIDE,
    );
    let neckRightPnt = this.getThirdPoint(
      headPnt,
      neckEndPnt,
      Math.PI * 1.5,
      neckWidth,
      this.LEFT_SIDE,
    );
    let headPoints = [];
    headPoints.push(
      neckLeftPnt,
      headLeftPnt,
      headPnt,
      headRightPnt,
      neckRightPnt,
    );
    return headPoints;
  }

  /**
   * 获取箭身点组
   * @param {object} points 控制点数组组
   * @param {object} neckLeftPoint 肩部左侧点
   * @param {object} neckRightPoint 肩部右侧点
   * @param {number} tailWidthFactor 尾部宽度因子
   * @param {number} leftFactor 尾部宽度因子
   * @param {number} rightFactor 肩部宽度因子
   * @return {object} 箭身点数组
   */
  getArrowBodyPoints(
    points: any,
    neckLeftPoint: any,
    neckRightPoint: any,
    tailWidthFactor: any,
    leftFactor: any,
    rightFactor: any,
  ) {
    let angle;
    let w;
    let allLen = this.wholeDistance(points);
    let len = this.getBaseLength(points);
    let tailWidth = len * tailWidthFactor;
    let neckWidth = this.distance(neckLeftPoint, neckRightPoint);
    let widthDif = tailWidth - neckWidth / 2;
    let tempLen = 0;
    let lPoints = [];
    let rPoints = [];
    let j = 1;
    while (j < points.length - 1) {
      angle =
        this.getAngleOfThreePoints(points[j - 1], points[j], points[j + 1]) / 2;
      tempLen = tempLen + this.distance(points[j - 1], points[j]);
      w = (tailWidth - (tempLen / allLen) * widthDif) / Math.sin(angle);
      lPoints.push(
        this.getThirdPoint(
          points[j - 1],
          points[j],
          angle,
          w * leftFactor,
          this.RIGHT_SIDE,
        ),
      );
      rPoints.push(
        this.getThirdPoint(
          points[j - 1],
          points[j],
          Math.PI - angle,
          w * rightFactor,
          this.LEFT_SIDE,
        ),
      );
      j++;
    }
    return lPoints.concat(rPoints);
  }

  // 根据贝塞尔曲线方程计算曲线
  getBezierPoints(points: any) {
    let x;
    let y;
    let index;
    let factor;
    let a;
    let b;
    if (points.length <= 2) {
      return points;
    }
    let bezierPoints = [];
    let n = points.length - 1;
    let t = 0;
    while (t <= 1) {
      x = 0;
      y = 0;
      index = 0;
      while (index <= n) {
        factor = this.getBinomialFactor(n, index);
        a = Math.pow(t, index);
        b = Math.pow(1 - t, n - index);
        x = x + factor * a * b * points[index].x;
        y = y + factor * a * b * points[index].y;
        index++;
      }
      bezierPoints.push({
        x: x,
        y: y,
      });
      t = t + 0.01;
    }
    bezierPoints.push(points[n]);
    return bezierPoints;
  }

  getAdvancedBezierPoints(points: any) {
    let l1;
    let l2;
    let d12;
    let d1;
    let dx;
    let dy;
    points = points.slice();
    let n = points.length;
    points.push(points[0]);
    let aPnts = [];
    let i = 0;
    while (i < n) {
      aPnts.push(this.getMidPoint(points[i], points[i + 1]));
      i++;
    }
    aPnts.push(aPnts[0]);
    points.push(points[1]);
    let bPnts = [];
    i = 0;
    while (i < n) {
      l1 = this.distance(points[i], points[i + 1]);
      l2 = this.distance(points[i + 1], points[i + 2]);
      d12 = this.distance(aPnts[i], aPnts[i + 1]);
      d1 = (d12 * l1) / (l1 + l2);
      bPnts.push(
        this.getThirdPoint(aPnts[i + 1], aPnts[i], 0, d1, this.LEFT_SIDE),
      );
      i++;
    }
    let mPnts = [];
    i = 0;
    while (i < n) {
      dx = points[i + 1].x - bPnts[i].x;
      dy = points[i + 1].y - bPnts[i].y;
      mPnts.push({
        x: aPnts[i].x + dx,
        y: aPnts[i].y + dy,
      });
      mPnts.push(points[i + 1]);
      mPnts.push({
        x: aPnts[i + 1].x + dx,
        y: aPnts[i + 1].y + dy,
      });
      i++;
    }
    let bezierPnts: any[] = [];
    let pnts = mPnts.slice();
    pnts.push(mPnts[0], mPnts[1]);
    i = 1;
    while (i < pnts.length) {
      bezierPnts = bezierPnts.concat(
        this.getBezierPoints(pnts.slice(i, i + 4)),
      );
      i = i + 3;
    }
    return bezierPnts;
  }

  getBinomialFactor(n: any, index: any) {
    return (
      this.getFactorial(n) /
      (this.getFactorial(index) * this.getFactorial(n - index))
    );
  }

  getFactorial(n: any) {
    if (n <= 1) {
      return 1;
    }
    if (n === 2) {
      return 2;
    }
    if (n === 3) {
      return 6;
    }
    if (n === 4) {
      return 24;
    }
    if (n === 5) {
      return 120;
    }
    let result = 1;
    let i = 1;
    while (i <= n) {
      result = result * i;
      i++;
    }
    return result;
  }

  getAngleOfThreePoints(pntA: any, pntB: any, pntC: any) {
    let azimuthAngle1: any = this.getAzimuthAngle(pntB, pntA),
      azimuthAngle2: any = this.getAzimuthAngle(pntB, pntC);

    let angle = azimuthAngle1 - azimuthAngle2;
    if (angle < 0) {
      angle = angle + Math.PI * 2;
    }
    return angle;
  }

  /**
   * 根据两点计算距离
   * @param {object} pnt1 点1
   * @param {object} pnt2 点2
   * @return {number} 距离
   */
  distance(pnt1: any, pnt2: any) {
    // 两点距离公式
    return Math.sqrt(
      Math.pow(pnt1.x - pnt2.x, 2) + Math.pow(pnt1.y - pnt2.y, 2),
    );
  }

  /**
   * 根据两点计算中心点
   * @param {object} pnt1 点1
   * @param {object} pnt2 点2
   * @return {object} midPoint
   */
  getMidPoint(pnt1: any, pnt2: any) {
    return {
      x: (pnt1.x + pnt2.x) / 2,
      y: (pnt1.y + pnt2.y) / 2,
    };
  }

  /**
   * 计算点组总距离
   * @param {object} points 点组
   * @return {number} 总距离
   */
  getBaseLength(points: any) {
    let distance = this.wholeDistance(points);
    return distance;
  }

  /**
   * 计算点组所有点间总距离
   * @param {object} points 点组
   * @return {number} 总距离
   */
  wholeDistance(points: any) {
    if (points.length <= 1) {
      return 0;
    }
    let value = 0;
    let i = 0;
    while (i < points.length - 1) {
      value = value + this.distance(points[i], points[i + 1]);
      i++;
    }
    return value;
  }

  plotPrint() {
    //
  }
}

export default PlotHelper;
