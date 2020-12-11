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
exports.UserFieldsMdRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var UserFieldsMd_1 = require("./UserFieldsMd");
/**
 * Request builder class for operations supported on the [[UserFieldsMd]] entity.
 */
var UserFieldsMdRequestBuilder = /** @class */ (function (_super) {
    __extends(UserFieldsMdRequestBuilder, _super);
    function UserFieldsMdRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserFieldsMd` entity based on its keys.
     * @param tableName Key property. See [[UserFieldsMd.tableName]].
     * @param fieldId Key property. See [[UserFieldsMd.fieldId]].
     * @returns A request builder for creating requests to retrieve one `UserFieldsMd` entity based on its keys.
     */
    UserFieldsMdRequestBuilder.prototype.getByKey = function (tableName, fieldId) {
        return new core_1.GetByKeyRequestBuilderV4(UserFieldsMd_1.UserFieldsMd, {
            TableName: tableName,
            FieldID: fieldId
        });
    };
    /**
     * Returns a request builder for querying all `UserFieldsMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserFieldsMd` entities.
     */
    UserFieldsMdRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(UserFieldsMd_1.UserFieldsMd);
    };
    /**
     * Returns a request builder for creating a `UserFieldsMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserFieldsMd`.
     */
    UserFieldsMdRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(UserFieldsMd_1.UserFieldsMd, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserFieldsMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserFieldsMd`.
     */
    UserFieldsMdRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(UserFieldsMd_1.UserFieldsMd, entity);
    };
    UserFieldsMdRequestBuilder.prototype.delete = function (tableNameOrEntity, fieldId) {
        return new core_1.DeleteRequestBuilderV4(UserFieldsMd_1.UserFieldsMd, tableNameOrEntity instanceof UserFieldsMd_1.UserFieldsMd ? tableNameOrEntity : {
            TableName: tableNameOrEntity,
            FieldID: fieldId
        });
    };
    return UserFieldsMdRequestBuilder;
}(core_1.RequestBuilder));
exports.UserFieldsMdRequestBuilder = UserFieldsMdRequestBuilder;
//# sourceMappingURL=UserFieldsMdRequestBuilder.js.map