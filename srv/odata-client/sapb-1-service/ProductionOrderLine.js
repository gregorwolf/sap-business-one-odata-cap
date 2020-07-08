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
exports.ProductionOrderLine = exports.ProductionOrderLineField = exports.createProductionOrderLine = void 0;
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function ProductionOrderLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProductionOrderLine.documentAbsoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentAbsoluteEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentAbsoluteEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.baseQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseQuantity = new v4_1.ComplexTypeNumberPropertyField('BaseQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.plannedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedQuantity = new v4_1.ComplexTypeNumberPropertyField('PlannedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.issuedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.issuedQuantity = new v4_1.ComplexTypeNumberPropertyField('IssuedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new v4_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeNumberPropertyField('UoMCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.wipAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wipAccount = new v4_1.ComplexTypeStringPropertyField('WipAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.lineText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineText = new v4_1.ComplexTypeStringPropertyField('LineText', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrderLine.additionalQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalQuantity = new v4_1.ComplexTypeNumberPropertyField('AdditionalQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrderLine.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new v4_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrderLine.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrderLine.requiredDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredDays = new v4_1.ComplexTypeNumberPropertyField('RequiredDays', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrderLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new SerialNumber_1.SerialNumberField('SerialNumbers', _this);
        /**
         * Representation of the [[ProductionOrderLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new BatchNumber_1.BatchNumberField('BatchNumbers', _this);
        return _this;
    }
    return ProductionOrderLineField;
}(v4_1.ComplexTypeField));
exports.ProductionOrderLineField = ProductionOrderLineField;
var ProductionOrderLine;
(function (ProductionOrderLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentAbsoluteEntry: function (documentAbsoluteEntry) { return ({ documentAbsoluteEntry: v4_1.edmToTs(documentAbsoluteEntry, 'Edm.Int32') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            BaseQuantity: function (baseQuantity) { return ({ baseQuantity: v4_1.edmToTs(baseQuantity, 'Edm.Double') }); },
            PlannedQuantity: function (plannedQuantity) { return ({ plannedQuantity: v4_1.edmToTs(plannedQuantity, 'Edm.Double') }); },
            IssuedQuantity: function (issuedQuantity) { return ({ issuedQuantity: v4_1.edmToTs(issuedQuantity, 'Edm.Double') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            LocationCode: function (locationCode) { return ({ locationCode: v4_1.edmToTs(locationCode, 'Edm.Int32') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.Int32') }); },
            WipAccount: function (wipAccount) { return ({ wipAccount: v4_1.edmToTs(wipAccount, 'Edm.String') }); },
            LineText: function (lineText) { return ({ lineText: v4_1.edmToTs(lineText, 'Edm.String') }); },
            AdditionalQuantity: function (additionalQuantity) { return ({ additionalQuantity: v4_1.edmToTs(additionalQuantity, 'Edm.Double') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            EndDate: function (endDate) { return ({ endDate: v4_1.edmToTs(endDate, 'Edm.DateTimeOffset') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            RequiredDays: function (requiredDays) { return ({ requiredDays: v4_1.edmToTs(requiredDays, 'Edm.Double') }); },
            SerialNumbers: function (serialNumbers) { return ({ serialNumbers: SerialNumber_1.SerialNumber.build(serialNumbers) }); },
            BatchNumbers: function (batchNumbers) { return ({ batchNumbers: BatchNumber_1.BatchNumber.build(batchNumbers) }); }
        });
    }
    ProductionOrderLine.build = build;
})(ProductionOrderLine = exports.ProductionOrderLine || (exports.ProductionOrderLine = {}));
//# sourceMappingURL=ProductionOrderLine.js.map