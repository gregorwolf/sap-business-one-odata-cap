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
exports.TaxInvoiceReportLine = exports.TaxInvoiceReportLineField = exports.createTaxInvoiceReportLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[TaxInvoiceReportLine.build]] instead.
 */
function createTaxInvoiceReportLine(json) {
    return TaxInvoiceReportLine.build(json);
}
exports.createTaxInvoiceReportLine = createTaxInvoiceReportLine;
/**
 * TaxInvoiceReportLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var TaxInvoiceReportLineField = /** @class */ (function (_super) {
    __extends(TaxInvoiceReportLineField, _super);
    function TaxInvoiceReportLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[TaxInvoiceReportLine.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new v4_1.ComplexTypeNumberPropertyField('DocumentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new v4_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.baseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseAmount = new v4_1.ComplexTypeNumberPropertyField('BaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new v4_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemQuantity = new v4_1.ComplexTypeNumberPropertyField('ItemQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new v4_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.documentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentDate = new v4_1.ComplexTypeDatePropertyField('DocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemPrice = new v4_1.ComplexTypeNumberPropertyField('ItemPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new v4_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new v4_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.businessPlace]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPlace = new v4_1.ComplexTypeNumberPropertyField('BusinessPlace', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.taxInvoiceReportNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxInvoiceReportNumber = new v4_1.ComplexTypeStringPropertyField('TaxInvoiceReportNumber', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.bpName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpName = new v4_1.ComplexTypeStringPropertyField('BPName', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.legacy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.legacy = new v4_1.ComplexTypeStringPropertyField('Legacy', _this, 'Edm.String');
        return _this;
    }
    return TaxInvoiceReportLineField;
}(v4_1.ComplexTypeField));
exports.TaxInvoiceReportLineField = TaxInvoiceReportLineField;
var TaxInvoiceReportLine;
(function (TaxInvoiceReportLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DocumentType: function (documentType) { return ({ documentType: v4_1.edmToTs(documentType, 'Edm.Int32') }); },
            DocumentEntry: function (documentEntry) { return ({ documentEntry: v4_1.edmToTs(documentEntry, 'Edm.Int32') }); },
            BaseAmount: function (baseAmount) { return ({ baseAmount: v4_1.edmToTs(baseAmount, 'Edm.Double') }); },
            TaxAmount: function (taxAmount) { return ({ taxAmount: v4_1.edmToTs(taxAmount, 'Edm.Double') }); },
            ItemQuantity: function (itemQuantity) { return ({ itemQuantity: v4_1.edmToTs(itemQuantity, 'Edm.Double') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            TaxCode: function (taxCode) { return ({ taxCode: v4_1.edmToTs(taxCode, 'Edm.String') }); },
            DocumentDate: function (documentDate) { return ({ documentDate: v4_1.edmToTs(documentDate, 'Edm.DateTimeOffset') }); },
            ItemPrice: function (itemPrice) { return ({ itemPrice: v4_1.edmToTs(itemPrice, 'Edm.Double') }); },
            LineNumber: function (lineNumber) { return ({ lineNumber: v4_1.edmToTs(lineNumber, 'Edm.Int32') }); },
            Currency: function (currency) { return ({ currency: v4_1.edmToTs(currency, 'Edm.String') }); },
            BusinessPlace: function (businessPlace) { return ({ businessPlace: v4_1.edmToTs(businessPlace, 'Edm.Int32') }); },
            TaxInvoiceReportNumber: function (taxInvoiceReportNumber) { return ({ taxInvoiceReportNumber: v4_1.edmToTs(taxInvoiceReportNumber, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            BPName: function (bpName) { return ({ bpName: v4_1.edmToTs(bpName, 'Edm.String') }); },
            Legacy: function (legacy) { return ({ legacy: v4_1.edmToTs(legacy, 'Edm.String') }); }
        });
    }
    TaxInvoiceReportLine.build = build;
})(TaxInvoiceReportLine = exports.TaxInvoiceReportLine || (exports.TaxInvoiceReportLine = {}));
//# sourceMappingURL=TaxInvoiceReportLine.js.map