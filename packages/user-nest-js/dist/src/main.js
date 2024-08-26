"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _core = require("@nestjs/core");
const _appmodule = require("./app.module");
const _swagger = require("@nestjs/swagger");
async function bootstrap() {
    const app = await _core.NestFactory.create(_appmodule.AppModule);
    // Swagger configuration
    const config = new _swagger.DocumentBuilder().setTitle('My NestJS API').setDescription('API documentation for my NestJS application').setVersion('1.0').build();
    const document = _swagger.SwaggerModule.createDocument(app, config);
    _swagger.SwaggerModule.setup('api', app, document);
    await app.listen(3000);
}
bootstrap();
