/**
 * 应急标绘 组件
 */

import React, { useState, useEffect, useRef } from 'react';
import { Tooltip, message } from 'antd';
import { CSSTransition } from 'react-transition-group';

import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';
import SketchViewModel from '@arcgis/core/widgets/Sketch/SketchViewModel';
import Graphic from '@arcgis/core/Graphic';
import Polyline from '@arcgis/core/geometry/Polyline';

import PlotDrawTool from './libs/poltModules/PlotDrawTool';
import DashedTool from './DashedTool'; // 虚线箭头
import Icons from './Icons';
import styles from './index.less';
import PointSymbolEditor from './components/PointSymbolEditor/index'; // 点符号编辑器
import PolylineSymbolEditor from './components/PolylineSymbolEditor/index'; // 线符号编辑器
import PolygonSymbolEditor from './components/PolygonSymbolEditor/index'; // 面符号编辑器
import TextSymbolEditor from './components/TextSymbolEditor/index'; // 文本符号编辑器
import SVGSymbolEditor from './components/SVGSymbolEditor/index'; // SVG符号编辑器
import IconSymbolEditor from './components/IconSymbolEditor/index'; // Icon 符号编辑器
import PictureSymbolEditor from './components/PictureSymbolEditor/index'; // 图片符号编辑器
import threedBurgeeImg from './image/qizhi.png';
import MyButton from '@/components/App/MyButton';
import plotDistance from './util/plotDistance';

let sketchViewModel: any = null;

const LOCAL_STORAGE_KEY = 'PLOTTING_GRAPHICS'; // 本地存储标绘图形的键值名称
const PLOT_TEMP_LAYER_ID = 'PLOT_TEMP_LAYER_ID'; // 标绘临时图层
const PLOT_TEMP_LAYER_TITLE = '标绘临时图层'; // 标绘临时图层标题
const symbol: any = {};
const PloltItemList = [
  {
    title: '绘点',
    key: 'point',
    icon: <Icons.Dian />,
  },
  {
    title: '绘线',
    key: 'polyline',
    icon: <Icons.Xian />,
  },
  {
    title: '虚线',
    key: 'straight_dashed',
    icon: <Icons.XuXian />,
  },
  {
    title: '虚线面',
    key: 'straight_dashed_plane',
    icon: <Icons.XuXianMian />,
  },
  {
    title: '绘面',
    key: 'polygon',
    icon: <Icons.Mian />,
  },
  {
    title: '矩形',
    key: 'rectangle',
    icon: <Icons.JuXing />,
  },
  {
    title: '虚线矩形',
    key: 'dashed_rectangle',
    icon: <Icons.XuXianJuXing />,
  },
  {
    title: '圆形',
    key: 'circle',
    icon: <Icons.Yuan />,
  },
  {
    title: '虚线圆',
    key: 'circle_dashed',
    icon: <Icons.XuXianYuan />,
  },
  {
    title: '虚线面圆',
    key: 'circle_dashed_plane',
    icon: <Icons.XuXianMianYuan />,
  },
  {
    title: '普通箭头',
    key: 'general_arrow',
    icon: <Icons.JianTou />,
  },
  {
    title: '双箭头',
    key: 'double_arrow',
    icon: <Icons.ShuangJianTou />,
  },
  {
    title: '燕尾箭头',
    key: 'swallowtail_arrow',
    icon: <Icons.YanWeiJianTou />,
  },
  {
    title: '三角旗',
    key: '3dburgee',
    icon: <Icons.SanJiaoQi />,
  },
  {
    title: '文字',
    key: 'text',
    icon: <Icons.WenZi />,
  },
  {
    title: '直线箭头',
    key: 'straight_arrow',
    icon: <Icons.ZhiXianJianTou />,
  },
  {
    title: '曲线箭头',
    key: 'curve_arrow',
    icon: <Icons.QuXianJianTou />,
  },
  {
    title: '直虚线箭头',
    key: 'straight_dashed_arrow',
    icon: <Icons.ZhiXuXianJianTou />,
  },
  {
    title: '曲虚线箭头',
    key: 'curve_dashed_arrow',
    icon: <Icons.QuXuXianJianTou />,
  },
  {
    title: '直虚线面箭头',
    key: 'straight_dashed_plane_arrow',
    icon: <Icons.ZhiXuXianMianJianTou />,
  },
  {
    title: '曲虚线面箭头',
    key: 'curve_dashed_plane_arrow',
    icon: <Icons.QuXuXianMianJianTou />,
  },
  {
    title: '直线面箭头',
    key: 'straight_plane_arrow',
    icon: <Icons.ZhiXianMianJianTou />,
  },
  {
    title: '曲线面箭头',
    key: 'curve_plane_arrow',
    icon: <Icons.QuXianMianJianTou />,
  },
  // {
  //   title: '图片',
  //   key: 'picture',
  //   icon: <Icons.TuPian />,
  // },
];

