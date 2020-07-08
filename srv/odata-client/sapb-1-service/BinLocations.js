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
exports.BinLocations = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BinLocationsRequestBuilder_1 = require("./BinLocationsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "BinLocations" of service "SAPB1".
 */
var BinLocations = /** @class */ (function (_super) {
    __extends(BinLocations, _super);
    function BinLocations() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `BinLocations`.
     * @returns A builder that constructs instances of entity type `BinLocations`.
     */
    BinLocations.builder = function () {
        return v4_1.Entity.entityBuilder(BinLocations);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BinLocations` entity type.
     * @returns A `BinLocations` request builder.
     */
    BinLocations.requestBuilder = function () {
        return new BinLocationsRequestBuilder_1.BinLocationsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BinLocations`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BinLocations`.
     */
    BinLocations.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, BinLocations);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BinLocations.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BinLocations.
     */
    BinLocations._entityName = 'BinLocations';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for BinLocations.
     */
    BinLocations._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    BinLocations._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return BinLocations;
}(v4_1.Entity));
exports.BinLocations = BinLocations;
var Warehouses_1 = require("./Warehouses");
var Items_1 = require("./Items");
var ItemGroups_1 = require("./ItemGroups");
var WeightMeasures_1 = require("./WeightMeasures");
var UnitOfMeasurements_1 = require("./UnitOfMeasurements");
var UnitOfMeasurementGroups_1 = require("./UnitOfMeasurementGroups");
(function (BinLocations) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ABS_ENTRY = new v4_1.NumberField('AbsEntry', BinLocations, 'Edm.Int32');
    /**
     * Static representation of the [[warehouse]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.WAREHOUSE = new v4_1.StringField('Warehouse', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[sublevel1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SUBLEVEL_1 = new v4_1.StringField('Sublevel1', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[sublevel2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SUBLEVEL_2 = new v4_1.StringField('Sublevel2', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[sublevel3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SUBLEVEL_3 = new v4_1.StringField('Sublevel3', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[sublevel4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SUBLEVEL_4 = new v4_1.StringField('Sublevel4', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[binCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.BIN_CODE = new v4_1.StringField('BinCode', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.DESCRIPTION = new v4_1.StringField('Description', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[alternativeSortCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ALTERNATIVE_SORT_CODE = new v4_1.StringField('AlternativeSortCode', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[barCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.BAR_CODE = new v4_1.StringField('BarCode', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_1 = new v4_1.StringField('Attribute1', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_2 = new v4_1.StringField('Attribute2', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_3 = new v4_1.StringField('Attribute3', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_4 = new v4_1.StringField('Attribute4', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_5 = new v4_1.StringField('Attribute5', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_6 = new v4_1.StringField('Attribute6', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_7 = new v4_1.StringField('Attribute7', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_8 = new v4_1.StringField('Attribute8', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_9 = new v4_1.StringField('Attribute9', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[attribute10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ATTRIBUTE_10 = new v4_1.StringField('Attribute10', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[specificItem]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SPECIFIC_ITEM = new v4_1.StringField('SpecificItem', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[specificItemGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SPECIFIC_ITEM_GROUP = new v4_1.NumberField('SpecificItemGroup', BinLocations, 'Edm.Int32');
    /**
     * Static representation of the [[restrictionReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.RESTRICTION_REASON = new v4_1.StringField('RestrictionReason', BinLocations, 'Edm.String');
    /**
     * Static representation of the [[dateRestrictionChanged]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.DATE_RESTRICTION_CHANGED = new v4_1.DateField('DateRestrictionChanged', BinLocations, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[minimumQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.MINIMUM_QTY = new v4_1.NumberField('MinimumQty', BinLocations, 'Edm.Double');
    /**
     * Static representation of the [[maximumQty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.MAXIMUM_QTY = new v4_1.NumberField('MaximumQty', BinLocations, 'Edm.Double');
    /**
     * Static representation of the [[maximumWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.MAXIMUM_WEIGHT = new v4_1.NumberField('MaximumWeight', BinLocations, 'Edm.Double');
    /**
     * Static representation of the [[maximumWeight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.MAXIMUM_WEIGHT_1 = new v4_1.NumberField('MaximumWeight1', BinLocations, 'Edm.Double');
    /**
     * Static representation of the [[maximumWeightUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.MAXIMUM_WEIGHT_UNIT = new v4_1.NumberField('MaximumWeightUnit', BinLocations, 'Edm.Int32');
    /**
     * Static representation of the [[maximumWeightUnit1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.MAXIMUM_WEIGHT_UNIT_1 = new v4_1.NumberField('MaximumWeightUnit1', BinLocations, 'Edm.Int32');
    /**
     * Static representation of the [[specificUoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SPECIFIC_UO_M = new v4_1.NumberField('SpecificUoM', BinLocations, 'Edm.Int32');
    /**
     * Static representation of the [[specificUoMGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.SPECIFIC_UO_M_GROUP = new v4_1.NumberField('SpecificUoMGroup', BinLocations, 'Edm.Int32');
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.WAREHOUSES = new v4_1.OneToManyLink('Warehouses', BinLocations, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[warehouse2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.WAREHOUSE_2 = new v4_1.OneToOneLink('Warehouse2', BinLocations, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-one navigation property [[item]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ITEM = new v4_1.OneToOneLink('Item', BinLocations, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.ITEM_GROUPS = new v4_1.OneToOneLink('ItemGroups', BinLocations, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-one navigation property [[weightMeasure]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.WEIGHT_MEASURE = new v4_1.OneToOneLink('WeightMeasure', BinLocations, WeightMeasures_1.WeightMeasures);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurement]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.UNIT_OF_MEASUREMENT = new v4_1.OneToOneLink('UnitOfMeasurement', BinLocations, UnitOfMeasurements_1.UnitOfMeasurements);
    /**
     * Static representation of the one-to-one navigation property [[unitOfMeasurementGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BinLocations.UNIT_OF_MEASUREMENT_GROUP = new v4_1.OneToOneLink('UnitOfMeasurementGroup', BinLocations, UnitOfMeasurementGroups_1.UnitOfMeasurementGroups);
    /**
     * All fields of the BinLocations entity.
     */
    BinLocations._allFields = [
        BinLocations.ABS_ENTRY,
        BinLocations.WAREHOUSE,
        BinLocations.SUBLEVEL_1,
        BinLocations.SUBLEVEL_2,
        BinLocations.SUBLEVEL_3,
        BinLocations.SUBLEVEL_4,
        BinLocations.BIN_CODE,
        BinLocations.DESCRIPTION,
        BinLocations.ALTERNATIVE_SORT_CODE,
        BinLocations.BAR_CODE,
        BinLocations.ATTRIBUTE_1,
        BinLocations.ATTRIBUTE_2,
        BinLocations.ATTRIBUTE_3,
        BinLocations.ATTRIBUTE_4,
        BinLocations.ATTRIBUTE_5,
        BinLocations.ATTRIBUTE_6,
        BinLocations.ATTRIBUTE_7,
        BinLocations.ATTRIBUTE_8,
        BinLocations.ATTRIBUTE_9,
        BinLocations.ATTRIBUTE_10,
        BinLocations.SPECIFIC_ITEM,
        BinLocations.SPECIFIC_ITEM_GROUP,
        BinLocations.RESTRICTION_REASON,
        BinLocations.DATE_RESTRICTION_CHANGED,
        BinLocations.MINIMUM_QTY,
        BinLocations.MAXIMUM_QTY,
        BinLocations.MAXIMUM_WEIGHT,
        BinLocations.MAXIMUM_WEIGHT_1,
        BinLocations.MAXIMUM_WEIGHT_UNIT,
        BinLocations.MAXIMUM_WEIGHT_UNIT_1,
        BinLocations.SPECIFIC_UO_M,
        BinLocations.SPECIFIC_UO_M_GROUP,
        BinLocations.WAREHOUSES,
        BinLocations.WAREHOUSE_2,
        BinLocations.ITEM,
        BinLocations.ITEM_GROUPS,
        BinLocations.WEIGHT_MEASURE,
        BinLocations.UNIT_OF_MEASUREMENT,
        BinLocations.UNIT_OF_MEASUREMENT_GROUP
    ];
    /**
     * All fields selector.
     */
    BinLocations.ALL_FIELDS = new v4_1.AllFields('*', BinLocations);
    /**
     * All key fields of the BinLocations entity.
     */
    BinLocations._keyFields = [BinLocations.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property BinLocations.
     */
    BinLocations._keys = BinLocations._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BinLocations = exports.BinLocations || (exports.BinLocations = {}));
exports.BinLocations = BinLocations;
//# sourceMappingURL=BinLocations.js.map