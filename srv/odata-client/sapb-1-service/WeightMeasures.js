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
exports.WeightMeasures = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var WeightMeasuresRequestBuilder_1 = require("./WeightMeasuresRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "WeightMeasures" of service "SAPB1".
 */
var WeightMeasures = /** @class */ (function (_super) {
    __extends(WeightMeasures, _super);
    function WeightMeasures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `WeightMeasures`.
     * @returns A builder that constructs instances of entity type `WeightMeasures`.
     */
    WeightMeasures.builder = function () {
        return core_1.EntityV4.entityBuilder(WeightMeasures);
    };
    /**
     * Returns a request builder to construct requests for operations on the `WeightMeasures` entity type.
     * @returns A `WeightMeasures` request builder.
     */
    WeightMeasures.requestBuilder = function () {
        return new WeightMeasuresRequestBuilder_1.WeightMeasuresRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WeightMeasures`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WeightMeasures`.
     */
    WeightMeasures.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, WeightMeasures);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    WeightMeasures.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for WeightMeasures.
     */
    WeightMeasures._entityName = 'WeightMeasures';
    /**
     * Default url path for the according service.
     */
    WeightMeasures._defaultServicePath = '/b1s/v2/';
    return WeightMeasures;
}(core_1.EntityV4));
exports.WeightMeasures = WeightMeasures;
var BinLocations_1 = require("./BinLocations");
(function (WeightMeasures) {
    /**
     * Static representation of the [[unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightMeasures.UNIT_CODE = new core_1.NumberField('UnitCode', WeightMeasures, 'Edm.Int32');
    /**
     * Static representation of the [[unitDisplay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightMeasures.UNIT_DISPLAY = new core_1.StringField('UnitDisplay', WeightMeasures, 'Edm.String');
    /**
     * Static representation of the [[unitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightMeasures.UNIT_NAME = new core_1.StringField('UnitName', WeightMeasures, 'Edm.String');
    /**
     * Static representation of the [[unitWeightinmg]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightMeasures.UNIT_WEIGHTINMG = new core_1.NumberField('UnitWeightinmg', WeightMeasures, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[binLocations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WeightMeasures.BIN_LOCATIONS = new core_1.OneToManyLink('BinLocations', WeightMeasures, BinLocations_1.BinLocations);
    /**
     * All fields of the WeightMeasures entity.
     */
    WeightMeasures._allFields = [
        WeightMeasures.UNIT_CODE,
        WeightMeasures.UNIT_DISPLAY,
        WeightMeasures.UNIT_NAME,
        WeightMeasures.UNIT_WEIGHTINMG,
        WeightMeasures.BIN_LOCATIONS
    ];
    /**
     * All fields selector.
     */
    WeightMeasures.ALL_FIELDS = new core_1.AllFields('*', WeightMeasures);
    /**
     * All key fields of the WeightMeasures entity.
     */
    WeightMeasures._keyFields = [WeightMeasures.UNIT_CODE];
    /**
     * Mapping of all key field names to the respective static field property WeightMeasures.
     */
    WeightMeasures._keys = WeightMeasures._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(WeightMeasures = exports.WeightMeasures || (exports.WeightMeasures = {}));
exports.WeightMeasures = WeightMeasures;
//# sourceMappingURL=WeightMeasures.js.map