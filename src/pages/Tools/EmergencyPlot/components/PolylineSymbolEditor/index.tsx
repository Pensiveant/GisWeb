/**
 * 线符号编辑 组件
 *
 */

import { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { InputNumber } from 'antd';
import styles from '../index.less';

const PolylineSymbolEditor = (props: any) => {
  const {
    setSimpleLineSymbol,
    initValues, //
  } = props;
  const [fillcolor, setFillcolor] = useState({
    rgb: initValues?.color || { r: 32, g: 142, b: 245, a: 1 },
  }); // 符号颜色
  const [fillSize, setFillSize] = useState(initValues?.width || 4); // 符号大小
  const [fillColorPickerVisible, setFillColorPickerVisible] = useState(false); // 是否显示填充颜色选择器
  const [lineType, setLineType] = useState('solid');

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillcolor, fillSize, lineType]);

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
    setSimpleLineSymbol({
      type: 'simple-line',
      color: [
        fillcolor.rgb.r,
        fillcolor.rgb.g,
        fillcolor.rgb.b,
        fillcolor.rgb.a,
      ],
      width: `${fillSize}`,
      style: lineType,
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
          <dl className={styles.dl}>
            <dt className={styles.dt}>
              <div className={styles.valueWrap}>
                <InputNumber
                  size="small"
                  min={0}
                  max={50}
                  value={fillSize}
                  className={styles.input}
                  onChange={(value) => {
                    setFillSize(value);
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
        <div className={styles.label}>符号颜色:</div>
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
        <div className={styles.label}>线宽:</div>
        <div className={styles.wrap}>
          <Input
            value={fillSize}
            style={{ width: '80px' }}
            onChange={e => {
              let value = Number(e.target.value);
              if (value) {
                if (value > 50) {
                  setFillSize(50);
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
      </div> */}

      {/* <div className={styles.row}>
        <div className={styles.label}>线型:</div>
        <div className={styles.wrap}>
          <Select
            value={lineType}
            style={{ width: '80px' }}
            onChange={value => {
              setLineType(value);
            }}
          >
            <Option value="solid">实线</Option>
            <Option value="short-dot">虚线</Option>
          </Select>
        </div>
      </div> */}
    </div>
  );
};

export default PolylineSymbolEditor;
