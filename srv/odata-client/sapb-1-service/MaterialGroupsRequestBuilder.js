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
exports.MaterialGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var MaterialGroups_1 = require("./MaterialGroups");
/**
 * Request builder class for operations supported on the [[MaterialGroups]] entity.
 */
var MaterialGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(MaterialGroupsRequestBuilder, _super);
    function MaterialGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `MaterialGroups` entity based on its keys.
     * @param absEntry Key property. See [[MaterialGroups.absEntry]].
     * @returns A request builder for creating requests to retrieve one `MaterialGroups` entity based on its keys.
     */
    MaterialGroupsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(MaterialGroups_1.MaterialGroups, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `MaterialGroups` entities.
     * @returns A request builder for creating requests to retrieve all `MaterialGroups` entities.
     */
    MaterialGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(MaterialGroups_1.MaterialGroups);
    };
    /**
     * Returns a request builder for creating a `MaterialGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MaterialGroups`.
     */
    MaterialGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(MaterialGroups_1.MaterialGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `MaterialGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MaterialGroups`.
     */
    MaterialGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(MaterialGroups_1.MaterialGroups, entity);
    };
    MaterialGroupsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(MaterialGroups_1.MaterialGroups, absEntryOrEntity instanceof MaterialGroups_1.MaterialGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return MaterialGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.MaterialGroupsRequestBuilder = MaterialGroupsRequestBuilder;
//# sourceMappingURL=MaterialGroupsRequestBuilder.js.map