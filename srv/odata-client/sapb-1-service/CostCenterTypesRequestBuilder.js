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
exports.CostCenterTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CostCenterTypes_1 = require("./CostCenterTypes");
/**
 * Request builder class for operations supported on the [[CostCenterTypes]] entity.
 */
var CostCenterTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(CostCenterTypesRequestBuilder, _super);
    function CostCenterTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CostCenterTypes` entity based on its keys.
     * @param costCenterTypeCode Key property. See [[CostCenterTypes.costCenterTypeCode]].
     * @returns A request builder for creating requests to retrieve one `CostCenterTypes` entity based on its keys.
     */
    CostCenterTypesRequestBuilder.prototype.getByKey = function (costCenterTypeCode) {
        return new v4_1.GetByKeyRequestBuilder(CostCenterTypes_1.CostCenterTypes, { CostCenterTypeCode: costCenterTypeCode });
    };
    /**
     * Returns a request builder for querying all `CostCenterTypes` entities.
     * @returns A request builder for creating requests to retrieve all `CostCenterTypes` entities.
     */
    CostCenterTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CostCenterTypes_1.CostCenterTypes);
    };
    /**
     * Returns a request builder for creating a `CostCenterTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CostCenterTypes`.
     */
    CostCenterTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CostCenterTypes_1.CostCenterTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CostCenterTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CostCenterTypes`.
     */
    CostCenterTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CostCenterTypes_1.CostCenterTypes, entity);
    };
    CostCenterTypesRequestBuilder.prototype.delete = function (costCenterTypeCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CostCenterTypes_1.CostCenterTypes, costCenterTypeCodeOrEntity instanceof CostCenterTypes_1.CostCenterTypes ? costCenterTypeCodeOrEntity : { CostCenterTypeCode: costCenterTypeCodeOrEntity });
    };
    return CostCenterTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.CostCenterTypesRequestBuilder = CostCenterTypesRequestBuilder;
//# sourceMappingURL=CostCenterTypesRequestBuilder.js.map