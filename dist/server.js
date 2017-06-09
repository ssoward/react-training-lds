/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.app = undefined;

	__webpack_require__(1);

	__webpack_require__(2);

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _path = __webpack_require__(4);

	var _path2 = _interopRequireDefault(_path);

	var _compression = __webpack_require__(5);

	var _compression2 = _interopRequireDefault(_compression);

	var _helmet = __webpack_require__(6);

	var _helmet2 = _interopRequireDefault(_helmet);

	var _bodyParser = __webpack_require__(7);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _routes = __webpack_require__(8);

	var _server = __webpack_require__(11);

	var _server2 = _interopRequireDefault(_server);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create express app...
	var app = exports.app = (0, _express2.default)();

	// the reactified route-handler from the `app`
	var APP_WEB_BASE_PATH = process.env.APP_WEB_BASE_PATH;

	// middleware

	app.use((0, _compression2.default)());
	app.use((0, _helmet2.default)());
	app.use(APP_WEB_BASE_PATH + '/static', _express2.default.static(_path2.default.join(__dirname, 'static')));
	app.use(_bodyParser2.default.urlencoded({ extended: false }));
	app.use(_bodyParser2.default.json());

	app.use(APP_WEB_BASE_PATH + '/api', _routes.api);

	// handle routes via react...
	app.get("*", _server2.default);

	// prepare 404
	app.use("*", function (req, res, next) {
	    // eslint-disable-line
	    next({ status: 404, message: "Not Found" });
	});

	// handle any errors
	app.use(function (err, req, res, next) {
	    // eslint-disable-line
	    res.status(err.status || 500).send(err.message || "Application Error");
	    console.error(err.status === 404 ? '404 ' + req.url : err.stack); // eslint-disable-line
	});

	var PORT = process.env.PORT;


	app.listen(PORT, function () {
	    return console.log('Running on port ' + PORT);
	}); // eslint-disable-line

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("dotenv/config");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = require("isomorphic-fetch");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = require("express");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = require("path");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = require("compression");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = require("helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = require("body-parser");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _api = __webpack_require__(9);

	Object.defineProperty(exports, 'api', {
	  enumerable: true,
	  get: function get() {
	    return _api.router;
	  }
	});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.router = undefined;

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _cors = __webpack_require__(10);

	var _cors2 = _interopRequireDefault(_cors);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var router = exports.router = _express2.default.Router();

	var APP_WEB_BASE_PATH = process.env.APP_WEB_BASE_PATH;


	router.get('/nav', (0, _cors2.default)(), function (req, res) {
	    res.send([{
	        "href": APP_WEB_BASE_PATH + '/',
	        "text": "Home",
	        "rel": "home"
	    }, {
	        "href": APP_WEB_BASE_PATH + '/not-found',
	        "text": "404"
	    }]);
	});

	router.get('/user', (0, _cors2.default)(), function (req, res) {
	    res.send({
	        id: 1,
	        name: 'from server'
	    });
	});

	exports.default = router;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = require("cors");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _HTML = __webpack_require__(13);

	var _HTML2 = _interopRequireDefault(_HTML);

	var _server = __webpack_require__(14);

	var _reactRouter = __webpack_require__(15);

	var _reactRedux = __webpack_require__(16);

	var _reactHelmet = __webpack_require__(17);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _b = __webpack_require__(18);

	var _routes = __webpack_require__(19);

	var _routes2 = _interopRequireDefault(_routes);

	var _store = __webpack_require__(41);

	var _store2 = _interopRequireDefault(_store);

	var _htmlMinifier = __webpack_require__(74);

	var _ssResolve = __webpack_require__(75);

	var _env = __webpack_require__(24);

	var env = _interopRequireWildcard(_env);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (req, res, next) {
	    (0, _reactRouter.match)({ routes: _routes2.default, location: req.url }, function (err, redirect, props) {

	        if (err) {
	            return next(err);
	        } else if (redirect) {
	            res.redirect(redirect.pathname + redirect.search);
	        } else if (props) {
	            var store = (0, _store2.default)();

	            (0, _ssResolve.resolve)(props, store).then(function () {
	                var initialState = store.getState();
	                var httpStatus = (0, _store.selectHTTPResponseCode)(initialState);
	                var opaqueStateString = (0, _b.encode)(JSON.stringify(initialState));

	                var content = (0, _server.renderToString)(_react2.default.createElement(
	                    _reactRedux.Provider,
	                    { store: store },
	                    _react2.default.createElement(_reactRouter.RouterContext, props)
	                ));

	                res.status(httpStatus).send((0, _htmlMinifier.minify)((0, _HTML2.default)(_extends({}, _reactHelmet2.default.rewind(), {
	                    content: content,
	                    initialState: opaqueStateString,
	                    env: env,
	                    base_path: env.APP_WEB_BASE_PATH
	                })), { collapseWhitespace: true, removeAttributeQuotes: true }));
	            }).catch(next);
	        } else {
	            res.status(404).send('Not Found');
	        }
	    });
	};

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (_ref) {
	    var _ref$title = _ref.title,
	        title = _ref$title === undefined ? "" : _ref$title,
	        _ref$meta = _ref.meta,
	        meta = _ref$meta === undefined ? "" : _ref$meta,
	        _ref$links = _ref.links,
	        links = _ref$links === undefined ? "" : _ref$links,
	        _ref$content = _ref.content,
	        content = _ref$content === undefined ? "" : _ref$content,
	        _ref$initialState = _ref.initialState,
	        initialState = _ref$initialState === undefined ? {} : _ref$initialState,
	        _ref$env = _ref.env,
	        env = _ref$env === undefined ? {} : _ref$env,
	        _ref$base_path = _ref.base_path,
	        base_path = _ref$base_path === undefined ? "" : _ref$base_path;
	    return "\n<html>\n    <head>\n        <meta charset=\"utf-8\">\n        " + title + "\n        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n        " + meta + "\n        " + links + "\n        <link href=\"" + base_path + "/static/app.css\" rel=stylesheet>\n\n    </head>\n\n    <body>\n        <div id=app>" + content + "</div>\n        <script src=\"https://cdn.polyfill.io/v2/polyfill.min.js?features=fetch&unknown=polyfill\"></script>\n        <script>\n            window.__INITIAL_STATE__ = " + JSON.stringify(initialState) + ";\n            window.__APP_ENV_VARS__ = " + JSON.stringify(env) + ";\n        </script>\n        <script type=text/javascript src=\"" + base_path + "/static/app.js\" charset=utf-8 async></script>\n    </body>\n</html>\n";
	};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = require("react-dom/server");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = require("react-router");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = require("react-redux");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = require("react-helmet");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = require("@tuxsudo/b64");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(15);

	var _app = __webpack_require__(20);

	var _app2 = _interopRequireDefault(_app);

	var _home = __webpack_require__(49);

	var _home2 = _interopRequireDefault(_home);

	var _notFound = __webpack_require__(60);

	var _notFound2 = _interopRequireDefault(_notFound);

	var _env = __webpack_require__(24);

	var _readingList = __webpack_require__(65);

	var _readingList2 = _interopRequireDefault(_readingList);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var routes = _react2.default.createElement(
	  _reactRouter.Route,
	  { path: '' + (_env.APP_WEB_BASE_PATH || '/'), component: _app2.default },
	  _react2.default.createElement(_reactRouter.IndexRoute, { component: _home2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '/ReadingList', component: _readingList2.default }),
	  _react2.default.createElement(_reactRouter.Route, { path: '*', component: _notFound2.default })
	);

	exports.default = routes;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(16);

	var _reactHelmet = __webpack_require__(17);

	var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

	var _siteNav = __webpack_require__(21);

	var _AppView = __webpack_require__(26);

	var _AppView2 = _interopRequireDefault(_AppView);

	var _store = __webpack_require__(41);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	// argument 1 of react-redux `connect` maps store data to props
	var mapStateToProps = function mapStateToProps(state) {
	  var nav = (0, _store.selectSiteNav)(state);

	  var _selectPageMeta = (0, _store.selectPageMeta)(state),
	      title = _selectPageMeta.title,
	      meta = _selectPageMeta.meta;

	  return {
	    nav: nav,
	    homelink: (nav.find(function (n) {
	      return n.rel === "home";
	    }) || {}).href,
	    title: title, meta: meta
	  };
	};

	// argument 2 of react-redux `connect` maps actions to dispatch to props
	var bindActionsToDispatch = { initNav: _siteNav.init };

	// create the store connector HoC
	var storeConnector = (0, _reactRedux.connect)(mapStateToProps, bindActionsToDispatch);

	// create the container

	var AppContainer = function (_Component) {
	  _inherits(AppContainer, _Component);

	  function AppContainer() {
	    _classCallCheck(this, AppContainer);

	    return _possibleConstructorReturn(this, (AppContainer.__proto__ || Object.getPrototypeOf(AppContainer)).apply(this, arguments));
	  }

	  _createClass(AppContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      return this.props.initNav();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          children = _props.children,
	          title = _props.title,
	          meta = _props.meta,
	          props = _objectWithoutProperties(_props, ['children', 'title', 'meta']);

	      return _react2.default.createElement(
	        _AppView2.default,
	        props,
	        _react2.default.createElement(_reactHelmet2.default, { title: title, meta: meta }),
	        children
	      );
	    }
	  }], [{
	    key: 'onServer',


	    // if a promise is returned, server will wait
	    // to send response...
	    value: function onServer(props, store) {
	      return store.dispatch((0, _siteNav.init)());
	    }
	  }]);

	  return AppContainer;
	}(_react.Component);

	// Export the connected, container component...


	exports.default = storeConnector(AppContainer);

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.init = exports.setNav = undefined;

	var _siteNav = __webpack_require__(22);

	var _siteNav2 = __webpack_require__(23);

	var _siteNav3 = _interopRequireDefault(_siteNav2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setNav = exports.setNav = function setNav() {
	    var nav = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

	    return { type: _siteNav.RECEIVE_SITE_NAVIGATION, nav: nav };
	};

	var init = exports.init = function init() {
	    return function (dispatch) {
	        return (0, _siteNav3.default)().then(function (n) {
	            return dispatch(setNav(n));
	        });
	    };
	};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
	    var _ref = arguments[1];
	    var type = _ref.type,
	        _ref$nav = _ref.nav,
	        nav = _ref$nav === undefined ? [] : _ref$nav;

	    switch (type) {
	        case RECEIVE_SITE_NAVIGATION:
	            return nav;

	        default:
	            return state;
	    }
	};

	var RECEIVE_SITE_NAVIGATION = exports.RECEIVE_SITE_NAVIGATION = "RECEIVE_SITE_NAVIGATION";

	var selectSiteNav = exports.selectSiteNav = function selectSiteNav(state) {
	    return state;
	};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _env = __webpack_require__(24);

	exports.default = function () {
	    return fetch(_env.API_HOST + '/api/nav').then(function (response) {
	        return response.ok ? response.json() : Promise.reject(response);
	    });
	};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.ALLOW_REDUX_DEV_TOOLS = exports.API_HOST = exports.APP_WEB_BASE_PATH = undefined;

	var _isInBrowser = __webpack_require__(25);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//Grab variables from process.env or window
	var _ref = _isInBrowser2.default ? window.__APP_ENV_VARS__ : process.env;

	var APP_WEB_BASE_PATH = _ref.APP_WEB_BASE_PATH,
	    API_HOST = _ref.API_HOST,
	    ALLOW_REDUX_DEV_TOOLS = _ref.ALLOW_REDUX_DEV_TOOLS;
	exports.APP_WEB_BASE_PATH = APP_WEB_BASE_PATH;
	exports.API_HOST = API_HOST;
	exports.ALLOW_REDUX_DEV_TOOLS = ALLOW_REDUX_DEV_TOOLS;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

	module.exports = require("is-in-browser");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(27);

	var _SiteHeader = __webpack_require__(31);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	var _style = __webpack_require__(39);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var homelink = _ref.homelink,
	        children = _ref.children,
	        nav = _ref.nav;
	    return _react2.default.createElement(
	        'div',
	        { className: _style2.default.app },
	        _react2.default.createElement(_SiteHeader2.default, { className: _style2.default.header, links: nav, homelink: homelink }),
	        _react2.default.createElement(
	            'div',
	            { className: _style2.default.wrapper },
	            _react2.default.createElement(
	                'main',
	                { className: _style2.default.main },
	                children
	            )
	        )
	    );
	};

