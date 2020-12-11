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
exports.PurchaseTaxInvoicesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PurchaseTaxInvoices_1 = require("./PurchaseTaxInvoices");
/**
 * Request builder class for operations supported on the [[PurchaseTaxInvoices]] entity.
 */
var PurchaseTaxInvoicesRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseTaxInvoicesRequestBuilder, _super);
    function PurchaseTaxInvoicesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseTaxInvoices` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseTaxInvoices.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseTaxInvoices` entity based on its keys.
     */
    PurchaseTaxInvoicesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(PurchaseTaxInvoices_1.PurchaseTaxInvoices, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseTaxInvoices` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseTaxInvoices` entities.
     */
    PurchaseTaxInvoicesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PurchaseTaxInvoices_1.PurchaseTaxInvoices);
    };
    /**
     * Returns a request builder for creating a `PurchaseTaxInvoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseTaxInvoices`.
     */
    PurchaseTaxInvoicesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PurchaseTaxInvoices_1.PurchaseTaxInvoices, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseTaxInvoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseTaxInvoices`.
     */
    PurchaseTaxInvoicesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PurchaseTaxInvoices_1.PurchaseTaxInvoices, entity);
    };
    PurchaseTaxInvoicesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PurchaseTaxInvoices_1.PurchaseTaxInvoices, docEntryOrEntity instanceof PurchaseTaxInvoices_1.PurchaseTaxInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseTaxInvoicesRequestBuilder;
}(core_1.RequestBuilder));
exports.PurchaseTaxInvoicesRequestBuilder = PurchaseTaxInvoicesRequestBuilder;
//# sourceMappingURL=PurchaseTaxInvoicesRequestBuilder.js.map