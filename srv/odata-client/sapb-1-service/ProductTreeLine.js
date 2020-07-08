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
exports.ProductTreeLine = exports.ProductTreeLineField = exports.createProductTreeLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ProductTreeLine.build]] instead.
 */
function createProductTreeLine(json) {
    return ProductTreeLine.build(json);
}
exports.createProductTreeLine = createProductTreeLine;
/**
 * ProductTreeLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProductTreeLineField = /** @class */ (function (_super) {
    __extends(ProductTreeLineField, _super);
    function ProductTreeLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProductTreeLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductTreeLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductTreeLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.inventoryUom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryUom = new v4_1.ComplexTypeStringPropertyField('InventoryUOM', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.comment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.comment = new v4_1.ComplexTypeStringPropertyField('Comment', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.parentItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentItem = new v4_1.ComplexTypeStringPropertyField('ParentItem', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new v4_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.wipAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipAccount = new v4_1.ComplexTypeStringPropertyField('WipAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.lineText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineText = new v4_1.ComplexTypeStringPropertyField('LineText', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.additionalQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalQuantity = new v4_1.ComplexTypeNumberPropertyField('AdditionalQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductTreeLine.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeLine.childNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.childNum = new v4_1.ComplexTypeNumberPropertyField('ChildNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        return _this;
    }
    return ProductTreeLineField;
}(v4_1.ComplexTypeField));
exports.ProductTreeLineField = ProductTreeLineField;
var ProductTreeLine;
(function (ProductTreeLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            InventoryUOM: function (inventoryUom) { return ({ inventoryUom: v4_1.edmToTs(inventoryUom, 'Edm.String') }); },
            Comment: function (comment) { return ({ comment: v4_1.edmToTs(comment, 'Edm.String') }); },
            ParentItem: function (parentItem) { return ({ parentItem: v4_1.edmToTs(parentItem, 'Edm.String') }); },
            PriceList: function (priceList) { return ({ priceList: v4_1.edmToTs(priceList, 'Edm.Int32') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            WipAccount: function (wipAccount) { return ({ wipAccount: v4_1.edmToTs(wipAccount, 'Edm.String') }); },
            LineText: function (lineText) { return ({ lineText: v4_1.edmToTs(lineText, 'Edm.String') }); },
            AdditionalQuantity: function (additionalQuantity) { return ({ additionalQuantity: v4_1.edmToTs(additionalQuantity, 'Edm.Double') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            ChildNum: function (childNum) { return ({ childNum: v4_1.edmToTs(childNum, 'Edm.Int32') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); }
        });
    }
    ProductTreeLine.build = build;
})(ProductTreeLine = exports.ProductTreeLine || (exports.ProductTreeLine = {}));
//# sourceMappingURL=ProductTreeLine.js.map