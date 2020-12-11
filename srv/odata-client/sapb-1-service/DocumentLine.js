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
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of DocumentLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentLine) || this;
        /**
         * Representation of the [[DocumentLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.itemCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemCode = new core_1.ComplexTypeStringPropertyField('ItemCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.shipDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipDate = new core_1.ComplexTypeDatePropertyField('ShipDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentLine.price]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.price = new core_1.ComplexTypeNumberPropertyField('Price', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.priceAfterVat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceAfterVat = new core_1.ComplexTypeNumberPropertyField('PriceAfterVAT', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.rate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rate = new core_1.ComplexTypeNumberPropertyField('Rate', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.discountPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountPercent = new core_1.ComplexTypeNumberPropertyField('DiscountPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.vendorNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vendorNum = new core_1.ComplexTypeStringPropertyField('VendorNum', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.serialNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNum = new core_1.ComplexTypeStringPropertyField('SerialNum', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.warehouseCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouseCode = new core_1.ComplexTypeStringPropertyField('WarehouseCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.salesPersonCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.salesPersonCode = new core_1.ComplexTypeNumberPropertyField('SalesPersonCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.commisionPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.commisionPercent = new core_1.ComplexTypeNumberPropertyField('CommisionPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.treeType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.treeType = new core_1.ComplexTypeEnumPropertyField('TreeType', _this);
        /**
         * Representation of the [[DocumentLine.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.useBaseUnits]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.useBaseUnits = new core_1.ComplexTypeEnumPropertyField('UseBaseUnits', _this);
        /**
         * Representation of the [[DocumentLine.supplierCatNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supplierCatNum = new core_1.ComplexTypeStringPropertyField('SupplierCatNum', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode = new core_1.ComplexTypeStringPropertyField('CostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.barCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.barCode = new core_1.ComplexTypeStringPropertyField('BarCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new core_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.height1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height1 = new core_1.ComplexTypeNumberPropertyField('Height1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.hight1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hight1Unit = new core_1.ComplexTypeNumberPropertyField('Hight1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.height2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2 = new core_1.ComplexTypeNumberPropertyField('Height2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.height2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.height2Unit = new core_1.ComplexTypeNumberPropertyField('Height2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.lengh1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh1 = new core_1.ComplexTypeNumberPropertyField('Lengh1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lengh1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh1Unit = new core_1.ComplexTypeNumberPropertyField('Lengh1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.lengh2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh2 = new core_1.ComplexTypeNumberPropertyField('Lengh2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lengh2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lengh2Unit = new core_1.ComplexTypeNumberPropertyField('Lengh2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.weight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1 = new core_1.ComplexTypeNumberPropertyField('Weight1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.weight1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight1Unit = new core_1.ComplexTypeNumberPropertyField('Weight1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.weight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2 = new core_1.ComplexTypeNumberPropertyField('Weight2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.weight2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.weight2Unit = new core_1.ComplexTypeNumberPropertyField('Weight2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.factor1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor1 = new core_1.ComplexTypeNumberPropertyField('Factor1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.factor2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor2 = new core_1.ComplexTypeNumberPropertyField('Factor2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.factor3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor3 = new core_1.ComplexTypeNumberPropertyField('Factor3', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.factor4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.factor4 = new core_1.ComplexTypeNumberPropertyField('Factor4', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.baseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseType = new core_1.ComplexTypeNumberPropertyField('BaseType', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.baseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseEntry = new core_1.ComplexTypeNumberPropertyField('BaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.baseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLine = new core_1.ComplexTypeNumberPropertyField('BaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.volume]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volume = new core_1.ComplexTypeNumberPropertyField('Volume', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.volumeUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.volumeUnit = new core_1.ComplexTypeNumberPropertyField('VolumeUnit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.width1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1 = new core_1.ComplexTypeNumberPropertyField('Width1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.width1Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width1Unit = new core_1.ComplexTypeNumberPropertyField('Width1Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.width2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2 = new core_1.ComplexTypeNumberPropertyField('Width2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.width2Unit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.width2Unit = new core_1.ComplexTypeNumberPropertyField('Width2Unit', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.address]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.address = new core_1.ComplexTypeStringPropertyField('Address', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.taxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxType = new core_1.ComplexTypeEnumPropertyField('TaxType', _this);
        /**
         * Representation of the [[DocumentLine.taxLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxLiable = new core_1.ComplexTypeEnumPropertyField('TaxLiable', _this);
        /**
         * Representation of the [[DocumentLine.pickStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickStatus = new core_1.ComplexTypeEnumPropertyField('PickStatus', _this);
        /**
         * Representation of the [[DocumentLine.pickQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickQuantity = new core_1.ComplexTypeNumberPropertyField('PickQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.pickListIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickListIdNumber = new core_1.ComplexTypeNumberPropertyField('PickListIdNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.originalItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originalItem = new core_1.ComplexTypeStringPropertyField('OriginalItem', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.backOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.backOrder = new core_1.ComplexTypeEnumPropertyField('BackOrder', _this);
        /**
         * Representation of the [[DocumentLine.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new core_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.shippingMethod]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shippingMethod = new core_1.ComplexTypeNumberPropertyField('ShippingMethod', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.poTargetNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poTargetNum = new core_1.ComplexTypeNumberPropertyField('POTargetNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.poTargetEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poTargetEntry = new core_1.ComplexTypeStringPropertyField('POTargetEntry', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.poTargetRowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.poTargetRowNum = new core_1.ComplexTypeNumberPropertyField('POTargetRowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.correctionInvoiceItem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.correctionInvoiceItem = new core_1.ComplexTypeEnumPropertyField('CorrectionInvoiceItem', _this);
        /**
         * Representation of the [[DocumentLine.corrInvAmountToStock]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.corrInvAmountToStock = new core_1.ComplexTypeNumberPropertyField('CorrInvAmountToStock', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.corrInvAmountToDiffAcct]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.corrInvAmountToDiffAcct = new core_1.ComplexTypeNumberPropertyField('CorrInvAmountToDiffAcct', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.appliedTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedTax = new core_1.ComplexTypeNumberPropertyField('AppliedTax', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.appliedTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedTaxFc = new core_1.ComplexTypeNumberPropertyField('AppliedTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.appliedTaxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.appliedTaxSc = new core_1.ComplexTypeNumberPropertyField('AppliedTaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.wtLiable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.wtLiable = new core_1.ComplexTypeEnumPropertyField('WTLiable', _this);
        /**
         * Representation of the [[DocumentLine.deferredTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.deferredTax = new core_1.ComplexTypeEnumPropertyField('DeferredTax', _this);
        /**
         * Representation of the [[DocumentLine.equalizationTaxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationTaxPercent = new core_1.ComplexTypeNumberPropertyField('EqualizationTaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalEqualizationTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalEqualizationTax = new core_1.ComplexTypeNumberPropertyField('TotalEqualizationTax', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalEqualizationTaxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalEqualizationTaxFc = new core_1.ComplexTypeNumberPropertyField('TotalEqualizationTaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalEqualizationTaxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalEqualizationTaxSc = new core_1.ComplexTypeNumberPropertyField('TotalEqualizationTaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.netTaxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netTaxAmount = new core_1.ComplexTypeNumberPropertyField('NetTaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.netTaxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netTaxAmountFc = new core_1.ComplexTypeNumberPropertyField('NetTaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.netTaxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.netTaxAmountSc = new core_1.ComplexTypeNumberPropertyField('NetTaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.measureUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.measureUnit = new core_1.ComplexTypeStringPropertyField('MeasureUnit', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.unitsOfMeasurment]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurment = new core_1.ComplexTypeNumberPropertyField('UnitsOfMeasurment', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new core_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxPercentagePerRow]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercentagePerRow = new core_1.ComplexTypeNumberPropertyField('TaxPercentagePerRow', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxTotal = new core_1.ComplexTypeNumberPropertyField('TaxTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.consumerSalesForecast]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.consumerSalesForecast = new core_1.ComplexTypeEnumPropertyField('ConsumerSalesForecast', _this);
        /**
         * Representation of the [[DocumentLine.exciseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exciseAmount = new core_1.ComplexTypeNumberPropertyField('ExciseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxPerUnit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPerUnit = new core_1.ComplexTypeNumberPropertyField('TaxPerUnit', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.totalInclTax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.totalInclTax = new core_1.ComplexTypeNumberPropertyField('TotalInclTax', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.countryOrg]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryOrg = new core_1.ComplexTypeStringPropertyField('CountryOrg', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.sww]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sww = new core_1.ComplexTypeStringPropertyField('SWW', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.transactionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionType = new core_1.ComplexTypeEnumPropertyField('TransactionType', _this);
        /**
         * Representation of the [[DocumentLine.distributeExpense]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distributeExpense = new core_1.ComplexTypeEnumPropertyField('DistributeExpense', _this);
        /**
         * Representation of the [[DocumentLine.shipToCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToCode = new core_1.ComplexTypeStringPropertyField('ShipToCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.rowTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowTotalFc = new core_1.ComplexTypeNumberPropertyField('RowTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.rowTotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowTotalSc = new core_1.ComplexTypeNumberPropertyField('RowTotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyInmPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyInmPrice = new core_1.ComplexTypeNumberPropertyField('LastBuyInmPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyDistributeSumFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyDistributeSumFc = new core_1.ComplexTypeNumberPropertyField('LastBuyDistributeSumFc', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyDistributeSumSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyDistributeSumSc = new core_1.ComplexTypeNumberPropertyField('LastBuyDistributeSumSc', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lastBuyDistributeSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lastBuyDistributeSum = new core_1.ComplexTypeNumberPropertyField('LastBuyDistributeSum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockDistributesumForeign]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockDistributesumForeign = new core_1.ComplexTypeNumberPropertyField('StockDistributesumForeign', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockDistributesumSystem]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockDistributesumSystem = new core_1.ComplexTypeNumberPropertyField('StockDistributesumSystem', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockDistributesum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockDistributesum = new core_1.ComplexTypeNumberPropertyField('StockDistributesum', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.stockInmPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stockInmPrice = new core_1.ComplexTypeNumberPropertyField('StockInmPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.pickStatusEx]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.pickStatusEx = new core_1.ComplexTypeEnumPropertyField('PickStatusEx', _this);
        /**
         * Representation of the [[DocumentLine.taxBeforeDpm]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxBeforeDpm = new core_1.ComplexTypeNumberPropertyField('TaxBeforeDPM', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxBeforeDpmfc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxBeforeDpmfc = new core_1.ComplexTypeNumberPropertyField('TaxBeforeDPMFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.taxBeforeDpmsc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxBeforeDpmsc = new core_1.ComplexTypeNumberPropertyField('TaxBeforeDPMSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.cfopCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cfopCode = new core_1.ComplexTypeStringPropertyField('CFOPCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cstCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cstCode = new core_1.ComplexTypeStringPropertyField('CSTCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.usage]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.usage = new core_1.ComplexTypeNumberPropertyField('Usage', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.taxOnly]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxOnly = new core_1.ComplexTypeEnumPropertyField('TaxOnly', _this);
        /**
         * Representation of the [[DocumentLine.visualOrder]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.visualOrder = new core_1.ComplexTypeNumberPropertyField('VisualOrder', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.baseOpenQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseOpenQuantity = new core_1.ComplexTypeNumberPropertyField('BaseOpenQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new core_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lineStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineStatus = new core_1.ComplexTypeEnumPropertyField('LineStatus', _this);
        /**
         * Representation of the [[DocumentLine.packageQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.packageQuantity = new core_1.ComplexTypeNumberPropertyField('PackageQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.text]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.text = new core_1.ComplexTypeStringPropertyField('Text', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.lineType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineType = new core_1.ComplexTypeEnumPropertyField('LineType', _this);
        /**
         * Representation of the [[DocumentLine.cogsCostingCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode = new core_1.ComplexTypeStringPropertyField('COGSCostingCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsAccountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsAccountCode = new core_1.ComplexTypeStringPropertyField('COGSAccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.changeAssemlyBoMWarehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeAssemlyBoMWarehouse = new core_1.ComplexTypeStringPropertyField('ChangeAssemlyBoMWarehouse', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.grossBuyPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossBuyPrice = new core_1.ComplexTypeNumberPropertyField('GrossBuyPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossBase]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossBase = new core_1.ComplexTypeNumberPropertyField('GrossBase', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.grossProfitTotalBasePrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossProfitTotalBasePrice = new core_1.ComplexTypeNumberPropertyField('GrossProfitTotalBasePrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.costingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode2 = new core_1.ComplexTypeStringPropertyField('CostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode3 = new core_1.ComplexTypeStringPropertyField('CostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode4 = new core_1.ComplexTypeStringPropertyField('CostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.costingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.costingCode5 = new core_1.ComplexTypeStringPropertyField('CostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.itemDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDetails = new core_1.ComplexTypeStringPropertyField('ItemDetails', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new core_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.actualDeliveryDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualDeliveryDate = new core_1.ComplexTypeDatePropertyField('ActualDeliveryDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentLine.remainingOpenQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenQuantity = new core_1.ComplexTypeNumberPropertyField('RemainingOpenQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.openAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmount = new core_1.ComplexTypeNumberPropertyField('OpenAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.openAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountFc = new core_1.ComplexTypeNumberPropertyField('OpenAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.openAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.openAmountSc = new core_1.ComplexTypeNumberPropertyField('OpenAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.exLineNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exLineNo = new core_1.ComplexTypeStringPropertyField('ExLineNo', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.requiredDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredDate = new core_1.ComplexTypeDatePropertyField('RequiredDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DocumentLine.requiredQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.requiredQuantity = new core_1.ComplexTypeNumberPropertyField('RequiredQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode2 = new core_1.ComplexTypeStringPropertyField('COGSCostingCode2', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode3 = new core_1.ComplexTypeStringPropertyField('COGSCostingCode3', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode4 = new core_1.ComplexTypeStringPropertyField('COGSCostingCode4', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.cogsCostingCode5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cogsCostingCode5 = new core_1.ComplexTypeStringPropertyField('COGSCostingCode5', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.csTforIpi]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.csTforIpi = new core_1.ComplexTypeStringPropertyField('CSTforIPI', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.csTforPis]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.csTforPis = new core_1.ComplexTypeStringPropertyField('CSTforPIS', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.csTforCofins]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.csTforCofins = new core_1.ComplexTypeStringPropertyField('CSTforCOFINS', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.creditOriginCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditOriginCode = new core_1.ComplexTypeStringPropertyField('CreditOriginCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.withoutInventoryMovement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withoutInventoryMovement = new core_1.ComplexTypeEnumPropertyField('WithoutInventoryMovement', _this);
        /**
         * Representation of the [[DocumentLine.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new core_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new core_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.shipToDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shipToDescription = new core_1.ComplexTypeStringPropertyField('ShipToDescription', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.actualBaseEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualBaseEntry = new core_1.ComplexTypeNumberPropertyField('ActualBaseEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.actualBaseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.actualBaseLine = new core_1.ComplexTypeNumberPropertyField('ActualBaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.surpluses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.surpluses = new core_1.ComplexTypeNumberPropertyField('Surpluses', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.defectAndBreakup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.defectAndBreakup = new core_1.ComplexTypeNumberPropertyField('DefectAndBreakup', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.shortages]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shortages = new core_1.ComplexTypeNumberPropertyField('Shortages', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.considerQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.considerQuantity = new core_1.ComplexTypeEnumPropertyField('ConsiderQuantity', _this);
        /**
         * Representation of the [[DocumentLine.partialRetirement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.partialRetirement = new core_1.ComplexTypeEnumPropertyField('PartialRetirement', _this);
        /**
         * Representation of the [[DocumentLine.retirementQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.retirementQuantity = new core_1.ComplexTypeNumberPropertyField('RetirementQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.retirementApc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.retirementApc = new core_1.ComplexTypeNumberPropertyField('RetirementAPC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.thirdParty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.thirdParty = new core_1.ComplexTypeEnumPropertyField('ThirdParty', _this);
        /**
         * Representation of the [[DocumentLine.expenseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseType = new core_1.ComplexTypeStringPropertyField('ExpenseType', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.receiptNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.receiptNumber = new core_1.ComplexTypeStringPropertyField('ReceiptNumber', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.expenseOperationType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseOperationType = new core_1.ComplexTypeEnumPropertyField('ExpenseOperationType', _this);
        /**
         * Representation of the [[DocumentLine.federalTaxId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.federalTaxId = new core_1.ComplexTypeStringPropertyField('FederalTaxID', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.enableReturnCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.enableReturnCost = new core_1.ComplexTypeEnumPropertyField('EnableReturnCost', _this);
        /**
         * Representation of the [[DocumentLine.returnCost]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returnCost = new core_1.ComplexTypeNumberPropertyField('ReturnCost', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.lineVendor]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineVendor = new core_1.ComplexTypeStringPropertyField('LineVendor', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.stgSeqNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stgSeqNum = new core_1.ComplexTypeNumberPropertyField('StgSeqNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.stgEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stgEntry = new core_1.ComplexTypeNumberPropertyField('StgEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.stgDesc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stgDesc = new core_1.ComplexTypeStringPropertyField('StgDesc', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new core_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentLine.inventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryQuantity = new core_1.ComplexTypeNumberPropertyField('InventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.remainingOpenInventoryQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.remainingOpenInventoryQuantity = new core_1.ComplexTypeNumberPropertyField('RemainingOpenInventoryQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.parentLineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.parentLineNum = new core_1.ComplexTypeNumberPropertyField('ParentLineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.incoterms]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.incoterms = new core_1.ComplexTypeNumberPropertyField('Incoterms', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.transportMode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transportMode = new core_1.ComplexTypeNumberPropertyField('TransportMode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.itemType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemType = new core_1.ComplexTypeEnumPropertyField('ItemType', _this);
        /**
         * Representation of the [[DocumentLine.changeInventoryQuantityIndependently]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.changeInventoryQuantityIndependently = new core_1.ComplexTypeEnumPropertyField('ChangeInventoryQuantityIndependently', _this);
        /**
         * Representation of the [[DocumentLine.freeOfChargeBp]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeOfChargeBp = new core_1.ComplexTypeEnumPropertyField('FreeOfChargeBP', _this);
        /**
         * Representation of the [[DocumentLine.sacEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sacEntry = new core_1.ComplexTypeNumberPropertyField('SACEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.hsnEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.hsnEntry = new core_1.ComplexTypeNumberPropertyField('HSNEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.grossPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossPrice = new core_1.ComplexTypeNumberPropertyField('GrossPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotal = new core_1.ComplexTypeNumberPropertyField('GrossTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalFc = new core_1.ComplexTypeNumberPropertyField('GrossTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.grossTotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalSc = new core_1.ComplexTypeNumberPropertyField('GrossTotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLine.ncmCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ncmCode = new core_1.ComplexTypeNumberPropertyField('NCMCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.lineTaxJurisdictions]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTaxJurisdictions = new core_1.CollectionField('LineTaxJurisdictions', _this, LineTaxJurisdiction_1.LineTaxJurisdiction);
        /**
         * Representation of the [[DocumentLine.generatedAssets]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.generatedAssets = new core_1.CollectionField('GeneratedAssets', _this, GeneratedAsset_1.GeneratedAsset);
        /**
         * Representation of the [[DocumentLine.documentLineAdditionalExpenses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLineAdditionalExpenses = new core_1.CollectionField('DocumentLineAdditionalExpenses', _this, DocumentLineAdditionalExpense_1.DocumentLineAdditionalExpense);
        /**
         * Representation of the [[DocumentLine.withholdingTaxLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.withholdingTaxLines = new core_1.CollectionField('WithholdingTaxLines', _this, WithholdingTaxLine_1.WithholdingTaxLine);
        /**
         * Representation of the [[DocumentLine.serialNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialNumbers = new core_1.CollectionField('SerialNumbers', _this, SerialNumber_1.SerialNumber);
        /**
         * Representation of the [[DocumentLine.batchNumbers]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.batchNumbers = new core_1.CollectionField('BatchNumbers', _this, BatchNumber_1.BatchNumber);
        /**
         * Representation of the [[DocumentLine.documentLinesBinAllocations]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentLinesBinAllocations = new core_1.CollectionField('DocumentLinesBinAllocations', _this, DocumentLinesBinAllocation_1.DocumentLinesBinAllocation);
        /**
         * Representation of the [[DocumentLine.exportProcesses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.exportProcesses = new core_1.CollectionField('ExportProcesses', _this, ExportProcess_1.ExportProcess);
        /**
         * Representation of the [[DocumentLine.returnAction]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returnAction = new core_1.ComplexTypeNumberPropertyField('ReturnAction', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.returnReason]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.returnReason = new core_1.ComplexTypeNumberPropertyField('ReturnReason', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLine.importProcesses]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.importProcesses = new core_1.CollectionField('ImportProcesses', _this, ImportProcess_1.ImportProcess);
        return _this;
    }
    return DocumentLineField;
}(core_1.ComplexTypeField));
exports.DocumentLineField = DocumentLineField;
var DocumentLine;
(function (DocumentLine) {
    /**
     * Metadata information on all properties of the `DocumentLine` complex type.
     */
    DocumentLine._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemCode',
            name: 'itemCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDescription',
            name: 'itemDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ShipDate',
            name: 'shipDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Price',
            name: 'price',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PriceAfterVAT',
            name: 'priceAfterVat',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Rate',
            name: 'rate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DiscountPercent',
            name: 'discountPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VendorNum',
            name: 'vendorNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SerialNum',
            name: 'serialNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WarehouseCode',
            name: 'warehouseCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SalesPersonCode',
            name: 'salesPersonCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CommisionPercent',
            name: 'commisionPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TreeType',
            name: 'treeType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UseBaseUnits',
            name: 'useBaseUnits',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SupplierCatNum',
            name: 'supplierCatNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CostingCode',
            name: 'costingCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProjectCode',
            name: 'projectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BarCode',
            name: 'barCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VatGroup',
            name: 'vatGroup',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Height1',
            name: 'height1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Hight1Unit',
            name: 'hight1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Height2',
            name: 'height2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Height2Unit',
            name: 'height2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Lengh1',
            name: 'lengh1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Lengh1Unit',
            name: 'lengh1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Lengh2',
            name: 'lengh2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Lengh2Unit',
            name: 'lengh2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Weight1',
            name: 'weight1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Weight1Unit',
            name: 'weight1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Weight2',
            name: 'weight2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Weight2Unit',
            name: 'weight2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Factor1',
            name: 'factor1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor2',
            name: 'factor2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor3',
            name: 'factor3',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Factor4',
            name: 'factor4',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BaseType',
            name: 'baseType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseEntry',
            name: 'baseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseLine',
            name: 'baseLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Volume',
            name: 'volume',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'VolumeUnit',
            name: 'volumeUnit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Width1',
            name: 'width1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Width1Unit',
            name: 'width1Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Width2',
            name: 'width2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Width2Unit',
            name: 'width2Unit',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Address',
            name: 'address',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxType',
            name: 'taxType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxLiable',
            name: 'taxLiable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PickStatus',
            name: 'pickStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PickQuantity',
            name: 'pickQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PickListIdNumber',
            name: 'pickListIdNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'OriginalItem',
            name: 'originalItem',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BackOrder',
            name: 'backOrder',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FreeText',
            name: 'freeText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ShippingMethod',
            name: 'shippingMethod',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'POTargetNum',
            name: 'poTargetNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'POTargetEntry',
            name: 'poTargetEntry',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'POTargetRowNum',
            name: 'poTargetRowNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CorrectionInvoiceItem',
            name: 'correctionInvoiceItem',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CorrInvAmountToStock',
            name: 'corrInvAmountToStock',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CorrInvAmountToDiffAcct',
            name: 'corrInvAmountToDiffAcct',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedTax',
            name: 'appliedTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedTaxFC',
            name: 'appliedTaxFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AppliedTaxSC',
            name: 'appliedTaxSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'WTLiable',
            name: 'wtLiable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DeferredTax',
            name: 'deferredTax',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EqualizationTaxPercent',
            name: 'equalizationTaxPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalEqualizationTax',
            name: 'totalEqualizationTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalEqualizationTaxFC',
            name: 'totalEqualizationTaxFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalEqualizationTaxSC',
            name: 'totalEqualizationTaxSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NetTaxAmount',
            name: 'netTaxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NetTaxAmountFC',
            name: 'netTaxAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NetTaxAmountSC',
            name: 'netTaxAmountSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'MeasureUnit',
            name: 'measureUnit',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnitsOfMeasurment',
            name: 'unitsOfMeasurment',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineTotal',
            name: 'lineTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxPercentagePerRow',
            name: 'taxPercentagePerRow',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxTotal',
            name: 'taxTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ConsumerSalesForecast',
            name: 'consumerSalesForecast',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ExciseAmount',
            name: 'exciseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxPerUnit',
            name: 'taxPerUnit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TotalInclTax',
            name: 'totalInclTax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CountryOrg',
            name: 'countryOrg',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SWW',
            name: 'sww',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TransactionType',
            name: 'transactionType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DistributeExpense',
            name: 'distributeExpense',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ShipToCode',
            name: 'shipToCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowTotalFC',
            name: 'rowTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RowTotalSC',
            name: 'rowTotalSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LastBuyInmPrice',
            name: 'lastBuyInmPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LastBuyDistributeSumFc',
            name: 'lastBuyDistributeSumFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LastBuyDistributeSumSc',
            name: 'lastBuyDistributeSumSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LastBuyDistributeSum',
            name: 'lastBuyDistributeSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StockDistributesumForeign',
            name: 'stockDistributesumForeign',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StockDistributesumSystem',
            name: 'stockDistributesumSystem',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StockDistributesum',
            name: 'stockDistributesum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'StockInmPrice',
            name: 'stockInmPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'PickStatusEx',
            name: 'pickStatusEx',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxBeforeDPM',
            name: 'taxBeforeDpm',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxBeforeDPMFC',
            name: 'taxBeforeDpmfc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxBeforeDPMSC',
            name: 'taxBeforeDpmsc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CFOPCode',
            name: 'cfopCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CSTCode',
            name: 'cstCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Usage',
            name: 'usage',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaxOnly',
            name: 'taxOnly',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'VisualOrder',
            name: 'visualOrder',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BaseOpenQuantity',
            name: 'baseOpenQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UnitPrice',
            name: 'unitPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineStatus',
            name: 'lineStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PackageQuantity',
            name: 'packageQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Text',
            name: 'text',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineType',
            name: 'lineType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'COGSCostingCode',
            name: 'cogsCostingCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'COGSAccountCode',
            name: 'cogsAccountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ChangeAssemlyBoMWarehouse',
            name: 'changeAssemlyBoMWarehouse',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GrossBuyPrice',
            name: 'grossBuyPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossBase',
            name: 'grossBase',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GrossProfitTotalBasePrice',
            name: 'grossProfitTotalBasePrice',
            type: 'Edm.Double',
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
            originalName: 'CostingCode5',
            name: 'costingCode5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDetails',
            name: 'itemDetails',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocationCode',
            name: 'locationCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ActualDeliveryDate',
            name: 'actualDeliveryDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'RemainingOpenQuantity',
            name: 'remainingOpenQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenAmount',
            name: 'openAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenAmountFC',
            name: 'openAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'OpenAmountSC',
            name: 'openAmountSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ExLineNo',
            name: 'exLineNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RequiredDate',
            name: 'requiredDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'RequiredQuantity',
            name: 'requiredQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'COGSCostingCode2',
            name: 'cogsCostingCode2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'COGSCostingCode3',
            name: 'cogsCostingCode3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'COGSCostingCode4',
            name: 'cogsCostingCode4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'COGSCostingCode5',
            name: 'cogsCostingCode5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CSTforIPI',
            name: 'csTforIpi',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CSTforPIS',
            name: 'csTforPis',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CSTforCOFINS',
            name: 'csTforCofins',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CreditOriginCode',
            name: 'creditOriginCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'WithoutInventoryMovement',
            name: 'withoutInventoryMovement',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'AgreementNo',
            name: 'agreementNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AgreementRowNumber',
            name: 'agreementRowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ShipToDescription',
            name: 'shipToDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ActualBaseEntry',
            name: 'actualBaseEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ActualBaseLine',
            name: 'actualBaseLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Surpluses',
            name: 'surpluses',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DefectAndBreakup',
            name: 'defectAndBreakup',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Shortages',
            name: 'shortages',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ConsiderQuantity',
            name: 'considerQuantity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'PartialRetirement',
            name: 'partialRetirement',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'RetirementQuantity',
            name: 'retirementQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RetirementAPC',
            name: 'retirementApc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ThirdParty',
            name: 'thirdParty',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ExpenseType',
            name: 'expenseType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ReceiptNumber',
            name: 'receiptNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ExpenseOperationType',
            name: 'expenseOperationType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FederalTaxID',
            name: 'federalTaxId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'EnableReturnCost',
            name: 'enableReturnCost',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ReturnCost',
            name: 'returnCost',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineVendor',
            name: 'lineVendor',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'StgSeqNum',
            name: 'stgSeqNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StgEntry',
            name: 'stgEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'StgDesc',
            name: 'stgDesc',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UoMEntry',
            name: 'uoMEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InventoryQuantity',
            name: 'inventoryQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RemainingOpenInventoryQuantity',
            name: 'remainingOpenInventoryQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ParentLineNum',
            name: 'parentLineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Incoterms',
            name: 'incoterms',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TransportMode',
            name: 'transportMode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ItemType',
            name: 'itemType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'ChangeInventoryQuantityIndependently',
            name: 'changeInventoryQuantityIndependently',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FreeOfChargeBP',
            name: 'freeOfChargeBp',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SACEntry',
            name: 'sacEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'HSNEntry',
            name: 'hsnEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'GrossPrice',
            name: 'grossPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossTotal',
            name: 'grossTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossTotalFC',
            name: 'grossTotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossTotalSC',
            name: 'grossTotalSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'NCMCode',
            name: 'ncmCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineTaxJurisdictions',
            name: 'lineTaxJurisdictions',
            type: LineTaxJurisdiction_1.LineTaxJurisdiction,
            isCollection: true
        }, {
            originalName: 'GeneratedAssets',
            name: 'generatedAssets',
            type: GeneratedAsset_1.GeneratedAsset,
            isCollection: true
        }, {
            originalName: 'DocumentLineAdditionalExpenses',
            name: 'documentLineAdditionalExpenses',
            type: DocumentLineAdditionalExpense_1.DocumentLineAdditionalExpense,
            isCollection: true
        }, {
            originalName: 'WithholdingTaxLines',
            name: 'withholdingTaxLines',
            type: WithholdingTaxLine_1.WithholdingTaxLine,
            isCollection: true
        }, {
            originalName: 'SerialNumbers',
            name: 'serialNumbers',
            type: SerialNumber_1.SerialNumber,
            isCollection: true
        }, {
            originalName: 'BatchNumbers',
            name: 'batchNumbers',
            type: BatchNumber_1.BatchNumber,
            isCollection: true
        }, {
            originalName: 'DocumentLinesBinAllocations',
            name: 'documentLinesBinAllocations',
            type: DocumentLinesBinAllocation_1.DocumentLinesBinAllocation,
            isCollection: true
        }, {
            originalName: 'ExportProcesses',
            name: 'exportProcesses',
            type: ExportProcess_1.ExportProcess,
            isCollection: true
        }, {
            originalName: 'ReturnAction',
            name: 'returnAction',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ReturnReason',
            name: 'returnReason',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'ImportProcesses',
            name: 'importProcesses',
            type: ImportProcess_1.ImportProcess,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentLine);
    }
    DocumentLine.build = build;
})(DocumentLine = exports.DocumentLine || (exports.DocumentLine = {}));
//# sourceMappingURL=DocumentLine.js.map