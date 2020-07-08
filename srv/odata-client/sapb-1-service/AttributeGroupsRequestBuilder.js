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
exports.AttributeGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AttributeGroups_1 = require("./AttributeGroups");
/**
 * Request builder class for operations supported on the [[AttributeGroups]] entity.
 */
var AttributeGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(AttributeGroupsRequestBuilder, _super);
    function AttributeGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AttributeGroups` entity based on its keys.
     * @param code Key property. See [[AttributeGroups.code]].
     * @returns A request builder for creating requests to retrieve one `AttributeGroups` entity based on its keys.
     */
    AttributeGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(AttributeGroups_1.AttributeGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `AttributeGroups` entities.
     * @returns A request builder for creating requests to retrieve all `AttributeGroups` entities.
     */
    AttributeGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AttributeGroups_1.AttributeGroups);
    };
    /**
     * Returns a request builder for creating a `AttributeGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AttributeGroups`.
     */
    AttributeGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AttributeGroups_1.AttributeGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AttributeGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AttributeGroups`.
     */
    AttributeGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AttributeGroups_1.AttributeGroups, entity);
    };
    AttributeGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(AttributeGroups_1.AttributeGroups, codeOrEntity instanceof AttributeGroups_1.AttributeGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return AttributeGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.AttributeGroupsRequestBuilder = AttributeGroupsRequestBuilder;
//# sourceMappingURL=AttributeGroupsRequestBuilder.js.map