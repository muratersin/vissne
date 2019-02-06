/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./app/assets/javascript/app/index.jsx","common","react"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/javascript/app/Root.jsx":
/*!********************************************!*\
  !*** ./app/assets/javascript/app/Root.jsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _Discover = __webpack_require__(/*! ./containers/Discover */ "./app/assets/javascript/app/containers/Discover/index.js");

var _Discover2 = _interopRequireDefault(_Discover);

var _Movie = __webpack_require__(/*! ./containers/Movie */ "./app/assets/javascript/app/containers/Movie/index.js");

var _Movie2 = _interopRequireDefault(_Movie);

var _Auth = __webpack_require__(/*! ./containers/Auth */ "./app/assets/javascript/app/containers/Auth/index.js");

var _Auth2 = _interopRequireDefault(_Auth);

var _Account = __webpack_require__(/*! ./containers/Account */ "./app/assets/javascript/app/containers/Account/index.js");

var _Account2 = _interopRequireDefault(_Account);

var _NotFound = __webpack_require__(/*! ./components/NotFound */ "./app/assets/javascript/app/components/NotFound/index.jsx");

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Alert = __webpack_require__(/*! ./containers/Alert */ "./app/assets/javascript/app/containers/Alert/index.js");

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Pages
var Root = function Root(_ref) {
  var store = _ref.store;
  return _react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(
      _react.Fragment,
      null,
      _react2.default.createElement(
        _reactRouterDom.BrowserRouter,
        null,
        _react2.default.createElement(
          _reactRouterDom.Switch,
          null,
          _react2.default.createElement(_reactRouterDom.Route, { path: '/', exact: true, component: _Discover2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/coming-soon', component: _Discover2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/in-theaters', component: _Discover2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/auth', component: _Auth2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/profile/account', component: _Account2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/movie/:slug/:id', component: _Movie2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { path: '/page-not-found', component: _NotFound2.default }),
          _react2.default.createElement(_reactRouterDom.Route, { component: _NotFound2.default })
        )
      ),
      _react2.default.createElement(_Alert2.default, null)
    )
  );
};

// Shared Components


Root.propTypes = {
  store: _propTypes2.default.instanceOf(Object).isRequired
};

exports.default = Root;

/***/ }),

/***/ "./app/assets/javascript/app/actions/account.js":
/*!******************************************************!*\
  !*** ./app/assets/javascript/app/actions/account.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.changePassword = exports.updateUser = exports.getAccountDetail = exports.setAccountDetail = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setAccountDetail = exports.setAccountDetail = function setAccountDetail(user) {
  return {
    type: _actionTypes.SET_ACCOUNT_DETAIL,
    payload: {
      user: user
    }
  };
};

var getAccountDetail = exports.getAccountDetail = function getAccountDetail() {
  return function (dispatch) {
    dispatch((0, _common.setPageLoadingStatus)(true));
    _axios2.default.get('/api/account').then(function (response) {
      dispatch((0, _common.setPageLoadingStatus)(false));
      dispatch(setAccountDetail(response.data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var updateUser = exports.updateUser = function updateUser(user) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.put('/api/user/' + user.id, user).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch(setAccountDetail(response.data));
      dispatch((0, _common.toggleAlert)({
        kind: 'success',
        message: 'Profile has been successfully updated.'
      }));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var changePassword = exports.changePassword = function changePassword(password) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.put('/api/user/change-password', password).then(function (response) {
      (0, _common.setLoadingStatus)(false);
      console.log(response);
      alert('ok');
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/actions/auth.js":
/*!***************************************************!*\
  !*** ./app/assets/javascript/app/actions/auth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logout = exports.loginRegister = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var loginRegister = exports.loginRegister = function loginRegister(data, url) {
  return function (dispatch) {
    dispatch((0, _common.setPageLoadingStatus)(true));
    _axios2.default.post(url, data).then(function () {
      window.location.href = '/';
      // TODO: set user information to common state
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var logout = exports.logout = function logout() {};

/***/ }),

/***/ "./app/assets/javascript/app/actions/common.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/actions/common.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setUploadedImage = exports.toggleFilter = exports.setLoadingStatus = exports.setPageLoadingStatus = exports.toggleAlert = undefined;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var toggleAlert = exports.toggleAlert = function toggleAlert(_ref) {
  var message = _ref.message,
      kind = _ref.kind;
  return {
    type: _actionTypes.TOGGLE_ALERT,
    message: message,
    kind: kind
  };
};

var setPageLoadingStatus = exports.setPageLoadingStatus = function setPageLoadingStatus(status) {
  return {
    type: _actionTypes.SET_PAGE_LOADING_STATUS,
    pageLoading: status
  };
};

var setLoadingStatus = exports.setLoadingStatus = function setLoadingStatus(status) {
  return {
    type: _actionTypes.SET_LOADING_STATUS,
    loading: status
  };
};

var toggleFilter = exports.toggleFilter = function toggleFilter() {
  return {
    type: _actionTypes.TOGGLE_FILTER
  };
};

var setUploadedImage = exports.setUploadedImage = function setUploadedImage(uploadedFile) {
  return {
    type: _actionTypes.SET_UPLOADED_IMAGE,
    payload: uploadedFile
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/actions/discover.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascript/app/actions/discover.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getGenres = exports.setGenres = exports.setQuery = exports.getMovies = exports.setMovies = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMovies = exports.setMovies = function setMovies(response) {
  return {
    type: _actionTypes.SET_MOVIES,
    movies: response.results,
    page: response.page + 1,
    totalPages: response.total_pages,
    total: response.total_results
  };
};

var getMovies = exports.getMovies = function getMovies(query) {
  var url = 'api/discover';

  Object.keys(query).forEach(function (queryName, i) {
    var value = query[queryName];
    var op = i === 0 ? '?' : '&';

    if (value) {
      if (!Array.isArray(value)) {
        url += '' + op + queryName + '=' + value;
      } else if (value.length > 0) {
        var multiQuery = queryName + '=';
        value.forEach(function (v) {
          multiQuery += v + ',';
        });
        url += '' + op + multiQuery;
      }
    }
  });

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.get(url).then(function (_ref) {
      var data = _ref.data;

      dispatch((0, _common.setLoadingStatus)(false));
      dispatch(setMovies(data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

var setQuery = exports.setQuery = function setQuery(_ref2) {
  var field = _ref2.field,
      value = _ref2.value;
  return function (dispatch) {
    dispatch({
      type: _actionTypes.SET_QUERY,
      field: field,
      value: value
    });
    return Promise.resolve();
  };
};

var setGenres = exports.setGenres = function setGenres(genres) {
  return {
    type: _actionTypes.SET_GENRES,
    genres: genres
  };
};

var getGenres = exports.getGenres = function getGenres() {
  return function (dispatch) {
    return _axios2.default.get('/api/genre').then(function (_ref3) {
      var data = _ref3.data;
      return dispatch(setGenres(data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/actions/movie.js":
/*!****************************************************!*\
  !*** ./app/assets/javascript/app/actions/movie.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMovieDetail = exports.setMovieDetail = undefined;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setMovieDetail = exports.setMovieDetail = function setMovieDetail(detail) {
  return {
    type: _actionTypes.SET_MOVIE_DETAIL,
    detail: detail
  };
};

var getMovieDetail = exports.getMovieDetail = function getMovieDetail(id) {
  return function (dispatch) {
    dispatch(setMovieDetail(null));

    _axios2.default.get('/api/movie/' + id).then(function (_ref) {
      var data = _ref.data;
      return dispatch(setMovieDetail(data));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
};

/***/ }),

/***/ "./app/assets/javascript/app/components/Cast/Cast.scss":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/components/Cast/Cast.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Cast/index.jsx":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/components/Cast/index.jsx ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

__webpack_require__(/*! ./Cast.scss */ "./app/assets/javascript/app/components/Cast/Cast.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cast = function Cast(_ref) {
  var id = _ref.id,
      name = _ref.name,
      character = _ref.character,
      profilePath = _ref.profilePath;
  return _react2.default.createElement(
    'div',
    { className: 'cast' },
    _react2.default.createElement('img', { className: 'image', src: profilePath, alt: name }),
    _react2.default.createElement(
      'div',
      { className: 'cast-info' },
      _react2.default.createElement(
        'span',
        { className: 'has-text-weight-bold' },
        name
      ),
      _react2.default.createElement(
        'span',
        { className: 'has-text-weight-light' },
        character
      )
    )
  );
};

Cast.propTypes = _propShapes.CastShape;

exports.default = Cast;

/***/ }),

/***/ "./app/assets/javascript/app/components/CastList/CastList.scss":
/*!*********************************************************************!*\
  !*** ./app/assets/javascript/app/components/CastList/CastList.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/CastList/index.jsx":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/CastList/index.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Cast = __webpack_require__(/*! ../Cast */ "./app/assets/javascript/app/components/Cast/index.jsx");

var _Cast2 = _interopRequireDefault(_Cast);

__webpack_require__(/*! ./CastList.scss */ "./app/assets/javascript/app/components/CastList/CastList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CastList = function CastList(_ref) {
  var casts = _ref.casts;

  var castList = casts.map(function (c) {
    return _react2.default.createElement(_Cast2.default, {
      key: c.id,
      name: c.name,
      profilePath: c.profilePath,
      character: c.character
    });
  });

  return _react2.default.createElement(
    'div',
    { className: 'card cast-list' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h5',
        { className: 'card-title' },
        'Cast list'
      ),
      castList
    )
  );
};

CastList.propTypes = {
  casts: _propTypes2.default.arrayOf(_propShapes.CastShape).isRequired
};

exports.default = CastList;

/***/ }),

/***/ "./app/assets/javascript/app/components/Company.jsx":
/*!**********************************************************!*\
  !*** ./app/assets/javascript/app/components/Company.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propShapes = __webpack_require__(/*! ../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Company = function Company(_ref) {
  var logo = _ref.logo,
      name = _ref.name;

  var logoPath = logo ? vissne.imagesSecureBaseUrl + '/w92/' + logo : vissne.cdn + '/images/placeholder.png';

  return _react2.default.createElement(
    'div',
    { className: 'media mb-2' },
    _react2.default.createElement('img', { className: 'mr-3 company-logo', src: logoPath, alt: name }),
    _react2.default.createElement(
      'div',
      { className: 'media-body' },
      _react2.default.createElement(
        'h6',
        { className: 'mt-0' },
        name
      )
    )
  );
};

Company.defaultProps = {
  logo: '',
  name: 'Company'
};

Company.propTypes = _propShapes.CompanyShape;

exports.default = Company;

/***/ }),

/***/ "./app/assets/javascript/app/components/CompanyList/CompanyList.scss":
/*!***************************************************************************!*\
  !*** ./app/assets/javascript/app/components/CompanyList/CompanyList.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/CompanyList/index.jsx":
/*!********************************************************************!*\
  !*** ./app/assets/javascript/app/components/CompanyList/index.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Company = __webpack_require__(/*! ../Company */ "./app/assets/javascript/app/components/Company.jsx");

var _Company2 = _interopRequireDefault(_Company);

__webpack_require__(/*! ./CompanyList.scss */ "./app/assets/javascript/app/components/CompanyList/CompanyList.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompanyList = function CompanyList(_ref) {
  var companies = _ref.companies;
  return _react2.default.createElement(
    'div',
    { className: 'card mb-2' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h5',
        { className: 'card-title' },
        'Companies'
      ),
      _react2.default.createElement(
        'div',
        { className: 'col-12' },
        companies.map(function (c) {
          return _react2.default.createElement(_Company2.default, { key: c.id, logo: c.logo_path, name: c.name });
        })
      )
    )
  );
};

CompanyList.propTypes = {
  companies: _propTypes2.default.arrayOf(_propShapes.CompanyShape).isRequired
};

exports.default = CompanyList;

/***/ }),

/***/ "./app/assets/javascript/app/components/DetailTable.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/DetailTable.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propShapes = __webpack_require__(/*! ../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DetailTable = function DetailTable(_ref) {
  var movie = _ref.movie;
  return _react2.default.createElement(
    'div',
    { className: 'card' },
    _react2.default.createElement(
      'div',
      { className: 'card-body' },
      _react2.default.createElement(
        'h5',
        { className: 'card-title' },
        movie.orginalTitle + ' (' + movie.year + ')'
      ),
      _react2.default.createElement(
        'table',
        { className: 'table table-striped table-responsive-sm table-responsive-xs' },
        _react2.default.createElement(
          'tbody',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Rating'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.vote_average + ' (' + movie.vote_count + ')'
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Release Date'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.release_date
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Genres'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.genreNames
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Tagline'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.tagline
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Countries'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.countries
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Languages'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.language
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Director'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.director
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Writer'
            ),
            _react2.default.createElement(
              'td',
              null,
              movie.writer
            )
          ),
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Homepage'
            ),
            _react2.default.createElement(
              'td',
              null,
              _react2.default.createElement(
                'a',
                { href: movie.homepage, rel: 'noopener noreferrer', target: '_blank' },
                movie.homepage
              )
            )
          )
        )
      )
    )
  );
};

DetailTable.propTypes = {
  movie: _propShapes.MovieShape.isRequired
};

exports.default = DetailTable;

/***/ }),

/***/ "./app/assets/javascript/app/components/Filter/Filter.scss":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/Filter/Filter.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Filter/index.jsx":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Filter/index.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _actionTypes = __webpack_require__(/*! ../../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

__webpack_require__(/*! ./Filter.scss */ "./app/assets/javascript/app/components/Filter/Filter.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function switchSortQuery(sortBy) {
  var _sortBy$split = sortBy.split('.'),
      _sortBy$split2 = _slicedToArray(_sortBy$split, 2),
      name = _sortBy$split2[0],
      kind = _sortBy$split2[1];

  var value = name + '.' + (kind === 'desc' ? 'asc' : 'desc');
  return {
    field: 'sortBy',
    value: value
  };
}

function addGenreId(value, currentGenres) {
  var index = currentGenres.indexOf(value);
  if (index === -1) {
    currentGenres.push(value);
  } else {
    currentGenres.splice(index, 1);
  }
  return currentGenres;
}

