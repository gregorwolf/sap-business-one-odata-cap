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
exports.WtdItem = exports.WtdItemField = exports.createWtdItem = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[WtdItem.build]] instead.
 */
function createWtdItem(json) {
    return WtdItem.build(json);
}
exports.createWtdItem = createWtdItem;
/**
 * WtdItemField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var WtdItemField = /** @class */ (function (_super) {
    __extends(WtdItemField, _super);
    function WtdItemField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[WtdItem.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdItem.wTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wTaxCode = new v4_1.ComplexTypeStringPropertyField('WTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[WtdItem.effectiveDateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateFrom = new v4_1.ComplexTypeDatePropertyField('EffectiveDateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[WtdItem.effectiveDateTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveDateTo = new v4_1.ComplexTypeDatePropertyField('EffectiveDateTo', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return WtdItemField;
}(v4_1.ComplexTypeField));
exports.WtdItemField = WtdItemField;
var WtdItem;
(function (WtdItem) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            WTaxCode: function (wTaxCode) { return ({ wTaxCode: v4_1.edmToTs(wTaxCode, 'Edm.String') }); },
            EffectiveDateFrom: function (effectiveDateFrom) { return ({ effectiveDateFrom: v4_1.edmToTs(effectiveDateFrom, 'Edm.DateTimeOffset') }); },
            EffectiveDateTo: function (effectiveDateTo) { return ({ effectiveDateTo: v4_1.edmToTs(effectiveDateTo, 'Edm.DateTimeOffset') }); }
        });
    }
    WtdItem.build = build;
})(WtdItem = exports.WtdItem || (exports.WtdItem = {}));
//# sourceMappingURL=WtdItem.js.map