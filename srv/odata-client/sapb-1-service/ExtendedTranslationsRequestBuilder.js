"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedTranslationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ExtendedTranslations_1 = require("./ExtendedTranslations");
/**
 * Request builder class for operations supported on the [[ExtendedTranslations]] entity.
 */
var ExtendedTranslationsRequestBuilder = /** @class */ (function (_super) {
    __extends(ExtendedTranslationsRequestBuilder, _super);
    function ExtendedTranslationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ExtendedTranslations` entity based on its keys.
     * @param docEntry Key property. See [[ExtendedTranslations.docEntry]].
     * @returns A request builder for creating requests to retrieve one `ExtendedTranslations` entity based on its keys.
     */
    ExtendedTranslationsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(ExtendedTranslations_1.ExtendedTranslations, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `ExtendedTranslations` entities.
     * @returns A request builder for creating requests to retrieve all `ExtendedTranslations` entities.
     */
    ExtendedTranslationsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ExtendedTranslations_1.ExtendedTranslations);
    };
    /**
     * Returns a request builder for creating a `ExtendedTranslations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ExtendedTranslations`.
     */
    ExtendedTranslationsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ExtendedTranslations_1.ExtendedTranslations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ExtendedTranslations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ExtendedTranslations`.
     */
    ExtendedTranslationsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ExtendedTranslations_1.ExtendedTranslations, entity);
    };
    ExtendedTranslationsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ExtendedTranslations_1.ExtendedTranslations, docEntryOrEntity instanceof ExtendedTranslations_1.ExtendedTranslations ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return ExtendedTranslationsRequestBuilder;
}(core_1.RequestBuilder));
exports.ExtendedTranslationsRequestBuilder = ExtendedTranslationsRequestBuilder;
//# sourceMappingURL=ExtendedTranslationsRequestBuilder.js.map