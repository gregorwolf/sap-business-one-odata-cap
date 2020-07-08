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
exports.SalesForecast = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var SalesForecastRequestBuilder_1 = require("./SalesForecastRequestBuilder");
var SalesForecastLine_1 = require("./SalesForecastLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "SalesForecast" of service "SAPB1".
 */
var SalesForecast = /** @class */ (function (_super) {
    __extends(SalesForecast, _super);
    function SalesForecast() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `SalesForecast`.
     * @returns A builder that constructs instances of entity type `SalesForecast`.
     */
    SalesForecast.builder = function () {
        return v4_1.Entity.entityBuilder(SalesForecast);
    };
    /**
     * Returns a request builder to construct requests for operations on the `SalesForecast` entity type.
     * @returns A `SalesForecast` request builder.
     */
    SalesForecast.requestBuilder = function () {
        return new SalesForecastRequestBuilder_1.SalesForecastRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SalesForecast`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SalesForecast`.
     */
    SalesForecast.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, SalesForecast);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    SalesForecast.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for SalesForecast.
     */
    SalesForecast._entityName = 'SalesForecast';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SalesForecast.
     */
    SalesForecast._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    SalesForecast._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return SalesForecast;
}(v4_1.Entity));
exports.SalesForecast = SalesForecast;
(function (SalesForecast) {
    /**
     * Static representation of the [[forecastStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesForecast.FORECAST_START_DATE = new v4_1.DateField('ForecastStartDate', SalesForecast, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[forecastEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesForecast.FORECAST_END_DATE = new v4_1.DateField('ForecastEndDate', SalesForecast, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[forecastCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesForecast.FORECAST_CODE = new v4_1.StringField('ForecastCode', SalesForecast, 'Edm.String');
    /**
     * Static representation of the [[forecastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesForecast.FORECAST_NAME = new v4_1.StringField('ForecastName', SalesForecast, 'Edm.String');
    /**
     * Static representation of the [[numerator]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesForecast.NUMERATOR = new v4_1.NumberField('Numerator', SalesForecast, 'Edm.Int32');
    /**
     * Static representation of the [[salesForecastLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SalesForecast.SALES_FORECAST_LINES = new v4_1.CollectionField('SalesForecastLines', SalesForecast, new SalesForecastLine_1.SalesForecastLineField('', SalesForecast));
    /**
     * All fields of the SalesForecast entity.
     */
    SalesForecast._allFields = [
        SalesForecast.FORECAST_START_DATE,
        SalesForecast.FORECAST_END_DATE,
        SalesForecast.FORECAST_CODE,
        SalesForecast.FORECAST_NAME,
        SalesForecast.NUMERATOR,
        SalesForecast.SALES_FORECAST_LINES
    ];
    /**
     * All fields selector.
     */
    SalesForecast.ALL_FIELDS = new v4_1.AllFields('*', SalesForecast);
    /**
     * All key fields of the SalesForecast entity.
     */
    SalesForecast._keyFields = [SalesForecast.NUMERATOR];
    /**
     * Mapping of all key field names to the respective static field property SalesForecast.
     */
    SalesForecast._keys = SalesForecast._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(SalesForecast = exports.SalesForecast || (exports.SalesForecast = {}));
exports.SalesForecast = SalesForecast;
//# sourceMappingURL=SalesForecast.js.map