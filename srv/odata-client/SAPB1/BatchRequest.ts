/*
 * Copyright (c) 2023 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  CreateRequestBuilder,
  DeleteRequestBuilder,
  DeSerializers,
  GetAllRequestBuilder,
  GetByKeyRequestBuilder,
  ODataBatchRequestBuilder,
  UpdateRequestBuilder,
  OperationRequestBuilder,
  BatchChangeSet
} from '@sap-cloud-sdk/odata-v4';
import { transformVariadicArgumentToArray } from '@sap-cloud-sdk/util';
import {
  U_Bs_Bestmonitor,
  U_Bprstrt,
  U_Boquot,
  U_Boostp,
  U_Boodfs,
  U_Boemail,
  U_Bncsta,
  U_Bncprt,
  U_Bncinc,
  U_Bnccst,
  U_Bncadm,
  U_Edi_Unitcodes,
  U_Bld_Lytd,
  U_Beprefs,
  U_Bd_Srep,
  U_Bd_Ctax,
  U_Sn_Url,
  U_Bcesett,
  U_Bcenote,
  U_Bbtext,
  U_Bbsbcs,
  U_Bboatv,
  U_Bblog1,
  U_Bblog,
  U_Bbflds,
  U_Bbatv1,
  U_Ba_Styp1,
  U_Bbvals,
  U_Ba_Strn,
  U_Ba_Ssta1,
  U_Bnctrn,
  U_Ba_Ssta,
  U_Ba_Smod,
  U_Ba_Sdpm1,
  U_Ba_Oocr,
  U_Ba_Ofpr,
  U_Bld_Blob,
  U_Ba_Odrn3,
  U_Bnoint,
  U_Ba_Odrn2,
  U_Ba_Odpvn,
  U_Ba_Odpv,
  U_Ba_Odoc3,
  U_Ba_Oamd3,
  U_Ba_Mdim2,
  U_Ba_Cpol1,
  U_Ba_Cpol,
  U_Ba_Cmdim,
  U_Bs_Aufmonitor,
  U_Ba_Cdtn,
  U_Ba_Cdpt1,
  U_Ba_Cdpa1,
  U_Bncnta,
  U_Ba_Cclsdpa,
  Masterartikel,
  Kalkulation,
  Angebots_Anfrage,
  SalesOpportunities,
  UserDefaultGroups,
  ActivitySubjects,
  Messages,
  AlertManagements,
  U_Bd_Cset,
  ItemProperties,
  BudgetDistributions,
  CreditCardPayments,
  LandedCosts,
  StockTransfers,
  ProductTrees,
  Warehouses,
  U_Bnccom,
  Projects,
  DistributionRules,
  U_Ba_Oprj,
  ProfitCenters,
  ChecksforPayment,
  PostingTemplates,
  LegalData,
  BrazilBeverageIndexers,
  NfModels,
  U_Boword,
  AccrualTypes,
  CostCenterTypes,
  PurchaseQuotations,
  TaxCodeDeterminations,
  DeductionTaxSubGroups,
  SalesPersons,
  ItemGroups,
  LengthMeasures,
  U_Bd_Spath,
  VatGroups,
  ShippingTypes,
  MobileAddOnSetting,
  EmployeeTransfers,
  ReportFilter,
  ServiceCallProblemSubTypes,
  ImportDeterminations,
  ElectronicDocuments,
  U_Bbatv2,
  TaxReplStateSubs,
  ServiceCallSolutionStatus,
  AssetTransfer,
  ServiceCalls,
  U_Bnccry,
  Items,
  CorrectionInvoiceReversal,
  Teams,
  EwbTransporters,
  CustomerEquipmentCards,
  CorrectionInvoice,
  WithholdingTaxCodes,
  PurchaseDeliveryNotes,
  ResourceGroups,
  CorrectionPurchaseInvoice,
  PartnersSetups,
  UserQueries,
  JournalEntries,
  PickLists,
  PaymentBlocks,
  InventoryGenEntries,
  UserFieldsMd,
  ActivityTypes,
  DunningLetters,
  WeightMeasures,
  BpVatExemptions,
  IntegrationPackagesConfigure,
  ContractTemplates,
  AttributeGroups,
  AssetRetirement,
  Holidays,
  Banks,
  ApprovalTemplates,
  AssetRevaluations,
  JournalEntryDocumentTypes,
  BinLocations,
  U_Bfuserforms,
  EnhancedDiscountGroups,
  AccountSegmentationCategories,
  BrazilNumericIndexers,
  EmployeesInfo,
  AssetManualDepreciation,
  AssetClasses,
  NotaFiscalCfop,
  AlternateCatNum,
  DeterminationCriterias,
  U_Beolic,
  ServiceCallProblemTypes,
  Budgets,
  EmployeeIdType,
  Orders,
  AssetCapitalization,
  FaAccountDeterminations,
  ActivityLocations,
  U_Bosettings,
  FiscalPrinter,
  BrazilMultiIndexers,
  WizardPaymentMethods,
  Forms1099,
  KpIs,
  GlAccountAdvancedRules,
  ServiceContracts,
  PredefinedTexts,
  CommissionGroups,
  InventoryGenExits,
  ReportTypes,
  DepreciationTypePools,
  AccountSegmentations,
  ServiceCallOrigins,
  U_Cto_Toa,
  MaterialRevaluation,
  TerminationReason,
  Drafts,
  InventoryTransferRequests,
  U_Bbhbcs,
  AdditionalExpenses,
  TaxExemptReasons,
  DepreciationTypes,
  SalesOpportunityReasonsSetup,
  InternalReconciliations,
  AccountCategory,
  BarCodes,
  U_Ba_Cdpt,
  SalesStages,
  U_Bpcntr,
  InventoryCountings,
  ClosingDateProcedure,
  Relationships,
  AssetDepreciationGroups,
  BusinessPartnerProperties,
  BusinessPartnerGroups,
  AssetGroups,
  U_Cto_Cfg,
  RetornoCodes,
  InventoryOpeningBalances,
  ValueMapping,
  ValueMappingCommunication,
  U_Bostp1,
  CustomsGroups,
  DynamicSystemStrings,
  EmployeeRolesSetup,
  WebClientLaunchpads,
  ApprovalRequests,
  ResourceCapacities,
  U_Ba_Cnum,
  SalesOpportunitySourcesSetup,
  Countries,
  TaxInvoiceReport,
  WarehouseSublevelCodes,
  Sections,
  U_Bnoint2,
  BinLocationFields,
  QueryAuthGroups,
  Resources,
  ExtendedTranslations,
  ExportDeterminations,
  UserTablesMd,
  U_Ba_Cdpa,
  ChartOfAccounts,
  U_Bfextdbversion,
  BillOfExchangeTransactions,
  CycleCountDeterminations,
  Queue,
  InventoryPostings,
  ServiceCallTypes,
  ReturnRequest,
  FinancialYears,
  DeliveryNotes,
  CreditPaymentMethods,
  NfTaxCategories,
  BankChargesAllocationCodes,
  CertificateSeries,
  BankStatements,
  SalesOpportunityCompetitorsSetup,
  Users,
  PurchaseInvoices,
  CashDiscounts,
  StockTransferDrafts,
  Branches,
  QueryCategories,
  EmployeeStatus,
  U_Ba_Odoc,
  BpPriorities,
  IntrastatConfiguration,
  ServiceCallStatus,
  BlanketAgreements,
  U_Bosynclog,
  SalesTaxAuthorities,
  Invoices,
  CampaignResponseType,
  Campaigns,
  ChooseFromList,
  States,
  FactoringIndicators,
  UnitOfMeasurements,
  EmploymentCategorys,
  U_Ba_Odrn,
  Departments,
  Manufacturers,
  OccurrenceCodes,
  TargetGroups,
  BrazilFuelIndexers,
  ExceptionalEvents,
  U_Booadm,
  U_Bblogm,
  SalesOpportunityInterestsSetup,
  BoePortfolios,
  U_Bd_Serr,
  CreditNotes,
  SalesTaxAuthoritiesTypes,
  AssetCapitalizationCreditMemo,
  PaymentRunExport,
  PaymentDrafts,
  KnowledgeBaseSolutions,
  DeductionTaxHierarchies,
  Contacts,
  RouteStages,
  PurchaseCreditNotes,
  EdiGpEinstellungen,
  InventoryCycles,
  BinLocationAttributes,
  ResourceProperties,
  DunningTerms,
  SalesForecast,
  TrackingNotes,
  BusinessPartners,
  U_Bncstp,
  DnfCodeSetup,
  Industries,
  UnitOfMeasurementGroups,
  ProductionOrders,
  IndiaHsn,
  CestCodes,
  UserKeysMd,
  DownPayments,
  SalesTaxInvoices,
  PurchaseDownPayments,
  PackagesTypes,
  U_Ba_Oamd2,
  EmailGroups,
  ProjectManagementTimeSheet,
  NcmCodesSetup,
  ApprovalStages,
  PurchaseReturns,
  Cockpits,
  EmployeePosition,
  Currencies,
  PriceLists,
  Territories,
  UserPermissionTree,
  ActivityStatuses,
  NatureOfAssessees,
  FormattedSearches,
  U_Ba_Styp,
  Activities,
  RecurringPostings,
  PurchaseOrders,
  U_Vertrieb_Planung,
  CashFlowLineItems,
  U_Cto_Tob,
  Attachments2,
  UserLanguages,
  Quotations,
  Returns,
  DepreciationAreas,
  HouseBankAccounts,
  UserGroups,
  BrazilStringIndexers,
  PosDailySummary,
  WebClientVariantGroups,
  SpecialPrices,
  WitholdingTaxDefinition,
  ProjectManagements,
  GoodsReturnRequest,
  U_Ba_Strn1,
  ActivityRecipientLists,
  WebClientBookmarkTiles,
  WebClientFormSettings,
  SerialNumberDetails,
  WebClientNotifications,
  WebClientRecentActivities,
  WebClientPreferences,
  WarehouseLocations,
  DeductibleTaxs,
  SqlQueries,
  WTaxTypeCodes,
  SalesTaxCodes,
  TransportationDocument,
  PaymentTermsTypes,
  BankPages,
  TransactionCodes,
  EBooks,
  U_Ba_Rptdt,
  UserObjectsMd,
  MultiLanguageTranslations,
  PaymentReasonCodes,
  U_Bld_Prnd,
  BpFiscalRegistryId,
  TsrExceptionalEvents,
  BudgetScenarios,
  CorrectionPurchaseInvoiceReversal,
  BoeInstructions,
  U_Bld_Gnrl,
  WebClientListviewFilters,
  BemReplicationPeriods,
  ExpenseTypes,
  IncomingPayments,
  GovPayCodes,
  U_Ba_Oamd,
  Deposits,
  U_Ba_Odoc2,
  LocalEra,
  PurchaseRequests,
  Dimensions,
  IdentificationCodes,
  WebClientDashboards,
  IndiaSacCode,
  ServiceGroups,
  MaterialGroups,
  CostElements,
  DefaultElementsforCr,
  BatchNumberDetails,
  WebClientVariants,
  SingleUserConnections,
  U_Ba_Cudf1,
  SqlViews,
  TaxWebSites,
  NotaFiscalCst,
  U_Bld_Pdln,
  Technik,
  NotaFiscalUsage,
  TaxCodeDeterminationsTcd,
  BoeDocumentTypes,
  U_Boexcel,
  DeductionTaxGroups,
  PurchaseTaxInvoices,
  CustomsDeclaration,
  BusinessPlaces,
  StockTakings,
  CreditCards,
  FormPreferences,
  ElectronicFileFormats,
  VendorPayments,
  U_Ba_Sdpm,
  U_Ba_Rpts,
  LandedCostsCodes,
  B1Sessions,
  ItemImages,
  EmployeeImages,
  Pictures,
  LicenseServiceGetInstallationNumberParameters,
  CompanyServiceGetAdminInfoParameters,
  CompanyServiceGetPathAdminParameters,
  ElectronicDocumentServiceGetProtocolsParameters,
  CompanyServiceGetCompanyInfoParameters,
  SboBobServiceGetSystemPermissionParameters,
  UserMenuServiceGetCurrentUserMenuParameters,
  SboBobServiceGetDueDateParameters,
  SboBobServiceGetIndexRateParameters,
  MessagesServiceGetInboxParameters,
  SboBobServiceGetSystemCurrencyParameters,
  SboBobServiceFormatMoneyToStringParameters,
  MessagesServiceGetOutboxParameters,
  SboBobServiceGetCurrencyRateParameters,
  SboBobServiceGetLocalCurrencyParameters,
  LoginParameters,
  QueryServicePostQueryParameters,
  SboBobServiceSetCurrencyRateParameters,
  OrdersServiceInitDataParameters,
  AttributeGroupsServiceGetListParameters,
  ProfitCentersServiceGetProfitCenterListParameters,
  PaymentDraftsServiceHandleApprovalRequestParameters,
  PurchaseInvoicesServiceHandleApprovalRequestParameters,
  CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters,
  TerminationReasonServiceGetListParameters,
  DepositsServiceGetDepositListParameters,
  InvoicesServiceHandleApprovalRequestParameters,
  CorrectionInvoiceReversalServiceInitDataParameters,
  CorrectionInvoiceServiceHandleApprovalRequestParameters,
  WebClientVariantGroupServiceGetListParameters,
  CorrectionPurchaseInvoiceReversalServiceInitDataParameters,
  PurchaseRequestServiceInitDataParameters,
  WebClientFormSettingServiceGetListParameters,
  BrazilBeverageIndexersServiceGetListParameters,
  ReturnsServiceInitDataParameters,
  PaymentBlocksServiceGetPaymentBlockListParameters,
  CorrectionPurchaseInvoiceServiceInitDataParameters,
  SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters,
  NcmCodesSetupServiceGetNcmCodeSetupListParameters,
  ServiceTaxPostingServiceGetTaxableDeliveriesParameters,
  InventoryGenExitServiceHandleApprovalRequestParameters,
  DeliveryNotesServiceInitDataParameters,
  JournalEntryDocumentTypeServiceGetListParameters,
  IntegrationPackagesConfigureServiceGetListParameters,
  UnitOfMeasurementGroupsServiceGetListParameters,
  AssetDepreciationGroupsServiceGetListParameters,
  CorrectionInvoiceServiceInitDataParameters,
  PurchaseRequestServiceHandleApprovalRequestParameters,
  EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters,
  AssetRevaluationServiceGetListParameters,
  InventoryTransferRequestsServiceHandleApprovalRequestParameters,
  EnhancedDiscountGroupsServiceGetListParameters,
  DunningTermsServiceGetDunningTermListParameters,
  HolidayServiceGetHolidayListParameters,
  QuotationsServiceInitDataParameters,
  InvoicesServiceInitDataParameters,
  UsersServiceGetCurrentUserParameters,
  InventoryCountingsServiceGetListParameters,
  EmployeeStatusServiceGetListParameters,
  FiscalPrinterServiceGetFiscalPrinterListParameters,
  AssetManualDepreciationServiceGetListParameters,
  BranchesServiceGetBranchListParameters,
  AssetGroupsServiceGetListParameters,
  CycleCountDeterminationsServiceGetListParameters,
  IndiaHsnServiceGetListParameters,
  TaxExemptReasonServiceGetListParameters,
  MaterialGroupsServiceGetMaterialGroupListParameters,
  CashDiscountsServiceGetCashDiscountListParameters,
  DownPaymentsServiceInitDataParameters,
  SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters,
  SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters,
  DeliveryNotesServiceHandleApprovalRequestParameters,
  SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters,
  CompanyServiceGetFeaturesStatusParameters,
  PurchaseReturnsServiceHandleApprovalRequestParameters,
  DraftsServiceInitDataParameters,
  FinancialYearsServiceGetFinancialYearListParameters,
  GoodsReturnRequestServiceInitDataParameters,
  ResourceCapacitiesServiceGetListParameters,
  CockpitsServiceGetTemplateCockpitListParameters,
  CreditLinesServiceGetValidCreditLineListParameters,
  ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters,
  ActivitiesServiceGetActivityListParameters,
  DepreciationAreasServiceGetListParameters,
  DnfCodeSetupServiceGetDnfCodeSetupListParameters,
  DraftsServiceHandleApprovalRequestParameters,
  TaxWebSitesServiceGetTaxWebSiteListParameters,
  ReportTypesServiceGetReportTypeListParameters,
  RecurringPostingsServiceGetListParameters,
  CertificateSeriesServiceGetCertificateSeriesListParameters,
  SectionsServiceGetSectionListParameters,
  RetornoCodesServiceGetListParameters,
  WarehouseSublevelCodesServiceGetListParameters,
  CorrectionInvoiceReversalServiceHandleApprovalRequestParameters,
  ApprovalRequestsServiceGetOpenApprovalRequestListParameters,
  ApprovalRequestsServiceGetAllApprovalRequestsListParameters,
  BinLocationFieldsServiceGetListParameters,
  DepreciationTypePoolsServiceGetListParameters,
  PostingTemplatesServiceGetListParameters,
  BinLocationAttributesServiceGetListParameters,
  ProjectManagementConfigurationServiceGetAreasParameters,
  CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters,
  StockTransferServiceHandleApprovalRequestParameters,
  CompanyServiceGetPeriodsParameters,
  OrdersServiceHandleApprovalRequestParameters,
  CampaignsServiceGetListParameters,
  UnitOfMeasurementsServiceGetListParameters,
  ApprovalRequestsServiceGetApprovalRequestListParameters,
  BusinessPartnersServiceInitDataParameters,
  PurchaseCreditNotesServiceHandleApprovalRequestParameters,
  CostElementServiceGetCostElementListParameters,
  TaxWebSitesServiceGetDefaultWebSiteParameters,
  ActivitySubjectServiceGetActivitySubjectListParameters,
  BinLocationsServiceGetListParameters,
  CreditNotesServiceInitDataParameters,
  CockpitsServiceGetUserCockpitListParameters,
  StockTransferDraftServiceHandleApprovalRequestParameters,
  DepartmentsServiceGetDepartmentListParameters,
  AssetClassesServiceGetListParameters,
  NatureOfAssesseesServiceGetNatureOfAssesseeListParameters,
  ApprovalTemplatesServiceGetApprovalTemplateListParameters,
  CockpitsServiceGetCockpitListParameters,
  AssetCapitalizationCreditMemoServiceGetListParameters,
  LandedCostsServiceGetLandedCostListParameters,
  CreditNotesServiceHandleApprovalRequestParameters,
  BarCodesServiceGetListParameters,
  InventoryPostingsServiceGetListParameters,
  BlanketAgreementsServiceGetBlanketAgreementListParameters,
  ServiceCallTypesServiceGetServiceCallTypeListParameters,
  PurchaseQuotationsServiceHandleApprovalRequestParameters,
  WebClientVariantServiceGetListParameters,
  CountriesServiceGetCountryListParameters,
  StatesServiceGetStateListParameters,
  KpIsServiceGetListParameters,
  PurchaseInvoicesServiceInitDataParameters,
  EmployeeIdTypeServiceGetListParameters,
  CostCenterTypesServiceGetCostCenterTypeListParameters,
  TargetGroupsServiceGetListParameters,
  ExtendedTranslationsServiceGetExtendedTranslationListParameters,
  PartnersSetupsServiceGetListParameters,
  OccurrenceCodesServiceGetListParameters,
  ServiceCallStatusServiceGetServiceCallStatusListParameters,
  ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters,
  PurchaseCreditNotesServiceInitDataParameters,
  EmailGroupsServiceGetListParameters,
  AssetCapitalizationServiceGetListParameters,
  ServiceCallOriginsServiceGetServiceCallOriginListParameters,
  EmployeePositionServiceGetListParameters,
  GlAccountAdvancedRulesServiceGetListParameters,
  TrackingNotesServiceGetListParameters,
  PurchaseDeliveryNotesServiceHandleApprovalRequestParameters,
  ShortLinkMappingsServiceBatchDeleteParameters,
  PurchaseDownPaymentsServiceHandleApprovalRequestParameters,
  ProjectManagementConfigurationServiceGetPrioritiesParameters,
  ApprovalStagesServiceGetApprovalStageListParameters,
  PurchaseReturnsServiceInitDataParameters,
  DimensionsServiceGetDimensionListParameters,
  PurchaseOrdersServiceHandleApprovalRequestParameters,
  InventoryGenExitServiceInitDataParameters,
  PurchaseOrdersServiceInitDataParameters,
  QuotationsServiceHandleApprovalRequestParameters,
  ServiceGroupsServiceGetServiceGroupListParameters,
  UserGroupServiceGetUserGroupListParameters,
  TsrExceptionalEventServiceGetListParameters,
  GoodsReturnRequestServiceHandleApprovalRequestParameters,
  TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters,
  IntrastatConfigurationServiceGetListParameters,
  QueryAuthGroupServiceGetQueryAuthGroupListParameters,
  ProjectManagementConfigurationServiceGetSubprojectTypesParameters,
  ReturnsServiceHandleApprovalRequestParameters,
  AssetRetirementServiceGetListParameters,
  EmployeeTransfersServiceGetEmployeeTransferListParameters,
  ProjectManagementConfigurationServiceGetActivitiesParameters,
  DeterminationCriteriasServiceGetListParameters,
  EwbTransporterServiceGetEwbTransporterListParameters,
  ProjectManagementConfigurationServiceGetTasksParameters,
  ReturnRequestServiceHandleApprovalRequestParameters,
  AssetTransferServiceGetListParameters,
  ReturnRequestServiceInitDataParameters,
  ActivityRecipientListsServiceGetListParameters,
  WebClientPreferenceServiceGetListParameters,
  WebClientLaunchpadServiceGetListParameters,
  WebClientBookmarkTileServiceGetListParameters,
  IdentificationCodeServiceGetListParameters,
  WebClientNotificationServiceGetListParameters,
  WebClientDashboardServiceGetListParameters,
  WebClientRecentActivityServiceGetListParameters,
  DeductibleTaxServiceGetListParameters,
  LogoutParameters,
  BpVatExemptionsServiceGetListParameters,
  WTaxTypeCodeServiceGetWTaxTypeCodeListParameters,
  RecurringTransactionServiceGetAvailableRecurringTransactionsParameters,
  PaymentReasonCodeServiceGetPaymentReasonCodeListParameters,
  PredefinedTextsServiceGetPredefinedTextListParameters,
  ExceptionalEventServiceGetExceptionalEventListParameters,
  IncomingPaymentsServiceHandleApprovalRequestParameters,
  ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters,
  EmploymentCategoryServiceGetEmploymentCategoryListParameters,
  ShortLinkMappingsServiceGetListParameters,
  BemReplicationPeriodServiceGetListParameters,
  AccountCategoryServiceGetCategoryListParameters,
  BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters,
  BoeDocumentTypesServiceGetBoeDocumentTypeListParameters,
  CashFlowLineItemsServiceGetCashFlowLineItemListParameters,
  CampaignResponseTypeServiceGetResponseTypeListParameters,
  MobileAppServiceGetCurrentServerDateTimeParameters,
  ProjectManagementConfigurationServiceGetStageTypesParameters,
  IndiaSacCodeServiceGetListParameters,
  FaAccountDeterminationsServiceGetListParameters,
  NfTaxCategoriesServiceGetListParameters,
  TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters,
  BoePortfoliosServiceGetBoePortfolioListParameters,
  CheckLinesServiceGetValidCheckLineListParameters,
  ResourcesServiceGetListParameters,
  ResourcePropertiesServiceGetListParameters,
  ResourceGroupsServiceGetListParameters,
  BoeInstructionsServiceGetBoeInstructionListParameters,
  InventoryOpeningBalancesServiceGetListParameters,
  WebClientListviewFilterServiceGetListParameters,
  PurchaseDownPaymentsServiceInitDataParameters,
  GovPayCodesServiceGetListParameters,
  ItemsServiceInitDataParameters,
  DepreciationTypesServiceGetListParameters,
  ElectronicFileFormatsServiceGetElectronicFileFormatListParameters,
  BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters,
  TransactionCodesServiceGetListParameters,
  VendorPaymentsServiceHandleApprovalRequestParameters,
  MobileAddOnSettingServiceGetMobileAddOnSettingListParameters,
  DownPaymentsServiceHandleApprovalRequestParameters,
  PurchaseQuotationsServiceInitDataParameters,
  AccrualTypesServiceGetAccrualTypeListParameters,
  ActivitiesServiceInitDataParameters,
  NfModelsServiceGetListParameters,
  BrazilFuelIndexersServiceGetListParameters,
  InventoryGenEntryServiceHandleApprovalRequestParameters,
  DistributionRulesServiceGetDistributionRuleListParameters,
  ProjectsServiceGetProjectListParameters,
  InventoryGenEntryServiceInitDataParameters,
  MessagesServiceGetSentMessagesParameters,
  DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters,
  PurchaseDeliveryNotesServiceInitDataParameters,
  RouteStagesServiceGetListParameters,
  SboBobServiceSetSystemPermissionParameters,
  AdminInfo,
  PathAdmin,
  CompanyInfo,
  UserMenuItem,
  MessageHeader,
  AttributeGroupParams,
  ProfitCenterParams,
  TerminationReasonParams,
  DepositParams,
  WebClientVariantGroupParams,
  WebClientFormSettingParams,
  BrazilBeverageIndexerParams,
  PaymentBlockParams,
  SalesOpportunityInterestSetupParams,
  NcmCodeSetupParams,
  ServiceTaxPostingParams,
  JournalEntryDocumentTypeParams,
  IntegrationPackageParams,
  UnitOfMeasurementGroupParams,
  AssetDepreciationGroupParams,
  EmployeeRoleSetupParams,
  AssetRevaluationParams,
  EnhancedDiscountGroupParams,
  DunningTermParams,
  HolidayParams,
  InventoryCountingParams,
  EmployeeStatusParams,
  FiscalPrinterParams,
  AssetDocumentParams,
  BranchParams,
  AssetGroupParams,
  CycleCountDeterminationParams,
  IndiaHsnParams,
  TaxExemptReasonParams,
  MaterialGroupParams,
  CashDiscountParams,
  SalesOpportunitySourceSetupParams,
  SalesOpportunityReasonSetupParams,
  SalesOpportunityCompetitorSetupParams,
  FeatureStatus,
  FinancialYearParams,
  ResourceCapacityParams,
  CockpitParams,
  CreditLineParams,
  ServiceCallProblemTypeParams,
  ActivityParams,
  DepreciationAreaParams,
  DnfCodeSetupParams,
  TaxWebSiteParams,
  ReportTypeParams,
  RecurringPostingsParams,
  CertificateSeriesParams,
  SectionParams,
  RetornoCodeParams,
  WarehouseSublevelCodeParams,
  ApprovalRequestParams,
  BinLocationFieldParams,
  DepreciationTypePoolParams,
  PostingTemplatesParams,
  BinLocationAttributeParams,
  PmcAreaData,
  PeriodCategoryParams,
  CampaignParams,
  UnitOfMeasurementParams,
  CostElementParams,
  ActivitySubjectParams,
  BinLocationParams,
  DepartmentParams,
  AssetClassParams,
  NatureOfAssesseeParams,
  ApprovalTemplateParams,
  LandedCostParams,
  BarCodeParams,
  InventoryPostingParams,
  BlanketAgreementParams,
  ServiceCallTypeParams,
  WebClientVariantParams,
  CountryParams,
  StateParams,
  KpiParams,
  EmployeeIdTypeParams,
  CostCenterTypeParams,
  TargetGroupParams,
  ExtendedTranslationParams,
  PartnersSetupParams,
  OccurenceCodeParams,
  ServiceCallStatusParams,
  ServiceCallSolutionStatusParams,
  EmailGroupParams,
  ServiceCallOriginParams,
  EmployeePositionParams,
  GlAccountAdvancedRuleParams,
  TrackingNoteParams,
  PmcPriorityData,
  ApprovalStageParams,
  DimensionParams,
  ServiceGroupParams,
  UserGroupParams,
  TsrExceptionalEventParams,
  TaxCodeDeterminationParams,
  IntrastatConfigurationParams,
  PmcSubprojectTypeData,
  EmployeeTransferParams,
  PmcActivityData,
  DeterminationCriteriaParams,
  EwbTransporterParams,
  PmcTaskData,
  ActivityRecipientListParams,
  WebClientPreferenceParams,
  WebClientLaunchpadParams,
  WebClientBookmarkTileParams,
  WebClientNotificationParams,
  WebClientDashboardParams,
  WebClientRecentActivityParams,
  DeductibleTaxParams,
  BpVatExemptionsParams,
  WTaxTypeCodeParams,
  RclRecurringTransaction,
  PaymentReasonCodeParams,
  PredefinedTextParams,
  ExceptionalEventParams,
  ServiceCallProblemSubTypeParams,
  EmploymentCategoryParams,
  ShortLinkMappingParams,
  BemReplicationPeriodParams,
  AccountCategoryParams,
  BankChargesAllocationCodeParams,
  BoeDocumentTypeParams,
  CashFlowLineItemParams,
  CampaignResponseTypeParams,
  MobileServerDateTime,
  PmcStageTypeData,
  IndiaSacCodeParams,
  FaAccountDeterminationParams,
  NfTaxCategoryParams,
  TaxCodeDeterminationTcdParams,
  BoePortfolioParams,
  CheckLineParams,
  ResourceParams,
  ResourcePropertyParams,
  ResourceGroupParams,
  BoeInstructionParams,
  InventoryOpeningBalanceParams,
  WebClientListviewFilterParams,
  GovPayCodeParams,
  DepreciationTypeParams,
  ElectronicFileFormatParams,
  BusinessPartnerPropertyParams,
  TransactionCodeParams,
  MobileAddOnSettingParams,
  AccrualTypeParams,
  NfModelParams,
  BrazilFuelIndexerParams,
  DistributionRuleParams,
  ProjectParams,
  DeductionTaxSubGroupParams,
  RouteStageParams
} from './index';

/**
 * Batch builder for operations supported on the Sapb1.
 * @param requests The requests of the batch
 * @returns A request builder for batch.
 */
