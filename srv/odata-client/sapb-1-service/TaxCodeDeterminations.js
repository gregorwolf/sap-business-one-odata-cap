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
exports.TaxCodeDeterminations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var TaxCodeDeterminationsRequestBuilder_1 = require("./TaxCodeDeterminationsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TaxCodeDeterminations" of service "SAPB1".
 */
var TaxCodeDeterminations = /** @class */ (function (_super) {
    __extends(TaxCodeDeterminations, _super);
    function TaxCodeDeterminations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `TaxCodeDeterminations`.
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminations`.
     */
    TaxCodeDeterminations.builder = function () {
        return core_1.EntityV4.entityBuilder(TaxCodeDeterminations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TaxCodeDeterminations` entity type.
     * @returns A `TaxCodeDeterminations` request builder.
     */
    TaxCodeDeterminations.requestBuilder = function () {
        return new TaxCodeDeterminationsRequestBuilder_1.TaxCodeDeterminationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TaxCodeDeterminations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TaxCodeDeterminations`.
     */
    TaxCodeDeterminations.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, TaxCodeDeterminations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TaxCodeDeterminations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TaxCodeDeterminations.
     */
    TaxCodeDeterminations._entityName = 'TaxCodeDeterminations';
    /**
     * Default url path for the according service.
     */
    TaxCodeDeterminations._defaultServicePath = '/b1s/v2/';
    return TaxCodeDeterminations;
}(core_1.EntityV4));
exports.TaxCodeDeterminations = TaxCodeDeterminations;
(function (TaxCodeDeterminations) {
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.DOC_ENTRY = new core_1.NumberField('DocEntry', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[lineNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.LINE_NUMBER = new core_1.NumberField('LineNumber', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[documentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.DOCUMENT_TYPE = new core_1.EnumField('DocumentType', TaxCodeDeterminations);
    /**
     * Static representation of the [[businessArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.BUSINESS_AREA = new core_1.EnumField('BusinessArea', TaxCodeDeterminations);
    /**
     * Static representation of the [[condition1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.CONDITION_1 = new core_1.EnumField('Condition1', TaxCodeDeterminations);
    /**
     * Static representation of the [[udfTable1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_TABLE_1 = new core_1.StringField('UDFTable1', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[numberValue1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.NUMBER_VALUE_1 = new core_1.NumberField('NumberValue1', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[stringValue1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.STRING_VALUE_1 = new core_1.StringField('StringValue1', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[moneyValue1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.MONEY_VALUE_1 = new core_1.NumberField('MoneyValue1', TaxCodeDeterminations, 'Edm.Double');
    /**
     * Static representation of the [[condition2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.CONDITION_2 = new core_1.EnumField('Condition2', TaxCodeDeterminations);
    /**
     * Static representation of the [[udfTable2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_TABLE_2 = new core_1.StringField('UDFTable2', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[numberValue2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.NUMBER_VALUE_2 = new core_1.NumberField('NumberValue2', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[stringValue2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.STRING_VALUE_2 = new core_1.StringField('StringValue2', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[moneyValue2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.MONEY_VALUE_2 = new core_1.NumberField('MoneyValue2', TaxCodeDeterminations, 'Edm.Double');
    /**
     * Static representation of the [[condition3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.CONDITION_3 = new core_1.EnumField('Condition3', TaxCodeDeterminations);
    /**
     * Static representation of the [[udfTable3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_TABLE_3 = new core_1.StringField('UDFTable3', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[numberValue3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.NUMBER_VALUE_3 = new core_1.NumberField('NumberValue3', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[stringValue3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.STRING_VALUE_3 = new core_1.StringField('StringValue3', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[moneyValue3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.MONEY_VALUE_3 = new core_1.NumberField('MoneyValue3', TaxCodeDeterminations, 'Edm.Double');
    /**
     * Static representation of the [[condition4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.CONDITION_4 = new core_1.EnumField('Condition4', TaxCodeDeterminations);
    /**
     * Static representation of the [[udfTable4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_TABLE_4 = new core_1.StringField('UDFTable4', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[numberValue4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.NUMBER_VALUE_4 = new core_1.NumberField('NumberValue4', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[stringValue4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.STRING_VALUE_4 = new core_1.StringField('StringValue4', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[moneyValue4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.MONEY_VALUE_4 = new core_1.NumberField('MoneyValue4', TaxCodeDeterminations, 'Edm.Double');
    /**
     * Static representation of the [[condition5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.CONDITION_5 = new core_1.EnumField('Condition5', TaxCodeDeterminations);
    /**
     * Static representation of the [[udfTable5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_TABLE_5 = new core_1.StringField('UDFTable5', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[numberValue5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.NUMBER_VALUE_5 = new core_1.NumberField('NumberValue5', TaxCodeDeterminations, 'Edm.Int32');
    /**
     * Static representation of the [[stringValue5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.STRING_VALUE_5 = new core_1.StringField('StringValue5', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[moneyValue5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.MONEY_VALUE_5 = new core_1.NumberField('MoneyValue5', TaxCodeDeterminations, 'Edm.Double');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.DESCRIPTION = new core_1.StringField('Description', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[taxCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.TAX_CODE = new core_1.StringField('TaxCode', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[freightRowTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.FREIGHT_ROW_TAX = new core_1.StringField('FreightRowTax', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[freightHeaderTax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.FREIGHT_HEADER_TAX = new core_1.StringField('FreightHeaderTax', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[udfAlias1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_ALIAS_1 = new core_1.StringField('UDFAlias1', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[udfAlias2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_ALIAS_2 = new core_1.StringField('UDFAlias2', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[udfAlias3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_ALIAS_3 = new core_1.StringField('UDFAlias3', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[udfAlias4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_ALIAS_4 = new core_1.StringField('UDFAlias4', TaxCodeDeterminations, 'Edm.String');
    /**
     * Static representation of the [[udfAlias5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TaxCodeDeterminations.UDF_ALIAS_5 = new core_1.StringField('UDFAlias5', TaxCodeDeterminations, 'Edm.String');
    /**
     * All fields of the TaxCodeDeterminations entity.
     */
    TaxCodeDeterminations._allFields = [
        TaxCodeDeterminations.DOC_ENTRY,
        TaxCodeDeterminations.LINE_NUMBER,
        TaxCodeDeterminations.DOCUMENT_TYPE,
        TaxCodeDeterminations.BUSINESS_AREA,
        TaxCodeDeterminations.CONDITION_1,
        TaxCodeDeterminations.UDF_TABLE_1,
        TaxCodeDeterminations.NUMBER_VALUE_1,
        TaxCodeDeterminations.STRING_VALUE_1,
        TaxCodeDeterminations.MONEY_VALUE_1,
        TaxCodeDeterminations.CONDITION_2,
        TaxCodeDeterminations.UDF_TABLE_2,
        TaxCodeDeterminations.NUMBER_VALUE_2,
        TaxCodeDeterminations.STRING_VALUE_2,
        TaxCodeDeterminations.MONEY_VALUE_2,
        TaxCodeDeterminations.CONDITION_3,
        TaxCodeDeterminations.UDF_TABLE_3,
        TaxCodeDeterminations.NUMBER_VALUE_3,
        TaxCodeDeterminations.STRING_VALUE_3,
        TaxCodeDeterminations.MONEY_VALUE_3,
        TaxCodeDeterminations.CONDITION_4,
        TaxCodeDeterminations.UDF_TABLE_4,
        TaxCodeDeterminations.NUMBER_VALUE_4,
        TaxCodeDeterminations.STRING_VALUE_4,
        TaxCodeDeterminations.MONEY_VALUE_4,
        TaxCodeDeterminations.CONDITION_5,
        TaxCodeDeterminations.UDF_TABLE_5,
        TaxCodeDeterminations.NUMBER_VALUE_5,
        TaxCodeDeterminations.STRING_VALUE_5,
        TaxCodeDeterminations.MONEY_VALUE_5,
        TaxCodeDeterminations.DESCRIPTION,
        TaxCodeDeterminations.TAX_CODE,
        TaxCodeDeterminations.FREIGHT_ROW_TAX,
        TaxCodeDeterminations.FREIGHT_HEADER_TAX,
        TaxCodeDeterminations.UDF_ALIAS_1,
        TaxCodeDeterminations.UDF_ALIAS_2,
        TaxCodeDeterminations.UDF_ALIAS_3,
        TaxCodeDeterminations.UDF_ALIAS_4,
        TaxCodeDeterminations.UDF_ALIAS_5
    ];
    /**
     * All fields selector.
     */
    TaxCodeDeterminations.ALL_FIELDS = new core_1.AllFields('*', TaxCodeDeterminations);
    /**
     * All key fields of the TaxCodeDeterminations entity.
     */
    TaxCodeDeterminations._keyFields = [TaxCodeDeterminations.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property TaxCodeDeterminations.
     */
    TaxCodeDeterminations._keys = TaxCodeDeterminations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TaxCodeDeterminations = exports.TaxCodeDeterminations || (exports.TaxCodeDeterminations = {}));
exports.TaxCodeDeterminations = TaxCodeDeterminations;
//# sourceMappingURL=TaxCodeDeterminations.js.map