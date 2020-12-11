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
exports.ProductTreeLine = exports.ProductTreeLineField = exports.createProductTreeLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ProductTreeLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ProductTreeLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ProductTreeLine) || this;
        /**
         * Representation of the [[ProductTreeLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductTreeLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductTreeLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.issueMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.issueMethod = new core_1.ComplexTypeEnumPropertyField('IssueMethod', _this);
        /**
         * Representation of the [[ProductTreeLine.inventoryUom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryUom = new core_1.ComplexTypeStringPropertyField('InventoryUOM', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.comment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.comment = new core_1.ComplexTypeStringPropertyField('Comment', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.parentItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentItem = new core_1.ComplexTypeStringPropertyField('ParentItem', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.priceList]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceList = new core_1.ComplexTypeNumberPropertyField('PriceList', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.wipAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipAccount = new core_1.ComplexTypeStringPropertyField('WipAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.itemType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemType = new core_1.ComplexTypeEnumPropertyField('ItemType', _this);
        /**
         * Representation of the [[ProductTreeLine.lineText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineText = new core_1.ComplexTypeStringPropertyField('LineText', _this, 'Edm.String');
        /**
         * Representation of the [[ProductTreeLine.additionalQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalQuantity = new core_1.ComplexTypeNumberPropertyField('AdditionalQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductTreeLine.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeLine.childNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.childNum = new core_1.ComplexTypeNumberPropertyField('ChildNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductTreeLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        return _this;
    }
    return ProductTreeLineField;
}(core_1.ComplexTypeField));
exports.ProductTreeLineField = ProductTreeLineField;
var ProductTreeLine;
(function (ProductTreeLine) {
    /**
     * Metadata information on all properties of the `ProductTreeLine` complex type.
     */
    ProductTreeLine._propertyMetadata = [{
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
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
            originalName: 'IssueMethod',
            name: 'issueMethod',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'InventoryUOM',
            name: 'inventoryUom',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Comment',
            name: 'comment',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ParentItem',
            name: 'parentItem',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PriceList',
            name: 'priceList',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule2',
            name: 'distributionRule2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule3',
            name: 'distributionRule3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule4',
            name: 'distributionRule4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule5',
            name: 'distributionRule5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WipAccount',
            name: 'wipAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemType',
            name: 'itemType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'LineText',
            name: 'lineText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AdditionalQuantity',
            name: 'additionalQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ChildNum',
            name: 'childNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ProductTreeLine);
    }
    ProductTreeLine.build = build;
})(ProductTreeLine = exports.ProductTreeLine || (exports.ProductTreeLine = {}));
//# sourceMappingURL=ProductTreeLine.js.map