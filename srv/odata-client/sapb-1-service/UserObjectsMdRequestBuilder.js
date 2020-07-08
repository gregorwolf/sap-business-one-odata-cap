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
exports.UserObjectsMdRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var UserObjectsMd_1 = require("./UserObjectsMd");
/**
 * Request builder class for operations supported on the [[UserObjectsMd]] entity.
 */
var UserObjectsMdRequestBuilder = /** @class */ (function (_super) {
    __extends(UserObjectsMdRequestBuilder, _super);
    function UserObjectsMdRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserObjectsMd` entity based on its keys.
     * @param code Key property. See [[UserObjectsMd.code]].
     * @returns A request builder for creating requests to retrieve one `UserObjectsMd` entity based on its keys.
     */
    UserObjectsMdRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(UserObjectsMd_1.UserObjectsMd, { Code: code });
    };
    /**
     * Returns a request builder for querying all `UserObjectsMd` entities.
     * @returns A request builder for creating requests to retrieve all `UserObjectsMd` entities.
     */
    UserObjectsMdRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(UserObjectsMd_1.UserObjectsMd);
    };
    /**
     * Returns a request builder for creating a `UserObjectsMd` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserObjectsMd`.
     */
    UserObjectsMdRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(UserObjectsMd_1.UserObjectsMd, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserObjectsMd`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserObjectsMd`.
     */
    UserObjectsMdRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(UserObjectsMd_1.UserObjectsMd, entity);
    };
    UserObjectsMdRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(UserObjectsMd_1.UserObjectsMd, codeOrEntity instanceof UserObjectsMd_1.UserObjectsMd ? codeOrEntity : { Code: codeOrEntity });
    };
    return UserObjectsMdRequestBuilder;
}(v4_1.RequestBuilder));
exports.UserObjectsMdRequestBuilder = UserObjectsMdRequestBuilder;
//# sourceMappingURL=UserObjectsMdRequestBuilder.js.map