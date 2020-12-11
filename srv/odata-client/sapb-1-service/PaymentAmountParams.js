"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PaymentAmountParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentAmountParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentAmountParams) || this;
        /**
         * Representation of the [[PaymentAmountParams.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeEnumPropertyField('DocType', _this);
        /**
         * Representation of the [[PaymentAmountParams.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAmountParams.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new core_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountPercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountPercentage = new core_1.ComplexTypeNumberPropertyField('CashDiscountPercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountAmount = new core_1.ComplexTypeNumberPropertyField('CashDiscountAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountAmountFc = new core_1.ComplexTypeNumberPropertyField('CashDiscountAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.cashDiscountAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashDiscountAmountSc = new core_1.ComplexTypeNumberPropertyField('CashDiscountAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.totalPaymentAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalPaymentAmount = new core_1.ComplexTypeNumberPropertyField('TotalPaymentAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.totalPaymentAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalPaymentAmountFc = new core_1.ComplexTypeNumberPropertyField('TotalPaymentAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAmountParams.totalPaymentAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalPaymentAmountSc = new core_1.ComplexTypeNumberPropertyField('TotalPaymentAmountSC', _this, 'Edm.Double');
        return _this;
    }
    return PaymentAmountParamsField;
}(core_1.ComplexTypeField));
exports.PaymentAmountParamsField = PaymentAmountParamsField;
var PaymentAmountParams;
(function (PaymentAmountParams) {
    /**
     * Metadata information on all properties of the `PaymentAmountParams` complex type.
     */
    PaymentAmountParams._propertyMetadata = [{
            originalName: 'DocType',
            name: 'docType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'InstallmentId',
            name: 'installmentId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CashDiscountPercentage',
            name: 'cashDiscountPercentage',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CashDiscountAmount',
            name: 'cashDiscountAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CashDiscountAmountFC',
            name: 'cashDiscountAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CashDiscountAmountSC',
            name: 'cashDiscountAmountSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalPaymentAmount',
            name: 'totalPaymentAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalPaymentAmountFC',
            name: 'totalPaymentAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalPaymentAmountSC',
            name: 'totalPaymentAmountSc',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentAmountParams);
    }
    PaymentAmountParams.build = build;
})(PaymentAmountParams = exports.PaymentAmountParams || (exports.PaymentAmountParams = {}));
//# sourceMappingURL=PaymentAmountParams.js.map