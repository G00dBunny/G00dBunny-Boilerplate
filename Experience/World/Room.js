/**
 * This class has to be renamed to your choice => I choose room because thats what I'm going to display
 */

import * as THREE from 'three'
import Experience from '../Experience'

export default class Room {
  constructor() {
    this.experience = new Experience()
    this.scene = this.experience.scene

    const geometry = new THREE.BoxGeometry(1, 1, 1)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    this.scene.add(cube)
  }

  resize() {}

  update() {}
}
