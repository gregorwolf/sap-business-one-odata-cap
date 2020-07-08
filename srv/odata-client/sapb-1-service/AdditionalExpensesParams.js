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
exports.AdditionalExpensesParams = exports.AdditionalExpensesParamsField = exports.createAdditionalExpensesParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[AdditionalExpensesParams.build]] instead.
 */
function createAdditionalExpensesParams(json) {
    return AdditionalExpensesParams.build(json);
}
exports.createAdditionalExpensesParams = createAdditionalExpensesParams;
/**
 * AdditionalExpensesParamsField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var AdditionalExpensesParamsField = /** @class */ (function (_super) {
    __extends(AdditionalExpensesParamsField, _super);
    function AdditionalExpensesParamsField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[AdditionalExpensesParams.expensCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expensCode = new v4_1.ComplexTypeNumberPropertyField('ExpensCode', _this, 'Edm.Int32');
        return _this;
    }
    return AdditionalExpensesParamsField;
}(v4_1.ComplexTypeField));
exports.AdditionalExpensesParamsField = AdditionalExpensesParamsField;
var AdditionalExpensesParams;
(function (AdditionalExpensesParams) {
    function build(json) {
        return v4_1.createComplexType(json, {
            ExpensCode: function (expensCode) { return ({ expensCode: v4_1.edmToTs(expensCode, 'Edm.Int32') }); }
        });
    }
    AdditionalExpensesParams.build = build;
})(AdditionalExpensesParams = exports.AdditionalExpensesParams || (exports.AdditionalExpensesParams = {}));
//# sourceMappingURL=AdditionalExpensesParams.js.map