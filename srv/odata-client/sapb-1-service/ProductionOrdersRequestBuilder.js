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
exports.ProductionOrdersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ProductionOrders_1 = require("./ProductionOrders");
/**
 * Request builder class for operations supported on the [[ProductionOrders]] entity.
 */
var ProductionOrdersRequestBuilder = /** @class */ (function (_super) {
    __extends(ProductionOrdersRequestBuilder, _super);
    function ProductionOrdersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ProductionOrders` entity based on its keys.
     * @param absoluteEntry Key property. See [[ProductionOrders.absoluteEntry]].
     * @returns A request builder for creating requests to retrieve one `ProductionOrders` entity based on its keys.
     */
    ProductionOrdersRequestBuilder.prototype.getByKey = function (absoluteEntry) {
        return new core_1.GetByKeyRequestBuilderV4(ProductionOrders_1.ProductionOrders, { AbsoluteEntry: absoluteEntry });
    };
    /**
     * Returns a request builder for querying all `ProductionOrders` entities.
     * @returns A request builder for creating requests to retrieve all `ProductionOrders` entities.
     */
    ProductionOrdersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ProductionOrders_1.ProductionOrders);
    };
    /**
     * Returns a request builder for creating a `ProductionOrders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ProductionOrders`.
     */
    ProductionOrdersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ProductionOrders_1.ProductionOrders, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ProductionOrders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ProductionOrders`.
     */
    ProductionOrdersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ProductionOrders_1.ProductionOrders, entity);
    };
    ProductionOrdersRequestBuilder.prototype.delete = function (absoluteEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ProductionOrders_1.ProductionOrders, absoluteEntryOrEntity instanceof ProductionOrders_1.ProductionOrders ? absoluteEntryOrEntity : { AbsoluteEntry: absoluteEntryOrEntity });
    };
    return ProductionOrdersRequestBuilder;
}(core_1.RequestBuilder));
exports.ProductionOrdersRequestBuilder = ProductionOrdersRequestBuilder;
//# sourceMappingURL=ProductionOrdersRequestBuilder.js.map