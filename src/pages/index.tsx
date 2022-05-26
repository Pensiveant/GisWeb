import styles from './index.less';
import '@arcgis/core/assets/esri/themes/dark/main.css';
import esriConfig from '@arcgis/core/config.js';
esriConfig.assetsPath = './arcgis/assets';

export default function IndexPage() {
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
    </div>
  );
}