function handleChangeYear(year, setQuery) {
  if (year.length === 4 && !Number.isNaN(year)) {
    setQuery({
      field: 'year',
      value: year
    });
  } else if (year === '') {
    setQuery({
      field: 'year',
      value: null
    });
  }
}

var Filter = function Filter(props) {
  var genres = props.genres,
      setQuery = props.setQuery,
      query = props.query,
      show = props.show;


  if (!show) {
    return null;
  }

  var sortIconClass = query.sortBy.split('.')[1] === 'desc' ? 'down' : 'up';

  var sortOptions = _actionTypes.SORT_OPTIONS.map(function (sort) {
    var key = sort.name.replace(/ /g, '_').toLocaleLowerCase();
    return _react2.default.createElement(
      'option',
      { key: key, value: key + '.' + sort.value },
      sort.name
    );
  });

  var genreOptions = genres.map(function (g) {
    return _react2.default.createElement(
      'option',
      { key: g.id, value: g.id, className: query.withGenres.indexOf('' + g.id) === -1 ? '' : 'selected' },
      g.name
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'row sticky-top bg-white mb-2 pt-2 shadow-sm d-none d-lg-flex' },
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'Search',
        className: 'form-control filter-input',
        value: query.searchText,
        onChange: function onChange($event) {
          return setQuery({ field: 'searchText', value: $event.target.value });
        }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement(
        'select',
        {
          name: 'genre',
          className: 'form-control filter-input',
          onChange: function onChange($event) {
            return setQuery({ field: 'withGenres', value: addGenreId($event.target.value, query.withGenres) });
          }
        },
        _react2.default.createElement(
          'option',
          { value: '' },
          'Genres'
        ),
        genreOptions
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement(
        'div',
        { className: 'input-group' },
        _react2.default.createElement(
          'select',
          {
            name: 'sortBy',
            className: 'form-control filter-input',
            id: 'sortOptionSelect',
            'aria-label': 'Sort options',
            value: query.sortBy,
            onChange: function onChange($event) {
              return setQuery({ field: 'sortBy', value: $event.target.value });
            }
          },
          _react2.default.createElement(
            'option',
            { value: '' },
            'Sort By'
          ),
          sortOptions
        ),
        _react2.default.createElement(
          'div',
          { className: 'input-group-append' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-outline-secondary filter-input-button',
              onClick: function onClick() {
                return setQuery(switchSortQuery(query.sortBy));
              }
            },
            _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'sort-amount-' + sortIconClass })
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'col-12 col-sm-6 col-md-3 mb-2' },
      _react2.default.createElement('input', {
        type: 'text',
        placeholder: 'Year',
        className: 'form-control filter-input',
        onChange: function onChange($event) {
          return handleChangeYear($event.target.value, setQuery);
        }
      })
    )
  );
};

Filter.defaultProps = {
  show: true
};

Filter.propTypes = {
  genres: _propTypes2.default.arrayOf(_propShapes.GenreShape).isRequired,
  query: _propShapes.FilterShape.isRequired,
  setQuery: _propTypes2.default.func.isRequired,
  show: _propTypes2.default.bool
};

exports.default = Filter;

/***/ }),

/***/ "./app/assets/javascript/app/components/Footer/Footer.scss":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/Footer/Footer.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Footer/index.jsx":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Footer/index.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./Footer.scss */ "./app/assets/javascript/app/components/Footer/Footer.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'footer',
    { className: 'footer' },
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'row py-5' },
        _react2.default.createElement(
          'div',
          { className: 'col-12 col-sm-12 col-md-4' },
          _react2.default.createElement(
            'h5',
            null,
            'About Us'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
          ),
          _react2.default.createElement(
            'h5',
            null,
            'Social'
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-success btn-block' },
                'facebook'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-success btn-block' },
                'twitter'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'button',
                { type: 'button', className: 'btn btn-outline-success btn-block' },
                'instagram'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-12 col-sm-12 col-md-4' },
          _react2.default.createElement(
            'h5',
            null,
            'Last Reviews'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'list-unstyled' },
            _react2.default.createElement(
              'li',
              { className: 'media' },
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'h6',
                  { className: 'mt-0 mb-1' },
                  'List-based media object'
                ),
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'media my-4' },
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'h6',
                  { className: 'mt-0 mb-1' },
                  'List-based media object'
                ),
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...'
              )
            ),
            _react2.default.createElement(
              'li',
              { className: 'media' },
              _react2.default.createElement(
                'div',
                { className: 'media-body' },
                _react2.default.createElement(
                  'h6',
                  { className: 'mt-0 mb-1' },
                  'List-based media object'
                ),
                'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus...'
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-12 col-sm-12 col-md-4' },
          _react2.default.createElement(
            'h5',
            null,
            'Contact'
          ),
          _react2.default.createElement(
            'p',
            null,
            '+255 000 00 00 00'
          ),
          _react2.default.createElement(
            'p',
            null,
            'info@vissne.com'
          ),
          _react2.default.createElement(
            'h5',
            { className: 'mt-2' },
            'Last Updates'
          ),
          _react2.default.createElement(
            'ul',
            { className: 'list-group list-group-flush' },
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              'Add common filter for movies'
            ),
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              'Google auth options is completed'
            ),
            _react2.default.createElement(
              'li',
              { className: 'list-group-item' },
              'Fixed Facebook auth issues'
            )
          )
        )
      ),
      _react2.default.createElement(
        'div',
        { className: 'row d-flex justify-content-center mb-1' },
        _react2.default.createElement(
          'span',
          null,
          'Copyright \xA9 2019 Vissne'
        )
      )
    )
  );
};

exports.default = Footer;

/***/ }),

/***/ "./app/assets/javascript/app/components/Menu.jsx":
/*!*******************************************************!*\
  !*** ./app/assets/javascript/app/components/Menu.jsx ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var path = _ref.path,
      items = _ref.items;

  var menuItems = items.map(function (m) {
    return _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'nav-link ' + (m.path === path ? 'active' : ''),
          to: m.path,
          key: m.path
        },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: m.icon }),
        _react2.default.createElement(
          'span',
          { className: 'ml-2' },
          m.name
        )
      )
    );
  });

  return _react2.default.createElement(
    'ul',
    { className: 'nav nav-tabs justify-content-center' },
    menuItems
  );
};

exports.default = Menu;

/***/ }),

/***/ "./app/assets/javascript/app/components/MovieCard/MovieCard.scss":
/*!***********************************************************************!*\
  !*** ./app/assets/javascript/app/components/MovieCard/MovieCard.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/MovieCard/index.jsx":
/*!******************************************************************!*\
  !*** ./app/assets/javascript/app/components/MovieCard/index.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Poster = __webpack_require__(/*! ../Poster */ "./app/assets/javascript/app/components/Poster.jsx");

var _Poster2 = _interopRequireDefault(_Poster);

__webpack_require__(/*! ./MovieCard.scss */ "./app/assets/javascript/app/components/MovieCard/MovieCard.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieCard = function MovieCard(props) {
  var id = props.id,
      title = props.title,
      image = props.image,
      rate = props.rate,
      slug = props.slug;


  return _react2.default.createElement(
    'div',
    { className: 'movie-card h-100 w-100 rounded-0 d-flex align-items-center justify-content-center img-thumbnail' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: 'movie/' + slug + '/' + id, className: 'w-100' },
      _react2.default.createElement(
        'span',
        { className: 'badge rating-tag shadow-sm d-flex flex-column' },
        rate
      ),
      _react2.default.createElement(_Poster2.default, { src: image, alt: title })
    )
  );
};

MovieCard.propTypes = {
  id: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string.isRequired,
  image: _propTypes2.default.string.isRequired,
  rate: _propTypes2.default.number.isRequired,
  slug: _propTypes2.default.string.isRequired
};

exports.default = MovieCard;

/***/ }),

/***/ "./app/assets/javascript/app/components/MovieList.jsx":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/components/MovieList.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _MovieCard = __webpack_require__(/*! ./MovieCard */ "./app/assets/javascript/app/components/MovieCard/index.jsx");

var _MovieCard2 = _interopRequireDefault(_MovieCard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MovieList = function MovieList(_ref) {
  var movies = _ref.movies;

  var list = movies.map(function (movie) {
    return _react2.default.createElement(
      'div',
      { key: movie.id, className: 'col-12 col-sm-6 col-md-4 col-lg-2 mb-2 d-flex justify-content-center' },
      _react2.default.createElement(_MovieCard2.default, {
        id: movie.id,
        image: movie.poster,
        title: movie.title,
        rate: movie.voteAverage,
        slug: movie.slug
      })
    );
  });

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    list
  );
};

MovieList.propTypes = {
  movies: _propTypes2.default.arrayOf(_propShapes.MovieShape).isRequired
};

exports.default = MovieList;

/***/ }),

/***/ "./app/assets/javascript/app/components/Navbar/Navbar.scss":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/Navbar/Navbar.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Navbar/index.jsx":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Navbar/index.jsx ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

__webpack_require__(/*! ./Navbar.scss */ "./app/assets/javascript/app/components/Navbar/Navbar.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(props) {
  var user = props.user,
      isLoggedIn = props.isLoggedIn,
      pathName = props.pathName;


  var loginButton = isLoggedIn ? _react2.default.createElement(
    _react.Fragment,
    null,
    _react2.default.createElement(
      'li',
      { className: 'nav-item ' },
      _react2.default.createElement(
        _reactRouterDom.Link,
        { className: 'nav-link', to: '/profile/account', title: 'Profile' },
        _react2.default.createElement(
          'span',
          { className: 'mr-2' },
          user.userName
        ),
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'user' })
      )
    ),
    _react2.default.createElement(
      'li',
      { className: 'nav-item' },
      _react2.default.createElement(
        'a',
        { className: 'nav-link', href: '/logout', title: 'Logout' },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'sign-out-alt' })
      )
    )
  ) : _react2.default.createElement(
    'li',
    { className: 'nav-item' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: '/auth', className: 'nav-link' },
      'login'
    )
  );

  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-expand-lg navbar-dark bg-dark' },
    _react2.default.createElement(
      _reactRouterDom.Link,
      { className: 'navbar-brand', to: '/' },
      _react2.default.createElement('img', {
        src: vissne.cdn + '/images/logo.png',
        alt: 'Vissne',
        height: '30',
        className: 'mx-auto d-block'
      })
    ),
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'button',
        {
          className: 'navbar-toggler',
          type: 'button',
          id: 'filterButton'
        },
        _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'filter' })
      ),
      _react2.default.createElement(
        'button',
        {
          className: 'navbar-toggler',
          type: 'button',
          'data-toggle': 'collapse',
          'data-target': '#navbarSupportedContent',
          'aria-controls': 'navbarSupportedContent',
          'aria-expanded': 'false',
          'aria-label': 'Toggle navigation'
        },
        _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'collapse navbar-collapse', id: 'navbarSupportedContent' },
      _react2.default.createElement(
        'ul',
        { className: 'navbar-nav mr-auto' },
        _react2.default.createElement(
          'li',
          { className: 'nav-item' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              className: 'nav-link ' + (pathName === '/in-theaters' ? 'active' : ''),
              to: '/in-theaters'
            },
            'in theaters'
          )
        ),
        _react2.default.createElement(
          'li',
          { className: 'nav-item' },
          _react2.default.createElement(
            _reactRouterDom.Link,
            {
              className: 'nav-link ' + (pathName === '/coming-soon' ? 'active' : ''),
              to: '/coming-soon'
            },
            'coming soong'
          )
        )
      ),
      _react2.default.createElement(
        'ul',
        { className: 'navbar-nav my-auto' },
        loginButton
      )
    )
  );
};

Navbar.defaultProps = {
  isLoggedIn: false,
  user: {},
  pathName: '/'
};

Navbar.propTypes = {
  isLoggedIn: _propTypes2.default.bool,
  user: _propShapes.UserShape,
  pathName: _propTypes2.default.string
};

exports.default = Navbar;

/***/ }),

/***/ "./app/assets/javascript/app/components/NotFound/NotFound.scss":
/*!*********************************************************************!*\
  !*** ./app/assets/javascript/app/components/NotFound/NotFound.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/NotFound/index.jsx":
/*!*****************************************************************!*\
  !*** ./app/assets/javascript/app/components/NotFound/index.jsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

__webpack_require__(/*! ./NotFound.scss */ "./app/assets/javascript/app/components/NotFound/NotFound.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NotFound = function NotFound() {
  return _react2.default.createElement(
    'div',
    { className: 'page-not-found' },
    _react2.default.createElement('img', { src: vissne.cdn + '/images/ong.png', alt: '404' }),
    _react2.default.createElement(
      'h4',
      null,
      '404'
    ),
    _react2.default.createElement(
      'h5',
      null,
      'Page not found'
    ),
    _react2.default.createElement(
      'p',
      null,
      'We are sorry. The page you are looking for was moved, removed, renamed or might never existed.'
    ),
    _react2.default.createElement(
      'a',
      { href: '/', className: 'button is-primary' },
      'GO TO HOME'
    )
  );
};

exports.default = NotFound;

/***/ }),

/***/ "./app/assets/javascript/app/components/PageLoading.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/PageLoading.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Spinner = __webpack_require__(/*! ./Spinner */ "./app/assets/javascript/app/components/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageLoading = function PageLoading(_ref) {
  var show = _ref.show;

  if (!show) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'position-fixed top-0 left-0 bottom-0 bg-light d-flex justify-content-center align-items-center w-100 h-100' },
    _react2.default.createElement(_Spinner2.default, { show: true, size: 'lg', addionalClass: 'mr-2' }),
    'Loading...'
  );
};

PageLoading.propTypes = {
  show: _propTypes2.default.bool.isRequired
};

exports.default = PageLoading;

/***/ }),

/***/ "./app/assets/javascript/app/components/Poster.jsx":
/*!*********************************************************!*\
  !*** ./app/assets/javascript/app/components/Poster.jsx ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function imageOnLoad() {}

function imageOnError() {
  this.src = vissne.defaultCoverImagePath;
}

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return _react2.default.createElement(
    'div',
    { className: 'h-100 w-100 d-flex align-items-center justify-content-center' },
    _react2.default.createElement('img', {
      className: 'img-fluid',
      src: '' + src,
      onLoad: imageOnLoad,
      onError: imageOnError,
      alt: alt
    })
  );
};

Poster.propTypes = {
  src: _propTypes2.default.string.isRequired,
  alt: _propTypes2.default.string.isRequired
};

exports.default = Poster;

/***/ }),

