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
exports.MultiplePayment = exports.MultiplePaymentField = exports.createMultiplePayment = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[MultiplePayment.build]] instead.
 */
function createMultiplePayment(json) {
    return MultiplePayment.build(json);
}
exports.createMultiplePayment = createMultiplePayment;
/**
 * MultiplePaymentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var MultiplePaymentField = /** @class */ (function (_super) {
    __extends(MultiplePaymentField, _super);
    /**
     * Creates an instance of MultiplePaymentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function MultiplePaymentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, MultiplePayment) || this;
        /**
         * Representation of the [[MultiplePayment.bankStatmentLineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStatmentLineId = new core_1.ComplexTypeNumberPropertyField('BankStatmentLineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[MultiplePayment.listLineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.listLineId = new core_1.ComplexTypeNumberPropertyField('ListLineID', _this, 'Edm.Int32');
        /**
         * Representation of the [[MultiplePayment.documentIdentifier]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentIdentifier = new core_1.ComplexTypeStringPropertyField('DocumentIdentifier', _this, 'Edm.String');
        /**
         * Representation of the [[MultiplePayment.amountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountLc = new core_1.ComplexTypeNumberPropertyField('AmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[MultiplePayment.amountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountFc = new core_1.ComplexTypeNumberPropertyField('AmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[MultiplePayment.isDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isDebit = new core_1.ComplexTypeEnumPropertyField('IsDebit', _this);
        return _this;
    }
    return MultiplePaymentField;
}(core_1.ComplexTypeField));
exports.MultiplePaymentField = MultiplePaymentField;
var MultiplePayment;
(function (MultiplePayment) {
    /**
     * Metadata information on all properties of the `MultiplePayment` complex type.
     */
    MultiplePayment._propertyMetadata = [{
            originalName: 'BankStatmentLineID',
            name: 'bankStatmentLineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ListLineID',
            name: 'listLineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentIdentifier',
            name: 'documentIdentifier',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AmountLC',
            name: 'amountLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AmountFC',
            name: 'amountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'IsDebit',
            name: 'isDebit',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, MultiplePayment);
    }
    MultiplePayment.build = build;
})(MultiplePayment = exports.MultiplePayment || (exports.MultiplePayment = {}));
//# sourceMappingURL=MultiplePayment.js.map