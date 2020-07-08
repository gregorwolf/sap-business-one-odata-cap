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
exports.CreditCardPaymentParams = exports.CreditCardPaymentParamsField = exports.createCreditCardPaymentParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[CreditCardPaymentParams.build]] instead.
 */
function createCreditCardPaymentParams(json) {
    return CreditCardPaymentParams.build(json);
}
exports.createCreditCardPaymentParams = createCreditCardPaymentParams;
/**
 * CreditCardPaymentParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var CreditCardPaymentParamsField = /** @class */ (function (_super) {
    __extends(CreditCardPaymentParamsField, _super);
    function CreditCardPaymentParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[CreditCardPaymentParams.dueDateCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDateCode = new v4_1.ComplexTypeStringPropertyField('DueDateCode', _this, 'Edm.String');
        return _this;
    }
    return CreditCardPaymentParamsField;
}(v4_1.ComplexTypeField));
exports.CreditCardPaymentParamsField = CreditCardPaymentParamsField;
var CreditCardPaymentParams;
(function (CreditCardPaymentParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DueDateCode: function (dueDateCode) { return ({ dueDateCode: v4_1.edmToTs(dueDateCode, 'Edm.String') }); }
        });
    }
    CreditCardPaymentParams.build = build;
})(CreditCardPaymentParams = exports.CreditCardPaymentParams || (exports.CreditCardPaymentParams = {}));
//# sourceMappingURL=CreditCardPaymentParams.js.map