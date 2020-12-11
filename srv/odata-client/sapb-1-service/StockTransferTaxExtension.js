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
exports.StockTransferTaxExtension = exports.StockTransferTaxExtensionField = exports.createStockTransferTaxExtension = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[StockTransferTaxExtension.build]] instead.
 */
function createStockTransferTaxExtension(json) {
    return StockTransferTaxExtension.build(json);
}
exports.createStockTransferTaxExtension = createStockTransferTaxExtension;
/**
 * StockTransferTaxExtensionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var StockTransferTaxExtensionField = /** @class */ (function (_super) {
    __extends(StockTransferTaxExtensionField, _super);
    /**
     * Creates an instance of StockTransferTaxExtensionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function StockTransferTaxExtensionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, StockTransferTaxExtension) || this;
        /**
         * Representation of the [[StockTransferTaxExtension.supportVat]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.supportVat = new core_1.ComplexTypeEnumPropertyField('SupportVAT', _this);
        /**
         * Representation of the [[StockTransferTaxExtension.formNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.formNumber = new core_1.ComplexTypeStringPropertyField('FormNumber', _this, 'Edm.String');
        /**
         * Representation of the [[StockTransferTaxExtension.transactionCategory]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionCategory = new core_1.ComplexTypeStringPropertyField('TransactionCategory', _this, 'Edm.String');
        return _this;
    }
    return StockTransferTaxExtensionField;
}(core_1.ComplexTypeField));
exports.StockTransferTaxExtensionField = StockTransferTaxExtensionField;
var StockTransferTaxExtension;
(function (StockTransferTaxExtension) {
    /**
     * Metadata information on all properties of the `StockTransferTaxExtension` complex type.
     */
    StockTransferTaxExtension._propertyMetadata = [{
            originalName: 'SupportVAT',
            name: 'supportVat',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FormNumber',
            name: 'formNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'TransactionCategory',
            name: 'transactionCategory',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, StockTransferTaxExtension);
    }
    StockTransferTaxExtension.build = build;
})(StockTransferTaxExtension = exports.StockTransferTaxExtension || (exports.StockTransferTaxExtension = {}));
//# sourceMappingURL=StockTransferTaxExtension.js.map