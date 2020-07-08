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
exports.JournalEntryLine = exports.JournalEntryLineField = exports.createJournalEntryLine = void 0;
var CashFlowAssignment_1 = require("./CashFlowAssignment");
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function JournalEntryLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[JournalEntryLine.lineId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineId = new v4_1.ComplexTypeNumberPropertyField('Line_ID', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.debit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debit = new v4_1.ComplexTypeNumberPropertyField('Debit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.credit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.credit = new v4_1.ComplexTypeNumberPropertyField('Credit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.fcDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcDebit = new v4_1.ComplexTypeNumberPropertyField('FCDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.fcCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcCredit = new v4_1.ComplexTypeNumberPropertyField('FCCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.fcCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fcCurrency = new v4_1.ComplexTypeStringPropertyField('FCCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new v4_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.shortName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortName = new v4_1.ComplexTypeStringPropertyField('ShortName', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.contraAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contraAccount = new v4_1.ComplexTypeStringPropertyField('ContraAccount', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.lineMemo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineMemo = new v4_1.ComplexTypeStringPropertyField('LineMemo', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.referenceDate1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.referenceDate1 = new v4_1.ComplexTypeDatePropertyField('ReferenceDate1', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.referenceDate2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.referenceDate2 = new v4_1.ComplexTypeDatePropertyField('ReferenceDate2', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.reference1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference1 = new v4_1.ComplexTypeStringPropertyField('Reference1', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.reference2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reference2 = new v4_1.ComplexTypeStringPropertyField('Reference2', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new v4_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.taxDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDate = new v4_1.ComplexTypeDatePropertyField('TaxDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.baseSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseSum = new v4_1.ComplexTypeNumberPropertyField('BaseSum', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.taxGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxGroup = new v4_1.ComplexTypeStringPropertyField('TaxGroup', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.debitSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.debitSys = new v4_1.ComplexTypeNumberPropertyField('DebitSys', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.creditSys]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditSys = new v4_1.ComplexTypeNumberPropertyField('CreditSys', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.vatDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatDate = new v4_1.ComplexTypeDatePropertyField('VatDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[JournalEntryLine.systemBaseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemBaseAmount = new v4_1.ComplexTypeNumberPropertyField('SystemBaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.vatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmount = new v4_1.ComplexTypeNumberPropertyField('VatAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.systemVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemVatAmount = new v4_1.ComplexTypeNumberPropertyField('SystemVatAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.grossValue]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossValue = new v4_1.ComplexTypeNumberPropertyField('GrossValue', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.additionalReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalReference = new v4_1.ComplexTypeStringPropertyField('AdditionalReference', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.checkAbs]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAbs = new v4_1.ComplexTypeNumberPropertyField('CheckAbs', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new v4_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new v4_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new v4_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new v4_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new v4_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.controlAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.controlAccount = new v4_1.ComplexTypeStringPropertyField('ControlAccount', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.equalizationTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxAmount = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.systemEqualizationTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemEqualizationTaxAmount = new v4_1.ComplexTypeNumberPropertyField('SystemEqualizationTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.totalTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalTax = new v4_1.ComplexTypeNumberPropertyField('TotalTax', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.systemTotalTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemTotalTax = new v4_1.ComplexTypeNumberPropertyField('SystemTotalTax', _this, 'Edm.Double');
        /**
         * Representation of the [[JournalEntryLine.blockReason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blockReason = new v4_1.ComplexTypeNumberPropertyField('BlockReason', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.bplid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplid = new v4_1.ComplexTypeNumberPropertyField('BPLID', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.bplName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bplName = new v4_1.ComplexTypeStringPropertyField('BPLName', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.vatRegNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatRegNum = new v4_1.ComplexTypeStringPropertyField('VATRegNum', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.exposedTransNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exposedTransNumber = new v4_1.ComplexTypeNumberPropertyField('ExposedTransNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.documentArray]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentArray = new v4_1.ComplexTypeNumberPropertyField('DocumentArray', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.documentLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLine = new v4_1.ComplexTypeNumberPropertyField('DocumentLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[JournalEntryLine.costElementCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costElementCode = new v4_1.ComplexTypeStringPropertyField('CostElementCode', _this, 'Edm.String');
        /**
         * Representation of the [[JournalEntryLine.cashFlowAssignments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cashFlowAssignments = new CashFlowAssignment_1.CashFlowAssignmentField('CashFlowAssignments', _this);
        return _this;
    }
    return JournalEntryLineField;
}(v4_1.ComplexTypeField));
exports.JournalEntryLineField = JournalEntryLineField;
var JournalEntryLine;
(function (JournalEntryLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Line_ID: function (lineId) { return ({ lineId: v4_1.edmToTs(lineId, 'Edm.Int32') }); },
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            Debit: function (debit) { return ({ debit: v4_1.edmToTs(debit, 'Edm.Double') }); },
            Credit: function (credit) { return ({ credit: v4_1.edmToTs(credit, 'Edm.Double') }); },
            FCDebit: function (fcDebit) { return ({ fcDebit: v4_1.edmToTs(fcDebit, 'Edm.Double') }); },
            FCCredit: function (fcCredit) { return ({ fcCredit: v4_1.edmToTs(fcCredit, 'Edm.Double') }); },
            FCCurrency: function (fcCurrency) { return ({ fcCurrency: v4_1.edmToTs(fcCurrency, 'Edm.String') }); },
            DueDate: function (dueDate) { return ({ dueDate: v4_1.edmToTs(dueDate, 'Edm.DateTimeOffset') }); },
            ShortName: function (shortName) { return ({ shortName: v4_1.edmToTs(shortName, 'Edm.String') }); },
            ContraAccount: function (contraAccount) { return ({ contraAccount: v4_1.edmToTs(contraAccount, 'Edm.String') }); },
            LineMemo: function (lineMemo) { return ({ lineMemo: v4_1.edmToTs(lineMemo, 'Edm.String') }); },
            ReferenceDate1: function (referenceDate1) { return ({ referenceDate1: v4_1.edmToTs(referenceDate1, 'Edm.DateTimeOffset') }); },
            ReferenceDate2: function (referenceDate2) { return ({ referenceDate2: v4_1.edmToTs(referenceDate2, 'Edm.DateTimeOffset') }); },
            Reference1: function (reference1) { return ({ reference1: v4_1.edmToTs(reference1, 'Edm.String') }); },
            Reference2: function (reference2) { return ({ reference2: v4_1.edmToTs(reference2, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            CostingCode: function (costingCode) { return ({ costingCode: v4_1.edmToTs(costingCode, 'Edm.String') }); },
            TaxDate: function (taxDate) { return ({ taxDate: v4_1.edmToTs(taxDate, 'Edm.DateTimeOffset') }); },
            BaseSum: function (baseSum) { return ({ baseSum: v4_1.edmToTs(baseSum, 'Edm.Double') }); },
            TaxGroup: function (taxGroup) { return ({ taxGroup: v4_1.edmToTs(taxGroup, 'Edm.String') }); },
            DebitSys: function (debitSys) { return ({ debitSys: v4_1.edmToTs(debitSys, 'Edm.Double') }); },
            CreditSys: function (creditSys) { return ({ creditSys: v4_1.edmToTs(creditSys, 'Edm.Double') }); },
            VatDate: function (vatDate) { return ({ vatDate: v4_1.edmToTs(vatDate, 'Edm.DateTimeOffset') }); },
            SystemBaseAmount: function (systemBaseAmount) { return ({ systemBaseAmount: v4_1.edmToTs(systemBaseAmount, 'Edm.Double') }); },
            VatAmount: function (vatAmount) { return ({ vatAmount: v4_1.edmToTs(vatAmount, 'Edm.Double') }); },
            SystemVatAmount: function (systemVatAmount) { return ({ systemVatAmount: v4_1.edmToTs(systemVatAmount, 'Edm.Double') }); },
            GrossValue: function (grossValue) { return ({ grossValue: v4_1.edmToTs(grossValue, 'Edm.Double') }); },
            AdditionalReference: function (additionalReference) { return ({ additionalReference: v4_1.edmToTs(additionalReference, 'Edm.String') }); },
            CheckAbs: function (checkAbs) { return ({ checkAbs: v4_1.edmToTs(checkAbs, 'Edm.Int32') }); },
            CostingCode2: function (costingCode2) { return ({ costingCode2: v4_1.edmToTs(costingCode2, 'Edm.String') }); },
            CostingCode3: function (costingCode3) { return ({ costingCode3: v4_1.edmToTs(costingCode3, 'Edm.String') }); },
            CostingCode4: function (costingCode4) { return ({ costingCode4: v4_1.edmToTs(costingCode4, 'Edm.String') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            CostingCode5: function (costingCode5) { return ({ costingCode5: v4_1.edmToTs(costingCode5, 'Edm.String') }); },
            LocationCode: function (locationCode) { return ({ locationCode: v4_1.edmToTs(locationCode, 'Edm.Int32') }); },
            ControlAccount: function (controlAccount) { return ({ controlAccount: v4_1.edmToTs(controlAccount, 'Edm.String') }); },
            EqualizationTaxAmount: function (equalizationTaxAmount) { return ({ equalizationTaxAmount: v4_1.edmToTs(equalizationTaxAmount, 'Edm.Double') }); },
            SystemEqualizationTaxAmount: function (systemEqualizationTaxAmount) { return ({ systemEqualizationTaxAmount: v4_1.edmToTs(systemEqualizationTaxAmount, 'Edm.Double') }); },
            TotalTax: function (totalTax) { return ({ totalTax: v4_1.edmToTs(totalTax, 'Edm.Double') }); },
            SystemTotalTax: function (systemTotalTax) { return ({ systemTotalTax: v4_1.edmToTs(systemTotalTax, 'Edm.Double') }); },
            BlockReason: function (blockReason) { return ({ blockReason: v4_1.edmToTs(blockReason, 'Edm.Int32') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            BPLID: function (bplid) { return ({ bplid: v4_1.edmToTs(bplid, 'Edm.Int32') }); },
            BPLName: function (bplName) { return ({ bplName: v4_1.edmToTs(bplName, 'Edm.String') }); },
            VATRegNum: function (vatRegNum) { return ({ vatRegNum: v4_1.edmToTs(vatRegNum, 'Edm.String') }); },
            ExposedTransNumber: function (exposedTransNumber) { return ({ exposedTransNumber: v4_1.edmToTs(exposedTransNumber, 'Edm.Int32') }); },
            DocumentArray: function (documentArray) { return ({ documentArray: v4_1.edmToTs(documentArray, 'Edm.Int32') }); },
            DocumentLine: function (documentLine) { return ({ documentLine: v4_1.edmToTs(documentLine, 'Edm.Int32') }); },
            CostElementCode: function (costElementCode) { return ({ costElementCode: v4_1.edmToTs(costElementCode, 'Edm.String') }); },
            CashFlowAssignments: function (cashFlowAssignments) { return ({ cashFlowAssignments: CashFlowAssignment_1.CashFlowAssignment.build(cashFlowAssignments) }); }
        });
    }
    JournalEntryLine.build = build;
})(JournalEntryLine = exports.JournalEntryLine || (exports.JournalEntryLine = {}));
//# sourceMappingURL=JournalEntryLine.js.map