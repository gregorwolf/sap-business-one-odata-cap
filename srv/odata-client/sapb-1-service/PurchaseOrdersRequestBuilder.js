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
exports.PurchaseOrdersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PurchaseOrders_1 = require("./PurchaseOrders");
/**
 * Request builder class for operations supported on the [[PurchaseOrders]] entity.
 */
var PurchaseOrdersRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseOrdersRequestBuilder, _super);
    function PurchaseOrdersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseOrders` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseOrders.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseOrders` entity based on its keys.
     */
    PurchaseOrdersRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(PurchaseOrders_1.PurchaseOrders, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseOrders` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseOrders` entities.
     */
    PurchaseOrdersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PurchaseOrders_1.PurchaseOrders);
    };
    /**
     * Returns a request builder for creating a `PurchaseOrders` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseOrders`.
     */
    PurchaseOrdersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PurchaseOrders_1.PurchaseOrders, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseOrders`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseOrders`.
     */
    PurchaseOrdersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PurchaseOrders_1.PurchaseOrders, entity);
    };
    PurchaseOrdersRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PurchaseOrders_1.PurchaseOrders, docEntryOrEntity instanceof PurchaseOrders_1.PurchaseOrders ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseOrdersRequestBuilder;
}(v4_1.RequestBuilder));
exports.PurchaseOrdersRequestBuilder = PurchaseOrdersRequestBuilder;
//# sourceMappingURL=PurchaseOrdersRequestBuilder.js.map