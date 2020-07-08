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
exports.DocumentLine = exports.DocumentLineField = exports.createDocumentLine = void 0;
var LineTaxJurisdiction_1 = require("./LineTaxJurisdiction");
var GeneratedAsset_1 = require("./GeneratedAsset");
var DocumentLineAdditionalExpense_1 = require("./DocumentLineAdditionalExpense");
var WithholdingTaxLine_1 = require("./WithholdingTaxLine");
var SerialNumber_1 = require("./SerialNumber");
var BatchNumber_1 = require("./BatchNumber");
var DocumentLinesBinAllocation_1 = require("./DocumentLinesBinAllocation");
var ExportProcess_1 = require("./ExportProcess");
var ImportProcess_1 = require("./ImportProcess");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentLine.build]] instead.
 */
function createDocumentLine(json) {
    return DocumentLine.build(json);
}
exports.createDocumentLine = createDocumentLine;
/**
 * DocumentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentLineField = /** @class */ (function (_super) {
    __extends(DocumentLineField, _super);
    function DocumentLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new v4_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.shipDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipDate = new v4_1.ComplexTypeDatePropertyField('ShipDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new v4_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.priceAfterVat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceAfterVat = new v4_1.ComplexTypeNumberPropertyField('PriceAfterVAT', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new v4_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.discountPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercent = new v4_1.ComplexTypeNumberPropertyField('DiscountPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.vendorNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorNum = new v4_1.ComplexTypeStringPropertyField('VendorNum', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.serialNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNum = new v4_1.ComplexTypeStringPropertyField('SerialNum', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new v4_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.salesPersonCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesPersonCode = new v4_1.ComplexTypeNumberPropertyField('SalesPersonCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.commisionPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commisionPercent = new v4_1.ComplexTypeNumberPropertyField('CommisionPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.supplierCatNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatNum = new v4_1.ComplexTypeStringPropertyField('SupplierCatNum', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new v4_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new v4_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new v4_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.height1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height1 = new v4_1.ComplexTypeNumberPropertyField('Height1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.hight1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hight1Unit = new v4_1.ComplexTypeNumberPropertyField('Hight1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.height2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2 = new v4_1.ComplexTypeNumberPropertyField('Height2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.height2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2Unit = new v4_1.ComplexTypeNumberPropertyField('Height2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.lengh1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh1 = new v4_1.ComplexTypeNumberPropertyField('Lengh1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lengh1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh1Unit = new v4_1.ComplexTypeNumberPropertyField('Lengh1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.lengh2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh2 = new v4_1.ComplexTypeNumberPropertyField('Lengh2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lengh2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh2Unit = new v4_1.ComplexTypeNumberPropertyField('Lengh2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.weight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1 = new v4_1.ComplexTypeNumberPropertyField('Weight1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.weight1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1Unit = new v4_1.ComplexTypeNumberPropertyField('Weight1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.weight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2 = new v4_1.ComplexTypeNumberPropertyField('Weight2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.weight2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2Unit = new v4_1.ComplexTypeNumberPropertyField('Weight2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.factor1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor1 = new v4_1.ComplexTypeNumberPropertyField('Factor1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.factor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor2 = new v4_1.ComplexTypeNumberPropertyField('Factor2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.factor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor3 = new v4_1.ComplexTypeNumberPropertyField('Factor3', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.factor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor4 = new v4_1.ComplexTypeNumberPropertyField('Factor4', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new v4_1.ComplexTypeNumberPropertyField('BaseType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new v4_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new v4_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.volume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volume = new v4_1.ComplexTypeNumberPropertyField('Volume', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.volumeUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volumeUnit = new v4_1.ComplexTypeNumberPropertyField('VolumeUnit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.width1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1 = new v4_1.ComplexTypeNumberPropertyField('Width1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.width1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1Unit = new v4_1.ComplexTypeNumberPropertyField('Width1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.width2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2 = new v4_1.ComplexTypeNumberPropertyField('Width2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.width2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2Unit = new v4_1.ComplexTypeNumberPropertyField('Width2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new v4_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.pickQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickQuantity = new v4_1.ComplexTypeNumberPropertyField('PickQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.pickListIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickListIdNumber = new v4_1.ComplexTypeNumberPropertyField('PickListIdNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.originalItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalItem = new v4_1.ComplexTypeStringPropertyField('OriginalItem', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new v4_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.shippingMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shippingMethod = new v4_1.ComplexTypeNumberPropertyField('ShippingMethod', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.poTargetNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poTargetNum = new v4_1.ComplexTypeNumberPropertyField('POTargetNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.poTargetEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poTargetEntry = new v4_1.ComplexTypeStringPropertyField('POTargetEntry', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.poTargetRowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poTargetRowNum = new v4_1.ComplexTypeNumberPropertyField('POTargetRowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.corrInvAmountToStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.corrInvAmountToStock = new v4_1.ComplexTypeNumberPropertyField('CorrInvAmountToStock', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.corrInvAmountToDiffAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.corrInvAmountToDiffAcct = new v4_1.ComplexTypeNumberPropertyField('CorrInvAmountToDiffAcct', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.appliedTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedTax = new v4_1.ComplexTypeNumberPropertyField('AppliedTax', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.appliedTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedTaxFc = new v4_1.ComplexTypeNumberPropertyField('AppliedTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.appliedTaxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedTaxSc = new v4_1.ComplexTypeNumberPropertyField('AppliedTaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.equalizationTaxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxPercent = new v4_1.ComplexTypeNumberPropertyField('EqualizationTaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalEqualizationTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalEqualizationTax = new v4_1.ComplexTypeNumberPropertyField('TotalEqualizationTax', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalEqualizationTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalEqualizationTaxFc = new v4_1.ComplexTypeNumberPropertyField('TotalEqualizationTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalEqualizationTaxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalEqualizationTaxSc = new v4_1.ComplexTypeNumberPropertyField('TotalEqualizationTaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.netTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netTaxAmount = new v4_1.ComplexTypeNumberPropertyField('NetTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.netTaxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netTaxAmountFc = new v4_1.ComplexTypeNumberPropertyField('NetTaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.netTaxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netTaxAmountSc = new v4_1.ComplexTypeNumberPropertyField('NetTaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.measureUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measureUnit = new v4_1.ComplexTypeStringPropertyField('MeasureUnit', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.unitsOfMeasurment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurment = new v4_1.ComplexTypeNumberPropertyField('UnitsOfMeasurment', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new v4_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxPercentagePerRow]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercentagePerRow = new v4_1.ComplexTypeNumberPropertyField('TaxPercentagePerRow', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotal = new v4_1.ComplexTypeNumberPropertyField('TaxTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.exciseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseAmount = new v4_1.ComplexTypeNumberPropertyField('ExciseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPerUnit = new v4_1.ComplexTypeNumberPropertyField('TaxPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalInclTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalInclTax = new v4_1.ComplexTypeNumberPropertyField('TotalInclTax', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.countryOrg]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryOrg = new v4_1.ComplexTypeStringPropertyField('CountryOrg', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.sww]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sww = new v4_1.ComplexTypeStringPropertyField('SWW', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.shipToCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCode = new v4_1.ComplexTypeStringPropertyField('ShipToCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.rowTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowTotalFc = new v4_1.ComplexTypeNumberPropertyField('RowTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.rowTotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowTotalSc = new v4_1.ComplexTypeNumberPropertyField('RowTotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyInmPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyInmPrice = new v4_1.ComplexTypeNumberPropertyField('LastBuyInmPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyDistributeSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyDistributeSumFc = new v4_1.ComplexTypeNumberPropertyField('LastBuyDistributeSumFc', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyDistributeSumSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyDistributeSumSc = new v4_1.ComplexTypeNumberPropertyField('LastBuyDistributeSumSc', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyDistributeSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyDistributeSum = new v4_1.ComplexTypeNumberPropertyField('LastBuyDistributeSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockDistributesumForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockDistributesumForeign = new v4_1.ComplexTypeNumberPropertyField('StockDistributesumForeign', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockDistributesumSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockDistributesumSystem = new v4_1.ComplexTypeNumberPropertyField('StockDistributesumSystem', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockDistributesum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockDistributesum = new v4_1.ComplexTypeNumberPropertyField('StockDistributesum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockInmPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInmPrice = new v4_1.ComplexTypeNumberPropertyField('StockInmPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxBeforeDpm]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxBeforeDpm = new v4_1.ComplexTypeNumberPropertyField('TaxBeforeDPM', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxBeforeDpmfc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxBeforeDpmfc = new v4_1.ComplexTypeNumberPropertyField('TaxBeforeDPMFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxBeforeDpmsc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxBeforeDpmsc = new v4_1.ComplexTypeNumberPropertyField('TaxBeforeDPMSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.cfopCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cfopCode = new v4_1.ComplexTypeStringPropertyField('CFOPCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cstCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cstCode = new v4_1.ComplexTypeStringPropertyField('CSTCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.usage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usage = new v4_1.ComplexTypeNumberPropertyField('Usage', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new v4_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.baseOpenQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseOpenQuantity = new v4_1.ComplexTypeNumberPropertyField('BaseOpenQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new v4_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.packageQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageQuantity = new v4_1.ComplexTypeNumberPropertyField('PackageQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.text]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.text = new v4_1.ComplexTypeStringPropertyField('Text', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode = new v4_1.ComplexTypeStringPropertyField('COGSCostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsAccountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsAccountCode = new v4_1.ComplexTypeStringPropertyField('COGSAccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.changeAssemlyBoMWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeAssemlyBoMWarehouse = new v4_1.ComplexTypeStringPropertyField('ChangeAssemlyBoMWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.grossBuyPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossBuyPrice = new v4_1.ComplexTypeNumberPropertyField('GrossBuyPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossBase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossBase = new v4_1.ComplexTypeNumberPropertyField('GrossBase', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.grossProfitTotalBasePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossProfitTotalBasePrice = new v4_1.ComplexTypeNumberPropertyField('GrossProfitTotalBasePrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new v4_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new v4_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new v4_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new v4_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.itemDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDetails = new v4_1.ComplexTypeStringPropertyField('ItemDetails', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new v4_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.actualDeliveryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualDeliveryDate = new v4_1.ComplexTypeDatePropertyField('ActualDeliveryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentLine.remainingOpenQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenQuantity = new v4_1.ComplexTypeNumberPropertyField('RemainingOpenQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.openAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmount = new v4_1.ComplexTypeNumberPropertyField('OpenAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.openAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountFc = new v4_1.ComplexTypeNumberPropertyField('OpenAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.openAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountSc = new v4_1.ComplexTypeNumberPropertyField('OpenAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.exLineNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exLineNo = new v4_1.ComplexTypeStringPropertyField('ExLineNo', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.requiredDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredDate = new v4_1.ComplexTypeDatePropertyField('RequiredDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentLine.requiredQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredQuantity = new v4_1.ComplexTypeNumberPropertyField('RequiredQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode2 = new v4_1.ComplexTypeStringPropertyField('COGSCostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode3 = new v4_1.ComplexTypeStringPropertyField('COGSCostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode4 = new v4_1.ComplexTypeStringPropertyField('COGSCostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode5 = new v4_1.ComplexTypeStringPropertyField('COGSCostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.csTforIpi]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.csTforIpi = new v4_1.ComplexTypeStringPropertyField('CSTforIPI', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.csTforPis]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.csTforPis = new v4_1.ComplexTypeStringPropertyField('CSTforPIS', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.csTforCofins]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.csTforCofins = new v4_1.ComplexTypeStringPropertyField('CSTforCOFINS', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.creditOriginCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditOriginCode = new v4_1.ComplexTypeStringPropertyField('CreditOriginCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new v4_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new v4_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.shipToDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToDescription = new v4_1.ComplexTypeStringPropertyField('ShipToDescription', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.actualBaseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualBaseEntry = new v4_1.ComplexTypeNumberPropertyField('ActualBaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.actualBaseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualBaseLine = new v4_1.ComplexTypeNumberPropertyField('ActualBaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.surpluses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.surpluses = new v4_1.ComplexTypeNumberPropertyField('Surpluses', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.defectAndBreakup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defectAndBreakup = new v4_1.ComplexTypeNumberPropertyField('DefectAndBreakup', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.shortages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortages = new v4_1.ComplexTypeNumberPropertyField('Shortages', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.retirementQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.retirementQuantity = new v4_1.ComplexTypeNumberPropertyField('RetirementQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.retirementApc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.retirementApc = new v4_1.ComplexTypeNumberPropertyField('RetirementAPC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.expenseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseType = new v4_1.ComplexTypeStringPropertyField('ExpenseType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.receiptNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receiptNumber = new v4_1.ComplexTypeStringPropertyField('ReceiptNumber', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new v4_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.returnCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returnCost = new v4_1.ComplexTypeNumberPropertyField('ReturnCost', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lineVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineVendor = new v4_1.ComplexTypeStringPropertyField('LineVendor', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.stgSeqNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stgSeqNum = new v4_1.ComplexTypeNumberPropertyField('StgSeqNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.stgEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stgEntry = new v4_1.ComplexTypeNumberPropertyField('StgEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.stgDesc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stgDesc = new v4_1.ComplexTypeStringPropertyField('StgDesc', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.inventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryQuantity = new v4_1.ComplexTypeNumberPropertyField('InventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.remainingOpenInventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenInventoryQuantity = new v4_1.ComplexTypeNumberPropertyField('RemainingOpenInventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.parentLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentLineNum = new v4_1.ComplexTypeNumberPropertyField('ParentLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.incoterms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incoterms = new v4_1.ComplexTypeNumberPropertyField('Incoterms', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.transportMode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transportMode = new v4_1.ComplexTypeNumberPropertyField('TransportMode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.sacEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sacEntry = new v4_1.ComplexTypeNumberPropertyField('SACEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.hsnEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hsnEntry = new v4_1.ComplexTypeNumberPropertyField('HSNEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.grossPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossPrice = new v4_1.ComplexTypeNumberPropertyField('GrossPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotal = new v4_1.ComplexTypeNumberPropertyField('GrossTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalFc = new v4_1.ComplexTypeNumberPropertyField('GrossTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossTotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalSc = new v4_1.ComplexTypeNumberPropertyField('GrossTotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.ncmCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ncmCode = new v4_1.ComplexTypeNumberPropertyField('NCMCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.lineTaxJurisdictions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTaxJurisdictions = new LineTaxJurisdiction_1.LineTaxJurisdictionField('LineTaxJurisdictions', _this);
        /**
         * Representation of the [[DocumentLine.generatedAssets]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generatedAssets = new GeneratedAsset_1.GeneratedAssetField('GeneratedAssets', _this);
        /**
         * Representation of the [[DocumentLine.documentLineAdditionalExpenses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLineAdditionalExpenses = new DocumentLineAdditionalExpense_1.DocumentLineAdditionalExpenseField('DocumentLineAdditionalExpenses', _this);
        /**
         * Representation of the [[DocumentLine.withholdingTaxLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxLines = new WithholdingTaxLine_1.WithholdingTaxLineField('WithholdingTaxLines', _this);
        /**
         * Representation of the [[DocumentLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new SerialNumber_1.SerialNumberField('SerialNumbers', _this);
        /**
         * Representation of the [[DocumentLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new BatchNumber_1.BatchNumberField('BatchNumbers', _this);
        /**
         * Representation of the [[DocumentLine.documentLinesBinAllocations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLinesBinAllocations = new DocumentLinesBinAllocation_1.DocumentLinesBinAllocationField('DocumentLinesBinAllocations', _this);
        /**
         * Representation of the [[DocumentLine.exportProcesses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportProcesses = new ExportProcess_1.ExportProcessField('ExportProcesses', _this);
        /**
         * Representation of the [[DocumentLine.returnAction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returnAction = new v4_1.ComplexTypeNumberPropertyField('ReturnAction', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.returnReason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returnReason = new v4_1.ComplexTypeNumberPropertyField('ReturnReason', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.importProcesses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importProcesses = new ImportProcess_1.ImportProcessField('ImportProcesses', _this);
        return _this;
    }
    return DocumentLineField;
}(v4_1.ComplexTypeField));
exports.DocumentLineField = DocumentLineField;
var DocumentLine;
(function (DocumentLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            ItemCode: function (itemCode) { return ({ itemCode: v4_1.edmToTs(itemCode, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            ShipDate: function (shipDate) { return ({ shipDate: v4_1.edmToTs(shipDate, 'Edm.DateTimeOffset') }); },
            Price: function (price) { return ({ price: v4_1.edmToTs(price, 'Edm.Double') }); },
            PriceAfterVAT: function (priceAfterVat) { return ({ priceAfterVat: v4_1.edmToTs(priceAfterVat, 'Edm.Double') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            Rate: function (rate) { return ({ rate: v4_1.edmToTs(rate, 'Edm.Double') }); },
            DiscountPercent: function (discountPercent) { return ({ discountPercent: v4_1.edmToTs(discountPercent, 'Edm.Double') }); },
            VendorNum: function (vendorNum) { return ({ vendorNum: v4_1.edmToTs(vendorNum, 'Edm.String') }); },
            SerialNum: function (serialNum) { return ({ serialNum: v4_1.edmToTs(serialNum, 'Edm.String') }); },
            WarehouseCode: function (warehouseCode) { return ({ warehouseCode: v4_1.edmToTs(warehouseCode, 'Edm.String') }); },
            SalesPersonCode: function (salesPersonCode) { return ({ salesPersonCode: v4_1.edmToTs(salesPersonCode, 'Edm.Int32') }); },
            CommisionPercent: function (commisionPercent) { return ({ commisionPercent: v4_1.edmToTs(commisionPercent, 'Edm.Double') }); },
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            SupplierCatNum: function (supplierCatNum) { return ({ supplierCatNum: v4_1.edmToTs(supplierCatNum, 'Edm.String') }); },
            CostingCode: function (costingCode) { return ({ costingCode: v4_1.edmToTs(costingCode, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            BarCode: function (barCode) { return ({ barCode: v4_1.edmToTs(barCode, 'Edm.String') }); },
            VatGroup: function (vatGroup) { return ({ vatGroup: v4_1.edmToTs(vatGroup, 'Edm.String') }); },
            Height1: function (height1) { return ({ height1: v4_1.edmToTs(height1, 'Edm.Double') }); },
            Hight1Unit: function (hight1Unit) { return ({ hight1Unit: v4_1.edmToTs(hight1Unit, 'Edm.Int32') }); },
            Height2: function (height2) { return ({ height2: v4_1.edmToTs(height2, 'Edm.Double') }); },
            Height2Unit: function (height2Unit) { return ({ height2Unit: v4_1.edmToTs(height2Unit, 'Edm.Int32') }); },
            Lengh1: function (lengh1) { return ({ lengh1: v4_1.edmToTs(lengh1, 'Edm.Double') }); },
            Lengh1Unit: function (lengh1Unit) { return ({ lengh1Unit: v4_1.edmToTs(lengh1Unit, 'Edm.Int32') }); },
            Lengh2: function (lengh2) { return ({ lengh2: v4_1.edmToTs(lengh2, 'Edm.Double') }); },
            Lengh2Unit: function (lengh2Unit) { return ({ lengh2Unit: v4_1.edmToTs(lengh2Unit, 'Edm.Int32') }); },
            Weight1: function (weight1) { return ({ weight1: v4_1.edmToTs(weight1, 'Edm.Double') }); },
            Weight1Unit: function (weight1Unit) { return ({ weight1Unit: v4_1.edmToTs(weight1Unit, 'Edm.Int32') }); },
            Weight2: function (weight2) { return ({ weight2: v4_1.edmToTs(weight2, 'Edm.Double') }); },
            Weight2Unit: function (weight2Unit) { return ({ weight2Unit: v4_1.edmToTs(weight2Unit, 'Edm.Int32') }); },
            Factor1: function (factor1) { return ({ factor1: v4_1.edmToTs(factor1, 'Edm.Double') }); },
            Factor2: function (factor2) { return ({ factor2: v4_1.edmToTs(factor2, 'Edm.Double') }); },
            Factor3: function (factor3) { return ({ factor3: v4_1.edmToTs(factor3, 'Edm.Double') }); },
            Factor4: function (factor4) { return ({ factor4: v4_1.edmToTs(factor4, 'Edm.Double') }); },
            BaseType: function (baseType) { return ({ baseType: v4_1.edmToTs(baseType, 'Edm.Int32') }); },
            BaseEntry: function (baseEntry) { return ({ baseEntry: v4_1.edmToTs(baseEntry, 'Edm.Int32') }); },
            BaseLine: function (baseLine) { return ({ baseLine: v4_1.edmToTs(baseLine, 'Edm.Int32') }); },
            Volume: function (volume) { return ({ volume: v4_1.edmToTs(volume, 'Edm.Double') }); },
            VolumeUnit: function (volumeUnit) { return ({ volumeUnit: v4_1.edmToTs(volumeUnit, 'Edm.Int32') }); },
            Width1: function (width1) { return ({ width1: v4_1.edmToTs(width1, 'Edm.Double') }); },
            Width1Unit: function (width1Unit) { return ({ width1Unit: v4_1.edmToTs(width1Unit, 'Edm.Int32') }); },
            Width2: function (width2) { return ({ width2: v4_1.edmToTs(width2, 'Edm.Double') }); },
            Width2Unit: function (width2Unit) { return ({ width2Unit: v4_1.edmToTs(width2Unit, 'Edm.Int32') }); },
            Address: function (address) { return ({ address: v4_1.edmToTs(address, 'Edm.String') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            PickQuantity: function (pickQuantity) { return ({ pickQuantity: v4_1.edmToTs(pickQuantity, 'Edm.Double') }); },
            PickListIdNumber: function (pickListIdNumber) { return ({ pickListIdNumber: v4_1.edmToTs(pickListIdNumber, 'Edm.Int32') }); },
            OriginalItem: function (originalItem) { return ({ originalItem: v4_1.edmToTs(originalItem, 'Edm.String') }); },
            FreeText: function (freeText) { return ({ freeText: v4_1.edmToTs(freeText, 'Edm.String') }); },
            ShippingMethod: function (shippingMethod) { return ({ shippingMethod: v4_1.edmToTs(shippingMethod, 'Edm.Int32') }); },
            POTargetNum: function (poTargetNum) { return ({ poTargetNum: v4_1.edmToTs(poTargetNum, 'Edm.Int32') }); },
            POTargetEntry: function (poTargetEntry) { return ({ poTargetEntry: v4_1.edmToTs(poTargetEntry, 'Edm.String') }); },
            POTargetRowNum: function (poTargetRowNum) { return ({ poTargetRowNum: v4_1.edmToTs(poTargetRowNum, 'Edm.Int32') }); },
            CorrInvAmountToStock: function (corrInvAmountToStock) { return ({ corrInvAmountToStock: v4_1.edmToTs(corrInvAmountToStock, 'Edm.Double') }); },
            CorrInvAmountToDiffAcct: function (corrInvAmountToDiffAcct) { return ({ corrInvAmountToDiffAcct: v4_1.edmToTs(corrInvAmountToDiffAcct, 'Edm.Double') }); },
            AppliedTax: function (appliedTax) { return ({ appliedTax: v4_1.edmToTs(appliedTax, 'Edm.Double') }); },
            AppliedTaxFC: function (appliedTaxFc) { return ({ appliedTaxFc: v4_1.edmToTs(appliedTaxFc, 'Edm.Double') }); },
            AppliedTaxSC: function (appliedTaxSc) { return ({ appliedTaxSc: v4_1.edmToTs(appliedTaxSc, 'Edm.Double') }); },
            EqualizationTaxPercent: function (equalizationTaxPercent) { return ({ equalizationTaxPercent: v4_1.edmToTs(equalizationTaxPercent, 'Edm.Double') }); },
            TotalEqualizationTax: function (totalEqualizationTax) { return ({ totalEqualizationTax: v4_1.edmToTs(totalEqualizationTax, 'Edm.Double') }); },
            TotalEqualizationTaxFC: function (totalEqualizationTaxFc) { return ({ totalEqualizationTaxFc: v4_1.edmToTs(totalEqualizationTaxFc, 'Edm.Double') }); },
            TotalEqualizationTaxSC: function (totalEqualizationTaxSc) { return ({ totalEqualizationTaxSc: v4_1.edmToTs(totalEqualizationTaxSc, 'Edm.Double') }); },
            NetTaxAmount: function (netTaxAmount) { return ({ netTaxAmount: v4_1.edmToTs(netTaxAmount, 'Edm.Double') }); },
            NetTaxAmountFC: function (netTaxAmountFc) { return ({ netTaxAmountFc: v4_1.edmToTs(netTaxAmountFc, 'Edm.Double') }); },
            NetTaxAmountSC: function (netTaxAmountSc) { return ({ netTaxAmountSc: v4_1.edmToTs(netTaxAmountSc, 'Edm.Double') }); },
            MeasureUnit: function (measureUnit) { return ({ measureUnit: v4_1.edmToTs(measureUnit, 'Edm.String') }); },
            UnitsOfMeasurment: function (unitsOfMeasurment) { return ({ unitsOfMeasurment: v4_1.edmToTs(unitsOfMeasurment, 'Edm.Double') }); },
            LineTotal: function (lineTotal) { return ({ lineTotal: v4_1.edmToTs(lineTotal, 'Edm.Double') }); },
            TaxPercentagePerRow: function (taxPercentagePerRow) { return ({ taxPercentagePerRow: v4_1.edmToTs(taxPercentagePerRow, 'Edm.Double') }); },
            TaxTotal: function (taxTotal) { return ({ taxTotal: v4_1.edmToTs(taxTotal, 'Edm.Double') }); },
            ExciseAmount: function (exciseAmount) { return ({ exciseAmount: v4_1.edmToTs(exciseAmount, 'Edm.Double') }); },
            TaxPerUnit: function (taxPerUnit) { return ({ taxPerUnit: v4_1.edmToTs(taxPerUnit, 'Edm.Double') }); },
            TotalInclTax: function (totalInclTax) { return ({ totalInclTax: v4_1.edmToTs(totalInclTax, 'Edm.Double') }); },
            CountryOrg: function (countryOrg) { return ({ countryOrg: v4_1.edmToTs(countryOrg, 'Edm.String') }); },
            SWW: function (sww) { return ({ sww: v4_1.edmToTs(sww, 'Edm.String') }); },
            ShipToCode: function (shipToCode) { return ({ shipToCode: v4_1.edmToTs(shipToCode, 'Edm.String') }); },
            RowTotalFC: function (rowTotalFc) { return ({ rowTotalFc: v4_1.edmToTs(rowTotalFc, 'Edm.Double') }); },
            RowTotalSC: function (rowTotalSc) { return ({ rowTotalSc: v4_1.edmToTs(rowTotalSc, 'Edm.Double') }); },
            LastBuyInmPrice: function (lastBuyInmPrice) { return ({ lastBuyInmPrice: v4_1.edmToTs(lastBuyInmPrice, 'Edm.Double') }); },
            LastBuyDistributeSumFc: function (lastBuyDistributeSumFc) { return ({ lastBuyDistributeSumFc: v4_1.edmToTs(lastBuyDistributeSumFc, 'Edm.Double') }); },
            LastBuyDistributeSumSc: function (lastBuyDistributeSumSc) { return ({ lastBuyDistributeSumSc: v4_1.edmToTs(lastBuyDistributeSumSc, 'Edm.Double') }); },
            LastBuyDistributeSum: function (lastBuyDistributeSum) { return ({ lastBuyDistributeSum: v4_1.edmToTs(lastBuyDistributeSum, 'Edm.Double') }); },
            StockDistributesumForeign: function (stockDistributesumForeign) { return ({ stockDistributesumForeign: v4_1.edmToTs(stockDistributesumForeign, 'Edm.Double') }); },
            StockDistributesumSystem: function (stockDistributesumSystem) { return ({ stockDistributesumSystem: v4_1.edmToTs(stockDistributesumSystem, 'Edm.Double') }); },
            StockDistributesum: function (stockDistributesum) { return ({ stockDistributesum: v4_1.edmToTs(stockDistributesum, 'Edm.Double') }); },
            StockInmPrice: function (stockInmPrice) { return ({ stockInmPrice: v4_1.edmToTs(stockInmPrice, 'Edm.Double') }); },
            TaxBeforeDPM: function (taxBeforeDpm) { return ({ taxBeforeDpm: v4_1.edmToTs(taxBeforeDpm, 'Edm.Double') }); },
            TaxBeforeDPMFC: function (taxBeforeDpmfc) { return ({ taxBeforeDpmfc: v4_1.edmToTs(taxBeforeDpmfc, 'Edm.Double') }); },
            TaxBeforeDPMSC: function (taxBeforeDpmsc) { return ({ taxBeforeDpmsc: v4_1.edmToTs(taxBeforeDpmsc, 'Edm.Double') }); },
            CFOPCode: function (cfopCode) { return ({ cfopCode: v4_1.edmToTs(cfopCode, 'Edm.String') }); },
            CSTCode: function (cstCode) { return ({ cstCode: v4_1.edmToTs(cstCode, 'Edm.String') }); },
            Usage: function (usage) { return ({ usage: v4_1.edmToTs(usage, 'Edm.Int32') }); },
            VisualOrder: function (visualOrder) { return ({ visualOrder: v4_1.edmToTs(visualOrder, 'Edm.Int32') }); },
            BaseOpenQuantity: function (baseOpenQuantity) { return ({ baseOpenQuantity: v4_1.edmToTs(baseOpenQuantity, 'Edm.Double') }); },
            UnitPrice: function (unitPrice) { return ({ unitPrice: v4_1.edmToTs(unitPrice, 'Edm.Double') }); },
            PackageQuantity: function (packageQuantity) { return ({ packageQuantity: v4_1.edmToTs(packageQuantity, 'Edm.Double') }); },
            Text: function (text) { return ({ text: v4_1.edmToTs(text, 'Edm.String') }); },
            COGSCostingCode: function (cogsCostingCode) { return ({ cogsCostingCode: v4_1.edmToTs(cogsCostingCode, 'Edm.String') }); },
            COGSAccountCode: function (cogsAccountCode) { return ({ cogsAccountCode: v4_1.edmToTs(cogsAccountCode, 'Edm.String') }); },
            ChangeAssemlyBoMWarehouse: function (changeAssemlyBoMWarehouse) { return ({ changeAssemlyBoMWarehouse: v4_1.edmToTs(changeAssemlyBoMWarehouse, 'Edm.String') }); },
            GrossBuyPrice: function (grossBuyPrice) { return ({ grossBuyPrice: v4_1.edmToTs(grossBuyPrice, 'Edm.Double') }); },
            GrossBase: function (grossBase) { return ({ grossBase: v4_1.edmToTs(grossBase, 'Edm.Int32') }); },
            GrossProfitTotalBasePrice: function (grossProfitTotalBasePrice) { return ({ grossProfitTotalBasePrice: v4_1.edmToTs(grossProfitTotalBasePrice, 'Edm.Double') }); },
            CostingCode2: function (costingCode2) { return ({ costingCode2: v4_1.edmToTs(costingCode2, 'Edm.String') }); },
            CostingCode3: function (costingCode3) { return ({ costingCode3: v4_1.edmToTs(costingCode3, 'Edm.String') }); },
            CostingCode4: function (costingCode4) { return ({ costingCode4: v4_1.edmToTs(costingCode4, 'Edm.String') }); },
            CostingCode5: function (costingCode5) { return ({ costingCode5: v4_1.edmToTs(costingCode5, 'Edm.String') }); },
            ItemDetails: function (itemDetails) { return ({ itemDetails: v4_1.edmToTs(itemDetails, 'Edm.String') }); },
            LocationCode: function (locationCode) { return ({ locationCode: v4_1.edmToTs(locationCode, 'Edm.Int32') }); },
            ActualDeliveryDate: function (actualDeliveryDate) { return ({ actualDeliveryDate: v4_1.edmToTs(actualDeliveryDate, 'Edm.DateTimeOffset') }); },
            RemainingOpenQuantity: function (remainingOpenQuantity) { return ({ remainingOpenQuantity: v4_1.edmToTs(remainingOpenQuantity, 'Edm.Double') }); },
            OpenAmount: function (openAmount) { return ({ openAmount: v4_1.edmToTs(openAmount, 'Edm.Double') }); },
            OpenAmountFC: function (openAmountFc) { return ({ openAmountFc: v4_1.edmToTs(openAmountFc, 'Edm.Double') }); },
            OpenAmountSC: function (openAmountSc) { return ({ openAmountSc: v4_1.edmToTs(openAmountSc, 'Edm.Double') }); },
            ExLineNo: function (exLineNo) { return ({ exLineNo: v4_1.edmToTs(exLineNo, 'Edm.String') }); },
            RequiredDate: function (requiredDate) { return ({ requiredDate: v4_1.edmToTs(requiredDate, 'Edm.DateTimeOffset') }); },
            RequiredQuantity: function (requiredQuantity) { return ({ requiredQuantity: v4_1.edmToTs(requiredQuantity, 'Edm.Double') }); },
            COGSCostingCode2: function (cogsCostingCode2) { return ({ cogsCostingCode2: v4_1.edmToTs(cogsCostingCode2, 'Edm.String') }); },
            COGSCostingCode3: function (cogsCostingCode3) { return ({ cogsCostingCode3: v4_1.edmToTs(cogsCostingCode3, 'Edm.String') }); },
            COGSCostingCode4: function (cogsCostingCode4) { return ({ cogsCostingCode4: v4_1.edmToTs(cogsCostingCode4, 'Edm.String') }); },
            COGSCostingCode5: function (cogsCostingCode5) { return ({ cogsCostingCode5: v4_1.edmToTs(cogsCostingCode5, 'Edm.String') }); },
            CSTforIPI: function (csTforIpi) { return ({ csTforIpi: v4_1.edmToTs(csTforIpi, 'Edm.String') }); },
            CSTforPIS: function (csTforPis) { return ({ csTforPis: v4_1.edmToTs(csTforPis, 'Edm.String') }); },
            CSTforCOFINS: function (csTforCofins) { return ({ csTforCofins: v4_1.edmToTs(csTforCofins, 'Edm.String') }); },
            CreditOriginCode: function (creditOriginCode) { return ({ creditOriginCode: v4_1.edmToTs(creditOriginCode, 'Edm.String') }); },
            AgreementNo: function (agreementNo) { return ({ agreementNo: v4_1.edmToTs(agreementNo, 'Edm.Int32') }); },
            AgreementRowNumber: function (agreementRowNumber) { return ({ agreementRowNumber: v4_1.edmToTs(agreementRowNumber, 'Edm.Int32') }); },
            ShipToDescription: function (shipToDescription) { return ({ shipToDescription: v4_1.edmToTs(shipToDescription, 'Edm.String') }); },
            ActualBaseEntry: function (actualBaseEntry) { return ({ actualBaseEntry: v4_1.edmToTs(actualBaseEntry, 'Edm.Int32') }); },
            ActualBaseLine: function (actualBaseLine) { return ({ actualBaseLine: v4_1.edmToTs(actualBaseLine, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); },
            Surpluses: function (surpluses) { return ({ surpluses: v4_1.edmToTs(surpluses, 'Edm.Double') }); },
            DefectAndBreakup: function (defectAndBreakup) { return ({ defectAndBreakup: v4_1.edmToTs(defectAndBreakup, 'Edm.Double') }); },
            Shortages: function (shortages) { return ({ shortages: v4_1.edmToTs(shortages, 'Edm.Double') }); },
            RetirementQuantity: function (retirementQuantity) { return ({ retirementQuantity: v4_1.edmToTs(retirementQuantity, 'Edm.Double') }); },
            RetirementAPC: function (retirementApc) { return ({ retirementApc: v4_1.edmToTs(retirementApc, 'Edm.Double') }); },
            ExpenseType: function (expenseType) { return ({ expenseType: v4_1.edmToTs(expenseType, 'Edm.String') }); },
            ReceiptNumber: function (receiptNumber) { return ({ receiptNumber: v4_1.edmToTs(receiptNumber, 'Edm.String') }); },
            FederalTaxID: function (federalTaxId) { return ({ federalTaxId: v4_1.edmToTs(federalTaxId, 'Edm.String') }); },
            ReturnCost: function (returnCost) { return ({ returnCost: v4_1.edmToTs(returnCost, 'Edm.Double') }); },
            LineVendor: function (lineVendor) { return ({ lineVendor: v4_1.edmToTs(lineVendor, 'Edm.String') }); },
            StgSeqNum: function (stgSeqNum) { return ({ stgSeqNum: v4_1.edmToTs(stgSeqNum, 'Edm.Int32') }); },
            StgEntry: function (stgEntry) { return ({ stgEntry: v4_1.edmToTs(stgEntry, 'Edm.Int32') }); },
            StgDesc: function (stgDesc) { return ({ stgDesc: v4_1.edmToTs(stgDesc, 'Edm.String') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            InventoryQuantity: function (inventoryQuantity) { return ({ inventoryQuantity: v4_1.edmToTs(inventoryQuantity, 'Edm.Double') }); },
            RemainingOpenInventoryQuantity: function (remainingOpenInventoryQuantity) { return ({ remainingOpenInventoryQuantity: v4_1.edmToTs(remainingOpenInventoryQuantity, 'Edm.Double') }); },
            ParentLineNum: function (parentLineNum) { return ({ parentLineNum: v4_1.edmToTs(parentLineNum, 'Edm.Int32') }); },
            Incoterms: function (incoterms) { return ({ incoterms: v4_1.edmToTs(incoterms, 'Edm.Int32') }); },
            TransportMode: function (transportMode) { return ({ transportMode: v4_1.edmToTs(transportMode, 'Edm.Int32') }); },
            SACEntry: function (sacEntry) { return ({ sacEntry: v4_1.edmToTs(sacEntry, 'Edm.Int32') }); },
            HSNEntry: function (hsnEntry) { return ({ hsnEntry: v4_1.edmToTs(hsnEntry, 'Edm.Int32') }); },
            GrossPrice: function (grossPrice) { return ({ grossPrice: v4_1.edmToTs(grossPrice, 'Edm.Double') }); },
            GrossTotal: function (grossTotal) { return ({ grossTotal: v4_1.edmToTs(grossTotal, 'Edm.Double') }); },
            GrossTotalFC: function (grossTotalFc) { return ({ grossTotalFc: v4_1.edmToTs(grossTotalFc, 'Edm.Double') }); },
            GrossTotalSC: function (grossTotalSc) { return ({ grossTotalSc: v4_1.edmToTs(grossTotalSc, 'Edm.Double') }); },
            NCMCode: function (ncmCode) { return ({ ncmCode: v4_1.edmToTs(ncmCode, 'Edm.Int32') }); },
            LineTaxJurisdictions: function (lineTaxJurisdictions) { return ({ lineTaxJurisdictions: LineTaxJurisdiction_1.LineTaxJurisdiction.build(lineTaxJurisdictions) }); },
            GeneratedAssets: function (generatedAssets) { return ({ generatedAssets: GeneratedAsset_1.GeneratedAsset.build(generatedAssets) }); },
            DocumentLineAdditionalExpenses: function (documentLineAdditionalExpenses) { return ({ documentLineAdditionalExpenses: DocumentLineAdditionalExpense_1.DocumentLineAdditionalExpense.build(documentLineAdditionalExpenses) }); },
            WithholdingTaxLines: function (withholdingTaxLines) { return ({ withholdingTaxLines: WithholdingTaxLine_1.WithholdingTaxLine.build(withholdingTaxLines) }); },
            SerialNumbers: function (serialNumbers) { return ({ serialNumbers: SerialNumber_1.SerialNumber.build(serialNumbers) }); },
            BatchNumbers: function (batchNumbers) { return ({ batchNumbers: BatchNumber_1.BatchNumber.build(batchNumbers) }); },
            DocumentLinesBinAllocations: function (documentLinesBinAllocations) { return ({ documentLinesBinAllocations: DocumentLinesBinAllocation_1.DocumentLinesBinAllocation.build(documentLinesBinAllocations) }); },
            ExportProcesses: function (exportProcesses) { return ({ exportProcesses: ExportProcess_1.ExportProcess.build(exportProcesses) }); },
            ReturnAction: function (returnAction) { return ({ returnAction: v4_1.edmToTs(returnAction, 'Edm.Int32') }); },
            ReturnReason: function (returnReason) { return ({ returnReason: v4_1.edmToTs(returnReason, 'Edm.Int32') }); },
            ImportProcesses: function (importProcesses) { return ({ importProcesses: ImportProcess_1.ImportProcess.build(importProcesses) }); }
        });
    }
    DocumentLine.build = build;
})(DocumentLine = exports.DocumentLine || (exports.DocumentLine = {}));
//# sourceMappingURL=DocumentLine.js.map