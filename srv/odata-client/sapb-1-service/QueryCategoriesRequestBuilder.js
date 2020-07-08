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
exports.QueryCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
        return new v4_1.GetByKeyRequestBuilder(QueryCategories_1.QueryCategories, { Code: code });
    };
    /**
     * Returns a request builder for querying all `QueryCategories` entities.
     * @returns A request builder for creating requests to retrieve all `QueryCategories` entities.
     */
    QueryCategoriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(QueryCategories_1.QueryCategories);
    };
    /**
     * Returns a request builder for creating a `QueryCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `QueryCategories`.
     */
    QueryCategoriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(QueryCategories_1.QueryCategories, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `QueryCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `QueryCategories`.
     */
    QueryCategoriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(QueryCategories_1.QueryCategories, entity);
    };
    QueryCategoriesRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(QueryCategories_1.QueryCategories, codeOrEntity instanceof QueryCategories_1.QueryCategories ? codeOrEntity : { Code: codeOrEntity });
    };
    return QueryCategoriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.QueryCategoriesRequestBuilder = QueryCategoriesRequestBuilder;
//# sourceMappingURL=QueryCategoriesRequestBuilder.js.map