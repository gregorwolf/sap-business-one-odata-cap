"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ItemPriceField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemPriceField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemPrice) || this;
        /**
         * Representation of the [[ItemPrice.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new core_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPrice.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPrice.additionalPrice1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice1 = new core_1.ComplexTypeNumberPropertyField('AdditionalPrice1', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.additionalCurrency1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency1 = new core_1.ComplexTypeStringPropertyField('AdditionalCurrency1', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPrice.additionalPrice2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalPrice2 = new core_1.ComplexTypeNumberPropertyField('AdditionalPrice2', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.additionalCurrency2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalCurrency2 = new core_1.ComplexTypeStringPropertyField('AdditionalCurrency2', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPrice.basePriceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.basePriceList = new core_1.ComplexTypeNumberPropertyField('BasePriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPrice.factor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor = new core_1.ComplexTypeNumberPropertyField('Factor', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPrice.uoMPrices]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMPrices = new core_1.CollectionField('UoMPrices', _this, UoMPrice_1.UoMPrice);
        return _this;
    }
    return ItemPriceField;
}(core_1.ComplexTypeField));
exports.ItemPriceField = ItemPriceField;
var ItemPrice;
(function (ItemPrice) {
    /**
     * Metadata information on all properties of the `ItemPrice` complex type.
     */
    ItemPrice._propertyMetadata = [{
            originalName: 'PriceList',
            name: 'priceList',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalPrice1',
            name: 'additionalPrice1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalCurrency1',
            name: 'additionalCurrency1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalPrice2',
            name: 'additionalPrice2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalCurrency2',
            name: 'additionalCurrency2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BasePriceList',
            name: 'basePriceList',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Factor',
            name: 'factor',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoMPrices',
            name: 'uoMPrices',
            type: UoMPrice_1.UoMPrice,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemPrice);
    }
    ItemPrice.build = build;
})(ItemPrice = exports.ItemPrice || (exports.ItemPrice = {}));
//# sourceMappingURL=ItemPrice.js.map