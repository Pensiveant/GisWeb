/**
 * SVG符号编辑 组件
 *
 */

import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Input } from 'antd';
import styles from '../index.less';

const SVGSymbolEditor = ({ setSVGSymbol, path }: any) => {
  const [fillcolor, setFillcolor] = useState({
    hex: '#1890ff',
    rgb: { r: 32, g: 142, b: 245 },
  }); // 符号颜色
  const [fillSize, setFillSize] = useState(64); // 符号大小
  const [fillColorPickerVisible, setFillColorPickerVisible] = useState(false); // 是否显示填充颜色选择器

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillcolor, path, fillSize]);

  // 更新
  function update() {
    setSVGSymbol({
      type: 'simple-marker',
      path: path,
      color: [fillcolor.rgb.r, fillcolor.rgb.g, fillcolor.rgb.b],
      outline: {
        color: [0, 0, 0, 0.7],
        width: 0.5,
      },
      angle: 0,
      size: Number(fillSize),
    });
  }

  return (
    <div className={styles['symbol-editor']}>
      <div className={styles.row}>
        <div className={styles.label}>填充颜色:</div>
        <div className={styles.wrap}>
          <div
            className={styles.fillcolor}
            style={{
              background: `rgba(${fillcolor.rgb.r}, ${fillcolor.rgb.g}, ${
                fillcolor.rgb.b
              }, ${(fillcolor.rgb as any).a})`,
            }}
            onClick={() => {
              setFillColorPickerVisible(!fillColorPickerVisible);
            }}
          />
          {fillColorPickerVisible ? (
            <div className={styles.popover}>
              <div
                className={styles.cover}
                onClick={() => {
                  setFillColorPickerVisible(!fillColorPickerVisible);
                }}
              />
              <ChromePicker
                color={fillcolor.rgb}
                onChange={(color) => {
                  setFillcolor(color);
                }}
              />
            </div>
          ) : null}
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.label}>符号大小:</div>
        <div className={styles.wrap}>
          <Input
            value={fillSize}
            onChange={(e) => {
              let value = Number(e.target.value);
              if (value) {
                if (value > 200) {
                  setFillSize(200);
                } else if (value < 1) {
                  setFillSize(1);
                } else {
                  setFillSize(value);
                }
              } else {
                setFillSize(fillSize);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SVGSymbolEditor;
