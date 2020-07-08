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
exports.ResourceGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var ResourceGroupsRequestBuilder_1 = require("./ResourceGroupsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "ResourceGroups" of service "SAPB1".
 */
var ResourceGroups = /** @class */ (function (_super) {
    __extends(ResourceGroups, _super);
    function ResourceGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `ResourceGroups`.
     * @returns A builder that constructs instances of entity type `ResourceGroups`.
     */
    ResourceGroups.builder = function () {
        return v4_1.Entity.entityBuilder(ResourceGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `ResourceGroups` entity type.
     * @returns A `ResourceGroups` request builder.
     */
    ResourceGroups.requestBuilder = function () {
        return new ResourceGroupsRequestBuilder_1.ResourceGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ResourceGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ResourceGroups`.
     */
    ResourceGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, ResourceGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    ResourceGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for ResourceGroups.
     */
    ResourceGroups._entityName = 'ResourceGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ResourceGroups.
     */
    ResourceGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    ResourceGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return ResourceGroups;
}(v4_1.Entity));
exports.ResourceGroups = ResourceGroups;
var Resources_1 = require("./Resources");
(function (ResourceGroups) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.CODE = new v4_1.NumberField('Code', ResourceGroups, 'Edm.Int32');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.NAME = new v4_1.StringField('Name', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[costName1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_1 = new v4_1.StringField('CostName1', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_1 = new v4_1.NumberField('Cost1', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_2 = new v4_1.StringField('CostName2', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_2 = new v4_1.NumberField('Cost2', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_3 = new v4_1.StringField('CostName3', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_3 = new v4_1.NumberField('Cost3', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_4 = new v4_1.StringField('CostName4', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_4 = new v4_1.NumberField('Cost4', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_5 = new v4_1.StringField('CostName5', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_5 = new v4_1.NumberField('Cost5', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_6 = new v4_1.StringField('CostName6', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_6 = new v4_1.NumberField('Cost6', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_7 = new v4_1.StringField('CostName7', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_7 = new v4_1.NumberField('Cost7', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_8 = new v4_1.StringField('CostName8', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_8 = new v4_1.NumberField('Cost8', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_9 = new v4_1.StringField('CostName9', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_9 = new v4_1.NumberField('Cost9', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[costName10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_NAME_10 = new v4_1.StringField('CostName10', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the [[cost10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.COST_10 = new v4_1.NumberField('Cost10', ResourceGroups, 'Edm.Double');
    /**
     * Static representation of the [[numOfUnitsText]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.NUM_OF_UNITS_TEXT = new v4_1.StringField('NumOfUnitsText', ResourceGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[resources]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ResourceGroups.RESOURCES = new v4_1.OneToManyLink('Resources', ResourceGroups, Resources_1.Resources);
    /**
     * All fields of the ResourceGroups entity.
     */
    ResourceGroups._allFields = [
        ResourceGroups.CODE,
        ResourceGroups.NAME,
        ResourceGroups.COST_NAME_1,
        ResourceGroups.COST_1,
        ResourceGroups.COST_NAME_2,
        ResourceGroups.COST_2,
        ResourceGroups.COST_NAME_3,
        ResourceGroups.COST_3,
        ResourceGroups.COST_NAME_4,
        ResourceGroups.COST_4,
        ResourceGroups.COST_NAME_5,
        ResourceGroups.COST_5,
        ResourceGroups.COST_NAME_6,
        ResourceGroups.COST_6,
        ResourceGroups.COST_NAME_7,
        ResourceGroups.COST_7,
        ResourceGroups.COST_NAME_8,
        ResourceGroups.COST_8,
        ResourceGroups.COST_NAME_9,
        ResourceGroups.COST_9,
        ResourceGroups.COST_NAME_10,
        ResourceGroups.COST_10,
        ResourceGroups.NUM_OF_UNITS_TEXT,
        ResourceGroups.RESOURCES
    ];
    /**
     * All fields selector.
     */
    ResourceGroups.ALL_FIELDS = new v4_1.AllFields('*', ResourceGroups);
    /**
     * All key fields of the ResourceGroups entity.
     */
    ResourceGroups._keyFields = [ResourceGroups.CODE];
    /**
     * Mapping of all key field names to the respective static field property ResourceGroups.
     */
    ResourceGroups._keys = ResourceGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(ResourceGroups = exports.ResourceGroups || (exports.ResourceGroups = {}));
exports.ResourceGroups = ResourceGroups;
//# sourceMappingURL=ResourceGroups.js.map