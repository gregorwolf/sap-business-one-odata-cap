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
exports.ExpenseTypeParams = exports.ExpenseTypeParamsField = exports.createExpenseTypeParams = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of ExpenseTypeParamsField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function ExpenseTypeParamsField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, ExpenseTypeParams) || this;
        /**
         * Representation of the [[ExpenseTypeParams.expenseType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.expenseType = new core_1.ComplexTypeStringPropertyField('ExpenseType', _this, 'Edm.String');
        return _this;
    }
    return ExpenseTypeParamsField;
}(core_1.ComplexTypeField));
exports.ExpenseTypeParamsField = ExpenseTypeParamsField;
var ExpenseTypeParams;
(function (ExpenseTypeParams) {
    /**
     * Metadata information on all properties of the `ExpenseTypeParams` complex type.
     */
    ExpenseTypeParams._propertyMetadata = [{
            originalName: 'ExpenseType',
            name: 'expenseType',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, ExpenseTypeParams);
    }
    ExpenseTypeParams.build = build;
})(ExpenseTypeParams = exports.ExpenseTypeParams || (exports.ExpenseTypeParams = {}));
//# sourceMappingURL=ExpenseTypeParams.js.map