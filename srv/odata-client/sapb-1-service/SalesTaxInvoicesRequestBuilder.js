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
exports.SalesTaxInvoicesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var SalesTaxInvoices_1 = require("./SalesTaxInvoices");
/**
 * Request builder class for operations supported on the [[SalesTaxInvoices]] entity.
 */
var SalesTaxInvoicesRequestBuilder = /** @class */ (function (_super) {
    __extends(SalesTaxInvoicesRequestBuilder, _super);
    function SalesTaxInvoicesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `SalesTaxInvoices` entity based on its keys.
     * @param docEntry Key property. See [[SalesTaxInvoices.docEntry]].
     * @returns A request builder for creating requests to retrieve one `SalesTaxInvoices` entity based on its keys.
     */
    SalesTaxInvoicesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(SalesTaxInvoices_1.SalesTaxInvoices, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `SalesTaxInvoices` entities.
     * @returns A request builder for creating requests to retrieve all `SalesTaxInvoices` entities.
     */
    SalesTaxInvoicesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(SalesTaxInvoices_1.SalesTaxInvoices);
    };
    /**
     * Returns a request builder for creating a `SalesTaxInvoices` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SalesTaxInvoices`.
     */
    SalesTaxInvoicesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(SalesTaxInvoices_1.SalesTaxInvoices, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `SalesTaxInvoices`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SalesTaxInvoices`.
     */
    SalesTaxInvoicesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(SalesTaxInvoices_1.SalesTaxInvoices, entity);
    };
    SalesTaxInvoicesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(SalesTaxInvoices_1.SalesTaxInvoices, docEntryOrEntity instanceof SalesTaxInvoices_1.SalesTaxInvoices ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return SalesTaxInvoicesRequestBuilder;
}(v4_1.RequestBuilder));
exports.SalesTaxInvoicesRequestBuilder = SalesTaxInvoicesRequestBuilder;
//# sourceMappingURL=SalesTaxInvoicesRequestBuilder.js.map