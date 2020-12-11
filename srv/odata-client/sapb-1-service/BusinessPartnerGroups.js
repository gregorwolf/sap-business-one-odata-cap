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
exports.BusinessPartnerGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BusinessPartnerGroupsRequestBuilder_1 = require("./BusinessPartnerGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BusinessPartnerGroups" of service "SAPB1".
 */
var BusinessPartnerGroups = /** @class */ (function (_super) {
    __extends(BusinessPartnerGroups, _super);
    function BusinessPartnerGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BusinessPartnerGroups`.
     * @returns A builder that constructs instances of entity type `BusinessPartnerGroups`.
     */
    BusinessPartnerGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(BusinessPartnerGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BusinessPartnerGroups` entity type.
     * @returns A `BusinessPartnerGroups` request builder.
     */
    BusinessPartnerGroups.requestBuilder = function () {
        return new BusinessPartnerGroupsRequestBuilder_1.BusinessPartnerGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BusinessPartnerGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BusinessPartnerGroups`.
     */
    BusinessPartnerGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BusinessPartnerGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BusinessPartnerGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BusinessPartnerGroups.
     */
    BusinessPartnerGroups._entityName = 'BusinessPartnerGroups';
    /**
     * Default url path for the according service.
     */
    BusinessPartnerGroups._defaultServicePath = '/b1s/v2/';
    return BusinessPartnerGroups;
}(core_1.EntityV4));
exports.BusinessPartnerGroups = BusinessPartnerGroups;
var BusinessPartners_1 = require("./BusinessPartners");
var GlAccountAdvancedRules_1 = require("./GlAccountAdvancedRules");
(function (BusinessPartnerGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerGroups.CODE = new core_1.NumberField('Code', BusinessPartnerGroups, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerGroups.NAME = new core_1.StringField('Name', BusinessPartnerGroups, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerGroups.TYPE = new core_1.EnumField('Type', BusinessPartnerGroups);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerGroups.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', BusinessPartnerGroups, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[glAccountAdvancedRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BusinessPartnerGroups.GL_ACCOUNT_ADVANCED_RULES = new core_1.OneToManyLink('GLAccountAdvancedRules', BusinessPartnerGroups, GlAccountAdvancedRules_1.GlAccountAdvancedRules);
    /**
     * All fields of the BusinessPartnerGroups entity.
     */
    BusinessPartnerGroups._allFields = [
        BusinessPartnerGroups.CODE,
        BusinessPartnerGroups.NAME,
        BusinessPartnerGroups.TYPE,
        BusinessPartnerGroups.BUSINESS_PARTNERS,
        BusinessPartnerGroups.GL_ACCOUNT_ADVANCED_RULES
    ];
    /**
     * All fields selector.
     */
    BusinessPartnerGroups.ALL_FIELDS = new core_1.AllFields('*', BusinessPartnerGroups);
    /**
     * All key fields of the BusinessPartnerGroups entity.
     */
    BusinessPartnerGroups._keyFields = [BusinessPartnerGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property BusinessPartnerGroups.
     */
    BusinessPartnerGroups._keys = BusinessPartnerGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BusinessPartnerGroups = exports.BusinessPartnerGroups || (exports.BusinessPartnerGroups = {}));
exports.BusinessPartnerGroups = BusinessPartnerGroups;
//# sourceMappingURL=BusinessPartnerGroups.js.map