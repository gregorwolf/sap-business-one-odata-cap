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
exports.ItemPriceParams = exports.ItemPriceParamsField = exports.createItemPriceParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ItemPriceParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ItemPriceParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ItemPriceParams) || this;
        /**
         * Representation of the [[ItemPriceParams.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ItemPriceParams.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPriceParams.blanketAgreementNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blanketAgreementNumber = new core_1.ComplexTypeNumberPropertyField('BlanketAgreementNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPriceParams.blanketAgreementLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blanketAgreementLine = new core_1.ComplexTypeNumberPropertyField('BlanketAgreementLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[ItemPriceParams.uoMQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMQuantity = new core_1.ComplexTypeNumberPropertyField('UoMQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPriceParams.inventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryQuantity = new core_1.ComplexTypeNumberPropertyField('InventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ItemPriceParams.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceParams.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceParams.cardCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cardCode = new core_1.ComplexTypeStringPropertyField('CardCode', _this, 'Edm.String');
        /**
         * Representation of the [[ItemPriceParams.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new core_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        return _this;
    }
    return ItemPriceParamsField;
}(core_1.ComplexTypeField));
exports.ItemPriceParamsField = ItemPriceParamsField;
var ItemPriceParams;
(function (ItemPriceParams) {
    /**
     * Metadata information on all properties of the `ItemPriceParams` complex type.
     */
    ItemPriceParams._propertyMetadata = [{
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BlanketAgreementNumber',
            name: 'blanketAgreementNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BlanketAgreementLine',
            name: 'blanketAgreementLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMQuantity',
            name: 'uoMQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InventoryQuantity',
            name: 'inventoryQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CardCode',
            name: 'cardCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceList',
            name: 'priceList',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ItemPriceParams);
    }
    ItemPriceParams.build = build;
})(ItemPriceParams = exports.ItemPriceParams || (exports.ItemPriceParams = {}));
//# sourceMappingURL=ItemPriceParams.js.map