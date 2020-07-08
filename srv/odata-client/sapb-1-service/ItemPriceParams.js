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
exports.ItemPriceParams = exports.ItemPriceParamsField = exports.createItemPriceParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemPriceParams.build]] instead.
 */
function createItemPriceParams(json) {
    return ItemPriceParams.build(json);
}
exports.createItemPriceParams = createItemPriceParams;
/**
 * ItemPriceParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemPriceParamsField = /** @class */ (function (_super) {
    __extends(ItemPriceParamsField, _super);
    function ItemPriceParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemPriceParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemPriceParams.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPriceParams.blanketAgreementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blanketAgreementNumber = new v4_1.ComplexTypeNumberPropertyField('BlanketAgreementNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPriceParams.blanketAgreementLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blanketAgreementLine = new v4_1.ComplexTypeNumberPropertyField('BlanketAgreementLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPriceParams.uoMQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMQuantity = new v4_1.ComplexTypeNumberPropertyField('UoMQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPriceParams.inventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryQuantity = new v4_1.ComplexTypeNumberPropertyField('InventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPriceParams.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new v4_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceParams.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new v4_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        return _this;
    }
    return ItemPriceParamsField;
}(v4_1.ComplexTypeField));
exports.ItemPriceParamsField = ItemPriceParamsField;
var ItemPriceParams;
(function (ItemPriceParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            BlanketAgreementNumber: function (blanketAgreementNumber) { return ({ blanketAgreementNumber: v4_1.edmToTs(blanketAgreementNumber, 'Edm.Int32') }); },
            BlanketAgreementLine: function (blanketAgreementLine) { return ({ blanketAgreementLine: v4_1.edmToTs(blanketAgreementLine, 'Edm.Int32') }); },
            UoMQuantity: function (uoMQuantity) { return ({ uoMQuantity: v4_1.edmToTs(uoMQuantity, 'Edm.Double') }); },
            InventoryQuantity: function (inventoryQuantity) { return ({ inventoryQuantity: v4_1.edmToTs(inventoryQuantity, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            CardCode: function (cardCode) { return ({ cardCode: v4_1.edmToTs(cardCode, 'Edm.String') }); },
            PriceList: function (priceList) { return ({ priceList: v4_1.edmToTs(priceList, 'Edm.Int32') }); }
        });
    }
    ItemPriceParams.build = build;
})(ItemPriceParams = exports.ItemPriceParams || (exports.ItemPriceParams = {}));
//# sourceMappingURL=ItemPriceParams.js.map