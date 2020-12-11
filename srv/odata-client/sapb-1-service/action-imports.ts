/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { transformReturnValueForUndefinedV4, transformReturnValueForEdmTypeV4, transformReturnValueForComplexTypeListV4, transformReturnValueForEntityListV4, transformReturnValueForEntityV4, transformReturnValueForComplexTypeV4, edmToTsV4, deserializeComplexTypeV4, ActionImportRequestBuilder, ActionImportParameter } from '@sap-cloud-sdk/core';
import { SalesOpportunityInterestSetupParams } from './SalesOpportunityInterestSetupParams';
import { MessageHeader } from './MessageHeader';
import { CreditLineParams } from './CreditLineParams';
import { EmployeeStatusParams } from './EmployeeStatusParams';
import { ServiceCallTypeParams } from './ServiceCallTypeParams';
import { ServiceCallStatusParams } from './ServiceCallStatusParams';
import { FinancialYearParams } from './FinancialYearParams';
import { EmployeeRoleSetupParams } from './EmployeeRoleSetupParams';
import { NfModelParams } from './NfModelParams';
import { IndiaSacCodeParams } from './IndiaSacCodeParams';
import { QueryAuthGroups } from './QueryAuthGroups';
import { EmployeeIdTypeParams } from './EmployeeIdTypeParams';
import { ServiceCallProblemTypeParams } from './ServiceCallProblemTypeParams';
import { ApprovalTemplateParams } from './ApprovalTemplateParams';
import { AssetDocumentParams } from './AssetDocumentParams';
import { ActivityParams } from './ActivityParams';
import { ProjectParams } from './ProjectParams';
import { CycleCountDeterminationParams } from './CycleCountDeterminationParams';
import { BusinessPartnerPropertyParams } from './BusinessPartnerPropertyParams';
import { AssetGroupParams } from './AssetGroupParams';
import { AssetClassParams } from './AssetClassParams';
import { JournalEntryDocumentTypeParams } from './JournalEntryDocumentTypeParams';
import { B1Sessions } from './B1Sessions';
import { BarCodeParams } from './BarCodeParams';
import { DepreciationAreaParams } from './DepreciationAreaParams';
import { ResourceCapacityParams } from './ResourceCapacityParams';
import { ResourceParams } from './ResourceParams';
import { ExtendedTranslationParams } from './ExtendedTranslationParams';
import { PaymentBlockParams } from './PaymentBlockParams';
import { CockpitParams } from './CockpitParams';
import { TargetGroupParams } from './TargetGroupParams';
import { CertificateSeriesParams } from './CertificateSeriesParams';
import { DeterminationCriteriaParams } from './DeterminationCriteriaParams';
import { DepreciationTypeParams } from './DepreciationTypeParams';
import { TaxWebSiteParams } from './TaxWebSiteParams';
import { BinLocationAttributeParams } from './BinLocationAttributeParams';
import { ReportTypeParams } from './ReportTypeParams';
import { TransactionCodeParams } from './TransactionCodeParams';
import { EnhancedDiscountGroupParams } from './EnhancedDiscountGroupParams';
import { AccrualTypeParams } from './AccrualTypeParams';
import { KpiParams } from './KpiParams';
import { CampaignParams } from './CampaignParams';
import { BoeInstructionParams } from './BoeInstructionParams';
import { SalesOpportunitySourceSetupParams } from './SalesOpportunitySourceSetupParams';
import { SectionParams } from './SectionParams';
import { CashDiscountParams } from './CashDiscountParams';
import { RetornoCodeParams } from './RetornoCodeParams';
import { BinLocationParams } from './BinLocationParams';
import { NfTaxCategoryParams } from './NfTaxCategoryParams';
import { PmcStageTypeData } from './PmcStageTypeData';
import { SalesOpportunityReasonSetupParams } from './SalesOpportunityReasonSetupParams';
import { OccurenceCodeParams } from './OccurenceCodeParams';
import { UnitOfMeasurementGroupParams } from './UnitOfMeasurementGroupParams';
import { BinLocationFieldParams } from './BinLocationFieldParams';
import { ServiceCallOriginParams } from './ServiceCallOriginParams';
import { UnitOfMeasurementParams } from './UnitOfMeasurementParams';
import { DnfCodeSetupParams } from './DnfCodeSetupParams';
import { WarehouseSublevelCodeParams } from './WarehouseSublevelCodeParams';
import { ApprovalRequestParams } from './ApprovalRequestParams';
import { PartnersSetupParams } from './PartnersSetupParams';
import { InventoryPostingParams } from './InventoryPostingParams';
import { IntrastatConfigurationParams } from './IntrastatConfigurationParams';
import { SalesOpportunityCompetitorSetupParams } from './SalesOpportunityCompetitorSetupParams';
import { PeriodCategoryParams } from './PeriodCategoryParams';
import { ApprovalStageParams } from './ApprovalStageParams';
import { BoeDocumentTypeParams } from './BoeDocumentTypeParams';
import { FaAccountDeterminationParams } from './FaAccountDeterminationParams';
import { ProfitCenterParams } from './ProfitCenterParams';
import { StateParams } from './StateParams';
import { BrazilFuelIndexerParams } from './BrazilFuelIndexerParams';
import { DimensionParams } from './DimensionParams';
import { DepartmentParams } from './DepartmentParams';
import { IntegrationPackageParams } from './IntegrationPackageParams';
import { CountryParams } from './CountryParams';
import { ServiceTaxPostingParams } from './ServiceTaxPostingParams';
import { BranchParams } from './BranchParams';
import { TerminationReasonParams } from './TerminationReasonParams';
import { ServiceCallSolutionStatusParams } from './ServiceCallSolutionStatusParams';
import { DunningTermParams } from './DunningTermParams';
import { ServiceCallProblemSubTypeParams } from './ServiceCallProblemSubTypeParams';
import { TrackingNoteParams } from './TrackingNoteParams';
import { TaxCodeDeterminationParams } from './TaxCodeDeterminationParams';
import { DepreciationTypePoolParams } from './DepreciationTypePoolParams';
import { EmployeePositionParams } from './EmployeePositionParams';
import { PredefinedTextParams } from './PredefinedTextParams';
import { AccountCategoryParams } from './AccountCategoryParams';
import { InventoryCountingParams } from './InventoryCountingParams';
import { UserGroupParams } from './UserGroupParams';
import { BoePortfolioParams } from './BoePortfolioParams';
import { EmailGroupParams } from './EmailGroupParams';
import { PmcSubprojectTypeData } from './PmcSubprojectTypeData';
import { PmcAreaData } from './PmcAreaData';
import { PmcPriorityData } from './PmcPriorityData';
import { PmcActivityData } from './PmcActivityData';
import { PmcTaskData } from './PmcTaskData';
import { BankChargesAllocationCodeParams } from './BankChargesAllocationCodeParams';
import { ActivityRecipientListParams } from './ActivityRecipientListParams';
import { CashFlowLineItemParams } from './CashFlowLineItemParams';
import { CampaignResponseTypeParams } from './CampaignResponseTypeParams';
import { CostCenterTypeParams } from './CostCenterTypeParams';
import { DepositParams } from './DepositParams';
import { GovPayCodeParams } from './GovPayCodeParams';
import { AttributeGroupParams } from './AttributeGroupParams';
import { ServiceGroupParams } from './ServiceGroupParams';
import { MaterialGroupParams } from './MaterialGroupParams';
import { ResourcePropertyParams } from './ResourcePropertyParams';
import { BlanketAgreementParams } from './BlanketAgreementParams';
import { CostElementParams } from './CostElementParams';
import { NcmCodeSetupParams } from './NcmCodeSetupParams';
import { TaxCodeDeterminationTcdParams } from './TaxCodeDeterminationTcdParams';
import { CheckLineParams } from './CheckLineParams';
import { RouteStageParams } from './RouteStageParams';
import { InventoryOpeningBalanceParams } from './InventoryOpeningBalanceParams';
import { AssetDepreciationGroupParams } from './AssetDepreciationGroupParams';
import { GlAccountAdvancedRuleParams } from './GlAccountAdvancedRuleParams';
import { FeatureStatus } from './FeatureStatus';
import { ElectronicFileFormatParams } from './ElectronicFileFormatParams';
import { EmployeeTransferParams } from './EmployeeTransferParams';
import { MobileAddOnSettingParams } from './MobileAddOnSettingParams';
import { DeductionTaxSubGroupParams } from './DeductionTaxSubGroupParams';
import { RclRecurringTransaction } from './RclRecurringTransaction';
import { BrazilBeverageIndexerParams } from './BrazilBeverageIndexerParams';
import { NatureOfAssesseeParams } from './NatureOfAssesseeParams';
import { FiscalPrinterParams } from './FiscalPrinterParams';
import { DistributionRuleParams } from './DistributionRuleParams';
import { ResourceGroupParams } from './ResourceGroupParams';
import { LandedCostParams } from './LandedCostParams';

/**
 * Type of the parameters to be passed to [[logout]].
 */
export interface LogoutParameters {
}

/**
 * Logout.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function logout(parameters: LogoutParameters): ActionImportRequestBuilder<LogoutParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'Logout', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[queryServicePostQuery]].
 */
export interface QueryServicePostQueryParameters {
  /**
   * Query Path.
   */
  queryPath: string;
  /**
   * Query Option.
   */
  queryOption: string;
}

/**
 * Query Service Post Query.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function queryServicePostQuery(parameters: QueryServicePostQueryParameters): ActionImportRequestBuilder<QueryServicePostQueryParameters, string> {
  const params = {
    queryPath: new ActionImportParameter('QueryPath', 'Edm.String', parameters.queryPath),
    queryOption: new ActionImportParameter('QueryOption', 'Edm.String', parameters.queryOption)
  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'QueryService_PostQuery', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.String')), params);
}

/**
 * Type of the parameters to be passed to [[scheduleJobServiceRunJobCallback]].
 */
export interface ScheduleJobServiceRunJobCallbackParameters {
}

/**
 * Schedule Job Service Run Job Callback.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function scheduleJobServiceRunJobCallback(parameters: ScheduleJobServiceRunJobCallbackParameters): ActionImportRequestBuilder<ScheduleJobServiceRunJobCallbackParameters, number> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ScheduleJobService_RunJobCallback', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.Int32')), params);
}

/**
 * Type of the parameters to be passed to [[alertServiceRunAlert]].
 */
export interface AlertServiceRunAlertParameters {
}

/**
 * Alert Service Run Alert.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function alertServiceRunAlert(parameters: AlertServiceRunAlertParameters): ActionImportRequestBuilder<AlertServiceRunAlertParameters, number> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AlertService_RunAlert', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.Int32')), params);
}

/**
 * Type of the parameters to be passed to [[salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList]].
 */
export interface SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters {
}

/**
 * Sales Opportunity Interests Setup Service Get Sales Opportunity Interest Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList(parameters: SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters): ActionImportRequestBuilder<SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters, SalesOpportunityInterestSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunityInterestsSetupService_GetSalesOpportunityInterestSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, SalesOpportunityInterestSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[messagesServiceGetSentMessages]].
 */
export interface MessagesServiceGetSentMessagesParameters {
}

/**
 * Messages Service Get Sent Messages.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function messagesServiceGetSentMessages(parameters: MessagesServiceGetSentMessagesParameters): ActionImportRequestBuilder<MessagesServiceGetSentMessagesParameters, MessageHeader[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'MessagesService_GetSentMessages', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, MessageHeader)), params);
}

/**
 * Type of the parameters to be passed to [[creditLinesServiceGetValidCreditLineList]].
 */
export interface CreditLinesServiceGetValidCreditLineListParameters {
}

