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
exports.NcmCodesSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var NcmCodesSetupRequestBuilder_1 = require("./NcmCodesSetupRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "NCMCodesSetup" of service "SAPB1".
 */
var NcmCodesSetup = /** @class */ (function (_super) {
    __extends(NcmCodesSetup, _super);
    function NcmCodesSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `NcmCodesSetup`.
     * @returns A builder that constructs instances of entity type `NcmCodesSetup`.
     */
    NcmCodesSetup.builder = function () {
        return v4_1.Entity.entityBuilder(NcmCodesSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NcmCodesSetup` entity type.
     * @returns A `NcmCodesSetup` request builder.
     */
    NcmCodesSetup.requestBuilder = function () {
        return new NcmCodesSetupRequestBuilder_1.NcmCodesSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NcmCodesSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NcmCodesSetup`.
     */
    NcmCodesSetup.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, NcmCodesSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NcmCodesSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NcmCodesSetup.
     */
    NcmCodesSetup._entityName = 'NCMCodesSetup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NcmCodesSetup.
     */
    NcmCodesSetup._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    NcmCodesSetup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return NcmCodesSetup;
}(v4_1.Entity));
exports.NcmCodesSetup = NcmCodesSetup;
var Items_1 = require("./Items");
var DnfCodeSetup_1 = require("./DnfCodeSetup");
(function (NcmCodesSetup) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NcmCodesSetup.ABS_ENTRY = new v4_1.NumberField('AbsEntry', NcmCodesSetup, 'Edm.Int32');
    /**
     * Static representation of the [[ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NcmCodesSetup.NCM_CODE = new v4_1.StringField('NCMCode', NcmCodesSetup, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NcmCodesSetup.DESCRIPTION = new v4_1.StringField('Description', NcmCodesSetup, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NcmCodesSetup.ITEMS = new v4_1.OneToManyLink('Items', NcmCodesSetup, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[dnfCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NcmCodesSetup.DNF_CODE_SETUP = new v4_1.OneToManyLink('DNFCodeSetup', NcmCodesSetup, DnfCodeSetup_1.DnfCodeSetup);
    /**
     * All fields of the NcmCodesSetup entity.
     */
    NcmCodesSetup._allFields = [
        NcmCodesSetup.ABS_ENTRY,
        NcmCodesSetup.NCM_CODE,
        NcmCodesSetup.DESCRIPTION,
        NcmCodesSetup.ITEMS,
        NcmCodesSetup.DNF_CODE_SETUP
    ];
    /**
     * All fields selector.
     */
    NcmCodesSetup.ALL_FIELDS = new v4_1.AllFields('*', NcmCodesSetup);
    /**
     * All key fields of the NcmCodesSetup entity.
     */
    NcmCodesSetup._keyFields = [NcmCodesSetup.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property NcmCodesSetup.
     */
    NcmCodesSetup._keys = NcmCodesSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NcmCodesSetup = exports.NcmCodesSetup || (exports.NcmCodesSetup = {}));
exports.NcmCodesSetup = NcmCodesSetup;
//# sourceMappingURL=NcmCodesSetup.js.map