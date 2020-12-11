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
exports.CreditLine = exports.CreditLineField = exports.createCreditLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of CreditLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function CreditLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, CreditLine) || this;
        /**
         * Representation of the [[CreditLine.absId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.absId = new core_1.ComplexTypeNumberPropertyField('AbsId', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.creditCard]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCard = new core_1.ComplexTypeNumberPropertyField('CreditCard', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.voucherNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.voucherNumber = new core_1.ComplexTypeStringPropertyField('VoucherNumber', _this, 'Edm.String');
        /**
         * Representation of the [[CreditLine.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new core_1.ComplexTypeNumberPropertyField('PaymentMethodCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.payDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.payDate = new core_1.ComplexTypeDatePropertyField('PayDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[CreditLine.deposited]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deposited = new core_1.ComplexTypeEnumPropertyField('Deposited', _this);
        /**
         * Representation of the [[CreditLine.numOfPayments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.numOfPayments = new core_1.ComplexTypeNumberPropertyField('NumOfPayments', _this, 'Edm.Int32');
        /**
         * Representation of the [[CreditLine.customer]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customer = new core_1.ComplexTypeStringPropertyField('Customer', _this, 'Edm.String');
        /**
         * Representation of the [[CreditLine.reference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference = new core_1.ComplexTypeStringPropertyField('Reference', _this, 'Edm.String');
        /**
         * Representation of the [[CreditLine.transferred]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transferred = new core_1.ComplexTypeEnumPropertyField('Transferred', _this);
        /**
         * Representation of the [[CreditLine.total]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.total = new core_1.ComplexTypeNumberPropertyField('Total', _this, 'Edm.Double');
        /**
         * Representation of the [[CreditLine.creditCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditCurrency = new core_1.ComplexTypeStringPropertyField('CreditCurrency', _this, 'Edm.String');
        return _this;
    }
    return CreditLineField;
}(core_1.ComplexTypeField));
exports.CreditLineField = CreditLineField;
var CreditLine;
(function (CreditLine) {
    /**
     * Metadata information on all properties of the `CreditLine` complex type.
     */
    CreditLine._propertyMetadata = [{
            originalName: 'AbsId',
            name: 'absId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CreditCard',
            name: 'creditCard',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VoucherNumber',
            name: 'voucherNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentMethodCode',
            name: 'paymentMethodCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PayDate',
            name: 'payDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Deposited',
            name: 'deposited',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'NumOfPayments',
            name: 'numOfPayments',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Customer',
            name: 'customer',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Reference',
            name: 'reference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Transferred',
            name: 'transferred',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Total',
            name: 'total',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditCurrency',
            name: 'creditCurrency',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, CreditLine);
    }
    CreditLine.build = build;
})(CreditLine = exports.CreditLine || (exports.CreditLine = {}));
//# sourceMappingURL=CreditLine.js.map