/***/ "./app/assets/javascript/app/components/ProfileContainer.jsx":
/*!*******************************************************************!*\
  !*** ./app/assets/javascript/app/components/ProfileContainer.jsx ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ProfileContainer;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Menu = __webpack_require__(/*! ./Menu */ "./app/assets/javascript/app/components/Menu.jsx");

var _Menu2 = _interopRequireDefault(_Menu);

var _PageLoading = __webpack_require__(/*! ./PageLoading */ "./app/assets/javascript/app/components/PageLoading.jsx");

var _PageLoading2 = _interopRequireDefault(_PageLoading);

var _profileMenu = __webpack_require__(/*! ../constants/profile-menu */ "./app/assets/javascript/app/constants/profile-menu.js");

var _profileMenu2 = _interopRequireDefault(_profileMenu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ProfileContainer(props) {
  var children = props.children,
      path = props.path,
      pageLoading = props.pageLoading,
      user = props.user;


  if (pageLoading) {
    return _react2.default.createElement(_PageLoading2.default, { show: true });
  }

  return _react2.default.createElement(
    'div',
    { className: 'container' },
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col d-flex justify-content-center' },
        _react2.default.createElement(
          'div',
          { className: 'position-relative' },
          _react2.default.createElement(
            'button',
            {
              type: 'button',
              className: 'btn btn-link rounded-circle avatar-button'
            },
            _react2.default.createElement('img', {
              src: user.avatar || vissne.cdn + '/ucontent/avatar/default-avatar.jpg',
              className: 'img-fluid rounded-circle border avatar',
              alt: 'Avatar',
              id: 'avatar'
            })
          )
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col d-flex justify-content-center' },
        _react2.default.createElement(
          'h5',
          null,
          '@' + user.userName
        )
      )
    ),
    _react2.default.createElement(_Menu2.default, { items: _profileMenu2.default, path: path }),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col' },
        children
      )
    )
  );
}

/***/ }),

/***/ "./app/assets/javascript/app/components/ProgressBar.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/ProgressBar.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProgressBar = function ProgressBar(props) {
  var show = props.show,
      height = props.height;


  if (!show) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'progress', style: { height: height + 'px' } },
    _react2.default.createElement('div', {
      className: 'progress-bar progress-bar-striped progress-bar-animated',
      role: 'progressbar',
      'aria-valuenow': '75',
      'aria-valuemin': '0',
      'aria-valuemax': '100',
      style: { width: '100%' }
    })
  );
};

ProgressBar.defaultProps = {
  show: false,
  height: 2
};

ProgressBar.propTypes = {
  show: _propTypes2.default.bool,
  height: _propTypes2.default.number
};

exports.default = ProgressBar;

/***/ }),

/***/ "./app/assets/javascript/app/components/Spinner.jsx":
/*!**********************************************************!*\
  !*** ./app/assets/javascript/app/components/Spinner.jsx ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Spinner;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Spinner(props) {
  var show = props.show,
      size = props.size,
      kind = props.kind,
      color = props.color,
      addionalClass = props.addionalClass;


  if (!show) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'spinner-' + kind + ' spinner-' + kind + '-' + size + ' text-' + color + ' ' + addionalClass, role: 'status' },
    _react2.default.createElement(
      'span',
      { className: 'sr-only' },
      'Loading...'
    )
  );
}

Spinner.defaultProps = {
  show: false,
  size: 'sm',
  kind: 'grow',
  color: 'primary',
  addionalClass: ''
};

Spinner.propTypes = {
  show: _propTypes2.default.bool,
  addionalClass: _propTypes2.default.string,
  size: _propTypes2.default.oneOf(['sm', 'md', 'lg', 'xl']),
  kind: _propTypes2.default.oneOf(['border', 'grow']),
  color: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

/***/ }),

/***/ "./app/assets/javascript/app/components/Video/Video.scss":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Video/Video.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Video/index.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/Video/index.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(/*! ./Video.scss */ "./app/assets/javascript/app/components/Video/Video.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Video = function Video(_ref) {
  var videoKey = _ref.videoKey;
  return _react2.default.createElement(
    'div',
    { className: 'video mb-2 embed-responsive embed-responsive-16by9' },
    _react2.default.createElement('iframe', {
      className: 'embed-responsive-item',
      title: 'Video',
      type: 'text/html',
      width: '640',
      height: '360',
      src: 'https://www.youtube.com/embed/' + videoKey + '?autoplay=0&origin=' + vissne.domain,
      frameBorder: '0',
      allowFullScreen: true
    })
  );
};

Video.propTypes = {
  videoKey: _propTypes2.default.string.isRequired
};

exports.default = Video;

/***/ }),

/***/ "./app/assets/javascript/app/constants/action-types.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/constants/action-types.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// common
var LOADING = exports.LOADING = 'LOADING';
var TOGGLE_ALERT = exports.TOGGLE_ALERT = 'TOGGLE_ALERT';
var TOGGLE_FILTER = exports.TOGGLE_FILTER = 'TOGGLE_FILTER';

// auth
var SET_PAGE_LOADING_STATUS = exports.SET_PAGE_LOADING_STATUS = 'SET_PAGE_LOADING_STATUS';
var SET_LOADING_STATUS = exports.SET_LOADING_STATUS = 'SET_LOADING_STATUS';
var REGISTER = exports.REGISTER = 'REGISTER';
var SET_USER = exports.SET_USER = 'SET_USER';

// discover
var GET_MOVIES = exports.GET_MOVIES = 'GET_MOVIES';
var SET_MOVIES = exports.SET_MOVIES = 'SET_MOVIES';
var SET_GENRES = exports.SET_GENRES = 'SET_GENRES';
var SET_QUERY = exports.SET_QUERY = 'SET_QUERY';

// movie detail
var SET_MOVIE_DETAIL = exports.SET_MOVIE_DETAIL = 'SET_MOVIE_DETAIL';

// profile
//  -- Account
var SET_ACCOUNT_DETAIL = exports.SET_ACCOUNT_DETAIL = 'SET_ACCOUNT_DETAIL';
var SET_UPLOADED_IMAGE = exports.SET_UPLOADED_IMAGE = 'SET_UPLOADED_IMAGE';

// constants
var SORT_OPTIONS = exports.SORT_OPTIONS = [{
  name: 'Popularity',
  value: 'desc'
}, {
  name: 'Release Date',
  value: 'desc'
}, {
  name: 'Revenue',
  value: 'desc'
}, {
  name: 'Primary Release Date',
  value: 'desc'
}, {
  name: 'Orginal Title',
  value: 'desc'
}, {
  name: 'Vote Average',
  value: 'desc'
}, {
  name: 'Vote Count',
  value: 'desc'
}];

/***/ }),

/***/ "./app/assets/javascript/app/constants/profile-menu.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/constants/profile-menu.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var profileMenu = [{
  name: 'Account',
  icon: 'user',
  path: '/profile/account'
}, {
  name: 'Lists',
  icon: 'list',
  path: '/profile/lists'
}, {
  name: 'Favorites',
  icon: 'heart',
  path: '/profile/favorites'
}, {
  name: 'Comments',
  icon: 'comment',
  path: '/profile/comments'
}, {
  name: 'Reviews',
  icon: 'newspaper',
  path: '/profile/reviews'
}, {
  name: 'Friends',
  icon: 'user-friends',
  path: '/profile/friends'
}, {
  name: 'Settings',
  icon: 'cog',
  path: '/profile/settings'
}];

exports.default = profileMenu;

/***/ }),

/***/ "./app/assets/javascript/app/constants/prop-shapes.js":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/constants/prop-shapes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FilterShape = exports.matchShape = exports.GenreShape = exports.CompanyShape = exports.CastShape = exports.MovieShape = exports.UserShape = undefined;

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var UserShape = exports.UserShape = _propTypes2.default.shape({
  id: _propTypes2.default.number,
  firstName: _propTypes2.default.string,
  lastName: _propTypes2.default.string,
  email: _propTypes2.default.string,
  fullName: _propTypes2.default.string,
  avatar: _propTypes2.default.string,
  userName: _propTypes2.default.string
});

var MovieShape = exports.MovieShape = _propTypes2.default.shape({
  title: _propTypes2.default.string,
  orginalTitle: _propTypes2.default.string,
  year: _propTypes2.default.string,
  vote_count: _propTypes2.default.number,
  vote_average: _propTypes2.default.number,
  release_date: _propTypes2.default.string,
  genreNames: _propTypes2.default.string,
  homepage: _propTypes2.default.string,
  tagline: _propTypes2.default.string,
  language: _propTypes2.default.string
});

var CastShape = exports.CastShape = _propTypes2.default.shape({
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired,
  character: _propTypes2.default.string.isRequired,
  profilePath: _propTypes2.default.string.isRequired
});

var CompanyShape = exports.CompanyShape = _propTypes2.default.shape({
  id: _propTypes2.default.number,
  logo: _propTypes2.default.string,
  name: _propTypes2.default.string
});

var GenreShape = exports.GenreShape = _propTypes2.default.shape({
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired
});

var matchShape = exports.matchShape = _propTypes2.default.shape({
  id: _propTypes2.default.number.isRequired,
  name: _propTypes2.default.string.isRequired
});

var FilterShape = exports.FilterShape = _propTypes2.default.shape({
  sort: _propTypes2.default.string,
  searchText: _propTypes2.default.string,
  genres: _propTypes2.default.arrayOf.string,
  crews: _propTypes2.default.arrayOf.string,
  casts: _propTypes2.default.arrayOf.string,
  voteAverage: _propTypes2.default.shape({
    lte: _propTypes2.default.number,
    gte: _propTypes2.default.number
  }),
  releaseYear: _propTypes2.default.shape({
    lte: _propTypes2.default.number,
    gte: _propTypes2.default.number
  })
});

/***/ }),

/***/ "./app/assets/javascript/app/containers/Account/Account.jsx":
/*!******************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Account/Account.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProfileContainer = __webpack_require__(/*! ../../components/ProfileContainer */ "./app/assets/javascript/app/components/ProfileContainer.jsx");

var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

