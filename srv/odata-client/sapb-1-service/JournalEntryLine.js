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
exports.JournalEntryLine = exports.JournalEntryLineField = exports.createJournalEntryLine = void 0;
var CashFlowAssignment_1 = require("./CashFlowAssignment");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[JournalEntryLine.build]] instead.
 */
function createJournalEntryLine(json) {
    return JournalEntryLine.build(json);
}
exports.createJournalEntryLine = createJournalEntryLine;
/**
 * JournalEntryLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var JournalEntryLineField = /** @class */ (function (_super) {
    __extends(JournalEntryLineField, _super);
    /**
     * Creates an instance of JournalEntryLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function JournalEntryLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, JournalEntryLine) || this;
        /**
         * Representation of the [[JournalEntryLine.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new core_1.ComplexTypeNumberPropertyField('Line_ID', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.debit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debit = new core_1.ComplexTypeNumberPropertyField('Debit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.credit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.credit = new core_1.ComplexTypeNumberPropertyField('Credit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.fcDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcDebit = new core_1.ComplexTypeNumberPropertyField('FCDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.fcCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcCredit = new core_1.ComplexTypeNumberPropertyField('FCCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.fcCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcCurrency = new core_1.ComplexTypeStringPropertyField('FCCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new core_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.contraAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contraAccount = new core_1.ComplexTypeStringPropertyField('ContraAccount', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.lineMemo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineMemo = new core_1.ComplexTypeStringPropertyField('LineMemo', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.referenceDate1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.referenceDate1 = new core_1.ComplexTypeDatePropertyField('ReferenceDate1', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.referenceDate2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.referenceDate2 = new core_1.ComplexTypeDatePropertyField('ReferenceDate2', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.reference1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference1 = new core_1.ComplexTypeStringPropertyField('Reference1', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.reference2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference2 = new core_1.ComplexTypeStringPropertyField('Reference2', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new core_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.taxDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDate = new core_1.ComplexTypeDatePropertyField('TaxDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.baseSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseSum = new core_1.ComplexTypeNumberPropertyField('BaseSum', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.taxGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxGroup = new core_1.ComplexTypeStringPropertyField('TaxGroup', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.debitSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitSys = new core_1.ComplexTypeNumberPropertyField('DebitSys', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.creditSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditSys = new core_1.ComplexTypeNumberPropertyField('CreditSys', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.vatDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatDate = new core_1.ComplexTypeDatePropertyField('VatDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.vatLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatLine = new core_1.ComplexTypeEnumPropertyField('VatLine', _this);
        /**
         * Representation of the [[JournalEntryLine.systemBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemBaseAmount = new core_1.ComplexTypeNumberPropertyField('SystemBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.vatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmount = new core_1.ComplexTypeNumberPropertyField('VatAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.systemVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemVatAmount = new core_1.ComplexTypeNumberPropertyField('SystemVatAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.grossValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossValue = new core_1.ComplexTypeNumberPropertyField('GrossValue', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.additionalReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalReference = new core_1.ComplexTypeStringPropertyField('AdditionalReference', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.checkAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAbs = new core_1.ComplexTypeNumberPropertyField('CheckAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new core_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new core_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new core_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.taxPostAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPostAccount = new core_1.ComplexTypeEnumPropertyField('TaxPostAccount', _this);
        /**
         * Representation of the [[JournalEntryLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new core_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new core_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.controlAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.controlAccount = new core_1.ComplexTypeStringPropertyField('ControlAccount', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.equalizationTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxAmount = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.systemEqualizationTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemEqualizationTaxAmount = new core_1.ComplexTypeNumberPropertyField('SystemEqualizationTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.totalTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalTax = new core_1.ComplexTypeNumberPropertyField('TotalTax', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.systemTotalTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemTotalTax = new core_1.ComplexTypeNumberPropertyField('SystemTotalTax', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.wtLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtLiable = new core_1.ComplexTypeEnumPropertyField('WTLiable', _this);
        /**
         * Representation of the [[JournalEntryLine.wtRow]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtRow = new core_1.ComplexTypeEnumPropertyField('WTRow', _this);
        /**
         * Representation of the [[JournalEntryLine.paymentBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentBlock = new core_1.ComplexTypeEnumPropertyField('PaymentBlock', _this);
        /**
         * Representation of the [[JournalEntryLine.blockReason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockReason = new core_1.ComplexTypeNumberPropertyField('BlockReason', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new core_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.bplName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplName = new core_1.ComplexTypeStringPropertyField('BPLName', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.vatRegNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatRegNum = new core_1.ComplexTypeStringPropertyField('VATRegNum', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.paymentOrdered]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentOrdered = new core_1.ComplexTypeEnumPropertyField('PaymentOrdered', _this);
        /**
         * Representation of the [[JournalEntryLine.exposedTransNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exposedTransNumber = new core_1.ComplexTypeNumberPropertyField('ExposedTransNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.documentArray]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentArray = new core_1.ComplexTypeNumberPropertyField('DocumentArray', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.documentLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLine = new core_1.ComplexTypeNumberPropertyField('DocumentLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.costElementCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costElementCode = new core_1.ComplexTypeStringPropertyField('CostElementCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.cashFlowAssignments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashFlowAssignments = new core_1.CollectionField('CashFlowAssignments', _this, CashFlowAssignment_1.CashFlowAssignment);
        return _this;
    }
    return JournalEntryLineField;
}(core_1.ComplexTypeField));
exports.JournalEntryLineField = JournalEntryLineField;
var JournalEntryLine;
(function (JournalEntryLine) {
    /**
     * Metadata information on all properties of the `JournalEntryLine` complex type.
     */
    JournalEntryLine._propertyMetadata = [{
            originalName: 'Line_ID',
            name: 'lineId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Debit',
            name: 'debit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Credit',
            name: 'credit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FCDebit',
            name: 'fcDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FCCredit',
            name: 'fcCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FCCurrency',
            name: 'fcCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ShortName',
            name: 'shortName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ContraAccount',
            name: 'contraAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineMemo',
            name: 'lineMemo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReferenceDate1',
            name: 'referenceDate1',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ReferenceDate2',
            name: 'referenceDate2',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Reference1',
            name: 'reference1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Reference2',
            name: 'reference2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProjectCode',
            name: 'projectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode',
            name: 'costingCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxDate',
            name: 'taxDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'BaseSum',
            name: 'baseSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxGroup',
            name: 'taxGroup',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DebitSys',
            name: 'debitSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditSys',
            name: 'creditSys',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VatDate',
            name: 'vatDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'VatLine',
            name: 'vatLine',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SystemBaseAmount',
            name: 'systemBaseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VatAmount',
            name: 'vatAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SystemVatAmount',
            name: 'systemVatAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossValue',
            name: 'grossValue',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AdditionalReference',
            name: 'additionalReference',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckAbs',
            name: 'checkAbs',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CostingCode2',
            name: 'costingCode2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode3',
            name: 'costingCode3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode4',
            name: 'costingCode4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxPostAccount',
            name: 'taxPostAccount',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CostingCode5',
            name: 'costingCode5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocationCode',
            name: 'locationCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ControlAccount',
            name: 'controlAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EqualizationTaxAmount',
            name: 'equalizationTaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SystemEqualizationTaxAmount',
            name: 'systemEqualizationTaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalTax',
            name: 'totalTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SystemTotalTax',
            name: 'systemTotalTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTLiable',
            name: 'wtLiable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'WTRow',
            name: 'wtRow',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PaymentBlock',
            name: 'paymentBlock',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BlockReason',
            name: 'blockReason',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FederalTaxID',
            name: 'federalTaxId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPLID',
            name: 'bplid',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BPLName',
            name: 'bplName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VATRegNum',
            name: 'vatRegNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'PaymentOrdered',
            name: 'paymentOrdered',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ExposedTransNumber',
            name: 'exposedTransNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentArray',
            name: 'documentArray',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentLine',
            name: 'documentLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CostElementCode',
            name: 'costElementCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CashFlowAssignments',
            name: 'cashFlowAssignments',
            type: CashFlowAssignment_1.CashFlowAssignment,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, JournalEntryLine);
    }
    JournalEntryLine.build = build;
})(JournalEntryLine = exports.JournalEntryLine || (exports.JournalEntryLine = {}));
//# sourceMappingURL=JournalEntryLine.js.map