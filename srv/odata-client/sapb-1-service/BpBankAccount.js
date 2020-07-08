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
exports.BpBankAccount = exports.BpBankAccountField = exports.createBpBankAccount = void 0;
var v4_1 = require("@sap-cloud-sdk/core/v4");
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
    function BpBankAccountField() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Representation of the [[BpBankAccount.logInstance]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.logInstance = new v4_1.ComplexTypeNumberPropertyField('LogInstance', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBankAccount.userNo4]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo4 = new v4_1.ComplexTypeStringPropertyField('UserNo4', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.bpCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bpCode = new v4_1.ComplexTypeStringPropertyField('BPCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.county]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.county = new v4_1.ComplexTypeStringPropertyField('County', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.state]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.state = new v4_1.ComplexTypeStringPropertyField('State', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.userNo2]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo2 = new v4_1.ComplexTypeStringPropertyField('UserNo2', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.iban]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.iban = new v4_1.ComplexTypeStringPropertyField('IBAN', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.zipCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.zipCode = new v4_1.ComplexTypeStringPropertyField('ZipCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.city]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.city = new v4_1.ComplexTypeStringPropertyField('City', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.block]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.block = new v4_1.ComplexTypeStringPropertyField('Block', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.branch]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.branch = new v4_1.ComplexTypeStringPropertyField('Branch', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.country]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.country = new v4_1.ComplexTypeStringPropertyField('Country', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.street]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.street = new v4_1.ComplexTypeStringPropertyField('Street', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.controlKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.controlKey = new v4_1.ComplexTypeStringPropertyField('ControlKey', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.userNo3]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo3 = new v4_1.ComplexTypeStringPropertyField('UserNo3', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.bankCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bankCode = new v4_1.ComplexTypeStringPropertyField('BankCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.accountNo]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountNo = new v4_1.ComplexTypeStringPropertyField('AccountNo', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.userNo1]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.userNo1 = new v4_1.ComplexTypeStringPropertyField('UserNo1', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.internalKey]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.internalKey = new v4_1.ComplexTypeNumberPropertyField('InternalKey', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBankAccount.buildingFloorRoom]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.buildingFloorRoom = new v4_1.ComplexTypeStringPropertyField('BuildingFloorRoom', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.bik]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bik = new v4_1.ComplexTypeStringPropertyField('BIK', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.accountName]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.accountName = new v4_1.ComplexTypeStringPropertyField('AccountName', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.correspondentAccount]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.correspondentAccount = new v4_1.ComplexTypeStringPropertyField('CorrespondentAccount', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.phone]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.phone = new v4_1.ComplexTypeStringPropertyField('Phone', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.fax]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.fax = new v4_1.ComplexTypeStringPropertyField('Fax', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.customerIdNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.customerIdNumber = new v4_1.ComplexTypeStringPropertyField('CustomerIdNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.isrBillerId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrBillerId = new v4_1.ComplexTypeStringPropertyField('ISRBillerID', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.isrType]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.isrType = new v4_1.ComplexTypeNumberPropertyField('ISRType', _this, 'Edm.Int32');
        /**
         * Representation of the [[BpBankAccount.bicSwiftCode]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.bicSwiftCode = new v4_1.ComplexTypeStringPropertyField('BICSwiftCode', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.abaRoutingNumber]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.abaRoutingNumber = new v4_1.ComplexTypeStringPropertyField('ABARoutingNumber', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.mandateId]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mandateId = new v4_1.ComplexTypeStringPropertyField('MandateID', _this, 'Edm.String');
        /**
         * Representation of the [[BpBankAccount.signatureDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.signatureDate = new v4_1.ComplexTypeDatePropertyField('SignatureDate', _this, 'Edm.DateTimeOffset');
        /**
         * Representation of the [[BpBankAccount.mandateExpDate]] property for query construction.
         * Use to reference this property in query operations such as 'filter' in the fluent request API.
         */
        _this.mandateExpDate = new v4_1.ComplexTypeDatePropertyField('MandateExpDate', _this, 'Edm.DateTimeOffset');
        return _this;
    }
    return BpBankAccountField;
}(v4_1.ComplexTypeField));
exports.BpBankAccountField = BpBankAccountField;
var BpBankAccount;
(function (BpBankAccount) {
    function build(json) {
        return v4_1.createComplexType(json, {
            LogInstance: function (logInstance) { return ({ logInstance: v4_1.edmToTs(logInstance, 'Edm.Int32') }); },
            UserNo4: function (userNo4) { return ({ userNo4: v4_1.edmToTs(userNo4, 'Edm.String') }); },
            BPCode: function (bpCode) { return ({ bpCode: v4_1.edmToTs(bpCode, 'Edm.String') }); },
            County: function (county) { return ({ county: v4_1.edmToTs(county, 'Edm.String') }); },
            State: function (state) { return ({ state: v4_1.edmToTs(state, 'Edm.String') }); },
            UserNo2: function (userNo2) { return ({ userNo2: v4_1.edmToTs(userNo2, 'Edm.String') }); },
            IBAN: function (iban) { return ({ iban: v4_1.edmToTs(iban, 'Edm.String') }); },
            ZipCode: function (zipCode) { return ({ zipCode: v4_1.edmToTs(zipCode, 'Edm.String') }); },
            City: function (city) { return ({ city: v4_1.edmToTs(city, 'Edm.String') }); },
            Block: function (block) { return ({ block: v4_1.edmToTs(block, 'Edm.String') }); },
            Branch: function (branch) { return ({ branch: v4_1.edmToTs(branch, 'Edm.String') }); },
            Country: function (country) { return ({ country: v4_1.edmToTs(country, 'Edm.String') }); },
            Street: function (street) { return ({ street: v4_1.edmToTs(street, 'Edm.String') }); },
            ControlKey: function (controlKey) { return ({ controlKey: v4_1.edmToTs(controlKey, 'Edm.String') }); },
            UserNo3: function (userNo3) { return ({ userNo3: v4_1.edmToTs(userNo3, 'Edm.String') }); },
            BankCode: function (bankCode) { return ({ bankCode: v4_1.edmToTs(bankCode, 'Edm.String') }); },
            AccountNo: function (accountNo) { return ({ accountNo: v4_1.edmToTs(accountNo, 'Edm.String') }); },
            UserNo1: function (userNo1) { return ({ userNo1: v4_1.edmToTs(userNo1, 'Edm.String') }); },
            InternalKey: function (internalKey) { return ({ internalKey: v4_1.edmToTs(internalKey, 'Edm.Int32') }); },
            BuildingFloorRoom: function (buildingFloorRoom) { return ({ buildingFloorRoom: v4_1.edmToTs(buildingFloorRoom, 'Edm.String') }); },
            BIK: function (bik) { return ({ bik: v4_1.edmToTs(bik, 'Edm.String') }); },
            AccountName: function (accountName) { return ({ accountName: v4_1.edmToTs(accountName, 'Edm.String') }); },
            CorrespondentAccount: function (correspondentAccount) { return ({ correspondentAccount: v4_1.edmToTs(correspondentAccount, 'Edm.String') }); },
            Phone: function (phone) { return ({ phone: v4_1.edmToTs(phone, 'Edm.String') }); },
            Fax: function (fax) { return ({ fax: v4_1.edmToTs(fax, 'Edm.String') }); },
            CustomerIdNumber: function (customerIdNumber) { return ({ customerIdNumber: v4_1.edmToTs(customerIdNumber, 'Edm.String') }); },
            ISRBillerID: function (isrBillerId) { return ({ isrBillerId: v4_1.edmToTs(isrBillerId, 'Edm.String') }); },
            ISRType: function (isrType) { return ({ isrType: v4_1.edmToTs(isrType, 'Edm.Int32') }); },
            BICSwiftCode: function (bicSwiftCode) { return ({ bicSwiftCode: v4_1.edmToTs(bicSwiftCode, 'Edm.String') }); },
            ABARoutingNumber: function (abaRoutingNumber) { return ({ abaRoutingNumber: v4_1.edmToTs(abaRoutingNumber, 'Edm.String') }); },
            MandateID: function (mandateId) { return ({ mandateId: v4_1.edmToTs(mandateId, 'Edm.String') }); },
            SignatureDate: function (signatureDate) { return ({ signatureDate: v4_1.edmToTs(signatureDate, 'Edm.DateTimeOffset') }); },
            MandateExpDate: function (mandateExpDate) { return ({ mandateExpDate: v4_1.edmToTs(mandateExpDate, 'Edm.DateTimeOffset') }); }
        });
    }
    BpBankAccount.build = build;
})(BpBankAccount = exports.BpBankAccount || (exports.BpBankAccount = {}));
//# sourceMappingURL=BpBankAccount.js.map