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
exports.DepreciationTypePools = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DepreciationTypePoolsRequestBuilder_1 = require("./DepreciationTypePoolsRequestBuilder");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "DepreciationTypePools" of service "SAPB1".
 */
var DepreciationTypePools = /** @class */ (function (_super) {
    __extends(DepreciationTypePools, _super);
    function DepreciationTypePools() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DepreciationTypePools`.
     * @returns A builder that constructs instances of entity type `DepreciationTypePools`.
     */
    DepreciationTypePools.builder = function () {
        return v4_1.Entity.entityBuilder(DepreciationTypePools);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DepreciationTypePools` entity type.
     * @returns A `DepreciationTypePools` request builder.
     */
    DepreciationTypePools.requestBuilder = function () {
        return new DepreciationTypePoolsRequestBuilder_1.DepreciationTypePoolsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DepreciationTypePools`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DepreciationTypePools`.
     */
    DepreciationTypePools.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, DepreciationTypePools);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DepreciationTypePools.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DepreciationTypePools.
     */
    DepreciationTypePools._entityName = 'DepreciationTypePools';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DepreciationTypePools.
     */
    DepreciationTypePools._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    DepreciationTypePools._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DepreciationTypePools;
}(v4_1.Entity));
exports.DepreciationTypePools = DepreciationTypePools;
var DepreciationTypes_1 = require("./DepreciationTypes");
(function (DepreciationTypePools) {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypePools.CODE = new v4_1.StringField('Code', DepreciationTypePools, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypePools.DESCRIPTION = new v4_1.StringField('Description', DepreciationTypePools, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[depreciationTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DepreciationTypePools.DEPRECIATION_TYPES = new v4_1.OneToManyLink('DepreciationTypes', DepreciationTypePools, DepreciationTypes_1.DepreciationTypes);
    /**
     * All fields of the DepreciationTypePools entity.
     */
    DepreciationTypePools._allFields = [
        DepreciationTypePools.CODE,
        DepreciationTypePools.DESCRIPTION,
        DepreciationTypePools.DEPRECIATION_TYPES
    ];
    /**
     * All fields selector.
     */
    DepreciationTypePools.ALL_FIELDS = new v4_1.AllFields('*', DepreciationTypePools);
    /**
     * All key fields of the DepreciationTypePools entity.
     */
    DepreciationTypePools._keyFields = [DepreciationTypePools.CODE];
    /**
     * Mapping of all key field names to the respective static field property DepreciationTypePools.
     */
    DepreciationTypePools._keys = DepreciationTypePools._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DepreciationTypePools = exports.DepreciationTypePools || (exports.DepreciationTypePools = {}));
exports.DepreciationTypePools = DepreciationTypePools;
//# sourceMappingURL=DepreciationTypePools.js.map