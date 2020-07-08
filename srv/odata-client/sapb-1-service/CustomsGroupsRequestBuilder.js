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
exports.CustomsGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CustomsGroups_1 = require("./CustomsGroups");
/**
 * Request builder class for operations supported on the [[CustomsGroups]] entity.
 */
var CustomsGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(CustomsGroupsRequestBuilder, _super);
    function CustomsGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CustomsGroups` entity based on its keys.
     * @param code Key property. See [[CustomsGroups.code]].
     * @returns A request builder for creating requests to retrieve one `CustomsGroups` entity based on its keys.
     */
    CustomsGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new v4_1.GetByKeyRequestBuilder(CustomsGroups_1.CustomsGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `CustomsGroups` entities.
     * @returns A request builder for creating requests to retrieve all `CustomsGroups` entities.
     */
    CustomsGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CustomsGroups_1.CustomsGroups);
    };
    /**
     * Returns a request builder for creating a `CustomsGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CustomsGroups`.
     */
    CustomsGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CustomsGroups_1.CustomsGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CustomsGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CustomsGroups`.
     */
    CustomsGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CustomsGroups_1.CustomsGroups, entity);
    };
    CustomsGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CustomsGroups_1.CustomsGroups, codeOrEntity instanceof CustomsGroups_1.CustomsGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return CustomsGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CustomsGroupsRequestBuilder = CustomsGroupsRequestBuilder;
//# sourceMappingURL=CustomsGroupsRequestBuilder.js.map