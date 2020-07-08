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
exports.BlanketAgreementsDocument = exports.BlanketAgreementsDocumentField = exports.createBlanketAgreementsDocument = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function BlanketAgreementsDocumentField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BlanketAgreementsDocument.agreementRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.agreementRowNumber = new v4_1.ComplexTypeNumberPropertyField('AgreementRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDocument.documentNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNo = new v4_1.ComplexTypeNumberPropertyField('DocumentNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDocument.documentRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentRowNumber = new v4_1.ComplexTypeNumberPropertyField('DocumentRowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BlanketAgreementsDocument.documentDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentDate = new v4_1.ComplexTypeDatePropertyField('DocumentDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BlanketAgreementsDocument.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.itemDescription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemDescription = new v4_1.ComplexTypeStringPropertyField('ItemDescription', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.unitPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitPrice = new v4_1.ComplexTypeNumberPropertyField('UnitPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new v4_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[BlanketAgreementsDocument.uoM]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoM = new v4_1.ComplexTypeStringPropertyField('UoM', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.uoMCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMCode = new v4_1.ComplexTypeStringPropertyField('UoMCode', _this, 'Edm.String');
        /**
         * Representation of the [[BlanketAgreementsDocument.unitsOfMeasurement]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.unitsOfMeasurement = new v4_1.ComplexTypeNumberPropertyField('UnitsOfMeasurement', _this, 'Edm.Double');
        return _this;
    }
    return BlanketAgreementsDocumentField;
}(v4_1.ComplexTypeField));
exports.BlanketAgreementsDocumentField = BlanketAgreementsDocumentField;
var BlanketAgreementsDocument;
(function (BlanketAgreementsDocument) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AgreementRowNumber: function (agreementRowNumber) { return ({ agreementRowNumber: v4_1.edmToTs(agreementRowNumber, 'Edm.Int32') }); },
            DocumentNo: function (documentNo) { return ({ documentNo: v4_1.edmToTs(documentNo, 'Edm.Int32') }); },
            DocumentRowNumber: function (documentRowNumber) { return ({ documentRowNumber: v4_1.edmToTs(documentRowNumber, 'Edm.Int32') }); },
            DocumentDate: function (documentDate) { return ({ documentDate: v4_1.edmToTs(documentDate, 'Edm.DateTimeOffset') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            ItemDescription: function (itemDescription) { return ({ itemDescription: v4_1.edmToTs(itemDescription, 'Edm.String') }); },
            UnitPrice: function (unitPrice) { return ({ unitPrice: v4_1.edmToTs(unitPrice, 'Edm.Double') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            Discount: function (discount) { return ({ discount: v4_1.edmToTs(discount, 'Edm.Double') }); },
            UoM: function (uoM) { return ({ uoM: v4_1.edmToTs(uoM, 'Edm.String') }); },
            UoMCode: function (uoMCode) { return ({ uoMCode: v4_1.edmToTs(uoMCode, 'Edm.String') }); },
            UnitsOfMeasurement: function (unitsOfMeasurement) { return ({ unitsOfMeasurement: v4_1.edmToTs(unitsOfMeasurement, 'Edm.Double') }); }
        });
    }
    BlanketAgreementsDocument.build = build;
})(BlanketAgreementsDocument = exports.BlanketAgreementsDocument || (exports.BlanketAgreementsDocument = {}));
//# sourceMappingURL=BlanketAgreementsDocument.js.map