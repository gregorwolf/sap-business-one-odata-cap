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
exports.ExpenseTypeParams = exports.ExpenseTypeParamsField = exports.createExpenseTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[ExpenseTypeParams.build]] instead.
 */
function createExpenseTypeParams(json) {
    return ExpenseTypeParams.build(json);
}
exports.createExpenseTypeParams = createExpenseTypeParams;
/**
 * ExpenseTypeParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var ExpenseTypeParamsField = /** @class */ (function (_super) {
    __extends(ExpenseTypeParamsField, _super);
    function ExpenseTypeParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[ExpenseTypeParams.expenseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseType = new v4_1.ComplexTypeStringPropertyField('ExpenseType', _this, 'Edm.String');
        return _this;
    }
    return ExpenseTypeParamsField;
}(v4_1.ComplexTypeField));
exports.ExpenseTypeParamsField = ExpenseTypeParamsField;
var ExpenseTypeParams;
(function (ExpenseTypeParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ExpenseType: function (expenseType) { return ({ expenseType: v4_1.edmToTs(expenseType, 'Edm.String') }); }
        });
    }
    ExpenseTypeParams.build = build;
})(ExpenseTypeParams = exports.ExpenseTypeParams || (exports.ExpenseTypeParams = {}));
//# sourceMappingURL=ExpenseTypeParams.js.map