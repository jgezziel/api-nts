"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/no-misused-promises */
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const router = (0, express_1.Router)();
router.get('/', user_controller_1.userController.getAllUsers);
router.get('/:id', user_controller_1.userController.getUserById);
router.post('/', user_controller_1.userController.createUser);
router.put('/:id', user_controller_1.userController.updateUser);
router.delete('/:id', user_controller_1.userController.deleteUser);
exports.default = router;
//# sourceMappingURL=user.routes.js.map