"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hashPassword = hashPassword;
const bcryptjs_1 = require("bcryptjs");
function hashPassword(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!req.body.password) {
            throw new Error("Password is required");
        }
        try {
            req.body.password = yield (0, bcryptjs_1.hash)(req.body.password, 10);
            next();
        }
        catch (error) {
            return res.status(500).json({ error: "Error hashing password" });
        }
    });
}
