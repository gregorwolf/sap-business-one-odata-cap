/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  edmToTs,
  entityDeserializer,
  transformReturnValueForEdmType,
  transformReturnValueForComplexType,
  transformReturnValueForEntityList,
  transformReturnValueForComplexTypeList,
  transformReturnValueForEntity,
  transformReturnValueForUndefined,
  throwErrorWhenReturnTypeIsUnionType,
  DeSerializers,
  DefaultDeSerializers,
  defaultDeSerializers,
  OperationParameter,
  OperationRequestBuilder
} from '@sap-cloud-sdk/odata-v4';
import { sapb1 } from './service';
import { AdminInfo } from './AdminInfo';
import { PathAdmin } from './PathAdmin';
import { ElectronicDocuments } from './ElectronicDocuments';
import { ElectronicDocumentsApi } from './ElectronicDocumentsApi';
import { CompanyInfo } from './CompanyInfo';
import { UserMenuItem } from './UserMenuItem';
import { MessageHeader } from './MessageHeader';
import { B1Sessions } from './B1Sessions';
import { B1SessionsApi } from './B1SessionsApi';
import { AttributeGroupParams } from './AttributeGroupParams';
import { ProfitCenterParams } from './ProfitCenterParams';
import { TerminationReasonParams } from './TerminationReasonParams';
import { DepositParams } from './DepositParams';
import { WebClientVariantGroupParams } from './WebClientVariantGroupParams';
import { WebClientFormSettingParams } from './WebClientFormSettingParams';
import { BrazilBeverageIndexerParams } from './BrazilBeverageIndexerParams';
import { PaymentBlockParams } from './PaymentBlockParams';
import { SalesOpportunityInterestSetupParams } from './SalesOpportunityInterestSetupParams';
import { NcmCodeSetupParams } from './NcmCodeSetupParams';
import { ServiceTaxPostingParams } from './ServiceTaxPostingParams';
import { JournalEntryDocumentTypeParams } from './JournalEntryDocumentTypeParams';
import { IntegrationPackageParams } from './IntegrationPackageParams';
import { UnitOfMeasurementGroupParams } from './UnitOfMeasurementGroupParams';
import { AssetDepreciationGroupParams } from './AssetDepreciationGroupParams';
import { EmployeeRoleSetupParams } from './EmployeeRoleSetupParams';
import { AssetRevaluationParams } from './AssetRevaluationParams';
import { EnhancedDiscountGroupParams } from './EnhancedDiscountGroupParams';
import { DunningTermParams } from './DunningTermParams';
import { HolidayParams } from './HolidayParams';
import { Users } from './Users';
import { UsersApi } from './UsersApi';
import { InventoryCountingParams } from './InventoryCountingParams';
import { EmployeeStatusParams } from './EmployeeStatusParams';
import { FiscalPrinterParams } from './FiscalPrinterParams';
import { AssetDocumentParams } from './AssetDocumentParams';
import { BranchParams } from './BranchParams';
import { AssetGroupParams } from './AssetGroupParams';
import { CycleCountDeterminationParams } from './CycleCountDeterminationParams';
import { IndiaHsnParams } from './IndiaHsnParams';
import { TaxExemptReasonParams } from './TaxExemptReasonParams';
import { MaterialGroupParams } from './MaterialGroupParams';
import { CashDiscountParams } from './CashDiscountParams';
import { SalesOpportunitySourceSetupParams } from './SalesOpportunitySourceSetupParams';
import { SalesOpportunityReasonSetupParams } from './SalesOpportunityReasonSetupParams';
import { SalesOpportunityCompetitorSetupParams } from './SalesOpportunityCompetitorSetupParams';
import { FeatureStatus } from './FeatureStatus';
import { FinancialYearParams } from './FinancialYearParams';
import { ResourceCapacityParams } from './ResourceCapacityParams';
import { CockpitParams } from './CockpitParams';
import { CreditLineParams } from './CreditLineParams';
import { ServiceCallProblemTypeParams } from './ServiceCallProblemTypeParams';
import { ActivityParams } from './ActivityParams';
import { DepreciationAreaParams } from './DepreciationAreaParams';
import { DnfCodeSetupParams } from './DnfCodeSetupParams';
import { TaxWebSiteParams } from './TaxWebSiteParams';
import { ReportTypeParams } from './ReportTypeParams';
import { RecurringPostingsParams } from './RecurringPostingsParams';
import { CertificateSeriesParams } from './CertificateSeriesParams';
import { SectionParams } from './SectionParams';
import { RetornoCodeParams } from './RetornoCodeParams';
import { WarehouseSublevelCodeParams } from './WarehouseSublevelCodeParams';
import { ApprovalRequestParams } from './ApprovalRequestParams';
import { BinLocationFieldParams } from './BinLocationFieldParams';
import { DepreciationTypePoolParams } from './DepreciationTypePoolParams';
import { PostingTemplatesParams } from './PostingTemplatesParams';
import { BinLocationAttributeParams } from './BinLocationAttributeParams';
import { PmcAreaData } from './PmcAreaData';
import { PeriodCategoryParams } from './PeriodCategoryParams';
import { CampaignParams } from './CampaignParams';
import { UnitOfMeasurementParams } from './UnitOfMeasurementParams';
import { BusinessPartners } from './BusinessPartners';
import { BusinessPartnersApi } from './BusinessPartnersApi';
import { CostElementParams } from './CostElementParams';
import { ActivitySubjectParams } from './ActivitySubjectParams';
import { BinLocationParams } from './BinLocationParams';
import { DepartmentParams } from './DepartmentParams';
import { AssetClassParams } from './AssetClassParams';
import { NatureOfAssesseeParams } from './NatureOfAssesseeParams';
import { ApprovalTemplateParams } from './ApprovalTemplateParams';
import { LandedCostParams } from './LandedCostParams';
import { BarCodeParams } from './BarCodeParams';
import { InventoryPostingParams } from './InventoryPostingParams';
import { BlanketAgreementParams } from './BlanketAgreementParams';
import { ServiceCallTypeParams } from './ServiceCallTypeParams';
import { WebClientVariantParams } from './WebClientVariantParams';
import { CountryParams } from './CountryParams';
import { StateParams } from './StateParams';
import { KpiParams } from './KpiParams';
import { EmployeeIdTypeParams } from './EmployeeIdTypeParams';
import { CostCenterTypeParams } from './CostCenterTypeParams';
import { TargetGroupParams } from './TargetGroupParams';
import { ExtendedTranslationParams } from './ExtendedTranslationParams';
import { PartnersSetupParams } from './PartnersSetupParams';
import { OccurenceCodeParams } from './OccurenceCodeParams';
import { ServiceCallStatusParams } from './ServiceCallStatusParams';
import { ServiceCallSolutionStatusParams } from './ServiceCallSolutionStatusParams';
import { EmailGroupParams } from './EmailGroupParams';
import { ServiceCallOriginParams } from './ServiceCallOriginParams';
import { EmployeePositionParams } from './EmployeePositionParams';
import { GlAccountAdvancedRuleParams } from './GlAccountAdvancedRuleParams';
import { TrackingNoteParams } from './TrackingNoteParams';
import { PmcPriorityData } from './PmcPriorityData';
import { ApprovalStageParams } from './ApprovalStageParams';
import { DimensionParams } from './DimensionParams';
import { ServiceGroupParams } from './ServiceGroupParams';
import { UserGroupParams } from './UserGroupParams';
import { TsrExceptionalEventParams } from './TsrExceptionalEventParams';
import { TaxCodeDeterminationParams } from './TaxCodeDeterminationParams';
import { IntrastatConfigurationParams } from './IntrastatConfigurationParams';
import { QueryAuthGroups } from './QueryAuthGroups';
import { QueryAuthGroupsApi } from './QueryAuthGroupsApi';
import { PmcSubprojectTypeData } from './PmcSubprojectTypeData';
import { EmployeeTransferParams } from './EmployeeTransferParams';
import { PmcActivityData } from './PmcActivityData';
import { DeterminationCriteriaParams } from './DeterminationCriteriaParams';
import { EwbTransporterParams } from './EwbTransporterParams';
import { PmcTaskData } from './PmcTaskData';
import { ActivityRecipientListParams } from './ActivityRecipientListParams';
import { WebClientPreferenceParams } from './WebClientPreferenceParams';
import { WebClientLaunchpadParams } from './WebClientLaunchpadParams';
import { WebClientBookmarkTileParams } from './WebClientBookmarkTileParams';
import { IdentificationCodes } from './IdentificationCodes';
import { IdentificationCodesApi } from './IdentificationCodesApi';
import { WebClientNotificationParams } from './WebClientNotificationParams';
import { WebClientDashboardParams } from './WebClientDashboardParams';
import { WebClientRecentActivityParams } from './WebClientRecentActivityParams';
import { DeductibleTaxParams } from './DeductibleTaxParams';
import { BpVatExemptionsParams } from './BpVatExemptionsParams';
import { WTaxTypeCodeParams } from './WTaxTypeCodeParams';
import { RclRecurringTransaction } from './RclRecurringTransaction';
import { PaymentReasonCodeParams } from './PaymentReasonCodeParams';
import { PredefinedTextParams } from './PredefinedTextParams';
import { ExceptionalEventParams } from './ExceptionalEventParams';
import { ServiceCallProblemSubTypeParams } from './ServiceCallProblemSubTypeParams';
import { EmploymentCategoryParams } from './EmploymentCategoryParams';
import { ShortLinkMappingParams } from './ShortLinkMappingParams';
import { BemReplicationPeriodParams } from './BemReplicationPeriodParams';
import { AccountCategoryParams } from './AccountCategoryParams';
import { BankChargesAllocationCodeParams } from './BankChargesAllocationCodeParams';
import { BoeDocumentTypeParams } from './BoeDocumentTypeParams';
import { CashFlowLineItemParams } from './CashFlowLineItemParams';
import { CampaignResponseTypeParams } from './CampaignResponseTypeParams';
import { MobileServerDateTime } from './MobileServerDateTime';
import { PmcStageTypeData } from './PmcStageTypeData';
import { IndiaSacCodeParams } from './IndiaSacCodeParams';
import { FaAccountDeterminationParams } from './FaAccountDeterminationParams';
import { NfTaxCategoryParams } from './NfTaxCategoryParams';
import { TaxCodeDeterminationTcdParams } from './TaxCodeDeterminationTcdParams';
import { BoePortfolioParams } from './BoePortfolioParams';
import { CheckLineParams } from './CheckLineParams';
import { ResourceParams } from './ResourceParams';
import { ResourcePropertyParams } from './ResourcePropertyParams';
import { ResourceGroupParams } from './ResourceGroupParams';
import { BoeInstructionParams } from './BoeInstructionParams';
import { InventoryOpeningBalanceParams } from './InventoryOpeningBalanceParams';
import { WebClientListviewFilterParams } from './WebClientListviewFilterParams';
import { GovPayCodeParams } from './GovPayCodeParams';
import { Items } from './Items';
import { ItemsApi } from './ItemsApi';
import { DepreciationTypeParams } from './DepreciationTypeParams';
import { ElectronicFileFormatParams } from './ElectronicFileFormatParams';
import { BusinessPartnerPropertyParams } from './BusinessPartnerPropertyParams';
import { TransactionCodeParams } from './TransactionCodeParams';
import { MobileAddOnSettingParams } from './MobileAddOnSettingParams';
import { AccrualTypeParams } from './AccrualTypeParams';
import { Activities } from './Activities';
import { ActivitiesApi } from './ActivitiesApi';
import { NfModelParams } from './NfModelParams';
import { BrazilFuelIndexerParams } from './BrazilFuelIndexerParams';
import { DistributionRuleParams } from './DistributionRuleParams';
import { ProjectParams } from './ProjectParams';
import { DeductionTaxSubGroupParams } from './DeductionTaxSubGroupParams';
import { RouteStageParams } from './RouteStageParams';

/**
 * Type of the parameters to be passed to {@link licenseServiceGetInstallationNumber}.
 */
export interface LicenseServiceGetInstallationNumberParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * License Service Get Installation Number.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function licenseServiceGetInstallationNumber<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: LicenseServiceGetInstallationNumberParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  LicenseServiceGetInstallationNumberParameters<DeSerializersT>,
  string | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'LicenseService_GetInstallationNumber',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link companyServiceGetAdminInfo}.
 */
export interface CompanyServiceGetAdminInfoParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Company Service Get Admin Info.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetAdminInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CompanyServiceGetAdminInfoParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CompanyServiceGetAdminInfoParameters<DeSerializersT>,
  AdminInfo | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CompanyService_GetAdminInfo',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AdminInfo)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link companyServiceGetPathAdmin}.
 */
export interface CompanyServiceGetPathAdminParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Company Service Get Path Admin.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetPathAdmin<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CompanyServiceGetPathAdminParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CompanyServiceGetPathAdminParameters<DeSerializersT>,
  PathAdmin | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CompanyService_GetPathAdmin',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PathAdmin)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link electronicDocumentServiceGetProtocols}.
 */
export interface ElectronicDocumentServiceGetProtocolsParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Electronic Document Service Get Protocols.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function electronicDocumentServiceGetProtocols<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ElectronicDocumentServiceGetProtocolsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ElectronicDocumentServiceGetProtocolsParameters<DeSerializersT>,
  ElectronicDocuments[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ElectronicDocumentService_GetProtocols',
    data =>
      transformReturnValueForEntityList(
        data,
        sapb1(deSerializers).electronicDocumentsApi
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link companyServiceGetCompanyInfo}.
 */
export interface CompanyServiceGetCompanyInfoParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Company Service Get Company Info.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetCompanyInfo<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CompanyServiceGetCompanyInfoParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CompanyServiceGetCompanyInfoParameters<DeSerializersT>,
  CompanyInfo | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CompanyService_GetCompanyInfo',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CompanyInfo)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceGetSystemPermission}.
 */
export interface SboBobServiceGetSystemPermissionParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * User Code.
   */
  userCode?: string | null;
  /**
   * Permission Id.
   */
  permissionId?: string | null;
}

