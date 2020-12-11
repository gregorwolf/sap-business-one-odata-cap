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
exports.DeductionTaxSubGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DeductionTaxSubGroups_1 = require("./DeductionTaxSubGroups");
/**
 * Request builder class for operations supported on the [[DeductionTaxSubGroups]] entity.
 */
var DeductionTaxSubGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(DeductionTaxSubGroupsRequestBuilder, _super);
    function DeductionTaxSubGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DeductionTaxSubGroups` entity based on its keys.
     * @param groupCode Key property. See [[DeductionTaxSubGroups.groupCode]].
     * @returns A request builder for creating requests to retrieve one `DeductionTaxSubGroups` entity based on its keys.
     */
    DeductionTaxSubGroupsRequestBuilder.prototype.getByKey = function (groupCode) {
        return new core_1.GetByKeyRequestBuilderV4(DeductionTaxSubGroups_1.DeductionTaxSubGroups, { GroupCode: groupCode });
    };
    /**
     * Returns a request builder for querying all `DeductionTaxSubGroups` entities.
     * @returns A request builder for creating requests to retrieve all `DeductionTaxSubGroups` entities.
     */
    DeductionTaxSubGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(DeductionTaxSubGroups_1.DeductionTaxSubGroups);
    };
    /**
     * Returns a request builder for creating a `DeductionTaxSubGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `DeductionTaxSubGroups`.
     */
    DeductionTaxSubGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(DeductionTaxSubGroups_1.DeductionTaxSubGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `DeductionTaxSubGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `DeductionTaxSubGroups`.
     */
    DeductionTaxSubGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(DeductionTaxSubGroups_1.DeductionTaxSubGroups, entity);
    };
    DeductionTaxSubGroupsRequestBuilder.prototype.delete = function (groupCodeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(DeductionTaxSubGroups_1.DeductionTaxSubGroups, groupCodeOrEntity instanceof DeductionTaxSubGroups_1.DeductionTaxSubGroups ? groupCodeOrEntity : { GroupCode: groupCodeOrEntity });
    };
    return DeductionTaxSubGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.DeductionTaxSubGroupsRequestBuilder = DeductionTaxSubGroupsRequestBuilder;
//# sourceMappingURL=DeductionTaxSubGroupsRequestBuilder.js.map