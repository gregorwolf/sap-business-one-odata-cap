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
exports.CommissionGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CommissionGroupsRequestBuilder_1 = require("./CommissionGroupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "CommissionGroups" of service "SAPB1".
 */
var CommissionGroups = /** @class */ (function (_super) {
    __extends(CommissionGroups, _super);
    function CommissionGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CommissionGroups`.
     * @returns A builder that constructs instances of entity type `CommissionGroups`.
     */
    CommissionGroups.builder = function () {
        return v4_1.Entity.entityBuilder(CommissionGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CommissionGroups` entity type.
     * @returns A `CommissionGroups` request builder.
     */
    CommissionGroups.requestBuilder = function () {
        return new CommissionGroupsRequestBuilder_1.CommissionGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CommissionGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CommissionGroups`.
     */
    CommissionGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, CommissionGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CommissionGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CommissionGroups.
     */
    CommissionGroups._entityName = 'CommissionGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CommissionGroups.
     */
    CommissionGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    CommissionGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CommissionGroups;
}(v4_1.Entity));
exports.CommissionGroups = CommissionGroups;
var SalesPersons_1 = require("./SalesPersons");
var Items_1 = require("./Items");
var BusinessPartners_1 = require("./BusinessPartners");
(function (CommissionGroups) {
    /**
     * Static representation of the [[commissionGroupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CommissionGroups.COMMISSION_GROUP_CODE = new v4_1.NumberField('CommissionGroupCode', CommissionGroups, 'Edm.Int32');
    /**
     * Static representation of the [[commissionGroupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CommissionGroups.COMMISSION_GROUP_NAME = new v4_1.StringField('CommissionGroupName', CommissionGroups, 'Edm.String');
    /**
     * Static representation of the [[commissionPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CommissionGroups.COMMISSION_PERCENTAGE = new v4_1.NumberField('CommissionPercentage', CommissionGroups, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[salesPersons]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CommissionGroups.SALES_PERSONS = new v4_1.OneToManyLink('SalesPersons', CommissionGroups, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CommissionGroups.ITEMS = new v4_1.OneToManyLink('Items', CommissionGroups, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CommissionGroups.BUSINESS_PARTNERS = new v4_1.OneToManyLink('BusinessPartners', CommissionGroups, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the CommissionGroups entity.
     */
    CommissionGroups._allFields = [
        CommissionGroups.COMMISSION_GROUP_CODE,
        CommissionGroups.COMMISSION_GROUP_NAME,
        CommissionGroups.COMMISSION_PERCENTAGE,
        CommissionGroups.SALES_PERSONS,
        CommissionGroups.ITEMS,
        CommissionGroups.BUSINESS_PARTNERS
    ];
    /**
     * All fields selector.
     */
    CommissionGroups.ALL_FIELDS = new v4_1.AllFields('*', CommissionGroups);
    /**
     * All key fields of the CommissionGroups entity.
     */
    CommissionGroups._keyFields = [CommissionGroups.COMMISSION_GROUP_CODE];
    /**
     * Mapping of all key field names to the respective static field property CommissionGroups.
     */
    CommissionGroups._keys = CommissionGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CommissionGroups = exports.CommissionGroups || (exports.CommissionGroups = {}));
exports.CommissionGroups = CommissionGroups;
//# sourceMappingURL=CommissionGroups.js.map