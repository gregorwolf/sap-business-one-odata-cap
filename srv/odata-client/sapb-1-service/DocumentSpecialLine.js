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
exports.DocumentSpecialLine = exports.DocumentSpecialLineField = exports.createDocumentSpecialLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function DocumentSpecialLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentSpecialLine.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSpecialLine.afterLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.afterLineNumber = new v4_1.ComplexTypeNumberPropertyField('AfterLineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSpecialLine.orderNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.orderNumber = new v4_1.ComplexTypeNumberPropertyField('OrderNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentSpecialLine.subtotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subtotal = new v4_1.ComplexTypeNumberPropertyField('Subtotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.lineText]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineText = new v4_1.ComplexTypeStringPropertyField('LineText', _this, 'Edm.String');
        /**
         * Representation of the [[DocumentSpecialLine.subtotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subtotalFc = new v4_1.ComplexTypeNumberPropertyField('SubtotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.subtotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.subtotalSc = new v4_1.ComplexTypeNumberPropertyField('SubtotalSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new v4_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.taxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountFc = new v4_1.ComplexTypeNumberPropertyField('TaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.taxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountSc = new v4_1.ComplexTypeNumberPropertyField('TaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight1 = new v4_1.ComplexTypeNumberPropertyField('Freight1', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight1Fc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight1Fc = new v4_1.ComplexTypeNumberPropertyField('Freight1FC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight1Sc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight1Sc = new v4_1.ComplexTypeNumberPropertyField('Freight1SC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight2 = new v4_1.ComplexTypeNumberPropertyField('Freight2', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight2Fc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight2Fc = new v4_1.ComplexTypeNumberPropertyField('Freight2FC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight2Sc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight2Sc = new v4_1.ComplexTypeNumberPropertyField('Freight2SC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight3 = new v4_1.ComplexTypeNumberPropertyField('Freight3', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight3Fc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight3Fc = new v4_1.ComplexTypeNumberPropertyField('Freight3FC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.freight3Sc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.freight3Sc = new v4_1.ComplexTypeNumberPropertyField('Freight3SC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.grossTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotal = new v4_1.ComplexTypeNumberPropertyField('GrossTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.grossTotalFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalFc = new v4_1.ComplexTypeNumberPropertyField('GrossTotalFC', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentSpecialLine.grossTotalSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossTotalSc = new v4_1.ComplexTypeNumberPropertyField('GrossTotalSC', _this, 'Edm.Double');
        return _this;
    }
    return DocumentSpecialLineField;
}(v4_1.ComplexTypeField));
exports.DocumentSpecialLineField = DocumentSpecialLineField;
var DocumentSpecialLine;
(function (DocumentSpecialLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            AfterLineNumber: function (afterLineNumber) { return ({ afterLineNumber: v4_1.edmToTs(afterLineNumber, 'Edm.Int32') }); },
            OrderNumber: function (orderNumber) { return ({ orderNumber: v4_1.edmToTs(orderNumber, 'Edm.Int32') }); },
            Subtotal: function (subtotal) { return ({ subtotal: v4_1.edmToTs(subtotal, 'Edm.Double') }); },
            LineText: function (lineText) { return ({ lineText: v4_1.edmToTs(lineText, 'Edm.String') }); },
            SubtotalFC: function (subtotalFc) { return ({ subtotalFc: v4_1.edmToTs(subtotalFc, 'Edm.Double') }); },
            SubtotalSC: function (subtotalSc) { return ({ subtotalSc: v4_1.edmToTs(subtotalSc, 'Edm.Double') }); },
            TaxAmount: function (taxAmount) { return ({ taxAmount: v4_1.edmToTs(taxAmount, 'Edm.Double') }); },
            TaxAmountFC: function (taxAmountFc) { return ({ taxAmountFc: v4_1.edmToTs(taxAmountFc, 'Edm.Double') }); },
            TaxAmountSC: function (taxAmountSc) { return ({ taxAmountSc: v4_1.edmToTs(taxAmountSc, 'Edm.Double') }); },
            Freight1: function (freight1) { return ({ freight1: v4_1.edmToTs(freight1, 'Edm.Double') }); },
            Freight1FC: function (freight1Fc) { return ({ freight1Fc: v4_1.edmToTs(freight1Fc, 'Edm.Double') }); },
            Freight1SC: function (freight1Sc) { return ({ freight1Sc: v4_1.edmToTs(freight1Sc, 'Edm.Double') }); },
            Freight2: function (freight2) { return ({ freight2: v4_1.edmToTs(freight2, 'Edm.Double') }); },
            Freight2FC: function (freight2Fc) { return ({ freight2Fc: v4_1.edmToTs(freight2Fc, 'Edm.Double') }); },
            Freight2SC: function (freight2Sc) { return ({ freight2Sc: v4_1.edmToTs(freight2Sc, 'Edm.Double') }); },
            Freight3: function (freight3) { return ({ freight3: v4_1.edmToTs(freight3, 'Edm.Double') }); },
            Freight3FC: function (freight3Fc) { return ({ freight3Fc: v4_1.edmToTs(freight3Fc, 'Edm.Double') }); },
            Freight3SC: function (freight3Sc) { return ({ freight3Sc: v4_1.edmToTs(freight3Sc, 'Edm.Double') }); },
            GrossTotal: function (grossTotal) { return ({ grossTotal: v4_1.edmToTs(grossTotal, 'Edm.Double') }); },
            GrossTotalFC: function (grossTotalFc) { return ({ grossTotalFc: v4_1.edmToTs(grossTotalFc, 'Edm.Double') }); },
            GrossTotalSC: function (grossTotalSc) { return ({ grossTotalSc: v4_1.edmToTs(grossTotalSc, 'Edm.Double') }); }
        });
    }
    DocumentSpecialLine.build = build;
})(DocumentSpecialLine = exports.DocumentSpecialLine || (exports.DocumentSpecialLine = {}));
//# sourceMappingURL=DocumentSpecialLine.js.map