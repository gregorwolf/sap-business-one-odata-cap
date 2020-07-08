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
exports.AssetGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AssetGroups_1 = require("./AssetGroups");
/**
 * Request builder class for operations supported on the [[AssetGroups]] entity.
 */
var AssetGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(AssetGroupsRequestBuilder, _super);
    function AssetGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AssetGroups` entity based on its keys.
     * @param code Key property. See [[AssetGroups.code]].
     * @returns A request builder for creating requests to retrieve one `AssetGroups` entity based on its keys.
     */
    AssetGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(AssetGroups_1.AssetGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `AssetGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AssetGroups` entities.
     */
    AssetGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AssetGroups_1.AssetGroups);
    };
    /**
     * Returns a request builder for creating a `AssetGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AssetGroups`.
     */
    AssetGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AssetGroups_1.AssetGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AssetGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AssetGroups`.
     */
    AssetGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AssetGroups_1.AssetGroups, entity);
    };
    AssetGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(AssetGroups_1.AssetGroups, codeOrEntity instanceof AssetGroups_1.AssetGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return AssetGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.AssetGroupsRequestBuilder = AssetGroupsRequestBuilder;
//# sourceMappingURL=AssetGroupsRequestBuilder.js.map