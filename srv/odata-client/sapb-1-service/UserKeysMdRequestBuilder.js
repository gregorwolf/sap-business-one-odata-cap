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
exports.UserKeysMdRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var UserKeysMd_1 = require("./UserKeysMd");
/**
 * Request builder class for operations supported on the [[UserKeysMd]] entity.
 */
var UserKeysMdRequestBuilder = /** @class */ (function (_super) {
    __extends(UserKeysMdRequestBuilder, _super);
    function UserKeysMdRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserKeysMd` entity based on its keys.
     * @param tableName Key property. See [[UserKeysMd.tableName]].
     * @param keyIndex Key property. See [[UserKeysMd.keyIndex]].
     * @returns A request builder for creating requests to retrieve one `UserKeysMd` entity based on its keys.
     */
    UserKeysMdRequestBuilder.prototype.getByKey = function (tableName, keyIndex) {
        return new core_1.GetByKeyRequestBuilderV4(UserKeysMd_1.UserKeysMd, {
            TableName: tableName,
            KeyIndex: keyIndex
        });
    };
    /**
     * Returns a request builder for querying all `UserKeysMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserKeysMd` entities.
     */
    UserKeysMdRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(UserKeysMd_1.UserKeysMd);
    };
    /**
     * Returns a request builder for creating a `UserKeysMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserKeysMd`.
     */
    UserKeysMdRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(UserKeysMd_1.UserKeysMd, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserKeysMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserKeysMd`.
     */
    UserKeysMdRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(UserKeysMd_1.UserKeysMd, entity);
    };
    UserKeysMdRequestBuilder.prototype.delete = function (tableNameOrEntity, keyIndex) {
        return new core_1.DeleteRequestBuilderV4(UserKeysMd_1.UserKeysMd, tableNameOrEntity instanceof UserKeysMd_1.UserKeysMd ? tableNameOrEntity : {
            TableName: tableNameOrEntity,
            KeyIndex: keyIndex
        });
    };
    return UserKeysMdRequestBuilder;
}(core_1.RequestBuilder));
exports.UserKeysMdRequestBuilder = UserKeysMdRequestBuilder;
//# sourceMappingURL=UserKeysMdRequestBuilder.js.map