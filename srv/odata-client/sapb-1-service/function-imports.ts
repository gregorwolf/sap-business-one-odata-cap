/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForEdmTypeV4, transformReturnValueForComplexTypeListV4, transformReturnValueForComplexTypeV4, edmToTsV4, deserializeComplexTypeV4, FunctionImportRequestBuilderV4, FunctionImportParameter } from '@sap-cloud-sdk/core';
import { MessageHeader } from './MessageHeader';
import { PathAdmin } from './PathAdmin';
import { AdminInfo } from './AdminInfo';
import { CompanyInfo } from './CompanyInfo';
import { UserMenuItem } from './UserMenuItem';

/**
 * Type of the parameters to be passed to [[licenseServiceGetInstallationNumber]].
 */
export interface LicenseServiceGetInstallationNumberParameters {
}

/**
 * License Service Get Installation Number.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function licenseServiceGetInstallationNumber(parameters: LicenseServiceGetInstallationNumberParameters): FunctionImportRequestBuilderV4<LicenseServiceGetInstallationNumberParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'LicenseService_GetInstallationNumber', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceFormatMoneyToString]].
 */
export interface SboBobServiceFormatMoneyToStringParameters {
  /**
   * In Money.
   */
  inMoney: number;
  /**
   * In Precision.
   */
  inPrecision: string;
}

/**
 * Sbo Bob Service Format Money To String.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceFormatMoneyToString(parameters: SboBobServiceFormatMoneyToStringParameters): FunctionImportRequestBuilderV4<SboBobServiceFormatMoneyToStringParameters, string> {
  const params = {
    inMoney: new FunctionImportParameter('InMoney', 'Edm.Double', parameters.inMoney),
    inPrecision: new FunctionImportParameter('InPrecision', 'Edm.String', parameters.inPrecision)
  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_Format_MoneyToString', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceGetIndexRate]].
 */
export interface SboBobServiceGetIndexRateParameters {
  /**
   * Index.
   */
  index: string;
  /**
   * Date.
   */
  date: string;
}

/**
 * Sbo Bob Service Get Index Rate.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceGetIndexRate(parameters: SboBobServiceGetIndexRateParameters): FunctionImportRequestBuilderV4<SboBobServiceGetIndexRateParameters, number> {
  const params = {
    index: new FunctionImportParameter('Index', 'Edm.String', parameters.index),
    date: new FunctionImportParameter('Date', 'Edm.String', parameters.date)
  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetIndexRate', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.Double')), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceGetCurrencyRate]].
 */
export interface SboBobServiceGetCurrencyRateParameters {
  /**
   * Currency.
   */
  currency: string;
  /**
   * Date.
   */
  date: string;
}

/**
 * Sbo Bob Service Get Currency Rate.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceGetCurrencyRate(parameters: SboBobServiceGetCurrencyRateParameters): FunctionImportRequestBuilderV4<SboBobServiceGetCurrencyRateParameters, number> {
  const params = {
    currency: new FunctionImportParameter('Currency', 'Edm.String', parameters.currency),
    date: new FunctionImportParameter('Date', 'Edm.String', parameters.date)
  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetCurrencyRate', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.Double')), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceGetLocalCurrency]].
 */
export interface SboBobServiceGetLocalCurrencyParameters {
}

/**
 * Sbo Bob Service Get Local Currency.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceGetLocalCurrency(parameters: SboBobServiceGetLocalCurrencyParameters): FunctionImportRequestBuilderV4<SboBobServiceGetLocalCurrencyParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetLocalCurrency', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceGetDueDate]].
 */
export interface SboBobServiceGetDueDateParameters {
  /**
   * Card Code.
   */
  cardCode: string;
  /**
   * Ref Date.
   */
  refDate: string;
}

/**
 * Sbo Bob Service Get Due Date.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceGetDueDate(parameters: SboBobServiceGetDueDateParameters): FunctionImportRequestBuilderV4<SboBobServiceGetDueDateParameters, string> {
  const params = {
    cardCode: new FunctionImportParameter('CardCode', 'Edm.String', parameters.cardCode),
    refDate: new FunctionImportParameter('RefDate', 'Edm.String', parameters.refDate)
  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetDueDate', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[messagesServiceGetOutbox]].
 */
export interface MessagesServiceGetOutboxParameters {
}

/**
 * Messages Service Get Outbox.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function messagesServiceGetOutbox(parameters: MessagesServiceGetOutboxParameters): FunctionImportRequestBuilderV4<MessagesServiceGetOutboxParameters, MessageHeader[]> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'MessagesService_GetOutbox', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, MessageHeader)), params);
}

/**
 * Type of the parameters to be passed to [[messagesServiceGetInbox]].
 */
