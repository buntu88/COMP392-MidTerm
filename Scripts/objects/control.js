/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    //Last Modified by      Vishal Guleria
    //Date last Modified    March 2,2016
    //Program description   COMP392 - MidTerm  The Tapered Tower
    // CONTROL CLASS ++++++++++++++++++++++++++++++++++++++++++
    var Control = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Control(rotationSpeed1, rotationSpeed2, rotationSpeed3, rotationSpeed4, rotationSpeed5, goDown) {
            this.rotationSpeed1 = rotationSpeed1;
            this.rotationSpeed2 = rotationSpeed2;
            this.rotationSpeed3 = rotationSpeed3;
            this.rotationSpeed4 = rotationSpeed4;
            this.rotationSpeed5 = rotationSpeed5;
            this.goDown = goDown;
        }
        Control.prototype.toggle = function () {
            this.goDown = this.goDown ? false : true;
            console.log(this.goDown);
        };
        return Control;
    }());
    objects.Control = Control;
})(objects || (objects = {}));

//# sourceMappingURL=control.js.map
