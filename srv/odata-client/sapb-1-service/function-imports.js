"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.functionImports = exports.sboBobServiceGetSystemCurrency = exports.userMenuServiceGetCurrentUserMenu = exports.sboBobServiceGetSystemPermission = exports.companyServiceGetCompanyInfo = exports.companyServiceGetAdminInfo = exports.companyServiceGetPathAdmin = exports.messagesServiceGetInbox = exports.messagesServiceGetOutbox = exports.sboBobServiceGetDueDate = exports.sboBobServiceGetLocalCurrency = exports.sboBobServiceGetCurrencyRate = exports.sboBobServiceGetIndexRate = exports.sboBobServiceFormatMoneyToString = exports.licenseServiceGetInstallationNumber = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var MessageHeader_1 = require("./MessageHeader");
var PathAdmin_1 = require("./PathAdmin");
var AdminInfo_1 = require("./AdminInfo");
var CompanyInfo_1 = require("./CompanyInfo");
var UserMenuItem_1 = require("./UserMenuItem");
/**
 * License Service Get Installation Number.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function licenseServiceGetInstallationNumber(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'LicenseService_GetInstallationNumber', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.String'); }); }, params);
}
exports.licenseServiceGetInstallationNumber = licenseServiceGetInstallationNumber;
/**
 * Sbo Bob Service Format Money To String.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceFormatMoneyToString(parameters) {
    var params = {
        inMoney: new core_1.FunctionImportParameter('InMoney', 'Edm.Double', parameters.inMoney),
        inPrecision: new core_1.FunctionImportParameter('InPrecision', 'Edm.String', parameters.inPrecision)
    };
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_Format_MoneyToString', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.String'); }); }, params);
}
exports.sboBobServiceFormatMoneyToString = sboBobServiceFormatMoneyToString;
/**
 * Sbo Bob Service Get Index Rate.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceGetIndexRate(parameters) {
    var params = {
        index: new core_1.FunctionImportParameter('Index', 'Edm.String', parameters.index),
        date: new core_1.FunctionImportParameter('Date', 'Edm.String', parameters.date)
    };
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetIndexRate', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.Double'); }); }, params);
}
exports.sboBobServiceGetIndexRate = sboBobServiceGetIndexRate;
/**
 * Sbo Bob Service Get Currency Rate.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceGetCurrencyRate(parameters) {
    var params = {
        currency: new core_1.FunctionImportParameter('Currency', 'Edm.String', parameters.currency),
        date: new core_1.FunctionImportParameter('Date', 'Edm.String', parameters.date)
    };
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetCurrencyRate', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.Double'); }); }, params);
}
exports.sboBobServiceGetCurrencyRate = sboBobServiceGetCurrencyRate;
/**
 * Sbo Bob Service Get Local Currency.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceGetLocalCurrency(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetLocalCurrency', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.String'); }); }, params);
}
exports.sboBobServiceGetLocalCurrency = sboBobServiceGetLocalCurrency;
/**
 * Sbo Bob Service Get Due Date.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceGetDueDate(parameters) {
    var params = {
        cardCode: new core_1.FunctionImportParameter('CardCode', 'Edm.String', parameters.cardCode),
        refDate: new core_1.FunctionImportParameter('RefDate', 'Edm.String', parameters.refDate)
    };
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetDueDate', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.String'); }); }, params);
}
exports.sboBobServiceGetDueDate = sboBobServiceGetDueDate;
/**
 * Messages Service Get Outbox.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function messagesServiceGetOutbox(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'MessagesService_GetOutbox', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, MessageHeader_1.MessageHeader); }); }, params);
}
exports.messagesServiceGetOutbox = messagesServiceGetOutbox;
/**
 * Messages Service Get Inbox.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function messagesServiceGetInbox(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'MessagesService_GetInbox', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, MessageHeader_1.MessageHeader); }); }, params);
}
exports.messagesServiceGetInbox = messagesServiceGetInbox;
/**
 * Company Service Get Path Admin.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function companyServiceGetPathAdmin(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'CompanyService_GetPathAdmin', function (data) { return core_1.transformReturnValueForComplexTypeV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PathAdmin_1.PathAdmin); }); }, params);
}
exports.companyServiceGetPathAdmin = companyServiceGetPathAdmin;
/**
 * Company Service Get Admin Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function companyServiceGetAdminInfo(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'CompanyService_GetAdminInfo', function (data) { return core_1.transformReturnValueForComplexTypeV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AdminInfo_1.AdminInfo); }); }, params);
}
exports.companyServiceGetAdminInfo = companyServiceGetAdminInfo;
/**
 * Company Service Get Company Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function companyServiceGetCompanyInfo(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'CompanyService_GetCompanyInfo', function (data) { return core_1.transformReturnValueForComplexTypeV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CompanyInfo_1.CompanyInfo); }); }, params);
}
exports.companyServiceGetCompanyInfo = companyServiceGetCompanyInfo;
/**
 * Sbo Bob Service Get System Permission.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceGetSystemPermission(parameters) {
    var params = {
        userCode: new core_1.FunctionImportParameter('UserCode', 'Edm.String', parameters.userCode),
        permissionId: new core_1.FunctionImportParameter('PermissionID', 'Edm.String', parameters.permissionId)
    };
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetSystemPermission', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.Int32'); }); }, params);
}
exports.sboBobServiceGetSystemPermission = sboBobServiceGetSystemPermission;
/**
 * User Menu Service Get Current User Menu.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function userMenuServiceGetCurrentUserMenu(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'UserMenuService_GetCurrentUserMenu', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, UserMenuItem_1.UserMenuItem); }); }, params);
}
exports.userMenuServiceGetCurrentUserMenu = userMenuServiceGetCurrentUserMenu;
/**
 * Sbo Bob Service Get System Currency.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
function sboBobServiceGetSystemCurrency(parameters) {
    var params = {};
    return new core_1.FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetSystemCurrency', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.String'); }); }, params);
}
exports.sboBobServiceGetSystemCurrency = sboBobServiceGetSystemCurrency;
exports.functionImports = {
    licenseServiceGetInstallationNumber: licenseServiceGetInstallationNumber,
    sboBobServiceFormatMoneyToString: sboBobServiceFormatMoneyToString,
    sboBobServiceGetIndexRate: sboBobServiceGetIndexRate,
    sboBobServiceGetCurrencyRate: sboBobServiceGetCurrencyRate,
    sboBobServiceGetLocalCurrency: sboBobServiceGetLocalCurrency,
    sboBobServiceGetDueDate: sboBobServiceGetDueDate,
    messagesServiceGetOutbox: messagesServiceGetOutbox,
    messagesServiceGetInbox: messagesServiceGetInbox,
    companyServiceGetPathAdmin: companyServiceGetPathAdmin,
    companyServiceGetAdminInfo: companyServiceGetAdminInfo,
    companyServiceGetCompanyInfo: companyServiceGetCompanyInfo,
    sboBobServiceGetSystemPermission: sboBobServiceGetSystemPermission,
    userMenuServiceGetCurrentUserMenu: userMenuServiceGetCurrentUserMenu,
    sboBobServiceGetSystemCurrency: sboBobServiceGetSystemCurrency
};
//# sourceMappingURL=function-imports.js.map