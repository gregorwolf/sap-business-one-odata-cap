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
exports.NfTaxCategories = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var NfTaxCategoriesRequestBuilder_1 = require("./NfTaxCategoriesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NFTaxCategories" of service "SAPB1".
 */
var NfTaxCategories = /** @class */ (function (_super) {
    __extends(NfTaxCategories, _super);
    function NfTaxCategories() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `NfTaxCategories`.
     * @returns A builder that constructs instances of entity type `NfTaxCategories`.
     */
    NfTaxCategories.builder = function () {
        return core_1.EntityV4.entityBuilder(NfTaxCategories);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NfTaxCategories` entity type.
     * @returns A `NfTaxCategories` request builder.
     */
    NfTaxCategories.requestBuilder = function () {
        return new NfTaxCategoriesRequestBuilder_1.NfTaxCategoriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NfTaxCategories`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NfTaxCategories`.
     */
    NfTaxCategories.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, NfTaxCategories);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NfTaxCategories.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NfTaxCategories.
     */
    NfTaxCategories._entityName = 'NFTaxCategories';
    /**
     * Default url path for the according service.
     */
    NfTaxCategories._defaultServicePath = '/b1s/v2/';
    return NfTaxCategories;
}(core_1.EntityV4));
exports.NfTaxCategories = NfTaxCategories;
var GovPayCodes_1 = require("./GovPayCodes");
(function (NfTaxCategories) {
    /**
     * Static representation of the [[absId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfTaxCategories.ABS_ID = new core_1.NumberField('AbsId', NfTaxCategories, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfTaxCategories.CODE = new core_1.StringField('Code', NfTaxCategories, 'Edm.String');
    /**
     * Static representation of the [[locked]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfTaxCategories.LOCKED = new core_1.EnumField('Locked', NfTaxCategories);
    /**
     * Static representation of the [[gpcId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfTaxCategories.GPC_ID = new core_1.NumberField('GPCId', NfTaxCategories, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[govPayCode]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NfTaxCategories.GOV_PAY_CODE = new core_1.OneToOneLink('GovPayCode', NfTaxCategories, GovPayCodes_1.GovPayCodes);
    /**
     * All fields of the NfTaxCategories entity.
     */
    NfTaxCategories._allFields = [
        NfTaxCategories.ABS_ID,
        NfTaxCategories.CODE,
        NfTaxCategories.LOCKED,
        NfTaxCategories.GPC_ID,
        NfTaxCategories.GOV_PAY_CODE
    ];
    /**
     * All fields selector.
     */
    NfTaxCategories.ALL_FIELDS = new core_1.AllFields('*', NfTaxCategories);
    /**
     * All key fields of the NfTaxCategories entity.
     */
    NfTaxCategories._keyFields = [NfTaxCategories.ABS_ID];
    /**
     * Mapping of all key field names to the respective static field property NfTaxCategories.
     */
    NfTaxCategories._keys = NfTaxCategories._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NfTaxCategories = exports.NfTaxCategories || (exports.NfTaxCategories = {}));
exports.NfTaxCategories = NfTaxCategories;
//# sourceMappingURL=NfTaxCategories.js.map