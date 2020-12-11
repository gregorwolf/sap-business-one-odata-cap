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
exports.DocumentSpecialLine = exports.DocumentSpecialLineField = exports.createDocumentSpecialLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[DocumentSpecialLine.build]] instead.
 */
function createDocumentSpecialLine(json) {
    return DocumentSpecialLine.build(json);
}
exports.createDocumentSpecialLine = createDocumentSpecialLine;
/**
 * DocumentSpecialLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentSpecialLineField = /** @class */ (function (_super) {
    __extends(DocumentSpecialLineField, _super);
    /**
     * Creates an instance of DocumentSpecialLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function DocumentSpecialLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, DocumentSpecialLine) || this;
        /**
         * Representation of the [[DocumentSpecialLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSpecialLine.afterLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.afterLineNumber = new core_1.ComplexTypeNumberPropertyField('AfterLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSpecialLine.orderNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderNumber = new core_1.ComplexTypeNumberPropertyField('OrderNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSpecialLine.lineType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineType = new core_1.ComplexTypeEnumPropertyField('LineType', _this);
        /**
         * Representation of the [[DocumentSpecialLine.subtotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subtotal = new core_1.ComplexTypeNumberPropertyField('Subtotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.lineText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineText = new core_1.ComplexTypeStringPropertyField('LineText', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSpecialLine.subtotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subtotalFc = new core_1.ComplexTypeNumberPropertyField('SubtotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.subtotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subtotalSc = new core_1.ComplexTypeNumberPropertyField('SubtotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new core_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.taxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountFc = new core_1.ComplexTypeNumberPropertyField('TaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.taxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountSc = new core_1.ComplexTypeNumberPropertyField('TaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight1 = new core_1.ComplexTypeNumberPropertyField('Freight1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight1Fc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight1Fc = new core_1.ComplexTypeNumberPropertyField('Freight1FC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight1Sc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight1Sc = new core_1.ComplexTypeNumberPropertyField('Freight1SC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight2 = new core_1.ComplexTypeNumberPropertyField('Freight2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight2Fc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight2Fc = new core_1.ComplexTypeNumberPropertyField('Freight2FC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight2Sc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight2Sc = new core_1.ComplexTypeNumberPropertyField('Freight2SC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight3 = new core_1.ComplexTypeNumberPropertyField('Freight3', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight3Fc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight3Fc = new core_1.ComplexTypeNumberPropertyField('Freight3FC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight3Sc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight3Sc = new core_1.ComplexTypeNumberPropertyField('Freight3SC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.grossTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotal = new core_1.ComplexTypeNumberPropertyField('GrossTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.grossTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalFc = new core_1.ComplexTypeNumberPropertyField('GrossTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.grossTotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalSc = new core_1.ComplexTypeNumberPropertyField('GrossTotalSC', _this, 'Edm.Double');
        return _this;
    }
    return DocumentSpecialLineField;
}(core_1.ComplexTypeField));
exports.DocumentSpecialLineField = DocumentSpecialLineField;
var DocumentSpecialLine;
(function (DocumentSpecialLine) {
    /**
     * Metadata information on all properties of the `DocumentSpecialLine` complex type.
     */
    DocumentSpecialLine._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AfterLineNumber',
            name: 'afterLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'OrderNumber',
            name: 'orderNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineType',
            name: 'lineType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'Subtotal',
            name: 'subtotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'LineText',
            name: 'lineText',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SubtotalFC',
            name: 'subtotalFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SubtotalSC',
            name: 'subtotalSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxAmount',
            name: 'taxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxAmountFC',
            name: 'taxAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxAmountSC',
            name: 'taxAmountSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight1',
            name: 'freight1',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight1FC',
            name: 'freight1Fc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight1SC',
            name: 'freight1Sc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight2',
            name: 'freight2',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight2FC',
            name: 'freight2Fc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight2SC',
            name: 'freight2Sc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight3',
            name: 'freight3',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight3FC',
            name: 'freight3Fc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Freight3SC',
            name: 'freight3Sc',
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
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, DocumentSpecialLine);
    }
    DocumentSpecialLine.build = build;
})(DocumentSpecialLine = exports.DocumentSpecialLine || (exports.DocumentSpecialLine = {}));
//# sourceMappingURL=DocumentSpecialLine.js.map