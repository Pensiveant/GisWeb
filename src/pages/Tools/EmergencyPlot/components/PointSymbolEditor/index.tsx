/**
 * 点符号编辑 组件
 *
 */

import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { InputNumber } from 'antd';
import styles from '../index.less';

const PointSymbolEditor = (props: any) => {
  const {
    setSimpleMarkerSymbol,
    initValues, // 初始值
  } = props;
  const [fillcolor, setFillcolor] = useState({
    rgb:
      initValues && initValues.color
        ? initValues.color
        : { r: 32, g: 142, b: 245, a: 1 },
  }); // 符号颜色
  const [fillSize, setFillSize] = useState(
    initValues && initValues.size ? initValues.size : 10,
  ); // 符号大小
  const [borderWidth, setBorderWidth] = useState(
    initValues && initValues.outlineWidth ? initValues.outlineWidth : 1,
  ); // 边框大小
  const [fillColorPickerVisible, setFillColorPickerVisible] = useState(false); // 是否显示填充颜色选择器
  const [borderColorPickerVisible, setBorderColorPickerVisible] =
    useState(false); // 是否显示边框颜色选择器
  // const [opacity, setOpacity] = useState(0.5); // 透明度
  const [borderColor, setBorderColor] = useState({
    // 轮廓颜色
    rgb:
      initValues && initValues.outlineColor
        ? initValues.outlineColor
        : { r: 32, g: 142, b: 245, a: 1 },
  });

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillcolor, fillSize, borderWidth, borderColor]);

  // 显示填充色选择器
  function showPointFillColorPicker() {
    setFillColorPickerVisible(!fillColorPickerVisible);
  }

  // 填充色变化回调
  function onPointFillColorChange(color: any) {
    setFillcolor(color);
  }

  // 显示边框颜色选择器
  function showPointBorderColorPicker() {
    setBorderColorPickerVisible(!borderColorPickerVisible);
  }

  // 边框颜色变化回调
  function onPointBorderColorChange(color: any) {
    setBorderColor(color);
  }

  // 更新
  function update() {
    setSimpleMarkerSymbol({
      type: 'simple-marker',
      style: 'circle',
      color: [
        fillcolor.rgb.r,
        fillcolor.rgb.g,
        fillcolor.rgb.b,
        fillcolor.rgb.a,
      ],
      size: `${fillSize}`,
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
                  onClick={showPointFillColorPicker}
                />
                {fillColorPickerVisible ? (
                  <div className={styles.popover}>
                    <div
                      className={styles.cover}
                      onClick={showPointFillColorPicker}
                    />
                    <ChromePicker
                      color={fillcolor.rgb}
                      onChange={onPointFillColorChange}
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
                  value={fillSize}
                  min={0}
                  max={50}
                  size="small"
                  onChange={(value) => {
                    setFillSize(value);
                  }}
                />
              </div>
              {/* <div className={styles.desc}>像素</div> */}
            </dt>
            <dd className={styles.dd}>
              <div className={styles.label}>大小</div>
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
                  onClick={showPointBorderColorPicker}
                />
                {borderColorPickerVisible ? (
                  <div className={styles.popover}>
                    <div
                      className={styles.cover}
                      onClick={showPointBorderColorPicker}
                    />
                    <ChromePicker
                      color={borderColor.rgb}
                      onChange={onPointBorderColorChange}
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
                  value={borderWidth}
                  min={0}
                  max={20}
                  size="small"
                  onChange={(value) => {
                    setBorderWidth(value);
                  }}
                />
              </div>
              {/* <div className={styles.desc}>像素</div> */}
            </dt>
            <dd className={styles.dd}>
              <div className={styles.label}>宽度</div>
            </dd>
          </dl>
        </div>
      </div>
      {/* <div className={styles.row}>
        <div className={styles.label}>符号颜色:</div>
        <div className={styles.wrap}>
          <div
            className={styles.fillcolor}
            style={{ background: fillcolor.hex }}
            onClick={showPointFillColorPicker}
          />
          {fillColorPickerVisible ? (
            <div className={styles.popover}>
              <div
                className={styles.cover}
                onClick={showPointFillColorPicker}
              />
              <ChromePicker
                color={fillcolor}
                onChange={onPointFillColorChange}
              />
            </div>
          ) : null}
        </div>
      </div> */}

      {/* <div className={styles.row}>
        <div className={styles.label}>符号大小:</div>
        <div className={styles.wrap}>
          <Input
            value={fillSize}
            style={{ width: '80px' }}
            onChange={e => {
              // console.log(e.target.value);
              let value = Number(e.target.value);
              if (value) {
                if (value > 50) {
                  setFillSize(50);
                } else {
                  setFillSize(value);
                }
              } else {
                setFillSize(fillSize);
              }
            }}
          />
        </div>
      </div> */}

      {/* <div className={styles.row}>
        <div className={styles.label}>透明度:</div>
        <div className={styles.wrap}>
          <Slider
            marks={marks}
            min={0}
            max={100}
            value={opacity * 100}
            onChange={value => {
              setOpacity(value / 100);
            }}
          />
        </div>
      </div> */}

      {/* <div className={styles.row}>
        <div className={styles.label}>轮廓颜色:</div>
        <div className={styles.wrap}>
          <div
            className={styles.fillcolor}
            style={{
              background: `rgba(${borderColor.rgb.r}, ${borderColor.rgb.g}, ${borderColor.rgb.b}, ${borderColor.rgb.a})`,
            }}
            onClick={showPointBorderColorPicker}
          />
          {borderColorPickerVisible ? (
            <div className={styles.popover}>
              <div
                className={styles.cover}
                onClick={showPointBorderColorPicker}
              />
              <ChromePicker
                color={borderColor.rgb}
                onChange={onPointBorderColorChange}
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

export default PointSymbolEditor;
