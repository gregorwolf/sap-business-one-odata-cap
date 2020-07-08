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
exports.CommissionGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var CommissionGroups_1 = require("./CommissionGroups");
/**
 * Request builder class for operations supported on the [[CommissionGroups]] entity.
 */
var CommissionGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(CommissionGroupsRequestBuilder, _super);
    function CommissionGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `CommissionGroups` entity based on its keys.
     * @param commissionGroupCode Key property. See [[CommissionGroups.commissionGroupCode]].
     * @returns A request builder for creating requests to retrieve one `CommissionGroups` entity based on its keys.
     */
    CommissionGroupsRequestBuilder.prototype.getByKey = function (commissionGroupCode) {
        return new v4_1.GetByKeyRequestBuilder(CommissionGroups_1.CommissionGroups, { CommissionGroupCode: commissionGroupCode });
    };
    /**
     * Returns a request builder for querying all `CommissionGroups` entities.
     * @returns A request builder for creating requests to retrieve all `CommissionGroups` entities.
     */
    CommissionGroupsRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(CommissionGroups_1.CommissionGroups);
    };
    /**
     * Returns a request builder for creating a `CommissionGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `CommissionGroups`.
     */
    CommissionGroupsRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(CommissionGroups_1.CommissionGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `CommissionGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `CommissionGroups`.
     */
    CommissionGroupsRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(CommissionGroups_1.CommissionGroups, entity);
    };
    CommissionGroupsRequestBuilder.prototype.delete = function (commissionGroupCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(CommissionGroups_1.CommissionGroups, commissionGroupCodeOrEntity instanceof CommissionGroups_1.CommissionGroups ? commissionGroupCodeOrEntity : { CommissionGroupCode: commissionGroupCodeOrEntity });
    };
    return CommissionGroupsRequestBuilder;
}(v4_1.RequestBuilder));
exports.CommissionGroupsRequestBuilder = CommissionGroupsRequestBuilder;
//# sourceMappingURL=CommissionGroupsRequestBuilder.js.map