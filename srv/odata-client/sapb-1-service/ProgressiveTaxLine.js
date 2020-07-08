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
exports.ProgressiveTaxLine = exports.ProgressiveTaxLineField = exports.createProgressiveTaxLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ProgressiveTaxLine.build]] instead.
 */
function createProgressiveTaxLine(json) {
    return ProgressiveTaxLine.build(json);
}
exports.createProgressiveTaxLine = createProgressiveTaxLine;
/**
 * ProgressiveTaxLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProgressiveTaxLineField = /** @class */ (function (_super) {
    __extends(ProgressiveTaxLineField, _super);
    function ProgressiveTaxLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProgressiveTaxLine.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new v4_1.ComplexTypeNumberPropertyField('TaxRate', _this, 'Edm.Double');
        /**
         * Representation of the [[ProgressiveTaxLine.minAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minAmount = new v4_1.ComplexTypeNumberPropertyField('MinAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[ProgressiveTaxLine.maxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxAmount = new v4_1.ComplexTypeNumberPropertyField('MaxAmount', _this, 'Edm.Double');
        return _this;
    }
    return ProgressiveTaxLineField;
}(v4_1.ComplexTypeField));
exports.ProgressiveTaxLineField = ProgressiveTaxLineField;
var ProgressiveTaxLine;
(function (ProgressiveTaxLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TaxRate: function (taxRate) { return ({ taxRate: v4_1.edmToTs(taxRate, 'Edm.Double') }); },
            MinAmount: function (minAmount) { return ({ minAmount: v4_1.edmToTs(minAmount, 'Edm.Double') }); },
            MaxAmount: function (maxAmount) { return ({ maxAmount: v4_1.edmToTs(maxAmount, 'Edm.Double') }); }
        });
    }
    ProgressiveTaxLine.build = build;
})(ProgressiveTaxLine = exports.ProgressiveTaxLine || (exports.ProgressiveTaxLine = {}));
//# sourceMappingURL=ProgressiveTaxLine.js.map