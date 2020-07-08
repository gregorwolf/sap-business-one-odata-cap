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
exports.ServiceCallInventoryExpense = exports.ServiceCallInventoryExpenseField = exports.createServiceCallInventoryExpense = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ServiceCallInventoryExpense.build]] instead.
 */
function createServiceCallInventoryExpense(json) {
    return ServiceCallInventoryExpense.build(json);
}
exports.createServiceCallInventoryExpense = createServiceCallInventoryExpense;
/**
 * ServiceCallInventoryExpenseField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ServiceCallInventoryExpenseField = /** @class */ (function (_super) {
    __extends(ServiceCallInventoryExpenseField, _super);
    function ServiceCallInventoryExpenseField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ServiceCallInventoryExpense.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallInventoryExpense.documentPostingDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentPostingDate = new v4_1.ComplexTypeDatePropertyField('DocumentPostingDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[ServiceCallInventoryExpense.documentNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.documentNumber = new v4_1.ComplexTypeNumberPropertyField('DocumentNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[ServiceCallInventoryExpense.docEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.docEntry = new v4_1.ComplexTypeNumberPropertyField('DocEntry', _this, 'Edm.Int32');
        return _this;
    }
    return ServiceCallInventoryExpenseField;
}(v4_1.ComplexTypeField));
exports.ServiceCallInventoryExpenseField = ServiceCallInventoryExpenseField;
var ServiceCallInventoryExpense;
(function (ServiceCallInventoryExpense) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            DocumentPostingDate: function (documentPostingDate) { return ({ documentPostingDate: v4_1.edmToTs(documentPostingDate, 'Edm.DateTimeOffset') }); },
            DocumentNumber: function (documentNumber) { return ({ documentNumber: v4_1.edmToTs(documentNumber, 'Edm.Int32') }); },
            DocEntry: function (docEntry) { return ({ docEntry: v4_1.edmToTs(docEntry, 'Edm.Int32') }); }
        });
    }
    ServiceCallInventoryExpense.build = build;
})(ServiceCallInventoryExpense = exports.ServiceCallInventoryExpense || (exports.ServiceCallInventoryExpense = {}));
//# sourceMappingURL=ServiceCallInventoryExpense.js.map