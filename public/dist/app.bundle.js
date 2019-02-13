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

var _AlertDialog = __webpack_require__(/*! ./containers/AlertDialog */ "./app/assets/javascript/app/containers/AlertDialog/index.js");

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

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
      _react2.default.createElement(_AlertDialog2.default, null)
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
      dispatch((0, _common.toggleAlertDialog)({
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
      dispatch((0, _common.toggleAlertDialog)({
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
exports.setUploadedImage = exports.toggleFilter = exports.setLoadingStatus = exports.setPageLoadingStatus = exports.toggleAlertDialog = undefined;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var toggleAlertDialog = exports.toggleAlertDialog = function toggleAlertDialog(_ref) {
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
      dispatch((0, _common.toggleAlertDialog)({
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
    return _react2.default.createElement(
      'div',
      { className: 'row mt-2' },
      _react2.default.createElement(
        'div',
        { className: 'col d-flex' },
        _react2.default.createElement(Alert, { message: 'There were no result.', additionalClass: 'text-center', show: true })
      )
    );
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
          toggleAlertDialog = _props.toggleAlertDialog,
          changePassword = _props.changePassword;


      if (password.newPassword !== password.confirmNewPassword) {
        return toggleAlertDialog({
          kind: 'danger',
          message: 'Passwords don\'t match.'
        });
      }

      if (password.oldPassword === password.newPassword) {
        return toggleAlertDialog({
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
  toggleAlertDialog: _propTypes2.default.func.isRequired,
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
    toggleAlertDialog: function toggleAlertDialog(alert) {
      return dispatch((0, _common.toggleAlertDialog)(alert));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Account2.default);

/***/ }),

/***/ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.jsx":
/*!**************************************************************************!*\
  !*** ./app/assets/javascript/app/containers/AlertDialog/AlertDialog.jsx ***!
  \**************************************************************************/
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
      toggleAlertDialog = props.toggleAlertDialog;


  if (!show) return null;

  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + kind + ' site-alert alert-dismissible fade show', role: 'alert' },
    message,
    _react2.default.createElement(
      'button',
      { type: 'button', className: 'close', 'data-dismiss': 'alert', 'aria-label': 'Close', onClick: toggleAlertDialog },
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
  toggleAlertDialog: _propTypes2.default.func.isRequired,
  kind: _propTypes2.default.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'])
};

exports.default = Alert;

/***/ }),

/***/ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.scss":
/*!***************************************************************************!*\
  !*** ./app/assets/javascript/app/containers/AlertDialog/AlertDialog.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/containers/AlertDialog/index.js":
/*!*******************************************************************!*\
  !*** ./app/assets/javascript/app/containers/AlertDialog/index.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _AlertDialog = __webpack_require__(/*! ./AlertDialog */ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.jsx");

var _AlertDialog2 = _interopRequireDefault(_AlertDialog);

__webpack_require__(/*! ./AlertDialog.scss */ "./app/assets/javascript/app/containers/AlertDialog/AlertDialog.scss");

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
    toggleAlertDialog: function toggleAlertDialog() {
      return dispatch((0, _common.toggleAlertDialog)({ show: false }));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_AlertDialog2.default);

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
      var toggleAlertDialog = this.props.toggleAlertDialog;

      var errorMessage = _cookie2.default.get('errorMessage');
      if (errorMessage) {
        toggleAlertDialog(errorMessage);
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
  toggleAlertDialog: _propTypes2.default.func.isRequired
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
    toggleAlertDialog: function toggleAlertDialog(message) {
      return dispatch((0, _common.toggleAlertDialog)({ kind: 'danger', message: message }));
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
          _react2.default.createElement('input', { type: 'text', name: 'name', onChange: this.handleChange })
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
        dispatch((0, _common.toggleAlertDialog)({
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L0Nhc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3RMaXN0L0Nhc3RMaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3RMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0NvbXBhbnlMaXN0L0NvbXBhbnlMaXN0LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0NvbXBhbnlMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRGV0YWlsVGFibGUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9GaWx0ZXIvRmlsdGVyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vZGFsL01vZGFsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vZGFsL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkL01vdmllQ2FyZC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUGFnZUxvYWRpbmcuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUG9zdGVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1Byb2dyZXNzQmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvU3Bpbm5lci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1RhYmxlTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1ZpZGVvL1ZpZGVvLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1ZpZGVvL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvcHJvZmlsZS1tZW51LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb3Atc2hhcGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BY2NvdW50L0FjY291bnQuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BY2NvdW50L0FjY291bnQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydERpYWxvZy9BbGVydERpYWxvZy5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydERpYWxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9BdXRoLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9BdXRoLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL0Rpc2NvdmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvRGlzY292ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL0xpc3RzLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTGlzdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL01vdmllLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTW92aWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9hY2NvdW50LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvZGlzY292ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2xpc3RzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvbW92aWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9zdG9yZS9jb25maWd1cmUtc3RvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2xpYi9hamF4LWVycm9yLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2xpYi9jb29raWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2xpYi9mb250LWF3ZXNvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L3NjcmlwdHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2NzcyJdLCJuYW1lcyI6WyJSb290Iiwic3RvcmUiLCJEaXNjb3ZlciIsIkF1dGgiLCJBY2NvdW50IiwiTGlzdHMiLCJNb3ZpZSIsIk5vdEZvdW5kIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsIk9iamVjdCIsImlzUmVxdWlyZWQiLCJzZXRBY2NvdW50RGV0YWlsIiwidHlwZSIsIlNFVF9BQ0NPVU5UX0RFVEFJTCIsInBheWxvYWQiLCJ1c2VyIiwiZ2V0QWNjb3VudERldGFpbCIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiY2F0Y2giLCJ1cGRhdGVVc2VyIiwicHV0IiwiaWQiLCJraW5kIiwibWVzc2FnZSIsImNoYW5nZVBhc3N3b3JkIiwicGFzc3dvcmQiLCJsb2dpblJlZ2lzdGVyIiwidXJsIiwicG9zdCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImxvZ291dCIsInRvZ2dsZUFsZXJ0RGlhbG9nIiwiVE9HR0xFX0FMRVJUIiwic2V0UGFnZUxvYWRpbmdTdGF0dXMiLCJTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyIsInBhZ2VMb2FkaW5nIiwic3RhdHVzIiwic2V0TG9hZGluZ1N0YXR1cyIsIlNFVF9MT0FESU5HX1NUQVRVUyIsImxvYWRpbmciLCJ0b2dnbGVGaWx0ZXIiLCJUT0dHTEVfRklMVEVSIiwic2V0VXBsb2FkZWRJbWFnZSIsIlNFVF9VUExPQURFRF9JTUFHRSIsInVwbG9hZGVkRmlsZSIsInNldE1vdmllcyIsIlNFVF9NT1ZJRVMiLCJtb3ZpZXMiLCJyZXN1bHRzIiwicGFnZSIsInRvdGFsUGFnZXMiLCJ0b3RhbF9wYWdlcyIsInRvdGFsIiwidG90YWxfcmVzdWx0cyIsImdldE1vdmllcyIsInF1ZXJ5Iiwia2V5cyIsImZvckVhY2giLCJxdWVyeU5hbWUiLCJpIiwidmFsdWUiLCJvcCIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIm11bHRpUXVlcnkiLCJ2Iiwic2V0UXVlcnkiLCJmaWVsZCIsIlNFVF9RVUVSWSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0R2VucmVzIiwiU0VUX0dFTlJFUyIsImdlbnJlcyIsImdldEdlbnJlcyIsInNldExpc3QiLCJnZXRMaXN0QnlDdXJyZW50VXNlciIsImNyZWF0ZUxpc3QiLCJkZWxldGVMaXN0IiwiYWRkVG9MaXN0IiwicmVtb3ZlRnJvbUxpc3QiLCJsaXN0cyIsIlNFVF9MSVNUUyIsImxpbWl0IiwiY3VycmVudFVzZXJJZCIsImNvb2tpZSIsInZpc3NuZSIsImRvbWFpbiIsImFqYXhFcnJvckhhbmRsZXIiLCJsaXN0IiwicmVzdWx0IiwibGlzdElkIiwibW92aWVJZCIsInNldE1vdmllRGV0YWlsIiwiU0VUX01PVklFX0RFVEFJTCIsImRldGFpbCIsImdldE1vdmllRGV0YWlsIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJkZWZhdWx0UHJvcHMiLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwicHJvcHMiLCJzaG93Iiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJib29sIiwiRm9vdGVyIiwiTWVudSIsInBhdGgiLCJpdGVtcyIsIm1lbnVJdGVtcyIsIm0iLCJpY29uIiwiTW9kYWwiLCJ0aXRsZSIsImNhbmNlbCIsInN1Ym1pdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3RyaW5nIiwiTW92aWVDYXJkIiwiaW1hZ2UiLCJyYXRlIiwic2x1ZyIsIm51bWJlciIsIk1vdmllTGlzdCIsInBvc3RlciIsInZvdGVBdmVyYWdlIiwiTmF2YmFyIiwiaXNMb2dnZWRJbiIsInBhdGhOYW1lIiwibG9naW5CdXR0b24iLCJ1c2VyTmFtZSIsIlVzZXJTaGFwZSIsIlBhZ2VMb2FkaW5nIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50UGFnZSIsIm5ld1BhZ2UiLCJnZW5lcmF0ZVBhZ2VOdW1iZXJzIiwib3B0aW9ucyIsImJ1dHRvbkNvdW50IiwicGFnZU51bWJlcnMiLCJ0b3RhbFBhZ2UiLCJNYXRoIiwiY2VpbCIsImJjIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwic2hhcGUiLCJpbWFnZU9uTG9hZCIsImltYWdlT25FcnJvciIsInNyYyIsImRlZmF1bHRDb3ZlckltYWdlUGF0aCIsIlBvc3RlciIsImFsdCIsIlByb2ZpbGVDb250YWluZXIiLCJhdmF0YXIiLCJwcm9maWxlTWVudSIsIlByb2dyZXNzQmFyIiwiaGVpZ2h0Iiwid2lkdGgiLCJTcGlubmVyIiwic2l6ZSIsImNvbG9yIiwiYWRkaW9uYWxDbGFzcyIsIm9uZU9mIiwiY3JlYXRlSGVhZGVyIiwiZmllbGRzIiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJoaWRkZW4iLCJjcmVhdGVCb2R5IiwidGJvZHkiLCJpdGVtIiwiaXRlbUZpZWxkcyIsImZvcm1hdCIsInRvU3RyaW5nIiwiY3JlYXRlUGFnaW5hdGlvbiIsIlRhYmxlTGlzdCIsInBhZ2luYXRpb24iLCJoZWFkcyIsImJvZHkiLCJwYWdpbmF0aW9uQnV0dG9ucyIsIlZpZGVvIiwidmlkZW9LZXkiLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9UT19MSVNUIiwiREVMRVRFX0ZST01fTElTVCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWxlcnQiLCJBbGVydCIsInNob3dBbGVydCIsImFsZXJ0TWVzc2FnZSIsImFsZXJ0S2luZCIsIkFsZXJ0RGlhbG9nIiwiZm9ybSIsImNvbmZpcm1QYXNzd29yZCIsInN3aXRjaEZvcm0iLCJlcnJvck1lc3NhZ2UiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZWdpc3RlciIsImlzVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwicHJldlN0YXRlIiwiYnV0dG9uVGV4dCIsInN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQiLCJyZWdpc3RlcklucHV0IiwiaGFuZGxlU3VibWl0IiwiZGlzY292ZXIiLCJsb2FkTW92aWVzIiwic2hvd0ZpbHRlciIsInBhdGhuYW1lIiwiZ2V0TGlzdHMiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZSIsImFzc2lnbiIsInNob3dNb2RhbCIsInRhYmxlRmllbGRzIiwicGFyYW1zIiwidmlkZW8iLCJ2aWRlb3MiLCJwb3N0ZXJQYXRoIiwicHJvZHVjdGlvbl9jb21wYW5pZXMiLCJjcmVkaXRzIiwiY2FzdCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidXBsb2FkZWRBdmF0YXIiLCJmcmlzdE5hbWUiLCJjb25jYXQiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJ0aHVua01pZGRsZXdhcmUiLCJzdGF0dXNDb2RlIiwiZG9jIiwic2V0IiwiY29va2llcyIsImNuYW1lIiwiY3ZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwibGlicmFyeSIsImFkZCIsImZhVXNlciIsImZhU2lnbk91dEFsdCIsImZhRW52ZWxvcGUiLCJmYVVubG9jayIsImZhQWxpZ25MZWZ0IiwiZmFLZXkiLCJmYVNpZ25hdHVyZSIsImZhRmlsdGVyIiwiZmFTb3J0QW1vdW50VXAiLCJmYVNvcnRBbW91bnREb3duIiwiZmFGYWNlYm9vayIsImZhR29vZ2xlIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYVVzZXJDaXJjbGUiLCJmYUxpc3QiLCJmYVN0YXIiLCJmYUhlYXJ0IiwiZmFDb21tZW50IiwiZmFTd2F0Y2hib29rIiwiZmFVc2VyRnJpZW5kcyIsImZhQ29nIiwiZmFFZGl0IiwiZmFVcGxvYWQiLCJmYU5ld3NwYXBlciIsImZhQXQiLCJmYUFuZ2xlUmlnaHQiLCJmYUFuZ2xlTGVmdCIsImZhUGx1c1NxdWFyZSIsIndpbiIsIm9ubG9hZCIsInJlbW92ZSIsImVudiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztB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YSxZQUFNO0FBQ2pCLFFBQU1yVixjQUFjc1EsU0FBUzJCLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7O0FBRUEsUUFBSWpTLFdBQUosRUFBaUI7QUFDZkEsa0JBQVlzVixNQUFaO0FBQ0Q7O0FBRUQsUUFBSWxTLE9BQU9tUyxHQUFQLEtBQWUsWUFBbkIsRUFBaUM7QUFDL0IsVUFBSSxtQkFBbUJDLFNBQXZCLEVBQWtDO0FBQ2hDQSxrQkFBVUMsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGO0FBQ0YsR0FaRDtBQWFELENBaEJELEk7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeFwiLFwiY29tbW9uXCIsXCJyZWFjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9jb250YWluZXJzL0Rpc2NvdmVyJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL2NvbnRhaW5lcnMvTW92aWUnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9jb250YWluZXJzL0F1dGgnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb250YWluZXJzL0FjY291bnQnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29udGFpbmVycy9MaXN0cyc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cnO1xuXG5jb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29taW5nLXNvb25cIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luLXRoZWF0ZXJzXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoXCIgY29tcG9uZW50PXtBdXRofSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2xpc3RzXCIgY29tcG9uZW50PXtMaXN0c30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86c2x1Zy86aWRcIiBjb21wb25lbnQ9e01vdmllfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2Utbm90LWZvdW5kXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1JvdXRlcj5cbiAgICAgIDxBbGVydERpYWxvZyAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5Sb290LnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCBzZXRMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0QWNjb3VudERldGFpbCA9IHVzZXIgPT4gKHtcbiAgdHlwZTogU0VUX0FDQ09VTlRfREVUQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgdXNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudERldGFpbCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLmdldCgnL2FwaS9hY2NvdW50JylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoYC9hcGkvdXNlci8ke3VzZXIuaWR9YCwgdXNlcilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLicsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gcGFzc3dvcmQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnLCBwYXNzd29yZClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlZ2lzdGVyID0gKGRhdGEsIHVybCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIC8vIFRPRE86IHNldCB1c2VyIGluZm9ybWF0aW9uIHRvIGNvbW1vbiBzdGF0ZVxuICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXG59O1xuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQWxlcnREaWFsb2cgPSAoeyBtZXNzYWdlLCBraW5kIH0pID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9BTEVSVCxcbiAgbWVzc2FnZSxcbiAga2luZCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0UGFnZUxvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX0xPQURJTkdfU1RBVFVTLFxuICBsb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9ICgpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9GSUxURVIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFVwbG9hZGVkSW1hZ2UgPSB1cGxvYWRlZEZpbGUgPT4gKHtcbiAgdHlwZTogU0VUX1VQTE9BREVEX0lNQUdFLFxuICBwYXlsb2FkOiB1cGxvYWRlZEZpbGUsXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9RVUVSWSwgU0VUX0dFTlJFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVzID0gcmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFUyxcbiAgbW92aWVzOiByZXNwb25zZS5yZXN1bHRzLFxuICBwYWdlOiAocmVzcG9uc2UucGFnZSArIDEpLFxuICB0b3RhbFBhZ2VzOiByZXNwb25zZS50b3RhbF9wYWdlcyxcbiAgdG90YWw6IHJlc3BvbnNlLnRvdGFsX3Jlc3VsdHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICBsZXQgdXJsID0gJ2FwaS9kaXNjb3Zlcic7XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKHF1ZXJ5TmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbcXVlcnlOYW1lXTtcbiAgICBjb25zdCBvcCA9IGkgPT09IDBcbiAgICAgID8gJz8nXG4gICAgICA6ICcmJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHtxdWVyeU5hbWV9PSR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbXVsdGlRdWVyeSA9IGAke3F1ZXJ5TmFtZX09YDtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIG11bHRpUXVlcnkgKz0gYCR7dn0sYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke211bHRpUXVlcnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFF1ZXJ5ID0gKHsgZmllbGQsIHZhbHVlIH0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogU0VUX1FVRVJZLFxuICAgIGZpZWxkLFxuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEdlbnJlcyA9IGdlbnJlcyA9PiAoe1xuICB0eXBlOiBTRVRfR0VOUkVTLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9ICgpID0+IGRpc3BhdGNoID0+IGF4aW9zXG4gIC5nZXQoJy9hcGkvZ2VucmUnKVxuICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKHNldEdlbnJlcyhkYXRhKSkpXG4gIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQge1xuICBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSLFxuICBDUkVBVEVfTElTVCxcbiAgREVMRVRFX0xJU1QsXG4gIEFERF9UT19MSVNULFxuICBERUxFVEVfRlJPTV9MSVNULFxuICBTRVRfTElTVFMsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cywgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdChsaXN0cykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MSVNUUyxcbiAgICBwYXlsb2FkOiBsaXN0cyxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RCeUN1cnJlbnRVc2VyKHsgcGFnZSwgbGltaXQgfSkge1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gY29va2llLmdldCgndXNlcl9pZCcpO1xuXG4gIGlmICghY3VycmVudFVzZXJJZCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gIH1cblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MoYC9hcGkvbGlzdHM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TGlzdChyZXNwb25zZS5kYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlTGlzdChsaXN0KSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5wb3N0KCcvYXBpL2xpc3RzJywgbGlzdClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGlkKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdChsaXN0SWQsIG1vdmllSWQpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QobGlzdElkLCBtb3ZpZUlkKSB7XG5cbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVEZXRhaWwgPSBkZXRhaWwgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFX0RFVEFJTCxcbiAgZGV0YWlsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZURldGFpbCA9IGlkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRNb3ZpZURldGFpbChudWxsKSk7XG5cbiAgYXhpb3MuZ2V0KGAvYXBpL21vdmllLyR7aWR9YClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKFxuICAgICAgc2V0TW92aWVEZXRhaWwoZGF0YSksXG4gICAgKSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgbG9nbywgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGxvZ29QYXRoID0gbG9nb1xuICAgID8gYCR7dmlzc25lLmltYWdlc1NlY3VyZUJhc2VVcmx9L3c5Mi8ke2xvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTBcIj57bmFtZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db21wYW55LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nbzogJycsXG4gIG5hbWU6ICdDb21wYW55Jyxcbn07XG5cbkNvbXBhbnkucHJvcFR5cGVzID0gQ29tcGFueVNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuLi9Db21wYW55JztcbmltcG9ydCAnLi9Db21wYW55TGlzdC5zY3NzJztcblxuY29uc3QgQ29tcGFueUxpc3QgPSAoeyBjb21wYW5pZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNvbXBhbmllczwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7Y29tcGFuaWVzLm1hcChjID0+IChcbiAgICAgICAgICA8Q29tcGFueSBrZXk9e2MuaWR9IGxvZ289e2MubG9nb19wYXRofSBuYW1lPXtjLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueUxpc3QucHJvcFR5cGVzID0ge1xuICBjb21wYW5pZXM6IFByb3BUeXBlcy5hcnJheU9mKENvbXBhbnlTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IERldGFpbFRhYmxlID0gKHsgbW92aWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YCR7bW92aWUub3JnaW5hbFRpdGxlfSAoJHttb3ZpZS55ZWFyfSlgfTwvaDU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlLXNtIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc8L3RoPlxuICAgICAgICAgICAgPHRkPntgJHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICgke21vdmllLnZvdGVfY291bnR9KWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SZWxlYXNlIERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5yZWxlYXNlX2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5HZW5yZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5nZW5yZU5hbWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFnbGluZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnRhZ2xpbmV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJpZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5jb3VudHJpZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYW5ndWFnZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZGlyZWN0b3J9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Xcml0ZXI8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS53cml0ZXJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ib21lcGFnZTwvdGg+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e21vdmllLmhvbWVwYWdlfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e21vdmllLmhvbWVwYWdlfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsVGFibGUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogTW92aWVTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBNZW51ID0gKHsgcGF0aCwgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgICAga2V5PXttLnBhdGh9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17bS5pY29ufSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e20ubmFtZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHttZW51SXRlbXN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL01vZGFsLnNjc3MnO1xuXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgY2FuY2VsLFxuICAgIHN1Ym1pdCxcbiAgICBjaGlsZHJlbixcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gc2hvdyA/ICdzaG93IGQtYmxvY2snIDogJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsIGZhZGUgJHtjbGFzc05hbWV9YH0gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJhY2tkcm9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtjYW5jZWx9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXR9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG59O1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi4vUG9zdGVyJztcbmltcG9ydCAnLi9Nb3ZpZUNhcmQuc2Nzcyc7XG5cbmNvbnN0IE1vdmllQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgaW1hZ2UsXG4gICAgcmF0ZSxcbiAgICBzbHVnLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWNhcmQgaC0xMDAgdy0xMDAgcm91bmRlZC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBpbWctdGh1bWJuYWlsXCI+XG4gICAgICA8TGluayB0bz17YG1vdmllLyR7c2x1Z30vJHtpZH1gfSBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSByYXRpbmctdGFnIHNoYWRvdy1zbSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICB7cmF0ZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8UG9zdGVyIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByYXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBNb3ZpZVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBNb3ZpZUxpc3QgPSAoeyBtb3ZpZXMgfSkgPT4ge1xuICBjb25zdCBsaXN0ID0gbW92aWVzLm1hcChtb3ZpZSA9PiAoXG4gICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTIgbWItMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPE1vdmllQ2FyZFxuICAgICAgICBpZD17bW92aWUuaWR9XG4gICAgICAgIGltYWdlPXttb3ZpZS5wb3N0ZXJ9XG4gICAgICAgIHRpdGxlPXttb3ZpZS50aXRsZX1cbiAgICAgICAgcmF0ZT17bW92aWUudm90ZUF2ZXJhZ2V9XG4gICAgICAgIHNsdWc9e21vdmllLnNsdWd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICB7bGlzdH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBVc2VyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL05hdmJhci5zY3NzJztcblxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGlzTG9nZ2VkSW4sXG4gICAgcGF0aE5hbWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBsb2dpbkJ1dHRvbiA9IGlzTG9nZ2VkSW4gPyAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3Byb2ZpbGUvYWNjb3VudFwiIHRpdGxlPVwiUHJvZmlsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj57dXNlci51c2VyTmFtZX08L3NwYW4+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2xvZ291dFwiIHRpdGxlPVwiTG9nb3V0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbi1vdXQtYWx0XCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L0ZyYWdtZW50PlxuICApIDogKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPExpbmsgdG89XCIvYXV0aFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+bG9naW48L0xpbms+XG4gICAgPC9saT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgdG89XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9XG4gICAgICAgICAgYWx0PVwiVmlzc25lXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBkLWJsb2NrXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBpZD1cImZpbHRlckJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmaWx0ZXJcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvaW4tdGhlYXRlcnMnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9pbi10aGVhdGVyc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGluIHRoZWF0ZXJzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvY29taW5nLXNvb24nID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9jb21pbmctc29vblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGNvbWluZyBzb29uZ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG15LWF1dG9cIj5cbiAgICAgICAgICB7bG9naW5CdXR0b259XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB1c2VyOiB7fSxcbiAgcGF0aE5hbWU6ICcvJyxcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIHBhdGhOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL05vdEZvdW5kLnNjc3MnO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvb25nLnBuZ2B9IGFsdD1cIjQwNFwiIC8+XG4gICAgPGg0PjQwNDwvaDQ+XG4gICAgPGg1PlBhZ2Ugbm90IGZvdW5kPC9oNT5cbiAgICA8cD5cbiAgICAgIFdlIGFyZSBzb3JyeS4gVGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciB3YXMgbW92ZWQsIHJlbW92ZWQsIHJlbmFtZWQgb3IgbWlnaHQgbmV2ZXIgZXhpc3RlZC5cbiAgICA8L3A+XG4gICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkdPIFRPIEhPTUU8L2E+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcblxuY29uc3QgUGFnZUxvYWRpbmcgPSAoeyBzaG93IH0pID0+IHtcbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIGJvdHRvbS0wIGJnLWxpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgPFNwaW5uZXIgc2hvdyBzaXplPVwibGdcIiBhZGRpb25hbENsYXNzPVwibXItMlwiIC8+XG4gICAgICBMb2FkaW5nLi4uXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWdlTG9hZGluZy5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAoY3VycmVudFBhZ2UsIHBhZ2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG5cbiAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSAoY3VycmVudFBhZ2UgLSAxKTtcblxuICAgIHJlc3VsdCA9IG5ld1BhZ2UgPT09IDAgPyAxIDogbmV3UGFnZTtcbiAgfSBlbHNlIHtcbiAgICByZXN1bHQgPSAoY3VycmVudFBhZ2UgKyAxKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2U6IHJlc3VsdCB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlTnVtYmVycyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIGJ1dHRvbkNvdW50LFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5jZWlsKHRvdGFsIC8gbGltaXQpO1xuICBjb25zdCBiYyA9IE1hdGguY2VpbChidXR0b25Db3VudCAvIDIpO1xuXG4gIGZvciAobGV0IGkgPSAocGFnZSAtIChiYyAtIDEpKTsgaSA8IChwYWdlICsgYmMpOyBpICs9IDEpIHtcbiAgICBpZiAoaSA+IDAgJiYgaSA8PSB0b3RhbFBhZ2UpIHtcbiAgICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xufTtcblxuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgcGFnZSwgb25QYWdpbmF0ZSB9ID0gb3B0aW9ucztcblxuICBjb25zdCBwYWdlTnVtYmVycyA9IGdlbmVyYXRlUGFnZU51bWJlcnMob3B0aW9ucyk7XG5cbiAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gPHNwYW4gLz47XG4gIH1cblxuICBjb25zdCBwYWdlQnV0dG9ucyA9IHBhZ2VOdW1iZXJzLm1hcChwbiA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAgJHtwbiA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8YVxuICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKHBuKX1cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljayhwYWdlLCAncHJldicpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlQnV0dG9uc31cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socGFnZSwgJ25leHQnKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGJ1dHRvbkNvdW50OiAzLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2U6IDEsXG4gICAgbGltaXQ6IDEwLFxuICB9LFxufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblBhZ2luYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBidXR0b25Db3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGltYWdlT25Mb2FkKCkge1xuXG59XG5cbmZ1bmN0aW9uIGltYWdlT25FcnJvcigpIHtcbiAgdGhpcy5zcmMgPSB2aXNzbmUuZGVmYXVsdENvdmVySW1hZ2VQYXRoO1xufVxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgIHNyYz17YCR7c3JjfWB9XG4gICAgICBvbkxvYWQ9e2ltYWdlT25Mb2FkfVxuICAgICAgb25FcnJvcj17aW1hZ2VPbkVycm9yfVxuICAgICAgYWx0PXthbHR9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0ZXIucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4vUGFnZUxvYWRpbmcnO1xuaW1wb3J0IHByb2ZpbGVNZW51IGZyb20gJy4uL2NvbnN0YW50cy9wcm9maWxlLW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhdGgsIHBhZ2VMb2FkaW5nLCB1c2VyIH0gPSBwcm9wcztcblxuICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIHNob3cgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayByb3VuZGVkLWNpcmNsZSBhdmF0YXItYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgfHwgYCR7dmlzc25lLmNkbn0vdWNvbnRlbnQvYXZhdGFyL2RlZmF1bHQtYXZhdGFyLmpwZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlIGJvcmRlciBhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoNT57YEAke3VzZXIudXNlck5hbWV9YH08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1lbnUgaXRlbXM9e3Byb2ZpbGVNZW51fSBwYXRoPXtwYXRofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaG93LCBoZWlnaHQgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjc1XCJcbiAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGhlaWdodDogMixcbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3csXG4gICAgc2l6ZSxcbiAgICBraW5kLFxuICAgIGNvbG9yLFxuICAgIGFkZGlvbmFsQ2xhc3MsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyLSR7a2luZH0gc3Bpbm5lci0ke2tpbmR9LSR7c2l6ZX0gdGV4dC0ke2NvbG9yfSAke2FkZGlvbmFsQ2xhc3N9YH0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc2l6ZTogJ3NtJyxcbiAga2luZDogJ2dyb3cnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBhZGRpb25hbENsYXNzOiAnJyxcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWRkaW9uYWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICBdKSxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYm9yZGVyJyxcbiAgICAnZ3JvdycsXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbic7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChmaWVsZHMpID0+IHtcbiAgY29uc3QgdmlzaWJsZUZpZWxkcyA9IGZpZWxkc1xuICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRkZW4pXG4gICAgLm1hcChmID0+IDx0aCBzY29wZT1cImNvbFwiPntmLnRpdGxlfTwvdGg+KTtcblxuICByZXR1cm4gPHRyPnt2aXNpYmxlRmllbGRzfTwvdHI+O1xufTtcblxuY29uc3QgY3JlYXRlQm9keSA9IChkYXRhLCBmaWVsZHMpID0+IHtcbiAgY29uc3QgdGJvZHkgPSBbXTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRmllbGRzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSBpdGVtW2ZpZWxkLm5hbWVdO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC5mb3JtYXRcbiAgICAgICAgPyBmaWVsZC5mb3JtYXQodilcbiAgICAgICAgOiB2LnRvU3RyaW5nKCk7XG5cbiAgICAgIGl0ZW1GaWVsZHMucHVzaCg8dGQ+e3ZhbHVlfTwvdGQ+KTtcbiAgICB9KTtcblxuICAgIHRib2R5LnB1c2goPHRyPntpdGVtRmllbGRzfTwvdHI+KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRib2R5O1xufTtcblxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbiA9IChvcHRpb25zKSA9PiB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICB9ID0gb3B0aW9ucztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8UGFnaW5hdGlvbiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPHNwYW4+e2BTaG93ICR7bGltaXQgPiB0b3RhbCA/IHRvdGFsIDogbGltaXR9IHJlc3VsdCBvZiAke3RvdGFsfWB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVGFibGVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgZGF0YSwgZmllbGRzLCBwYWdpbmF0aW9uIH0gPSBwcm9wcztcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXhcIj5cbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIlRoZXJlIHdlcmUgbm8gcmVzdWx0LlwiIGFkZGl0aW9uYWxDbGFzcz1cInRleHQtY2VudGVyXCIgc2hvdyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoZWFkcyA9IGNyZWF0ZUhlYWRlcihmaWVsZHMpO1xuICBjb25zdCBib2R5ID0gY3JlYXRlQm9keShkYXRhLCBmaWVsZHMpO1xuICBjb25zdCBwYWdpbmF0aW9uQnV0dG9ucyA9IGNyZWF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbik7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXJlc3BvbnNpdmVcIj5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICB7aGVhZHN9XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICB7cGFnaW5hdGlvbkJ1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vVmlkZW8uc2Nzcyc7XG5cbmNvbnN0IFZpZGVvID0gKHsgdmlkZW9LZXkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIG1iLTIgZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgPGlmcmFtZVxuICAgICAgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCJcbiAgICAgIHRpdGxlPVwiVmlkZW9cIlxuICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICBoZWlnaHQ9XCIzNjBcIlxuICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0tleX0/YXV0b3BsYXk9MCZvcmlnaW49JHt2aXNzbmUuZG9tYWlufWB9XG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlby5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsIi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0FMRVJUID0gJ1RPR0dMRV9BTEVSVCc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0ZJTFRFUiA9ICdUT0dHTEVfRklMVEVSJztcblxuLy8gYXV0aFxuZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9QQUdFX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElOR19TVEFUVVMgPSAnU0VUX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9ICdSRUdJU1RFUic7XG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xuXG4vLyBkaXNjb3ZlclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVMgPSAnR0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX01PVklFUyA9ICdTRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfR0VOUkVTID0gJ1NFVF9HRU5SRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVSWSA9ICdTRVRfUVVFUlknO1xuXG4vLyBsaXN0c1xuZXhwb3J0IGNvbnN0IEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIgPSAnR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUic7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0xJU1QgPSAnQ1JFQVRFX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9MSVNUID0gJ0RFTEVURV9MSVNUUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX0xJU1QgPSAnQUREX1RPX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0xJU1QgPSAnREVMRVRFX0ZST01fTElTVCc7XG5leHBvcnQgY29uc3QgU0VUX0xJU1RTID0gJ1NFVF9MSVNUUyc7XG5cbi8vIG1vdmllIGRldGFpbFxuZXhwb3J0IGNvbnN0IFNFVF9NT1ZJRV9ERVRBSUwgPSAnU0VUX01PVklFX0RFVEFJTCc7XG5cbi8vIHByb2ZpbGVcbi8vICAtLSBBY2NvdW50XG5leHBvcnQgY29uc3QgU0VUX0FDQ09VTlRfREVUQUlMID0gJ1NFVF9BQ0NPVU5UX0RFVEFJTCc7XG5leHBvcnQgY29uc3QgU0VUX1VQTE9BREVEX0lNQUdFID0gJ1NFVF9VUExPQURFRF9JTUFHRSc7XG5cbi8vIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IFNPUlRfT1BUSU9OUyA9IFt7XG4gIG5hbWU6ICdQb3B1bGFyaXR5JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZXZlbnVlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ByaW1hcnkgUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ09yZ2luYWwgVGl0bGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBBdmVyYWdlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQ291bnQnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufV07XG4iLCJjb25zdCBwcm9maWxlTWVudSA9IFtcbiAge1xuICAgIG5hbWU6ICdBY2NvdW50JyxcbiAgICBpY29uOiAndXNlcicsXG4gICAgcGF0aDogJy9wcm9maWxlL2FjY291bnQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xpc3RzJyxcbiAgICBpY29uOiAnbGlzdCcsXG4gICAgcGF0aDogJy9wcm9maWxlL2xpc3RzJyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGYXZvcml0ZXMnLFxuICAvLyAgIGljb246ICdoZWFydCcsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2Zhdm9yaXRlcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnQ29tbWVudHMnLFxuICAvLyAgIGljb246ICdjb21tZW50JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvY29tbWVudHMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ1Jldmlld3MnLFxuICAvLyAgIGljb246ICduZXdzcGFwZXInLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9yZXZpZXdzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGcmllbmRzJyxcbiAgLy8gICBpY29uOiAndXNlci1mcmllbmRzJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZnJpZW5kcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnU2V0dGluZ3MnLFxuICAvLyAgIGljb246ICdjb2cnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncycsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlTWVudTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZ1bGxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9yZ2luYWxUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgeWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhvbWVwYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FzdFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGFyYWN0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJvZmlsZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvZ286IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdlbnJlU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZpbHRlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNyZXdzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNhc3RzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIHZvdGVBdmVyYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICByZWxlYXNlWWVhcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBVc2VyU2hhcGUsIG1hdGNoU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCAnLi9BY2NvdW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBwcm9wcy5zZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICB1c2VyRm9ybToge30sXG4gICAgICBwYXNzd29yZDoge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBvbGRQYXNzd29yZDoge30sXG4gICAgICAgIG5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgY29uZmlybU5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0sIGZpZWxkKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XG4gICAgc3RhdGVbZmllbGRdW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydERpYWxvZywgY2hhbmdlUGFzc3dvcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFzc3dvcmQubmV3UGFzc3dvcmQgIT09IHBhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZHMgZG9uXFwndCBtYXRjaC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkLm9sZFBhc3N3b3JkID09PSBwYXNzd29yZC5uZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBjYW5ub3QgYmUgdGhlIHNhbWUgd2l0aCBvbGQgcGFzc3dvcmQuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IHt9IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHVwZGF0ZVVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1c2VyRm9ybSwgdmFsaWRhdGlvbiwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAodXNlciAmJiB1c2VyLmlkICYmICF1c2VyRm9ybS5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJGb3JtOiB1c2VyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5BY2NvdW50PC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVVc2VyKHVzZXJGb3JtKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IGtpbmQ9XCJib3JkZXJcIiBjb2xvcj1cInN1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9PlVwZGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkNoYW5nZSBQYXNzd29yZDwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbGRQYXNzd29yZElucHV0XCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLm9sZFBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5vbGRQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbGRQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld1Bhc3N3b3JkSW5wdXRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ubmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1OZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5jb25maXJtTmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENoYW5nZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkFjY291bnQucHJvcFR5cGVzID0ge1xuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IG1hdGNoU2hhcGUuaXNSZXF1aXJlZCxcbiAgZ2V0QWNjb3VudERldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hhbmdlUGFzc3dvcmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50JztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwsIGNoYW5nZVBhc3N3b3JkLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVwbG9hZGVkRmlsZTogc3RhdGUuY29tbW9uLnVwbG9hZGVkRmlsZSxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldEFjY291bnREZXRhaWw6ICgpID0+IGRpc3BhdGNoKGdldEFjY291bnREZXRhaWwoKSksXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBzdGF0dXMgPT4gZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoc3RhdHVzKSksXG4gIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyKSksXG4gIGNoYW5nZVBhc3N3b3JkOiBwYXNzd29yZCA9PiBkaXNwYXRjaChjaGFuZ2VQYXNzd29yZChwYXNzd29yZCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWNjb3VudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGtpbmQsXG4gICAgc2hvdyxcbiAgICBtZXNzYWdlLFxuICAgIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtJHtraW5kfSBzaXRlLWFsZXJ0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd2B9IHJvbGU9XCJhbGVydFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17dG9nZ2xlQWxlcnREaWFsb2d9PlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBraW5kOiAnaW5mbycsXG4gIG1lc3NhZ2U6IG51bGwsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCAnLi9BbGVydERpYWxvZy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY29tbW9uIH0pID0+ICh7XG4gIHNob3c6IGNvbW1vbi5zaG93QWxlcnQsXG4gIG1lc3NhZ2U6IGNvbW1vbi5hbGVydE1lc3NhZ2UsXG4gIGtpbmQ6IGNvbW1vbi5hbGVydEtpbmQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsgc2hvdzogZmFsc2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBbGVydERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uLy4uL2xpYi9jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaEZvcm0gPSB0aGlzLnN3aXRjaEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luUmVnaXN0ZXIgPSB0aGlzLmxvZ2luUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29va2llLmdldCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgdG9nZ2xlQWxlcnREaWFsb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAoIWZvcm0uZW1haWwgfHwgIWVtYWlsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtLnBhc3N3b3JkIHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA+IDE2KSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIG11c3QgYmUgNi0xNiBjaGFjcmFjdGVyLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgaWYgKCFmb3JtLnVzZXJOYW1lIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+VXNlciBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmZpcnN0TmFtZSB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkZpcnN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmxhc3ROYW1lIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+TGFzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm0uY29uZmlybVBhc3N3b3JkICE9PSBmb3JtLnBhc3N3b3JkKSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBkb250IG1hdGNoPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgbG9naW5SZWdpc3RlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvbihmb3JtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB1cmwgPSBpc1JlZ2lzdGVyXG4gICAgICA/ICcvYXBpL3JlZ2lzdGVyJ1xuICAgICAgOiAnL2FwaS9sb2dpbic7XG5cbiAgICByZXR1cm4gcHJvcHMubG9naW5SZWdpc3Rlcihmb3JtLCB1cmwpO1xuICB9XG5cbiAgc3dpdGNoRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNSZWdpc3RlcjogIXByZXZTdGF0ZS5pc1JlZ2lzdGVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgaXNSZWdpc3RlcixcbiAgICAgIHZhbGlkYXRpb24sXG4gICAgICBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICAgIGxldCBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICBsZXQgcmVnaXN0ZXJJbnB1dCA9IG51bGw7XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgICBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ0xPR0lOJztcblxuICAgICAgcmVnaXN0ZXJJbnB1dCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiY29uZmlybVBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybVBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwibGFzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhdXRoLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH0gYWx0PVwiVmlzc25lXCIgaGVpZ2h0PVwiNzBcIiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVJlZ1wiIGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxJbnB1dEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkSW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJwYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVubG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5wYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge3JlZ2lzdGVySW5wdXR9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gJHtsb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZ29vZ2xlICBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2dvb2dsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEdPT0dMRVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGZhY2Vib29rIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEZBQ0VCT09LXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXV0aC5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgeyBsb2dpblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0ICcuL0F1dGguc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGxvZ2luUmVnaXN0ZXI6IChkYXRhLCB1cmwpID0+IGRpc3BhdGNoKGxvZ2luUmVnaXN0ZXIoZGF0YSwgdXJsKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBtZXNzYWdlID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsga2luZDogJ2RhbmdlcicsIG1lc3NhZ2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHtcbiAgVXNlclNoYXBlLFxuICBNb3ZpZVNoYXBlLFxuICBHZW5yZVNoYXBlLFxuICBGaWx0ZXJTaGFwZSxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9hZE1vdmllcyA9IHRoaXMubG9hZE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEdlbnJlcywgdG9nZ2xlRmlsdGVyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhdGggfSA9IG1hdGNoO1xuXG4gICAgZ2V0R2VucmVzKCk7XG5cbiAgICBpZiAoWycvY29taW5nLXNvb24nLCAnL2luLXRoZWF0ZXJzJ10uaW5kZXhPZihwYXRoKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0UXVlcnkoeyBmaWVsZDogJ2ZpbHRlcicsIHZhbHVlOiBwYXRoLnJlcGxhY2UoJy8nLCAnJykgfSk7XG4gICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3ZpZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGNvbnN0IHsgc2V0UXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UXVlcnkocXVlcnkpLnRoZW4odGhpcy5sb2FkTW92aWVzKTtcbiAgfVxuXG4gIGxvYWRNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZXMsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllcyhxdWVyeSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW92aWVzLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZ2VucmVzLFxuICAgICAgcXVlcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNob3dGaWx0ZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IHBhdGhOYW1lPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8RmlsdGVyIHNob3c9e3Nob3dGaWx0ZXJ9IGdlbnJlcz17Z2VucmVzfSBzZXRRdWVyeT17dGhpcy5zZXRRdWVyeX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IGlkPVwibGlzdFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtLTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vdmllc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMiAke2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5EaXNjb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxuICB1c2VyOiB7fSxcbn07XG5cbkRpc2NvdmVyLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRHZW5yZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBzaG93RmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vRGlzY292ZXInO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TW92aWVzLFxuICBzZXRRdWVyeSxcbiAgZ2V0R2VucmVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2NvdmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIHF1ZXJ5OiBzdGF0ZS5kaXNjb3Zlci5xdWVyeSxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbW92aWVzOiBzdGF0ZS5kaXNjb3Zlci5tb3ZpZXMsXG4gIGdlbnJlczogc3RhdGUuZGlzY292ZXIuZ2VucmVzLFxuICBzaG93RmlsdGVyOiBzdGF0ZS5jb21tb24uc2hvd0ZpbHRlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldE1vdmllcyhxdWVyeSkpLFxuICBzZXRRdWVyeTogcXVlcnkgPT4gZGlzcGF0Y2goc2V0UXVlcnkocXVlcnkpKSxcbiAgZ2V0R2VucmVzOiAoKSA9PiBkaXNwYXRjaChnZXRHZW5yZXMoKSksXG4gIHRvZ2dsZUZpbHRlcjogc2hvdyA9PiBkaXNwYXRjaCh0b2dnbGVGaWx0ZXIoc2hvdykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShEaXNjb3Zlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVMaXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDoge30sXG4gICAgICBxdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldExpc3RzKCk7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUucXVlcnksIHF1ZXJ5KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBnZXRMaXN0cygpIHtcbiAgICBjb25zdCB7IGdldExpc3RCeUN1cnJlbnRVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnkpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gIH1cblxuICB0b2dnbGVNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd01vZGFsOiAhcHJldlN0YXRlLnNob3dNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVyeSwgc2hvd01vZGFsIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdG90YWwsXG4gICAgICB0YWJsZUZpZWxkcyxcbiAgICAgIGxpc3RzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGV9PlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz4gQ3JlYXRlIExpc3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VGFibGVMaXN0XG4gICAgICAgICAgICB0aXRsZT1cIk15IExpc3RzXCJcbiAgICAgICAgICAgIGRhdGE9e2xpc3RzfVxuICAgICAgICAgICAgZmllbGRzPXt0YWJsZUZpZWxkc31cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgdG90YWwsXG4gICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICAgIGxpbWl0OiBxdWVyeS5saW1pdCxcbiAgICAgICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgICAgIG9uUGFnaW5hdGU6IHRoaXMuc2V0UXVlcnksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gdGl0bGU9XCJDcmVhdGUgTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cIm5hbWVcIiBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9IC8+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdHMuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbDogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vTGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG4gIHRvdGFsOiBzdGF0ZS5saXN0cy50b3RhbCxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZURldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGV0YWlsLCB1c2VyLCBpc0xvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNob3cgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW8gPSBkZXRhaWwudmlkZW9zLmxlbmd0aCA+IDBcbiAgICAgID8gPFZpZGVvIHZpZGVvS2V5PXtkZXRhaWwudmlkZW9zWzBdLmtleX0gLz5cbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiIHNyYz17ZGV0YWlsLnBvc3RlclBhdGh9IGFsdD17ZGV0YWlsLnRpdGxlfSAvPlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBtYXRjaDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRldGFpbDogc3RhdGUubW92aWUuZGV0YWlsLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb3ZpZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVjcycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgd2l0aEdlbnJlczogW10sXG4gICAgeWVhcjogbnVsbCxcbiAgICBjcmV3czogW10sXG4gICAgY2FzdHM6IFtdLFxuICB9LFxuICBpc0xvZ2dlZEluOiAhIXVzZXIuZW1haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb3ZlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBsaXN0cyxcbiAgY29tbW9uLFxufSk7XG4iLCJpbXBvcnQgeyBTRVRfTElTVFMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0czogW10sXG4gIHRvdGFsOiAwLFxuICB0YWJsZUZpZWxkczogW3tcbiAgICB0aXRsZTogJ0lkJyxcbiAgICBmaWVsZDogJ2lkJyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sIHtcbiAgICB0aXRsZTogJ05hbWUnLFxuICAgIGZpZWxkOiAnbmFtZScsXG4gIH0sIHtcbiAgICB0aXRsZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICBmaWVsZDogJ2NyZWF0ZWRBdCcsXG4gIH1dLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTElTVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGV0YWlsOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbi5kZXRhaWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgIHRodW5rTWlkZGxld2FyZSxcbiAgICApLFxuICApO1xufVxuIiwiXG5pbXBvcnQge1xuICBzZXRQYWdlTG9hZGluZ1N0YXR1cyxcbiAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIHNldExvYWRpbmdTdGF0dXMsXG59IGZyb20gJy4uL2FwcC9hY3Rpb25zL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG4gICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L3BhZ2Utbm90LWZvdW5kYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDAzOlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L2F1dGhgO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbn1cbiIsImNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG5jb25zdCBzZXQgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgZG9jLmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbn07XG5cbmNvbnN0IGdldCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2MuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgW2NuYW1lLCBjdmFsdWVdID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChjbmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICByZXR1cm4gY3ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0LFxuICBzZXQsXG59O1xuIiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge1xuICBmYVVzZXIsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFVbmxvY2ssXG4gIGZhQWxpZ25MZWZ0LFxuICBmYUtleSxcbiAgZmFTaWduYXR1cmUsXG4gIGZhRmlsdGVyLFxuICBmYVNvcnRBbW91bnRVcCxcbiAgZmFTb3J0QW1vdW50RG93bixcbiAgZmFVc2VyQ2lyY2xlLFxuICBmYUxpc3QsXG4gIGZhU3RhcixcbiAgZmFIZWFydCxcbiAgZmFDb21tZW50LFxuICBmYVN3YXRjaGJvb2ssXG4gIGZhVXNlckZyaWVuZHMsXG4gIGZhQ29nLFxuICBmYUVkaXQsXG4gIGZhVXBsb2FkLFxuICBmYU5ld3NwYXBlcixcbiAgZmFBdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFQbHVzU3F1YXJlLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFHb29nbGUsXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsaWJyYXJ5LmFkZChcbiAgICBmYVVzZXIsXG4gICAgZmFTaWduT3V0QWx0LFxuICAgIGZhRW52ZWxvcGUsXG4gICAgZmFVbmxvY2ssXG4gICAgZmFBbGlnbkxlZnQsXG4gICAgZmFLZXksXG4gICAgZmFTaWduYXR1cmUsXG4gICAgZmFGaWx0ZXIsXG4gICAgZmFTb3J0QW1vdW50VXAsXG4gICAgZmFTb3J0QW1vdW50RG93bixcbiAgICBmYUZhY2Vib29rLFxuICAgIGZhR29vZ2xlLFxuICAgIGZhVHdpdHRlcixcbiAgICBmYUluc3RhZ3JhbSxcbiAgICBmYVVzZXJDaXJjbGUsXG4gICAgZmFMaXN0LFxuICAgIGZhU3RhcixcbiAgICBmYUhlYXJ0LFxuICAgIGZhQ29tbWVudCxcbiAgICBmYVN3YXRjaGJvb2ssXG4gICAgZmFVc2VyRnJpZW5kcyxcbiAgICBmYUNvZyxcbiAgICBmYUVkaXQsXG4gICAgZmFVcGxvYWQsXG4gICAgZmFOZXdzcGFwZXIsXG4gICAgZmFBdCxcbiAgICBmYUFuZ2xlUmlnaHQsXG4gICAgZmFBbmdsZUxlZnQsXG4gICAgZmFQbHVzU3F1YXJlLFxuICApO1xufVxuIiwiKCgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9