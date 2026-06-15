import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as Canvas } from "../_libs/react-three__fiber.mjs";
import { C as ContactShadows, O as OrbitControls } from "../_libs/react-three__drei.mjs";
import "../_libs/three.mjs";
import "../_libs/zustand.mjs";
import "../_libs/use-sync-external-store.mjs";
import "../_libs/scheduler.mjs";
import "../_libs/its-fine.mjs";
import "../_libs/react-use-measure.mjs";
import "../_libs/babel__runtime.mjs";
import "../_libs/three-stdlib.mjs";
function ConfiguratorPage() {
  const [tankType, setTankType] = reactExports.useState("cube");
  const [propColor, setPropColor] = reactExports.useState("#8B4513");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col h-screen bg-slate-900 text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 relative cursor-grab active:cursor-grabbing", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Canvas, { camera: {
      position: [0, 2, 6],
      fov: 50
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("color", { attach: "background", args: ["#1e293b"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("ambientLight", { intensity: 0.7 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("directionalLight", { position: [10, 10, 5], intensity: 1.5 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("group", { position: [0, -1, 0], children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 1, 0], children: [
          tankType === "cube" ? /* @__PURE__ */ jsxRuntimeExports.jsx("boxGeometry", { args: [2, 2, 2] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("cylinderGeometry", { args: [1.5, 1.5, 2, 32] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: "#88ccff", transparent: true, opacity: 0.3, roughness: 0.1, metalness: 0.1 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("mesh", { position: [0, 0.5, 0], children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("dodecahedronGeometry", { args: [0.6] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("meshStandardMaterial", { color: propColor, roughness: 0.8 })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ContactShadows, { position: [0, -0.01, 0], resolution: 256, scale: 10, blur: 2, opacity: 0.4, far: 10, color: "#000000" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(OrbitControls, { makeDefault: true, minPolarAngle: 0, maxPolarAngle: Math.PI / 2 })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-auto md:h-1/3 bg-slate-800 p-6 shadow-xl border-t border-slate-700", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-2xl font-bold mb-4", children: "Aquarium Configurator (Sample)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col md:flex-row gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2 text-slate-300", children: "Tank Shape" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTankType("cube"), className: `px-4 py-2 rounded transition-colors ${tankType === "cube" ? "bg-cyan-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`, children: "Cube Setup" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTankType("cylinder"), className: `px-4 py-2 rounded transition-colors ${tankType === "cylinder" ? "bg-cyan-600 text-white" : "bg-slate-700 text-slate-300 hover:bg-slate-600"}`, children: "Cylinder Setup" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-lg font-semibold mb-2 text-slate-300", children: "Inner Prop Material" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 items-center h-10", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPropColor("#8B4513"), className: `w-10 h-10 rounded-full bg-[#8B4513] border-2 ${propColor === "#8B4513" ? "border-cyan-400 scale-110" : "border-transparent"} transition-all`, title: "Driftwood" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPropColor("#2E8B57"), className: `w-10 h-10 rounded-full bg-[#2E8B57] border-2 ${propColor === "#2E8B57" ? "border-cyan-400 scale-110" : "border-transparent"} transition-all`, title: "Aquatic Plant" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setPropColor("#A9A9A9"), className: `w-10 h-10 rounded-full bg-[#A9A9A9] border-2 ${propColor === "#A9A9A9" ? "border-cyan-400 scale-110" : "border-transparent"} transition-all`, title: "Dragon Stone" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-sm text-slate-400", children: "* Drag to rotate. Scroll to zoom. This is a functional sample using geometric primitives. You can replace these with your actual 3D `.glb` files later." })
    ] })
  ] });
}
export {
  ConfiguratorPage as component
};
