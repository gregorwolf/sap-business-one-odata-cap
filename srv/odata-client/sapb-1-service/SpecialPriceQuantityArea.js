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
exports.SpecialPriceQuantityArea = exports.SpecialPriceQuantityAreaField = exports.createSpecialPriceQuantityArea = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceQuantityArea.build]] instead.
 */
function createSpecialPriceQuantityArea(json) {
    return SpecialPriceQuantityArea.build(json);
}
exports.createSpecialPriceQuantityArea = createSpecialPriceQuantityArea;
/**
 * SpecialPriceQuantityAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SpecialPriceQuantityAreaField = /** @class */ (function (_super) {
    __extends(SpecialPriceQuantityAreaField, _super);
    function SpecialPriceQuantityAreaField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SpecialPriceQuantityArea.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceQuantityArea.spdaRowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.spdaRowNumber = new v4_1.ComplexTypeNumberPropertyField('SPDARowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceQuantityArea.specialPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialPrice = new v4_1.ComplexTypeNumberPropertyField('SpecialPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceQuantityArea.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceQuantityArea.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceQuantityArea.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceQuantityArea.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new v4_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceQuantityArea.discountin]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discountin = new v4_1.ComplexTypeNumberPropertyField('Discountin', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceQuantityArea.uoMEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.uoMEntry = new v4_1.ComplexTypeNumberPropertyField('UoMEntry', _this, 'Edm.Int32');
        return _this;
    }
    return SpecialPriceQuantityAreaField;
}(v4_1.ComplexTypeField));
exports.SpecialPriceQuantityAreaField = SpecialPriceQuantityAreaField;
var SpecialPriceQuantityArea;
(function (SpecialPriceQuantityArea) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            SPDARowNumber: function (spdaRowNumber) { return ({ spdaRowNumber: v4_1.edmToTs(spdaRowNumber, 'Edm.Int32') }); },
            SpecialPrice: function (specialPrice) { return ({ specialPrice: v4_1.edmToTs(specialPrice, 'Edm.Double') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            PriceCurrency: function (priceCurrency) { return ({ priceCurrency: v4_1.edmToTs(priceCurrency, 'Edm.String') }); },
            Discountin: function (discountin) { return ({ discountin: v4_1.edmToTs(discountin, 'Edm.Double') }); },
            UoMEntry: function (uoMEntry) { return ({ uoMEntry: v4_1.edmToTs(uoMEntry, 'Edm.Int32') }); }
        });
    }
    SpecialPriceQuantityArea.build = build;
})(SpecialPriceQuantityArea = exports.SpecialPriceQuantityArea || (exports.SpecialPriceQuantityArea = {}));
//# sourceMappingURL=SpecialPriceQuantityArea.js.map