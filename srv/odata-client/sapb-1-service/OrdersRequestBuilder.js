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
exports.OrdersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Orders_1 = require("./Orders");
/**
 * Request builder class for operations supported on the [[Orders]] entity.
 */
var OrdersRequestBuilder = /** @class */ (function (_super) {
    __extends(OrdersRequestBuilder, _super);
    function OrdersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Orders` entity based on its keys.
     * @param docEntry Key property. See [[Orders.docEntry]].
     * @returns A request builder for creating requests to retrieve one `Orders` entity based on its keys.
     */
    OrdersRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(Orders_1.Orders, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `Orders` entities.
     * @returns A request builder for creating requests to retrieve all `Orders` entities.
     */
    OrdersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Orders_1.Orders);
    };
    /**
     * Returns a request builder for creating a `Orders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Orders`.
     */
    OrdersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Orders_1.Orders, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Orders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Orders`.
     */
    OrdersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Orders_1.Orders, entity);
    };
    OrdersRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(Orders_1.Orders, docEntryOrEntity instanceof Orders_1.Orders ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return OrdersRequestBuilder;
}(v4_1.RequestBuilder));
exports.OrdersRequestBuilder = OrdersRequestBuilder;
//# sourceMappingURL=OrdersRequestBuilder.js.map