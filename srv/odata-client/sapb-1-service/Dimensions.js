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
exports.Dimensions = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var DimensionsRequestBuilder_1 = require("./DimensionsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Dimensions" of service "SAPB1".
 */
var Dimensions = /** @class */ (function (_super) {
    __extends(Dimensions, _super);
    function Dimensions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `Dimensions`.
     * @returns A builder that constructs instances of entity type `Dimensions`.
     */
    Dimensions.builder = function () {
        return core_1.EntityV4.entityBuilder(Dimensions);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Dimensions` entity type.
     * @returns A `Dimensions` request builder.
     */
    Dimensions.requestBuilder = function () {
        return new DimensionsRequestBuilder_1.DimensionsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Dimensions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Dimensions`.
     */
    Dimensions.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, Dimensions);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Dimensions.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Dimensions.
     */
    Dimensions._entityName = 'Dimensions';
    /**
     * Default url path for the according service.
     */
    Dimensions._defaultServicePath = '/b1s/v2/';
    return Dimensions;
}(core_1.EntityV4));
exports.Dimensions = Dimensions;
var ProfitCenters_1 = require("./ProfitCenters");
var DistributionRules_1 = require("./DistributionRules");
(function (Dimensions) {
    /**
     * Static representation of the [[dimensionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Dimensions.DIMENSION_CODE = new core_1.NumberField('DimensionCode', Dimensions, 'Edm.Int32');
    /**
     * Static representation of the [[dimensionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Dimensions.DIMENSION_NAME = new core_1.StringField('DimensionName', Dimensions, 'Edm.String');
    /**
     * Static representation of the [[isActive]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Dimensions.IS_ACTIVE = new core_1.EnumField('IsActive', Dimensions);
    /**
     * Static representation of the [[dimensionDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Dimensions.DIMENSION_DESCRIPTION = new core_1.StringField('DimensionDescription', Dimensions, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Dimensions.PROFIT_CENTERS = new core_1.OneToManyLink('ProfitCenters', Dimensions, ProfitCenters_1.ProfitCenters);
    /**
     * Static representation of the one-to-many navigation property [[distributionRules]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Dimensions.DISTRIBUTION_RULES = new core_1.OneToManyLink('DistributionRules', Dimensions, DistributionRules_1.DistributionRules);
    /**
     * All fields of the Dimensions entity.
     */
    Dimensions._allFields = [
        Dimensions.DIMENSION_CODE,
        Dimensions.DIMENSION_NAME,
        Dimensions.IS_ACTIVE,
        Dimensions.DIMENSION_DESCRIPTION,
        Dimensions.PROFIT_CENTERS,
        Dimensions.DISTRIBUTION_RULES
    ];
    /**
     * All fields selector.
     */
    Dimensions.ALL_FIELDS = new core_1.AllFields('*', Dimensions);
    /**
     * All key fields of the Dimensions entity.
     */
    Dimensions._keyFields = [Dimensions.DIMENSION_CODE];
    /**
     * Mapping of all key field names to the respective static field property Dimensions.
     */
    Dimensions._keys = Dimensions._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Dimensions = exports.Dimensions || (exports.Dimensions = {}));
exports.Dimensions = Dimensions;
//# sourceMappingURL=Dimensions.js.map