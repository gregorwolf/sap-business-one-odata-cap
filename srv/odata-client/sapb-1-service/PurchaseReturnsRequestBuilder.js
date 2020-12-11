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
exports.PurchaseReturnsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PurchaseReturns_1 = require("./PurchaseReturns");
/**
 * Request builder class for operations supported on the [[PurchaseReturns]] entity.
 */
var PurchaseReturnsRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseReturnsRequestBuilder, _super);
    function PurchaseReturnsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseReturns` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseReturns.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseReturns` entity based on its keys.
     */
    PurchaseReturnsRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(PurchaseReturns_1.PurchaseReturns, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseReturns` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseReturns` entities.
     */
    PurchaseReturnsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PurchaseReturns_1.PurchaseReturns);
    };
    /**
     * Returns a request builder for creating a `PurchaseReturns` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseReturns`.
     */
    PurchaseReturnsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PurchaseReturns_1.PurchaseReturns, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseReturns`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseReturns`.
     */
    PurchaseReturnsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PurchaseReturns_1.PurchaseReturns, entity);
    };
    PurchaseReturnsRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PurchaseReturns_1.PurchaseReturns, docEntryOrEntity instanceof PurchaseReturns_1.PurchaseReturns ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseReturnsRequestBuilder;
}(core_1.RequestBuilder));
exports.PurchaseReturnsRequestBuilder = PurchaseReturnsRequestBuilder;
//# sourceMappingURL=PurchaseReturnsRequestBuilder.js.map