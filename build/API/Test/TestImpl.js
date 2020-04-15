"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router = require('express').Router();
var TestImpl = /** @class */ (function () {
    function TestImpl() {
    }
    TestImpl.prototype.test = function (req, res) {
        return res.send('all set');
    };
    return TestImpl;
}());
exports.TestImpl = TestImpl;
//# sourceMappingURL=TestImpl.js.map