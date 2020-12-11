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
exports.LineExpenseTaxJurisdiction = exports.LineExpenseTaxJurisdictionField = exports.createLineExpenseTaxJurisdiction = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[LineExpenseTaxJurisdiction.build]] instead.
 */
function createLineExpenseTaxJurisdiction(json) {
    return LineExpenseTaxJurisdiction.build(json);
}
exports.createLineExpenseTaxJurisdiction = createLineExpenseTaxJurisdiction;
/**
 * LineExpenseTaxJurisdictionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var LineExpenseTaxJurisdictionField = /** @class */ (function (_super) {
    __extends(LineExpenseTaxJurisdictionField, _super);
    /**
     * Creates an instance of LineExpenseTaxJurisdictionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function LineExpenseTaxJurisdictionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, LineExpenseTaxJurisdiction) || this;
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jurisdictionCode = new core_1.ComplexTypeStringPropertyField('JurisdictionCode', _this, 'Edm.String');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.jurisdictionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.jurisdictionType = new core_1.ComplexTypeNumberPropertyField('JurisdictionType', _this, 'Edm.Int32');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmount = new core_1.ComplexTypeNumberPropertyField('TaxAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxAmountSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountSc = new core_1.ComplexTypeNumberPropertyField('TaxAmountSC', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxAmountFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxAmountFc = new core_1.ComplexTypeNumberPropertyField('TaxAmountFC', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.taxRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxRate = new core_1.ComplexTypeNumberPropertyField('TaxRate', _this, 'Edm.Double');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.lineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNumber = new core_1.ComplexTypeNumberPropertyField('LineNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[LineExpenseTaxJurisdiction.rowSequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowSequence = new core_1.ComplexTypeNumberPropertyField('RowSequence', _this, 'Edm.Int32');
        return _this;
    }
    return LineExpenseTaxJurisdictionField;
}(core_1.ComplexTypeField));
exports.LineExpenseTaxJurisdictionField = LineExpenseTaxJurisdictionField;
var LineExpenseTaxJurisdiction;
(function (LineExpenseTaxJurisdiction) {
    /**
     * Metadata information on all properties of the `LineExpenseTaxJurisdiction` complex type.
     */
    LineExpenseTaxJurisdiction._propertyMetadata = [{
            originalName: 'JurisdictionCode',
            name: 'jurisdictionCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'JurisdictionType',
            name: 'jurisdictionType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TaxAmount',
            name: 'taxAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxAmountSC',
            name: 'taxAmountSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxAmountFC',
            name: 'taxAmountFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'TaxRate',
            name: 'taxRate',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'LineNumber',
            name: 'lineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RowSequence',
            name: 'rowSequence',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, LineExpenseTaxJurisdiction);
    }
    LineExpenseTaxJurisdiction.build = build;
})(LineExpenseTaxJurisdiction = exports.LineExpenseTaxJurisdiction || (exports.LineExpenseTaxJurisdiction = {}));
//# sourceMappingURL=LineExpenseTaxJurisdiction.js.map