/**
 * Sbo Bob Service Get System Permission.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceGetSystemPermission<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceGetSystemPermissionParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceGetSystemPermissionParameters<DeSerializersT>,
  number | null
> {
  const params = {
    userCode: new OperationParameter(
      'UserCode',
      'Edm.String',
      parameters.userCode
    ),
    permissionId: new OperationParameter(
      'PermissionID',
      'Edm.String',
      parameters.permissionId
    )
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_GetSystemPermission',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.Int32', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link userMenuServiceGetCurrentUserMenu}.
 */
export interface UserMenuServiceGetCurrentUserMenuParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * User Menu Service Get Current User Menu.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function userMenuServiceGetCurrentUserMenu<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UserMenuServiceGetCurrentUserMenuParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  UserMenuServiceGetCurrentUserMenuParameters<DeSerializersT>,
  UserMenuItem[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'UserMenuService_GetCurrentUserMenu',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, UserMenuItem)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceGetDueDate}.
 */
export interface SboBobServiceGetDueDateParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Card Code.
   */
  cardCode?: string | null;
  /**
   * Ref Date.
   */
  refDate?: string | null;
}

/**
 * Sbo Bob Service Get Due Date.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceGetDueDate<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceGetDueDateParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceGetDueDateParameters<DeSerializersT>,
  string | null
> {
  const params = {
    cardCode: new OperationParameter(
      'CardCode',
      'Edm.String',
      parameters.cardCode
    ),
    refDate: new OperationParameter('RefDate', 'Edm.String', parameters.refDate)
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_GetDueDate',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceGetIndexRate}.
 */
export interface SboBobServiceGetIndexRateParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Index.
   */
  index?: string | null;
  /**
   * Date.
   */
  date?: string | null;
}

/**
 * Sbo Bob Service Get Index Rate.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceGetIndexRate<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceGetIndexRateParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceGetIndexRateParameters<DeSerializersT>,
  number | null
> {
  const params = {
    index: new OperationParameter('Index', 'Edm.String', parameters.index),
    date: new OperationParameter('Date', 'Edm.String', parameters.date)
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_GetIndexRate',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.Double', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link messagesServiceGetInbox}.
 */
export interface MessagesServiceGetInboxParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Messages Service Get Inbox.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function messagesServiceGetInbox<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MessagesServiceGetInboxParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  MessagesServiceGetInboxParameters<DeSerializersT>,
  MessageHeader[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'MessagesService_GetInbox',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, MessageHeader)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceGetSystemCurrency}.
 */
export interface SboBobServiceGetSystemCurrencyParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sbo Bob Service Get System Currency.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceGetSystemCurrency<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceGetSystemCurrencyParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceGetSystemCurrencyParameters<DeSerializersT>,
  string | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_GetSystemCurrency',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceFormatMoneyToString}.
 */
export interface SboBobServiceFormatMoneyToStringParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * In Money.
   */
  inMoney?: number | null;
  /**
   * In Precision.
   */
  inPrecision?: string | null;
}

/**
 * Sbo Bob Service Format Money To String.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceFormatMoneyToString<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceFormatMoneyToStringParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceFormatMoneyToStringParameters<DeSerializersT>,
  string | null
> {
  const params = {
    inMoney: new OperationParameter(
      'InMoney',
      'Edm.Double',
      parameters.inMoney
    ),
    inPrecision: new OperationParameter(
      'InPrecision',
      'Edm.String',
      parameters.inPrecision
    )
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_Format_MoneyToString',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link messagesServiceGetOutbox}.
 */
export interface MessagesServiceGetOutboxParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Messages Service Get Outbox.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function messagesServiceGetOutbox<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MessagesServiceGetOutboxParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  MessagesServiceGetOutboxParameters<DeSerializersT>,
  MessageHeader[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'MessagesService_GetOutbox',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, MessageHeader)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceGetCurrencyRate}.
 */
export interface SboBobServiceGetCurrencyRateParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Currency.
   */
  currency?: string | null;
  /**
   * Date.
   */
  date?: string | null;
}

/**
 * Sbo Bob Service Get Currency Rate.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceGetCurrencyRate<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceGetCurrencyRateParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceGetCurrencyRateParameters<DeSerializersT>,
  number | null
> {
  const params = {
    currency: new OperationParameter(
      'Currency',
      'Edm.String',
      parameters.currency
    ),
    date: new OperationParameter('Date', 'Edm.String', parameters.date)
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_GetCurrencyRate',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.Double', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceGetLocalCurrency}.
 */
export interface SboBobServiceGetLocalCurrencyParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sbo Bob Service Get Local Currency.
 * @param parameters - Object containing all parameters for the function.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceGetLocalCurrency<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceGetLocalCurrencyParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceGetLocalCurrencyParameters<DeSerializersT>,
  string | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_GetLocalCurrency',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'function'
  );
}

/**
 * Type of the parameters to be passed to {@link login}.
 */
export interface LoginParameters<DeSerializersT extends DeSerializers> {
  /**
   * Company Db.
   */
  companyDb?: string | null;
  /**
   * User Name.
   */
  userName?: string | null;
  /**
   * Password.
   */
  password?: string | null;
  /**
   * Language.
   */
  language?: string | null;
}

/**
 * Login.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function login<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: LoginParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  LoginParameters<DeSerializersT>,
  B1Sessions | null
> {
  const params = {
    companyDb: new OperationParameter(
      'CompanyDB',
      'Edm.String',
      parameters.companyDb
    ),
    userName: new OperationParameter(
      'UserName',
      'Edm.String',
      parameters.userName
    ),
    password: new OperationParameter(
      'Password',
      'Edm.String',
      parameters.password
    ),
    language: new OperationParameter(
      'Language',
      'Edm.String',
      parameters.language
    )
  };

  return new OperationRequestBuilder(
    '/',
    'Login',
    data =>
      transformReturnValueForEntity(data, sapb1(deSerializers).b1SessionsApi),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link queryServicePostQuery}.
 */
export interface QueryServicePostQueryParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Query Path.
   */
  queryPath?: string | null;
  /**
   * Query Option.
   */
  queryOption?: string | null;
}

/**
 * Query Service Post Query.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function queryServicePostQuery<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: QueryServicePostQueryParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  QueryServicePostQueryParameters<DeSerializersT>,
  string | null
> {
  const params = {
    queryPath: new OperationParameter(
      'QueryPath',
      'Edm.String',
      parameters.queryPath
    ),
    queryOption: new OperationParameter(
      'QueryOption',
      'Edm.String',
      parameters.queryOption
    )
  };

  return new OperationRequestBuilder(
    '/',
    'QueryService_PostQuery',
    data =>
      transformReturnValueForEdmType(data, val =>
        edmToTs(val.value, 'Edm.String', deSerializers)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceSetCurrencyRate}.
 */
export interface SboBobServiceSetCurrencyRateParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * Rate Date.
   */
  rateDate?: string | null;
  /**
   * Currency.
   */
  currency?: string | null;
  /**
   * Rate.
   */
  rate?: string | null;
}

/**
 * Sbo Bob Service Set Currency Rate.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceSetCurrencyRate<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceSetCurrencyRateParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceSetCurrencyRateParameters<DeSerializersT>,
  undefined
> {
  const params = {
    rateDate: new OperationParameter(
      'RateDate',
      'Edm.String',
      parameters.rateDate
    ),
    currency: new OperationParameter(
      'Currency',
      'Edm.String',
      parameters.currency
    ),
    rate: new OperationParameter('Rate', 'Edm.String', parameters.rate)
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_SetCurrencyRate',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link ordersServiceInitData}.
 */
export interface OrdersServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Orders Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function ordersServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: OrdersServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    OrdersServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'OrdersService_InitData',
    data => throwErrorWhenReturnTypeIsUnionType(data, 'OrdersService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link attributeGroupsServiceGetList}.
 */
export interface AttributeGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Attribute Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function attributeGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AttributeGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AttributeGroupsServiceGetListParameters<DeSerializersT>,
  AttributeGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AttributeGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AttributeGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link profitCentersServiceGetProfitCenterList}.
 */
export interface ProfitCentersServiceGetProfitCenterListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Profit Centers Service Get Profit Center List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function profitCentersServiceGetProfitCenterList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProfitCentersServiceGetProfitCenterListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProfitCentersServiceGetProfitCenterListParameters<DeSerializersT>,
  ProfitCenterParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProfitCentersService_GetProfitCenterList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ProfitCenterParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link paymentDraftsServiceHandleApprovalRequest}.
 */
export interface PaymentDraftsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Payment Drafts Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function paymentDraftsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PaymentDraftsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PaymentDraftsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PaymentDraftsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseInvoicesServiceHandleApprovalRequest}.
 */
export interface PurchaseInvoicesServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Invoices Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseInvoicesServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseInvoicesServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseInvoicesServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseInvoicesService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionPurchaseInvoiceServiceHandleApprovalRequest}.
 */
export interface CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Purchase Invoice Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionPurchaseInvoiceServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionPurchaseInvoiceService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link terminationReasonServiceGetList}.
 */
export interface TerminationReasonServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Termination Reason Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function terminationReasonServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TerminationReasonServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TerminationReasonServiceGetListParameters<DeSerializersT>,
  TerminationReasonParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TerminationReasonService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TerminationReasonParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link depositsServiceGetDepositList}.
 */
export interface DepositsServiceGetDepositListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Deposits Service Get Deposit List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depositsServiceGetDepositList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DepositsServiceGetDepositListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DepositsServiceGetDepositListParameters<DeSerializersT>,
  DepositParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DepositsService_GetDepositList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DepositParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link invoicesServiceHandleApprovalRequest}.
 */
export interface InvoicesServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Invoices Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function invoicesServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InvoicesServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InvoicesServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InvoicesService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionInvoiceReversalServiceInitData}.
 */
export interface CorrectionInvoiceReversalServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Invoice Reversal Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionInvoiceReversalServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionInvoiceReversalServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    CorrectionInvoiceReversalServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionInvoiceReversalService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'CorrectionInvoiceReversalService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionInvoiceServiceHandleApprovalRequest}.
 */
export interface CorrectionInvoiceServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Invoice Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionInvoiceServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionInvoiceServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CorrectionInvoiceServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionInvoiceService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientVariantGroupServiceGetList}.
 */
export interface WebClientVariantGroupServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Variant Group Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientVariantGroupServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientVariantGroupServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientVariantGroupServiceGetListParameters<DeSerializersT>,
  WebClientVariantGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientVariantGroupService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientVariantGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionPurchaseInvoiceReversalServiceInitData}.
 */
export interface CorrectionPurchaseInvoiceReversalServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Purchase Invoice Reversal Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionPurchaseInvoiceReversalServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionPurchaseInvoiceReversalServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    CorrectionPurchaseInvoiceReversalServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionPurchaseInvoiceReversalService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'CorrectionPurchaseInvoiceReversalService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseRequestServiceInitData}.
 */
export interface PurchaseRequestServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Request Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseRequestServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseRequestServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseRequestServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseRequestService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseRequestService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientFormSettingServiceGetList}.
 */
export interface WebClientFormSettingServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Form Setting Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientFormSettingServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientFormSettingServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientFormSettingServiceGetListParameters<DeSerializersT>,
  WebClientFormSettingParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientFormSettingService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientFormSettingParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link brazilBeverageIndexersServiceGetList}.
 */
export interface BrazilBeverageIndexersServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Brazil Beverage Indexers Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function brazilBeverageIndexersServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BrazilBeverageIndexersServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BrazilBeverageIndexersServiceGetListParameters<DeSerializersT>,
  BrazilBeverageIndexerParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BrazilBeverageIndexersService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BrazilBeverageIndexerParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link returnsServiceInitData}.
 */
export interface ReturnsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Returns Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function returnsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReturnsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    ReturnsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ReturnsService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(data, 'ReturnsService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link paymentBlocksServiceGetPaymentBlockList}.
 */
export interface PaymentBlocksServiceGetPaymentBlockListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Payment Blocks Service Get Payment Block List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function paymentBlocksServiceGetPaymentBlockList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PaymentBlocksServiceGetPaymentBlockListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PaymentBlocksServiceGetPaymentBlockListParameters<DeSerializersT>,
  PaymentBlockParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PaymentBlocksService_GetPaymentBlockList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PaymentBlockParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionPurchaseInvoiceServiceInitData}.
 */
export interface CorrectionPurchaseInvoiceServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Purchase Invoice Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionPurchaseInvoiceServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionPurchaseInvoiceServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    CorrectionPurchaseInvoiceServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionPurchaseInvoiceService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'CorrectionPurchaseInvoiceService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList}.
 */
export interface SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sales Opportunity Interests Setup Service Get Sales Opportunity Interest Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters<DeSerializersT>,
  SalesOpportunityInterestSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SalesOpportunityInterestsSetupService_GetSalesOpportunityInterestSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SalesOpportunityInterestSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link ncmCodesSetupServiceGetNcmCodeSetupList}.
 */
