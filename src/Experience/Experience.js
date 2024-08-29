import * as THREE from 'three'
import Sizes from './Utils/Sizes'
import Camera from './Camera'
import Renderer from './Renderer'
import Time from './Utils/Time'
import World from './World/World'
import Ressources from './Utils/Ressources'
import assets from './Utils/assets'

export default class Experience {
  static instance

  constructor(canvas) {
    if (Experience.instance) {
      return Experience.instance
    }
    Experience.instance = this

    this.canvas = canvas
    this.sizes = new Sizes()
    this.time = new Time()
    this.scene = new THREE.Scene()
    this.camera = new Camera()
    this.ressources = new Ressources(assets)
    this.world = new World()
    this.renderer = new Renderer()

    this.sizes.on('resize', () => {
      this.resize()
    })

    this.time.on('update', () => {
      this.update()
    })
  }

  resize() {
    this.camera.resize()
    this.renderer.resize()
  }

  update() {
    this.camera.update()
    this.renderer.update()
  }
}
