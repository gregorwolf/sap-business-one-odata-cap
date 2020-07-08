import { FunctionImportRequestBuilder } from '@sap-cloud-sdk/core/v4';
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
export declare function licenseServiceGetInstallationNumber(parameters: LicenseServiceGetInstallationNumberParameters): FunctionImportRequestBuilder<LicenseServiceGetInstallationNumberParameters, string>;
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
export declare function sboBobServiceFormatMoneyToString(parameters: SboBobServiceFormatMoneyToStringParameters): FunctionImportRequestBuilder<SboBobServiceFormatMoneyToStringParameters, string>;
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
export declare function sboBobServiceGetIndexRate(parameters: SboBobServiceGetIndexRateParameters): FunctionImportRequestBuilder<SboBobServiceGetIndexRateParameters, number>;
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
export declare function sboBobServiceGetCurrencyRate(parameters: SboBobServiceGetCurrencyRateParameters): FunctionImportRequestBuilder<SboBobServiceGetCurrencyRateParameters, number>;
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
export declare function sboBobServiceGetLocalCurrency(parameters: SboBobServiceGetLocalCurrencyParameters): FunctionImportRequestBuilder<SboBobServiceGetLocalCurrencyParameters, string>;
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
export declare function sboBobServiceGetDueDate(parameters: SboBobServiceGetDueDateParameters): FunctionImportRequestBuilder<SboBobServiceGetDueDateParameters, string>;
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
export declare function messagesServiceGetOutbox(parameters: MessagesServiceGetOutboxParameters): FunctionImportRequestBuilder<MessagesServiceGetOutboxParameters, MessageHeader[]>;
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
export declare function messagesServiceGetInbox(parameters: MessagesServiceGetInboxParameters): FunctionImportRequestBuilder<MessagesServiceGetInboxParameters, MessageHeader[]>;
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
export declare function companyServiceGetPathAdmin(parameters: CompanyServiceGetPathAdminParameters): FunctionImportRequestBuilder<CompanyServiceGetPathAdminParameters, PathAdmin>;
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
export declare function companyServiceGetAdminInfo(parameters: CompanyServiceGetAdminInfoParameters): FunctionImportRequestBuilder<CompanyServiceGetAdminInfoParameters, AdminInfo>;
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
export declare function companyServiceGetCompanyInfo(parameters: CompanyServiceGetCompanyInfoParameters): FunctionImportRequestBuilder<CompanyServiceGetCompanyInfoParameters, CompanyInfo>;
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
export declare function sboBobServiceGetSystemPermission(parameters: SboBobServiceGetSystemPermissionParameters): FunctionImportRequestBuilder<SboBobServiceGetSystemPermissionParameters, number>;
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
export declare function userMenuServiceGetCurrentUserMenu(parameters: UserMenuServiceGetCurrentUserMenuParameters): FunctionImportRequestBuilder<UserMenuServiceGetCurrentUserMenuParameters, UserMenuItem[]>;
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
export declare function sboBobServiceGetSystemCurrency(parameters: SboBobServiceGetSystemCurrencyParameters): FunctionImportRequestBuilder<SboBobServiceGetSystemCurrencyParameters, string>;
export declare const functionImports: {
    licenseServiceGetInstallationNumber: typeof licenseServiceGetInstallationNumber;
    sboBobServiceFormatMoneyToString: typeof sboBobServiceFormatMoneyToString;
    sboBobServiceGetIndexRate: typeof sboBobServiceGetIndexRate;
    sboBobServiceGetCurrencyRate: typeof sboBobServiceGetCurrencyRate;
    sboBobServiceGetLocalCurrency: typeof sboBobServiceGetLocalCurrency;
    sboBobServiceGetDueDate: typeof sboBobServiceGetDueDate;
    messagesServiceGetOutbox: typeof messagesServiceGetOutbox;
    messagesServiceGetInbox: typeof messagesServiceGetInbox;
    companyServiceGetPathAdmin: typeof companyServiceGetPathAdmin;
    companyServiceGetAdminInfo: typeof companyServiceGetAdminInfo;
    companyServiceGetCompanyInfo: typeof companyServiceGetCompanyInfo;
    sboBobServiceGetSystemPermission: typeof sboBobServiceGetSystemPermission;
    userMenuServiceGetCurrentUserMenu: typeof userMenuServiceGetCurrentUserMenu;
    sboBobServiceGetSystemCurrency: typeof sboBobServiceGetSystemCurrency;
};
//# sourceMappingURL=function-imports.d.ts.map