"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var common_po_1 = require("../common/common.po");
var testData = require('../../testdata.json');
var CommonComponent = /** @class */ (function () {
    function CommonComponent() {
    }
    CommonComponent.prototype.logIn = function () {
        protractor_1.browser.getCurrentUrl().then(function (url) {
            if (!url || url === protractor_1.browser.baseUrl || url === 'data:,') {
                protractor_1.browser.get(protractor_1.browser.baseUrl);
                expect(protractor_1.browser.getCurrentUrl()).toBe(protractor_1.browser.baseUrl);
                expect(common_po_1.IkeaLogin.checkIkeaLogo().isDisplayed()).toBeTruthy();
                expect(common_po_1.IkeaLogin.checkRegisterHereLink().isDisplayed()).toBeTruthy();
                expect(common_po_1.IkeaLogin.checkForgotPasswordLink().isDisplayed()).toBeTruthy();
                common_po_1.IkeaLogin.emailTextField().sendKeys(testData.loginDetails.email);
                common_po_1.IkeaLogin.passwordTextField().sendKeys(testData.loginDetails.password);
                common_po_1.IkeaLogin.LoginButton().click();
            }
        });
    };
    CommonComponent.prototype.logOut = function () {
        protractor_1.browser.getCurrentUrl().then(function (url) {
            if (url.includes('/Home/Index/')) {
                // if (url !== browser.baseUrl && url !== 'data:,') {
                common_po_1.IkeaLogin.getUserMenu().click();
                common_po_1.IkeaLogin.logoutButton();
            }
        });
    };
    CommonComponent.prototype.waitForSpinnerDisappear = function (elementLocator) {
        if (elementLocator == null) {
            elementLocator = protractor_1.element(protractor_1.by.tagName('app-loader'));
        }
        var until = protractor_1.protractor.ExpectedConditions;
        protractor_1.browser.wait(until.stalenessOf(elementLocator), 100000);
    };
    CommonComponent.prototype.waitForElementPresent = function (elementLocator) {
        return __awaiter(this, void 0, void 0, function () {
            var until;
            return __generator(this, function (_a) {
                until = protractor_1.protractor.ExpectedConditions;
                protractor_1.browser.wait(until.presenceOf(elementLocator), 100000);
                return [2 /*return*/];
            });
        });
    };
    /**
     *A function that returns the count of Elements.
     * @param e is of type { ElementArrayFinder }
     * @Example: Get the count of rows in table (<tr>)
     */
    CommonComponent.prototype.getCountOfElements = function (e) {
        return __awaiter(this, void 0, void 0, function () {
            var count;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, e.count().then(function (size) {
                            count = size;
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, count];
                }
            });
        });
    };
    CommonComponent.prototype.switchToChild = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, guid;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.getWindowHandle().then(function (parentGUID) {
                            _this.parentGID = parentGUID;
                        })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, protractor_1.browser.getAllWindowHandles().then(function (allGUID) {
                                //debugger;
                                this.allGID = allGUID;
                            })];
                    case 2:
                        _b.sent();
                        debugger;
                        for (_i = 0, _a = this.allGID; _i < _a.length; _i++) {
                            guid = _a[_i];
                            if (guid !== this.parentGID) {
                                protractor_1.browser.switchTo().window(guid);
                                break;
                            }
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    CommonComponent.prototype.switchToParent = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.switchTo().window(this.parentGID)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     *A function that Navigates to Homepage
     */
    CommonComponent.prototype.navigateToHomePage = function () {
        protractor_1.browser.getCurrentUrl().then(function (url) {
            var homeUrl = protractor_1.browser.baseUrl + '/Home/Index/dash-board';
            if (url !== homeUrl) {
                protractor_1.browser.get(homeUrl);
            }
        });
    };
    return CommonComponent;
}());
exports.CommonComponent = CommonComponent;
//# sourceMappingURL=common.component.js.map