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
exports.MaterialGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(MaterialGroups_1.MaterialGroups, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `MaterialGroups` entities.
     * @returns A request builder for creating requests to retrieve all `MaterialGroups` entities.
     */
    MaterialGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(MaterialGroups_1.MaterialGroups);
    };
    /**
     * Returns a request builder for creating a `MaterialGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MaterialGroups`.
     */
    MaterialGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(MaterialGroups_1.MaterialGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `MaterialGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MaterialGroups`.
     */
    MaterialGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(MaterialGroups_1.MaterialGroups, entity);
    };
    MaterialGroupsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new core_1.DeleteRequestBuilderV4(MaterialGroups_1.MaterialGroups, absEntryOrEntity instanceof MaterialGroups_1.MaterialGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return MaterialGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.MaterialGroupsRequestBuilder = MaterialGroupsRequestBuilder;
//# sourceMappingURL=MaterialGroupsRequestBuilder.js.map