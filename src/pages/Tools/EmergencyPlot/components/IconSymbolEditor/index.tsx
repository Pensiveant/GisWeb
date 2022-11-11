/**
 * Icon 符号编辑 组件
 *
 */

import React, { useState, useEffect } from 'react';
import { Input, InputNumber } from 'antd';
import styles from '../index.less';

const IconSymbolEditor = (props: any) => {
  const {
    setIconSymbol,
    iconUrl,
    initValues, //
  } = props;
  const [fillSize, setFillSize] = useState(initValues?.size || 64); // 符号大小

  useEffect(() => {
    update();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fillSize]);

  // 更新
  function update() {
    setIconSymbol({
      type: 'picture-marker', // autocasts as new PictureMarkerSymbol()
      url: iconUrl,
      size: Number(fillSize),
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
                <InputNumber
                  size="small"
                  min={1}
                  max={100}
                  value={fillSize}
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

      {/* <div className={styles.row}>
        <div className={styles.label}>符号大小:</div>
        <div className={styles.wrap}>
          <Input
            value={fillSize}
            onChange={e => {
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
      </div> */}
    </div>
  );
};

export default IconSymbolEditor;
