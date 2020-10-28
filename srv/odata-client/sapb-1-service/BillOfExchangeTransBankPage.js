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
exports.BillOfExchangeTransBankPage = exports.BillOfExchangeTransBankPageField = exports.createBillOfExchangeTransBankPage = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[BillOfExchangeTransBankPage.build]] instead.
 */
function createBillOfExchangeTransBankPage(json) {
    return BillOfExchangeTransBankPage.build(json);
}
exports.createBillOfExchangeTransBankPage = createBillOfExchangeTransBankPage;
/**
 * BillOfExchangeTransBankPageField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BillOfExchangeTransBankPageField = /** @class */ (function (_super) {
    __extends(BillOfExchangeTransBankPageField, _super);
    function BillOfExchangeTransBankPageField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BillOfExchangeTransBankPage.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[BillOfExchangeTransBankPage.sequence]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sequence = new v4_1.ComplexTypeNumberPropertyField('Sequence', _this, 'Edm.Int32');
        return _this;
    }
    return BillOfExchangeTransBankPageField;
}(v4_1.ComplexTypeField));
exports.BillOfExchangeTransBankPageField = BillOfExchangeTransBankPageField;
var BillOfExchangeTransBankPage;
(function (BillOfExchangeTransBankPage) {
    function build(json) {
        return v4_1.createComplexType(json, {
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            Sequence: function (sequence) { return ({ sequence: v4_1.edmToTs(sequence, 'Edm.Int32') }); }
        });
    }
    BillOfExchangeTransBankPage.build = build;
})(BillOfExchangeTransBankPage = exports.BillOfExchangeTransBankPage || (exports.BillOfExchangeTransBankPage = {}));
//# sourceMappingURL=BillOfExchangeTransBankPage.js.map