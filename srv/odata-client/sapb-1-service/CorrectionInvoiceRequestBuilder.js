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
exports.CorrectionInvoiceRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
/**
 * Request builder class for operations supported on the [[CorrectionInvoice]] entity.
 */
var CorrectionInvoiceRequestBuilder = /** @class */ (function (_super) {
    __extends(CorrectionInvoiceRequestBuilder, _super);
    function CorrectionInvoiceRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CorrectionInvoice` entity based on its keys.
     * @param docEntry Key property. See [[CorrectionInvoice.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CorrectionInvoice` entity based on its keys.
     */
    CorrectionInvoiceRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(CorrectionInvoice_1.CorrectionInvoice, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `CorrectionInvoice` entities.
     * @returns A request builder for creating requests to retrieve all `CorrectionInvoice` entities.
     */
    CorrectionInvoiceRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CorrectionInvoice_1.CorrectionInvoice);
    };
    /**
     * Returns a request builder for creating a `CorrectionInvoice` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CorrectionInvoice`.
     */
    CorrectionInvoiceRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CorrectionInvoice_1.CorrectionInvoice, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CorrectionInvoice`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CorrectionInvoice`.
     */
    CorrectionInvoiceRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CorrectionInvoice_1.CorrectionInvoice, entity);
    };
    CorrectionInvoiceRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CorrectionInvoice_1.CorrectionInvoice, docEntryOrEntity instanceof CorrectionInvoice_1.CorrectionInvoice ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return CorrectionInvoiceRequestBuilder;
}(core_1.RequestBuilder));
exports.CorrectionInvoiceRequestBuilder = CorrectionInvoiceRequestBuilder;
//# sourceMappingURL=CorrectionInvoiceRequestBuilder.js.map