export interface NcmCodesSetupServiceGetNcmCodeSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Ncm Codes Setup Service Get Ncm Code Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function ncmCodesSetupServiceGetNcmCodeSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: NcmCodesSetupServiceGetNcmCodeSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  NcmCodesSetupServiceGetNcmCodeSetupListParameters<DeSerializersT>,
  NcmCodeSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'NCMCodesSetupService_GetNCMCodeSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, NcmCodeSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceTaxPostingServiceGetTaxableDeliveries}.
 */
export interface ServiceTaxPostingServiceGetTaxableDeliveriesParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Tax Posting Service Get Taxable Deliveries.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceTaxPostingServiceGetTaxableDeliveries<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceTaxPostingServiceGetTaxableDeliveriesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceTaxPostingServiceGetTaxableDeliveriesParameters<DeSerializersT>,
  ServiceTaxPostingParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceTaxPostingService_GetTaxableDeliveries',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceTaxPostingParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryGenExitServiceHandleApprovalRequest}.
 */
export interface InventoryGenExitServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Gen Exit Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryGenExitServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryGenExitServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InventoryGenExitServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryGenExitService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link deliveryNotesServiceInitData}.
 */
export interface DeliveryNotesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Delivery Notes Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deliveryNotesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeliveryNotesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    DeliveryNotesServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DeliveryNotesService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'DeliveryNotesService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link journalEntryDocumentTypeServiceGetList}.
 */
export interface JournalEntryDocumentTypeServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Journal Entry Document Type Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function journalEntryDocumentTypeServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: JournalEntryDocumentTypeServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  JournalEntryDocumentTypeServiceGetListParameters<DeSerializersT>,
  JournalEntryDocumentTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'JournalEntryDocumentTypeService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, JournalEntryDocumentTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link integrationPackagesConfigureServiceGetList}.
 */
export interface IntegrationPackagesConfigureServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Integration Packages Configure Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function integrationPackagesConfigureServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IntegrationPackagesConfigureServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  IntegrationPackagesConfigureServiceGetListParameters<DeSerializersT>,
  IntegrationPackageParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'IntegrationPackagesConfigureService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, IntegrationPackageParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link unitOfMeasurementGroupsServiceGetList}.
 */
export interface UnitOfMeasurementGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Unit Of Measurement Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function unitOfMeasurementGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UnitOfMeasurementGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  UnitOfMeasurementGroupsServiceGetListParameters<DeSerializersT>,
  UnitOfMeasurementGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'UnitOfMeasurementGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, UnitOfMeasurementGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetDepreciationGroupsServiceGetList}.
 */
export interface AssetDepreciationGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Depreciation Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetDepreciationGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetDepreciationGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetDepreciationGroupsServiceGetListParameters<DeSerializersT>,
  AssetDepreciationGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetDepreciationGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetDepreciationGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionInvoiceServiceInitData}.
 */
export interface CorrectionInvoiceServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Invoice Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionInvoiceServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionInvoiceServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    CorrectionInvoiceServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionInvoiceService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'CorrectionInvoiceService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseRequestServiceHandleApprovalRequest}.
 */
export interface PurchaseRequestServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Request Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseRequestServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseRequestService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link employeeRolesSetupServiceGetEmployeeRoleSetupList}.
 */
export interface EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Employee Roles Setup Service Get Employee Role Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeRolesSetupServiceGetEmployeeRoleSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters<DeSerializersT>,
  EmployeeRoleSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmployeeRolesSetupService_GetEmployeeRoleSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmployeeRoleSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetRevaluationServiceGetList}.
 */
export interface AssetRevaluationServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Revaluation Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetRevaluationServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetRevaluationServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetRevaluationServiceGetListParameters<DeSerializersT>,
  AssetRevaluationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetRevaluationService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetRevaluationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryTransferRequestsServiceHandleApprovalRequest}.
 */
export interface InventoryTransferRequestsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Transfer Requests Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryTransferRequestsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryTransferRequestsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InventoryTransferRequestsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryTransferRequestsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link enhancedDiscountGroupsServiceGetList}.
 */
export interface EnhancedDiscountGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Enhanced Discount Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function enhancedDiscountGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EnhancedDiscountGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EnhancedDiscountGroupsServiceGetListParameters<DeSerializersT>,
  EnhancedDiscountGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EnhancedDiscountGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EnhancedDiscountGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link dunningTermsServiceGetDunningTermList}.
 */
export interface DunningTermsServiceGetDunningTermListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Dunning Terms Service Get Dunning Term List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function dunningTermsServiceGetDunningTermList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DunningTermsServiceGetDunningTermListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DunningTermsServiceGetDunningTermListParameters<DeSerializersT>,
  DunningTermParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DunningTermsService_GetDunningTermList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DunningTermParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link holidayServiceGetHolidayList}.
 */
export interface HolidayServiceGetHolidayListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Holiday Service Get Holiday List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function holidayServiceGetHolidayList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: HolidayServiceGetHolidayListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  HolidayServiceGetHolidayListParameters<DeSerializersT>,
  HolidayParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'HolidayService_GetHolidayList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, HolidayParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link quotationsServiceInitData}.
 */
export interface QuotationsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Quotations Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function quotationsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: QuotationsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    QuotationsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'QuotationsService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(data, 'QuotationsService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link invoicesServiceInitData}.
 */
export interface InvoicesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Invoices Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function invoicesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InvoicesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    InvoicesServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InvoicesService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(data, 'InvoicesService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link usersServiceGetCurrentUser}.
 */
export interface UsersServiceGetCurrentUserParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Users Service Get Current User.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function usersServiceGetCurrentUser<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UsersServiceGetCurrentUserParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  UsersServiceGetCurrentUserParameters<DeSerializersT>,
  Users | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'UsersService_GetCurrentUser',
    data => transformReturnValueForEntity(data, sapb1(deSerializers).usersApi),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryCountingsServiceGetList}.
 */
export interface InventoryCountingsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Countings Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryCountingsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryCountingsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InventoryCountingsServiceGetListParameters<DeSerializersT>,
  InventoryCountingParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryCountingsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, InventoryCountingParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link employeeStatusServiceGetList}.
 */
export interface EmployeeStatusServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Employee Status Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeStatusServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmployeeStatusServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmployeeStatusServiceGetListParameters<DeSerializersT>,
  EmployeeStatusParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmployeeStatusService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmployeeStatusParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link fiscalPrinterServiceGetFiscalPrinterList}.
 */
export interface FiscalPrinterServiceGetFiscalPrinterListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Fiscal Printer Service Get Fiscal Printer List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function fiscalPrinterServiceGetFiscalPrinterList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: FiscalPrinterServiceGetFiscalPrinterListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  FiscalPrinterServiceGetFiscalPrinterListParameters<DeSerializersT>,
  FiscalPrinterParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'FiscalPrinterService_GetFiscalPrinterList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, FiscalPrinterParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetManualDepreciationServiceGetList}.
 */
export interface AssetManualDepreciationServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Manual Depreciation Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetManualDepreciationServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetManualDepreciationServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetManualDepreciationServiceGetListParameters<DeSerializersT>,
  AssetDocumentParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetManualDepreciationService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetDocumentParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link branchesServiceGetBranchList}.
 */
export interface BranchesServiceGetBranchListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Branches Service Get Branch List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function branchesServiceGetBranchList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BranchesServiceGetBranchListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BranchesServiceGetBranchListParameters<DeSerializersT>,
  BranchParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BranchesService_GetBranchList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BranchParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetGroupsServiceGetList}.
 */
export interface AssetGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetGroupsServiceGetListParameters<DeSerializersT>,
  AssetGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link cycleCountDeterminationsServiceGetList}.
 */
export interface CycleCountDeterminationsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cycle Count Determinations Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cycleCountDeterminationsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CycleCountDeterminationsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CycleCountDeterminationsServiceGetListParameters<DeSerializersT>,
  CycleCountDeterminationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CycleCountDeterminationsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CycleCountDeterminationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link indiaHsnServiceGetList}.
 */
export interface IndiaHsnServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * India Hsn Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function indiaHsnServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IndiaHsnServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  IndiaHsnServiceGetListParameters<DeSerializersT>,
  IndiaHsnParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'IndiaHsnService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, IndiaHsnParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link taxExemptReasonServiceGetList}.
 */
export interface TaxExemptReasonServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tax Exempt Reason Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxExemptReasonServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TaxExemptReasonServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TaxExemptReasonServiceGetListParameters<DeSerializersT>,
  TaxExemptReasonParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TaxExemptReasonService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TaxExemptReasonParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link materialGroupsServiceGetMaterialGroupList}.
 */
export interface MaterialGroupsServiceGetMaterialGroupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Material Groups Service Get Material Group List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function materialGroupsServiceGetMaterialGroupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MaterialGroupsServiceGetMaterialGroupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  MaterialGroupsServiceGetMaterialGroupListParameters<DeSerializersT>,
  MaterialGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'MaterialGroupsService_GetMaterialGroupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, MaterialGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link cashDiscountsServiceGetCashDiscountList}.
 */
export interface CashDiscountsServiceGetCashDiscountListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cash Discounts Service Get Cash Discount List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cashDiscountsServiceGetCashDiscountList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CashDiscountsServiceGetCashDiscountListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CashDiscountsServiceGetCashDiscountListParameters<DeSerializersT>,
  CashDiscountParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CashDiscountsService_GetCashDiscountList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CashDiscountParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link downPaymentsServiceInitData}.
 */
export interface DownPaymentsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Down Payments Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function downPaymentsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DownPaymentsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    DownPaymentsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DownPaymentsService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(data, 'DownPaymentsService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList}.
 */
export interface SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sales Opportunity Sources Setup Service Get Sales Opportunity Source Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters<DeSerializersT>,
  SalesOpportunitySourceSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SalesOpportunitySourcesSetupService_GetSalesOpportunitySourceSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SalesOpportunitySourceSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList}.
 */
export interface SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sales Opportunity Reasons Setup Service Get Sales Opportunity Reason Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters<DeSerializersT>,
  SalesOpportunityReasonSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SalesOpportunityReasonsSetupService_GetSalesOpportunityReasonSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SalesOpportunityReasonSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link deliveryNotesServiceHandleApprovalRequest}.
 */
export interface DeliveryNotesServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Delivery Notes Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deliveryNotesServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeliveryNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DeliveryNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DeliveryNotesService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList}.
 */
export interface SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sales Opportunity Competitors Setup Service Get Sales Opportunity Competitor Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters<DeSerializersT>,
  SalesOpportunityCompetitorSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SalesOpportunityCompetitorsSetupService_GetSalesOpportunityCompetitorSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SalesOpportunityCompetitorSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link companyServiceGetFeaturesStatus}.
 */
export interface CompanyServiceGetFeaturesStatusParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Company Service Get Features Status.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetFeaturesStatus<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CompanyServiceGetFeaturesStatusParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CompanyServiceGetFeaturesStatusParameters<DeSerializersT>,
  FeatureStatus[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CompanyService_GetFeaturesStatus',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, FeatureStatus)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseReturnsServiceHandleApprovalRequest}.
 */
export interface PurchaseReturnsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Returns Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseReturnsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseReturnsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseReturnsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseReturnsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link draftsServiceInitData}.
 */
export interface DraftsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Drafts Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function draftsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DraftsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    DraftsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DraftsService_InitData',
    data => throwErrorWhenReturnTypeIsUnionType(data, 'DraftsService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link financialYearsServiceGetFinancialYearList}.
 */
export interface FinancialYearsServiceGetFinancialYearListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Financial Years Service Get Financial Year List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function financialYearsServiceGetFinancialYearList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: FinancialYearsServiceGetFinancialYearListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  FinancialYearsServiceGetFinancialYearListParameters<DeSerializersT>,
  FinancialYearParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'FinancialYearsService_GetFinancialYearList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, FinancialYearParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link goodsReturnRequestServiceInitData}.
 */
export interface GoodsReturnRequestServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Goods Return Request Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function goodsReturnRequestServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GoodsReturnRequestServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    GoodsReturnRequestServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'GoodsReturnRequestService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'GoodsReturnRequestService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link resourceCapacitiesServiceGetList}.
 */
export interface ResourceCapacitiesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Resource Capacities Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourceCapacitiesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ResourceCapacitiesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ResourceCapacitiesServiceGetListParameters<DeSerializersT>,
  ResourceCapacityParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ResourceCapacitiesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ResourceCapacityParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link cockpitsServiceGetTemplateCockpitList}.
 */
export interface CockpitsServiceGetTemplateCockpitListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cockpits Service Get Template Cockpit List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cockpitsServiceGetTemplateCockpitList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CockpitsServiceGetTemplateCockpitListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CockpitsServiceGetTemplateCockpitListParameters<DeSerializersT>,
  CockpitParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CockpitsService_GetTemplateCockpitList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CockpitParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link creditLinesServiceGetValidCreditLineList}.
 */
export interface CreditLinesServiceGetValidCreditLineListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Credit Lines Service Get Valid Credit Line List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function creditLinesServiceGetValidCreditLineList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CreditLinesServiceGetValidCreditLineListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CreditLinesServiceGetValidCreditLineListParameters<DeSerializersT>,
  CreditLineParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CreditLinesService_GetValidCreditLineList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CreditLineParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceCallProblemTypesServiceGetServiceCallProblemTypeList}.
 */
