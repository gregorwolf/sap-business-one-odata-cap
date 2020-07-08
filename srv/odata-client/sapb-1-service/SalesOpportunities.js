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
exports.SalesOpportunities = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesOpportunitiesRequestBuilder_1 = require("./SalesOpportunitiesRequestBuilder");
var SalesOpportunitiesLine_1 = require("./SalesOpportunitiesLine");
var SalesOpportunitiesCompetitionItem_1 = require("./SalesOpportunitiesCompetitionItem");
var SalesOpportunitiesPartner_1 = require("./SalesOpportunitiesPartner");
var SalesOpportunitiesInterest_1 = require("./SalesOpportunitiesInterest");
var SalesOpportunitiesReason_1 = require("./SalesOpportunitiesReason");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesOpportunities" of service "SAPB1".
 */
var SalesOpportunities = /** @class */ (function (_super) {
    __extends(SalesOpportunities, _super);
    function SalesOpportunities() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesOpportunities`.
     * @returns A builder that constructs instances of entity type `SalesOpportunities`.
     */
    SalesOpportunities.builder = function () {
        return v4_1.Entity.entityBuilder(SalesOpportunities);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesOpportunities` entity type.
     * @returns A `SalesOpportunities` request builder.
     */
    SalesOpportunities.requestBuilder = function () {
        return new SalesOpportunitiesRequestBuilder_1.SalesOpportunitiesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesOpportunities`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesOpportunities`.
     */
    SalesOpportunities.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesOpportunities);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesOpportunities.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesOpportunities.
     */
    SalesOpportunities._entityName = 'SalesOpportunities';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesOpportunities.
     */
    SalesOpportunities._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesOpportunities._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesOpportunities;
}(v4_1.Entity));
exports.SalesOpportunities = SalesOpportunities;
var BusinessPartners_1 = require("./BusinessPartners");
var SalesPersons_1 = require("./SalesPersons");
var SalesOpportunitySourcesSetup_1 = require("./SalesOpportunitySourcesSetup");
var SalesOpportunityInterestsSetup_1 = require("./SalesOpportunityInterestsSetup");
var SalesOpportunityReasonsSetup_1 = require("./SalesOpportunityReasonsSetup");
var SalesStages_1 = require("./SalesStages");
var Industries_1 = require("./Industries");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Projects_1 = require("./Projects");
var Users_1 = require("./Users");
var Territories_1 = require("./Territories");
(function (SalesOpportunities) {
    /**
     * Static representation of the [[sequentialNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SEQUENTIAL_NO = new v4_1.NumberField('SequentialNo', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[cardCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CARD_CODE = new v4_1.StringField('CardCode', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[salesPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_PERSON = new v4_1.NumberField('SalesPerson', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[contactPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CONTACT_PERSON = new v4_1.NumberField('ContactPerson', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SOURCE = new v4_1.NumberField('Source', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[interestField1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.INTEREST_FIELD_1 = new v4_1.NumberField('InterestField1', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[interestField2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.INTEREST_FIELD_2 = new v4_1.NumberField('InterestField2', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[interestField3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.INTEREST_FIELD_3 = new v4_1.NumberField('InterestField3', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[interestLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.INTEREST_LEVEL = new v4_1.NumberField('InterestLevel', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.START_DATE = new v4_1.DateField('StartDate', SalesOpportunities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[predictedClosingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.PREDICTED_CLOSING_DATE = new v4_1.DateField('PredictedClosingDate', SalesOpportunities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[maxLocalTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.MAX_LOCAL_TOTAL = new v4_1.NumberField('MaxLocalTotal', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[maxSystemTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.MAX_SYSTEM_TOTAL = new v4_1.NumberField('MaxSystemTotal', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[weightedSumLc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.WEIGHTED_SUM_LC = new v4_1.NumberField('WeightedSumLC', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[weightedSumSc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.WEIGHTED_SUM_SC = new v4_1.NumberField('WeightedSumSC', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[grossProfit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.GROSS_PROFIT = new v4_1.NumberField('GrossProfit', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[grossProfitTotalLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.GROSS_PROFIT_TOTAL_LOCAL = new v4_1.NumberField('GrossProfitTotalLocal', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[grossProfitTotalSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.GROSS_PROFIT_TOTAL_SYSTEM = new v4_1.NumberField('GrossProfitTotalSystem', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.REMARKS = new v4_1.StringField('Remarks', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[reasonForClosing]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.REASON_FOR_CLOSING = new v4_1.NumberField('ReasonForClosing', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[totalAmountLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.TOTAL_AMOUNT_LOCAL = new v4_1.NumberField('TotalAmountLocal', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[totalAmounSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.TOTAL_AMOUN_SYSTEM = new v4_1.NumberField('TotalAmounSystem', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[closingGrossProfitLocal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CLOSING_GROSS_PROFIT_LOCAL = new v4_1.NumberField('ClosingGrossProfitLocal', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[closingGrossProfitSystem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CLOSING_GROSS_PROFIT_SYSTEM = new v4_1.NumberField('ClosingGrossProfitSystem', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[closingPercentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CLOSING_PERCENTAGE = new v4_1.NumberField('ClosingPercentage', SalesOpportunities, 'Edm.Double');
    /**
     * Static representation of the [[currentStageNo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CURRENT_STAGE_NO = new v4_1.NumberField('CurrentStageNo', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[currentStageNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CURRENT_STAGE_NUMBER = new v4_1.NumberField('CurrentStageNumber', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[opportunityName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.OPPORTUNITY_NAME = new v4_1.StringField('OpportunityName', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[industry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.INDUSTRY = new v4_1.NumberField('Industry', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[linkedDocumentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.LINKED_DOCUMENT_TYPE = new v4_1.StringField('LinkedDocumentType', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[dataOwnershipfield]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.DATA_OWNERSHIPFIELD = new v4_1.NumberField('DataOwnershipfield', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[statusRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.STATUS_REMARKS = new v4_1.StringField('StatusRemarks', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[projectCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.PROJECT_CODE = new v4_1.StringField('ProjectCode', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[bpChanelName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.BP_CHANEL_NAME = new v4_1.StringField('BPChanelName', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[userSignature]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.USER_SIGNATURE = new v4_1.NumberField('UserSignature', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[customerName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CUSTOMER_NAME = new v4_1.StringField('CustomerName', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[documentCheckbox]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.DOCUMENT_CHECKBOX = new v4_1.StringField('DocumentCheckbox', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[linkedDocumentNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.LINKED_DOCUMENT_NUMBER = new v4_1.NumberField('LinkedDocumentNumber', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[territory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.TERRITORY = new v4_1.NumberField('Territory', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[closingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.CLOSING_DATE = new v4_1.DateField('ClosingDate', SalesOpportunities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[bpChannelContact]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.BP_CHANNEL_CONTACT = new v4_1.NumberField('BPChannelContact', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[bpChanelCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.BP_CHANEL_CODE = new v4_1.StringField('BPChanelCode', SalesOpportunities, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', SalesOpportunities, 'Edm.Int32');
    /**
     * Static representation of the [[updateDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.UPDATE_DATE = new v4_1.DateField('UpdateDate', SalesOpportunities, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[updateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.UPDATE_TIME = new v4_1.TimeField('UpdateTime', SalesOpportunities, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[salesOpportunitiesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITIES_LINES = new v4_1.CollectionField('SalesOpportunitiesLines', SalesOpportunities, new SalesOpportunitiesLine_1.SalesOpportunitiesLineField('', SalesOpportunities));
    /**
     * Static representation of the [[salesOpportunitiesCompetition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITIES_COMPETITION = new v4_1.CollectionField('SalesOpportunitiesCompetition', SalesOpportunities, new SalesOpportunitiesCompetitionItem_1.SalesOpportunitiesCompetitionItemField('', SalesOpportunities));
    /**
     * Static representation of the [[salesOpportunitiesPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITIES_PARTNERS = new v4_1.CollectionField('SalesOpportunitiesPartners', SalesOpportunities, new SalesOpportunitiesPartner_1.SalesOpportunitiesPartnerField('', SalesOpportunities));
    /**
     * Static representation of the [[salesOpportunitiesInterests]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITIES_INTERESTS = new v4_1.CollectionField('SalesOpportunitiesInterests', SalesOpportunities, new SalesOpportunitiesInterest_1.SalesOpportunitiesInterestField('', SalesOpportunities));
    /**
     * Static representation of the [[salesOpportunitiesReasons]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITIES_REASONS = new v4_1.CollectionField('SalesOpportunitiesReasons', SalesOpportunities, new SalesOpportunitiesReason_1.SalesOpportunitiesReasonField('', SalesOpportunities));
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.BUSINESS_PARTNER = new v4_1.OneToOneLink('BusinessPartner', SalesOpportunities, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_PERSON_2 = new v4_1.OneToOneLink('SalesPerson2', SalesOpportunities, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[salesOpportunitySourceSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITY_SOURCE_SETUP = new v4_1.OneToOneLink('SalesOpportunitySourceSetup', SalesOpportunities, SalesOpportunitySourcesSetup_1.SalesOpportunitySourcesSetup);
    /**
     * Static representation of the one-to-one navigation property [[salesOpportunityInterestSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITY_INTEREST_SETUP = new v4_1.OneToOneLink('SalesOpportunityInterestSetup', SalesOpportunities, SalesOpportunityInterestsSetup_1.SalesOpportunityInterestsSetup);
    /**
     * Static representation of the one-to-one navigation property [[salesOpportunityReasonSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_OPPORTUNITY_REASON_SETUP = new v4_1.OneToOneLink('SalesOpportunityReasonSetup', SalesOpportunities, SalesOpportunityReasonsSetup_1.SalesOpportunityReasonsSetup);
    /**
     * Static representation of the one-to-one navigation property [[salesStage]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.SALES_STAGE = new v4_1.OneToOneLink('SalesStage', SalesOpportunities, SalesStages_1.SalesStages);
    /**
     * Static representation of the one-to-one navigation property [[industry2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.INDUSTRY_2 = new v4_1.OneToOneLink('Industry2', SalesOpportunities, Industries_1.Industries);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.EMPLOYEE_INFO = new v4_1.OneToOneLink('EmployeeInfo', SalesOpportunities, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[project]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.PROJECT = new v4_1.OneToOneLink('Project', SalesOpportunities, Projects_1.Projects);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.USER = new v4_1.OneToOneLink('User', SalesOpportunities, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[territory2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesOpportunities.TERRITORY_2 = new v4_1.OneToOneLink('Territory2', SalesOpportunities, Territories_1.Territories);
    /**
     * All fields of the SalesOpportunities entity.
     */
    SalesOpportunities._allFields = [
        SalesOpportunities.SEQUENTIAL_NO,
        SalesOpportunities.CARD_CODE,
        SalesOpportunities.SALES_PERSON,
        SalesOpportunities.CONTACT_PERSON,
        SalesOpportunities.SOURCE,
        SalesOpportunities.INTEREST_FIELD_1,
        SalesOpportunities.INTEREST_FIELD_2,
        SalesOpportunities.INTEREST_FIELD_3,
        SalesOpportunities.INTEREST_LEVEL,
        SalesOpportunities.START_DATE,
        SalesOpportunities.PREDICTED_CLOSING_DATE,
        SalesOpportunities.MAX_LOCAL_TOTAL,
        SalesOpportunities.MAX_SYSTEM_TOTAL,
        SalesOpportunities.WEIGHTED_SUM_LC,
        SalesOpportunities.WEIGHTED_SUM_SC,
        SalesOpportunities.GROSS_PROFIT,
        SalesOpportunities.GROSS_PROFIT_TOTAL_LOCAL,
        SalesOpportunities.GROSS_PROFIT_TOTAL_SYSTEM,
        SalesOpportunities.REMARKS,
        SalesOpportunities.REASON_FOR_CLOSING,
        SalesOpportunities.TOTAL_AMOUNT_LOCAL,
        SalesOpportunities.TOTAL_AMOUN_SYSTEM,
        SalesOpportunities.CLOSING_GROSS_PROFIT_LOCAL,
        SalesOpportunities.CLOSING_GROSS_PROFIT_SYSTEM,
        SalesOpportunities.CLOSING_PERCENTAGE,
        SalesOpportunities.CURRENT_STAGE_NO,
        SalesOpportunities.CURRENT_STAGE_NUMBER,
        SalesOpportunities.OPPORTUNITY_NAME,
        SalesOpportunities.INDUSTRY,
        SalesOpportunities.LINKED_DOCUMENT_TYPE,
        SalesOpportunities.DATA_OWNERSHIPFIELD,
        SalesOpportunities.STATUS_REMARKS,
        SalesOpportunities.PROJECT_CODE,
        SalesOpportunities.BP_CHANEL_NAME,
        SalesOpportunities.USER_SIGNATURE,
        SalesOpportunities.CUSTOMER_NAME,
        SalesOpportunities.DOCUMENT_CHECKBOX,
        SalesOpportunities.LINKED_DOCUMENT_NUMBER,
        SalesOpportunities.TERRITORY,
        SalesOpportunities.CLOSING_DATE,
        SalesOpportunities.BP_CHANNEL_CONTACT,
        SalesOpportunities.BP_CHANEL_CODE,
        SalesOpportunities.ATTACHMENT_ENTRY,
        SalesOpportunities.UPDATE_DATE,
        SalesOpportunities.UPDATE_TIME,
        SalesOpportunities.SALES_OPPORTUNITIES_LINES,
        SalesOpportunities.SALES_OPPORTUNITIES_COMPETITION,
        SalesOpportunities.SALES_OPPORTUNITIES_PARTNERS,
        SalesOpportunities.SALES_OPPORTUNITIES_INTERESTS,
        SalesOpportunities.SALES_OPPORTUNITIES_REASONS,
        SalesOpportunities.BUSINESS_PARTNER,
        SalesOpportunities.SALES_PERSON_2,
        SalesOpportunities.SALES_OPPORTUNITY_SOURCE_SETUP,
        SalesOpportunities.SALES_OPPORTUNITY_INTEREST_SETUP,
        SalesOpportunities.SALES_OPPORTUNITY_REASON_SETUP,
        SalesOpportunities.SALES_STAGE,
        SalesOpportunities.INDUSTRY_2,
        SalesOpportunities.EMPLOYEE_INFO,
        SalesOpportunities.PROJECT,
        SalesOpportunities.USER,
        SalesOpportunities.TERRITORY_2
    ];
    /**
     * All fields selector.
     */
    SalesOpportunities.ALL_FIELDS = new v4_1.AllFields('*', SalesOpportunities);
    /**
     * All key fields of the SalesOpportunities entity.
     */
    SalesOpportunities._keyFields = [SalesOpportunities.SEQUENTIAL_NO];
    /**
     * Mapping of all key field names to the respective static field property SalesOpportunities.
     */
    SalesOpportunities._keys = SalesOpportunities._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesOpportunities = exports.SalesOpportunities || (exports.SalesOpportunities = {}));
exports.SalesOpportunities = SalesOpportunities;
//# sourceMappingURL=SalesOpportunities.js.map