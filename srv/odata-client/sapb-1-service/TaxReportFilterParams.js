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
exports.TaxReportFilterParams = exports.TaxReportFilterParamsField = exports.createTaxReportFilterParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[TaxReportFilterParams.build]] instead.
 */
function createTaxReportFilterParams(json) {
    return TaxReportFilterParams.build(json);
}
exports.createTaxReportFilterParams = createTaxReportFilterParams;
/**
 * TaxReportFilterParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxReportFilterParamsField = /** @class */ (function (_super) {
    __extends(TaxReportFilterParamsField, _super);
    /**
     * Creates an instance of TaxReportFilterParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxReportFilterParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxReportFilterParams) || this;
        /**
         * Representation of the [[TaxReportFilterParams.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new core_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxReportFilterParams.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[TaxReportFilterParams.filterType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.filterType = new core_1.ComplexTypeEnumPropertyField('FilterType', _this);
        return _this;
    }
    return TaxReportFilterParamsField;
}(core_1.ComplexTypeField));
exports.TaxReportFilterParamsField = TaxReportFilterParamsField;
var TaxReportFilterParams;
(function (TaxReportFilterParams) {
    /**
     * Metadata information on all properties of the `TaxReportFilterParams` complex type.
     */
    TaxReportFilterParams._propertyMetadata = [{
            originalName: 'Code',
            name: 'code',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FilterType',
            name: 'filterType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxReportFilterParams);
    }
    TaxReportFilterParams.build = build;
})(TaxReportFilterParams = exports.TaxReportFilterParams || (exports.TaxReportFilterParams = {}));
//# sourceMappingURL=TaxReportFilterParams.js.map