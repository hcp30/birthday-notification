"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BirthdayRoutes = void 0;
const express_1 = __importDefault(require("express"));
const BirthdayController_1 = require("../controller/BirthdayController");
const router = (0, express_1.default)();
exports.BirthdayRoutes = router;
router.get('/first-name/:firstname/last-name/:lastname/date/:date', BirthdayController_1.postUserBirthdayInfo);
