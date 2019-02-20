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
exports.setUploadedImage = exports.toggleFilter = exports.setLoadingStatus = exports.setPageLoadingStatus = exports.toggleAlertDialog = exports.setAlertStatus = undefined;

var _actionTypes = __webpack_require__(/*! ../constants/action-types */ "./app/assets/javascript/app/constants/action-types.js");

var setAlertStatus = exports.setAlertStatus = function setAlertStatus(_ref) {
  var message = _ref.message,
      kind = _ref.kind;
  return {
    type: _actionTypes.TOGGLE_ALERT,
    message: message,
    kind: kind
  };
};

var toggleAlertDialog = exports.toggleAlertDialog = function toggleAlertDialog(_ref2) {
  var message = _ref2.message,
      kind = _ref2.kind;
  return function (dispatch) {
    dispatch(setAlertStatus({ message: message, kind: kind }));
    setTimeout(function () {
      dispatch(setAlertStatus({}));
    }, 3000);
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
exports.setListMovies = setListMovies;
exports.getListMovies = getListMovies;

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
    return {
      type: _actionTypes.SET_LISTS,
      payload: {
        lists: [],
        total: 0
      }
    };
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

function setListMovies(_ref5) {
  var rows = _ref5.rows,
      count = _ref5.count;

  return {
    type: _actionTypes.SET_LIST_MOVIES,
    payload: {
      movies: rows,
      total: count
    }
  };
}

function getListMovies(query, callback) {
  var listId = query.listId,
      page = query.page,
      limit = query.limit;


  return function (dispatch) {
    dispatch((0, _common.setLoadingStatus)(true));
    _axios2.default.get('/api/lists/' + listId + '?page=' + page + '&limit=' + limit).then(function (response) {
      dispatch((0, _common.setLoadingStatus)(false));
      dispatch(setListMovies(response.data));
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
  var cast = _ref.cast;
  return _react2.default.createElement(
    'div',
    { className: 'cast' },
    _react2.default.createElement('img', { className: 'image', src: cast.profilePath, alt: cast.name }),
    _react2.default.createElement(
      'div',
      { className: 'cast-info' },
      _react2.default.createElement(
        'span',
        { className: 'has-text-weight-bold' },
        cast.name
      ),
      _react2.default.createElement(
        'span',
        { className: 'has-text-weight-light' },
        cast.character
      )
    )
  );
};

Cast.defaultProps = {
  cast: {}
};

Cast.propTypes = {
  cast: _propShapes.CastShape
};

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
    return _react2.default.createElement(_Cast2.default, { cast: c, key: c.id });
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

CastList.defaultProps = {
  casts: []
};

CastList.propTypes = {
  casts: _propTypes2.default.arrayOf(_propShapes.CastShape)
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
  var company = _ref.company;

  var logoPath = company.logo ? vissne.imagesSecureBaseUrl + '/w92/' + company.logo : vissne.cdn + '/images/placeholder.png';

  return _react2.default.createElement(
    'div',
    { className: 'media mb-2' },
    _react2.default.createElement('img', { className: 'mr-3 company-logo', src: logoPath, alt: company.name }),
    _react2.default.createElement(
      'div',
      { className: 'media-body' },
      _react2.default.createElement(
        'h6',
        { className: 'mt-0' },
        company.name
      )
    )
  );
};

Company.propTypes = {
  company: _propShapes.CompanyShape.isRequired
};

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
          return _react2.default.createElement(_Company2.default, { key: c.id, company: c });
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
  show: false,
  submit: null
};

Modal.propTypes = {
  title: _propTypes2.default.string.isRequired,
  cancel: _propTypes2.default.func.isRequired,
  submit: _propTypes2.default.func,
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
      { key: movie.id, className: 'col-12 col-sm-6 col-md-4 col-lg-3 mb-2 d-flex justify-content-center' },
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

var Poster = function Poster(_ref) {
  var src = _ref.src,
      alt = _ref.alt;
  return _react2.default.createElement(
    'div',
    { className: 'h-100 w-100 d-flex align-items-center justify-content-center' },
    _react2.default.createElement('img', {
      className: 'img-fluid lazy',
      src: vissne.cdn + '/' + vissne.defaultCoverImagePath,
      'data-src': src,
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
  var title = props.title,
      data = props.data,
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
          { onClick: onCreate, className: 'btn btn-outline-primary w-100 ' + (onCreate ? '' : 'd-none'), type: 'button' },
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
      _react2.default.createElement(
        'h4',
        null,
        title
      ),
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
var SET_LIST_MOVIES = exports.SET_LIST_MOVIES = 'SET_LIST_MOVIES';

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
  id: _propTypes2.default.string,
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
      movieQuery: {
        page: 1,
        limit: 10
      },
      listQuery: {
        page: 1,
        limit: 10
      },
      list: {},
      selected: {},
      selectedMovie: {},
      movieTableFields: [{
        title: 'Id',
        name: 'id',
        hidden: true
      }, {
        title: 'Poster',
        name: 'poster',
        format: function format(src) {
          return _react2.default.createElement('img', { height: '70', src: src, alt: 'List Movie' });
        }
      }, {
        title: 'Title',
        name: 'title'
      }, {
        title: 'Rating',
        name: 'rating'
      }],
      listTableFields: [{
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
      }, {
        title: 'Movies',
        name: 'totalMovie'
      }, {
        title: '',
        name: 'id',
        format: function format(id) {
          return _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-center' },
            _react2.default.createElement(
              'button',
              { className: 'btn btn-link', type: 'button', onClick: function onClick() {
                  return _this.showListMovies(id);
                } },
              _react2.default.createElement(_reactFontawesome.FontAwesomeIcon, { icon: 'list' })
            )
          );
        }
      }]
    };

    _this.setListQuery = _this.setListQuery.bind(_this);
    _this.setMovieQuery = _this.setMovieQuery.bind(_this);
    _this.getLists = _this.getLists.bind(_this);
    _this.toggleModal = _this.toggleModal.bind(_this);
    _this.create = _this.create.bind(_this);
    _this.destroy = _this.destroy.bind(_this);
    _this.update = _this.update.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    _this.save = _this.save.bind(_this);
    _this.showListMovies = _this.showListMovies.bind(_this);
    _this.backToList = _this.backToList.bind(_this);
    _this.deleteFromList = _this.deleteFromList.bind(_this);
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
    key: 'setListQuery',
    value: function setListQuery(listQuery) {
      this.setState(function (prevState) {
        return {
          listQuery: Object.assign(prevState.listQuery, listQuery)
        };
      }, this.getLists);
    }
  }, {
    key: 'setMovieQuery',
    value: function setMovieQuery(movieQuery) {
      this.setState(function (prevState) {
        return {
          movieQuery: Object.assign(prevState.movieQuery, movieQuery)
        };
      }, this.getLists);
    }
  }, {
    key: 'getLists',
    value: function getLists() {
      var getListByCurrentUser = this.props.getListByCurrentUser;
      var listQuery = this.state.listQuery;

      getListByCurrentUser(listQuery);
    }
  }, {
    key: 'getListMovies',
    value: function getListMovies() {
      var getListMovies = this.props.getListMovies;
      var movieQuery = this.state.movieQuery;

      if (movieQuery.listId) {
        getListMovies(movieQuery);
      }
    }
  }, {
    key: 'deleteFromList',
    value: function deleteFromList() {
      var _state = this.state,
          selectedMovie = _state.selectedMovie,
          selected = _state.selected;
      var removeFromList = this.props.removeFromList;

      removeFromList({
        listId: selected.id,
        movieId: selectedMovie.id
      });
    }
  }, {
    key: 'backToList',
    value: function backToList() {
      this.setState({
        showMovies: false,
        selectedMovie: {},
        movieQuery: {
          page: 1,
          limit: 10
        }
      });
    }
  }, {
    key: 'showListMovies',
    value: function showListMovies(listId) {
      this.setState(function (prevState) {
        return {
          showMovies: true,
          selected: {},
          movieQuery: Object.assign(prevState.movieQuery, {
            listId: listId
          })
        };
      }, this.getListMovies);
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
    key: 'create',
    value: function create() {
      this.setState({ list: {} });
      this.toggleModal();
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

      var _state2 = this.state,
          listQuery = _state2.listQuery,
          movieQuery = _state2.movieQuery,
          showModal = _state2.showModal,
          list = _state2.list,
          selected = _state2.selected,
          selectedMovie = _state2.selectedMovie,
          listTableFields = _state2.listTableFields,
          movieTableFields = _state2.movieTableFields,
          showMovies = _state2.showMovies;
      var _props2 = this.props,
          match = _props2.match,
          user = _props2.user,
          pageLoading = _props2.pageLoading,
          totalList = _props2.totalList,
          totalMovie = _props2.totalMovie,
          movies = _props2.movies,
          lists = _props2.lists;


      var content = _react2.default.createElement(_TableList2.default, {
        data: lists,
        onCreate: this.create,
        onDelete: this.destroy,
        onEdit: this.update,
        onSelect: function onSelect(s) {
          return _this3.setState({ selected: s });
        },
        selected: selected,
        fields: listTableFields,
        pagination: {
          total: totalList,
          page: listQuery.page,
          limit: listQuery.limit,
          buttonCount: 5,
          onPaginate: this.setListQuery
        }
      });

      if (showMovies) {
        content = _react2.default.createElement(
          _react.Fragment,
          null,
          _react2.default.createElement(
            'div',
            { className: 'd-flex justify-content-between mt-2' },
            _react2.default.createElement(
              'span',
              { style: { fontSize: '26px', fontWeight: 'bold' } },
              'Movies'
            ),
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'btn btn-outline-primary rounded-0', onClick: this.backToList },
              'Back To List'
            )
          ),
          _react2.default.createElement(_TableList2.default, {
            data: movies,
            onDelete: this.deleteFromList,
            onSelect: function onSelect(s) {
              return _this3.setState({ selectedMovie: s });
            },
            selected: selectedMovie,
            fields: movieTableFields,
            pagination: {
              total: totalMovie,
              page: movieQuery.page,
              limit: movieQuery.limit,
              buttonCount: 5,
              onPaginate: this.setListQuery
            }
          })
        );
      }

      return _react2.default.createElement(
        _react.Fragment,
        null,
        _react2.default.createElement(_Navbar2.default, { user: user }),
        _react2.default.createElement(
          _ProfileContainer2.default,
          { user: user, path: match.path, pageLoading: pageLoading },
          content
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
  totalList: 0,
  totalMovie: 0
};

Lists.propTypes = {
  toggleAlertDialog: _propTypes2.default.func.isRequired,
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  getAccountDetail: _propTypes2.default.func.isRequired,
  getListMovies: _propTypes2.default.func.isRequired,
  deleteList: _propTypes2.default.func.isRequired,
  saveList: _propTypes2.default.func.isRequired,
  pageLoading: _propTypes2.default.bool.isRequired,
  totalList: _propTypes2.default.number,
  totalMovie: _propTypes2.default.number
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

var _Lists = __webpack_require__(/*! ./Lists */ "./app/assets/javascript/app/containers/Lists/Lists.jsx");

var _Lists2 = _interopRequireDefault(_Lists);

var _account = __webpack_require__(/*! ../../actions/account */ "./app/assets/javascript/app/actions/account.js");

var _common = __webpack_require__(/*! ../../actions/common */ "./app/assets/javascript/app/actions/common.js");

var _lists = __webpack_require__(/*! ../../actions/lists */ "./app/assets/javascript/app/actions/lists.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state) {
  return {
    lists: state.lists.lists,
    total: state.lists.total,
    movies: state.lists.movies,
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
    },
    getListMovies: function getListMovies(query) {
      return dispatch((0, _lists.getListMovies)(query));
    },
    removeFromList: function removeFromList(listMovie) {
      return dispatch((0, _lists.removeFromList)(listMovie));
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
  isLoggedIn: false,
  detail: null
};

Movie.propTypes = {
  getMovieDetail: _propTypes2.default.func.isRequired,
  addToList: _propTypes2.default.func.isRequired,
  removeFromList: _propTypes2.default.func.isRequired,
  getListByCurrentUser: _propTypes2.default.func.isRequired,
  detail: _propTypes2.default.instanceOf(Object),
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
    sortBy: 'popularity.desc',
    filter: null,
    searchText: '',
    withGenres: [],
    year: '',
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
  totalList: 0,
  movies: [],
  totalMovie: 0
};

function lists() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _actionTypes.SET_LISTS:
      return Object.assign({}, state, {
        lists: action.payload.lists,
        totalList: action.payload.total
      });

    case _actionTypes.SET_LIST_MOVIES:
      return Object.assign({}, state, {
        movies: action.payload.movies,
        totalMovie: action.payload.total
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


var _yallJs = __webpack_require__(/*! yall-js */ "./node_modules/yall-js/src/yall.mjs");

var _yallJs2 = _interopRequireDefault(_yallJs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var win = window;

  document.addEventListener('DOMContentLoaded', function () {
    (0, _yallJs2.default)({
      observeChanges: true
    });
  });

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJzZXRBbGVydFN0YXR1cyIsIlRPR0dMRV9BTEVSVCIsInRvZ2dsZUFsZXJ0RGlhbG9nIiwic2V0VGltZW91dCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNldExpc3RNb3ZpZXMiLCJnZXRMaXN0TW92aWVzIiwibGlzdHMiLCJTRVRfTElTVFMiLCJtb3ZpZUlkIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwicm93cyIsImNvdW50IiwibGlzdCIsImNhbGxiYWNrIiwib3BzIiwibWV0aG9kIiwicmVzdWx0IiwiZGVsZXRlIiwibGlzdElkIiwiU0VUX0xJU1RfTU9WSUVTIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsImNhc3QiLCJwcm9maWxlUGF0aCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJDYXN0U2hhcGUiLCJDYXN0TGlzdCIsImNhc3RzIiwiY2FzdExpc3QiLCJtYXAiLCJjIiwiYXJyYXlPZiIsIkNvbXBhbnkiLCJjb21wYW55IiwibG9nb1BhdGgiLCJsb2dvIiwidmlzc25lIiwiaW1hZ2VzU2VjdXJlQmFzZVVybCIsImNkbiIsIkNvbXBhbnlTaGFwZSIsIkNvbXBhbnlMaXN0IiwiY29tcGFuaWVzIiwiRGV0YWlsVGFibGUiLCJtb3ZpZSIsIm9yZ2luYWxUaXRsZSIsInllYXIiLCJ2b3RlX2F2ZXJhZ2UiLCJ2b3RlX2NvdW50IiwicmVsZWFzZV9kYXRlIiwiZ2VucmVOYW1lcyIsInRhZ2xpbmUiLCJjb3VudHJpZXMiLCJsYW5ndWFnZSIsImRpcmVjdG9yIiwid3JpdGVyIiwiaG9tZXBhZ2UiLCJNb3ZpZVNoYXBlIiwic3dpdGNoU29ydFF1ZXJ5Iiwic29ydEJ5Iiwic3BsaXQiLCJhZGRHZW5yZUlkIiwiY3VycmVudEdlbnJlcyIsImluZGV4IiwiaW5kZXhPZiIsInB1c2giLCJzcGxpY2UiLCJoYW5kbGVDaGFuZ2VZZWFyIiwiTnVtYmVyIiwiaXNOYU4iLCJGaWx0ZXIiLCJzb3J0SWNvbkNsYXNzIiwic29ydE9wdGlvbnMiLCJTT1JUX09QVElPTlMiLCJzb3J0Iiwia2V5IiwicmVwbGFjZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZ2VucmVPcHRpb25zIiwiZyIsIndpdGhHZW5yZXMiLCJzZWFyY2hUZXh0IiwiJGV2ZW50IiwidGFyZ2V0IiwiR2VucmVTaGFwZSIsIkZpbHRlclNoYXBlIiwiZnVuYyIsIkZvb3RlciIsIk1lbnUiLCJwYXRoIiwiaXRlbXMiLCJtZW51SXRlbXMiLCJtIiwiaWNvbiIsInNoYXBlIiwiTW9kYWwiLCJ0aXRsZSIsImNhbmNlbCIsInN1Ym1pdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwic3VibWl0QnV0dG9uIiwiTW92aWVDYXJkIiwiaW1hZ2UiLCJyYXRlIiwic2x1ZyIsIm51bWJlciIsIk1vdmllTGlzdCIsInBvc3RlciIsInZvdGVBdmVyYWdlIiwiTmF2YmFyIiwiaXNMb2dnZWRJbiIsInBhdGhOYW1lIiwibG9naW5CdXR0b24iLCJ1c2VyTmFtZSIsIlVzZXJTaGFwZSIsIlBhZ2VMb2FkaW5nIiwiaGFuZGxlQ2xpY2siLCJjdXJyZW50UGFnZSIsInRvdGFsUGFnZSIsImlzSW50ZWdlciIsIm5ld1BhZ2UiLCJnZW5lcmF0ZVBhZ2VOdW1iZXJzIiwib3B0aW9ucyIsImJ1dHRvbkNvdW50IiwicGFnZU51bWJlcnMiLCJNYXRoIiwiZmxvb3IiLCJiYyIsImNlaWwiLCJQYWdpbmF0aW9uIiwib25QYWdpbmF0ZSIsInBhZ2VCdXR0b25zIiwicG4iLCJQb3N0ZXIiLCJzcmMiLCJhbHQiLCJkZWZhdWx0Q292ZXJJbWFnZVBhdGgiLCJQcm9maWxlQ29udGFpbmVyIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJjcmVhdGVIZWFkZXIiLCJmaWVsZHMiLCJ2aXNpYmxlRmllbGRzIiwiZmlsdGVyIiwiZiIsImhpZGRlbiIsImNyZWF0ZUJvZHkiLCJzZWxlY3RlZCIsIm9uU2VsZWN0IiwidGJvZHkiLCJpdGVtIiwiaXRlbUZpZWxkcyIsImZvcm1hdCIsInRvU3RyaW5nIiwiY3JlYXRlUGFnaW5hdGlvbiIsImRhdGFMZW5ndGgiLCJUYWJsZUxpc3QiLCJwYWdpbmF0aW9uIiwicmVzcG9uc2l2ZSIsIm9uQ3JlYXRlIiwib25FZGl0Iiwib25EZWxldGUiLCJidG5Hcm91cCIsImhlYWRzIiwiYm9keSIsInBhZ2luYXRpb25CdXR0b25zIiwiVmlkZW8iLCJ2aWRlb0tleSIsImRvbWFpbiIsIkxPQURJTkciLCJSRUdJU1RFUiIsIlNFVF9VU0VSIiwiR0VUX01PVklFUyIsIkdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIiLCJDUkVBVEVfTElTVCIsIkRFTEVURV9MSVNUIiwiQUREX1RPX0xJU1QiLCJERUxFVEVfRlJPTV9MSVNUIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImZ1bGxOYW1lIiwibWF0Y2hTaGFwZSIsImNyZXdzIiwibHRlIiwiZ3RlIiwicmVsZWFzZVllYXIiLCJzdGF0ZSIsImVkaXRNb2RlIiwidXNlckZvcm0iLCJ2YWxpZGF0aW9uIiwib2xkUGFzc3dvcmQiLCJuZXdQYXNzd29yZCIsImNvbmZpcm1OZXdQYXNzd29yZCIsImhhbmRsZUNoYW5nZSIsImJpbmQiLCJmb3JjZVVwZGF0ZSIsInNldFN0YXRlIiwibWF0Y2giLCJjbGFzcyIsImUiLCJlcnJvciIsIkNvbXBvbmVudCIsIm1hcFN0YXRlVG9Qcm9wcyIsImNvbW1vbiIsImFjY291bnQiLCJtYXBEaXNwYXRjaFRvUHJvcHMiLCJhbGVydCIsInNob3dBbGVydCIsImFsZXJ0TWVzc2FnZSIsImFsZXJ0S2luZCIsIkFsZXJ0RGlhbG9nIiwiZm9ybSIsImNvbmZpcm1QYXNzd29yZCIsInN3aXRjaEZvcm0iLCJlcnJvck1lc3NhZ2UiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZWdpc3RlciIsImlzVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwicHJldlN0YXRlIiwiYnV0dG9uVGV4dCIsInN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQiLCJyZWdpc3RlcklucHV0IiwiaGFuZGxlU3VibWl0IiwiZGlzY292ZXIiLCJsb2FkTW92aWVzIiwic2hvd0ZpbHRlciIsInBhdGhuYW1lIiwibW92aWVRdWVyeSIsImxpc3RRdWVyeSIsInNlbGVjdGVkTW92aWUiLCJtb3ZpZVRhYmxlRmllbGRzIiwibGlzdFRhYmxlRmllbGRzIiwiZGF0ZSIsIkRhdGUiLCJ0b0xvY2FsZURhdGVTdHJpbmciLCJzaG93TGlzdE1vdmllcyIsInNldExpc3RRdWVyeSIsInNldE1vdmllUXVlcnkiLCJnZXRMaXN0cyIsInRvZ2dsZU1vZGFsIiwiY3JlYXRlIiwiZGVzdHJveSIsInVwZGF0ZSIsInNhdmUiLCJiYWNrVG9MaXN0IiwiZGVsZXRlRnJvbUxpc3QiLCJhc3NpZ24iLCJzaG93TW92aWVzIiwic2hvd01vZGFsIiwicGFyc2VkVmFsdWUiLCJwYXJzZUludCIsInB1YmxpYyIsInRvdGFsTGlzdCIsInRvdGFsTW92aWUiLCJjb250ZW50IiwicyIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsInRhYmxlRmllbGRzIiwibGlzdE1vdmllIiwic2hvd0xpc3RNb2RhbCIsInRvZ2dsZUxpc3RNb2RhbCIsInBhcmFtcyIsInZpZGVvIiwidmlkZW9zIiwicG9zdGVyUGF0aCIsInByb2R1Y3Rpb25fY29tcGFuaWVzIiwiY3JlZGl0cyIsImwiLCJpc0FkZGVkIiwibGlzdE9iamVjdCIsImdldEVsZW1lbnRCeUlkIiwiaW5pdGlhbFN0YXRlIiwiYWN0aW9uIiwidXBsb2FkZWRBdmF0YXIiLCJmcmlzdE5hbWUiLCJjb25jYXQiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJ0aHVua01pZGRsZXdhcmUiLCJhamF4RXJyb3JIYW5kbGVyIiwic3RhdHVzQ29kZSIsIkFMRVJUX1RZUEVfSUNPTl9NQVAiLCJwcmltYXJ5IiwiZG9jIiwic2V0IiwiY29va2llcyIsImNuYW1lIiwiY3ZhbHVlIiwidHJpbSIsInVuZGVmaW5lZCIsIm1vZHVsZSIsImV4cG9ydHMiLCJpbml0IiwibGlicmFyeSIsImFkZCIsImZhVXNlciIsImZhU2lnbk91dEFsdCIsImZhRW52ZWxvcGUiLCJmYVVubG9jayIsImZhQWxpZ25MZWZ0IiwiZmFLZXkiLCJmYVNpZ25hdHVyZSIsImZhRmlsdGVyIiwiZmFTb3J0QW1vdW50VXAiLCJmYVNvcnRBbW91bnREb3duIiwiZmFGYWNlYm9vayIsImZhR29vZ2xlIiwiZmFUd2l0dGVyIiwiZmFJbnN0YWdyYW0iLCJmYVVzZXJDaXJjbGUiLCJmYUxpc3QiLCJmYVN0YXIiLCJmYUhlYXJ0IiwiZmFDb21tZW50IiwiZmFTd2F0Y2hib29rIiwiZmFVc2VyRnJpZW5kcyIsImZhQ29nIiwiZmFFZGl0IiwiZmFVcGxvYWQiLCJmYU5ld3NwYXBlciIsImZhQXQiLCJmYUFuZ2xlUmlnaHQiLCJmYUFuZ2xlTGVmdCIsImZhUGx1c1NxdWFyZSIsImZhVHJhc2giLCJmYUNoZWNrIiwid2luIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9ic2VydmVDaGFuZ2VzIiwib25sb2FkIiwicmVtb3ZlIiwiZW52IiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFz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Z0JFQyx5QkFoQkYsRUFpQkVDLHlCQWpCRixFQWtCRUMsMEJBbEJGLEVBbUJFQyw0QkFuQkYsRUFvQkVDLCtCQXBCRixFQXFCRUMsZ0NBckJGLEVBc0JFQyx3QkF0QkYsRUF1QkVDLHlCQXZCRixFQXdCRUMsMkJBeEJGLEVBeUJFQyw4QkF6QkYsRUEwQkVDLHVCQTFCRixFQTJCRUMsK0JBM0JGLEVBNEJFQyw4QkE1QkYsRUE2QkVDLCtCQTdCRixFQThCRUMsMEJBOUJGLEVBK0JFQywwQkEvQkY7QUFpQ0QsQzs7Ozs7Ozs7Ozs7Ozs7QUN2RUQ7Ozs7OztBQUVBLENBQUMsWUFBTTtBQUNMLE1BQU1DLE1BQU1yWixNQUFaOztBQUVBbVMsV0FBU21ILGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xELDBCQUFLO0FBQ0hDLHNCQUFnQjtBQURiLEtBQUw7QUFHRCxHQUpEOztBQU1BRixNQUFJRyxNQUFKLEdBQWEsWUFBTTtBQUNqQixRQUFNOVksY0FBY3lSLFNBQVMwRCxjQUFULENBQXdCLGFBQXhCLENBQXBCOztBQUVBLFFBQUluVixXQUFKLEVBQWlCO0FBQ2ZBLGtCQUFZK1ksTUFBWjtBQUNEOztBQUVELFFBQUlsVCxPQUFPbVQsR0FBUCxLQUFlLFlBQW5CLEVBQWlDO0FBQy9CLFVBQUksbUJBQW1CQyxTQUF2QixFQUFrQztBQUNoQ0Esa0JBQVVDLGFBQVYsQ0FBd0JDLFFBQXhCLENBQWlDLFFBQWpDO0FBQ0Q7QUFDRjtBQUNGLEdBWkQ7QUFhRCxDQXRCRCxJOzs7Ozs7Ozs7OztBQ0ZBLHVDIiwiZmlsZSI6ImFwcC5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbiBcdGZ1bmN0aW9uIHdlYnBhY2tKc29ucENhbGxiYWNrKGRhdGEpIHtcbiBcdFx0dmFyIGNodW5rSWRzID0gZGF0YVswXTtcbiBcdFx0dmFyIG1vcmVNb2R1bGVzID0gZGF0YVsxXTtcbiBcdFx0dmFyIGV4ZWN1dGVNb2R1bGVzID0gZGF0YVsyXTtcblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0XHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG4gXHRcdGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMgfHwgW10pO1xuXG4gXHRcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuIFx0XHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiBcdH07XG4gXHRmdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlcygpIHtcbiBcdFx0dmFyIHJlc3VsdDtcbiBcdFx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcbiBcdFx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcbiBcdFx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcbiBcdFx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuIFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG4gXHRcdFx0fVxuIFx0XHRcdGlmKGZ1bGZpbGxlZCkge1xuIFx0XHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuIFx0XHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiByZXN1bHQ7XG4gXHR9XG5cbiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4gXHQvLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbiBcdC8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHRcImFwcFwiOiAwXG4gXHR9O1xuXG4gXHR2YXIgZGVmZXJyZWRNb2R1bGVzID0gW107XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9pbmRleC5qc3hcIixcImNvbW1vblwiLFwicmVhY3RcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgUHJvdmlkZXIgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgeyBCcm93c2VyUm91dGVyIGFzIFJvdXRlciwgUm91dGUsIFN3aXRjaCB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuXG4vLyBQYWdlc1xuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vY29udGFpbmVycy9EaXNjb3Zlcic7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9jb250YWluZXJzL01vdmllJztcbmltcG9ydCBBdXRoIGZyb20gJy4vY29udGFpbmVycy9BdXRoJztcbmltcG9ydCBBY2NvdW50IGZyb20gJy4vY29udGFpbmVycy9BY2NvdW50JztcbmltcG9ydCBMaXN0cyBmcm9tICcuL2NvbnRhaW5lcnMvTGlzdHMnO1xuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XG5cbi8vIFNoYXJlZCBDb21wb25lbnRzXG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSAnLi9jb250YWluZXJzL0FsZXJ0RGlhbG9nJztcblxuY29uc3QgUm9vdCA9ICh7IHN0b3JlIH0pID0+IChcbiAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgPEZyYWdtZW50PlxuICAgICAgPFJvdXRlcj5cbiAgICAgICAgPFN3aXRjaD5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9cIiBleGFjdCBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2NvbWluZy1zb29uXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9pbi10aGVhdGVyc1wiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvYXV0aFwiIGNvbXBvbmVudD17QXV0aH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2FjY291bnRcIiBjb21wb25lbnQ9e0FjY291bnR9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9saXN0c1wiIGNvbXBvbmVudD17TGlzdHN9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvbW92aWUvOnNsdWcvOmlkXCIgY29tcG9uZW50PXtNb3ZpZX0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wYWdlLW5vdC1mb3VuZFwiIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgICAgPFJvdXRlIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XG4gICAgICAgIDwvU3dpdGNoPlxuICAgICAgPC9Sb3V0ZXI+XG4gICAgICA8QWxlcnREaWFsb2cgLz5cbiAgICA8L0ZyYWdtZW50PlxuICA8L1Byb3ZpZGVyPlxuKTtcblxuUm9vdC5wcm9wVHlwZXMgPSB7XG4gIHN0b3JlOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBSb290O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX0FDQ09VTlRfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cywgc2V0TG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldEFjY291bnREZXRhaWwgPSB1c2VyID0+ICh7XG4gIHR5cGU6IFNFVF9BQ0NPVU5UX0RFVEFJTCxcbiAgcGF5bG9hZDoge1xuICAgIHVzZXIsXG4gIH0sXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEFjY291bnREZXRhaWwgPSAoKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5nZXQoJy9hcGkvYWNjb3VudCcpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSB1c2VyID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucHV0KGAvYXBpL3VzZXIvJHt1c2VyLmlkfWAsIHVzZXIpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiAnUHJvZmlsZSBoYXMgYmVlbiBzdWNjZXNzZnVsbHkgdXBkYXRlZC4nLFxuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBjaGFuZ2VQYXNzd29yZCA9IHBhc3N3b3JkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucHV0KCcvYXBpL3VzZXIvY2hhbmdlLXBhc3N3b3JkJywgcGFzc3dvcmQpXG4gICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogZGF0YS5tZXNzYWdlLFxuICAgICAgfSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3QgbG9naW5SZWdpc3RlciA9IChkYXRhLCB1cmwpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnBvc3QodXJsLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9ICcvJztcbiAgICAvLyBUT0RPOiBzZXQgdXNlciBpbmZvcm1hdGlvbiB0byBjb21tb24gc3RhdGVcbiAgfSkuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGxvZ291dCA9ICgpID0+IHtcblxufTtcbiIsImltcG9ydCB7XG4gIFRPR0dMRV9BTEVSVCxcbiAgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgVE9HR0xFX0ZJTFRFUixcbiAgU0VUX1VQTE9BREVEX0lNQUdFLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IHNldEFsZXJ0U3RhdHVzID0gKHsgbWVzc2FnZSwga2luZCB9KSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfQUxFUlQsXG4gIG1lc3NhZ2UsXG4gIGtpbmQsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUFsZXJ0RGlhbG9nID0gKHsgbWVzc2FnZSwga2luZCB9KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0QWxlcnRTdGF0dXMoeyBtZXNzYWdlLCBraW5kIH0pKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0QWxlcnRTdGF0dXMoe30pKTtcbiAgfSwgMzAwMCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UGFnZUxvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX0xPQURJTkdfU1RBVFVTLFxuICBsb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9ICgpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9GSUxURVIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFVwbG9hZGVkSW1hZ2UgPSB1cGxvYWRlZEZpbGUgPT4gKHtcbiAgdHlwZTogU0VUX1VQTE9BREVEX0lNQUdFLFxuICBwYXlsb2FkOiB1cGxvYWRlZEZpbGUsXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9RVUVSWSwgU0VUX0dFTlJFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVzID0gcmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFUyxcbiAgbW92aWVzOiByZXNwb25zZS5yZXN1bHRzLFxuICBwYWdlOiAocmVzcG9uc2UucGFnZSArIDEpLFxuICB0b3RhbFBhZ2VzOiByZXNwb25zZS50b3RhbF9wYWdlcyxcbiAgdG90YWw6IHJlc3BvbnNlLnRvdGFsX3Jlc3VsdHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICBsZXQgdXJsID0gJ2FwaS9kaXNjb3Zlcic7XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKHF1ZXJ5TmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbcXVlcnlOYW1lXTtcbiAgICBjb25zdCBvcCA9IGkgPT09IDBcbiAgICAgID8gJz8nXG4gICAgICA6ICcmJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHtxdWVyeU5hbWV9PSR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbXVsdGlRdWVyeSA9IGAke3F1ZXJ5TmFtZX09YDtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIG11bHRpUXVlcnkgKz0gYCR7dn0sYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke211bHRpUXVlcnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFF1ZXJ5ID0gKHsgZmllbGQsIHZhbHVlIH0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogU0VUX1FVRVJZLFxuICAgIGZpZWxkLFxuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEdlbnJlcyA9IGdlbnJlcyA9PiAoe1xuICB0eXBlOiBTRVRfR0VOUkVTLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9ICgpID0+IGRpc3BhdGNoID0+IGF4aW9zXG4gIC5nZXQoJy9hcGkvZ2VucmUnKVxuICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKHNldEdlbnJlcyhkYXRhKSkpXG4gIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQgeyBTRVRfTElTVF9NT1ZJRVMsIFNFVF9MSVNUUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cywgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdCh7IGxpc3RzLCB0b3RhbCB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xJU1RTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGxpc3RzLFxuICAgICAgdG90YWwsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RCeUN1cnJlbnRVc2VyKHsgcGFnZSwgbGltaXQgfSwgbW92aWVJZCkge1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gY29va2llLmdldCgndXNlcl9pZCcpO1xuXG4gIGlmICghY3VycmVudFVzZXJJZCkge1xuICAgIHJldHVybiAoe1xuICAgICAgdHlwZTogU0VUX0xJU1RTLFxuICAgICAgcGF5bG9hZDoge1xuICAgICAgICBsaXN0czogW10sXG4gICAgICAgIHRvdGFsOiAwLFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGxldCB1cmwgPSBgL2FwaS9saXN0cz91c2VySWQ9JHtjdXJyZW50VXNlcklkfSZwYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gO1xuXG4gIGlmIChtb3ZpZUlkKSB7XG4gICAgdXJsICs9IGAmbW92aWVJZD0ke21vdmllSWR9YDtcbiAgfVxuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcyh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldExpc3Qoe1xuICAgICAgICAgIGxpc3RzOiByZXNwb25zZS5kYXRhLnJvd3MsXG4gICAgICAgICAgdG90YWw6IHJlc3BvbnNlLmRhdGEuY291bnQsXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxpc3QobGlzdCwgY2FsbGJhY2spIHtcbiAgY29uc3Qgb3BzID0gIWxpc3QuaWQgPyB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2FwaS9saXN0cycsXG4gIH0gOiB7XG4gICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgdXJsOiBgL2FwaS9saXN0cy8ke2xpc3QuaWR9YCxcbiAgICB9O1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvc1tvcHMubWV0aG9kXShvcHMudXJsLCBsaXN0KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGlkLCBjYWxsYmFjaykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZGVsZXRlKGAvYXBpL2xpc3RzLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdCh7IGxpc3RJZCwgbW92aWVJZCB9LCBjYWxsYmFjaykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MucG9zdChgL2FwaS9saXN0cy8ke2xpc3RJZH0vbW92aWUvJHttb3ZpZUlkfWAsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tTGlzdCh7IGxpc3RJZCwgbW92aWVJZCB9LCBjYWxsYmFjaykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZGVsZXRlKGAvYXBpL2xpc3RzLyR7bGlzdElkfS9tb3ZpZS8ke21vdmllSWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdE1vdmllcyh7IHJvd3MsIGNvdW50IH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTElTVF9NT1ZJRVMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbW92aWVzOiByb3dzLFxuICAgICAgdG90YWw6IGNvdW50LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0TW92aWVzKHF1ZXJ5LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxpc3RJZCwgcGFnZSwgbGltaXQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQoYC9hcGkvbGlzdHMvJHtsaXN0SWR9P3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRMaXN0TW92aWVzKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZURldGFpbCA9IGRldGFpbCA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVfREVUQUlMLFxuICBkZXRhaWwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRGV0YWlsID0gaWQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldE1vdmllRGV0YWlsKG51bGwpKTtcblxuICBheGlvcy5nZXQoYC9hcGkvbW92aWUvJHtpZH1gKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goXG4gICAgICBzZXRNb3ZpZURldGFpbChkYXRhKSxcbiAgICApKVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIG1lc3NhZ2UsXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gdy0xMDAgdGV4dC1jZW50ZXJgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxuICBraW5kOiAnaW5mbycsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7IGNhc3QgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtjYXN0LnByb2ZpbGVQYXRofSBhbHQ9e2Nhc3QubmFtZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc3QtaW5mb1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj57Y2FzdC5uYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjYXN0LmNoYXJhY3Rlcn08L3NwYW4+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ2FzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhc3Q6IHt9LFxufTtcblxuQ2FzdC5wcm9wVHlwZXMgPSB7XG4gIGNhc3Q6IENhc3RTaGFwZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQ2FzdFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBDYXN0IGZyb20gJy4uL0Nhc3QnO1xuaW1wb3J0ICcuL0Nhc3RMaXN0LnNjc3MnO1xuXG5jb25zdCBDYXN0TGlzdCA9ICh7IGNhc3RzIH0pID0+IHtcbiAgY29uc3QgY2FzdExpc3QgPSBjYXN0cy5tYXAoYyA9PiAoXG4gICAgPENhc3QgY2FzdD17Y30ga2V5PXtjLmlkfSAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBjYXN0LWxpc3RcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2FzdCBsaXN0PC9oNT5cbiAgICAgICAge2Nhc3RMaXN0fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DYXN0TGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGNhc3RzOiBbXSxcbn07XG5cbkNhc3RMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mKENhc3RTaGFwZSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IENvbXBhbnkgPSAoeyBjb21wYW55IH0pID0+IHtcbiAgY29uc3QgbG9nb1BhdGggPSBjb21wYW55LmxvZ29cbiAgICA/IGAke3Zpc3NuZS5pbWFnZXNTZWN1cmVCYXNlVXJsfS93OTIvJHtjb21wYW55LmxvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e2NvbXBhbnkubmFtZX0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMFwiPntjb21wYW55Lm5hbWV9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29tcGFueS5wcm9wVHlwZXMgPSB7XG4gIGNvbXBhbnk6IENvbXBhbnlTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi4vQ29tcGFueSc7XG5pbXBvcnQgJy4vQ29tcGFueUxpc3Quc2Nzcyc7XG5cbmNvbnN0IENvbXBhbnlMaXN0ID0gKHsgY29tcGFuaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Db21wYW5pZXM8L2g1PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAge2NvbXBhbmllcy5tYXAoYyA9PiAoXG4gICAgICAgICAgPENvbXBhbnkga2V5PXtjLmlkfSBjb21wYW55PXtjfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNvbXBhbnlMaXN0LnByb3BUeXBlcyA9IHtcbiAgY29tcGFuaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihDb21wYW55U2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBEZXRhaWxUYWJsZSA9ICh7IG1vdmllIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Ake21vdmllLm9yZ2luYWxUaXRsZX0gKCR7bW92aWUueWVhcn0pYH08L2g1PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtcmVzcG9uc2l2ZS1zbSB0YWJsZS1yZXNwb25zaXZlLXhzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmF0aW5nPC90aD5cbiAgICAgICAgICAgIDx0ZD57YCR7bW92aWUudm90ZV9hdmVyYWdlfSAoJHttb3ZpZS52b3RlX2NvdW50fSlgfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmVsZWFzZSBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUucmVsZWFzZV9kYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+R2VucmVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZ2VucmVOYW1lc308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRhZ2xpbmU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS50YWdsaW5lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q291bnRyaWVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuY291bnRyaWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGFuZ3VhZ2VzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUubGFuZ3VhZ2V9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EaXJlY3RvcjwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmRpcmVjdG9yfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+V3JpdGVyPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUud3JpdGVyfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SG9tZXBhZ2U8L3RoPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8YSBocmVmPXttb3ZpZS5ob21lcGFnZX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnttb3ZpZS5ob21lcGFnZX08L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkRldGFpbFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IE1vdmllU2hhcGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbFRhYmxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBHZW5yZVNoYXBlLCBGaWx0ZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgeyBTT1JUX09QVElPTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCAnLi9GaWx0ZXIuc2Nzcyc7XG5cbmZ1bmN0aW9uIHN3aXRjaFNvcnRRdWVyeShzb3J0QnkpIHtcbiAgY29uc3QgW25hbWUsIGtpbmRdID0gc29ydEJ5LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHZhbHVlID0gYCR7bmFtZX0uJHtraW5kID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJ31gO1xuICByZXR1cm4ge1xuICAgIGZpZWxkOiAnc29ydEJ5JyxcbiAgICB2YWx1ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkR2VucmVJZCh2YWx1ZSwgY3VycmVudEdlbnJlcykge1xuICBjb25zdCBpbmRleCA9IGN1cnJlbnRHZW5yZXMuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjdXJyZW50R2VucmVzLnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRHZW5yZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gY3VycmVudEdlbnJlcztcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlWWVhcih5ZWFyLCBzZXRRdWVyeSkge1xuICBpZiAoeWVhci5sZW5ndGggPT09IDQgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogeWVhcixcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh5ZWFyID09PSAnJykge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBGaWx0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGdlbnJlcyxcbiAgICBzZXRRdWVyeSxcbiAgICBxdWVyeSxcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzb3J0SWNvbkNsYXNzID0gcXVlcnkuc29ydEJ5LnNwbGl0KCcuJylbMV0gPT09ICdkZXNjJ1xuICAgID8gJ2Rvd24nXG4gICAgOiAndXAnO1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0gU09SVF9PUFRJT05TLm1hcCgoc29ydCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IHNvcnQubmFtZS5yZXBsYWNlKC8gL2csICdfJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2Ake2tleX0uJHtzb3J0LnZhbHVlfWB9PlxuICAgICAgICB7c29ydC5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2VucmVPcHRpb25zID0gZ2VucmVzLm1hcChnID0+IChcbiAgICA8b3B0aW9uIGtleT17Zy5pZH0gdmFsdWU9e2cuaWR9IGNsYXNzTmFtZT17cXVlcnkud2l0aEdlbnJlcy5pbmRleE9mKGAke2cuaWR9YCkgPT09IC0xID8gJycgOiAnc2VsZWN0ZWQnfT5cbiAgICAgIHtnLm5hbWV9XG4gICAgPC9vcHRpb24+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3RpY2t5LXRvcCBiZy13aGl0ZSBtYi0yIHB0LTIgc2hhZG93LXNtIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkuc2VhcmNoVGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICdzZWFyY2hUZXh0JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJnZW5yZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnd2l0aEdlbnJlcycsIHZhbHVlOiBhZGRHZW5yZUlkKCRldmVudC50YXJnZXQudmFsdWUsIHF1ZXJ5LndpdGhHZW5yZXMpIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkdlbnJlczwvb3B0aW9uPlxuICAgICAgICAgIHtnZW5yZU9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic29ydEJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgaWQ9XCJzb3J0T3B0aW9uU2VsZWN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTb3J0IG9wdGlvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NvcnRCeScsIHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tb3J0IEJ5PC9vcHRpb24+XG4gICAgICAgICAgICB7c29ydE9wdGlvbnN9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmlsdGVyLWlucHV0LWJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHN3aXRjaFNvcnRRdWVyeShxdWVyeS5zb3J0QnkpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtgc29ydC1hbW91bnQtJHtzb3J0SWNvbkNsYXNzfWB9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWWVhclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBoYW5kbGVDaGFuZ2VZZWFyKCRldmVudC50YXJnZXQudmFsdWUsIHNldFF1ZXJ5KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbn07XG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Gb290ZXIuc2Nzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+QWJvdXQgVXM8L2g1PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDU+U29jaWFsPC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgZmFjZWJvb2tcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIHR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIGluc3RhZ3JhbVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1Pkxhc3QgUmV2aWV3czwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEgbXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+Q29udGFjdDwvaDU+XG4gICAgICAgICAgPHA+KzI1NSAwMDAgMDAgMDAgMDA8L3A+XG4gICAgICAgICAgPHA+aW5mb0B2aXNzbmUuY29tPC9wPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0yXCI+TGFzdCBVcGRhdGVzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+QWRkIGNvbW1vbiBmaWx0ZXIgZm9yIG1vdmllczwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+R29vZ2xlIGF1dGggb3B0aW9ucyBpcyBjb21wbGV0ZWQ8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkZpeGVkIEZhY2Vib29rIGF1dGggaXNzdWVzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMVwiPlxuICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAxOSBWaXNzbmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IE1lbnUgPSAoeyBwYXRoLCBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e20ucGF0aH0+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXttLmljb259IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bS5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAge21lbnVJdGVtc31cbiAgICA8L3VsPlxuICApO1xufTtcblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vTW9kYWwuc2Nzcyc7XG5cbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBjYW5jZWwsXG4gICAgc3VibWl0LFxuICAgIGNoaWxkcmVuLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc05hbWUgPSBzaG93ID8gJ3Nob3cgZC1ibG9jaycgOiAnJztcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gc3VibWl0XG4gICAgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXR9PlNhdmU8L2J1dHRvbj5cbiAgICA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsIGZhZGUgJHtjbGFzc05hbWV9YH0gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJhY2tkcm9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtjYW5jZWx9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICB7c3VibWl0QnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgc3VibWl0OiBudWxsLFxufTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvc3RlciBmcm9tICcuLi9Qb3N0ZXInO1xuaW1wb3J0ICcuL01vdmllQ2FyZC5zY3NzJztcblxuY29uc3QgTW92aWVDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBpbWFnZSxcbiAgICByYXRlLFxuICAgIHNsdWcsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtY2FyZCBoLTEwMCB3LTEwMCByb3VuZGVkLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGltZy10aHVtYm5haWxcIj5cbiAgICAgIDxMaW5rIHRvPXtgbW92aWUvJHtzbHVnfS8ke2lkfWB9IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHJhdGluZy10YWcgc2hhZG93LXNtIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIHtyYXRlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxQb3N0ZXIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IE1vdmllTGlzdCA9ICh7IG1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBtb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICA8ZGl2IGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMyBtYi0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TW92aWVDYXJkXG4gICAgICAgIGlkPXttb3ZpZS5pZH1cbiAgICAgICAgaW1hZ2U9e21vdmllLnBvc3Rlcn1cbiAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICByYXRlPXttb3ZpZS52b3RlQXZlcmFnZX1cbiAgICAgICAgc2x1Zz17bW92aWUuc2x1Z31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vTmF2YmFyLnNjc3MnO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgaXNMb2dnZWRJbixcbiAgICBwYXRoTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gaXNMb2dnZWRJbiA/IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcHJvZmlsZS9hY2NvdW50XCIgdGl0bGU9XCJQcm9maWxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPnt1c2VyLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9nb3V0XCIgdGl0bGU9XCJMb2dvdXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLW91dC1hbHRcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvRnJhZ21lbnQ+XG4gICkgOiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGluayB0bz1cIi9hdXRoXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5sb2dpbjwvTGluaz5cbiAgICA8L2xpPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH1cbiAgICAgICAgICBhbHQ9XCJWaXNzbmVcIlxuICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGQtYmxvY2tcIlxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGlkPVwiZmlsdGVyQnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImZpbHRlclwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9pbi10aGVhdGVycycgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2luLXRoZWF0ZXJzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaW4gdGhlYXRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9jb21pbmctc29vbicgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2NvbWluZy1zb29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgY29taW5nIHNvb25nXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXktYXV0b1wiPlxuICAgICAgICAgIHtsb2dpbkJ1dHRvbn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IHt9LFxuICBwYXRoTmFtZTogJy8nLFxufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgcGF0aE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9vbmcucG5nYH0gYWx0PVwiNDA0XCIgLz5cbiAgICA8aDQ+NDA0PC9oND5cbiAgICA8aDU+UGFnZSBub3QgZm91bmQ8L2g1PlxuICAgIDxwPlxuICAgICAgV2UgYXJlIHNvcnJ5LiBUaGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIHdhcyBtb3ZlZCwgcmVtb3ZlZCwgcmVuYW1lZCBvciBtaWdodCBuZXZlciBleGlzdGVkLlxuICAgIDwvcD5cbiAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+R08gVE8gSE9NRTwvYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuXG5jb25zdCBQYWdlTG9hZGluZyA9ICh7IHNob3cgfSkgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgYmctbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICA8U3Bpbm5lciBzaG93IHNpemU9XCJsZ1wiIGFkZGlvbmFsQ2xhc3M9XCJtci0yXCIgLz5cbiAgICAgIExvYWRpbmcuLi5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhZ2VMb2FkaW5nLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IChwYWdlLCBjdXJyZW50UGFnZSwgdG90YWxQYWdlKSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuXG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhZ2UpKSB7XG4gICAgcmV0dXJuIHsgcGFnZSB9O1xuICB9XG5cbiAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSAoY3VycmVudFBhZ2UgLSAxKTtcbiAgICByZXN1bHQgPSBuZXdQYWdlID09PSAwID8gMSA6IG5ld1BhZ2U7XG4gIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XG4gICAgcmVzdWx0ID0gKChjdXJyZW50UGFnZSArIDEpID4gdG90YWxQYWdlKVxuICAgICAgPyB0b3RhbFBhZ2VcbiAgICAgIDogKGN1cnJlbnRQYWdlICsgMSk7XG4gIH1cblxuICByZXR1cm4geyBwYWdlOiByZXN1bHQgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZU51bWJlcnMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICB0b3RhbCxcbiAgICBidXR0b25Db3VudCxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XG4gIGNvbnN0IGJjID0gTWF0aC5jZWlsKGJ1dHRvbkNvdW50IC8gMik7XG5cbiAgZm9yIChsZXQgaSA9IChwYWdlIC0gKGJjIC0gMSkpOyBpIDwgKHBhZ2UgKyBiYyk7IGkgKz0gMSkge1xuICAgIGlmIChpID4gMCAmJiBpIDw9IHRvdGFsUGFnZSkge1xuICAgICAgcGFnZU51bWJlcnMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFnZU51bWJlcnM7XG59O1xuXG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgeyBwYWdlLCBvblBhZ2luYXRlLCBsaW1pdCwgdG90YWwgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcGFnZU51bWJlcnMgPSBnZW5lcmF0ZVBhZ2VOdW1iZXJzKG9wdGlvbnMpO1xuICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsIC8gbGltaXQpO1xuXG4gIGlmIChwYWdlTnVtYmVycy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIDxzcGFuIC8+O1xuICB9XG5cbiAgY29uc3QgcGFnZUJ1dHRvbnMgPSBwYWdlTnVtYmVycy5tYXAocG4gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gICR7cG4gPT09IHBhZ2UgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IChwbiAhPT0gcGFnZSA/IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socG4pKSA6ICcnKX1cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gMSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygncHJldicsIHBhZ2UpKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7cGFnZUJ1dHRvbnN9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSB0b3RhbFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ25leHQnLCBwYWdlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiB7XG4gICAgYnV0dG9uQ291bnQ6IDMsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZTogMSxcbiAgICBsaW1pdDogMTAsXG4gIH0sXG59O1xuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uUGFnaW5hdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGJ1dHRvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGxhenlcIlxuICAgICAgc3JjPXtgJHt2aXNzbmUuY2RufS8ke3Zpc3NuZS5kZWZhdWx0Q292ZXJJbWFnZVBhdGh9YH1cbiAgICAgIGRhdGEtc3JjPXtzcmN9XG4gICAgICBhbHQ9e2FsdH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblBvc3Rlci5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnLi9QYWdlTG9hZGluZyc7XG5pbXBvcnQgcHJvZmlsZU1lbnUgZnJvbSAnLi4vY29uc3RhbnRzL3Byb2ZpbGUtbWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgcGF0aCwgcGFnZUxvYWRpbmcsIHVzZXIgfSA9IHByb3BzO1xuXG4gIGlmIChwYWdlTG9hZGluZykge1xuICAgIHJldHVybiA8UGFnZUxvYWRpbmcgc2hvdyAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHJvdW5kZWQtY2lyY2xlIGF2YXRhci1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhciB8fCBgJHt2aXNzbmUuY2RufS91Y29udGVudC9hdmF0YXIvZGVmYXVsdC1hdmF0YXIuanBnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGUgYm9yZGVyIGF2YXRhclwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICBpZD1cImF2YXRhclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg1PntgQCR7dXNlci51c2VyTmFtZX1gfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TWVudSBpdGVtcz17cHJvZmlsZU1lbnV9IHBhdGg9e3BhdGh9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNob3csIGhlaWdodCB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiBzdHlsZT17eyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIlxuICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICBhcmlhLXZhbHVlbm93PVwiNzVcIlxuICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgaGVpZ2h0OiAyLFxufTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2hvdyxcbiAgICBzaXplLFxuICAgIGtpbmQsXG4gICAgY29sb3IsXG4gICAgYWRkaW9uYWxDbGFzcyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNwaW5uZXItJHtraW5kfSBzcGlubmVyLSR7a2luZH0tJHtzaXplfSB0ZXh0LSR7Y29sb3J9ICR7YWRkaW9uYWxDbGFzc31gfSByb2xlPVwic3RhdHVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBzaXplOiAnc20nLFxuICBraW5kOiAnZ3JvdycsXG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIGFkZGlvbmFsQ2xhc3M6ICcnLFxufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBhZGRpb25hbENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzbScsXG4gICAgJ21kJyxcbiAgICAnbGcnLFxuICAgICd4bCcsXG4gIF0pLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdib3JkZXInLFxuICAgICdncm93JyxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdpbmZvJyxcbiAgICAnbGlnaHQnLFxuICAgICdkYXJrJyxcbiAgXSksXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9QYWdpbmF0aW9uJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9BbGVydCc7XG5pbXBvcnQgJy4vVGFibGVMaXN0LnNjc3MnO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoZmllbGRzKSA9PiB7XG4gIGNvbnN0IHZpc2libGVGaWVsZHMgPSBmaWVsZHNcbiAgICAuZmlsdGVyKGYgPT4gIWYuaGlkZGVuKVxuICAgIC5tYXAoZiA9PiA8dGggc2NvcGU9XCJjb2xcIj57Zi50aXRsZX08L3RoPik7XG5cbiAgcmV0dXJuIDx0cj57dmlzaWJsZUZpZWxkc308L3RyPjtcbn07XG5cbmNvbnN0IGNyZWF0ZUJvZHkgPSAoZGF0YSwgZmllbGRzLCBzZWxlY3RlZCwgb25TZWxlY3QpID0+IHtcbiAgY29uc3QgdGJvZHkgPSBbXTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRmllbGRzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSBpdGVtW2ZpZWxkLm5hbWVdO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC5mb3JtYXRcbiAgICAgICAgPyBmaWVsZC5mb3JtYXQodilcbiAgICAgICAgOiB2LnRvU3RyaW5nKCk7XG5cbiAgICAgIGl0ZW1GaWVsZHMucHVzaCg8dGQ+e3ZhbHVlfTwvdGQ+KTtcbiAgICB9KTtcblxuICAgIHRib2R5LnB1c2goXG4gICAgICA8dHIgY2xhc3NOYW1lPXtgJHtpdGVtLmlkID09PSBzZWxlY3RlZC5pZCA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX0+XG4gICAgICAgIHtpdGVtRmllbGRzfVxuICAgICAgPC90cj4sXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRib2R5O1xufTtcblxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbiA9IChvcHRpb25zLCBkYXRhTGVuZ3RoKSA9PiB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPFBhZ2luYXRpb24gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgIDxzcGFuPntgU2hvdyAke2RhdGFMZW5ndGh9IHJlc3VsdCBvZiAke29wdGlvbnMudG90YWx9YH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBUYWJsZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGRhdGEsXG4gICAgc2VsZWN0ZWQsXG4gICAgZmllbGRzLFxuICAgIHBhZ2luYXRpb24sXG4gICAgcmVzcG9uc2l2ZSxcbiAgICBvbkNyZWF0ZSxcbiAgICBvbkVkaXQsXG4gICAgb25EZWxldGUsXG4gICAgb25TZWxlY3QsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBidG5Hcm91cCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ0bi1ncm91cCB3LTEwMCAkeyghb25DcmVhdGUgJiYgIW9uRWRpdCAmJiAhb25EZWxldGUpID8gJ2Qtbm9uZScgOiAnJ31gfSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiY3J1ZFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uQ3JlYXRlID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkNyZWF0ZX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwicGx1cy1zcXVhcmVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+Q3JlYXRlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25FZGl0ID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkVkaXR9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVkaXRcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+RWRpdDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uRGVsZXRlID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidHJhc2hcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+RGVsZXRlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIlRoZXJlIHdlcmUgbm8gcmVzdWx0LlwiIGtpbmQ9XCJ3YXJuaW5nXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlfSBjbGFzc05hbWU9e2BidG4gYnRuLW91dGxpbmUtcHJpbWFyeSB3LTEwMCAke29uQ3JlYXRlID8gJycgOiAnZC1ub25lJ31gfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGVhZHMgPSBjcmVhdGVIZWFkZXIoZmllbGRzKTtcbiAgY29uc3QgYm9keSA9IGNyZWF0ZUJvZHkoZGF0YSwgZmllbGRzLCBzZWxlY3RlZCwgb25TZWxlY3QpO1xuICBjb25zdCBwYWdpbmF0aW9uQnV0dG9ucyA9IGNyZWF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbiwgZGF0YS5sZW5ndGgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICB7YnRuR3JvdXB9XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2B0YWJsZSB2LXRhYmxlICR7cmVzcG9uc2l2ZSA/ICd0YWJsZS1yZXNwb25zaXZlJyA6ICcnfWB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHtoZWFkc31cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtwYWdpbmF0aW9uQnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVGFibGVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YTogW10sXG4gIHNlbGVjdGVkOiB7fSxcbiAgZmllbGRzOiBbXSxcbn07XG5cblRhYmxlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCksXG4gIGZpZWxkczogUHJvcFR5cGVzLmluc3RhbmNlT2YoQXJyYXkpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9WaWRlby5zY3NzJztcblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlb0tleSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gbWItMiBlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICA8aWZyYW1lXG4gICAgICBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlxuICAgICAgdGl0bGU9XCJWaWRlb1wiXG4gICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvS2V5fT9hdXRvcGxheT0wJm9yaWdpbj0ke3Zpc3NuZS5kb21haW59YH1cbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9LZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLy8gY29tbW9uXG5leHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxFUlQgPSAnVE9HR0xFX0FMRVJUJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfRklMVEVSID0gJ1RPR0dMRV9GSUxURVInO1xuXG4vLyBhdXRoXG5leHBvcnQgY29uc3QgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMgPSAnU0VUX1BBR0VfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HX1NUQVRVUyA9ICdTRVRfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gJ1JFR0lTVEVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbi8vIGRpc2NvdmVyXG5leHBvcnQgY29uc3QgR0VUX01PVklFUyA9ICdHRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVTID0gJ1NFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRVMgPSAnU0VUX0dFTlJFUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVJZID0gJ1NFVF9RVUVSWSc7XG5cbi8vIGxpc3RzXG5leHBvcnQgY29uc3QgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiA9ICdHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1RTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fTElTVCA9ICdBRERfVE9fTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fTElTVCA9ICdERUxFVEVfRlJPTV9MSVNUJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVFMgPSAnU0VUX0xJU1RTJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVF9NT1ZJRVMgPSAnU0VUX0xJU1RfTU9WSUVTJztcblxuLy8gbW92aWUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0VUX01PVklFX0RFVEFJTCA9ICdTRVRfTU9WSUVfREVUQUlMJztcblxuLy8gcHJvZmlsZVxuLy8gIC0tIEFjY291bnRcbmV4cG9ydCBjb25zdCBTRVRfQUNDT1VOVF9ERVRBSUwgPSAnU0VUX0FDQ09VTlRfREVUQUlMJztcbmV4cG9ydCBjb25zdCBTRVRfVVBMT0FERURfSU1BR0UgPSAnU0VUX1VQTE9BREVEX0lNQUdFJztcblxuLy8gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgU09SVF9PUFRJT05TID0gW3tcbiAgbmFtZTogJ1BvcHVsYXJpdHknLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JldmVudWUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUHJpbWFyeSBSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnT3JnaW5hbCBUaXRsZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIEF2ZXJhZ2UnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBDb3VudCcsXG4gIHZhbHVlOiAnZGVzYycsXG59XTtcbiIsImNvbnN0IHByb2ZpbGVNZW51ID0gW1xuICB7XG4gICAgbmFtZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvYWNjb3VudCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlzdHMnLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvbGlzdHMnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gIC8vICAgaWNvbjogJ2hlYXJ0JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZmF2b3JpdGVzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdDb21tZW50cycsXG4gIC8vICAgaWNvbjogJ2NvbW1lbnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9jb21tZW50cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnUmV2aWV3cycsXG4gIC8vICAgaWNvbjogJ25ld3NwYXBlcicsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3Jldmlld3MnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAvLyAgIGljb246ICd1c2VyLWZyaWVuZHMnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdTZXR0aW5ncycsXG4gIC8vICAgaWNvbjogJ2NvZycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JnaW5hbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9tZXBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXN0U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcm9maWxlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2VucmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY3Jld3M6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgdm90ZUF2ZXJhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHJlbGVhc2VZZWFyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCB7IFVzZXJTaGFwZSwgbWF0Y2hTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0ICcuL0FjY291bnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHByb3BzLnNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHVzZXJGb3JtOiB7fSxcbiAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSwgZmllbGQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgICBzdGF0ZVtmaWVsZF1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nLCBjaGFuZ2VQYXNzd29yZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQub2xkUGFzc3dvcmQgPT09IHBhc3N3b3JkLm5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGNhbm5vdCBiZSB0aGUgc2FtZSB3aXRoIG9sZCBwYXNzd29yZC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDoge30gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdXBkYXRlVXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVzZXJGb3JtLCB2YWxpZGF0aW9uLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXIodXNlckZvcm0pfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30ga2luZD1cImJvcmRlclwiIGNvbG9yPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ30+VXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+Q2hhbmdlIFBhc3N3b3JkPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkSW5wdXRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQubmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybU5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCwgY2hhbmdlUGFzc3dvcmQsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBY2NvdW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBzaG93LFxuICAgIG1lc3NhZ2UsXG4gICAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHNpdGUtYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVBbGVydERpYWxvZ30+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGtpbmQ6ICdpbmZvJyxcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCAnLi9BbGVydERpYWxvZy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY29tbW9uIH0pID0+ICh7XG4gIHNob3c6IGNvbW1vbi5zaG93QWxlcnQsXG4gIG1lc3NhZ2U6IGNvbW1vbi5hbGVydE1lc3NhZ2UsXG4gIGtpbmQ6IGNvbW1vbi5hbGVydEtpbmQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsgc2hvdzogZmFsc2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBbGVydERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uLy4uL2xpYi9jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaEZvcm0gPSB0aGlzLnN3aXRjaEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luUmVnaXN0ZXIgPSB0aGlzLmxvZ2luUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29va2llLmdldCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgdG9nZ2xlQWxlcnREaWFsb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAoIWZvcm0uZW1haWwgfHwgIWVtYWlsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtLnBhc3N3b3JkIHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA+IDE2KSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIG11c3QgYmUgNi0xNiBjaGFjcmFjdGVyLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgaWYgKCFmb3JtLnVzZXJOYW1lIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+VXNlciBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmZpcnN0TmFtZSB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkZpcnN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmxhc3ROYW1lIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+TGFzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm0uY29uZmlybVBhc3N3b3JkICE9PSBmb3JtLnBhc3N3b3JkKSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBkb250IG1hdGNoPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgbG9naW5SZWdpc3RlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvbihmb3JtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB1cmwgPSBpc1JlZ2lzdGVyXG4gICAgICA/ICcvYXBpL3JlZ2lzdGVyJ1xuICAgICAgOiAnL2FwaS9sb2dpbic7XG5cbiAgICByZXR1cm4gcHJvcHMubG9naW5SZWdpc3Rlcihmb3JtLCB1cmwpO1xuICB9XG5cbiAgc3dpdGNoRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNSZWdpc3RlcjogIXByZXZTdGF0ZS5pc1JlZ2lzdGVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgaXNSZWdpc3RlcixcbiAgICAgIHZhbGlkYXRpb24sXG4gICAgICBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICAgIGxldCBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICBsZXQgcmVnaXN0ZXJJbnB1dCA9IG51bGw7XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgICBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ0xPR0lOJztcblxuICAgICAgcmVnaXN0ZXJJbnB1dCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiY29uZmlybVBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybVBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwibGFzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhdXRoLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH0gYWx0PVwiVmlzc25lXCIgaGVpZ2h0PVwiNzBcIiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVJlZ1wiIGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxJbnB1dEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkSW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJwYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVubG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5wYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge3JlZ2lzdGVySW5wdXR9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gJHtsb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZ29vZ2xlICBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2dvb2dsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEdPT0dMRVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGZhY2Vib29rIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEZBQ0VCT09LXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXV0aC5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgeyBsb2dpblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0ICcuL0F1dGguc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGxvZ2luUmVnaXN0ZXI6IChkYXRhLCB1cmwpID0+IGRpc3BhdGNoKGxvZ2luUmVnaXN0ZXIoZGF0YSwgdXJsKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBtZXNzYWdlID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsga2luZDogJ2RhbmdlcicsIG1lc3NhZ2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHtcbiAgVXNlclNoYXBlLFxuICBNb3ZpZVNoYXBlLFxuICBHZW5yZVNoYXBlLFxuICBGaWx0ZXJTaGFwZSxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9hZE1vdmllcyA9IHRoaXMubG9hZE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEdlbnJlcywgdG9nZ2xlRmlsdGVyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhdGggfSA9IG1hdGNoO1xuXG4gICAgZ2V0R2VucmVzKCk7XG5cbiAgICBpZiAoWycvY29taW5nLXNvb24nLCAnL2luLXRoZWF0ZXJzJ10uaW5kZXhPZihwYXRoKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0UXVlcnkoeyBmaWVsZDogJ2ZpbHRlcicsIHZhbHVlOiBwYXRoLnJlcGxhY2UoJy8nLCAnJykgfSk7XG4gICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3ZpZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGNvbnN0IHsgc2V0UXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UXVlcnkocXVlcnkpLnRoZW4odGhpcy5sb2FkTW92aWVzKTtcbiAgfVxuXG4gIGxvYWRNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZXMsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllcyhxdWVyeSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW92aWVzLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZ2VucmVzLFxuICAgICAgcXVlcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNob3dGaWx0ZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IHBhdGhOYW1lPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8RmlsdGVyIHNob3c9e3Nob3dGaWx0ZXJ9IGdlbnJlcz17Z2VucmVzfSBzZXRRdWVyeT17dGhpcy5zZXRRdWVyeX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IGlkPVwibGlzdFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtLTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vdmllc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMiAke2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5EaXNjb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxuICB1c2VyOiB7fSxcbn07XG5cbkRpc2NvdmVyLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRHZW5yZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBzaG93RmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vRGlzY292ZXInO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TW92aWVzLFxuICBzZXRRdWVyeSxcbiAgZ2V0R2VucmVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2NvdmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIHF1ZXJ5OiBzdGF0ZS5kaXNjb3Zlci5xdWVyeSxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbW92aWVzOiBzdGF0ZS5kaXNjb3Zlci5tb3ZpZXMsXG4gIGdlbnJlczogc3RhdGUuZGlzY292ZXIuZ2VucmVzLFxuICBzaG93RmlsdGVyOiBzdGF0ZS5jb21tb24uc2hvd0ZpbHRlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldE1vdmllcyhxdWVyeSkpLFxuICBzZXRRdWVyeTogcXVlcnkgPT4gZGlzcGF0Y2goc2V0UXVlcnkocXVlcnkpKSxcbiAgZ2V0R2VucmVzOiAoKSA9PiBkaXNwYXRjaChnZXRHZW5yZXMoKSksXG4gIHRvZ2dsZUZpbHRlcjogc2hvdyA9PiBkaXNwYXRjaCh0b2dnbGVGaWx0ZXIoc2hvdykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShEaXNjb3Zlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVMaXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVRdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgICAgbGlzdFF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgICBsaXN0OiB7fSxcbiAgICAgIHNlbGVjdGVkOiB7fSxcbiAgICAgIHNlbGVjdGVkTW92aWU6IHt9LFxuICAgICAgbW92aWVUYWJsZUZpZWxkczogW3tcbiAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdQb3N0ZXInLFxuICAgICAgICBuYW1lOiAncG9zdGVyJyxcbiAgICAgICAgZm9ybWF0KHNyYykge1xuICAgICAgICAgIHJldHVybiA8aW1nIGhlaWdodD1cIjcwXCIgc3JjPXtzcmN9IGFsdD1cIkxpc3QgTW92aWVcIiAvPjtcbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdUaXRsZScsXG4gICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnUmF0aW5nJyxcbiAgICAgICAgbmFtZTogJ3JhdGluZycsXG4gICAgICB9XSxcbiAgICAgIGxpc3RUYWJsZUZpZWxkczogW3tcbiAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnVmlzaWJpbGl0eScsXG4gICAgICAgIG5hbWU6ICdwdWJsaWMnLFxuICAgICAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnUHVibGljJyA6ICdQcml2YXRlJztcbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdNb3ZpZXMnLFxuICAgICAgICBuYW1lOiAndG90YWxNb3ZpZScsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgZm9ybWF0OiBpZCA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5zaG93TGlzdE1vdmllcyhpZCl9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJsaXN0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgfV0sXG4gICAgfTtcblxuICAgIHRoaXMuc2V0TGlzdFF1ZXJ5ID0gdGhpcy5zZXRMaXN0UXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldE1vdmllUXVlcnkgPSB0aGlzLnNldE1vdmllUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldExpc3RzID0gdGhpcy5nZXRMaXN0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93TGlzdE1vdmllcyA9IHRoaXMuc2hvd0xpc3RNb3ZpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJhY2tUb0xpc3QgPSB0aGlzLmJhY2tUb0xpc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZUZyb21MaXN0ID0gdGhpcy5kZWxldGVGcm9tTGlzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRBY2NvdW50RGV0YWlsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBzZXRMaXN0UXVlcnkobGlzdFF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGxpc3RRdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUubGlzdFF1ZXJ5LCBsaXN0UXVlcnkpLFxuICAgIH0pLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIHNldE1vdmllUXVlcnkobW92aWVRdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBtb3ZpZVF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5tb3ZpZVF1ZXJ5LCBtb3ZpZVF1ZXJ5KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBnZXRMaXN0cygpIHtcbiAgICBjb25zdCB7IGdldExpc3RCeUN1cnJlbnRVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGlzdFF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKGxpc3RRdWVyeSk7XG4gIH1cblxuICBnZXRMaXN0TW92aWVzKCkge1xuICAgIGNvbnN0IHsgZ2V0TGlzdE1vdmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1vdmllUXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKG1vdmllUXVlcnkubGlzdElkKSB7XG4gICAgICBnZXRMaXN0TW92aWVzKG1vdmllUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUZyb21MaXN0KCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRNb3ZpZSwgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyByZW1vdmVGcm9tTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZW1vdmVGcm9tTGlzdCh7XG4gICAgICBsaXN0SWQ6IHNlbGVjdGVkLmlkLFxuICAgICAgbW92aWVJZDogc2VsZWN0ZWRNb3ZpZS5pZCxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2tUb0xpc3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93TW92aWVzOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkTW92aWU6IHt9LFxuICAgICAgbW92aWVRdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0xpc3RNb3ZpZXMobGlzdElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dNb3ZpZXM6IHRydWUsXG4gICAgICBzZWxlY3RlZDoge30sXG4gICAgICBtb3ZpZVF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5tb3ZpZVF1ZXJ5LCB7XG4gICAgICAgIGxpc3RJZCxcbiAgICAgIH0pLFxuICAgIH0pLCB0aGlzLmdldExpc3RNb3ZpZXMpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IGRlbGV0ZUxpc3QsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5pZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3dhcm5pbmcnLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2VsZWN0ZWQgZGF0YS4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlTGlzdChzZWxlY3RlZC5pZCwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHt9IH0pO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGlzdDogc2VsZWN0ZWQsXG4gICAgfSwgdGhpcy50b2dnbGVNb2RhbCk7XG4gIH1cblxuICB0b2dnbGVNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd01vZGFsOiAhcHJldlN0YXRlLnNob3dNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQucGFyc2VkVmFsdWUgfHwgdGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKG5hbWUgPT09ICdwdWJsaWMnKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cblxuICAgIGxpc3RbbmFtZV0gPSB2YWx1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0IH0pO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzYXZlTGlzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxpc3QucHVibGljID0gTnVtYmVyLnBhcnNlSW50KGxpc3QucHVibGljLCAxMCk7XG5cbiAgICBzYXZlTGlzdChsaXN0LCAoKSA9PiB7XG4gICAgICB0aGlzLmdldExpc3RzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDoge30gfSk7XG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdFF1ZXJ5LFxuICAgICAgbW92aWVRdWVyeSxcbiAgICAgIHNob3dNb2RhbCxcbiAgICAgIGxpc3QsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdGVkTW92aWUsXG4gICAgICBsaXN0VGFibGVGaWVsZHMsXG4gICAgICBtb3ZpZVRhYmxlRmllbGRzLFxuICAgICAgc2hvd01vdmllcyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIHVzZXIsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHRvdGFsTGlzdCxcbiAgICAgIHRvdGFsTW92aWUsXG4gICAgICBtb3ZpZXMsXG4gICAgICBsaXN0cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb250ZW50ID0gKFxuICAgICAgPFRhYmxlTGlzdFxuICAgICAgICBkYXRhPXtsaXN0c31cbiAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlfVxuICAgICAgICBvbkRlbGV0ZT17dGhpcy5kZXN0cm95fVxuICAgICAgICBvbkVkaXQ9e3RoaXMudXBkYXRlfVxuICAgICAgICBvblNlbGVjdD17cyA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHMgfSl9XG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgZmllbGRzPXtsaXN0VGFibGVGaWVsZHN9XG4gICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICB0b3RhbDogdG90YWxMaXN0LFxuICAgICAgICAgIHBhZ2U6IGxpc3RRdWVyeS5wYWdlLFxuICAgICAgICAgIGxpbWl0OiBsaXN0UXVlcnkubGltaXQsXG4gICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgb25QYWdpbmF0ZTogdGhpcy5zZXRMaXN0UXVlcnksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBpZiAoc2hvd01vdmllcykge1xuICAgICAgY29udGVudCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMjZweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Nb3ZpZXM8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLTBcIiBvbkNsaWNrPXt0aGlzLmJhY2tUb0xpc3R9PkJhY2sgVG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUYWJsZUxpc3RcbiAgICAgICAgICAgIGRhdGE9e21vdmllc31cbiAgICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLmRlbGV0ZUZyb21MaXN0fVxuICAgICAgICAgICAgb25TZWxlY3Q9e3MgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTW92aWU6IHMgfSl9XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRNb3ZpZX1cbiAgICAgICAgICAgIGZpZWxkcz17bW92aWVUYWJsZUZpZWxkc31cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgdG90YWw6IHRvdGFsTW92aWUsXG4gICAgICAgICAgICAgIHBhZ2U6IG1vdmllUXVlcnkucGFnZSxcbiAgICAgICAgICAgICAgbGltaXQ6IG1vdmllUXVlcnkubGltaXQsXG4gICAgICAgICAgICAgIGJ1dHRvbkNvdW50OiA1LFxuICAgICAgICAgICAgICBvblBhZ2luYXRlOiB0aGlzLnNldExpc3RRdWVyeSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IHRpdGxlPVwiQ3JlYXRlIExpc3RcIiBjYW5jZWw9e3RoaXMudG9nZ2xlTW9kYWx9IHN1Ym1pdD17dGhpcy5zYXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5MaXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtsaXN0Lm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHVibGljIExpc3RcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshbGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHJpdmF0ZSBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvdGFsTGlzdDogMCxcbiAgdG90YWxNb3ZpZTogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRMaXN0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWxldGVMaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzYXZlTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRvdGFsTGlzdDogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxNb3ZpZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTGlzdHMgZnJvbSAnLi9MaXN0cyc7XG5pbXBvcnQgeyBnZXRBY2NvdW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsXG4gIHNhdmVMaXN0LFxuICBkZWxldGVMaXN0LFxuICBnZXRMaXN0TW92aWVzLFxuICByZW1vdmVGcm9tTGlzdCxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9saXN0cyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxpc3RzOiBzdGF0ZS5saXN0cy5saXN0cyxcbiAgdG90YWw6IHN0YXRlLmxpc3RzLnRvdGFsLFxuICBtb3ZpZXM6IHN0YXRlLmxpc3RzLm1vdmllcyxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxuICBzYXZlTGlzdDogKGxpc3QsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzYXZlTGlzdChsaXN0LCBjYWxsYmFjaykpLFxuICBkZWxldGVMaXN0OiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChkZWxldGVMaXN0KGlkLCBjYWxsYmFjaykpLFxuICBnZXRBY2NvdW50RGV0YWlsOiAoKSA9PiBkaXNwYXRjaChnZXRBY2NvdW50RGV0YWlsKCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbiAgZ2V0TGlzdE1vdmllczogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TGlzdE1vdmllcyhxdWVyeSkpLFxuICByZW1vdmVGcm9tTGlzdDogbGlzdE1vdmllID0+IGRpc3BhdGNoKHJlbW92ZUZyb21MaXN0KGxpc3RNb3ZpZSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCBEZXRhaWxUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGFpbFRhYmxlJztcbmltcG9ydCBDb21wYW55TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBhbnlMaXN0JztcbmltcG9ydCBDYXN0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Nhc3RMaXN0JztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvJztcbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dMaXN0TW9kYWw6IGZhbHNlLFxuICAgICAgbGlzdDoge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZUxpc3RNb2RhbCA9IHRoaXMudG9nZ2xlTGlzdE1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBnZXRNb3ZpZURldGFpbCwgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsIG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vdmllSWQgPSBtYXRjaC5wYXJhbXMuaWQ7XG4gICAgZ2V0TW92aWVEZXRhaWwobW92aWVJZCk7XG4gICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIobGlzdCwgbW92aWVJZCk7XG4gIH1cblxuICB0b2dnbGVMaXN0TW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dMaXN0TW9kYWw6ICFwcmV2U3RhdGUuc2hvd0xpc3RNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93TGlzdE1vZGFsLCBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgZGV0YWlsLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsaXN0cyxcbiAgICAgIGFkZFRvTGlzdCxcbiAgICAgIHJlbW92ZUZyb21MaXN0LFxuICAgICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRldGFpbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8UHJvZ3Jlc3NCYXIgc2hvdyBjb2xvcj1cImluZm9cIiAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlbyA9IGRldGFpbC52aWRlb3MubGVuZ3RoID4gMFxuICAgICAgPyA8VmlkZW8gdmlkZW9LZXk9e2RldGFpbC52aWRlb3NbMF0ua2V5fSAvPlxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi0yXCIgc3JjPXtkZXRhaWwucG9zdGVyUGF0aH0gYWx0PXtkZXRhaWwudGl0bGV9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQWRkIFRvIExpc3RcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxpc3RNb2RhbH0+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJwbHVzLXNxdWFyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dMaXN0TW9kYWx9IHRpdGxlPVwiQWRkIFRvIExpc3RcIiBjYW5jZWw9e3RoaXMudG9nZ2xlTGlzdE1vZGFsfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAge2xpc3RzLm1hcChsID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGlzdC1ncm91cC1pdGVtIHJvdW5kZWQtMCAke2wuaXNBZGRlZCA/ICdsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcycgOiAnICd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAge2wubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc20gYnRuLW91dGxpbmUtJHtsLmlzQWRkZWQgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJ31gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aWVJZCA9IG1hdGNoLnBhcmFtcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0T2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJZDogbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFsLmlzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRUb0xpc3QobGlzdE9iamVjdCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUxpc3RNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0LCBtb3ZpZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVGcm9tTGlzdChsaXN0T2JqZWN0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUxpc3RNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIobGlzdCwgbW92aWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17YCR7bC5pc0FkZGVkID8gJ3RyYXNoJyA6ICdwbHVzLXNxdWFyZSd9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk1vdmllLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIGRldGFpbDogbnVsbCxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGFkZFRvTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlRnJvbUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZXRhaWw6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCksXG4gIG1hdGNoOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIGxpc3RzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSkuaXNSZXF1aXJlZCxcbiAgdXNlcjogVXNlclNoYXBlLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9Nb3ZpZSc7XG5pbXBvcnQgeyBnZXRNb3ZpZURldGFpbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbW92aWUnO1xuaW1wb3J0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsIGFkZFRvTGlzdCwgcmVtb3ZlRnJvbUxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2xpc3RzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZGV0YWlsOiBzdGF0ZS5tb3ZpZS5kZXRhaWwsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG4gIGxpc3RzOiBzdGF0ZS5saXN0cy5saXN0cyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZURldGFpbDogaWQgPT4gZGlzcGF0Y2goZ2V0TW92aWVEZXRhaWwoaWQpKSxcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IChxdWVyeSwgbW92aWVJZCkgPT4gZGlzcGF0Y2goZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnksIG1vdmllSWQpKSxcbiAgYWRkVG9MaXN0OiAobGlzdE1vdmllLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goYWRkVG9MaXN0KGxpc3RNb3ZpZSwgY2FsbGJhY2spKSxcbiAgcmVtb3ZlRnJvbUxpc3Q6IChsaXN0TW92aWUsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChyZW1vdmVGcm9tTGlzdChsaXN0TW92aWUsIGNhbGxiYWNrKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vdmllKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVzYycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIHdpdGhHZW5yZXM6IFtdLFxuICAgIHllYXI6ICcnLFxuICAgIGNyZXdzOiBbXSxcbiAgICBjYXN0czogW10sXG4gIH0sXG4gIGlzTG9nZ2VkSW46ICEhdXNlci5lbWFpbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2NvdmVyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IHN0YXRlLm1vdmllcy5jb25jYXQoYWN0aW9uLm1vdmllcyksXG4gICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXG4gICAgICAgIHRvdGFsUGFnZXM6IGFjdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiBhY3Rpb24ucGFnZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0dFTlJFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBnZW5yZXM6IGFjdGlvbi5nZW5yZXMsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1FVRVJZOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogW10sXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5xdWVyeSwge1xuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgW2FjdGlvbi5maWVsZF06IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB1c2VyIG9iamVjdCB0byBhY2NvdW50IHJlZHVjZXJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9hY2NvdW50JztcbmltcG9ydCBkaXNjb3ZlciBmcm9tICcuL2Rpc2NvdmVyJztcbmltcG9ydCBtb3ZpZSBmcm9tICcuL21vdmllJztcbmltcG9ydCBsaXN0cyBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhY2NvdW50LFxuICBkaXNjb3ZlcixcbiAgbW92aWUsXG4gIGxpc3RzLFxuICBjb21tb24sXG59KTtcbiIsImltcG9ydCB7IFNFVF9MSVNUUywgU0VUX0xJU1RfTU9WSUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdHM6IFtdLFxuICB0b3RhbExpc3Q6IDAsXG4gIG1vdmllczogW10sXG4gIHRvdGFsTW92aWU6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9MSVNUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsaXN0czogYWN0aW9uLnBheWxvYWQubGlzdHMsXG4gICAgICAgIHRvdGFsTGlzdDogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0xJU1RfTU9WSUVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogYWN0aW9uLnBheWxvYWQubW92aWVzLFxuICAgICAgICB0b3RhbE1vdmllOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRldGFpbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRV9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24uZGV0YWlsLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgKSxcbiAgKTtcbn1cbiIsIlxuaW1wb3J0IHtcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXMsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICBzZXRMb2FkaW5nU3RhdHVzLFxufSBmcm9tICcuLi9hcHAvYWN0aW9ucy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcblxuICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuXG4gICAgc3dpdGNoIChzdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDQwNDpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9wYWdlLW5vdC1mb3VuZGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgQUxFUlRfVFlQRVMgPSBbXG4gICdwcmltYXJ5JyxcbiAgJ3NlY29uZGFyeScsXG4gICdzdWNjZXNzJyxcbiAgJ2RhbmdlcicsXG4gICd3YXJuaW5nJyxcbiAgJ2luZm8nLFxuICAnbGlnaHQnLFxuICAnZGFyaycsXG5dO1xuXG5leHBvcnQgY29uc3QgQUxFUlRfVFlQRV9JQ09OX01BUCA9IHtcbiAgcHJpbWFyeTogJycsXG59O1xuIiwiY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5cbmNvbnN0IHNldCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBkb2MuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xufTtcblxuY29uc3QgZ2V0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvYy5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBbY25hbWUsIGN2YWx1ZV0gPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGNuYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBjdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQsXG4gIHNldCxcbn07XG4iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7XG4gIGZhVXNlcixcbiAgZmFTaWduT3V0QWx0LFxuICBmYUVudmVsb3BlLFxuICBmYVVubG9jayxcbiAgZmFBbGlnbkxlZnQsXG4gIGZhS2V5LFxuICBmYVNpZ25hdHVyZSxcbiAgZmFGaWx0ZXIsXG4gIGZhU29ydEFtb3VudFVwLFxuICBmYVNvcnRBbW91bnREb3duLFxuICBmYVVzZXJDaXJjbGUsXG4gIGZhTGlzdCxcbiAgZmFTdGFyLFxuICBmYUhlYXJ0LFxuICBmYUNvbW1lbnQsXG4gIGZhU3dhdGNoYm9vayxcbiAgZmFVc2VyRnJpZW5kcyxcbiAgZmFDb2csXG4gIGZhRWRpdCxcbiAgZmFVcGxvYWQsXG4gIGZhTmV3c3BhcGVyLFxuICBmYUF0LFxuICBmYUFuZ2xlUmlnaHQsXG4gIGZhQW5nbGVMZWZ0LFxuICBmYVBsdXNTcXVhcmUsXG4gIGZhVHJhc2gsXG4gIGZhQ2hlY2ssXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge1xuICBmYUZhY2Vib29rLFxuICBmYUdvb2dsZSxcbiAgZmFUd2l0dGVyLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxpYnJhcnkuYWRkKFxuICAgIGZhVXNlcixcbiAgICBmYVNpZ25PdXRBbHQsXG4gICAgZmFFbnZlbG9wZSxcbiAgICBmYVVubG9jayxcbiAgICBmYUFsaWduTGVmdCxcbiAgICBmYUtleSxcbiAgICBmYVNpZ25hdHVyZSxcbiAgICBmYUZpbHRlcixcbiAgICBmYVNvcnRBbW91bnRVcCxcbiAgICBmYVNvcnRBbW91bnREb3duLFxuICAgIGZhRmFjZWJvb2ssXG4gICAgZmFHb29nbGUsXG4gICAgZmFUd2l0dGVyLFxuICAgIGZhSW5zdGFncmFtLFxuICAgIGZhVXNlckNpcmNsZSxcbiAgICBmYUxpc3QsXG4gICAgZmFTdGFyLFxuICAgIGZhSGVhcnQsXG4gICAgZmFDb21tZW50LFxuICAgIGZhU3dhdGNoYm9vayxcbiAgICBmYVVzZXJGcmllbmRzLFxuICAgIGZhQ29nLFxuICAgIGZhRWRpdCxcbiAgICBmYVVwbG9hZCxcbiAgICBmYU5ld3NwYXBlcixcbiAgICBmYUF0LFxuICAgIGZhQW5nbGVSaWdodCxcbiAgICBmYUFuZ2xlTGVmdCxcbiAgICBmYVBsdXNTcXVhcmUsXG4gICAgZmFUcmFzaCxcbiAgICBmYUNoZWNrLFxuICApO1xufVxuIiwiaW1wb3J0IHlhbGwgZnJvbSAneWFsbC1qcyc7XG5cbigoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHlhbGwoe1xuICAgICAgb2JzZXJ2ZUNoYW5nZXM6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9