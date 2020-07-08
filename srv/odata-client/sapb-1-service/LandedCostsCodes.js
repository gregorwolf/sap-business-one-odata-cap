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
exports.LandedCostsCodes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var LandedCostsCodesRequestBuilder_1 = require("./LandedCostsCodesRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "LandedCostsCodes" of service "SAPB1".
 */
var LandedCostsCodes = /** @class */ (function (_super) {
    __extends(LandedCostsCodes, _super);
    function LandedCostsCodes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `LandedCostsCodes`.
     * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
     */
    LandedCostsCodes.builder = function () {
        return v4_1.Entity.entityBuilder(LandedCostsCodes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `LandedCostsCodes` entity type.
     * @returns A `LandedCostsCodes` request builder.
     */
    LandedCostsCodes.requestBuilder = function () {
        return new LandedCostsCodesRequestBuilder_1.LandedCostsCodesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LandedCostsCodes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LandedCostsCodes`.
     */
    LandedCostsCodes.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, LandedCostsCodes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    LandedCostsCodes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for LandedCostsCodes.
     */
    LandedCostsCodes._entityName = 'LandedCostsCodes';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LandedCostsCodes.
     */
    LandedCostsCodes._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    LandedCostsCodes._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return LandedCostsCodes;
}(v4_1.Entity));
exports.LandedCostsCodes = LandedCostsCodes;
(function (LandedCostsCodes) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCostsCodes.CODE = new v4_1.StringField('Code', LandedCostsCodes, 'Edm.String');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCostsCodes.NAME = new v4_1.StringField('Name', LandedCostsCodes, 'Edm.String');
    /**
     * Static representation of the [[landedCostsAllocationAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LandedCostsCodes.LANDED_COSTS_ALLOCATION_ACCOUNT = new v4_1.StringField('LandedCostsAllocationAccount', LandedCostsCodes, 'Edm.String');
    /**
     * All fields of the LandedCostsCodes entity.
     */
    LandedCostsCodes._allFields = [
        LandedCostsCodes.CODE,
        LandedCostsCodes.NAME,
        LandedCostsCodes.LANDED_COSTS_ALLOCATION_ACCOUNT
    ];
    /**
     * All fields selector.
     */
    LandedCostsCodes.ALL_FIELDS = new v4_1.AllFields('*', LandedCostsCodes);
    /**
     * All key fields of the LandedCostsCodes entity.
     */
    LandedCostsCodes._keyFields = [LandedCostsCodes.CODE];
    /**
     * Mapping of all key field names to the respective static field property LandedCostsCodes.
     */
    LandedCostsCodes._keys = LandedCostsCodes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(LandedCostsCodes = exports.LandedCostsCodes || (exports.LandedCostsCodes = {}));
exports.LandedCostsCodes = LandedCostsCodes;
//# sourceMappingURL=LandedCostsCodes.js.map