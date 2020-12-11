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
exports.EmployeesInfo = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var EmployeesInfoRequestBuilder_1 = require("./EmployeesInfoRequestBuilder");
var EmployeeAbsenceInfo_1 = require("./EmployeeAbsenceInfo");
var EmployeeEducationInfo_1 = require("./EmployeeEducationInfo");
var EmployeeReviewsInfo_1 = require("./EmployeeReviewsInfo");
var EmployeePreviousEmpoymentInfo_1 = require("./EmployeePreviousEmpoymentInfo");
var EmployeeRolesInfo_1 = require("./EmployeeRolesInfo");
var EmployeeSavingsPaymentInfo_1 = require("./EmployeeSavingsPaymentInfo");
var EmployeeBranchAssignmentItem_1 = require("./EmployeeBranchAssignmentItem");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "EmployeesInfo" of service "SAPB1".
 */
var EmployeesInfo = /** @class */ (function (_super) {
    __extends(EmployeesInfo, _super);
    function EmployeesInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances of `EmployeesInfo`.
     * @returns A builder that constructs instances of entity type `EmployeesInfo`.
     */
    EmployeesInfo.builder = function () {
        return core_1.EntityV4.entityBuilder(EmployeesInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `EmployeesInfo` entity type.
     * @returns A `EmployeesInfo` request builder.
     */
    EmployeesInfo.requestBuilder = function () {
        return new EmployeesInfoRequestBuilder_1.EmployeesInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeesInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeesInfo`.
     */
    EmployeesInfo.customField = function (fieldName) {
        return core_1.EntityV4.customFieldSelector(fieldName, EmployeesInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    EmployeesInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for EmployeesInfo.
     */
    EmployeesInfo._entityName = 'EmployeesInfo';
    /**
     * Default url path for the according service.
     */
    EmployeesInfo._defaultServicePath = '/b1s/v2/';
    return EmployeesInfo;
}(core_1.EntityV4));
exports.EmployeesInfo = EmployeesInfo;
var SalesOpportunities_1 = require("./SalesOpportunities");
var Warehouses_1 = require("./Warehouses");
var ProfitCenters_1 = require("./ProfitCenters");
var InventoryGenEntries_1 = require("./InventoryGenEntries");
var PurchaseQuotations_1 = require("./PurchaseQuotations");
var Items_1 = require("./Items");
var DeliveryNotes_1 = require("./DeliveryNotes");
var BusinessPartners_1 = require("./BusinessPartners");
var Quotations_1 = require("./Quotations");
var Campaigns_1 = require("./Campaigns");
var InventoryGenExits_1 = require("./InventoryGenExits");
var PurchaseRequests_1 = require("./PurchaseRequests");
var ReturnRequest_1 = require("./ReturnRequest");
var BlanketAgreements_1 = require("./BlanketAgreements");
var PurchaseReturns_1 = require("./PurchaseReturns");
var Invoices_1 = require("./Invoices");
var CreditNotes_1 = require("./CreditNotes");
var Orders_1 = require("./Orders");
var Activities_1 = require("./Activities");
var DownPayments_1 = require("./DownPayments");
var Drafts_1 = require("./Drafts");
var Returns_1 = require("./Returns");
var CorrectionInvoiceReversal_1 = require("./CorrectionInvoiceReversal");
var CorrectionPurchaseInvoice_1 = require("./CorrectionPurchaseInvoice");
var CorrectionPurchaseInvoiceReversal_1 = require("./CorrectionPurchaseInvoiceReversal");
var CustomerEquipmentCards_1 = require("./CustomerEquipmentCards");
var PurchaseInvoices_1 = require("./PurchaseInvoices");
var PurchaseDeliveryNotes_1 = require("./PurchaseDeliveryNotes");
var CorrectionInvoice_1 = require("./CorrectionInvoice");
var PurchaseCreditNotes_1 = require("./PurchaseCreditNotes");
var ServiceCalls_1 = require("./ServiceCalls");
var PurchaseDownPayments_1 = require("./PurchaseDownPayments");
var EmployeeRolesSetup_1 = require("./EmployeeRolesSetup");
var Departments_1 = require("./Departments");
var Branches_1 = require("./Branches");
var Countries_1 = require("./Countries");
var Users_1 = require("./Users");
var SalesPersons_1 = require("./SalesPersons");
var EmployeeStatus_1 = require("./EmployeeStatus");
var TerminationReason_1 = require("./TerminationReason");
var Banks_1 = require("./Banks");
var EmployeePosition_1 = require("./EmployeePosition");
var EmployeeIdType_1 = require("./EmployeeIdType");
var BusinessPlaces_1 = require("./BusinessPlaces");
var ProjectManagementTimeSheet_1 = require("./ProjectManagementTimeSheet");
var PurchaseOrders_1 = require("./PurchaseOrders");
var ProjectManagements_1 = require("./ProjectManagements");
var GoodsReturnRequest_1 = require("./GoodsReturnRequest");
(function (EmployeesInfo) {
    /**
     * Static representation of the [[employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_ID = new core_1.NumberField('EmployeeID', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.LAST_NAME = new core_1.StringField('LastName', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.FIRST_NAME = new core_1.StringField('FirstName', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.MIDDLE_NAME = new core_1.StringField('MiddleName', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.GENDER = new core_1.EnumField('Gender', EmployeesInfo);
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.JOB_TITLE = new core_1.StringField('JobTitle', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[employeeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_TYPE = new core_1.NumberField('EmployeeType', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DEPARTMENT = new core_1.NumberField('Department', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[branch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BRANCH = new core_1.NumberField('Branch', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[workStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_STREET = new core_1.StringField('WorkStreet', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_BLOCK = new core_1.StringField('WorkBlock', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_ZIP_CODE = new core_1.StringField('WorkZipCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_CITY = new core_1.StringField('WorkCity', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_COUNTY = new core_1.StringField('WorkCounty', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_COUNTRY_CODE = new core_1.StringField('WorkCountryCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workStateCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_STATE_CODE = new core_1.StringField('WorkStateCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.MANAGER = new core_1.NumberField('Manager', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[applicationUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.APPLICATION_USER_ID = new core_1.NumberField('ApplicationUserID', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[salesPersonCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SALES_PERSON_CODE = new core_1.NumberField('SalesPersonCode', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[officePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.OFFICE_PHONE = new core_1.StringField('OfficePhone', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[officeExtension]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.OFFICE_EXTENSION = new core_1.StringField('OfficeExtension', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[mobilePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.MOBILE_PHONE = new core_1.StringField('MobilePhone', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[pager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PAGER = new core_1.StringField('Pager', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_PHONE = new core_1.StringField('HomePhone', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.FAX = new core_1.StringField('Fax', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[eMail]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.E_MAIL = new core_1.StringField('eMail', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.START_DATE = new core_1.DateField('StartDate', EmployeesInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[statusCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.STATUS_CODE = new core_1.NumberField('StatusCode', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[salary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SALARY = new core_1.NumberField('Salary', EmployeesInfo, 'Edm.Double');
    /**
     * Static representation of the [[salaryUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SALARY_UNIT = new core_1.EnumField('SalaryUnit', EmployeesInfo);
    /**
     * Static representation of the [[employeeCosts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_COSTS = new core_1.NumberField('EmployeeCosts', EmployeesInfo, 'Edm.Double');
    /**
     * Static representation of the [[employeeCostUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_COST_UNIT = new core_1.EnumField('EmployeeCostUnit', EmployeesInfo);
    /**
     * Static representation of the [[terminationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.TERMINATION_DATE = new core_1.DateField('TerminationDate', EmployeesInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[treminationReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.TREMINATION_REASON = new core_1.NumberField('TreminationReason', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[bankCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BANK_CODE = new core_1.StringField('BankCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[bankBranch]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BANK_BRANCH = new core_1.StringField('BankBranch', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[bankBranchNum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BANK_BRANCH_NUM = new core_1.StringField('BankBranchNum', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[bankAccount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BANK_ACCOUNT = new core_1.StringField('BankAccount', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeStreet]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_STREET = new core_1.StringField('HomeStreet', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeBlock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_BLOCK = new core_1.StringField('HomeBlock', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_ZIP_CODE = new core_1.StringField('HomeZipCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_CITY = new core_1.StringField('HomeCity', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_COUNTY = new core_1.StringField('HomeCounty', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_COUNTRY = new core_1.StringField('HomeCountry', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_STATE = new core_1.StringField('HomeState', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DATE_OF_BIRTH = new core_1.DateField('DateOfBirth', EmployeesInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[countryOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.COUNTRY_OF_BIRTH = new core_1.StringField('CountryOfBirth', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[martialStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.MARTIAL_STATUS = new core_1.EnumField('MartialStatus', EmployeesInfo);
    /**
     * Static representation of the [[numOfChildren]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.NUM_OF_CHILDREN = new core_1.NumberField('NumOfChildren', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[idNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ID_NUMBER = new core_1.StringField('IdNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[citizenshipCountryCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CITIZENSHIP_COUNTRY_CODE = new core_1.StringField('CitizenshipCountryCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[passportNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PASSPORT_NUMBER = new core_1.StringField('PassportNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[passportExpirationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PASSPORT_EXPIRATION_DATE = new core_1.DateField('PassportExpirationDate', EmployeesInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[picture]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PICTURE = new core_1.StringField('Picture', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[remarks]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.REMARKS = new core_1.StringField('Remarks', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[salaryCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SALARY_CURRENCY = new core_1.StringField('SalaryCurrency', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[employeeCostsCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_COSTS_CURRENCY = new core_1.StringField('EmployeeCostsCurrency', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[workBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_BUILDING_FLOOR_ROOM = new core_1.StringField('WorkBuildingFloorRoom', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeBuildingFloorRoom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_BUILDING_FLOOR_ROOM = new core_1.StringField('HomeBuildingFloorRoom', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.POSITION = new core_1.NumberField('Position', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[attachmentEntry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ATTACHMENT_ENTRY = new core_1.NumberField('AttachmentEntry', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[costCenterCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.COST_CENTER_CODE = new core_1.StringField('CostCenterCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[companyNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.COMPANY_NUMBER = new core_1.StringField('CompanyNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[vacationPreviousYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.VACATION_PREVIOUS_YEAR = new core_1.NumberField('VacationPreviousYear', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[vacationCurrentYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.VACATION_CURRENT_YEAR = new core_1.NumberField('VacationCurrentYear', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[municipalityKey]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.MUNICIPALITY_KEY = new core_1.StringField('MunicipalityKey', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[taxClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.TAX_CLASS = new core_1.StringField('TaxClass', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[incomeTaxLiability]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.INCOME_TAX_LIABILITY = new core_1.StringField('IncomeTaxLiability', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[religion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.RELIGION = new core_1.StringField('Religion', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[partnerReligion]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PARTNER_RELIGION = new core_1.StringField('PartnerReligion', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[exemptionAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EXEMPTION_AMOUNT = new core_1.NumberField('ExemptionAmount', EmployeesInfo, 'Edm.Double');
    /**
     * Static representation of the [[exemptionUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EXEMPTION_UNIT = new core_1.EnumField('ExemptionUnit', EmployeesInfo);
    /**
     * Static representation of the [[exemptionCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EXEMPTION_CURRENCY = new core_1.StringField('ExemptionCurrency', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[additionalAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ADDITIONAL_AMOUNT = new core_1.NumberField('AdditionalAmount', EmployeesInfo, 'Edm.Double');
    /**
     * Static representation of the [[additionalUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ADDITIONAL_UNIT = new core_1.EnumField('AdditionalUnit', EmployeesInfo);
    /**
     * Static representation of the [[additionalCurrency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ADDITIONAL_CURRENCY = new core_1.StringField('AdditionalCurrency', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[taxOfficeName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.TAX_OFFICE_NAME = new core_1.StringField('TaxOfficeName', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[taxOfficeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.TAX_OFFICE_NUMBER = new core_1.StringField('TaxOfficeNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[healthInsuranceName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HEALTH_INSURANCE_NAME = new core_1.StringField('HealthInsuranceName', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[healthInsuranceCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HEALTH_INSURANCE_CODE = new core_1.StringField('HealthInsuranceCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[healthInsuranceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HEALTH_INSURANCE_TYPE = new core_1.StringField('HealthInsuranceType', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[socialInsuranceNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SOCIAL_INSURANCE_NUMBER = new core_1.StringField('SocialInsuranceNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[professionStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PROFESSION_STATUS = new core_1.StringField('ProfessionStatus', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[educationStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EDUCATION_STATUS = new core_1.StringField('EducationStatus', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[personGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PERSON_GROUP = new core_1.StringField('PersonGroup', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[jobTitleCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.JOB_TITLE_CODE = new core_1.StringField('JobTitleCode', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[bankCodeForDatev]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BANK_CODE_FOR_DATEV = new core_1.StringField('BankCodeForDATEV', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[deviatingBankAccountOwner]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DEVIATING_BANK_ACCOUNT_OWNER = new core_1.EnumField('DeviatingBankAccountOwner', EmployeesInfo);
    /**
     * Static representation of the [[spouseFirstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SPOUSE_FIRST_NAME = new core_1.StringField('SpouseFirstName', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[spouseSurname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SPOUSE_SURNAME = new core_1.StringField('SpouseSurname', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[externalEmployeeNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EXTERNAL_EMPLOYEE_NUMBER = new core_1.StringField('ExternalEmployeeNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[birthPlace]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BIRTH_PLACE = new core_1.StringField('BirthPlace', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[paymentMethod]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PAYMENT_METHOD = new core_1.EnumField('PaymentMethod', EmployeesInfo);
    /**
     * Static representation of the [[stdCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.STD_CODE = new core_1.NumberField('STDCode', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[cpf]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CPF = new core_1.StringField('CPF', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[crcNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CRC_NUMBER = new core_1.StringField('CRCNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[accountantResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ACCOUNTANT_RESPONSIBLE = new core_1.EnumField('AccountantResponsible', EmployeesInfo);
    /**
     * Static representation of the [[legalRepresentative]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.LEGAL_REPRESENTATIVE = new core_1.EnumField('LegalRepresentative', EmployeesInfo);
    /**
     * Static representation of the [[dirfResponsible]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DIRF_RESPONSIBLE = new core_1.EnumField('DIRFResponsible', EmployeesInfo);
    /**
     * Static representation of the [[crcState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CRC_STATE = new core_1.StringField('CRCState', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[active]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ACTIVE = new core_1.EnumField('Active', EmployeesInfo);
    /**
     * Static representation of the [[idType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ID_TYPE = new core_1.StringField('IDType', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[bplid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BPLID = new core_1.NumberField('BPLID', EmployeesInfo, 'Edm.Int32');
    /**
     * Static representation of the [[passportIssueDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PASSPORT_ISSUE_DATE = new core_1.DateField('PassportIssueDate', EmployeesInfo, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[passportIssuer]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PASSPORT_ISSUER = new core_1.StringField('PassportIssuer', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[qualificationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.QUALIFICATION_CODE = new core_1.EnumField('QualificationCode', EmployeesInfo);
    /**
     * Static representation of the [[prWebAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PR_WEB_ACCESS = new core_1.EnumField('PRWebAccess', EmployeesInfo);
    /**
     * Static representation of the [[previousPrWebAccess]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PREVIOUS_PR_WEB_ACCESS = new core_1.EnumField('PreviousPRWebAccess', EmployeesInfo);
    /**
     * Static representation of the [[workStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WORK_STREET_NUMBER = new core_1.StringField('WorkStreetNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[homeStreetNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.HOME_STREET_NUMBER = new core_1.StringField('HomeStreetNumber', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[linkedVendor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.LINKED_VENDOR = new core_1.StringField('LinkedVendor', EmployeesInfo, 'Edm.String');
    /**
     * Static representation of the [[employeeAbsenceInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_ABSENCE_INFO_LINES = new core_1.CollectionField('EmployeeAbsenceInfoLines', EmployeesInfo, EmployeeAbsenceInfo_1.EmployeeAbsenceInfo);
    /**
     * Static representation of the [[employeeEducationInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_EDUCATION_INFO_LINES = new core_1.CollectionField('EmployeeEducationInfoLines', EmployeesInfo, EmployeeEducationInfo_1.EmployeeEducationInfo);
    /**
     * Static representation of the [[employeeReviewsInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_REVIEWS_INFO_LINES = new core_1.CollectionField('EmployeeReviewsInfoLines', EmployeesInfo, EmployeeReviewsInfo_1.EmployeeReviewsInfo);
    /**
     * Static representation of the [[employeePreviousEmpoymentInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_PREVIOUS_EMPOYMENT_INFO_LINES = new core_1.CollectionField('EmployeePreviousEmpoymentInfoLines', EmployeesInfo, EmployeePreviousEmpoymentInfo_1.EmployeePreviousEmpoymentInfo);
    /**
     * Static representation of the [[employeeRolesInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_ROLES_INFO_LINES = new core_1.CollectionField('EmployeeRolesInfoLines', EmployeesInfo, EmployeeRolesInfo_1.EmployeeRolesInfo);
    /**
     * Static representation of the [[employeeSavingsPaymentInfoLines]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_SAVINGS_PAYMENT_INFO_LINES = new core_1.CollectionField('EmployeeSavingsPaymentInfoLines', EmployeesInfo, EmployeeSavingsPaymentInfo_1.EmployeeSavingsPaymentInfo);
    /**
     * Static representation of the [[employeeBranchAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_BRANCH_ASSIGNMENT = new core_1.CollectionField('EmployeeBranchAssignment', EmployeesInfo, EmployeeBranchAssignmentItem_1.EmployeeBranchAssignmentItem);
    /**
     * Static representation of the one-to-many navigation property [[salesOpportunities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SALES_OPPORTUNITIES = new core_1.OneToManyLink('SalesOpportunities', EmployeesInfo, SalesOpportunities_1.SalesOpportunities);
    /**
     * Static representation of the one-to-many navigation property [[warehouses]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.WAREHOUSES = new core_1.OneToManyLink('Warehouses', EmployeesInfo, Warehouses_1.Warehouses);
    /**
     * Static representation of the one-to-many navigation property [[profitCenters]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PROFIT_CENTERS = new core_1.OneToManyLink('ProfitCenters', EmployeesInfo, ProfitCenters_1.ProfitCenters);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenEntries]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.INVENTORY_GEN_ENTRIES = new core_1.OneToManyLink('InventoryGenEntries', EmployeesInfo, InventoryGenEntries_1.InventoryGenEntries);
    /**
     * Static representation of the one-to-many navigation property [[purchaseQuotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_QUOTATIONS = new core_1.OneToManyLink('PurchaseQuotations', EmployeesInfo, PurchaseQuotations_1.PurchaseQuotations);
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ITEMS = new core_1.OneToManyLink('Items', EmployeesInfo, Items_1.Items);
    /**
     * Static representation of the one-to-many navigation property [[deliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DELIVERY_NOTES = new core_1.OneToManyLink('DeliveryNotes', EmployeesInfo, DeliveryNotes_1.DeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[businessPartners]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BUSINESS_PARTNERS = new core_1.OneToManyLink('BusinessPartners', EmployeesInfo, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[quotations]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.QUOTATIONS = new core_1.OneToManyLink('Quotations', EmployeesInfo, Quotations_1.Quotations);
    /**
     * Static representation of the one-to-many navigation property [[campaigns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CAMPAIGNS = new core_1.OneToManyLink('Campaigns', EmployeesInfo, Campaigns_1.Campaigns);
    /**
     * Static representation of the one-to-many navigation property [[inventoryGenExits]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.INVENTORY_GEN_EXITS = new core_1.OneToManyLink('InventoryGenExits', EmployeesInfo, InventoryGenExits_1.InventoryGenExits);
    /**
     * Static representation of the one-to-many navigation property [[purchaseRequests]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_REQUESTS = new core_1.OneToManyLink('PurchaseRequests', EmployeesInfo, PurchaseRequests_1.PurchaseRequests);
    /**
     * Static representation of the one-to-many navigation property [[returnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.RETURN_REQUEST = new core_1.OneToManyLink('ReturnRequest', EmployeesInfo, ReturnRequest_1.ReturnRequest);
    /**
     * Static representation of the one-to-many navigation property [[blanketAgreements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BLANKET_AGREEMENTS = new core_1.OneToManyLink('BlanketAgreements', EmployeesInfo, BlanketAgreements_1.BlanketAgreements);
    /**
     * Static representation of the one-to-many navigation property [[purchaseReturns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_RETURNS = new core_1.OneToManyLink('PurchaseReturns', EmployeesInfo, PurchaseReturns_1.PurchaseReturns);
    /**
     * Static representation of the one-to-many navigation property [[invoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.INVOICES = new core_1.OneToManyLink('Invoices', EmployeesInfo, Invoices_1.Invoices);
    /**
     * Static representation of the one-to-many navigation property [[creditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CREDIT_NOTES = new core_1.OneToManyLink('CreditNotes', EmployeesInfo, CreditNotes_1.CreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[orders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ORDERS = new core_1.OneToManyLink('Orders', EmployeesInfo, Orders_1.Orders);
    /**
     * Static representation of the one-to-many navigation property [[activities]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.ACTIVITIES = new core_1.OneToManyLink('Activities', EmployeesInfo, Activities_1.Activities);
    /**
     * Static representation of the one-to-many navigation property [[downPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DOWN_PAYMENTS = new core_1.OneToManyLink('DownPayments', EmployeesInfo, DownPayments_1.DownPayments);
    /**
     * Static representation of the one-to-many navigation property [[drafts]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DRAFTS = new core_1.OneToManyLink('Drafts', EmployeesInfo, Drafts_1.Drafts);
    /**
     * Static representation of the one-to-many navigation property [[returns]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.RETURNS = new core_1.OneToManyLink('Returns', EmployeesInfo, Returns_1.Returns);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CORRECTION_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionInvoiceReversal', EmployeesInfo, CorrectionInvoiceReversal_1.CorrectionInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CORRECTION_PURCHASE_INVOICE = new core_1.OneToManyLink('CorrectionPurchaseInvoice', EmployeesInfo, CorrectionPurchaseInvoice_1.CorrectionPurchaseInvoice);
    /**
     * Static representation of the one-to-many navigation property [[correctionPurchaseInvoiceReversal]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CORRECTION_PURCHASE_INVOICE_REVERSAL = new core_1.OneToManyLink('CorrectionPurchaseInvoiceReversal', EmployeesInfo, CorrectionPurchaseInvoiceReversal_1.CorrectionPurchaseInvoiceReversal);
    /**
     * Static representation of the one-to-many navigation property [[customerEquipmentCards]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CUSTOMER_EQUIPMENT_CARDS = new core_1.OneToManyLink('CustomerEquipmentCards', EmployeesInfo, CustomerEquipmentCards_1.CustomerEquipmentCards);
    /**
     * Static representation of the one-to-many navigation property [[purchaseInvoices]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_INVOICES = new core_1.OneToManyLink('PurchaseInvoices', EmployeesInfo, PurchaseInvoices_1.PurchaseInvoices);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDeliveryNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_DELIVERY_NOTES = new core_1.OneToManyLink('PurchaseDeliveryNotes', EmployeesInfo, PurchaseDeliveryNotes_1.PurchaseDeliveryNotes);
    /**
     * Static representation of the one-to-many navigation property [[correctionInvoice]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.CORRECTION_INVOICE = new core_1.OneToManyLink('CorrectionInvoice', EmployeesInfo, CorrectionInvoice_1.CorrectionInvoice);
    /**
     * Static representation of the one-to-many navigation property [[purchaseCreditNotes]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_CREDIT_NOTES = new core_1.OneToManyLink('PurchaseCreditNotes', EmployeesInfo, PurchaseCreditNotes_1.PurchaseCreditNotes);
    /**
     * Static representation of the one-to-many navigation property [[serviceCalls]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SERVICE_CALLS = new core_1.OneToManyLink('ServiceCalls', EmployeesInfo, ServiceCalls_1.ServiceCalls);
    /**
     * Static representation of the one-to-many navigation property [[purchaseDownPayments]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_DOWN_PAYMENTS = new core_1.OneToManyLink('PurchaseDownPayments', EmployeesInfo, PurchaseDownPayments_1.PurchaseDownPayments);
    /**
     * Static representation of the one-to-one navigation property [[employeeRoleSetup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_ROLE_SETUP = new core_1.OneToOneLink('EmployeeRoleSetup', EmployeesInfo, EmployeeRolesSetup_1.EmployeeRolesSetup);
    /**
     * Static representation of the one-to-one navigation property [[department2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.DEPARTMENT_2 = new core_1.OneToOneLink('Department2', EmployeesInfo, Departments_1.Departments);
    /**
     * Static representation of the one-to-one navigation property [[branch2]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BRANCH_2 = new core_1.OneToOneLink('Branch2', EmployeesInfo, Branches_1.Branches);
    /**
     * Static representation of the one-to-one navigation property [[country]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.COUNTRY = new core_1.OneToOneLink('Country', EmployeesInfo, Countries_1.Countries);
    /**
     * Static representation of the one-to-one navigation property [[user]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.USER = new core_1.OneToOneLink('User', EmployeesInfo, Users_1.Users);
    /**
     * Static representation of the one-to-one navigation property [[salesPerson]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.SALES_PERSON = new core_1.OneToOneLink('SalesPerson', EmployeesInfo, SalesPersons_1.SalesPersons);
    /**
     * Static representation of the one-to-one navigation property [[employeeStatus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_STATUS = new core_1.OneToOneLink('EmployeeStatus', EmployeesInfo, EmployeeStatus_1.EmployeeStatus);
    /**
     * Static representation of the one-to-one navigation property [[terminationReason]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.TERMINATION_REASON = new core_1.OneToOneLink('TerminationReason', EmployeesInfo, TerminationReason_1.TerminationReason);
    /**
     * Static representation of the one-to-one navigation property [[bank]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BANK = new core_1.OneToOneLink('Bank', EmployeesInfo, Banks_1.Banks);
    /**
     * Static representation of the one-to-one navigation property [[employeePosition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_POSITION = new core_1.OneToOneLink('EmployeePosition', EmployeesInfo, EmployeePosition_1.EmployeePosition);
    /**
     * Static representation of the one-to-one navigation property [[profitCenter]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PROFIT_CENTER = new core_1.OneToOneLink('ProfitCenter', EmployeesInfo, ProfitCenters_1.ProfitCenters);
    /**
     * Static representation of the one-to-one navigation property [[employeeIdType]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.EMPLOYEE_ID_TYPE = new core_1.OneToOneLink('EmployeeIDType', EmployeesInfo, EmployeeIdType_1.EmployeeIdType);
    /**
     * Static representation of the one-to-one navigation property [[businessPlace]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BUSINESS_PLACE = new core_1.OneToOneLink('BusinessPlace', EmployeesInfo, BusinessPlaces_1.BusinessPlaces);
    /**
     * Static representation of the one-to-one navigation property [[businessPartner]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.BUSINESS_PARTNER = new core_1.OneToOneLink('BusinessPartner', EmployeesInfo, BusinessPartners_1.BusinessPartners);
    /**
     * Static representation of the one-to-many navigation property [[projectManagementTimeSheet]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PROJECT_MANAGEMENT_TIME_SHEET = new core_1.OneToManyLink('ProjectManagementTimeSheet', EmployeesInfo, ProjectManagementTimeSheet_1.ProjectManagementTimeSheet);
    /**
     * Static representation of the one-to-many navigation property [[purchaseOrders]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PURCHASE_ORDERS = new core_1.OneToManyLink('PurchaseOrders', EmployeesInfo, PurchaseOrders_1.PurchaseOrders);
    /**
     * Static representation of the one-to-many navigation property [[projectManagements]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.PROJECT_MANAGEMENTS = new core_1.OneToManyLink('ProjectManagements', EmployeesInfo, ProjectManagements_1.ProjectManagements);
    /**
     * Static representation of the one-to-many navigation property [[goodsReturnRequest]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    EmployeesInfo.GOODS_RETURN_REQUEST = new core_1.OneToManyLink('GoodsReturnRequest', EmployeesInfo, GoodsReturnRequest_1.GoodsReturnRequest);
    /**
     * All fields of the EmployeesInfo entity.
     */
    EmployeesInfo._allFields = [
        EmployeesInfo.EMPLOYEE_ID,
        EmployeesInfo.LAST_NAME,
        EmployeesInfo.FIRST_NAME,
        EmployeesInfo.MIDDLE_NAME,
        EmployeesInfo.GENDER,
        EmployeesInfo.JOB_TITLE,
        EmployeesInfo.EMPLOYEE_TYPE,
        EmployeesInfo.DEPARTMENT,
        EmployeesInfo.BRANCH,
        EmployeesInfo.WORK_STREET,
        EmployeesInfo.WORK_BLOCK,
        EmployeesInfo.WORK_ZIP_CODE,
        EmployeesInfo.WORK_CITY,
        EmployeesInfo.WORK_COUNTY,
        EmployeesInfo.WORK_COUNTRY_CODE,
        EmployeesInfo.WORK_STATE_CODE,
        EmployeesInfo.MANAGER,
        EmployeesInfo.APPLICATION_USER_ID,
        EmployeesInfo.SALES_PERSON_CODE,
        EmployeesInfo.OFFICE_PHONE,
        EmployeesInfo.OFFICE_EXTENSION,
        EmployeesInfo.MOBILE_PHONE,
        EmployeesInfo.PAGER,
        EmployeesInfo.HOME_PHONE,
        EmployeesInfo.FAX,
        EmployeesInfo.E_MAIL,
        EmployeesInfo.START_DATE,
        EmployeesInfo.STATUS_CODE,
        EmployeesInfo.SALARY,
        EmployeesInfo.SALARY_UNIT,
        EmployeesInfo.EMPLOYEE_COSTS,
        EmployeesInfo.EMPLOYEE_COST_UNIT,
        EmployeesInfo.TERMINATION_DATE,
        EmployeesInfo.TREMINATION_REASON,
        EmployeesInfo.BANK_CODE,
        EmployeesInfo.BANK_BRANCH,
        EmployeesInfo.BANK_BRANCH_NUM,
        EmployeesInfo.BANK_ACCOUNT,
        EmployeesInfo.HOME_STREET,
        EmployeesInfo.HOME_BLOCK,
        EmployeesInfo.HOME_ZIP_CODE,
        EmployeesInfo.HOME_CITY,
        EmployeesInfo.HOME_COUNTY,
        EmployeesInfo.HOME_COUNTRY,
        EmployeesInfo.HOME_STATE,
        EmployeesInfo.DATE_OF_BIRTH,
        EmployeesInfo.COUNTRY_OF_BIRTH,
        EmployeesInfo.MARTIAL_STATUS,
        EmployeesInfo.NUM_OF_CHILDREN,
        EmployeesInfo.ID_NUMBER,
        EmployeesInfo.CITIZENSHIP_COUNTRY_CODE,
        EmployeesInfo.PASSPORT_NUMBER,
        EmployeesInfo.PASSPORT_EXPIRATION_DATE,
        EmployeesInfo.PICTURE,
        EmployeesInfo.REMARKS,
        EmployeesInfo.SALARY_CURRENCY,
        EmployeesInfo.EMPLOYEE_COSTS_CURRENCY,
        EmployeesInfo.WORK_BUILDING_FLOOR_ROOM,
        EmployeesInfo.HOME_BUILDING_FLOOR_ROOM,
        EmployeesInfo.POSITION,
        EmployeesInfo.ATTACHMENT_ENTRY,
        EmployeesInfo.COST_CENTER_CODE,
        EmployeesInfo.COMPANY_NUMBER,
        EmployeesInfo.VACATION_PREVIOUS_YEAR,
        EmployeesInfo.VACATION_CURRENT_YEAR,
        EmployeesInfo.MUNICIPALITY_KEY,
        EmployeesInfo.TAX_CLASS,
        EmployeesInfo.INCOME_TAX_LIABILITY,
        EmployeesInfo.RELIGION,
        EmployeesInfo.PARTNER_RELIGION,
        EmployeesInfo.EXEMPTION_AMOUNT,
        EmployeesInfo.EXEMPTION_UNIT,
        EmployeesInfo.EXEMPTION_CURRENCY,
        EmployeesInfo.ADDITIONAL_AMOUNT,
        EmployeesInfo.ADDITIONAL_UNIT,
        EmployeesInfo.ADDITIONAL_CURRENCY,
        EmployeesInfo.TAX_OFFICE_NAME,
        EmployeesInfo.TAX_OFFICE_NUMBER,
        EmployeesInfo.HEALTH_INSURANCE_NAME,
        EmployeesInfo.HEALTH_INSURANCE_CODE,
        EmployeesInfo.HEALTH_INSURANCE_TYPE,
        EmployeesInfo.SOCIAL_INSURANCE_NUMBER,
        EmployeesInfo.PROFESSION_STATUS,
        EmployeesInfo.EDUCATION_STATUS,
        EmployeesInfo.PERSON_GROUP,
        EmployeesInfo.JOB_TITLE_CODE,
        EmployeesInfo.BANK_CODE_FOR_DATEV,
        EmployeesInfo.DEVIATING_BANK_ACCOUNT_OWNER,
        EmployeesInfo.SPOUSE_FIRST_NAME,
        EmployeesInfo.SPOUSE_SURNAME,
        EmployeesInfo.EXTERNAL_EMPLOYEE_NUMBER,
        EmployeesInfo.BIRTH_PLACE,
        EmployeesInfo.PAYMENT_METHOD,
        EmployeesInfo.STD_CODE,
        EmployeesInfo.CPF,
        EmployeesInfo.CRC_NUMBER,
        EmployeesInfo.ACCOUNTANT_RESPONSIBLE,
        EmployeesInfo.LEGAL_REPRESENTATIVE,
        EmployeesInfo.DIRF_RESPONSIBLE,
        EmployeesInfo.CRC_STATE,
        EmployeesInfo.ACTIVE,
        EmployeesInfo.ID_TYPE,
        EmployeesInfo.BPLID,
        EmployeesInfo.PASSPORT_ISSUE_DATE,
        EmployeesInfo.PASSPORT_ISSUER,
        EmployeesInfo.QUALIFICATION_CODE,
        EmployeesInfo.PR_WEB_ACCESS,
        EmployeesInfo.PREVIOUS_PR_WEB_ACCESS,
        EmployeesInfo.WORK_STREET_NUMBER,
        EmployeesInfo.HOME_STREET_NUMBER,
        EmployeesInfo.LINKED_VENDOR,
        EmployeesInfo.EMPLOYEE_ABSENCE_INFO_LINES,
        EmployeesInfo.EMPLOYEE_EDUCATION_INFO_LINES,
        EmployeesInfo.EMPLOYEE_REVIEWS_INFO_LINES,
        EmployeesInfo.EMPLOYEE_PREVIOUS_EMPOYMENT_INFO_LINES,
        EmployeesInfo.EMPLOYEE_ROLES_INFO_LINES,
        EmployeesInfo.EMPLOYEE_SAVINGS_PAYMENT_INFO_LINES,
        EmployeesInfo.EMPLOYEE_BRANCH_ASSIGNMENT,
        EmployeesInfo.SALES_OPPORTUNITIES,
        EmployeesInfo.WAREHOUSES,
        EmployeesInfo.PROFIT_CENTERS,
        EmployeesInfo.INVENTORY_GEN_ENTRIES,
        EmployeesInfo.PURCHASE_QUOTATIONS,
        EmployeesInfo.ITEMS,
        EmployeesInfo.DELIVERY_NOTES,
        EmployeesInfo.BUSINESS_PARTNERS,
        EmployeesInfo.QUOTATIONS,
        EmployeesInfo.CAMPAIGNS,
        EmployeesInfo.INVENTORY_GEN_EXITS,
        EmployeesInfo.PURCHASE_REQUESTS,
        EmployeesInfo.RETURN_REQUEST,
        EmployeesInfo.BLANKET_AGREEMENTS,
        EmployeesInfo.PURCHASE_RETURNS,
        EmployeesInfo.INVOICES,
        EmployeesInfo.CREDIT_NOTES,
        EmployeesInfo.ORDERS,
        EmployeesInfo.ACTIVITIES,
        EmployeesInfo.DOWN_PAYMENTS,
        EmployeesInfo.DRAFTS,
        EmployeesInfo.RETURNS,
        EmployeesInfo.CORRECTION_INVOICE_REVERSAL,
        EmployeesInfo.CORRECTION_PURCHASE_INVOICE,
        EmployeesInfo.CORRECTION_PURCHASE_INVOICE_REVERSAL,
        EmployeesInfo.CUSTOMER_EQUIPMENT_CARDS,
        EmployeesInfo.PURCHASE_INVOICES,
        EmployeesInfo.PURCHASE_DELIVERY_NOTES,
        EmployeesInfo.CORRECTION_INVOICE,
        EmployeesInfo.PURCHASE_CREDIT_NOTES,
        EmployeesInfo.SERVICE_CALLS,
        EmployeesInfo.PURCHASE_DOWN_PAYMENTS,
        EmployeesInfo.EMPLOYEE_ROLE_SETUP,
        EmployeesInfo.DEPARTMENT_2,
        EmployeesInfo.BRANCH_2,
        EmployeesInfo.COUNTRY,
        EmployeesInfo.USER,
        EmployeesInfo.SALES_PERSON,
        EmployeesInfo.EMPLOYEE_STATUS,
        EmployeesInfo.TERMINATION_REASON,
        EmployeesInfo.BANK,
        EmployeesInfo.EMPLOYEE_POSITION,
        EmployeesInfo.PROFIT_CENTER,
        EmployeesInfo.EMPLOYEE_ID_TYPE,
        EmployeesInfo.BUSINESS_PLACE,
        EmployeesInfo.BUSINESS_PARTNER,
        EmployeesInfo.PROJECT_MANAGEMENT_TIME_SHEET,
        EmployeesInfo.PURCHASE_ORDERS,
        EmployeesInfo.PROJECT_MANAGEMENTS,
        EmployeesInfo.GOODS_RETURN_REQUEST
    ];
    /**
     * All fields selector.
     */
    EmployeesInfo.ALL_FIELDS = new core_1.AllFields('*', EmployeesInfo);
    /**
     * All key fields of the EmployeesInfo entity.
     */
    EmployeesInfo._keyFields = [EmployeesInfo.EMPLOYEE_ID];
    /**
     * Mapping of all key field names to the respective static field property EmployeesInfo.
     */
    EmployeesInfo._keys = EmployeesInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(EmployeesInfo = exports.EmployeesInfo || (exports.EmployeesInfo = {}));
exports.EmployeesInfo = EmployeesInfo;
//# sourceMappingURL=EmployeesInfo.js.map