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
exports.SalesTaxAuthoritiesTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesTaxAuthoritiesTypesRequestBuilder_1 = require("./SalesTaxAuthoritiesTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesTaxAuthoritiesTypes" of service "SAPB1".
 */
var SalesTaxAuthoritiesTypes = /** @class */ (function (_super) {
    __extends(SalesTaxAuthoritiesTypes, _super);
    function SalesTaxAuthoritiesTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesTaxAuthoritiesTypes`.
     * @returns A builder that constructs instances of entity type `SalesTaxAuthoritiesTypes`.
     */
    SalesTaxAuthoritiesTypes.builder = function () {
        return v4_1.Entity.entityBuilder(SalesTaxAuthoritiesTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesTaxAuthoritiesTypes` entity type.
     * @returns A `SalesTaxAuthoritiesTypes` request builder.
     */
    SalesTaxAuthoritiesTypes.requestBuilder = function () {
        return new SalesTaxAuthoritiesTypesRequestBuilder_1.SalesTaxAuthoritiesTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesTaxAuthoritiesTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesTaxAuthoritiesTypes`.
     */
    SalesTaxAuthoritiesTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesTaxAuthoritiesTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesTaxAuthoritiesTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesTaxAuthoritiesTypes.
     */
    SalesTaxAuthoritiesTypes._entityName = 'SalesTaxAuthoritiesTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesTaxAuthoritiesTypes.
     */
    SalesTaxAuthoritiesTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesTaxAuthoritiesTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesTaxAuthoritiesTypes;
}(v4_1.Entity));
exports.SalesTaxAuthoritiesTypes = SalesTaxAuthoritiesTypes;
var DepreciationAreas_1 = require("./DepreciationAreas");
var SalesTaxAuthorities_1 = require("./SalesTaxAuthorities");
var Users_1 = require("./Users");
(function (SalesTaxAuthoritiesTypes) {
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthoritiesTypes.USER_SIGNATURE = new v4_1.NumberField('UserSignature', SalesTaxAuthoritiesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthoritiesTypes.NAME = new v4_1.StringField('Name', SalesTaxAuthoritiesTypes, 'Edm.String');
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthoritiesTypes.NUMERATOR = new v4_1.NumberField('Numerator', SalesTaxAuthoritiesTypes, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[depreciationAreas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthoritiesTypes.DEPRECIATION_AREAS = new v4_1.OneToManyLink('DepreciationAreas', SalesTaxAuthoritiesTypes, DepreciationAreas_1.DepreciationAreas);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthoritiesTypes.SALES_TAX_AUTHORITIES = new v4_1.OneToManyLink('SalesTaxAuthorities', SalesTaxAuthoritiesTypes, SalesTaxAuthorities_1.SalesTaxAuthorities);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesTaxAuthoritiesTypes.USER = new v4_1.OneToOneLink('User', SalesTaxAuthoritiesTypes, Users_1.Users);
    /**
     * All fields of the SalesTaxAuthoritiesTypes entity.
     */
    SalesTaxAuthoritiesTypes._allFields = [
        SalesTaxAuthoritiesTypes.USER_SIGNATURE,
        SalesTaxAuthoritiesTypes.NAME,
        SalesTaxAuthoritiesTypes.NUMERATOR,
        SalesTaxAuthoritiesTypes.DEPRECIATION_AREAS,
        SalesTaxAuthoritiesTypes.SALES_TAX_AUTHORITIES,
        SalesTaxAuthoritiesTypes.USER
    ];
    /**
     * All fields selector.
     */
    SalesTaxAuthoritiesTypes.ALL_FIELDS = new v4_1.AllFields('*', SalesTaxAuthoritiesTypes);
    /**
     * All key fields of the SalesTaxAuthoritiesTypes entity.
     */
    SalesTaxAuthoritiesTypes._keyFields = [SalesTaxAuthoritiesTypes.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property SalesTaxAuthoritiesTypes.
     */
    SalesTaxAuthoritiesTypes._keys = SalesTaxAuthoritiesTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesTaxAuthoritiesTypes = exports.SalesTaxAuthoritiesTypes || (exports.SalesTaxAuthoritiesTypes = {}));
exports.SalesTaxAuthoritiesTypes = SalesTaxAuthoritiesTypes;
//# sourceMappingURL=SalesTaxAuthoritiesTypes.js.map