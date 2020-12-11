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
exports.WithholdingTaxCodesLine = exports.WithholdingTaxCodesLineField = exports.createWithholdingTaxCodesLine = void 0;
var ProgressiveTaxLine_1 = require("./ProgressiveTaxLine");
var WithholdingTaxCodesValueRange_Line_1 = require("./WithholdingTaxCodesValueRange_Line");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodesLine.build]] instead.
 */
function createWithholdingTaxCodesLine(json) {
    return WithholdingTaxCodesLine.build(json);
}
exports.createWithholdingTaxCodesLine = createWithholdingTaxCodesLine;
/**
 * WithholdingTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxCodesLineField = /** @class */ (function (_super) {
    __extends(WithholdingTaxCodesLineField, _super);
    /**
     * Creates an instance of WithholdingTaxCodesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function WithholdingTaxCodesLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, WithholdingTaxCodesLine) || this;
        /**
         * Representation of the [[WithholdingTaxCodesLine.effectivefrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectivefrom = new core_1.ComplexTypeDatePropertyField('Effectivefrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WithholdingTaxCodesLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.tdsRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tdsRate = new core_1.ComplexTypeNumberPropertyField('TDSRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.surchargeRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.surchargeRate = new core_1.ComplexTypeNumberPropertyField('SurchargeRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.cessRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cessRate = new core_1.ComplexTypeNumberPropertyField('CessRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.hscRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hscRate = new core_1.ComplexTypeNumberPropertyField('HSCRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.igstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.igstRate = new core_1.ComplexTypeNumberPropertyField('IGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.cgstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cgstRate = new core_1.ComplexTypeNumberPropertyField('CGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.sgstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sgstRate = new core_1.ComplexTypeNumberPropertyField('SGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.utgstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.utgstRate = new core_1.ComplexTypeNumberPropertyField('UTGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.cessGstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cessGstRate = new core_1.ComplexTypeNumberPropertyField('CessGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCodesLine.progressiveTaxLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.progressiveTaxLines = new core_1.CollectionField('ProgressiveTax_Lines', _this, ProgressiveTaxLine_1.ProgressiveTaxLine);
        /**
         * Representation of the [[WithholdingTaxCodesLine.withholdingTaxCodesValueRangeLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxCodesValueRangeLines = new core_1.CollectionField('WithholdingTaxCodes_ValueRange_Lines', _this, WithholdingTaxCodesValueRange_Line_1.WithholdingTaxCodesValueRange_Line);
        return _this;
    }
    return WithholdingTaxCodesLineField;
}(core_1.ComplexTypeField));
exports.WithholdingTaxCodesLineField = WithholdingTaxCodesLineField;
var WithholdingTaxCodesLine;
(function (WithholdingTaxCodesLine) {
    /**
     * Metadata information on all properties of the `WithholdingTaxCodesLine` complex type.
     */
    WithholdingTaxCodesLine._propertyMetadata = [{
            originalName: 'Effectivefrom',
            name: 'effectivefrom',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TDSRate',
            name: 'tdsRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SurchargeRate',
            name: 'surchargeRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CessRate',
            name: 'cessRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'HSCRate',
            name: 'hscRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'IGSTRate',
            name: 'igstRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CGSTRate',
            name: 'cgstRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SGSTRate',
            name: 'sgstRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UTGSTRate',
            name: 'utgstRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CessGSTRate',
            name: 'cessGstRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ProgressiveTax_Lines',
            name: 'progressiveTaxLines',
            type: ProgressiveTaxLine_1.ProgressiveTaxLine,
            isCollection: true
        }, {
            originalName: 'WithholdingTaxCodes_ValueRange_Lines',
            name: 'withholdingTaxCodesValueRangeLines',
            type: WithholdingTaxCodesValueRange_Line_1.WithholdingTaxCodesValueRange_Line,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, WithholdingTaxCodesLine);
    }
    WithholdingTaxCodesLine.build = build;
})(WithholdingTaxCodesLine = exports.WithholdingTaxCodesLine || (exports.WithholdingTaxCodesLine = {}));
//# sourceMappingURL=WithholdingTaxCodesLine.js.map