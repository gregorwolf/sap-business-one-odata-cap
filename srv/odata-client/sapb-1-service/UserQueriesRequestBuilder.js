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
exports.UserQueriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var UserQueries_1 = require("./UserQueries");
/**
 * Request builder class for operations supported on the [[UserQueries]] entity.
 */
var UserQueriesRequestBuilder = /** @class */ (function (_super) {
    __extends(UserQueriesRequestBuilder, _super);
    function UserQueriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `UserQueries` entity based on its keys.
     * @param internalKey Key property. See [[UserQueries.internalKey]].
     * @param queryCategory Key property. See [[UserQueries.queryCategory]].
     * @returns A request builder for creating requests to retrieve one `UserQueries` entity based on its keys.
     */
    UserQueriesRequestBuilder.prototype.getByKey = function (internalKey, queryCategory) {
        return new core_1.GetByKeyRequestBuilderV4(UserQueries_1.UserQueries, {
            InternalKey: internalKey,
            QueryCategory: queryCategory
        });
    };
    /**
     * Returns a request builder for querying all `UserQueries` entities.
     * @returns A request builder for creating requests to retrieve all `UserQueries` entities.
     */
    UserQueriesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(UserQueries_1.UserQueries);
    };
    /**
     * Returns a request builder for creating a `UserQueries` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `UserQueries`.
     */
    UserQueriesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(UserQueries_1.UserQueries, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `UserQueries`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `UserQueries`.
     */
    UserQueriesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(UserQueries_1.UserQueries, entity);
    };
    UserQueriesRequestBuilder.prototype.delete = function (internalKeyOrEntity, queryCategory) {
        return new core_1.DeleteRequestBuilderV4(UserQueries_1.UserQueries, internalKeyOrEntity instanceof UserQueries_1.UserQueries ? internalKeyOrEntity : {
            InternalKey: internalKeyOrEntity,
            QueryCategory: queryCategory
        });
    };
    return UserQueriesRequestBuilder;
}(core_1.RequestBuilder));
exports.UserQueriesRequestBuilder = UserQueriesRequestBuilder;
//# sourceMappingURL=UserQueriesRequestBuilder.js.map