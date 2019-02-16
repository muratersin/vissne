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
exports.saveList = saveList;
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

var _util = __webpack_require__(/*! util */ "./node_modules/util/util.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function setList(_ref) {
  var lists = _ref.lists,
      total = _ref.total;

  return {
    type: _actionTypes.SET_LISTS,
    payload: {
      lists: lists,
      total: total
    }
  };
}

function getListByCurrentUser(_ref2) {
  var page = _ref2.page,
      limit = _ref2.limit;

  var currentUserId = _cookie2.default.get('user_id');

  if (!currentUserId) {
    window.location.href = vissne.domain + '/auth';
  }

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    (0, _axios2.default)('/api/lists?userId=' + currentUserId + '&page=' + page + '&limit=' + limit).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(true));
      dispatch((0, _common.setPageLoadingStatus)(false));
      dispatch(setList({
        lists: response.data.rows,
        total: response.data.count
      }));
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function saveList(list, callback) {
  var ops = !list.id ? {
    method: 'post',
    url: '/api/lists'
  } : {
    method: 'put',
    url: '/api/lists/' + list.id
  };

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default[ops.method](ops.url, list).then(function (result) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: result.data.message
      }));
      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

function deleteList(id, callback) {
  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.delete('/api/lists/' + id).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch((0, _common.toggleAlertDialog)({
        kind: 'success',
        message: response.data.message
      }));

      if (callback && typeof callback === 'function') {
        callback();
      }
    }).catch((0, _ajaxErrorHandler2.default)(dispatch));
  };
}

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

/***/ "./app/assets/javascript/app/components/Alert.jsx":
/*!********************************************************!*\
  !*** ./app/assets/javascript/app/components/Alert.jsx ***!
  \********************************************************/
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

var _constants = __webpack_require__(/*! ../../lib/constants */ "./app/assets/javascript/lib/constants.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(props) {
  var kind = props.kind,
      message = props.message,
      show = props.show;


  if (!show) return null;

  return _react2.default.createElement(
    'div',
    { className: 'alert alert-' + kind + ' w-100 text-center', role: 'alert' },
    message
  );
};

Alert.defaultProps = {
  show: true,
  kind: 'info'
};

Alert.propTypes = {
  kind: _propTypes2.default.oneOf(_constants.ALERT_TYPES),
  show: _propTypes2.default.bool,
  message: _propTypes2.default.string.isRequired
};