/**
 * Credit Lines Service Get Valid Credit Line List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function creditLinesServiceGetValidCreditLineList(parameters: CreditLinesServiceGetValidCreditLineListParameters): ActionImportRequestBuilder<CreditLinesServiceGetValidCreditLineListParameters, CreditLineParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CreditLinesService_GetValidCreditLineList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CreditLineParams)), params);
}

/**
 * Type of the parameters to be passed to [[employeeStatusServiceGetList]].
 */
export interface EmployeeStatusServiceGetListParameters {
}

/**
 * Employee Status Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeStatusServiceGetList(parameters: EmployeeStatusServiceGetListParameters): ActionImportRequestBuilder<EmployeeStatusServiceGetListParameters, EmployeeStatusParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EmployeeStatusService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EmployeeStatusParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceCallTypesServiceGetServiceCallTypeList]].
 */
export interface ServiceCallTypesServiceGetServiceCallTypeListParameters {
}

/**
 * Service Call Types Service Get Service Call Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallTypesServiceGetServiceCallTypeList(parameters: ServiceCallTypesServiceGetServiceCallTypeListParameters): ActionImportRequestBuilder<ServiceCallTypesServiceGetServiceCallTypeListParameters, ServiceCallTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallTypesService_GetServiceCallTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceCallTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceCallStatusServiceGetServiceCallStatusList]].
 */
export interface ServiceCallStatusServiceGetServiceCallStatusListParameters {
}

/**
 * Service Call Status Service Get Service Call Status List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallStatusServiceGetServiceCallStatusList(parameters: ServiceCallStatusServiceGetServiceCallStatusListParameters): ActionImportRequestBuilder<ServiceCallStatusServiceGetServiceCallStatusListParameters, ServiceCallStatusParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallStatusService_GetServiceCallStatusList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceCallStatusParams)), params);
}

/**
 * Type of the parameters to be passed to [[financialYearsServiceGetFinancialYearList]].
 */
export interface FinancialYearsServiceGetFinancialYearListParameters {
}

/**
 * Financial Years Service Get Financial Year List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function financialYearsServiceGetFinancialYearList(parameters: FinancialYearsServiceGetFinancialYearListParameters): ActionImportRequestBuilder<FinancialYearsServiceGetFinancialYearListParameters, FinancialYearParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'FinancialYearsService_GetFinancialYearList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, FinancialYearParams)), params);
}

/**
 * Type of the parameters to be passed to [[employeeRolesSetupServiceGetEmployeeRoleSetupList]].
 */
export interface EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters {
}

/**
 * Employee Roles Setup Service Get Employee Role Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeRolesSetupServiceGetEmployeeRoleSetupList(parameters: EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters): ActionImportRequestBuilder<EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters, EmployeeRoleSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EmployeeRolesSetupService_GetEmployeeRoleSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EmployeeRoleSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[nfModelsServiceGetList]].
 */
export interface NfModelsServiceGetListParameters {
}

/**
 * Nf Models Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function nfModelsServiceGetList(parameters: NfModelsServiceGetListParameters): ActionImportRequestBuilder<NfModelsServiceGetListParameters, NfModelParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'NFModelsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, NfModelParams)), params);
}

/**
 * Type of the parameters to be passed to [[indiaSacCodeServiceGetList]].
 */
export interface IndiaSacCodeServiceGetListParameters {
}

/**
 * India Sac Code Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function indiaSacCodeServiceGetList(parameters: IndiaSacCodeServiceGetListParameters): ActionImportRequestBuilder<IndiaSacCodeServiceGetListParameters, IndiaSacCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'IndiaSacCodeService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, IndiaSacCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[queryAuthGroupServiceGetQueryAuthGroupList]].
 */
export interface QueryAuthGroupServiceGetQueryAuthGroupListParameters {
}

/**
 * Query Auth Group Service Get Query Auth Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function queryAuthGroupServiceGetQueryAuthGroupList(parameters: QueryAuthGroupServiceGetQueryAuthGroupListParameters): ActionImportRequestBuilder<QueryAuthGroupServiceGetQueryAuthGroupListParameters, QueryAuthGroups[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'QueryAuthGroupService_GetQueryAuthGroupList', (data) => transformReturnValueForEntityListV4(data, QueryAuthGroups), params);
}

/**
 * Type of the parameters to be passed to [[employeeIdTypeServiceGetList]].
 */
export interface EmployeeIdTypeServiceGetListParameters {
}

/**
 * Employee Id Type Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeIdTypeServiceGetList(parameters: EmployeeIdTypeServiceGetListParameters): ActionImportRequestBuilder<EmployeeIdTypeServiceGetListParameters, EmployeeIdTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EmployeeIDTypeService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EmployeeIdTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceCallProblemTypesServiceGetServiceCallProblemTypeList]].
 */
export interface ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters {
}

/**
 * Service Call Problem Types Service Get Service Call Problem Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallProblemTypesServiceGetServiceCallProblemTypeList(parameters: ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters): ActionImportRequestBuilder<ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters, ServiceCallProblemTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallProblemTypesService_GetServiceCallProblemTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceCallProblemTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[approvalTemplatesServiceGetApprovalTemplateList]].
 */
export interface ApprovalTemplatesServiceGetApprovalTemplateListParameters {
}

/**
 * Approval Templates Service Get Approval Template List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalTemplatesServiceGetApprovalTemplateList(parameters: ApprovalTemplatesServiceGetApprovalTemplateListParameters): ActionImportRequestBuilder<ApprovalTemplatesServiceGetApprovalTemplateListParameters, ApprovalTemplateParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ApprovalTemplatesService_GetApprovalTemplateList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ApprovalTemplateParams)), params);
}

/**
 * Type of the parameters to be passed to [[assetManualDepreciationServiceGetList]].
 */
export interface AssetManualDepreciationServiceGetListParameters {
}

/**
 * Asset Manual Depreciation Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetManualDepreciationServiceGetList(parameters: AssetManualDepreciationServiceGetListParameters): ActionImportRequestBuilder<AssetManualDepreciationServiceGetListParameters, AssetDocumentParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetManualDepreciationService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetDocumentParams)), params);
}

/**
 * Type of the parameters to be passed to [[activitiesServiceGetActivityList]].
 */
export interface ActivitiesServiceGetActivityListParameters {
}

/**
 * Activities Service Get Activity List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function activitiesServiceGetActivityList(parameters: ActivitiesServiceGetActivityListParameters): ActionImportRequestBuilder<ActivitiesServiceGetActivityListParameters, ActivityParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ActivitiesService_GetActivityList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ActivityParams)), params);
}

/**
 * Type of the parameters to be passed to [[projectsServiceGetProjectList]].
 */
export interface ProjectsServiceGetProjectListParameters {
}

/**
 * Projects Service Get Project List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectsServiceGetProjectList(parameters: ProjectsServiceGetProjectListParameters): ActionImportRequestBuilder<ProjectsServiceGetProjectListParameters, ProjectParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectsService_GetProjectList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ProjectParams)), params);
}

/**
 * Type of the parameters to be passed to [[cycleCountDeterminationsServiceGetList]].
 */
export interface CycleCountDeterminationsServiceGetListParameters {
}

/**
 * Cycle Count Determinations Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cycleCountDeterminationsServiceGetList(parameters: CycleCountDeterminationsServiceGetListParameters): ActionImportRequestBuilder<CycleCountDeterminationsServiceGetListParameters, CycleCountDeterminationParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CycleCountDeterminationsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CycleCountDeterminationParams)), params);
}

/**
 * Type of the parameters to be passed to [[returnsServiceHandleApprovalRequest]].
 */
export interface ReturnsServiceHandleApprovalRequestParameters {
}

/**
 * Returns Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function returnsServiceHandleApprovalRequest(parameters: ReturnsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<ReturnsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ReturnsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[sboBobServiceSetCurrencyRate]].
 */
export interface SboBobServiceSetCurrencyRateParameters {
  /**
   * Rate Date.
   */
  rateDate: string;
  /**
   * Currency.
   */
  currency: string;
  /**
   * Rate.
   */
  rate: string;
}

/**
 * Sbo Bob Service Set Currency Rate.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sboBobServiceSetCurrencyRate(parameters: SboBobServiceSetCurrencyRateParameters): ActionImportRequestBuilder<SboBobServiceSetCurrencyRateParameters, undefined> {
  const params = {
    rateDate: new ActionImportParameter('RateDate', 'Edm.String', parameters.rateDate),
    currency: new ActionImportParameter('Currency', 'Edm.String', parameters.currency),
    rate: new ActionImportParameter('Rate', 'Edm.String', parameters.rate)
  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'SBOBobService_SetCurrencyRate', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[assetCapitalizationCreditMemoServiceGetList]].
 */
export interface AssetCapitalizationCreditMemoServiceGetListParameters {
}

/**
 * Asset Capitalization Credit Memo Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetCapitalizationCreditMemoServiceGetList(parameters: AssetCapitalizationCreditMemoServiceGetListParameters): ActionImportRequestBuilder<AssetCapitalizationCreditMemoServiceGetListParameters, AssetDocumentParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetCapitalizationCreditMemoService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetDocumentParams)), params);
}

/**
 * Type of the parameters to be passed to [[businessPartnerPropertiesServiceGetBusinessPartnerPropertyList]].
 */
export interface BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters {
}

/**
 * Business Partner Properties Service Get Business Partner Property List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function businessPartnerPropertiesServiceGetBusinessPartnerPropertyList(parameters: BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters): ActionImportRequestBuilder<BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters, BusinessPartnerPropertyParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BusinessPartnerPropertiesService_GetBusinessPartnerPropertyList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BusinessPartnerPropertyParams)), params);
}

/**
 * Type of the parameters to be passed to [[assetGroupsServiceGetList]].
 */
export interface AssetGroupsServiceGetListParameters {
}

/**
 * Asset Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetGroupsServiceGetList(parameters: AssetGroupsServiceGetListParameters): ActionImportRequestBuilder<AssetGroupsServiceGetListParameters, AssetGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[assetClassesServiceGetList]].
 */
export interface AssetClassesServiceGetListParameters {
}

/**
 * Asset Classes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetClassesServiceGetList(parameters: AssetClassesServiceGetListParameters): ActionImportRequestBuilder<AssetClassesServiceGetListParameters, AssetClassParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetClassesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetClassParams)), params);
}

/**
 * Type of the parameters to be passed to [[journalEntryDocumentTypeServiceGetList]].
 */
export interface JournalEntryDocumentTypeServiceGetListParameters {
}

/**
 * Journal Entry Document Type Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function journalEntryDocumentTypeServiceGetList(parameters: JournalEntryDocumentTypeServiceGetListParameters): ActionImportRequestBuilder<JournalEntryDocumentTypeServiceGetListParameters, JournalEntryDocumentTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'JournalEntryDocumentTypeService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, JournalEntryDocumentTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[login]].
 */
export interface LoginParameters {
  /**
   * Company Db.
   */
  companyDb: string;
  /**
   * User Name.
   */
  userName: string;
  /**
   * Password.
   */
  password: string;
}

/**
 * Login.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function login(parameters: LoginParameters): ActionImportRequestBuilder<LoginParameters, B1Sessions> {
  const params = {
    companyDb: new ActionImportParameter('CompanyDB', 'Edm.String', parameters.companyDb),
    userName: new ActionImportParameter('UserName', 'Edm.String', parameters.userName),
    password: new ActionImportParameter('Password', 'Edm.String', parameters.password)
  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'Login', (data) => transformReturnValueForEntityV4(data, B1Sessions), params);
}

/**
 * Type of the parameters to be passed to [[barCodesServiceGetList]].
 */
export interface BarCodesServiceGetListParameters {
}

/**
 * Bar Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function barCodesServiceGetList(parameters: BarCodesServiceGetListParameters): ActionImportRequestBuilder<BarCodesServiceGetListParameters, BarCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BarCodesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BarCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[stockTransferDraftServiceHandleApprovalRequest]].
 */
