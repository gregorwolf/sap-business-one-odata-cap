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
exports.BillOfExchangeTransDeposit = exports.BillOfExchangeTransDepositField = exports.createBillOfExchangeTransDeposit = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransDeposit.build]] instead.
 */
function createBillOfExchangeTransDeposit(json) {
    return BillOfExchangeTransDeposit.build(json);
}
exports.createBillOfExchangeTransDeposit = createBillOfExchangeTransDeposit;
/**
 * BillOfExchangeTransDepositField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeTransDepositField = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransDepositField, _super);
    function BillOfExchangeTransDepositField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BillOfExchangeTransDeposit.depositNorm]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.depositNorm = new v4_1.ComplexTypeStringPropertyField('DepositNorm', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankCountry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCountry = new v4_1.ComplexTypeStringPropertyField('BankCountry', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankAccount = new v4_1.ComplexTypeStringPropertyField('BankAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankDepositAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankDepositAccount = new v4_1.ComplexTypeStringPropertyField('BankDepositAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransDeposit.bankBranch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankBranch = new v4_1.ComplexTypeStringPropertyField('BankBranch', _this, 'Edm.String');
        return _this;
    }
    return BillOfExchangeTransDepositField;
}(v4_1.ComplexTypeField));
exports.BillOfExchangeTransDepositField = BillOfExchangeTransDepositField;
var BillOfExchangeTransDeposit;
(function (BillOfExchangeTransDeposit) {
    function build(json) {
        return v4_1.createComplexType(json, {
            DepositNorm: function (depositNorm) { return ({ depositNorm: v4_1.edmToTs(depositNorm, 'Edm.String') }); },
            BankCountry: function (bankCountry) { return ({ bankCountry: v4_1.edmToTs(bankCountry, 'Edm.String') }); },
            BankAccount: function (bankAccount) { return ({ bankAccount: v4_1.edmToTs(bankAccount, 'Edm.String') }); },
            BankDepositAccount: function (bankDepositAccount) { return ({ bankDepositAccount: v4_1.edmToTs(bankDepositAccount, 'Edm.String') }); },
            BankBranch: function (bankBranch) { return ({ bankBranch: v4_1.edmToTs(bankBranch, 'Edm.String') }); }
        });
    }
    BillOfExchangeTransDeposit.build = build;
})(BillOfExchangeTransDeposit = exports.BillOfExchangeTransDeposit || (exports.BillOfExchangeTransDeposit = {}));
//# sourceMappingURL=BillOfExchangeTransDeposit.js.map