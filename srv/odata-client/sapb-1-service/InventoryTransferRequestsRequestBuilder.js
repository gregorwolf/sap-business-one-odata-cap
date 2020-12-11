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
exports.InventoryTransferRequestsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var InventoryTransferRequests_1 = require("./InventoryTransferRequests");
/**
 * Request builder class for operations supported on the [[InventoryTransferRequests]] entity.
 */
var InventoryTransferRequestsRequestBuilder = /** @class */ (function (_super) {
    __extends(InventoryTransferRequestsRequestBuilder, _super);
    function InventoryTransferRequestsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `InventoryTransferRequests` entity based on its keys.
     * @param docEntry Key property. See [[InventoryTransferRequests.docEntry]].
     * @returns A request builder for creating requests to retrieve one `InventoryTransferRequests` entity based on its keys.
     */
    InventoryTransferRequestsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(InventoryTransferRequests_1.InventoryTransferRequests, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `InventoryTransferRequests` entities.
     * @returns A request builder for creating requests to retrieve all `InventoryTransferRequests` entities.
     */
    InventoryTransferRequestsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(InventoryTransferRequests_1.InventoryTransferRequests);
    };
    /**
     * Returns a request builder for creating a `InventoryTransferRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InventoryTransferRequests`.
     */
    InventoryTransferRequestsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(InventoryTransferRequests_1.InventoryTransferRequests, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `InventoryTransferRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InventoryTransferRequests`.
     */
    InventoryTransferRequestsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(InventoryTransferRequests_1.InventoryTransferRequests, entity);
    };
    InventoryTransferRequestsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(InventoryTransferRequests_1.InventoryTransferRequests, docEntryOrEntity instanceof InventoryTransferRequests_1.InventoryTransferRequests ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return InventoryTransferRequestsRequestBuilder;
}(core_1.RequestBuilder));
exports.InventoryTransferRequestsRequestBuilder = InventoryTransferRequestsRequestBuilder;
//# sourceMappingURL=InventoryTransferRequestsRequestBuilder.js.map