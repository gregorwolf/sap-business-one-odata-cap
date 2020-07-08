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
exports.UserTablesMdRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UserTablesMd_1 = require("./UserTablesMd");
/**
 * Request builder class for operations supported on the [[UserTablesMd]] entity.
 */
var UserTablesMdRequestBuilder = /** @class */ (function (_super) {
    __extends(UserTablesMdRequestBuilder, _super);
    function UserTablesMdRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserTablesMd` entity based on its keys.
     * @param tableName Key property. See [[UserTablesMd.tableName]].
     * @returns A request builder for creating requests to retrieve one `UserTablesMd` entity based on its keys.
     */
    UserTablesMdRequestBuilder.prototype.getByKey = function (tableName) {
        return new v4_1.GetByKeyRequestBuilder(UserTablesMd_1.UserTablesMd, { TableName: tableName });
    };
    /**
     * Returns a request builder for querying all `UserTablesMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserTablesMd` entities.
     */
    UserTablesMdRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UserTablesMd_1.UserTablesMd);
    };
    /**
     * Returns a request builder for creating a `UserTablesMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserTablesMd`.
     */
    UserTablesMdRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UserTablesMd_1.UserTablesMd, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserTablesMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserTablesMd`.
     */
    UserTablesMdRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UserTablesMd_1.UserTablesMd, entity);
    };
    UserTablesMdRequestBuilder.prototype.delete = function (tableNameOrEntity) {
        return new v4_1.DeleteRequestBuilder(UserTablesMd_1.UserTablesMd, tableNameOrEntity instanceof UserTablesMd_1.UserTablesMd ? tableNameOrEntity : { TableName: tableNameOrEntity });
    };
    return UserTablesMdRequestBuilder;
}(v4_1.RequestBuilder));
exports.UserTablesMdRequestBuilder = UserTablesMdRequestBuilder;
//# sourceMappingURL=UserTablesMdRequestBuilder.js.map