var _Spinner = __webpack_require__(/*! ../../components/Spinner */ "./app/assets/javascript/app/components/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

__webpack_require__(/*! ./Account.scss */ "./app/assets/javascript/app/containers/Account/Account.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Account = function (_Component) {
  _inherits(Account, _Component);

  function Account(props) {
    _classCallCheck(this, Account);

    var _this = _possibleConstructorReturn(this, (Account.__proto__ || Object.getPrototypeOf(Account)).call(this, props));

    props.setPageLoadingStatus(true);

    _this.state = {
      editMode: false,
      userForm: {},
      passwordForm: {},
      validation: {
        userName: {},
        email: {},
        oldPassword: {},
        newPassword: {},
        confirmNewPassword: {},
        firstName: {},
        lastName: {}
      }
    };

    _this.updateUser = _this.updateUser.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Account, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getAccountDetail = this.props.getAccountDetail;

      getAccountDetail();
    }
  }, {
    key: 'updateUser',
    value: function updateUser() {
      var updateUser = this.props.updateUser;
      var userForm = this.state.userForm;

      updateUser(userForm);
    }
  }, {
    key: 'handleChange',
    value: function handleChange(_ref, field) {
      var target = _ref.target;
      var value = target.value,
          name = target.name;
      var state = this.state;

      state[field][name] = value;
      this.state = state;
      this.forceUpdate();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          match = _props.match,
          user = _props.user,
          loading = _props.loading,
          pageLoading = _props.pageLoading;
      var _state = this.state,
          userForm = _state.userForm,
          validation = _state.validation,
          passwordForm = _state.passwordForm;


      if (user && user.id && !userForm.id) {
        this.setState({ userForm: user });
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          _ProfileContainer2.default,
          { user: user, path: match.path, pageLoading: pageLoading },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col m-4' },
              _react2.default.createElement(
                'h4',
                null,
                'Account'
              ),
              _react2.default.createElement(
                'form',
                { action: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'userNameInput' },
                    'User Name'
                  ),
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'userName',
                    className: 'form-control ' + (validation.userName.class || ''),
                    value: userForm.userName,
                    id: 'userNameInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.userName.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'firstNameInput' },
                    'First Name'
                  ),
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'firstName',
                    className: 'form-control ' + (validation.firstName.class || ''),
                    value: userForm.firstName,
                    id: 'firstNameInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.firstName.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'lastNameInput' },
                    'Last Name'
                  ),
                  _react2.default.createElement('input', {
                    type: 'text',
                    name: 'lastName',
                    className: 'form-control ' + (validation.lastName.class || ''),
                    value: userForm.lastName,
                    id: 'lastNameInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.lastName.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'emailInput' },
                    'Email'
                  ),
                  _react2.default.createElement('input', {
                    type: 'email',
                    name: 'email',
                    className: 'form-control ' + (validation.email.class || ''),
                    value: userForm.email,
                    id: 'emailInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'userForm');
                    }
                  }),
                  validation.email.error
                ),
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-outline-success btn-block',
                    type: 'button',
                    onClick: this.updateUser
                  },
                  _react2.default.createElement(_Spinner2.default, { show: loading, kind: 'border', color: 'success' }),
                  _react2.default.createElement(
                    'span',
                    { className: loading ? 'd-none' : 'd-block' },
                    'Update'
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col m-4' },
              _react2.default.createElement(
                'h4',
                null,
                'Change Password'
              ),
              _react2.default.createElement(
                'form',
                { action: '' },
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'oldPasswordInput' },
                    'Old Password'
                  ),
                  _react2.default.createElement('input', {
                    type: 'password',
                    name: 'oldPassword',
                    className: 'form-control ' + (validation.oldPassword.class || ''),
                    value: passwordForm.oldPassword,
                    id: 'oldPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.oldPassword.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'newPasswordInput' },
                    'New Password'
                  ),
                  _react2.default.createElement('input', {
                    type: 'password',
                    name: 'newPassword',
                    className: 'form-control ' + (validation.newPassword.class || ''),
                    value: passwordForm.newPassword,
                    id: 'newPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.newPassword.error
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'forum-group mb-2' },
                  _react2.default.createElement(
                    'label',
                    { htmlFor: 'confirmNewPasswordInput' },
                    'Confirm New Password'
                  ),
                  _react2.default.createElement('input', {
                    type: 'password',
                    name: 'confirmNewPassword',
                    className: 'form-control ' + (validation.confirmNewPassword.class || ''),
                    value: passwordForm.confirmNewPassword,
                    id: 'confirmNewPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.confirmNewPassword.error
                ),
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-outline-primary btn-block', type: 'button' },
                  'Change Password'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Account;
}(_react.Component);

exports.default = Account;


Account.propTypes = {
  user: _propShapes.UserShape.isRequired,
  match: _propShapes.matchShape.isRequired,
  getAccountDetail: _propTypes2.default.func.isRequired,
  pageLoading: _propTypes2.default.bool.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  setPageLoadingStatus: _propTypes2.default.func.isRequired,
  updateUser: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Account/Account.scss":
/*!*******************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Account/Account.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/Account/index.js":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Account/index.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Account = __webpack_require__(/*! ./Account */ "./app/assets/javascript/app/containers/Account/Account.jsx");

var _Account2 = _interopRequireDefault(_Account);

var _account = __webpack_require__(/*! ../../actions/account */ "./app/assets/javascript/app/actions/account.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    pageLoading: state.common.pageLoading,
    loading: state.common.loading,
    uploadedFile: state.common.uploadedFile,
    user: state.account.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getAccountDetail: function getAccountDetail() {
      return dispatch((0, _account.getAccountDetail)());
    },
    setPageLoadingStatus: function setPageLoadingStatus(status) {
      return dispatch((0, _common.setPageLoadingStatus)(status));
    },
    updateUser: function updateUser(user) {
      return dispatch((0, _account.updateUser)(user));
    },
    changePassword: function changePassword(password) {
      return dispatch((0, _account.changePassword)(password));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Account2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Alert/Alert.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Alert/Alert.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(props) {
  var kind = props.kind,
      show = props.show,
      message = props.message,
      toggleAlert = props.toggleAlert;


  if (!show) return null;

  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + kind + ' site-alert alert-dismissible fade show', role: 'alert' },
    message,
    _react2.default.createElement(
      'button',
      { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close', onClick: toggleAlert },
      _react2.default.createElement(
        'span',
        { 'aria-hidden': 'true' },
        '\xD7'
      )
    )
  );
};

Alert.defaultProps = {
  show: false,
  kind: 'info',
  message: null
};

Alert.propTypes = {
  show: _propTypes2.default.bool,
  message: _propTypes2.default.string,
  toggleAlert: _propTypes2.default.func.isRequired,
  kind: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

exports.default = Alert;

/***/ }),

/***/ "./app/assets/javascript/app/containers/Alert/Alert.scss":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Alert/Alert.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/Alert/index.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Alert/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _Alert = __webpack_require__(/*! ./Alert */ "./app/assets/javascript/app/containers/Alert/Alert.jsx");

var _Alert2 = _interopRequireDefault(_Alert);

__webpack_require__(/*! ./Alert.scss */ "./app/assets/javascript/app/containers/Alert/Alert.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(_ref) {
  var common = _ref.common;
  return {
    show: common.showAlert,
    message: common.alertMessage,
    kind: common.alertKind
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    toggleAlert: function toggleAlert() {
      return dispatch((0, _common.toggleAlert)({ show: false }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Alert2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Auth/Auth.jsx":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Auth/Auth.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _cookie = __webpack_require__(/*! ../../../lib/cookie */ "./app/assets/javascript/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Auth = function (_Component) {
  _inherits(Auth, _Component);

  function Auth() {
    _classCallCheck(this, Auth);

    var _this = _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).call(this));

    _this.state = {
      form: {},
      validation: {
        userName: {},
        email: {},
        password: {},
        firstName: {},
        lastName: {},
        confirmPassword: {}
      }
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.validation = _this.validation.bind(_this);
    _this.switchForm = _this.switchForm.bind(_this);
    _this.loginRegister = _this.loginRegister.bind(_this);
    return _this;
  }

  _createClass(Auth, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var toggleAlert = this.props.toggleAlert;

      var errorMessage = _cookie2.default.get('errorMessage');
      if (errorMessage) {
        toggleAlert(errorMessage);
      }
    }
  }, {
    key: 'handleChange',
    value: function handleChange(_ref) {
      var target = _ref.target;
      var value = target.value,
          name = target.name;
      var form = this.state.form;

      form[name] = value;
      this.setState({ form: form });
    }
  }, {
    key: 'validation',
    value: function validation() {
      var emailInput = document.querySelector('input[name="email"]');
      var validation = this.state.validation;
      var _state = this.state,
          form = _state.form,
          isRegister = _state.isRegister;

      var isValid = true;

      if (!form.email || !emailInput.checkValidity()) {
        validation.email = {
          class: 'is-invalid',
          error: _react2.default.createElement(
            'div',
            { className: 'invalid-feedback' },
            'Please enter a valid email address.'
          )
        };
        isValid = false;
      } else {
        validation.email = {};
      }

      if (!form.password || form.password.length < 6 || form.password.length > 16) {
        validation.password = {
          class: 'is-invalid',
          error: _react2.default.createElement(
            'div',
            { className: 'invalid-feedback' },
            'Passwords must be 6-16 chacracter.'
          )
        };
        isValid = false;
      } else {
        validation.password = {};
      }

      if (isRegister) {
        if (!form.userName || form.userName.length < 2 || form.userName.length > 40) {
          validation.userName = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'User name must be 2-40 character'
            )
          };
          isValid = false;
        } else {
          validation.userName = {};
        }

        if (!form.firstName || form.firstName.length < 2 || form.firstName.length > 40) {
          validation.firstName = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'First name must be 2-40 character'
            )
          };
          isValid = false;
        } else {
          validation.firstName = {};
        }

        if (!form.lastName || form.lastName.length < 2 || form.lastName.length > 40) {
          validation.lastName = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'Last name must be 2-40 character'
            )
          };
          isValid = false;
        } else {
          validation.lastName = {};
        }

        if (form.confirmPassword !== form.password) {
          validation.confirmPassword = {
            class: 'is-invalid',
            error: _react2.default.createElement(
              'div',
              { className: 'invalid-feedback' },
              'Passwords dont match'
            )
          };
          isValid = false;
        } else {
          validation.confirmPassword = {};
        }
      }

      this.setState({ validation: validation });
      return isValid;
    }
  }, {
    key: 'loginRegister',
    value: function loginRegister() {
      var _state2 = this.state,
          form = _state2.form,
          isRegister = _state2.isRegister;

      var isValid = this.validation(form);

      if (!isValid) {
        return null;
      }

      var props = this.props;

      var url = isRegister ? '/api/register' : '/api/login';

      return props.loginRegister(form, url);
    }
  }, {
    key: 'switchForm',
    value: function switchForm() {
      this.setState(function (prevState) {
        return {
          isRegister: !prevState.isRegister
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state3 = this.state,
          form = _state3.form,
          isRegister = _state3.isRegister,
          validation = _state3.validation,
          loading = _state3.loading;


      var buttonText = 'LOGIN';
      var switchRegisterToLoginText = 'REGISTER';
      var registerInput = null;

      if (isRegister) {
        buttonText = 'REGISTER';
        switchRegisterToLoginText = 'LOGIN';

        registerInput = _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'confirmPasswordInput' },
              'Confirm Password'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'confirmPasswordAddon' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'key' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'password',
                name: 'confirmPassword',
                value: form.confirmPassword,
                id: 'confirmPasswordInput',
                onChange: this.handleChange,
                autoComplete: 'confirmPassword',
                placeholder: 'Confirm Password',
                'aria-describedby': 'confirmPasswordAddon',
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.confirmPassword.class || '')
              }),
              validation.confirmPassword.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'userNameInput' },
              'User Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'userName' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'at' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'text',
                name: 'userName',
                'aria-describedby': 'userName',
                id: 'userNameInput',
                placeholder: 'User Name',
                value: form.userName,
                onChange: this.handleChange,
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.userName.class || '')
              }),
              validation.userName.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'firstNameInput' },
              'First Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'firstName' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'signature' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'text',
                name: 'firstName',
                'aria-describedby': 'firstName',
                id: 'firstNameInput',
                placeholder: 'First Name',
                value: form.firstName,
                onChange: this.handleChange,
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.firstName.class || '')
              }),
              validation.firstName.error
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              { htmlFor: 'lastNameInput' },
              'Last Name'
            ),
            _react2.default.createElement(
              'div',
              { className: 'input-group' },
              _react2.default.createElement(
                'div',
                { className: 'input-group-prepend' },
                _react2.default.createElement(
                  'span',
                  { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'lastName' },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'signature' })
                )
              ),
              _react2.default.createElement('input', {
                type: 'text',
                autoComplete: 'lastName',
                className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.lastName.class || ''),
                name: 'lastName',
                'aria-describedby': 'lastName',
                id: 'lastNameInput',
                placeholder: 'Last Name',
                value: form.lastName,
                onChange: this.handleChange
              }),
              validation.lastName.error
            )
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row justify-content-md-center' },
          _react2.default.createElement(
            'div',
            { className: 'col-12 col-sm-12 col-md-8 col-lg-6 col-xl-5' },
            _react2.default.createElement(
              'div',
              { className: 'card auth-form' },
              _react2.default.createElement(
                'div',
                { className: 'card-body' },
                _react2.default.createElement(
                  'div',
                  { className: 'row justify-content-center' },
                  _react2.default.createElement('img', { src: vissne.cdn + '/images/logo.png', alt: 'Vissne', height: '70', className: 'my-2' })
                ),
                _react2.default.createElement(
                  'form',
                  { onSubmit: this.handleSubmit, id: 'formReg', className: 'col-12 p-0' },
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'emailInput' },
                      'Email'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement(
                        'div',
                        { className: 'input-group-prepend' },
                        _react2.default.createElement(
                          'span',
                          { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'basic-addon1' },
                          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'envelope' })
                        )
                      ),
                      _react2.default.createElement('input', {
                        type: 'email',
                        name: 'email',
                        value: form.email,
                        id: 'emailInput',
                        autoComplete: 'email',
                        'aria-describedby': 'emailInputGroup',
                        placeholder: 'Enter email',
                        onChange: this.handleChange,
                        className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.email.class || '')
                      }),
                      validation.email.error
                    )
                  ),
                  _react2.default.createElement(
                    'div',
                    { className: 'form-group' },
                    _react2.default.createElement(
                      'label',
                      { htmlFor: 'passwordInput' },
                      'Password'
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: 'input-group' },
                      _react2.default.createElement(
                        'div',
                        { className: 'input-group-prepend' },
                        _react2.default.createElement(
                          'span',
                          { className: 'input-group-text border-top-0 border-left-0 border-right-0 border-dark bg-transparent rounded-0', id: 'passwordAddon' },
                          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'unlock' })
                        )
                      ),
                      _react2.default.createElement('input', {
                        type: 'password',
                        name: 'password',
                        value: form.password,
                        id: 'passwordInput',
                        placeholder: 'Password',
                        'aria-describedby': 'passwordAddon',
                        onChange: this.handleChange,
                        autoComplete: 'current-password',
                        className: 'form-control border-top-0 border-left-0 border-right-0 border-dark rounded-0 b bg-transparent ' + (validation.password.class || '')
                      }),
                      validation.password.error
                    )
                  ),
                  registerInput,
                  _react2.default.createElement(
                    'div',
                    { className: 'row' },
                    _react2.default.createElement(
                      'div',
                      { className: 'col-12 text-right' },
                      _react2.default.createElement(
                        'button',
                        {
                          className: 'btn btn-link',
                          onClick: this.switchForm,
                          type: 'button'
                        },
                        switchRegisterToLoginText
                      )
                    )
                  ),
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-dark btn-block',
                      onClick: this.loginRegister,
                      disabled: loading
                    },
                    _react2.default.createElement('span', {
                      className: 'spinner-grow spinner-grow-sm ' + (loading ? '' : 'd-none'),
                      role: 'status',
                      'aria-hidden': 'true'
                    }),
                    buttonText
                  )
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-default btn-block btn-dark border-0 social-button google  mt-2',
                    href: 'auth/google'
                  },
                  _react2.default.createElement(
                    'i',
                    { className: 'social-button-icon' },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fab', 'google'] })
                  ),
                  'LOGIN WITH GOOGLE'
                ),
                _react2.default.createElement(
                  'a',
                  {
                    className: 'btn btn-block btn-dark border-0 social-button facebook mt-2',
                    href: 'auth/facebook'
                  },
                  _react2.default.createElement(
                    'i',
                    { className: 'social-button-icon' },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: ['fab', 'facebook'] })
                  ),
                  'LOGIN WITH FACEBOOK'
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Auth;
}(_react.Component);

exports.default = Auth;