/***/ }),
/* 27 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }),
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _SiteHeader = __webpack_require__(32);

	var _SiteHeader2 = _interopRequireDefault(_SiteHeader);

	var _SiteNav = __webpack_require__(34);

	var _SiteNav2 = _interopRequireDefault(_SiteNav);

	var _joinClassnames = __webpack_require__(37);

	var _joinClassnames2 = _interopRequireDefault(_joinClassnames);

	var _logoPlaceholder = __webpack_require__(38);

	var _logoPlaceholder2 = _interopRequireDefault(_logoPlaceholder);

	var _reactRouter = __webpack_require__(15);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$homelink = _ref.homelink,
	        homelink = _ref$homelink === undefined ? "/" : _ref$homelink,
	        _ref$links = _ref.links,
	        links = _ref$links === undefined ? [] : _ref$links,
	        _ref$className = _ref.className,
	        className = _ref$className === undefined ? "" : _ref$className;
	    return _react2.default.createElement(
	        'header',
	        { className: (0, _joinClassnames2.default)(_SiteHeader2.default.header, className) },
	        _react2.default.createElement(
	            _reactRouter.IndexLink,
	            { to: homelink, className: _SiteHeader2.default.brand },
	            _react2.default.createElement('img', { className: _SiteHeader2.default.logo, src: _logoPlaceholder2.default, alt: 'My Brand' }),
	            _react2.default.createElement(
	                'span',
	                null,
	                'React Starter'
	            )
	        ),
	        _react2.default.createElement(_SiteNav2.default, { className: _SiteHeader2.default.nav, links: links })
	    );
	};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"header":"header-3hMBu","brand":"brand-3zuOx","logo":"logo-XG1YN"};

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _SiteNav = __webpack_require__(35);

	var _SiteNav2 = _interopRequireDefault(_SiteNav);

	var _reactRouter = __webpack_require__(15);

	var _joinClassnames = __webpack_require__(37);

	var _joinClassnames2 = _interopRequireDefault(_joinClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	    var _ref$links = _ref.links,
	        links = _ref$links === undefined ? [] : _ref$links,
	        _ref$className = _ref.className,
	        className = _ref$className === undefined ? "" : _ref$className;
	    return _react2.default.createElement(
	        'nav',
	        { className: (0, _joinClassnames2.default)(_SiteNav2.default.nav, className) },
	        links.map(function (_ref2, i) {
	            var href = _ref2.href,
	                text = _ref2.text;
	            return _react2.default.createElement(
	                _reactRouter.Link,
	                { className: _SiteNav2.default.link, key: i, to: href },
	                text
	            );
	        })
	    );
	};

/***/ }),
/* 35 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"nav":"nav-2wWVi","link":"link-2Vh5S"};

/***/ }),
/* 36 */,
/* 37 */
/***/ (function(module, exports) {

	module.exports = require("join-classnames");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "static/assets/logo-placeholder-b5.svg";

/***/ }),
/* 39 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"app":"app-1_LiW","header":"header-1fqSv","wrapper":"wrapper-1Zn8j"};

/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.selectMetaTags = exports.selectPageTitle = exports.selectPageMeta = exports.selectApplicationError = exports.selectAllApplicationErrors = exports.selectHTTPResponseCode = exports.selectSiteNav = undefined;

	var _redux = __webpack_require__(42);

	var _reduxThunk = __webpack_require__(43);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _isInBrowser = __webpack_require__(25);

	var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

	var _b = __webpack_require__(18);

	var _reactRouterRedux = __webpack_require__(44);

	var _env = __webpack_require__(24);

	var _system = __webpack_require__(45);

	var fromSystem = _interopRequireWildcard(_system);

	var _siteNav = __webpack_require__(22);

	var fromSiteNav = _interopRequireWildcard(_siteNav);

	var _pageMeta = __webpack_require__(46);

	var fromPageMeta = _interopRequireWildcard(_pageMeta);

	var _user = __webpack_require__(47);

	var _user2 = _interopRequireDefault(_user);

	var _settings = __webpack_require__(48);

	var _settings2 = _interopRequireDefault(_settings);

	function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// create the master reducer
	var rootReducer = (0, _redux.combineReducers)({ nav: fromSiteNav.default, system: fromSystem.default, routing: _reactRouterRedux.routerReducer, pageMeta: fromPageMeta.default, user: _user2.default, settings: _settings2.default });

	// Reexport scoped selectors here:
	var selectSiteNav = exports.selectSiteNav = function selectSiteNav(state) {
	  return fromSiteNav.selectSiteNav(state.nav);
	};

	var selectHTTPResponseCode = exports.selectHTTPResponseCode = function selectHTTPResponseCode(state) {
	  return fromSystem.selectHTTPResponseCode(state.system);
	};

	var selectAllApplicationErrors = exports.selectAllApplicationErrors = function selectAllApplicationErrors(state) {
	  return fromSystem.selectAllApplicationErrors(state.system);
	};

	var selectApplicationError = exports.selectApplicationError = function selectApplicationError(state, id) {
	  return fromSystem.selectApplicationError(state.system, id);
	};

	var selectPageMeta = exports.selectPageMeta = function selectPageMeta(state) {
	  return fromPageMeta.selectPageMeta(state.pageMeta);
	};

	var selectPageTitle = exports.selectPageTitle = function selectPageTitle(state) {
	  return fromPageMeta.selectPageTitle(state.pageMeta);
	};

	var selectMetaTags = exports.selectMetaTags = function selectMetaTags(state) {
	  return fromPageMeta.selectMetaTags(state.pageMeta);
	};

	// determine initial state
	var initialState = _isInBrowser2.default && window.__INITIAL_STATE__ ? JSON.parse((0, _b.decode)(window.__INITIAL_STATE__)) : {};

	var reduxMiddleware = (0, _redux.compose)((0, _redux.applyMiddleware)(_reduxThunk2.default), _isInBrowser2.default && _env.ALLOW_REDUX_DEV_TOOLS === "1" && typeof window.devToolsExtension !== "undefined" ? window.devToolsExtension() : function (f) {
	  return f;
	});

	// export a store creator factory with initial state if present...

	exports.default = function () {
	  return (0, _redux.createStore)(rootReducer, initialState, reduxMiddleware);
	};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

	module.exports = require("redux");

/***/ }),
/* 43 */
/***/ (function(module, exports) {

	module.exports = require("redux-thunk");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

	module.exports = require("react-router-redux");

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.selectSystemWorking = exports.selectApplicationError = exports.selectAllApplicationErrors = exports.selectHTTPResponseCode = exports.RECEIVE_LOADING_END = exports.RECEIVE_LOADING_START = exports.RECEIVE_APPLICATION_ERROR_REMOVAL = exports.RECEIVE_APPLICATION_ERROR = exports.RECEIVE_APPLICATION_ERROR_RESET = exports.RECEIVE_HTTP_RESPONSE_CODE_RESET = exports.RECEIVE_HTTP_RESPONSE_CODE = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _redux = __webpack_require__(42);

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var RECEIVE_HTTP_RESPONSE_CODE = exports.RECEIVE_HTTP_RESPONSE_CODE = "RECEIVE_HTTP_RESPONSE_CODE";
	var RECEIVE_HTTP_RESPONSE_CODE_RESET = exports.RECEIVE_HTTP_RESPONSE_CODE_RESET = "RECEIVE_HTTP_RESPONSE_CODE_RESET";

	var RECEIVE_APPLICATION_ERROR_RESET = exports.RECEIVE_APPLICATION_ERROR_RESET = "RECEIVE_APPLICATION_ERROR_RESET";
	var RECEIVE_APPLICATION_ERROR = exports.RECEIVE_APPLICATION_ERROR = "RECEIVE_APPLICATION_ERROR";
	var RECEIVE_APPLICATION_ERROR_REMOVAL = exports.RECEIVE_APPLICATION_ERROR_REMOVAL = "RECEIVE_APPLICATION_ERROR_REMOVAL";

	var RECEIVE_LOADING_START = exports.RECEIVE_LOADING_START = "RECEIVE_LOADING_START";
	var RECEIVE_LOADING_END = exports.RECEIVE_LOADING_END = "RECEIVE_LOADING_END";

	var httpResponse = function httpResponse() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 200;
	    var _ref = arguments[1];
	    var type = _ref.type,
	        httpCode = _ref.payload;

	    switch (type) {

	        case RECEIVE_HTTP_RESPONSE_CODE:
	            {
	                return httpCode;
	            }

	        case RECEIVE_HTTP_RESPONSE_CODE_RESET:
	            {
	                return 200;
	            }

	        default:
	            {
	                return state;
	            }
	    }
	};

	var errors = function errors() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	    var _ref2 = arguments[1];
	    var type = _ref2.type,
	        payload = _ref2.payload;

	    switch (type) {
	        case RECEIVE_APPLICATION_ERROR_RESET:
	            {
	                return {};
	            }

	        case RECEIVE_APPLICATION_ERROR:
	            {
	                var id = payload.id,
	                    title = payload.title,
	                    details = payload.details,
	                    date = payload.date;

	                return _extends({}, state, _defineProperty({}, id, { id: id, title: title, details: details, date: date }));
	            }

	        case RECEIVE_APPLICATION_ERROR_REMOVAL:
	            {
	                var _id = payload.id;

	                var newState = _extends({}, state);
	                delete newState[_id];
	                return newState;
	            }

	        default:
	            return state;
	    }
	};

	var working = function working() {
	    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	    var _ref3 = arguments[1];
	    var type = _ref3.type;

	    switch (type) {
	        case RECEIVE_LOADING_START:
	            {
	                return true;
	            }

	        case RECEIVE_LOADING_END:
	            {
	                return false;
	            }

	        default:
	            return state;
	    }
	};

	exports.default = (0, _redux.combineReducers)({ httpResponse: httpResponse, errors: errors, working: working });

	/*SELECTOR(S)*/

	var selectHTTPResponseCode = exports.selectHTTPResponseCode = function selectHTTPResponseCode(state) {
	    return state.httpResponse;
	};

	var selectAllApplicationErrors = exports.selectAllApplicationErrors = function selectAllApplicationErrors(state) {
	    return Object.keys(state.errors).map(function (key) {
	        return state.errors[key];
	    });
	};

	var selectApplicationError = exports.selectApplicationError = function selectApplicationError(state, id) {
	    return state.errors[id];
	};

	var selectSystemWorking = exports.selectSystemWorking = function selectSystemWorking(state) {
	    return state.working;
	};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RECEIVE_PAGE_META = exports.RECEIVE_PAGE_META = "RECEIVE_PAGE_META";

	exports.default = function () {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;

	  switch (type) {
	    case RECEIVE_PAGE_META:
	      {
	        var title = payload.title,
	            meta = payload.meta;

	        return { title: title, meta: meta };
	      }

	    default:
	      return state;
	  }
	};

	var selectPageMeta = exports.selectPageMeta = function selectPageMeta(state) {
	  return state;
	};
	var selectPageTitle = exports.selectPageTitle = function selectPageTitle(state) {
	  return state.title;
	};
	var selectMetaTags = exports.selectMetaTags = function selectMetaTags(state) {
	  return state.meta;
	};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var RECEIVE_USER = exports.RECEIVE_USER = "RECEIVE_USER";

	var userReducer = exports.userReducer = function userReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: "not set" };
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;

	  switch (type) {
	    case RECEIVE_USER:
	      var id = payload.id,
	          name = payload.name; //get only needed values

	      return { id: id, name: name };
	    default:
	      return state;
	  }
	};

	exports.default = userReducer;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var TOGGLE_GREETING = exports.TOGGLE_GREETING = "TOGGLE_GREETING";

	var defaultState = {
	  greetingVisible: true
	};

	var settings = function settings() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var _ref = arguments[1];
	  var type = _ref.type,
	      payload = _ref.payload;

	  switch (type) {
	    case TOGGLE_GREETING:
	      return _extends({}, state, { greetingVisible: !state.greetingVisible });
	    default:
	      return state;
	  }
	};

	exports.default = settings;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _LandingView = __webpack_require__(50);

	var _LandingView2 = _interopRequireDefault(_LandingView);

	var _reactRedux = __webpack_require__(16);

	var _pageMeta = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var pageMeta = {
	  title: "Homepage, yo!!",
	  tags: [{ "name": "description", "content": "A React Starter" }, { "property": "og:type", "content": "article" }]
	};

	// takes values from the redux store and maps them to props
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    //propName: state.data.specificData
	  };
	};

	// binds the result of action creators to redux dispatch, wrapped in callable functions
	var bindActionsToDispatch = function bindActionsToDispatch(dispatch) {
	  return {
	    setPageMeta: function setPageMeta(meta) {
	      dispatch((0, _pageMeta.setPageMeta)(meta));
	    }
	  };
	};

	// takes the result of mapStateToProps as store, and bindActionsToDispatch as actions
	// returns the final resulting props which will be passed to the component
	var mergeAllProps = function mergeAllProps(store, actions) {
	  return {
	    init: function init() {
	      return actions.setPageMeta(pageMeta);
	    },
	    title: "React/Redux Starter",
	    subtitle: "for isounimorphic applications",
	    hero: "http://lorempixel.com/1200/500/",
	    cta: "https://github.com/tuxsudo/react-starter"
	  };
	};

	var storeConnector = (0, _reactRedux.connect)(mapStateToProps, bindActionsToDispatch, mergeAllProps);

	var HomeContainer = function (_Component) {
	  _inherits(HomeContainer, _Component);

	  function HomeContainer() {
	    _classCallCheck(this, HomeContainer);

	    return _possibleConstructorReturn(this, (HomeContainer.__proto__ || Object.getPrototypeOf(HomeContainer)).apply(this, arguments));
	  }

	  _createClass(HomeContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.init();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_LandingView2.default, this.props);
	    }
	  }], [{
	    key: 'onServer',
	    value: function onServer(props, store) {
	      return store.dispatch((0, _pageMeta.setPageMeta)(pageMeta));
	    }
	  }]);

	  return HomeContainer;
	}(_react.Component);

	exports.default = storeConnector(HomeContainer);

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _Hero = __webpack_require__(51);

	var _Hero2 = _interopRequireDefault(_Hero);

	var _Button = __webpack_require__(54);

	var _Button2 = _interopRequireDefault(_Button);

	var _style = __webpack_require__(57);

	var _style2 = _interopRequireDefault(_style);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var LandingView = function LandingView(_ref) {
	  var hero = _ref.hero,
	      title = _ref.title,
	      subtitle = _ref.subtitle,
	      cta = _ref.cta;
	  return _react2.default.createElement(
	    'section',
	    null,
	    _react2.default.createElement(_Hero2.default, {
	      title: title,
	      subtitle: subtitle,
	      className: _style2.default.hero,
	      bgSrc: hero,
	      overlay: 'light'
	    }),
	    _react2.default.createElement(
	      'a',
	      { href: cta, className: _style2.default.link },
	      _react2.default.createElement(
	        _Button2.default,
	        null,
	        'learn more'
	      )
	    )
	  );
	};

	exports.default = LandingView;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.Hero = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(52);

	var _style2 = _interopRequireDefault(_style);

	var _joinClassnames = __webpack_require__(37);

	var _joinClassnames2 = _interopRequireDefault(_joinClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Hero = exports.Hero = function Hero(_ref) {
	    var title = _ref.title,
	        subtitle = _ref.subtitle,
	        bgSrc = _ref.bgSrc,
	        _ref$overlay = _ref.overlay,
	        overlay = _ref$overlay === undefined ? false : _ref$overlay,
	        href = _ref.href,
	        onClick = _ref.onClick,
	        className = _ref.className;
	    return _react2.default.createElement(
	        'a',
	        _extends({
	            className: (0, _joinClassnames2.default)(_style2.default.hero, className, (href || onClick) && _style2.default.clickable),
	            style: { backgroundImage: bgSrc ? 'url(' + bgSrc + ')' : "" },
	            onClick: onClick
	        }, href ? { href: href } : {}),
	        overlay && _react2.default.createElement('span', { className: (0, _joinClassnames2.default)(_style2.default.overlay, _style2.default[overlay]) }),
	        _react2.default.createElement(
	            'h1',
	            { className: _style2.default.title },
	            title,
	            subtitle && _react2.default.createElement(
	                'small',
	                { className: _style2.default.subtitle },
	                subtitle
	            )
	        )
	    );
	};

	exports.default = Hero;

/***/ }),
/* 52 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hero":"hero-3zNDL","clickable":"clickable-1q0Da","overlay":"overlay-3JGm0","light":"light-cXPBE","dark":"dark-3zVZL","title":"title-1F0q-","subtitle":"subtitle-16bY9","action":"action-3XyGa"};

/***/ }),
/* 53 */,
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _Button = __webpack_require__(55);

	var _Button2 = _interopRequireDefault(_Button);

	var _joinClassnames = __webpack_require__(37);

	var _joinClassnames2 = _interopRequireDefault(_joinClassnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var determineEmphasis = function determineEmphasis(emphasis) {

	    switch (emphasis) {

	        case "error":
	        case "warn":
	        case "success":
	            return emphasis;

	        case false:
	        case "secondary":
	            return "secondary";

	        default:
	            return "primary";

	    }
	};

	exports.default = function (_ref) {
	    var onClick = _ref.onClick,
	        _ref$type = _ref.type,
	        type = _ref$type === undefined ? "button" : _ref$type,
	        _ref$emphasis = _ref.emphasis,
	        emphasis = _ref$emphasis === undefined ? "primary" : _ref$emphasis,
	        _ref$disabled = _ref.disabled,
	        disabled = _ref$disabled === undefined ? false : _ref$disabled,
	        children = _ref.children,
	        _ref$value = _ref.value,
	        value = _ref$value === undefined ? "Submit" : _ref$value,
	        className = _ref.className;
	    return _react2.default.createElement(
	        'button',
	        {
	            type: type,
	            onClick: onClick,
	            className: (0, _joinClassnames2.default)(_Button2.default.button, _Button2.default[determineEmphasis(emphasis)], className),
	            disabled: disabled
	        },
	        children || value
	    );
	};

/***/ }),
/* 55 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"button":"button-16GD8","primary":"primary-3kvxO","secondary":"secondary-2u57_","success":"success-1jQ6f","error":"error-1ccvg","warn":"warn-3wAoG"};

/***/ }),
/* 56 */,
/* 57 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"hero":"hero-3ID_1","link":"link-Pwd1A"};

/***/ }),
/* 58 */,
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.setPageMeta = undefined;

	var _pageMeta = __webpack_require__(46);

	var setPageMeta = exports.setPageMeta = function setPageMeta(_ref) {
	  var title = _ref.title,
	      meta = _ref.meta;
	  return {
	    type: _pageMeta.RECEIVE_PAGE_META,
	    payload: { title: title, meta: meta }
	  };
	};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(16);

	var _system = __webpack_require__(61);

	var _pageMeta = __webpack_require__(59);

	var _Error = __webpack_require__(62);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var pageMeta = {
	  title: "Page Not Found :(",
	  tags: [{ "name": "description", "content": "This page was not found or an error occured" }, { "property": "og:type", "content": "article" }]
	};

	// takes values from the redux store and maps them to props
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    //propName: state.data.specificData
	  };
	};

	// binds the result of action creators to redux dispatch, wrapped in callable functions
	var bindActionsToDispatch = function bindActionsToDispatch(dispatch) {
	  return {
	    setPageMeta: function setPageMeta(meta) {
	      dispatch((0, _pageMeta.setPageMeta)(meta));
	    }
	  };
	};

	var mergeAllProps = function mergeAllProps(state, actions) {
	  return {
	    init: function init() {
	      return actions.setPageMeta(pageMeta);
	    },
	    title: "Page Not Found",
	    subtitle: "Sorry Not Sorry"
	  };
	};

	var storeConnector = (0, _reactRedux.connect)(mapStateToProps, bindActionsToDispatch, mergeAllProps);

	var NotFoundContainer = function (_Component) {
	  _inherits(NotFoundContainer, _Component);

	  function NotFoundContainer() {
	    _classCallCheck(this, NotFoundContainer);

	    return _possibleConstructorReturn(this, (NotFoundContainer.__proto__ || Object.getPrototypeOf(NotFoundContainer)).apply(this, arguments));
	  }

	  _createClass(NotFoundContainer, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.init();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_Error2.default, this.props);
	    }
	  }], [{
	    key: 'onServer',
	    value: function onServer(props, store) {
	      return Promise.all([store.dispatch((0, _pageMeta.setPageMeta)(pageMeta)), store.dispatch((0, _system.setHttpResponseCode)(404))]);
	    }
	  }]);

	  return NotFoundContainer;
	}(_react.Component);

	exports.default = storeConnector(NotFoundContainer);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.removeApplicationError = exports.addApplicationError = exports.resetApplicationErrors = exports.resetHttpResponseCode = exports.setHttpResponseCode = undefined;

	var _system = __webpack_require__(45);

	var setHttpResponseCode = exports.setHttpResponseCode = function setHttpResponseCode(code) {
	    return {
	        type: _system.RECEIVE_HTTP_RESPONSE_CODE,
	        payload: code
	    };
	};

	var resetHttpResponseCode = exports.resetHttpResponseCode = function resetHttpResponseCode() {
	    return {
	        type: _system.RECEIVE_HTTP_RESPONSE_CODE_RESET
	    };
	};

	var resetApplicationErrors = exports.resetApplicationErrors = function resetApplicationErrors() {
	    return {
	        type: _system.RECEIVE_APPLICATION_ERROR_RESET
	    };
	};

	var addApplicationError = exports.addApplicationError = function addApplicationError(_ref) {
	    var id = _ref.id,
	        title = _ref.title,
	        description = _ref.description,
	        date = _ref.date;
	    return {
	        type: _system.RECEIVE_APPLICATION_ERROR,
	        payload: { id: id, title: title, description: description, date: date }
	    };
	};

	var removeApplicationError = exports.removeApplicationError = function removeApplicationError(_ref2) {
	    var id = _ref2.id;
	    return {
	        type: _system.RECEIVE_APPLICATION_ERROR_REMOVAL,
	        payload: { id: id }
	    };
	};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _Error = __webpack_require__(63);

	var _Error2 = _interopRequireDefault(_Error);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var NotFound = function NotFound(_ref) {
	    var _ref$title = _ref.title,
	        title = _ref$title === undefined ? "Error..." : _ref$title,
	        subtitle = _ref.subtitle,
	        children = _ref.children;
	    return _react2.default.createElement(
	        'section',
	        { className: _Error2.default.container },
	        _react2.default.createElement(
	            'header',
	            { className: _Error2.default.header },
	            _react2.default.createElement(
	                'h1',
	                { className: _Error2.default.title },
	                'Not Found'
	            ),
	            subtitle && _react2.default.createElement(
	                'h2',
	                { className: _Error2.default.subtitle },
	                subtitle
	            )
	        ),
	        _react2.default.createElement(
	            'div',
	            null,
	            children
	        )
	    );
	};

	exports.default = NotFound;

