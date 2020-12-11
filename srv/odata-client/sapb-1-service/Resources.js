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
exports.Resources = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ResourcesRequestBuilder_1 = require("./ResourcesRequestBuilder");
var ResourceWarehouse_1 = require("./ResourceWarehouse");
var ResourceFixedAsset_1 = require("./ResourceFixedAsset");
var ResourceEmployee_1 = require("./ResourceEmployee");
var ResourceDailyCapacity_1 = require("./ResourceDailyCapacity");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Resources" of service "SAPB1".
 */
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Resources`.
     * @returns A builder that constructs instances of entity type `Resources`.
     */
    Resources.builder = function () {
        return core_1.EntityV4.entityBuilder(Resources);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Resources` entity type.
     * @returns A `Resources` request builder.
     */
    Resources.requestBuilder = function () {
        return new ResourcesRequestBuilder_1.ResourcesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Resources`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Resources`.
     */
    Resources.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Resources);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Resources.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Resources.
     */
    Resources._entityName = 'Resources';
    /**
     * Default url path for the according service.
     */
    Resources._defaultServicePath = '/b1s/v2/';
    return Resources;
}(core_1.EntityV4));
exports.Resources = Resources;
var Items_1 = require("./Items");
var ResourceCapacities_1 = require("./ResourceCapacities");
var ResourceGroups_1 = require("./ResourceGroups");
(function (Resources) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.CODE = new core_1.StringField('Code', Resources, 'Edm.String');
    /**
     * Static representation of the [[visCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.VIS_CODE = new core_1.StringField('VisCode', Resources, 'Edm.String');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.SERIES = new core_1.NumberField('Series', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.NUMBER = new core_1.NumberField('Number', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[codeBar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.CODE_BAR = new core_1.StringField('CodeBar', Resources, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.NAME = new core_1.StringField('Name', Resources, 'Edm.String');
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.FOREIGN_NAME = new core_1.StringField('ForeignName', Resources, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.TYPE = new core_1.EnumField('Type', Resources);
    /**
     * Static representation of the [[group]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.GROUP = new core_1.NumberField('Group', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.UNIT_OF_MEASURE = new core_1.StringField('UnitOfMeasure', Resources, 'Edm.String');
    /**
     * Static representation of the [[issueMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ISSUE_METHOD = new core_1.EnumField('IssueMethod', Resources);
    /**
     * Static representation of the [[cost1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_1 = new core_1.NumberField('Cost1', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_2 = new core_1.NumberField('Cost2', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_3 = new core_1.NumberField('Cost3', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_4 = new core_1.NumberField('Cost4', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_5 = new core_1.NumberField('Cost5', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_6 = new core_1.NumberField('Cost6', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_7 = new core_1.NumberField('Cost7', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_8 = new core_1.NumberField('Cost8', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_9 = new core_1.NumberField('Cost9', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_10 = new core_1.NumberField('Cost10', Resources, 'Edm.Double');
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE = new core_1.EnumField('Active', Resources);
    /**
     * Static representation of the [[activeFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE_FROM = new core_1.DateField('ActiveFrom', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[activeTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE_TO = new core_1.DateField('ActiveTo', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[inactive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE = new core_1.EnumField('Inactive', Resources);
    /**
     * Static representation of the [[inactiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE_FROM = new core_1.DateField('InactiveFrom', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[inactiveTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE_TO = new core_1.DateField('InactiveTo', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.DEFAULT_WAREHOUSE = new core_1.StringField('DefaultWarehouse', Resources, 'Edm.String');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PICTURE = new core_1.StringField('Picture', Resources, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.REMARKS = new core_1.StringField('Remarks', Resources, 'Edm.String');
    /**
     * Static representation of the [[property1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_1 = new core_1.EnumField('Property1', Resources);
    /**
     * Static representation of the [[property2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_2 = new core_1.EnumField('Property2', Resources);
    /**
     * Static representation of the [[property3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_3 = new core_1.EnumField('Property3', Resources);
    /**
     * Static representation of the [[property4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_4 = new core_1.EnumField('Property4', Resources);
    /**
     * Static representation of the [[property5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_5 = new core_1.EnumField('Property5', Resources);
    /**
     * Static representation of the [[property6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_6 = new core_1.EnumField('Property6', Resources);
    /**
     * Static representation of the [[property7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_7 = new core_1.EnumField('Property7', Resources);
    /**
     * Static representation of the [[property8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_8 = new core_1.EnumField('Property8', Resources);
    /**
     * Static representation of the [[property9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_9 = new core_1.EnumField('Property9', Resources);
    /**
     * Static representation of the [[property10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_10 = new core_1.EnumField('Property10', Resources);
    /**
     * Static representation of the [[property11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_11 = new core_1.EnumField('Property11', Resources);
    /**
     * Static representation of the [[property12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_12 = new core_1.EnumField('Property12', Resources);
    /**
     * Static representation of the [[property13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_13 = new core_1.EnumField('Property13', Resources);
    /**
     * Static representation of the [[property14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_14 = new core_1.EnumField('Property14', Resources);
    /**
     * Static representation of the [[property15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_15 = new core_1.EnumField('Property15', Resources);
    /**
     * Static representation of the [[property16]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_16 = new core_1.EnumField('Property16', Resources);
    /**
     * Static representation of the [[property17]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_17 = new core_1.EnumField('Property17', Resources);
    /**
     * Static representation of the [[property18]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_18 = new core_1.EnumField('Property18', Resources);
    /**
     * Static representation of the [[property19]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_19 = new core_1.EnumField('Property19', Resources);
    /**
     * Static representation of the [[property20]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_20 = new core_1.EnumField('Property20', Resources);
    /**
     * Static representation of the [[property21]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_21 = new core_1.EnumField('Property21', Resources);
    /**
     * Static representation of the [[property22]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_22 = new core_1.EnumField('Property22', Resources);
    /**
     * Static representation of the [[property23]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_23 = new core_1.EnumField('Property23', Resources);
    /**
     * Static representation of the [[property24]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_24 = new core_1.EnumField('Property24', Resources);
    /**
     * Static representation of the [[property25]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_25 = new core_1.EnumField('Property25', Resources);
    /**
     * Static representation of the [[property26]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_26 = new core_1.EnumField('Property26', Resources);
    /**
     * Static representation of the [[property27]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_27 = new core_1.EnumField('Property27', Resources);
    /**
     * Static representation of the [[property28]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_28 = new core_1.EnumField('Property28', Resources);
    /**
     * Static representation of the [[property29]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_29 = new core_1.EnumField('Property29', Resources);
    /**
     * Static representation of the [[property30]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_30 = new core_1.EnumField('Property30', Resources);
    /**
     * Static representation of the [[property31]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_31 = new core_1.EnumField('Property31', Resources);
    /**
     * Static representation of the [[property32]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_32 = new core_1.EnumField('Property32', Resources);
    /**
     * Static representation of the [[property33]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_33 = new core_1.EnumField('Property33', Resources);
    /**
     * Static representation of the [[property34]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_34 = new core_1.EnumField('Property34', Resources);
    /**
     * Static representation of the [[property35]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_35 = new core_1.EnumField('Property35', Resources);
    /**
     * Static representation of the [[property36]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_36 = new core_1.EnumField('Property36', Resources);
    /**
     * Static representation of the [[property37]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_37 = new core_1.EnumField('Property37', Resources);
    /**
     * Static representation of the [[property38]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_38 = new core_1.EnumField('Property38', Resources);
    /**
     * Static representation of the [[property39]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_39 = new core_1.EnumField('Property39', Resources);
    /**
     * Static representation of the [[property40]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_40 = new core_1.EnumField('Property40', Resources);
    /**
     * Static representation of the [[property41]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_41 = new core_1.EnumField('Property41', Resources);
    /**
     * Static representation of the [[property42]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_42 = new core_1.EnumField('Property42', Resources);
    /**
     * Static representation of the [[property43]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_43 = new core_1.EnumField('Property43', Resources);
    /**
     * Static representation of the [[property44]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_44 = new core_1.EnumField('Property44', Resources);
    /**
     * Static representation of the [[property45]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_45 = new core_1.EnumField('Property45', Resources);
    /**
     * Static representation of the [[property46]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_46 = new core_1.EnumField('Property46', Resources);
    /**
     * Static representation of the [[property47]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_47 = new core_1.EnumField('Property47', Resources);
    /**
     * Static representation of the [[property48]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_48 = new core_1.EnumField('Property48', Resources);
    /**
     * Static representation of the [[property49]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_49 = new core_1.EnumField('Property49', Resources);
    /**
     * Static representation of the [[property50]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_50 = new core_1.EnumField('Property50', Resources);
    /**
     * Static representation of the [[property51]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_51 = new core_1.EnumField('Property51', Resources);
    /**
     * Static representation of the [[property52]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_52 = new core_1.EnumField('Property52', Resources);
    /**
     * Static representation of the [[property53]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_53 = new core_1.EnumField('Property53', Resources);
    /**
     * Static representation of the [[property54]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_54 = new core_1.EnumField('Property54', Resources);
    /**
     * Static representation of the [[property55]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_55 = new core_1.EnumField('Property55', Resources);
    /**
     * Static representation of the [[property56]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_56 = new core_1.EnumField('Property56', Resources);
    /**
     * Static representation of the [[property57]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_57 = new core_1.EnumField('Property57', Resources);
    /**
     * Static representation of the [[property58]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_58 = new core_1.EnumField('Property58', Resources);
    /**
     * Static representation of the [[property59]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_59 = new core_1.EnumField('Property59', Resources);
    /**
     * Static representation of the [[property60]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_60 = new core_1.EnumField('Property60', Resources);
    /**
     * Static representation of the [[property61]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_61 = new core_1.EnumField('Property61', Resources);
    /**
     * Static representation of the [[property62]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_62 = new core_1.EnumField('Property62', Resources);
    /**
     * Static representation of the [[property63]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_63 = new core_1.EnumField('Property63', Resources);
    /**
     * Static representation of the [[property64]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PROPERTY_64 = new core_1.EnumField('Property64', Resources);
    /**
     * Static representation of the [[activeRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE_REMARKS = new core_1.StringField('ActiveRemarks', Resources, 'Edm.String');
    /**
     * Static representation of the [[inactiveRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE_REMARKS = new core_1.StringField('InactiveRemarks', Resources, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[unitsPerTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.UNITS_PER_TIME = new core_1.NumberField('UnitsPerTime', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[timePerUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.TIME_PER_UNITS = new core_1.NumberField('TimePerUnits', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[allocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ALLOCATION = new core_1.EnumField('Allocation', Resources);
    /**
     * Static representation of the [[linkedItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.LINKED_ITEM = new core_1.StringField('LinkedItem', Resources, 'Edm.String');
    /**
     * Static representation of the [[relevantForSingleRun1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RELEVANT_FOR_SINGLE_RUN_1 = new core_1.EnumField('RelevantForSingleRun1', Resources);
    /**
     * Static representation of the [[relevantForSingleRun2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RELEVANT_FOR_SINGLE_RUN_2 = new core_1.EnumField('RelevantForSingleRun2', Resources);
    /**
     * Static representation of the [[relevantForSingleRun3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RELEVANT_FOR_SINGLE_RUN_3 = new core_1.EnumField('RelevantForSingleRun3', Resources);
    /**
     * Static representation of the [[relevantForSingleRun4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RELEVANT_FOR_SINGLE_RUN_4 = new core_1.EnumField('RelevantForSingleRun4', Resources);
    /**
     * Static representation of the [[resourceWarehouses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_WAREHOUSES = new core_1.CollectionField('ResourceWarehouses', Resources, ResourceWarehouse_1.ResourceWarehouse);
    /**
     * Static representation of the [[resourceFixedAssets]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_FIXED_ASSETS = new core_1.CollectionField('ResourceFixedAssets', Resources, ResourceFixedAsset_1.ResourceFixedAsset);
    /**
     * Static representation of the [[resourceEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_EMPLOYEES = new core_1.CollectionField('ResourceEmployees', Resources, ResourceEmployee_1.ResourceEmployee);
    /**
     * Static representation of the [[resourceDailyCapacities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_DAILY_CAPACITIES = new core_1.CollectionField('ResourceDailyCapacities', Resources, ResourceDailyCapacity_1.ResourceDailyCapacity);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ITEMS = new core_1.OneToManyLink('Items', Resources, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[resourceCapacities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_CAPACITIES = new core_1.OneToManyLink('ResourceCapacities', Resources, ResourceCapacities_1.ResourceCapacities);
    /**
     * Static representation of the one-to-one navigation property [[resourceGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_GROUP = new core_1.OneToOneLink('ResourceGroup', Resources, ResourceGroups_1.ResourceGroups);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ITEM = new core_1.OneToOneLink('Item', Resources, Items_1.Items);
    /**
     * All fields of the Resources entity.
     */
    Resources._allFields = [
        Resources.CODE,
        Resources.VIS_CODE,
        Resources.SERIES,
        Resources.NUMBER,
        Resources.CODE_BAR,
        Resources.NAME,
        Resources.FOREIGN_NAME,
        Resources.TYPE,
        Resources.GROUP,
        Resources.UNIT_OF_MEASURE,
        Resources.ISSUE_METHOD,
        Resources.COST_1,
        Resources.COST_2,
        Resources.COST_3,
        Resources.COST_4,
        Resources.COST_5,
        Resources.COST_6,
        Resources.COST_7,
        Resources.COST_8,
        Resources.COST_9,
        Resources.COST_10,
        Resources.ACTIVE,
        Resources.ACTIVE_FROM,
        Resources.ACTIVE_TO,
        Resources.INACTIVE,
        Resources.INACTIVE_FROM,
        Resources.INACTIVE_TO,
        Resources.DEFAULT_WAREHOUSE,
        Resources.PICTURE,
        Resources.REMARKS,
        Resources.PROPERTY_1,
        Resources.PROPERTY_2,
        Resources.PROPERTY_3,
        Resources.PROPERTY_4,
        Resources.PROPERTY_5,
        Resources.PROPERTY_6,
        Resources.PROPERTY_7,
        Resources.PROPERTY_8,
        Resources.PROPERTY_9,
        Resources.PROPERTY_10,
        Resources.PROPERTY_11,
        Resources.PROPERTY_12,
        Resources.PROPERTY_13,
        Resources.PROPERTY_14,
        Resources.PROPERTY_15,
        Resources.PROPERTY_16,
        Resources.PROPERTY_17,
        Resources.PROPERTY_18,
        Resources.PROPERTY_19,
        Resources.PROPERTY_20,
        Resources.PROPERTY_21,
        Resources.PROPERTY_22,
        Resources.PROPERTY_23,
        Resources.PROPERTY_24,
        Resources.PROPERTY_25,
        Resources.PROPERTY_26,
        Resources.PROPERTY_27,
        Resources.PROPERTY_28,
        Resources.PROPERTY_29,
        Resources.PROPERTY_30,
        Resources.PROPERTY_31,
        Resources.PROPERTY_32,
        Resources.PROPERTY_33,
        Resources.PROPERTY_34,
        Resources.PROPERTY_35,
        Resources.PROPERTY_36,
        Resources.PROPERTY_37,
        Resources.PROPERTY_38,
        Resources.PROPERTY_39,
        Resources.PROPERTY_40,
        Resources.PROPERTY_41,
        Resources.PROPERTY_42,
        Resources.PROPERTY_43,
        Resources.PROPERTY_44,
        Resources.PROPERTY_45,
        Resources.PROPERTY_46,
        Resources.PROPERTY_47,
        Resources.PROPERTY_48,
        Resources.PROPERTY_49,
        Resources.PROPERTY_50,
        Resources.PROPERTY_51,
        Resources.PROPERTY_52,
        Resources.PROPERTY_53,
        Resources.PROPERTY_54,
        Resources.PROPERTY_55,
        Resources.PROPERTY_56,
        Resources.PROPERTY_57,
        Resources.PROPERTY_58,
        Resources.PROPERTY_59,
        Resources.PROPERTY_60,
        Resources.PROPERTY_61,
        Resources.PROPERTY_62,
        Resources.PROPERTY_63,
        Resources.PROPERTY_64,
        Resources.ACTIVE_REMARKS,
        Resources.INACTIVE_REMARKS,
        Resources.ATTACHMENT_ENTRY,
        Resources.UNITS_PER_TIME,
        Resources.TIME_PER_UNITS,
        Resources.ALLOCATION,
        Resources.LINKED_ITEM,
        Resources.RELEVANT_FOR_SINGLE_RUN_1,
        Resources.RELEVANT_FOR_SINGLE_RUN_2,
        Resources.RELEVANT_FOR_SINGLE_RUN_3,
        Resources.RELEVANT_FOR_SINGLE_RUN_4,
        Resources.RESOURCE_WAREHOUSES,
        Resources.RESOURCE_FIXED_ASSETS,
        Resources.RESOURCE_EMPLOYEES,
        Resources.RESOURCE_DAILY_CAPACITIES,
        Resources.ITEMS,
        Resources.RESOURCE_CAPACITIES,
        Resources.RESOURCE_GROUP,
        Resources.ITEM
    ];
    /**
     * All fields selector.
     */
    Resources.ALL_FIELDS = new core_1.AllFields('*', Resources);
    /**
     * All key fields of the Resources entity.
     */
    Resources._keyFields = [Resources.CODE];
    /**
     * Mapping of all key field names to the respective static field property Resources.
     */
    Resources._keys = Resources._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Resources = exports.Resources || (exports.Resources = {}));
exports.Resources = Resources;
//# sourceMappingURL=Resources.js.map