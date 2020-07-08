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
exports.CycleCountDeterminationsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CycleCountDeterminations_1 = require("./CycleCountDeterminations");
/**
 * Request builder class for operations supported on the [[CycleCountDeterminations]] entity.
 */
var CycleCountDeterminationsRequestBuilder = /** @class */ (function (_super) {
    __extends(CycleCountDeterminationsRequestBuilder, _super);
    function CycleCountDeterminationsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CycleCountDeterminations` entity based on its keys.
     * @param warehouseCode Key property. See [[CycleCountDeterminations.warehouseCode]].
     * @returns A request builder for creating requests to retrieve one `CycleCountDeterminations` entity based on its keys.
     */
    CycleCountDeterminationsRequestBuilder.prototype.getByKey = function (warehouseCode) {
        return new v4_1.GetByKeyRequestBuilder(CycleCountDeterminations_1.CycleCountDeterminations, { WarehouseCode: warehouseCode });
    };
    /**
     * Returns a request builder for querying all `CycleCountDeterminations` entities.
     * @returns A request builder for creating requests to retrieve all `CycleCountDeterminations` entities.
     */
    CycleCountDeterminationsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CycleCountDeterminations_1.CycleCountDeterminations);
    };
    /**
     * Returns a request builder for creating a `CycleCountDeterminations` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CycleCountDeterminations`.
     */
    CycleCountDeterminationsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CycleCountDeterminations_1.CycleCountDeterminations, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CycleCountDeterminations`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CycleCountDeterminations`.
     */
    CycleCountDeterminationsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CycleCountDeterminations_1.CycleCountDeterminations, entity);
    };
    CycleCountDeterminationsRequestBuilder.prototype.delete = function (warehouseCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CycleCountDeterminations_1.CycleCountDeterminations, warehouseCodeOrEntity instanceof CycleCountDeterminations_1.CycleCountDeterminations ? warehouseCodeOrEntity : { WarehouseCode: warehouseCodeOrEntity });
    };
    return CycleCountDeterminationsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CycleCountDeterminationsRequestBuilder = CycleCountDeterminationsRequestBuilder;
//# sourceMappingURL=CycleCountDeterminationsRequestBuilder.js.map