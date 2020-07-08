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
exports.BankStatementsFilter = exports.BankStatementsFilterField = exports.createBankStatementsFilter = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function BankStatementsFilterField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BankStatementsFilter.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementsFilter.bank]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bank = new v4_1.ComplexTypeStringPropertyField('Bank', _this, 'Edm.String');
        /**
         * Representation of the [[BankStatementsFilter.account]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.account = new v4_1.ComplexTypeStringPropertyField('Account', _this, 'Edm.String');
        return _this;
    }
    return BankStatementsFilterField;
}(v4_1.ComplexTypeField));
exports.BankStatementsFilterField = BankStatementsFilterField;
var BankStatementsFilter;
(function (BankStatementsFilter) {
    function build(json) {
        return v4_1.createComplexType(json, {
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            Bank: function (bank) { return ({ bank: v4_1.edmToTs(bank, 'Edm.String') }); },
            Account: function (account) { return ({ account: v4_1.edmToTs(account, 'Edm.String') }); }
        });
    }
    BankStatementsFilter.build = build;
})(BankStatementsFilter = exports.BankStatementsFilter || (exports.BankStatementsFilter = {}));
//# sourceMappingURL=BankStatementsFilter.js.map