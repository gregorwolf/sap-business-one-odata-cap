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
exports.EnhancedDiscountGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var EnhancedDiscountGroups_1 = require("./EnhancedDiscountGroups");
/**
 * Request builder class for operations supported on the [[EnhancedDiscountGroups]] entity.
 */
var EnhancedDiscountGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(EnhancedDiscountGroupsRequestBuilder, _super);
    function EnhancedDiscountGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EnhancedDiscountGroups` entity based on its keys.
     * @param absEntry Key property. See [[EnhancedDiscountGroups.absEntry]].
     * @returns A request builder for creating requests to retrieve one `EnhancedDiscountGroups` entity based on its keys.
     */
    EnhancedDiscountGroupsRequestBuilder.prototype.getByKey = function (absEntry) {
        return new v4_1.GetByKeyRequestBuilder(EnhancedDiscountGroups_1.EnhancedDiscountGroups, { AbsEntry: absEntry });
    };
    /**
     * Returns a request builder for querying all `EnhancedDiscountGroups` entities.
     * @returns A request builder for creating requests to retrieve all `EnhancedDiscountGroups` entities.
     */
    EnhancedDiscountGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(EnhancedDiscountGroups_1.EnhancedDiscountGroups);
    };
    /**
     * Returns a request builder for creating a `EnhancedDiscountGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EnhancedDiscountGroups`.
     */
    EnhancedDiscountGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(EnhancedDiscountGroups_1.EnhancedDiscountGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `EnhancedDiscountGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `EnhancedDiscountGroups`.
     */
    EnhancedDiscountGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(EnhancedDiscountGroups_1.EnhancedDiscountGroups, entity);
    };
    EnhancedDiscountGroupsRequestBuilder.prototype.delete = function (absEntryOrEntity) {
        return new v4_1.DeleteRequestBuilder(EnhancedDiscountGroups_1.EnhancedDiscountGroups, absEntryOrEntity instanceof EnhancedDiscountGroups_1.EnhancedDiscountGroups ? absEntryOrEntity : { AbsEntry: absEntryOrEntity });
    };
    return EnhancedDiscountGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.EnhancedDiscountGroupsRequestBuilder = EnhancedDiscountGroupsRequestBuilder;
//# sourceMappingURL=EnhancedDiscountGroupsRequestBuilder.js.map