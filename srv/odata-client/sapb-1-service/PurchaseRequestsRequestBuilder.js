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
exports.PurchaseRequestsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PurchaseRequests_1 = require("./PurchaseRequests");
/**
 * Request builder class for operations supported on the [[PurchaseRequests]] entity.
 */
var PurchaseRequestsRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseRequestsRequestBuilder, _super);
    function PurchaseRequestsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseRequests` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseRequests.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseRequests` entity based on its keys.
     */
    PurchaseRequestsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(PurchaseRequests_1.PurchaseRequests, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseRequests` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseRequests` entities.
     */
    PurchaseRequestsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PurchaseRequests_1.PurchaseRequests);
    };
    /**
     * Returns a request builder for creating a `PurchaseRequests` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseRequests`.
     */
    PurchaseRequestsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PurchaseRequests_1.PurchaseRequests, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseRequests`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseRequests`.
     */
    PurchaseRequestsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PurchaseRequests_1.PurchaseRequests, entity);
    };
    PurchaseRequestsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PurchaseRequests_1.PurchaseRequests, docEntryOrEntity instanceof PurchaseRequests_1.PurchaseRequests ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseRequestsRequestBuilder;
}(v4_1.RequestBuilder));
exports.PurchaseRequestsRequestBuilder = PurchaseRequestsRequestBuilder;
//# sourceMappingURL=PurchaseRequestsRequestBuilder.js.map