/***/ }),
/* 63 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"container":"container-1RSyw","header":"header-W-se6","title":"title-EOE1e","subtitle":"subtitle-3RVsl"};

/***/ }),
/* 64 */,
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _reactRedux = __webpack_require__(16);

	var _pageMeta = __webpack_require__(59);

	var _ListView = __webpack_require__(66);

	var _ListView2 = _interopRequireDefault(_ListView);

	var _user = __webpack_require__(72);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var pageMeta = {
	  title: "...",
	  tags: [{ "name": "description", "content": "A React Starter" }, { "property": "og:type", "content": "article" }]
	};

	// takes values from the redux store and maps them to props
	var mapStateToProps = function mapStateToProps(state) {
	  return {
	    name: state.user.name
	  };
	};

	// binds the result of action creators to redux dispatch, wrapped in callable functions
	var bindActionsToDispatch = function bindActionsToDispatch(dispatch) {
	  return {
	    setPageMeta: function setPageMeta(meta) {
	      dispatch((0, _pageMeta.setPageMeta)(meta));
	    },
	    setUserInfo: function setUserInfo(meta) {
	      dispatch((0, _user.init)(meta));
	    }
	  };
	};

	// takes the result of mapStateToProps as store, and bindActionsToDispatch as actions
	// returns the final resulting props which will be passed to the component
	var mergeAllProps = function mergeAllProps(store, actions) {
	  return _extends({}, store, {
	    init: function init() {
	      actions.setPageMeta(pageMeta);
	      actions.setUserInfo();
	    },
	    welcomeText: 'welcome from container,  ' + store.name
	  });
	};

	var storeConnector = (0, _reactRedux.connect)(mapStateToProps, bindActionsToDispatch, mergeAllProps);

	var ReadingList = function (_Component) {
	  _inherits(ReadingList, _Component);

	  function ReadingList() {
	    _classCallCheck(this, ReadingList);

	    return _possibleConstructorReturn(this, (ReadingList.__proto__ || Object.getPrototypeOf(ReadingList)).apply(this, arguments));
	  }

	  _createClass(ReadingList, [{
	    key: 'componentDidMount',
	    value: function componentDidMount() {
	      this.props.init();
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_ListView2.default, this.props);
	    }
	  }], [{
	    key: 'onServer',
	    value: function onServer(props, store) {
	      return store.dispatch((0, _pageMeta.setPageMeta)(pageMeta));
	    }
	  }]);

	  return ReadingList;
	}(_react.Component);

	exports.default = storeConnector(ReadingList);

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	__webpack_require__(27);

	var _style = __webpack_require__(67);

	var _style2 = _interopRequireDefault(_style);

	var _Greeting = __webpack_require__(69);

	var _Greeting2 = _interopRequireDefault(_Greeting);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (_ref) {
	  var _ref$welcomeText = _ref.welcomeText,
	      welcomeText = _ref$welcomeText === undefined ? "There was no user provided." : _ref$welcomeText,
	      onCloseGreeting = _ref.onCloseGreeting,
	      _ref$isGreetingVisibl = _ref.isGreetingVisible,
	      isGreetingVisible = _ref$isGreetingVisibl === undefined ? true : _ref$isGreetingVisibl;
	  return _react2.default.createElement(
	    'div',
	    { className: _style2.default.app },
	    isGreetingVisible && _react2.default.createElement(_Greeting2.default, {
	      message: welcomeText,
	      onClose: onCloseGreeting
	    })
	  );
	};

