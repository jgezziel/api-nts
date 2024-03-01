"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan")); // DEV
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const app = (0, express_1.default)();
app.disable('x-powered-by'); // Disable the x-powered-by header
// Middlewares
app.use(express_1.default.json());
// Cookies
// DEV: Morgan
app.use((0, morgan_1.default)('dev'));
// Routes
const API_VERSION = '/api/v1';
app.use(`${API_VERSION}/user`, user_routes_1.default); // User routes
exports.default = app;
//# sourceMappingURL=app.js.map