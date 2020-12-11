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
exports.CorrectionPurchaseInvoiceReversalRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
/**
 * Request builder class for operations supported on the [[CorrectionPurchaseInvoiceReversal]] entity.
 */
var CorrectionPurchaseInvoiceReversalRequestBuilder = /** @class */ (function (_super) {
    __extends(CorrectionPurchaseInvoiceReversalRequestBuilder, _super);
    function CorrectionPurchaseInvoiceReversalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CorrectionPurchaseInvoiceReversal` entity based on its keys.
     * @param docEntry Key property. See [[CorrectionPurchaseInvoiceReversal.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CorrectionPurchaseInvoiceReversal` entity based on its keys.
     */
    CorrectionPurchaseInvoiceReversalRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `CorrectionPurchaseInvoiceReversal` entities.
     * @returns A request builder for creating requests to retrieve all `CorrectionPurchaseInvoiceReversal` entities.
     */
    CorrectionPurchaseInvoiceReversalRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    };
    /**
     * Returns a request builder for creating a `CorrectionPurchaseInvoiceReversal` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CorrectionPurchaseInvoiceReversal`.
     */
    CorrectionPurchaseInvoiceReversalRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CorrectionPurchaseInvoiceReversal`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CorrectionPurchaseInvoiceReversal`.
     */
    CorrectionPurchaseInvoiceReversalRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal, entity);
    };
    CorrectionPurchaseInvoiceReversalRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal, docEntryOrEntity instanceof CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return CorrectionPurchaseInvoiceReversalRequestBuilder;
}(core_1.RequestBuilder));
exports.CorrectionPurchaseInvoiceReversalRequestBuilder = CorrectionPurchaseInvoiceReversalRequestBuilder;
//# sourceMappingURL=CorrectionPurchaseInvoiceReversalRequestBuilder.js.map