Auth.propTypes = {
  toggleAlert: _propTypes2.default.func.isRequired
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Auth/Auth.scss":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Auth/Auth.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/Auth/index.js":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Auth/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Auth = __webpack_require__(/*! ./Auth */ "./app/assets/javascript/app/containers/Auth/Auth.jsx");

var _Auth2 = _interopRequireDefault(_Auth);

var _auth = __webpack_require__(/*! ../../actions/auth */ "./app/assets/javascript/app/actions/auth.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

__webpack_require__(/*! ./Auth.scss */ "./app/assets/javascript/app/containers/Auth/Auth.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.common.loading,
    isLoggedIn: state.discover.isLoggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loginRegister: function loginRegister(data, url) {
      return dispatch((0, _auth.loginRegister)(data, url));
    },
    toggleAlert: function toggleAlert(message) {
      return dispatch((0, _common.toggleAlert)({ kind: 'danger', message: message }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Auth2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Discover/Discover.jsx":
/*!********************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Discover/Discover.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _MovieList = __webpack_require__(/*! ../../components/MovieList */ "./app/assets/javascript/app/components/MovieList.jsx");

var _MovieList2 = _interopRequireDefault(_MovieList);

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Spinner = __webpack_require__(/*! ../../components/Spinner */ "./app/assets/javascript/app/components/Spinner.jsx");

var _Spinner2 = _interopRequireDefault(_Spinner);

var _Filter = __webpack_require__(/*! ../../components/Filter */ "./app/assets/javascript/app/components/Filter/index.jsx");

var _Filter2 = _interopRequireDefault(_Filter);

var _Footer = __webpack_require__(/*! ../../components/Footer */ "./app/assets/javascript/app/components/Footer/index.jsx");

var _Footer2 = _interopRequireDefault(_Footer);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Discover = function (_Component) {
  _inherits(Discover, _Component);

  function Discover(props) {
    _classCallCheck(this, Discover);

    var _this = _possibleConstructorReturn(this, (Discover.__proto__ || Object.getPrototypeOf(Discover)).call(this, props));

    _this.loadMovies = _this.loadMovies.bind(_this);
    _this.setQuery = _this.setQuery.bind(_this);
    return _this;
  }

  _createClass(Discover, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getGenres = _props.getGenres,
          toggleFilter = _props.toggleFilter,
          match = _props.match;
      var path = match.path;


      getGenres();

      if (['/coming-soon', '/in-theaters'].indexOf(path) !== -1) {
        this.setQuery({ field: 'filter', value: path.replace('/', '') });
        toggleFilter(false);
      } else {
        this.loadMovies();
      }
    }
  }, {
    key: 'setQuery',
    value: function setQuery(query) {
      var setQuery = this.props.setQuery;

      setQuery(query).then(this.loadMovies);
    }
  }, {
    key: 'loadMovies',
    value: function loadMovies() {
      var _props2 = this.props,
          getMovies = _props2.getMovies,
          query = _props2.query;

      getMovies(query);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props3 = this.props,
          movies = _props3.movies,
          user = _props3.user,
          isLoggedIn = _props3.isLoggedIn,
          loading = _props3.loading,
          genres = _props3.genres,
          query = _props3.query,
          location = _props3.location,
          showFilter = _props3.showFilter;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { isLoggedIn: isLoggedIn, user: user, pathName: location.pathname }),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(_Filter2.default, { show: showFilter, genres: genres, setQuery: this.setQuery, query: query }),
          _react2.default.createElement(_MovieList2.default, { movies: movies, id: 'list' }),
          _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-center m-1' },
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                onClick: this.loadMovies,
                className: 'btn btn-outline-primary mb-2 ' + (loading ? 'd-none' : 'd-block')
              },
              'Load More'
            ),
            _react2.default.createElement(_Spinner2.default, { show: loading, size: 'md' })
          )
        ),
        _react2.default.createElement(_Footer2.default, null)
      );
    }
  }]);

  return Discover;
}(_react.Component);

exports.default = Discover;


Discover.defaultProps = {
  isLoggedIn: false,
  showFilter: true,
  user: {}
};

Discover.propTypes = {
  getMovies: _propTypes2.default.func.isRequired,
  getGenres: _propTypes2.default.func.isRequired,
  setQuery: _propTypes2.default.func.isRequired,
  toggleFilter: _propTypes2.default.func.isRequired,
  loading: _propTypes2.default.bool.isRequired,
  isLoggedIn: _propTypes2.default.bool,
  showFilter: _propTypes2.default.bool,
  user: _propShapes.UserShape,
  movies: _propTypes2.default.arrayOf(_propShapes.MovieShape).isRequired,
  genres: _propTypes2.default.arrayOf(_propShapes.GenreShape).isRequired,
  query: _propShapes.FilterShape.isRequired
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Discover/index.js":
/*!****************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Discover/index.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Discover = __webpack_require__(/*! ./Discover */ "./app/assets/javascript/app/containers/Discover/Discover.jsx");

var _Discover2 = _interopRequireDefault(_Discover);

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _discover = __webpack_require__(/*! ../../actions/discover */ "./app/assets/javascript/app/actions/discover.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    loading: state.common.loading,
    user: state.discover.user,
    query: state.discover.query,
    isLoggedIn: state.discover.isLoggedIn,
    movies: state.discover.movies,
    genres: state.discover.genres,
    showFilter: state.common.showFilter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovies: function getMovies(query) {
      return dispatch((0, _discover.getMovies)(query));
    },
    setQuery: function setQuery(query) {
      return dispatch((0, _discover.setQuery)(query));
    },
    getGenres: function getGenres() {
      return dispatch((0, _discover.getGenres)());
    },
    toggleFilter: function toggleFilter(show) {
      return dispatch((0, _common.toggleFilter)(show));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Discover2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/Movie/Movie.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Movie/Movie.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProgressBar = __webpack_require__(/*! ../../components/ProgressBar */ "./app/assets/javascript/app/components/ProgressBar.jsx");

var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

var _DetailTable = __webpack_require__(/*! ../../components/DetailTable */ "./app/assets/javascript/app/components/DetailTable.jsx");

var _DetailTable2 = _interopRequireDefault(_DetailTable);

var _CompanyList = __webpack_require__(/*! ../../components/CompanyList */ "./app/assets/javascript/app/components/CompanyList/index.jsx");

var _CompanyList2 = _interopRequireDefault(_CompanyList);

var _CastList = __webpack_require__(/*! ../../components/CastList */ "./app/assets/javascript/app/components/CastList/index.jsx");

var _CastList2 = _interopRequireDefault(_CastList);

var _Video = __webpack_require__(/*! ../../components/Video */ "./app/assets/javascript/app/components/Video/index.jsx");

var _Video2 = _interopRequireDefault(_Video);

var _propShapes = __webpack_require__(/*! ../../constants/prop-shapes */ "./app/assets/javascript/app/constants/prop-shapes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_Component) {
  _inherits(Movie, _Component);

  function Movie() {
    _classCallCheck(this, Movie);

    return _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).apply(this, arguments));
  }

  _createClass(Movie, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _props = this.props,
          getMovieDetail = _props.getMovieDetail,
          match = _props.match;

      getMovieDetail(match.params.id);
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          detail = _props2.detail,
          user = _props2.user,
          isLoggedIn = _props2.isLoggedIn;


      if (!detail) {
        return _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(_Navbar2.default, { isLoggedIn: isLoggedIn, user: user }),
          _react2.default.createElement(_ProgressBar2.default, { show: true, color: 'info' })
        );
      }

      var video = detail.videos.length > 0 ? _react2.default.createElement(_Video2.default, { videoKey: detail.videos[0].key }) : null;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Navbar2.default, { isLoggedIn: isLoggedIn, user: user }),
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-sm-6 col-md-3' },
              _react2.default.createElement('img', { className: 'img-fluid mb-2', src: detail.posterPath, alt: detail.title }),
              _react2.default.createElement(_CompanyList2.default, { companies: detail.production_companies })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-sm-12 col-md-6 mb-2' },
              video,
              _react2.default.createElement(_DetailTable2.default, { movie: detail })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-12 col-sm-6 col-md-3 mb-2' },
              _react2.default.createElement(_CastList2.default, { casts: detail.credits.cast })
            )
          )
        )
      );
    }
  }]);

  return Movie;
}(_react.Component);

exports.default = Movie;


Movie.defaultProps = {
  isLoggedIn: false
};

Movie.propTypes = {
  getMovieDetail: _propTypes2.default.func.isRequired,
  detail: _propTypes2.default.instanceOf(Object).isRequired,
  match: _propTypes2.default.instanceOf(Object).isRequired,
  user: _propShapes.UserShape.isRequired,
  isLoggedIn: _propTypes2.default.bool
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Movie/index.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Movie/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _Movie = __webpack_require__(/*! ./Movie */ "./app/assets/javascript/app/containers/Movie/Movie.jsx");

var _Movie2 = _interopRequireDefault(_Movie);

var _movie = __webpack_require__(/*! ../../actions/movie */ "./app/assets/javascript/app/actions/movie.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.movie.detail,
    user: state.discover.user,
    isLoggedIn: state.discover.isLoggedIn
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: function getMovieDetail(id) {
      return dispatch((0, _movie.getMovieDetail)(id));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Movie2.default);

/***/ }),

/***/ "./app/assets/javascript/app/index.jsx":
/*!*********************************************!*\
  !*** ./app/assets/javascript/app/index.jsx ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");

__webpack_require__(/*! ../scripts */ "./app/assets/javascript/scripts/index.js");

__webpack_require__(/*! ../../stylesheets/scss/main.scss */ "./app/assets/stylesheets/scss/main.scss");

var _configureStore = __webpack_require__(/*! ./store/configure-store */ "./app/assets/javascript/app/store/configure-store.js");

var _configureStore2 = _interopRequireDefault(_configureStore);

var _Root = __webpack_require__(/*! ./Root */ "./app/assets/javascript/app/Root.jsx");

var _Root2 = _interopRequireDefault(_Root);

var _fontAwesome = __webpack_require__(/*! ../lib/font-awesome */ "./app/assets/javascript/lib/font-awesome.js");

var _fontAwesome2 = _interopRequireDefault(_fontAwesome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _fontAwesome2.default)(); // init font awsome icons

var store = (0, _configureStore2.default)();

(0, _reactDom.render)(_react2.default.createElement(_Root2.default, { store: store }), document.getElementById('app'));

/***/ }),

/***/ "./app/assets/javascript/app/reducers/account.js":
/*!*******************************************************!*\
  !*** ./app/assets/javascript/app/reducers/account.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = account;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  user: {}
};

function account() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_ACCOUNT_DETAIL:
      return Object.assign({}, state, {
        user: action.payload.user
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/reducers/common.js":
/*!******************************************************!*\
  !*** ./app/assets/javascript/app/reducers/common.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = common;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  showAlert: false,
  alertMessage: null,
  alertKind: 'info',
  pageLoading: true,
  loading: false,
  showFilter: true
};

function common() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.TOGGLE_ALERT:
      return Object.assign({}, state, {
        showAlert: !state.showAlert,
        alertMessage: action.message,
        alertKind: action.kind
      });

    case _actionTypes.SET_PAGE_LOADING_STATUS:
      return Object.assign({}, state, {
        pageLoading: action.pageLoading
      });

    case _actionTypes.SET_LOADING_STATUS:
      return Object.assign({}, state, {
        loading: action.loading
      });

    case _actionTypes.TOGGLE_FILTER:
      return Object.assign({}, state, {
        showFilter: !state.showFilter
      });

    case _actionTypes.SET_UPLOADED_IMAGE:
      return Object.assign({}, state, {
        uploadedAvatar: action.payload
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/reducers/discover.js":
/*!********************************************************!*\
  !*** ./app/assets/javascript/app/reducers/discover.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = app;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _cookie = __webpack_require__(/*! ../../lib/cookie */ "./app/assets/javascript/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var user = {
  id: _cookie2.default.get('user_id'),
  userName: _cookie2.default.get('username'),
  fristName: _cookie2.default.get('user_first_name'),
  lastName: _cookie2.default.get('user_last_name'),
  email: _cookie2.default.get('user_email')
};

var initialState = {
  user: user,
  genres: [],
  movies: [],
  total: 0,
  totalPage: 1,
  query: {
    page: 1,
    sortBy: 'popularity.decs',
    filter: null,
    searchText: null,
    withGenres: [],
    year: null,
    crews: [],
    casts: []
  },
  isLoggedIn: !!user.email
};

function app() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_MOVIES:
      return Object.assign({}, state, {
        movies: state.movies.concat(action.movies),
        total: action.total,
        totalPages: action.totalPages,
        query: Object.assign({}, state.query, {
          page: action.page
        })
      });

    case _actionTypes.SET_GENRES:
      return Object.assign({}, state, {
        genres: action.genres
      });

    case _actionTypes.SET_QUERY:
      return Object.assign({}, state, {
        movies: [],
        query: Object.assign({}, state.query, _defineProperty({
          page: 1
        }, action.field, action.value))
      });

    default:
      return state;
  }
}

// TODO: Move user object to account reducer

/***/ }),

/***/ "./app/assets/javascript/app/reducers/index.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/reducers/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _account = __webpack_require__(/*! ./account */ "./app/assets/javascript/app/reducers/account.js");

var _account2 = _interopRequireDefault(_account);

var _discover = __webpack_require__(/*! ./discover */ "./app/assets/javascript/app/reducers/discover.js");

var _discover2 = _interopRequireDefault(_discover);

var _movie = __webpack_require__(/*! ./movie */ "./app/assets/javascript/app/reducers/movie.js");

var _movie2 = _interopRequireDefault(_movie);

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/reducers/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  account: _account2.default,
  discover: _discover2.default,
  movie: _movie2.default,
  common: _common2.default
});

/***/ }),

/***/ "./app/assets/javascript/app/reducers/movie.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/reducers/movie.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = detail;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  detail: null
};

function detail() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_MOVIE_DETAIL:
      return Object.assign({}, state, {
        detail: action.detail
      });

    default:
      return state;
  }
}

/***/ }),

/***/ "./app/assets/javascript/app/store/configure-store.js":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/store/configure-store.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = configureStore;

var _redux = __webpack_require__(/*! redux */ "./node_modules/redux/es/redux.js");

var _reduxThunk = __webpack_require__(/*! redux-thunk */ "./node_modules/redux-thunk/es/index.js");

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reducers = __webpack_require__(/*! ../reducers */ "./app/assets/javascript/app/reducers/index.js");

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function configureStore() {
  return (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxThunk2.default));
}

/***/ }),

/***/ "./app/assets/javascript/lib/ajax-error-handler.js":
/*!*********************************************************!*\
  !*** ./app/assets/javascript/lib/ajax-error-handler.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ajaxErrorHandler;

var _common = __webpack_require__(/*! ../app/actions/common */ "./app/assets/javascript/app/actions/common.js");

function ajaxErrorHandler(dispatch) {
  return function (_ref) {
    var response = _ref.response;

    var statusCode = response.status;
    dispatch((0, _common.setPageLoadingStatus)(false));

    switch (statusCode) {
      case 404:
      case 403:
        window.location.href = '/page-not-found';
        break;

      default:
        dispatch((0, _common.toggleAlert)({
          kind: 'danger',
          message: response.data.message
        }));
        break;
    }
  };
}

/***/ }),

