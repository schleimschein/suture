(function () {
        // no promise support (<=IE11)
        if (!('Promise' in window)) {
            return;
        }

        // called when all fonts loaded
        function redrawFitty() {
            document.documentElement.classList.add('fonts-loaded');
            fitty.fitAll();
        }

        // CSS Font Loading API
        function native() {
            // load our custom Oswald font
            var fontSporting = new FontFace('Sporting Grotesque_Bold', 'url(Bold/Sporting_Grotesque-Bold_web.woff2)', {
                style: 'normal',
                weight: '400',
            });
            document.fonts.add(fontSporting);
            fontSporting.load();

            // if all fonts loaded redraw fitty
            document.fonts.ready.then(redrawFitty);
        }

        // FontFaceObserver
        function fallback() {
            var style = document.createElement('style');
            style.textContent =
                '@font-face { font-family: Sporting Grotesque_Bold; src: url(Bold/Sporting_Grotesque-Bold_web.woff2) format("woff2");}';
            document.head.appendChild(style);

            var s = document.createElement('script');
            s.src =
                'https://cdnjs.cloudflare.com/ajax/libs/fontfaceobserver/2.0.13/fontfaceobserver.standalone.js';
            s.onload = function () {
                new FontFaceObserver('Sporting Grotesque_Bold').load().then(redrawFitty);
            };
            document.body.appendChild(s);
        }

        // Does the current browser support the CSS Font Loading API?
        if ('fonts' in document) {
            native();
        } else {
            fallback();
        }
    })();
