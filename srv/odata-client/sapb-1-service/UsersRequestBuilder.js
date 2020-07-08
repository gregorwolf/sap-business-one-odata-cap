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
exports.UsersRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var Users_1 = require("./Users");
/**
 * Request builder class for operations supported on the [[Users]] entity.
 */
var UsersRequestBuilder = /** @class */ (function (_super) {
    __extends(UsersRequestBuilder, _super);
    function UsersRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Users` entity based on its keys.
     * @param internalKey Key property. See [[Users.internalKey]].
     * @returns A request builder for creating requests to retrieve one `Users` entity based on its keys.
     */
    UsersRequestBuilder.prototype.getByKey = function (internalKey) {
        return new v4_1.GetByKeyRequestBuilder(Users_1.Users, { InternalKey: internalKey });
    };
    /**
     * Returns a request builder for querying all `Users` entities.
     * @returns A request builder for creating requests to retrieve all `Users` entities.
     */
    UsersRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(Users_1.Users);
    };
    /**
     * Returns a request builder for creating a `Users` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Users`.
     */
    UsersRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(Users_1.Users, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `Users`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Users`.
     */
    UsersRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(Users_1.Users, entity);
    };
    UsersRequestBuilder.prototype.delete = function (internalKeyOrEntity) {
        return new v4_1.DeleteRequestBuilder(Users_1.Users, internalKeyOrEntity instanceof Users_1.Users ? internalKeyOrEntity : { InternalKey: internalKeyOrEntity });
    };
    return UsersRequestBuilder;
}(v4_1.RequestBuilder));
exports.UsersRequestBuilder = UsersRequestBuilder;
//# sourceMappingURL=UsersRequestBuilder.js.map