const EmergencyPlot = ({ view, map, plotLayer }: any) => {
  const deleteHandler: any = useRef(null); // 点击选择删除的graphic的handler
  const editHandler: any = useRef(null); // 点击选择编辑的graphic的handler
  const [plotTempLayer, setPlotTempLayer] = useState<any>(null); // 标绘临时图层
  const [activePlotType, setActivePlotType] = useState(null); // 选中的标绘类型
  const [simpleMarkerSymbol, setSimpleMarkerSymbol] = useState({
    type: 'simple-marker',
  }); // 点符号
  const [simpleLineSymbol, setSimpleLineSymbol] = useState({
    type: 'simple-line',
  }); // 线符号
  const [simpleFillSymbol, setSimpleFillSymbol] = useState({
    type: 'simple-fill',
  }); // 面符号
  const [textSymbol, setTextSymbol] = useState({ type: 'text' }); // 文本符号
  const [SVGSymbol, setSVGSymbol] = useState({ type: 'simple-marker' }); // SVG符号
  const [IconSymbol, setIconSymbol] = useState({ type: 'picture-marker' });
  // 图片
  const [pictureSymbol, setPictureSymbol] = useState({});
  const [initEditorValues, setInitEditorValues] = useState({}); // 编辑器的初始化值

  useEffect(() => {
    initPlotTempLayer();
    DashedTool.createUpdateLineWatch(view);
    return () => {
      // 取消标绘
      clearSketchViewModel();
      // 移除删除graphic事件
      cancelDeleteHandler();
      // 移除编辑graphic事件
      cancelEditHandler();
      // 删除临时图层
      const tempLayer = map.findLayerById(PLOT_TEMP_LAYER_ID);
      if (tempLayer) {
        map.remove(tempLayer);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // 从localStorage中还原标绘内容
    if (plotLayer) {
      let graphicsJSON = localStorage.getItem(LOCAL_STORAGE_KEY);
      let layersGraphics: any = {};
      if (graphicsJSON) {
        layersGraphics = JSON.parse(graphicsJSON);
      }
      plotLayer.layers.forEach((layer: any) => {
        if (layer.graphics.length === 0 && layersGraphics[layer.id]) {
          layersGraphics[layer.id].forEach((item: any) => {
            let graphic = Graphic.fromJSON(item);
            if (
              graphic.attributes.type === 'straight_dashed' ||
              graphic.attributes.type === 'straight_dashed_arrow' ||
              graphic.attributes.type === 'curve_dashed_arrow' ||
              graphic.attributes.type === 'straight_arrow' ||
              graphic.attributes.type === 'curve_arrow' ||
              graphic.attributes.type === 'circle_dashed' ||
              graphic.attributes.type === 'dashed_rectangle'
            ) {
              graphic.visible = false;
            }
            layer.add(graphic);
          });
        }
      });

      DashedTool.updateLine(view);
    }
  }, [plotLayer, view]);

  useEffect(() => {
    symbol.simpleMarkerSymbol = simpleMarkerSymbol;
  }, [simpleMarkerSymbol]);

  // 及时更新线符号样式
  useEffect(() => {
    symbol.simpleLineSymbol = simpleLineSymbol;
    if (sketchViewModel) {
      sketchViewModel.polylineSymbol = symbol.simpleLineSymbol;
    }
  }, [simpleLineSymbol]);

  // 及时更新面符号样式
  useEffect(() => {
    symbol.simpleFillSymbol = simpleFillSymbol;
    if (sketchViewModel) {
      sketchViewModel.polygonSymbol = symbol.simpleFillSymbol;
      sketchViewModel.symbol = symbol.simpleFillSymbol; // 箭头symbol
    }
  }, [simpleFillSymbol]);

  useEffect(() => {
    symbol.textSymbol = textSymbol;
    if (sketchViewModel) {
      sketchViewModel.pointSymbol = symbol.textSymbol;
    }
  }, [textSymbol]);

  useEffect(() => {
    symbol.SVGSymbol = SVGSymbol;
  }, [SVGSymbol]);

  useEffect(() => {
    symbol.IconSymbol = IconSymbol;
  }, [IconSymbol]);

  useEffect(() => {
    symbol.pictureSymbol = pictureSymbol;
  }, [pictureSymbol]);

  // 清除sketchViewModel
  function clearSketchViewModel() {
    if (sketchViewModel) {
      sketchViewModel.cancel();
      sketchViewModel.destroy && sketchViewModel.destroy();
      sketchViewModel = null;
    }
  }

  // 取消删除graphic事件
  function cancelDeleteHandler() {
    if (deleteHandler.current) {
      deleteHandler.current.remove();
      deleteHandler.current = null;
    }
  }

  // 绑定graphic点击事件
  function createDeleteHandler() {
    cancelDeleteHandler();
    deleteHandler.current = view.on('click', function (event: any) {
      view.hitTest(event).then((response: any) => {
        let graphic: __esri.Graphic | null = null;
        let graphics = response.results.filter(
          (item: any) =>
            item.graphic.layer.parent &&
            item.graphic.layer.parent.id === plotLayer.id,
        );
        if (graphics.length > 0) {
          graphic = graphics[0].graphic as __esri.Graphic;

          if (
            graphic.attributes.type === 'straight_dashed' ||
            graphic.attributes.type === 'straight_dashed_arrow' ||
            graphic.attributes.type === 'curve_dashed_arrow' ||
            graphic.attributes.type === 'straight_arrow' ||
            graphic.attributes.type === 'curve_arrow' ||
            graphic.attributes.type === 'circle_dashed' ||
            graphic.attributes.type === 'dashed_rectangle'
          ) {
            let remove = (graphic.layer as __esri.GraphicsLayer).graphics.find(
              (item) =>
                item.attributes.id === graphic?.attributes.id && !item.visible,
            );
            (graphic.layer as __esri.GraphicsLayer).remove(remove);
          }
          const layerId = graphic.layer.id;
          (graphic.layer as __esri.GraphicsLayer).remove(graphic);
        }
      });
    });
  }

  // 取消graphic编辑点击事件
  function cancelEditHandler() {
    if (editHandler.current) {
      editHandler.current.remove();
      editHandler.current = null;
    }
  }

  // 绑定graphic编辑点击事件
  function createEditHandler() {
    cancelEditHandler();
    editHandler.current = view.on('click', (event: any) => {
      view.hitTest(event).then((response: any) => {
        let graphic: any = null;
        let graphics = response.results.filter(
          (item: any) =>
            item.graphic.layer.parent &&
            item.graphic.layer.parent.id === plotLayer.id,
        );
        if (graphics.length > 0) {
          graphic = graphics[0].graphic;
          if (
            graphic.attributes.type === 'straight_dashed' ||
            graphic.attributes.type === 'straight_dashed_arrow' ||
            graphic.attributes.type === 'curve_dashed_arrow' ||
            graphic.attributes.type === 'straight_arrow' ||
            graphic.attributes.type === 'curve_arrow' ||
            graphic.attributes.type === 'circle_dashed' ||
            graphic.attributes.type === 'dashed_rectangle'
          ) {
            graphic = graphic.layer.graphics.find(
              (item: any) =>
                item.attributes.id === graphic.attributes.id && !item.visible,
            );
            graphic.visible = true;
            DashedTool.updateLine(view);
          }
          editGraphic(graphic);
        }
      });
    });
  }

  // 编辑graphic
  function editGraphic(graphic: any) {
    // 设置编辑器回填值
    let editorValues: any = {};
    let activeTool: any = 'reshape'; // 指定选定图形的更新操作名称
    switch (graphic.attributes.type) {
      case 'point':
        editorValues.color = graphic.symbol.color;
        editorValues.size = graphic.symbol.size;
        editorValues.outlineColor = graphic.symbol.outline.color;
        editorValues.outlineWidth = graphic.symbol.outline.width;
        activeTool = 'move';
        break;
      case 'polyline':
      case 'straight_dashed':
      case 'straight_dashed_arrow':
      case 'curve_dashed_arrow':
      case 'straight_arrow':
      case 'curve_arrow':
      case 'circle_dashed':
      case 'dashed_rectangle':
        editorValues.color = graphic.symbol.color;
        editorValues.width = graphic.symbol.width;
        break;
      case 'polygon':
      case 'rectangle':
      case 'circle':
      case 'general_arrow':
      case 'swallowtail_arrow':
      case 'double_arrow':
      case 'straight_dashed_plane_arrow':
      case 'curve_dashed_plane_arrow':
      case 'curve_plane_arrow':
      case 'straight_plane_arrow':
      case 'circle_dashed_plane':
      case 'straight_dashed_plane':
        editorValues.color = graphic.symbol.color;
        editorValues.outlineColor = graphic.symbol.outline.color;
        editorValues.outlineWidth = graphic.symbol.outline.width;
        break;
      case '3dburgee':
        editorValues.size = graphic.symbol.size;
        activeTool = 'move';
        break;
      case 'text':
        editorValues.color = graphic.symbol.color;
        editorValues.haloColor = graphic.symbol.haloColor;
        editorValues.fontSize = graphic.symbol.font.size;
        editorValues.text = graphic.symbol.text;
        activeTool = 'move';
        break;
      default:
        break;
    }
    setInitEditorValues(editorValues);
    setActivePlotType(graphic.attributes.type);
    plotTempLayer.add(graphic);
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer as any,
      view: view,
    });
    sketchVM.on('update', (event: any) => {
      if (event.state === 'complete' || event.state === 'cancel') {
        let newGraphic = event.graphics[0];
        if (
          newGraphic.attributes.type === 'straight_dashed' ||
          newGraphic.attributes.type === 'straight_dashed_arrow' ||
          newGraphic.attributes.type === 'curve_dashed_arrow' ||
          newGraphic.attributes.type === 'straight_arrow' ||
          newGraphic.attributes.type === 'curve_arrow' ||
          newGraphic.attributes.type === 'circle_dashed' ||
          newGraphic.attributes.type === 'dashed_rectangle'
        ) {
          newGraphic.visible = false;
        }
        sketchViewModelOnComplete(newGraphic, true);
        sketchVM.destroy();
      }
    });
    sketchVM.update([graphic], { tool: activeTool });
  }

  /**
   * sketchViewModel完成回调
   * @param {object} graphic graphic对象
   * @param {boolean} isUpdate 是否是更新
   * @return {void}
   */
  function sketchViewModelOnComplete(graphic: any, isUpdate: any) {
    let type = graphic.attributes.type;
    let layer;
    switch (type) {
      case 'point':
        graphic.symbol = symbol.simpleMarkerSymbol;
        layer = plotLayer.layers.find(
          (l: any) => l.id === 'plottingPointLayer',
        ); // 标绘点图层
        break;
      case 'polyline':
      case 'straight_dashed':
      case 'straight_dashed_arrow':
      case 'curve_dashed_arrow':
      case 'straight_arrow':
      case 'curve_arrow':
      case 'circle_dashed':
      case 'dashed_rectangle':
        graphic.symbol = symbol.simpleLineSymbol;
        layer = plotLayer.layers.find((l: any) => l.id === 'plottingLineLayer'); // 标绘线图层
        break;
      case 'polygon':
      case 'rectangle':
      case 'circle':
      case 'straight_dashed_plane_arrow':
      case 'curve_dashed_plane_arrow':
      case 'curve_plane_arrow':
      case 'straight_plane_arrow':
      case 'circle_dashed_plane':
      case 'straight_dashed_plane':
        graphic.symbol = symbol.simpleFillSymbol;
        layer = plotLayer.layers.find(
          (l: any) => l.id === 'plottingPolygonLayer',
        ); // 标绘面图层
        break;
      case 'general_arrow':
      case 'double_arrow':
      case 'swallowtail_arrow':
        graphic.symbol = symbol.simpleFillSymbol;
        layer = plotLayer.layers.find(
          (l: any) => l.id === 'plottingSituationLayer',
        ); // 标绘态势图层
        break;
      case '3dburgee':
        graphic.symbol = Object.assign({}, symbol.IconSymbol, {
          url: threedBurgeeImg,
          width: `${(4 / 16) * symbol.IconSymbol.size}px`,
          height: `${symbol.IconSymbol.size / 2 - 2}px`,
        });
        layer = plotLayer.layers.find(
          (l: any) => l.id === 'plottingSituationLayer',
        ); // 标绘态势图层
        break;
      case 'text':
        if (!symbol.textSymbol.text.trim()) {
          message.warning('请输入文本内容');
          return;
        } else {
          graphic.symbol = symbol.textSymbol;
          layer = plotLayer.layers.find(
            (l: any) => l.id === 'plottingTextLayer',
          ); // 标绘文字图层
        }
        break;
      default:
        break;
    }
    plotTempLayer.remove(graphic);
    if (layer) {
      layer.add(graphic);
    }
    if (isUpdate) {
      // 清除编辑的handler
      cancelEditHandler();
      // 清除sketchViewModel
      clearSketchViewModel();
      setActivePlotType(null);
    }
    DashedTool.updateLine(view);
  }

  // 初始化标绘临时图层
  function initPlotTempLayer() {
    const options: any = {
      id: PLOT_TEMP_LAYER_ID,
      title: PLOT_TEMP_LAYER_TITLE,
      listMode: 'hide', // 图层控制的时候忽略该图层
      graphics: [],
    };
    const oldLayer = map.findLayerById(PLOT_TEMP_LAYER_ID);
    if (oldLayer) {
      map.remove(oldLayer);
    }
    const layer = new GraphicsLayer(options);
    map.add(layer);
    setPlotTempLayer(layer);

    // GraphicsLayer(options)
    //   .then(layer => {
    //     const oldLayer = map.findLayerById(PLOT_TEMP_LAYER_ID);
    //     if (oldLayer) {
    //       map.remove(oldLayer);
    //     }
    //     map.add(layer);
    //     setPlotTempLayer(layer);
    //   })
    //   .catch(err => {
    //     //
    //   });
  }

  /**
   * 选择标绘类型
   *
   * @param {object} e 事件对象
   * @returns {void}
   */
  function selectPlotType(e: any) {
    cancelDeleteHandler();
    cancelEditHandler();
    const type = e.currentTarget.dataset.type;
    // 清除sketchViewModel
    clearSketchViewModel();
    if (activePlotType === type) {
      setActivePlotType(null);
    } else {
      setActivePlotType(type);
      // const drawFun: any = {
      //   point: drawPoint,
      //   polyline: drawPolyline,
      //   general_arrow: drawArrow,
      //   double_arrow: drawArrow,
      //   swallowtail_arrow: drawArrow,
      //   text: drawText,
      //   burgee: drawBurgee,
      //   '3dburgee': draw3DBurgee,
      //   picture: drawPicture,
      //   //
      //   straight_dashed: drwaDashed,
      //   straight_dashed_arrow: drwaDashed,
      //   curve_dashed_arrow: drwaDashed,
      //   straight_dashed_plane_arrow: drwaDashed,
      //   curve_plane_arrow: drwaDashed,
      //   curve_dashed_plane_arrow: drwaDashed,
      //   straight_plane_arrow: drwaDashed,
      //   straight_arrow: drwaDashed,
      //   curve_arrow: drwaDashed,
      //   circle_dashed: drwaDashed,
      //   circle_dashed_plane: drwaDashed,
      //   straight_dashed_plane: drwaDashed,
      //   //
      //   DELETE: createDeleteHandler,
      //   EDIT: createEditHandler,
      //   polygon: drawPolygon,
      // };

      // drawFun[type]();

      switch (type) {
        case 'point':
          drawPoint();
          break;
        case 'polyline':
          drawPolyline();
          break;
        case 'general_arrow':
        case 'double_arrow':
        case 'swallowtail_arrow':
          drawArrow(type);
          break;
        case 'text':
          drawText();
          break;
        case 'burgee':
          drawBurgee();
          break;
        case '3dburgee':
          draw3DBurgee();
          break;
        case 'picture':
          drawPicture();
          break;
        case 'straight_dashed':
        case 'straight_dashed_arrow':
        case 'curve_dashed_arrow':
        case 'straight_dashed_plane_arrow':
        case 'curve_dashed_plane_arrow':
        case 'curve_plane_arrow':
        case 'straight_plane_arrow':
        case 'straight_arrow':
        case 'curve_arrow':
        case 'circle_dashed':
        case 'circle_dashed_plane':
        case 'straight_dashed_plane':
          // case 'dashed_rectangle':
          drwaDashed(type);
          break;
        // 删除
        case 'DELETE':
          createDeleteHandler();
          break;
        // 编辑
        case 'EDIT':
          createEditHandler();
          break;
        default:
          drawPolygon(type);
          break;
      }
    }
  }

  // 绘点
  function drawPoint() {
    document.body.style.cursor = 'wait';
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer as any,
      view: view,
      pointSymbol: {
        type: 'simple-marker',
        color: [255, 0, 0, 1],
      },
      defaultCreateOptions: {
        hasZ: false,
      },
    });
    document.body.style.cursor = 'auto';
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.create('point', {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      if (event.state === 'complete') {
        event.graphic.attributes = { type: 'point' };
        sketchViewModelOnComplete(event.graphic, false);
        drawPoint();
      }
    });
  }

  // 绘线
  function drawPolyline() {
    document.body.style.cursor = 'wait';
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer as any,
      view: view,
      polylineSymbol: {
        type: 'simple-line',
        color: [255, 0, 0, 1],
        width: 2,
      },
      defaultCreateOptions: {
        hasZ: false,
      },
    });
    document.body.style.cursor = 'auto';
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.polylineSymbol = (symbol as any).simpleLineSymbol;
    sketchViewModel.create('polyline', {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      if (event.state === 'active') {
        //  plotDistance(event.graphic.geometry, view, PlotTypes.polyline); // 显示标绘距离
      }
      if (event.state === 'complete') {
        event.graphic.attributes = { type: 'polyline' };
        sketchViewModelOnComplete(event.graphic, false);
        drawPolyline();
        plotDistance(); // 取消显示标绘距离
      }
    });
  }

  // 绘面
  function drawPolygon(type: any) {
    document.body.style.cursor = 'wait';
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer as any,
      view: view,
      polygonSymbol: {
        type: 'simple-fill',
        color: [255, 0, 0, 1],
      },
      defaultCreateOptions: {
        hasZ: false,
      },
    });

    document.body.style.cursor = 'auto';
    let tool = type;
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.polygonSymbol = symbol.simpleFillSymbol;
    if (type === 'dashed_rectangle') {
      tool = 'rectangle';
      let opacitySymbol = {
        type: 'simple-fill',
        color: [255, 255, 255, 0],
        outline: { color: [255, 255, 255, 0] },
      };
      sketchViewModel.polygonSymbol = opacitySymbol;
    }
    sketchViewModel.create(tool, {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      plotTempLayer.removeAll();
      if (event.state === 'complete') {
        if (event.graphic) {
          let graphic = event.graphic;
          graphic.attributes = { type: type };
          if (type === 'dashed_rectangle') {
            let geometry = new Polyline({
              paths: graphic.geometry.rings,
              spatialReference: view.spatialReference,
            });
            graphic = new Graphic({
              geometry: geometry,
              attributes: { type, id: Date.now() },
              visible: false,
            });
          }
          sketchViewModelOnComplete(graphic, false);
          drawPolygon(type);
        }
        plotDistance(); // 取消显示标绘距离
      } else if (event.state === 'active' && type === 'dashed_rectangle') {
        let segmentLength = 20 * view.resolution; // 线段长度
        let paths = DashedTool.getLineDashedPaths(
          event.graphic.geometry.rings,
          segmentLength,
          view,
        );
        let line = new Polyline({
          paths: paths,
          spatialReference: view.spatialReference,
        });
        let graphic = new Graphic({
          geometry: line,
          symbol: symbol.simpleLineSymbol,
        });
        plotTempLayer.add(graphic);
      } else if (event.state === 'active' && type === 'circle') {
        // 画圆形时显示半径距离
        let point = view.toMap(window.event);
        let center = event.graphic.geometry.extent.center;
        let polyline = new Polyline({
          paths: [
            [
              [center.x, center.y],
              [point.x, point.y],
            ],
          ],
          spatialReference: view.spatialReference,
        });
        //   plotDistance(polyline, view, PlotTypes.circle); // 显示标绘距离
      }
    });
  }

  // 绘制箭头
  function drawArrow(type: any) {
    sketchViewModel = new PlotDrawTool({
      mapView: view,
      symbol: symbol.simpleFillSymbol,
    });
    sketchViewModel.symbol = symbol.simpleFillSymbol;
    sketchViewModel.active(type);

    sketchViewModel.onDrawEnd((event: any) => {
      event.graphic.attributes = { type: type };
      sketchViewModelOnComplete(event.graphic, false);
      drawArrow(type);
    });
  }

  // 绘制虚线箭头
  function drwaDashed(type: any) {
    sketchViewModel = new DashedTool({
      view: view,
      onDrawEnd: (event) => {
        event.graphic.attributes = {
          type: type,
          id: Date.now(),
        };
        sketchViewModelOnComplete(event.graphic, false);
        // DashedTool.updateLine(view);
        drwaDashed(type);
      },
    });
    if (
      type === 'straight_dashed' ||
      type === 'straight_dashed_arrow' ||
      type === 'curve_dashed_arrow' ||
      type === 'straight_arrow' ||
      type === 'curve_arrow' ||
      type === 'circle_dashed' ||
      type === 'dashed_rectangle'
    ) {
      sketchViewModel.polylineSymbol = symbol.simpleLineSymbol;
    } else if (
      type === 'straight_dashed_plane_arrow' ||
      type === 'curve_dashed_plane_arrow' ||
      type === 'curve_plane_arrow' ||
      type === 'straight_plane_arrow' ||
      type === 'circle_dashed_plane' ||
      type === 'straight_dashed_plane'
    ) {
      sketchViewModel.polygonSymbol = symbol.simpleFillSymbol;
    }
    sketchViewModel.active(type);
  }

  // 文本
  function drawText() {
    document.body.style.cursor = 'wait';

    let sketchVM = new SketchViewModel({
      layer: plotTempLayer as any,
      view: view,
      pointSymbol: {
        type: 'text',
        color: [255, 0, 0, 1],
      } as any,
      defaultCreateOptions: {
        hasZ: false,
      },
    });
    document.body.style.cursor = 'auto';
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.create('point', {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      if (event.state === 'complete') {
        event.graphic.attributes = { type: 'text' };
        plotTempLayer.remove(event.graphic);
        if (!symbol.textSymbol.text.trim()) {
          message.warning('请输入文本内容');
        } else {
          event.graphic.symbol = symbol.textSymbol;
          let layer = plotLayer.layers.find(
            (l: any) => l.id === 'plottingTextLayer',
          ); // 标绘文字图层
          if (layer) {
            layer.add(event.graphic);
          }
        }
        drawText();
      }
    });
  }

  // 画旗子
  function drawBurgee() {
    document.body.style.cursor = 'wait';
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer,
      view: view,
      defaultCreateOptions: {
        hasZ: false,
      },
    });
    document.body.style.cursor = 'auto';
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.create('point', {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      if (event.state === 'complete') {
        plotTempLayer.remove(event.graphic);
        event.graphic.symbol = Object.assign({}, symbol.SVGSymbol, {
          size: `${symbol.SVGSymbol.size}px`,
          xoffset: `${(4 / 16) * symbol.SVGSymbol.size}px`,
          yoffset: `${symbol.SVGSymbol.size / 2 - 2}px`,
        });
        let layer = plotLayer.layers.find(
          (l: any) => l.id === 'plottingSituationLayer',
        ); // 标绘态势图层
        if (layer) {
          layer.add(event.graphic);
        }
        drawBurgee();
      }
    });
  }

  // 画旗子-sceneView
  function draw3DBurgee() {
    document.body.style.cursor = 'wait';
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer,
      view: view,
      defaultCreateOptions: {
        hasZ: false,
      },
    });
    document.body.style.cursor = 'auto';
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.create('point', {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      if (event.state === 'complete') {
        event.graphic.attributes = { type: '3dburgee' };
        sketchViewModelOnComplete(event.graphic, false);
        draw3DBurgee();
      }
    });
  }

  // 画图片
  function drawPicture() {
    document.body.style.cursor = 'wait';
    let sketchVM = new SketchViewModel({
      layer: plotTempLayer,
      view: view,
      defaultCreateOptions: {
        hasZ: false,
      },
    });

    document.body.style.cursor = 'auto';
    clearSketchViewModel(); // 清除上一个sketchViewModel
    sketchViewModel = sketchVM;
    sketchViewModel.create('point', {
      mode: 'click',
    });
    sketchViewModel.on('create', (event: any) => {
      if (event.state === 'complete') {
        plotTempLayer.remove(event.graphic);
        // 判断是否有图片url
        if (!symbol.pictureSymbol.url.trim()) {
          message.warning('图片url不能为空');
        } else {
          event.graphic.symbol = Object.assign({}, symbol.pictureSymbol);
          plotLayer.add(event.graphic);
        }
        drawPicture();
      }
    });
  }

  // 全部清除按钮被点击
  function removeAllBtnOnClick() {
    if (plotLayer) {
      plotLayer.layers.forEach((l: any) => {
        l.removeAll();
      });
    }
  }

  // 保存按钮被点击
  function saveBtnOnClick() {
    if (plotLayer) {
      const allGraphicsJSON: any = {}; // 全部图层的
      plotLayer.layers.forEach((layer: any) => {
        const layerGraphicsJSON: any[] = []; // 单个图层的
        layer.graphics.forEach((graphic: any) => {
          if (
            graphic.attributes.type === 'straight_dashed' ||
            graphic.attributes.type === 'straight_dashed_arrow' ||
            graphic.attributes.type === 'curve_dashed_arrow' ||
            graphic.attributes.type === 'straight_arrow' ||
            graphic.attributes.type === 'curve_arrow' ||
            graphic.attributes.type === 'circle_dashed' ||
            graphic.attributes.type === 'dashed_rectangle'
          ) {
            if (!graphic.visible) {
              const jsonObj = graphic.toJSON();
              layerGraphicsJSON.push(jsonObj);
            }
          } else {
            const jsonObj = graphic.toJSON();
            layerGraphicsJSON.push(jsonObj);
          }
        });
        allGraphicsJSON[layer.id] = layerGraphicsJSON;
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(allGraphicsJSON));
      message.success('保存成功');
    }
  }

  let symbolEditor = null;
  if (activePlotType === 'point') {
    symbolEditor = (
      <PointSymbolEditor
        setSimpleMarkerSymbol={setSimpleMarkerSymbol}
        initValues={initEditorValues}
      />
    );
  } else if (
    activePlotType === 'polyline' ||
    activePlotType === 'straight_dashed' ||
    activePlotType === 'straight_dashed_arrow' ||
    activePlotType === 'curve_dashed_arrow' ||
    activePlotType === 'straight_arrow' ||
    activePlotType === 'curve_arrow' ||
    activePlotType === 'circle_dashed' ||
    activePlotType === 'dashed_rectangle'
  ) {
    symbolEditor = (
      <PolylineSymbolEditor
        setSimpleLineSymbol={setSimpleLineSymbol}
        initValues={initEditorValues}
      />
    );
  } else if (
    activePlotType === 'polygon' ||
    activePlotType === 'rectangle' ||
    activePlotType === 'circle' ||
    activePlotType === 'general_arrow' ||
    activePlotType === 'swallowtail_arrow' ||
    activePlotType === 'double_arrow' ||
    activePlotType === 'straight_dashed_plane_arrow' ||
    activePlotType === 'curve_dashed_plane_arrow' ||
    activePlotType === 'curve_plane_arrow' ||
    activePlotType === 'straight_plane_arrow' ||
    activePlotType === 'circle_dashed_plane' ||
    activePlotType === 'straight_dashed_plane'
  ) {
    symbolEditor = (
      <PolygonSymbolEditor
        setSimpleFillSymbol={setSimpleFillSymbol}
        initValues={initEditorValues}
      />
    );
  } else if (activePlotType === 'text') {
    symbolEditor = (
      <TextSymbolEditor
        setTextSymbol={setTextSymbol}
        initValues={initEditorValues}
      />
    );
  } else if (activePlotType === 'burgee') {
    const path =
      'M262.616946 0L214.051309 0.099316l0 1023.900677 48.565637 0C262.616946 1023.999993 265.844723 3.575384 262.616946 0z M313.367539 518.033457L809.948691 269.742882 313.367539 21.452306Z';
    symbolEditor = <SVGSymbolEditor setSVGSymbol={setSVGSymbol} path={path} />;
  } else if (activePlotType === '3dburgee') {
    symbolEditor = (
      <IconSymbolEditor
        setIconSymbol={setIconSymbol}
        iconUrl={threedBurgeeImg}
        initValues={initEditorValues}
      />
    );
  } else if (activePlotType === 'picture') {
    symbolEditor = <PictureSymbolEditor setSymbol={setPictureSymbol} />;
  } else if (activePlotType === 'DELETE') {
    symbolEditor = <div>点击地图上的标绘图形进行删除操作。</div>;
  } else if (activePlotType === 'EDIT') {
    symbolEditor = <div>点击地图上的标绘图形进行编辑操作。</div>;
  }

  const plotItmeDoms = PloltItemList.map((itme) => (
    <Tooltip title={itme.title} key={itme.key}>
      <div
        className={`${styles['plot-item']} ${
          activePlotType === itme.key ? styles['plot-item-selected'] : ''
        }`}
        data-type={itme.key}
        onClick={selectPlotType}
      >
        {itme.icon}
      </div>
    </Tooltip>
  ));

  return (
    <div className={styles['emergency-plot']}>
      <div className={styles['plot-list']}>
        {plotItmeDoms}
        <Tooltip title="删除标绘">
          <div
            className={`${styles['plot-item']} ${styles['text-item']} ${
              activePlotType === 'DELETE' ? styles['plot-item-selected'] : ''
            }`}
            data-type="DELETE"
            onClick={selectPlotType}
          >
            删除
          </div>
        </Tooltip>
        <Tooltip title="编辑标绘">
          <div
            className={`${styles['plot-item']} ${styles['text-item']} ${
              activePlotType === 'EDIT' ? styles['plot-item-selected'] : ''
            }`}
            data-type="EDIT"
            onClick={selectPlotType}
          >
            编辑
          </div>
        </Tooltip>
      </div>

      {/* {
         activePlotType ? (
           <div className={styles['symbol-editor']}>
             {symbolEditor}
           </div>
         ) : null
       } */}

      <CSSTransition
        in={activePlotType !== null}
        timeout={300}
        classNames="show"
        unmountOnExit
      >
        <div className={styles['symbol-editor']}>{symbolEditor}</div>
      </CSSTransition>

      <div className={styles['btn-wrap']}>
        <MyButton
          size={'middle'}
          className={styles.btn}
          onClick={removeAllBtnOnClick}
        >
          全部清除
        </MyButton>
        <MyButton
          size={'middle'}
          className={`${styles.btn}`}
          onClick={saveBtnOnClick}
          type={'primary'}
        >
          保存标绘
        </MyButton>
      </div>
    </div>
  );
};

export default EmergencyPlot;
