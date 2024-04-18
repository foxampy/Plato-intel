//map

ymaps.ready(function () {
    // Создание экземпляра карты и его привязка к созданному контейнеру.
    var myMap = new ymaps.Map('map2', {
            center: [53.915380, 27.571479],
            zoom: 10,
            behaviors: ['zoomControl', 'typeSelector', 'fullscreenControl']
        }, {
            searchControlProvider: 'yandex#search'
        });

    myMap.behaviors.disable('scrollZoom');
    myMap.behaviors.enable('drag');

    // Создание макета балуна на основе Twitter Bootstrap.
        MyBalloonLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="popover">' +
                '<a class="close" href="#">&times;</a>' +
                '<div class="popover-inner">' +
                    '$[[options.contentLayout]]' +
                '</div>' +
                '<div class="arrow"></div>' +
            '</div>', {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.popover', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function () {
                    this._$element.find('.close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                    });
                },

                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function (e) {
                    e.preventDefault();

                    this.events.fire('userclose');
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function (element) {
                    return element && element[0] && element.find('.arrow')[0];
                }
            }),


        MyBalloonLayout2 = ymaps.templateLayoutFactory.createClass(
            '<div class="popover _parking">' +
                '<a class="close" href="#">&times;</a>' +
                '<div class="popover-inner">' +
                    '$[[options.contentLayout]]' +
                '</div>' +
                '<div class="arrow"></div>' +
            '</div>', {
                /**
                 * Строит экземпляр макета на основе шаблона и добавляет его в родительский HTML-элемент.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#build
                 * @function
                 * @name build
                 */
                build: function () {
                    this.constructor.superclass.build.call(this);

                    this._$element = $('.popover', this.getParentElement());

                    this.applyElementOffset();

                    this._$element.find('.close')
                        .on('click', $.proxy(this.onCloseClick, this));
                },

                /**
                 * Удаляет содержимое макета из DOM.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/layout.templateBased.Base.xml#clear
                 * @function
                 * @name clear
                 */
                clear: function () {
                    this._$element.find('.close')
                        .off('click');

                    this.constructor.superclass.clear.call(this);
                },

                /**
                 * Сдвигаем балун, чтобы "хвостик" указывал на точку привязки.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name applyElementOffset
                 */
                applyElementOffset: function () {
                    this._$element.css({
                        left: -(this._$element[0].offsetWidth / 2),
                        top: -(this._$element[0].offsetHeight + this._$element.find('.arrow')[0].offsetHeight)
                    });
                },

                /**
                 * Закрывает балун при клике на крестик, кидая событие "userclose" на макете.
                 * @see https://api.yandex.ru/maps/doc/jsapi/2.1/ref/reference/IBalloonLayout.xml#event-userclose
                 * @function
                 * @name onCloseClick
                 */
                onCloseClick: function (e) {
                    e.preventDefault();

                    this.events.fire('userclose');
                },

                /**
                 * Проверяем наличие элемента (в ИЕ и Опере его еще может не быть).
                 * @function
                 * @private
                 * @name _isElement
                 * @param {jQuery} [element] Элемент.
                 * @returns {Boolean} Флаг наличия.
                 */
                _isElement: function (element) {
                    return element && element[0] && element.find('.arrow')[0];
                }
        }),

    // Создание вложенного макета содержимого балуна.
        MyBalloonContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div class="w-baloon">' +
                '<div class="wrapper">' +
                    '<div class="w-baloon-name">' +
                        '$[properties.balloonName]' +
                    '</div>' +
                    '<div class="w-baloon-description">' +
                        '$[properties.balloonDescription]' +
                    '</div>' +
                    '<div class="w-baloon-tel">' +
                        '$[properties.balloonTel]' +
                    '</div>' +
                '</div>' +
            '</div>'
            
        ),

    // Создание метки с пользовательским макетом балуна.
        myPlacemark = window.myPlacemark = new ymaps.Placemark([53.845193, 27.634650], {
            balloonName: 'Название представителя1',
            balloonDescription: 'г.Город, ул. Ленина, 15',
            balloonTel: '+375 (29) 777 77 77',
            }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,

                    iconLayout: 'default#image',
                    iconImageHref: 'assets/i/map_marker2.png',
                    iconImageSize: [26, 38],
                    iconImageOffset: [-13, -38]
                });
        myMap.geoObjects.add(myPlacemark);

        myPlacemark2 = window.myPlacemark = new ymaps.Placemark([53.940910, 27.703315], {
            balloonName: 'Название представителя2',
            balloonDescription: 'г.Город, ул. Ленина, 15',
            balloonTel: '+375 (29) 777 77 77',
            }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,

                    iconLayout: 'default#image',
                    iconImageHref: 'assets/i/map_marker2.png',
                    iconImageSize: [26, 38],
                    iconImageOffset: [-13, -38]
                });
        myMap.geoObjects.add(myPlacemark2);

        myPlacemark3 = window.myPlacemark = new ymaps.Placemark([53.957922, 27.530280], {
            balloonName: 'Название представителя3',
            balloonDescription: 'г.Город, ул. Ленина, 15',
            balloonTel: '+375 (29) 777 77 77',
            }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,

                    iconLayout: 'default#image',
                    iconImageHref: 'assets/i/map_marker2.png',
                    iconImageSize: [26, 38],
                    iconImageOffset: [-13, -38]
                });
        myMap.geoObjects.add(myPlacemark3);

        myPlacemark4 = window.myPlacemark = new ymaps.Placemark([53.904434, 27.100440], {
            balloonName: 'Название представителя3',
            balloonDescription: 'г.Город, ул. Ленина, 15',
            balloonTel: '+375 (29) 777 77 77',
            }, {
                    balloonShadow: false,
                    balloonLayout: MyBalloonLayout,
                    balloonContentLayout: MyBalloonContentLayout,
                    balloonPanelMaxMapArea: 0,
                    hideIconOnBalloonOpen: false,

                    iconLayout: 'default#image',
                    iconImageHref: 'assets/i/map_marker2.png',
                    iconImageSize: [26, 38],
                    iconImageOffset: [-13, -38]
                });
        myMap.geoObjects.add(myPlacemark4);

        

});