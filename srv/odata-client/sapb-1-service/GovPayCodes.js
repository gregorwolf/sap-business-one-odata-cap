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
exports.GovPayCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var GovPayCodesRequestBuilder_1 = require("./GovPayCodesRequestBuilder");
var GovPayCodeAuthority_1 = require("./GovPayCodeAuthority");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "GovPayCodes" of service "SAPB1".
 */
var GovPayCodes = /** @class */ (function (_super) {
    __extends(GovPayCodes, _super);
    function GovPayCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `GovPayCodes`.
     * @returns A builder that constructs instances of entity type `GovPayCodes`.
     */
    GovPayCodes.builder = function () {
        return v4_1.Entity.entityBuilder(GovPayCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `GovPayCodes` entity type.
     * @returns A `GovPayCodes` request builder.
     */
    GovPayCodes.requestBuilder = function () {
        return new GovPayCodesRequestBuilder_1.GovPayCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `GovPayCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `GovPayCodes`.
     */
    GovPayCodes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, GovPayCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    GovPayCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for GovPayCodes.
     */
    GovPayCodes._entityName = 'GovPayCodes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for GovPayCodes.
     */
    GovPayCodes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    GovPayCodes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return GovPayCodes;
}(v4_1.Entity));
exports.GovPayCodes = GovPayCodes;
var NfTaxCategories_1 = require("./NfTaxCategories");
(function (GovPayCodes) {
    /**
     * Static representation of the [[absId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GovPayCodes.ABS_ID = new v4_1.NumberField('AbsId', GovPayCodes, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GovPayCodes.CODE = new v4_1.StringField('Code', GovPayCodes, 'Edm.String');
    /**
     * Static representation of the [[descr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GovPayCodes.DESCR = new v4_1.StringField('Descr', GovPayCodes, 'Edm.String');
    /**
     * Static representation of the [[govPayCodeAuthorities]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GovPayCodes.GOV_PAY_CODE_AUTHORITIES = new v4_1.CollectionField('GovPayCodeAuthorities', GovPayCodes, new GovPayCodeAuthority_1.GovPayCodeAuthorityField('', GovPayCodes));
    /**
     * Static representation of the one-to-many navigation property [[nfTaxCategories]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    GovPayCodes.NF_TAX_CATEGORIES = new v4_1.OneToManyLink('NFTaxCategories', GovPayCodes, NfTaxCategories_1.NfTaxCategories);
    /**
     * All fields of the GovPayCodes entity.
     */
    GovPayCodes._allFields = [
        GovPayCodes.ABS_ID,
        GovPayCodes.CODE,
        GovPayCodes.DESCR,
        GovPayCodes.GOV_PAY_CODE_AUTHORITIES,
        GovPayCodes.NF_TAX_CATEGORIES
    ];
    /**
     * All fields selector.
     */
    GovPayCodes.ALL_FIELDS = new v4_1.AllFields('*', GovPayCodes);
    /**
     * All key fields of the GovPayCodes entity.
     */
    GovPayCodes._keyFields = [GovPayCodes.ABS_ID];
    /**
     * Mapping of all key field names to the respective static field property GovPayCodes.
     */
    GovPayCodes._keys = GovPayCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(GovPayCodes = exports.GovPayCodes || (exports.GovPayCodes = {}));
exports.GovPayCodes = GovPayCodes;
//# sourceMappingURL=GovPayCodes.js.map