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
exports.TaxCodeDeterminationsTcd = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxCodeDeterminationsTcdRequestBuilder_1 = require("./TaxCodeDeterminationsTcdRequestBuilder");
var TaxCodeDeterminationTcdDefaultWt_1 = require("./TaxCodeDeterminationTcdDefaultWt");
var TaxCodeDeterminationTcdByUsage_1 = require("./TaxCodeDeterminationTcdByUsage");
var TaxCodeDeterminationTcdKeyField_1 = require("./TaxCodeDeterminationTcdKeyField");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TaxCodeDeterminationsTCD" of service "SAPB1".
 */
var TaxCodeDeterminationsTcd = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminationsTcd, _super);
    function TaxCodeDeterminationsTcd() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `TaxCodeDeterminationsTcd`.
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminationsTcd`.
     */
    TaxCodeDeterminationsTcd.builder = function () {
        return core_1.EntityV4.entityBuilder(TaxCodeDeterminationsTcd);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TaxCodeDeterminationsTcd` entity type.
     * @returns A `TaxCodeDeterminationsTcd` request builder.
     */
    TaxCodeDeterminationsTcd.requestBuilder = function () {
        return new TaxCodeDeterminationsTcdRequestBuilder_1.TaxCodeDeterminationsTcdRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxCodeDeterminationsTcd`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminationsTcd`.
     */
    TaxCodeDeterminationsTcd.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, TaxCodeDeterminationsTcd);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TaxCodeDeterminationsTcd.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TaxCodeDeterminationsTcd.
     */
    TaxCodeDeterminationsTcd._entityName = 'TaxCodeDeterminationsTCD';
    /**
     * Default url path for the according service.
     */
    TaxCodeDeterminationsTcd._defaultServicePath = '/b1s/v2/';
    return TaxCodeDeterminationsTcd;
}(core_1.EntityV4));
exports.TaxCodeDeterminationsTcd = TaxCodeDeterminationsTcd;
(function (TaxCodeDeterminationsTcd) {
    /**
     * Static representation of the [[absId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.ABS_ID = new core_1.NumberField('AbsId', TaxCodeDeterminationsTcd, 'Edm.Int32');
    /**
     * Static representation of the [[tcdType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.TCD_TYPE = new core_1.EnumField('TcdType', TaxCodeDeterminationsTcd);
    /**
     * Static representation of the [[dftArCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.DFT_AR_CODE = new core_1.StringField('DftArCode', TaxCodeDeterminationsTcd, 'Edm.String');
    /**
     * Static representation of the [[dftApCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.DFT_AP_CODE = new core_1.StringField('DftApCode', TaxCodeDeterminationsTcd, 'Edm.String');
    /**
     * Static representation of the [[taxCodeDeterminationTcdDefaultWTs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS = new core_1.CollectionField('TaxCodeDeterminationTCDDefaultWTs', TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdDefaultWt_1.TaxCodeDeterminationTcdDefaultWt);
    /**
     * Static representation of the [[taxCodeDeterminationTcdByUsages]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_BY_USAGES = new core_1.CollectionField('TaxCodeDeterminationTCDByUsages', TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdByUsage_1.TaxCodeDeterminationTcdByUsage);
    /**
     * Static representation of the [[taxCodeDeterminationTcdKeyFields]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_KEY_FIELDS = new core_1.CollectionField('TaxCodeDeterminationTCDKeyFields', TaxCodeDeterminationsTcd, TaxCodeDeterminationTcdKeyField_1.TaxCodeDeterminationTcdKeyField);
    /**
     * All fields of the TaxCodeDeterminationsTcd entity.
     */
    TaxCodeDeterminationsTcd._allFields = [
        TaxCodeDeterminationsTcd.ABS_ID,
        TaxCodeDeterminationsTcd.TCD_TYPE,
        TaxCodeDeterminationsTcd.DFT_AR_CODE,
        TaxCodeDeterminationsTcd.DFT_AP_CODE,
        TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_DEFAULT_W_TS,
        TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_BY_USAGES,
        TaxCodeDeterminationsTcd.TAX_CODE_DETERMINATION_TCD_KEY_FIELDS
    ];
    /**
     * All fields selector.
     */
    TaxCodeDeterminationsTcd.ALL_FIELDS = new core_1.AllFields('*', TaxCodeDeterminationsTcd);
    /**
     * All key fields of the TaxCodeDeterminationsTcd entity.
     */
    TaxCodeDeterminationsTcd._keyFields = [TaxCodeDeterminationsTcd.ABS_ID];
    /**
     * Mapping of all key field names to the respective static field property TaxCodeDeterminationsTcd.
     */
    TaxCodeDeterminationsTcd._keys = TaxCodeDeterminationsTcd._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TaxCodeDeterminationsTcd = exports.TaxCodeDeterminationsTcd || (exports.TaxCodeDeterminationsTcd = {}));
exports.TaxCodeDeterminationsTcd = TaxCodeDeterminationsTcd;
//# sourceMappingURL=TaxCodeDeterminationsTcd.js.map