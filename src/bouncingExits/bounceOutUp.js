/*! Animatelo | The MIT License (MIT) | Copyright (c) 2017 GibboK */
; (function (animatelo) {
    'use strict';
    animatelo.bounceOutUp = function (selector, options) {
        var keyframeset = [
            {
                "opacity": "1",
                "transform": "none",
                "offset": "0",
                "easing": "ease"
            },
            {
                "transform": "translate3d(0, -10px, 0)",
                "offset": "0.2",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "transform": "translate3d(0, 20px, 0)",
                "offset": "0.4",
                "easing": "ease"
            },
            {
                "opacity": "1",
                "transform": "translate3d(0, 20px, 0)",
                "offset": "0.45",
                "easing": "ease"
            },
            {
                "opacity": "0",
                "transform": "translate3d(0, -2000px, 0)",
                "offset": "1",
                "easing": "ease"
            }
        ];
        return animatelo._animate(selector, keyframeset, options);
    }
})(window.animatelo = window.animatelo || {});
