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
exports.LengthMeasures = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LengthMeasuresRequestBuilder_1 = require("./LengthMeasuresRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "LengthMeasures" of service "SAPB1".
 */
var LengthMeasures = /** @class */ (function (_super) {
    __extends(LengthMeasures, _super);
    function LengthMeasures() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `LengthMeasures`.
     * @returns A builder that constructs instances of entity type `LengthMeasures`.
     */
    LengthMeasures.builder = function () {
        return core_1.EntityV4.entityBuilder(LengthMeasures);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LengthMeasures` entity type.
     * @returns A `LengthMeasures` request builder.
     */
    LengthMeasures.requestBuilder = function () {
        return new LengthMeasuresRequestBuilder_1.LengthMeasuresRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LengthMeasures`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LengthMeasures`.
     */
    LengthMeasures.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, LengthMeasures);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LengthMeasures.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LengthMeasures.
     */
    LengthMeasures._entityName = 'LengthMeasures';
    /**
     * Default url path for the according service.
     */
    LengthMeasures._defaultServicePath = '/b1s/v2/';
    return LengthMeasures;
}(core_1.EntityV4));
exports.LengthMeasures = LengthMeasures;
(function (LengthMeasures) {
    /**
     * Static representation of the [[unitCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LengthMeasures.UNIT_CODE = new core_1.NumberField('UnitCode', LengthMeasures, 'Edm.Int32');
    /**
     * Static representation of the [[unitDisplay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LengthMeasures.UNIT_DISPLAY = new core_1.StringField('UnitDisplay', LengthMeasures, 'Edm.String');
    /**
     * Static representation of the [[unitName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LengthMeasures.UNIT_NAME = new core_1.StringField('UnitName', LengthMeasures, 'Edm.String');
    /**
     * Static representation of the [[unitCodeforQuantityDisplay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LengthMeasures.UNIT_CODEFOR_QUANTITY_DISPLAY = new core_1.StringField('UnitCodeforQuantityDisplay', LengthMeasures, 'Edm.String');
    /**
     * Static representation of the [[unitLengthinmm]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LengthMeasures.UNIT_LENGTHINMM = new core_1.NumberField('UnitLengthinmm', LengthMeasures, 'Edm.Double');
    /**
     * All fields of the LengthMeasures entity.
     */
    LengthMeasures._allFields = [
        LengthMeasures.UNIT_CODE,
        LengthMeasures.UNIT_DISPLAY,
        LengthMeasures.UNIT_NAME,
        LengthMeasures.UNIT_CODEFOR_QUANTITY_DISPLAY,
        LengthMeasures.UNIT_LENGTHINMM
    ];
    /**
     * All fields selector.
     */
    LengthMeasures.ALL_FIELDS = new core_1.AllFields('*', LengthMeasures);
    /**
     * All key fields of the LengthMeasures entity.
     */
    LengthMeasures._keyFields = [LengthMeasures.UNIT_CODE];
    /**
     * Mapping of all key field names to the respective static field property LengthMeasures.
     */
    LengthMeasures._keys = LengthMeasures._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LengthMeasures = exports.LengthMeasures || (exports.LengthMeasures = {}));
exports.LengthMeasures = LengthMeasures;
//# sourceMappingURL=LengthMeasures.js.map