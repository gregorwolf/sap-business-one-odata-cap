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
exports.PaymentInvoice = exports.PaymentInvoiceField = exports.createPaymentInvoice = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PaymentInvoiceField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentInvoiceField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentInvoice) || this;
        /**
         * Representation of the [[PaymentInvoice.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.sumApplied]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumApplied = new core_1.ComplexTypeNumberPropertyField('SumApplied', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.appliedFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedFc = new core_1.ComplexTypeNumberPropertyField('AppliedFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.appliedSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedSys = new core_1.ComplexTypeNumberPropertyField('AppliedSys', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.docRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docRate = new core_1.ComplexTypeNumberPropertyField('DocRate', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.docLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docLine = new core_1.ComplexTypeNumberPropertyField('DocLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.invoiceType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.invoiceType = new core_1.ComplexTypeEnumPropertyField('InvoiceType', _this);
        /**
         * Representation of the [[PaymentInvoice.discountPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercent = new core_1.ComplexTypeNumberPropertyField('DiscountPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.paidSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paidSum = new core_1.ComplexTypeNumberPropertyField('PaidSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new core_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoice.witholdingTaxApplied]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.witholdingTaxApplied = new core_1.ComplexTypeNumberPropertyField('WitholdingTaxApplied', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.witholdingTaxAppliedFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.witholdingTaxAppliedFc = new core_1.ComplexTypeNumberPropertyField('WitholdingTaxAppliedFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.witholdingTaxAppliedSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.witholdingTaxAppliedSc = new core_1.ComplexTypeNumberPropertyField('WitholdingTaxAppliedSC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.linkDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.linkDate = new core_1.ComplexTypeDatePropertyField('LinkDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentInvoice.distributionRule]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule = new core_1.ComplexTypeStringPropertyField('DistributionRule', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule2 = new core_1.ComplexTypeStringPropertyField('DistributionRule2', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule3 = new core_1.ComplexTypeStringPropertyField('DistributionRule3', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule4 = new core_1.ComplexTypeStringPropertyField('DistributionRule4', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.distributionRule5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributionRule5 = new core_1.ComplexTypeStringPropertyField('DistributionRule5', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentInvoice.totalDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalDiscount = new core_1.ComplexTypeNumberPropertyField('TotalDiscount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.totalDiscountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalDiscountFc = new core_1.ComplexTypeNumberPropertyField('TotalDiscountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentInvoice.totalDiscountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalDiscountSc = new core_1.ComplexTypeNumberPropertyField('TotalDiscountSC', _this, 'Edm.Double');
        return _this;
    }
    return PaymentInvoiceField;
}(core_1.ComplexTypeField));
exports.PaymentInvoiceField = PaymentInvoiceField;
var PaymentInvoice;
(function (PaymentInvoice) {
    /**
     * Metadata information on all properties of the `PaymentInvoice` complex type.
     */
    PaymentInvoice._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SumApplied',
            name: 'sumApplied',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedFC',
            name: 'appliedFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedSys',
            name: 'appliedSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocRate',
            name: 'docRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocLine',
            name: 'docLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'InvoiceType',
            name: 'invoiceType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DiscountPercent',
            name: 'discountPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PaidSum',
            name: 'paidSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InstallmentId',
            name: 'installmentId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'WitholdingTaxApplied',
            name: 'witholdingTaxApplied',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WitholdingTaxAppliedFC',
            name: 'witholdingTaxAppliedFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WitholdingTaxAppliedSC',
            name: 'witholdingTaxAppliedSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LinkDate',
            name: 'linkDate',
            type: 'Edm.DateTimeOffset',
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
            originalName: 'TotalDiscount',
            name: 'totalDiscount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalDiscountFC',
            name: 'totalDiscountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalDiscountSC',
            name: 'totalDiscountSc',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentInvoice);
    }
    PaymentInvoice.build = build;
})(PaymentInvoice = exports.PaymentInvoice || (exports.PaymentInvoice = {}));
//# sourceMappingURL=PaymentInvoice.js.map