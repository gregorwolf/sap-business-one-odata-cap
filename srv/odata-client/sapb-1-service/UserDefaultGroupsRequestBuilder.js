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
exports.UserDefaultGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UserDefaultGroups_1 = require("./UserDefaultGroups");
/**
 * Request builder class for operations supported on the [[UserDefaultGroups]] entity.
 */
var UserDefaultGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(UserDefaultGroupsRequestBuilder, _super);
    function UserDefaultGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserDefaultGroups` entity based on its keys.
     * @param code Key property. See [[UserDefaultGroups.code]].
     * @returns A request builder for creating requests to retrieve one `UserDefaultGroups` entity based on its keys.
     */
    UserDefaultGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(UserDefaultGroups_1.UserDefaultGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `UserDefaultGroups` entities.
     * @returns A request builder for creating requests to retrieve all `UserDefaultGroups` entities.
     */
    UserDefaultGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UserDefaultGroups_1.UserDefaultGroups);
    };
    /**
     * Returns a request builder for creating a `UserDefaultGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserDefaultGroups`.
     */
    UserDefaultGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UserDefaultGroups_1.UserDefaultGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserDefaultGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserDefaultGroups`.
     */
    UserDefaultGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UserDefaultGroups_1.UserDefaultGroups, entity);
    };
    UserDefaultGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(UserDefaultGroups_1.UserDefaultGroups, codeOrEntity instanceof UserDefaultGroups_1.UserDefaultGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return UserDefaultGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.UserDefaultGroupsRequestBuilder = UserDefaultGroupsRequestBuilder;
//# sourceMappingURL=UserDefaultGroupsRequestBuilder.js.map