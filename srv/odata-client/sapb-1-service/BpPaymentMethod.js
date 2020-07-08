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
exports.BpPaymentMethod = exports.BpPaymentMethodField = exports.createBpPaymentMethod = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BpPaymentMethod.build]] instead.
 */
function createBpPaymentMethod(json) {
    return BpPaymentMethod.build(json);
}
exports.createBpPaymentMethod = createBpPaymentMethod;
/**
 * BpPaymentMethodField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpPaymentMethodField = /** @class */ (function (_super) {
    __extends(BpPaymentMethodField, _super);
    function BpPaymentMethodField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpPaymentMethod.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new v4_1.ComplexTypeStringPropertyField('PaymentMethodCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpPaymentMethod.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpPaymentMethod.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        return _this;
    }
    return BpPaymentMethodField;
}(v4_1.ComplexTypeField));
exports.BpPaymentMethodField = BpPaymentMethodField;
var BpPaymentMethod;
(function (BpPaymentMethod) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PaymentMethodCode: function (paymentMethodCode) { return ({ paymentMethodCode: v4_1.edmToTs(paymentMethodCode, 'Edm.String') }); },
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); }
        });
    }
    BpPaymentMethod.build = build;
})(BpPaymentMethod = exports.BpPaymentMethod || (exports.BpPaymentMethod = {}));
//# sourceMappingURL=BpPaymentMethod.js.map