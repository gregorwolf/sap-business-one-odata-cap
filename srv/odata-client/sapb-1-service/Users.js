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
exports.Users = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var UsersRequestBuilder_1 = require("./UsersRequestBuilder");
var UserPermissionItem_1 = require("./UserPermissionItem");
var UserActionRecordItem_1 = require("./UserActionRecordItem");
var UserGroupByUserItem_1 = require("./UserGroupByUserItem");
var UserBranchAssignmentItem_1 = require("./UserBranchAssignmentItem");
var v4_1 = require("@sap-cloud-sdk/core/v4");
/**
 * This class represents the entity "Users" of service "SAPB1".
 */
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Users`.
     * @returns A builder that constructs instances of entity type `Users`.
     */
    Users.builder = function () {
        return v4_1.Entity.entityBuilder(Users);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Users` entity type.
     * @returns A `Users` request builder.
     */
    Users.requestBuilder = function () {
        return new UsersRequestBuilder_1.UsersRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Users`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Users`.
     */
    Users.customField = function (fieldName) {
        return v4_1.Entity.customFieldSelector(fieldName, Users);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Users.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Users.
     */
    Users._entityName = 'Users';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Users.
     */
    Users._serviceName = 'SAPB1';
    /**
     * Default url path for the according service.
     */
    Users._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Users;
}(v4_1.Entity));
exports.Users = Users;
var SalesOpportunities_1 = require("./SalesOpportunities");
var UserDefaultGroups_1 = require("./UserDefaultGroups");
var WorkOrders_1 = require("./WorkOrders");
var LegalData_1 = require("./LegalData");
var BankPages_1 = require("./BankPages");
var FormPreferences_1 = require("./FormPreferences");
var Contacts_1 = require("./Contacts");
var ProductionOrders_1 = require("./ProductionOrders");
var ServiceContracts_1 = require("./ServiceContracts");
var Queue_1 = require("./Queue");
var Branches_1 = require("./Branches");
var Departments_1 = require("./Departments");
var Cockpits_1 = require("./Cockpits");
var PickLists_1 = require("./PickLists");
var Activities_1 = require("./Activities");
var ApprovalRequests_1 = require("./ApprovalRequests");
var SalesTaxAuthorities_1 = require("./SalesTaxAuthorities");
var WizardPaymentMethods_1 = require("./WizardPaymentMethods");
var SalesTaxAuthoritiesTypes_1 = require("./SalesTaxAuthoritiesTypes");
var SalesTaxCodes_1 = require("./SalesTaxCodes");
var MaterialRevaluation_1 = require("./MaterialRevaluation");
var KnowledgeBaseSolutions_1 = require("./KnowledgeBaseSolutions");
var ServiceCalls_1 = require("./ServiceCalls");
var UserPermissionTree_1 = require("./UserPermissionTree");
var EmployeesInfo_1 = require("./EmployeesInfo");
(function (Users) {
    /**
     * Static representation of the [[internalKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.INTERNAL_KEY = new v4_1.NumberField('InternalKey', Users, 'Edm.Int32');
    /**
     * Static representation of the [[userPassword]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_PASSWORD = new v4_1.StringField('UserPassword', Users, 'Edm.String');
    /**
     * Static representation of the [[userCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_CODE = new v4_1.StringField('UserCode', Users, 'Edm.String');
    /**
     * Static representation of the [[userName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_NAME = new v4_1.StringField('UserName', Users, 'Edm.String');
    /**
     * Static representation of the [[eMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.E_MAIL = new v4_1.StringField('eMail', Users, 'Edm.String');
    /**
     * Static representation of the [[mobilePhoneNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.MOBILE_PHONE_NUMBER = new v4_1.StringField('MobilePhoneNumber', Users, 'Edm.String');
    /**
     * Static representation of the [[defaults]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.DEFAULTS = new v4_1.StringField('Defaults', Users, 'Edm.String');
    /**
     * Static representation of the [[faxNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.FAX_NUMBER = new v4_1.StringField('FaxNumber', Users, 'Edm.String');
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.BRANCH = new v4_1.NumberField('Branch', Users, 'Edm.Int32');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.DEPARTMENT = new v4_1.NumberField('Department', Users, 'Edm.Int32');
    /**
     * Static representation of the [[maxDiscountGeneral]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.MAX_DISCOUNT_GENERAL = new v4_1.NumberField('MaxDiscountGeneral', Users, 'Edm.Double');
    /**
     * Static representation of the [[maxDiscountSales]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.MAX_DISCOUNT_SALES = new v4_1.NumberField('MaxDiscountSales', Users, 'Edm.Double');
    /**
     * Static representation of the [[maxDiscountPurchase]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.MAX_DISCOUNT_PURCHASE = new v4_1.NumberField('MaxDiscountPurchase', Users, 'Edm.Double');
    /**
     * Static representation of the [[maxCashAmtForIncmngPayts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.MAX_CASH_AMT_FOR_INCMNG_PAYTS = new v4_1.NumberField('MaxCashAmtForIncmngPayts', Users, 'Edm.Double');
    /**
     * Static representation of the [[lastLogoutDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.LAST_LOGOUT_DATE = new v4_1.DateField('LastLogoutDate', Users, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastLoginTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.LAST_LOGIN_TIME = new v4_1.TimeField('LastLoginTime', Users, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[lastLogoutTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.LAST_LOGOUT_TIME = new v4_1.TimeField('LastLogoutTime', Users, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[lastPasswordChangeTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.LAST_PASSWORD_CHANGE_TIME = new v4_1.TimeField('LastPasswordChangeTime', Users, 'Edm.TimeOfDay');
    /**
     * Static representation of the [[lastPasswordChangedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.LAST_PASSWORD_CHANGED_BY = new v4_1.StringField('LastPasswordChangedBy', Users, 'Edm.String');
    /**
     * Static representation of the [[userPermission]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_PERMISSION = new v4_1.CollectionField('UserPermission', Users, new UserPermissionItem_1.UserPermissionItemField('', Users));
    /**
     * Static representation of the [[userActionRecord]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_ACTION_RECORD = new v4_1.CollectionField('UserActionRecord', Users, new UserActionRecordItem_1.UserActionRecordItemField('', Users));
    /**
     * Static representation of the [[userGroupByUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_GROUP_BY_USER = new v4_1.CollectionField('UserGroupByUser', Users, new UserGroupByUserItem_1.UserGroupByUserItemField('', Users));
    /**
     * Static representation of the [[userBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_BRANCH_ASSIGNMENT = new v4_1.CollectionField('UserBranchAssignment', Users, new UserBranchAssignmentItem_1.UserBranchAssignmentItemField('', Users));
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.SALES_OPPORTUNITIES = new v4_1.OneToManyLink('SalesOpportunities', Users, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[userDefaultGroups]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_DEFAULT_GROUPS = new v4_1.OneToManyLink('UserDefaultGroups', Users, UserDefaultGroups_1.UserDefaultGroups);
    /**
     * Static representation of the one-to-many navigation property [[workOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.WORK_ORDERS = new v4_1.OneToManyLink('WorkOrders', Users, WorkOrders_1.WorkOrders);
    /**
     * Static representation of the one-to-many navigation property [[legalData]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.LEGAL_DATA = new v4_1.OneToManyLink('LegalData', Users, LegalData_1.LegalData);
    /**
     * Static representation of the one-to-many navigation property [[bankPages]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.BANK_PAGES = new v4_1.OneToManyLink('BankPages', Users, BankPages_1.BankPages);
    /**
     * Static representation of the one-to-many navigation property [[formPreferences]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.FORM_PREFERENCES = new v4_1.OneToManyLink('FormPreferences', Users, FormPreferences_1.FormPreferences);
    /**
     * Static representation of the one-to-many navigation property [[contacts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.CONTACTS = new v4_1.OneToManyLink('Contacts', Users, Contacts_1.Contacts);
    /**
     * Static representation of the one-to-many navigation property [[productionOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.PRODUCTION_ORDERS = new v4_1.OneToManyLink('ProductionOrders', Users, ProductionOrders_1.ProductionOrders);
    /**
     * Static representation of the one-to-many navigation property [[serviceContracts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.SERVICE_CONTRACTS = new v4_1.OneToManyLink('ServiceContracts', Users, ServiceContracts_1.ServiceContracts);
    /**
     * Static representation of the one-to-many navigation property [[queue]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.QUEUE = new v4_1.OneToManyLink('Queue', Users, Queue_1.Queue);
    /**
     * Static representation of the one-to-one navigation property [[branch2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.BRANCH_2 = new v4_1.OneToOneLink('Branch2', Users, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[department2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.DEPARTMENT_2 = new v4_1.OneToOneLink('Department2', Users, Departments_1.Departments);
    /**
     * Static representation of the one-to-many navigation property [[cockpits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.COCKPITS = new v4_1.OneToManyLink('Cockpits', Users, Cockpits_1.Cockpits);
    /**
     * Static representation of the one-to-many navigation property [[pickLists]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.PICK_LISTS = new v4_1.OneToManyLink('PickLists', Users, PickLists_1.PickLists);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.ACTIVITIES = new v4_1.OneToManyLink('Activities', Users, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[approvalRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.APPROVAL_REQUESTS = new v4_1.OneToManyLink('ApprovalRequests', Users, ApprovalRequests_1.ApprovalRequests);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthorities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.SALES_TAX_AUTHORITIES = new v4_1.OneToManyLink('SalesTaxAuthorities', Users, SalesTaxAuthorities_1.SalesTaxAuthorities);
    /**
     * Static representation of the one-to-many navigation property [[wizardPaymentMethods]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.WIZARD_PAYMENT_METHODS = new v4_1.OneToManyLink('WizardPaymentMethods', Users, WizardPaymentMethods_1.WizardPaymentMethods);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxAuthoritiesTypes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.SALES_TAX_AUTHORITIES_TYPES = new v4_1.OneToManyLink('SalesTaxAuthoritiesTypes', Users, SalesTaxAuthoritiesTypes_1.SalesTaxAuthoritiesTypes);
    /**
     * Static representation of the one-to-many navigation property [[salesTaxCodes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.SALES_TAX_CODES = new v4_1.OneToManyLink('SalesTaxCodes', Users, SalesTaxCodes_1.SalesTaxCodes);
    /**
     * Static representation of the one-to-many navigation property [[materialRevaluation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.MATERIAL_REVALUATION = new v4_1.OneToManyLink('MaterialRevaluation', Users, MaterialRevaluation_1.MaterialRevaluation);
    /**
     * Static representation of the one-to-many navigation property [[knowledgeBaseSolutions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.KNOWLEDGE_BASE_SOLUTIONS = new v4_1.OneToManyLink('KnowledgeBaseSolutions', Users, KnowledgeBaseSolutions_1.KnowledgeBaseSolutions);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.SERVICE_CALLS = new v4_1.OneToManyLink('ServiceCalls', Users, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[userPermissionTree]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.USER_PERMISSION_TREE = new v4_1.OneToManyLink('UserPermissionTree', Users, UserPermissionTree_1.UserPermissionTree);
    /**
     * Static representation of the one-to-many navigation property [[employeesInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Users.EMPLOYEES_INFO = new v4_1.OneToManyLink('EmployeesInfo', Users, EmployeesInfo_1.EmployeesInfo);
    /**
     * All fields of the Users entity.
     */
    Users._allFields = [
        Users.INTERNAL_KEY,
        Users.USER_PASSWORD,
        Users.USER_CODE,
        Users.USER_NAME,
        Users.E_MAIL,
        Users.MOBILE_PHONE_NUMBER,
        Users.DEFAULTS,
        Users.FAX_NUMBER,
        Users.BRANCH,
        Users.DEPARTMENT,
        Users.MAX_DISCOUNT_GENERAL,
        Users.MAX_DISCOUNT_SALES,
        Users.MAX_DISCOUNT_PURCHASE,
        Users.MAX_CASH_AMT_FOR_INCMNG_PAYTS,
        Users.LAST_LOGOUT_DATE,
        Users.LAST_LOGIN_TIME,
        Users.LAST_LOGOUT_TIME,
        Users.LAST_PASSWORD_CHANGE_TIME,
        Users.LAST_PASSWORD_CHANGED_BY,
        Users.USER_PERMISSION,
        Users.USER_ACTION_RECORD,
        Users.USER_GROUP_BY_USER,
        Users.USER_BRANCH_ASSIGNMENT,
        Users.SALES_OPPORTUNITIES,
        Users.USER_DEFAULT_GROUPS,
        Users.WORK_ORDERS,
        Users.LEGAL_DATA,
        Users.BANK_PAGES,
        Users.FORM_PREFERENCES,
        Users.CONTACTS,
        Users.PRODUCTION_ORDERS,
        Users.SERVICE_CONTRACTS,
        Users.QUEUE,
        Users.BRANCH_2,
        Users.DEPARTMENT_2,
        Users.COCKPITS,
        Users.PICK_LISTS,
        Users.ACTIVITIES,
        Users.APPROVAL_REQUESTS,
        Users.SALES_TAX_AUTHORITIES,
        Users.WIZARD_PAYMENT_METHODS,
        Users.SALES_TAX_AUTHORITIES_TYPES,
        Users.SALES_TAX_CODES,
        Users.MATERIAL_REVALUATION,
        Users.KNOWLEDGE_BASE_SOLUTIONS,
        Users.SERVICE_CALLS,
        Users.USER_PERMISSION_TREE,
        Users.EMPLOYEES_INFO
    ];
    /**
     * All fields selector.
     */
    Users.ALL_FIELDS = new v4_1.AllFields('*', Users);
    /**
     * All key fields of the Users entity.
     */
    Users._keyFields = [Users.INTERNAL_KEY];
    /**
     * Mapping of all key field names to the respective static field property Users.
     */
    Users._keys = Users._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Users = exports.Users || (exports.Users = {}));
exports.Users = Users;
//# sourceMappingURL=Users.js.map