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
exports.UserGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UserGroups_1 = require("./UserGroups");
/**
 * Request builder class for operations supported on the [[UserGroups]] entity.
 */
var UserGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(UserGroupsRequestBuilder, _super);
    function UserGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserGroups` entity based on its keys.
     * @param userGroupId Key property. See [[UserGroups.userGroupId]].
     * @returns A request builder for creating requests to retrieve one `UserGroups` entity based on its keys.
     */
    UserGroupsRequestBuilder.prototype.getByKey = function (userGroupId) {
        return new v4_1.GetByKeyRequestBuilder(UserGroups_1.UserGroups, { UserGroupId: userGroupId });
    };
    /**
     * Returns a request builder for querying all `UserGroups` entities.
     * @returns A request builder for creating requests to retrieve all `UserGroups` entities.
     */
    UserGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UserGroups_1.UserGroups);
    };
    /**
     * Returns a request builder for creating a `UserGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserGroups`.
     */
    UserGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UserGroups_1.UserGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserGroups`.
     */
    UserGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UserGroups_1.UserGroups, entity);
    };
    UserGroupsRequestBuilder.prototype.delete = function (userGroupIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(UserGroups_1.UserGroups, userGroupIdOrEntity instanceof UserGroups_1.UserGroups ? userGroupIdOrEntity : { UserGroupId: userGroupIdOrEntity });
    };
    return UserGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.UserGroupsRequestBuilder = UserGroupsRequestBuilder;
//# sourceMappingURL=UserGroupsRequestBuilder.js.map