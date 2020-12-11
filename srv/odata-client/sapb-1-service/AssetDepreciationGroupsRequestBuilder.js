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
exports.AssetDepreciationGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var AssetDepreciationGroups_1 = require("./AssetDepreciationGroups");
/**
 * Request builder class for operations supported on the [[AssetDepreciationGroups]] entity.
 */
var AssetDepreciationGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetDepreciationGroupsRequestBuilder, _super);
    function AssetDepreciationGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetDepreciationGroups` entity based on its keys.
     * @param code Key property. See [[AssetDepreciationGroups.code]].
     * @returns A request builder for creating requests to retrieve one `AssetDepreciationGroups` entity based on its keys.
     */
    AssetDepreciationGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(AssetDepreciationGroups_1.AssetDepreciationGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `AssetDepreciationGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AssetDepreciationGroups` entities.
     */
    AssetDepreciationGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AssetDepreciationGroups_1.AssetDepreciationGroups);
    };
    /**
     * Returns a request builder for creating a `AssetDepreciationGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetDepreciationGroups`.
     */
    AssetDepreciationGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AssetDepreciationGroups_1.AssetDepreciationGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetDepreciationGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetDepreciationGroups`.
     */
    AssetDepreciationGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AssetDepreciationGroups_1.AssetDepreciationGroups, entity);
    };
    AssetDepreciationGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(AssetDepreciationGroups_1.AssetDepreciationGroups, codeOrEntity instanceof AssetDepreciationGroups_1.AssetDepreciationGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return AssetDepreciationGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.AssetDepreciationGroupsRequestBuilder = AssetDepreciationGroupsRequestBuilder;
//# sourceMappingURL=AssetDepreciationGroupsRequestBuilder.js.map