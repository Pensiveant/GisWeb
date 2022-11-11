/**
 * @Description: 鹰眼图
 * @Author: Pensiveant
 * @Date: 2022-11-11 14:28:06
 */

import React from 'react';
import { Button } from 'antd';
import styles from './index.less';
import OverviewMap from '@/components/ArcGis/OverviewMap';
import { useSelector } from 'umi';

interface EyeMapProps {}

const EyeMap: React.FC<EyeMapProps> = (props) => {
  const view = useSelector(({ global }: any) => global.view);

  return <div>{view && <OverviewMap mainView={view} />}</div>;
};

export default EyeMap;
