import { r as reactExports } from "./react.mjs";
import { _ as _extends } from "./babel__runtime.mjs";
import { O as OrbitControls$1, H as HorizontalBlurShader, V as VerticalBlurShader } from "./three-stdlib.mjs";
import { u as useThree, a as useFrame } from "./react-three__fiber.mjs";
import { k as WebGLRenderTarget, l as PlaneGeometry, M as Mesh, m as MeshDepthMaterial, e as Color, f as ShaderMaterial } from "./three.mjs";
const OrbitControls = /* @__PURE__ */ reactExports.forwardRef(({
  makeDefault,
  camera,
  regress,
  domElement,
  enableDamping = true,
  keyEvents = false,
  onChange,
  onStart,
  onEnd,
  ...restProps
}, ref) => {
  const invalidate = useThree((state) => state.invalidate);
  const defaultCamera = useThree((state) => state.camera);
  const gl = useThree((state) => state.gl);
  const events = useThree((state) => state.events);
  const setEvents = useThree((state) => state.setEvents);
  const set = useThree((state) => state.set);
  const get = useThree((state) => state.get);
  const performance = useThree((state) => state.performance);
  const explCamera = camera || defaultCamera;
  const explDomElement = domElement || events.connected || gl.domElement;
  const controls = reactExports.useMemo(() => new OrbitControls$1(explCamera), [explCamera]);
  useFrame(() => {
    if (controls.enabled) controls.update();
  }, -1);
  reactExports.useEffect(() => {
    if (keyEvents) {
      controls.connect(keyEvents === true ? explDomElement : keyEvents);
    }
    controls.connect(explDomElement);
    return () => void controls.dispose();
  }, [keyEvents, explDomElement, regress, controls, invalidate]);
  reactExports.useEffect(() => {
    const callback = (e) => {
      invalidate();
      if (regress) performance.regress();
      if (onChange) onChange(e);
    };
    const onStartCb = (e) => {
      if (onStart) onStart(e);
    };
    const onEndCb = (e) => {
      if (onEnd) onEnd(e);
    };
    controls.addEventListener("change", callback);
    controls.addEventListener("start", onStartCb);
    controls.addEventListener("end", onEndCb);
    return () => {
      controls.removeEventListener("start", onStartCb);
      controls.removeEventListener("end", onEndCb);
      controls.removeEventListener("change", callback);
    };
  }, [onChange, onStart, onEnd, controls, invalidate, setEvents]);
  reactExports.useEffect(() => {
    if (makeDefault) {
      const old = get().controls;
      set({
        controls
      });
      return () => set({
        controls: old
      });
    }
  }, [makeDefault, controls]);
  return /* @__PURE__ */ reactExports.createElement("primitive", _extends({
    ref,
    object: controls,
    enableDamping
  }, restProps));
});
const ContactShadows = /* @__PURE__ */ reactExports.forwardRef(({
  scale = 10,
  frames = Infinity,
  opacity = 1,
  width = 1,
  height = 1,
  blur = 1,
  near = 0,
  far = 10,
  resolution = 512,
  smooth = true,
  color = "#000000",
  depthWrite = false,
  renderOrder,
  ...props
}, fref) => {
  const ref = reactExports.useRef(null);
  const scene = useThree((state) => state.scene);
  const gl = useThree((state) => state.gl);
  const shadowCamera = reactExports.useRef(null);
  width = width * (Array.isArray(scale) ? scale[0] : scale || 1);
  height = height * (Array.isArray(scale) ? scale[1] : scale || 1);
  const [renderTarget, planeGeometry, depthMaterial, blurPlane, horizontalBlurMaterial, verticalBlurMaterial, renderTargetBlur] = reactExports.useMemo(() => {
    const renderTarget2 = new WebGLRenderTarget(resolution, resolution);
    const renderTargetBlur2 = new WebGLRenderTarget(resolution, resolution);
    renderTargetBlur2.texture.generateMipmaps = renderTarget2.texture.generateMipmaps = false;
    const planeGeometry2 = new PlaneGeometry(width, height).rotateX(Math.PI / 2);
    const blurPlane2 = new Mesh(planeGeometry2);
    const depthMaterial2 = new MeshDepthMaterial();
    depthMaterial2.depthTest = depthMaterial2.depthWrite = false;
    depthMaterial2.onBeforeCompile = (shader) => {
      shader.uniforms = {
        ...shader.uniforms,
        ucolor: {
          value: new Color(color)
        }
      };
      shader.fragmentShader = shader.fragmentShader.replace(
        `void main() {`,
        //
        `uniform vec3 ucolor;
           void main() {
          `
      );
      shader.fragmentShader = shader.fragmentShader.replace(
        "vec4( vec3( 1.0 - fragCoordZ ), opacity );",
        // Colorize the shadow, multiply by the falloff so that the center can remain darker
        "vec4( ucolor * fragCoordZ * 2.0, ( 1.0 - fragCoordZ ) * 1.0 );"
      );
    };
    const horizontalBlurMaterial2 = new ShaderMaterial(HorizontalBlurShader);
    const verticalBlurMaterial2 = new ShaderMaterial(VerticalBlurShader);
    verticalBlurMaterial2.depthTest = horizontalBlurMaterial2.depthTest = false;
    return [renderTarget2, planeGeometry2, depthMaterial2, blurPlane2, horizontalBlurMaterial2, verticalBlurMaterial2, renderTargetBlur2];
  }, [resolution, width, height, scale, color]);
  const blurShadows = (blur2) => {
    blurPlane.visible = true;
    blurPlane.material = horizontalBlurMaterial;
    horizontalBlurMaterial.uniforms.tDiffuse.value = renderTarget.texture;
    horizontalBlurMaterial.uniforms.h.value = blur2 * 1 / 256;
    gl.setRenderTarget(renderTargetBlur);
    gl.render(blurPlane, shadowCamera.current);
    blurPlane.material = verticalBlurMaterial;
    verticalBlurMaterial.uniforms.tDiffuse.value = renderTargetBlur.texture;
    verticalBlurMaterial.uniforms.v.value = blur2 * 1 / 256;
    gl.setRenderTarget(renderTarget);
    gl.render(blurPlane, shadowCamera.current);
    blurPlane.visible = false;
  };
  let count = 0;
  let initialBackground;
  let initialOverrideMaterial;
  useFrame(() => {
    if (shadowCamera.current && (frames === Infinity || count < frames)) {
      count++;
      initialBackground = scene.background;
      initialOverrideMaterial = scene.overrideMaterial;
      ref.current.visible = false;
      scene.background = null;
      scene.overrideMaterial = depthMaterial;
      gl.setRenderTarget(renderTarget);
      gl.render(scene, shadowCamera.current);
      blurShadows(blur);
      if (smooth) blurShadows(blur * 0.4);
      gl.setRenderTarget(null);
      ref.current.visible = true;
      scene.overrideMaterial = initialOverrideMaterial;
      scene.background = initialBackground;
    }
  });
  reactExports.useImperativeHandle(fref, () => ref.current, []);
  return /* @__PURE__ */ reactExports.createElement("group", _extends({
    "rotation-x": Math.PI / 2
  }, props, {
    ref
  }), /* @__PURE__ */ reactExports.createElement("mesh", {
    renderOrder,
    geometry: planeGeometry,
    scale: [1, -1, 1],
    rotation: [-Math.PI / 2, 0, 0]
  }, /* @__PURE__ */ reactExports.createElement("meshBasicMaterial", {
    transparent: true,
    map: renderTarget.texture,
    opacity,
    depthWrite
  })), /* @__PURE__ */ reactExports.createElement("orthographicCamera", {
    ref: shadowCamera,
    args: [-width / 2, width / 2, height / 2, -height / 2, near, far]
  }));
});
export {
  ContactShadows as C,
  OrbitControls as O
};
