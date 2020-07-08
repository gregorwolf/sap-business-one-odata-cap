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
exports.PmStageData = exports.PmStageDataField = exports.createPmStageData = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PmStageData.build]] instead.
 */
function createPmStageData(json) {
    return PmStageData.build(json);
}
exports.createPmStageData = createPmStageData;
/**
 * PmStageDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmStageDataField = /** @class */ (function (_super) {
    __extends(PmStageDataField, _super);
    function PmStageDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmStageData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.stageType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageType = new v4_1.ComplexTypeNumberPropertyField('StageType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmStageData.closeDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closeDate = new v4_1.ComplexTypeDatePropertyField('CloseDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmStageData.task]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.task = new v4_1.ComplexTypeNumberPropertyField('Task', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new v4_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[PmStageData.expectedCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expectedCosts = new v4_1.ComplexTypeNumberPropertyField('ExpectedCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[PmStageData.invoicedAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoicedAmountSales = new v4_1.ComplexTypeNumberPropertyField('InvoicedAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmStageData.openAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountSales = new v4_1.ComplexTypeNumberPropertyField('OpenAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmStageData.invoicedAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoicedAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('InvoicedAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmStageData.openAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('OpenAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmStageData.percentualCompletness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentualCompletness = new v4_1.ComplexTypeNumberPropertyField('PercentualCompletness', _this, 'Edm.Double');
        /**
         * Representation of the [[PmStageData.stageOwner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageOwner = new v4_1.ComplexTypeNumberPropertyField('StageOwner', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStage1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage1 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStage1', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStage2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage2 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStage2', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStage3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage3 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStage3', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStage4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage4 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStage4', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStageId1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId1 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStageID1', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStageId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId2 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStageID2', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStageId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId3 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStageID3', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.dependsOnStageId4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId4 = new v4_1.ComplexTypeNumberPropertyField('DependsOnStageID4', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.attachmentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmentEntry = new v4_1.ComplexTypeNumberPropertyField('AttachmentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmStageData.uniqueId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uniqueId = new v4_1.ComplexTypeStringPropertyField('UniqueID', _this, 'Edm.String');
        /**
         * Representation of the [[PmStageData.finishedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.finishedDate = new v4_1.ComplexTypeDatePropertyField('FinishedDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return PmStageDataField;
}(v4_1.ComplexTypeField));
exports.PmStageDataField = PmStageDataField;
var PmStageData;
(function (PmStageData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            StageType: function (stageType) { return ({ stageType: v4_1.edmToTs(stageType, 'Edm.Int32') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            CloseDate: function (closeDate) { return ({ closeDate: v4_1.edmToTs(closeDate, 'Edm.DateTimeOffset') }); },
            Task: function (task) { return ({ task: v4_1.edmToTs(task, 'Edm.Int32') }); },
            Description: function (description) { return ({ description: v4_1.edmToTs(description, 'Edm.String') }); },
            ExpectedCosts: function (expectedCosts) { return ({ expectedCosts: v4_1.edmToTs(expectedCosts, 'Edm.Double') }); },
            InvoicedAmountSales: function (invoicedAmountSales) { return ({ invoicedAmountSales: v4_1.edmToTs(invoicedAmountSales, 'Edm.Double') }); },
            OpenAmountSales: function (openAmountSales) { return ({ openAmountSales: v4_1.edmToTs(openAmountSales, 'Edm.Double') }); },
            InvoicedAmountPurchase: function (invoicedAmountPurchase) { return ({ invoicedAmountPurchase: v4_1.edmToTs(invoicedAmountPurchase, 'Edm.Double') }); },
            OpenAmountPurchase: function (openAmountPurchase) { return ({ openAmountPurchase: v4_1.edmToTs(openAmountPurchase, 'Edm.Double') }); },
            PercentualCompletness: function (percentualCompletness) { return ({ percentualCompletness: v4_1.edmToTs(percentualCompletness, 'Edm.Double') }); },
            StageOwner: function (stageOwner) { return ({ stageOwner: v4_1.edmToTs(stageOwner, 'Edm.Int32') }); },
            DependsOnStage1: function (dependsOnStage1) { return ({ dependsOnStage1: v4_1.edmToTs(dependsOnStage1, 'Edm.Int32') }); },
            DependsOnStage2: function (dependsOnStage2) { return ({ dependsOnStage2: v4_1.edmToTs(dependsOnStage2, 'Edm.Int32') }); },
            DependsOnStage3: function (dependsOnStage3) { return ({ dependsOnStage3: v4_1.edmToTs(dependsOnStage3, 'Edm.Int32') }); },
            DependsOnStage4: function (dependsOnStage4) { return ({ dependsOnStage4: v4_1.edmToTs(dependsOnStage4, 'Edm.Int32') }); },
            DependsOnStageID1: function (dependsOnStageId1) { return ({ dependsOnStageId1: v4_1.edmToTs(dependsOnStageId1, 'Edm.Int32') }); },
            DependsOnStageID2: function (dependsOnStageId2) { return ({ dependsOnStageId2: v4_1.edmToTs(dependsOnStageId2, 'Edm.Int32') }); },
            DependsOnStageID3: function (dependsOnStageId3) { return ({ dependsOnStageId3: v4_1.edmToTs(dependsOnStageId3, 'Edm.Int32') }); },
            DependsOnStageID4: function (dependsOnStageId4) { return ({ dependsOnStageId4: v4_1.edmToTs(dependsOnStageId4, 'Edm.Int32') }); },
            AttachmentEntry: function (attachmentEntry) { return ({ attachmentEntry: v4_1.edmToTs(attachmentEntry, 'Edm.Int32') }); },
            UniqueID: function (uniqueId) { return ({ uniqueId: v4_1.edmToTs(uniqueId, 'Edm.String') }); },
            FinishedDate: function (finishedDate) { return ({ finishedDate: v4_1.edmToTs(finishedDate, 'Edm.DateTimeOffset') }); }
        });
    }
    PmStageData.build = build;
})(PmStageData = exports.PmStageData || (exports.PmStageData = {}));
//# sourceMappingURL=PmStageData.js.map