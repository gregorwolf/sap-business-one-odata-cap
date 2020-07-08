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
exports.DeductionTaxHierarchiesLine = exports.DeductionTaxHierarchiesLineField = exports.createDeductionTaxHierarchiesLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DeductionTaxHierarchiesLine.build]] instead.
 */
function createDeductionTaxHierarchiesLine(json) {
    return DeductionTaxHierarchiesLine.build(json);
}
exports.createDeductionTaxHierarchiesLine = createDeductionTaxHierarchiesLine;
/**
 * DeductionTaxHierarchiesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DeductionTaxHierarchiesLineField = /** @class */ (function (_super) {
    __extends(DeductionTaxHierarchiesLineField, _super);
    function DeductionTaxHierarchiesLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DeductionTaxHierarchiesLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DeductionTaxHierarchiesLine.deductionPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductionPercent = new v4_1.ComplexTypeNumberPropertyField('DeductionPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DeductionTaxHierarchiesLine.maximumTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximumTotal = new v4_1.ComplexTypeNumberPropertyField('MaximumTotal', _this, 'Edm.Double');
        return _this;
    }
    return DeductionTaxHierarchiesLineField;
}(v4_1.ComplexTypeField));
exports.DeductionTaxHierarchiesLineField = DeductionTaxHierarchiesLineField;
var DeductionTaxHierarchiesLine;
(function (DeductionTaxHierarchiesLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            DeductionPercent: function (deductionPercent) { return ({ deductionPercent: v4_1.edmToTs(deductionPercent, 'Edm.Double') }); },
            MaximumTotal: function (maximumTotal) { return ({ maximumTotal: v4_1.edmToTs(maximumTotal, 'Edm.Double') }); }
        });
    }
    DeductionTaxHierarchiesLine.build = build;
})(DeductionTaxHierarchiesLine = exports.DeductionTaxHierarchiesLine || (exports.DeductionTaxHierarchiesLine = {}));
//# sourceMappingURL=DeductionTaxHierarchiesLine.js.map