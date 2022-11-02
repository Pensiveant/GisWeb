/**
 * @Description: MapPopup组件使用示例
 * @Author: Pensiveant
 * @Date: 2022-11-02 10:17:10
 */

import React, { useRef, useState, useEffect } from 'react';
import { Button } from 'antd';
import styles from './index.less';
import MapPopup from '@/components/ArcGis/MapPopup';
import { useSelector } from 'umi';

interface ViewClickProps {}

const ViewClick: React.FC<ViewClickProps> = (props) => {
  const view = useSelector(({ global }: any) => global.view);
  const viewClickRef = useRef<any>();
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupLocation, setPopupLocation] = useState();

  useEffect(() => {
    if (view) {
      viewClickRef.current = view.on('click', (e: any) => {
        const { mapPoint } = e;
        setPopupLocation(mapPoint);
        setPopupVisible(true);
      });
    }
    return () => {
      if (viewClickRef.current) {
        viewClickRef.current.remove();
      }
    };
  }, [view]);

  return (
    <div className={styles.ViewClick}>
      {popupVisible && popupLocation && view ? (
        <MapPopup
          view={view}
          point={popupLocation}
          title={'自定义popup'}
          onClose={() => {
            setPopupLocation(undefined);
          }}
        >
          <div className={styles.content}>
            <div className={styles.item}>
              <span>地址：</span>
              <span>双林街吕献塘新区幼儿园东南侧约60米</span>
            </div>
            <div className={styles.item}>
              <span>大类名称：</span>
              <span>生活智能配套</span>
            </div>
            <div className={styles.item}>
              <span>名称：</span>
              <span>水果店</span>
            </div>
            <div className={styles.item}>
              <span>小类名称：</span>
              <span>便民生活网点</span>
            </div>
            <div className={styles.item}>
              <span>电话：</span>
              <span>15905798946</span>
            </div>
          </div>
        </MapPopup>
      ) : null}
    </div>
  );
};

export default ViewClick;
