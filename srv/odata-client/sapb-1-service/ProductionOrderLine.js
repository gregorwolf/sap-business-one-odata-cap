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
exports.ProductionOrderLine = exports.ProductionOrderLineField = exports.createProductionOrderLine = void 0;
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrderLine.build]] instead.
 */
function createProductionOrderLine(json) {
    return ProductionOrderLine.build(json);
}
exports.createProductionOrderLine = createProductionOrderLine;
/**
 * ProductionOrderLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProductionOrderLineField = /** @class */ (function (_super) {
    __extends(ProductionOrderLineField, _super);
    /**
     * Creates an instance of ProductionOrderLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ProductionOrderLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ProductionOrderLine) || this;
        /**
         * Representation of the [[ProductionOrderLine.documentAbsoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentAbsoluteEntry = new core_1.ComplexTypeNumberPropertyField('DocumentAbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.baseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseQuantity = new core_1.ComplexTypeNumberPropertyField('BaseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.plannedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedQuantity = new core_1.ComplexTypeNumberPropertyField('PlannedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.issuedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.issuedQuantity = new core_1.ComplexTypeNumberPropertyField('IssuedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.productionOrderIssueType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.productionOrderIssueType = new core_1.ComplexTypeEnumPropertyField('ProductionOrderIssueType', _this);
        /**
         * Representation of the [[ProductionOrderLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new core_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeNumberPropertyField('UoMCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.wipAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipAccount = new core_1.ComplexTypeStringPropertyField('WipAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.itemType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemType = new core_1.ComplexTypeEnumPropertyField('ItemType', _this);
        /**
         * Representation of the [[ProductionOrderLine.lineText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineText = new core_1.ComplexTypeStringPropertyField('LineText', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.additionalQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalQuantity = new core_1.ComplexTypeNumberPropertyField('AdditionalQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.resourceAllocation]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.resourceAllocation = new core_1.ComplexTypeEnumPropertyField('ResourceAllocation', _this);
        /**
         * Representation of the [[ProductionOrderLine.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrderLine.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new core_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrderLine.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.requiredDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredDays = new core_1.ComplexTypeNumberPropertyField('RequiredDays', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new core_1.CollectionField('SerialNumbers', _this, SerialNumber_1.SerialNumber);
        /**
         * Representation of the [[ProductionOrderLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new core_1.CollectionField('BatchNumbers', _this, BatchNumber_1.BatchNumber);
        return _this;
    }
    return ProductionOrderLineField;
}(core_1.ComplexTypeField));
exports.ProductionOrderLineField = ProductionOrderLineField;
var ProductionOrderLine;
(function (ProductionOrderLine) {
    /**
     * Metadata information on all properties of the `ProductionOrderLine` complex type.
     */
    ProductionOrderLine._propertyMetadata = [{
            originalName: 'DocumentAbsoluteEntry',
            name: 'documentAbsoluteEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BaseQuantity',
            name: 'baseQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PlannedQuantity',
            name: 'plannedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'IssuedQuantity',
            name: 'issuedQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ProductionOrderIssueType',
            name: 'productionOrderIssueType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocationCode',
            name: 'locationCode',
            type: 'Edm.Int32',
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
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.Int32',
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
            originalName: 'ResourceAllocation',
            name: 'resourceAllocation',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'EndDate',
            name: 'endDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RequiredDays',
            name: 'requiredDays',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SerialNumbers',
            name: 'serialNumbers',
            type: SerialNumber_1.SerialNumber,
            isCollection: true
        }, {
            originalName: 'BatchNumbers',
            name: 'batchNumbers',
            type: BatchNumber_1.BatchNumber,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ProductionOrderLine);
    }
    ProductionOrderLine.build = build;
})(ProductionOrderLine = exports.ProductionOrderLine || (exports.ProductionOrderLine = {}));
//# sourceMappingURL=ProductionOrderLine.js.map