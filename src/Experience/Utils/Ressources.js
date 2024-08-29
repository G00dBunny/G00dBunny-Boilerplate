import EventEmitter from 'events'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

export default class Ressources extends EventEmitter {
  constructor(assets) {
    super()

    this.assets = assets

    this.items = {}
    this.toLoad = this.assets.length
    this.loaded = 0

    this.setLoaders()
    this.startLoading()
  }

  setLoaders() {
    this.loaders = {}
    this.loaders.gltfLoader = new GLTFLoader()
  }

  startLoading() {
    for (const asset of this.assets) {
      if (asset.type === 'glbModel') {
        this.loaders.gltfLoader.load(asset.path, (file) => {
          this.sourceLoaded(asset, file)
        })
      }
    }
  }

  sourceLoaded(asset, file) {
    this.items[asset.name] = file

    this.loaded++

    if (this.loaded === this.toLoad) {
      this.emit('ready')
    }
  }
}
