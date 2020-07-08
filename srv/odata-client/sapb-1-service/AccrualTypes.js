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
exports.AccrualTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AccrualTypesRequestBuilder_1 = require("./AccrualTypesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "AccrualTypes" of service "SAPB1".
 */
var AccrualTypes = /** @class */ (function (_super) {
    __extends(AccrualTypes, _super);
    function AccrualTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `AccrualTypes`.
     * @returns A builder that constructs instances of entity type `AccrualTypes`.
     */
    AccrualTypes.builder = function () {
        return v4_1.Entity.entityBuilder(AccrualTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AccrualTypes` entity type.
     * @returns A `AccrualTypes` request builder.
     */
    AccrualTypes.requestBuilder = function () {
        return new AccrualTypesRequestBuilder_1.AccrualTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccrualTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccrualTypes`.
     */
    AccrualTypes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, AccrualTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AccrualTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AccrualTypes.
     */
    AccrualTypes._entityName = 'AccrualTypes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for AccrualTypes.
     */
    AccrualTypes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    AccrualTypes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return AccrualTypes;
}(v4_1.Entity));
exports.AccrualTypes = AccrualTypes;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
(function (AccrualTypes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualTypes.CODE = new v4_1.StringField('Code', AccrualTypes, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualTypes.NAME = new v4_1.StringField('Name', AccrualTypes, 'Edm.String');
    /**
     * Static representation of the [[postingAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualTypes.POSTING_ACCOUNT = new v4_1.StringField('PostingAccount', AccrualTypes, 'Edm.String');
    /**
     * Static representation of the [[calculationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualTypes.CALCULATION_ACCOUNT = new v4_1.StringField('CalculationAccount', AccrualTypes, 'Edm.String');
    /**
     * Static representation of the [[interimAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualTypes.INTERIM_ACCOUNT = new v4_1.StringField('InterimAccount', AccrualTypes, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccrualTypes.CHART_OF_ACCOUNT = new v4_1.OneToOneLink('ChartOfAccount', AccrualTypes, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * All fields of the AccrualTypes entity.
     */
    AccrualTypes._allFields = [
        AccrualTypes.CODE,
        AccrualTypes.NAME,
        AccrualTypes.POSTING_ACCOUNT,
        AccrualTypes.CALCULATION_ACCOUNT,
        AccrualTypes.INTERIM_ACCOUNT,
        AccrualTypes.CHART_OF_ACCOUNT
    ];
    /**
     * All fields selector.
     */
    AccrualTypes.ALL_FIELDS = new v4_1.AllFields('*', AccrualTypes);
    /**
     * All key fields of the AccrualTypes entity.
     */
    AccrualTypes._keyFields = [AccrualTypes.CODE];
    /**
     * Mapping of all key field names to the respective static field property AccrualTypes.
     */
    AccrualTypes._keys = AccrualTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AccrualTypes = exports.AccrualTypes || (exports.AccrualTypes = {}));
exports.AccrualTypes = AccrualTypes;
//# sourceMappingURL=AccrualTypes.js.map