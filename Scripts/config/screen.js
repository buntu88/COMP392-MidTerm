var config;
(function (config) {
    var Screen = (function () {
        function Screen() {
        }
        Screen.WIDTH = 1280;
        Screen.HEIGHT = 720;
        Screen.RATIO = 16 / 9;
        return Screen;
    }());
    config.Screen = Screen;
})(config || (config = {}));

//# sourceMappingURL=screen.js.map
