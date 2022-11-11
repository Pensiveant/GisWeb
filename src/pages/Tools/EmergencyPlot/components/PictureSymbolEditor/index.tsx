/*
 * @Description: 图片编辑器
 */
import React, { useState, useEffect } from 'react';
import { PictureOutlined } from '@ant-design/icons';
import { Input, InputNumber, Upload, Button, Tooltip } from 'antd';
import { Scrollbars } from 'react-custom-scrollbars'; // 滚动条组件
import styles from './index.less';

function PictureSymbolEditor(props: any) {
  const { setSymbol } = props;
  const [url, setUrl] = useState(''); // 图片url地址
  const [width, setWidth] = useState(80); // 图片宽度
  const [height, setHeight] = useState(80); // 图片高度
  const [angle, setAngle] = useState(0); // 旋转角度
  const [xoffset, setXoffset] = useState(0); // 水平偏移量
  const [yoffset, setYoffset] = useState(0); // 垂直偏移量

  useEffect(() => {
    update();
  }, [url, width, height, angle, xoffset, yoffset]);

  // 更新
  function update() {
    setSymbol({
      type: 'picture-marker',
      url: url,
      width: width,
      height: height,
      angle: angle, // 旋转角度
      xoffset: xoffset, // 水平偏移量
      yoffset: yoffset, // 垂直偏移量
    });
  }

  return (
    <div className={styles['symbol-editor']}>
      <Scrollbars>
        <div className={styles.section}>
          <div className={styles.sectionTitle}>图片url</div>
          <div className={styles.dls}>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                <div
                  className={styles.valueWrap}
                  style={{ width: 200, display: 'flex' }}
                >
                  <Input
                    className={styles.input}
                    style={{
                      flex: 1,
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                    value={url}
                    onChange={(e) => {
                      setUrl(e.target.value);
                    }}
                  />
                  <Upload
                    accept=".jpg, .jpeg, .png"
                    beforeUpload={(file, fileList) => {
                      const reader = new FileReader();
                      reader.onload = function (e) {
                        setUrl(e?.target?.result as string);
                      };
                      reader.readAsDataURL(file);
                      return false;
                    }}
                    showUploadList={false}
                  >
                    <Tooltip title="本地图片">
                      <Button
                        type="primary"
                        style={{
                          height: 24,
                          padding: '0 15px',
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                        }}
                      >
                        <PictureOutlined />
                      </Button>
                    </Tooltip>
                  </Upload>
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
                  <Input
                    value={width}
                    className={styles.input}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      let value = Number(e.target.value);
                      if (value) {
                        setWidth(value);
                      } else {
                        setWidth(width);
                      }
                    }}
                  />
                </div>
                <div className={styles.desc}>像素</div>
              </dt>
              <dd className={styles.dd}>
                <div className={styles.label}>宽度</div>
              </dd>
            </dl>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                <div className={styles.valueWrap}>
                  <Input
                    value={height}
                    className={styles.input}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      let value = Number(e.target.value);
                      if (value) {
                        setHeight(value);
                      } else {
                        setHeight(height);
                      }
                    }}
                  />
                </div>
                <div className={styles.desc}>像素</div>
              </dt>
              <dd className={styles.dd}>
                <div className={styles.label}>高度</div>
              </dd>
            </dl>
          </div>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionTitle}>偏移</div>
          <div className={styles.dls}>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                <div className={styles.valueWrap}>
                  <Input
                    value={xoffset}
                    className={styles.input}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      let value = Number(e.target.value);
                      if (value) {
                        setXoffset(value);
                      } else {
                        setXoffset(xoffset);
                      }
                    }}
                  />
                </div>
                <div className={styles.desc}>像素</div>
              </dt>
              <dd className={styles.dd}>
                <div className={styles.label}>水平</div>
              </dd>
            </dl>
            <dl className={styles.dl}>
              <dt className={styles.dt}>
                <div className={styles.valueWrap}>
                  <Input
                    value={yoffset}
                    className={styles.input}
                    onChange={(e) => {
                      // console.log(e.target.value);
                      let value = Number(e.target.value);
                      if (value) {
                        setYoffset(value);
                      } else {
                        setYoffset(yoffset);
                      }
                    }}
                  />
                </div>
                <div className={styles.desc}>像素</div>
              </dt>
              <dd className={styles.dd}>
                <div className={styles.label}>垂直</div>
              </dd>
            </dl>
          </div>
        </div>

        {/* <div className={styles.row}>
          <div className={styles.label}>图片url:</div>
          <div className={styles.wrap} style={{ display: 'flex' }}>
            <Input
              style={{ flex: 1 }}
              value={url}
              onChange={e => {
                setUrl(e.target.value);
              }}
            />

            <Upload
              accept=".jpg, .jpeg, .png"
              beforeUpload={(file, fileList) => {
                const reader = new FileReader();
                reader.onload = function(e) {
                  setUrl(e?.target?.result as string);
                };
                reader.readAsDataURL(file);
                return false;
              }}
              showUploadList={false}
            >
              <Tooltip title="本地图片">
                <Button type="primary">
                  <PictureOutlined />
                </Button>
              </Tooltip>
            </Upload>
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>图片宽度:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={width}
              min={10}
              precision={0}
              onChange={value => {
                let num: number = isNaN(parseInt(value + ''))
                  ? width
                  : parseInt(value + '');
                setWidth(num);
              }}
            />
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>图片高度:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={height}
              min={10}
              precision={0}
              onChange={value => {
                let num: number = isNaN(parseInt(value + ''))
                  ? height
                  : parseInt(value + '');
                setHeight(num);
              }}
            />
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
                let num: number = isNaN(parseInt(value + ''))
                  ? angle
                  : parseInt(value + '');
                setAngle(num);
              }}
            />
          </div>
        </div> */}

        {/* <div className={styles.row}>
          <div className={styles.label}>水平偏移量:</div>
          <div className={styles.wrap}>
            <InputNumber
              value={xoffset}
              precision={0}
              onChange={value => {
                let num: number = isNaN(parseInt(value + ''))
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
                let num: number = isNaN(parseInt(value + ''))
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
}

export default PictureSymbolEditor;
