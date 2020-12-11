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
exports.MaterialRevaluationRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var MaterialRevaluation_1 = require("./MaterialRevaluation");
/**
 * Request builder class for operations supported on the [[MaterialRevaluation]] entity.
 */
var MaterialRevaluationRequestBuilder = /** @class */ (function (_super) {
    __extends(MaterialRevaluationRequestBuilder, _super);
    function MaterialRevaluationRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MaterialRevaluation` entity based on its keys.
     * @param docEntry Key property. See [[MaterialRevaluation.docEntry]].
     * @returns A request builder for creating requests to retrieve one `MaterialRevaluation` entity based on its keys.
     */
    MaterialRevaluationRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(MaterialRevaluation_1.MaterialRevaluation, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `MaterialRevaluation` entities.
     * @returns A request builder for creating requests to retrieve all `MaterialRevaluation` entities.
     */
    MaterialRevaluationRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(MaterialRevaluation_1.MaterialRevaluation);
    };
    /**
     * Returns a request builder for creating a `MaterialRevaluation` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MaterialRevaluation`.
     */
    MaterialRevaluationRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(MaterialRevaluation_1.MaterialRevaluation, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `MaterialRevaluation`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MaterialRevaluation`.
     */
    MaterialRevaluationRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(MaterialRevaluation_1.MaterialRevaluation, entity);
    };
    MaterialRevaluationRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(MaterialRevaluation_1.MaterialRevaluation, docEntryOrEntity instanceof MaterialRevaluation_1.MaterialRevaluation ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return MaterialRevaluationRequestBuilder;
}(core_1.RequestBuilder));
exports.MaterialRevaluationRequestBuilder = MaterialRevaluationRequestBuilder;
//# sourceMappingURL=MaterialRevaluationRequestBuilder.js.map