export interface ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Call Problem Types Service Get Service Call Problem Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallProblemTypesServiceGetServiceCallProblemTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters<DeSerializersT>,
  ServiceCallProblemTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceCallProblemTypesService_GetServiceCallProblemTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceCallProblemTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link activitiesServiceGetActivityList}.
 */
export interface ActivitiesServiceGetActivityListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Activities Service Get Activity List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function activitiesServiceGetActivityList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ActivitiesServiceGetActivityListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ActivitiesServiceGetActivityListParameters<DeSerializersT>,
  ActivityParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ActivitiesService_GetActivityList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ActivityParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link depreciationAreasServiceGetList}.
 */
export interface DepreciationAreasServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Depreciation Areas Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depreciationAreasServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DepreciationAreasServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DepreciationAreasServiceGetListParameters<DeSerializersT>,
  DepreciationAreaParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DepreciationAreasService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DepreciationAreaParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link dnfCodeSetupServiceGetDnfCodeSetupList}.
 */
export interface DnfCodeSetupServiceGetDnfCodeSetupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Dnf Code Setup Service Get Dnf Code Setup List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function dnfCodeSetupServiceGetDnfCodeSetupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DnfCodeSetupServiceGetDnfCodeSetupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DnfCodeSetupServiceGetDnfCodeSetupListParameters<DeSerializersT>,
  DnfCodeSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DNFCodeSetupService_GetDNFCodeSetupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DnfCodeSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link draftsServiceHandleApprovalRequest}.
 */
export interface DraftsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Drafts Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function draftsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DraftsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DraftsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DraftsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link taxWebSitesServiceGetTaxWebSiteList}.
 */
export interface TaxWebSitesServiceGetTaxWebSiteListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tax Web Sites Service Get Tax Web Site List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxWebSitesServiceGetTaxWebSiteList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TaxWebSitesServiceGetTaxWebSiteListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TaxWebSitesServiceGetTaxWebSiteListParameters<DeSerializersT>,
  TaxWebSiteParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TaxWebSitesService_GetTaxWebSiteList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TaxWebSiteParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link reportTypesServiceGetReportTypeList}.
 */
export interface ReportTypesServiceGetReportTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Report Types Service Get Report Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function reportTypesServiceGetReportTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReportTypesServiceGetReportTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ReportTypesServiceGetReportTypeListParameters<DeSerializersT>,
  ReportTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ReportTypesService_GetReportTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ReportTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link recurringPostingsServiceGetList}.
 */
export interface RecurringPostingsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Recurring Postings Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function recurringPostingsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RecurringPostingsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  RecurringPostingsServiceGetListParameters<DeSerializersT>,
  RecurringPostingsParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'RecurringPostingsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, RecurringPostingsParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link certificateSeriesServiceGetCertificateSeriesList}.
 */
export interface CertificateSeriesServiceGetCertificateSeriesListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Certificate Series Service Get Certificate Series List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function certificateSeriesServiceGetCertificateSeriesList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CertificateSeriesServiceGetCertificateSeriesListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CertificateSeriesServiceGetCertificateSeriesListParameters<DeSerializersT>,
  CertificateSeriesParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CertificateSeriesService_GetCertificateSeriesList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CertificateSeriesParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link sectionsServiceGetSectionList}.
 */
export interface SectionsServiceGetSectionListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Sections Service Get Section List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sectionsServiceGetSectionList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SectionsServiceGetSectionListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SectionsServiceGetSectionListParameters<DeSerializersT>,
  SectionParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'SectionsService_GetSectionList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, SectionParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link retornoCodesServiceGetList}.
 */
export interface RetornoCodesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Retorno Codes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function retornoCodesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RetornoCodesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  RetornoCodesServiceGetListParameters<DeSerializersT>,
  RetornoCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'RetornoCodesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, RetornoCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link warehouseSublevelCodesServiceGetList}.
 */
export interface WarehouseSublevelCodesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Warehouse Sublevel Codes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function warehouseSublevelCodesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WarehouseSublevelCodesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WarehouseSublevelCodesServiceGetListParameters<DeSerializersT>,
  WarehouseSublevelCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WarehouseSublevelCodesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WarehouseSublevelCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionInvoiceReversalServiceHandleApprovalRequest}.
 */
export interface CorrectionInvoiceReversalServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Invoice Reversal Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionInvoiceReversalServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionInvoiceReversalServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CorrectionInvoiceReversalServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionInvoiceReversalService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link approvalRequestsServiceGetOpenApprovalRequestList}.
 */
export interface ApprovalRequestsServiceGetOpenApprovalRequestListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Approval Requests Service Get Open Approval Request List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalRequestsServiceGetOpenApprovalRequestList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ApprovalRequestsServiceGetOpenApprovalRequestListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ApprovalRequestsServiceGetOpenApprovalRequestListParameters<DeSerializersT>,
  ApprovalRequestParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ApprovalRequestsService_GetOpenApprovalRequestList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ApprovalRequestParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link approvalRequestsServiceGetAllApprovalRequestsList}.
 */
export interface ApprovalRequestsServiceGetAllApprovalRequestsListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Approval Requests Service Get All Approval Requests List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalRequestsServiceGetAllApprovalRequestsList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ApprovalRequestsServiceGetAllApprovalRequestsListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ApprovalRequestsServiceGetAllApprovalRequestsListParameters<DeSerializersT>,
  ApprovalRequestParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ApprovalRequestsService_GetAllApprovalRequestsList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ApprovalRequestParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link binLocationFieldsServiceGetList}.
 */
export interface BinLocationFieldsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bin Location Fields Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function binLocationFieldsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BinLocationFieldsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BinLocationFieldsServiceGetListParameters<DeSerializersT>,
  BinLocationFieldParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BinLocationFieldsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BinLocationFieldParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link depreciationTypePoolsServiceGetList}.
 */
export interface DepreciationTypePoolsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Depreciation Type Pools Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depreciationTypePoolsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DepreciationTypePoolsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DepreciationTypePoolsServiceGetListParameters<DeSerializersT>,
  DepreciationTypePoolParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DepreciationTypePoolsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DepreciationTypePoolParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link postingTemplatesServiceGetList}.
 */
export interface PostingTemplatesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Posting Templates Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function postingTemplatesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PostingTemplatesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PostingTemplatesServiceGetListParameters<DeSerializersT>,
  PostingTemplatesParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PostingTemplatesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PostingTemplatesParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link binLocationAttributesServiceGetList}.
 */
export interface BinLocationAttributesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bin Location Attributes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function binLocationAttributesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BinLocationAttributesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BinLocationAttributesServiceGetListParameters<DeSerializersT>,
  BinLocationAttributeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BinLocationAttributesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BinLocationAttributeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectManagementConfigurationServiceGetAreas}.
 */
export interface ProjectManagementConfigurationServiceGetAreasParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Project Management Configuration Service Get Areas.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetAreas<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectManagementConfigurationServiceGetAreasParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectManagementConfigurationServiceGetAreasParameters<DeSerializersT>,
  PmcAreaData[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectManagementConfigurationService_GetAreas',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PmcAreaData)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link correctionPurchaseInvoiceReversalServiceHandleApprovalRequest}.
 */
export interface CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Correction Purchase Invoice Reversal Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionPurchaseInvoiceReversalServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CorrectionPurchaseInvoiceReversalService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link stockTransferServiceHandleApprovalRequest}.
 */
export interface StockTransferServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Stock Transfer Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function stockTransferServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: StockTransferServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  StockTransferServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'StockTransferService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link companyServiceGetPeriods}.
 */
export interface CompanyServiceGetPeriodsParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Company Service Get Periods.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetPeriods<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CompanyServiceGetPeriodsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CompanyServiceGetPeriodsParameters<DeSerializersT>,
  PeriodCategoryParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CompanyService_GetPeriods',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PeriodCategoryParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link ordersServiceHandleApprovalRequest}.
 */
export interface OrdersServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Orders Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function ordersServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: OrdersServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  OrdersServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'OrdersService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link campaignsServiceGetList}.
 */
export interface CampaignsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Campaigns Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function campaignsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CampaignsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CampaignsServiceGetListParameters<DeSerializersT>,
  CampaignParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CampaignsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CampaignParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link unitOfMeasurementsServiceGetList}.
 */
export interface UnitOfMeasurementsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Unit Of Measurements Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function unitOfMeasurementsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UnitOfMeasurementsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  UnitOfMeasurementsServiceGetListParameters<DeSerializersT>,
  UnitOfMeasurementParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'UnitOfMeasurementsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, UnitOfMeasurementParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link approvalRequestsServiceGetApprovalRequestList}.
 */
export interface ApprovalRequestsServiceGetApprovalRequestListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Approval Requests Service Get Approval Request List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalRequestsServiceGetApprovalRequestList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ApprovalRequestsServiceGetApprovalRequestListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ApprovalRequestsServiceGetApprovalRequestListParameters<DeSerializersT>,
  ApprovalRequestParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ApprovalRequestsService_GetApprovalRequestList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ApprovalRequestParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link businessPartnersServiceInitData}.
 */
export interface BusinessPartnersServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Business Partners Service Init Data.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function businessPartnersServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BusinessPartnersServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BusinessPartnersServiceInitDataParameters<DeSerializersT>,
  BusinessPartners | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BusinessPartnersService_InitData',
    data =>
      transformReturnValueForEntity(
        data,
        sapb1(deSerializers).businessPartnersApi
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseCreditNotesServiceHandleApprovalRequest}.
 */
export interface PurchaseCreditNotesServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Credit Notes Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseCreditNotesServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseCreditNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseCreditNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseCreditNotesService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link costElementServiceGetCostElementList}.
 */
export interface CostElementServiceGetCostElementListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cost Element Service Get Cost Element List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function costElementServiceGetCostElementList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CostElementServiceGetCostElementListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CostElementServiceGetCostElementListParameters<DeSerializersT>,
  CostElementParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CostElementService_GetCostElementList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CostElementParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link taxWebSitesServiceGetDefaultWebSite}.
 */
export interface TaxWebSitesServiceGetDefaultWebSiteParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tax Web Sites Service Get Default Web Site.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxWebSitesServiceGetDefaultWebSite<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TaxWebSitesServiceGetDefaultWebSiteParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TaxWebSitesServiceGetDefaultWebSiteParameters<DeSerializersT>,
  TaxWebSiteParams | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TaxWebSitesService_GetDefaultWebSite',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TaxWebSiteParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link activitySubjectServiceGetActivitySubjectList}.
 */
export interface ActivitySubjectServiceGetActivitySubjectListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Activity Subject Service Get Activity Subject List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function activitySubjectServiceGetActivitySubjectList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ActivitySubjectServiceGetActivitySubjectListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ActivitySubjectServiceGetActivitySubjectListParameters<DeSerializersT>,
  ActivitySubjectParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ActivitySubjectService_GetActivitySubjectList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ActivitySubjectParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link binLocationsServiceGetList}.
 */
export interface BinLocationsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bin Locations Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function binLocationsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BinLocationsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BinLocationsServiceGetListParameters<DeSerializersT>,
  BinLocationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BinLocationsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BinLocationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link creditNotesServiceInitData}.
 */
export interface CreditNotesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Credit Notes Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function creditNotesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CreditNotesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    CreditNotesServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CreditNotesService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(data, 'CreditNotesService_InitData'),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link cockpitsServiceGetUserCockpitList}.
 */
export interface CockpitsServiceGetUserCockpitListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cockpits Service Get User Cockpit List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cockpitsServiceGetUserCockpitList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CockpitsServiceGetUserCockpitListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CockpitsServiceGetUserCockpitListParameters<DeSerializersT>,
  CockpitParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CockpitsService_GetUserCockpitList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CockpitParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link stockTransferDraftServiceHandleApprovalRequest}.
 */
export interface StockTransferDraftServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Stock Transfer Draft Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function stockTransferDraftServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: StockTransferDraftServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  StockTransferDraftServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'StockTransferDraftService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link departmentsServiceGetDepartmentList}.
 */
export interface DepartmentsServiceGetDepartmentListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Departments Service Get Department List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function departmentsServiceGetDepartmentList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DepartmentsServiceGetDepartmentListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DepartmentsServiceGetDepartmentListParameters<DeSerializersT>,
  DepartmentParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DepartmentsService_GetDepartmentList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DepartmentParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetClassesServiceGetList}.
 */
export interface AssetClassesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Classes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetClassesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetClassesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetClassesServiceGetListParameters<DeSerializersT>,
  AssetClassParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetClassesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetClassParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link natureOfAssesseesServiceGetNatureOfAssesseeList}.
 */
export interface NatureOfAssesseesServiceGetNatureOfAssesseeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Nature Of Assessees Service Get Nature Of Assessee List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function natureOfAssesseesServiceGetNatureOfAssesseeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: NatureOfAssesseesServiceGetNatureOfAssesseeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  NatureOfAssesseesServiceGetNatureOfAssesseeListParameters<DeSerializersT>,
  NatureOfAssesseeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'NatureOfAssesseesService_GetNatureOfAssesseeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, NatureOfAssesseeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link approvalTemplatesServiceGetApprovalTemplateList}.
 */
export interface ApprovalTemplatesServiceGetApprovalTemplateListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Approval Templates Service Get Approval Template List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalTemplatesServiceGetApprovalTemplateList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ApprovalTemplatesServiceGetApprovalTemplateListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ApprovalTemplatesServiceGetApprovalTemplateListParameters<DeSerializersT>,
  ApprovalTemplateParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ApprovalTemplatesService_GetApprovalTemplateList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ApprovalTemplateParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link cockpitsServiceGetCockpitList}.
 */
export interface CockpitsServiceGetCockpitListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cockpits Service Get Cockpit List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cockpitsServiceGetCockpitList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CockpitsServiceGetCockpitListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CockpitsServiceGetCockpitListParameters<DeSerializersT>,
  CockpitParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CockpitsService_GetCockpitList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CockpitParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetCapitalizationCreditMemoServiceGetList}.
 */
export interface AssetCapitalizationCreditMemoServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Capitalization Credit Memo Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetCapitalizationCreditMemoServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetCapitalizationCreditMemoServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetCapitalizationCreditMemoServiceGetListParameters<DeSerializersT>,
  AssetDocumentParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetCapitalizationCreditMemoService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetDocumentParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link landedCostsServiceGetLandedCostList}.
 */
export interface LandedCostsServiceGetLandedCostListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Landed Costs Service Get Landed Cost List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function landedCostsServiceGetLandedCostList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: LandedCostsServiceGetLandedCostListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  LandedCostsServiceGetLandedCostListParameters<DeSerializersT>,
  LandedCostParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'LandedCostsService_GetLandedCostList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, LandedCostParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link creditNotesServiceHandleApprovalRequest}.
 */
export interface CreditNotesServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Credit Notes Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function creditNotesServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CreditNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CreditNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CreditNotesService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link barCodesServiceGetList}.
 */
export interface BarCodesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bar Codes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function barCodesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BarCodesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BarCodesServiceGetListParameters<DeSerializersT>,
  BarCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BarCodesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BarCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryPostingsServiceGetList}.
 */
export interface InventoryPostingsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Postings Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryPostingsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryPostingsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InventoryPostingsServiceGetListParameters<DeSerializersT>,
  InventoryPostingParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryPostingsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, InventoryPostingParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link blanketAgreementsServiceGetBlanketAgreementList}.
 */
export interface BlanketAgreementsServiceGetBlanketAgreementListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Blanket Agreements Service Get Blanket Agreement List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function blanketAgreementsServiceGetBlanketAgreementList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BlanketAgreementsServiceGetBlanketAgreementListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BlanketAgreementsServiceGetBlanketAgreementListParameters<DeSerializersT>,
  BlanketAgreementParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BlanketAgreementsService_GetBlanketAgreementList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BlanketAgreementParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceCallTypesServiceGetServiceCallTypeList}.
 */
export interface ServiceCallTypesServiceGetServiceCallTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Call Types Service Get Service Call Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallTypesServiceGetServiceCallTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceCallTypesServiceGetServiceCallTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceCallTypesServiceGetServiceCallTypeListParameters<DeSerializersT>,
  ServiceCallTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceCallTypesService_GetServiceCallTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceCallTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseQuotationsServiceHandleApprovalRequest}.
 */
export interface PurchaseQuotationsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Quotations Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseQuotationsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseQuotationsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseQuotationsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseQuotationsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientVariantServiceGetList}.
 */
export interface WebClientVariantServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Variant Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientVariantServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientVariantServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientVariantServiceGetListParameters<DeSerializersT>,
  WebClientVariantParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientVariantService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientVariantParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link countriesServiceGetCountryList}.
 */
export interface CountriesServiceGetCountryListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Countries Service Get Country List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function countriesServiceGetCountryList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CountriesServiceGetCountryListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CountriesServiceGetCountryListParameters<DeSerializersT>,
  CountryParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CountriesService_GetCountryList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CountryParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link statesServiceGetStateList}.
 */
export interface StatesServiceGetStateListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * States Service Get State List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function statesServiceGetStateList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: StatesServiceGetStateListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  StatesServiceGetStateListParameters<DeSerializersT>,
  StateParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'StatesService_GetStateList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, StateParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link kpIsServiceGetList}.
 */
export interface KpIsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Kp Is Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function kpIsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: KpIsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  KpIsServiceGetListParameters<DeSerializersT>,
  KpiParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'KPIsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, KpiParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseInvoicesServiceInitData}.
 */
export interface PurchaseInvoicesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Invoices Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseInvoicesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseInvoicesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseInvoicesServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseInvoicesService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseInvoicesService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link employeeIdTypeServiceGetList}.
 */
export interface EmployeeIdTypeServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Employee Id Type Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeIdTypeServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmployeeIdTypeServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmployeeIdTypeServiceGetListParameters<DeSerializersT>,
  EmployeeIdTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmployeeIDTypeService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmployeeIdTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link costCenterTypesServiceGetCostCenterTypeList}.
 */
export interface CostCenterTypesServiceGetCostCenterTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cost Center Types Service Get Cost Center Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function costCenterTypesServiceGetCostCenterTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CostCenterTypesServiceGetCostCenterTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CostCenterTypesServiceGetCostCenterTypeListParameters<DeSerializersT>,
  CostCenterTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CostCenterTypesService_GetCostCenterTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CostCenterTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link targetGroupsServiceGetList}.
 */
export interface TargetGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Target Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function targetGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TargetGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TargetGroupsServiceGetListParameters<DeSerializersT>,
  TargetGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TargetGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TargetGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link extendedTranslationsServiceGetExtendedTranslationList}.
 */
export interface ExtendedTranslationsServiceGetExtendedTranslationListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Extended Translations Service Get Extended Translation List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function extendedTranslationsServiceGetExtendedTranslationList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ExtendedTranslationsServiceGetExtendedTranslationListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ExtendedTranslationsServiceGetExtendedTranslationListParameters<DeSerializersT>,
  ExtendedTranslationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ExtendedTranslationsService_GetExtendedTranslationList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ExtendedTranslationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link partnersSetupsServiceGetList}.
 */
export interface PartnersSetupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Partners Setups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function partnersSetupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PartnersSetupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PartnersSetupsServiceGetListParameters<DeSerializersT>,
  PartnersSetupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PartnersSetupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PartnersSetupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link occurrenceCodesServiceGetList}.
 */
export interface OccurrenceCodesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Occurrence Codes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function occurrenceCodesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: OccurrenceCodesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  OccurrenceCodesServiceGetListParameters<DeSerializersT>,
  OccurenceCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'OccurrenceCodesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, OccurenceCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceCallStatusServiceGetServiceCallStatusList}.
 */
export interface ServiceCallStatusServiceGetServiceCallStatusListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Call Status Service Get Service Call Status List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallStatusServiceGetServiceCallStatusList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceCallStatusServiceGetServiceCallStatusListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceCallStatusServiceGetServiceCallStatusListParameters<DeSerializersT>,
  ServiceCallStatusParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceCallStatusService_GetServiceCallStatusList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceCallStatusParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList}.
 */
export interface ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Call Solution Status Service Get Service Call Solution Status List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters<DeSerializersT>,
  ServiceCallSolutionStatusParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceCallSolutionStatusService_GetServiceCallSolutionStatusList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceCallSolutionStatusParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseCreditNotesServiceInitData}.
 */
export interface PurchaseCreditNotesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Credit Notes Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseCreditNotesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseCreditNotesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseCreditNotesServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseCreditNotesService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseCreditNotesService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link emailGroupsServiceGetList}.
 */
export interface EmailGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Email Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function emailGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmailGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmailGroupsServiceGetListParameters<DeSerializersT>,
  EmailGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmailGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmailGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetCapitalizationServiceGetList}.
 */
export interface AssetCapitalizationServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Capitalization Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetCapitalizationServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetCapitalizationServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetCapitalizationServiceGetListParameters<DeSerializersT>,
  AssetDocumentParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetCapitalizationService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetDocumentParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceCallOriginsServiceGetServiceCallOriginList}.
 */
export interface ServiceCallOriginsServiceGetServiceCallOriginListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Call Origins Service Get Service Call Origin List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallOriginsServiceGetServiceCallOriginList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceCallOriginsServiceGetServiceCallOriginListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceCallOriginsServiceGetServiceCallOriginListParameters<DeSerializersT>,
  ServiceCallOriginParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceCallOriginsService_GetServiceCallOriginList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceCallOriginParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link employeePositionServiceGetList}.
 */
export interface EmployeePositionServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Employee Position Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeePositionServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmployeePositionServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmployeePositionServiceGetListParameters<DeSerializersT>,
  EmployeePositionParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmployeePositionService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmployeePositionParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link glAccountAdvancedRulesServiceGetList}.
 */
export interface GlAccountAdvancedRulesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Gl Account Advanced Rules Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function glAccountAdvancedRulesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GlAccountAdvancedRulesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  GlAccountAdvancedRulesServiceGetListParameters<DeSerializersT>,
  GlAccountAdvancedRuleParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'GLAccountAdvancedRulesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, GlAccountAdvancedRuleParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link trackingNotesServiceGetList}.
 */
export interface TrackingNotesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tracking Notes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function trackingNotesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TrackingNotesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TrackingNotesServiceGetListParameters<DeSerializersT>,
  TrackingNoteParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TrackingNotesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TrackingNoteParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseDeliveryNotesServiceHandleApprovalRequest}.
 */
export interface PurchaseDeliveryNotesServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Delivery Notes Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseDeliveryNotesServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseDeliveryNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseDeliveryNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseDeliveryNotesService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link shortLinkMappingsServiceBatchDelete}.
 */
export interface ShortLinkMappingsServiceBatchDeleteParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Short Link Mappings Service Batch Delete.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function shortLinkMappingsServiceBatchDelete<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ShortLinkMappingsServiceBatchDeleteParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ShortLinkMappingsServiceBatchDeleteParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ShortLinkMappingsService_BatchDelete',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseDownPaymentsServiceHandleApprovalRequest}.
 */
export interface PurchaseDownPaymentsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Down Payments Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseDownPaymentsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseDownPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseDownPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseDownPaymentsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectManagementConfigurationServiceGetPriorities}.
 */
export interface ProjectManagementConfigurationServiceGetPrioritiesParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Project Management Configuration Service Get Priorities.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetPriorities<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectManagementConfigurationServiceGetPrioritiesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectManagementConfigurationServiceGetPrioritiesParameters<DeSerializersT>,
  PmcPriorityData[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectManagementConfigurationService_GetPriorities',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PmcPriorityData)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link approvalStagesServiceGetApprovalStageList}.
 */
export interface ApprovalStagesServiceGetApprovalStageListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Approval Stages Service Get Approval Stage List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalStagesServiceGetApprovalStageList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ApprovalStagesServiceGetApprovalStageListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ApprovalStagesServiceGetApprovalStageListParameters<DeSerializersT>,
  ApprovalStageParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ApprovalStagesService_GetApprovalStageList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ApprovalStageParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseReturnsServiceInitData}.
 */
export interface PurchaseReturnsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Returns Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseReturnsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseReturnsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseReturnsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseReturnsService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseReturnsService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link dimensionsServiceGetDimensionList}.
 */
export interface DimensionsServiceGetDimensionListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Dimensions Service Get Dimension List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function dimensionsServiceGetDimensionList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DimensionsServiceGetDimensionListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DimensionsServiceGetDimensionListParameters<DeSerializersT>,
  DimensionParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DimensionsService_GetDimensionList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DimensionParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseOrdersServiceHandleApprovalRequest}.
 */
export interface PurchaseOrdersServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Orders Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseOrdersServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseOrdersServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PurchaseOrdersServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseOrdersService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryGenExitServiceInitData}.
 */
export interface InventoryGenExitServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Gen Exit Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryGenExitServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryGenExitServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    InventoryGenExitServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryGenExitService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'InventoryGenExitService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseOrdersServiceInitData}.
 */
export interface PurchaseOrdersServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Orders Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseOrdersServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseOrdersServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseOrdersServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseOrdersService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseOrdersService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link quotationsServiceHandleApprovalRequest}.
 */
export interface QuotationsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Quotations Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function quotationsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: QuotationsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  QuotationsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'QuotationsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceGroupsServiceGetServiceGroupList}.
 */
export interface ServiceGroupsServiceGetServiceGroupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Groups Service Get Service Group List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceGroupsServiceGetServiceGroupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceGroupsServiceGetServiceGroupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceGroupsServiceGetServiceGroupListParameters<DeSerializersT>,
  ServiceGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceGroupsService_GetServiceGroupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link userGroupServiceGetUserGroupList}.
 */
export interface UserGroupServiceGetUserGroupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * User Group Service Get User Group List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function userGroupServiceGetUserGroupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: UserGroupServiceGetUserGroupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  UserGroupServiceGetUserGroupListParameters<DeSerializersT>,
  UserGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'UserGroupService_GetUserGroupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, UserGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link tsrExceptionalEventServiceGetList}.
 */
export interface TsrExceptionalEventServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tsr Exceptional Event Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function tsrExceptionalEventServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TsrExceptionalEventServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TsrExceptionalEventServiceGetListParameters<DeSerializersT>,
  TsrExceptionalEventParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TSRExceptionalEventService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TsrExceptionalEventParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link goodsReturnRequestServiceHandleApprovalRequest}.
 */
export interface GoodsReturnRequestServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Goods Return Request Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function goodsReturnRequestServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GoodsReturnRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  GoodsReturnRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'GoodsReturnRequestService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link taxCodeDeterminationsServiceGetTaxCodeDeterminationList}.
 */
export interface TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tax Code Determinations Service Get Tax Code Determination List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxCodeDeterminationsServiceGetTaxCodeDeterminationList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters<DeSerializersT>,
  TaxCodeDeterminationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TaxCodeDeterminationsService_GetTaxCodeDeterminationList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TaxCodeDeterminationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link intrastatConfigurationServiceGetList}.
 */
