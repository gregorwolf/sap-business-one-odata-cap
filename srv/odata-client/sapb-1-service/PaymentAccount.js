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
exports.PaymentAccount = exports.PaymentAccountField = exports.createPaymentAccount = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
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
    /**
     * Creates an instance of PaymentAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentAccountField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentAccount) || this;
        /**
         * Representation of the [[PaymentAccount.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAccount.accountCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountCode = new core_1.ComplexTypeStringPropertyField('AccountCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.sumPaid]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPaid = new core_1.ComplexTypeNumberPropertyField('SumPaid', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.sumPaidFc]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sumPaidFc = new core_1.ComplexTypeNumberPropertyField('SumPaidFC', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.decription]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.decription = new core_1.ComplexTypeStringPropertyField('Decription', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.vatGroup]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatGroup = new core_1.ComplexTypeStringPropertyField('VatGroup', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.accountName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountName = new core_1.ComplexTypeStringPropertyField('AccountName', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.grossAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.grossAmount = new core_1.ComplexTypeNumberPropertyField('GrossAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.profitCenter]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter = new core_1.ComplexTypeStringPropertyField('ProfitCenter', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.projectCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.projectCode = new core_1.ComplexTypeStringPropertyField('ProjectCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.vatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.vatAmount = new core_1.ComplexTypeNumberPropertyField('VatAmount', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentAccount.profitCenter2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter2 = new core_1.ComplexTypeStringPropertyField('ProfitCenter2', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.profitCenter3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter3 = new core_1.ComplexTypeStringPropertyField('ProfitCenter3', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.profitCenter4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter4 = new core_1.ComplexTypeStringPropertyField('ProfitCenter4', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.profitCenter5]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.profitCenter5 = new core_1.ComplexTypeStringPropertyField('ProfitCenter5', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentAccount.locationCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.locationCode = new core_1.ComplexTypeNumberPropertyField('LocationCode', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentAccount.equalizationVatAmount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.equalizationVatAmount = new core_1.ComplexTypeNumberPropertyField('EqualizationVatAmount', _this, 'Edm.Double');
        return _this;
    }
    return PaymentAccountField;
}(core_1.ComplexTypeField));
exports.PaymentAccountField = PaymentAccountField;
var PaymentAccount;
(function (PaymentAccount) {
    /**
     * Metadata information on all properties of the `PaymentAccount` complex type.
     */
    PaymentAccount._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'AccountCode',
            name: 'accountCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SumPaid',
            name: 'sumPaid',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'SumPaidFC',
            name: 'sumPaidFc',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Decription',
            name: 'decription',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VatGroup',
            name: 'vatGroup',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountName',
            name: 'accountName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'GrossAmount',
            name: 'grossAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ProfitCenter',
            name: 'profitCenter',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProjectCode',
            name: 'projectCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'VatAmount',
            name: 'vatAmount',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'ProfitCenter2',
            name: 'profitCenter2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProfitCenter3',
            name: 'profitCenter3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProfitCenter4',
            name: 'profitCenter4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ProfitCenter5',
            name: 'profitCenter5',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'LocationCode',
            name: 'locationCode',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'EqualizationVatAmount',
            name: 'equalizationVatAmount',
            type: 'Edm.Double',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentAccount);
    }
    PaymentAccount.build = build;
})(PaymentAccount = exports.PaymentAccount || (exports.PaymentAccount = {}));
//# sourceMappingURL=PaymentAccount.js.map