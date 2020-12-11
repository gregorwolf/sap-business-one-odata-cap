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
exports.InventoryOpeningBalances = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryOpeningBalancesRequestBuilder_1 = require("./InventoryOpeningBalancesRequestBuilder");
var InventoryOpeningBalanceLine_1 = require("./InventoryOpeningBalanceLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InventoryOpeningBalances" of service "SAPB1".
 */
var InventoryOpeningBalances = /** @class */ (function (_super) {
    __extends(InventoryOpeningBalances, _super);
    function InventoryOpeningBalances() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `InventoryOpeningBalances`.
     * @returns A builder that constructs instances of entity type `InventoryOpeningBalances`.
     */
    InventoryOpeningBalances.builder = function () {
        return core_1.EntityV4.entityBuilder(InventoryOpeningBalances);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryOpeningBalances` entity type.
     * @returns A `InventoryOpeningBalances` request builder.
     */
    InventoryOpeningBalances.requestBuilder = function () {
        return new InventoryOpeningBalancesRequestBuilder_1.InventoryOpeningBalancesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryOpeningBalances`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryOpeningBalances`.
     */
    InventoryOpeningBalances.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, InventoryOpeningBalances);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryOpeningBalances.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryOpeningBalances.
     */
    InventoryOpeningBalances._entityName = 'InventoryOpeningBalances';
    /**
     * Default url path for the according service.
     */
    InventoryOpeningBalances._defaultServicePath = '/b1s/v2/';
    return InventoryOpeningBalances;
}(core_1.EntityV4));
exports.InventoryOpeningBalances = InventoryOpeningBalances;
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (InventoryOpeningBalances) {
    /**
     * Static representation of the [[documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.DOCUMENT_ENTRY = new core_1.NumberField('DocumentEntry', InventoryOpeningBalances, 'Edm.Int32');
    /**
     * Static representation of the [[postingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.POSTING_DATE = new core_1.DateField('PostingDate', InventoryOpeningBalances, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.DOCUMENT_DATE = new core_1.DateField('DocumentDate', InventoryOpeningBalances, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.DOCUMENT_NUMBER = new core_1.NumberField('DocumentNumber', InventoryOpeningBalances, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.SERIES = new core_1.NumberField('Series', InventoryOpeningBalances, 'Edm.Int32');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.REFERENCE_2 = new core_1.StringField('Reference2', InventoryOpeningBalances, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.REMARKS = new core_1.StringField('Remarks', InventoryOpeningBalances, 'Edm.String');
    /**
     * Static representation of the [[branchId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.BRANCH_ID = new core_1.NumberField('BranchID', InventoryOpeningBalances, 'Edm.Int32');
    /**
     * Static representation of the [[priceSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.PRICE_SOURCE = new core_1.EnumField('PriceSource', InventoryOpeningBalances);
    /**
     * Static representation of the [[priceList]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.PRICE_LIST = new core_1.NumberField('PriceList', InventoryOpeningBalances, 'Edm.Int32');
    /**
     * Static representation of the [[journalRemark]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.JOURNAL_REMARK = new core_1.StringField('JournalRemark', InventoryOpeningBalances, 'Edm.String');
    /**
     * Static representation of the [[docObjectCodeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.DOC_OBJECT_CODE_EX = new core_1.StringField('DocObjectCodeEx', InventoryOpeningBalances, 'Edm.String');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', InventoryOpeningBalances, 'Edm.String');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', InventoryOpeningBalances, 'Edm.Int32');
    /**
     * Static representation of the [[inventoryOpeningBalanceLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.INVENTORY_OPENING_BALANCE_LINES = new core_1.CollectionField('InventoryOpeningBalanceLines', InventoryOpeningBalances, InventoryOpeningBalanceLine_1.InventoryOpeningBalanceLine);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryOpeningBalances.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', InventoryOpeningBalances, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the InventoryOpeningBalances entity.
     */
    InventoryOpeningBalances._allFields = [
        InventoryOpeningBalances.DOCUMENT_ENTRY,
        InventoryOpeningBalances.POSTING_DATE,
        InventoryOpeningBalances.DOCUMENT_DATE,
        InventoryOpeningBalances.DOCUMENT_NUMBER,
        InventoryOpeningBalances.SERIES,
        InventoryOpeningBalances.REFERENCE_2,
        InventoryOpeningBalances.REMARKS,
        InventoryOpeningBalances.BRANCH_ID,
        InventoryOpeningBalances.PRICE_SOURCE,
        InventoryOpeningBalances.PRICE_LIST,
        InventoryOpeningBalances.JOURNAL_REMARK,
        InventoryOpeningBalances.DOC_OBJECT_CODE_EX,
        InventoryOpeningBalances.PERIOD_INDICATOR,
        InventoryOpeningBalances.FINANCIAL_PERIOD,
        InventoryOpeningBalances.INVENTORY_OPENING_BALANCE_LINES,
        InventoryOpeningBalances.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    InventoryOpeningBalances.ALL_FIELDS = new core_1.AllFields('*', InventoryOpeningBalances);
    /**
     * All key fields of the InventoryOpeningBalances entity.
     */
    InventoryOpeningBalances._keyFields = [InventoryOpeningBalances.DOCUMENT_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property InventoryOpeningBalances.
     */
    InventoryOpeningBalances._keys = InventoryOpeningBalances._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryOpeningBalances = exports.InventoryOpeningBalances || (exports.InventoryOpeningBalances = {}));
exports.InventoryOpeningBalances = InventoryOpeningBalances;
//# sourceMappingURL=InventoryOpeningBalances.js.map