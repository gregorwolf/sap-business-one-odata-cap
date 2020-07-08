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
exports.UserPermissionTreeRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UserPermissionTree_1 = require("./UserPermissionTree");
/**
 * Request builder class for operations supported on the [[UserPermissionTree]] entity.
 */
var UserPermissionTreeRequestBuilder = /** @class */ (function (_super) {
    __extends(UserPermissionTreeRequestBuilder, _super);
    function UserPermissionTreeRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserPermissionTree` entity based on its keys.
     * @param permissionId Key property. See [[UserPermissionTree.permissionId]].
     * @returns A request builder for creating requests to retrieve one `UserPermissionTree` entity based on its keys.
     */
    UserPermissionTreeRequestBuilder.prototype.getByKey = function (permissionId) {
        return new v4_1.GetByKeyRequestBuilder(UserPermissionTree_1.UserPermissionTree, { PermissionID: permissionId });
    };
    /**
     * Returns a request builder for querying all `UserPermissionTree` entities.
     * @returns A request builder for creating requests to retrieve all `UserPermissionTree` entities.
     */
    UserPermissionTreeRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UserPermissionTree_1.UserPermissionTree);
    };
    /**
     * Returns a request builder for creating a `UserPermissionTree` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserPermissionTree`.
     */
    UserPermissionTreeRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UserPermissionTree_1.UserPermissionTree, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserPermissionTree`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserPermissionTree`.
     */
    UserPermissionTreeRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UserPermissionTree_1.UserPermissionTree, entity);
    };
    UserPermissionTreeRequestBuilder.prototype.delete = function (permissionIdOrEntity) {
        return new v4_1.DeleteRequestBuilder(UserPermissionTree_1.UserPermissionTree, permissionIdOrEntity instanceof UserPermissionTree_1.UserPermissionTree ? permissionIdOrEntity : { PermissionID: permissionIdOrEntity });
    };
    return UserPermissionTreeRequestBuilder;
}(v4_1.RequestBuilder));
exports.UserPermissionTreeRequestBuilder = UserPermissionTreeRequestBuilder;
//# sourceMappingURL=UserPermissionTreeRequestBuilder.js.map