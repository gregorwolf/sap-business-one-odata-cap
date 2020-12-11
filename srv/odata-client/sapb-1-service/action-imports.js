"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactionCodesServiceGetList = exports.reportTypesServiceGetReportTypeList = exports.binLocationAttributesServiceGetList = exports.taxWebSitesServiceGetDefaultWebSite = exports.depreciationTypesServiceGetList = exports.correctionPurchaseInvoiceReversalServiceHandleApprovalRequest = exports.determinationCriteriasServiceGetList = exports.correctionPurchaseInvoiceServiceHandleApprovalRequest = exports.certificateSeriesServiceGetCertificateSeriesList = exports.targetGroupsServiceGetList = exports.assetCapitalizationServiceGetList = exports.stockTransferServiceHandleApprovalRequest = exports.cockpitsServiceGetUserCockpitList = exports.paymentBlocksServiceGetPaymentBlockList = exports.extendedTranslationsServiceGetExtendedTranslationList = exports.resourcesServiceGetList = exports.resourceCapacitiesServiceGetList = exports.depreciationAreasServiceGetList = exports.stockTransferDraftServiceHandleApprovalRequest = exports.barCodesServiceGetList = exports.login = exports.journalEntryDocumentTypeServiceGetList = exports.assetClassesServiceGetList = exports.assetGroupsServiceGetList = exports.businessPartnerPropertiesServiceGetBusinessPartnerPropertyList = exports.assetCapitalizationCreditMemoServiceGetList = exports.sboBobServiceSetCurrencyRate = exports.returnsServiceHandleApprovalRequest = exports.cycleCountDeterminationsServiceGetList = exports.projectsServiceGetProjectList = exports.activitiesServiceGetActivityList = exports.assetManualDepreciationServiceGetList = exports.approvalTemplatesServiceGetApprovalTemplateList = exports.serviceCallProblemTypesServiceGetServiceCallProblemTypeList = exports.employeeIdTypeServiceGetList = exports.queryAuthGroupServiceGetQueryAuthGroupList = exports.indiaSacCodeServiceGetList = exports.nfModelsServiceGetList = exports.employeeRolesSetupServiceGetEmployeeRoleSetupList = exports.financialYearsServiceGetFinancialYearList = exports.serviceCallStatusServiceGetServiceCallStatusList = exports.serviceCallTypesServiceGetServiceCallTypeList = exports.employeeStatusServiceGetList = exports.creditLinesServiceGetValidCreditLineList = exports.messagesServiceGetSentMessages = exports.salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList = exports.alertServiceRunAlert = exports.scheduleJobServiceRunJobCallback = exports.queryServicePostQuery = exports.logout = void 0;
exports.countriesServiceGetCountryList = exports.integrationPackagesConfigureServiceGetList = exports.departmentsServiceGetDepartmentList = exports.dimensionsServiceGetDimensionList = exports.downPaymentsServiceHandleApprovalRequest = exports.brazilFuelIndexersServiceGetList = exports.approvalRequestsServiceGetOpenApprovalRequestList = exports.draftsServiceHandleApprovalRequest = exports.statesServiceGetStateList = exports.profitCentersServiceGetProfitCenterList = exports.faAccountDeterminationsServiceGetList = exports.invoicesServiceHandleApprovalRequest = exports.boeDocumentTypesServiceGetBoeDocumentTypeList = exports.approvalStagesServiceGetApprovalStageList = exports.cockpitsServiceGetTemplateCockpitList = exports.purchaseDeliveryNotesServiceHandleApprovalRequest = exports.correctionInvoiceReversalServiceHandleApprovalRequest = exports.companyServiceGetPeriods = exports.salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList = exports.intrastatConfigurationServiceGetList = exports.inventoryGenEntryServiceHandleApprovalRequest = exports.inventoryPostingsServiceGetList = exports.partnersSetupsServiceGetList = exports.approvalRequestsServiceGetAllApprovalRequestsList = exports.warehouseSublevelCodesServiceGetList = exports.dnfCodeSetupServiceGetDnfCodeSetupList = exports.unitOfMeasurementsServiceGetList = exports.creditNotesServiceHandleApprovalRequest = exports.serviceCallOriginsServiceGetServiceCallOriginList = exports.taxWebSitesServiceGetTaxWebSiteList = exports.binLocationFieldsServiceGetList = exports.unitOfMeasurementGroupsServiceGetList = exports.occurrenceCodesServiceGetList = exports.salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList = exports.projectManagementConfigurationServiceGetStageTypes = exports.nfTaxCategoriesServiceGetList = exports.binLocationsServiceGetList = exports.retornoCodesServiceGetList = exports.cashDiscountsServiceGetCashDiscountList = exports.sectionsServiceGetSectionList = exports.salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList = exports.boeInstructionsServiceGetBoeInstructionList = exports.campaignsServiceGetList = exports.purchaseInvoicesServiceHandleApprovalRequest = exports.kpIsServiceGetList = exports.correctionInvoiceServiceHandleApprovalRequest = exports.accrualTypesServiceGetAccrualTypeList = exports.purchaseQuotationsServiceHandleApprovalRequest = exports.purchaseRequestServiceHandleApprovalRequest = exports.enhancedDiscountGroupsServiceGetList = void 0;
exports.taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList = exports.ncmCodesSetupServiceGetNcmCodeSetupList = exports.ordersServiceHandleApprovalRequest = exports.costElementServiceGetCostElementList = exports.blanketAgreementsServiceGetBlanketAgreementList = exports.resourcePropertiesServiceGetList = exports.materialGroupsServiceGetMaterialGroupList = exports.serviceGroupsServiceGetServiceGroupList = exports.attributeGroupsServiceGetList = exports.govPayCodesServiceGetList = exports.depositsServiceGetDepositList = exports.assetTransferServiceGetList = exports.costCenterTypesServiceGetCostCenterTypeList = exports.campaignResponseTypeServiceGetResponseTypeList = exports.cashFlowLineItemsServiceGetCashFlowLineItemList = exports.activityRecipientListsServiceGetList = exports.bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList = exports.goodsReturnRequestServiceHandleApprovalRequest = exports.returnRequestServiceHandleApprovalRequest = exports.inventoryGenExitServiceHandleApprovalRequest = exports.projectManagementConfigurationServiceGetTasks = exports.projectManagementConfigurationServiceGetActivities = exports.projectManagementConfigurationServiceGetPriorities = exports.inventoryTransferRequestsServiceHandleApprovalRequest = exports.projectManagementConfigurationServiceGetAreas = exports.projectManagementConfigurationServiceGetSubprojectTypes = exports.emailGroupsServiceGetList = exports.purchaseCreditNotesServiceHandleApprovalRequest = exports.boePortfoliosServiceGetBoePortfolioList = exports.userGroupServiceGetUserGroupList = exports.cockpitsServiceGetCockpitList = exports.quotationsServiceHandleApprovalRequest = exports.purchaseOrdersServiceHandleApprovalRequest = exports.inventoryCountingsServiceGetList = exports.accountCategoryServiceGetCategoryList = exports.predefinedTextsServiceGetPredefinedTextList = exports.employeePositionServiceGetList = exports.purchaseReturnsServiceHandleApprovalRequest = exports.depreciationTypePoolsServiceGetList = exports.taxCodeDeterminationsServiceGetTaxCodeDeterminationList = exports.trackingNotesServiceGetList = exports.serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList = exports.assetRetirementServiceGetList = exports.dunningTermsServiceGetDunningTermList = exports.serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList = exports.terminationReasonServiceGetList = exports.branchesServiceGetBranchList = exports.serviceTaxPostingServiceGetTaxableDeliveries = exports.approvalRequestsServiceGetApprovalRequestList = exports.purchaseDownPaymentsServiceHandleApprovalRequest = void 0;
exports.actionImports = exports.landedCostsServiceGetLandedCostList = exports.resourceGroupsServiceGetList = exports.distributionRulesServiceGetDistributionRuleList = exports.fiscalPrinterServiceGetFiscalPrinterList = exports.natureOfAssesseesServiceGetNatureOfAssesseeList = exports.brazilBeverageIndexersServiceGetList = exports.recurringTransactionServiceGetAvailableRecurringTransactions = exports.scheduleJobServiceRunTask = exports.deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList = exports.mobileAddOnSettingServiceGetMobileAddOnSettingList = exports.employeeTransfersServiceGetEmployeeTransferList = exports.electronicFileFormatsServiceGetElectronicFileFormatList = exports.companyServiceGetFeaturesStatus = exports.glAccountAdvancedRulesServiceGetList = exports.assetDepreciationGroupsServiceGetList = exports.deliveryNotesServiceHandleApprovalRequest = exports.inventoryOpeningBalancesServiceGetList = exports.routeStagesServiceGetList = exports.checkLinesServiceGetValidCheckLineList = void 0;
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var SalesOpportunityInterestSetupParams_1 = require("./SalesOpportunityInterestSetupParams");
var MessageHeader_1 = require("./MessageHeader");
var CreditLineParams_1 = require("./CreditLineParams");
var EmployeeStatusParams_1 = require("./EmployeeStatusParams");
var ServiceCallTypeParams_1 = require("./ServiceCallTypeParams");
var ServiceCallStatusParams_1 = require("./ServiceCallStatusParams");
var FinancialYearParams_1 = require("./FinancialYearParams");
var EmployeeRoleSetupParams_1 = require("./EmployeeRoleSetupParams");
var NfModelParams_1 = require("./NfModelParams");
var IndiaSacCodeParams_1 = require("./IndiaSacCodeParams");
var QueryAuthGroups_1 = require("./QueryAuthGroups");
var EmployeeIdTypeParams_1 = require("./EmployeeIdTypeParams");
var ServiceCallProblemTypeParams_1 = require("./ServiceCallProblemTypeParams");
var ApprovalTemplateParams_1 = require("./ApprovalTemplateParams");
var AssetDocumentParams_1 = require("./AssetDocumentParams");
var ActivityParams_1 = require("./ActivityParams");
var ProjectParams_1 = require("./ProjectParams");
var CycleCountDeterminationParams_1 = require("./CycleCountDeterminationParams");
var BusinessPartnerPropertyParams_1 = require("./BusinessPartnerPropertyParams");
var AssetGroupParams_1 = require("./AssetGroupParams");
var AssetClassParams_1 = require("./AssetClassParams");
var JournalEntryDocumentTypeParams_1 = require("./JournalEntryDocumentTypeParams");
var B1Sessions_1 = require("./B1Sessions");
var BarCodeParams_1 = require("./BarCodeParams");
var DepreciationAreaParams_1 = require("./DepreciationAreaParams");
var ResourceCapacityParams_1 = require("./ResourceCapacityParams");
var ResourceParams_1 = require("./ResourceParams");
var ExtendedTranslationParams_1 = require("./ExtendedTranslationParams");
var PaymentBlockParams_1 = require("./PaymentBlockParams");
var CockpitParams_1 = require("./CockpitParams");
var TargetGroupParams_1 = require("./TargetGroupParams");
var CertificateSeriesParams_1 = require("./CertificateSeriesParams");
var DeterminationCriteriaParams_1 = require("./DeterminationCriteriaParams");
var DepreciationTypeParams_1 = require("./DepreciationTypeParams");
var TaxWebSiteParams_1 = require("./TaxWebSiteParams");
var BinLocationAttributeParams_1 = require("./BinLocationAttributeParams");
var ReportTypeParams_1 = require("./ReportTypeParams");
var TransactionCodeParams_1 = require("./TransactionCodeParams");
var EnhancedDiscountGroupParams_1 = require("./EnhancedDiscountGroupParams");
var AccrualTypeParams_1 = require("./AccrualTypeParams");
var KpiParams_1 = require("./KpiParams");
var CampaignParams_1 = require("./CampaignParams");
var BoeInstructionParams_1 = require("./BoeInstructionParams");
var SalesOpportunitySourceSetupParams_1 = require("./SalesOpportunitySourceSetupParams");
var SectionParams_1 = require("./SectionParams");
var CashDiscountParams_1 = require("./CashDiscountParams");
var RetornoCodeParams_1 = require("./RetornoCodeParams");
var BinLocationParams_1 = require("./BinLocationParams");
var NfTaxCategoryParams_1 = require("./NfTaxCategoryParams");
var PmcStageTypeData_1 = require("./PmcStageTypeData");
var SalesOpportunityReasonSetupParams_1 = require("./SalesOpportunityReasonSetupParams");
var OccurenceCodeParams_1 = require("./OccurenceCodeParams");
var UnitOfMeasurementGroupParams_1 = require("./UnitOfMeasurementGroupParams");
var BinLocationFieldParams_1 = require("./BinLocationFieldParams");
var ServiceCallOriginParams_1 = require("./ServiceCallOriginParams");
var UnitOfMeasurementParams_1 = require("./UnitOfMeasurementParams");
var DnfCodeSetupParams_1 = require("./DnfCodeSetupParams");
var WarehouseSublevelCodeParams_1 = require("./WarehouseSublevelCodeParams");
var ApprovalRequestParams_1 = require("./ApprovalRequestParams");
var PartnersSetupParams_1 = require("./PartnersSetupParams");
var InventoryPostingParams_1 = require("./InventoryPostingParams");
var IntrastatConfigurationParams_1 = require("./IntrastatConfigurationParams");
var SalesOpportunityCompetitorSetupParams_1 = require("./SalesOpportunityCompetitorSetupParams");
var PeriodCategoryParams_1 = require("./PeriodCategoryParams");
var ApprovalStageParams_1 = require("./ApprovalStageParams");
var BoeDocumentTypeParams_1 = require("./BoeDocumentTypeParams");
var FaAccountDeterminationParams_1 = require("./FaAccountDeterminationParams");
var ProfitCenterParams_1 = require("./ProfitCenterParams");
var StateParams_1 = require("./StateParams");
var BrazilFuelIndexerParams_1 = require("./BrazilFuelIndexerParams");
var DimensionParams_1 = require("./DimensionParams");
var DepartmentParams_1 = require("./DepartmentParams");
var IntegrationPackageParams_1 = require("./IntegrationPackageParams");
var CountryParams_1 = require("./CountryParams");
var ServiceTaxPostingParams_1 = require("./ServiceTaxPostingParams");
var BranchParams_1 = require("./BranchParams");
var TerminationReasonParams_1 = require("./TerminationReasonParams");
var ServiceCallSolutionStatusParams_1 = require("./ServiceCallSolutionStatusParams");
var DunningTermParams_1 = require("./DunningTermParams");
var ServiceCallProblemSubTypeParams_1 = require("./ServiceCallProblemSubTypeParams");
var TrackingNoteParams_1 = require("./TrackingNoteParams");
var TaxCodeDeterminationParams_1 = require("./TaxCodeDeterminationParams");
var DepreciationTypePoolParams_1 = require("./DepreciationTypePoolParams");
var EmployeePositionParams_1 = require("./EmployeePositionParams");
var PredefinedTextParams_1 = require("./PredefinedTextParams");
var AccountCategoryParams_1 = require("./AccountCategoryParams");
var InventoryCountingParams_1 = require("./InventoryCountingParams");
var UserGroupParams_1 = require("./UserGroupParams");
var BoePortfolioParams_1 = require("./BoePortfolioParams");
var EmailGroupParams_1 = require("./EmailGroupParams");
var PmcSubprojectTypeData_1 = require("./PmcSubprojectTypeData");
var PmcAreaData_1 = require("./PmcAreaData");
var PmcPriorityData_1 = require("./PmcPriorityData");
var PmcActivityData_1 = require("./PmcActivityData");
var PmcTaskData_1 = require("./PmcTaskData");
var BankChargesAllocationCodeParams_1 = require("./BankChargesAllocationCodeParams");
var ActivityRecipientListParams_1 = require("./ActivityRecipientListParams");
var CashFlowLineItemParams_1 = require("./CashFlowLineItemParams");
var CampaignResponseTypeParams_1 = require("./CampaignResponseTypeParams");
var CostCenterTypeParams_1 = require("./CostCenterTypeParams");
var DepositParams_1 = require("./DepositParams");
var GovPayCodeParams_1 = require("./GovPayCodeParams");
var AttributeGroupParams_1 = require("./AttributeGroupParams");
var ServiceGroupParams_1 = require("./ServiceGroupParams");
var MaterialGroupParams_1 = require("./MaterialGroupParams");
var ResourcePropertyParams_1 = require("./ResourcePropertyParams");
var BlanketAgreementParams_1 = require("./BlanketAgreementParams");
var CostElementParams_1 = require("./CostElementParams");
var NcmCodeSetupParams_1 = require("./NcmCodeSetupParams");
var TaxCodeDeterminationTcdParams_1 = require("./TaxCodeDeterminationTcdParams");
var CheckLineParams_1 = require("./CheckLineParams");
var RouteStageParams_1 = require("./RouteStageParams");
var InventoryOpeningBalanceParams_1 = require("./InventoryOpeningBalanceParams");
var AssetDepreciationGroupParams_1 = require("./AssetDepreciationGroupParams");
var GlAccountAdvancedRuleParams_1 = require("./GlAccountAdvancedRuleParams");
var FeatureStatus_1 = require("./FeatureStatus");
var ElectronicFileFormatParams_1 = require("./ElectronicFileFormatParams");
var EmployeeTransferParams_1 = require("./EmployeeTransferParams");
var MobileAddOnSettingParams_1 = require("./MobileAddOnSettingParams");
var DeductionTaxSubGroupParams_1 = require("./DeductionTaxSubGroupParams");
var RclRecurringTransaction_1 = require("./RclRecurringTransaction");
var BrazilBeverageIndexerParams_1 = require("./BrazilBeverageIndexerParams");
var NatureOfAssesseeParams_1 = require("./NatureOfAssesseeParams");
var FiscalPrinterParams_1 = require("./FiscalPrinterParams");
var DistributionRuleParams_1 = require("./DistributionRuleParams");
var ResourceGroupParams_1 = require("./ResourceGroupParams");
var LandedCostParams_1 = require("./LandedCostParams");
/**
 * Logout.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function logout(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'Logout', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.logout = logout;
/**
 * Query Service Post Query.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function queryServicePostQuery(parameters) {
    var params = {
        queryPath: new core_1.ActionImportParameter('QueryPath', 'Edm.String', parameters.queryPath),
        queryOption: new core_1.ActionImportParameter('QueryOption', 'Edm.String', parameters.queryOption)
    };
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'QueryService_PostQuery', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.String'); }); }, params);
}
exports.queryServicePostQuery = queryServicePostQuery;
/**
 * Schedule Job Service Run Job Callback.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function scheduleJobServiceRunJobCallback(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ScheduleJobService_RunJobCallback', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.Int32'); }); }, params);
}
exports.scheduleJobServiceRunJobCallback = scheduleJobServiceRunJobCallback;
/**
 * Alert Service Run Alert.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function alertServiceRunAlert(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AlertService_RunAlert', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.Int32'); }); }, params);
}
exports.alertServiceRunAlert = alertServiceRunAlert;
/**
 * Sales Opportunity Interests Setup Service Get Sales Opportunity Interest Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunityInterestsSetupService_GetSalesOpportunityInterestSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, SalesOpportunityInterestSetupParams_1.SalesOpportunityInterestSetupParams); }); }, params);
}
exports.salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList = salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList;
/**
 * Messages Service Get Sent Messages.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function messagesServiceGetSentMessages(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'MessagesService_GetSentMessages', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, MessageHeader_1.MessageHeader); }); }, params);
}
exports.messagesServiceGetSentMessages = messagesServiceGetSentMessages;
/**
 * Credit Lines Service Get Valid Credit Line List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function creditLinesServiceGetValidCreditLineList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CreditLinesService_GetValidCreditLineList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CreditLineParams_1.CreditLineParams); }); }, params);
}
exports.creditLinesServiceGetValidCreditLineList = creditLinesServiceGetValidCreditLineList;
/**
 * Employee Status Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function employeeStatusServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EmployeeStatusService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EmployeeStatusParams_1.EmployeeStatusParams); }); }, params);
}
exports.employeeStatusServiceGetList = employeeStatusServiceGetList;
/**
 * Service Call Types Service Get Service Call Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceCallTypesServiceGetServiceCallTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallTypesService_GetServiceCallTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceCallTypeParams_1.ServiceCallTypeParams); }); }, params);
}
exports.serviceCallTypesServiceGetServiceCallTypeList = serviceCallTypesServiceGetServiceCallTypeList;
/**
 * Service Call Status Service Get Service Call Status List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceCallStatusServiceGetServiceCallStatusList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallStatusService_GetServiceCallStatusList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceCallStatusParams_1.ServiceCallStatusParams); }); }, params);
}
exports.serviceCallStatusServiceGetServiceCallStatusList = serviceCallStatusServiceGetServiceCallStatusList;
/**
 * Financial Years Service Get Financial Year List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function financialYearsServiceGetFinancialYearList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'FinancialYearsService_GetFinancialYearList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, FinancialYearParams_1.FinancialYearParams); }); }, params);
}
exports.financialYearsServiceGetFinancialYearList = financialYearsServiceGetFinancialYearList;
/**
 * Employee Roles Setup Service Get Employee Role Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function employeeRolesSetupServiceGetEmployeeRoleSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EmployeeRolesSetupService_GetEmployeeRoleSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EmployeeRoleSetupParams_1.EmployeeRoleSetupParams); }); }, params);
}
exports.employeeRolesSetupServiceGetEmployeeRoleSetupList = employeeRolesSetupServiceGetEmployeeRoleSetupList;
/**
 * Nf Models Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function nfModelsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'NFModelsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, NfModelParams_1.NfModelParams); }); }, params);
}
exports.nfModelsServiceGetList = nfModelsServiceGetList;
/**
 * India Sac Code Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function indiaSacCodeServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'IndiaSacCodeService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, IndiaSacCodeParams_1.IndiaSacCodeParams); }); }, params);
}
exports.indiaSacCodeServiceGetList = indiaSacCodeServiceGetList;
/**
 * Query Auth Group Service Get Query Auth Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function queryAuthGroupServiceGetQueryAuthGroupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'QueryAuthGroupService_GetQueryAuthGroupList', function (data) { return core_1.transformReturnValueForEntityListV4(data, QueryAuthGroups_1.QueryAuthGroups); }, params);
}
exports.queryAuthGroupServiceGetQueryAuthGroupList = queryAuthGroupServiceGetQueryAuthGroupList;
/**
 * Employee Id Type Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function employeeIdTypeServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EmployeeIDTypeService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EmployeeIdTypeParams_1.EmployeeIdTypeParams); }); }, params);
}
exports.employeeIdTypeServiceGetList = employeeIdTypeServiceGetList;
/**
 * Service Call Problem Types Service Get Service Call Problem Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceCallProblemTypesServiceGetServiceCallProblemTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallProblemTypesService_GetServiceCallProblemTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceCallProblemTypeParams_1.ServiceCallProblemTypeParams); }); }, params);
}
exports.serviceCallProblemTypesServiceGetServiceCallProblemTypeList = serviceCallProblemTypesServiceGetServiceCallProblemTypeList;
/**
 * Approval Templates Service Get Approval Template List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function approvalTemplatesServiceGetApprovalTemplateList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ApprovalTemplatesService_GetApprovalTemplateList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ApprovalTemplateParams_1.ApprovalTemplateParams); }); }, params);
}
exports.approvalTemplatesServiceGetApprovalTemplateList = approvalTemplatesServiceGetApprovalTemplateList;
/**
 * Asset Manual Depreciation Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetManualDepreciationServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetManualDepreciationService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetDocumentParams_1.AssetDocumentParams); }); }, params);
}
exports.assetManualDepreciationServiceGetList = assetManualDepreciationServiceGetList;
/**
 * Activities Service Get Activity List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function activitiesServiceGetActivityList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ActivitiesService_GetActivityList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ActivityParams_1.ActivityParams); }); }, params);
}
exports.activitiesServiceGetActivityList = activitiesServiceGetActivityList;
/**
 * Projects Service Get Project List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectsServiceGetProjectList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectsService_GetProjectList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ProjectParams_1.ProjectParams); }); }, params);
}
exports.projectsServiceGetProjectList = projectsServiceGetProjectList;
/**
 * Cycle Count Determinations Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function cycleCountDeterminationsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CycleCountDeterminationsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CycleCountDeterminationParams_1.CycleCountDeterminationParams); }); }, params);
}
exports.cycleCountDeterminationsServiceGetList = cycleCountDeterminationsServiceGetList;
/**
 * Returns Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function returnsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ReturnsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.returnsServiceHandleApprovalRequest = returnsServiceHandleApprovalRequest;
/**
 * Sbo Bob Service Set Currency Rate.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sboBobServiceSetCurrencyRate(parameters) {
    var params = {
        rateDate: new core_1.ActionImportParameter('RateDate', 'Edm.String', parameters.rateDate),
        currency: new core_1.ActionImportParameter('Currency', 'Edm.String', parameters.currency),
        rate: new core_1.ActionImportParameter('Rate', 'Edm.String', parameters.rate)
    };
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'SBOBobService_SetCurrencyRate', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.sboBobServiceSetCurrencyRate = sboBobServiceSetCurrencyRate;
/**
 * Asset Capitalization Credit Memo Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetCapitalizationCreditMemoServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetCapitalizationCreditMemoService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetDocumentParams_1.AssetDocumentParams); }); }, params);
}
exports.assetCapitalizationCreditMemoServiceGetList = assetCapitalizationCreditMemoServiceGetList;
/**
 * Business Partner Properties Service Get Business Partner Property List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function businessPartnerPropertiesServiceGetBusinessPartnerPropertyList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BusinessPartnerPropertiesService_GetBusinessPartnerPropertyList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BusinessPartnerPropertyParams_1.BusinessPartnerPropertyParams); }); }, params);
}
exports.businessPartnerPropertiesServiceGetBusinessPartnerPropertyList = businessPartnerPropertiesServiceGetBusinessPartnerPropertyList;
/**
 * Asset Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetGroupParams_1.AssetGroupParams); }); }, params);
}
exports.assetGroupsServiceGetList = assetGroupsServiceGetList;
/**
 * Asset Classes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetClassesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetClassesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetClassParams_1.AssetClassParams); }); }, params);
}
exports.assetClassesServiceGetList = assetClassesServiceGetList;
/**
 * Journal Entry Document Type Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function journalEntryDocumentTypeServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'JournalEntryDocumentTypeService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, JournalEntryDocumentTypeParams_1.JournalEntryDocumentTypeParams); }); }, params);
}
exports.journalEntryDocumentTypeServiceGetList = journalEntryDocumentTypeServiceGetList;
/**
 * Login.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function login(parameters) {
    var params = {
        companyDb: new core_1.ActionImportParameter('CompanyDB', 'Edm.String', parameters.companyDb),
        userName: new core_1.ActionImportParameter('UserName', 'Edm.String', parameters.userName),
        password: new core_1.ActionImportParameter('Password', 'Edm.String', parameters.password)
    };
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'Login', function (data) { return core_1.transformReturnValueForEntityV4(data, B1Sessions_1.B1Sessions); }, params);
}
exports.login = login;
/**
 * Bar Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function barCodesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BarCodesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BarCodeParams_1.BarCodeParams); }); }, params);
}
exports.barCodesServiceGetList = barCodesServiceGetList;
/**
 * Stock Transfer Draft Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function stockTransferDraftServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'StockTransferDraftService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.stockTransferDraftServiceHandleApprovalRequest = stockTransferDraftServiceHandleApprovalRequest;
/**
 * Depreciation Areas Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function depreciationAreasServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DepreciationAreasService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DepreciationAreaParams_1.DepreciationAreaParams); }); }, params);
}
exports.depreciationAreasServiceGetList = depreciationAreasServiceGetList;
/**
 * Resource Capacities Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function resourceCapacitiesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ResourceCapacitiesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ResourceCapacityParams_1.ResourceCapacityParams); }); }, params);
}
exports.resourceCapacitiesServiceGetList = resourceCapacitiesServiceGetList;
/**
 * Resources Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function resourcesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ResourcesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ResourceParams_1.ResourceParams); }); }, params);
}
exports.resourcesServiceGetList = resourcesServiceGetList;
/**
 * Extended Translations Service Get Extended Translation List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function extendedTranslationsServiceGetExtendedTranslationList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ExtendedTranslationsService_GetExtendedTranslationList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ExtendedTranslationParams_1.ExtendedTranslationParams); }); }, params);
}
exports.extendedTranslationsServiceGetExtendedTranslationList = extendedTranslationsServiceGetExtendedTranslationList;
/**
 * Payment Blocks Service Get Payment Block List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function paymentBlocksServiceGetPaymentBlockList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PaymentBlocksService_GetPaymentBlockList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PaymentBlockParams_1.PaymentBlockParams); }); }, params);
}
exports.paymentBlocksServiceGetPaymentBlockList = paymentBlocksServiceGetPaymentBlockList;
/**
 * Cockpits Service Get User Cockpit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function cockpitsServiceGetUserCockpitList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CockpitsService_GetUserCockpitList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CockpitParams_1.CockpitParams); }); }, params);
}
exports.cockpitsServiceGetUserCockpitList = cockpitsServiceGetUserCockpitList;
/**
 * Stock Transfer Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function stockTransferServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'StockTransferService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.stockTransferServiceHandleApprovalRequest = stockTransferServiceHandleApprovalRequest;
/**
 * Asset Capitalization Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetCapitalizationServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetCapitalizationService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetDocumentParams_1.AssetDocumentParams); }); }, params);
}
exports.assetCapitalizationServiceGetList = assetCapitalizationServiceGetList;
/**
 * Target Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function targetGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TargetGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TargetGroupParams_1.TargetGroupParams); }); }, params);
}
exports.targetGroupsServiceGetList = targetGroupsServiceGetList;
/**
 * Certificate Series Service Get Certificate Series List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function certificateSeriesServiceGetCertificateSeriesList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CertificateSeriesService_GetCertificateSeriesList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CertificateSeriesParams_1.CertificateSeriesParams); }); }, params);
}
exports.certificateSeriesServiceGetCertificateSeriesList = certificateSeriesServiceGetCertificateSeriesList;
/**
 * Correction Purchase Invoice Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function correctionPurchaseInvoiceServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CorrectionPurchaseInvoiceService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.correctionPurchaseInvoiceServiceHandleApprovalRequest = correctionPurchaseInvoiceServiceHandleApprovalRequest;
/**
 * Determination Criterias Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function determinationCriteriasServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DeterminationCriteriasService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DeterminationCriteriaParams_1.DeterminationCriteriaParams); }); }, params);
}
exports.determinationCriteriasServiceGetList = determinationCriteriasServiceGetList;
/**
 * Correction Purchase Invoice Reversal Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function correctionPurchaseInvoiceReversalServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CorrectionPurchaseInvoiceReversalService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.correctionPurchaseInvoiceReversalServiceHandleApprovalRequest = correctionPurchaseInvoiceReversalServiceHandleApprovalRequest;
/**
 * Depreciation Types Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function depreciationTypesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DepreciationTypesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DepreciationTypeParams_1.DepreciationTypeParams); }); }, params);
}
exports.depreciationTypesServiceGetList = depreciationTypesServiceGetList;
/**
 * Tax Web Sites Service Get Default Web Site.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function taxWebSitesServiceGetDefaultWebSite(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TaxWebSitesService_GetDefaultWebSite', function (data) { return core_1.transformReturnValueForComplexTypeV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TaxWebSiteParams_1.TaxWebSiteParams); }); }, params);
}
exports.taxWebSitesServiceGetDefaultWebSite = taxWebSitesServiceGetDefaultWebSite;
/**
 * Bin Location Attributes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function binLocationAttributesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BinLocationAttributesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BinLocationAttributeParams_1.BinLocationAttributeParams); }); }, params);
}
exports.binLocationAttributesServiceGetList = binLocationAttributesServiceGetList;
/**
 * Report Types Service Get Report Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function reportTypesServiceGetReportTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ReportTypesService_GetReportTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ReportTypeParams_1.ReportTypeParams); }); }, params);
}
exports.reportTypesServiceGetReportTypeList = reportTypesServiceGetReportTypeList;
/**
 * Transaction Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function transactionCodesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TransactionCodesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TransactionCodeParams_1.TransactionCodeParams); }); }, params);
}
exports.transactionCodesServiceGetList = transactionCodesServiceGetList;
/**
 * Enhanced Discount Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function enhancedDiscountGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EnhancedDiscountGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EnhancedDiscountGroupParams_1.EnhancedDiscountGroupParams); }); }, params);
}
exports.enhancedDiscountGroupsServiceGetList = enhancedDiscountGroupsServiceGetList;
/**
 * Purchase Request Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseRequestServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseRequestService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseRequestServiceHandleApprovalRequest = purchaseRequestServiceHandleApprovalRequest;
/**
 * Purchase Quotations Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseQuotationsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseQuotationsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseQuotationsServiceHandleApprovalRequest = purchaseQuotationsServiceHandleApprovalRequest;
/**
 * Accrual Types Service Get Accrual Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function accrualTypesServiceGetAccrualTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AccrualTypesService_GetAccrualTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AccrualTypeParams_1.AccrualTypeParams); }); }, params);
}
exports.accrualTypesServiceGetAccrualTypeList = accrualTypesServiceGetAccrualTypeList;
/**
 * Correction Invoice Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function correctionInvoiceServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CorrectionInvoiceService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.correctionInvoiceServiceHandleApprovalRequest = correctionInvoiceServiceHandleApprovalRequest;
/**
 * Kp Is Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function kpIsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'KPIsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, KpiParams_1.KpiParams); }); }, params);
}
exports.kpIsServiceGetList = kpIsServiceGetList;
/**
 * Purchase Invoices Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseInvoicesServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseInvoicesService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseInvoicesServiceHandleApprovalRequest = purchaseInvoicesServiceHandleApprovalRequest;
/**
 * Campaigns Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function campaignsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CampaignsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CampaignParams_1.CampaignParams); }); }, params);
}
exports.campaignsServiceGetList = campaignsServiceGetList;
/**
 * Boe Instructions Service Get Boe Instruction List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function boeInstructionsServiceGetBoeInstructionList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BOEInstructionsService_GetBOEInstructionList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BoeInstructionParams_1.BoeInstructionParams); }); }, params);
}
exports.boeInstructionsServiceGetBoeInstructionList = boeInstructionsServiceGetBoeInstructionList;
/**
 * Sales Opportunity Sources Setup Service Get Sales Opportunity Source Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunitySourcesSetupService_GetSalesOpportunitySourceSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, SalesOpportunitySourceSetupParams_1.SalesOpportunitySourceSetupParams); }); }, params);
}
exports.salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList = salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList;
/**
 * Sections Service Get Section List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function sectionsServiceGetSectionList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'SectionsService_GetSectionList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, SectionParams_1.SectionParams); }); }, params);
}
exports.sectionsServiceGetSectionList = sectionsServiceGetSectionList;
/**
 * Cash Discounts Service Get Cash Discount List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function cashDiscountsServiceGetCashDiscountList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CashDiscountsService_GetCashDiscountList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CashDiscountParams_1.CashDiscountParams); }); }, params);
}
exports.cashDiscountsServiceGetCashDiscountList = cashDiscountsServiceGetCashDiscountList;
/**
 * Retorno Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function retornoCodesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'RetornoCodesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, RetornoCodeParams_1.RetornoCodeParams); }); }, params);
}
exports.retornoCodesServiceGetList = retornoCodesServiceGetList;
/**
 * Bin Locations Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function binLocationsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BinLocationsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BinLocationParams_1.BinLocationParams); }); }, params);
}
exports.binLocationsServiceGetList = binLocationsServiceGetList;
/**
 * Nf Tax Categories Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function nfTaxCategoriesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'NFTaxCategoriesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, NfTaxCategoryParams_1.NfTaxCategoryParams); }); }, params);
}
exports.nfTaxCategoriesServiceGetList = nfTaxCategoriesServiceGetList;
/**
 * Project Management Configuration Service Get Stage Types.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectManagementConfigurationServiceGetStageTypes(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetStageTypes', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PmcStageTypeData_1.PmcStageTypeData); }); }, params);
}
exports.projectManagementConfigurationServiceGetStageTypes = projectManagementConfigurationServiceGetStageTypes;
/**
 * Sales Opportunity Reasons Setup Service Get Sales Opportunity Reason Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunityReasonsSetupService_GetSalesOpportunityReasonSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, SalesOpportunityReasonSetupParams_1.SalesOpportunityReasonSetupParams); }); }, params);
}
exports.salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList = salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList;
/**
 * Occurrence Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function occurrenceCodesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'OccurrenceCodesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, OccurenceCodeParams_1.OccurenceCodeParams); }); }, params);
}
exports.occurrenceCodesServiceGetList = occurrenceCodesServiceGetList;
/**
 * Unit Of Measurement Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function unitOfMeasurementGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'UnitOfMeasurementGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, UnitOfMeasurementGroupParams_1.UnitOfMeasurementGroupParams); }); }, params);
}
exports.unitOfMeasurementGroupsServiceGetList = unitOfMeasurementGroupsServiceGetList;
/**
 * Bin Location Fields Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function binLocationFieldsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BinLocationFieldsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BinLocationFieldParams_1.BinLocationFieldParams); }); }, params);
}
exports.binLocationFieldsServiceGetList = binLocationFieldsServiceGetList;
/**
 * Tax Web Sites Service Get Tax Web Site List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function taxWebSitesServiceGetTaxWebSiteList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TaxWebSitesService_GetTaxWebSiteList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TaxWebSiteParams_1.TaxWebSiteParams); }); }, params);
}
exports.taxWebSitesServiceGetTaxWebSiteList = taxWebSitesServiceGetTaxWebSiteList;
/**
 * Service Call Origins Service Get Service Call Origin List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceCallOriginsServiceGetServiceCallOriginList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallOriginsService_GetServiceCallOriginList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceCallOriginParams_1.ServiceCallOriginParams); }); }, params);
}
exports.serviceCallOriginsServiceGetServiceCallOriginList = serviceCallOriginsServiceGetServiceCallOriginList;
/**
 * Credit Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function creditNotesServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CreditNotesService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.creditNotesServiceHandleApprovalRequest = creditNotesServiceHandleApprovalRequest;
/**
 * Unit Of Measurements Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function unitOfMeasurementsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'UnitOfMeasurementsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, UnitOfMeasurementParams_1.UnitOfMeasurementParams); }); }, params);
}
exports.unitOfMeasurementsServiceGetList = unitOfMeasurementsServiceGetList;
/**
 * Dnf Code Setup Service Get Dnf Code Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function dnfCodeSetupServiceGetDnfCodeSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DNFCodeSetupService_GetDNFCodeSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DnfCodeSetupParams_1.DnfCodeSetupParams); }); }, params);
}
exports.dnfCodeSetupServiceGetDnfCodeSetupList = dnfCodeSetupServiceGetDnfCodeSetupList;
/**
 * Warehouse Sublevel Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function warehouseSublevelCodesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'WarehouseSublevelCodesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, WarehouseSublevelCodeParams_1.WarehouseSublevelCodeParams); }); }, params);
}
exports.warehouseSublevelCodesServiceGetList = warehouseSublevelCodesServiceGetList;
/**
 * Approval Requests Service Get All Approval Requests List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function approvalRequestsServiceGetAllApprovalRequestsList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ApprovalRequestsService_GetAllApprovalRequestsList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ApprovalRequestParams_1.ApprovalRequestParams); }); }, params);
}
exports.approvalRequestsServiceGetAllApprovalRequestsList = approvalRequestsServiceGetAllApprovalRequestsList;
/**
 * Partners Setups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function partnersSetupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PartnersSetupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PartnersSetupParams_1.PartnersSetupParams); }); }, params);
}
exports.partnersSetupsServiceGetList = partnersSetupsServiceGetList;
/**
 * Inventory Postings Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function inventoryPostingsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InventoryPostingsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, InventoryPostingParams_1.InventoryPostingParams); }); }, params);
}
exports.inventoryPostingsServiceGetList = inventoryPostingsServiceGetList;
/**
 * Inventory Gen Entry Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function inventoryGenEntryServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InventoryGenEntryService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.inventoryGenEntryServiceHandleApprovalRequest = inventoryGenEntryServiceHandleApprovalRequest;
/**
 * Intrastat Configuration Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function intrastatConfigurationServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'IntrastatConfigurationService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, IntrastatConfigurationParams_1.IntrastatConfigurationParams); }); }, params);
}
exports.intrastatConfigurationServiceGetList = intrastatConfigurationServiceGetList;
/**
 * Sales Opportunity Competitors Setup Service Get Sales Opportunity Competitor Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'SalesOpportunityCompetitorsSetupService_GetSalesOpportunityCompetitorSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, SalesOpportunityCompetitorSetupParams_1.SalesOpportunityCompetitorSetupParams); }); }, params);
}
exports.salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList = salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList;
/**
 * Company Service Get Periods.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function companyServiceGetPeriods(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CompanyService_GetPeriods', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PeriodCategoryParams_1.PeriodCategoryParams); }); }, params);
}
exports.companyServiceGetPeriods = companyServiceGetPeriods;
/**
 * Correction Invoice Reversal Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function correctionInvoiceReversalServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CorrectionInvoiceReversalService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.correctionInvoiceReversalServiceHandleApprovalRequest = correctionInvoiceReversalServiceHandleApprovalRequest;
/**
 * Purchase Delivery Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseDeliveryNotesServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseDeliveryNotesService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseDeliveryNotesServiceHandleApprovalRequest = purchaseDeliveryNotesServiceHandleApprovalRequest;
/**
 * Cockpits Service Get Template Cockpit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function cockpitsServiceGetTemplateCockpitList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CockpitsService_GetTemplateCockpitList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CockpitParams_1.CockpitParams); }); }, params);
}
exports.cockpitsServiceGetTemplateCockpitList = cockpitsServiceGetTemplateCockpitList;
/**
 * Approval Stages Service Get Approval Stage List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function approvalStagesServiceGetApprovalStageList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ApprovalStagesService_GetApprovalStageList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ApprovalStageParams_1.ApprovalStageParams); }); }, params);
}
exports.approvalStagesServiceGetApprovalStageList = approvalStagesServiceGetApprovalStageList;
/**
 * Boe Document Types Service Get Boe Document Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function boeDocumentTypesServiceGetBoeDocumentTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BOEDocumentTypesService_GetBOEDocumentTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BoeDocumentTypeParams_1.BoeDocumentTypeParams); }); }, params);
}
exports.boeDocumentTypesServiceGetBoeDocumentTypeList = boeDocumentTypesServiceGetBoeDocumentTypeList;
/**
 * Invoices Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function invoicesServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InvoicesService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.invoicesServiceHandleApprovalRequest = invoicesServiceHandleApprovalRequest;
/**
 * Fa Account Determinations Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function faAccountDeterminationsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'FAAccountDeterminationsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, FaAccountDeterminationParams_1.FaAccountDeterminationParams); }); }, params);
}
exports.faAccountDeterminationsServiceGetList = faAccountDeterminationsServiceGetList;
/**
 * Profit Centers Service Get Profit Center List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function profitCentersServiceGetProfitCenterList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProfitCentersService_GetProfitCenterList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ProfitCenterParams_1.ProfitCenterParams); }); }, params);
}
exports.profitCentersServiceGetProfitCenterList = profitCentersServiceGetProfitCenterList;
/**
 * States Service Get State List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function statesServiceGetStateList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'StatesService_GetStateList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, StateParams_1.StateParams); }); }, params);
}
exports.statesServiceGetStateList = statesServiceGetStateList;
/**
 * Drafts Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function draftsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DraftsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.draftsServiceHandleApprovalRequest = draftsServiceHandleApprovalRequest;
/**
 * Approval Requests Service Get Open Approval Request List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function approvalRequestsServiceGetOpenApprovalRequestList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ApprovalRequestsService_GetOpenApprovalRequestList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ApprovalRequestParams_1.ApprovalRequestParams); }); }, params);
}
exports.approvalRequestsServiceGetOpenApprovalRequestList = approvalRequestsServiceGetOpenApprovalRequestList;
/**
 * Brazil Fuel Indexers Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function brazilFuelIndexersServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BrazilFuelIndexersService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BrazilFuelIndexerParams_1.BrazilFuelIndexerParams); }); }, params);
}
exports.brazilFuelIndexersServiceGetList = brazilFuelIndexersServiceGetList;
/**
 * Down Payments Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function downPaymentsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DownPaymentsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.downPaymentsServiceHandleApprovalRequest = downPaymentsServiceHandleApprovalRequest;
/**
 * Dimensions Service Get Dimension List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function dimensionsServiceGetDimensionList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DimensionsService_GetDimensionList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DimensionParams_1.DimensionParams); }); }, params);
}
exports.dimensionsServiceGetDimensionList = dimensionsServiceGetDimensionList;
/**
 * Departments Service Get Department List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function departmentsServiceGetDepartmentList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DepartmentsService_GetDepartmentList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DepartmentParams_1.DepartmentParams); }); }, params);
}
exports.departmentsServiceGetDepartmentList = departmentsServiceGetDepartmentList;
/**
 * Integration Packages Configure Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function integrationPackagesConfigureServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'IntegrationPackagesConfigureService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, IntegrationPackageParams_1.IntegrationPackageParams); }); }, params);
}
exports.integrationPackagesConfigureServiceGetList = integrationPackagesConfigureServiceGetList;
/**
 * Countries Service Get Country List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function countriesServiceGetCountryList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CountriesService_GetCountryList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CountryParams_1.CountryParams); }); }, params);
}
exports.countriesServiceGetCountryList = countriesServiceGetCountryList;
/**
 * Purchase Down Payments Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseDownPaymentsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseDownPaymentsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseDownPaymentsServiceHandleApprovalRequest = purchaseDownPaymentsServiceHandleApprovalRequest;
/**
 * Approval Requests Service Get Approval Request List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function approvalRequestsServiceGetApprovalRequestList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ApprovalRequestsService_GetApprovalRequestList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ApprovalRequestParams_1.ApprovalRequestParams); }); }, params);
}
exports.approvalRequestsServiceGetApprovalRequestList = approvalRequestsServiceGetApprovalRequestList;
/**
 * Service Tax Posting Service Get Taxable Deliveries.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceTaxPostingServiceGetTaxableDeliveries(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceTaxPostingService_GetTaxableDeliveries', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceTaxPostingParams_1.ServiceTaxPostingParams); }); }, params);
}
exports.serviceTaxPostingServiceGetTaxableDeliveries = serviceTaxPostingServiceGetTaxableDeliveries;
/**
 * Branches Service Get Branch List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function branchesServiceGetBranchList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BranchesService_GetBranchList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BranchParams_1.BranchParams); }); }, params);
}
exports.branchesServiceGetBranchList = branchesServiceGetBranchList;
/**
 * Termination Reason Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function terminationReasonServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TerminationReasonService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TerminationReasonParams_1.TerminationReasonParams); }); }, params);
}
exports.terminationReasonServiceGetList = terminationReasonServiceGetList;
/**
 * Service Call Solution Status Service Get Service Call Solution Status List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallSolutionStatusService_GetServiceCallSolutionStatusList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceCallSolutionStatusParams_1.ServiceCallSolutionStatusParams); }); }, params);
}
exports.serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList = serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList;
/**
 * Dunning Terms Service Get Dunning Term List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function dunningTermsServiceGetDunningTermList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DunningTermsService_GetDunningTermList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DunningTermParams_1.DunningTermParams); }); }, params);
}
exports.dunningTermsServiceGetDunningTermList = dunningTermsServiceGetDunningTermList;
/**
 * Asset Retirement Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetRetirementServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetRetirementService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetDocumentParams_1.AssetDocumentParams); }); }, params);
}
exports.assetRetirementServiceGetList = assetRetirementServiceGetList;
/**
 * Service Call Problem Sub Types Service Get Service Call Problem Sub Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceCallProblemSubTypesService_GetServiceCallProblemSubTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceCallProblemSubTypeParams_1.ServiceCallProblemSubTypeParams); }); }, params);
}
exports.serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList = serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList;
/**
 * Tracking Notes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function trackingNotesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TrackingNotesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TrackingNoteParams_1.TrackingNoteParams); }); }, params);
}
exports.trackingNotesServiceGetList = trackingNotesServiceGetList;
/**
 * Tax Code Determinations Service Get Tax Code Determination List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function taxCodeDeterminationsServiceGetTaxCodeDeterminationList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TaxCodeDeterminationsService_GetTaxCodeDeterminationList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TaxCodeDeterminationParams_1.TaxCodeDeterminationParams); }); }, params);
}
exports.taxCodeDeterminationsServiceGetTaxCodeDeterminationList = taxCodeDeterminationsServiceGetTaxCodeDeterminationList;
/**
 * Depreciation Type Pools Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function depreciationTypePoolsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DepreciationTypePoolsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DepreciationTypePoolParams_1.DepreciationTypePoolParams); }); }, params);
}
exports.depreciationTypePoolsServiceGetList = depreciationTypePoolsServiceGetList;
/**
 * Purchase Returns Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseReturnsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseReturnsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseReturnsServiceHandleApprovalRequest = purchaseReturnsServiceHandleApprovalRequest;
/**
 * Employee Position Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function employeePositionServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EmployeePositionService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EmployeePositionParams_1.EmployeePositionParams); }); }, params);
}
exports.employeePositionServiceGetList = employeePositionServiceGetList;
/**
 * Predefined Texts Service Get Predefined Text List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function predefinedTextsServiceGetPredefinedTextList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PredefinedTextsService_GetPredefinedTextList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PredefinedTextParams_1.PredefinedTextParams); }); }, params);
}
exports.predefinedTextsServiceGetPredefinedTextList = predefinedTextsServiceGetPredefinedTextList;
/**
 * Account Category Service Get Category List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function accountCategoryServiceGetCategoryList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AccountCategoryService_GetCategoryList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AccountCategoryParams_1.AccountCategoryParams); }); }, params);
}
exports.accountCategoryServiceGetCategoryList = accountCategoryServiceGetCategoryList;
/**
 * Inventory Countings Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function inventoryCountingsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InventoryCountingsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, InventoryCountingParams_1.InventoryCountingParams); }); }, params);
}
exports.inventoryCountingsServiceGetList = inventoryCountingsServiceGetList;
/**
 * Purchase Orders Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseOrdersServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseOrdersService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseOrdersServiceHandleApprovalRequest = purchaseOrdersServiceHandleApprovalRequest;
/**
 * Quotations Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function quotationsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'QuotationsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.quotationsServiceHandleApprovalRequest = quotationsServiceHandleApprovalRequest;
/**
 * Cockpits Service Get Cockpit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function cockpitsServiceGetCockpitList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CockpitsService_GetCockpitList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CockpitParams_1.CockpitParams); }); }, params);
}
exports.cockpitsServiceGetCockpitList = cockpitsServiceGetCockpitList;
/**
 * User Group Service Get User Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function userGroupServiceGetUserGroupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'UserGroupService_GetUserGroupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, UserGroupParams_1.UserGroupParams); }); }, params);
}
exports.userGroupServiceGetUserGroupList = userGroupServiceGetUserGroupList;
/**
 * Boe Portfolios Service Get Boe Portfolio List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function boePortfoliosServiceGetBoePortfolioList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BOEPortfoliosService_GetBOEPortfolioList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BoePortfolioParams_1.BoePortfolioParams); }); }, params);
}
exports.boePortfoliosServiceGetBoePortfolioList = boePortfoliosServiceGetBoePortfolioList;
/**
 * Purchase Credit Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function purchaseCreditNotesServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'PurchaseCreditNotesService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.purchaseCreditNotesServiceHandleApprovalRequest = purchaseCreditNotesServiceHandleApprovalRequest;
/**
 * Email Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function emailGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EmailGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EmailGroupParams_1.EmailGroupParams); }); }, params);
}
exports.emailGroupsServiceGetList = emailGroupsServiceGetList;
/**
 * Project Management Configuration Service Get Subproject Types.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectManagementConfigurationServiceGetSubprojectTypes(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetSubprojectTypes', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PmcSubprojectTypeData_1.PmcSubprojectTypeData); }); }, params);
}
exports.projectManagementConfigurationServiceGetSubprojectTypes = projectManagementConfigurationServiceGetSubprojectTypes;
/**
 * Project Management Configuration Service Get Areas.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectManagementConfigurationServiceGetAreas(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetAreas', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PmcAreaData_1.PmcAreaData); }); }, params);
}
exports.projectManagementConfigurationServiceGetAreas = projectManagementConfigurationServiceGetAreas;
/**
 * Inventory Transfer Requests Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function inventoryTransferRequestsServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InventoryTransferRequestsService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.inventoryTransferRequestsServiceHandleApprovalRequest = inventoryTransferRequestsServiceHandleApprovalRequest;
/**
 * Project Management Configuration Service Get Priorities.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectManagementConfigurationServiceGetPriorities(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetPriorities', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PmcPriorityData_1.PmcPriorityData); }); }, params);
}
exports.projectManagementConfigurationServiceGetPriorities = projectManagementConfigurationServiceGetPriorities;
/**
 * Project Management Configuration Service Get Activities.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectManagementConfigurationServiceGetActivities(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetActivities', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PmcActivityData_1.PmcActivityData); }); }, params);
}
exports.projectManagementConfigurationServiceGetActivities = projectManagementConfigurationServiceGetActivities;
/**
 * Project Management Configuration Service Get Tasks.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function projectManagementConfigurationServiceGetTasks(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ProjectManagementConfigurationService_GetTasks', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, PmcTaskData_1.PmcTaskData); }); }, params);
}
exports.projectManagementConfigurationServiceGetTasks = projectManagementConfigurationServiceGetTasks;
/**
 * Inventory Gen Exit Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function inventoryGenExitServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InventoryGenExitService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.inventoryGenExitServiceHandleApprovalRequest = inventoryGenExitServiceHandleApprovalRequest;
/**
 * Return Request Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function returnRequestServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ReturnRequestService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.returnRequestServiceHandleApprovalRequest = returnRequestServiceHandleApprovalRequest;
/**
 * Goods Return Request Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function goodsReturnRequestServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'GoodsReturnRequestService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.goodsReturnRequestServiceHandleApprovalRequest = goodsReturnRequestServiceHandleApprovalRequest;
/**
 * Bank Charges Allocation Codes Service Get Bank Charges Allocation Code List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BankChargesAllocationCodesService_GetBankChargesAllocationCodeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BankChargesAllocationCodeParams_1.BankChargesAllocationCodeParams); }); }, params);
}
exports.bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList = bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList;
/**
 * Activity Recipient Lists Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function activityRecipientListsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ActivityRecipientListsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ActivityRecipientListParams_1.ActivityRecipientListParams); }); }, params);
}
exports.activityRecipientListsServiceGetList = activityRecipientListsServiceGetList;
/**
 * Cash Flow Line Items Service Get Cash Flow Line Item List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function cashFlowLineItemsServiceGetCashFlowLineItemList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CashFlowLineItemsService_GetCashFlowLineItemList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CashFlowLineItemParams_1.CashFlowLineItemParams); }); }, params);
}
exports.cashFlowLineItemsServiceGetCashFlowLineItemList = cashFlowLineItemsServiceGetCashFlowLineItemList;
/**
 * Campaign Response Type Service Get Response Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function campaignResponseTypeServiceGetResponseTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CampaignResponseTypeService_GetResponseTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CampaignResponseTypeParams_1.CampaignResponseTypeParams); }); }, params);
}
exports.campaignResponseTypeServiceGetResponseTypeList = campaignResponseTypeServiceGetResponseTypeList;
/**
 * Cost Center Types Service Get Cost Center Type List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function costCenterTypesServiceGetCostCenterTypeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CostCenterTypesService_GetCostCenterTypeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CostCenterTypeParams_1.CostCenterTypeParams); }); }, params);
}
exports.costCenterTypesServiceGetCostCenterTypeList = costCenterTypesServiceGetCostCenterTypeList;
/**
 * Asset Transfer Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetTransferServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetTransferService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetDocumentParams_1.AssetDocumentParams); }); }, params);
}
exports.assetTransferServiceGetList = assetTransferServiceGetList;
/**
 * Deposits Service Get Deposit List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function depositsServiceGetDepositList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DepositsService_GetDepositList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DepositParams_1.DepositParams); }); }, params);
}
exports.depositsServiceGetDepositList = depositsServiceGetDepositList;
/**
 * Gov Pay Codes Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function govPayCodesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'GovPayCodesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, GovPayCodeParams_1.GovPayCodeParams); }); }, params);
}
exports.govPayCodesServiceGetList = govPayCodesServiceGetList;
/**
 * Attribute Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function attributeGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AttributeGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AttributeGroupParams_1.AttributeGroupParams); }); }, params);
}
exports.attributeGroupsServiceGetList = attributeGroupsServiceGetList;
/**
 * Service Groups Service Get Service Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function serviceGroupsServiceGetServiceGroupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ServiceGroupsService_GetServiceGroupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ServiceGroupParams_1.ServiceGroupParams); }); }, params);
}
exports.serviceGroupsServiceGetServiceGroupList = serviceGroupsServiceGetServiceGroupList;
/**
 * Material Groups Service Get Material Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function materialGroupsServiceGetMaterialGroupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'MaterialGroupsService_GetMaterialGroupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, MaterialGroupParams_1.MaterialGroupParams); }); }, params);
}
exports.materialGroupsServiceGetMaterialGroupList = materialGroupsServiceGetMaterialGroupList;
/**
 * Resource Properties Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function resourcePropertiesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ResourcePropertiesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ResourcePropertyParams_1.ResourcePropertyParams); }); }, params);
}
exports.resourcePropertiesServiceGetList = resourcePropertiesServiceGetList;
/**
 * Blanket Agreements Service Get Blanket Agreement List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function blanketAgreementsServiceGetBlanketAgreementList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BlanketAgreementsService_GetBlanketAgreementList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BlanketAgreementParams_1.BlanketAgreementParams); }); }, params);
}
exports.blanketAgreementsServiceGetBlanketAgreementList = blanketAgreementsServiceGetBlanketAgreementList;
/**
 * Cost Element Service Get Cost Element List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function costElementServiceGetCostElementList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CostElementService_GetCostElementList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CostElementParams_1.CostElementParams); }); }, params);
}
exports.costElementServiceGetCostElementList = costElementServiceGetCostElementList;
/**
 * Orders Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function ordersServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'OrdersService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.ordersServiceHandleApprovalRequest = ordersServiceHandleApprovalRequest;
/**
 * Ncm Codes Setup Service Get Ncm Code Setup List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function ncmCodesSetupServiceGetNcmCodeSetupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'NCMCodesSetupService_GetNCMCodeSetupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, NcmCodeSetupParams_1.NcmCodeSetupParams); }); }, params);
}
exports.ncmCodesSetupServiceGetNcmCodeSetupList = ncmCodesSetupServiceGetNcmCodeSetupList;
/**
 * Tax Code Determinations Tcd Service Get Tax Code Determination Tcd List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'TaxCodeDeterminationsTCDService_GetTaxCodeDeterminationTCDList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, TaxCodeDeterminationTcdParams_1.TaxCodeDeterminationTcdParams); }); }, params);
}
exports.taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList = taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList;
/**
 * Check Lines Service Get Valid Check Line List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function checkLinesServiceGetValidCheckLineList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CheckLinesService_GetValidCheckLineList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, CheckLineParams_1.CheckLineParams); }); }, params);
}
exports.checkLinesServiceGetValidCheckLineList = checkLinesServiceGetValidCheckLineList;
/**
 * Route Stages Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function routeStagesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'RouteStagesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, RouteStageParams_1.RouteStageParams); }); }, params);
}
exports.routeStagesServiceGetList = routeStagesServiceGetList;
/**
 * Inventory Opening Balances Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function inventoryOpeningBalancesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'InventoryOpeningBalancesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, InventoryOpeningBalanceParams_1.InventoryOpeningBalanceParams); }); }, params);
}
exports.inventoryOpeningBalancesServiceGetList = inventoryOpeningBalancesServiceGetList;
/**
 * Delivery Notes Service Handle Approval Request.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deliveryNotesServiceHandleApprovalRequest(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DeliveryNotesService_HandleApprovalRequest', function (data) { return core_1.transformReturnValueForUndefinedV4(data, function (val) { return undefined; }); }, params);
}
exports.deliveryNotesServiceHandleApprovalRequest = deliveryNotesServiceHandleApprovalRequest;
/**
 * Asset Depreciation Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function assetDepreciationGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'AssetDepreciationGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, AssetDepreciationGroupParams_1.AssetDepreciationGroupParams); }); }, params);
}
exports.assetDepreciationGroupsServiceGetList = assetDepreciationGroupsServiceGetList;
/**
 * Gl Account Advanced Rules Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function glAccountAdvancedRulesServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'GLAccountAdvancedRulesService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, GlAccountAdvancedRuleParams_1.GlAccountAdvancedRuleParams); }); }, params);
}
exports.glAccountAdvancedRulesServiceGetList = glAccountAdvancedRulesServiceGetList;
/**
 * Company Service Get Features Status.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function companyServiceGetFeaturesStatus(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'CompanyService_GetFeaturesStatus', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, FeatureStatus_1.FeatureStatus); }); }, params);
}
exports.companyServiceGetFeaturesStatus = companyServiceGetFeaturesStatus;
/**
 * Electronic File Formats Service Get Electronic File Format List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function electronicFileFormatsServiceGetElectronicFileFormatList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ElectronicFileFormatsService_GetElectronicFileFormatList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ElectronicFileFormatParams_1.ElectronicFileFormatParams); }); }, params);
}
exports.electronicFileFormatsServiceGetElectronicFileFormatList = electronicFileFormatsServiceGetElectronicFileFormatList;
/**
 * Employee Transfers Service Get Employee Transfer List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function employeeTransfersServiceGetEmployeeTransferList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'EmployeeTransfersService_GetEmployeeTransferList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, EmployeeTransferParams_1.EmployeeTransferParams); }); }, params);
}
exports.employeeTransfersServiceGetEmployeeTransferList = employeeTransfersServiceGetEmployeeTransferList;
/**
 * Mobile Add On Setting Service Get Mobile Add On Setting List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function mobileAddOnSettingServiceGetMobileAddOnSettingList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'MobileAddOnSettingService_GetMobileAddOnSettingList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, MobileAddOnSettingParams_1.MobileAddOnSettingParams); }); }, params);
}
exports.mobileAddOnSettingServiceGetMobileAddOnSettingList = mobileAddOnSettingServiceGetMobileAddOnSettingList;
/**
 * Deduction Tax Sub Groups Service Get Deduction Tax Sub Group List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DeductionTaxSubGroupsService_GetDeductionTaxSubGroupList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DeductionTaxSubGroupParams_1.DeductionTaxSubGroupParams); }); }, params);
}
exports.deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList = deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList;
/**
 * Schedule Job Service Run Task.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function scheduleJobServiceRunTask(parameters) {
    var params = {
        permissionId: new core_1.ActionImportParameter('PermissionID', 'Edm.String', parameters.permissionId)
    };
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ScheduleJobService_RunTask', function (data) { return core_1.transformReturnValueForEdmTypeV4(data, function (val) { return core_1.edmToTsV4(val.value, 'Edm.Int32'); }); }, params);
}
exports.scheduleJobServiceRunTask = scheduleJobServiceRunTask;
/**
 * Recurring Transaction Service Get Available Recurring Transactions.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function recurringTransactionServiceGetAvailableRecurringTransactions(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'RecurringTransactionService_GetAvailableRecurringTransactions', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, RclRecurringTransaction_1.RclRecurringTransaction); }); }, params);
}
exports.recurringTransactionServiceGetAvailableRecurringTransactions = recurringTransactionServiceGetAvailableRecurringTransactions;
/**
 * Brazil Beverage Indexers Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function brazilBeverageIndexersServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'BrazilBeverageIndexersService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, BrazilBeverageIndexerParams_1.BrazilBeverageIndexerParams); }); }, params);
}
exports.brazilBeverageIndexersServiceGetList = brazilBeverageIndexersServiceGetList;
/**
 * Nature Of Assessees Service Get Nature Of Assessee List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function natureOfAssesseesServiceGetNatureOfAssesseeList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'NatureOfAssesseesService_GetNatureOfAssesseeList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, NatureOfAssesseeParams_1.NatureOfAssesseeParams); }); }, params);
}
exports.natureOfAssesseesServiceGetNatureOfAssesseeList = natureOfAssesseesServiceGetNatureOfAssesseeList;
/**
 * Fiscal Printer Service Get Fiscal Printer List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function fiscalPrinterServiceGetFiscalPrinterList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'FiscalPrinterService_GetFiscalPrinterList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, FiscalPrinterParams_1.FiscalPrinterParams); }); }, params);
}
exports.fiscalPrinterServiceGetFiscalPrinterList = fiscalPrinterServiceGetFiscalPrinterList;
/**
 * Distribution Rules Service Get Distribution Rule List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function distributionRulesServiceGetDistributionRuleList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'DistributionRulesService_GetDistributionRuleList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, DistributionRuleParams_1.DistributionRuleParams); }); }, params);
}
exports.distributionRulesServiceGetDistributionRuleList = distributionRulesServiceGetDistributionRuleList;
/**
 * Resource Groups Service Get List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function resourceGroupsServiceGetList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'ResourceGroupsService_GetList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, ResourceGroupParams_1.ResourceGroupParams); }); }, params);
}
exports.resourceGroupsServiceGetList = resourceGroupsServiceGetList;
/**
 * Landed Costs Service Get Landed Cost List.
 *
 * @param parameters - Object containing all parameters for the action import.
 * @returns A request builder that allows to overwrite some of the values and execute the resulting request.
 */