export interface IntrastatConfigurationServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Intrastat Configuration Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function intrastatConfigurationServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IntrastatConfigurationServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  IntrastatConfigurationServiceGetListParameters<DeSerializersT>,
  IntrastatConfigurationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'IntrastatConfigurationService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, IntrastatConfigurationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link queryAuthGroupServiceGetQueryAuthGroupList}.
 */
export interface QueryAuthGroupServiceGetQueryAuthGroupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Query Auth Group Service Get Query Auth Group List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function queryAuthGroupServiceGetQueryAuthGroupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: QueryAuthGroupServiceGetQueryAuthGroupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  QueryAuthGroupServiceGetQueryAuthGroupListParameters<DeSerializersT>,
  QueryAuthGroups[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'QueryAuthGroupService_GetQueryAuthGroupList',
    data =>
      transformReturnValueForEntityList(
        data,
        sapb1(deSerializers).queryAuthGroupsApi
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectManagementConfigurationServiceGetSubprojectTypes}.
 */
export interface ProjectManagementConfigurationServiceGetSubprojectTypesParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Project Management Configuration Service Get Subproject Types.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetSubprojectTypes<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectManagementConfigurationServiceGetSubprojectTypesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectManagementConfigurationServiceGetSubprojectTypesParameters<DeSerializersT>,
  PmcSubprojectTypeData[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectManagementConfigurationService_GetSubprojectTypes',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PmcSubprojectTypeData)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link returnsServiceHandleApprovalRequest}.
 */
export interface ReturnsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Returns Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function returnsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReturnsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ReturnsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ReturnsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetRetirementServiceGetList}.
 */
export interface AssetRetirementServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Retirement Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetRetirementServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetRetirementServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetRetirementServiceGetListParameters<DeSerializersT>,
  AssetDocumentParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetRetirementService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetDocumentParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link employeeTransfersServiceGetEmployeeTransferList}.
 */
export interface EmployeeTransfersServiceGetEmployeeTransferListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Employee Transfers Service Get Employee Transfer List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeTransfersServiceGetEmployeeTransferList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmployeeTransfersServiceGetEmployeeTransferListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmployeeTransfersServiceGetEmployeeTransferListParameters<DeSerializersT>,
  EmployeeTransferParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmployeeTransfersService_GetEmployeeTransferList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmployeeTransferParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectManagementConfigurationServiceGetActivities}.
 */
export interface ProjectManagementConfigurationServiceGetActivitiesParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Project Management Configuration Service Get Activities.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetActivities<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectManagementConfigurationServiceGetActivitiesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectManagementConfigurationServiceGetActivitiesParameters<DeSerializersT>,
  PmcActivityData[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectManagementConfigurationService_GetActivities',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PmcActivityData)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link determinationCriteriasServiceGetList}.
 */
export interface DeterminationCriteriasServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Determination Criterias Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function determinationCriteriasServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeterminationCriteriasServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DeterminationCriteriasServiceGetListParameters<DeSerializersT>,
  DeterminationCriteriaParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DeterminationCriteriasService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DeterminationCriteriaParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link ewbTransporterServiceGetEwbTransporterList}.
 */
export interface EwbTransporterServiceGetEwbTransporterListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Ewb Transporter Service Get Ewb Transporter List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function ewbTransporterServiceGetEwbTransporterList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EwbTransporterServiceGetEwbTransporterListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EwbTransporterServiceGetEwbTransporterListParameters<DeSerializersT>,
  EwbTransporterParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EWBTransporterService_GetEWBTransporterList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EwbTransporterParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectManagementConfigurationServiceGetTasks}.
 */
export interface ProjectManagementConfigurationServiceGetTasksParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Project Management Configuration Service Get Tasks.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetTasks<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectManagementConfigurationServiceGetTasksParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectManagementConfigurationServiceGetTasksParameters<DeSerializersT>,
  PmcTaskData[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectManagementConfigurationService_GetTasks',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PmcTaskData)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link returnRequestServiceHandleApprovalRequest}.
 */
export interface ReturnRequestServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Return Request Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function returnRequestServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReturnRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ReturnRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ReturnRequestService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link assetTransferServiceGetList}.
 */
export interface AssetTransferServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Asset Transfer Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetTransferServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AssetTransferServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AssetTransferServiceGetListParameters<DeSerializersT>,
  AssetDocumentParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AssetTransferService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AssetDocumentParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link returnRequestServiceInitData}.
 */
export interface ReturnRequestServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Return Request Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function returnRequestServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ReturnRequestServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    ReturnRequestServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ReturnRequestService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'ReturnRequestService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link activityRecipientListsServiceGetList}.
 */
export interface ActivityRecipientListsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Activity Recipient Lists Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function activityRecipientListsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ActivityRecipientListsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ActivityRecipientListsServiceGetListParameters<DeSerializersT>,
  ActivityRecipientListParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ActivityRecipientListsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ActivityRecipientListParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientPreferenceServiceGetList}.
 */
export interface WebClientPreferenceServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Preference Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientPreferenceServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientPreferenceServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientPreferenceServiceGetListParameters<DeSerializersT>,
  WebClientPreferenceParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientPreferenceService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientPreferenceParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientLaunchpadServiceGetList}.
 */
export interface WebClientLaunchpadServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Launchpad Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientLaunchpadServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientLaunchpadServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientLaunchpadServiceGetListParameters<DeSerializersT>,
  WebClientLaunchpadParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientLaunchpadService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientLaunchpadParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientBookmarkTileServiceGetList}.
 */
export interface WebClientBookmarkTileServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Bookmark Tile Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientBookmarkTileServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientBookmarkTileServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientBookmarkTileServiceGetListParameters<DeSerializersT>,
  WebClientBookmarkTileParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientBookmarkTileService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientBookmarkTileParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link identificationCodeServiceGetList}.
 */
export interface IdentificationCodeServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Identification Code Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function identificationCodeServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IdentificationCodeServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  IdentificationCodeServiceGetListParameters<DeSerializersT>,
  IdentificationCodes[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'IdentificationCodeService_GetList',
    data =>
      transformReturnValueForEntityList(
        data,
        sapb1(deSerializers).identificationCodesApi
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientNotificationServiceGetList}.
 */
export interface WebClientNotificationServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Notification Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientNotificationServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientNotificationServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientNotificationServiceGetListParameters<DeSerializersT>,
  WebClientNotificationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientNotificationService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientNotificationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientDashboardServiceGetList}.
 */
export interface WebClientDashboardServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Dashboard Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientDashboardServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientDashboardServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientDashboardServiceGetListParameters<DeSerializersT>,
  WebClientDashboardParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientDashboardService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientDashboardParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientRecentActivityServiceGetList}.
 */
export interface WebClientRecentActivityServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Recent Activity Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientRecentActivityServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientRecentActivityServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientRecentActivityServiceGetListParameters<DeSerializersT>,
  WebClientRecentActivityParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientRecentActivityService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientRecentActivityParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link deductibleTaxServiceGetList}.
 */
export interface DeductibleTaxServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Deductible Tax Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deductibleTaxServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeductibleTaxServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DeductibleTaxServiceGetListParameters<DeSerializersT>,
  DeductibleTaxParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DeductibleTaxService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DeductibleTaxParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link logout}.
 */
export interface LogoutParameters<DeSerializersT extends DeSerializers> {}

/**
 * Logout.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function logout<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: LogoutParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  LogoutParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'Logout',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link bpVatExemptionsServiceGetList}.
 */
export interface BpVatExemptionsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bp Vat Exemptions Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function bpVatExemptionsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BpVatExemptionsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BpVatExemptionsServiceGetListParameters<DeSerializersT>,
  BpVatExemptionsParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BPVatExemptionsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BpVatExemptionsParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link wTaxTypeCodeServiceGetWTaxTypeCodeList}.
 */
export interface WTaxTypeCodeServiceGetWTaxTypeCodeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * W Tax Type Code Service Get W Tax Type Code List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function wTaxTypeCodeServiceGetWTaxTypeCodeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WTaxTypeCodeServiceGetWTaxTypeCodeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WTaxTypeCodeServiceGetWTaxTypeCodeListParameters<DeSerializersT>,
  WTaxTypeCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WTaxTypeCodeService_GetWTaxTypeCodeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WTaxTypeCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link recurringTransactionServiceGetAvailableRecurringTransactions}.
 */
export interface RecurringTransactionServiceGetAvailableRecurringTransactionsParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Recurring Transaction Service Get Available Recurring Transactions.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function recurringTransactionServiceGetAvailableRecurringTransactions<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RecurringTransactionServiceGetAvailableRecurringTransactionsParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  RecurringTransactionServiceGetAvailableRecurringTransactionsParameters<DeSerializersT>,
  RclRecurringTransaction[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'RecurringTransactionService_GetAvailableRecurringTransactions',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, RclRecurringTransaction)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link paymentReasonCodeServiceGetPaymentReasonCodeList}.
 */
export interface PaymentReasonCodeServiceGetPaymentReasonCodeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Payment Reason Code Service Get Payment Reason Code List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function paymentReasonCodeServiceGetPaymentReasonCodeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PaymentReasonCodeServiceGetPaymentReasonCodeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PaymentReasonCodeServiceGetPaymentReasonCodeListParameters<DeSerializersT>,
  PaymentReasonCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PaymentReasonCodeService_GetPaymentReasonCodeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PaymentReasonCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link predefinedTextsServiceGetPredefinedTextList}.
 */
export interface PredefinedTextsServiceGetPredefinedTextListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Predefined Texts Service Get Predefined Text List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function predefinedTextsServiceGetPredefinedTextList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PredefinedTextsServiceGetPredefinedTextListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  PredefinedTextsServiceGetPredefinedTextListParameters<DeSerializersT>,
  PredefinedTextParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PredefinedTextsService_GetPredefinedTextList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PredefinedTextParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link exceptionalEventServiceGetExceptionalEventList}.
 */
export interface ExceptionalEventServiceGetExceptionalEventListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Exceptional Event Service Get Exceptional Event List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function exceptionalEventServiceGetExceptionalEventList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ExceptionalEventServiceGetExceptionalEventListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ExceptionalEventServiceGetExceptionalEventListParameters<DeSerializersT>,
  ExceptionalEventParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ExceptionalEventService_GetExceptionalEventList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ExceptionalEventParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link incomingPaymentsServiceHandleApprovalRequest}.
 */
export interface IncomingPaymentsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Incoming Payments Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function incomingPaymentsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IncomingPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  IncomingPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'IncomingPaymentsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList}.
 */
export interface ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Service Call Problem Sub Types Service Get Service Call Problem Sub Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters<DeSerializersT>,
  ServiceCallProblemSubTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ServiceCallProblemSubTypesService_GetServiceCallProblemSubTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ServiceCallProblemSubTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link employmentCategoryServiceGetEmploymentCategoryList}.
 */
export interface EmploymentCategoryServiceGetEmploymentCategoryListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Employment Category Service Get Employment Category List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employmentCategoryServiceGetEmploymentCategoryList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: EmploymentCategoryServiceGetEmploymentCategoryListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  EmploymentCategoryServiceGetEmploymentCategoryListParameters<DeSerializersT>,
  EmploymentCategoryParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'EmploymentCategoryService_GetEmploymentCategoryList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, EmploymentCategoryParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link shortLinkMappingsServiceGetList}.
 */
export interface ShortLinkMappingsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Short Link Mappings Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function shortLinkMappingsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ShortLinkMappingsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ShortLinkMappingsServiceGetListParameters<DeSerializersT>,
  ShortLinkMappingParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ShortLinkMappingsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ShortLinkMappingParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link bemReplicationPeriodServiceGetList}.
 */
export interface BemReplicationPeriodServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bem Replication Period Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function bemReplicationPeriodServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BemReplicationPeriodServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BemReplicationPeriodServiceGetListParameters<DeSerializersT>,
  BemReplicationPeriodParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BEMReplicationPeriodService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BemReplicationPeriodParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link accountCategoryServiceGetCategoryList}.
 */
export interface AccountCategoryServiceGetCategoryListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Account Category Service Get Category List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function accountCategoryServiceGetCategoryList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AccountCategoryServiceGetCategoryListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AccountCategoryServiceGetCategoryListParameters<DeSerializersT>,
  AccountCategoryParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AccountCategoryService_GetCategoryList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AccountCategoryParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList}.
 */
export interface BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Bank Charges Allocation Codes Service Get Bank Charges Allocation Code List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters<DeSerializersT>,
  BankChargesAllocationCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BankChargesAllocationCodesService_GetBankChargesAllocationCodeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BankChargesAllocationCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link boeDocumentTypesServiceGetBoeDocumentTypeList}.
 */
export interface BoeDocumentTypesServiceGetBoeDocumentTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Boe Document Types Service Get Boe Document Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function boeDocumentTypesServiceGetBoeDocumentTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BoeDocumentTypesServiceGetBoeDocumentTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BoeDocumentTypesServiceGetBoeDocumentTypeListParameters<DeSerializersT>,
  BoeDocumentTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BOEDocumentTypesService_GetBOEDocumentTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BoeDocumentTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link cashFlowLineItemsServiceGetCashFlowLineItemList}.
 */
