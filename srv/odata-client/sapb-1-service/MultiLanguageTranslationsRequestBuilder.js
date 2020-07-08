"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MultiLanguageTranslationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var MultiLanguageTranslations_1 = require("./MultiLanguageTranslations");
/**
 * Request builder class for operations supported on the [[MultiLanguageTranslations]] entity.
 */
var MultiLanguageTranslationsRequestBuilder = /** @class */ (function (_super) {
    __extends(MultiLanguageTranslationsRequestBuilder, _super);
    function MultiLanguageTranslationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MultiLanguageTranslations` entity based on its keys.
     * @param numerator Key property. See [[MultiLanguageTranslations.numerator]].
     * @returns A request builder for creating requests to retrieve one `MultiLanguageTranslations` entity based on its keys.
     */
    MultiLanguageTranslationsRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(MultiLanguageTranslations_1.MultiLanguageTranslations, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `MultiLanguageTranslations` entities.
     * @returns A request builder for creating requests to retrieve all `MultiLanguageTranslations` entities.
     */
    MultiLanguageTranslationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(MultiLanguageTranslations_1.MultiLanguageTranslations);
    };
    /**
     * Returns a request builder for creating a `MultiLanguageTranslations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MultiLanguageTranslations`.
     */
    MultiLanguageTranslationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(MultiLanguageTranslations_1.MultiLanguageTranslations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `MultiLanguageTranslations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MultiLanguageTranslations`.
     */
    MultiLanguageTranslationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(MultiLanguageTranslations_1.MultiLanguageTranslations, entity);
    };
    MultiLanguageTranslationsRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(MultiLanguageTranslations_1.MultiLanguageTranslations, numeratorOrEntity instanceof MultiLanguageTranslations_1.MultiLanguageTranslations ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return MultiLanguageTranslationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.MultiLanguageTranslationsRequestBuilder = MultiLanguageTranslationsRequestBuilder;
//# sourceMappingURL=MultiLanguageTranslationsRequestBuilder.js.map