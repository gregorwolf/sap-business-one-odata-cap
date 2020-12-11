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
exports.PaymentCheck = exports.PaymentCheckField = exports.createPaymentCheck = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[PaymentCheck.build]] instead.
 */
function createPaymentCheck(json) {
    return PaymentCheck.build(json);
}
exports.createPaymentCheck = createPaymentCheck;
/**
 * PaymentCheckField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var PaymentCheckField = /** @class */ (function (_super) {
    __extends(PaymentCheckField, _super);
    /**
     * Creates an instance of PaymentCheckField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function PaymentCheckField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, PaymentCheck) || this;
        /**
         * Representation of the [[PaymentCheck.lineNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.lineNum = new core_1.ComplexTypeNumberPropertyField('LineNum', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCheck.dueDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.dueDate = new core_1.ComplexTypeDatePropertyField('DueDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[PaymentCheck.checkNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkNumber = new core_1.ComplexTypeNumberPropertyField('CheckNumber', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCheck.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new core_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new core_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.accounttNum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accounttNum = new core_1.ComplexTypeStringPropertyField('AccounttNum', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.details]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.details = new core_1.ComplexTypeStringPropertyField('Details', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.trnsfrable]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.trnsfrable = new core_1.ComplexTypeEnumPropertyField('Trnsfrable', _this);
        /**
         * Representation of the [[PaymentCheck.checkSum]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkSum = new core_1.ComplexTypeNumberPropertyField('CheckSum', _this, 'Edm.Double');
        /**
         * Representation of the [[PaymentCheck.currency]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.currency = new core_1.ComplexTypeStringPropertyField('Currency', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.countryCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.countryCode = new core_1.ComplexTypeStringPropertyField('CountryCode', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.checkAbsEntry]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAbsEntry = new core_1.ComplexTypeNumberPropertyField('CheckAbsEntry', _this, 'Edm.Int32');
        /**
         * Representation of the [[PaymentCheck.checkAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.checkAccount = new core_1.ComplexTypeStringPropertyField('CheckAccount', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.manualCheck]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.manualCheck = new core_1.ComplexTypeEnumPropertyField('ManualCheck', _this);
        /**
         * Representation of the [[PaymentCheck.fiscalId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fiscalId = new core_1.ComplexTypeStringPropertyField('FiscalID', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.originallyIssuedBy]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.originallyIssuedBy = new core_1.ComplexTypeStringPropertyField('OriginallyIssuedBy', _this, 'Edm.String');
        /**
         * Representation of the [[PaymentCheck.endorse]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endorse = new core_1.ComplexTypeEnumPropertyField('Endorse', _this);
        /**
         * Representation of the [[PaymentCheck.endorsableCheckNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.endorsableCheckNo = new core_1.ComplexTypeNumberPropertyField('EndorsableCheckNo', _this, 'Edm.Int32');
        return _this;
    }
    return PaymentCheckField;
}(core_1.ComplexTypeField));
exports.PaymentCheckField = PaymentCheckField;
var PaymentCheck;
(function (PaymentCheck) {
    /**
     * Metadata information on all properties of the `PaymentCheck` complex type.
     */
    PaymentCheck._propertyMetadata = [{
            originalName: 'LineNum',
            name: 'lineNum',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'DueDate',
            name: 'dueDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'CheckNumber',
            name: 'checkNumber',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BankCode',
            name: 'bankCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Branch',
            name: 'branch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccounttNum',
            name: 'accounttNum',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Details',
            name: 'details',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Trnsfrable',
            name: 'trnsfrable',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'CheckSum',
            name: 'checkSum',
            type: 'Edm.Double',
            isCollection: false
        }, {
            originalName: 'Currency',
            name: 'currency',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CountryCode',
            name: 'countryCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CheckAbsEntry',
            name: 'checkAbsEntry',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'CheckAccount',
            name: 'checkAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ManualCheck',
            name: 'manualCheck',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'FiscalID',
            name: 'fiscalId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'OriginallyIssuedBy',
            name: 'originallyIssuedBy',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Endorse',
            name: 'endorse',
            type: 'Edm.Enum',
            isCollection: false
        }, {
            originalName: 'EndorsableCheckNo',
            name: 'endorsableCheckNo',
            type: 'Edm.Int32',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, PaymentCheck);
    }
    PaymentCheck.build = build;
})(PaymentCheck = exports.PaymentCheck || (exports.PaymentCheck = {}));
//# sourceMappingURL=PaymentCheck.js.map