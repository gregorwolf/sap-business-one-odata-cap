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
exports.RclRecurringTransaction = exports.RclRecurringTransactionField = exports.createRclRecurringTransaction = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function RclRecurringTransactionField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[RclRecurringTransaction.transactionId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.transactionId = new v4_1.ComplexTypeNumberPropertyField('TransactionID', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransaction.templateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.templateId = new v4_1.ComplexTypeNumberPropertyField('TemplateID', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransaction.instance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.instance = new v4_1.ComplexTypeNumberPropertyField('Instance', _this, 'Edm.Int32');
        /**
         * Representation of the [[RclRecurringTransaction.plannedDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.plannedDate = new v4_1.ComplexTypeDatePropertyField('PlannedDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[RclRecurringTransaction.docType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docType = new v4_1.ComplexTypeStringPropertyField('DocType', _this, 'Edm.String');
        /**
         * Representation of the [[RclRecurringTransaction.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return RclRecurringTransactionField;
}(v4_1.ComplexTypeField));
exports.RclRecurringTransactionField = RclRecurringTransactionField;
var RclRecurringTransaction;
(function (RclRecurringTransaction) {
    function build(json) {
        return v4_1.createComplexType(json, {
            TransactionID: function (transactionId) { return ({ transactionId: v4_1.edmToTs(transactionId, 'Edm.Int32') }); },
            TemplateID: function (templateId) { return ({ templateId: v4_1.edmToTs(templateId, 'Edm.Int32') }); },
            Instance: function (instance) { return ({ instance: v4_1.edmToTs(instance, 'Edm.Int32') }); },
            PlannedDate: function (plannedDate) { return ({ plannedDate: v4_1.edmToTs(plannedDate, 'Edm.DateTimeOffset') }); },
            DocType: function (docType) { return ({ docType: v4_1.edmToTs(docType, 'Edm.String') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); }
        });
    }
    RclRecurringTransaction.build = build;
})(RclRecurringTransaction = exports.RclRecurringTransaction || (exports.RclRecurringTransaction = {}));
//# sourceMappingURL=RclRecurringTransaction.js.map