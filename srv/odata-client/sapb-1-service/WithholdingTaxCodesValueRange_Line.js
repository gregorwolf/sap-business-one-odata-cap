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
exports.WithholdingTaxCodesValueRange_Line = exports.WithholdingTaxCodesValueRange_LineField = exports.createWithholdingTaxCodesValueRange_Line = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WithholdingTaxCodesValueRange_Line.build]] instead.
 */
function createWithholdingTaxCodesValueRange_Line(json) {
    return WithholdingTaxCodesValueRange_Line.build(json);
}
exports.createWithholdingTaxCodesValueRange_Line = createWithholdingTaxCodesValueRange_Line;
/**
 * WithholdingTaxCodesValueRange_LineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WithholdingTaxCodesValueRange_LineField = /** @class */ (function (_super) {
    __extends(WithholdingTaxCodesValueRange_LineField, _super);
    function WithholdingTaxCodesValueRange_LineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WithholdingTaxCodesValueRange_Line.valueFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.valueFrom = new v4_1.ComplexTypeNumberPropertyField('ValueFrom', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesValueRange_Line.wTaxToBeDeductible]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxToBeDeductible = new v4_1.ComplexTypeNumberPropertyField('WTaxToBeDeductible', _this, 'Edm.Double');
        /**
         * Representation of the [[WithholdingTaxCodesValueRange_Line.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        return _this;
    }
    return WithholdingTaxCodesValueRange_LineField;
}(v4_1.ComplexTypeField));
exports.WithholdingTaxCodesValueRange_LineField = WithholdingTaxCodesValueRange_LineField;
var WithholdingTaxCodesValueRange_Line;
(function (WithholdingTaxCodesValueRange_Line) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ValueFrom: function (valueFrom) { return ({ valueFrom: v4_1.edmToTs(valueFrom, 'Edm.Double') }); },
            WTaxToBeDeductible: function (wTaxToBeDeductible) { return ({ wTaxToBeDeductible: v4_1.edmToTs(wTaxToBeDeductible, 'Edm.Double') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); }
        });
    }
    WithholdingTaxCodesValueRange_Line.build = build;
})(WithholdingTaxCodesValueRange_Line = exports.WithholdingTaxCodesValueRange_Line || (exports.WithholdingTaxCodesValueRange_Line = {}));
//# sourceMappingURL=WithholdingTaxCodesValueRange_Line.js.map