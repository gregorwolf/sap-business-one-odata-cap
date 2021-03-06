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
exports.CertificateSeries = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var CertificateSeriesRequestBuilder_1 = require("./CertificateSeriesRequestBuilder");
var SeriesLine_1 = require("./SeriesLine");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CertificateSeries" of service "SAPB1".
 */
var CertificateSeries = /** @class */ (function (_super) {
    __extends(CertificateSeries, _super);
    function CertificateSeries() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `CertificateSeries`.
     * @returns A builder that constructs instances of entity type `CertificateSeries`.
     */
    CertificateSeries.builder = function () {
        return core_1.EntityV4.entityBuilder(CertificateSeries);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CertificateSeries` entity type.
     * @returns A `CertificateSeries` request builder.
     */
    CertificateSeries.requestBuilder = function () {
        return new CertificateSeriesRequestBuilder_1.CertificateSeriesRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CertificateSeries`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CertificateSeries`.
     */
    CertificateSeries.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, CertificateSeries);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CertificateSeries.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CertificateSeries.
     */
    CertificateSeries._entityName = 'CertificateSeries';
    /**
     * Default url path for the according service.
     */
    CertificateSeries._defaultServicePath = '/b1s/v2/';
    return CertificateSeries;
}(core_1.EntityV4));
exports.CertificateSeries = CertificateSeries;
var Sections_1 = require("./Sections");
var WarehouseLocations_1 = require("./WarehouseLocations");
(function (CertificateSeries) {
    /**
     * Static representation of the [[absEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.ABS_ENTRY = new core_1.NumberField('AbsEntry', CertificateSeries, 'Edm.Int32');
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.CODE = new core_1.StringField('Code', CertificateSeries, 'Edm.String');
    /**
     * Static representation of the [[section]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.SECTION = new core_1.NumberField('Section', CertificateSeries, 'Edm.Int32');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.LOCATION = new core_1.NumberField('Location', CertificateSeries, 'Edm.Int32');
    /**
     * Static representation of the [[defaultSeries]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.DEFAULT_SERIES = new core_1.NumberField('DefaultSeries', CertificateSeries, 'Edm.Int32');
    /**
     * Static representation of the [[seriesLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.SERIES_LINES = new core_1.CollectionField('SeriesLines', CertificateSeries, SeriesLine_1.SeriesLine);
    /**
     * Static representation of the one-to-one navigation property [[section2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.SECTION_2 = new core_1.OneToOneLink('Section2', CertificateSeries, Sections_1.Sections);
    /**
     * Static representation of the one-to-one navigation property [[warehouseLocation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CertificateSeries.WAREHOUSE_LOCATION = new core_1.OneToOneLink('WarehouseLocation', CertificateSeries, WarehouseLocations_1.WarehouseLocations);
    /**
     * All fields of the CertificateSeries entity.
     */
    CertificateSeries._allFields = [
        CertificateSeries.ABS_ENTRY,
        CertificateSeries.CODE,
        CertificateSeries.SECTION,
        CertificateSeries.LOCATION,
        CertificateSeries.DEFAULT_SERIES,
        CertificateSeries.SERIES_LINES,
        CertificateSeries.SECTION_2,
        CertificateSeries.WAREHOUSE_LOCATION
    ];
    /**
     * All fields selector.
     */
    CertificateSeries.ALL_FIELDS = new core_1.AllFields('*', CertificateSeries);
    /**
     * All key fields of the CertificateSeries entity.
     */
    CertificateSeries._keyFields = [CertificateSeries.ABS_ENTRY];
    /**
     * Mapping of all key field names to the respective static field property CertificateSeries.
     */
    CertificateSeries._keys = CertificateSeries._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CertificateSeries = exports.CertificateSeries || (exports.CertificateSeries = {}));
exports.CertificateSeries = CertificateSeries;
//# sourceMappingURL=CertificateSeries.js.map