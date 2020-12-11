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
exports.StockTransferLinesBinAllocation = exports.StockTransferLinesBinAllocationField = exports.createStockTransferLinesBinAllocation = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[StockTransferLinesBinAllocation.build]] instead.
 */
function createStockTransferLinesBinAllocation(json) {
    return StockTransferLinesBinAllocation.build(json);
}
exports.createStockTransferLinesBinAllocation = createStockTransferLinesBinAllocation;
/**
 * StockTransferLinesBinAllocationField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var StockTransferLinesBinAllocationField = /** @class */ (function (_super) {
    __extends(StockTransferLinesBinAllocationField, _super);
    /**
     * Creates an instance of StockTransferLinesBinAllocationField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function StockTransferLinesBinAllocationField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, StockTransferLinesBinAllocation) || this;
        /**
         * Representation of the [[StockTransferLinesBinAllocation.binAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binAbsEntry = new core_1.ComplexTypeNumberPropertyField('BinAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLinesBinAllocation.quantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.quantity = new core_1.ComplexTypeNumberPropertyField('Quantity', _this, 'Edm.Double');
        /**
         * Representation of the [[StockTransferLinesBinAllocation.allowNegativeQuantity]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.allowNegativeQuantity = new core_1.ComplexTypeEnumPropertyField('AllowNegativeQuantity', _this);
        /**
         * Representation of the [[StockTransferLinesBinAllocation.serialAndBatchNumbersBaseLine]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.serialAndBatchNumbersBaseLine = new core_1.ComplexTypeNumberPropertyField('SerialAndBatchNumbersBaseLine', _this, 'Edm.Int32');
        /**
         * Representation of the [[StockTransferLinesBinAllocation.binActionType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.binActionType = new core_1.ComplexTypeEnumPropertyField('BinActionType', _this);
        /**
         * Representation of the [[StockTransferLinesBinAllocation.baseLineNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.baseLineNumber = new core_1.ComplexTypeNumberPropertyField('BaseLineNumber', _this, 'Edm.Int32');
        return _this;
    }
    return StockTransferLinesBinAllocationField;
}(core_1.ComplexTypeField));
exports.StockTransferLinesBinAllocationField = StockTransferLinesBinAllocationField;
var StockTransferLinesBinAllocation;
(function (StockTransferLinesBinAllocation) {
    /**
     * Metadata information on all properties of the `StockTransferLinesBinAllocation` complex type.
     */
    StockTransferLinesBinAllocation._propertyMetadata = [{
            originalName: 'BinAbsEntry',
            name: 'binAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Quantity',
            name: 'quantity',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'AllowNegativeQuantity',
            name: 'allowNegativeQuantity',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'SerialAndBatchNumbersBaseLine',
            name: 'serialAndBatchNumbersBaseLine',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BinActionType',
            name: 'binActionType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BaseLineNumber',
            name: 'baseLineNumber',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, StockTransferLinesBinAllocation);
    }
    StockTransferLinesBinAllocation.build = build;
})(StockTransferLinesBinAllocation = exports.StockTransferLinesBinAllocation || (exports.StockTransferLinesBinAllocation = {}));
//# sourceMappingURL=StockTransferLinesBinAllocation.js.map