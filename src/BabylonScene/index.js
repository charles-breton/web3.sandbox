import { jsx as _jsx } from "react/jsx-runtime";
import * as BABYLON from '@babylonjs/core';
import { Component } from 'react';

export default class BabylonScene extends Component {
  constructor() {
    // private scene: BABYLON.Scene;
    // private engine: BABYLON.Engine;
    // private canvas: HTMLCanvasElement;
    super(...arguments);
    this.onResizeWindow = () => {
      if (this.engine) {
        this.engine.resize();
        this.forceUpdate();
      }
    };
    this.onCanvasLoaded = (c) => {
      if (c !== null) {
        this.canvas = c;
      }
    };
  }
  componentDidMount() {
    this.engine = new BABYLON.Engine(this.canvas, true, this.props.engineOptions, this.props.adaptToDeviceRatio);
    let scene = new BABYLON.Scene(this.engine);

    //ADD ELEMENTS TO SCENE

    scene.collisionsEnabled = true;
    scene.gravity = new BABYLON.Vector3(0, -9.81, 0);
    scene.fogEnabled = true;
    scene.fogMode = BABYLON.Scene.FOGMODE_EXP2;
    scene.fogDensity = 0.01;
    scene.fogColor = new BABYLON.Color3(0.8, 0.9, 1.0);
    scene.clearColor = scene.fogColor;

    this.scene = scene;
    if (typeof this.props.onSceneMount === 'function') {
      this.props.onSceneMount({
        scene,
        engine: this.engine,
        canvas: this.canvas
      });
    }
    else {
      console.error('onSceneMount function not available');
    }
    // Resize the babylon engine when the window is resized
    window.addEventListener('resize', this.onResizeWindow);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResizeWindow);
  }
  render() {
    // 'rest' can contain additional properties that you can flow through to canvas:
    // (id, className, etc.)
    const _a = this.props, { width, height } = _a;
    const opts = {};
    if (width !== undefined && height !== undefined) {
      opts.width = width;
      opts.height = height;
    }
    else {
      opts.width = window.innerWidth;
      opts.height = window.innerHeight;
    }
    return (_jsx("canvas", Object.assign({}, opts, { ref: this.onCanvasLoaded }), void 0));
  }
}