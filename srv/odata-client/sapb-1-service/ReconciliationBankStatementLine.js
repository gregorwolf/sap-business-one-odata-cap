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
exports.ReconciliationBankStatementLine = exports.ReconciliationBankStatementLineField = exports.createReconciliationBankStatementLine = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[ReconciliationBankStatementLine.build]] instead.
 */
function createReconciliationBankStatementLine(json) {
    return ReconciliationBankStatementLine.build(json);
}
exports.createReconciliationBankStatementLine = createReconciliationBankStatementLine;
/**
 * ReconciliationBankStatementLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ReconciliationBankStatementLineField = /** @class */ (function (_super) {
    __extends(ReconciliationBankStatementLineField, _super);
    /**
     * Creates an instance of ReconciliationBankStatementLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ReconciliationBankStatementLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ReconciliationBankStatementLine) || this;
        /**
         * Representation of the [[ReconciliationBankStatementLine.bankStatementAccountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankStatementAccountCode = new core_1.ComplexTypeStringPropertyField('BankStatementAccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationBankStatementLine.sequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequence = new core_1.ComplexTypeNumberPropertyField('Sequence', _this, 'Edm.Int32');
        /**
         * Representation of the [[ReconciliationBankStatementLine.date]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.date = new core_1.ComplexTypeDatePropertyField('Date', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ReconciliationBankStatementLine.ref1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ref1 = new core_1.ComplexTypeStringPropertyField('Ref1', _this, 'Edm.String');
        /**
         * Representation of the [[ReconciliationBankStatementLine.amount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.amount = new core_1.ComplexTypeNumberPropertyField('Amount', _this, 'Edm.Double');
        /**
         * Representation of the [[ReconciliationBankStatementLine.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        return _this;
    }
    return ReconciliationBankStatementLineField;
}(core_1.ComplexTypeField));
exports.ReconciliationBankStatementLineField = ReconciliationBankStatementLineField;
var ReconciliationBankStatementLine;
(function (ReconciliationBankStatementLine) {
    /**
     * Metadata information on all properties of the `ReconciliationBankStatementLine` complex type.
     */
    ReconciliationBankStatementLine._propertyMetadata = [{
            originalName: 'BankStatementAccountCode',
            name: 'bankStatementAccountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Sequence',
            name: 'sequence',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'Date',
            name: 'date',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'Ref1',
            name: 'ref1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Amount',
            name: 'amount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ReconciliationBankStatementLine);
    }
    ReconciliationBankStatementLine.build = build;
})(ReconciliationBankStatementLine = exports.ReconciliationBankStatementLine || (exports.ReconciliationBankStatementLine = {}));
//# sourceMappingURL=ReconciliationBankStatementLine.js.map