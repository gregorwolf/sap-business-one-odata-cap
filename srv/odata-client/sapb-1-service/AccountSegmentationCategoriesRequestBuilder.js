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
exports.AccountSegmentationCategoriesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
        return new core_1.GetByKeyRequestBuilderV4(AccountSegmentationCategories_1.AccountSegmentationCategories, {
            SegmentID: segmentId,
            Code: code
        });
    };
    /**
     * Returns a request builder for querying all `AccountSegmentationCategories` entities.
     * @returns A request builder for creating requests to retrieve all `AccountSegmentationCategories` entities.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(AccountSegmentationCategories_1.AccountSegmentationCategories);
    };
    /**
     * Returns a request builder for creating a `AccountSegmentationCategories` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AccountSegmentationCategories`.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(AccountSegmentationCategories_1.AccountSegmentationCategories, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `AccountSegmentationCategories`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AccountSegmentationCategories`.
     */
    AccountSegmentationCategoriesRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(AccountSegmentationCategories_1.AccountSegmentationCategories, entity);
    };
    AccountSegmentationCategoriesRequestBuilder.prototype.delete = function (segmentIdOrEntity, code) {
        return new core_1.DeleteRequestBuilderV4(AccountSegmentationCategories_1.AccountSegmentationCategories, segmentIdOrEntity instanceof AccountSegmentationCategories_1.AccountSegmentationCategories ? segmentIdOrEntity : {
            SegmentID: segmentIdOrEntity,
            Code: code
        });
    };
    return AccountSegmentationCategoriesRequestBuilder;
}(core_1.RequestBuilder));
exports.AccountSegmentationCategoriesRequestBuilder = AccountSegmentationCategoriesRequestBuilder;
//# sourceMappingURL=AccountSegmentationCategoriesRequestBuilder.js.map