/**
 * 面符号编辑 组件
 *
 */

import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { InputNumber } from 'antd';
import styles from '../index.less';

const PolygonSymbolEditor = (props: any) => {
  const {
    setSimpleFillSymbol,
    initValues, //
  } = props;
  const [fillcolor, setFillcolor] = useState({
    rgb: initValues?.color || { r: 32, g: 142, b: 245, a: 1 },
  }); // 符号颜色
  const [borderWidth, setBorderWidth] = useState(initValues?.outlineWidth || 1); // 边框大小
  const [borderColor, setBorderColor] = useState({
    // 轮廓颜色
    rgb: initValues?.outlineColor || { r: 32, g: 142, b: 245, a: 1 },
  });
  const [fillColorPickerVisible, setFillColorPickerVisible] = useState(false); // 是否显示填充颜色选择器
  const [borderColorPickerVisible, setBorderColorPickerVisible] =
    useState(false); // 是否显示边框颜色选择器

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillcolor, borderWidth, borderColor]);

  // 显示填充色选择器
  function showFillColorPicker() {
    setFillColorPickerVisible(!fillColorPickerVisible);
  }

  // 填充色变化回调
  function onFillColorChange(color: any) {
    setFillcolor(color);
  }

  // 更新
  function update() {
    setSimpleFillSymbol({
      type: 'simple-fill',
      color: [
        fillcolor.rgb.r,
        fillcolor.rgb.g,
        fillcolor.rgb.b,
        fillcolor.rgb.a,
      ],
      style: 'solid',
      outline: {
        color: [
          borderColor.rgb.r,
          borderColor.rgb.g,
          borderColor.rgb.b,
          borderColor.rgb.a,
        ],
        width: borderWidth,
      },
    });
  }

  return (
    <div className={styles['symbol-editor']}>
      <div className={styles.section}>
        <div className={styles.sectionTitle}>填充</div>
        <div className={styles.dls}>
          <dl className={styles.dl}>
            <dt className={styles.dt}>
              <div className={styles.valueWrap}>
                <div
                  className={styles.colorPicker}
                  style={{
                    background: `rgba(${fillcolor.rgb.r}, ${fillcolor.rgb.g}, ${fillcolor.rgb.b}, ${fillcolor.rgb.a})`,
                  }}
                  onClick={showFillColorPicker}
                />
                {fillColorPickerVisible ? (
                  <div className={styles.popover}>
                    <div
                      className={styles.cover}
                      onClick={showFillColorPicker}
                    />
                    <ChromePicker
                      color={fillcolor.rgb}
                      onChange={onFillColorChange}
                    />
                  </div>
                ) : null}
              </div>
            </dt>
            <dd className={styles.dd}>
              <div className={styles.label}>颜色</div>
            </dd>
          </dl>
        </div>
      </div>

      <div className={styles.section}>
        <div className={styles.sectionTitle}>描边</div>
        <div className={styles.dls}>
          <dl className={styles.dl}>
            <dt className={styles.dt}>
              <div className={styles.valueWrap}>
                <div
                  className={styles.colorPicker}
                  style={{
                    background: `rgba(${borderColor.rgb.r}, ${borderColor.rgb.g}, ${borderColor.rgb.b}, ${borderColor.rgb.a})`,
                  }}
                  onClick={() => {
                    setBorderColorPickerVisible(!borderColorPickerVisible);
                  }}
                />
                {borderColorPickerVisible ? (
                  <div className={styles.popover}>
                    <div
                      className={styles.cover}
                      onClick={() => {
                        setBorderColorPickerVisible(!borderColorPickerVisible);
                      }}
                    />
                    <ChromePicker
                      color={borderColor.rgb}
                      onChange={(value) => {
                        setBorderColor(value);
                      }}
                    />
                  </div>
                ) : null}
              </div>
            </dt>
            <dd className={styles.dd}>
              <div className={styles.label}>颜色</div>
            </dd>
          </dl>
          <dl className={styles.dl}>
            <dt className={styles.dt}>
              <div className={styles.valueWrap}>
                <InputNumber
                  size="small"
                  min={0}
                  max={50}
                  value={borderWidth}
                  className={styles.input}
                  onChange={(value) => {
                    setBorderWidth(value);
                  }}
                />
              </div>
              {/* <div className={styles.desc}>像素</div> */}
            </dt>
            <dd className={styles.dd}>
              <div className={styles.label}>线宽</div>
            </dd>
          </dl>
        </div>
      </div>

      {/* <div className={styles.row}>
        <div className={styles.label}>填充颜色:</div>
        <div className={styles.wrap}>
          <div
            className={styles.fillcolor}
            style={{ background: fillcolor.hex }}
            onClick={showFillColorPicker}
          />
          {fillColorPickerVisible ? (
            <div className={styles.popover}>
              <div className={styles.cover} onClick={showFillColorPicker} />
              <ChromePicker color={fillcolor} onChange={onFillColorChange} />
            </div>
          ) : null}
        </div>
      </div> */}

      {/* <div className={styles.row}>
        <div className={styles.label}>轮廓颜色:</div>
        <div className={styles.wrap}>
          <div
            className={styles.fillcolor}
            style={{ background: borderColor.hex }}
            onClick={() => {
              setBorderColorPickerVisible(!borderColorPickerVisible);
            }}
          />
          {borderColorPickerVisible ? (
            <div className={styles.popover}>
              <div
                className={styles.cover}
                onClick={() => {
                  setBorderColorPickerVisible(!borderColorPickerVisible);
                }}
              />
              <ChromePicker
                color={borderColor}
                onChange={value => {
                  setBorderColor(value);
                }}
              />
            </div>
          ) : null}
        </div>
      </div> */}

      {/* <div className={styles.row}>
        <div className={styles.label}>轮廓宽度:</div>
        <div className={styles.wrap}>
          <Input
            style={{ width: '80px' }}
            value={borderWidth}
            onChange={e => {
              let value = e.target.value;
              if (Number(value) || Number(value) === 0) {
                if (value > 20) {
                  setBorderWidth(20);
                } else {
                  setBorderWidth(Number(value));
                }
              } else {
                setBorderWidth(borderWidth);
              }
            }}
          />
        </div>
      </div> */}
    </div>
  );
};

export default PolygonSymbolEditor;
