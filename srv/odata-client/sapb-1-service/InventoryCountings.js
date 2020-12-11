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
exports.InventoryCountings = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var InventoryCountingsRequestBuilder_1 = require("./InventoryCountingsRequestBuilder");
var TeamCounter_1 = require("./TeamCounter");
var IndividualCounter_1 = require("./IndividualCounter");
var InventoryCountingLine_1 = require("./InventoryCountingLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "InventoryCountings" of service "SAPB1".
 */
var InventoryCountings = /** @class */ (function (_super) {
    __extends(InventoryCountings, _super);
    function InventoryCountings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `InventoryCountings`.
     * @returns A builder that constructs instances of entity type `InventoryCountings`.
     */
    InventoryCountings.builder = function () {
        return core_1.EntityV4.entityBuilder(InventoryCountings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `InventoryCountings` entity type.
     * @returns A `InventoryCountings` request builder.
     */
    InventoryCountings.requestBuilder = function () {
        return new InventoryCountingsRequestBuilder_1.InventoryCountingsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `InventoryCountings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `InventoryCountings`.
     */
    InventoryCountings.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, InventoryCountings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    InventoryCountings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for InventoryCountings.
     */
    InventoryCountings._entityName = 'InventoryCountings';
    /**
     * Default url path for the according service.
     */
    InventoryCountings._defaultServicePath = '/b1s/v2/';
    return InventoryCountings;
}(core_1.EntityV4));
exports.InventoryCountings = InventoryCountings;
var BusinessPlaces_1 = require("./BusinessPlaces");
(function (InventoryCountings) {
    /**
     * Static representation of the [[documentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.DOCUMENT_ENTRY = new core_1.NumberField('DocumentEntry', InventoryCountings, 'Edm.Int32');
    /**
     * Static representation of the [[documentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.DOCUMENT_NUMBER = new core_1.NumberField('DocumentNumber', InventoryCountings, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.SERIES = new core_1.NumberField('Series', InventoryCountings, 'Edm.Int32');
    /**
     * Static representation of the [[countDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.COUNT_DATE = new core_1.DateField('CountDate', InventoryCountings, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[countTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.COUNT_TIME = new core_1.TimeField('CountTime', InventoryCountings, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[singleCounterType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.SINGLE_COUNTER_TYPE = new core_1.EnumField('SingleCounterType', InventoryCountings);
    /**
     * Static representation of the [[singleCounterId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.SINGLE_COUNTER_ID = new core_1.NumberField('SingleCounterID', InventoryCountings, 'Edm.Int32');
    /**
     * Static representation of the [[documentStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.DOCUMENT_STATUS = new core_1.EnumField('DocumentStatus', InventoryCountings);
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.REMARKS = new core_1.StringField('Remarks', InventoryCountings, 'Edm.String');
    /**
     * Static representation of the [[reference2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.REFERENCE_2 = new core_1.StringField('Reference2', InventoryCountings, 'Edm.String');
    /**
     * Static representation of the [[branchId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.BRANCH_ID = new core_1.NumberField('BranchID', InventoryCountings, 'Edm.Int32');
    /**
     * Static representation of the [[docObjectCodeEx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.DOC_OBJECT_CODE_EX = new core_1.StringField('DocObjectCodeEx', InventoryCountings, 'Edm.String');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', InventoryCountings, 'Edm.Int32');
    /**
     * Static representation of the [[periodIndicator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.PERIOD_INDICATOR = new core_1.StringField('PeriodIndicator', InventoryCountings, 'Edm.String');
    /**
     * Static representation of the [[countingType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.COUNTING_TYPE = new core_1.EnumField('CountingType', InventoryCountings);
    /**
     * Static representation of the [[teamCounters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.TEAM_COUNTERS = new core_1.CollectionField('TeamCounters', InventoryCountings, TeamCounter_1.TeamCounter);
    /**
     * Static representation of the [[individualCounters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.INDIVIDUAL_COUNTERS = new core_1.CollectionField('IndividualCounters', InventoryCountings, IndividualCounter_1.IndividualCounter);
    /**
     * Static representation of the [[inventoryCountingLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.INVENTORY_COUNTING_LINES = new core_1.CollectionField('InventoryCountingLines', InventoryCountings, InventoryCountingLine_1.InventoryCountingLine);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    InventoryCountings.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', InventoryCountings, BusinessPlaces_1.BusinessPlaces);
    /**
     * All fields of the InventoryCountings entity.
     */
    InventoryCountings._allFields = [
        InventoryCountings.DOCUMENT_ENTRY,
        InventoryCountings.DOCUMENT_NUMBER,
        InventoryCountings.SERIES,
        InventoryCountings.COUNT_DATE,
        InventoryCountings.COUNT_TIME,
        InventoryCountings.SINGLE_COUNTER_TYPE,
        InventoryCountings.SINGLE_COUNTER_ID,
        InventoryCountings.DOCUMENT_STATUS,
        InventoryCountings.REMARKS,
        InventoryCountings.REFERENCE_2,
        InventoryCountings.BRANCH_ID,
        InventoryCountings.DOC_OBJECT_CODE_EX,
        InventoryCountings.FINANCIAL_PERIOD,
        InventoryCountings.PERIOD_INDICATOR,
        InventoryCountings.COUNTING_TYPE,
        InventoryCountings.TEAM_COUNTERS,
        InventoryCountings.INDIVIDUAL_COUNTERS,
        InventoryCountings.INVENTORY_COUNTING_LINES,
        InventoryCountings.BUSINESS_PLACE
    ];
    /**
     * All fields selector.
     */
    InventoryCountings.ALL_FIELDS = new core_1.AllFields('*', InventoryCountings);
    /**
     * All key fields of the InventoryCountings entity.
     */
    InventoryCountings._keyFields = [InventoryCountings.DOCUMENT_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property InventoryCountings.
     */
    InventoryCountings._keys = InventoryCountings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(InventoryCountings = exports.InventoryCountings || (exports.InventoryCountings = {}));
exports.InventoryCountings = InventoryCountings;
//# sourceMappingURL=InventoryCountings.js.map