export interface StockTransferDraftServiceHandleApprovalRequestParameters {
}

/**
 * Stock Transfer Draft Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function stockTransferDraftServiceHandleApprovalRequest(parameters: StockTransferDraftServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<StockTransferDraftServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'StockTransferDraftService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[depreciationAreasServiceGetList]].
 */
export interface DepreciationAreasServiceGetListParameters {
}

/**
 * Depreciation Areas Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depreciationAreasServiceGetList(parameters: DepreciationAreasServiceGetListParameters): ActionImportRequestBuilder<DepreciationAreasServiceGetListParameters, DepreciationAreaParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DepreciationAreasService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DepreciationAreaParams)), params);
}

/**
 * Type of the parameters to be passed to [[resourceCapacitiesServiceGetList]].
 */
export interface ResourceCapacitiesServiceGetListParameters {
}

/**
 * Resource Capacities Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourceCapacitiesServiceGetList(parameters: ResourceCapacitiesServiceGetListParameters): ActionImportRequestBuilder<ResourceCapacitiesServiceGetListParameters, ResourceCapacityParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ResourceCapacitiesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ResourceCapacityParams)), params);
}

/**
 * Type of the parameters to be passed to [[resourcesServiceGetList]].
 */
export interface ResourcesServiceGetListParameters {
}

/**
 * Resources Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourcesServiceGetList(parameters: ResourcesServiceGetListParameters): ActionImportRequestBuilder<ResourcesServiceGetListParameters, ResourceParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ResourcesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ResourceParams)), params);
}

/**
 * Type of the parameters to be passed to [[extendedTranslationsServiceGetExtendedTranslationList]].
 */
export interface ExtendedTranslationsServiceGetExtendedTranslationListParameters {
}

/**
 * Extended Translations Service Get Extended Translation List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function extendedTranslationsServiceGetExtendedTranslationList(parameters: ExtendedTranslationsServiceGetExtendedTranslationListParameters): ActionImportRequestBuilder<ExtendedTranslationsServiceGetExtendedTranslationListParameters, ExtendedTranslationParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ExtendedTranslationsService_GetExtendedTranslationList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ExtendedTranslationParams)), params);
}

/**
 * Type of the parameters to be passed to [[paymentBlocksServiceGetPaymentBlockList]].
 */
export interface PaymentBlocksServiceGetPaymentBlockListParameters {
}

/**
 * Payment Blocks Service Get Payment Block List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function paymentBlocksServiceGetPaymentBlockList(parameters: PaymentBlocksServiceGetPaymentBlockListParameters): ActionImportRequestBuilder<PaymentBlocksServiceGetPaymentBlockListParameters, PaymentBlockParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PaymentBlocksService_GetPaymentBlockList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PaymentBlockParams)), params);
}

/**
 * Type of the parameters to be passed to [[cockpitsServiceGetUserCockpitList]].
 */
export interface CockpitsServiceGetUserCockpitListParameters {
}

/**
 * Cockpits Service Get User Cockpit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cockpitsServiceGetUserCockpitList(parameters: CockpitsServiceGetUserCockpitListParameters): ActionImportRequestBuilder<CockpitsServiceGetUserCockpitListParameters, CockpitParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CockpitsService_GetUserCockpitList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CockpitParams)), params);
}

/**
 * Type of the parameters to be passed to [[stockTransferServiceHandleApprovalRequest]].
 */
export interface StockTransferServiceHandleApprovalRequestParameters {
}

/**
 * Stock Transfer Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function stockTransferServiceHandleApprovalRequest(parameters: StockTransferServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<StockTransferServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'StockTransferService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[assetCapitalizationServiceGetList]].
 */
export interface AssetCapitalizationServiceGetListParameters {
}

/**
 * Asset Capitalization Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetCapitalizationServiceGetList(parameters: AssetCapitalizationServiceGetListParameters): ActionImportRequestBuilder<AssetCapitalizationServiceGetListParameters, AssetDocumentParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetCapitalizationService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetDocumentParams)), params);
}

/**
 * Type of the parameters to be passed to [[targetGroupsServiceGetList]].
 */
export interface TargetGroupsServiceGetListParameters {
}

/**
 * Target Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function targetGroupsServiceGetList(parameters: TargetGroupsServiceGetListParameters): ActionImportRequestBuilder<TargetGroupsServiceGetListParameters, TargetGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TargetGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TargetGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[certificateSeriesServiceGetCertificateSeriesList]].
 */
export interface CertificateSeriesServiceGetCertificateSeriesListParameters {
}

/**
 * Certificate Series Service Get Certificate Series List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function certificateSeriesServiceGetCertificateSeriesList(parameters: CertificateSeriesServiceGetCertificateSeriesListParameters): ActionImportRequestBuilder<CertificateSeriesServiceGetCertificateSeriesListParameters, CertificateSeriesParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CertificateSeriesService_GetCertificateSeriesList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CertificateSeriesParams)), params);
}

/**
 * Type of the parameters to be passed to [[correctionPurchaseInvoiceServiceHandleApprovalRequest]].
 */
export interface CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters {
}

/**
 * Correction Purchase Invoice Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionPurchaseInvoiceServiceHandleApprovalRequest(parameters: CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CorrectionPurchaseInvoiceService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[determinationCriteriasServiceGetList]].
 */
export interface DeterminationCriteriasServiceGetListParameters {
}

/**
 * Determination Criterias Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function determinationCriteriasServiceGetList(parameters: DeterminationCriteriasServiceGetListParameters): ActionImportRequestBuilder<DeterminationCriteriasServiceGetListParameters, DeterminationCriteriaParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DeterminationCriteriasService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DeterminationCriteriaParams)), params);
}

/**
 * Type of the parameters to be passed to [[correctionPurchaseInvoiceReversalServiceHandleApprovalRequest]].
 */
export interface CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters {
}

/**
 * Correction Purchase Invoice Reversal Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionPurchaseInvoiceReversalServiceHandleApprovalRequest(parameters: CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CorrectionPurchaseInvoiceReversalService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[depreciationTypesServiceGetList]].
 */
export interface DepreciationTypesServiceGetListParameters {
}

/**
 * Depreciation Types Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depreciationTypesServiceGetList(parameters: DepreciationTypesServiceGetListParameters): ActionImportRequestBuilder<DepreciationTypesServiceGetListParameters, DepreciationTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DepreciationTypesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DepreciationTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[taxWebSitesServiceGetDefaultWebSite]].
 */
export interface TaxWebSitesServiceGetDefaultWebSiteParameters {
}

/**
 * Tax Web Sites Service Get Default Web Site.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxWebSitesServiceGetDefaultWebSite(parameters: TaxWebSitesServiceGetDefaultWebSiteParameters): ActionImportRequestBuilder<TaxWebSitesServiceGetDefaultWebSiteParameters, TaxWebSiteParams> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TaxWebSitesService_GetDefaultWebSite', (data) => transformReturnValueForComplexTypeV4(data, (data) => deserializeComplexTypeV4(data, TaxWebSiteParams)), params);
}

/**
 * Type of the parameters to be passed to [[binLocationAttributesServiceGetList]].
 */
export interface BinLocationAttributesServiceGetListParameters {
}

/**
 * Bin Location Attributes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function binLocationAttributesServiceGetList(parameters: BinLocationAttributesServiceGetListParameters): ActionImportRequestBuilder<BinLocationAttributesServiceGetListParameters, BinLocationAttributeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BinLocationAttributesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BinLocationAttributeParams)), params);
}

/**
 * Type of the parameters to be passed to [[reportTypesServiceGetReportTypeList]].
 */
export interface ReportTypesServiceGetReportTypeListParameters {
}

/**
 * Report Types Service Get Report Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function reportTypesServiceGetReportTypeList(parameters: ReportTypesServiceGetReportTypeListParameters): ActionImportRequestBuilder<ReportTypesServiceGetReportTypeListParameters, ReportTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ReportTypesService_GetReportTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ReportTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[transactionCodesServiceGetList]].
 */
export interface TransactionCodesServiceGetListParameters {
}

/**
 * Transaction Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function transactionCodesServiceGetList(parameters: TransactionCodesServiceGetListParameters): ActionImportRequestBuilder<TransactionCodesServiceGetListParameters, TransactionCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TransactionCodesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TransactionCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[enhancedDiscountGroupsServiceGetList]].
 */
export interface EnhancedDiscountGroupsServiceGetListParameters {
}

/**
 * Enhanced Discount Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function enhancedDiscountGroupsServiceGetList(parameters: EnhancedDiscountGroupsServiceGetListParameters): ActionImportRequestBuilder<EnhancedDiscountGroupsServiceGetListParameters, EnhancedDiscountGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EnhancedDiscountGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EnhancedDiscountGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[purchaseRequestServiceHandleApprovalRequest]].
 */
export interface PurchaseRequestServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Request Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseRequestServiceHandleApprovalRequest(parameters: PurchaseRequestServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseRequestServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseRequestService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[purchaseQuotationsServiceHandleApprovalRequest]].
 */
export interface PurchaseQuotationsServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Quotations Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseQuotationsServiceHandleApprovalRequest(parameters: PurchaseQuotationsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseQuotationsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseQuotationsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[accrualTypesServiceGetAccrualTypeList]].
 */
export interface AccrualTypesServiceGetAccrualTypeListParameters {
}

/**
 * Accrual Types Service Get Accrual Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function accrualTypesServiceGetAccrualTypeList(parameters: AccrualTypesServiceGetAccrualTypeListParameters): ActionImportRequestBuilder<AccrualTypesServiceGetAccrualTypeListParameters, AccrualTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AccrualTypesService_GetAccrualTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AccrualTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[correctionInvoiceServiceHandleApprovalRequest]].
 */
export interface CorrectionInvoiceServiceHandleApprovalRequestParameters {
}

/**
 * Correction Invoice Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionInvoiceServiceHandleApprovalRequest(parameters: CorrectionInvoiceServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<CorrectionInvoiceServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CorrectionInvoiceService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[kpIsServiceGetList]].
 */
export interface KpIsServiceGetListParameters {
}

/**
 * Kp Is Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function kpIsServiceGetList(parameters: KpIsServiceGetListParameters): ActionImportRequestBuilder<KpIsServiceGetListParameters, KpiParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'KPIsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, KpiParams)), params);
}

/**
 * Type of the parameters to be passed to [[purchaseInvoicesServiceHandleApprovalRequest]].
 */
export interface PurchaseInvoicesServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Invoices Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseInvoicesServiceHandleApprovalRequest(parameters: PurchaseInvoicesServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseInvoicesServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseInvoicesService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[campaignsServiceGetList]].
 */
export interface CampaignsServiceGetListParameters {
}

/**
 * Campaigns Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function campaignsServiceGetList(parameters: CampaignsServiceGetListParameters): ActionImportRequestBuilder<CampaignsServiceGetListParameters, CampaignParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CampaignsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CampaignParams)), params);
}

/**
 * Type of the parameters to be passed to [[boeInstructionsServiceGetBoeInstructionList]].
 */
export interface BoeInstructionsServiceGetBoeInstructionListParameters {
}

/**
 * Boe Instructions Service Get Boe Instruction List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function boeInstructionsServiceGetBoeInstructionList(parameters: BoeInstructionsServiceGetBoeInstructionListParameters): ActionImportRequestBuilder<BoeInstructionsServiceGetBoeInstructionListParameters, BoeInstructionParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BOEInstructionsService_GetBOEInstructionList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BoeInstructionParams)), params);
}

/**
 * Type of the parameters to be passed to [[salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList]].
 */
export interface SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters {
}

/**
 * Sales Opportunity Sources Setup Service Get Sales Opportunity Source Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList(parameters: SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters): ActionImportRequestBuilder<SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters, SalesOpportunitySourceSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunitySourcesSetupService_GetSalesOpportunitySourceSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, SalesOpportunitySourceSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[sectionsServiceGetSectionList]].
 */
