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
exports.ProductionOrdersStage = exports.ProductionOrdersStageField = exports.createProductionOrdersStage = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ProductionOrdersStage.build]] instead.
 */
function createProductionOrdersStage(json) {
    return ProductionOrdersStage.build(json);
}
exports.createProductionOrdersStage = createProductionOrdersStage;
/**
 * ProductionOrdersStageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ProductionOrdersStageField = /** @class */ (function (_super) {
    __extends(ProductionOrdersStageField, _super);
    function ProductionOrdersStageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ProductionOrdersStage.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new v4_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.sequenceNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNumber = new v4_1.ComplexTypeNumberPropertyField('SequenceNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.stageEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageEntry = new v4_1.ComplexTypeNumberPropertyField('StageEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new v4_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrdersStage.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new v4_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrdersStage.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new v4_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrdersStage.requiredDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredDays = new v4_1.ComplexTypeNumberPropertyField('RequiredDays', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrdersStage.waitingDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.waitingDays = new v4_1.ComplexTypeNumberPropertyField('WaitingDays', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrdersStage.calculationProportion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculationProportion = new v4_1.ComplexTypeNumberPropertyField('CalculationProportion', _this, 'Edm.Double');
        return _this;
    }
    return ProductionOrdersStageField;
}(v4_1.ComplexTypeField));
exports.ProductionOrdersStageField = ProductionOrdersStageField;
var ProductionOrdersStage;
(function (ProductionOrdersStage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            StageID: function (stageId) { return ({ stageId: v4_1.edmToTs(stageId, 'Edm.Int32') }); },
            SequenceNumber: function (sequenceNumber) { return ({ sequenceNumber: v4_1.edmToTs(sequenceNumber, 'Edm.Int32') }); },
            StageEntry: function (stageEntry) { return ({ stageEntry: v4_1.edmToTs(stageEntry, 'Edm.Int32') }); },
            Name: function (name) { return ({ name: v4_1.edmToTs(name, 'Edm.String') }); },
            StartDate: function (startDate) { return ({ startDate: v4_1.edmToTs(startDate, 'Edm.DateTimeOffset') }); },
            EndDate: function (endDate) { return ({ endDate: v4_1.edmToTs(endDate, 'Edm.DateTimeOffset') }); },
            RequiredDays: function (requiredDays) { return ({ requiredDays: v4_1.edmToTs(requiredDays, 'Edm.Double') }); },
            WaitingDays: function (waitingDays) { return ({ waitingDays: v4_1.edmToTs(waitingDays, 'Edm.Double') }); },
            CalculationProportion: function (calculationProportion) { return ({ calculationProportion: v4_1.edmToTs(calculationProportion, 'Edm.Double') }); }
        });
    }
    ProductionOrdersStage.build = build;
})(ProductionOrdersStage = exports.ProductionOrdersStage || (exports.ProductionOrdersStage = {}));
//# sourceMappingURL=ProductionOrdersStage.js.map