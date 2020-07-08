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
exports.SpecialPriceDataArea = exports.SpecialPriceDataAreaField = exports.createSpecialPriceDataArea = void 0;
var SpecialPriceQuantityArea_1 = require("./SpecialPriceQuantityArea");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SpecialPriceDataArea.build]] instead.
 */
function createSpecialPriceDataArea(json) {
    return SpecialPriceDataArea.build(json);
}
exports.createSpecialPriceDataArea = createSpecialPriceDataArea;
/**
 * SpecialPriceDataAreaField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SpecialPriceDataAreaField = /** @class */ (function (_super) {
    __extends(SpecialPriceDataAreaField, _super);
    function SpecialPriceDataAreaField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SpecialPriceDataArea.priceCurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceCurrency = new v4_1.ComplexTypeStringPropertyField('PriceCurrency', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceDataArea.dateto]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateto = new v4_1.ComplexTypeDatePropertyField('Dateto', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SpecialPriceDataArea.discount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.discount = new v4_1.ComplexTypeNumberPropertyField('Discount', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceDataArea.specialPrice]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialPrice = new v4_1.ComplexTypeNumberPropertyField('SpecialPrice', _this, 'Edm.Double');
        /**
         * Representation of the [[SpecialPriceDataArea.dateFrom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dateFrom = new v4_1.ComplexTypeDatePropertyField('DateFrom', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SpecialPriceDataArea.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceDataArea.priceListNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.priceListNo = new v4_1.ComplexTypeNumberPropertyField('PriceListNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceDataArea.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[SpecialPriceDataArea.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[SpecialPriceDataArea.specialPriceQuantityAreas]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.specialPriceQuantityAreas = new SpecialPriceQuantityArea_1.SpecialPriceQuantityAreaField('SpecialPriceQuantityAreas', _this);
        return _this;
    }
    return SpecialPriceDataAreaField;
}(v4_1.ComplexTypeField));
exports.SpecialPriceDataAreaField = SpecialPriceDataAreaField;
var SpecialPriceDataArea;
(function (SpecialPriceDataArea) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PriceCurrency: function (priceCurrency) { return ({ priceCurrency: v4_1.edmToTs(priceCurrency, 'Edm.String') }); },
            Dateto: function (dateto) { return ({ dateto: v4_1.edmToTs(dateto, 'Edm.DateTimeOffset') }); },
            Discount: function (discount) { return ({ discount: v4_1.edmToTs(discount, 'Edm.Double') }); },
            SpecialPrice: function (specialPrice) { return ({ specialPrice: v4_1.edmToTs(specialPrice, 'Edm.Double') }); },
            DateFrom: function (dateFrom) { return ({ dateFrom: v4_1.edmToTs(dateFrom, 'Edm.DateTimeOffset') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            PriceListNo: function (priceListNo) { return ({ priceListNo: v4_1.edmToTs(priceListNo, 'Edm.Int32') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            SpecialPriceQuantityAreas: function (specialPriceQuantityAreas) { return ({ specialPriceQuantityAreas: SpecialPriceQuantityArea_1.SpecialPriceQuantityArea.build(specialPriceQuantityAreas) }); }
        });
    }
    SpecialPriceDataArea.build = build;
})(SpecialPriceDataArea = exports.SpecialPriceDataArea || (exports.SpecialPriceDataArea = {}));
//# sourceMappingURL=SpecialPriceDataArea.js.map