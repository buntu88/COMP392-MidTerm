/// <reference path="../../typings/tsd.d.ts"/>

module objects {
    //Last Modified by      Vishal Guleria
    //Date last Modified    March 2,2016
    //Program description   COMP392 - MidTerm  The Tapered Tower

    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    export class Control { 
        
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        constructor(public rotationSpeed1: number, public rotationSpeed2: number, public rotationSpeed3: number, public rotationSpeed4: number, public rotationSpeed5: number, public goDown: boolean) {

        }


        public toggle() {
            this.goDown = this.goDown ? false : true;
            console.log(this.goDown);
        }
        //PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++
       
    }
}
