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
exports.PmsSummaryData = exports.PmsSummaryDataField = exports.createPmsSummaryData = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function PmsSummaryDataField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PmsSummaryData.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('LineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[PmsSummaryData.subprojectBudget]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subprojectBudget = new v4_1.ComplexTypeNumberPropertyField('SubprojectBudget', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumOpenAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumOpenAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('SumOpenAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumInvoicedAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumInvoicedAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('SumInvoicedAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('TotalAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalVariancePurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVariancePurchase = new v4_1.ComplexTypeNumberPropertyField('TotalVariancePurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.variancePerceptionPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePerceptionPurchase = new v4_1.ComplexTypeNumberPropertyField('VariancePerceptionPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumSubprojectBudget]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumSubprojectBudget = new v4_1.ComplexTypeNumberPropertyField('AccumSubprojectBudget', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumOpenAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumOpenAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('AccumOpenAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumInvoicedAmountPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumInvoicedAmountPurchase = new v4_1.ComplexTypeNumberPropertyField('AccumInvoicedAmountPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalPurchase = new v4_1.ComplexTypeNumberPropertyField('AccumTotalPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalVariancePurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalVariancePurchase = new v4_1.ComplexTypeNumberPropertyField('AccumTotalVariancePurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumVariancePerceptionPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumVariancePerceptionPurchase = new v4_1.ComplexTypeNumberPropertyField('AccumVariancePerceptionPurchase', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.potentialSubprojectAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.potentialSubprojectAmount = new v4_1.ComplexTypeNumberPropertyField('PotentialSubprojectAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumOpenAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumOpenAmountSales = new v4_1.ComplexTypeNumberPropertyField('SumOpenAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.sumInvoicedAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumInvoicedAmountSales = new v4_1.ComplexTypeNumberPropertyField('SumInvoicedAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalAmountSales = new v4_1.ComplexTypeNumberPropertyField('TotalAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalVarianceSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVarianceSales = new v4_1.ComplexTypeNumberPropertyField('TotalVarianceSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.variancePerceptionSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.variancePerceptionSales = new v4_1.ComplexTypeNumberPropertyField('VariancePerceptionSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumPotentialSubprojectAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumPotentialSubprojectAmount = new v4_1.ComplexTypeNumberPropertyField('AccumPotentialSubprojectAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumOpenAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumOpenAmountSales = new v4_1.ComplexTypeNumberPropertyField('AccumOpenAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumInvoicedAmountSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumInvoicedAmountSales = new v4_1.ComplexTypeNumberPropertyField('AccumInvoicedAmountSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalSales = new v4_1.ComplexTypeNumberPropertyField('AccumTotalSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumTotalVarianceSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumTotalVarianceSales = new v4_1.ComplexTypeNumberPropertyField('AccumTotalVarianceSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.accumVariancePerceptionSales]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accumVariancePerceptionSales = new v4_1.ComplexTypeNumberPropertyField('AccumVariancePerceptionSales', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualItemComponentCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualItemComponentCost = new v4_1.ComplexTypeNumberPropertyField('ActualItemComponentCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualResourceComponentCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualResourceComponentCost = new v4_1.ComplexTypeNumberPropertyField('ActualResourceComponentCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualAdditionalCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualAdditionalCost = new v4_1.ComplexTypeNumberPropertyField('ActualAdditionalCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualProductCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualProductCost = new v4_1.ComplexTypeNumberPropertyField('ActualProductCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.actualByProductCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualByProductCost = new v4_1.ComplexTypeNumberPropertyField('ActualByProductCost', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.totalVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalVariance = new v4_1.ComplexTypeNumberPropertyField('TotalVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[PmsSummaryData.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsSummaryData.actualClosingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualClosingDate = new v4_1.ComplexTypeDatePropertyField('ActualClosingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PmsSummaryData.overdue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.overdue = new v4_1.ComplexTypeNumberPropertyField('Overdue', _this, 'Edm.Int32');
        return _this;
    }
    return PmsSummaryDataField;
}(v4_1.ComplexTypeField));
exports.PmsSummaryDataField = PmsSummaryDataField;
var PmsSummaryData;
(function (PmsSummaryData) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            SubprojectBudget: function (subprojectBudget) { return ({ subprojectBudget: v4_1.edmToTs(subprojectBudget, 'Edm.Double') }); },
            SumOpenAmountPurchase: function (sumOpenAmountPurchase) { return ({ sumOpenAmountPurchase: v4_1.edmToTs(sumOpenAmountPurchase, 'Edm.Double') }); },
            SumInvoicedAmountPurchase: function (sumInvoicedAmountPurchase) { return ({ sumInvoicedAmountPurchase: v4_1.edmToTs(sumInvoicedAmountPurchase, 'Edm.Double') }); },
            TotalAmountPurchase: function (totalAmountPurchase) { return ({ totalAmountPurchase: v4_1.edmToTs(totalAmountPurchase, 'Edm.Double') }); },
            TotalVariancePurchase: function (totalVariancePurchase) { return ({ totalVariancePurchase: v4_1.edmToTs(totalVariancePurchase, 'Edm.Double') }); },
            VariancePerceptionPurchase: function (variancePerceptionPurchase) { return ({ variancePerceptionPurchase: v4_1.edmToTs(variancePerceptionPurchase, 'Edm.Double') }); },
            AccumSubprojectBudget: function (accumSubprojectBudget) { return ({ accumSubprojectBudget: v4_1.edmToTs(accumSubprojectBudget, 'Edm.Double') }); },
            AccumOpenAmountPurchase: function (accumOpenAmountPurchase) { return ({ accumOpenAmountPurchase: v4_1.edmToTs(accumOpenAmountPurchase, 'Edm.Double') }); },
            AccumInvoicedAmountPurchase: function (accumInvoicedAmountPurchase) { return ({ accumInvoicedAmountPurchase: v4_1.edmToTs(accumInvoicedAmountPurchase, 'Edm.Double') }); },
            AccumTotalPurchase: function (accumTotalPurchase) { return ({ accumTotalPurchase: v4_1.edmToTs(accumTotalPurchase, 'Edm.Double') }); },
            AccumTotalVariancePurchase: function (accumTotalVariancePurchase) { return ({ accumTotalVariancePurchase: v4_1.edmToTs(accumTotalVariancePurchase, 'Edm.Double') }); },
            AccumVariancePerceptionPurchase: function (accumVariancePerceptionPurchase) { return ({ accumVariancePerceptionPurchase: v4_1.edmToTs(accumVariancePerceptionPurchase, 'Edm.Double') }); },
            PotentialSubprojectAmount: function (potentialSubprojectAmount) { return ({ potentialSubprojectAmount: v4_1.edmToTs(potentialSubprojectAmount, 'Edm.Double') }); },
            SumOpenAmountSales: function (sumOpenAmountSales) { return ({ sumOpenAmountSales: v4_1.edmToTs(sumOpenAmountSales, 'Edm.Double') }); },
            SumInvoicedAmountSales: function (sumInvoicedAmountSales) { return ({ sumInvoicedAmountSales: v4_1.edmToTs(sumInvoicedAmountSales, 'Edm.Double') }); },
            TotalAmountSales: function (totalAmountSales) { return ({ totalAmountSales: v4_1.edmToTs(totalAmountSales, 'Edm.Double') }); },
            TotalVarianceSales: function (totalVarianceSales) { return ({ totalVarianceSales: v4_1.edmToTs(totalVarianceSales, 'Edm.Double') }); },
            VariancePerceptionSales: function (variancePerceptionSales) { return ({ variancePerceptionSales: v4_1.edmToTs(variancePerceptionSales, 'Edm.Double') }); },
            AccumPotentialSubprojectAmount: function (accumPotentialSubprojectAmount) { return ({ accumPotentialSubprojectAmount: v4_1.edmToTs(accumPotentialSubprojectAmount, 'Edm.Double') }); },
            AccumOpenAmountSales: function (accumOpenAmountSales) { return ({ accumOpenAmountSales: v4_1.edmToTs(accumOpenAmountSales, 'Edm.Double') }); },
            AccumInvoicedAmountSales: function (accumInvoicedAmountSales) { return ({ accumInvoicedAmountSales: v4_1.edmToTs(accumInvoicedAmountSales, 'Edm.Double') }); },
            AccumTotalSales: function (accumTotalSales) { return ({ accumTotalSales: v4_1.edmToTs(accumTotalSales, 'Edm.Double') }); },
            AccumTotalVarianceSales: function (accumTotalVarianceSales) { return ({ accumTotalVarianceSales: v4_1.edmToTs(accumTotalVarianceSales, 'Edm.Double') }); },
            AccumVariancePerceptionSales: function (accumVariancePerceptionSales) { return ({ accumVariancePerceptionSales: v4_1.edmToTs(accumVariancePerceptionSales, 'Edm.Double') }); },
            ActualItemComponentCost: function (actualItemComponentCost) { return ({ actualItemComponentCost: v4_1.edmToTs(actualItemComponentCost, 'Edm.Double') }); },
            ActualResourceComponentCost: function (actualResourceComponentCost) { return ({ actualResourceComponentCost: v4_1.edmToTs(actualResourceComponentCost, 'Edm.Double') }); },
            ActualAdditionalCost: function (actualAdditionalCost) { return ({ actualAdditionalCost: v4_1.edmToTs(actualAdditionalCost, 'Edm.Double') }); },
            ActualProductCost: function (actualProductCost) { return ({ actualProductCost: v4_1.edmToTs(actualProductCost, 'Edm.Double') }); },
            ActualByProductCost: function (actualByProductCost) { return ({ actualByProductCost: v4_1.edmToTs(actualByProductCost, 'Edm.Double') }); },
            TotalVariance: function (totalVariance) { return ({ totalVariance: v4_1.edmToTs(totalVariance, 'Edm.Double') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            ActualClosingDate: function (actualClosingDate) { return ({ actualClosingDate: v4_1.edmToTs(actualClosingDate, 'Edm.DateTimeOffset') }); },
            Overdue: function (overdue) { return ({ overdue: v4_1.edmToTs(overdue, 'Edm.Int32') }); }
        });
    }
    PmsSummaryData.build = build;
})(PmsSummaryData = exports.PmsSummaryData || (exports.PmsSummaryData = {}));
//# sourceMappingURL=PmsSummaryData.js.map