/***/ }),
/* 67 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"default":"default-3kprG"};

/***/ }),
/* 68 */,
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.Greeting = undefined;

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	var _style = __webpack_require__(70);

	var _style2 = _interopRequireDefault(_style);

	var _joinClassnames = __webpack_require__(37);

	var _joinClassnames2 = _interopRequireDefault(_joinClassnames);

	var _Button = __webpack_require__(54);

	var _Button2 = _interopRequireDefault(_Button);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Greeting = exports.Greeting = function Greeting(_ref) {
	  var message = _ref.message,
	      onClose = _ref.onClose,
	      className = _ref.className;
	  return _react2.default.createElement(
	    'div',
	    { className: (0, _joinClassnames2.default)(className, _style2.default.default) },
	    _react2.default.createElement(
	      'h1',
	      { className: (0, _joinClassnames2.default)(_style2.default.title) },
	      message
	    ),
	    _react2.default.createElement(
	      _Button2.default,
	      { onClick: onClose },
	      '\u24E7'
	    )
	  );
	};

	exports.default = Greeting;

/***/ }),
/* 70 */
/***/ (function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"default":"default-1eXDi","title":"title-auPTR"};

/***/ }),
/* 71 */,
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.init = exports.setUser = undefined;

	var _user = __webpack_require__(47);

	var _user2 = __webpack_require__(73);

	var _user3 = _interopRequireDefault(_user2);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var setUser = exports.setUser = function setUser() {
	  var user = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

	  return { type: _user.RECEIVE_USER, payload: user };
	};

	var init = exports.init = function init() {
	  return function (dispatch) {
	    return (0, _user3.default)().then(function (n) {
	      return dispatch(setUser(n));
	    });
	  };
	};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _env = __webpack_require__(24);

	exports.default = function () {
	  return fetch(_env.API_HOST + '/api/user').then(function (response) {
	    return response.ok ? response.json() : Promise.reject(response);
	  });
	};

