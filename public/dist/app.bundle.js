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

function getListByCurrentUser(_ref2, movieId) {
  var page = _ref2.page,
      limit = _ref2.limit;

  var currentUserId = _cookie2.default.get('user_id');

  if (!currentUserId) {
    window.location.href = vissne.domain + '/auth';
  }

  var url = '/api/lists?userId=' + currentUserId + '&page=' + page + '&limit=' + limit;

  if (movieId) {
    url += '&movieId=' + movieId;
  }

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    (0, _axios2.default)(url).then(function (response) {
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

function addToList(_ref3, callback) {
  var listId = _ref3.listId,
      movieId = _ref3.movieId;

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.post('/api/lists/' + listId + '/movie/' + movieId, {}).then(function (response) {
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

function removeFromList(_ref4, callback) {
  var listId = _ref4.listId,
      movieId = _ref4.movieId;

  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.delete('/api/lists/' + listId + '/movie/' + movieId).then(function (response) {
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
  var submitButton = submit ? _react2.default.createElement(
    'button',
    { type: 'button', className: 'btn btn-primary', onClick: submit },
    'Save'
  ) : null;

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
          submitButton
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
        value = Number.parseInt(value, 10);
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


      list.public = Number.parseInt(list.public, 10);

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
                  value: '1',
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
                  value: '0',
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

var _reactFontawesome = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");

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

var _Modal = __webpack_require__(/*! ../../components/Modal */ "./app/assets/javascript/app/components/Modal/index.jsx");

var _Modal2 = _interopRequireDefault(_Modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Movie = function (_Component) {
  _inherits(Movie, _Component);

  function Movie(props) {
    _classCallCheck(this, Movie);

    var _this = _possibleConstructorReturn(this, (Movie.__proto__ || Object.getPrototypeOf(Movie)).call(this, props));

    _this.state = {
      showListModal: false,
      list: {
        page: 1,
        limit: 10
      }
    };

    _this.toggleListModal = _this.toggleListModal.bind(_this);
    return _this;
  }

  _createClass(Movie, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var list = this.state.list;
      var _props = this.props,
          getMovieDetail = _props.getMovieDetail,
          getListByCurrentUser = _props.getListByCurrentUser,
          match = _props.match;

      var movieId = match.params.id;
      getMovieDetail(movieId);
      getListByCurrentUser(list, movieId);
    }
  }, {
    key: 'toggleListModal',
    value: function toggleListModal() {
      this.setState(function (prevState) {
        return {
          showListModal: !prevState.showListModal
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _state = this.state,
          showListModal = _state.showListModal,
          list = _state.list;
      var _props2 = this.props,
          match = _props2.match,
          detail = _props2.detail,
          user = _props2.user,
          isLoggedIn = _props2.isLoggedIn,
          lists = _props2.lists,
          addToList = _props2.addToList,
          removeFromList = _props2.removeFromList,
          getListByCurrentUser = _props2.getListByCurrentUser;


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
              _react2.default.createElement(
                'div',
                { className: 'mb-2' },
                _react2.default.createElement(
                  'button',
                  { className: 'btn btn-secondary rounded-0', type: 'button', title: 'Add To List', onClick: this.toggleListModal },
                  _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'plus-square' })
                )
              ),
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
        ),
        _react2.default.createElement(
          _Modal2.default,
          { show: showListModal, title: 'Add To List', cancel: this.toggleListModal },
          _react2.default.createElement(
            'ul',
            { className: 'list-group' },
            lists.map(function (l) {
              return _react2.default.createElement(
                'li',
                {
                  className: 'list-group-item rounded-0 ' + (l.isAdded ? 'list-group-item-success' : ' ')
                },
                _react2.default.createElement(
                  'span',
                  { className: 'd-flex justify-content-between' },
                  l.name,
                  _react2.default.createElement(
                    'button',
                    {
                      type: 'button',
                      className: 'btn btn-sm btn-outline-' + (l.isAdded ? 'danger' : 'success'),
                      onClick: function onClick() {
                        var movieId = match.params.id;
                        var listObject = {
                          movieId: movieId,
                          listId: l.id
                        };

                        if (!l.isAdded) {
                          return addToList(listObject, function () {
                            _this2.toggleListModal();
                            getListByCurrentUser(list, movieId);
                          });
                        }

                        return removeFromList(listObject, function () {
                          _this2.toggleListModal();
                          getListByCurrentUser(list, movieId);
                        });
                      }
                    },
                    _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: '' + (l.isAdded ? 'trash' : 'plus-square') })
                  )
                )
              );
            })
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
  addToList: _propTypes2.default.func.isRequired,
  removeFromList: _propTypes2.default.func.isRequired,
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  detail: _propTypes2.default.instanceOf(Object).isRequired,
  match: _propTypes2.default.instanceOf(Object).isRequired,
  lists: _propTypes2.default.instanceOf(Array).isRequired,
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

var _lists = __webpack_require__(/*! ../../actions/lists */ "./app/assets/javascript/app/actions/lists.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    detail: state.movie.detail,
    user: state.discover.user,
    isLoggedIn: state.discover.isLoggedIn,
    lists: state.lists.lists
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: function getMovieDetail(id) {
      return dispatch((0, _movie.getMovieDetail)(id));
    },
    getListByCurrentUser: function getListByCurrentUser(query, movieId) {
      return dispatch((0, _lists.getListByCurrentUser)(query, movieId));
    },
    addToList: function addToList(listMovie, callback) {
      return dispatch((0, _lists.addToList)(listMovie, callback));
    },
    removeFromList: function removeFromList(listMovie, callback) {
      return dispatch((0, _lists.removeFromList)(listMovie, callback));
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
    title: 'Visibility',
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
  _fontawesomeSvgCore.library.add(_freeSolidSvgIcons.faUser, _freeSolidSvgIcons.faSignOutAlt, _freeSolidSvgIcons.faEnvelope, _freeSolidSvgIcons.faUnlock, _freeSolidSvgIcons.faAlignLeft, _freeSolidSvgIcons.faKey, _freeSolidSvgIcons.faSignature, _freeSolidSvgIcons.faFilter, _freeSolidSvgIcons.faSortAmountUp, _freeSolidSvgIcons.faSortAmountDown, _freeBrandsSvgIcons.faFacebook, _freeBrandsSvgIcons.faGoogle, _freeBrandsSvgIcons.faTwitter, _freeBrandsSvgIcons.faInstagram, _freeSolidSvgIcons.faUserCircle, _freeSolidSvgIcons.faList, _freeSolidSvgIcons.faStar, _freeSolidSvgIcons.faHeart, _freeSolidSvgIcons.faComment, _freeSolidSvgIcons.faSwatchbook, _freeSolidSvgIcons.faUserFriends, _freeSolidSvgIcons.faCog, _freeSolidSvgIcons.faEdit, _freeSolidSvgIcons.faUpload, _freeSolidSvgIcons.faNewspaper, _freeSolidSvgIcons.faAt, _freeSolidSvgIcons.faAngleRight, _freeSolidSvgIcons.faAngleLeft, _freeSolidSvgIcons.faPlusSquare, _freeSolidSvgIcons.faTrash, _freeSolidSvgIcons.faCheck);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsImxpc3RzIiwiU0VUX0xJU1RTIiwibW92aWVJZCIsImxpbWl0IiwiY3VycmVudFVzZXJJZCIsImNvb2tpZSIsInZpc3NuZSIsImRvbWFpbiIsInJvd3MiLCJjb3VudCIsImxpc3QiLCJjYWxsYmFjayIsIm9wcyIsIm1ldGhvZCIsInJlc3VsdCIsImRlbGV0ZSIsImxpc3RJZCIsInNldE1vdmllRGV0YWlsIiwiU0VUX01PVklFX0RFVEFJTCIsImRldGFpbCIsImdldE1vdmllRGV0YWlsIiwiQWxlcnQiLCJwcm9wcyIsInNob3ciLCJkZWZhdWx0UHJvcHMiLCJvbmVPZiIsIkFMRVJUX1RZUEVTIiwiYm9vbCIsInN0cmluZyIsIkNhc3QiLCJuYW1lIiwiY2hhcmFjdGVyIiwicHJvZmlsZVBhdGgiLCJDYXN0U2hhcGUiLCJDYXN0TGlzdCIsImNhc3RzIiwiY2FzdExpc3QiLCJtYXAiLCJjIiwiYXJyYXlPZiIsIkNvbXBhbnkiLCJsb2dvIiwibG9nb1BhdGgiLCJpbWFnZXNTZWN1cmVCYXNlVXJsIiwiY2RuIiwiQ29tcGFueVNoYXBlIiwiQ29tcGFueUxpc3QiLCJjb21wYW5pZXMiLCJsb2dvX3BhdGgiLCJEZXRhaWxUYWJsZSIsIm1vdmllIiwib3JnaW5hbFRpdGxlIiwieWVhciIsInZvdGVfYXZlcmFnZSIsInZvdGVfY291bnQiLCJyZWxlYXNlX2RhdGUiLCJnZW5yZU5hbWVzIiwidGFnbGluZSIsImNvdW50cmllcyIsImxhbmd1YWdlIiwiZGlyZWN0b3IiLCJ3cml0ZXIiLCJob21lcGFnZSIsIk1vdmllU2hhcGUiLCJzd2l0Y2hTb3J0UXVlcnkiLCJzb3J0QnkiLCJzcGxpdCIsImFkZEdlbnJlSWQiLCJjdXJyZW50R2VucmVzIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImhhbmRsZUNoYW5nZVllYXIiLCJOdW1iZXIiLCJpc05hTiIsIkZpbHRlciIsInNvcnRJY29uQ2xhc3MiLCJzb3J0T3B0aW9ucyIsIlNPUlRfT1BUSU9OUyIsInNvcnQiLCJrZXkiLCJyZXBsYWNlIiwidG9Mb2NhbGVMb3dlckNhc2UiLCJnZW5yZU9wdGlvbnMiLCJnIiwid2l0aEdlbnJlcyIsInNlYXJjaFRleHQiLCIkZXZlbnQiLCJ0YXJnZXQiLCJHZW5yZVNoYXBlIiwiRmlsdGVyU2hhcGUiLCJmdW5jIiwiRm9vdGVyIiwiTWVudSIsInBhdGgiLCJpdGVtcyIsIm1lbnVJdGVtcyIsIm0iLCJpY29uIiwic2hhcGUiLCJNb2RhbCIsInRpdGxlIiwiY2FuY2VsIiwic3VibWl0IiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJzdWJtaXRCdXR0b24iLCJNb3ZpZUNhcmQiLCJpbWFnZSIsInJhdGUiLCJzbHVnIiwibnVtYmVyIiwiTW92aWVMaXN0IiwicG9zdGVyIiwidm90ZUF2ZXJhZ2UiLCJOYXZiYXIiLCJpc0xvZ2dlZEluIiwicGF0aE5hbWUiLCJsb2dpbkJ1dHRvbiIsInVzZXJOYW1lIiwiVXNlclNoYXBlIiwiUGFnZUxvYWRpbmciLCJoYW5kbGVDbGljayIsImN1cnJlbnRQYWdlIiwidG90YWxQYWdlIiwiaXNJbnRlZ2VyIiwibmV3UGFnZSIsImdlbmVyYXRlUGFnZU51bWJlcnMiLCJvcHRpb25zIiwiYnV0dG9uQ291bnQiLCJwYWdlTnVtYmVycyIsIk1hdGgiLCJmbG9vciIsImJjIiwiY2VpbCIsIlBhZ2luYXRpb24iLCJvblBhZ2luYXRlIiwicGFnZUJ1dHRvbnMiLCJwbiIsImltYWdlT25Mb2FkIiwiaW1hZ2VPbkVycm9yIiwic3JjIiwiZGVmYXVsdENvdmVySW1hZ2VQYXRoIiwiUG9zdGVyIiwiYWx0IiwiUHJvZmlsZUNvbnRhaW5lciIsImF2YXRhciIsInByb2ZpbGVNZW51IiwiUHJvZ3Jlc3NCYXIiLCJoZWlnaHQiLCJ3aWR0aCIsIlNwaW5uZXIiLCJzaXplIiwiY29sb3IiLCJhZGRpb25hbENsYXNzIiwiY3JlYXRlSGVhZGVyIiwiZmllbGRzIiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJoaWRkZW4iLCJjcmVhdGVCb2R5Iiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsInRib2R5IiwiaXRlbSIsIml0ZW1GaWVsZHMiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImNyZWF0ZVBhZ2luYXRpb24iLCJkYXRhTGVuZ3RoIiwiVGFibGVMaXN0IiwicGFnaW5hdGlvbiIsInJlc3BvbnNpdmUiLCJvbkNyZWF0ZSIsIm9uRWRpdCIsIm9uRGVsZXRlIiwiYnRuR3JvdXAiLCJoZWFkcyIsImJvZHkiLCJwYWdpbmF0aW9uQnV0dG9ucyIsIlZpZGVvIiwidmlkZW9LZXkiLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9UT19MSVNUIiwiREVMRVRFX0ZST01fTElTVCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJBbGVydERpYWxvZyIsImZvcm0iLCJjb25maXJtUGFzc3dvcmQiLCJzd2l0Y2hGb3JtIiwiZXJyb3JNZXNzYWdlIiwiZW1haWxJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzUmVnaXN0ZXIiLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGF0ZSIsImJ1dHRvblRleHQiLCJzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0IiwicmVnaXN0ZXJJbnB1dCIsImhhbmRsZVN1Ym1pdCIsImRpc2NvdmVyIiwibG9hZE1vdmllcyIsInNob3dGaWx0ZXIiLCJwYXRobmFtZSIsImdldExpc3RzIiwidG9nZ2xlTW9kYWwiLCJjcmVhdGUiLCJkZXN0cm95IiwidXBkYXRlIiwic2F2ZSIsImFzc2lnbiIsInNob3dNb2RhbCIsInBhcnNlZFZhbHVlIiwicGFyc2VJbnQiLCJwdWJsaWMiLCJ0YWJsZUZpZWxkcyIsInMiLCJzaG93TGlzdE1vZGFsIiwidG9nZ2xlTGlzdE1vZGFsIiwicGFyYW1zIiwidmlkZW8iLCJ2aWRlb3MiLCJwb3N0ZXJQYXRoIiwicHJvZHVjdGlvbl9jb21wYW5pZXMiLCJjcmVkaXRzIiwiY2FzdCIsImwiLCJpc0FkZGVkIiwibGlzdE9iamVjdCIsImxpc3RNb3ZpZSIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidXBsb2FkZWRBdmF0YXIiLCJmcmlzdE5hbWUiLCJjb25jYXQiLCJkYXRlIiwiRGF0ZSIsInRvTG9jYWxlRGF0ZVN0cmluZyIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInRodW5rTWlkZGxld2FyZSIsImFqYXhFcnJvckhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiQUxFUlRfVFlQRV9JQ09OX01BUCIsInByaW1hcnkiLCJkb2MiLCJzZXQiLCJjb29raWVzIiwiY25hbWUiLCJjdmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyIiwiZmFTaWduT3V0QWx0IiwiZmFFbnZlbG9wZSIsImZhVW5sb2NrIiwiZmFBbGlnbkxlZnQiLCJmYUtleSIsImZhU2lnbmF0dXJlIiwiZmFGaWx0ZXIiLCJmYVNvcnRBbW91bnRVcCIsImZhU29ydEFtb3VudERvd24iLCJmYUZhY2Vib29rIiwiZmFHb29nbGUiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsImZhVXNlckNpcmNsZSIsImZhTGlzdCIsImZhU3RhciIsImZhSGVhcnQiLCJmYUNvbW1lbnQiLCJmYVN3YXRjaGJvb2siLCJmYVVzZXJGcmllbmRzIiwiZmFDb2ciLCJmYUVkaXQiLCJmYVVwbG9hZCIsImZhTmV3c3BhcGVyIiwiZmFBdCIsImZhQW5nbGVSaWdodCIsImZhQW5nbGVMZWZ0IiwiZmFQbHVzU3F1YXJlIiwiZmFUcmFzaCIsImZhQ2hlY2siLCJ3aW4iLCJvbmxvYWQiLCJyZW1vdmUiLCJlbnYiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7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RUMsNkJBSEYsRUFJRUMsMkJBSkYsRUFLRUMsOEJBTEYsRUFNRUMsd0JBTkYsRUFPRUMsOEJBUEYsRUFRRUMsMkJBUkYsRUFTRUMsaUNBVEYsRUFVRUMsbUNBVkYsRUFXRUMsOEJBWEYsRUFZRUMsNEJBWkYsRUFhRUMsNkJBYkYsRUFjRUMsK0JBZEYsRUFlRUMsK0JBZkYsRUFnQkVDLHlCQWhCRixFQWlCRUMseUJBakJGLEVBa0JFQywwQkFsQkYsRUFtQkVDLDRCQW5CRixFQW9CRUMsK0JBcEJGLEVBcUJFQyxnQ0FyQkYsRUFzQkVDLHdCQXRCRixFQXVCRUMseUJBdkJGLEVBd0JFQywyQkF4QkYsRUF5QkVDLDhCQXpCRixFQTBCRUMsdUJBMUJGLEVBMkJFQywrQkEzQkYsRUE0QkVDLDhCQTVCRixFQTZCRUMsK0JBN0JGLEVBOEJFQywwQkE5QkYsRUErQkVDLDBCQS9CRjtBQWlDRCxDOzs7Ozs7Ozs7Ozs7OztBQ3ZFRCxDQUFDLFlBQU07QUFDTCxNQUFNQyxNQUFNbFksTUFBWjs7QUFFQWtZLE1BQUlDLE1BQUosR0FBYSxZQUFNO0FBQ2pCLFFBQU0zWCxjQUFjdVIsU0FBU3dDLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7O0FBRUEsUUFBSS9ULFdBQUosRUFBaUI7QUFDZkEsa0JBQVk0WCxNQUFaO0FBQ0Q7O0FBRUQsUUFBSXZVLE9BQU93VSxHQUFQLEtBQWUsWUFBbkIsRUFBaUM7QUFDL0IsVUFBSSxtQkFBbUJDLFNBQXZCLEVBQWtDO0FBQ2hDQSxrQkFBVUMsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGO0FBQ0YsR0FaRDtBQWFELENBaEJELEk7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeFwiLFwiY29tbW9uXCIsXCJyZWFjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9jb250YWluZXJzL0Rpc2NvdmVyJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL2NvbnRhaW5lcnMvTW92aWUnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9jb250YWluZXJzL0F1dGgnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb250YWluZXJzL0FjY291bnQnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29udGFpbmVycy9MaXN0cyc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cnO1xuXG5jb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29taW5nLXNvb25cIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luLXRoZWF0ZXJzXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoXCIgY29tcG9uZW50PXtBdXRofSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2xpc3RzXCIgY29tcG9uZW50PXtMaXN0c30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86c2x1Zy86aWRcIiBjb21wb25lbnQ9e01vdmllfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2Utbm90LWZvdW5kXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1JvdXRlcj5cbiAgICAgIDxBbGVydERpYWxvZyAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5Sb290LnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCBzZXRMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0QWNjb3VudERldGFpbCA9IHVzZXIgPT4gKHtcbiAgdHlwZTogU0VUX0FDQ09VTlRfREVUQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgdXNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudERldGFpbCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLmdldCgnL2FwaS9hY2NvdW50JylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoYC9hcGkvdXNlci8ke3VzZXIuaWR9YCwgdXNlcilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLicsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gcGFzc3dvcmQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnLCBwYXNzd29yZClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlZ2lzdGVyID0gKGRhdGEsIHVybCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIC8vIFRPRE86IHNldCB1c2VyIGluZm9ybWF0aW9uIHRvIGNvbW1vbiBzdGF0ZVxuICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXG59O1xuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQWxlcnREaWFsb2cgPSAoeyBtZXNzYWdlLCBraW5kIH0pID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9BTEVSVCxcbiAgbWVzc2FnZSxcbiAga2luZCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0UGFnZUxvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX0xPQURJTkdfU1RBVFVTLFxuICBsb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9ICgpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9GSUxURVIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFVwbG9hZGVkSW1hZ2UgPSB1cGxvYWRlZEZpbGUgPT4gKHtcbiAgdHlwZTogU0VUX1VQTE9BREVEX0lNQUdFLFxuICBwYXlsb2FkOiB1cGxvYWRlZEZpbGUsXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9RVUVSWSwgU0VUX0dFTlJFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVzID0gcmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFUyxcbiAgbW92aWVzOiByZXNwb25zZS5yZXN1bHRzLFxuICBwYWdlOiAocmVzcG9uc2UucGFnZSArIDEpLFxuICB0b3RhbFBhZ2VzOiByZXNwb25zZS50b3RhbF9wYWdlcyxcbiAgdG90YWw6IHJlc3BvbnNlLnRvdGFsX3Jlc3VsdHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICBsZXQgdXJsID0gJ2FwaS9kaXNjb3Zlcic7XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKHF1ZXJ5TmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbcXVlcnlOYW1lXTtcbiAgICBjb25zdCBvcCA9IGkgPT09IDBcbiAgICAgID8gJz8nXG4gICAgICA6ICcmJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHtxdWVyeU5hbWV9PSR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbXVsdGlRdWVyeSA9IGAke3F1ZXJ5TmFtZX09YDtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIG11bHRpUXVlcnkgKz0gYCR7dn0sYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke211bHRpUXVlcnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFF1ZXJ5ID0gKHsgZmllbGQsIHZhbHVlIH0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogU0VUX1FVRVJZLFxuICAgIGZpZWxkLFxuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEdlbnJlcyA9IGdlbnJlcyA9PiAoe1xuICB0eXBlOiBTRVRfR0VOUkVTLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9ICgpID0+IGRpc3BhdGNoID0+IGF4aW9zXG4gIC5nZXQoJy9hcGkvZ2VucmUnKVxuICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKHNldEdlbnJlcyhkYXRhKSkpXG4gIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQge1xuICBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSLFxuICBDUkVBVEVfTElTVCxcbiAgREVMRVRFX0xJU1QsXG4gIEFERF9UT19MSVNULFxuICBERUxFVEVfRlJPTV9MSVNULFxuICBTRVRfTElTVFMsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cywgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdCh7IGxpc3RzLCB0b3RhbCB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xJU1RTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGxpc3RzLFxuICAgICAgdG90YWwsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RCeUN1cnJlbnRVc2VyKHsgcGFnZSwgbGltaXQgfSwgbW92aWVJZCkge1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gY29va2llLmdldCgndXNlcl9pZCcpO1xuXG4gIGlmICghY3VycmVudFVzZXJJZCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gIH1cblxuICBsZXQgdXJsID0gYC9hcGkvbGlzdHM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcblxuICBpZiAobW92aWVJZCkge1xuICAgIHVybCArPSBgJm1vdmllSWQ9JHttb3ZpZUlkfWA7XG4gIH1cblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3ModXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRMaXN0KHtcbiAgICAgICAgICBsaXN0czogcmVzcG9uc2UuZGF0YS5yb3dzLFxuICAgICAgICAgIHRvdGFsOiByZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgICB9KSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMaXN0KGxpc3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG9wcyA9ICFsaXN0LmlkID8ge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvbGlzdHMnLFxuICB9IDoge1xuICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgdXJsOiBgL2FwaS9saXN0cy8ke2xpc3QuaWR9YCxcbiAgfTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3Nbb3BzLm1ldGhvZF0ob3BzLnVybCwgbGlzdClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlzdChpZCwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9saXN0cy8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0xpc3QoeyBsaXN0SWQsIG1vdmllSWQgfSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLnBvc3QoYC9hcGkvbGlzdHMvJHtsaXN0SWR9L21vdmllLyR7bW92aWVJZH1gLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QoeyBsaXN0SWQsIG1vdmllSWQgfSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9saXN0cy8ke2xpc3RJZH0vbW92aWUvJHttb3ZpZUlkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVEZXRhaWwgPSBkZXRhaWwgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFX0RFVEFJTCxcbiAgZGV0YWlsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZURldGFpbCA9IGlkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRNb3ZpZURldGFpbChudWxsKSk7XG5cbiAgYXhpb3MuZ2V0KGAvYXBpL21vdmllLyR7aWR9YClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKFxuICAgICAgc2V0TW92aWVEZXRhaWwoZGF0YSksXG4gICAgKSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBtZXNzYWdlLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHctMTAwIHRleHQtY2VudGVyYH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbiAga2luZDogJ2luZm8nLFxufTtcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDYXN0U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL0Nhc3Quc2Nzcyc7XG5cbmNvbnN0IENhc3QgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgY2hhcmFjdGVyLFxuICBwcm9maWxlUGF0aCxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXN0XCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17cHJvZmlsZVBhdGh9IGFsdD17bmFtZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc3QtaW5mb1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj57bmFtZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtbGlnaHRcIj57Y2hhcmFjdGVyfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5DYXN0LnByb3BUeXBlcyA9IENhc3RTaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDYXN0U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENhc3QgZnJvbSAnLi4vQ2FzdCc7XG5pbXBvcnQgJy4vQ2FzdExpc3Quc2Nzcyc7XG5cbmNvbnN0IENhc3RMaXN0ID0gKHsgY2FzdHMgfSkgPT4ge1xuICBjb25zdCBjYXN0TGlzdCA9IGNhc3RzLm1hcChjID0+IChcbiAgICA8Q2FzdFxuICAgICAga2V5PXtjLmlkfVxuICAgICAgbmFtZT17Yy5uYW1lfVxuICAgICAgcHJvZmlsZVBhdGg9e2MucHJvZmlsZVBhdGh9XG4gICAgICBjaGFyYWN0ZXI9e2MuY2hhcmFjdGVyfVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhc3QtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXN0IGxpc3Q8L2g1PlxuICAgICAgICB7Y2FzdExpc3R9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNhc3RMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mKENhc3RTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc3RMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tcGFueVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuY29uc3QgQ29tcGFueSA9ICh7IGxvZ28sIG5hbWUgfSkgPT4ge1xuICBjb25zdCBsb2dvUGF0aCA9IGxvZ29cbiAgICA/IGAke3Zpc3NuZS5pbWFnZXNTZWN1cmVCYXNlVXJsfS93OTIvJHtsb2dvfWBcbiAgICA6IGAke3Zpc3NuZS5jZG59L2ltYWdlcy9wbGFjZWhvbGRlci5wbmdgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBtYi0yXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTMgY29tcGFueS1sb2dvXCIgc3JjPXtsb2dvUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wXCI+e25hbWV9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29tcGFueS5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ286ICcnLFxuICBuYW1lOiAnQ29tcGFueScsXG59O1xuXG5Db21wYW55LnByb3BUeXBlcyA9IENvbXBhbnlTaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi4vQ29tcGFueSc7XG5pbXBvcnQgJy4vQ29tcGFueUxpc3Quc2Nzcyc7XG5cbmNvbnN0IENvbXBhbnlMaXN0ID0gKHsgY29tcGFuaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Db21wYW5pZXM8L2g1PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAge2NvbXBhbmllcy5tYXAoYyA9PiAoXG4gICAgICAgICAgPENvbXBhbnkga2V5PXtjLmlkfSBsb2dvPXtjLmxvZ29fcGF0aH0gbmFtZT17Yy5uYW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNvbXBhbnlMaXN0LnByb3BUeXBlcyA9IHtcbiAgY29tcGFuaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihDb21wYW55U2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBEZXRhaWxUYWJsZSA9ICh7IG1vdmllIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Ake21vdmllLm9yZ2luYWxUaXRsZX0gKCR7bW92aWUueWVhcn0pYH08L2g1PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtcmVzcG9uc2l2ZS1zbSB0YWJsZS1yZXNwb25zaXZlLXhzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmF0aW5nPC90aD5cbiAgICAgICAgICAgIDx0ZD57YCR7bW92aWUudm90ZV9hdmVyYWdlfSAoJHttb3ZpZS52b3RlX2NvdW50fSlgfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmVsZWFzZSBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUucmVsZWFzZV9kYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+R2VucmVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZ2VucmVOYW1lc308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRhZ2xpbmU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS50YWdsaW5lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q291bnRyaWVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuY291bnRyaWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGFuZ3VhZ2VzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUubGFuZ3VhZ2V9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EaXJlY3RvcjwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmRpcmVjdG9yfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+V3JpdGVyPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUud3JpdGVyfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SG9tZXBhZ2U8L3RoPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8YSBocmVmPXttb3ZpZS5ob21lcGFnZX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnttb3ZpZS5ob21lcGFnZX08L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkRldGFpbFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IE1vdmllU2hhcGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbFRhYmxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBHZW5yZVNoYXBlLCBGaWx0ZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgeyBTT1JUX09QVElPTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCAnLi9GaWx0ZXIuc2Nzcyc7XG5cbmZ1bmN0aW9uIHN3aXRjaFNvcnRRdWVyeShzb3J0QnkpIHtcbiAgY29uc3QgW25hbWUsIGtpbmRdID0gc29ydEJ5LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHZhbHVlID0gYCR7bmFtZX0uJHtraW5kID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJ31gO1xuICByZXR1cm4ge1xuICAgIGZpZWxkOiAnc29ydEJ5JyxcbiAgICB2YWx1ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkR2VucmVJZCh2YWx1ZSwgY3VycmVudEdlbnJlcykge1xuICBjb25zdCBpbmRleCA9IGN1cnJlbnRHZW5yZXMuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjdXJyZW50R2VucmVzLnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRHZW5yZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gY3VycmVudEdlbnJlcztcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlWWVhcih5ZWFyLCBzZXRRdWVyeSkge1xuICBpZiAoeWVhci5sZW5ndGggPT09IDQgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogeWVhcixcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh5ZWFyID09PSAnJykge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBGaWx0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGdlbnJlcyxcbiAgICBzZXRRdWVyeSxcbiAgICBxdWVyeSxcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzb3J0SWNvbkNsYXNzID0gcXVlcnkuc29ydEJ5LnNwbGl0KCcuJylbMV0gPT09ICdkZXNjJ1xuICAgID8gJ2Rvd24nXG4gICAgOiAndXAnO1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0gU09SVF9PUFRJT05TLm1hcCgoc29ydCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IHNvcnQubmFtZS5yZXBsYWNlKC8gL2csICdfJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2Ake2tleX0uJHtzb3J0LnZhbHVlfWB9PlxuICAgICAgICB7c29ydC5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2VucmVPcHRpb25zID0gZ2VucmVzLm1hcChnID0+IChcbiAgICA8b3B0aW9uIGtleT17Zy5pZH0gdmFsdWU9e2cuaWR9IGNsYXNzTmFtZT17cXVlcnkud2l0aEdlbnJlcy5pbmRleE9mKGAke2cuaWR9YCkgPT09IC0xID8gJycgOiAnc2VsZWN0ZWQnfT5cbiAgICAgIHtnLm5hbWV9XG4gICAgPC9vcHRpb24+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3RpY2t5LXRvcCBiZy13aGl0ZSBtYi0yIHB0LTIgc2hhZG93LXNtIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkuc2VhcmNoVGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICdzZWFyY2hUZXh0JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJnZW5yZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnd2l0aEdlbnJlcycsIHZhbHVlOiBhZGRHZW5yZUlkKCRldmVudC50YXJnZXQudmFsdWUsIHF1ZXJ5LndpdGhHZW5yZXMpIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkdlbnJlczwvb3B0aW9uPlxuICAgICAgICAgIHtnZW5yZU9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic29ydEJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgaWQ9XCJzb3J0T3B0aW9uU2VsZWN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTb3J0IG9wdGlvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NvcnRCeScsIHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tb3J0IEJ5PC9vcHRpb24+XG4gICAgICAgICAgICB7c29ydE9wdGlvbnN9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmlsdGVyLWlucHV0LWJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHN3aXRjaFNvcnRRdWVyeShxdWVyeS5zb3J0QnkpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtgc29ydC1hbW91bnQtJHtzb3J0SWNvbkNsYXNzfWB9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWWVhclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBoYW5kbGVDaGFuZ2VZZWFyKCRldmVudC50YXJnZXQudmFsdWUsIHNldFF1ZXJ5KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbn07XG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Gb290ZXIuc2Nzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+QWJvdXQgVXM8L2g1PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDU+U29jaWFsPC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgZmFjZWJvb2tcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIHR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIGluc3RhZ3JhbVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1Pkxhc3QgUmV2aWV3czwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEgbXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+Q29udGFjdDwvaDU+XG4gICAgICAgICAgPHA+KzI1NSAwMDAgMDAgMDAgMDA8L3A+XG4gICAgICAgICAgPHA+aW5mb0B2aXNzbmUuY29tPC9wPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0yXCI+TGFzdCBVcGRhdGVzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+QWRkIGNvbW1vbiBmaWx0ZXIgZm9yIG1vdmllczwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+R29vZ2xlIGF1dGggb3B0aW9ucyBpcyBjb21wbGV0ZWQ8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkZpeGVkIEZhY2Vib29rIGF1dGggaXNzdWVzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMVwiPlxuICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAxOSBWaXNzbmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IE1lbnUgPSAoeyBwYXRoLCBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e20ucGF0aH0+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXttLmljb259IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bS5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAge21lbnVJdGVtc31cbiAgICA8L3VsPlxuICApO1xufTtcblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vTW9kYWwuc2Nzcyc7XG5cbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBjYW5jZWwsXG4gICAgc3VibWl0LFxuICAgIGNoaWxkcmVuLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc05hbWUgPSBzaG93ID8gJ3Nob3cgZC1ibG9jaycgOiAnJztcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gc3VibWl0XG4gICAgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXR9PlNhdmU8L2J1dHRvbj5cbiAgICA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsIGZhZGUgJHtjbGFzc05hbWV9YH0gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJhY2tkcm9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtjYW5jZWx9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICB7c3VibWl0QnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbn07XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvc3RlciBmcm9tICcuLi9Qb3N0ZXInO1xuaW1wb3J0ICcuL01vdmllQ2FyZC5zY3NzJztcblxuY29uc3QgTW92aWVDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBpbWFnZSxcbiAgICByYXRlLFxuICAgIHNsdWcsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtY2FyZCBoLTEwMCB3LTEwMCByb3VuZGVkLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGltZy10aHVtYm5haWxcIj5cbiAgICAgIDxMaW5rIHRvPXtgbW92aWUvJHtzbHVnfS8ke2lkfWB9IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHJhdGluZy10YWcgc2hhZG93LXNtIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIHtyYXRlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxQb3N0ZXIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IE1vdmllTGlzdCA9ICh7IG1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBtb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICA8ZGl2IGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMiBtYi0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TW92aWVDYXJkXG4gICAgICAgIGlkPXttb3ZpZS5pZH1cbiAgICAgICAgaW1hZ2U9e21vdmllLnBvc3Rlcn1cbiAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICByYXRlPXttb3ZpZS52b3RlQXZlcmFnZX1cbiAgICAgICAgc2x1Zz17bW92aWUuc2x1Z31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vTmF2YmFyLnNjc3MnO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgaXNMb2dnZWRJbixcbiAgICBwYXRoTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gaXNMb2dnZWRJbiA/IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcHJvZmlsZS9hY2NvdW50XCIgdGl0bGU9XCJQcm9maWxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPnt1c2VyLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9nb3V0XCIgdGl0bGU9XCJMb2dvdXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLW91dC1hbHRcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvRnJhZ21lbnQ+XG4gICkgOiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGluayB0bz1cIi9hdXRoXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5sb2dpbjwvTGluaz5cbiAgICA8L2xpPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH1cbiAgICAgICAgICBhbHQ9XCJWaXNzbmVcIlxuICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGQtYmxvY2tcIlxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGlkPVwiZmlsdGVyQnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImZpbHRlclwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9pbi10aGVhdGVycycgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2luLXRoZWF0ZXJzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaW4gdGhlYXRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9jb21pbmctc29vbicgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2NvbWluZy1zb29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgY29taW5nIHNvb25nXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXktYXV0b1wiPlxuICAgICAgICAgIHtsb2dpbkJ1dHRvbn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IHt9LFxuICBwYXRoTmFtZTogJy8nLFxufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgcGF0aE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9vbmcucG5nYH0gYWx0PVwiNDA0XCIgLz5cbiAgICA8aDQ+NDA0PC9oND5cbiAgICA8aDU+UGFnZSBub3QgZm91bmQ8L2g1PlxuICAgIDxwPlxuICAgICAgV2UgYXJlIHNvcnJ5LiBUaGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIHdhcyBtb3ZlZCwgcmVtb3ZlZCwgcmVuYW1lZCBvciBtaWdodCBuZXZlciBleGlzdGVkLlxuICAgIDwvcD5cbiAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+R08gVE8gSE9NRTwvYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuXG5jb25zdCBQYWdlTG9hZGluZyA9ICh7IHNob3cgfSkgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgYmctbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICA8U3Bpbm5lciBzaG93IHNpemU9XCJsZ1wiIGFkZGlvbmFsQ2xhc3M9XCJtci0yXCIgLz5cbiAgICAgIExvYWRpbmcuLi5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhZ2VMb2FkaW5nLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IChwYWdlLCBjdXJyZW50UGFnZSwgdG90YWxQYWdlKSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuXG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhZ2UpKSB7XG4gICAgcmV0dXJuIHsgcGFnZSB9O1xuICB9XG5cbiAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSAoY3VycmVudFBhZ2UgLSAxKTtcbiAgICByZXN1bHQgPSBuZXdQYWdlID09PSAwID8gMSA6IG5ld1BhZ2U7XG4gIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XG4gICAgcmVzdWx0ID0gKChjdXJyZW50UGFnZSArIDEpID4gdG90YWxQYWdlKVxuICAgICAgPyB0b3RhbFBhZ2VcbiAgICAgIDogKGN1cnJlbnRQYWdlICsgMSk7XG4gIH1cblxuICByZXR1cm4geyBwYWdlOiByZXN1bHQgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZU51bWJlcnMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICB0b3RhbCxcbiAgICBidXR0b25Db3VudCxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XG4gIGNvbnN0IGJjID0gTWF0aC5jZWlsKGJ1dHRvbkNvdW50IC8gMik7XG5cbiAgZm9yIChsZXQgaSA9IChwYWdlIC0gKGJjIC0gMSkpOyBpIDwgKHBhZ2UgKyBiYyk7IGkgKz0gMSkge1xuICAgIGlmIChpID4gMCAmJiBpIDw9IHRvdGFsUGFnZSkge1xuICAgICAgcGFnZU51bWJlcnMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFnZU51bWJlcnM7XG59O1xuXG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgeyBwYWdlLCBvblBhZ2luYXRlLCBsaW1pdCwgdG90YWwgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcGFnZU51bWJlcnMgPSBnZW5lcmF0ZVBhZ2VOdW1iZXJzKG9wdGlvbnMpO1xuICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsIC8gbGltaXQpO1xuXG4gIGlmIChwYWdlTnVtYmVycy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIDxzcGFuIC8+O1xuICB9XG5cbiAgY29uc3QgcGFnZUJ1dHRvbnMgPSBwYWdlTnVtYmVycy5tYXAocG4gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gICR7cG4gPT09IHBhZ2UgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IChwbiAhPT0gcGFnZSA/IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socG4pKSA6ICcnKX1cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gMSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygncHJldicsIHBhZ2UpKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7cGFnZUJ1dHRvbnN9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSB0b3RhbFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ25leHQnLCBwYWdlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiB7XG4gICAgYnV0dG9uQ291bnQ6IDMsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZTogMSxcbiAgICBsaW1pdDogMTAsXG4gIH0sXG59O1xuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uUGFnaW5hdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGJ1dHRvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZnVuY3Rpb24gaW1hZ2VPbkxvYWQoKSB7XG5cbn1cblxuZnVuY3Rpb24gaW1hZ2VPbkVycm9yKCkge1xuICB0aGlzLnNyYyA9IHZpc3NuZS5kZWZhdWx0Q292ZXJJbWFnZVBhdGg7XG59XG5cbmNvbnN0IFBvc3RlciA9ICh7IHNyYywgYWx0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxuICAgICAgc3JjPXtgJHtzcmN9YH1cbiAgICAgIG9uTG9hZD17aW1hZ2VPbkxvYWR9XG4gICAgICBvbkVycm9yPXtpbWFnZU9uRXJyb3J9XG4gICAgICBhbHQ9e2FsdH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblBvc3Rlci5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnLi9QYWdlTG9hZGluZyc7XG5pbXBvcnQgcHJvZmlsZU1lbnUgZnJvbSAnLi4vY29uc3RhbnRzL3Byb2ZpbGUtbWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgcGF0aCwgcGFnZUxvYWRpbmcsIHVzZXIgfSA9IHByb3BzO1xuXG4gIGlmIChwYWdlTG9hZGluZykge1xuICAgIHJldHVybiA8UGFnZUxvYWRpbmcgc2hvdyAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHJvdW5kZWQtY2lyY2xlIGF2YXRhci1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhciB8fCBgJHt2aXNzbmUuY2RufS91Y29udGVudC9hdmF0YXIvZGVmYXVsdC1hdmF0YXIuanBnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGUgYm9yZGVyIGF2YXRhclwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICBpZD1cImF2YXRhclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg1PntgQCR7dXNlci51c2VyTmFtZX1gfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TWVudSBpdGVtcz17cHJvZmlsZU1lbnV9IHBhdGg9e3BhdGh9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNob3csIGhlaWdodCB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiBzdHlsZT17eyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIlxuICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICBhcmlhLXZhbHVlbm93PVwiNzVcIlxuICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgaGVpZ2h0OiAyLFxufTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2hvdyxcbiAgICBzaXplLFxuICAgIGtpbmQsXG4gICAgY29sb3IsXG4gICAgYWRkaW9uYWxDbGFzcyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNwaW5uZXItJHtraW5kfSBzcGlubmVyLSR7a2luZH0tJHtzaXplfSB0ZXh0LSR7Y29sb3J9ICR7YWRkaW9uYWxDbGFzc31gfSByb2xlPVwic3RhdHVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBzaXplOiAnc20nLFxuICBraW5kOiAnZ3JvdycsXG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIGFkZGlvbmFsQ2xhc3M6ICcnLFxufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBhZGRpb25hbENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzbScsXG4gICAgJ21kJyxcbiAgICAnbGcnLFxuICAgICd4bCcsXG4gIF0pLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdib3JkZXInLFxuICAgICdncm93JyxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdpbmZvJyxcbiAgICAnbGlnaHQnLFxuICAgICdkYXJrJyxcbiAgXSksXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9QYWdpbmF0aW9uJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9BbGVydCc7XG5pbXBvcnQgJy4vVGFibGVMaXN0LnNjc3MnO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoZmllbGRzKSA9PiB7XG4gIGNvbnN0IHZpc2libGVGaWVsZHMgPSBmaWVsZHNcbiAgICAuZmlsdGVyKGYgPT4gIWYuaGlkZGVuKVxuICAgIC5tYXAoZiA9PiA8dGggc2NvcGU9XCJjb2xcIj57Zi50aXRsZX08L3RoPik7XG5cbiAgcmV0dXJuIDx0cj57dmlzaWJsZUZpZWxkc308L3RyPjtcbn07XG5cbmNvbnN0IGNyZWF0ZUJvZHkgPSAoZGF0YSwgZmllbGRzLCBzZWxlY3RlZCwgb25TZWxlY3QpID0+IHtcbiAgY29uc3QgdGJvZHkgPSBbXTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRmllbGRzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSBpdGVtW2ZpZWxkLm5hbWVdO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC5mb3JtYXRcbiAgICAgICAgPyBmaWVsZC5mb3JtYXQodilcbiAgICAgICAgOiB2LnRvU3RyaW5nKCk7XG5cbiAgICAgIGl0ZW1GaWVsZHMucHVzaCg8dGQ+e3ZhbHVlfTwvdGQ+KTtcbiAgICB9KTtcblxuICAgIHRib2R5LnB1c2goXG4gICAgICA8dHIgY2xhc3NOYW1lPXtgJHtpdGVtLmlkID09PSBzZWxlY3RlZC5pZCA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX0+XG4gICAgICAgIHtpdGVtRmllbGRzfVxuICAgICAgPC90cj4sXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRib2R5O1xufTtcblxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbiA9IChvcHRpb25zLCBkYXRhTGVuZ3RoKSA9PiB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPFBhZ2luYXRpb24gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgIDxzcGFuPntgU2hvdyAke2RhdGFMZW5ndGh9IHJlc3VsdCBvZiAke29wdGlvbnMudG90YWx9YH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBUYWJsZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGRhdGEsXG4gICAgc2VsZWN0ZWQsXG4gICAgZmllbGRzLFxuICAgIHBhZ2luYXRpb24sXG4gICAgcmVzcG9uc2l2ZSxcbiAgICBvbkNyZWF0ZSxcbiAgICBvbkVkaXQsXG4gICAgb25EZWxldGUsXG4gICAgb25TZWxlY3QsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBidG5Hcm91cCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ0bi1ncm91cCB3LTEwMCAkeyghb25DcmVhdGUgJiYgIW9uRWRpdCAmJiAhb25EZWxldGUpID8gJ2Qtbm9uZScgOiAnJ31gfSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiY3J1ZFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uQ3JlYXRlID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkNyZWF0ZX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwicGx1cy1zcXVhcmVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+Q3JlYXRlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25FZGl0ID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkVkaXR9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVkaXRcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+RWRpdDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uRGVsZXRlID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidHJhc2hcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+RGVsZXRlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIlRoZXJlIHdlcmUgbm8gcmVzdWx0LlwiIGtpbmQ9XCJ3YXJuaW5nXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlfSBjbGFzc05hbWU9e2BidG4gYnRuLW91dGxpbmUtcHJpbWFyeSB3LTEwMCAke29uQ3JlYXRlID8gJycgOiAnZC1ibG9jayd9YH0gdHlwZT1cImJ1dHRvblwiPlxuICAgICAgICAgICAgQWRkXG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGhlYWRzID0gY3JlYXRlSGVhZGVyKGZpZWxkcyk7XG4gIGNvbnN0IGJvZHkgPSBjcmVhdGVCb2R5KGRhdGEsIGZpZWxkcywgc2VsZWN0ZWQsIG9uU2VsZWN0KTtcbiAgY29uc3QgcGFnaW5hdGlvbkJ1dHRvbnMgPSBjcmVhdGVQYWdpbmF0aW9uKHBhZ2luYXRpb24sIGRhdGEubGVuZ3RoKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgIHtidG5Hcm91cH1cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YHRhYmxlIHYtdGFibGUgJHtyZXNwb25zaXZlID8gJ3RhYmxlLXJlc3BvbnNpdmUnIDogJyd9YH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAge2hlYWRzfVxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge3BhZ2luYXRpb25CdXR0b25zfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UYWJsZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiBbXSxcbiAgc2VsZWN0ZWQ6IHt9LFxuICBmaWVsZHM6IFtdLFxufTtcblxuVGFibGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmluc3RhbmNlT2YoQXJyYXkpLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KSxcbiAgZmllbGRzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUxpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL1ZpZGVvLnNjc3MnO1xuXG5jb25zdCBWaWRlbyA9ICh7IHZpZGVvS2V5IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlbyBtYi0yIGVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgIDxpZnJhbWVcbiAgICAgIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiXG4gICAgICB0aXRsZT1cIlZpZGVvXCJcbiAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxuICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgaGVpZ2h0PVwiMzYwXCJcbiAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9LZXl9P2F1dG9wbGF5PTAmb3JpZ2luPSR7dmlzc25lLmRvbWFpbn1gfVxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuVmlkZW8ucHJvcFR5cGVzID0ge1xuICB2aWRlb0tleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iLCIvLyBjb21tb25cbmV4cG9ydCBjb25zdCBMT0FESU5HID0gJ0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9BTEVSVCA9ICdUT0dHTEVfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9GSUxURVIgPSAnVE9HR0xFX0ZJTFRFUic7XG5cbi8vIGF1dGhcbmV4cG9ydCBjb25zdCBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyA9ICdTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyc7XG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9MT0FESU5HX1NUQVRVUyc7XG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSAnUkVHSVNURVInO1xuZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gJ1NFVF9VU0VSJztcblxuLy8gZGlzY292ZXJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVTID0gJ0dFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9NT1ZJRVMgPSAnU0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX0dFTlJFUyA9ICdTRVRfR0VOUkVTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFUlkgPSAnU0VUX1FVRVJZJztcblxuLy8gbGlzdHNcbmV4cG9ydCBjb25zdCBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSID0gJ0dFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVInO1xuZXhwb3J0IGNvbnN0IENSRUFURV9MSVNUID0gJ0NSRUFURV9MSVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTElTVCA9ICdERUxFVEVfTElTVFMnO1xuZXhwb3J0IGNvbnN0IEFERF9UT19MSVNUID0gJ0FERF9UT19MSVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9MSVNUID0gJ0RFTEVURV9GUk9NX0xJU1QnO1xuZXhwb3J0IGNvbnN0IFNFVF9MSVNUUyA9ICdTRVRfTElTVFMnO1xuXG4vLyBtb3ZpZSBkZXRhaWxcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVfREVUQUlMID0gJ1NFVF9NT1ZJRV9ERVRBSUwnO1xuXG4vLyBwcm9maWxlXG4vLyAgLS0gQWNjb3VudFxuZXhwb3J0IGNvbnN0IFNFVF9BQ0NPVU5UX0RFVEFJTCA9ICdTRVRfQUNDT1VOVF9ERVRBSUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9VUExPQURFRF9JTUFHRSA9ICdTRVRfVVBMT0FERURfSU1BR0UnO1xuXG4vLyBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBTT1JUX09QVElPTlMgPSBbe1xuICBuYW1lOiAnUG9wdWxhcml0eScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmV2ZW51ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdQcmltYXJ5IFJlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdPcmdpbmFsIFRpdGxlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQXZlcmFnZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIENvdW50JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn1dO1xuIiwiY29uc3QgcHJvZmlsZU1lbnUgPSBbXG4gIHtcbiAgICBuYW1lOiAnQWNjb3VudCcsXG4gICAgaWNvbjogJ3VzZXInLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9hY2NvdW50JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMaXN0cycsXG4gICAgaWNvbjogJ2xpc3QnLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9saXN0cycsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnRmF2b3JpdGVzJyxcbiAgLy8gICBpY29uOiAnaGVhcnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mYXZvcml0ZXMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0NvbW1lbnRzJyxcbiAgLy8gICBpY29uOiAnY29tbWVudCcsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2NvbW1lbnRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdSZXZpZXdzJyxcbiAgLy8gICBpY29uOiAnbmV3c3BhcGVyJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvcmV2aWV3cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnRnJpZW5kcycsXG4gIC8vICAgaWNvbjogJ3VzZXItZnJpZW5kcycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2ZyaWVuZHMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ1NldHRpbmdzJyxcbiAgLy8gICBpY29uOiAnY29nJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvc2V0dGluZ3MnLFxuICAvLyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZU1lbnU7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVXNlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZpcnN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmdWxsTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1c2VyTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgTW92aWVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmdpbmFsVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZU5hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBob21lcGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IENhc3RTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hhcmFjdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHByb2ZpbGVQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvbXBhbnlTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2dvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHZW5yZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtYXRjaFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHNvcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICBjcmV3czogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICB2b3RlQXZlcmFnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgcmVsZWFzZVllYXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZmlsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXInO1xuaW1wb3J0IHsgVXNlclNoYXBlLCBtYXRjaFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgJy4vQWNjb3VudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgcHJvcHMuc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgICAgdXNlckZvcm06IHt9LFxuICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICB1c2VyTmFtZToge30sXG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgb2xkUGFzc3dvcmQ6IHt9LFxuICAgICAgICBuZXdQYXNzd29yZDoge30sXG4gICAgICAgIGNvbmZpcm1OZXdQYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRBY2NvdW50RGV0YWlsIH0gPSB0aGlzLnByb3BzO1xuICAgIGdldEFjY291bnREZXRhaWwoKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9LCBmaWVsZCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xuICAgIHN0YXRlW2ZpZWxkXVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2csIGNoYW5nZVBhc3N3b3JkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhc3N3b3JkLm5ld1Bhc3N3b3JkICE9PSBwYXNzd29yZC5jb25maXJtTmV3UGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmRzIGRvblxcJ3QgbWF0Y2guJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXNzd29yZC5vbGRQYXNzd29yZCA9PT0gcGFzc3dvcmQubmV3UGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgY2Fubm90IGJlIHRoZSBzYW1lIHdpdGggb2xkIHBhc3N3b3JkLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzd29yZChwYXNzd29yZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiB7fSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIHVzZXIsXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZUxvYWRpbmcsXG4gICAgICB1cGRhdGVVc2VyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdXNlckZvcm0sIHZhbGlkYXRpb24sIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHVzZXIgJiYgdXNlci5pZCAmJiAhdXNlckZvcm0uaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyRm9ybTogdXNlciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxQcm9maWxlQ29udGFpbmVyIHVzZXI9e3VzZXJ9IHBhdGg9e21hdGNoLnBhdGh9IHBhZ2VMb2FkaW5nPXtwYWdlTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+QWNjb3VudDwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24udXNlck5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLnVzZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lSW5wdXRcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ubGFzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5sYXN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmVtYWlsLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlVXNlcih1c2VyRm9ybSl9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaG93PXtsb2FkaW5nfSBraW5kPVwiYm9yZGVyXCIgY29sb3I9XCJzdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bG9hZGluZyA/ICdkLW5vbmUnIDogJ2QtYmxvY2snfT5VcGRhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5DaGFuZ2UgUGFzc3dvcmQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2xkUGFzc3dvcmRJbnB1dFwiPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQub2xkUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwib2xkUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm9sZFBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdQYXNzd29yZElucHV0XCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5uZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubmV3UGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1OZXdQYXNzd29yZElucHV0XCI+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtTmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1OZXdQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDaGFuZ2UgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5BY2NvdW50LnByb3BUeXBlcyA9IHtcbiAgdXNlcjogVXNlclNoYXBlLmlzUmVxdWlyZWQsXG4gIG1hdGNoOiBtYXRjaFNoYXBlLmlzUmVxdWlyZWQsXG4gIGdldEFjY291bnREZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZXRQYWdlTG9hZGluZ1N0YXR1czogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXBkYXRlVXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoYW5nZVBhc3N3b3JkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBY2NvdW50IGZyb20gJy4vQWNjb3VudCc7XG5pbXBvcnQgeyBnZXRBY2NvdW50RGV0YWlsLCBjaGFuZ2VQYXNzd29yZCwgdXBkYXRlVXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHBhZ2VMb2FkaW5nOiBzdGF0ZS5jb21tb24ucGFnZUxvYWRpbmcsXG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1cGxvYWRlZEZpbGU6IHN0YXRlLmNvbW1vbi51cGxvYWRlZEZpbGUsXG4gIHVzZXI6IHN0YXRlLmFjY291bnQudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRBY2NvdW50RGV0YWlsOiAoKSA9PiBkaXNwYXRjaChnZXRBY2NvdW50RGV0YWlsKCkpLFxuICBzZXRQYWdlTG9hZGluZ1N0YXR1czogc3RhdHVzID0+IGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHN0YXR1cykpLFxuICB1cGRhdGVVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlcikpLFxuICBjaGFuZ2VQYXNzd29yZDogcGFzc3dvcmQgPT4gZGlzcGF0Y2goY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpKSxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IGFsZXJ0ID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKGFsZXJ0KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFjY291bnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIHNob3csXG4gICAgbWVzc2FnZSxcbiAgICB0b2dnbGVBbGVydERpYWxvZyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gc2l0ZS1hbGVydCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZUFsZXJ0RGlhbG9nfT5cbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAga2luZDogJ2luZm8nLFxuICBtZXNzYWdlOiBudWxsLFxufTtcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4vQWxlcnREaWFsb2cnO1xuaW1wb3J0ICcuL0FsZXJ0RGlhbG9nLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBjb21tb24gfSkgPT4gKHtcbiAgc2hvdzogY29tbW9uLnNob3dBbGVydCxcbiAgbWVzc2FnZTogY29tbW9uLmFsZXJ0TWVzc2FnZSxcbiAga2luZDogY29tbW9uLmFsZXJ0S2luZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB0b2dnbGVBbGVydERpYWxvZzogKCkgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coeyBzaG93OiBmYWxzZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFsZXJ0RGlhbG9nKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3dpdGNoRm9ybSA9IHRoaXMuc3dpdGNoRm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW5SZWdpc3RlciA9IHRoaXMubG9naW5SZWdpc3Rlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydERpYWxvZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBjb29raWUuZ2V0KCdlcnJvck1lc3NhZ2UnKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0b2dnbGVBbGVydERpYWxvZyhlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBmb3JtW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm0gfSk7XG4gIH1cblxuICB2YWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcbiAgICBjb25zdCB7IHZhbGlkYXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICghZm9ybS5lbWFpbCB8fCAhZW1haWxJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHZhbGlkYXRpb24uZW1haWwgPSB7XG4gICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24uZW1haWwgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm0ucGFzc3dvcmQgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPCA2IHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoID4gMTYpIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7XG4gICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgbXVzdCBiZSA2LTE2IGNoYWNyYWN0ZXIuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHt9O1xuICAgIH1cblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBpZiAoIWZvcm0udXNlck5hbWUgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPCAyIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi51c2VyTmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5Vc2VyIG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi51c2VyTmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uZmlyc3ROYW1lIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+Rmlyc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0ubGFzdE5hbWUgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi5sYXN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5MYXN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5sYXN0TmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybS5jb25maXJtUGFzc3dvcmQgIT09IGZvcm0ucGFzc3dvcmQpIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIGRvbnQgbWF0Y2g8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBsb2dpblJlZ2lzdGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uKGZvcm0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHVybCA9IGlzUmVnaXN0ZXJcbiAgICAgID8gJy9hcGkvcmVnaXN0ZXInXG4gICAgICA6ICcvYXBpL2xvZ2luJztcblxuICAgIHJldHVybiBwcm9wcy5sb2dpblJlZ2lzdGVyKGZvcm0sIHVybCk7XG4gIH1cblxuICBzd2l0Y2hGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc1JlZ2lzdGVyOiAhcHJldlN0YXRlLmlzUmVnaXN0ZXIsXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm0sXG4gICAgICBpc1JlZ2lzdGVyLFxuICAgICAgdmFsaWRhdGlvbixcbiAgICAgIGxvYWRpbmcsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9ICdMT0dJTic7XG4gICAgbGV0IHN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQgPSAnUkVHSVNURVInO1xuICAgIGxldCByZWdpc3RlcklucHV0ID0gbnVsbDtcblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICAgIHN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQgPSAnTE9HSU4nO1xuXG4gICAgICByZWdpc3RlcklucHV0ID0gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1QYXNzd29yZElucHV0XCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwia2V5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtUGFzc3dvcmRBZGRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwidXNlck5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImF0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnVzZXJOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJmaXJzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPlxuICAgICAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJsYXN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24ubGFzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5sYXN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGF1dGgtZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfSBhbHQ9XCJWaXNzbmVcIiBoZWlnaHQ9XCI3MFwiIGNsYXNzTmFtZT1cIm15LTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gaWQ9XCJmb3JtUmVnXCIgY2xhc3NOYW1lPVwiY29sLTEyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImJhc2ljLWFkZG9uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJlbnZlbG9wZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbElucHV0R3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmVtYWlsLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRJbnB1dFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidW5sb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRBZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24ucGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7cmVnaXN0ZXJJbnB1dH1cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5SZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3Bpbm5lci1ncm93IHNwaW5uZXItZ3Jvdy1zbSAke2xvYWRpbmcgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBnb29nbGUgIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZ29vZ2xlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdnb29nbGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIExPR0lOIFdJVEggR09PR0xFXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZmFjZWJvb2sgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9mYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZmFjZWJvb2snXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIExPR0lOIFdJVEggRkFDRUJPT0tcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BdXRoLnByb3BUeXBlcyA9IHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEF1dGggZnJvbSAnLi9BdXRoJztcbmltcG9ydCB7IGxvZ2luUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgJy4vQXV0aC5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgbG9naW5SZWdpc3RlcjogKGRhdGEsIHVybCkgPT4gZGlzcGF0Y2gobG9naW5SZWdpc3RlcihkYXRhLCB1cmwpKSxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IG1lc3NhZ2UgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coeyBraW5kOiAnZGFuZ2VyJywgbWVzc2FnZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEF1dGgpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQge1xuICBVc2VyU2hhcGUsXG4gIE1vdmllU2hhcGUsXG4gIEdlbnJlU2hhcGUsXG4gIEZpbHRlclNoYXBlLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjb3ZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sb2FkTW92aWVzID0gdGhpcy5sb2FkTW92aWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRRdWVyeSA9IHRoaXMuc2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0R2VucmVzLCB0b2dnbGVGaWx0ZXIsIG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gbWF0Y2g7XG5cbiAgICBnZXRHZW5yZXMoKTtcblxuICAgIGlmIChbJy9jb21pbmctc29vbicsICcvaW4tdGhlYXRlcnMnXS5pbmRleE9mKHBhdGgpICE9PSAtMSkge1xuICAgICAgdGhpcy5zZXRRdWVyeSh7IGZpZWxkOiAnZmlsdGVyJywgdmFsdWU6IHBhdGgucmVwbGFjZSgnLycsICcnKSB9KTtcbiAgICAgIHRvZ2dsZUZpbHRlcihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZE1vdmllcygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgY29uc3QgeyBzZXRRdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRRdWVyeShxdWVyeSkudGhlbih0aGlzLmxvYWRNb3ZpZXMpO1xuICB9XG5cbiAgbG9hZE1vdmllcygpIHtcbiAgICBjb25zdCB7IGdldE1vdmllcywgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0TW92aWVzKHF1ZXJ5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb3ZpZXMsXG4gICAgICB1c2VyLFxuICAgICAgaXNMb2dnZWRJbixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBnZW5yZXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgc2hvd0ZpbHRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gcGF0aE5hbWU9e2xvY2F0aW9uLnBhdGhuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxGaWx0ZXIgc2hvdz17c2hvd0ZpbHRlcn0gZ2VucmVzPXtnZW5yZXN9IHNldFF1ZXJ5PXt0aGlzLnNldFF1ZXJ5fSBxdWVyeT17cXVlcnl9IC8+XG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e21vdmllc30gaWQ9XCJsaXN0XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG0tMVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTW92aWVzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtYi0yICR7bG9hZGluZyA/ICdkLW5vbmUnIDogJ2QtYmxvY2snfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8U3Bpbm5lciBzaG93PXtsb2FkaW5nfSBzaXplPVwibWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkRpc2NvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHNob3dGaWx0ZXI6IHRydWUsXG4gIHVzZXI6IHt9LFxufTtcblxuRGlzY292ZXIucHJvcFR5cGVzID0ge1xuICBnZXRNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldEdlbnJlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9EaXNjb3Zlcic7XG5pbXBvcnQgeyB0b2dnbGVGaWx0ZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQge1xuICBnZXRNb3ZpZXMsXG4gIHNldFF1ZXJ5LFxuICBnZXRHZW5yZXMsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvZGlzY292ZXInO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuZGlzY292ZXIudXNlcixcbiAgcXVlcnk6IHN0YXRlLmRpc2NvdmVyLnF1ZXJ5LFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxuICBtb3ZpZXM6IHN0YXRlLmRpc2NvdmVyLm1vdmllcyxcbiAgZ2VucmVzOiBzdGF0ZS5kaXNjb3Zlci5nZW5yZXMsXG4gIHNob3dGaWx0ZXI6IHN0YXRlLmNvbW1vbi5zaG93RmlsdGVyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllczogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TW92aWVzKHF1ZXJ5KSksXG4gIHNldFF1ZXJ5OiBxdWVyeSA9PiBkaXNwYXRjaChzZXRRdWVyeShxdWVyeSkpLFxuICBnZXRHZW5yZXM6ICgpID0+IGRpc3BhdGNoKGdldEdlbnJlcygpKSxcbiAgdG9nZ2xlRmlsdGVyOiBzaG93ID0+IGRpc3BhdGNoKHRvZ2dsZUZpbHRlcihzaG93KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKERpc2NvdmVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZmlsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXInO1xuaW1wb3J0IFRhYmxlTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL1RhYmxlTGlzdCc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExpc3RzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGxpc3Q6IHt9LFxuICAgICAgc2VsZWN0ZWQ6IHt9LFxuICAgICAgcXVlcnk6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRRdWVyeSA9IHRoaXMuc2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldExpc3RzID0gdGhpcy5nZXRMaXN0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5nZXRMaXN0cygpO1xuICAgIGdldEFjY291bnREZXRhaWwoKTtcbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5xdWVyeSwgcXVlcnkpLFxuICAgIH0pLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIGdldExpc3RzKCkge1xuICAgIGNvbnN0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBxdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHt9IH0pO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgfVxuXG4gIGRlc3Ryb3koKSB7XG4gICAgY29uc3QgeyBkZWxldGVMaXN0LCB0b2dnbGVBbGVydERpYWxvZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKCFzZWxlY3RlZCB8fCAhc2VsZWN0ZWQuaWQpIHtcbiAgICAgIHJldHVybiB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICd3YXJuaW5nJyxcbiAgICAgICAgbWVzc2FnZTogJ05vIHNlbGVjdGVkIGRhdGEuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGRlbGV0ZUxpc3Qoc2VsZWN0ZWQuaWQsIHRoaXMuZ2V0TGlzdHMpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsaXN0OiBzZWxlY3RlZCxcbiAgICB9LCB0aGlzLnRvZ2dsZU1vZGFsKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93TW9kYWw6ICFwcmV2U3RhdGUuc2hvd01vZGFsLFxuICAgIH0pKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC5wYXJzZWRWYWx1ZSB8fCB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAobmFtZSA9PT0gJ3B1YmxpYycpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuXG4gICAgbGlzdFtuYW1lXSA9IHZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3QgfSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHNhdmVMaXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGlzdC5wdWJsaWMgPSBOdW1iZXIucGFyc2VJbnQobGlzdC5wdWJsaWMsIDEwKTtcblxuICAgIHNhdmVMaXN0KGxpc3QsICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBxdWVyeSxcbiAgICAgIHNob3dNb2RhbCxcbiAgICAgIGxpc3QsXG4gICAgICBzZWxlY3RlZCxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIHVzZXIsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHRvdGFsLFxuICAgICAgdGFibGVGaWVsZHMsXG4gICAgICBsaXN0cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICA8VGFibGVMaXN0XG4gICAgICAgICAgICB0aXRsZT1cIk15IExpc3RzXCJcbiAgICAgICAgICAgIGRhdGE9e2xpc3RzfVxuICAgICAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlfVxuICAgICAgICAgICAgb25EZWxldGU9e3RoaXMuZGVzdHJveX1cbiAgICAgICAgICAgIG9uRWRpdD17dGhpcy51cGRhdGV9XG4gICAgICAgICAgICBvblNlbGVjdD17cyA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHMgfSl9XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWR9XG4gICAgICAgICAgICBmaWVsZHM9e3RhYmxlRmllbGRzfVxuICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICB0b3RhbCxcbiAgICAgICAgICAgICAgcGFnZTogcXVlcnkucGFnZSxcbiAgICAgICAgICAgICAgbGltaXQ6IHF1ZXJ5LmxpbWl0LFxuICAgICAgICAgICAgICBidXR0b25Db3VudDogNSxcbiAgICAgICAgICAgICAgb25QYWdpbmF0ZTogdGhpcy5zZXRRdWVyeSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd01vZGFsfSB0aXRsZT1cIkNyZWF0ZSBMaXN0XCIgY2FuY2VsPXt0aGlzLnRvZ2dsZU1vZGFsfSBzdWJtaXQ9e3RoaXMuc2F2ZX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWw+TGlzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMaXN0IE5hbWVcIlxuICAgICAgICAgICAgICB2YWx1ZT17bGlzdC5uYW1lfVxuICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIxXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e2xpc3QucHVibGljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIFB1YmxpYyBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjBcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17IWxpc3QucHVibGljfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImZvcm0tY2hlY2stbGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgIFByaXZhdGUgTGlzdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuTGlzdHMuZGVmYXVsdFByb3BzID0ge1xuICB0b3RhbDogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzYXZlTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IGdldExpc3RCeUN1cnJlbnRVc2VyLCBzYXZlTGlzdCwgZGVsZXRlTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBMaXN0cyBmcm9tICcuL0xpc3RzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbGlzdHM6IHN0YXRlLmxpc3RzLmxpc3RzLFxuICB0b3RhbDogc3RhdGUubGlzdHMudG90YWwsXG4gIHRhYmxlRmllbGRzOiBzdGF0ZS5saXN0cy50YWJsZUZpZWxkcyxcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmFjY291bnQudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnkpKSxcbiAgc2F2ZUxpc3Q6IChsaXN0LCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goc2F2ZUxpc3QobGlzdCwgY2FsbGJhY2spKSxcbiAgZGVsZXRlTGlzdDogKGlkLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goZGVsZXRlTGlzdChpZCwgY2FsbGJhY2spKSxcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IGFsZXJ0ID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKGFsZXJ0KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKExpc3RzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0xpc3RNb2RhbDogZmFsc2UsXG4gICAgICBsaXN0OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlTGlzdE1vZGFsID0gdGhpcy50b2dnbGVMaXN0TW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBnZXRMaXN0QnlDdXJyZW50VXNlciwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW92aWVJZCA9IG1hdGNoLnBhcmFtcy5pZDtcbiAgICBnZXRNb3ZpZURldGFpbChtb3ZpZUlkKTtcbiAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0LCBtb3ZpZUlkKTtcbiAgfVxuXG4gIHRvZ2dsZUxpc3RNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd0xpc3RNb2RhbDogIXByZXZTdGF0ZS5zaG93TGlzdE1vZGFsLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dMaXN0TW9kYWwsIGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICBkZXRhaWwsXG4gICAgICB1c2VyLFxuICAgICAgaXNMb2dnZWRJbixcbiAgICAgIGxpc3RzLFxuICAgICAgYWRkVG9MaXN0LFxuICAgICAgcmVtb3ZlRnJvbUxpc3QsXG4gICAgICBnZXRMaXN0QnlDdXJyZW50VXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgIDxQcm9ncmVzc0JhciBzaG93IGNvbG9yPVwiaW5mb1wiIC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvID0gZGV0YWlsLnZpZGVvcy5sZW5ndGggPiAwXG4gICAgICA/IDxWaWRlbyB2aWRlb0tleT17ZGV0YWlsLnZpZGVvc1swXS5rZXl9IC8+XG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTJcIiBzcmM9e2RldGFpbC5wb3N0ZXJQYXRofSBhbHQ9e2RldGFpbC50aXRsZX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTBcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJBZGQgVG8gTGlzdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTGlzdE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDb21wYW55TGlzdCBjb21wYW5pZXM9e2RldGFpbC5wcm9kdWN0aW9uX2NvbXBhbmllc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTYgbWItMlwiPlxuICAgICAgICAgICAgICB7dmlkZW99XG4gICAgICAgICAgICAgIDxEZXRhaWxUYWJsZSBtb3ZpZT17ZGV0YWlsfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgPENhc3RMaXN0IGNhc3RzPXtkZXRhaWwuY3JlZGl0cy5jYXN0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0xpc3RNb2RhbH0gdGl0bGU9XCJBZGQgVG8gTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVMaXN0TW9kYWx9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICB7bGlzdHMubWFwKGwgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsaXN0LWdyb3VwLWl0ZW0gcm91bmRlZC0wICR7bC5pc0FkZGVkID8gJ2xpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzJyA6ICcgJ31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICB7bC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbSBidG4tb3V0bGluZS0ke2wuaXNBZGRlZCA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZpZUlkID0gbWF0Y2gucGFyYW1zLmlkO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdElkOiBsLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwuaXNBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZFRvTGlzdChsaXN0T2JqZWN0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGlzdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKGxpc3QsIG1vdmllSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZUZyb21MaXN0KGxpc3RPYmplY3QsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGlzdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0LCBtb3ZpZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtgJHtsLmlzQWRkZWQgPyAndHJhc2gnIDogJ3BsdXMtc3F1YXJlJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGFkZFRvTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlRnJvbUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZXRhaWw6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgbGlzdHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciwgYWRkVG9MaXN0LCByZW1vdmVGcm9tTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBkZXRhaWw6IHN0YXRlLm1vdmllLmRldGFpbCxcbiAgdXNlcjogc3RhdGUuZGlzY292ZXIudXNlcixcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbGlzdHM6IHN0YXRlLmxpc3RzLmxpc3RzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogKHF1ZXJ5LCBtb3ZpZUlkKSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSwgbW92aWVJZCkpLFxuICBhZGRUb0xpc3Q6IChsaXN0TW92aWUsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChhZGRUb0xpc3QobGlzdE1vdmllLCBjYWxsYmFjaykpLFxuICByZW1vdmVGcm9tTGlzdDogKGxpc3RNb3ZpZSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJlbW92ZUZyb21MaXN0KGxpc3RNb3ZpZSwgY2FsbGJhY2spKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTW92aWUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAnLi4vc2NyaXB0cyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZS1zdG9yZSc7XG5pbXBvcnQgUm9vdCBmcm9tICcuL1Jvb3QnO1xuaW1wb3J0IGZvbnRBd2Vzb21lIGZyb20gJy4uL2xpYi9mb250LWF3ZXNvbWUnO1xuXG5mb250QXdlc29tZSgpOyAvLyBpbml0IGZvbnQgYXdzb21lIGljb25zXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxucmVuZGVyKFxuICA8Um9vdCBzdG9yZT17c3RvcmV9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyksXG4pO1xuIiwiaW1wb3J0IHsgU0VUX0FDQ09VTlRfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2NvdW50KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0FDQ09VTlRfREVUQUlMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFRPR0dMRV9BTEVSVCxcbiAgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgVE9HR0xFX0ZJTFRFUixcbiAgU0VUX1VQTE9BREVEX0lNQUdFLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93QWxlcnQ6IGZhbHNlLFxuICBhbGVydE1lc3NhZ2U6IG51bGwsXG4gIGFsZXJ0S2luZDogJ2luZm8nLFxuICBwYWdlTG9hZGluZzogdHJ1ZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNob3dGaWx0ZXI6IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21tb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUT0dHTEVfQUxFUlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc2hvd0FsZXJ0OiAhc3RhdGUuc2hvd0FsZXJ0LFxuICAgICAgICBhbGVydE1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgICBhbGVydEtpbmQ6IGFjdGlvbi5raW5kLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHBhZ2VMb2FkaW5nOiBhY3Rpb24ucGFnZUxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0xPQURJTkdfU1RBVFVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5sb2FkaW5nLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFRPR0dMRV9GSUxURVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc2hvd0ZpbHRlcjogIXN0YXRlLnNob3dGaWx0ZXIsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1VQTE9BREVEX0lNQUdFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHVwbG9hZGVkQXZhdGFyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFUywgU0VUX0dFTlJFUywgU0VUX1FVRVJZIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuXG5jb25zdCB1c2VyID0ge1xuICBpZDogY29va2llLmdldCgndXNlcl9pZCcpLFxuICB1c2VyTmFtZTogY29va2llLmdldCgndXNlcm5hbWUnKSxcbiAgZnJpc3ROYW1lOiBjb29raWUuZ2V0KCd1c2VyX2ZpcnN0X25hbWUnKSxcbiAgbGFzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfbGFzdF9uYW1lJyksXG4gIGVtYWlsOiBjb29raWUuZ2V0KCd1c2VyX2VtYWlsJyksXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXIsXG4gIGdlbnJlczogW10sXG4gIG1vdmllczogW10sXG4gIHRvdGFsOiAwLFxuICB0b3RhbFBhZ2U6IDEsXG4gIHF1ZXJ5OiB7XG4gICAgcGFnZTogMSxcbiAgICBzb3J0Qnk6ICdwb3B1bGFyaXR5LmRlY3MnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgIHdpdGhHZW5yZXM6IFtdLFxuICAgIHllYXI6IG51bGwsXG4gICAgY3Jld3M6IFtdLFxuICAgIGNhc3RzOiBbXSxcbiAgfSxcbiAgaXNMb2dnZWRJbjogISF1c2VyLmVtYWlsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzY292ZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTU9WSUVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogc3RhdGUubW92aWVzLmNvbmNhdChhY3Rpb24ubW92aWVzKSxcbiAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcbiAgICAgICAgdG90YWxQYWdlczogYWN0aW9uLnRvdGFsUGFnZXMsXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5xdWVyeSwge1xuICAgICAgICAgIHBhZ2U6IGFjdGlvbi5wYWdlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfR0VOUkVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGdlbnJlczogYWN0aW9uLmdlbnJlcyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfUVVFUlk6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBbXSxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICBbYWN0aW9uLmZpZWxkXTogYWN0aW9uLnZhbHVlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyBUT0RPOiBNb3ZlIHVzZXIgb2JqZWN0IHRvIGFjY291bnQgcmVkdWNlclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgYWNjb3VudCBmcm9tICcuL2FjY291bnQnO1xuaW1wb3J0IGRpc2NvdmVyIGZyb20gJy4vZGlzY292ZXInO1xuaW1wb3J0IG1vdmllIGZyb20gJy4vbW92aWUnO1xuaW1wb3J0IGxpc3RzIGZyb20gJy4vbGlzdHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFjY291bnQsXG4gIGRpc2NvdmVyLFxuICBtb3ZpZSxcbiAgbGlzdHMsXG4gIGNvbW1vbixcbn0pO1xuIiwiaW1wb3J0IHsgU0VUX0xJU1RTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdHM6IFtdLFxuICB0b3RhbDogMCxcbiAgdGFibGVGaWVsZHM6IFt7XG4gICAgdGl0bGU6ICdJZCcsXG4gICAgbmFtZTogJ2lkJyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sIHtcbiAgICB0aXRsZTogJ05hbWUnLFxuICAgIG5hbWU6ICduYW1lJyxcbiAgfSwge1xuICAgIHRpdGxlOiAnQ3JlYXRlIERhdGUnLFxuICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gIH0sIHtcbiAgICB0aXRsZTogJ1Zpc2liaWxpdHknLFxuICAgIG5hbWU6ICdwdWJsaWMnLFxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlID8gJ1B1YmxpYycgOiAnUHJpdmF0ZSc7XG4gICAgfSxcbiAgfV0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9MSVNUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsaXN0czogYWN0aW9uLnBheWxvYWQubGlzdHMsXG4gICAgICAgIHRvdGFsOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRldGFpbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRV9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24uZGV0YWlsLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgKSxcbiAgKTtcbn1cbiIsIlxuaW1wb3J0IHtcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXMsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICBzZXRMb2FkaW5nU3RhdHVzLFxufSBmcm9tICcuLi9hcHAvYWN0aW9ucy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcblxuICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuXG4gICAgc3dpdGNoIChzdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDQwNDpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9wYWdlLW5vdC1mb3VuZGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgQUxFUlRfVFlQRVMgPSBbXG4gICdwcmltYXJ5JyxcbiAgJ3NlY29uZGFyeScsXG4gICdzdWNjZXNzJyxcbiAgJ2RhbmdlcicsXG4gICd3YXJuaW5nJyxcbiAgJ2luZm8nLFxuICAnbGlnaHQnLFxuICAnZGFyaycsXG5dO1xuXG5leHBvcnQgY29uc3QgQUxFUlRfVFlQRV9JQ09OX01BUCA9IHtcbiAgcHJpbWFyeTogJycsXG59O1xuIiwiY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5cbmNvbnN0IHNldCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBkb2MuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xufTtcblxuY29uc3QgZ2V0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvYy5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBbY25hbWUsIGN2YWx1ZV0gPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGNuYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBjdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQsXG4gIHNldCxcbn07XG4iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7XG4gIGZhVXNlcixcbiAgZmFTaWduT3V0QWx0LFxuICBmYUVudmVsb3BlLFxuICBmYVVubG9jayxcbiAgZmFBbGlnbkxlZnQsXG4gIGZhS2V5LFxuICBmYVNpZ25hdHVyZSxcbiAgZmFGaWx0ZXIsXG4gIGZhU29ydEFtb3VudFVwLFxuICBmYVNvcnRBbW91bnREb3duLFxuICBmYVVzZXJDaXJjbGUsXG4gIGZhTGlzdCxcbiAgZmFTdGFyLFxuICBmYUhlYXJ0LFxuICBmYUNvbW1lbnQsXG4gIGZhU3dhdGNoYm9vayxcbiAgZmFVc2VyRnJpZW5kcyxcbiAgZmFDb2csXG4gIGZhRWRpdCxcbiAgZmFVcGxvYWQsXG4gIGZhTmV3c3BhcGVyLFxuICBmYUF0LFxuICBmYUFuZ2xlUmlnaHQsXG4gIGZhQW5nbGVMZWZ0LFxuICBmYVBsdXNTcXVhcmUsXG4gIGZhVHJhc2gsXG4gIGZhQ2hlY2ssXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge1xuICBmYUZhY2Vib29rLFxuICBmYUdvb2dsZSxcbiAgZmFUd2l0dGVyLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxpYnJhcnkuYWRkKFxuICAgIGZhVXNlcixcbiAgICBmYVNpZ25PdXRBbHQsXG4gICAgZmFFbnZlbG9wZSxcbiAgICBmYVVubG9jayxcbiAgICBmYUFsaWduTGVmdCxcbiAgICBmYUtleSxcbiAgICBmYVNpZ25hdHVyZSxcbiAgICBmYUZpbHRlcixcbiAgICBmYVNvcnRBbW91bnRVcCxcbiAgICBmYVNvcnRBbW91bnREb3duLFxuICAgIGZhRmFjZWJvb2ssXG4gICAgZmFHb29nbGUsXG4gICAgZmFUd2l0dGVyLFxuICAgIGZhSW5zdGFncmFtLFxuICAgIGZhVXNlckNpcmNsZSxcbiAgICBmYUxpc3QsXG4gICAgZmFTdGFyLFxuICAgIGZhSGVhcnQsXG4gICAgZmFDb21tZW50LFxuICAgIGZhU3dhdGNoYm9vayxcbiAgICBmYVVzZXJGcmllbmRzLFxuICAgIGZhQ29nLFxuICAgIGZhRWRpdCxcbiAgICBmYVVwbG9hZCxcbiAgICBmYU5ld3NwYXBlcixcbiAgICBmYUF0LFxuICAgIGZhQW5nbGVSaWdodCxcbiAgICBmYUFuZ2xlTGVmdCxcbiAgICBmYVBsdXNTcXVhcmUsXG4gICAgZmFUcmFzaCxcbiAgICBmYUNoZWNrLFxuICApO1xufVxuIiwiKCgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9