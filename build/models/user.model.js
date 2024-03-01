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
exports.userModel = void 0;
exports.userModel = {
    getAllUsers: () => __awaiter(void 0, void 0, void 0, function* () {
        return 'Get all users';
    }),
    getUserById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return `Get a user by id: ${id}`;
    }),
    createUser: (_input) => __awaiter(void 0, void 0, void 0, function* () {
        return 'Create a new user';
    }),
    updateUser: (id, _input) => __awaiter(void 0, void 0, void 0, function* () {
        return `Update a user: ${id}`;
    }),
    deleteUser: (id) => __awaiter(void 0, void 0, void 0, function* () {
        return `Delete a user: ${id}`;
    })
};
//# sourceMappingURL=user.model.js.map