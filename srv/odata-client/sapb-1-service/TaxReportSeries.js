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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaxReportSeries = exports.TaxReportSeriesField = exports.createTaxReportSeries = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxReportSeries.build]] instead.
 */
function createTaxReportSeries(json) {
    return TaxReportSeries.build(json);
}
exports.createTaxReportSeries = createTaxReportSeries;
/**
 * TaxReportSeriesField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxReportSeriesField = /** @class */ (function (_super) {
    __extends(TaxReportSeriesField, _super);
    /**
     * Creates an instance of TaxReportSeriesField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxReportSeriesField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxReportSeries) || this;
        /**
         * Representation of the [[TaxReportSeries.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new core_1.ComplexTypeEnumPropertyField('DocumentType', _this);
        /**
         * Representation of the [[TaxReportSeries.seriesCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.seriesCode = new core_1.ComplexTypeNumberPropertyField('SeriesCode', _this, 'Edm.Int32');
        return _this;
    }
    return TaxReportSeriesField;
}(core_1.ComplexTypeField));
exports.TaxReportSeriesField = TaxReportSeriesField;
var TaxReportSeries;
(function (TaxReportSeries) {
    /**
     * Metadata information on all properties of the `TaxReportSeries` complex type.
     */
    TaxReportSeries._propertyMetadata = [{
            originalName: 'DocumentType',
            name: 'documentType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SeriesCode',
            name: 'seriesCode',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxReportSeries);
    }
    TaxReportSeries.build = build;
})(TaxReportSeries = exports.TaxReportSeries || (exports.TaxReportSeries = {}));
//# sourceMappingURL=TaxReportSeries.js.map