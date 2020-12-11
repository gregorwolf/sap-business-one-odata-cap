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
exports.SalesTaxInvoiceLine = exports.SalesTaxInvoiceLineField = exports.createSalesTaxInvoiceLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[SalesTaxInvoiceLine.build]] instead.
 */
function createSalesTaxInvoiceLine(json) {
    return SalesTaxInvoiceLine.build(json);
}
exports.createSalesTaxInvoiceLine = createSalesTaxInvoiceLine;
/**
 * SalesTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesTaxInvoiceLineField = /** @class */ (function (_super) {
    __extends(SalesTaxInvoiceLineField, _super);
    /**
     * Creates an instance of SalesTaxInvoiceLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesTaxInvoiceLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesTaxInvoiceLine) || this;
        /**
         * Representation of the [[SalesTaxInvoiceLine.refEntry1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refEntry1 = new core_1.ComplexTypeNumberPropertyField('RefEntry1', _this, 'Edm.Int32');
        /**
         * Representation of the [[SalesTaxInvoiceLine.refEntry2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refEntry2 = new core_1.ComplexTypeNumberPropertyField('RefEntry2', _this, 'Edm.Int32');
        return _this;
    }
    return SalesTaxInvoiceLineField;
}(core_1.ComplexTypeField));
exports.SalesTaxInvoiceLineField = SalesTaxInvoiceLineField;
var SalesTaxInvoiceLine;
(function (SalesTaxInvoiceLine) {
    /**
     * Metadata information on all properties of the `SalesTaxInvoiceLine` complex type.
     */
    SalesTaxInvoiceLine._propertyMetadata = [{
            originalName: 'RefEntry1',
            name: 'refEntry1',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'RefEntry2',
            name: 'refEntry2',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesTaxInvoiceLine);
    }
    SalesTaxInvoiceLine.build = build;
})(SalesTaxInvoiceLine = exports.SalesTaxInvoiceLine || (exports.SalesTaxInvoiceLine = {}));
//# sourceMappingURL=SalesTaxInvoiceLine.js.map