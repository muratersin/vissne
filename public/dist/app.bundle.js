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
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'D:\\Dev\\projects\\vissne\\app\\assets\\javascript\\app\\actions\\account.js'");

/***/ }),

/***/ "./app/assets/javascript/app/actions/auth.js":
/*!***************************************************!*\
  !*** ./app/assets/javascript/app/actions/auth.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'D:\\Dev\\projects\\vissne\\app\\assets\\javascript\\app\\actions\\auth.js'");

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

/***/ "./app/assets/javascript/app/components/CompanyList/index.jsx":
/*!********************************************************************!*\
  !*** ./app/assets/javascript/app/components/CompanyList/index.jsx ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'D:\\Dev\\projects\\vissne\\app\\assets\\javascript\\app\\components\\CompanyList\\index.jsx'");

/***/ }),

/***/ "./app/assets/javascript/app/components/DetailTable.jsx":
/*!**************************************************************!*\
  !*** ./app/assets/javascript/app/components/DetailTable.jsx ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nError: ENOENT: no such file or directory, open 'D:\\Dev\\projects\\vissne\\app\\assets\\javascript\\app\\components\\DetailTable.jsx'");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9Sb290LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvY29tbW9uLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvYWN0aW9ucy9kaXNjb3Zlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2FjdGlvbnMvbGlzdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9hY3Rpb25zL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9BbGVydC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvQ2FzdC5zY3NzP2Y0ODkiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3QvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9DYXN0TGlzdC9DYXN0TGlzdC5zY3NzPzg1NzAiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Nhc3RMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvRmlsdGVyL0ZpbHRlci5zY3NzP2VmN2YiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0ZpbHRlci9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL0Zvb3Rlci9Gb290ZXIuc2Nzcz8zZGRlIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Gb290ZXIvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9NZW51LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTW9kYWwvTW9kYWwuc2Nzcz9lY2Q5Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb2RhbC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL01vdmllQ2FyZC9Nb3ZpZUNhcmQuc2Nzcz85YWU1Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUNhcmQvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Nb3ZpZUxpc3QuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9OYXZiYXIvTmF2YmFyLnNjc3M/NTBiNSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTmF2YmFyL2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvTm90Rm91bmQvTm90Rm91bmQuc2Nzcz81ZWY4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Ob3RGb3VuZC9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1BhZ2VMb2FkaW5nLmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvUGFnaW5hdGlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1Bvc3Rlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1Byb2ZpbGVDb250YWluZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9Qcm9ncmVzc0Jhci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb21wb25lbnRzL1NwaW5uZXIuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9UYWJsZUxpc3QvVGFibGVMaXN0LnNjc3M/NDZmOSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVGFibGVMaXN0L2luZGV4LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbXBvbmVudHMvVmlkZW8vVmlkZW8uc2Nzcz82ZGI2Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29tcG9uZW50cy9WaWRlby9pbmRleC5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb25zdGFudHMvYWN0aW9uLXR5cGVzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29uc3RhbnRzL3Byb2ZpbGUtbWVudS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnN0YW50cy9wcm9wLXNoYXBlcy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LmpzeCIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9BY2NvdW50LnNjc3M/ODk1ZSIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWNjb3VudC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cvQWxlcnREaWFsb2cuanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BbGVydERpYWxvZy9BbGVydERpYWxvZy5zY3NzPzA4NGIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0FsZXJ0RGlhbG9nL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL0F1dGguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL0F1dGguc2Nzcz8zNGZjIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9BdXRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9EaXNjb3Zlci9EaXNjb3Zlci5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0Rpc2NvdmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9MaXN0cy9MaXN0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL0xpc3RzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvY29udGFpbmVycy9Nb3ZpZS9Nb3ZpZS5qc3giLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9jb250YWluZXJzL01vdmllL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvaW5kZXguanN4Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2NvbW1vbi5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL2Rpc2NvdmVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvcmVkdWNlcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Fzc2V0cy9qYXZhc2NyaXB0L2FwcC9yZWR1Y2Vycy9saXN0cy5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL3JlZHVjZXJzL21vdmllLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9hcHAvc3RvcmUvY29uZmlndXJlLXN0b3JlLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvYWpheC1lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29uc3RhbnRzLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvY29va2llLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9saWIvZm9udC1hd2Vzb21lLmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvamF2YXNjcmlwdC9zY3JpcHRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvc3R5bGVzaGVldHMvc2Nzcy9tYWluLnNjc3M/ODI4YiJdLCJuYW1lcyI6WyJSb290Iiwic3RvcmUiLCJEaXNjb3ZlciIsIkF1dGgiLCJBY2NvdW50IiwiTGlzdHMiLCJNb3ZpZSIsIk5vdEZvdW5kIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiaW5zdGFuY2VPZiIsIk9iamVjdCIsImlzUmVxdWlyZWQiLCJ0b2dnbGVBbGVydERpYWxvZyIsIm1lc3NhZ2UiLCJraW5kIiwidHlwZSIsIlRPR0dMRV9BTEVSVCIsInNldFBhZ2VMb2FkaW5nU3RhdHVzIiwiU0VUX1BBR0VfTE9BRElOR19TVEFUVVMiLCJwYWdlTG9hZGluZyIsInN0YXR1cyIsInNldExvYWRpbmdTdGF0dXMiLCJTRVRfTE9BRElOR19TVEFUVVMiLCJsb2FkaW5nIiwidG9nZ2xlRmlsdGVyIiwiVE9HR0xFX0ZJTFRFUiIsInNldFVwbG9hZGVkSW1hZ2UiLCJTRVRfVVBMT0FERURfSU1BR0UiLCJwYXlsb2FkIiwidXBsb2FkZWRGaWxlIiwic2V0TW92aWVzIiwiU0VUX01PVklFUyIsIm1vdmllcyIsInJlc3BvbnNlIiwicmVzdWx0cyIsInBhZ2UiLCJ0b3RhbFBhZ2VzIiwidG90YWxfcGFnZXMiLCJ0b3RhbCIsInRvdGFsX3Jlc3VsdHMiLCJnZXRNb3ZpZXMiLCJxdWVyeSIsInVybCIsImtleXMiLCJmb3JFYWNoIiwicXVlcnlOYW1lIiwiaSIsInZhbHVlIiwib3AiLCJBcnJheSIsImlzQXJyYXkiLCJsZW5ndGgiLCJtdWx0aVF1ZXJ5IiwidiIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJ0aGVuIiwiZGF0YSIsImNhdGNoIiwic2V0UXVlcnkiLCJmaWVsZCIsIlNFVF9RVUVSWSIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0R2VucmVzIiwiU0VUX0dFTlJFUyIsImdlbnJlcyIsImdldEdlbnJlcyIsInNldExpc3QiLCJnZXRMaXN0QnlDdXJyZW50VXNlciIsInNhdmVMaXN0IiwiZGVsZXRlTGlzdCIsImFkZFRvTGlzdCIsInJlbW92ZUZyb21MaXN0IiwibGlzdHMiLCJTRVRfTElTVFMiLCJsaW1pdCIsImN1cnJlbnRVc2VySWQiLCJjb29raWUiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJ2aXNzbmUiLCJkb21haW4iLCJyb3dzIiwiY291bnQiLCJsaXN0IiwiY2FsbGJhY2siLCJvcHMiLCJpZCIsIm1ldGhvZCIsInJlc3VsdCIsImRlbGV0ZSIsImxpc3RJZCIsIm1vdmllSWQiLCJzZXRNb3ZpZURldGFpbCIsIlNFVF9NT1ZJRV9ERVRBSUwiLCJkZXRhaWwiLCJnZXRNb3ZpZURldGFpbCIsIkFsZXJ0IiwicHJvcHMiLCJzaG93IiwiZGVmYXVsdFByb3BzIiwib25lT2YiLCJBTEVSVF9UWVBFUyIsImJvb2wiLCJzdHJpbmciLCJDYXN0IiwibmFtZSIsImNoYXJhY3RlciIsInByb2ZpbGVQYXRoIiwiQ2FzdFNoYXBlIiwiQ2FzdExpc3QiLCJjYXN0cyIsImNhc3RMaXN0IiwibWFwIiwiYyIsImFycmF5T2YiLCJzd2l0Y2hTb3J0UXVlcnkiLCJzb3J0QnkiLCJzcGxpdCIsImFkZEdlbnJlSWQiLCJjdXJyZW50R2VucmVzIiwiaW5kZXgiLCJpbmRleE9mIiwicHVzaCIsInNwbGljZSIsImhhbmRsZUNoYW5nZVllYXIiLCJ5ZWFyIiwiTnVtYmVyIiwiaXNOYU4iLCJGaWx0ZXIiLCJzb3J0SWNvbkNsYXNzIiwic29ydE9wdGlvbnMiLCJTT1JUX09QVElPTlMiLCJzb3J0Iiwia2V5IiwicmVwbGFjZSIsInRvTG9jYWxlTG93ZXJDYXNlIiwiZ2VucmVPcHRpb25zIiwiZyIsIndpdGhHZW5yZXMiLCJzZWFyY2hUZXh0IiwiJGV2ZW50IiwidGFyZ2V0IiwiR2VucmVTaGFwZSIsIkZpbHRlclNoYXBlIiwiZnVuYyIsIkZvb3RlciIsIk1lbnUiLCJwYXRoIiwiaXRlbXMiLCJtZW51SXRlbXMiLCJtIiwiaWNvbiIsInNoYXBlIiwiTW9kYWwiLCJ0aXRsZSIsImNhbmNlbCIsInN1Ym1pdCIsImNoaWxkcmVuIiwiY2xhc3NOYW1lIiwiTW92aWVDYXJkIiwiaW1hZ2UiLCJyYXRlIiwic2x1ZyIsIm51bWJlciIsIk1vdmllTGlzdCIsIm1vdmllIiwicG9zdGVyIiwidm90ZUF2ZXJhZ2UiLCJNb3ZpZVNoYXBlIiwiTmF2YmFyIiwidXNlciIsImlzTG9nZ2VkSW4iLCJwYXRoTmFtZSIsImxvZ2luQnV0dG9uIiwidXNlck5hbWUiLCJjZG4iLCJVc2VyU2hhcGUiLCJQYWdlTG9hZGluZyIsImhhbmRsZUNsaWNrIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2UiLCJpc0ludGVnZXIiLCJuZXdQYWdlIiwiZ2VuZXJhdGVQYWdlTnVtYmVycyIsIm9wdGlvbnMiLCJidXR0b25Db3VudCIsInBhZ2VOdW1iZXJzIiwiTWF0aCIsImZsb29yIiwiYmMiLCJjZWlsIiwiUGFnaW5hdGlvbiIsIm9uUGFnaW5hdGUiLCJwYWdlQnV0dG9ucyIsInBuIiwiaW1hZ2VPbkxvYWQiLCJpbWFnZU9uRXJyb3IiLCJzcmMiLCJkZWZhdWx0Q292ZXJJbWFnZVBhdGgiLCJQb3N0ZXIiLCJhbHQiLCJQcm9maWxlQ29udGFpbmVyIiwiYXZhdGFyIiwicHJvZmlsZU1lbnUiLCJQcm9ncmVzc0JhciIsImhlaWdodCIsIndpZHRoIiwiU3Bpbm5lciIsInNpemUiLCJjb2xvciIsImFkZGlvbmFsQ2xhc3MiLCJjcmVhdGVIZWFkZXIiLCJmaWVsZHMiLCJ2aXNpYmxlRmllbGRzIiwiZmlsdGVyIiwiZiIsImhpZGRlbiIsImNyZWF0ZUJvZHkiLCJzZWxlY3RlZCIsIm9uU2VsZWN0IiwidGJvZHkiLCJpdGVtIiwiaXRlbUZpZWxkcyIsImZvcm1hdCIsInRvU3RyaW5nIiwiY3JlYXRlUGFnaW5hdGlvbiIsImRhdGFMZW5ndGgiLCJUYWJsZUxpc3QiLCJwYWdpbmF0aW9uIiwicmVzcG9uc2l2ZSIsIm9uQ3JlYXRlIiwib25FZGl0Iiwib25EZWxldGUiLCJidG5Hcm91cCIsImhlYWRzIiwiYm9keSIsInBhZ2luYXRpb25CdXR0b25zIiwiVmlkZW8iLCJ2aWRlb0tleSIsIkxPQURJTkciLCJSRUdJU1RFUiIsIlNFVF9VU0VSIiwiR0VUX01PVklFUyIsIkdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIiLCJDUkVBVEVfTElTVCIsIkRFTEVURV9MSVNUIiwiQUREX1RPX0xJU1QiLCJERUxFVEVfRlJPTV9MSVNUIiwiU0VUX0FDQ09VTlRfREVUQUlMIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsImZ1bGxOYW1lIiwib3JnaW5hbFRpdGxlIiwidm90ZV9jb3VudCIsInZvdGVfYXZlcmFnZSIsInJlbGVhc2VfZGF0ZSIsImdlbnJlTmFtZXMiLCJob21lcGFnZSIsInRhZ2xpbmUiLCJsYW5ndWFnZSIsIkNvbXBhbnlTaGFwZSIsImxvZ28iLCJtYXRjaFNoYXBlIiwiY3Jld3MiLCJsdGUiLCJndGUiLCJyZWxlYXNlWWVhciIsInN0YXRlIiwiZWRpdE1vZGUiLCJ1c2VyRm9ybSIsInBhc3N3b3JkIiwidmFsaWRhdGlvbiIsIm9sZFBhc3N3b3JkIiwibmV3UGFzc3dvcmQiLCJjb25maXJtTmV3UGFzc3dvcmQiLCJoYW5kbGVDaGFuZ2UiLCJiaW5kIiwiY2hhbmdlUGFzc3dvcmQiLCJnZXRBY2NvdW50RGV0YWlsIiwiZm9yY2VVcGRhdGUiLCJzZXRTdGF0ZSIsIm1hdGNoIiwidXBkYXRlVXNlciIsImNsYXNzIiwiZSIsImVycm9yIiwiQ29tcG9uZW50IiwibWFwU3RhdGVUb1Byb3BzIiwiY29tbW9uIiwiYWNjb3VudCIsIm1hcERpc3BhdGNoVG9Qcm9wcyIsImFsZXJ0Iiwic2hvd0FsZXJ0IiwiYWxlcnRNZXNzYWdlIiwiYWxlcnRLaW5kIiwiQWxlcnREaWFsb2ciLCJmb3JtIiwiY29uZmlybVBhc3N3b3JkIiwic3dpdGNoRm9ybSIsImxvZ2luUmVnaXN0ZXIiLCJlcnJvck1lc3NhZ2UiLCJlbWFpbElucHV0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiaXNSZWdpc3RlciIsImlzVmFsaWQiLCJjaGVja1ZhbGlkaXR5IiwicHJldlN0YXRlIiwiYnV0dG9uVGV4dCIsInN3aXRjaFJlZ2lzdGVyVG9Mb2dpblRleHQiLCJyZWdpc3RlcklucHV0IiwiaGFuZGxlU3VibWl0IiwiZGlzY292ZXIiLCJsb2FkTW92aWVzIiwic2hvd0ZpbHRlciIsInBhdGhuYW1lIiwiZ2V0TGlzdHMiLCJ0b2dnbGVNb2RhbCIsImNyZWF0ZSIsImRlc3Ryb3kiLCJ1cGRhdGUiLCJzYXZlIiwiYXNzaWduIiwic2hvd01vZGFsIiwicGFyc2VkVmFsdWUiLCJ0YWJsZUZpZWxkcyIsInMiLCJwdWJsaWMiLCJwYXJhbXMiLCJ2aWRlbyIsInZpZGVvcyIsInBvc3RlclBhdGgiLCJwcm9kdWN0aW9uX2NvbXBhbmllcyIsImNyZWRpdHMiLCJjYXN0IiwiZ2V0RWxlbWVudEJ5SWQiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJ1cGxvYWRlZEF2YXRhciIsImZyaXN0TmFtZSIsImNvbmNhdCIsImRhdGUiLCJEYXRlIiwidG9Mb2NhbGVEYXRlU3RyaW5nIiwiY29uZmlndXJlU3RvcmUiLCJyZWR1Y2VyIiwidGh1bmtNaWRkbGV3YXJlIiwiYWpheEVycm9ySGFuZGxlciIsInN0YXR1c0NvZGUiLCJBTEVSVF9UWVBFX0lDT05fTUFQIiwicHJpbWFyeSIsImRvYyIsInNldCIsImNvb2tpZXMiLCJjbmFtZSIsImN2YWx1ZSIsInRyaW0iLCJ1bmRlZmluZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwiaW5pdCIsImxpYnJhcnkiLCJhZGQiLCJmYVVzZXIiLCJmYVNpZ25PdXRBbHQiLCJmYUVudmVsb3BlIiwiZmFVbmxvY2siLCJmYUFsaWduTGVmdCIsImZhS2V5IiwiZmFTaWduYXR1cmUiLCJmYUZpbHRlciIsImZhU29ydEFtb3VudFVwIiwiZmFTb3J0QW1vdW50RG93biIsImZhRmFjZWJvb2siLCJmYUdvb2dsZSIsImZhVHdpdHRlciIsImZhSW5zdGFncmFtIiwiZmFVc2VyQ2lyY2xlIiwiZmFMaXN0IiwiZmFTdGFyIiwiZmFIZWFydCIsImZhQ29tbWVudCIsImZhU3dhdGNoYm9vayIsImZhVXNlckZyaWVuZHMiLCJmYUNvZyIsImZhRWRpdCIsImZhVXBsb2FkIiwiZmFOZXdzcGFwZXIiLCJmYUF0IiwiZmFBbmdsZVJpZ2h0IiwiZmFBbmdsZUxlZnQiLCJmYVBsdXNTcXVhcmUiLCJmYVRyYXNoIiwid2luIiwib25sb2FkIiwicmVtb3ZlIiwiZW52IiwibmF2aWdhdG9yIiwic2VydmljZVdvcmtlciIsInJlZ2lzdGVyIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBUSxvQkFBb0I7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBaUIsNEJBQTRCO0FBQzdDO0FBQ0E7QUFDQSwwQkFBa0IsMkJBQTJCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FB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QSxrQkFBVUMsYUFBVixDQUF3QkMsUUFBeEIsQ0FBaUMsUUFBakM7QUFDRDtBQUNGO0FBQ0YsR0FaRDtBQWFELENBaEJELEk7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0cmV0dXJuIHJlc3VsdDtcbiBcdH1cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cbiBcdHZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIGFkZCBlbnRyeSBtb2R1bGUgdG8gZGVmZXJyZWQgbGlzdFxuIFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2goW1wiLi9hcHAvYXNzZXRzL2phdmFzY3JpcHQvYXBwL2luZGV4LmpzeFwiLFwiY29tbW9uXCIsXCJyZWFjdFwiXSk7XG4gXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIHJlYWR5XG4gXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbiIsImltcG9ydCBSZWFjdCwgeyBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJ3JlYWN0LXJlZHV4JztcbmltcG9ydCB7IEJyb3dzZXJSb3V0ZXIgYXMgUm91dGVyLCBSb3V0ZSwgU3dpdGNoIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5cbi8vIFBhZ2VzXG5pbXBvcnQgRGlzY292ZXIgZnJvbSAnLi9jb250YWluZXJzL0Rpc2NvdmVyJztcbmltcG9ydCBNb3ZpZSBmcm9tICcuL2NvbnRhaW5lcnMvTW92aWUnO1xuaW1wb3J0IEF1dGggZnJvbSAnLi9jb250YWluZXJzL0F1dGgnO1xuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9jb250YWluZXJzL0FjY291bnQnO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vY29udGFpbmVycy9MaXN0cyc7XG5pbXBvcnQgTm90Rm91bmQgZnJvbSAnLi9jb21wb25lbnRzL05vdEZvdW5kJztcblxuLy8gU2hhcmVkIENvbXBvbmVudHNcbmltcG9ydCBBbGVydERpYWxvZyBmcm9tICcuL2NvbnRhaW5lcnMvQWxlcnREaWFsb2cnO1xuXG5jb25zdCBSb290ID0gKHsgc3RvcmUgfSkgPT4gKFxuICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICA8RnJhZ21lbnQ+XG4gICAgICA8Um91dGVyPlxuICAgICAgICA8U3dpdGNoPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL1wiIGV4YWN0IGNvbXBvbmVudD17RGlzY292ZXJ9IC8+XG4gICAgICAgICAgPFJvdXRlIHBhdGg9XCIvY29taW5nLXNvb25cIiBjb21wb25lbnQ9e0Rpc2NvdmVyfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL2luLXRoZWF0ZXJzXCIgY29tcG9uZW50PXtEaXNjb3Zlcn0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9hdXRoXCIgY29tcG9uZW50PXtBdXRofSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3Byb2ZpbGUvYWNjb3VudFwiIGNvbXBvbmVudD17QWNjb3VudH0gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9wcm9maWxlL2xpc3RzXCIgY29tcG9uZW50PXtMaXN0c30gLz5cbiAgICAgICAgICA8Um91dGUgcGF0aD1cIi9tb3ZpZS86c2x1Zy86aWRcIiBjb21wb25lbnQ9e01vdmllfSAvPlxuICAgICAgICAgIDxSb3V0ZSBwYXRoPVwiL3BhZ2Utbm90LWZvdW5kXCIgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgICA8Um91dGUgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cbiAgICAgICAgPC9Td2l0Y2g+XG4gICAgICA8L1JvdXRlcj5cbiAgICAgIDxBbGVydERpYWxvZyAvPlxuICAgIDwvRnJhZ21lbnQ+XG4gIDwvUHJvdmlkZXI+XG4pO1xuXG5Sb290LnByb3BUeXBlcyA9IHtcbiAgc3RvcmU6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFJvb3Q7XG4iLCJpbXBvcnQge1xuICBUT0dHTEVfQUxFUlQsXG4gIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTLFxuICBTRVRfTE9BRElOR19TVEFUVVMsXG4gIFRPR0dMRV9GSUxURVIsXG4gIFNFVF9VUExPQURFRF9JTUFHRSxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCB0b2dnbGVBbGVydERpYWxvZyA9ICh7IG1lc3NhZ2UsIGtpbmQgfSkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0FMRVJULFxuICBtZXNzYWdlLFxuICBraW5kLFxufSk7XG5cbmV4cG9ydCBjb25zdCBzZXRQYWdlTG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfUEFHRV9MT0FESU5HX1NUQVRVUyxcbiAgcGFnZUxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0TG9hZGluZ1N0YXR1cyA9IHN0YXR1cyA9PiAoe1xuICB0eXBlOiBTRVRfTE9BRElOR19TVEFUVVMsXG4gIGxvYWRpbmc6IHN0YXR1cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgdG9nZ2xlRmlsdGVyID0gKCkgPT4gKHtcbiAgdHlwZTogVE9HR0xFX0ZJTFRFUixcbn0pO1xuXG5leHBvcnQgY29uc3Qgc2V0VXBsb2FkZWRJbWFnZSA9IHVwbG9hZGVkRmlsZSA9PiAoe1xuICB0eXBlOiBTRVRfVVBMT0FERURfSU1BR0UsXG4gIHBheWxvYWQ6IHVwbG9hZGVkRmlsZSxcbn0pO1xuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFUywgU0VUX1FVRVJZLCBTRVRfR0VOUkVTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzIH0gZnJvbSAnLi9jb21tb24nO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZXMgPSByZXNwb25zZSA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVTLFxuICBtb3ZpZXM6IHJlc3BvbnNlLnJlc3VsdHMsXG4gIHBhZ2U6IChyZXNwb25zZS5wYWdlICsgMSksXG4gIHRvdGFsUGFnZXM6IHJlc3BvbnNlLnRvdGFsX3BhZ2VzLFxuICB0b3RhbDogcmVzcG9uc2UudG90YWxfcmVzdWx0cyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0TW92aWVzID0gKHF1ZXJ5KSA9PiB7XG4gIGxldCB1cmwgPSAnYXBpL2Rpc2NvdmVyJztcblxuICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgocXVlcnlOYW1lLCBpKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSBxdWVyeVtxdWVyeU5hbWVdO1xuICAgIGNvbnN0IG9wID0gaSA9PT0gMFxuICAgICAgPyAnPydcbiAgICAgIDogJyYnO1xuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIHVybCArPSBgJHtvcH0ke3F1ZXJ5TmFtZX09JHt2YWx1ZX1gO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIGxldCBtdWx0aVF1ZXJ5ID0gYCR7cXVlcnlOYW1lfT1gO1xuICAgICAgICB2YWx1ZS5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgICAgbXVsdGlRdWVyeSArPSBgJHt2fSxgO1xuICAgICAgICB9KTtcbiAgICAgICAgdXJsICs9IGAke29wfSR7bXVsdGlRdWVyeX1gO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zLmdldCh1cmwpXG4gICAgICAudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyhmYWxzZSkpO1xuICAgICAgICBkaXNwYXRjaChzZXRNb3ZpZXMoZGF0YSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0UXVlcnkgPSAoeyBmaWVsZCwgdmFsdWUgfSkgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHtcbiAgICB0eXBlOiBTRVRfUVVFUlksXG4gICAgZmllbGQsXG4gICAgdmFsdWUsXG4gIH0pO1xuICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0R2VucmVzID0gZ2VucmVzID0+ICh7XG4gIHR5cGU6IFNFVF9HRU5SRVMsXG4gIGdlbnJlcyxcbn0pO1xuXG5leHBvcnQgY29uc3QgZ2V0R2VucmVzID0gKCkgPT4gZGlzcGF0Y2ggPT4gYXhpb3NcbiAgLmdldCgnL2FwaS9nZW5yZScpXG4gIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goc2V0R2VucmVzKGRhdGEpKSlcbiAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiIsImltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5cbmltcG9ydCBjb29raWUgZnJvbSAnLi4vLi4vbGliL2Nvb2tpZSc7XG5pbXBvcnQgYWpheEVycm9ySGFuZGxlciBmcm9tICcuLi8uLi9saWIvYWpheC1lcnJvci1oYW5kbGVyJztcbmltcG9ydCB7XG4gIEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIsXG4gIENSRUFURV9MSVNULFxuICBERUxFVEVfTElTVCxcbiAgQUREX1RPX0xJU1QsXG4gIERFTEVURV9GUk9NX0xJU1QsXG4gIFNFVF9MSVNUUyxcbn0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgeyBzZXRMb2FkaW5nU3RhdHVzLCBzZXRQYWdlTG9hZGluZ1N0YXR1cywgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgeyBjYWxsYmFja2lmeSB9IGZyb20gJ3V0aWwnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2V0TGlzdCh7IGxpc3RzLCB0b3RhbCB9KSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogU0VUX0xJU1RTLFxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGxpc3RzLFxuICAgICAgdG90YWwsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldExpc3RCeUN1cnJlbnRVc2VyKHsgcGFnZSwgbGltaXQgfSkge1xuICBjb25zdCBjdXJyZW50VXNlcklkID0gY29va2llLmdldCgndXNlcl9pZCcpO1xuXG4gIGlmICghY3VycmVudFVzZXJJZCkge1xuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYCR7dmlzc25lLmRvbWFpbn0vYXV0aGA7XG4gIH1cblxuICByZXR1cm4gKGRpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2goc2V0TG9hZGluZ1N0YXR1cyh0cnVlKSk7XG4gICAgYXhpb3MoYC9hcGkvbGlzdHM/dXNlcklkPSR7Y3VycmVudFVzZXJJZH0mcGFnZT0ke3BhZ2V9JmxpbWl0PSR7bGltaXR9YClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2goc2V0TGlzdCh7XG4gICAgICAgICAgbGlzdHM6IHJlc3BvbnNlLmRhdGEucm93cyxcbiAgICAgICAgICB0b3RhbDogcmVzcG9uc2UuZGF0YS5jb3VudCxcbiAgICAgICAgfSkpO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzYXZlTGlzdChsaXN0LCBjYWxsYmFjaykge1xuICBjb25zdCBvcHMgPSAhbGlzdC5pZCA/IHtcbiAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICB1cmw6ICcvYXBpL2xpc3RzJyxcbiAgfSA6IHtcbiAgICBtZXRob2Q6ICdwdXQnLFxuICAgIHVybDogYC9hcGkvbGlzdHMvJHtsaXN0LmlkfWAsXG4gIH07XG5cbiAgcmV0dXJuIChkaXNwYXRjaCkgPT4ge1xuICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXModHJ1ZSkpO1xuICAgIGF4aW9zW29wcy5tZXRob2RdKG9wcy51cmwsIGxpc3QpXG4gICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXN1bHQuZGF0YS5tZXNzYWdlLFxuICAgICAgICB9KSk7XG4gICAgICAgIGlmIChjYWxsYmFjayAmJiB0eXBlb2YgY2FsbGJhY2sgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZUxpc3QoaWQsIGNhbGxiYWNrKSB7XG4gIHJldHVybiAoZGlzcGF0Y2gpID0+IHtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKHRydWUpKTtcbiAgICBheGlvcy5kZWxldGUoYC9hcGkvbGlzdHMvJHtpZH1gKVxuICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGRpc3BhdGNoKHNldExvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICAgICAgZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgIGtpbmQ6ICdzdWNjZXNzJyxcbiAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgIH0pKTtcblxuICAgICAgICBpZiAoY2FsbGJhY2sgJiYgdHlwZW9mIGNhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSkuY2F0Y2goYWpheEVycm9ySGFuZGxlcihkaXNwYXRjaCkpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVG9MaXN0KGxpc3RJZCwgbW92aWVJZCkge1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVGcm9tTGlzdChsaXN0SWQsIG1vdmllSWQpIHtcblxufVxuIiwiaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcblxuaW1wb3J0IHsgU0VUX01PVklFX0RFVEFJTCB9IGZyb20gJy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0IGFqYXhFcnJvckhhbmRsZXIgZnJvbSAnLi4vLi4vbGliL2FqYXgtZXJyb3ItaGFuZGxlcic7XG5cbmV4cG9ydCBjb25zdCBzZXRNb3ZpZURldGFpbCA9IGRldGFpbCA9PiAoe1xuICB0eXBlOiBTRVRfTU9WSUVfREVUQUlMLFxuICBkZXRhaWwsXG59KTtcblxuZXhwb3J0IGNvbnN0IGdldE1vdmllRGV0YWlsID0gaWQgPT4gKGRpc3BhdGNoKSA9PiB7XG4gIGRpc3BhdGNoKHNldE1vdmllRGV0YWlsKG51bGwpKTtcblxuICBheGlvcy5nZXQoYC9hcGkvbW92aWUvJHtpZH1gKVxuICAgIC50aGVuKCh7IGRhdGEgfSkgPT4gZGlzcGF0Y2goXG4gICAgICBzZXRNb3ZpZURldGFpbChkYXRhKSxcbiAgICApKVxuICAgIC5jYXRjaChhamF4RXJyb3JIYW5kbGVyKGRpc3BhdGNoKSk7XG59O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IEFMRVJUX1RZUEVTIH0gZnJvbSAnLi4vLi4vbGliL2NvbnN0YW50cyc7XG5cbmNvbnN0IEFsZXJ0ID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBraW5kLFxuICAgIG1lc3NhZ2UsXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGlmICghc2hvdykgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7a2luZH0gdy0xMDAgdGV4dC1jZW50ZXJgfSByb2xlPVwiYWxlcnRcIj5cbiAgICAgIHttZXNzYWdlfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQWxlcnQuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxuICBraW5kOiAnaW5mbycsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihBTEVSVF9UWVBFUyksXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBBbGVydDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgJy4vQ2FzdC5zY3NzJztcblxuY29uc3QgQ2FzdCA9ICh7XG4gIGlkLFxuICBuYW1lLFxuICBjaGFyYWN0ZXIsXG4gIHByb2ZpbGVQYXRoLFxufSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNhc3RcIj5cbiAgICA8aW1nIGNsYXNzTmFtZT1cImltYWdlXCIgc3JjPXtwcm9maWxlUGF0aH0gYWx0PXtuYW1lfSAvPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FzdC1pbmZvXCI+XG4gICAgICA8c3BhbiBjbGFzc05hbWU9XCJoYXMtdGV4dC13ZWlnaHQtYm9sZFwiPntuYW1lfTwvc3Bhbj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImhhcy10ZXh0LXdlaWdodC1saWdodFwiPntjaGFyYWN0ZXJ9PC9zcGFuPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbik7XG5cbkNhc3QucHJvcFR5cGVzID0gQ2FzdFNoYXBlO1xuXG5leHBvcnQgZGVmYXVsdCBDYXN0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCB7IENhc3RTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgQ2FzdCBmcm9tICcuLi9DYXN0JztcbmltcG9ydCAnLi9DYXN0TGlzdC5zY3NzJztcblxuY29uc3QgQ2FzdExpc3QgPSAoeyBjYXN0cyB9KSA9PiB7XG4gIGNvbnN0IGNhc3RMaXN0ID0gY2FzdHMubWFwKGMgPT4gKFxuICAgIDxDYXN0XG4gICAgICBrZXk9e2MuaWR9XG4gICAgICBuYW1lPXtjLm5hbWV9XG4gICAgICBwcm9maWxlUGF0aD17Yy5wcm9maWxlUGF0aH1cbiAgICAgIGNoYXJhY3Rlcj17Yy5jaGFyYWN0ZXJ9XG4gICAgLz5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgY2FzdC1saXN0XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keVwiPlxuICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNhc3QgbGlzdDwvaDU+XG4gICAgICAgIHtjYXN0TGlzdH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2FzdExpc3QucHJvcFR5cGVzID0ge1xuICBjYXN0czogUHJvcFR5cGVzLmFycmF5T2YoQ2FzdFNoYXBlKS5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FzdExpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmltcG9ydCB7IEdlbnJlU2hhcGUsIEZpbHRlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCB7IFNPUlRfT1BUSU9OUyB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9hY3Rpb24tdHlwZXMnO1xuaW1wb3J0ICcuL0ZpbHRlci5zY3NzJztcblxuZnVuY3Rpb24gc3dpdGNoU29ydFF1ZXJ5KHNvcnRCeSkge1xuICBjb25zdCBbbmFtZSwga2luZF0gPSBzb3J0Qnkuc3BsaXQoJy4nKTtcbiAgY29uc3QgdmFsdWUgPSBgJHtuYW1lfS4ke2tpbmQgPT09ICdkZXNjJyA/ICdhc2MnIDogJ2Rlc2MnfWA7XG4gIHJldHVybiB7XG4gICAgZmllbGQ6ICdzb3J0QnknLFxuICAgIHZhbHVlLFxuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRHZW5yZUlkKHZhbHVlLCBjdXJyZW50R2VucmVzKSB7XG4gIGNvbnN0IGluZGV4ID0gY3VycmVudEdlbnJlcy5pbmRleE9mKHZhbHVlKTtcbiAgaWYgKGluZGV4ID09PSAtMSkge1xuICAgIGN1cnJlbnRHZW5yZXMucHVzaCh2YWx1ZSk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudEdlbnJlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICB9XG4gIHJldHVybiBjdXJyZW50R2VucmVzO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVDaGFuZ2VZZWFyKHllYXIsIHNldFF1ZXJ5KSB7XG4gIGlmICh5ZWFyLmxlbmd0aCA9PT0gNCAmJiAhTnVtYmVyLmlzTmFOKHllYXIpKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiB5ZWFyLFxuICAgIH0pO1xuICB9IGVsc2UgaWYgKHllYXIgPT09ICcnKSB7XG4gICAgc2V0UXVlcnkoe1xuICAgICAgZmllbGQ6ICd5ZWFyJyxcbiAgICAgIHZhbHVlOiBudWxsLFxuICAgIH0pO1xuICB9XG59XG5cbmNvbnN0IEZpbHRlciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZ2VucmVzLFxuICAgIHNldFF1ZXJ5LFxuICAgIHF1ZXJ5LFxuICAgIHNob3csXG4gIH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHNvcnRJY29uQ2xhc3MgPSBxdWVyeS5zb3J0Qnkuc3BsaXQoJy4nKVsxXSA9PT0gJ2Rlc2MnXG4gICAgPyAnZG93bidcbiAgICA6ICd1cCc7XG5cbiAgY29uc3Qgc29ydE9wdGlvbnMgPSBTT1JUX09QVElPTlMubWFwKChzb3J0KSA9PiB7XG4gICAgY29uc3Qga2V5ID0gc29ydC5uYW1lLnJlcGxhY2UoLyAvZywgJ18nKS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuICAgIHJldHVybiAoXG4gICAgICA8b3B0aW9uIGtleT17a2V5fSB2YWx1ZT17YCR7a2V5fS4ke3NvcnQudmFsdWV9YH0+XG4gICAgICAgIHtzb3J0Lm5hbWV9XG4gICAgICA8L29wdGlvbj5cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBnZW5yZU9wdGlvbnMgPSBnZW5yZXMubWFwKGcgPT4gKFxuICAgIDxvcHRpb24ga2V5PXtnLmlkfSB2YWx1ZT17Zy5pZH0gY2xhc3NOYW1lPXtxdWVyeS53aXRoR2VucmVzLmluZGV4T2YoYCR7Zy5pZH1gKSA9PT0gLTEgPyAnJyA6ICdzZWxlY3RlZCd9PlxuICAgICAge2cubmFtZX1cbiAgICA8L29wdGlvbj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBzdGlja3ktdG9wIGJnLXdoaXRlIG1iLTIgcHQtMiBzaGFkb3ctc20gZC1ub25lIGQtbGctZmxleFwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2hcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBmaWx0ZXItaW5wdXRcIlxuICAgICAgICAgIHZhbHVlPXtxdWVyeS5zZWFyY2hUZXh0fVxuICAgICAgICAgIG9uQ2hhbmdlPXskZXZlbnQgPT4gc2V0UXVlcnkoeyBmaWVsZDogJ3NlYXJjaFRleHQnLCB2YWx1ZTogJGV2ZW50LnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8c2VsZWN0XG4gICAgICAgICAgbmFtZT1cImdlbnJlXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IHNldFF1ZXJ5KHsgZmllbGQ6ICd3aXRoR2VucmVzJywgdmFsdWU6IGFkZEdlbnJlSWQoJGV2ZW50LnRhcmdldC52YWx1ZSwgcXVlcnkud2l0aEdlbnJlcykgfSl9XG4gICAgICAgID5cbiAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiXCI+R2VucmVzPC9vcHRpb24+XG4gICAgICAgICAge2dlbnJlT3B0aW9uc31cbiAgICAgICAgPC9zZWxlY3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zIG1iLTJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cFwiPlxuICAgICAgICAgIDxzZWxlY3RcbiAgICAgICAgICAgIG5hbWU9XCJzb3J0QnlcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIGZpbHRlci1pbnB1dFwiXG4gICAgICAgICAgICBpZD1cInNvcnRPcHRpb25TZWxlY3RcIlxuICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlNvcnQgb3B0aW9uc1wiXG4gICAgICAgICAgICB2YWx1ZT17cXVlcnkuc29ydEJ5fVxuICAgICAgICAgICAgb25DaGFuZ2U9eyRldmVudCA9PiBzZXRRdWVyeSh7IGZpZWxkOiAnc29ydEJ5JywgdmFsdWU6ICRldmVudC50YXJnZXQudmFsdWUgfSl9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPlNvcnQgQnk8L29wdGlvbj5cbiAgICAgICAgICAgIHtzb3J0T3B0aW9uc31cbiAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLWFwcGVuZFwiPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSBmaWx0ZXItaW5wdXQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0UXVlcnkoc3dpdGNoU29ydFF1ZXJ5KHF1ZXJ5LnNvcnRCeSkpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2Bzb3J0LWFtb3VudC0ke3NvcnRJY29uQ2xhc3N9YH0gLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJZZWFyXCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgZmlsdGVyLWlucHV0XCJcbiAgICAgICAgICBvbkNoYW5nZT17JGV2ZW50ID0+IGhhbmRsZUNoYW5nZVllYXIoJGV2ZW50LnRhcmdldC52YWx1ZSwgc2V0UXVlcnkpfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5GaWx0ZXIuZGVmYXVsdFByb3BzID0ge1xuICBzaG93OiB0cnVlLFxufTtcblxuRmlsdGVyLnByb3BUeXBlcyA9IHtcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZihHZW5yZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBxdWVyeTogRmlsdGVyU2hhcGUuaXNSZXF1aXJlZCxcbiAgc2V0UXVlcnk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRmlsdGVyO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0ICcuL0Zvb3Rlci5zY3NzJztcblxuY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICA8Zm9vdGVyIGNsYXNzTmFtZT1cImZvb3RlclwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBweS01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5BYm91dCBVczwvaDU+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBMb3JlbSBJcHN1bSBpcyBzaW1wbHkgZHVtbXkgdGV4dCBvZiB0aGUgcHJpbnRpbmcgYW5kIHR5cGVzZXR0aW5nIGluZHVzdHJ5LlxuICAgICAgICAgICAgTG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS5cbiAgICAgICAgICAgIExvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxoNT5Tb2NpYWw8L2g1PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIj5cbiAgICAgICAgICAgICAgICBmYWNlYm9va1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgdHdpdHRlclxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXN1Y2Nlc3MgYnRuLWJsb2NrXCI+XG4gICAgICAgICAgICAgICAgaW5zdGFncmFtXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiBjb2wtc20tMTIgY29sLW1kLTRcIj5cbiAgICAgICAgICA8aDU+TGFzdCBSZXZpZXdzPC9oNT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwibGlzdC11bnN0eWxlZFwiPlxuICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm1lZGlhXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYSBteS00XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVkaWEtYm9keVwiPlxuICAgICAgICAgICAgICAgIDxoNiBjbGFzc05hbWU9XCJtdC0wIG1iLTFcIj5MaXN0LWJhc2VkIG1lZGlhIG9iamVjdDwvaDY+XG4gICAgICAgICAgICAgICAgQ3JhcyBzaXQgYW1ldCBuaWJoIGxpYmVybywgaW4gZ3JhdmlkYSBudWxsYS4gTnVsbGEgdmVsIG1ldHVzLi4uXG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJtZWRpYVwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lZGlhLWJvZHlcIj5cbiAgICAgICAgICAgICAgICA8aDYgY2xhc3NOYW1lPVwibXQtMCBtYi0xXCI+TGlzdC1iYXNlZCBtZWRpYSBvYmplY3Q8L2g2PlxuICAgICAgICAgICAgICAgIENyYXMgc2l0IGFtZXQgbmliaCBsaWJlcm8sIGluIGdyYXZpZGEgbnVsbGEuIE51bGxhIHZlbCBtZXR1cy4uLlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNFwiPlxuICAgICAgICAgIDxoNT5Db250YWN0PC9oNT5cbiAgICAgICAgICA8cD4rMjU1IDAwMCAwMCAwMCAwMDwvcD5cbiAgICAgICAgICA8cD5pbmZvQHZpc3NuZS5jb208L3A+XG4gICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm10LTJcIj5MYXN0IFVwZGF0ZXM8L2g1PlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJsaXN0LWdyb3VwIGxpc3QtZ3JvdXAtZmx1c2hcIj5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5BZGQgY29tbW9uIGZpbHRlciBmb3IgbW92aWVzPC9saT5cbiAgICAgICAgICAgIDxsaSBjbGFzc05hbWU9XCJsaXN0LWdyb3VwLWl0ZW1cIj5Hb29nbGUgYXV0aCBvcHRpb25zIGlzIGNvbXBsZXRlZDwvbGk+XG4gICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwibGlzdC1ncm91cC1pdGVtXCI+Rml4ZWQgRmFjZWJvb2sgYXV0aCBpc3N1ZXM8L2xpPlxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtYi0xXCI+XG4gICAgICAgIDxzcGFuPkNvcHlyaWdodCDCqSAyMDE5IFZpc3NuZTwvc3Bhbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Zvb3Rlcj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlci1kb20nO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuY29uc3QgTWVudSA9ICh7IHBhdGgsIGl0ZW1zIH0pID0+IHtcbiAgY29uc3QgbWVudUl0ZW1zID0gaXRlbXMubWFwKG0gPT4gKFxuICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbVwiIGtleT17bS5wYXRofT5cbiAgICAgIDxMaW5rXG4gICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7bS5wYXRoID09PSBwYXRoID8gJ2FjdGl2ZScgOiAnJ31gfVxuICAgICAgICB0bz17bS5wYXRofVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e20uaWNvbn0gLz5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMlwiPnttLm5hbWV9PC9zcGFuPlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICkpO1xuXG4gIHJldHVybiAoXG4gICAgPHVsIGNsYXNzTmFtZT1cIm5hdiBuYXYtdGFicyBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+XG4gICAgICB7bWVudUl0ZW1zfVxuICAgIDwvdWw+XG4gICk7XG59O1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgcGF0aDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBpdGVtczogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBwYXRoOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gICAgaWNvbjogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICAgIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgfSkpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNZW51O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCAnLi9Nb2RhbC5zY3NzJztcblxuY29uc3QgTW9kYWwgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIHRpdGxlLFxuICAgIGNhbmNlbCxcbiAgICBzdWJtaXQsXG4gICAgY2hpbGRyZW4sXG4gICAgc2hvdyxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGNsYXNzTmFtZSA9IHNob3cgPyAnc2hvdyBkLWJsb2NrJyA6ICcnO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Btb2RhbCBmYWRlICR7Y2xhc3NOYW1lfWB9IHRhYkluZGV4PVwiLTFcIiByb2xlPVwiZGlhbG9nXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCIgZGF0YS1iYWNrZHJvcD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZGlhbG9nIG1vZGFsLWRpYWxvZy1zY3JvbGxhYmxlXCIgcm9sZT1cImRpYWxvZ1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+e3RpdGxlfTwvaDU+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17Y2FuY2VsfT5cbiAgICAgICAgICAgICAgPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtYm9keVwiPlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtZm9vdGVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJidG4gYnRuLXNlY29uZGFyeVwiIGRhdGEtZGlzbWlzcz1cIm1vZGFsXCIgb25DbGljaz17Y2FuY2VsfT5DbG9zZTwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCIgb25DbGljaz17c3VibWl0fT5TYXZlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb2RhbC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxufTtcblxuTW9kYWwucHJvcFR5cGVzID0ge1xuICB0aXRsZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjYW5jZWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2RhbDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgUG9zdGVyIGZyb20gJy4uL1Bvc3Rlcic7XG5pbXBvcnQgJy4vTW92aWVDYXJkLnNjc3MnO1xuXG5jb25zdCBNb3ZpZUNhcmQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGlkLFxuICAgIHRpdGxlLFxuICAgIGltYWdlLFxuICAgIHJhdGUsXG4gICAgc2x1ZyxcbiAgfSA9IHByb3BzO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtb3ZpZS1jYXJkIGgtMTAwIHctMTAwIHJvdW5kZWQtMCBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXIgaW1nLXRodW1ibmFpbFwiPlxuICAgICAgPExpbmsgdG89e2Btb3ZpZS8ke3NsdWd9LyR7aWR9YH0gY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYmFkZ2UgcmF0aW5nLXRhZyBzaGFkb3ctc20gZC1mbGV4IGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAge3JhdGV9XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPFBvc3RlciBzcmM9e2ltYWdlfSBhbHQ9e3RpdGxlfSAvPlxuICAgICAgPC9MaW5rPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuTW92aWVDYXJkLnByb3BUeXBlcyA9IHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcmF0ZTogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBzbHVnOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUNhcmQ7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgTW92aWVTaGFwZSB9IGZyb20gJy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5pbXBvcnQgTW92aWVDYXJkIGZyb20gJy4vTW92aWVDYXJkJztcblxuY29uc3QgTW92aWVMaXN0ID0gKHsgbW92aWVzIH0pID0+IHtcbiAgY29uc3QgbGlzdCA9IG1vdmllcy5tYXAobW92aWUgPT4gKFxuICAgIDxkaXYga2V5PXttb3ZpZS5pZH0gY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC00IGNvbC1sZy0yIG1iLTIgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgIDxNb3ZpZUNhcmRcbiAgICAgICAgaWQ9e21vdmllLmlkfVxuICAgICAgICBpbWFnZT17bW92aWUucG9zdGVyfVxuICAgICAgICB0aXRsZT17bW92aWUudGl0bGV9XG4gICAgICAgIHJhdGU9e21vdmllLnZvdGVBdmVyYWdlfVxuICAgICAgICBzbHVnPXttb3ZpZS5zbHVnfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAge2xpc3R9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Nb3ZpZUxpc3QucHJvcFR5cGVzID0ge1xuICBtb3ZpZXM6IFByb3BUeXBlcy5hcnJheU9mKE1vdmllU2hhcGUpLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb3ZpZUxpc3Q7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QsIHsgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyLWRvbSc7XG5pbXBvcnQgeyBGb250QXdlc29tZUljb24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvcmVhY3QtZm9udGF3ZXNvbWUnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgVXNlclNoYXBlIH0gZnJvbSAnLi4vLi4vY29uc3RhbnRzL3Byb3Atc2hhcGVzJztcbmltcG9ydCAnLi9OYXZiYXIuc2Nzcyc7XG5cbmNvbnN0IE5hdmJhciA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgdXNlcixcbiAgICBpc0xvZ2dlZEluLFxuICAgIHBhdGhOYW1lLFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgbG9naW5CdXR0b24gPSBpc0xvZ2dlZEluID8gKFxuICAgIDxGcmFnbWVudD5cbiAgICAgIDxsaSBjbGFzc05hbWU9XCJuYXYtaXRlbSBcIj5cbiAgICAgICAgPExpbmsgY2xhc3NOYW1lPVwibmF2LWxpbmtcIiB0bz1cIi9wcm9maWxlL2FjY291bnRcIiB0aXRsZT1cIlByb2ZpbGVcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtci0yXCI+e3VzZXIudXNlck5hbWV9PC9zcGFuPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInVzZXJcIiAvPlxuICAgICAgICA8L0xpbms+XG4gICAgICA8L2xpPlxuICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCIgaHJlZj1cIi9sb2dvdXRcIiB0aXRsZT1cIkxvZ291dFwiPlxuICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cInNpZ24tb3V0LWFsdFwiIC8+XG4gICAgICAgIDwvYT5cbiAgICAgIDwvbGk+XG4gICAgPC9GcmFnbWVudD5cbiAgKSA6IChcbiAgICA8bGkgY2xhc3NOYW1lPVwibmF2LWl0ZW1cIj5cbiAgICAgIDxMaW5rIHRvPVwiL2F1dGhcIiBjbGFzc05hbWU9XCJuYXYtbGlua1wiPmxvZ2luPC9MaW5rPlxuICAgIDwvbGk+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8bmF2IGNsYXNzTmFtZT1cIm5hdmJhciBuYXZiYXItZXhwYW5kLWxnIG5hdmJhci1kYXJrIGJnLWRhcmtcIj5cbiAgICAgIDxMaW5rIGNsYXNzTmFtZT1cIm5hdmJhci1icmFuZFwiIHRvPVwiL1wiPlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPXtgJHt2aXNzbmUuY2RufS9pbWFnZXMvbG9nby5wbmdgfVxuICAgICAgICAgIGFsdD1cIlZpc3NuZVwiXG4gICAgICAgICAgaGVpZ2h0PVwiMzBcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cIm14LWF1dG8gZC1ibG9ja1wiXG4gICAgICAgIC8+XG4gICAgICA8L0xpbms+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgaWQ9XCJmaWx0ZXJCdXR0b25cIlxuICAgICAgICA+XG4gICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZmlsdGVyXCIgLz5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJuYXZiYXItdG9nZ2xlclwiXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXG4gICAgICAgICAgZGF0YS10YXJnZXQ9XCIjbmF2YmFyU3VwcG9ydGVkQ29udGVudFwiXG4gICAgICAgICAgYXJpYS1jb250cm9scz1cIm5hdmJhclN1cHBvcnRlZENvbnRlbnRcIlxuICAgICAgICAgIGFyaWEtZXhwYW5kZWQ9XCJmYWxzZVwiXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIlRvZ2dsZSBuYXZpZ2F0aW9uXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm5hdmJhci10b2dnbGVyLWljb25cIiAvPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbGxhcHNlIG5hdmJhci1jb2xsYXBzZVwiIGlkPVwibmF2YmFyU3VwcG9ydGVkQ29udGVudFwiPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBtci1hdXRvXCI+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2luLXRoZWF0ZXJzJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvaW4tdGhlYXRlcnNcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBpbiB0aGVhdGVyc1xuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCI+XG4gICAgICAgICAgICA8TGlua1xuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BuYXYtbGluayAke3BhdGhOYW1lID09PSAnL2NvbWluZy1zb29uJyA/ICdhY3RpdmUnIDogJyd9YH1cbiAgICAgICAgICAgICAgdG89XCIvY29taW5nLXNvb25cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBjb21pbmcgc29vbmdcbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgICA8dWwgY2xhc3NOYW1lPVwibmF2YmFyLW5hdiBteS1hdXRvXCI+XG4gICAgICAgICAge2xvZ2luQnV0dG9ufVxuICAgICAgICA8L3VsPlxuICAgICAgPC9kaXY+XG4gICAgPC9uYXY+XG4gICk7XG59O1xuXG5OYXZiYXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgdXNlcjoge30sXG4gIHBhdGhOYW1lOiAnLycsXG59O1xuXG5OYXZiYXIucHJvcFR5cGVzID0ge1xuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgdXNlcjogVXNlclNoYXBlLFxuICBwYXRoTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCAnLi9Ob3RGb3VuZC5zY3NzJztcblxuY29uc3QgTm90Rm91bmQgPSAoKSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicGFnZS1ub3QtZm91bmRcIj5cbiAgICA8aW1nIHNyYz17YCR7dmlzc25lLmNkbn0vaW1hZ2VzL29uZy5wbmdgfSBhbHQ9XCI0MDRcIiAvPlxuICAgIDxoND40MDQ8L2g0PlxuICAgIDxoNT5QYWdlIG5vdCBmb3VuZDwvaDU+XG4gICAgPHA+XG4gICAgICBXZSBhcmUgc29ycnkuIFRoZSBwYWdlIHlvdSBhcmUgbG9va2luZyBmb3Igd2FzIG1vdmVkLCByZW1vdmVkLCByZW5hbWVkIG9yIG1pZ2h0IG5ldmVyIGV4aXN0ZWQuXG4gICAgPC9wPlxuICAgIDxhIGhyZWY9XCIvXCIgY2xhc3NOYW1lPVwiYnV0dG9uIGlzLXByaW1hcnlcIj5HTyBUTyBIT01FPC9hPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5vdEZvdW5kO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBTcGlubmVyIGZyb20gJy4vU3Bpbm5lcic7XG5cbmNvbnN0IFBhZ2VMb2FkaW5nID0gKHsgc2hvdyB9KSA9PiB7XG4gIGlmICghc2hvdykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLWZpeGVkIHRvcC0wIGxlZnQtMCBib3R0b20tMCBiZy1saWdodCBkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBhbGlnbi1pdGVtcy1jZW50ZXIgdy0xMDAgaC0xMDBcIj5cbiAgICAgIDxTcGlubmVyIHNob3cgc2l6ZT1cImxnXCIgYWRkaW9uYWxDbGFzcz1cIm1yLTJcIiAvPlxuICAgICAgTG9hZGluZy4uLlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuUGFnZUxvYWRpbmcucHJvcFR5cGVzID0ge1xuICBzaG93OiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnZUxvYWRpbmc7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCB7IEZvbnRBd2Vzb21lSWNvbiB9IGZyb20gJ0Bmb3J0YXdlc29tZS9yZWFjdC1mb250YXdlc29tZSc7XG5cbmNvbnN0IGhhbmRsZUNsaWNrID0gKHBhZ2UsIGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2UpID0+IHtcbiAgbGV0IHJlc3VsdCA9IDE7XG5cbiAgaWYgKE51bWJlci5pc0ludGVnZXIocGFnZSkpIHtcbiAgICByZXR1cm4geyBwYWdlIH07XG4gIH1cblxuICBpZiAocGFnZSA9PT0gJ3ByZXYnKSB7XG4gICAgY29uc3QgbmV3UGFnZSA9IChjdXJyZW50UGFnZSAtIDEpO1xuICAgIHJlc3VsdCA9IG5ld1BhZ2UgPT09IDAgPyAxIDogbmV3UGFnZTtcbiAgfSBlbHNlIGlmIChwYWdlID09PSAnbmV4dCcpIHtcbiAgICByZXN1bHQgPSAoKGN1cnJlbnRQYWdlICsgMSkgPiB0b3RhbFBhZ2UpXG4gICAgICA/IHRvdGFsUGFnZVxuICAgICAgOiAoY3VycmVudFBhZ2UgKyAxKTtcbiAgfVxuXG4gIHJldHVybiB7IHBhZ2U6IHJlc3VsdCB9O1xufTtcblxuY29uc3QgZ2VuZXJhdGVQYWdlTnVtYmVycyA9IChvcHRpb25zKSA9PiB7XG4gIGNvbnN0IHtcbiAgICBwYWdlLFxuICAgIGxpbWl0LFxuICAgIHRvdGFsLFxuICAgIGJ1dHRvbkNvdW50LFxuICB9ID0gb3B0aW9ucztcbiAgY29uc3QgcGFnZU51bWJlcnMgPSBbXTtcbiAgY29uc3QgdG90YWxQYWdlID0gTWF0aC5mbG9vcih0b3RhbCAvIGxpbWl0KTtcbiAgY29uc3QgYmMgPSBNYXRoLmNlaWwoYnV0dG9uQ291bnQgLyAyKTtcblxuICBmb3IgKGxldCBpID0gKHBhZ2UgLSAoYmMgLSAxKSk7IGkgPCAocGFnZSArIGJjKTsgaSArPSAxKSB7XG4gICAgaWYgKGkgPiAwICYmIGkgPD0gdG90YWxQYWdlKSB7XG4gICAgICBwYWdlTnVtYmVycy5wdXNoKGkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwYWdlTnVtYmVycztcbn07XG5cblxuY29uc3QgUGFnaW5hdGlvbiA9ICh7IG9wdGlvbnMgfSkgPT4ge1xuICBjb25zdCB7IHBhZ2UsIG9uUGFnaW5hdGUsIGxpbWl0LCB0b3RhbCB9ID0gb3B0aW9ucztcblxuICBjb25zdCBwYWdlTnVtYmVycyA9IGdlbmVyYXRlUGFnZU51bWJlcnMob3B0aW9ucyk7XG4gIGNvbnN0IHRvdGFsUGFnZSA9IE1hdGguZmxvb3IodG90YWwgLyBsaW1pdCk7XG5cbiAgaWYgKHBhZ2VOdW1iZXJzLmxlbmd0aCA8IDIpIHtcbiAgICByZXR1cm4gPHNwYW4gLz47XG4gIH1cblxuICBjb25zdCBwYWdlQnV0dG9ucyA9IHBhZ2VOdW1iZXJzLm1hcChwbiA9PiAoXG4gICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAgJHtwbiA9PT0gcGFnZSA/ICdhY3RpdmUnIDogJyd9YH0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gKHBuICE9PSBwYWdlID8gb25QYWdpbmF0ZShoYW5kbGVDbGljayhwbikpIDogJycpfVxuICAgICAgPlxuICAgICAgICB7cG59XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2xpPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxuYXYgYXJpYS1sYWJlbD1cIlBhZ2luYXRpb25cIj5cbiAgICAgIDx1bCBjbGFzc05hbWU9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e2BwYWdlLWl0ZW0gJHtwYWdlID09PSAxID8gJ2Rpc2FibGVkJyA6ICcnfWB9PlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInBhZ2UtbGluayByb3VuZGVkLTBcIlxuICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBvblBhZ2luYXRlKGhhbmRsZUNsaWNrKCdwcmV2JywgcGFnZSkpfVxuICAgICAgICAgICAgZGlzYWJsZWQ9e3BhZ2UgPT09IDF9XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYW5nbGUtbGVmdFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICAgIHtwYWdlQnV0dG9uc31cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17YHBhZ2UtaXRlbSAke3BhZ2UgPT09IHRvdGFsUGFnZSA/ICdkaXNhYmxlZCcgOiAnJ31gfT5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJwYWdlLWxpbmsgcm91bmRlZC0wXCJcbiAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gb25QYWdpbmF0ZShoYW5kbGVDbGljaygnbmV4dCcsIHBhZ2UpKX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJhbmdsZS1yaWdodFwiIC8+XG4gICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvbmF2PlxuICApO1xufTtcblxuUGFnaW5hdGlvbi5kZWZhdWx0UHJvcHMgPSB7XG4gIG9wdGlvbnM6IHtcbiAgICBidXR0b25Db3VudDogMyxcbiAgICB0b3RhbDogMCxcbiAgICBwYWdlOiAxLFxuICAgIGxpbWl0OiAxMCxcbiAgfSxcbn07XG5cblBhZ2luYXRpb24ucHJvcFR5cGVzID0ge1xuICBvcHRpb25zOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHRvdGFsOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGxpbWl0OiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIHBhZ2U6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgb25QYWdpbmF0ZTogUHJvcFR5cGVzLmZ1bmMsXG4gICAgYnV0dG9uQ291bnQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUGFnaW5hdGlvbjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5mdW5jdGlvbiBpbWFnZU9uTG9hZCgpIHtcblxufVxuXG5mdW5jdGlvbiBpbWFnZU9uRXJyb3IoKSB7XG4gIHRoaXMuc3JjID0gdmlzc25lLmRlZmF1bHRDb3ZlckltYWdlUGF0aDtcbn1cblxuY29uc3QgUG9zdGVyID0gKHsgc3JjLCBhbHQgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImgtMTAwIHctMTAwIGQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXIganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgIDxpbWdcbiAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXG4gICAgICBzcmM9e2Ake3NyY31gfVxuICAgICAgb25Mb2FkPXtpbWFnZU9uTG9hZH1cbiAgICAgIG9uRXJyb3I9e2ltYWdlT25FcnJvcn1cbiAgICAgIGFsdD17YWx0fVxuICAgIC8+XG4gIDwvZGl2PlxuKTtcblxuUG9zdGVyLnByb3BUeXBlcyA9IHtcbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdGVyO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51JztcbmltcG9ydCBQYWdlTG9hZGluZyBmcm9tICcuL1BhZ2VMb2FkaW5nJztcbmltcG9ydCBwcm9maWxlTWVudSBmcm9tICcuLi9jb25zdGFudHMvcHJvZmlsZS1tZW51JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvZmlsZUNvbnRhaW5lcihwcm9wcykge1xuICBjb25zdCB7IGNoaWxkcmVuLCBwYXRoLCBwYWdlTG9hZGluZywgdXNlciB9ID0gcHJvcHM7XG5cbiAgaWYgKHBhZ2VMb2FkaW5nKSB7XG4gICAgcmV0dXJuIDxQYWdlTG9hZGluZyBzaG93IC8+O1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc2l0aW9uLXJlbGF0aXZlXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWxpbmsgcm91bmRlZC1jaXJjbGUgYXZhdGFyLWJ1dHRvblwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICBzcmM9e3VzZXIuYXZhdGFyIHx8IGAke3Zpc3NuZS5jZG59L3Vjb250ZW50L2F2YXRhci9kZWZhdWx0LWF2YXRhci5qcGdgfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZCByb3VuZGVkLWNpcmNsZSBib3JkZXIgYXZhdGFyXCJcbiAgICAgICAgICAgICAgICBhbHQ9XCJBdmF0YXJcIlxuICAgICAgICAgICAgICAgIGlkPVwiYXZhdGFyXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cbiAgICAgICAgICA8aDU+e2BAJHt1c2VyLnVzZXJOYW1lfWB9PC9oNT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxNZW51IGl0ZW1zPXtwcm9maWxlTWVudX0gcGF0aD17cGF0aH0gLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sXCI+XG4gICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmNvbnN0IFByb2dyZXNzQmFyID0gKHByb3BzKSA9PiB7XG4gIGNvbnN0IHsgc2hvdywgaGVpZ2h0IH0gPSBwcm9wcztcblxuICBpZiAoIXNob3cpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9ncmVzc1wiIHN0eWxlPXt7IGhlaWdodDogYCR7aGVpZ2h0fXB4YCB9fT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPVwicHJvZ3Jlc3MtYmFyIHByb2dyZXNzLWJhci1zdHJpcGVkIHByb2dyZXNzLWJhci1hbmltYXRlZFwiXG4gICAgICAgIHJvbGU9XCJwcm9ncmVzc2JhclwiXG4gICAgICAgIGFyaWEtdmFsdWVub3c9XCI3NVwiXG4gICAgICAgIGFyaWEtdmFsdWVtaW49XCIwXCJcbiAgICAgICAgYXJpYS12YWx1ZW1heD1cIjEwMFwiXG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnMTAwJScgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5Qcm9ncmVzc0Jhci5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBoZWlnaHQ6IDIsXG59O1xuXG5Qcm9ncmVzc0Jhci5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9ncmVzc0JhcjtcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTcGlubmVyKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzaG93LFxuICAgIHNpemUsXG4gICAga2luZCxcbiAgICBjb2xvcixcbiAgICBhZGRpb25hbENsYXNzLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgc3Bpbm5lci0ke2tpbmR9IHNwaW5uZXItJHtraW5kfS0ke3NpemV9IHRleHQtJHtjb2xvcn0gJHthZGRpb25hbENsYXNzfWB9IHJvbGU9XCJzdGF0dXNcIj5cbiAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5TcGlubmVyLmRlZmF1bHRQcm9wcyA9IHtcbiAgc2hvdzogZmFsc2UsXG4gIHNpemU6ICdzbScsXG4gIGtpbmQ6ICdncm93JyxcbiAgY29sb3I6ICdwcmltYXJ5JyxcbiAgYWRkaW9uYWxDbGFzczogJycsXG59O1xuXG5TcGlubmVyLnByb3BUeXBlcyA9IHtcbiAgc2hvdzogUHJvcFR5cGVzLmJvb2wsXG4gIGFkZGlvbmFsQ2xhc3M6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3NtJyxcbiAgICAnbWQnLFxuICAgICdsZycsXG4gICAgJ3hsJyxcbiAgXSksXG4gIGtpbmQ6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ2JvcmRlcicsXG4gICAgJ2dyb3cnLFxuICBdKSxcbiAgY29sb3I6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgJ3ByaW1hcnknLFxuICAgICdzZWNvbmRhcnknLFxuICAgICdzdWNjZXNzJyxcbiAgICAnZGFuZ2VyJyxcbiAgICAnd2FybmluZycsXG4gICAgJ2luZm8nLFxuICAgICdsaWdodCcsXG4gICAgJ2RhcmsnLFxuICBdKSxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4uL1BhZ2luYXRpb24nO1xuaW1wb3J0IEFsZXJ0IGZyb20gJy4uL0FsZXJ0JztcbmltcG9ydCAnLi9UYWJsZUxpc3Quc2Nzcyc7XG5cbmNvbnN0IGNyZWF0ZUhlYWRlciA9IChmaWVsZHMpID0+IHtcbiAgY29uc3QgdmlzaWJsZUZpZWxkcyA9IGZpZWxkc1xuICAgIC5maWx0ZXIoZiA9PiAhZi5oaWRkZW4pXG4gICAgLm1hcChmID0+IDx0aCBzY29wZT1cImNvbFwiPntmLnRpdGxlfTwvdGg+KTtcblxuICByZXR1cm4gPHRyPnt2aXNpYmxlRmllbGRzfTwvdHI+O1xufTtcblxuY29uc3QgY3JlYXRlQm9keSA9IChkYXRhLCBmaWVsZHMsIHNlbGVjdGVkLCBvblNlbGVjdCkgPT4ge1xuICBjb25zdCB0Ym9keSA9IFtdO1xuXG4gIGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGNvbnN0IGl0ZW1GaWVsZHMgPSBbXTtcblxuICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgaWYgKGZpZWxkLmhpZGRlbikge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cblxuICAgICAgY29uc3QgdiA9IGl0ZW1bZmllbGQubmFtZV07XG4gICAgICBjb25zdCB2YWx1ZSA9IGZpZWxkLmZvcm1hdFxuICAgICAgICA/IGZpZWxkLmZvcm1hdCh2KVxuICAgICAgICA6IHYudG9TdHJpbmcoKTtcblxuICAgICAgaXRlbUZpZWxkcy5wdXNoKDx0ZD57dmFsdWV9PC90ZD4pO1xuICAgIH0pO1xuXG4gICAgdGJvZHkucHVzaChcbiAgICAgIDx0ciBjbGFzc05hbWU9e2Ake2l0ZW0uaWQgPT09IHNlbGVjdGVkLmlkID8gJ3NlbGVjdGVkJyA6ICcnfWB9IG9uQ2xpY2s9eygpID0+IG9uU2VsZWN0KGl0ZW0pfT5cbiAgICAgICAge2l0ZW1GaWVsZHN9XG4gICAgICA8L3RyPixcbiAgICApO1xuICB9KTtcblxuICByZXR1cm4gdGJvZHk7XG59O1xuXG5jb25zdCBjcmVhdGVQYWdpbmF0aW9uID0gKG9wdGlvbnMsIGRhdGFMZW5ndGgpID0+IHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCI+XG4gICAgICA8UGFnaW5hdGlvbiBvcHRpb25zPXtvcHRpb25zfSAvPlxuICAgICAgPHNwYW4+e2BTaG93ICR7ZGF0YUxlbmd0aH0gcmVzdWx0IG9mICR7b3B0aW9ucy50b3RhbH1gfTwvc3Bhbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmNvbnN0IFRhYmxlTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zdCB7XG4gICAgZGF0YSxcbiAgICBzZWxlY3RlZCxcbiAgICBmaWVsZHMsXG4gICAgcGFnaW5hdGlvbixcbiAgICByZXNwb25zaXZlLFxuICAgIG9uQ3JlYXRlLFxuICAgIG9uRWRpdCxcbiAgICBvbkRlbGV0ZSxcbiAgICBvblNlbGVjdCxcbiAgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGJ0bkdyb3VwID0gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYnRuLWdyb3VwIHctMTAwICR7KCFvbkNyZWF0ZSAmJiAhb25FZGl0ICYmICFvbkRlbGV0ZSkgPyAnZC1ub25lJyA6ICcnfWB9IHJvbGU9XCJncm91cFwiIGFyaWEtbGFiZWw9XCJjcnVkXCI+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25DcmVhdGUgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uQ3JlYXRlfVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJwbHVzLXNxdWFyZVwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5DcmVhdGU8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tc2Vjb25kYXJ5IHJvdW5kZWQtMCBidG4tc20gJHtvbkVkaXQgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uRWRpdH1cbiAgICAgID5cbiAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiZWRpdFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5FZGl0PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBjbGFzc05hbWU9e2BidG4gYnRuLXNlY29uZGFyeSByb3VuZGVkLTAgYnRuLXNtICR7b25EZWxldGUgPyAnJyA6ICdkLW5vbmUnfWB9XG4gICAgICAgIG9uQ2xpY2s9e29uRGVsZXRlfVxuICAgICAgPlxuICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ0cmFzaFwiIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTFcIj5EZWxldGU8L3NwYW4+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuICBpZiAoIWRhdGEgfHwgZGF0YS5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgIDxBbGVydCBtZXNzYWdlPVwiVGhlcmUgd2VyZSBubyByZXN1bHQuXCIga2luZD1cIndhcm5pbmdcIiAvPlxuICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25DcmVhdGV9IGNsYXNzTmFtZT17YGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IHctMTAwICR7b25DcmVhdGUgPyAnJyA6ICdkLWJsb2NrJ31gfSB0eXBlPVwiYnV0dG9uXCI+XG4gICAgICAgICAgICBBZGRcbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG5cbiAgY29uc3QgaGVhZHMgPSBjcmVhdGVIZWFkZXIoZmllbGRzKTtcbiAgY29uc3QgYm9keSA9IGNyZWF0ZUJvZHkoZGF0YSwgZmllbGRzLCBzZWxlY3RlZCwgb25TZWxlY3QpO1xuICBjb25zdCBwYWdpbmF0aW9uQnV0dG9ucyA9IGNyZWF0ZVBhZ2luYXRpb24ocGFnaW5hdGlvbiwgZGF0YS5sZW5ndGgpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgbXQtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAge2J0bkdyb3VwfVxuICAgICAgICA8dGFibGUgY2xhc3NOYW1lPXtgdGFibGUgdi10YWJsZSAke3Jlc3BvbnNpdmUgPyAndGFibGUtcmVzcG9uc2l2ZScgOiAnJ31gfT5cbiAgICAgICAgICA8dGhlYWQ+XG4gICAgICAgICAgICB7aGVhZHN9XG4gICAgICAgICAgPC90aGVhZD5cbiAgICAgICAgICA8dGJvZHk+XG4gICAgICAgICAgICB7Ym9keX1cbiAgICAgICAgICA8L3Rib2R5PlxuICAgICAgICA8L3RhYmxlPlxuICAgICAgICB7cGFnaW5hdGlvbkJ1dHRvbnN9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cblRhYmxlTGlzdC5kZWZhdWx0UHJvcHMgPSB7XG4gIGRhdGE6IFtdLFxuICBzZWxlY3RlZDoge30sXG4gIGZpZWxkczogW10sXG59O1xuXG5UYWJsZUxpc3QucHJvcFR5cGVzID0ge1xuICBkYXRhOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihBcnJheSksXG4gIHNlbGVjdGVkOiBQcm9wVHlwZXMuaW5zdGFuY2VPZihPYmplY3QpLFxuICBmaWVsZHM6IFByb3BUeXBlcy5pbnN0YW5jZU9mKEFycmF5KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRhYmxlTGlzdDtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgJy4vVmlkZW8uc2Nzcyc7XG5cbmNvbnN0IFZpZGVvID0gKHsgdmlkZW9LZXkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInZpZGVvIG1iLTIgZW1iZWQtcmVzcG9uc2l2ZSBlbWJlZC1yZXNwb25zaXZlLTE2Ynk5XCI+XG4gICAgPGlmcmFtZVxuICAgICAgY2xhc3NOYW1lPVwiZW1iZWQtcmVzcG9uc2l2ZS1pdGVtXCJcbiAgICAgIHRpdGxlPVwiVmlkZW9cIlxuICAgICAgdHlwZT1cInRleHQvaHRtbFwiXG4gICAgICB3aWR0aD1cIjY0MFwiXG4gICAgICBoZWlnaHQ9XCIzNjBcIlxuICAgICAgc3JjPXtgaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvJHt2aWRlb0tleX0/YXV0b3BsYXk9MCZvcmlnaW49JHt2aXNzbmUuZG9tYWlufWB9XG4gICAgICBmcmFtZUJvcmRlcj1cIjBcIlxuICAgICAgYWxsb3dGdWxsU2NyZWVuXG4gICAgLz5cbiAgPC9kaXY+XG4pO1xuXG5WaWRlby5wcm9wVHlwZXMgPSB7XG4gIHZpZGVvS2V5OiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiIsIi8vIGNvbW1vblxuZXhwb3J0IGNvbnN0IExPQURJTkcgPSAnTE9BRElORyc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0FMRVJUID0gJ1RPR0dMRV9BTEVSVCc7XG5leHBvcnQgY29uc3QgVE9HR0xFX0ZJTFRFUiA9ICdUT0dHTEVfRklMVEVSJztcblxuLy8gYXV0aFxuZXhwb3J0IGNvbnN0IFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTID0gJ1NFVF9QQUdFX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBTRVRfTE9BRElOR19TVEFUVVMgPSAnU0VUX0xPQURJTkdfU1RBVFVTJztcbmV4cG9ydCBjb25zdCBSRUdJU1RFUiA9ICdSRUdJU1RFUic7XG5leHBvcnQgY29uc3QgU0VUX1VTRVIgPSAnU0VUX1VTRVInO1xuXG4vLyBkaXNjb3ZlclxuZXhwb3J0IGNvbnN0IEdFVF9NT1ZJRVMgPSAnR0VUX01PVklFUyc7XG5leHBvcnQgY29uc3QgU0VUX01PVklFUyA9ICdTRVRfTU9WSUVTJztcbmV4cG9ydCBjb25zdCBTRVRfR0VOUkVTID0gJ1NFVF9HRU5SRVMnO1xuZXhwb3J0IGNvbnN0IFNFVF9RVUVSWSA9ICdTRVRfUVVFUlknO1xuXG4vLyBsaXN0c1xuZXhwb3J0IGNvbnN0IEdFVF9MSVNUU19CWV9DVVJSRU5UX1VTRVIgPSAnR0VUX0xJU1RTX0JZX0NVUlJFTlRfVVNFUic7XG5leHBvcnQgY29uc3QgQ1JFQVRFX0xJU1QgPSAnQ1JFQVRFX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9MSVNUID0gJ0RFTEVURV9MSVNUUyc7XG5leHBvcnQgY29uc3QgQUREX1RPX0xJU1QgPSAnQUREX1RPX0xJU1QnO1xuZXhwb3J0IGNvbnN0IERFTEVURV9GUk9NX0xJU1QgPSAnREVMRVRFX0ZST01fTElTVCc7XG5leHBvcnQgY29uc3QgU0VUX0xJU1RTID0gJ1NFVF9MSVNUUyc7XG5cbi8vIG1vdmllIGRldGFpbFxuZXhwb3J0IGNvbnN0IFNFVF9NT1ZJRV9ERVRBSUwgPSAnU0VUX01PVklFX0RFVEFJTCc7XG5cbi8vIHByb2ZpbGVcbi8vICAtLSBBY2NvdW50XG5leHBvcnQgY29uc3QgU0VUX0FDQ09VTlRfREVUQUlMID0gJ1NFVF9BQ0NPVU5UX0RFVEFJTCc7XG5leHBvcnQgY29uc3QgU0VUX1VQTE9BREVEX0lNQUdFID0gJ1NFVF9VUExPQURFRF9JTUFHRSc7XG5cbi8vIGNvbnN0YW50c1xuZXhwb3J0IGNvbnN0IFNPUlRfT1BUSU9OUyA9IFt7XG4gIG5hbWU6ICdQb3B1bGFyaXR5JyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1JlbGVhc2UgRGF0ZScsXG4gIHZhbHVlOiAnZGVzYycsXG59LCB7XG4gIG5hbWU6ICdSZXZlbnVlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ByaW1hcnkgUmVsZWFzZSBEYXRlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ09yZ2luYWwgVGl0bGUnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufSwge1xuICBuYW1lOiAnVm90ZSBBdmVyYWdlJyxcbiAgdmFsdWU6ICdkZXNjJyxcbn0sIHtcbiAgbmFtZTogJ1ZvdGUgQ291bnQnLFxuICB2YWx1ZTogJ2Rlc2MnLFxufV07XG4iLCJjb25zdCBwcm9maWxlTWVudSA9IFtcbiAge1xuICAgIG5hbWU6ICdBY2NvdW50JyxcbiAgICBpY29uOiAndXNlcicsXG4gICAgcGF0aDogJy9wcm9maWxlL2FjY291bnQnLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ0xpc3RzJyxcbiAgICBpY29uOiAnbGlzdCcsXG4gICAgcGF0aDogJy9wcm9maWxlL2xpc3RzJyxcbiAgfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGYXZvcml0ZXMnLFxuICAvLyAgIGljb246ICdoZWFydCcsXG4gIC8vICAgcGF0aDogJy9wcm9maWxlL2Zhdm9yaXRlcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnQ29tbWVudHMnLFxuICAvLyAgIGljb246ICdjb21tZW50JyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvY29tbWVudHMnLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgbmFtZTogJ1Jldmlld3MnLFxuICAvLyAgIGljb246ICduZXdzcGFwZXInLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9yZXZpZXdzJyxcbiAgLy8gfSxcbiAgLy8ge1xuICAvLyAgIG5hbWU6ICdGcmllbmRzJyxcbiAgLy8gICBpY29uOiAndXNlci1mcmllbmRzJyxcbiAgLy8gICBwYXRoOiAnL3Byb2ZpbGUvZnJpZW5kcycsXG4gIC8vIH0sXG4gIC8vIHtcbiAgLy8gICBuYW1lOiAnU2V0dGluZ3MnLFxuICAvLyAgIGljb246ICdjb2cnLFxuICAvLyAgIHBhdGg6ICcvcHJvZmlsZS9zZXR0aW5ncycsXG4gIC8vIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBwcm9maWxlTWVudTtcbiIsImltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmV4cG9ydCBjb25zdCBVc2VyU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlcixcbiAgZmlyc3ROYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYXN0TmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgZW1haWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGZ1bGxOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBhdmF0YXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHVzZXJOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBNb3ZpZVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgdGl0bGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG9yZ2luYWxUaXRsZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgeWVhcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgdm90ZV9jb3VudDogUHJvcFR5cGVzLm51bWJlcixcbiAgdm90ZV9hdmVyYWdlOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWxlYXNlX2RhdGU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGdlbnJlTmFtZXM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhvbWVwYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0YWdsaW5lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBsYW5ndWFnZTogUHJvcFR5cGVzLnN0cmluZyxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ2FzdFNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIuaXNSZXF1aXJlZCxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBjaGFyYWN0ZXI6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbiAgcHJvZmlsZVBhdGg6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcbn0pO1xuXG5leHBvcnQgY29uc3QgQ29tcGFueVNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgaWQ6IFByb3BUeXBlcy5udW1iZXIsXG4gIGxvZ286IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59KTtcblxuZXhwb3J0IGNvbnN0IEdlbnJlU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IG1hdGNoU2hhcGUgPSBQcm9wVHlwZXMuc2hhcGUoe1xuICBpZDogUHJvcFR5cGVzLm51bWJlci5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXG59KTtcblxuZXhwb3J0IGNvbnN0IEZpbHRlclNoYXBlID0gUHJvcFR5cGVzLnNoYXBlKHtcbiAgc29ydDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2VhcmNoVGV4dDogUHJvcFR5cGVzLnN0cmluZyxcbiAgZ2VucmVzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNyZXdzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIGNhc3RzOiBQcm9wVHlwZXMuYXJyYXlPZi5zdHJpbmcsXG4gIHZvdGVBdmVyYWdlOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIGx0ZTogUHJvcFR5cGVzLm51bWJlcixcbiAgICBndGU6IFByb3BUeXBlcy5udW1iZXIsXG4gIH0pLFxuICByZWxlYXNlWWVhcjogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBsdGU6IFByb3BUeXBlcy5udW1iZXIsXG4gICAgZ3RlOiBQcm9wVHlwZXMubnVtYmVyLFxuICB9KSxcbn0pO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgeyBVc2VyU2hhcGUsIG1hdGNoU2hhcGUgfSBmcm9tICcuLi8uLi9jb25zdGFudHMvcHJvcC1zaGFwZXMnO1xuaW1wb3J0IFNwaW5uZXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9TcGlubmVyJztcbmltcG9ydCAnLi9BY2NvdW50LnNjc3MnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBY2NvdW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICBwcm9wcy5zZXRQYWdlTG9hZGluZ1N0YXR1cyh0cnVlKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgICB1c2VyRm9ybToge30sXG4gICAgICBwYXNzd29yZDoge30sXG4gICAgICB2YWxpZGF0aW9uOiB7XG4gICAgICAgIHVzZXJOYW1lOiB7fSxcbiAgICAgICAgZW1haWw6IHt9LFxuICAgICAgICBvbGRQYXNzd29yZDoge30sXG4gICAgICAgIG5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgY29uZmlybU5ld1Bhc3N3b3JkOiB7fSxcbiAgICAgICAgZmlyc3ROYW1lOiB7fSxcbiAgICAgICAgbGFzdE5hbWU6IHt9LFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgdGhpcy5oYW5kbGVDaGFuZ2UgPSB0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuY2hhbmdlUGFzc3dvcmQgPSB0aGlzLmNoYW5nZVBhc3N3b3JkLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IGdldEFjY291bnREZXRhaWwgfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0sIGZpZWxkKSB7XG4gICAgY29uc3QgeyB2YWx1ZSwgbmFtZSB9ID0gdGFyZ2V0O1xuICAgIGNvbnN0IHsgc3RhdGUgfSA9IHRoaXM7XG4gICAgc3RhdGVbZmllbGRdW25hbWVdID0gdmFsdWU7XG4gICAgdGhpcy5zdGF0ZSA9IHN0YXRlO1xuICAgIHRoaXMuZm9yY2VVcGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZVBhc3N3b3JkKCkge1xuICAgIGNvbnN0IHsgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyB0b2dnbGVBbGVydERpYWxvZywgY2hhbmdlUGFzc3dvcmQgfSA9IHRoaXMucHJvcHM7XG5cbiAgICBpZiAocGFzc3dvcmQubmV3UGFzc3dvcmQgIT09IHBhc3N3b3JkLmNvbmZpcm1OZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZHMgZG9uXFwndCBtYXRjaC4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHBhc3N3b3JkLm9sZFBhc3N3b3JkID09PSBwYXNzd29yZC5uZXdQYXNzd29yZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgIG1lc3NhZ2U6ICdQYXNzd29yZCBjYW5ub3QgYmUgdGhlIHNhbWUgd2l0aCBvbGQgcGFzc3dvcmQuJyxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoYW5nZVBhc3N3b3JkKHBhc3N3b3JkKTtcbiAgICB0aGlzLnNldFN0YXRlKHsgcGFzc3dvcmQ6IHt9IH0pO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1hdGNoLFxuICAgICAgdXNlcixcbiAgICAgIGxvYWRpbmcsXG4gICAgICBwYWdlTG9hZGluZyxcbiAgICAgIHVwZGF0ZVVzZXIsXG4gICAgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyB1c2VyRm9ybSwgdmFsaWRhdGlvbiwgcGFzc3dvcmQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAodXNlciAmJiB1c2VyLmlkICYmICF1c2VyRm9ybS5pZCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHVzZXJGb3JtOiB1c2VyIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8RnJhZ21lbnQ+XG4gICAgICAgIDxOYXZiYXIgdXNlcj17dXNlcn0gLz5cbiAgICAgICAgPFByb2ZpbGVDb250YWluZXIgdXNlcj17dXNlcn0gcGF0aD17bWF0Y2gucGF0aH0gcGFnZUxvYWRpbmc9e3BhZ2VMb2FkaW5nfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wgbS00XCI+XG4gICAgICAgICAgICAgIDxoND5BY2NvdW50PC9oND5cbiAgICAgICAgICAgICAgPGZvcm0gYWN0aW9uPVwiXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cInVzZXJOYW1lSW5wdXRcIj5Vc2VyIE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJOYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi51c2VyTmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwidXNlck5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLnVzZXJOYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJmaXJzdE5hbWVJbnB1dFwiPkZpcnN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXt1c2VyRm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiZmlyc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5maXJzdE5hbWUuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImxhc3ROYW1lSW5wdXRcIj5MYXN0IE5hbWU8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dXNlckZvcm0ubGFzdE5hbWV9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwibGFzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHRoaXMuaGFuZGxlQ2hhbmdlKGUsICd1c2VyRm9ybScpfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJGb3JtLmVtYWlsfVxuICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAndXNlckZvcm0nKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5lbWFpbC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLW91dGxpbmUtc3VjY2VzcyBidG4tYmxvY2tcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB1cGRhdGVVc2VyKHVzZXJGb3JtKX1cbiAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IGtpbmQ9XCJib3JkZXJcIiBjb2xvcj1cInN1Y2Nlc3NcIiAvPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPXtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9PlVwZGF0ZTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbCBtLTRcIj5cbiAgICAgICAgICAgICAgPGg0PkNoYW5nZSBQYXNzd29yZDwvaDQ+XG4gICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ydW0tZ3JvdXAgbWItMlwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJvbGRQYXNzd29yZElucHV0XCI+T2xkIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwib2xkUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgJHt2YWxpZGF0aW9uLm9sZFBhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5vbGRQYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJvbGRQYXNzd29yZElucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gdGhpcy5oYW5kbGVDaGFuZ2UoZSwgJ3Bhc3N3b3JkJyl9XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ub2xkUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3J1bS1ncm91cCBtYi0yXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5ld1Bhc3N3b3JkSW5wdXRcIj5OZXcgUGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24ubmV3UGFzc3dvcmQuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkLm5ld1Bhc3N3b3JkfVxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5uZXdQYXNzd29yZC5lcnJvcn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcnVtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIj5Db25maXJtIE5ldyBQYXNzd29yZDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1OZXdQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCAke3ZhbGlkYXRpb24uY29uZmlybU5ld1Bhc3N3b3JkLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZC5jb25maXJtTmV3UGFzc3dvcmR9XG4gICAgICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybU5ld1Bhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiB0aGlzLmhhbmRsZUNoYW5nZShlLCAncGFzc3dvcmQnKX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtTmV3UGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmNoYW5nZVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIENoYW5nZSBQYXNzd29yZFxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Qcm9maWxlQ29udGFpbmVyPlxuICAgICAgPC9GcmFnbWVudD5cbiAgICApO1xuICB9XG59XG5cbkFjY291bnQucHJvcFR5cGVzID0ge1xuICB1c2VyOiBVc2VyU2hhcGUuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IG1hdGNoU2hhcGUuaXNSZXF1aXJlZCxcbiAgZ2V0QWNjb3VudERldGFpbDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgcGFnZUxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIGxvYWRpbmc6IFByb3BUeXBlcy5ib29sLmlzUmVxdWlyZWQsXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB1cGRhdGVVc2VyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgY2hhbmdlUGFzc3dvcmQ6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG59O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IEFjY291bnQgZnJvbSAnLi9BY2NvdW50JztcbmltcG9ydCB7IGdldEFjY291bnREZXRhaWwsIGNoYW5nZVBhc3N3b3JkLCB1cGRhdGVVc2VyIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHNldFBhZ2VMb2FkaW5nU3RhdHVzLCB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcblxuY29uc3QgbWFwU3RhdGVUb1Byb3BzID0gc3RhdGUgPT4gKHtcbiAgcGFnZUxvYWRpbmc6IHN0YXRlLmNvbW1vbi5wYWdlTG9hZGluZyxcbiAgbG9hZGluZzogc3RhdGUuY29tbW9uLmxvYWRpbmcsXG4gIHVwbG9hZGVkRmlsZTogc3RhdGUuY29tbW9uLnVwbG9hZGVkRmlsZSxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldEFjY291bnREZXRhaWw6ICgpID0+IGRpc3BhdGNoKGdldEFjY291bnREZXRhaWwoKSksXG4gIHNldFBhZ2VMb2FkaW5nU3RhdHVzOiBzdGF0dXMgPT4gZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoc3RhdHVzKSksXG4gIHVwZGF0ZVVzZXI6IHVzZXIgPT4gZGlzcGF0Y2godXBkYXRlVXNlcih1c2VyKSksXG4gIGNoYW5nZVBhc3N3b3JkOiBwYXNzd29yZCA9PiBkaXNwYXRjaChjaGFuZ2VQYXNzd29yZChwYXNzd29yZCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWNjb3VudCk7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcblxuaW1wb3J0IHsgQUxFUlRfVFlQRVMgfSBmcm9tICcuLi8uLi8uLi9saWIvY29uc3RhbnRzJztcblxuY29uc3QgQWxlcnQgPSAocHJvcHMpID0+IHtcbiAgY29uc3Qge1xuICAgIGtpbmQsXG4gICAgc2hvdyxcbiAgICBtZXNzYWdlLFxuICAgIHRvZ2dsZUFsZXJ0RGlhbG9nLFxuICB9ID0gcHJvcHM7XG5cbiAgaWYgKCFzaG93KSByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgYWxlcnQgYWxlcnQtJHtraW5kfSBzaXRlLWFsZXJ0IGFsZXJ0LWRpc21pc3NpYmxlIGZhZGUgc2hvd2B9IHJvbGU9XCJhbGVydFwiPlxuICAgICAge21lc3NhZ2V9XG4gICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJjbG9zZVwiIGRhdGEtZGlzbWlzcz1cImFsZXJ0XCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgb25DbGljaz17dG9nZ2xlQWxlcnREaWFsb2d9PlxuICAgICAgICA8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5BbGVydC5kZWZhdWx0UHJvcHMgPSB7XG4gIHNob3c6IGZhbHNlLFxuICBraW5kOiAnaW5mbycsXG4gIG1lc3NhZ2U6IG51bGwsXG59O1xuXG5BbGVydC5wcm9wVHlwZXMgPSB7XG4gIHNob3c6IFByb3BUeXBlcy5ib29sLFxuICBtZXNzYWdlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAga2luZDogUHJvcFR5cGVzLm9uZU9mKEFMRVJUX1RZUEVTKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFsZXJ0O1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgdG9nZ2xlQWxlcnREaWFsb2cgfSBmcm9tICcuLi8uLi9hY3Rpb25zL2NvbW1vbic7XG5pbXBvcnQgQWxlcnREaWFsb2cgZnJvbSAnLi9BbGVydERpYWxvZyc7XG5pbXBvcnQgJy4vQWxlcnREaWFsb2cuc2Nzcyc7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9ICh7IGNvbW1vbiB9KSA9PiAoe1xuICBzaG93OiBjb21tb24uc2hvd0FsZXJ0LFxuICBtZXNzYWdlOiBjb21tb24uYWxlcnRNZXNzYWdlLFxuICBraW5kOiBjb21tb24uYWxlcnRLaW5kLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIHRvZ2dsZUFsZXJ0RGlhbG9nOiAoKSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7IHNob3c6IGZhbHNlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQWxlcnREaWFsb2cpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJztcblxuaW1wb3J0IGNvb2tpZSBmcm9tICcuLi8uLi8uLi9saWIvY29va2llJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGZvcm06IHt9LFxuICAgICAgdmFsaWRhdGlvbjoge1xuICAgICAgICB1c2VyTmFtZToge30sXG4gICAgICAgIGVtYWlsOiB7fSxcbiAgICAgICAgcGFzc3dvcmQ6IHt9LFxuICAgICAgICBmaXJzdE5hbWU6IHt9LFxuICAgICAgICBsYXN0TmFtZToge30sXG4gICAgICAgIGNvbmZpcm1QYXNzd29yZDoge30sXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLmhhbmRsZUNoYW5nZSA9IHRoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyk7XG4gICAgdGhpcy52YWxpZGF0aW9uID0gdGhpcy52YWxpZGF0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5zd2l0Y2hGb3JtID0gdGhpcy5zd2l0Y2hGb3JtLmJpbmQodGhpcyk7XG4gICAgdGhpcy5sb2dpblJlZ2lzdGVyID0gdGhpcy5sb2dpblJlZ2lzdGVyLmJpbmQodGhpcyk7XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICBjb25zdCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGNvb2tpZS5nZXQoJ2Vycm9yTWVzc2FnZScpO1xuICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgIHRvZ2dsZUFsZXJ0RGlhbG9nKGVycm9yTWVzc2FnZSk7XG4gICAgfVxuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IHZhbHVlLCBuYW1lIH0gPSB0YXJnZXQ7XG4gICAgY29uc3QgeyBmb3JtIH0gPSB0aGlzLnN0YXRlO1xuICAgIGZvcm1bbmFtZV0gPSB2YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZm9ybSB9KTtcbiAgfVxuXG4gIHZhbGlkYXRpb24oKSB7XG4gICAgY29uc3QgZW1haWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJlbWFpbFwiXScpO1xuICAgIGNvbnN0IHsgdmFsaWRhdGlvbiB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGZvcm0sIGlzUmVnaXN0ZXIgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IGlzVmFsaWQgPSB0cnVlO1xuXG4gICAgaWYgKCFmb3JtLmVtYWlsIHx8ICFlbWFpbElucHV0LmNoZWNrVmFsaWRpdHkoKSkge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3MuPC9kaXY+LFxuICAgICAgfTtcbiAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFsaWRhdGlvbi5lbWFpbCA9IHt9O1xuICAgIH1cblxuICAgIGlmICghZm9ybS5wYXNzd29yZCB8fCBmb3JtLnBhc3N3b3JkLmxlbmd0aCA8IDYgfHwgZm9ybS5wYXNzd29yZC5sZW5ndGggPiAxNikge1xuICAgICAgdmFsaWRhdGlvbi5wYXNzd29yZCA9IHtcbiAgICAgICAgY2xhc3M6ICdpcy1pbnZhbGlkJyxcbiAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlBhc3N3b3JkcyBtdXN0IGJlIDYtMTYgY2hhY3JhY3Rlci48L2Rpdj4sXG4gICAgICB9O1xuICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWxpZGF0aW9uLnBhc3N3b3JkID0ge307XG4gICAgfVxuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGlmICghZm9ybS51c2VyTmFtZSB8fCBmb3JtLnVzZXJOYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS51c2VyTmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPlVzZXIgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLnVzZXJOYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5maXJzdE5hbWUgfHwgZm9ybS5maXJzdE5hbWUubGVuZ3RoIDwgMiB8fCBmb3JtLmZpcnN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmZpcnN0TmFtZSA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5GaXJzdCBuYW1lIG11c3QgYmUgMi00MCBjaGFyYWN0ZXI8L2Rpdj4sXG4gICAgICAgIH07XG4gICAgICAgIGlzVmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbGlkYXRpb24uZmlyc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmICghZm9ybS5sYXN0TmFtZSB8fCBmb3JtLmxhc3ROYW1lLmxlbmd0aCA8IDIgfHwgZm9ybS5sYXN0TmFtZS5sZW5ndGggPiA0MCkge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge1xuICAgICAgICAgIGNsYXNzOiAnaXMtaW52YWxpZCcsXG4gICAgICAgICAgZXJyb3I6IDxkaXYgY2xhc3NOYW1lPVwiaW52YWxpZC1mZWVkYmFja1wiPkxhc3QgbmFtZSBtdXN0IGJlIDItNDAgY2hhcmFjdGVyPC9kaXY+LFxuICAgICAgICB9O1xuICAgICAgICBpc1ZhbGlkID0gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWxpZGF0aW9uLmxhc3ROYW1lID0ge307XG4gICAgICB9XG5cbiAgICAgIGlmIChmb3JtLmNvbmZpcm1QYXNzd29yZCAhPT0gZm9ybS5wYXNzd29yZCkge1xuICAgICAgICB2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZCA9IHtcbiAgICAgICAgICBjbGFzczogJ2lzLWludmFsaWQnLFxuICAgICAgICAgIGVycm9yOiA8ZGl2IGNsYXNzTmFtZT1cImludmFsaWQtZmVlZGJhY2tcIj5QYXNzd29yZHMgZG9udCBtYXRjaDwvZGl2PixcbiAgICAgICAgfTtcbiAgICAgICAgaXNWYWxpZCA9IGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQgPSB7fTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFN0YXRlKHsgdmFsaWRhdGlvbiB9KTtcbiAgICByZXR1cm4gaXNWYWxpZDtcbiAgfVxuXG4gIGxvZ2luUmVnaXN0ZXIoKSB7XG4gICAgY29uc3QgeyBmb3JtLCBpc1JlZ2lzdGVyIH0gPSB0aGlzLnN0YXRlO1xuICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLnZhbGlkYXRpb24oZm9ybSk7XG5cbiAgICBpZiAoIWlzVmFsaWQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXM7XG4gICAgY29uc3QgdXJsID0gaXNSZWdpc3RlclxuICAgICAgPyAnL2FwaS9yZWdpc3RlcidcbiAgICAgIDogJy9hcGkvbG9naW4nO1xuXG4gICAgcmV0dXJuIHByb3BzLmxvZ2luUmVnaXN0ZXIoZm9ybSwgdXJsKTtcbiAgfVxuXG4gIHN3aXRjaEZvcm0oKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIGlzUmVnaXN0ZXI6ICFwcmV2U3RhdGUuaXNSZWdpc3RlcixcbiAgICB9KSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgZm9ybSxcbiAgICAgIGlzUmVnaXN0ZXIsXG4gICAgICB2YWxpZGF0aW9uLFxuICAgICAgbG9hZGluZyxcbiAgICB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIGxldCBidXR0b25UZXh0ID0gJ0xPR0lOJztcbiAgICBsZXQgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdSRUdJU1RFUic7XG4gICAgbGV0IHJlZ2lzdGVySW5wdXQgPSBudWxsO1xuXG4gICAgaWYgKGlzUmVnaXN0ZXIpIHtcbiAgICAgIGJ1dHRvblRleHQgPSAnUkVHSVNURVInO1xuICAgICAgc3dpdGNoUmVnaXN0ZXJUb0xvZ2luVGV4dCA9ICdMT0dJTic7XG5cbiAgICAgIHJlZ2lzdGVySW5wdXQgPSAoXG4gICAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIj5Db25maXJtIFBhc3N3b3JkPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJrZXlcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImNvbmZpcm1QYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uY29uZmlybVBhc3N3b3JkfVxuICAgICAgICAgICAgICAgIGlkPVwiY29uZmlybVBhc3N3b3JkSW5wdXRcIlxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQ29uZmlybSBQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImNvbmZpcm1QYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bmb3JtLWNvbnRyb2wgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgcm91bmRlZC0wIGIgYmctdHJhbnNwYXJlbnQgJHt2YWxpZGF0aW9uLmNvbmZpcm1QYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICB7dmFsaWRhdGlvbi5jb25maXJtUGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwidXNlck5hbWVJbnB1dFwiPlVzZXIgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtcHJlcGVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImlucHV0LWdyb3VwLXRleHQgYm9yZGVyLXRvcC0wIGJvcmRlci1sZWZ0LTAgYm9yZGVyLXJpZ2h0LTAgYm9yZGVyLWRhcmsgYmctdHJhbnNwYXJlbnQgcm91bmRlZC0wXCIgaWQ9XCJ1c2VyTmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwiYXRcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBuYW1lPVwidXNlck5hbWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJ1c2VyTmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJ1c2VyTmFtZUlucHV0XCJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXIgTmFtZVwiXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0udXNlck5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24udXNlck5hbWUuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAge3ZhbGlkYXRpb24udXNlck5hbWUuZXJyb3J9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZmlyc3ROYW1lSW5wdXRcIj5GaXJzdCBOYW1lPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImZpcnN0TmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPVwic2lnbmF0dXJlXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgbmFtZT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImZpcnN0TmFtZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJmaXJzdE5hbWVJbnB1dFwiXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJGaXJzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5maXJzdE5hbWV9XG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZmlyc3ROYW1lLmNsYXNzIHx8ICcnfWB9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmZpcnN0TmFtZS5lcnJvcn1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJsYXN0TmFtZUlucHV0XCI+XG4gICAgICAgICAgICAgIExhc3QgTmFtZVxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXBcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5wdXQtZ3JvdXAtdGV4dCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayBiZy10cmFuc3BhcmVudCByb3VuZGVkLTBcIiBpZD1cImxhc3ROYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJzaWduYXR1cmVcIiAvPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5sYXN0TmFtZS5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgIG5hbWU9XCJsYXN0TmFtZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImxhc3ROYW1lXCJcbiAgICAgICAgICAgICAgICBpZD1cImxhc3ROYW1lSW5wdXRcIlxuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5sYXN0TmFtZX1cbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmxhc3ROYW1lLmVycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBqdXN0aWZ5LWNvbnRlbnQtbWQtY2VudGVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTEyIGNvbC1tZC04IGNvbC1sZy02IGNvbC14bC01XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQgYXV0aC1mb3JtXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cganVzdGlmeS1jb250ZW50LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake3Zpc3NuZS5jZG59L2ltYWdlcy9sb2dvLnBuZ2B9IGFsdD1cIlZpc3NuZVwiIGhlaWdodD1cIjcwXCIgY2xhc3NOYW1lPVwibXktMlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fSBpZD1cImZvcm1SZWdcIiBjbGFzc05hbWU9XCJjb2wtMTIgcC0wXCI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbElucHV0XCI+RW1haWw8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwiYmFzaWMtYWRkb24xXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGb250QXdlc29tZUljb24gaWNvbj1cImVudmVsb3BlXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2Zvcm0uZW1haWx9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZD1cImVtYWlsSW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cImVtYWlsSW5wdXRHcm91cFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGVtYWlsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZvcm0tY29udHJvbCBib3JkZXItdG9wLTAgYm9yZGVyLWxlZnQtMCBib3JkZXItcmlnaHQtMCBib3JkZXItZGFyayByb3VuZGVkLTAgYiBiZy10cmFuc3BhcmVudCAke3ZhbGlkYXRpb24uZW1haWwuY2xhc3MgfHwgJyd9YH1cbiAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgIHt2YWxpZGF0aW9uLmVtYWlsLmVycm9yfVxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZElucHV0XCI+UGFzc3dvcmQ8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWdyb3VwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJpbnB1dC1ncm91cC10ZXh0IGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIGJnLXRyYW5zcGFyZW50IHJvdW5kZWQtMFwiIGlkPVwicGFzc3dvcmRBZGRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249XCJ1bmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17Zm9ybS5wYXNzd29yZH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRJbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJwYXNzd29yZEFkZG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZm9ybS1jb250cm9sIGJvcmRlci10b3AtMCBib3JkZXItbGVmdC0wIGJvcmRlci1yaWdodC0wIGJvcmRlci1kYXJrIHJvdW5kZWQtMCBiIGJnLXRyYW5zcGFyZW50ICR7dmFsaWRhdGlvbi5wYXNzd29yZC5jbGFzcyB8fCAnJ31gfVxuICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAge3ZhbGlkYXRpb24ucGFzc3dvcmQuZXJyb3J9XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICAgIHtyZWdpc3RlcklucHV0fVxuXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC0xMiB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuc3dpdGNoRm9ybX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtzd2l0Y2hSZWdpc3RlclRvTG9naW5UZXh0fVxuICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnRuLWRhcmsgYnRuLWJsb2NrXCJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy5sb2dpblJlZ2lzdGVyfVxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BzcGlubmVyLWdyb3cgc3Bpbm5lci1ncm93LXNtICR7bG9hZGluZyA/ICcnIDogJ2Qtbm9uZSd9YH1cbiAgICAgICAgICAgICAgICAgICAgICByb2xlPVwic3RhdHVzXCJcbiAgICAgICAgICAgICAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICB7YnV0dG9uVGV4dH1cbiAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1kZWZhdWx0IGJ0bi1ibG9jayBidG4tZGFyayBib3JkZXItMCBzb2NpYWwtYnV0dG9uIGdvb2dsZSAgbXQtMlwiXG4gICAgICAgICAgICAgICAgICBocmVmPVwiYXV0aC9nb29nbGVcIlxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cInNvY2lhbC1idXR0b24taWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e1snZmFiJywgJ2dvb2dsZSddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBHT09HTEVcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidG4tYmxvY2sgYnRuLWRhcmsgYm9yZGVyLTAgc29jaWFsLWJ1dHRvbiBmYWNlYm9vayBtdC0yXCJcbiAgICAgICAgICAgICAgICAgIGhyZWY9XCJhdXRoL2ZhY2Vib29rXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJzb2NpYWwtYnV0dG9uLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPEZvbnRBd2Vzb21lSWNvbiBpY29uPXtbJ2ZhYicsICdmYWNlYm9vayddfSAvPlxuICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgTE9HSU4gV0lUSCBGQUNFQk9PS1xuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbkF1dGgucHJvcFR5cGVzID0ge1xuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuXG5pbXBvcnQgQXV0aCBmcm9tICcuL0F1dGgnO1xuaW1wb3J0IHsgbG9naW5SZWdpc3RlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvYXV0aCc7XG5pbXBvcnQgeyB0b2dnbGVBbGVydERpYWxvZyB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCAnLi9BdXRoLnNjc3MnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBsb2dpblJlZ2lzdGVyOiAoZGF0YSwgdXJsKSA9PiBkaXNwYXRjaChsb2dpblJlZ2lzdGVyKGRhdGEsIHVybCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogbWVzc2FnZSA9PiBkaXNwYXRjaCh0b2dnbGVBbGVydERpYWxvZyh7IGtpbmQ6ICdkYW5nZXInLCBtZXNzYWdlIH0pKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoQXV0aCk7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5cbmltcG9ydCBNb3ZpZUxpc3QgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9Nb3ZpZUxpc3QnO1xuaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL05hdmJhcic7XG5pbXBvcnQgU3Bpbm5lciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1NwaW5uZXInO1xuaW1wb3J0IEZpbHRlciBmcm9tICcuLi8uLi9jb21wb25lbnRzL0ZpbHRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvRm9vdGVyJztcbmltcG9ydCB7XG4gIFVzZXJTaGFwZSxcbiAgTW92aWVTaGFwZSxcbiAgR2VucmVTaGFwZSxcbiAgRmlsdGVyU2hhcGUsXG59IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpc2NvdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG5cbiAgICB0aGlzLmxvYWRNb3ZpZXMgPSB0aGlzLmxvYWRNb3ZpZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRHZW5yZXMsIHRvZ2dsZUZpbHRlciwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgeyBwYXRoIH0gPSBtYXRjaDtcblxuICAgIGdldEdlbnJlcygpO1xuXG4gICAgaWYgKFsnL2NvbWluZy1zb29uJywgJy9pbi10aGVhdGVycyddLmluZGV4T2YocGF0aCkgIT09IC0xKSB7XG4gICAgICB0aGlzLnNldFF1ZXJ5KHsgZmllbGQ6ICdmaWx0ZXInLCB2YWx1ZTogcGF0aC5yZXBsYWNlKCcvJywgJycpIH0pO1xuICAgICAgdG9nZ2xlRmlsdGVyKGZhbHNlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkTW92aWVzKCk7XG4gICAgfVxuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICBjb25zdCB7IHNldFF1ZXJ5IH0gPSB0aGlzLnByb3BzO1xuICAgIHNldFF1ZXJ5KHF1ZXJ5KS50aGVuKHRoaXMubG9hZE1vdmllcyk7XG4gIH1cblxuICBsb2FkTW92aWVzKCkge1xuICAgIGNvbnN0IHsgZ2V0TW92aWVzLCBxdWVyeSB9ID0gdGhpcy5wcm9wcztcbiAgICBnZXRNb3ZpZXMocXVlcnkpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHtcbiAgICAgIG1vdmllcyxcbiAgICAgIHVzZXIsXG4gICAgICBpc0xvZ2dlZEluLFxuICAgICAgbG9hZGluZyxcbiAgICAgIGdlbnJlcyxcbiAgICAgIHF1ZXJ5LFxuICAgICAgbG9jYXRpb24sXG4gICAgICBzaG93RmlsdGVyLFxuICAgIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxGcmFnbWVudD5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSBwYXRoTmFtZT17bG9jYXRpb24ucGF0aG5hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyLWZsdWlkXCI+XG4gICAgICAgICAgPEZpbHRlciBzaG93PXtzaG93RmlsdGVyfSBnZW5yZXM9e2dlbnJlc30gc2V0UXVlcnk9e3RoaXMuc2V0UXVlcnl9IHF1ZXJ5PXtxdWVyeX0gLz5cbiAgICAgICAgICA8TW92aWVMaXN0IG1vdmllcz17bW92aWVzfSBpZD1cImxpc3RcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbS0xXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLmxvYWRNb3ZpZXN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG1iLTIgJHtsb2FkaW5nID8gJ2Qtbm9uZScgOiAnZC1ibG9jayd9YH1cbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgTG9hZCBNb3JlXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxTcGlubmVyIHNob3c9e2xvYWRpbmd9IHNpemU9XCJtZFwiIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICA8L0ZyYWdtZW50PlxuICAgICk7XG4gIH1cbn1cblxuRGlzY292ZXIuZGVmYXVsdFByb3BzID0ge1xuICBpc0xvZ2dlZEluOiBmYWxzZSxcbiAgc2hvd0ZpbHRlcjogdHJ1ZSxcbiAgdXNlcjoge30sXG59O1xuXG5EaXNjb3Zlci5wcm9wVHlwZXMgPSB7XG4gIGdldE1vdmllczogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0R2VucmVzOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBzZXRRdWVyeTogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgdG9nZ2xlRmlsdGVyOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBsb2FkaW5nOiBQcm9wVHlwZXMuYm9vbC5pc1JlcXVpcmVkLFxuICBpc0xvZ2dlZEluOiBQcm9wVHlwZXMuYm9vbCxcbiAgc2hvd0ZpbHRlcjogUHJvcFR5cGVzLmJvb2wsXG4gIHVzZXI6IFVzZXJTaGFwZSxcbiAgbW92aWVzOiBQcm9wVHlwZXMuYXJyYXlPZihNb3ZpZVNoYXBlKS5pc1JlcXVpcmVkLFxuICBnZW5yZXM6IFByb3BUeXBlcy5hcnJheU9mKEdlbnJlU2hhcGUpLmlzUmVxdWlyZWQsXG4gIHF1ZXJ5OiBGaWx0ZXJTaGFwZS5pc1JlcXVpcmVkLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5cbmltcG9ydCBEaXNjb3ZlciBmcm9tICcuL0Rpc2NvdmVyJztcbmltcG9ydCB7IHRvZ2dsZUZpbHRlciB9IGZyb20gJy4uLy4uL2FjdGlvbnMvY29tbW9uJztcbmltcG9ydCB7XG4gIGdldE1vdmllcyxcbiAgc2V0UXVlcnksXG4gIGdldEdlbnJlcyxcbn0gZnJvbSAnLi4vLi4vYWN0aW9ucy9kaXNjb3Zlcic7XG5cbmNvbnN0IG1hcFN0YXRlVG9Qcm9wcyA9IHN0YXRlID0+ICh7XG4gIGxvYWRpbmc6IHN0YXRlLmNvbW1vbi5sb2FkaW5nLFxuICB1c2VyOiBzdGF0ZS5kaXNjb3Zlci51c2VyLFxuICBxdWVyeTogc3RhdGUuZGlzY292ZXIucXVlcnksXG4gIGlzTG9nZ2VkSW46IHN0YXRlLmRpc2NvdmVyLmlzTG9nZ2VkSW4sXG4gIG1vdmllczogc3RhdGUuZGlzY292ZXIubW92aWVzLFxuICBnZW5yZXM6IHN0YXRlLmRpc2NvdmVyLmdlbnJlcyxcbiAgc2hvd0ZpbHRlcjogc3RhdGUuY29tbW9uLnNob3dGaWx0ZXIsXG59KTtcblxuY29uc3QgbWFwRGlzcGF0Y2hUb1Byb3BzID0gZGlzcGF0Y2ggPT4gKHtcbiAgZ2V0TW92aWVzOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRNb3ZpZXMocXVlcnkpKSxcbiAgc2V0UXVlcnk6IHF1ZXJ5ID0+IGRpc3BhdGNoKHNldFF1ZXJ5KHF1ZXJ5KSksXG4gIGdldEdlbnJlczogKCkgPT4gZGlzcGF0Y2goZ2V0R2VucmVzKCkpLFxuICB0b2dnbGVGaWx0ZXI6IHNob3cgPT4gZGlzcGF0Y2godG9nZ2xlRmlsdGVyKHNob3cpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoRGlzY292ZXIpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9maWxlQ29udGFpbmVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvUHJvZmlsZUNvbnRhaW5lcic7XG5pbXBvcnQgVGFibGVMaXN0IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvVGFibGVMaXN0JztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi9jb21wb25lbnRzL01vZGFsJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGlzdHMgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgbGlzdDoge30sXG4gICAgICBzZWxlY3RlZDoge30sXG4gICAgICBxdWVyeToge1xuICAgICAgICBwYWdlOiAxLFxuICAgICAgICBsaW1pdDogMTAsXG4gICAgICB9LFxuICAgIH07XG5cbiAgICB0aGlzLnNldFF1ZXJ5ID0gdGhpcy5zZXRRdWVyeS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuZ2V0TGlzdHMgPSB0aGlzLmdldExpc3RzLmJpbmQodGhpcyk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCA9IHRoaXMudG9nZ2xlTW9kYWwuYmluZCh0aGlzKTtcbiAgICB0aGlzLmNyZWF0ZSA9IHRoaXMuY3JlYXRlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5kZXN0cm95ID0gdGhpcy5kZXN0cm95LmJpbmQodGhpcyk7XG4gICAgdGhpcy51cGRhdGUgPSB0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlQ2hhbmdlID0gdGhpcy5oYW5kbGVDaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLnNhdmUgPSB0aGlzLnNhdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IHsgZ2V0QWNjb3VudERldGFpbCB9ID0gdGhpcy5wcm9wcztcbiAgICB0aGlzLmdldExpc3RzKCk7XG4gICAgZ2V0QWNjb3VudERldGFpbCgpO1xuICB9XG5cbiAgc2V0UXVlcnkocXVlcnkpIHtcbiAgICB0aGlzLnNldFN0YXRlKHByZXZTdGF0ZSA9PiAoe1xuICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24ocHJldlN0YXRlLnF1ZXJ5LCBxdWVyeSksXG4gICAgfSksIHRoaXMuZ2V0TGlzdHMpO1xuICB9XG5cbiAgZ2V0TGlzdHMoKSB7XG4gICAgY29uc3QgeyBnZXRMaXN0QnlDdXJyZW50VXNlciB9ID0gdGhpcy5wcm9wcztcbiAgICBjb25zdCB7IHF1ZXJ5IH0gPSB0aGlzLnN0YXRlO1xuICAgIGdldExpc3RCeUN1cnJlbnRVc2VyKHF1ZXJ5KTtcbiAgfVxuXG4gIGNyZWF0ZSgpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDoge30gfSk7XG4gICAgdGhpcy50b2dnbGVNb2RhbCgpO1xuICB9XG5cbiAgZGVzdHJveSgpIHtcbiAgICBjb25zdCB7IGRlbGV0ZUxpc3QsIHRvZ2dsZUFsZXJ0RGlhbG9nIH0gPSB0aGlzLnByb3BzO1xuICAgIGNvbnN0IHsgc2VsZWN0ZWQgfSA9IHRoaXMuc3RhdGU7XG5cbiAgICBpZiAoIXNlbGVjdGVkIHx8ICFzZWxlY3RlZC5pZCkge1xuICAgICAgcmV0dXJuIHRvZ2dsZUFsZXJ0RGlhbG9nKHtcbiAgICAgICAga2luZDogJ3dhcm5pbmcnLFxuICAgICAgICBtZXNzYWdlOiAnTm8gc2VsZWN0ZWQgZGF0YS4nLFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZGVsZXRlTGlzdChzZWxlY3RlZC5pZCwgdGhpcy5nZXRMaXN0cyk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgeyBzZWxlY3RlZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgIGxpc3Q6IHNlbGVjdGVkLFxuICAgIH0sIHRoaXMudG9nZ2xlTW9kYWwpO1xuICB9XG5cbiAgdG9nZ2xlTW9kYWwoKSB7XG4gICAgdGhpcy5zZXRTdGF0ZShwcmV2U3RhdGUgPT4gKHtcbiAgICAgIHNob3dNb2RhbDogIXByZXZTdGF0ZS5zaG93TW9kYWwsXG4gICAgfSkpO1xuICB9XG5cbiAgaGFuZGxlQ2hhbmdlKHsgdGFyZ2V0IH0pIHtcbiAgICBjb25zdCB7IG5hbWUgfSA9IHRhcmdldDtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgbGV0IHZhbHVlID0gdGFyZ2V0LnBhcnNlZFZhbHVlIHx8IHRhcmdldC52YWx1ZTtcblxuICAgIGlmIChuYW1lID09PSAncHVibGljJykge1xuICAgICAgdmFsdWUgPSB2YWx1ZSA9PT0gJ3RydWUnO1xuICAgIH1cblxuICAgIGxpc3RbbmFtZV0gPSB2YWx1ZTtcblxuICAgIHRoaXMuc2V0U3RhdGUoeyBsaXN0IH0pO1xuICB9XG5cbiAgc2F2ZSgpIHtcbiAgICBjb25zdCB7IGxpc3QgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3QgeyBzYXZlTGlzdCB9ID0gdGhpcy5wcm9wcztcbiAgICBzYXZlTGlzdChsaXN0LCAoKSA9PiB7XG4gICAgICB0aGlzLmdldExpc3RzKCk7XG4gICAgICB0aGlzLnNldFN0YXRlKHsgbGlzdDoge30gfSk7XG4gICAgICB0aGlzLnRvZ2dsZU1vZGFsKCk7XG4gICAgfSk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3Qge1xuICAgICAgcXVlcnksXG4gICAgICBzaG93TW9kYWwsXG4gICAgICBsaXN0LFxuICAgICAgc2VsZWN0ZWQsXG4gICAgfSA9IHRoaXMuc3RhdGU7XG4gICAgY29uc3Qge1xuICAgICAgbWF0Y2gsXG4gICAgICB1c2VyLFxuICAgICAgcGFnZUxvYWRpbmcsXG4gICAgICB0b3RhbCxcbiAgICAgIHRhYmxlRmllbGRzLFxuICAgICAgbGlzdHMsXG4gICAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICA8TmF2YmFyIHVzZXI9e3VzZXJ9IC8+XG4gICAgICAgIDxQcm9maWxlQ29udGFpbmVyIHVzZXI9e3VzZXJ9IHBhdGg9e21hdGNoLnBhdGh9IHBhZ2VMb2FkaW5nPXtwYWdlTG9hZGluZ30+XG4gICAgICAgICAgPFRhYmxlTGlzdFxuICAgICAgICAgICAgdGl0bGU9XCJNeSBMaXN0c1wiXG4gICAgICAgICAgICBkYXRhPXtsaXN0c31cbiAgICAgICAgICAgIG9uQ3JlYXRlPXt0aGlzLmNyZWF0ZX1cbiAgICAgICAgICAgIG9uRGVsZXRlPXt0aGlzLmRlc3Ryb3l9XG4gICAgICAgICAgICBvbkVkaXQ9e3RoaXMudXBkYXRlfVxuICAgICAgICAgICAgb25TZWxlY3Q9e3MgPT4gdGhpcy5zZXRTdGF0ZSh7IHNlbGVjdGVkOiBzIH0pfVxuICAgICAgICAgICAgc2VsZWN0ZWQ9e3NlbGVjdGVkfVxuICAgICAgICAgICAgZmllbGRzPXt0YWJsZUZpZWxkc31cbiAgICAgICAgICAgIHBhZ2luYXRpb249e3tcbiAgICAgICAgICAgICAgdG90YWwsXG4gICAgICAgICAgICAgIHBhZ2U6IHF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICAgIGxpbWl0OiBxdWVyeS5saW1pdCxcbiAgICAgICAgICAgICAgYnV0dG9uQ291bnQ6IDUsXG4gICAgICAgICAgICAgIG9uUGFnaW5hdGU6IHRoaXMuc2V0UXVlcnksXG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvUHJvZmlsZUNvbnRhaW5lcj5cbiAgICAgICAgPE1vZGFsIHNob3c9e3Nob3dNb2RhbH0gdGl0bGU9XCJDcmVhdGUgTGlzdFwiIGNhbmNlbD17dGhpcy50b2dnbGVNb2RhbH0gc3VibWl0PXt0aGlzLnNhdmV9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgICAgPGxhYmVsPkxpc3QgTmFtZTwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICBuYW1lPVwibmFtZVwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGlzdCBOYW1lXCJcbiAgICAgICAgICAgICAgdmFsdWU9e2xpc3QubmFtZX1cbiAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2xcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWNoZWNrXCI+XG4gICAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWlucHV0XCJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJyYWRpb1wiXG4gICAgICAgICAgICAgICAgICBuYW1lPVwicHVibGljXCJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXtsaXN0LnB1YmxpY31cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJmb3JtLWNoZWNrLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICBQdWJsaWMgTGlzdFxuICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tY2hlY2tcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY2hlY2staW5wdXRcIlxuICAgICAgICAgICAgICAgICAgdHlwZT1cInJhZGlvXCJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJwdWJsaWNcIlxuICAgICAgICAgICAgICAgICAgdmFsdWU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17dGhpcy5oYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICAgICAgICBjaGVja2VkPXshbGlzdC5wdWJsaWN9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiZm9ybS1jaGVjay1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgUHJpdmF0ZSBMaXN0XG4gICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9Nb2RhbD5cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuXG5MaXN0cy5kZWZhdWx0UHJvcHMgPSB7XG4gIHRvdGFsOiAwLFxufTtcblxuTGlzdHMucHJvcFR5cGVzID0ge1xuICB0b2dnbGVBbGVydERpYWxvZzogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgZ2V0TGlzdEJ5Q3VycmVudFVzZXI6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIGdldEFjY291bnREZXRhaWw6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG4gIHNhdmVMaXN0OiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBwYWdlTG9hZGluZzogUHJvcFR5cGVzLmJvb2wuaXNSZXF1aXJlZCxcbiAgdG90YWw6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuIiwiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJ3JlYWN0LXJlZHV4JztcblxuaW1wb3J0IHsgZ2V0TGlzdEJ5Q3VycmVudFVzZXIsIHNhdmVMaXN0LCBkZWxldGVMaXN0IH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9saXN0cyc7XG5pbXBvcnQgeyBnZXRBY2NvdW50RGV0YWlsIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9hY2NvdW50JztcbmltcG9ydCB7IHRvZ2dsZUFsZXJ0RGlhbG9nIH0gZnJvbSAnLi4vLi4vYWN0aW9ucy9jb21tb24nO1xuaW1wb3J0IExpc3RzIGZyb20gJy4vTGlzdHMnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBsaXN0czogc3RhdGUubGlzdHMubGlzdHMsXG4gIHRvdGFsOiBzdGF0ZS5saXN0cy50b3RhbCxcbiAgdGFibGVGaWVsZHM6IHN0YXRlLmxpc3RzLnRhYmxlRmllbGRzLFxuICBwYWdlTG9hZGluZzogc3RhdGUuY29tbW9uLnBhZ2VMb2FkaW5nLFxuICBsb2FkaW5nOiBzdGF0ZS5jb21tb24ubG9hZGluZyxcbiAgdXNlcjogc3RhdGUuYWNjb3VudC51c2VyLFxufSk7XG5cbmNvbnN0IG1hcERpc3BhdGNoVG9Qcm9wcyA9IGRpc3BhdGNoID0+ICh7XG4gIGdldExpc3RCeUN1cnJlbnRVc2VyOiBxdWVyeSA9PiBkaXNwYXRjaChnZXRMaXN0QnlDdXJyZW50VXNlcihxdWVyeSkpLFxuICBzYXZlTGlzdDogKGxpc3QsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChzYXZlTGlzdChsaXN0LCBjYWxsYmFjaykpLFxuICBkZWxldGVMaXN0OiAoaWQsIGNhbGxiYWNrKSA9PiBkaXNwYXRjaChkZWxldGVMaXN0KGlkLCBjYWxsYmFjaykpLFxuICBnZXRBY2NvdW50RGV0YWlsOiAoKSA9PiBkaXNwYXRjaChnZXRBY2NvdW50RGV0YWlsKCkpLFxuICB0b2dnbGVBbGVydERpYWxvZzogYWxlcnQgPT4gZGlzcGF0Y2godG9nZ2xlQWxlcnREaWFsb2coYWxlcnQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTGlzdHMpO1xuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCwgRnJhZ21lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuXG5pbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTmF2YmFyJztcbmltcG9ydCBQcm9ncmVzc0JhciBmcm9tICcuLi8uLi9jb21wb25lbnRzL1Byb2dyZXNzQmFyJztcbmltcG9ydCBEZXRhaWxUYWJsZSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0RldGFpbFRhYmxlJztcbmltcG9ydCBDb21wYW55TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0NvbXBhbnlMaXN0JztcbmltcG9ydCBDYXN0TGlzdCBmcm9tICcuLi8uLi9jb21wb25lbnRzL0Nhc3RMaXN0JztcbmltcG9ydCBWaWRlbyBmcm9tICcuLi8uLi9jb21wb25lbnRzL1ZpZGVvJztcbmltcG9ydCB7IFVzZXJTaGFwZSB9IGZyb20gJy4uLy4uL2NvbnN0YW50cy9wcm9wLXNoYXBlcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vdmllIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3QgeyBnZXRNb3ZpZURldGFpbCwgbWF0Y2ggfSA9IHRoaXMucHJvcHM7XG4gICAgZ2V0TW92aWVEZXRhaWwobWF0Y2gucGFyYW1zLmlkKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRldGFpbCwgdXNlciwgaXNMb2dnZWRJbiB9ID0gdGhpcy5wcm9wcztcblxuICAgIGlmICghZGV0YWlsKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8RnJhZ21lbnQ+XG4gICAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICAgIDxQcm9ncmVzc0JhciBzaG93IGNvbG9yPVwiaW5mb1wiIC8+XG4gICAgICAgIDwvRnJhZ21lbnQ+XG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHZpZGVvID0gZGV0YWlsLnZpZGVvcy5sZW5ndGggPiAwXG4gICAgICA/IDxWaWRlbyB2aWRlb0tleT17ZGV0YWlsLnZpZGVvc1swXS5rZXl9IC8+XG4gICAgICA6IG51bGw7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhciBpc0xvZ2dlZEluPXtpc0xvZ2dlZElufSB1c2VyPXt1c2VyfSAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lci1mbHVpZCBtdC0yXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS02IGNvbC1tZC0zXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwiaW1nLWZsdWlkIG1iLTJcIiBzcmM9e2RldGFpbC5wb3N0ZXJQYXRofSBhbHQ9e2RldGFpbC50aXRsZX0gLz5cbiAgICAgICAgICAgICAgPENvbXBhbnlMaXN0IGNvbXBhbmllcz17ZGV0YWlsLnByb2R1Y3Rpb25fY29tcGFuaWVzfSAvPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLTEyIGNvbC1zbS0xMiBjb2wtbWQtNiBtYi0yXCI+XG4gICAgICAgICAgICAgIHt2aWRlb31cbiAgICAgICAgICAgICAgPERldGFpbFRhYmxlIG1vdmllPXtkZXRhaWx9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtMTIgY29sLXNtLTYgY29sLW1kLTMgbWItMlwiPlxuICAgICAgICAgICAgICA8Q2FzdExpc3QgY2FzdHM9e2RldGFpbC5jcmVkaXRzLmNhc3R9IC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cbk1vdmllLmRlZmF1bHRQcm9wcyA9IHtcbiAgaXNMb2dnZWRJbjogZmFsc2UsXG59O1xuXG5Nb3ZpZS5wcm9wVHlwZXMgPSB7XG4gIGdldE1vdmllRGV0YWlsOiBQcm9wVHlwZXMuZnVuYy5pc1JlcXVpcmVkLFxuICBkZXRhaWw6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgbWF0Y2g6IFByb3BUeXBlcy5pbnN0YW5jZU9mKE9iamVjdCkuaXNSZXF1aXJlZCxcbiAgdXNlcjogVXNlclNoYXBlLmlzUmVxdWlyZWQsXG4gIGlzTG9nZ2VkSW46IFByb3BUeXBlcy5ib29sLFxufTtcbiIsImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICdyZWFjdC1yZWR1eCc7XG5pbXBvcnQgTW92aWUgZnJvbSAnLi9Nb3ZpZSc7XG5pbXBvcnQgeyBnZXRNb3ZpZURldGFpbCB9IGZyb20gJy4uLy4uL2FjdGlvbnMvbW92aWUnO1xuXG5jb25zdCBtYXBTdGF0ZVRvUHJvcHMgPSBzdGF0ZSA9PiAoe1xuICBkZXRhaWw6IHN0YXRlLm1vdmllLmRldGFpbCxcbiAgdXNlcjogc3RhdGUuZGlzY292ZXIudXNlcixcbiAgaXNMb2dnZWRJbjogc3RhdGUuZGlzY292ZXIuaXNMb2dnZWRJbixcbn0pO1xuXG5jb25zdCBtYXBEaXNwYXRjaFRvUHJvcHMgPSBkaXNwYXRjaCA9PiAoe1xuICBnZXRNb3ZpZURldGFpbDogaWQgPT4gZGlzcGF0Y2goZ2V0TW92aWVEZXRhaWwoaWQpKSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0KFxuICBtYXBTdGF0ZVRvUHJvcHMsXG4gIG1hcERpc3BhdGNoVG9Qcm9wcyxcbikoTW92aWUpO1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSc7XG5cbmltcG9ydCAnLi4vc2NyaXB0cyc7XG5pbXBvcnQgJy4uLy4uL3N0eWxlc2hlZXRzL3Njc3MvbWFpbi5zY3NzJztcbmltcG9ydCBjb25maWd1cmVTdG9yZSBmcm9tICcuL3N0b3JlL2NvbmZpZ3VyZS1zdG9yZSc7XG5pbXBvcnQgUm9vdCBmcm9tICcuL1Jvb3QnO1xuaW1wb3J0IGZvbnRBd2Vzb21lIGZyb20gJy4uL2xpYi9mb250LWF3ZXNvbWUnO1xuXG5mb250QXdlc29tZSgpOyAvLyBpbml0IGZvbnQgYXdzb21lIGljb25zXG5cbmNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoKTtcblxucmVuZGVyKFxuICA8Um9vdCBzdG9yZT17c3RvcmV9IC8+LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJyksXG4pO1xuIiwiaW1wb3J0IHsgU0VUX0FDQ09VTlRfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgdXNlcjoge30sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhY2NvdW50KHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0FDQ09VTlRfREVUQUlMOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIFRPR0dMRV9BTEVSVCxcbiAgU0VUX1BBR0VfTE9BRElOR19TVEFUVVMsXG4gIFNFVF9MT0FESU5HX1NUQVRVUyxcbiAgVE9HR0xFX0ZJTFRFUixcbiAgU0VUX1VQTE9BREVEX0lNQUdFLFxufSBmcm9tICcuLi9jb25zdGFudHMvYWN0aW9uLXR5cGVzJztcblxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xuICBzaG93QWxlcnQ6IGZhbHNlLFxuICBhbGVydE1lc3NhZ2U6IG51bGwsXG4gIGFsZXJ0S2luZDogJ2luZm8nLFxuICBwYWdlTG9hZGluZzogdHJ1ZSxcbiAgbG9hZGluZzogZmFsc2UsXG4gIHNob3dGaWx0ZXI6IHRydWUsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb21tb24oc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBUT0dHTEVfQUxFUlQ6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc2hvd0FsZXJ0OiAhc3RhdGUuc2hvd0FsZXJ0LFxuICAgICAgICBhbGVydE1lc3NhZ2U6IGFjdGlvbi5tZXNzYWdlLFxuICAgICAgICBhbGVydEtpbmQ6IGFjdGlvbi5raW5kLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFNFVF9QQUdFX0xPQURJTkdfU1RBVFVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHBhZ2VMb2FkaW5nOiBhY3Rpb24ucGFnZUxvYWRpbmcsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX0xPQURJTkdfU1RBVFVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGxvYWRpbmc6IGFjdGlvbi5sb2FkaW5nLFxuICAgICAgfSk7XG5cbiAgICBjYXNlIFRPR0dMRV9GSUxURVI6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgc2hvd0ZpbHRlcjogIXN0YXRlLnNob3dGaWx0ZXIsXG4gICAgICB9KTtcblxuICAgIGNhc2UgU0VUX1VQTE9BREVEX0lNQUdFOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIHVwbG9hZGVkQXZhdGFyOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgU0VUX01PVklFUywgU0VUX0dFTlJFUywgU0VUX1FVRVJZIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5pbXBvcnQgY29va2llIGZyb20gJy4uLy4uL2xpYi9jb29raWUnO1xuXG5jb25zdCB1c2VyID0ge1xuICBpZDogY29va2llLmdldCgndXNlcl9pZCcpLFxuICB1c2VyTmFtZTogY29va2llLmdldCgndXNlcm5hbWUnKSxcbiAgZnJpc3ROYW1lOiBjb29raWUuZ2V0KCd1c2VyX2ZpcnN0X25hbWUnKSxcbiAgbGFzdE5hbWU6IGNvb2tpZS5nZXQoJ3VzZXJfbGFzdF9uYW1lJyksXG4gIGVtYWlsOiBjb29raWUuZ2V0KCd1c2VyX2VtYWlsJyksXG59O1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHVzZXIsXG4gIGdlbnJlczogW10sXG4gIG1vdmllczogW10sXG4gIHRvdGFsOiAwLFxuICB0b3RhbFBhZ2U6IDEsXG4gIHF1ZXJ5OiB7XG4gICAgcGFnZTogMSxcbiAgICBzb3J0Qnk6ICdwb3B1bGFyaXR5LmRlY3MnLFxuICAgIGZpbHRlcjogbnVsbCxcbiAgICBzZWFyY2hUZXh0OiBudWxsLFxuICAgIHdpdGhHZW5yZXM6IFtdLFxuICAgIHllYXI6IG51bGwsXG4gICAgY3Jld3M6IFtdLFxuICAgIGNhc3RzOiBbXSxcbiAgfSxcbiAgaXNMb2dnZWRJbjogISF1c2VyLmVtYWlsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGlzY292ZXIoc3RhdGUgPSBpbml0aWFsU3RhdGUsIGFjdGlvbikge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSBTRVRfTU9WSUVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIG1vdmllczogc3RhdGUubW92aWVzLmNvbmNhdChhY3Rpb24ubW92aWVzKSxcbiAgICAgICAgdG90YWw6IGFjdGlvbi50b3RhbCxcbiAgICAgICAgdG90YWxQYWdlczogYWN0aW9uLnRvdGFsUGFnZXMsXG4gICAgICAgIHF1ZXJ5OiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZS5xdWVyeSwge1xuICAgICAgICAgIHBhZ2U6IGFjdGlvbi5wYWdlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfR0VOUkVTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGdlbnJlczogYWN0aW9uLmdlbnJlcyxcbiAgICAgIH0pO1xuXG4gICAgY2FzZSBTRVRfUVVFUlk6XG4gICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcbiAgICAgICAgbW92aWVzOiBbXSxcbiAgICAgICAgcXVlcnk6IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLnF1ZXJ5LCB7XG4gICAgICAgICAgcGFnZTogMSxcbiAgICAgICAgICBbYWN0aW9uLmZpZWxkXTogYWN0aW9uLnZhbHVlLFxuICAgICAgICB9KSxcbiAgICAgIH0pO1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgfVxufVxuXG4vLyBUT0RPOiBNb3ZlIHVzZXIgb2JqZWN0IHRvIGFjY291bnQgcmVkdWNlclxuIiwiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAncmVkdXgnO1xuXG5pbXBvcnQgYWNjb3VudCBmcm9tICcuL2FjY291bnQnO1xuaW1wb3J0IGRpc2NvdmVyIGZyb20gJy4vZGlzY292ZXInO1xuaW1wb3J0IG1vdmllIGZyb20gJy4vbW92aWUnO1xuaW1wb3J0IGxpc3RzIGZyb20gJy4vbGlzdHMnO1xuaW1wb3J0IGNvbW1vbiBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIGFjY291bnQsXG4gIGRpc2NvdmVyLFxuICBtb3ZpZSxcbiAgbGlzdHMsXG4gIGNvbW1vbixcbn0pO1xuIiwiaW1wb3J0IHsgU0VUX0xJU1RTIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgbGlzdHM6IFtdLFxuICB0b3RhbDogMCxcbiAgdGFibGVGaWVsZHM6IFt7XG4gICAgdGl0bGU6ICdJZCcsXG4gICAgbmFtZTogJ2lkJyxcbiAgICBoaWRkZW46IHRydWUsXG4gIH0sIHtcbiAgICB0aXRsZTogJ05hbWUnLFxuICAgIG5hbWU6ICduYW1lJyxcbiAgfSwge1xuICAgIHRpdGxlOiAnQ3JlYXRlIERhdGUnLFxuICAgIG5hbWU6ICdjcmVhdGVkQXQnLFxuICAgIGZvcm1hdCh2YWx1ZSkge1xuICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgICAgIHJldHVybiBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZygpO1xuICAgIH0sXG4gIH0sIHtcbiAgICB0aXRsZTogJ1B1YmxpYycsXG4gICAgbmFtZTogJ3B1YmxpYycsXG4gICAgZm9ybWF0KHZhbHVlKSB7XG4gICAgICByZXR1cm4gdmFsdWUgPyAnUHVibGljJyA6ICdQcml2YXRlJztcbiAgICB9LFxuICB9XSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxpc3RzKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX0xJU1RTOlxuICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHN0YXRlLCB7XG4gICAgICAgIGxpc3RzOiBhY3Rpb24ucGF5bG9hZC5saXN0cyxcbiAgICAgICAgdG90YWw6IGFjdGlvbi5wYXlsb2FkLnRvdGFsLFxuICAgICAgfSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIHN0YXRlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBTRVRfTU9WSUVfREVUQUlMIH0gZnJvbSAnLi4vY29uc3RhbnRzL2FjdGlvbi10eXBlcyc7XG5cbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcbiAgZGV0YWlsOiBudWxsLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZGV0YWlsKHN0YXRlID0gaW5pdGlhbFN0YXRlLCBhY3Rpb24pIHtcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xuICAgIGNhc2UgU0VUX01PVklFX0RFVEFJTDpcbiAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xuICAgICAgICBkZXRhaWw6IGFjdGlvbi5kZXRhaWwsXG4gICAgICB9KTtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGU7XG4gIH1cbn1cbiIsImltcG9ydCB7IGNyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUgfSBmcm9tICdyZWR1eCc7XG5pbXBvcnQgdGh1bmtNaWRkbGV3YXJlIGZyb20gJ3JlZHV4LXRodW5rJztcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29uZmlndXJlU3RvcmUoKSB7XG4gIHJldHVybiBjcmVhdGVTdG9yZShcbiAgICByZWR1Y2VyLFxuICAgIGFwcGx5TWlkZGxld2FyZShcbiAgICAgIHRodW5rTWlkZGxld2FyZSxcbiAgICApLFxuICApO1xufVxuIiwiXG5pbXBvcnQge1xuICBzZXRQYWdlTG9hZGluZ1N0YXR1cyxcbiAgdG9nZ2xlQWxlcnREaWFsb2csXG4gIHNldExvYWRpbmdTdGF0dXMsXG59IGZyb20gJy4uL2FwcC9hY3Rpb25zL2NvbW1vbic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFqYXhFcnJvckhhbmRsZXIoZGlzcGF0Y2gpIHtcbiAgcmV0dXJuICh7IHJlc3BvbnNlIH0pID0+IHtcbiAgICBjb25zdCBzdGF0dXNDb2RlID0gcmVzcG9uc2Uuc3RhdHVzO1xuXG4gICAgZGlzcGF0Y2goc2V0UGFnZUxvYWRpbmdTdGF0dXMoZmFsc2UpKTtcbiAgICBkaXNwYXRjaChzZXRMb2FkaW5nU3RhdHVzKGZhbHNlKSk7XG5cbiAgICBzd2l0Y2ggKHN0YXR1c0NvZGUpIHtcbiAgICAgIGNhc2UgNDA0OlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L3BhZ2Utbm90LWZvdW5kYDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDAzOlxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGAke3Zpc3NuZS5kb21haW59L2F1dGhgO1xuICAgICAgICBicmVhaztcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZGlzcGF0Y2goXG4gICAgICAgICAgdG9nZ2xlQWxlcnREaWFsb2coe1xuICAgICAgICAgICAga2luZDogJ2RhbmdlcicsXG4gICAgICAgICAgICBtZXNzYWdlOiByZXNwb25zZS5kYXRhLm1lc3NhZ2UsXG4gICAgICAgICAgfSksXG4gICAgICAgICk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfTtcbn1cbiIsImV4cG9ydCBjb25zdCBBTEVSVF9UWVBFUyA9IFtcbiAgJ3ByaW1hcnknLFxuICAnc2Vjb25kYXJ5JyxcbiAgJ3N1Y2Nlc3MnLFxuICAnZGFuZ2VyJyxcbiAgJ3dhcm5pbmcnLFxuICAnaW5mbycsXG4gICdsaWdodCcsXG4gICdkYXJrJyxcbl07XG5cbmV4cG9ydCBjb25zdCBBTEVSVF9UWVBFX0lDT05fTUFQID0ge1xuICBwcmltYXJ5OiAnJyxcbn07XG4iLCJjb25zdCBkb2MgPSBkb2N1bWVudDtcblxuY29uc3Qgc2V0ID0gKG5hbWUsIHZhbHVlKSA9PiB7XG4gIGRvYy5jb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWA7XG59O1xuXG5jb25zdCBnZXQgPSAobmFtZSkgPT4ge1xuICBjb25zdCBjb29raWVzID0gZG9jLmNvb2tpZS5zcGxpdCgnOycpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY29va2llcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IFtjbmFtZSwgY3ZhbHVlXSA9IGNvb2tpZXNbaV0uc3BsaXQoJz0nKTtcbiAgICBpZiAoY25hbWUudHJpbSgpID09PSBuYW1lLnRyaW0oKSkge1xuICAgICAgcmV0dXJuIGN2YWx1ZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldCxcbiAgc2V0LFxufTtcbiIsImltcG9ydCB7IGxpYnJhcnkgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnO1xuaW1wb3J0IHtcbiAgZmFVc2VyLFxuICBmYVNpZ25PdXRBbHQsXG4gIGZhRW52ZWxvcGUsXG4gIGZhVW5sb2NrLFxuICBmYUFsaWduTGVmdCxcbiAgZmFLZXksXG4gIGZhU2lnbmF0dXJlLFxuICBmYUZpbHRlcixcbiAgZmFTb3J0QW1vdW50VXAsXG4gIGZhU29ydEFtb3VudERvd24sXG4gIGZhVXNlckNpcmNsZSxcbiAgZmFMaXN0LFxuICBmYVN0YXIsXG4gIGZhSGVhcnQsXG4gIGZhQ29tbWVudCxcbiAgZmFTd2F0Y2hib29rLFxuICBmYVVzZXJGcmllbmRzLFxuICBmYUNvZyxcbiAgZmFFZGl0LFxuICBmYVVwbG9hZCxcbiAgZmFOZXdzcGFwZXIsXG4gIGZhQXQsXG4gIGZhQW5nbGVSaWdodCxcbiAgZmFBbmdsZUxlZnQsXG4gIGZhUGx1c1NxdWFyZSxcbiAgZmFUcmFzaCxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZyZWUtc29saWQtc3ZnLWljb25zJztcbmltcG9ydCB7XG4gIGZhRmFjZWJvb2ssXG4gIGZhR29vZ2xlLFxuICBmYVR3aXR0ZXIsXG4gIGZhSW5zdGFncmFtLFxufSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1icmFuZHMtc3ZnLWljb25zJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdCgpIHtcbiAgbGlicmFyeS5hZGQoXG4gICAgZmFVc2VyLFxuICAgIGZhU2lnbk91dEFsdCxcbiAgICBmYUVudmVsb3BlLFxuICAgIGZhVW5sb2NrLFxuICAgIGZhQWxpZ25MZWZ0LFxuICAgIGZhS2V5LFxuICAgIGZhU2lnbmF0dXJlLFxuICAgIGZhRmlsdGVyLFxuICAgIGZhU29ydEFtb3VudFVwLFxuICAgIGZhU29ydEFtb3VudERvd24sXG4gICAgZmFGYWNlYm9vayxcbiAgICBmYUdvb2dsZSxcbiAgICBmYVR3aXR0ZXIsXG4gICAgZmFJbnN0YWdyYW0sXG4gICAgZmFVc2VyQ2lyY2xlLFxuICAgIGZhTGlzdCxcbiAgICBmYVN0YXIsXG4gICAgZmFIZWFydCxcbiAgICBmYUNvbW1lbnQsXG4gICAgZmFTd2F0Y2hib29rLFxuICAgIGZhVXNlckZyaWVuZHMsXG4gICAgZmFDb2csXG4gICAgZmFFZGl0LFxuICAgIGZhVXBsb2FkLFxuICAgIGZhTmV3c3BhcGVyLFxuICAgIGZhQXQsXG4gICAgZmFBbmdsZVJpZ2h0LFxuICAgIGZhQW5nbGVMZWZ0LFxuICAgIGZhUGx1c1NxdWFyZSxcbiAgICBmYVRyYXNoLFxuICApO1xufVxuIiwiKCgpID0+IHtcbiAgY29uc3Qgd2luID0gd2luZG93O1xuXG4gIHdpbi5vbmxvYWQgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFnZUxvYWRpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFnZUxvYWRpbmcnKTtcblxuICAgIGlmIChwYWdlTG9hZGluZykge1xuICAgICAgcGFnZUxvYWRpbmcucmVtb3ZlKCk7XG4gICAgfVxuXG4gICAgaWYgKHZpc3NuZS5lbnYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcbiAgICAgICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJy9zdy5qcycpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn0pKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9