export interface CashFlowLineItemsServiceGetCashFlowLineItemListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Cash Flow Line Items Service Get Cash Flow Line Item List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cashFlowLineItemsServiceGetCashFlowLineItemList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CashFlowLineItemsServiceGetCashFlowLineItemListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CashFlowLineItemsServiceGetCashFlowLineItemListParameters<DeSerializersT>,
  CashFlowLineItemParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CashFlowLineItemsService_GetCashFlowLineItemList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CashFlowLineItemParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link campaignResponseTypeServiceGetResponseTypeList}.
 */
export interface CampaignResponseTypeServiceGetResponseTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Campaign Response Type Service Get Response Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function campaignResponseTypeServiceGetResponseTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CampaignResponseTypeServiceGetResponseTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CampaignResponseTypeServiceGetResponseTypeListParameters<DeSerializersT>,
  CampaignResponseTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CampaignResponseTypeService_GetResponseTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CampaignResponseTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link mobileAppServiceGetCurrentServerDateTime}.
 */
export interface MobileAppServiceGetCurrentServerDateTimeParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Mobile App Service Get Current Server Date Time.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function mobileAppServiceGetCurrentServerDateTime<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MobileAppServiceGetCurrentServerDateTimeParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  MobileAppServiceGetCurrentServerDateTimeParameters<DeSerializersT>,
  MobileServerDateTime | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'MobileAppService_GetCurrentServerDateTime',
    data =>
      transformReturnValueForComplexType(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, MobileServerDateTime)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectManagementConfigurationServiceGetStageTypes}.
 */
export interface ProjectManagementConfigurationServiceGetStageTypesParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Project Management Configuration Service Get Stage Types.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetStageTypes<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectManagementConfigurationServiceGetStageTypesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectManagementConfigurationServiceGetStageTypesParameters<DeSerializersT>,
  PmcStageTypeData[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectManagementConfigurationService_GetStageTypes',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, PmcStageTypeData)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link indiaSacCodeServiceGetList}.
 */
export interface IndiaSacCodeServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * India Sac Code Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function indiaSacCodeServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: IndiaSacCodeServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  IndiaSacCodeServiceGetListParameters<DeSerializersT>,
  IndiaSacCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'IndiaSacCodeService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, IndiaSacCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link faAccountDeterminationsServiceGetList}.
 */
export interface FaAccountDeterminationsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Fa Account Determinations Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function faAccountDeterminationsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: FaAccountDeterminationsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  FaAccountDeterminationsServiceGetListParameters<DeSerializersT>,
  FaAccountDeterminationParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'FAAccountDeterminationsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, FaAccountDeterminationParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link nfTaxCategoriesServiceGetList}.
 */
export interface NfTaxCategoriesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Nf Tax Categories Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function nfTaxCategoriesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: NfTaxCategoriesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  NfTaxCategoriesServiceGetListParameters<DeSerializersT>,
  NfTaxCategoryParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'NFTaxCategoriesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, NfTaxCategoryParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList}.
 */
export interface TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Tax Code Determinations Tcd Service Get Tax Code Determination Tcd List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters<DeSerializersT>,
  TaxCodeDeterminationTcdParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TaxCodeDeterminationsTCDService_GetTaxCodeDeterminationTCDList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TaxCodeDeterminationTcdParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link boePortfoliosServiceGetBoePortfolioList}.
 */
export interface BoePortfoliosServiceGetBoePortfolioListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Boe Portfolios Service Get Boe Portfolio List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function boePortfoliosServiceGetBoePortfolioList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BoePortfoliosServiceGetBoePortfolioListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BoePortfoliosServiceGetBoePortfolioListParameters<DeSerializersT>,
  BoePortfolioParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BOEPortfoliosService_GetBOEPortfolioList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BoePortfolioParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link checkLinesServiceGetValidCheckLineList}.
 */
export interface CheckLinesServiceGetValidCheckLineListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Check Lines Service Get Valid Check Line List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function checkLinesServiceGetValidCheckLineList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: CheckLinesServiceGetValidCheckLineListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  CheckLinesServiceGetValidCheckLineListParameters<DeSerializersT>,
  CheckLineParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'CheckLinesService_GetValidCheckLineList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, CheckLineParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link resourcesServiceGetList}.
 */
export interface ResourcesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Resources Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourcesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ResourcesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ResourcesServiceGetListParameters<DeSerializersT>,
  ResourceParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ResourcesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ResourceParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link resourcePropertiesServiceGetList}.
 */
export interface ResourcePropertiesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Resource Properties Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourcePropertiesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ResourcePropertiesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ResourcePropertiesServiceGetListParameters<DeSerializersT>,
  ResourcePropertyParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ResourcePropertiesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ResourcePropertyParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link resourceGroupsServiceGetList}.
 */
export interface ResourceGroupsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Resource Groups Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourceGroupsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ResourceGroupsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ResourceGroupsServiceGetListParameters<DeSerializersT>,
  ResourceGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ResourceGroupsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ResourceGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link boeInstructionsServiceGetBoeInstructionList}.
 */
export interface BoeInstructionsServiceGetBoeInstructionListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Boe Instructions Service Get Boe Instruction List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function boeInstructionsServiceGetBoeInstructionList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BoeInstructionsServiceGetBoeInstructionListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BoeInstructionsServiceGetBoeInstructionListParameters<DeSerializersT>,
  BoeInstructionParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BOEInstructionsService_GetBOEInstructionList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BoeInstructionParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryOpeningBalancesServiceGetList}.
 */
export interface InventoryOpeningBalancesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Opening Balances Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryOpeningBalancesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryOpeningBalancesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InventoryOpeningBalancesServiceGetListParameters<DeSerializersT>,
  InventoryOpeningBalanceParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryOpeningBalancesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, InventoryOpeningBalanceParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link webClientListviewFilterServiceGetList}.
 */
export interface WebClientListviewFilterServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Web Client Listview Filter Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function webClientListviewFilterServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: WebClientListviewFilterServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  WebClientListviewFilterServiceGetListParameters<DeSerializersT>,
  WebClientListviewFilterParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'WebClientListviewFilterService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, WebClientListviewFilterParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseDownPaymentsServiceInitData}.
 */
export interface PurchaseDownPaymentsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Down Payments Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseDownPaymentsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseDownPaymentsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseDownPaymentsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseDownPaymentsService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseDownPaymentsService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link govPayCodesServiceGetList}.
 */
export interface GovPayCodesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Gov Pay Codes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function govPayCodesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: GovPayCodesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  GovPayCodesServiceGetListParameters<DeSerializersT>,
  GovPayCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'GovPayCodesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, GovPayCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link itemsServiceInitData}.
 */
export interface ItemsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Items Service Init Data.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function itemsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ItemsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ItemsServiceInitDataParameters<DeSerializersT>,
  Items | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ItemsService_InitData',
    data => transformReturnValueForEntity(data, sapb1(deSerializers).itemsApi),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link depreciationTypesServiceGetList}.
 */
export interface DepreciationTypesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Depreciation Types Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depreciationTypesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DepreciationTypesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DepreciationTypesServiceGetListParameters<DeSerializersT>,
  DepreciationTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DepreciationTypesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DepreciationTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link electronicFileFormatsServiceGetElectronicFileFormatList}.
 */
export interface ElectronicFileFormatsServiceGetElectronicFileFormatListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Electronic File Formats Service Get Electronic File Format List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function electronicFileFormatsServiceGetElectronicFileFormatList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ElectronicFileFormatsServiceGetElectronicFileFormatListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ElectronicFileFormatsServiceGetElectronicFileFormatListParameters<DeSerializersT>,
  ElectronicFileFormatParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ElectronicFileFormatsService_GetElectronicFileFormatList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ElectronicFileFormatParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link businessPartnerPropertiesServiceGetBusinessPartnerPropertyList}.
 */
export interface BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Business Partner Properties Service Get Business Partner Property List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function businessPartnerPropertiesServiceGetBusinessPartnerPropertyList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters<DeSerializersT>,
  BusinessPartnerPropertyParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BusinessPartnerPropertiesService_GetBusinessPartnerPropertyList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BusinessPartnerPropertyParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link transactionCodesServiceGetList}.
 */
export interface TransactionCodesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Transaction Codes Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function transactionCodesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: TransactionCodesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  TransactionCodesServiceGetListParameters<DeSerializersT>,
  TransactionCodeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'TransactionCodesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, TransactionCodeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link vendorPaymentsServiceHandleApprovalRequest}.
 */
export interface VendorPaymentsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Vendor Payments Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function vendorPaymentsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: VendorPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  VendorPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'VendorPaymentsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link mobileAddOnSettingServiceGetMobileAddOnSettingList}.
 */
export interface MobileAddOnSettingServiceGetMobileAddOnSettingListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Mobile Add On Setting Service Get Mobile Add On Setting List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function mobileAddOnSettingServiceGetMobileAddOnSettingList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MobileAddOnSettingServiceGetMobileAddOnSettingListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  MobileAddOnSettingServiceGetMobileAddOnSettingListParameters<DeSerializersT>,
  MobileAddOnSettingParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'MobileAddOnSettingService_GetMobileAddOnSettingList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, MobileAddOnSettingParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link downPaymentsServiceHandleApprovalRequest}.
 */
export interface DownPaymentsServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Down Payments Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function downPaymentsServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DownPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DownPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DownPaymentsService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseQuotationsServiceInitData}.
 */
export interface PurchaseQuotationsServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Quotations Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseQuotationsServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseQuotationsServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseQuotationsServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseQuotationsService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseQuotationsService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link accrualTypesServiceGetAccrualTypeList}.
 */
export interface AccrualTypesServiceGetAccrualTypeListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Accrual Types Service Get Accrual Type List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function accrualTypesServiceGetAccrualTypeList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: AccrualTypesServiceGetAccrualTypeListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  AccrualTypesServiceGetAccrualTypeListParameters<DeSerializersT>,
  AccrualTypeParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'AccrualTypesService_GetAccrualTypeList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, AccrualTypeParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link activitiesServiceInitData}.
 */
export interface ActivitiesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Activities Service Init Data.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function activitiesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ActivitiesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ActivitiesServiceInitDataParameters<DeSerializersT>,
  Activities | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ActivitiesService_InitData',
    data =>
      transformReturnValueForEntity(data, sapb1(deSerializers).activitiesApi),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link nfModelsServiceGetList}.
 */
export interface NfModelsServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Nf Models Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function nfModelsServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: NfModelsServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  NfModelsServiceGetListParameters<DeSerializersT>,
  NfModelParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'NFModelsService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, NfModelParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link brazilFuelIndexersServiceGetList}.
 */
export interface BrazilFuelIndexersServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Brazil Fuel Indexers Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function brazilFuelIndexersServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: BrazilFuelIndexersServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  BrazilFuelIndexersServiceGetListParameters<DeSerializersT>,
  BrazilFuelIndexerParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'BrazilFuelIndexersService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, BrazilFuelIndexerParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryGenEntryServiceHandleApprovalRequest}.
 */
export interface InventoryGenEntryServiceHandleApprovalRequestParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Gen Entry Service Handle Approval Request.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryGenEntryServiceHandleApprovalRequest<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryGenEntryServiceHandleApprovalRequestParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  InventoryGenEntryServiceHandleApprovalRequestParameters<DeSerializersT>,
  undefined
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryGenEntryService_HandleApprovalRequest',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link distributionRulesServiceGetDistributionRuleList}.
 */
export interface DistributionRulesServiceGetDistributionRuleListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Distribution Rules Service Get Distribution Rule List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function distributionRulesServiceGetDistributionRuleList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DistributionRulesServiceGetDistributionRuleListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DistributionRulesServiceGetDistributionRuleListParameters<DeSerializersT>,
  DistributionRuleParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DistributionRulesService_GetDistributionRuleList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DistributionRuleParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link projectsServiceGetProjectList}.
 */
export interface ProjectsServiceGetProjectListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Projects Service Get Project List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectsServiceGetProjectList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: ProjectsServiceGetProjectListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  ProjectsServiceGetProjectListParameters<DeSerializersT>,
  ProjectParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'ProjectsService_GetProjectList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, ProjectParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link inventoryGenEntryServiceInitData}.
 */
export interface InventoryGenEntryServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Inventory Gen Entry Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryGenEntryServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: InventoryGenEntryServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    InventoryGenEntryServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'InventoryGenEntryService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'InventoryGenEntryService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link messagesServiceGetSentMessages}.
 */
export interface MessagesServiceGetSentMessagesParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Messages Service Get Sent Messages.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function messagesServiceGetSentMessages<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: MessagesServiceGetSentMessagesParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  MessagesServiceGetSentMessagesParameters<DeSerializersT>,
  MessageHeader[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'MessagesService_GetSentMessages',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, MessageHeader)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList}.
 */
export interface DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Deduction Tax Sub Groups Service Get Deduction Tax Sub Group List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters<DeSerializersT>,
  DeductionTaxSubGroupParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'DeductionTaxSubGroupsService_GetDeductionTaxSubGroupList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, DeductionTaxSubGroupParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link purchaseDeliveryNotesServiceInitData}.
 */
export interface PurchaseDeliveryNotesServiceInitDataParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Purchase Delivery Notes Service Init Data. The 'execute' method does not exist for this action import. Please use 'executeRaw' to get the raw response.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseDeliveryNotesServiceInitData<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: PurchaseDeliveryNotesServiceInitDataParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): Omit<
  OperationRequestBuilder<
    DeSerializersT,
    PurchaseDeliveryNotesServiceInitDataParameters<DeSerializersT>,
    never
  >,
  'execute'
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'PurchaseDeliveryNotesService_InitData',
    data =>
      throwErrorWhenReturnTypeIsUnionType(
        data,
        'PurchaseDeliveryNotesService_InitData'
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link routeStagesServiceGetList}.
 */
