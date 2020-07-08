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
exports.UnitOfMeasurementGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UnitOfMeasurementGroups_1 = require("./UnitOfMeasurementGroups");
/**
 * Request builder class for operations supported on the [[UnitOfMeasurementGroups]] entity.
 */
var UnitOfMeasurementGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(UnitOfMeasurementGroupsRequestBuilder, _super);
    function UnitOfMeasurementGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UnitOfMeasurementGroups` entity based on its keys.
     * @param absEntry Key property. See [[UnitOfMeasurementGroups.absEntry]].
     * @returns A request builder for creating requests to retrieve one `UnitOfMeasurementGroups` entity based on its keys.
     */
    UnitOfMeasurementGroupsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(UnitOfMeasurementGroups_1.UnitOfMeasurementGroups, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `UnitOfMeasurementGroups` entities.
     * @returns A request builder for creating requests to retrieve all `UnitOfMeasurementGroups` entities.
     */
    UnitOfMeasurementGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UnitOfMeasurementGroups_1.UnitOfMeasurementGroups);
    };
    /**
     * Returns a request builder for creating a `UnitOfMeasurementGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UnitOfMeasurementGroups`.
     */
    UnitOfMeasurementGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UnitOfMeasurementGroups_1.UnitOfMeasurementGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UnitOfMeasurementGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UnitOfMeasurementGroups`.
     */
    UnitOfMeasurementGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UnitOfMeasurementGroups_1.UnitOfMeasurementGroups, entity);
    };
    UnitOfMeasurementGroupsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(UnitOfMeasurementGroups_1.UnitOfMeasurementGroups, absEntryOrEntity instanceof UnitOfMeasurementGroups_1.UnitOfMeasurementGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return UnitOfMeasurementGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.UnitOfMeasurementGroupsRequestBuilder = UnitOfMeasurementGroupsRequestBuilder;
//# sourceMappingURL=UnitOfMeasurementGroupsRequestBuilder.js.map