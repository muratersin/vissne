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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsImxpc3RzIiwiU0VUX0xJU1RTIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwidmlzc25lIiwiZG9tYWluIiwicm93cyIsImNvdW50IiwiYWpheEVycm9ySGFuZGxlciIsImxpc3QiLCJyZXN1bHQiLCJsaXN0SWQiLCJtb3ZpZUlkIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJGb290ZXIiLCJNZW51IiwicGF0aCIsIml0ZW1zIiwibWVudUl0ZW1zIiwibSIsImljb24iLCJzaGFwZSIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2UiLCJpc0ludGVnZXIiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwiTWF0aCIsImZsb29yIiwiYmMiLCJjZWlsIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwiaW1hZ2VPbkxvYWQiLCJpbWFnZU9uRXJyb3IiLCJzcmMiLCJkZWZhdWx0Q292ZXJJbWFnZVBhdGgiLCJQb3N0ZXIiLCJhbHQiLCJQcm9maWxlQ29udGFpbmVyIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJjcmVhdGVIZWFkZXIiLCJmaWVsZHMiLCJ2aXNpYmxlRmllbGRzIiwiZmlsdGVyIiwiZiIsImhpZGRlbiIsImNyZWF0ZUJvZHkiLCJ0Ym9keSIsIml0ZW0iLCJpdGVtRmllbGRzIiwiZm9ybWF0IiwidG9TdHJpbmciLCJjcmVhdGVQYWdpbmF0aW9uIiwiZGF0YUxlbmd0aCIsIlRhYmxlTGlzdCIsInBhZ2luYXRpb24iLCJyZXNwb25zaXZlIiwiaGVhZHMiLCJib2R5IiwicGFnaW5hdGlvbkJ1dHRvbnMiLCJWaWRlbyIsInZpZGVvS2V5IiwiTE9BRElORyIsIlJFR0lTVEVSIiwiU0VUX1VTRVIiLCJHRVRfTU9WSUVTIiwiR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiIsIkNSRUFURV9MSVNUIiwiREVMRVRFX0xJU1QiLCJBRERfVE9fTElTVCIsIkRFTEVURV9GUk9NX0xJU1QiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImVtYWlsIiwiZnVsbE5hbWUiLCJtYXRjaFNoYXBlIiwiY3Jld3MiLCJsdGUiLCJndGUiLCJyZWxlYXNlWWVhciIsInN0YXRlIiwiZWRpdE1vZGUiLCJ1c2VyRm9ybSIsInZhbGlkYXRpb24iLCJvbGRQYXNzd29yZCIsIm5ld1Bhc3N3b3JkIiwiY29uZmlybU5ld1Bhc3N3b3JkIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImZvcmNlVXBkYXRlIiwic2V0U3RhdGUiLCJtYXRjaCIsImNsYXNzIiwiZSIsImVycm9yIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29tbW9uIiwiYWNjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFsZXJ0Iiwic2hvd0FsZXJ0IiwiYWxlcnRNZXNzYWdlIiwiYWxlcnRLaW5kIiwiQWxlcnREaWFsb2ciLCJmb3JtIiwiY29uZmlybVBhc3N3b3JkIiwic3dpdGNoRm9ybSIsImVycm9yTWVzc2FnZSIsImVtYWlsSW5wdXQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJpc1JlZ2lzdGVyIiwiaXNWYWxpZCIsImNoZWNrVmFsaWRpdHkiLCJwcmV2U3RhdGUiLCJidXR0b25UZXh0Iiwic3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCIsInJlZ2lzdGVySW5wdXQiLCJoYW5kbGVTdWJtaXQiLCJkaXNjb3ZlciIsImxvYWRNb3ZpZXMiLCJzaG93RmlsdGVyIiwicGF0aG5hbWUiLCJnZXRMaXN0cyIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlIiwic2F2ZSIsImFzc2lnbiIsInNob3dNb2RhbCIsInBhcnNlZFZhbHVlIiwidGFibGVGaWVsZHMiLCJwdWJsaWMiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1cGxvYWRlZEF2YXRhciIsImZyaXN0TmFtZSIsImNvbmNhdCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwidGh1bmtNaWRkbGV3YXJlIiwic3RhdHVzQ29kZSIsIkFMRVJUX1RZUEVfSUNPTl9NQVAiLCJwcmltYXJ5IiwiZG9jIiwic2V0IiwiY29va2llcyIsImNuYW1lIiwiY3ZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwibGlicmFyeSIsImFkZCIsImZhVXNlciIsImZhU2lnbk91dEFsdCIsImZhRW52ZWxvcGUiLCJmYVVubG9jayIsImZhQWxpZ25MZWZ0IiwiZmFLZXkiLCJmYVNpZ25hdHVyZSIsImZhRmlsdGVyIiwiZmFTb3J0QW1vdW50VXAiLCJmYVNvcnRBbW91bnREb3duIiwiZmFGYWNlYm9vayIsImZhR29vZ2xlIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYVVzZXJDaXJjbGUiLCJmYUxpc3QiLCJmYVN0YXIiLCJmYUhlYXJ0IiwiZmFDb21tZW50IiwiZmFTd2F0Y2hib29rIiwiZmFVc2VyRnJpZW5kcyIsImZhQ29nIiwiZmFFZGl0IiwiZmFVcGxvYWQiLCJmYU5ld3NwYXBlciIsImZhQXQiLCJmYUFuZ2xlUmlnaHQiLCJmYUFuZ2xlTGVmdCIsImZhUGx1c1NxdWFyZSIsIndpbiIsIm9ubG9hZCIsInJlbW92ZSIsImVudiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFF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QkYsRUEwQkVDLHVCQTFCRixFQTJCRUMsK0JBM0JGLEVBNEJFQyw4QkE1QkYsRUE2QkVDLCtCQTdCRjtBQStCRCxDOzs7Ozs7Ozs7Ozs7OztBQ25FRCxDQUFDLFlBQU07QUFDTCxNQUFNQyxNQUFNM1csTUFBWjs7QUFFQTJXLE1BQUlDLE1BQUosR0FBYSxZQUFNO0FBQ2pCLFFBQU1wVyxjQUFjNlEsU0FBUzhCLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7O0FBRUEsUUFBSTNTLFdBQUosRUFBaUI7QUFDZkEsa0JBQVlxVyxNQUFaO0FBQ0Q7O0FBRUQsUUFBSWpULE9BQU9rVCxHQUFQLEtBQWUsWUFBbkIsRUFBaUM7QUFDL0IsVUFBSSxtQkFBbUJDLFNBQXZCLEVBQWtDO0FBQ2hDQSxrQkFBVUMsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGO0FBQ0YsR0FaRDtBQWFELENBaEJELEk7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeFwiLFwiY29tbW9uXCIsXCJyZWFjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9jb250YWluZXJzL0Rpc2NvdmVyJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL2NvbnRhaW5lcnMvTW92aWUnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9jb250YWluZXJzL0F1dGgnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb250YWluZXJzL0FjY291bnQnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29udGFpbmVycy9MaXN0cyc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cnO1xuXG5jb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29taW5nLXNvb25cIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luLXRoZWF0ZXJzXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoXCIgY29tcG9uZW50PXtBdXRofSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2xpc3RzXCIgY29tcG9uZW50PXtMaXN0c30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86c2x1Zy86aWRcIiBjb21wb25lbnQ9e01vdmllfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2Utbm90LWZvdW5kXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1JvdXRlcj5cbiAgICAgIDxBbGVydERpYWxvZyAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5Sb290LnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCBzZXRMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0QWNjb3VudERldGFpbCA9IHVzZXIgPT4gKHtcbiAgdHlwZTogU0VUX0FDQ09VTlRfREVUQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgdXNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudERldGFpbCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLmdldCgnL2FwaS9hY2NvdW50JylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoYC9hcGkvdXNlci8ke3VzZXIuaWR9YCwgdXNlcilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLicsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gcGFzc3dvcmQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnLCBwYXNzd29yZClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlZ2lzdGVyID0gKGRhdGEsIHVybCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIC8vIFRPRE86IHNldCB1c2VyIGluZm9ybWF0aW9uIHRvIGNvbW1vbiBzdGF0ZVxuICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXG59O1xuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQWxlcnREaWFsb2cgPSAoeyBtZXNzYWdlLCBraW5kIH0pID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9BTEVSVCxcbiAgbWVzc2FnZSxcbiAga2luZCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0UGFnZUxvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX0xPQURJTkdfU1RBVFVTLFxuICBsb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9ICgpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9GSUxURVIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFVwbG9hZGVkSW1hZ2UgPSB1cGxvYWRlZEZpbGUgPT4gKHtcbiAgdHlwZTogU0VUX1VQTE9BREVEX0lNQUdFLFxuICBwYXlsb2FkOiB1cGxvYWRlZEZpbGUsXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9RVUVSWSwgU0VUX0dFTlJFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVzID0gcmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFUyxcbiAgbW92aWVzOiByZXNwb25zZS5yZXN1bHRzLFxuICBwYWdlOiAocmVzcG9uc2UucGFnZSArIDEpLFxuICB0b3RhbFBhZ2VzOiByZXNwb25zZS50b3RhbF9wYWdlcyxcbiAgdG90YWw6IHJlc3BvbnNlLnRvdGFsX3Jlc3VsdHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICBsZXQgdXJsID0gJ2FwaS9kaXNjb3Zlcic7XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKHF1ZXJ5TmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbcXVlcnlOYW1lXTtcbiAgICBjb25zdCBvcCA9IGkgPT09IDBcbiAgICAgID8gJz8nXG4gICAgICA6ICcmJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHtxdWVyeU5hbWV9PSR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbXVsdGlRdWVyeSA9IGAke3F1ZXJ5TmFtZX09YDtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIG11bHRpUXVlcnkgKz0gYCR7dn0sYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke211bHRpUXVlcnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFF1ZXJ5ID0gKHsgZmllbGQsIHZhbHVlIH0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogU0VUX1FVRVJZLFxuICAgIGZpZWxkLFxuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEdlbnJlcyA9IGdlbnJlcyA9PiAoe1xuICB0eXBlOiBTRVRfR0VOUkVTLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9ICgpID0+IGRpc3BhdGNoID0+IGF4aW9zXG4gIC5nZXQoJy9hcGkvZ2VucmUnKVxuICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKHNldEdlbnJlcyhkYXRhKSkpXG4gIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQge1xuICBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSLFxuICBDUkVBVEVfTElTVCxcbiAgREVMRVRFX0xJU1QsXG4gIEFERF9UT19MSVNULFxuICBERUxFVEVfRlJPTV9MSVNULFxuICBTRVRfTElTVFMsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cywgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdCh7IGxpc3RzLCB0b3RhbCB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xJU1RTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGxpc3RzLFxuICAgICAgdG90YWwsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RCeUN1cnJlbnRVc2VyKHsgcGFnZSwgbGltaXQgfSkge1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gY29va2llLmdldCgndXNlcl9pZCcpO1xuXG4gIGlmICghY3VycmVudFVzZXJJZCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gIH1cblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MoYC9hcGkvbGlzdHM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TGlzdCh7XG4gICAgICAgICAgbGlzdHM6IHJlc3BvbnNlLmRhdGEucm93cyxcbiAgICAgICAgICB0b3RhbDogcmVzcG9uc2UuZGF0YS5jb3VudCxcbiAgICAgICAgfSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMaXN0KGxpc3QpIHtcbiAgY29uc3QgdXJsID0gIWxpc3QuaWRcbiAgICA/ICcvYXBpL2xpc3RzJ1xuICAgIDogYC9hcGkvbGlzdHMvJHtsaXN0LmlkfWA7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLnBvc3QodXJsLCBsaXN0KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QoaWQpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9MaXN0KGxpc3RJZCwgbW92aWVJZCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tTGlzdChsaXN0SWQsIG1vdmllSWQpIHtcblxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZURldGFpbCA9IGRldGFpbCA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVfREVUQUlMLFxuICBkZXRhaWwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRGV0YWlsID0gaWQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldE1vdmllRGV0YWlsKG51bGwpKTtcblxuICBheGlvcy5nZXQoYC9hcGkvbW92aWUvJHtpZH1gKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goXG4gICAgICBzZXRNb3ZpZURldGFpbChkYXRhKSxcbiAgICApKVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIG1lc3NhZ2UsXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gdy0xMDAgdGV4dC1jZW50ZXJgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxuICBraW5kOiAnaW5mbycsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgbG9nbywgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGxvZ29QYXRoID0gbG9nb1xuICAgID8gYCR7dmlzc25lLmltYWdlc1NlY3VyZUJhc2VVcmx9L3c5Mi8ke2xvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTBcIj57bmFtZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db21wYW55LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nbzogJycsXG4gIG5hbWU6ICdDb21wYW55Jyxcbn07XG5cbkNvbXBhbnkucHJvcFR5cGVzID0gQ29tcGFueVNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuLi9Db21wYW55JztcbmltcG9ydCAnLi9Db21wYW55TGlzdC5zY3NzJztcblxuY29uc3QgQ29tcGFueUxpc3QgPSAoeyBjb21wYW5pZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNvbXBhbmllczwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7Y29tcGFuaWVzLm1hcChjID0+IChcbiAgICAgICAgICA8Q29tcGFueSBrZXk9e2MuaWR9IGxvZ289e2MubG9nb19wYXRofSBuYW1lPXtjLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueUxpc3QucHJvcFR5cGVzID0ge1xuICBjb21wYW5pZXM6IFByb3BUeXBlcy5hcnJheU9mKENvbXBhbnlTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IERldGFpbFRhYmxlID0gKHsgbW92aWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YCR7bW92aWUub3JnaW5hbFRpdGxlfSAoJHttb3ZpZS55ZWFyfSlgfTwvaDU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlLXNtIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc8L3RoPlxuICAgICAgICAgICAgPHRkPntgJHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICgke21vdmllLnZvdGVfY291bnR9KWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SZWxlYXNlIERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5yZWxlYXNlX2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5HZW5yZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5nZW5yZU5hbWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFnbGluZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnRhZ2xpbmV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJpZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5jb3VudHJpZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYW5ndWFnZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZGlyZWN0b3J9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Xcml0ZXI8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS53cml0ZXJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ib21lcGFnZTwvdGg+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e21vdmllLmhvbWVwYWdlfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e21vdmllLmhvbWVwYWdlfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsVGFibGUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogTW92aWVTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgTWVudSA9ICh7IHBhdGgsIGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG0gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17bS5wYXRofT5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7bS5wYXRoID09PSBwYXRoID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICB0bz17bS5wYXRofVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e20uaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttLm5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9Nb2RhbC5zY3NzJztcblxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGNhbmNlbCxcbiAgICBzdWJtaXQsXG4gICAgY2hpbGRyZW4sXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IHNob3cgPyAnc2hvdyBkLWJsb2NrJyA6ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbCBmYWRlICR7Y2xhc3NOYW1lfWB9IHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1iYWNrZHJvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17Y2FuY2VsfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c3VibWl0fT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxufTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9zdGVyIGZyb20gJy4uL1Bvc3Rlcic7XG5pbXBvcnQgJy4vTW92aWVDYXJkLnNjc3MnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGltYWdlLFxuICAgIHJhdGUsXG4gICAgc2x1ZyxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jYXJkIGgtMTAwIHctMTAwIHJvdW5kZWQtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgaW1nLXRodW1ibmFpbFwiPlxuICAgICAgPExpbmsgdG89e2Btb3ZpZS8ke3NsdWd9LyR7aWR9YH0gY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgcmF0aW5nLXRhZyBzaGFkb3ctc20gZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAge3JhdGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFBvc3RlciBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmF0ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IHtcbiAgY29uc3QgbGlzdCA9IG1vdmllcy5tYXAobW92aWUgPT4gKFxuICAgIDxkaXYga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0yIG1iLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxNb3ZpZUNhcmRcbiAgICAgICAgaWQ9e21vdmllLmlkfVxuICAgICAgICBpbWFnZT17bW92aWUucG9zdGVyfVxuICAgICAgICB0aXRsZT17bW92aWUudGl0bGV9XG4gICAgICAgIHJhdGU9e21vdmllLnZvdGVBdmVyYWdlfVxuICAgICAgICBzbHVnPXttb3ZpZS5zbHVnfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAge2xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCAnLi9OYXZiYXIuc2Nzcyc7XG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBpc0xvZ2dlZEluLFxuICAgIHBhdGhOYW1lLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbG9naW5CdXR0b24gPSBpc0xvZ2dlZEluID8gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9wcm9maWxlL2FjY291bnRcIiB0aXRsZT1cIlByb2ZpbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+e3VzZXIudXNlck5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dvdXRcIiB0aXRsZT1cIkxvZ291dFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ24tb3V0LWFsdFwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC9GcmFnbWVudD5cbiAgKSA6IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgIDxMaW5rIHRvPVwiL2F1dGhcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPmxvZ2luPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfVxuICAgICAgICAgIGFsdD1cIlZpc3NuZVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZC1ibG9ja1wiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgaWQ9XCJmaWx0ZXJCdXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmlsdGVyXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2luLXRoZWF0ZXJzJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvaW4tdGhlYXRlcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBpbiB0aGVhdGVyc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2NvbWluZy1zb29uJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvY29taW5nLXNvb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBjb21pbmcgc29vbmdcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteS1hdXRvXCI+XG4gICAgICAgICAge2xvZ2luQnV0dG9ufVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5OYXZiYXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgdXNlcjoge30sXG4gIHBhdGhOYW1lOiAnLycsXG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBwYXRoTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Ob3RGb3VuZC5zY3NzJztcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ub3QtZm91bmRcIj5cbiAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL29uZy5wbmdgfSBhbHQ9XCI0MDRcIiAvPlxuICAgIDxoND40MDQ8L2g0PlxuICAgIDxoNT5QYWdlIG5vdCBmb3VuZDwvaDU+XG4gICAgPHA+XG4gICAgICBXZSBhcmUgc29ycnkuIFRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3Igd2FzIG1vdmVkLCByZW1vdmVkLCByZW5hbWVkIG9yIG1pZ2h0IG5ldmVyIGV4aXN0ZWQuXG4gICAgPC9wPlxuICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5HTyBUTyBIT01FPC9hPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbmNvbnN0IFBhZ2VMb2FkaW5nID0gKHsgc2hvdyB9KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWZpeGVkIHRvcC0wIGxlZnQtMCBib3R0b20tMCBiZy1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgIDxTcGlubmVyIHNob3cgc2l6ZT1cImxnXCIgYWRkaW9uYWxDbGFzcz1cIm1yLTJcIiAvPlxuICAgICAgTG9hZGluZy4uLlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFnZUxvYWRpbmcucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKHBhZ2UsIGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG5cbiAgaWYgKE51bWJlci5pc0ludGVnZXIocGFnZSkpIHtcbiAgICByZXR1cm4geyBwYWdlIH07XG4gIH1cblxuICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XG4gICAgY29uc3QgbmV3UGFnZSA9IChjdXJyZW50UGFnZSAtIDEpO1xuICAgIHJlc3VsdCA9IG5ld1BhZ2UgPT09IDAgPyAxIDogbmV3UGFnZTtcbiAgfSBlbHNlIGlmIChwYWdlID09PSAnbmV4dCcpIHtcbiAgICByZXN1bHQgPSAoKGN1cnJlbnRQYWdlICsgMSkgPiB0b3RhbFBhZ2UpXG4gICAgICA/IHRvdGFsUGFnZVxuICAgICAgOiAoY3VycmVudFBhZ2UgKyAxKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2U6IHJlc3VsdCB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlTnVtYmVycyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIGJ1dHRvbkNvdW50LFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5mbG9vcih0b3RhbCAvIGxpbWl0KTtcbiAgY29uc3QgYmMgPSBNYXRoLmNlaWwoYnV0dG9uQ291bnQgLyAyKTtcblxuICBmb3IgKGxldCBpID0gKHBhZ2UgLSAoYmMgLSAxKSk7IGkgPCAocGFnZSArIGJjKTsgaSArPSAxKSB7XG4gICAgaWYgKGkgPiAwICYmIGkgPD0gdG90YWxQYWdlKSB7XG4gICAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWdlTnVtYmVycztcbn07XG5cblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IG9wdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7IHBhZ2UsIG9uUGFnaW5hdGUsIGxpbWl0LCB0b3RhbCB9ID0gb3B0aW9ucztcblxuICBjb25zdCBwYWdlTnVtYmVycyA9IGdlbmVyYXRlUGFnZU51bWJlcnMob3B0aW9ucyk7XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XG5cbiAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gPHNwYW4gLz47XG4gIH1cblxuICBjb25zdCBwYWdlQnV0dG9ucyA9IHBhZ2VOdW1iZXJzLm1hcChwbiA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAgJHtwbiA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gcG4gIT09IHBhZ2UgPyBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKHBuKSkgOiAnJ31cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gMSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygncHJldicsIHBhZ2UpKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7cGFnZUJ1dHRvbnN9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSB0b3RhbFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ25leHQnLCBwYWdlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiB7XG4gICAgYnV0dG9uQ291bnQ6IDMsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZTogMSxcbiAgICBsaW1pdDogMTAsXG4gIH0sXG59O1xuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uUGFnaW5hdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGJ1dHRvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gaW1hZ2VPbkxvYWQoKSB7XG5cbn1cblxuZnVuY3Rpb24gaW1hZ2VPbkVycm9yKCkge1xuICB0aGlzLnNyYyA9IHZpc3NuZS5kZWZhdWx0Q292ZXJJbWFnZVBhdGg7XG59XG5cbmNvbnN0IFBvc3RlciA9ICh7IHNyYywgYWx0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgc3JjPXtgJHtzcmN9YH1cbiAgICAgIG9uTG9hZD17aW1hZ2VPbkxvYWR9XG4gICAgICBvbkVycm9yPXtpbWFnZU9uRXJyb3J9XG4gICAgICBhbHQ9e2FsdH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblBvc3Rlci5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnLi9QYWdlTG9hZGluZyc7XG5pbXBvcnQgcHJvZmlsZU1lbnUgZnJvbSAnLi4vY29uc3RhbnRzL3Byb2ZpbGUtbWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgcGF0aCwgcGFnZUxvYWRpbmcsIHVzZXIgfSA9IHByb3BzO1xuXG4gIGlmIChwYWdlTG9hZGluZykge1xuICAgIHJldHVybiA8UGFnZUxvYWRpbmcgc2hvdyAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHJvdW5kZWQtY2lyY2xlIGF2YXRhci1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhciB8fCBgJHt2aXNzbmUuY2RufS91Y29udGVudC9hdmF0YXIvZGVmYXVsdC1hdmF0YXIuanBnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGUgYm9yZGVyIGF2YXRhclwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICBpZD1cImF2YXRhclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg1PntgQCR7dXNlci51c2VyTmFtZX1gfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TWVudSBpdGVtcz17cHJvZmlsZU1lbnV9IHBhdGg9e3BhdGh9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNob3csIGhlaWdodCB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiBzdHlsZT17eyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIlxuICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICBhcmlhLXZhbHVlbm93PVwiNzVcIlxuICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgaGVpZ2h0OiAyLFxufTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2hvdyxcbiAgICBzaXplLFxuICAgIGtpbmQsXG4gICAgY29sb3IsXG4gICAgYWRkaW9uYWxDbGFzcyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNwaW5uZXItJHtraW5kfSBzcGlubmVyLSR7a2luZH0tJHtzaXplfSB0ZXh0LSR7Y29sb3J9ICR7YWRkaW9uYWxDbGFzc31gfSByb2xlPVwic3RhdHVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBzaXplOiAnc20nLFxuICBraW5kOiAnZ3JvdycsXG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIGFkZGlvbmFsQ2xhc3M6ICcnLFxufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBhZGRpb25hbENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzbScsXG4gICAgJ21kJyxcbiAgICAnbGcnLFxuICAgICd4bCcsXG4gIF0pLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdib3JkZXInLFxuICAgICdncm93JyxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdpbmZvJyxcbiAgICAnbGlnaHQnLFxuICAgICdkYXJrJyxcbiAgXSksXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi4vUGFnaW5hdGlvbic7XG5pbXBvcnQgQWxlcnQgZnJvbSAnLi4vQWxlcnQnO1xuaW1wb3J0ICcuL1RhYmxlTGlzdC5zY3NzJztcblxuY29uc3QgY3JlYXRlSGVhZGVyID0gKGZpZWxkcykgPT4ge1xuICBjb25zdCB2aXNpYmxlRmllbGRzID0gZmllbGRzXG4gICAgLmZpbHRlcihmID0+ICFmLmhpZGRlbilcbiAgICAubWFwKGYgPT4gPHRoIHNjb3BlPVwiY29sXCI+e2YudGl0bGV9PC90aD4pO1xuXG4gIHJldHVybiA8dHI+e3Zpc2libGVGaWVsZHN9PC90cj47XG59O1xuXG5jb25zdCBjcmVhdGVCb2R5ID0gKGRhdGEsIGZpZWxkcykgPT4ge1xuICBjb25zdCB0Ym9keSA9IFtdO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1GaWVsZHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdiA9IGl0ZW1bZmllbGQubmFtZV07XG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLmZvcm1hdFxuICAgICAgICA/IGZpZWxkLmZvcm1hdCh2KVxuICAgICAgICA6IHYudG9TdHJpbmcoKTtcblxuICAgICAgaXRlbUZpZWxkcy5wdXNoKDx0ZD57dmFsdWV9PC90ZD4pO1xuICAgIH0pO1xuXG4gICAgdGJvZHkucHVzaCg8dHI+e2l0ZW1GaWVsZHN9PC90cj4pO1xuICB9KTtcblxuICByZXR1cm4gdGJvZHk7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdpbmF0aW9uID0gKG9wdGlvbnMsIGRhdGFMZW5ndGgpID0+IHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCB7XG4gICAgbGltaXQsXG4gICAgdG90YWwsXG4gIH0gPSBvcHRpb25zO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgIDxQYWdpbmF0aW9uIG9wdGlvbnM9e29wdGlvbnN9IC8+XG4gICAgICA8c3Bhbj57YFNob3cgJHtkYXRhTGVuZ3RofSByZXN1bHQgb2YgJHt0b3RhbH1gfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRhdGEsIGZpZWxkcywgcGFnaW5hdGlvbiwgcmVzcG9uc2l2ZSB9ID0gcHJvcHM7XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4XCI+XG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJUaGVyZSB3ZXJlIG5vIHJlc3VsdC5cIiBraW5kPVwid2FybmluZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRzID0gY3JlYXRlSGVhZGVyKGZpZWxkcyk7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVCb2R5KGRhdGEsIGZpZWxkcyk7XG4gIGNvbnN0IHBhZ2luYXRpb25CdXR0b25zID0gY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uLCBkYXRhLmxlbmd0aCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YHRhYmxlICR7cmVzcG9uc2l2ZSA/ICd0YWJsZS1yZXNwb25zaXZlJyA6ICcnfWB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHtoZWFkc31cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtwYWdpbmF0aW9uQnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9WaWRlby5zY3NzJztcblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlb0tleSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gbWItMiBlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICA8aWZyYW1lXG4gICAgICBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlxuICAgICAgdGl0bGU9XCJWaWRlb1wiXG4gICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvS2V5fT9hdXRvcGxheT0wJm9yaWdpbj0ke3Zpc3NuZS5kb21haW59YH1cbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9LZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLy8gY29tbW9uXG5leHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxFUlQgPSAnVE9HR0xFX0FMRVJUJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfRklMVEVSID0gJ1RPR0dMRV9GSUxURVInO1xuXG4vLyBhdXRoXG5leHBvcnQgY29uc3QgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMgPSAnU0VUX1BBR0VfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HX1NUQVRVUyA9ICdTRVRfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gJ1JFR0lTVEVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbi8vIGRpc2NvdmVyXG5leHBvcnQgY29uc3QgR0VUX01PVklFUyA9ICdHRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVTID0gJ1NFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRVMgPSAnU0VUX0dFTlJFUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVJZID0gJ1NFVF9RVUVSWSc7XG5cbi8vIGxpc3RzXG5leHBvcnQgY29uc3QgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiA9ICdHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1RTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fTElTVCA9ICdBRERfVE9fTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fTElTVCA9ICdERUxFVEVfRlJPTV9MSVNUJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVFMgPSAnU0VUX0xJU1RTJztcblxuLy8gbW92aWUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0VUX01PVklFX0RFVEFJTCA9ICdTRVRfTU9WSUVfREVUQUlMJztcblxuLy8gcHJvZmlsZVxuLy8gIC0tIEFjY291bnRcbmV4cG9ydCBjb25zdCBTRVRfQUNDT1VOVF9ERVRBSUwgPSAnU0VUX0FDQ09VTlRfREVUQUlMJztcbmV4cG9ydCBjb25zdCBTRVRfVVBMT0FERURfSU1BR0UgPSAnU0VUX1VQTE9BREVEX0lNQUdFJztcblxuLy8gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgU09SVF9PUFRJT05TID0gW3tcbiAgbmFtZTogJ1BvcHVsYXJpdHknLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JldmVudWUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUHJpbWFyeSBSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnT3JnaW5hbCBUaXRsZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIEF2ZXJhZ2UnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBDb3VudCcsXG4gIHZhbHVlOiAnZGVzYycsXG59XTtcbiIsImNvbnN0IHByb2ZpbGVNZW51ID0gW1xuICB7XG4gICAgbmFtZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvYWNjb3VudCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlzdHMnLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvbGlzdHMnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gIC8vICAgaWNvbjogJ2hlYXJ0JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZmF2b3JpdGVzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdDb21tZW50cycsXG4gIC8vICAgaWNvbjogJ2NvbW1lbnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9jb21tZW50cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnUmV2aWV3cycsXG4gIC8vICAgaWNvbjogJ25ld3NwYXBlcicsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3Jldmlld3MnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAvLyAgIGljb246ICd1c2VyLWZyaWVuZHMnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdTZXR0aW5ncycsXG4gIC8vICAgaWNvbjogJ2NvZycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JnaW5hbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9tZXBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXN0U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcm9maWxlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2VucmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY3Jld3M6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgdm90ZUF2ZXJhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHJlbGVhc2VZZWFyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCB7IFVzZXJTaGFwZSwgbWF0Y2hTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0ICcuL0FjY291bnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHByb3BzLnNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHVzZXJGb3JtOiB7fSxcbiAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSwgZmllbGQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgICBzdGF0ZVtmaWVsZF1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nLCBjaGFuZ2VQYXNzd29yZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQub2xkUGFzc3dvcmQgPT09IHBhc3N3b3JkLm5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGNhbm5vdCBiZSB0aGUgc2FtZSB3aXRoIG9sZCBwYXNzd29yZC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDoge30gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdXBkYXRlVXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVzZXJGb3JtLCB2YWxpZGF0aW9uLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXIodXNlckZvcm0pfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30ga2luZD1cImJvcmRlclwiIGNvbG9yPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ30+VXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+Q2hhbmdlIFBhc3N3b3JkPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkSW5wdXRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQubmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybU5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCwgY2hhbmdlUGFzc3dvcmQsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBY2NvdW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBzaG93LFxuICAgIG1lc3NhZ2UsXG4gICAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHNpdGUtYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVBbGVydERpYWxvZ30+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGtpbmQ6ICdpbmZvJyxcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCAnLi9BbGVydERpYWxvZy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY29tbW9uIH0pID0+ICh7XG4gIHNob3c6IGNvbW1vbi5zaG93QWxlcnQsXG4gIG1lc3NhZ2U6IGNvbW1vbi5hbGVydE1lc3NhZ2UsXG4gIGtpbmQ6IGNvbW1vbi5hbGVydEtpbmQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsgc2hvdzogZmFsc2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBbGVydERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uLy4uL2xpYi9jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaEZvcm0gPSB0aGlzLnN3aXRjaEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luUmVnaXN0ZXIgPSB0aGlzLmxvZ2luUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29va2llLmdldCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgdG9nZ2xlQWxlcnREaWFsb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAoIWZvcm0uZW1haWwgfHwgIWVtYWlsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtLnBhc3N3b3JkIHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA+IDE2KSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIG11c3QgYmUgNi0xNiBjaGFjcmFjdGVyLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgaWYgKCFmb3JtLnVzZXJOYW1lIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+VXNlciBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmZpcnN0TmFtZSB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkZpcnN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmxhc3ROYW1lIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+TGFzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm0uY29uZmlybVBhc3N3b3JkICE9PSBmb3JtLnBhc3N3b3JkKSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBkb250IG1hdGNoPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgbG9naW5SZWdpc3RlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvbihmb3JtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB1cmwgPSBpc1JlZ2lzdGVyXG4gICAgICA/ICcvYXBpL3JlZ2lzdGVyJ1xuICAgICAgOiAnL2FwaS9sb2dpbic7XG5cbiAgICByZXR1cm4gcHJvcHMubG9naW5SZWdpc3Rlcihmb3JtLCB1cmwpO1xuICB9XG5cbiAgc3dpdGNoRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNSZWdpc3RlcjogIXByZXZTdGF0ZS5pc1JlZ2lzdGVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgaXNSZWdpc3RlcixcbiAgICAgIHZhbGlkYXRpb24sXG4gICAgICBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICAgIGxldCBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICBsZXQgcmVnaXN0ZXJJbnB1dCA9IG51bGw7XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgICBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ0xPR0lOJztcblxuICAgICAgcmVnaXN0ZXJJbnB1dCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiY29uZmlybVBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybVBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwibGFzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhdXRoLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH0gYWx0PVwiVmlzc25lXCIgaGVpZ2h0PVwiNzBcIiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVJlZ1wiIGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxJbnB1dEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkSW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJwYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVubG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5wYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge3JlZ2lzdGVySW5wdXR9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gJHtsb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZ29vZ2xlICBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2dvb2dsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEdPT0dMRVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGZhY2Vib29rIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEZBQ0VCT09LXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXV0aC5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgeyBsb2dpblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0ICcuL0F1dGguc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGxvZ2luUmVnaXN0ZXI6IChkYXRhLCB1cmwpID0+IGRpc3BhdGNoKGxvZ2luUmVnaXN0ZXIoZGF0YSwgdXJsKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBtZXNzYWdlID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsga2luZDogJ2RhbmdlcicsIG1lc3NhZ2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHtcbiAgVXNlclNoYXBlLFxuICBNb3ZpZVNoYXBlLFxuICBHZW5yZVNoYXBlLFxuICBGaWx0ZXJTaGFwZSxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9hZE1vdmllcyA9IHRoaXMubG9hZE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEdlbnJlcywgdG9nZ2xlRmlsdGVyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhdGggfSA9IG1hdGNoO1xuXG4gICAgZ2V0R2VucmVzKCk7XG5cbiAgICBpZiAoWycvY29taW5nLXNvb24nLCAnL2luLXRoZWF0ZXJzJ10uaW5kZXhPZihwYXRoKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0UXVlcnkoeyBmaWVsZDogJ2ZpbHRlcicsIHZhbHVlOiBwYXRoLnJlcGxhY2UoJy8nLCAnJykgfSk7XG4gICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3ZpZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGNvbnN0IHsgc2V0UXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UXVlcnkocXVlcnkpLnRoZW4odGhpcy5sb2FkTW92aWVzKTtcbiAgfVxuXG4gIGxvYWRNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZXMsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllcyhxdWVyeSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW92aWVzLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZ2VucmVzLFxuICAgICAgcXVlcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNob3dGaWx0ZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IHBhdGhOYW1lPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8RmlsdGVyIHNob3c9e3Nob3dGaWx0ZXJ9IGdlbnJlcz17Z2VucmVzfSBzZXRRdWVyeT17dGhpcy5zZXRRdWVyeX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IGlkPVwibGlzdFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtLTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vdmllc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMiAke2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5EaXNjb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxuICB1c2VyOiB7fSxcbn07XG5cbkRpc2NvdmVyLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRHZW5yZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBzaG93RmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vRGlzY292ZXInO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TW92aWVzLFxuICBzZXRRdWVyeSxcbiAgZ2V0R2VucmVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2NvdmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIHF1ZXJ5OiBzdGF0ZS5kaXNjb3Zlci5xdWVyeSxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbW92aWVzOiBzdGF0ZS5kaXNjb3Zlci5tb3ZpZXMsXG4gIGdlbnJlczogc3RhdGUuZGlzY292ZXIuZ2VucmVzLFxuICBzaG93RmlsdGVyOiBzdGF0ZS5jb21tb24uc2hvd0ZpbHRlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldE1vdmllcyhxdWVyeSkpLFxuICBzZXRRdWVyeTogcXVlcnkgPT4gZGlzcGF0Y2goc2V0UXVlcnkocXVlcnkpKSxcbiAgZ2V0R2VucmVzOiAoKSA9PiBkaXNwYXRjaChnZXRHZW5yZXMoKSksXG4gIHRvZ2dsZUZpbHRlcjogc2hvdyA9PiBkaXNwYXRjaCh0b2dnbGVGaWx0ZXIoc2hvdykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShEaXNjb3Zlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVMaXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDoge30sXG4gICAgICBxdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2F2ZSA9IHRoaXMuc2F2ZS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5nZXRMaXN0cygpO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24ocHJldlN0YXRlLnF1ZXJ5LCBxdWVyeSksXG4gICAgfSksIHRoaXMuZ2V0TGlzdHMpO1xuICB9XG5cbiAgZ2V0TGlzdHMoKSB7XG4gICAgY29uc3QgeyBnZXRMaXN0QnlDdXJyZW50VXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKHF1ZXJ5KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDoge30gfSk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dNb2RhbDogIXByZXZTdGF0ZS5zaG93TW9kYWwsXG4gICAgfSkpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnBhcnNlZFZhbHVlIHx8IHRhcmdldC52YWx1ZTtcblxuICAgIGlmIChuYW1lID09PSAncHVibGljJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxpc3RbbmFtZV0gPSB2YWx1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0IH0pO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzYXZlTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBzYXZlTGlzdChsaXN0KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHF1ZXJ5LCBzaG93TW9kYWwsIGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgcGFnZUxvYWRpbmcsXG4gICAgICB0b3RhbCxcbiAgICAgIHRhYmxlRmllbGRzLFxuICAgICAgbGlzdHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxQcm9maWxlQ29udGFpbmVyIHVzZXI9e3VzZXJ9IHBhdGg9e21hdGNoLnBhdGh9IHBhZ2VMb2FkaW5nPXtwYWdlTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmRcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeVwiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmNyZWF0ZX0+XG4gICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwicGx1cy1zcXVhcmVcIiAvPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5DcmVhdGUgTGlzdDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VGFibGVMaXN0XG4gICAgICAgICAgICB0aXRsZT1cIk15IExpc3RzXCJcbiAgICAgICAgICAgIGRhdGE9e2xpc3RzfVxuICAgICAgICAgICAgZmllbGRzPXt0YWJsZUZpZWxkc31cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgdG90YWwsXG4gICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICAgIGxpbWl0OiBxdWVyeS5saW1pdCxcbiAgICAgICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgICAgIG9uUGFnaW5hdGU6IHRoaXMuc2V0UXVlcnksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gdGl0bGU9XCJDcmVhdGUgTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVNb2RhbH0gc3VibWl0PXt0aGlzLnNhdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPkxpc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGlzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpc3QubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtsaXN0LnB1YmxpY31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICBQdWJsaWMgTGlzdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshbGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHJpdmF0ZSBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvdGFsOiAwLFxufTtcblxuTGlzdHMucHJvcFR5cGVzID0ge1xuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldExpc3RCeUN1cnJlbnRVc2VyLCBzYXZlTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vTGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG4gIHRvdGFsOiBzdGF0ZS5saXN0cy50b3RhbCxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxuICBzYXZlTGlzdDogbGlzdCA9PiBkaXNwYXRjaChzYXZlTGlzdChsaXN0KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKExpc3RzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZ3Jlc3NCYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9ncmVzc0Jhcic7XG5pbXBvcnQgRGV0YWlsVGFibGUgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9EZXRhaWxUYWJsZSc7XG5pbXBvcnQgQ29tcGFueUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Db21wYW55TGlzdCc7XG5pbXBvcnQgQ2FzdExpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9DYXN0TGlzdCc7XG5pbXBvcnQgVmlkZW8gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9WaWRlbyc7XG5pbXBvcnQgeyBVc2VyU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb3ZpZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0TW92aWVEZXRhaWwsIG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllRGV0YWlsKG1hdGNoLnBhcmFtcy5pZCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkZXRhaWwsIHVzZXIsIGlzTG9nZ2VkSW4gfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRldGFpbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8UHJvZ3Jlc3NCYXIgc2hvdyBjb2xvcj1cImluZm9cIiAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlbyA9IGRldGFpbC52aWRlb3MubGVuZ3RoID4gMFxuICAgICAgPyA8VmlkZW8gdmlkZW9LZXk9e2RldGFpbC52aWRlb3NbMF0ua2V5fSAvPlxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi0yXCIgc3JjPXtkZXRhaWwucG9zdGVyUGF0aH0gYWx0PXtkZXRhaWwudGl0bGV9IC8+XG4gICAgICAgICAgICAgIDxDb21wYW55TGlzdCBjb21wYW5pZXM9e2RldGFpbC5wcm9kdWN0aW9uX2NvbXBhbmllc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTYgbWItMlwiPlxuICAgICAgICAgICAgICB7dmlkZW99XG4gICAgICAgICAgICAgIDxEZXRhaWxUYWJsZSBtb3ZpZT17ZGV0YWlsfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgPENhc3RMaXN0IGNhc3RzPXtkZXRhaWwuY3JlZGl0cy5jYXN0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5Nb3ZpZS5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxufTtcblxuTW92aWUucHJvcFR5cGVzID0ge1xuICBnZXRNb3ZpZURldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGV0YWlsOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIG1hdGNoOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vTW92aWUnO1xuaW1wb3J0IHsgZ2V0TW92aWVEZXRhaWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL21vdmllJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZGV0YWlsOiBzdGF0ZS5tb3ZpZS5kZXRhaWwsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVEZXRhaWw6IGlkID0+IGRpc3BhdGNoKGdldE1vdmllRGV0YWlsKGlkKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vdmllKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuXG5pbXBvcnQgJy4uL3NjcmlwdHMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmUtc3RvcmUnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9Sb290JztcbmltcG9ydCBmb250QXdlc29tZSBmcm9tICcuLi9saWIvZm9udC1hd2Vzb21lJztcblxuZm9udEF3ZXNvbWUoKTsgLy8gaW5pdCBmb250IGF3c29tZSBpY29uc1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbnJlbmRlcihcbiAgPFJvb3Qgc3RvcmU9e3N0b3JlfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLFxuKTtcbiIsImltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWNjb3VudChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BQ0NPVU5UX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgYWxlcnRNZXNzYWdlOiBudWxsLFxuICBhbGVydEtpbmQ6ICdpbmZvJyxcbiAgcGFnZUxvYWRpbmc6IHRydWUsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVE9HR0xFX0FMRVJUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dBbGVydDogIXN0YXRlLnNob3dBbGVydCxcbiAgICAgICAgYWxlcnRNZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgYWxlcnRLaW5kOiBhY3Rpb24ua2luZCxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlTG9hZGluZzogYWN0aW9uLnBhZ2VMb2FkaW5nLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9MT0FESU5HX1NUQVRVUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBUT0dHTEVfRklMVEVSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dGaWx0ZXI6ICFzdGF0ZS5zaG93RmlsdGVyLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9VUExPQURFRF9JTUFHRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1cGxvYWRlZEF2YXRhcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9HRU5SRVMsIFNFVF9RVUVSWSB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi9saWIvY29va2llJztcblxuY29uc3QgdXNlciA9IHtcbiAgaWQ6IGNvb2tpZS5nZXQoJ3VzZXJfaWQnKSxcbiAgdXNlck5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJuYW1lJyksXG4gIGZyaXN0TmFtZTogY29va2llLmdldCgndXNlcl9maXJzdF9uYW1lJyksXG4gIGxhc3ROYW1lOiBjb29raWUuZ2V0KCd1c2VyX2xhc3RfbmFtZScpLFxuICBlbWFpbDogY29va2llLmdldCgndXNlcl9lbWFpbCcpLFxufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyLFxuICBnZW5yZXM6IFtdLFxuICBtb3ZpZXM6IFtdLFxuICB0b3RhbDogMCxcbiAgdG90YWxQYWdlOiAxLFxuICBxdWVyeToge1xuICAgIHBhZ2U6IDEsXG4gICAgc29ydEJ5OiAncG9wdWxhcml0eS5kZWNzJyxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICB3aXRoR2VucmVzOiBbXSxcbiAgICB5ZWFyOiBudWxsLFxuICAgIGNyZXdzOiBbXSxcbiAgICBjYXN0czogW10sXG4gIH0sXG4gIGlzTG9nZ2VkSW46ICEhdXNlci5lbWFpbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2NvdmVyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IHN0YXRlLm1vdmllcy5jb25jYXQoYWN0aW9uLm1vdmllcyksXG4gICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXG4gICAgICAgIHRvdGFsUGFnZXM6IGFjdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiBhY3Rpb24ucGFnZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0dFTlJFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBnZW5yZXM6IGFjdGlvbi5nZW5yZXMsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1FVRVJZOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogW10sXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5xdWVyeSwge1xuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgW2FjdGlvbi5maWVsZF06IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB1c2VyIG9iamVjdCB0byBhY2NvdW50IHJlZHVjZXJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9hY2NvdW50JztcbmltcG9ydCBkaXNjb3ZlciBmcm9tICcuL2Rpc2NvdmVyJztcbmltcG9ydCBtb3ZpZSBmcm9tICcuL21vdmllJztcbmltcG9ydCBsaXN0cyBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhY2NvdW50LFxuICBkaXNjb3ZlcixcbiAgbW92aWUsXG4gIGxpc3RzLFxuICBjb21tb24sXG59KTtcbiIsImltcG9ydCB7IFNFVF9MSVNUUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGxpc3RzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRhYmxlRmllbGRzOiBbe1xuICAgIHRpdGxlOiAnSWQnLFxuICAgIG5hbWU6ICdpZCcsXG4gICAgaGlkZGVuOiB0cnVlLFxuICB9LCB7XG4gICAgdGl0bGU6ICdOYW1lJyxcbiAgICBuYW1lOiAnbmFtZScsXG4gIH0sIHtcbiAgICB0aXRsZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICBuYW1lOiAnY3JlYXRlZEF0JyxcbiAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICB9LFxuICB9LCB7XG4gICAgdGl0bGU6ICdQdWJsaWMnLFxuICAgIG5hbWU6ICdwdWJsaWMnLFxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID8gJ1B1YmxpYycgOiAnUHJpdmF0ZSc7XG4gICAgfSxcbiAgfV0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9MSVNUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsaXN0czogYWN0aW9uLnBheWxvYWQubGlzdHMsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRldGFpbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRV9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24uZGV0YWlsLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgKSxcbiAgKTtcbn1cbiIsIlxuaW1wb3J0IHtcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXMsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICBzZXRMb2FkaW5nU3RhdHVzLFxufSBmcm9tICcuLi9hcHAvYWN0aW9ucy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcblxuICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuXG4gICAgc3dpdGNoIChzdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDQwNDpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9wYWdlLW5vdC1mb3VuZGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgQUxFUlRfVFlQRVMgPSBbXG4gICdwcmltYXJ5JyxcbiAgJ3NlY29uZGFyeScsXG4gICdzdWNjZXNzJyxcbiAgJ2RhbmdlcicsXG4gICd3YXJuaW5nJyxcbiAgJ2luZm8nLFxuICAnbGlnaHQnLFxuICAnZGFyaycsXG5dO1xuXG5leHBvcnQgY29uc3QgQUxFUlRfVFlQRV9JQ09OX01BUCA9IHtcbiAgcHJpbWFyeTogJycsXG59O1xuIiwiY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5cbmNvbnN0IHNldCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBkb2MuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xufTtcblxuY29uc3QgZ2V0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvYy5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBbY25hbWUsIGN2YWx1ZV0gPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGNuYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBjdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQsXG4gIHNldCxcbn07XG4iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7XG4gIGZhVXNlcixcbiAgZmFTaWduT3V0QWx0LFxuICBmYUVudmVsb3BlLFxuICBmYVVubG9jayxcbiAgZmFBbGlnbkxlZnQsXG4gIGZhS2V5LFxuICBmYVNpZ25hdHVyZSxcbiAgZmFGaWx0ZXIsXG4gIGZhU29ydEFtb3VudFVwLFxuICBmYVNvcnRBbW91bnREb3duLFxuICBmYVVzZXJDaXJjbGUsXG4gIGZhTGlzdCxcbiAgZmFTdGFyLFxuICBmYUhlYXJ0LFxuICBmYUNvbW1lbnQsXG4gIGZhU3dhdGNoYm9vayxcbiAgZmFVc2VyRnJpZW5kcyxcbiAgZmFDb2csXG4gIGZhRWRpdCxcbiAgZmFVcGxvYWQsXG4gIGZhTmV3c3BhcGVyLFxuICBmYUF0LFxuICBmYUFuZ2xlUmlnaHQsXG4gIGZhQW5nbGVMZWZ0LFxuICBmYVBsdXNTcXVhcmUsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge1xuICBmYUZhY2Vib29rLFxuICBmYUdvb2dsZSxcbiAgZmFUd2l0dGVyLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxpYnJhcnkuYWRkKFxuICAgIGZhVXNlcixcbiAgICBmYVNpZ25PdXRBbHQsXG4gICAgZmFFbnZlbG9wZSxcbiAgICBmYVVubG9jayxcbiAgICBmYUFsaWduTGVmdCxcbiAgICBmYUtleSxcbiAgICBmYVNpZ25hdHVyZSxcbiAgICBmYUZpbHRlcixcbiAgICBmYVNvcnRBbW91bnRVcCxcbiAgICBmYVNvcnRBbW91bnREb3duLFxuICAgIGZhRmFjZWJvb2ssXG4gICAgZmFHb29nbGUsXG4gICAgZmFUd2l0dGVyLFxuICAgIGZhSW5zdGFncmFtLFxuICAgIGZhVXNlckNpcmNsZSxcbiAgICBmYUxpc3QsXG4gICAgZmFTdGFyLFxuICAgIGZhSGVhcnQsXG4gICAgZmFDb21tZW50LFxuICAgIGZhU3dhdGNoYm9vayxcbiAgICBmYVVzZXJGcmllbmRzLFxuICAgIGZhQ29nLFxuICAgIGZhRWRpdCxcbiAgICBmYVVwbG9hZCxcbiAgICBmYU5ld3NwYXBlcixcbiAgICBmYUF0LFxuICAgIGZhQW5nbGVSaWdodCxcbiAgICBmYUFuZ2xlTGVmdCxcbiAgICBmYVBsdXNTcXVhcmUsXG4gICk7XG59XG4iLCIoKCkgPT4ge1xuICBjb25zdCB3aW4gPSB3aW5kb3c7XG5cbiAgd2luLm9ubG9hZCA9ICgpID0+IHtcbiAgICBjb25zdCBwYWdlTG9hZGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYWdlTG9hZGluZycpO1xuXG4gICAgaWYgKHBhZ2VMb2FkaW5nKSB7XG4gICAgICBwYWdlTG9hZGluZy5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBpZiAodmlzc25lLmVudiA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xuICAgICAgICBuYXZpZ2F0b3Iuc2VydmljZVdvcmtlci5yZWdpc3RlcignL3N3LmpzJyk7XG4gICAgICB9XG4gICAgfVxuICB9O1xufSkoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=