export interface MessagesServiceGetInboxParameters {
}

/**
 * Messages Service Get Inbox.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function messagesServiceGetInbox(parameters: MessagesServiceGetInboxParameters): FunctionImportRequestBuilderV4<MessagesServiceGetInboxParameters, MessageHeader[]> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'MessagesService_GetInbox', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, MessageHeader)), params);
}

/**
 * Type of the parameters to be passed to [[companyServiceGetPathAdmin]].
 */
export interface CompanyServiceGetPathAdminParameters {
}

/**
 * Company Service Get Path Admin.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function companyServiceGetPathAdmin(parameters: CompanyServiceGetPathAdminParameters): FunctionImportRequestBuilderV4<CompanyServiceGetPathAdminParameters, PathAdmin> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'CompanyService_GetPathAdmin', (data) => transformReturnValueForComplexTypeV4(data, (data) => deserializeComplexTypeV4(data, PathAdmin)), params);
}

/**
 * Type of the parameters to be passed to [[companyServiceGetAdminInfo]].
 */
export interface CompanyServiceGetAdminInfoParameters {
}

/**
 * Company Service Get Admin Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function companyServiceGetAdminInfo(parameters: CompanyServiceGetAdminInfoParameters): FunctionImportRequestBuilderV4<CompanyServiceGetAdminInfoParameters, AdminInfo> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'CompanyService_GetAdminInfo', (data) => transformReturnValueForComplexTypeV4(data, (data) => deserializeComplexTypeV4(data, AdminInfo)), params);
}

/**
 * Type of the parameters to be passed to [[companyServiceGetCompanyInfo]].
 */
export interface CompanyServiceGetCompanyInfoParameters {
}

/**
 * Company Service Get Company Info.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function companyServiceGetCompanyInfo(parameters: CompanyServiceGetCompanyInfoParameters): FunctionImportRequestBuilderV4<CompanyServiceGetCompanyInfoParameters, CompanyInfo> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'CompanyService_GetCompanyInfo', (data) => transformReturnValueForComplexTypeV4(data, (data) => deserializeComplexTypeV4(data, CompanyInfo)), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceGetSystemPermission]].
 */
export interface SboBobServiceGetSystemPermissionParameters {
  /**
   * User Code.
   */
  userCode: string;
  /**
   * Permission Id.
   */
  permissionId: string;
}

/**
 * Sbo Bob Service Get System Permission.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceGetSystemPermission(parameters: SboBobServiceGetSystemPermissionParameters): FunctionImportRequestBuilderV4<SboBobServiceGetSystemPermissionParameters, number> {
  const params = {
    userCode: new FunctionImportParameter('UserCode', 'Edm.String', parameters.userCode),
    permissionId: new FunctionImportParameter('PermissionID', 'Edm.String', parameters.permissionId)
  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetSystemPermission', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.Int32')), params);
}

/**
 * Type of the parameters to be passed to [[userMenuServiceGetCurrentUserMenu]].
 */
export interface UserMenuServiceGetCurrentUserMenuParameters {
}

/**
 * User Menu Service Get Current User Menu.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function userMenuServiceGetCurrentUserMenu(parameters: UserMenuServiceGetCurrentUserMenuParameters): FunctionImportRequestBuilderV4<UserMenuServiceGetCurrentUserMenuParameters, UserMenuItem[]> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'UserMenuService_GetCurrentUserMenu', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, UserMenuItem)), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceGetSystemCurrency]].
 */
export interface SboBobServiceGetSystemCurrencyParameters {
}

/**
 * Sbo Bob Service Get System Currency.
 *
 * @param parameters - Object containing all parameters for the function import.
 * @returns A request builder that allows to overwrite some of the values and execute the resultng request.
 */
export function sboBobServiceGetSystemCurrency(parameters: SboBobServiceGetSystemCurrencyParameters): FunctionImportRequestBuilderV4<SboBobServiceGetSystemCurrencyParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilderV4('/b1s/v2/', 'SBOBobService_GetSystemCurrency', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.String')), params);
}

export const functionImports = {
  licenseServiceGetInstallationNumber,
  sboBobServiceFormatMoneyToString,
  sboBobServiceGetIndexRate,
  sboBobServiceGetCurrencyRate,
  sboBobServiceGetLocalCurrency,
  sboBobServiceGetDueDate,
  messagesServiceGetOutbox,
  messagesServiceGetInbox,
  companyServiceGetPathAdmin,
  companyServiceGetAdminInfo,
  companyServiceGetCompanyInfo,
  sboBobServiceGetSystemPermission,
  userMenuServiceGetCurrentUserMenu,
  sboBobServiceGetSystemCurrency
};
