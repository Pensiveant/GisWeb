/**
 * @Description: 工具栏
 * @Author: Pensiveant
 * @Date: 2022-11-10 17:29:44
 */

import React, { useState, useEffect } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import EmergencyPlot from './EmergencyPlot';
import { useSelector } from 'umi';
import GroupLayer from '@arcgis/core/layers/GroupLayer';
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer';

const plottingGroupLayerOptions: any = {
  title: '标绘图层',
  id: 'plottingGroupLayer',
  visibilityMode: 'independent',
}; // 标绘图层组

const plottingChildrenLayers = [
  {
    title: '点图层',
    id: 'plottingPointLayer',
  }, // 标绘点图层
  {
    title: '线图层',
    id: 'plottingLineLayer',
  }, // 标绘线图层
  {
    title: '面图层',
    id: 'plottingPolygonLayer',
  }, // 标绘面图层
  {
    title: '态势图层',
    id: 'plottingSituationLayer',
  }, // 标绘态势图层
  {
    title: '文字图层',
    id: 'plottingTextLayer',
  }, // 标绘文字图层
];

interface ToolsProps {}

const Tools: React.FC<ToolsProps> = (props) => {
  const view = useSelector(({ global }: any) => global.view);

  const [plotLayer, setPlotLayer] = useState<__esri.GroupLayer | null>(null); // 标绘图层

  useEffect(() => {
    if (view?.map) {
      let groupLayer: any = view.map.findLayerById(
        plottingGroupLayerOptions.id,
      ) as __esri.GroupLayer;
      if (!groupLayer) {
        groupLayer = new GroupLayer(plottingGroupLayerOptions);
        view.map.add(groupLayer);
      }
      plottingChildrenLayers.forEach((item) => {
        if (!groupLayer.layers.find((l: any) => l.id === item.id)) {
          groupLayer.add(new GraphicsLayer(item));
        }
      });
      setPlotLayer(groupLayer);
    }
  }, [view]);

  return (
    <div className={styles.tools}>
      {view && (
        <EmergencyPlot map={view?.map} view={view} plotLayer={plotLayer} />
      )}
    </div>
  );
};

export default Tools;
