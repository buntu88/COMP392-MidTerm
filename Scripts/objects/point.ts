/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    // POINT CLASS ++++++++++++++++++++++++++++++++++++++++++
    //Last Modified by      Vishal Guleria
    //Date last Modified    March 2,2016
    //Program description   COMP392 - MidTerm  The Tapered Tower
    export class Point {
        public x: number;
        public y: number;
        public z: number;
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(x: number, y: number, z: number) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
    }
}
