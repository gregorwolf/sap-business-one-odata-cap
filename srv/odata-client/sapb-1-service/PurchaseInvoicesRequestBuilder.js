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
exports.PurchaseInvoicesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
/**
 * Request builder class for operations supported on the [[PurchaseInvoices]] entity.
 */
var PurchaseInvoicesRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseInvoicesRequestBuilder, _super);
    function PurchaseInvoicesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseInvoices` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseInvoices.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseInvoices` entity based on its keys.
     */
    PurchaseInvoicesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(PurchaseInvoices_1.PurchaseInvoices, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseInvoices` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseInvoices` entities.
     */
    PurchaseInvoicesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PurchaseInvoices_1.PurchaseInvoices);
    };
    /**
     * Returns a request builder for creating a `PurchaseInvoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseInvoices`.
     */
    PurchaseInvoicesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PurchaseInvoices_1.PurchaseInvoices, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseInvoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseInvoices`.
     */
    PurchaseInvoicesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PurchaseInvoices_1.PurchaseInvoices, entity);
    };
    PurchaseInvoicesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PurchaseInvoices_1.PurchaseInvoices, docEntryOrEntity instanceof PurchaseInvoices_1.PurchaseInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseInvoicesRequestBuilder;
}(v4_1.RequestBuilder));
exports.PurchaseInvoicesRequestBuilder = PurchaseInvoicesRequestBuilder;
//# sourceMappingURL=PurchaseInvoicesRequestBuilder.js.map