export interface SectionsServiceGetSectionListParameters {
}

/**
 * Sections Service Get Section List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function sectionsServiceGetSectionList(parameters: SectionsServiceGetSectionListParameters): ActionImportRequestBuilder<SectionsServiceGetSectionListParameters, SectionParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'SectionsService_GetSectionList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, SectionParams)), params);
}

/**
 * Type of the parameters to be passed to [[cashDiscountsServiceGetCashDiscountList]].
 */
export interface CashDiscountsServiceGetCashDiscountListParameters {
}

/**
 * Cash Discounts Service Get Cash Discount List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cashDiscountsServiceGetCashDiscountList(parameters: CashDiscountsServiceGetCashDiscountListParameters): ActionImportRequestBuilder<CashDiscountsServiceGetCashDiscountListParameters, CashDiscountParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CashDiscountsService_GetCashDiscountList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CashDiscountParams)), params);
}

/**
 * Type of the parameters to be passed to [[retornoCodesServiceGetList]].
 */
export interface RetornoCodesServiceGetListParameters {
}

/**
 * Retorno Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function retornoCodesServiceGetList(parameters: RetornoCodesServiceGetListParameters): ActionImportRequestBuilder<RetornoCodesServiceGetListParameters, RetornoCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'RetornoCodesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, RetornoCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[binLocationsServiceGetList]].
 */
export interface BinLocationsServiceGetListParameters {
}

/**
 * Bin Locations Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function binLocationsServiceGetList(parameters: BinLocationsServiceGetListParameters): ActionImportRequestBuilder<BinLocationsServiceGetListParameters, BinLocationParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BinLocationsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BinLocationParams)), params);
}

/**
 * Type of the parameters to be passed to [[nfTaxCategoriesServiceGetList]].
 */
export interface NfTaxCategoriesServiceGetListParameters {
}

/**
 * Nf Tax Categories Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function nfTaxCategoriesServiceGetList(parameters: NfTaxCategoriesServiceGetListParameters): ActionImportRequestBuilder<NfTaxCategoriesServiceGetListParameters, NfTaxCategoryParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'NFTaxCategoriesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, NfTaxCategoryParams)), params);
}

/**
 * Type of the parameters to be passed to [[projectManagementConfigurationServiceGetStageTypes]].
 */
export interface ProjectManagementConfigurationServiceGetStageTypesParameters {
}

/**
 * Project Management Configuration Service Get Stage Types.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetStageTypes(parameters: ProjectManagementConfigurationServiceGetStageTypesParameters): ActionImportRequestBuilder<ProjectManagementConfigurationServiceGetStageTypesParameters, PmcStageTypeData[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetStageTypes', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PmcStageTypeData)), params);
}

/**
 * Type of the parameters to be passed to [[salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList]].
 */
export interface SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters {
}

/**
 * Sales Opportunity Reasons Setup Service Get Sales Opportunity Reason Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList(parameters: SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters): ActionImportRequestBuilder<SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters, SalesOpportunityReasonSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunityReasonsSetupService_GetSalesOpportunityReasonSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, SalesOpportunityReasonSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[occurrenceCodesServiceGetList]].
 */
export interface OccurrenceCodesServiceGetListParameters {
}

/**
 * Occurrence Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function occurrenceCodesServiceGetList(parameters: OccurrenceCodesServiceGetListParameters): ActionImportRequestBuilder<OccurrenceCodesServiceGetListParameters, OccurenceCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'OccurrenceCodesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, OccurenceCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[unitOfMeasurementGroupsServiceGetList]].
 */
export interface UnitOfMeasurementGroupsServiceGetListParameters {
}

/**
 * Unit Of Measurement Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function unitOfMeasurementGroupsServiceGetList(parameters: UnitOfMeasurementGroupsServiceGetListParameters): ActionImportRequestBuilder<UnitOfMeasurementGroupsServiceGetListParameters, UnitOfMeasurementGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'UnitOfMeasurementGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, UnitOfMeasurementGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[binLocationFieldsServiceGetList]].
 */
export interface BinLocationFieldsServiceGetListParameters {
}

/**
 * Bin Location Fields Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function binLocationFieldsServiceGetList(parameters: BinLocationFieldsServiceGetListParameters): ActionImportRequestBuilder<BinLocationFieldsServiceGetListParameters, BinLocationFieldParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BinLocationFieldsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BinLocationFieldParams)), params);
}

/**
 * Type of the parameters to be passed to [[taxWebSitesServiceGetTaxWebSiteList]].
 */
export interface TaxWebSitesServiceGetTaxWebSiteListParameters {
}

/**
 * Tax Web Sites Service Get Tax Web Site List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxWebSitesServiceGetTaxWebSiteList(parameters: TaxWebSitesServiceGetTaxWebSiteListParameters): ActionImportRequestBuilder<TaxWebSitesServiceGetTaxWebSiteListParameters, TaxWebSiteParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TaxWebSitesService_GetTaxWebSiteList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TaxWebSiteParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceCallOriginsServiceGetServiceCallOriginList]].
 */
export interface ServiceCallOriginsServiceGetServiceCallOriginListParameters {
}

/**
 * Service Call Origins Service Get Service Call Origin List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallOriginsServiceGetServiceCallOriginList(parameters: ServiceCallOriginsServiceGetServiceCallOriginListParameters): ActionImportRequestBuilder<ServiceCallOriginsServiceGetServiceCallOriginListParameters, ServiceCallOriginParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallOriginsService_GetServiceCallOriginList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceCallOriginParams)), params);
}

/**
 * Type of the parameters to be passed to [[creditNotesServiceHandleApprovalRequest]].
 */
export interface CreditNotesServiceHandleApprovalRequestParameters {
}

/**
 * Credit Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function creditNotesServiceHandleApprovalRequest(parameters: CreditNotesServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<CreditNotesServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CreditNotesService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[unitOfMeasurementsServiceGetList]].
 */
export interface UnitOfMeasurementsServiceGetListParameters {
}

/**
 * Unit Of Measurements Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function unitOfMeasurementsServiceGetList(parameters: UnitOfMeasurementsServiceGetListParameters): ActionImportRequestBuilder<UnitOfMeasurementsServiceGetListParameters, UnitOfMeasurementParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'UnitOfMeasurementsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, UnitOfMeasurementParams)), params);
}

/**
 * Type of the parameters to be passed to [[dnfCodeSetupServiceGetDnfCodeSetupList]].
 */
export interface DnfCodeSetupServiceGetDnfCodeSetupListParameters {
}

/**
 * Dnf Code Setup Service Get Dnf Code Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function dnfCodeSetupServiceGetDnfCodeSetupList(parameters: DnfCodeSetupServiceGetDnfCodeSetupListParameters): ActionImportRequestBuilder<DnfCodeSetupServiceGetDnfCodeSetupListParameters, DnfCodeSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DNFCodeSetupService_GetDNFCodeSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DnfCodeSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[warehouseSublevelCodesServiceGetList]].
 */
export interface WarehouseSublevelCodesServiceGetListParameters {
}

/**
 * Warehouse Sublevel Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function warehouseSublevelCodesServiceGetList(parameters: WarehouseSublevelCodesServiceGetListParameters): ActionImportRequestBuilder<WarehouseSublevelCodesServiceGetListParameters, WarehouseSublevelCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'WarehouseSublevelCodesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, WarehouseSublevelCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[approvalRequestsServiceGetAllApprovalRequestsList]].
 */
export interface ApprovalRequestsServiceGetAllApprovalRequestsListParameters {
}

/**
 * Approval Requests Service Get All Approval Requests List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalRequestsServiceGetAllApprovalRequestsList(parameters: ApprovalRequestsServiceGetAllApprovalRequestsListParameters): ActionImportRequestBuilder<ApprovalRequestsServiceGetAllApprovalRequestsListParameters, ApprovalRequestParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ApprovalRequestsService_GetAllApprovalRequestsList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ApprovalRequestParams)), params);
}

/**
 * Type of the parameters to be passed to [[partnersSetupsServiceGetList]].
 */
export interface PartnersSetupsServiceGetListParameters {
}

/**
 * Partners Setups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function partnersSetupsServiceGetList(parameters: PartnersSetupsServiceGetListParameters): ActionImportRequestBuilder<PartnersSetupsServiceGetListParameters, PartnersSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PartnersSetupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PartnersSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[inventoryPostingsServiceGetList]].
 */
export interface InventoryPostingsServiceGetListParameters {
}

/**
 * Inventory Postings Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryPostingsServiceGetList(parameters: InventoryPostingsServiceGetListParameters): ActionImportRequestBuilder<InventoryPostingsServiceGetListParameters, InventoryPostingParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InventoryPostingsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, InventoryPostingParams)), params);
}

/**
 * Type of the parameters to be passed to [[inventoryGenEntryServiceHandleApprovalRequest]].
 */
export interface InventoryGenEntryServiceHandleApprovalRequestParameters {
}

/**
 * Inventory Gen Entry Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryGenEntryServiceHandleApprovalRequest(parameters: InventoryGenEntryServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<InventoryGenEntryServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InventoryGenEntryService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[intrastatConfigurationServiceGetList]].
 */
export interface IntrastatConfigurationServiceGetListParameters {
}

/**
 * Intrastat Configuration Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function intrastatConfigurationServiceGetList(parameters: IntrastatConfigurationServiceGetListParameters): ActionImportRequestBuilder<IntrastatConfigurationServiceGetListParameters, IntrastatConfigurationParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'IntrastatConfigurationService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, IntrastatConfigurationParams)), params);
}

/**
 * Type of the parameters to be passed to [[salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList]].
 */
export interface SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters {
}

/**
 * Sales Opportunity Competitors Setup Service Get Sales Opportunity Competitor Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList(parameters: SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters): ActionImportRequestBuilder<SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters, SalesOpportunityCompetitorSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunityCompetitorsSetupService_GetSalesOpportunityCompetitorSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, SalesOpportunityCompetitorSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[companyServiceGetPeriods]].
 */
export interface CompanyServiceGetPeriodsParameters {
}

/**
 * Company Service Get Periods.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetPeriods(parameters: CompanyServiceGetPeriodsParameters): ActionImportRequestBuilder<CompanyServiceGetPeriodsParameters, PeriodCategoryParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CompanyService_GetPeriods', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PeriodCategoryParams)), params);
}

/**
 * Type of the parameters to be passed to [[correctionInvoiceReversalServiceHandleApprovalRequest]].
 */
export interface CorrectionInvoiceReversalServiceHandleApprovalRequestParameters {
}

/**
 * Correction Invoice Reversal Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function correctionInvoiceReversalServiceHandleApprovalRequest(parameters: CorrectionInvoiceReversalServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<CorrectionInvoiceReversalServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CorrectionInvoiceReversalService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[purchaseDeliveryNotesServiceHandleApprovalRequest]].
 */
export interface PurchaseDeliveryNotesServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Delivery Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseDeliveryNotesServiceHandleApprovalRequest(parameters: PurchaseDeliveryNotesServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseDeliveryNotesServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseDeliveryNotesService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[cockpitsServiceGetTemplateCockpitList]].
 */
export interface CockpitsServiceGetTemplateCockpitListParameters {
}

/**
 * Cockpits Service Get Template Cockpit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cockpitsServiceGetTemplateCockpitList(parameters: CockpitsServiceGetTemplateCockpitListParameters): ActionImportRequestBuilder<CockpitsServiceGetTemplateCockpitListParameters, CockpitParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CockpitsService_GetTemplateCockpitList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CockpitParams)), params);
}

/**
 * Type of the parameters to be passed to [[approvalStagesServiceGetApprovalStageList]].
 */
export interface ApprovalStagesServiceGetApprovalStageListParameters {
}

