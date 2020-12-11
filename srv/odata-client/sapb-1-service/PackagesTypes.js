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
exports.PackagesTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PackagesTypesRequestBuilder_1 = require("./PackagesTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PackagesTypes" of service "SAPB1".
 */
var PackagesTypes = /** @class */ (function (_super) {
    __extends(PackagesTypes, _super);
    function PackagesTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `PackagesTypes`.
     * @returns A builder that constructs instances of entity type `PackagesTypes`.
     */
    PackagesTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(PackagesTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PackagesTypes` entity type.
     * @returns A `PackagesTypes` request builder.
     */
    PackagesTypes.requestBuilder = function () {
        return new PackagesTypesRequestBuilder_1.PackagesTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PackagesTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PackagesTypes`.
     */
    PackagesTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, PackagesTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PackagesTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PackagesTypes.
     */
    PackagesTypes._entityName = 'PackagesTypes';
    /**
     * Default url path for the according service.
     */
    PackagesTypes._defaultServicePath = '/b1s/v2/';
    return PackagesTypes;
}(core_1.EntityV4));
exports.PackagesTypes = PackagesTypes;
(function (PackagesTypes) {
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.TYPE = new core_1.StringField('Type', PackagesTypes, 'Edm.String');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.CODE = new core_1.NumberField('Code', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[length1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.LENGTH_1 = new core_1.NumberField('Length1', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[length1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.LENGTH_1_UNIT = new core_1.NumberField('Length1Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[length2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.LENGTH_2 = new core_1.NumberField('Length2', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[length2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.LENGTH_2_UNIT = new core_1.NumberField('Length2Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[width1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WIDTH_1 = new core_1.NumberField('Width1', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[width1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WIDTH_1_UNIT = new core_1.NumberField('Width1Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[width2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WIDTH_2 = new core_1.NumberField('Width2', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[width2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WIDTH_2_UNIT = new core_1.NumberField('Width2Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[height1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.HEIGHT_1 = new core_1.NumberField('Height1', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[height1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.HEIGHT_1_UNIT = new core_1.NumberField('Height1Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[height2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.HEIGHT_2 = new core_1.NumberField('Height2', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[height2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.HEIGHT_2_UNIT = new core_1.NumberField('Height2Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[volume]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.VOLUME = new core_1.NumberField('Volume', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[volumeUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.VOLUME_UNIT = new core_1.NumberField('VolumeUnit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[weight1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WEIGHT_1 = new core_1.NumberField('Weight1', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[weight1Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WEIGHT_1_UNIT = new core_1.NumberField('Weight1Unit', PackagesTypes, 'Edm.Int32');
    /**
     * Static representation of the [[weight2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WEIGHT_2 = new core_1.NumberField('Weight2', PackagesTypes, 'Edm.Double');
    /**
     * Static representation of the [[weight2Unit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PackagesTypes.WEIGHT_2_UNIT = new core_1.NumberField('Weight2Unit', PackagesTypes, 'Edm.Int32');
    /**
     * All fields of the PackagesTypes entity.
     */
    PackagesTypes._allFields = [
        PackagesTypes.TYPE,
        PackagesTypes.CODE,
        PackagesTypes.LENGTH_1,
        PackagesTypes.LENGTH_1_UNIT,
        PackagesTypes.LENGTH_2,
        PackagesTypes.LENGTH_2_UNIT,
        PackagesTypes.WIDTH_1,
        PackagesTypes.WIDTH_1_UNIT,
        PackagesTypes.WIDTH_2,
        PackagesTypes.WIDTH_2_UNIT,
        PackagesTypes.HEIGHT_1,
        PackagesTypes.HEIGHT_1_UNIT,
        PackagesTypes.HEIGHT_2,
        PackagesTypes.HEIGHT_2_UNIT,
        PackagesTypes.VOLUME,
        PackagesTypes.VOLUME_UNIT,
        PackagesTypes.WEIGHT_1,
        PackagesTypes.WEIGHT_1_UNIT,
        PackagesTypes.WEIGHT_2,
        PackagesTypes.WEIGHT_2_UNIT
    ];
    /**
     * All fields selector.
     */
    PackagesTypes.ALL_FIELDS = new core_1.AllFields('*', PackagesTypes);
    /**
     * All key fields of the PackagesTypes entity.
     */
    PackagesTypes._keyFields = [PackagesTypes.CODE];
    /**
     * Mapping of all key field names to the respective static field property PackagesTypes.
     */
    PackagesTypes._keys = PackagesTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PackagesTypes = exports.PackagesTypes || (exports.PackagesTypes = {}));
exports.PackagesTypes = PackagesTypes;
//# sourceMappingURL=PackagesTypes.js.map