/***/ "./app/assets/javascript/lib/cookie.js":
/*!*********************************************!*\
  !*** ./app/assets/javascript/lib/cookie.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var doc = document;

var set = function set(name, value) {
  doc.cookie = name + '=' + value;
};

var get = function get(name) {
  var cookies = doc.cookie.split(';');

  for (var i = 0; i < cookies.length; i += 1) {
    var _cookies$i$split = cookies[i].split('='),
        _cookies$i$split2 = _slicedToArray(_cookies$i$split, 2),
        cname = _cookies$i$split2[0],
        cvalue = _cookies$i$split2[1];

    if (cname.trim() === name.trim()) {
      return cvalue;
    }
  }

  return undefined;
};

module.exports = {
  get: get,
  set: set
};

/***/ }),

/***/ "./app/assets/javascript/lib/font-awesome.js":
/*!***************************************************!*\
  !*** ./app/assets/javascript/lib/font-awesome.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = init;

var _fontawesomeSvgCore = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ "./node_modules/@fortawesome/fontawesome-svg-core/index.es.js");

var _freeSolidSvgIcons = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");

var _freeBrandsSvgIcons = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "./node_modules/@fortawesome/free-brands-svg-icons/index.es.js");

function init() {
  _fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUser, _freeSolidSvgIcons.faSignOutAlt, _freeSolidSvgIcons.faEnvelope, _freeSolidSvgIcons.faUnlock, _freeSolidSvgIcons.faAlignLeft, _freeSolidSvgIcons.faKey, _freeSolidSvgIcons.faSignature, _freeSolidSvgIcons.faFilter, _freeSolidSvgIcons.faSortAmountUp, _freeSolidSvgIcons.faSortAmountDown, _freeBrandsSvgIcons.faFacebook, _freeBrandsSvgIcons.faGoogle, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faInstagram, _freeSolidSvgIcons.faUserCircle, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faStar, _freeSolidSvgIcons.faHeart, _freeSolidSvgIcons.faComment, _freeSolidSvgIcons.faSwatchbook, _freeSolidSvgIcons.faUserFriends, _freeSolidSvgIcons.faCog, _freeSolidSvgIcons.faEdit, _freeSolidSvgIcons.faUpload, _freeSolidSvgIcons.faNewspaper, _freeSolidSvgIcons.faAt);
}

/***/ }),

/***/ "./app/assets/javascript/scripts/index.js":
/*!************************************************!*\
  !*** ./app/assets/javascript/scripts/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function () {
  var win = window;

  win.onload = function () {
    var pageLoading = document.getElementById('pageLoading');

    if (pageLoading) {
      pageLoading.remove();
    }

    if (vissne.env === 'production') {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js');
      }
    }
  };
})();

/***/ }),

