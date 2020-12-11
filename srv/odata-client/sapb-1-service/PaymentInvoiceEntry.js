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
exports.PaymentInvoiceEntry = exports.PaymentInvoiceEntryField = exports.createPaymentInvoiceEntry = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PaymentInvoiceEntry.build]] instead.
 */
function createPaymentInvoiceEntry(json) {
    return PaymentInvoiceEntry.build(json);
}
exports.createPaymentInvoiceEntry = createPaymentInvoiceEntry;
/**
 * PaymentInvoiceEntryField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentInvoiceEntryField = /** @class */ (function (_super) {
    __extends(PaymentInvoiceEntryField, _super);
    /**
     * Creates an instance of PaymentInvoiceEntryField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentInvoiceEntryField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentInvoiceEntry) || this;
        /**
         * Representation of the [[PaymentInvoiceEntry.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeEnumPropertyField('DocType', _this);
        /**
         * Representation of the [[PaymentInvoiceEntry.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentInvoiceEntry.installmentId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.installmentId = new core_1.ComplexTypeNumberPropertyField('InstallmentId', _this, 'Edm.Int32');
        return _this;
    }
    return PaymentInvoiceEntryField;
}(core_1.ComplexTypeField));
exports.PaymentInvoiceEntryField = PaymentInvoiceEntryField;
var PaymentInvoiceEntry;
(function (PaymentInvoiceEntry) {
    /**
     * Metadata information on all properties of the `PaymentInvoiceEntry` complex type.
     */
    PaymentInvoiceEntry._propertyMetadata = [{
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
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentInvoiceEntry);
    }
    PaymentInvoiceEntry.build = build;
})(PaymentInvoiceEntry = exports.PaymentInvoiceEntry || (exports.PaymentInvoiceEntry = {}));
//# sourceMappingURL=PaymentInvoiceEntry.js.map