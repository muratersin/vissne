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

var _Lists = __webpack_require__(/*! ./containers/Lists */ "./app/assets/javascript/app/containers/Lists/index.js");

var _Lists2 = _interopRequireDefault(_Lists);

var _NotFound = __webpack_require__(/*! ./components/NotFound */ "./app/assets/javascript/app/components/NotFound/index.jsx");

var _NotFound2 = _interopRequireDefault(_NotFound);

var _Alert = __webpack_require__(/*! ./containers/Alert */ "./app/assets/javascript/app/containers/Alert/index.js");

var _Alert2 = _interopRequireDefault(_Alert);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
          _react2.default.createElement(_reactRouterDom.Route, { path: '/profile/lists', component: _Lists2.default }),
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


// Pages


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
    _axios2.default.put('/api/user/change-password', password).then(function (_ref) {
      var data = _ref.data;

      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlert)({
        kind: 'success',
        message: data.message
      }));
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

/***/ "./app/assets/javascript/app/actions/lists.js":
/*!****************************************************!*\
  !*** ./app/assets/javascript/app/actions/lists.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setList = setList;
exports.getListByCurrentUser = getListByCurrentUser;
exports.createList = createList;
exports.deleteList = deleteList;
exports.addToList = addToList;
exports.removeFromList = removeFromList;

var _axios = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");

var _axios2 = _interopRequireDefault(_axios);

var _cookie = __webpack_require__(/*! ../../lib/cookie */ "./app/assets/javascript/lib/cookie.js");

var _cookie2 = _interopRequireDefault(_cookie);

var _ajaxErrorHandler = __webpack_require__(/*! ../../lib/ajax-error-handler */ "./app/assets/javascript/lib/ajax-error-handler.js");

var _ajaxErrorHandler2 = _interopRequireDefault(_ajaxErrorHandler);

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/actions/common.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setList(lists) {
  return {
    type: _actionTypes.SET_LISTS,
    payload: lists
  };
}

function getListByCurrentUser(_ref) {
  var page = _ref.page,
      limit = _ref.limit;

  var currentUserId = _cookie2.default.get('user_id');

  if (!currentUserId) {
    window.location.href = vissne.domain + '/auth';
  }

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    (0, _axios2.default)('/api/lists?userId=' + currentUserId + '&page=' + page + '&limit=' + limit).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(true));
      dispatch((0, _common.setPageLoadingStatus)(false));
      dispatch(setList(response.data));
    }).catch(_ajaxErrorHandler2.default);
  };
}

function createList(list) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.post('/api/lists', list).then(function (result) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlert)({
        kind: 'success',
        message: result.data.message
      }));
    }).catch(_ajaxErrorHandler2.default);
  };
}

function deleteList(id) {}

function addToList(listId, movieId) {}

function removeFromList(listId, movieId) {}

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

/***/ "./app/assets/javascript/app/components/Modal/Modal.scss":
/*!***************************************************************!*\
  !*** ./app/assets/javascript/app/components/Modal/Modal.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/Modal/index.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/Modal/index.jsx ***!
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

__webpack_require__(/*! ./Modal.scss */ "./app/assets/javascript/app/components/Modal/Modal.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(props) {
  var title = props.title,
      cancel = props.cancel,
      submit = props.submit,
      children = props.children,
      show = props.show;


  var className = show ? 'show d-block' : '';

  return _react2.default.createElement(
    'div',
    { className: 'modal fade ' + className, tabIndex: '-1', role: 'dialog', 'aria-hidden': 'true', 'data-backdrop': true },
    _react2.default.createElement(
      'div',
      { className: 'modal-dialog modal-dialog-scrollable', role: 'dialog' },
      _react2.default.createElement(
        'div',
        { className: 'modal-content' },
        _react2.default.createElement(
          'div',
          { className: 'modal-header' },
          _react2.default.createElement(
            'h5',
            { className: 'modal-title' },
            title
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close', onClick: cancel },
            _react2.default.createElement(
              'span',
              { 'aria-hidden': 'true' },
              '\xD7'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-body' },
          children
        ),
        _react2.default.createElement(
          'div',
          { className: 'modal-footer' },
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-secondary', 'data-dismiss': 'modal', onClick: cancel },
            'Close'
          ),
          _react2.default.createElement(
            'button',
            { type: 'button', className: 'btn btn-primary', onClick: submit },
            'Save'
          )
        )
      )
    )
  );
};

Modal.defaultProps = {
  show: false
};

Modal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  submit: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.instanceOf(Object).isRequired,
  show: _propTypes2.default.bool
};

exports.default = Modal;

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

/***/ "./app/assets/javascript/app/components/Pagination.jsx":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/components/Pagination.jsx ***!
  \*************************************************************/
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

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _handleClick = function _handleClick(currentPage, page) {
  var result = 1;

  if (page === 'prev') {
    var newPage = currentPage - 1;

    result = newPage === 0 ? 1 : newPage;
  } else {
    result = currentPage + 1;
  }

  return { page: result };
};

var generatePageNumbers = function generatePageNumbers(options) {
  var page = options.page,
      limit = options.limit,
      total = options.total,
      buttonCount = options.buttonCount;

  var pageNumbers = [];
  var totalPage = Math.ceil(total / limit);
  var bc = Math.ceil(buttonCount / 2);

  for (var i = page - (bc - 1); i < page + bc; i += 1) {
    if (i > 0 && i <= totalPage) {
      pageNumbers.push(i);
    }
  }

  return pageNumbers;
};

var Pagination = function Pagination(_ref) {
  var options = _ref.options;
  var page = options.page,
      onPaginate = options.onPaginate;


  var pageNumbers = generatePageNumbers(options);

  if (pageNumbers.length < 2) {
    return _react2.default.createElement('span', null);
  }

  var pageButtons = pageNumbers.map(function (pn) {
    return _react2.default.createElement(
      'li',
      { className: 'page-item  ' + (pn === page ? 'active' : '') },
      _react2.default.createElement(
        'a',
        {
          className: 'page-link',
          onClick: function onClick() {
            return onPaginate(pn);
          }
        },
        pn
      )
    );
  });

  return _react2.default.createElement(
    'nav',
    { 'aria-label': 'Pagination' },
    _react2.default.createElement(
      'ul',
      { className: 'pagination' },
      _react2.default.createElement(
        'li',
        { className: 'page-item' },
        _react2.default.createElement(
          'a',
          {
            className: 'page-link',
            onClick: function onClick() {
              return onPaginate(_handleClick(page, 'prev'));
            }
          },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'angle-left' })
        )
      ),
      pageButtons,
      _react2.default.createElement(
        'li',
        { className: 'page-item' },
        _react2.default.createElement(
          'a',
          {
            className: 'page-link',
            handleClick: function handleClick() {
              return onPaginate(_handleClick(page, 'next'));
            }
          },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'angle-right' })
        )
      )
    )
  );
};

Pagination.defaultProps = {
  options: {
    buttonCount: 3,
    total: 0,
    page: 1,
    limit: 10
  }
};

Pagination.propTypes = {
  options: _propTypes2.default.shape({
    total: _propTypes2.default.number,
    limit: _propTypes2.default.number,
    page: _propTypes2.default.number,
    onPaginate: _propTypes2.default.func,
    buttonCount: _propTypes2.default.number
  })
};

exports.default = Pagination;

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

/***/ "./app/assets/javascript/app/components/TableList.jsx":
/*!************************************************************!*\
  !*** ./app/assets/javascript/app/components/TableList.jsx ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _Pagination = __webpack_require__(/*! ./Pagination */ "./app/assets/javascript/app/components/Pagination.jsx");

var _Pagination2 = _interopRequireDefault(_Pagination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createHeader = function createHeader(fields) {
  var visibleFields = fields.filter(function (f) {
    return !f.hidden;
  }).map(function (f) {
    return _react2.default.createElement(
      'th',
      { scope: 'col' },
      f.title
    );
  });

  return _react2.default.createElement(
    'tr',
    null,
    visibleFields
  );
};

var createBody = function createBody(data, fields) {
  var tbody = [];

  data.forEach(function (item) {
    var itemFields = [];

    fields.forEach(function (field) {
      if (field.hidden) {
        return null;
      }

      var v = item[field.name];
      var value = field.format ? field.format(v) : v.toString();

      itemFields.push(_react2.default.createElement(
        'td',
        null,
        value
      ));
    });

    tbody.push(_react2.default.createElement(
      'tr',
      null,
      itemFields
    ));
  });

  return tbody;
};

var createPagination = function createPagination(options) {
  if (!options) {
    return null;
  }

  var limit = options.limit,
      total = options.total;


  return _react2.default.createElement(
    'div',
    { className: 'd-flex justify-content-between' },
    _react2.default.createElement(_Pagination2.default, { options: options }),
    _react2.default.createElement(
      'span',
      null,
      'Show ' + (limit > total ? total : limit) + ' result of ' + total
    )
  );
};

var TableList = function TableList(props) {
  var data = props.data,
      fields = props.fields,
      pagination = props.pagination;


  if (!data || data.length === 0) {
    return null;
  }

  var heads = createHeader(fields);
  var body = createBody(data, fields);
  var paginationButtons = createPagination(pagination);

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col' },
      _react2.default.createElement(
        'table',
        { className: 'table table-responsive' },
        _react2.default.createElement(
          'thead',
          null,
          heads
        ),
        _react2.default.createElement(
          'tbody',
          null,
          body
        )
      ),
      paginationButtons
    )
  );
};

exports.default = TableList;

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

// lists
var GET_LISTS_BY_CURRENT_USER = exports.GET_LISTS_BY_CURRENT_USER = 'GET_LISTS_BY_CURRENT_USER';
var CREATE_LIST = exports.CREATE_LIST = 'CREATE_LIST';
var DELETE_LIST = exports.DELETE_LIST = 'DELETE_LISTS';
var ADD_TO_LIST = exports.ADD_TO_LIST = 'ADD_TO_LIST';
var DELETE_FROM_LIST = exports.DELETE_FROM_LIST = 'DELETE_FROM_LIST';
var SET_LISTS = exports.SET_LISTS = 'SET_LISTS';

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
      password: {},
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

    _this.handleChange = _this.handleChange.bind(_this);
    _this.changePassword = _this.changePassword.bind(_this);
    return _this;
  }

  _createClass(Account, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getAccountDetail = this.props.getAccountDetail;

      getAccountDetail();
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
    key: 'changePassword',
    value: function changePassword() {
      var password = this.state.password;
      var _props = this.props,
          toggleAlert = _props.toggleAlert,
          changePassword = _props.changePassword;


      if (password.newPassword !== password.confirmNewPassword) {
        return toggleAlert({
          kind: 'danger',
          message: 'Passwords don\'t match.'
        });
      }

      if (password.oldPassword === password.newPassword) {
        return toggleAlert({
          kind: 'danger',
          message: 'Password cannot be the same with old password.'
        });
      }

      changePassword(password);
      this.setState({ password: {} });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          match = _props2.match,
          user = _props2.user,
          loading = _props2.loading,
          pageLoading = _props2.pageLoading,
          updateUser = _props2.updateUser;
      var _state = this.state,
          userForm = _state.userForm,
          validation = _state.validation,
          password = _state.password;


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
                    onClick: function onClick() {
                      return updateUser(userForm);
                    },
                    disabled: loading
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
                    value: password.oldPassword,
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
                    value: password.newPassword,
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
                    value: password.confirmNewPassword,
                    id: 'confirmNewPasswordInput',
                    onChange: function onChange(e) {
                      return _this2.handleChange(e, 'password');
                    }
                  }),
                  validation.confirmNewPassword.error
                ),
                _react2.default.createElement(
                  'button',
                  {
                    className: 'btn btn-outline-primary btn-block',
                    type: 'button',
                    disabled: loading,
                    onClick: this.changePassword
                  },
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
  updateUser: _propTypes2.default.func.isRequired,
  toggleAlert: _propTypes2.default.func.isRequired,
  changePassword: _propTypes2.default.func.isRequired
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
    },
    toggleAlert: function toggleAlert(alert) {
      return dispatch((0, _common.toggleAlert)(alert));
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

/***/ "./app/assets/javascript/app/containers/Lists/Lists.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Lists/Lists.jsx ***!
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

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProfileContainer = __webpack_require__(/*! ../../components/ProfileContainer */ "./app/assets/javascript/app/components/ProfileContainer.jsx");

var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

var _TableList = __webpack_require__(/*! ../../components/TableList */ "./app/assets/javascript/app/components/TableList.jsx");

var _TableList2 = _interopRequireDefault(_TableList);

var _Modal = __webpack_require__(/*! ../../components/Modal */ "./app/assets/javascript/app/components/Modal/index.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lists = function (_Component) {
  _inherits(Lists, _Component);

  function Lists(props) {
    _classCallCheck(this, Lists);

    var _this = _possibleConstructorReturn(this, (Lists.__proto__ || Object.getPrototypeOf(Lists)).call(this, props));

    _this.state = {
      list: {},
      query: {
        page: 1,
        limit: 10
      }
    };

    _this.setQuery = _this.setQuery.bind(_this);
    _this.getLists = _this.getLists.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.create = _this.create.bind(_this);
    return _this;
  }

  _createClass(Lists, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getLists();
    }
  }, {
    key: 'setQuery',
    value: function setQuery(query) {
      this.setState(function (prevState) {
        return {
          query: Object.assign(prevState.query, query)
        };
      }, this.getLists);
    }
  }, {
    key: 'getLists',
    value: function getLists() {
      var getListByCurrentUser = this.props.getListByCurrentUser;
      var query = this.state.query;

      getListByCurrentUser(query);
    }
  }, {
    key: 'create',
    value: function create() {
      this.setState({ list: {} });
      this.toggleModal();
    }
  }, {
    key: 'toggleModal',
    value: function toggleModal() {
      this.setState(function (prevState) {
        return {
          showModal: !prevState.showModal
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          query = _state.query,
          showModal = _state.showModal;
      var _props = this.props,
          match = _props.match,
          user = _props.user,
          pageLoading = _props.pageLoading,
          total = _props.total,
          tableFields = _props.tableFields,
          lists = _props.lists;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          _ProfileContainer2.default,
          { user: user, path: match.path, pageLoading: pageLoading },
          _react2.default.createElement(
            'div',
            { className: 'row mt-2' },
            _react2.default.createElement(
              'div',
              { className: 'col d-flex justify-content-end' },
              _react2.default.createElement(
                'button',
                { className: 'btn btn-outline-primary', type: 'button', onClick: this.create },
                _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'plus-square' }),
                ' Create List'
              )
            )
          ),
          _react2.default.createElement(_TableList2.default, {
            title: 'My Lists',
            data: lists,
            fields: tableFields,
            pagination: {
              total: total,
              page: query.page,
              limit: query.limit,
              buttonCount: 5,
              onPaginate: this.setQuery
            }
          })
        ),
        _react2.default.createElement(
          _Modal2.default,
          { show: showModal, title: 'Create List', cancel: this.toggleModal },
          _react2.default.createElement(
            'h1',
            null,
            'Modal COntent'
          )
        )
      );
    }
  }]);

  return Lists;
}(_react.Component);

exports.default = Lists;


Lists.defaultProps = {
  total: 0
};

Lists.propTypes = {
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  pageLoading: _propTypes2.default.bool.isRequired,
  total: _propTypes2.default.number
};

/***/ }),

/***/ "./app/assets/javascript/app/containers/Lists/index.js":
/*!*************************************************************!*\
  !*** ./app/assets/javascript/app/containers/Lists/index.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _lists = __webpack_require__(/*! ../../actions/lists */ "./app/assets/javascript/app/actions/lists.js");

var _Lists = __webpack_require__(/*! ./Lists */ "./app/assets/javascript/app/containers/Lists/Lists.jsx");

var _Lists2 = _interopRequireDefault(_Lists);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    total: state.lists.total,
    tableFields: state.lists.tableFields,
    pageLoading: state.common.pageLoading,
    loading: state.common.loading,
    user: state.account.user
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getListByCurrentUser: function getListByCurrentUser(query) {
      return dispatch((0, _lists.getListByCurrentUser)(query));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Lists2.default);

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
          { className: 'container-fluid mt-2' },
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
exports.default = discover;

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

function discover() {
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

var _lists = __webpack_require__(/*! ./lists */ "./app/assets/javascript/app/reducers/lists.js");

var _lists2 = _interopRequireDefault(_lists);

var _common = __webpack_require__(/*! ./common */ "./app/assets/javascript/app/reducers/common.js");

var _common2 = _interopRequireDefault(_common);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _redux.combineReducers)({
  account: _account2.default,
  discover: _discover2.default,
  movie: _movie2.default,
  lists: _lists2.default,
  common: _common2.default
});

/***/ }),

