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
exports.MaterialRevaluationLine = exports.MaterialRevaluationLineField = exports.createMaterialRevaluationLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var FifoLayer_1 = require("./FifoLayer");
var SnbLines_1 = require("./SnbLines");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function MaterialRevaluationLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[MaterialRevaluationLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.actualPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualPrice = new v4_1.ComplexTypeNumberPropertyField('ActualPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.onHand]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.onHand = new v4_1.ComplexTypeNumberPropertyField('OnHand', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.debitCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitCredit = new v4_1.ComplexTypeNumberPropertyField('DebitCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[MaterialRevaluationLine.revaluationDecrementAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revaluationDecrementAccount = new v4_1.ComplexTypeStringPropertyField('RevaluationDecrementAccount', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.revaluationIncrementAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revaluationIncrementAccount = new v4_1.ComplexTypeStringPropertyField('RevaluationIncrementAccount', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.revalAmountToStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.revalAmountToStock = new v4_1.ComplexTypeNumberPropertyField('RevalAmountToStock', _this, 'Edm.Double');
        /**
         * Representation of the [[MaterialRevaluationLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[MaterialRevaluationLine.fifoLayers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fifoLayers = new FifoLayer_1.FifoLayerField('FIFOLayers', _this);
        /**
         * Representation of the [[MaterialRevaluationLine.snbLinesCollection]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.snbLinesCollection = new SnbLines_1.SnbLinesField('SNBLinesCollection', _this);
        return _this;
    }
    return MaterialRevaluationLineField;
}(v4_1.ComplexTypeField));
exports.MaterialRevaluationLineField = MaterialRevaluationLineField;
var MaterialRevaluationLine;
(function (MaterialRevaluationLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            ActualPrice: function (actualPrice) { return ({ actualPrice: v4_1.edmToTs(actualPrice, 'Edm.Double') }); },
            OnHand: function (onHand) { return ({ onHand: v4_1.edmToTs(onHand, 'Edm.Double') }); },
            DebitCredit: function (debitCredit) { return ({ debitCredit: v4_1.edmToTs(debitCredit, 'Edm.Double') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            RevaluationDecrementAccount: function (revaluationDecrementAccount) { return ({ revaluationDecrementAccount: v4_1.edmToTs(revaluationDecrementAccount, 'Edm.String') }); },
            RevaluationIncrementAccount: function (revaluationIncrementAccount) { return ({ revaluationIncrementAccount: v4_1.edmToTs(revaluationIncrementAccount, 'Edm.String') }); },
            RevalAmountToStock: function (revalAmountToStock) { return ({ revalAmountToStock: v4_1.edmToTs(revalAmountToStock, 'Edm.Double') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            FIFOLayers: function (fifoLayers) { return ({ fifoLayers: FifoLayer_1.FifoLayer.build(fifoLayers) }); },
            SNBLinesCollection: function (snbLinesCollection) { return ({ snbLinesCollection: SnbLines_1.SnbLines.build(snbLinesCollection) }); }
        });
    }
    MaterialRevaluationLine.build = build;
})(MaterialRevaluationLine = exports.MaterialRevaluationLine || (exports.MaterialRevaluationLine = {}));
//# sourceMappingURL=MaterialRevaluationLine.js.map