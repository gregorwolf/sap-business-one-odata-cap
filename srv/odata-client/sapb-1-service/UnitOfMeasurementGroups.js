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
exports.UnitOfMeasurementGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UnitOfMeasurementGroupsRequestBuilder_1 = require("./UnitOfMeasurementGroupsRequestBuilder");
var UoMGroupDefinition_1 = require("./UoMGroupDefinition");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "UnitOfMeasurementGroups" of service "SAPB1".
 */
var UnitOfMeasurementGroups = /** @class */ (function (_super) {
    __extends(UnitOfMeasurementGroups, _super);
    function UnitOfMeasurementGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `UnitOfMeasurementGroups`.
     * @returns A builder that constructs instances of entity type `UnitOfMeasurementGroups`.
     */
    UnitOfMeasurementGroups.builder = function () {
        return v4_1.Entity.entityBuilder(UnitOfMeasurementGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UnitOfMeasurementGroups` entity type.
     * @returns A `UnitOfMeasurementGroups` request builder.
     */
    UnitOfMeasurementGroups.requestBuilder = function () {
        return new UnitOfMeasurementGroupsRequestBuilder_1.UnitOfMeasurementGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UnitOfMeasurementGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UnitOfMeasurementGroups`.
     */
    UnitOfMeasurementGroups.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, UnitOfMeasurementGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UnitOfMeasurementGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UnitOfMeasurementGroups.
     */
    UnitOfMeasurementGroups._entityName = 'UnitOfMeasurementGroups';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UnitOfMeasurementGroups.
     */
    UnitOfMeasurementGroups._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    UnitOfMeasurementGroups._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return UnitOfMeasurementGroups;
}(v4_1.Entity));
exports.UnitOfMeasurementGroups = UnitOfMeasurementGroups;
var ItemGroups_1 = require("./ItemGroups");
var Items_1 = require("./Items");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
var BinLocations_1 = require("./BinLocations");
(function (UnitOfMeasurementGroups) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.ABS_ENTRY = new v4_1.NumberField('AbsEntry', UnitOfMeasurementGroups, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.CODE = new v4_1.StringField('Code', UnitOfMeasurementGroups, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.NAME = new v4_1.StringField('Name', UnitOfMeasurementGroups, 'Edm.String');
    /**
     * Static representation of the [[baseUoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.BASE_UO_M = new v4_1.NumberField('BaseUoM', UnitOfMeasurementGroups, 'Edm.Int32');
    /**
     * Static representation of the [[uoMGroupDefinitionCollection]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.UO_M_GROUP_DEFINITION_COLLECTION = new v4_1.CollectionField('UoMGroupDefinitionCollection', UnitOfMeasurementGroups, new UoMGroupDefinition_1.UoMGroupDefinitionField('', UnitOfMeasurementGroups));
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.ITEM_GROUPS = new v4_1.OneToManyLink('ItemGroups', UnitOfMeasurementGroups, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.ITEMS = new v4_1.OneToManyLink('Items', UnitOfMeasurementGroups, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.UNIT_OF_MEASUREMENT = new v4_1.OneToOneLink('UnitOfMeasurement', UnitOfMeasurementGroups, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurementGroups.BIN_LOCATIONS = new v4_1.OneToManyLink('BinLocations', UnitOfMeasurementGroups, BinLocations_1.BinLocations);
    /**
     * All fields of the UnitOfMeasurementGroups entity.
     */
    UnitOfMeasurementGroups._allFields = [
        UnitOfMeasurementGroups.ABS_ENTRY,
        UnitOfMeasurementGroups.CODE,
        UnitOfMeasurementGroups.NAME,
        UnitOfMeasurementGroups.BASE_UO_M,
        UnitOfMeasurementGroups.UO_M_GROUP_DEFINITION_COLLECTION,
        UnitOfMeasurementGroups.ITEM_GROUPS,
        UnitOfMeasurementGroups.ITEMS,
        UnitOfMeasurementGroups.UNIT_OF_MEASUREMENT,
        UnitOfMeasurementGroups.BIN_LOCATIONS
    ];
    /**
     * All fields selector.
     */
    UnitOfMeasurementGroups.ALL_FIELDS = new v4_1.AllFields('*', UnitOfMeasurementGroups);
    /**
     * All key fields of the UnitOfMeasurementGroups entity.
     */
    UnitOfMeasurementGroups._keyFields = [UnitOfMeasurementGroups.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property UnitOfMeasurementGroups.
     */
    UnitOfMeasurementGroups._keys = UnitOfMeasurementGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UnitOfMeasurementGroups = exports.UnitOfMeasurementGroups || (exports.UnitOfMeasurementGroups = {}));
exports.UnitOfMeasurementGroups = UnitOfMeasurementGroups;
//# sourceMappingURL=UnitOfMeasurementGroups.js.map