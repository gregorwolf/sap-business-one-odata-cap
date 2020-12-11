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
exports.FormattedSearchesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var FormattedSearches_1 = require("./FormattedSearches");
/**
 * Request builder class for operations supported on the [[FormattedSearches]] entity.
 */
var FormattedSearchesRequestBuilder = /** @class */ (function (_super) {
    __extends(FormattedSearchesRequestBuilder, _super);
    function FormattedSearchesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormattedSearches` entity based on its keys.
     * @param index Key property. See [[FormattedSearches.index]].
     * @returns A request builder for creating requests to retrieve one `FormattedSearches` entity based on its keys.
     */
    FormattedSearchesRequestBuilder.prototype.getByKey = function (index) {
        return new core_1.GetByKeyRequestBuilderV4(FormattedSearches_1.FormattedSearches, { Index: index });
    };
    /**
     * Returns a request builder for querying all `FormattedSearches` entities.
     * @returns A request builder for creating requests to retrieve all `FormattedSearches` entities.
     */
    FormattedSearchesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(FormattedSearches_1.FormattedSearches);
    };
    /**
     * Returns a request builder for creating a `FormattedSearches` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormattedSearches`.
     */
    FormattedSearchesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(FormattedSearches_1.FormattedSearches, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `FormattedSearches`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormattedSearches`.
     */
    FormattedSearchesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(FormattedSearches_1.FormattedSearches, entity);
    };
    FormattedSearchesRequestBuilder.prototype.delete = function (indexOrEntity) {
        return new core_1.DeleteRequestBuilderV4(FormattedSearches_1.FormattedSearches, indexOrEntity instanceof FormattedSearches_1.FormattedSearches ? indexOrEntity : { Index: indexOrEntity });
    };
    return FormattedSearchesRequestBuilder;
}(core_1.RequestBuilder));
exports.FormattedSearchesRequestBuilder = FormattedSearchesRequestBuilder;
//# sourceMappingURL=FormattedSearchesRequestBuilder.js.map