"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.geoip = void 0;
const geoip_lite_1 = __importDefault(require("geoip-lite"));
exports.geoip = function (next) {
    var _a, _b, _c, _d;
    const ip = (this.req.headers["x-forwarded-for"] || "").split(",").pop() || ((_a = this.req.connection) === null || _a === void 0 ? void 0 : _a.remoteAddress) || ((_b = this.req.socket) === null || _b === void 0 ? void 0 : _b.remoteAddress) || ((_d = (_c = this.req.connection) === null || _c === void 0 ? void 0 : _c.socket) === null || _d === void 0 ? void 0 : _d.remoteAddress) ||
        this.req.ip;
    const geo = geoip_lite_1.default.lookup(ip);
    next(null, {
        geoip: {
            country: geo ? geo.country : null,
            ip,
        },
    });
};
//# sourceMappingURL=geoip.js.map