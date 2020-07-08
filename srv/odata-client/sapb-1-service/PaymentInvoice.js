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
exports.PaymentInvoice = exports.PaymentInvoiceField = exports.createPaymentInvoice = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentInvoice.build]] instead.
 */
function createPaymentInvoice(json) {
    return PaymentInvoice.build(json);
}
exports.createPaymentInvoice = createPaymentInvoice;
/**
 * PaymentInvoiceField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentInvoiceField = /** @class */ (function (_super) {
    __extends(PaymentInvoiceField, _super);
    function PaymentInvoiceField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentInvoice.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.sumApplied]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumApplied = new v4_1.ComplexTypeNumberPropertyField('SumApplied', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.appliedFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedFc = new v4_1.ComplexTypeNumberPropertyField('AppliedFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.appliedSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedSys = new v4_1.ComplexTypeNumberPropertyField('AppliedSys', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.docRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docRate = new v4_1.ComplexTypeNumberPropertyField('DocRate', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.docLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docLine = new v4_1.ComplexTypeNumberPropertyField('DocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.discountPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercent = new v4_1.ComplexTypeNumberPropertyField('DiscountPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.paidSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidSum = new v4_1.ComplexTypeNumberPropertyField('PaidSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new v4_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.witholdingTaxApplied]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.witholdingTaxApplied = new v4_1.ComplexTypeNumberPropertyField('WitholdingTaxApplied', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.witholdingTaxAppliedFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.witholdingTaxAppliedFc = new v4_1.ComplexTypeNumberPropertyField('WitholdingTaxAppliedFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.witholdingTaxAppliedSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.witholdingTaxAppliedSc = new v4_1.ComplexTypeNumberPropertyField('WitholdingTaxAppliedSC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.linkDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkDate = new v4_1.ComplexTypeDatePropertyField('LinkDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentInvoice.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new v4_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new v4_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new v4_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new v4_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new v4_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.totalDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalDiscount = new v4_1.ComplexTypeNumberPropertyField('TotalDiscount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.totalDiscountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalDiscountFc = new v4_1.ComplexTypeNumberPropertyField('TotalDiscountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.totalDiscountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalDiscountSc = new v4_1.ComplexTypeNumberPropertyField('TotalDiscountSC', _this, 'Edm.Double');
        return _this;
    }
    return PaymentInvoiceField;
}(v4_1.ComplexTypeField));
exports.PaymentInvoiceField = PaymentInvoiceField;
var PaymentInvoice;
(function (PaymentInvoice) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            SumApplied: function (sumApplied) { return ({ sumApplied: v4_1.edmToTs(sumApplied, 'Edm.Double') }); },
            AppliedFC: function (appliedFc) { return ({ appliedFc: v4_1.edmToTs(appliedFc, 'Edm.Double') }); },
            AppliedSys: function (appliedSys) { return ({ appliedSys: v4_1.edmToTs(appliedSys, 'Edm.Double') }); },
            DocRate: function (docRate) { return ({ docRate: v4_1.edmToTs(docRate, 'Edm.Double') }); },
            DocLine: function (docLine) { return ({ docLine: v4_1.edmToTs(docLine, 'Edm.Int32') }); },
            DiscountPercent: function (discountPercent) { return ({ discountPercent: v4_1.edmToTs(discountPercent, 'Edm.Double') }); },
            PaidSum: function (paidSum) { return ({ paidSum: v4_1.edmToTs(paidSum, 'Edm.Double') }); },
            InstallmentId: function (installmentId) { return ({ installmentId: v4_1.edmToTs(installmentId, 'Edm.Int32') }); },
            WitholdingTaxApplied: function (witholdingTaxApplied) { return ({ witholdingTaxApplied: v4_1.edmToTs(witholdingTaxApplied, 'Edm.Double') }); },
            WitholdingTaxAppliedFC: function (witholdingTaxAppliedFc) { return ({ witholdingTaxAppliedFc: v4_1.edmToTs(witholdingTaxAppliedFc, 'Edm.Double') }); },
            WitholdingTaxAppliedSC: function (witholdingTaxAppliedSc) { return ({ witholdingTaxAppliedSc: v4_1.edmToTs(witholdingTaxAppliedSc, 'Edm.Double') }); },
            LinkDate: function (linkDate) { return ({ linkDate: v4_1.edmToTs(linkDate, 'Edm.DateTimeOffset') }); },
            DistributionRule: function (distributionRule) { return ({ distributionRule: v4_1.edmToTs(distributionRule, 'Edm.String') }); },
            DistributionRule2: function (distributionRule2) { return ({ distributionRule2: v4_1.edmToTs(distributionRule2, 'Edm.String') }); },
            DistributionRule3: function (distributionRule3) { return ({ distributionRule3: v4_1.edmToTs(distributionRule3, 'Edm.String') }); },
            DistributionRule4: function (distributionRule4) { return ({ distributionRule4: v4_1.edmToTs(distributionRule4, 'Edm.String') }); },
            DistributionRule5: function (distributionRule5) { return ({ distributionRule5: v4_1.edmToTs(distributionRule5, 'Edm.String') }); },
            TotalDiscount: function (totalDiscount) { return ({ totalDiscount: v4_1.edmToTs(totalDiscount, 'Edm.Double') }); },
            TotalDiscountFC: function (totalDiscountFc) { return ({ totalDiscountFc: v4_1.edmToTs(totalDiscountFc, 'Edm.Double') }); },
            TotalDiscountSC: function (totalDiscountSc) { return ({ totalDiscountSc: v4_1.edmToTs(totalDiscountSc, 'Edm.Double') }); }
        });
    }
    PaymentInvoice.build = build;
})(PaymentInvoice = exports.PaymentInvoice || (exports.PaymentInvoice = {}));
//# sourceMappingURL=PaymentInvoice.js.map