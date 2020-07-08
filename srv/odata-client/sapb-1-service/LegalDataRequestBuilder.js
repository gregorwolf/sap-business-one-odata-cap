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
exports.LegalDataRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var LegalData_1 = require("./LegalData");
/**
 * Request builder class for operations supported on the [[LegalData]] entity.
 */
var LegalDataRequestBuilder = /** @class */ (function (_super) {
    __extends(LegalDataRequestBuilder, _super);
    function LegalDataRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `LegalData` entity based on its keys.
     * @param docEntry Key property. See [[LegalData.docEntry]].
     * @returns A request builder for creating requests to retrieve one `LegalData` entity based on its keys.
     */
    LegalDataRequestBuilder.prototype.getByKey = function (docEntry) {
        return new v4_1.GetByKeyRequestBuilder(LegalData_1.LegalData, { DocEntry: docEntry });
    };
    /**
     * Returns a request builder for querying all `LegalData` entities.
     * @returns A request builder for creating requests to retrieve all `LegalData` entities.
     */
    LegalDataRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(LegalData_1.LegalData);
    };
    /**
     * Returns a request builder for creating a `LegalData` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalData`.
     */
    LegalDataRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(LegalData_1.LegalData, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `LegalData`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalData`.
     */
    LegalDataRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(LegalData_1.LegalData, entity);
    };
    LegalDataRequestBuilder.prototype.delete = function (docEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(LegalData_1.LegalData, docEntryOrEntity instanceof LegalData_1.LegalData ? docEntryOrEntity : { DocEntry: docEntryOrEntity });
    };
    return LegalDataRequestBuilder;
}(v4_1.RequestBuilder));
exports.LegalDataRequestBuilder = LegalDataRequestBuilder;
//# sourceMappingURL=LegalDataRequestBuilder.js.map