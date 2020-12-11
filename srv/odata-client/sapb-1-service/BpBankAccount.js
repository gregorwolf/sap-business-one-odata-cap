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
exports.BpBankAccount = exports.BpBankAccountField = exports.createBpBankAccount = void 0;
var core_1 = require("@sap-cloud-sdk/core");
/**
 * @deprecated Since v1.6.0. Use [[BpBankAccount.build]] instead.
 */
function createBpBankAccount(json) {
    return BpBankAccount.build(json);
}
exports.createBpBankAccount = createBpBankAccount;
/**
 * BpBankAccountField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
var BpBankAccountField = /** @class */ (function (_super) {
    __extends(BpBankAccountField, _super);
    /**
     * Creates an instance of BpBankAccountField.
     *
     * @param fieldName - Actual name of the field as used in the OData request.
     * @param fieldOf - Either the parent entity constructor of the parent complex type this field belongs to.
     */
    function BpBankAccountField(fieldName, fieldOf) {
        var _this = _super.call(this, fieldName, fieldOf, BpBankAccount) || this;
        /**
         * Representation of the [[BpBankAccount.logInstance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance = new core_1.ComplexTypeNumberPropertyField('LogInstance', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBankAccount.userNo4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo4 = new core_1.ComplexTypeStringPropertyField('UserNo4', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new core_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new core_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new core_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.userNo2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo2 = new core_1.ComplexTypeStringPropertyField('UserNo2', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.iban]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iban = new core_1.ComplexTypeStringPropertyField('IBAN', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new core_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new core_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new core_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new core_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new core_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new core_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.controlKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.controlKey = new core_1.ComplexTypeStringPropertyField('ControlKey', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.userNo3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo3 = new core_1.ComplexTypeStringPropertyField('UserNo3', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new core_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.accountNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNo = new core_1.ComplexTypeStringPropertyField('AccountNo', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.userNo1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo1 = new core_1.ComplexTypeStringPropertyField('UserNo1', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.internalKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalKey = new core_1.ComplexTypeNumberPropertyField('InternalKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBankAccount.buildingFloorRoom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingFloorRoom = new core_1.ComplexTypeStringPropertyField('BuildingFloorRoom', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.bik]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bik = new core_1.ComplexTypeStringPropertyField('BIK', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.accountName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountName = new core_1.ComplexTypeStringPropertyField('AccountName', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.correspondentAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.correspondentAccount = new core_1.ComplexTypeStringPropertyField('CorrespondentAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.phone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phone = new core_1.ComplexTypeStringPropertyField('Phone', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.fax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fax = new core_1.ComplexTypeStringPropertyField('Fax', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.customerIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerIdNumber = new core_1.ComplexTypeStringPropertyField('CustomerIdNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.isrBillerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrBillerId = new core_1.ComplexTypeStringPropertyField('ISRBillerID', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.isrType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrType = new core_1.ComplexTypeNumberPropertyField('ISRType', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBankAccount.bicSwiftCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bicSwiftCode = new core_1.ComplexTypeStringPropertyField('BICSwiftCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.abaRoutingNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.abaRoutingNumber = new core_1.ComplexTypeStringPropertyField('ABARoutingNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.mandateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mandateId = new core_1.ComplexTypeStringPropertyField('MandateID', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.signatureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.signatureDate = new core_1.ComplexTypeDatePropertyField('SignatureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BpBankAccount.mandateExpDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mandateExpDate = new core_1.ComplexTypeDatePropertyField('MandateExpDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BpBankAccount.sepaSeqType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.sepaSeqType = new core_1.ComplexTypeEnumPropertyField('SEPASeqType', _this);
        return _this;
    }
    return BpBankAccountField;
}(core_1.ComplexTypeField));
exports.BpBankAccountField = BpBankAccountField;
var BpBankAccount;
(function (BpBankAccount) {
    /**
     * Metadata information on all properties of the `BpBankAccount` complex type.
     */
    BpBankAccount._propertyMetadata = [{
            originalName: 'LogInstance',
            name: 'logInstance',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'UserNo4',
            name: 'userNo4',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BPCode',
            name: 'bpCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'County',
            name: 'county',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'State',
            name: 'state',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UserNo2',
            name: 'userNo2',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'IBAN',
            name: 'iban',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ZipCode',
            name: 'zipCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'City',
            name: 'city',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Block',
            name: 'block',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Branch',
            name: 'branch',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Country',
            name: 'country',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Street',
            name: 'street',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ControlKey',
            name: 'controlKey',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UserNo3',
            name: 'userNo3',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BankCode',
            name: 'bankCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountNo',
            name: 'accountNo',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'UserNo1',
            name: 'userNo1',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'InternalKey',
            name: 'internalKey',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BuildingFloorRoom',
            name: 'buildingFloorRoom',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'BIK',
            name: 'bik',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'AccountName',
            name: 'accountName',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CorrespondentAccount',
            name: 'correspondentAccount',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Phone',
            name: 'phone',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'Fax',
            name: 'fax',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'CustomerIdNumber',
            name: 'customerIdNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ISRBillerID',
            name: 'isrBillerId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ISRType',
            name: 'isrType',
            type: 'Edm.Int32',
            isCollection: false
        }, {
            originalName: 'BICSwiftCode',
            name: 'bicSwiftCode',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'ABARoutingNumber',
            name: 'abaRoutingNumber',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'MandateID',
            name: 'mandateId',
            type: 'Edm.String',
            isCollection: false
        }, {
            originalName: 'SignatureDate',
            name: 'signatureDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'MandateExpDate',
            name: 'mandateExpDate',
            type: 'Edm.DateTimeOffset',
            isCollection: false
        }, {
            originalName: 'SEPASeqType',
            name: 'sepaSeqType',
            type: 'Edm.Enum',
            isCollection: false
        }];
    /**
     * @deprecated Since v1.25.0. Use `deserializeComplexTypeV2` or `deserializeComplexTypeV4` of the `@sap-cloud-sdk/core` package instead.
     */
    function build(json) {
        return core_1.deserializeComplexTypeV4(json, BpBankAccount);
    }
    BpBankAccount.build = build;
})(BpBankAccount = exports.BpBankAccount || (exports.BpBankAccount = {}));
//# sourceMappingURL=BpBankAccount.js.map