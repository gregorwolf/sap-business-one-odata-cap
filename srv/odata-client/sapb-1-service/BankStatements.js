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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BankStatements = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var BankStatementsRequestBuilder_1 = require("./BankStatementsRequestBuilder");
var BankStatementRow_1 = require("./BankStatementRow");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "BankStatements" of service "SAPB1".
 */
var BankStatements = /** @class */ (function (_super) {
    __extends(BankStatements, _super);
    function BankStatements() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `BankStatements`.
     * @returns A builder that constructs instances of entity type `BankStatements`.
     */
    BankStatements.builder = function () {
        return core_1.EntityV4.entityBuilder(BankStatements);
    };
    /**
     * Returns a request builder to construct requests for operations on the `BankStatements` entity type.
     * @returns A `BankStatements` request builder.
     */
    BankStatements.requestBuilder = function () {
        return new BankStatementsRequestBuilder_1.BankStatementsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `BankStatements`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `BankStatements`.
     */
    BankStatements.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, BankStatements);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    BankStatements.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for BankStatements.
     */
    BankStatements._entityName = 'BankStatements';
    /**
     * Default url path for the according service.
     */
    BankStatements._defaultServicePath = '/b1s/v2/';
    return BankStatements;
}(core_1.EntityV4));
exports.BankStatements = BankStatements;
var HouseBankAccounts_1 = require("./HouseBankAccounts");
var Currencies_1 = require("./Currencies");
(function (BankStatements) {
    /**
     * Static representation of the [[internalNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.INTERNAL_NUMBER = new core_1.NumberField('InternalNumber', BankStatements, 'Edm.Int32');
    /**
     * Static representation of the [[bankAccountKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.BANK_ACCOUNT_KEY = new core_1.NumberField('BankAccountKey', BankStatements, 'Edm.Int32');
    /**
     * Static representation of the [[statementNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.STATEMENT_NUMBER = new core_1.StringField('StatementNumber', BankStatements, 'Edm.String');
    /**
     * Static representation of the [[statementDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.STATEMENT_DATE = new core_1.DateField('StatementDate', BankStatements, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.STATUS = new core_1.EnumField('Status', BankStatements);
    /**
     * Static representation of the [[imported]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.IMPORTED = new core_1.EnumField('Imported', BankStatements);
    /**
     * Static representation of the [[startingBalanceF]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.STARTING_BALANCE_F = new core_1.NumberField('StartingBalanceF', BankStatements, 'Edm.Double');
    /**
     * Static representation of the [[endingBalanceF]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.ENDING_BALANCE_F = new core_1.NumberField('EndingBalanceF', BankStatements, 'Edm.Double');
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.CURRENCY = new core_1.StringField('Currency', BankStatements, 'Edm.String');
    /**
     * Static representation of the [[startingBalanceL]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.STARTING_BALANCE_L = new core_1.NumberField('StartingBalanceL', BankStatements, 'Edm.Double');
    /**
     * Static representation of the [[endingBalanceL]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.ENDING_BALANCE_L = new core_1.NumberField('EndingBalanceL', BankStatements, 'Edm.Double');
    /**
     * Static representation of the [[bankStatementFileHash]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.BANK_STATEMENT_FILE_HASH = new core_1.StringField('BankStatementFileHash', BankStatements, 'Edm.String');
    /**
     * Static representation of the [[bankStatementGuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.BANK_STATEMENT_GUID = new core_1.StringField('BankStatementGUID', BankStatements, 'Edm.String');
    /**
     * Static representation of the [[bankStatementRows]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.BANK_STATEMENT_ROWS = new core_1.CollectionField('BankStatementRows', BankStatements, BankStatementRow_1.BankStatementRow);
    /**
     * Static representation of the one-to-one navigation property [[houseBankAccount]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.HOUSE_BANK_ACCOUNT = new core_1.OneToOneLink('HouseBankAccount', BankStatements, HouseBankAccounts_1.HouseBankAccounts);
    /**
     * Static representation of the one-to-one navigation property [[currency2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    BankStatements.CURRENCY_2 = new core_1.OneToOneLink('Currency2', BankStatements, Currencies_1.Currencies);
    /**
     * All fields of the BankStatements entity.
     */
    BankStatements._allFields = [
        BankStatements.INTERNAL_NUMBER,
        BankStatements.BANK_ACCOUNT_KEY,
        BankStatements.STATEMENT_NUMBER,
        BankStatements.STATEMENT_DATE,
        BankStatements.STATUS,
        BankStatements.IMPORTED,
        BankStatements.STARTING_BALANCE_F,
        BankStatements.ENDING_BALANCE_F,
        BankStatements.CURRENCY,
        BankStatements.STARTING_BALANCE_L,
        BankStatements.ENDING_BALANCE_L,
        BankStatements.BANK_STATEMENT_FILE_HASH,
        BankStatements.BANK_STATEMENT_GUID,
        BankStatements.BANK_STATEMENT_ROWS,
        BankStatements.HOUSE_BANK_ACCOUNT,
        BankStatements.CURRENCY_2
    ];
    /**
     * All fields selector.
     */
    BankStatements.ALL_FIELDS = new core_1.AllFields('*', BankStatements);
    /**
     * All key fields of the BankStatements entity.
     */
    BankStatements._keyFields = [BankStatements.INTERNAL_NUMBER];
    /**
     * Mapping of all key field names to the respective static field property BankStatements.
     */
    BankStatements._keys = BankStatements._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(BankStatements = exports.BankStatements || (exports.BankStatements = {}));
exports.BankStatements = BankStatements;
//# sourceMappingURL=BankStatements.js.map