/***/ }),
/* 74 */
/***/ (function(module, exports) {

	module.exports = require("html-minifier");

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.wrap = exports.resolve = undefined;

	var _resolver = __webpack_require__(76);

	var _resolver2 = _interopRequireDefault(_resolver);

	var _wrap = __webpack_require__(77);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.resolve = _resolver2.default;
	exports.wrap = _wrap2.default;
	exports.default = { resolve: _resolver2.default, wrap: _wrap2.default };

/***/ }),
/* 76 */
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (props, store) {

	    var promises = (props.components || []).
	    // unwrap component if wrapped by react-redux bindings...
	    map(function (component) {
	        return component.WrappedComponent || component;
	    }

	    // grab only components with a static `load` method
	    ).filter(function (component) {
	        return component.onServer;
	    }

	    // execute onServer functions -- they should return a Promise
	    ).map(function (component) {
	        return component.onServer(props, store);
	    });

	    return Promise.all(promises);
	};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.addServerSideResolve = undefined;

	var _react = __webpack_require__(12);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var addServerSideResolve = exports.addServerSideResolve = function addServerSideResolve(beforeServerResponse) {
	    return function (Component) {

	        return _react2.default.createClass({ // eslint-disable-line
	            statics: {
	                onServer: function onServer(props, store) {
	                    return beforeServerResponse ? beforeServerResponse(props, store) : null;
	                }
	            },

	            render: function render() {
	                return _react2.default.createElement(Component, this.props);
	            }
	        });
	    };
	};

	exports.default = addServerSideResolve;

/***/ })
/******/ ]);