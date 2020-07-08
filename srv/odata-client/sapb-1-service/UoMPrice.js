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
exports.UoMPrice = exports.UoMPriceField = exports.createUoMPrice = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[UoMPrice.build]] instead.
 */
function createUoMPrice(json) {
    return UoMPrice.build(json);
}
exports.createUoMPrice = createUoMPrice;
/**
 * UoMPriceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var UoMPriceField = /** @class */ (function (_super) {
    __extends(UoMPriceField, _super);
    function UoMPriceField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[UoMPrice.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new v4_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMPrice.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[UoMPrice.reduceBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reduceBy = new v4_1.ComplexTypeNumberPropertyField('ReduceBy', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[UoMPrice.additionalReduceBy1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalReduceBy1 = new v4_1.ComplexTypeNumberPropertyField('AdditionalReduceBy1', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalPrice1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice1 = new v4_1.ComplexTypeNumberPropertyField('AdditionalPrice1', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalCurrency1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency1 = new v4_1.ComplexTypeStringPropertyField('AdditionalCurrency1', _this, 'Edm.String');
        /**
         * Representation of the [[UoMPrice.additionalReduceBy2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalReduceBy2 = new v4_1.ComplexTypeNumberPropertyField('AdditionalReduceBy2', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalPrice2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice2 = new v4_1.ComplexTypeNumberPropertyField('AdditionalPrice2', _this, 'Edm.Double');
        /**
         * Representation of the [[UoMPrice.additionalCurrency2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency2 = new v4_1.ComplexTypeStringPropertyField('AdditionalCurrency2', _this, 'Edm.String');
        return _this;
    }
    return UoMPriceField;
}(v4_1.ComplexTypeField));
exports.UoMPriceField = UoMPriceField;
var UoMPrice;
(function (UoMPrice) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PriceList: function (priceList) { return ({ priceList: v4_1.edmToTs(priceList, 'Edm.Int32') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            ReduceBy: function (reduceBy) { return ({ reduceBy: v4_1.edmToTs(reduceBy, 'Edm.Double') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            AdditionalReduceBy1: function (additionalReduceBy1) { return ({ additionalReduceBy1: v4_1.edmToTs(additionalReduceBy1, 'Edm.Double') }); },
            AdditionalPrice1: function (additionalPrice1) { return ({ additionalPrice1: v4_1.edmToTs(additionalPrice1, 'Edm.Double') }); },
            AdditionalCurrency1: function (additionalCurrency1) { return ({ additionalCurrency1: v4_1.edmToTs(additionalCurrency1, 'Edm.String') }); },
            AdditionalReduceBy2: function (additionalReduceBy2) { return ({ additionalReduceBy2: v4_1.edmToTs(additionalReduceBy2, 'Edm.Double') }); },
            AdditionalPrice2: function (additionalPrice2) { return ({ additionalPrice2: v4_1.edmToTs(additionalPrice2, 'Edm.Double') }); },
            AdditionalCurrency2: function (additionalCurrency2) { return ({ additionalCurrency2: v4_1.edmToTs(additionalCurrency2, 'Edm.String') }); }
        });
    }
    UoMPrice.build = build;
})(UoMPrice = exports.UoMPrice || (exports.UoMPrice = {}));
//# sourceMappingURL=UoMPrice.js.map