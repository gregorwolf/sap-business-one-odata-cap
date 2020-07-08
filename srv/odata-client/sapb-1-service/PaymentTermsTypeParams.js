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
exports.PaymentTermsTypeParams = exports.PaymentTermsTypeParamsField = exports.createPaymentTermsTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentTermsTypeParams.build]] instead.
 */
function createPaymentTermsTypeParams(json) {
    return PaymentTermsTypeParams.build(json);
}
exports.createPaymentTermsTypeParams = createPaymentTermsTypeParams;
/**
 * PaymentTermsTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentTermsTypeParamsField = /** @class */ (function (_super) {
    __extends(PaymentTermsTypeParamsField, _super);
    function PaymentTermsTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentTermsTypeParams.groupNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.groupNumber = new v4_1.ComplexTypeNumberPropertyField('GroupNumber', _this, 'Edm.Int32');
        return _this;
    }
    return PaymentTermsTypeParamsField;
}(v4_1.ComplexTypeField));
exports.PaymentTermsTypeParamsField = PaymentTermsTypeParamsField;
var PaymentTermsTypeParams;
(function (PaymentTermsTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            GroupNumber: function (groupNumber) { return ({ groupNumber: v4_1.edmToTs(groupNumber, 'Edm.Int32') }); }
        });
    }
    PaymentTermsTypeParams.build = build;
})(PaymentTermsTypeParams = exports.PaymentTermsTypeParams || (exports.PaymentTermsTypeParams = {}));
//# sourceMappingURL=PaymentTermsTypeParams.js.map