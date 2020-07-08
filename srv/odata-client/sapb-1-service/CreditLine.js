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
exports.CreditLine = exports.CreditLineField = exports.createCreditLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CreditLine.build]] instead.
 */
function createCreditLine(json) {
    return CreditLine.build(json);
}
exports.createCreditLine = createCreditLine;
/**
 * CreditLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreditLineField = /** @class */ (function (_super) {
    __extends(CreditLineField, _super);
    function CreditLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CreditLine.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new v4_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.creditCard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCard = new v4_1.ComplexTypeNumberPropertyField('CreditCard', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.voucherNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.voucherNumber = new v4_1.ComplexTypeStringPropertyField('VoucherNumber', _this, 'Edm.String');
        /**
         * Representation of the [[CreditLine.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new v4_1.ComplexTypeNumberPropertyField('PaymentMethodCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.payDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.payDate = new v4_1.ComplexTypeDatePropertyField('PayDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CreditLine.numOfPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfPayments = new v4_1.ComplexTypeNumberPropertyField('NumOfPayments', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.customer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customer = new v4_1.ComplexTypeStringPropertyField('Customer', _this, 'Edm.String');
        /**
         * Representation of the [[CreditLine.reference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference = new v4_1.ComplexTypeStringPropertyField('Reference', _this, 'Edm.String');
        /**
         * Representation of the [[CreditLine.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new v4_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[CreditLine.creditCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCurrency = new v4_1.ComplexTypeStringPropertyField('CreditCurrency', _this, 'Edm.String');
        return _this;
    }
    return CreditLineField;
}(v4_1.ComplexTypeField));
exports.CreditLineField = CreditLineField;
var CreditLine;
(function (CreditLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsId: function (absId) { return ({ absId: v4_1.edmToTs(absId, 'Edm.Int32') }); },
            CreditCard: function (creditCard) { return ({ creditCard: v4_1.edmToTs(creditCard, 'Edm.Int32') }); },
            VoucherNumber: function (voucherNumber) { return ({ voucherNumber: v4_1.edmToTs(voucherNumber, 'Edm.String') }); },
            PaymentMethodCode: function (paymentMethodCode) { return ({ paymentMethodCode: v4_1.edmToTs(paymentMethodCode, 'Edm.Int32') }); },
            PayDate: function (payDate) { return ({ payDate: v4_1.edmToTs(payDate, 'Edm.DateTimeOffset') }); },
            NumOfPayments: function (numOfPayments) { return ({ numOfPayments: v4_1.edmToTs(numOfPayments, 'Edm.Int32') }); },
            Customer: function (customer) { return ({ customer: v4_1.edmToTs(customer, 'Edm.String') }); },
            Reference: function (reference) { return ({ reference: v4_1.edmToTs(reference, 'Edm.String') }); },
            Total: function (total) { return ({ total: v4_1.edmToTs(total, 'Edm.Double') }); },
            CreditCurrency: function (creditCurrency) { return ({ creditCurrency: v4_1.edmToTs(creditCurrency, 'Edm.String') }); }
        });
    }
    CreditLine.build = build;
})(CreditLine = exports.CreditLine || (exports.CreditLine = {}));
//# sourceMappingURL=CreditLine.js.map