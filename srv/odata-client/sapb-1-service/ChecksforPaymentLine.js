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
exports.ChecksforPaymentLine = exports.ChecksforPaymentLineField = exports.createChecksforPaymentLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ChecksforPaymentLine.build]] instead.
 */
function createChecksforPaymentLine(json) {
    return ChecksforPaymentLine.build(json);
}
exports.createChecksforPaymentLine = createChecksforPaymentLine;
/**
 * ChecksforPaymentLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ChecksforPaymentLineField = /** @class */ (function (_super) {
    __extends(ChecksforPaymentLineField, _super);
    /**
     * Creates an instance of ChecksforPaymentLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ChecksforPaymentLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ChecksforPaymentLine) || this;
        /**
         * Representation of the [[ChecksforPaymentLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ChecksforPaymentLine.rowDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowDetails = new core_1.ComplexTypeStringPropertyField('RowDetails', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.rowTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowTotal = new core_1.ComplexTypeNumberPropertyField('RowTotal', _this, 'Edm.Double');
        /**
         * Representation of the [[ChecksforPaymentLine.rowCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowCurrency = new core_1.ComplexTypeStringPropertyField('RowCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.taxDefinition]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxDefinition = new core_1.ComplexTypeStringPropertyField('TaxDefinition', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.taxPercent]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.taxPercent = new core_1.ComplexTypeNumberPropertyField('TaxPercent', _this, 'Edm.Double');
        /**
         * Representation of the [[ChecksforPaymentLine.creditedAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.creditedAccount = new core_1.ComplexTypeStringPropertyField('CreditedAccount', _this, 'Edm.String');
        /**
         * Representation of the [[ChecksforPaymentLine.lineTotal]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineTotal = new core_1.ComplexTypeNumberPropertyField('LineTotal', _this, 'Edm.Double');
        return _this;
    }
    return ChecksforPaymentLineField;
}(core_1.ComplexTypeField));
exports.ChecksforPaymentLineField = ChecksforPaymentLineField;
var ChecksforPaymentLine;
(function (ChecksforPaymentLine) {
    /**
     * Metadata information on all properties of the `ChecksforPaymentLine` complex type.
     */
    ChecksforPaymentLine._propertyMetadata = [{
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RowDetails',
            name: 'rowDetails',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowTotal',
            name: 'rowTotal',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RowCurrency',
            name: 'rowCurrency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxDefinition',
            name: 'taxDefinition',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TaxPercent',
            name: 'taxPercent',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'CreditedAccount',
            name: 'creditedAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LineTotal',
            name: 'lineTotal',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ChecksforPaymentLine);
    }
    ChecksforPaymentLine.build = build;
})(ChecksforPaymentLine = exports.ChecksforPaymentLine || (exports.ChecksforPaymentLine = {}));
//# sourceMappingURL=ChecksforPaymentLine.js.map