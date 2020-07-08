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
exports.PaymentBlockParams = exports.PaymentBlockParamsField = exports.createPaymentBlockParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentBlockParams.build]] instead.
 */
function createPaymentBlockParams(json) {
    return PaymentBlockParams.build(json);
}
exports.createPaymentBlockParams = createPaymentBlockParams;
/**
 * PaymentBlockParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentBlockParamsField = /** @class */ (function (_super) {
    __extends(PaymentBlockParamsField, _super);
    function PaymentBlockParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentBlockParams.absEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absEntry = new v4_1.ComplexTypeNumberPropertyField('AbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentBlockParams.paymentBlockCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentBlockCode = new v4_1.ComplexTypeStringPropertyField('PaymentBlockCode', _this, 'Edm.String');
        return _this;
    }
    return PaymentBlockParamsField;
}(v4_1.ComplexTypeField));
exports.PaymentBlockParamsField = PaymentBlockParamsField;
var PaymentBlockParams;
(function (PaymentBlockParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsEntry: function (absEntry) { return ({ absEntry: v4_1.edmToTs(absEntry, 'Edm.Int32') }); },
            PaymentBlockCode: function (paymentBlockCode) { return ({ paymentBlockCode: v4_1.edmToTs(paymentBlockCode, 'Edm.String') }); }
        });
    }
    PaymentBlockParams.build = build;
})(PaymentBlockParams = exports.PaymentBlockParams || (exports.PaymentBlockParams = {}));
//# sourceMappingURL=PaymentBlockParams.js.map