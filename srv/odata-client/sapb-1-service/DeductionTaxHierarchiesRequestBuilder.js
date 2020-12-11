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
exports.DeductionTaxHierarchiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DeductionTaxHierarchies_1 = require("./DeductionTaxHierarchies");
/**
 * Request builder class for operations supported on the [[DeductionTaxHierarchies]] entity.
 */
var DeductionTaxHierarchiesRequestBuilder = /** @class */ (function (_super) {
    __extends(DeductionTaxHierarchiesRequestBuilder, _super);
    function DeductionTaxHierarchiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DeductionTaxHierarchies` entity based on its keys.
     * @param absEntry Key property. See [[DeductionTaxHierarchies.absEntry]].
     * @returns A request builder for creating requests to retrieve one `DeductionTaxHierarchies` entity based on its keys.
     */
    DeductionTaxHierarchiesRequestBuilder.prototype.getByKey = function (absEntry) {
        return new core_1.GetByKeyRequestBuilderV4(DeductionTaxHierarchies_1.DeductionTaxHierarchies, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `DeductionTaxHierarchies` entities.
     * @returns A request builder for creating requests to retrieve all `DeductionTaxHierarchies` entities.
     */
    DeductionTaxHierarchiesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DeductionTaxHierarchies_1.DeductionTaxHierarchies);
    };
    /**
     * Returns a request builder for creating a `DeductionTaxHierarchies` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeductionTaxHierarchies`.
     */
    DeductionTaxHierarchiesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DeductionTaxHierarchies_1.DeductionTaxHierarchies, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DeductionTaxHierarchies`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeductionTaxHierarchies`.
     */
    DeductionTaxHierarchiesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DeductionTaxHierarchies_1.DeductionTaxHierarchies, entity);
    };
    DeductionTaxHierarchiesRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DeductionTaxHierarchies_1.DeductionTaxHierarchies, absEntryOrEntity instanceof DeductionTaxHierarchies_1.DeductionTaxHierarchies ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return DeductionTaxHierarchiesRequestBuilder;
}(core_1.RequestBuilder));
exports.DeductionTaxHierarchiesRequestBuilder = DeductionTaxHierarchiesRequestBuilder;
//# sourceMappingURL=DeductionTaxHierarchiesRequestBuilder.js.map