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
exports.BillOfExchangeTransactionLine = exports.BillOfExchangeTransactionLineField = exports.createBillOfExchangeTransactionLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransactionLine.build]] instead.
 */
function createBillOfExchangeTransactionLine(json) {
    return BillOfExchangeTransactionLine.build(json);
}
exports.createBillOfExchangeTransactionLine = createBillOfExchangeTransactionLine;
/**
 * BillOfExchangeTransactionLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeTransactionLineField = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransactionLineField, _super);
    /**
     * Creates an instance of BillOfExchangeTransactionLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BillOfExchangeTransactionLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BillOfExchangeTransactionLine) || this;
        /**
         * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeNo = new core_1.ComplexTypeNumberPropertyField('BillOfExchangeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeType = new core_1.ComplexTypeEnumPropertyField('BillOfExchangeType', _this);
        /**
         * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeDueDate = new core_1.ComplexTypeDatePropertyField('BillOfExchangeDueDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return BillOfExchangeTransactionLineField;
}(core_1.ComplexTypeField));
exports.BillOfExchangeTransactionLineField = BillOfExchangeTransactionLineField;
var BillOfExchangeTransactionLine;
(function (BillOfExchangeTransactionLine) {
    /**
     * Metadata information on all properties of the `BillOfExchangeTransactionLine` complex type.
     */
    BillOfExchangeTransactionLine._propertyMetadata = [{
            originalName: 'BillOfExchangeNo',
            name: 'billOfExchangeNo',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BillOfExchangeType',
            name: 'billOfExchangeType',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'BillOfExchangeDueDate',
            name: 'billOfExchangeDueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BillOfExchangeTransactionLine);
    }
    BillOfExchangeTransactionLine.build = build;
})(BillOfExchangeTransactionLine = exports.BillOfExchangeTransactionLine || (exports.BillOfExchangeTransactionLine = {}));
//# sourceMappingURL=BillOfExchangeTransactionLine.js.map