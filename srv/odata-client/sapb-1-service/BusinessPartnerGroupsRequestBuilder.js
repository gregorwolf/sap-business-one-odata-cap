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
exports.BusinessPartnerGroupsRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var BusinessPartnerGroups_1 = require("./BusinessPartnerGroups");
/**
 * Request builder class for operations supported on the [[BusinessPartnerGroups]] entity.
 */
var BusinessPartnerGroupsRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerGroupsRequestBuilder, _super);
    function BusinessPartnerGroupsRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerGroups` entity based on its keys.
     * @param code Key property. See [[BusinessPartnerGroups.code]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerGroups` entity based on its keys.
     */
    BusinessPartnerGroupsRequestBuilder.prototype.getByKey = function (code) {
        return new core_1.GetByKeyRequestBuilderV4(BusinessPartnerGroups_1.BusinessPartnerGroups, { Code: code });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerGroups` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerGroups` entities.
     */
    BusinessPartnerGroupsRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilderV4(BusinessPartnerGroups_1.BusinessPartnerGroups);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerGroups` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerGroups`.
     */
    BusinessPartnerGroupsRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilderV4(BusinessPartnerGroups_1.BusinessPartnerGroups, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerGroups`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerGroups`.
     */
    BusinessPartnerGroupsRequestBuilder.prototype.update = function (entity) {
        return new core_1.UpdateRequestBuilderV4(BusinessPartnerGroups_1.BusinessPartnerGroups, entity);
    };
    BusinessPartnerGroupsRequestBuilder.prototype.delete = function (codeOrEntity) {
        return new core_1.DeleteRequestBuilderV4(BusinessPartnerGroups_1.BusinessPartnerGroups, codeOrEntity instanceof BusinessPartnerGroups_1.BusinessPartnerGroups ? codeOrEntity : { Code: codeOrEntity });
    };
    return BusinessPartnerGroupsRequestBuilder;
}(core_1.RequestBuilder));
exports.BusinessPartnerGroupsRequestBuilder = BusinessPartnerGroupsRequestBuilder;
//# sourceMappingURL=BusinessPartnerGroupsRequestBuilder.js.map