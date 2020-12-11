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
exports.MaterialRevaluation = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var MaterialRevaluationRequestBuilder_1 = require("./MaterialRevaluationRequestBuilder");
var MaterialRevaluationLine_1 = require("./MaterialRevaluationLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MaterialRevaluation" of service "SAPB1".
 */
var MaterialRevaluation = /** @class */ (function (_super) {
    __extends(MaterialRevaluation, _super);
    function MaterialRevaluation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `MaterialRevaluation`.
     * @returns A builder that constructs instances of entity type `MaterialRevaluation`.
     */
    MaterialRevaluation.builder = function () {
        return core_1.EntityV4.entityBuilder(MaterialRevaluation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MaterialRevaluation` entity type.
     * @returns A `MaterialRevaluation` request builder.
     */
    MaterialRevaluation.requestBuilder = function () {
        return new MaterialRevaluationRequestBuilder_1.MaterialRevaluationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MaterialRevaluation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MaterialRevaluation`.
     */
    MaterialRevaluation.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, MaterialRevaluation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MaterialRevaluation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MaterialRevaluation.
     */
    MaterialRevaluation._entityName = 'MaterialRevaluation';
    /**
     * Default url path for the according service.
     */
    MaterialRevaluation._defaultServicePath = '/b1s/v2/';
    return MaterialRevaluation;
}(core_1.EntityV4));
exports.MaterialRevaluation = MaterialRevaluation;
var JournalEntries_1 = require("./JournalEntries");
var Users_1 = require("./Users");
var BusinessPartners_1 = require("./BusinessPartners");
(function (MaterialRevaluation) {
    /**
     * Static representation of the [[docNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.DOC_NUM = new core_1.NumberField('DocNum', MaterialRevaluation, 'Edm.Int32');
    /**
     * Static representation of the [[docDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.DOC_DATE = new core_1.DateField('DocDate', MaterialRevaluation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[reference1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.REFERENCE_1 = new core_1.StringField('Reference1', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.REFERENCE_2 = new core_1.StringField('Reference2', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.COMMENTS = new core_1.StringField('Comments', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[journalMemo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.JOURNAL_MEMO = new core_1.StringField('JournalMemo', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[docTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.DOC_TIME = new core_1.TimeField('DocTime', MaterialRevaluation, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.SERIES = new core_1.NumberField('Series', MaterialRevaluation, 'Edm.Int32');
    /**
     * Static representation of the [[taxDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.TAX_DATE = new core_1.DateField('TaxDate', MaterialRevaluation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[docEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.DOC_ENTRY = new core_1.NumberField('DocEntry', MaterialRevaluation, 'Edm.Int32');
    /**
     * Static representation of the [[creationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.CREATION_DATE = new core_1.DateField('CreationDate', MaterialRevaluation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.UPDATE_DATE = new core_1.DateField('UpdateDate', MaterialRevaluation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[transNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.TRANS_NUM = new core_1.NumberField('TransNum', MaterialRevaluation, 'Edm.Int32');
    /**
     * Static representation of the [[revalType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.REVAL_TYPE = new core_1.StringField('RevalType', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[revaluationIncomeAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.REVALUATION_INCOME_ACCOUNT = new core_1.StringField('RevaluationIncomeAccount', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[revaluationExpenseAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.REVALUATION_EXPENSE_ACCOUNT = new core_1.StringField('RevaluationExpenseAccount', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[dataSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.DATA_SOURCE = new core_1.StringField('DataSource', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.USER_SIGNATURE = new core_1.NumberField('UserSignature', MaterialRevaluation, 'Edm.Int32');
    /**
     * Static representation of the [[inflationRevaluation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.INFLATION_REVALUATION = new core_1.EnumField('InflationRevaluation', MaterialRevaluation);
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.CARD_CODE = new core_1.StringField('CardCode', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[cardName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.CARD_NAME = new core_1.StringField('CardName', MaterialRevaluation, 'Edm.String');
    /**
     * Static representation of the [[materialRevaluationLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.MATERIAL_REVALUATION_LINES = new core_1.CollectionField('MaterialRevaluationLines', MaterialRevaluation, MaterialRevaluationLine_1.MaterialRevaluationLine);
    /**
     * Static representation of the one-to-one navigation property [[journalEntry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.JOURNAL_ENTRY = new core_1.OneToOneLink('JournalEntry', MaterialRevaluation, JournalEntries_1.JournalEntries);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.USER = new core_1.OneToOneLink('User', MaterialRevaluation, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MaterialRevaluation.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', MaterialRevaluation, BusinessPartners_1.BusinessPartners);
    /**
     * All fields of the MaterialRevaluation entity.
     */
    MaterialRevaluation._allFields = [
        MaterialRevaluation.DOC_NUM,
        MaterialRevaluation.DOC_DATE,
        MaterialRevaluation.REFERENCE_1,
        MaterialRevaluation.REFERENCE_2,
        MaterialRevaluation.COMMENTS,
        MaterialRevaluation.JOURNAL_MEMO,
        MaterialRevaluation.DOC_TIME,
        MaterialRevaluation.SERIES,
        MaterialRevaluation.TAX_DATE,
        MaterialRevaluation.DOC_ENTRY,
        MaterialRevaluation.CREATION_DATE,
        MaterialRevaluation.UPDATE_DATE,
        MaterialRevaluation.TRANS_NUM,
        MaterialRevaluation.REVAL_TYPE,
        MaterialRevaluation.REVALUATION_INCOME_ACCOUNT,
        MaterialRevaluation.REVALUATION_EXPENSE_ACCOUNT,
        MaterialRevaluation.DATA_SOURCE,
        MaterialRevaluation.USER_SIGNATURE,
        MaterialRevaluation.INFLATION_REVALUATION,
        MaterialRevaluation.CARD_CODE,
        MaterialRevaluation.CARD_NAME,
        MaterialRevaluation.MATERIAL_REVALUATION_LINES,
        MaterialRevaluation.JOURNAL_ENTRY,
        MaterialRevaluation.USER,
        MaterialRevaluation.BUSINESS_PARTNER
    ];
    /**
     * All fields selector.
     */
    MaterialRevaluation.ALL_FIELDS = new core_1.AllFields('*', MaterialRevaluation);
    /**
     * All key fields of the MaterialRevaluation entity.
     */
    MaterialRevaluation._keyFields = [MaterialRevaluation.DOC_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property MaterialRevaluation.
     */
    MaterialRevaluation._keys = MaterialRevaluation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MaterialRevaluation = exports.MaterialRevaluation || (exports.MaterialRevaluation = {}));
exports.MaterialRevaluation = MaterialRevaluation;
//# sourceMappingURL=MaterialRevaluation.js.map