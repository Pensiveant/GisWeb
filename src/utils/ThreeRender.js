import * as THREE from 'three';
import * as externalRenderers from '@arcgis/core/views/3d/externalRenderers';
import SpatialReference from '@arcgis/core/geometry/SpatialReference';

function ThreeRender(view) {
  this.view = view;

  this.renderer = null; // three.js renderer
  this.camera = null; // three.js camera
  this.scene = null; // three.js scene
  this.ambient = null; // three.js ambient light source
  this.sun = null; // three.js sun light source
  this.cube = null;
}

ThreeRender.prototype.setup = function (context) {
  // 初始化threejs的render
  this.renderer = new THREE.WebGLRenderer({
    context: context.gl, // 可用于将渲染器附加到已有的渲染环境(RenderingContext)中
    premultipliedAlpha: false, // renderer是否假设颜色有 premultiplied alpha. 默认为true
  });
  this.renderer.setPixelRatio(window.devicePixelRatio); // 设置设备像素比。通常用于避免HiDPI设备上绘图模糊
  this.renderer.setViewport(0, 0, this.view.width, this.view.height); // 视口大小设置

  // 防止Three.js清除ArcGIS JS API提供的缓冲区。
  this.renderer.autoClearDepth = false; // 定义renderer是否清除深度缓存
  this.renderer.autoClearStencil = false; // 定义renderer是否清除模板缓存
  this.renderer.autoClearColor = false; // 定义renderer是否清除

  // // ArcGIS JS API渲染自定义离屏缓冲区，而不是默认的帧缓冲区。
  // // 我们必须将这段代码注入到three.js运行时中，以便绑定这些缓冲区而不是默认的缓冲区。
  // const originalSetRenderTarget = this.renderer.setRenderTarget.bind(
  //   this.renderer,
  // );
  // this.renderer.setRenderTarget = function (target) {
  //   originalSetRenderTarget(target);
  //   if (target == null) {
  //     // 绑定外部渲染器应该渲染到的颜色和深度缓冲区
  //     context.bindRenderTarget();
  //   }
  // };

  this.scene = new THREE.Scene();
  this.camera = new THREE.PerspectiveCamera();

  // 光线
  this.ambient = new THREE.AmbientLight(0xffffff, 0.5);
  this.scene.add(this.ambient);
  this.sun = new THREE.DirectionalLight(0xffffff, 0.5);
  this.scene.add(this.sun);

  //  添加坐标轴辅助工具
  const axesHelper = new THREE.AxesHelper(6371000);
  this.scene.add(axesHelper);

  // 添加长方体
  const geometry = new THREE.BoxGeometry(1000, 1000, 1000);
  const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
  });
  const cube = new THREE.Mesh(geometry, material);

  const posEst = [104.06, 30.66, 500]; //  输入位置 [经度, 纬度, 高程]
  var destCoordinates = [0, 0, 0];
  externalRenderers.toRenderCoordinates(
    this.view,
    posEst,
    0,
    SpatialReference.WGS84,
    destCoordinates,
    0,
    1,
  );
  cube.position.set(destCoordinates[0], destCoordinates[1], destCoordinates[2]);

  this.cube = cube;
  this.scene.add(cube);

  context.resetWebGLState();
};

ThreeRender.prototype.render = function (context) {
  // 更新相机参数
  const cam = context.camera;
  this.camera.position.set(cam.eye[0], cam.eye[1], cam.eye[2]);
  this.camera.up.set(cam.up[0], cam.up[1], cam.up[2]);
  this.camera.lookAt(
    new THREE.Vector3(cam.center[0], cam.center[1], cam.center[2]),
  );
  // 投影矩阵可以直接复制
  this.camera.projectionMatrix.fromArray(cam.projectionMatrix);

  // 更新长方体
  this.cube.rotation.x += 0.01;
  this.cube.rotation.y += 0.01;

  // 绘制场景
  this.renderer.state.reset();
  context.bindRenderTarget(); //
  this.renderer.render(this.scene, this.camera);
  // 请求重绘视图。
  externalRenderers.requestRender(this.view);
  // cleanup
  context.resetWebGLState();
};

export default ThreeRender;
