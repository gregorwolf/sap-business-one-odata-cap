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
exports.PaymentAmountParams = exports.PaymentAmountParamsField = exports.createPaymentAmountParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentAmountParams.build]] instead.
 */
function createPaymentAmountParams(json) {
    return PaymentAmountParams.build(json);
}
exports.createPaymentAmountParams = createPaymentAmountParams;
/**
 * PaymentAmountParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentAmountParamsField = /** @class */ (function (_super) {
    __extends(PaymentAmountParamsField, _super);
    function PaymentAmountParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentAmountParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAmountParams.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new v4_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountPercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountPercentage = new v4_1.ComplexTypeNumberPropertyField('CashDiscountPercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountAmount = new v4_1.ComplexTypeNumberPropertyField('CashDiscountAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountAmountFc = new v4_1.ComplexTypeNumberPropertyField('CashDiscountAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountAmountSc = new v4_1.ComplexTypeNumberPropertyField('CashDiscountAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.totalPaymentAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalPaymentAmount = new v4_1.ComplexTypeNumberPropertyField('TotalPaymentAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.totalPaymentAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalPaymentAmountFc = new v4_1.ComplexTypeNumberPropertyField('TotalPaymentAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.totalPaymentAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalPaymentAmountSc = new v4_1.ComplexTypeNumberPropertyField('TotalPaymentAmountSC', _this, 'Edm.Double');
        return _this;
    }
    return PaymentAmountParamsField;
}(v4_1.ComplexTypeField));
exports.PaymentAmountParamsField = PaymentAmountParamsField;
var PaymentAmountParams;
(function (PaymentAmountParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            InstallmentId: function (installmentId) { return ({ installmentId: v4_1.edmToTs(installmentId, 'Edm.Int32') }); },
            CashDiscountPercentage: function (cashDiscountPercentage) { return ({ cashDiscountPercentage: v4_1.edmToTs(cashDiscountPercentage, 'Edm.Double') }); },
            CashDiscountAmount: function (cashDiscountAmount) { return ({ cashDiscountAmount: v4_1.edmToTs(cashDiscountAmount, 'Edm.Double') }); },
            CashDiscountAmountFC: function (cashDiscountAmountFc) { return ({ cashDiscountAmountFc: v4_1.edmToTs(cashDiscountAmountFc, 'Edm.Double') }); },
            CashDiscountAmountSC: function (cashDiscountAmountSc) { return ({ cashDiscountAmountSc: v4_1.edmToTs(cashDiscountAmountSc, 'Edm.Double') }); },
            TotalPaymentAmount: function (totalPaymentAmount) { return ({ totalPaymentAmount: v4_1.edmToTs(totalPaymentAmount, 'Edm.Double') }); },
            TotalPaymentAmountFC: function (totalPaymentAmountFc) { return ({ totalPaymentAmountFc: v4_1.edmToTs(totalPaymentAmountFc, 'Edm.Double') }); },
            TotalPaymentAmountSC: function (totalPaymentAmountSc) { return ({ totalPaymentAmountSc: v4_1.edmToTs(totalPaymentAmountSc, 'Edm.Double') }); }
        });
    }
    PaymentAmountParams.build = build;
})(PaymentAmountParams = exports.PaymentAmountParams || (exports.PaymentAmountParams = {}));
//# sourceMappingURL=PaymentAmountParams.js.map