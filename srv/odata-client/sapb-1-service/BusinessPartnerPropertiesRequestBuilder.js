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
exports.BusinessPartnerPropertiesRequestBuilder = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
var BusinessPartnerProperties_1 = require("./BusinessPartnerProperties");
/**
 * Request builder class for operations supported on the [[BusinessPartnerProperties]] entity.
 */
var BusinessPartnerPropertiesRequestBuilder = /** @class */ (function (_super) {
    __extends(BusinessPartnerPropertiesRequestBuilder, _super);
    function BusinessPartnerPropertiesRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `BusinessPartnerProperties` entity based on its keys.
     * @param propertyCode Key property. See [[BusinessPartnerProperties.propertyCode]].
     * @returns A request builder for creating requests to retrieve one `BusinessPartnerProperties` entity based on its keys.
     */
    BusinessPartnerPropertiesRequestBuilder.prototype.getByKey = function (propertyCode) {
        return new v4_1.GetByKeyRequestBuilder(BusinessPartnerProperties_1.BusinessPartnerProperties, { PropertyCode: propertyCode });
    };
    /**
     * Returns a request builder for querying all `BusinessPartnerProperties` entities.
     * @returns A request builder for creating requests to retrieve all `BusinessPartnerProperties` entities.
     */
    BusinessPartnerPropertiesRequestBuilder.prototype.getAll = function () {
        return new v4_1.GetAllRequestBuilder(BusinessPartnerProperties_1.BusinessPartnerProperties);
    };
    /**
     * Returns a request builder for creating a `BusinessPartnerProperties` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `BusinessPartnerProperties`.
     */
    BusinessPartnerPropertiesRequestBuilder.prototype.create = function (entity) {
        return new v4_1.CreateRequestBuilder(BusinessPartnerProperties_1.BusinessPartnerProperties, entity);
    };
    /**
     * Returns a request builder for updating an entity of type `BusinessPartnerProperties`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `BusinessPartnerProperties`.
     */
    BusinessPartnerPropertiesRequestBuilder.prototype.update = function (entity) {
        return new v4_1.UpdateRequestBuilder(BusinessPartnerProperties_1.BusinessPartnerProperties, entity);
    };
    BusinessPartnerPropertiesRequestBuilder.prototype.delete = function (propertyCodeOrEntity) {
        return new v4_1.DeleteRequestBuilder(BusinessPartnerProperties_1.BusinessPartnerProperties, propertyCodeOrEntity instanceof BusinessPartnerProperties_1.BusinessPartnerProperties ? propertyCodeOrEntity : { PropertyCode: propertyCodeOrEntity });
    };
    return BusinessPartnerPropertiesRequestBuilder;
}(v4_1.RequestBuilder));
exports.BusinessPartnerPropertiesRequestBuilder = BusinessPartnerPropertiesRequestBuilder;
//# sourceMappingURL=BusinessPartnerPropertiesRequestBuilder.js.map