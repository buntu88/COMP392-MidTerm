/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    export class gameObject extends THREE.Mesh {
        //PRIVATE INSTANCE VARIABLES +++++++++++++++++++++++++++++++++++++
        //Last Modified by      Vishal Guleria
        //Date last Modified    March 2,2016
        //Program description   COMP392 - MidTerm  The Tapered Tower
        private _geometry: THREE.Geometry;
        private _material: THREE.Material;
        //CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++++++++++++++
        constructor(geometry: THREE.Geometry, material: THREE.Material, x: number, y: number, z: number) {
            super(geometry, material);
            this._geometry = geometry;
            this._material = material;
            this.position.x = x;
            this.position.y = y;
            this.position.z = z;
            this.receiveShadow = true;
            this.castShadow = true;
        }
    }
}