export function batch<DeSerializersT extends DeSerializers>(
  ...requests: Array<
    ReadSapb1RequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  requests: Array<
    ReadSapb1RequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT>;
export function batch<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | ReadSapb1RequestBuilder<DeSerializersT>
    | BatchChangeSet<DeSerializersT>
    | Array<
        ReadSapb1RequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
      >,
  ...rest: Array<
    ReadSapb1RequestBuilder<DeSerializersT> | BatchChangeSet<DeSerializersT>
  >
): ODataBatchRequestBuilder<DeSerializersT> {
  return new ODataBatchRequestBuilder(
    defaultSapb1Path,
    transformVariadicArgumentToArray(first, rest)
  );
}

/**
 * Change set constructor consists of write operations supported on the Sapb1.
 * @param requests The requests of the change set
 * @returns A change set for batch.
 */
export function changeset<DeSerializersT extends DeSerializers>(
  ...requests: Array<WriteSapb1RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  requests: Array<WriteSapb1RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT>;
export function changeset<DeSerializersT extends DeSerializers>(
  first:
    | undefined
    | WriteSapb1RequestBuilder<DeSerializersT>
    | Array<WriteSapb1RequestBuilder<DeSerializersT>>,
  ...rest: Array<WriteSapb1RequestBuilder<DeSerializersT>>
): BatchChangeSet<DeSerializersT> {
  return new BatchChangeSet(transformVariadicArgumentToArray(first, rest));
}

export const defaultSapb1Path = '/';
export type ReadSapb1RequestBuilder<DeSerializersT extends DeSerializers> =
  | GetAllRequestBuilder<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bprstrt<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Boquot<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Boostp<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Boodfs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Boemail<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bncsta<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bncprt<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bncinc<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bnccst<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bncadm<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bld_Lytd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Beprefs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bd_Srep<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bd_Ctax<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Sn_Url<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bcesett<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bcenote<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bbtext<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bbsbcs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bboatv<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bblog1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bblog<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bbflds<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bbatv1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Styp1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bbvals<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Strn<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Ssta1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bnctrn<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Ssta<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Smod<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Oocr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bld_Blob<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bnoint<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odrn2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odpv<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Mdim2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cpol1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cpol<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cdpt1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cdpa1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bncnta<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Masterartikel<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Kalkulation<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Angebots_Anfrage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesOpportunities<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserDefaultGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ActivitySubjects<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Messages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AlertManagements<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bd_Cset<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ItemProperties<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BudgetDistributions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CreditCardPayments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<LandedCosts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<StockTransfers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProductTrees<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Warehouses<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bnccom<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Projects<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DistributionRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Oprj<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ProfitCenters<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ChecksforPayment<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PostingTemplates<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<LegalData<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BrazilBeverageIndexers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NfModels<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Boword<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AccrualTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CostCenterTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseQuotations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaxCodeDeterminations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DeductionTaxSubGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesPersons<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ItemGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<LengthMeasures<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bd_Spath<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<VatGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ShippingTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<MobileAddOnSetting<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeTransfers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ReportFilter<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ImportDeterminations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ElectronicDocuments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bbatv2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaxReplStateSubs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AssetTransfer<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceCalls<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bnccry<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Items<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CorrectionInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Teams<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EwbTransporters<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomerEquipmentCards<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CorrectionInvoice<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseDeliveryNotes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ResourceGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CorrectionPurchaseInvoice<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PartnersSetups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserQueries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<JournalEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PickLists<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PaymentBlocks<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InventoryGenEntries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserFieldsMd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ActivityTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DunningLetters<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WeightMeasures<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BpVatExemptions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      IntegrationPackagesConfigure<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ContractTemplates<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AssetRetirement<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Holidays<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Banks<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApprovalTemplates<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AssetRevaluations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      JournalEntryDocumentTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BinLocations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bfuserforms<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EnhancedDiscountGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BrazilNumericIndexers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeesInfo<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AssetClasses<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NotaFiscalCfop<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AlternateCatNum<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DeterminationCriterias<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Beolic<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ServiceCallProblemTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Budgets<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeIdType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AssetCapitalization<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ActivityLocations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bosettings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FiscalPrinter<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WizardPaymentMethods<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Forms1099<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<KpIs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<GlAccountAdvancedRules<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceContracts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PredefinedTexts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CommissionGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InventoryGenExits<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ReportTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DepreciationTypePools<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AccountSegmentations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceCallOrigins<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Cto_Toa<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<MaterialRevaluation<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TerminationReason<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Drafts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<U_Bbhbcs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AdditionalExpenses<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaxExemptReasons<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DepreciationTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOpportunityReasonsSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      InternalReconciliations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<AccountCategory<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BarCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesStages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bpcntr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InventoryCountings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ClosingDateProcedure<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Relationships<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      AssetDepreciationGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      BusinessPartnerProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BusinessPartnerGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<AssetGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Cto_Cfg<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<RetornoCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ValueMapping<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ValueMappingCommunication<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<U_Bostp1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomsGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DynamicSystemStrings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeRolesSetup<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientLaunchpads<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApprovalRequests<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ResourceCapacities<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cnum<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaxInvoiceReport<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WarehouseSublevelCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Sections<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bnoint2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BinLocationFields<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<QueryAuthGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExtendedTranslations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExportDeterminations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserTablesMd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bfextdbversion<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      CycleCountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Queue<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InventoryPostings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceCallTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ReturnRequest<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FinancialYears<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DeliveryNotes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CreditPaymentMethods<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NfTaxCategories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<CertificateSeries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BankStatements<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOpportunityCompetitorsSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Users<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseInvoices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<StockTransferDrafts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Branches<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<QueryCategories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeStatus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odoc<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BpPriorities<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IntrastatConfiguration<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceCallStatus<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BlanketAgreements<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bosynclog<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CampaignResponseType<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Campaigns<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ChooseFromList<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<States<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FactoringIndicators<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UnitOfMeasurements<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmploymentCategorys<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odrn<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Departments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Manufacturers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<OccurrenceCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TargetGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExceptionalEvents<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Booadm<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bblogm<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BoePortfolios<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bd_Serr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CreditNotes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<
      AssetCapitalizationCreditMemo<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PaymentRunExport<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PaymentDrafts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<KnowledgeBaseSolutions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<Contacts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<RouteStages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseCreditNotes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<InventoryCycles<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BinLocationAttributes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ResourceProperties<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DunningTerms<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesForecast<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TrackingNotes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPartners<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bncstp<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DnfCodeSetup<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Industries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProductionOrders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IndiaHsn<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CestCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserKeysMd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DownPayments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesTaxInvoices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseDownPayments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PackagesTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmailGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<NcmCodesSetup<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ApprovalStages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseReturns<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Cockpits<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeePosition<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PriceLists<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserPermissionTree<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ActivityStatuses<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NatureOfAssessees<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FormattedSearches<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Styp<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Activities<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<RecurringPostings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseOrders<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CashFlowLineItems<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Cto_Tob<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Attachments2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserLanguages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Quotations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Returns<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DepreciationAreas<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<HouseBankAccounts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BrazilStringIndexers<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PosDailySummary<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientVariantGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SpecialPrices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WitholdingTaxDefinition<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<ProjectManagements<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<GoodsReturnRequest<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Strn1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ActivityRecipientLists<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientBookmarkTiles<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientFormSettings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SerialNumberDetails<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientNotifications<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WebClientRecentActivities<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<WebClientPreferences<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DeductibleTaxs<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SqlQueries<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WTaxTypeCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SalesTaxCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TransportationDocument<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PaymentTermsTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BankPages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TransactionCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EBooks<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<UserObjectsMd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      MultiLanguageTranslations<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<PaymentReasonCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bld_Prnd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TsrExceptionalEvents<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BudgetScenarios<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      CorrectionPurchaseInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BoeInstructions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bld_Gnrl<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      WebClientListviewFilters<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BemReplicationPeriods<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ExpenseTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IncomingPayments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<GovPayCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Oamd<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Deposits<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<LocalEra<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseRequests<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Dimensions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IdentificationCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientDashboards<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<IndiaSacCode<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ServiceGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<MaterialGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CostElements<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DefaultElementsforCr<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BatchNumberDetails<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<WebClientVariants<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SingleUserConnections<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Cudf1<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<SqlViews<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<TaxWebSites<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NotaFiscalCst<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Bld_Pdln<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Technik<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<NotaFiscalUsage<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<
      TaxCodeDeterminationsTcd<DeSerializersT>,
      DeSerializersT
    >
  | GetAllRequestBuilder<BoeDocumentTypes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Boexcel<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<DeductionTaxGroups<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<PurchaseTaxInvoices<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CustomsDeclaration<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<BusinessPlaces<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<StockTakings<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<CreditCards<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<FormPreferences<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ElectronicFileFormats<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<VendorPayments<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Sdpm<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<U_Ba_Rpts<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<LandedCostsCodes<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<B1Sessions<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<ItemImages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<EmployeeImages<DeSerializersT>, DeSerializersT>
  | GetAllRequestBuilder<Pictures<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bprstrt<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Boquot<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Boostp<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Boodfs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Boemail<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bncsta<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bncprt<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bncinc<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bnccst<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bncadm<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bld_Lytd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Beprefs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bd_Srep<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bd_Ctax<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Sn_Url<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bcesett<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bcenote<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bbtext<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bbsbcs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bboatv<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bblog1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bblog<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bbflds<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bbatv1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Styp1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bbvals<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Strn<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Ssta1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bnctrn<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Ssta<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Smod<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Oocr<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bld_Blob<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bnoint<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odrn2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odpv<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Mdim2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cpol1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cpol<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cdpt1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cdpa1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bncnta<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Masterartikel<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Kalkulation<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Angebots_Anfrage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesOpportunities<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserDefaultGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ActivitySubjects<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Messages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AlertManagements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bd_Cset<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ItemProperties<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BudgetDistributions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CreditCardPayments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LandedCosts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<StockTransfers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProductTrees<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Warehouses<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bnccom<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Projects<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DistributionRules<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Oprj<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ProfitCenters<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ChecksforPayment<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PostingTemplates<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LegalData<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BrazilBeverageIndexers<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<NfModels<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Boword<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AccrualTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CostCenterTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseQuotations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TaxCodeDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      DeductionTaxSubGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SalesPersons<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ItemGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LengthMeasures<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bd_Spath<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<VatGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ShippingTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<MobileAddOnSetting<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeTransfers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ReportFilter<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ImportDeterminations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ElectronicDocuments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bbatv2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TaxReplStateSubs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AssetTransfer<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ServiceCalls<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bnccry<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Items<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CorrectionInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Teams<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EwbTransporters<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CustomerEquipmentCards<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<CorrectionInvoice<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      PurchaseDeliveryNotes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ResourceGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CorrectionPurchaseInvoice<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PartnersSetups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserQueries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<JournalEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PickLists<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PaymentBlocks<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InventoryGenEntries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserFieldsMd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ActivityTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DunningLetters<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WeightMeasures<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BpVatExemptions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IntegrationPackagesConfigure<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ContractTemplates<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AssetRetirement<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Holidays<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Banks<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApprovalTemplates<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AssetRevaluations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      JournalEntryDocumentTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BinLocations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bfuserforms<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      EnhancedDiscountGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BrazilNumericIndexers<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<EmployeesInfo<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AssetClasses<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<NotaFiscalCfop<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AlternateCatNum<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      DeterminationCriterias<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<U_Beolic<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ServiceCallProblemTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Budgets<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeIdType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AssetCapitalization<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ActivityLocations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bosettings<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FiscalPrinter<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WizardPaymentMethods<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Forms1099<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<KpIs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      GlAccountAdvancedRules<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceContracts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PredefinedTexts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CommissionGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InventoryGenExits<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ReportTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      DepreciationTypePools<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AccountSegmentations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ServiceCallOrigins<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Cto_Toa<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<MaterialRevaluation<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TerminationReason<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Drafts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<U_Bbhbcs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<AdditionalExpenses<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TaxExemptReasons<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DepreciationTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOpportunityReasonsSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      InternalReconciliations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AccountCategory<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BarCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesStages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bpcntr<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InventoryCountings<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ClosingDateProcedure<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Relationships<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      AssetDepreciationGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BusinessPartnerProperties<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BusinessPartnerGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<AssetGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Cto_Cfg<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<RetornoCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ValueMapping<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ValueMappingCommunication<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<U_Bostp1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomsGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DynamicSystemStrings<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeRolesSetup<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WebClientLaunchpads<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApprovalRequests<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ResourceCapacities<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cnum<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TaxInvoiceReport<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WarehouseSublevelCodes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Sections<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bnoint2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BinLocationFields<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<QueryAuthGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExtendedTranslations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExportDeterminations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserTablesMd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bfextdbversion<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      CycleCountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Queue<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InventoryPostings<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ServiceCallTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ReturnRequest<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FinancialYears<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DeliveryNotes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CreditPaymentMethods<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<NfTaxCategories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<CertificateSeries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BankStatements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOpportunityCompetitorsSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Users<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseInvoices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<StockTransferDrafts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Branches<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<QueryCategories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeStatus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odoc<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BpPriorities<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      IntrastatConfiguration<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ServiceCallStatus<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BlanketAgreements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bosynclog<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CampaignResponseType<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Campaigns<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ChooseFromList<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<States<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FactoringIndicators<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UnitOfMeasurements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmploymentCategorys<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odrn<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Departments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Manufacturers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<OccurrenceCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TargetGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ExceptionalEvents<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Booadm<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bblogm<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BoePortfolios<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bd_Serr<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CreditNotes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      AssetCapitalizationCreditMemo<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PaymentRunExport<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PaymentDrafts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      KnowledgeBaseSolutions<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<Contacts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<RouteStages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseCreditNotes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<InventoryCycles<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      BinLocationAttributes<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ResourceProperties<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DunningTerms<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesForecast<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TrackingNotes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessPartners<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bncstp<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DnfCodeSetup<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Industries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProductionOrders<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IndiaHsn<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CestCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserKeysMd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DownPayments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesTaxInvoices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseDownPayments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PackagesTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmailGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<NcmCodesSetup<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ApprovalStages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseReturns<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Cockpits<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeePosition<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PriceLists<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserPermissionTree<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ActivityStatuses<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<NatureOfAssessees<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FormattedSearches<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Styp<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Activities<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<RecurringPostings<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseOrders<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CashFlowLineItems<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Cto_Tob<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Attachments2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserLanguages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Quotations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Returns<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DepreciationAreas<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<HouseBankAccounts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BrazilStringIndexers<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PosDailySummary<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WebClientVariantGroups<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SpecialPrices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WitholdingTaxDefinition<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ProjectManagements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<GoodsReturnRequest<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Strn1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ActivityRecipientLists<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      WebClientBookmarkTiles<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      WebClientFormSettings<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<SerialNumberDetails<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WebClientNotifications<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      WebClientRecentActivities<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<WebClientPreferences<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DeductibleTaxs<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SqlQueries<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WTaxTypeCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SalesTaxCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TransportationDocument<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PaymentTermsTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BankPages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TransactionCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EBooks<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<UserObjectsMd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      MultiLanguageTranslations<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<PaymentReasonCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bld_Prnd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TsrExceptionalEvents<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BudgetScenarios<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      CorrectionPurchaseInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BoeInstructions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bld_Gnrl<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      WebClientListviewFilters<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<
      BemReplicationPeriods<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<ExpenseTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IncomingPayments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<GovPayCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Oamd<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Deposits<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LocalEra<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseRequests<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Dimensions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IdentificationCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WebClientDashboards<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<IndiaSacCode<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ServiceGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<MaterialGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CostElements<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DefaultElementsforCr<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BatchNumberDetails<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<WebClientVariants<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      SingleUserConnections<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<U_Ba_Cudf1<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<SqlViews<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<TaxWebSites<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<NotaFiscalCst<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Bld_Pdln<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Technik<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<NotaFiscalUsage<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      TaxCodeDeterminationsTcd<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<BoeDocumentTypes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Boexcel<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<DeductionTaxGroups<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<PurchaseTaxInvoices<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CustomsDeclaration<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<BusinessPlaces<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<StockTakings<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<CreditCards<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<FormPreferences<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<
      ElectronicFileFormats<DeSerializersT>,
      DeSerializersT
    >
  | GetByKeyRequestBuilder<VendorPayments<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Sdpm<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<U_Ba_Rpts<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<LandedCostsCodes<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<B1Sessions<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<ItemImages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<EmployeeImages<DeSerializersT>, DeSerializersT>
  | GetByKeyRequestBuilder<Pictures<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      LicenseServiceGetInstallationNumberParameters<DeSerializersT>,
      string | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CompanyServiceGetAdminInfoParameters<DeSerializersT>,
      AdminInfo | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CompanyServiceGetPathAdminParameters<DeSerializersT>,
      PathAdmin | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ElectronicDocumentServiceGetProtocolsParameters<DeSerializersT>,
      ElectronicDocuments[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CompanyServiceGetCompanyInfoParameters<DeSerializersT>,
      CompanyInfo | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceGetSystemPermissionParameters<DeSerializersT>,
      number | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UserMenuServiceGetCurrentUserMenuParameters<DeSerializersT>,
      UserMenuItem[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceGetDueDateParameters<DeSerializersT>,
      string | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceGetIndexRateParameters<DeSerializersT>,
      number | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MessagesServiceGetInboxParameters<DeSerializersT>,
      MessageHeader[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceGetSystemCurrencyParameters<DeSerializersT>,
      string | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceFormatMoneyToStringParameters<DeSerializersT>,
      string | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MessagesServiceGetOutboxParameters<DeSerializersT>,
      MessageHeader[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceGetCurrencyRateParameters<DeSerializersT>,
      number | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceGetLocalCurrencyParameters<DeSerializersT>,
      string | null
    >;
export type WriteSapb1RequestBuilder<DeSerializersT extends DeSerializers> =
  | CreateRequestBuilder<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bs_Bestmonitor<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bprstrt<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bprstrt<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bprstrt<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Boquot<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Boquot<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Boquot<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Boostp<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Boostp<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Boostp<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Boodfs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Boodfs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Boodfs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Boemail<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Boemail<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Boemail<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bncsta<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bncsta<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bncsta<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bncprt<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bncprt<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bncprt<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bncinc<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bncinc<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bncinc<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bnccst<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bnccst<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bnccst<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bncadm<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bncadm<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bncadm<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Edi_Unitcodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bld_Lytd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bld_Lytd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bld_Lytd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Beprefs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Beprefs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Beprefs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bd_Srep<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bd_Srep<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bd_Srep<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bd_Ctax<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bd_Ctax<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bd_Ctax<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Sn_Url<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Sn_Url<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Sn_Url<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bcesett<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bcesett<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bcesett<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bcenote<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bcenote<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bcenote<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bbtext<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbtext<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbtext<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bbsbcs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbsbcs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbsbcs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bboatv<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bboatv<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bboatv<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bblog1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bblog1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bblog1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bblog<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bblog<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bblog<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bbflds<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbflds<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbflds<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bbatv1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbatv1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbatv1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Styp1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Styp1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Styp1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bbvals<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbvals<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbvals<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Strn<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Strn<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Strn<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Ssta1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Ssta1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Ssta1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bnctrn<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bnctrn<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bnctrn<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Ssta<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Ssta<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Ssta<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Smod<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Smod<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Smod<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Sdpm1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Oocr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Oocr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Oocr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Ofpr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bld_Blob<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bld_Blob<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bld_Blob<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odrn3<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bnoint<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bnoint<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bnoint<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odrn2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odrn2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odrn2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odpvn<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odpv<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odpv<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odpv<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odoc3<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Oamd3<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Mdim2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Mdim2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Mdim2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cpol1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cpol1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cpol1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cpol<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cpol<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cpol<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cmdim<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bs_Aufmonitor<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cdtn<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cdpt1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cdpt1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cdpt1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cdpa1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cdpa1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cdpa1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bncnta<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bncnta<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bncnta<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cclsdpa<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Masterartikel<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Masterartikel<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Masterartikel<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Kalkulation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Kalkulation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Kalkulation<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Angebots_Anfrage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Angebots_Anfrage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Angebots_Anfrage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesOpportunities<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesOpportunities<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesOpportunities<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserDefaultGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserDefaultGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserDefaultGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ActivitySubjects<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ActivitySubjects<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ActivitySubjects<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Messages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Messages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Messages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AlertManagements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AlertManagements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AlertManagements<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bd_Cset<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bd_Cset<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bd_Cset<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ItemProperties<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ItemProperties<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ItemProperties<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BudgetDistributions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BudgetDistributions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BudgetDistributions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CreditCardPayments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CreditCardPayments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CreditCardPayments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<LandedCosts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LandedCosts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LandedCosts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<StockTransfers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<StockTransfers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<StockTransfers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProductTrees<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductTrees<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductTrees<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Warehouses<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Warehouses<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Warehouses<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bnccom<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bnccom<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bnccom<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Projects<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Projects<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Projects<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DistributionRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DistributionRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DistributionRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Oprj<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Oprj<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Oprj<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ProfitCenters<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProfitCenters<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProfitCenters<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ChecksforPayment<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ChecksforPayment<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ChecksforPayment<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PostingTemplates<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PostingTemplates<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PostingTemplates<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<LegalData<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LegalData<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LegalData<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BrazilBeverageIndexers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BrazilBeverageIndexers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BrazilBeverageIndexers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NfModels<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NfModels<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NfModels<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Boword<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Boword<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Boword<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AccrualTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AccrualTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AccrualTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CostCenterTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CostCenterTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CostCenterTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseQuotations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseQuotations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseQuotations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaxCodeDeterminations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaxCodeDeterminations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaxCodeDeterminations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DeductionTaxSubGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DeductionTaxSubGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DeductionTaxSubGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesPersons<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesPersons<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesPersons<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ItemGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ItemGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ItemGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<LengthMeasures<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LengthMeasures<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LengthMeasures<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bd_Spath<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bd_Spath<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bd_Spath<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<VatGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<VatGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<VatGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ShippingTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ShippingTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ShippingTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<MobileAddOnSetting<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MobileAddOnSetting<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MobileAddOnSetting<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeTransfers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeTransfers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeTransfers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ReportFilter<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ReportFilter<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ReportFilter<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceCallProblemSubTypes<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ImportDeterminations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ImportDeterminations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ImportDeterminations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ElectronicDocuments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ElectronicDocuments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ElectronicDocuments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bbatv2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbatv2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbatv2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaxReplStateSubs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaxReplStateSubs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaxReplStateSubs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceCallSolutionStatus<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AssetTransfer<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AssetTransfer<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AssetTransfer<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceCalls<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceCalls<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceCalls<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bnccry<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bnccry<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bnccry<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Items<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Items<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Items<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CorrectionInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CorrectionInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CorrectionInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Teams<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Teams<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Teams<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EwbTransporters<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EwbTransporters<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EwbTransporters<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomerEquipmentCards<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomerEquipmentCards<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomerEquipmentCards<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CorrectionInvoice<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CorrectionInvoice<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CorrectionInvoice<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WithholdingTaxCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseDeliveryNotes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseDeliveryNotes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseDeliveryNotes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ResourceGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ResourceGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ResourceGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CorrectionPurchaseInvoice<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CorrectionPurchaseInvoice<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CorrectionPurchaseInvoice<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PartnersSetups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PartnersSetups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PartnersSetups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserQueries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserQueries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserQueries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<JournalEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<JournalEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<JournalEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PickLists<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PickLists<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PickLists<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PaymentBlocks<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PaymentBlocks<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PaymentBlocks<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InventoryGenEntries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InventoryGenEntries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InventoryGenEntries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserFieldsMd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserFieldsMd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserFieldsMd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ActivityTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ActivityTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ActivityTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DunningLetters<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DunningLetters<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DunningLetters<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WeightMeasures<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WeightMeasures<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WeightMeasures<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BpVatExemptions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BpVatExemptions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BpVatExemptions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      IntegrationPackagesConfigure<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      IntegrationPackagesConfigure<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      IntegrationPackagesConfigure<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ContractTemplates<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ContractTemplates<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ContractTemplates<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AttributeGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AssetRetirement<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AssetRetirement<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AssetRetirement<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Holidays<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Holidays<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Holidays<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Banks<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Banks<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Banks<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApprovalTemplates<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApprovalTemplates<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApprovalTemplates<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AssetRevaluations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AssetRevaluations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AssetRevaluations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      JournalEntryDocumentTypes<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      JournalEntryDocumentTypes<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      JournalEntryDocumentTypes<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BinLocations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BinLocations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BinLocations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bfuserforms<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bfuserforms<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bfuserforms<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EnhancedDiscountGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EnhancedDiscountGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EnhancedDiscountGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AccountSegmentationCategories<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BrazilNumericIndexers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BrazilNumericIndexers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BrazilNumericIndexers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeesInfo<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeesInfo<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeesInfo<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AssetManualDepreciation<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AssetClasses<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AssetClasses<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AssetClasses<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NotaFiscalCfop<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NotaFiscalCfop<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NotaFiscalCfop<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AlternateCatNum<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AlternateCatNum<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AlternateCatNum<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DeterminationCriterias<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DeterminationCriterias<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DeterminationCriterias<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Beolic<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Beolic<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Beolic<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ServiceCallProblemTypes<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ServiceCallProblemTypes<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ServiceCallProblemTypes<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Budgets<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Budgets<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Budgets<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeIdType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeIdType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeIdType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Orders<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AssetCapitalization<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AssetCapitalization<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AssetCapitalization<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      FaAccountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ActivityLocations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ActivityLocations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ActivityLocations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bosettings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bosettings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bosettings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FiscalPrinter<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FiscalPrinter<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FiscalPrinter<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BrazilMultiIndexers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WizardPaymentMethods<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WizardPaymentMethods<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WizardPaymentMethods<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Forms1099<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Forms1099<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Forms1099<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<KpIs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KpIs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KpIs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<GlAccountAdvancedRules<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<GlAccountAdvancedRules<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<GlAccountAdvancedRules<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceContracts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceContracts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceContracts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PredefinedTexts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PredefinedTexts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PredefinedTexts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CommissionGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CommissionGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CommissionGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InventoryGenExits<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InventoryGenExits<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InventoryGenExits<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ReportTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ReportTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ReportTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DepreciationTypePools<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DepreciationTypePools<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DepreciationTypePools<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AccountSegmentations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AccountSegmentations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AccountSegmentations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceCallOrigins<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceCallOrigins<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceCallOrigins<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Cto_Toa<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Cto_Toa<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Cto_Toa<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<MaterialRevaluation<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaterialRevaluation<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaterialRevaluation<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TerminationReason<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TerminationReason<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TerminationReason<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Drafts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Drafts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Drafts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      InventoryTransferRequests<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<U_Bbhbcs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bbhbcs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bbhbcs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AdditionalExpenses<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AdditionalExpenses<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AdditionalExpenses<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaxExemptReasons<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaxExemptReasons<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaxExemptReasons<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DepreciationTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DepreciationTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DepreciationTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOpportunityReasonsSetup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOpportunityReasonsSetup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOpportunityReasonsSetup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      InternalReconciliations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      InternalReconciliations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      InternalReconciliations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<AccountCategory<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AccountCategory<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AccountCategory<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BarCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BarCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BarCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cdpt<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesStages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesStages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesStages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bpcntr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bpcntr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bpcntr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InventoryCountings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InventoryCountings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InventoryCountings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ClosingDateProcedure<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ClosingDateProcedure<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ClosingDateProcedure<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Relationships<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Relationships<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Relationships<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      AssetDepreciationGroups<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AssetDepreciationGroups<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AssetDepreciationGroups<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      BusinessPartnerProperties<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BusinessPartnerProperties<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BusinessPartnerProperties<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BusinessPartnerGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartnerGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartnerGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<AssetGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<AssetGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<AssetGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Cto_Cfg<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Cto_Cfg<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Cto_Cfg<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<RetornoCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RetornoCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RetornoCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      InventoryOpeningBalances<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ValueMapping<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ValueMapping<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ValueMapping<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ValueMappingCommunication<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ValueMappingCommunication<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ValueMappingCommunication<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<U_Bostp1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bostp1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bostp1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomsGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomsGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomsGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DynamicSystemStrings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DynamicSystemStrings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DynamicSystemStrings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeRolesSetup<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeRolesSetup<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeRolesSetup<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientLaunchpads<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientLaunchpads<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientLaunchpads<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApprovalRequests<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApprovalRequests<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApprovalRequests<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ResourceCapacities<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ResourceCapacities<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ResourceCapacities<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cnum<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cnum<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cnum<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOpportunitySourcesSetup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Countries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaxInvoiceReport<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaxInvoiceReport<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaxInvoiceReport<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WarehouseSublevelCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WarehouseSublevelCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WarehouseSublevelCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Sections<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Sections<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Sections<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bnoint2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bnoint2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bnoint2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BinLocationFields<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BinLocationFields<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BinLocationFields<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<QueryAuthGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<QueryAuthGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<QueryAuthGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Resources<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExtendedTranslations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExtendedTranslations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExtendedTranslations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExportDeterminations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExportDeterminations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExportDeterminations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserTablesMd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserTablesMd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserTablesMd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cdpa<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ChartOfAccounts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bfextdbversion<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bfextdbversion<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bfextdbversion<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BillOfExchangeTransactions<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      CycleCountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CycleCountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CycleCountDeterminations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Queue<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Queue<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Queue<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InventoryPostings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InventoryPostings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InventoryPostings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceCallTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceCallTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceCallTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ReturnRequest<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ReturnRequest<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ReturnRequest<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FinancialYears<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FinancialYears<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FinancialYears<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DeliveryNotes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DeliveryNotes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DeliveryNotes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CreditPaymentMethods<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CreditPaymentMethods<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CreditPaymentMethods<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NfTaxCategories<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NfTaxCategories<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NfTaxCategories<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      BankChargesAllocationCodes<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<CertificateSeries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CertificateSeries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CertificateSeries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BankStatements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BankStatements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BankStatements<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOpportunityCompetitorsSetup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOpportunityCompetitorsSetup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOpportunityCompetitorsSetup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Users<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Users<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Users<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseInvoices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseInvoices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseInvoices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CashDiscounts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<StockTransferDrafts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<StockTransferDrafts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<StockTransferDrafts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Branches<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Branches<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Branches<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<QueryCategories<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<QueryCategories<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<QueryCategories<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeStatus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeStatus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeStatus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odoc<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odoc<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odoc<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BpPriorities<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BpPriorities<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BpPriorities<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IntrastatConfiguration<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IntrastatConfiguration<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IntrastatConfiguration<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceCallStatus<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceCallStatus<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceCallStatus<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BlanketAgreements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BlanketAgreements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BlanketAgreements<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bosynclog<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bosynclog<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bosynclog<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesTaxAuthorities<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Invoices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CampaignResponseType<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CampaignResponseType<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CampaignResponseType<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Campaigns<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Campaigns<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Campaigns<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ChooseFromList<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ChooseFromList<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ChooseFromList<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<States<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<States<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<States<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FactoringIndicators<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FactoringIndicators<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FactoringIndicators<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UnitOfMeasurements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UnitOfMeasurements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UnitOfMeasurements<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmploymentCategorys<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmploymentCategorys<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmploymentCategorys<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odrn<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odrn<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odrn<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Departments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Departments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Departments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Manufacturers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Manufacturers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Manufacturers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<OccurrenceCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<OccurrenceCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<OccurrenceCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TargetGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TargetGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TargetGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BrazilFuelIndexers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExceptionalEvents<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExceptionalEvents<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExceptionalEvents<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Booadm<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Booadm<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Booadm<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bblogm<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bblogm<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bblogm<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesOpportunityInterestsSetup<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BoePortfolios<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BoePortfolios<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BoePortfolios<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bd_Serr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bd_Serr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bd_Serr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CreditNotes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CreditNotes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CreditNotes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      SalesTaxAuthoritiesTypes<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<
      AssetCapitalizationCreditMemo<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      AssetCapitalizationCreditMemo<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      AssetCapitalizationCreditMemo<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PaymentRunExport<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PaymentRunExport<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PaymentRunExport<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PaymentDrafts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PaymentDrafts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PaymentDrafts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<KnowledgeBaseSolutions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<KnowledgeBaseSolutions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<KnowledgeBaseSolutions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      DeductionTaxHierarchies<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<Contacts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Contacts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Contacts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<RouteStages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RouteStages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RouteStages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseCreditNotes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseCreditNotes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseCreditNotes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EdiGpEinstellungen<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<InventoryCycles<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<InventoryCycles<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<InventoryCycles<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BinLocationAttributes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BinLocationAttributes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BinLocationAttributes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ResourceProperties<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ResourceProperties<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ResourceProperties<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DunningTerms<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DunningTerms<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DunningTerms<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesForecast<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesForecast<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesForecast<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TrackingNotes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TrackingNotes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TrackingNotes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPartners<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPartners<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPartners<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bncstp<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bncstp<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bncstp<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DnfCodeSetup<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DnfCodeSetup<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DnfCodeSetup<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Industries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Industries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Industries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      UnitOfMeasurementGroups<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProductionOrders<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProductionOrders<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProductionOrders<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IndiaHsn<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IndiaHsn<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IndiaHsn<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CestCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CestCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CestCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserKeysMd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserKeysMd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserKeysMd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DownPayments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DownPayments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DownPayments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesTaxInvoices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesTaxInvoices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesTaxInvoices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseDownPayments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseDownPayments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseDownPayments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PackagesTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PackagesTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PackagesTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Oamd2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmailGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmailGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmailGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      ProjectManagementTimeSheet<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<NcmCodesSetup<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NcmCodesSetup<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NcmCodesSetup<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ApprovalStages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ApprovalStages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ApprovalStages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseReturns<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseReturns<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseReturns<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Cockpits<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Cockpits<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Cockpits<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeePosition<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeePosition<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeePosition<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Currencies<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PriceLists<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PriceLists<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PriceLists<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Territories<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserPermissionTree<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserPermissionTree<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserPermissionTree<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ActivityStatuses<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ActivityStatuses<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ActivityStatuses<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NatureOfAssessees<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NatureOfAssessees<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NatureOfAssessees<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FormattedSearches<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FormattedSearches<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FormattedSearches<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Styp<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Styp<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Styp<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Activities<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Activities<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Activities<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<RecurringPostings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<RecurringPostings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<RecurringPostings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseOrders<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseOrders<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseOrders<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Vertrieb_Planung<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CashFlowLineItems<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CashFlowLineItems<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CashFlowLineItems<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Cto_Tob<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Cto_Tob<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Cto_Tob<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Attachments2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Attachments2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Attachments2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserLanguages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserLanguages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserLanguages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Quotations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Quotations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Quotations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Returns<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Returns<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Returns<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DepreciationAreas<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DepreciationAreas<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DepreciationAreas<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<HouseBankAccounts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<HouseBankAccounts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<HouseBankAccounts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BrazilStringIndexers<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BrazilStringIndexers<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BrazilStringIndexers<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PosDailySummary<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PosDailySummary<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PosDailySummary<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientVariantGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientVariantGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientVariantGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SpecialPrices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SpecialPrices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SpecialPrices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WitholdingTaxDefinition<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WitholdingTaxDefinition<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WitholdingTaxDefinition<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<ProjectManagements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ProjectManagements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ProjectManagements<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<GoodsReturnRequest<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<GoodsReturnRequest<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<GoodsReturnRequest<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Strn1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Strn1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Strn1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ActivityRecipientLists<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ActivityRecipientLists<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ActivityRecipientLists<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientBookmarkTiles<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientBookmarkTiles<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientBookmarkTiles<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientFormSettings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientFormSettings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientFormSettings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SerialNumberDetails<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SerialNumberDetails<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SerialNumberDetails<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientNotifications<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientNotifications<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientNotifications<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WebClientRecentActivities<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WebClientRecentActivities<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WebClientRecentActivities<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<WebClientPreferences<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientPreferences<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientPreferences<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WarehouseLocations<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DeductibleTaxs<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DeductibleTaxs<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DeductibleTaxs<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SqlQueries<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SqlQueries<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SqlQueries<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WTaxTypeCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WTaxTypeCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WTaxTypeCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SalesTaxCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SalesTaxCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SalesTaxCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TransportationDocument<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TransportationDocument<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TransportationDocument<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PaymentTermsTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PaymentTermsTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PaymentTermsTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BankPages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BankPages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BankPages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TransactionCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TransactionCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TransactionCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EBooks<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EBooks<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EBooks<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Rptdt<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<UserObjectsMd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<UserObjectsMd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<UserObjectsMd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      MultiLanguageTranslations<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      MultiLanguageTranslations<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      MultiLanguageTranslations<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<PaymentReasonCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PaymentReasonCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PaymentReasonCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bld_Prnd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bld_Prnd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bld_Prnd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BpFiscalRegistryId<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TsrExceptionalEvents<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TsrExceptionalEvents<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TsrExceptionalEvents<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BudgetScenarios<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BudgetScenarios<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BudgetScenarios<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      CorrectionPurchaseInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      CorrectionPurchaseInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      CorrectionPurchaseInvoiceReversal<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BoeInstructions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BoeInstructions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BoeInstructions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bld_Gnrl<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bld_Gnrl<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bld_Gnrl<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      WebClientListviewFilters<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      WebClientListviewFilters<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      WebClientListviewFilters<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BemReplicationPeriods<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BemReplicationPeriods<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BemReplicationPeriods<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ExpenseTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ExpenseTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ExpenseTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IncomingPayments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IncomingPayments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IncomingPayments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<GovPayCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<GovPayCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<GovPayCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Oamd<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Oamd<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Oamd<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Deposits<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Deposits<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Deposits<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Odoc2<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<LocalEra<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LocalEra<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LocalEra<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseRequests<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseRequests<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseRequests<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Dimensions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Dimensions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Dimensions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IdentificationCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IdentificationCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IdentificationCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientDashboards<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientDashboards<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientDashboards<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<IndiaSacCode<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<IndiaSacCode<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<IndiaSacCode<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ServiceGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ServiceGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ServiceGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<MaterialGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<MaterialGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<MaterialGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CostElements<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CostElements<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CostElements<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DefaultElementsforCr<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DefaultElementsforCr<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DefaultElementsforCr<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BatchNumberDetails<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BatchNumberDetails<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BatchNumberDetails<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<WebClientVariants<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<WebClientVariants<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<WebClientVariants<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SingleUserConnections<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SingleUserConnections<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SingleUserConnections<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Cudf1<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Cudf1<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Cudf1<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<SqlViews<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<SqlViews<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<SqlViews<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<TaxWebSites<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<TaxWebSites<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<TaxWebSites<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NotaFiscalCst<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NotaFiscalCst<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NotaFiscalCst<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Bld_Pdln<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Bld_Pdln<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Bld_Pdln<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Technik<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Technik<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Technik<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<NotaFiscalUsage<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<NotaFiscalUsage<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<NotaFiscalUsage<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<
      TaxCodeDeterminationsTcd<DeSerializersT>,
      DeSerializersT
    >
  | UpdateRequestBuilder<
      TaxCodeDeterminationsTcd<DeSerializersT>,
      DeSerializersT
    >
  | DeleteRequestBuilder<
      TaxCodeDeterminationsTcd<DeSerializersT>,
      DeSerializersT
    >
  | CreateRequestBuilder<BoeDocumentTypes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BoeDocumentTypes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BoeDocumentTypes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Boexcel<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Boexcel<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Boexcel<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<DeductionTaxGroups<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<DeductionTaxGroups<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<DeductionTaxGroups<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<PurchaseTaxInvoices<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<PurchaseTaxInvoices<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<PurchaseTaxInvoices<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CustomsDeclaration<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CustomsDeclaration<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CustomsDeclaration<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<BusinessPlaces<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<BusinessPlaces<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<BusinessPlaces<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<StockTakings<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<StockTakings<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<StockTakings<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<CreditCards<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<CreditCards<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<CreditCards<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<FormPreferences<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<FormPreferences<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<FormPreferences<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ElectronicFileFormats<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ElectronicFileFormats<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ElectronicFileFormats<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<VendorPayments<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<VendorPayments<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<VendorPayments<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Sdpm<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Sdpm<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Sdpm<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<U_Ba_Rpts<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<U_Ba_Rpts<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<U_Ba_Rpts<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<LandedCostsCodes<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<LandedCostsCodes<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<LandedCostsCodes<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<B1Sessions<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<B1Sessions<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<B1Sessions<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<ItemImages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<ItemImages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<ItemImages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<EmployeeImages<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<EmployeeImages<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<EmployeeImages<DeSerializersT>, DeSerializersT>
  | CreateRequestBuilder<Pictures<DeSerializersT>, DeSerializersT>
  | UpdateRequestBuilder<Pictures<DeSerializersT>, DeSerializersT>
  | DeleteRequestBuilder<Pictures<DeSerializersT>, DeSerializersT>
  | OperationRequestBuilder<
      DeSerializersT,
      LoginParameters<DeSerializersT>,
      B1Sessions | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      QueryServicePostQueryParameters<DeSerializersT>,
      string | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceSetCurrencyRateParameters<DeSerializersT>,
      undefined
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        OrdersServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AttributeGroupsServiceGetListParameters<DeSerializersT>,
      AttributeGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProfitCentersServiceGetProfitCenterListParameters<DeSerializersT>,
      ProfitCenterParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PaymentDraftsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseInvoicesServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CorrectionPurchaseInvoiceServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TerminationReasonServiceGetListParameters<DeSerializersT>,
      TerminationReasonParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DepositsServiceGetDepositListParameters<DeSerializersT>,
      DepositParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InvoicesServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        CorrectionInvoiceReversalServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CorrectionInvoiceServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientVariantGroupServiceGetListParameters<DeSerializersT>,
      WebClientVariantGroupParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        CorrectionPurchaseInvoiceReversalServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseRequestServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientFormSettingServiceGetListParameters<DeSerializersT>,
      WebClientFormSettingParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BrazilBeverageIndexersServiceGetListParameters<DeSerializersT>,
      BrazilBeverageIndexerParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        ReturnsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PaymentBlocksServiceGetPaymentBlockListParameters<DeSerializersT>,
      PaymentBlockParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        CorrectionPurchaseInvoiceServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOpportunityInterestsSetupServiceGetSalesOpportunityInterestSetupListParameters<DeSerializersT>,
      SalesOpportunityInterestSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      NcmCodesSetupServiceGetNcmCodeSetupListParameters<DeSerializersT>,
      NcmCodeSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceTaxPostingServiceGetTaxableDeliveriesParameters<DeSerializersT>,
      ServiceTaxPostingParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InventoryGenExitServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        DeliveryNotesServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      JournalEntryDocumentTypeServiceGetListParameters<DeSerializersT>,
      JournalEntryDocumentTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IntegrationPackagesConfigureServiceGetListParameters<DeSerializersT>,
      IntegrationPackageParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UnitOfMeasurementGroupsServiceGetListParameters<DeSerializersT>,
      UnitOfMeasurementGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetDepreciationGroupsServiceGetListParameters<DeSerializersT>,
      AssetDepreciationGroupParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        CorrectionInvoiceServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmployeeRolesSetupServiceGetEmployeeRoleSetupListParameters<DeSerializersT>,
      EmployeeRoleSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetRevaluationServiceGetListParameters<DeSerializersT>,
      AssetRevaluationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InventoryTransferRequestsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EnhancedDiscountGroupsServiceGetListParameters<DeSerializersT>,
      EnhancedDiscountGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DunningTermsServiceGetDunningTermListParameters<DeSerializersT>,
      DunningTermParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      HolidayServiceGetHolidayListParameters<DeSerializersT>,
      HolidayParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        QuotationsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        InvoicesServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UsersServiceGetCurrentUserParameters<DeSerializersT>,
      Users | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InventoryCountingsServiceGetListParameters<DeSerializersT>,
      InventoryCountingParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmployeeStatusServiceGetListParameters<DeSerializersT>,
      EmployeeStatusParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      FiscalPrinterServiceGetFiscalPrinterListParameters<DeSerializersT>,
      FiscalPrinterParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetManualDepreciationServiceGetListParameters<DeSerializersT>,
      AssetDocumentParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BranchesServiceGetBranchListParameters<DeSerializersT>,
      BranchParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetGroupsServiceGetListParameters<DeSerializersT>,
      AssetGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CycleCountDeterminationsServiceGetListParameters<DeSerializersT>,
      CycleCountDeterminationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IndiaHsnServiceGetListParameters<DeSerializersT>,
      IndiaHsnParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TaxExemptReasonServiceGetListParameters<DeSerializersT>,
      TaxExemptReasonParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MaterialGroupsServiceGetMaterialGroupListParameters<DeSerializersT>,
      MaterialGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CashDiscountsServiceGetCashDiscountListParameters<DeSerializersT>,
      CashDiscountParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        DownPaymentsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOpportunitySourcesSetupServiceGetSalesOpportunitySourceSetupListParameters<DeSerializersT>,
      SalesOpportunitySourceSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOpportunityReasonsSetupServiceGetSalesOpportunityReasonSetupListParameters<DeSerializersT>,
      SalesOpportunityReasonSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeliveryNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SalesOpportunityCompetitorsSetupServiceGetSalesOpportunityCompetitorSetupListParameters<DeSerializersT>,
      SalesOpportunityCompetitorSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CompanyServiceGetFeaturesStatusParameters<DeSerializersT>,
      FeatureStatus[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseReturnsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        DraftsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      FinancialYearsServiceGetFinancialYearListParameters<DeSerializersT>,
      FinancialYearParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        GoodsReturnRequestServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ResourceCapacitiesServiceGetListParameters<DeSerializersT>,
      ResourceCapacityParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CockpitsServiceGetTemplateCockpitListParameters<DeSerializersT>,
      CockpitParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CreditLinesServiceGetValidCreditLineListParameters<DeSerializersT>,
      CreditLineParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceCallProblemTypesServiceGetServiceCallProblemTypeListParameters<DeSerializersT>,
      ServiceCallProblemTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ActivitiesServiceGetActivityListParameters<DeSerializersT>,
      ActivityParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DepreciationAreasServiceGetListParameters<DeSerializersT>,
      DepreciationAreaParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DnfCodeSetupServiceGetDnfCodeSetupListParameters<DeSerializersT>,
      DnfCodeSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DraftsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TaxWebSitesServiceGetTaxWebSiteListParameters<DeSerializersT>,
      TaxWebSiteParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReportTypesServiceGetReportTypeListParameters<DeSerializersT>,
      ReportTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      RecurringPostingsServiceGetListParameters<DeSerializersT>,
      RecurringPostingsParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CertificateSeriesServiceGetCertificateSeriesListParameters<DeSerializersT>,
      CertificateSeriesParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SectionsServiceGetSectionListParameters<DeSerializersT>,
      SectionParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      RetornoCodesServiceGetListParameters<DeSerializersT>,
      RetornoCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WarehouseSublevelCodesServiceGetListParameters<DeSerializersT>,
      WarehouseSublevelCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CorrectionInvoiceReversalServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ApprovalRequestsServiceGetOpenApprovalRequestListParameters<DeSerializersT>,
      ApprovalRequestParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ApprovalRequestsServiceGetAllApprovalRequestsListParameters<DeSerializersT>,
      ApprovalRequestParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BinLocationFieldsServiceGetListParameters<DeSerializersT>,
      BinLocationFieldParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DepreciationTypePoolsServiceGetListParameters<DeSerializersT>,
      DepreciationTypePoolParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PostingTemplatesServiceGetListParameters<DeSerializersT>,
      PostingTemplatesParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BinLocationAttributesServiceGetListParameters<DeSerializersT>,
      BinLocationAttributeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectManagementConfigurationServiceGetAreasParameters<DeSerializersT>,
      PmcAreaData[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CorrectionPurchaseInvoiceReversalServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      StockTransferServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CompanyServiceGetPeriodsParameters<DeSerializersT>,
      PeriodCategoryParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      OrdersServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CampaignsServiceGetListParameters<DeSerializersT>,
      CampaignParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UnitOfMeasurementsServiceGetListParameters<DeSerializersT>,
      UnitOfMeasurementParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ApprovalRequestsServiceGetApprovalRequestListParameters<DeSerializersT>,
      ApprovalRequestParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BusinessPartnersServiceInitDataParameters<DeSerializersT>,
      BusinessPartners | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseCreditNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CostElementServiceGetCostElementListParameters<DeSerializersT>,
      CostElementParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TaxWebSitesServiceGetDefaultWebSiteParameters<DeSerializersT>,
      TaxWebSiteParams | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ActivitySubjectServiceGetActivitySubjectListParameters<DeSerializersT>,
      ActivitySubjectParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BinLocationsServiceGetListParameters<DeSerializersT>,
      BinLocationParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        CreditNotesServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CockpitsServiceGetUserCockpitListParameters<DeSerializersT>,
      CockpitParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      StockTransferDraftServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DepartmentsServiceGetDepartmentListParameters<DeSerializersT>,
      DepartmentParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetClassesServiceGetListParameters<DeSerializersT>,
      AssetClassParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      NatureOfAssesseesServiceGetNatureOfAssesseeListParameters<DeSerializersT>,
      NatureOfAssesseeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ApprovalTemplatesServiceGetApprovalTemplateListParameters<DeSerializersT>,
      ApprovalTemplateParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CockpitsServiceGetCockpitListParameters<DeSerializersT>,
      CockpitParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetCapitalizationCreditMemoServiceGetListParameters<DeSerializersT>,
      AssetDocumentParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      LandedCostsServiceGetLandedCostListParameters<DeSerializersT>,
      LandedCostParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CreditNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BarCodesServiceGetListParameters<DeSerializersT>,
      BarCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InventoryPostingsServiceGetListParameters<DeSerializersT>,
      InventoryPostingParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BlanketAgreementsServiceGetBlanketAgreementListParameters<DeSerializersT>,
      BlanketAgreementParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceCallTypesServiceGetServiceCallTypeListParameters<DeSerializersT>,
      ServiceCallTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseQuotationsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientVariantServiceGetListParameters<DeSerializersT>,
      WebClientVariantParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CountriesServiceGetCountryListParameters<DeSerializersT>,
      CountryParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      StatesServiceGetStateListParameters<DeSerializersT>,
      StateParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      KpIsServiceGetListParameters<DeSerializersT>,
      KpiParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseInvoicesServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmployeeIdTypeServiceGetListParameters<DeSerializersT>,
      EmployeeIdTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CostCenterTypesServiceGetCostCenterTypeListParameters<DeSerializersT>,
      CostCenterTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TargetGroupsServiceGetListParameters<DeSerializersT>,
      TargetGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ExtendedTranslationsServiceGetExtendedTranslationListParameters<DeSerializersT>,
      ExtendedTranslationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PartnersSetupsServiceGetListParameters<DeSerializersT>,
      PartnersSetupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      OccurrenceCodesServiceGetListParameters<DeSerializersT>,
      OccurenceCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceCallStatusServiceGetServiceCallStatusListParameters<DeSerializersT>,
      ServiceCallStatusParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceCallSolutionStatusServiceGetServiceCallSolutionStatusListParameters<DeSerializersT>,
      ServiceCallSolutionStatusParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseCreditNotesServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmailGroupsServiceGetListParameters<DeSerializersT>,
      EmailGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetCapitalizationServiceGetListParameters<DeSerializersT>,
      AssetDocumentParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceCallOriginsServiceGetServiceCallOriginListParameters<DeSerializersT>,
      ServiceCallOriginParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmployeePositionServiceGetListParameters<DeSerializersT>,
      EmployeePositionParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      GlAccountAdvancedRulesServiceGetListParameters<DeSerializersT>,
      GlAccountAdvancedRuleParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TrackingNotesServiceGetListParameters<DeSerializersT>,
      TrackingNoteParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseDeliveryNotesServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ShortLinkMappingsServiceBatchDeleteParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseDownPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectManagementConfigurationServiceGetPrioritiesParameters<DeSerializersT>,
      PmcPriorityData[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ApprovalStagesServiceGetApprovalStageListParameters<DeSerializersT>,
      ApprovalStageParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseReturnsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DimensionsServiceGetDimensionListParameters<DeSerializersT>,
      DimensionParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PurchaseOrdersServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        InventoryGenExitServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseOrdersServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      QuotationsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceGroupsServiceGetServiceGroupListParameters<DeSerializersT>,
      ServiceGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      UserGroupServiceGetUserGroupListParameters<DeSerializersT>,
      UserGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TsrExceptionalEventServiceGetListParameters<DeSerializersT>,
      TsrExceptionalEventParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      GoodsReturnRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TaxCodeDeterminationsServiceGetTaxCodeDeterminationListParameters<DeSerializersT>,
      TaxCodeDeterminationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IntrastatConfigurationServiceGetListParameters<DeSerializersT>,
      IntrastatConfigurationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      QueryAuthGroupServiceGetQueryAuthGroupListParameters<DeSerializersT>,
      QueryAuthGroups[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectManagementConfigurationServiceGetSubprojectTypesParameters<DeSerializersT>,
      PmcSubprojectTypeData[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReturnsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetRetirementServiceGetListParameters<DeSerializersT>,
      AssetDocumentParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmployeeTransfersServiceGetEmployeeTransferListParameters<DeSerializersT>,
      EmployeeTransferParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectManagementConfigurationServiceGetActivitiesParameters<DeSerializersT>,
      PmcActivityData[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeterminationCriteriasServiceGetListParameters<DeSerializersT>,
      DeterminationCriteriaParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EwbTransporterServiceGetEwbTransporterListParameters<DeSerializersT>,
      EwbTransporterParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectManagementConfigurationServiceGetTasksParameters<DeSerializersT>,
      PmcTaskData[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ReturnRequestServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AssetTransferServiceGetListParameters<DeSerializersT>,
      AssetDocumentParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        ReturnRequestServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ActivityRecipientListsServiceGetListParameters<DeSerializersT>,
      ActivityRecipientListParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientPreferenceServiceGetListParameters<DeSerializersT>,
      WebClientPreferenceParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientLaunchpadServiceGetListParameters<DeSerializersT>,
      WebClientLaunchpadParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientBookmarkTileServiceGetListParameters<DeSerializersT>,
      WebClientBookmarkTileParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IdentificationCodeServiceGetListParameters<DeSerializersT>,
      IdentificationCodes[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientNotificationServiceGetListParameters<DeSerializersT>,
      WebClientNotificationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientDashboardServiceGetListParameters<DeSerializersT>,
      WebClientDashboardParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientRecentActivityServiceGetListParameters<DeSerializersT>,
      WebClientRecentActivityParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeductibleTaxServiceGetListParameters<DeSerializersT>,
      DeductibleTaxParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      LogoutParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BpVatExemptionsServiceGetListParameters<DeSerializersT>,
      BpVatExemptionsParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WTaxTypeCodeServiceGetWTaxTypeCodeListParameters<DeSerializersT>,
      WTaxTypeCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      RecurringTransactionServiceGetAvailableRecurringTransactionsParameters<DeSerializersT>,
      RclRecurringTransaction[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PaymentReasonCodeServiceGetPaymentReasonCodeListParameters<DeSerializersT>,
      PaymentReasonCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      PredefinedTextsServiceGetPredefinedTextListParameters<DeSerializersT>,
      PredefinedTextParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ExceptionalEventServiceGetExceptionalEventListParameters<DeSerializersT>,
      ExceptionalEventParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IncomingPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ServiceCallProblemSubTypesServiceGetServiceCallProblemSubTypeListParameters<DeSerializersT>,
      ServiceCallProblemSubTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      EmploymentCategoryServiceGetEmploymentCategoryListParameters<DeSerializersT>,
      EmploymentCategoryParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ShortLinkMappingsServiceGetListParameters<DeSerializersT>,
      ShortLinkMappingParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BemReplicationPeriodServiceGetListParameters<DeSerializersT>,
      BemReplicationPeriodParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AccountCategoryServiceGetCategoryListParameters<DeSerializersT>,
      AccountCategoryParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BankChargesAllocationCodesServiceGetBankChargesAllocationCodeListParameters<DeSerializersT>,
      BankChargesAllocationCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BoeDocumentTypesServiceGetBoeDocumentTypeListParameters<DeSerializersT>,
      BoeDocumentTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CashFlowLineItemsServiceGetCashFlowLineItemListParameters<DeSerializersT>,
      CashFlowLineItemParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CampaignResponseTypeServiceGetResponseTypeListParameters<DeSerializersT>,
      CampaignResponseTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MobileAppServiceGetCurrentServerDateTimeParameters<DeSerializersT>,
      MobileServerDateTime | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectManagementConfigurationServiceGetStageTypesParameters<DeSerializersT>,
      PmcStageTypeData[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      IndiaSacCodeServiceGetListParameters<DeSerializersT>,
      IndiaSacCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      FaAccountDeterminationsServiceGetListParameters<DeSerializersT>,
      FaAccountDeterminationParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      NfTaxCategoriesServiceGetListParameters<DeSerializersT>,
      NfTaxCategoryParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TaxCodeDeterminationsTcdServiceGetTaxCodeDeterminationTcdListParameters<DeSerializersT>,
      TaxCodeDeterminationTcdParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BoePortfoliosServiceGetBoePortfolioListParameters<DeSerializersT>,
      BoePortfolioParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      CheckLinesServiceGetValidCheckLineListParameters<DeSerializersT>,
      CheckLineParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ResourcesServiceGetListParameters<DeSerializersT>,
      ResourceParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ResourcePropertiesServiceGetListParameters<DeSerializersT>,
      ResourcePropertyParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ResourceGroupsServiceGetListParameters<DeSerializersT>,
      ResourceGroupParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BoeInstructionsServiceGetBoeInstructionListParameters<DeSerializersT>,
      BoeInstructionParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InventoryOpeningBalancesServiceGetListParameters<DeSerializersT>,
      InventoryOpeningBalanceParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      WebClientListviewFilterServiceGetListParameters<DeSerializersT>,
      WebClientListviewFilterParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseDownPaymentsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      GovPayCodesServiceGetListParameters<DeSerializersT>,
      GovPayCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ItemsServiceInitDataParameters<DeSerializersT>,
      Items | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DepreciationTypesServiceGetListParameters<DeSerializersT>,
      DepreciationTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ElectronicFileFormatsServiceGetElectronicFileFormatListParameters<DeSerializersT>,
      ElectronicFileFormatParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BusinessPartnerPropertiesServiceGetBusinessPartnerPropertyListParameters<DeSerializersT>,
      BusinessPartnerPropertyParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      TransactionCodesServiceGetListParameters<DeSerializersT>,
      TransactionCodeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      VendorPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MobileAddOnSettingServiceGetMobileAddOnSettingListParameters<DeSerializersT>,
      MobileAddOnSettingParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DownPaymentsServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseQuotationsServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      AccrualTypesServiceGetAccrualTypeListParameters<DeSerializersT>,
      AccrualTypeParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ActivitiesServiceInitDataParameters<DeSerializersT>,
      Activities | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      NfModelsServiceGetListParameters<DeSerializersT>,
      NfModelParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      BrazilFuelIndexersServiceGetListParameters<DeSerializersT>,
      BrazilFuelIndexerParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      InventoryGenEntryServiceHandleApprovalRequestParameters<DeSerializersT>,
      undefined
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DistributionRulesServiceGetDistributionRuleListParameters<DeSerializersT>,
      DistributionRuleParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      ProjectsServiceGetProjectListParameters<DeSerializersT>,
      ProjectParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        InventoryGenEntryServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      MessagesServiceGetSentMessagesParameters<DeSerializersT>,
      MessageHeader[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      DeductionTaxSubGroupsServiceGetDeductionTaxSubGroupListParameters<DeSerializersT>,
      DeductionTaxSubGroupParams[] | null
    >
  | Omit<
      OperationRequestBuilder<
        DeSerializersT,
        PurchaseDeliveryNotesServiceInitDataParameters<DeSerializersT>,
        never
      >,
      'execute'
    >
  | OperationRequestBuilder<
      DeSerializersT,
      RouteStagesServiceGetListParameters<DeSerializersT>,
      RouteStageParams[] | null
    >
  | OperationRequestBuilder<
      DeSerializersT,
      SboBobServiceSetSystemPermissionParameters<DeSerializersT>,
      undefined
    >;