/**
 * Approval Stages Service Get Approval Stage List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalStagesServiceGetApprovalStageList(parameters: ApprovalStagesServiceGetApprovalStageListParameters): ActionImportRequestBuilder<ApprovalStagesServiceGetApprovalStageListParameters, ApprovalStageParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ApprovalStagesService_GetApprovalStageList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ApprovalStageParams)), params);
}

/**
 * Type of the parameters to be passed to [[boeDocumentTypesServiceGetBoeDocumentTypeList]].
 */
export interface BoeDocumentTypesServiceGetBoeDocumentTypeListParameters {
}

/**
 * Boe Document Types Service Get Boe Document Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function boeDocumentTypesServiceGetBoeDocumentTypeList(parameters: BoeDocumentTypesServiceGetBoeDocumentTypeListParameters): ActionImportRequestBuilder<BoeDocumentTypesServiceGetBoeDocumentTypeListParameters, BoeDocumentTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BOEDocumentTypesService_GetBOEDocumentTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BoeDocumentTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[invoicesServiceHandleApprovalRequest]].
 */
export interface InvoicesServiceHandleApprovalRequestParameters {
}

/**
 * Invoices Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function invoicesServiceHandleApprovalRequest(parameters: InvoicesServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<InvoicesServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InvoicesService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[faAccountDeterminationsServiceGetList]].
 */
export interface FaAccountDeterminationsServiceGetListParameters {
}

/**
 * Fa Account Determinations Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function faAccountDeterminationsServiceGetList(parameters: FaAccountDeterminationsServiceGetListParameters): ActionImportRequestBuilder<FaAccountDeterminationsServiceGetListParameters, FaAccountDeterminationParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'FAAccountDeterminationsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, FaAccountDeterminationParams)), params);
}

/**
 * Type of the parameters to be passed to [[profitCentersServiceGetProfitCenterList]].
 */
export interface ProfitCentersServiceGetProfitCenterListParameters {
}

/**
 * Profit Centers Service Get Profit Center List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function profitCentersServiceGetProfitCenterList(parameters: ProfitCentersServiceGetProfitCenterListParameters): ActionImportRequestBuilder<ProfitCentersServiceGetProfitCenterListParameters, ProfitCenterParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProfitCentersService_GetProfitCenterList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ProfitCenterParams)), params);
}

/**
 * Type of the parameters to be passed to [[statesServiceGetStateList]].
 */
export interface StatesServiceGetStateListParameters {
}

/**
 * States Service Get State List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function statesServiceGetStateList(parameters: StatesServiceGetStateListParameters): ActionImportRequestBuilder<StatesServiceGetStateListParameters, StateParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'StatesService_GetStateList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, StateParams)), params);
}

/**
 * Type of the parameters to be passed to [[draftsServiceHandleApprovalRequest]].
 */
export interface DraftsServiceHandleApprovalRequestParameters {
}

/**
 * Drafts Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function draftsServiceHandleApprovalRequest(parameters: DraftsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<DraftsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DraftsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[approvalRequestsServiceGetOpenApprovalRequestList]].
 */
export interface ApprovalRequestsServiceGetOpenApprovalRequestListParameters {
}

/**
 * Approval Requests Service Get Open Approval Request List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalRequestsServiceGetOpenApprovalRequestList(parameters: ApprovalRequestsServiceGetOpenApprovalRequestListParameters): ActionImportRequestBuilder<ApprovalRequestsServiceGetOpenApprovalRequestListParameters, ApprovalRequestParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ApprovalRequestsService_GetOpenApprovalRequestList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ApprovalRequestParams)), params);
}

/**
 * Type of the parameters to be passed to [[brazilFuelIndexersServiceGetList]].
 */
export interface BrazilFuelIndexersServiceGetListParameters {
}

/**
 * Brazil Fuel Indexers Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function brazilFuelIndexersServiceGetList(parameters: BrazilFuelIndexersServiceGetListParameters): ActionImportRequestBuilder<BrazilFuelIndexersServiceGetListParameters, BrazilFuelIndexerParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BrazilFuelIndexersService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BrazilFuelIndexerParams)), params);
}

/**
 * Type of the parameters to be passed to [[downPaymentsServiceHandleApprovalRequest]].
 */
export interface DownPaymentsServiceHandleApprovalRequestParameters {
}

/**
 * Down Payments Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function downPaymentsServiceHandleApprovalRequest(parameters: DownPaymentsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<DownPaymentsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DownPaymentsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[dimensionsServiceGetDimensionList]].
 */
export interface DimensionsServiceGetDimensionListParameters {
}

/**
 * Dimensions Service Get Dimension List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function dimensionsServiceGetDimensionList(parameters: DimensionsServiceGetDimensionListParameters): ActionImportRequestBuilder<DimensionsServiceGetDimensionListParameters, DimensionParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DimensionsService_GetDimensionList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DimensionParams)), params);
}

/**
 * Type of the parameters to be passed to [[departmentsServiceGetDepartmentList]].
 */
export interface DepartmentsServiceGetDepartmentListParameters {
}

/**
 * Departments Service Get Department List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function departmentsServiceGetDepartmentList(parameters: DepartmentsServiceGetDepartmentListParameters): ActionImportRequestBuilder<DepartmentsServiceGetDepartmentListParameters, DepartmentParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DepartmentsService_GetDepartmentList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DepartmentParams)), params);
}

/**
 * Type of the parameters to be passed to [[integrationPackagesConfigureServiceGetList]].
 */
export interface IntegrationPackagesConfigureServiceGetListParameters {
}

/**
 * Integration Packages Configure Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function integrationPackagesConfigureServiceGetList(parameters: IntegrationPackagesConfigureServiceGetListParameters): ActionImportRequestBuilder<IntegrationPackagesConfigureServiceGetListParameters, IntegrationPackageParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'IntegrationPackagesConfigureService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, IntegrationPackageParams)), params);
}

/**
 * Type of the parameters to be passed to [[countriesServiceGetCountryList]].
 */
export interface CountriesServiceGetCountryListParameters {
}

/**
 * Countries Service Get Country List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function countriesServiceGetCountryList(parameters: CountriesServiceGetCountryListParameters): ActionImportRequestBuilder<CountriesServiceGetCountryListParameters, CountryParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CountriesService_GetCountryList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CountryParams)), params);
}

/**
 * Type of the parameters to be passed to [[purchaseDownPaymentsServiceHandleApprovalRequest]].
 */
export interface PurchaseDownPaymentsServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Down Payments Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseDownPaymentsServiceHandleApprovalRequest(parameters: PurchaseDownPaymentsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseDownPaymentsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseDownPaymentsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[approvalRequestsServiceGetApprovalRequestList]].
 */
export interface ApprovalRequestsServiceGetApprovalRequestListParameters {
}

/**
 * Approval Requests Service Get Approval Request List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function approvalRequestsServiceGetApprovalRequestList(parameters: ApprovalRequestsServiceGetApprovalRequestListParameters): ActionImportRequestBuilder<ApprovalRequestsServiceGetApprovalRequestListParameters, ApprovalRequestParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ApprovalRequestsService_GetApprovalRequestList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ApprovalRequestParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceTaxPostingServiceGetTaxableDeliveries]].
 */
export interface ServiceTaxPostingServiceGetTaxableDeliveriesParameters {
}

/**
 * Service Tax Posting Service Get Taxable Deliveries.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceTaxPostingServiceGetTaxableDeliveries(parameters: ServiceTaxPostingServiceGetTaxableDeliveriesParameters): ActionImportRequestBuilder<ServiceTaxPostingServiceGetTaxableDeliveriesParameters, ServiceTaxPostingParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceTaxPostingService_GetTaxableDeliveries', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceTaxPostingParams)), params);
}

/**
 * Type of the parameters to be passed to [[branchesServiceGetBranchList]].
 */
export interface BranchesServiceGetBranchListParameters {
}

/**
 * Branches Service Get Branch List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function branchesServiceGetBranchList(parameters: BranchesServiceGetBranchListParameters): ActionImportRequestBuilder<BranchesServiceGetBranchListParameters, BranchParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BranchesService_GetBranchList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BranchParams)), params);
}

/**
 * Type of the parameters to be passed to [[terminationReasonServiceGetList]].
 */
export interface TerminationReasonServiceGetListParameters {
}

/**
 * Termination Reason Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function terminationReasonServiceGetList(parameters: TerminationReasonServiceGetListParameters): ActionImportRequestBuilder<TerminationReasonServiceGetListParameters, TerminationReasonParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TerminationReasonService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TerminationReasonParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList]].
 */
export interface ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters {
}

/**
 * Service Call Solution Status Service Get Service Call Solution Status List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList(parameters: ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters): ActionImportRequestBuilder<ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters, ServiceCallSolutionStatusParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallSolutionStatusService_GetServiceCallSolutionStatusList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceCallSolutionStatusParams)), params);
}

/**
 * Type of the parameters to be passed to [[dunningTermsServiceGetDunningTermList]].
 */
export interface DunningTermsServiceGetDunningTermListParameters {
}

/**
 * Dunning Terms Service Get Dunning Term List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function dunningTermsServiceGetDunningTermList(parameters: DunningTermsServiceGetDunningTermListParameters): ActionImportRequestBuilder<DunningTermsServiceGetDunningTermListParameters, DunningTermParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DunningTermsService_GetDunningTermList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DunningTermParams)), params);
}

/**
 * Type of the parameters to be passed to [[assetRetirementServiceGetList]].
 */
export interface AssetRetirementServiceGetListParameters {
}

/**
 * Asset Retirement Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetRetirementServiceGetList(parameters: AssetRetirementServiceGetListParameters): ActionImportRequestBuilder<AssetRetirementServiceGetListParameters, AssetDocumentParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetRetirementService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetDocumentParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList]].
 */
export interface ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters {
}

/**
 * Service Call Problem Sub Types Service Get Service Call Problem Sub Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList(parameters: ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters): ActionImportRequestBuilder<ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters, ServiceCallProblemSubTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallProblemSubTypesService_GetServiceCallProblemSubTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceCallProblemSubTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[trackingNotesServiceGetList]].
 */
export interface TrackingNotesServiceGetListParameters {
}

/**
 * Tracking Notes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function trackingNotesServiceGetList(parameters: TrackingNotesServiceGetListParameters): ActionImportRequestBuilder<TrackingNotesServiceGetListParameters, TrackingNoteParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TrackingNotesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TrackingNoteParams)), params);
}

/**
 * Type of the parameters to be passed to [[taxCodeDeterminationsServiceGetTaxCodeDeterminationList]].
 */
export interface TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters {
}

/**
 * Tax Code Determinations Service Get Tax Code Determination List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxCodeDeterminationsServiceGetTaxCodeDeterminationList(parameters: TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters): ActionImportRequestBuilder<TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters, TaxCodeDeterminationParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TaxCodeDeterminationsService_GetTaxCodeDeterminationList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TaxCodeDeterminationParams)), params);
}

/**
 * Type of the parameters to be passed to [[depreciationTypePoolsServiceGetList]].
 */
export interface DepreciationTypePoolsServiceGetListParameters {
}

/**
 * Depreciation Type Pools Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depreciationTypePoolsServiceGetList(parameters: DepreciationTypePoolsServiceGetListParameters): ActionImportRequestBuilder<DepreciationTypePoolsServiceGetListParameters, DepreciationTypePoolParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DepreciationTypePoolsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DepreciationTypePoolParams)), params);
}

/**
 * Type of the parameters to be passed to [[purchaseReturnsServiceHandleApprovalRequest]].
 */
export interface PurchaseReturnsServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Returns Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseReturnsServiceHandleApprovalRequest(parameters: PurchaseReturnsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseReturnsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseReturnsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[employeePositionServiceGetList]].
 */
export interface EmployeePositionServiceGetListParameters {
}

