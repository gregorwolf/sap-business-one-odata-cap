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
exports.ProductionOrdersStage = exports.ProductionOrdersStageField = exports.createProductionOrdersStage = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ProductionOrdersStageField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ProductionOrdersStageField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ProductionOrdersStage) || this;
        /**
         * Representation of the [[ProductionOrdersStage.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.stageId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageId = new core_1.ComplexTypeNumberPropertyField('StageID', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.sequenceNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequenceNumber = new core_1.ComplexTypeNumberPropertyField('SequenceNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.stageEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stageEntry = new core_1.ComplexTypeNumberPropertyField('StageEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[ProductionOrdersStage.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[ProductionOrdersStage.startDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startDate = new core_1.ComplexTypeDatePropertyField('StartDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrdersStage.endDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endDate = new core_1.ComplexTypeDatePropertyField('EndDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ProductionOrdersStage.requiredDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredDays = new core_1.ComplexTypeNumberPropertyField('RequiredDays', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrdersStage.waitingDays]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.waitingDays = new core_1.ComplexTypeNumberPropertyField('WaitingDays', _this, 'Edm.Double');
        /**
         * Representation of the [[ProductionOrdersStage.calculationProportion]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.calculationProportion = new core_1.ComplexTypeNumberPropertyField('CalculationProportion', _this, 'Edm.Double');
        return _this;
    }
    return ProductionOrdersStageField;
}(core_1.ComplexTypeField));
exports.ProductionOrdersStageField = ProductionOrdersStageField;
var ProductionOrdersStage;
(function (ProductionOrdersStage) {
    /**
     * Metadata information on all properties of the `ProductionOrdersStage` complex type.
     */
    ProductionOrdersStage._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageID',
            name: 'stageId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SequenceNumber',
            name: 'sequenceNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StageEntry',
            name: 'stageEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
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
            originalName: 'RequiredDays',
            name: 'requiredDays',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WaitingDays',
            name: 'waitingDays',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CalculationProportion',
            name: 'calculationProportion',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ProductionOrdersStage);
    }
    ProductionOrdersStage.build = build;
})(ProductionOrdersStage = exports.ProductionOrdersStage || (exports.ProductionOrdersStage = {}));
//# sourceMappingURL=ProductionOrdersStage.js.map