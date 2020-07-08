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
exports.PaymentRunExportParams = exports.PaymentRunExportParamsField = exports.createPaymentRunExportParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentRunExportParams.build]] instead.
 */
function createPaymentRunExportParams(json) {
    return PaymentRunExportParams.build(json);
}
exports.createPaymentRunExportParams = createPaymentRunExportParams;
/**
 * PaymentRunExportParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentRunExportParamsField = /** @class */ (function (_super) {
    __extends(PaymentRunExportParamsField, _super);
    function PaymentRunExportParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentRunExportParams.absoluteEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absoluteEntry = new v4_1.ComplexTypeNumberPropertyField('AbsoluteEntry', _this, 'Edm.Int32');
        return _this;
    }
    return PaymentRunExportParamsField;
}(v4_1.ComplexTypeField));
exports.PaymentRunExportParamsField = PaymentRunExportParamsField;
var PaymentRunExportParams;
(function (PaymentRunExportParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AbsoluteEntry: function (absoluteEntry) { return ({ absoluteEntry: v4_1.edmToTs(absoluteEntry, 'Edm.Int32') }); }
        });
    }
    PaymentRunExportParams.build = build;
})(PaymentRunExportParams = exports.PaymentRunExportParams || (exports.PaymentRunExportParams = {}));
//# sourceMappingURL=PaymentRunExportParams.js.map