/**
 * Employee Position Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeePositionServiceGetList(parameters: EmployeePositionServiceGetListParameters): ActionImportRequestBuilder<EmployeePositionServiceGetListParameters, EmployeePositionParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EmployeePositionService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EmployeePositionParams)), params);
}

/**
 * Type of the parameters to be passed to [[predefinedTextsServiceGetPredefinedTextList]].
 */
export interface PredefinedTextsServiceGetPredefinedTextListParameters {
}

/**
 * Predefined Texts Service Get Predefined Text List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function predefinedTextsServiceGetPredefinedTextList(parameters: PredefinedTextsServiceGetPredefinedTextListParameters): ActionImportRequestBuilder<PredefinedTextsServiceGetPredefinedTextListParameters, PredefinedTextParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PredefinedTextsService_GetPredefinedTextList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PredefinedTextParams)), params);
}

/**
 * Type of the parameters to be passed to [[accountCategoryServiceGetCategoryList]].
 */
export interface AccountCategoryServiceGetCategoryListParameters {
}

/**
 * Account Category Service Get Category List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function accountCategoryServiceGetCategoryList(parameters: AccountCategoryServiceGetCategoryListParameters): ActionImportRequestBuilder<AccountCategoryServiceGetCategoryListParameters, AccountCategoryParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AccountCategoryService_GetCategoryList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AccountCategoryParams)), params);
}

/**
 * Type of the parameters to be passed to [[inventoryCountingsServiceGetList]].
 */
export interface InventoryCountingsServiceGetListParameters {
}

/**
 * Inventory Countings Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryCountingsServiceGetList(parameters: InventoryCountingsServiceGetListParameters): ActionImportRequestBuilder<InventoryCountingsServiceGetListParameters, InventoryCountingParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InventoryCountingsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, InventoryCountingParams)), params);
}

/**
 * Type of the parameters to be passed to [[purchaseOrdersServiceHandleApprovalRequest]].
 */
export interface PurchaseOrdersServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Orders Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseOrdersServiceHandleApprovalRequest(parameters: PurchaseOrdersServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseOrdersServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseOrdersService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[quotationsServiceHandleApprovalRequest]].
 */
export interface QuotationsServiceHandleApprovalRequestParameters {
}

/**
 * Quotations Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function quotationsServiceHandleApprovalRequest(parameters: QuotationsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<QuotationsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'QuotationsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[cockpitsServiceGetCockpitList]].
 */
export interface CockpitsServiceGetCockpitListParameters {
}

/**
 * Cockpits Service Get Cockpit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cockpitsServiceGetCockpitList(parameters: CockpitsServiceGetCockpitListParameters): ActionImportRequestBuilder<CockpitsServiceGetCockpitListParameters, CockpitParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CockpitsService_GetCockpitList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CockpitParams)), params);
}

/**
 * Type of the parameters to be passed to [[userGroupServiceGetUserGroupList]].
 */
export interface UserGroupServiceGetUserGroupListParameters {
}

/**
 * User Group Service Get User Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function userGroupServiceGetUserGroupList(parameters: UserGroupServiceGetUserGroupListParameters): ActionImportRequestBuilder<UserGroupServiceGetUserGroupListParameters, UserGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'UserGroupService_GetUserGroupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, UserGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[boePortfoliosServiceGetBoePortfolioList]].
 */
export interface BoePortfoliosServiceGetBoePortfolioListParameters {
}

/**
 * Boe Portfolios Service Get Boe Portfolio List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function boePortfoliosServiceGetBoePortfolioList(parameters: BoePortfoliosServiceGetBoePortfolioListParameters): ActionImportRequestBuilder<BoePortfoliosServiceGetBoePortfolioListParameters, BoePortfolioParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BOEPortfoliosService_GetBOEPortfolioList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BoePortfolioParams)), params);
}

/**
 * Type of the parameters to be passed to [[purchaseCreditNotesServiceHandleApprovalRequest]].
 */
export interface PurchaseCreditNotesServiceHandleApprovalRequestParameters {
}

/**
 * Purchase Credit Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function purchaseCreditNotesServiceHandleApprovalRequest(parameters: PurchaseCreditNotesServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<PurchaseCreditNotesServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'PurchaseCreditNotesService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[emailGroupsServiceGetList]].
 */
export interface EmailGroupsServiceGetListParameters {
}

/**
 * Email Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function emailGroupsServiceGetList(parameters: EmailGroupsServiceGetListParameters): ActionImportRequestBuilder<EmailGroupsServiceGetListParameters, EmailGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EmailGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EmailGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[projectManagementConfigurationServiceGetSubprojectTypes]].
 */
export interface ProjectManagementConfigurationServiceGetSubprojectTypesParameters {
}

/**
 * Project Management Configuration Service Get Subproject Types.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetSubprojectTypes(parameters: ProjectManagementConfigurationServiceGetSubprojectTypesParameters): ActionImportRequestBuilder<ProjectManagementConfigurationServiceGetSubprojectTypesParameters, PmcSubprojectTypeData[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetSubprojectTypes', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PmcSubprojectTypeData)), params);
}

/**
 * Type of the parameters to be passed to [[projectManagementConfigurationServiceGetAreas]].
 */
export interface ProjectManagementConfigurationServiceGetAreasParameters {
}

/**
 * Project Management Configuration Service Get Areas.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetAreas(parameters: ProjectManagementConfigurationServiceGetAreasParameters): ActionImportRequestBuilder<ProjectManagementConfigurationServiceGetAreasParameters, PmcAreaData[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetAreas', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PmcAreaData)), params);
}

/**
 * Type of the parameters to be passed to [[inventoryTransferRequestsServiceHandleApprovalRequest]].
 */
export interface InventoryTransferRequestsServiceHandleApprovalRequestParameters {
}

/**
 * Inventory Transfer Requests Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryTransferRequestsServiceHandleApprovalRequest(parameters: InventoryTransferRequestsServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<InventoryTransferRequestsServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InventoryTransferRequestsService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[projectManagementConfigurationServiceGetPriorities]].
 */
export interface ProjectManagementConfigurationServiceGetPrioritiesParameters {
}

/**
 * Project Management Configuration Service Get Priorities.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetPriorities(parameters: ProjectManagementConfigurationServiceGetPrioritiesParameters): ActionImportRequestBuilder<ProjectManagementConfigurationServiceGetPrioritiesParameters, PmcPriorityData[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetPriorities', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PmcPriorityData)), params);
}

/**
 * Type of the parameters to be passed to [[projectManagementConfigurationServiceGetActivities]].
 */
export interface ProjectManagementConfigurationServiceGetActivitiesParameters {
}

/**
 * Project Management Configuration Service Get Activities.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetActivities(parameters: ProjectManagementConfigurationServiceGetActivitiesParameters): ActionImportRequestBuilder<ProjectManagementConfigurationServiceGetActivitiesParameters, PmcActivityData[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetActivities', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PmcActivityData)), params);
}

/**
 * Type of the parameters to be passed to [[projectManagementConfigurationServiceGetTasks]].
 */
export interface ProjectManagementConfigurationServiceGetTasksParameters {
}

/**
 * Project Management Configuration Service Get Tasks.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function projectManagementConfigurationServiceGetTasks(parameters: ProjectManagementConfigurationServiceGetTasksParameters): ActionImportRequestBuilder<ProjectManagementConfigurationServiceGetTasksParameters, PmcTaskData[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetTasks', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, PmcTaskData)), params);
}

/**
 * Type of the parameters to be passed to [[inventoryGenExitServiceHandleApprovalRequest]].
 */
export interface InventoryGenExitServiceHandleApprovalRequestParameters {
}

/**
 * Inventory Gen Exit Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryGenExitServiceHandleApprovalRequest(parameters: InventoryGenExitServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<InventoryGenExitServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InventoryGenExitService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[returnRequestServiceHandleApprovalRequest]].
 */
export interface ReturnRequestServiceHandleApprovalRequestParameters {
}

/**
 * Return Request Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function returnRequestServiceHandleApprovalRequest(parameters: ReturnRequestServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<ReturnRequestServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ReturnRequestService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[goodsReturnRequestServiceHandleApprovalRequest]].
 */
export interface GoodsReturnRequestServiceHandleApprovalRequestParameters {
}

/**
 * Goods Return Request Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function goodsReturnRequestServiceHandleApprovalRequest(parameters: GoodsReturnRequestServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<GoodsReturnRequestServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'GoodsReturnRequestService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList]].
 */
export interface BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters {
}

/**
 * Bank Charges Allocation Codes Service Get Bank Charges Allocation Code List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList(parameters: BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters): ActionImportRequestBuilder<BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters, BankChargesAllocationCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BankChargesAllocationCodesService_GetBankChargesAllocationCodeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BankChargesAllocationCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[activityRecipientListsServiceGetList]].
 */
export interface ActivityRecipientListsServiceGetListParameters {
}

/**
 * Activity Recipient Lists Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function activityRecipientListsServiceGetList(parameters: ActivityRecipientListsServiceGetListParameters): ActionImportRequestBuilder<ActivityRecipientListsServiceGetListParameters, ActivityRecipientListParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ActivityRecipientListsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ActivityRecipientListParams)), params);
}

/**
 * Type of the parameters to be passed to [[cashFlowLineItemsServiceGetCashFlowLineItemList]].
 */
export interface CashFlowLineItemsServiceGetCashFlowLineItemListParameters {
}

/**
 * Cash Flow Line Items Service Get Cash Flow Line Item List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function cashFlowLineItemsServiceGetCashFlowLineItemList(parameters: CashFlowLineItemsServiceGetCashFlowLineItemListParameters): ActionImportRequestBuilder<CashFlowLineItemsServiceGetCashFlowLineItemListParameters, CashFlowLineItemParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CashFlowLineItemsService_GetCashFlowLineItemList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CashFlowLineItemParams)), params);
}

/**
 * Type of the parameters to be passed to [[campaignResponseTypeServiceGetResponseTypeList]].
 */
export interface CampaignResponseTypeServiceGetResponseTypeListParameters {
}

/**
 * Campaign Response Type Service Get Response Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function campaignResponseTypeServiceGetResponseTypeList(parameters: CampaignResponseTypeServiceGetResponseTypeListParameters): ActionImportRequestBuilder<CampaignResponseTypeServiceGetResponseTypeListParameters, CampaignResponseTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CampaignResponseTypeService_GetResponseTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CampaignResponseTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[costCenterTypesServiceGetCostCenterTypeList]].
 */
export interface CostCenterTypesServiceGetCostCenterTypeListParameters {
}

/**
 * Cost Center Types Service Get Cost Center Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function costCenterTypesServiceGetCostCenterTypeList(parameters: CostCenterTypesServiceGetCostCenterTypeListParameters): ActionImportRequestBuilder<CostCenterTypesServiceGetCostCenterTypeListParameters, CostCenterTypeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CostCenterTypesService_GetCostCenterTypeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CostCenterTypeParams)), params);
}

/**
 * Type of the parameters to be passed to [[assetTransferServiceGetList]].
 */
export interface AssetTransferServiceGetListParameters {
}

/**
 * Asset Transfer Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetTransferServiceGetList(parameters: AssetTransferServiceGetListParameters): ActionImportRequestBuilder<AssetTransferServiceGetListParameters, AssetDocumentParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetTransferService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetDocumentParams)), params);
}

/**
 * Type of the parameters to be passed to [[depositsServiceGetDepositList]].
 */
export interface DepositsServiceGetDepositListParameters {
}

/**
 * Deposits Service Get Deposit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function depositsServiceGetDepositList(parameters: DepositsServiceGetDepositListParameters): ActionImportRequestBuilder<DepositsServiceGetDepositListParameters, DepositParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DepositsService_GetDepositList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DepositParams)), params);
}

/**
 * Type of the parameters to be passed to [[govPayCodesServiceGetList]].
 */
