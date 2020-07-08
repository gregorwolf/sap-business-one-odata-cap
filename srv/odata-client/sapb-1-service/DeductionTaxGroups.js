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
exports.DeductionTaxGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeductionTaxGroupsRequestBuilder_1 = require("./DeductionTaxGroupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DeductionTaxGroups" of service "SAPB1".
 */
var DeductionTaxGroups = /** @class */ (function (_super) {
    __extends(DeductionTaxGroups, _super);
    function DeductionTaxGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DeductionTaxGroups`.
     * @returns A builder that constructs instances of entity type `DeductionTaxGroups`.
     */
    DeductionTaxGroups.builder = function () {
        return v4_1.Entity.entityBuilder(DeductionTaxGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeductionTaxGroups` entity type.
     * @returns A `DeductionTaxGroups` request builder.
     */
    DeductionTaxGroups.requestBuilder = function () {
        return new DeductionTaxGroupsRequestBuilder_1.DeductionTaxGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionTaxGroups`.
     */
    DeductionTaxGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DeductionTaxGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeductionTaxGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeductionTaxGroups.
     */
    DeductionTaxGroups._entityName = 'DeductionTaxGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeductionTaxGroups.
     */
    DeductionTaxGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DeductionTaxGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DeductionTaxGroups;
}(v4_1.Entity));
exports.DeductionTaxGroups = DeductionTaxGroups;
var BusinessPartners_1 = require("./BusinessPartners");
var DeductionTaxSubGroups_1 = require("./DeductionTaxSubGroups");
(function (DeductionTaxGroups) {
    /**
     * Static representation of the [[groupKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxGroups.GROUP_KEY = new v4_1.NumberField('GroupKey', DeductionTaxGroups, 'Edm.Int32');
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxGroups.GROUP_NAME = new v4_1.StringField('GroupName', DeductionTaxGroups, 'Edm.String');
    /**
     * Static representation of the [[maxRedin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxGroups.MAX_REDIN = new v4_1.NumberField('MaxRedin', DeductionTaxGroups, 'Edm.Double');
    /**
     * Static representation of the [[groupExtendedCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxGroups.GROUP_EXTENDED_CODE = new v4_1.StringField('GroupExtendedCode', DeductionTaxGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxGroups.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', DeductionTaxGroups, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[deductionTaxSubGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxGroups.DEDUCTION_TAX_SUB_GROUP = new v4_1.OneToOneLink('DeductionTaxSubGroup', DeductionTaxGroups, DeductionTaxSubGroups_1.DeductionTaxSubGroups);
    /**
     * All fields of the DeductionTaxGroups entity.
     */
    DeductionTaxGroups._allFields = [
        DeductionTaxGroups.GROUP_KEY,
        DeductionTaxGroups.GROUP_NAME,
        DeductionTaxGroups.MAX_REDIN,
        DeductionTaxGroups.GROUP_EXTENDED_CODE,
        DeductionTaxGroups.BUSINESS_PARTNERS,
        DeductionTaxGroups.DEDUCTION_TAX_SUB_GROUP
    ];
    /**
     * All fields selector.
     */
    DeductionTaxGroups.ALL_FIELDS = new v4_1.AllFields('*', DeductionTaxGroups);
    /**
     * All key fields of the DeductionTaxGroups entity.
     */
    DeductionTaxGroups._keyFields = [DeductionTaxGroups.GROUP_KEY];
    /**
     * Mapping of all key field names to the respective static field property DeductionTaxGroups.
     */
    DeductionTaxGroups._keys = DeductionTaxGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeductionTaxGroups = exports.DeductionTaxGroups || (exports.DeductionTaxGroups = {}));
exports.DeductionTaxGroups = DeductionTaxGroups;
//# sourceMappingURL=DeductionTaxGroups.js.map