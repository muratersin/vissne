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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvQ2FzdExpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ2FzdExpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Db21wYW55LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvQ29tcGFueUxpc3Quc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvQ29tcGFueUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9EZXRhaWxUYWJsZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9GaWx0ZXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRm9vdGVyL0Zvb3Rlci5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvTW92aWVDYXJkLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllTGlzdC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL05hdmJhci9OYXZiYXIuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9QYWdlTG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2luYXRpb24uanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qb3N0ZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9TcGlubmVyLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L1RhYmxlTGlzdC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9WaWRlby5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FjY291bnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL0FsZXJ0RGlhbG9nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuc2NzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0F1dGgvQXV0aC5zY3NzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3MiXSwibmFtZXMiOlsiUm9vdCIsInN0b3JlIiwiRGlzY292ZXIiLCJBdXRoIiwiQWNjb3VudCIsIkxpc3RzIiwiTW92aWUiLCJOb3RGb3VuZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsImluc3RhbmNlT2YiLCJPYmplY3QiLCJpc1JlcXVpcmVkIiwic2V0QWNjb3VudERldGFpbCIsInR5cGUiLCJTRVRfQUNDT1VOVF9ERVRBSUwiLCJwYXlsb2FkIiwidXNlciIsImdldEFjY291bnREZXRhaWwiLCJkaXNwYXRjaCIsImF4aW9zIiwiZ2V0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImNhdGNoIiwidXBkYXRlVXNlciIsInB1dCIsImlkIiwia2luZCIsIm1lc3NhZ2UiLCJjaGFuZ2VQYXNzd29yZCIsInBhc3N3b3JkIiwibG9naW5SZWdpc3RlciIsInVybCIsInBvc3QiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJsb2dvdXQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJ1cGxvYWRlZEZpbGUiLCJzZXRNb3ZpZXMiLCJTRVRfTU9WSUVTIiwibW92aWVzIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsInNldFF1ZXJ5IiwiZmllbGQiLCJTRVRfUVVFUlkiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldEdlbnJlcyIsIlNFVF9HRU5SRVMiLCJnZW5yZXMiLCJnZXRHZW5yZXMiLCJzZXRMaXN0IiwiZ2V0TGlzdEJ5Q3VycmVudFVzZXIiLCJzYXZlTGlzdCIsImRlbGV0ZUxpc3QiLCJhZGRUb0xpc3QiLCJyZW1vdmVGcm9tTGlzdCIsInNldExpc3RNb3ZpZXMiLCJnZXRMaXN0TW92aWVzIiwibGlzdHMiLCJTRVRfTElTVFMiLCJtb3ZpZUlkIiwibGltaXQiLCJjdXJyZW50VXNlcklkIiwiY29va2llIiwidmlzc25lIiwiZG9tYWluIiwicm93cyIsImNvdW50IiwibGlzdCIsImNhbGxiYWNrIiwib3BzIiwibWV0aG9kIiwicmVzdWx0IiwiZGVsZXRlIiwibGlzdElkIiwiU0VUX0xJU1RfTU9WSUVTIiwic2V0TW92aWVEZXRhaWwiLCJTRVRfTU9WSUVfREVUQUlMIiwiZGV0YWlsIiwiZ2V0TW92aWVEZXRhaWwiLCJBbGVydCIsInByb3BzIiwic2hvdyIsImRlZmF1bHRQcm9wcyIsIm9uZU9mIiwiQUxFUlRfVFlQRVMiLCJib29sIiwic3RyaW5nIiwiQ2FzdCIsIm5hbWUiLCJjaGFyYWN0ZXIiLCJwcm9maWxlUGF0aCIsIkNhc3RTaGFwZSIsIkNhc3RMaXN0IiwiY2FzdHMiLCJjYXN0TGlzdCIsIm1hcCIsImMiLCJhcnJheU9mIiwiQ29tcGFueSIsImxvZ28iLCJsb2dvUGF0aCIsImltYWdlc1NlY3VyZUJhc2VVcmwiLCJjZG4iLCJDb21wYW55U2hhcGUiLCJDb21wYW55TGlzdCIsImNvbXBhbmllcyIsImxvZ29fcGF0aCIsIkRldGFpbFRhYmxlIiwibW92aWUiLCJvcmdpbmFsVGl0bGUiLCJ5ZWFyIiwidm90ZV9hdmVyYWdlIiwidm90ZV9jb3VudCIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJ0YWdsaW5lIiwiY291bnRyaWVzIiwibGFuZ3VhZ2UiLCJkaXJlY3RvciIsIndyaXRlciIsImhvbWVwYWdlIiwiTW92aWVTaGFwZSIsInN3aXRjaFNvcnRRdWVyeSIsInNvcnRCeSIsInNwbGl0IiwiYWRkR2VucmVJZCIsImN1cnJlbnRHZW5yZXMiLCJpbmRleCIsImluZGV4T2YiLCJwdXNoIiwic3BsaWNlIiwiaGFuZGxlQ2hhbmdlWWVhciIsIk51bWJlciIsImlzTmFOIiwiRmlsdGVyIiwic29ydEljb25DbGFzcyIsInNvcnRPcHRpb25zIiwiU09SVF9PUFRJT05TIiwic29ydCIsImtleSIsInJlcGxhY2UiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImdlbnJlT3B0aW9ucyIsImciLCJ3aXRoR2VucmVzIiwic2VhcmNoVGV4dCIsIiRldmVudCIsInRhcmdldCIsIkdlbnJlU2hhcGUiLCJGaWx0ZXJTaGFwZSIsImZ1bmMiLCJGb290ZXIiLCJNZW51IiwicGF0aCIsIml0ZW1zIiwibWVudUl0ZW1zIiwibSIsImljb24iLCJzaGFwZSIsIk1vZGFsIiwidGl0bGUiLCJjYW5jZWwiLCJzdWJtaXQiLCJjaGlsZHJlbiIsImNsYXNzTmFtZSIsInN1Ym1pdEJ1dHRvbiIsIk1vdmllQ2FyZCIsImltYWdlIiwicmF0ZSIsInNsdWciLCJudW1iZXIiLCJNb3ZpZUxpc3QiLCJwb3N0ZXIiLCJ2b3RlQXZlcmFnZSIsIk5hdmJhciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2UiLCJpc0ludGVnZXIiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwiTWF0aCIsImZsb29yIiwiYmMiLCJjZWlsIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwiUG9zdGVyIiwic3JjIiwiYWx0IiwiZGVmYXVsdENvdmVySW1hZ2VQYXRoIiwiUHJvZmlsZUNvbnRhaW5lciIsImF2YXRhciIsInByb2ZpbGVNZW51IiwiUHJvZ3Jlc3NCYXIiLCJoZWlnaHQiLCJ3aWR0aCIsIlNwaW5uZXIiLCJzaXplIiwiY29sb3IiLCJhZGRpb25hbENsYXNzIiwiY3JlYXRlSGVhZGVyIiwiZmllbGRzIiwidmlzaWJsZUZpZWxkcyIsImZpbHRlciIsImYiLCJoaWRkZW4iLCJjcmVhdGVCb2R5Iiwic2VsZWN0ZWQiLCJvblNlbGVjdCIsInRib2R5IiwiaXRlbSIsIml0ZW1GaWVsZHMiLCJmb3JtYXQiLCJ0b1N0cmluZyIsImNyZWF0ZVBhZ2luYXRpb24iLCJkYXRhTGVuZ3RoIiwiVGFibGVMaXN0IiwicGFnaW5hdGlvbiIsInJlc3BvbnNpdmUiLCJvbkNyZWF0ZSIsIm9uRWRpdCIsIm9uRGVsZXRlIiwiYnRuR3JvdXAiLCJoZWFkcyIsImJvZHkiLCJwYWdpbmF0aW9uQnV0dG9ucyIsIlZpZGVvIiwidmlkZW9LZXkiLCJMT0FESU5HIiwiUkVHSVNURVIiLCJTRVRfVVNFUiIsIkdFVF9NT1ZJRVMiLCJHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSIiwiQ1JFQVRFX0xJU1QiLCJERUxFVEVfTElTVCIsIkFERF9UT19MSVNUIiwiREVMRVRFX0ZST01fTElTVCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZW1haWwiLCJmdWxsTmFtZSIsIm1hdGNoU2hhcGUiLCJjcmV3cyIsImx0ZSIsImd0ZSIsInJlbGVhc2VZZWFyIiwic3RhdGUiLCJlZGl0TW9kZSIsInVzZXJGb3JtIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwiY2xhc3MiLCJlIiwiZXJyb3IiLCJDb21wb25lbnQiLCJtYXBTdGF0ZVRvUHJvcHMiLCJjb21tb24iLCJhY2NvdW50IiwibWFwRGlzcGF0Y2hUb1Byb3BzIiwiYWxlcnQiLCJzaG93QWxlcnQiLCJhbGVydE1lc3NhZ2UiLCJhbGVydEtpbmQiLCJBbGVydERpYWxvZyIsImZvcm0iLCJjb25maXJtUGFzc3dvcmQiLCJzd2l0Y2hGb3JtIiwiZXJyb3JNZXNzYWdlIiwiZW1haWxJbnB1dCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImlzUmVnaXN0ZXIiLCJpc1ZhbGlkIiwiY2hlY2tWYWxpZGl0eSIsInByZXZTdGF0ZSIsImJ1dHRvblRleHQiLCJzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0IiwicmVnaXN0ZXJJbnB1dCIsImhhbmRsZVN1Ym1pdCIsImRpc2NvdmVyIiwibG9hZE1vdmllcyIsInNob3dGaWx0ZXIiLCJwYXRobmFtZSIsIm1vdmllUXVlcnkiLCJsaXN0UXVlcnkiLCJzZWxlY3RlZE1vdmllIiwibW92aWVUYWJsZUZpZWxkcyIsImxpc3RUYWJsZUZpZWxkcyIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwic2hvd0xpc3RNb3ZpZXMiLCJzZXRMaXN0UXVlcnkiLCJzZXRNb3ZpZVF1ZXJ5IiwiZ2V0TGlzdHMiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJzYXZlIiwiYmFja1RvTGlzdCIsImRlbGV0ZUZyb21MaXN0IiwiYXNzaWduIiwic2hvd01vdmllcyIsInNob3dNb2RhbCIsInBhcnNlZFZhbHVlIiwicGFyc2VJbnQiLCJwdWJsaWMiLCJ0b3RhbExpc3QiLCJ0b3RhbE1vdmllIiwiY29udGVudCIsInMiLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJ0YWJsZUZpZWxkcyIsImxpc3RNb3ZpZSIsInNob3dMaXN0TW9kYWwiLCJ0b2dnbGVMaXN0TW9kYWwiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwibCIsImlzQWRkZWQiLCJsaXN0T2JqZWN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1cGxvYWRlZEF2YXRhciIsImZyaXN0TmFtZSIsImNvbmNhdCIsImNvbmZpZ3VyZVN0b3JlIiwicmVkdWNlciIsInRodW5rTWlkZGxld2FyZSIsImFqYXhFcnJvckhhbmRsZXIiLCJzdGF0dXNDb2RlIiwiQUxFUlRfVFlQRV9JQ09OX01BUCIsInByaW1hcnkiLCJkb2MiLCJzZXQiLCJjb29raWVzIiwiY25hbWUiLCJjdmFsdWUiLCJ0cmltIiwidW5kZWZpbmVkIiwibW9kdWxlIiwiZXhwb3J0cyIsImluaXQiLCJsaWJyYXJ5IiwiYWRkIiwiZmFVc2VyIiwiZmFTaWduT3V0QWx0IiwiZmFFbnZlbG9wZSIsImZhVW5sb2NrIiwiZmFBbGlnbkxlZnQiLCJmYUtleSIsImZhU2lnbmF0dXJlIiwiZmFGaWx0ZXIiLCJmYVNvcnRBbW91bnRVcCIsImZhU29ydEFtb3VudERvd24iLCJmYUZhY2Vib29rIiwiZmFHb29nbGUiLCJmYVR3aXR0ZXIiLCJmYUluc3RhZ3JhbSIsImZhVXNlckNpcmNsZSIsImZhTGlzdCIsImZhU3RhciIsImZhSGVhcnQiLCJmYUNvbW1lbnQiLCJmYVN3YXRjaGJvb2siLCJmYVVzZXJGcmllbmRzIiwiZmFDb2ciLCJmYUVkaXQiLCJmYVVwbG9hZCIsImZhTmV3c3BhcGVyIiwiZmFBdCIsImZhQW5nbGVSaWdodCIsImZhQW5nbGVMZWZ0IiwiZmFQbHVzU3F1YXJlIiwiZmFUcmFzaCIsImZhQ2hlY2siLCJ3aW4iLCJhZGRFdmVudExpc3RlbmVyIiwib2JzZXJ2ZUNoYW5nZXMiLCJvbmxvYWQiLCJyZW1vdmUiLCJlbnYiLCJuYXZpZ2F0b3IiLCJzZXJ2aWNlV29ya2VyIiwicmVnaXN0ZXIiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFRLG9CQUFvQjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUFpQiw0QkFBNEI7QUFDN0M7QUFDQTtBQUNBLDBCQUFrQiwyQkFBMkI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtB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RCxDOzs7Ozs7Ozs7Ozs7OztBQ3ZFRDs7Ozs7O0FBRUEsQ0FBQyxZQUFNO0FBQ0wsTUFBTUMsTUFBTW5aLE1BQVo7O0FBRUFnUyxXQUFTb0gsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQU07QUFDbEQsMEJBQUs7QUFDSEMsc0JBQWdCO0FBRGIsS0FBTDtBQUdELEdBSkQ7O0FBTUFGLE1BQUlHLE1BQUosR0FBYSxZQUFNO0FBQ2pCLFFBQU05WSxjQUFjd1IsU0FBUzJELGNBQVQsQ0FBd0IsYUFBeEIsQ0FBcEI7O0FBRUEsUUFBSW5WLFdBQUosRUFBaUI7QUFDZkEsa0JBQVkrWSxNQUFaO0FBQ0Q7O0FBRUQsUUFBSXhWLE9BQU95VixHQUFQLEtBQWUsWUFBbkIsRUFBaUM7QUFDL0IsVUFBSSxtQkFBbUJDLFNBQXZCLEVBQWtDO0FBQ2hDQSxrQkFBVUMsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGO0FBQ0YsR0FaRDtBQWFELENBdEJELEk7Ozs7Ozs7Ozs7O0FDRkEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeFwiLFwiY29tbW9uXCIsXCJyZWFjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9jb250YWluZXJzL0Rpc2NvdmVyJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL2NvbnRhaW5lcnMvTW92aWUnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9jb250YWluZXJzL0F1dGgnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb250YWluZXJzL0FjY291bnQnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29udGFpbmVycy9MaXN0cyc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cnO1xuXG5jb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29taW5nLXNvb25cIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luLXRoZWF0ZXJzXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoXCIgY29tcG9uZW50PXtBdXRofSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2xpc3RzXCIgY29tcG9uZW50PXtMaXN0c30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86c2x1Zy86aWRcIiBjb21wb25lbnQ9e01vdmllfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2Utbm90LWZvdW5kXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1JvdXRlcj5cbiAgICAgIDxBbGVydERpYWxvZyAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5Sb290LnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgeyBTRVRfQUNDT1VOVF9ERVRBSUwgfSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCBzZXRMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0QWNjb3VudERldGFpbCA9IHVzZXIgPT4gKHtcbiAgdHlwZTogU0VUX0FDQ09VTlRfREVUQUlMLFxuICBwYXlsb2FkOiB7XG4gICAgdXNlcixcbiAgfSxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0QWNjb3VudERldGFpbCA9ICgpID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaChzZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gIGF4aW9zLmdldCgnL2FwaS9hY2NvdW50JylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICBkaXNwYXRjaChzZXRBY2NvdW50RGV0YWlsKHJlc3BvbnNlLmRhdGEpKTtcbiAgICB9KVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IHVzZXIgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoYC9hcGkvdXNlci8ke3VzZXIuaWR9YCwgdXNlcilcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHNldEFjY291bnREZXRhaWwocmVzcG9uc2UuZGF0YSkpO1xuICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgIG1lc3NhZ2U6ICdQcm9maWxlIGhhcyBiZWVuIHN1Y2Nlc3NmdWxseSB1cGRhdGVkLicsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcblxuZXhwb3J0IGNvbnN0IGNoYW5nZVBhc3N3b3JkID0gcGFzc3dvcmQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICBheGlvcy5wdXQoJy9hcGkvdXNlci9jaGFuZ2UtcGFzc3dvcmQnLCBwYXNzd29yZClcbiAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3N1Y2Nlc3MnLFxuICAgICAgICBtZXNzYWdlOiBkYXRhLm1lc3NhZ2UsXG4gICAgICB9KSk7XG4gICAgfSlcbiAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xufTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBsb2dpblJlZ2lzdGVyID0gKGRhdGEsIHVybCkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgYXhpb3MucG9zdCh1cmwsIGRhdGEpLnRoZW4oKCkgPT4ge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gJy8nO1xuICAgIC8vIFRPRE86IHNldCB1c2VyIGluZm9ybWF0aW9uIHRvIGNvbW1vbiBzdGF0ZVxuICB9KS5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuXG5leHBvcnQgY29uc3QgbG9nb3V0ID0gKCkgPT4ge1xuXG59O1xuIiwiaW1wb3J0IHtcbiAgVE9HR0xFX0FMRVJULFxuICBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgU0VUX0xPQURJTkdfU1RBVFVTLFxuICBUT0dHTEVfRklMVEVSLFxuICBTRVRfVVBMT0FERURfSU1BR0UsXG59IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlQWxlcnREaWFsb2cgPSAoeyBtZXNzYWdlLCBraW5kIH0pID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9BTEVSVCxcbiAgbWVzc2FnZSxcbiAga2luZCxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0UGFnZUxvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldExvYWRpbmdTdGF0dXMgPSBzdGF0dXMgPT4gKHtcbiAgdHlwZTogU0VUX0xPQURJTkdfU1RBVFVTLFxuICBsb2FkaW5nOiBzdGF0dXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IHRvZ2dsZUZpbHRlciA9ICgpID0+ICh7XG4gIHR5cGU6IFRPR0dMRV9GSUxURVIsXG59KTtcblxuZXhwb3J0IGNvbnN0IHNldFVwbG9hZGVkSW1hZ2UgPSB1cGxvYWRlZEZpbGUgPT4gKHtcbiAgdHlwZTogU0VUX1VQTE9BREVEX0lNQUdFLFxuICBwYXlsb2FkOiB1cGxvYWRlZEZpbGUsXG59KTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9RVUVSWSwgU0VUX0dFTlJFUyB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IHsgc2V0TG9hZGluZ1N0YXR1cyB9IGZyb20gJy4vY29tbW9uJztcbmltcG9ydCBhamF4RXJyb3JIYW5kbGVyIGZyb20gJy4uLy4uL2xpYi9hamF4LWVycm9yLWhhbmRsZXInO1xuXG5leHBvcnQgY29uc3Qgc2V0TW92aWVzID0gcmVzcG9uc2UgPT4gKHtcbiAgdHlwZTogU0VUX01PVklFUyxcbiAgbW92aWVzOiByZXNwb25zZS5yZXN1bHRzLFxuICBwYWdlOiAocmVzcG9uc2UucGFnZSArIDEpLFxuICB0b3RhbFBhZ2VzOiByZXNwb25zZS50b3RhbF9wYWdlcyxcbiAgdG90YWw6IHJlc3BvbnNlLnRvdGFsX3Jlc3VsdHMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllcyA9IChxdWVyeSkgPT4ge1xuICBsZXQgdXJsID0gJ2FwaS9kaXNjb3Zlcic7XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKHF1ZXJ5TmFtZSwgaSkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gcXVlcnlbcXVlcnlOYW1lXTtcbiAgICBjb25zdCBvcCA9IGkgPT09IDBcbiAgICAgID8gJz8nXG4gICAgICA6ICcmJztcblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICB1cmwgKz0gYCR7b3B9JHtxdWVyeU5hbWV9PSR7dmFsdWV9YDtcbiAgICAgIH0gZWxzZSBpZiAodmFsdWUubGVuZ3RoID4gMCkge1xuICAgICAgICBsZXQgbXVsdGlRdWVyeSA9IGAke3F1ZXJ5TmFtZX09YDtcbiAgICAgICAgdmFsdWUuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICAgIG11bHRpUXVlcnkgKz0gYCR7dn0sYDtcbiAgICAgICAgfSk7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke211bHRpUXVlcnl9YDtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQodXJsKVxuICAgICAgLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TW92aWVzKGRhdGEpKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IHNldFF1ZXJ5ID0gKHsgZmllbGQsIHZhbHVlIH0pID0+IChkaXNwYXRjaCkgPT4ge1xuICBkaXNwYXRjaCh7XG4gICAgdHlwZTogU0VUX1FVRVJZLFxuICAgIGZpZWxkLFxuICAgIHZhbHVlLFxuICB9KTtcbiAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xufTtcblxuZXhwb3J0IGNvbnN0IHNldEdlbnJlcyA9IGdlbnJlcyA9PiAoe1xuICB0eXBlOiBTRVRfR0VOUkVTLFxuICBnZW5yZXMsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldEdlbnJlcyA9ICgpID0+IGRpc3BhdGNoID0+IGF4aW9zXG4gIC5nZXQoJy9hcGkvZ2VucmUnKVxuICAudGhlbigoeyBkYXRhIH0pID0+IGRpc3BhdGNoKHNldEdlbnJlcyhkYXRhKSkpXG4gIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuXG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5pbXBvcnQge1xuICBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSLFxuICBDUkVBVEVfTElTVCxcbiAgREVMRVRFX0xJU1QsXG4gIEFERF9UT19MSVNULFxuICBERUxFVEVfRlJPTV9MSVNULFxuICBTRVRfTElTVF9NT1ZJRVMsXG4gIFNFVF9MSVNUUyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzLCBzZXRQYWdlTG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBmdW5jdGlvbiBzZXRMaXN0KHsgbGlzdHMsIHRvdGFsIH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTElTVFMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbGlzdHMsXG4gICAgICB0b3RhbCxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TGlzdEJ5Q3VycmVudFVzZXIoeyBwYWdlLCBsaW1pdCB9LCBtb3ZpZUlkKSB7XG4gIGNvbnN0IGN1cnJlbnRVc2VySWQgPSBjb29raWUuZ2V0KCd1c2VyX2lkJyk7XG5cbiAgaWYgKCFjdXJyZW50VXNlcklkKSB7XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgfVxuXG4gIGxldCB1cmwgPSBgL2FwaS9saXN0cz91c2VySWQ9JHtjdXJyZW50VXNlcklkfSZwYWdlPSR7cGFnZX0mbGltaXQ9JHtsaW1pdH1gO1xuXG4gIGlmIChtb3ZpZUlkKSB7XG4gICAgdXJsICs9IGAmbW92aWVJZD0ke21vdmllSWR9YDtcbiAgfVxuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcyh1cmwpXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHNldExpc3Qoe1xuICAgICAgICAgIGxpc3RzOiByZXNwb25zZS5kYXRhLnJvd3MsXG4gICAgICAgICAgdG90YWw6IHJlc3BvbnNlLmRhdGEuY291bnQsXG4gICAgICAgIH0pKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2F2ZUxpc3QobGlzdCwgY2FsbGJhY2spIHtcbiAgY29uc3Qgb3BzID0gIWxpc3QuaWQgPyB7XG4gICAgbWV0aG9kOiAncG9zdCcsXG4gICAgdXJsOiAnL2FwaS9saXN0cycsXG4gIH0gOiB7XG4gICAgbWV0aG9kOiAncHV0JyxcbiAgICB1cmw6IGAvYXBpL2xpc3RzLyR7bGlzdC5pZH1gLFxuICB9O1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvc1tvcHMubWV0aG9kXShvcHMudXJsLCBsaXN0KVxuICAgICAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzdWx0LmRhdGEubWVzc2FnZSxcbiAgICAgICAgfSkpO1xuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkZWxldGVMaXN0KGlkLCBjYWxsYmFjaykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZGVsZXRlKGAvYXBpL2xpc3RzLyR7aWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFRvTGlzdCh7IGxpc3RJZCwgbW92aWVJZCB9LCBjYWxsYmFjaykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MucG9zdChgL2FwaS9saXN0cy8ke2xpc3RJZH0vbW92aWUvJHttb3ZpZUlkfWAsIHt9KVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tTGlzdCh7IGxpc3RJZCwgbW92aWVJZCB9LCBjYWxsYmFjaykge1xuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MuZGVsZXRlKGAvYXBpL2xpc3RzLyR7bGlzdElkfS9tb3ZpZS8ke21vdmllSWR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgICAgIGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICBraW5kOiAnc3VjY2VzcycsXG4gICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdE1vdmllcyh7IHJvd3MsIGNvdW50IH0pIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBTRVRfTElTVF9NT1ZJRVMsXG4gICAgcGF5bG9hZDoge1xuICAgICAgbW92aWVzOiByb3dzLFxuICAgICAgdG90YWw6IGNvdW50LFxuICAgIH0sXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMaXN0TW92aWVzKHF1ZXJ5LCBjYWxsYmFjaykge1xuICBjb25zdCB7IGxpc3RJZCwgcGFnZSwgbGltaXQgfSA9IHF1ZXJ5O1xuXG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5nZXQoYC9hcGkvbGlzdHMvJHtsaXN0SWR9P3BhZ2U9JHtwYWdlfSZsaW1pdD0ke2xpbWl0fWApXG4gICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRMaXN0TW92aWVzKHJlc3BvbnNlLmRhdGEpKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrICYmIHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZURldGFpbCA9IGRldGFpbCA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVfREVUQUlMLFxuICBkZXRhaWwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRGV0YWlsID0gaWQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldE1vdmllRGV0YWlsKG51bGwpKTtcblxuICBheGlvcy5nZXQoYC9hcGkvbW92aWUvJHtpZH1gKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goXG4gICAgICBzZXRNb3ZpZURldGFpbChkYXRhKSxcbiAgICApKVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIG1lc3NhZ2UsXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gdy0xMDAgdGV4dC1jZW50ZXJgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxuICBraW5kOiAnaW5mbycsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5pbXBvcnQgeyBDb21wYW55U2hhcGUgfSBmcm9tICcuLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5jb25zdCBDb21wYW55ID0gKHsgbG9nbywgbmFtZSB9KSA9PiB7XG4gIGNvbnN0IGxvZ29QYXRoID0gbG9nb1xuICAgID8gYCR7dmlzc25lLmltYWdlc1NlY3VyZUJhc2VVcmx9L3c5Mi8ke2xvZ299YFxuICAgIDogYCR7dmlzc25lLmNkbn0vaW1hZ2VzL3BsYWNlaG9sZGVyLnBuZ2A7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhIG1iLTJcIj5cbiAgICAgIDxpbWcgY2xhc3NOYW1lPVwibXItMyBjb21wYW55LWxvZ29cIiBzcmM9e2xvZ29QYXRofSBhbHQ9e25hbWV9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT1cIm10LTBcIj57bmFtZX08L2g2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Db21wYW55LmRlZmF1bHRQcm9wcyA9IHtcbiAgbG9nbzogJycsXG4gIG5hbWU6ICdDb21wYW55Jyxcbn07XG5cbkNvbXBhbnkucHJvcFR5cGVzID0gQ29tcGFueVNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDb21wYW55O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENvbXBhbnlTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ29tcGFueSBmcm9tICcuLi9Db21wYW55JztcbmltcG9ydCAnLi9Db21wYW55TGlzdC5zY3NzJztcblxuY29uc3QgQ29tcGFueUxpc3QgPSAoeyBjb21wYW5pZXMgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgbWItMlwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNvbXBhbmllczwvaDU+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMlwiPlxuICAgICAgICB7Y29tcGFuaWVzLm1hcChjID0+IChcbiAgICAgICAgICA8Q29tcGFueSBrZXk9e2MuaWR9IGxvZ289e2MubG9nb19wYXRofSBuYW1lPXtjLm5hbWV9IC8+XG4gICAgICAgICkpfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuQ29tcGFueUxpc3QucHJvcFR5cGVzID0ge1xuICBjb21wYW5pZXM6IFByb3BUeXBlcy5hcnJheU9mKENvbXBhbnlTaGFwZSkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBhbnlMaXN0O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmNvbnN0IERldGFpbFRhYmxlID0gKHsgbW92aWUgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj57YCR7bW92aWUub3JnaW5hbFRpdGxlfSAoJHttb3ZpZS55ZWFyfSlgfTwvaDU+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidGFibGUgdGFibGUtc3RyaXBlZCB0YWJsZS1yZXNwb25zaXZlLXNtIHRhYmxlLXJlc3BvbnNpdmUteHNcIj5cbiAgICAgICAgPHRib2R5PlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SYXRpbmc8L3RoPlxuICAgICAgICAgICAgPHRkPntgJHttb3ZpZS52b3RlX2F2ZXJhZ2V9ICgke21vdmllLnZvdGVfY291bnR9KWB9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5SZWxlYXNlIERhdGU8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5yZWxlYXNlX2RhdGV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5HZW5yZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5nZW5yZU5hbWVzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGg+VGFnbGluZTwvdGg+XG4gICAgICAgICAgICA8dGQ+e21vdmllLnRhZ2xpbmV9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Db3VudHJpZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5jb3VudHJpZXN9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5MYW5ndWFnZXM8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS5sYW5ndWFnZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRoPkRpcmVjdG9yPC90aD5cbiAgICAgICAgICAgIDx0ZD57bW92aWUuZGlyZWN0b3J9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Xcml0ZXI8L3RoPlxuICAgICAgICAgICAgPHRkPnttb3ZpZS53cml0ZXJ9PC90ZD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Ib21lcGFnZTwvdGg+XG4gICAgICAgICAgICA8dGQ+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e21vdmllLmhvbWVwYWdlfSByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCI+e21vdmllLmhvbWVwYWdlfTwvYT5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuRGV0YWlsVGFibGUucHJvcFR5cGVzID0ge1xuICBtb3ZpZTogTW92aWVTaGFwZS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRGV0YWlsVGFibGU7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgTWVudSA9ICh7IHBhdGgsIGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG0gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17bS5wYXRofT5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7bS5wYXRoID09PSBwYXRoID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICB0bz17bS5wYXRofVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e20uaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttLm5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9Nb2RhbC5zY3NzJztcblxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGNhbmNlbCxcbiAgICBzdWJtaXQsXG4gICAgY2hpbGRyZW4sXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IHNob3cgPyAnc2hvdyBkLWJsb2NrJyA6ICcnO1xuICBjb25zdCBzdWJtaXRCdXR0b24gPSBzdWJtaXRcbiAgICA/IDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tcHJpbWFyeVwiIG9uQ2xpY2s9e3N1Ym1pdH0+U2F2ZTwvYnV0dG9uPlxuICAgIDogbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9kYWwgZmFkZSAke2NsYXNzTmFtZX1gfSB0YWJJbmRleD1cIi0xXCIgcm9sZT1cImRpYWxvZ1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGRhdGEtYmFja2Ryb3A+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWRpYWxvZyBtb2RhbC1kaWFsb2ctc2Nyb2xsYWJsZVwiIHJvbGU9XCJkaWFsb2dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1oZWFkZXJcIj5cbiAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJtb2RhbC10aXRsZVwiPnt0aXRsZX08L2g1PlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9e2NhbmNlbH0+XG4gICAgICAgICAgICAgIDxzcGFuIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZ0aW1lczs8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWJvZHlcIj5cbiAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWZvb3RlclwiPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1zZWNvbmRhcnlcIiBkYXRhLWRpc21pc3M9XCJtb2RhbFwiIG9uQ2xpY2s9e2NhbmNlbH0+Q2xvc2U8L2J1dHRvbj5cbiAgICAgICAgICAgIHtzdWJtaXRCdXR0b259XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxufTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9zdGVyIGZyb20gJy4uL1Bvc3Rlcic7XG5pbXBvcnQgJy4vTW92aWVDYXJkLnNjc3MnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGltYWdlLFxuICAgIHJhdGUsXG4gICAgc2x1ZyxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jYXJkIGgtMTAwIHctMTAwIHJvdW5kZWQtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgaW1nLXRodW1ibmFpbFwiPlxuICAgICAgPExpbmsgdG89e2Btb3ZpZS8ke3NsdWd9LyR7aWR9YH0gY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgcmF0aW5nLXRhZyBzaGFkb3ctc20gZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAge3JhdGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFBvc3RlciBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmF0ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IHtcbiAgY29uc3QgbGlzdCA9IG1vdmllcy5tYXAobW92aWUgPT4gKFxuICAgIDxkaXYga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0yIG1iLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxNb3ZpZUNhcmRcbiAgICAgICAgaWQ9e21vdmllLmlkfVxuICAgICAgICBpbWFnZT17bW92aWUucG9zdGVyfVxuICAgICAgICB0aXRsZT17bW92aWUudGl0bGV9XG4gICAgICAgIHJhdGU9e21vdmllLnZvdGVBdmVyYWdlfVxuICAgICAgICBzbHVnPXttb3ZpZS5zbHVnfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAge2xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCAnLi9OYXZiYXIuc2Nzcyc7XG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBpc0xvZ2dlZEluLFxuICAgIHBhdGhOYW1lLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbG9naW5CdXR0b24gPSBpc0xvZ2dlZEluID8gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9wcm9maWxlL2FjY291bnRcIiB0aXRsZT1cIlByb2ZpbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+e3VzZXIudXNlck5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dvdXRcIiB0aXRsZT1cIkxvZ291dFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ24tb3V0LWFsdFwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC9GcmFnbWVudD5cbiAgKSA6IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgIDxMaW5rIHRvPVwiL2F1dGhcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPmxvZ2luPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfVxuICAgICAgICAgIGFsdD1cIlZpc3NuZVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZC1ibG9ja1wiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgaWQ9XCJmaWx0ZXJCdXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmlsdGVyXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2luLXRoZWF0ZXJzJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvaW4tdGhlYXRlcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBpbiB0aGVhdGVyc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2NvbWluZy1zb29uJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvY29taW5nLXNvb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBjb21pbmcgc29vbmdcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteS1hdXRvXCI+XG4gICAgICAgICAge2xvZ2luQnV0dG9ufVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5OYXZiYXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgdXNlcjoge30sXG4gIHBhdGhOYW1lOiAnLycsXG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBwYXRoTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Ob3RGb3VuZC5zY3NzJztcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ub3QtZm91bmRcIj5cbiAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL29uZy5wbmdgfSBhbHQ9XCI0MDRcIiAvPlxuICAgIDxoND40MDQ8L2g0PlxuICAgIDxoNT5QYWdlIG5vdCBmb3VuZDwvaDU+XG4gICAgPHA+XG4gICAgICBXZSBhcmUgc29ycnkuIFRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3Igd2FzIG1vdmVkLCByZW1vdmVkLCByZW5hbWVkIG9yIG1pZ2h0IG5ldmVyIGV4aXN0ZWQuXG4gICAgPC9wPlxuICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5HTyBUTyBIT01FPC9hPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbmNvbnN0IFBhZ2VMb2FkaW5nID0gKHsgc2hvdyB9KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWZpeGVkIHRvcC0wIGxlZnQtMCBib3R0b20tMCBiZy1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgIDxTcGlubmVyIHNob3cgc2l6ZT1cImxnXCIgYWRkaW9uYWxDbGFzcz1cIm1yLTJcIiAvPlxuICAgICAgTG9hZGluZy4uLlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFnZUxvYWRpbmcucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKHBhZ2UsIGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG5cbiAgaWYgKE51bWJlci5pc0ludGVnZXIocGFnZSkpIHtcbiAgICByZXR1cm4geyBwYWdlIH07XG4gIH1cblxuICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XG4gICAgY29uc3QgbmV3UGFnZSA9IChjdXJyZW50UGFnZSAtIDEpO1xuICAgIHJlc3VsdCA9IG5ld1BhZ2UgPT09IDAgPyAxIDogbmV3UGFnZTtcbiAgfSBlbHNlIGlmIChwYWdlID09PSAnbmV4dCcpIHtcbiAgICByZXN1bHQgPSAoKGN1cnJlbnRQYWdlICsgMSkgPiB0b3RhbFBhZ2UpXG4gICAgICA/IHRvdGFsUGFnZVxuICAgICAgOiAoY3VycmVudFBhZ2UgKyAxKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2U6IHJlc3VsdCB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlTnVtYmVycyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIGJ1dHRvbkNvdW50LFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5mbG9vcih0b3RhbCAvIGxpbWl0KTtcbiAgY29uc3QgYmMgPSBNYXRoLmNlaWwoYnV0dG9uQ291bnQgLyAyKTtcblxuICBmb3IgKGxldCBpID0gKHBhZ2UgLSAoYmMgLSAxKSk7IGkgPCAocGFnZSArIGJjKTsgaSArPSAxKSB7XG4gICAgaWYgKGkgPiAwICYmIGkgPD0gdG90YWxQYWdlKSB7XG4gICAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWdlTnVtYmVycztcbn07XG5cblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IG9wdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7IHBhZ2UsIG9uUGFnaW5hdGUsIGxpbWl0LCB0b3RhbCB9ID0gb3B0aW9ucztcblxuICBjb25zdCBwYWdlTnVtYmVycyA9IGdlbmVyYXRlUGFnZU51bWJlcnMob3B0aW9ucyk7XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XG5cbiAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gPHNwYW4gLz47XG4gIH1cblxuICBjb25zdCBwYWdlQnV0dG9ucyA9IHBhZ2VOdW1iZXJzLm1hcChwbiA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAgJHtwbiA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gKHBuICE9PSBwYWdlID8gb25QYWdpbmF0ZShoYW5kbGVDbGljayhwbikpIDogJycpfVxuICAgICAgPlxuICAgICAgICB7cG59XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSAxID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKCdwcmV2JywgcGFnZSkpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlQnV0dG9uc31cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPT09IHRvdGFsUGFnZSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygnbmV4dCcsIHBhZ2UpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBidXR0b25Db3VudDogMyxcbiAgICB0b3RhbDogMCxcbiAgICBwYWdlOiAxLFxuICAgIGxpbWl0OiAxMCxcbiAgfSxcbn07XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25QYWdpbmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYnV0dG9uQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5cbmNvbnN0IFBvc3RlciA9ICh7IHNyYywgYWx0IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoLTEwMCB3LTEwMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICA8aW1nXG4gICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWQgbGF6eVwiXG4gICAgICBzcmM9e2Ake3Zpc3NuZS5jZG59LyR7dmlzc25lLmRlZmF1bHRDb3ZlckltYWdlUGF0aH1gfVxuICAgICAgZGF0YS1zcmM9e3NyY31cbiAgICAgIGFsdD17YWx0fVxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuUG9zdGVyLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuL1BhZ2VMb2FkaW5nJztcbmltcG9ydCBwcm9maWxlTWVudSBmcm9tICcuLi9jb25zdGFudHMvcHJvZmlsZS1tZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBwYXRoLCBwYWdlTG9hZGluZywgdXNlciB9ID0gcHJvcHM7XG5cbiAgaWYgKHBhZ2VMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxQYWdlTG9hZGluZyBzaG93IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgcm91bmRlZC1jaXJjbGUgYXZhdGFyLWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyIHx8IGAke3Zpc3NuZS5jZG59L3Vjb250ZW50L2F2YXRhci9kZWZhdWx0LWF2YXRhci5qcGdgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZSBib3JkZXIgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDU+e2BAJHt1c2VyLnVzZXJOYW1lfWB9PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZW51IGl0ZW1zPXtwcm9maWxlTWVudX0gcGF0aD17cGF0aH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2hvdywgaGVpZ2h0IH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIHN0eWxlPXt7IGhlaWdodDogYCR7aGVpZ2h0fXB4YCB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZFwiXG4gICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgIGFyaWEtdmFsdWVub3c9XCI3NVwiXG4gICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBoZWlnaHQ6IDIsXG59O1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzaG93LFxuICAgIHNpemUsXG4gICAga2luZCxcbiAgICBjb2xvcixcbiAgICBhZGRpb25hbENsYXNzLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc3Bpbm5lci0ke2tpbmR9IHNwaW5uZXItJHtraW5kfS0ke3NpemV9IHRleHQtJHtjb2xvcn0gJHthZGRpb25hbENsYXNzfWB9IHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIHNpemU6ICdzbScsXG4gIGtpbmQ6ICdncm93JyxcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgYWRkaW9uYWxDbGFzczogJycsXG59O1xuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGFkZGlvbmFsQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NtJyxcbiAgICAnbWQnLFxuICAgICdsZycsXG4gICAgJ3hsJyxcbiAgXSksXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JvcmRlcicsXG4gICAgJ2dyb3cnLFxuICBdKSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICdzdWNjZXNzJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2luZm8nLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICBdKSxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL1BhZ2luYXRpb24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL0FsZXJ0JztcbmltcG9ydCAnLi9UYWJsZUxpc3Quc2Nzcyc7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChmaWVsZHMpID0+IHtcbiAgY29uc3QgdmlzaWJsZUZpZWxkcyA9IGZpZWxkc1xuICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRkZW4pXG4gICAgLm1hcChmID0+IDx0aCBzY29wZT1cImNvbFwiPntmLnRpdGxlfTwvdGg+KTtcblxuICByZXR1cm4gPHRyPnt2aXNpYmxlRmllbGRzfTwvdHI+O1xufTtcblxuY29uc3QgY3JlYXRlQm9keSA9IChkYXRhLCBmaWVsZHMsIHNlbGVjdGVkLCBvblNlbGVjdCkgPT4ge1xuICBjb25zdCB0Ym9keSA9IFtdO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1GaWVsZHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdiA9IGl0ZW1bZmllbGQubmFtZV07XG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLmZvcm1hdFxuICAgICAgICA/IGZpZWxkLmZvcm1hdCh2KVxuICAgICAgICA6IHYudG9TdHJpbmcoKTtcblxuICAgICAgaXRlbUZpZWxkcy5wdXNoKDx0ZD57dmFsdWV9PC90ZD4pO1xuICAgIH0pO1xuXG4gICAgdGJvZHkucHVzaChcbiAgICAgIDx0ciBjbGFzc05hbWU9e2Ake2l0ZW0uaWQgPT09IHNlbGVjdGVkLmlkID8gJ3NlbGVjdGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KGl0ZW0pfT5cbiAgICAgICAge2l0ZW1GaWVsZHN9XG4gICAgICA8L3RyPixcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGJvZHk7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdpbmF0aW9uID0gKG9wdGlvbnMsIGRhdGFMZW5ndGgpID0+IHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8UGFnaW5hdGlvbiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPHNwYW4+e2BTaG93ICR7ZGF0YUxlbmd0aH0gcmVzdWx0IG9mICR7b3B0aW9ucy50b3RhbH1gfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdGl0bGUsXG4gICAgZGF0YSxcbiAgICBzZWxlY3RlZCxcbiAgICBmaWVsZHMsXG4gICAgcGFnaW5hdGlvbixcbiAgICByZXNwb25zaXZlLFxuICAgIG9uQ3JlYXRlLFxuICAgIG9uRWRpdCxcbiAgICBvbkRlbGV0ZSxcbiAgICBvblNlbGVjdCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGJ0bkdyb3VwID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYnRuLWdyb3VwIHctMTAwICR7KCFvbkNyZWF0ZSAmJiAhb25FZGl0ICYmICFvbkRlbGV0ZSkgPyAnZC1ub25lJyA6ICcnfWB9IHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJjcnVkXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25DcmVhdGUgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uQ3JlYXRlfVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJwbHVzLXNxdWFyZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5DcmVhdGU8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMCBidG4tc20gJHtvbkVkaXQgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uRWRpdH1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZWRpdFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5FZGl0PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25EZWxldGUgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0cmFzaFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5EZWxldGU8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxBbGVydCBtZXNzYWdlPVwiVGhlcmUgd2VyZSBubyByZXN1bHQuXCIga2luZD1cIndhcm5pbmdcIiAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGV9IGNsYXNzTmFtZT17YGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHctMTAwICR7b25DcmVhdGUgPyAnJyA6ICdkLW5vbmUnfWB9IHR5cGU9XCJidXR0b25cIj5cbiAgICAgICAgICAgIEFkZFxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cblxuICBjb25zdCBoZWFkcyA9IGNyZWF0ZUhlYWRlcihmaWVsZHMpO1xuICBjb25zdCBib2R5ID0gY3JlYXRlQm9keShkYXRhLCBmaWVsZHMsIHNlbGVjdGVkLCBvblNlbGVjdCk7XG4gIGNvbnN0IHBhZ2luYXRpb25CdXR0b25zID0gY3JlYXRlUGFnaW5hdGlvbihwYWdpbmF0aW9uLCBkYXRhLmxlbmd0aCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtdC0yXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICA8aDQ+e3RpdGxlfTwvaDQ+XG4gICAgICAgIHtidG5Hcm91cH1cbiAgICAgICAgPHRhYmxlIGNsYXNzTmFtZT17YHRhYmxlIHYtdGFibGUgJHtyZXNwb25zaXZlID8gJ3RhYmxlLXJlc3BvbnNpdmUnIDogJyd9YH0+XG4gICAgICAgICAgPHRoZWFkPlxuICAgICAgICAgICAge2hlYWRzfVxuICAgICAgICAgIDwvdGhlYWQ+XG4gICAgICAgICAgPHRib2R5PlxuICAgICAgICAgICAge2JvZHl9XG4gICAgICAgICAgPC90Ym9keT5cbiAgICAgICAgPC90YWJsZT5cbiAgICAgICAge3BhZ2luYXRpb25CdXR0b25zfVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5UYWJsZUxpc3QuZGVmYXVsdFByb3BzID0ge1xuICBkYXRhOiBbXSxcbiAgc2VsZWN0ZWQ6IHt9LFxuICBmaWVsZHM6IFtdLFxufTtcblxuVGFibGVMaXN0LnByb3BUeXBlcyA9IHtcbiAgZGF0YTogUHJvcFR5cGVzLmluc3RhbmNlT2YoQXJyYXkpLFxuICBzZWxlY3RlZDogUHJvcFR5cGVzLmluc3RhbmNlT2YoT2JqZWN0KSxcbiAgZmllbGRzOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUxpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0ICcuL1ZpZGVvLnNjc3MnO1xuXG5jb25zdCBWaWRlbyA9ICh7IHZpZGVvS2V5IH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlbyBtYi0yIGVtYmVkLXJlc3BvbnNpdmUgZW1iZWQtcmVzcG9uc2l2ZS0xNmJ5OVwiPlxuICAgIDxpZnJhbWVcbiAgICAgIGNsYXNzTmFtZT1cImVtYmVkLXJlc3BvbnNpdmUtaXRlbVwiXG4gICAgICB0aXRsZT1cIlZpZGVvXCJcbiAgICAgIHR5cGU9XCJ0ZXh0L2h0bWxcIlxuICAgICAgd2lkdGg9XCI2NDBcIlxuICAgICAgaGVpZ2h0PVwiMzYwXCJcbiAgICAgIHNyYz17YGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dmlkZW9LZXl9P2F1dG9wbGF5PTAmb3JpZ2luPSR7dmlzc25lLmRvbWFpbn1gfVxuICAgICAgZnJhbWVCb3JkZXI9XCIwXCJcbiAgICAgIGFsbG93RnVsbFNjcmVlblxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuVmlkZW8ucHJvcFR5cGVzID0ge1xuICB2aWRlb0tleTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iLCIvLyBjb21tb25cbmV4cG9ydCBjb25zdCBMT0FESU5HID0gJ0xPQURJTkcnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9BTEVSVCA9ICdUT0dHTEVfQUxFUlQnO1xuZXhwb3J0IGNvbnN0IFRPR0dMRV9GSUxURVIgPSAnVE9HR0xFX0ZJTFRFUic7XG5cbi8vIGF1dGhcbmV4cG9ydCBjb25zdCBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyA9ICdTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyc7XG5leHBvcnQgY29uc3QgU0VUX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9MT0FESU5HX1NUQVRVUyc7XG5leHBvcnQgY29uc3QgUkVHSVNURVIgPSAnUkVHSVNURVInO1xuZXhwb3J0IGNvbnN0IFNFVF9VU0VSID0gJ1NFVF9VU0VSJztcblxuLy8gZGlzY292ZXJcbmV4cG9ydCBjb25zdCBHRVRfTU9WSUVTID0gJ0dFVF9NT1ZJRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9NT1ZJRVMgPSAnU0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX0dFTlJFUyA9ICdTRVRfR0VOUkVTJztcbmV4cG9ydCBjb25zdCBTRVRfUVVFUlkgPSAnU0VUX1FVRVJZJztcblxuLy8gbGlzdHNcbmV4cG9ydCBjb25zdCBHRVRfTElTVFNfQllfQ1VSUkVOVF9VU0VSID0gJ0dFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVInO1xuZXhwb3J0IGNvbnN0IENSRUFURV9MSVNUID0gJ0NSRUFURV9MSVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfTElTVCA9ICdERUxFVEVfTElTVFMnO1xuZXhwb3J0IGNvbnN0IEFERF9UT19MSVNUID0gJ0FERF9UT19MSVNUJztcbmV4cG9ydCBjb25zdCBERUxFVEVfRlJPTV9MSVNUID0gJ0RFTEVURV9GUk9NX0xJU1QnO1xuZXhwb3J0IGNvbnN0IFNFVF9MSVNUUyA9ICdTRVRfTElTVFMnO1xuZXhwb3J0IGNvbnN0IFNFVF9MSVNUX01PVklFUyA9ICdTRVRfTElTVF9NT1ZJRVMnO1xuXG4vLyBtb3ZpZSBkZXRhaWxcbmV4cG9ydCBjb25zdCBTRVRfTU9WSUVfREVUQUlMID0gJ1NFVF9NT1ZJRV9ERVRBSUwnO1xuXG4vLyBwcm9maWxlXG4vLyAgLS0gQWNjb3VudFxuZXhwb3J0IGNvbnN0IFNFVF9BQ0NPVU5UX0RFVEFJTCA9ICdTRVRfQUNDT1VOVF9ERVRBSUwnO1xuZXhwb3J0IGNvbnN0IFNFVF9VUExPQURFRF9JTUFHRSA9ICdTRVRfVVBMT0FERURfSU1BR0UnO1xuXG4vLyBjb25zdGFudHNcbmV4cG9ydCBjb25zdCBTT1JUX09QVElPTlMgPSBbe1xuICBuYW1lOiAnUG9wdWxhcml0eScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZWxlYXNlIERhdGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnUmV2ZW51ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdQcmltYXJ5IFJlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdPcmdpbmFsIFRpdGxlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQXZlcmFnZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdWb3RlIENvdW50JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn1dO1xuIiwiY29uc3QgcHJvZmlsZU1lbnUgPSBbXG4gIHtcbiAgICBuYW1lOiAnQWNjb3VudCcsXG4gICAgaWNvbjogJ3VzZXInLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9hY2NvdW50JyxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdMaXN0cycsXG4gICAgaWNvbjogJ2xpc3QnLFxuICAgIHBhdGg6ICcvcHJvZmlsZS9saXN0cycsXG4gIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnRmF2b3JpdGVzJyxcbiAgLy8gICBpY29uOiAnaGVhcnQnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9mYXZvcml0ZXMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ0NvbW1lbnRzJyxcbiAgLy8gICBpY29uOiAnY29tbWVudCcsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2NvbW1lbnRzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdSZXZpZXdzJyxcbiAgLy8gICBpY29uOiAnbmV3c3BhcGVyJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvcmV2aWV3cycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnRnJpZW5kcycsXG4gIC8vICAgaWNvbjogJ3VzZXItZnJpZW5kcycsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2ZyaWVuZHMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ1NldHRpbmdzJyxcbiAgLy8gICBpY29uOiAnY29nJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvc2V0dGluZ3MnLFxuICAvLyB9LFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgcHJvZmlsZU1lbnU7XG4iLCJpbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgVXNlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGZpcnN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFzdE5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGVtYWlsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBmdWxsTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgYXZhdGFyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB1c2VyTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgTW92aWVTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHRpdGxlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvcmdpbmFsVGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHllYXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHZvdGVfY291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIHZvdGVfYXZlcmFnZTogUHJvcFR5cGVzLm51bWJlcixcbiAgcmVsZWFzZV9kYXRlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBnZW5yZU5hbWVzOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBob21lcGFnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdGFnbGluZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFuZ3VhZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IENhc3RTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLmlzUmVxdWlyZWQsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgY2hhcmFjdGVyOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIHByb2ZpbGVQYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IENvbXBhbnlTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIGlkOiBQcm9wVHlwZXMubnVtYmVyLFxuICBsb2dvOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBHZW5yZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBtYXRjaFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufSk7XG5cbmV4cG9ydCBjb25zdCBGaWx0ZXJTaGFwZSA9IFByb3BUeXBlcy5zaGFwZSh7XG4gIHNvcnQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNlYXJjaFRleHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlczogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICBjcmV3czogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2Yuc3RyaW5nLFxuICB2b3RlQXZlcmFnZTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbiAgcmVsZWFzZVllYXI6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgbHRlOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGd0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgfSksXG59KTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgUHJvZmlsZUNvbnRhaW5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXInO1xuaW1wb3J0IHsgVXNlclNoYXBlLCBtYXRjaFNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBTcGlubmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvU3Bpbm5lcic7XG5pbXBvcnQgJy4vQWNjb3VudC5zY3NzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgcHJvcHMuc2V0UGFnZUxvYWRpbmdTdGF0dXModHJ1ZSk7XG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZWRpdE1vZGU6IGZhbHNlLFxuICAgICAgdXNlckZvcm06IHt9LFxuICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICB1c2VyTmFtZToge30sXG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgb2xkUGFzc3dvcmQ6IHt9LFxuICAgICAgICBuZXdQYXNzd29yZDoge30sXG4gICAgICAgIGNvbmZpcm1OZXdQYXNzd29yZDoge30sXG4gICAgICAgIGZpcnN0TmFtZToge30sXG4gICAgICAgIGxhc3ROYW1lOiB7fSxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNoYW5nZVBhc3N3b3JkID0gdGhpcy5jaGFuZ2VQYXNzd29yZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRBY2NvdW50RGV0YWlsIH0gPSB0aGlzLnByb3BzO1xuICAgIGdldEFjY291bnREZXRhaWwoKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9LCBmaWVsZCkge1xuICAgIGNvbnN0IHsgdmFsdWUsIG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IHN0YXRlIH0gPSB0aGlzO1xuICAgIHN0YXRlW2ZpZWxkXVtuYW1lXSA9IHZhbHVlO1xuICAgIHRoaXMuc3RhdGUgPSBzdGF0ZTtcbiAgICB0aGlzLmZvcmNlVXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VQYXNzd29yZCgpIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHsgdG9nZ2xlQWxlcnREaWFsb2csIGNoYW5nZVBhc3N3b3JkIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgaWYgKHBhc3N3b3JkLm5ld1Bhc3N3b3JkICE9PSBwYXNzd29yZC5jb25maXJtTmV3UGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmRzIGRvblxcJ3QgbWF0Y2guJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChwYXNzd29yZC5vbGRQYXNzd29yZCA9PT0gcGFzc3dvcmQubmV3UGFzc3dvcmQpIHtcbiAgICAgIHJldHVybiB0b2dnbGVBbGVydERpYWxvZyh7XG4gICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICBtZXNzYWdlOiAnUGFzc3dvcmQgY2Fubm90IGJlIHRoZSBzYW1lIHdpdGggb2xkIHBhc3N3b3JkLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGFuZ2VQYXNzd29yZChwYXNzd29yZCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiB7fSB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtYXRjaCxcbiAgICAgIHVzZXIsXG4gICAgICBsb2FkaW5nLFxuICAgICAgcGFnZUxvYWRpbmcsXG4gICAgICB1cGRhdGVVc2VyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgdXNlckZvcm0sIHZhbGlkYXRpb24sIHBhc3N3b3JkIH0gPSB0aGlzLnN0YXRlO1xuXG4gICAgaWYgKHVzZXIgJiYgdXNlci5pZCAmJiAhdXNlckZvcm0uaWQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyRm9ybTogdXNlciB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxQcm9maWxlQ29udGFpbmVyIHVzZXI9e3VzZXJ9IHBhdGg9e21hdGNoLnBhdGh9IHBhZ2VMb2FkaW5nPXtwYWdlTG9hZGluZ30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sIG0tNFwiPlxuICAgICAgICAgICAgICA8aDQ+QWNjb3VudDwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJ1c2VyTmFtZUlucHV0XCI+VXNlciBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24udXNlck5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLnVzZXJOYW1lfVxuICAgICAgICAgICAgICAgICAgICBpZD1cInVzZXJOYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi51c2VyTmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lSW5wdXRcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0uZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImZpcnN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZmlyc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+TGFzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ubGFzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmxhc3ROYW1lfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5sYXN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmVtYWlsLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3VzZXJGb3JtJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uZW1haWwuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gdXBkYXRlVXNlcih1c2VyRm9ybSl9XG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8U3Bpbm5lciBzaG93PXtsb2FkaW5nfSBraW5kPVwiYm9yZGVyXCIgY29sb3I9XCJzdWNjZXNzXCIgLz5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT17bG9hZGluZyA/ICdkLW5vbmUnIDogJ2QtYmxvY2snfT5VcGRhdGU8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5DaGFuZ2UgUGFzc3dvcmQ8L2g0PlxuICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwib2xkUGFzc3dvcmRJbnB1dFwiPk9sZCBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm9sZFBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5vbGRQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQub2xkUGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwib2xkUGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICdwYXNzd29yZCcpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLm9sZFBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJuZXdQYXNzd29yZElucHV0XCI+TmV3IFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwibmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLm5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5uZXdQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJuZXdQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ubmV3UGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1OZXdQYXNzd29yZElucHV0XCI+Q29uZmlybSBOZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtTmV3UGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLmNvbmZpcm1OZXdQYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmQuY29uZmlybU5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1OZXdQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5jaGFuZ2VQYXNzd29yZH1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICBDaGFuZ2UgUGFzc3dvcmRcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5BY2NvdW50LnByb3BUeXBlcyA9IHtcbiAgdXNlcjogVXNlclNoYXBlLmlzUmVxdWlyZWQsXG4gIG1hdGNoOiBtYXRjaFNoYXBlLmlzUmVxdWlyZWQsXG4gIGdldEFjY291bnREZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHBhZ2VMb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBzZXRQYWdlTG9hZGluZ1N0YXR1czogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdXBkYXRlVXNlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGNoYW5nZVBhc3N3b3JkOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxufTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBBY2NvdW50IGZyb20gJy4vQWNjb3VudCc7XG5pbXBvcnQgeyBnZXRBY2NvdW50RGV0YWlsLCBjaGFuZ2VQYXNzd29yZCwgdXBkYXRlVXNlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYWNjb3VudCc7XG5pbXBvcnQgeyBzZXRQYWdlTG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIHBhZ2VMb2FkaW5nOiBzdGF0ZS5jb21tb24ucGFnZUxvYWRpbmcsXG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1cGxvYWRlZEZpbGU6IHN0YXRlLmNvbW1vbi51cGxvYWRlZEZpbGUsXG4gIHVzZXI6IHN0YXRlLmFjY291bnQudXNlcixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRBY2NvdW50RGV0YWlsOiAoKSA9PiBkaXNwYXRjaChnZXRBY2NvdW50RGV0YWlsKCkpLFxuICBzZXRQYWdlTG9hZGluZ1N0YXR1czogc3RhdHVzID0+IGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKHN0YXR1cykpLFxuICB1cGRhdGVVc2VyOiB1c2VyID0+IGRpc3BhdGNoKHVwZGF0ZVVzZXIodXNlcikpLFxuICBjaGFuZ2VQYXNzd29yZDogcGFzc3dvcmQgPT4gZGlzcGF0Y2goY2hhbmdlUGFzc3dvcmQocGFzc3dvcmQpKSxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IGFsZXJ0ID0+IGRpc3BhdGNoKHRvZ2dsZUFsZXJ0RGlhbG9nKGFsZXJ0KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFjY291bnQpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIHNob3csXG4gICAgbWVzc2FnZSxcbiAgICB0b2dnbGVBbGVydERpYWxvZyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gc2l0ZS1hbGVydCBhbGVydC1kaXNtaXNzaWJsZSBmYWRlIHNob3dgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiY2xvc2VcIiBkYXRhLWRpc21pc3M9XCJhbGVydFwiIGFyaWEtbGFiZWw9XCJDbG9zZVwiIG9uQ2xpY2s9e3RvZ2dsZUFsZXJ0RGlhbG9nfT5cbiAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiBmYWxzZSxcbiAga2luZDogJ2luZm8nLFxuICBtZXNzYWdlOiBudWxsLFxufTtcblxuQWxlcnQucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbCxcbiAgbWVzc2FnZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IEFsZXJ0RGlhbG9nIGZyb20gJy4vQWxlcnREaWFsb2cnO1xuaW1wb3J0ICcuL0FsZXJ0RGlhbG9nLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSAoeyBjb21tb24gfSkgPT4gKHtcbiAgc2hvdzogY29tbW9uLnNob3dBbGVydCxcbiAgbWVzc2FnZTogY29tbW9uLmFsZXJ0TWVzc2FnZSxcbiAga2luZDogY29tbW9uLmFsZXJ0S2luZCxcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICB0b2dnbGVBbGVydERpYWxvZzogKCkgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coeyBzaG93OiBmYWxzZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEFsZXJ0RGlhbG9nKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vLi4vbGliL2Nvb2tpZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEF1dGggZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBmb3JtOiB7fSxcbiAgICAgIHZhbGlkYXRpb246IHtcbiAgICAgICAgdXNlck5hbWU6IHt9LFxuICAgICAgICBlbWFpbDoge30sXG4gICAgICAgIHBhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgICBjb25maXJtUGFzc3dvcmQ6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMudmFsaWRhdGlvbiA9IHRoaXMudmFsaWRhdGlvbi5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc3dpdGNoRm9ybSA9IHRoaXMuc3dpdGNoRm9ybS5iaW5kKHRoaXMpO1xuICAgIHRoaXMubG9naW5SZWdpc3RlciA9IHRoaXMubG9naW5SZWdpc3Rlci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydERpYWxvZyB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBjb29raWUuZ2V0KCdlcnJvck1lc3NhZ2UnKTtcbiAgICBpZiAoZXJyb3JNZXNzYWdlKSB7XG4gICAgICB0b2dnbGVBbGVydERpYWxvZyhlcnJvck1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgZm9ybSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBmb3JtW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGZvcm0gfSk7XG4gIH1cblxuICB2YWxpZGF0aW9uKCkge1xuICAgIGNvbnN0IGVtYWlsSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiZW1haWxcIl0nKTtcbiAgICBjb25zdCB7IHZhbGlkYXRpb24gfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCBpc1ZhbGlkID0gdHJ1ZTtcblxuICAgIGlmICghZm9ybS5lbWFpbCB8fCAhZW1haWxJbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgIHZhbGlkYXRpb24uZW1haWwgPSB7XG4gICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QbGVhc2UgZW50ZXIgYSB2YWxpZCBlbWFpbCBhZGRyZXNzLjwvZGl2PixcbiAgICAgIH07XG4gICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbGlkYXRpb24uZW1haWwgPSB7fTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm0ucGFzc3dvcmQgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPCA2IHx8IGZvcm0ucGFzc3dvcmQubGVuZ3RoID4gMTYpIHtcbiAgICAgIHZhbGlkYXRpb24ucGFzc3dvcmQgPSB7XG4gICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgbXVzdCBiZSA2LTE2IGNoYWNyYWN0ZXIuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHt9O1xuICAgIH1cblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBpZiAoIWZvcm0udXNlck5hbWUgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPCAyIHx8IGZvcm0udXNlck5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi51c2VyTmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5Vc2VyIG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi51c2VyTmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0uZmlyc3ROYW1lIHx8IGZvcm0uZmlyc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi5maXJzdE5hbWUgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+Rmlyc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoIWZvcm0ubGFzdE5hbWUgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPCAyIHx8IGZvcm0ubGFzdE5hbWUubGVuZ3RoID4gNDApIHtcbiAgICAgICAgdmFsaWRhdGlvbi5sYXN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5MYXN0IG5hbWUgbXVzdCBiZSAyLTQwIGNoYXJhY3RlcjwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5sYXN0TmFtZSA9IHt9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZm9ybS5jb25maXJtUGFzc3dvcmQgIT09IGZvcm0ucGFzc3dvcmQpIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7XG4gICAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgICBlcnJvcjogPGRpdiBjbGFzc05hbWU9XCJpbnZhbGlkLWZlZWRiYWNrXCI+UGFzc3dvcmRzIGRvbnQgbWF0Y2g8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkID0ge307XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHZhbGlkYXRpb24gfSk7XG4gICAgcmV0dXJuIGlzVmFsaWQ7XG4gIH1cblxuICBsb2dpblJlZ2lzdGVyKCkge1xuICAgIGNvbnN0IHsgZm9ybSwgaXNSZWdpc3RlciB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy52YWxpZGF0aW9uKGZvcm0pO1xuXG4gICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzO1xuICAgIGNvbnN0IHVybCA9IGlzUmVnaXN0ZXJcbiAgICAgID8gJy9hcGkvcmVnaXN0ZXInXG4gICAgICA6ICcvYXBpL2xvZ2luJztcblxuICAgIHJldHVybiBwcm9wcy5sb2dpblJlZ2lzdGVyKGZvcm0sIHVybCk7XG4gIH1cblxuICBzd2l0Y2hGb3JtKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBpc1JlZ2lzdGVyOiAhcHJldlN0YXRlLmlzUmVnaXN0ZXIsXG4gICAgfSkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIGZvcm0sXG4gICAgICBpc1JlZ2lzdGVyLFxuICAgICAgdmFsaWRhdGlvbixcbiAgICAgIGxvYWRpbmcsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBsZXQgYnV0dG9uVGV4dCA9ICdMT0dJTic7XG4gICAgbGV0IHN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQgPSAnUkVHSVNURVInO1xuICAgIGxldCByZWdpc3RlcklucHV0ID0gbnVsbDtcblxuICAgIGlmIChpc1JlZ2lzdGVyKSB7XG4gICAgICBidXR0b25UZXh0ID0gJ1JFR0lTVEVSJztcbiAgICAgIHN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQgPSAnTE9HSU4nO1xuXG4gICAgICByZWdpc3RlcklucHV0ID0gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbmZpcm1QYXNzd29yZElucHV0XCI+Q29uZmlybSBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJjb25maXJtUGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwia2V5XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmNvbmZpcm1QYXNzd29yZH1cbiAgICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY29uZmlybVBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJjb25maXJtUGFzc3dvcmRBZGRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24uY29uZmlybVBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXByZXBlbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwidXNlck5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImF0XCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VyIE5hbWVcIlxuICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLnVzZXJOYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLnVzZXJOYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImZpcnN0TmFtZUlucHV0XCI+Rmlyc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJmaXJzdE5hbWVcIj5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ25hdHVyZVwiIC8+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIG5hbWU9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJmaXJzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRmlyc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZmlyc3ROYW1lfVxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwibGFzdE5hbWVJbnB1dFwiPlxuICAgICAgICAgICAgICBMYXN0IE5hbWVcbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJsYXN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24ubGFzdE5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICBuYW1lPVwibGFzdE5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJsYXN0TmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5sYXN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LW1kLWNlbnRlclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtOCBjb2wtbGctNiBjb2wteGwtNVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkIGF1dGgtZm9ybVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfSBhbHQ9XCJWaXNzbmVcIiBoZWlnaHQ9XCI3MFwiIGNsYXNzTmFtZT1cIm15LTJcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXt0aGlzLmhhbmRsZVN1Ym1pdH0gaWQ9XCJmb3JtUmVnXCIgY2xhc3NOYW1lPVwiY29sLTEyIHAtMFwiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZW1haWxJbnB1dFwiPkVtYWlsPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImJhc2ljLWFkZG9uMVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJlbnZlbG9wZVwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXtmb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbElucHV0R3JvdXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbnRlciBlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmVtYWlsLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwicGFzc3dvcmRJbnB1dFwiPlBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cInBhc3N3b3JkQWRkb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwidW5sb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0ucGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cInBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicGFzc3dvcmRBZGRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24ucGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnBhc3N3b3JkLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICB7cmVnaXN0ZXJJbnB1dH1cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaEZvcm19XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7c3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kYXJrIGJ0bi1ibG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW5SZWdpc3Rlcn1cbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgc3Bpbm5lci1ncm93IHNwaW5uZXItZ3Jvdy1zbSAke2xvYWRpbmcgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgICAgICAgICAgICAgICAgcm9sZT1cInN0YXR1c1wiXG4gICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tZGVmYXVsdCBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBnb29nbGUgIG10LTJcIlxuICAgICAgICAgICAgICAgICAgaHJlZj1cImF1dGgvZ29vZ2xlXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdnb29nbGUnXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIExPR0lOIFdJVEggR09PR0xFXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWJsb2NrIGJ0bi1kYXJrIGJvcmRlci0wIHNvY2lhbC1idXR0b24gZmFjZWJvb2sgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9mYWNlYm9va1wiXG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwic29jaWFsLWJ1dHRvbi1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj17WydmYWInLCAnZmFjZWJvb2snXX0gLz5cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICAgIExPR0lOIFdJVEggRkFDRUJPT0tcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5BdXRoLnByb3BUeXBlcyA9IHtcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEF1dGggZnJvbSAnLi9BdXRoJztcbmltcG9ydCB7IGxvZ2luUmVnaXN0ZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGgnO1xuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgJy4vQXV0aC5zY3NzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgbG9naW5SZWdpc3RlcjogKGRhdGEsIHVybCkgPT4gZGlzcGF0Y2gobG9naW5SZWdpc3RlcihkYXRhLCB1cmwpKSxcbiAgdG9nZ2xlQWxlcnREaWFsb2c6IG1lc3NhZ2UgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coeyBraW5kOiAnZGFuZ2VyJywgbWVzc2FnZSB9KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKEF1dGgpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTW92aWVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW92aWVMaXN0JztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCBGaWx0ZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9GaWx0ZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5pbXBvcnQge1xuICBVc2VyU2hhcGUsXG4gIE1vdmllU2hhcGUsXG4gIEdlbnJlU2hhcGUsXG4gIEZpbHRlclNoYXBlLFxufSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaXNjb3ZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuXG4gICAgdGhpcy5sb2FkTW92aWVzID0gdGhpcy5sb2FkTW92aWVzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zZXRRdWVyeSA9IHRoaXMuc2V0UXVlcnkuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0R2VucmVzLCB0b2dnbGVGaWx0ZXIsIG1hdGNoIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgcGF0aCB9ID0gbWF0Y2g7XG5cbiAgICBnZXRHZW5yZXMoKTtcblxuICAgIGlmIChbJy9jb21pbmctc29vbicsICcvaW4tdGhlYXRlcnMnXS5pbmRleE9mKHBhdGgpICE9PSAtMSkge1xuICAgICAgdGhpcy5zZXRRdWVyeSh7IGZpZWxkOiAnZmlsdGVyJywgdmFsdWU6IHBhdGgucmVwbGFjZSgnLycsICcnKSB9KTtcbiAgICAgIHRvZ2dsZUZpbHRlcihmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubG9hZE1vdmllcygpO1xuICAgIH1cbiAgfVxuXG4gIHNldFF1ZXJ5KHF1ZXJ5KSB7XG4gICAgY29uc3QgeyBzZXRRdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBzZXRRdWVyeShxdWVyeSkudGhlbih0aGlzLmxvYWRNb3ZpZXMpO1xuICB9XG5cbiAgbG9hZE1vdmllcygpIHtcbiAgICBjb25zdCB7IGdldE1vdmllcywgcXVlcnkgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0TW92aWVzKHF1ZXJ5KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBtb3ZpZXMsXG4gICAgICB1c2VyLFxuICAgICAgaXNMb2dnZWRJbixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBnZW5yZXMsXG4gICAgICBxdWVyeSxcbiAgICAgIGxvY2F0aW9uLFxuICAgICAgc2hvd0ZpbHRlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgaXNMb2dnZWRJbj17aXNMb2dnZWRJbn0gdXNlcj17dXNlcn0gcGF0aE5hbWU9e2xvY2F0aW9uLnBhdGhuYW1lfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZFwiPlxuICAgICAgICAgIDxGaWx0ZXIgc2hvdz17c2hvd0ZpbHRlcn0gZ2VucmVzPXtnZW5yZXN9IHNldFF1ZXJ5PXt0aGlzLnNldFF1ZXJ5fSBxdWVyeT17cXVlcnl9IC8+XG4gICAgICAgICAgPE1vdmllTGlzdCBtb3ZpZXM9e21vdmllc30gaWQ9XCJsaXN0XCIgLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG0tMVwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2FkTW92aWVzfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtYi0yICR7bG9hZGluZyA/ICdkLW5vbmUnIDogJ2QtYmxvY2snfWB9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIExvYWQgTW9yZVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8U3Bpbm5lciBzaG93PXtsb2FkaW5nfSBzaXplPVwibWRcIiAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkRpc2NvdmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG4gIHNob3dGaWx0ZXI6IHRydWUsXG4gIHVzZXI6IHt9LFxufTtcblxuRGlzY292ZXIucHJvcFR5cGVzID0ge1xuICBnZXRNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldEdlbnJlczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHRvZ2dsZUZpbHRlcjogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgbG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG4gIHNob3dGaWx0ZXI6IFByb3BUeXBlcy5ib29sLFxuICB1c2VyOiBVc2VyU2hhcGUsXG4gIG1vdmllczogUHJvcFR5cGVzLmFycmF5T2YoTW92aWVTaGFwZSkuaXNSZXF1aXJlZCxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbn07XG4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9EaXNjb3Zlcic7XG5pbXBvcnQgeyB0b2dnbGVGaWx0ZXIgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQge1xuICBnZXRNb3ZpZXMsXG4gIHNldFF1ZXJ5LFxuICBnZXRHZW5yZXMsXG59IGZyb20gJy4uLy4uL2FjdGlvbnMvZGlzY292ZXInO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuZGlzY292ZXIudXNlcixcbiAgcXVlcnk6IHN0YXRlLmRpc2NvdmVyLnF1ZXJ5LFxuICBpc0xvZ2dlZEluOiBzdGF0ZS5kaXNjb3Zlci5pc0xvZ2dlZEluLFxuICBtb3ZpZXM6IHN0YXRlLmRpc2NvdmVyLm1vdmllcyxcbiAgZ2VucmVzOiBzdGF0ZS5kaXNjb3Zlci5nZW5yZXMsXG4gIHNob3dGaWx0ZXI6IHN0YXRlLmNvbW1vbi5zaG93RmlsdGVyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllczogcXVlcnkgPT4gZGlzcGF0Y2goZ2V0TW92aWVzKHF1ZXJ5KSksXG4gIHNldFF1ZXJ5OiBxdWVyeSA9PiBkaXNwYXRjaChzZXRRdWVyeShxdWVyeSkpLFxuICBnZXRHZW5yZXM6ICgpID0+IGRpc3BhdGNoKGdldEdlbnJlcygpKSxcbiAgdG9nZ2xlRmlsdGVyOiBzaG93ID0+IGRpc3BhdGNoKHRvZ2dsZUZpbHRlcihzaG93KSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKERpc2NvdmVyKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2ZpbGVDb250YWluZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Qcm9maWxlQ29udGFpbmVyJztcbmltcG9ydCBUYWJsZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9UYWJsZUxpc3QnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTW9kYWwnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0cyBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBtb3ZpZVF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgICBsaXN0UXVlcnk6IHtcbiAgICAgICAgcGFnZTogMSxcbiAgICAgICAgbGltaXQ6IDEwLFxuICAgICAgfSxcbiAgICAgIGxpc3Q6IHt9LFxuICAgICAgc2VsZWN0ZWQ6IHt9LFxuICAgICAgc2VsZWN0ZWRNb3ZpZToge30sXG4gICAgICBtb3ZpZVRhYmxlRmllbGRzOiBbe1xuICAgICAgICB0aXRsZTogJ0lkJyxcbiAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ1Bvc3RlcicsXG4gICAgICAgIG5hbWU6ICdwb3N0ZXInLFxuICAgICAgICBmb3JtYXQoc3JjKSB7XG4gICAgICAgICAgcmV0dXJuIDxpbWcgaGVpZ2h0PVwiNzBcIiBzcmM9e3NyY30gYWx0PVwiTGlzdCBNb3ZpZVwiIC8+O1xuICAgICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ1RpdGxlJyxcbiAgICAgICAgbmFtZTogJ3RpdGxlJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdSYXRpbmcnLFxuICAgICAgICBuYW1lOiAncmF0aW5nJyxcbiAgICAgIH1dLFxuICAgICAgbGlzdFRhYmxlRmllbGRzOiBbe1xuICAgICAgICB0aXRsZTogJ0lkJyxcbiAgICAgICAgbmFtZTogJ2lkJyxcbiAgICAgICAgaGlkZGVuOiB0cnVlLFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ05hbWUnLFxuICAgICAgICBuYW1lOiAnbmFtZScsXG4gICAgICB9LCB7XG4gICAgICAgIHRpdGxlOiAnQ3JlYXRlIERhdGUnLFxuICAgICAgICBuYW1lOiAnY3JlYXRlZEF0JyxcbiAgICAgICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgICAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICdWaXNpYmlsaXR5JyxcbiAgICAgICAgbmFtZTogJ3B1YmxpYycsXG4gICAgICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZSA/ICdQdWJsaWMnIDogJ1ByaXZhdGUnO1xuICAgICAgICB9LFxuICAgICAgfSwge1xuICAgICAgICB0aXRsZTogJ01vdmllcycsXG4gICAgICAgIG5hbWU6ICd0b3RhbE1vdmllJyxcbiAgICAgIH0sIHtcbiAgICAgICAgdGl0bGU6ICcnLFxuICAgICAgICBuYW1lOiAnaWQnLFxuICAgICAgICBmb3JtYXQ6IGlkID0+IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ0biBidG4tbGlua1wiIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnNob3dMaXN0TW92aWVzKGlkKX0+XG4gICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImxpc3RcIiAvPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICksXG4gICAgICB9XSxcbiAgICB9O1xuXG4gICAgdGhpcy5zZXRMaXN0UXVlcnkgPSB0aGlzLnNldExpc3RRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuc2V0TW92aWVRdWVyeSA9IHRoaXMuc2V0TW92aWVRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNob3dMaXN0TW92aWVzID0gdGhpcy5zaG93TGlzdE1vdmllcy5iaW5kKHRoaXMpO1xuICAgIHRoaXMuYmFja1RvTGlzdCA9IHRoaXMuYmFja1RvTGlzdC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZGVsZXRlRnJvbUxpc3QgPSB0aGlzLmRlbGV0ZUZyb21MaXN0LmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgdGhpcy5nZXRMaXN0cygpO1xuICAgIGdldEFjY291bnREZXRhaWwoKTtcbiAgfVxuXG4gIHNldExpc3RRdWVyeShsaXN0UXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgbGlzdFF1ZXJ5OiBPYmplY3QuYXNzaWduKHByZXZTdGF0ZS5saXN0UXVlcnksIGxpc3RRdWVyeSksXG4gICAgfSksIHRoaXMuZ2V0TGlzdHMpO1xuICB9XG5cbiAgc2V0TW92aWVRdWVyeShtb3ZpZVF1ZXJ5KSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIG1vdmllUXVlcnk6IE9iamVjdC5hc3NpZ24ocHJldlN0YXRlLm1vdmllUXVlcnksIG1vdmllUXVlcnkpLFxuICAgIH0pLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIGdldExpc3RzKCkge1xuICAgIGNvbnN0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBsaXN0UXVlcnkgfSA9IHRoaXMuc3RhdGU7XG4gICAgZ2V0TGlzdEJ5Q3VycmVudFVzZXIobGlzdFF1ZXJ5KTtcbiAgfVxuXG4gIGdldExpc3RNb3ZpZXMoKSB7XG4gICAgY29uc3QgeyBnZXRMaXN0TW92aWVzIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgbW92aWVRdWVyeSB9ID0gdGhpcy5zdGF0ZTtcbiAgICBpZiAobW92aWVRdWVyeS5saXN0SWQpIHtcbiAgICAgIGdldExpc3RNb3ZpZXMobW92aWVRdWVyeSk7XG4gICAgfVxuICB9XG5cbiAgZGVsZXRlRnJvbUxpc3QoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZE1vdmllLCBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHJlbW92ZUZyb21MaXN0IH0gPSB0aGlzLnByb3BzO1xuICAgIHJlbW92ZUZyb21MaXN0KHtcbiAgICAgIGxpc3RJZDogc2VsZWN0ZWQuaWQsXG4gICAgICBtb3ZpZUlkOiBzZWxlY3RlZE1vdmllLmlkLFxuICAgIH0pO1xuICB9XG5cbiAgYmFja1RvTGlzdCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIHNob3dNb3ZpZXM6IGZhbHNlLFxuICAgICAgc2VsZWN0ZWRNb3ZpZToge30sXG4gICAgICBtb3ZpZVF1ZXJ5OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBzaG93TGlzdE1vdmllcyhsaXN0SWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd01vdmllczogdHJ1ZSxcbiAgICAgIHNlbGVjdGVkOiB7fSxcbiAgICAgIG1vdmllUXVlcnk6IE9iamVjdC5hc3NpZ24ocHJldlN0YXRlLm1vdmllUXVlcnksIHtcbiAgICAgICAgbGlzdElkLFxuICAgICAgfSksXG4gICAgfSksIHRoaXMuZ2V0TGlzdE1vdmllcyk7XG4gIH1cblxuICBkZXN0cm95KCkge1xuICAgIGNvbnN0IHsgZGVsZXRlTGlzdCwgdG9nZ2xlQWxlcnREaWFsb2cgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGlmICghc2VsZWN0ZWQgfHwgIXNlbGVjdGVkLmlkKSB7XG4gICAgICByZXR1cm4gdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICBraW5kOiAnd2FybmluZycsXG4gICAgICAgIG1lc3NhZ2U6ICdObyBzZWxlY3RlZCBkYXRhLicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBkZWxldGVMaXN0KHNlbGVjdGVkLmlkLCB0aGlzLmdldExpc3RzKTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDoge30gfSk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG4gICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICBsaXN0OiBzZWxlY3RlZCxcbiAgICB9LCB0aGlzLnRvZ2dsZU1vZGFsKTtcbiAgfVxuXG4gIHRvZ2dsZU1vZGFsKCkge1xuICAgIHRoaXMuc2V0U3RhdGUocHJldlN0YXRlID0+ICh7XG4gICAgICBzaG93TW9kYWw6ICFwcmV2U3RhdGUuc2hvd01vZGFsLFxuICAgIH0pKTtcbiAgfVxuXG4gIGhhbmRsZUNoYW5nZSh7IHRhcmdldCB9KSB7XG4gICAgY29uc3QgeyBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBsaXN0IH0gPSB0aGlzLnN0YXRlO1xuICAgIGxldCB2YWx1ZSA9IHRhcmdldC5wYXJzZWRWYWx1ZSB8fCB0YXJnZXQudmFsdWU7XG5cbiAgICBpZiAobmFtZSA9PT0gJ3B1YmxpYycpIHtcbiAgICAgIHZhbHVlID0gTnVtYmVyLnBhcnNlSW50KHZhbHVlLCAxMCk7XG4gICAgfVxuXG4gICAgbGlzdFtuYW1lXSA9IHZhbHVlO1xuXG4gICAgdGhpcy5zZXRTdGF0ZSh7IGxpc3QgfSk7XG4gIH1cblxuICBzYXZlKCkge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IHNhdmVMaXN0IH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGlzdC5wdWJsaWMgPSBOdW1iZXIucGFyc2VJbnQobGlzdC5wdWJsaWMsIDEwKTtcblxuICAgIHNhdmVMaXN0KGxpc3QsICgpID0+IHtcbiAgICAgIHRoaXMuZ2V0TGlzdHMoKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0OiB7fSB9KTtcbiAgICAgIHRoaXMudG9nZ2xlTW9kYWwoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7XG4gICAgICBsaXN0UXVlcnksXG4gICAgICBtb3ZpZVF1ZXJ5LFxuICAgICAgc2hvd01vZGFsLFxuICAgICAgbGlzdCxcbiAgICAgIHNlbGVjdGVkLFxuICAgICAgc2VsZWN0ZWRNb3ZpZSxcbiAgICAgIGxpc3RUYWJsZUZpZWxkcyxcbiAgICAgIG1vdmllVGFibGVGaWVsZHMsXG4gICAgICBzaG93TW92aWVzLFxuICAgIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIHBhZ2VMb2FkaW5nLFxuICAgICAgdG90YWxMaXN0LFxuICAgICAgdG90YWxNb3ZpZSxcbiAgICAgIG1vdmllcyxcbiAgICAgIGxpc3RzLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgbGV0IGNvbnRlbnQgPSAoXG4gICAgICA8VGFibGVMaXN0XG4gICAgICAgIGRhdGE9e2xpc3RzfVxuICAgICAgICBvbkNyZWF0ZT17dGhpcy5jcmVhdGV9XG4gICAgICAgIG9uRGVsZXRlPXt0aGlzLmRlc3Ryb3l9XG4gICAgICAgIG9uRWRpdD17dGhpcy51cGRhdGV9XG4gICAgICAgIG9uU2VsZWN0PXtzID0+IHRoaXMuc2V0U3RhdGUoeyBzZWxlY3RlZDogcyB9KX1cbiAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICBmaWVsZHM9e2xpc3RUYWJsZUZpZWxkc31cbiAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgIHRvdGFsOiB0b3RhbExpc3QsXG4gICAgICAgICAgcGFnZTogbGlzdFF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgbGltaXQ6IGxpc3RRdWVyeS5saW1pdCxcbiAgICAgICAgICBidXR0b25Db3VudDogNSxcbiAgICAgICAgICBvblBhZ2luYXRlOiB0aGlzLnNldExpc3RRdWVyeSxcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKTtcblxuICAgIGlmIChzaG93TW92aWVzKSB7XG4gICAgICBjb250ZW50ID0gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW4gbXQtMlwiPlxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZm9udFNpemU6ICcyNnB4JywgZm9udFdlaWdodDogJ2JvbGQnIH19Pk1vdmllczwvc3Bhbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzTmFtZT1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHJvdW5kZWQtMFwiIG9uQ2xpY2s9e3RoaXMuYmFja1RvTGlzdH0+QmFjayBUbyBMaXN0PC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPFRhYmxlTGlzdFxuICAgICAgICAgICAgZGF0YT17bW92aWVzfVxuICAgICAgICAgICAgb25EZWxldGU9e3RoaXMuZGVsZXRlRnJvbUxpc3R9XG4gICAgICAgICAgICBvblNlbGVjdD17cyA9PiB0aGlzLnNldFN0YXRlKHsgc2VsZWN0ZWRNb3ZpZTogcyB9KX1cbiAgICAgICAgICAgIHNlbGVjdGVkPXtzZWxlY3RlZE1vdmllfVxuICAgICAgICAgICAgZmllbGRzPXttb3ZpZVRhYmxlRmllbGRzfVxuICAgICAgICAgICAgcGFnaW5hdGlvbj17e1xuICAgICAgICAgICAgICB0b3RhbDogdG90YWxNb3ZpZSxcbiAgICAgICAgICAgICAgcGFnZTogbW92aWVRdWVyeS5wYWdlLFxuICAgICAgICAgICAgICBsaW1pdDogbW92aWVRdWVyeS5saW1pdCxcbiAgICAgICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgICAgIG9uUGFnaW5hdGU6IHRoaXMuc2V0TGlzdFF1ZXJ5LFxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0ZyYWdtZW50PlxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxQcm9maWxlQ29udGFpbmVyIHVzZXI9e3VzZXJ9IHBhdGg9e21hdGNoLnBhdGh9IHBhZ2VMb2FkaW5nPXtwYWdlTG9hZGluZ30+XG4gICAgICAgICAge2NvbnRlbnR9XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gdGl0bGU9XCJDcmVhdGUgTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVNb2RhbH0gc3VibWl0PXt0aGlzLnNhdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPkxpc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGlzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpc3QubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwiMVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtsaXN0LnB1YmxpY31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICBQdWJsaWMgTGlzdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCIwXCJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9eyFsaXN0LnB1YmxpY31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICBQcml2YXRlIExpc3RcbiAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L01vZGFsPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkxpc3RzLmRlZmF1bHRQcm9wcyA9IHtcbiAgdG90YWxMaXN0OiAwLFxuICB0b3RhbE1vdmllOiAwLFxufTtcblxuTGlzdHMucHJvcFR5cGVzID0ge1xuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldEFjY291bnREZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RNb3ZpZXM6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGRlbGV0ZUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVMaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdG90YWxMaXN0OiBQcm9wVHlwZXMubnVtYmVyLFxuICB0b3RhbE1vdmllOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBMaXN0cyBmcm9tICcuL0xpc3RzJztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2FjY291bnQnO1xuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQge1xuICBnZXRMaXN0QnlDdXJyZW50VXNlcixcbiAgc2F2ZUxpc3QsXG4gIGRlbGV0ZUxpc3QsXG4gIGdldExpc3RNb3ZpZXMsXG4gIHJlbW92ZUZyb21MaXN0LFxufSBmcm9tICcuLi8uLi9hY3Rpb25zL2xpc3RzJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgbGlzdHM6IHN0YXRlLmxpc3RzLmxpc3RzLFxuICB0b3RhbDogc3RhdGUubGlzdHMudG90YWwsXG4gIG1vdmllczogc3RhdGUubGlzdHMubW92aWVzLFxuICB0YWJsZUZpZWxkczogc3RhdGUubGlzdHMudGFibGVGaWVsZHMsXG4gIHBhZ2VMb2FkaW5nOiBzdGF0ZS5jb21tb24ucGFnZUxvYWRpbmcsXG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1c2VyOiBzdGF0ZS5hY2NvdW50LnVzZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IHF1ZXJ5ID0+IGRpc3BhdGNoKGdldExpc3RCeUN1cnJlbnRVc2VyKHF1ZXJ5KSksXG4gIHNhdmVMaXN0OiAobGlzdCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHNhdmVMaXN0KGxpc3QsIGNhbGxiYWNrKSksXG4gIGRlbGV0ZUxpc3Q6IChpZCwgY2FsbGJhY2spID0+IGRpc3BhdGNoKGRlbGV0ZUxpc3QoaWQsIGNhbGxiYWNrKSksXG4gIGdldEFjY291bnREZXRhaWw6ICgpID0+IGRpc3BhdGNoKGdldEFjY291bnREZXRhaWwoKSksXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiBhbGVydCA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyhhbGVydCkpLFxuICBnZXRMaXN0TW92aWVzOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0TW92aWVzKHF1ZXJ5KSksXG4gIHJlbW92ZUZyb21MaXN0OiBsaXN0TW92aWUgPT4gZGlzcGF0Y2gocmVtb3ZlRnJvbUxpc3QobGlzdE1vdmllKSksXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgY29ubmVjdChcbiAgbWFwU3RhdGVUb1Byb3BzLFxuICBtYXBEaXNwYXRjaFRvUHJvcHMsXG4pKExpc3RzKTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIEZyYWdtZW50IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9OYXZiYXInO1xuaW1wb3J0IFByb2dyZXNzQmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZ3Jlc3NCYXInO1xuaW1wb3J0IERldGFpbFRhYmxlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRGV0YWlsVGFibGUnO1xuaW1wb3J0IENvbXBhbnlMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ29tcGFueUxpc3QnO1xuaW1wb3J0IENhc3RMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvQ2FzdExpc3QnO1xuaW1wb3J0IFZpZGVvIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVmlkZW8nO1xuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW92aWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2hvd0xpc3RNb2RhbDogZmFsc2UsXG4gICAgICBsaXN0OiB7XG4gICAgICAgIHBhZ2U6IDEsXG4gICAgICAgIGxpbWl0OiAxMCxcbiAgICAgIH0sXG4gICAgfTtcblxuICAgIHRoaXMudG9nZ2xlTGlzdE1vZGFsID0gdGhpcy50b2dnbGVMaXN0TW9kYWwuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgbGlzdCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGdldE1vdmllRGV0YWlsLCBnZXRMaXN0QnlDdXJyZW50VXNlciwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgbW92aWVJZCA9IG1hdGNoLnBhcmFtcy5pZDtcbiAgICBnZXRNb3ZpZURldGFpbChtb3ZpZUlkKTtcbiAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0LCBtb3ZpZUlkKTtcbiAgfVxuXG4gIHRvZ2dsZUxpc3RNb2RhbCgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgc2hvd0xpc3RNb2RhbDogIXByZXZTdGF0ZS5zaG93TGlzdE1vZGFsLFxuICAgIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IHNob3dMaXN0TW9kYWwsIGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICBkZXRhaWwsXG4gICAgICB1c2VyLFxuICAgICAgaXNMb2dnZWRJbixcbiAgICAgIGxpc3RzLFxuICAgICAgYWRkVG9MaXN0LFxuICAgICAgcmVtb3ZlRnJvbUxpc3QsXG4gICAgICBnZXRMaXN0QnlDdXJyZW50VXNlcixcbiAgICB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgIDxQcm9ncmVzc0JhciBzaG93IGNvbG9yPVwiaW5mb1wiIC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvID0gZGV0YWlsLnZpZGVvcy5sZW5ndGggPiAwXG4gICAgICA/IDxWaWRlbyB2aWRlb0tleT17ZGV0YWlsLnZpZGVvc1swXS5rZXl9IC8+XG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTJcIiBzcmM9e2RldGFpbC5wb3N0ZXJQYXRofSBhbHQ9e2RldGFpbC50aXRsZX0gLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYi0yXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTBcIiB0eXBlPVwiYnV0dG9uXCIgdGl0bGU9XCJBZGQgVG8gTGlzdFwiIG9uQ2xpY2s9e3RoaXMudG9nZ2xlTGlzdE1vZGFsfT5cbiAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInBsdXMtc3F1YXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxDb21wYW55TGlzdCBjb21wYW5pZXM9e2RldGFpbC5wcm9kdWN0aW9uX2NvbXBhbmllc30gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTYgbWItMlwiPlxuICAgICAgICAgICAgICB7dmlkZW99XG4gICAgICAgICAgICAgIDxEZXRhaWxUYWJsZSBtb3ZpZT17ZGV0YWlsfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgICAgICAgPENhc3RMaXN0IGNhc3RzPXtkZXRhaWwuY3JlZGl0cy5jYXN0fSAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TW9kYWwgc2hvdz17c2hvd0xpc3RNb2RhbH0gdGl0bGU9XCJBZGQgVG8gTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVMaXN0TW9kYWx9PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwXCI+XG4gICAgICAgICAgICB7bGlzdHMubWFwKGwgPT4gKFxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BsaXN0LWdyb3VwLWl0ZW0gcm91bmRlZC0wICR7bC5pc0FkZGVkID8gJ2xpc3QtZ3JvdXAtaXRlbS1zdWNjZXNzJyA6ICcgJ31gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICAgICAgICAgICAgICB7bC5uYW1lfVxuICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnRuIGJ0bi1zbSBidG4tb3V0bGluZS0ke2wuaXNBZGRlZCA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnfWB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtb3ZpZUlkID0gbWF0Y2gucGFyYW1zLmlkO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGxpc3RPYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZpZUlkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdElkOiBsLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoIWwuaXNBZGRlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFkZFRvTGlzdChsaXN0T2JqZWN0LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGlzdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKGxpc3QsIG1vdmllSWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW92ZUZyb21MaXN0KGxpc3RPYmplY3QsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9nZ2xlTGlzdE1vZGFsKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBnZXRMaXN0QnlDdXJyZW50VXNlcihsaXN0LCBtb3ZpZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtgJHtsLmlzQWRkZWQgPyAndHJhc2gnIDogJ3BsdXMtc3F1YXJlJ31gfSAvPlxuICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuTW92aWUuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbn07XG5cbk1vdmllLnByb3BUeXBlcyA9IHtcbiAgZ2V0TW92aWVEZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGFkZFRvTGlzdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcmVtb3ZlRnJvbUxpc3Q6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZXRhaWw6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgbGlzdHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KS5pc1JlcXVpcmVkLFxuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgaXNMb2dnZWRJbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL01vdmllJztcbmltcG9ydCB7IGdldE1vdmllRGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9tb3ZpZSc7XG5pbXBvcnQgeyBnZXRMaXN0QnlDdXJyZW50VXNlciwgYWRkVG9MaXN0LCByZW1vdmVGcm9tTGlzdCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBkZXRhaWw6IHN0YXRlLm1vdmllLmRldGFpbCxcbiAgdXNlcjogc3RhdGUuZGlzY292ZXIudXNlcixcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbiAgbGlzdHM6IHN0YXRlLmxpc3RzLmxpc3RzLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldE1vdmllRGV0YWlsOiBpZCA9PiBkaXNwYXRjaChnZXRNb3ZpZURldGFpbChpZCkpLFxuICBnZXRMaXN0QnlDdXJyZW50VXNlcjogKHF1ZXJ5LCBtb3ZpZUlkKSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSwgbW92aWVJZCkpLFxuICBhZGRUb0xpc3Q6IChsaXN0TW92aWUsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChhZGRUb0xpc3QobGlzdE1vdmllLCBjYWxsYmFjaykpLFxuICByZW1vdmVGcm9tTGlzdDogKGxpc3RNb3ZpZSwgY2FsbGJhY2spID0+IGRpc3BhdGNoKHJlbW92ZUZyb21MaXN0KGxpc3RNb3ZpZSwgY2FsbGJhY2spKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTW92aWUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgJy4uL3NjcmlwdHMnO1xuaW1wb3J0ICcuLi8uLi9zdHlsZXNoZWV0cy9zY3NzL21haW4uc2Nzcyc7XG5pbXBvcnQgY29uZmlndXJlU3RvcmUgZnJvbSAnLi9zdG9yZS9jb25maWd1cmUtc3RvcmUnO1xuaW1wb3J0IFJvb3QgZnJvbSAnLi9Sb290JztcbmltcG9ydCBmb250QXdlc29tZSBmcm9tICcuLi9saWIvZm9udC1hd2Vzb21lJztcblxuZm9udEF3ZXNvbWUoKTsgLy8gaW5pdCBmb250IGF3c29tZSBpY29uc1xuXG5jb25zdCBzdG9yZSA9IGNvbmZpZ3VyZVN0b3JlKCk7XG5cbnJlbmRlcihcbiAgPFJvb3Qgc3RvcmU9e3N0b3JlfSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpLFxuKTtcbiIsImltcG9ydCB7IFNFVF9BQ0NPVU5UX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXI6IHt9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWNjb3VudChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9BQ0NPVU5UX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgc2hvd0FsZXJ0OiBmYWxzZSxcbiAgYWxlcnRNZXNzYWdlOiBudWxsLFxuICBhbGVydEtpbmQ6ICdpbmZvJyxcbiAgcGFnZUxvYWRpbmc6IHRydWUsXG4gIGxvYWRpbmc6IGZhbHNlLFxuICBzaG93RmlsdGVyOiB0cnVlLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tbW9uKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgVE9HR0xFX0FMRVJUOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dBbGVydDogIXN0YXRlLnNob3dBbGVydCxcbiAgICAgICAgYWxlcnRNZXNzYWdlOiBhY3Rpb24ubWVzc2FnZSxcbiAgICAgICAgYWxlcnRLaW5kOiBhY3Rpb24ua2luZCxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBwYWdlTG9hZGluZzogYWN0aW9uLnBhZ2VMb2FkaW5nLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9MT0FESU5HX1NUQVRVUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsb2FkaW5nOiBhY3Rpb24ubG9hZGluZyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBUT0dHTEVfRklMVEVSOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHNob3dGaWx0ZXI6ICFzdGF0ZS5zaG93RmlsdGVyLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9VUExPQURFRF9JTUFHRTpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICB1cGxvYWRlZEF2YXRhcjogYWN0aW9uLnBheWxvYWQsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IFNFVF9NT1ZJRVMsIFNFVF9HRU5SRVMsIFNFVF9RVUVSWSB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi9saWIvY29va2llJztcblxuY29uc3QgdXNlciA9IHtcbiAgaWQ6IGNvb2tpZS5nZXQoJ3VzZXJfaWQnKSxcbiAgdXNlck5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJuYW1lJyksXG4gIGZyaXN0TmFtZTogY29va2llLmdldCgndXNlcl9maXJzdF9uYW1lJyksXG4gIGxhc3ROYW1lOiBjb29raWUuZ2V0KCd1c2VyX2xhc3RfbmFtZScpLFxuICBlbWFpbDogY29va2llLmdldCgndXNlcl9lbWFpbCcpLFxufTtcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICB1c2VyLFxuICBnZW5yZXM6IFtdLFxuICBtb3ZpZXM6IFtdLFxuICB0b3RhbDogMCxcbiAgdG90YWxQYWdlOiAxLFxuICBxdWVyeToge1xuICAgIHBhZ2U6IDEsXG4gICAgc29ydEJ5OiAncG9wdWxhcml0eS5kZXNjJyxcbiAgICBmaWx0ZXI6IG51bGwsXG4gICAgc2VhcmNoVGV4dDogbnVsbCxcbiAgICB3aXRoR2VucmVzOiBbXSxcbiAgICB5ZWFyOiBudWxsLFxuICAgIGNyZXdzOiBbXSxcbiAgICBjYXN0czogW10sXG4gIH0sXG4gIGlzTG9nZ2VkSW46ICEhdXNlci5lbWFpbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRpc2NvdmVyKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBtb3ZpZXM6IHN0YXRlLm1vdmllcy5jb25jYXQoYWN0aW9uLm1vdmllcyksXG4gICAgICAgIHRvdGFsOiBhY3Rpb24udG90YWwsXG4gICAgICAgIHRvdGFsUGFnZXM6IGFjdGlvbi50b3RhbFBhZ2VzLFxuICAgICAgICBxdWVyeTogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUucXVlcnksIHtcbiAgICAgICAgICBwYWdlOiBhY3Rpb24ucGFnZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0dFTlJFUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBnZW5yZXM6IGFjdGlvbi5nZW5yZXMsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1FVRVJZOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogW10sXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5xdWVyeSwge1xuICAgICAgICAgIHBhZ2U6IDEsXG4gICAgICAgICAgW2FjdGlvbi5maWVsZF06IGFjdGlvbi52YWx1ZSxcbiAgICAgICAgfSksXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cblxuLy8gVE9ETzogTW92ZSB1c2VyIG9iamVjdCB0byBhY2NvdW50IHJlZHVjZXJcbiIsImltcG9ydCB7IGNvbWJpbmVSZWR1Y2VycyB9IGZyb20gJ3JlZHV4JztcblxuaW1wb3J0IGFjY291bnQgZnJvbSAnLi9hY2NvdW50JztcbmltcG9ydCBkaXNjb3ZlciBmcm9tICcuL2Rpc2NvdmVyJztcbmltcG9ydCBtb3ZpZSBmcm9tICcuL21vdmllJztcbmltcG9ydCBsaXN0cyBmcm9tICcuL2xpc3RzJztcbmltcG9ydCBjb21tb24gZnJvbSAnLi9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBjb21iaW5lUmVkdWNlcnMoe1xuICBhY2NvdW50LFxuICBkaXNjb3ZlcixcbiAgbW92aWUsXG4gIGxpc3RzLFxuICBjb21tb24sXG59KTtcbiIsImltcG9ydCB7IFNFVF9MSVNUUywgU0VUX0xJU1RfTU9WSUVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdHM6IFtdLFxuICB0b3RhbExpc3Q6IDAsXG4gIG1vdmllczogW10sXG4gIHRvdGFsTW92aWU6IDAsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsaXN0cyhzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9MSVNUUzpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBsaXN0czogYWN0aW9uLnBheWxvYWQubGlzdHMsXG4gICAgICAgIHRvdGFsTGlzdDogYWN0aW9uLnBheWxvYWQudG90YWwsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0xJU1RfTU9WSUVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogYWN0aW9uLnBheWxvYWQubW92aWVzLFxuICAgICAgICB0b3RhbE1vdmllOiBhY3Rpb24ucGF5bG9hZC50b3RhbCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIGRldGFpbDogbnVsbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRldGFpbChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIFNFVF9NT1ZJRV9ERVRBSUw6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgZGV0YWlsOiBhY3Rpb24uZGV0YWlsLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVTdG9yZSwgYXBwbHlNaWRkbGV3YXJlIH0gZnJvbSAncmVkdXgnO1xuaW1wb3J0IHRodW5rTWlkZGxld2FyZSBmcm9tICdyZWR1eC10aHVuayc7XG5pbXBvcnQgcmVkdWNlciBmcm9tICcuLi9yZWR1Y2Vycyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNvbmZpZ3VyZVN0b3JlKCkge1xuICByZXR1cm4gY3JlYXRlU3RvcmUoXG4gICAgcmVkdWNlcixcbiAgICBhcHBseU1pZGRsZXdhcmUoXG4gICAgICB0aHVua01pZGRsZXdhcmUsXG4gICAgKSxcbiAgKTtcbn1cbiIsIlxuaW1wb3J0IHtcbiAgc2V0UGFnZUxvYWRpbmdTdGF0dXMsXG4gIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICBzZXRMb2FkaW5nU3RhdHVzLFxufSBmcm9tICcuLi9hcHAvYWN0aW9ucy9jb21tb24nO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSB7XG4gIHJldHVybiAoeyByZXNwb25zZSB9KSA9PiB7XG4gICAgY29uc3Qgc3RhdHVzQ29kZSA9IHJlc3BvbnNlLnN0YXR1cztcblxuICAgIGRpc3BhdGNoKHNldFBhZ2VMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuXG4gICAgc3dpdGNoIChzdGF0dXNDb2RlKSB7XG4gICAgICBjYXNlIDQwNDpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9wYWdlLW5vdC1mb3VuZGA7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDQwMzpcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgJHt2aXNzbmUuZG9tYWlufS9hdXRoYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRpc3BhdGNoKFxuICAgICAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAgICAgIGtpbmQ6ICdkYW5nZXInLFxuICAgICAgICAgICAgbWVzc2FnZTogcmVzcG9uc2UuZGF0YS5tZXNzYWdlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH07XG59XG4iLCJleHBvcnQgY29uc3QgQUxFUlRfVFlQRVMgPSBbXG4gICdwcmltYXJ5JyxcbiAgJ3NlY29uZGFyeScsXG4gICdzdWNjZXNzJyxcbiAgJ2RhbmdlcicsXG4gICd3YXJuaW5nJyxcbiAgJ2luZm8nLFxuICAnbGlnaHQnLFxuICAnZGFyaycsXG5dO1xuXG5leHBvcnQgY29uc3QgQUxFUlRfVFlQRV9JQ09OX01BUCA9IHtcbiAgcHJpbWFyeTogJycsXG59O1xuIiwiY29uc3QgZG9jID0gZG9jdW1lbnQ7XG5cbmNvbnN0IHNldCA9IChuYW1lLCB2YWx1ZSkgPT4ge1xuICBkb2MuY29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xufTtcblxuY29uc3QgZ2V0ID0gKG5hbWUpID0+IHtcbiAgY29uc3QgY29va2llcyA9IGRvYy5jb29raWUuc3BsaXQoJzsnKTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb2tpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBbY25hbWUsIGN2YWx1ZV0gPSBjb29raWVzW2ldLnNwbGl0KCc9Jyk7XG4gICAgaWYgKGNuYW1lLnRyaW0oKSA9PT0gbmFtZS50cmltKCkpIHtcbiAgICAgIHJldHVybiBjdmFsdWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXQsXG4gIHNldCxcbn07XG4iLCJpbXBvcnQgeyBsaWJyYXJ5IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLXN2Zy1jb3JlJztcbmltcG9ydCB7XG4gIGZhVXNlcixcbiAgZmFTaWduT3V0QWx0LFxuICBmYUVudmVsb3BlLFxuICBmYVVubG9jayxcbiAgZmFBbGlnbkxlZnQsXG4gIGZhS2V5LFxuICBmYVNpZ25hdHVyZSxcbiAgZmFGaWx0ZXIsXG4gIGZhU29ydEFtb3VudFVwLFxuICBmYVNvcnRBbW91bnREb3duLFxuICBmYVVzZXJDaXJjbGUsXG4gIGZhTGlzdCxcbiAgZmFTdGFyLFxuICBmYUhlYXJ0LFxuICBmYUNvbW1lbnQsXG4gIGZhU3dhdGNoYm9vayxcbiAgZmFVc2VyRnJpZW5kcyxcbiAgZmFDb2csXG4gIGZhRWRpdCxcbiAgZmFVcGxvYWQsXG4gIGZhTmV3c3BhcGVyLFxuICBmYUF0LFxuICBmYUFuZ2xlUmlnaHQsXG4gIGZhQW5nbGVMZWZ0LFxuICBmYVBsdXNTcXVhcmUsXG4gIGZhVHJhc2gsXG4gIGZhQ2hlY2ssXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mcmVlLXNvbGlkLXN2Zy1pY29ucyc7XG5pbXBvcnQge1xuICBmYUZhY2Vib29rLFxuICBmYUdvb2dsZSxcbiAgZmFUd2l0dGVyLFxuICBmYUluc3RhZ3JhbSxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtYnJhbmRzLXN2Zy1pY29ucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluaXQoKSB7XG4gIGxpYnJhcnkuYWRkKFxuICAgIGZhVXNlcixcbiAgICBmYVNpZ25PdXRBbHQsXG4gICAgZmFFbnZlbG9wZSxcbiAgICBmYVVubG9jayxcbiAgICBmYUFsaWduTGVmdCxcbiAgICBmYUtleSxcbiAgICBmYVNpZ25hdHVyZSxcbiAgICBmYUZpbHRlcixcbiAgICBmYVNvcnRBbW91bnRVcCxcbiAgICBmYVNvcnRBbW91bnREb3duLFxuICAgIGZhRmFjZWJvb2ssXG4gICAgZmFHb29nbGUsXG4gICAgZmFUd2l0dGVyLFxuICAgIGZhSW5zdGFncmFtLFxuICAgIGZhVXNlckNpcmNsZSxcbiAgICBmYUxpc3QsXG4gICAgZmFTdGFyLFxuICAgIGZhSGVhcnQsXG4gICAgZmFDb21tZW50LFxuICAgIGZhU3dhdGNoYm9vayxcbiAgICBmYVVzZXJGcmllbmRzLFxuICAgIGZhQ29nLFxuICAgIGZhRWRpdCxcbiAgICBmYVVwbG9hZCxcbiAgICBmYU5ld3NwYXBlcixcbiAgICBmYUF0LFxuICAgIGZhQW5nbGVSaWdodCxcbiAgICBmYUFuZ2xlTGVmdCxcbiAgICBmYVBsdXNTcXVhcmUsXG4gICAgZmFUcmFzaCxcbiAgICBmYUNoZWNrLFxuICApO1xufVxuIiwiaW1wb3J0IHlhbGwgZnJvbSAneWFsbC1qcyc7XG5cbigoKSA9PiB7XG4gIGNvbnN0IHdpbiA9IHdpbmRvdztcblxuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIHlhbGwoe1xuICAgICAgb2JzZXJ2ZUNoYW5nZXM6IHRydWUsXG4gICAgfSk7XG4gIH0pO1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9