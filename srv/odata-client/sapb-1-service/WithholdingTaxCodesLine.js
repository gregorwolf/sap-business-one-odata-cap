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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WithholdingTaxCodesLine = exports.WithholdingTaxCodesLineField = exports.createWithholdingTaxCodesLine = void 0;
var ProgressiveTaxLine_1 = require("./ProgressiveTaxLine");
var WithholdingTaxCodesValueRange_Line_1 = require("./WithholdingTaxCodesValueRange_Line");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function WithholdingTaxCodesLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WithholdingTaxCodesLine.effectivefrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectivefrom = new v4_1.ComplexTypeDatePropertyField('Effectivefrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WithholdingTaxCodesLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.tdsRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tdsRate = new v4_1.ComplexTypeNumberPropertyField('TDSRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.surchargeRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.surchargeRate = new v4_1.ComplexTypeNumberPropertyField('SurchargeRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.cessRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cessRate = new v4_1.ComplexTypeNumberPropertyField('CessRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.hscRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hscRate = new v4_1.ComplexTypeNumberPropertyField('HSCRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.igstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.igstRate = new v4_1.ComplexTypeNumberPropertyField('IGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.cgstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cgstRate = new v4_1.ComplexTypeNumberPropertyField('CGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.sgstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sgstRate = new v4_1.ComplexTypeNumberPropertyField('SGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.utgstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.utgstRate = new v4_1.ComplexTypeNumberPropertyField('UTGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.cessGstRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cessGstRate = new v4_1.ComplexTypeNumberPropertyField('CessGSTRate', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[WithholdingTaxCodesLine.progressiveTaxLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.progressiveTaxLines = new ProgressiveTaxLine_1.ProgressiveTaxLineField('ProgressiveTax_Lines', _this);
        /**
         * Representation of the [[WithholdingTaxCodesLine.withholdingTaxCodesValueRangeLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxCodesValueRangeLines = new WithholdingTaxCodesValueRange_Line_1.WithholdingTaxCodesValueRange_LineField('WithholdingTaxCodes_ValueRange_Lines', _this);
        return _this;
    }
    return WithholdingTaxCodesLineField;
}(v4_1.ComplexTypeField));
exports.WithholdingTaxCodesLineField = WithholdingTaxCodesLineField;
var WithholdingTaxCodesLine;
(function (WithholdingTaxCodesLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Effectivefrom: function (effectivefrom) { return ({ effectivefrom: v4_1.edmToTs(effectivefrom, 'Edm.DateTimeOffset') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            TDSRate: function (tdsRate) { return ({ tdsRate: v4_1.edmToTs(tdsRate, 'Edm.Double') }); },
            SurchargeRate: function (surchargeRate) { return ({ surchargeRate: v4_1.edmToTs(surchargeRate, 'Edm.Double') }); },
            CessRate: function (cessRate) { return ({ cessRate: v4_1.edmToTs(cessRate, 'Edm.Double') }); },
            HSCRate: function (hscRate) { return ({ hscRate: v4_1.edmToTs(hscRate, 'Edm.Double') }); },
            IGSTRate: function (igstRate) { return ({ igstRate: v4_1.edmToTs(igstRate, 'Edm.Double') }); },
            CGSTRate: function (cgstRate) { return ({ cgstRate: v4_1.edmToTs(cgstRate, 'Edm.Double') }); },
            SGSTRate: function (sgstRate) { return ({ sgstRate: v4_1.edmToTs(sgstRate, 'Edm.Double') }); },
            UTGSTRate: function (utgstRate) { return ({ utgstRate: v4_1.edmToTs(utgstRate, 'Edm.Double') }); },
            CessGSTRate: function (cessGstRate) { return ({ cessGstRate: v4_1.edmToTs(cessGstRate, 'Edm.Double') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            ProgressiveTax_Lines: function (progressiveTaxLines) { return ({ progressiveTaxLines: ProgressiveTaxLine_1.ProgressiveTaxLine.build(progressiveTaxLines) }); },
            WithholdingTaxCodes_ValueRange_Lines: function (withholdingTaxCodesValueRangeLines) { return ({ withholdingTaxCodesValueRangeLines: WithholdingTaxCodesValueRange_Line_1.WithholdingTaxCodesValueRange_Line.build(withholdingTaxCodesValueRangeLines) }); }
        });
    }
    WithholdingTaxCodesLine.build = build;
})(WithholdingTaxCodesLine = exports.WithholdingTaxCodesLine || (exports.WithholdingTaxCodesLine = {}));
//# sourceMappingURL=WithholdingTaxCodesLine.js.map