function landedCostsServiceGetLandedCostList(parameters) {
    var params = {};
    return new core_1.ActionImportRequestBuilder('/b1s/v2/', 'LandedCostsService_GetLandedCostList', function (data) { return core_1.transformReturnValueForComplexTypeListV4(data, function (data) { return core_1.deserializeComplexTypeV4(data, LandedCostParams_1.LandedCostParams); }); }, params);
}
exports.landedCostsServiceGetLandedCostList = landedCostsServiceGetLandedCostList;
exports.actionImports = {
    logout: logout,
    queryServicePostQuery: queryServicePostQuery,
    scheduleJobServiceRunJobCallback: scheduleJobServiceRunJobCallback,
    alertServiceRunAlert: alertServiceRunAlert,
    salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList: salesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupList,
    messagesServiceGetSentMessages: messagesServiceGetSentMessages,
    creditLinesServiceGetValidCreditLineList: creditLinesServiceGetValidCreditLineList,
    employeeStatusServiceGetList: employeeStatusServiceGetList,
    serviceCallTypesServiceGetServiceCallTypeList: serviceCallTypesServiceGetServiceCallTypeList,
    serviceCallStatusServiceGetServiceCallStatusList: serviceCallStatusServiceGetServiceCallStatusList,
    financialYearsServiceGetFinancialYearList: financialYearsServiceGetFinancialYearList,
    employeeRolesSetupServiceGetEmployeeRoleSetupList: employeeRolesSetupServiceGetEmployeeRoleSetupList,
    nfModelsServiceGetList: nfModelsServiceGetList,
    indiaSacCodeServiceGetList: indiaSacCodeServiceGetList,
    queryAuthGroupServiceGetQueryAuthGroupList: queryAuthGroupServiceGetQueryAuthGroupList,
    employeeIdTypeServiceGetList: employeeIdTypeServiceGetList,
    serviceCallProblemTypesServiceGetServiceCallProblemTypeList: serviceCallProblemTypesServiceGetServiceCallProblemTypeList,
    approvalTemplatesServiceGetApprovalTemplateList: approvalTemplatesServiceGetApprovalTemplateList,
    assetManualDepreciationServiceGetList: assetManualDepreciationServiceGetList,
    activitiesServiceGetActivityList: activitiesServiceGetActivityList,
    projectsServiceGetProjectList: projectsServiceGetProjectList,
    cycleCountDeterminationsServiceGetList: cycleCountDeterminationsServiceGetList,
    returnsServiceHandleApprovalRequest: returnsServiceHandleApprovalRequest,
    sboBobServiceSetCurrencyRate: sboBobServiceSetCurrencyRate,
    assetCapitalizationCreditMemoServiceGetList: assetCapitalizationCreditMemoServiceGetList,
    businessPartnerPropertiesServiceGetBusinessPartnerPropertyList: businessPartnerPropertiesServiceGetBusinessPartnerPropertyList,
    assetGroupsServiceGetList: assetGroupsServiceGetList,
    assetClassesServiceGetList: assetClassesServiceGetList,
    journalEntryDocumentTypeServiceGetList: journalEntryDocumentTypeServiceGetList,
    login: login,
    barCodesServiceGetList: barCodesServiceGetList,
    stockTransferDraftServiceHandleApprovalRequest: stockTransferDraftServiceHandleApprovalRequest,
    depreciationAreasServiceGetList: depreciationAreasServiceGetList,
    resourceCapacitiesServiceGetList: resourceCapacitiesServiceGetList,
    resourcesServiceGetList: resourcesServiceGetList,
    extendedTranslationsServiceGetExtendedTranslationList: extendedTranslationsServiceGetExtendedTranslationList,
    paymentBlocksServiceGetPaymentBlockList: paymentBlocksServiceGetPaymentBlockList,
    cockpitsServiceGetUserCockpitList: cockpitsServiceGetUserCockpitList,
    stockTransferServiceHandleApprovalRequest: stockTransferServiceHandleApprovalRequest,
    assetCapitalizationServiceGetList: assetCapitalizationServiceGetList,
    targetGroupsServiceGetList: targetGroupsServiceGetList,
    certificateSeriesServiceGetCertificateSeriesList: certificateSeriesServiceGetCertificateSeriesList,
    correctionPurchaseInvoiceServiceHandleApprovalRequest: correctionPurchaseInvoiceServiceHandleApprovalRequest,
    determinationCriteriasServiceGetList: determinationCriteriasServiceGetList,
    correctionPurchaseInvoiceReversalServiceHandleApprovalRequest: correctionPurchaseInvoiceReversalServiceHandleApprovalRequest,
    depreciationTypesServiceGetList: depreciationTypesServiceGetList,
    taxWebSitesServiceGetDefaultWebSite: taxWebSitesServiceGetDefaultWebSite,
    binLocationAttributesServiceGetList: binLocationAttributesServiceGetList,
    reportTypesServiceGetReportTypeList: reportTypesServiceGetReportTypeList,
    transactionCodesServiceGetList: transactionCodesServiceGetList,
    enhancedDiscountGroupsServiceGetList: enhancedDiscountGroupsServiceGetList,
    purchaseRequestServiceHandleApprovalRequest: purchaseRequestServiceHandleApprovalRequest,
    purchaseQuotationsServiceHandleApprovalRequest: purchaseQuotationsServiceHandleApprovalRequest,
    accrualTypesServiceGetAccrualTypeList: accrualTypesServiceGetAccrualTypeList,
    correctionInvoiceServiceHandleApprovalRequest: correctionInvoiceServiceHandleApprovalRequest,
    kpIsServiceGetList: kpIsServiceGetList,
    purchaseInvoicesServiceHandleApprovalRequest: purchaseInvoicesServiceHandleApprovalRequest,
    campaignsServiceGetList: campaignsServiceGetList,
    boeInstructionsServiceGetBoeInstructionList: boeInstructionsServiceGetBoeInstructionList,
    salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList: salesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupList,
    sectionsServiceGetSectionList: sectionsServiceGetSectionList,
    cashDiscountsServiceGetCashDiscountList: cashDiscountsServiceGetCashDiscountList,
    retornoCodesServiceGetList: retornoCodesServiceGetList,
    binLocationsServiceGetList: binLocationsServiceGetList,
    nfTaxCategoriesServiceGetList: nfTaxCategoriesServiceGetList,
    projectManagementConfigurationServiceGetStageTypes: projectManagementConfigurationServiceGetStageTypes,
    salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList: salesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupList,
    occurrenceCodesServiceGetList: occurrenceCodesServiceGetList,
    unitOfMeasurementGroupsServiceGetList: unitOfMeasurementGroupsServiceGetList,
    binLocationFieldsServiceGetList: binLocationFieldsServiceGetList,
    taxWebSitesServiceGetTaxWebSiteList: taxWebSitesServiceGetTaxWebSiteList,
    serviceCallOriginsServiceGetServiceCallOriginList: serviceCallOriginsServiceGetServiceCallOriginList,
    creditNotesServiceHandleApprovalRequest: creditNotesServiceHandleApprovalRequest,
    unitOfMeasurementsServiceGetList: unitOfMeasurementsServiceGetList,
    dnfCodeSetupServiceGetDnfCodeSetupList: dnfCodeSetupServiceGetDnfCodeSetupList,
    warehouseSublevelCodesServiceGetList: warehouseSublevelCodesServiceGetList,
    approvalRequestsServiceGetAllApprovalRequestsList: approvalRequestsServiceGetAllApprovalRequestsList,
    partnersSetupsServiceGetList: partnersSetupsServiceGetList,
    inventoryPostingsServiceGetList: inventoryPostingsServiceGetList,
    inventoryGenEntryServiceHandleApprovalRequest: inventoryGenEntryServiceHandleApprovalRequest,
    intrastatConfigurationServiceGetList: intrastatConfigurationServiceGetList,
    salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList: salesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupList,
    companyServiceGetPeriods: companyServiceGetPeriods,
    correctionInvoiceReversalServiceHandleApprovalRequest: correctionInvoiceReversalServiceHandleApprovalRequest,
    purchaseDeliveryNotesServiceHandleApprovalRequest: purchaseDeliveryNotesServiceHandleApprovalRequest,
    cockpitsServiceGetTemplateCockpitList: cockpitsServiceGetTemplateCockpitList,
    approvalStagesServiceGetApprovalStageList: approvalStagesServiceGetApprovalStageList,
    boeDocumentTypesServiceGetBoeDocumentTypeList: boeDocumentTypesServiceGetBoeDocumentTypeList,
    invoicesServiceHandleApprovalRequest: invoicesServiceHandleApprovalRequest,
    faAccountDeterminationsServiceGetList: faAccountDeterminationsServiceGetList,
    profitCentersServiceGetProfitCenterList: profitCentersServiceGetProfitCenterList,
    statesServiceGetStateList: statesServiceGetStateList,
    draftsServiceHandleApprovalRequest: draftsServiceHandleApprovalRequest,
    approvalRequestsServiceGetOpenApprovalRequestList: approvalRequestsServiceGetOpenApprovalRequestList,
    brazilFuelIndexersServiceGetList: brazilFuelIndexersServiceGetList,
    downPaymentsServiceHandleApprovalRequest: downPaymentsServiceHandleApprovalRequest,
    dimensionsServiceGetDimensionList: dimensionsServiceGetDimensionList,
    departmentsServiceGetDepartmentList: departmentsServiceGetDepartmentList,
    integrationPackagesConfigureServiceGetList: integrationPackagesConfigureServiceGetList,
    countriesServiceGetCountryList: countriesServiceGetCountryList,
    purchaseDownPaymentsServiceHandleApprovalRequest: purchaseDownPaymentsServiceHandleApprovalRequest,
    approvalRequestsServiceGetApprovalRequestList: approvalRequestsServiceGetApprovalRequestList,
    serviceTaxPostingServiceGetTaxableDeliveries: serviceTaxPostingServiceGetTaxableDeliveries,
    branchesServiceGetBranchList: branchesServiceGetBranchList,
    terminationReasonServiceGetList: terminationReasonServiceGetList,
    serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList: serviceCallSolutionStatusServiceGetServiceCallSolutionStatusList,
    dunningTermsServiceGetDunningTermList: dunningTermsServiceGetDunningTermList,
    assetRetirementServiceGetList: assetRetirementServiceGetList,
    serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList: serviceCallProblemSubTypesServiceGetServiceCallProblemSubTypeList,
    trackingNotesServiceGetList: trackingNotesServiceGetList,
    taxCodeDeterminationsServiceGetTaxCodeDeterminationList: taxCodeDeterminationsServiceGetTaxCodeDeterminationList,
    depreciationTypePoolsServiceGetList: depreciationTypePoolsServiceGetList,
    purchaseReturnsServiceHandleApprovalRequest: purchaseReturnsServiceHandleApprovalRequest,
    employeePositionServiceGetList: employeePositionServiceGetList,
    predefinedTextsServiceGetPredefinedTextList: predefinedTextsServiceGetPredefinedTextList,
    accountCategoryServiceGetCategoryList: accountCategoryServiceGetCategoryList,
    inventoryCountingsServiceGetList: inventoryCountingsServiceGetList,
    purchaseOrdersServiceHandleApprovalRequest: purchaseOrdersServiceHandleApprovalRequest,
    quotationsServiceHandleApprovalRequest: quotationsServiceHandleApprovalRequest,
    cockpitsServiceGetCockpitList: cockpitsServiceGetCockpitList,
    userGroupServiceGetUserGroupList: userGroupServiceGetUserGroupList,
    boePortfoliosServiceGetBoePortfolioList: boePortfoliosServiceGetBoePortfolioList,
    purchaseCreditNotesServiceHandleApprovalRequest: purchaseCreditNotesServiceHandleApprovalRequest,
    emailGroupsServiceGetList: emailGroupsServiceGetList,
    projectManagementConfigurationServiceGetSubprojectTypes: projectManagementConfigurationServiceGetSubprojectTypes,
    projectManagementConfigurationServiceGetAreas: projectManagementConfigurationServiceGetAreas,
    inventoryTransferRequestsServiceHandleApprovalRequest: inventoryTransferRequestsServiceHandleApprovalRequest,
    projectManagementConfigurationServiceGetPriorities: projectManagementConfigurationServiceGetPriorities,
    projectManagementConfigurationServiceGetActivities: projectManagementConfigurationServiceGetActivities,
    projectManagementConfigurationServiceGetTasks: projectManagementConfigurationServiceGetTasks,
    inventoryGenExitServiceHandleApprovalRequest: inventoryGenExitServiceHandleApprovalRequest,
    returnRequestServiceHandleApprovalRequest: returnRequestServiceHandleApprovalRequest,
    goodsReturnRequestServiceHandleApprovalRequest: goodsReturnRequestServiceHandleApprovalRequest,
    bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList: bankChargesAllocationCodesServiceGetBankChargesAllocationCodeList,
    activityRecipientListsServiceGetList: activityRecipientListsServiceGetList,
    cashFlowLineItemsServiceGetCashFlowLineItemList: cashFlowLineItemsServiceGetCashFlowLineItemList,
    campaignResponseTypeServiceGetResponseTypeList: campaignResponseTypeServiceGetResponseTypeList,
    costCenterTypesServiceGetCostCenterTypeList: costCenterTypesServiceGetCostCenterTypeList,
    assetTransferServiceGetList: assetTransferServiceGetList,
    depositsServiceGetDepositList: depositsServiceGetDepositList,
    govPayCodesServiceGetList: govPayCodesServiceGetList,
    attributeGroupsServiceGetList: attributeGroupsServiceGetList,
    serviceGroupsServiceGetServiceGroupList: serviceGroupsServiceGetServiceGroupList,
    materialGroupsServiceGetMaterialGroupList: materialGroupsServiceGetMaterialGroupList,
    resourcePropertiesServiceGetList: resourcePropertiesServiceGetList,
    blanketAgreementsServiceGetBlanketAgreementList: blanketAgreementsServiceGetBlanketAgreementList,
    costElementServiceGetCostElementList: costElementServiceGetCostElementList,
    ordersServiceHandleApprovalRequest: ordersServiceHandleApprovalRequest,
    ncmCodesSetupServiceGetNcmCodeSetupList: ncmCodesSetupServiceGetNcmCodeSetupList,
    taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList: taxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdList,
    checkLinesServiceGetValidCheckLineList: checkLinesServiceGetValidCheckLineList,
    routeStagesServiceGetList: routeStagesServiceGetList,
    inventoryOpeningBalancesServiceGetList: inventoryOpeningBalancesServiceGetList,
    deliveryNotesServiceHandleApprovalRequest: deliveryNotesServiceHandleApprovalRequest,
    assetDepreciationGroupsServiceGetList: assetDepreciationGroupsServiceGetList,
    glAccountAdvancedRulesServiceGetList: glAccountAdvancedRulesServiceGetList,
    companyServiceGetFeaturesStatus: companyServiceGetFeaturesStatus,
    electronicFileFormatsServiceGetElectronicFileFormatList: electronicFileFormatsServiceGetElectronicFileFormatList,
    employeeTransfersServiceGetEmployeeTransferList: employeeTransfersServiceGetEmployeeTransferList,
    mobileAddOnSettingServiceGetMobileAddOnSettingList: mobileAddOnSettingServiceGetMobileAddOnSettingList,
    deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList: deductionTaxSubGroupsServiceGetDeductionTaxSubGroupList,
    scheduleJobServiceRunTask: scheduleJobServiceRunTask,
    recurringTransactionServiceGetAvailableRecurringTransactions: recurringTransactionServiceGetAvailableRecurringTransactions,
    brazilBeverageIndexersServiceGetList: brazilBeverageIndexersServiceGetList,
    natureOfAssesseesServiceGetNatureOfAssesseeList: natureOfAssesseesServiceGetNatureOfAssesseeList,
    fiscalPrinterServiceGetFiscalPrinterList: fiscalPrinterServiceGetFiscalPrinterList,
    distributionRulesServiceGetDistributionRuleList: distributionRulesServiceGetDistributionRuleList,
    resourceGroupsServiceGetList: resourceGroupsServiceGetList,
    landedCostsServiceGetLandedCostList: landedCostsServiceGetLandedCostList
};
//# sourceMappingURL=action-imports.js.map