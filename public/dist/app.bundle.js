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

var _Alert = __webpack_require__(/*! ./Alert */ "./app/assets/javascript/app/components/Alert.jsx");

var _Alert2 = _interopRequireDefault(_Alert);

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
        _react2.default.createElement(_Alert2.default, { message: 'There were no result.', kind: 'warning' })
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
            'div',
            { className: 'form-group' },
            _react2.default.createElement(
              'label',
              null,
              'List Name'
            ),
            _react2.default.createElement('input', { type: 'text', className: 'form-control', placeholder: 'List Name' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'form-group form-check' },
            _react2.default.createElement('input', { type: 'checkbox', className: 'form-check-input' }),
            _react2.default.createElement(
              'label',
              { className: 'form-check-label' },
              'Public List'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vVmlkZW8uc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL2FjdGlvbi10eXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9maWxlLW1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvcHJvcC1zaGFwZXMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvQWNjb3VudC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BY2NvdW50L2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydERpYWxvZy9BbGVydERpYWxvZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL0F1dGguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL0F1dGguc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQXV0aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvRGlzY292ZXIvRGlzY292ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTGlzdHMvTGlzdHMuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvTW92aWUvTW92aWUuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2FjY291bnQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9jb21tb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9tb3ZpZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3N0b3JlL2NvbmZpZ3VyZS1zdG9yZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2FqYXgtZXJyb3ItaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2Nvb2tpZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvbGliL2ZvbnQtYXdlc29tZS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvc2NyaXB0cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzIl0sIm5hbWVzIjpbIlJvb3QiLCJzdG9yZSIsIkRpc2NvdmVyIiwiQXV0aCIsIkFjY291bnQiLCJMaXN0cyIsIk1vdmllIiwiTm90Rm91bmQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJpbnN0YW5jZU9mIiwiT2JqZWN0IiwiaXNSZXF1aXJlZCIsInNldEFjY291bnREZXRhaWwiLCJ0eXBlIiwiU0VUX0FDQ09VTlRfREVUQUlMIiwicGF5bG9hZCIsInVzZXIiLCJnZXRBY2NvdW50RGV0YWlsIiwiZGlzcGF0Y2giLCJheGlvcyIsImdldCIsInRoZW4iLCJyZXNwb25zZSIsImRhdGEiLCJjYXRjaCIsInVwZGF0ZVVzZXIiLCJwdXQiLCJpZCIsImtpbmQiLCJtZXNzYWdlIiwiY2hhbmdlUGFzc3dvcmQiLCJwYXNzd29yZCIsImxvZ2luUmVnaXN0ZXIiLCJ1cmwiLCJwb3N0Iiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwibG9nb3V0IiwidG9nZ2xlQWxlcnREaWFsb2ciLCJUT0dHTEVfQUxFUlQiLCJzZXRQYWdlTG9hZGluZ1N0YXR1cyIsIlNFVF9QQUdFX0xPQURJTkdfU1RBVFVTIiwicGFnZUxvYWRpbmciLCJzdGF0dXMiLCJzZXRMb2FkaW5nU3RhdHVzIiwiU0VUX0xPQURJTkdfU1RBVFVTIiwibG9hZGluZyIsInRvZ2dsZUZpbHRlciIsIlRPR0dMRV9GSUxURVIiLCJzZXRVcGxvYWRlZEltYWdlIiwiU0VUX1VQTE9BREVEX0lNQUdFIiwidXBsb2FkZWRGaWxlIiwic2V0TW92aWVzIiwiU0VUX01PVklFUyIsIm1vdmllcyIsInJlc3VsdHMiLCJwYWdlIiwidG90YWxQYWdlcyIsInRvdGFsX3BhZ2VzIiwidG90YWwiLCJ0b3RhbF9yZXN1bHRzIiwiZ2V0TW92aWVzIiwicXVlcnkiLCJrZXlzIiwiZm9yRWFjaCIsInF1ZXJ5TmFtZSIsImkiLCJ2YWx1ZSIsIm9wIiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwibXVsdGlRdWVyeSIsInYiLCJzZXRRdWVyeSIsImZpZWxkIiwiU0VUX1FVRVJZIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRHZW5yZXMiLCJTRVRfR0VOUkVTIiwiZ2VucmVzIiwiZ2V0R2VucmVzIiwic2V0TGlzdCIsImdldExpc3RCeUN1cnJlbnRVc2VyIiwiY3JlYXRlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsImxpc3RzIiwiU0VUX0xJU1RTIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwidmlzc25lIiwiZG9tYWluIiwiYWpheEVycm9ySGFuZGxlciIsImxpc3QiLCJyZXN1bHQiLCJsaXN0SWQiLCJtb3ZpZUlkIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJGb290ZXIiLCJNZW51IiwicGF0aCIsIml0ZW1zIiwibWVudUl0ZW1zIiwibSIsImljb24iLCJzaGFwZSIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwidG90YWxQYWdlIiwiTWF0aCIsImNlaWwiLCJiYyIsIlBhZ2luYXRpb24iLCJvblBhZ2luYXRlIiwicGFnZUJ1dHRvbnMiLCJwbiIsImltYWdlT25Mb2FkIiwiaW1hZ2VPbkVycm9yIiwic3JjIiwiZGVmYXVsdENvdmVySW1hZ2VQYXRoIiwiUG9zdGVyIiwiYWx0IiwiUHJvZmlsZUNvbnRhaW5lciIsImF2YXRhciIsInByb2ZpbGVNZW51IiwiUHJvZ3Jlc3NCYXIiLCJoZWlnaHQiLCJ3aWR0aCIsIlNwaW5uZXIiLCJzaXplIiwiY29sb3IiLCJhZGRpb25hbENsYXNzIiwiY3JlYXRlSGVhZGVyIiwiZmllbGRzIiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJoaWRkZW4iLCJjcmVhdGVCb2R5IiwidGJvZHkiLCJpdGVtIiwiaXRlbUZpZWxkcyIsImZvcm1hdCIsInRvU3RyaW5nIiwiY3JlYXRlUGFnaW5hdGlvbiIsIlRhYmxlTGlzdCIsInBhZ2luYXRpb24iLCJoZWFkcyIsImJvZHkiLCJwYWdpbmF0aW9uQnV0dG9ucyIsIlZpZGVvIiwidmlkZW9LZXkiLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9UT19MSVNUIiwiREVMRVRFX0ZST01fTElTVCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJBbGVydERpYWxvZyIsImZvcm0iLCJjb25maXJtUGFzc3dvcmQiLCJzd2l0Y2hGb3JtIiwiZXJyb3JNZXNzYWdlIiwiZW1haWxJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzUmVnaXN0ZXIiLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGF0ZSIsImJ1dHRvblRleHQiLCJzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0IiwicmVnaXN0ZXJJbnB1dCIsImhhbmRsZVN1Ym1pdCIsImRpc2NvdmVyIiwibG9hZE1vdmllcyIsInNob3dGaWx0ZXIiLCJwYXRobmFtZSIsImdldExpc3RzIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGUiLCJhc3NpZ24iLCJzaG93TW9kYWwiLCJ0YWJsZUZpZWxkcyIsInBhcmFtcyIsInZpZGVvIiwidmlkZW9zIiwicG9zdGVyUGF0aCIsInByb2R1Y3Rpb25fY29tcGFuaWVzIiwiY3JlZGl0cyIsImNhc3QiLCJnZXRFbGVtZW50QnlJZCIsImluaXRpYWxTdGF0ZSIsImFjdGlvbiIsInVwbG9hZGVkQXZhdGFyIiwiZnJpc3ROYW1lIiwiY29uY2F0IiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwidGh1bmtNaWRkbGV3YXJlIiwic3RhdHVzQ29kZSIsIkFMRVJUX1RZUEVfSUNPTl9NQVAiLCJwcmltYXJ5IiwiZG9jIiwic2V0IiwiY29va2llcyIsImNuYW1lIiwiY3ZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwibGlicmFyeSIsImFkZCIsImZhVXNlciIsImZhU2lnbk91dEFsdCIsImZhRW52ZWxvcGUiLCJmYVVubG9jayIsImZhQWxpZ25MZWZ0IiwiZmFLZXkiLCJmYVNpZ25hdHVyZSIsImZhRmlsdGVyIiwiZmFTb3J0QW1vdW50VXAiLCJmYVNvcnRBbW91bnREb3duIiwiZmFGYWNlYm9vayIsImZhR29vZ2xlIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYVVzZXJDaXJjbGUiLCJmYUxpc3QiLCJmYVN0YXIiLCJmYUhlYXJ0IiwiZmFDb21tZW50IiwiZmFTd2F0Y2hib29rIiwiZmFVc2VyRnJpZW5kcyIsImZhQ29nIiwiZmFFZGl0IiwiZmFVcGxvYWQiLCJmYU5ld3NwYXBlciIsImZhQXQiLCJmYUFuZ2xlUmlnaHQiLCJmYUFuZ2xlTGVmdCIsImZhUGx1c1NxdWFyZSIsIndpbiIsIm9ubG9hZCIsInJlbW92ZSIsImVudiIsIm5hdmlnYXRvciIsInNlcnZpY2VXb3JrZXIiLCJyZWdpc3RlciJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQVEsb0JBQW9CO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQWlCLDRCQUE0QjtBQUM3QztBQUNBO0FBQ0EsMEJBQWtCLDJCQUEyQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxp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TkYsRUFPRUMsOEJBUEYsRUFRRUMsMkJBUkYsRUFTRUMsaUNBVEYsRUFVRUMsbUNBVkYsRUFXRUMsOEJBWEYsRUFZRUMsNEJBWkYsRUFhRUMsNkJBYkYsRUFjRUMsK0JBZEYsRUFlRUMsK0JBZkYsRUFnQkVDLHlCQWhCRixFQWlCRUMseUJBakJGLEVBa0JFQywwQkFsQkYsRUFtQkVDLDRCQW5CRixFQW9CRUMsK0JBcEJGLEVBcUJFQyxnQ0FyQkYsRUFzQkVDLHdCQXRCRixFQXVCRUMseUJBdkJGLEVBd0JFQywyQkF4QkYsRUF5QkVDLDhCQXpCRixFQTBCRUMsdUJBMUJGLEVBMkJFQywrQkEzQkYsRUE0QkVDLDhCQTVCRixFQTZCRUMsK0JBN0JGO0FBK0JELEM7Ozs7Ozs7Ozs7Ozs7O0FDbkVELENBQUMsWUFBTTtBQUNMLE1BQU1DLE1BQU0vVixNQUFaOztBQUVBK1YsTUFBSUMsTUFBSixHQUFhLFlBQU07QUFDakIsUUFBTXhWLGNBQWN1USxTQUFTMkIsY0FBVCxDQUF3QixhQUF4QixDQUFwQjs7QUFFQSxRQUFJbFMsV0FBSixFQUFpQjtBQUNmQSxrQkFBWXlWLE1BQVo7QUFDRDs7QUFFRCxRQUFJclMsT0FBT3NTLEdBQVAsS0FBZSxZQUFuQixFQUFpQztBQUMvQixVQUFJLG1CQUFtQkMsU0FBdkIsRUFBa0M7QUFDaENBLGtCQUFVQyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQztBQUNEO0FBQ0Y7QUFDRixHQVpEO0FBYUQsQ0FoQkQsSTs7Ozs7Ozs7Ozs7QUNBQSx1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4XCIsXCJjb21tb25cIixcInJlYWN0XCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gUGFnZXNcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL2NvbnRhaW5lcnMvRGlzY292ZXInO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vY29udGFpbmVycy9Nb3ZpZSc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbnRhaW5lcnMvQXV0aCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbnRhaW5lcnMvQWNjb3VudCc7XG5pbXBvcnQgTGlzdHMgZnJvbSAnLi9jb250YWluZXJzL0xpc3RzJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG4vLyBTaGFyZWQgQ29tcG9uZW50c1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4vY29udGFpbmVycy9BbGVydERpYWxvZyc7XG5cbmNvbnN0IFJvb3QgPSAoeyBzdG9yZSB9KSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb21pbmctc29vblwiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW4tdGhlYXRlcnNcIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2F1dGhcIiBjb21wb25lbnQ9e0F1dGh9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvbGlzdHNcIiBjb21wb25lbnQ9e0xpc3RzfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllLzpzbHVnLzppZFwiIGNvbXBvbmVudD17TW92aWV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGFnZS1ub3QtZm91bmRcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvUm91dGVyPlxuICAgICAgPEFsZXJ0RGlhbG9nIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgPC9Qcm92aWRlcj5cbik7XG5cblJvb3QucHJvcFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vdDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHNldExvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRBY2NvdW50RGV0YWlsID0gdXNlciA9PiAoe1xuICB0eXBlOiBTRVRfQUNDT1VOVF9ERVRBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICB1c2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50RGV0YWlsID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MuZ2V0KCcvYXBpL2FjY291bnQnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dChgL2FwaS91c2VyLyR7dXNlci5pZH1gLCB1c2VyKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogJ1Byb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuJyxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBwYXNzd29yZCA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dCgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVnaXN0ZXIgPSAoZGF0YSwgdXJsKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgLy8gVE9ETzogc2V0IHVzZXIgaW5mb3JtYXRpb24gdG8gY29tbW9uIHN0YXRlXG4gIH0pLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG5cbn07XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBbGVydERpYWxvZyA9ICh7IG1lc3NhZ2UsIGtpbmQgfSkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0FMRVJULFxuICBtZXNzYWdlLFxuICBraW5kLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRQYWdlTG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgcGFnZUxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfTE9BRElOR19TVEFUVVMsXG4gIGxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyID0gKCkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0ZJTFRFUixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBsb2FkZWRJbWFnZSA9IHVwbG9hZGVkRmlsZSA9PiAoe1xuICB0eXBlOiBTRVRfVVBMT0FERURfSU1BR0UsXG4gIHBheWxvYWQ6IHVwbG9hZGVkRmlsZSxcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFUywgU0VUX1FVRVJZLCBTRVRfR0VOUkVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZXMgPSByZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVTLFxuICBtb3ZpZXM6IHJlc3BvbnNlLnJlc3VsdHMsXG4gIHBhZ2U6IChyZXNwb25zZS5wYWdlICsgMSksXG4gIHRvdGFsUGFnZXM6IHJlc3BvbnNlLnRvdGFsX3BhZ2VzLFxuICB0b3RhbDogcmVzcG9uc2UudG90YWxfcmVzdWx0cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCB1cmwgPSAnYXBpL2Rpc2NvdmVyJztcblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgocXVlcnlOYW1lLCBpKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeVtxdWVyeU5hbWVdO1xuICAgIGNvbnN0IG9wID0gaSA9PT0gMFxuICAgICAgPyAnPydcbiAgICAgIDogJyYnO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke3F1ZXJ5TmFtZX09JHt2YWx1ZX1gO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBtdWx0aVF1ZXJ5ID0gYCR7cXVlcnlOYW1lfT1gO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgbXVsdGlRdWVyeSArPSBgJHt2fSxgO1xuICAgICAgICB9KTtcbiAgICAgICAgdXJsICs9IGAke29wfSR7bXVsdGlRdWVyeX1gO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRNb3ZpZXMoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UXVlcnkgPSAoeyBmaWVsZCwgdmFsdWUgfSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBTRVRfUVVFUlksXG4gICAgZmllbGQsXG4gICAgdmFsdWUsXG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2VucmVzID0gZ2VucmVzID0+ICh7XG4gIHR5cGU6IFNFVF9HRU5SRVMsXG4gIGdlbnJlcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKCkgPT4gZGlzcGF0Y2ggPT4gYXhpb3NcbiAgLmdldCgnL2FwaS9nZW5yZScpXG4gIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goc2V0R2VucmVzKGRhdGEpKSlcbiAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcbmltcG9ydCB7XG4gIEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIsXG4gIENSRUFURV9MSVNULFxuICBERUxFVEVfTElTVCxcbiAgQUREX1RPX0xJU1QsXG4gIERFTEVURV9GUk9NX0xJU1QsXG4gIFNFVF9MSVNUUyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzLCBzZXRQYWdlTG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaXN0KGxpc3RzKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xJU1RTLFxuICAgIHBheWxvYWQ6IGxpc3RzLFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdEJ5Q3VycmVudFVzZXIoeyBwYWdlLCBsaW1pdCB9KSB7XG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBjb29raWUuZ2V0KCd1c2VyX2lkJyk7XG5cbiAgaWYgKCFjdXJyZW50VXNlcklkKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgfVxuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcyhgL2FwaS9saXN0cz91c2VySWQ9JHtjdXJyZW50VXNlcklkfSZwYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRMaXN0KHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcik7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVMaXN0KGxpc3QpIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLnBvc3QoJy9hcGkvbGlzdHMnLCBsaXN0KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QoaWQpIHtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9MaXN0KGxpc3RJZCwgbW92aWVJZCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tTGlzdChsaXN0SWQsIG1vdmllSWQpIHtcblxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZURldGFpbCA9IGRldGFpbCA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVfREVUQUlMLFxuICBkZXRhaWwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRGV0YWlsID0gaWQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldE1vdmllRGV0YWlsKG51bGwpKTtcblxuICBheGlvcy5nZXQoYC9hcGkvbW92aWUvJHtpZH1gKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goXG4gICAgICBzZXRNb3ZpZURldGFpbChkYXRhKSxcbiAgICApKVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIG1lc3NhZ2UsXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gdy0xMDAgdGV4dC1jZW50ZXJgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxuICBraW5kOiAnaW5mbycsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgbG9nbywgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGxvZ29QYXRoID0gbG9nb1xuICAgID8gYCR7dmlzc25lLmltYWdlc1NlY3VyZUJhc2VVcmx9L3c5Mi8ke2xvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTBcIj57bmFtZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db21wYW55LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nbzogJycsXG4gIG5hbWU6ICdDb21wYW55Jyxcbn07XG5cbkNvbXBhbnkucHJvcFR5cGVzID0gQ29tcGFueVNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuLi9Db21wYW55JztcbmltcG9ydCAnLi9Db21wYW55TGlzdC5zY3NzJztcblxuY29uc3QgQ29tcGFueUxpc3QgPSAoeyBjb21wYW5pZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNvbXBhbmllczwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7Y29tcGFuaWVzLm1hcChjID0+IChcbiAgICAgICAgICA8Q29tcGFueSBrZXk9e2MuaWR9IGxvZ289e2MubG9nb19wYXRofSBuYW1lPXtjLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueUxpc3QucHJvcFR5cGVzID0ge1xuICBjb21wYW5pZXM6IFByb3BUeXBlcy5hcnJheU9mKENvbXBhbnlTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IERldGFpbFRhYmxlID0gKHsgbW92aWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YCR7bW92aWUub3JnaW5hbFRpdGxlfSAoJHttb3ZpZS55ZWFyfSlgfTwvaDU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlLXNtIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc8L3RoPlxuICAgICAgICAgICAgPHRkPntgJHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICgke21vdmllLnZvdGVfY291bnR9KWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SZWxlYXNlIERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5yZWxlYXNlX2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5HZW5yZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5nZW5yZU5hbWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFnbGluZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnRhZ2xpbmV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJpZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5jb3VudHJpZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYW5ndWFnZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZGlyZWN0b3J9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Xcml0ZXI8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS53cml0ZXJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ib21lcGFnZTwvdGg+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e21vdmllLmhvbWVwYWdlfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e21vdmllLmhvbWVwYWdlfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsVGFibGUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogTW92aWVTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgTWVudSA9ICh7IHBhdGgsIGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG0gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17bS5wYXRofT5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7bS5wYXRoID09PSBwYXRoID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICB0bz17bS5wYXRofVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e20uaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttLm5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9Nb2RhbC5zY3NzJztcblxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGNhbmNlbCxcbiAgICBzdWJtaXQsXG4gICAgY2hpbGRyZW4sXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IHNob3cgPyAnc2hvdyBkLWJsb2NrJyA6ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbCBmYWRlICR7Y2xhc3NOYW1lfWB9IHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1iYWNrZHJvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17Y2FuY2VsfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c3VibWl0fT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxufTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9zdGVyIGZyb20gJy4uL1Bvc3Rlcic7XG5pbXBvcnQgJy4vTW92aWVDYXJkLnNjc3MnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGltYWdlLFxuICAgIHJhdGUsXG4gICAgc2x1ZyxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jYXJkIGgtMTAwIHctMTAwIHJvdW5kZWQtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgaW1nLXRodW1ibmFpbFwiPlxuICAgICAgPExpbmsgdG89e2Btb3ZpZS8ke3NsdWd9LyR7aWR9YH0gY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgcmF0aW5nLXRhZyBzaGFkb3ctc20gZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAge3JhdGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFBvc3RlciBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmF0ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IHtcbiAgY29uc3QgbGlzdCA9IG1vdmllcy5tYXAobW92aWUgPT4gKFxuICAgIDxkaXYga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0yIG1iLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxNb3ZpZUNhcmRcbiAgICAgICAgaWQ9e21vdmllLmlkfVxuICAgICAgICBpbWFnZT17bW92aWUucG9zdGVyfVxuICAgICAgICB0aXRsZT17bW92aWUudGl0bGV9XG4gICAgICAgIHJhdGU9e21vdmllLnZvdGVBdmVyYWdlfVxuICAgICAgICBzbHVnPXttb3ZpZS5zbHVnfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAge2xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCAnLi9OYXZiYXIuc2Nzcyc7XG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBpc0xvZ2dlZEluLFxuICAgIHBhdGhOYW1lLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbG9naW5CdXR0b24gPSBpc0xvZ2dlZEluID8gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9wcm9maWxlL2FjY291bnRcIiB0aXRsZT1cIlByb2ZpbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+e3VzZXIudXNlck5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dvdXRcIiB0aXRsZT1cIkxvZ291dFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ24tb3V0LWFsdFwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC9GcmFnbWVudD5cbiAgKSA6IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgIDxMaW5rIHRvPVwiL2F1dGhcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPmxvZ2luPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfVxuICAgICAgICAgIGFsdD1cIlZpc3NuZVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZC1ibG9ja1wiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgaWQ9XCJmaWx0ZXJCdXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmlsdGVyXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2luLXRoZWF0ZXJzJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvaW4tdGhlYXRlcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBpbiB0aGVhdGVyc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2NvbWluZy1zb29uJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvY29taW5nLXNvb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBjb21pbmcgc29vbmdcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteS1hdXRvXCI+XG4gICAgICAgICAge2xvZ2luQnV0dG9ufVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5OYXZiYXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgdXNlcjoge30sXG4gIHBhdGhOYW1lOiAnLycsXG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBwYXRoTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Ob3RGb3VuZC5zY3NzJztcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ub3QtZm91bmRcIj5cbiAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL29uZy5wbmdgfSBhbHQ9XCI0MDRcIiAvPlxuICAgIDxoND40MDQ8L2g0PlxuICAgIDxoNT5QYWdlIG5vdCBmb3VuZDwvaDU+XG4gICAgPHA+XG4gICAgICBXZSBhcmUgc29ycnkuIFRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3Igd2FzIG1vdmVkLCByZW1vdmVkLCByZW5hbWVkIG9yIG1pZ2h0IG5ldmVyIGV4aXN0ZWQuXG4gICAgPC9wPlxuICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5HTyBUTyBIT01FPC9hPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbmNvbnN0IFBhZ2VMb2FkaW5nID0gKHsgc2hvdyB9KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWZpeGVkIHRvcC0wIGxlZnQtMCBib3R0b20tMCBiZy1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgIDxTcGlubmVyIHNob3cgc2l6ZT1cImxnXCIgYWRkaW9uYWxDbGFzcz1cIm1yLTJcIiAvPlxuICAgICAgTG9hZGluZy4uLlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFnZUxvYWRpbmcucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKGN1cnJlbnRQYWdlLCBwYWdlKSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuXG4gIGlmIChwYWdlID09PSAncHJldicpIHtcbiAgICBjb25zdCBuZXdQYWdlID0gKGN1cnJlbnRQYWdlIC0gMSk7XG5cbiAgICByZXN1bHQgPSBuZXdQYWdlID09PSAwID8gMSA6IG5ld1BhZ2U7XG4gIH0gZWxzZSB7XG4gICAgcmVzdWx0ID0gKGN1cnJlbnRQYWdlICsgMSk7XG4gIH1cblxuICByZXR1cm4geyBwYWdlOiByZXN1bHQgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZU51bWJlcnMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICB0b3RhbCxcbiAgICBidXR0b25Db3VudCxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguY2VpbCh0b3RhbCAvIGxpbWl0KTtcbiAgY29uc3QgYmMgPSBNYXRoLmNlaWwoYnV0dG9uQ291bnQgLyAyKTtcblxuICBmb3IgKGxldCBpID0gKHBhZ2UgLSAoYmMgLSAxKSk7IGkgPCAocGFnZSArIGJjKTsgaSArPSAxKSB7XG4gICAgaWYgKGkgPiAwICYmIGkgPD0gdG90YWxQYWdlKSB7XG4gICAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWdlTnVtYmVycztcbn07XG5cblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IG9wdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7IHBhZ2UsIG9uUGFnaW5hdGUgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcGFnZU51bWJlcnMgPSBnZW5lcmF0ZVBhZ2VOdW1iZXJzKG9wdGlvbnMpO1xuXG4gIGlmIChwYWdlTnVtYmVycy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIDxzcGFuIC8+O1xuICB9XG5cbiAgY29uc3QgcGFnZUJ1dHRvbnMgPSBwYWdlTnVtYmVycy5tYXAocG4gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gICR7cG4gPT09IHBhZ2UgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgPGFcbiAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShwbil9XG4gICAgICA+XG4gICAgICAgIHtwbn1cbiAgICAgIDwvYT5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socGFnZSwgJ3ByZXYnKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7cGFnZUJ1dHRvbnN9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9XCJwYWdlLWl0ZW1cIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rXCJcbiAgICAgICAgICAgIGhhbmRsZUNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKHBhZ2UsICduZXh0JykpfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLXJpZ2h0XCIgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBidXR0b25Db3VudDogMyxcbiAgICB0b3RhbDogMCxcbiAgICBwYWdlOiAxLFxuICAgIGxpbWl0OiAxMCxcbiAgfSxcbn07XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25QYWdpbmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYnV0dG9uQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBpbWFnZU9uTG9hZCgpIHtcblxufVxuXG5mdW5jdGlvbiBpbWFnZU9uRXJyb3IoKSB7XG4gIHRoaXMuc3JjID0gdmlzc25lLmRlZmF1bHRDb3ZlckltYWdlUGF0aDtcbn1cblxuY29uc3QgUG9zdGVyID0gKHsgc3JjLCBhbHQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxpbWdcbiAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICBzcmM9e2Ake3NyY31gfVxuICAgICAgb25Mb2FkPXtpbWFnZU9uTG9hZH1cbiAgICAgIG9uRXJyb3I9e2ltYWdlT25FcnJvcn1cbiAgICAgIGFsdD17YWx0fVxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuUG9zdGVyLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuL1BhZ2VMb2FkaW5nJztcbmltcG9ydCBwcm9maWxlTWVudSBmcm9tICcuLi9jb25zdGFudHMvcHJvZmlsZS1tZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBwYXRoLCBwYWdlTG9hZGluZywgdXNlciB9ID0gcHJvcHM7XG5cbiAgaWYgKHBhZ2VMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxQYWdlTG9hZGluZyBzaG93IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgcm91bmRlZC1jaXJjbGUgYXZhdGFyLWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyIHx8IGAke3Zpc3NuZS5jZG59L3Vjb250ZW50L2F2YXRhci9kZWZhdWx0LWF2YXRhci5qcGdgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZSBib3JkZXIgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDU+e2BAJHt1c2VyLnVzZXJOYW1lfWB9PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZW51IGl0ZW1zPXtwcm9maWxlTWVudX0gcGF0aD17cGF0aH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2hvdywgaGVpZ2h0IH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIHN0eWxlPXt7IGhlaWdodDogYCR7aGVpZ2h0fXB4YCB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZFwiXG4gICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgIGFyaWEtdmFsdWVub3c9XCI3NVwiXG4gICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBoZWlnaHQ6IDIsXG59O1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzaG93LFxuICAgIHNpemUsXG4gICAga2luZCxcbiAgICBjb2xvcixcbiAgICBhZGRpb25hbENsYXNzLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc3Bpbm5lci0ke2tpbmR9IHNwaW5uZXItJHtraW5kfS0ke3NpemV9IHRleHQtJHtjb2xvcn0gJHthZGRpb25hbENsYXNzfWB9IHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIHNpemU6ICdzbScsXG4gIGtpbmQ6ICdncm93JyxcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgYWRkaW9uYWxDbGFzczogJycsXG59O1xuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGFkZGlvbmFsQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NtJyxcbiAgICAnbWQnLFxuICAgICdsZycsXG4gICAgJ3hsJyxcbiAgXSksXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JvcmRlcicsXG4gICAgJ2dyb3cnLFxuICBdKSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICdzdWNjZXNzJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2luZm8nLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICBdKSxcbn07XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4vQWxlcnQnO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoZmllbGRzKSA9PiB7XG4gIGNvbnN0IHZpc2libGVGaWVsZHMgPSBmaWVsZHNcbiAgICAuZmlsdGVyKGYgPT4gIWYuaGlkZGVuKVxuICAgIC5tYXAoZiA9PiA8dGggc2NvcGU9XCJjb2xcIj57Zi50aXRsZX08L3RoPik7XG5cbiAgcmV0dXJuIDx0cj57dmlzaWJsZUZpZWxkc308L3RyPjtcbn07XG5cbmNvbnN0IGNyZWF0ZUJvZHkgPSAoZGF0YSwgZmllbGRzKSA9PiB7XG4gIGNvbnN0IHRib2R5ID0gW107XG5cbiAgZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgY29uc3QgaXRlbUZpZWxkcyA9IFtdO1xuXG4gICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICBpZiAoZmllbGQuaGlkZGVuKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB2ID0gaXRlbVtmaWVsZC5uYW1lXTtcbiAgICAgIGNvbnN0IHZhbHVlID0gZmllbGQuZm9ybWF0XG4gICAgICAgID8gZmllbGQuZm9ybWF0KHYpXG4gICAgICAgIDogdi50b1N0cmluZygpO1xuXG4gICAgICBpdGVtRmllbGRzLnB1c2goPHRkPnt2YWx1ZX08L3RkPik7XG4gICAgfSk7XG5cbiAgICB0Ym9keS5wdXNoKDx0cj57aXRlbUZpZWxkc308L3RyPik7XG4gIH0pO1xuXG4gIHJldHVybiB0Ym9keTtcbn07XG5cbmNvbnN0IGNyZWF0ZVBhZ2luYXRpb24gPSAob3B0aW9ucykgPT4ge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBsaW1pdCxcbiAgICB0b3RhbCxcbiAgfSA9IG9wdGlvbnM7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPFBhZ2luYXRpb24gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgIDxzcGFuPntgU2hvdyAke2xpbWl0ID4gdG90YWwgPyB0b3RhbCA6IGxpbWl0fSByZXN1bHQgb2YgJHt0b3RhbH1gfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IGRhdGEsIGZpZWxkcywgcGFnaW5hdGlvbiB9ID0gcHJvcHM7XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4XCI+XG4gICAgICAgICAgPEFsZXJ0IG1lc3NhZ2U9XCJUaGVyZSB3ZXJlIG5vIHJlc3VsdC5cIiBraW5kPVwid2FybmluZ1wiIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRzID0gY3JlYXRlSGVhZGVyKGZpZWxkcyk7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVCb2R5KGRhdGEsIGZpZWxkcyk7XG4gIGNvbnN0IHBhZ2luYXRpb25CdXR0b25zID0gY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtcmVzcG9uc2l2ZVwiPlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHtoZWFkc31cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtwYWdpbmF0aW9uQnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9WaWRlby5zY3NzJztcblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlb0tleSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gbWItMiBlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICA8aWZyYW1lXG4gICAgICBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlxuICAgICAgdGl0bGU9XCJWaWRlb1wiXG4gICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvS2V5fT9hdXRvcGxheT0wJm9yaWdpbj0ke3Zpc3NuZS5kb21haW59YH1cbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9LZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLy8gY29tbW9uXG5leHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxFUlQgPSAnVE9HR0xFX0FMRVJUJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfRklMVEVSID0gJ1RPR0dMRV9GSUxURVInO1xuXG4vLyBhdXRoXG5leHBvcnQgY29uc3QgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMgPSAnU0VUX1BBR0VfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HX1NUQVRVUyA9ICdTRVRfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gJ1JFR0lTVEVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbi8vIGRpc2NvdmVyXG5leHBvcnQgY29uc3QgR0VUX01PVklFUyA9ICdHRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVTID0gJ1NFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRVMgPSAnU0VUX0dFTlJFUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVJZID0gJ1NFVF9RVUVSWSc7XG5cbi8vIGxpc3RzXG5leHBvcnQgY29uc3QgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiA9ICdHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1RTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fTElTVCA9ICdBRERfVE9fTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fTElTVCA9ICdERUxFVEVfRlJPTV9MSVNUJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVFMgPSAnU0VUX0xJU1RTJztcblxuLy8gbW92aWUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0VUX01PVklFX0RFVEFJTCA9ICdTRVRfTU9WSUVfREVUQUlMJztcblxuLy8gcHJvZmlsZVxuLy8gIC0tIEFjY291bnRcbmV4cG9ydCBjb25zdCBTRVRfQUNDT1VOVF9ERVRBSUwgPSAnU0VUX0FDQ09VTlRfREVUQUlMJztcbmV4cG9ydCBjb25zdCBTRVRfVVBMT0FERURfSU1BR0UgPSAnU0VUX1VQTE9BREVEX0lNQUdFJztcblxuLy8gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgU09SVF9PUFRJT05TID0gW3tcbiAgbmFtZTogJ1BvcHVsYXJpdHknLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JldmVudWUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUHJpbWFyeSBSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnT3JnaW5hbCBUaXRsZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIEF2ZXJhZ2UnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBDb3VudCcsXG4gIHZhbHVlOiAnZGVzYycsXG59XTtcbiIsImNvbnN0IHByb2ZpbGVNZW51ID0gW1xuICB7XG4gICAgbmFtZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvYWNjb3VudCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlzdHMnLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvbGlzdHMnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gIC8vICAgaWNvbjogJ2hlYXJ0JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZmF2b3JpdGVzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdDb21tZW50cycsXG4gIC8vICAgaWNvbjogJ2NvbW1lbnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9jb21tZW50cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnUmV2aWV3cycsXG4gIC8vICAgaWNvbjogJ25ld3NwYXBlcicsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3Jldmlld3MnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAvLyAgIGljb246ICd1c2VyLWZyaWVuZHMnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdTZXR0aW5ncycsXG4gIC8vICAgaWNvbjogJ2NvZycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JnaW5hbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9tZXBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXN0U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcm9maWxlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2VucmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY3Jld3M6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgdm90ZUF2ZXJhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHJlbGVhc2VZZWFyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCB7IFVzZXJTaGFwZSwgbWF0Y2hTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0ICcuL0FjY291bnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHByb3BzLnNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHVzZXJGb3JtOiB7fSxcbiAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSwgZmllbGQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgICBzdGF0ZVtmaWVsZF1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nLCBjaGFuZ2VQYXNzd29yZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQub2xkUGFzc3dvcmQgPT09IHBhc3N3b3JkLm5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGNhbm5vdCBiZSB0aGUgc2FtZSB3aXRoIG9sZCBwYXNzd29yZC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDoge30gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdXBkYXRlVXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVzZXJGb3JtLCB2YWxpZGF0aW9uLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXIodXNlckZvcm0pfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30ga2luZD1cImJvcmRlclwiIGNvbG9yPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ30+VXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+Q2hhbmdlIFBhc3N3b3JkPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkSW5wdXRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQubmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybU5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCwgY2hhbmdlUGFzc3dvcmQsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBY2NvdW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBzaG93LFxuICAgIG1lc3NhZ2UsXG4gICAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHNpdGUtYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVBbGVydERpYWxvZ30+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGtpbmQ6ICdpbmZvJyxcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCAnLi9BbGVydERpYWxvZy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY29tbW9uIH0pID0+ICh7XG4gIHNob3c6IGNvbW1vbi5zaG93QWxlcnQsXG4gIG1lc3NhZ2U6IGNvbW1vbi5hbGVydE1lc3NhZ2UsXG4gIGtpbmQ6IGNvbW1vbi5hbGVydEtpbmQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsgc2hvdzogZmFsc2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBbGVydERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uLy4uL2xpYi9jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaEZvcm0gPSB0aGlzLnN3aXRjaEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luUmVnaXN0ZXIgPSB0aGlzLmxvZ2luUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29va2llLmdldCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgdG9nZ2xlQWxlcnREaWFsb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAoIWZvcm0uZW1haWwgfHwgIWVtYWlsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtLnBhc3N3b3JkIHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA+IDE2KSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIG11c3QgYmUgNi0xNiBjaGFjcmFjdGVyLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgaWYgKCFmb3JtLnVzZXJOYW1lIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+VXNlciBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmZpcnN0TmFtZSB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkZpcnN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmxhc3ROYW1lIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+TGFzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm0uY29uZmlybVBhc3N3b3JkICE9PSBmb3JtLnBhc3N3b3JkKSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBkb250IG1hdGNoPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgbG9naW5SZWdpc3RlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvbihmb3JtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB1cmwgPSBpc1JlZ2lzdGVyXG4gICAgICA/ICcvYXBpL3JlZ2lzdGVyJ1xuICAgICAgOiAnL2FwaS9sb2dpbic7XG5cbiAgICByZXR1cm4gcHJvcHMubG9naW5SZWdpc3Rlcihmb3JtLCB1cmwpO1xuICB9XG5cbiAgc3dpdGNoRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNSZWdpc3RlcjogIXByZXZTdGF0ZS5pc1JlZ2lzdGVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgaXNSZWdpc3RlcixcbiAgICAgIHZhbGlkYXRpb24sXG4gICAgICBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICAgIGxldCBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICBsZXQgcmVnaXN0ZXJJbnB1dCA9IG51bGw7XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgICBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ0xPR0lOJztcblxuICAgICAgcmVnaXN0ZXJJbnB1dCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiY29uZmlybVBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybVBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwibGFzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhdXRoLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH0gYWx0PVwiVmlzc25lXCIgaGVpZ2h0PVwiNzBcIiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVJlZ1wiIGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxJbnB1dEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkSW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJwYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVubG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5wYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge3JlZ2lzdGVySW5wdXR9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gJHtsb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZ29vZ2xlICBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2dvb2dsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEdPT0dMRVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGZhY2Vib29rIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEZBQ0VCT09LXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXV0aC5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgeyBsb2dpblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0ICcuL0F1dGguc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGxvZ2luUmVnaXN0ZXI6IChkYXRhLCB1cmwpID0+IGRpc3BhdGNoKGxvZ2luUmVnaXN0ZXIoZGF0YSwgdXJsKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBtZXNzYWdlID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsga2luZDogJ2RhbmdlcicsIG1lc3NhZ2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHtcbiAgVXNlclNoYXBlLFxuICBNb3ZpZVNoYXBlLFxuICBHZW5yZVNoYXBlLFxuICBGaWx0ZXJTaGFwZSxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9hZE1vdmllcyA9IHRoaXMubG9hZE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEdlbnJlcywgdG9nZ2xlRmlsdGVyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhdGggfSA9IG1hdGNoO1xuXG4gICAgZ2V0R2VucmVzKCk7XG5cbiAgICBpZiAoWycvY29taW5nLXNvb24nLCAnL2luLXRoZWF0ZXJzJ10uaW5kZXhPZihwYXRoKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0UXVlcnkoeyBmaWVsZDogJ2ZpbHRlcicsIHZhbHVlOiBwYXRoLnJlcGxhY2UoJy8nLCAnJykgfSk7XG4gICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3ZpZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGNvbnN0IHsgc2V0UXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UXVlcnkocXVlcnkpLnRoZW4odGhpcy5sb2FkTW92aWVzKTtcbiAgfVxuXG4gIGxvYWRNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZXMsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllcyhxdWVyeSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW92aWVzLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZ2VucmVzLFxuICAgICAgcXVlcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNob3dGaWx0ZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IHBhdGhOYW1lPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8RmlsdGVyIHNob3c9e3Nob3dGaWx0ZXJ9IGdlbnJlcz17Z2VucmVzfSBzZXRRdWVyeT17dGhpcy5zZXRRdWVyeX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IGlkPVwibGlzdFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtLTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vdmllc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMiAke2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5EaXNjb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxuICB1c2VyOiB7fSxcbn07XG5cbkRpc2NvdmVyLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRHZW5yZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBzaG93RmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vRGlzY292ZXInO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TW92aWVzLFxuICBzZXRRdWVyeSxcbiAgZ2V0R2VucmVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2NvdmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIHF1ZXJ5OiBzdGF0ZS5kaXNjb3Zlci5xdWVyeSxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbW92aWVzOiBzdGF0ZS5kaXNjb3Zlci5tb3ZpZXMsXG4gIGdlbnJlczogc3RhdGUuZGlzY292ZXIuZ2VucmVzLFxuICBzaG93RmlsdGVyOiBzdGF0ZS5jb21tb24uc2hvd0ZpbHRlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldE1vdmllcyhxdWVyeSkpLFxuICBzZXRRdWVyeTogcXVlcnkgPT4gZGlzcGF0Y2goc2V0UXVlcnkocXVlcnkpKSxcbiAgZ2V0R2VucmVzOiAoKSA9PiBkaXNwYXRjaChnZXRHZW5yZXMoKSksXG4gIHRvZ2dsZUZpbHRlcjogc2hvdyA9PiBkaXNwYXRjaCh0b2dnbGVGaWx0ZXIoc2hvdykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShEaXNjb3Zlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVMaXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDoge30sXG4gICAgICBxdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmdldExpc3RzKCk7XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUucXVlcnksIHF1ZXJ5KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBnZXRMaXN0cygpIHtcbiAgICBjb25zdCB7IGdldExpc3RCeUN1cnJlbnRVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnkpO1xuICB9XG5cbiAgY3JlYXRlKCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gIH1cblxuICB0b2dnbGVNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd01vZGFsOiAhcHJldlN0YXRlLnNob3dNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBxdWVyeSwgc2hvd01vZGFsIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdG90YWwsXG4gICAgICB0YWJsZUZpZWxkcyxcbiAgICAgIGxpc3RzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5jcmVhdGV9PlxuICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz4gQ3JlYXRlIExpc3RcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8VGFibGVMaXN0XG4gICAgICAgICAgICB0aXRsZT1cIk15IExpc3RzXCJcbiAgICAgICAgICAgIGRhdGE9e2xpc3RzfVxuICAgICAgICAgICAgZmllbGRzPXt0YWJsZUZpZWxkc31cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgdG90YWwsXG4gICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICAgIGxpbWl0OiBxdWVyeS5saW1pdCxcbiAgICAgICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgICAgIG9uUGFnaW5hdGU6IHRoaXMuc2V0UXVlcnksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gdGl0bGU9XCJDcmVhdGUgTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVNb2RhbH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+TGlzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIHBsYWNlaG9sZGVyPVwiTGlzdCBOYW1lXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIiAvPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5QdWJsaWMgTGlzdDwvbGFiZWw+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdHMuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbDogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vTGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG4gIHRvdGFsOiBzdGF0ZS5saXN0cy50b3RhbCxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZURldGFpbChtYXRjaC5wYXJhbXMuaWQpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGV0YWlsLCB1c2VyLCBpc0xvZ2dlZEluIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKCFkZXRhaWwpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgICAgPFByb2dyZXNzQmFyIHNob3cgY29sb3I9XCJpbmZvXCIgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgdmlkZW8gPSBkZXRhaWwudmlkZW9zLmxlbmd0aCA+IDBcbiAgICAgID8gPFZpZGVvIHZpZGVvS2V5PXtkZXRhaWwudmlkZW9zWzBdLmtleX0gLz5cbiAgICAgIDogbnVsbDtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkIG10LTJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTNcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJpbWctZmx1aWQgbWItMlwiIHNyYz17ZGV0YWlsLnBvc3RlclBhdGh9IGFsdD17ZGV0YWlsLnRpdGxlfSAvPlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRldGFpbDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICBtYXRjaDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGRldGFpbDogc3RhdGUubW92aWUuZGV0YWlsLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShNb3ZpZSk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcblxuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVjcycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6IG51bGwsXG4gICAgd2l0aEdlbnJlczogW10sXG4gICAgeWVhcjogbnVsbCxcbiAgICBjcmV3czogW10sXG4gICAgY2FzdHM6IFtdLFxuICB9LFxuICBpc0xvZ2dlZEluOiAhIXVzZXIuZW1haWwsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkaXNjb3ZlcihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBzdGF0ZS5tb3ZpZXMuY29uY2F0KGFjdGlvbi5tb3ZpZXMpLFxuICAgICAgICB0b3RhbDogYWN0aW9uLnRvdGFsLFxuICAgICAgICB0b3RhbFBhZ2VzOiBhY3Rpb24udG90YWxQYWdlcyxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogYWN0aW9uLnBhZ2UsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9HRU5SRVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZ2VucmVzOiBhY3Rpb24uZ2VucmVzLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9RVUVSWTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IFtdLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiAxLFxuICAgICAgICAgIFthY3Rpb24uZmllbGRdOiBhY3Rpb24udmFsdWUsXG4gICAgICAgIH0pLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG5cbi8vIFRPRE86IE1vdmUgdXNlciBvYmplY3QgdG8gYWNjb3VudCByZWR1Y2VyXG4iLCJpbXBvcnQgeyBjb21iaW5lUmVkdWNlcnMgfSBmcm9tICdyZWR1eCc7XG5cbmltcG9ydCBhY2NvdW50IGZyb20gJy4vYWNjb3VudCc7XG5pbXBvcnQgZGlzY292ZXIgZnJvbSAnLi9kaXNjb3Zlcic7XG5pbXBvcnQgbW92aWUgZnJvbSAnLi9tb3ZpZSc7XG5pbXBvcnQgbGlzdHMgZnJvbSAnLi9saXN0cyc7XG5pbXBvcnQgY29tbW9uIGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGRlZmF1bHQgY29tYmluZVJlZHVjZXJzKHtcbiAgYWNjb3VudCxcbiAgZGlzY292ZXIsXG4gIG1vdmllLFxuICBsaXN0cyxcbiAgY29tbW9uLFxufSk7XG4iLCJpbXBvcnQgeyBTRVRfTElTVFMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBsaXN0czogW10sXG4gIHRvdGFsOiAwLFxuICB0YWJsZUZpZWxkczogW3tcbiAgICB0aXRsZTogJ0lkJyxcbiAgICBmaWVsZDogJ2lkJyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sIHtcbiAgICB0aXRsZTogJ05hbWUnLFxuICAgIGZpZWxkOiAnbmFtZScsXG4gIH0sIHtcbiAgICB0aXRsZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICBmaWVsZDogJ2NyZWF0ZWRBdCcsXG4gIH1dLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbGlzdHMoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTElTVFM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbGlzdHM6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGV0YWlsOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbi5kZXRhaWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgIHRodW5rTWlkZGxld2FyZSxcbiAgICApLFxuICApO1xufVxuIiwiXG5pbXBvcnQge1xuICBzZXRQYWdlTG9hZGluZ1N0YXR1cyxcbiAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIHNldExvYWRpbmdTdGF0dXMsXG59IGZyb20gJy4uL2FwcC9hY3Rpb25zL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG4gICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L3BhZ2Utbm90LWZvdW5kYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDAzOlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L2F1dGhgO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBBTEVSVF9UWVBFUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ3N1Y2Nlc3MnLFxuICAnZGFuZ2VyJyxcbiAgJ3dhcm5pbmcnLFxuICAnaW5mbycsXG4gICdsaWdodCcsXG4gICdkYXJrJyxcbl07XG5cbmV4cG9ydCBjb25zdCBBTEVSVF9UWVBFX0lDT05fTUFQID0ge1xuICBwcmltYXJ5OiAnJyxcbn07XG4iLCJjb25zdCBkb2MgPSBkb2N1bWVudDtcblxuY29uc3Qgc2V0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gIGRvYy5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWA7XG59O1xuXG5jb25zdCBnZXQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBjb29raWVzID0gZG9jLmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IFtjbmFtZSwgY3ZhbHVlXSA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAoY25hbWUudHJpbSgpID09PSBuYW1lLnRyaW0oKSkge1xuICAgICAgcmV0dXJuIGN2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldCxcbiAgc2V0LFxufTtcbiIsImltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtcbiAgZmFVc2VyLFxuICBmYVNpZ25PdXRBbHQsXG4gIGZhRW52ZWxvcGUsXG4gIGZhVW5sb2NrLFxuICBmYUFsaWduTGVmdCxcbiAgZmFLZXksXG4gIGZhU2lnbmF0dXJlLFxuICBmYUZpbHRlcixcbiAgZmFTb3J0QW1vdW50VXAsXG4gIGZhU29ydEFtb3VudERvd24sXG4gIGZhVXNlckNpcmNsZSxcbiAgZmFMaXN0LFxuICBmYVN0YXIsXG4gIGZhSGVhcnQsXG4gIGZhQ29tbWVudCxcbiAgZmFTd2F0Y2hib29rLFxuICBmYVVzZXJGcmllbmRzLFxuICBmYUNvZyxcbiAgZmFFZGl0LFxuICBmYVVwbG9hZCxcbiAgZmFOZXdzcGFwZXIsXG4gIGZhQXQsXG4gIGZhQW5nbGVSaWdodCxcbiAgZmFBbmdsZUxlZnQsXG4gIGZhUGx1c1NxdWFyZSxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7XG4gIGZhRmFjZWJvb2ssXG4gIGZhR29vZ2xlLFxuICBmYVR3aXR0ZXIsXG4gIGZhSW5zdGFncmFtLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgbGlicmFyeS5hZGQoXG4gICAgZmFVc2VyLFxuICAgIGZhU2lnbk91dEFsdCxcbiAgICBmYUVudmVsb3BlLFxuICAgIGZhVW5sb2NrLFxuICAgIGZhQWxpZ25MZWZ0LFxuICAgIGZhS2V5LFxuICAgIGZhU2lnbmF0dXJlLFxuICAgIGZhRmlsdGVyLFxuICAgIGZhU29ydEFtb3VudFVwLFxuICAgIGZhU29ydEFtb3VudERvd24sXG4gICAgZmFGYWNlYm9vayxcbiAgICBmYUdvb2dsZSxcbiAgICBmYVR3aXR0ZXIsXG4gICAgZmFJbnN0YWdyYW0sXG4gICAgZmFVc2VyQ2lyY2xlLFxuICAgIGZhTGlzdCxcbiAgICBmYVN0YXIsXG4gICAgZmFIZWFydCxcbiAgICBmYUNvbW1lbnQsXG4gICAgZmFTd2F0Y2hib29rLFxuICAgIGZhVXNlckZyaWVuZHMsXG4gICAgZmFDb2csXG4gICAgZmFFZGl0LFxuICAgIGZhVXBsb2FkLFxuICAgIGZhTmV3c3BhcGVyLFxuICAgIGZhQXQsXG4gICAgZmFBbmdsZVJpZ2h0LFxuICAgIGZhQW5nbGVMZWZ0LFxuICAgIGZhUGx1c1NxdWFyZSxcbiAgKTtcbn1cbiIsIigoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcblxuICB3aW4ub25sb2FkID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhZ2VMb2FkaW5nID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BhZ2VMb2FkaW5nJyk7XG5cbiAgICBpZiAocGFnZUxvYWRpbmcpIHtcbiAgICAgIHBhZ2VMb2FkaW5nLnJlbW92ZSgpO1xuICAgIH1cblxuICAgIGlmICh2aXNzbmUuZW52ID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGlmICgnc2VydmljZVdvcmtlcicgaW4gbmF2aWdhdG9yKSB7XG4gICAgICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCcvc3cuanMnKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59KSgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==