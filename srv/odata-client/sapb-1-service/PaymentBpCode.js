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
exports.PaymentBpCode = exports.PaymentBpCodeField = exports.createPaymentBpCode = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentBpCode.build]] instead.
 */
function createPaymentBpCode(json) {
    return PaymentBpCode.build(json);
}
exports.createPaymentBpCode = createPaymentBpCode;
/**
 * PaymentBpCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentBpCodeField = /** @class */ (function (_super) {
    __extends(PaymentBpCodeField, _super);
    function PaymentBpCodeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentBpCode.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentBpCode.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new v4_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return PaymentBpCodeField;
}(v4_1.ComplexTypeField));
exports.PaymentBpCodeField = PaymentBpCodeField;
var PaymentBpCode;
(function (PaymentBpCode) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            Date: function (date) { return ({ date: v4_1.edmToTs(date, 'Edm.DateTimeOffset') }); }
        });
    }
    PaymentBpCode.build = build;
})(PaymentBpCode = exports.PaymentBpCode || (exports.PaymentBpCode = {}));
//# sourceMappingURL=PaymentBpCode.js.map