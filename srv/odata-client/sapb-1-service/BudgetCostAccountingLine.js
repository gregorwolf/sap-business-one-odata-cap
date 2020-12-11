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
exports.BudgetCostAccountingLine = exports.BudgetCostAccountingLineField = exports.createBudgetCostAccountingLine = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BudgetCostAccountingLine.build]] instead.
 */
function createBudgetCostAccountingLine(json) {
    return BudgetCostAccountingLine.build(json);
}
exports.createBudgetCostAccountingLine = createBudgetCostAccountingLine;
/**
 * BudgetCostAccountingLineField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BudgetCostAccountingLineField = /** @class */ (function (_super) {
    __extends(BudgetCostAccountingLineField, _super);
    /**
     * Creates an instance of BudgetCostAccountingLineField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BudgetCostAccountingLineField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BudgetCostAccountingLine) || this;
        /**
         * Representation of the [[BudgetCostAccountingLine.distrRuleCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distrRuleCode = new core_1.ComplexTypeStringPropertyField('DistrRuleCode', _this, 'Edm.String');
        /**
         * Representation of the [[BudgetCostAccountingLine.dimension]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dimension = new core_1.ComplexTypeNumberPropertyField('Dimension', _this, 'Edm.Int32');
        /**
         * Representation of the [[BudgetCostAccountingLine.distrRuleDebitLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distrRuleDebitLc = new core_1.ComplexTypeNumberPropertyField('DistrRuleDebitLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetCostAccountingLine.distrRuleDebitSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distrRuleDebitSc = new core_1.ComplexTypeNumberPropertyField('DistrRuleDebitSC', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetCostAccountingLine.distrRuleCreditLc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distrRuleCreditLc = new core_1.ComplexTypeNumberPropertyField('DistrRuleCreditLC', _this, 'Edm.Double');
        /**
         * Representation of the [[BudgetCostAccountingLine.distrRuleCreditSc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.distrRuleCreditSc = new core_1.ComplexTypeNumberPropertyField('DistrRuleCreditSC', _this, 'Edm.Double');
        return _this;
    }
    return BudgetCostAccountingLineField;
}(core_1.ComplexTypeField));
exports.BudgetCostAccountingLineField = BudgetCostAccountingLineField;
var BudgetCostAccountingLine;
(function (BudgetCostAccountingLine) {
    /**
     * Metadata information on all properties of the `BudgetCostAccountingLine` complex type.
     */
    BudgetCostAccountingLine._propertyMetadata = [{
            originalName: 'DistrRuleCode',
            name: 'distrRuleCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Dimension',
            name: 'dimension',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DistrRuleDebitLC',
            name: 'distrRuleDebitLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DistrRuleDebitSC',
            name: 'distrRuleDebitSc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DistrRuleCreditLC',
            name: 'distrRuleCreditLc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'DistrRuleCreditSC',
            name: 'distrRuleCreditSc',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BudgetCostAccountingLine);
    }
    BudgetCostAccountingLine.build = build;
})(BudgetCostAccountingLine = exports.BudgetCostAccountingLine || (exports.BudgetCostAccountingLine = {}));
//# sourceMappingURL=BudgetCostAccountingLine.js.map