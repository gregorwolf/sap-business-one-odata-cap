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
exports.Industries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var IndustriesRequestBuilder_1 = require("./IndustriesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Industries" of service "SAPB1".
 */
var Industries = /** @class */ (function (_super) {
    __extends(Industries, _super);
    function Industries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Industries`.
     * @returns A builder that constructs instances of entity type `Industries`.
     */
    Industries.builder = function () {
        return v4_1.Entity.entityBuilder(Industries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Industries` entity type.
     * @returns A `Industries` request builder.
     */
    Industries.requestBuilder = function () {
        return new IndustriesRequestBuilder_1.IndustriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Industries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Industries`.
     */
    Industries.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Industries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Industries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Industries.
     */
    Industries._entityName = 'Industries';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Industries.
     */
    Industries._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Industries._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Industries;
}(v4_1.Entity));
exports.Industries = Industries;
var SalesOpportunities_1 = require("./SalesOpportunities");
var BusinessPartners_1 = require("./BusinessPartners");
var ProjectManagements_1 = require("./ProjectManagements");
(function (Industries) {
    /**
     * Static representation of the [[industryDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Industries.INDUSTRY_DESCRIPTION = new v4_1.StringField('IndustryDescription', Industries, 'Edm.String');
    /**
     * Static representation of the [[industryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Industries.INDUSTRY_NAME = new v4_1.StringField('IndustryName', Industries, 'Edm.String');
    /**
     * Static representation of the [[industryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Industries.INDUSTRY_CODE = new v4_1.NumberField('IndustryCode', Industries, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Industries.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', Industries, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Industries.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', Industries, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Industries.PROJECT_MANAGEMENTS = new v4_1.OneToManyLink('ProjectManagements', Industries, ProjectManagements_1.ProjectManagements);
    /**
     * All fields of the Industries entity.
     */
    Industries._allFields = [
        Industries.INDUSTRY_DESCRIPTION,
        Industries.INDUSTRY_NAME,
        Industries.INDUSTRY_CODE,
        Industries.SALES_OPPORTUNITIES,
        Industries.BUSINESS_PARTNERS,
        Industries.PROJECT_MANAGEMENTS
    ];
    /**
     * All fields selector.
     */
    Industries.ALL_FIELDS = new v4_1.AllFields('*', Industries);
    /**
     * All key fields of the Industries entity.
     */
    Industries._keyFields = [Industries.INDUSTRY_CODE];
    /**
     * Mapping of all key field names to the respective static field property Industries.
     */
    Industries._keys = Industries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Industries = exports.Industries || (exports.Industries = {}));
exports.Industries = Industries;
//# sourceMappingURL=Industries.js.map