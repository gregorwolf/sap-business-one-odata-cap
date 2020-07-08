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
exports.BudgetLine = exports.BudgetLineField = exports.createBudgetLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BudgetLine.build]] instead.
 */
function createBudgetLine(json) {
    return BudgetLine.build(json);
}
exports.createBudgetLine = createBudgetLine;
/**
 * BudgetLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BudgetLineField = /** @class */ (function (_super) {
    __extends(BudgetLineField, _super);
    function BudgetLineField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BudgetLine.precentOfAnnualBudgetAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.precentOfAnnualBudgetAmount = new v4_1.ComplexTypeNumberPropertyField('PrecentOfAnnualBudgetAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.rowDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowDetails = new v4_1.ComplexTypeStringPropertyField('RowDetails', _this, 'Edm.String');
        /**
         * Representation of the [[BudgetLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new v4_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BudgetLine.futExpenSysDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenSysDebit = new v4_1.ComplexTypeNumberPropertyField('FutExpenSysDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futExpenDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenDebit = new v4_1.ComplexTypeNumberPropertyField('FutExpenDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futExpenSysCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenSysCredit = new v4_1.ComplexTypeNumberPropertyField('FutExpenSysCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futExpenCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenCredit = new v4_1.ComplexTypeNumberPropertyField('FutExpenCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futIncomesSysCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futIncomesSysCredit = new v4_1.ComplexTypeNumberPropertyField('FutIncomesSysCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futIncomesSysDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futIncomesSysDebit = new v4_1.ComplexTypeNumberPropertyField('FutIncomesSysDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futIncomesCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futIncomesCredit = new v4_1.ComplexTypeNumberPropertyField('FutIncomesCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetSysTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetSysTotDebit = new v4_1.ComplexTypeNumberPropertyField('BudgetSysTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balSysTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balSysTotDebit = new v4_1.ComplexTypeNumberPropertyField('BalSysTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balTotDebit = new v4_1.ComplexTypeNumberPropertyField('BalTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetTotCredit = new v4_1.ComplexTypeNumberPropertyField('BudgetTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetSysTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetSysTotCredit = new v4_1.ComplexTypeNumberPropertyField('BudgetSysTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetTotDebit = new v4_1.ComplexTypeNumberPropertyField('BudgetTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balSysTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balSysTotCredit = new v4_1.ComplexTypeNumberPropertyField('BalSysTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balTotCredit = new v4_1.ComplexTypeNumberPropertyField('BalTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetKey = new v4_1.ComplexTypeNumberPropertyField('BudgetKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BudgetLine.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[BudgetLine.futureIncomeDeb]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futureIncomeDeb = new v4_1.ComplexTypeNumberPropertyField('FutureIncomeDeb', _this, 'Edm.Double');
        return _this;
    }
    return BudgetLineField;
}(v4_1.ComplexTypeField));
exports.BudgetLineField = BudgetLineField;
var BudgetLine;
(function (BudgetLine) {
    function build(json) {
        return v4_1.createComplexType(json, {
            PrecentOfAnnualBudgetAmount: function (precentOfAnnualBudgetAmount) { return ({ precentOfAnnualBudgetAmount: v4_1.edmToTs(precentOfAnnualBudgetAmount, 'Edm.Double') }); },
            RowDetails: function (rowDetails) { return ({ rowDetails: v4_1.edmToTs(rowDetails, 'Edm.String') }); },
            RowNumber: function (rowNumber) { return ({ rowNumber: v4_1.edmToTs(rowNumber, 'Edm.Int32') }); },
            FutExpenSysDebit: function (futExpenSysDebit) { return ({ futExpenSysDebit: v4_1.edmToTs(futExpenSysDebit, 'Edm.Double') }); },
            FutExpenDebit: function (futExpenDebit) { return ({ futExpenDebit: v4_1.edmToTs(futExpenDebit, 'Edm.Double') }); },
            FutExpenSysCredit: function (futExpenSysCredit) { return ({ futExpenSysCredit: v4_1.edmToTs(futExpenSysCredit, 'Edm.Double') }); },
            FutExpenCredit: function (futExpenCredit) { return ({ futExpenCredit: v4_1.edmToTs(futExpenCredit, 'Edm.Double') }); },
            FutIncomesSysCredit: function (futIncomesSysCredit) { return ({ futIncomesSysCredit: v4_1.edmToTs(futIncomesSysCredit, 'Edm.Double') }); },
            FutIncomesSysDebit: function (futIncomesSysDebit) { return ({ futIncomesSysDebit: v4_1.edmToTs(futIncomesSysDebit, 'Edm.Double') }); },
            FutIncomesCredit: function (futIncomesCredit) { return ({ futIncomesCredit: v4_1.edmToTs(futIncomesCredit, 'Edm.Double') }); },
            BudgetSysTotDebit: function (budgetSysTotDebit) { return ({ budgetSysTotDebit: v4_1.edmToTs(budgetSysTotDebit, 'Edm.Double') }); },
            BalSysTotDebit: function (balSysTotDebit) { return ({ balSysTotDebit: v4_1.edmToTs(balSysTotDebit, 'Edm.Double') }); },
            BalTotDebit: function (balTotDebit) { return ({ balTotDebit: v4_1.edmToTs(balTotDebit, 'Edm.Double') }); },
            BudgetTotCredit: function (budgetTotCredit) { return ({ budgetTotCredit: v4_1.edmToTs(budgetTotCredit, 'Edm.Double') }); },
            BudgetSysTotCredit: function (budgetSysTotCredit) { return ({ budgetSysTotCredit: v4_1.edmToTs(budgetSysTotCredit, 'Edm.Double') }); },
            BudgetTotDebit: function (budgetTotDebit) { return ({ budgetTotDebit: v4_1.edmToTs(budgetTotDebit, 'Edm.Double') }); },
            BalSysTotCredit: function (balSysTotCredit) { return ({ balSysTotCredit: v4_1.edmToTs(balSysTotCredit, 'Edm.Double') }); },
            BalTotCredit: function (balTotCredit) { return ({ balTotCredit: v4_1.edmToTs(balTotCredit, 'Edm.Double') }); },
            BudgetKey: function (budgetKey) { return ({ budgetKey: v4_1.edmToTs(budgetKey, 'Edm.Int32') }); },
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            FutureIncomeDeb: function (futureIncomeDeb) { return ({ futureIncomeDeb: v4_1.edmToTs(futureIncomeDeb, 'Edm.Double') }); }
        });
    }
    BudgetLine.build = build;
})(BudgetLine = exports.BudgetLine || (exports.BudgetLine = {}));
//# sourceMappingURL=BudgetLine.js.map