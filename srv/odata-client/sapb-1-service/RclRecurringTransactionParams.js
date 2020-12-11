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
exports.RclRecurringTransactionParams = exports.RclRecurringTransactionParamsField = exports.createRclRecurringTransactionParams = void 0;
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of RclRecurringTransactionParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RclRecurringTransactionParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RclRecurringTransactionParams) || this;
        /**
         * Representation of the [[RclRecurringTransactionParams.transactionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionId = new core_1.ComplexTypeNumberPropertyField('TransactionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransactionParams.plannedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedDate = new core_1.ComplexTypeDatePropertyField('PlannedDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return RclRecurringTransactionParamsField;
}(core_1.ComplexTypeField));
exports.RclRecurringTransactionParamsField = RclRecurringTransactionParamsField;
var RclRecurringTransactionParams;
(function (RclRecurringTransactionParams) {
    /**
     * Metadata information on all properties of the `RclRecurringTransactionParams` complex type.
     */
    RclRecurringTransactionParams._propertyMetadata = [{
            originalName: 'TransactionID',
            name: 'transactionId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PlannedDate',
            name: 'plannedDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RclRecurringTransactionParams);
    }
    RclRecurringTransactionParams.build = build;
})(RclRecurringTransactionParams = exports.RclRecurringTransactionParams || (exports.RclRecurringTransactionParams = {}));
//# sourceMappingURL=RclRecurringTransactionParams.js.map