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
exports.SalesTaxCodesLine = exports.SalesTaxCodesLineField = exports.createSalesTaxCodesLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxCodesLine.build]] instead.
 */
function createSalesTaxCodesLine(json) {
    return SalesTaxCodesLine.build(json);
}
exports.createSalesTaxCodesLine = createSalesTaxCodesLine;
/**
 * SalesTaxCodesLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesTaxCodesLineField = /** @class */ (function (_super) {
    __extends(SalesTaxCodesLineField, _super);
    /**
     * Creates an instance of SalesTaxCodesLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesTaxCodesLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesTaxCodesLine) || this;
        /**
         * Representation of the [[SalesTaxCodesLine.staTaxOnTaxType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staTaxOnTaxType = new core_1.ComplexTypeNumberPropertyField('STATaxOnTaxType', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxCodesLine.staTaxonTaxCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staTaxonTaxCode = new core_1.ComplexTypeStringPropertyField('STATaxonTaxCode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxCodesLine.stcCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.stcCode = new core_1.ComplexTypeStringPropertyField('STCCode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxCodesLine.staType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staType = new core_1.ComplexTypeNumberPropertyField('STAType', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxCodesLine.staCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.staCode = new core_1.ComplexTypeStringPropertyField('STACode', _this, 'Edm.String');
        /**
         * Representation of the [[SalesTaxCodesLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxCodesLine.effectiveRate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.effectiveRate = new core_1.ComplexTypeNumberPropertyField('EffectiveRate', _this, 'Edm.Double');
        return _this;
    }
    return SalesTaxCodesLineField;
}(core_1.ComplexTypeField));
exports.SalesTaxCodesLineField = SalesTaxCodesLineField;
var SalesTaxCodesLine;
(function (SalesTaxCodesLine) {
    /**
     * Metadata information on all properties of the `SalesTaxCodesLine` complex type.
     */
    SalesTaxCodesLine._propertyMetadata = [{
            originalName: 'STATaxOnTaxType',
            name: 'staTaxOnTaxType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'STATaxonTaxCode',
            name: 'staTaxonTaxCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'STCCode',
            name: 'stcCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'STAType',
            name: 'staType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'STACode',
            name: 'staCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EffectiveRate',
            name: 'effectiveRate',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesTaxCodesLine);
    }
    SalesTaxCodesLine.build = build;
})(SalesTaxCodesLine = exports.SalesTaxCodesLine || (exports.SalesTaxCodesLine = {}));
//# sourceMappingURL=SalesTaxCodesLine.js.map