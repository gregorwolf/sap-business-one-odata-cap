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
exports.AccountCategory = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var AccountCategoryRequestBuilder_1 = require("./AccountCategoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "AccountCategory" of service "SAPB1".
 */
var AccountCategory = /** @class */ (function (_super) {
    __extends(AccountCategory, _super);
    function AccountCategory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `AccountCategory`.
     * @returns A builder that constructs instances of entity type `AccountCategory`.
     */
    AccountCategory.builder = function () {
        return core_1.EntityV4.entityBuilder(AccountCategory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `AccountCategory` entity type.
     * @returns A `AccountCategory` request builder.
     */
    AccountCategory.requestBuilder = function () {
        return new AccountCategoryRequestBuilder_1.AccountCategoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `AccountCategory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `AccountCategory`.
     */
    AccountCategory.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, AccountCategory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    AccountCategory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for AccountCategory.
     */
    AccountCategory._entityName = 'AccountCategory';
    /**
     * Default url path for the according service.
     */
    AccountCategory._defaultServicePath = '/b1s/v2/';
    return AccountCategory;
}(core_1.EntityV4));
exports.AccountCategory = AccountCategory;
var ChartOfAccounts_1 = require("./ChartOfAccounts");
(function (AccountCategory) {
    /**
     * Static representation of the [[categoryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountCategory.CATEGORY_CODE = new core_1.NumberField('CategoryCode', AccountCategory, 'Edm.Int32');
    /**
     * Static representation of the [[categoryName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountCategory.CATEGORY_NAME = new core_1.StringField('CategoryName', AccountCategory, 'Edm.String');
    /**
     * Static representation of the [[categorySource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountCategory.CATEGORY_SOURCE = new core_1.EnumField('CategorySource', AccountCategory);
    /**
     * Static representation of the one-to-many navigation property [[chartOfAccounts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    AccountCategory.CHART_OF_ACCOUNTS = new core_1.OneToManyLink('ChartOfAccounts', AccountCategory, ChartOfAccounts_1.ChartOfAccounts);
    /**
     * All fields of the AccountCategory entity.
     */
    AccountCategory._allFields = [
        AccountCategory.CATEGORY_CODE,
        AccountCategory.CATEGORY_NAME,
        AccountCategory.CATEGORY_SOURCE,
        AccountCategory.CHART_OF_ACCOUNTS
    ];
    /**
     * All fields selector.
     */
    AccountCategory.ALL_FIELDS = new core_1.AllFields('*', AccountCategory);
    /**
     * All key fields of the AccountCategory entity.
     */
    AccountCategory._keyFields = [AccountCategory.CATEGORY_CODE];
    /**
     * Mapping of all key field names to the respective static field property AccountCategory.
     */
    AccountCategory._keys = AccountCategory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(AccountCategory = exports.AccountCategory || (exports.AccountCategory = {}));
exports.AccountCategory = AccountCategory;
//# sourceMappingURL=AccountCategory.js.map