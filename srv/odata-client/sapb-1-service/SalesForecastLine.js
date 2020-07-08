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
exports.SalesForecastLine = exports.SalesForecastLineField = exports.createSalesForecastLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[SalesForecastLine.build]] instead.
 */
function createSalesForecastLine(json) {
    return SalesForecastLine.build(json);
}
exports.createSalesForecastLine = createSalesForecastLine;
/**
 * SalesForecastLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var SalesForecastLineField = /** @class */ (function (_super) {
    __extends(SalesForecastLineField, _super);
    function SalesForecastLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[SalesForecastLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new v4_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesForecastLine.forecastedDay]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.forecastedDay = new v4_1.ComplexTypeDatePropertyField('ForecastedDay', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SalesForecastLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new v4_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[SalesForecastLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new v4_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        return _this;
    }
    return SalesForecastLineField;
}(v4_1.ComplexTypeField));
exports.SalesForecastLineField = SalesForecastLineField;
var SalesForecastLine;
(function (SalesForecastLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Quantity: function (quantity) { return ({ quantity: v4_1.edmToTs(quantity, 'Edm.Double') }); },
            ForecastedDay: function (forecastedDay) { return ({ forecastedDay: v4_1.edmToTs(forecastedDay, 'Edm.DateTimeOffset') }); },
            ItemNo: function (itemNo) { return ({ itemNo: v4_1.edmToTs(itemNo, 'Edm.String') }); },
            Warehouse: function (warehouse) { return ({ warehouse: v4_1.edmToTs(warehouse, 'Edm.String') }); }
        });
    }
    SalesForecastLine.build = build;
})(SalesForecastLine = exports.SalesForecastLine || (exports.SalesForecastLine = {}));
//# sourceMappingURL=SalesForecastLine.js.map