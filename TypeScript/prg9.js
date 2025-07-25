var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
// 9. Imagine you are receiving user data from an async generator which yields user objects. Each user has an email field. You need to:
// •	Extract the domain from each email using a regular expression with named groups.
// •	Store all unique domains using a Set.
// •	Use for-await-of to handle the incoming stream.
// •	Use Promise.finally() to print “Stream completed” at the end, even if errors occur.
// Simulated async generator yielding user data
function getUserStream() {
    return __asyncGenerator(this, arguments, function getUserStream_1() {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, __await({ email: "alice@example.com" })];
                case 1: return [4 /*yield*/, _a.sent()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, __await({ email: "bob@work.org" })];
                case 3: return [4 /*yield*/, _a.sent()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, __await({ email: "carol@example.com" })];
                case 5: return [4 /*yield*/, _a.sent()];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, __await({ email: "dave@school.edu" })];
                case 7: return [4 /*yield*/, _a.sent()];
                case 8:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function processUserStream() {
    return __awaiter(this, void 0, void 0, function () {
        var domainSet, emailRegex, streamPromise;
        var _this = this;
        return __generator(this, function (_a) {
            domainSet = new Set();
            emailRegex = /@(?<domain>[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})/;
            streamPromise = (function () { return __awaiter(_this, void 0, void 0, function () {
                var _a, _b, _c, user, match, e_1_1, _d;
                var _e, e_1, _f, _g;
                var _h;
                return __generator(this, function (_j) {
                    switch (_j.label) {
                        case 0:
                            _j.trys.push([0, 13, , 14]);
                            _j.label = 1;
                        case 1:
                            _j.trys.push([1, 6, 7, 12]);
                            _a = true, _b = __asyncValues(getUserStream());
                            _j.label = 2;
                        case 2: return [4 /*yield*/, _b.next()];
                        case 3:
                            if (!(_c = _j.sent(), _e = _c.done, !_e)) return [3 /*break*/, 5];
                            _g = _c.value;
                            _a = false;
                            user = _g;
                            match = user.email.match(emailRegex);
                            if ((_h = match === null || match === void 0 ? void 0 : match.groups) === null || _h === void 0 ? void 0 : _h.domain) {
                                domainSet.add(match.groups.domain);
                            }
                            _j.label = 4;
                        case 4:
                            _a = true;
                            return [3 /*break*/, 2];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_1_1 = _j.sent();
                            e_1 = { error: e_1_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _j.trys.push([7, , 10, 11]);
                            if (!(!_a && !_e && (_f = _b.return))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _f.call(_b)];
                        case 8:
                            _j.sent();
                            _j.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_1) throw e_1.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12:
                            console.log("Unique domains:", domainSet);
                            return [3 /*break*/, 14];
                        case 13:
                            _d = _j.sent();
                            console.error("Error while processing stream.");
                            return [3 /*break*/, 14];
                        case 14: return [2 /*return*/];
                    }
                });
            }); })();
            return [2 /*return*/, streamPromise.finally(function () {
                    console.log("Stream completed");
                })];
        });
    });
}
processUserStream();
