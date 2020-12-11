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
exports.WorkOrdersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(WorkOrders_1.WorkOrders, { OrderNum: orderNum });
    };
    /**
     * Returns a request builder for querying all `WorkOrders` entities.
     * @returns A request builder for creating requests to retrieve all `WorkOrders` entities.
     */
    WorkOrdersRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(WorkOrders_1.WorkOrders);
    };
    /**
     * Returns a request builder for creating a `WorkOrders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `WorkOrders`.
     */
    WorkOrdersRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(WorkOrders_1.WorkOrders, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `WorkOrders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `WorkOrders`.
     */
    WorkOrdersRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(WorkOrders_1.WorkOrders, entity);
    };
    WorkOrdersRequestBuilder.prototype.delete = function (orderNumOrEntity) {
        return new core_1.DeleteRequestBuilderV4(WorkOrders_1.WorkOrders, orderNumOrEntity instanceof WorkOrders_1.WorkOrders ? orderNumOrEntity : { OrderNum: orderNumOrEntity });
    };
    return WorkOrdersRequestBuilder;
}(core_1.RequestBuilder));
exports.WorkOrdersRequestBuilder = WorkOrdersRequestBuilder;
//# sourceMappingURL=WorkOrdersRequestBuilder.js.map