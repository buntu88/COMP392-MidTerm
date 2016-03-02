/// <reference path="../../typings/tsd.d.ts"/>
var objects;
(function (objects) {
    // POINT CLASS ++++++++++++++++++++++++++++++++++++++++++
    //Last Modified by      Vishal Guleria
    //Date last Modified    March 2,2016
    //Program description   COMP392 - MidTerm  The Tapered Tower
    var Point = (function () {
        // CONSTRUCTOR ++++++++++++++++++++++++++++++++++++++++
        function Point(x, y, z) {
            this.x = x;
            this.y = y;
            this.z = z;
        }
        return Point;
    }());
    objects.Point = Point;
})(objects || (objects = {}));

//# sourceMappingURL=point.js.map
