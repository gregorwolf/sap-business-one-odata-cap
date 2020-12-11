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
exports.DeductionTaxSubGroups = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DeductionTaxSubGroupsRequestBuilder_1 = require("./DeductionTaxSubGroupsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DeductionTaxSubGroups" of service "SAPB1".
 */
var DeductionTaxSubGroups = /** @class */ (function (_super) {
    __extends(DeductionTaxSubGroups, _super);
    function DeductionTaxSubGroups() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `DeductionTaxSubGroups`.
     * @returns A builder that constructs instances of entity type `DeductionTaxSubGroups`.
     */
    DeductionTaxSubGroups.builder = function () {
        return core_1.EntityV4.entityBuilder(DeductionTaxSubGroups);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DeductionTaxSubGroups` entity type.
     * @returns A `DeductionTaxSubGroups` request builder.
     */
    DeductionTaxSubGroups.requestBuilder = function () {
        return new DeductionTaxSubGroupsRequestBuilder_1.DeductionTaxSubGroupsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DeductionTaxSubGroups`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DeductionTaxSubGroups`.
     */
    DeductionTaxSubGroups.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, DeductionTaxSubGroups);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DeductionTaxSubGroups.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DeductionTaxSubGroups.
     */
    DeductionTaxSubGroups._entityName = 'DeductionTaxSubGroups';
    /**
     * Default url path for the according service.
     */
    DeductionTaxSubGroups._defaultServicePath = '/b1s/v2/';
    return DeductionTaxSubGroups;
}(core_1.EntityV4));
exports.DeductionTaxSubGroups = DeductionTaxSubGroups;
var DeductionTaxGroups_1 = require("./DeductionTaxGroups");
(function (DeductionTaxSubGroups) {
    /**
     * Static representation of the [[groupCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxSubGroups.GROUP_CODE = new core_1.StringField('GroupCode', DeductionTaxSubGroups, 'Edm.String');
    /**
     * Static representation of the [[groupName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxSubGroups.GROUP_NAME = new core_1.StringField('GroupName', DeductionTaxSubGroups, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[deductionTaxGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DeductionTaxSubGroups.DEDUCTION_TAX_GROUPS = new core_1.OneToManyLink('DeductionTaxGroups', DeductionTaxSubGroups, DeductionTaxGroups_1.DeductionTaxGroups);
    /**
     * All fields of the DeductionTaxSubGroups entity.
     */
    DeductionTaxSubGroups._allFields = [
        DeductionTaxSubGroups.GROUP_CODE,
        DeductionTaxSubGroups.GROUP_NAME,
        DeductionTaxSubGroups.DEDUCTION_TAX_GROUPS
    ];
    /**
     * All fields selector.
     */
    DeductionTaxSubGroups.ALL_FIELDS = new core_1.AllFields('*', DeductionTaxSubGroups);
    /**
     * All key fields of the DeductionTaxSubGroups entity.
     */
    DeductionTaxSubGroups._keyFields = [DeductionTaxSubGroups.GROUP_CODE];
    /**
     * Mapping of all key field names to the respective static field property DeductionTaxSubGroups.
     */
    DeductionTaxSubGroups._keys = DeductionTaxSubGroups._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DeductionTaxSubGroups = exports.DeductionTaxSubGroups || (exports.DeductionTaxSubGroups = {}));
exports.DeductionTaxSubGroups = DeductionTaxSubGroups;
//# sourceMappingURL=DeductionTaxSubGroups.js.map