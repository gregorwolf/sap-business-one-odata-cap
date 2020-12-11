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
exports.UnitOfMeasurements = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UnitOfMeasurementsRequestBuilder_1 = require("./UnitOfMeasurementsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "UnitOfMeasurements" of service "SAPB1".
 */
var UnitOfMeasurements = /** @class */ (function (_super) {
    __extends(UnitOfMeasurements, _super);
    function UnitOfMeasurements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `UnitOfMeasurements`.
     * @returns A builder that constructs instances of entity type `UnitOfMeasurements`.
     */
    UnitOfMeasurements.builder = function () {
        return core_1.EntityV4.entityBuilder(UnitOfMeasurements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `UnitOfMeasurements` entity type.
     * @returns A `UnitOfMeasurements` request builder.
     */
    UnitOfMeasurements.requestBuilder = function () {
        return new UnitOfMeasurementsRequestBuilder_1.UnitOfMeasurementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UnitOfMeasurements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UnitOfMeasurements`.
     */
    UnitOfMeasurements.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, UnitOfMeasurements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    UnitOfMeasurements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for UnitOfMeasurements.
     */
    UnitOfMeasurements._entityName = 'UnitOfMeasurements';
    /**
     * Default url path for the according service.
     */
    UnitOfMeasurements._defaultServicePath = '/b1s/v2/';
    return UnitOfMeasurements;
}(core_1.EntityV4));
exports.UnitOfMeasurements = UnitOfMeasurements;
var ItemGroups_1 = require("./ItemGroups");
var Items_1 = require("./Items");
var ProductionOrders_1 = require("./ProductionOrders");
var UnitOfMeasurementGroups_1 = require("./UnitOfMeasurementGroups");
var BarCodes_1 = require("./BarCodes");
var BinLocations_1 = require("./BinLocations");
(function (UnitOfMeasurements) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.ABS_ENTRY = new core_1.NumberField('AbsEntry', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.CODE = new core_1.StringField('Code', UnitOfMeasurements, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.NAME = new core_1.StringField('Name', UnitOfMeasurements, 'Edm.String');
    /**
     * Static representation of the [[length1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.LENGTH_1 = new core_1.NumberField('Length1', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[length1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.LENGTH_1_UNIT = new core_1.NumberField('Length1Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[length2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.LENGTH_2 = new core_1.NumberField('Length2', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[length2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.LENGTH_2_UNIT = new core_1.NumberField('Length2Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[width1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WIDTH_1 = new core_1.NumberField('Width1', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WIDTH_1_UNIT = new core_1.NumberField('Width1Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[width2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WIDTH_2 = new core_1.NumberField('Width2', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WIDTH_2_UNIT = new core_1.NumberField('Width2Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[height1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.HEIGHT_1 = new core_1.NumberField('Height1', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[height1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.HEIGHT_1_UNIT = new core_1.NumberField('Height1Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[height2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.HEIGHT_2 = new core_1.NumberField('Height2', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.HEIGHT_2_UNIT = new core_1.NumberField('Height2Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[volume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.VOLUME = new core_1.NumberField('Volume', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.VOLUME_UNIT = new core_1.NumberField('VolumeUnit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[weight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WEIGHT_1 = new core_1.NumberField('Weight1', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WEIGHT_1_UNIT = new core_1.NumberField('Weight1Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[weight2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WEIGHT_2 = new core_1.NumberField('Weight2', UnitOfMeasurements, 'Edm.Double');
    /**
     * Static representation of the [[weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.WEIGHT_2_UNIT = new core_1.NumberField('Weight2Unit', UnitOfMeasurements, 'Edm.Int32');
    /**
     * Static representation of the [[internationalSymbol]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.INTERNATIONAL_SYMBOL = new core_1.StringField('InternationalSymbol', UnitOfMeasurements, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[itemGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.ITEM_GROUPS = new core_1.OneToManyLink('ItemGroups', UnitOfMeasurements, ItemGroups_1.ItemGroups);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.ITEMS = new core_1.OneToManyLink('Items', UnitOfMeasurements, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.PRODUCTION_ORDERS = new core_1.OneToManyLink('ProductionOrders', UnitOfMeasurements, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[unitOfMeasurementGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.UNIT_OF_MEASUREMENT_GROUPS = new core_1.OneToManyLink('UnitOfMeasurementGroups', UnitOfMeasurements, UnitOfMeasurementGroups_1.UnitOfMeasurementGroups);
    /**
     * Static representation of the one-to-many navigation property [[barCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.BAR_CODES = new core_1.OneToManyLink('BarCodes', UnitOfMeasurements, BarCodes_1.BarCodes);
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    UnitOfMeasurements.BIN_LOCATIONS = new core_1.OneToManyLink('BinLocations', UnitOfMeasurements, BinLocations_1.BinLocations);
    /**
     * All fields of the UnitOfMeasurements entity.
     */
    UnitOfMeasurements._allFields = [
        UnitOfMeasurements.ABS_ENTRY,
        UnitOfMeasurements.CODE,
        UnitOfMeasurements.NAME,
        UnitOfMeasurements.LENGTH_1,
        UnitOfMeasurements.LENGTH_1_UNIT,
        UnitOfMeasurements.LENGTH_2,
        UnitOfMeasurements.LENGTH_2_UNIT,
        UnitOfMeasurements.WIDTH_1,
        UnitOfMeasurements.WIDTH_1_UNIT,
        UnitOfMeasurements.WIDTH_2,
        UnitOfMeasurements.WIDTH_2_UNIT,
        UnitOfMeasurements.HEIGHT_1,
        UnitOfMeasurements.HEIGHT_1_UNIT,
        UnitOfMeasurements.HEIGHT_2,
        UnitOfMeasurements.HEIGHT_2_UNIT,
        UnitOfMeasurements.VOLUME,
        UnitOfMeasurements.VOLUME_UNIT,
        UnitOfMeasurements.WEIGHT_1,
        UnitOfMeasurements.WEIGHT_1_UNIT,
        UnitOfMeasurements.WEIGHT_2,
        UnitOfMeasurements.WEIGHT_2_UNIT,
        UnitOfMeasurements.INTERNATIONAL_SYMBOL,
        UnitOfMeasurements.ITEM_GROUPS,
        UnitOfMeasurements.ITEMS,
        UnitOfMeasurements.PRODUCTION_ORDERS,
        UnitOfMeasurements.UNIT_OF_MEASUREMENT_GROUPS,
        UnitOfMeasurements.BAR_CODES,
        UnitOfMeasurements.BIN_LOCATIONS
    ];
    /**
     * All fields selector.
     */
    UnitOfMeasurements.ALL_FIELDS = new core_1.AllFields('*', UnitOfMeasurements);
    /**
     * All key fields of the UnitOfMeasurements entity.
     */
    UnitOfMeasurements._keyFields = [UnitOfMeasurements.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property UnitOfMeasurements.
     */
    UnitOfMeasurements._keys = UnitOfMeasurements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(UnitOfMeasurements = exports.UnitOfMeasurements || (exports.UnitOfMeasurements = {}));
exports.UnitOfMeasurements = UnitOfMeasurements;
//# sourceMappingURL=UnitOfMeasurements.js.map