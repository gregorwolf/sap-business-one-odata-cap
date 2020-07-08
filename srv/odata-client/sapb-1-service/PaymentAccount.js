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
exports.PaymentAccount = exports.PaymentAccountField = exports.createPaymentAccount = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * @deprecated Since v1.6.0. Use [[PaymentAccount.build]] instead.
 */
function createPaymentAccount(json) {
    return PaymentAccount.build(json);
}
exports.createPaymentAccount = createPaymentAccount;
/**
 * PaymentAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentAccountField = /** @class */ (function (_super) {
    __extends(PaymentAccountField, _super);
    function PaymentAccountField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[PaymentAccount.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new v4_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAccount.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new v4_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.sumPaid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPaid = new v4_1.ComplexTypeNumberPropertyField('SumPaid', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.sumPaidFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPaidFc = new v4_1.ComplexTypeNumberPropertyField('SumPaidFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.decription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decription = new v4_1.ComplexTypeStringPropertyField('Decription', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new v4_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.accountName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountName = new v4_1.ComplexTypeStringPropertyField('AccountName', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.grossAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmount = new v4_1.ComplexTypeNumberPropertyField('GrossAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.profitCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter = new v4_1.ComplexTypeStringPropertyField('ProfitCenter', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new v4_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.vatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmount = new v4_1.ComplexTypeNumberPropertyField('VatAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.profitCenter2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter2 = new v4_1.ComplexTypeStringPropertyField('ProfitCenter2', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.profitCenter3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter3 = new v4_1.ComplexTypeStringPropertyField('ProfitCenter3', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.profitCenter4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter4 = new v4_1.ComplexTypeStringPropertyField('ProfitCenter4', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.profitCenter5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter5 = new v4_1.ComplexTypeStringPropertyField('ProfitCenter5', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new v4_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAccount.equalizationVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationVatAmount = new v4_1.ComplexTypeNumberPropertyField('EqualizationVatAmount', _this, 'Edm.Double');
        return _this;
    }
    return PaymentAccountField;
}(v4_1.ComplexTypeField));
exports.PaymentAccountField = PaymentAccountField;
var PaymentAccount;
(function (PaymentAccount) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LineNum: function (lineNum) { return ({ lineNum: v4_1.edmToTs(lineNum, 'Edm.Int32') }); },
            AccountCode: function (accountCode) { return ({ accountCode: v4_1.edmToTs(accountCode, 'Edm.String') }); },
            SumPaid: function (sumPaid) { return ({ sumPaid: v4_1.edmToTs(sumPaid, 'Edm.Double') }); },
            SumPaidFC: function (sumPaidFc) { return ({ sumPaidFc: v4_1.edmToTs(sumPaidFc, 'Edm.Double') }); },
            Decription: function (decription) { return ({ decription: v4_1.edmToTs(decription, 'Edm.String') }); },
            VatGroup: function (vatGroup) { return ({ vatGroup: v4_1.edmToTs(vatGroup, 'Edm.String') }); },
            AccountName: function (accountName) { return ({ accountName: v4_1.edmToTs(accountName, 'Edm.String') }); },
            GrossAmount: function (grossAmount) { return ({ grossAmount: v4_1.edmToTs(grossAmount, 'Edm.Double') }); },
            ProfitCenter: function (profitCenter) { return ({ profitCenter: v4_1.edmToTs(profitCenter, 'Edm.String') }); },
            ProjectCode: function (projectCode) { return ({ projectCode: v4_1.edmToTs(projectCode, 'Edm.String') }); },
            VatAmount: function (vatAmount) { return ({ vatAmount: v4_1.edmToTs(vatAmount, 'Edm.Double') }); },
            ProfitCenter2: function (profitCenter2) { return ({ profitCenter2: v4_1.edmToTs(profitCenter2, 'Edm.String') }); },
            ProfitCenter3: function (profitCenter3) { return ({ profitCenter3: v4_1.edmToTs(profitCenter3, 'Edm.String') }); },
            ProfitCenter4: function (profitCenter4) { return ({ profitCenter4: v4_1.edmToTs(profitCenter4, 'Edm.String') }); },
            ProfitCenter5: function (profitCenter5) { return ({ profitCenter5: v4_1.edmToTs(profitCenter5, 'Edm.String') }); },
            LocationCode: function (locationCode) { return ({ locationCode: v4_1.edmToTs(locationCode, 'Edm.Int32') }); },
            EqualizationVatAmount: function (equalizationVatAmount) { return ({ equalizationVatAmount: v4_1.edmToTs(equalizationVatAmount, 'Edm.Double') }); }
        });
    }
    PaymentAccount.build = build;
})(PaymentAccount = exports.PaymentAccount || (exports.PaymentAccount = {}));
//# sourceMappingURL=PaymentAccount.js.map