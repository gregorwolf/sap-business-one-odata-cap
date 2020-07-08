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
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Resources" of service "SAPB1".
 */
var Resources = /** @class */ (function (_super) {
    __extends(Resources, _super);
    function Resources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Resources`.
     * @returns A builder that constructs instances of entity type `Resources`.
     */
    Resources.builder = function () {
        return v4_1.Entity.entityBuilder(Resources);
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
        return v4_1.Entity.customFieldSelector(fieldName, Resources);
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
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Resources.
     */
    Resources._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Resources._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Resources;
}(v4_1.Entity));
exports.Resources = Resources;
var Items_1 = require("./Items");
var ResourceCapacities_1 = require("./ResourceCapacities");
var ResourceGroups_1 = require("./ResourceGroups");
(function (Resources) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.CODE = new v4_1.StringField('Code', Resources, 'Edm.String');
    /**
     * Static representation of the [[visCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.VIS_CODE = new v4_1.StringField('VisCode', Resources, 'Edm.String');
    /**
     * Static representation of the [[series]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.SERIES = new v4_1.NumberField('Series', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[number]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.NUMBER = new v4_1.NumberField('Number', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[codeBar]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.CODE_BAR = new v4_1.StringField('CodeBar', Resources, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.NAME = new v4_1.StringField('Name', Resources, 'Edm.String');
    /**
     * Static representation of the [[foreignName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.FOREIGN_NAME = new v4_1.StringField('ForeignName', Resources, 'Edm.String');
    /**
     * Static representation of the [[group]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.GROUP = new v4_1.NumberField('Group', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[unitOfMeasure]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.UNIT_OF_MEASURE = new v4_1.StringField('UnitOfMeasure', Resources, 'Edm.String');
    /**
     * Static representation of the [[cost1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_1 = new v4_1.NumberField('Cost1', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_2 = new v4_1.NumberField('Cost2', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_3 = new v4_1.NumberField('Cost3', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_4 = new v4_1.NumberField('Cost4', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_5 = new v4_1.NumberField('Cost5', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_6 = new v4_1.NumberField('Cost6', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_7 = new v4_1.NumberField('Cost7', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_8 = new v4_1.NumberField('Cost8', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_9 = new v4_1.NumberField('Cost9', Resources, 'Edm.Double');
    /**
     * Static representation of the [[cost10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.COST_10 = new v4_1.NumberField('Cost10', Resources, 'Edm.Double');
    /**
     * Static representation of the [[activeFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE_FROM = new v4_1.DateField('ActiveFrom', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[activeTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE_TO = new v4_1.DateField('ActiveTo', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[inactiveFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE_FROM = new v4_1.DateField('InactiveFrom', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[inactiveTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE_TO = new v4_1.DateField('InactiveTo', Resources, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[defaultWarehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.DEFAULT_WAREHOUSE = new v4_1.StringField('DefaultWarehouse', Resources, 'Edm.String');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.PICTURE = new v4_1.StringField('Picture', Resources, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.REMARKS = new v4_1.StringField('Remarks', Resources, 'Edm.String');
    /**
     * Static representation of the [[activeRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ACTIVE_REMARKS = new v4_1.StringField('ActiveRemarks', Resources, 'Edm.String');
    /**
     * Static representation of the [[inactiveRemarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.INACTIVE_REMARKS = new v4_1.StringField('InactiveRemarks', Resources, 'Edm.String');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ATTACHMENT_ENTRY = new v4_1.NumberField('AttachmentEntry', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[unitsPerTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.UNITS_PER_TIME = new v4_1.NumberField('UnitsPerTime', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[timePerUnits]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.TIME_PER_UNITS = new v4_1.NumberField('TimePerUnits', Resources, 'Edm.Int32');
    /**
     * Static representation of the [[linkedItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.LINKED_ITEM = new v4_1.StringField('LinkedItem', Resources, 'Edm.String');
    /**
     * Static representation of the [[resourceWarehouses]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_WAREHOUSES = new v4_1.CollectionField('ResourceWarehouses', Resources, new ResourceWarehouse_1.ResourceWarehouseField('', Resources));
    /**
     * Static representation of the [[resourceFixedAssets]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_FIXED_ASSETS = new v4_1.CollectionField('ResourceFixedAssets', Resources, new ResourceFixedAsset_1.ResourceFixedAssetField('', Resources));
    /**
     * Static representation of the [[resourceEmployees]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_EMPLOYEES = new v4_1.CollectionField('ResourceEmployees', Resources, new ResourceEmployee_1.ResourceEmployeeField('', Resources));
    /**
     * Static representation of the [[resourceDailyCapacities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_DAILY_CAPACITIES = new v4_1.CollectionField('ResourceDailyCapacities', Resources, new ResourceDailyCapacity_1.ResourceDailyCapacityField('', Resources));
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ITEMS = new v4_1.OneToManyLink('Items', Resources, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[resourceCapacities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_CAPACITIES = new v4_1.OneToManyLink('ResourceCapacities', Resources, ResourceCapacities_1.ResourceCapacities);
    /**
     * Static representation of the one-to-one navigation property [[resourceGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.RESOURCE_GROUP = new v4_1.OneToOneLink('ResourceGroup', Resources, ResourceGroups_1.ResourceGroups);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Resources.ITEM = new v4_1.OneToOneLink('Item', Resources, Items_1.Items);
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
        Resources.GROUP,
        Resources.UNIT_OF_MEASURE,
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
        Resources.ACTIVE_FROM,
        Resources.ACTIVE_TO,
        Resources.INACTIVE_FROM,
        Resources.INACTIVE_TO,
        Resources.DEFAULT_WAREHOUSE,
        Resources.PICTURE,
        Resources.REMARKS,
        Resources.ACTIVE_REMARKS,
        Resources.INACTIVE_REMARKS,
        Resources.ATTACHMENT_ENTRY,
        Resources.UNITS_PER_TIME,
        Resources.TIME_PER_UNITS,
        Resources.LINKED_ITEM,
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
    Resources.ALL_FIELDS = new v4_1.AllFields('*', Resources);
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