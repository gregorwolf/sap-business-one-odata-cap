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
exports.BlanketAgreementsDocument = exports.BlanketAgreementsDocumentField = exports.createBlanketAgreementsDocument = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BlanketAgreementsDocument.build]] instead.
 */
function createBlanketAgreementsDocument(json) {
    return BlanketAgreementsDocument.build(json);
}
exports.createBlanketAgreementsDocument = createBlanketAgreementsDocument;
/**
 * BlanketAgreementsDocumentField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BlanketAgreementsDocumentField = /** @class */ (function (_super) {
    __extends(BlanketAgreementsDocumentField, _super);
    /**
     * Creates an instance of BlanketAgreementsDocumentField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BlanketAgreementsDocumentField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BlanketAgreementsDocument) || this;
        /**
         * Representation of the [[BlanketAgreementsDocument.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new core_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDocument.documentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentType = new core_1.ComplexTypeEnumPropertyField('DocumentType', _this);
        /**
         * Representation of the [[BlanketAgreementsDocument.documentNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNo = new core_1.ComplexTypeNumberPropertyField('DocumentNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDocument.documentRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentRowNumber = new core_1.ComplexTypeNumberPropertyField('DocumentRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDocument.documentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentDate = new core_1.ComplexTypeDatePropertyField('DocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsDocument.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new core_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new core_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new core_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.uoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoM = new core_1.ComplexTypeStringPropertyField('UoM', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.rowStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowStatus = new core_1.ComplexTypeEnumPropertyField('RowStatus', _this);
        /**
         * Representation of the [[BlanketAgreementsDocument.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new core_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.unitsOfMeasurement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurement = new core_1.ComplexTypeNumberPropertyField('UnitsOfMeasurement', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.docStatus]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docStatus = new core_1.ComplexTypeEnumPropertyField('DocStatus', _this);
        return _this;
    }
    return BlanketAgreementsDocumentField;
}(core_1.ComplexTypeField));
exports.BlanketAgreementsDocumentField = BlanketAgreementsDocumentField;
var BlanketAgreementsDocument;
(function (BlanketAgreementsDocument) {
    /**
     * Metadata information on all properties of the `BlanketAgreementsDocument` complex type.
     */
    BlanketAgreementsDocument._propertyMetadata = [{
            originalName: 'AgreementRowNumber',
            name: 'agreementRowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentType',
            name: 'documentType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocumentNo',
            name: 'documentNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentRowNumber',
            name: 'documentRowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocumentDate',
            name: 'documentDate',
            type: 'Edm.DateTimeOffset',
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
            originalName: 'UnitPrice',
            name: 'unitPrice',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Discount',
            name: 'discount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'UoM',
            name: 'uoM',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowStatus',
            name: 'rowStatus',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'UoMCode',
            name: 'uoMCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UnitsOfMeasurement',
            name: 'unitsOfMeasurement',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocStatus',
            name: 'docStatus',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BlanketAgreementsDocument);
    }
    BlanketAgreementsDocument.build = build;
})(BlanketAgreementsDocument = exports.BlanketAgreementsDocument || (exports.BlanketAgreementsDocument = {}));
//# sourceMappingURL=BlanketAgreementsDocument.js.map