/***/ "./app/assets/javascript/app/reducers/lists.js":
/*!*****************************************************!*\
  !*** ./app/assets/javascript/app/reducers/lists.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = lists;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var initialState = {
  lists: [],
  total: 0,
  tableFields: [{
    title: 'Id',
    field: 'id',
    hidden: true
  }, {
    title: 'Name',
    field: 'name'
  }, {
    title: 'Create Date',
    field: 'createdAt'
  }]
};

function lists() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload
      });

    default:
      return state;
  }
}

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
    dispatch((0, _common.setLoadingStatus)(false));

    switch (statusCode) {
      case 404:
        window.location.href = vissne.domain + '/page-not-found';
        break;

      case 403:
        window.location.href = vissne.domain + '/auth';
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
  _fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUser, _freeSolidSvgIcons.faSignOutAlt, _freeSolidSvgIcons.faEnvelope, _freeSolidSvgIcons.faUnlock, _freeSolidSvgIcons.faAlignLeft, _freeSolidSvgIcons.faKey, _freeSolidSvgIcons.faSignature, _freeSolidSvgIcons.faFilter, _freeSolidSvgIcons.faSortAmountUp, _freeSolidSvgIcons.faSortAmountDown, _freeBrandsSvgIcons.faFacebook, _freeBrandsSvgIcons.faGoogle, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faInstagram, _freeSolidSvgIcons.faUserCircle, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faStar, _freeSolidSvgIcons.faHeart, _freeSolidSvgIcons.faComment, _freeSolidSvgIcons.faSwatchbook, _freeSolidSvgIcons.faUserFriends, _freeSolidSvgIcons.faCog, _freeSolidSvgIcons.faEdit, _freeSolidSvgIcons.faUpload, _freeSolidSvgIcons.faNewspaper, _freeSolidSvgIcons.faAt, _freeSolidSvgIcons.faAngleRight, _freeSolidSvgIcons.faAngleLeft, _freeSolidSvgIcons.faPlusSquare);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L0Nhc3Quc2Nzcz9mNDg5Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2Nzcz84NTcwIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0TGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0NvbXBhbnkuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55TGlzdC9Db21wYW55TGlzdC5zY3NzP2JiNmEiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0NvbXBhbnlMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRGV0YWlsVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9GaWx0ZXIvRmlsdGVyLnNjc3M/ZWY3ZiIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzPzNkZGUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Zvb3Rlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01lbnUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb2RhbC9Nb2RhbC5zY3NzP2VjZDkiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkL01vdmllQ2FyZC5zY3NzPzlhZTUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2Nzcz81MGI1Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9OYXZiYXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZC9Ob3RGb3VuZC5zY3NzPzVlZjgiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUG9zdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1RhYmxlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1ZpZGVvL1ZpZGVvLnNjc3M/NmRiNiIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL2FjdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9maWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvcHJvcC1zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5zY3NzPzg5NWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0L0FsZXJ0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnQvQWxlcnQuc2Nzcz81MzRiIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9BdXRoLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9BdXRoLnNjc3M/MzRmYyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvRGlzY292ZXIvRGlzY292ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTGlzdHMvTGlzdHMuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTW92aWUvTW92aWUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9tb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3N0b3JlL2NvbmZpZ3VyZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2FqYXgtZXJyb3ItaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2ZvbnQtYXdlc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzPzgyOGIiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydCIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJjcmVhdGVMaXN0IiwiZGVsZXRlTGlzdCIsImFkZFRvTGlzdCIsInJlbW92ZUZyb21MaXN0IiwibGlzdHMiLCJTRVRfTElTVFMiLCJsaW1pdCIsImN1cnJlbnRVc2VySWQiLCJjb29raWUiLCJ2aXNzbmUiLCJkb21haW4iLCJhamF4RXJyb3JIYW5kbGVyIiwibGlzdCIsInJlc3VsdCIsImxpc3RJZCIsIm1vdmllSWQiLCJzZXRNb3ZpZURldGFpbCIsIlNFVF9NT1ZJRV9ERVRBSUwiLCJkZXRhaWwiLCJnZXRNb3ZpZURldGFpbCIsIkNhc3QiLCJuYW1lIiwiY2hhcmFjdGVyIiwicHJvZmlsZVBhdGgiLCJDYXN0U2hhcGUiLCJDYXN0TGlzdCIsImNhc3RzIiwiY2FzdExpc3QiLCJtYXAiLCJjIiwiYXJyYXlPZiIsIkNvbXBhbnkiLCJsb2dvIiwibG9nb1BhdGgiLCJpbWFnZXNTZWN1cmVCYXNlVXJsIiwiY2RuIiwiZGVmYXVsdFByb3BzIiwiQ29tcGFueVNoYXBlIiwiQ29tcGFueUxpc3QiLCJjb21wYW5pZXMiLCJsb2dvX3BhdGgiLCJEZXRhaWxUYWJsZSIsIm1vdmllIiwib3JnaW5hbFRpdGxlIiwieWVhciIsInZvdGVfYXZlcmFnZSIsInZvdGVfY291bnQiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZU5hbWVzIiwidGFnbGluZSIsImNvdW50cmllcyIsImxhbmd1YWdlIiwiZGlyZWN0b3IiLCJ3cml0ZXIiLCJob21lcGFnZSIsIk1vdmllU2hhcGUiLCJzd2l0Y2hTb3J0UXVlcnkiLCJzb3J0QnkiLCJzcGxpdCIsImFkZEdlbnJlSWQiLCJjdXJyZW50R2VucmVzIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImhhbmRsZUNoYW5nZVllYXIiLCJOdW1iZXIiLCJpc05hTiIsIkZpbHRlciIsInByb3BzIiwic2hvdyIsInNvcnRJY29uQ2xhc3MiLCJzb3J0T3B0aW9ucyIsIlNPUlRfT1BUSU9OUyIsInNvcnQiLCJrZXkiLCJyZXBsYWNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJnZW5yZU9wdGlvbnMiLCJnIiwid2l0aEdlbnJlcyIsInNlYXJjaFRleHQiLCIkZXZlbnQiLCJ0YXJnZXQiLCJHZW5yZVNoYXBlIiwiRmlsdGVyU2hhcGUiLCJmdW5jIiwiYm9vbCIsIkZvb3RlciIsIk1lbnUiLCJwYXRoIiwiaXRlbXMiLCJtZW51SXRlbXMiLCJtIiwiaWNvbiIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN0cmluZyIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwidG90YWxQYWdlIiwiTWF0aCIsImNlaWwiLCJiYyIsIlBhZ2luYXRpb24iLCJvblBhZ2luYXRlIiwicGFnZUJ1dHRvbnMiLCJwbiIsInNoYXBlIiwiaW1hZ2VPbkxvYWQiLCJpbWFnZU9uRXJyb3IiLCJzcmMiLCJkZWZhdWx0Q292ZXJJbWFnZVBhdGgiLCJQb3N0ZXIiLCJhbHQiLCJQcm9maWxlQ29udGFpbmVyIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJvbmVPZiIsImNyZWF0ZUhlYWRlciIsImZpZWxkcyIsInZpc2libGVGaWVsZHMiLCJmaWx0ZXIiLCJmIiwiaGlkZGVuIiwiY3JlYXRlQm9keSIsInRib2R5IiwiaXRlbSIsIml0ZW1GaWVsZHMiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImNyZWF0ZVBhZ2luYXRpb24iLCJUYWJsZUxpc3QiLCJwYWdpbmF0aW9uIiwiaGVhZHMiLCJib2R5IiwicGFnaW5hdGlvbkJ1dHRvbnMiLCJWaWRlbyIsInZpZGVvS2V5IiwiTE9BRElORyIsIlJFR0lTVEVSIiwiU0VUX1VTRVIiLCJHRVRfTU9WSUVTIiwiR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiIsIkNSRUFURV9MSVNUIiwiREVMRVRFX0xJU1QiLCJBRERfVE9fTElTVCIsIkRFTEVURV9GUk9NX0xJU1QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZnVsbE5hbWUiLCJtYXRjaFNoYXBlIiwiY3Jld3MiLCJsdGUiLCJndGUiLCJyZWxlYXNlWWVhciIsInN0YXRlIiwiZWRpdE1vZGUiLCJ1c2VyRm9ybSIsInZhbGlkYXRpb24iLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybU5ld1Bhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImZvcmNlVXBkYXRlIiwic2V0U3RhdGUiLCJtYXRjaCIsImNsYXNzIiwiZSIsImVycm9yIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29tbW9uIiwiYWNjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFsZXJ0IiwiQWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJmb3JtIiwiY29uZmlybVBhc3N3b3JkIiwic3dpdGNoRm9ybSIsImVycm9yTWVzc2FnZSIsImVtYWlsSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1JlZ2lzdGVyIiwiaXNWYWxpZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2U3RhdGUiLCJidXR0b25UZXh0Iiwic3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCIsInJlZ2lzdGVySW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJkaXNjb3ZlciIsImxvYWRNb3ZpZXMiLCJzaG93RmlsdGVyIiwicGF0aG5hbWUiLCJnZXRMaXN0cyIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlIiwiYXNzaWduIiwic2hvd01vZGFsIiwidGFibGVGaWVsZHMiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1cGxvYWRlZEF2YXRhciIsImZyaXN0TmFtZSIsImNvbmNhdCIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInRodW5rTWlkZGxld2FyZSIsInN0YXR1c0NvZGUiLCJkb2MiLCJzZXQiLCJjb29raWVzIiwiY25hbWUiLCJjdmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyIiwiZmFTaWduT3V0QWx0IiwiZmFFbnZlbG9wZSIsImZhVW5sb2NrIiwiZmFBbGlnbkxlZnQiLCJmYUtleSIsImZhU2lnbmF0dXJlIiwiZmFGaWx0ZXIiLCJmYVNvcnRBbW91bnRVcCIsImZhU29ydEFtb3VudERvd24iLCJmYUZhY2Vib29rIiwiZmFHb29nbGUiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsImZhVXNlckNpcmNsZSIsImZhTGlzdCIsImZhU3RhciIsImZhSGVhcnQiLCJmYUNvbW1lbnQiLCJmYVN3YXRjaGJvb2siLCJmYVVzZXJGcmllbmRzIiwiZmFDb2ciLCJmYUVkaXQiLCJmYVVwbG9hZCIsImZhTmV3c3BhcGVyIiwiZmFBdCIsImZhQW5nbGVSaWdodCIsImZhQW5nbGVMZWZ0IiwiZmFQbHVzU3F1YXJlIiwid2luIiwib25sb2FkIiwicmVtb3ZlIiwiZW52IiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBZ0IsdUJBQXVCO0FBQ3ZDOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RKQTs7OztBQUNBOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBR0E7Ozs7OztBQUVBLElBQU1BLE9BQU8sU0FBUEEsSUFBTztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLFNBQ1g7QUFBQyx3QkFBRDtBQUFBLE1BQVUsT0FBT0EsS0FBakI7QUFDRTtBQUFDLHFCQUFEO0FBQUE7QUFDRTtBQUFDLHFDQUFEO0FBQUE7QUFDRTtBQUFDLGdDQUFEO0FBQUE7QUFDRSx3Q0FBQyxxQkFBRCxJQUFPLE1BQUssR0FBWixFQUFnQixXQUFoQixFQUFzQixXQUFXQyxrQkFBakMsR0FERjtBQUVFLHdDQUFDLHFCQUFELElBQU8sTUFBSyxjQUFaLEVBQTJCLFdBQVdBLGtCQUF0QyxHQUZGO0FBR0Usd0NBQUMscUJBQUQsSUFBTyxNQUFLLGNBQVosRUFBMkIsV0FBV0Esa0JBQXRDLEdBSEY7QUFJRSx3Q0FBQyxxQkFBRCxJQUFPLE1BQUssT0FBWixFQUFvQixXQUFXQyxjQUEvQixHQUpGO0FBS0Usd0NBQUMscUJBQUQsSUFBTyxNQUFLLGtCQUFaLEVBQStCLFdBQVdDLGlCQUExQyxHQUxGO0FBTUUsd0NBQUMscUJBQUQsSUFBTyxNQUFLLGdCQUFaLEVBQTZCLFdBQVdDLGVBQXhDLEdBTkY7QUFPRSx3Q0FBQyxxQkFBRCxJQUFPLE1BQUssa0JBQVosRUFBK0IsV0FBV0MsZUFBMUMsR0FQRjtBQVFFLHdDQUFDLHFCQUFELElBQU8sTUFBSyxpQkFBWixFQUE4QixXQUFXQyxrQkFBekMsR0FSRjtBQVNFLHdDQUFDLHFCQUFELElBQU8sV0FBV0Esa0JBQWxCO0FBVEY7QUFERixPQURGO0FBY0Usb0NBQUMsZUFBRDtBQWRGO0FBREYsR0FEVztBQUFBLENBQWI7O0FBSEE7OztBQVJBOzs7QUFnQ0FQLEtBQUtRLFNBQUwsR0FBaUI7QUFDZlAsU0FBT1Esb0JBQVVDLFVBQVYsQ0FBcUJDLE1BQXJCLEVBQTZCQztBQURyQixDQUFqQjs7a0JBSWVaLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6Q2Y7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTWEsOENBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFTO0FBQ3ZDQyxVQUFNQywrQkFEaUM7QUFFdkNDLGFBQVM7QUFDUEM7QUFETztBQUY4QixHQUFUO0FBQUEsQ0FBekI7O0FBT0EsSUFBTUMsOENBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFNLFVBQUNDLFFBQUQsRUFBYztBQUNsREEsYUFBUyxrQ0FBcUIsSUFBckIsQ0FBVDtBQUNBQyxvQkFBTUMsR0FBTixDQUFVLGNBQVYsRUFDR0MsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQkosZUFBUyxrQ0FBcUIsS0FBckIsQ0FBVDtBQUNBQSxlQUFTTixpQkFBaUJVLFNBQVNDLElBQTFCLENBQVQ7QUFDRCxLQUpILEVBS0dDLEtBTEgsQ0FLUyxnQ0FBaUJOLFFBQWpCLENBTFQ7QUFNRCxHQVIrQjtBQUFBLENBQXpCOztBQVVBLElBQU1PLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxTQUFRLFVBQUNQLFFBQUQsRUFBYztBQUM5Q0EsYUFBUyw4QkFBaUIsSUFBakIsQ0FBVDtBQUNBQyxvQkFBTU8sR0FBTixnQkFBdUJWLEtBQUtXLEVBQTVCLEVBQWtDWCxJQUFsQyxFQUNHSyxJQURILENBQ1EsVUFBQ0MsUUFBRCxFQUFjO0FBQ2xCSixlQUFTLDhCQUFpQixLQUFqQixDQUFUO0FBQ0FBLGVBQVNOLGlCQUFpQlUsU0FBU0MsSUFBMUIsQ0FBVDtBQUNBTCxlQUFTLHlCQUFZO0FBQ25CVSxjQUFNLFNBRGE7QUFFbkJDLGlCQUFTO0FBRlUsT0FBWixDQUFUO0FBSUQsS0FSSCxFQVNHTCxLQVRILENBU1MsZ0NBQWlCTixRQUFqQixDQVRUO0FBVUQsR0FaeUI7QUFBQSxDQUFuQjs7QUFjQSxJQUFNWSwwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FBWSxVQUFDWixRQUFELEVBQWM7QUFDdERBLGFBQVMsOEJBQWlCLElBQWpCLENBQVQ7QUFDQUMsb0JBQU1PLEdBQU4sQ0FBVSwyQkFBVixFQUF1Q0ssUUFBdkMsRUFDR1YsSUFESCxDQUNRLGdCQUFjO0FBQUEsVUFBWEUsSUFBVyxRQUFYQSxJQUFXOztBQUNsQkwsZUFBUyw4QkFBaUIsS0FBakIsQ0FBVDtBQUNBQSxlQUFTLHlCQUFZO0FBQ25CVSxjQUFNLFNBRGE7QUFFbkJDLGlCQUFTTixLQUFLTTtBQUZLLE9BQVosQ0FBVDtBQUlELEtBUEgsRUFRR0wsS0FSSCxDQVFTLGdDQUFpQk4sUUFBakIsQ0FSVDtBQVNELEdBWDZCO0FBQUEsQ0FBdkIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JDUDs7OztBQUVBOztBQUNBOzs7Ozs7QUFFTyxJQUFNYyx3Q0FBZ0IsU0FBaEJBLGFBQWdCLENBQUNULElBQUQsRUFBT1UsR0FBUDtBQUFBLFNBQWUsVUFBQ2YsUUFBRCxFQUFjO0FBQ3hEQSxhQUFTLGtDQUFxQixJQUFyQixDQUFUO0FBQ0FDLG9CQUFNZSxJQUFOLENBQVdELEdBQVgsRUFBZ0JWLElBQWhCLEVBQXNCRixJQUF0QixDQUEyQixZQUFNO0FBQy9CYyxhQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUF1QixHQUF2QjtBQUNBO0FBQ0QsS0FIRCxFQUdHYixLQUhILENBR1MsZ0NBQWlCTixRQUFqQixDQUhUO0FBSUQsR0FONEI7QUFBQSxDQUF0Qjs7QUFRQSxJQUFNb0IsMEJBQVMsU0FBVEEsTUFBUyxHQUFNLENBRTNCLENBRk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2JQOztBQVFPLElBQU1DLG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHVixPQUFILFFBQUdBLE9BQUg7QUFBQSxNQUFZRCxJQUFaLFFBQVlBLElBQVo7QUFBQSxTQUF3QjtBQUNqRGYsVUFBTTJCLHlCQUQyQztBQUVqRFgsb0JBRmlEO0FBR2pERDtBQUhpRCxHQUF4QjtBQUFBLENBQXBCOztBQU1BLElBQU1hLHNEQUF1QixTQUF2QkEsb0JBQXVCO0FBQUEsU0FBVztBQUM3QzVCLFVBQU02QixvQ0FEdUM7QUFFN0NDLGlCQUFhQztBQUZnQyxHQUFYO0FBQUEsQ0FBN0I7O0FBS0EsSUFBTUMsOENBQW1CLFNBQW5CQSxnQkFBbUI7QUFBQSxTQUFXO0FBQ3pDaEMsVUFBTWlDLCtCQURtQztBQUV6Q0MsYUFBU0g7QUFGZ0MsR0FBWDtBQUFBLENBQXpCOztBQUtBLElBQU1JLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPO0FBQ2pDbkMsVUFBTW9DO0FBRDJCLEdBQVA7QUFBQSxDQUFyQjs7QUFJQSxJQUFNQyw4Q0FBbUIsU0FBbkJBLGdCQUFtQjtBQUFBLFNBQWlCO0FBQy9DckMsVUFBTXNDLCtCQUR5QztBQUUvQ3BDLGFBQVNxQztBQUZzQyxHQUFqQjtBQUFBLENBQXpCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1QlA7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7Ozs7O0FBRU8sSUFBTUMsZ0NBQVksU0FBWkEsU0FBWTtBQUFBLFNBQWE7QUFDcEN4QyxVQUFNeUMsdUJBRDhCO0FBRXBDQyxZQUFRakMsU0FBU2tDLE9BRm1CO0FBR3BDQyxVQUFPbkMsU0FBU21DLElBQVQsR0FBZ0IsQ0FIYTtBQUlwQ0MsZ0JBQVlwQyxTQUFTcUMsV0FKZTtBQUtwQ0MsV0FBT3RDLFNBQVN1QztBQUxvQixHQUFiO0FBQUEsQ0FBbEI7O0FBUUEsSUFBTUMsZ0NBQVksU0FBWkEsU0FBWSxDQUFDQyxLQUFELEVBQVc7QUFDbEMsTUFBSTlCLE1BQU0sY0FBVjs7QUFFQXZCLFNBQU9zRCxJQUFQLENBQVlELEtBQVosRUFBbUJFLE9BQW5CLENBQTJCLFVBQUNDLFNBQUQsRUFBWUMsQ0FBWixFQUFrQjtBQUMzQyxRQUFNQyxRQUFRTCxNQUFNRyxTQUFOLENBQWQ7QUFDQSxRQUFNRyxLQUFLRixNQUFNLENBQU4sR0FDUCxHQURPLEdBRVAsR0FGSjs7QUFJQSxRQUFJQyxLQUFKLEVBQVc7QUFDVCxVQUFJLENBQUNFLE1BQU1DLE9BQU4sQ0FBY0gsS0FBZCxDQUFMLEVBQTJCO0FBQ3pCbkMsb0JBQVVvQyxFQUFWLEdBQWVILFNBQWYsU0FBNEJFLEtBQTVCO0FBQ0QsT0FGRCxNQUVPLElBQUlBLE1BQU1JLE1BQU4sR0FBZSxDQUFuQixFQUFzQjtBQUMzQixZQUFJQyxhQUFnQlAsU0FBaEIsTUFBSjtBQUNBRSxjQUFNSCxPQUFOLENBQWMsVUFBQ1MsQ0FBRCxFQUFPO0FBQ25CRCx3QkFBaUJDLENBQWpCO0FBQ0QsU0FGRDtBQUdBekMsb0JBQVVvQyxFQUFWLEdBQWVJLFVBQWY7QUFDRDtBQUNGO0FBQ0YsR0FqQkQ7O0FBbUJBLFNBQU8sVUFBQ3ZELFFBQUQsRUFBYztBQUNuQkEsYUFBUyw4QkFBaUIsSUFBakIsQ0FBVDtBQUNBQyxvQkFBTUMsR0FBTixDQUFVYSxHQUFWLEVBQ0daLElBREgsQ0FDUSxnQkFBYztBQUFBLFVBQVhFLElBQVcsUUFBWEEsSUFBVzs7QUFDbEJMLGVBQVMsOEJBQWlCLEtBQWpCLENBQVQ7QUFDQUEsZUFBU21DLFVBQVU5QixJQUFWLENBQVQ7QUFDRCxLQUpILEVBS0dDLEtBTEgsQ0FLUyxnQ0FBaUJOLFFBQWpCLENBTFQ7QUFNRCxHQVJEO0FBU0QsQ0EvQk07O0FBaUNBLElBQU15RCw4QkFBVyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxTQUFHQSxLQUFIO0FBQUEsTUFBVVIsS0FBVixTQUFVQSxLQUFWO0FBQUEsU0FBc0IsVUFBQ2xELFFBQUQsRUFBYztBQUMxREEsYUFBUztBQUNQTCxZQUFNZ0Usc0JBREM7QUFFUEQsa0JBRk87QUFHUFI7QUFITyxLQUFUO0FBS0EsV0FBT1UsUUFBUUMsT0FBUixFQUFQO0FBQ0QsR0FQdUI7QUFBQSxDQUFqQjs7QUFTQSxJQUFNQyxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBVztBQUNsQ25FLFVBQU1vRSx1QkFENEI7QUFFbENDO0FBRmtDLEdBQVg7QUFBQSxDQUFsQjs7QUFLQSxJQUFNQyxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsU0FBTTtBQUFBLFdBQVloRSxnQkFDeENDLEdBRHdDLENBQ3BDLFlBRG9DLEVBRXhDQyxJQUZ3QyxDQUVuQztBQUFBLFVBQUdFLElBQUgsU0FBR0EsSUFBSDtBQUFBLGFBQWNMLFNBQVM4RCxVQUFVekQsSUFBVixDQUFULENBQWQ7QUFBQSxLQUZtQyxFQUd4Q0MsS0FId0MsQ0FHbEMsZ0NBQWlCTixRQUFqQixDQUhrQyxDQUFaO0FBQUEsR0FBTjtBQUFBLENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O1FDL0NTa0UsTyxHQUFBQSxPO1FBT0FDLG9CLEdBQUFBLG9CO1FBbUJBQyxVLEdBQUFBLFU7UUFlQUMsVSxHQUFBQSxVO1FBSUFDLFMsR0FBQUEsUztRQUlBQyxjLEdBQUFBLGM7O0FBL0RoQjs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFRQTs7OztBQUVPLFNBQVNMLE9BQVQsQ0FBaUJNLEtBQWpCLEVBQXdCO0FBQzdCLFNBQU87QUFDTDdFLFVBQU04RSxzQkFERDtBQUVMNUUsYUFBUzJFO0FBRkosR0FBUDtBQUlEOztBQUVNLFNBQVNMLG9CQUFULE9BQStDO0FBQUEsTUFBZjVCLElBQWUsUUFBZkEsSUFBZTtBQUFBLE1BQVRtQyxLQUFTLFFBQVRBLEtBQVM7O0FBQ3BELE1BQU1DLGdCQUFnQkMsaUJBQU8xRSxHQUFQLENBQVcsU0FBWCxDQUF0Qjs7QUFFQSxNQUFJLENBQUN5RSxhQUFMLEVBQW9CO0FBQ2xCMUQsV0FBT0MsUUFBUCxDQUFnQkMsSUFBaEIsR0FBMEIwRCxPQUFPQyxNQUFqQztBQUNEOztBQUVELFNBQU8sVUFBQzlFLFFBQUQsRUFBYztBQUNuQkEsYUFBUyw4QkFBaUIsSUFBakIsQ0FBVDtBQUNBLGdEQUEyQjJFLGFBQTNCLGNBQWlEcEMsSUFBakQsZUFBK0RtQyxLQUEvRCxFQUNHdkUsSUFESCxDQUNRLFVBQUNDLFFBQUQsRUFBYztBQUNsQkosZUFBUyw4QkFBaUIsSUFBakIsQ0FBVDtBQUNBQSxlQUFTLGtDQUFxQixLQUFyQixDQUFUO0FBQ0FBLGVBQVNrRSxRQUFROUQsU0FBU0MsSUFBakIsQ0FBVDtBQUNELEtBTEgsRUFNR0MsS0FOSCxDQU1TeUUsMEJBTlQ7QUFPRCxHQVREO0FBVUQ7O0FBRU0sU0FBU1gsVUFBVCxDQUFvQlksSUFBcEIsRUFBMEI7QUFDL0IsU0FBTyxVQUFDaEYsUUFBRCxFQUFjO0FBQ25CQSxhQUFTLDhCQUFpQixJQUFqQixDQUFUO0FBQ0FDLG9CQUFNZSxJQUFOLENBQVcsWUFBWCxFQUF5QmdFLElBQXpCLEVBQ0c3RSxJQURILENBQ1EsVUFBQzhFLE1BQUQsRUFBWTtBQUNoQmpGLGVBQVMsOEJBQWlCLEtBQWpCLENBQVQ7QUFDQUEsZUFBUyx5QkFBWTtBQUNuQlUsY0FBTSxTQURhO0FBRW5CQyxpQkFBU3NFLE9BQU81RSxJQUFQLENBQVlNO0FBRkYsT0FBWixDQUFUO0FBSUQsS0FQSCxFQVFHTCxLQVJILENBUVN5RSwwQkFSVDtBQVNELEdBWEQ7QUFZRDs7QUFFTSxTQUFTVixVQUFULENBQW9CNUQsRUFBcEIsRUFBd0IsQ0FFOUI7O0FBRU0sU0FBUzZELFNBQVQsQ0FBbUJZLE1BQW5CLEVBQTJCQyxPQUEzQixFQUFvQyxDQUUxQzs7QUFFTSxTQUFTWixjQUFULENBQXdCVyxNQUF4QixFQUFnQ0MsT0FBaEMsRUFBeUMsQ0FFL0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pFRDs7OztBQUVBOztBQUNBOzs7Ozs7QUFFTyxJQUFNQywwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FBVztBQUN2Q3pGLFVBQU0wRiw2QkFEaUM7QUFFdkNDO0FBRnVDLEdBQVg7QUFBQSxDQUF2Qjs7QUFLQSxJQUFNQywwQ0FBaUIsU0FBakJBLGNBQWlCO0FBQUEsU0FBTSxVQUFDdkYsUUFBRCxFQUFjO0FBQ2hEQSxhQUFTb0YsZUFBZSxJQUFmLENBQVQ7O0FBRUFuRixvQkFBTUMsR0FBTixpQkFBd0JPLEVBQXhCLEVBQ0dOLElBREgsQ0FDUTtBQUFBLFVBQUdFLElBQUgsUUFBR0EsSUFBSDtBQUFBLGFBQWNMLFNBQ2xCb0YsZUFBZS9FLElBQWYsQ0FEa0IsQ0FBZDtBQUFBLEtBRFIsRUFJR0MsS0FKSCxDQUlTLGdDQUFpQk4sUUFBakIsQ0FKVDtBQUtELEdBUjZCO0FBQUEsQ0FBdkIsQzs7Ozs7Ozs7Ozs7QUNWUCx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFFQTs7QUFDQTs7OztBQUVBLElBQU13RixPQUFPLFNBQVBBLElBQU87QUFBQSxNQUNYL0UsRUFEVyxRQUNYQSxFQURXO0FBQUEsTUFFWGdGLElBRlcsUUFFWEEsSUFGVztBQUFBLE1BR1hDLFNBSFcsUUFHWEEsU0FIVztBQUFBLE1BSVhDLFdBSlcsUUFJWEEsV0FKVztBQUFBLFNBTVg7QUFBQTtBQUFBLE1BQUssV0FBVSxNQUFmO0FBQ0UsMkNBQUssV0FBVSxPQUFmLEVBQXVCLEtBQUtBLFdBQTVCLEVBQXlDLEtBQUtGLElBQTlDLEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsVUFBTSxXQUFVLHNCQUFoQjtBQUF3Q0E7QUFBeEMsT0FERjtBQUVFO0FBQUE7QUFBQSxVQUFNLFdBQVUsdUJBQWhCO0FBQXlDQztBQUF6QztBQUZGO0FBRkYsR0FOVztBQUFBLENBQWI7O0FBZUFGLEtBQUtuRyxTQUFMLEdBQWlCdUcscUJBQWpCOztrQkFFZUosSTs7Ozs7Ozs7Ozs7QUN0QmYsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTUssV0FBVyxTQUFYQSxRQUFXLE9BQWU7QUFBQSxNQUFaQyxLQUFZLFFBQVpBLEtBQVk7O0FBQzlCLE1BQU1DLFdBQVdELE1BQU1FLEdBQU4sQ0FBVTtBQUFBLFdBQ3pCLDhCQUFDLGNBQUQ7QUFDRSxXQUFLQyxFQUFFeEYsRUFEVDtBQUVFLFlBQU13RixFQUFFUixJQUZWO0FBR0UsbUJBQWFRLEVBQUVOLFdBSGpCO0FBSUUsaUJBQVdNLEVBQUVQO0FBSmYsTUFEeUI7QUFBQSxHQUFWLENBQWpCOztBQVNBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxnQkFBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsWUFBZDtBQUFBO0FBQUEsT0FERjtBQUVHSztBQUZIO0FBREYsR0FERjtBQVFELENBbEJEOztBQW9CQUYsU0FBU3hHLFNBQVQsR0FBcUI7QUFDbkJ5RyxTQUFPeEcsb0JBQVU0RyxPQUFWLENBQWtCTixxQkFBbEIsRUFBNkJuRztBQURqQixDQUFyQjs7a0JBSWVvRyxROzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvQmY7Ozs7QUFFQTs7OztBQUVBLElBQU1NLFVBQVUsU0FBVkEsT0FBVSxPQUFvQjtBQUFBLE1BQWpCQyxJQUFpQixRQUFqQkEsSUFBaUI7QUFBQSxNQUFYWCxJQUFXLFFBQVhBLElBQVc7O0FBQ2xDLE1BQU1ZLFdBQVdELE9BQ1Z2QixPQUFPeUIsbUJBREcsYUFDd0JGLElBRHhCLEdBRVZ2QixPQUFPMEIsR0FGRyw0QkFBakI7O0FBSUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFlBQWY7QUFDRSwyQ0FBSyxXQUFVLG1CQUFmLEVBQW1DLEtBQUtGLFFBQXhDLEVBQWtELEtBQUtaLElBQXZELEdBREY7QUFFRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLE1BQWQ7QUFBc0JBO0FBQXRCO0FBREY7QUFGRixHQURGO0FBUUQsQ0FiRDs7QUFlQVUsUUFBUUssWUFBUixHQUF1QjtBQUNyQkosUUFBTSxFQURlO0FBRXJCWCxRQUFNO0FBRmUsQ0FBdkI7O0FBS0FVLFFBQVE5RyxTQUFSLEdBQW9Cb0gsd0JBQXBCOztrQkFFZU4sTzs7Ozs7Ozs7Ozs7QUMxQmYsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFFQTs7QUFDQTs7OztBQUNBOzs7O0FBRUEsSUFBTU8sY0FBYyxTQUFkQSxXQUFjO0FBQUEsTUFBR0MsU0FBSCxRQUFHQSxTQUFIO0FBQUEsU0FDbEI7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUksV0FBVSxZQUFkO0FBQUE7QUFBQSxPQURGO0FBRUU7QUFBQTtBQUFBLFVBQUssV0FBVSxRQUFmO0FBQ0dBLGtCQUFVWCxHQUFWLENBQWM7QUFBQSxpQkFDYiw4QkFBQyxpQkFBRCxJQUFTLEtBQUtDLEVBQUV4RixFQUFoQixFQUFvQixNQUFNd0YsRUFBRVcsU0FBNUIsRUFBdUMsTUFBTVgsRUFBRVIsSUFBL0MsR0FEYTtBQUFBLFNBQWQ7QUFESDtBQUZGO0FBREYsR0FEa0I7QUFBQSxDQUFwQjs7QUFhQWlCLFlBQVlySCxTQUFaLEdBQXdCO0FBQ3RCc0gsYUFBV3JILG9CQUFVNEcsT0FBVixDQUFrQk8sd0JBQWxCLEVBQWdDaEg7QUFEckIsQ0FBeEI7O2tCQUllaUgsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmOzs7O0FBRUE7Ozs7QUFFQSxJQUFNRyxjQUFjLFNBQWRBLFdBQWM7QUFBQSxNQUFHQyxLQUFILFFBQUdBLEtBQUg7QUFBQSxTQUNsQjtBQUFBO0FBQUEsTUFBSyxXQUFVLE1BQWY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLFlBQWQ7QUFBK0JBLGNBQU1DLFlBQXJDLFVBQXNERCxNQUFNRSxJQUE1RDtBQUFBLE9BREY7QUFFRTtBQUFBO0FBQUEsVUFBTyxXQUFVLDZEQUFqQjtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFRRixvQkFBTUcsWUFBZCxVQUErQkgsTUFBTUksVUFBckM7QUFBQTtBQUZGLFdBREY7QUFLRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUE7QUFBS0osb0JBQU1LO0FBQVg7QUFGRixXQUxGO0FBU0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtMLG9CQUFNTTtBQUFYO0FBRkYsV0FURjtBQWFFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQTtBQUFLTixvQkFBTU87QUFBWDtBQUZGLFdBYkY7QUFpQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtQLG9CQUFNUTtBQUFYO0FBRkYsV0FqQkY7QUFxQkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtSLG9CQUFNUztBQUFYO0FBRkYsV0FyQkY7QUF5QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtULG9CQUFNVTtBQUFYO0FBRkYsV0F6QkY7QUE2QkU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQUtWLG9CQUFNVztBQUFYO0FBRkYsV0E3QkY7QUFpQ0U7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBRUU7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBLGtCQUFHLE1BQU1YLE1BQU1ZLFFBQWYsRUFBeUIsS0FBSSxxQkFBN0IsRUFBbUQsUUFBTyxRQUExRDtBQUFvRVosc0JBQU1ZO0FBQTFFO0FBREY7QUFGRjtBQWpDRjtBQURGO0FBRkY7QUFERixHQURrQjtBQUFBLENBQXBCOztBQWtEQWIsWUFBWXhILFNBQVosR0FBd0I7QUFDdEJ5SCxTQUFPYSx1QkFBV2xJO0FBREksQ0FBeEI7O2tCQUllb0gsVzs7Ozs7Ozs7Ozs7QUMxRGYsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7OztBQUNBOztBQUVBOztBQUNBOztBQUNBOzs7O0FBRUEsU0FBU2UsZUFBVCxDQUF5QkMsTUFBekIsRUFBaUM7QUFBQSxzQkFDVkEsT0FBT0MsS0FBUCxDQUFhLEdBQWIsQ0FEVTtBQUFBO0FBQUEsTUFDeEJyQyxJQUR3QjtBQUFBLE1BQ2xCL0UsSUFEa0I7O0FBRS9CLE1BQU13QyxRQUFXdUMsSUFBWCxVQUFtQi9FLFNBQVMsTUFBVCxHQUFrQixLQUFsQixHQUEwQixNQUE3QyxDQUFOO0FBQ0EsU0FBTztBQUNMZ0QsV0FBTyxRQURGO0FBRUxSO0FBRkssR0FBUDtBQUlEOztBQUVELFNBQVM2RSxVQUFULENBQW9CN0UsS0FBcEIsRUFBMkI4RSxhQUEzQixFQUEwQztBQUN4QyxNQUFNQyxRQUFRRCxjQUFjRSxPQUFkLENBQXNCaEYsS0FBdEIsQ0FBZDtBQUNBLE1BQUkrRSxVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNoQkQsa0JBQWNHLElBQWQsQ0FBbUJqRixLQUFuQjtBQUNELEdBRkQsTUFFTztBQUNMOEUsa0JBQWNJLE1BQWQsQ0FBcUJILEtBQXJCLEVBQTRCLENBQTVCO0FBQ0Q7QUFDRCxTQUFPRCxhQUFQO0FBQ0Q7O0FBRUQsU0FBU0ssZ0JBQVQsQ0FBMEJyQixJQUExQixFQUFnQ3ZELFFBQWhDLEVBQTBDO0FBQ3hDLE1BQUl1RCxLQUFLMUQsTUFBTCxLQUFnQixDQUFoQixJQUFxQixDQUFDZ0YsT0FBT0MsS0FBUCxDQUFhdkIsSUFBYixDQUExQixFQUE4QztBQUM1Q3ZELGFBQVM7QUFDUEMsYUFBTyxNQURBO0FBRVBSLGFBQU84RDtBQUZBLEtBQVQ7QUFJRCxHQUxELE1BS08sSUFBSUEsU0FBUyxFQUFiLEVBQWlCO0FBQ3RCdkQsYUFBUztBQUNQQyxhQUFPLE1BREE7QUFFUFIsYUFBTztBQUZBLEtBQVQ7QUFJRDtBQUNGOztBQUVELElBQU1zRixTQUFTLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRCxFQUFXO0FBQUEsTUFFdEJ6RSxNQUZzQixHQU1wQnlFLEtBTm9CLENBRXRCekUsTUFGc0I7QUFBQSxNQUd0QlAsUUFIc0IsR0FNcEJnRixLQU5vQixDQUd0QmhGLFFBSHNCO0FBQUEsTUFJdEJaLEtBSnNCLEdBTXBCNEYsS0FOb0IsQ0FJdEI1RixLQUpzQjtBQUFBLE1BS3RCNkYsSUFMc0IsR0FNcEJELEtBTm9CLENBS3RCQyxJQUxzQjs7O0FBUXhCLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsTUFBTUMsZ0JBQWdCOUYsTUFBTWdGLE1BQU4sQ0FBYUMsS0FBYixDQUFtQixHQUFuQixFQUF3QixDQUF4QixNQUErQixNQUEvQixHQUNsQixNQURrQixHQUVsQixJQUZKOztBQUlBLE1BQU1jLGNBQWNDLDBCQUFhN0MsR0FBYixDQUFpQixVQUFDOEMsSUFBRCxFQUFVO0FBQzdDLFFBQU1DLE1BQU1ELEtBQUtyRCxJQUFMLENBQVV1RCxPQUFWLENBQWtCLElBQWxCLEVBQXdCLEdBQXhCLEVBQTZCQyxpQkFBN0IsRUFBWjtBQUNBLFdBQ0U7QUFBQTtBQUFBLFFBQVEsS0FBS0YsR0FBYixFQUFrQixPQUFVQSxHQUFWLFNBQWlCRCxLQUFLNUYsS0FBeEM7QUFDRzRGLFdBQUtyRDtBQURSLEtBREY7QUFLRCxHQVBtQixDQUFwQjs7QUFTQSxNQUFNeUQsZUFBZWxGLE9BQU9nQyxHQUFQLENBQVc7QUFBQSxXQUM5QjtBQUFBO0FBQUEsUUFBUSxLQUFLbUQsRUFBRTFJLEVBQWYsRUFBbUIsT0FBTzBJLEVBQUUxSSxFQUE1QixFQUFnQyxXQUFXb0MsTUFBTXVHLFVBQU4sQ0FBaUJsQixPQUFqQixNQUE0QmlCLEVBQUUxSSxFQUE5QixNQUF3QyxDQUFDLENBQXpDLEdBQTZDLEVBQTdDLEdBQWtELFVBQTdGO0FBQ0cwSSxRQUFFMUQ7QUFETCxLQUQ4QjtBQUFBLEdBQVgsQ0FBckI7O0FBTUEsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLDhEQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSwrQkFBZjtBQUNFO0FBQ0UsY0FBSyxNQURQO0FBRUUscUJBQVksUUFGZDtBQUdFLG1CQUFVLDJCQUhaO0FBSUUsZUFBTzVDLE1BQU13RyxVQUpmO0FBS0Usa0JBQVU7QUFBQSxpQkFBVTVGLFNBQVMsRUFBRUMsT0FBTyxZQUFULEVBQXVCUixPQUFPb0csT0FBT0MsTUFBUCxDQUFjckcsS0FBNUMsRUFBVCxDQUFWO0FBQUE7QUFMWjtBQURGLEtBREY7QUFVRTtBQUFBO0FBQUEsUUFBSyxXQUFVLCtCQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsZ0JBQUssT0FEUDtBQUVFLHFCQUFVLDJCQUZaO0FBR0Usb0JBQVU7QUFBQSxtQkFBVU8sU0FBUyxFQUFFQyxPQUFPLFlBQVQsRUFBdUJSLE9BQU82RSxXQUFXdUIsT0FBT0MsTUFBUCxDQUFjckcsS0FBekIsRUFBZ0NMLE1BQU11RyxVQUF0QyxDQUE5QixFQUFULENBQVY7QUFBQTtBQUhaO0FBS0U7QUFBQTtBQUFBLFlBQVEsT0FBTSxFQUFkO0FBQUE7QUFBQSxTQUxGO0FBTUdGO0FBTkg7QUFERixLQVZGO0FBb0JFO0FBQUE7QUFBQSxRQUFLLFdBQVUsK0JBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSxrQkFBSyxRQURQO0FBRUUsdUJBQVUsMkJBRlo7QUFHRSxnQkFBRyxrQkFITDtBQUlFLDBCQUFXLGNBSmI7QUFLRSxtQkFBT3JHLE1BQU1nRixNQUxmO0FBTUUsc0JBQVU7QUFBQSxxQkFBVXBFLFNBQVMsRUFBRUMsT0FBTyxRQUFULEVBQW1CUixPQUFPb0csT0FBT0MsTUFBUCxDQUFjckcsS0FBeEMsRUFBVCxDQUFWO0FBQUE7QUFOWjtBQVFFO0FBQUE7QUFBQSxjQUFRLE9BQU0sRUFBZDtBQUFBO0FBQUEsV0FSRjtBQVNHMEY7QUFUSCxTQURGO0FBWUU7QUFBQTtBQUFBLFlBQUssV0FBVSxvQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUNFLG9CQUFLLFFBRFA7QUFFRSx5QkFBVSwrQ0FGWjtBQUdFLHVCQUFTO0FBQUEsdUJBQU1uRixTQUFTbUUsZ0JBQWdCL0UsTUFBTWdGLE1BQXRCLENBQVQsQ0FBTjtBQUFBO0FBSFg7QUFLRSwwQ0FBQyxpQ0FBRCxJQUFpQix1QkFBcUJjLGFBQXRDO0FBTEY7QUFERjtBQVpGO0FBREYsS0FwQkY7QUE0Q0U7QUFBQTtBQUFBLFFBQUssV0FBVSwrQkFBZjtBQUNFO0FBQ0UsY0FBSyxNQURQO0FBRUUscUJBQVksTUFGZDtBQUdFLG1CQUFVLDJCQUhaO0FBSUUsa0JBQVU7QUFBQSxpQkFBVU4saUJBQWlCaUIsT0FBT0MsTUFBUCxDQUFjckcsS0FBL0IsRUFBc0NPLFFBQXRDLENBQVY7QUFBQTtBQUpaO0FBREY7QUE1Q0YsR0FERjtBQXVERCxDQXRGRDs7QUF3RkErRSxPQUFPaEMsWUFBUCxHQUFzQjtBQUNwQmtDLFFBQU07QUFEYyxDQUF0Qjs7QUFJQUYsT0FBT25KLFNBQVAsR0FBbUI7QUFDakIyRSxVQUFRMUUsb0JBQVU0RyxPQUFWLENBQWtCc0Qsc0JBQWxCLEVBQThCL0osVUFEckI7QUFFakJvRCxTQUFPNEcsd0JBQVloSyxVQUZGO0FBR2pCZ0UsWUFBVW5FLG9CQUFVb0ssSUFBVixDQUFlakssVUFIUjtBQUlqQmlKLFFBQU1wSixvQkFBVXFLO0FBSkMsQ0FBbkI7O2tCQU9lbkIsTTs7Ozs7Ozs7Ozs7QUM1SWYsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNb0IsU0FBUyxTQUFUQSxNQUFTO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBUSxXQUFVLFFBQWxCO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FGRjtBQU9FO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FQRjtBQVFFO0FBQUE7QUFBQSxjQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsbUNBQWhDO0FBQUE7QUFBQTtBQURGLGFBREY7QUFNRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLG1DQUFoQztBQUFBO0FBQUE7QUFERixhQU5GO0FBV0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxrQkFBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxtQ0FBaEM7QUFBQTtBQUFBO0FBREY7QUFYRjtBQVJGLFNBREY7QUEyQkU7QUFBQTtBQUFBLFlBQUssV0FBVSwyQkFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFJLFdBQVUsZUFBZDtBQUNFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLE9BQWQ7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsV0FBZDtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBREYsYUFERjtBQU9FO0FBQUE7QUFBQSxnQkFBSSxXQUFVLFlBQWQ7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsV0FBZDtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBREYsYUFQRjtBQWFFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLE9BQWQ7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLG9CQUFJLFdBQVUsV0FBZDtBQUFBO0FBQUEsaUJBREY7QUFBQTtBQUFBO0FBREY7QUFiRjtBQUZGLFNBM0JGO0FBa0RFO0FBQUE7QUFBQSxZQUFLLFdBQVUsMkJBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRkY7QUFHRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBSEY7QUFJRTtBQUFBO0FBQUEsY0FBSSxXQUFVLE1BQWQ7QUFBQTtBQUFBLFdBSkY7QUFLRTtBQUFBO0FBQUEsY0FBSSxXQUFVLDZCQUFkO0FBQ0U7QUFBQTtBQUFBLGdCQUFJLFdBQVUsaUJBQWQ7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUksV0FBVSxpQkFBZDtBQUFBO0FBQUEsYUFGRjtBQUdFO0FBQUE7QUFBQSxnQkFBSSxXQUFVLGlCQUFkO0FBQUE7QUFBQTtBQUhGO0FBTEY7QUFsREYsT0FERjtBQStERTtBQUFBO0FBQUEsVUFBSyxXQUFVLHdDQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBL0RGO0FBREYsR0FEYTtBQUFBLENBQWY7O2tCQXdFZUEsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVmOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxPQUFPLFNBQVBBLElBQU8sT0FBcUI7QUFBQSxNQUFsQkMsSUFBa0IsUUFBbEJBLElBQWtCO0FBQUEsTUFBWkMsS0FBWSxRQUFaQSxLQUFZOztBQUNoQyxNQUFNQyxZQUFZRCxNQUFNL0QsR0FBTixDQUFVO0FBQUEsV0FDMUI7QUFBQTtBQUFBLFFBQUksV0FBVSxVQUFkO0FBQ0U7QUFBQyw0QkFBRDtBQUFBO0FBQ0Usb0NBQXVCaUUsRUFBRUgsSUFBRixLQUFXQSxJQUFYLEdBQWtCLFFBQWxCLEdBQTZCLEVBQXBELENBREY7QUFFRSxjQUFJRyxFQUFFSCxJQUZSO0FBR0UsZUFBS0csRUFBRUg7QUFIVDtBQUtFLHNDQUFDLGlDQUFELElBQWlCLE1BQU1HLEVBQUVDLElBQXpCLEdBTEY7QUFNRTtBQUFBO0FBQUEsWUFBTSxXQUFVLE1BQWhCO0FBQXdCRCxZQUFFeEU7QUFBMUI7QUFORjtBQURGLEtBRDBCO0FBQUEsR0FBVixDQUFsQjs7QUFhQSxTQUNFO0FBQUE7QUFBQSxNQUFJLFdBQVUscUNBQWQ7QUFDR3VFO0FBREgsR0FERjtBQUtELENBbkJEOztrQkFxQmVILEk7Ozs7Ozs7Ozs7O0FDekJmLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNTSxRQUFRLFNBQVJBLEtBQVEsQ0FBQzFCLEtBQUQsRUFBVztBQUFBLE1BRXJCMkIsS0FGcUIsR0FPbkIzQixLQVBtQixDQUVyQjJCLEtBRnFCO0FBQUEsTUFHckJDLE1BSHFCLEdBT25CNUIsS0FQbUIsQ0FHckI0QixNQUhxQjtBQUFBLE1BSXJCQyxNQUpxQixHQU9uQjdCLEtBUG1CLENBSXJCNkIsTUFKcUI7QUFBQSxNQUtyQkMsUUFMcUIsR0FPbkI5QixLQVBtQixDQUtyQjhCLFFBTHFCO0FBQUEsTUFNckI3QixJQU5xQixHQU9uQkQsS0FQbUIsQ0FNckJDLElBTnFCOzs7QUFTdkIsTUFBTThCLFlBQVk5QixPQUFPLGNBQVAsR0FBd0IsRUFBMUM7O0FBRUEsU0FDRTtBQUFBO0FBQUEsTUFBSywyQkFBeUI4QixTQUE5QixFQUEyQyxVQUFTLElBQXBELEVBQXlELE1BQUssUUFBOUQsRUFBdUUsZUFBWSxNQUFuRixFQUEwRixxQkFBMUY7QUFDRTtBQUFBO0FBQUEsUUFBSyxXQUFVLHNDQUFmLEVBQXNELE1BQUssUUFBM0Q7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLGVBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLGNBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSSxXQUFVLGFBQWQ7QUFBNkJKO0FBQTdCLFdBREY7QUFFRTtBQUFBO0FBQUEsY0FBUSxNQUFLLFFBQWIsRUFBc0IsV0FBVSxPQUFoQyxFQUF3QyxnQkFBYSxPQUFyRCxFQUE2RCxjQUFXLE9BQXhFLEVBQWdGLFNBQVNDLE1BQXpGO0FBQ0U7QUFBQTtBQUFBLGdCQUFNLGVBQVksTUFBbEI7QUFBQTtBQUFBO0FBREY7QUFGRixTQURGO0FBT0U7QUFBQTtBQUFBLFlBQUssV0FBVSxZQUFmO0FBQ0dFO0FBREgsU0FQRjtBQVVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsY0FBZjtBQUNFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLG1CQUFoQyxFQUFvRCxnQkFBYSxPQUFqRSxFQUF5RSxTQUFTRixNQUFsRjtBQUFBO0FBQUEsV0FERjtBQUVFO0FBQUE7QUFBQSxjQUFRLE1BQUssUUFBYixFQUFzQixXQUFVLGlCQUFoQyxFQUFrRCxTQUFTQyxNQUEzRDtBQUFBO0FBQUE7QUFGRjtBQVZGO0FBREY7QUFERixHQURGO0FBcUJELENBaENEOztBQWtDQUgsTUFBTTNELFlBQU4sR0FBcUI7QUFDbkJrQyxRQUFNO0FBRGEsQ0FBckI7O0FBSUF5QixNQUFNOUssU0FBTixHQUFrQjtBQUNoQitLLFNBQU85SyxvQkFBVW1MLE1BQVYsQ0FBaUJoTCxVQURSO0FBRWhCNEssVUFBUS9LLG9CQUFVb0ssSUFBVixDQUFlakssVUFGUDtBQUdoQjZLLFVBQVFoTCxvQkFBVW9LLElBQVYsQ0FBZWpLLFVBSFA7QUFJaEI4SyxZQUFVakwsb0JBQVVDLFVBQVYsQ0FBcUJDLE1BQXJCLEVBQTZCQyxVQUp2QjtBQUtoQmlKLFFBQU1wSixvQkFBVXFLO0FBTEEsQ0FBbEI7O2tCQVFlUSxLOzs7Ozs7Ozs7OztBQ25EZix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNTyxZQUFZLFNBQVpBLFNBQVksQ0FBQ2pDLEtBQUQsRUFBVztBQUFBLE1BRXpCaEksRUFGeUIsR0FPdkJnSSxLQVB1QixDQUV6QmhJLEVBRnlCO0FBQUEsTUFHekIySixLQUh5QixHQU92QjNCLEtBUHVCLENBR3pCMkIsS0FIeUI7QUFBQSxNQUl6Qk8sS0FKeUIsR0FPdkJsQyxLQVB1QixDQUl6QmtDLEtBSnlCO0FBQUEsTUFLekJDLElBTHlCLEdBT3ZCbkMsS0FQdUIsQ0FLekJtQyxJQUx5QjtBQUFBLE1BTXpCQyxJQU55QixHQU92QnBDLEtBUHVCLENBTXpCb0MsSUFOeUI7OztBQVMzQixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsaUdBQWY7QUFDRTtBQUFDLDBCQUFEO0FBQUEsUUFBTSxlQUFhQSxJQUFiLFNBQXFCcEssRUFBM0IsRUFBaUMsV0FBVSxPQUEzQztBQUNFO0FBQUE7QUFBQSxVQUFNLFdBQVUsK0NBQWhCO0FBQ0dtSztBQURILE9BREY7QUFJRSxvQ0FBQyxnQkFBRCxJQUFRLEtBQUtELEtBQWIsRUFBb0IsS0FBS1AsS0FBekI7QUFKRjtBQURGLEdBREY7QUFVRCxDQW5CRDs7QUFxQkFNLFVBQVVyTCxTQUFWLEdBQXNCO0FBQ3BCb0IsTUFBSW5CLG9CQUFVd0wsTUFBVixDQUFpQnJMLFVBREQ7QUFFcEIySyxTQUFPOUssb0JBQVVtTCxNQUFWLENBQWlCaEwsVUFGSjtBQUdwQmtMLFNBQU9yTCxvQkFBVW1MLE1BQVYsQ0FBaUJoTCxVQUhKO0FBSXBCbUwsUUFBTXRMLG9CQUFVd0wsTUFBVixDQUFpQnJMLFVBSkg7QUFLcEJvTCxRQUFNdkwsb0JBQVVtTCxNQUFWLENBQWlCaEw7QUFMSCxDQUF0Qjs7a0JBUWVpTCxTOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwQ2Y7Ozs7QUFDQTs7OztBQUVBOztBQUNBOzs7Ozs7QUFFQSxJQUFNSyxZQUFZLFNBQVpBLFNBQVksT0FBZ0I7QUFBQSxNQUFiMUksTUFBYSxRQUFiQSxNQUFhOztBQUNoQyxNQUFNMkMsT0FBTzNDLE9BQU8yRCxHQUFQLENBQVc7QUFBQSxXQUN0QjtBQUFBO0FBQUEsUUFBSyxLQUFLYyxNQUFNckcsRUFBaEIsRUFBb0IsV0FBVSxzRUFBOUI7QUFDRSxvQ0FBQyxtQkFBRDtBQUNFLFlBQUlxRyxNQUFNckcsRUFEWjtBQUVFLGVBQU9xRyxNQUFNa0UsTUFGZjtBQUdFLGVBQU9sRSxNQUFNc0QsS0FIZjtBQUlFLGNBQU10RCxNQUFNbUUsV0FKZDtBQUtFLGNBQU1uRSxNQUFNK0Q7QUFMZDtBQURGLEtBRHNCO0FBQUEsR0FBWCxDQUFiOztBQVlBLFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxLQUFmO0FBQ0c3RjtBQURILEdBREY7QUFLRCxDQWxCRDs7QUFvQkErRixVQUFVMUwsU0FBVixHQUFzQjtBQUNwQmdELFVBQVEvQyxvQkFBVTRHLE9BQVYsQ0FBa0J5QixzQkFBbEIsRUFBOEJsSTtBQURsQixDQUF0Qjs7a0JBSWVzTCxTOzs7Ozs7Ozs7OztBQzlCZix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBOztBQUNBOzs7O0FBRUEsSUFBTUcsU0FBUyxTQUFUQSxNQUFTLENBQUN6QyxLQUFELEVBQVc7QUFBQSxNQUV0QjNJLElBRnNCLEdBS3BCMkksS0FMb0IsQ0FFdEIzSSxJQUZzQjtBQUFBLE1BR3RCcUwsVUFIc0IsR0FLcEIxQyxLQUxvQixDQUd0QjBDLFVBSHNCO0FBQUEsTUFJdEJDLFFBSnNCLEdBS3BCM0MsS0FMb0IsQ0FJdEIyQyxRQUpzQjs7O0FBT3hCLE1BQU1DLGNBQWNGLGFBQ2xCO0FBQUMsbUJBQUQ7QUFBQTtBQUNFO0FBQUE7QUFBQSxRQUFJLFdBQVUsV0FBZDtBQUNFO0FBQUMsNEJBQUQ7QUFBQSxVQUFNLFdBQVUsVUFBaEIsRUFBMkIsSUFBRyxrQkFBOUIsRUFBaUQsT0FBTSxTQUF2RDtBQUNFO0FBQUE7QUFBQSxZQUFNLFdBQVUsTUFBaEI7QUFBd0JyTCxlQUFLd0w7QUFBN0IsU0FERjtBQUVFLHNDQUFDLGlDQUFELElBQWlCLE1BQUssTUFBdEI7QUFGRjtBQURGLEtBREY7QUFPRTtBQUFBO0FBQUEsUUFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFBO0FBQUEsVUFBRyxXQUFVLFVBQWIsRUFBd0IsTUFBSyxTQUE3QixFQUF1QyxPQUFNLFFBQTdDO0FBQ0Usc0NBQUMsaUNBQUQsSUFBaUIsTUFBSyxjQUF0QjtBQURGO0FBREY7QUFQRixHQURrQixHQWVsQjtBQUFBO0FBQUEsTUFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFDLDBCQUFEO0FBQUEsUUFBTSxJQUFHLE9BQVQsRUFBaUIsV0FBVSxVQUEzQjtBQUFBO0FBQUE7QUFERixHQWZGOztBQW9CQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsNkNBQWY7QUFDRTtBQUFDLDBCQUFEO0FBQUEsUUFBTSxXQUFVLGNBQWhCLEVBQStCLElBQUcsR0FBbEM7QUFDRTtBQUNFLGFBQVF6RyxPQUFPMEIsR0FBZixxQkFERjtBQUVFLGFBQUksUUFGTjtBQUdFLGdCQUFPLElBSFQ7QUFJRSxtQkFBVTtBQUpaO0FBREYsS0FERjtBQVVFO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFVLGdCQURaO0FBRUUsZ0JBQUssUUFGUDtBQUdFLGNBQUc7QUFITDtBQUtFLHNDQUFDLGlDQUFELElBQWlCLE1BQUssUUFBdEI7QUFMRixPQURGO0FBUUU7QUFBQTtBQUFBO0FBQ0UscUJBQVUsZ0JBRFo7QUFFRSxnQkFBSyxRQUZQO0FBR0UseUJBQVksVUFIZDtBQUlFLHlCQUFZLHlCQUpkO0FBS0UsMkJBQWMsd0JBTGhCO0FBTUUsMkJBQWMsT0FOaEI7QUFPRSx3QkFBVztBQVBiO0FBU0UsZ0RBQU0sV0FBVSxxQkFBaEI7QUFURjtBQVJGLEtBVkY7QUErQkU7QUFBQTtBQUFBLFFBQUssV0FBVSwwQkFBZixFQUEwQyxJQUFHLHdCQUE3QztBQUNFO0FBQUE7QUFBQSxVQUFJLFdBQVUsb0JBQWQ7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFVLFVBQWQ7QUFDRTtBQUFDLGdDQUFEO0FBQUE7QUFDRSx3Q0FBdUI2RSxhQUFhLGNBQWIsR0FBOEIsUUFBOUIsR0FBeUMsRUFBaEUsQ0FERjtBQUVFLGtCQUFHO0FBRkw7QUFBQTtBQUFBO0FBREYsU0FERjtBQVNFO0FBQUE7QUFBQSxZQUFJLFdBQVUsVUFBZDtBQUNFO0FBQUMsZ0NBQUQ7QUFBQTtBQUNFLHdDQUF1QkEsYUFBYSxjQUFiLEdBQThCLFFBQTlCLEdBQXlDLEVBQWhFLENBREY7QUFFRSxrQkFBRztBQUZMO0FBQUE7QUFBQTtBQURGO0FBVEYsT0FERjtBQW1CRTtBQUFBO0FBQUEsVUFBSSxXQUFVLG9CQUFkO0FBQ0dDO0FBREg7QUFuQkY7QUEvQkYsR0FERjtBQXlERCxDQXBGRDs7QUFzRkFILE9BQU8xRSxZQUFQLEdBQXNCO0FBQ3BCMkUsY0FBWSxLQURRO0FBRXBCckwsUUFBTSxFQUZjO0FBR3BCc0wsWUFBVTtBQUhVLENBQXRCOztBQU1BRixPQUFPN0wsU0FBUCxHQUFtQjtBQUNqQjhMLGNBQVk3TCxvQkFBVXFLLElBREw7QUFFakI3SixRQUFNeUwscUJBRlc7QUFHakJILFlBQVU5TCxvQkFBVW1MO0FBSEgsQ0FBbkI7O2tCQU1lUyxNOzs7Ozs7Ozs7OztBQzFHZix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7QUFFQTs7OztBQUVBLElBQU05TCxXQUFXLFNBQVhBLFFBQVc7QUFBQSxTQUNmO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0JBQWY7QUFDRSwyQ0FBSyxLQUFReUYsT0FBTzBCLEdBQWYsb0JBQUwsRUFBMEMsS0FBSSxLQUE5QyxHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUZGO0FBR0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUhGO0FBSUU7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUpGO0FBT0U7QUFBQTtBQUFBLFFBQUcsTUFBSyxHQUFSLEVBQVksV0FBVSxtQkFBdEI7QUFBQTtBQUFBO0FBUEYsR0FEZTtBQUFBLENBQWpCOztrQkFZZW5ILFE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCZjs7OztBQUNBOzs7O0FBRUE7Ozs7OztBQUVBLElBQU1vTSxjQUFjLFNBQWRBLFdBQWMsT0FBYztBQUFBLE1BQVg5QyxJQUFXLFFBQVhBLElBQVc7O0FBQ2hDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLDRHQUFmO0FBQ0Usa0NBQUMsaUJBQUQsSUFBUyxVQUFULEVBQWMsTUFBSyxJQUFuQixFQUF3QixlQUFjLE1BQXRDLEdBREY7QUFBQTtBQUFBLEdBREY7QUFNRCxDQVhEOztBQWFBOEMsWUFBWW5NLFNBQVosR0FBd0I7QUFDdEJxSixRQUFNcEosb0JBQVVxSyxJQUFWLENBQWVsSztBQURDLENBQXhCOztrQkFJZStMLFc7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCZjs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFFQSxJQUFNQyxlQUFjLFNBQWRBLFlBQWMsQ0FBQ0MsV0FBRCxFQUFjbkosSUFBZCxFQUF1QjtBQUN6QyxNQUFJMEMsU0FBUyxDQUFiOztBQUVBLE1BQUkxQyxTQUFTLE1BQWIsRUFBcUI7QUFDbkIsUUFBTW9KLFVBQVdELGNBQWMsQ0FBL0I7O0FBRUF6RyxhQUFTMEcsWUFBWSxDQUFaLEdBQWdCLENBQWhCLEdBQW9CQSxPQUE3QjtBQUNELEdBSkQsTUFJTztBQUNMMUcsYUFBVXlHLGNBQWMsQ0FBeEI7QUFDRDs7QUFFRCxTQUFPLEVBQUVuSixNQUFNMEMsTUFBUixFQUFQO0FBQ0QsQ0FaRDs7QUFjQSxJQUFNMkcsc0JBQXNCLFNBQXRCQSxtQkFBc0IsQ0FBQ0MsT0FBRCxFQUFhO0FBQUEsTUFFckN0SixJQUZxQyxHQU1uQ3NKLE9BTm1DLENBRXJDdEosSUFGcUM7QUFBQSxNQUdyQ21DLEtBSHFDLEdBTW5DbUgsT0FObUMsQ0FHckNuSCxLQUhxQztBQUFBLE1BSXJDaEMsS0FKcUMsR0FNbkNtSixPQU5tQyxDQUlyQ25KLEtBSnFDO0FBQUEsTUFLckNvSixXQUxxQyxHQU1uQ0QsT0FObUMsQ0FLckNDLFdBTHFDOztBQU92QyxNQUFNQyxjQUFjLEVBQXBCO0FBQ0EsTUFBTUMsWUFBWUMsS0FBS0MsSUFBTCxDQUFVeEosUUFBUWdDLEtBQWxCLENBQWxCO0FBQ0EsTUFBTXlILEtBQUtGLEtBQUtDLElBQUwsQ0FBVUosY0FBYyxDQUF4QixDQUFYOztBQUVBLE9BQUssSUFBSTdJLElBQUtWLFFBQVE0SixLQUFLLENBQWIsQ0FBZCxFQUFnQ2xKLElBQUtWLE9BQU80SixFQUE1QyxFQUFpRGxKLEtBQUssQ0FBdEQsRUFBeUQ7QUFDdkQsUUFBSUEsSUFBSSxDQUFKLElBQVNBLEtBQUsrSSxTQUFsQixFQUE2QjtBQUMzQkQsa0JBQVk1RCxJQUFaLENBQWlCbEYsQ0FBakI7QUFDRDtBQUNGOztBQUVELFNBQU84SSxXQUFQO0FBQ0QsQ0FsQkQ7O0FBcUJBLElBQU1LLGFBQWEsU0FBYkEsVUFBYSxPQUFpQjtBQUFBLE1BQWRQLE9BQWMsUUFBZEEsT0FBYztBQUFBLE1BQzFCdEosSUFEMEIsR0FDTHNKLE9BREssQ0FDMUJ0SixJQUQwQjtBQUFBLE1BQ3BCOEosVUFEb0IsR0FDTFIsT0FESyxDQUNwQlEsVUFEb0I7OztBQUdsQyxNQUFNTixjQUFjSCxvQkFBb0JDLE9BQXBCLENBQXBCOztBQUVBLE1BQUlFLFlBQVl6SSxNQUFaLEdBQXFCLENBQXpCLEVBQTRCO0FBQzFCLFdBQU8sMkNBQVA7QUFDRDs7QUFFRCxNQUFNZ0osY0FBY1AsWUFBWS9GLEdBQVosQ0FBZ0I7QUFBQSxXQUNsQztBQUFBO0FBQUEsUUFBSSw0QkFBeUJ1RyxPQUFPaEssSUFBUCxHQUFjLFFBQWQsR0FBeUIsRUFBbEQsQ0FBSjtBQUNFO0FBQUE7QUFBQTtBQUNFLHFCQUFVLFdBRFo7QUFFRSxtQkFBUztBQUFBLG1CQUFNOEosV0FBV0UsRUFBWCxDQUFOO0FBQUE7QUFGWDtBQUlHQTtBQUpIO0FBREYsS0FEa0M7QUFBQSxHQUFoQixDQUFwQjs7QUFXQSxTQUNFO0FBQUE7QUFBQSxNQUFLLGNBQVcsWUFBaEI7QUFDRTtBQUFBO0FBQUEsUUFBSSxXQUFVLFlBQWQ7QUFDRTtBQUFBO0FBQUEsVUFBSSxXQUFVLFdBQWQ7QUFDRTtBQUFBO0FBQUE7QUFDRSx1QkFBVSxXQURaO0FBRUUscUJBQVM7QUFBQSxxQkFBTUYsV0FBV1osYUFBWWxKLElBQVosRUFBa0IsTUFBbEIsQ0FBWCxDQUFOO0FBQUE7QUFGWDtBQUlFLHdDQUFDLGlDQUFELElBQWlCLE1BQUssWUFBdEI7QUFKRjtBQURGLE9BREY7QUFTRytKLGlCQVRIO0FBVUU7QUFBQTtBQUFBLFVBQUksV0FBVSxXQUFkO0FBQ0U7QUFBQTtBQUFBO0FBQ0UsdUJBQVUsV0FEWjtBQUVFLHlCQUFhO0FBQUEscUJBQU1ELFdBQVdaLGFBQVlsSixJQUFaLEVBQWtCLE1BQWxCLENBQVgsQ0FBTjtBQUFBO0FBRmY7QUFJRSx3Q0FBQyxpQ0FBRCxJQUFpQixNQUFLLGFBQXRCO0FBSkY7QUFERjtBQVZGO0FBREYsR0FERjtBQXVCRCxDQTNDRDs7QUE2Q0E2SixXQUFXNUYsWUFBWCxHQUEwQjtBQUN4QnFGLFdBQVM7QUFDUEMsaUJBQWEsQ0FETjtBQUVQcEosV0FBTyxDQUZBO0FBR1BILFVBQU0sQ0FIQztBQUlQbUMsV0FBTztBQUpBO0FBRGUsQ0FBMUI7O0FBU0EwSCxXQUFXL00sU0FBWCxHQUF1QjtBQUNyQndNLFdBQVN2TSxvQkFBVWtOLEtBQVYsQ0FBZ0I7QUFDdkI5SixXQUFPcEQsb0JBQVV3TCxNQURNO0FBRXZCcEcsV0FBT3BGLG9CQUFVd0wsTUFGTTtBQUd2QnZJLFVBQU1qRCxvQkFBVXdMLE1BSE87QUFJdkJ1QixnQkFBWS9NLG9CQUFVb0ssSUFKQztBQUt2Qm9DLGlCQUFheE0sb0JBQVV3TDtBQUxBLEdBQWhCO0FBRFksQ0FBdkI7O2tCQVVlc0IsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkdmOzs7O0FBQ0E7Ozs7OztBQUVBLFNBQVNLLFdBQVQsR0FBdUIsQ0FFdEI7O0FBRUQsU0FBU0MsWUFBVCxHQUF3QjtBQUN0QixPQUFLQyxHQUFMLEdBQVc5SCxPQUFPK0gscUJBQWxCO0FBQ0Q7O0FBRUQsSUFBTUMsU0FBUyxTQUFUQSxNQUFTO0FBQUEsTUFBR0YsR0FBSCxRQUFHQSxHQUFIO0FBQUEsTUFBUUcsR0FBUixRQUFRQSxHQUFSO0FBQUEsU0FDYjtBQUFBO0FBQUEsTUFBSyxXQUFVLDhEQUFmO0FBQ0U7QUFDRSxpQkFBVSxXQURaO0FBRUUsZ0JBQVFILEdBRlY7QUFHRSxjQUFRRixXQUhWO0FBSUUsZUFBU0MsWUFKWDtBQUtFLFdBQUtJO0FBTFA7QUFERixHQURhO0FBQUEsQ0FBZjs7QUFZQUQsT0FBT3hOLFNBQVAsR0FBbUI7QUFDakJzTixPQUFLck4sb0JBQVVtTCxNQUFWLENBQWlCaEwsVUFETDtBQUVqQnFOLE9BQUt4TixvQkFBVW1MLE1BQVYsQ0FBaUJoTDtBQUZMLENBQW5COztrQkFLZW9OLE07Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RCU0UsZ0I7O0FBTnhCOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFZSxTQUFTQSxnQkFBVCxDQUEwQnRFLEtBQTFCLEVBQWlDO0FBQUEsTUFDdEM4QixRQURzQyxHQUNBOUIsS0FEQSxDQUN0QzhCLFFBRHNDO0FBQUEsTUFDNUJULElBRDRCLEdBQ0FyQixLQURBLENBQzVCcUIsSUFENEI7QUFBQSxNQUN0QnJJLFdBRHNCLEdBQ0FnSCxLQURBLENBQ3RCaEgsV0FEc0I7QUFBQSxNQUNUM0IsSUFEUyxHQUNBMkksS0FEQSxDQUNUM0ksSUFEUzs7O0FBRzlDLE1BQUkyQixXQUFKLEVBQWlCO0FBQ2YsV0FBTyw4QkFBQyxxQkFBRCxJQUFhLFVBQWIsR0FBUDtBQUNEOztBQUVELFNBQ0U7QUFBQTtBQUFBLE1BQUssV0FBVSxXQUFmO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVSxLQUFmO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVSxtQ0FBZjtBQUNFO0FBQUE7QUFBQSxZQUFLLFdBQVUsbUJBQWY7QUFDRTtBQUFBO0FBQUE7QUFDRSxvQkFBSyxRQURQO0FBRUUseUJBQVU7QUFGWjtBQUlFO0FBQ0UsbUJBQUszQixLQUFLa04sTUFBTCxJQUFrQm5JLE9BQU8wQixHQUF6Qix3Q0FEUDtBQUVFLHlCQUFVLHdDQUZaO0FBR0UsbUJBQUksUUFITjtBQUlFLGtCQUFHO0FBSkw7QUFKRjtBQURGO0FBREY7QUFERixLQURGO0FBa0JFO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVUsbUNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQSxnQkFBU3pHLEtBQUt3TDtBQUFkO0FBREY7QUFERixLQWxCRjtBQXVCRSxrQ0FBQyxjQUFELElBQU0sT0FBTzJCLHFCQUFiLEVBQTBCLE1BQU1uRCxJQUFoQyxHQXZCRjtBQXdCRTtBQUFBO0FBQUEsUUFBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLEtBQWY7QUFDR1M7QUFESDtBQURGO0FBeEJGLEdBREY7QUFnQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NEOzs7O0FBQ0E7Ozs7OztBQUVBLElBQU0yQyxjQUFjLFNBQWRBLFdBQWMsQ0FBQ3pFLEtBQUQsRUFBVztBQUFBLE1BQ3JCQyxJQURxQixHQUNKRCxLQURJLENBQ3JCQyxJQURxQjtBQUFBLE1BQ2Z5RSxNQURlLEdBQ0oxRSxLQURJLENBQ2YwRSxNQURlOzs7QUFHN0IsTUFBSSxDQUFDekUsSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBSyxXQUFVLFVBQWYsRUFBMEIsT0FBTyxFQUFFeUUsUUFBV0EsTUFBWCxPQUFGLEVBQWpDO0FBQ0U7QUFDRSxpQkFBVSx5REFEWjtBQUVFLFlBQUssYUFGUDtBQUdFLHVCQUFjLElBSGhCO0FBSUUsdUJBQWMsR0FKaEI7QUFLRSx1QkFBYyxLQUxoQjtBQU1FLGFBQU8sRUFBRUMsT0FBTyxNQUFUO0FBTlQ7QUFERixHQURGO0FBWUQsQ0FuQkQ7O0FBcUJBRixZQUFZMUcsWUFBWixHQUEyQjtBQUN6QmtDLFFBQU0sS0FEbUI7QUFFekJ5RSxVQUFRO0FBRmlCLENBQTNCOztBQUtBRCxZQUFZN04sU0FBWixHQUF3QjtBQUN0QnFKLFFBQU1wSixvQkFBVXFLLElBRE07QUFFdEJ3RCxVQUFRN04sb0JBQVV3TDtBQUZJLENBQXhCOztrQkFLZW9DLFc7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQy9CU0csTzs7QUFIeEI7Ozs7QUFDQTs7Ozs7O0FBRWUsU0FBU0EsT0FBVCxDQUFpQjVFLEtBQWpCLEVBQXdCO0FBQUEsTUFFbkNDLElBRm1DLEdBT2pDRCxLQVBpQyxDQUVuQ0MsSUFGbUM7QUFBQSxNQUduQzRFLElBSG1DLEdBT2pDN0UsS0FQaUMsQ0FHbkM2RSxJQUhtQztBQUFBLE1BSW5DNU0sSUFKbUMsR0FPakMrSCxLQVBpQyxDQUluQy9ILElBSm1DO0FBQUEsTUFLbkM2TSxLQUxtQyxHQU9qQzlFLEtBUGlDLENBS25DOEUsS0FMbUM7QUFBQSxNQU1uQ0MsYUFObUMsR0FPakMvRSxLQVBpQyxDQU1uQytFLGFBTm1DOzs7QUFTckMsTUFBSSxDQUFDOUUsSUFBTCxFQUFXO0FBQ1QsV0FBTyxJQUFQO0FBQ0Q7O0FBRUQsU0FDRTtBQUFBO0FBQUEsTUFBSyx3QkFBc0JoSSxJQUF0QixpQkFBc0NBLElBQXRDLFNBQThDNE0sSUFBOUMsY0FBMkRDLEtBQTNELFNBQW9FQyxhQUF6RSxFQUEwRixNQUFLLFFBQS9GO0FBQ0U7QUFBQTtBQUFBLFFBQU0sV0FBVSxTQUFoQjtBQUFBO0FBQUE7QUFERixHQURGO0FBS0Q7O0FBRURILFFBQVE3RyxZQUFSLEdBQXVCO0FBQ3JCa0MsUUFBTSxLQURlO0FBRXJCNEUsUUFBTSxJQUZlO0FBR3JCNU0sUUFBTSxNQUhlO0FBSXJCNk0sU0FBTyxTQUpjO0FBS3JCQyxpQkFBZTtBQUxNLENBQXZCOztBQVFBSCxRQUFRaE8sU0FBUixHQUFvQjtBQUNsQnFKLFFBQU1wSixvQkFBVXFLLElBREU7QUFFbEI2RCxpQkFBZWxPLG9CQUFVbUwsTUFGUDtBQUdsQjZDLFFBQU1oTyxvQkFBVW1PLEtBQVYsQ0FBZ0IsQ0FDcEIsSUFEb0IsRUFFcEIsSUFGb0IsRUFHcEIsSUFIb0IsRUFJcEIsSUFKb0IsQ0FBaEIsQ0FIWTtBQVNsQi9NLFFBQU1wQixvQkFBVW1PLEtBQVYsQ0FBZ0IsQ0FDcEIsUUFEb0IsRUFFcEIsTUFGb0IsQ0FBaEIsQ0FUWTtBQWFsQkYsU0FBT2pPLG9CQUFVbU8sS0FBVixDQUFnQixDQUNyQixTQURxQixFQUVyQixXQUZxQixFQUdyQixTQUhxQixFQUlyQixRQUpxQixFQUtyQixTQUxxQixFQU1yQixNQU5xQixFQU9yQixPQVBxQixFQVFyQixNQVJxQixDQUFoQjtBQWJXLENBQXBCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTs7OztBQUVBOzs7Ozs7QUFFQSxJQUFNQyxlQUFlLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CLE1BQU1DLGdCQUFnQkQsT0FDbkJFLE1BRG1CLENBQ1o7QUFBQSxXQUFLLENBQUNDLEVBQUVDLE1BQVI7QUFBQSxHQURZLEVBRW5CL0gsR0FGbUIsQ0FFZjtBQUFBLFdBQUs7QUFBQTtBQUFBLFFBQUksT0FBTSxLQUFWO0FBQWlCOEgsUUFBRTFEO0FBQW5CLEtBQUw7QUFBQSxHQUZlLENBQXRCOztBQUlBLFNBQU87QUFBQTtBQUFBO0FBQUt3RDtBQUFMLEdBQVA7QUFDRCxDQU5EOztBQVFBLElBQU1JLGFBQWEsU0FBYkEsVUFBYSxDQUFDM04sSUFBRCxFQUFPc04sTUFBUCxFQUFrQjtBQUNuQyxNQUFNTSxRQUFRLEVBQWQ7O0FBRUE1TixPQUFLMEMsT0FBTCxDQUFhLFVBQUNtTCxJQUFELEVBQVU7QUFDckIsUUFBTUMsYUFBYSxFQUFuQjs7QUFFQVIsV0FBTzVLLE9BQVAsQ0FBZSxVQUFDVyxLQUFELEVBQVc7QUFDeEIsVUFBSUEsTUFBTXFLLE1BQVYsRUFBa0I7QUFDaEIsZUFBTyxJQUFQO0FBQ0Q7O0FBRUQsVUFBTXZLLElBQUkwSyxLQUFLeEssTUFBTStCLElBQVgsQ0FBVjtBQUNBLFVBQU12QyxRQUFRUSxNQUFNMEssTUFBTixHQUNWMUssTUFBTTBLLE1BQU4sQ0FBYTVLLENBQWIsQ0FEVSxHQUVWQSxFQUFFNkssUUFBRixFQUZKOztBQUlBRixpQkFBV2hHLElBQVgsQ0FBZ0I7QUFBQTtBQUFBO0FBQUtqRjtBQUFMLE9BQWhCO0FBQ0QsS0FYRDs7QUFhQStLLFVBQU05RixJQUFOLENBQVc7QUFBQTtBQUFBO0FBQUtnRztBQUFMLEtBQVg7QUFDRCxHQWpCRDs7QUFtQkEsU0FBT0YsS0FBUDtBQUNELENBdkJEOztBQXlCQSxJQUFNSyxtQkFBbUIsU0FBbkJBLGdCQUFtQixDQUFDekMsT0FBRCxFQUFhO0FBQ3BDLE1BQUksQ0FBQ0EsT0FBTCxFQUFjO0FBQ1osV0FBTyxJQUFQO0FBQ0Q7O0FBSG1DLE1BTWxDbkgsS0FOa0MsR0FRaENtSCxPQVJnQyxDQU1sQ25ILEtBTmtDO0FBQUEsTUFPbENoQyxLQVBrQyxHQVFoQ21KLE9BUmdDLENBT2xDbkosS0FQa0M7OztBQVVwQyxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsZ0NBQWY7QUFDRSxrQ0FBQyxvQkFBRCxJQUFZLFNBQVNtSixPQUFyQixHQURGO0FBRUU7QUFBQTtBQUFBO0FBQUEsaUJBQWVuSCxRQUFRaEMsS0FBUixHQUFnQkEsS0FBaEIsR0FBd0JnQyxLQUF2QyxvQkFBMERoQztBQUExRDtBQUZGLEdBREY7QUFNRCxDQWhCRDs7QUFrQkEsSUFBTTZMLFlBQVksU0FBWkEsU0FBWSxDQUFDOUYsS0FBRCxFQUFXO0FBQUEsTUFDbkJwSSxJQURtQixHQUNVb0ksS0FEVixDQUNuQnBJLElBRG1CO0FBQUEsTUFDYnNOLE1BRGEsR0FDVWxGLEtBRFYsQ0FDYmtGLE1BRGE7QUFBQSxNQUNMYSxVQURLLEdBQ1UvRixLQURWLENBQ0wrRixVQURLOzs7QUFHM0IsTUFBSSxDQUFDbk8sSUFBRCxJQUFTQSxLQUFLaUQsTUFBTCxLQUFnQixDQUE3QixFQUFnQztBQUM5QixXQUFPLElBQVA7QUFDRDs7QUFFRCxNQUFNbUwsUUFBUWYsYUFBYUMsTUFBYixDQUFkO0FBQ0EsTUFBTWUsT0FBT1YsV0FBVzNOLElBQVgsRUFBaUJzTixNQUFqQixDQUFiO0FBQ0EsTUFBTWdCLG9CQUFvQkwsaUJBQWlCRSxVQUFqQixDQUExQjs7QUFFQSxTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxRQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSxVQUFPLFdBQVUsd0JBQWpCO0FBQ0U7QUFBQTtBQUFBO0FBQ0dDO0FBREgsU0FERjtBQUlFO0FBQUE7QUFBQTtBQUNHQztBQURIO0FBSkYsT0FERjtBQVNHQztBQVRIO0FBREYsR0FERjtBQWVELENBMUJEOztrQkE0QmVKLFM7Ozs7Ozs7Ozs7O0FDbkZmLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7OztBQUNBOzs7O0FBRUE7Ozs7QUFFQSxJQUFNSyxRQUFRLFNBQVJBLEtBQVE7QUFBQSxNQUFHQyxRQUFILFFBQUdBLFFBQUg7QUFBQSxTQUNaO0FBQUE7QUFBQSxNQUFLLFdBQVUsb0RBQWY7QUFDRTtBQUNFLGlCQUFVLHVCQURaO0FBRUUsYUFBTSxPQUZSO0FBR0UsWUFBSyxXQUhQO0FBSUUsYUFBTSxLQUpSO0FBS0UsY0FBTyxLQUxUO0FBTUUsOENBQXNDQSxRQUF0QywyQkFBb0VoSyxPQUFPQyxNQU43RTtBQU9FLG1CQUFZLEdBUGQ7QUFRRTtBQVJGO0FBREYsR0FEWTtBQUFBLENBQWQ7O0FBZUE4SixNQUFNdlAsU0FBTixHQUFrQjtBQUNoQndQLFlBQVV2UCxvQkFBVW1MLE1BQVYsQ0FBaUJoTDtBQURYLENBQWxCOztrQkFJZW1QLEs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJmO0FBQ08sSUFBTUUsNEJBQVUsU0FBaEI7QUFDQSxJQUFNeE4sc0NBQWUsY0FBckI7QUFDQSxJQUFNUyx3Q0FBZ0IsZUFBdEI7O0FBRVA7QUFDTyxJQUFNUCw0REFBMEIseUJBQWhDO0FBQ0EsSUFBTUksa0RBQXFCLG9CQUEzQjtBQUNBLElBQU1tTiw4QkFBVyxVQUFqQjtBQUNBLElBQU1DLDhCQUFXLFVBQWpCOztBQUVQO0FBQ08sSUFBTUMsa0NBQWEsWUFBbkI7QUFDQSxJQUFNN00sa0NBQWEsWUFBbkI7QUFDQSxJQUFNMkIsa0NBQWEsWUFBbkI7QUFDQSxJQUFNSixnQ0FBWSxXQUFsQjs7QUFFUDtBQUNPLElBQU11TCxnRUFBNEIsMkJBQWxDO0FBQ0EsSUFBTUMsb0NBQWMsYUFBcEI7QUFDQSxJQUFNQyxvQ0FBYyxjQUFwQjtBQUNBLElBQU1DLG9DQUFjLGFBQXBCO0FBQ0EsSUFBTUMsOENBQW1CLGtCQUF6QjtBQUNBLElBQU03SyxnQ0FBWSxXQUFsQjs7QUFFUDtBQUNPLElBQU1ZLDhDQUFtQixrQkFBekI7O0FBRVA7QUFDQTtBQUNPLElBQU16RixrREFBcUIsb0JBQTNCO0FBQ0EsSUFBTXFDLGtEQUFxQixvQkFBM0I7O0FBRVA7QUFDTyxJQUFNNEcsc0NBQWUsQ0FBQztBQUMzQnBELFFBQU0sWUFEcUI7QUFFM0J2QyxTQUFPO0FBRm9CLENBQUQsRUFHekI7QUFDRHVDLFFBQU0sY0FETDtBQUVEdkMsU0FBTztBQUZOLENBSHlCLEVBTXpCO0FBQ0R1QyxRQUFNLFNBREw7QUFFRHZDLFNBQU87QUFGTixDQU55QixFQVN6QjtBQUNEdUMsUUFBTSxzQkFETDtBQUVEdkMsU0FBTztBQUZOLENBVHlCLEVBWXpCO0FBQ0R1QyxRQUFNLGVBREw7QUFFRHZDLFNBQU87QUFGTixDQVp5QixFQWV6QjtBQUNEdUMsUUFBTSxjQURMO0FBRUR2QyxTQUFPO0FBRk4sQ0FmeUIsRUFrQnpCO0FBQ0R1QyxRQUFNLFlBREw7QUFFRHZDLFNBQU87QUFGTixDQWxCeUIsQ0FBckIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQ1AsSUFBTStKLGNBQWMsQ0FDbEI7QUFDRXhILFFBQU0sU0FEUjtBQUVFeUUsUUFBTSxNQUZSO0FBR0VKLFFBQU07QUFIUixDQURrQixFQU1sQjtBQUNFckUsUUFBTSxPQURSO0FBRUV5RSxRQUFNLE1BRlI7QUFHRUosUUFBTTtBQUhSLENBTmtCLENBQXBCOztrQkFzQ2VtRCxXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENmOzs7Ozs7QUFFTyxJQUFNMUIsZ0NBQVlqTSxvQkFBVWtOLEtBQVYsQ0FBZ0I7QUFDdkMvTCxNQUFJbkIsb0JBQVV3TCxNQUR5QjtBQUV2Q3lFLGFBQVdqUSxvQkFBVW1MLE1BRmtCO0FBR3ZDK0UsWUFBVWxRLG9CQUFVbUwsTUFIbUI7QUFJdkNnRixTQUFPblEsb0JBQVVtTCxNQUpzQjtBQUt2Q2lGLFlBQVVwUSxvQkFBVW1MLE1BTG1CO0FBTXZDdUMsVUFBUTFOLG9CQUFVbUwsTUFOcUI7QUFPdkNhLFlBQVVoTSxvQkFBVW1MO0FBUG1CLENBQWhCLENBQWxCOztBQVVBLElBQU05QyxrQ0FBYXJJLG9CQUFVa04sS0FBVixDQUFnQjtBQUN4Q3BDLFNBQU85SyxvQkFBVW1MLE1BRHVCO0FBRXhDMUQsZ0JBQWN6SCxvQkFBVW1MLE1BRmdCO0FBR3hDekQsUUFBTTFILG9CQUFVbUwsTUFId0I7QUFJeEN2RCxjQUFZNUgsb0JBQVV3TCxNQUprQjtBQUt4QzdELGdCQUFjM0gsb0JBQVV3TCxNQUxnQjtBQU14QzNELGdCQUFjN0gsb0JBQVVtTCxNQU5nQjtBQU94Q3JELGNBQVk5SCxvQkFBVW1MLE1BUGtCO0FBUXhDL0MsWUFBVXBJLG9CQUFVbUwsTUFSb0I7QUFTeENwRCxXQUFTL0gsb0JBQVVtTCxNQVRxQjtBQVV4Q2xELFlBQVVqSSxvQkFBVW1MO0FBVm9CLENBQWhCLENBQW5COztBQWFBLElBQU03RSxnQ0FBWXRHLG9CQUFVa04sS0FBVixDQUFnQjtBQUN2Qy9MLE1BQUluQixvQkFBVXdMLE1BQVYsQ0FBaUJyTCxVQURrQjtBQUV2Q2dHLFFBQU1uRyxvQkFBVW1MLE1BQVYsQ0FBaUJoTCxVQUZnQjtBQUd2Q2lHLGFBQVdwRyxvQkFBVW1MLE1BQVYsQ0FBaUJoTCxVQUhXO0FBSXZDa0csZUFBYXJHLG9CQUFVbUwsTUFBVixDQUFpQmhMO0FBSlMsQ0FBaEIsQ0FBbEI7O0FBT0EsSUFBTWdILHNDQUFlbkgsb0JBQVVrTixLQUFWLENBQWdCO0FBQzFDL0wsTUFBSW5CLG9CQUFVd0wsTUFENEI7QUFFMUMxRSxRQUFNOUcsb0JBQVVtTCxNQUYwQjtBQUcxQ2hGLFFBQU1uRyxvQkFBVW1MO0FBSDBCLENBQWhCLENBQXJCOztBQU1BLElBQU1qQixrQ0FBYWxLLG9CQUFVa04sS0FBVixDQUFnQjtBQUN4Qy9MLE1BQUluQixvQkFBVXdMLE1BQVYsQ0FBaUJyTCxVQURtQjtBQUV4Q2dHLFFBQU1uRyxvQkFBVW1MLE1BQVYsQ0FBaUJoTDtBQUZpQixDQUFoQixDQUFuQjs7QUFLQSxJQUFNa1Esa0NBQWFyUSxvQkFBVWtOLEtBQVYsQ0FBZ0I7QUFDeEMvTCxNQUFJbkIsb0JBQVV3TCxNQUFWLENBQWlCckwsVUFEbUI7QUFFeENnRyxRQUFNbkcsb0JBQVVtTCxNQUFWLENBQWlCaEw7QUFGaUIsQ0FBaEIsQ0FBbkI7O0FBS0EsSUFBTWdLLG9DQUFjbkssb0JBQVVrTixLQUFWLENBQWdCO0FBQ3pDMUQsUUFBTXhKLG9CQUFVbUwsTUFEeUI7QUFFekNwQixjQUFZL0osb0JBQVVtTCxNQUZtQjtBQUd6Q3pHLFVBQVExRSxvQkFBVTRHLE9BQVYsQ0FBa0J1RSxNQUhlO0FBSXpDbUYsU0FBT3RRLG9CQUFVNEcsT0FBVixDQUFrQnVFLE1BSmdCO0FBS3pDM0UsU0FBT3hHLG9CQUFVNEcsT0FBVixDQUFrQnVFLE1BTGdCO0FBTXpDUSxlQUFhM0wsb0JBQVVrTixLQUFWLENBQWdCO0FBQzNCcUQsU0FBS3ZRLG9CQUFVd0wsTUFEWTtBQUUzQmdGLFNBQUt4USxvQkFBVXdMO0FBRlksR0FBaEIsQ0FONEI7QUFVekNpRixlQUFhelEsb0JBQVVrTixLQUFWLENBQWdCO0FBQzNCcUQsU0FBS3ZRLG9CQUFVd0wsTUFEWTtBQUUzQmdGLFNBQUt4USxvQkFBVXdMO0FBRlksR0FBaEI7QUFWNEIsQ0FBaEIsQ0FBcEIsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoRFA7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCN0wsTzs7O0FBQ25CLG1CQUFZd0osS0FBWixFQUFtQjtBQUFBOztBQUFBLGtIQUNYQSxLQURXOztBQUdqQkEsVUFBTWxILG9CQUFOLENBQTJCLElBQTNCOztBQUVBLFVBQUt5TyxLQUFMLEdBQWE7QUFDWEMsZ0JBQVUsS0FEQztBQUVYQyxnQkFBVSxFQUZDO0FBR1hyUCxnQkFBVSxFQUhDO0FBSVhzUCxrQkFBWTtBQUNWN0Usa0JBQVUsRUFEQTtBQUVWbUUsZUFBTyxFQUZHO0FBR1ZXLHFCQUFhLEVBSEg7QUFJVkMscUJBQWEsRUFKSDtBQUtWQyw0QkFBb0IsRUFMVjtBQU1WZixtQkFBVyxFQU5EO0FBT1ZDLGtCQUFVO0FBUEE7QUFKRCxLQUFiOztBQWVBLFVBQUtlLFlBQUwsR0FBb0IsTUFBS0EsWUFBTCxDQUFrQkMsSUFBbEIsT0FBcEI7QUFDQSxVQUFLNVAsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CNFAsSUFBcEIsT0FBdEI7QUFyQmlCO0FBc0JsQjs7Ozt3Q0FFbUI7QUFBQSxVQUNWelEsZ0JBRFUsR0FDVyxLQUFLMEksS0FEaEIsQ0FDVjFJLGdCQURVOztBQUVsQkE7QUFDRDs7O3VDQUV3QjJELEssRUFBTztBQUFBLFVBQWpCNkYsTUFBaUIsUUFBakJBLE1BQWlCO0FBQUEsVUFDdEJyRyxLQURzQixHQUNOcUcsTUFETSxDQUN0QnJHLEtBRHNCO0FBQUEsVUFDZnVDLElBRGUsR0FDTjhELE1BRE0sQ0FDZjlELElBRGU7QUFBQSxVQUV0QnVLLEtBRnNCLEdBRVosSUFGWSxDQUV0QkEsS0FGc0I7O0FBRzlCQSxZQUFNdE0sS0FBTixFQUFhK0IsSUFBYixJQUFxQnZDLEtBQXJCO0FBQ0EsV0FBSzhNLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFdBQUtTLFdBQUw7QUFDRDs7O3FDQUVnQjtBQUFBLFVBQ1A1UCxRQURPLEdBQ00sS0FBS21QLEtBRFgsQ0FDUG5QLFFBRE87QUFBQSxtQkFFeUIsS0FBSzRILEtBRjlCO0FBQUEsVUFFUHBILFdBRk8sVUFFUEEsV0FGTztBQUFBLFVBRU1ULGNBRk4sVUFFTUEsY0FGTjs7O0FBSWYsVUFBSUMsU0FBU3dQLFdBQVQsS0FBeUJ4UCxTQUFTeVAsa0JBQXRDLEVBQTBEO0FBQ3hELGVBQU9qUCxZQUFZO0FBQ2pCWCxnQkFBTSxRQURXO0FBRWpCQyxtQkFBUztBQUZRLFNBQVosQ0FBUDtBQUlEOztBQUVELFVBQUlFLFNBQVN1UCxXQUFULEtBQXlCdlAsU0FBU3dQLFdBQXRDLEVBQW1EO0FBQ2pELGVBQU9oUCxZQUFZO0FBQ2pCWCxnQkFBTSxRQURXO0FBRWpCQyxtQkFBUztBQUZRLFNBQVosQ0FBUDtBQUlEOztBQUVEQyxxQkFBZUMsUUFBZjtBQUNBLFdBQUs2UCxRQUFMLENBQWMsRUFBRTdQLFVBQVUsRUFBWixFQUFkO0FBQ0Q7Ozs2QkFFUTtBQUFBOztBQUFBLG9CQU9ILEtBQUs0SCxLQVBGO0FBQUEsVUFFTGtJLEtBRkssV0FFTEEsS0FGSztBQUFBLFVBR0w3USxJQUhLLFdBR0xBLElBSEs7QUFBQSxVQUlMK0IsT0FKSyxXQUlMQSxPQUpLO0FBQUEsVUFLTEosV0FMSyxXQUtMQSxXQUxLO0FBQUEsVUFNTGxCLFVBTkssV0FNTEEsVUFOSztBQUFBLG1CQVFvQyxLQUFLeVAsS0FSekM7QUFBQSxVQVFDRSxRQVJELFVBUUNBLFFBUkQ7QUFBQSxVQVFXQyxVQVJYLFVBUVdBLFVBUlg7QUFBQSxVQVF1QnRQLFFBUnZCLFVBUXVCQSxRQVJ2Qjs7O0FBVVAsVUFBSWYsUUFBUUEsS0FBS1csRUFBYixJQUFtQixDQUFDeVAsU0FBU3pQLEVBQWpDLEVBQXFDO0FBQ25DLGFBQUtpUSxRQUFMLENBQWMsRUFBRVIsVUFBVXBRLElBQVosRUFBZDtBQUNEOztBQUVELGFBQ0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0Usc0NBQUMsZ0JBQUQsSUFBUSxNQUFNQSxJQUFkLEdBREY7QUFFRTtBQUFDLG9DQUFEO0FBQUEsWUFBa0IsTUFBTUEsSUFBeEIsRUFBOEIsTUFBTTZRLE1BQU03RyxJQUExQyxFQUFnRCxhQUFhckksV0FBN0Q7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxTQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBRUU7QUFBQTtBQUFBLGtCQUFNLFFBQU8sRUFBYjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFPLFNBQVEsZUFBZjtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUNFLDBCQUFLLE1BRFA7QUFFRSwwQkFBSyxVQUZQO0FBR0Usa0RBQTJCME8sV0FBVzdFLFFBQVgsQ0FBb0JzRixLQUFwQixJQUE2QixFQUF4RCxDQUhGO0FBSUUsMkJBQU9WLFNBQVM1RSxRQUpsQjtBQUtFLHdCQUFHLGVBTEw7QUFNRSw4QkFBVTtBQUFBLDZCQUFLLE9BQUtpRixZQUFMLENBQWtCTSxDQUFsQixFQUFxQixVQUFyQixDQUFMO0FBQUE7QUFOWixvQkFGRjtBQVVHViw2QkFBVzdFLFFBQVgsQ0FBb0J3RjtBQVZ2QixpQkFERjtBQWFFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFPLFNBQVEsZ0JBQWY7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFDRSwwQkFBSyxNQURQO0FBRUUsMEJBQUssV0FGUDtBQUdFLGtEQUEyQlgsV0FBV1osU0FBWCxDQUFxQnFCLEtBQXJCLElBQThCLEVBQXpELENBSEY7QUFJRSwyQkFBT1YsU0FBU1gsU0FKbEI7QUFLRSx3QkFBRyxnQkFMTDtBQU1FLDhCQUFVO0FBQUEsNkJBQUssT0FBS2dCLFlBQUwsQ0FBa0JNLENBQWxCLEVBQXFCLFVBQXJCLENBQUw7QUFBQTtBQU5aLG9CQUZGO0FBVUdWLDZCQUFXWixTQUFYLENBQXFCdUI7QUFWeEIsaUJBYkY7QUF5QkU7QUFBQTtBQUFBLG9CQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQU8sU0FBUSxlQUFmO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQ0UsMEJBQUssTUFEUDtBQUVFLDBCQUFLLFVBRlA7QUFHRSxrREFBMkJYLFdBQVdYLFFBQVgsQ0FBb0JvQixLQUFwQixJQUE2QixFQUF4RCxDQUhGO0FBSUUsMkJBQU9WLFNBQVNWLFFBSmxCO0FBS0Usd0JBQUcsZUFMTDtBQU1FLDhCQUFVO0FBQUEsNkJBQUssT0FBS2UsWUFBTCxDQUFrQk0sQ0FBbEIsRUFBcUIsVUFBckIsQ0FBTDtBQUFBO0FBTlosb0JBRkY7QUFVR1YsNkJBQVdYLFFBQVgsQ0FBb0JzQjtBQVZ2QixpQkF6QkY7QUFxQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQU8sU0FBUSxZQUFmO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQ0UsMEJBQUssT0FEUDtBQUVFLDBCQUFLLE9BRlA7QUFHRSxrREFBMkJYLFdBQVdWLEtBQVgsQ0FBaUJtQixLQUFqQixJQUEwQixFQUFyRCxDQUhGO0FBSUUsMkJBQU9WLFNBQVNULEtBSmxCO0FBS0Usd0JBQUcsWUFMTDtBQU1FLDhCQUFVO0FBQUEsNkJBQUssT0FBS2MsWUFBTCxDQUFrQk0sQ0FBbEIsRUFBcUIsVUFBckIsQ0FBTDtBQUFBO0FBTlosb0JBRkY7QUFVR1YsNkJBQVdWLEtBQVgsQ0FBaUJxQjtBQVZwQixpQkFyQ0Y7QUFpREU7QUFBQTtBQUFBO0FBQ0UsK0JBQVUsbUNBRFo7QUFFRSwwQkFBSyxRQUZQO0FBR0UsNkJBQVM7QUFBQSw2QkFBTXZRLFdBQVcyUCxRQUFYLENBQU47QUFBQSxxQkFIWDtBQUlFLDhCQUFVck87QUFKWjtBQU1FLGdEQUFDLGlCQUFELElBQVMsTUFBTUEsT0FBZixFQUF3QixNQUFLLFFBQTdCLEVBQXNDLE9BQU0sU0FBNUMsR0FORjtBQU9FO0FBQUE7QUFBQSxzQkFBTSxXQUFXQSxVQUFVLFFBQVYsR0FBcUIsU0FBdEM7QUFBQTtBQUFBO0FBUEY7QUFqREY7QUFGRixhQURGO0FBK0RFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLFNBQWY7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFFRTtBQUFBO0FBQUEsa0JBQU0sUUFBTyxFQUFiO0FBQ0U7QUFBQTtBQUFBLG9CQUFLLFdBQVUsa0JBQWY7QUFDRTtBQUFBO0FBQUEsc0JBQU8sU0FBUSxrQkFBZjtBQUFBO0FBQUEsbUJBREY7QUFFRTtBQUNFLDBCQUFLLFVBRFA7QUFFRSwwQkFBSyxhQUZQO0FBR0Usa0RBQTJCc08sV0FBV0MsV0FBWCxDQUF1QlEsS0FBdkIsSUFBZ0MsRUFBM0QsQ0FIRjtBQUlFLDJCQUFPL1AsU0FBU3VQLFdBSmxCO0FBS0Usd0JBQUcsa0JBTEw7QUFNRSw4QkFBVTtBQUFBLDZCQUFLLE9BQUtHLFlBQUwsQ0FBa0JNLENBQWxCLEVBQXFCLFVBQXJCLENBQUw7QUFBQTtBQU5aLG9CQUZGO0FBVUdWLDZCQUFXQyxXQUFYLENBQXVCVTtBQVYxQixpQkFERjtBQWFFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLGtCQUFmO0FBQ0U7QUFBQTtBQUFBLHNCQUFPLFNBQVEsa0JBQWY7QUFBQTtBQUFBLG1CQURGO0FBRUU7QUFDRSwwQkFBSyxVQURQO0FBRUUsMEJBQUssYUFGUDtBQUdFLGtEQUEyQlgsV0FBV0UsV0FBWCxDQUF1Qk8sS0FBdkIsSUFBZ0MsRUFBM0QsQ0FIRjtBQUlFLDJCQUFPL1AsU0FBU3dQLFdBSmxCO0FBS0Usd0JBQUcsa0JBTEw7QUFNRSw4QkFBVTtBQUFBLDZCQUFLLE9BQUtFLFlBQUwsQ0FBa0JNLENBQWxCLEVBQXFCLFVBQXJCLENBQUw7QUFBQTtBQU5aLG9CQUZGO0FBVUdWLDZCQUFXRSxXQUFYLENBQXVCUztBQVYxQixpQkFiRjtBQXlCRTtBQUFBO0FBQUEsb0JBQUssV0FBVSxrQkFBZjtBQUNFO0FBQUE7QUFBQSxzQkFBTyxTQUFRLHlCQUFmO0FBQUE7QUFBQSxtQkFERjtBQUVFO0FBQ0UsMEJBQUssVUFEUDtBQUVFLDBCQUFLLG9CQUZQO0FBR0Usa0RBQTJCWCxXQUFXRyxrQkFBWCxDQUE4Qk0sS0FBOUIsSUFBdUMsRUFBbEUsQ0FIRjtBQUlFLDJCQUFPL1AsU0FBU3lQLGtCQUpsQjtBQUtFLHdCQUFHLHlCQUxMO0FBTUUsOEJBQVU7QUFBQSw2QkFBSyxPQUFLQyxZQUFMLENBQWtCTSxDQUFsQixFQUFxQixVQUFyQixDQUFMO0FBQUE7QUFOWixvQkFGRjtBQVVHViw2QkFBV0csa0JBQVgsQ0FBOEJRO0FBVmpDLGlCQXpCRjtBQXFDRTtBQUFBO0FBQUE7QUFDRSwrQkFBVSxtQ0FEWjtBQUVFLDBCQUFLLFFBRlA7QUFHRSw4QkFBVWpQLE9BSFo7QUFJRSw2QkFBUyxLQUFLakI7QUFKaEI7QUFBQTtBQUFBO0FBckNGO0FBRkY7QUEvREY7QUFERjtBQUZGLE9BREY7QUF3SEQ7Ozs7RUFsTWtDbVEsZ0I7O2tCQUFoQjlSLE87OztBQXFNckJBLFFBQVFJLFNBQVIsR0FBb0I7QUFDbEJTLFFBQU15TCxzQkFBVTlMLFVBREU7QUFFbEJrUixTQUFPaEIsdUJBQVdsUSxVQUZBO0FBR2xCTSxvQkFBa0JULG9CQUFVb0ssSUFBVixDQUFlakssVUFIZjtBQUlsQmdDLGVBQWFuQyxvQkFBVXFLLElBQVYsQ0FBZWxLLFVBSlY7QUFLbEJvQyxXQUFTdkMsb0JBQVVxSyxJQUFWLENBQWVsSyxVQUxOO0FBTWxCOEIsd0JBQXNCakMsb0JBQVVvSyxJQUFWLENBQWVqSyxVQU5uQjtBQU9sQmMsY0FBWWpCLG9CQUFVb0ssSUFBVixDQUFlakssVUFQVDtBQVFsQjRCLGVBQWEvQixvQkFBVW9LLElBQVYsQ0FBZWpLLFVBUlY7QUFTbEJtQixrQkFBZ0J0QixvQkFBVW9LLElBQVYsQ0FBZWpLO0FBVGIsQ0FBcEIsQzs7Ozs7Ozs7Ozs7QUM5TUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBOztBQUVBOzs7O0FBQ0E7O0FBQ0E7Ozs7QUFFQSxJQUFNdVIsa0JBQWtCLFNBQWxCQSxlQUFrQjtBQUFBLFNBQVU7QUFDaEN2UCxpQkFBYXVPLE1BQU1pQixNQUFOLENBQWF4UCxXQURNO0FBRWhDSSxhQUFTbU8sTUFBTWlCLE1BQU4sQ0FBYXBQLE9BRlU7QUFHaENLLGtCQUFjOE4sTUFBTWlCLE1BQU4sQ0FBYS9PLFlBSEs7QUFJaENwQyxVQUFNa1EsTUFBTWtCLE9BQU4sQ0FBY3BSO0FBSlksR0FBVjtBQUFBLENBQXhCOztBQU9BLElBQU1xUixxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQWE7QUFDdENwUixzQkFBa0I7QUFBQSxhQUFNQyxTQUFTLGdDQUFULENBQU47QUFBQSxLQURvQjtBQUV0Q3VCLDBCQUFzQjtBQUFBLGFBQVV2QixTQUFTLGtDQUFxQjBCLE1BQXJCLENBQVQsQ0FBVjtBQUFBLEtBRmdCO0FBR3RDbkIsZ0JBQVk7QUFBQSxhQUFRUCxTQUFTLHlCQUFXRixJQUFYLENBQVQsQ0FBUjtBQUFBLEtBSDBCO0FBSXRDYyxvQkFBZ0I7QUFBQSxhQUFZWixTQUFTLDZCQUFlYSxRQUFmLENBQVQsQ0FBWjtBQUFBLEtBSnNCO0FBS3RDUSxpQkFBYTtBQUFBLGFBQVNyQixTQUFTLHlCQUFZb1IsS0FBWixDQUFULENBQVQ7QUFBQTtBQUx5QixHQUFiO0FBQUEsQ0FBM0I7O2tCQVFlLHlCQUNiSixlQURhLEVBRWJHLGtCQUZhLEVBR2JsUyxpQkFIYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQmY7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTW9TLFFBQVEsU0FBUkEsS0FBUSxDQUFDNUksS0FBRCxFQUFXO0FBQUEsTUFFckIvSCxJQUZxQixHQU1uQitILEtBTm1CLENBRXJCL0gsSUFGcUI7QUFBQSxNQUdyQmdJLElBSHFCLEdBTW5CRCxLQU5tQixDQUdyQkMsSUFIcUI7QUFBQSxNQUlyQi9ILE9BSnFCLEdBTW5COEgsS0FObUIsQ0FJckI5SCxPQUpxQjtBQUFBLE1BS3JCVSxXQUxxQixHQU1uQm9ILEtBTm1CLENBS3JCcEgsV0FMcUI7OztBQVF2QixNQUFJLENBQUNxSCxJQUFMLEVBQVcsT0FBTyxJQUFQOztBQUVYLFNBQ0U7QUFBQTtBQUFBLE1BQUssNEJBQTBCaEksSUFBMUIsNENBQUwsRUFBOEUsTUFBSyxPQUFuRjtBQUNHQyxXQURIO0FBRUU7QUFBQTtBQUFBLFFBQVEsTUFBSyxRQUFiLEVBQXNCLFdBQVUsT0FBaEMsRUFBd0MsZ0JBQWEsT0FBckQsRUFBNkQsY0FBVyxPQUF4RSxFQUFnRixTQUFTVSxXQUF6RjtBQUNFO0FBQUE7QUFBQSxVQUFNLGVBQVksTUFBbEI7QUFBQTtBQUFBO0FBREY7QUFGRixHQURGO0FBUUQsQ0FsQkQ7O0FBb0JBZ1EsTUFBTTdLLFlBQU4sR0FBcUI7QUFDbkJrQyxRQUFNLEtBRGE7QUFFbkJoSSxRQUFNLE1BRmE7QUFHbkJDLFdBQVM7QUFIVSxDQUFyQjs7QUFNQTBRLE1BQU1oUyxTQUFOLEdBQWtCO0FBQ2hCcUosUUFBTXBKLG9CQUFVcUssSUFEQTtBQUVoQmhKLFdBQVNyQixvQkFBVW1MLE1BRkg7QUFHaEJwSixlQUFhL0Isb0JBQVVvSyxJQUFWLENBQWVqSyxVQUhaO0FBSWhCaUIsUUFBTXBCLG9CQUFVbU8sS0FBVixDQUFnQixDQUNwQixTQURvQixFQUVwQixXQUZvQixFQUdwQixTQUhvQixFQUlwQixRQUpvQixFQUtwQixTQUxvQixFQU1wQixNQU5vQixFQU9wQixPQVBvQixFQVFwQixNQVJvQixDQUFoQjtBQUpVLENBQWxCOztrQkFnQmU0RCxLOzs7Ozs7Ozs7OztBQzdDZix1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1MLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxNQUFHQyxNQUFILFFBQUdBLE1BQUg7QUFBQSxTQUFpQjtBQUN2Q3ZJLFVBQU11SSxPQUFPSyxTQUQwQjtBQUV2QzNRLGFBQVNzUSxPQUFPTSxZQUZ1QjtBQUd2QzdRLFVBQU11USxPQUFPTztBQUgwQixHQUFqQjtBQUFBLENBQXhCOztBQU1BLElBQU1MLHFCQUFxQixTQUFyQkEsa0JBQXFCO0FBQUEsU0FBYTtBQUN0QzlQLGlCQUFhO0FBQUEsYUFBTXJCLFNBQVMseUJBQVksRUFBRTBJLE1BQU0sS0FBUixFQUFaLENBQVQsQ0FBTjtBQUFBO0FBRHlCLEdBQWI7QUFBQSxDQUEzQjs7a0JBSWUseUJBQ2JzSSxlQURhLEVBRWJHLGtCQUZhLEVBR2JFLGVBSGEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQmY7Ozs7QUFDQTs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7SUFFcUJyUyxJOzs7QUFDbkIsa0JBQWM7QUFBQTs7QUFBQTs7QUFFWixVQUFLZ1IsS0FBTCxHQUFhO0FBQ1h5QixZQUFNLEVBREs7QUFFWHRCLGtCQUFZO0FBQ1Y3RSxrQkFBVSxFQURBO0FBRVZtRSxlQUFPLEVBRkc7QUFHVjVPLGtCQUFVLEVBSEE7QUFJVjBPLG1CQUFXLEVBSkQ7QUFLVkMsa0JBQVUsRUFMQTtBQU1Wa0MseUJBQWlCO0FBTlA7QUFGRCxLQUFiOztBQVlBLFVBQUtuQixZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JDLElBQWxCLE9BQXBCO0FBQ0EsVUFBS0wsVUFBTCxHQUFrQixNQUFLQSxVQUFMLENBQWdCSyxJQUFoQixPQUFsQjtBQUNBLFVBQUttQixVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JuQixJQUFoQixPQUFsQjtBQUNBLFVBQUsxUCxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUIwUCxJQUFuQixPQUFyQjtBQWpCWTtBQWtCYjs7Ozt3Q0FFbUI7QUFBQSxVQUNWblAsV0FEVSxHQUNNLEtBQUtvSCxLQURYLENBQ1ZwSCxXQURVOztBQUVsQixVQUFNdVEsZUFBZWhOLGlCQUFPMUUsR0FBUCxDQUFXLGNBQVgsQ0FBckI7QUFDQSxVQUFJMFIsWUFBSixFQUFrQjtBQUNoQnZRLG9CQUFZdVEsWUFBWjtBQUNEO0FBQ0Y7Ozt1Q0FFd0I7QUFBQSxVQUFWckksTUFBVSxRQUFWQSxNQUFVO0FBQUEsVUFDZnJHLEtBRGUsR0FDQ3FHLE1BREQsQ0FDZnJHLEtBRGU7QUFBQSxVQUNSdUMsSUFEUSxHQUNDOEQsTUFERCxDQUNSOUQsSUFEUTtBQUFBLFVBRWZnTSxJQUZlLEdBRU4sS0FBS3pCLEtBRkMsQ0FFZnlCLElBRmU7O0FBR3ZCQSxXQUFLaE0sSUFBTCxJQUFhdkMsS0FBYjtBQUNBLFdBQUt3TixRQUFMLENBQWMsRUFBRWUsVUFBRixFQUFkO0FBQ0Q7OztpQ0FFWTtBQUNYLFVBQU1JLGFBQWFDLFNBQVNDLGFBQVQsQ0FBdUIscUJBQXZCLENBQW5CO0FBRFcsVUFFSDVCLFVBRkcsR0FFWSxLQUFLSCxLQUZqQixDQUVIRyxVQUZHO0FBQUEsbUJBR2tCLEtBQUtILEtBSHZCO0FBQUEsVUFHSHlCLElBSEcsVUFHSEEsSUFIRztBQUFBLFVBR0dPLFVBSEgsVUFHR0EsVUFISDs7QUFJWCxVQUFJQyxVQUFVLElBQWQ7O0FBRUEsVUFBSSxDQUFDUixLQUFLaEMsS0FBTixJQUFlLENBQUNvQyxXQUFXSyxhQUFYLEVBQXBCLEVBQWdEO0FBQzlDL0IsbUJBQVdWLEtBQVgsR0FBbUI7QUFDakJtQixpQkFBTyxZQURVO0FBRWpCRSxpQkFBTztBQUFBO0FBQUEsY0FBSyxXQUFVLGtCQUFmO0FBQUE7QUFBQTtBQUZVLFNBQW5CO0FBSUFtQixrQkFBVSxLQUFWO0FBQ0QsT0FORCxNQU1PO0FBQ0w5QixtQkFBV1YsS0FBWCxHQUFtQixFQUFuQjtBQUNEOztBQUVELFVBQUksQ0FBQ2dDLEtBQUs1USxRQUFOLElBQWtCNFEsS0FBSzVRLFFBQUwsQ0FBY3lDLE1BQWQsR0FBdUIsQ0FBekMsSUFBOENtTyxLQUFLNVEsUUFBTCxDQUFjeUMsTUFBZCxHQUF1QixFQUF6RSxFQUE2RTtBQUMzRTZNLG1CQUFXdFAsUUFBWCxHQUFzQjtBQUNwQitQLGlCQUFPLFlBRGE7QUFFcEJFLGlCQUFPO0FBQUE7QUFBQSxjQUFLLFdBQVUsa0JBQWY7QUFBQTtBQUFBO0FBRmEsU0FBdEI7QUFJQW1CLGtCQUFVLEtBQVY7QUFDRCxPQU5ELE1BTU87QUFDTDlCLG1CQUFXdFAsUUFBWCxHQUFzQixFQUF0QjtBQUNEOztBQUVELFVBQUltUixVQUFKLEVBQWdCO0FBQ2QsWUFBSSxDQUFDUCxLQUFLbkcsUUFBTixJQUFrQm1HLEtBQUtuRyxRQUFMLENBQWNoSSxNQUFkLEdBQXVCLENBQXpDLElBQThDbU8sS0FBS25HLFFBQUwsQ0FBY2hJLE1BQWQsR0FBdUIsRUFBekUsRUFBNkU7QUFDM0U2TSxxQkFBVzdFLFFBQVgsR0FBc0I7QUFDcEJzRixtQkFBTyxZQURhO0FBRXBCRSxtQkFBTztBQUFBO0FBQUEsZ0JBQUssV0FBVSxrQkFBZjtBQUFBO0FBQUE7QUFGYSxXQUF0QjtBQUlBbUIsb0JBQVUsS0FBVjtBQUNELFNBTkQsTUFNTztBQUNMOUIscUJBQVc3RSxRQUFYLEdBQXNCLEVBQXRCO0FBQ0Q7O0FBRUQsWUFBSSxDQUFDbUcsS0FBS2xDLFNBQU4sSUFBbUJrQyxLQUFLbEMsU0FBTCxDQUFlak0sTUFBZixHQUF3QixDQUEzQyxJQUFnRG1PLEtBQUtsQyxTQUFMLENBQWVqTSxNQUFmLEdBQXdCLEVBQTVFLEVBQWdGO0FBQzlFNk0scUJBQVdaLFNBQVgsR0FBdUI7QUFDckJxQixtQkFBTyxZQURjO0FBRXJCRSxtQkFBTztBQUFBO0FBQUEsZ0JBQUssV0FBVSxrQkFBZjtBQUFBO0FBQUE7QUFGYyxXQUF2QjtBQUlBbUIsb0JBQVUsS0FBVjtBQUNELFNBTkQsTUFNTztBQUNMOUIscUJBQVdaLFNBQVgsR0FBdUIsRUFBdkI7QUFDRDs7QUFFRCxZQUFJLENBQUNrQyxLQUFLakMsUUFBTixJQUFrQmlDLEtBQUtqQyxRQUFMLENBQWNsTSxNQUFkLEdBQXVCLENBQXpDLElBQThDbU8sS0FBS2pDLFFBQUwsQ0FBY2xNLE1BQWQsR0FBdUIsRUFBekUsRUFBNkU7QUFDM0U2TSxxQkFBV1gsUUFBWCxHQUFzQjtBQUNwQm9CLG1CQUFPLFlBRGE7QUFFcEJFLG1CQUFPO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGtCQUFmO0FBQUE7QUFBQTtBQUZhLFdBQXRCO0FBSUFtQixvQkFBVSxLQUFWO0FBQ0QsU0FORCxNQU1PO0FBQ0w5QixxQkFBV1gsUUFBWCxHQUFzQixFQUF0QjtBQUNEOztBQUVELFlBQUlpQyxLQUFLQyxlQUFMLEtBQXlCRCxLQUFLNVEsUUFBbEMsRUFBNEM7QUFDMUNzUCxxQkFBV3VCLGVBQVgsR0FBNkI7QUFDM0JkLG1CQUFPLFlBRG9CO0FBRTNCRSxtQkFBTztBQUFBO0FBQUEsZ0JBQUssV0FBVSxrQkFBZjtBQUFBO0FBQUE7QUFGb0IsV0FBN0I7QUFJQW1CLG9CQUFVLEtBQVY7QUFDRCxTQU5ELE1BTU87QUFDTDlCLHFCQUFXdUIsZUFBWCxHQUE2QixFQUE3QjtBQUNEO0FBQ0Y7O0FBRUQsV0FBS2hCLFFBQUwsQ0FBYyxFQUFFUCxzQkFBRixFQUFkO0FBQ0EsYUFBTzhCLE9BQVA7QUFDRDs7O29DQUVlO0FBQUEsb0JBQ2UsS0FBS2pDLEtBRHBCO0FBQUEsVUFDTnlCLElBRE0sV0FDTkEsSUFETTtBQUFBLFVBQ0FPLFVBREEsV0FDQUEsVUFEQTs7QUFFZCxVQUFNQyxVQUFVLEtBQUs5QixVQUFMLENBQWdCc0IsSUFBaEIsQ0FBaEI7O0FBRUEsVUFBSSxDQUFDUSxPQUFMLEVBQWM7QUFDWixlQUFPLElBQVA7QUFDRDs7QUFOYSxVQVFOeEosS0FSTSxHQVFJLElBUkosQ0FRTkEsS0FSTTs7QUFTZCxVQUFNMUgsTUFBTWlSLGFBQ1IsZUFEUSxHQUVSLFlBRko7O0FBSUEsYUFBT3ZKLE1BQU0zSCxhQUFOLENBQW9CMlEsSUFBcEIsRUFBMEIxUSxHQUExQixDQUFQO0FBQ0Q7OztpQ0FFWTtBQUNYLFdBQUsyUCxRQUFMLENBQWM7QUFBQSxlQUFjO0FBQzFCc0Isc0JBQVksQ0FBQ0csVUFBVUg7QUFERyxTQUFkO0FBQUEsT0FBZDtBQUdEOzs7NkJBRVE7QUFBQSxvQkFNSCxLQUFLaEMsS0FORjtBQUFBLFVBRUx5QixJQUZLLFdBRUxBLElBRks7QUFBQSxVQUdMTyxVQUhLLFdBR0xBLFVBSEs7QUFBQSxVQUlMN0IsVUFKSyxXQUlMQSxVQUpLO0FBQUEsVUFLTHRPLE9BTEssV0FLTEEsT0FMSzs7O0FBUVAsVUFBSXVRLGFBQWEsT0FBakI7QUFDQSxVQUFJQyw0QkFBNEIsVUFBaEM7QUFDQSxVQUFJQyxnQkFBZ0IsSUFBcEI7O0FBRUEsVUFBSU4sVUFBSixFQUFnQjtBQUNkSSxxQkFBYSxVQUFiO0FBQ0FDLG9DQUE0QixPQUE1Qjs7QUFFQUMsd0JBQ0U7QUFBQyx5QkFBRDtBQUFBO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFNBQVEsc0JBQWY7QUFBQTtBQUFBLGFBREY7QUFFRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQU0sV0FBVSxpR0FBaEIsRUFBa0gsSUFBRyxzQkFBckg7QUFDRSxnREFBQyxpQ0FBRCxJQUFpQixNQUFLLEtBQXRCO0FBREY7QUFERixlQURGO0FBTUU7QUFDRSxzQkFBSyxVQURQO0FBRUUsc0JBQUssaUJBRlA7QUFHRSx1QkFBT2IsS0FBS0MsZUFIZDtBQUlFLG9CQUFHLHNCQUpMO0FBS0UsMEJBQVUsS0FBS25CLFlBTGpCO0FBTUUsOEJBQWEsaUJBTmY7QUFPRSw2QkFBWSxrQkFQZDtBQVFFLG9DQUFpQixzQkFSbkI7QUFTRSwrSEFBNEdKLFdBQVd1QixlQUFYLENBQTJCZCxLQUEzQixJQUFvQyxFQUFoSjtBQVRGLGdCQU5GO0FBaUJHVCx5QkFBV3VCLGVBQVgsQ0FBMkJaO0FBakI5QjtBQUZGLFdBREY7QUF1QkU7QUFBQTtBQUFBLGNBQUssV0FBVSxZQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFPLFNBQVEsZUFBZjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBTSxXQUFVLGlHQUFoQixFQUFrSCxJQUFHLFVBQXJIO0FBQ0UsZ0RBQUMsaUNBQUQsSUFBaUIsTUFBSyxJQUF0QjtBQURGO0FBREYsZUFERjtBQU1FO0FBQ0Usc0JBQUssTUFEUDtBQUVFLHNCQUFLLFVBRlA7QUFHRSxvQ0FBaUIsVUFIbkI7QUFJRSxvQkFBRyxlQUpMO0FBS0UsNkJBQVksV0FMZDtBQU1FLHVCQUFPVyxLQUFLbkcsUUFOZDtBQU9FLDBCQUFVLEtBQUtpRixZQVBqQjtBQVFFLCtIQUE0R0osV0FBVzdFLFFBQVgsQ0FBb0JzRixLQUFwQixJQUE2QixFQUF6STtBQVJGLGdCQU5GO0FBZ0JHVCx5QkFBVzdFLFFBQVgsQ0FBb0J3RjtBQWhCdkI7QUFGRixXQXZCRjtBQTRDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQU8sU0FBUSxnQkFBZjtBQUFBO0FBQUEsYUFERjtBQUVFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSxvQkFBTSxXQUFVLGlHQUFoQixFQUFrSCxJQUFHLFdBQXJIO0FBQ0UsZ0RBQUMsaUNBQUQsSUFBaUIsTUFBSyxXQUF0QjtBQURGO0FBREYsZUFERjtBQU1FO0FBQ0Usc0JBQUssTUFEUDtBQUVFLHNCQUFLLFdBRlA7QUFHRSxvQ0FBaUIsV0FIbkI7QUFJRSxvQkFBRyxnQkFKTDtBQUtFLDZCQUFZLFlBTGQ7QUFNRSx1QkFBT1csS0FBS2xDLFNBTmQ7QUFPRSwwQkFBVSxLQUFLZ0IsWUFQakI7QUFRRSwrSEFBNEdKLFdBQVdaLFNBQVgsQ0FBcUJxQixLQUFyQixJQUE4QixFQUExSTtBQVJGLGdCQU5GO0FBZ0JHVCx5QkFBV1osU0FBWCxDQUFxQnVCO0FBaEJ4QjtBQUZGLFdBNUNGO0FBaUVFO0FBQUE7QUFBQSxjQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSxnQkFBTyxTQUFRLGVBQWY7QUFBQTtBQUFBLGFBREY7QUFJRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSxhQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUscUJBQWY7QUFDRTtBQUFBO0FBQUEsb0JBQU0sV0FBVSxpR0FBaEIsRUFBa0gsSUFBRyxVQUFySDtBQUNFLGdEQUFDLGlDQUFELElBQWlCLE1BQUssV0FBdEI7QUFERjtBQURGLGVBREY7QUFNRTtBQUNFLHNCQUFLLE1BRFA7QUFFRSw4QkFBYSxVQUZmO0FBR0UsK0hBQTRHWCxXQUFXWCxRQUFYLENBQW9Cb0IsS0FBcEIsSUFBNkIsRUFBekksQ0FIRjtBQUlFLHNCQUFLLFVBSlA7QUFLRSxvQ0FBaUIsVUFMbkI7QUFNRSxvQkFBRyxlQU5MO0FBT0UsNkJBQVksV0FQZDtBQVFFLHVCQUFPYSxLQUFLakMsUUFSZDtBQVNFLDBCQUFVLEtBQUtlO0FBVGpCLGdCQU5GO0FBaUJHSix5QkFBV1gsUUFBWCxDQUFvQnNCO0FBakJ2QjtBQUpGO0FBakVGLFNBREY7QUE0RkQ7O0FBRUQsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFdBQWY7QUFDRTtBQUFBO0FBQUEsWUFBSyxXQUFVLCtCQUFmO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSw2Q0FBZjtBQUNFO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGdCQUFmO0FBQ0U7QUFBQTtBQUFBLGtCQUFLLFdBQVUsV0FBZjtBQUNFO0FBQUE7QUFBQSxvQkFBSyxXQUFVLDRCQUFmO0FBQ0UseURBQUssS0FBUWpNLE9BQU8wQixHQUFmLHFCQUFMLEVBQTJDLEtBQUksUUFBL0MsRUFBd0QsUUFBTyxJQUEvRCxFQUFvRSxXQUFVLE1BQTlFO0FBREYsaUJBREY7QUFJRTtBQUFBO0FBQUEsb0JBQU0sVUFBVSxLQUFLZ00sWUFBckIsRUFBbUMsSUFBRyxTQUF0QyxFQUFnRCxXQUFVLFlBQTFEO0FBQ0U7QUFBQTtBQUFBLHNCQUFLLFdBQVUsWUFBZjtBQUNFO0FBQUE7QUFBQSx3QkFBTyxTQUFRLFlBQWY7QUFBQTtBQUFBLHFCQURGO0FBRUU7QUFBQTtBQUFBLHdCQUFLLFdBQVUsYUFBZjtBQUNFO0FBQUE7QUFBQSwwQkFBSyxXQUFVLHFCQUFmO0FBQ0U7QUFBQTtBQUFBLDRCQUFNLFdBQVUsaUdBQWhCLEVBQWtILElBQUcsY0FBckg7QUFDRSx3REFBQyxpQ0FBRCxJQUFpQixNQUFLLFVBQXRCO0FBREY7QUFERix1QkFERjtBQU1FO0FBQ0UsOEJBQUssT0FEUDtBQUVFLDhCQUFLLE9BRlA7QUFHRSwrQkFBT2QsS0FBS2hDLEtBSGQ7QUFJRSw0QkFBRyxZQUpMO0FBS0Usc0NBQWEsT0FMZjtBQU1FLDRDQUFpQixpQkFObkI7QUFPRSxxQ0FBWSxhQVBkO0FBUUUsa0NBQVUsS0FBS2MsWUFSakI7QUFTRSx1SUFBNEdKLFdBQVdWLEtBQVgsQ0FBaUJtQixLQUFqQixJQUEwQixFQUF0STtBQVRGLHdCQU5GO0FBaUJHVCxpQ0FBV1YsS0FBWCxDQUFpQnFCO0FBakJwQjtBQUZGLG1CQURGO0FBd0JFO0FBQUE7QUFBQSxzQkFBSyxXQUFVLFlBQWY7QUFDRTtBQUFBO0FBQUEsd0JBQU8sU0FBUSxlQUFmO0FBQUE7QUFBQSxxQkFERjtBQUVFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLGFBQWY7QUFDRTtBQUFBO0FBQUEsMEJBQUssV0FBVSxxQkFBZjtBQUNFO0FBQUE7QUFBQSw0QkFBTSxXQUFVLGlHQUFoQixFQUFrSCxJQUFHLGVBQXJIO0FBQ0Usd0RBQUMsaUNBQUQsSUFBaUIsTUFBSyxRQUF0QjtBQURGO0FBREYsdUJBREY7QUFNRTtBQUNFLDhCQUFLLFVBRFA7QUFFRSw4QkFBSyxVQUZQO0FBR0UsK0JBQU9XLEtBQUs1USxRQUhkO0FBSUUsNEJBQUcsZUFKTDtBQUtFLHFDQUFZLFVBTGQ7QUFNRSw0Q0FBaUIsZUFObkI7QUFPRSxrQ0FBVSxLQUFLMFAsWUFQakI7QUFRRSxzQ0FBYSxrQkFSZjtBQVNFLHVJQUE0R0osV0FBV3RQLFFBQVgsQ0FBb0IrUCxLQUFwQixJQUE2QixFQUF6STtBQVRGLHdCQU5GO0FBaUJHVCxpQ0FBV3RQLFFBQVgsQ0FBb0JpUTtBQWpCdkI7QUFGRixtQkF4QkY7QUErQ0d3QiwrQkEvQ0g7QUFpREU7QUFBQTtBQUFBLHNCQUFLLFdBQVUsS0FBZjtBQUNFO0FBQUE7QUFBQSx3QkFBSyxXQUFVLG1CQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0UscUNBQVUsY0FEWjtBQUVFLG1DQUFTLEtBQUtYLFVBRmhCO0FBR0UsZ0NBQUs7QUFIUDtBQUtHVTtBQUxIO0FBREY7QUFERixtQkFqREY7QUE2REU7QUFBQTtBQUFBO0FBQ0UsNEJBQUssUUFEUDtBQUVFLGlDQUFVLHdCQUZaO0FBR0UsK0JBQVMsS0FBS3ZSLGFBSGhCO0FBSUUsZ0NBQVVlO0FBSlo7QUFNRTtBQUNFLG9FQUEyQ0EsVUFBVSxFQUFWLEdBQWUsUUFBMUQsQ0FERjtBQUVFLDRCQUFLLFFBRlA7QUFHRSxxQ0FBWTtBQUhkLHNCQU5GO0FBV0d1UTtBQVhIO0FBN0RGLGlCQUpGO0FBK0VFO0FBQUE7QUFBQTtBQUNFLCtCQUFVLHdFQURaO0FBRUUsMEJBQUs7QUFGUDtBQUlFO0FBQUE7QUFBQSxzQkFBRyxXQUFVLG9CQUFiO0FBQ0Usa0RBQUMsaUNBQUQsSUFBaUIsTUFBTSxDQUFDLEtBQUQsRUFBUSxRQUFSLENBQXZCO0FBREYsbUJBSkY7QUFBQTtBQUFBLGlCQS9FRjtBQXdGRTtBQUFBO0FBQUE7QUFDRSwrQkFBVSw2REFEWjtBQUVFLDBCQUFLO0FBRlA7QUFJRTtBQUFBO0FBQUEsc0JBQUcsV0FBVSxvQkFBYjtBQUNFLGtEQUFDLGlDQUFELElBQWlCLE1BQU0sQ0FBQyxLQUFELEVBQVEsVUFBUixDQUF2QjtBQURGLG1CQUpGO0FBQUE7QUFBQTtBQXhGRjtBQURGO0FBREY7QUFERjtBQURGLE9BREY7QUE0R0Q7Ozs7RUE1VitCckIsZ0I7O2tCQUFiL1IsSTs7O0FBK1ZyQkEsS0FBS0ssU0FBTCxHQUFpQjtBQUNmZ0MsZUFBYS9CLG9CQUFVb0ssSUFBVixDQUFlaks7QUFEYixDQUFqQixDOzs7Ozs7Ozs7OztBQ3JXQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7Ozs7QUFDQTs7QUFDQTs7QUFDQTs7OztBQUVBLElBQU11UixrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FBVTtBQUNoQ25QLGFBQVNtTyxNQUFNaUIsTUFBTixDQUFhcFAsT0FEVTtBQUVoQ3NKLGdCQUFZNkUsTUFBTXdDLFFBQU4sQ0FBZXJIO0FBRkssR0FBVjtBQUFBLENBQXhCOztBQUtBLElBQU1nRyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQWE7QUFDdENyUSxtQkFBZSx1QkFBQ1QsSUFBRCxFQUFPVSxHQUFQO0FBQUEsYUFBZWYsU0FBUyx5QkFBY0ssSUFBZCxFQUFvQlUsR0FBcEIsQ0FBVCxDQUFmO0FBQUEsS0FEdUI7QUFFdENNLGlCQUFhO0FBQUEsYUFBV3JCLFNBQVMseUJBQVksRUFBRVUsTUFBTSxRQUFSLEVBQWtCQyxnQkFBbEIsRUFBWixDQUFULENBQVg7QUFBQTtBQUZ5QixHQUFiO0FBQUEsQ0FBM0I7O2tCQUtlLHlCQUNicVEsZUFEYSxFQUViRyxrQkFGYSxFQUdiblMsY0FIYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCZjs7OztBQUNBOzs7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBT3FCRCxROzs7QUFDbkIsb0JBQVkwSixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtnSyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JqQyxJQUFoQixPQUFsQjtBQUNBLFVBQUsvTSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBYytNLElBQWQsT0FBaEI7QUFKaUI7QUFLbEI7Ozs7d0NBRW1CO0FBQUEsbUJBQ3lCLEtBQUsvSCxLQUQ5QjtBQUFBLFVBQ1Z4RSxTQURVLFVBQ1ZBLFNBRFU7QUFBQSxVQUNDbkMsWUFERCxVQUNDQSxZQUREO0FBQUEsVUFDZTZPLEtBRGYsVUFDZUEsS0FEZjtBQUFBLFVBRVY3RyxJQUZVLEdBRUQ2RyxLQUZDLENBRVY3RyxJQUZVOzs7QUFJbEI3Rjs7QUFFQSxVQUFJLENBQUMsY0FBRCxFQUFpQixjQUFqQixFQUFpQ2lFLE9BQWpDLENBQXlDNEIsSUFBekMsTUFBbUQsQ0FBQyxDQUF4RCxFQUEyRDtBQUN6RCxhQUFLckcsUUFBTCxDQUFjLEVBQUVDLE9BQU8sUUFBVCxFQUFtQlIsT0FBTzRHLEtBQUtkLE9BQUwsQ0FBYSxHQUFiLEVBQWtCLEVBQWxCLENBQTFCLEVBQWQ7QUFDQWxILHFCQUFhLEtBQWI7QUFDRCxPQUhELE1BR087QUFDTCxhQUFLMlEsVUFBTDtBQUNEO0FBQ0Y7Ozs2QkFFUTVQLEssRUFBTztBQUFBLFVBQ05ZLFFBRE0sR0FDTyxLQUFLZ0YsS0FEWixDQUNOaEYsUUFETTs7QUFFZEEsZUFBU1osS0FBVCxFQUFnQjFDLElBQWhCLENBQXFCLEtBQUtzUyxVQUExQjtBQUNEOzs7aUNBRVk7QUFBQSxvQkFDa0IsS0FBS2hLLEtBRHZCO0FBQUEsVUFDSDdGLFNBREcsV0FDSEEsU0FERztBQUFBLFVBQ1FDLEtBRFIsV0FDUUEsS0FEUjs7QUFFWEQsZ0JBQVVDLEtBQVY7QUFDRDs7OzZCQUVRO0FBQUEsb0JBVUgsS0FBSzRGLEtBVkY7QUFBQSxVQUVMcEcsTUFGSyxXQUVMQSxNQUZLO0FBQUEsVUFHTHZDLElBSEssV0FHTEEsSUFISztBQUFBLFVBSUxxTCxVQUpLLFdBSUxBLFVBSks7QUFBQSxVQUtMdEosT0FMSyxXQUtMQSxPQUxLO0FBQUEsVUFNTG1DLE1BTkssV0FNTEEsTUFOSztBQUFBLFVBT0xuQixLQVBLLFdBT0xBLEtBUEs7QUFBQSxVQVFMM0IsUUFSSyxXQVFMQSxRQVJLO0FBQUEsVUFTTHdSLFVBVEssV0FTTEEsVUFUSzs7O0FBWVAsYUFDRTtBQUFDLHVCQUFEO0FBQUE7QUFDRSxzQ0FBQyxnQkFBRCxJQUFRLFlBQVl2SCxVQUFwQixFQUFnQyxNQUFNckwsSUFBdEMsRUFBNEMsVUFBVW9CLFNBQVN5UixRQUEvRCxHQURGO0FBRUU7QUFBQTtBQUFBLFlBQUssV0FBVSxpQkFBZjtBQUNFLHdDQUFDLGdCQUFELElBQVEsTUFBTUQsVUFBZCxFQUEwQixRQUFRMU8sTUFBbEMsRUFBMEMsVUFBVSxLQUFLUCxRQUF6RCxFQUFtRSxPQUFPWixLQUExRSxHQURGO0FBRUUsd0NBQUMsbUJBQUQsSUFBVyxRQUFRUixNQUFuQixFQUEyQixJQUFHLE1BQTlCLEdBRkY7QUFHRTtBQUFBO0FBQUEsY0FBSyxXQUFVLG1DQUFmO0FBQ0U7QUFBQTtBQUFBO0FBQ0Usc0JBQUssUUFEUDtBQUVFLHlCQUFTLEtBQUtvUSxVQUZoQjtBQUdFLDhEQUEyQzVRLFVBQVUsUUFBVixHQUFxQixTQUFoRTtBQUhGO0FBQUE7QUFBQSxhQURGO0FBUUUsMENBQUMsaUJBQUQsSUFBUyxNQUFNQSxPQUFmLEVBQXdCLE1BQUssSUFBN0I7QUFSRjtBQUhGLFNBRkY7QUFnQkUsc0NBQUMsZ0JBQUQ7QUFoQkYsT0FERjtBQW9CRDs7OztFQWhFbUNrUCxnQjs7a0JBQWpCaFMsUTs7O0FBbUVyQkEsU0FBU3lILFlBQVQsR0FBd0I7QUFDdEIyRSxjQUFZLEtBRFU7QUFFdEJ1SCxjQUFZLElBRlU7QUFHdEI1UyxRQUFNO0FBSGdCLENBQXhCOztBQU1BZixTQUFTTSxTQUFULEdBQXFCO0FBQ25CdUQsYUFBV3RELG9CQUFVb0ssSUFBVixDQUFlakssVUFEUDtBQUVuQndFLGFBQVczRSxvQkFBVW9LLElBQVYsQ0FBZWpLLFVBRlA7QUFHbkJnRSxZQUFVbkUsb0JBQVVvSyxJQUFWLENBQWVqSyxVQUhOO0FBSW5CcUMsZ0JBQWN4QyxvQkFBVW9LLElBQVYsQ0FBZWpLLFVBSlY7QUFLbkJvQyxXQUFTdkMsb0JBQVVxSyxJQUFWLENBQWVsSyxVQUxMO0FBTW5CMEwsY0FBWTdMLG9CQUFVcUssSUFOSDtBQU9uQitJLGNBQVlwVCxvQkFBVXFLLElBUEg7QUFRbkI3SixRQUFNeUwscUJBUmE7QUFTbkJsSixVQUFRL0Msb0JBQVU0RyxPQUFWLENBQWtCeUIsc0JBQWxCLEVBQThCbEksVUFUbkI7QUFVbkJ1RSxVQUFRMUUsb0JBQVU0RyxPQUFWLENBQWtCc0Qsc0JBQWxCLEVBQThCL0osVUFWbkI7QUFXbkJvRCxTQUFPNEcsd0JBQVloSztBQVhBLENBQXJCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGQTs7QUFFQTs7OztBQUNBOztBQUNBOzs7O0FBTUEsSUFBTXVSLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFVO0FBQ2hDblAsYUFBU21PLE1BQU1pQixNQUFOLENBQWFwUCxPQURVO0FBRWhDL0IsVUFBTWtRLE1BQU13QyxRQUFOLENBQWUxUyxJQUZXO0FBR2hDK0MsV0FBT21OLE1BQU13QyxRQUFOLENBQWUzUCxLQUhVO0FBSWhDc0ksZ0JBQVk2RSxNQUFNd0MsUUFBTixDQUFlckgsVUFKSztBQUtoQzlJLFlBQVEyTixNQUFNd0MsUUFBTixDQUFlblEsTUFMUztBQU1oQzJCLFlBQVFnTSxNQUFNd0MsUUFBTixDQUFleE8sTUFOUztBQU9oQzBPLGdCQUFZMUMsTUFBTWlCLE1BQU4sQ0FBYXlCO0FBUE8sR0FBVjtBQUFBLENBQXhCOztBQVVBLElBQU12QixxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQWE7QUFDdEN2TyxlQUFXO0FBQUEsYUFBUzVDLFNBQVMseUJBQVU2QyxLQUFWLENBQVQsQ0FBVDtBQUFBLEtBRDJCO0FBRXRDWSxjQUFVO0FBQUEsYUFBU3pELFNBQVMsd0JBQVM2QyxLQUFULENBQVQsQ0FBVDtBQUFBLEtBRjRCO0FBR3RDb0IsZUFBVztBQUFBLGFBQU1qRSxTQUFTLDBCQUFULENBQU47QUFBQSxLQUgyQjtBQUl0QzhCLGtCQUFjO0FBQUEsYUFBUTlCLFNBQVMsMEJBQWEwSSxJQUFiLENBQVQsQ0FBUjtBQUFBO0FBSndCLEdBQWI7QUFBQSxDQUEzQjs7a0JBT2UseUJBQ2JzSSxlQURhLEVBRWJHLGtCQUZhLEVBR2JwUyxrQkFIYSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNCZjs7OztBQUNBOzs7O0FBQ0E7O0FBRUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUVxQkcsSzs7O0FBQ25CLGlCQUFZdUosS0FBWixFQUFtQjtBQUFBOztBQUFBLDhHQUNYQSxLQURXOztBQUVqQixVQUFLdUgsS0FBTCxHQUFhO0FBQ1hoTCxZQUFNLEVBREs7QUFFWG5DLGFBQU87QUFDTE4sY0FBTSxDQUREO0FBRUxtQyxlQUFPO0FBRkY7QUFGSSxLQUFiOztBQVFBLFVBQUtqQixRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBYytNLElBQWQsT0FBaEI7QUFDQSxVQUFLb0MsUUFBTCxHQUFnQixNQUFLQSxRQUFMLENBQWNwQyxJQUFkLE9BQWhCO0FBQ0EsVUFBS3FDLFdBQUwsR0FBbUIsTUFBS0EsV0FBTCxDQUFpQnJDLElBQWpCLE9BQW5CO0FBQ0EsVUFBS3NDLE1BQUwsR0FBYyxNQUFLQSxNQUFMLENBQVl0QyxJQUFaLE9BQWQ7QUFiaUI7QUFjbEI7Ozs7d0NBRW1CO0FBQ2xCLFdBQUtvQyxRQUFMO0FBQ0Q7Ozs2QkFFUS9QLEssRUFBTztBQUNkLFdBQUs2TixRQUFMLENBQWM7QUFBQSxlQUFjO0FBQzFCN04saUJBQU9yRCxPQUFPdVQsTUFBUCxDQUFjWixVQUFVdFAsS0FBeEIsRUFBK0JBLEtBQS9CO0FBRG1CLFNBQWQ7QUFBQSxPQUFkLEVBRUksS0FBSytQLFFBRlQ7QUFHRDs7OytCQUVVO0FBQUEsVUFDRHpPLG9CQURDLEdBQ3dCLEtBQUtzRSxLQUQ3QixDQUNEdEUsb0JBREM7QUFBQSxVQUVEdEIsS0FGQyxHQUVTLEtBQUttTixLQUZkLENBRURuTixLQUZDOztBQUdUc0IsMkJBQXFCdEIsS0FBckI7QUFDRDs7OzZCQUVRO0FBQ1AsV0FBSzZOLFFBQUwsQ0FBYyxFQUFFMUwsTUFBTSxFQUFSLEVBQWQ7QUFDQSxXQUFLNk4sV0FBTDtBQUNEOzs7a0NBRWE7QUFDWixXQUFLbkMsUUFBTCxDQUFjO0FBQUEsZUFBYztBQUMxQnNDLHFCQUFXLENBQUNiLFVBQVVhO0FBREksU0FBZDtBQUFBLE9BQWQ7QUFHRDs7OzZCQUVRO0FBQUEsbUJBQ3NCLEtBQUtoRCxLQUQzQjtBQUFBLFVBQ0NuTixLQURELFVBQ0NBLEtBREQ7QUFBQSxVQUNRbVEsU0FEUixVQUNRQSxTQURSO0FBQUEsbUJBU0gsS0FBS3ZLLEtBVEY7QUFBQSxVQUdMa0ksS0FISyxVQUdMQSxLQUhLO0FBQUEsVUFJTDdRLElBSkssVUFJTEEsSUFKSztBQUFBLFVBS0wyQixXQUxLLFVBS0xBLFdBTEs7QUFBQSxVQU1MaUIsS0FOSyxVQU1MQSxLQU5LO0FBQUEsVUFPTHVRLFdBUEssVUFPTEEsV0FQSztBQUFBLFVBUUx6TyxLQVJLLFVBUUxBLEtBUks7OztBQVdQLGFBQ0U7QUFBQyx1QkFBRDtBQUFBO0FBQ0Usc0NBQUMsZ0JBQUQsSUFBUSxNQUFNMUUsSUFBZCxHQURGO0FBRUU7QUFBQyxvQ0FBRDtBQUFBLFlBQWtCLE1BQU1BLElBQXhCLEVBQThCLE1BQU02USxNQUFNN0csSUFBMUMsRUFBZ0QsYUFBYXJJLFdBQTdEO0FBQ0U7QUFBQTtBQUFBLGNBQUssV0FBVSxVQUFmO0FBQ0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsZ0NBQWY7QUFDRTtBQUFBO0FBQUEsa0JBQVEsV0FBVSx5QkFBbEIsRUFBNEMsTUFBSyxRQUFqRCxFQUEwRCxTQUFTLEtBQUtxUixNQUF4RTtBQUNFLDhDQUFDLGlDQUFELElBQWlCLE1BQUssYUFBdEIsR0FERjtBQUFBO0FBQUE7QUFERjtBQURGLFdBREY7QUFRRSx3Q0FBQyxtQkFBRDtBQUNFLG1CQUFNLFVBRFI7QUFFRSxrQkFBTXRPLEtBRlI7QUFHRSxvQkFBUXlPLFdBSFY7QUFJRSx3QkFBWTtBQUNWdlEsMEJBRFU7QUFFVkgsb0JBQU1NLE1BQU1OLElBRkY7QUFHVm1DLHFCQUFPN0IsTUFBTTZCLEtBSEg7QUFJVm9ILDJCQUFhLENBSkg7QUFLVk8sMEJBQVksS0FBSzVJO0FBTFA7QUFKZDtBQVJGLFNBRkY7QUF1QkU7QUFBQyx5QkFBRDtBQUFBLFlBQU8sTUFBTXVQLFNBQWIsRUFBd0IsT0FBTSxhQUE5QixFQUE0QyxRQUFRLEtBQUtILFdBQXpEO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBdkJGLE9BREY7QUE2QkQ7Ozs7RUFwRmdDOUIsZ0I7O2tCQUFkN1IsSzs7O0FBdUZyQkEsTUFBTXNILFlBQU4sR0FBcUI7QUFDbkI5RCxTQUFPO0FBRFksQ0FBckI7O0FBSUF4RCxNQUFNRyxTQUFOLEdBQWtCO0FBQ2hCOEUsd0JBQXNCN0Usb0JBQVVvSyxJQUFWLENBQWVqSyxVQURyQjtBQUVoQmdDLGVBQWFuQyxvQkFBVXFLLElBQVYsQ0FBZWxLLFVBRlo7QUFHaEJpRCxTQUFPcEQsb0JBQVV3TDtBQUhELENBQWxCLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BHQTs7QUFFQTs7QUFDQTs7Ozs7O0FBRUEsSUFBTWtHLGtCQUFrQixTQUFsQkEsZUFBa0I7QUFBQSxTQUFVO0FBQ2hDeE0sV0FBT3dMLE1BQU14TCxLQUFOLENBQVlBLEtBRGE7QUFFaEM5QixXQUFPc04sTUFBTXhMLEtBQU4sQ0FBWTlCLEtBRmE7QUFHaEN1USxpQkFBYWpELE1BQU14TCxLQUFOLENBQVl5TyxXQUhPO0FBSWhDeFIsaUJBQWF1TyxNQUFNaUIsTUFBTixDQUFheFAsV0FKTTtBQUtoQ0ksYUFBU21PLE1BQU1pQixNQUFOLENBQWFwUCxPQUxVO0FBTWhDL0IsVUFBTWtRLE1BQU1rQixPQUFOLENBQWNwUjtBQU5ZLEdBQVY7QUFBQSxDQUF4Qjs7QUFTQSxJQUFNcVIscUJBQXFCLFNBQXJCQSxrQkFBcUI7QUFBQSxTQUFhO0FBQ3RDaE4sMEJBQXNCO0FBQUEsYUFBU25FLFNBQVMsaUNBQXFCNkMsS0FBckIsQ0FBVCxDQUFUO0FBQUE7QUFEZ0IsR0FBYjtBQUFBLENBQTNCOztrQkFJZSx5QkFDYm1PLGVBRGEsRUFFYkcsa0JBRmEsRUFHYmpTLGVBSGEsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmY7Ozs7QUFDQTs7OztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozt3Q0FDQztBQUFBLG1CQUNnQixLQUFLc0osS0FEckI7QUFBQSxVQUNWbEQsY0FEVSxVQUNWQSxjQURVO0FBQUEsVUFDTW9MLEtBRE4sVUFDTUEsS0FETjs7QUFFbEJwTCxxQkFBZW9MLE1BQU11QyxNQUFOLENBQWF6UyxFQUE1QjtBQUNEOzs7NkJBRVE7QUFBQSxvQkFDOEIsS0FBS2dJLEtBRG5DO0FBQUEsVUFDQ25ELE1BREQsV0FDQ0EsTUFERDtBQUFBLFVBQ1N4RixJQURULFdBQ1NBLElBRFQ7QUFBQSxVQUNlcUwsVUFEZixXQUNlQSxVQURmOzs7QUFHUCxVQUFJLENBQUM3RixNQUFMLEVBQWE7QUFDWCxlQUNFO0FBQUMseUJBQUQ7QUFBQTtBQUNFLHdDQUFDLGdCQUFELElBQVEsWUFBWTZGLFVBQXBCLEVBQWdDLE1BQU1yTCxJQUF0QyxHQURGO0FBRUUsd0NBQUMscUJBQUQsSUFBYSxVQUFiLEVBQWtCLE9BQU0sTUFBeEI7QUFGRixTQURGO0FBTUQ7O0FBRUQsVUFBTXFULFFBQVE3TixPQUFPOE4sTUFBUCxDQUFjOVAsTUFBZCxHQUF1QixDQUF2QixHQUNWLDhCQUFDLGVBQUQsSUFBTyxVQUFVZ0MsT0FBTzhOLE1BQVAsQ0FBYyxDQUFkLEVBQWlCckssR0FBbEMsR0FEVSxHQUVWLElBRko7O0FBSUEsYUFDRTtBQUFBO0FBQUE7QUFDRSxzQ0FBQyxnQkFBRCxJQUFRLFlBQVlvQyxVQUFwQixFQUFnQyxNQUFNckwsSUFBdEMsR0FERjtBQUVFO0FBQUE7QUFBQSxZQUFLLFdBQVUsc0JBQWY7QUFDRTtBQUFBO0FBQUEsY0FBSyxXQUFVLEtBQWY7QUFDRTtBQUFBO0FBQUEsZ0JBQUssV0FBVSwwQkFBZjtBQUNFLHFEQUFLLFdBQVUsZ0JBQWYsRUFBZ0MsS0FBS3dGLE9BQU8rTixVQUE1QyxFQUF3RCxLQUFLL04sT0FBTzhFLEtBQXBFLEdBREY7QUFFRSw0Q0FBQyxxQkFBRCxJQUFhLFdBQVc5RSxPQUFPZ08sb0JBQS9CO0FBRkYsYUFERjtBQU1FO0FBQUE7QUFBQSxnQkFBSyxXQUFVLGdDQUFmO0FBQ0dILG1CQURIO0FBRUUsNENBQUMscUJBQUQsSUFBYSxPQUFPN04sTUFBcEI7QUFGRixhQU5GO0FBV0U7QUFBQTtBQUFBLGdCQUFLLFdBQVUsK0JBQWY7QUFDRSw0Q0FBQyxrQkFBRCxJQUFVLE9BQU9BLE9BQU9pTyxPQUFQLENBQWVDLElBQWhDO0FBREY7QUFYRjtBQURGO0FBRkYsT0FERjtBQXNCRDs7OztFQTVDZ0N6QyxnQjs7a0JBQWQ1UixLOzs7QUErQ3JCQSxNQUFNcUgsWUFBTixHQUFxQjtBQUNuQjJFLGNBQVk7QUFETyxDQUFyQjs7QUFJQWhNLE1BQU1FLFNBQU4sR0FBa0I7QUFDaEJrRyxrQkFBZ0JqRyxvQkFBVW9LLElBQVYsQ0FBZWpLLFVBRGY7QUFFaEI2RixVQUFRaEcsb0JBQVVDLFVBQVYsQ0FBcUJDLE1BQXJCLEVBQTZCQyxVQUZyQjtBQUdoQmtSLFNBQU9yUixvQkFBVUMsVUFBVixDQUFxQkMsTUFBckIsRUFBNkJDLFVBSHBCO0FBSWhCSyxRQUFNeUwsc0JBQVU5TCxVQUpBO0FBS2hCMEwsY0FBWTdMLG9CQUFVcUs7QUFMTixDQUFsQixDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5REE7O0FBQ0E7Ozs7QUFDQTs7OztBQUVBLElBQU1xSCxrQkFBa0IsU0FBbEJBLGVBQWtCO0FBQUEsU0FBVTtBQUNoQzFMLFlBQVEwSyxNQUFNbEosS0FBTixDQUFZeEIsTUFEWTtBQUVoQ3hGLFVBQU1rUSxNQUFNd0MsUUFBTixDQUFlMVMsSUFGVztBQUdoQ3FMLGdCQUFZNkUsTUFBTXdDLFFBQU4sQ0FBZXJIO0FBSEssR0FBVjtBQUFBLENBQXhCOztBQU1BLElBQU1nRyxxQkFBcUIsU0FBckJBLGtCQUFxQjtBQUFBLFNBQWE7QUFDdEM1TCxvQkFBZ0I7QUFBQSxhQUFNdkYsU0FBUywyQkFBZVMsRUFBZixDQUFULENBQU47QUFBQTtBQURzQixHQUFiO0FBQUEsQ0FBM0I7O2tCQUllLHlCQUNidVEsZUFEYSxFQUViRyxrQkFGYSxFQUdiaFMsZUFIYSxDOzs7Ozs7Ozs7Ozs7OztBQ2RmOzs7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7QUFFQSw2QixDQUFlOztBQUVmLElBQU1MLFFBQVEsK0JBQWQ7O0FBRUEsc0JBQ0UsOEJBQUMsY0FBRCxJQUFNLE9BQU9BLEtBQWIsR0FERixFQUVFZ1QsU0FBUzJCLGNBQVQsQ0FBd0IsS0FBeEIsQ0FGRixFOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNQd0J2QyxPOztBQU54Qjs7QUFFQSxJQUFNd0MsZUFBZTtBQUNuQjVULFFBQU07QUFEYSxDQUFyQjs7QUFJZSxTQUFTb1IsT0FBVCxHQUErQztBQUFBLE1BQTlCbEIsS0FBOEIsdUVBQXRCMEQsWUFBc0I7QUFBQSxNQUFSQyxNQUFROztBQUM1RCxVQUFRQSxPQUFPaFUsSUFBZjtBQUNFLFNBQUtDLCtCQUFMO0FBQ0UsYUFBT0osT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUJsUSxjQUFNNlQsT0FBTzlULE9BQVAsQ0FBZUM7QUFEUyxPQUF6QixDQUFQOztBQUlGO0FBQ0UsYUFBT2tRLEtBQVA7QUFQSjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ0N1QmlCLE07O0FBakJ4Qjs7QUFRQSxJQUFNeUMsZUFBZTtBQUNuQnBDLGFBQVcsS0FEUTtBQUVuQkMsZ0JBQWMsSUFGSztBQUduQkMsYUFBVyxNQUhRO0FBSW5CL1AsZUFBYSxJQUpNO0FBS25CSSxXQUFTLEtBTFU7QUFNbkI2USxjQUFZO0FBTk8sQ0FBckI7O0FBU2UsU0FBU3pCLE1BQVQsR0FBOEM7QUFBQSxNQUE5QmpCLEtBQThCLHVFQUF0QjBELFlBQXNCO0FBQUEsTUFBUkMsTUFBUTs7QUFDM0QsVUFBUUEsT0FBT2hVLElBQWY7QUFDRSxTQUFLMkIseUJBQUw7QUFDRSxhQUFPOUIsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUJzQixtQkFBVyxDQUFDdEIsTUFBTXNCLFNBRFk7QUFFOUJDLHNCQUFjb0MsT0FBT2hULE9BRlM7QUFHOUI2USxtQkFBV21DLE9BQU9qVDtBQUhZLE9BQXpCLENBQVA7O0FBTUYsU0FBS2Msb0NBQUw7QUFDRSxhQUFPaEMsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUJ2TyxxQkFBYWtTLE9BQU9sUztBQURVLE9BQXpCLENBQVA7O0FBSUYsU0FBS0csK0JBQUw7QUFDRSxhQUFPcEMsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUJuTyxpQkFBUzhSLE9BQU85UjtBQURjLE9BQXpCLENBQVA7O0FBSUYsU0FBS0UsMEJBQUw7QUFDRSxhQUFPdkMsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUIwQyxvQkFBWSxDQUFDMUMsTUFBTTBDO0FBRFcsT0FBekIsQ0FBUDs7QUFJRixTQUFLelEsK0JBQUw7QUFDRSxhQUFPekMsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUI0RCx3QkFBZ0JELE9BQU85VDtBQURPLE9BQXpCLENBQVA7O0FBSUY7QUFDRSxhQUFPbVEsS0FBUDtBQTdCSjtBQStCRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNuQnVCd0MsUTs7QUE5QnhCOztBQUNBOzs7Ozs7OztBQUVBLElBQU0xUyxPQUFPO0FBQ1hXLE1BQUltRSxpQkFBTzFFLEdBQVAsQ0FBVyxTQUFYLENBRE87QUFFWG9MLFlBQVUxRyxpQkFBTzFFLEdBQVAsQ0FBVyxVQUFYLENBRkM7QUFHWDJULGFBQVdqUCxpQkFBTzFFLEdBQVAsQ0FBVyxpQkFBWCxDQUhBO0FBSVhzUCxZQUFVNUssaUJBQU8xRSxHQUFQLENBQVcsZ0JBQVgsQ0FKQztBQUtYdVAsU0FBTzdLLGlCQUFPMUUsR0FBUCxDQUFXLFlBQVg7QUFMSSxDQUFiOztBQVFBLElBQU13VCxlQUFlO0FBQ25CNVQsWUFEbUI7QUFFbkJrRSxVQUFRLEVBRlc7QUFHbkIzQixVQUFRLEVBSFc7QUFJbkJLLFNBQU8sQ0FKWTtBQUtuQnNKLGFBQVcsQ0FMUTtBQU1uQm5KLFNBQU87QUFDTE4sVUFBTSxDQUREO0FBRUxzRixZQUFRLGlCQUZIO0FBR0xnRyxZQUFRLElBSEg7QUFJTHhFLGdCQUFZLElBSlA7QUFLTEQsZ0JBQVksRUFMUDtBQU1McEMsVUFBTSxJQU5EO0FBT0w0SSxXQUFPLEVBUEY7QUFRTDlKLFdBQU87QUFSRixHQU5ZO0FBZ0JuQnFGLGNBQVksQ0FBQyxDQUFDckwsS0FBSzJQO0FBaEJBLENBQXJCOztBQW1CZSxTQUFTK0MsUUFBVCxHQUFnRDtBQUFBLE1BQTlCeEMsS0FBOEIsdUVBQXRCMEQsWUFBc0I7QUFBQSxNQUFSQyxNQUFROztBQUM3RCxVQUFRQSxPQUFPaFUsSUFBZjtBQUNFLFNBQUt5Qyx1QkFBTDtBQUNFLGFBQU81QyxPQUFPdVQsTUFBUCxDQUFjLEVBQWQsRUFBa0IvQyxLQUFsQixFQUF5QjtBQUM5QjNOLGdCQUFRMk4sTUFBTTNOLE1BQU4sQ0FBYXlSLE1BQWIsQ0FBb0JILE9BQU90UixNQUEzQixDQURzQjtBQUU5QkssZUFBT2lSLE9BQU9qUixLQUZnQjtBQUc5QkYsb0JBQVltUixPQUFPblIsVUFIVztBQUk5QkssZUFBT3JELE9BQU91VCxNQUFQLENBQWMsRUFBZCxFQUFrQi9DLE1BQU1uTixLQUF4QixFQUErQjtBQUNwQ04sZ0JBQU1vUixPQUFPcFI7QUFEdUIsU0FBL0I7QUFKdUIsT0FBekIsQ0FBUDs7QUFTRixTQUFLd0IsdUJBQUw7QUFDRSxhQUFPdkUsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUJoTSxnQkFBUTJQLE9BQU8zUDtBQURlLE9BQXpCLENBQVA7O0FBSUYsU0FBS0wsc0JBQUw7QUFDRSxhQUFPbkUsT0FBT3VULE1BQVAsQ0FBYyxFQUFkLEVBQWtCL0MsS0FBbEIsRUFBeUI7QUFDOUIzTixnQkFBUSxFQURzQjtBQUU5QlEsZUFBT3JELE9BQU91VCxNQUFQLENBQWMsRUFBZCxFQUFrQi9DLE1BQU1uTixLQUF4QjtBQUNMTixnQkFBTTtBQURELFdBRUpvUixPQUFPalEsS0FGSCxFQUVXaVEsT0FBT3pRLEtBRmxCO0FBRnVCLE9BQXpCLENBQVA7O0FBUUY7QUFDRSxhQUFPOE0sS0FBUDtBQTFCSjtBQTRCRDs7QUFFRCw0Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBOztBQUVBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztrQkFFZSw0QkFBZ0I7QUFDN0JrQiw0QkFENkI7QUFFN0JzQiw4QkFGNkI7QUFHN0IxTCx3QkFINkI7QUFJN0J0Qyx3QkFKNkI7QUFLN0J5TTtBQUw2QixDQUFoQixDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNVU3pNLEs7O0FBbEJ4Qjs7QUFFQSxJQUFNa1AsZUFBZTtBQUNuQmxQLFNBQU8sRUFEWTtBQUVuQjlCLFNBQU8sQ0FGWTtBQUduQnVRLGVBQWEsQ0FBQztBQUNaN0ksV0FBTyxJQURLO0FBRVoxRyxXQUFPLElBRks7QUFHWnFLLFlBQVE7QUFISSxHQUFELEVBSVY7QUFDRDNELFdBQU8sTUFETjtBQUVEMUcsV0FBTztBQUZOLEdBSlUsRUFPVjtBQUNEMEcsV0FBTyxhQUROO0FBRUQxRyxXQUFPO0FBRk4sR0FQVTtBQUhNLENBQXJCOztBQWdCZSxTQUFTYyxLQUFULEdBQTZDO0FBQUEsTUFBOUJ3TCxLQUE4Qix1RUFBdEIwRCxZQUFzQjtBQUFBLE1BQVJDLE1BQVE7O0FBQzFELFVBQVFBLE9BQU9oVSxJQUFmO0FBQ0UsU0FBSzhFLHNCQUFMO0FBQ0UsYUFBT2pGLE9BQU91VCxNQUFQLENBQWMsRUFBZCxFQUFrQi9DLEtBQWxCLEVBQXlCO0FBQzlCeEwsZUFBT21QLE9BQU85VDtBQURnQixPQUF6QixDQUFQOztBQUlGO0FBQ0UsYUFBT21RLEtBQVA7QUFQSjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ3RCdUIxSyxNOztBQU54Qjs7QUFFQSxJQUFNb08sZUFBZTtBQUNuQnBPLFVBQVE7QUFEVyxDQUFyQjs7QUFJZSxTQUFTQSxNQUFULEdBQThDO0FBQUEsTUFBOUIwSyxLQUE4Qix1RUFBdEIwRCxZQUFzQjtBQUFBLE1BQVJDLE1BQVE7O0FBQzNELFVBQVFBLE9BQU9oVSxJQUFmO0FBQ0UsU0FBSzBGLDZCQUFMO0FBQ0UsYUFBTzdGLE9BQU91VCxNQUFQLENBQWMsRUFBZCxFQUFrQi9DLEtBQWxCLEVBQXlCO0FBQzlCMUssZ0JBQVFxTyxPQUFPck87QUFEZSxPQUF6QixDQUFQOztBQUlGO0FBQ0UsYUFBTzBLLEtBQVA7QUFQSjtBQVNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2tCQ1p1QitELGM7O0FBSnhCOztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVlLFNBQVNBLGNBQVQsR0FBMEI7QUFDdkMsU0FBTyx3QkFDTEMsa0JBREssRUFFTCw0QkFDRUMsb0JBREYsQ0FGSyxDQUFQO0FBTUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JDSnVCbFAsZ0I7O0FBTnhCOztBQU1lLFNBQVNBLGdCQUFULENBQTBCL0UsUUFBMUIsRUFBb0M7QUFDakQsU0FBTyxnQkFBa0I7QUFBQSxRQUFmSSxRQUFlLFFBQWZBLFFBQWU7O0FBQ3ZCLFFBQU04VCxhQUFhOVQsU0FBU3NCLE1BQTVCOztBQUVBMUIsYUFBUyxrQ0FBcUIsS0FBckIsQ0FBVDtBQUNBQSxhQUFTLDhCQUFpQixLQUFqQixDQUFUOztBQUVBLFlBQVFrVSxVQUFSO0FBQ0UsV0FBSyxHQUFMO0FBQ0VqVCxlQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUEwQjBELE9BQU9DLE1BQWpDO0FBQ0E7O0FBRUYsV0FBSyxHQUFMO0FBQ0U3RCxlQUFPQyxRQUFQLENBQWdCQyxJQUFoQixHQUEwQjBELE9BQU9DLE1BQWpDO0FBQ0E7O0FBRUY7QUFDRTlFLGlCQUNFLHlCQUFZO0FBQ1ZVLGdCQUFNLFFBREk7QUFFVkMsbUJBQVNQLFNBQVNDLElBQVQsQ0FBY007QUFGYixTQUFaLENBREY7QUFNQTtBQWhCSjtBQWtCRCxHQXhCRDtBQXlCRCxDOzs7Ozs7Ozs7Ozs7Ozs7O0FDakNELElBQU13VCxNQUFNckMsUUFBWjs7QUFFQSxJQUFNc0MsTUFBTSxTQUFOQSxHQUFNLENBQUMzTyxJQUFELEVBQU92QyxLQUFQLEVBQWlCO0FBQzNCaVIsTUFBSXZQLE1BQUosR0FBZ0JhLElBQWhCLFNBQXdCdkMsS0FBeEI7QUFDRCxDQUZEOztBQUlBLElBQU1oRCxNQUFNLFNBQU5BLEdBQU0sQ0FBQ3VGLElBQUQsRUFBVTtBQUNwQixNQUFNNE8sVUFBVUYsSUFBSXZQLE1BQUosQ0FBV2tELEtBQVgsQ0FBaUIsR0FBakIsQ0FBaEI7O0FBRUEsT0FBSyxJQUFJN0UsSUFBSSxDQUFiLEVBQWdCQSxJQUFJb1IsUUFBUS9RLE1BQTVCLEVBQW9DTCxLQUFLLENBQXpDLEVBQTRDO0FBQUEsMkJBQ2xCb1IsUUFBUXBSLENBQVIsRUFBVzZFLEtBQVgsQ0FBaUIsR0FBakIsQ0FEa0I7QUFBQTtBQUFBLFFBQ25Dd00sS0FEbUM7QUFBQSxRQUM1QkMsTUFENEI7O0FBRTFDLFFBQUlELE1BQU1FLElBQU4sT0FBaUIvTyxLQUFLK08sSUFBTCxFQUFyQixFQUFrQztBQUNoQyxhQUFPRCxNQUFQO0FBQ0Q7QUFDRjs7QUFFRCxTQUFPRSxTQUFQO0FBQ0QsQ0FYRDs7QUFhQUMsT0FBT0MsT0FBUCxHQUFpQjtBQUNmelUsVUFEZTtBQUVma1U7QUFGZSxDQUFqQixDOzs7Ozs7Ozs7Ozs7Ozs7OztrQkNnQndCUSxJOztBQW5DeEI7O0FBQ0E7O0FBMkJBOztBQU9lLFNBQVNBLElBQVQsR0FBZ0I7QUFDN0JDLDhCQUFRQyxHQUFSLENBQ0VDLHlCQURGLEVBRUVDLCtCQUZGLEVBR0VDLDZCQUhGLEVBSUVDLDJCQUpGLEVBS0VDLDhCQUxGLEVBTUVDLHdCQU5GLEVBT0VDLDhCQVBGLEVBUUVDLDJCQVJGLEVBU0VDLGlDQVRGLEVBVUVDLG1DQVZGLEVBV0VDLDhCQVhGLEVBWUVDLDRCQVpGLEVBYUVDLDZCQWJGLEVBY0VDLCtCQWRGLEVBZUVDLCtCQWZGLEVBZ0JFQyx5QkFoQkYsRUFpQkVDLHlCQWpCRixFQWtCRUMsMEJBbEJGLEVBbUJFQyw0QkFuQkYsRUFvQkVDLCtCQXBCRixFQXFCRUMsZ0NBckJGLEVBc0JFQyx3QkF0QkYsRUF1QkVDLHlCQXZCRixFQXdCRUMsMkJBeEJGLEVBeUJFQyw4QkF6QkYsRUEwQkVDLHVCQTFCRixFQTJCRUMsK0JBM0JGLEVBNEJFQyw4QkE1QkYsRUE2QkVDLCtCQTdCRjtBQStCRCxDOzs7Ozs7Ozs7Ozs7OztBQ25FRCxDQUFDLFlBQU07QUFDTCxNQUFNQyxNQUFNM1YsTUFBWjs7QUFFQTJWLE1BQUlDLE1BQUosR0FBYSxZQUFNO0FBQ2pCLFFBQU1wVixjQUFjcVEsU0FBUzJCLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7O0FBRUEsUUFBSWhTLFdBQUosRUFBaUI7QUFDZkEsa0JBQVlxVixNQUFaO0FBQ0Q7O0FBRUQsUUFBSWpTLE9BQU9rUyxHQUFQLEtBQWUsWUFBbkIsRUFBaUM7QUFDL0IsVUFBSSxtQkFBbUJDLFNBQXZCLEVBQWtDO0FBQ2hDQSxrQkFBVUMsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGO0FBQ0YsR0FaRDtBQWFELENBaEJELEk7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeFwiLFwiY29tbW9uXCIsXCJyZWFjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9jb250YWluZXJzL0Rpc2NvdmVyJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL2NvbnRhaW5lcnMvTW92aWUnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9jb250YWluZXJzL0F1dGgnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb250YWluZXJzL0FjY291bnQnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29udGFpbmVycy9MaXN0cyc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBBbGVydCBmcm9tICcuL2NvbnRhaW5lcnMvQWxlcnQnO1xuXG5jb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29taW5nLXNvb25cIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luLXRoZWF0ZXJzXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoXCIgY29tcG9uZW50PXtBdXRofSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2xpc3RzXCIgY29tcG9uZW50PXtMaXN0c30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86c2x1Zy86aWRcIiBjb21wb25lbnQ9e01vdmllfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2Utbm90LWZvdW5kXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1JvdXRlcj5cbiAgICAgIDxBbGVydCAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5Sb290LnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCBzZXRMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydCB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0QWNjb3VudERldGFpbCA9IHVzZXIgPT4gKHtcbiAgdHlwZTogU0VUX0FDQ09VTlRfREVUQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgdXNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudERldGFpbCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLmdldCgnL2FwaS9hY2NvdW50JylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoYC9hcGkvdXNlci8ke3VzZXIuaWR9YCwgdXNlcilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnQoe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLicsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gcGFzc3dvcmQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnLCBwYXNzd29yZClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0KHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlZ2lzdGVyID0gKGRhdGEsIHVybCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIC8vIFRPRE86IHNldCB1c2VyIGluZm9ybWF0aW9uIHRvIGNvbW1vbiBzdGF0ZVxuICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXG59O1xuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQWxlcnQgPSAoeyBtZXNzYWdlLCBraW5kIH0pID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9BTEVSVCxcbiAgbWVzc2FnZSxcbiAga2luZCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0UGFnZUxvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX0xPQURJTkdfU1RBVFVTLFxuICBsb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9ICgpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9GSUxURVIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFVwbG9hZGVkSW1hZ2UgPSB1cGxvYWRlZEZpbGUgPT4gKHtcbiAgdHlwZTogU0VUX1VQTE9BREVEX0lNQUdFLFxuICBwYXlsb2FkOiB1cGxvYWRlZEZpbGUsXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9RVUVSWSwgU0VUX0dFTlJFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVzID0gcmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFUyxcbiAgbW92aWVzOiByZXNwb25zZS5yZXN1bHRzLFxuICBwYWdlOiAocmVzcG9uc2UucGFnZSArIDEpLFxuICB0b3RhbFBhZ2VzOiByZXNwb25zZS50b3RhbF9wYWdlcyxcbiAgdG90YWw6IHJlc3BvbnNlLnRvdGFsX3Jlc3VsdHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICBsZXQgdXJsID0gJ2FwaS9kaXNjb3Zlcic7XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKHF1ZXJ5TmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbcXVlcnlOYW1lXTtcbiAgICBjb25zdCBvcCA9IGkgPT09IDBcbiAgICAgID8gJz8nXG4gICAgICA6ICcmJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHtxdWVyeU5hbWV9PSR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbXVsdGlRdWVyeSA9IGAke3F1ZXJ5TmFtZX09YDtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIG11bHRpUXVlcnkgKz0gYCR7dn0sYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke211bHRpUXVlcnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFF1ZXJ5ID0gKHsgZmllbGQsIHZhbHVlIH0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogU0VUX1FVRVJZLFxuICAgIGZpZWxkLFxuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEdlbnJlcyA9IGdlbnJlcyA9PiAoe1xuICB0eXBlOiBTRVRfR0VOUkVTLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9ICgpID0+IGRpc3BhdGNoID0+IGF4aW9zXG4gIC5nZXQoJy9hcGkvZ2VucmUnKVxuICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKHNldEdlbnJlcyhkYXRhKSkpXG4gIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQge1xuICBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSLFxuICBDUkVBVEVfTElTVCxcbiAgREVMRVRFX0xJU1QsXG4gIEFERF9UT19MSVNULFxuICBERUxFVEVfRlJPTV9MSVNULFxuICBTRVRfTElTVFMsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cywgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0IH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdChsaXN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MSVNUUyxcbiAgICBwYXlsb2FkOiBsaXN0cyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RCeUN1cnJlbnRVc2VyKHsgcGFnZSwgbGltaXQgfSkge1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gY29va2llLmdldCgndXNlcl9pZCcpO1xuXG4gIGlmICghY3VycmVudFVzZXJJZCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gIH1cblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MoYC9hcGkvbGlzdHM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TGlzdChyZXNwb25zZS5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdChsaXN0KSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5wb3N0KCcvYXBpL2xpc3RzJywgbGlzdClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydCh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGlkKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdChsaXN0SWQsIG1vdmllSWQpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QobGlzdElkLCBtb3ZpZUlkKSB7XG5cbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVEZXRhaWwgPSBkZXRhaWwgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFX0RFVEFJTCxcbiAgZGV0YWlsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZURldGFpbCA9IGlkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRNb3ZpZURldGFpbChudWxsKSk7XG5cbiAgYXhpb3MuZ2V0KGAvYXBpL21vdmllLyR7aWR9YClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKFxuICAgICAgc2V0TW92aWVEZXRhaWwoZGF0YSksXG4gICAgKSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgbG9nbywgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGxvZ29QYXRoID0gbG9nb1xuICAgID8gYCR7dmlzc25lLmltYWdlc1NlY3VyZUJhc2VVcmx9L3c5Mi8ke2xvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTBcIj57bmFtZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db21wYW55LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nbzogJycsXG4gIG5hbWU6ICdDb21wYW55Jyxcbn07XG5cbkNvbXBhbnkucHJvcFR5cGVzID0gQ29tcGFueVNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuLi9Db21wYW55JztcbmltcG9ydCAnLi9Db21wYW55TGlzdC5zY3NzJztcblxuY29uc3QgQ29tcGFueUxpc3QgPSAoeyBjb21wYW5pZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNvbXBhbmllczwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7Y29tcGFuaWVzLm1hcChjID0+IChcbiAgICAgICAgICA8Q29tcGFueSBrZXk9e2MuaWR9IGxvZ289e2MubG9nb19wYXRofSBuYW1lPXtjLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueUxpc3QucHJvcFR5cGVzID0ge1xuICBjb21wYW5pZXM6IFByb3BUeXBlcy5hcnJheU9mKENvbXBhbnlTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IERldGFpbFRhYmxlID0gKHsgbW92aWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YCR7bW92aWUub3JnaW5hbFRpdGxlfSAoJHttb3ZpZS55ZWFyfSlgfTwvaDU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlLXNtIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc8L3RoPlxuICAgICAgICAgICAgPHRkPntgJHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICgke21vdmllLnZvdGVfY291bnR9KWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SZWxlYXNlIERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5yZWxlYXNlX2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5HZW5yZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5nZW5yZU5hbWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFnbGluZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnRhZ2xpbmV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJpZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5jb3VudHJpZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYW5ndWFnZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZGlyZWN0b3J9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Xcml0ZXI8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS53cml0ZXJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ib21lcGFnZTwvdGg+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e21vdmllLmhvbWVwYWdlfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e21vdmllLmhvbWVwYWdlfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsVGFibGUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogTW92aWVTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBNZW51ID0gKHsgcGF0aCwgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgICAga2V5PXttLnBhdGh9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17bS5pY29ufSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e20ubmFtZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHttZW51SXRlbXN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL01vZGFsLnNjc3MnO1xuXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgY2FuY2VsLFxuICAgIHN1Ym1pdCxcbiAgICBjaGlsZHJlbixcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gc2hvdyA/ICdzaG93IGQtYmxvY2snIDogJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsIGZhZGUgJHtjbGFzc05hbWV9YH0gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJhY2tkcm9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtjYW5jZWx9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXR9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG59O1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi4vUG9zdGVyJztcbmltcG9ydCAnLi9Nb3ZpZUNhcmQuc2Nzcyc7XG5cbmNvbnN0IE1vdmllQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgaW1hZ2UsXG4gICAgcmF0ZSxcbiAgICBzbHVnLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWNhcmQgaC0xMDAgdy0xMDAgcm91bmRlZC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBpbWctdGh1bWJuYWlsXCI+XG4gICAgICA8TGluayB0bz17YG1vdmllLyR7c2x1Z30vJHtpZH1gfSBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSByYXRpbmctdGFnIHNoYWRvdy1zbSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICB7cmF0ZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8UG9zdGVyIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByYXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBNb3ZpZVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBNb3ZpZUxpc3QgPSAoeyBtb3ZpZXMgfSkgPT4ge1xuICBjb25zdCBsaXN0ID0gbW92aWVzLm1hcChtb3ZpZSA9PiAoXG4gICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTIgbWItMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPE1vdmllQ2FyZFxuICAgICAgICBpZD17bW92aWUuaWR9XG4gICAgICAgIGltYWdlPXttb3ZpZS5wb3N0ZXJ9XG4gICAgICAgIHRpdGxlPXttb3ZpZS50aXRsZX1cbiAgICAgICAgcmF0ZT17bW92aWUudm90ZUF2ZXJhZ2V9XG4gICAgICAgIHNsdWc9e21vdmllLnNsdWd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICB7bGlzdH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBVc2VyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL05hdmJhci5zY3NzJztcblxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGlzTG9nZ2VkSW4sXG4gICAgcGF0aE5hbWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBsb2dpbkJ1dHRvbiA9IGlzTG9nZ2VkSW4gPyAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3Byb2ZpbGUvYWNjb3VudFwiIHRpdGxlPVwiUHJvZmlsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj57dXNlci51c2VyTmFtZX08L3NwYW4+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2xvZ291dFwiIHRpdGxlPVwiTG9nb3V0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbi1vdXQtYWx0XCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L0ZyYWdtZW50PlxuICApIDogKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPExpbmsgdG89XCIvYXV0aFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+bG9naW48L0xpbms+XG4gICAgPC9saT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgdG89XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9XG4gICAgICAgICAgYWx0PVwiVmlzc25lXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBkLWJsb2NrXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBpZD1cImZpbHRlckJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmaWx0ZXJcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvaW4tdGhlYXRlcnMnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9pbi10aGVhdGVyc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGluIHRoZWF0ZXJzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvY29taW5nLXNvb24nID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9jb21pbmctc29vblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGNvbWluZyBzb29uZ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG15LWF1dG9cIj5cbiAgICAgICAgICB7bG9naW5CdXR0b259XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB1c2VyOiB7fSxcbiAgcGF0aE5hbWU6ICcvJyxcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIHBhdGhOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL05vdEZvdW5kLnNjc3MnO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvb25nLnBuZ2B9IGFsdD1cIjQwNFwiIC8+XG4gICAgPGg0PjQwNDwvaDQ+XG4gICAgPGg1PlBhZ2Ugbm90IGZvdW5kPC9oNT5cbiAgICA8cD5cbiAgICAgIFdlIGFyZSBzb3JyeS4gVGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciB3YXMgbW92ZWQsIHJlbW92ZWQsIHJlbmFtZWQgb3IgbWlnaHQgbmV2ZXIgZXhpc3RlZC5cbiAgICA8L3A+XG4gICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkdPIFRPIEhPTUU8L2E+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcblxuY29uc3QgUGFnZUxvYWRpbmcgPSAoeyBzaG93IH0pID0+IHtcbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIGJvdHRvbS0wIGJnLWxpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgPFNwaW5uZXIgc2hvdyBzaXplPVwibGdcIiBhZGRpb25hbENsYXNzPVwibXItMlwiIC8+XG4gICAgICBMb2FkaW5nLi4uXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWdlTG9hZGluZy5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoY3VycmVudFBhZ2UsIHBhZ2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG5cbiAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSAoY3VycmVudFBhZ2UgLSAxKTtcblxuICAgIHJlc3VsdCA9IG5ld1BhZ2UgPT09IDAgPyAxIDogbmV3UGFnZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAoY3VycmVudFBhZ2UgKyAxKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2U6IHJlc3VsdCB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlTnVtYmVycyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIGJ1dHRvbkNvdW50LFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpO1xuICBjb25zdCBiYyA9IE1hdGguY2VpbChidXR0b25Db3VudCAvIDIpO1xuXG4gIGZvciAobGV0IGkgPSAocGFnZSAtIChiYyAtIDEpKTsgaSA8IChwYWdlICsgYmMpOyBpICs9IDEpIHtcbiAgICBpZiAoaSA+IDAgJiYgaSA8PSB0b3RhbFBhZ2UpIHtcbiAgICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xufTtcblxuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgcGFnZSwgb25QYWdpbmF0ZSB9ID0gb3B0aW9ucztcblxuICBjb25zdCBwYWdlTnVtYmVycyA9IGdlbmVyYXRlUGFnZU51bWJlcnMob3B0aW9ucyk7XG5cbiAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gPHNwYW4gLz47XG4gIH1cblxuICBjb25zdCBwYWdlQnV0dG9ucyA9IHBhZ2VOdW1iZXJzLm1hcChwbiA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAgJHtwbiA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKHBuKX1cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljayhwYWdlLCAncHJldicpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlQnV0dG9uc31cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socGFnZSwgJ25leHQnKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGJ1dHRvbkNvdW50OiAzLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2U6IDEsXG4gICAgbGltaXQ6IDEwLFxuICB9LFxufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblBhZ2luYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBidXR0b25Db3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGltYWdlT25Mb2FkKCkge1xuXG59XG5cbmZ1bmN0aW9uIGltYWdlT25FcnJvcigpIHtcbiAgdGhpcy5zcmMgPSB2aXNzbmUuZGVmYXVsdENvdmVySW1hZ2VQYXRoO1xufVxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgIHNyYz17YCR7c3JjfWB9XG4gICAgICBvbkxvYWQ9e2ltYWdlT25Mb2FkfVxuICAgICAgb25FcnJvcj17aW1hZ2VPbkVycm9yfVxuICAgICAgYWx0PXthbHR9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0ZXIucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4vUGFnZUxvYWRpbmcnO1xuaW1wb3J0IHByb2ZpbGVNZW51IGZyb20gJy4uL2NvbnN0YW50cy9wcm9maWxlLW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhdGgsIHBhZ2VMb2FkaW5nLCB1c2VyIH0gPSBwcm9wcztcblxuICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIHNob3cgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayByb3VuZGVkLWNpcmNsZSBhdmF0YXItYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgfHwgYCR7dmlzc25lLmNkbn0vdWNvbnRlbnQvYXZhdGFyL2RlZmF1bHQtYXZhdGFyLmpwZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlIGJvcmRlciBhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoNT57YEAke3VzZXIudXNlck5hbWV9YH08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1lbnUgaXRlbXM9e3Byb2ZpbGVNZW51fSBwYXRoPXtwYXRofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaG93LCBoZWlnaHQgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjc1XCJcbiAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGhlaWdodDogMixcbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3csXG4gICAgc2l6ZSxcbiAgICBraW5kLFxuICAgIGNvbG9yLFxuICAgIGFkZGlvbmFsQ2xhc3MsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyLSR7a2luZH0gc3Bpbm5lci0ke2tpbmR9LSR7c2l6ZX0gdGV4dC0ke2NvbG9yfSAke2FkZGlvbmFsQ2xhc3N9YH0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc2l6ZTogJ3NtJyxcbiAga2luZDogJ2dyb3cnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBhZGRpb25hbENsYXNzOiAnJyxcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWRkaW9uYWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICBdKSxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYm9yZGVyJyxcbiAgICAnZ3JvdycsXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChmaWVsZHMpID0+IHtcbiAgY29uc3QgdmlzaWJsZUZpZWxkcyA9IGZpZWxkc1xuICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRkZW4pXG4gICAgLm1hcChmID0+IDx0aCBzY29wZT1cImNvbFwiPntmLnRpdGxlfTwvdGg+KTtcblxuICByZXR1cm4gPHRyPnt2aXNpYmxlRmllbGRzfTwvdHI+O1xufTtcblxuY29uc3QgY3JlYXRlQm9keSA9IChkYXRhLCBmaWVsZHMpID0+IHtcbiAgY29uc3QgdGJvZHkgPSBbXTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRmllbGRzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSBpdGVtW2ZpZWxkLm5hbWVdO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC5mb3JtYXRcbiAgICAgICAgPyBmaWVsZC5mb3JtYXQodilcbiAgICAgICAgOiB2LnRvU3RyaW5nKCk7XG5cbiAgICAgIGl0ZW1GaWVsZHMucHVzaCg8dGQ+e3ZhbHVlfTwvdGQ+KTtcbiAgICB9KTtcblxuICAgIHRib2R5LnB1c2goPHRyPntpdGVtRmllbGRzfTwvdHI+KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRib2R5O1xufTtcblxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbiA9IChvcHRpb25zKSA9PiB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICB9ID0gb3B0aW9ucztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8UGFnaW5hdGlvbiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPHNwYW4+e2BTaG93ICR7bGltaXQgPiB0b3RhbCA/IHRvdGFsIDogbGltaXR9IHJlc3VsdCBvZiAke3RvdGFsfWB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVGFibGVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZmllbGRzLCBwYWdpbmF0aW9uIH0gPSBwcm9wcztcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IGhlYWRzID0gY3JlYXRlSGVhZGVyKGZpZWxkcyk7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVCb2R5KGRhdGEsIGZpZWxkcyk7XG4gIGNvbnN0IHBhZ2luYXRpb25CdXR0b25zID0gY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHtoZWFkc31cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtwYWdpbmF0aW9uQnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9WaWRlby5zY3NzJztcblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlb0tleSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gbWItMiBlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICA8aWZyYW1lXG4gICAgICBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlxuICAgICAgdGl0bGU9XCJWaWRlb1wiXG4gICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvS2V5fT9hdXRvcGxheT0wJm9yaWdpbj0ke3Zpc3NuZS5kb21haW59YH1cbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9LZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLy8gY29tbW9uXG5leHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxFUlQgPSAnVE9HR0xFX0FMRVJUJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfRklMVEVSID0gJ1RPR0dMRV9GSUxURVInO1xuXG4vLyBhdXRoXG5leHBvcnQgY29uc3QgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMgPSAnU0VUX1BBR0VfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HX1NUQVRVUyA9ICdTRVRfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gJ1JFR0lTVEVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbi8vIGRpc2NvdmVyXG5leHBvcnQgY29uc3QgR0VUX01PVklFUyA9ICdHRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVTID0gJ1NFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRVMgPSAnU0VUX0dFTlJFUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVJZID0gJ1NFVF9RVUVSWSc7XG5cbi8vIGxpc3RzXG5leHBvcnQgY29uc3QgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiA9ICdHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1RTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fTElTVCA9ICdBRERfVE9fTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fTElTVCA9ICdERUxFVEVfRlJPTV9MSVNUJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVFMgPSAnU0VUX0xJU1RTJztcblxuLy8gbW92aWUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0VUX01PVklFX0RFVEFJTCA9ICdTRVRfTU9WSUVfREVUQUlMJztcblxuLy8gcHJvZmlsZVxuLy8gIC0tIEFjY291bnRcbmV4cG9ydCBjb25zdCBTRVRfQUNDT1VOVF9ERVRBSUwgPSAnU0VUX0FDQ09VTlRfREVUQUlMJztcbmV4cG9ydCBjb25zdCBTRVRfVVBMT0FERURfSU1BR0UgPSAnU0VUX1VQTE9BREVEX0lNQUdFJztcblxuLy8gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgU09SVF9PUFRJT05TID0gW3tcbiAgbmFtZTogJ1BvcHVsYXJpdHknLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JldmVudWUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUHJpbWFyeSBSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnT3JnaW5hbCBUaXRsZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIEF2ZXJhZ2UnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBDb3VudCcsXG4gIHZhbHVlOiAnZGVzYycsXG59XTtcbiIsImNvbnN0IHByb2ZpbGVNZW51ID0gW1xuICB7XG4gICAgbmFtZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvYWNjb3VudCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlzdHMnLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvbGlzdHMnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gIC8vICAgaWNvbjogJ2hlYXJ0JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZmF2b3JpdGVzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdDb21tZW50cycsXG4gIC8vICAgaWNvbjogJ2NvbW1lbnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9jb21tZW50cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnUmV2aWV3cycsXG4gIC8vICAgaWNvbjogJ25ld3NwYXBlcicsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3Jldmlld3MnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAvLyAgIGljb246ICd1c2VyLWZyaWVuZHMnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdTZXR0aW5ncycsXG4gIC8vICAgaWNvbjogJ2NvZycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JnaW5hbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9tZXBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXN0U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcm9maWxlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2VucmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY3Jld3M6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgdm90ZUF2ZXJhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHJlbGVhc2VZZWFyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCB7IFVzZXJTaGFwZSwgbWF0Y2hTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0ICcuL0FjY291bnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHByb3BzLnNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHVzZXJGb3JtOiB7fSxcbiAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSwgZmllbGQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgICBzdGF0ZVtmaWVsZF1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0LCBjaGFuZ2VQYXNzd29yZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnQoe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQub2xkUGFzc3dvcmQgPT09IHBhc3N3b3JkLm5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnQoe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGNhbm5vdCBiZSB0aGUgc2FtZSB3aXRoIG9sZCBwYXNzd29yZC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDoge30gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdXBkYXRlVXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVzZXJGb3JtLCB2YWxpZGF0aW9uLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXIodXNlckZvcm0pfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30ga2luZD1cImJvcmRlclwiIGNvbG9yPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ30+VXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+Q2hhbmdlIFBhc3N3b3JkPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkSW5wdXRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQubmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybU5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUFsZXJ0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCwgY2hhbmdlUGFzc3dvcmQsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG4gIHRvZ2dsZUFsZXJ0OiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydChhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBY2NvdW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBzaG93LFxuICAgIG1lc3NhZ2UsXG4gICAgdG9nZ2xlQWxlcnQsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHNpdGUtYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVBbGVydH0+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGtpbmQ6ICdpbmZvJyxcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUFsZXJ0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdpbmZvJyxcbiAgICAnbGlnaHQnLFxuICAgICdkYXJrJyxcbiAgXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZUFsZXJ0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnO1xuaW1wb3J0ICcuL0FsZXJ0LnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBjb21tb24gfSkgPT4gKHtcbiAgc2hvdzogY29tbW9uLnNob3dBbGVydCxcbiAgbWVzc2FnZTogY29tbW9uLmFsZXJ0TWVzc2FnZSxcbiAga2luZDogY29tbW9uLmFsZXJ0S2luZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB0b2dnbGVBbGVydDogKCkgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnQoeyBzaG93OiBmYWxzZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFsZXJ0KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3dpdGNoRm9ybSA9IHRoaXMuc3dpdGNoRm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW5SZWdpc3RlciA9IHRoaXMubG9naW5SZWdpc3Rlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBjb29raWUuZ2V0KCdlcnJvck1lc3NhZ2UnKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0b2dnbGVBbGVydChlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBmb3JtW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm0gfSk7XG4gIH1cblxuICB2YWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcbiAgICBjb25zdCB7IHZhbGlkYXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICghZm9ybS5lbWFpbCB8fCAhZW1haWxJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHZhbGlkYXRpb24uZW1haWwgPSB7XG4gICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24uZW1haWwgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm0ucGFzc3dvcmQgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPCA2IHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoID4gMTYpIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7XG4gICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgbXVzdCBiZSA2LTE2IGNoYWNyYWN0ZXIuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHt9O1xuICAgIH1cblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBpZiAoIWZvcm0udXNlck5hbWUgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPCAyIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi51c2VyTmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5Vc2VyIG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi51c2VyTmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uZmlyc3ROYW1lIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+Rmlyc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0ubGFzdE5hbWUgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi5sYXN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5MYXN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5sYXN0TmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybS5jb25maXJtUGFzc3dvcmQgIT09IGZvcm0ucGFzc3dvcmQpIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIGRvbnQgbWF0Y2g8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBsb2dpblJlZ2lzdGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uKGZvcm0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHVybCA9IGlzUmVnaXN0ZXJcbiAgICAgID8gJy9hcGkvcmVnaXN0ZXInXG4gICAgICA6ICcvYXBpL2xvZ2luJztcblxuICAgIHJldHVybiBwcm9wcy5sb2dpblJlZ2lzdGVyKGZvcm0sIHVybCk7XG4gIH1cblxuICBzd2l0Y2hGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc1JlZ2lzdGVyOiAhcHJldlN0YXRlLmlzUmVnaXN0ZXIsXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm0sXG4gICAgICBpc1JlZ2lzdGVyLFxuICAgICAgdmFsaWRhdGlvbixcbiAgICAgIGxvYWRpbmcsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9ICdMT0dJTic7XG4gICAgbGV0IHN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQgPSAnUkVHSVNURVInO1xuICAgIGxldCByZWdpc3RlcklucHV0ID0gbnVsbDtcblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICAgIHN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQgPSAnTE9HSU4nO1xuXG4gICAgICByZWdpc3RlcklucHV0ID0gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1QYXNzd29yZElucHV0XCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwia2V5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtUGFzc3dvcmRBZGRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwidXNlck5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImF0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnVzZXJOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJmaXJzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPlxuICAgICAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJsYXN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24ubGFzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5sYXN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGF1dGgtZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfSBhbHQ9XCJWaXNzbmVcIiBoZWlnaHQ9XCI3MFwiIGNsYXNzTmFtZT1cIm15LTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gaWQ9XCJmb3JtUmVnXCIgY2xhc3NOYW1lPVwiY29sLTEyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImJhc2ljLWFkZG9uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJlbnZlbG9wZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbElucHV0R3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmVtYWlsLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRJbnB1dFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidW5sb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRBZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24ucGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7cmVnaXN0ZXJJbnB1dH1cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5SZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3Bpbm5lci1ncm93IHNwaW5uZXItZ3Jvdy1zbSAke2xvYWRpbmcgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBnb29nbGUgIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZ29vZ2xlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdnb29nbGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIExPR0lOIFdJVEggR09PR0xFXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZmFjZWJvb2sgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9mYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZmFjZWJvb2snXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIExPR0lOIFdJVEggRkFDRUJPT0tcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BdXRoLnByb3BUeXBlcyA9IHtcbiAgdG9nZ2xlQWxlcnQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEF1dGggZnJvbSAnLi9BdXRoJztcbmltcG9ydCB7IGxvZ2luUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgdG9nZ2xlQWxlcnQgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgJy4vQXV0aC5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgbG9naW5SZWdpc3RlcjogKGRhdGEsIHVybCkgPT4gZGlzcGF0Y2gobG9naW5SZWdpc3RlcihkYXRhLCB1cmwpKSxcbiAgdG9nZ2xlQWxlcnQ6IG1lc3NhZ2UgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnQoeyBraW5kOiAnZGFuZ2VyJywgbWVzc2FnZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEF1dGgpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQge1xuICBVc2VyU2hhcGUsXG4gIE1vdmllU2hhcGUsXG4gIEdlbnJlU2hhcGUsXG4gIEZpbHRlclNoYXBlLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjb3ZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sb2FkTW92aWVzID0gdGhpcy5sb2FkTW92aWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRRdWVyeSA9IHRoaXMuc2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0R2VucmVzLCB0b2dnbGVGaWx0ZXIsIG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gbWF0Y2g7XG5cbiAgICBnZXRHZW5yZXMoKTtcblxuICAgIGlmIChbJy9jb21pbmctc29vbicsICcvaW4tdGhlYXRlcnMnXS5pbmRleE9mKHBhdGgpICE9PSAtMSkge1xuICAgICAgdGhpcy5zZXRRdWVyeSh7IGZpZWxkOiAnZmlsdGVyJywgdmFsdWU6IHBhdGgucmVwbGFjZSgnLycsICcnKSB9KTtcbiAgICAgIHRvZ2dsZUZpbHRlcihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZE1vdmllcygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgY29uc3QgeyBzZXRRdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRRdWVyeShxdWVyeSkudGhlbih0aGlzLmxvYWRNb3ZpZXMpO1xuICB9XG5cbiAgbG9hZE1vdmllcygpIHtcbiAgICBjb25zdCB7IGdldE1vdmllcywgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0TW92aWVzKHF1ZXJ5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb3ZpZXMsXG4gICAgICB1c2VyLFxuICAgICAgaXNMb2dnZWRJbixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBnZW5yZXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgc2hvd0ZpbHRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gcGF0aE5hbWU9e2xvY2F0aW9uLnBhdGhuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxGaWx0ZXIgc2hvdz17c2hvd0ZpbHRlcn0gZ2VucmVzPXtnZW5yZXN9IHNldFF1ZXJ5PXt0aGlzLnNldFF1ZXJ5fSBxdWVyeT17cXVlcnl9IC8+XG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e21vdmllc30gaWQ9XCJsaXN0XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG0tMVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTW92aWVzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtYi0yICR7bG9hZGluZyA/ICdkLW5vbmUnIDogJ2QtYmxvY2snfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8U3Bpbm5lciBzaG93PXtsb2FkaW5nfSBzaXplPVwibWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkRpc2NvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHNob3dGaWx0ZXI6IHRydWUsXG4gIHVzZXI6IHt9LFxufTtcblxuRGlzY292ZXIucHJvcFR5cGVzID0ge1xuICBnZXRNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldEdlbnJlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9EaXNjb3Zlcic7XG5pbXBvcnQgeyB0b2dnbGVGaWx0ZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQge1xuICBnZXRNb3ZpZXMsXG4gIHNldFF1ZXJ5LFxuICBnZXRHZW5yZXMsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvZGlzY292ZXInO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuZGlzY292ZXIudXNlcixcbiAgcXVlcnk6IHN0YXRlLmRpc2NvdmVyLnF1ZXJ5LFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxuICBtb3ZpZXM6IHN0YXRlLmRpc2NvdmVyLm1vdmllcyxcbiAgZ2VucmVzOiBzdGF0ZS5kaXNjb3Zlci5nZW5yZXMsXG4gIHNob3dGaWx0ZXI6IHN0YXRlLmNvbW1vbi5zaG93RmlsdGVyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllczogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TW92aWVzKHF1ZXJ5KSksXG4gIHNldFF1ZXJ5OiBxdWVyeSA9PiBkaXNwYXRjaChzZXRRdWVyeShxdWVyeSkpLFxuICBnZXRHZW5yZXM6ICgpID0+IGRpc3BhdGNoKGdldEdlbnJlcygpKSxcbiAgdG9nZ2xlRmlsdGVyOiBzaG93ID0+IGRpc3BhdGNoKHRvZ2dsZUZpbHRlcihzaG93KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKERpc2NvdmVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZUxpc3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0OiB7fSxcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRMaXN0cyA9IHRoaXMuZ2V0TGlzdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5xdWVyeSwgcXVlcnkpLFxuICAgIH0pLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIGdldExpc3RzKCkge1xuICAgIGNvbnN0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHt9IH0pO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93TW9kYWw6ICFwcmV2U3RhdGUuc2hvd01vZGFsLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHF1ZXJ5LCBzaG93TW9kYWwgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgcGFnZUxvYWRpbmcsXG4gICAgICB0b3RhbCxcbiAgICAgIHRhYmxlRmllbGRzLFxuICAgICAgbGlzdHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxQcm9maWxlQ29udGFpbmVyIHVzZXI9e3VzZXJ9IHBhdGg9e21hdGNoLnBhdGh9IHBhZ2VMb2FkaW5nPXtwYWdlTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwicGx1cy1zcXVhcmVcIiAvPiBDcmVhdGUgTGlzdFxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUYWJsZUxpc3RcbiAgICAgICAgICAgIHRpdGxlPVwiTXkgTGlzdHNcIlxuICAgICAgICAgICAgZGF0YT17bGlzdHN9XG4gICAgICAgICAgICBmaWVsZHM9e3RhYmxlRmllbGRzfVxuICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZSxcbiAgICAgICAgICAgICAgbGltaXQ6IHF1ZXJ5LmxpbWl0LFxuICAgICAgICAgICAgICBidXR0b25Db3VudDogNSxcbiAgICAgICAgICAgICAgb25QYWdpbmF0ZTogdGhpcy5zZXRRdWVyeSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSB0aXRsZT1cIkNyZWF0ZSBMaXN0XCIgY2FuY2VsPXt0aGlzLnRvZ2dsZU1vZGFsfT5cbiAgICAgICAgICA8aDE+TW9kYWwgQ09udGVudDwvaDE+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdHMuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbDogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vTGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG4gIHRvdGFsOiBzdGF0ZS5saXN0cy50b3RhbCxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZURldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGV0YWlsLCB1c2VyLCBpc0xvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNob3cgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW8gPSBkZXRhaWwudmlkZW9zLmxlbmd0aCA+IDBcbiAgICAgID8gPFZpZGVvIHZpZGVvS2V5PXtkZXRhaWwudmlkZW9zWzBdLmtleX0gLz5cbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiIHNyYz17ZGV0YWlsLnBvc3RlclBhdGh9IGFsdD17ZGV0YWlsLnRpdGxlfSAvPlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBtYXRjaDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRldGFpbDogc3RhdGUubW92aWUuZGV0YWlsLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb3ZpZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVjcycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgd2l0aEdlbnJlczogW10sXG4gICAgeWVhcjogbnVsbCxcbiAgICBjcmV3czogW10sXG4gICAgY2FzdHM6IFtdLFxuICB9LFxuICBpc0xvZ2dlZEluOiAhIXVzZXIuZW1haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb3ZlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBsaXN0cyxcbiAgY29tbW9uLFxufSk7XG4iLCJpbXBvcnQgeyBTRVRfTElTVFMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0czogW10sXG4gIHRvdGFsOiAwLFxuICB0YWJsZUZpZWxkczogW3tcbiAgICB0aXRsZTogJ0lkJyxcbiAgICBmaWVsZDogJ2lkJyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sIHtcbiAgICB0aXRsZTogJ05hbWUnLFxuICAgIGZpZWxkOiAnbmFtZScsXG4gIH0sIHtcbiAgICB0aXRsZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICBmaWVsZDogJ2NyZWF0ZWRBdCcsXG4gIH1dLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTElTVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGV0YWlsOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbi5kZXRhaWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgIHRodW5rTWlkZGxld2FyZSxcbiAgICApLFxuICApO1xufVxuIiwiXG5pbXBvcnQge1xuICBzZXRQYWdlTG9hZGluZ1N0YXR1cyxcbiAgdG9nZ2xlQWxlcnQsXG4gIHNldExvYWRpbmdTdGF0dXMsXG59IGZyb20gJy4uL2FwcC9hY3Rpb25zL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG4gICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L3BhZ2Utbm90LWZvdW5kYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDAzOlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L2F1dGhgO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgdG9nZ2xlQWxlcnQoe1xuICAgICAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbn1cbiIsImNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG5jb25zdCBzZXQgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgZG9jLmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbn07XG5cbmNvbnN0IGdldCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2MuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgW2NuYW1lLCBjdmFsdWVdID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChjbmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICByZXR1cm4gY3ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0LFxuICBzZXQsXG59O1xuIiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge1xuICBmYVVzZXIsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFVbmxvY2ssXG4gIGZhQWxpZ25MZWZ0LFxuICBmYUtleSxcbiAgZmFTaWduYXR1cmUsXG4gIGZhRmlsdGVyLFxuICBmYVNvcnRBbW91bnRVcCxcbiAgZmFTb3J0QW1vdW50RG93bixcbiAgZmFVc2VyQ2lyY2xlLFxuICBmYUxpc3QsXG4gIGZhU3RhcixcbiAgZmFIZWFydCxcbiAgZmFDb21tZW50LFxuICBmYVN3YXRjaGJvb2ssXG4gIGZhVXNlckZyaWVuZHMsXG4gIGZhQ29nLFxuICBmYUVkaXQsXG4gIGZhVXBsb2FkLFxuICBmYU5ld3NwYXBlcixcbiAgZmFBdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFQbHVzU3F1YXJlLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFHb29nbGUsXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsaWJyYXJ5LmFkZChcbiAgICBmYVVzZXIsXG4gICAgZmFTaWduT3V0QWx0LFxuICAgIGZhRW52ZWxvcGUsXG4gICAgZmFVbmxvY2ssXG4gICAgZmFBbGlnbkxlZnQsXG4gICAgZmFLZXksXG4gICAgZmFTaWduYXR1cmUsXG4gICAgZmFGaWx0ZXIsXG4gICAgZmFTb3J0QW1vdW50VXAsXG4gICAgZmFTb3J0QW1vdW50RG93bixcbiAgICBmYUZhY2Vib29rLFxuICAgIGZhR29vZ2xlLFxuICAgIGZhVHdpdHRlcixcbiAgICBmYUluc3RhZ3JhbSxcbiAgICBmYVVzZXJDaXJjbGUsXG4gICAgZmFMaXN0LFxuICAgIGZhU3RhcixcbiAgICBmYUhlYXJ0LFxuICAgIGZhQ29tbWVudCxcbiAgICBmYVN3YXRjaGJvb2ssXG4gICAgZmFVc2VyRnJpZW5kcyxcbiAgICBmYUNvZyxcbiAgICBmYUVkaXQsXG4gICAgZmFVcGxvYWQsXG4gICAgZmFOZXdzcGFwZXIsXG4gICAgZmFBdCxcbiAgICBmYUFuZ2xlUmlnaHQsXG4gICAgZmFBbmdsZUxlZnQsXG4gICAgZmFQbHVzU3F1YXJlLFxuICApO1xufVxuIiwiKCgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9