export interface GovPayCodesServiceGetListParameters {
}

/**
 * Gov Pay Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function govPayCodesServiceGetList(parameters: GovPayCodesServiceGetListParameters): ActionImportRequestBuilder<GovPayCodesServiceGetListParameters, GovPayCodeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'GovPayCodesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, GovPayCodeParams)), params);
}

/**
 * Type of the parameters to be passed to [[attributeGroupsServiceGetList]].
 */
export interface AttributeGroupsServiceGetListParameters {
}

/**
 * Attribute Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function attributeGroupsServiceGetList(parameters: AttributeGroupsServiceGetListParameters): ActionImportRequestBuilder<AttributeGroupsServiceGetListParameters, AttributeGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AttributeGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AttributeGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[serviceGroupsServiceGetServiceGroupList]].
 */
export interface ServiceGroupsServiceGetServiceGroupListParameters {
}

/**
 * Service Groups Service Get Service Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function serviceGroupsServiceGetServiceGroupList(parameters: ServiceGroupsServiceGetServiceGroupListParameters): ActionImportRequestBuilder<ServiceGroupsServiceGetServiceGroupListParameters, ServiceGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ServiceGroupsService_GetServiceGroupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ServiceGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[materialGroupsServiceGetMaterialGroupList]].
 */
export interface MaterialGroupsServiceGetMaterialGroupListParameters {
}

/**
 * Material Groups Service Get Material Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function materialGroupsServiceGetMaterialGroupList(parameters: MaterialGroupsServiceGetMaterialGroupListParameters): ActionImportRequestBuilder<MaterialGroupsServiceGetMaterialGroupListParameters, MaterialGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'MaterialGroupsService_GetMaterialGroupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, MaterialGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[resourcePropertiesServiceGetList]].
 */
export interface ResourcePropertiesServiceGetListParameters {
}

/**
 * Resource Properties Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourcePropertiesServiceGetList(parameters: ResourcePropertiesServiceGetListParameters): ActionImportRequestBuilder<ResourcePropertiesServiceGetListParameters, ResourcePropertyParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ResourcePropertiesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ResourcePropertyParams)), params);
}

/**
 * Type of the parameters to be passed to [[blanketAgreementsServiceGetBlanketAgreementList]].
 */
export interface BlanketAgreementsServiceGetBlanketAgreementListParameters {
}

/**
 * Blanket Agreements Service Get Blanket Agreement List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function blanketAgreementsServiceGetBlanketAgreementList(parameters: BlanketAgreementsServiceGetBlanketAgreementListParameters): ActionImportRequestBuilder<BlanketAgreementsServiceGetBlanketAgreementListParameters, BlanketAgreementParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BlanketAgreementsService_GetBlanketAgreementList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BlanketAgreementParams)), params);
}

/**
 * Type of the parameters to be passed to [[costElementServiceGetCostElementList]].
 */
export interface CostElementServiceGetCostElementListParameters {
}

/**
 * Cost Element Service Get Cost Element List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function costElementServiceGetCostElementList(parameters: CostElementServiceGetCostElementListParameters): ActionImportRequestBuilder<CostElementServiceGetCostElementListParameters, CostElementParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CostElementService_GetCostElementList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CostElementParams)), params);
}

/**
 * Type of the parameters to be passed to [[ordersServiceHandleApprovalRequest]].
 */
export interface OrdersServiceHandleApprovalRequestParameters {
}

/**
 * Orders Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function ordersServiceHandleApprovalRequest(parameters: OrdersServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<OrdersServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'OrdersService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[ncmCodesSetupServiceGetNcmCodeSetupList]].
 */
export interface NcmCodesSetupServiceGetNcmCodeSetupListParameters {
}

/**
 * Ncm Codes Setup Service Get Ncm Code Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function ncmCodesSetupServiceGetNcmCodeSetupList(parameters: NcmCodesSetupServiceGetNcmCodeSetupListParameters): ActionImportRequestBuilder<NcmCodesSetupServiceGetNcmCodeSetupListParameters, NcmCodeSetupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'NCMCodesSetupService_GetNCMCodeSetupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, NcmCodeSetupParams)), params);
}

/**
 * Type of the parameters to be passed to [[taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList]].
 */
export interface TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters {
}

/**
 * Tax Code Determinations Tcd Service Get Tax Code Determination Tcd List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList(parameters: TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters): ActionImportRequestBuilder<TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters, TaxCodeDeterminationTcdParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'TaxCodeDeterminationsTCDService_GetTaxCodeDeterminationTCDList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, TaxCodeDeterminationTcdParams)), params);
}

/**
 * Type of the parameters to be passed to [[checkLinesServiceGetValidCheckLineList]].
 */
export interface CheckLinesServiceGetValidCheckLineListParameters {
}

/**
 * Check Lines Service Get Valid Check Line List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function checkLinesServiceGetValidCheckLineList(parameters: CheckLinesServiceGetValidCheckLineListParameters): ActionImportRequestBuilder<CheckLinesServiceGetValidCheckLineListParameters, CheckLineParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CheckLinesService_GetValidCheckLineList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, CheckLineParams)), params);
}

/**
 * Type of the parameters to be passed to [[routeStagesServiceGetList]].
 */
export interface RouteStagesServiceGetListParameters {
}

/**
 * Route Stages Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function routeStagesServiceGetList(parameters: RouteStagesServiceGetListParameters): ActionImportRequestBuilder<RouteStagesServiceGetListParameters, RouteStageParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'RouteStagesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, RouteStageParams)), params);
}

/**
 * Type of the parameters to be passed to [[inventoryOpeningBalancesServiceGetList]].
 */
export interface InventoryOpeningBalancesServiceGetListParameters {
}

/**
 * Inventory Opening Balances Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function inventoryOpeningBalancesServiceGetList(parameters: InventoryOpeningBalancesServiceGetListParameters): ActionImportRequestBuilder<InventoryOpeningBalancesServiceGetListParameters, InventoryOpeningBalanceParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'InventoryOpeningBalancesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, InventoryOpeningBalanceParams)), params);
}

/**
 * Type of the parameters to be passed to [[deliveryNotesServiceHandleApprovalRequest]].
 */
export interface DeliveryNotesServiceHandleApprovalRequestParameters {
}

/**
 * Delivery Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deliveryNotesServiceHandleApprovalRequest(parameters: DeliveryNotesServiceHandleApprovalRequestParameters): ActionImportRequestBuilder<DeliveryNotesServiceHandleApprovalRequestParameters, undefined> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DeliveryNotesService_HandleApprovalRequest', (data) => transformReturnValueForUndefinedV4(data, (val) => undefined), params);
}

/**
 * Type of the parameters to be passed to [[assetDepreciationGroupsServiceGetList]].
 */
export interface AssetDepreciationGroupsServiceGetListParameters {
}

/**
 * Asset Depreciation Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function assetDepreciationGroupsServiceGetList(parameters: AssetDepreciationGroupsServiceGetListParameters): ActionImportRequestBuilder<AssetDepreciationGroupsServiceGetListParameters, AssetDepreciationGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'AssetDepreciationGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, AssetDepreciationGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[glAccountAdvancedRulesServiceGetList]].
 */
export interface GlAccountAdvancedRulesServiceGetListParameters {
}

/**
 * Gl Account Advanced Rules Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function glAccountAdvancedRulesServiceGetList(parameters: GlAccountAdvancedRulesServiceGetListParameters): ActionImportRequestBuilder<GlAccountAdvancedRulesServiceGetListParameters, GlAccountAdvancedRuleParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'GLAccountAdvancedRulesService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, GlAccountAdvancedRuleParams)), params);
}

/**
 * Type of the parameters to be passed to [[companyServiceGetFeaturesStatus]].
 */
export interface CompanyServiceGetFeaturesStatusParameters {
}

/**
 * Company Service Get Features Status.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function companyServiceGetFeaturesStatus(parameters: CompanyServiceGetFeaturesStatusParameters): ActionImportRequestBuilder<CompanyServiceGetFeaturesStatusParameters, FeatureStatus[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'CompanyService_GetFeaturesStatus', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, FeatureStatus)), params);
}

/**
 * Type of the parameters to be passed to [[electronicFileFormatsServiceGetElectronicFileFormatList]].
 */
export interface ElectronicFileFormatsServiceGetElectronicFileFormatListParameters {
}

/**
 * Electronic File Formats Service Get Electronic File Format List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function electronicFileFormatsServiceGetElectronicFileFormatList(parameters: ElectronicFileFormatsServiceGetElectronicFileFormatListParameters): ActionImportRequestBuilder<ElectronicFileFormatsServiceGetElectronicFileFormatListParameters, ElectronicFileFormatParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ElectronicFileFormatsService_GetElectronicFileFormatList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ElectronicFileFormatParams)), params);
}

/**
 * Type of the parameters to be passed to [[employeeTransfersServiceGetEmployeeTransferList]].
 */
export interface EmployeeTransfersServiceGetEmployeeTransferListParameters {
}

/**
 * Employee Transfers Service Get Employee Transfer List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function employeeTransfersServiceGetEmployeeTransferList(parameters: EmployeeTransfersServiceGetEmployeeTransferListParameters): ActionImportRequestBuilder<EmployeeTransfersServiceGetEmployeeTransferListParameters, EmployeeTransferParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'EmployeeTransfersService_GetEmployeeTransferList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, EmployeeTransferParams)), params);
}

/**
 * Type of the parameters to be passed to [[mobileAddOnSettingServiceGetMobileAddOnSettingList]].
 */
export interface MobileAddOnSettingServiceGetMobileAddOnSettingListParameters {
}

/**
 * Mobile Add On Setting Service Get Mobile Add On Setting List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function mobileAddOnSettingServiceGetMobileAddOnSettingList(parameters: MobileAddOnSettingServiceGetMobileAddOnSettingListParameters): ActionImportRequestBuilder<MobileAddOnSettingServiceGetMobileAddOnSettingListParameters, MobileAddOnSettingParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'MobileAddOnSettingService_GetMobileAddOnSettingList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, MobileAddOnSettingParams)), params);
}

/**
 * Type of the parameters to be passed to [[deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList]].
 */
export interface DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters {
}

/**
 * Deduction Tax Sub Groups Service Get Deduction Tax Sub Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList(parameters: DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters): ActionImportRequestBuilder<DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters, DeductionTaxSubGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DeductionTaxSubGroupsService_GetDeductionTaxSubGroupList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DeductionTaxSubGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[scheduleJobServiceRunTask]].
 */
export interface ScheduleJobServiceRunTaskParameters {
  /**
   * Permission Id.
   */
  permissionId: string;
}

/**
 * Schedule Job Service Run Task.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function scheduleJobServiceRunTask(parameters: ScheduleJobServiceRunTaskParameters): ActionImportRequestBuilder<ScheduleJobServiceRunTaskParameters, number> {
  const params = {
    permissionId: new ActionImportParameter('PermissionID', 'Edm.String', parameters.permissionId)
  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ScheduleJobService_RunTask', (data) => transformReturnValueForEdmTypeV4(data, (val) => edmToTsV4(val.value, 'Edm.Int32')), params);
}

/**
 * Type of the parameters to be passed to [[recurringTransactionServiceGetAvailableRecurringTransactions]].
 */
export interface RecurringTransactionServiceGetAvailableRecurringTransactionsParameters {
}

/**
 * Recurring Transaction Service Get Available Recurring Transactions.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function recurringTransactionServiceGetAvailableRecurringTransactions(parameters: RecurringTransactionServiceGetAvailableRecurringTransactionsParameters): ActionImportRequestBuilder<RecurringTransactionServiceGetAvailableRecurringTransactionsParameters, RclRecurringTransaction[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'RecurringTransactionService_GetAvailableRecurringTransactions', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, RclRecurringTransaction)), params);
}

/**
 * Type of the parameters to be passed to [[brazilBeverageIndexersServiceGetList]].
 */
