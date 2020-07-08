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
exports.PredefinedTextsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PredefinedTexts_1 = require("./PredefinedTexts");
/**
 * Request builder class for operations supported on the [[PredefinedTexts]] entity.
 */
var PredefinedTextsRequestBuilder = /** @class */ (function (_super) {
    __extends(PredefinedTextsRequestBuilder, _super);
    function PredefinedTextsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PredefinedTexts` entity based on its keys.
     * @param numerator Key property. See [[PredefinedTexts.numerator]].
     * @returns A request builder for creating requests to retrieve one `PredefinedTexts` entity based on its keys.
     */
    PredefinedTextsRequestBuilder.prototype.getByKey = function (numerator) {
        return new v4_1.GetByKeyRequestBuilder(PredefinedTexts_1.PredefinedTexts, { Numerator: numerator });
    };
    /**
     * Returns a request builder for querying all `PredefinedTexts` entities.
     * @returns A request builder for creating requests to retrieve all `PredefinedTexts` entities.
     */
    PredefinedTextsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PredefinedTexts_1.PredefinedTexts);
    };
    /**
     * Returns a request builder for creating a `PredefinedTexts` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PredefinedTexts`.
     */
    PredefinedTextsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PredefinedTexts_1.PredefinedTexts, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PredefinedTexts`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PredefinedTexts`.
     */
    PredefinedTextsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PredefinedTexts_1.PredefinedTexts, entity);
    };
    PredefinedTextsRequestBuilder.prototype.delete = function (numeratorOrEntity) {
        return new v4_1.DeleteRequestBuilder(PredefinedTexts_1.PredefinedTexts, numeratorOrEntity instanceof PredefinedTexts_1.PredefinedTexts ? numeratorOrEntity : { Numerator: numeratorOrEntity });
    };
    return PredefinedTextsRequestBuilder;
}(v4_1.RequestBuilder));
exports.PredefinedTextsRequestBuilder = PredefinedTextsRequestBuilder;
//# sourceMappingURL=PredefinedTextsRequestBuilder.js.map