export interface RouteStagesServiceGetListParameters<
  DeSerializersT extends DeSerializers
> {}

/**
 * Route Stages Service Get List.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function routeStagesServiceGetList<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: RouteStagesServiceGetListParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  RouteStagesServiceGetListParameters<DeSerializersT>,
  RouteStageParams[] | null
> {
  const params = {};

  return new OperationRequestBuilder(
    '/',
    'RouteStagesService_GetList',
    data =>
      transformReturnValueForComplexTypeList(data, data =>
        entityDeserializer(
          deSerializers || defaultDeSerializers
        ).deserializeComplexType(data, RouteStageParams)
      ),
    params,
    deSerializers,
    'action'
  );
}

/**
 * Type of the parameters to be passed to {@link sboBobServiceSetSystemPermission}.
 */
export interface SboBobServiceSetSystemPermissionParameters<
  DeSerializersT extends DeSerializers
> {
  /**
   * User Code.
   */
  userCode?: string | null;
  /**
   * Permission Id.
   */
  permissionId?: string | null;
  /**
   * Permission.
   */
  permission?: number | null;
}

/**
 * Sbo Bob Service Set System Permission.
 * @param parameters - Object containing all parameters for the action.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceSetSystemPermission<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
>(
  parameters: SboBobServiceSetSystemPermissionParameters<DeSerializersT>,
  deSerializers: DeSerializersT = defaultDeSerializers as any
): OperationRequestBuilder<
  DeSerializersT,
  SboBobServiceSetSystemPermissionParameters<DeSerializersT>,
  undefined
> {
  const params = {
    userCode: new OperationParameter(
      'UserCode',
      'Edm.String',
      parameters.userCode
    ),
    permissionId: new OperationParameter(
      'PermissionID',
      'Edm.String',
      parameters.permissionId
    ),
    permission: new OperationParameter(
      'Permission',
      'Edm.Int32',
      parameters.permission
    )
  };

  return new OperationRequestBuilder(
    '/',
    'SBOBobService_SetSystemPermission',
    data => transformReturnValueForUndefined(data, val => undefined),
    params,
    deSerializers,
    'action'
  );
}

export const operations = {
  licenseServiceGetInstallationNumber,
  companyServiceGetAdminInfo,
  companyServiceGetPathAdmin,
  electronicDocumentServiceGetProtocols,
  companyServiceGetCompanyInfo,
  sboBobServiceGetSystemPermission,
  userMenuServiceGetCurrentUserMenu,
  sboBobServiceGetDueDate,
  sboBobServiceGetIndexRate,
  messagesServiceGetInbox,
  sboBobServiceGetSystemCurrency,
  sboBobServiceFormatMoneyToString,
  messagesServiceGetOutbox,
  sboBobServiceGetCurrencyRate,
  sboBobServiceGetLocalCurrency,
  login,
  queryServicePostQuery,
  sboBobServiceSetCurrencyRate,
  ordersServiceInitData,
  attributeGroupsServiceGetList,
  profitCentersServiceGetProfitCenterList,
  paymentDraftsServiceHandleApprovalRequest,
  purchaseInvoicesServiceHandleApprovalRequest,
  correctionPurchaseInvoiceServiceHandleApprovalRequest,
  terminationReasonServiceGetList,
  depositsServiceGetDepositList,
  invoicesServiceHandleApprovalRequest,
  correctionInvoiceReversalServiceInitData,
  correctionInvoiceServiceHandleApprovalRequest,
  webClientVariantGroupServiceGetList,
  correctionPurchaseInvoiceReversalServiceInitData,
  purchaseRequestServiceInitData,
  webClientFormSettingServiceGetList,
  brazilBeverageIndexersServiceGetList,
  returnsServiceInitData,
  paymentBlocksServiceGetPaymentBlockList,
  correctionPurchaseInvoiceServiceInitData,
  salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList,
  ncmCodesSetupServiceGetNcmCodeSetupList,
  serviceTaxPostingServiceGetTaxableDeliveries,
  inventoryGenExitServiceHandleApprovalRequest,
  deliveryNotesServiceInitData,
  journalEntryDocumentTypeServiceGetList,
  integrationPackagesConfigureServiceGetList,
  unitOfMeasurementGroupsServiceGetList,
  assetDepreciationGroupsServiceGetList,
  correctionInvoiceServiceInitData,
  purchaseRequestServiceHandleApprovalRequest,
  employeeRolesSetupServiceGetEmployeeRoleSetupList,
  assetRevaluationServiceGetList,
  inventoryTransferRequestsServiceHandleApprovalRequest,
  enhancedDiscountGroupsServiceGetList,
  dunningTermsServiceGetDunningTermList,
  holidayServiceGetHolidayList,
  quotationsServiceInitData,
  invoicesServiceInitData,
  usersServiceGetCurrentUser,
  inventoryCountingsServiceGetList,
  employeeStatusServiceGetList,
  fiscalPrinterServiceGetFiscalPrinterList,
  assetManualDepreciationServiceGetList,
  branchesServiceGetBranchList,
  assetGroupsServiceGetList,
  cycleCountDeterminationsServiceGetList,
  indiaHsnServiceGetList,
  taxExemptReasonServiceGetList,
  materialGroupsServiceGetMaterialGroupList,
  cashDiscountsServiceGetCashDiscountList,
  downPaymentsServiceInitData,
  salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList,
  salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList,
  deliveryNotesServiceHandleApprovalRequest,
  salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList,
  companyServiceGetFeaturesStatus,
  purchaseReturnsServiceHandleApprovalRequest,
  draftsServiceInitData,
  financialYearsServiceGetFinancialYearList,
  goodsReturnRequestServiceInitData,
  resourceCapacitiesServiceGetList,
  cockpitsServiceGetTemplateCockpitList,
  creditLinesServiceGetValidCreditLineList,
  serviceCallProblemTypesServiceGetServiceCallProblemTypeList,
  activitiesServiceGetActivityList,
  depreciationAreasServiceGetList,
  dnfCodeSetupServiceGetDnfCodeSetupList,
  draftsServiceHandleApprovalRequest,
  taxWebSitesServiceGetTaxWebSiteList,
  reportTypesServiceGetReportTypeList,
  recurringPostingsServiceGetList,
  certificateSeriesServiceGetCertificateSeriesList,
  sectionsServiceGetSectionList,
  retornoCodesServiceGetList,
  warehouseSublevelCodesServiceGetList,
  correctionInvoiceReversalServiceHandleApprovalRequest,
  approvalRequestsServiceGetOpenApprovalRequestList,
  approvalRequestsServiceGetAllApprovalRequestsList,
  binLocationFieldsServiceGetList,
  depreciationTypePoolsServiceGetList,
  postingTemplatesServiceGetList,
  binLocationAttributesServiceGetList,
  projectManagementConfigurationServiceGetAreas,
  correctionPurchaseInvoiceReversalServiceHandleApprovalRequest,
  stockTransferServiceHandleApprovalRequest,
  companyServiceGetPeriods,
  ordersServiceHandleApprovalRequest,
  campaignsServiceGetList,
  unitOfMeasurementsServiceGetList,
  approvalRequestsServiceGetApprovalRequestList,
  businessPartnersServiceInitData,
  purchaseCreditNotesServiceHandleApprovalRequest,
  costElementServiceGetCostElementList,
  taxWebSitesServiceGetDefaultWebSite,
  activitySubjectServiceGetActivitySubjectList,
  binLocationsServiceGetList,
  creditNotesServiceInitData,
  cockpitsServiceGetUserCockpitList,
  stockTransferDraftServiceHandleApprovalRequest,
  departmentsServiceGetDepartmentList,
  assetClassesServiceGetList,
  natureOfAssesseesServiceGetNatureOfAssesseeList,
  approvalTemplatesServiceGetApprovalTemplateList,
  cockpitsServiceGetCockpitList,
  assetCapitalizationCreditMemoServiceGetList,
  landedCostsServiceGetLandedCostList,
  creditNotesServiceHandleApprovalRequest,
  barCodesServiceGetList,
  inventoryPostingsServiceGetList,
  blanketAgreementsServiceGetBlanketAgreementList,
  serviceCallTypesServiceGetServiceCallTypeList,
  purchaseQuotationsServiceHandleApprovalRequest,
  webClientVariantServiceGetList,
  countriesServiceGetCountryList,
  statesServiceGetStateList,
  kpIsServiceGetList,
  purchaseInvoicesServiceInitData,
  employeeIdTypeServiceGetList,
  costCenterTypesServiceGetCostCenterTypeList,
  targetGroupsServiceGetList,
  extendedTranslationsServiceGetExtendedTranslationList,
  partnersSetupsServiceGetList,
  occurrenceCodesServiceGetList,
  serviceCallStatusServiceGetServiceCallStatusList,
  serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList,
  purchaseCreditNotesServiceInitData,
  emailGroupsServiceGetList,
  assetCapitalizationServiceGetList,
  serviceCallOriginsServiceGetServiceCallOriginList,
  employeePositionServiceGetList,
  glAccountAdvancedRulesServiceGetList,
  trackingNotesServiceGetList,
  purchaseDeliveryNotesServiceHandleApprovalRequest,
  shortLinkMappingsServiceBatchDelete,
  purchaseDownPaymentsServiceHandleApprovalRequest,
  projectManagementConfigurationServiceGetPriorities,
  approvalStagesServiceGetApprovalStageList,
  purchaseReturnsServiceInitData,
  dimensionsServiceGetDimensionList,
  purchaseOrdersServiceHandleApprovalRequest,
  inventoryGenExitServiceInitData,
  purchaseOrdersServiceInitData,
  quotationsServiceHandleApprovalRequest,
  serviceGroupsServiceGetServiceGroupList,
  userGroupServiceGetUserGroupList,
  tsrExceptionalEventServiceGetList,
  goodsReturnRequestServiceHandleApprovalRequest,
  taxCodeDeterminationsServiceGetTaxCodeDeterminationList,
  intrastatConfigurationServiceGetList,
  queryAuthGroupServiceGetQueryAuthGroupList,
  projectManagementConfigurationServiceGetSubprojectTypes,
  returnsServiceHandleApprovalRequest,
  assetRetirementServiceGetList,
  employeeTransfersServiceGetEmployeeTransferList,
  projectManagementConfigurationServiceGetActivities,
  determinationCriteriasServiceGetList,
  ewbTransporterServiceGetEwbTransporterList,
  projectManagementConfigurationServiceGetTasks,
  returnRequestServiceHandleApprovalRequest,
  assetTransferServiceGetList,
  returnRequestServiceInitData,
  activityRecipientListsServiceGetList,
  webClientPreferenceServiceGetList,
  webClientLaunchpadServiceGetList,
  webClientBookmarkTileServiceGetList,
  identificationCodeServiceGetList,
  webClientNotificationServiceGetList,
  webClientDashboardServiceGetList,
  webClientRecentActivityServiceGetList,
  deductibleTaxServiceGetList,
  logout,
  bpVatExemptionsServiceGetList,
  wTaxTypeCodeServiceGetWTaxTypeCodeList,
  recurringTransactionServiceGetAvailableRecurringTransactions,
  paymentReasonCodeServiceGetPaymentReasonCodeList,
  predefinedTextsServiceGetPredefinedTextList,
  exceptionalEventServiceGetExceptionalEventList,
  incomingPaymentsServiceHandleApprovalRequest,
  serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList,
  employmentCategoryServiceGetEmploymentCategoryList,
  shortLinkMappingsServiceGetList,
  bemReplicationPeriodServiceGetList,
  accountCategoryServiceGetCategoryList,
  bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList,
  boeDocumentTypesServiceGetBoeDocumentTypeList,
  cashFlowLineItemsServiceGetCashFlowLineItemList,
  campaignResponseTypeServiceGetResponseTypeList,
  mobileAppServiceGetCurrentServerDateTime,
  projectManagementConfigurationServiceGetStageTypes,
  indiaSacCodeServiceGetList,
  faAccountDeterminationsServiceGetList,
  nfTaxCategoriesServiceGetList,
  taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList,
  boePortfoliosServiceGetBoePortfolioList,
  checkLinesServiceGetValidCheckLineList,
  resourcesServiceGetList,
  resourcePropertiesServiceGetList,
  resourceGroupsServiceGetList,
  boeInstructionsServiceGetBoeInstructionList,
  inventoryOpeningBalancesServiceGetList,
  webClientListviewFilterServiceGetList,
  purchaseDownPaymentsServiceInitData,
  govPayCodesServiceGetList,
  itemsServiceInitData,
  depreciationTypesServiceGetList,
  electronicFileFormatsServiceGetElectronicFileFormatList,
  businessPartnerPropertiesServiceGetBusinessPartnerPropertyList,
  transactionCodesServiceGetList,
  vendorPaymentsServiceHandleApprovalRequest,
  mobileAddOnSettingServiceGetMobileAddOnSettingList,
  downPaymentsServiceHandleApprovalRequest,
  purchaseQuotationsServiceInitData,
  accrualTypesServiceGetAccrualTypeList,
  activitiesServiceInitData,
  nfModelsServiceGetList,
  brazilFuelIndexersServiceGetList,
  inventoryGenEntryServiceHandleApprovalRequest,
  distributionRulesServiceGetDistributionRuleList,
  projectsServiceGetProjectList,
  inventoryGenEntryServiceInitData,
  messagesServiceGetSentMessages,
  deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList,
  purchaseDeliveryNotesServiceInitData,
  routeStagesServiceGetList,
  sboBobServiceSetSystemPermission
};
