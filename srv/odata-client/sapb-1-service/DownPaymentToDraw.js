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
exports.DownPaymentToDraw = exports.DownPaymentToDrawField = exports.createDownPaymentToDraw = void 0;
var DownPaymentToDrawDetails_1 = require("./DownPaymentToDrawDetails");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DownPaymentToDraw.build]] instead.
 */
function createDownPaymentToDraw(json) {
    return DownPaymentToDraw.build(json);
}
exports.createDownPaymentToDraw = createDownPaymentToDraw;
/**
 * DownPaymentToDrawField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DownPaymentToDrawField = /** @class */ (function (_super) {
    __extends(DownPaymentToDrawField, _super);
    /**
     * Creates an instance of DownPaymentToDrawField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DownPaymentToDrawField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DownPaymentToDraw) || this;
        /**
         * Representation of the [[DownPaymentToDraw.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.postingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.postingDate = new core_1.ComplexTypeDatePropertyField('PostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DownPaymentToDraw.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[DownPaymentToDraw.name]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.name = new core_1.ComplexTypeStringPropertyField('Name', _this, 'Edm.String');
        /**
         * Representation of the [[DownPaymentToDraw.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[DownPaymentToDraw.amountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDraw = new core_1.ComplexTypeNumberPropertyField('AmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.downPaymentType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentType = new core_1.ComplexTypeEnumPropertyField('DownPaymentType', _this);
        /**
         * Representation of the [[DownPaymentToDraw.amountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawFc = new core_1.ComplexTypeNumberPropertyField('AmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.amountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amountToDrawSc = new core_1.ComplexTypeNumberPropertyField('AmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.docInternalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docInternalId = new core_1.ComplexTypeNumberPropertyField('DocInternalID', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.rowNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNum = new core_1.ComplexTypeNumberPropertyField('RowNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.docNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docNumber = new core_1.ComplexTypeNumberPropertyField('DocNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DownPaymentToDraw.tax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.tax = new core_1.ComplexTypeNumberPropertyField('Tax', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.taxFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxFc = new core_1.ComplexTypeNumberPropertyField('TaxFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.taxSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxSc = new core_1.ComplexTypeNumberPropertyField('TaxSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.grossAmountToDraw]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDraw = new core_1.ComplexTypeNumberPropertyField('GrossAmountToDraw', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.grossAmountToDrawFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawFc = new core_1.ComplexTypeNumberPropertyField('GrossAmountToDrawFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.grossAmountToDrawSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmountToDrawSc = new core_1.ComplexTypeNumberPropertyField('GrossAmountToDrawSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DownPaymentToDraw.isGrossLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isGrossLine = new core_1.ComplexTypeEnumPropertyField('IsGrossLine', _this);
        /**
         * Representation of the [[DownPaymentToDraw.downPaymentsToDrawDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.downPaymentsToDrawDetails = new core_1.CollectionField('DownPaymentsToDrawDetails', _this, DownPaymentToDrawDetails_1.DownPaymentToDrawDetails);
        return _this;
    }
    return DownPaymentToDrawField;
}(core_1.ComplexTypeField));
exports.DownPaymentToDrawField = DownPaymentToDrawField;
var DownPaymentToDraw;
(function (DownPaymentToDraw) {
    /**
     * Metadata information on all properties of the `DownPaymentToDraw` complex type.
     */
    DownPaymentToDraw._propertyMetadata = [{
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PostingDate',
            name: 'postingDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Name',
            name: 'name',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AmountToDraw',
            name: 'amountToDraw',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DownPaymentType',
            name: 'downPaymentType',
            type: 'Edm.Enum',
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
            originalName: 'DocNumber',
            name: 'docNumber',
            type: 'Edm.Int32',
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
            originalName: 'IsGrossLine',
            name: 'isGrossLine',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DownPaymentsToDrawDetails',
            name: 'downPaymentsToDrawDetails',
            type: DownPaymentToDrawDetails_1.DownPaymentToDrawDetails,
            isCollection: true
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DownPaymentToDraw);
    }
    DownPaymentToDraw.build = build;
})(DownPaymentToDraw = exports.DownPaymentToDraw || (exports.DownPaymentToDraw = {}));
//# sourceMappingURL=DownPaymentToDraw.js.map