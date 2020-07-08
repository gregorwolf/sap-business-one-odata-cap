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
exports.JournalEntryDocumentTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var JournalEntryDocumentTypes_1 = require("./JournalEntryDocumentTypes");
/**
 * Request builder class for operations supported on the [[JournalEntryDocumentTypes]] entity.
 */
var JournalEntryDocumentTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(JournalEntryDocumentTypesRequestBuilder, _super);
    function JournalEntryDocumentTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `JournalEntryDocumentTypes` entity based on its keys.
     * @param journalEntryType Key property. See [[JournalEntryDocumentTypes.journalEntryType]].
     * @returns A request builder for creating requests to retrieve one `JournalEntryDocumentTypes` entity based on its keys.
     */
    JournalEntryDocumentTypesRequestBuilder.prototype.getByKey = function (journalEntryType) {
        return new v4_1.GetByKeyRequestBuilder(JournalEntryDocumentTypes_1.JournalEntryDocumentTypes, { JournalEntryType: journalEntryType });
    };
    /**
     * Returns a request builder for querying all `JournalEntryDocumentTypes` entities.
     * @returns A request builder for creating requests to retrieve all `JournalEntryDocumentTypes` entities.
     */
    JournalEntryDocumentTypesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(JournalEntryDocumentTypes_1.JournalEntryDocumentTypes);
    };
    /**
     * Returns a request builder for creating a `JournalEntryDocumentTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `JournalEntryDocumentTypes`.
     */
    JournalEntryDocumentTypesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(JournalEntryDocumentTypes_1.JournalEntryDocumentTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `JournalEntryDocumentTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `JournalEntryDocumentTypes`.
     */
    JournalEntryDocumentTypesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(JournalEntryDocumentTypes_1.JournalEntryDocumentTypes, entity);
    };
    JournalEntryDocumentTypesRequestBuilder.prototype.delete = function (journalEntryTypeOrEntity) {
        return new v4_1.DeleteRequestBuilder(JournalEntryDocumentTypes_1.JournalEntryDocumentTypes, journalEntryTypeOrEntity instanceof JournalEntryDocumentTypes_1.JournalEntryDocumentTypes ? journalEntryTypeOrEntity : { JournalEntryType: journalEntryTypeOrEntity });
    };
    return JournalEntryDocumentTypesRequestBuilder;
}(v4_1.RequestBuilder));
exports.JournalEntryDocumentTypesRequestBuilder = JournalEntryDocumentTypesRequestBuilder;
//# sourceMappingURL=JournalEntryDocumentTypesRequestBuilder.js.map