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
exports.PmsSummaryData = exports.PmsSummaryDataField = exports.createPmsSummaryData = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PmsSummaryData.build]] instead.
 */
function createPmsSummaryData(json) {
    return PmsSummaryData.build(json);
}
exports.createPmsSummaryData = createPmsSummaryData;
/**
 * PmsSummaryDataField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PmsSummaryDataField = /** @class */ (function (_super) {
    __extends(PmsSummaryDataField, _super);
    /**
     * Creates an instance of PmsSummaryDataField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PmsSummaryDataField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PmsSummaryData) || this;
        /**
         * Representation of the [[PmsSummaryData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsSummaryData.subprojectBudget]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectBudget = new core_1.ComplexTypeNumberPropertyField('SubprojectBudget', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumOpenAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumOpenAmountPurchase = new core_1.ComplexTypeNumberPropertyField('SumOpenAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumInvoicedAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumInvoicedAmountPurchase = new core_1.ComplexTypeNumberPropertyField('SumInvoicedAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalAmountPurchase = new core_1.ComplexTypeNumberPropertyField('TotalAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalVariancePurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVariancePurchase = new core_1.ComplexTypeNumberPropertyField('TotalVariancePurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.variancePerceptionPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePerceptionPurchase = new core_1.ComplexTypeNumberPropertyField('VariancePerceptionPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumSubprojectBudget]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumSubprojectBudget = new core_1.ComplexTypeNumberPropertyField('AccumSubprojectBudget', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumOpenAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumOpenAmountPurchase = new core_1.ComplexTypeNumberPropertyField('AccumOpenAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumInvoicedAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumInvoicedAmountPurchase = new core_1.ComplexTypeNumberPropertyField('AccumInvoicedAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalPurchase = new core_1.ComplexTypeNumberPropertyField('AccumTotalPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalVariancePurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalVariancePurchase = new core_1.ComplexTypeNumberPropertyField('AccumTotalVariancePurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumVariancePerceptionPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumVariancePerceptionPurchase = new core_1.ComplexTypeNumberPropertyField('AccumVariancePerceptionPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.potentialSubprojectAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.potentialSubprojectAmount = new core_1.ComplexTypeNumberPropertyField('PotentialSubprojectAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumOpenAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumOpenAmountSales = new core_1.ComplexTypeNumberPropertyField('SumOpenAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumInvoicedAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumInvoicedAmountSales = new core_1.ComplexTypeNumberPropertyField('SumInvoicedAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalAmountSales = new core_1.ComplexTypeNumberPropertyField('TotalAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalVarianceSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVarianceSales = new core_1.ComplexTypeNumberPropertyField('TotalVarianceSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.variancePerceptionSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePerceptionSales = new core_1.ComplexTypeNumberPropertyField('VariancePerceptionSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumPotentialSubprojectAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumPotentialSubprojectAmount = new core_1.ComplexTypeNumberPropertyField('AccumPotentialSubprojectAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumOpenAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumOpenAmountSales = new core_1.ComplexTypeNumberPropertyField('AccumOpenAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumInvoicedAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumInvoicedAmountSales = new core_1.ComplexTypeNumberPropertyField('AccumInvoicedAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalSales = new core_1.ComplexTypeNumberPropertyField('AccumTotalSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalVarianceSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalVarianceSales = new core_1.ComplexTypeNumberPropertyField('AccumTotalVarianceSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumVariancePerceptionSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumVariancePerceptionSales = new core_1.ComplexTypeNumberPropertyField('AccumVariancePerceptionSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualItemComponentCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualItemComponentCost = new core_1.ComplexTypeNumberPropertyField('ActualItemComponentCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualResourceComponentCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualResourceComponentCost = new core_1.ComplexTypeNumberPropertyField('ActualResourceComponentCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualAdditionalCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualAdditionalCost = new core_1.ComplexTypeNumberPropertyField('ActualAdditionalCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualProductCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualProductCost = new core_1.ComplexTypeNumberPropertyField('ActualProductCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualByProductCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualByProductCost = new core_1.ComplexTypeNumberPropertyField('ActualByProductCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVariance = new core_1.ComplexTypeNumberPropertyField('TotalVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsSummaryData.actualClosingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualClosingDate = new core_1.ComplexTypeDatePropertyField('ActualClosingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsSummaryData.overdue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overdue = new core_1.ComplexTypeNumberPropertyField('Overdue', _this, 'Edm.Int32');
        return _this;
    }
    return PmsSummaryDataField;
}(core_1.ComplexTypeField));
exports.PmsSummaryDataField = PmsSummaryDataField;
var PmsSummaryData;
(function (PmsSummaryData) {
    /**
     * Metadata information on all properties of the `PmsSummaryData` complex type.
     */
    PmsSummaryData._propertyMetadata = [{
            originalName: 'LineID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SubprojectBudget',
            name: 'subprojectBudget',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumOpenAmountPurchase',
            name: 'sumOpenAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumInvoicedAmountPurchase',
            name: 'sumInvoicedAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalAmountPurchase',
            name: 'totalAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalVariancePurchase',
            name: 'totalVariancePurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VariancePerceptionPurchase',
            name: 'variancePerceptionPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumSubprojectBudget',
            name: 'accumSubprojectBudget',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumOpenAmountPurchase',
            name: 'accumOpenAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumInvoicedAmountPurchase',
            name: 'accumInvoicedAmountPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumTotalPurchase',
            name: 'accumTotalPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumTotalVariancePurchase',
            name: 'accumTotalVariancePurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumVariancePerceptionPurchase',
            name: 'accumVariancePerceptionPurchase',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PotentialSubprojectAmount',
            name: 'potentialSubprojectAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumOpenAmountSales',
            name: 'sumOpenAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumInvoicedAmountSales',
            name: 'sumInvoicedAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalAmountSales',
            name: 'totalAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalVarianceSales',
            name: 'totalVarianceSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VariancePerceptionSales',
            name: 'variancePerceptionSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumPotentialSubprojectAmount',
            name: 'accumPotentialSubprojectAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumOpenAmountSales',
            name: 'accumOpenAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumInvoicedAmountSales',
            name: 'accumInvoicedAmountSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumTotalSales',
            name: 'accumTotalSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumTotalVarianceSales',
            name: 'accumTotalVarianceSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AccumVariancePerceptionSales',
            name: 'accumVariancePerceptionSales',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualItemComponentCost',
            name: 'actualItemComponentCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualResourceComponentCost',
            name: 'actualResourceComponentCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualAdditionalCost',
            name: 'actualAdditionalCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualProductCost',
            name: 'actualProductCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ActualByProductCost',
            name: 'actualByProductCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalVariance',
            name: 'totalVariance',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ActualClosingDate',
            name: 'actualClosingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Overdue',
            name: 'overdue',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PmsSummaryData);
    }
    PmsSummaryData.build = build;
})(PmsSummaryData = exports.PmsSummaryData || (exports.PmsSummaryData = {}));
//# sourceMappingURL=PmsSummaryData.js.map