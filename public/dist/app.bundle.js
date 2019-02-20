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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJzZXRBbGVydFN0YXR1cyIsIlRPR0dMRV9BTEVSVCIsInRvZ2dsZUFsZXJ0RGlhbG9nIiwic2V0VGltZW91dCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNldExpc3RNb3ZpZXMiLCJnZXRMaXN0TW92aWVzIiwibGlzdHMiLCJTRVRfTElTVFMiLCJtb3ZpZUlkIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwicm93cyIsImNvdW50IiwibGlzdCIsImNhbGxiYWNrIiwib3BzIiwibWV0aG9kIiwicmVzdWx0IiwiZGVsZXRlIiwibGlzdElkIiwiU0VUX0xJU1RfTU9WSUVTIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsInZpc3NuZSIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJGb290ZXIiLCJNZW51IiwicGF0aCIsIml0ZW1zIiwibWVudUl0ZW1zIiwibSIsImljb24iLCJzaGFwZSIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN1Ym1pdEJ1dHRvbiIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2UiLCJpc0ludGVnZXIiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwiTWF0aCIsImZsb29yIiwiYmMiLCJjZWlsIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwiUG9zdGVyIiwic3JjIiwiYWx0IiwiZGVmYXVsdENvdmVySW1hZ2VQYXRoIiwiUHJvZmlsZUNvbnRhaW5lciIsImF2YXRhciIsInByb2ZpbGVNZW51IiwiUHJvZ3Jlc3NCYXIiLCJoZWlnaHQiLCJ3aWR0aCIsIlNwaW5uZXIiLCJzaXplIiwiY29sb3IiLCJhZGRpb25hbENsYXNzIiwiY3JlYXRlSGVhZGVyIiwiZmllbGRzIiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJoaWRkZW4iLCJjcmVhdGVCb2R5Iiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsInRib2R5IiwiaXRlbSIsIml0ZW1GaWVsZHMiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImNyZWF0ZVBhZ2luYXRpb24iLCJkYXRhTGVuZ3RoIiwiVGFibGVMaXN0IiwicGFnaW5hdGlvbiIsInJlc3BvbnNpdmUiLCJvbkNyZWF0ZSIsIm9uRWRpdCIsIm9uRGVsZXRlIiwiYnRuR3JvdXAiLCJoZWFkcyIsImJvZHkiLCJwYWdpbmF0aW9uQnV0dG9ucyIsIlZpZGVvIiwidmlkZW9LZXkiLCJkb21haW4iLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9UT19MSVNUIiwiREVMRVRFX0ZST01fTElTVCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJBbGVydERpYWxvZyIsImZvcm0iLCJjb25maXJtUGFzc3dvcmQiLCJzd2l0Y2hGb3JtIiwiZXJyb3JNZXNzYWdlIiwiZW1haWxJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzUmVnaXN0ZXIiLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGF0ZSIsImJ1dHRvblRleHQiLCJzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0IiwicmVnaXN0ZXJJbnB1dCIsImhhbmRsZVN1Ym1pdCIsImRpc2NvdmVyIiwibG9hZE1vdmllcyIsInNob3dGaWx0ZXIiLCJwYXRobmFtZSIsIm1vdmllUXVlcnkiLCJsaXN0UXVlcnkiLCJzZWxlY3RlZE1vdmllIiwibW92aWVUYWJsZUZpZWxkcyIsImxpc3RUYWJsZUZpZWxkcyIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2hvd0xpc3RNb3ZpZXMiLCJzZXRMaXN0UXVlcnkiLCJzZXRNb3ZpZVF1ZXJ5IiwiZ2V0TGlzdHMiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJzYXZlIiwiYmFja1RvTGlzdCIsImRlbGV0ZUZyb21MaXN0IiwiYXNzaWduIiwic2hvd01vdmllcyIsInNob3dNb2RhbCIsInBhcnNlZFZhbHVlIiwicGFyc2VJbnQiLCJwdWJsaWMiLCJ0b3RhbExpc3QiLCJ0b3RhbE1vdmllIiwiY29udGVudCIsInMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0YWJsZUZpZWxkcyIsImxpc3RNb3ZpZSIsInNob3dMaXN0TW9kYWwiLCJ0b2dnbGVMaXN0TW9kYWwiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwibCIsImlzQWRkZWQiLCJsaXN0T2JqZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1cGxvYWRlZEF2YXRhciIsImZyaXN0TmFtZSIsImNvbmNhdCIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInRodW5rTWlkZGxld2FyZSIsImFqYXhFcnJvckhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiQUxFUlRfVFlQRV9JQ09OX01BUCIsInByaW1hcnkiLCJkb2MiLCJzZXQiLCJjb29raWVzIiwiY25hbWUiLCJjdmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyIiwiZmFTaWduT3V0QWx0IiwiZmFFbnZlbG9wZSIsImZhVW5sb2NrIiwiZmFBbGlnbkxlZnQiLCJmYUtleSIsImZhU2lnbmF0dXJlIiwiZmFGaWx0ZXIiLCJmYVNvcnRBbW91bnRVcCIsImZhU29ydEFtb3VudERvd24iLCJmYUZhY2Vib29rIiwiZmFHb29nbGUiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsImZhVXNlckNpcmNsZSIsImZhTGlzdCIsImZhU3RhciIsImZhSGVhcnQiLCJmYUNvbW1lbnQiLCJmYVN3YXRjaGJvb2siLCJmYVVzZXJGcmllbmRzIiwiZmFDb2ciLCJmYUVkaXQiLCJmYVVwbG9hZCIsImZhTmV3c3BhcGVyIiwiZmFBdCIsImZhQW5nbGVSaWdodCIsImZhQW5nbGVMZWZ0IiwiZmFQbHVzU3F1YXJlIiwiZmFUcmFzaCIsImZhQ2hlY2siLCJ3aW4iLCJhZGRFdmVudExpc3RlbmVyIiwib2JzZXJ2ZUNoYW5nZXMiLCJvbmxvYWQiLCJyZW1vdmUiLCJlbnYiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERB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QVVFQyxtQ0FWRixFQVdFQyw4QkFYRixFQVlFQyw0QkFaRixFQWFFQyw2QkFiRixFQWNFQywrQkFkRixFQWVFQywrQkFmRixFQWdCRUMseUJBaEJGLEVBaUJFQyx5QkFqQkYsRUFrQkVDLDBCQWxCRixFQW1CRUMsNEJBbkJGLEVBb0JFQywrQkFwQkYsRUFxQkVDLGdDQXJCRixFQXNCRUMsd0JBdEJGLEVBdUJFQyx5QkF2QkYsRUF3QkVDLDJCQXhCRixFQXlCRUMsOEJBekJGLEVBMEJFQyx1QkExQkYsRUEyQkVDLCtCQTNCRixFQTRCRUMsOEJBNUJGLEVBNkJFQywrQkE3QkYsRUE4QkVDLDBCQTlCRixFQStCRUMsMEJBL0JGO0FBaUNELEM7Ozs7Ozs7Ozs7Ozs7O0FDdkVEOzs7Ozs7QUFFQSxDQUFDLFlBQU07QUFDTCxNQUFNQyxNQUFNclosTUFBWjs7QUFFQWtTLFdBQVNvSCxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsRCwwQkFBSztBQUNIQyxzQkFBZ0I7QUFEYixLQUFMO0FBR0QsR0FKRDs7QUFNQUYsTUFBSUcsTUFBSixHQUFhLFlBQU07QUFDakIsUUFBTTlZLGNBQWN3UixTQUFTMkQsY0FBVCxDQUF3QixhQUF4QixDQUFwQjs7QUFFQSxRQUFJblYsV0FBSixFQUFpQjtBQUNmQSxrQkFBWStZLE1BQVo7QUFDRDs7QUFFRCxRQUFJcFQsT0FBT3FULEdBQVAsS0FBZSxZQUFuQixFQUFpQztBQUMvQixVQUFJLG1CQUFtQkMsU0FBdkIsRUFBa0M7QUFDaENBLGtCQUFVQyxhQUFWLENBQXdCQyxRQUF4QixDQUFpQyxRQUFqQztBQUNEO0FBQ0Y7QUFDRixHQVpEO0FBYUQsQ0F0QkQsSTs7Ozs7Ozs7Ozs7QUNGQSx1QyIsImZpbGUiOiJhcHAuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG4gXHRcdHZhciBleGVjdXRlTW9kdWxlcyA9IGRhdGFbMl07XG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdFx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuIFx0XHRkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzIHx8IFtdKTtcblxuIFx0XHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcbiBcdFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4gXHR9O1xuIFx0ZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKSB7XG4gXHRcdHZhciByZXN1bHQ7XG4gXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG4gXHRcdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG4gXHRcdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG4gXHRcdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcbiBcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuIFx0XHRcdH1cbiBcdFx0XHRpZihmdWxmaWxsZWQpIHtcbiBcdFx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcbiBcdFx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJhcHBcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gYWRkIGVudHJ5IG1vZHVsZSB0byBkZWZlcnJlZCBsaXN0XG4gXHRkZWZlcnJlZE1vZHVsZXMucHVzaChbXCIuL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4XCIsXCJjb21tb25cIixcInJlYWN0XCJdKTtcbiBcdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gcmVhZHlcbiBcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgQnJvd3NlclJvdXRlciBhcyBSb3V0ZXIsIFJvdXRlLCBTd2l0Y2ggfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcblxuLy8gUGFnZXNcbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL2NvbnRhaW5lcnMvRGlzY292ZXInO1xuaW1wb3J0IE1vdmllIGZyb20gJy4vY29udGFpbmVycy9Nb3ZpZSc7XG5pbXBvcnQgQXV0aCBmcm9tICcuL2NvbnRhaW5lcnMvQXV0aCc7XG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL2NvbnRhaW5lcnMvQWNjb3VudCc7XG5pbXBvcnQgTGlzdHMgZnJvbSAnLi9jb250YWluZXJzL0xpc3RzJztcbmltcG9ydCBOb3RGb3VuZCBmcm9tICcuL2NvbXBvbmVudHMvTm90Rm91bmQnO1xuXG4vLyBTaGFyZWQgQ29tcG9uZW50c1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4vY29udGFpbmVycy9BbGVydERpYWxvZyc7XG5cbmNvbnN0IFJvb3QgPSAoeyBzdG9yZSB9KSA9PiAoXG4gIDxQcm92aWRlciBzdG9yZT17c3RvcmV9PlxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxSb3V0ZXI+XG4gICAgICAgIDxTd2l0Y2g+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvXCIgZXhhY3QgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9jb21pbmctc29vblwiIGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvaW4tdGhlYXRlcnNcIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2F1dGhcIiBjb21wb25lbnQ9e0F1dGh9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcHJvZmlsZS9hY2NvdW50XCIgY29tcG9uZW50PXtBY2NvdW50fSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvbGlzdHNcIiBjb21wb25lbnQ9e0xpc3RzfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL21vdmllLzpzbHVnLzppZFwiIGNvbXBvbmVudD17TW92aWV9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvcGFnZS1ub3QtZm91bmRcIiBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICAgIDxSb3V0ZSBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxuICAgICAgICA8L1N3aXRjaD5cbiAgICAgIDwvUm91dGVyPlxuICAgICAgPEFsZXJ0RGlhbG9nIC8+XG4gICAgPC9GcmFnbWVudD5cbiAgPC9Qcm92aWRlcj5cbik7XG5cblJvb3QucHJvcFR5cGVzID0ge1xuICBzdG9yZTogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUm9vdDtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHNldExvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRBY2NvdW50RGV0YWlsID0gdXNlciA9PiAoe1xuICB0eXBlOiBTRVRfQUNDT1VOVF9ERVRBSUwsXG4gIHBheWxvYWQ6IHtcbiAgICB1c2VyLFxuICB9LFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBY2NvdW50RGV0YWlsID0gKCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MuZ2V0KCcvYXBpL2FjY291bnQnKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgIH0pXG4gICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gdXNlciA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dChgL2FwaS91c2VyLyR7dXNlci5pZH1gLCB1c2VyKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudERldGFpbChyZXNwb25zZS5kYXRhKSk7XG4gICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgbWVzc2FnZTogJ1Byb2ZpbGUgaGFzIGJlZW4gc3VjY2Vzc2Z1bGx5IHVwZGF0ZWQuJyxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgY2hhbmdlUGFzc3dvcmQgPSBwYXNzd29yZCA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLnB1dCgnL2FwaS91c2VyL2NoYW5nZS1wYXNzd29yZCcsIHBhc3N3b3JkKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6IGRhdGEubWVzc2FnZSxcbiAgICAgIH0pKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IGxvZ2luUmVnaXN0ZXIgPSAoZGF0YSwgdXJsKSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wb3N0KHVybCwgZGF0YSkudGhlbigoKSA9PiB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnLyc7XG4gICAgLy8gVE9ETzogc2V0IHVzZXIgaW5mb3JtYXRpb24gdG8gY29tbW9uIHN0YXRlXG4gIH0pLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbn07XG5cbmV4cG9ydCBjb25zdCBsb2dvdXQgPSAoKSA9PiB7XG5cbn07XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBzZXRBbGVydFN0YXR1cyA9ICh7IG1lc3NhZ2UsIGtpbmQgfSkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0FMRVJULFxuICBtZXNzYWdlLFxuICBraW5kLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBbGVydERpYWxvZyA9ICh7IG1lc3NhZ2UsIGtpbmQgfSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldEFsZXJ0U3RhdHVzKHsgbWVzc2FnZSwga2luZCB9KSk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldEFsZXJ0U3RhdHVzKHt9KSk7XG4gIH0sIDMwMDApO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFBhZ2VMb2FkaW5nU3RhdHVzID0gc3RhdHVzID0+ICh7XG4gIHR5cGU6IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBwYWdlTG9hZGluZzogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRMb2FkaW5nU3RhdHVzID0gc3RhdHVzID0+ICh7XG4gIHR5cGU6IFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgbG9hZGluZzogc3RhdHVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVGaWx0ZXIgPSAoKSA9PiAoe1xuICB0eXBlOiBUT0dHTEVfRklMVEVSLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRVcGxvYWRlZEltYWdlID0gdXBsb2FkZWRGaWxlID0+ICh7XG4gIHR5cGU6IFNFVF9VUExPQURFRF9JTUFHRSxcbiAgcGF5bG9hZDogdXBsb2FkZWRGaWxlLFxufSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfUVVFUlksIFNFVF9HRU5SRVMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcblxuZXhwb3J0IGNvbnN0IHNldE1vdmllcyA9IHJlc3BvbnNlID0+ICh7XG4gIHR5cGU6IFNFVF9NT1ZJRVMsXG4gIG1vdmllczogcmVzcG9uc2UucmVzdWx0cyxcbiAgcGFnZTogKHJlc3BvbnNlLnBhZ2UgKyAxKSxcbiAgdG90YWxQYWdlczogcmVzcG9uc2UudG90YWxfcGFnZXMsXG4gIHRvdGFsOiByZXNwb25zZS50b3RhbF9yZXN1bHRzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZXMgPSAocXVlcnkpID0+IHtcbiAgbGV0IHVybCA9ICdhcGkvZGlzY292ZXInO1xuXG4gIE9iamVjdC5rZXlzKHF1ZXJ5KS5mb3JFYWNoKChxdWVyeU5hbWUsIGkpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHF1ZXJ5W3F1ZXJ5TmFtZV07XG4gICAgY29uc3Qgb3AgPSBpID09PSAwXG4gICAgICA/ICc/J1xuICAgICAgOiAnJic7XG5cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgICAgdXJsICs9IGAke29wfSR7cXVlcnlOYW1lfT0ke3ZhbHVlfWA7XG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgbGV0IG11bHRpUXVlcnkgPSBgJHtxdWVyeU5hbWV9PWA7XG4gICAgICAgIHZhbHVlLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgICBtdWx0aVF1ZXJ5ICs9IGAke3Z9LGA7XG4gICAgICAgIH0pO1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHttdWx0aVF1ZXJ5fWA7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZ2V0KHVybClcbiAgICAgIC50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldE1vdmllcyhkYXRhKSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRRdWVyeSA9ICh7IGZpZWxkLCB2YWx1ZSB9KSA9PiAoZGlzcGF0Y2gpID0+IHtcbiAgZGlzcGF0Y2goe1xuICAgIHR5cGU6IFNFVF9RVUVSWSxcbiAgICBmaWVsZCxcbiAgICB2YWx1ZSxcbiAgfSk7XG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRHZW5yZXMgPSBnZW5yZXMgPT4gKHtcbiAgdHlwZTogU0VUX0dFTlJFUyxcbiAgZ2VucmVzLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRHZW5yZXMgPSAoKSA9PiBkaXNwYXRjaCA9PiBheGlvc1xuICAuZ2V0KCcvYXBpL2dlbnJlJylcbiAgLnRoZW4oKHsgZGF0YSB9KSA9PiBkaXNwYXRjaChzZXRHZW5yZXMoZGF0YSkpKVxuICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi9saWIvY29va2llJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuaW1wb3J0IHsgU0VUX0xJU1RfTU9WSUVTLCBTRVRfTElTVFMgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldExvYWRpbmdTdGF0dXMsIHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcblxuZXhwb3J0IGZ1bmN0aW9uIHNldExpc3QoeyBsaXN0cywgdG90YWwgfSkge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFNFVF9MSVNUUyxcbiAgICBwYXlsb2FkOiB7XG4gICAgICBsaXN0cyxcbiAgICAgIHRvdGFsLFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0QnlDdXJyZW50VXNlcih7IHBhZ2UsIGxpbWl0IH0sIG1vdmllSWQpIHtcbiAgY29uc3QgY3VycmVudFVzZXJJZCA9IGNvb2tpZS5nZXQoJ3VzZXJfaWQnKTtcblxuICBpZiAoIWN1cnJlbnRVc2VySWQpIHtcbiAgICByZXR1cm4gKHtcbiAgICAgIHR5cGU6IFNFVF9MSVNUUyxcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgbGlzdHM6IFtdLFxuICAgICAgICB0b3RhbDogMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBsZXQgdXJsID0gYC9hcGkvbGlzdHM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YDtcblxuICBpZiAobW92aWVJZCkge1xuICAgIHVybCArPSBgJm1vdmllSWQ9JHttb3ZpZUlkfWA7XG4gIH1cblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3ModXJsKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRMaXN0KHtcbiAgICAgICAgICBsaXN0czogcmVzcG9uc2UuZGF0YS5yb3dzLFxuICAgICAgICAgIHRvdGFsOiByZXNwb25zZS5kYXRhLmNvdW50LFxuICAgICAgICB9KSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVMaXN0KGxpc3QsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IG9wcyA9ICFsaXN0LmlkID8ge1xuICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgIHVybDogJy9hcGkvbGlzdHMnLFxuICB9IDoge1xuICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgIHVybDogYC9hcGkvbGlzdHMvJHtsaXN0LmlkfWAsXG4gICAgfTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3Nbb3BzLm1ldGhvZF0ob3BzLnVybCwgbGlzdClcbiAgICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3VsdC5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGlzdChpZCwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9saXN0cy8ke2lkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRUb0xpc3QoeyBsaXN0SWQsIG1vdmllSWQgfSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLnBvc3QoYC9hcGkvbGlzdHMvJHtsaXN0SWR9L21vdmllLyR7bW92aWVJZH1gLCB7fSlcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRnJvbUxpc3QoeyBsaXN0SWQsIG1vdmllSWQgfSwgY2FsbGJhY2spIHtcbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmRlbGV0ZShgL2FwaS9saXN0cy8ke2xpc3RJZH0vbW92aWUvJHttb3ZpZUlkfWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICAgIG1lc3NhZ2U6IHJlc3BvbnNlLmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldExpc3RNb3ZpZXMoeyByb3dzLCBjb3VudCB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xJU1RfTU9WSUVTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIG1vdmllczogcm93cyxcbiAgICAgIHRvdGFsOiBjb3VudCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdE1vdmllcyhxdWVyeSwgY2FsbGJhY2spIHtcbiAgY29uc3QgeyBsaXN0SWQsIHBhZ2UsIGxpbWl0IH0gPSBxdWVyeTtcblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZ2V0KGAvYXBpL2xpc3RzLyR7bGlzdElkfT9wYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TGlzdE1vdmllcyhyZXNwb25zZS5kYXRhKSk7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRV9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVEZXRhaWwgPSBkZXRhaWwgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFX0RFVEFJTCxcbiAgZGV0YWlsLFxufSk7XG5cbmV4cG9ydCBjb25zdCBnZXRNb3ZpZURldGFpbCA9IGlkID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRNb3ZpZURldGFpbChudWxsKSk7XG5cbiAgYXhpb3MuZ2V0KGAvYXBpL21vdmllLyR7aWR9YClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKFxuICAgICAgc2V0TW92aWVEZXRhaWwoZGF0YSksXG4gICAgKSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBtZXNzYWdlLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHctMTAwIHRleHQtY2VudGVyYH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbiAga2luZDogJ2luZm8nLFxufTtcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDYXN0U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0ICcuL0Nhc3Quc2Nzcyc7XG5cbmNvbnN0IENhc3QgPSAoe1xuICBpZCxcbiAgbmFtZSxcbiAgY2hhcmFjdGVyLFxuICBwcm9maWxlUGF0aCxcbn0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXN0XCI+XG4gICAgPGltZyBjbGFzc05hbWU9XCJpbWFnZVwiIHNyYz17cHJvZmlsZVBhdGh9IGFsdD17bmFtZX0gLz5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhc3QtaW5mb1wiPlxuICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaGFzLXRleHQtd2VpZ2h0LWJvbGRcIj57bmFtZX08L3NwYW4+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtbGlnaHRcIj57Y2hhcmFjdGVyfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG4pO1xuXG5DYXN0LnByb3BUeXBlcyA9IENhc3RTaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDYXN0U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENhc3QgZnJvbSAnLi4vQ2FzdCc7XG5pbXBvcnQgJy4vQ2FzdExpc3Quc2Nzcyc7XG5cbmNvbnN0IENhc3RMaXN0ID0gKHsgY2FzdHMgfSkgPT4ge1xuICBjb25zdCBjYXN0TGlzdCA9IGNhc3RzLm1hcChjID0+IChcbiAgICA8Q2FzdFxuICAgICAga2V5PXtjLmlkfVxuICAgICAgbmFtZT17Yy5uYW1lfVxuICAgICAgcHJvZmlsZVBhdGg9e2MucHJvZmlsZVBhdGh9XG4gICAgICBjaGFyYWN0ZXI9e2MuY2hhcmFjdGVyfVxuICAgIC8+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGNhc3QtbGlzdFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DYXN0IGxpc3Q8L2g1PlxuICAgICAgICB7Y2FzdExpc3R9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkNhc3RMaXN0LnByb3BUeXBlcyA9IHtcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mKENhc3RTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhc3RMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgQ29tcGFueVNoYXBlIH0gZnJvbSAnLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuY29uc3QgQ29tcGFueSA9ICh7IGxvZ28sIG5hbWUgfSkgPT4ge1xuICBjb25zdCBsb2dvUGF0aCA9IGxvZ29cbiAgICA/IGAke3Zpc3NuZS5pbWFnZXNTZWN1cmVCYXNlVXJsfS93OTIvJHtsb2dvfWBcbiAgICA6IGAke3Zpc3NuZS5jZG59L2ltYWdlcy9wbGFjZWhvbGRlci5wbmdgO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYSBtYi0yXCI+XG4gICAgICA8aW1nIGNsYXNzTmFtZT1cIm1yLTMgY29tcGFueS1sb2dvXCIgc3JjPXtsb2dvUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wXCI+e25hbWV9PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ29tcGFueS5kZWZhdWx0UHJvcHMgPSB7XG4gIGxvZ286ICcnLFxuICBuYW1lOiAnQ29tcGFueScsXG59O1xuXG5Db21wYW55LnByb3BUeXBlcyA9IENvbXBhbnlTaGFwZTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcGFueTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IENvbXBhbnkgZnJvbSAnLi4vQ29tcGFueSc7XG5pbXBvcnQgJy4vQ29tcGFueUxpc3Quc2Nzcyc7XG5cbmNvbnN0IENvbXBhbnlMaXN0ID0gKHsgY29tcGFuaWVzIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIG1iLTJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Db21wYW5pZXM8L2g1PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTJcIj5cbiAgICAgICAge2NvbXBhbmllcy5tYXAoYyA9PiAoXG4gICAgICAgICAgPENvbXBhbnkga2V5PXtjLmlkfSBsb2dvPXtjLmxvZ29fcGF0aH0gbmFtZT17Yy5uYW1lfSAvPlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNvbXBhbnlMaXN0LnByb3BUeXBlcyA9IHtcbiAgY29tcGFuaWVzOiBQcm9wVHlwZXMuYXJyYXlPZihDb21wYW55U2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55TGlzdDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBEZXRhaWxUYWJsZSA9ICh7IG1vdmllIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+e2Ake21vdmllLm9yZ2luYWxUaXRsZX0gKCR7bW92aWUueWVhcn0pYH08L2g1PlxuICAgICAgPHRhYmxlIGNsYXNzTmFtZT1cInRhYmxlIHRhYmxlLXN0cmlwZWQgdGFibGUtcmVzcG9uc2l2ZS1zbSB0YWJsZS1yZXNwb25zaXZlLXhzXCI+XG4gICAgICAgIDx0Ym9keT5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmF0aW5nPC90aD5cbiAgICAgICAgICAgIDx0ZD57YCR7bW92aWUudm90ZV9hdmVyYWdlfSAoJHttb3ZpZS52b3RlX2NvdW50fSlgfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+UmVsZWFzZSBEYXRlPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUucmVsZWFzZV9kYXRlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+R2VucmVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZ2VucmVOYW1lc308L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPlRhZ2xpbmU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS50YWdsaW5lfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+Q291bnRyaWVzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuY291bnRyaWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+TGFuZ3VhZ2VzPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUubGFuZ3VhZ2V9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5EaXJlY3RvcjwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLmRpcmVjdG9yfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+V3JpdGVyPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUud3JpdGVyfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+SG9tZXBhZ2U8L3RoPlxuICAgICAgICAgICAgPHRkPlxuICAgICAgICAgICAgICA8YSBocmVmPXttb3ZpZS5ob21lcGFnZX0gcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiIHRhcmdldD1cIl9ibGFua1wiPnttb3ZpZS5ob21lcGFnZX08L2E+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkRldGFpbFRhYmxlLnByb3BUeXBlcyA9IHtcbiAgbW92aWU6IE1vdmllU2hhcGUuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbFRhYmxlO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgeyBHZW5yZVNoYXBlLCBGaWx0ZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgeyBTT1JUX09QVElPTlMgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCAnLi9GaWx0ZXIuc2Nzcyc7XG5cbmZ1bmN0aW9uIHN3aXRjaFNvcnRRdWVyeShzb3J0QnkpIHtcbiAgY29uc3QgW25hbWUsIGtpbmRdID0gc29ydEJ5LnNwbGl0KCcuJyk7XG4gIGNvbnN0IHZhbHVlID0gYCR7bmFtZX0uJHtraW5kID09PSAnZGVzYycgPyAnYXNjJyA6ICdkZXNjJ31gO1xuICByZXR1cm4ge1xuICAgIGZpZWxkOiAnc29ydEJ5JyxcbiAgICB2YWx1ZSxcbiAgfTtcbn1cblxuZnVuY3Rpb24gYWRkR2VucmVJZCh2YWx1ZSwgY3VycmVudEdlbnJlcykge1xuICBjb25zdCBpbmRleCA9IGN1cnJlbnRHZW5yZXMuaW5kZXhPZih2YWx1ZSk7XG4gIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICBjdXJyZW50R2VucmVzLnB1c2godmFsdWUpO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRHZW5yZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgfVxuICByZXR1cm4gY3VycmVudEdlbnJlcztcbn1cblxuZnVuY3Rpb24gaGFuZGxlQ2hhbmdlWWVhcih5ZWFyLCBzZXRRdWVyeSkge1xuICBpZiAoeWVhci5sZW5ndGggPT09IDQgJiYgIU51bWJlci5pc05hTih5ZWFyKSkge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogeWVhcixcbiAgICB9KTtcbiAgfSBlbHNlIGlmICh5ZWFyID09PSAnJykge1xuICAgIHNldFF1ZXJ5KHtcbiAgICAgIGZpZWxkOiAneWVhcicsXG4gICAgICB2YWx1ZTogbnVsbCxcbiAgICB9KTtcbiAgfVxufVxuXG5jb25zdCBGaWx0ZXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGdlbnJlcyxcbiAgICBzZXRRdWVyeSxcbiAgICBxdWVyeSxcbiAgICBzaG93LFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb25zdCBzb3J0SWNvbkNsYXNzID0gcXVlcnkuc29ydEJ5LnNwbGl0KCcuJylbMV0gPT09ICdkZXNjJ1xuICAgID8gJ2Rvd24nXG4gICAgOiAndXAnO1xuXG4gIGNvbnN0IHNvcnRPcHRpb25zID0gU09SVF9PUFRJT05TLm1hcCgoc29ydCkgPT4ge1xuICAgIGNvbnN0IGtleSA9IHNvcnQubmFtZS5yZXBsYWNlKC8gL2csICdfJykudG9Mb2NhbGVMb3dlckNhc2UoKTtcbiAgICByZXR1cm4gKFxuICAgICAgPG9wdGlvbiBrZXk9e2tleX0gdmFsdWU9e2Ake2tleX0uJHtzb3J0LnZhbHVlfWB9PlxuICAgICAgICB7c29ydC5uYW1lfVxuICAgICAgPC9vcHRpb24+XG4gICAgKTtcbiAgfSk7XG5cbiAgY29uc3QgZ2VucmVPcHRpb25zID0gZ2VucmVzLm1hcChnID0+IChcbiAgICA8b3B0aW9uIGtleT17Zy5pZH0gdmFsdWU9e2cuaWR9IGNsYXNzTmFtZT17cXVlcnkud2l0aEdlbnJlcy5pbmRleE9mKGAke2cuaWR9YCkgPT09IC0xID8gJycgOiAnc2VsZWN0ZWQnfT5cbiAgICAgIHtnLm5hbWV9XG4gICAgPC9vcHRpb24+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgc3RpY2t5LXRvcCBiZy13aGl0ZSBtYi0yIHB0LTIgc2hhZG93LXNtIGQtbm9uZSBkLWxnLWZsZXhcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICB2YWx1ZT17cXVlcnkuc2VhcmNoVGV4dH1cbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICdzZWFyY2hUZXh0JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPHNlbGVjdFxuICAgICAgICAgIG5hbWU9XCJnZW5yZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnd2l0aEdlbnJlcycsIHZhbHVlOiBhZGRHZW5yZUlkKCRldmVudC50YXJnZXQudmFsdWUsIHF1ZXJ5LndpdGhHZW5yZXMpIH0pfVxuICAgICAgICA+XG4gICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPkdlbnJlczwvb3B0aW9uPlxuICAgICAgICAgIHtnZW5yZU9wdGlvbnN9XG4gICAgICAgIDwvc2VsZWN0PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgICBuYW1lPVwic29ydEJ5XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgICAgaWQ9XCJzb3J0T3B0aW9uU2VsZWN0XCJcbiAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJTb3J0IG9wdGlvbnNcIlxuICAgICAgICAgICAgdmFsdWU9e3F1ZXJ5LnNvcnRCeX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NvcnRCeScsIHZhbHVlOiAkZXZlbnQudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5Tb3J0IEJ5PC9vcHRpb24+XG4gICAgICAgICAgICB7c29ydE9wdGlvbnN9XG4gICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgZmlsdGVyLWlucHV0LWJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFF1ZXJ5KHN3aXRjaFNvcnRRdWVyeShxdWVyeS5zb3J0QnkpKX1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtgc29ydC1hbW91bnQtJHtzb3J0SWNvbkNsYXNzfWB9IC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGlucHV0XG4gICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWWVhclwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBoYW5kbGVDaGFuZ2VZZWFyKCRldmVudC50YXJnZXQudmFsdWUsIHNldFF1ZXJ5KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuRmlsdGVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogdHJ1ZSxcbn07XG5cbkZpbHRlci5wcm9wVHlwZXMgPSB7XG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZpbHRlcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Gb290ZXIuc2Nzcyc7XG5cbmNvbnN0IEZvb3RlciA9ICgpID0+IChcbiAgPGZvb3RlciBjbGFzc05hbWU9XCJmb290ZXJcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgcHktNVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+QWJvdXQgVXM8L2g1PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8aDU+U29jaWFsPC9oNT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgZmFjZWJvb2tcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIHR3aXR0ZXJcbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiPlxuICAgICAgICAgICAgICAgIGluc3RhZ3JhbVxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC00XCI+XG4gICAgICAgICAgPGg1Pkxhc3QgUmV2aWV3czwvaDU+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImxpc3QtdW5zdHlsZWRcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWEgbXktNFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibWVkaWFcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpYS1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTAgbWItMVwiPkxpc3QtYmFzZWQgbWVkaWEgb2JqZWN0PC9oNj5cbiAgICAgICAgICAgICAgICBDcmFzIHNpdCBhbWV0IG5pYmggbGliZXJvLCBpbiBncmF2aWRhIG51bGxhLiBOdWxsYSB2ZWwgbWV0dXMuLi5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+Q29udGFjdDwvaDU+XG4gICAgICAgICAgPHA+KzI1NSAwMDAgMDAgMDAgMDA8L3A+XG4gICAgICAgICAgPHA+aW5mb0B2aXNzbmUuY29tPC9wPlxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtdC0yXCI+TGFzdCBVcGRhdGVzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cCBsaXN0LWdyb3VwLWZsdXNoXCI+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+QWRkIGNvbW1vbiBmaWx0ZXIgZm9yIG1vdmllczwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+R29vZ2xlIGF1dGggb3B0aW9ucyBpcyBjb21wbGV0ZWQ8L2xpPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImxpc3QtZ3JvdXAtaXRlbVwiPkZpeGVkIEZhY2Vib29rIGF1dGggaXNzdWVzPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbWItMVwiPlxuICAgICAgICA8c3Bhbj5Db3B5cmlnaHQgwqkgMjAxOSBWaXNzbmU8L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9mb290ZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBGb290ZXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXItZG9tJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IE1lbnUgPSAoeyBwYXRoLCBpdGVtcyB9KSA9PiB7XG4gIGNvbnN0IG1lbnVJdGVtcyA9IGl0ZW1zLm1hcChtID0+IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIiBrZXk9e20ucGF0aH0+XG4gICAgICA8TGlua1xuICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke20ucGF0aCA9PT0gcGF0aCA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgdG89e20ucGF0aH1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXttLmljb259IC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTJcIj57bS5uYW1lfTwvc3Bhbj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDx1bCBjbGFzc05hbWU9XCJuYXYgbmF2LXRhYnMganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAge21lbnVJdGVtc31cbiAgICA8L3VsPlxuICApO1xufTtcblxuTWVudS5wcm9wVHlwZXMgPSB7XG4gIHBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaXRlbXM6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zaGFwZSh7XG4gICAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIGljb246IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIH0pKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTWVudTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vTW9kYWwuc2Nzcyc7XG5cbmNvbnN0IE1vZGFsID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICB0aXRsZSxcbiAgICBjYW5jZWwsXG4gICAgc3VibWl0LFxuICAgIGNoaWxkcmVuLFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBjbGFzc05hbWUgPSBzaG93ID8gJ3Nob3cgZC1ibG9jaycgOiAnJztcbiAgY29uc3Qgc3VibWl0QnV0dG9uID0gc3VibWl0XG4gICAgPyA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIiBvbkNsaWNrPXtzdWJtaXR9PlNhdmU8L2J1dHRvbj5cbiAgICA6IG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YG1vZGFsIGZhZGUgJHtjbGFzc05hbWV9YH0gdGFiSW5kZXg9XCItMVwiIHJvbGU9XCJkaWFsb2dcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBkYXRhLWJhY2tkcm9wPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1kaWFsb2cgbW9kYWwtZGlhbG9nLXNjcm9sbGFibGVcIiByb2xlPVwiZGlhbG9nXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwibW9kYWwtdGl0bGVcIj57dGl0bGV9PC9oNT5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXtjYW5jZWx9PlxuICAgICAgICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1ib2R5XCI+XG4gICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1mb290ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tc2Vjb25kYXJ5XCIgZGF0YS1kaXNtaXNzPVwibW9kYWxcIiBvbkNsaWNrPXtjYW5jZWx9PkNsb3NlPC9idXR0b24+XG4gICAgICAgICAgICB7c3VibWl0QnV0dG9ufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW9kYWwuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbn07XG5cbk1vZGFsLnByb3BUeXBlcyA9IHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2FuY2VsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzdWJtaXQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kYWw7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IFBvc3RlciBmcm9tICcuLi9Qb3N0ZXInO1xuaW1wb3J0ICcuL01vdmllQ2FyZC5zY3NzJztcblxuY29uc3QgTW92aWVDYXJkID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBpZCxcbiAgICB0aXRsZSxcbiAgICBpbWFnZSxcbiAgICByYXRlLFxuICAgIHNsdWcsXG4gIH0gPSBwcm9wcztcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwibW92aWUtY2FyZCBoLTEwMCB3LTEwMCByb3VuZGVkLTAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGltZy10aHVtYm5haWxcIj5cbiAgICAgIDxMaW5rIHRvPXtgbW92aWUvJHtzbHVnfS8ke2lkfWB9IGNsYXNzTmFtZT1cInctMTAwXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImJhZGdlIHJhdGluZy10YWcgc2hhZG93LXNtIGQtZmxleCBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIHtyYXRlfVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxQb3N0ZXIgc3JjPXtpbWFnZX0gYWx0PXt0aXRsZX0gLz5cbiAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk1vdmllQ2FyZC5wcm9wVHlwZXMgPSB7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGltYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHJhdGU6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgc2x1ZzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVDYXJkO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IE1vdmllU2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IE1vdmllQ2FyZCBmcm9tICcuL01vdmllQ2FyZCc7XG5cbmNvbnN0IE1vdmllTGlzdCA9ICh7IG1vdmllcyB9KSA9PiB7XG4gIGNvbnN0IGxpc3QgPSBtb3ZpZXMubWFwKG1vdmllID0+IChcbiAgICA8ZGl2IGtleT17bW92aWUuaWR9IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtNCBjb2wtbGctMiBtYi0yIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICA8TW92aWVDYXJkXG4gICAgICAgIGlkPXttb3ZpZS5pZH1cbiAgICAgICAgaW1hZ2U9e21vdmllLnBvc3Rlcn1cbiAgICAgICAgdGl0bGU9e21vdmllLnRpdGxlfVxuICAgICAgICByYXRlPXttb3ZpZS52b3RlQXZlcmFnZX1cbiAgICAgICAgc2x1Zz17bW92aWUuc2x1Z31cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgIHtsaXN0fVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVMaXN0LnByb3BUeXBlcyA9IHtcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTW92aWVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0LCB7IEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vTmF2YmFyLnNjc3MnO1xuXG5jb25zdCBOYXZiYXIgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHVzZXIsXG4gICAgaXNMb2dnZWRJbixcbiAgICBwYXRoTmFtZSxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGxvZ2luQnV0dG9uID0gaXNMb2dnZWRJbiA/IChcbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW0gXCI+XG4gICAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgdG89XCIvcHJvZmlsZS9hY2NvdW50XCIgdGl0bGU9XCJQcm9maWxlXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibXItMlwiPnt1c2VyLnVzZXJOYW1lfTwvc3Bhbj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1c2VyXCIgLz5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9saT5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiIGhyZWY9XCIvbG9nb3V0XCIgdGl0bGU9XCJMb2dvdXRcIj5cbiAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduLW91dC1hbHRcIiAvPlxuICAgICAgICA8L2E+XG4gICAgICA8L2xpPlxuICAgIDwvRnJhZ21lbnQ+XG4gICkgOiAoXG4gICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICA8TGluayB0bz1cIi9hdXRoXCIgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5sb2dpbjwvTGluaz5cbiAgICA8L2xpPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9XCJuYXZiYXIgbmF2YmFyLWV4cGFuZC1sZyBuYXZiYXItZGFyayBiZy1kYXJrXCI+XG4gICAgICA8TGluayBjbGFzc05hbWU9XCJuYXZiYXItYnJhbmRcIiB0bz1cIi9cIj5cbiAgICAgICAgPGltZ1xuICAgICAgICAgIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH1cbiAgICAgICAgICBhbHQ9XCJWaXNzbmVcIlxuICAgICAgICAgIGhlaWdodD1cIjMwXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJteC1hdXRvIGQtYmxvY2tcIlxuICAgICAgICAvPlxuICAgICAgPC9MaW5rPlxuXG4gICAgICA8ZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGlkPVwiZmlsdGVyQnV0dG9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImZpbHRlclwiIC8+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwibmF2YmFyLXRvZ2dsZXJcIlxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGRhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIlxuICAgICAgICAgIGRhdGEtdGFyZ2V0PVwiI25hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJuYXZiYXJTdXBwb3J0ZWRDb250ZW50XCJcbiAgICAgICAgICBhcmlhLWV4cGFuZGVkPVwiZmFsc2VcIlxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJUb2dnbGUgbmF2aWdhdGlvblwiXG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlci1pY29uXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xsYXBzZSBuYXZiYXItY29sbGFwc2VcIiBpZD1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIj5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9pbi10aGVhdGVycycgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2luLXRoZWF0ZXJzXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgaW4gdGhlYXRlcnNcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiPlxuICAgICAgICAgICAgPExpbmtcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbmF2LWxpbmsgJHtwYXRoTmFtZSA9PT0gJy9jb21pbmctc29vbicgPyAnYWN0aXZlJyA6ICcnfWB9XG4gICAgICAgICAgICAgIHRvPVwiL2NvbWluZy1zb29uXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgY29taW5nIHNvb25nXG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm5hdmJhci1uYXYgbXktYXV0b1wiPlxuICAgICAgICAgIHtsb2dpbkJ1dHRvbn1cbiAgICAgICAgPC91bD5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuTmF2YmFyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHVzZXI6IHt9LFxuICBwYXRoTmFtZTogJy8nLFxufTtcblxuTmF2YmFyLnByb3BUeXBlcyA9IHtcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgcGF0aE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgJy4vTm90Rm91bmQuc2Nzcyc7XG5cbmNvbnN0IE5vdEZvdW5kID0gKCkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInBhZ2Utbm90LWZvdW5kXCI+XG4gICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9vbmcucG5nYH0gYWx0PVwiNDA0XCIgLz5cbiAgICA8aDQ+NDA0PC9oND5cbiAgICA8aDU+UGFnZSBub3QgZm91bmQ8L2g1PlxuICAgIDxwPlxuICAgICAgV2UgYXJlIHNvcnJ5LiBUaGUgcGFnZSB5b3UgYXJlIGxvb2tpbmcgZm9yIHdhcyBtb3ZlZCwgcmVtb3ZlZCwgcmVuYW1lZCBvciBtaWdodCBuZXZlciBleGlzdGVkLlxuICAgIDwvcD5cbiAgICA8YSBocmVmPVwiL1wiIGNsYXNzTmFtZT1cImJ1dHRvbiBpcy1wcmltYXJ5XCI+R08gVE8gSE9NRTwvYT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBOb3RGb3VuZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuL1NwaW5uZXInO1xuXG5jb25zdCBQYWdlTG9hZGluZyA9ICh7IHNob3cgfSkgPT4ge1xuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1maXhlZCB0b3AtMCBsZWZ0LTAgYm90dG9tLTAgYmctbGlnaHQgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgYWxpZ24taXRlbXMtY2VudGVyIHctMTAwIGgtMTAwXCI+XG4gICAgICA8U3Bpbm5lciBzaG93IHNpemU9XCJsZ1wiIGFkZGlvbmFsQ2xhc3M9XCJtci0yXCIgLz5cbiAgICAgIExvYWRpbmcuLi5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblBhZ2VMb2FkaW5nLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2VMb2FkaW5nO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5jb25zdCBoYW5kbGVDbGljayA9IChwYWdlLCBjdXJyZW50UGFnZSwgdG90YWxQYWdlKSA9PiB7XG4gIGxldCByZXN1bHQgPSAxO1xuXG4gIGlmIChOdW1iZXIuaXNJbnRlZ2VyKHBhZ2UpKSB7XG4gICAgcmV0dXJuIHsgcGFnZSB9O1xuICB9XG5cbiAgaWYgKHBhZ2UgPT09ICdwcmV2Jykge1xuICAgIGNvbnN0IG5ld1BhZ2UgPSAoY3VycmVudFBhZ2UgLSAxKTtcbiAgICByZXN1bHQgPSBuZXdQYWdlID09PSAwID8gMSA6IG5ld1BhZ2U7XG4gIH0gZWxzZSBpZiAocGFnZSA9PT0gJ25leHQnKSB7XG4gICAgcmVzdWx0ID0gKChjdXJyZW50UGFnZSArIDEpID4gdG90YWxQYWdlKVxuICAgICAgPyB0b3RhbFBhZ2VcbiAgICAgIDogKGN1cnJlbnRQYWdlICsgMSk7XG4gIH1cblxuICByZXR1cm4geyBwYWdlOiByZXN1bHQgfTtcbn07XG5cbmNvbnN0IGdlbmVyYXRlUGFnZU51bWJlcnMgPSAob3B0aW9ucykgPT4ge1xuICBjb25zdCB7XG4gICAgcGFnZSxcbiAgICBsaW1pdCxcbiAgICB0b3RhbCxcbiAgICBidXR0b25Db3VudCxcbiAgfSA9IG9wdGlvbnM7XG4gIGNvbnN0IHBhZ2VOdW1iZXJzID0gW107XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XG4gIGNvbnN0IGJjID0gTWF0aC5jZWlsKGJ1dHRvbkNvdW50IC8gMik7XG5cbiAgZm9yIChsZXQgaSA9IChwYWdlIC0gKGJjIC0gMSkpOyBpIDwgKHBhZ2UgKyBiYyk7IGkgKz0gMSkge1xuICAgIGlmIChpID4gMCAmJiBpIDw9IHRvdGFsUGFnZSkge1xuICAgICAgcGFnZU51bWJlcnMucHVzaChpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFnZU51bWJlcnM7XG59O1xuXG5cbmNvbnN0IFBhZ2luYXRpb24gPSAoeyBvcHRpb25zIH0pID0+IHtcbiAgY29uc3QgeyBwYWdlLCBvblBhZ2luYXRlLCBsaW1pdCwgdG90YWwgfSA9IG9wdGlvbnM7XG5cbiAgY29uc3QgcGFnZU51bWJlcnMgPSBnZW5lcmF0ZVBhZ2VOdW1iZXJzKG9wdGlvbnMpO1xuICBjb25zdCB0b3RhbFBhZ2UgPSBNYXRoLmZsb29yKHRvdGFsIC8gbGltaXQpO1xuXG4gIGlmIChwYWdlTnVtYmVycy5sZW5ndGggPCAyKSB7XG4gICAgcmV0dXJuIDxzcGFuIC8+O1xuICB9XG5cbiAgY29uc3QgcGFnZUJ1dHRvbnMgPSBwYWdlTnVtYmVycy5tYXAocG4gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gICR7cG4gPT09IHBhZ2UgPyAnYWN0aXZlJyA6ICcnfWB9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IChwbiAhPT0gcGFnZSA/IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2socG4pKSA6ICcnKX1cbiAgICAgID5cbiAgICAgICAge3BufVxuICAgICAgPC9idXR0b24+XG4gICAgPC9saT5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGFyaWEtbGFiZWw9XCJQYWdpbmF0aW9uXCI+XG4gICAgICA8dWwgY2xhc3NOYW1lPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtgcGFnZS1pdGVtICR7cGFnZSA9PT0gMSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygncHJldicsIHBhZ2UpKX1cbiAgICAgICAgICAgIGRpc2FibGVkPXtwYWdlID09PSAxfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImFuZ2xlLWxlZnRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgICB7cGFnZUJ1dHRvbnN9XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSB0b3RhbFBhZ2UgPyAnZGlzYWJsZWQnIDogJyd9YH0+XG4gICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFnZS1saW5rIHJvdW5kZWQtMFwiXG4gICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG9uUGFnaW5hdGUoaGFuZGxlQ2xpY2soJ25leHQnLCBwYWdlKSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtcmlnaHRcIiAvPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICA8L25hdj5cbiAgKTtcbn07XG5cblBhZ2luYXRpb24uZGVmYXVsdFByb3BzID0ge1xuICBvcHRpb25zOiB7XG4gICAgYnV0dG9uQ291bnQ6IDMsXG4gICAgdG90YWw6IDAsXG4gICAgcGFnZTogMSxcbiAgICBsaW1pdDogMTAsXG4gIH0sXG59O1xuXG5QYWdpbmF0aW9uLnByb3BUeXBlcyA9IHtcbiAgb3B0aW9uczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB0b3RhbDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBsaW1pdDogUHJvcFR5cGVzLm51bWJlcixcbiAgICBwYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIG9uUGFnaW5hdGU6IFByb3BUeXBlcy5mdW5jLFxuICAgIGJ1dHRvbkNvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuXG5jb25zdCBQb3N0ZXIgPSAoeyBzcmMsIGFsdCB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiaC0xMDAgdy0xMDAgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgPGltZ1xuICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIGxhenlcIlxuICAgICAgc3JjPXtgJHt2aXNzbmUuY2RufS8ke3Zpc3NuZS5kZWZhdWx0Q292ZXJJbWFnZVBhdGh9YH1cbiAgICAgIGRhdGEtc3JjPXtzcmN9XG4gICAgICBhbHQ9e2FsdH1cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblBvc3Rlci5wcm9wVHlwZXMgPSB7XG4gIHNyYzogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBhbHQ6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCBNZW51IGZyb20gJy4vTWVudSc7XG5pbXBvcnQgUGFnZUxvYWRpbmcgZnJvbSAnLi9QYWdlTG9hZGluZyc7XG5pbXBvcnQgcHJvZmlsZU1lbnUgZnJvbSAnLi4vY29uc3RhbnRzL3Byb2ZpbGUtbWVudSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2ZpbGVDb250YWluZXIocHJvcHMpIHtcbiAgY29uc3QgeyBjaGlsZHJlbiwgcGF0aCwgcGFnZUxvYWRpbmcsIHVzZXIgfSA9IHByb3BzO1xuXG4gIGlmIChwYWdlTG9hZGluZykge1xuICAgIHJldHVybiA8UGFnZUxvYWRpbmcgc2hvdyAvPjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwb3NpdGlvbi1yZWxhdGl2ZVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rIHJvdW5kZWQtY2lyY2xlIGF2YXRhci1idXR0b25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgc3JjPXt1c2VyLmF2YXRhciB8fCBgJHt2aXNzbmUuY2RufS91Y29udGVudC9hdmF0YXIvZGVmYXVsdC1hdmF0YXIuanBnYH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgcm91bmRlZC1jaXJjbGUgYm9yZGVyIGF2YXRhclwiXG4gICAgICAgICAgICAgICAgYWx0PVwiQXZhdGFyXCJcbiAgICAgICAgICAgICAgICBpZD1cImF2YXRhclwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgPGg1PntgQCR7dXNlci51c2VyTmFtZX1gfTwvaDU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8TWVudSBpdGVtcz17cHJvZmlsZU1lbnV9IHBhdGg9e3BhdGh9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5jb25zdCBQcm9ncmVzc0JhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7IHNob3csIGhlaWdodCB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZ3Jlc3NcIiBzdHlsZT17eyBoZWlnaHQ6IGAke2hlaWdodH1weGAgfX0+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cInByb2dyZXNzLWJhciBwcm9ncmVzcy1iYXItc3RyaXBlZCBwcm9ncmVzcy1iYXItYW5pbWF0ZWRcIlxuICAgICAgICByb2xlPVwicHJvZ3Jlc3NiYXJcIlxuICAgICAgICBhcmlhLXZhbHVlbm93PVwiNzVcIlxuICAgICAgICBhcmlhLXZhbHVlbWluPVwiMFwiXG4gICAgICAgIGFyaWEtdmFsdWVtYXg9XCIxMDBcIlxuICAgICAgICBzdHlsZT17eyB3aWR0aDogJzEwMCUnIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUHJvZ3Jlc3NCYXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAgaGVpZ2h0OiAyLFxufTtcblxuUHJvZ3Jlc3NCYXIucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgaGVpZ2h0OiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvZ3Jlc3NCYXI7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Bpbm5lcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2hvdyxcbiAgICBzaXplLFxuICAgIGtpbmQsXG4gICAgY29sb3IsXG4gICAgYWRkaW9uYWxDbGFzcyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YHNwaW5uZXItJHtraW5kfSBzcGlubmVyLSR7a2luZH0tJHtzaXplfSB0ZXh0LSR7Y29sb3J9ICR7YWRkaW9uYWxDbGFzc31gfSByb2xlPVwic3RhdHVzXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuU3Bpbm5lci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBzaXplOiAnc20nLFxuICBraW5kOiAnZ3JvdycsXG4gIGNvbG9yOiAncHJpbWFyeScsXG4gIGFkZGlvbmFsQ2xhc3M6ICcnLFxufTtcblxuU3Bpbm5lci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBhZGRpb25hbENsYXNzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzaXplOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdzbScsXG4gICAgJ21kJyxcbiAgICAnbGcnLFxuICAgICd4bCcsXG4gIF0pLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdib3JkZXInLFxuICAgICdncm93JyxcbiAgXSksXG4gIGNvbG9yOiBQcm9wVHlwZXMub25lT2YoW1xuICAgICdwcmltYXJ5JyxcbiAgICAnc2Vjb25kYXJ5JyxcbiAgICAnc3VjY2VzcycsXG4gICAgJ2RhbmdlcicsXG4gICAgJ3dhcm5pbmcnLFxuICAgICdpbmZvJyxcbiAgICAnbGlnaHQnLFxuICAgICdkYXJrJyxcbiAgXSksXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuLi9QYWdpbmF0aW9uJztcbmltcG9ydCBBbGVydCBmcm9tICcuLi9BbGVydCc7XG5pbXBvcnQgJy4vVGFibGVMaXN0LnNjc3MnO1xuXG5jb25zdCBjcmVhdGVIZWFkZXIgPSAoZmllbGRzKSA9PiB7XG4gIGNvbnN0IHZpc2libGVGaWVsZHMgPSBmaWVsZHNcbiAgICAuZmlsdGVyKGYgPT4gIWYuaGlkZGVuKVxuICAgIC5tYXAoZiA9PiA8dGggc2NvcGU9XCJjb2xcIj57Zi50aXRsZX08L3RoPik7XG5cbiAgcmV0dXJuIDx0cj57dmlzaWJsZUZpZWxkc308L3RyPjtcbn07XG5cbmNvbnN0IGNyZWF0ZUJvZHkgPSAoZGF0YSwgZmllbGRzLCBzZWxlY3RlZCwgb25TZWxlY3QpID0+IHtcbiAgY29uc3QgdGJvZHkgPSBbXTtcblxuICBkYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBjb25zdCBpdGVtRmllbGRzID0gW107XG5cbiAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgIGlmIChmaWVsZC5oaWRkZW4pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHYgPSBpdGVtW2ZpZWxkLm5hbWVdO1xuICAgICAgY29uc3QgdmFsdWUgPSBmaWVsZC5mb3JtYXRcbiAgICAgICAgPyBmaWVsZC5mb3JtYXQodilcbiAgICAgICAgOiB2LnRvU3RyaW5nKCk7XG5cbiAgICAgIGl0ZW1GaWVsZHMucHVzaCg8dGQ+e3ZhbHVlfTwvdGQ+KTtcbiAgICB9KTtcblxuICAgIHRib2R5LnB1c2goXG4gICAgICA8dHIgY2xhc3NOYW1lPXtgJHtpdGVtLmlkID09PSBzZWxlY3RlZC5pZCA/ICdzZWxlY3RlZCcgOiAnJ31gfSBvbkNsaWNrPXsoKSA9PiBvblNlbGVjdChpdGVtKX0+XG4gICAgICAgIHtpdGVtRmllbGRzfVxuICAgICAgPC90cj4sXG4gICAgKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHRib2R5O1xufTtcblxuY29uc3QgY3JlYXRlUGFnaW5hdGlvbiA9IChvcHRpb25zLCBkYXRhTGVuZ3RoKSA9PiB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgPFBhZ2luYXRpb24gb3B0aW9ucz17b3B0aW9uc30gLz5cbiAgICAgIDxzcGFuPntgU2hvdyAke2RhdGFMZW5ndGh9IHJlc3VsdCBvZiAke29wdGlvbnMudG90YWx9YH08L3NwYW4+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5jb25zdCBUYWJsZUxpc3QgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGRhdGEsXG4gICAgc2VsZWN0ZWQsXG4gICAgZmllbGRzLFxuICAgIHBhZ2luYXRpb24sXG4gICAgcmVzcG9uc2l2ZSxcbiAgICBvbkNyZWF0ZSxcbiAgICBvbkVkaXQsXG4gICAgb25EZWxldGUsXG4gICAgb25TZWxlY3QsXG4gIH0gPSBwcm9wcztcblxuICBjb25zdCBidG5Hcm91cCA9IChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGJ0bi1ncm91cCB3LTEwMCAkeyghb25DcmVhdGUgJiYgIW9uRWRpdCAmJiAhb25EZWxldGUpID8gJ2Qtbm9uZScgOiAnJ31gfSByb2xlPVwiZ3JvdXBcIiBhcmlhLWxhYmVsPVwiY3J1ZFwiPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uQ3JlYXRlID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkNyZWF0ZX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwicGx1cy1zcXVhcmVcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+Q3JlYXRlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25FZGl0ID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkVkaXR9XG4gICAgICA+XG4gICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVkaXRcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+RWRpdDwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wIGJ0bi1zbSAke29uRGVsZXRlID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICBvbkNsaWNrPXtvbkRlbGV0ZX1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidHJhc2hcIiAvPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xXCI+RGVsZXRlPC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG5cbiAgaWYgKCFkYXRhIHx8IGRhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG10LTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICA8QWxlcnQgbWVzc2FnZT1cIlRoZXJlIHdlcmUgbm8gcmVzdWx0LlwiIGtpbmQ9XCJ3YXJuaW5nXCIgLz5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e29uQ3JlYXRlfSBjbGFzc05hbWU9e2BidG4gYnRuLW91dGxpbmUtcHJpbWFyeSB3LTEwMCAke29uQ3JlYXRlID8gJycgOiAnZC1ub25lJ31gfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGVhZHMgPSBjcmVhdGVIZWFkZXIoZmllbGRzKTtcbiAgY29uc3QgYm9keSA9IGNyZWF0ZUJvZHkoZGF0YSwgZmllbGRzLCBzZWxlY3RlZCwgb25TZWxlY3QpO1xuICBjb25zdCBwYWdpbmF0aW9uQnV0dG9ucyA9IGNyZWF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbiwgZGF0YS5sZW5ndGgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgPGg0Pnt0aXRsZX08L2g0PlxuICAgICAgICB7YnRuR3JvdXB9XG4gICAgICAgIDx0YWJsZSBjbGFzc05hbWU9e2B0YWJsZSB2LXRhYmxlICR7cmVzcG9uc2l2ZSA/ICd0YWJsZS1yZXNwb25zaXZlJyA6ICcnfWB9PlxuICAgICAgICAgIDx0aGVhZD5cbiAgICAgICAgICAgIHtoZWFkc31cbiAgICAgICAgICA8L3RoZWFkPlxuICAgICAgICAgIDx0Ym9keT5cbiAgICAgICAgICAgIHtib2R5fVxuICAgICAgICAgIDwvdGJvZHk+XG4gICAgICAgIDwvdGFibGU+XG4gICAgICAgIHtwYWdpbmF0aW9uQnV0dG9uc31cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuVGFibGVMaXN0LmRlZmF1bHRQcm9wcyA9IHtcbiAgZGF0YTogW10sXG4gIHNlbGVjdGVkOiB7fSxcbiAgZmllbGRzOiBbXSxcbn07XG5cblRhYmxlTGlzdC5wcm9wVHlwZXMgPSB7XG4gIGRhdGE6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KSxcbiAgc2VsZWN0ZWQ6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCksXG4gIGZpZWxkczogUHJvcFR5cGVzLmluc3RhbmNlT2YoQXJyYXkpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGFibGVMaXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9WaWRlby5zY3NzJztcblxuY29uc3QgVmlkZW8gPSAoeyB2aWRlb0tleSB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidmlkZW8gbWItMiBlbWJlZC1yZXNwb25zaXZlIGVtYmVkLXJlc3BvbnNpdmUtMTZieTlcIj5cbiAgICA8aWZyYW1lXG4gICAgICBjbGFzc05hbWU9XCJlbWJlZC1yZXNwb25zaXZlLWl0ZW1cIlxuICAgICAgdGl0bGU9XCJWaWRlb1wiXG4gICAgICB0eXBlPVwidGV4dC9odG1sXCJcbiAgICAgIHdpZHRoPVwiNjQwXCJcbiAgICAgIGhlaWdodD1cIjM2MFwiXG4gICAgICBzcmM9e2BodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3ZpZGVvS2V5fT9hdXRvcGxheT0wJm9yaWdpbj0ke3Zpc3NuZS5kb21haW59YH1cbiAgICAgIGZyYW1lQm9yZGVyPVwiMFwiXG4gICAgICBhbGxvd0Z1bGxTY3JlZW5cbiAgICAvPlxuICA8L2Rpdj5cbik7XG5cblZpZGVvLnByb3BUeXBlcyA9IHtcbiAgdmlkZW9LZXk6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIiwiLy8gY29tbW9uXG5leHBvcnQgY29uc3QgTE9BRElORyA9ICdMT0FESU5HJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfQUxFUlQgPSAnVE9HR0xFX0FMRVJUJztcbmV4cG9ydCBjb25zdCBUT0dHTEVfRklMVEVSID0gJ1RPR0dMRV9GSUxURVInO1xuXG4vLyBhdXRoXG5leHBvcnQgY29uc3QgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMgPSAnU0VUX1BBR0VfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MT0FESU5HX1NUQVRVUyA9ICdTRVRfTE9BRElOR19TVEFUVVMnO1xuZXhwb3J0IGNvbnN0IFJFR0lTVEVSID0gJ1JFR0lTVEVSJztcbmV4cG9ydCBjb25zdCBTRVRfVVNFUiA9ICdTRVRfVVNFUic7XG5cbi8vIGRpc2NvdmVyXG5leHBvcnQgY29uc3QgR0VUX01PVklFUyA9ICdHRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVTID0gJ1NFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9HRU5SRVMgPSAnU0VUX0dFTlJFUyc7XG5leHBvcnQgY29uc3QgU0VUX1FVRVJZID0gJ1NFVF9RVUVSWSc7XG5cbi8vIGxpc3RzXG5leHBvcnQgY29uc3QgR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUiA9ICdHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSJztcbmV4cG9ydCBjb25zdCBDUkVBVEVfTElTVCA9ICdDUkVBVEVfTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0xJU1QgPSAnREVMRVRFX0xJU1RTJztcbmV4cG9ydCBjb25zdCBBRERfVE9fTElTVCA9ICdBRERfVE9fTElTVCc7XG5leHBvcnQgY29uc3QgREVMRVRFX0ZST01fTElTVCA9ICdERUxFVEVfRlJPTV9MSVNUJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVFMgPSAnU0VUX0xJU1RTJztcbmV4cG9ydCBjb25zdCBTRVRfTElTVF9NT1ZJRVMgPSAnU0VUX0xJU1RfTU9WSUVTJztcblxuLy8gbW92aWUgZGV0YWlsXG5leHBvcnQgY29uc3QgU0VUX01PVklFX0RFVEFJTCA9ICdTRVRfTU9WSUVfREVUQUlMJztcblxuLy8gcHJvZmlsZVxuLy8gIC0tIEFjY291bnRcbmV4cG9ydCBjb25zdCBTRVRfQUNDT1VOVF9ERVRBSUwgPSAnU0VUX0FDQ09VTlRfREVUQUlMJztcbmV4cG9ydCBjb25zdCBTRVRfVVBMT0FERURfSU1BR0UgPSAnU0VUX1VQTE9BREVEX0lNQUdFJztcblxuLy8gY29uc3RhbnRzXG5leHBvcnQgY29uc3QgU09SVF9PUFRJT05TID0gW3tcbiAgbmFtZTogJ1BvcHVsYXJpdHknLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JldmVudWUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUHJpbWFyeSBSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnT3JnaW5hbCBUaXRsZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIEF2ZXJhZ2UnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBDb3VudCcsXG4gIHZhbHVlOiAnZGVzYycsXG59XTtcbiIsImNvbnN0IHByb2ZpbGVNZW51ID0gW1xuICB7XG4gICAgbmFtZTogJ0FjY291bnQnLFxuICAgIGljb246ICd1c2VyJyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvYWNjb3VudCcsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiAnTGlzdHMnLFxuICAgIGljb246ICdsaXN0JyxcbiAgICBwYXRoOiAnL3Byb2ZpbGUvbGlzdHMnLFxuICB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0Zhdm9yaXRlcycsXG4gIC8vICAgaWNvbjogJ2hlYXJ0JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZmF2b3JpdGVzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdDb21tZW50cycsXG4gIC8vICAgaWNvbjogJ2NvbW1lbnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9jb21tZW50cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnUmV2aWV3cycsXG4gIC8vICAgaWNvbjogJ25ld3NwYXBlcicsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3Jldmlld3MnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0ZyaWVuZHMnLFxuICAvLyAgIGljb246ICd1c2VyLWZyaWVuZHMnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mcmllbmRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdTZXR0aW5ncycsXG4gIC8vICAgaWNvbjogJ2NvZycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL3NldHRpbmdzJyxcbiAgLy8gfSxcbl07XG5cbmV4cG9ydCBkZWZhdWx0IHByb2ZpbGVNZW51O1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuZXhwb3J0IGNvbnN0IFVzZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBmaXJzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBlbWFpbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZnVsbE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGF2YXRhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdXNlck5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IE1vdmllU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgb3JnaW5hbFRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB5ZWFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB2b3RlX2NvdW50OiBQcm9wVHlwZXMubnVtYmVyLFxuICB2b3RlX2F2ZXJhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlbGVhc2VfZGF0ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVOYW1lczogUHJvcFR5cGVzLnN0cmluZyxcbiAgaG9tZXBhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRhZ2xpbmU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhbmd1YWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDYXN0U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGNoYXJhY3RlcjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBwcm9maWxlUGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBDb21wYW55U2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgbG9nbzogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgR2VucmVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgbWF0Y2hTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgRmlsdGVyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBzb3J0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzZWFyY2hUZXh0OiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY3Jld3M6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgY2FzdHM6IFByb3BUeXBlcy5hcnJheU9mLnN0cmluZyxcbiAgdm90ZUF2ZXJhZ2U6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG4gIHJlbGVhc2VZZWFyOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufSk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCB7IFVzZXJTaGFwZSwgbWF0Y2hTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0ICcuL0FjY291bnQuc2Nzcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFjY291bnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHByb3BzLnNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpO1xuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVkaXRNb2RlOiBmYWxzZSxcbiAgICAgIHVzZXJGb3JtOiB7fSxcbiAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIG9sZFBhc3N3b3JkOiB7fSxcbiAgICAgICAgbmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBjb25maXJtTmV3UGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jaGFuZ2VQYXNzd29yZCA9IHRoaXMuY2hhbmdlUGFzc3dvcmQuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSwgZmllbGQpIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBzdGF0ZSB9ID0gdGhpcztcbiAgICBzdGF0ZVtmaWVsZF1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnN0YXRlID0gc3RhdGU7XG4gICAgdGhpcy5mb3JjZVVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlUGFzc3dvcmQoKSB7XG4gICAgY29uc3QgeyBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nLCBjaGFuZ2VQYXNzd29yZCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmIChwYXNzd29yZC5uZXdQYXNzd29yZCAhPT0gcGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkcyBkb25cXCd0IG1hdGNoLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAocGFzc3dvcmQub2xkUGFzc3dvcmQgPT09IHBhc3N3b3JkLm5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnZGFuZ2VyJyxcbiAgICAgICAgbWVzc2FnZTogJ1Bhc3N3b3JkIGNhbm5vdCBiZSB0aGUgc2FtZSB3aXRoIG9sZCBwYXNzd29yZC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBwYXNzd29yZDoge30gfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgbG9hZGluZyxcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdXBkYXRlVXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHVzZXJGb3JtLCB2YWxpZGF0aW9uLCBwYXNzd29yZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICh1c2VyICYmIHVzZXIuaWQgJiYgIXVzZXJGb3JtLmlkKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgdXNlckZvcm06IHVzZXIgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkFjY291bnQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPkxhc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1zdWNjZXNzIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHVwZGF0ZVVzZXIodXNlckZvcm0pfVxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30ga2luZD1cImJvcmRlclwiIGNvbG9yPVwic3VjY2Vzc1wiIC8+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9e2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ30+VXBkYXRlPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+Q2hhbmdlIFBhc3N3b3JkPC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm9sZFBhc3N3b3JkSW5wdXRcIj5PbGQgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJvbGRQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm9sZFBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm9sZFBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibmV3UGFzc3dvcmRJbnB1dFwiPk5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQubmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gTmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybU5ld1Bhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtTmV3UGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuY2hhbmdlUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgQ2hhbmdlIFBhc3N3b3JkXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuQWNjb3VudC5wcm9wVHlwZXMgPSB7XG4gIHVzZXI6IFVzZXJTaGFwZS5pc1JlcXVpcmVkLFxuICBtYXRjaDogbWF0Y2hTaGFwZS5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHVwZGF0ZVVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBjaGFuZ2VQYXNzd29yZDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQWNjb3VudCBmcm9tICcuL0FjY291bnQnO1xuaW1wb3J0IHsgZ2V0QWNjb3VudERldGFpbCwgY2hhbmdlUGFzc3dvcmQsIHVwZGF0ZVVzZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgc2V0UGFnZUxvYWRpbmdTdGF0dXMsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXBsb2FkZWRGaWxlOiBzdGF0ZS5jb21tb24udXBsb2FkZWRGaWxlLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0QWNjb3VudERldGFpbDogKCkgPT4gZGlzcGF0Y2goZ2V0QWNjb3VudERldGFpbCgpKSxcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXM6IHN0YXR1cyA9PiBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyhzdGF0dXMpKSxcbiAgdXBkYXRlVXNlcjogdXNlciA9PiBkaXNwYXRjaCh1cGRhdGVVc2VyKHVzZXIpKSxcbiAgY2hhbmdlUGFzc3dvcmQ6IHBhc3N3b3JkID0+IGRpc3BhdGNoKGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBY2NvdW50KTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgeyBBTEVSVF9UWVBFUyB9IGZyb20gJy4uLy4uLy4uL2xpYi9jb25zdGFudHMnO1xuXG5jb25zdCBBbGVydCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAga2luZCxcbiAgICBzaG93LFxuICAgIG1lc3NhZ2UsXG4gICAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2tpbmR9IHNpdGUtYWxlcnQgYWxlcnQtZGlzbWlzc2libGUgZmFkZSBzaG93YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICB7bWVzc2FnZX1cbiAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImNsb3NlXCIgZGF0YS1kaXNtaXNzPVwiYWxlcnRcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIiBvbkNsaWNrPXt0b2dnbGVBbGVydERpYWxvZ30+XG4gICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkFsZXJ0LmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIGtpbmQ6ICdpbmZvJyxcbiAgbWVzc2FnZTogbnVsbCxcbn07XG5cbkFsZXJ0LnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIG1lc3NhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBraW5kOiBQcm9wVHlwZXMub25lT2YoQUxFUlRfVFlQRVMpLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQWxlcnQ7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL0FsZXJ0RGlhbG9nJztcbmltcG9ydCAnLi9BbGVydERpYWxvZy5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gKHsgY29tbW9uIH0pID0+ICh7XG4gIHNob3c6IGNvbW1vbi5zaG93QWxlcnQsXG4gIG1lc3NhZ2U6IGNvbW1vbi5hbGVydE1lc3NhZ2UsXG4gIGtpbmQ6IGNvbW1vbi5hbGVydEtpbmQsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6ICgpID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsgc2hvdzogZmFsc2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBbGVydERpYWxvZyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uLy4uL2xpYi9jb29raWUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBdXRoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZm9ybToge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBwYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgICAgY29uZmlybVBhc3N3b3JkOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnZhbGlkYXRpb24gPSB0aGlzLnZhbGlkYXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLnN3aXRjaEZvcm0gPSB0aGlzLnN3aXRjaEZvcm0uYmluZCh0aGlzKTtcbiAgICB0aGlzLmxvZ2luUmVnaXN0ZXIgPSB0aGlzLmxvZ2luUmVnaXN0ZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgZXJyb3JNZXNzYWdlID0gY29va2llLmdldCgnZXJyb3JNZXNzYWdlJyk7XG4gICAgaWYgKGVycm9yTWVzc2FnZSkge1xuICAgICAgdG9nZ2xlQWxlcnREaWFsb2coZXJyb3JNZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGZvcm0gfSA9IHRoaXMuc3RhdGU7XG4gICAgZm9ybVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoeyBmb3JtIH0pO1xuICB9XG5cbiAgdmFsaWRhdGlvbigpIHtcbiAgICBjb25zdCBlbWFpbElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgaXNWYWxpZCA9IHRydWU7XG5cbiAgICBpZiAoIWZvcm0uZW1haWwgfHwgIWVtYWlsSW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWwgYWRkcmVzcy48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLmVtYWlsID0ge307XG4gICAgfVxuXG4gICAgaWYgKCFmb3JtLnBhc3N3b3JkIHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoIDwgNiB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA+IDE2KSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge1xuICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIG11c3QgYmUgNi0xNiBjaGFjcmFjdGVyLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgaWYgKCFmb3JtLnVzZXJOYW1lIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+VXNlciBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24udXNlck5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmZpcnN0TmFtZSB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkZpcnN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFmb3JtLmxhc3ROYW1lIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA+IDQwKSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+TGFzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24ubGFzdE5hbWUgPSB7fTtcbiAgICAgIH1cblxuICAgICAgaWYgKGZvcm0uY29uZmlybVBhc3N3b3JkICE9PSBmb3JtLnBhc3N3b3JkKSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBkb250IG1hdGNoPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHt9O1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc2V0U3RhdGUoeyB2YWxpZGF0aW9uIH0pO1xuICAgIHJldHVybiBpc1ZhbGlkO1xuICB9XG5cbiAgbG9naW5SZWdpc3RlcigpIHtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgaXNWYWxpZCA9IHRoaXMudmFsaWRhdGlvbihmb3JtKTtcblxuICAgIGlmICghaXNWYWxpZCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpcztcbiAgICBjb25zdCB1cmwgPSBpc1JlZ2lzdGVyXG4gICAgICA/ICcvYXBpL3JlZ2lzdGVyJ1xuICAgICAgOiAnL2FwaS9sb2dpbic7XG5cbiAgICByZXR1cm4gcHJvcHMubG9naW5SZWdpc3Rlcihmb3JtLCB1cmwpO1xuICB9XG5cbiAgc3dpdGNoRm9ybSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgaXNSZWdpc3RlcjogIXByZXZTdGF0ZS5pc1JlZ2lzdGVyLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBmb3JtLFxuICAgICAgaXNSZWdpc3RlcixcbiAgICAgIHZhbGlkYXRpb24sXG4gICAgICBsb2FkaW5nLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgbGV0IGJ1dHRvblRleHQgPSAnTE9HSU4nO1xuICAgIGxldCBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICBsZXQgcmVnaXN0ZXJJbnB1dCA9IG51bGw7XG5cbiAgICBpZiAoaXNSZWdpc3Rlcikge1xuICAgICAgYnV0dG9uVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgICBzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0ID0gJ0xPR0lOJztcblxuICAgICAgcmVnaXN0ZXJJbnB1dCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiPkNvbmZpcm0gUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiY29uZmlybVBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImtleVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5jb25maXJtUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgaWQ9XCJjb25maXJtUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiY29uZmlybVBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInVzZXJOYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhdFwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlciBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS51c2VyTmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiZmlyc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZmlyc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZpcnN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmZpcnN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5maXJzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5cbiAgICAgICAgICAgICAgTGFzdCBOYW1lXG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwibGFzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmxhc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubGFzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1tZC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTggY29sLWxnLTYgY29sLXhsLTVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZCBhdXRoLWZvcm1cIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL2xvZ28ucG5nYH0gYWx0PVwiVmlzc25lXCIgaGVpZ2h0PVwiNzBcIiBjbGFzc05hbWU9XCJteS0yXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9IGlkPVwiZm9ybVJlZ1wiIGNsYXNzTmFtZT1cImNvbC0xMiBwLTBcIj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImVtYWlsSW5wdXRcIj5FbWFpbDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJiYXNpYy1hZGRvbjFcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZW52ZWxvcGVcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZW1haWxJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxJbnB1dEdyb3VwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5lbWFpbC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInBhc3N3b3JkSW5wdXRcIj5QYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJwYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVubG9ja1wiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnBhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cInBhc3N3b3JkQWRkb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5wYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAge3JlZ2lzdGVySW5wdXR9XG5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIHRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5zd2l0Y2hGb3JtfVxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAge3N3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHR9XG4gICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGFyayBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvZ2luUmVnaXN0ZXJ9XG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHNwaW5uZXItZ3JvdyBzcGlubmVyLWdyb3ctc20gJHtsb2FkaW5nID8gJycgOiAnZC1ub25lJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIHJvbGU9XCJzdGF0dXNcIlxuICAgICAgICAgICAgICAgICAgICAgIGFyaWEtaGlkZGVuPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIHtidXR0b25UZXh0fVxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRlZmF1bHQgYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZ29vZ2xlICBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2dvb2dsZVwiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZ29vZ2xlJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEdPT0dMRVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGZhY2Vib29rIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZmFjZWJvb2tcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2ZhY2Vib29rJ119IC8+XG4gICAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgICBMT0dJTiBXSVRIIEZBQ0VCT09LXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuQXV0aC5wcm9wVHlwZXMgPSB7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBdXRoIGZyb20gJy4vQXV0aCc7XG5pbXBvcnQgeyBsb2dpblJlZ2lzdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hdXRoJztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0ICcuL0F1dGguc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGxvZ2luUmVnaXN0ZXI6IChkYXRhLCB1cmwpID0+IGRpc3BhdGNoKGxvZ2luUmVnaXN0ZXIoZGF0YSwgdXJsKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBtZXNzYWdlID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHsga2luZDogJ2RhbmdlcicsIG1lc3NhZ2UgfSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShBdXRoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE1vdmllTGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vdmllTGlzdCc7XG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgRmlsdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRmlsdGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHtcbiAgVXNlclNoYXBlLFxuICBNb3ZpZVNoYXBlLFxuICBHZW5yZVNoYXBlLFxuICBGaWx0ZXJTaGFwZSxcbn0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlzY292ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMubG9hZE1vdmllcyA9IHRoaXMubG9hZE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0UXVlcnkgPSB0aGlzLnNldFF1ZXJ5LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEdlbnJlcywgdG9nZ2xlRmlsdGVyLCBtYXRjaCB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHBhdGggfSA9IG1hdGNoO1xuXG4gICAgZ2V0R2VucmVzKCk7XG5cbiAgICBpZiAoWycvY29taW5nLXNvb24nLCAnL2luLXRoZWF0ZXJzJ10uaW5kZXhPZihwYXRoKSAhPT0gLTEpIHtcbiAgICAgIHRoaXMuc2V0UXVlcnkoeyBmaWVsZDogJ2ZpbHRlcicsIHZhbHVlOiBwYXRoLnJlcGxhY2UoJy8nLCAnJykgfSk7XG4gICAgICB0b2dnbGVGaWx0ZXIoZmFsc2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmxvYWRNb3ZpZXMoKTtcbiAgICB9XG4gIH1cblxuICBzZXRRdWVyeShxdWVyeSkge1xuICAgIGNvbnN0IHsgc2V0UXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgc2V0UXVlcnkocXVlcnkpLnRoZW4odGhpcy5sb2FkTW92aWVzKTtcbiAgfVxuXG4gIGxvYWRNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZXMsIHF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIGdldE1vdmllcyhxdWVyeSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbW92aWVzLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsb2FkaW5nLFxuICAgICAgZ2VucmVzLFxuICAgICAgcXVlcnksXG4gICAgICBsb2NhdGlvbixcbiAgICAgIHNob3dGaWx0ZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIGlzTG9nZ2VkSW49e2lzTG9nZ2VkSW59IHVzZXI9e3VzZXJ9IHBhdGhOYW1lPXtsb2NhdGlvbi5wYXRobmFtZX0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWRcIj5cbiAgICAgICAgICA8RmlsdGVyIHNob3c9e3Nob3dGaWx0ZXJ9IGdlbnJlcz17Z2VucmVzfSBzZXRRdWVyeT17dGhpcy5zZXRRdWVyeX0gcXVlcnk9e3F1ZXJ5fSAvPlxuICAgICAgICAgIDxNb3ZpZUxpc3QgbW92aWVzPXttb3ZpZXN9IGlkPVwibGlzdFwiIC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtLTFcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9hZE1vdmllc31cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbWItMiAke2xvYWRpbmcgPyAnZC1ub25lJyA6ICdkLWJsb2NrJ31gfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBMb2FkIE1vcmVcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPFNwaW5uZXIgc2hvdz17bG9hZGluZ30gc2l6ZT1cIm1kXCIgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxGb290ZXIgLz5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5EaXNjb3Zlci5kZWZhdWx0UHJvcHMgPSB7XG4gIGlzTG9nZ2VkSW46IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxuICB1c2VyOiB7fSxcbn07XG5cbkRpc2NvdmVyLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRHZW5yZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNldFF1ZXJ5OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVGaWx0ZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxuICBzaG93RmlsdGVyOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2YoR2VucmVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgcXVlcnk6IEZpbHRlclNoYXBlLmlzUmVxdWlyZWQsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IERpc2NvdmVyIGZyb20gJy4vRGlzY292ZXInO1xuaW1wb3J0IHsgdG9nZ2xlRmlsdGVyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TW92aWVzLFxuICBzZXRRdWVyeSxcbiAgZ2V0R2VucmVzLFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2Rpc2NvdmVyJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIHF1ZXJ5OiBzdGF0ZS5kaXNjb3Zlci5xdWVyeSxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbW92aWVzOiBzdGF0ZS5kaXNjb3Zlci5tb3ZpZXMsXG4gIGdlbnJlczogc3RhdGUuZGlzY292ZXIuZ2VucmVzLFxuICBzaG93RmlsdGVyOiBzdGF0ZS5jb21tb24uc2hvd0ZpbHRlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZXM6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldE1vdmllcyhxdWVyeSkpLFxuICBzZXRRdWVyeTogcXVlcnkgPT4gZGlzcGF0Y2goc2V0UXVlcnkocXVlcnkpKSxcbiAgZ2V0R2VucmVzOiAoKSA9PiBkaXNwYXRjaChnZXRHZW5yZXMoKSksXG4gIHRvZ2dsZUZpbHRlcjogc2hvdyA9PiBkaXNwYXRjaCh0b2dnbGVGaWx0ZXIoc2hvdykpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShEaXNjb3Zlcik7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVMaXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbW92aWVRdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgICAgbGlzdFF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgICBsaXN0OiB7fSxcbiAgICAgIHNlbGVjdGVkOiB7fSxcbiAgICAgIHNlbGVjdGVkTW92aWU6IHt9LFxuICAgICAgbW92aWVUYWJsZUZpZWxkczogW3tcbiAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdQb3N0ZXInLFxuICAgICAgICBuYW1lOiAncG9zdGVyJyxcbiAgICAgICAgZm9ybWF0KHNyYykge1xuICAgICAgICAgIHJldHVybiA8aW1nIGhlaWdodD1cIjcwXCIgc3JjPXtzcmN9IGFsdD1cIkxpc3QgTW92aWVcIiAvPjtcbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdUaXRsZScsXG4gICAgICAgIG5hbWU6ICd0aXRsZScsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnUmF0aW5nJyxcbiAgICAgICAgbmFtZTogJ3JhdGluZycsXG4gICAgICB9XSxcbiAgICAgIGxpc3RUYWJsZUZpZWxkczogW3tcbiAgICAgICAgdGl0bGU6ICdJZCcsXG4gICAgICAgIG5hbWU6ICdpZCcsXG4gICAgICAgIGhpZGRlbjogdHJ1ZSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdOYW1lJyxcbiAgICAgICAgbmFtZTogJ25hbWUnLFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ0NyZWF0ZSBEYXRlJyxcbiAgICAgICAgbmFtZTogJ2NyZWF0ZWRBdCcsXG4gICAgICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XG4gICAgICAgICAgcmV0dXJuIGRhdGUudG9Mb2NhbGVEYXRlU3RyaW5nKCk7XG4gICAgICAgIH0sXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnVmlzaWJpbGl0eScsXG4gICAgICAgIG5hbWU6ICdwdWJsaWMnLFxuICAgICAgICBmb3JtYXQodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWUgPyAnUHVibGljJyA6ICdQcml2YXRlJztcbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdNb3ZpZXMnLFxuICAgICAgICBuYW1lOiAndG90YWxNb3ZpZScsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnJyxcbiAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgZm9ybWF0OiBpZCA9PiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmtcIiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17KCkgPT4gdGhpcy5zaG93TGlzdE1vdmllcyhpZCl9PlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJsaXN0XCIgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApLFxuICAgICAgfV0sXG4gICAgfTtcblxuICAgIHRoaXMuc2V0TGlzdFF1ZXJ5ID0gdGhpcy5zZXRMaXN0UXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldE1vdmllUXVlcnkgPSB0aGlzLnNldE1vdmllUXVlcnkuYmluZCh0aGlzKTtcbiAgICB0aGlzLmdldExpc3RzID0gdGhpcy5nZXRMaXN0cy5iaW5kKHRoaXMpO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwgPSB0aGlzLnRvZ2dsZU1vZGFsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5jcmVhdGUgPSB0aGlzLmNyZWF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVzdHJveSA9IHRoaXMuZGVzdHJveS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudXBkYXRlID0gdGhpcy51cGRhdGUuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zYXZlID0gdGhpcy5zYXZlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zaG93TGlzdE1vdmllcyA9IHRoaXMuc2hvd0xpc3RNb3ZpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLmJhY2tUb0xpc3QgPSB0aGlzLmJhY2tUb0xpc3QuYmluZCh0aGlzKTtcbiAgICB0aGlzLmRlbGV0ZUZyb21MaXN0ID0gdGhpcy5kZWxldGVGcm9tTGlzdC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRBY2NvdW50RGV0YWlsIH0gPSB0aGlzLnByb3BzO1xuICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgICBnZXRBY2NvdW50RGV0YWlsKCk7XG4gIH1cblxuICBzZXRMaXN0UXVlcnkobGlzdFF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGxpc3RRdWVyeTogT2JqZWN0LmFzc2lnbihwcmV2U3RhdGUubGlzdFF1ZXJ5LCBsaXN0UXVlcnkpLFxuICAgIH0pLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIHNldE1vdmllUXVlcnkobW92aWVRdWVyeSkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBtb3ZpZVF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5tb3ZpZVF1ZXJ5LCBtb3ZpZVF1ZXJ5KSxcbiAgICB9KSwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBnZXRMaXN0cygpIHtcbiAgICBjb25zdCB7IGdldExpc3RCeUN1cnJlbnRVc2VyIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbGlzdFF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKGxpc3RRdWVyeSk7XG4gIH1cblxuICBnZXRMaXN0TW92aWVzKCkge1xuICAgIGNvbnN0IHsgZ2V0TGlzdE1vdmllcyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IG1vdmllUXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgaWYgKG1vdmllUXVlcnkubGlzdElkKSB7XG4gICAgICBnZXRMaXN0TW92aWVzKG1vdmllUXVlcnkpO1xuICAgIH1cbiAgfVxuXG4gIGRlbGV0ZUZyb21MaXN0KCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWRNb3ZpZSwgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyByZW1vdmVGcm9tTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICByZW1vdmVGcm9tTGlzdCh7XG4gICAgICBsaXN0SWQ6IHNlbGVjdGVkLmlkLFxuICAgICAgbW92aWVJZDogc2VsZWN0ZWRNb3ZpZS5pZCxcbiAgICB9KTtcbiAgfVxuXG4gIGJhY2tUb0xpc3QoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBzaG93TW92aWVzOiBmYWxzZSxcbiAgICAgIHNlbGVjdGVkTW92aWU6IHt9LFxuICAgICAgbW92aWVRdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgc2hvd0xpc3RNb3ZpZXMobGlzdElkKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dNb3ZpZXM6IHRydWUsXG4gICAgICBzZWxlY3RlZDoge30sXG4gICAgICBtb3ZpZVF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5tb3ZpZVF1ZXJ5LCB7XG4gICAgICAgIGxpc3RJZCxcbiAgICAgIH0pLFxuICAgIH0pLCB0aGlzLmdldExpc3RNb3ZpZXMpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IGRlbGV0ZUxpc3QsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5pZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3dhcm5pbmcnLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2VsZWN0ZWQgZGF0YS4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlTGlzdChzZWxlY3RlZC5pZCwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICBjcmVhdGUoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3Q6IHt9IH0pO1xuICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCB7IHNlbGVjdGVkIH0gPSB0aGlzLnN0YXRlO1xuICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgbGlzdDogc2VsZWN0ZWQsXG4gICAgfSwgdGhpcy50b2dnbGVNb2RhbCk7XG4gIH1cblxuICB0b2dnbGVNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd01vZGFsOiAhcHJldlN0YXRlLnNob3dNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICBoYW5kbGVDaGFuZ2UoeyB0YXJnZXQgfSkge1xuICAgIGNvbnN0IHsgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBsZXQgdmFsdWUgPSB0YXJnZXQucGFyc2VkVmFsdWUgfHwgdGFyZ2V0LnZhbHVlO1xuXG4gICAgaWYgKG5hbWUgPT09ICdwdWJsaWMnKSB7XG4gICAgICB2YWx1ZSA9IE51bWJlci5wYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIH1cblxuICAgIGxpc3RbbmFtZV0gPSB2YWx1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0IH0pO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzYXZlTGlzdCB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxpc3QucHVibGljID0gTnVtYmVyLnBhcnNlSW50KGxpc3QucHVibGljLCAxMCk7XG5cbiAgICBzYXZlTGlzdChsaXN0LCAoKSA9PiB7XG4gICAgICB0aGlzLmdldExpc3RzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDoge30gfSk7XG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgbGlzdFF1ZXJ5LFxuICAgICAgbW92aWVRdWVyeSxcbiAgICAgIHNob3dNb2RhbCxcbiAgICAgIGxpc3QsXG4gICAgICBzZWxlY3RlZCxcbiAgICAgIHNlbGVjdGVkTW92aWUsXG4gICAgICBsaXN0VGFibGVGaWVsZHMsXG4gICAgICBtb3ZpZVRhYmxlRmllbGRzLFxuICAgICAgc2hvd01vdmllcyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIHVzZXIsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHRvdGFsTGlzdCxcbiAgICAgIHRvdGFsTW92aWUsXG4gICAgICBtb3ZpZXMsXG4gICAgICBsaXN0cyxcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGxldCBjb250ZW50ID0gKFxuICAgICAgPFRhYmxlTGlzdFxuICAgICAgICBkYXRhPXtsaXN0c31cbiAgICAgICAgb25DcmVhdGU9e3RoaXMuY3JlYXRlfVxuICAgICAgICBvbkRlbGV0ZT17dGhpcy5kZXN0cm95fVxuICAgICAgICBvbkVkaXQ9e3RoaXMudXBkYXRlfVxuICAgICAgICBvblNlbGVjdD17cyA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWQ6IHMgfSl9XG4gICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZH1cbiAgICAgICAgZmllbGRzPXtsaXN0VGFibGVGaWVsZHN9XG4gICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICB0b3RhbDogdG90YWxMaXN0LFxuICAgICAgICAgIHBhZ2U6IGxpc3RRdWVyeS5wYWdlLFxuICAgICAgICAgIGxpbWl0OiBsaXN0UXVlcnkubGltaXQsXG4gICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgb25QYWdpbmF0ZTogdGhpcy5zZXRMaXN0UXVlcnksXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICk7XG5cbiAgICBpZiAoc2hvd01vdmllcykge1xuICAgICAgY29udGVudCA9IChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuIG10LTJcIj5cbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IGZvbnRTaXplOiAnMjZweCcsIGZvbnRXZWlnaHQ6ICdib2xkJyB9fT5Nb3ZpZXM8L3NwYW4+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSByb3VuZGVkLTBcIiBvbkNsaWNrPXt0aGlzLmJhY2tUb0xpc3R9PkJhY2sgVG8gTGlzdDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxUYWJsZUxpc3RcbiAgICAgICAgICAgIGRhdGE9e21vdmllc31cbiAgICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLmRlbGV0ZUZyb21MaXN0fVxuICAgICAgICAgICAgb25TZWxlY3Q9e3MgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkTW92aWU6IHMgfSl9XG4gICAgICAgICAgICBzZWxlY3RlZD17c2VsZWN0ZWRNb3ZpZX1cbiAgICAgICAgICAgIGZpZWxkcz17bW92aWVUYWJsZUZpZWxkc31cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgdG90YWw6IHRvdGFsTW92aWUsXG4gICAgICAgICAgICAgIHBhZ2U6IG1vdmllUXVlcnkucGFnZSxcbiAgICAgICAgICAgICAgbGltaXQ6IG1vdmllUXVlcnkubGltaXQsXG4gICAgICAgICAgICAgIGJ1dHRvbkNvdW50OiA1LFxuICAgICAgICAgICAgICBvblBhZ2luYXRlOiB0aGlzLnNldExpc3RRdWVyeSxcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9GcmFnbWVudD5cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8UHJvZmlsZUNvbnRhaW5lciB1c2VyPXt1c2VyfSBwYXRoPXttYXRjaC5wYXRofSBwYWdlTG9hZGluZz17cGFnZUxvYWRpbmd9PlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICA8L1Byb2ZpbGVDb250YWluZXI+XG4gICAgICAgIDxNb2RhbCBzaG93PXtzaG93TW9kYWx9IHRpdGxlPVwiQ3JlYXRlIExpc3RcIiBjYW5jZWw9e3RoaXMudG9nZ2xlTW9kYWx9IHN1Ym1pdD17dGhpcy5zYXZlfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbD5MaXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgbmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxpc3QgTmFtZVwiXG4gICAgICAgICAgICAgIHZhbHVlPXtsaXN0Lm5hbWV9XG4gICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1jaGVja1wiPlxuICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1pbnB1dFwiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwicmFkaW9cIlxuICAgICAgICAgICAgICAgICAgbmFtZT1cInB1YmxpY1wiXG4gICAgICAgICAgICAgICAgICB2YWx1ZT1cIjFcIlxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgICAgY2hlY2tlZD17bGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHVibGljIExpc3RcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMFwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshbGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHJpdmF0ZSBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvdGFsTGlzdDogMCxcbiAgdG90YWxNb3ZpZTogMCxcbn07XG5cbkxpc3RzLnByb3BUeXBlcyA9IHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRBY2NvdW50RGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRMaXN0TW92aWVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZWxldGVMaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzYXZlTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHRvdGFsTGlzdDogUHJvcFR5cGVzLm51bWJlcixcbiAgdG90YWxNb3ZpZTogUHJvcFR5cGVzLm51bWJlcixcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgTGlzdHMgZnJvbSAnLi9MaXN0cyc7XG5pbXBvcnQgeyBnZXRBY2NvdW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsXG4gIHNhdmVMaXN0LFxuICBkZWxldGVMaXN0LFxuICBnZXRMaXN0TW92aWVzLFxuICByZW1vdmVGcm9tTGlzdCxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9saXN0cyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxpc3RzOiBzdGF0ZS5saXN0cy5saXN0cyxcbiAgdG90YWw6IHN0YXRlLmxpc3RzLnRvdGFsLFxuICBtb3ZpZXM6IHN0YXRlLmxpc3RzLm1vdmllcyxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxuICBzYXZlTGlzdDogKGxpc3QsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzYXZlTGlzdChsaXN0LCBjYWxsYmFjaykpLFxuICBkZWxldGVMaXN0OiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChkZWxldGVMaXN0KGlkLCBjYWxsYmFjaykpLFxuICBnZXRBY2NvdW50RGV0YWlsOiAoKSA9PiBkaXNwYXRjaChnZXRBY2NvdW50RGV0YWlsKCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbiAgZ2V0TGlzdE1vdmllczogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TGlzdE1vdmllcyhxdWVyeSkpLFxuICByZW1vdmVGcm9tTGlzdDogbGlzdE1vdmllID0+IGRpc3BhdGNoKHJlbW92ZUZyb21MaXN0KGxpc3RNb3ZpZSkpLFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3QoXG4gIG1hcFN0YXRlVG9Qcm9wcyxcbiAgbWFwRGlzcGF0Y2hUb1Byb3BzLFxuKShMaXN0cyk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCBEZXRhaWxUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGFpbFRhYmxlJztcbmltcG9ydCBDb21wYW55TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBhbnlMaXN0JztcbmltcG9ydCBDYXN0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Nhc3RMaXN0JztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvJztcbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb2RhbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHNob3dMaXN0TW9kYWw6IGZhbHNlLFxuICAgICAgbGlzdDoge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnRvZ2dsZUxpc3RNb2RhbCA9IHRoaXMudG9nZ2xlTGlzdE1vZGFsLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBnZXRNb3ZpZURldGFpbCwgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsIG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IG1vdmllSWQgPSBtYXRjaC5wYXJhbXMuaWQ7XG4gICAgZ2V0TW92aWVEZXRhaWwobW92aWVJZCk7XG4gICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIobGlzdCwgbW92aWVJZCk7XG4gIH1cblxuICB0b2dnbGVMaXN0TW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dMaXN0TW9kYWw6ICFwcmV2U3RhdGUuc2hvd0xpc3RNb2RhbCxcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBzaG93TGlzdE1vZGFsLCBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgZGV0YWlsLFxuICAgICAgdXNlcixcbiAgICAgIGlzTG9nZ2VkSW4sXG4gICAgICBsaXN0cyxcbiAgICAgIGFkZFRvTGlzdCxcbiAgICAgIHJlbW92ZUZyb21MaXN0LFxuICAgICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAoIWRldGFpbCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPEZyYWdtZW50PlxuICAgICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgICA8UHJvZ3Jlc3NCYXIgc2hvdyBjb2xvcj1cImluZm9cIiAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCB2aWRlbyA9IGRldGFpbC52aWRlb3MubGVuZ3RoID4gMFxuICAgICAgPyA8VmlkZW8gdmlkZW9LZXk9e2RldGFpbC52aWRlb3NbMF0ua2V5fSAvPlxuICAgICAgOiBudWxsO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXItZmx1aWQgbXQtMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtM1wiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImltZy1mbHVpZCBtYi0yXCIgc3JjPXtkZXRhaWwucG9zdGVyUGF0aH0gYWx0PXtkZXRhaWwudGl0bGV9IC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWItMlwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnkgcm91bmRlZC0wXCIgdHlwZT1cImJ1dHRvblwiIHRpdGxlPVwiQWRkIFRvIExpc3RcIiBvbkNsaWNrPXt0aGlzLnRvZ2dsZUxpc3RNb2RhbH0+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJwbHVzLXNxdWFyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8Q29tcGFueUxpc3QgY29tcGFuaWVzPXtkZXRhaWwucHJvZHVjdGlvbl9jb21wYW5pZXN9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC02IG1iLTJcIj5cbiAgICAgICAgICAgICAge3ZpZGVvfVxuICAgICAgICAgICAgICA8RGV0YWlsVGFibGUgbW92aWU9e2RldGFpbH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tNiBjb2wtbWQtMyBtYi0yXCI+XG4gICAgICAgICAgICAgIDxDYXN0TGlzdCBjYXN0cz17ZGV0YWlsLmNyZWRpdHMuY2FzdH0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dMaXN0TW9kYWx9IHRpdGxlPVwiQWRkIFRvIExpc3RcIiBjYW5jZWw9e3RoaXMudG9nZ2xlTGlzdE1vZGFsfT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC1ncm91cFwiPlxuICAgICAgICAgICAge2xpc3RzLm1hcChsID0+IChcbiAgICAgICAgICAgICAgPGxpXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgbGlzdC1ncm91cC1pdGVtIHJvdW5kZWQtMCAke2wuaXNBZGRlZCA/ICdsaXN0LWdyb3VwLWl0ZW0tc3VjY2VzcycgOiAnICd9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtYmV0d2VlblwiPlxuICAgICAgICAgICAgICAgICAge2wubmFtZX1cbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc20gYnRuLW91dGxpbmUtJHtsLmlzQWRkZWQgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJ31gfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgbW92aWVJZCA9IG1hdGNoLnBhcmFtcy5pZDtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsaXN0T2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92aWVJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpc3RJZDogbC5pZCxcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCFsLmlzQWRkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhZGRUb0xpc3QobGlzdE9iamVjdCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUxpc3RNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0LCBtb3ZpZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdmVGcm9tTGlzdChsaXN0T2JqZWN0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZUxpc3RNb2RhbCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIobGlzdCwgbW92aWVJZCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17YCR7bC5pc0FkZGVkID8gJ3RyYXNoJyA6ICdwbHVzLXNxdWFyZSd9YH0gLz5cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvTW9kYWw+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk1vdmllLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG59O1xuXG5Nb3ZpZS5wcm9wVHlwZXMgPSB7XG4gIGdldE1vdmllRGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBhZGRUb0xpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHJlbW92ZUZyb21MaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZGV0YWlsOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIG1hdGNoOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLmlzUmVxdWlyZWQsXG4gIGxpc3RzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSkuaXNSZXF1aXJlZCxcbiAgdXNlcjogVXNlclNoYXBlLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9Nb3ZpZSc7XG5pbXBvcnQgeyBnZXRNb3ZpZURldGFpbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbW92aWUnO1xuaW1wb3J0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsIGFkZFRvTGlzdCwgcmVtb3ZlRnJvbUxpc3QgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2xpc3RzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgZGV0YWlsOiBzdGF0ZS5tb3ZpZS5kZXRhaWwsXG4gIHVzZXI6IHN0YXRlLmRpc2NvdmVyLnVzZXIsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG4gIGxpc3RzOiBzdGF0ZS5saXN0cy5saXN0cyxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZURldGFpbDogaWQgPT4gZGlzcGF0Y2goZ2V0TW92aWVEZXRhaWwoaWQpKSxcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IChxdWVyeSwgbW92aWVJZCkgPT4gZGlzcGF0Y2goZ2V0TGlzdEJ5Q3VycmVudFVzZXIocXVlcnksIG1vdmllSWQpKSxcbiAgYWRkVG9MaXN0OiAobGlzdE1vdmllLCBjYWxsYmFjaykgPT4gZGlzcGF0Y2goYWRkVG9MaXN0KGxpc3RNb3ZpZSwgY2FsbGJhY2spKSxcbiAgcmVtb3ZlRnJvbUxpc3Q6IChsaXN0TW92aWUsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChyZW1vdmVGcm9tTGlzdChsaXN0TW92aWUsIGNhbGxiYWNrKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKE1vdmllKTtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0ICcuLi9zY3JpcHRzJztcbmltcG9ydCAnLi4vLi4vc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MnO1xuaW1wb3J0IGNvbmZpZ3VyZVN0b3JlIGZyb20gJy4vc3RvcmUvY29uZmlndXJlLXN0b3JlJztcbmltcG9ydCBSb290IGZyb20gJy4vUm9vdCc7XG5pbXBvcnQgZm9udEF3ZXNvbWUgZnJvbSAnLi4vbGliL2ZvbnQtYXdlc29tZSc7XG5cbmZvbnRBd2Vzb21lKCk7IC8vIGluaXQgZm9udCBhd3NvbWUgaWNvbnNcblxuY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSgpO1xuXG5yZW5kZXIoXG4gIDxSb290IHN0b3JlPXtzdG9yZX0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSxcbik7XG4iLCJpbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyOiB7fSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFjY291bnQoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfQUNDT1VOVF9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHNob3dBbGVydDogZmFsc2UsXG4gIGFsZXJ0TWVzc2FnZTogbnVsbCxcbiAgYWxlcnRLaW5kOiAnaW5mbycsXG4gIHBhZ2VMb2FkaW5nOiB0cnVlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbW1vbihzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFRPR0dMRV9BTEVSVDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93QWxlcnQ6ICFzdGF0ZS5zaG93QWxlcnQsXG4gICAgICAgIGFsZXJ0TWVzc2FnZTogYWN0aW9uLm1lc3NhZ2UsXG4gICAgICAgIGFsZXJ0S2luZDogYWN0aW9uLmtpbmQsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1BBR0VfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgcGFnZUxvYWRpbmc6IGFjdGlvbi5wYWdlTG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfTE9BRElOR19TVEFUVVM6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbG9hZGluZzogYWN0aW9uLmxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgVE9HR0xFX0ZJTFRFUjpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBzaG93RmlsdGVyOiAhc3RhdGUuc2hvd0ZpbHRlcixcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfVVBMT0FERURfSU1BR0U6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgdXBsb2FkZWRBdmF0YXI6IGFjdGlvbi5wYXlsb2FkLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVTLCBTRVRfR0VOUkVTLCBTRVRfUVVFUlkgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmNvbnN0IHVzZXIgPSB7XG4gIGlkOiBjb29raWUuZ2V0KCd1c2VyX2lkJyksXG4gIHVzZXJOYW1lOiBjb29raWUuZ2V0KCd1c2VybmFtZScpLFxuICBmcmlzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfZmlyc3RfbmFtZScpLFxuICBsYXN0TmFtZTogY29va2llLmdldCgndXNlcl9sYXN0X25hbWUnKSxcbiAgZW1haWw6IGNvb2tpZS5nZXQoJ3VzZXJfZW1haWwnKSxcbn07XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcixcbiAgZ2VucmVzOiBbXSxcbiAgbW92aWVzOiBbXSxcbiAgdG90YWw6IDAsXG4gIHRvdGFsUGFnZTogMSxcbiAgcXVlcnk6IHtcbiAgICBwYWdlOiAxLFxuICAgIHNvcnRCeTogJ3BvcHVsYXJpdHkuZGVzYycsXG4gICAgZmlsdGVyOiBudWxsLFxuICAgIHNlYXJjaFRleHQ6ICcnLFxuICAgIHdpdGhHZW5yZXM6IFtdLFxuICAgIHllYXI6ICcnLFxuICAgIGNyZXdzOiBbXSxcbiAgICBjYXN0czogW10sXG4gIH0sXG4gIGlzTG9nZ2VkSW46ICEhdXNlci5lbWFpbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2NvdmVyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IHN0YXRlLm1vdmllcy5jb25jYXQoYWN0aW9uLm1vdmllcyksXG4gICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXG4gICAgICAgIHRvdGFsUGFnZXM6IGFjdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiBhY3Rpb24ucGFnZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0dFTlJFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBnZW5yZXM6IGFjdGlvbi5nZW5yZXMsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1FVRVJZOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogW10sXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5xdWVyeSwge1xuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgW2FjdGlvbi5maWVsZF06IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB1c2VyIG9iamVjdCB0byBhY2NvdW50IHJlZHVjZXJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9hY2NvdW50JztcbmltcG9ydCBkaXNjb3ZlciBmcm9tICcuL2Rpc2NvdmVyJztcbmltcG9ydCBtb3ZpZSBmcm9tICcuL21vdmllJztcbmltcG9ydCBsaXN0cyBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhY2NvdW50LFxuICBkaXNjb3ZlcixcbiAgbW92aWUsXG4gIGxpc3RzLFxuICBjb21tb24sXG59KTtcbiIsImltcG9ydCB7IFNFVF9MSVNUUywgU0VUX0xJU1RfTU9WSUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdHM6IFtdLFxuICB0b3RhbExpc3Q6IDAsXG4gIG1vdmllczogW10sXG4gIHRvdGFsTW92aWU6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9MSVNUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsaXN0czogYWN0aW9uLnBheWxvYWQubGlzdHMsXG4gICAgICAgIHRvdGFsTGlzdDogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0xJU1RfTU9WSUVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogYWN0aW9uLnBheWxvYWQubW92aWVzLFxuICAgICAgICB0b3RhbE1vdmllOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRldGFpbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRV9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24uZGV0YWlsLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgKSxcbiAgKTtcbn1cbiIsIlxuaW1wb3J0IHtcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXMsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICBzZXRMb2FkaW5nU3RhdHVzLFxufSBmcm9tICcuLi9hcHAvYWN0aW9ucy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcblxuICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuXG4gICAgc3dpdGNoIChzdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDQwNDpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9wYWdlLW5vdC1mb3VuZGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgQUxFUlRfVFlQRVMgPSBbXG4gICdwcmltYXJ5JyxcbiAgJ3NlY29uZGFyeScsXG4gICdzdWNjZXNzJyxcbiAgJ2RhbmdlcicsXG4gICd3YXJuaW5nJyxcbiAgJ2luZm8nLFxuICAnbGlnaHQnLFxuICAnZGFyaycsXG5dO1xuXG5leHBvcnQgY29uc3QgQUxFUlRfVFlQRV9JQ09OX01BUCA9IHtcbiAgcHJpbWFyeTogJycsXG59O1xuIiwiY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5cbmNvbnN0IHNldCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBkb2MuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xufTtcblxuY29uc3QgZ2V0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvYy5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBbY25hbWUsIGN2YWx1ZV0gPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGNuYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBjdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQsXG4gIHNldCxcbn07XG4iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7XG4gIGZhVXNlcixcbiAgZmFTaWduT3V0QWx0LFxuICBmYUVudmVsb3BlLFxuICBmYVVubG9jayxcbiAgZmFBbGlnbkxlZnQsXG4gIGZhS2V5LFxuICBmYVNpZ25hdHVyZSxcbiAgZmFGaWx0ZXIsXG4gIGZhU29ydEFtb3VudFVwLFxuICBmYVNvcnRBbW91bnREb3duLFxuICBmYVVzZXJDaXJjbGUsXG4gIGZhTGlzdCxcbiAgZmFTdGFyLFxuICBmYUhlYXJ0LFxuICBmYUNvbW1lbnQsXG4gIGZhU3dhdGNoYm9vayxcbiAgZmFVc2VyRnJpZW5kcyxcbiAgZmFDb2csXG4gIGZhRWRpdCxcbiAgZmFVcGxvYWQsXG4gIGZhTmV3c3BhcGVyLFxuICBmYUF0LFxuICBmYUFuZ2xlUmlnaHQsXG4gIGZhQW5nbGVMZWZ0LFxuICBmYVBsdXNTcXVhcmUsXG4gIGZhVHJhc2gsXG4gIGZhQ2hlY2ssXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge1xuICBmYUZhY2Vib29rLFxuICBmYUdvb2dsZSxcbiAgZmFUd2l0dGVyLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxpYnJhcnkuYWRkKFxuICAgIGZhVXNlcixcbiAgICBmYVNpZ25PdXRBbHQsXG4gICAgZmFFbnZlbG9wZSxcbiAgICBmYVVubG9jayxcbiAgICBmYUFsaWduTGVmdCxcbiAgICBmYUtleSxcbiAgICBmYVNpZ25hdHVyZSxcbiAgICBmYUZpbHRlcixcbiAgICBmYVNvcnRBbW91bnRVcCxcbiAgICBmYVNvcnRBbW91bnREb3duLFxuICAgIGZhRmFjZWJvb2ssXG4gICAgZmFHb29nbGUsXG4gICAgZmFUd2l0dGVyLFxuICAgIGZhSW5zdGFncmFtLFxuICAgIGZhVXNlckNpcmNsZSxcbiAgICBmYUxpc3QsXG4gICAgZmFTdGFyLFxuICAgIGZhSGVhcnQsXG4gICAgZmFDb21tZW50LFxuICAgIGZhU3dhdGNoYm9vayxcbiAgICBmYVVzZXJGcmllbmRzLFxuICAgIGZhQ29nLFxuICAgIGZhRWRpdCxcbiAgICBmYVVwbG9hZCxcbiAgICBmYU5ld3NwYXBlcixcbiAgICBmYUF0LFxuICAgIGZhQW5nbGVSaWdodCxcbiAgICBmYUFuZ2xlTGVmdCxcbiAgICBmYVBsdXNTcXVhcmUsXG4gICAgZmFUcmFzaCxcbiAgICBmYUNoZWNrLFxuICApO1xufVxuIiwiaW1wb3J0IHlhbGwgZnJvbSAneWFsbC1qcyc7XG5cbigoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHlhbGwoe1xuICAgICAgb2JzZXJ2ZUNoYW5nZXM6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9