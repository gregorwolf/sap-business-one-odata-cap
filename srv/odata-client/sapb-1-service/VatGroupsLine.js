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
exports.VatGroupsLine = exports.VatGroupsLineField = exports.createVatGroupsLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[VatGroupsLine.build]] instead.
 */
function createVatGroupsLine(json) {
    return VatGroupsLine.build(json);
}
exports.createVatGroupsLine = createVatGroupsLine;
/**
 * VatGroupsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var VatGroupsLineField = /** @class */ (function (_super) {
    __extends(VatGroupsLineField, _super);
    function VatGroupsLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[VatGroupsLine.effectivefrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectivefrom = new v4_1.ComplexTypeDatePropertyField('Effectivefrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[VatGroupsLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[VatGroupsLine.equalizationTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTax = new v4_1.ComplexTypeNumberPropertyField('EqualizationTax', _this, 'Edm.Double');
        /**
         * Representation of the [[VatGroupsLine.datevCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.datevCode = new v4_1.ComplexTypeNumberPropertyField('DatevCode', _this, 'Edm.Int32');
        return _this;
    }
    return VatGroupsLineField;
}(v4_1.ComplexTypeField));
exports.VatGroupsLineField = VatGroupsLineField;
var VatGroupsLine;
(function (VatGroupsLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Effectivefrom: function (effectivefrom) { return ({ effectivefrom: v4_1.edmToTs(effectivefrom, 'Edm.DateTimeOffset') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            EqualizationTax: function (equalizationTax) { return ({ equalizationTax: v4_1.edmToTs(equalizationTax, 'Edm.Double') }); },
            DatevCode: function (datevCode) { return ({ datevCode: v4_1.edmToTs(datevCode, 'Edm.Int32') }); }
        });
    }
    VatGroupsLine.build = build;
})(VatGroupsLine = exports.VatGroupsLine || (exports.VatGroupsLine = {}));
//# sourceMappingURL=VatGroupsLine.js.map