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
exports.UserLanguagesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var UserLanguages_1 = require("./UserLanguages");
/**
 * Request builder class for operations supported on the [[UserLanguages]] entity.
 */
var UserLanguagesRequestBuilder = /** @class */ (function (_super) {
    __extends(UserLanguagesRequestBuilder, _super);
    function UserLanguagesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserLanguages` entity based on its keys.
     * @param code Key property. See [[UserLanguages.code]].
     * @returns A request builder for creating requests to retrieve one `UserLanguages` entity based on its keys.
     */
    UserLanguagesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(UserLanguages_1.UserLanguages, { Code: code });
    };
    /**
     * Returns a request builder for querying all `UserLanguages` entities.
     * @returns A request builder for creating requests to retrieve all `UserLanguages` entities.
     */
    UserLanguagesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(UserLanguages_1.UserLanguages);
    };
    /**
     * Returns a request builder for creating a `UserLanguages` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserLanguages`.
     */
    UserLanguagesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(UserLanguages_1.UserLanguages, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserLanguages`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserLanguages`.
     */
    UserLanguagesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(UserLanguages_1.UserLanguages, entity);
    };
    UserLanguagesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(UserLanguages_1.UserLanguages, codeOrEntity instanceof UserLanguages_1.UserLanguages ? codeOrEntity : { Code: codeOrEntity });
    };
    return UserLanguagesRequestBuilder;
}(core_1.RequestBuilder));
exports.UserLanguagesRequestBuilder = UserLanguagesRequestBuilder;
//# sourceMappingURL=UserLanguagesRequestBuilder.js.map