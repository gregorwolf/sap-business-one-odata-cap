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
exports.WorkOrders = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WorkOrdersRequestBuilder_1 = require("./WorkOrdersRequestBuilder");
var WorkOrderLine_1 = require("./WorkOrderLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WorkOrders" of service "SAPB1".
 */
var WorkOrders = /** @class */ (function (_super) {
    __extends(WorkOrders, _super);
    function WorkOrders() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `WorkOrders`.
     * @returns A builder that constructs instances of entity type `WorkOrders`.
     */
    WorkOrders.builder = function () {
        return core_1.EntityV4.entityBuilder(WorkOrders);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WorkOrders` entity type.
     * @returns A `WorkOrders` request builder.
     */
    WorkOrders.requestBuilder = function () {
        return new WorkOrdersRequestBuilder_1.WorkOrdersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkOrders`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkOrders`.
     */
    WorkOrders.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, WorkOrders);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WorkOrders.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WorkOrders.
     */
    WorkOrders._entityName = 'WorkOrders';
    /**
     * Default url path for the according service.
     */
    WorkOrders._defaultServicePath = '/b1s/v2/';
    return WorkOrders;
}(core_1.EntityV4));
exports.WorkOrders = WorkOrders;
var Users_1 = require("./Users");
var BusinessPartners_1 = require("./BusinessPartners");
var ChartOfAccounts_1 = require("./ChartOfAccounts");
var PriceLists_1 = require("./PriceLists");
(function (WorkOrders) {
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.STATUS = new core_1.EnumField('Status', WorkOrders);
    /**
     * Static representation of the [[canceled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.CANCELED = new core_1.EnumField('Canceled', WorkOrders);
    /**
     * Static representation of the [[orderDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.ORDER_DATE = new core_1.DateField('OrderDate', WorkOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[workStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.WORK_START_DATE = new core_1.DateField('WorkStartDate', WorkOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[expectedCompletionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.EXPECTED_COMPLETION_DATE = new core_1.DateField('ExpectedCompletionDate', WorkOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[workFinishDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.WORK_FINISH_DATE = new core_1.DateField('WorkFinishDate', WorkOrders, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[receiverName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.RECEIVER_NAME = new core_1.StringField('ReceiverName', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[ordererCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.ORDERER_CODE = new core_1.StringField('OrdererCode', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[ordererName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.ORDERER_NAME = new core_1.StringField('OrdererName', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[customerRefNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.CUSTOMER_REF_NO = new core_1.StringField('CustomerRefNo', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[orderTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.ORDER_TOTAL = new core_1.NumberField('OrderTotal', WorkOrders, 'Edm.Double');
    /**
     * Static representation of the [[totalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.TOTAL_CURRENCY = new core_1.StringField('TotalCurrency', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[generationTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.GENERATION_TIME = new core_1.NumberField('GenerationTime', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.COMMENT = new core_1.StringField('Comment', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[instructionNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.INSTRUCTION_NUMBER = new core_1.NumberField('InstructionNumber', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.CONTACT_PERSON = new core_1.NumberField('ContactPerson', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.SERIES = new core_1.NumberField('Series', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[activeAccountCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.ACTIVE_ACCOUNT_CODE = new core_1.StringField('ActiveAccountCode', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[workSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.WORK_SUM = new core_1.NumberField('WorkSum', WorkOrders, 'Edm.Double');
    /**
     * Static representation of the [[journalRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.JOURNAL_REMARKS = new core_1.StringField('JournalRemarks', WorkOrders, 'Edm.String');
    /**
     * Static representation of the [[priceListNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.PRICE_LIST_NUM = new core_1.NumberField('PriceListNum', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[financialPeriod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.FINANCIAL_PERIOD = new core_1.NumberField('FinancialPeriod', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[orderNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.ORDER_NUM = new core_1.NumberField('OrderNum', WorkOrders, 'Edm.Int32');
    /**
     * Static representation of the [[workOrderLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.WORK_ORDER_LINES = new core_1.CollectionField('WorkOrder_Lines', WorkOrders, WorkOrderLine_1.WorkOrderLine);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.USER = new core_1.OneToOneLink('User', WorkOrders, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', WorkOrders, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[chartOfAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.CHART_OF_ACCOUNT = new core_1.OneToOneLink('ChartOfAccount', WorkOrders, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * Static representation of the one-to-one navigation property [[priceList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WorkOrders.PRICE_LIST = new core_1.OneToOneLink('PriceList', WorkOrders, PriceLists_1.PriceLists);
    /**
     * All fields of the WorkOrders entity.
     */
    WorkOrders._allFields = [
        WorkOrders.STATUS,
        WorkOrders.CANCELED,
        WorkOrders.ORDER_DATE,
        WorkOrders.WORK_START_DATE,
        WorkOrders.EXPECTED_COMPLETION_DATE,
        WorkOrders.WORK_FINISH_DATE,
        WorkOrders.RECEIVER_NAME,
        WorkOrders.ORDERER_CODE,
        WorkOrders.ORDERER_NAME,
        WorkOrders.CUSTOMER_REF_NO,
        WorkOrders.ORDER_TOTAL,
        WorkOrders.TOTAL_CURRENCY,
        WorkOrders.GENERATION_TIME,
        WorkOrders.COMMENT,
        WorkOrders.INSTRUCTION_NUMBER,
        WorkOrders.CONTACT_PERSON,
        WorkOrders.SERIES,
        WorkOrders.ACTIVE_ACCOUNT_CODE,
        WorkOrders.WORK_SUM,
        WorkOrders.JOURNAL_REMARKS,
        WorkOrders.PRICE_LIST_NUM,
        WorkOrders.FINANCIAL_PERIOD,
        WorkOrders.ORDER_NUM,
        WorkOrders.WORK_ORDER_LINES,
        WorkOrders.USER,
        WorkOrders.BUSINESS_PARTNER,
        WorkOrders.CHART_OF_ACCOUNT,
        WorkOrders.PRICE_LIST
    ];
    /**
     * All fields selector.
     */
    WorkOrders.ALL_FIELDS = new core_1.AllFields('*', WorkOrders);
    /**
     * All key fields of the WorkOrders entity.
     */
    WorkOrders._keyFields = [WorkOrders.ORDER_NUM];
    /**
     * Mapping of all key field names to the respective static field property WorkOrders.
     */
    WorkOrders._keys = WorkOrders._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WorkOrders = exports.WorkOrders || (exports.WorkOrders = {}));
exports.WorkOrders = WorkOrders;
//# sourceMappingURL=WorkOrders.js.map