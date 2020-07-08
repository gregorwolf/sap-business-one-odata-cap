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
exports.RclRecurringTransactionParams = exports.RclRecurringTransactionParamsField = exports.createRclRecurringTransactionParams = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransactionParams.build]] instead.
 */
function createRclRecurringTransactionParams(json) {
    return RclRecurringTransactionParams.build(json);
}
exports.createRclRecurringTransactionParams = createRclRecurringTransactionParams;
/**
 * RclRecurringTransactionParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RclRecurringTransactionParamsField = /** @class */ (function (_super) {
    __extends(RclRecurringTransactionParamsField, _super);
    function RclRecurringTransactionParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RclRecurringTransactionParams.transactionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionId = new v4_1.ComplexTypeNumberPropertyField('TransactionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransactionParams.plannedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedDate = new v4_1.ComplexTypeDatePropertyField('PlannedDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return RclRecurringTransactionParamsField;
}(v4_1.ComplexTypeField));
exports.RclRecurringTransactionParamsField = RclRecurringTransactionParamsField;
var RclRecurringTransactionParams;
(function (RclRecurringTransactionParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransactionID: function (transactionId) { return ({ transactionId: v4_1.edmToTs(transactionId, 'Edm.Int32') }); },
            PlannedDate: function (plannedDate) { return ({ plannedDate: v4_1.edmToTs(plannedDate, 'Edm.DateTimeOffset') }); }
        });
    }
    RclRecurringTransactionParams.build = build;
})(RclRecurringTransactionParams = exports.RclRecurringTransactionParams || (exports.RclRecurringTransactionParams = {}));
//# sourceMappingURL=RclRecurringTransactionParams.js.map