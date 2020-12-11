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
exports.FinancialYears = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FinancialYearsRequestBuilder_1 = require("./FinancialYearsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "FinancialYears" of service "SAPB1".
 */
var FinancialYears = /** @class */ (function (_super) {
    __extends(FinancialYears, _super);
    function FinancialYears() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `FinancialYears`.
     * @returns A builder that constructs instances of entity type `FinancialYears`.
     */
    FinancialYears.builder = function () {
        return core_1.EntityV4.entityBuilder(FinancialYears);
    };
    /**
     * Returns a request builder to construct requests for operations on the `FinancialYears` entity type.
     * @returns A `FinancialYears` request builder.
     */
    FinancialYears.requestBuilder = function () {
        return new FinancialYearsRequestBuilder_1.FinancialYearsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FinancialYears`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FinancialYears`.
     */
    FinancialYears.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, FinancialYears);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    FinancialYears.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for FinancialYears.
     */
    FinancialYears._entityName = 'FinancialYears';
    /**
     * Default url path for the according service.
     */
    FinancialYears._defaultServicePath = '/b1s/v2/';
    return FinancialYears;
}(core_1.EntityV4));
exports.FinancialYears = FinancialYears;
(function (FinancialYears) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FinancialYears.ABS_ENTRY = new core_1.NumberField('AbsEntry', FinancialYears, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FinancialYears.CODE = new core_1.StringField('Code', FinancialYears, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FinancialYears.DESCRIPTION = new core_1.StringField('Description', FinancialYears, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FinancialYears.START_DATE = new core_1.DateField('StartDate', FinancialYears, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FinancialYears.END_DATE = new core_1.DateField('EndDate', FinancialYears, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[assessYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FinancialYears.ASSESS_YEAR = new core_1.StringField('AssessYear', FinancialYears, 'Edm.String');
    /**
     * All fields of the FinancialYears entity.
     */
    FinancialYears._allFields = [
        FinancialYears.ABS_ENTRY,
        FinancialYears.CODE,
        FinancialYears.DESCRIPTION,
        FinancialYears.START_DATE,
        FinancialYears.END_DATE,
        FinancialYears.ASSESS_YEAR
    ];
    /**
     * All fields selector.
     */
    FinancialYears.ALL_FIELDS = new core_1.AllFields('*', FinancialYears);
    /**
     * All key fields of the FinancialYears entity.
     */
    FinancialYears._keyFields = [FinancialYears.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property FinancialYears.
     */
    FinancialYears._keys = FinancialYears._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(FinancialYears = exports.FinancialYears || (exports.FinancialYears = {}));
exports.FinancialYears = FinancialYears;
//# sourceMappingURL=FinancialYears.js.map