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
exports.SalesTaxCodesLine = exports.SalesTaxCodesLineField = exports.createSalesTaxCodesLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxCodesLine.build]] instead.
 */
function createSalesTaxCodesLine(json) {
    return SalesTaxCodesLine.build(json);
}
exports.createSalesTaxCodesLine = createSalesTaxCodesLine;
/**
 * SalesTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesTaxCodesLineField = /** @class */ (function (_super) {
    __extends(SalesTaxCodesLineField, _super);
    function SalesTaxCodesLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesTaxCodesLine.staTaxOnTaxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staTaxOnTaxType = new v4_1.ComplexTypeNumberPropertyField('STATaxOnTaxType', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxCodesLine.staTaxonTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staTaxonTaxCode = new v4_1.ComplexTypeStringPropertyField('STATaxonTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxCodesLine.stcCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stcCode = new v4_1.ComplexTypeStringPropertyField('STCCode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxCodesLine.staType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staType = new v4_1.ComplexTypeNumberPropertyField('STAType', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxCodesLine.staCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staCode = new v4_1.ComplexTypeStringPropertyField('STACode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxCodesLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxCodesLine.effectiveRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveRate = new v4_1.ComplexTypeNumberPropertyField('EffectiveRate', _this, 'Edm.Double');
        return _this;
    }
    return SalesTaxCodesLineField;
}(v4_1.ComplexTypeField));
exports.SalesTaxCodesLineField = SalesTaxCodesLineField;
var SalesTaxCodesLine;
(function (SalesTaxCodesLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            STATaxOnTaxType: function (staTaxOnTaxType) { return ({ staTaxOnTaxType: v4_1.edmToTs(staTaxOnTaxType, 'Edm.Int32') }); },
            STATaxonTaxCode: function (staTaxonTaxCode) { return ({ staTaxonTaxCode: v4_1.edmToTs(staTaxonTaxCode, 'Edm.String') }); },
            STCCode: function (stcCode) { return ({ stcCode: v4_1.edmToTs(stcCode, 'Edm.String') }); },
            STAType: function (staType) { return ({ staType: v4_1.edmToTs(staType, 'Edm.Int32') }); },
            STACode: function (staCode) { return ({ staCode: v4_1.edmToTs(staCode, 'Edm.String') }); },
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            EffectiveRate: function (effectiveRate) { return ({ effectiveRate: v4_1.edmToTs(effectiveRate, 'Edm.Double') }); }
        });
    }
    SalesTaxCodesLine.build = build;
})(SalesTaxCodesLine = exports.SalesTaxCodesLine || (exports.SalesTaxCodesLine = {}));
//# sourceMappingURL=SalesTaxCodesLine.js.map