/***/ "./app/assets/stylesheets/scss/main.scss":
/*!***********************************************!*\
  !*** ./app/assets/stylesheets/scss/main.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkL01vdmllQ2FyZC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vVmlkZW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL2FjdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9maWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvcHJvcC1zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BY2NvdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydC9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0L0FsZXJ0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL0F1dGguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL0F1dGguc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvRGlzY292ZXIvRGlzY292ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTW92aWUvTW92aWUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvbW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9zdG9yZS9jb25maWd1cmUtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2xpYi9hamF4LWVycm9yLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2xpYi9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2xpYi9mb250LWF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJSb290Iiwic3RvcmUiLCJEaXNjb3ZlciIsIkF1dGgiLCJBY2NvdW50IiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwiY29uc29sZSIsImxvZyIsImFsZXJ0IiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydCIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRNb3ZpZURldGFpbCIsIlNFVF9NT1ZJRV9ERVRBSUwiLCJkZXRhaWwiLCJnZXRNb3ZpZURldGFpbCIsIkNhc3QiLCJuYW1lIiwiY2hhcmFjdGVyIiwicHJvZmlsZVBhdGgiLCJDYXN0U2hhcGUiLCJDYXN0TGlzdCIsImNhc3RzIiwiY2FzdExpc3QiLCJtYXAiLCJjIiwiYXJyYXlPZiIsIkNvbXBhbnkiLCJsb2dvIiwibG9nb1BhdGgiLCJ2aXNzbmUiLCJpbWFnZXNTZWN1cmVCYXNlVXJsIiwiY2RuIiwiZGVmYXVsdFByb3BzIiwiQ29tcGFueVNoYXBlIiwiQ29tcGFueUxpc3QiLCJjb21wYW5pZXMiLCJsb2dvX3BhdGgiLCJEZXRhaWxUYWJsZSIsIm1vdmllIiwib3JnaW5hbFRpdGxlIiwieWVhciIsInZvdGVfYXZlcmFnZSIsInZvdGVfY291bnQiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZU5hbWVzIiwidGFnbGluZSIsImNvdW50cmllcyIsImxhbmd1YWdlIiwiZGlyZWN0b3IiLCJ3cml0ZXIiLCJob21lcGFnZSIsIk1vdmllU2hhcGUiLCJzd2l0Y2hTb3J0UXVlcnkiLCJzb3J0QnkiLCJzcGxpdCIsImFkZEdlbnJlSWQiLCJjdXJyZW50R2VucmVzIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImhhbmRsZUNoYW5nZVllYXIiLCJOdW1iZXIiLCJpc05hTiIsIkZpbHRlciIsInByb3BzIiwic2hvdyIsInNvcnRJY29uQ2xhc3MiLCJzb3J0T3B0aW9ucyIsIlNPUlRfT1BUSU9OUyIsInNvcnQiLCJrZXkiLCJyZXBsYWNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJnZW5yZU9wdGlvbnMiLCJnIiwid2l0aEdlbnJlcyIsInNlYXJjaFRleHQiLCIkZXZlbnQiLCJ0YXJnZXQiLCJHZW5yZVNoYXBlIiwiRmlsdGVyU2hhcGUiLCJmdW5jIiwiYm9vbCIsIkZvb3RlciIsIk1lbnUiLCJwYXRoIiwiaXRlbXMiLCJtZW51SXRlbXMiLCJtIiwiaWNvbiIsIk1vdmllQ2FyZCIsInRpdGxlIiwiaW1hZ2UiLCJyYXRlIiwic2x1ZyIsIm51bWJlciIsInN0cmluZyIsIk1vdmllTGlzdCIsImxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImltYWdlT25Mb2FkIiwiaW1hZ2VPbkVycm9yIiwic3JjIiwiZGVmYXVsdENvdmVySW1hZ2VQYXRoIiwiUG9zdGVyIiwiYWx0IiwiUHJvZmlsZUNvbnRhaW5lciIsImNoaWxkcmVuIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJvbmVPZiIsIlZpZGVvIiwidmlkZW9LZXkiLCJkb21haW4iLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJzaGFwZSIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwicGFzc3dvcmRGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJiaW5kIiwiaGFuZGxlQ2hhbmdlIiwiZm9yY2VVcGRhdGUiLCJtYXRjaCIsInNldFN0YXRlIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiQWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJmb3JtIiwiY29uZmlybVBhc3N3b3JkIiwic3dpdGNoRm9ybSIsImVycm9yTWVzc2FnZSIsImNvb2tpZSIsImVtYWlsSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1JlZ2lzdGVyIiwiaXNWYWxpZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2U3RhdGUiLCJidXR0b25UZXh0Iiwic3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCIsInJlZ2lzdGVySW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJkaXNjb3ZlciIsImxvYWRNb3ZpZXMiLCJzaG93RmlsdGVyIiwicGF0aG5hbWUiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJhc3NpZ24iLCJ1cGxvYWRlZEF2YXRhciIsImFwcCIsImZyaXN0TmFtZSIsInRvdGFsUGFnZSIsImZpbHRlciIsImNvbmNhdCIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInRodW5rTWlkZGxld2FyZSIsImFqYXhFcnJvckhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiZG9jIiwic2V0IiwiY29va2llcyIsImNuYW1lIiwiY3ZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwibGlicmFyeSIsImFkZCIsImZhVXNlciIsImZhU2lnbk91dEFsdCIsImZhRW52ZWxvcGUiLCJmYVVubG9jayIsImZhQWxpZ25MZWZ0IiwiZmFLZXkiLCJmYVNpZ25hdHVyZSIsImZhRmlsdGVyIiwiZmFTb3J0QW1vdW50VXAiLCJmYVNvcnRBbW91bnREb3duIiwiZmFGYWNlYm9vayIsImZhR29vZ2xlIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYVVzZXJDaXJjbGUiLCJmYUxpc3QiLCJmYVN0YXIiLCJmYUhlYXJ0IiwiZmFDb21tZW50IiwiZmFTd2F0Y2hib29rIiwiZmFVc2VyRnJpZW5kcyIsImZhQ29nIiwiZmFFZGl0IiwiZmFVcGxvYWQiLCJmYU5ld3NwYXBlciIsImZhQXQiLCJ3aW4iLCJvbmxvYWQiLCJyZW1vdmUiLCJlbnYiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9pbmRleC5qc3hcIixcImNvbW1vblwiLFwicmVhY3RcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyBQYWdlc1xuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vY29udGFpbmVycy9EaXNjb3Zlcic7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb250YWluZXJzL01vdmllJztcbmltcG9ydCBBdXRoIGZyb20gJy4vY29udGFpbmVycy9BdXRoJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29udGFpbmVycy9BY2NvdW50JztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG4vLyBTaGFyZWQgQ29tcG9uZW50c1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vY29udGFpbmVycy9BbGVydCc7XG5cbmNvbnN0IFJvb3QgPSAoeyBzdG9yZSB9KSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb21pbmctc29vblwiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW4tdGhlYXRlcnNcIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2F1dGhcIiBjb21wb25lbnQ9e0F1dGh9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllLzpzbHVnLzppZFwiIGNvbXBvbmVudD17TW92aWV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGFnZS1ub3QtZm91bmRcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvUm91dGVyPlxuICAgICAgPEFsZXJ0IC8+XG4gICAgPC9GcmFnbWVudD5cbiAgPC9Qcm92aWRlcj5cbik7XG5cblJvb3QucHJvcFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vdDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHNldExvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0IH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRBY2NvdW50RGV0YWlsID0gdXNlciA9PiAoe1xuICB0eXBlOiBTRVRfQUNDT1VOVF9ERVRBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICB1c2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50RGV0YWlsID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MuZ2V0KCcvYXBpL2FjY291bnQnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dChgL2FwaS91c2VyLyR7dXNlci5pZH1gLCB1c2VyKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydCh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogJ1Byb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuJyxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBwYXNzd29yZCA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dCgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSk7XG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICBhbGVydCgnb2snKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVnaXN0ZXIgPSAoZGF0YSwgdXJsKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgLy8gVE9ETzogc2V0IHVzZXIgaW5mb3JtYXRpb24gdG8gY29tbW9uIHN0YXRlXG4gIH0pLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG5cbn07XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBbGVydCA9ICh7IG1lc3NhZ2UsIGtpbmQgfSkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0FMRVJULFxuICBtZXNzYWdlLFxuICBraW5kLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRQYWdlTG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgcGFnZUxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfTE9BRElOR19TVEFUVVMsXG4gIGxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyID0gKCkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0ZJTFRFUixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBsb2FkZWRJbWFnZSA9IHVwbG9hZGVkRmlsZSA9PiAoe1xuICB0eXBlOiBTRVRfVVBMT0FERURfSU1BR0UsXG4gIHBheWxvYWQ6IHVwbG9hZGVkRmlsZSxcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFUywgU0VUX1FVRVJZLCBTRVRfR0VOUkVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZXMgPSByZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVTLFxuICBtb3ZpZXM6IHJlc3BvbnNlLnJlc3VsdHMsXG4gIHBhZ2U6IChyZXNwb25zZS5wYWdlICsgMSksXG4gIHRvdGFsUGFnZXM6IHJlc3BvbnNlLnRvdGFsX3BhZ2VzLFxuICB0b3RhbDogcmVzcG9uc2UudG90YWxfcmVzdWx0cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCB1cmwgPSAnYXBpL2Rpc2NvdmVyJztcblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgocXVlcnlOYW1lLCBpKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeVtxdWVyeU5hbWVdO1xuICAgIGNvbnN0IG9wID0gaSA9PT0gMFxuICAgICAgPyAnPydcbiAgICAgIDogJyYnO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke3F1ZXJ5TmFtZX09JHt2YWx1ZX1gO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBtdWx0aVF1ZXJ5ID0gYCR7cXVlcnlOYW1lfT1gO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgbXVsdGlRdWVyeSArPSBgJHt2fSxgO1xuICAgICAgICB9KTtcbiAgICAgICAgdXJsICs9IGAke29wfSR7bXVsdGlRdWVyeX1gO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRNb3ZpZXMoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UXVlcnkgPSAoeyBmaWVsZCwgdmFsdWUgfSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBTRVRfUVVFUlksXG4gICAgZmllbGQsXG4gICAgdmFsdWUsXG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2VucmVzID0gZ2VucmVzID0+ICh7XG4gIHR5cGU6IFNFVF9HRU5SRVMsXG4gIGdlbnJlcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKCkgPT4gZGlzcGF0Y2ggPT4gYXhpb3NcbiAgLmdldCgnL2FwaS9nZW5yZScpXG4gIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goc2V0R2VucmVzKGRhdGEpKSlcbiAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVEZXRhaWwgPSBkZXRhaWwgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFX0RFVEFJTCxcbiAgZGV0YWlsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZURldGFpbCA9IGlkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRNb3ZpZURldGFpbChudWxsKSk7XG5cbiAgYXhpb3MuZ2V0KGAvYXBpL21vdmllLyR7aWR9YClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKFxuICAgICAgc2V0TW92aWVEZXRhaWwoZGF0YSksXG4gICAgKSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgbG9nbywgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGxvZ29QYXRoID0gbG9nb1xuICAgID8gYCR7dmlzc25lLmltYWdlc1NlY3VyZUJhc2VVcmx9L3c5Mi8ke2xvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTBcIj57bmFtZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db21wYW55LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nbzogJycsXG4gIG5hbWU6ICdDb21wYW55Jyxcbn07XG5cbkNvbXBhbnkucHJvcFR5cGVzID0gQ29tcGFueVNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuLi9Db21wYW55JztcbmltcG9ydCAnLi9Db21wYW55TGlzdC5zY3NzJztcblxuY29uc3QgQ29tcGFueUxpc3QgPSAoeyBjb21wYW5pZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNvbXBhbmllczwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7Y29tcGFuaWVzLm1hcChjID0+IChcbiAgICAgICAgICA8Q29tcGFueSBrZXk9e2MuaWR9IGxvZ289e2MubG9nb19wYXRofSBuYW1lPXtjLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueUxpc3QucHJvcFR5cGVzID0ge1xuICBjb21wYW5pZXM6IFByb3BUeXBlcy5hcnJheU9mKENvbXBhbnlTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IERldGFpbFRhYmxlID0gKHsgbW92aWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YCR7bW92aWUub3JnaW5hbFRpdGxlfSAoJHttb3ZpZS55ZWFyfSlgfTwvaDU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlLXNtIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc8L3RoPlxuICAgICAgICAgICAgPHRkPntgJHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICgke21vdmllLnZvdGVfY291bnR9KWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SZWxlYXNlIERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5yZWxlYXNlX2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5HZW5yZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5nZW5yZU5hbWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFnbGluZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnRhZ2xpbmV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJpZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5jb3VudHJpZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYW5ndWFnZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZGlyZWN0b3J9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Xcml0ZXI8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS53cml0ZXJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ib21lcGFnZTwvdGg+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e21vdmllLmhvbWVwYWdlfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e21vdmllLmhvbWVwYWdlfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsVGFibGUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogTW92aWVTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBNZW51ID0gKHsgcGF0aCwgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgICAga2V5PXttLnBhdGh9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17bS5pY29ufSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e20ubmFtZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHttZW51SXRlbXN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvc3RlciBmcm9tICcuLi9Qb3N0ZXInO1xuaW1wb3J0ICcuL01vdmllQ2FyZC5zY3NzJztcblxuY29uc3QgTW92aWVDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBpbWFnZSxcbiAgICByYXRlLFxuICAgIHNsdWcsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtY2FyZCBoLTEwMCB3LTEwMCByb3VuZGVkLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGltZy10aHVtYm5haWxcIj5cbiAgICAgIDxMaW5rIHRvPXtgbW92aWUvJHtzbHVnfS8ke2lkfWB9IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHJhdGluZy10YWcgc2hhZG93LXNtIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIHtyYXRlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxQb3N0ZXIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IE1vdmllTGlzdCA9ICh7IG1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBtb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICA8ZGl2IGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMiBtYi0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TW92aWVDYXJkXG4gICAgICAgIGlkPXttb3ZpZS5pZH1cbiAgICAgICAgaW1hZ2U9e21vdmllLnBvc3Rlcn1cbiAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICByYXRlPXttb3ZpZS52b3RlQXZlcmFnZX1cbiAgICAgICAgc2x1Zz17bW92aWUuc2x1Z31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vTmF2YmFyLnNjc3MnO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgaXNMb2dnZWRJbixcbiAgICBwYXRoTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gaXNMb2dnZWRJbiA/IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcHJvZmlsZS9hY2NvdW50XCIgdGl0bGU9XCJQcm9maWxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPnt1c2VyLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9nb3V0XCIgdGl0bGU9XCJMb2dvdXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLW91dC1hbHRcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvRnJhZ21lbnQ+XG4gICkgOiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGluayB0bz1cIi9hdXRoXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5sb2dpbjwvTGluaz5cbiAgICA8L2xpPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH1cbiAgICAgICAgICBhbHQ9XCJWaXNzbmVcIlxuICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGQtYmxvY2tcIlxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGlkPVwiZmlsdGVyQnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImZpbHRlclwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9pbi10aGVhdGVycycgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2luLXRoZWF0ZXJzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaW4gdGhlYXRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9jb21pbmctc29vbicgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2NvbWluZy1zb29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgY29taW5nIHNvb25nXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXktYXV0b1wiPlxuICAgICAgICAgIHtsb2dpbkJ1dHRvbn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IHt9LFxuICBwYXRoTmFtZTogJy8nLFxufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgcGF0aE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9vbmcucG5nYH0gYWx0PVwiNDA0XCIgLz5cbiAgICA8aDQ+NDA0PC9oND5cbiAgICA8aDU+UGFnZSBub3QgZm91bmQ8L2g1PlxuICAgIDxwPlxuICAgICAgV2UgYXJlIHNvcnJ5LiBUaGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIHdhcyBtb3ZlZCwgcmVtb3ZlZCwgcmVuYW1lZCBvciBtaWdodCBuZXZlciBleGlzdGVkLlxuICAgIDwvcD5cbiAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+R08gVE8gSE9NRTwvYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuXG5jb25zdCBQYWdlTG9hZGluZyA9ICh7IHNob3cgfSkgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgYmctbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICA8U3Bpbm5lciBzaG93IHNpemU9XCJsZ1wiIGFkZGlvbmFsQ2xhc3M9XCJtci0yXCIgLz5cbiAgICAgIExvYWRpbmcuLi5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhZ2VMb2FkaW5nLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGltYWdlT25Mb2FkKCkge1xuXG59XG5cbmZ1bmN0aW9uIGltYWdlT25FcnJvcigpIHtcbiAgdGhpcy5zcmMgPSB2aXNzbmUuZGVmYXVsdENvdmVySW1hZ2VQYXRoO1xufVxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgIHNyYz17YCR7c3JjfWB9XG4gICAgICBvbkxvYWQ9e2ltYWdlT25Mb2FkfVxuICAgICAgb25FcnJvcj17aW1hZ2VPbkVycm9yfVxuICAgICAgYWx0PXthbHR9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0ZXIucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4vUGFnZUxvYWRpbmcnO1xuaW1wb3J0IHByb2ZpbGVNZW51IGZyb20gJy4uL2NvbnN0YW50cy9wcm9maWxlLW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhdGgsIHBhZ2VMb2FkaW5nLCB1c2VyIH0gPSBwcm9wcztcblxuICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIHNob3cgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayByb3VuZGVkLWNpcmNsZSBhdmF0YXItYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgfHwgYCR7dmlzc25lLmNkbn0vdWNvbnRlbnQvYXZhdGFyL2RlZmF1bHQtYXZhdGFyLmpwZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlIGJvcmRlciBhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoNT57YEAke3VzZXIudXNlck5hbWV9YH08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1lbnUgaXRlbXM9e3Byb2ZpbGVNZW51fSBwYXRoPXtwYXRofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaG93LCBoZWlnaHQgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjc1XCJcbiAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGhlaWdodDogMixcbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3csXG4gICAgc2l6ZSxcbiAgICBraW5kLFxuICAgIGNvbG9yLFxuICAgIGFkZGlvbmFsQ2xhc3MsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyLSR7a2luZH0gc3Bpbm5lci0ke2tpbmR9LSR7c2l6ZX0gdGV4dC0ke2NvbG9yfSAke2FkZGlvbmFsQ2xhc3N9YH0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc2l6ZTogJ3NtJyxcbiAga2luZDogJ2dyb3cnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBhZGRpb25hbENsYXNzOiAnJyxcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWRkaW9uYWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICBdKSxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYm9yZGVyJyxcbiAgICAnZ3JvdycsXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vVmlkZW8uc2Nzcyc7XG5cbmNvbnN0IFZpZGVvID0gKHsgdmlkZW9LZXkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIG1iLTIgZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgPGlmcmFtZVxuICAgICAgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCJcbiAgICAgIHRpdGxlPVwiVmlkZW9cIlxuICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICBoZWlnaHQ9XCIzNjBcIlxuICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0tleX0/YXV0b3BsYXk9MCZvcmlnaW49JHt2aXNzbmUuZG9tYWlufWB9XG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlby5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsIi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0FMRVJUID0gJ1RPR0dMRV9BTEVSVCc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0ZJTFRFUiA9ICdUT0dHTEVfRklMVEVSJztcblxuLy8gYXV0aFxuZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9QQUdFX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElOR19TVEFUVVMgPSAnU0VUX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9ICdSRUdJU1RFUic7XG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xuXG4vLyBkaXNjb3ZlclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVMgPSAnR0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX01PVklFUyA9ICdTRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfR0VOUkVTID0gJ1NFVF9HRU5SRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVSWSA9ICdTRVRfUVVFUlknO1xuXG4vLyBtb3ZpZSBkZXRhaWxcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVfREVUQUlMID0gJ1NFVF9NT1ZJRV9ERVRBSUwnO1xuXG4vLyBwcm9maWxlXG4vLyAgLS0gQWNjb3VudFxuZXhwb3J0IGNvbnN0IFNFVF9BQ0NPVU5UX0RFVEFJTCA9ICdTRVRfQUNDT1VOVF9ERVRBSUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9VUExPQURFRF9JTUFHRSA9ICdTRVRfVVBMT0FERURfSU1BR0UnO1xuXG4vLyBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBTT1JUX09QVElPTlMgPSBbe1xuICBuYW1lOiAnUG9wdWxhcml0eScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmV2ZW51ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdQcmltYXJ5IFJlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdPcmdpbmFsIFRpdGxlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQXZlcmFnZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIENvdW50JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn1dO1xuIiwiY29uc3QgcHJvZmlsZU1lbnUgPSBbXG4gIHtcbiAgICBuYW1lOiAnQWNjb3VudCcsXG4gICAgaWNvbjogJ3VzZXInLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9hY2NvdW50JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMaXN0cycsXG4gICAgaWNvbjogJ2xpc3QnLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9saXN0cycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRmF2b3JpdGVzJyxcbiAgICBpY29uOiAnaGVhcnQnLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9mYXZvcml0ZXMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0NvbW1lbnRzJyxcbiAgICBpY29uOiAnY29tbWVudCcsXG4gICAgcGF0aDogJy9wcm9maWxlL2NvbW1lbnRzJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdSZXZpZXdzJyxcbiAgICBpY29uOiAnbmV3c3BhcGVyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvcmV2aWV3cycsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnRnJpZW5kcycsXG4gICAgaWNvbjogJ3VzZXItZnJpZW5kcycsXG4gICAgcGF0aDogJy9wcm9maWxlL2ZyaWVuZHMnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ1NldHRpbmdzJyxcbiAgICBpY29uOiAnY29nJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvc2V0dGluZ3MnLFxuICB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZU1lbnU7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVXNlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZpcnN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmdWxsTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1c2VyTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgTW92aWVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmdpbmFsVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZU5hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBob21lcGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IENhc3RTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hhcmFjdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHByb2ZpbGVQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvbXBhbnlTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2dvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHZW5yZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtYXRjaFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHNvcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICBjcmV3czogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICB2b3RlQXZlcmFnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgcmVsZWFzZVllYXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZmlsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXInO1xuaW1wb3J0IHsgVXNlclNoYXBlLCBtYXRjaFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgJy4vQWNjb3VudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgcHJvcHMuc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgICAgdXNlckZvcm06IHt9LFxuICAgICAgcGFzc3dvcmRGb3JtOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnVwZGF0ZVVzZXIgPSB0aGlzLnVwZGF0ZVVzZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgdXBkYXRlVXNlcigpIHtcbiAgICBjb25zdCB7IHVwZGF0ZVVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1c2VyRm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICB1cGRhdGVVc2VyKHVzZXJGb3JtKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9LCBmaWVsZCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xuICAgIHN0YXRlW2ZpZWxkXVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdXNlckZvcm0sIHZhbGlkYXRpb24sIHBhc3N3b3JkRm9ybSB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMudXBkYXRlVXNlcn1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaG93PXtsb2FkaW5nfSBraW5kPVwiYm9yZGVyXCIgY29sb3I9XCJzdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bG9hZGluZyA/ICdkLW5vbmUnIDogJ2QtYmxvY2snfT5VcGRhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5DaGFuZ2UgUGFzc3dvcmQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2xkUGFzc3dvcmRJbnB1dFwiPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRGb3JtLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmRGb3JtLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1OZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZEZvcm0uY29uZmlybU5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1OZXdQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWJsb2NrXCIgdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50JztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwsIGNoYW5nZVBhc3N3b3JkLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFjY291bnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIHNob3csXG4gICAgbWVzc2FnZSxcbiAgICB0b2dnbGVBbGVydCxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gc2l0ZS1hbGVydCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZUFsZXJ0fT5cbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAga2luZDogJ2luZm8nLFxuICBtZXNzYWdlOiBudWxsLFxufTtcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlQWxlcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICdzdWNjZXNzJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2luZm8nLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICBdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgdG9nZ2xlQWxlcnQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi9BbGVydCc7XG5pbXBvcnQgJy4vQWxlcnQuc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvbW1vbiB9KSA9PiAoe1xuICBzaG93OiBjb21tb24uc2hvd0FsZXJ0LFxuICBtZXNzYWdlOiBjb21tb24uYWxlcnRNZXNzYWdlLFxuICBraW5kOiBjb21tb24uYWxlcnRLaW5kLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHRvZ2dsZUFsZXJ0OiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydCh7IHNob3c6IGZhbHNlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWxlcnQpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi8uLi9saWIvY29va2llJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICB1c2VyTmFtZToge30sXG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDoge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zd2l0Y2hGb3JtID0gdGhpcy5zd2l0Y2hGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dpblJlZ2lzdGVyID0gdGhpcy5sb2dpblJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0IH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNvb2tpZS5nZXQoJ2Vycm9yTWVzc2FnZScpO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRvZ2dsZUFsZXJ0KGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnN0YXRlO1xuICAgIGZvcm1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybSB9KTtcbiAgfVxuXG4gIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKCFmb3JtLmVtYWlsIHx8ICFlbWFpbElucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHt9O1xuICAgIH1cblxuICAgIGlmICghZm9ybS5wYXNzd29yZCB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPiAxNikge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBtdXN0IGJlIDYtMTYgY2hhY3JhY3Rlci48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGlmICghZm9ybS51c2VyTmFtZSB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlVzZXIgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5maXJzdE5hbWUgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5GaXJzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5sYXN0TmFtZSB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkxhc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybS5wYXNzd29yZCkge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgZG9udCBtYXRjaDwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbiB9KTtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGxvZ2luUmVnaXN0ZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRpb24oZm9ybSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgdXJsID0gaXNSZWdpc3RlclxuICAgICAgPyAnL2FwaS9yZWdpc3RlcidcbiAgICAgIDogJy9hcGkvbG9naW4nO1xuXG4gICAgcmV0dXJuIHByb3BzLmxvZ2luUmVnaXN0ZXIoZm9ybSwgdXJsKTtcbiAgfVxuXG4gIHN3aXRjaEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzUmVnaXN0ZXI6ICFwcmV2U3RhdGUuaXNSZWdpc3RlcixcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybSxcbiAgICAgIGlzUmVnaXN0ZXIsXG4gICAgICB2YWxpZGF0aW9uLFxuICAgICAgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBidXR0b25UZXh0ID0gJ0xPR0lOJztcbiAgICBsZXQgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgbGV0IHJlZ2lzdGVySW5wdXQgPSBudWxsO1xuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUkVHSVNURVInO1xuICAgICAgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdMT0dJTic7XG5cbiAgICAgIHJlZ2lzdGVySW5wdXQgPSAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJ1c2VyTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24udXNlck5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lSW5wdXRcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+XG4gICAgICAgICAgICAgIExhc3QgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImxhc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYXV0aC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9IGFsdD1cIlZpc3NuZVwiIGhlaWdodD1cIjcwXCIgY2xhc3NOYW1lPVwibXktMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBpZD1cImZvcm1SZWdcIiBjbGFzc05hbWU9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiYmFzaWMtYWRkb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVudmVsb3BlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSW5wdXRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZElucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwicGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1bmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5wYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ucGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtyZWdpc3RlcklucHV0fVxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3dpdGNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dpblJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtICR7bG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGdvb2dsZSAgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9nb29nbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2dvb2dsZSddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBHT09HTEVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBmYWNlYm9vayBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2ZhY2Vib29rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBGQUNFQk9PS1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkF1dGgucHJvcFR5cGVzID0ge1xuICB0b2dnbGVBbGVydDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXV0aCBmcm9tICcuL0F1dGgnO1xuaW1wb3J0IHsgbG9naW5SZWdpc3RlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyB0b2dnbGVBbGVydCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCAnLi9BdXRoLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBsb2dpblJlZ2lzdGVyOiAoZGF0YSwgdXJsKSA9PiBkaXNwYXRjaChsb2dpblJlZ2lzdGVyKGRhdGEsIHVybCkpLFxuICB0b2dnbGVBbGVydDogbWVzc2FnZSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydCh7IGtpbmQ6ICdkYW5nZXInLCBtZXNzYWdlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQXV0aCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb3ZpZUxpc3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7XG4gIFVzZXJTaGFwZSxcbiAgTW92aWVTaGFwZSxcbiAgR2VucmVTaGFwZSxcbiAgRmlsdGVyU2hhcGUsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxvYWRNb3ZpZXMgPSB0aGlzLmxvYWRNb3ZpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRHZW5yZXMsIHRvZ2dsZUZpbHRlciwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBtYXRjaDtcblxuICAgIGdldEdlbnJlcygpO1xuXG4gICAgaWYgKFsnL2NvbWluZy1zb29uJywgJy9pbi10aGVhdGVycyddLmluZGV4T2YocGF0aCkgIT09IC0xKSB7XG4gICAgICB0aGlzLnNldFF1ZXJ5KHsgZmllbGQ6ICdmaWx0ZXInLCB2YWx1ZTogcGF0aC5yZXBsYWNlKCcvJywgJycpIH0pO1xuICAgICAgdG9nZ2xlRmlsdGVyKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkTW92aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBjb25zdCB7IHNldFF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFF1ZXJ5KHF1ZXJ5KS50aGVuKHRoaXMubG9hZE1vdmllcyk7XG4gIH1cblxuICBsb2FkTW92aWVzKCkge1xuICAgIGNvbnN0IHsgZ2V0TW92aWVzLCBxdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZXMocXVlcnkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vdmllcyxcbiAgICAgIHVzZXIsXG4gICAgICBpc0xvZ2dlZEluLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgbG9jYXRpb24sXG4gICAgICBzaG93RmlsdGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSBwYXRoTmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPEZpbHRlciBzaG93PXtzaG93RmlsdGVyfSBnZW5yZXM9e2dlbnJlc30gc2V0UXVlcnk9e3RoaXMuc2V0UXVlcnl9IHF1ZXJ5PXtxdWVyeX0gLz5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfSBpZD1cImxpc3RcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS0xXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRNb3ZpZXN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1iLTIgJHtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IHNpemU9XCJtZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRGlzY292ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbiAgdXNlcjoge30sXG59O1xuXG5EaXNjb3Zlci5wcm9wVHlwZXMgPSB7XG4gIGdldE1vdmllczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0R2VucmVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKEdlbnJlU2hhcGUpLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBGaWx0ZXJTaGFwZS5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL0Rpc2NvdmVyJztcbmltcG9ydCB7IHRvZ2dsZUZpbHRlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCB7XG4gIGdldE1vdmllcyxcbiAgc2V0UXVlcnksXG4gIGdldEdlbnJlcyxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9kaXNjb3Zlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBxdWVyeTogc3RhdGUuZGlzY292ZXIucXVlcnksXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG4gIG1vdmllczogc3RhdGUuZGlzY292ZXIubW92aWVzLFxuICBnZW5yZXM6IHN0YXRlLmRpc2NvdmVyLmdlbnJlcyxcbiAgc2hvd0ZpbHRlcjogc3RhdGUuY29tbW9uLnNob3dGaWx0ZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVzOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRNb3ZpZXMocXVlcnkpKSxcbiAgc2V0UXVlcnk6IHF1ZXJ5ID0+IGRpc3BhdGNoKHNldFF1ZXJ5KHF1ZXJ5KSksXG4gIGdldEdlbnJlczogKCkgPT4gZGlzcGF0Y2goZ2V0R2VucmVzKCkpLFxuICB0b2dnbGVGaWx0ZXI6IHNob3cgPT4gZGlzcGF0Y2godG9nZ2xlRmlsdGVyKHNob3cpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoRGlzY292ZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCBEZXRhaWxUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGFpbFRhYmxlJztcbmltcG9ydCBDb21wYW55TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBhbnlMaXN0JztcbmltcG9ydCBDYXN0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Nhc3RMaXN0JztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvJztcbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZURldGFpbCwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0TW92aWVEZXRhaWwobWF0Y2gucGFyYW1zLmlkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRldGFpbCwgdXNlciwgaXNMb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgIDxQcm9ncmVzc0JhciBzaG93IGNvbG9yPVwiaW5mb1wiIC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvID0gZGV0YWlsLnZpZGVvcy5sZW5ndGggPiAwXG4gICAgICA/IDxWaWRlbyB2aWRlb0tleT17ZGV0YWlsLnZpZGVvc1swXS5rZXl9IC8+XG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi0yXCIgc3JjPXtkZXRhaWwucG9zdGVyUGF0aH0gYWx0PXtkZXRhaWwudGl0bGV9IC8+XG4gICAgICAgICAgICAgIDxDb21wYW55TGlzdCBjb21wYW5pZXM9e2RldGFpbC5wcm9kdWN0aW9uX2NvbXBhbmllc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTYgbWItMlwiPlxuICAgICAgICAgICAgICB7dmlkZW99XG4gICAgICAgICAgICAgIDxEZXRhaWxUYWJsZSBtb3ZpZT17ZGV0YWlsfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgPENhc3RMaXN0IGNhc3RzPXtkZXRhaWwuY3JlZGl0cy5jYXN0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Nb3ZpZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuTW92aWUucHJvcFR5cGVzID0ge1xuICBnZXRNb3ZpZURldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGV0YWlsOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIG1hdGNoOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vTW92aWUnO1xuaW1wb3J0IHsgZ2V0TW92aWVEZXRhaWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21vdmllJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZGV0YWlsOiBzdGF0ZS5tb3ZpZS5kZXRhaWwsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVEZXRhaWw6IGlkID0+IGRpc3BhdGNoKGdldE1vdmllRGV0YWlsKGlkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vdmllKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgJy4uL3NjcmlwdHMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmUtc3RvcmUnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9Sb290JztcbmltcG9ydCBmb250QXdlc29tZSBmcm9tICcuLi9saWIvZm9udC1hd2Vzb21lJztcblxuZm9udEF3ZXNvbWUoKTsgLy8gaW5pdCBmb250IGF3c29tZSBpY29uc1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbnJlbmRlcihcbiAgPFJvb3Qgc3RvcmU9e3N0b3JlfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLFxuKTtcbiIsImltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWNjb3VudChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BQ0NPVU5UX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgYWxlcnRNZXNzYWdlOiBudWxsLFxuICBhbGVydEtpbmQ6ICdpbmZvJyxcbiAgcGFnZUxvYWRpbmc6IHRydWUsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVE9HR0xFX0FMRVJUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dBbGVydDogIXN0YXRlLnNob3dBbGVydCxcbiAgICAgICAgYWxlcnRNZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgYWxlcnRLaW5kOiBhY3Rpb24ua2luZCxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlTG9hZGluZzogYWN0aW9uLnBhZ2VMb2FkaW5nLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9MT0FESU5HX1NUQVRVUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBUT0dHTEVfRklMVEVSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dGaWx0ZXI6ICFzdGF0ZS5zaG93RmlsdGVyLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9VUExPQURFRF9JTUFHRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1cGxvYWRlZEF2YXRhcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9HRU5SRVMsIFNFVF9RVUVSWSB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi9saWIvY29va2llJztcblxuY29uc3QgdXNlciA9IHtcbiAgaWQ6IGNvb2tpZS5nZXQoJ3VzZXJfaWQnKSxcbiAgdXNlck5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJuYW1lJyksXG4gIGZyaXN0TmFtZTogY29va2llLmdldCgndXNlcl9maXJzdF9uYW1lJyksXG4gIGxhc3ROYW1lOiBjb29raWUuZ2V0KCd1c2VyX2xhc3RfbmFtZScpLFxuICBlbWFpbDogY29va2llLmdldCgndXNlcl9lbWFpbCcpLFxufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyLFxuICBnZW5yZXM6IFtdLFxuICBtb3ZpZXM6IFtdLFxuICB0b3RhbDogMCxcbiAgdG90YWxQYWdlOiAxLFxuICBxdWVyeToge1xuICAgIHBhZ2U6IDEsXG4gICAgc29ydEJ5OiAncG9wdWxhcml0eS5kZWNzJyxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICB3aXRoR2VucmVzOiBbXSxcbiAgICB5ZWFyOiBudWxsLFxuICAgIGNyZXdzOiBbXSxcbiAgICBjYXN0czogW10sXG4gIH0sXG4gIGlzTG9nZ2VkSW46ICEhdXNlci5lbWFpbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFwcChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBjb21tb24sXG59KTtcbiIsImltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkZXRhaWw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTU9WSUVfREVUQUlMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLmRldGFpbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgdGh1bmtNaWRkbGV3YXJlLFxuICAgICksXG4gICk7XG59XG4iLCJcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydCB9IGZyb20gJy4uL2FwcC9hY3Rpb25zL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgY2FzZSA0MDM6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy9wYWdlLW5vdC1mb3VuZCc7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICB0b2dnbGVBbGVydCh7XG4gICAgICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xufVxuIiwiY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5cbmNvbnN0IHNldCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBkb2MuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xufTtcblxuY29uc3QgZ2V0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvYy5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBbY25hbWUsIGN2YWx1ZV0gPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGNuYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBjdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQsXG4gIHNldCxcbn07XG4iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7XG4gIGZhVXNlcixcbiAgZmFTaWduT3V0QWx0LFxuICBmYUVudmVsb3BlLFxuICBmYVVubG9jayxcbiAgZmFBbGlnbkxlZnQsXG4gIGZhS2V5LFxuICBmYVNpZ25hdHVyZSxcbiAgZmFGaWx0ZXIsXG4gIGZhU29ydEFtb3VudFVwLFxuICBmYVNvcnRBbW91bnREb3duLFxuICBmYVVzZXJDaXJjbGUsXG4gIGZhTGlzdCxcbiAgZmFTdGFyLFxuICBmYUhlYXJ0LFxuICBmYUNvbW1lbnQsXG4gIGZhU3dhdGNoYm9vayxcbiAgZmFVc2VyRnJpZW5kcyxcbiAgZmFDb2csXG4gIGZhRWRpdCxcbiAgZmFVcGxvYWQsXG4gIGZhTmV3c3BhcGVyLFxuICBmYUF0LFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFHb29nbGUsXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsaWJyYXJ5LmFkZChcbiAgICBmYVVzZXIsXG4gICAgZmFTaWduT3V0QWx0LFxuICAgIGZhRW52ZWxvcGUsXG4gICAgZmFVbmxvY2ssXG4gICAgZmFBbGlnbkxlZnQsXG4gICAgZmFLZXksXG4gICAgZmFTaWduYXR1cmUsXG4gICAgZmFGaWx0ZXIsXG4gICAgZmFTb3J0QW1vdW50VXAsXG4gICAgZmFTb3J0QW1vdW50RG93bixcbiAgICBmYUZhY2Vib29rLFxuICAgIGZhR29vZ2xlLFxuICAgIGZhVHdpdHRlcixcbiAgICBmYUluc3RhZ3JhbSxcbiAgICBmYVVzZXJDaXJjbGUsXG4gICAgZmFMaXN0LFxuICAgIGZhU3RhcixcbiAgICBmYUhlYXJ0LFxuICAgIGZhQ29tbWVudCxcbiAgICBmYVN3YXRjaGJvb2ssXG4gICAgZmFVc2VyRnJpZW5kcyxcbiAgICBmYUNvZyxcbiAgICBmYUVkaXQsXG4gICAgZmFVcGxvYWQsXG4gICAgZmFOZXdzcGFwZXIsXG4gICAgZmFBdCxcbiAgKTtcbn1cbiIsIigoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcblxuICB3aW4ub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VMb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMb2FkaW5nJyk7XG5cbiAgICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICAgIHBhZ2VMb2FkaW5nLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh2aXNzbmUuZW52ID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==