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
exports.DeliveryNotesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DeliveryNotes_1 = require("./DeliveryNotes");
/**
 * Request builder class for operations supported on the [[DeliveryNotes]] entity.
 */
var DeliveryNotesRequestBuilder = /** @class */ (function (_super) {
    __extends(DeliveryNotesRequestBuilder, _super);
    function DeliveryNotesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DeliveryNotes` entity based on its keys.
     * @param docEntry Key property. See [[DeliveryNotes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `DeliveryNotes` entity based on its keys.
     */
    DeliveryNotesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(DeliveryNotes_1.DeliveryNotes, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `DeliveryNotes` entities.
     * @returns A request builder for creating requests to retrieve all `DeliveryNotes` entities.
     */
    DeliveryNotesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DeliveryNotes_1.DeliveryNotes);
    };
    /**
     * Returns a request builder for creating a `DeliveryNotes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeliveryNotes`.
     */
    DeliveryNotesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DeliveryNotes_1.DeliveryNotes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DeliveryNotes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeliveryNotes`.
     */
    DeliveryNotesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DeliveryNotes_1.DeliveryNotes, entity);
    };
    DeliveryNotesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DeliveryNotes_1.DeliveryNotes, docEntryOrEntity instanceof DeliveryNotes_1.DeliveryNotes ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return DeliveryNotesRequestBuilder;
}(core_1.RequestBuilder));
exports.DeliveryNotesRequestBuilder = DeliveryNotesRequestBuilder;
//# sourceMappingURL=DeliveryNotesRequestBuilder.js.map