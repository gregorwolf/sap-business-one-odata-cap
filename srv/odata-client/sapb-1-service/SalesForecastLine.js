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
exports.SalesForecastLine = exports.SalesForecastLineField = exports.createSalesForecastLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of SalesForecastLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function SalesForecastLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, SalesForecastLine) || this;
        /**
         * Representation of the [[SalesForecastLine.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[SalesForecastLine.forecastedDay]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.forecastedDay = new core_1.ComplexTypeDatePropertyField('ForecastedDay', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[SalesForecastLine.itemNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.itemNo = new core_1.ComplexTypeStringPropertyField('ItemNo', _this, 'Edm.String');
        /**
         * Representation of the [[SalesForecastLine.warehouse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.warehouse = new core_1.ComplexTypeStringPropertyField('Warehouse', _this, 'Edm.String');
        return _this;
    }
    return SalesForecastLineField;
}(core_1.ComplexTypeField));
exports.SalesForecastLineField = SalesForecastLineField;
var SalesForecastLine;
(function (SalesForecastLine) {
    /**
     * Metadata information on all properties of the `SalesForecastLine` complex type.
     */
    SalesForecastLine._propertyMetadata = [{
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ForecastedDay',
            name: 'forecastedDay',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'ItemNo',
            name: 'itemNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Warehouse',
            name: 'warehouse',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, SalesForecastLine);
    }
    SalesForecastLine.build = build;
})(SalesForecastLine = exports.SalesForecastLine || (exports.SalesForecastLine = {}));
//# sourceMappingURL=SalesForecastLine.js.map