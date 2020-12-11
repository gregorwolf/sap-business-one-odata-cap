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
exports.RclRecurringTransaction = exports.RclRecurringTransactionField = exports.createRclRecurringTransaction = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[RclRecurringTransaction.build]] instead.
 */
function createRclRecurringTransaction(json) {
    return RclRecurringTransaction.build(json);
}
exports.createRclRecurringTransaction = createRclRecurringTransaction;
/**
 * RclRecurringTransactionField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var RclRecurringTransactionField = /** @class */ (function (_super) {
    __extends(RclRecurringTransactionField, _super);
    /**
     * Creates an instance of RclRecurringTransactionField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function RclRecurringTransactionField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, RclRecurringTransaction) || this;
        /**
         * Representation of the [[RclRecurringTransaction.transactionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionId = new core_1.ComplexTypeNumberPropertyField('TransactionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransaction.templateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.templateId = new core_1.ComplexTypeNumberPropertyField('TemplateID', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransaction.instance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instance = new core_1.ComplexTypeNumberPropertyField('Instance', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransaction.plannedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedDate = new core_1.ComplexTypeDatePropertyField('PlannedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RclRecurringTransaction.status]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.status = new core_1.ComplexTypeEnumPropertyField('Status', _this);
        /**
         * Representation of the [[RclRecurringTransaction.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new core_1.ComplexTypeStringPropertyField('DocType', _this, 'Edm.String');
        /**
         * Representation of the [[RclRecurringTransaction.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new core_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return RclRecurringTransactionField;
}(core_1.ComplexTypeField));
exports.RclRecurringTransactionField = RclRecurringTransactionField;
var RclRecurringTransaction;
(function (RclRecurringTransaction) {
    /**
     * Metadata information on all properties of the `RclRecurringTransaction` complex type.
     */
    RclRecurringTransaction._propertyMetadata = [{
            originalName: 'TransactionID',
            name: 'transactionId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'TemplateID',
            name: 'templateId',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Instance',
            name: 'instance',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'PlannedDate',
            name: 'plannedDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Status',
            name: 'status',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'DocType',
            name: 'docType',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'DocEntry',
            name: 'docEntry',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, RclRecurringTransaction);
    }
    RclRecurringTransaction.build = build;
})(RclRecurringTransaction = exports.RclRecurringTransaction || (exports.RclRecurringTransaction = {}));
//# sourceMappingURL=RclRecurringTransaction.js.map