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
exports.InventoryPostings = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryPostingsRequestBuilder_1 = require("./InventoryPostingsRequestBuilder");
var InventoryPostingLine_1 = require("./InventoryPostingLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InventoryPostings" of service "SAPB1".
 */
var InventoryPostings = /** @class */ (function (_super) {
    __extends(InventoryPostings, _super);
    function InventoryPostings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `InventoryPostings`.
     * @returns A builder that constructs instances of entity type `InventoryPostings`.
     */
    InventoryPostings.builder = function () {
        return core_1.EntityV4.entityBuilder(InventoryPostings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryPostings` entity type.
     * @returns A `InventoryPostings` request builder.
     */
    InventoryPostings.requestBuilder = function () {
        return new InventoryPostingsRequestBuilder_1.InventoryPostingsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryPostings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryPostings`.
     */
    InventoryPostings.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, InventoryPostings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryPostings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryPostings.
     */
    InventoryPostings._entityName = 'InventoryPostings';
    /**
     * Default url path for the according service.
     */
    InventoryPostings._defaultServicePath = '/b1s/v2/';
    return InventoryPostings;
}(core_1.EntityV4));
exports.InventoryPostings = InventoryPostings;
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (InventoryPostings) {
    /**
     * Static representation of the [[documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.DOCUMENT_ENTRY = new core_1.NumberField('DocumentEntry', InventoryPostings, 'Edm.Int32');
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.DOCUMENT_NUMBER = new core_1.NumberField('DocumentNumber', InventoryPostings, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.SERIES = new core_1.NumberField('Series', InventoryPostings, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.POSTING_DATE = new core_1.DateField('PostingDate', InventoryPostings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[countDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.COUNT_DATE = new core_1.DateField('CountDate', InventoryPostings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[countTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.COUNT_TIME = new core_1.TimeField('CountTime', InventoryPostings, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.REMARKS = new core_1.StringField('Remarks', InventoryPostings, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.REFERENCE_2 = new core_1.StringField('Reference2', InventoryPostings, 'Edm.String');
    /**
     * Static representation of the [[branchId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.BRANCH_ID = new core_1.NumberField('BranchID', InventoryPostings, 'Edm.Int32');
    /**
     * Static representation of the [[priceSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.PRICE_SOURCE = new core_1.EnumField('PriceSource', InventoryPostings);
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.PRICE_LIST = new core_1.NumberField('PriceList', InventoryPostings, 'Edm.Int32');
    /**
     * Static representation of the [[journalRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.JOURNAL_REMARK = new core_1.StringField('JournalRemark', InventoryPostings, 'Edm.String');
    /**
     * Static representation of the [[docObjectCodeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.DOC_OBJECT_CODE_EX = new core_1.StringField('DocObjectCodeEx', InventoryPostings, 'Edm.String');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', InventoryPostings, 'Edm.Int32');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', InventoryPostings, 'Edm.String');
    /**
     * Static representation of the [[inventoryPostingLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.INVENTORY_POSTING_LINES = new core_1.CollectionField('InventoryPostingLines', InventoryPostings, InventoryPostingLine_1.InventoryPostingLine);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryPostings.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', InventoryPostings, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the InventoryPostings entity.
     */
    InventoryPostings._allFields = [
        InventoryPostings.DOCUMENT_ENTRY,
        InventoryPostings.DOCUMENT_NUMBER,
        InventoryPostings.SERIES,
        InventoryPostings.POSTING_DATE,
        InventoryPostings.COUNT_DATE,
        InventoryPostings.COUNT_TIME,
        InventoryPostings.REMARKS,
        InventoryPostings.REFERENCE_2,
        InventoryPostings.BRANCH_ID,
        InventoryPostings.PRICE_SOURCE,
        InventoryPostings.PRICE_LIST,
        InventoryPostings.JOURNAL_REMARK,
        InventoryPostings.DOC_OBJECT_CODE_EX,
        InventoryPostings.FINANCIAL_PERIOD,
        InventoryPostings.PERIOD_INDICATOR,
        InventoryPostings.INVENTORY_POSTING_LINES,
        InventoryPostings.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    InventoryPostings.ALL_FIELDS = new core_1.AllFields('*', InventoryPostings);
    /**
     * All key fields of the InventoryPostings entity.
     */
    InventoryPostings._keyFields = [InventoryPostings.DOCUMENT_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property InventoryPostings.
     */
    InventoryPostings._keys = InventoryPostings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryPostings = exports.InventoryPostings || (exports.InventoryPostings = {}));
exports.InventoryPostings = InventoryPostings;
//# sourceMappingURL=InventoryPostings.js.map