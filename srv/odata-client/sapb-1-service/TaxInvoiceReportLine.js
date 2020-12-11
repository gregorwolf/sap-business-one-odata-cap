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
exports.TaxInvoiceReportLine = exports.TaxInvoiceReportLineField = exports.createTaxInvoiceReportLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of TaxInvoiceReportLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function TaxInvoiceReportLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, TaxInvoiceReportLine) || this;
        /**
         * Representation of the [[TaxInvoiceReportLine.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new core_1.ComplexTypeNumberPropertyField('DocumentType', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.documentEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentEntry = new core_1.ComplexTypeNumberPropertyField('DocumentEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.lineType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineType = new core_1.ComplexTypeEnumPropertyField('LineType', _this);
        /**
         * Representation of the [[TaxInvoiceReportLine.baseAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseAmount = new core_1.ComplexTypeNumberPropertyField('BaseAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new core_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemQuantity = new core_1.ComplexTypeNumberPropertyField('ItemQuantity', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.taxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxCode = new core_1.ComplexTypeStringPropertyField('TaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.documentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentDate = new core_1.ComplexTypeDatePropertyField('DocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[TaxInvoiceReportLine.itemPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemPrice = new core_1.ComplexTypeNumberPropertyField('ItemPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[TaxInvoiceReportLine.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.businessPlace]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.businessPlace = new core_1.ComplexTypeNumberPropertyField('BusinessPlace', _this, 'Edm.Int32');
        /**
         * Representation of the [[TaxInvoiceReportLine.taxInvoiceReportNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxInvoiceReportNumber = new core_1.ComplexTypeStringPropertyField('TaxInvoiceReportNumber', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.bpName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpName = new core_1.ComplexTypeStringPropertyField('BPName', _this, 'Edm.String');
        /**
         * Representation of the [[TaxInvoiceReportLine.legacy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.legacy = new core_1.ComplexTypeStringPropertyField('Legacy', _this, 'Edm.String');
        return _this;
    }
    return TaxInvoiceReportLineField;
}(core_1.ComplexTypeField));
exports.TaxInvoiceReportLineField = TaxInvoiceReportLineField;
var TaxInvoiceReportLine;
(function (TaxInvoiceReportLine) {
    /**
     * Metadata information on all properties of the `TaxInvoiceReportLine` complex type.
     */
    TaxInvoiceReportLine._propertyMetadata = [{
            originalName: 'DocumentType',
            name: 'documentType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentEntry',
            name: 'documentEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineType',
            name: 'lineType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseAmount',
            name: 'baseAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxAmount',
            name: 'taxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ItemQuantity',
            name: 'itemQuantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ItemDescription',
            name: 'itemDescription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxCode',
            name: 'taxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocumentDate',
            name: 'documentDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ItemPrice',
            name: 'itemPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BusinessPlace',
            name: 'businessPlace',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaxInvoiceReportNumber',
            name: 'taxInvoiceReportNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPName',
            name: 'bpName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Legacy',
            name: 'legacy',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, TaxInvoiceReportLine);
    }
    TaxInvoiceReportLine.build = build;
})(TaxInvoiceReportLine = exports.TaxInvoiceReportLine || (exports.TaxInvoiceReportLine = {}));
//# sourceMappingURL=TaxInvoiceReportLine.js.map