exports.default = Alert;

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

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouterDom = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/es/index.js");

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(_ref) {
  var path = _ref.path,
      items = _ref.items;

  var menuItems = items.map(function (m) {
    return _react2.default.createElement(
      'li',
      { className: 'nav-item', key: m.path },
      _react2.default.createElement(
        _reactRouterDom.Link,
        {
          className: 'nav-link ' + (m.path === path ? 'active' : ''),
          to: m.path
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

Menu.propTypes = {
  path: _propTypes2.default.string.isRequired,
  items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    path: _propTypes2.default.string.isRequired,
    icon: _propTypes2.default.string.isRequired,
    name: _propTypes2.default.string.isRequired
  })).isRequired
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

var handleClick = function handleClick(page, currentPage, totalPage) {
  var result = 1;

  if (Number.isInteger(page)) {
    return { page: page };
  }

  if (page === 'prev') {
    var newPage = currentPage - 1;
    result = newPage === 0 ? 1 : newPage;
  } else if (page === 'next') {
    result = currentPage + 1 > totalPage ? totalPage : currentPage + 1;
  }

  return { page: result };
};

var generatePageNumbers = function generatePageNumbers(options) {
  var page = options.page,
      limit = options.limit,
      total = options.total,
      buttonCount = options.buttonCount;

  var pageNumbers = [];
  var totalPage = Math.floor(total / limit);
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
      onPaginate = options.onPaginate,
      limit = options.limit,
      total = options.total;


  var pageNumbers = generatePageNumbers(options);
  var totalPage = Math.floor(total / limit);

  if (pageNumbers.length < 2) {
    return _react2.default.createElement('span', null);
  }

  var pageButtons = pageNumbers.map(function (pn) {
    return _react2.default.createElement(
      'li',
      { className: 'page-item  ' + (pn === page ? 'active' : '') },
      _react2.default.createElement(
        'button',
        {
          className: 'page-link rounded-0',
          type: 'button',
          onClick: function onClick() {
            return pn !== page ? onPaginate(handleClick(pn)) : '';
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
        { className: 'page-item ' + (page === 1 ? 'disabled' : '') },
        _react2.default.createElement(
          'button',
          {
            className: 'page-link rounded-0',
            type: 'button',
            onClick: function onClick() {
              return onPaginate(handleClick('prev', page));
            },
            disabled: page === 1
          },
          _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'angle-left' })
        )
      ),
      pageButtons,
      _react2.default.createElement(
        'li',
        { className: 'page-item ' + (page === totalPage ? 'disabled' : '') },
        _react2.default.createElement(
          'button',
          {
            className: 'page-link rounded-0',
            type: 'button',
            onClick: function onClick() {
              return onPaginate(handleClick('next', page));
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

/***/ "./app/assets/javascript/app/components/TableList/TableList.scss":
/*!***********************************************************************!*\
  !*** ./app/assets/javascript/app/components/TableList/TableList.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./app/assets/javascript/app/components/TableList/index.jsx":
/*!******************************************************************!*\
  !*** ./app/assets/javascript/app/components/TableList/index.jsx ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var _react2 = _interopRequireDefault(_react);

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

var _propTypes = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Pagination = __webpack_require__(/*! ../Pagination */ "./app/assets/javascript/app/components/Pagination.jsx");

var _Pagination2 = _interopRequireDefault(_Pagination);

var _Alert = __webpack_require__(/*! ../Alert */ "./app/assets/javascript/app/components/Alert.jsx");

var _Alert2 = _interopRequireDefault(_Alert);

__webpack_require__(/*! ./TableList.scss */ "./app/assets/javascript/app/components/TableList/TableList.scss");

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

var createBody = function createBody(data, fields, selected, onSelect) {
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
      { className: '' + (item.id === selected.id ? 'selected' : ''), onClick: function onClick() {
          return onSelect(item);
        } },
      itemFields
    ));
  });

  return tbody;
};

var createPagination = function createPagination(options, dataLength) {
  if (!options) {
    return null;
  }

  return _react2.default.createElement(
    'div',
    { className: 'd-flex justify-content-between' },
    _react2.default.createElement(_Pagination2.default, { options: options }),
    _react2.default.createElement(
      'span',
      null,
      'Show ' + dataLength + ' result of ' + options.total
    )
  );
};

var TableList = function TableList(props) {
  var data = props.data,
      selected = props.selected,
      fields = props.fields,
      pagination = props.pagination,
      responsive = props.responsive,
      onCreate = props.onCreate,
      onEdit = props.onEdit,
      onDelete = props.onDelete,
      onSelect = props.onSelect;


  var btnGroup = _react2.default.createElement(
    'div',
    { className: 'btn-group w-100 ' + (!onCreate && !onEdit && !onDelete ? 'd-none' : ''), role: 'group', 'aria-label': 'crud' },
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary rounded-0 btn-sm ' + (onCreate ? '' : 'd-none'),
        onClick: onCreate
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'plus-square' }),
      _react2.default.createElement(
        'span',
        { className: 'ml-1' },
        'Create'
      )
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary rounded-0 btn-sm ' + (onEdit ? '' : 'd-none'),
        onClick: onEdit
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'edit' }),
      _react2.default.createElement(
        'span',
        { className: 'ml-1' },
        'Edit'
      )
    ),
    _react2.default.createElement(
      'button',
      {
        type: 'button',
        className: 'btn btn-secondary rounded-0 btn-sm ' + (onDelete ? '' : 'd-none'),
        onClick: onDelete
      },
      _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'trash' }),
      _react2.default.createElement(
        'span',
        { className: 'ml-1' },
        'Delete'
      )
    )
  );

  if (!data || data.length === 0) {
    return _react2.default.createElement(
      'div',
      { className: 'row mt-2' },
      _react2.default.createElement(
        'div',
        { className: 'col' },
        _react2.default.createElement(_Alert2.default, { message: 'There were no result.', kind: 'warning' }),
        _react2.default.createElement(
          'button',
          { onClick: onCreate, className: 'btn btn-outline-primary w-100 ' + (onCreate ? '' : 'd-block'), type: 'button' },
          'Add'
        )
      )
    );
  }

  var heads = createHeader(fields);
  var body = createBody(data, fields, selected, onSelect);
  var paginationButtons = createPagination(pagination, data.length);

  return _react2.default.createElement(
    'div',
    { className: 'row mt-2' },
    _react2.default.createElement(
      'div',
      { className: 'col' },
      btnGroup,
      _react2.default.createElement(
        'table',
        { className: 'table v-table ' + (responsive ? 'table-responsive' : '') },
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

TableList.defaultProps = {
  data: [],
  selected: {},
  fields: []
};

TableList.propTypes = {
  data: _propTypes2.default.instanceOf(Array),
  selected: _propTypes2.default.instanceOf(Object),
  fields: _propTypes2.default.instanceOf(Array)
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

var _constants = __webpack_require__(/*! ../../../lib/constants */ "./app/assets/javascript/lib/constants.js");

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
  kind: _propTypes2.default.oneOf(_constants.ALERT_TYPES)
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

var _Navbar = __webpack_require__(/*! ../../components/Navbar */ "./app/assets/javascript/app/components/Navbar/index.jsx");

var _Navbar2 = _interopRequireDefault(_Navbar);

var _ProfileContainer = __webpack_require__(/*! ../../components/ProfileContainer */ "./app/assets/javascript/app/components/ProfileContainer.jsx");

var _ProfileContainer2 = _interopRequireDefault(_ProfileContainer);

var _TableList = __webpack_require__(/*! ../../components/TableList */ "./app/assets/javascript/app/components/TableList/index.jsx");

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
      selected: {},
      query: {
        page: 1,
        limit: 10
      }
    };

    _this.setQuery = _this.setQuery.bind(_this);
    _this.getLists = _this.getLists.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.create = _this.create.bind(_this);
    _this.destroy = _this.destroy.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.save = _this.save.bind(_this);
    return _this;
  }

  _createClass(Lists, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var getAccountDetail = this.props.getAccountDetail;

      this.getLists();
      getAccountDetail();
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
    key: 'destroy',
    value: function destroy() {
      var _props = this.props,
          deleteList = _props.deleteList,
          toggleAlertDialog = _props.toggleAlertDialog;
      var selected = this.state.selected;


      if (!selected || !selected.id) {
        return toggleAlertDialog({
          kind: 'warning',
          message: 'No selected data.'
        });
      }

      deleteList(selected.id, this.getLists);
    }
  }, {
    key: 'update',
    value: function update() {
      var selected = this.state.selected;

      this.setState({
        list: selected
      }, this.toggleModal);
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
    key: 'handleChange',
    value: function handleChange(_ref) {
      var target = _ref.target;
      var name = target.name;
      var list = this.state.list;

      var value = target.parsedValue || target.value;

      if (name === 'public') {
        value = value === 'true';
      }

      list[name] = value;

      this.setState({ list: list });
    }
  }, {
    key: 'save',
    value: function save() {
      var _this2 = this;

      var list = this.state.list;
      var saveList = this.props.saveList;

      saveList(list, function () {
        _this2.getLists();
        _this2.setState({ list: {} });
        _this2.toggleModal();
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          query = _state.query,
          showModal = _state.showModal,
          list = _state.list,
          selected = _state.selected;
      var _props2 = this.props,
          match = _props2.match,
          user = _props2.user,
          pageLoading = _props2.pageLoading,
          total = _props2.total,
          tableFields = _props2.tableFields,
          lists = _props2.lists;


      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          _ProfileContainer2.default,
          { user: user, path: match.path, pageLoading: pageLoading },
          _react2.default.createElement(_TableList2.default, {
            title: 'My Lists',
            data: lists,
            onCreate: this.create,
            onDelete: this.destroy,
            onEdit: this.update,
            onSelect: function onSelect(s) {
              return _this3.setState({ selected: s });
            },
            selected: selected,
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
          { show: showModal, title: 'Create List', cancel: this.toggleModal, submit: this.save },
          _react2.default.createElement(
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'List Name'
            ),
            _react2.default.createElement('input', {
              type: 'text',
              name: 'name',
              className: 'form-control',
              placeholder: 'List Name',
              value: list.name,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'div',
                { className: 'form-check' },
                _react2.default.createElement('input', {
                  className: 'form-check-input',
                  type: 'radio',
                  name: 'public',
                  value: 'true',
                  onChange: this.handleChange,
                  checked: list.public
                }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label' },
                  'Public List'
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col' },
              _react2.default.createElement(
                'div',
                { className: 'form-check' },
                _react2.default.createElement('input', {
                  className: 'form-check-input',
                  type: 'radio',
                  name: 'public',
                  value: 'false',
                  onChange: this.handleChange,
                  checked: !list.public
                }),
                _react2.default.createElement(
                  'label',
                  { className: 'form-check-label' },
                  'Private List'
                )
              )
            )
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
  toggleAlertDialog: _propTypes2.default.func.isRequired,
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  getAccountDetail: _propTypes2.default.func.isRequired,
  saveList: _propTypes2.default.func.isRequired,
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

var _account = __webpack_require__(/*! ../../actions/account */ "./app/assets/javascript/app/actions/account.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

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
    },
    saveList: function saveList(list, callback) {
      return dispatch((0, _lists.saveList)(list, callback));
    },
    deleteList: function deleteList(id, callback) {
      return dispatch((0, _lists.deleteList)(id, callback));
    },
    getAccountDetail: function getAccountDetail() {
      return dispatch((0, _account.getAccountDetail)());
    },
    toggleAlertDialog: function toggleAlertDialog(alert) {
      return dispatch((0, _common.toggleAlertDialog)(alert));
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
    name: 'id',
    hidden: true
  }, {
    title: 'Name',
    name: 'name'
  }, {
    title: 'Create Date',
    name: 'createdAt',
    format: function format(value) {
      var date = new Date(value);
      return date.toLocaleDateString();
    }
  }, {
    title: 'Public',
    name: 'public',
    format: function format(value) {
      return value ? 'Public' : 'Private';
    }
  }]
};

function lists() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload.lists,
        total: action.payload.total
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

/***/ "./app/assets/javascript/lib/constants.js":
/*!************************************************!*\
  !*** ./app/assets/javascript/lib/constants.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ALERT_TYPES = exports.ALERT_TYPES = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];

var ALERT_TYPE_ICON_MAP = exports.ALERT_TYPE_ICON_MAP = {
  primary: ''
};

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
  _fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUser, _freeSolidSvgIcons.faSignOutAlt, _freeSolidSvgIcons.faEnvelope, _freeSolidSvgIcons.faUnlock, _freeSolidSvgIcons.faAlignLeft, _freeSolidSvgIcons.faKey, _freeSolidSvgIcons.faSignature, _freeSolidSvgIcons.faFilter, _freeSolidSvgIcons.faSortAmountUp, _freeSolidSvgIcons.faSortAmountDown, _freeBrandsSvgIcons.faFacebook, _freeBrandsSvgIcons.faGoogle, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faInstagram, _freeSolidSvgIcons.faUserCircle, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faStar, _freeSolidSvgIcons.faHeart, _freeSolidSvgIcons.faComment, _freeSolidSvgIcons.faSwatchbook, _freeSolidSvgIcons.faUserFriends, _freeSolidSvgIcons.faCog, _freeSolidSvgIcons.faEdit, _freeSolidSvgIcons.faUpload, _freeSolidSvgIcons.faNewspaper, _freeSolidSvgIcons.faAt, _freeSolidSvgIcons.faAngleRight, _freeSolidSvgIcons.faAngleLeft, _freeSolidSvgIcons.faPlusSquare, _freeSolidSvgIcons.faTrash);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzP2Y0ODkiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0TGlzdC9DYXN0TGlzdC5zY3NzPzg1NzAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3RMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0NvbXBhbnlMaXN0L0NvbXBhbnlMaXN0LnNjc3M/YmI2YSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2Nzcz9lZjdmIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9GaWx0ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvRm9vdGVyLnNjc3M/M2RkZSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTWVudS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vZGFsL01vZGFsLnNjc3M/ZWNkOSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3M/OWFlNSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW92aWVDYXJkL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW92aWVMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL05hdmJhci5zY3NzPzUwYjUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05vdEZvdW5kL05vdEZvdW5kLnNjc3M/NWVmOCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzPzQ2ZjkiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1RhYmxlTGlzdC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1ZpZGVvL1ZpZGVvLnNjc3M/NmRiNiIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL2FjdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9maWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvcHJvcC1zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5zY3NzPzg5NWUiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2Nzcz8wODRiIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydERpYWxvZy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9BdXRoLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9BdXRoLnNjc3M/MzRmYyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvRGlzY292ZXIvRGlzY292ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTGlzdHMvTGlzdHMuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTW92aWUvTW92aWUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9tb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3N0b3JlL2NvbmZpZ3VyZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2FqYXgtZXJyb3ItaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2ZvbnQtYXdlc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzPzgyOGIiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsImxpc3RzIiwiU0VUX0xJU1RTIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwidmlzc25lIiwiZG9tYWluIiwicm93cyIsImNvdW50IiwibGlzdCIsImNhbGxiYWNrIiwib3BzIiwibWV0aG9kIiwicmVzdWx0IiwiZGVsZXRlIiwibGlzdElkIiwibW92aWVJZCIsInNldE1vdmllRGV0YWlsIiwiU0VUX01PVklFX0RFVEFJTCIsImRldGFpbCIsImdldE1vdmllRGV0YWlsIiwiQWxlcnQiLCJwcm9wcyIsInNob3ciLCJkZWZhdWx0UHJvcHMiLCJvbmVPZiIsIkFMRVJUX1RZUEVTIiwiYm9vbCIsInN0cmluZyIsIkNhc3QiLCJuYW1lIiwiY2hhcmFjdGVyIiwicHJvZmlsZVBhdGgiLCJDYXN0U2hhcGUiLCJDYXN0TGlzdCIsImNhc3RzIiwiY2FzdExpc3QiLCJtYXAiLCJjIiwiYXJyYXlPZiIsIkNvbXBhbnkiLCJsb2dvIiwibG9nb1BhdGgiLCJpbWFnZXNTZWN1cmVCYXNlVXJsIiwiY2RuIiwiQ29tcGFueVNoYXBlIiwiQ29tcGFueUxpc3QiLCJjb21wYW5pZXMiLCJsb2dvX3BhdGgiLCJEZXRhaWxUYWJsZSIsIm1vdmllIiwib3JnaW5hbFRpdGxlIiwieWVhciIsInZvdGVfYXZlcmFnZSIsInZvdGVfY291bnQiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZU5hbWVzIiwidGFnbGluZSIsImNvdW50cmllcyIsImxhbmd1YWdlIiwiZGlyZWN0b3IiLCJ3cml0ZXIiLCJob21lcGFnZSIsIk1vdmllU2hhcGUiLCJzd2l0Y2hTb3J0UXVlcnkiLCJzb3J0QnkiLCJzcGxpdCIsImFkZEdlbnJlSWQiLCJjdXJyZW50R2VucmVzIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImhhbmRsZUNoYW5nZVllYXIiLCJOdW1iZXIiLCJpc05hTiIsIkZpbHRlciIsInNvcnRJY29uQ2xhc3MiLCJzb3J0T3B0aW9ucyIsIlNPUlRfT1BUSU9OUyIsInNvcnQiLCJrZXkiLCJyZXBsYWNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJnZW5yZU9wdGlvbnMiLCJnIiwid2l0aEdlbnJlcyIsInNlYXJjaFRleHQiLCIkZXZlbnQiLCJ0YXJnZXQiLCJHZW5yZVNoYXBlIiwiRmlsdGVyU2hhcGUiLCJmdW5jIiwiRm9vdGVyIiwiTWVudSIsInBhdGgiLCJpdGVtcyIsIm1lbnVJdGVtcyIsIm0iLCJpY29uIiwic2hhcGUiLCJNb2RhbCIsInRpdGxlIiwiY2FuY2VsIiwic3VibWl0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJNb3ZpZUNhcmQiLCJpbWFnZSIsInJhdGUiLCJzbHVnIiwibnVtYmVyIiwiTW92aWVMaXN0IiwicG9zdGVyIiwidm90ZUF2ZXJhZ2UiLCJOYXZiYXIiLCJpc0xvZ2dlZEluIiwicGF0aE5hbWUiLCJsb2dpbkJ1dHRvbiIsInVzZXJOYW1lIiwiVXNlclNoYXBlIiwiUGFnZUxvYWRpbmciLCJoYW5kbGVDbGljayIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlIiwiaXNJbnRlZ2VyIiwibmV3UGFnZSIsImdlbmVyYXRlUGFnZU51bWJlcnMiLCJvcHRpb25zIiwiYnV0dG9uQ291bnQiLCJwYWdlTnVtYmVycyIsIk1hdGgiLCJmbG9vciIsImJjIiwiY2VpbCIsIlBhZ2luYXRpb24iLCJvblBhZ2luYXRlIiwicGFnZUJ1dHRvbnMiLCJwbiIsImltYWdlT25Mb2FkIiwiaW1hZ2VPbkVycm9yIiwic3JjIiwiZGVmYXVsdENvdmVySW1hZ2VQYXRoIiwiUG9zdGVyIiwiYWx0IiwiUHJvZmlsZUNvbnRhaW5lciIsImF2YXRhciIsInByb2ZpbGVNZW51IiwiUHJvZ3Jlc3NCYXIiLCJoZWlnaHQiLCJ3aWR0aCIsIlNwaW5uZXIiLCJzaXplIiwiY29sb3IiLCJhZGRpb25hbENsYXNzIiwiY3JlYXRlSGVhZGVyIiwiZmllbGRzIiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJoaWRkZW4iLCJjcmVhdGVCb2R5Iiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsInRib2R5IiwiaXRlbSIsIml0ZW1GaWVsZHMiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImNyZWF0ZVBhZ2luYXRpb24iLCJkYXRhTGVuZ3RoIiwiVGFibGVMaXN0IiwicGFnaW5hdGlvbiIsInJlc3BvbnNpdmUiLCJvbkNyZWF0ZSIsIm9uRWRpdCIsIm9uRGVsZXRlIiwiYnRuR3JvdXAiLCJoZWFkcyIsImJvZHkiLCJwYWdpbmF0aW9uQnV0dG9ucyIsIlZpZGVvIiwidmlkZW9LZXkiLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9UT19MSVNUIiwiREVMRVRFX0ZST01fTElTVCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJBbGVydERpYWxvZyIsImZvcm0iLCJjb25maXJtUGFzc3dvcmQiLCJzd2l0Y2hGb3JtIiwiZXJyb3JNZXNzYWdlIiwiZW1haWxJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzUmVnaXN0ZXIiLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGF0ZSIsImJ1dHRvblRleHQiLCJzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0IiwicmVnaXN0ZXJJbnB1dCIsImhhbmRsZVN1Ym1pdCIsImRpc2NvdmVyIiwibG9hZE1vdmllcyIsInNob3dGaWx0ZXIiLCJwYXRobmFtZSIsImdldExpc3RzIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGUiLCJkZXN0cm95IiwidXBkYXRlIiwic2F2ZSIsImFzc2lnbiIsInNob3dNb2RhbCIsInBhcnNlZFZhbHVlIiwidGFibGVGaWVsZHMiLCJzIiwicHVibGljIiwicGFyYW1zIiwidmlkZW8iLCJ2aWRlb3MiLCJwb3N0ZXJQYXRoIiwicHJvZHVjdGlvbl9jb21wYW5pZXMiLCJjcmVkaXRzIiwiY2FzdCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidXBsb2FkZWRBdmF0YXIiLCJmcmlzdE5hbWUiLCJjb25jYXQiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInRodW5rTWlkZGxld2FyZSIsImFqYXhFcnJvckhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiQUxFUlRfVFlQRV9JQ09OX01BUCIsInByaW1hcnkiLCJkb2MiLCJzZXQiLCJjb29raWVzIiwiY25hbWUiLCJjdmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyIiwiZmFTaWduT3V0QWx0IiwiZmFFbnZlbG9wZSIsImZhVW5sb2NrIiwiZmFBbGlnbkxlZnQiLCJmYUtleSIsImZhU2lnbmF0dXJlIiwiZmFGaWx0ZXIiLCJmYVNvcnRBbW91bnRVcCIsImZhU29ydEFtb3VudERvd24iLCJmYUZhY2Vib29rIiwiZmFHb29nbGUiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsImZhVXNlckNpcmNsZSIsImZhTGlzdCIsImZhU3RhciIsImZhSGVhcnQiLCJmYUNvbW1lbnQiLCJmYVN3YXRjaGJvb2siLCJmYVVzZXJGcmllbmRzIiwiZmFDb2ciLCJmYUVkaXQiLCJmYVVwbG9hZCIsImZhTmV3c3BhcGVyIiwiZmFBdCIsImZhQW5nbGVSaWdodCIsImZhQW5nbGVMZWZ0IiwiZmFQbHVzU3F1YXJlIiwiZmFUcmFzaCIsIndpbiIsIm9ubG9hZCIsInJlbW92ZSIsImVudiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNB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QWpDO0FBQ0Q7QUFDRjtBQUNGLEdBWkQ7QUFhRCxDQWhCRCxJOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9pbmRleC5qc3hcIixcImNvbW1vblwiLFwicmVhY3RcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyBQYWdlc1xuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vY29udGFpbmVycy9EaXNjb3Zlcic7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb250YWluZXJzL01vdmllJztcbmltcG9ydCBBdXRoIGZyb20gJy4vY29udGFpbmVycy9BdXRoJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29udGFpbmVycy9BY2NvdW50JztcbmltcG9ydCBMaXN0cyBmcm9tICcuL2NvbnRhaW5lcnMvTGlzdHMnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5cbi8vIFNoYXJlZCBDb21wb25lbnRzXG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSAnLi9jb250YWluZXJzL0FsZXJ0RGlhbG9nJztcblxuY29uc3QgUm9vdCA9ICh7IHN0b3JlIH0pID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbWluZy1zb29uXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9pbi10aGVhdGVyc1wiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXV0aFwiIGNvbXBvbmVudD17QXV0aH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2FjY291bnRcIiBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9saXN0c1wiIGNvbXBvbmVudD17TGlzdHN9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWUvOnNsdWcvOmlkXCIgY29tcG9uZW50PXtNb3ZpZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wYWdlLW5vdC1mb3VuZFwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8QWxlcnREaWFsb2cgLz5cbiAgICA8L0ZyYWdtZW50PlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuUm9vdC5wcm9wVHlwZXMgPSB7XG4gIHN0b3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb290O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX0FDQ09VTlRfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cywgc2V0TG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldEFjY291bnREZXRhaWwgPSB1c2VyID0+ICh7XG4gIHR5cGU6IFNFVF9BQ0NPVU5UX0RFVEFJTCxcbiAgcGF5bG9hZDoge1xuICAgIHVzZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEFjY291bnREZXRhaWwgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5nZXQoJy9hcGkvYWNjb3VudCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSB1c2VyID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucHV0KGAvYXBpL3VzZXIvJHt1c2VyLmlkfWAsIHVzZXIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiAnUHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZC4nLFxuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IHBhc3N3b3JkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucHV0KCcvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZWdpc3RlciA9IChkYXRhLCB1cmwpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnBvc3QodXJsLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAvLyBUT0RPOiBzZXQgdXNlciBpbmZvcm1hdGlvbiB0byBjb21tb24gc3RhdGVcbiAgfSkuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcblxufTtcbiIsImltcG9ydCB7XG4gIFRPR0dMRV9BTEVSVCxcbiAgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgVE9HR0xFX0ZJTFRFUixcbiAgU0VUX1VQTE9BREVEX0lNQUdFLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsZXJ0RGlhbG9nID0gKHsgbWVzc2FnZSwga2luZCB9KSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfQUxFUlQsXG4gIG1lc3NhZ2UsXG4gIGtpbmQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFBhZ2VMb2FkaW5nU3RhdHVzID0gc3RhdHVzID0+ICh7XG4gIHR5cGU6IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBwYWdlTG9hZGluZzogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nU3RhdHVzID0gc3RhdHVzID0+ICh7XG4gIHR5cGU6IFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgbG9hZGluZzogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGaWx0ZXIgPSAoKSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfRklMVEVSLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGxvYWRlZEltYWdlID0gdXBsb2FkZWRGaWxlID0+ICh7XG4gIHR5cGU6IFNFVF9VUExPQURFRF9JTUFHRSxcbiAgcGF5bG9hZDogdXBsb2FkZWRGaWxlLFxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfUVVFUlksIFNFVF9HRU5SRVMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldE1vdmllcyA9IHJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFNFVF9NT1ZJRVMsXG4gIG1vdmllczogcmVzcG9uc2UucmVzdWx0cyxcbiAgcGFnZTogKHJlc3BvbnNlLnBhZ2UgKyAxKSxcbiAgdG90YWxQYWdlczogcmVzcG9uc2UudG90YWxfcGFnZXMsXG4gIHRvdGFsOiByZXNwb25zZS50b3RhbF9yZXN1bHRzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSAocXVlcnkpID0+IHtcbiAgbGV0IHVybCA9ICdhcGkvZGlzY292ZXInO1xuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChxdWVyeU5hbWUsIGkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W3F1ZXJ5TmFtZV07XG4gICAgY29uc3Qgb3AgPSBpID09PSAwXG4gICAgICA/ICc/J1xuICAgICAgOiAnJic7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdXJsICs9IGAke29wfSR7cXVlcnlOYW1lfT0ke3ZhbHVlfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG11bHRpUXVlcnkgPSBgJHtxdWVyeU5hbWV9PWA7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICBtdWx0aVF1ZXJ5ICs9IGAke3Z9LGA7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHttdWx0aVF1ZXJ5fWA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE1vdmllcyhkYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRRdWVyeSA9ICh7IGZpZWxkLCB2YWx1ZSB9KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFNFVF9RVUVSWSxcbiAgICBmaWVsZCxcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHZW5yZXMgPSBnZW5yZXMgPT4gKHtcbiAgdHlwZTogU0VUX0dFTlJFUyxcbiAgZ2VucmVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRHZW5yZXMgPSAoKSA9PiBkaXNwYXRjaCA9PiBheGlvc1xuICAuZ2V0KCcvYXBpL2dlbnJlJylcbiAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkaXNwYXRjaChzZXRHZW5yZXMoZGF0YSkpKVxuICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi9saWIvY29va2llJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuaW1wb3J0IHtcbiAgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUixcbiAgQ1JFQVRFX0xJU1QsXG4gIERFTEVURV9MSVNULFxuICBBRERfVE9fTElTVCxcbiAgREVMRVRFX0ZST01fTElTVCxcbiAgU0VUX0xJU1RTLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMsIHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCB7IGNhbGxiYWNraWZ5IH0gZnJvbSAndXRpbCc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaXN0KHsgbGlzdHMsIHRvdGFsIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTElTVFMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbGlzdHMsXG4gICAgICB0b3RhbCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdEJ5Q3VycmVudFVzZXIoeyBwYWdlLCBsaW1pdCB9KSB7XG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBjb29raWUuZ2V0KCd1c2VyX2lkJyk7XG5cbiAgaWYgKCFjdXJyZW50VXNlcklkKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgfVxuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcyhgL2FwaS9saXN0cz91c2VySWQ9JHtjdXJyZW50VXNlcklkfSZwYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRMaXN0KHtcbiAgICAgICAgICBsaXN0czogcmVzcG9uc2UuZGF0YS5yb3dzLFxuICAgICAgICAgIHRvdGFsOiByZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgICB9KSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMaXN0KGxpc3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG9wcyA9ICFsaXN0LmlkID8ge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvbGlzdHMnLFxuICB9IDoge1xuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgdXJsOiBgL2FwaS9saXN0cy8ke2xpc3QuaWR9YCxcbiAgfTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3Nbb3BzLm1ldGhvZF0ob3BzLnVybCwgbGlzdClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlzdChpZCwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9saXN0cy8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0xpc3QobGlzdElkLCBtb3ZpZUlkKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUZyb21MaXN0KGxpc3RJZCwgbW92aWVJZCkge1xuXG59XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfTU9WSUVfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldE1vdmllRGV0YWlsID0gZGV0YWlsID0+ICh7XG4gIHR5cGU6IFNFVF9NT1ZJRV9ERVRBSUwsXG4gIGRldGFpbCxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVEZXRhaWwgPSBpZCA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TW92aWVEZXRhaWwobnVsbCkpO1xuXG4gIGF4aW9zLmdldChgL2FwaS9tb3ZpZS8ke2lkfWApXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkaXNwYXRjaChcbiAgICAgIHNldE1vdmllRGV0YWlsKGRhdGEpLFxuICAgICkpXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQUxFUlRfVFlQRVMgfSBmcm9tICcuLi8uLi9saWIvY29uc3RhbnRzJztcblxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGtpbmQsXG4gICAgbWVzc2FnZSxcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtJHtraW5kfSB3LTEwMCB0ZXh0LWNlbnRlcmB9IHJvbGU9XCJhbGVydFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWUsXG4gIGtpbmQ6ICdpbmZvJyxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKEFMRVJUX1RZUEVTKSxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ2FzdFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCAnLi9DYXN0LnNjc3MnO1xuXG5jb25zdCBDYXN0ID0gKHtcbiAgaWQsXG4gIG5hbWUsXG4gIGNoYXJhY3RlcixcbiAgcHJvZmlsZVBhdGgsXG59KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FzdFwiPlxuICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1hZ2VcIiBzcmM9e3Byb2ZpbGVQYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXN0LWluZm9cIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1ib2xkXCI+e25hbWV9PC9zcGFuPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWxpZ2h0XCI+e2NoYXJhY3Rlcn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ2FzdC5wcm9wVHlwZXMgPSBDYXN0U2hhcGU7XG5cbmV4cG9ydCBkZWZhdWx0IENhc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQ2FzdFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBDYXN0IGZyb20gJy4uL0Nhc3QnO1xuaW1wb3J0ICcuL0Nhc3RMaXN0LnNjc3MnO1xuXG5jb25zdCBDYXN0TGlzdCA9ICh7IGNhc3RzIH0pID0+IHtcbiAgY29uc3QgY2FzdExpc3QgPSBjYXN0cy5tYXAoYyA9PiAoXG4gICAgPENhc3RcbiAgICAgIGtleT17Yy5pZH1cbiAgICAgIG5hbWU9e2MubmFtZX1cbiAgICAgIHByb2ZpbGVQYXRoPXtjLnByb2ZpbGVQYXRofVxuICAgICAgY2hhcmFjdGVyPXtjLmNoYXJhY3Rlcn1cbiAgICAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXN0LWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2FzdCBsaXN0PC9oNT5cbiAgICAgICAge2Nhc3RMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DYXN0TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNhc3RzOiBQcm9wVHlwZXMuYXJyYXlPZihDYXN0U2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IENvbXBhbnkgPSAoeyBsb2dvLCBuYW1lIH0pID0+IHtcbiAgY29uc3QgbG9nb1BhdGggPSBsb2dvXG4gICAgPyBgJHt2aXNzbmUuaW1hZ2VzU2VjdXJlQmFzZVVybH0vdzkyLyR7bG9nb31gXG4gICAgOiBgJHt2aXNzbmUuY2RufS9pbWFnZXMvcGxhY2Vob2xkZXIucG5nYDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEgbWItMlwiPlxuICAgICAgPGltZyBjbGFzc05hbWU9XCJtci0zIGNvbXBhbnktbG9nb1wiIHNyYz17bG9nb1BhdGh9IGFsdD17bmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMFwiPntuYW1lfTwvaDY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNvbXBhbnkuZGVmYXVsdFByb3BzID0ge1xuICBsb2dvOiAnJyxcbiAgbmFtZTogJ0NvbXBhbnknLFxufTtcblxuQ29tcGFueS5wcm9wVHlwZXMgPSBDb21wYW55U2hhcGU7XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQ29tcGFueVNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBDb21wYW55IGZyb20gJy4uL0NvbXBhbnknO1xuaW1wb3J0ICcuL0NvbXBhbnlMaXN0LnNjc3MnO1xuXG5jb25zdCBDb21wYW55TGlzdCA9ICh7IGNvbXBhbmllcyB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBtYi0yXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q29tcGFuaWVzPC9oNT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyXCI+XG4gICAgICAgIHtjb21wYW5pZXMubWFwKGMgPT4gKFxuICAgICAgICAgIDxDb21wYW55IGtleT17Yy5pZH0gbG9nbz17Yy5sb2dvX3BhdGh9IG5hbWU9e2MubmFtZX0gLz5cbiAgICAgICAgKSl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5Db21wYW55TGlzdC5wcm9wVHlwZXMgPSB7XG4gIGNvbXBhbmllczogUHJvcFR5cGVzLmFycmF5T2YoQ29tcGFueVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueUxpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBNb3ZpZVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuY29uc3QgRGV0YWlsVGFibGUgPSAoeyBtb3ZpZSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPntgJHttb3ZpZS5vcmdpbmFsVGl0bGV9ICgke21vdmllLnllYXJ9KWB9PC9oNT5cbiAgICAgIDx0YWJsZSBjbGFzc05hbWU9XCJ0YWJsZSB0YWJsZS1zdHJpcGVkIHRhYmxlLXJlc3BvbnNpdmUtc20gdGFibGUtcmVzcG9uc2l2ZS14c1wiPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlJhdGluZzwvdGg+XG4gICAgICAgICAgICA8dGQ+e2Ake21vdmllLnZvdGVfYXZlcmFnZX0gKCR7bW92aWUudm90ZV9jb3VudH0pYH08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlJlbGVhc2UgRGF0ZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnJlbGVhc2VfZGF0ZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkdlbnJlczwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmdlbnJlTmFtZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5UYWdsaW5lPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUudGFnbGluZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkNvdW50cmllczwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmNvdW50cmllc308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkxhbmd1YWdlczwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmxhbmd1YWdlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+RGlyZWN0b3I8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5kaXJlY3Rvcn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPldyaXRlcjwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLndyaXRlcn08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkhvbWVwYWdlPC90aD5cbiAgICAgICAgICAgIDx0ZD5cbiAgICAgICAgICAgICAgPGEgaHJlZj17bW92aWUuaG9tZXBhZ2V9IHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIj57bW92aWUuaG9tZXBhZ2V9PC9hPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5EZXRhaWxUYWJsZS5wcm9wVHlwZXMgPSB7XG4gIG1vdmllOiBNb3ZpZVNoYXBlLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBEZXRhaWxUYWJsZTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IHsgR2VucmVTaGFwZSwgRmlsdGVyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IHsgU09SVF9PUFRJT05TIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgJy4vRmlsdGVyLnNjc3MnO1xuXG5mdW5jdGlvbiBzd2l0Y2hTb3J0UXVlcnkoc29ydEJ5KSB7XG4gIGNvbnN0IFtuYW1lLCBraW5kXSA9IHNvcnRCeS5zcGxpdCgnLicpO1xuICBjb25zdCB2YWx1ZSA9IGAke25hbWV9LiR7a2luZCA9PT0gJ2Rlc2MnID8gJ2FzYycgOiAnZGVzYyd9YDtcbiAgcmV0dXJuIHtcbiAgICBmaWVsZDogJ3NvcnRCeScsXG4gICAgdmFsdWUsXG4gIH07XG59XG5cbmZ1bmN0aW9uIGFkZEdlbnJlSWQodmFsdWUsIGN1cnJlbnRHZW5yZXMpIHtcbiAgY29uc3QgaW5kZXggPSBjdXJyZW50R2VucmVzLmluZGV4T2YodmFsdWUpO1xuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgY3VycmVudEdlbnJlcy5wdXNoKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50R2VucmVzLnNwbGljZShpbmRleCwgMSk7XG4gIH1cbiAgcmV0dXJuIGN1cnJlbnRHZW5yZXM7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUNoYW5nZVllYXIoeWVhciwgc2V0UXVlcnkpIHtcbiAgaWYgKHllYXIubGVuZ3RoID09PSA0ICYmICFOdW1iZXIuaXNOYU4oeWVhcikpIHtcbiAgICBzZXRRdWVyeSh7XG4gICAgICBmaWVsZDogJ3llYXInLFxuICAgICAgdmFsdWU6IHllYXIsXG4gICAgfSk7XG4gIH0gZWxzZSBpZiAoeWVhciA9PT0gJycpIHtcbiAgICBzZXRRdWVyeSh7XG4gICAgICBmaWVsZDogJ3llYXInLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgfSk7XG4gIH1cbn1cblxuY29uc3QgRmlsdGVyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBnZW5yZXMsXG4gICAgc2V0UXVlcnksXG4gICAgcXVlcnksXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qgc29ydEljb25DbGFzcyA9IHF1ZXJ5LnNvcnRCeS5zcGxpdCgnLicpWzFdID09PSAnZGVzYydcbiAgICA/ICdkb3duJ1xuICAgIDogJ3VwJztcblxuICBjb25zdCBzb3J0T3B0aW9ucyA9IFNPUlRfT1BUSU9OUy5tYXAoKHNvcnQpID0+IHtcbiAgICBjb25zdCBrZXkgPSBzb3J0Lm5hbWUucmVwbGFjZSgvIC9nLCAnXycpLnRvTG9jYWxlTG93ZXJDYXNlKCk7XG4gICAgcmV0dXJuIChcbiAgICAgIDxvcHRpb24ga2V5PXtrZXl9IHZhbHVlPXtgJHtrZXl9LiR7c29ydC52YWx1ZX1gfT5cbiAgICAgICAge3NvcnQubmFtZX1cbiAgICAgIDwvb3B0aW9uPlxuICAgICk7XG4gIH0pO1xuXG4gIGNvbnN0IGdlbnJlT3B0aW9ucyA9IGdlbnJlcy5tYXAoZyA9PiAoXG4gICAgPG9wdGlvbiBrZXk9e2cuaWR9IHZhbHVlPXtnLmlkfSBjbGFzc05hbWU9e3F1ZXJ5LndpdGhHZW5yZXMuaW5kZXhPZihgJHtnLmlkfWApID09PSAtMSA/ICcnIDogJ3NlbGVjdGVkJ30+XG4gICAgICB7Zy5uYW1lfVxuICAgIDwvb3B0aW9uPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHN0aWNreS10b3AgYmctd2hpdGUgbWItMiBwdC0yIHNoYWRvdy1zbSBkLW5vbmUgZC1sZy1mbGV4XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNlYXJjaFRleHR9XG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc2VhcmNoVGV4dCcsIHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxzZWxlY3RcbiAgICAgICAgICBuYW1lPVwiZ2VucmVcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3dpdGhHZW5yZXMnLCB2YWx1ZTogYWRkR2VucmVJZCgkZXZlbnQudGFyZ2V0LnZhbHVlLCBxdWVyeS53aXRoR2VucmVzKSB9KX1cbiAgICAgICAgPlxuICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5HZW5yZXM8L29wdGlvbj5cbiAgICAgICAgICB7Z2VucmVPcHRpb25zfVxuICAgICAgICA8L3NlbGVjdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgPHNlbGVjdFxuICAgICAgICAgICAgbmFtZT1cInNvcnRCeVwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICAgIGlkPVwic29ydE9wdGlvblNlbGVjdFwiXG4gICAgICAgICAgICBhcmlhLWxhYmVsPVwiU29ydCBvcHRpb25zXCJcbiAgICAgICAgICAgIHZhbHVlPXtxdWVyeS5zb3J0Qnl9XG4gICAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICdzb3J0QnknLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+U29ydCBCeTwvb3B0aW9uPlxuICAgICAgICAgICAge3NvcnRPcHRpb25zfVxuICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtYXBwZW5kXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGZpbHRlci1pbnB1dC1idXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRRdWVyeShzd2l0Y2hTb3J0UXVlcnkocXVlcnkuc29ydEJ5KSl9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17YHNvcnQtYW1vdW50LSR7c29ydEljb25DbGFzc31gfSAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxpbnB1dFxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlllYXJcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gaGFuZGxlQ2hhbmdlWWVhcigkZXZlbnQudGFyZ2V0LnZhbHVlLCBzZXRRdWVyeSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkZpbHRlci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IHRydWUsXG59O1xuXG5GaWx0ZXIucHJvcFR5cGVzID0ge1xuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKEdlbnJlU2hhcGUpLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBGaWx0ZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBzZXRRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBGaWx0ZXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vRm9vdGVyLnNjc3MnO1xuXG5jb25zdCBGb290ZXIgPSAoKSA9PiAoXG4gIDxmb290ZXIgY2xhc3NOYW1lPVwiZm9vdGVyXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHB5LTVcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1PkFib3V0IFVzPC9oNT5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPGg1PlNvY2lhbDwvaDU+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIGZhY2Vib29rXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICB0d2l0dGVyXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBpbnN0YWdyYW1cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5MYXN0IFJldmlld3M8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LXVuc3R5bGVkXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhIG15LTRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1PkNvbnRhY3Q8L2g1PlxuICAgICAgICAgIDxwPisyNTUgMDAwIDAwIDAwIDAwPC9wPlxuICAgICAgICAgIDxwPmluZm9Admlzc25lLmNvbTwvcD5cbiAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibXQtMlwiPkxhc3QgVXBkYXRlczwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAgbGlzdC1ncm91cC1mbHVzaFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkFkZCBjb21tb24gZmlsdGVyIGZvciBtb3ZpZXM8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkdvb2dsZSBhdXRoIG9wdGlvbnMgaXMgY29tcGxldGVkPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5GaXhlZCBGYWNlYm9vayBhdXRoIGlzc3VlczwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG1iLTFcIj5cbiAgICAgICAgPHNwYW4+Q29weXJpZ2h0IMKpIDIwMTkgVmlzc25lPC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZm9vdGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBNZW51ID0gKHsgcGF0aCwgaXRlbXMgfSkgPT4ge1xuICBjb25zdCBtZW51SXRlbXMgPSBpdGVtcy5tYXAobSA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIga2V5PXttLnBhdGh9PlxuICAgICAgPExpbmtcbiAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHttLnBhdGggPT09IHBhdGggPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgIHRvPXttLnBhdGh9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17bS5pY29ufSAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0yXCI+e20ubmFtZX08L3NwYW4+XG4gICAgICA8L0xpbms+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi10YWJzIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIHttZW51SXRlbXN9XG4gICAgPC91bD5cbiAgKTtcbn07XG5cbk1lbnUucHJvcFR5cGVzID0ge1xuICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGl0ZW1zOiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBpY29uOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICB9KSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL01vZGFsLnNjc3MnO1xuXG5jb25zdCBNb2RhbCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgY2FuY2VsLFxuICAgIHN1Ym1pdCxcbiAgICBjaGlsZHJlbixcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgY2xhc3NOYW1lID0gc2hvdyA/ICdzaG93IGQtYmxvY2snIDogJyc7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsIGZhZGUgJHtjbGFzc05hbWV9YH0gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJhY2tkcm9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtjYW5jZWx9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXR9PlNhdmU8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vZGFsLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG59O1xuXG5Nb2RhbC5wcm9wVHlwZXMgPSB7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNhbmNlbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc3VibWl0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vZGFsO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQb3N0ZXIgZnJvbSAnLi4vUG9zdGVyJztcbmltcG9ydCAnLi9Nb3ZpZUNhcmQuc2Nzcyc7XG5cbmNvbnN0IE1vdmllQ2FyZCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgaWQsXG4gICAgdGl0bGUsXG4gICAgaW1hZ2UsXG4gICAgcmF0ZSxcbiAgICBzbHVnLFxuICB9ID0gcHJvcHM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vdmllLWNhcmQgaC0xMDAgdy0xMDAgcm91bmRlZC0wIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlciBpbWctdGh1bWJuYWlsXCI+XG4gICAgICA8TGluayB0bz17YG1vdmllLyR7c2x1Z30vJHtpZH1gfSBjbGFzc05hbWU9XCJ3LTEwMFwiPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJiYWRnZSByYXRpbmctdGFnIHNoYWRvdy1zbSBkLWZsZXggZmxleC1jb2x1bW5cIj5cbiAgICAgICAgICB7cmF0ZX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8UG9zdGVyIHNyYz17aW1hZ2V9IGFsdD17dGl0bGV9IC8+XG4gICAgICA8L0xpbms+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUNhcmQucHJvcFR5cGVzID0ge1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpbWFnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICByYXRlOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHNsdWc6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBNb3ZpZVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBNb3ZpZUNhcmQgZnJvbSAnLi9Nb3ZpZUNhcmQnO1xuXG5jb25zdCBNb3ZpZUxpc3QgPSAoeyBtb3ZpZXMgfSkgPT4ge1xuICBjb25zdCBsaXN0ID0gbW92aWVzLm1hcChtb3ZpZSA9PiAoXG4gICAgPGRpdiBrZXk9e21vdmllLmlkfSBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTQgY29sLWxnLTIgbWItMiBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgPE1vdmllQ2FyZFxuICAgICAgICBpZD17bW92aWUuaWR9XG4gICAgICAgIGltYWdlPXttb3ZpZS5wb3N0ZXJ9XG4gICAgICAgIHRpdGxlPXttb3ZpZS50aXRsZX1cbiAgICAgICAgcmF0ZT17bW92aWUudm90ZUF2ZXJhZ2V9XG4gICAgICAgIHNsdWc9e21vdmllLnNsdWd9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICB7bGlzdH1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllTGlzdC5wcm9wVHlwZXMgPSB7XG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1vdmllTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBVc2VyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL05hdmJhci5zY3NzJztcblxuY29uc3QgTmF2YmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB1c2VyLFxuICAgIGlzTG9nZ2VkSW4sXG4gICAgcGF0aE5hbWUsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBsb2dpbkJ1dHRvbiA9IGlzTG9nZ2VkSW4gPyAoXG4gICAgPEZyYWdtZW50PlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtIFwiPlxuICAgICAgICA8TGluayBjbGFzc05hbWU9XCJuYXYtbGlua1wiIHRvPVwiL3Byb2ZpbGUvYWNjb3VudFwiIHRpdGxlPVwiUHJvZmlsZVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1yLTJcIj57dXNlci51c2VyTmFtZX08L3NwYW4+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidXNlclwiIC8+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvbGk+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgPGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiBocmVmPVwiL2xvZ291dFwiIHRpdGxlPVwiTG9nb3V0XCI+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbi1vdXQtYWx0XCIgLz5cbiAgICAgICAgPC9hPlxuICAgICAgPC9saT5cbiAgICA8L0ZyYWdtZW50PlxuICApIDogKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgPExpbmsgdG89XCIvYXV0aFwiIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+bG9naW48L0xpbms+XG4gICAgPC9saT5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgY2xhc3NOYW1lPVwibmF2YmFyIG5hdmJhci1leHBhbmQtbGcgbmF2YmFyLWRhcmsgYmctZGFya1wiPlxuICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2YmFyLWJyYW5kXCIgdG89XCIvXCI+XG4gICAgICAgIDxpbWdcbiAgICAgICAgICBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9XG4gICAgICAgICAgYWx0PVwiVmlzc25lXCJcbiAgICAgICAgICBoZWlnaHQ9XCIzMFwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBkLWJsb2NrXCJcbiAgICAgICAgLz5cbiAgICAgIDwvTGluaz5cblxuICAgICAgPGRpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBpZD1cImZpbHRlckJ1dHRvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJmaWx0ZXJcIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyXCJcbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJcbiAgICAgICAgICBkYXRhLXRhcmdldD1cIiNuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1leHBhbmRlZD1cImZhbHNlXCJcbiAgICAgICAgICBhcmlhLWxhYmVsPVwiVG9nZ2xlIG5hdmlnYXRpb25cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXItaWNvblwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sbGFwc2UgbmF2YmFyLWNvbGxhcHNlXCIgaWQ9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCI+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG1yLWF1dG9cIj5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvaW4tdGhlYXRlcnMnID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9pbi10aGVhdGVyc1wiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGluIHRoZWF0ZXJzXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7cGF0aE5hbWUgPT09ICcvY29taW5nLXNvb24nID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICAgICAgICB0bz1cIi9jb21pbmctc29vblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGNvbWluZyBzb29uZ1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICAgIDx1bCBjbGFzc05hbWU9XCJuYXZiYXItbmF2IG15LWF1dG9cIj5cbiAgICAgICAgICB7bG9naW5CdXR0b259XG4gICAgICAgIDwvdWw+XG4gICAgICA8L2Rpdj5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cbk5hdmJhci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICB1c2VyOiB7fSxcbiAgcGF0aE5hbWU6ICcvJyxcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIHBhdGhOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL05vdEZvdW5kLnNjc3MnO1xuXG5jb25zdCBOb3RGb3VuZCA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwYWdlLW5vdC1mb3VuZFwiPlxuICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvb25nLnBuZ2B9IGFsdD1cIjQwNFwiIC8+XG4gICAgPGg0PjQwNDwvaDQ+XG4gICAgPGg1PlBhZ2Ugbm90IGZvdW5kPC9oNT5cbiAgICA8cD5cbiAgICAgIFdlIGFyZSBzb3JyeS4gVGhlIHBhZ2UgeW91IGFyZSBsb29raW5nIGZvciB3YXMgbW92ZWQsIHJlbW92ZWQsIHJlbmFtZWQgb3IgbWlnaHQgbmV2ZXIgZXhpc3RlZC5cbiAgICA8L3A+XG4gICAgPGEgaHJlZj1cIi9cIiBjbGFzc05hbWU9XCJidXR0b24gaXMtcHJpbWFyeVwiPkdPIFRPIEhPTUU8L2E+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgTm90Rm91bmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi9TcGlubmVyJztcblxuY29uc3QgUGFnZUxvYWRpbmcgPSAoeyBzaG93IH0pID0+IHtcbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tZml4ZWQgdG9wLTAgbGVmdC0wIGJvdHRvbS0wIGJnLWxpZ2h0IGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGFsaWduLWl0ZW1zLWNlbnRlciB3LTEwMCBoLTEwMFwiPlxuICAgICAgPFNwaW5uZXIgc2hvdyBzaXplPVwibGdcIiBhZGRpb25hbENsYXNzPVwibXItMlwiIC8+XG4gICAgICBMb2FkaW5nLi4uXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5QYWdlTG9hZGluZy5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdlTG9hZGluZztcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgaGFuZGxlQ2xpY2sgPSAocGFnZSwgY3VycmVudFBhZ2UsIHRvdGFsUGFnZSkgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcblxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYWdlKSkge1xuICAgIHJldHVybiB7IHBhZ2UgfTtcbiAgfVxuXG4gIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICBjb25zdCBuZXdQYWdlID0gKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgcmVzdWx0ID0gbmV3UGFnZSA9PT0gMCA/IDEgOiBuZXdQYWdlO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xuICAgIHJlc3VsdCA9ICgoY3VycmVudFBhZ2UgKyAxKSA+IHRvdGFsUGFnZSlcbiAgICAgID8gdG90YWxQYWdlXG4gICAgICA6IChjdXJyZW50UGFnZSArIDEpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZTogcmVzdWx0IH07XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBhZ2VOdW1iZXJzID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgdG90YWwsXG4gICAgYnV0dG9uQ291bnQsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xuICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsIC8gbGltaXQpO1xuICBjb25zdCBiYyA9IE1hdGguY2VpbChidXR0b25Db3VudCAvIDIpO1xuXG4gIGZvciAobGV0IGkgPSAocGFnZSAtIChiYyAtIDEpKTsgaSA8IChwYWdlICsgYmMpOyBpICs9IDEpIHtcbiAgICBpZiAoaSA+IDAgJiYgaSA8PSB0b3RhbFBhZ2UpIHtcbiAgICAgIHBhZ2VOdW1iZXJzLnB1c2goaSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBhZ2VOdW1iZXJzO1xufTtcblxuXG5jb25zdCBQYWdpbmF0aW9uID0gKHsgb3B0aW9ucyB9KSA9PiB7XG4gIGNvbnN0IHsgcGFnZSwgb25QYWdpbmF0ZSwgbGltaXQsIHRvdGFsIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gZ2VuZXJhdGVQYWdlTnVtYmVycyhvcHRpb25zKTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5mbG9vcih0b3RhbCAvIGxpbWl0KTtcblxuICBpZiAocGFnZU51bWJlcnMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiA8c3BhbiAvPjtcbiAgfVxuXG4gIGNvbnN0IHBhZ2VCdXR0b25zID0gcGFnZU51bWJlcnMubWFwKHBuID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICAke3BuID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiAocG4gIT09IHBhZ2UgPyBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKHBuKSkgOiAnJyl9XG4gICAgICA+XG4gICAgICAgIHtwbn1cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPT09IDEgPyAnZGlzYWJsZWQnIDogJyd9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ3ByZXYnLCBwYWdlKSl9XG4gICAgICAgICAgICBkaXNhYmxlZD17cGFnZSA9PT0gMX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgICAge3BhZ2VCdXR0b25zfVxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gdG90YWxQYWdlID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKCduZXh0JywgcGFnZSkpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGJ1dHRvbkNvdW50OiAzLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2U6IDEsXG4gICAgbGltaXQ6IDEwLFxuICB9LFxufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblBhZ2luYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBidXR0b25Db3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGltYWdlT25Mb2FkKCkge1xuXG59XG5cbmZ1bmN0aW9uIGltYWdlT25FcnJvcigpIHtcbiAgdGhpcy5zcmMgPSB2aXNzbmUuZGVmYXVsdENvdmVySW1hZ2VQYXRoO1xufVxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgIHNyYz17YCR7c3JjfWB9XG4gICAgICBvbkxvYWQ9e2ltYWdlT25Mb2FkfVxuICAgICAgb25FcnJvcj17aW1hZ2VPbkVycm9yfVxuICAgICAgYWx0PXthbHR9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0ZXIucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4vUGFnZUxvYWRpbmcnO1xuaW1wb3J0IHByb2ZpbGVNZW51IGZyb20gJy4uL2NvbnN0YW50cy9wcm9maWxlLW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhdGgsIHBhZ2VMb2FkaW5nLCB1c2VyIH0gPSBwcm9wcztcblxuICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIHNob3cgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayByb3VuZGVkLWNpcmNsZSBhdmF0YXItYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgfHwgYCR7dmlzc25lLmNkbn0vdWNvbnRlbnQvYXZhdGFyL2RlZmF1bHQtYXZhdGFyLmpwZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlIGJvcmRlciBhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoNT57YEAke3VzZXIudXNlck5hbWV9YH08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1lbnUgaXRlbXM9e3Byb2ZpbGVNZW51fSBwYXRoPXtwYXRofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaG93LCBoZWlnaHQgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjc1XCJcbiAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGhlaWdodDogMixcbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3csXG4gICAgc2l6ZSxcbiAgICBraW5kLFxuICAgIGNvbG9yLFxuICAgIGFkZGlvbmFsQ2xhc3MsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyLSR7a2luZH0gc3Bpbm5lci0ke2tpbmR9LSR7c2l6ZX0gdGV4dC0ke2NvbG9yfSAke2FkZGlvbmFsQ2xhc3N9YH0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc2l6ZTogJ3NtJyxcbiAga2luZDogJ2dyb3cnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBhZGRpb25hbENsYXNzOiAnJyxcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWRkaW9uYWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICBdKSxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYm9yZGVyJyxcbiAgICAnZ3JvdycsXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vUGFnaW5hdGlvbic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vQWxlcnQnO1xuaW1wb3J0ICcuL1RhYmxlTGlzdC5zY3NzJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKGZpZWxkcykgPT4ge1xuICBjb25zdCB2aXNpYmxlRmllbGRzID0gZmllbGRzXG4gICAgLmZpbHRlcihmID0+ICFmLmhpZGRlbilcbiAgICAubWFwKGYgPT4gPHRoIHNjb3BlPVwiY29sXCI+e2YudGl0bGV9PC90aD4pO1xuXG4gIHJldHVybiA8dHI+e3Zpc2libGVGaWVsZHN9PC90cj47XG59O1xuXG5jb25zdCBjcmVhdGVCb2R5ID0gKGRhdGEsIGZpZWxkcywgc2VsZWN0ZWQsIG9uU2VsZWN0KSA9PiB7XG4gIGNvbnN0IHRib2R5ID0gW107XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUZpZWxkcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQuaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2ID0gaXRlbVtmaWVsZC5uYW1lXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZmllbGQuZm9ybWF0XG4gICAgICAgID8gZmllbGQuZm9ybWF0KHYpXG4gICAgICAgIDogdi50b1N0cmluZygpO1xuXG4gICAgICBpdGVtRmllbGRzLnB1c2goPHRkPnt2YWx1ZX08L3RkPik7XG4gICAgfSk7XG5cbiAgICB0Ym9keS5wdXNoKFxuICAgICAgPHRyIGNsYXNzTmFtZT17YCR7aXRlbS5pZCA9PT0gc2VsZWN0ZWQuaWQgPyAnc2VsZWN0ZWQnIDogJyd9YH0gb25DbGljaz17KCkgPT4gb25TZWxlY3QoaXRlbSl9PlxuICAgICAgICB7aXRlbUZpZWxkc31cbiAgICAgIDwvdHI+LFxuICAgICk7XG4gIH0pO1xuXG4gIHJldHVybiB0Ym9keTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBhZ2luYXRpb24gPSAob3B0aW9ucywgZGF0YUxlbmd0aCkgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxQYWdpbmF0aW9uIG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICA8c3Bhbj57YFNob3cgJHtkYXRhTGVuZ3RofSByZXN1bHQgb2YgJHtvcHRpb25zLnRvdGFsfWB9PC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuY29uc3QgVGFibGVMaXN0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBkYXRhLFxuICAgIHNlbGVjdGVkLFxuICAgIGZpZWxkcyxcbiAgICBwYWdpbmF0aW9uLFxuICAgIHJlc3BvbnNpdmUsXG4gICAgb25DcmVhdGUsXG4gICAgb25FZGl0LFxuICAgIG9uRGVsZXRlLFxuICAgIG9uU2VsZWN0LFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgYnRuR3JvdXAgPSAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BidG4tZ3JvdXAgdy0xMDAgJHsoIW9uQ3JlYXRlICYmICFvbkVkaXQgJiYgIW9uRGVsZXRlKSA/ICdkLW5vbmUnIDogJyd9YH0gcm9sZT1cImdyb3VwXCIgYXJpYS1sYWJlbD1cImNydWRcIj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMCBidG4tc20gJHtvbkNyZWF0ZSA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgb25DbGljaz17b25DcmVhdGV9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPkNyZWF0ZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uRWRpdCA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgb25DbGljaz17b25FZGl0fVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJlZGl0XCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPkVkaXQ8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMCBidG4tc20gJHtvbkRlbGV0ZSA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgb25DbGljaz17b25EZWxldGV9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInRyYXNoXCIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMVwiPkRlbGV0ZTwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xuXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJUaGVyZSB3ZXJlIG5vIHJlc3VsdC5cIiBraW5kPVwid2FybmluZ1wiIC8+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvbkNyZWF0ZX0gY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgdy0xMDAgJHtvbkNyZWF0ZSA/ICcnIDogJ2QtYmxvY2snfWB9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoZWFkcyA9IGNyZWF0ZUhlYWRlcihmaWVsZHMpO1xuICBjb25zdCBib2R5ID0gY3JlYXRlQm9keShkYXRhLCBmaWVsZHMsIHNlbGVjdGVkLCBvblNlbGVjdCk7XG4gIGNvbnN0IHBhZ2luYXRpb25CdXR0b25zID0gY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uLCBkYXRhLmxlbmd0aCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICB7YnRuR3JvdXB9XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2B0YWJsZSB2LXRhYmxlICR7cmVzcG9uc2l2ZSA/ICd0YWJsZS1yZXNwb25zaXZlJyA6ICcnfWB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHtoZWFkc31cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtwYWdpbmF0aW9uQnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVGFibGVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YTogW10sXG4gIHNlbGVjdGVkOiB7fSxcbiAgZmllbGRzOiBbXSxcbn07XG5cblRhYmxlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCksXG4gIGZpZWxkczogUHJvcFR5cGVzLmluc3RhbmNlT2YoQXJyYXkpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9WaWRlby5zY3NzJztcblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlb0tleSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gbWItMiBlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICA8aWZyYW1lXG4gICAgICBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlxuICAgICAgdGl0bGU9XCJWaWRlb1wiXG4gICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvS2V5fT9hdXRvcGxheT0wJm9yaWdpbj0ke3Zpc3NuZS5kb21haW59YH1cbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9LZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLy8gY29tbW9uXG5leHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxFUlQgPSAnVE9HR0xFX0FMRVJUJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfRklMVEVSID0gJ1RPR0dMRV9GSUxURVInO1xuXG4vLyBhdXRoXG5leHBvcnQgY29uc3QgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMgPSAnU0VUX1BBR0VfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HX1NUQVRVUyA9ICdTRVRfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gJ1JFR0lTVEVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbi8vIGRpc2NvdmVyXG5leHBvcnQgY29uc3QgR0VUX01PVklFUyA9ICdHRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVTID0gJ1NFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRVMgPSAnU0VUX0dFTlJFUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVJZID0gJ1NFVF9RVUVSWSc7XG5cbi8vIGxpc3RzXG5leHBvcnQgY29uc3QgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiA9ICdHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1RTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fTElTVCA9ICdBRERfVE9fTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fTElTVCA9ICdERUxFVEVfRlJPTV9MSVNUJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVFMgPSAnU0VUX0xJU1RTJztcblxuLy8gbW92aWUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0VUX01PVklFX0RFVEFJTCA9ICdTRVRfTU9WSUVfREVUQUlMJztcblxuLy8gcHJvZmlsZVxuLy8gIC0tIEFjY291bnRcbmV4cG9ydCBjb25zdCBTRVRfQUNDT1VOVF9ERVRBSUwgPSAnU0VUX0FDQ09VTlRfREVUQUlMJztcbmV4cG9ydCBjb25zdCBTRVRfVVBMT0FERURfSU1BR0UgPSAnU0VUX1VQTE9BREVEX0lNQUdFJztcblxuLy8gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgU09SVF9PUFRJT05TID0gW3tcbiAgbmFtZTogJ1BvcHVsYXJpdHknLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JldmVudWUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUHJpbWFyeSBSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnT3JnaW5hbCBUaXRsZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIEF2ZXJhZ2UnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBDb3VudCcsXG4gIHZhbHVlOiAnZGVzYycsXG59XTtcbiIsImNvbnN0IHByb2ZpbGVNZW51ID0gW1xuICB7XG4gICAgbmFtZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvYWNjb3VudCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlzdHMnLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvbGlzdHMnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gIC8vICAgaWNvbjogJ2hlYXJ0JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZmF2b3JpdGVzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdDb21tZW50cycsXG4gIC8vICAgaWNvbjogJ2NvbW1lbnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9jb21tZW50cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnUmV2aWV3cycsXG4gIC8vICAgaWNvbjogJ25ld3NwYXBlcicsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3Jldmlld3MnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAvLyAgIGljb246ICd1c2VyLWZyaWVuZHMnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdTZXR0aW5ncycsXG4gIC8vICAgaWNvbjogJ2NvZycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JnaW5hbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9tZXBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXN0U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcm9maWxlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2VucmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY3Jld3M6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgdm90ZUF2ZXJhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHJlbGVhc2VZZWFyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCB7IFVzZXJTaGFwZSwgbWF0Y2hTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0ICcuL0FjY291bnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHByb3BzLnNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHVzZXJGb3JtOiB7fSxcbiAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSwgZmllbGQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgICBzdGF0ZVtmaWVsZF1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nLCBjaGFuZ2VQYXNzd29yZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQub2xkUGFzc3dvcmQgPT09IHBhc3N3b3JkLm5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGNhbm5vdCBiZSB0aGUgc2FtZSB3aXRoIG9sZCBwYXNzd29yZC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDoge30gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdXBkYXRlVXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVzZXJGb3JtLCB2YWxpZGF0aW9uLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXIodXNlckZvcm0pfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30ga2luZD1cImJvcmRlclwiIGNvbG9yPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ30+VXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+Q2hhbmdlIFBhc3N3b3JkPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkSW5wdXRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQubmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybU5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCwgY2hhbmdlUGFzc3dvcmQsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBY2NvdW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBzaG93LFxuICAgIG1lc3NhZ2UsXG4gICAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHNpdGUtYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVBbGVydERpYWxvZ30+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGtpbmQ6ICdpbmZvJyxcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCAnLi9BbGVydERpYWxvZy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY29tbW9uIH0pID0+ICh7XG4gIHNob3c6IGNvbW1vbi5zaG93QWxlcnQsXG4gIG1lc3NhZ2U6IGNvbW1vbi5hbGVydE1lc3NhZ2UsXG4gIGtpbmQ6IGNvbW1vbi5hbGVydEtpbmQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsgc2hvdzogZmFsc2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBbGVydERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uLy4uL2xpYi9jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaEZvcm0gPSB0aGlzLnN3aXRjaEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luUmVnaXN0ZXIgPSB0aGlzLmxvZ2luUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29va2llLmdldCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgdG9nZ2xlQWxlcnREaWFsb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAoIWZvcm0uZW1haWwgfHwgIWVtYWlsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtLnBhc3N3b3JkIHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA+IDE2KSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIG11c3QgYmUgNi0xNiBjaGFjcmFjdGVyLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgaWYgKCFmb3JtLnVzZXJOYW1lIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+VXNlciBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmZpcnN0TmFtZSB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkZpcnN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmxhc3ROYW1lIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+TGFzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm0uY29uZmlybVBhc3N3b3JkICE9PSBmb3JtLnBhc3N3b3JkKSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBkb250IG1hdGNoPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgbG9naW5SZWdpc3RlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvbihmb3JtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB1cmwgPSBpc1JlZ2lzdGVyXG4gICAgICA/ICcvYXBpL3JlZ2lzdGVyJ1xuICAgICAgOiAnL2FwaS9sb2dpbic7XG5cbiAgICByZXR1cm4gcHJvcHMubG9naW5SZWdpc3Rlcihmb3JtLCB1cmwpO1xuICB9XG5cbiAgc3dpdGNoRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNSZWdpc3RlcjogIXByZXZTdGF0ZS5pc1JlZ2lzdGVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgaXNSZWdpc3RlcixcbiAgICAgIHZhbGlkYXRpb24sXG4gICAgICBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICAgIGxldCBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICBsZXQgcmVnaXN0ZXJJbnB1dCA9IG51bGw7XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgICBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ0xPR0lOJztcblxuICAgICAgcmVnaXN0ZXJJbnB1dCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiY29uZmlybVBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybVBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwibGFzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhdXRoLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH0gYWx0PVwiVmlzc25lXCIgaGVpZ2h0PVwiNzBcIiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVJlZ1wiIGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxJbnB1dEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkSW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJwYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVubG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5wYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge3JlZ2lzdGVySW5wdXR9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gJHtsb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZ29vZ2xlICBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2dvb2dsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEdPT0dMRVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGZhY2Vib29rIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEZBQ0VCT09LXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXV0aC5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgeyBsb2dpblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0ICcuL0F1dGguc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGxvZ2luUmVnaXN0ZXI6IChkYXRhLCB1cmwpID0+IGRpc3BhdGNoKGxvZ2luUmVnaXN0ZXIoZGF0YSwgdXJsKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBtZXNzYWdlID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsga2luZDogJ2RhbmdlcicsIG1lc3NhZ2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHtcbiAgVXNlclNoYXBlLFxuICBNb3ZpZVNoYXBlLFxuICBHZW5yZVNoYXBlLFxuICBGaWx0ZXJTaGFwZSxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9hZE1vdmllcyA9IHRoaXMubG9hZE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEdlbnJlcywgdG9nZ2xlRmlsdGVyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhdGggfSA9IG1hdGNoO1xuXG4gICAgZ2V0R2VucmVzKCk7XG5cbiAgICBpZiAoWycvY29taW5nLXNvb24nLCAnL2luLXRoZWF0ZXJzJ10uaW5kZXhPZihwYXRoKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0UXVlcnkoeyBmaWVsZDogJ2ZpbHRlcicsIHZhbHVlOiBwYXRoLnJlcGxhY2UoJy8nLCAnJykgfSk7XG4gICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3ZpZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGNvbnN0IHsgc2V0UXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UXVlcnkocXVlcnkpLnRoZW4odGhpcy5sb2FkTW92aWVzKTtcbiAgfVxuXG4gIGxvYWRNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZXMsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllcyhxdWVyeSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW92aWVzLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZ2VucmVzLFxuICAgICAgcXVlcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNob3dGaWx0ZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IHBhdGhOYW1lPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8RmlsdGVyIHNob3c9e3Nob3dGaWx0ZXJ9IGdlbnJlcz17Z2VucmVzfSBzZXRRdWVyeT17dGhpcy5zZXRRdWVyeX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IGlkPVwibGlzdFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtLTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vdmllc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMiAke2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5EaXNjb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxuICB1c2VyOiB7fSxcbn07XG5cbkRpc2NvdmVyLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRHZW5yZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBzaG93RmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vRGlzY292ZXInO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TW92aWVzLFxuICBzZXRRdWVyeSxcbiAgZ2V0R2VucmVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2NvdmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIHF1ZXJ5OiBzdGF0ZS5kaXNjb3Zlci5xdWVyeSxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbW92aWVzOiBzdGF0ZS5kaXNjb3Zlci5tb3ZpZXMsXG4gIGdlbnJlczogc3RhdGUuZGlzY292ZXIuZ2VucmVzLFxuICBzaG93RmlsdGVyOiBzdGF0ZS5jb21tb24uc2hvd0ZpbHRlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldE1vdmllcyhxdWVyeSkpLFxuICBzZXRRdWVyeTogcXVlcnkgPT4gZGlzcGF0Y2goc2V0UXVlcnkocXVlcnkpKSxcbiAgZ2V0R2VucmVzOiAoKSA9PiBkaXNwYXRjaChnZXRHZW5yZXMoKSksXG4gIHRvZ2dsZUZpbHRlcjogc2hvdyA9PiBkaXNwYXRjaCh0b2dnbGVGaWx0ZXIoc2hvdykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShEaXNjb3Zlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZUxpc3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBsaXN0OiB7fSxcbiAgICAgIHNlbGVjdGVkOiB7fSxcbiAgICAgIHF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gICAgdGhpcy5nZXRMaXN0cyA9IHRoaXMuZ2V0TGlzdHMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsID0gdGhpcy50b2dnbGVNb2RhbC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY3JlYXRlID0gdGhpcy5jcmVhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlc3Ryb3kgPSB0aGlzLmRlc3Ryb3kuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZSA9IHRoaXMudXBkYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRBY2NvdW50RGV0YWlsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUucXVlcnksIHF1ZXJ5KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBnZXRMaXN0cygpIHtcbiAgICBjb25zdCB7IGdldExpc3RCeUN1cnJlbnRVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnkpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHsgZGVsZXRlTGlzdCwgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLmlkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnd2FybmluZycsXG4gICAgICAgIG1lc3NhZ2U6ICdObyBzZWxlY3RlZCBkYXRhLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVMaXN0KHNlbGVjdGVkLmlkLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGlzdDogc2VsZWN0ZWQsXG4gICAgfSwgdGhpcy50b2dnbGVNb2RhbCk7XG4gIH1cblxuICB0b2dnbGVNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd01vZGFsOiAhcHJldlN0YXRlLnNob3dNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQucGFyc2VkVmFsdWUgfHwgdGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKG5hbWUgPT09ICdwdWJsaWMnKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSAndHJ1ZSc7XG4gICAgfVxuXG4gICAgbGlzdFtuYW1lXSA9IHZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3QgfSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHNhdmVMaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHNhdmVMaXN0KGxpc3QsICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBxdWVyeSxcbiAgICAgIHNob3dNb2RhbCxcbiAgICAgIGxpc3QsXG4gICAgICBzZWxlY3RlZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIHVzZXIsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHRvdGFsLFxuICAgICAgdGFibGVGaWVsZHMsXG4gICAgICBsaXN0cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICA8VGFibGVMaXN0XG4gICAgICAgICAgICB0aXRsZT1cIk15IExpc3RzXCJcbiAgICAgICAgICAgIGRhdGE9e2xpc3RzfVxuICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9e3RoaXMuZGVzdHJveX1cbiAgICAgICAgICAgIG9uRWRpdD17dGhpcy51cGRhdGV9XG4gICAgICAgICAgICBvblNlbGVjdD17cyA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHMgfSl9XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBmaWVsZHM9e3RhYmxlRmllbGRzfVxuICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZSxcbiAgICAgICAgICAgICAgbGltaXQ6IHF1ZXJ5LmxpbWl0LFxuICAgICAgICAgICAgICBidXR0b25Db3VudDogNSxcbiAgICAgICAgICAgICAgb25QYWdpbmF0ZTogdGhpcy5zZXRRdWVyeSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSB0aXRsZT1cIkNyZWF0ZSBMaXN0XCIgY2FuY2VsPXt0aGlzLnRvZ2dsZU1vZGFsfSBzdWJtaXQ9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+TGlzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bGlzdC5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2xpc3QucHVibGljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIFB1YmxpYyBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cImZhbHNlXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyFsaXN0LnB1YmxpY31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICBQcml2YXRlIExpc3RcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkxpc3RzLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG90YWw6IDAsXG59O1xuXG5MaXN0cy5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0QWNjb3VudERldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2F2ZUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciwgc2F2ZUxpc3QsIGRlbGV0ZUxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2xpc3RzJztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgTGlzdHMgZnJvbSAnLi9MaXN0cyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxpc3RzOiBzdGF0ZS5saXN0cy5saXN0cyxcbiAgdG90YWw6IHN0YXRlLmxpc3RzLnRvdGFsLFxuICB0YWJsZUZpZWxkczogc3RhdGUubGlzdHMudGFibGVGaWVsZHMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0ZS5jb21tb24ucGFnZUxvYWRpbmcsXG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldExpc3RCeUN1cnJlbnRVc2VyKHF1ZXJ5KSksXG4gIHNhdmVMaXN0OiAobGlzdCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHNhdmVMaXN0KGxpc3QsIGNhbGxiYWNrKSksXG4gIGRlbGV0ZUxpc3Q6IChpZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGRlbGV0ZUxpc3QoaWQsIGNhbGxiYWNrKSksXG4gIGdldEFjY291bnREZXRhaWw6ICgpID0+IGRpc3BhdGNoKGdldEFjY291bnREZXRhaWwoKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZURldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGV0YWlsLCB1c2VyLCBpc0xvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNob3cgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW8gPSBkZXRhaWwudmlkZW9zLmxlbmd0aCA+IDBcbiAgICAgID8gPFZpZGVvIHZpZGVvS2V5PXtkZXRhaWwudmlkZW9zWzBdLmtleX0gLz5cbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiIHNyYz17ZGV0YWlsLnBvc3RlclBhdGh9IGFsdD17ZGV0YWlsLnRpdGxlfSAvPlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBtYXRjaDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRldGFpbDogc3RhdGUubW92aWUuZGV0YWlsLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb3ZpZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVjcycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgd2l0aEdlbnJlczogW10sXG4gICAgeWVhcjogbnVsbCxcbiAgICBjcmV3czogW10sXG4gICAgY2FzdHM6IFtdLFxuICB9LFxuICBpc0xvZ2dlZEluOiAhIXVzZXIuZW1haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb3ZlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBsaXN0cyxcbiAgY29tbW9uLFxufSk7XG4iLCJpbXBvcnQgeyBTRVRfTElTVFMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0czogW10sXG4gIHRvdGFsOiAwLFxuICB0YWJsZUZpZWxkczogW3tcbiAgICB0aXRsZTogJ0lkJyxcbiAgICBuYW1lOiAnaWQnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSwge1xuICAgIHRpdGxlOiAnTmFtZScsXG4gICAgbmFtZTogJ25hbWUnLFxuICB9LCB7XG4gICAgdGl0bGU6ICdDcmVhdGUgRGF0ZScsXG4gICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgfSxcbiAgfSwge1xuICAgIHRpdGxlOiAnUHVibGljJyxcbiAgICBuYW1lOiAncHVibGljJyxcbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA/ICdQdWJsaWMnIDogJ1ByaXZhdGUnO1xuICAgIH0sXG4gIH1dLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTElTVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLmxpc3RzLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkZXRhaWw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTU9WSUVfREVUQUlMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLmRldGFpbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgdGh1bmtNaWRkbGV3YXJlLFxuICAgICksXG4gICk7XG59XG4iLCJcbmltcG9ydCB7XG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzLFxuICB0b2dnbGVBbGVydERpYWxvZyxcbiAgc2V0TG9hZGluZ1N0YXR1cyxcbn0gZnJvbSAnLi4vYXBwL2FjdGlvbnMvY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkge1xuICByZXR1cm4gKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG5cbiAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzQ29kZSkge1xuICAgICAgY2FzZSA0MDQ6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vcGFnZS1ub3QtZm91bmRgO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0MDM6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVTID0gW1xuICAncHJpbWFyeScsXG4gICdzZWNvbmRhcnknLFxuICAnc3VjY2VzcycsXG4gICdkYW5nZXInLFxuICAnd2FybmluZycsXG4gICdpbmZvJyxcbiAgJ2xpZ2h0JyxcbiAgJ2RhcmsnLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVfSUNPTl9NQVAgPSB7XG4gIHByaW1hcnk6ICcnLFxufTtcbiIsImNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG5jb25zdCBzZXQgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgZG9jLmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbn07XG5cbmNvbnN0IGdldCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2MuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgW2NuYW1lLCBjdmFsdWVdID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChjbmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICByZXR1cm4gY3ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0LFxuICBzZXQsXG59O1xuIiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge1xuICBmYVVzZXIsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFVbmxvY2ssXG4gIGZhQWxpZ25MZWZ0LFxuICBmYUtleSxcbiAgZmFTaWduYXR1cmUsXG4gIGZhRmlsdGVyLFxuICBmYVNvcnRBbW91bnRVcCxcbiAgZmFTb3J0QW1vdW50RG93bixcbiAgZmFVc2VyQ2lyY2xlLFxuICBmYUxpc3QsXG4gIGZhU3RhcixcbiAgZmFIZWFydCxcbiAgZmFDb21tZW50LFxuICBmYVN3YXRjaGJvb2ssXG4gIGZhVXNlckZyaWVuZHMsXG4gIGZhQ29nLFxuICBmYUVkaXQsXG4gIGZhVXBsb2FkLFxuICBmYU5ld3NwYXBlcixcbiAgZmFBdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFQbHVzU3F1YXJlLFxuICBmYVRyYXNoLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFHb29nbGUsXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsaWJyYXJ5LmFkZChcbiAgICBmYVVzZXIsXG4gICAgZmFTaWduT3V0QWx0LFxuICAgIGZhRW52ZWxvcGUsXG4gICAgZmFVbmxvY2ssXG4gICAgZmFBbGlnbkxlZnQsXG4gICAgZmFLZXksXG4gICAgZmFTaWduYXR1cmUsXG4gICAgZmFGaWx0ZXIsXG4gICAgZmFTb3J0QW1vdW50VXAsXG4gICAgZmFTb3J0QW1vdW50RG93bixcbiAgICBmYUZhY2Vib29rLFxuICAgIGZhR29vZ2xlLFxuICAgIGZhVHdpdHRlcixcbiAgICBmYUluc3RhZ3JhbSxcbiAgICBmYVVzZXJDaXJjbGUsXG4gICAgZmFMaXN0LFxuICAgIGZhU3RhcixcbiAgICBmYUhlYXJ0LFxuICAgIGZhQ29tbWVudCxcbiAgICBmYVN3YXRjaGJvb2ssXG4gICAgZmFVc2VyRnJpZW5kcyxcbiAgICBmYUNvZyxcbiAgICBmYUVkaXQsXG4gICAgZmFVcGxvYWQsXG4gICAgZmFOZXdzcGFwZXIsXG4gICAgZmFBdCxcbiAgICBmYUFuZ2xlUmlnaHQsXG4gICAgZmFBbmdsZUxlZnQsXG4gICAgZmFQbHVzU3F1YXJlLFxuICAgIGZhVHJhc2gsXG4gICk7XG59XG4iLCIoKCkgPT4ge1xuICBjb25zdCB3aW4gPSB3aW5kb3c7XG5cbiAgd2luLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlTG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTG9hZGluZycpO1xuXG4gICAgaWYgKHBhZ2VMb2FkaW5nKSB7XG4gICAgICBwYWdlTG9hZGluZy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodmlzc25lLmVudiA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=