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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessPartnerProperties = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerPropertiesRequestBuilder_1 = require("./BusinessPartnerPropertiesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BusinessPartnerProperties" of service "SAPB1".
 */
var BusinessPartnerProperties = /** @class */ (function (_super) {
    __extends(BusinessPartnerProperties, _super);
    function BusinessPartnerProperties() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerProperties`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerProperties`.
     */
    BusinessPartnerProperties.builder = function () {
        return core_1.EntityV4.entityBuilder(BusinessPartnerProperties);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerProperties` entity type.
     * @returns A `BusinessPartnerProperties` request builder.
     */
    BusinessPartnerProperties.requestBuilder = function () {
        return new BusinessPartnerPropertiesRequestBuilder_1.BusinessPartnerPropertiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerProperties`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerProperties`.
     */
    BusinessPartnerProperties.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BusinessPartnerProperties);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerProperties.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerProperties.
     */
    BusinessPartnerProperties._entityName = 'BusinessPartnerProperties';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerProperties._defaultServicePath = '/b1s/v2/';
    return BusinessPartnerProperties;
}(core_1.EntityV4));
exports.BusinessPartnerProperties = BusinessPartnerProperties;
(function (BusinessPartnerProperties) {
    /**
     * Static representation of the [[propertyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerProperties.PROPERTY_CODE = new core_1.NumberField('PropertyCode', BusinessPartnerProperties, 'Edm.Int32');
    /**
     * Static representation of the [[propertyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerProperties.PROPERTY_NAME = new core_1.StringField('PropertyName', BusinessPartnerProperties, 'Edm.String');
    /**
     * All fields of the BusinessPartnerProperties entity.
     */
    BusinessPartnerProperties._allFields = [
        BusinessPartnerProperties.PROPERTY_CODE,
        BusinessPartnerProperties.PROPERTY_NAME
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerProperties.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerProperties);
    /**
     * All key fields of the BusinessPartnerProperties entity.
     */
    BusinessPartnerProperties._keyFields = [BusinessPartnerProperties.PROPERTY_CODE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerProperties.
     */
    BusinessPartnerProperties._keys = BusinessPartnerProperties._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerProperties = exports.BusinessPartnerProperties || (exports.BusinessPartnerProperties = {}));
exports.BusinessPartnerProperties = BusinessPartnerProperties;
//# sourceMappingURL=BusinessPartnerProperties.js.map