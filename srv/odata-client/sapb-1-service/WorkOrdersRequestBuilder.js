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
exports.WorkOrdersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var WorkOrders_1 = require("./WorkOrders");
/**
 * Request builder class for operations supported on the [[WorkOrders]] entity.
 */
var WorkOrdersRequestBuilder = /** @class */ (function (_super) {
    __extends(WorkOrdersRequestBuilder, _super);
    function WorkOrdersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `WorkOrders` entity based on its keys.
     * @param orderNum Key property. See [[WorkOrders.orderNum]].
     * @returns A request builder for creating requests to retrieve one `WorkOrders` entity based on its keys.
     */
    WorkOrdersRequestBuilder.prototype.getByKey = function (orderNum) {
        return new v4_1.GetByKeyRequestBuilder(WorkOrders_1.WorkOrders, { OrderNum: orderNum });
    };
    /**
     * Returns a request builder for querying all `WorkOrders` entities.
     * @returns A request builder for creating requests to retrieve all `WorkOrders` entities.
     */
    WorkOrdersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(WorkOrders_1.WorkOrders);
    };
    /**
     * Returns a request builder for creating a `WorkOrders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkOrders`.
     */
    WorkOrdersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(WorkOrders_1.WorkOrders, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkOrders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkOrders`.
     */
    WorkOrdersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(WorkOrders_1.WorkOrders, entity);
    };
    WorkOrdersRequestBuilder.prototype.delete = function (orderNumOrEntity) {
        return new v4_1.DeleteRequestBuilder(WorkOrders_1.WorkOrders, orderNumOrEntity instanceof WorkOrders_1.WorkOrders ? orderNumOrEntity : { OrderNum: orderNumOrEntity });
    };
    return WorkOrdersRequestBuilder;
}(v4_1.RequestBuilder));
exports.WorkOrdersRequestBuilder = WorkOrdersRequestBuilder;
//# sourceMappingURL=WorkOrdersRequestBuilder.js.map