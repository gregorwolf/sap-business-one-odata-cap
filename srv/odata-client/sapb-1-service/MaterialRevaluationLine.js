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
exports.MaterialRevaluationLine = exports.MaterialRevaluationLineField = exports.createMaterialRevaluationLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FifoLayer_1 = require("./FifoLayer");
var SnbLines_1 = require("./SnbLines");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[MaterialRevaluationLine.build]] instead.
 */
function createMaterialRevaluationLine(json) {
    return MaterialRevaluationLine.build(json);
}
exports.createMaterialRevaluationLine = createMaterialRevaluationLine;
/**
 * MaterialRevaluationLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MaterialRevaluationLineField = /** @class */ (function (_super) {
    __extends(MaterialRevaluationLineField, _super);
    /**
     * Creates an instance of MaterialRevaluationLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MaterialRevaluationLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MaterialRevaluationLine) || this;
        /**
         * Representation of the [[MaterialRevaluationLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.actualPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualPrice = new core_1.ComplexTypeNumberPropertyField('ActualPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.onHand]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.onHand = new core_1.ComplexTypeNumberPropertyField('OnHand', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.debitCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitCredit = new core_1.ComplexTypeNumberPropertyField('DebitCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationLine.revaluationDecrementAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revaluationDecrementAccount = new core_1.ComplexTypeStringPropertyField('RevaluationDecrementAccount', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.revaluationIncrementAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revaluationIncrementAccount = new core_1.ComplexTypeStringPropertyField('RevaluationIncrementAccount', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.revalAmountToStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revalAmountToStock = new core_1.ComplexTypeNumberPropertyField('RevalAmountToStock', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new core_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.fifoLayers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fifoLayers = new core_1.CollectionField('FIFOLayers', _this, FifoLayer_1.FifoLayer);
        /**
         * Representation of the [[MaterialRevaluationLine.snbLinesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snbLinesCollection = new core_1.CollectionField('SNBLinesCollection', _this, SnbLines_1.SnbLines);
        return _this;
    }
    return MaterialRevaluationLineField;
}(core_1.ComplexTypeField));
exports.MaterialRevaluationLineField = MaterialRevaluationLineField;
var MaterialRevaluationLine;
(function (MaterialRevaluationLine) {
    /**
     * Metadata information on all properties of the `MaterialRevaluationLine` complex type.
     */
    MaterialRevaluationLine._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDescription',
            name: 'itemDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ActualPrice',
            name: 'actualPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OnHand',
            name: 'onHand',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DebitCredit',
            name: 'debitCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RevaluationDecrementAccount',
            name: 'revaluationDecrementAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RevaluationIncrementAccount',
            name: 'revaluationIncrementAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RevalAmountToStock',
            name: 'revalAmountToStock',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Project',
            name: 'project',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DistributionRule',
            name: 'distributionRule',
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
            originalName: 'FIFOLayers',
            name: 'fifoLayers',
            type: FifoLayer_1.FifoLayer,
            isCollection: true
        }, {
            originalName: 'SNBLinesCollection',
            name: 'snbLinesCollection',
            type: SnbLines_1.SnbLines,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MaterialRevaluationLine);
    }
    MaterialRevaluationLine.build = build;
})(MaterialRevaluationLine = exports.MaterialRevaluationLine || (exports.MaterialRevaluationLine = {}));
//# sourceMappingURL=MaterialRevaluationLine.js.map