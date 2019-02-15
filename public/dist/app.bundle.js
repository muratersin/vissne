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
    }).catch(_ajaxErrorHandler2.default);
  };
}

function saveList(list) {
  var url = !list.id ? '/api/lists' : '/api/lists/' + list.id;

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.post(url, list).then(function (result) {
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

var _handleClick = function _handleClick(page, currentPage) {
  var result = 1;

  if (Number.isInteger(page)) {
    return { page: page };
  }

  if (page === 'prev') {
    var newPage = currentPage - 1;
    result = newPage === 0 ? 1 : newPage;
  } else if (page === 'next') {
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
  var totalPage = Math.floor(total / limit); // floor down
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
            return onPaginate(_handleClick(pn));
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
              return onPaginate(_handleClick('prev', page));
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
              return onPaginate(_handleClick('next', page));
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

var createPagination = function createPagination(options, dataLength) {
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
      'Show ' + dataLength + ' result of ' + total
    )
  );
};

var TableList = function TableList(props) {
  var data = props.data,
      fields = props.fields,
      pagination = props.pagination,
      responsive = props.responsive;


  if (!data || data.length === 0) {
    return _react2.default.createElement(
      'div',
      { className: 'row mt-2' },
      _react2.default.createElement(
        'div',
        { className: 'col d-flex' },
        _react2.default.createElement(_Alert2.default, { message: 'There were no result.', kind: 'warning' })
      )
    );
  }

  var heads = createHeader(fields);
  var body = createBody(data, fields);
  var paginationButtons = createPagination(pagination, data.length);

  return _react2.default.createElement(
    'div',
    { className: 'row' },
    _react2.default.createElement(
      'div',
      { className: 'col' },
      _react2.default.createElement(
        'table',
        { className: 'table ' + (responsive ? 'table-responsive' : '') },
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

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

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
      query: {
        page: 1,
        limit: 10
      }
    };

    _this.setQuery = _this.setQuery.bind(_this);
    _this.getLists = _this.getLists.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.create = _this.create.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.save = _this.save.bind(_this);
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
      var list = this.state.list;
      var saveList = this.props.saveList;

      saveList(list);
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          query = _state.query,
          showModal = _state.showModal,
          list = _state.list;
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
                _react2.default.createElement(
                  'span',
                  { className: 'ml-1' },
                  'Create List'
                )
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
    },
    saveList: function saveList(list) {
      return dispatch((0, _lists.saveList)(list));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsImxpc3RzIiwiU0VUX0xJU1RTIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwidmlzc25lIiwiZG9tYWluIiwicm93cyIsImNvdW50IiwiYWpheEVycm9ySGFuZGxlciIsImxpc3QiLCJyZXN1bHQiLCJsaXN0SWQiLCJtb3ZpZUlkIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJGb290ZXIiLCJNZW51IiwicGF0aCIsIml0ZW1zIiwibWVudUl0ZW1zIiwibSIsImljb24iLCJzaGFwZSIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJpc0ludGVnZXIiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwidG90YWxQYWdlIiwiTWF0aCIsImZsb29yIiwiYmMiLCJjZWlsIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwiaW1hZ2VPbkxvYWQiLCJpbWFnZU9uRXJyb3IiLCJzcmMiLCJkZWZhdWx0Q292ZXJJbWFnZVBhdGgiLCJQb3N0ZXIiLCJhbHQiLCJQcm9maWxlQ29udGFpbmVyIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJjcmVhdGVIZWFkZXIiLCJmaWVsZHMiLCJ2aXNpYmxlRmllbGRzIiwiZmlsdGVyIiwiZiIsImhpZGRlbiIsImNyZWF0ZUJvZHkiLCJ0Ym9keSIsIml0ZW0iLCJpdGVtRmllbGRzIiwiZm9ybWF0IiwidG9TdHJpbmciLCJjcmVhdGVQYWdpbmF0aW9uIiwiZGF0YUxlbmd0aCIsIlRhYmxlTGlzdCIsInBhZ2luYXRpb24iLCJyZXNwb25zaXZlIiwiaGVhZHMiLCJib2R5IiwicGFnaW5hdGlvbkJ1dHRvbnMiLCJWaWRlbyIsInZpZGVvS2V5IiwiTE9BRElORyIsIlJFR0lTVEVSIiwiU0VUX1VTRVIiLCJHRVRfTU9WSUVTIiwiR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiIsIkNSRUFURV9MSVNUIiwiREVMRVRFX0xJU1QiLCJBRERfVE9fTElTVCIsIkRFTEVURV9GUk9NX0xJU1QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZnVsbE5hbWUiLCJtYXRjaFNoYXBlIiwiY3Jld3MiLCJsdGUiLCJndGUiLCJyZWxlYXNlWWVhciIsInN0YXRlIiwiZWRpdE1vZGUiLCJ1c2VyRm9ybSIsInZhbGlkYXRpb24iLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybU5ld1Bhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImZvcmNlVXBkYXRlIiwic2V0U3RhdGUiLCJtYXRjaCIsImNsYXNzIiwiZSIsImVycm9yIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29tbW9uIiwiYWNjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFsZXJ0Iiwic2hvd0FsZXJ0IiwiYWxlcnRNZXNzYWdlIiwiYWxlcnRLaW5kIiwiQWxlcnREaWFsb2ciLCJmb3JtIiwiY29uZmlybVBhc3N3b3JkIiwic3dpdGNoRm9ybSIsImVycm9yTWVzc2FnZSIsImVtYWlsSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1JlZ2lzdGVyIiwiaXNWYWxpZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2U3RhdGUiLCJidXR0b25UZXh0Iiwic3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCIsInJlZ2lzdGVySW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJkaXNjb3ZlciIsImxvYWRNb3ZpZXMiLCJzaG93RmlsdGVyIiwicGF0aG5hbWUiLCJnZXRMaXN0cyIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlIiwic2F2ZSIsImFzc2lnbiIsInNob3dNb2RhbCIsInBhcnNlZFZhbHVlIiwidGFibGVGaWVsZHMiLCJwdWJsaWMiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1cGxvYWRlZEF2YXRhciIsImZyaXN0TmFtZSIsImNvbmNhdCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwidGh1bmtNaWRkbGV3YXJlIiwic3RhdHVzQ29kZSIsIkFMRVJUX1RZUEVfSUNPTl9NQVAiLCJwcmltYXJ5IiwiZG9jIiwic2V0IiwiY29va2llcyIsImNuYW1lIiwiY3ZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwibGlicmFyeSIsImFkZCIsImZhVXNlciIsImZhU2lnbk91dEFsdCIsImZhRW52ZWxvcGUiLCJmYVVubG9jayIsImZhQWxpZ25MZWZ0IiwiZmFLZXkiLCJmYVNpZ25hdHVyZSIsImZhRmlsdGVyIiwiZmFTb3J0QW1vdW50VXAiLCJmYVNvcnRBbW91bnREb3duIiwiZmFGYWNlYm9vayIsImZhR29vZ2xlIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYVVzZXJDaXJjbGUiLCJmYUxpc3QiLCJmYVN0YXIiLCJmYUhlYXJ0IiwiZmFDb21tZW50IiwiZmFTd2F0Y2hib29rIiwiZmFVc2VyRnJpZW5kcyIsImZhQ29nIiwiZmFFZGl0IiwiZmFVcGxvYWQiLCJmYU5ld3NwYXBlciIsImZhQXQiLCJmYUFuZ2xlUmlnaHQiLCJmYUFuZ2xlTGVmdCIsImZhUGx1c1NxdWFyZSIsIndpbiIsIm9ubG9hZCIsInJlbW92ZSIsImVudiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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O0FBQ0Q7QUFDRjtBQUNGLEdBWkQ7QUFhRCxDQWhCRCxJOzs7Ozs7Ozs7OztBQ0FBLHVDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9pbmRleC5qc3hcIixcImNvbW1vblwiLFwicmVhY3RcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyBQYWdlc1xuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vY29udGFpbmVycy9EaXNjb3Zlcic7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb250YWluZXJzL01vdmllJztcbmltcG9ydCBBdXRoIGZyb20gJy4vY29udGFpbmVycy9BdXRoJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29udGFpbmVycy9BY2NvdW50JztcbmltcG9ydCBMaXN0cyBmcm9tICcuL2NvbnRhaW5lcnMvTGlzdHMnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5cbi8vIFNoYXJlZCBDb21wb25lbnRzXG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSAnLi9jb250YWluZXJzL0FsZXJ0RGlhbG9nJztcblxuY29uc3QgUm9vdCA9ICh7IHN0b3JlIH0pID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbWluZy1zb29uXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9pbi10aGVhdGVyc1wiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXV0aFwiIGNvbXBvbmVudD17QXV0aH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2FjY291bnRcIiBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9saXN0c1wiIGNvbXBvbmVudD17TGlzdHN9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWUvOnNsdWcvOmlkXCIgY29tcG9uZW50PXtNb3ZpZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wYWdlLW5vdC1mb3VuZFwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8QWxlcnREaWFsb2cgLz5cbiAgICA8L0ZyYWdtZW50PlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuUm9vdC5wcm9wVHlwZXMgPSB7XG4gIHN0b3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb290O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX0FDQ09VTlRfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cywgc2V0TG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldEFjY291bnREZXRhaWwgPSB1c2VyID0+ICh7XG4gIHR5cGU6IFNFVF9BQ0NPVU5UX0RFVEFJTCxcbiAgcGF5bG9hZDoge1xuICAgIHVzZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEFjY291bnREZXRhaWwgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5nZXQoJy9hcGkvYWNjb3VudCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSB1c2VyID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucHV0KGAvYXBpL3VzZXIvJHt1c2VyLmlkfWAsIHVzZXIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiAnUHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZC4nLFxuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IHBhc3N3b3JkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucHV0KCcvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZWdpc3RlciA9IChkYXRhLCB1cmwpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnBvc3QodXJsLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAvLyBUT0RPOiBzZXQgdXNlciBpbmZvcm1hdGlvbiB0byBjb21tb24gc3RhdGVcbiAgfSkuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcblxufTtcbiIsImltcG9ydCB7XG4gIFRPR0dMRV9BTEVSVCxcbiAgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgVE9HR0xFX0ZJTFRFUixcbiAgU0VUX1VQTE9BREVEX0lNQUdFLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsZXJ0RGlhbG9nID0gKHsgbWVzc2FnZSwga2luZCB9KSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfQUxFUlQsXG4gIG1lc3NhZ2UsXG4gIGtpbmQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFBhZ2VMb2FkaW5nU3RhdHVzID0gc3RhdHVzID0+ICh7XG4gIHR5cGU6IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBwYWdlTG9hZGluZzogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nU3RhdHVzID0gc3RhdHVzID0+ICh7XG4gIHR5cGU6IFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgbG9hZGluZzogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGaWx0ZXIgPSAoKSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfRklMVEVSLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGxvYWRlZEltYWdlID0gdXBsb2FkZWRGaWxlID0+ICh7XG4gIHR5cGU6IFNFVF9VUExPQURFRF9JTUFHRSxcbiAgcGF5bG9hZDogdXBsb2FkZWRGaWxlLFxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfUVVFUlksIFNFVF9HRU5SRVMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldE1vdmllcyA9IHJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFNFVF9NT1ZJRVMsXG4gIG1vdmllczogcmVzcG9uc2UucmVzdWx0cyxcbiAgcGFnZTogKHJlc3BvbnNlLnBhZ2UgKyAxKSxcbiAgdG90YWxQYWdlczogcmVzcG9uc2UudG90YWxfcGFnZXMsXG4gIHRvdGFsOiByZXNwb25zZS50b3RhbF9yZXN1bHRzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSAocXVlcnkpID0+IHtcbiAgbGV0IHVybCA9ICdhcGkvZGlzY292ZXInO1xuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChxdWVyeU5hbWUsIGkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W3F1ZXJ5TmFtZV07XG4gICAgY29uc3Qgb3AgPSBpID09PSAwXG4gICAgICA/ICc/J1xuICAgICAgOiAnJic7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdXJsICs9IGAke29wfSR7cXVlcnlOYW1lfT0ke3ZhbHVlfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG11bHRpUXVlcnkgPSBgJHtxdWVyeU5hbWV9PWA7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICBtdWx0aVF1ZXJ5ICs9IGAke3Z9LGA7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHttdWx0aVF1ZXJ5fWA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE1vdmllcyhkYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRRdWVyeSA9ICh7IGZpZWxkLCB2YWx1ZSB9KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFNFVF9RVUVSWSxcbiAgICBmaWVsZCxcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHZW5yZXMgPSBnZW5yZXMgPT4gKHtcbiAgdHlwZTogU0VUX0dFTlJFUyxcbiAgZ2VucmVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRHZW5yZXMgPSAoKSA9PiBkaXNwYXRjaCA9PiBheGlvc1xuICAuZ2V0KCcvYXBpL2dlbnJlJylcbiAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkaXNwYXRjaChzZXRHZW5yZXMoZGF0YSkpKVxuICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi9saWIvY29va2llJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuaW1wb3J0IHtcbiAgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUixcbiAgQ1JFQVRFX0xJU1QsXG4gIERFTEVURV9MSVNULFxuICBBRERfVE9fTElTVCxcbiAgREVMRVRFX0ZST01fTElTVCxcbiAgU0VUX0xJU1RTLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMsIHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExpc3QoeyBsaXN0cywgdG90YWwgfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MSVNUUyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBsaXN0cyxcbiAgICAgIHRvdGFsLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0QnlDdXJyZW50VXNlcih7IHBhZ2UsIGxpbWl0IH0pIHtcbiAgY29uc3QgY3VycmVudFVzZXJJZCA9IGNvb2tpZS5nZXQoJ3VzZXJfaWQnKTtcblxuICBpZiAoIWN1cnJlbnRVc2VySWQpIHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L2F1dGhgO1xuICB9XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zKGAvYXBpL2xpc3RzP3VzZXJJZD0ke2N1cnJlbnRVc2VySWR9JnBhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldExpc3Qoe1xuICAgICAgICAgIGxpc3RzOiByZXNwb25zZS5kYXRhLnJvd3MsXG4gICAgICAgICAgdG90YWw6IHJlc3BvbnNlLmRhdGEuY291bnQsXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTGlzdChsaXN0KSB7XG4gIGNvbnN0IHVybCA9ICFsaXN0LmlkXG4gICAgPyAnL2FwaS9saXN0cydcbiAgICA6IGAvYXBpL2xpc3RzLyR7bGlzdC5pZH1gO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5wb3N0KHVybCwgbGlzdClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGlkKSB7XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdChsaXN0SWQsIG1vdmllSWQpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QobGlzdElkLCBtb3ZpZUlkKSB7XG5cbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVEZXRhaWwgPSBkZXRhaWwgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFX0RFVEFJTCxcbiAgZGV0YWlsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZURldGFpbCA9IGlkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRNb3ZpZURldGFpbChudWxsKSk7XG5cbiAgYXhpb3MuZ2V0KGAvYXBpL21vdmllLyR7aWR9YClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKFxuICAgICAgc2V0TW92aWVEZXRhaWwoZGF0YSksXG4gICAgKSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBtZXNzYWdlLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHctMTAwIHRleHQtY2VudGVyYH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbiAga2luZDogJ2luZm8nLFxufTtcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDYXN0U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL0Nhc3Quc2Nzcyc7XG5cbmNvbnN0IENhc3QgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgY2hhcmFjdGVyLFxuICBwcm9maWxlUGF0aCxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXN0XCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17cHJvZmlsZVBhdGh9IGFsdD17bmFtZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc3QtaW5mb1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj57bmFtZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtbGlnaHRcIj57Y2hhcmFjdGVyfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5DYXN0LnByb3BUeXBlcyA9IENhc3RTaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDYXN0U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENhc3QgZnJvbSAnLi4vQ2FzdCc7XG5pbXBvcnQgJy4vQ2FzdExpc3Quc2Nzcyc7XG5cbmNvbnN0IENhc3RMaXN0ID0gKHsgY2FzdHMgfSkgPT4ge1xuICBjb25zdCBjYXN0TGlzdCA9IGNhc3RzLm1hcChjID0+IChcbiAgICA8Q2FzdFxuICAgICAga2V5PXtjLmlkfVxuICAgICAgbmFtZT17Yy5uYW1lfVxuICAgICAgcHJvZmlsZVBhdGg9e2MucHJvZmlsZVBhdGh9XG4gICAgICBjaGFyYWN0ZXI9e2MuY2hhcmFjdGVyfVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhc3QtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXN0IGxpc3Q8L2g1PlxuICAgICAgICB7Y2FzdExpc3R9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNhc3RMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mKENhc3RTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc3RMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tcGFueVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuY29uc3QgQ29tcGFueSA9ICh7IGxvZ28sIG5hbWUgfSkgPT4ge1xuICBjb25zdCBsb2dvUGF0aCA9IGxvZ29cbiAgICA/IGAke3Zpc3NuZS5pbWFnZXNTZWN1cmVCYXNlVXJsfS93OTIvJHtsb2dvfWBcbiAgICA6IGAke3Zpc3NuZS5jZG59L2ltYWdlcy9wbGFjZWhvbGRlci5wbmdgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBtYi0yXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTMgY29tcGFueS1sb2dvXCIgc3JjPXtsb2dvUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wXCI+e25hbWV9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29tcGFueS5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ286ICcnLFxuICBuYW1lOiAnQ29tcGFueScsXG59O1xuXG5Db21wYW55LnByb3BUeXBlcyA9IENvbXBhbnlTaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi4vQ29tcGFueSc7XG5pbXBvcnQgJy4vQ29tcGFueUxpc3Quc2Nzcyc7XG5cbmNvbnN0IENvbXBhbnlMaXN0ID0gKHsgY29tcGFuaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Db21wYW5pZXM8L2g1PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAge2NvbXBhbmllcy5tYXAoYyA9PiAoXG4gICAgICAgICAgPENvbXBhbnkga2V5PXtjLmlkfSBsb2dvPXtjLmxvZ29fcGF0aH0gbmFtZT17Yy5uYW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNvbXBhbnlMaXN0LnByb3BUeXBlcyA9IHtcbiAgY29tcGFuaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihDb21wYW55U2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBEZXRhaWxUYWJsZSA9ICh7IG1vdmllIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Ake21vdmllLm9yZ2luYWxUaXRsZX0gKCR7bW92aWUueWVhcn0pYH08L2g1PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtcmVzcG9uc2l2ZS1zbSB0YWJsZS1yZXNwb25zaXZlLXhzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmF0aW5nPC90aD5cbiAgICAgICAgICAgIDx0ZD57YCR7bW92aWUudm90ZV9hdmVyYWdlfSAoJHttb3ZpZS52b3RlX2NvdW50fSlgfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmVsZWFzZSBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUucmVsZWFzZV9kYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+R2VucmVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZ2VucmVOYW1lc308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRhZ2xpbmU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS50YWdsaW5lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q291bnRyaWVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuY291bnRyaWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGFuZ3VhZ2VzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUubGFuZ3VhZ2V9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EaXJlY3RvcjwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmRpcmVjdG9yfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+V3JpdGVyPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUud3JpdGVyfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SG9tZXBhZ2U8L3RoPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8YSBocmVmPXttb3ZpZS5ob21lcGFnZX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnttb3ZpZS5ob21lcGFnZX08L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkRldGFpbFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IE1vdmllU2hhcGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbFRhYmxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBHZW5yZVNoYXBlLCBGaWx0ZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgeyBTT1JUX09QVElPTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCAnLi9GaWx0ZXIuc2Nzcyc7XG5cbmZ1bmN0aW9uIHN3aXRjaFNvcnRRdWVyeShzb3J0QnkpIHtcbiAgY29uc3QgW25hbWUsIGtpbmRdID0gc29ydEJ5LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHZhbHVlID0gYCR7bmFtZX0uJHtraW5kID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJ31gO1xuICByZXR1cm4ge1xuICAgIGZpZWxkOiAnc29ydEJ5JyxcbiAgICB2YWx1ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkR2VucmVJZCh2YWx1ZSwgY3VycmVudEdlbnJlcykge1xuICBjb25zdCBpbmRleCA9IGN1cnJlbnRHZW5yZXMuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjdXJyZW50R2VucmVzLnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRHZW5yZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gY3VycmVudEdlbnJlcztcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlWWVhcih5ZWFyLCBzZXRRdWVyeSkge1xuICBpZiAoeWVhci5sZW5ndGggPT09IDQgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogeWVhcixcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh5ZWFyID09PSAnJykge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBGaWx0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGdlbnJlcyxcbiAgICBzZXRRdWVyeSxcbiAgICBxdWVyeSxcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzb3J0SWNvbkNsYXNzID0gcXVlcnkuc29ydEJ5LnNwbGl0KCcuJylbMV0gPT09ICdkZXNjJ1xuICAgID8gJ2Rvd24nXG4gICAgOiAndXAnO1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0gU09SVF9PUFRJT05TLm1hcCgoc29ydCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IHNvcnQubmFtZS5yZXBsYWNlKC8gL2csICdfJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2Ake2tleX0uJHtzb3J0LnZhbHVlfWB9PlxuICAgICAgICB7c29ydC5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2VucmVPcHRpb25zID0gZ2VucmVzLm1hcChnID0+IChcbiAgICA8b3B0aW9uIGtleT17Zy5pZH0gdmFsdWU9e2cuaWR9IGNsYXNzTmFtZT17cXVlcnkud2l0aEdlbnJlcy5pbmRleE9mKGAke2cuaWR9YCkgPT09IC0xID8gJycgOiAnc2VsZWN0ZWQnfT5cbiAgICAgIHtnLm5hbWV9XG4gICAgPC9vcHRpb24+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3RpY2t5LXRvcCBiZy13aGl0ZSBtYi0yIHB0LTIgc2hhZG93LXNtIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkuc2VhcmNoVGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICdzZWFyY2hUZXh0JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJnZW5yZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnd2l0aEdlbnJlcycsIHZhbHVlOiBhZGRHZW5yZUlkKCRldmVudC50YXJnZXQudmFsdWUsIHF1ZXJ5LndpdGhHZW5yZXMpIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkdlbnJlczwvb3B0aW9uPlxuICAgICAgICAgIHtnZW5yZU9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic29ydEJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgaWQ9XCJzb3J0T3B0aW9uU2VsZWN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTb3J0IG9wdGlvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NvcnRCeScsIHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tb3J0IEJ5PC9vcHRpb24+XG4gICAgICAgICAgICB7c29ydE9wdGlvbnN9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmlsdGVyLWlucHV0LWJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHN3aXRjaFNvcnRRdWVyeShxdWVyeS5zb3J0QnkpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtgc29ydC1hbW91bnQtJHtzb3J0SWNvbkNsYXNzfWB9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWWVhclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBoYW5kbGVDaGFuZ2VZZWFyKCRldmVudC50YXJnZXQudmFsdWUsIHNldFF1ZXJ5KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbn07XG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Gb290ZXIuc2Nzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+QWJvdXQgVXM8L2g1PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDU+U29jaWFsPC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgZmFjZWJvb2tcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIHR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIGluc3RhZ3JhbVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1Pkxhc3QgUmV2aWV3czwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEgbXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+Q29udGFjdDwvaDU+XG4gICAgICAgICAgPHA+KzI1NSAwMDAgMDAgMDAgMDA8L3A+XG4gICAgICAgICAgPHA+aW5mb0B2aXNzbmUuY29tPC9wPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0yXCI+TGFzdCBVcGRhdGVzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+QWRkIGNvbW1vbiBmaWx0ZXIgZm9yIG1vdmllczwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+R29vZ2xlIGF1dGggb3B0aW9ucyBpcyBjb21wbGV0ZWQ8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkZpeGVkIEZhY2Vib29rIGF1dGggaXNzdWVzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMVwiPlxuICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAxOSBWaXNzbmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IE1lbnUgPSAoeyBwYXRoLCBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e20ucGF0aH0+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXttLmljb259IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bS5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAge21lbnVJdGVtc31cbiAgICA8L3VsPlxuICApO1xufTtcblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vTW9kYWwuc2Nzcyc7XG5cbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBjYW5jZWwsXG4gICAgc3VibWl0LFxuICAgIGNoaWxkcmVuLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc05hbWUgPSBzaG93ID8gJ3Nob3cgZC1ibG9jaycgOiAnJztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwgZmFkZSAke2NsYXNzTmFtZX1gfSB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtYmFja2Ryb3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aXRsZX08L2g1PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9e2NhbmNlbH0+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e2NhbmNlbH0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3N1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbn07XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvc3RlciBmcm9tICcuLi9Qb3N0ZXInO1xuaW1wb3J0ICcuL01vdmllQ2FyZC5zY3NzJztcblxuY29uc3QgTW92aWVDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBpbWFnZSxcbiAgICByYXRlLFxuICAgIHNsdWcsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtY2FyZCBoLTEwMCB3LTEwMCByb3VuZGVkLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGltZy10aHVtYm5haWxcIj5cbiAgICAgIDxMaW5rIHRvPXtgbW92aWUvJHtzbHVnfS8ke2lkfWB9IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHJhdGluZy10YWcgc2hhZG93LXNtIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIHtyYXRlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxQb3N0ZXIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IE1vdmllTGlzdCA9ICh7IG1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBtb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICA8ZGl2IGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMiBtYi0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TW92aWVDYXJkXG4gICAgICAgIGlkPXttb3ZpZS5pZH1cbiAgICAgICAgaW1hZ2U9e21vdmllLnBvc3Rlcn1cbiAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICByYXRlPXttb3ZpZS52b3RlQXZlcmFnZX1cbiAgICAgICAgc2x1Zz17bW92aWUuc2x1Z31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vTmF2YmFyLnNjc3MnO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgaXNMb2dnZWRJbixcbiAgICBwYXRoTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gaXNMb2dnZWRJbiA/IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcHJvZmlsZS9hY2NvdW50XCIgdGl0bGU9XCJQcm9maWxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPnt1c2VyLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9nb3V0XCIgdGl0bGU9XCJMb2dvdXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLW91dC1hbHRcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvRnJhZ21lbnQ+XG4gICkgOiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGluayB0bz1cIi9hdXRoXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5sb2dpbjwvTGluaz5cbiAgICA8L2xpPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH1cbiAgICAgICAgICBhbHQ9XCJWaXNzbmVcIlxuICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGQtYmxvY2tcIlxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGlkPVwiZmlsdGVyQnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImZpbHRlclwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9pbi10aGVhdGVycycgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2luLXRoZWF0ZXJzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaW4gdGhlYXRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9jb21pbmctc29vbicgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2NvbWluZy1zb29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgY29taW5nIHNvb25nXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXktYXV0b1wiPlxuICAgICAgICAgIHtsb2dpbkJ1dHRvbn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IHt9LFxuICBwYXRoTmFtZTogJy8nLFxufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgcGF0aE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9vbmcucG5nYH0gYWx0PVwiNDA0XCIgLz5cbiAgICA8aDQ+NDA0PC9oND5cbiAgICA8aDU+UGFnZSBub3QgZm91bmQ8L2g1PlxuICAgIDxwPlxuICAgICAgV2UgYXJlIHNvcnJ5LiBUaGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIHdhcyBtb3ZlZCwgcmVtb3ZlZCwgcmVuYW1lZCBvciBtaWdodCBuZXZlciBleGlzdGVkLlxuICAgIDwvcD5cbiAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+R08gVE8gSE9NRTwvYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuXG5jb25zdCBQYWdlTG9hZGluZyA9ICh7IHNob3cgfSkgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgYmctbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICA8U3Bpbm5lciBzaG93IHNpemU9XCJsZ1wiIGFkZGlvbmFsQ2xhc3M9XCJtci0yXCIgLz5cbiAgICAgIExvYWRpbmcuLi5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhZ2VMb2FkaW5nLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IChwYWdlLCBjdXJyZW50UGFnZSkgPT4ge1xuICBsZXQgcmVzdWx0ID0gMTtcblxuICBpZiAoTnVtYmVyLmlzSW50ZWdlcihwYWdlKSkge1xuICAgIHJldHVybiB7IHBhZ2UgfTtcbiAgfVxuXG4gIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICBjb25zdCBuZXdQYWdlID0gKGN1cnJlbnRQYWdlIC0gMSk7XG4gICAgcmVzdWx0ID0gbmV3UGFnZSA9PT0gMCA/IDEgOiBuZXdQYWdlO1xuICB9IGVsc2UgaWYgKHBhZ2UgPT09ICduZXh0Jykge1xuICAgIHJlc3VsdCA9IChjdXJyZW50UGFnZSArIDEpO1xuICB9XG5cbiAgcmV0dXJuIHsgcGFnZTogcmVzdWx0IH07XG59O1xuXG5jb25zdCBnZW5lcmF0ZVBhZ2VOdW1iZXJzID0gKG9wdGlvbnMpID0+IHtcbiAgY29uc3Qge1xuICAgIHBhZ2UsXG4gICAgbGltaXQsXG4gICAgdG90YWwsXG4gICAgYnV0dG9uQ291bnQsXG4gIH0gPSBvcHRpb25zO1xuICBjb25zdCBwYWdlTnVtYmVycyA9IFtdO1xuICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsIC8gbGltaXQpOyAvLyBmbG9vciBkb3duXG4gIGNvbnN0IGJjID0gTWF0aC5jZWlsKGJ1dHRvbkNvdW50IC8gMik7XG5cbiAgZm9yIChsZXQgaSA9IChwYWdlIC0gKGJjIC0gMSkpOyBpIDwgKHBhZ2UgKyBiYyk7IGkgKz0gMSkge1xuICAgIGlmIChpID4gMCAmJiBpIDw9IHRvdGFsUGFnZSkge1xuICAgICAgcGFnZU51bWJlcnMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFnZU51bWJlcnM7XG59O1xuXG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgeyBwYWdlLCBvblBhZ2luYXRlIH0gPSBvcHRpb25zO1xuXG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gZ2VuZXJhdGVQYWdlTnVtYmVycyhvcHRpb25zKTtcblxuICBpZiAocGFnZU51bWJlcnMubGVuZ3RoIDwgMikge1xuICAgIHJldHVybiA8c3BhbiAvPjtcbiAgfVxuXG4gIGNvbnN0IHBhZ2VCdXR0b25zID0gcGFnZU51bWJlcnMubWFwKHBuID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICAke3BuID09PSBwYWdlID8gJ2FjdGl2ZScgOiAnJ31gfT5cbiAgICAgIDxhXG4gICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGlua1wiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socG4pKX1cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9hPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBhcmlhLWxhYmVsPVwiUGFnaW5hdGlvblwiPlxuICAgICAgPHVsIGNsYXNzTmFtZT1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygncHJldicsIHBhZ2UpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1sZWZ0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlQnV0dG9uc31cbiAgICAgICAgPGxpIGNsYXNzTmFtZT1cInBhZ2UtaXRlbVwiPlxuICAgICAgICAgIDxhXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmtcIlxuICAgICAgICAgICAgaGFuZGxlQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ25leHQnLCBwYWdlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5QYWdpbmF0aW9uLmRlZmF1bHRQcm9wcyA9IHtcbiAgb3B0aW9uczoge1xuICAgIGJ1dHRvbkNvdW50OiAzLFxuICAgIHRvdGFsOiAwLFxuICAgIHBhZ2U6IDEsXG4gICAgbGltaXQ6IDEwLFxuICB9LFxufTtcblxuUGFnaW5hdGlvbi5wcm9wVHlwZXMgPSB7XG4gIG9wdGlvbnM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgbGltaXQ6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgcGFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBvblBhZ2luYXRlOiBQcm9wVHlwZXMuZnVuYyxcbiAgICBidXR0b25Db3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQYWdpbmF0aW9uO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmZ1bmN0aW9uIGltYWdlT25Mb2FkKCkge1xuXG59XG5cbmZ1bmN0aW9uIGltYWdlT25FcnJvcigpIHtcbiAgdGhpcy5zcmMgPSB2aXNzbmUuZGVmYXVsdENvdmVySW1hZ2VQYXRoO1xufVxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcbiAgICAgIHNyYz17YCR7c3JjfWB9XG4gICAgICBvbkxvYWQ9e2ltYWdlT25Mb2FkfVxuICAgICAgb25FcnJvcj17aW1hZ2VPbkVycm9yfVxuICAgICAgYWx0PXthbHR9XG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5Qb3N0ZXIucHJvcFR5cGVzID0ge1xuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgYWx0OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQb3N0ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgTWVudSBmcm9tICcuL01lbnUnO1xuaW1wb3J0IFBhZ2VMb2FkaW5nIGZyb20gJy4vUGFnZUxvYWRpbmcnO1xuaW1wb3J0IHByb2ZpbGVNZW51IGZyb20gJy4uL2NvbnN0YW50cy9wcm9maWxlLW1lbnUnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9maWxlQ29udGFpbmVyKHByb3BzKSB7XG4gIGNvbnN0IHsgY2hpbGRyZW4sIHBhdGgsIHBhZ2VMb2FkaW5nLCB1c2VyIH0gPSBwcm9wcztcblxuICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICByZXR1cm4gPFBhZ2VMb2FkaW5nIHNob3cgLz47XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zaXRpb24tcmVsYXRpdmVcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGluayByb3VuZGVkLWNpcmNsZSBhdmF0YXItYnV0dG9uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICAgIHNyYz17dXNlci5hdmF0YXIgfHwgYCR7dmlzc25lLmNkbn0vdWNvbnRlbnQvYXZhdGFyL2RlZmF1bHQtYXZhdGFyLmpwZ2B9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIHJvdW5kZWQtY2lyY2xlIGJvcmRlciBhdmF0YXJcIlxuICAgICAgICAgICAgICAgIGFsdD1cIkF2YXRhclwiXG4gICAgICAgICAgICAgICAgaWQ9XCJhdmF0YXJcIlxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgIDxoNT57YEAke3VzZXIudXNlck5hbWV9YH08L2g1PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPE1lbnUgaXRlbXM9e3Byb2ZpbGVNZW51fSBwYXRoPXtwYXRofSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuY29uc3QgUHJvZ3Jlc3NCYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBzaG93LCBoZWlnaHQgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2dyZXNzXCIgc3R5bGU9e3sgaGVpZ2h0OiBgJHtoZWlnaHR9cHhgIH19PlxuICAgICAgPGRpdlxuICAgICAgICBjbGFzc05hbWU9XCJwcm9ncmVzcy1iYXIgcHJvZ3Jlc3MtYmFyLXN0cmlwZWQgcHJvZ3Jlc3MtYmFyLWFuaW1hdGVkXCJcbiAgICAgICAgcm9sZT1cInByb2dyZXNzYmFyXCJcbiAgICAgICAgYXJpYS12YWx1ZW5vdz1cIjc1XCJcbiAgICAgICAgYXJpYS12YWx1ZW1pbj1cIjBcIlxuICAgICAgICBhcmlhLXZhbHVlbWF4PVwiMTAwXCJcbiAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICcxMDAlJyB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblByb2dyZXNzQmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGhlaWdodDogMixcbn07XG5cblByb2dyZXNzQmFyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGhlaWdodDogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFByb2dyZXNzQmFyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNwaW5uZXIocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNob3csXG4gICAgc2l6ZSxcbiAgICBraW5kLFxuICAgIGNvbG9yLFxuICAgIGFkZGlvbmFsQ2xhc3MsXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BzcGlubmVyLSR7a2luZH0gc3Bpbm5lci0ke2tpbmR9LSR7c2l6ZX0gdGV4dC0ke2NvbG9yfSAke2FkZGlvbmFsQ2xhc3N9YH0gcm9sZT1cInN0YXR1c1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cblNwaW5uZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc2l6ZTogJ3NtJyxcbiAga2luZDogJ2dyb3cnLFxuICBjb2xvcjogJ3ByaW1hcnknLFxuICBhZGRpb25hbENsYXNzOiAnJyxcbn07XG5cblNwaW5uZXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgYWRkaW9uYWxDbGFzczogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2l6ZTogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnc20nLFxuICAgICdtZCcsXG4gICAgJ2xnJyxcbiAgICAneGwnLFxuICBdKSxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAnYm9yZGVyJyxcbiAgICAnZ3JvdycsXG4gIF0pLFxuICBjb2xvcjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICAncHJpbWFyeScsXG4gICAgJ3NlY29uZGFyeScsXG4gICAgJ3N1Y2Nlc3MnLFxuICAgICdkYW5nZXInLFxuICAgICd3YXJuaW5nJyxcbiAgICAnaW5mbycsXG4gICAgJ2xpZ2h0JyxcbiAgICAnZGFyaycsXG4gIF0pLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL1BhZ2luYXRpb24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL0FsZXJ0JztcbmltcG9ydCAnLi9UYWJsZUxpc3Quc2Nzcyc7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChmaWVsZHMpID0+IHtcbiAgY29uc3QgdmlzaWJsZUZpZWxkcyA9IGZpZWxkc1xuICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRkZW4pXG4gICAgLm1hcChmID0+IDx0aCBzY29wZT1cImNvbFwiPntmLnRpdGxlfTwvdGg+KTtcblxuICByZXR1cm4gPHRyPnt2aXNpYmxlRmllbGRzfTwvdHI+O1xufTtcblxuY29uc3QgY3JlYXRlQm9keSA9IChkYXRhLCBmaWVsZHMpID0+IHtcbiAgY29uc3QgdGJvZHkgPSBbXTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRmllbGRzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSBpdGVtW2ZpZWxkLm5hbWVdO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC5mb3JtYXRcbiAgICAgICAgPyBmaWVsZC5mb3JtYXQodilcbiAgICAgICAgOiB2LnRvU3RyaW5nKCk7XG5cbiAgICAgIGl0ZW1GaWVsZHMucHVzaCg8dGQ+e3ZhbHVlfTwvdGQ+KTtcbiAgICB9KTtcblxuICAgIHRib2R5LnB1c2goPHRyPntpdGVtRmllbGRzfTwvdHI+KTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRib2R5O1xufTtcblxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbiA9IChvcHRpb25zLCBkYXRhTGVuZ3RoKSA9PiB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICB9ID0gb3B0aW9ucztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8UGFnaW5hdGlvbiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPHNwYW4+e2BTaG93ICR7ZGF0YUxlbmd0aH0gcmVzdWx0IG9mICR7dG90YWx9YH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBUYWJsZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3QgeyBkYXRhLCBmaWVsZHMsIHBhZ2luYXRpb24sIHJlc3BvbnNpdmUgfSA9IHByb3BzO1xuXG4gIGlmICghZGF0YSB8fCBkYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleFwiPlxuICAgICAgICAgIDxBbGVydCBtZXNzYWdlPVwiVGhlcmUgd2VyZSBubyByZXN1bHQuXCIga2luZD1cIndhcm5pbmdcIiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoZWFkcyA9IGNyZWF0ZUhlYWRlcihmaWVsZHMpO1xuICBjb25zdCBib2R5ID0gY3JlYXRlQm9keShkYXRhLCBmaWVsZHMpO1xuICBjb25zdCBwYWdpbmF0aW9uQnV0dG9ucyA9IGNyZWF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbiwgZGF0YS5sZW5ndGgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2B0YWJsZSAke3Jlc3BvbnNpdmUgPyAndGFibGUtcmVzcG9uc2l2ZScgOiAnJ31gfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICB7aGVhZHN9XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICB7cGFnaW5hdGlvbkJ1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vVmlkZW8uc2Nzcyc7XG5cbmNvbnN0IFZpZGVvID0gKHsgdmlkZW9LZXkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIG1iLTIgZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgPGlmcmFtZVxuICAgICAgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCJcbiAgICAgIHRpdGxlPVwiVmlkZW9cIlxuICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICBoZWlnaHQ9XCIzNjBcIlxuICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0tleX0/YXV0b3BsYXk9MCZvcmlnaW49JHt2aXNzbmUuZG9tYWlufWB9XG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlby5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsIi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0FMRVJUID0gJ1RPR0dMRV9BTEVSVCc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0ZJTFRFUiA9ICdUT0dHTEVfRklMVEVSJztcblxuLy8gYXV0aFxuZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9QQUdFX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElOR19TVEFUVVMgPSAnU0VUX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9ICdSRUdJU1RFUic7XG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xuXG4vLyBkaXNjb3ZlclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVMgPSAnR0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX01PVklFUyA9ICdTRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfR0VOUkVTID0gJ1NFVF9HRU5SRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVSWSA9ICdTRVRfUVVFUlknO1xuXG4vLyBsaXN0c1xuZXhwb3J0IGNvbnN0IEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIgPSAnR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUic7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0xJU1QgPSAnQ1JFQVRFX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9MSVNUID0gJ0RFTEVURV9MSVNUUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX0xJU1QgPSAnQUREX1RPX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0xJU1QgPSAnREVMRVRFX0ZST01fTElTVCc7XG5leHBvcnQgY29uc3QgU0VUX0xJU1RTID0gJ1NFVF9MSVNUUyc7XG5cbi8vIG1vdmllIGRldGFpbFxuZXhwb3J0IGNvbnN0IFNFVF9NT1ZJRV9ERVRBSUwgPSAnU0VUX01PVklFX0RFVEFJTCc7XG5cbi8vIHByb2ZpbGVcbi8vICAtLSBBY2NvdW50XG5leHBvcnQgY29uc3QgU0VUX0FDQ09VTlRfREVUQUlMID0gJ1NFVF9BQ0NPVU5UX0RFVEFJTCc7XG5leHBvcnQgY29uc3QgU0VUX1VQTE9BREVEX0lNQUdFID0gJ1NFVF9VUExPQURFRF9JTUFHRSc7XG5cbi8vIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IFNPUlRfT1BUSU9OUyA9IFt7XG4gIG5hbWU6ICdQb3B1bGFyaXR5JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZXZlbnVlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ByaW1hcnkgUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ09yZ2luYWwgVGl0bGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBBdmVyYWdlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQ291bnQnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufV07XG4iLCJjb25zdCBwcm9maWxlTWVudSA9IFtcbiAge1xuICAgIG5hbWU6ICdBY2NvdW50JyxcbiAgICBpY29uOiAndXNlcicsXG4gICAgcGF0aDogJy9wcm9maWxlL2FjY291bnQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xpc3RzJyxcbiAgICBpY29uOiAnbGlzdCcsXG4gICAgcGF0aDogJy9wcm9maWxlL2xpc3RzJyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGYXZvcml0ZXMnLFxuICAvLyAgIGljb246ICdoZWFydCcsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2Zhdm9yaXRlcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnQ29tbWVudHMnLFxuICAvLyAgIGljb246ICdjb21tZW50JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvY29tbWVudHMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ1Jldmlld3MnLFxuICAvLyAgIGljb246ICduZXdzcGFwZXInLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9yZXZpZXdzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGcmllbmRzJyxcbiAgLy8gICBpY29uOiAndXNlci1mcmllbmRzJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZnJpZW5kcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnU2V0dGluZ3MnLFxuICAvLyAgIGljb246ICdjb2cnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncycsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlTWVudTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZ1bGxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9yZ2luYWxUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgeWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhvbWVwYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FzdFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGFyYWN0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJvZmlsZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvZ286IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdlbnJlU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZpbHRlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNyZXdzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNhc3RzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIHZvdGVBdmVyYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICByZWxlYXNlWWVhcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBVc2VyU2hhcGUsIG1hdGNoU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCAnLi9BY2NvdW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBwcm9wcy5zZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICB1c2VyRm9ybToge30sXG4gICAgICBwYXNzd29yZDoge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBvbGRQYXNzd29yZDoge30sXG4gICAgICAgIG5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgY29uZmlybU5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0sIGZpZWxkKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XG4gICAgc3RhdGVbZmllbGRdW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydERpYWxvZywgY2hhbmdlUGFzc3dvcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFzc3dvcmQubmV3UGFzc3dvcmQgIT09IHBhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZHMgZG9uXFwndCBtYXRjaC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkLm9sZFBhc3N3b3JkID09PSBwYXNzd29yZC5uZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBjYW5ub3QgYmUgdGhlIHNhbWUgd2l0aCBvbGQgcGFzc3dvcmQuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IHt9IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHVwZGF0ZVVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1c2VyRm9ybSwgdmFsaWRhdGlvbiwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAodXNlciAmJiB1c2VyLmlkICYmICF1c2VyRm9ybS5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJGb3JtOiB1c2VyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5BY2NvdW50PC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVVc2VyKHVzZXJGb3JtKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IGtpbmQ9XCJib3JkZXJcIiBjb2xvcj1cInN1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9PlVwZGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkNoYW5nZSBQYXNzd29yZDwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbGRQYXNzd29yZElucHV0XCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLm9sZFBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5vbGRQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbGRQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld1Bhc3N3b3JkSW5wdXRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ubmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1OZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5jb25maXJtTmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENoYW5nZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkFjY291bnQucHJvcFR5cGVzID0ge1xuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IG1hdGNoU2hhcGUuaXNSZXF1aXJlZCxcbiAgZ2V0QWNjb3VudERldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hhbmdlUGFzc3dvcmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50JztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwsIGNoYW5nZVBhc3N3b3JkLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVwbG9hZGVkRmlsZTogc3RhdGUuY29tbW9uLnVwbG9hZGVkRmlsZSxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldEFjY291bnREZXRhaWw6ICgpID0+IGRpc3BhdGNoKGdldEFjY291bnREZXRhaWwoKSksXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBzdGF0dXMgPT4gZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoc3RhdHVzKSksXG4gIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyKSksXG4gIGNoYW5nZVBhc3N3b3JkOiBwYXNzd29yZCA9PiBkaXNwYXRjaChjaGFuZ2VQYXNzd29yZChwYXNzd29yZCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWNjb3VudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQUxFUlRfVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9saWIvY29uc3RhbnRzJztcblxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGtpbmQsXG4gICAgc2hvdyxcbiAgICBtZXNzYWdlLFxuICAgIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtJHtraW5kfSBzaXRlLWFsZXJ0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd2B9IHJvbGU9XCJhbGVydFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17dG9nZ2xlQWxlcnREaWFsb2d9PlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBraW5kOiAnaW5mbycsXG4gIG1lc3NhZ2U6IG51bGwsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKEFMRVJUX1RZUEVTKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSAnLi9BbGVydERpYWxvZyc7XG5pbXBvcnQgJy4vQWxlcnREaWFsb2cuc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvbW1vbiB9KSA9PiAoe1xuICBzaG93OiBjb21tb24uc2hvd0FsZXJ0LFxuICBtZXNzYWdlOiBjb21tb24uYWxlcnRNZXNzYWdlLFxuICBraW5kOiBjb21tb24uYWxlcnRLaW5kLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7IHNob3c6IGZhbHNlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWxlcnREaWFsb2cpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi8uLi9saWIvY29va2llJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICB1c2VyTmFtZToge30sXG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDoge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zd2l0Y2hGb3JtID0gdGhpcy5zd2l0Y2hGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dpblJlZ2lzdGVyID0gdGhpcy5sb2dpblJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNvb2tpZS5nZXQoJ2Vycm9yTWVzc2FnZScpO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnN0YXRlO1xuICAgIGZvcm1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybSB9KTtcbiAgfVxuXG4gIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKCFmb3JtLmVtYWlsIHx8ICFlbWFpbElucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHt9O1xuICAgIH1cblxuICAgIGlmICghZm9ybS5wYXNzd29yZCB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPiAxNikge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBtdXN0IGJlIDYtMTYgY2hhY3JhY3Rlci48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGlmICghZm9ybS51c2VyTmFtZSB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlVzZXIgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5maXJzdE5hbWUgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5GaXJzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5sYXN0TmFtZSB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkxhc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybS5wYXNzd29yZCkge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgZG9udCBtYXRjaDwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbiB9KTtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGxvZ2luUmVnaXN0ZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRpb24oZm9ybSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgdXJsID0gaXNSZWdpc3RlclxuICAgICAgPyAnL2FwaS9yZWdpc3RlcidcbiAgICAgIDogJy9hcGkvbG9naW4nO1xuXG4gICAgcmV0dXJuIHByb3BzLmxvZ2luUmVnaXN0ZXIoZm9ybSwgdXJsKTtcbiAgfVxuXG4gIHN3aXRjaEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzUmVnaXN0ZXI6ICFwcmV2U3RhdGUuaXNSZWdpc3RlcixcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybSxcbiAgICAgIGlzUmVnaXN0ZXIsXG4gICAgICB2YWxpZGF0aW9uLFxuICAgICAgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBidXR0b25UZXh0ID0gJ0xPR0lOJztcbiAgICBsZXQgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgbGV0IHJlZ2lzdGVySW5wdXQgPSBudWxsO1xuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUkVHSVNURVInO1xuICAgICAgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdMT0dJTic7XG5cbiAgICAgIHJlZ2lzdGVySW5wdXQgPSAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJ1c2VyTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24udXNlck5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lSW5wdXRcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+XG4gICAgICAgICAgICAgIExhc3QgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImxhc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYXV0aC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9IGFsdD1cIlZpc3NuZVwiIGhlaWdodD1cIjcwXCIgY2xhc3NOYW1lPVwibXktMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBpZD1cImZvcm1SZWdcIiBjbGFzc05hbWU9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiYmFzaWMtYWRkb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVudmVsb3BlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSW5wdXRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZElucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwicGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1bmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5wYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ucGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtyZWdpc3RlcklucHV0fVxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3dpdGNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dpblJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtICR7bG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGdvb2dsZSAgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9nb29nbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2dvb2dsZSddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBHT09HTEVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBmYWNlYm9vayBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2ZhY2Vib29rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBGQUNFQk9PS1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkF1dGgucHJvcFR5cGVzID0ge1xuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXV0aCBmcm9tICcuL0F1dGgnO1xuaW1wb3J0IHsgbG9naW5SZWdpc3RlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCAnLi9BdXRoLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBsb2dpblJlZ2lzdGVyOiAoZGF0YSwgdXJsKSA9PiBkaXNwYXRjaChsb2dpblJlZ2lzdGVyKGRhdGEsIHVybCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogbWVzc2FnZSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7IGtpbmQ6ICdkYW5nZXInLCBtZXNzYWdlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQXV0aCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb3ZpZUxpc3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7XG4gIFVzZXJTaGFwZSxcbiAgTW92aWVTaGFwZSxcbiAgR2VucmVTaGFwZSxcbiAgRmlsdGVyU2hhcGUsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxvYWRNb3ZpZXMgPSB0aGlzLmxvYWRNb3ZpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRHZW5yZXMsIHRvZ2dsZUZpbHRlciwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBtYXRjaDtcblxuICAgIGdldEdlbnJlcygpO1xuXG4gICAgaWYgKFsnL2NvbWluZy1zb29uJywgJy9pbi10aGVhdGVycyddLmluZGV4T2YocGF0aCkgIT09IC0xKSB7XG4gICAgICB0aGlzLnNldFF1ZXJ5KHsgZmllbGQ6ICdmaWx0ZXInLCB2YWx1ZTogcGF0aC5yZXBsYWNlKCcvJywgJycpIH0pO1xuICAgICAgdG9nZ2xlRmlsdGVyKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkTW92aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBjb25zdCB7IHNldFF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFF1ZXJ5KHF1ZXJ5KS50aGVuKHRoaXMubG9hZE1vdmllcyk7XG4gIH1cblxuICBsb2FkTW92aWVzKCkge1xuICAgIGNvbnN0IHsgZ2V0TW92aWVzLCBxdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZXMocXVlcnkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vdmllcyxcbiAgICAgIHVzZXIsXG4gICAgICBpc0xvZ2dlZEluLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgbG9jYXRpb24sXG4gICAgICBzaG93RmlsdGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSBwYXRoTmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPEZpbHRlciBzaG93PXtzaG93RmlsdGVyfSBnZW5yZXM9e2dlbnJlc30gc2V0UXVlcnk9e3RoaXMuc2V0UXVlcnl9IHF1ZXJ5PXtxdWVyeX0gLz5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfSBpZD1cImxpc3RcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS0xXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRNb3ZpZXN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1iLTIgJHtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IHNpemU9XCJtZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRGlzY292ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbiAgdXNlcjoge30sXG59O1xuXG5EaXNjb3Zlci5wcm9wVHlwZXMgPSB7XG4gIGdldE1vdmllczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0R2VucmVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKEdlbnJlU2hhcGUpLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBGaWx0ZXJTaGFwZS5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL0Rpc2NvdmVyJztcbmltcG9ydCB7IHRvZ2dsZUZpbHRlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCB7XG4gIGdldE1vdmllcyxcbiAgc2V0UXVlcnksXG4gIGdldEdlbnJlcyxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9kaXNjb3Zlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBxdWVyeTogc3RhdGUuZGlzY292ZXIucXVlcnksXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG4gIG1vdmllczogc3RhdGUuZGlzY292ZXIubW92aWVzLFxuICBnZW5yZXM6IHN0YXRlLmRpc2NvdmVyLmdlbnJlcyxcbiAgc2hvd0ZpbHRlcjogc3RhdGUuY29tbW9uLnNob3dGaWx0ZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVzOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRNb3ZpZXMocXVlcnkpKSxcbiAgc2V0UXVlcnk6IHF1ZXJ5ID0+IGRpc3BhdGNoKHNldFF1ZXJ5KHF1ZXJ5KSksXG4gIGdldEdlbnJlczogKCkgPT4gZGlzcGF0Y2goZ2V0R2VucmVzKCkpLFxuICB0b2dnbGVGaWx0ZXI6IHNob3cgPT4gZGlzcGF0Y2godG9nZ2xlRmlsdGVyKHNob3cpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoRGlzY292ZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZmlsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlTGlzdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IHt9LFxuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRRdWVyeSA9IHRoaXMuc2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldExpc3RzID0gdGhpcy5nZXRMaXN0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5xdWVyeSwgcXVlcnkpLFxuICAgIH0pLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIGdldExpc3RzKCkge1xuICAgIGNvbnN0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHt9IH0pO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93TW9kYWw6ICFwcmV2U3RhdGUuc2hvd01vZGFsLFxuICAgIH0pKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC5wYXJzZWRWYWx1ZSB8fCB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAobmFtZSA9PT0gJ3B1YmxpYycpIHtcbiAgICAgIHZhbHVlID0gdmFsdWUgPT09ICd0cnVlJztcbiAgICB9XG5cbiAgICBsaXN0W25hbWVdID0gdmFsdWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgbGlzdCB9KTtcbiAgfVxuXG4gIHNhdmUoKSB7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgc2F2ZUxpc3QgfSA9IHRoaXMucHJvcHM7XG4gICAgc2F2ZUxpc3QobGlzdCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVyeSwgc2hvd01vZGFsLCBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdG90YWwsXG4gICAgICB0YWJsZUZpZWxkcyxcbiAgICAgIGxpc3RzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGV9PlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+Q3JlYXRlIExpc3Q8L3NwYW4+XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRhYmxlTGlzdFxuICAgICAgICAgICAgdGl0bGU9XCJNeSBMaXN0c1wiXG4gICAgICAgICAgICBkYXRhPXtsaXN0c31cbiAgICAgICAgICAgIGZpZWxkcz17dGFibGVGaWVsZHN9XG4gICAgICAgICAgICBwYWdpbmF0aW9uPXt7XG4gICAgICAgICAgICAgIHRvdGFsLFxuICAgICAgICAgICAgICBwYWdlOiBxdWVyeS5wYWdlLFxuICAgICAgICAgICAgICBsaW1pdDogcXVlcnkubGltaXQsXG4gICAgICAgICAgICAgIGJ1dHRvbkNvdW50OiA1LFxuICAgICAgICAgICAgICBvblBhZ2luYXRlOiB0aGlzLnNldFF1ZXJ5LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IHRpdGxlPVwiQ3JlYXRlIExpc3RcIiBjYW5jZWw9e3RoaXMudG9nZ2xlTW9kYWx9IHN1Ym1pdD17dGhpcy5zYXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5MaXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtsaXN0Lm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHVibGljIExpc3RcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IWxpc3QucHVibGljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIFByaXZhdGUgTGlzdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdHMuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbDogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciwgc2F2ZUxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2xpc3RzJztcbmltcG9ydCBMaXN0cyBmcm9tICcuL0xpc3RzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbGlzdHM6IHN0YXRlLmxpc3RzLmxpc3RzLFxuICB0b3RhbDogc3RhdGUubGlzdHMudG90YWwsXG4gIHRhYmxlRmllbGRzOiBzdGF0ZS5saXN0cy50YWJsZUZpZWxkcyxcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmFjY291bnQudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnkpKSxcbiAgc2F2ZUxpc3Q6IGxpc3QgPT4gZGlzcGF0Y2goc2F2ZUxpc3QobGlzdCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZURldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGV0YWlsLCB1c2VyLCBpc0xvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNob3cgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW8gPSBkZXRhaWwudmlkZW9zLmxlbmd0aCA+IDBcbiAgICAgID8gPFZpZGVvIHZpZGVvS2V5PXtkZXRhaWwudmlkZW9zWzBdLmtleX0gLz5cbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiIHNyYz17ZGV0YWlsLnBvc3RlclBhdGh9IGFsdD17ZGV0YWlsLnRpdGxlfSAvPlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBtYXRjaDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRldGFpbDogc3RhdGUubW92aWUuZGV0YWlsLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb3ZpZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVjcycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgd2l0aEdlbnJlczogW10sXG4gICAgeWVhcjogbnVsbCxcbiAgICBjcmV3czogW10sXG4gICAgY2FzdHM6IFtdLFxuICB9LFxuICBpc0xvZ2dlZEluOiAhIXVzZXIuZW1haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb3ZlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBsaXN0cyxcbiAgY29tbW9uLFxufSk7XG4iLCJpbXBvcnQgeyBTRVRfTElTVFMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0czogW10sXG4gIHRvdGFsOiAwLFxuICB0YWJsZUZpZWxkczogW3tcbiAgICB0aXRsZTogJ0lkJyxcbiAgICBuYW1lOiAnaWQnLFxuICAgIGhpZGRlbjogdHJ1ZSxcbiAgfSwge1xuICAgIHRpdGxlOiAnTmFtZScsXG4gICAgbmFtZTogJ25hbWUnLFxuICB9LCB7XG4gICAgdGl0bGU6ICdDcmVhdGUgRGF0ZScsXG4gICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodmFsdWUpO1xuICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgfSxcbiAgfSwge1xuICAgIHRpdGxlOiAnUHVibGljJyxcbiAgICBuYW1lOiAncHVibGljJyxcbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgIHJldHVybiB2YWx1ZSA/ICdQdWJsaWMnIDogJ1ByaXZhdGUnO1xuICAgIH0sXG4gIH1dLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTElTVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLmxpc3RzLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBkZXRhaWw6IG51bGwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkZXRhaWwoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTU9WSUVfREVUQUlMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGRldGFpbDogYWN0aW9uLmRldGFpbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlU3RvcmUsIGFwcGx5TWlkZGxld2FyZSB9IGZyb20gJ3JlZHV4JztcbmltcG9ydCB0aHVua01pZGRsZXdhcmUgZnJvbSAncmVkdXgtdGh1bmsnO1xuaW1wb3J0IHJlZHVjZXIgZnJvbSAnLi4vcmVkdWNlcnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb25maWd1cmVTdG9yZSgpIHtcbiAgcmV0dXJuIGNyZWF0ZVN0b3JlKFxuICAgIHJlZHVjZXIsXG4gICAgYXBwbHlNaWRkbGV3YXJlKFxuICAgICAgdGh1bmtNaWRkbGV3YXJlLFxuICAgICksXG4gICk7XG59XG4iLCJcbmltcG9ydCB7XG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzLFxuICB0b2dnbGVBbGVydERpYWxvZyxcbiAgc2V0TG9hZGluZ1N0YXR1cyxcbn0gZnJvbSAnLi4vYXBwL2FjdGlvbnMvY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkge1xuICByZXR1cm4gKHsgcmVzcG9uc2UgfSkgPT4ge1xuICAgIGNvbnN0IHN0YXR1c0NvZGUgPSByZXNwb25zZS5zdGF0dXM7XG5cbiAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcblxuICAgIHN3aXRjaCAoc3RhdHVzQ29kZSkge1xuICAgICAgY2FzZSA0MDQ6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vcGFnZS1ub3QtZm91bmRgO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSA0MDM6XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkaXNwYXRjaChcbiAgICAgICAgICB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9O1xufVxuIiwiZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVTID0gW1xuICAncHJpbWFyeScsXG4gICdzZWNvbmRhcnknLFxuICAnc3VjY2VzcycsXG4gICdkYW5nZXInLFxuICAnd2FybmluZycsXG4gICdpbmZvJyxcbiAgJ2xpZ2h0JyxcbiAgJ2RhcmsnLFxuXTtcblxuZXhwb3J0IGNvbnN0IEFMRVJUX1RZUEVfSUNPTl9NQVAgPSB7XG4gIHByaW1hcnk6ICcnLFxufTtcbiIsImNvbnN0IGRvYyA9IGRvY3VtZW50O1xuXG5jb25zdCBzZXQgPSAobmFtZSwgdmFsdWUpID0+IHtcbiAgZG9jLmNvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbn07XG5cbmNvbnN0IGdldCA9IChuYW1lKSA9PiB7XG4gIGNvbnN0IGNvb2tpZXMgPSBkb2MuY29va2llLnNwbGl0KCc7Jyk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgW2NuYW1lLCBjdmFsdWVdID0gY29va2llc1tpXS5zcGxpdCgnPScpO1xuICAgIGlmIChjbmFtZS50cmltKCkgPT09IG5hbWUudHJpbSgpKSB7XG4gICAgICByZXR1cm4gY3ZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0LFxuICBzZXQsXG59O1xuIiwiaW1wb3J0IHsgbGlicmFyeSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZSc7XG5pbXBvcnQge1xuICBmYVVzZXIsXG4gIGZhU2lnbk91dEFsdCxcbiAgZmFFbnZlbG9wZSxcbiAgZmFVbmxvY2ssXG4gIGZhQWxpZ25MZWZ0LFxuICBmYUtleSxcbiAgZmFTaWduYXR1cmUsXG4gIGZhRmlsdGVyLFxuICBmYVNvcnRBbW91bnRVcCxcbiAgZmFTb3J0QW1vdW50RG93bixcbiAgZmFVc2VyQ2lyY2xlLFxuICBmYUxpc3QsXG4gIGZhU3RhcixcbiAgZmFIZWFydCxcbiAgZmFDb21tZW50LFxuICBmYVN3YXRjaGJvb2ssXG4gIGZhVXNlckZyaWVuZHMsXG4gIGZhQ29nLFxuICBmYUVkaXQsXG4gIGZhVXBsb2FkLFxuICBmYU5ld3NwYXBlcixcbiAgZmFBdCxcbiAgZmFBbmdsZVJpZ2h0LFxuICBmYUFuZ2xlTGVmdCxcbiAgZmFQbHVzU3F1YXJlLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnO1xuaW1wb3J0IHtcbiAgZmFGYWNlYm9vayxcbiAgZmFHb29nbGUsXG4gIGZhVHdpdHRlcixcbiAgZmFJbnN0YWdyYW0sXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLWJyYW5kcy1zdmctaWNvbnMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpbml0KCkge1xuICBsaWJyYXJ5LmFkZChcbiAgICBmYVVzZXIsXG4gICAgZmFTaWduT3V0QWx0LFxuICAgIGZhRW52ZWxvcGUsXG4gICAgZmFVbmxvY2ssXG4gICAgZmFBbGlnbkxlZnQsXG4gICAgZmFLZXksXG4gICAgZmFTaWduYXR1cmUsXG4gICAgZmFGaWx0ZXIsXG4gICAgZmFTb3J0QW1vdW50VXAsXG4gICAgZmFTb3J0QW1vdW50RG93bixcbiAgICBmYUZhY2Vib29rLFxuICAgIGZhR29vZ2xlLFxuICAgIGZhVHdpdHRlcixcbiAgICBmYUluc3RhZ3JhbSxcbiAgICBmYVVzZXJDaXJjbGUsXG4gICAgZmFMaXN0LFxuICAgIGZhU3RhcixcbiAgICBmYUhlYXJ0LFxuICAgIGZhQ29tbWVudCxcbiAgICBmYVN3YXRjaGJvb2ssXG4gICAgZmFVc2VyRnJpZW5kcyxcbiAgICBmYUNvZyxcbiAgICBmYUVkaXQsXG4gICAgZmFVcGxvYWQsXG4gICAgZmFOZXdzcGFwZXIsXG4gICAgZmFBdCxcbiAgICBmYUFuZ2xlUmlnaHQsXG4gICAgZmFBbmdsZUxlZnQsXG4gICAgZmFQbHVzU3F1YXJlLFxuICApO1xufVxuIiwiKCgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9