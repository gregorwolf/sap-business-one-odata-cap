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
exports.OccurrenceCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var OccurrenceCodesRequestBuilder_1 = require("./OccurrenceCodesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "OccurrenceCodes" of service "SAPB1".
 */
var OccurrenceCodes = /** @class */ (function (_super) {
    __extends(OccurrenceCodes, _super);
    function OccurrenceCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `OccurrenceCodes`.
     * @returns A builder that constructs instances of entity type `OccurrenceCodes`.
     */
    OccurrenceCodes.builder = function () {
        return core_1.EntityV4.entityBuilder(OccurrenceCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `OccurrenceCodes` entity type.
     * @returns A `OccurrenceCodes` request builder.
     */
    OccurrenceCodes.requestBuilder = function () {
        return new OccurrenceCodesRequestBuilder_1.OccurrenceCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OccurrenceCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OccurrenceCodes`.
     */
    OccurrenceCodes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, OccurrenceCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    OccurrenceCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for OccurrenceCodes.
     */
    OccurrenceCodes._entityName = 'OccurrenceCodes';
    /**
     * Default url path for the according service.
     */
    OccurrenceCodes._defaultServicePath = '/b1s/v2/';
    return OccurrenceCodes;
}(core_1.EntityV4));
exports.OccurrenceCodes = OccurrenceCodes;
(function (OccurrenceCodes) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OccurrenceCodes.ABS_ENTRY = new core_1.NumberField('AbsEntry', OccurrenceCodes, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OccurrenceCodes.CODE = new core_1.StringField('Code', OccurrenceCodes, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OccurrenceCodes.DESCRIPTION = new core_1.StringField('Description', OccurrenceCodes, 'Edm.String');
    /**
     * Static representation of the [[note]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OccurrenceCodes.NOTE = new core_1.StringField('Note', OccurrenceCodes, 'Edm.String');
    /**
     * Static representation of the [[requestedBoeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OccurrenceCodes.REQUESTED_BOE_STATUS = new core_1.EnumField('RequestedBoeStatus', OccurrenceCodes);
    /**
     * Static representation of the [[isMovement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OccurrenceCodes.IS_MOVEMENT = new core_1.EnumField('IsMovement', OccurrenceCodes);
    /**
     * All fields of the OccurrenceCodes entity.
     */
    OccurrenceCodes._allFields = [
        OccurrenceCodes.ABS_ENTRY,
        OccurrenceCodes.CODE,
        OccurrenceCodes.DESCRIPTION,
        OccurrenceCodes.NOTE,
        OccurrenceCodes.REQUESTED_BOE_STATUS,
        OccurrenceCodes.IS_MOVEMENT
    ];
    /**
     * All fields selector.
     */
    OccurrenceCodes.ALL_FIELDS = new core_1.AllFields('*', OccurrenceCodes);
    /**
     * All key fields of the OccurrenceCodes entity.
     */
    OccurrenceCodes._keyFields = [OccurrenceCodes.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property OccurrenceCodes.
     */
    OccurrenceCodes._keys = OccurrenceCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(OccurrenceCodes = exports.OccurrenceCodes || (exports.OccurrenceCodes = {}));
exports.OccurrenceCodes = OccurrenceCodes;
//# sourceMappingURL=OccurrenceCodes.js.map