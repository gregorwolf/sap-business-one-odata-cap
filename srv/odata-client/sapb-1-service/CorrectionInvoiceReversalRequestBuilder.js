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
exports.CorrectionInvoiceReversalRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
/**
 * Request builder class for operations supported on the [[CorrectionInvoiceReversal]] entity.
 */
var CorrectionInvoiceReversalRequestBuilder = /** @class */ (function (_super) {
    __extends(CorrectionInvoiceReversalRequestBuilder, _super);
    function CorrectionInvoiceReversalRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CorrectionInvoiceReversal` entity based on its keys.
     * @param docEntry Key property. See [[CorrectionInvoiceReversal.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CorrectionInvoiceReversal` entity based on its keys.
     */
    CorrectionInvoiceReversalRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(CorrectionInvoiceReversal_1.CorrectionInvoiceReversal, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `CorrectionInvoiceReversal` entities.
     * @returns A request builder for creating requests to retrieve all `CorrectionInvoiceReversal` entities.
     */
    CorrectionInvoiceReversalRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    };
    /**
     * Returns a request builder for creating a `CorrectionInvoiceReversal` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CorrectionInvoiceReversal`.
     */
    CorrectionInvoiceReversalRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CorrectionInvoiceReversal_1.CorrectionInvoiceReversal, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CorrectionInvoiceReversal`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CorrectionInvoiceReversal`.
     */
    CorrectionInvoiceReversalRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CorrectionInvoiceReversal_1.CorrectionInvoiceReversal, entity);
    };
    CorrectionInvoiceReversalRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(CorrectionInvoiceReversal_1.CorrectionInvoiceReversal, docEntryOrEntity instanceof CorrectionInvoiceReversal_1.CorrectionInvoiceReversal ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return CorrectionInvoiceReversalRequestBuilder;
}(v4_1.RequestBuilder));
exports.CorrectionInvoiceReversalRequestBuilder = CorrectionInvoiceReversalRequestBuilder;
//# sourceMappingURL=CorrectionInvoiceReversalRequestBuilder.js.map