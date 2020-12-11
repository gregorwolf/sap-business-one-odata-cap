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
exports.CorrectionPurchaseInvoiceRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
/**
 * Request builder class for operations supported on the [[CorrectionPurchaseInvoice]] entity.
 */
var CorrectionPurchaseInvoiceRequestBuilder = /** @class */ (function (_super) {
    __extends(CorrectionPurchaseInvoiceRequestBuilder, _super);
    function CorrectionPurchaseInvoiceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CorrectionPurchaseInvoice` entity based on its keys.
     * @param docEntry Key property. See [[CorrectionPurchaseInvoice.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoice` entity based on its keys.
     */
    CorrectionPurchaseInvoiceRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `CorrectionPurchaseInvoice` entities.
     * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoice` entities.
     */
    CorrectionPurchaseInvoiceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    };
    /**
     * Returns a request builder for creating a `CorrectionPurchaseInvoice` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoice`.
     */
    CorrectionPurchaseInvoiceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoice`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoice`.
     */
    CorrectionPurchaseInvoiceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice, entity);
    };
    CorrectionPurchaseInvoiceRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice, docEntryOrEntity instanceof CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return CorrectionPurchaseInvoiceRequestBuilder;
}(core_1.RequestBuilder));
exports.CorrectionPurchaseInvoiceRequestBuilder = CorrectionPurchaseInvoiceRequestBuilder;
//# sourceMappingURL=CorrectionPurchaseInvoiceRequestBuilder.js.map