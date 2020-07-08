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
exports.PurchaseTaxInvoiceOperationCode = exports.PurchaseTaxInvoiceOperationCodeField = exports.createPurchaseTaxInvoiceOperationCode = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceOperationCode.build]] instead.
 */
function createPurchaseTaxInvoiceOperationCode(json) {
    return PurchaseTaxInvoiceOperationCode.build(json);
}
exports.createPurchaseTaxInvoiceOperationCode = createPurchaseTaxInvoiceOperationCode;
/**
 * PurchaseTaxInvoiceOperationCodeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PurchaseTaxInvoiceOperationCodeField = /** @class */ (function (_super) {
    __extends(PurchaseTaxInvoiceOperationCodeField, _super);
    function PurchaseTaxInvoiceOperationCodeField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PurchaseTaxInvoiceOperationCode.opCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.opCode = new v4_1.ComplexTypeNumberPropertyField('OpCode', _this, 'Edm.Int32');
        return _this;
    }
    return PurchaseTaxInvoiceOperationCodeField;
}(v4_1.ComplexTypeField));
exports.PurchaseTaxInvoiceOperationCodeField = PurchaseTaxInvoiceOperationCodeField;
var PurchaseTaxInvoiceOperationCode;
(function (PurchaseTaxInvoiceOperationCode) {
    function build(json) {
        return v4_1.createComplexType(json, {
            OpCode: function (opCode) { return ({ opCode: v4_1.edmToTs(opCode, 'Edm.Int32') }); }
        });
    }
    PurchaseTaxInvoiceOperationCode.build = build;
})(PurchaseTaxInvoiceOperationCode = exports.PurchaseTaxInvoiceOperationCode || (exports.PurchaseTaxInvoiceOperationCode = {}));
//# sourceMappingURL=PurchaseTaxInvoiceOperationCode.js.map