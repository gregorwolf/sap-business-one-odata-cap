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
exports.PurchaseTaxInvoiceLine = exports.PurchaseTaxInvoiceLineField = exports.createPurchaseTaxInvoiceLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function PurchaseTaxInvoiceLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PurchaseTaxInvoiceLine.refEntry1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refEntry1 = new v4_1.ComplexTypeNumberPropertyField('RefEntry1', _this, 'Edm.Int32');
        /**
         * Representation of the [[PurchaseTaxInvoiceLine.refEntry2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.refEntry2 = new v4_1.ComplexTypeNumberPropertyField('RefEntry2', _this, 'Edm.Int32');
        return _this;
    }
    return PurchaseTaxInvoiceLineField;
}(v4_1.ComplexTypeField));
exports.PurchaseTaxInvoiceLineField = PurchaseTaxInvoiceLineField;
var PurchaseTaxInvoiceLine;
(function (PurchaseTaxInvoiceLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            RefEntry1: function (refEntry1) { return ({ refEntry1: v4_1.edmToTs(refEntry1, 'Edm.Int32') }); },
            RefEntry2: function (refEntry2) { return ({ refEntry2: v4_1.edmToTs(refEntry2, 'Edm.Int32') }); }
        });
    }
    PurchaseTaxInvoiceLine.build = build;
})(PurchaseTaxInvoiceLine = exports.PurchaseTaxInvoiceLine || (exports.PurchaseTaxInvoiceLine = {}));
//# sourceMappingURL=PurchaseTaxInvoiceLine.js.map