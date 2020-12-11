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
exports.PurchaseTaxInvoiceLine = exports.PurchaseTaxInvoiceLineField = exports.createPurchaseTaxInvoiceLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PurchaseTaxInvoiceLine.build]] instead.
 */
function createPurchaseTaxInvoiceLine(json) {
    return PurchaseTaxInvoiceLine.build(json);
}
exports.createPurchaseTaxInvoiceLine = createPurchaseTaxInvoiceLine;
/**
 * PurchaseTaxInvoiceLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PurchaseTaxInvoiceLineField = /** @class */ (function (_super) {
    __extends(PurchaseTaxInvoiceLineField, _super);
    /**
     * Creates an instance of PurchaseTaxInvoiceLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PurchaseTaxInvoiceLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PurchaseTaxInvoiceLine) || this;
        /**
         * Representation of the [[PurchaseTaxInvoiceLine.refEntry1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refEntry1 = new core_1.ComplexTypeNumberPropertyField('RefEntry1', _this, 'Edm.Int32');
        /**
         * Representation of the [[PurchaseTaxInvoiceLine.refEntry2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refEntry2 = new core_1.ComplexTypeNumberPropertyField('RefEntry2', _this, 'Edm.Int32');
        return _this;
    }
    return PurchaseTaxInvoiceLineField;
}(core_1.ComplexTypeField));
exports.PurchaseTaxInvoiceLineField = PurchaseTaxInvoiceLineField;
var PurchaseTaxInvoiceLine;
(function (PurchaseTaxInvoiceLine) {
    /**
     * Metadata information on all properties of the `PurchaseTaxInvoiceLine` complex type.
     */
    PurchaseTaxInvoiceLine._propertyMetadata = [{
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
        return core_1.deserializeComplexTypeV4(json, PurchaseTaxInvoiceLine);
    }
    PurchaseTaxInvoiceLine.build = build;
})(PurchaseTaxInvoiceLine = exports.PurchaseTaxInvoiceLine || (exports.PurchaseTaxInvoiceLine = {}));
//# sourceMappingURL=PurchaseTaxInvoiceLine.js.map