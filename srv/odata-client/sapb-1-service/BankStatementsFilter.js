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
exports.BankStatementsFilter = exports.BankStatementsFilterField = exports.createBankStatementsFilter = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BankStatementsFilter.build]] instead.
 */
function createBankStatementsFilter(json) {
    return BankStatementsFilter.build(json);
}
exports.createBankStatementsFilter = createBankStatementsFilter;
/**
 * BankStatementsFilterField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BankStatementsFilterField = /** @class */ (function (_super) {
    __extends(BankStatementsFilterField, _super);
    /**
     * Creates an instance of BankStatementsFilterField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BankStatementsFilterField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BankStatementsFilter) || this;
        /**
         * Representation of the [[BankStatementsFilter.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementsFilter.bank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bank = new core_1.ComplexTypeStringPropertyField('Bank', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementsFilter.account]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.account = new core_1.ComplexTypeStringPropertyField('Account', _this, 'Edm.String');
        return _this;
    }
    return BankStatementsFilterField;
}(core_1.ComplexTypeField));
exports.BankStatementsFilterField = BankStatementsFilterField;
var BankStatementsFilter;
(function (BankStatementsFilter) {
    /**
     * Metadata information on all properties of the `BankStatementsFilter` complex type.
     */
    BankStatementsFilter._propertyMetadata = [{
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Bank',
            name: 'bank',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Account',
            name: 'account',
            type: 'Edm.String',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BankStatementsFilter);
    }
    BankStatementsFilter.build = build;
})(BankStatementsFilter = exports.BankStatementsFilter || (exports.BankStatementsFilter = {}));
//# sourceMappingURL=BankStatementsFilter.js.map