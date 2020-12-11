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
exports.DownPaymentToDrawDetails = exports.DownPaymentToDrawDetailsField = exports.createDownPaymentToDrawDetails = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDrawDetails.build]] instead.
 */
function createDownPaymentToDrawDetails(json) {
    return DownPaymentToDrawDetails.build(json);
}
exports.createDownPaymentToDrawDetails = createDownPaymentToDrawDetails;
/**
 * DownPaymentToDrawDetailsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DownPaymentToDrawDetailsField = /** @class */ (function (_super) {
    __extends(DownPaymentToDrawDetailsField, _super);
    /**
     * Creates an instance of DownPaymentToDrawDetailsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DownPaymentToDrawDetailsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DownPaymentToDrawDetails) || this;
        /**
         * Representation of the [[DownPaymentToDrawDetails.docInternalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docInternalId = new core_1.ComplexTypeNumberPropertyField('DocInternalID', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.rowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNum = new core_1.ComplexTypeNumberPropertyField('RowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.seqNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.seqNum = new core_1.ComplexTypeNumberPropertyField('SeqNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDrawDetails.vatGroupCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroupCode = new core_1.ComplexTypeStringPropertyField('VatGroupCode', _this, 'Edm.String');
        /**
         * Representation of the [[DownPaymentToDrawDetails.vatPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatPercent = new core_1.ComplexTypeNumberPropertyField('VatPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.amountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDraw = new core_1.ComplexTypeNumberPropertyField('AmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.amountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawFc = new core_1.ComplexTypeNumberPropertyField('AmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.amountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawSc = new core_1.ComplexTypeNumberPropertyField('AmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.tax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tax = new core_1.ComplexTypeNumberPropertyField('Tax', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.taxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxFc = new core_1.ComplexTypeNumberPropertyField('TaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.taxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSc = new core_1.ComplexTypeNumberPropertyField('TaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.isGrossLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isGrossLine = new core_1.ComplexTypeEnumPropertyField('IsGrossLine', _this);
        /**
         * Representation of the [[DownPaymentToDrawDetails.grossAmountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDraw = new core_1.ComplexTypeNumberPropertyField('GrossAmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawFc = new core_1.ComplexTypeNumberPropertyField('GrossAmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.grossAmountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawSc = new core_1.ComplexTypeNumberPropertyField('GrossAmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDrawDetails.lineType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineType = new core_1.ComplexTypeEnumPropertyField('LineType', _this);
        /**
         * Representation of the [[DownPaymentToDrawDetails.taxAdjust]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAdjust = new core_1.ComplexTypeEnumPropertyField('TaxAdjust', _this);
        return _this;
    }
    return DownPaymentToDrawDetailsField;
}(core_1.ComplexTypeField));
exports.DownPaymentToDrawDetailsField = DownPaymentToDrawDetailsField;
var DownPaymentToDrawDetails;
(function (DownPaymentToDrawDetails) {
    /**
     * Metadata information on all properties of the `DownPaymentToDrawDetails` complex type.
     */
    DownPaymentToDrawDetails._propertyMetadata = [{
            originalName: 'DocInternalID',
            name: 'docInternalId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RowNum',
            name: 'rowNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'SeqNum',
            name: 'seqNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'VatGroupCode',
            name: 'vatGroupCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VatPercent',
            name: 'vatPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AmountToDraw',
            name: 'amountToDraw',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AmountToDrawFC',
            name: 'amountToDrawFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AmountToDrawSC',
            name: 'amountToDrawSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Tax',
            name: 'tax',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxFC',
            name: 'taxFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxSC',
            name: 'taxSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'IsGrossLine',
            name: 'isGrossLine',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'GrossAmountToDraw',
            name: 'grossAmountToDraw',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossAmountToDrawFC',
            name: 'grossAmountToDrawFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'GrossAmountToDrawSC',
            name: 'grossAmountToDrawSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineType',
            name: 'lineType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'TaxAdjust',
            name: 'taxAdjust',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DownPaymentToDrawDetails);
    }
    DownPaymentToDrawDetails.build = build;
})(DownPaymentToDrawDetails = exports.DownPaymentToDrawDetails || (exports.DownPaymentToDrawDetails = {}));
//# sourceMappingURL=DownPaymentToDrawDetails.js.map