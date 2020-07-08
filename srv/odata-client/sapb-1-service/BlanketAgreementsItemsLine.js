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
exports.BlanketAgreementsItemsLine = exports.BlanketAgreementsItemsLineField = exports.createBlanketAgreementsItemsLine = void 0;
var BlanketAgreementsDetailsLine_1 = require("./BlanketAgreementsDetailsLine");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsItemsLine.build]] instead.
 */
function createBlanketAgreementsItemsLine(json) {
    return BlanketAgreementsItemsLine.build(json);
}
exports.createBlanketAgreementsItemsLine = createBlanketAgreementsItemsLine;
/**
 * BlanketAgreementsItemsLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementsItemsLineField = /** @class */ (function (_super) {
    __extends(BlanketAgreementsItemsLineField, _super);
    function BlanketAgreementsItemsLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BlanketAgreementsItemsLine.agreementNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementNo = new v4_1.ComplexTypeNumberPropertyField('AgreementNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new v4_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.itemGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemGroup = new v4_1.ComplexTypeNumberPropertyField('ItemGroup', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedQuantity = new v4_1.ComplexTypeNumberPropertyField('PlannedQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new v4_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new v4_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeQuantity = new v4_1.ComplexTypeNumberPropertyField('CumulativeQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeAmountLc = new v4_1.ComplexTypeNumberPropertyField('CumulativeAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeAmountFc = new v4_1.ComplexTypeNumberPropertyField('CumulativeAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.freeText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freeText = new v4_1.ComplexTypeStringPropertyField('FreeText', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.inventoryUoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.inventoryUoM = new v4_1.ComplexTypeStringPropertyField('InventoryUoM', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.portionOfReturns]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.portionOfReturns = new v4_1.ComplexTypeNumberPropertyField('PortionOfReturns', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.endOfWarranty]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endOfWarranty = new v4_1.ComplexTypeDatePropertyField('EndOfWarranty', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountLc = new v4_1.ComplexTypeNumberPropertyField('PlannedAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedAmountFc = new v4_1.ComplexTypeNumberPropertyField('PlannedAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.lineDiscount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineDiscount = new v4_1.ComplexTypeNumberPropertyField('LineDiscount', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.unitsOfMeasurement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurement = new v4_1.ComplexTypeNumberPropertyField('UnitsOfMeasurement', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.undeliveredCumulativeQuantity = new v4_1.ComplexTypeNumberPropertyField('UndeliveredCumulativeQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.undeliveredCumulativeAmountLc = new v4_1.ComplexTypeNumberPropertyField('UndeliveredCumulativeAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.undeliveredCumulativeAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.undeliveredCumulativeAmountFc = new v4_1.ComplexTypeNumberPropertyField('UndeliveredCumulativeAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.shippingType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.shippingType = new v4_1.ComplexTypeNumberPropertyField('ShippingType', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.project]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.project = new v4_1.ComplexTypeStringPropertyField('Project', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new v4_1.ComplexTypeNumberPropertyField('TAXRate', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedVatAmountLc = new v4_1.ComplexTypeNumberPropertyField('PlannedVATAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.plannedVatAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedVatAmountFc = new v4_1.ComplexTypeNumberPropertyField('PlannedVATAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeVatAmountLc = new v4_1.ComplexTypeNumberPropertyField('CumulativeVATAmountLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.cumulativeVatAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.cumulativeVatAmountFc = new v4_1.ComplexTypeNumberPropertyField('CumulativeVATAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsItemsLine.blanketAgreementsDetailsLines]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.blanketAgreementsDetailsLines = new BlanketAgreementsDetailsLine_1.BlanketAgreementsDetailsLineField('BlanketAgreements_DetailsLines', _this);
        return _this;
    }
    return BlanketAgreementsItemsLineField;
}(v4_1.ComplexTypeField));
exports.BlanketAgreementsItemsLineField = BlanketAgreementsItemsLineField;
var BlanketAgreementsItemsLine;
(function (BlanketAgreementsItemsLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AgreementNo: function (agreementNo) { return ({ agreementNo: v4_1.edmToTs(agreementNo, 'Edm.Int32') }); },
            AgreementRowNumber: function (agreementRowNumber) { return ({ agreementRowNumber: v4_1.edmToTs(agreementRowNumber, 'Edm.Int32') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            ItemGroup: function (itemGroup) { return ({ itemGroup: v4_1.edmToTs(itemGroup, 'Edm.Int32') }); },
            PlannedQuantity: function (plannedQuantity) { return ({ plannedQuantity: v4_1.edmToTs(plannedQuantity, 'Edm.Double') }); },
            UnitPrice: function (unitPrice) { return ({ unitPrice: v4_1.edmToTs(unitPrice, 'Edm.Double') }); },
            PriceCurrency: function (priceCurrency) { return ({ priceCurrency: v4_1.edmToTs(priceCurrency, 'Edm.String') }); },
            CumulativeQuantity: function (cumulativeQuantity) { return ({ cumulativeQuantity: v4_1.edmToTs(cumulativeQuantity, 'Edm.Double') }); },
            CumulativeAmountLC: function (cumulativeAmountLc) { return ({ cumulativeAmountLc: v4_1.edmToTs(cumulativeAmountLc, 'Edm.Double') }); },
            CumulativeAmountFC: function (cumulativeAmountFc) { return ({ cumulativeAmountFc: v4_1.edmToTs(cumulativeAmountFc, 'Edm.Double') }); },
            FreeText: function (freeText) { return ({ freeText: v4_1.edmToTs(freeText, 'Edm.String') }); },
            InventoryUoM: function (inventoryUoM) { return ({ inventoryUoM: v4_1.edmToTs(inventoryUoM, 'Edm.String') }); },
            PortionOfReturns: function (portionOfReturns) { return ({ portionOfReturns: v4_1.edmToTs(portionOfReturns, 'Edm.Double') }); },
            EndOfWarranty: function (endOfWarranty) { return ({ endOfWarranty: v4_1.edmToTs(endOfWarranty, 'Edm.DateTimeOffset') }); },
            PlannedAmountLC: function (plannedAmountLc) { return ({ plannedAmountLc: v4_1.edmToTs(plannedAmountLc, 'Edm.Double') }); },
            PlannedAmountFC: function (plannedAmountFc) { return ({ plannedAmountFc: v4_1.edmToTs(plannedAmountFc, 'Edm.Double') }); },
            LineDiscount: function (lineDiscount) { return ({ lineDiscount: v4_1.edmToTs(lineDiscount, 'Edm.Double') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            UnitsOfMeasurement: function (unitsOfMeasurement) { return ({ unitsOfMeasurement: v4_1.edmToTs(unitsOfMeasurement, 'Edm.Double') }); },
            UndeliveredCumulativeQuantity: function (undeliveredCumulativeQuantity) { return ({ undeliveredCumulativeQuantity: v4_1.edmToTs(undeliveredCumulativeQuantity, 'Edm.Double') }); },
            UndeliveredCumulativeAmountLC: function (undeliveredCumulativeAmountLc) { return ({ undeliveredCumulativeAmountLc: v4_1.edmToTs(undeliveredCumulativeAmountLc, 'Edm.Double') }); },
            UndeliveredCumulativeAmountFC: function (undeliveredCumulativeAmountFc) { return ({ undeliveredCumulativeAmountFc: v4_1.edmToTs(undeliveredCumulativeAmountFc, 'Edm.Double') }); },
            ShippingType: function (shippingType) { return ({ shippingType: v4_1.edmToTs(shippingType, 'Edm.Int32') }); },
            Project: function (project) { return ({ project: v4_1.edmToTs(project, 'Edm.String') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            TAXRate: function (taxRate) { return ({ taxRate: v4_1.edmToTs(taxRate, 'Edm.Double') }); },
            PlannedVATAmountLC: function (plannedVatAmountLc) { return ({ plannedVatAmountLc: v4_1.edmToTs(plannedVatAmountLc, 'Edm.Double') }); },
            PlannedVATAmountFC: function (plannedVatAmountFc) { return ({ plannedVatAmountFc: v4_1.edmToTs(plannedVatAmountFc, 'Edm.Double') }); },
            CumulativeVATAmountLC: function (cumulativeVatAmountLc) { return ({ cumulativeVatAmountLc: v4_1.edmToTs(cumulativeVatAmountLc, 'Edm.Double') }); },
            CumulativeVATAmountFC: function (cumulativeVatAmountFc) { return ({ cumulativeVatAmountFc: v4_1.edmToTs(cumulativeVatAmountFc, 'Edm.Double') }); },
            BlanketAgreements_DetailsLines: function (blanketAgreementsDetailsLines) { return ({ blanketAgreementsDetailsLines: BlanketAgreementsDetailsLine_1.BlanketAgreementsDetailsLine.build(blanketAgreementsDetailsLines) }); }
        });
    }
    BlanketAgreementsItemsLine.build = build;
})(BlanketAgreementsItemsLine = exports.BlanketAgreementsItemsLine || (exports.BlanketAgreementsItemsLine = {}));
//# sourceMappingURL=BlanketAgreementsItemsLine.js.map