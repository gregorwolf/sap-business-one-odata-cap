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
exports.DnfCodeSetup = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DnfCodeSetupRequestBuilder_1 = require("./DnfCodeSetupRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DNFCodeSetup" of service "SAPB1".
 */
var DnfCodeSetup = /** @class */ (function (_super) {
    __extends(DnfCodeSetup, _super);
    function DnfCodeSetup() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DnfCodeSetup`.
     * @returns A builder that constructs instances of entity type `DnfCodeSetup`.
     */
    DnfCodeSetup.builder = function () {
        return v4_1.Entity.entityBuilder(DnfCodeSetup);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DnfCodeSetup` entity type.
     * @returns A `DnfCodeSetup` request builder.
     */
    DnfCodeSetup.requestBuilder = function () {
        return new DnfCodeSetupRequestBuilder_1.DnfCodeSetupRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DnfCodeSetup`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DnfCodeSetup`.
     */
    DnfCodeSetup.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DnfCodeSetup);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DnfCodeSetup.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DnfCodeSetup.
     */
    DnfCodeSetup._entityName = 'DNFCodeSetup';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DnfCodeSetup.
     */
    DnfCodeSetup._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DnfCodeSetup._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DnfCodeSetup;
}(v4_1.Entity));
exports.DnfCodeSetup = DnfCodeSetup;
var Items_1 = require("./Items");
var NcmCodesSetup_1 = require("./NcmCodesSetup");
(function (DnfCodeSetup) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.ABS_ENTRY = new v4_1.NumberField('AbsEntry', DnfCodeSetup, 'Edm.Int32');
    /**
     * Static representation of the [[ncmCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.NCM_CODE = new v4_1.NumberField('NCMCode', DnfCodeSetup, 'Edm.Int32');
    /**
     * Static representation of the [[dnfCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.DNF_CODE = new v4_1.StringField('DNFCode', DnfCodeSetup, 'Edm.String');
    /**
     * Static representation of the [[uoM]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.UO_M = new v4_1.StringField('UoM', DnfCodeSetup, 'Edm.String');
    /**
     * Static representation of the [[factor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.FACTOR = new v4_1.NumberField('Factor', DnfCodeSetup, 'Edm.Double');
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.ITEMS = new v4_1.OneToManyLink('Items', DnfCodeSetup, Items_1.Items);
    /**
     * Static representation of the one-to-one navigation property [[ncmCodeSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DnfCodeSetup.NCM_CODE_SETUP = new v4_1.OneToOneLink('NCMCodeSetup', DnfCodeSetup, NcmCodesSetup_1.NcmCodesSetup);
    /**
     * All fields of the DnfCodeSetup entity.
     */
    DnfCodeSetup._allFields = [
        DnfCodeSetup.ABS_ENTRY,
        DnfCodeSetup.NCM_CODE,
        DnfCodeSetup.DNF_CODE,
        DnfCodeSetup.UO_M,
        DnfCodeSetup.FACTOR,
        DnfCodeSetup.ITEMS,
        DnfCodeSetup.NCM_CODE_SETUP
    ];
    /**
     * All fields selector.
     */
    DnfCodeSetup.ALL_FIELDS = new v4_1.AllFields('*', DnfCodeSetup);
    /**
     * All key fields of the DnfCodeSetup entity.
     */
    DnfCodeSetup._keyFields = [DnfCodeSetup.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property DnfCodeSetup.
     */
    DnfCodeSetup._keys = DnfCodeSetup._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DnfCodeSetup = exports.DnfCodeSetup || (exports.DnfCodeSetup = {}));
exports.DnfCodeSetup = DnfCodeSetup;
//# sourceMappingURL=DnfCodeSetup.js.map