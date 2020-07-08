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
exports.BillOfExchangeTransactionLine = exports.BillOfExchangeTransactionLineField = exports.createBillOfExchangeTransactionLine = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function BillOfExchangeTransactionLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeNo = new v4_1.ComplexTypeNumberPropertyField('BillOfExchangeNo', _this, 'Edm.Int32');
        /**
         * Representation of the [[BillOfExchangeTransactionLine.billOfExchangeDueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.billOfExchangeDueDate = new v4_1.ComplexTypeDatePropertyField('BillOfExchangeDueDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return BillOfExchangeTransactionLineField;
}(v4_1.ComplexTypeField));
exports.BillOfExchangeTransactionLineField = BillOfExchangeTransactionLineField;
var BillOfExchangeTransactionLine;
(function (BillOfExchangeTransactionLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            BillOfExchangeNo: function (billOfExchangeNo) { return ({ billOfExchangeNo: v4_1.edmToTs(billOfExchangeNo, 'Edm.Int32') }); },
            BillOfExchangeDueDate: function (billOfExchangeDueDate) { return ({ billOfExchangeDueDate: v4_1.edmToTs(billOfExchangeDueDate, 'Edm.DateTimeOffset') }); }
        });
    }
    BillOfExchangeTransactionLine.build = build;
})(BillOfExchangeTransactionLine = exports.BillOfExchangeTransactionLine || (exports.BillOfExchangeTransactionLine = {}));
//# sourceMappingURL=BillOfExchangeTransactionLine.js.map