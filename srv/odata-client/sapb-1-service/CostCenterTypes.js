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
exports.CostCenterTypes = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CostCenterTypesRequestBuilder_1 = require("./CostCenterTypesRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CostCenterTypes" of service "SAPB1".
 */
var CostCenterTypes = /** @class */ (function (_super) {
    __extends(CostCenterTypes, _super);
    function CostCenterTypes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CostCenterTypes`.
     * @returns A builder that constructs instances of entity type `CostCenterTypes`.
     */
    CostCenterTypes.builder = function () {
        return core_1.EntityV4.entityBuilder(CostCenterTypes);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CostCenterTypes` entity type.
     * @returns A `CostCenterTypes` request builder.
     */
    CostCenterTypes.requestBuilder = function () {
        return new CostCenterTypesRequestBuilder_1.CostCenterTypesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CostCenterTypes`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CostCenterTypes`.
     */
    CostCenterTypes.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CostCenterTypes);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CostCenterTypes.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CostCenterTypes.
     */
    CostCenterTypes._entityName = 'CostCenterTypes';
    /**
     * Default url path for the according service.
     */
    CostCenterTypes._defaultServicePath = '/b1s/v2/';
    return CostCenterTypes;
}(core_1.EntityV4));
exports.CostCenterTypes = CostCenterTypes;
var ProfitCenters_1 = require("./ProfitCenters");
(function (CostCenterTypes) {
    /**
     * Static representation of the [[costCenterTypeCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CostCenterTypes.COST_CENTER_TYPE_CODE = new core_1.StringField('CostCenterTypeCode', CostCenterTypes, 'Edm.String');
    /**
     * Static representation of the [[costCenterTypeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CostCenterTypes.COST_CENTER_TYPE_NAME = new core_1.StringField('CostCenterTypeName', CostCenterTypes, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CostCenterTypes.PROFIT_CENTERS = new core_1.OneToManyLink('ProfitCenters', CostCenterTypes, ProfitCenters_1.ProfitCenters);
    /**
     * All fields of the CostCenterTypes entity.
     */
    CostCenterTypes._allFields = [
        CostCenterTypes.COST_CENTER_TYPE_CODE,
        CostCenterTypes.COST_CENTER_TYPE_NAME,
        CostCenterTypes.PROFIT_CENTERS
    ];
    /**
     * All fields selector.
     */
    CostCenterTypes.ALL_FIELDS = new core_1.AllFields('*', CostCenterTypes);
    /**
     * All key fields of the CostCenterTypes entity.
     */
    CostCenterTypes._keyFields = [CostCenterTypes.COST_CENTER_TYPE_CODE];
    /**
     * Mapping of all key field names to the respective static field property CostCenterTypes.
     */
    CostCenterTypes._keys = CostCenterTypes._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CostCenterTypes = exports.CostCenterTypes || (exports.CostCenterTypes = {}));
exports.CostCenterTypes = CostCenterTypes;
//# sourceMappingURL=CostCenterTypes.js.map