export interface BrazilBeverageIndexersServiceGetListParameters {
}

/**
 * Brazil Beverage Indexers Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function brazilBeverageIndexersServiceGetList(parameters: BrazilBeverageIndexersServiceGetListParameters): ActionImportRequestBuilder<BrazilBeverageIndexersServiceGetListParameters, BrazilBeverageIndexerParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'BrazilBeverageIndexersService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, BrazilBeverageIndexerParams)), params);
}

/**
 * Type of the parameters to be passed to [[natureOfAssesseesServiceGetNatureOfAssesseeList]].
 */
export interface NatureOfAssesseesServiceGetNatureOfAssesseeListParameters {
}

/**
 * Nature Of Assessees Service Get Nature Of Assessee List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function natureOfAssesseesServiceGetNatureOfAssesseeList(parameters: NatureOfAssesseesServiceGetNatureOfAssesseeListParameters): ActionImportRequestBuilder<NatureOfAssesseesServiceGetNatureOfAssesseeListParameters, NatureOfAssesseeParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'NatureOfAssesseesService_GetNatureOfAssesseeList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, NatureOfAssesseeParams)), params);
}

/**
 * Type of the parameters to be passed to [[fiscalPrinterServiceGetFiscalPrinterList]].
 */
export interface FiscalPrinterServiceGetFiscalPrinterListParameters {
}

/**
 * Fiscal Printer Service Get Fiscal Printer List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function fiscalPrinterServiceGetFiscalPrinterList(parameters: FiscalPrinterServiceGetFiscalPrinterListParameters): ActionImportRequestBuilder<FiscalPrinterServiceGetFiscalPrinterListParameters, FiscalPrinterParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'FiscalPrinterService_GetFiscalPrinterList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, FiscalPrinterParams)), params);
}

/**
 * Type of the parameters to be passed to [[distributionRulesServiceGetDistributionRuleList]].
 */
export interface DistributionRulesServiceGetDistributionRuleListParameters {
}

/**
 * Distribution Rules Service Get Distribution Rule List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function distributionRulesServiceGetDistributionRuleList(parameters: DistributionRulesServiceGetDistributionRuleListParameters): ActionImportRequestBuilder<DistributionRulesServiceGetDistributionRuleListParameters, DistributionRuleParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'DistributionRulesService_GetDistributionRuleList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, DistributionRuleParams)), params);
}

/**
 * Type of the parameters to be passed to [[resourceGroupsServiceGetList]].
 */
export interface ResourceGroupsServiceGetListParameters {
}

/**
 * Resource Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function resourceGroupsServiceGetList(parameters: ResourceGroupsServiceGetListParameters): ActionImportRequestBuilder<ResourceGroupsServiceGetListParameters, ResourceGroupParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'ResourceGroupsService_GetList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, ResourceGroupParams)), params);
}

/**
 * Type of the parameters to be passed to [[landedCostsServiceGetLandedCostList]].
 */
export interface LandedCostsServiceGetLandedCostListParameters {
}

/**
 * Landed Costs Service Get Landed Cost List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
export function landedCostsServiceGetLandedCostList(parameters: LandedCostsServiceGetLandedCostListParameters): ActionImportRequestBuilder<LandedCostsServiceGetLandedCostListParameters, LandedCostParams[]> {
  const params = {

  }

  return new ActionImportRequestBuilder('/b1s/v2/', 'LandedCostsService_GetLandedCostList', (data) => transformReturnValueForComplexTypeListV4(data, (data) => deserializeComplexTypeV4(data, LandedCostParams)), params);
}

export const actionImports = {
  logout,
  queryServicePostQuery,
  scheduleJobServiceRunJobCallback,
  alertServiceRunAlert,
  salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList,
  messagesServiceGetSentMessages,
  creditLinesServiceGetValidCreditLineList,
  employeeStatusServiceGetList,
  serviceCallTypesServiceGetServiceCallTypeList,
  serviceCallStatusServiceGetServiceCallStatusList,
  financialYearsServiceGetFinancialYearList,
  employeeRolesSetupServiceGetEmployeeRoleSetupList,
  nfModelsServiceGetList,
  indiaSacCodeServiceGetList,
  queryAuthGroupServiceGetQueryAuthGroupList,
  employeeIdTypeServiceGetList,
  serviceCallProblemTypesServiceGetServiceCallProblemTypeList,
  approvalTemplatesServiceGetApprovalTemplateList,
  assetManualDepreciationServiceGetList,
  activitiesServiceGetActivityList,
  projectsServiceGetProjectList,
  cycleCountDeterminationsServiceGetList,
  returnsServiceHandleApprovalRequest,
  sboBobServiceSetCurrencyRate,
  assetCapitalizationCreditMemoServiceGetList,
  businessPartnerPropertiesServiceGetBusinessPartnerPropertyList,
  assetGroupsServiceGetList,
  assetClassesServiceGetList,
  journalEntryDocumentTypeServiceGetList,
  login,
  barCodesServiceGetList,
  stockTransferDraftServiceHandleApprovalRequest,
  depreciationAreasServiceGetList,
  resourceCapacitiesServiceGetList,
  resourcesServiceGetList,
  extendedTranslationsServiceGetExtendedTranslationList,
  paymentBlocksServiceGetPaymentBlockList,
  cockpitsServiceGetUserCockpitList,
  stockTransferServiceHandleApprovalRequest,
  assetCapitalizationServiceGetList,
  targetGroupsServiceGetList,
  certificateSeriesServiceGetCertificateSeriesList,
  correctionPurchaseInvoiceServiceHandleApprovalRequest,
  determinationCriteriasServiceGetList,
  correctionPurchaseInvoiceReversalServiceHandleApprovalRequest,
  depreciationTypesServiceGetList,
  taxWebSitesServiceGetDefaultWebSite,
  binLocationAttributesServiceGetList,
  reportTypesServiceGetReportTypeList,
  transactionCodesServiceGetList,
  enhancedDiscountGroupsServiceGetList,
  purchaseRequestServiceHandleApprovalRequest,
  purchaseQuotationsServiceHandleApprovalRequest,
  accrualTypesServiceGetAccrualTypeList,
  correctionInvoiceServiceHandleApprovalRequest,
  kpIsServiceGetList,
  purchaseInvoicesServiceHandleApprovalRequest,
  campaignsServiceGetList,
  boeInstructionsServiceGetBoeInstructionList,
  salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList,
  sectionsServiceGetSectionList,
  cashDiscountsServiceGetCashDiscountList,
  retornoCodesServiceGetList,
  binLocationsServiceGetList,
  nfTaxCategoriesServiceGetList,
  projectManagementConfigurationServiceGetStageTypes,
  salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList,
  occurrenceCodesServiceGetList,
  unitOfMeasurementGroupsServiceGetList,
  binLocationFieldsServiceGetList,
  taxWebSitesServiceGetTaxWebSiteList,
  serviceCallOriginsServiceGetServiceCallOriginList,
  creditNotesServiceHandleApprovalRequest,
  unitOfMeasurementsServiceGetList,
  dnfCodeSetupServiceGetDnfCodeSetupList,
  warehouseSublevelCodesServiceGetList,
  approvalRequestsServiceGetAllApprovalRequestsList,
  partnersSetupsServiceGetList,
  inventoryPostingsServiceGetList,
  inventoryGenEntryServiceHandleApprovalRequest,
  intrastatConfigurationServiceGetList,
  salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList,
  companyServiceGetPeriods,
  correctionInvoiceReversalServiceHandleApprovalRequest,
  purchaseDeliveryNotesServiceHandleApprovalRequest,
  cockpitsServiceGetTemplateCockpitList,
  approvalStagesServiceGetApprovalStageList,
  boeDocumentTypesServiceGetBoeDocumentTypeList,
  invoicesServiceHandleApprovalRequest,
  faAccountDeterminationsServiceGetList,
  profitCentersServiceGetProfitCenterList,
  statesServiceGetStateList,
  draftsServiceHandleApprovalRequest,
  approvalRequestsServiceGetOpenApprovalRequestList,
  brazilFuelIndexersServiceGetList,
  downPaymentsServiceHandleApprovalRequest,
  dimensionsServiceGetDimensionList,
  departmentsServiceGetDepartmentList,
  integrationPackagesConfigureServiceGetList,
  countriesServiceGetCountryList,
  purchaseDownPaymentsServiceHandleApprovalRequest,
  approvalRequestsServiceGetApprovalRequestList,
  serviceTaxPostingServiceGetTaxableDeliveries,
  branchesServiceGetBranchList,
  terminationReasonServiceGetList,
  serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList,
  dunningTermsServiceGetDunningTermList,
  assetRetirementServiceGetList,
  serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList,
  trackingNotesServiceGetList,
  taxCodeDeterminationsServiceGetTaxCodeDeterminationList,
  depreciationTypePoolsServiceGetList,
  purchaseReturnsServiceHandleApprovalRequest,
  employeePositionServiceGetList,
  predefinedTextsServiceGetPredefinedTextList,
  accountCategoryServiceGetCategoryList,
  inventoryCountingsServiceGetList,
  purchaseOrdersServiceHandleApprovalRequest,
  quotationsServiceHandleApprovalRequest,
  cockpitsServiceGetCockpitList,
  userGroupServiceGetUserGroupList,
  boePortfoliosServiceGetBoePortfolioList,
  purchaseCreditNotesServiceHandleApprovalRequest,
  emailGroupsServiceGetList,
  projectManagementConfigurationServiceGetSubprojectTypes,
  projectManagementConfigurationServiceGetAreas,
  inventoryTransferRequestsServiceHandleApprovalRequest,
  projectManagementConfigurationServiceGetPriorities,
  projectManagementConfigurationServiceGetActivities,
  projectManagementConfigurationServiceGetTasks,
  inventoryGenExitServiceHandleApprovalRequest,
  returnRequestServiceHandleApprovalRequest,
  goodsReturnRequestServiceHandleApprovalRequest,
  bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList,
  activityRecipientListsServiceGetList,
  cashFlowLineItemsServiceGetCashFlowLineItemList,
  campaignResponseTypeServiceGetResponseTypeList,
  costCenterTypesServiceGetCostCenterTypeList,
  assetTransferServiceGetList,
  depositsServiceGetDepositList,
  govPayCodesServiceGetList,
  attributeGroupsServiceGetList,
  serviceGroupsServiceGetServiceGroupList,
  materialGroupsServiceGetMaterialGroupList,
  resourcePropertiesServiceGetList,
  blanketAgreementsServiceGetBlanketAgreementList,
  costElementServiceGetCostElementList,
  ordersServiceHandleApprovalRequest,
  ncmCodesSetupServiceGetNcmCodeSetupList,
  taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList,
  checkLinesServiceGetValidCheckLineList,
  routeStagesServiceGetList,
  inventoryOpeningBalancesServiceGetList,
  deliveryNotesServiceHandleApprovalRequest,
  assetDepreciationGroupsServiceGetList,
  glAccountAdvancedRulesServiceGetList,
  companyServiceGetFeaturesStatus,
  electronicFileFormatsServiceGetElectronicFileFormatList,
  employeeTransfersServiceGetEmployeeTransferList,
  mobileAddOnSettingServiceGetMobileAddOnSettingList,
  deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList,
  scheduleJobServiceRunTask,
  recurringTransactionServiceGetAvailableRecurringTransactions,
  brazilBeverageIndexersServiceGetList,
  natureOfAssesseesServiceGetNatureOfAssesseeList,
  fiscalPrinterServiceGetFiscalPrinterList,
  distributionRulesServiceGetDistributionRuleList,
  resourceGroupsServiceGetList,
  landedCostsServiceGetLandedCostList
};
