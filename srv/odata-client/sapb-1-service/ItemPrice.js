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
exports.ItemPrice = exports.ItemPriceField = exports.createItemPrice = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UoMPrice_1 = require("./UoMPrice");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemPrice.build]] instead.
 */
function createItemPrice(json) {
    return ItemPrice.build(json);
}
exports.createItemPrice = createItemPrice;
/**
 * ItemPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemPriceField = /** @class */ (function (_super) {
    __extends(ItemPriceField, _super);
    function ItemPriceField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemPrice.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new v4_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPrice.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPrice.additionalPrice1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice1 = new v4_1.ComplexTypeNumberPropertyField('AdditionalPrice1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.additionalCurrency1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency1 = new v4_1.ComplexTypeStringPropertyField('AdditionalCurrency1', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPrice.additionalPrice2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice2 = new v4_1.ComplexTypeNumberPropertyField('AdditionalPrice2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.additionalCurrency2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency2 = new v4_1.ComplexTypeStringPropertyField('AdditionalCurrency2', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPrice.basePriceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.basePriceList = new v4_1.ComplexTypeNumberPropertyField('BasePriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPrice.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new v4_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.uoMPrices]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMPrices = new UoMPrice_1.UoMPriceField('UoMPrices', _this);
        return _this;
    }
    return ItemPriceField;
}(v4_1.ComplexTypeField));
exports.ItemPriceField = ItemPriceField;
var ItemPrice;
(function (ItemPrice) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PriceList: function (priceList) { return ({ priceList: v4_1.edmToTs(priceList, 'Edm.Int32') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            AdditionalPrice1: function (additionalPrice1) { return ({ additionalPrice1: v4_1.edmToTs(additionalPrice1, 'Edm.Double') }); },
            AdditionalCurrency1: function (additionalCurrency1) { return ({ additionalCurrency1: v4_1.edmToTs(additionalCurrency1, 'Edm.String') }); },
            AdditionalPrice2: function (additionalPrice2) { return ({ additionalPrice2: v4_1.edmToTs(additionalPrice2, 'Edm.Double') }); },
            AdditionalCurrency2: function (additionalCurrency2) { return ({ additionalCurrency2: v4_1.edmToTs(additionalCurrency2, 'Edm.String') }); },
            BasePriceList: function (basePriceList) { return ({ basePriceList: v4_1.edmToTs(basePriceList, 'Edm.Int32') }); },
            Factor: function (factor) { return ({ factor: v4_1.edmToTs(factor, 'Edm.Double') }); },
            UoMPrices: function (uoMPrices) { return ({ uoMPrices: UoMPrice_1.UoMPrice.build(uoMPrices) }); }
        });
    }
    ItemPrice.build = build;
})(ItemPrice = exports.ItemPrice || (exports.ItemPrice = {}));
//# sourceMappingURL=ItemPrice.js.map