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
exports.DeductionTaxHierarchies = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeductionTaxHierarchiesRequestBuilder_1 = require("./DeductionTaxHierarchiesRequestBuilder");
var DeductionTaxHierarchiesLine_1 = require("./DeductionTaxHierarchiesLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DeductionTaxHierarchies" of service "SAPB1".
 */
var DeductionTaxHierarchies = /** @class */ (function (_super) {
    __extends(DeductionTaxHierarchies, _super);
    function DeductionTaxHierarchies() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DeductionTaxHierarchies`.
     * @returns A builder that constructs instances of entity type `DeductionTaxHierarchies`.
     */
    DeductionTaxHierarchies.builder = function () {
        return v4_1.Entity.entityBuilder(DeductionTaxHierarchies);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeductionTaxHierarchies` entity type.
     * @returns A `DeductionTaxHierarchies` request builder.
     */
    DeductionTaxHierarchies.requestBuilder = function () {
        return new DeductionTaxHierarchiesRequestBuilder_1.DeductionTaxHierarchiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxHierarchies`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionTaxHierarchies`.
     */
    DeductionTaxHierarchies.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DeductionTaxHierarchies);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeductionTaxHierarchies.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeductionTaxHierarchies.
     */
    DeductionTaxHierarchies._entityName = 'DeductionTaxHierarchies';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DeductionTaxHierarchies.
     */
    DeductionTaxHierarchies._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DeductionTaxHierarchies._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DeductionTaxHierarchies;
}(v4_1.Entity));
exports.DeductionTaxHierarchies = DeductionTaxHierarchies;
var BusinessPartners_1 = require("./BusinessPartners");
(function (DeductionTaxHierarchies) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.ABS_ENTRY = new v4_1.NumberField('AbsEntry', DeductionTaxHierarchies, 'Edm.Int32');
    /**
     * Static representation of the [[bpCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.BP_CODE = new v4_1.StringField('BPCode', DeductionTaxHierarchies, 'Edm.String');
    /**
     * Static representation of the [[hierarchyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.HIERARCHY_CODE = new v4_1.StringField('HierarchyCode', DeductionTaxHierarchies, 'Edm.String');
    /**
     * Static representation of the [[hierarchyName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.HIERARCHY_NAME = new v4_1.StringField('HierarchyName', DeductionTaxHierarchies, 'Edm.String');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.VALID_FROM = new v4_1.DateField('ValidFrom', DeductionTaxHierarchies, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[validUntil]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.VALID_UNTIL = new v4_1.DateField('ValidUntil', DeductionTaxHierarchies, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deductionPercent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.DEDUCTION_PERCENT = new v4_1.NumberField('DeductionPercent', DeductionTaxHierarchies, 'Edm.Double');
    /**
     * Static representation of the [[maximumTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.MAXIMUM_TOTAL = new v4_1.NumberField('MaximumTotal', DeductionTaxHierarchies, 'Edm.Double');
    /**
     * Static representation of the [[lastUpdated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.LAST_UPDATED = new v4_1.DateField('LastUpdated', DeductionTaxHierarchies, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[deductionTaxHierarchiesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.DEDUCTION_TAX_HIERARCHIES_LINES = new v4_1.CollectionField('DeductionTaxHierarchies_Lines', DeductionTaxHierarchies, new DeductionTaxHierarchiesLine_1.DeductionTaxHierarchiesLineField('', DeductionTaxHierarchies));
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxHierarchies.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', DeductionTaxHierarchies, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the DeductionTaxHierarchies entity.
     */
    DeductionTaxHierarchies._allFields = [
        DeductionTaxHierarchies.ABS_ENTRY,
        DeductionTaxHierarchies.BP_CODE,
        DeductionTaxHierarchies.HIERARCHY_CODE,
        DeductionTaxHierarchies.HIERARCHY_NAME,
        DeductionTaxHierarchies.VALID_FROM,
        DeductionTaxHierarchies.VALID_UNTIL,
        DeductionTaxHierarchies.DEDUCTION_PERCENT,
        DeductionTaxHierarchies.MAXIMUM_TOTAL,
        DeductionTaxHierarchies.LAST_UPDATED,
        DeductionTaxHierarchies.DEDUCTION_TAX_HIERARCHIES_LINES,
        DeductionTaxHierarchies.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    DeductionTaxHierarchies.ALL_FIELDS = new v4_1.AllFields('*', DeductionTaxHierarchies);
    /**
     * All key fields of the DeductionTaxHierarchies entity.
     */
    DeductionTaxHierarchies._keyFields = [DeductionTaxHierarchies.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property DeductionTaxHierarchies.
     */
    DeductionTaxHierarchies._keys = DeductionTaxHierarchies._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeductionTaxHierarchies = exports.DeductionTaxHierarchies || (exports.DeductionTaxHierarchies = {}));
exports.DeductionTaxHierarchies = DeductionTaxHierarchies;
//# sourceMappingURL=DeductionTaxHierarchies.js.map