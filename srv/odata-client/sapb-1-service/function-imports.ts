/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForEdmType, transformReturnValueForComplexTypeList, transformReturnValueForComplexType, edmToTs, FunctionImportRequestBuilder, FunctionImportParameter } from '@sap-cloud-sdk/core/v4';
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
export function licenseServiceGetInstallationNumber(parameters: LicenseServiceGetInstallationNumberParameters): FunctionImportRequestBuilder<LicenseServiceGetInstallationNumberParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'LicenseService_GetInstallationNumber', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
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
export function sboBobServiceFormatMoneyToString(parameters: SboBobServiceFormatMoneyToStringParameters): FunctionImportRequestBuilder<SboBobServiceFormatMoneyToStringParameters, string> {
  const params = {
    inMoney: new FunctionImportParameter('InMoney', 'Edm.Double', parameters.inMoney),
    inPrecision: new FunctionImportParameter('InPrecision', 'Edm.String', parameters.inPrecision)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_Format_MoneyToString', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
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
export function sboBobServiceGetIndexRate(parameters: SboBobServiceGetIndexRateParameters): FunctionImportRequestBuilder<SboBobServiceGetIndexRateParameters, number> {
  const params = {
    index: new FunctionImportParameter('Index', 'Edm.String', parameters.index),
    date: new FunctionImportParameter('Date', 'Edm.String', parameters.date)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_GetIndexRate', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Double')), params);
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
export function sboBobServiceGetCurrencyRate(parameters: SboBobServiceGetCurrencyRateParameters): FunctionImportRequestBuilder<SboBobServiceGetCurrencyRateParameters, number> {
  const params = {
    currency: new FunctionImportParameter('Currency', 'Edm.String', parameters.currency),
    date: new FunctionImportParameter('Date', 'Edm.String', parameters.date)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_GetCurrencyRate', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Double')), params);
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
export function sboBobServiceGetLocalCurrency(parameters: SboBobServiceGetLocalCurrencyParameters): FunctionImportRequestBuilder<SboBobServiceGetLocalCurrencyParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_GetLocalCurrency', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
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
export function sboBobServiceGetDueDate(parameters: SboBobServiceGetDueDateParameters): FunctionImportRequestBuilder<SboBobServiceGetDueDateParameters, string> {
  const params = {
    cardCode: new FunctionImportParameter('CardCode', 'Edm.String', parameters.cardCode),
    refDate: new FunctionImportParameter('RefDate', 'Edm.String', parameters.refDate)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_GetDueDate', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
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
export function messagesServiceGetOutbox(parameters: MessagesServiceGetOutboxParameters): FunctionImportRequestBuilder<MessagesServiceGetOutboxParameters, MessageHeader[]> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'MessagesService_GetOutbox', (data) => transformReturnValueForComplexTypeList(data, MessageHeader.build), params);
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
export function messagesServiceGetInbox(parameters: MessagesServiceGetInboxParameters): FunctionImportRequestBuilder<MessagesServiceGetInboxParameters, MessageHeader[]> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'MessagesService_GetInbox', (data) => transformReturnValueForComplexTypeList(data, MessageHeader.build), params);
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
export function companyServiceGetPathAdmin(parameters: CompanyServiceGetPathAdminParameters): FunctionImportRequestBuilder<CompanyServiceGetPathAdminParameters, PathAdmin> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'CompanyService_GetPathAdmin', (data) => transformReturnValueForComplexType(data, PathAdmin.build), params);
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
export function companyServiceGetAdminInfo(parameters: CompanyServiceGetAdminInfoParameters): FunctionImportRequestBuilder<CompanyServiceGetAdminInfoParameters, AdminInfo> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'CompanyService_GetAdminInfo', (data) => transformReturnValueForComplexType(data, AdminInfo.build), params);
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
export function companyServiceGetCompanyInfo(parameters: CompanyServiceGetCompanyInfoParameters): FunctionImportRequestBuilder<CompanyServiceGetCompanyInfoParameters, CompanyInfo> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'CompanyService_GetCompanyInfo', (data) => transformReturnValueForComplexType(data, CompanyInfo.build), params);
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
export function sboBobServiceGetSystemPermission(parameters: SboBobServiceGetSystemPermissionParameters): FunctionImportRequestBuilder<SboBobServiceGetSystemPermissionParameters, number> {
  const params = {
    userCode: new FunctionImportParameter('UserCode', 'Edm.String', parameters.userCode),
    permissionId: new FunctionImportParameter('PermissionID', 'Edm.String', parameters.permissionId)
  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_GetSystemPermission', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.Int32')), params);
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
export function userMenuServiceGetCurrentUserMenu(parameters: UserMenuServiceGetCurrentUserMenuParameters): FunctionImportRequestBuilder<UserMenuServiceGetCurrentUserMenuParameters, UserMenuItem[]> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'UserMenuService_GetCurrentUserMenu', (data) => transformReturnValueForComplexTypeList(data, UserMenuItem.build), params);
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
export function sboBobServiceGetSystemCurrency(parameters: SboBobServiceGetSystemCurrencyParameters): FunctionImportRequestBuilder<SboBobServiceGetSystemCurrencyParameters, string> {
  const params = {

  }

  return new FunctionImportRequestBuilder('get', 'VALUE_IS_UNDEFINED', 'SBOBobService_GetSystemCurrency', (data) => transformReturnValueForEdmType(data, (val) => edmToTs(val, 'Edm.String')), params);
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
