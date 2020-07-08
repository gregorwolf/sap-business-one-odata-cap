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
exports.CreditPaymentMethodParams = exports.CreditPaymentMethodParamsField = exports.createCreditPaymentMethodParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CreditPaymentMethodParams.build]] instead.
 */
function createCreditPaymentMethodParams(json) {
    return CreditPaymentMethodParams.build(json);
}
exports.createCreditPaymentMethodParams = createCreditPaymentMethodParams;
/**
 * CreditPaymentMethodParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreditPaymentMethodParamsField = /** @class */ (function (_super) {
    __extends(CreditPaymentMethodParamsField, _super);
    function CreditPaymentMethodParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CreditPaymentMethodParams.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new v4_1.ComplexTypeNumberPropertyField('PaymentMethodCode', _this, 'Edm.Int32');
        return _this;
    }
    return CreditPaymentMethodParamsField;
}(v4_1.ComplexTypeField));
exports.CreditPaymentMethodParamsField = CreditPaymentMethodParamsField;
var CreditPaymentMethodParams;
(function (CreditPaymentMethodParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PaymentMethodCode: function (paymentMethodCode) { return ({ paymentMethodCode: v4_1.edmToTs(paymentMethodCode, 'Edm.Int32') }); }
        });
    }
    CreditPaymentMethodParams.build = build;
})(CreditPaymentMethodParams = exports.CreditPaymentMethodParams || (exports.CreditPaymentMethodParams = {}));
//# sourceMappingURL=CreditPaymentMethodParams.js.map