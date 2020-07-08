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
exports.ItemPriceReturnParams = exports.ItemPriceReturnParamsField = exports.createItemPriceReturnParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ItemPriceReturnParams.build]] instead.
 */
function createItemPriceReturnParams(json) {
    return ItemPriceReturnParams.build(json);
}
exports.createItemPriceReturnParams = createItemPriceReturnParams;
/**
 * ItemPriceReturnParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ItemPriceReturnParamsField = /** @class */ (function (_super) {
    __extends(ItemPriceReturnParamsField, _super);
    function ItemPriceReturnParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ItemPriceReturnParams.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPriceReturnParams.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceReturnParams.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new v4_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        return _this;
    }
    return ItemPriceReturnParamsField;
}(v4_1.ComplexTypeField));
exports.ItemPriceReturnParamsField = ItemPriceReturnParamsField;
var ItemPriceReturnParams;
(function (ItemPriceReturnParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            Discount: function (discount) { return ({ discount: v4_1.edmToTs(discount, 'Edm.Double') }); }
        });
    }
    ItemPriceReturnParams.build = build;
})(ItemPriceReturnParams = exports.ItemPriceReturnParams || (exports.ItemPriceReturnParams = {}));
//# sourceMappingURL=ItemPriceReturnParams.js.map