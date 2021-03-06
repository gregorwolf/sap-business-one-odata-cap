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
exports.BoeDocumentTypesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BoeDocumentTypes_1 = require("./BoeDocumentTypes");
/**
 * Request builder class for operations supported on the [[BoeDocumentTypes]] entity.
 */
var BoeDocumentTypesRequestBuilder = /** @class */ (function (_super) {
    __extends(BoeDocumentTypesRequestBuilder, _super);
    function BoeDocumentTypesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BoeDocumentTypes` entity based on its keys.
     * @param docEntry Key property. See [[BoeDocumentTypes.docEntry]].
     * @returns A request builder for creating requests to retrieve one `BoeDocumentTypes` entity based on its keys.
     */
    BoeDocumentTypesRequestBuilder.prototype.getByKey = function (docEntry) {
        return new core_1.GetByKeyRequestBuilderV4(BoeDocumentTypes_1.BoeDocumentTypes, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `BoeDocumentTypes` entities.
     * @returns A request builder for creating requests to retrieve all `BoeDocumentTypes` entities.
     */
    BoeDocumentTypesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BoeDocumentTypes_1.BoeDocumentTypes);
    };
    /**
     * Returns a request builder for creating a `BoeDocumentTypes` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BoeDocumentTypes`.
     */
    BoeDocumentTypesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BoeDocumentTypes_1.BoeDocumentTypes, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BoeDocumentTypes`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BoeDocumentTypes`.
     */
    BoeDocumentTypesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BoeDocumentTypes_1.BoeDocumentTypes, entity);
    };
    BoeDocumentTypesRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BoeDocumentTypes_1.BoeDocumentTypes, docEntryOrEntity instanceof BoeDocumentTypes_1.BoeDocumentTypes ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return BoeDocumentTypesRequestBuilder;
}(core_1.RequestBuilder));
exports.BoeDocumentTypesRequestBuilder = BoeDocumentTypesRequestBuilder;
//# sourceMappingURL=BoeDocumentTypesRequestBuilder.js.map