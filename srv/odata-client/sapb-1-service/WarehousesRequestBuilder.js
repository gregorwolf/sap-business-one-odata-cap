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
exports.WarehousesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var Warehouses_1 = require("./Warehouses");
/**
 * Request builder class for operations supported on the [[Warehouses]] entity.
 */
var WarehousesRequestBuilder = /** @class */ (function (_super) {
    __extends(WarehousesRequestBuilder, _super);
    function WarehousesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Warehouses` entity based on its keys.
     * @param warehouseCode Key property. See [[Warehouses.warehouseCode]].
     * @returns A request builder for creating requests to retrieve one `Warehouses` entity based on its keys.
     */
    WarehousesRequestBuilder.prototype.getByKey = function (warehouseCode) {
        return new core_1.GetByKeyRequestBuilderV4(Warehouses_1.Warehouses, { WarehouseCode: warehouseCode });
    };
    /**
     * Returns a request builder for querying all `Warehouses` entities.
     * @returns A request builder for creating requests to retrieve all `Warehouses` entities.
     */
    WarehousesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(Warehouses_1.Warehouses);
    };
    /**
     * Returns a request builder for creating a `Warehouses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Warehouses`.
     */
    WarehousesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(Warehouses_1.Warehouses, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Warehouses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Warehouses`.
     */
    WarehousesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(Warehouses_1.Warehouses, entity);
    };
    WarehousesRequestBuilder.prototype.delete = function (warehouseCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(Warehouses_1.Warehouses, warehouseCodeOrEntity instanceof Warehouses_1.Warehouses ? warehouseCodeOrEntity : { WarehouseCode: warehouseCodeOrEntity });
    };
    return WarehousesRequestBuilder;
}(core_1.RequestBuilder));
exports.WarehousesRequestBuilder = WarehousesRequestBuilder;
//# sourceMappingURL=WarehousesRequestBuilder.js.map