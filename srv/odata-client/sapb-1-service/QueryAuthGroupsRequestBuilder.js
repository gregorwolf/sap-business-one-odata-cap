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
exports.QueryAuthGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var QueryAuthGroups_1 = require("./QueryAuthGroups");
/**
 * Request builder class for operations supported on the [[QueryAuthGroups]] entity.
 */
var QueryAuthGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(QueryAuthGroupsRequestBuilder, _super);
    function QueryAuthGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `QueryAuthGroups` entity based on its keys.
     * @param authGroupId Key property. See [[QueryAuthGroups.authGroupId]].
     * @returns A request builder for creating requests to retrieve one `QueryAuthGroups` entity based on its keys.
     */
    QueryAuthGroupsRequestBuilder.prototype.getByKey = function (authGroupId) {
        return new v4_1.GetByKeyRequestBuilder(QueryAuthGroups_1.QueryAuthGroups, { AuthGroupId: authGroupId });
    };
    /**
     * Returns a request builder for querying all `QueryAuthGroups` entities.
     * @returns A request builder for creating requests to retrieve all `QueryAuthGroups` entities.
     */
    QueryAuthGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(QueryAuthGroups_1.QueryAuthGroups);
    };
    /**
     * Returns a request builder for creating a `QueryAuthGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `QueryAuthGroups`.
     */
    QueryAuthGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(QueryAuthGroups_1.QueryAuthGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `QueryAuthGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `QueryAuthGroups`.
     */
    QueryAuthGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(QueryAuthGroups_1.QueryAuthGroups, entity);
    };
    QueryAuthGroupsRequestBuilder.prototype.delete = function (authGroupIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(QueryAuthGroups_1.QueryAuthGroups, authGroupIdOrEntity instanceof QueryAuthGroups_1.QueryAuthGroups ? authGroupIdOrEntity : { AuthGroupId: authGroupIdOrEntity });
    };
    return QueryAuthGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.QueryAuthGroupsRequestBuilder = QueryAuthGroupsRequestBuilder;
//# sourceMappingURL=QueryAuthGroupsRequestBuilder.js.map