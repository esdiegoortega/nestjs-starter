"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var Joi = require("joi");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var characters_module_1 = require("./characters/characters.module");
var enviroments_1 = require("./enviroments");
var config_2 = require("./config");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        common_1.Module({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                    load: [config_2["default"]],
                    isGlobal: true,
                    validationSchema: Joi.object({
                        TEST_KEY: Joi.string().required(),
                        RICK_AND_MORTY_API: Joi.string().required()
                    })
                }),
                characters_module_1.CharactersModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;