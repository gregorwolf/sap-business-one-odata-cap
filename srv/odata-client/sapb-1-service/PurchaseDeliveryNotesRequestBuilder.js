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
exports.PurchaseDeliveryNotesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
/**
 * Request builder class for operations supported on the [[PurchaseDeliveryNotes]] entity.
 */
var PurchaseDeliveryNotesRequestBuilder = /** @class */ (function (_super) {
    __extends(PurchaseDeliveryNotesRequestBuilder, _super);
    function PurchaseDeliveryNotesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `PurchaseDeliveryNotes` entity based on its keys.
     * @param docEntry Key property. See [[PurchaseDeliveryNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `PurchaseDeliveryNotes` entity based on its keys.
     */
    PurchaseDeliveryNotesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(PurchaseDeliveryNotes_1.PurchaseDeliveryNotes, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `PurchaseDeliveryNotes` entities.
     * @returns A request builder for creating requests to retrieve all `PurchaseDeliveryNotes` entities.
     */
    PurchaseDeliveryNotesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    };
    /**
     * Returns a request builder for creating a `PurchaseDeliveryNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PurchaseDeliveryNotes`.
     */
    PurchaseDeliveryNotesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(PurchaseDeliveryNotes_1.PurchaseDeliveryNotes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `PurchaseDeliveryNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PurchaseDeliveryNotes`.
     */
    PurchaseDeliveryNotesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(PurchaseDeliveryNotes_1.PurchaseDeliveryNotes, entity);
    };
    PurchaseDeliveryNotesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(PurchaseDeliveryNotes_1.PurchaseDeliveryNotes, docEntryOrEntity instanceof PurchaseDeliveryNotes_1.PurchaseDeliveryNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return PurchaseDeliveryNotesRequestBuilder;
}(v4_1.RequestBuilder));
exports.PurchaseDeliveryNotesRequestBuilder = PurchaseDeliveryNotesRequestBuilder;
//# sourceMappingURL=PurchaseDeliveryNotesRequestBuilder.js.map