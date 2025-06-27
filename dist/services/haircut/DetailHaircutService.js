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
exports.DetailHaircutService = void 0;
const HaircutRepository_1 = require("../../repository/prisma/haircut/HaircutRepository");
const haircutRepositoy = new HaircutRepository_1.HaircutRepository();
class DetailHaircutService {
    detail(_a) {
        return __awaiter(this, arguments, void 0, function* ({ haircut_id }) {
            const detail = yield haircutRepositoy.detailHaircut(haircut_id);
            return detail;
        });
    }
}
exports.DetailHaircutService = DetailHaircutService;
