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
exports.CashFlowLineItemsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CashFlowLineItems_1 = require("./CashFlowLineItems");
/**
 * Request builder class for operations supported on the [[CashFlowLineItems]] entity.
 */
var CashFlowLineItemsRequestBuilder = /** @class */ (function (_super) {
    __extends(CashFlowLineItemsRequestBuilder, _super);
    function CashFlowLineItemsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CashFlowLineItems` entity based on its keys.
     * @param lineItemId Key property. See [[CashFlowLineItems.lineItemId]].
     * @returns A request builder for creating requests to retrieve one `CashFlowLineItems` entity based on its keys.
     */
    CashFlowLineItemsRequestBuilder.prototype.getByKey = function (lineItemId) {
        return new core_1.GetByKeyRequestBuilderV4(CashFlowLineItems_1.CashFlowLineItems, { LineItemID: lineItemId });
    };
    /**
     * Returns a request builder for querying all `CashFlowLineItems` entities.
     * @returns A request builder for creating requests to retrieve all `CashFlowLineItems` entities.
     */
    CashFlowLineItemsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CashFlowLineItems_1.CashFlowLineItems);
    };
    /**
     * Returns a request builder for creating a `CashFlowLineItems` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CashFlowLineItems`.
     */
    CashFlowLineItemsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CashFlowLineItems_1.CashFlowLineItems, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CashFlowLineItems`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CashFlowLineItems`.
     */
    CashFlowLineItemsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CashFlowLineItems_1.CashFlowLineItems, entity);
    };
    CashFlowLineItemsRequestBuilder.prototype.delete = function (lineItemIdOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CashFlowLineItems_1.CashFlowLineItems, lineItemIdOrEntity instanceof CashFlowLineItems_1.CashFlowLineItems ? lineItemIdOrEntity : { LineItemID: lineItemIdOrEntity });
    };
    return CashFlowLineItemsRequestBuilder;
}(core_1.RequestBuilder));
exports.CashFlowLineItemsRequestBuilder = CashFlowLineItemsRequestBuilder;
//# sourceMappingURL=CashFlowLineItemsRequestBuilder.js.map