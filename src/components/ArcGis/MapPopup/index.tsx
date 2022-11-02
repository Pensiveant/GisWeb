/**
 * @Description: 自定义Popu
 * @Author: Pensiveant
 * @Date: 2022-11-02 09:34:16
 */

import React, { useRef, useState, useEffect } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import styles from './index.less';

interface MapPopupProps {
  width?: number; // popup 宽度
  title?: string; // 标题
  view: __esri.SceneView | __esri.MapView;
  point: __esri.Point;
  onClose?: () => void;
}

const MapPopup: React.FC<MapPopupProps> = (props) => {
  const { width, title, view, point, onClose, children } = props;
  const [x, setX] = useState(-9999);
  const [y, setY] = useState(-9999);
  const popupRef = useRef<any>();
  const viewHandle = useRef<__esri.Handle>();
  const [show, setShow] = useState(false);
  const [display, setDisplay] = useState('none');

  useEffect(() => {
    if (view && point) {
      calculatePosition(view, point);
      viewHandle.current = view.watch('viewpoint', () => {
        calculatePosition(view, point);
      });
    }

    return () => {
      if (viewHandle.current) {
        viewHandle.current.remove();
        setDisplay('none');
      }
    };
  }, [view, point]);

  function calculatePosition(
    view: __esri.SceneView | __esri.MapView,
    point: __esri.Point,
  ) {
    if (view) {
      let rect = view?.container.getBoundingClientRect();
      let headerHeight = rect.top; // 顶部header高度
      let sideMenuWidth = rect.left; // 侧边菜单宽度
      let screenPoint = view?.toScreen(point);
      setX(screenPoint.x + sideMenuWidth);
      setY(screenPoint.y + headerHeight);
      setTimeout(() => {
        setDisplay('block');
      }, 100);

      setTimeout(() => {
        setShow(true);
      }, 150);
    }
  }

  return (
    <div
      ref={popupRef}
      className={`${styles.mapPopup} ${show ? styles.show : ''} ${
        !show ? styles.hide : ''
      }`}
      style={{
        left: x,
        top: y,
        width: width || 'auto',
        display: display,
      }}
    >
      <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div
          className={styles.closeBtn}
          onClick={() => {
            setShow(false);
            setTimeout(() => {
              if (onClose) {
                onClose();
              }
            }, 150);
          }}
        >
          <PlusOutlined />
        </div>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};

export default MapPopup;
