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
exports.PmsStageData = exports.PmsStageDataField = exports.createPmsStageData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmsStageData.build]] instead.
 */
function createPmsStageData(json) {
    return PmsStageData.build(json);
}
exports.createPmsStageData = createPmsStageData;
/**
 * PmsStageDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsStageDataField = /** @class */ (function (_super) {
    __extends(PmsStageDataField, _super);
    /**
     * Creates an instance of PmsStageDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmsStageDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmsStageData) || this;
        /**
         * Representation of the [[PmsStageData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.stageType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageType = new core_1.ComplexTypeNumberPropertyField('StageType', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsStageData.closeDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.closeDate = new core_1.ComplexTypeDatePropertyField('CloseDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsStageData.task]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.task = new core_1.ComplexTypeNumberPropertyField('Task', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.description]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.description = new core_1.ComplexTypeStringPropertyField('Description', _this, 'Edm.String');
        /**
         * Representation of the [[PmsStageData.expectedCosts]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expectedCosts = new core_1.ComplexTypeNumberPropertyField('ExpectedCosts', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsStageData.invoicedAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoicedAmountSales = new core_1.ComplexTypeNumberPropertyField('InvoicedAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsStageData.openAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountSales = new core_1.ComplexTypeNumberPropertyField('OpenAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsStageData.invoicedAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoicedAmountPurchase = new core_1.ComplexTypeNumberPropertyField('InvoicedAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsStageData.openAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountPurchase = new core_1.ComplexTypeNumberPropertyField('OpenAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsStageData.percentualCompletness]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentualCompletness = new core_1.ComplexTypeNumberPropertyField('PercentualCompletness', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsStageData.isFinished]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isFinished = new core_1.ComplexTypeEnumPropertyField('IsFinished', _this);
        /**
         * Representation of the [[PmsStageData.stageOwner]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageOwner = new core_1.ComplexTypeNumberPropertyField('StageOwner', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStage1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage1 = new core_1.ComplexTypeNumberPropertyField('DependsOnStage1', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStage2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage2 = new core_1.ComplexTypeNumberPropertyField('DependsOnStage2', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStage3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage3 = new core_1.ComplexTypeNumberPropertyField('DependsOnStage3', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStage4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStage4 = new core_1.ComplexTypeNumberPropertyField('DependsOnStage4', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.stageDependency1Type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageDependency1Type = new core_1.ComplexTypeEnumPropertyField('StageDependency1Type', _this);
        /**
         * Representation of the [[PmsStageData.stageDependency2Type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageDependency2Type = new core_1.ComplexTypeEnumPropertyField('StageDependency2Type', _this);
        /**
         * Representation of the [[PmsStageData.stageDependency3Type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageDependency3Type = new core_1.ComplexTypeEnumPropertyField('StageDependency3Type', _this);
        /**
         * Representation of the [[PmsStageData.stageDependency4Type]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageDependency4Type = new core_1.ComplexTypeEnumPropertyField('StageDependency4Type', _this);
        /**
         * Representation of the [[PmsStageData.dependsOnStageId1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId1 = new core_1.ComplexTypeNumberPropertyField('DependsOnStageID1', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStageId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId2 = new core_1.ComplexTypeNumberPropertyField('DependsOnStageID2', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStageId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId3 = new core_1.ComplexTypeNumberPropertyField('DependsOnStageID3', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.dependsOnStageId4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dependsOnStageId4 = new core_1.ComplexTypeNumberPropertyField('DependsOnStageID4', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.attachmentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.attachmentEntry = new core_1.ComplexTypeNumberPropertyField('AttachmentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsStageData.uniqueId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uniqueId = new core_1.ComplexTypeStringPropertyField('UniqueID', _this, 'Edm.String');
        /**
         * Representation of the [[PmsStageData.finishedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.finishedDate = new core_1.ComplexTypeDatePropertyField('FinishedDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return PmsStageDataField;
}(core_1.ComplexTypeField));
exports.PmsStageDataField = PmsStageDataField;
var PmsStageData;
(function (PmsStageData) {
    /**
     * Metadata information on all properties of the `PmsStageData` complex type.
     */
    PmsStageData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageType',
            name: 'stageType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StartDate',
            name: 'startDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CloseDate',
            name: 'closeDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Task',
            name: 'task',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Description',
            name: 'description',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpectedCosts',
            name: 'expectedCosts',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InvoicedAmountSales',
            name: 'invoicedAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenAmountSales',
            name: 'openAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InvoicedAmountPurchase',
            name: 'invoicedAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenAmountPurchase',
            name: 'openAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PercentualCompletness',
            name: 'percentualCompletness',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'IsFinished',
            name: 'isFinished',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StageOwner',
            name: 'stageOwner',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStage1',
            name: 'dependsOnStage1',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStage2',
            name: 'dependsOnStage2',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStage3',
            name: 'dependsOnStage3',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStage4',
            name: 'dependsOnStage4',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageDependency1Type',
            name: 'stageDependency1Type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StageDependency2Type',
            name: 'stageDependency2Type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StageDependency3Type',
            name: 'stageDependency3Type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'StageDependency4Type',
            name: 'stageDependency4Type',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DependsOnStageID1',
            name: 'dependsOnStageId1',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStageID2',
            name: 'dependsOnStageId2',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStageID3',
            name: 'dependsOnStageId3',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DependsOnStageID4',
            name: 'dependsOnStageId4',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AttachmentEntry',
            name: 'attachmentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UniqueID',
            name: 'uniqueId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FinishedDate',
            name: 'finishedDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmsStageData);
    }
    PmsStageData.build = build;
})(PmsStageData = exports.PmsStageData || (exports.PmsStageData = {}));
//# sourceMappingURL=PmsStageData.js.map