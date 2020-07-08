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
exports.AdminInfo = exports.AdminInfoField = exports.createAdminInfo = void 0;
var ExtendedAdminInfo_1 = require("./ExtendedAdminInfo");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AdminInfo.build]] instead.
 */
function createAdminInfo(json) {
    return AdminInfo.build(json);
}
exports.createAdminInfo = createAdminInfo;
/**
 * AdminInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AdminInfoField = /** @class */ (function (_super) {
    __extends(AdminInfoField, _super);
    function AdminInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AdminInfo.code]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.code = new v4_1.ComplexTypeNumberPropertyField('Code', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.companyName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyName = new v4_1.ComplexTypeStringPropertyField('CompanyName', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new v4_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.printingHeader]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.printingHeader = new v4_1.ComplexTypeStringPropertyField('PrintingHeader', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber1 = new v4_1.ComplexTypeStringPropertyField('PhoneNumber1', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber2 = new v4_1.ComplexTypeStringPropertyField('PhoneNumber2', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.faxNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faxNumber = new v4_1.ComplexTypeStringPropertyField('FaxNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.eMail]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.eMail = new v4_1.ComplexTypeStringPropertyField('eMail', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.managingDirector]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.managingDirector = new v4_1.ComplexTypeStringPropertyField('ManagingDirector', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.chartofAccountsTemplate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.chartofAccountsTemplate = new v4_1.ComplexTypeStringPropertyField('ChartofAccountsTemplate', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.localCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.localCurrency = new v4_1.ComplexTypeStringPropertyField('LocalCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.systemCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.systemCurrency = new v4_1.ComplexTypeStringPropertyField('SystemCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.standardUnitofLength]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.standardUnitofLength = new v4_1.ComplexTypeNumberPropertyField('StandardUnitofLength', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.weightUnitDefault]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weightUnitDefault = new v4_1.ComplexTypeNumberPropertyField('WeightUnitDefault', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.minimumAmountfor347Report]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.minimumAmountfor347Report = new v4_1.ComplexTypeNumberPropertyField('MinimumAmountfor347Report', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.bankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCountry = new v4_1.ComplexTypeStringPropertyField('BankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOffice = new v4_1.ComplexTypeStringPropertyField('TaxOffice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.deductionFileNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deductionFileNo = new v4_1.ComplexTypeStringPropertyField('DeductionFileNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxPercentage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercentage = new v4_1.ComplexTypeNumberPropertyField('TaxPercentage', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.advancesonCorpIncomeTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.advancesonCorpIncomeTax = new v4_1.ComplexTypeNumberPropertyField('AdvancesonCorpIncomeTax', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.withTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withTax = new v4_1.ComplexTypeNumberPropertyField('WithTax', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.withholdingTaxTdctPercnt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxTdctPercnt = new v4_1.ComplexTypeNumberPropertyField('WithholdingTaxTdctPercnt', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.withholdingTaxDdctExpired]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxDdctExpired = new v4_1.ComplexTypeDatePropertyField('WithholdingTaxDdctExpired', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[AdminInfo.withholdingTaxDdctOffice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxDdctOffice = new v4_1.ComplexTypeStringPropertyField('WithholdingTaxDdctOffice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForApInvoice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForApInvoice = new v4_1.ComplexTypeStringPropertyField('AltNameForApInvoice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameforCreditMemo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameforCreditMemo = new v4_1.ComplexTypeStringPropertyField('AltNameforCreditMemo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForGoodsReceipt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForGoodsReceipt = new v4_1.ComplexTypeStringPropertyField('AltNameForGoodsReceipt', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForGoodsReturn]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForGoodsReturn = new v4_1.ComplexTypeStringPropertyField('AltNameForGoodsReturn', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.altNameForPurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.altNameForPurchase = new v4_1.ComplexTypeStringPropertyField('AltNameForPurchase', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultCustomerPaymentTerms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultCustomerPaymentTerms = new v4_1.ComplexTypeNumberPropertyField('DefaultCustomerPaymentTerms', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.defaultVendorPaymentTerms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultVendorPaymentTerms = new v4_1.ComplexTypeNumberPropertyField('DefaultVendorPaymentTerms', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.priceListforCostPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceListforCostPrice = new v4_1.ComplexTypeNumberPropertyField('PriceListforCostPrice', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.companyColor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.companyColor = new v4_1.ComplexTypeNumberPropertyField('CompanyColor', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.totalsAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalsAccuracy = new v4_1.ComplexTypeNumberPropertyField('TotalsAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.accuracyofQuantities]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accuracyofQuantities = new v4_1.ComplexTypeNumberPropertyField('AccuracyofQuantities', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.priceAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceAccuracy = new v4_1.ComplexTypeNumberPropertyField('PriceAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.rateAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rateAccuracy = new v4_1.ComplexTypeNumberPropertyField('RateAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.percentageAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.percentageAccuracy = new v4_1.ComplexTypeNumberPropertyField('PercentageAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.measuringAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measuringAccuracy = new v4_1.ComplexTypeNumberPropertyField('MeasuringAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.queryAccuracy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.queryAccuracy = new v4_1.ComplexTypeNumberPropertyField('QueryAccuracy', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.addressinForeignLanguage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.addressinForeignLanguage = new v4_1.ComplexTypeStringPropertyField('AddressinForeignLanguage', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultTaxCode = new v4_1.ComplexTypeStringPropertyField('DefaultTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.letterHeaderinForeignLangu]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.letterHeaderinForeignLangu = new v4_1.ComplexTypeStringPropertyField('LetterHeaderinForeignLangu', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber1ForeignLang]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber1ForeignLang = new v4_1.ComplexTypeStringPropertyField('PhoneNumber1ForeignLang', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.phoneNumber2ForeignLang]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phoneNumber2ForeignLang = new v4_1.ComplexTypeStringPropertyField('PhoneNumber2ForeignLang', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.faxNumberForeignLang]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.faxNumberForeignLang = new v4_1.ComplexTypeStringPropertyField('FaxNumberForeignLang', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.managingDirectorForeignLan]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.managingDirectorForeignLan = new v4_1.ComplexTypeStringPropertyField('ManagingDirectorForeignLan', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.dateSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateSeparator = new v4_1.ComplexTypeStringPropertyField('DateSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.isrType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrType = new v4_1.ComplexTypeNumberPropertyField('ISRType', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.isrBillerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrBillerId = new v4_1.ComplexTypeStringPropertyField('ISRBillerID', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultWarehouse = new v4_1.ComplexTypeStringPropertyField('DefaultWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxDefinitionforVatitem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinitionforVatitem = new v4_1.ComplexTypeStringPropertyField('TaxDefinitionforVatitem', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxDefinitionforVatservice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinitionforVatservice = new v4_1.ComplexTypeStringPropertyField('TaxDefinitionforVatservice', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxGroupforPurchaseItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxGroupforPurchaseItem = new v4_1.ComplexTypeStringPropertyField('TaxGroupforPurchaseItem', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.taxGroupforServicePurchase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxGroupforServicePurchase = new v4_1.ComplexTypeStringPropertyField('TaxGroupforServicePurchase', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.customerIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerIdNumber = new v4_1.ComplexTypeStringPropertyField('CustomerIdNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBudgetCostAssessMt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBudgetCostAssessMt = new v4_1.ComplexTypeNumberPropertyField('DefaultBudgetCostAssessMt', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.fileNumberinIncomeTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fileNumberinIncomeTax = new v4_1.ComplexTypeStringPropertyField('FileNumberinIncomeTax', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBankNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBankNo = new v4_1.ComplexTypeStringPropertyField('DefaultBankNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBankAccount = new v4_1.ComplexTypeStringPropertyField('DefaultBankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBranch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBranch = new v4_1.ComplexTypeStringPropertyField('DefaultBranch', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.serviceCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serviceCode = new v4_1.ComplexTypeStringPropertyField('ServiceCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.servicePassword]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.servicePassword = new v4_1.ComplexTypeStringPropertyField('ServicePassword', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.paramFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paramFolderPath = new v4_1.ComplexTypeStringPropertyField('ParamFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.excelFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.excelFolderPath = new v4_1.ComplexTypeStringPropertyField('ExcelFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.federalTaxId2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId2 = new v4_1.ComplexTypeStringPropertyField('FederalTaxID2', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.federalTaxId3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId3 = new v4_1.ComplexTypeStringPropertyField('FederalTaxID3', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.decimalSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decimalSeparator = new v4_1.ComplexTypeStringPropertyField('DecimalSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.thousandsSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.thousandsSeparator = new v4_1.ComplexTypeStringPropertyField('ThousandsSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.maxHistory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxHistory = new v4_1.ComplexTypeNumberPropertyField('MaxHistory', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.bpTypeCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpTypeCode = new v4_1.ComplexTypeStringPropertyField('BPTypeCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pbsNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pbsNumber = new v4_1.ComplexTypeStringPropertyField('PBSNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pbsGroupNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pbsGroupNumber = new v4_1.ComplexTypeStringPropertyField('PBSGroupNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.organizationNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.organizationNumber = new v4_1.ComplexTypeStringPropertyField('OrganizationNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.accountSegmentsSeparator]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountSegmentsSeparator = new v4_1.ComplexTypeStringPropertyField('AccountSegmentsSeparator', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.sDefaultWtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sDefaultWtCode = new v4_1.ComplexTypeStringPropertyField('SDefaultWTCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.withholdingTaxPHandle]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxPHandle = new v4_1.ComplexTypeStringPropertyField('WithholdingTaxPHandle', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pDefaultWtCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pDefaultWtCode = new v4_1.ComplexTypeStringPropertyField('PDefaultWTCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.holidaysName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.holidaysName = new v4_1.ComplexTypeStringPropertyField('HolidaysName', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.orderBlock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderBlock = new v4_1.ComplexTypeStringPropertyField('OrderBlock', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.orderingParty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderingParty = new v4_1.ComplexTypeStringPropertyField('OrderingParty', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.certificateNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.certificateNo = new v4_1.ComplexTypeStringPropertyField('CertificateNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.expirationDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expirationDate = new v4_1.ComplexTypeDatePropertyField('ExpirationDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[AdminInfo.nationalInsuranceNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.nationalInsuranceNo = new v4_1.ComplexTypeStringPropertyField('NationalInsuranceNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.sDfltItwt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sDfltItwt = new v4_1.ComplexTypeStringPropertyField('SDfltITWT', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.pDfltItwt]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pDfltItwt = new v4_1.ComplexTypeStringPropertyField('PDfltITWT', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.daysBackward]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.daysBackward = new v4_1.ComplexTypeNumberPropertyField('DaysBackward', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.daysForward]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.daysForward = new v4_1.ComplexTypeNumberPropertyField('DaysForward', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.defaultDunningTerm]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultDunningTerm = new v4_1.ComplexTypeStringPropertyField('DefaultDunningTerm', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.defaultBankAccountKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defaultBankAccountKey = new v4_1.ComplexTypeNumberPropertyField('DefaultBankAccountKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.additionalIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.additionalIdNumber = new v4_1.ComplexTypeStringPropertyField('AdditionalIdNumber', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.uniqueTaxPayerReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uniqueTaxPayerReference = new v4_1.ComplexTypeStringPropertyField('UniqueTaxPayerReference', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.employerReference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employerReference = new v4_1.ComplexTypeStringPropertyField('EmployerReference', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.periodStatusChangeDelay]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.periodStatusChangeDelay = new v4_1.ComplexTypeNumberPropertyField('PeriodStatusChangeDelay', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.grossProfitPercentForServiceDocuments]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossProfitPercentForServiceDocuments = new v4_1.ComplexTypeNumberPropertyField('GrossProfitPercentForServiceDocuments', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.xmlFileFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.xmlFileFolderPath = new v4_1.ComplexTypeStringPropertyField('XMLFileFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.generalManager]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generalManager = new v4_1.ComplexTypeStringPropertyField('GeneralManager', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.generalManagerForeignLanguage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generalManagerForeignLanguage = new v4_1.ComplexTypeStringPropertyField('GeneralManagerForeignLanguage', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.wtAccumAmountAp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAccumAmountAp = new v4_1.ComplexTypeNumberPropertyField('WTAccumAmountAP', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.wtAccumAmountAr]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtAccumAmountAr = new v4_1.ComplexTypeNumberPropertyField('WTAccumAmountAR', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.gtsOutboundFolder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsOutboundFolder = new v4_1.ComplexTypeStringPropertyField('GTSOutboundFolder', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.gtsInboundFolder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsInboundFolder = new v4_1.ComplexTypeStringPropertyField('GTSInboundFolder', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.gtsSeparateCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsSeparateCode = new v4_1.ComplexTypeStringPropertyField('GTSSeparateCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.gtsDefaultChecker]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsDefaultChecker = new v4_1.ComplexTypeNumberPropertyField('GTSDefaultChecker', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.gtsDefaultPayee]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsDefaultPayee = new v4_1.ComplexTypeNumberPropertyField('GTSDefaultPayee', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.gtsMaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.gtsMaxAmount = new v4_1.ComplexTypeNumberPropertyField('GTSMaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.startingInFiscalYear]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.startingInFiscalYear = new v4_1.ComplexTypeNumberPropertyField('StartingInFiscalYear', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.reportAccordingTo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.reportAccordingTo = new v4_1.ComplexTypeNumberPropertyField('ReportAccordingTo', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.maximumNumberOfDaysForDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maximumNumberOfDaysForDueDate = new v4_1.ComplexTypeNumberPropertyField('MaximumNumberOfDaysForDueDate', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.aliasName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aliasName = new v4_1.ComplexTypeStringPropertyField('AliasName', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.boletoFolderPath]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.boletoFolderPath = new v4_1.ComplexTypeStringPropertyField('BoletoFolderPath', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.maxDaysForCancel]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.maxDaysForCancel = new v4_1.ComplexTypeNumberPropertyField('MaxDaysForCancel', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.sirenNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sirenNo = new v4_1.ComplexTypeStringPropertyField('SirenNo', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.institutionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.institutionCode = new v4_1.ComplexTypeStringPropertyField('InstitutionCode', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.series]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.series = new v4_1.ComplexTypeNumberPropertyField('Series', _this, 'Edm.Int32');
        /**
         * Representation of the [[AdminInfo.account]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.account = new v4_1.ComplexTypeStringPropertyField('Account', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.enableMultipleSchedulings]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableMultipleSchedulings = new v4_1.ComplexTypeStringPropertyField('EnableMultipleSchedulings', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.inventoryPostingHighlightVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryPostingHighlightVariance = new v4_1.ComplexTypeNumberPropertyField('InventoryPostingHighlightVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.inventoryCountingHighlightVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingHighlightVariance = new v4_1.ComplexTypeNumberPropertyField('InventoryCountingHighlightVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.inventoryCountingHighlightMaxVariance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingHighlightMaxVariance = new v4_1.ComplexTypeNumberPropertyField('InventoryCountingHighlightMaxVariance', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.inventoryCountingHighlightCountersDifference]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryCountingHighlightCountersDifference = new v4_1.ComplexTypeNumberPropertyField('InventoryCountingHighlightCountersDifference', _this, 'Edm.Double');
        /**
         * Representation of the [[AdminInfo.sepaCreditorId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sepaCreditorId = new v4_1.ComplexTypeStringPropertyField('SEPACreditorID', _this, 'Edm.String');
        /**
         * Representation of the [[AdminInfo.extendedAdminInfo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.extendedAdminInfo = new ExtendedAdminInfo_1.ExtendedAdminInfoField('ExtendedAdminInfo', _this);
        return _this;
    }
    return AdminInfoField;
}(v4_1.ComplexTypeField));
exports.AdminInfoField = AdminInfoField;
var AdminInfo;
(function (AdminInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Code: function (code) { return ({ code: v4_1.edmToTs(code, 'Edm.Int32') }); },
            CompanyName: function (companyName) { return ({ companyName: v4_1.edmToTs(companyName, 'Edm.String') }); },
            Address: function (address) { return ({ address: v4_1.edmToTs(address, 'Edm.String') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            PrintingHeader: function (printingHeader) { return ({ printingHeader: v4_1.edmToTs(printingHeader, 'Edm.String') }); },
            PhoneNumber1: function (phoneNumber1) { return ({ phoneNumber1: v4_1.edmToTs(phoneNumber1, 'Edm.String') }); },
            PhoneNumber2: function (phoneNumber2) { return ({ phoneNumber2: v4_1.edmToTs(phoneNumber2, 'Edm.String') }); },
            FaxNumber: function (faxNumber) { return ({ faxNumber: v4_1.edmToTs(faxNumber, 'Edm.String') }); },
            eMail: function (eMail) { return ({ eMail: v4_1.edmToTs(eMail, 'Edm.String') }); },
            ManagingDirector: function (managingDirector) { return ({ managingDirector: v4_1.edmToTs(managingDirector, 'Edm.String') }); },
            ChartofAccountsTemplate: function (chartofAccountsTemplate) { return ({ chartofAccountsTemplate: v4_1.edmToTs(chartofAccountsTemplate, 'Edm.String') }); },
            LocalCurrency: function (localCurrency) { return ({ localCurrency: v4_1.edmToTs(localCurrency, 'Edm.String') }); },
            SystemCurrency: function (systemCurrency) { return ({ systemCurrency: v4_1.edmToTs(systemCurrency, 'Edm.String') }); },
            StandardUnitofLength: function (standardUnitofLength) { return ({ standardUnitofLength: v4_1.edmToTs(standardUnitofLength, 'Edm.Int32') }); },
            WeightUnitDefault: function (weightUnitDefault) { return ({ weightUnitDefault: v4_1.edmToTs(weightUnitDefault, 'Edm.Int32') }); },
            MinimumAmountfor347Report: function (minimumAmountfor347Report) { return ({ minimumAmountfor347Report: v4_1.edmToTs(minimumAmountfor347Report, 'Edm.Double') }); },
            BankCountry: function (bankCountry) { return ({ bankCountry: v4_1.edmToTs(bankCountry, 'Edm.String') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            TaxOffice: function (taxOffice) { return ({ taxOffice: v4_1.edmToTs(taxOffice, 'Edm.String') }); },
            DeductionFileNo: function (deductionFileNo) { return ({ deductionFileNo: v4_1.edmToTs(deductionFileNo, 'Edm.String') }); },
            TaxPercentage: function (taxPercentage) { return ({ taxPercentage: v4_1.edmToTs(taxPercentage, 'Edm.Double') }); },
            AdvancesonCorpIncomeTax: function (advancesonCorpIncomeTax) { return ({ advancesonCorpIncomeTax: v4_1.edmToTs(advancesonCorpIncomeTax, 'Edm.Double') }); },
            WithTax: function (withTax) { return ({ withTax: v4_1.edmToTs(withTax, 'Edm.Double') }); },
            WithholdingTaxTdctPercnt: function (withholdingTaxTdctPercnt) { return ({ withholdingTaxTdctPercnt: v4_1.edmToTs(withholdingTaxTdctPercnt, 'Edm.Double') }); },
            WithholdingTaxDdctExpired: function (withholdingTaxDdctExpired) { return ({ withholdingTaxDdctExpired: v4_1.edmToTs(withholdingTaxDdctExpired, 'Edm.DateTimeOffset') }); },
            WithholdingTaxDdctOffice: function (withholdingTaxDdctOffice) { return ({ withholdingTaxDdctOffice: v4_1.edmToTs(withholdingTaxDdctOffice, 'Edm.String') }); },
            AltNameForApInvoice: function (altNameForApInvoice) { return ({ altNameForApInvoice: v4_1.edmToTs(altNameForApInvoice, 'Edm.String') }); },
            AltNameforCreditMemo: function (altNameforCreditMemo) { return ({ altNameforCreditMemo: v4_1.edmToTs(altNameforCreditMemo, 'Edm.String') }); },
            AltNameForGoodsReceipt: function (altNameForGoodsReceipt) { return ({ altNameForGoodsReceipt: v4_1.edmToTs(altNameForGoodsReceipt, 'Edm.String') }); },
            AltNameForGoodsReturn: function (altNameForGoodsReturn) { return ({ altNameForGoodsReturn: v4_1.edmToTs(altNameForGoodsReturn, 'Edm.String') }); },
            AltNameForPurchase: function (altNameForPurchase) { return ({ altNameForPurchase: v4_1.edmToTs(altNameForPurchase, 'Edm.String') }); },
            DefaultCustomerPaymentTerms: function (defaultCustomerPaymentTerms) { return ({ defaultCustomerPaymentTerms: v4_1.edmToTs(defaultCustomerPaymentTerms, 'Edm.Int32') }); },
            DefaultVendorPaymentTerms: function (defaultVendorPaymentTerms) { return ({ defaultVendorPaymentTerms: v4_1.edmToTs(defaultVendorPaymentTerms, 'Edm.Int32') }); },
            PriceListforCostPrice: function (priceListforCostPrice) { return ({ priceListforCostPrice: v4_1.edmToTs(priceListforCostPrice, 'Edm.Int32') }); },
            CompanyColor: function (companyColor) { return ({ companyColor: v4_1.edmToTs(companyColor, 'Edm.Int32') }); },
            TotalsAccuracy: function (totalsAccuracy) { return ({ totalsAccuracy: v4_1.edmToTs(totalsAccuracy, 'Edm.Int32') }); },
            AccuracyofQuantities: function (accuracyofQuantities) { return ({ accuracyofQuantities: v4_1.edmToTs(accuracyofQuantities, 'Edm.Int32') }); },
            PriceAccuracy: function (priceAccuracy) { return ({ priceAccuracy: v4_1.edmToTs(priceAccuracy, 'Edm.Int32') }); },
            RateAccuracy: function (rateAccuracy) { return ({ rateAccuracy: v4_1.edmToTs(rateAccuracy, 'Edm.Int32') }); },
            PercentageAccuracy: function (percentageAccuracy) { return ({ percentageAccuracy: v4_1.edmToTs(percentageAccuracy, 'Edm.Int32') }); },
            MeasuringAccuracy: function (measuringAccuracy) { return ({ measuringAccuracy: v4_1.edmToTs(measuringAccuracy, 'Edm.Int32') }); },
            QueryAccuracy: function (queryAccuracy) { return ({ queryAccuracy: v4_1.edmToTs(queryAccuracy, 'Edm.Int32') }); },
            AddressinForeignLanguage: function (addressinForeignLanguage) { return ({ addressinForeignLanguage: v4_1.edmToTs(addressinForeignLanguage, 'Edm.String') }); },
            DefaultTaxCode: function (defaultTaxCode) { return ({ defaultTaxCode: v4_1.edmToTs(defaultTaxCode, 'Edm.String') }); },
            LetterHeaderinForeignLangu: function (letterHeaderinForeignLangu) { return ({ letterHeaderinForeignLangu: v4_1.edmToTs(letterHeaderinForeignLangu, 'Edm.String') }); },
            PhoneNumber1ForeignLang: function (phoneNumber1ForeignLang) { return ({ phoneNumber1ForeignLang: v4_1.edmToTs(phoneNumber1ForeignLang, 'Edm.String') }); },
            PhoneNumber2ForeignLang: function (phoneNumber2ForeignLang) { return ({ phoneNumber2ForeignLang: v4_1.edmToTs(phoneNumber2ForeignLang, 'Edm.String') }); },
            FaxNumberForeignLang: function (faxNumberForeignLang) { return ({ faxNumberForeignLang: v4_1.edmToTs(faxNumberForeignLang, 'Edm.String') }); },
            ManagingDirectorForeignLan: function (managingDirectorForeignLan) { return ({ managingDirectorForeignLan: v4_1.edmToTs(managingDirectorForeignLan, 'Edm.String') }); },
            DateSeparator: function (dateSeparator) { return ({ dateSeparator: v4_1.edmToTs(dateSeparator, 'Edm.String') }); },
            ISRType: function (isrType) { return ({ isrType: v4_1.edmToTs(isrType, 'Edm.Int32') }); },
            ISRBillerID: function (isrBillerId) { return ({ isrBillerId: v4_1.edmToTs(isrBillerId, 'Edm.String') }); },
            DefaultWarehouse: function (defaultWarehouse) { return ({ defaultWarehouse: v4_1.edmToTs(defaultWarehouse, 'Edm.String') }); },
            TaxDefinitionforVatitem: function (taxDefinitionforVatitem) { return ({ taxDefinitionforVatitem: v4_1.edmToTs(taxDefinitionforVatitem, 'Edm.String') }); },
            TaxDefinitionforVatservice: function (taxDefinitionforVatservice) { return ({ taxDefinitionforVatservice: v4_1.edmToTs(taxDefinitionforVatservice, 'Edm.String') }); },
            TaxGroupforPurchaseItem: function (taxGroupforPurchaseItem) { return ({ taxGroupforPurchaseItem: v4_1.edmToTs(taxGroupforPurchaseItem, 'Edm.String') }); },
            TaxGroupforServicePurchase: function (taxGroupforServicePurchase) { return ({ taxGroupforServicePurchase: v4_1.edmToTs(taxGroupforServicePurchase, 'Edm.String') }); },
            CustomerIdNumber: function (customerIdNumber) { return ({ customerIdNumber: v4_1.edmToTs(customerIdNumber, 'Edm.String') }); },
            DefaultBudgetCostAssessMt: function (defaultBudgetCostAssessMt) { return ({ defaultBudgetCostAssessMt: v4_1.edmToTs(defaultBudgetCostAssessMt, 'Edm.Int32') }); },
            FileNumberinIncomeTax: function (fileNumberinIncomeTax) { return ({ fileNumberinIncomeTax: v4_1.edmToTs(fileNumberinIncomeTax, 'Edm.String') }); },
            DefaultBankNo: function (defaultBankNo) { return ({ defaultBankNo: v4_1.edmToTs(defaultBankNo, 'Edm.String') }); },
            DefaultBankAccount: function (defaultBankAccount) { return ({ defaultBankAccount: v4_1.edmToTs(defaultBankAccount, 'Edm.String') }); },
            DefaultBranch: function (defaultBranch) { return ({ defaultBranch: v4_1.edmToTs(defaultBranch, 'Edm.String') }); },
            ServiceCode: function (serviceCode) { return ({ serviceCode: v4_1.edmToTs(serviceCode, 'Edm.String') }); },
            ServicePassword: function (servicePassword) { return ({ servicePassword: v4_1.edmToTs(servicePassword, 'Edm.String') }); },
            ParamFolderPath: function (paramFolderPath) { return ({ paramFolderPath: v4_1.edmToTs(paramFolderPath, 'Edm.String') }); },
            ExcelFolderPath: function (excelFolderPath) { return ({ excelFolderPath: v4_1.edmToTs(excelFolderPath, 'Edm.String') }); },
            FederalTaxID2: function (federalTaxId2) { return ({ federalTaxId2: v4_1.edmToTs(federalTaxId2, 'Edm.String') }); },
            FederalTaxID3: function (federalTaxId3) { return ({ federalTaxId3: v4_1.edmToTs(federalTaxId3, 'Edm.String') }); },
            DecimalSeparator: function (decimalSeparator) { return ({ decimalSeparator: v4_1.edmToTs(decimalSeparator, 'Edm.String') }); },
            ThousandsSeparator: function (thousandsSeparator) { return ({ thousandsSeparator: v4_1.edmToTs(thousandsSeparator, 'Edm.String') }); },
            MaxHistory: function (maxHistory) { return ({ maxHistory: v4_1.edmToTs(maxHistory, 'Edm.Int32') }); },
            BPTypeCode: function (bpTypeCode) { return ({ bpTypeCode: v4_1.edmToTs(bpTypeCode, 'Edm.String') }); },
            PBSNumber: function (pbsNumber) { return ({ pbsNumber: v4_1.edmToTs(pbsNumber, 'Edm.String') }); },
            PBSGroupNumber: function (pbsGroupNumber) { return ({ pbsGroupNumber: v4_1.edmToTs(pbsGroupNumber, 'Edm.String') }); },
            OrganizationNumber: function (organizationNumber) { return ({ organizationNumber: v4_1.edmToTs(organizationNumber, 'Edm.String') }); },
            AccountSegmentsSeparator: function (accountSegmentsSeparator) { return ({ accountSegmentsSeparator: v4_1.edmToTs(accountSegmentsSeparator, 'Edm.String') }); },
            SDefaultWTCode: function (sDefaultWtCode) { return ({ sDefaultWtCode: v4_1.edmToTs(sDefaultWtCode, 'Edm.String') }); },
            WithholdingTaxPHandle: function (withholdingTaxPHandle) { return ({ withholdingTaxPHandle: v4_1.edmToTs(withholdingTaxPHandle, 'Edm.String') }); },
            PDefaultWTCode: function (pDefaultWtCode) { return ({ pDefaultWtCode: v4_1.edmToTs(pDefaultWtCode, 'Edm.String') }); },
            HolidaysName: function (holidaysName) { return ({ holidaysName: v4_1.edmToTs(holidaysName, 'Edm.String') }); },
            OrderBlock: function (orderBlock) { return ({ orderBlock: v4_1.edmToTs(orderBlock, 'Edm.String') }); },
            OrderingParty: function (orderingParty) { return ({ orderingParty: v4_1.edmToTs(orderingParty, 'Edm.String') }); },
            CertificateNo: function (certificateNo) { return ({ certificateNo: v4_1.edmToTs(certificateNo, 'Edm.String') }); },
            ExpirationDate: function (expirationDate) { return ({ expirationDate: v4_1.edmToTs(expirationDate, 'Edm.DateTimeOffset') }); },
            NationalInsuranceNo: function (nationalInsuranceNo) { return ({ nationalInsuranceNo: v4_1.edmToTs(nationalInsuranceNo, 'Edm.String') }); },
            SDfltITWT: function (sDfltItwt) { return ({ sDfltItwt: v4_1.edmToTs(sDfltItwt, 'Edm.String') }); },
            PDfltITWT: function (pDfltItwt) { return ({ pDfltItwt: v4_1.edmToTs(pDfltItwt, 'Edm.String') }); },
            DaysBackward: function (daysBackward) { return ({ daysBackward: v4_1.edmToTs(daysBackward, 'Edm.Int32') }); },
            DaysForward: function (daysForward) { return ({ daysForward: v4_1.edmToTs(daysForward, 'Edm.Int32') }); },
            DefaultDunningTerm: function (defaultDunningTerm) { return ({ defaultDunningTerm: v4_1.edmToTs(defaultDunningTerm, 'Edm.String') }); },
            DefaultBankAccountKey: function (defaultBankAccountKey) { return ({ defaultBankAccountKey: v4_1.edmToTs(defaultBankAccountKey, 'Edm.Int32') }); },
            AdditionalIdNumber: function (additionalIdNumber) { return ({ additionalIdNumber: v4_1.edmToTs(additionalIdNumber, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            UniqueTaxPayerReference: function (uniqueTaxPayerReference) { return ({ uniqueTaxPayerReference: v4_1.edmToTs(uniqueTaxPayerReference, 'Edm.String') }); },
            EmployerReference: function (employerReference) { return ({ employerReference: v4_1.edmToTs(employerReference, 'Edm.String') }); },
            PeriodStatusChangeDelay: function (periodStatusChangeDelay) { return ({ periodStatusChangeDelay: v4_1.edmToTs(periodStatusChangeDelay, 'Edm.Int32') }); },
            GrossProfitPercentForServiceDocuments: function (grossProfitPercentForServiceDocuments) { return ({ grossProfitPercentForServiceDocuments: v4_1.edmToTs(grossProfitPercentForServiceDocuments, 'Edm.Double') }); },
            XMLFileFolderPath: function (xmlFileFolderPath) { return ({ xmlFileFolderPath: v4_1.edmToTs(xmlFileFolderPath, 'Edm.String') }); },
            GeneralManager: function (generalManager) { return ({ generalManager: v4_1.edmToTs(generalManager, 'Edm.String') }); },
            GeneralManagerForeignLanguage: function (generalManagerForeignLanguage) { return ({ generalManagerForeignLanguage: v4_1.edmToTs(generalManagerForeignLanguage, 'Edm.String') }); },
            WTAccumAmountAP: function (wtAccumAmountAp) { return ({ wtAccumAmountAp: v4_1.edmToTs(wtAccumAmountAp, 'Edm.Double') }); },
            WTAccumAmountAR: function (wtAccumAmountAr) { return ({ wtAccumAmountAr: v4_1.edmToTs(wtAccumAmountAr, 'Edm.Double') }); },
            GTSOutboundFolder: function (gtsOutboundFolder) { return ({ gtsOutboundFolder: v4_1.edmToTs(gtsOutboundFolder, 'Edm.String') }); },
            GTSInboundFolder: function (gtsInboundFolder) { return ({ gtsInboundFolder: v4_1.edmToTs(gtsInboundFolder, 'Edm.String') }); },
            GTSSeparateCode: function (gtsSeparateCode) { return ({ gtsSeparateCode: v4_1.edmToTs(gtsSeparateCode, 'Edm.String') }); },
            GTSDefaultChecker: function (gtsDefaultChecker) { return ({ gtsDefaultChecker: v4_1.edmToTs(gtsDefaultChecker, 'Edm.Int32') }); },
            GTSDefaultPayee: function (gtsDefaultPayee) { return ({ gtsDefaultPayee: v4_1.edmToTs(gtsDefaultPayee, 'Edm.Int32') }); },
            GTSMaxAmount: function (gtsMaxAmount) { return ({ gtsMaxAmount: v4_1.edmToTs(gtsMaxAmount, 'Edm.Double') }); },
            StartingInFiscalYear: function (startingInFiscalYear) { return ({ startingInFiscalYear: v4_1.edmToTs(startingInFiscalYear, 'Edm.Int32') }); },
            ReportAccordingTo: function (reportAccordingTo) { return ({ reportAccordingTo: v4_1.edmToTs(reportAccordingTo, 'Edm.Int32') }); },
            MaximumNumberOfDaysForDueDate: function (maximumNumberOfDaysForDueDate) { return ({ maximumNumberOfDaysForDueDate: v4_1.edmToTs(maximumNumberOfDaysForDueDate, 'Edm.Int32') }); },
            AliasName: function (aliasName) { return ({ aliasName: v4_1.edmToTs(aliasName, 'Edm.String') }); },
            BoletoFolderPath: function (boletoFolderPath) { return ({ boletoFolderPath: v4_1.edmToTs(boletoFolderPath, 'Edm.String') }); },
            MaxDaysForCancel: function (maxDaysForCancel) { return ({ maxDaysForCancel: v4_1.edmToTs(maxDaysForCancel, 'Edm.Int32') }); },
            SirenNo: function (sirenNo) { return ({ sirenNo: v4_1.edmToTs(sirenNo, 'Edm.String') }); },
            InstitutionCode: function (institutionCode) { return ({ institutionCode: v4_1.edmToTs(institutionCode, 'Edm.String') }); },
            Series: function (series) { return ({ series: v4_1.edmToTs(series, 'Edm.Int32') }); },
            Account: function (account) { return ({ account: v4_1.edmToTs(account, 'Edm.String') }); },
            EnableMultipleSchedulings: function (enableMultipleSchedulings) { return ({ enableMultipleSchedulings: v4_1.edmToTs(enableMultipleSchedulings, 'Edm.String') }); },
            InventoryPostingHighlightVariance: function (inventoryPostingHighlightVariance) { return ({ inventoryPostingHighlightVariance: v4_1.edmToTs(inventoryPostingHighlightVariance, 'Edm.Double') }); },
            InventoryCountingHighlightVariance: function (inventoryCountingHighlightVariance) { return ({ inventoryCountingHighlightVariance: v4_1.edmToTs(inventoryCountingHighlightVariance, 'Edm.Double') }); },
            InventoryCountingHighlightMaxVariance: function (inventoryCountingHighlightMaxVariance) { return ({ inventoryCountingHighlightMaxVariance: v4_1.edmToTs(inventoryCountingHighlightMaxVariance, 'Edm.Double') }); },
            InventoryCountingHighlightCountersDifference: function (inventoryCountingHighlightCountersDifference) { return ({ inventoryCountingHighlightCountersDifference: v4_1.edmToTs(inventoryCountingHighlightCountersDifference, 'Edm.Double') }); },
            SEPACreditorID: function (sepaCreditorId) { return ({ sepaCreditorId: v4_1.edmToTs(sepaCreditorId, 'Edm.String') }); },
            ExtendedAdminInfo: function (extendedAdminInfo) { return ({ extendedAdminInfo: ExtendedAdminInfo_1.ExtendedAdminInfo.build(extendedAdminInfo) }); }
        });
    }
    AdminInfo.build = build;
})(AdminInfo = exports.AdminInfo || (exports.AdminInfo = {}));
//# sourceMappingURL=AdminInfo.js.map