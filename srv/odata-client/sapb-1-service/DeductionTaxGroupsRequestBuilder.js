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
exports.DeductionTaxGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var DeductionTaxGroups_1 = require("./DeductionTaxGroups");
/**
 * Request builder class for operations supported on the [[DeductionTaxGroups]] entity.
 */
var DeductionTaxGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(DeductionTaxGroupsRequestBuilder, _super);
    function DeductionTaxGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DeductionTaxGroups` entity based on its keys.
     * @param groupKey Key property. See [[DeductionTaxGroups.groupKey]].
     * @returns A request builder for creating requests to retrieve one `DeductionTaxGroups` entity based on its keys.
     */
    DeductionTaxGroupsRequestBuilder.prototype.getByKey = function (groupKey) {
        return new v4_1.GetByKeyRequestBuilder(DeductionTaxGroups_1.DeductionTaxGroups, { GroupKey: groupKey });
    };
    /**
     * Returns a request builder for querying all `DeductionTaxGroups` entities.
     * @returns A request builder for creating requests to retrieve all `DeductionTaxGroups` entities.
     */
    DeductionTaxGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(DeductionTaxGroups_1.DeductionTaxGroups);
    };
    /**
     * Returns a request builder for creating a `DeductionTaxGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeductionTaxGroups`.
     */
    DeductionTaxGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(DeductionTaxGroups_1.DeductionTaxGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DeductionTaxGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeductionTaxGroups`.
     */
    DeductionTaxGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(DeductionTaxGroups_1.DeductionTaxGroups, entity);
    };
    DeductionTaxGroupsRequestBuilder.prototype.delete = function (groupKeyOrEntity) {
        return new v4_1.DeleteRequestBuilder(DeductionTaxGroups_1.DeductionTaxGroups, groupKeyOrEntity instanceof DeductionTaxGroups_1.DeductionTaxGroups ? groupKeyOrEntity : { GroupKey: groupKeyOrEntity });
    };
    return DeductionTaxGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.DeductionTaxGroupsRequestBuilder = DeductionTaxGroupsRequestBuilder;
//# sourceMappingURL=DeductionTaxGroupsRequestBuilder.js.map