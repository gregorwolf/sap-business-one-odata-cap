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
exports.BudgetLine = exports.BudgetLineField = exports.createBudgetLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of BudgetLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BudgetLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BudgetLine) || this;
        /**
         * Representation of the [[BudgetLine.precentOfAnnualBudgetAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.precentOfAnnualBudgetAmount = new core_1.ComplexTypeNumberPropertyField('PrecentOfAnnualBudgetAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.rowDetails]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowDetails = new core_1.ComplexTypeStringPropertyField('RowDetails', _this, 'Edm.String');
        /**
         * Representation of the [[BudgetLine.rowNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.rowNumber = new core_1.ComplexTypeNumberPropertyField('RowNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[BudgetLine.futExpenSysDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenSysDebit = new core_1.ComplexTypeNumberPropertyField('FutExpenSysDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futExpenDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenDebit = new core_1.ComplexTypeNumberPropertyField('FutExpenDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futExpenSysCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenSysCredit = new core_1.ComplexTypeNumberPropertyField('FutExpenSysCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futExpenCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futExpenCredit = new core_1.ComplexTypeNumberPropertyField('FutExpenCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futIncomesSysCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futIncomesSysCredit = new core_1.ComplexTypeNumberPropertyField('FutIncomesSysCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futIncomesSysDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futIncomesSysDebit = new core_1.ComplexTypeNumberPropertyField('FutIncomesSysDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.futIncomesCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futIncomesCredit = new core_1.ComplexTypeNumberPropertyField('FutIncomesCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetSysTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetSysTotDebit = new core_1.ComplexTypeNumberPropertyField('BudgetSysTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balSysTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balSysTotDebit = new core_1.ComplexTypeNumberPropertyField('BalSysTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balTotDebit = new core_1.ComplexTypeNumberPropertyField('BalTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetTotCredit = new core_1.ComplexTypeNumberPropertyField('BudgetTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetSysTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetSysTotCredit = new core_1.ComplexTypeNumberPropertyField('BudgetSysTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetTotDebit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetTotDebit = new core_1.ComplexTypeNumberPropertyField('BudgetTotDebit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balSysTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balSysTotCredit = new core_1.ComplexTypeNumberPropertyField('BalSysTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.balTotCredit]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.balTotCredit = new core_1.ComplexTypeNumberPropertyField('BalTotCredit', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetLine.budgetKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.budgetKey = new core_1.ComplexTypeNumberPropertyField('BudgetKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BudgetLine.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[BudgetLine.futureIncomeDeb]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.futureIncomeDeb = new core_1.ComplexTypeNumberPropertyField('FutureIncomeDeb', _this, 'Edm.Double');
        return _this;
    }
    return BudgetLineField;
}(core_1.ComplexTypeField));
exports.BudgetLineField = BudgetLineField;
var BudgetLine;
(function (BudgetLine) {
    /**
     * Metadata information on all properties of the `BudgetLine` complex type.
     */
    BudgetLine._propertyMetadata = [{
            originalName: 'PrecentOfAnnualBudgetAmount',
            name: 'precentOfAnnualBudgetAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'RowDetails',
            name: 'rowDetails',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'RowNumber',
            name: 'rowNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'FutExpenSysDebit',
            name: 'futExpenSysDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FutExpenDebit',
            name: 'futExpenDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FutExpenSysCredit',
            name: 'futExpenSysCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FutExpenCredit',
            name: 'futExpenCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FutIncomesSysCredit',
            name: 'futIncomesSysCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FutIncomesSysDebit',
            name: 'futIncomesSysDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'FutIncomesCredit',
            name: 'futIncomesCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BudgetSysTotDebit',
            name: 'budgetSysTotDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BalSysTotDebit',
            name: 'balSysTotDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BalTotDebit',
            name: 'balTotDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BudgetTotCredit',
            name: 'budgetTotCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BudgetSysTotCredit',
            name: 'budgetSysTotCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BudgetTotDebit',
            name: 'budgetTotDebit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BalSysTotCredit',
            name: 'balSysTotCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BalTotCredit',
            name: 'balTotCredit',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'BudgetKey',
            name: 'budgetKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'FutureIncomeDeb',
            name: 'futureIncomeDeb',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BudgetLine);
    }
    BudgetLine.build = build;
})(BudgetLine = exports.BudgetLine || (exports.BudgetLine = {}));
//# sourceMappingURL=BudgetLine.js.map