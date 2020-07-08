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
exports.DocumentLinesBinAllocation = exports.DocumentLinesBinAllocationField = exports.createDocumentLinesBinAllocation = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[DocumentLinesBinAllocation.build]] instead.
 */
function createDocumentLinesBinAllocation(json) {
    return DocumentLinesBinAllocation.build(json);
}
exports.createDocumentLinesBinAllocation = createDocumentLinesBinAllocation;
/**
 * DocumentLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var DocumentLinesBinAllocationField = /** @class */ (function (_super) {
    __extends(DocumentLinesBinAllocationField, _super);
    function DocumentLinesBinAllocationField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[DocumentLinesBinAllocation.binAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binAbsEntry = new v4_1.ComplexTypeNumberPropertyField('BinAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLinesBinAllocation.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[DocumentLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialAndBatchNumbersBaseLine = new v4_1.ComplexTypeNumberPropertyField('SerialAndBatchNumbersBaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[DocumentLinesBinAllocation.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new v4_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        return _this;
    }
    return DocumentLinesBinAllocationField;
}(v4_1.ComplexTypeField));
exports.DocumentLinesBinAllocationField = DocumentLinesBinAllocationField;
var DocumentLinesBinAllocation;
(function (DocumentLinesBinAllocation) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BinAbsEntry: function (binAbsEntry) { return ({ binAbsEntry: v4_1.edmToTs(binAbsEntry, 'Edm.Int32') }); },
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            SerialAndBatchNumbersBaseLine: function (serialAndBatchNumbersBaseLine) { return ({ serialAndBatchNumbersBaseLine: v4_1.edmToTs(serialAndBatchNumbersBaseLine, 'Edm.Int32') }); },
            BaseLineNumber: function (baseLineNumber) { return ({ baseLineNumber: v4_1.edmToTs(baseLineNumber, 'Edm.Int32') }); }
        });
    }
    DocumentLinesBinAllocation.build = build;
})(DocumentLinesBinAllocation = exports.DocumentLinesBinAllocation || (exports.DocumentLinesBinAllocation = {}));
//# sourceMappingURL=DocumentLinesBinAllocation.js.map