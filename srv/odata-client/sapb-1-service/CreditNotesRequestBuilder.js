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
exports.CreditNotesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var CreditNotes_1 = require("./CreditNotes");
/**
 * Request builder class for operations supported on the [[CreditNotes]] entity.
 */
var CreditNotesRequestBuilder = /** @class */ (function (_super) {
    __extends(CreditNotesRequestBuilder, _super);
    function CreditNotesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CreditNotes` entity based on its keys.
     * @param docEntry Key property. See [[CreditNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `CreditNotes` entity based on its keys.
     */
    CreditNotesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(CreditNotes_1.CreditNotes, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `CreditNotes` entities.
     * @returns A request builder for creating requests to retrieve all `CreditNotes` entities.
     */
    CreditNotesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(CreditNotes_1.CreditNotes);
    };
    /**
     * Returns a request builder for creating a `CreditNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CreditNotes`.
     */
    CreditNotesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(CreditNotes_1.CreditNotes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CreditNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CreditNotes`.
     */
    CreditNotesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(CreditNotes_1.CreditNotes, entity);
    };
    CreditNotesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(CreditNotes_1.CreditNotes, docEntryOrEntity instanceof CreditNotes_1.CreditNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return CreditNotesRequestBuilder;
}(core_1.RequestBuilder));
exports.CreditNotesRequestBuilder = CreditNotesRequestBuilder;
//# sourceMappingURL=CreditNotesRequestBuilder.js.map