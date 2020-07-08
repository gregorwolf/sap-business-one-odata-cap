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
exports.AccountSegmentationCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var AccountSegmentationCategories_1 = require("./AccountSegmentationCategories");
/**
 * Request builder class for operations supported on the [[AccountSegmentationCategories]] entity.
 */
var AccountSegmentationCategoriesRequestBuilder = /** @class */ (function (_super) {
    __extends(AccountSegmentationCategoriesRequestBuilder, _super);
    function AccountSegmentationCategoriesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `AccountSegmentationCategories` entity based on its keys.
     * @param segmentId Key property. See [[AccountSegmentationCategories.segmentId]].
     * @param code Key property. See [[AccountSegmentationCategories.code]].
     * @returns A request builder for creating requests to retrieve one `AccountSegmentationCategories` entity based on its keys.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.getByKey = function (segmentId, code) {
        return new v4_1.GetByKeyRequestBuilder(AccountSegmentationCategories_1.AccountSegmentationCategories, {
            SegmentID: segmentId,
            Code: code
        });
    };
    /**
     * Returns a request builder for querying all `AccountSegmentationCategories` entities.
     * @returns A request builder for creating requests to retrieve all `AccountSegmentationCategories` entities.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(AccountSegmentationCategories_1.AccountSegmentationCategories);
    };
    /**
     * Returns a request builder for creating a `AccountSegmentationCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccountSegmentationCategories`.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(AccountSegmentationCategories_1.AccountSegmentationCategories, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccountSegmentationCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccountSegmentationCategories`.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(AccountSegmentationCategories_1.AccountSegmentationCategories, entity);
    };
    AccountSegmentationCategoriesRequestBuilder.prototype.delete = function (segmentIdOrEntity, code) {
        return new v4_1.DeleteRequestBuilder(AccountSegmentationCategories_1.AccountSegmentationCategories, segmentIdOrEntity instanceof AccountSegmentationCategories_1.AccountSegmentationCategories ? segmentIdOrEntity : {
            SegmentID: segmentIdOrEntity,
            Code: code
        });
    };
    return AccountSegmentationCategoriesRequestBuilder;
}(v4_1.RequestBuilder));
exports.AccountSegmentationCategoriesRequestBuilder = AccountSegmentationCategoriesRequestBuilder;
//# sourceMappingURL=AccountSegmentationCategoriesRequestBuilder.js.map