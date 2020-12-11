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
exports.BillOfExchange = exports.BillOfExchangeField = exports.createBillOfExchange = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchange.build]] instead.
 */
function createBillOfExchange(json) {
    return BillOfExchange.build(json);
}
exports.createBillOfExchange = createBillOfExchange;
/**
 * BillOfExchangeField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeField = /** @class */ (function (_super) {
    __extends(BillOfExchangeField, _super);
    /**
     * Creates an instance of BillOfExchangeField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BillOfExchangeField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BillOfExchange) || this;
        /**
         * Representation of the [[BillOfExchange.billOfExchangeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeNo = new core_1.ComplexTypeNumberPropertyField('BillOfExchangeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BillOfExchange.billOfExchangeDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeDueDate = new core_1.ComplexTypeDatePropertyField('BillOfExchangeDueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.referenceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.referenceNo = new core_1.ComplexTypeStringPropertyField('ReferenceNo', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.remarks]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remarks = new core_1.ComplexTypeStringPropertyField('Remarks', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentMethodCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentMethodCode = new core_1.ComplexTypeStringPropertyField('PaymentMethodCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.bpBankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankCode = new core_1.ComplexTypeStringPropertyField('BPBankCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.bpBankAct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankAct = new core_1.ComplexTypeStringPropertyField('BPBankAct', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.bpBankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpBankCountry = new core_1.ComplexTypeStringPropertyField('BPBankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.controlKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.controlKey = new core_1.ComplexTypeStringPropertyField('ControlKey', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentEngineStatus1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentEngineStatus1 = new core_1.ComplexTypeStringPropertyField('PaymentEngineStatus1', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentEngineStatus2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentEngineStatus2 = new core_1.ComplexTypeStringPropertyField('PaymentEngineStatus2', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.paymentEngineStatus3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentEngineStatus3 = new core_1.ComplexTypeStringPropertyField('PaymentEngineStatus3', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.stampTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stampTaxCode = new core_1.ComplexTypeStringPropertyField('StampTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.stampTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stampTaxAmount = new core_1.ComplexTypeNumberPropertyField('StampTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.folioNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioNumber = new core_1.ComplexTypeNumberPropertyField('FolioNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BillOfExchange.folioPrefixString]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.folioPrefixString = new core_1.ComplexTypeStringPropertyField('FolioPrefixString', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchange.interestAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.interestAmount = new core_1.ComplexTypeNumberPropertyField('InterestAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.discountAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountAmount = new core_1.ComplexTypeNumberPropertyField('DiscountAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.fineAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fineAmount = new core_1.ComplexTypeNumberPropertyField('FineAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.interestDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.interestDate = new core_1.ComplexTypeDatePropertyField('InterestDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.discountDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountDate = new core_1.ComplexTypeDatePropertyField('DiscountDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.fineDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fineDate = new core_1.ComplexTypeDatePropertyField('FineDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BillOfExchange.iofAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iofAmount = new core_1.ComplexTypeNumberPropertyField('IOFAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.serviceFeeAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceFeeAmount = new core_1.ComplexTypeNumberPropertyField('ServiceFeeAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.otherExpensesAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.otherExpensesAmount = new core_1.ComplexTypeNumberPropertyField('OtherExpensesAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BillOfExchange.otherIncomesAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.otherIncomesAmount = new core_1.ComplexTypeNumberPropertyField('OtherIncomesAmount', _this, 'Edm.Double');
        return _this;
    }
    return BillOfExchangeField;
}(core_1.ComplexTypeField));
exports.BillOfExchangeField = BillOfExchangeField;
var BillOfExchange;
(function (BillOfExchange) {
    /**
     * Metadata information on all properties of the `BillOfExchange` complex type.
     */
    BillOfExchange._propertyMetadata = [{
            originalName: 'BillOfExchangeNo',
            name: 'billOfExchangeNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BillOfExchangeDueDate',
            name: 'billOfExchangeDueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReferenceNo',
            name: 'referenceNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Remarks',
            name: 'remarks',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentMethodCode',
            name: 'paymentMethodCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPBankCode',
            name: 'bpBankCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPBankAct',
            name: 'bpBankAct',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPBankCountry',
            name: 'bpBankCountry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ControlKey',
            name: 'controlKey',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentEngineStatus1',
            name: 'paymentEngineStatus1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentEngineStatus2',
            name: 'paymentEngineStatus2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentEngineStatus3',
            name: 'paymentEngineStatus3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StampTaxCode',
            name: 'stampTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StampTaxAmount',
            name: 'stampTaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FolioNumber',
            name: 'folioNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FolioPrefixString',
            name: 'folioPrefixString',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InterestAmount',
            name: 'interestAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DiscountAmount',
            name: 'discountAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FineAmount',
            name: 'fineAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'InterestDate',
            name: 'interestDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DiscountDate',
            name: 'discountDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'FineDate',
            name: 'fineDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'IOFAmount',
            name: 'iofAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ServiceFeeAmount',
            name: 'serviceFeeAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OtherExpensesAmount',
            name: 'otherExpensesAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OtherIncomesAmount',
            name: 'otherIncomesAmount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BillOfExchange);
    }
    BillOfExchange.build = build;
})(BillOfExchange = exports.BillOfExchange || (exports.BillOfExchange = {}));
//# sourceMappingURL=BillOfExchange.js.map