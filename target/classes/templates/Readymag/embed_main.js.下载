try {
	(function(root, document, opts, undefined) {
		var PREFIX = 'RM_EMBED_',
			f_name = PREFIX + root.parseInt((new Date).getTime() / (1000 * 60 * 60 * 24)),
			RM = root[f_name] = {},
			ORIGIN = 'https://embed.readymag.com',
			full_screen_origin, // Ориджин, открывшегося на полный экран мэга
			//ORIGIN = 'http://embed.otez.noip.me',
			VERSION_URL = '/v2',
			DOMAIN_PREFIX = '?domain=', // Для передачи кастомного домена эмбеду
			EMBED_RATIO = 1.335, // Соотношение сторон для начальной красивой отрисовки айфрейма
			EMBED_SCREENSHOT_RATIO = 1.52, // Соотношение сторон скриншотов для начальных размеров раскрытия
			host_body_overflow,
			host_body_overflowX,
			host_body_overflowY,
			host_html_overflow,
			host_html_overflowX,
			host_html_overflowY,
			device_type,
			overlayHideTimer,
			fullscreenIframeLoaded,
			isFullScreenContainerShrinked;


		//function createEmbedIframe(mag_url) {
		function createEmbedIframe(data) {
			var iframe = document.createElement('iframe'),
				path,
				src,
				origin,
				className = 'rm-mag-embed-rendered';

            if (data.origin) {
				ORIGIN = getOriginFromUrl(data.origin);
            }

			src = ORIGIN + VERSION_URL + '/' + (data.path ? data.path + '/' : '');
			if (data.domain) { src += DOMAIN_PREFIX + encodeURIComponent(data.domain); } // Кастомный домен
			iframe.src = src;

			if (data.width) {
				data.width = data.width == 'responsive' ? 1024 : data.width;
				iframe.style.maxWidth = data.width + 'px';
			}
			//if (data.height) { iframe.height = data.height; }
			iframe.className = className;

			iframe.setAttribute('frameborder', 0);
			iframe.setAttribute('id', PREFIX + (new Date).getTime());

			iframe.addEventListener = iframe.addEventListener || iframe.attachEvent;
			iframe.addEventListener('load', function() {
				iframe.contentWindow.postMessage('SaveParentWindow', "*");
			});



			return iframe;
		}

		function getOriginFromUrl (url) {
			return url.split('/')[0] + '//' + (url.split('@')[1] || url.split('//')[1]).split('/')[0]; //Отсекаем возможный пароль в урле и path
		}


		function bindListeners () {
			function bind(el, event, callback) {
				if (el.addEventListener) { el.addEventListener(event, callback) }
				else { el.attachEvent(event, callback) }
			}

			bind(root, 'message', onWindowMessage);
		}

		function addStyles (css_string) {
			if (RM.stylesAdded) { return; }

			var head = document.head || document.getElementsByTagName('head')[0],
				style = document.createElement('style');

			style.type = 'text/css';
			if (style.styleSheet){
				style.styleSheet.cssText = css_string;
			} else {
				style.appendChild(document.createTextNode(css_string));
			}

			head.appendChild(style);
			RM.stylesAdded = true;
		}

		function onFullscreenContainerMouseOut (e) {
			var container = document.getElementsByClassName('rm-mag-embed-fullscreen')[0];
			if (e.clientY < 20 && !/\sshrink\s/g.test(container.className)) {
				container.className += ' shrink '
				isFullScreenContainerShrinked = true;
			}
		}

		function onFullscreenContainerMouseOver (e) {
			if (!isFullScreenContainerShrinked) { return; }
			var container = document.getElementsByClassName('rm-mag-embed-fullscreen')[0];
			container.className = container.className.replace(/\sshrink\s/g, '');
			isFullScreenContainerShrinked = false;
		}

		function onWindowMessage (e) {
			var data, iframe;
			if (e.origin != ORIGIN && e.origin != full_screen_origin) { return; }

			try {
				data = JSON.parse(e.data);
			} catch (_e) {
				return;
			}

			iframe = getEventIframe(e);
			if (!iframe) { return; }

			dispatchEmbedEvent(data, iframe)
		}

		function dispatchEmbedEvent (event, iframe) {
			switch (event.type) {
				case 'fullscreen':
					showFullScreen(iframe, event.data);
					break;
				case 'device-type':
					setDeviceType(event.data);
					break;
				case 'resize':
					fixHeight(iframe, event.data);
					break;
				case 'close-fullscreen':
					hideFullScreen();
					break;
			}
		}

		function fixHeight(iframe, data) {
			iframe.height = data.height;
		}

		function getEventIframe(e) {
			var iframes = document.getElementsByTagName('iframe'),
				iframe;
			for (var i = iframes.length - 1; i >= 0; i--) {
				var _iframe = iframes[i];
				if (_iframe.contentWindow === e.source) {
					iframe = _iframe;
					break;
				}
			}
			return iframe;
		}


		function setDeviceType(tp) {
			device_type = tp;
		}

		function getMaxZindex() {
			var max = 0,
				els = document.getElementsByTagName('*'),
				el;

			for (var i = 0; i < els.length; i++) {
				el = els[i];
				max = Math.max(max, parseInt(getStyle(el, 'z-index'), 10) || 0);
			}
			return max;

			function getStyle(oElm, strCssRule){
				var strValue = "";
				if(document.defaultView && document.defaultView.getComputedStyle){
					strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
				}
				else if(oElm.currentStyle){
					strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
						return p1.toUpperCase();
					});
					strValue = oElm.currentStyle[strCssRule];
				}
				return strValue;
			}
		}

		function showFullScreen (embed_iframe, data) {
			var iframe = document.createElement('iframe'),
				container = document.createElement('div'),
				img_container = document.createElement('div'),
				img_container_inner = document.createElement('div'),
				close_button = document.createElement('div'),
				preloader_button = document.createElement('div'),
				boundingRect,
				body = document.body || document.getElementsByTagName('body')[0],
				html = document.getElementsByTagName('html')[0],
				max_zindex,
				src;

			if (!embed_iframe.getBoundingClientRect) { return; }

			full_screen_origin = getOriginFromUrl(data.mag_url);

			boundingRect = embed_iframe.getBoundingClientRect();

			container.className = 'rm-mag-embed-fullscreen-container';
			container.style.width = boundingRect.width + 'px';
			container.style.height = Math.floor(boundingRect.width / EMBED_SCREENSHOT_RATIO) + 'px'; // Высота только скриншота, а не всего айфрейма
			container.style.left = boundingRect.left + 'px';
			container.style.top = boundingRect.top + 'px';
			container.setAttribute('data-source-width', boundingRect.width);
			container.setAttribute('data-source-height', Math.floor(boundingRect.width / EMBED_SCREENSHOT_RATIO));
			container.setAttribute('data-source-left', boundingRect.left);
			container.setAttribute('data-source-top', boundingRect.top);

			max_zindex = getMaxZindex();
			if (max_zindex) { container.style.zIndex = max_zindex + 1; }

			img_container.className = 'img-container';
			img_container_inner.className = 'img-container-inner';
			img_container_inner.style.backgroundImage = 'url("' + data.cover + '")';
			img_container.style.zIndex = 1;

			close_button.className = 'close is' + (device_type || 'desktop'); //говорим кнопке на десктопе, телефоне или планшете мы
			close_button.style.zIndex = 2;
			close_button.innerHTML = 'Close';

			preloader_button.className = 'preloader is' + (device_type || 'desktop'); //говорим кнопке на десктопе, телефоне или планшете мы
			preloader_button.style.zIndex = 2;

			iframe.addEventListener('load', hideIframeOverlay);

			src = data.mag_url + '?embedMode=true';

			// Если эмбеддили сайт с кастомного домена, мы должны сказать название домена вьюверу
			if (data.embedDomainName) {
				src += '&embedDomainName=' + encodeURIComponent(data.embedDomainName) + '&embedDomainType=' + encodeURIComponent(data.embedDomainType);
			}

			iframe.src = src;
			iframe.className = 'rm-mag-embed-fullscreen';
			iframe.setAttribute('frameborder', 0);

			fullscreenIframeLoaded = false;

			container.addEventListener('mousewheel', stopEvent);

			img_container.appendChild(img_container_inner);

			container.appendChild(img_container);

			body.appendChild(container);

			setTimeout(function () {
				container.style.width = '100%';
				container.style.height = '100%';
				container.style.top = '0';
				container.style.left = '0';
				img_container_inner.style.opacity = 0;
			}, 30);

			setTimeout(function () {
				host_body_overflow = body.style.overflow;
				host_body_overflowX = body.style.overflowX;
				host_body_overflowY = body.style.overflowY;
				host_html_overflow = html.style.overflow;
				host_html_overflowX = html.style.overflowX;
				host_html_overflowY = html.style.overflowY;
				body.style.overflow = 'hidden';
				body.style.overflowX = 'hidden';
				body.style.overflowY = 'hidden';
				html.style.overflow = 'hidden';
				html.style.overflowX = 'hidden';
				html.style.overflowY = 'hidden';
				container.appendChild(iframe);
				container.appendChild(close_button);
				container.appendChild(preloader_button);

				close_button.addEventListener('click', hideFullScreen);
				container.addEventListener('mouseout', onFullscreenContainerMouseOut);
				container.addEventListener('mouseover', onFullscreenContainerMouseOver);
			}, 350);
		}


		function hideIframeOverlay() {
			var container = document.getElementsByClassName('rm-mag-embed-fullscreen-container')[0],
				img_container = container.getElementsByClassName('img-container')[0],
				close_button = container.getElementsByClassName('close')[0],
				preloader_button = container.getElementsByClassName('preloader')[0];

			img_container.style.opacity = 0;

			close_button.style.opacity = 0;
			preloader_button.style.opacity = 0;

			fullscreenIframeLoaded = true;

			overlayHideTimer = setTimeout(function () {
				img_container.style.zIndex = 'auto'; //ставим под ифрейм после конца анимации фейда
				close_button.style.display = 'none';
				preloader_button.style.display = 'none';
			}, 500);
		}

		function hideFullScreen () {

			clearTimeout(overlayHideTimer);

			var container = document.getElementsByClassName('rm-mag-embed-fullscreen-container')[0],
				img_container = container.getElementsByClassName('img-container')[0],
				img_container_inner = container.getElementsByClassName('img-container-inner')[0],
				close_button = container.getElementsByClassName('close')[0],
				preloader_button = container.getElementsByClassName('preloader')[0],
				iframe = container.getElementsByClassName('rm-mag-embed-fullscreen')[0],
				body = document.body || document.getElementsByTagName('body')[0],
				html = document.getElementsByTagName('html')[0],
				overlayFadeAnimation = fullscreenIframeLoaded ? 500 : 0;

			img_container.style.opacity = 1;

			container.removeEventListener('mouseout', onFullscreenContainerMouseOut);
			container.removeEventListener('mouseover', onFullscreenContainerMouseOver);

			//если ифрейм загрузился и оверлей спрятан
			if (fullscreenIframeLoaded) {
				close_button.style.zIndex = 1;//прячем под оверлей, чтобы нельзя было кликнуть второй раз, и чтобы она с фейдом исчезла перекрытая оверлеем
				preloader_button.style.zIndex = 1;//прячем под оверлей, чтобы нельзя было кликнуть второй раз, и чтобы она с фейдом исчезла перекрытая оверлеем
				img_container.style.zIndex = 2; //ставим обратно поверх ифрейма и поверх кнопки клоуса
			}

			setTimeout(function(){
				container.style.width = container.getAttribute('data-source-width') + 'px';
				container.style.height = container.getAttribute('data-source-height') + 'px';
				container.style.left = container.getAttribute('data-source-left') + 'px';
				container.style.top = container.getAttribute('data-source-top') + 'px';

				img_container_inner.style.opacity = 1;

				iframe.removeEventListener('load', hideIframeOverlay);

				close_button && close_button.removeEventListener('click', hideFullScreen);
				iframe.parentNode.removeChild(iframe);
				close_button.parentNode.removeChild(close_button);
				preloader_button.parentNode.removeChild(preloader_button);
			}, overlayFadeAnimation);

			setTimeout(function () {
				body.style.overflow = host_body_overflow;
				body.style.overflowX = host_body_overflowX;
				body.style.overflowY = host_body_overflowY;
				html.style.overflow = host_html_overflow;
				html.style.overflowX = host_html_overflowX;
				html.style.overflowY = host_html_overflowY;
				container.parentNode.removeChild(container);
			}, 500 + overlayFadeAnimation);
		}

		function stopEvent (e) {
			e.preventDefault();
			e.stopPropagation();
		}

		// Экспортируем функцию parse глобально, чтобы ее можно было вызывать,
		// не загружая повторно скрипт
		root.RM_EMBED_parse =  RM.parse = function(callback) {
			var els = document.getElementsByTagName("a"),
				scripts = document.getElementsByTagName("script"),
				pattern = new RegExp("(^|\s)" + 'rm-mag-embed' + "(\s|$)"),
				boundingRect,
				i;

			// Массив живой, перебираем с конца, т.к. удаляем элементы
			for (i = els.length - 1; i >= 0 ; i--) {
				if (pattern.test(els[i].className)) {
					var el = els[i],
						mag_url = el.getAttribute('href'),
						path = el.getAttribute('data-uri'),
						domain = el.getAttribute('data-domain'),

						// Скрытый параметр, нужен для тестирования.
						// Базовый урл, откуда вызывать эмбеды. Напр. http://embed.myhost.com
						origin = el.getAttribute('data-origin'),
						width = el.getAttribute('data-width'),
						iframe,
						data;

					if (!mag_url) { return; }

					data = {
						mag_url: mag_url,
						path: path,
						domain: domain,
						origin:origin
					};

					if (width) { data.width = width };

					iframe = createEmbedIframe(data);
					el.parentNode.insertBefore(iframe, el);
					el.parentNode.removeChild(el);

					// Задаем начальную высоту ифрейма, близкую к той, что получится после отрендеривания
					boundingRect = iframe.getBoundingClientRect();
					//iframe.height = Math.floor(boundingRect.width / EMBED_RATIO);
					iframe.setAttribute('height', Math.floor(boundingRect.width / EMBED_RATIO));


					//setTimeout(function() {
					//	iframe.contentWindow.postMessage('Hello!', ORIGIN);
					//}, 3000);
				}
			}

			// Убираем init скрипты из хостового документа
			for (i = scripts.length - 1; i >= 0 ; i--) {
				if (scripts[i].id == 'readymag-embed-init') {
					scripts[i].parentNode.removeChild(scripts[i]);
				}
			}

			if (typeof callback == 'function') { callback.call(root); }
		};

		RM.processing = false;
		addStyles(opts.styles);
		bindListeners();
		RM.parse();

		if (typeof root.RM_EMBED_initAsync == 'function') {
			root.RM_EMBED_initAsync.call(root);
		}

	})(window, document, {
		styles: ' .rm-mag-embed-rendered { \
		border: 0px; \
		margin: 1px; \
		max-width: 512px; \
		width: calc(100% - 2px); \
		border-radius: 4px; \
		box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.09), 0 1px 2px rgba(0, 0, 0, 0.24); \
		display: block; \
		display: inline-block; \
		padding: 0px; \
		} \
		.rm-mag-embed-fullscreen-container { \
		position: fixed; \
		background-color: rgba(0, 0, 0, 0.6); \
		-webkit-transition: width 0.3s ease-in-out, height 0.3s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out; \
		-moz-transition: width 0.3s ease-in-out, height 0.3s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out; \
		-ms-transition: width 0.3s ease-in-out, height 0.3s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out; \
		-o-transition: width 0.3s ease-in-out, height 0.3s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out; \
		transition: width 0.3s ease-in-out, height 0.3s ease-in-out, left 0.3s ease-in-out, top 0.3s ease-in-out; \
		}\
		.rm-mag-embed-fullscreen { \
			-webkit-transition: -webkit-transform 0.1s ease-in-out; \
			-moz-transition: -moz-transform 0.1s ease-in-out; \
			-ms-transition: -ms-transform 0.1s ease-in-out; \
			-o-transition: -o-transform 0.1s ease-in-out; \
			transition: transform 0.1s ease-in-out; \
		} \
		.rm-mag-embed-fullscreen.shrink { \
			-webkit-transform: scale(0.92); \
			transform: scale(0.92); \
		} \
		.rm-mag-embed-fullscreen-container .img-container { \
		position: absolute; \
		left: 0;\
		top: 0;\
		width: 100%; \
		height: 100%; \
		background-color: #000;\
		-webkit-transition: opacity 0.5s ease-in-out; \
		-moz-transition: opacity 0.5s ease-in-out; \
		-ms-transition: opacity 0.5s ease-in-out; \
		-o-transition: opacity 0.5s ease-in-out; \
		transition: opacity 0.5s ease-in-out; \
		}\
		.rm-mag-embed-fullscreen-container .img-container .img-container-inner { \
		position: absolute; \
		left: 0;\
		top: 0;\
		width: 100%; \
		height: 100%; \
		background-size: cover; \
		background-position: center; \
		-webkit-transition: opacity 0.5s ease-in-out; \
		-moz-transition: opacity 0.5s ease-in-out; \
		-ms-transition: opacity 0.5s ease-in-out; \
		-o-transition: opacity 0.5s ease-in-out; \
		transition: opacity 0.5s ease-in-out; \
		}\
		.rm-mag-embed-fullscreen-container iframe { \
		position: relative; \
		width: 100%; \
		height: 100%; \
		}\
		.rm-mag-embed-fullscreen-container .close { \
		position: absolute; \
		height: 50px; \
		border-radius: 25px; \
		cursor: pointer; \
		background-color: rgba(66, 66, 66, 0.64); \
		width: 96px;\
		color: #fff;\
		font-family: "Avenir Next", Helvetica, Arial;\
		font-size: 14px;\
		text-align: center;\
		line-height: 50px;\
		-webkit-transition: all 0.2s ease-in-out; \
		-moz-transition: all 0.2s ease-in-out; \
		-ms-transition: all 0.2s ease-in-out; \
		-o-transition: all 0.2s ease-in-out; \
		transition: all 0.2s ease-in-out; \
		}\
		.rm-mag-embed-fullscreen-container .close.isdesktop:hover,\
		.rm-mag-embed-fullscreen-container .close:active { \
			background-color: rgba(66, 66, 66, 0.82);\
		}\
		.rm-mag-embed-fullscreen-container .close.isdesktop { \
			top: 23px; \
			right: 23px;\
		}\
		.rm-mag-embed-fullscreen-container .close.istablet { \
			bottom: 8px; \
			right: 8px;\
		}\
		.rm-mag-embed-fullscreen-container .close.isphone { \
			bottom: 8px; \
			left: 8px;\
		}\
		.rm-mag-embed-fullscreen-container .preloader { \
		position: absolute; \
		width: 50px; \
		height: 50px; \
		border-radius: 25px; \
		background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAMAAAAp4XiDAAABs1BMVEX///8AAAD////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////C724SAAAAkXRSTlMAAAEJDCpSBxpkMlAlIwJHBCYNCx0Pb0YWClYho4I5RZ+bAwhtcmMuG1yzF324EAWizhV2ftSOvh/hPC9TWDFlZ3w4SSSHQWkrIomSlEg9PpdNfxJfDkw0VJ4GYHoTWayasINESzdaJ7arvIvBpy3IxHGGkcvAc9L59+yuNtfd2fb08fDt6ufjr94zd7HW5KVuMyYZNQAAAVxJREFUeF7t1EOTNEEQgOGt5ti2baxt27Zt+zN/8h62YyJmp6p75zKnfu9P5iUjy0oZHx9gIiTNfZSp1i4aAUwcRCuyt4yLJ+uCM8JGceATRNY10L4iXyMlG/V6X4fHK1dwERdpq7ZpFO+z4/6G8/Som51gkolbpQLkoldnm4RxViKoEWlAXvphK8VGcLKzEuSHmdq6pSwkoGx1gQ/RmXIdmkxLpTFQUH9PrwBJtGazrJAYTwaHkMSgMQBIOqcXScKCMRihHOXoLWE1jOgtU0iSSuEwIt9LIElsDkrmFxaRRK01wkhmaRlJaBUBEfj30DqSyNQ4VkjE0c1KJAEYRKi2tncAmkDCrLsV+0URTHdweASKIcRx8tTp5iRUhUfFHGTwLHuRIAAnCV1eXd9EhL604+7+IRuhATfxRx+fnl9ev3z9VvXD8pPrKTGRv37/+VuV/PdfmXt9JYyP7w3SkTJfCrZMygAAAABJRU5ErkJggg==);\
		background-size: 50px 50px;\
		background-color: rgba(66, 66, 66, 0.64); \
		-webkit-animation: rm_preloading_rotation 1.3s linear 0s infinite normal;\
		animation: rm_preloading_rotation 1.3s linear 0s infinite normal;\
		}\
		@-webkit-keyframes rm_preloading_rotation {\
			0% {-webkit-transform: rotate(0deg);}\
			100% {-webkit-transform: rotate(360deg);}\
		}\
		@keyframes rm_preloading_rotation {\
			0% {transform: rotate(0deg);}\
			100% {transform: rotate(360deg);}\
		}\
		.rm-mag-embed-fullscreen-container .preloader.isdesktop { \
			top: 23px; \
			right: 125px;\
		}\
		.rm-mag-embed-fullscreen-container .preloader.istablet { \
			bottom: 8px; \
			right: 110px;\
		}\
		.rm-mag-embed-fullscreen-container .preloader.isphone { \
			bottom: 8px; \
			right: 8px;\
		}\
		@media only screen and (-webkit-min-device-pixel-ratio: 2),\
	    only screen and (        min-device-pixel-ratio: 2),\
	    only screen and (                min-resolution: 192dpi) {\
		.rm-mag-embed-fullscreen-container .preloader { \
			background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAC1lBMVEX///8AAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8TLCq5AAAA8nRSTlMAAA0VHjIMHCohFCICEEsSGScWEQELBRsjGCa+ph2WaLVVKz55XXAx36RICiTyCVgXnrIGWTRPfGw4Nb2FB7BDdpVGUVMOzuT11Lc29iyT8boTrZh+oB8gbURNWw8DTmLaqFf6coeK1uEof5BUYULp9Objc/AldINFiImiRzxKxj8ECJI9gI5mb9CZj3jrQOiN8/jg7Nw5wbHT0sv57kFfZRou3XurXsNgyGriuPxkdZuv0Z06Le+83u07jMT3xbvAzMmCM3GaY0y01W7ZnOVpL1pWzcLKSb+Rx9iqKaw3a65Q21KzZ6OUz7ZcMIGEuZ99qVqEvPkAAAPzSURBVHhe7dhnU1RXHMfxnO2VZXtzYVlgl3XXpSO99xZ6iYiggCJojASQFulSjCEapVmiiTGxdxONvURjTe+9a+o7yGWGB2E2gXPu3p08Od838Jn/PTP3we+x/zccDofD4XA4HLBPrjScLXVJ9K0PiQ/TSIF9DiMsa6/LzfKQhPp3fd9Z5P3Kq0t8t/EoRoSm+Pb5z7g8EZKQ6LE0aJH3rlVvvbjB/TsuhQiNuTqmNN4e2R+61I8iRMD33LRzdcy6KaS8/Ob8DxOCiK91eMMP978qMRo7u6hAuk0dvZ2dU8hOzm7W9GnFGUHu7vtLBq43NK0SOY7Qgk+e7fAkbjEIwYwkm+7fNlY1HYk1MhxFyoIzwrad7PCstQG7kmKMDUdiN3rF8h1DWMzwcEK5JgT/2u4lhPHyQi+uI0hUFvNacPiXmsXgPwr8hjAKVnrlkkdkmgcmJjOYAWaplDD6rg50kUbUWacePDIxwKytW/nr1d+qXcgi3RxD1qk9XNnsiMyjObK6pZVBEmHUfs4xiAVgjhTXq1trzoWSQ+QasbiWIwdzpms5NzIynEUKYVsbGzWuAKL6/uHhj0vIIIEqldVqVcAgtJq6nuxsNglExFepVBIAlW9PdlycBwmEzeXz+VFwiPKnODe3SHREUVRUzNUByPrc8vOHXJERFoPBKJLCIolDN24c9URGpDo2W2eDRZhH79494Y2M8JRKJXsxLMI74e/vvxEZobsSAeiGCgsLa9ARtVrtB4/UtbW15SMjEj+JhAePtJjN5h/RL5HQ6SJ4pHUeETKSS6fTc+ERt8rKSn9kRMrj8RAQ8969n2UjIzSRSCQVwBrCvLy8L5qREZtQKCxTwCLM6GPHvnZHRhRlSUm0KFhkV8DYWHQ7MiJIotFYFuh3/z4gYEyHjAAWgbAgH4Wfrr91Kx+gI1FyucUCiVQd/EWvf0gCkVnklm44Q52eczA9nUsCAbIu2J9w05mLOb/XARIIfBytNuLMxTCnIrZ5ox9pI3qAMxFZ5IV9o5cixE5Fbr+2/s33R0OBExFB1eQHhFIY6ETE1p98efLKJ3o2cB7CiZ4YTH5vMsIAKED29Bco7Qn6wvG08eODP68PBxQg4jWHli2IM80kVH1pd5a/nTY+sY8JqEAKDi3bvvl8anJz+/TKIe1t0Pu8vrXiU0LJYwBKkMOEsTkzdc2Cx59OGbykvVxxL+XACgL59s7y46EKQA0SGLD9fGZm6vMEcnrHC88++dxTKWtXbPF5aWuFWUzhFBWfQxwyhex44x/IHxkUj2qcP68QyOlp5N7aAzkDjZQvd0Rc75HoCxNbfJK1f0V6FCPOg84Ph8PhcDgcDvc3K/kUNvWCGdcAAAAASUVORK5CYII=);\
		}\
		}'
	});

} catch (e) {
	console.error('Error loading Readymag embed script: \n' + (e.stackTrace || e.stack));
}
