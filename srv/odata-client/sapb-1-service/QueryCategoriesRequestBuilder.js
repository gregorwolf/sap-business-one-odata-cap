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
exports.QueryCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var QueryCategories_1 = require("./QueryCategories");
/**
 * Request builder class for operations supported on the [[QueryCategories]] entity.
 */
var QueryCategoriesRequestBuilder = /** @class */ (function (_super) {
    __extends(QueryCategoriesRequestBuilder, _super);
    function QueryCategoriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `QueryCategories` entity based on its keys.
     * @param code Key property. See [[QueryCategories.code]].
     * @returns A request builder for creating requests to retrieve one `QueryCategories` entity based on its keys.
     */
    QueryCategoriesRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(QueryCategories_1.QueryCategories, { Code: code });
    };
    /**
     * Returns a request builder for querying all `QueryCategories` entities.
     * @returns A request builder for creating requests to retrieve all `QueryCategories` entities.
     */
    QueryCategoriesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(QueryCategories_1.QueryCategories);
    };
    /**
     * Returns a request builder for creating a `QueryCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `QueryCategories`.
     */
    QueryCategoriesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(QueryCategories_1.QueryCategories, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `QueryCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `QueryCategories`.
     */
    QueryCategoriesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(QueryCategories_1.QueryCategories, entity);
    };
    QueryCategoriesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(QueryCategories_1.QueryCategories, codeOrEntity instanceof QueryCategories_1.QueryCategories ? codeOrEntity : { Code: codeOrEntity });
    };
    return QueryCategoriesRequestBuilder;
}(core_1.RequestBuilder));
exports.QueryCategoriesRequestBuilder = QueryCategoriesRequestBuilder;
//# sourceMappingURL=QueryCategoriesRequestBuilder.js.map