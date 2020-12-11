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
exports.ResourceGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var ResourceGroups_1 = require("./ResourceGroups");
/**
 * Request builder class for operations supported on the [[ResourceGroups]] entity.
 */
var ResourceGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(ResourceGroupsRequestBuilder, _super);
    function ResourceGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `ResourceGroups` entity based on its keys.
     * @param code Key property. See [[ResourceGroups.code]].
     * @returns A request builder for creating requests to retrieve one `ResourceGroups` entity based on its keys.
     */
    ResourceGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(ResourceGroups_1.ResourceGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `ResourceGroups` entities.
     * @returns A request builder for creating requests to retrieve all `ResourceGroups` entities.
     */
    ResourceGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(ResourceGroups_1.ResourceGroups);
    };
    /**
     * Returns a request builder for creating a `ResourceGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `ResourceGroups`.
     */
    ResourceGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(ResourceGroups_1.ResourceGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `ResourceGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `ResourceGroups`.
     */
    ResourceGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(ResourceGroups_1.ResourceGroups, entity);
    };
    ResourceGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(ResourceGroups_1.ResourceGroups, codeOrEntity instanceof ResourceGroups_1.ResourceGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return ResourceGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.ResourceGroupsRequestBuilder = ResourceGroupsRequestBuilder;
//# sourceMappingURL=ResourceGroupsRequestBuilder.js.map