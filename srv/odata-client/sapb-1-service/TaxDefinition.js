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
exports.TaxDefinition = exports.TaxDefinitionField = exports.createTaxDefinition = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxDefinition.build]] instead.
 */
function createTaxDefinition(json) {
    return TaxDefinition.build(json);
}
exports.createTaxDefinition = createTaxDefinition;
/**
 * TaxDefinitionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxDefinitionField = /** @class */ (function (_super) {
    __extends(TaxDefinitionField, _super);
    function TaxDefinitionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxDefinition.effectivefrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectivefrom = new v4_1.ComplexTypeDatePropertyField('Effectivefrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxDefinition.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        return _this;
    }
    return TaxDefinitionField;
}(v4_1.ComplexTypeField));
exports.TaxDefinitionField = TaxDefinitionField;
var TaxDefinition;
(function (TaxDefinition) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Effectivefrom: function (effectivefrom) { return ({ effectivefrom: v4_1.edmToTs(effectivefrom, 'Edm.DateTimeOffset') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); }
        });
    }
    TaxDefinition.build = build;
})(TaxDefinition = exports.TaxDefinition || (exports.TaxDefinition = {}));
//# sourceMappingURL=TaxDefinition.js.map