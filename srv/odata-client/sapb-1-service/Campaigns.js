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
exports.Campaigns = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CampaignsRequestBuilder_1 = require("./CampaignsRequestBuilder");
var CampaignBusinessPartner_1 = require("./CampaignBusinessPartner");
var CampaignItem_1 = require("./CampaignItem");
var CampaignPartner_1 = require("./CampaignPartner");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Campaigns" of service "SAPB1".
 */
var Campaigns = /** @class */ (function (_super) {
    __extends(Campaigns, _super);
    function Campaigns() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Campaigns`.
     * @returns A builder that constructs instances of entity type `Campaigns`.
     */
    Campaigns.builder = function () {
        return core_1.EntityV4.entityBuilder(Campaigns);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Campaigns` entity type.
     * @returns A `Campaigns` request builder.
     */
    Campaigns.requestBuilder = function () {
        return new CampaignsRequestBuilder_1.CampaignsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Campaigns`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Campaigns`.
     */
    Campaigns.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Campaigns);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Campaigns.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Campaigns.
     */
    Campaigns._entityName = 'Campaigns';
    /**
     * Default url path for the according service.
     */
    Campaigns._defaultServicePath = '/b1s/v2/';
    return Campaigns;
}(core_1.EntityV4));
exports.Campaigns = Campaigns;
var BusinessPartners_1 = require("./BusinessPartners");
var TargetGroups_1 = require("./TargetGroups");
var EmployeesInfo_1 = require("./EmployeesInfo");
var Attachments2_1 = require("./Attachments2");
(function (Campaigns) {
    /**
     * Static representation of the [[campaignNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.CAMPAIGN_NUMBER = new core_1.NumberField('CampaignNumber', Campaigns, 'Edm.Int32');
    /**
     * Static representation of the [[campaignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.CAMPAIGN_NAME = new core_1.StringField('CampaignName', Campaigns, 'Edm.String');
    /**
     * Static representation of the [[campaignType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.CAMPAIGN_TYPE = new core_1.EnumField('CampaignType', Campaigns);
    /**
     * Static representation of the [[targetGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.TARGET_GROUP = new core_1.StringField('TargetGroup', Campaigns, 'Edm.String');
    /**
     * Static representation of the [[owner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.OWNER = new core_1.NumberField('Owner', Campaigns, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.STATUS = new core_1.EnumField('Status', Campaigns);
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.START_DATE = new core_1.DateField('StartDate', Campaigns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[finishDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.FINISH_DATE = new core_1.DateField('FinishDate', Campaigns, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.REMARKS = new core_1.StringField('Remarks', Campaigns, 'Edm.String');
    /**
     * Static representation of the [[generatedByWizard]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.GENERATED_BY_WIZARD = new core_1.EnumField('GeneratedByWizard', Campaigns);
    /**
     * Static representation of the [[attachementsEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.ATTACHEMENTS_ENTRY = new core_1.NumberField('AttachementsEntry', Campaigns, 'Edm.Int32');
    /**
     * Static representation of the [[targetGroupType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.TARGET_GROUP_TYPE = new core_1.EnumField('TargetGroupType', Campaigns);
    /**
     * Static representation of the [[campaignBusinessPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.CAMPAIGN_BUSINESS_PARTNERS = new core_1.CollectionField('CampaignBusinessPartners', Campaigns, CampaignBusinessPartner_1.CampaignBusinessPartner);
    /**
     * Static representation of the [[campaignItems]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.CAMPAIGN_ITEMS = new core_1.CollectionField('CampaignItems', Campaigns, CampaignItem_1.CampaignItem);
    /**
     * Static representation of the [[campaignPartners]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.CAMPAIGN_PARTNERS = new core_1.CollectionField('CampaignPartners', Campaigns, CampaignPartner_1.CampaignPartner);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', Campaigns, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-one navigation property [[targetGroup2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.TARGET_GROUP_2 = new core_1.OneToOneLink('TargetGroup2', Campaigns, TargetGroups_1.TargetGroups);
    /**
     * Static representation of the one-to-one navigation property [[employeeInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.EMPLOYEE_INFO = new core_1.OneToOneLink('EmployeeInfo', Campaigns, EmployeesInfo_1.EmployeesInfo);
    /**
     * Static representation of the one-to-one navigation property [[attachments2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Campaigns.ATTACHMENTS_2 = new core_1.OneToOneLink('Attachments2', Campaigns, Attachments2_1.Attachments2);
    /**
     * All fields of the Campaigns entity.
     */
    Campaigns._allFields = [
        Campaigns.CAMPAIGN_NUMBER,
        Campaigns.CAMPAIGN_NAME,
        Campaigns.CAMPAIGN_TYPE,
        Campaigns.TARGET_GROUP,
        Campaigns.OWNER,
        Campaigns.STATUS,
        Campaigns.START_DATE,
        Campaigns.FINISH_DATE,
        Campaigns.REMARKS,
        Campaigns.GENERATED_BY_WIZARD,
        Campaigns.ATTACHEMENTS_ENTRY,
        Campaigns.TARGET_GROUP_TYPE,
        Campaigns.CAMPAIGN_BUSINESS_PARTNERS,
        Campaigns.CAMPAIGN_ITEMS,
        Campaigns.CAMPAIGN_PARTNERS,
        Campaigns.BUSINESS_PARTNERS,
        Campaigns.TARGET_GROUP_2,
        Campaigns.EMPLOYEE_INFO,
        Campaigns.ATTACHMENTS_2
    ];
    /**
     * All fields selector.
     */
    Campaigns.ALL_FIELDS = new core_1.AllFields('*', Campaigns);
    /**
     * All key fields of the Campaigns entity.
     */
    Campaigns._keyFields = [Campaigns.CAMPAIGN_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property Campaigns.
     */
    Campaigns._keys = Campaigns._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Campaigns = exports.Campaigns || (exports.Campaigns = {}));
exports.Campaigns = Campaigns;
//# sourceMappingURL=Campaigns.js.map