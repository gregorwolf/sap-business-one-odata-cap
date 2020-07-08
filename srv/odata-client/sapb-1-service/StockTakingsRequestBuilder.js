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
exports.StockTakingsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var StockTakings_1 = require("./StockTakings");
/**
 * Request builder class for operations supported on the [[StockTakings]] entity.
 */
var StockTakingsRequestBuilder = /** @class */ (function (_super) {
    __extends(StockTakingsRequestBuilder, _super);
    function StockTakingsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `StockTakings` entity based on its keys.
     * @param itemCode Key property. See [[StockTakings.itemCode]].
     * @param warehouseCode Key property. See [[StockTakings.warehouseCode]].
     * @returns A request builder for creating requests to retrieve one `StockTakings` entity based on its keys.
     */
    StockTakingsRequestBuilder.prototype.getByKey = function (itemCode, warehouseCode) {
        return new v4_1.GetByKeyRequestBuilder(StockTakings_1.StockTakings, {
            ItemCode: itemCode,
            WarehouseCode: warehouseCode
        });
    };
    /**
     * Returns a request builder for querying all `StockTakings` entities.
     * @returns A request builder for creating requests to retrieve all `StockTakings` entities.
     */
    StockTakingsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(StockTakings_1.StockTakings);
    };
    /**
     * Returns a request builder for creating a `StockTakings` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `StockTakings`.
     */
    StockTakingsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(StockTakings_1.StockTakings, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `StockTakings`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `StockTakings`.
     */
    StockTakingsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(StockTakings_1.StockTakings, entity);
    };
    StockTakingsRequestBuilder.prototype.delete = function (itemCodeOrEntity, warehouseCode) {
        return new v4_1.DeleteRequestBuilder(StockTakings_1.StockTakings, itemCodeOrEntity instanceof StockTakings_1.StockTakings ? itemCodeOrEntity : {
            ItemCode: itemCodeOrEntity,
            WarehouseCode: warehouseCode
        });
    };
    return StockTakingsRequestBuilder;
}(v4_1.RequestBuilder));
exports.StockTakingsRequestBuilder = StockTakingsRequestBuilder;
//# sourceMappingURL=StockTakingsRequestBuilder.js.map