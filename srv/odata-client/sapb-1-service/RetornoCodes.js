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
exports.RetornoCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var RetornoCodesRequestBuilder_1 = require("./RetornoCodesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "RetornoCodes" of service "SAPB1".
 */
var RetornoCodes = /** @class */ (function (_super) {
    __extends(RetornoCodes, _super);
    function RetornoCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `RetornoCodes`.
     * @returns A builder that constructs instances of entity type `RetornoCodes`.
     */
    RetornoCodes.builder = function () {
        return core_1.EntityV4.entityBuilder(RetornoCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `RetornoCodes` entity type.
     * @returns A `RetornoCodes` request builder.
     */
    RetornoCodes.requestBuilder = function () {
        return new RetornoCodesRequestBuilder_1.RetornoCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RetornoCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RetornoCodes`.
     */
    RetornoCodes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, RetornoCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    RetornoCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for RetornoCodes.
     */
    RetornoCodes._entityName = 'RetornoCodes';
    /**
     * Default url path for the according service.
     */
    RetornoCodes._defaultServicePath = '/b1s/v2/';
    return RetornoCodes;
}(core_1.EntityV4));
exports.RetornoCodes = RetornoCodes;
(function (RetornoCodes) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.ABS_ENTRY = new core_1.NumberField('AbsEntry', RetornoCodes, 'Edm.Int32');
    /**
     * Static representation of the [[occurenceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.OCCURENCE_CODE = new core_1.NumberField('OccurenceCode', RetornoCodes, 'Edm.Int32');
    /**
     * Static representation of the [[movementCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.MOVEMENT_CODE = new core_1.NumberField('MovementCode', RetornoCodes, 'Edm.Int32');
    /**
     * Static representation of the [[boeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.BOE_STATUS = new core_1.EnumField('BoeStatus', RetornoCodes);
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.DESCRIPTION = new core_1.StringField('Description', RetornoCodes, 'Edm.String');
    /**
     * Static representation of the [[color]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.COLOR = new core_1.NumberField('Color', RetornoCodes, 'Edm.Int32');
    /**
     * Static representation of the [[fileFormat]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.FILE_FORMAT = new core_1.StringField('FileFormat', RetornoCodes, 'Edm.String');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    RetornoCodes.BANK_CODE = new core_1.StringField('BankCode', RetornoCodes, 'Edm.String');
    /**
     * All fields of the RetornoCodes entity.
     */
    RetornoCodes._allFields = [
        RetornoCodes.ABS_ENTRY,
        RetornoCodes.OCCURENCE_CODE,
        RetornoCodes.MOVEMENT_CODE,
        RetornoCodes.BOE_STATUS,
        RetornoCodes.DESCRIPTION,
        RetornoCodes.COLOR,
        RetornoCodes.FILE_FORMAT,
        RetornoCodes.BANK_CODE
    ];
    /**
     * All fields selector.
     */
    RetornoCodes.ALL_FIELDS = new core_1.AllFields('*', RetornoCodes);
    /**
     * All key fields of the RetornoCodes entity.
     */
    RetornoCodes._keyFields = [RetornoCodes.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property RetornoCodes.
     */
    RetornoCodes._keys = RetornoCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(RetornoCodes = exports.RetornoCodes || (exports.RetornoCodes = {}));
exports.RetornoCodes = RetornoCodes;
//# sourceMappingURL=RetornoCodes.js.map