/**
 * 文字符号编辑 组件
 *
 */

import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Input, Radio, InputNumber, Checkbox } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars'; // 滚动条组件
import styles from './index.less';

const TextSymbolEditor = (props: any) => {
  const { setTextSymbol, initValues } = props;
  const [fillcolor, setFillcolor] = useState({
    rgb: initValues?.color || { r: 32, g: 142, b: 245, a: 1 },
  }); // 符号颜色
  const [fillSize, setFillSize] = useState(initValues?.fontSize || 16); // 符号大小
  const [fillText, setFillText] = useState(initValues?.text || ''); // 文本内容
  const [fontStyle, setFontStyle] = useState('normal'); // 字体样式
  const [weightBold, setWeightBold] = useState(false); // 字体是否加粗
  // const [decoration, setDecoration] = useState('none'); // 字体装饰
  // const [angle, setAngle] = useState(0); // 旋转角度
  // const [horizontalAlignment, setHorizontalAlignment] = useState('center'); // 水平对齐
  // const [verticalAlignment, setVerticalAlignment] = useState('baseline'); // 垂直对齐
  // const [xoffset, setXoffset] = useState(0); // 水平偏移量
  // const [yoffset, setYoffset] = useState(0); // 垂直偏移量
  const [haloColor, setHaloColor] = useState({
    rgb: initValues?.haloColor || { r: 255, g: 255, b: 255, a: 1 },
  }); // 描边颜色
  const [fillColorPickerVisible, setFillColorPickerVisible] = useState(false); // 是否显示填充颜色选择器
  const [haloColorPickerVisible, setHaloColorPickerVisible] = useState(false); // 是否显示描边颜色选择器

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    fillcolor,
    fillSize,
    fillText,
    fontStyle,
    weightBold,
    // decoration,
    // angle,
    // horizontalAlignment,
    // verticalAlignment,
    // xoffset,
    // yoffset,
    haloColor,
  ]);

  // 更新
  function update() {
    setTextSymbol({
      type: 'text',
      color: [
        fillcolor.rgb.r,
        fillcolor.rgb.g,
        fillcolor.rgb.b,
        fillcolor.rgb.a,
      ],
      text: fillText,
      font: {
        size: fillSize,
        style: fontStyle, // 字体样式
        weight: weightBold ? 'bolder' : 'normal', //
        // decoration: decoration,
      },
      // angle: angle, // 旋转角度
      // horizontalAlignment: horizontalAlignment, // 水平对齐
      // verticalAlignment: verticalAlignment, // 垂直对齐
      // xoffset: xoffset, // 水平偏移量
      // yoffset: yoffset, // 垂直偏移量
      haloSize: 1,
      haloColor: [
        haloColor.rgb.r,
        haloColor.rgb.g,
        haloColor.rgb.b,
        haloColor.rgb.a,
      ],
    });
  }

  return (
    <div className={styles['symbol-editor']}>
      <Scrollbars>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>文本内容</div>
          <div className={styles.dls}>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                <div className={styles.valueWrap} style={{ width: 200 }}>
                  <Input
                    value={fillText}
                    className={styles.input}
                    placeholder="请输入文本内容"
                    onChange={(e) => {
                      let value = e.target.value;
                      setFillText(value);
                    }}
                  />
                </div>
              </dt>
              <dd className={styles.dd}></dd>
            </dl>
          </div>
        </div>

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
                        onChange={(color: any) => {
                          setFillcolor(color);
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
                  <Input
                    value={fillSize}
                    className={styles.input}
                    onChange={(e) => {
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
                      background: `rgba(${haloColor.rgb.r}, ${haloColor.rgb.g}, ${haloColor.rgb.b}, ${haloColor.rgb.a})`,
                    }}
                    onClick={() => {
                      setHaloColorPickerVisible(!haloColorPickerVisible);
                    }}
                  />
                  {haloColorPickerVisible ? (
                    <div className={styles.popover}>
                      <div
                        className={styles.cover}
                        onClick={() => {
                          setHaloColorPickerVisible(!haloColorPickerVisible);
                        }}
                      />
                      <ChromePicker
                        color={haloColor.rgb}
                        onChange={(color: any) => {
                          setHaloColor(color);
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
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>样式</div>
          <div className={styles.dls}>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                <div
                  className={styles.valueWrap}
                  style={{ width: 200, fontSize: 12 }}
                >
                  <Checkbox
                    checked={weightBold}
                    onChange={(e) => {
                      setWeightBold(e.target.checked);
                    }}
                  >
                    加粗
                  </Checkbox>
                  <Checkbox
                    onChange={(e) => {
                      setFontStyle(e.target.checked ? 'italic' : 'normal');
                    }}
                  >
                    斜体
                  </Checkbox>
                </div>
              </dt>
              <dd className={styles.dd}></dd>
            </dl>
          </div>
        </div>

        {/* <div className={styles.row}>
          <div className={styles.label}>文本内容:</div>
          <div className={styles.wrap}>
            <Input
              value={fillText}
              onChange={e => {
                let value = e.target.value;
                setFillText(value);
              }}
            />
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>文本颜色:</div>
          <div className={styles.wrap}>
            <div
              className={styles.fillcolor}
              style={{
                background: `rgba(${fillcolor.rgb.r}, ${fillcolor.rgb.g}, ${fillcolor.rgb.b}, ${fillcolor.rgb.a})`,
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
                  onChange={color => {
                    setFillcolor(color);
                  }}
                />
              </div>
            ) : null}
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>描边颜色:</div>
          <div className={styles.wrap}>
            <div
              className={styles.fillcolor}
              style={{
                background: `rgba(${haloColor.rgb.r}, ${haloColor.rgb.g}, ${haloColor.rgb.b}, ${haloColor.rgb.a})`,
              }}
              onClick={() => {
                setHaloColorPickerVisible(!haloColorPickerVisible);
              }}
            />
            {haloColorPickerVisible ? (
              <div className={styles.popover}>
                <div
                  className={styles.cover}
                  onClick={() => {
                    setHaloColorPickerVisible(!haloColorPickerVisible);
                  }}
                />
                <ChromePicker
                  color={haloColor.rgb}
                  onChange={color => {
                    setHaloColor(color);
                  }}
                />
              </div>
            ) : null}
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>文本大小:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={fillSize}
              min={10}
              precision={0}
              onChange={value => {
                let num = isNaN(parseInt(value + ''))
                  ? fillSize
                  : parseInt(value + '');
                setFillSize(num);
              }}
            />
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>字体样式:</div>
          <div className={styles.wrap}>
            <Radio.Group
              value={fontStyle}
              onChange={e => {
                setFontStyle(e.target.value);
              }}
            >
              <Radio value="normal">正常</Radio>
              <Radio value="italic">斜体</Radio>
            </Radio.Group>
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>是否加粗:</div>
          <div className={styles.wrap}>
            <Radio.Group
              value={weightBold}
              onChange={e => {
                setWeightBold(e.target.value);
              }}
            >
              <Radio value={true}>加粗</Radio>
              <Radio value={false}>不加粗</Radio>
            </Radio.Group>
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>字体装饰:</div>
          <div className={styles.wrap}>
            <Radio.Group
              value={decoration}
              onChange={e => {
                setDecoration(e.target.value);
              }}
            >
              <Radio value="none">正常</Radio>
              <Radio value="underline">下划线</Radio>
              <Radio value="line-through">删除线</Radio>
            </Radio.Group>
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>旋转角度:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={angle}
              min={-360}
              max={360}
              precision={0}
              onChange={value => {
                let num = isNaN(parseInt(value + ''))
                  ? angle
                  : parseInt(value + '');
                setAngle(num);
              }}
            />
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>水平对齐:</div>
          <div className={styles.wrap}>
            <Radio.Group
              value={horizontalAlignment}
              onChange={e => {
                setHorizontalAlignment(e.target.value);
              }}
            >
              <Radio value="left">左对齐</Radio>
              <Radio value="right">右对齐</Radio>
              <Radio value="center">居中</Radio>
            </Radio.Group>
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>垂直对齐:</div>
          <div className={styles.wrap}>
            <Radio.Group
              value={verticalAlignment}
              onChange={e => {
                setVerticalAlignment(e.target.value);
              }}
            >
              <Radio value="baseline">基线</Radio>
              <Radio value="top">上对齐</Radio>
              <Radio value="middle">居中</Radio>
              <Radio value="bottom">下对齐</Radio>
            </Radio.Group>
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>水平偏移量:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={xoffset}
              precision={0}
              onChange={value => {
                let num = isNaN(parseInt(value + ''))
                  ? xoffset
                  : parseInt(value + '');
                setXoffset(num);
              }}
            />
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>垂直偏移量:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={yoffset}
              precision={0}
              onChange={value => {
                let num = isNaN(parseInt(value + ''))
                  ? yoffset
                  : parseInt(value + '');
                setYoffset(num);
              }}
            />
          </div>
        </div> */}
      </Scrollbars>
    </div>
  );
};

export default TextSymbolEditor;
