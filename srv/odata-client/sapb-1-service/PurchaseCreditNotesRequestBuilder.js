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
exports.PurchaseCreditNotesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
/**
 * Request builder class for operations supported on the [[PurchaseCreditNotes]] entity.
 */
var PurchaseCreditNotesRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseCreditNotesRequestBuilder, _super);
    function PurchaseCreditNotesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseCreditNotes` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseCreditNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseCreditNotes` entity based on its keys.
     */
    PurchaseCreditNotesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(PurchaseCreditNotes_1.PurchaseCreditNotes, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseCreditNotes` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseCreditNotes` entities.
     */
    PurchaseCreditNotesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(PurchaseCreditNotes_1.PurchaseCreditNotes);
    };
    /**
     * Returns a request builder for creating a `PurchaseCreditNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseCreditNotes`.
     */
    PurchaseCreditNotesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(PurchaseCreditNotes_1.PurchaseCreditNotes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseCreditNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseCreditNotes`.
     */
    PurchaseCreditNotesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(PurchaseCreditNotes_1.PurchaseCreditNotes, entity);
    };
    PurchaseCreditNotesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(PurchaseCreditNotes_1.PurchaseCreditNotes, docEntryOrEntity instanceof PurchaseCreditNotes_1.PurchaseCreditNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseCreditNotesRequestBuilder;
}(core_1.RequestBuilder));
exports.PurchaseCreditNotesRequestBuilder = PurchaseCreditNotesRequestBuilder;
//# sourceMappingURL=PurchaseCreditNotesRequestBuilder.js.map