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
exports.EmployeeSavingsPaymentInfo = exports.EmployeeSavingsPaymentInfoField = exports.createEmployeeSavingsPaymentInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[EmployeeSavingsPaymentInfo.build]] instead.
 */
function createEmployeeSavingsPaymentInfo(json) {
    return EmployeeSavingsPaymentInfo.build(json);
}
exports.createEmployeeSavingsPaymentInfo = createEmployeeSavingsPaymentInfo;
/**
 * EmployeeSavingsPaymentInfoField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var EmployeeSavingsPaymentInfoField = /** @class */ (function (_super) {
    __extends(EmployeeSavingsPaymentInfoField, _super);
    function EmployeeSavingsPaymentInfoField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.employeeId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.employeeId = new v4_1.ComplexTypeNumberPropertyField('EmployeeID', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.contractName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.contractName = new v4_1.ComplexTypeStringPropertyField('ContractName', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.paymentNotes]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.paymentNotes = new v4_1.ComplexTypeStringPropertyField('PaymentNotes', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.an]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.an = new v4_1.ComplexTypeNumberPropertyField('AN', _this, 'Edm.Double');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.aNcurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aNcurrency = new v4_1.ComplexTypeStringPropertyField('ANcurrency', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.ag]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.ag = new v4_1.ComplexTypeNumberPropertyField('AG', _this, 'Edm.Double');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.aGcurrency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.aGcurrency = new v4_1.ComplexTypeStringPropertyField('AGcurrency', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.bankName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankName = new v4_1.ComplexTypeStringPropertyField('BankName', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new v4_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        /**
         * Representation of the [[EmployeeSavingsPaymentInfo.bankAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankAccount = new v4_1.ComplexTypeStringPropertyField('BankAccount', _this, 'Edm.String');
        return _this;
    }
    return EmployeeSavingsPaymentInfoField;
}(v4_1.ComplexTypeField));
exports.EmployeeSavingsPaymentInfoField = EmployeeSavingsPaymentInfoField;
var EmployeeSavingsPaymentInfo;
(function (EmployeeSavingsPaymentInfo) {
    function build(json) {
        return v4_1.createComplexType(json, {
            EmployeeID: function (employeeId) { return ({ employeeId: v4_1.edmToTs(employeeId, 'Edm.Int32') }); },
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            ContractName: function (contractName) { return ({ contractName: v4_1.edmToTs(contractName, 'Edm.String') }); },
            PaymentNotes: function (paymentNotes) { return ({ paymentNotes: v4_1.edmToTs(paymentNotes, 'Edm.String') }); },
            AN: function (an) { return ({ an: v4_1.edmToTs(an, 'Edm.Double') }); },
            ANcurrency: function (aNcurrency) { return ({ aNcurrency: v4_1.edmToTs(aNcurrency, 'Edm.String') }); },
            AG: function (ag) { return ({ ag: v4_1.edmToTs(ag, 'Edm.Double') }); },
            AGcurrency: function (aGcurrency) { return ({ aGcurrency: v4_1.edmToTs(aGcurrency, 'Edm.String') }); },
            BankName: function (bankName) { return ({ bankName: v4_1.edmToTs(bankName, 'Edm.String') }); },
            BankCode: function (bankCode) { return ({ bankCode: v4_1.edmToTs(bankCode, 'Edm.String') }); },
            BankAccount: function (bankAccount) { return ({ bankAccount: v4_1.edmToTs(bankAccount, 'Edm.String') }); }
        });
    }
    EmployeeSavingsPaymentInfo.build = build;
})(EmployeeSavingsPaymentInfo = exports.EmployeeSavingsPaymentInfo || (exports.EmployeeSavingsPaymentInfo = {}));
//# sourceMappingURL=EmployeeSavingsPaymentInfo.js.map