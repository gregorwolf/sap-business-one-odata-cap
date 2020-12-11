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
exports.ItemPriceReturnParams = exports.ItemPriceReturnParamsField = exports.createItemPriceReturnParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ItemPriceReturnParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemPriceReturnParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemPriceReturnParams) || this;
        /**
         * Representation of the [[ItemPriceReturnParams.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPriceReturnParams.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceReturnParams.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new core_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        return _this;
    }
    return ItemPriceReturnParamsField;
}(core_1.ComplexTypeField));
exports.ItemPriceReturnParamsField = ItemPriceReturnParamsField;
var ItemPriceReturnParams;
(function (ItemPriceReturnParams) {
    /**
     * Metadata information on all properties of the `ItemPriceReturnParams` complex type.
     */
    ItemPriceReturnParams._propertyMetadata = [{
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
            originalName: 'Discount',
            name: 'discount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemPriceReturnParams);
    }
    ItemPriceReturnParams.build = build;
})(ItemPriceReturnParams = exports.ItemPriceReturnParams || (exports.ItemPriceReturnParams = {}));
//# sourceMappingURL=ItemPriceReturnParams.js.map